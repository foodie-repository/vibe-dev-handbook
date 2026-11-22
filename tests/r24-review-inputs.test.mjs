import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {r24Root,r24ManifestPath,validateR24Inputs} from '../scripts/r24-review-inputs.mjs';
const read=p=>readFileSync(resolve(r24Root,p));
test('R24 frozen inputs validate without claiming manuscript or release completion',()=>{
 const r=validateR24Inputs();assert.deepEqual(r.errors,[]);assert.equal(r.entries,260);assert.equal(r.contexts,8);assert.equal(r.reviewComplete,false);assert.equal(r.releaseReady,false);
});
test('R24 rejects missing or changed text and context',()=>{
 for(const path of ['src/content/docs/start-here/how-to-use-this-guide.md','research/public-beta-review-source-excerpts/r24-navigation-context-2026-11-16.md','AGENTS.md'])for(const missing of [false,true]){
  const r=validateR24Inputs(r24Root,{read:p=>{if(p===path){if(missing)throw Error('missing');return Buffer.concat([read(p),Buffer.from('drift')]);}return read(p);}});assert.ok(r.errors.length>0,path);
 }
});
test('R24 rejects manifest replacement rather than accepting recalculated inputs',()=>{
 const r=validateR24Inputs(r24Root,{read:p=>p===r24ManifestPath?Buffer.from(read(p).toString().replace('input-fixed','review-pass')):read(p)});assert.ok(r.errors.includes('R24 manifest mismatch'));
});
test('R24 independently checks declared context lines',()=>{
 const r=validateR24Inputs(r24Root,{read:p=>p==='AGENTS.md'?Buffer.from(read(p).toString().replace('# AGENTS.md','# drift')):read(p)});assert.ok(r.errors.includes('context segment mismatch: AGENTS.md'));
});
const png=JSON.parse(read(r24ManifestPath)).entries.find(x=>x.path.endsWith('.png')).path;
test('R24 local pixels and render provenance fail closed',{skip:!existsSync(resolve(r24Root,png))},()=>{
 assert.deepEqual(validateR24Inputs(r24Root,{localEvidence:true}).errors,[]);
 for(const mode of ['missing','corrupt','provenance']){
  const r=validateR24Inputs(r24Root,{localEvidence:true,read:p=>{if(p===png&&mode==='missing')throw Error('missing');if(p===png&&mode==='corrupt')return Buffer.from('invalid');if(p==='output/playwright/r24-inputs-20261116-observations.json'&&mode==='provenance')return Buffer.concat([read(p),Buffer.from('drift')]);return read(p);}});
  assert.ok(r.errors.length>0);if(mode==='corrupt'){assert.ok(r.errors.includes('invalid PNG: '+png));assert.ok(r.errors.includes('R24 combined mismatch'));}if(mode==='provenance')assert.ok(r.errors.includes('render provenance mismatch'));
 }
});

test('R24 adjacent title/context snapshot rejects drift without claiming whole adjacent review',()=>{const path='src/content/docs/03-full-stack/http-request-response.md';const r=validateR24Inputs(r24Root,{read:p=>p===path?Buffer.concat([read(p),Buffer.from('drift')]):read(p)});assert.ok(r.errors.includes('R24 adjacent context drift: '+path));});
