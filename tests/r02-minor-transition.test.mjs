import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { r02HistoricalBytes, r02MinorTransitions } from '../scripts/r02-minor-transition.mjs';
import { r02PreCloseoutBytes } from '../scripts/r02-closeout.mjs';

const hash = bytes => createHash('sha256').update(bytes).digest('hex');
test('R02 Minor3 current bytes and exact historical reconstruction are both pinned', () => {
  assert.equal(r02MinorTransitions.length, 2);
  for (const entry of r02MinorTransitions) {
    const current = readFileSync(new URL('../' + entry.path, import.meta.url));
    const reviewed = r02PreCloseoutBytes(entry.path, current);
    assert.equal(hash(reviewed), entry.after);
    const historical = r02HistoricalBytes(entry.path, current);
    assert.equal(hash(historical), entry.before);
    assert.deepEqual(r02HistoricalBytes(entry.path, historical), historical);
    let forward = historical.toString('utf8');
    for (const [before, after] of entry.replacements) forward = forward.replace(before, after);
    assert.equal(forward, reviewed.toString('utf8'));
  }
});
test('R02 reconstruction does not hide unknown drift or normalize other paths', () => {
  for (const entry of r02MinorTransitions) {
    const current = readFileSync(new URL('../' + entry.path, import.meta.url));
    for (const altered of [Buffer.concat([current, Buffer.from('drift')]), Buffer.from(current.toString('utf8').replace(entry.replacements[0][1], entry.replacements[0][0]) + 'drift')]) {
      assert.deepEqual(r02HistoricalBytes(entry.path, altered), altered);
      assert.notEqual(hash(altered), entry.before);
    }
    assert.deepEqual(r02HistoricalBytes('another-row.md', current), current);
  }
});
