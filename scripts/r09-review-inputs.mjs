import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {r09PreFixBytes,validateR09Current} from './r09-fix-transition.mjs';
import {validateR09Closeout} from './r09-closeout.mjs';

export const r09ManifestPath='docs/project/reviews/public-beta-1/r09-build-deploy-input-manifest.json';
export const r09ManifestSha="3720eef573f58dddfb9e79e1207dbbb2b653cb03f903fdcb07616326d28bf67f";
export const r09Root=resolve(fileURLToPath(new URL('../',import.meta.url)));
const hash=b=>createHash('sha256').update(b).digest('hex');

// Frozen R09 preparation only; not a review result or a status promotion.
export function validateR09Inputs(root=r09Root,{localEvidence=false,read=p=>readFileSync(resolve(root,p))}={}){
  const errors=[...validateR09Current(read),...validateR09Closeout(root,{read})], missingLocal=[];let manifest,request;
  const load=p=>{try{return r09PreFixBytes(p,read(p))}catch{errors.push('missing: '+p);return null}};
  const bytes=load(r09ManifestPath);
  if(!bytes||hash(bytes)!==r09ManifestSha)return {errors:[...errors,'R09 manifest mismatch']};
  try{manifest=JSON.parse(bytes)}catch{return {errors:['R09 invalid manifest']}};
  const combined=createHash('sha256').update('sha256-framed-bytes-v1\n');
  for(const e of manifest.entries){
    if(e.path.endsWith('.png')&&!localEvidence){missingLocal.push(e.path);continue}
    const b=load(e.path);if(!b)continue;
    if(hash(b)!==e.sha256||b.length!==e.bytes)errors.push('hash mismatch: '+e.path);
    const p=Buffer.from(e.path);
    combined.update('path-bytes:'+p.length+'\n').update(p).update('\ncontent-bytes:'+b.length+'\n').update(b).update('\n');
    if(e.path.endsWith('.png')&&(b.length<24||!b.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]))||b.toString('ascii',12,16)!=='IHDR'))errors.push('invalid PNG: '+e.path);
    if(e.path.endsWith('r09-build-deploy-request.md'))try{request=JSON.parse(b.toString().split('<!-- m5-r09-request:data:start -->\n```json\n')[1].split('\n```')[0])}catch{errors.push('invalid request')}
  }
  if(localEvidence&&combined.digest('hex')!==manifest.combined_sha256)errors.push('R09 combined mismatch');
  for(const c of request?.context_excerpts??[]){
    if(c.path.startsWith('.superpowers/')&&!localEvidence)continue;
    const b=load(c.path);if(!b)continue;
    if(hash(b)!==c.sha256)errors.push('context hash mismatch: '+c.path);
    const lines=b.toString().split('\n');
    for(const s of c.segments)if(lines.slice(s.start_line-1,s.end_line).join('\n')!==s.text)errors.push('context segment mismatch: '+c.path);
  }
  if(localEvidence&&request?.render_provenance){const b=load(request.render_provenance.manifest_path);if(b&&hash(b)!==request.render_provenance.manifest_sha256)errors.push('render provenance mismatch')}
  if(request?.review_id!=='R09'||request?.images?.length!==18)errors.push('R09 scope mismatch');
  return {errors,entries:manifest.entries.length,contexts:request?.context_excerpts.length??0,localEvidence:localEvidence?'checked':'not-checked',reviewComplete:false,releaseReady:false};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const r=validateR09Inputs(r09Root,{localEvidence:process.argv.includes('--local-evidence')});console.log(JSON.stringify(r));process.exitCode=r.errors.length?1:0;
}
