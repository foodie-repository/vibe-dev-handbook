import {r26PreFixBytes} from '../scripts/r26-fix-transition.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r05PreFixBytes} from '../scripts/r05-fix-transition.mjs';
import {r04Closeout,r04PreCloseoutBytes,validateR04Closeout} from '../scripts/r04-closeout.mjs';
import {validateFiles,validateMatrix} from '../scripts/validate-m5-review-matrix.mjs';
import {preReadyBytes} from '../scripts/r26-closeout.mjs';
const read=p=>preReadyBytes(p,readFileSync(new URL('../'+p,import.meta.url)));
const sha=b=>createHash('sha256').update(b).digest('hex');
test('R04-CO-M01 current inventory agrees with review while exact historical inventory remains draft',()=>{
 const p='docs/superpowers/plans/2026-08-12-public-beta-master-plan.md';
 const row='| `src/content/docs/04-backend-data/api-database-auth.md` | ';
 assert.ok(read(p).toString().includes(row+'review | M3-FULLSTACK-DATA |'));
 assert.ok(r04PreCloseoutBytes(p,read(p)).toString().includes(row+'draft | M3-FULLSTACK-DATA |'));
});
test('R04 closeout preserves exact prior bytes and changes manuscript metadata only',()=>{
 for(const e of r04Closeout.changes){const now=read(e.path),before=r04PreCloseoutBytes(e.path,now);assert.equal(sha(r05PreFixBytes(e.path,now)),e.after);assert.equal(sha(before),e.before);const drift=Buffer.concat([now,Buffer.from('drift')]);assert.deepEqual(r04PreCloseoutBytes(e.path,drift),drift)}
 const p=r04Closeout.changes[0].path,now=r26PreFixBytes(p,read(p)).toString(),before=r04PreCloseoutBytes(p,read(p)).toString();assert.equal(now.split('\n---\n')[1],before.split('\n---\n')[1]);assert.match(now,/contentStatus: review/);assert.match(before,/contentStatus: draft/);
});
test('R04 done preserves original verdict and deferred Minor without release promotion',()=>{
 const r=validateFiles();assert.deepEqual(r.errors,[]);const s=r.matrix.rows[3].review_state;assert.deepEqual(s,r04Closeout.state);assert.equal(s.historical_verdict,'NEEDS CHANGES');assert.equal(s.release_ready,false);assert.deepEqual(s.open_findings,{critical:0,important:0,minor:2});assert.deepEqual(s.deferred_findings,[{id:'R04-M05',owner:'R16',state:'open'},{id:'R04-M08',owner:'R20',state:'open'}]);assert.ok(r.matrix.rows[25].review_state.status === 'done' && r.matrix.rows[25].review_state.release_ready === false);
 for(const mutate of [s=>s.release_ready=true,s=>s.open_findings.minor=0,s=>s.deferred_findings=[],s=>s.valid_independent_evidence=false]){const m=structuredClone(r.matrix);mutate(m.rows[3].review_state);assert.ok(validateMatrix(m).some(e=>e.includes('R04 review_state')))}
 const m=structuredClone(r.matrix);m.rows[6].review_state=s;assert.ok(validateMatrix(m).some(e=>e.includes('R07')));
});
test('R04 independently protects closeout and all pinned evidence from rollback drift or omission',()=>{
 assert.deepEqual(validateR04Closeout('',{read}),[]);const closeout='docs/project/reviews/public-beta-1/r04-controller-closeout.md';assert.ok(r04Closeout.evidence.some(e=>e.path===closeout&&e.sha256===sha(read(closeout))));
 for(const e of [...r04Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)),...r04Closeout.evidence])for(const mode of ['drift','missing',...(e.before?['rollback']:[])]){const errors=validateR04Closeout('',{read:p=>{if(p!==e.path)return read(p);if(mode==='missing')throw Error('missing');return mode==='rollback'?r04PreCloseoutBytes(p,read(p)):Buffer.concat([read(p),Buffer.from('drift')])}});assert.ok(errors.some(x=>x.includes(e.path)),e.path+' '+mode)}
});
