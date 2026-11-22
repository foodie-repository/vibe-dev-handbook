import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,mkdtempSync,mkdirSync,writeFileSync,rmSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {tmpdir} from 'node:os';
import {join,dirname} from 'node:path';
import {r02Closeout,r02PreCloseoutBytes,validateR02Closeout} from '../scripts/r02-closeout.mjs';
import {validateFiles,validateMatrix} from '../scripts/validate-m5-review-matrix.mjs';
import {r03PreFixBytes} from '../scripts/r03-fix-transition.mjs';
const hash=x=>createHash('sha256').update(x).digest('hex');
import {preReadyBytes} from '../scripts/r26-closeout.mjs';
const read=p=>preReadyBytes(p,readFileSync(new URL('../'+p,import.meta.url)));
test('R02 closeout keeps every previous byte and only changes metadata on the manuscript',()=>{
 for(const e of r02Closeout.changes){
  const current=read(e.path);assert.equal(hash(r03PreFixBytes(e.path,current)),e.after);
  assert.equal(hash(r02PreCloseoutBytes(e.path,current)),e.before);
  const drift=Buffer.concat([current,Buffer.from('drift')]);
  assert.deepEqual(r02PreCloseoutBytes(e.path,drift),drift);
 }
 const e=r02Closeout.changes[0],current=read(e.path).toString(),previous=r02PreCloseoutBytes(e.path,read(e.path)).toString();
 assert.equal(current.split('\n---\n')[1],previous.split('\n---\n')[1]);
 assert.match(current,/contentStatus: review/);assert.match(previous,/contentStatus: draft/);
});
test('R02 done is separate from historical BLOCKED and remaining rows/release gates',()=>{
 const result=validateFiles();assert.deepEqual(result.errors,[]);
 const state=result.matrix.rows[1].review_state;
 assert.equal(state.status,'done');assert.equal(state.historical_verdict,'BLOCKED');
 assert.equal(state.release_ready,false);assert.deepEqual(state.open_findings,{critical:0,important:0,minor:0});
 assert.equal(result.r02Execution.actualReview,'not-run'); // frozen historical execution input, not current verdict
 for(const field of ['release_ready','valid_independent_evidence']){
  const matrix=structuredClone(result.matrix);matrix.rows[1].review_state[field]=!state[field];
  assert.ok(validateMatrix(matrix).some(e=>e.includes('R02 review_state')));
 }
 const matrix=structuredClone(result.matrix);matrix.rows[2].review_state=state;
 assert.ok(validateMatrix(matrix).some(e=>e.includes('R03')));
});
test('R02 closeout rejects any missing or tampered current state or canonical evidence',()=>{
 const root=mkdtempSync(join(tmpdir(),'r02-closeout-'));
 try{
  const entries=[...r02Closeout.changes.filter(x=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(x.path)),...r02Closeout.evidence];
  for(const e of entries){mkdirSync(dirname(join(root,e.path)),{recursive:true});writeFileSync(join(root,e.path),read(e.path));}
  assert.deepEqual(validateR02Closeout(root),[]);
  for(const e of entries){
   const full=join(root,e.path),original=read(e.path);
   writeFileSync(full,Buffer.concat([original,Buffer.from('drift')]));
   assert.ok(validateR02Closeout(root).some(x=>x.includes(e.path)));
   rmSync(full);assert.ok(validateR02Closeout(root).some(x=>x.includes(e.path)));
   writeFileSync(full,original);
  }
 }finally{rmSync(root,{recursive:true,force:true});}
});
