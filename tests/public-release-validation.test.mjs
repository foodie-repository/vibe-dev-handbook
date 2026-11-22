import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdir, mkdtemp, readFile, rename, rm, symlink, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { collectTrackedFiles, scanPublicReleaseText, validatePublicRelease } from '../scripts/validate-public-release.mjs';

const script = fileURLToPath(new URL('../scripts/validate-public-release.mjs', import.meta.url));
// These assembled, repetitive values are synthetic test inputs, never usable credentials.
const syntheticToken = ['sk', 'proj', 'Ab12'.repeat(12)].join('-');
const syntheticSession = ['12345678', '1234', '4234', '8234', '123456789012'].join('-');
const syntheticEmail = ['unit-reader', 'release-fixture.invalid'].join('@');
const syntheticPassword = ['Unit', 'Only', '42!'].join('');
const syntheticUserPath = ['/', 'Users', '/', 'unit-reader', '/project'].join('');
const syntheticCost = ['12', '345678'].join('.');

function git(root, ...args) {
  const result = spawnSync('git', ['-C', root, '-c', 'core.fsmonitor=false', ...args], {
    encoding: 'utf8',
    env: { PATH: process.env.PATH, GIT_CONFIG_NOSYSTEM: '1', GIT_CONFIG_GLOBAL: '/dev/null' },
  });
  assert.equal(result.status, 0, 'temporary fixture Git operation must succeed');
  return result.stdout;
}

async function repository(t) {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'handbook-release-test-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  git(directory, 'init', '-q');
  return directory;
}

async function tracked(root, file, content = '') {
  await mkdir(path.dirname(path.join(root, file)), { recursive: true });
  await writeFile(path.join(root, file), content);
  git(root, 'add', '--', file);
}

// Removing a rule must lose the corresponding independently specified finding.
for (const [name, source, rule] of [
  ['OpenAI', syntheticToken, 'openai-token'],
  ['Anthropic', ['sk', 'ant', 'api03', 'Cd34'.repeat(12)].join('-'), 'anthropic-token'],
  ['GitHub classic', ['ghp', 'Ef56'.repeat(9)].join('_'), 'github-token'],
  ['GitHub fine-grained', ['github', 'pat', 'Gh78'.repeat(20)].join('_'), 'github-token'],
  ['private key', ['-----BEGIN ', 'RSA PRIVATE KEY-----'].join(''), 'private-key'],
  ['password assignment', `password = "${syntheticPassword}"`, 'password-assignment'],
  ['connection password', `postgresql://reader:${syntheticPassword}@db.production.invalid/app`, 'connection-password'],
  ['macOS personal path', syntheticUserPath, 'personal-home-path'],
  ['Linux personal path', ['/', 'home', '/', 'unit-reader', '/project'].join(''), 'personal-home-path'],
  ['Claude session', `Claude session_id: ${syntheticSession}`, 'execution-session-id'],
  ['Korean session', `세션 ID: ${syntheticSession}`, 'execution-session-id'],
  ['Claude exact USD', `Claude 총 비용 표시: USD ${syntheticCost}`, 'execution-cost'],
  ['JSON cost', '"total_cost_usd": ' + ['0', '012345'].join('.'), 'execution-cost'],
  ['account email', `Claude accountEmail: ${syntheticEmail}`, 'account-email'],
  ['organization identifier', `organization_id: ${syntheticSession}`, 'organization-id'],
]) {
  test(`${name}: 실제처럼 보이는 합성 입력을 값 없이 보고한다`, () => {
    assert.deepEqual(scanPublicReleaseText(`안내\r\n${source}\r\n끝`, 'fixture.md'), [
      { file: 'fixture.md', rule, line: 2 },
    ]);
  });
}

test('허용된 가상 예시와 범용 임시 경로는 오류가 아니다', () => {
  const source = [
    'token=fake-token; password="fake-password"',
    'password="<your-password>"; password="${DATABASE_PASSWORD}"',
    'postgresql://demo-user:demo-password@db.example.com/app',
    '/Users/demo-user/project; /home/example-user/project; /Users/사용자명/project',
    '/private/tmp/release-snapshot; https://example.com; 계정 이메일: reader@example.com',
    'Claude session_id: <session-id>; organization_id: demo-org; USD per million tokens: 3.00',
    'sk-fake-token; sk-ant-example-token; ghp_fake-token',
  ].join('\n');
  assert.deepEqual(scanPublicReleaseText(source, 'examples.md'), []);
});

