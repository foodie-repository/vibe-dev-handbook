import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {r25PreFixBytes,validateR25Current} from './r25-fix-transition.mjs';
export const r25Root=resolve(fileURLToPath(new URL('../',import.meta.url)));
const folder='docs/project/reviews/public-beta-1/',mPath=folder+'r25-reference-input-manifest.json',qPath=folder+'r25-reference-request.md',hash=b=>createHash('sha256').update(b).digest('hex');
export function validateR25Inputs(root=r25Root,{localEvidence=false,read=p=>readFileSync(resolve(root,p))}={}){
 const errors=[],get=p=>r25PreFixBytes(p,read(p)),m=read(mPath);
 if(hash(m)!=='fe408dbb2ace4eb8b767593d8b5d4c852655c36b08824cfe8c2b035b6be41d10')return {errors:['R25 manifest drift']};
 const manifest=JSON.parse(m),f=String.fromCharCode(96).repeat(3),q=JSON.parse(read(qPath).toString().split(f+'json\n')[1].split('\n'+f)[0]),combined=createHash('sha256').update('sha256-framed-bytes-v1\n');
 if(hash(read(folder+'r25-reference-codex-review.md'))!=='bc62ca1eba193285b9b8a8414192819967a80be03dee218cda72dee98e122528')errors.push('initial result drift');
 if(q.targets.length!==5||q.images.length!==80||manifest.entries.length!==103)errors.push('scope mismatch');
 for(const e of manifest.entries){if(!localEvidence&&/^(output\/|\.superpowers\/)/.test(e.path))continue;
  try{const b=get(e.path),p=Buffer.from(e.path);if(b.length!==e.bytes||hash(b)!==e.sha256)errors.push('input drift: '+e.path);combined.update('path-bytes:'+p.length+'\n').update(p).update('\ncontent-bytes:'+b.length+'\n').update(b).update('\n')}catch{errors.push('missing '+e.path)}}
 if(localEvidence&&combined.digest('hex')!==manifest.combined_sha256)errors.push('combined input drift');
 for(const c of q.context_excerpts){const b=get(c.path),lines=b.toString().split('\n');if(hash(b)!==c.sha256||c.segments.some(s=>lines.slice(s.start_line-1,s.end_line).join('\n')!==s.text))errors.push('context drift: '+c.path)}
 errors.push(...validateR25Current(read));return {localEvidence,targets:5,images:80,entries:103,errors}
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){const r=validateR25Inputs(r25Root,{localEvidence:process.argv.includes('--local-evidence')});console.log(JSON.stringify(r));process.exitCode=r.errors.length?1:0}
