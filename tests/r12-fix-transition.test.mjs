import test from 'node:test';
import {r12PreCloseoutBytes} from '../scripts/r12-closeout.mjs';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r12FixTransitions,r12PreFixBytes,validateR12Current} from '../scripts/r12-fix-transition.mjs';
import {validateR12Inputs} from '../scripts/r12-review-inputs.mjs';
import {validateR11Inputs} from '../scripts/r11-review-inputs.mjs';
import {preReadyBytes} from '../scripts/r26-closeout.mjs';
const read=p=>preReadyBytes(p,readFileSync(new URL('../'+p,import.meta.url))),sha=b=>createHash('sha256').update(b).digest('hex');
test('R12 restores four exact frozen inputs and rejects rollback drift or missing current bytes',()=>{
 assert.equal(r12FixTransitions.length,4);assert.deepEqual(validateR12Current(read),[]);
 for(const e of r12FixTransitions){const now=read(e.path),old=r12PreFixBytes(e.path,now);assert.equal(sha(r12PreCloseoutBytes(e.path,now)),e.after);assert.equal(sha(old),e.before);for(const b of [old,Buffer.concat([now,Buffer.from('drift')]),null]){const altered=p=>{if(p!==e.path)return read(p);if(b===null)throw Error('missing');return b;};assert.ok(validateR12Current(altered).length>0);assert.ok(validateR12Inputs(undefined,{read:altered}).errors.length>0);}}
 assert.deepEqual(validateR12Inputs(undefined,{read}).errors,[]);assert.deepEqual(validateR11Inputs(undefined,{read}).errors,[]);
});
test('R12 preserves all five trace requirements and nine fields per requirement without CSS or diagram change',()=>{
 const p='src/content/docs/12-case-studies/first-full-stack-project.md',now=read(p).toString(),old=r12PreFixBytes(p,read(p)).toString();
 const sections=now.split(/^### W-0[1-5] .+ 추적$/m).slice(1);
 assert.equal(sections.length,5);
 for(const s of sections){const labels=[...s.split('\n\n테스트 통과는')[0].matchAll(/^- \*\*(.+?):\*\*/gm)].map(m=>m[1]);assert.deepEqual(labels,['사용자 행동','상태 전이·데이터 변환','인터페이스','인증·인가·권리','실패 위험','테스트 오라클','Git 작업 단위','배포·운영 증거','복구']);}
 const oldRows=old.split('\n').filter(l=>/^\| W-0[1-5] /.test(l));assert.equal(oldRows.length,5);
 // Unchanged actions, interface boundaries, operational evidence and recovery retain original detail.
 for(const [i,row] of oldRows.entries()){const cells=row.slice(1,-1).split('|').map(s=>s.trim());for(const n of [1,5,8])assert.ok(sections[i].includes(cells[n]),'field '+i+':'+n);}
 assert.equal(sha(read('src/assets/diagrams/meeting-webapp-architecture.svg')),'d82fe6acd7659e4466401d05545cc044d5a7975a3264439bde0842f0a7e23fae');
 assert.equal(sha(read('src/assets/diagrams/source/meeting-webapp-architecture.mmd')),'e867219713f8698d5169a518e6b1cb3f8dac8e4c4670b274ba657a06d05c2301');
 assert.equal(sha(read('src/styles/custom.css')),'2236f2a8a9b30515cb641d48de7089d15590834766ada3f60de9f649ef36c137');
});
test('R12 self-read state policy loss oracle contention and backup boundaries stay explicit',()=>{
 const t=read('src/content/docs/12-case-studies/first-full-stack-project.md').toString();
 for(const s of ['GET /events/:eventId/registrations/me','세 번째 참가 상태가 아닙니다','다른 참가자의 관계·식별자나 전체 목록은 반환하지','조회도 실패하면','자동으로 `closed`가 되지','`closed → open`','모임 취소를 우선 표시','별도 저장·전달 장애가 없는','두 독립 연결','임의 대기 시간이나 mock','첫 데이터 변경 뒤·commit 전에','다른 요청의 정상 확정 결과 보존','A가 받은 성공 응답 0건','원래 관측만으로 최종 3명이라고 단정','추가 상태 변경·인원 감소·중복 취소 이력 없이','**fixture**','데이터 불변식은','테스트 오라클은','Git `commit`과 다릅니다','별도의 보호·복구 체계'])assert.ok(t.includes(s),s);
 assert.match(t,/contentStatus: review/);assert.ok(!t.includes('일반 백업에 넣지'));
});