test('같은 줄의 fake-token과 example.com은 다른 실제형 값을 숨기지 않는다', () => {
  const source = `fake-token https://example.com ${syntheticToken} account_email=${syntheticEmail} ${syntheticUserPath}`;
  const findings = scanPublicReleaseText(source, 'mixed.md');
  assert.deepEqual(findings.map(({ rule }) => rule).sort(), ['account-email', 'openai-token', 'personal-home-path']);
  const serialized = JSON.stringify(findings);
  for (const value of [syntheticToken, syntheticEmail, syntheticUserPath]) assert.equal(serialized.includes(value), false);
});

test('example.com 연결 호스트도 실제형 비밀번호를 허용하지 않는다', () => {
  assert.deepEqual(scanPublicReleaseText(`postgresql://demo-user:${syntheticPassword}@example.com/app`, 'mixed.md'), [
    { file: 'mixed.md', rule: 'connection-password', line: 1 },
  ]);
});

test('동일 행·규칙은 한 finding이며 여러 행은 각각 보고한다', () => {
  assert.deepEqual(scanPublicReleaseText(`${syntheticToken} ${syntheticToken}\n${syntheticToken}`, 'repeat.md'), [
    { file: 'repeat.md', rule: 'openai-token', line: 1 },
    { file: 'repeat.md', rule: 'openai-token', line: 2 },
  ]);
});

test('환경변수형 비밀번호 이름도 실제형 대입 값을 탐지한다', () => {
  assert.deepEqual(scanPublicReleaseText(`DB_PASSWORD="${syntheticPassword}"`, 'config-example.md'), [
    { file: 'config-example.md', rule: 'password-assignment', line: 1 },
  ]);
});

test('긴 x 토큰 예시만 허용하고 같은 규칙의 뒤쪽 실제형 토큰은 탐지한다', () => {
  const placeholder = ['sk', 'proj', 'x'.repeat(48)].join('-');
  assert.deepEqual(scanPublicReleaseText(placeholder, 'placeholder.md'), []);
  assert.deepEqual(scanPublicReleaseText(`${placeholder} ${syntheticToken}`, 'mixed.md'), [
    { file: 'mixed.md', rule: 'openai-token', line: 1 },
  ]);
});

test('Claude emailAddress와 organizationUuid 실행 필드를 탐지한다', () => {
  assert.deepEqual(scanPublicReleaseText(`Claude emailAddress: ${syntheticEmail}\norganizationUuid: ${syntheticSession}`, 'review.md'), [
    { file: 'review.md', rule: 'account-email', line: 1 },
    { file: 'review.md', rule: 'organization-id', line: 2 },
  ]);
});

test('달러 표시 총 실행 비용은 잡고 일반 가격 설명은 잡지 않는다', () => {
  assert.deepEqual(scanPublicReleaseText(`Claude total cost: $${syntheticCost}\n가격은 USD 3.00 / 백만 토큰입니다.`, 'review.md'), [
    { file: 'review.md', rule: 'execution-cost', line: 1 },
  ]);
});

test('공식 출처 URL 내부의 Users 경로는 개인 로컬 경로가 아니다', () => {
  const url = ['https://standards.example.com', 'Users', 'public-guide', 'manual.html'].join('/');
  assert.deepEqual(scanPublicReleaseText(url, 'sources.md'), []);
  assert.deepEqual(scanPublicReleaseText(`${url} ${syntheticUserPath}`, 'sources.md'), [
    { file: 'sources.md', rule: 'personal-home-path', line: 1 },
  ]);
});

test('검색 정규식의 alternation 문자를 개인 사용자명으로 오인하지 않는다', () => {
  const source = ['/', 'Users/', '|/private/tmp/'].join('');
  assert.deepEqual(scanPublicReleaseText(source, 'audit-plan.md'), []);
});

test('파일명 안의 모든 실제형 민감값도 API 출력에서 마스킹한다', () => {
  const file = ['docs', ['session_id', syntheticSession].join('='), ['organization_id', syntheticSession].join('='), ['cost', ['USD', syntheticCost].join(' ')].join('='), ['password', syntheticPassword].join('='), ['postgresql', `//reader:${syntheticPassword}@db.production.invalid`].join(':'), 'Users', 'unit-reader', `${syntheticToken}-${syntheticEmail}.md`].join('/');
  const findings = scanPublicReleaseText(syntheticToken, file);
  assert.equal(findings.length, 1);
  const output = JSON.stringify(findings);
  for (const value of [syntheticToken, syntheticSession, syntheticCost, syntheticPassword, syntheticUserPath, '/Users/unit-reader', syntheticEmail]) {
    assert.equal(output.includes(value), false);
  }
});

