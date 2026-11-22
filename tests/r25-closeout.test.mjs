import {r26PreFixBytes} from '../scripts/r26-fix-transition.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r25Closeout as c,r25PreCloseoutBytes as before,validateR25Closeout} from '../scripts/r25-closeout.mjs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url)),hash=b=>createHash('sha256').update(b).digest('hex');
test('R25 maps five unchanged manuscript bodies to the reviewed inputs and retains original verdict',()=>{
 assert.equal(c.state.target_hashes.length,5);assert.equal(c.state.historical_verdict,'BLOCKED');assert.equal(c.state.release_ready,false);
 for(const e of c.state.target_hashes){const now=r26PreFixBytes(e.path,read(e.path)),prev=before(e.path,now);assert.equal(hash(now),e.current_sha256);assert.equal(hash(prev),e.reviewed_sha256);assert.match(prev.toString(),/contentStatus: draft/);assert.match(now.toString(),/contentStatus: review/);assert.equal(now.toString().split('\n---\n').slice(1).join('\n---\n'),prev.toString().split('\n---\n').slice(1).join('\n---\n'));}
 assert.deepEqual(validateR25Closeout('',{read}),[]);for(const e of [...c.evidence,...c.state.target_hashes])assert.ok(validateR25Closeout('',{read:p=>p===e.path?Buffer.from('drift'):read(p)}).some(msg=>msg.includes(e.path)));
});
