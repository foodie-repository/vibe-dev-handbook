import {r14PreFixBytes} from '../scripts/r14-fix-transition.mjs';
import {r26PreFixBytes} from '../scripts/r26-fix-transition.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r13Closeout,r13PreCloseoutBytes,validateR13Closeout} from '../scripts/r13-closeout.mjs';
import {validateFiles,validateMatrix} from '../scripts/validate-m5-review-matrix.mjs';
import {validateR13Inputs} from '../scripts/r13-review-inputs.mjs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url)),sha=b=>createHash('sha256').update(b).digest('hex');
test('R13 closeout restores eight exact predecessors and preserves body',()=>{
 assert.equal(r13Closeout.changes.length,8);
 for(const e of r13Closeout.changes){const now=r14PreFixBytes(e.path,read(e.path)),before=r13PreCloseoutBytes(e.path,now);assert.equal(sha(now),e.after);assert.equal(sha(before),e.before);const drift=Buffer.concat([now,Buffer.from('drift')]);assert.deepEqual(r13PreCloseoutBytes(e.path,drift),drift);}
 const p=r13Closeout.changes[0].path,now=r26PreFixBytes(p,read(p)).toString(),before=r13PreCloseoutBytes(p,read(p)).toString();assert.equal(now.split('\n---\n')[1],before.split('\n---\n')[1]);assert.match(now,/contentStatus: review/);assert.match(before,/contentStatus: draft/);
});
test('R13 completion preserves original needs-changes and separate followup without release promotion',()=>{
 const r=validateFiles();assert.deepEqual(r.errors,[]);const s=r.matrix.rows[12].review_state;assert.deepEqual(s,r13Closeout.state);assert.equal(s.historical_verdict,'NEEDS CHANGES');assert.equal(s.release_ready,false);assert.deepEqual(s.open_findings,{critical:0,important:0,minor:0});assert.ok(r.matrix.rows[25].review_state.status === 'done' && r.matrix.rows[25].review_state.release_ready === false);
 for(const mutate of [s=>s.release_ready=true,s=>s.historical_verdict='PASS',s=>s.valid_independent_evidence=false,s=>s.current_target_sha256='0'.repeat(64)]){const m=structuredClone(r.matrix);mutate(m.rows[12].review_state);assert.ok(validateMatrix(m).some(e=>e.includes('R13 review_state')));}
 const m=structuredClone(r.matrix);m.rows[14].review_state=s;assert.ok(validateMatrix(m).some(e=>e.includes('R15')));
});
test('R13 closeout rejects missing drifted and rolled-back current evidence',()=>{
 assert.deepEqual(validateR13Closeout('',{read}),[]);assert.deepEqual(validateR13Inputs(undefined,{read}).errors,[]);
 for(const e of [...r13Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)),...r13Closeout.evidence])for(const mode of ['drift','missing',...(e.before?['rollback']:[])]){const altered=p=>{if(p!==e.path)return read(p);if(mode==='missing')throw Error('missing');return mode==='rollback'?r13PreCloseoutBytes(p,read(p)):Buffer.concat([read(p),Buffer.from('drift')]);};assert.ok(validateR13Closeout('',{read:altered}).some(x=>x.includes(e.path)),e.path+' '+mode);assert.ok(validateR13Inputs(undefined,{read:altered}).errors.some(x=>x.includes(e.path)),e.path+' gate');}
});
