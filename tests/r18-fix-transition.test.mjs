import {r18PreCloseoutBytes} from '../scripts/r18-closeout.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r18FixTransitions,r18PreFixBytes,validateR18Current} from '../scripts/r18-fix-transition.mjs';
import {validateR18Inputs} from '../scripts/r18-review-inputs.mjs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url)),sha=b=>createHash('sha256').update(b).digest('hex');
const adr='src/content/docs/06-requirements-design/adr-and-tradeoffs.md',arch='src/content/docs/06-requirements-design/architecture-and-frameworks.md';
test('R18 exact four-file transition preserves original review inputs and rejects drift rollback missing',()=>{
 assert.equal(r18FixTransitions.length,4);assert.deepEqual(validateR18Current(read),[]);assert.deepEqual(validateR18Inputs(undefined,{read}).errors,[]);
 for(const e of r18FixTransitions){const now=r18PreCloseoutBytes(e.path,read(e.path)),before=r18PreFixBytes(e.path,now);assert.equal(sha(now),e.after);assert.equal(sha(before),e.before);const drift=Buffer.concat([now,Buffer.from('drift')]);assert.deepEqual(r18PreFixBytes(e.path,drift),drift);for(const mode of ['drift','rollback','missing']){const altered=p=>{if(p!==e.path)return read(p);if(mode==='missing')throw Error('missing');return mode==='rollback'?before:drift;};assert.ok(validateR18Current(altered).some(x=>x.includes(e.path)));assert.ok(validateR18Inputs(undefined,{read:altered}).errors.some(x=>x.includes(e.path)));}}
});
test('R18 wraps only natural-language blocks and preserves prompt contents and intentional newlines',()=>{
 const blocks=s=>[...s.matchAll(/`{3}text(?: wrap)?\n([\s\S]*?)`{3}/g)].map(m=>m[1]);
 for(const p of [adr,arch]){const now=read(p).toString(),before=r18PreFixBytes(p,read(p)).toString();assert.equal((now.match(/`{3}text wrap/g)||[]).length,p===adr?2:1);const a=blocks(before),b=blocks(now);assert.equal(a.length,b.length);for(let i=0;i<a.length;i++){if(p===adr&&a[i].includes('# ADR-NNN')){const restored=b[i].split('\n').filter(l=>!l.startsWith('- 결정·승인')&&!l.startsWith('- 관련 승인·대체')).join('\n');assert.equal(restored,a[i]);}else assert.equal(b[i],a[i]);}}
});
test('R18 alternatives share conditions and distinguish deployment, invalid candidates and unverified concurrency',()=>{
 const s=read(adr).toString();for(const x of ['공개된 동일 버전의 검증 데이터셋','서로 배타적인 축이 아니며','API가 있다는 사실만으로','사전 탈락안','코드 모듈 분리와 서비스의 별도 배포는 다른 결정','한 DB나 트랜잭션을 사용한다는 말만으로','미승인이면 미정'])assert.ok(s.includes(x),x);assert.ok(!s.includes('화면 비활성화만 사용, 여러 서비스에 즉시 분리'));
});
test('R18 source attribution preserves historical confirmation and current not-confirmed without changing draft or figure',()=>{
 for(const p of [adr,arch]){const s=r18PreCloseoutBytes(p,read(p)).toString();assert.match(s,/contentStatus: draft/);for(const x of ['2026-08-13','2026-11-15','not-confirmed','새 직접 근거로 사용하지'])assert.ok(s.includes(x),x);}
 const s=read(arch).toString();assert.ok(!s.includes('conceptual model은 이해관계자의 관심사'));assert.ok(s.includes('표준 전문을 읽은 것은 아닙니다'));
});
