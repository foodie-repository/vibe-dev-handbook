import {r19PreCloseoutBytes} from '../scripts/r19-closeout.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r19FixTransitions,r19PreFixBytes,validateR19Current} from '../scripts/r19-fix-transition.mjs';
import {validateR19Inputs} from '../scripts/r19-review-inputs.mjs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url)),sha=b=>createHash('sha256').update(b).digest('hex');
const ci='src/content/docs/07-workflow-methods/code-review-ci-cd.md',inc='src/content/docs/07-workflow-methods/incremental-delivery.md',sdlc='src/content/docs/07-workflow-methods/software-development-lifecycle.md';
test('R19 exact five-file transition preserves original inputs and rejects drift rollback missing',()=>{
 assert.equal(r19FixTransitions.length,5);assert.deepEqual(validateR19Current(read),[]);assert.deepEqual(validateR19Inputs(undefined,{read}).errors,[]);
 for(const e of r19FixTransitions){const now=r19PreCloseoutBytes(e.path,read(e.path)),before=r19PreFixBytes(e.path,now);assert.equal(sha(now),e.after);assert.equal(sha(before),e.before);const drift=Buffer.concat([now,Buffer.from('drift')]);assert.deepEqual(r19PreFixBytes(e.path,drift),drift);for(const mode of ['drift','rollback','missing']){const altered=p=>{if(p!==e.path)return read(p);if(mode==='missing')throw Error('missing');return mode==='rollback'?before:drift;};assert.ok(validateR19Current(altered).some(x=>x.includes(e.path)));assert.ok(validateR19Inputs(undefined,{read:altered}).errors.some(x=>x.includes(e.path)));}}
});
test('R19 wraps only five natural-language blocks without changing logical text or ASCII flows',()=>{
 const blocks=s=>[...s.matchAll(/`{3}text(?: wrap)?\n([\s\S]*?)`{3}/g)].map(m=>m[1]);
 for(const p of [ci,inc,sdlc]){const now=read(p).toString(),before=r19PreFixBytes(p,read(p)).toString();assert.equal((now.match(/`{3}text wrap/g)||[]).length,p===ci?1:2);assert.deepEqual(blocks(now),blocks(before));assert.match(r19PreCloseoutBytes(p,read(p)).toString(),/contentStatus: draft/);}
});
test('R19 incremental delivery includes prerequisite safety and preserves cancellation state history',()=>{
 const s=read(inc).toString(),slice2=s.split('### 조각 2.')[1].split('### 조각 3.')[0];for(const x of ['최소 조회 경로','결과 불명','새 쓰기를 보류','특정 요청의 처리 결과를 단정하지','중지 담당자','독립 수용·공개 완료로 세지'])assert.ok(slice2.includes(x),x);
 for(const x of ['행과 이력을 보존','추가 인원 감소나 취소 이력을 만들지','활성 고유성','기본 안전장치를 처음 도입하는 조각이 아닙니다','2016년에 공개하고 2017년에 갱신'])assert.ok(s.includes(x),x);assert.ok(!s.includes('취소하며 알림을 받는다'));assert.ok(!s.includes('코드 롤백으로 삭제된 관계'));
});
test('R19 CI evidence distinguishes execution and authorized production writes',()=>{
 const s=read(ci).toString();for(const x of ['skipped','neutral','실행 0건','원래 실패한 커밋','미커밋 diff','같은 불변식과 오라클','안전한 읽기 확인을 우선','별도로 승인된 전용 모임·계정·가상 데이터','쓰기 시험 권한을 뜻하지','일반 사용자의 운영 데이터에서 시험하지'])assert.ok(s.includes(x),x);
});
test('R19 lifecycle distinguishes verification validation and artifact identity without status promotion',()=>{
 const s=read(sdlc).toString();for(const x of ['verification·validation','verification','validation','체크섬'])assert.ok(s.includes(x),x);assert.match(r19PreCloseoutBytes(sdlc,read(sdlc)).toString(),/contentStatus: draft/);assert.ok(!s.includes('아티팩트·커밋과 같은가'));
});
