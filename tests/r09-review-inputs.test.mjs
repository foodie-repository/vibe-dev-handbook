import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {r09Root,r09ManifestPath,validateR09Inputs} from '../scripts/r09-review-inputs.mjs';
const read=p=>readFileSync(resolve(r09Root,p));
test('R09 frozen inputs validate without claiming manuscript or release completion',()=>{
 const r=validateR09Inputs();assert.deepEqual(r.errors,[]);assert.equal(r.entries,36);assert.equal(r.contexts,10);assert.equal(r.reviewComplete,false);assert.equal(r.releaseReady,false);
});
test('R09 rejects missing or changed text and context',()=>{
 for(const path of ['src/content/docs/10-deployment-operations/build-deploy-domain-dns.md','research/public-beta-review-source-excerpts/r09-build-deploy-2026-11-15.md','AGENTS.md'])for(const missing of [false,true]){
  const r=validateR09Inputs(r09Root,{read:p=>{if(p===path){if(missing)throw Error('missing');return Buffer.concat([read(p),Buffer.from('drift')]);}return read(p);}});assert.ok(r.errors.length>0,path);
 }
});
test('R09 rejects manifest replacement rather than accepting recalculated inputs',()=>{
 const r=validateR09Inputs(r09Root,{read:p=>p===r09ManifestPath?Buffer.from(read(p).toString().replace('input-fixed','review-pass')):read(p)});assert.ok(r.errors.includes('R09 manifest mismatch'));
});
test('R09 independently checks declared context lines',()=>{
 const r=validateR09Inputs(r09Root,{read:p=>p==='AGENTS.md'?Buffer.from(read(p).toString().replace('# AGENTS.md','# drift')):read(p)});assert.ok(r.errors.includes('context segment mismatch: AGENTS.md'));
});
const png=JSON.parse(read(r09ManifestPath)).entries.find(x=>x.path.endsWith('.png')).path;
test('R09 local pixels and render provenance fail closed',{skip:!existsSync(resolve(r09Root,png))},()=>{
 assert.deepEqual(validateR09Inputs(r09Root,{localEvidence:true}).errors,[]);
 for(const mode of ['missing','corrupt','provenance']){
  const r=validateR09Inputs(r09Root,{localEvidence:true,read:p=>{if(p===png&&mode==='missing')throw Error('missing');if(p===png&&mode==='corrupt')return Buffer.from('invalid');if(p==='output/playwright/task20-deploy-evidence/manifest.jsonl'&&mode==='provenance')return Buffer.concat([read(p),Buffer.from('drift')]);return read(p);}});
  assert.ok(r.errors.length>0);if(mode==='corrupt'){assert.ok(r.errors.includes('invalid PNG: '+png));assert.ok(r.errors.includes('R09 combined mismatch'));}if(mode==='provenance')assert.ok(r.errors.includes('render provenance mismatch'));
 }
});