test('금지 디렉터리의 tracked 파일은 내용을 읽지 않고 blocked finding으로 센다', async (t) => {
  const root = await repository(t);
  await tracked(root, 'chapter with space.md', '정상 본문');
  await tracked(root, '한글\n문서.md', '정상 본문');
  const forbidden = ['.worktrees/nested/item.md', 'worktrees/item.md', 'node_modules/pkg/item.md', 'dist/item.md', '.playwright/item.md', '.playwright-cli/item.md', '.cache/ms-playwright/item.md', 'browser-cache/item.md'];
  for (const file of forbidden) {
    await tracked(root, file, syntheticToken);
  }
  await writeFile(path.join(root, 'untracked.md'), syntheticToken);
  await tracked(root, '.gitignore', 'ignored.md\n');
  await writeFile(path.join(root, 'ignored.md'), syntheticToken);
  assert.deepEqual(await collectTrackedFiles(root), ['.gitignore', ...forbidden, 'chapter with space.md', '한글\n문서.md'].sort());
  const result = await validatePublicRelease(root);
  assert.equal(result.trackedFiles, 11);
  assert.equal(result.scannedFiles, 3);
  assert.equal(result.forbiddenTrackedFiles, 8);
  assert.equal(result.findings.length, 8);
  assert.deepEqual(result.counts, { 'forbidden-tracked-path': 8 });
  assert.ok(result.findings.every(({ rule, line }) => rule === 'forbidden-tracked-path' && line === 0));
});

test('현재 working tree를 검사하되 Git index·원본·untracked를 변경하지 않는다', async (t) => {
  const root = await repository(t);
  await tracked(root, 'chapter.md', '정상 본문');
  await writeFile(path.join(root, 'chapter.md'), syntheticToken);
  await writeFile(path.join(root, 'untracked.md'), syntheticToken);
  const indexBefore = await readFile(path.join(root, '.git/index'));
  const result = await validatePublicRelease(root);
  assert.deepEqual(result.findings, [{ file: 'chapter.md', rule: 'openai-token', line: 1 }]);
  assert.deepEqual(result.counts, { 'openai-token': 1 });
  assert.equal(result.scannedFiles, 1);
  assert.deepEqual(await readFile(path.join(root, '.git/index')), indexBefore);
  assert.equal(await readFile(path.join(root, 'chapter.md'), 'utf8'), syntheticToken);
});

test('binary 내용은 해석하지 않고 파일명만 건너뜀으로 보고한다', async (t) => {
  const root = await repository(t);
  await tracked(root, 'binary.dat', Buffer.concat([Buffer.from([0, 255, 1]), Buffer.from(syntheticToken)]));
  const result = await validatePublicRelease(root);
  assert.deepEqual(result.findings, []);
  assert.deepEqual(result.skippedBinaryFiles, ['binary.dat']);
  assert.equal(result.scannedFiles, 0);
  assert.equal(JSON.stringify(result).includes(syntheticToken), false);
});

test('민감 파일 경로는 내용을 읽지 않고 blocked finding을 만든다', async (t) => {
  const root = await repository(t);
  for (const file of ['.env', '.ssh/id_rsa', '.aws/credentials', '.claude/settings.json', 'login.keychain-db']) {
    await tracked(root, file, syntheticToken);
  }
  const result = await validatePublicRelease(root);
  assert.equal(result.scannedFiles, 0);
  assert.equal(result.findings.length, 5);
  assert.ok(result.findings.every(({ rule, line }) => rule === 'sensitive-file' && line === 0));
});

test('저장소 밖·민감 디렉터리·일반 파일 symlink를 따라가지 않는다', async (t) => {
  const root = await repository(t);
  await tracked(root, 'safe.md', '정상 본문');
  await tracked(root, '.env', syntheticToken);
  const outside = await mkdtemp(path.join(os.tmpdir(), 'handbook-release-outside-'));
  t.after(() => rm(outside, { recursive: true, force: true }));
  await writeFile(path.join(outside, 'outside.md'), syntheticToken);
  for (const [name, target] of [['external.md', path.join(outside, 'outside.md')], ['sensitive.md', '.env'], ['internal.md', 'safe.md']]) {
    await symlink(target, path.join(root, name));
    git(root, 'add', '--', name);
  }
  const result = await validatePublicRelease(root);
  assert.deepEqual(result.counts, { 'sensitive-file': 1, 'unsafe-file': 3 });
  assert.equal(result.scannedFiles, 1);
});

