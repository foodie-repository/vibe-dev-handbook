import {r14PreCloseoutBytes} from '../scripts/r14-closeout.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r14FixTransitions,r14PreFixBytes,validateR14Current} from '../scripts/r14-fix-transition.mjs';
import {validateR14Inputs} from '../scripts/r14-review-inputs.mjs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url)),sha=b=>createHash('sha256').update(b).digest('hex');
test('R14 exact two-manuscript and inventory fix preserves frozen inputs and rejects drift missing and rollback',()=>{
 assert.equal(r14FixTransitions.length,3);assert.deepEqual(validateR14Inputs().errors,[]);
 for(const e of r14FixTransitions){const b=read(e.path),old=r14PreFixBytes(e.path,b);assert.equal(sha(r14PreCloseoutBytes(e.path,b)),e.after);assert.equal(sha(old),e.before);for(const mode of ['drift','missing','rollback']){const altered=p=>{if(p!==e.path)return read(p);if(mode==='missing')throw Error('missing');return mode==='rollback'?old:Buffer.concat([b,Buffer.from('drift')]);};assert.ok(validateR14Current(altered).length);assert.ok(validateR14Inputs(undefined,{read:altered}).errors.length);}}
});
test('R14 request outcome is not inferred from current confirmed state',()=>{
 const t=read('src/content/docs/01-mental-models/developer-thinking.md').toString();
 for(const x of ['바로 그 요청에 연결할 수 있는 기존 기록','기존 참가 관계는 남을 수 있음','모두 현재 참가 관계는 `confirmed`로 보일 수','이후 별도 취소','취소된 모임에 보존된 참가 이력','조회가 실패','원인은 아직 판별 불가','현재 상태 조회는 POST 재전송 허가가 아닙니다'])assert.ok(t.includes(x),x);
 for(const x of ['성공 처리 기록이나 확정된 참가 관계가 있음','같은 사용자의 참가 관계가 이미 확정됨','참가 관계가 없고 서버 처리도 확정되지 않음'])assert.ok(!t.includes(x),x);
});
test('R14 first fixture definitions and link label remain narrow',()=>{
 for(const e of r14FixTransitions.slice(0,2)){const t=read(e.path).toString();assert.ok(t.includes('교육용 가상 데이터 묶음'));assert.ok(t.includes('EDU-FIXTURE'));assert.ok(t.startsWith('---\n'));assert.ok(r14PreCloseoutBytes(e.path,read(e.path)).toString().includes('contentStatus: draft'));}
 const t=read(r14FixTransitions[0].path).toString();assert.ok(t.includes('[개발자처럼 문제를 나누는 법](../developer-thinking/)'));assert.ok(!t.includes('[개발자는 무엇을 다르게 보는가]'));
 assert.equal(sha(read('src/styles/custom.css')),'2236f2a8a9b30515cb641d48de7089d15590834766ada3f60de9f649ef36c137');
});
