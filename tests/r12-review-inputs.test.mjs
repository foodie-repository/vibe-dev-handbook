import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {r12Root,r12ManifestPath,validateR12Inputs} from '../scripts/r12-review-inputs.mjs';
const read=p=>readFileSync(resolve(r12Root,p));
test('R12 frozen inputs validate without claiming manuscript or release completion',()=>{
 const r=validateR12Inputs();assert.deepEqual(r.errors,[]);assert.equal(r.entries,42);assert.equal(r.contexts,9);assert.equal(r.reviewComplete,false);assert.equal(r.releaseReady,false);
});
test('R12 rejects missing or changed text and context',()=>{
 for(const path of ['src/content/docs/12-case-studies/first-full-stack-project.md','research/public-beta-review-source-excerpts/r12-meeting-capstone-2026-11-15.md','AGENTS.md'])for(const missing of [false,true]){
  const r=validateR12Inputs(r12Root,{read:p=>{if(p===path){if(missing)throw Error('missing');return Buffer.concat([read(p),Buffer.from('drift')]);}return read(p);}});assert.ok(r.errors.length>0,path);
 }
});
test('R12 rejects manifest replacement rather than accepting recalculated inputs',()=>{
 const r=validateR12Inputs(r12Root,{read:p=>p===r12ManifestPath?Buffer.from(read(p).toString().replace('input-fixed','review-pass')):read(p)});assert.ok(r.errors.includes('R12 manifest mismatch'));
});
test('R12 independently checks declared context lines',()=>{
 const r=validateR12Inputs(r12Root,{read:p=>p==='AGENTS.md'?Buffer.from(read(p).toString().replace('# AGENTS.md','# drift')):read(p)});assert.ok(r.errors.includes('context segment mismatch: AGENTS.md'));
});
const png=JSON.parse(read(r12ManifestPath)).entries.find(x=>x.path.endsWith('.png')).path;
test('R12 local pixels and render provenance fail closed',{skip:!existsSync(resolve(r12Root,png))},()=>{
 assert.deepEqual(validateR12Inputs(r12Root,{localEvidence:true}).errors,[]);
 for(const mode of ['missing','corrupt','provenance']){
  const r=validateR12Inputs(r12Root,{localEvidence:true,read:p=>{if(p===png&&mode==='missing')throw Error('missing');if(p===png&&mode==='corrupt')return Buffer.from('invalid');if(p==='output/playwright/task20-meeting-evidence/manifest.jsonl'&&mode==='provenance')return Buffer.concat([read(p),Buffer.from('drift')]);return read(p);}});
  assert.ok(r.errors.length>0);if(mode==='corrupt'){assert.ok(r.errors.includes('invalid PNG: '+png));assert.ok(r.errors.includes('R12 combined mismatch'));}if(mode==='provenance')assert.ok(r.errors.includes('render provenance mismatch'));
 }
});
