import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r25Fix,r25PreFixBytes,validateR25Current} from '../scripts/r25-fix-transition.mjs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url)),sha=b=>createHash('sha256').update(b).digest('hex');
test('R25 inventory and the rendered page use the same manuscript title',()=>{
 const path='src/content/docs/reference/current-tool-mapping.md',title=/^title: "([^"]+)"$/m.exec(read(path).toString())[1];
 const rows=read('CONTENT_MAP.md').toString().split('\n').filter(s=>s.includes(']('+path+')'));
 assert.equal(rows.length,1);assert.ok(rows[0].startsWith('| ['+title+']('+path+') |'));
});
test('R25 restores exactly seven predecessor files and rejects drift and rollback as current',()=>{
 assert.equal(r25Fix.length,7);assert.deepEqual(validateR25Current(read),[]);
 for(const e of r25Fix){const now=read(e.path),before=r25PreFixBytes(e.path,now),bad=Buffer.concat([now,Buffer.from('drift')]);assert.equal(sha(before),e.before);assert.deepEqual(r25PreFixBytes(e.path,bad),bad);
  for(const wrong of [before,bad])assert.ok(validateR25Current(p=>p===e.path?wrong:read(p)).some(s=>s.includes(e.path)));}
});
