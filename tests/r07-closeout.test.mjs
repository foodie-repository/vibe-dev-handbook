import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r07Closeout,r07PreCloseoutBytes,validateR07Closeout} from '../scripts/r07-closeout.mjs';
import {validateFiles,validateMatrix} from '../scripts/validate-m5-review-matrix.mjs';
import {validateR07Inputs} from '../scripts/r07-review-inputs.mjs';
import {r08PreFixBytes} from '../scripts/r08-fix-transition.mjs';
import {preReadyBytes} from '../scripts/r26-closeout.mjs';
const read=p=>preReadyBytes(p,readFileSync(new URL('../'+p,import.meta.url))),sha=b=>createHash('sha256').update(b).digest('hex');
test('R07 closeout restores eight predecessors and changes no manuscript body',()=>{
 assert.equal(r07Closeout.changes.length,8);
 for(const e of r07Closeout.changes){const now=read(e.path),before=r07PreCloseoutBytes(e.path,now);assert.equal(sha(r08PreFixBytes(e.path,now)),e.after);assert.equal(sha(before),e.before);assert.notDeepEqual(now,before);const drift=Buffer.concat([now,Buffer.from('drift')]);assert.deepEqual(r07PreCloseoutBytes(e.path,drift),drift);}
 const p=r07Closeout.changes[0].path,now=read(p).toString(),before=r07PreCloseoutBytes(p,read(p)).toString();assert.equal(now.split('\n---\n')[1],before.split('\n---\n')[1]);assert.match(now,/contentStatus: review/);assert.match(before,/contentStatus: draft/);
});
test('R07 done preserves initial NEEDS CHANGES and current source uncertainty without promoting release',()=>{
 const r=validateFiles();assert.deepEqual(r.errors,[]);const s=r.matrix.rows[6].review_state;assert.deepEqual(s,r07Closeout.state);assert.equal(s.historical_verdict,'NEEDS CHANGES');assert.equal(s.release_ready,false);assert.deepEqual(s.open_findings,{critical:0,important:0,minor:0});assert.deepEqual(s.deferred_findings,[]);assert.ok(r.matrix.rows[25].review_state.status === 'done' && r.matrix.rows[25].review_state.release_ready === false);
 for(const mutate of [s=>s.release_ready=true,s=>s.historical_verdict='PASS',s=>s.valid_independent_evidence=false,s=>s.current_target_sha256='0'.repeat(64)]){const m=structuredClone(r.matrix);mutate(m.rows[6].review_state);assert.ok(validateMatrix(m).some(e=>e.includes('R07 review_state')));}
 const a=read('docs/project/reviews/public-beta-1/r07-testing-adjudication.md').toString();assert.match(a,/I01·I02·M01~M03을 모두 RESOLVED/);assert.match(a,/여전히 not-confirmed/);assert.match(read('research/public-beta-source-gap-register.md').toString().split('\n').find(line=>line.startsWith('2026-11-15 R07/PBSG-015 좁은 재판정:')),/not-confirmed는 유지/);
 const m=structuredClone(r.matrix);m.rows[8].review_state=s;assert.ok(validateMatrix(m).some(e=>e.includes('R09')));
});
test('R07 closeout rejects missing drifted and rolled-back current pins',()=>{
 assert.deepEqual(validateR07Closeout('',{read}),[]);assert.deepEqual(validateR07Inputs(undefined,{read}).errors,[]);
 for(const e of [...r07Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)),...r07Closeout.evidence])for(const mode of ['drift','missing',...(e.before?['rollback']:[])]){const altered=p=>{if(p!==e.path)return read(p);if(mode==='missing')throw Error('missing');return mode==='rollback'?r07PreCloseoutBytes(p,read(p)):Buffer.concat([read(p),Buffer.from('drift')]);};assert.ok(validateR07Closeout('',{read:altered}).some(x=>x.includes(e.path)),e.path+' '+mode);assert.ok(validateR07Inputs(undefined,{read:altered}).errors.some(x=>x.includes(e.path)),e.path+' input gate');}
});
