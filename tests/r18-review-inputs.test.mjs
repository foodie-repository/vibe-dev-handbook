import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {r18Root,r18ManifestPath,validateR18Inputs} from '../scripts/r18-review-inputs.mjs';
const read=p=>readFileSync(resolve(r18Root,p));
test('R18 frozen inputs validate without claiming manuscript or release completion',()=>{
 const r=validateR18Inputs();assert.deepEqual(r.errors,[]);assert.equal(r.entries,122);assert.equal(r.contexts,9);assert.equal(r.reviewComplete,false);assert.equal(r.releaseReady,false);
});
test('R18 rejects missing or changed text and context',()=>{
 for(const path of ['src/content/docs/06-requirements-design/adr-and-tradeoffs.md','research/public-beta-review-source-excerpts/r18-design-support-2026-11-15.md','AGENTS.md'])for(const missing of [false,true]){
  const r=validateR18Inputs(r18Root,{read:p=>{if(p===path){if(missing)throw Error('missing');return Buffer.concat([read(p),Buffer.from('drift')]);}return read(p);}});assert.ok(r.errors.length>0,path);
 }
});
test('R18 rejects manifest replacement rather than accepting recalculated inputs',()=>{
 const r=validateR18Inputs(r18Root,{read:p=>p===r18ManifestPath?Buffer.from(read(p).toString().replace('input-fixed','review-pass')):read(p)});assert.ok(r.errors.includes('R18 manifest mismatch'));
});
test('R18 independently checks declared context lines',()=>{
 const r=validateR18Inputs(r18Root,{read:p=>p==='AGENTS.md'?Buffer.from(read(p).toString().replace('# AGENTS.md','# drift')):read(p)});assert.ok(r.errors.includes('context segment mismatch: AGENTS.md'));
});
const png=JSON.parse(read(r18ManifestPath)).entries.find(x=>x.path.endsWith('.png')).path;
test('R18 local pixels and render provenance fail closed',{skip:!existsSync(resolve(r18Root,png))},()=>{
 assert.deepEqual(validateR18Inputs(r18Root,{localEvidence:true}).errors,[]);
 for(const mode of ['missing','corrupt','provenance']){
  const r=validateR18Inputs(r18Root,{localEvidence:true,read:p=>{if(p===png&&mode==='missing')throw Error('missing');if(p===png&&mode==='corrupt')return Buffer.from('invalid');if(p==='output/playwright/r18-inputs-20261115-corrected-pilot/observations.json'&&mode==='provenance')return Buffer.concat([read(p),Buffer.from('drift')]);return read(p);}});
  assert.ok(r.errors.length>0);if(mode==='corrupt'){assert.ok(r.errors.includes('invalid PNG: '+png));assert.ok(r.errors.includes('R18 combined mismatch'));}if(mode==='provenance')assert.ok(r.errors.includes('render provenance mismatch'));
 }
});
