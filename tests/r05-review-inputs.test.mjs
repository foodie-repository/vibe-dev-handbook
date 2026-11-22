import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {r05Root,r05ManifestPath,validateR05Inputs} from '../scripts/r05-review-inputs.mjs';
const read=p=>readFileSync(resolve(r05Root,p));
test('R05 frozen inputs validate without claiming manuscript or release completion',()=>{
 const r=validateR05Inputs();assert.deepEqual(r.errors,[]);assert.equal(r.entries,27);assert.equal(r.contexts,10);assert.equal(r.reviewComplete,false);assert.equal(r.releaseReady,false);
});
test('R05 rejects missing or changed text and context',()=>{
 for(const path of ['src/content/docs/05-frontend/browser-dom-rendering.md','research/public-beta-review-source-excerpts/r05-browser-dom-2026-11-15.md','AGENTS.md'])for(const missing of [false,true]){
  const r=validateR05Inputs(r05Root,{read:p=>{if(p===path){if(missing)throw Error('missing');return Buffer.concat([read(p),Buffer.from('drift')]);}return read(p);}});assert.ok(r.errors.length>0,path);
 }
});
test('R05 rejects manifest replacement rather than accepting recalculated inputs',()=>{
 const r=validateR05Inputs(r05Root,{read:p=>p===r05ManifestPath?Buffer.from(read(p).toString().replace('input-fixed','review-pass')):read(p)});assert.ok(r.errors.includes('R05 manifest mismatch'));
});
test('R05 independently checks declared context lines',()=>{
 const r=validateR05Inputs(r05Root,{read:p=>p==='AGENTS.md'?Buffer.from(read(p).toString().replace('# AGENTS.md','# drift')):read(p)});assert.ok(r.errors.includes('context segment mismatch: AGENTS.md'));
});
const png=JSON.parse(read(r05ManifestPath)).entries.find(x=>x.path.endsWith('.png')).path;
test('R05 local pixels and render provenance fail closed',{skip:!existsSync(resolve(r05Root,png))},()=>{
 assert.deepEqual(validateR05Inputs(r05Root,{localEvidence:true}).errors,[]);
 for(const mode of ['missing','corrupt','provenance']){
  const r=validateR05Inputs(r05Root,{localEvidence:true,read:p=>{if(p===png&&mode==='missing')throw Error('missing');if(p===png&&mode==='corrupt')return Buffer.from('invalid');if(p==='output/playwright/task20-fullstack-evidence/manifest.jsonl'&&mode==='provenance')return Buffer.concat([read(p),Buffer.from('drift')]);return read(p);}});
  assert.ok(r.errors.length>0);if(mode==='corrupt'){assert.ok(r.errors.includes('invalid PNG: '+png));assert.ok(r.errors.includes('R05 combined mismatch'));}if(mode==='provenance')assert.ok(r.errors.includes('render provenance mismatch'));
 }
});
