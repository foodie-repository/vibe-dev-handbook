import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {r17Root,r17ManifestPath,validateR17Inputs} from '../scripts/r17-review-inputs.mjs';
const read=p=>readFileSync(resolve(r17Root,p));
test('R17 frozen inputs validate without claiming manuscript or release completion',()=>{
 const r=validateR17Inputs();assert.deepEqual(r.errors,[]);assert.equal(r.entries,124);assert.equal(r.contexts,9);assert.equal(r.reviewComplete,false);assert.equal(r.releaseReady,false);
});
test('R17 rejects missing or changed text and context',()=>{
 for(const path of ['src/content/docs/05-frontend/ui-state-and-ux.md','research/public-beta-review-source-excerpts/r17-frontend-support-2026-11-15.md','AGENTS.md'])for(const missing of [false,true]){
  const r=validateR17Inputs(r17Root,{read:p=>{if(p===path){if(missing)throw Error('missing');return Buffer.concat([read(p),Buffer.from('drift')]);}return read(p);}});assert.ok(r.errors.length>0,path);
 }
});
test('R17 rejects manifest replacement rather than accepting recalculated inputs',()=>{
 const r=validateR17Inputs(r17Root,{read:p=>p===r17ManifestPath?Buffer.from(read(p).toString().replace('input-fixed','review-pass')):read(p)});assert.ok(r.errors.includes('R17 manifest mismatch'));
});
test('R17 independently checks declared context lines',()=>{
 const r=validateR17Inputs(r17Root,{read:p=>p==='AGENTS.md'?Buffer.from(read(p).toString().replace('# AGENTS.md','# drift')):read(p)});assert.ok(r.errors.includes('context segment mismatch: AGENTS.md'));
});
const png=JSON.parse(read(r17ManifestPath)).entries.find(x=>x.path.endsWith('.png')).path;
test('R17 local pixels and render provenance fail closed',{skip:!existsSync(resolve(r17Root,png))},()=>{
 assert.deepEqual(validateR17Inputs(r17Root,{localEvidence:true}).errors,[]);
 for(const mode of ['missing','corrupt','provenance']){
  const r=validateR17Inputs(r17Root,{localEvidence:true,read:p=>{if(p===png&&mode==='missing')throw Error('missing');if(p===png&&mode==='corrupt')return Buffer.from('invalid');if(p==='output/playwright/r17-inputs-20261115-pilot/observations.json'&&mode==='provenance')return Buffer.concat([read(p),Buffer.from('drift')]);return read(p);}});
  assert.ok(r.errors.length>0);if(mode==='corrupt'){assert.ok(r.errors.includes('invalid PNG: '+png));assert.ok(r.errors.includes('R17 combined mismatch'));}if(mode==='provenance')assert.ok(r.errors.includes('render provenance mismatch'));
 }
});
