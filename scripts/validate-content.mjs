#!/usr/bin/env node
import { access, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

import {
  parseFrontmatter,
  updateContentMapInventory,
  validateContentMapInventory,
  validateContentText,
  validateReviewEvidencePaths,
} from './content-validation.mjs';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, '..');
const contentRoot = path.join(projectRoot, 'src', 'content', 'docs');

async function collectMarkdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectMarkdownFiles(absolutePath)));
    } else if (/\.mdx?$/.test(entry.name)) {
      files.push(absolutePath);
    }
  }

  return files.sort();
}

async function repositoryPathExists(relativeTarget) {
  const absoluteTarget = path.resolve(projectRoot, relativeTarget);
  const projectPrefix = `${projectRoot}${path.sep}`;
  if (absoluteTarget !== projectRoot && !absoluteTarget.startsWith(projectPrefix)) return false;

  try {
    await access(absoluteTarget);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const argumentsList = process.argv.slice(2);
  const unknownArguments = argumentsList.filter((argument) => argument !== '--write');
  if (unknownArguments.length > 0) {
    console.error(`지원하지 않는 인자: ${unknownArguments.join(', ')}`);
    process.exitCode = 1;
    return;
  }
  const writeMode = argumentsList.includes('--write');

  let files;
  try {
    files = await collectMarkdownFiles(contentRoot);
  } catch (error) {
    console.error(`콘텐츠 폴더를 읽지 못했습니다: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  const allErrors = [];
  const documents = [];
  for (const file of files) {
    const source = await readFile(file, 'utf8');
    const relativePath = path.relative(projectRoot, file);
    allErrors.push(...validateContentText(source, relativePath));
    const { data, body } = parseFrontmatter(source);
    allErrors.push(...await validateReviewEvidencePaths(
      data.reviewEvidence,
      repositoryPathExists,
      relativePath,
    ));
    documents.push({
      path: relativePath.split(path.sep).join('/'),
      status: data.contentStatus,
      bodyLength: [...body].length,
    });
  }

  const contentMapPath = path.join(projectRoot, 'CONTENT_MAP.md');
  const contentMap = await readFile(contentMapPath, 'utf8');
  const contentMapToValidate = writeMode
    ? updateContentMapInventory(contentMap, documents)
    : contentMap;
  allErrors.push(...validateContentMapInventory(contentMapToValidate, documents));

  if (allErrors.length > 0) {
    console.error(`콘텐츠 검증 실패: ${allErrors.length}개 오류`);
    for (const error of allErrors) console.error(`- ${error}`);
    process.exitCode = 1;
    return;
  }

  if (writeMode && contentMapToValidate !== contentMap) {
    await writeFile(contentMapPath, contentMapToValidate, 'utf8');
    console.log('콘텐츠 지도 갱신: CONTENT_MAP.md');
  } else if (writeMode) {
    console.log('콘텐츠 지도 변경 없음: CONTENT_MAP.md');
  }

  console.log(`콘텐츠 검증 통과: ${files.length}개 Markdown/MDX 파일`);
}

await main();
