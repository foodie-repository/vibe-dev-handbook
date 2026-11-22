import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r06PreFixBytes} from '../scripts/r06-fix-transition.mjs';
import {r05Closeout,r05PreCloseoutBytes,validateR05Closeout} from '../scripts/r05-closeout.mjs';
import {validateFiles,validateMatrix} from '../scripts/validate-m5-review-matrix.mjs';
import {validateR05Inputs} from '../scripts/r05-review-inputs.mjs';
import {preReadyBytes} from '../scripts/r26-closeout.mjs';
const read=p=>preReadyBytes(p,readFileSync(new URL('../'+p,import.meta.url)));
const sha=b=>createHash('sha256').update(b).digest('hex');
test('the pre-promotion inventory and map agree with all 59 historical manuscript statuses without raising the M5 score',()=>{
 const plan=read('docs/superpowers/plans/2026-08-12-public-beta-master-plan.md').toString(),inventory=plan.split('<!-- PUBLIC_BETA_INVENTORY_START -->')[1].split('<!-- PUBLIC_BETA_INVENTORY_END -->')[0],map=read('CONTENT_MAP.md').toString();
 const rows=[...inventory.matchAll(/^\| `(src\/content\/docs\/[^`]+)` \| (draft|review|ready|seed) \|/gm)];assert.equal(rows.length,59);const counts={draft:0,review:0,ready:0,seed:0};
 for(const[,p,status]of rows){counts[status]++;assert.match(read(p).toString(),new RegExp('^contentStatus: '+status+'$','m'),p);const row=map.split('\n').find(l=>l.includes(']('+p+')'));assert.ok(row?.includes(' | `'+status+'` |'),p);}
 assert.deepEqual(counts,{draft:0,review:59,ready:0,seed:0});assert.ok(plan.includes('| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | done | 7.0 | Task 22; R01~R26 완료, R26 Fix1 PASS C0/I0/M5, 원고 59개 review |'));
});
test('R05 controller records omit full execution session identifiers while retaining categorical evidence',()=>{
 for(const p of ['r05-controller-closeout.md','r05-fix-validation.md']){const s=read('docs/project/reviews/public-beta-1/'+p).toString();assert.doesNotMatch(s,/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i);assert.match(s,/history1/);assert.match(s,/gpt-6-astra\/high/);}
});
test('R05 metadata-only transition exactly restores every predecessor and aligns inventory',()=>{
 for(const e of r05Closeout.changes){const now=read(e.path),before=r05PreCloseoutBytes(e.path,now);assert.equal(sha(r06PreFixBytes(e.path,now)),e.after);assert.equal(sha(before),e.before);assert.notDeepEqual(now,before);const drift=Buffer.concat([now,Buffer.from('drift')]);assert.deepEqual(r05PreCloseoutBytes(e.path,drift),drift);}
 const p=r05Closeout.changes[0].path,now=read(p).toString(),before=r05PreCloseoutBytes(p,read(p)).toString();assert.equal(now.split('\n---\n')[1],before.split('\n---\n')[1]);assert.match(now,/contentStatus: review/);assert.match(before,/contentStatus: draft/);
 const ui='src/content/docs/05-frontend/ui-state-and-ux.md';assert.match(r05PreCloseoutBytes(ui,read(ui)).toString(),/contentStatus: draft/);
 const plan=read('docs/superpowers/plans/2026-08-12-public-beta-master-plan.md').toString();assert.ok(plan.includes('| `'+p+'` | review | M3-FRONT-DESIGN |'));assert.ok(plan.includes('| - [x] | R05 `browser-dom` |'));
});
test('R05 done preserves historical NEEDS CHANGES and open Minor without promoting R17 or release',()=>{
 const r=validateFiles();assert.deepEqual(r.errors,[]);const s=r.matrix.rows[4].review_state;assert.deepEqual(s,r05Closeout.state);assert.equal(s.historical_verdict,'NEEDS CHANGES');assert.equal(s.release_ready,false);assert.deepEqual(s.open_findings,{critical:0,important:0,minor:1});assert.deepEqual(s.deferred_findings,[{id:'R05-M01',owner:'R26',state:'open'}]);assert.ok(r.matrix.rows[25].review_state.status === 'done' && r.matrix.rows[25].review_state.release_ready === false);
 for(const mutate of [s=>s.release_ready=true,s=>s.open_findings.minor=0,s=>s.deferred_findings=[],s=>s.valid_independent_evidence=false]){const m=structuredClone(r.matrix);mutate(m.rows[4].review_state);assert.ok(validateMatrix(m).some(e=>e.includes('R05 review_state')));}
 const m=structuredClone(r.matrix);m.rows[6].review_state=s;assert.ok(validateMatrix(m).some(e=>e.includes('R07')));
});
test('R05 rejects closeout rollback, missing or drifted pinned evidence before historical reuse',()=>{
 assert.deepEqual(validateR05Closeout('',{read}),[]);assert.deepEqual(validateR05Inputs(undefined,{read}).errors,[]);
 for(const e of [...r05Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)),...r05Closeout.evidence])for(const mode of ['drift','missing',...(e.before?['rollback']:[])]){
  const altered=p=>{if(p!==e.path)return read(p);if(mode==='missing')throw Error('missing');return mode==='rollback'?r05PreCloseoutBytes(p,read(p)):Buffer.concat([read(p),Buffer.from('drift')]);};
  assert.ok(validateR05Closeout('',{read:altered}).some(x=>x.includes(e.path)),e.path+' '+mode);
  assert.ok(validateR05Inputs(undefined,{read:altered}).errors.some(x=>x.includes(e.path)),e.path+' '+mode+' input gate');
 }
});
