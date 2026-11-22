import {r24PreCloseoutBytes,validateR24Closeout} from './r24-closeout.mjs';
import {r24PreFixBytes,validateR24Current} from './r24-fix-transition.mjs';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

export const r24ManifestPath='docs/project/reviews/public-beta-1/r24-navigation-input-manifest.json';
export const r24ManifestSha="d91392e73411b7d3680b67fd579f9efd6c7bb9240df2e560e159d2e6d7704607";
export const r24Root=resolve(fileURLToPath(new URL('../',import.meta.url)));
const hash=b=>createHash('sha256').update(b).digest('hex');

// Frozen R24 preparation only; not a review result or a status promotion.
export function validateR24Inputs(root=r24Root,{localEvidence=false,read=p=>readFileSync(resolve(root,p))}={}){
  const historical=p=>r24PreCloseoutBytes(p,read(p));
  const errors=[...validateR24Closeout(root,{read}),...validateR24Current(historical)], missingLocal=[];let manifest,request;
  const load=p=>{try{return r24PreFixBytes(p,historical(p))}catch{errors.push('missing: '+p);return null}};
  const bytes=load(r24ManifestPath);
  if(!bytes||hash(bytes)!==r24ManifestSha)return {errors:[...errors,'R24 manifest mismatch']};
  try{manifest=JSON.parse(bytes)}catch{return {errors:['R24 invalid manifest']}};
  const combined=createHash('sha256').update('sha256-framed-bytes-v1\n');
  for(const e of manifest.entries){
    if(e.path.endsWith('.png')&&!localEvidence){missingLocal.push(e.path);continue}
    const b=load(e.path);if(!b)continue;
    if(hash(b)!==e.sha256||b.length!==e.bytes)errors.push('hash mismatch: '+e.path);
    const p=Buffer.from(e.path);
    combined.update('path-bytes:'+p.length+'\n').update(p).update('\ncontent-bytes:'+b.length+'\n').update(b).update('\n');
    if(e.path.endsWith('.png')&&(b.length<24||!b.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]))||b.toString('ascii',12,16)!=='IHDR'))errors.push('invalid PNG: '+e.path);
    if(e.path.endsWith('r24-navigation-request.md'))try{request=JSON.parse(b.toString().split('<!-- m5-r24-request:data:start -->\n```json\n')[1].split('\n```')[0])}catch{errors.push('invalid request')}
  }
  if(localEvidence&&combined.digest('hex')!==manifest.combined_sha256)errors.push('R24 combined mismatch');
  for(const c of request?.context_excerpts??[]){
    if(c.path.startsWith('.superpowers/')&&!localEvidence)continue;
    const b=load(c.path);if(!b)continue;
    if(hash(b)!==c.sha256)errors.push('context hash mismatch: '+c.path);
    const lines=b.toString().split('\n');
    for(const s of c.segments)if(lines.slice(s.start_line-1,s.end_line).join('\n')!==s.text)errors.push('context segment mismatch: '+c.path);
  }
  if(localEvidence&&request?.render_provenance){const b=load(request.render_provenance.manifest_path);if(b&&hash(b)!==request.render_provenance.manifest_sha256)errors.push('render provenance mismatch')}
  if(localEvidence&&request?.render_provenance?.context_manifest_path){const b=load(request.render_provenance.context_manifest_path);if(b&&hash(b)!==request.render_provenance.context_manifest_sha256)errors.push('context render provenance mismatch')}
  if(localEvidence)for(const e of request?.render_provenance?.additional_context_manifests??[]){const b=load(e.path);if(b&&hash(b)!==e.sha256)errors.push('additional render provenance mismatch')}
  if(request?.review_id!=='R24'||request?.images?.length!==226||request?.targets?.length!==18)errors.push('R24 scope mismatch');
  const direct=load('research/public-beta-review-source-excerpts/r24-navigation-context-2026-11-16.md');
  if(direct){const matches=[...direct.toString().matchAll(/^## (src\/content\/docs\/[^\n]+)\n\n전체 파일 SHA-256: ([a-f0-9]{64})/gm)];if(matches.length!==59)errors.push('R24 adjacent context coverage');for(const[,p,sha]of matches){const b=load(p);if(b&&hash(b)!==sha)errors.push('R24 adjacent context drift: '+p);}}
  return {errors,entries:manifest.entries.length,contexts:request?.context_excerpts.length??0,localEvidence:localEvidence?'checked':'not-checked',reviewComplete:false,releaseReady:false};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const r=validateR24Inputs(r24Root,{localEvidence:process.argv.includes('--local-evidence')});console.log(JSON.stringify(r));process.exitCode=r.errors.length?1:0;
}
