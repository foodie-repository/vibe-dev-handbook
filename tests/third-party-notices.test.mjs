import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const noticePath = new URL('../public/third-party-notices.txt', import.meta.url);
const startMarker = '[원 고지 시작: minicbor]\n';
const endMarker = '[원 고지 끝: minicbor]';
const adequateStartMarker = '[원 고지 시작: adequate-little-templates]\n';
const adequateEndMarker = '[원 고지 끝: adequate-little-templates]';
const uniconsStartMarker = '[원 고지 시작: unicons]\n';
const uniconsEndMarker = '[원 고지 끝: unicons]';

async function readMinicborNotice() {
  const source = await readFile(noticePath, 'utf8');
  assert.equal(source.split(startMarker).length - 1, 1, 'minicbor 원 고지 시작 표식은 정확히 한 번이어야 합니다.');
  assert.equal(source.split(endMarker).length - 1, 1, 'minicbor 원 고지 끝 표식은 정확히 한 번이어야 합니다.');
  const start = source.indexOf(startMarker) + startMarker.length;
  const end = source.indexOf(endMarker, start);
  assert.ok(start >= startMarker.length && end > start, 'minicbor 원 고지 구획을 찾을 수 있어야 합니다.');
  return { license: source.slice(start, end), source };
}

test('minicbor 2.2.1 Blue Oak 원문을 byte exact로 공개 고지에 보존한다', async () => {
  const { license } = await readMinicborNotice();
  assert.equal(createHash('sha256').update(license).digest('hex'), '79860758b46e85f70a1762c21a8fff4f2d220d89f9bdca096e12aed15b9951c5');
});

test('minicbor 고지는 공식 원문 링크와 미해결 권리 경계를 함께 밝힌다', async () => {
  const { source } = await readMinicborNotice();
  assert.match(source, /https:\/\/docs\.rs\/crate\/minicbor\/2\.2\.1\/source\/LICENSE\.md/);
  assert.match(source, /https:\/\/blueoakcouncil\.org\/license\/1\.0\.0/);
  assert.match(source, /RIGHTS-08 전체 해소가 아닙니다/);
});

async function readAdequateNotice() {
  const source = await readFile(noticePath, 'utf8');
  assert.equal(source.split(adequateStartMarker).length - 1, 1, 'adequate-little-templates 원 고지 시작 표식은 정확히 한 번이어야 합니다.');
  assert.equal(source.split(adequateEndMarker).length - 1, 1, 'adequate-little-templates 원 고지 끝 표식은 정확히 한 번이어야 합니다.');
  const start = source.indexOf(adequateStartMarker) + adequateStartMarker.length;
  const end = source.indexOf(adequateEndMarker, start);
  assert.ok(start >= adequateStartMarker.length && end > start, 'adequate-little-templates 원 고지 구획을 찾을 수 있어야 합니다.');
  return { license: source.slice(start, end), source };
}

test('adequate-little-templates 1.0.2 MIT 원문을 byte exact로 공개 고지에 보존한다', async () => {
  const { license } = await readAdequateNotice();
  assert.equal(createHash('sha256').update(license).digest('hex'), '497af9803b5f4c55e5f81ce326d39b1bd1a6681b520c62a2414f68d706bfb604');
});

test('adequate-little-templates 고지는 고정 원문 링크와 미해결 권리 경계를 함께 밝힌다', async () => {
  const { source } = await readAdequateNotice();
  assert.match(source, /https:\/\/registry\.npmjs\.org\/adequate-little-templates\/-\/adequate-little-templates-1\.0\.2\.tgz/);
  assert.match(source, /https:\/\/github\.com\/bglw\/adequate-little-templates\/blob\/47d207b7840a5e7ea847e1f630454d81ee3ad16e\/LICENSE/);
  assert.match(source, /RIGHTS-03\/04 전체 해소가 아닙니다/);
});

async function readUniconsNotice() {
  const source = await readFile(noticePath, 'utf8');
  assert.equal(source.split(uniconsStartMarker).length - 1, 1, 'Unicons 원 고지 시작 표식은 정확히 한 번이어야 합니다.');
  assert.equal(source.split(uniconsEndMarker).length - 1, 1, 'Unicons 원 고지 끝 표식은 정확히 한 번이어야 합니다.');
  const start = source.indexOf(uniconsStartMarker) + uniconsStartMarker.length;
  const end = source.indexOf(uniconsEndMarker, start);
  assert.ok(start >= uniconsStartMarker.length && end > start, 'Unicons 원 고지 구획을 찾을 수 있어야 합니다.');
  return { license: source.slice(start, end), source };
}

test('Unicons 4.0.8 시점 IconScout Simple License 원문을 byte exact로 공개 고지에 보존한다', async () => {
  const { license } = await readUniconsNotice();
  assert.equal(createHash('sha256').update(license).digest('hex'), '9068e666d32dd0f5fbf5ffa62d7340875bd274e9077f463c642d6cfba94d9acd');
});

test('Unicons 고지는 고정 원문·Starlight 기원 근거와 미해결 권리 경계를 함께 밝힌다', async () => {
  const { source } = await readUniconsNotice();
  assert.match(source, /https:\/\/github\.com\/Iconscout\/unicons\/blob\/691ff29fd130557a2ce7d991cef24bcd6644ad44\/LICENSE/);
  assert.match(source, /https:\/\/github\.com\/withastro\/starlight\/discussions\/967/);
  assert.match(source, /https:\/\/github\.com\/withastro\/starlight\/commit\/2ee1e7d19b7afa5b258382ee6c4d1084ccb66056/);
  assert.match(source, /RIGHTS-03\/04 전체 해소가 아닙니다/);
});
