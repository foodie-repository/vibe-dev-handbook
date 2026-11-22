import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {r06PreFixBytes,validateR06Current} from './r06-fix-transition.mjs';
import {validateR06Closeout} from './r06-closeout.mjs';

export const r06ManifestPath='docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-input-manifest.json';
export const r06ManifestSha="1c330fd6930f170027c7295b42c862137652bcc588d50464c9f993038e5262a1";
export const r06Root=resolve(fileURLToPath(new URL('../',import.meta.url)));
const hash=b=>createHash('sha256').update(b).digest('hex');

// Frozen R06 preparation only; not a review result or a status promotion.
export function validateR06Inputs(root=r06Root,{localEvidence=false,read=p=>readFileSync(resolve(root,p))}={}){
  const errors=[...validateR06Current(read),...validateR06Closeout(root,{read})], missingLocal=[];let manifest,request;
  const load=p=>{try{return r06PreFixBytes(p,read(p))}catch{errors.push('missing: '+p);return null}};
  const bytes=load(r06ManifestPath);
  if(!bytes||hash(bytes)!==r06ManifestSha)return {errors:[...errors,'R06 manifest mismatch']};
  try{manifest=JSON.parse(bytes)}catch{return {errors:['R06 invalid manifest']}};
  const combined=createHash('sha256').update('sha256-framed-bytes-v1\n');
  for(const e of manifest.entries){
    if(e.path.endsWith('.png')&&!localEvidence){missingLocal.push(e.path);continue}
    const b=load(e.path);if(!b)continue;
    if(hash(b)!==e.sha256)errors.push('hash mismatch: '+e.path);
    const p=Buffer.from(e.path);
    combined.update('path-bytes:'+p.length+'\n').update(p).update('\ncontent-bytes:'+b.length+'\n').update(b).update('\n');
    if(e.path.endsWith('.png')&&(b.length<24||!b.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]))||b.toString('ascii',12,16)!=='IHDR'))errors.push('invalid PNG: '+e.path);
    if(e.path.endsWith('r06-prd-sdd-tdd-request.md'))try{request=JSON.parse(b.toString().split('<!-- m5-r06-request:data:start -->\n```json\n')[1].split('\n```')[0])}catch{errors.push('invalid request')}
  }
  if(localEvidence&&combined.digest('hex')!==manifest.combined_sha256)errors.push('R06 combined mismatch');
  for(const c of request?.context_excerpts??[]){
    if(c.path.startsWith('.superpowers/')&&!localEvidence)continue;
    const b=load(c.path);if(!b)continue;
    if(hash(b)!==c.sha256)errors.push('context hash mismatch: '+c.path);
    const lines=b.toString().split('\n');
    for(const s of c.segments)if(lines.slice(s.start_line-1,s.end_line).join('\n')!==s.text)errors.push('context segment mismatch: '+c.path);
  }
  if(localEvidence&&request?.render_provenance){const b=load(request.render_provenance.manifest_path);if(b&&hash(b)!==request.render_provenance.manifest_sha256)errors.push('render provenance mismatch')}
  return {errors,entries:manifest.entries.length,contexts:request?.context_excerpts.length??0,localEvidence:localEvidence?'checked':'not-checked',reviewComplete:false,releaseReady:false};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const r=validateR06Inputs(r06Root,{localEvidence:process.argv.includes('--local-evidence')});console.log(JSON.stringify(r));process.exitCode=r.errors.length?1:0;
}
