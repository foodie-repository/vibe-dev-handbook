#!/usr/bin/env node
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

import { validateBuiltHtml } from './built-output-validation.mjs';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, '..');
const buildRoot = process.argv[2] ? path.resolve(process.argv[2]) : path.join(projectRoot, 'dist');
const basePath = process.env.PUBLIC_BASE_PATH || '/';

async function collectHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectHtmlFiles(absolutePath)));
    } else if (entry.name.endsWith('.html')) {
      files.push(absolutePath);
    }
  }

  return files.sort();
}

async function main() {
  let files;
  try {
    files = await collectHtmlFiles(buildRoot);
  } catch (error) {
    console.error(`빌드 산출물 폴더를 읽지 못했습니다: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  const errors = [];
  for (const file of files) {
    const source = await readFile(file, 'utf8');
    const relativePath = path.relative(projectRoot, file).split(path.sep).join('/');
    const pagePath = path.relative(buildRoot, file).split(path.sep).join('/');
    errors.push(...validateBuiltHtml(source, relativePath, { basePath, pagePath }));
  }

  try {
    const sourceNotice = await readFile(path.join(projectRoot, 'public', 'third-party-notices.txt'));
    const builtNotice = await readFile(path.join(buildRoot, 'third-party-notices.txt'));
    if (sourceNotice.length === 0) {
      errors.push('public/third-party-notices.txt: 정본 고지 파일이 비어 있습니다.');
    }
    if (!sourceNotice.equals(builtNotice)) {
      errors.push('third-party-notices.txt: 정본과 빌드 고지의 바이트가 다릅니다.');
    }
  } catch (error) {
    errors.push(`third-party-notices.txt: 고지 파일을 읽지 못했습니다: ${error.message}`);
  }

  if (errors.length > 0) {
    console.error(`빌드 산출물 검증 실패: ${errors.length}개 오류`);
    for (const error of errors) console.error(`- ${error}`);
    process.exitCode = 1;
    return;
  }

  console.log(`빌드 산출물 검증 통과: ${files.length}개 HTML, 일반 본문 리터럴 Markdown 0개, 고지 파일 바이트 동일(권리 검토 완료 아님)`);
}

await main();
