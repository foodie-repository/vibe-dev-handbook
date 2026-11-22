import {r12PreFixBytes,validateR12Current} from './r12-fix-transition.mjs';
import {validateR12Closeout} from './r12-closeout.mjs';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

export const r12ManifestPath='docs/project/reviews/public-beta-1/r12-meeting-capstone-input-manifest.json';
export const r12ManifestSha="3f79f94c5de16d3177a477217841f9afddf3001523d8b85edde46a5625162515";
export const r12Root=resolve(fileURLToPath(new URL('../',import.meta.url)));
const hash=b=>createHash('sha256').update(b).digest('hex');

// Frozen R12 preparation only; not a review result or a status promotion.
export function validateR12Inputs(root=r12Root,{localEvidence=false,read=p=>readFileSync(resolve(root,p))}={}){
  const errors=[...validateR12Closeout(root,{read}),...validateR12Current(read)], missingLocal=[];let manifest,request;
  const load=p=>{try{return r12PreFixBytes(p,read(p))}catch{errors.push('missing: '+p);return null}};
  const bytes=load(r12ManifestPath);
  if(!bytes||hash(bytes)!==r12ManifestSha)return {errors:[...errors,'R12 manifest mismatch']};
  try{manifest=JSON.parse(bytes)}catch{return {errors:['R12 invalid manifest']}};
  const combined=createHash('sha256').update('sha256-framed-bytes-v1\n');
  for(const e of manifest.entries){
    if(e.path.endsWith('.png')&&!localEvidence){missingLocal.push(e.path);continue}
    const b=load(e.path);if(!b)continue;
    if(hash(b)!==e.sha256||b.length!==e.bytes)errors.push('hash mismatch: '+e.path);
    const p=Buffer.from(e.path);
    combined.update('path-bytes:'+p.length+'\n').update(p).update('\ncontent-bytes:'+b.length+'\n').update(b).update('\n');
    if(e.path.endsWith('.png')&&(b.length<24||!b.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]))||b.toString('ascii',12,16)!=='IHDR'))errors.push('invalid PNG: '+e.path);
    if(e.path.endsWith('r12-meeting-capstone-request.md'))try{request=JSON.parse(b.toString().split('<!-- m5-r12-request:data:start -->\n```json\n')[1].split('\n```')[0])}catch{errors.push('invalid request')}
  }
  if(localEvidence&&combined.digest('hex')!==manifest.combined_sha256)errors.push('R12 combined mismatch');
  for(const c of request?.context_excerpts??[]){
    if(c.path.startsWith('.superpowers/')&&!localEvidence)continue;
    const b=load(c.path);if(!b)continue;
    if(hash(b)!==c.sha256)errors.push('context hash mismatch: '+c.path);
    const lines=b.toString().split('\n');
    for(const s of c.segments)if(lines.slice(s.start_line-1,s.end_line).join('\n')!==s.text)errors.push('context segment mismatch: '+c.path);
  }
  if(localEvidence&&request?.render_provenance){const b=load(request.render_provenance.manifest_path);if(b&&hash(b)!==request.render_provenance.manifest_sha256)errors.push('render provenance mismatch')}
  if(localEvidence&&request?.render_provenance?.context_manifest_path){const b=load(request.render_provenance.context_manifest_path);if(b&&hash(b)!==request.render_provenance.context_manifest_sha256)errors.push('context render provenance mismatch')}
  if(request?.review_id!=='R12'||request?.images?.length!==24)errors.push('R12 scope mismatch');
  return {errors,entries:manifest.entries.length,contexts:request?.context_excerpts.length??0,localEvidence:localEvidence?'checked':'not-checked',reviewComplete:false,releaseReady:false};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const r=validateR12Inputs(r12Root,{localEvidence:process.argv.includes('--local-evidence')});console.log(JSON.stringify(r));process.exitCode=r.errors.length?1:0;
}
