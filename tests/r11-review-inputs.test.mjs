import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {r11Root,r11ManifestPath,validateR11Inputs} from '../scripts/r11-review-inputs.mjs';
const read=p=>readFileSync(resolve(r11Root,p));
test('R11 frozen inputs validate without claiming manuscript or release completion',()=>{
 const r=validateR11Inputs();assert.deepEqual(r.errors,[]);assert.equal(r.entries,32);assert.equal(r.contexts,9);assert.equal(r.reviewComplete,false);assert.equal(r.releaseReady,false);
});
test('R11 rejects missing or changed text and context',()=>{
 for(const path of ['src/content/docs/11-ai-native/working-with-coding-agents.md','research/public-beta-review-source-excerpts/r11-coding-agents-2026-11-15.md','AGENTS.md'])for(const missing of [false,true]){
  const r=validateR11Inputs(r11Root,{read:p=>{if(p===path){if(missing)throw Error('missing');return Buffer.concat([read(p),Buffer.from('drift')]);}return read(p);}});assert.ok(r.errors.length>0,path);
 }
});
test('R11 rejects manifest replacement rather than accepting recalculated inputs',()=>{
 const r=validateR11Inputs(r11Root,{read:p=>p===r11ManifestPath?Buffer.from(read(p).toString().replace('input-fixed','review-pass')):read(p)});assert.ok(r.errors.includes('R11 manifest mismatch'));
});
test('R11 independently checks declared context lines',()=>{
 const r=validateR11Inputs(r11Root,{read:p=>p==='AGENTS.md'?Buffer.from(read(p).toString().replace('# AGENTS.md','# drift')):read(p)});assert.ok(r.errors.includes('context segment mismatch: AGENTS.md'));
});
const png=JSON.parse(read(r11ManifestPath)).entries.find(x=>x.path.endsWith('.png')).path;
test('R11 local pixels and render provenance fail closed',{skip:!existsSync(resolve(r11Root,png))},()=>{
 assert.deepEqual(validateR11Inputs(r11Root,{localEvidence:true}).errors,[]);
 for(const mode of ['missing','corrupt','provenance']){
  const r=validateR11Inputs(r11Root,{localEvidence:true,read:p=>{if(p===png&&mode==='missing')throw Error('missing');if(p===png&&mode==='corrupt')return Buffer.from('invalid');if(p==='output/playwright/task20-agent-evidence/manifest.jsonl'&&mode==='provenance')return Buffer.concat([read(p),Buffer.from('drift')]);return read(p);}});
  assert.ok(r.errors.length>0);if(mode==='corrupt'){assert.ok(r.errors.includes('invalid PNG: '+png));assert.ok(r.errors.includes('R11 combined mismatch'));}if(mode==='provenance')assert.ok(r.errors.includes('render provenance mismatch'));
 }
});