test('tracked 파일의 부모 디렉터리가 symlink로 교체되면 읽지 않는다', async (t) => {
  const root = await repository(t);
  await tracked(root, 'chapter/input.md', '정상 본문');
  await rename(path.join(root, 'chapter'), path.join(root, 'moved'));
  await symlink('moved', path.join(root, 'chapter'));
  const result = await validatePublicRelease(root);
  assert.deepEqual(result.findings, [{ file: 'chapter/input.md', rule: 'unsafe-file', line: 0 }]);
  assert.equal(result.scannedFiles, 0);
});

test('누락된 tracked 파일을 조용히 성공 처리하지 않는다', async (t) => {
  const root = await repository(t);
  await tracked(root, 'missing.md', '정상 본문');
  await rm(path.join(root, 'missing.md'));
  const result = await validatePublicRelease(root);
  assert.deepEqual(result.findings, [{ file: 'missing.md', rule: 'unreadable-file', line: 0 }]);
});

test('Git 저장소 하위 경로를 전체 snapshot으로 오인하지 않는다', async (t) => {
  const root = await repository(t);
  await tracked(root, 'docs/chapter.md', '정상 본문');
  await assert.rejects(collectTrackedFiles(path.join(root, 'docs')), /tracked-files-unavailable/);
});

test('CLI는 합성 비밀값 없이 실패 exit와 파일·규칙·행·건수를 출력한다', async (t) => {
  const root = await repository(t);
  await tracked(root, 'risk.md', `안내\n${syntheticToken}\nClaude account_email: ${syntheticEmail}\n`);
  const result = spawnSync(process.execPath, [script, root], { encoding: 'utf8' });
  assert.equal(result.status, 1);
  const output = result.stdout + result.stderr;
  for (const value of [syntheticToken, syntheticEmail, root]) assert.equal(output.includes(value), false);
  const records = result.stdout.trim().split('\n').map((line) => JSON.parse(line));
  assert.ok(records.some((entry) => entry.file === 'risk.md' && entry.rule === 'openai-token' && entry.line === 2));
  assert.ok(records.some((entry) => entry.findingCount === 2 && entry.counts['account-email'] === 1));
});

test('CLI도 상대 파일명의 민감값을 노출하지 않는다', async (t) => {
  const root = await repository(t);
  const file = ['reports', ['session_id', syntheticSession].join('='), ['organization_id', syntheticSession].join('='), ['cost', ['USD', syntheticCost].join(' ')].join('='), ['password', syntheticPassword].join('='), 'Users', 'unit-reader', `${syntheticToken}-${syntheticEmail}.md`].join('/');
  await tracked(root, file, syntheticToken);
  const result = spawnSync(process.execPath, [script, root], { encoding: 'utf8' });
  assert.equal(result.status, 1);
  const output = result.stdout + result.stderr;
  for (const value of [syntheticToken, syntheticSession, syntheticCost, syntheticPassword, '/Users/unit-reader', syntheticEmail, root]) {
    assert.equal(output.includes(value), false);
  }
});

test('CLI는 정상 tracked snapshot에서 종료 0이며 가상 예시와 untracked는 허용한다', async (t) => {
  const root = await repository(t);
  await tracked(root, 'safe.md', 'password="fake-password"\n/Users/demo-user/project\n');
  await writeFile(path.join(root, 'untracked.md'), syntheticToken);
  const result = spawnSync(process.execPath, [script, root], { encoding: 'utf8' });
  assert.equal(result.status, 0);
  assert.equal(result.stderr, '');
  assert.equal(JSON.parse(result.stdout.trim()).findingCount, 0);
});

test('CLI의 Git 실패도 절대 경로나 원래 예외 내용을 노출하지 않는다', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'handbook-release-not-git-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const result = spawnSync(process.execPath, [script, root], { encoding: 'utf8' });
  assert.equal(result.status, 2);
  assert.equal((result.stdout + result.stderr).includes(root), false);
  assert.deepEqual(JSON.parse(result.stderr.trim()), { file: '.', rule: 'tracked-files-unavailable', line: 0 });
});
