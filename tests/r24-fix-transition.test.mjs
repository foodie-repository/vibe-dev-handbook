import {r24PreCloseoutBytes} from '../scripts/r24-closeout.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r24FixTransitions,r24PreFixBytes,validateR24Current} from '../scripts/r24-fix-transition.mjs';
const sha=b=>createHash('sha256').update(b).digest('hex');
const read=p=>r24PreCloseoutBytes(p,readFileSync(p));
test('R24 accepts only six exact current changes and recovers original frozen inputs',()=>{
 assert.equal(r24FixTransitions.length,6);assert.deepEqual(validateR24Current(read),[]);
 for(const e of r24FixTransitions){const current=read(e.path);assert.equal(sha(current),e.after);assert.equal(sha(r24PreFixBytes(e.path,current)),e.before);const bad=Buffer.concat([current,Buffer.from('drift')]);assert.equal(r24PreFixBytes(e.path,bad),bad);assert.ok(validateR24Current(p=>p===e.path?bad:read(p)).length>0);}
});
