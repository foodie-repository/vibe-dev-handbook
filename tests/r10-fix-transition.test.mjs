import {r20PreCloseoutBytes} from '../scripts/r20-closeout.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r10FixTransitions,r10PreFixBytes,validateR10Current} from '../scripts/r10-fix-transition.mjs';
import {r10PreCloseoutBytes} from '../scripts/r10-closeout.mjs';
import {preReadyBytes} from '../scripts/r26-closeout.mjs';
const read=p=>preReadyBytes(p,readFileSync(new URL('../'+p,import.meta.url))),sha=b=>createHash('sha256').update(b).digest('hex');
test('R10 restores four exact historical inputs and rejects rollback or drift',()=>{
 assert.equal(r10FixTransitions.length,4);assert.deepEqual(validateR10Current(read),[]);
 for(const e of r10FixTransitions){const now=read(e.path),old=r10PreFixBytes(e.path,now);assert.equal(sha(r10PreCloseoutBytes(e.path,now)),e.after);assert.equal(sha(old),e.before);for(const b of [old,Buffer.concat([now,Buffer.from('drift')])])assert.ok(validateR10Current(p=>p===e.path?b:read(p)).length>0);}
});
test('R10 separates keys incident history and permission without promoting adjacent rows',()=>{
 const t=read('src/content/docs/10-deployment-operations/logs-monitoring-backup.md').toString();
 for(const s of ['새 키 발급만으로 대체할 수 없습니다','주 접근 계정을 잃는 상황','전용 보관·복구 체계','이전 백업의 해독 가능성','분야·규모와 관계없이 대부분의 조직','사건의 이력은 보존','명시한 관찰 구간','활성 참가 중복 0건','타인 취소의 거절·데이터 불변','같은 시작 장벽','정상 smoke만으로','사전에 승인된 긴급 대응 권한','실행 권한이 없으면','실선으로 이어지는 대응 단계'])assert.ok(t.includes(s),s);
 assert.match(t,/contentStatus: review/);assert.ok(!t.includes('불변식 쿼리로 `confirmed <= capacity`와 타인 취소 위반 0건'));
 const adjacent=r20PreCloseoutBytes('src/content/docs/08-quality/performance-security.md',read('src/content/docs/08-quality/performance-security.md')).toString();assert.ok(adjacent.includes('제품 알림은 첫 프로젝트의 비목표'));assert.ok(adjacent.includes('서버의 데이터베이스 접근 자격'));assert.ok(!adjacent.includes('취약한 알림 의존성'));assert.match(adjacent,/contentStatus: draft/);
 const sources=read('research/source-map.md').toString();assert.ok(sources.includes('R10 현재 적용 정정'));assert.ok(sources.includes('미국 연방 중심 사이버보안 지침'));
 assert.equal(sha(read('src/assets/diagrams/operations-recovery-loop.svg')),'09d5e977d0ab6ffc078f23a7e505acdacbfc9a34cde36dd5128554e026366509');assert.equal(sha(read('src/assets/diagrams/source/operations-recovery-loop.mmd')),'f8da34fcf26739e80041d8dcfdc2bc7084efe018379e9d17b256f019ef8a27f8');
});
