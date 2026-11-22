import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {r10Root,r10ManifestPath,validateR10Inputs} from '../scripts/r10-review-inputs.mjs';
const read=p=>readFileSync(resolve(r10Root,p));
test('R10 frozen inputs validate without claiming manuscript or release completion',()=>{
 const r=validateR10Inputs();assert.deepEqual(r.errors,[]);assert.equal(r.entries,38);assert.equal(r.contexts,9);assert.equal(r.reviewComplete,false);assert.equal(r.releaseReady,false);
});
test('R10 rejects missing or changed text and context',()=>{
 for(const path of ['src/content/docs/10-deployment-operations/logs-monitoring-backup.md','research/public-beta-review-source-excerpts/r10-operations-2026-11-15.md','AGENTS.md'])for(const missing of [false,true]){
  const r=validateR10Inputs(r10Root,{read:p=>{if(p===path){if(missing)throw Error('missing');return Buffer.concat([read(p),Buffer.from('drift')]);}return read(p);}});assert.ok(r.errors.length>0,path);
 }
});
test('R10 rejects manifest replacement rather than accepting recalculated inputs',()=>{
 const r=validateR10Inputs(r10Root,{read:p=>p===r10ManifestPath?Buffer.from(read(p).toString().replace('input-fixed','review-pass')):read(p)});assert.ok(r.errors.includes('R10 manifest mismatch'));
});
test('R10 independently checks declared context lines',()=>{
 const r=validateR10Inputs(r10Root,{read:p=>p==='AGENTS.md'?Buffer.from(read(p).toString().replace('# AGENTS.md','# drift')):read(p)});assert.ok(r.errors.includes('context segment mismatch: AGENTS.md'));
});
const png=JSON.parse(read(r10ManifestPath)).entries.find(x=>x.path.endsWith('.png')).path;
test('R10 local pixels and render provenance fail closed',{skip:!existsSync(resolve(r10Root,png))},()=>{
 assert.deepEqual(validateR10Inputs(r10Root,{localEvidence:true}).errors,[]);
 for(const mode of ['missing','corrupt','provenance','context-provenance']){
  const r=validateR10Inputs(r10Root,{localEvidence:true,read:p=>{if(p===png&&mode==='missing')throw Error('missing');if(p===png&&mode==='corrupt')return Buffer.from('invalid');if(p==='output/playwright/task20-operations-evidence/manifest.jsonl'&&mode==='provenance')return Buffer.concat([read(p),Buffer.from('drift')]);if(p==='output/playwright/task20-operations-evidence/fix1-context.jsonl'&&mode==='context-provenance')return Buffer.concat([read(p),Buffer.from('drift')]);return read(p);}});
  assert.ok(r.errors.length>0);if(mode==='corrupt'){assert.ok(r.errors.includes('invalid PNG: '+png));assert.ok(r.errors.includes('R10 combined mismatch'));}if(mode==='provenance')assert.ok(r.errors.includes('render provenance mismatch'));if(mode==='context-provenance')assert.ok(r.errors.includes('context render provenance mismatch'));
 }
});
