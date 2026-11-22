import assert from 'node:assert/strict';
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

import {
  collectMarkdownHeadingAnchors,
  validateMarkdownReferences,
  validateSvgAccessibility,
} from '../scripts/reference-validation.mjs';

test('존재하는 상대 링크와 대체 텍스트가 있는 이미지는 유효하다', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'handbook-links-'));
  t.after(() => rm(root, { recursive: true, force: true }));

  const docs = path.join(root, 'docs');
  const images = path.join(root, 'images');
  await mkdir(docs, { recursive: true });
  await mkdir(images, { recursive: true });
  await writeFile(path.join(docs, 'target.md'), '# 대상\n', 'utf8');
  await writeFile(path.join(images, 'flow.svg'), '<svg></svg>\n', 'utf8');

  const source = '[대상](./target.md)\n\n![흐름도](../images/flow.svg)\n';
  const errors = await validateMarkdownReferences({
    source,
    filePath: path.join(docs, 'source.md'),
    projectRoot: root,
  });

  assert.deepEqual(errors, []);
});

test('존재하지 않는 로컬 링크는 구체적인 오류를 반환한다', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'handbook-links-'));
  t.after(() => rm(root, { recursive: true, force: true }));

  const docs = path.join(root, 'docs');
  await mkdir(docs, { recursive: true });

  const errors = await validateMarkdownReferences({
    source: '[없는 문서](./missing.md)',
    filePath: path.join(docs, 'source.md'),
    projectRoot: root,
  });

  assert.equal(errors.length, 1);
  assert.match(errors[0], /missing\.md/);
});

test('콘텐츠 문서의 상대 링크는 공개 라우트 깊이로도 검증한다', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'handbook-routes-'));
  t.after(() => rm(root, { recursive: true, force: true }));

  const docs = path.join(root, 'src', 'content', 'docs');
  const startHere = path.join(docs, 'start-here');
  const fullStack = path.join(docs, '03-full-stack');
  await mkdir(startHere, { recursive: true });
  await mkdir(fullStack, { recursive: true });
  await writeFile(path.join(fullStack, 'http-request-response.md'), '# HTTP\n', 'utf8');

  const validErrors = await validateMarkdownReferences({
    source: '[HTTP](../../03-full-stack/http-request-response/)',
    filePath: path.join(startHere, 'learning-paths.md'),
    projectRoot: root,
  });
  const invalidErrors = await validateMarkdownReferences({
    source: '[HTTP](../03-full-stack/http-request-response/)',
    filePath: path.join(startHere, 'learning-paths.md'),
    projectRoot: root,
  });

  assert.deepEqual(validErrors, []);
  assert.equal(invalidErrors.length, 1);
});

test('한글·구두점·중복 Markdown 제목의 앵커를 Starlight 형식으로 계산한다', () => {
  const source = `## 빠른 지도: 전체 지형부터

## 반복 제목

## 반복 제목

\`\`\`md
## 코드 블록 제목
\`\`\`
`;

  assert.deepEqual(
    [...collectMarkdownHeadingAnchors(source)],
    ['빠른-지도-전체-지형부터', '반복-제목', '반복-제목-1'],
  );
});

test('존재하는 문서 앵커와 현재 문서 앵커는 유효하다', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'handbook-anchors-'));
  t.after(() => rm(root, { recursive: true, force: true }));

  const docs = path.join(root, 'docs');
  await mkdir(docs, { recursive: true });
  await writeFile(path.join(docs, 'target.md'), '## 빠른 지도: 전체 지형부터\n\n## 반복\n\n## 반복\n', 'utf8');
  const source = '## 현재 절\n\n[현재](#현재-절)\n[대상](./target.md#빠른-지도-전체-지형부터)\n[중복](./target.md#반복-1)\n';

  const errors = await validateMarkdownReferences({
    source,
    filePath: path.join(docs, 'source.md'),
    projectRoot: root,
  });

  assert.deepEqual(errors, []);
});

test('존재하지 않는 Markdown 앵커는 대상 파일과 fragment를 포함한 오류를 반환한다', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'handbook-anchors-'));
  t.after(() => rm(root, { recursive: true, force: true }));

  const docs = path.join(root, 'docs');
  await mkdir(docs, { recursive: true });
  await writeFile(path.join(docs, 'target.md'), '## 실제 제목\n', 'utf8');

  const errors = await validateMarkdownReferences({
    source: '[깨진 앵커](./target.md#없는-제목)',
    filePath: path.join(docs, 'source.md'),
    projectRoot: root,
  });

  assert.equal(errors.length, 1);
  assert.match(errors[0], /target\.md/);
  assert.match(errors[0], /#없는-제목/);
});

test('학습 다이어그램 SVG에는 title과 desc가 모두 필요하다', () => {
  const valid = '<svg xmlns="http://www.w3.org/2000/svg"><title>제목</title><desc>설명</desc></svg>';
  const invalid = '<svg xmlns="http://www.w3.org/2000/svg"><title>제목</title></svg>';

  assert.deepEqual(validateSvgAccessibility(valid, 'valid.svg'), []);
  assert.ok(validateSvgAccessibility(invalid, 'invalid.svg').some((error) => error.includes('desc')));
});
