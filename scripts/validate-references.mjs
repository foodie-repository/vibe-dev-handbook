#!/usr/bin/env node
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

import {
  validateMarkdownReferences,
  validateSvgAccessibility,
} from './reference-validation.mjs';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, '..');
const diagramRoot = path.join(projectRoot, 'src', 'assets', 'diagrams');
const ignoredDirectories = new Set(['.git', '.worktrees', '.superpowers', 'node_modules', 'dist']);

async function collectFiles(directory, predicate) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(absolutePath, predicate)));
    } else if (predicate(entry.name, absolutePath)) {
      files.push(absolutePath);
    }
  }

  return files.sort();
}

async function main() {
  const markdownFiles = await collectFiles(projectRoot, (name) => /\.mdx?$/.test(name));
  const svgFiles = await collectFiles(
    diagramRoot,
    (name, absolutePath) => name.endsWith('.svg') && !absolutePath.includes(`${path.sep}source${path.sep}`),
  );

  const errors = [];
  for (const file of markdownFiles) {
    const source = await readFile(file, 'utf8');
    errors.push(
      ...(await validateMarkdownReferences({ source, filePath: file, projectRoot })),
    );
  }

  for (const file of svgFiles) {
    const source = await readFile(file, 'utf8');
    const relativePath = path.relative(projectRoot, file);
    errors.push(...validateSvgAccessibility(source, relativePath));
  }

  if (errors.length > 0) {
    console.error(`참조 검증 실패: ${errors.length}개 오류`);
    for (const error of errors) console.error(`- ${error}`);
    process.exitCode = 1;
    return;
  }

  console.log(
    `참조 검증 통과: ${markdownFiles.length}개 Markdown/MDX, ${svgFiles.length}개 학습 SVG`,
  );
}

await main();
