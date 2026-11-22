import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r09Closeout,r09PreCloseoutBytes,validateR09Closeout} from '../scripts/r09-closeout.mjs';
import {validateFiles,validateMatrix} from '../scripts/validate-m5-review-matrix.mjs';
import {validateR09Inputs} from '../scripts/r09-review-inputs.mjs';
import {r10PreFixBytes} from '../scripts/r10-fix-transition.mjs';
import {preReadyBytes} from '../scripts/r26-closeout.mjs';
const read=p=>preReadyBytes(p,readFileSync(new URL('../'+p,import.meta.url))),sha=b=>createHash('sha256').update(b).digest('hex');
test('R09 closeout restores nine exact predecessors and preserves manuscript body',()=>{
 assert.equal(r09Closeout.changes.length,9);
 for(const e of r09Closeout.changes){const now=read(e.path),before=r09PreCloseoutBytes(e.path,now);assert.equal(sha(r10PreFixBytes(e.path,now)),e.after);assert.equal(sha(before),e.before);assert.notDeepEqual(now,before);const drift=Buffer.concat([now,Buffer.from('drift')]);assert.deepEqual(r09PreCloseoutBytes(e.path,drift),drift);}
 const p=r09Closeout.changes[0].path,now=read(p).toString(),before=r09PreCloseoutBytes(p,read(p)).toString();assert.equal(now.split('\n---\n')[1],before.split('\n---\n')[1]);assert.match(now,/contentStatus: review/);assert.match(before,/contentStatus: draft/);
});
test('R09 done retains original and Fix1 history without closing later rows',()=>{
 const r=validateFiles();assert.deepEqual(r.errors,[]);const s=r.matrix.rows[8].review_state;assert.deepEqual(s,r09Closeout.state);assert.equal(s.historical_verdict,'NEEDS CHANGES');assert.equal(s.release_ready,false);assert.deepEqual(s.open_findings,{critical:0,important:0,minor:0});assert.ok(r.matrix.rows[25].review_state.status === 'done' && r.matrix.rows[25].review_state.release_ready === false);
 for(const mutate of [s=>s.release_ready=true,s=>s.historical_verdict='PASS',s=>s.valid_independent_evidence=false,s=>s.current_target_sha256='0'.repeat(64)]){const m=structuredClone(r.matrix);mutate(m.rows[8].review_state);assert.ok(validateMatrix(m).some(e=>e.includes('R09 review_state')));}
 const a=read('docs/project/reviews/public-beta-1/r09-build-deploy-adjudication.md').toString();assert.match(a,/최초 NEEDS CHANGES/);assert.match(a,/RESOLVED\/PASS C0\/I0\/M0/);assert.match(a,/Fix1 기록 당시에는/);assert.match(a,/이후 review 전이는 r09-controller-closeout.md/);assert.doesNotMatch(a,/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i);
 assert.equal(sha(read('docs/project/reviews/public-beta-1/r09-build-deploy-codex-review.md')),'3d4424c8733c5261a5bac6a2ec56caea3f2d4a7a49c361537f20de3a0a2fd88c');
 assert.match(read('src/content/docs/10-deployment-operations/logs-monitoring-backup.md').toString(),/contentStatus: review/);
 const m=structuredClone(r.matrix);m.rows[9].review_state=s;assert.ok(validateMatrix(m).some(e=>e.includes('R10')));
});
test('R09 closeout rejects missing drifted and rolled-back current evidence',()=>{
 assert.deepEqual(validateR09Closeout('',{read}),[]);assert.deepEqual(validateR09Inputs(undefined,{read}).errors,[]);
 for(const e of [...r09Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)),...r09Closeout.evidence])for(const mode of ['drift','missing',...(e.before?['rollback']:[])]){const altered=p=>{if(p!==e.path)return read(p);if(mode==='missing')throw Error('missing');return mode==='rollback'?r09PreCloseoutBytes(p,read(p)):Buffer.concat([read(p),Buffer.from('drift')]);};assert.ok(validateR09Closeout('',{read:altered}).some(x=>x.includes(e.path)),e.path+' '+mode);assert.ok(validateR09Inputs(undefined,{read:altered}).errors.some(x=>x.includes(e.path)),e.path+' gate');}
});
