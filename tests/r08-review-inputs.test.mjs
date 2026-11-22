import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {r08Root,r08ManifestPath,validateR08Inputs} from '../scripts/r08-review-inputs.mjs';
const read=p=>readFileSync(resolve(r08Root,p));
test('R08 frozen inputs validate without claiming manuscript or release completion',()=>{
 const r=validateR08Inputs();assert.deepEqual(r.errors,[]);assert.equal(r.entries,31);assert.equal(r.contexts,9);assert.equal(r.reviewComplete,false);assert.equal(r.releaseReady,false);
});
test('R08 rejects missing or changed text and context',()=>{
 for(const path of ['src/content/docs/09-git-github/git-and-github.md','research/public-beta-review-source-excerpts/r08-git-github-2026-11-15.md','AGENTS.md'])for(const missing of [false,true]){
  const r=validateR08Inputs(r08Root,{read:p=>{if(p===path){if(missing)throw Error('missing');return Buffer.concat([read(p),Buffer.from('drift')]);}return read(p);}});assert.ok(r.errors.length>0,path);
 }
});
test('R08 rejects manifest replacement rather than accepting recalculated inputs',()=>{
 const r=validateR08Inputs(r08Root,{read:p=>p===r08ManifestPath?Buffer.from(read(p).toString().replace('input-fixed','review-pass')):read(p)});assert.ok(r.errors.includes('R08 manifest mismatch'));
});
test('R08 independently checks declared context lines',()=>{
 const r=validateR08Inputs(r08Root,{read:p=>p==='AGENTS.md'?Buffer.from(read(p).toString().replace('# AGENTS.md','# drift')):read(p)});assert.ok(r.errors.includes('context segment mismatch: AGENTS.md'));
});
const png=JSON.parse(read(r08ManifestPath)).entries.find(x=>x.path.endsWith('.png')).path;
test('R08 local pixels and render provenance fail closed',{skip:!existsSync(resolve(r08Root,png))},()=>{
 assert.deepEqual(validateR08Inputs(r08Root,{localEvidence:true}).errors,[]);
 for(const mode of ['missing','corrupt','provenance']){
  const r=validateR08Inputs(r08Root,{localEvidence:true,read:p=>{if(p===png&&mode==='missing')throw Error('missing');if(p===png&&mode==='corrupt')return Buffer.from('invalid');if(p==='output/playwright/task20-git-evidence/manifest.jsonl'&&mode==='provenance')return Buffer.concat([read(p),Buffer.from('drift')]);return read(p);}});
  assert.ok(r.errors.length>0);if(mode==='corrupt'){assert.ok(r.errors.includes('invalid PNG: '+png));assert.ok(r.errors.includes('R08 combined mismatch'));}if(mode==='provenance')assert.ok(r.errors.includes('render provenance mismatch'));
 }
});
