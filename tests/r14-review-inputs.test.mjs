import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {r14Root,r14ManifestPath,validateR14Inputs} from '../scripts/r14-review-inputs.mjs';
const read=p=>readFileSync(resolve(r14Root,p));
test('R14 frozen inputs validate without claiming manuscript or release completion',()=>{
 const r=validateR14Inputs();assert.deepEqual(r.errors,[]);assert.equal(r.entries,69);assert.equal(r.contexts,9);assert.equal(r.reviewComplete,false);assert.equal(r.releaseReady,false);
});
test('R14 rejects missing or changed text and context',()=>{
 for(const path of ['src/content/docs/01-mental-models/abstraction-and-tradeoffs.md','research/public-beta-review-source-excerpts/r14-mental-support-2026-11-15.md','AGENTS.md'])for(const missing of [false,true]){
  const r=validateR14Inputs(r14Root,{read:p=>{if(p===path){if(missing)throw Error('missing');return Buffer.concat([read(p),Buffer.from('drift')]);}return read(p);}});assert.ok(r.errors.length>0,path);
 }
});
test('R14 rejects manifest replacement rather than accepting recalculated inputs',()=>{
 const r=validateR14Inputs(r14Root,{read:p=>p===r14ManifestPath?Buffer.from(read(p).toString().replace('input-fixed','review-pass')):read(p)});assert.ok(r.errors.includes('R14 manifest mismatch'));
});
test('R14 independently checks declared context lines',()=>{
 const r=validateR14Inputs(r14Root,{read:p=>p==='AGENTS.md'?Buffer.from(read(p).toString().replace('# AGENTS.md','# drift')):read(p)});assert.ok(r.errors.includes('context segment mismatch: AGENTS.md'));
});
const png=JSON.parse(read(r14ManifestPath)).entries.find(x=>x.path.endsWith('.png')).path;
test('R14 local pixels and render provenance fail closed',{skip:!existsSync(resolve(r14Root,png))},()=>{
 assert.deepEqual(validateR14Inputs(r14Root,{localEvidence:true}).errors,[]);
 for(const mode of ['missing','corrupt','provenance']){
  const r=validateR14Inputs(r14Root,{localEvidence:true,read:p=>{if(p===png&&mode==='missing')throw Error('missing');if(p===png&&mode==='corrupt')return Buffer.from('invalid');if(p==='output/playwright/r14-inputs-20261115-pilot/observations.json'&&mode==='provenance')return Buffer.concat([read(p),Buffer.from('drift')]);return read(p);}});
  assert.ok(r.errors.length>0);if(mode==='corrupt'){assert.ok(r.errors.includes('invalid PNG: '+png));assert.ok(r.errors.includes('R14 combined mismatch'));}if(mode==='provenance')assert.ok(r.errors.includes('render provenance mismatch'));
 }
});
