import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { dirname, extname, join, resolve } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const manifestPath = process.env.PROJECT_MANIFEST_INVENTORY_PATH
  ? resolve(process.env.PROJECT_MANIFEST_INVENTORY_PATH)
  : join(projectRoot, 'PROJECT_MANIFEST.json');

async function directFileNames(directory, extension) {
  const entries = await readdir(directory, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile() && extname(entry.name) === extension)
    .map((entry) => entry.name)
    .sort();
}

test('매니페스트의 학습 SVG와 Mermaid 원본 재고는 직접 파일과 일대일로 일치한다', async () => {
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
  const svgNames = await directFileNames(join(projectRoot, 'src/assets/diagrams'), '.svg');
  const mermaidNames = await directFileNames(join(projectRoot, 'src/assets/diagrams/source'), '.mmd');
  const svgBasenames = svgNames.map((name) => name.slice(0, -extname(name).length));
  const mermaidBasenames = mermaidNames.map((name) => name.slice(0, -extname(name).length));

  assert.deepEqual(svgBasenames, mermaidBasenames);
  assert.equal(manifest.inventory.learningSvgs, svgNames.length);
  assert.equal(manifest.inventory.mermaidSources, mermaidNames.length);
});
