import {r18PreFixBytes} from '../scripts/r18-fix-transition.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r17Closeout,r17PreCloseoutBytes,validateR17Closeout} from '../scripts/r17-closeout.mjs';
import {validateFiles,validateMatrix} from '../scripts/validate-m5-review-matrix.mjs';
import {validateR17Inputs} from '../scripts/r17-review-inputs.mjs';
import {preReadyBytes} from '../scripts/r26-closeout.mjs';
const read=p=>preReadyBytes(p,readFileSync(new URL('../'+p,import.meta.url))),sha=b=>createHash('sha256').update(b).digest('hex');
test('R17 closeout restores nine exact predecessors and preserves body',()=>{
 assert.equal(r17Closeout.changes.length,9);
 for(const e of r17Closeout.changes){const now=r18PreFixBytes(e.path,read(e.path)),before=r17PreCloseoutBytes(e.path,now);assert.equal(sha(now),e.after);assert.equal(sha(before),e.before);const drift=Buffer.concat([now,Buffer.from('drift')]);assert.deepEqual(r17PreCloseoutBytes(e.path,drift),drift);}
 for(const target of r17Closeout.state.target_hashes){const p=target.path,now=read(p).toString(),before=r17PreCloseoutBytes(p,read(p)).toString();assert.equal(now.split('\n---\n')[1],before.split('\n---\n')[1]);assert.match(now,/contentStatus: review/);assert.match(before,/contentStatus: draft/);assert.equal(sha(read(p)),target.current_sha256);assert.equal(sha(r17PreCloseoutBytes(p,read(p))),target.reviewed_sha256);}
 assert.equal(r17Closeout.state.target_hashes.length,2);
});
test('R17 completion preserves original needs-changes and separate followup without release promotion',()=>{
 const r=validateFiles();assert.deepEqual(r.errors,[]);const s=r.matrix.rows[16].review_state;assert.deepEqual(s,r17Closeout.state);assert.equal(s.historical_verdict,'NEEDS CHANGES');assert.equal(s.release_ready,false);assert.deepEqual(s.open_findings,{critical:0,important:0,minor:0});assert.ok(r.matrix.rows[25].review_state.status === 'done' && r.matrix.rows[25].review_state.release_ready === false);
 for(const mutate of [s=>s.release_ready=true,s=>s.historical_verdict='PASS',s=>s.valid_independent_evidence=false,s=>s.current_target_sha256='0'.repeat(64)]){const m=structuredClone(r.matrix);mutate(m.rows[16].review_state);assert.ok(validateMatrix(m).some(e=>e.includes('R17 review_state')));}
 const m=structuredClone(r.matrix);m.rows[17].review_state=s;assert.ok(validateMatrix(m).some(e=>e.includes('R18')));
});
test('R17 closeout rejects missing drifted and rolled-back current evidence',()=>{
 assert.deepEqual(validateR17Closeout('',{read}),[]);assert.deepEqual(validateR17Inputs(undefined,{read}).errors,[]);
 for(const e of [...r17Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)),...r17Closeout.evidence])for(const mode of ['drift','missing',...(e.before?['rollback']:[])]){const altered=p=>{if(p!==e.path)return read(p);if(mode==='missing')throw Error('missing');return mode==='rollback'?r17PreCloseoutBytes(p,read(p)):Buffer.concat([read(p),Buffer.from('drift')]);};assert.ok(validateR17Closeout('',{read:altered}).some(x=>x.includes(e.path)),e.path+' '+mode);assert.ok(validateR17Inputs(undefined,{read:altered}).errors.some(x=>x.includes(e.path)),e.path+' gate');}
});
