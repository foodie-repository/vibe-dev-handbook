import {r24PreCloseoutBytes} from '../scripts/r24-closeout.mjs';
import {r26PreFixBytes} from '../scripts/r26-fix-transition.mjs';
import test from 'node:test';
import {r24PreFixBytes} from '../scripts/r24-fix-transition.mjs';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r23Closeout,r23PreCloseoutBytes,validateR23Closeout} from '../scripts/r23-closeout.mjs';
import {validateFiles,validateMatrix} from '../scripts/validate-m5-review-matrix.mjs';
import {validateR23Inputs} from '../scripts/r23-review-inputs.mjs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url)),sha=b=>createHash('sha256').update(b).digest('hex');
test('R23 closeout restores nine exact predecessors and preserves body',()=>{
 assert.equal(r23Closeout.changes.length,9);
 for(const e of r23Closeout.changes){const now=r24PreFixBytes(e.path,r24PreCloseoutBytes(e.path,read(e.path))),before=r23PreCloseoutBytes(e.path,now);assert.equal(sha(now),e.after);assert.equal(sha(before),e.before);const drift=Buffer.concat([now,Buffer.from('drift')]);assert.deepEqual(r23PreCloseoutBytes(e.path,drift),drift);}
 for(const target of r23Closeout.state.target_hashes){const p=target.path,now=r26PreFixBytes(p,read(p)).toString(),before=r23PreCloseoutBytes(p,read(p)).toString();assert.equal(now.split('\n---\n')[1],before.split('\n---\n')[1]);assert.match(now,/contentStatus: review/);assert.match(before,/contentStatus: draft/);assert.equal(sha(r26PreFixBytes(p,read(p))),target.current_sha256);assert.equal(sha(r23PreCloseoutBytes(p,read(p))),target.reviewed_sha256);}
 assert.equal(r23Closeout.state.target_hashes.length,3);
});
test('R23 completion preserves original needs-changes and separate followup without release promotion',()=>{
 const r=validateFiles();assert.deepEqual(r.errors,[]);const s=r.matrix.rows[22].review_state;assert.deepEqual(s,r23Closeout.state);assert.equal(s.historical_verdict,'NEEDS CHANGES');assert.equal(s.release_ready,false);assert.deepEqual(s.open_findings,{critical:0,important:0,minor:0});assert.ok(r.matrix.rows[25].review_state.status === 'done' && r.matrix.rows[25].review_state.release_ready === false);
 for(const mutate of [s=>s.release_ready=true,s=>s.historical_verdict='PASS',s=>s.valid_independent_evidence=false,s=>s.current_target_sha256='0'.repeat(64)]){const m=structuredClone(r.matrix);mutate(m.rows[22].review_state);assert.ok(validateMatrix(m).some(e=>e.includes('R23 review_state')));}
 const m=structuredClone(r.matrix);m.rows[25].review_state=s;assert.ok(validateMatrix(m).some(e=>e.includes('R26')));
});
test('R23 closeout rejects missing drifted and rolled-back current evidence',()=>{
 assert.deepEqual(validateR23Closeout('',{read}),[]);assert.deepEqual(validateR23Inputs(undefined,{read}).errors,[]);
 for(const e of [...r23Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)),...r23Closeout.evidence])for(const mode of ['drift','missing',...(e.before?['rollback']:[])]){const altered=p=>{if(p!==e.path)return read(p);if(mode==='missing')throw Error('missing');return mode==='rollback'?r23PreCloseoutBytes(p,read(p)):Buffer.concat([read(p),Buffer.from('drift')]);};assert.ok(validateR23Closeout('',{read:altered}).some(x=>x.includes(e.path)),e.path+' '+mode);assert.ok(validateR23Inputs(undefined,{read:altered}).errors.some(x=>x.includes(e.path)),e.path+' gate');}
});
