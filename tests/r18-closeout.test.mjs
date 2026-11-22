import {r19PreFixBytes} from '../scripts/r19-fix-transition.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r18Closeout,r18PreCloseoutBytes,validateR18Closeout} from '../scripts/r18-closeout.mjs';
import {validateFiles,validateMatrix} from '../scripts/validate-m5-review-matrix.mjs';
import {validateR18Inputs} from '../scripts/r18-review-inputs.mjs';
import {preReadyBytes} from '../scripts/r26-closeout.mjs';
const read=p=>r19PreFixBytes(p,preReadyBytes(p,readFileSync(new URL('../'+p,import.meta.url)))),sha=b=>createHash('sha256').update(b).digest('hex');
test('R18 closeout restores nine exact predecessors and preserves body',()=>{
 assert.equal(r18Closeout.changes.length,9);
 for(const e of r18Closeout.changes){const now=read(e.path),before=r18PreCloseoutBytes(e.path,now);assert.equal(sha(now),e.after);assert.equal(sha(before),e.before);const drift=Buffer.concat([now,Buffer.from('drift')]);assert.deepEqual(r18PreCloseoutBytes(e.path,drift),drift);}
 for(const target of r18Closeout.state.target_hashes){const p=target.path,now=read(p).toString(),before=r18PreCloseoutBytes(p,read(p)).toString();assert.equal(now.split('\n---\n')[1],before.split('\n---\n')[1]);assert.match(now,/contentStatus: review/);assert.match(before,/contentStatus: draft/);assert.equal(sha(read(p)),target.current_sha256);assert.equal(sha(r18PreCloseoutBytes(p,read(p))),target.reviewed_sha256);}
 assert.equal(r18Closeout.state.target_hashes.length,2);
});
test('R18 completion preserves original needs-changes and separate followup without release promotion',()=>{
 const r=validateFiles();assert.deepEqual(r.errors,[]);const s=r.matrix.rows[17].review_state;assert.deepEqual(s,r18Closeout.state);assert.equal(s.historical_verdict,'NEEDS CHANGES');assert.equal(s.release_ready,false);assert.deepEqual(s.open_findings,{critical:0,important:0,minor:0});assert.ok(r.matrix.rows[25].review_state.status === 'done' && r.matrix.rows[25].review_state.release_ready === false);
 for(const mutate of [s=>s.release_ready=true,s=>s.historical_verdict='PASS',s=>s.valid_independent_evidence=false,s=>s.current_target_sha256='0'.repeat(64)]){const m=structuredClone(r.matrix);mutate(m.rows[17].review_state);assert.ok(validateMatrix(m).some(e=>e.includes('R18 review_state')));}
 const m=structuredClone(r.matrix);m.rows[18].review_state=s;assert.ok(validateMatrix(m).some(e=>e.includes('R19')));
});
test('R18 closeout rejects missing drifted and rolled-back current evidence',()=>{
 assert.deepEqual(validateR18Closeout('',{read}),[]);assert.deepEqual(validateR18Inputs(undefined,{read}).errors,[]);
 for(const e of [...r18Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)),...r18Closeout.evidence])for(const mode of ['drift','missing',...(e.before?['rollback']:[])]){const altered=p=>{if(p!==e.path)return read(p);if(mode==='missing')throw Error('missing');return mode==='rollback'?r18PreCloseoutBytes(p,read(p)):Buffer.concat([read(p),Buffer.from('drift')]);};assert.ok(validateR18Closeout('',{read:altered}).some(x=>x.includes(e.path)),e.path+' '+mode);assert.ok(validateR18Inputs(undefined,{read:altered}).errors.some(x=>x.includes(e.path)),e.path+' gate');}
});
