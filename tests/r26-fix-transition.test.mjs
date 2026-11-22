import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {r26PreFixBytes, validateR26Fix} from '../scripts/r26-fix-transition.mjs';

const read = path => readFileSync(new URL('../' + path, import.meta.url));
test('R26 distinguishes the current fix from restored historical input, rollback, and unknown bytes', () => {
  assert.deepEqual(validateR26Fix(read), []);
  const path = 'src/content/docs/04-backend-data/api-database-auth.md';
  const fixed = read(path), before = r26PreFixBytes(path, fixed), corrupt = Buffer.concat([fixed, Buffer.from('drift')]);
  assert.notDeepEqual(before, fixed);
  assert.match(before.toString(), /업무 규칙:\n- 활성 참가 중복 없음/);
  for (const bytes of [before, corrupt]) {
    assert.deepEqual(r26PreFixBytes(path, bytes), bytes);
    assert.deepEqual(validateR26Fix(p => p === path ? bytes : read(p)), ['R26 candidate drift: ' + path]);
  }
});
