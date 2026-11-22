import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {resolve} from 'node:path';
import {r03Root,r03ManifestPath,validateR03Inputs} from '../scripts/r03-review-inputs.mjs';
import {r03FixTransitions,r03PreFixBytes,validateR03Current} from '../scripts/r03-fix-transition.mjs';
import {r03PreCloseoutBytes} from '../scripts/r03-closeout.mjs';

test('R03 frozen preparation validates tracked inputs without claiming review completion',()=>{
 const r=validateR03Inputs();assert.deepEqual(r.errors,[]);assert.equal(r.entries,26);assert.equal(r.contexts,17);assert.equal(r.localEvidence,'not-checked');assert.equal(r.reviewComplete,false);assert.equal(r.releaseReady,false);
});
test('R03 rejects missing or changed tracked text and contexts',()=>{
 for(const path of ['src/content/docs/03-full-stack/http-request-response.md','research/public-beta-review-source-excerpts/r03-http-2026-10-25.md','AGENTS.md']){
  for(const missing of [false,true]){
   const r=validateR03Inputs(r03Root,{read:p=>{if(p===path){if(missing)throw Error('missing');return Buffer.concat([readFileSync(resolve(r03Root,p)),Buffer.from('drift')])}return readFileSync(resolve(r03Root,p))}});
   assert.ok(r.errors.length>0,path);
  }
 }
});
test('R03 cannot bless changed input by rewriting the frozen manifest',()=>{
 const r=validateR03Inputs(r03Root,{read:p=>p===r03ManifestPath?Buffer.from(readFileSync(resolve(r03Root,p),'utf8').replace('input-fixed','review-pass')):readFileSync(resolve(r03Root,p))});assert.ok(r.errors.includes('R03 manifest mismatch'));
});

test('R03 exact finding patch restores historical bytes and rejects unknown bytes or rollback',()=>{
 const sha=b=>createHash('sha256').update(b).digest('hex');
 const read=p=>readFileSync(resolve(r03Root,p));
 assert.deepEqual(validateR03Current(read),[]);
 for(const e of r03FixTransitions){
  const now=read(e.path),before=r03PreFixBytes(e.path,now);
  assert.equal(sha(r03PreCloseoutBytes(e.path,now)),e.after);assert.equal(sha(before),e.before);assert.notDeepEqual(now,before);
  for(const changed of [before,Buffer.concat([now,Buffer.from('drift')])]){
   const r=validateR03Inputs(r03Root,{read:p=>p===e.path?changed:read(p)});
   assert.ok(r.errors.includes('R03 current patch mismatch: '+e.path));
  }
 }
});

test('R03 excerpt comparison independently detects a changed line inside the declared segment',()=>{
 const r=validateR03Inputs(r03Root,{read:p=>p==='AGENTS.md'?Buffer.from(readFileSync(resolve(r03Root,p),'utf8').replace('# AGENTS.md','# changed excerpt')):readFileSync(resolve(r03Root,p))});
 assert.ok(r.errors.includes('context segment mismatch: AGENTS.md'));
});

const firstPng=JSON.parse(readFileSync(resolve(r03Root,r03ManifestPath))).entries.find(x=>x.path.endsWith('.png')).path;
test('R03 local evidence rejects PNG absence, bytes, combined drift, and render provenance independently',{skip:!existsSync(resolve(r03Root,firstPng))},()=>{
 const read=p=>readFileSync(resolve(r03Root,p));
 const run=override=>validateR03Inputs(r03Root,{localEvidence:true,read:p=>override(p)});
 assert.deepEqual(run(read).errors,[]);
 const missing=run(p=>{if(p===firstPng)throw Error('missing');return read(p)});
 assert.ok(missing.errors.includes('missing: '+firstPng));assert.ok(missing.errors.includes('R03 combined mismatch'));
 const changed=run(p=>p===firstPng?Buffer.from('invalid png'):read(p));
 assert.ok(changed.errors.includes('hash mismatch: '+firstPng));assert.ok(changed.errors.includes('invalid PNG: '+firstPng));assert.ok(changed.errors.includes('R03 combined mismatch'));
 const provenance='output/playwright/task20-fullstack-evidence/manifest.jsonl';
 const altered=run(p=>p===provenance?Buffer.concat([read(p),Buffer.from('drift')]):read(p));
 assert.ok(altered.errors.includes('render provenance mismatch'));
 assert.equal(altered.reviewComplete,false);assert.equal(altered.releaseReady,false);
});
