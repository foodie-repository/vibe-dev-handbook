import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {r23Root,r23ManifestPath,validateR23Inputs} from '../scripts/r23-review-inputs.mjs';
const read=p=>readFileSync(resolve(r23Root,p));
test('R23 frozen inputs validate without claiming manuscript or release completion',()=>{
 const r=validateR23Inputs();assert.deepEqual(r.errors,[]);assert.equal(r.entries,109);assert.equal(r.contexts,9);assert.equal(r.reviewComplete,false);assert.equal(r.releaseReady,false);
});
test('R23 rejects missing or changed text and context',()=>{
 for(const path of ['src/content/docs/11-ai-native/agent-review-and-verification.md','research/public-beta-review-source-excerpts/r23-ai-support-2026-11-16.md','AGENTS.md'])for(const missing of [false,true]){
  const r=validateR23Inputs(r23Root,{read:p=>{if(p===path){if(missing)throw Error('missing');return Buffer.concat([read(p),Buffer.from('drift')]);}return read(p);}});assert.ok(r.errors.length>0,path);
 }
});
test('R23 rejects manifest replacement rather than accepting recalculated inputs',()=>{
 const r=validateR23Inputs(r23Root,{read:p=>p===r23ManifestPath?Buffer.from(read(p).toString().replace('input-fixed','review-pass')):read(p)});assert.ok(r.errors.includes('R23 manifest mismatch'));
});
test('R23 independently checks declared context lines',()=>{
 const r=validateR23Inputs(r23Root,{read:p=>p==='AGENTS.md'?Buffer.from(read(p).toString().replace('# AGENTS.md','# drift')):read(p)});assert.ok(r.errors.includes('context segment mismatch: AGENTS.md'));
});
const png=JSON.parse(read(r23ManifestPath)).entries.find(x=>x.path.endsWith('.png')).path;
test('R23 local pixels and render provenance fail closed',{skip:!existsSync(resolve(r23Root,png))},()=>{
 assert.deepEqual(validateR23Inputs(r23Root,{localEvidence:true}).errors,[]);
 for(const mode of ['missing','corrupt','provenance']){
  const r=validateR23Inputs(r23Root,{localEvidence:true,read:p=>{if(p===png&&mode==='missing')throw Error('missing');if(p===png&&mode==='corrupt')return Buffer.from('invalid');if(p==='output/playwright/r23-inputs-20261116-pilot/observations.json'&&mode==='provenance')return Buffer.concat([read(p),Buffer.from('drift')]);return read(p);}});
  assert.ok(r.errors.length>0);if(mode==='corrupt'){assert.ok(r.errors.includes('invalid PNG: '+png));assert.ok(r.errors.includes('R23 combined mismatch'));}if(mode==='provenance')assert.ok(r.errors.includes('render provenance mismatch'));
 }
});
