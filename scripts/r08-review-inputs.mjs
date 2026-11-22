import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {r08PreFixBytes,validateR08Current} from './r08-fix-transition.mjs';
import {validateR08Closeout} from './r08-closeout.mjs';

export const r08ManifestPath='docs/project/reviews/public-beta-1/r08-git-github-input-manifest.json';
export const r08ManifestSha="ae350f445b25eae14867b3b97bff8dbbd47841344fe378089d1bc32b88e9ebab";
export const r08Root=resolve(fileURLToPath(new URL('../',import.meta.url)));
const hash=b=>createHash('sha256').update(b).digest('hex');

// Frozen R08 preparation only; not a review result or a status promotion.
export function validateR08Inputs(root=r08Root,{localEvidence=false,read=p=>readFileSync(resolve(root,p))}={}){
  const errors=[...validateR08Current(read),...validateR08Closeout(root,{read})], missingLocal=[];let manifest,request;
  const load=p=>{try{return r08PreFixBytes(p,read(p))}catch{errors.push('missing: '+p);return null}};
  const bytes=load(r08ManifestPath);
  if(!bytes||hash(bytes)!==r08ManifestSha)return {errors:[...errors,'R08 manifest mismatch']};
  try{manifest=JSON.parse(bytes)}catch{return {errors:['R08 invalid manifest']}};
  const combined=createHash('sha256').update('sha256-framed-bytes-v1\n');
  for(const e of manifest.entries){
    if(e.path.endsWith('.png')&&!localEvidence){missingLocal.push(e.path);continue}
    const b=load(e.path);if(!b)continue;
    if(hash(b)!==e.sha256||b.length!==e.bytes)errors.push('hash mismatch: '+e.path);
    const p=Buffer.from(e.path);
    combined.update('path-bytes:'+p.length+'\n').update(p).update('\ncontent-bytes:'+b.length+'\n').update(b).update('\n');
    if(e.path.endsWith('.png')&&(b.length<24||!b.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]))||b.toString('ascii',12,16)!=='IHDR'))errors.push('invalid PNG: '+e.path);
    if(e.path.endsWith('r08-git-github-request.md'))try{request=JSON.parse(b.toString().split('<!-- m5-r08-request:data:start -->\n```json\n')[1].split('\n```')[0])}catch{errors.push('invalid request')}
  }
  if(localEvidence&&combined.digest('hex')!==manifest.combined_sha256)errors.push('R08 combined mismatch');
  for(const c of request?.context_excerpts??[]){
    if(c.path.startsWith('.superpowers/')&&!localEvidence)continue;
    const b=load(c.path);if(!b)continue;
    if(hash(b)!==c.sha256)errors.push('context hash mismatch: '+c.path);
    const lines=b.toString().split('\n');
    for(const s of c.segments)if(lines.slice(s.start_line-1,s.end_line).join('\n')!==s.text)errors.push('context segment mismatch: '+c.path);
  }
  if(localEvidence&&request?.render_provenance){const b=load(request.render_provenance.manifest_path);if(b&&hash(b)!==request.render_provenance.manifest_sha256)errors.push('render provenance mismatch')}
  if(request?.review_id!=='R08'||request?.images?.length!==18)errors.push('R08 scope mismatch');
  return {errors,entries:manifest.entries.length,contexts:request?.context_excerpts.length??0,localEvidence:localEvidence?'checked':'not-checked',reviewComplete:false,releaseReady:false};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const r=validateR08Inputs(r08Root,{localEvidence:process.argv.includes('--local-evidence')});console.log(JSON.stringify(r));process.exitCode=r.errors.length?1:0;
}
