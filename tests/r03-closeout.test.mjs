import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r03Closeout,r03PreCloseoutBytes,validateR03Closeout} from '../scripts/r03-closeout.mjs';
import {validateFiles,validateMatrix} from '../scripts/validate-m5-review-matrix.mjs';
import {r04PreFixBytes} from '../scripts/r04-fix-transition.mjs';
import {preReadyBytes} from '../scripts/r26-closeout.mjs';
const read=p=>preReadyBytes(p,readFileSync(new URL('../'+p,import.meta.url)));
const sha=b=>createHash('sha256').update(b).digest('hex');
test('R03 current adjudication document is protected independently of the configured evidence list',()=>{
 const path='docs/project/reviews/public-beta-1/r03-controller-closeout.md';
 assert.ok(r03Closeout.evidence.some(e=>e.path===path&&e.sha256===sha(read(path))));
 for(const missing of [false,true]){const errors=validateR03Closeout('',{read:p=>{if(p!==path)return read(p);if(missing)throw Error('missing');return Buffer.concat([read(p),Buffer.from('unauthorized release claim')])}});assert.ok(errors.some(e=>e.includes(path)))}
});
test('R03 exact closeout restores every prior byte and changes only manuscript metadata',()=>{
 for(const e of r03Closeout.changes){const now=read(e.path),before=r03PreCloseoutBytes(e.path,now);assert.equal(sha(r04PreFixBytes(e.path,now)),e.after);assert.equal(sha(before),e.before);assert.notDeepEqual(now,before);const drift=Buffer.concat([now,Buffer.from('drift')]);assert.deepEqual(r03PreCloseoutBytes(e.path,drift),drift)}
 const p=r03Closeout.changes[0].path,now=read(p).toString(),before=r03PreCloseoutBytes(p,read(p)).toString();assert.equal(now.split('\n---\n')[1],before.split('\n---\n')[1]);assert.match(now,/contentStatus: review/);assert.match(before,/contentStatus: draft/);
});
test('R03 done preserves initial NEEDS CHANGES and cannot promote other rows or release',()=>{
 const r=validateFiles();assert.deepEqual(r.errors,[]);const state=r.matrix.rows[2].review_state;assert.deepEqual(state,r03Closeout.state);assert.equal(state.historical_verdict,'NEEDS CHANGES');assert.equal(state.release_ready,false);assert.deepEqual(state.open_findings,{critical:0,important:0,minor:0});assert.ok(r.matrix.rows[25].review_state.status === 'done' && r.matrix.rows[25].review_state.release_ready === false);
 for(const field of ['release_ready','valid_independent_evidence']){const m=structuredClone(r.matrix);m.rows[2].review_state[field]=!state[field];assert.ok(validateMatrix(m).some(e=>e.includes('R03 review_state')))}
 const m=structuredClone(r.matrix);m.rows[3].review_state=state;assert.ok(validateMatrix(m).some(e=>e.includes('R04')));
});
test('R03 closeout independently rejects rollback, evidence tampering and missing files',()=>{
 assert.deepEqual(validateR03Closeout('',{read}),[]);
 const entries=[...r03Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)),...r03Closeout.evidence];
 for(const e of entries){for(const mode of ['drift','missing',...(e.before?['rollback']:[])]){const errors=validateR03Closeout('',{read:p=>{if(p!==e.path)return read(p);if(mode==='missing')throw Error('missing');if(mode==='rollback')return r03PreCloseoutBytes(p,read(p));return Buffer.concat([read(p),Buffer.from('drift')])}});assert.ok(errors.some(x=>x.includes(e.path)),e.path+' '+mode)}}
});
