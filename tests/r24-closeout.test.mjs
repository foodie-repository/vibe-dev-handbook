import {r26PreFixBytes} from '../scripts/r26-fix-transition.mjs';
import test from 'node:test';
import {r25PreFixBytes} from '../scripts/r25-fix-transition.mjs';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r24Closeout,r24PreCloseoutBytes,validateR24Closeout} from '../scripts/r24-closeout.mjs';
import {validateFiles,validateMatrix} from '../scripts/validate-m5-review-matrix.mjs';
import {validateR24Inputs} from '../scripts/r24-review-inputs.mjs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url)),sha=b=>createHash('sha256').update(b).digest('hex');
test('R24 closeout recovers 24 exact predecessor files and 18 unchanged manuscript bodies',()=>{
 assert.equal(r24Closeout.changes.length,24);assert.equal(r24Closeout.state.target_hashes.length,18);
 for(const e of r24Closeout.changes){const now=r25PreFixBytes(e.path,read(e.path));assert.equal(sha(now),e.after);assert.equal(sha(r24PreCloseoutBytes(e.path,now)),e.before);const bad=Buffer.concat([now,Buffer.from('drift')]);assert.deepEqual(r24PreCloseoutBytes(e.path,bad),bad);}
 for(const e of r24Closeout.state.target_hashes){const now=r26PreFixBytes(e.path,read(e.path)),before=r24PreCloseoutBytes(e.path,now);assert.equal(now.toString().split('\n---\n')[1],before.toString().split('\n---\n')[1]);assert.match(now.toString(),/contentStatus: review/);assert.match(before.toString(),/contentStatus: draft/);assert.equal(sha(now),e.current_sha256);assert.equal(sha(before),e.reviewed_sha256);}
});
test('R24 completion preserves needs-changes history without promoting later rows or release',()=>{
 const r=validateFiles();assert.deepEqual(r.errors,[]);const s=r.matrix.rows[23].review_state;assert.deepEqual(s,r24Closeout.state);assert.equal(s.release_ready,false);assert.equal(s.historical_verdict,'NEEDS CHANGES');assert.deepEqual(s.open_findings,{critical:0,important:0,minor:0});assert.ok(r.matrix.rows[25].review_state.status === 'done' && r.matrix.rows[25].review_state.release_ready === false);
 for(const mutate of [s=>s.release_ready=true,s=>s.historical_verdict='PASS',s=>s.valid_independent_evidence=false,s=>s.current_target_sha256='0'.repeat(64)]){const m=structuredClone(r.matrix);mutate(m.rows[23].review_state);assert.ok(validateMatrix(m).some(e=>e.includes('R24 review_state')));}
 const m=structuredClone(r.matrix);m.rows[25].review_state=s;assert.ok(validateMatrix(m).some(e=>e.includes('R26')));
});
test('R24 current evidence rejects missing drift and rollback while historical input remains valid',()=>{
 assert.deepEqual(validateR24Closeout('',{read}),[]);assert.deepEqual(validateR24Inputs(undefined,{read}).errors,[]);
 for(const e of [...r24Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)),...r24Closeout.evidence])for(const mode of ['drift','missing',...(e.before?['rollback']:[])]){const altered=p=>{if(p!==e.path)return read(p);if(mode==='missing')throw Error('missing');return mode==='rollback'?r24PreCloseoutBytes(p,read(p)):Buffer.concat([read(p),Buffer.from('drift')]);};assert.ok(validateR24Closeout('',{read:altered}).some(x=>x.includes(e.path)));assert.ok(validateR24Inputs(undefined,{read:altered}).errors.some(x=>x.includes(e.path)));}
});
