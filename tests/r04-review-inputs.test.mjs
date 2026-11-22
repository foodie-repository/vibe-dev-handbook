import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {r04Root,r04ManifestPath,validateR04Inputs} from '../scripts/r04-review-inputs.mjs';
const read=p=>readFileSync(resolve(r04Root,p));
test('R04 frozen inputs validate without claiming manuscript or release completion',()=>{
 const r=validateR04Inputs();assert.deepEqual(r.errors,[]);assert.equal(r.entries,32);assert.equal(r.contexts,13);assert.equal(r.reviewComplete,false);assert.equal(r.releaseReady,false);
});
test('R04 rejects missing or changed text and context',()=>{
 for(const path of ['src/content/docs/04-backend-data/api-database-auth.md','research/public-beta-review-source-excerpts/r04-api-data-auth-2026-11-15.md','AGENTS.md'])for(const missing of [false,true]){
  const r=validateR04Inputs(r04Root,{read:p=>{if(p===path){if(missing)throw Error('missing');return Buffer.concat([read(p),Buffer.from('drift')]);}return read(p);}});assert.ok(r.errors.length>0,path);
 }
});
test('R04 rejects manifest replacement rather than accepting recalculated inputs',()=>{
 const r=validateR04Inputs(r04Root,{read:p=>p===r04ManifestPath?Buffer.from(read(p).toString().replace('input-fixed','review-pass')):read(p)});assert.ok(r.errors.includes('R04 manifest mismatch'));
});
test('R04 independently checks declared context lines',()=>{
 const r=validateR04Inputs(r04Root,{read:p=>p==='AGENTS.md'?Buffer.from(read(p).toString().replace('# AGENTS.md','# drift')):read(p)});assert.ok(r.errors.includes('context segment mismatch: AGENTS.md'));
});
const png=JSON.parse(read(r04ManifestPath)).entries.find(x=>x.path.endsWith('.png')).path;
test('R04 local pixels and render provenance fail closed',{skip:!existsSync(resolve(r04Root,png))},()=>{
 assert.deepEqual(validateR04Inputs(r04Root,{localEvidence:true}).errors,[]);
 for(const mode of ['missing','corrupt','provenance']){
  const r=validateR04Inputs(r04Root,{localEvidence:true,read:p=>{if(p===png&&mode==='missing')throw Error('missing');if(p===png&&mode==='corrupt')return Buffer.from('invalid');if(p==='output/playwright/task20-api-split-evidence/manifest.jsonl'&&mode==='provenance')return Buffer.concat([read(p),Buffer.from('drift')]);return read(p);}});
  assert.ok(r.errors.length>0);if(mode==='corrupt'){assert.ok(r.errors.includes('invalid PNG: '+png));assert.ok(r.errors.includes('R04 combined mismatch'));}if(mode==='provenance')assert.ok(r.errors.includes('render provenance mismatch'));
 }
});
