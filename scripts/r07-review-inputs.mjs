import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {r07PreFixBytes,validateR07Current} from './r07-fix-transition.mjs';
import {validateR07Closeout} from './r07-closeout.mjs';

export const r07ManifestPath='docs/project/reviews/public-beta-1/r07-testing-input-manifest.json';
export const r07ManifestSha='afe5b2651a8d2094c581ca5cd7909ed7a7465b9cad8964ad40d4be01bdd1c062';
export const r07Root=resolve(fileURLToPath(new URL('../',import.meta.url)));
const hash=b=>createHash('sha256').update(b).digest('hex');

// Frozen preparation evidence is not an actual review or a lifecycle transition.
export function validateR07Inputs(root=r07Root,{read=p=>readFileSync(resolve(root,p))}={}){
  const errors=[...validateR07Current(read),...validateR07Closeout(root,{read})];let manifest,request;
  const load=p=>{try{return r07PreFixBytes(p,read(p))}catch{errors.push('missing: '+p);return null}};
  const bytes=load(r07ManifestPath);
  if(!bytes||hash(bytes)!==r07ManifestSha)return {errors:[...errors,'R07 manifest mismatch']};
  try{manifest=JSON.parse(bytes)}catch{return {errors:['R07 invalid manifest']}};
  const combined=createHash('sha256').update('sha256-framed-bytes-v1\n');
  for(const e of manifest.entries){
    const b=load(e.path);if(!b)continue;
    if(hash(b)!==e.sha256||b.length!==e.bytes)errors.push('hash/size mismatch: '+e.path);
    const p=Buffer.from(e.path);
    combined.update('path-bytes:'+p.length+'\n').update(p).update('\ncontent-bytes:'+b.length+'\n').update(b).update('\n');
    if(e.path.endsWith('r07-testing-request.md'))try{request=JSON.parse(b.toString().split('<!-- m5-r07-request:data:start -->\n```json\n')[1].split('\n```')[0])}catch{errors.push('invalid request')}
  }
  if(combined.digest('hex')!==manifest.combined_sha256)errors.push('R07 combined mismatch');
  for(const c of request?.context_excerpts??[]){
    const b=load(c.path);if(!b)continue;
    if(hash(b)!==c.sha256)errors.push('context hash mismatch: '+c.path);
    const lines=b.toString().split('\n');
    for(const s of c.segments)if(lines.slice(s.start_line-1,s.end_line).join('\n')!==s.text)errors.push('context segment mismatch: '+c.path);
  }
  if(request?.review_id!=='R07'||request?.images?.length!==0||request?.visual_applicability?.images!==0)errors.push('R07 scope mismatch');
  return {errors,entries:manifest.entries.length,contexts:request?.context_excerpts.length??0,images:0,reviewComplete:false,releaseReady:false};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const r=validateR07Inputs();console.log(JSON.stringify(r));process.exitCode=r.errors.length?1:0;
}
