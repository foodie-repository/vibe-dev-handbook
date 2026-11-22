import {r21PreCloseoutBytes} from '../scripts/r21-closeout.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r08Closeout,r08PreCloseoutBytes,validateR08Closeout} from '../scripts/r08-closeout.mjs';
import {validateFiles,validateMatrix} from '../scripts/validate-m5-review-matrix.mjs';
import {validateR08Inputs} from '../scripts/r08-review-inputs.mjs';
import {r09PreFixBytes} from '../scripts/r09-fix-transition.mjs';
import {preReadyBytes} from '../scripts/r26-closeout.mjs';
const read=p=>preReadyBytes(p,readFileSync(new URL('../'+p,import.meta.url))),sha=b=>createHash('sha256').update(b).digest('hex');
test('R08 closeout restores seven exact predecessors and leaves manuscript body unchanged',()=>{
 assert.equal(r08Closeout.changes.length,7);
 for(const e of r08Closeout.changes){const now=read(e.path),before=r08PreCloseoutBytes(e.path,now);assert.equal(sha(r09PreFixBytes(e.path,now)),e.after);assert.equal(sha(before),e.before);assert.notDeepEqual(now,before);const drift=Buffer.concat([now,Buffer.from('drift')]);assert.deepEqual(r08PreCloseoutBytes(e.path,drift),drift);}
 const p=r08Closeout.changes[0].path,now=read(p).toString(),before=r08PreCloseoutBytes(p,read(p)).toString();assert.equal(now.split('\n---\n')[1],before.split('\n---\n')[1]);assert.match(now,/contentStatus: review/);assert.match(before,/contentStatus: draft/);
});
test('R08 done preserves original finding history and R21 whole-review boundary',()=>{
 const r=validateFiles();assert.deepEqual(r.errors,[]);const s=r.matrix.rows[7].review_state;assert.deepEqual(s,r08Closeout.state);assert.equal(s.historical_verdict,'NEEDS CHANGES');assert.equal(s.release_ready,false);assert.deepEqual(s.open_findings,{critical:0,important:0,minor:0});assert.ok(r.matrix.rows[25].review_state.status === 'done' && r.matrix.rows[25].review_state.release_ready === false);
 for(const mutate of [s=>s.release_ready=true,s=>s.historical_verdict='PASS',s=>s.valid_independent_evidence=false,s=>s.current_target_sha256='0'.repeat(64)]){const m=structuredClone(r.matrix);mutate(m.rows[7].review_state);assert.ok(validateMatrix(m).some(e=>e.includes('R08 review_state')));}
 for(const p of ['branch-commit-pull-request','undo-merge-conflict-release']){const path='src/content/docs/09-git-github/'+p+'.md';assert.match(r21PreCloseoutBytes(path,read(path)).toString(),/contentStatus: draft/);}
 const a=read('docs/project/reviews/public-beta-1/r08-git-github-adjudication.md').toString();assert.match(a,/모두 RESOLVED/);assert.match(a,/R21 전체 검토는 여전히 미완료/);assert.match(a,/최초 NEEDS CHANGES를 소급 변경하지 않습니다/);
 assert.match(a,/Fix1 결과 기록 당시에는 원고 draft와 R08 controller closeout 미완료를 유지했습니다/);assert.match(a,/이후 메타데이터 전이와 행 완료 판단은 `r08-controller-closeout.md`를 따르며/);
 const m=structuredClone(r.matrix);m.rows[8].review_state=s;assert.ok(validateMatrix(m).some(e=>e.includes('R09')));
});
test('R08 closeout rejects missing drifted and rolled-back current pins',()=>{
 assert.deepEqual(validateR08Closeout('',{read}),[]);assert.deepEqual(validateR08Inputs(undefined,{read}).errors,[]);
 for(const e of [...r08Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)),...r08Closeout.evidence])for(const mode of ['drift','missing',...(e.before?['rollback']:[])]){const altered=p=>{if(p!==e.path)return read(p);if(mode==='missing')throw Error('missing');return mode==='rollback'?r08PreCloseoutBytes(p,read(p)):Buffer.concat([read(p),Buffer.from('drift')]);};assert.ok(validateR08Closeout('',{read:altered}).some(x=>x.includes(e.path)),e.path+' '+mode);assert.ok(validateR08Inputs(undefined,{read:altered}).errors.some(x=>x.includes(e.path)),e.path+' input gate');}
});
