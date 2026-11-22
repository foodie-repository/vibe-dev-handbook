import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {r22Root,r22ManifestPath,validateR22Inputs} from '../scripts/r22-review-inputs.mjs';
const read=p=>readFileSync(resolve(r22Root,p));
test('R22 frozen inputs validate without claiming manuscript or release completion',()=>{
 const r=validateR22Inputs();assert.deepEqual(r.errors,[]);assert.equal(r.entries,52);assert.equal(r.contexts,9);assert.equal(r.reviewComplete,false);assert.equal(r.releaseReady,false);
});
test('R22 rejects missing or changed text and context',()=>{
 for(const path of ['src/content/docs/10-deployment-operations/environment-variables-config.md','research/public-beta-review-source-excerpts/r22-deploy-config-2026-11-16.md','AGENTS.md'])for(const missing of [false,true]){
  const r=validateR22Inputs(r22Root,{read:p=>{if(p===path){if(missing)throw Error('missing');return Buffer.concat([read(p),Buffer.from('drift')]);}return read(p);}});assert.ok(r.errors.length>0,path);
 }
});
test('R22 rejects manifest replacement rather than accepting recalculated inputs',()=>{
 const r=validateR22Inputs(r22Root,{read:p=>p===r22ManifestPath?Buffer.from(read(p).toString().replace('input-fixed','review-pass')):read(p)});assert.ok(r.errors.includes('R22 manifest mismatch'));
});
test('R22 independently checks declared context lines',()=>{
 const r=validateR22Inputs(r22Root,{read:p=>p==='AGENTS.md'?Buffer.from(read(p).toString().replace('# AGENTS.md','# drift')):read(p)});assert.ok(r.errors.includes('context segment mismatch: AGENTS.md'));
});
const png=JSON.parse(read(r22ManifestPath)).entries.find(x=>x.path.endsWith('.png')).path;
test('R22 local pixels and render provenance fail closed',{skip:!existsSync(resolve(r22Root,png))},()=>{
 assert.deepEqual(validateR22Inputs(r22Root,{localEvidence:true}).errors,[]);
 for(const mode of ['missing','corrupt','provenance']){
  const r=validateR22Inputs(r22Root,{localEvidence:true,read:p=>{if(p===png&&mode==='missing')throw Error('missing');if(p===png&&mode==='corrupt')return Buffer.from('invalid');if(p==='output/playwright/r22-inputs-20261116-pilot/observations.json'&&mode==='provenance')return Buffer.concat([read(p),Buffer.from('drift')]);return read(p);}});
  assert.ok(r.errors.length>0);if(mode==='corrupt'){assert.ok(r.errors.includes('invalid PNG: '+png));assert.ok(r.errors.includes('R22 combined mismatch'));}if(mode==='provenance')assert.ok(r.errors.includes('render provenance mismatch'));
 }
});
