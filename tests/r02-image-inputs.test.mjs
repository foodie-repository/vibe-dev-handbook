import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { buildR02ImageInputs, sliceR02FrozenText, assertR02DeliveryUnchanged } from '../scripts/r02-image-inputs.mjs';

const bytes = Buffer.alloc(24);
Buffer.from([137,80,78,71,13,10,26,10]).copy(bytes);
bytes.write('IHDR', 12); bytes.writeUInt32BE(400, 16); bytes.writeUInt32BE(300, 20);
const sha256 = createHash('sha256').update(bytes).digest('hex');
const manifest = () => ({ entries: Array.from({ length: 18 }, (_, i) => ({ path: `images/${i}.png`, sha256 })) });
const read = () => bytes;
const fixtureOptions = { read, expectedManifestSha256: createHash('sha256').update(JSON.stringify(manifest())).digest('hex') };

test('R02 delivers all 18 original images in manifest order with adjacent identity', () => {
  const result = buildR02ImageInputs('/fixture', manifest(), fixtureOptions);
  assert.equal(result.inputs.length, 36);
  assert.equal(result.mapping.length, 18);
  for (let i = 0; i < 18; i++) {
    assert.equal(JSON.parse(result.inputs[2 * i].text).order, i + 1);
    assert.deepEqual(result.inputs[2 * i + 1], { type: 'localImage', path: `/fixture/images/${i}.png`, detail: 'original' });
    assert.equal(result.mapping[i].sha256, sha256);
  }
});
test('R02 smoke sends only one actual image and is not full coverage', () => {
  const result = buildR02ImageInputs('/fixture', manifest(), { ...fixtureOptions, smoke: true });
  assert.equal(result.mapping.length, 1);
  assert.equal(result.inputs.filter(x => x.type === 'localImage').length, 1);
});
test('R02 rejects missing, duplicate, escaped, altered and non-PNG inputs', () => {
  const missing = manifest(); missing.entries.pop();
  assert.throws(() => buildR02ImageInputs('/fixture', missing, fixtureOptions), /manifest mismatch/);
  const duplicate = manifest(); duplicate.entries[1] = duplicate.entries[0];
  assert.throws(() => buildR02ImageInputs('/fixture', duplicate, fixtureOptions), /manifest mismatch/);
  const escaped = manifest(); escaped.entries[0].path = '../escape.png';
  assert.throws(() => buildR02ImageInputs('/fixture', escaped, fixtureOptions), /manifest mismatch/);
  assert.throws(() => buildR02ImageInputs('/fixture', manifest(), { ...fixtureOptions, read: () => Buffer.from('changed') }), /hash mismatch/);
  const invalid = manifest(); const bad = Buffer.alloc(24); invalid.entries[0].sha256 = createHash('sha256').update(bad).digest('hex');
  assert.throws(() => buildR02ImageInputs('/fixture', invalid, { read: () => bad, expectedManifestSha256: createHash('sha256').update(JSON.stringify(invalid)).digest('hex') }), /invalid PNG/);
});
test('R02 fixed manifest rejects reordered or rehashed entries', () => {
  const reordered = manifest(); reordered.entries.reverse();
  assert.throws(() => buildR02ImageInputs('/fixture', reordered, fixtureOptions), /manifest mismatch/);
  const rehashed = manifest(); rehashed.entries[0].sha256 = '0'.repeat(64);
  assert.throws(() => buildR02ImageInputs('/fixture', rehashed, fixtureOptions), /manifest mismatch/);
});
test('R02 defense branches reject duplicate paths and outside-root paths independently', () => {
  const altered = manifest(); altered.entries[1] = altered.entries[0];
  const options = value => ({ read, expectedManifestSha256: createHash('sha256').update(JSON.stringify(value)).digest('hex') });
  assert.throws(() => buildR02ImageInputs('/fixture', altered, options(altered)), /18 unique/);
  const escaped = manifest(); escaped.entries[0].path = '../escape.png';
  assert.throws(() => buildR02ImageInputs('/fixture', escaped, options(escaped)), /outside root/);
});
test('R02 rejects missing full-text marker before a model call', () => {
  assert.equal(sliceR02FrozenText('prefix INPUT METADATA whole text'), 'INPUT METADATA whole text');
  assert.throws(() => sliceR02FrozenText('truncated'), /marker missing/);
});
test('R02 rejects post-delivery changes and accepts identical input metadata', () => {
  const before = { images: ['sha'], payload: 'original', supplement: 'fixed' };
  assert.equal(assertR02DeliveryUnchanged(before, structuredClone(before)), true);
  for (const key of Object.keys(before)) assert.throws(() => assertR02DeliveryUnchanged(before, { ...before, [key]: 'changed' }), /input drift/);
});
