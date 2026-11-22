import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);
const projectRoot = path.resolve(import.meta.dirname, '..');
const validationScript = path.join(projectRoot, 'scripts', 'validate-references.mjs');

test('참조 검증은 .worktrees 아래의 Markdown을 검사 대상에서 제외한다', async (t) => {
  const worktreesRoot = path.join(projectRoot, '.worktrees');
  await mkdir(worktreesRoot, { recursive: true });
  const fixtureRoot = await mkdtemp(path.join(worktreesRoot, 'reference-validation-'));
  t.after(() => rm(fixtureRoot, { recursive: true, force: true }));
  await writeFile(path.join(fixtureRoot, 'broken.md'), '[없는 문서](./missing.md)\n', 'utf8');

  const { stdout } = await execFileAsync(process.execPath, [validationScript], {
    cwd: projectRoot,
  });

  assert.match(stdout, /참조 검증 통과/);
});

test('참조 검증은 비공개 .superpowers 조사 원문을 검사 대상에서 제외한다', async (t) => {
  const localRoot = path.join(projectRoot, '.superpowers');
  await mkdir(localRoot, { recursive: true });
  const fixtureRoot = await mkdtemp(path.join(localRoot, 'reference-validation-'));
  t.after(() => rm(fixtureRoot, { recursive: true, force: true }));
  await writeFile(path.join(fixtureRoot, 'source.md'), '[외부 원문의 앵커](#unavailable-in-extract)\n', 'utf8');
  const { stdout } = await execFileAsync(process.execPath, [validationScript], { cwd: projectRoot });
  assert.match(stdout, /참조 검증 통과/);
});
