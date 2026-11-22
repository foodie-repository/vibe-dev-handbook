import {r13PreFixBytes} from '../scripts/r13-fix-transition.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r12Closeout,r12PreCloseoutBytes,validateR12Closeout} from '../scripts/r12-closeout.mjs';
import {validateFiles,validateMatrix} from '../scripts/validate-m5-review-matrix.mjs';
import {validateR12Inputs} from '../scripts/r12-review-inputs.mjs';
import {preReadyBytes} from '../scripts/r26-closeout.mjs';
const read=p=>preReadyBytes(p,readFileSync(new URL('../'+p,import.meta.url))),sha=b=>createHash('sha256').update(b).digest('hex');
test('R12 closeout restores eight exact predecessors and preserves body',()=>{
 assert.equal(r12Closeout.changes.length,8);
 for(const e of r12Closeout.changes){const now=read(e.path),before=r12PreCloseoutBytes(e.path,now);assert.equal(sha(r13PreFixBytes(e.path,now)),e.after);assert.equal(sha(before),e.before);const drift=Buffer.concat([now,Buffer.from('drift')]);assert.deepEqual(r12PreCloseoutBytes(e.path,drift),drift);}
 const p=r12Closeout.changes[0].path,now=read(p).toString(),before=r12PreCloseoutBytes(p,read(p)).toString();assert.equal(now.split('\n---\n')[1],before.split('\n---\n')[1]);assert.match(now,/contentStatus: review/);assert.match(before,/contentStatus: draft/);
});
test('R12 completion preserves original needs-changes and separate followup without release promotion',()=>{
 const r=validateFiles();assert.deepEqual(r.errors,[]);const s=r.matrix.rows[11].review_state;assert.deepEqual(s,r12Closeout.state);assert.equal(s.historical_verdict,'NEEDS CHANGES');assert.equal(s.release_ready,false);assert.deepEqual(s.open_findings,{critical:0,important:0,minor:0});assert.ok(r.matrix.rows[25].review_state.status === 'done' && r.matrix.rows[25].review_state.release_ready === false);
 for(const mutate of [s=>s.release_ready=true,s=>s.historical_verdict='PASS',s=>s.valid_independent_evidence=false,s=>s.current_target_sha256='0'.repeat(64)]){const m=structuredClone(r.matrix);mutate(m.rows[11].review_state);assert.ok(validateMatrix(m).some(e=>e.includes('R12 review_state')));}
 const m=structuredClone(r.matrix);m.rows[13].review_state=s;assert.ok(validateMatrix(m).some(e=>e.includes('R14')));
});
test('R12 closeout rejects missing drifted and rolled-back current evidence',()=>{
 assert.deepEqual(validateR12Closeout('',{read}),[]);assert.deepEqual(validateR12Inputs(undefined,{read}).errors,[]);
 for(const e of [...r12Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)),...r12Closeout.evidence])for(const mode of ['drift','missing',...(e.before?['rollback']:[])]){const altered=p=>{if(p!==e.path)return read(p);if(mode==='missing')throw Error('missing');return mode==='rollback'?r12PreCloseoutBytes(p,read(p)):Buffer.concat([read(p),Buffer.from('drift')]);};assert.ok(validateR12Closeout('',{read:altered}).some(x=>x.includes(e.path)),e.path+' '+mode);assert.ok(validateR12Inputs(undefined,{read:altered}).errors.some(x=>x.includes(e.path)),e.path+' gate');}
});
