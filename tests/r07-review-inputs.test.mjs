import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {r07Root,r07ManifestPath,validateR07Inputs} from '../scripts/r07-review-inputs.mjs';
const read=p=>readFileSync(resolve(r07Root,p));
test('R07 fixed text and explicit visual N/A do not claim actual review',()=>{
 const r=validateR07Inputs();assert.deepEqual(r.errors,[]);assert.equal(r.entries,9);assert.equal(r.contexts,10);assert.equal(r.images,0);assert.equal(r.reviewComplete,false);assert.equal(r.releaseReady,false);
});
test('R07 rejects missing and changed full text or context',()=>{
 for(const path of ['src/content/docs/08-quality/testing-strategy.md','research/public-beta-review-source-excerpts/r07-testing-2026-11-15.md','AGENTS.md'])for(const missing of [false,true]){
  const r=validateR07Inputs(r07Root,{read:p=>{if(p===path){if(missing)throw Error('missing');return Buffer.concat([read(p),Buffer.from('drift')]);}return read(p);}});assert.ok(r.errors.length>0,path);
 }
});
test('R07 rejects replacement manifest despite recalculated inputs',()=>{
 const r=validateR07Inputs(r07Root,{read:p=>p===r07ManifestPath?Buffer.from(read(p).toString().replace('input-fixed','review-pass')):read(p)});assert.ok(r.errors.includes('R07 manifest mismatch'));
});
test('R07 independently validates exact context lines',()=>{
 const r=validateR07Inputs(r07Root,{read:p=>p==='AGENTS.md'?Buffer.from(read(p).toString().replace('# AGENTS.md','# drift')):read(p)});assert.ok(r.errors.includes('context segment mismatch: AGENTS.md'));
});
test('R07 rejects malformed request and combined-byte drift',()=>{
 const path='docs/project/reviews/public-beta-1/r07-testing-request.md';
 const r=validateR07Inputs(r07Root,{read:p=>p===path?Buffer.from('invalid request'):read(p)});
 assert.ok(r.errors.includes('invalid request'));assert.ok(r.errors.includes('R07 combined mismatch'));
});
