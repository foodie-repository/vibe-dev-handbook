import assert from 'node:assert/strict';
import { copyFile, mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { validateBuiltHtml } from '../scripts/built-output-validation.mjs';

async function createCliFixture(t, {
  sourceNotice = '교육용 가상 고지\r\nCopyright (c) Example\r\n',
  builtNotice = sourceNotice,
  html = '<main>정상 본문</main>',
} = {}) {
  const fixtureRoot = await mkdtemp(path.join(os.tmpdir(), 'handbook-built-validation-'));
  t.after(() => rm(fixtureRoot, { recursive: true, force: true }));
  const buildRoot = path.join(fixtureRoot, 'dist');
  for (const directory of ['scripts', 'public', 'dist']) {
    await mkdir(path.join(fixtureRoot, directory));
  }
  for (const filename of ['validate-built-output.mjs', 'built-output-validation.mjs']) {
    await copyFile(fileURLToPath(new URL(`../scripts/${filename}`, import.meta.url)), path.join(fixtureRoot, 'scripts', filename));
  }
  await writeFile(path.join(buildRoot, 'index.html'), html);
  if (sourceNotice !== null) await writeFile(path.join(fixtureRoot, 'public', 'third-party-notices.txt'), sourceNotice);
  if (builtNotice !== null) await writeFile(path.join(buildRoot, 'third-party-notices.txt'), builtNotice);
  return { buildRoot, script: path.join(fixtureRoot, 'scripts', 'validate-built-output.mjs') };
}

test('빌드 HTML 본문의 정상 strong 요소는 유효하다', () => {
  const source = '<html><body><main><p><strong>클라이언트(client)</strong>는 요청을 보냅니다.</p></main></body></html>';
  assert.deepEqual(validateBuiltHtml(source, 'valid.html'), []);
});

test('빌드 HTML 일반 본문에 남은 리터럴 굵은 Markdown은 오류다', () => {
  const source = '<html><body><main><p>**클라이언트(client)**는 요청을 보냅니다.</p></main></body></html>';
  const errors = validateBuiltHtml(source, 'broken.html');
  assert.ok(errors.some((error) => error.includes('broken.html') && error.includes('리터럴 Markdown')));
});

test('코드 예시와 main 바깥의 리터럴 Markdown은 본문 오류로 오인하지 않는다', () => {
  const source = '<html><script>const marker = "**";</script><body><main><pre><code>**용어**</code></pre><p>정상 본문</p></main></body></html>';
  assert.deepEqual(validateBuiltHtml(source, 'example.html'), []);
});

test('main이 없는 빌드 HTML은 검사 누락으로 처리한다', () => {
  const source = '<html><body><p>본문처럼 보이는 내용</p></body></html>';
  const errors = validateBuiltHtml(source, 'missing-main.html');
  assert.ok(errors.some((error) => error.includes('main') && error.includes('찾지 못했습니다')));
});

test('하위 경로 빌드에서 원점 루트로 빠지는 본문 링크 네 개를 검출한다', () => {
  const source = `<main>
    <a href="/reference/development-glossary/">용어집</a>
    <a href="/02-work-environment/files-folders-paths/">경로</a>
    <a href="/02-work-environment/terminal-processes-ports/">터미널</a>
    <a href="/01-mental-models/software-is-a-system/">시스템</a>
  </main>`;
  const errors = validateBuiltHtml(source, 'dependencies.html', {
    basePath: '/handbook/',
    pagePath: '02-work-environment/dependencies-package-managers-environments/index.html',
  });
  assert.equal(errors.length, 4);
  for (const target of [
    '/reference/development-glossary/',
    '/02-work-environment/files-folders-paths/',
    '/02-work-environment/terminal-processes-ports/',
    '/01-mental-models/software-is-a-system/',
  ]) {
    assert.ok(errors.some((error) => error.includes('dependencies.html') && error.includes(target)));
  }
});

test('하위 경로 밖의 자산과 상대 링크도 URL 해석 뒤 검출한다', () => {
  const cases = [
    ['<link rel="stylesheet" href="/styles.css">', '/styles.css'],
    ["<link href='/favicon.svg' rel='icon'>", '/favicon.svg'],
    ['<link rel="modulepreload" href="/_astro/app.js">', '/_astro/app.js'],
    ['<script src="/app.js"></script>', '/app.js'],
    ['<img src="/diagram.svg" alt="개요">', '/diagram.svg'],
    ['<a href="../../../reference/">참고</a>', '/reference/'],
    ['<a href="/handbook-other/">비슷한 접두사</a>', '/handbook-other/'],
    ['<a href="/handbook/../outside/">상위 경로</a>', '/outside/'],
  ];
  for (const [element, target] of cases) {
    const errors = validateBuiltHtml(`<head>${element}</head><main>본문</main>`, 'nested.html', {
      basePath: '/handbook/',
      pagePath: 'section/chapter/index.html',
    });
    assert.equal(errors.length, 1, element);
    assert.ok(errors[0].includes(target), element);
  }
});

test('정상 하위 경로와 외부 URL 및 메타데이터를 경로 이탈로 오인하지 않는다', () => {
  const source = `<head>
    <link rel="canonical" href="/404/">
    <link rel="stylesheet" href="/handbook/styles.css">
    <script>const example = '<a href="/not-a-link/">';</script>
  </head><body>
    <!-- <img src="/not-an-image.svg"> -->
    <main>
      <a href="../../reference/development-glossary/">용어집</a>
      <a href="../files-folders-paths/">경로</a>
      <a href="/handbook/reference/?q=test&amp;page=1#term">참고</a>
      <a href="#section">현재 문서</a><a href="?q=term">쿼리</a>
      <a href="https://example.com/reference/">외부</a>
      <a href="//cdn.example.com/reference/">외부 프로토콜 상대 URL</a>
      <a href="mailto:example@example.com">메일</a><a href="tel:000">전화</a>
      <img src="data:image/svg+xml,example" alt="예제">
      <img src="/handbook/diagram.svg" alt="개요">
      <pre><code>&lt;a href="/example/"&gt;</code></pre>
    </main>
  </body>`;
  assert.deepEqual(validateBuiltHtml(source, 'valid.html', {
    basePath: '/handbook',
    pagePath: '02-work-environment/dependencies-package-managers-environments/index.html',
  }), []);
});

test('기본 루트 빌드에서는 루트 절대 링크를 허용한다', () => {
  const source = '<main><a href="/reference/">참고</a><img src="/diagram.svg" alt="개요"></main>';
  assert.deepEqual(validateBuiltHtml(source, 'root.html'), []);
  assert.deepEqual(validateBuiltHtml(source, 'root.html', { basePath: '/' }), []);
});

test('CLI는 지정된 빌드 폴더와 PUBLIC_BASE_PATH로 경로 이탈 시 실패한다', async (t) => {
  const { buildRoot, script } = await createCliFixture(t, {
    html: '<main><a href="/reference/">참고</a></main>',
  });
  const failed = spawnSync(process.execPath, [script, buildRoot], {
    encoding: 'utf8',
    env: { ...process.env, PUBLIC_BASE_PATH: '/handbook/' },
  });
  assert.equal(failed.status, 1);
  assert.match(failed.stderr, /\/reference\//);

  const root = spawnSync(process.execPath, [script, buildRoot], {
    encoding: 'utf8',
    env: { ...process.env, PUBLIC_BASE_PATH: '/' },
  });
  assert.equal(root.status, 0, root.stderr);
  assert.match(root.stdout, /1개 HTML/);
});

for (const [name, options] of [
  ['정본 고지가 누락되면', { sourceNotice: null, builtNotice: '교육용 가상 고지\n' }],
  ['빌드 고지가 누락되면', { builtNotice: null }],
  ['정본과 빌드 고지가 모두 빈 파일이면', { sourceNotice: '', builtNotice: '' }],
  ['고지 내용이 바뀌면', { sourceNotice: '교육용 가상 고지 A\n', builtNotice: '교육용 가상 고지 B\n' }],
  ['고지의 줄바꿈 바이트만 바뀌어도', { sourceNotice: '교육용 가상 고지\r\n', builtNotice: '교육용 가상 고지\n' }],
  ['같은 대체 문자로 디코딩되는 바이트도 다르면', { sourceNotice: Buffer.from([0xff]), builtNotice: Buffer.from([0xfe]) }],
]) {
  test(`CLI는 ${name} 고지 운반 오류로 실패한다`, async (t) => {
    const { buildRoot, script } = await createCliFixture(t, options);
    const result = spawnSync(process.execPath, [script, buildRoot], {
      encoding: 'utf8',
      env: { ...process.env, PUBLIC_BASE_PATH: '/' },
    });
    assert.equal(result.status, 1, result.stdout + result.stderr);
    assert.match(result.stderr, /third-party-notices\.txt/);
  });
}

test('CLI는 비어 있지 않은 고지를 줄바꿈 포함 동일한 바이트로 전달하면 통과한다', async (t) => {
  const { buildRoot, script } = await createCliFixture(t);
  const result = spawnSync(process.execPath, [script, buildRoot], {
    encoding: 'utf8',
    env: { ...process.env, PUBLIC_BASE_PATH: '/' },
  });
  assert.equal(result.status, 0, result.stderr);
  assert.equal(result.stderr, '');
});
