import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {r19Root,r19ManifestPath,validateR19Inputs} from '../scripts/r19-review-inputs.mjs';
const read=p=>readFileSync(resolve(r19Root,p));
test('R19 frozen inputs validate without claiming manuscript or release completion',()=>{
 const r=validateR19Inputs();assert.deepEqual(r.errors,[]);assert.equal(r.entries,133);assert.equal(r.contexts,9);assert.equal(r.reviewComplete,false);assert.equal(r.releaseReady,false);
});
test('R19 rejects missing or changed text and context',()=>{
 for(const path of ['src/content/docs/07-workflow-methods/code-review-ci-cd.md','research/public-beta-review-source-excerpts/r19-workflow-support-2026-11-16.md','AGENTS.md'])for(const missing of [false,true]){
  const r=validateR19Inputs(r19Root,{read:p=>{if(p===path){if(missing)throw Error('missing');return Buffer.concat([read(p),Buffer.from('drift')]);}return read(p);}});assert.ok(r.errors.length>0,path);
 }
});
test('R19 rejects manifest replacement rather than accepting recalculated inputs',()=>{
 const r=validateR19Inputs(r19Root,{read:p=>p===r19ManifestPath?Buffer.from(read(p).toString().replace('input-fixed','review-pass')):read(p)});assert.ok(r.errors.includes('R19 manifest mismatch'));
});
test('R19 independently checks declared context lines',()=>{
 const r=validateR19Inputs(r19Root,{read:p=>p==='AGENTS.md'?Buffer.from(read(p).toString().replace('# AGENTS.md','# drift')):read(p)});assert.ok(r.errors.includes('context segment mismatch: AGENTS.md'));
});
const png=JSON.parse(read(r19ManifestPath)).entries.find(x=>x.path.endsWith('.png')).path;
test('R19 local pixels and render provenance fail closed',{skip:!existsSync(resolve(r19Root,png))},()=>{
 assert.deepEqual(validateR19Inputs(r19Root,{localEvidence:true}).errors,[]);
 for(const mode of ['missing','corrupt','provenance']){
  const r=validateR19Inputs(r19Root,{localEvidence:true,read:p=>{if(p===png&&mode==='missing')throw Error('missing');if(p===png&&mode==='corrupt')return Buffer.from('invalid');if(p==='output/playwright/r19-inputs-20261116-corrected-pilot/observations.json'&&mode==='provenance')return Buffer.concat([read(p),Buffer.from('drift')]);return read(p);}});
  assert.ok(r.errors.length>0);if(mode==='corrupt'){assert.ok(r.errors.includes('invalid PNG: '+png));assert.ok(r.errors.includes('R19 combined mismatch'));}if(mode==='provenance')assert.ok(r.errors.includes('render provenance mismatch'));
 }
});
