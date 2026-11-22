import {r16PreCloseoutBytes} from '../scripts/r16-closeout.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r16FixTransitions,r16PreFixBytes,validateR16Current} from '../scripts/r16-fix-transition.mjs';
import {validateR16Inputs} from '../scripts/r16-review-inputs.mjs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url)),sha=b=>createHash('sha256').update(b).digest('hex');
test('R16 exact five-file fix preserves initial BLOCKED inputs and rejects unknown drift rollback and missing bytes',()=>{
 assert.equal(r16FixTransitions.length,5);assert.deepEqual(validateR16Current(read),[]);assert.deepEqual(validateR16Inputs(undefined,{read}).errors,[]);
 for(const e of r16FixTransitions){const now=r16PreCloseoutBytes(e.path,read(e.path)),before=r16PreFixBytes(e.path,now);assert.equal(sha(now),e.after);assert.equal(sha(before),e.before);const drift=Buffer.concat([now,Buffer.from('drift')]);assert.deepEqual(r16PreFixBytes(e.path,drift),drift);for(const mode of ['drift','rollback','missing']){const changed=p=>{if(p!==e.path)return read(p);if(mode==='missing')throw Error('missing');return mode==='rollback'?before:drift};assert.ok(validateR16Current(changed).some(x=>x.includes(e.path)));assert.ok(validateR16Inputs(undefined,{read:changed}).errors.some(x=>x.includes(e.path)));}}
});
test('R16 migration guards pre-backfill writes and cutover while preserving educational SQL',()=>{
 const p='src/content/docs/04-backend-data/data-model-schema-migration.md',now=read(p).toString(),before=r16PreFixBytes(p,read(p)).toString();assert.deepEqual([...now.matchAll(/```sql\n([\s\S]*?)```/g)].map(m=>m[1]),[...before.matchAll(/```sql\n([\s\S]*?)```/g)].map(m=>m[1]));
 for(const phrase of ['백필 전에','전환 직전까지','조건부 갱신','회의실 B','구버전 복귀','`host_user_id`는 기준 사례와 API 장의 `host_id`'])assert.ok(now.includes(phrase),phrase);
});
test('R16 distinguishes candidate quality from freshness and database decisions from external effects',()=>{
 const s=read('src/content/docs/04-backend-data/state-cache-queue.md').toString();for(const p of ['기대 시각 전에는 `current`','기대 시각 이상','`stale`','시각 정보가 없으면 `unknown`','재조회는 필요하지만','발송 결정 이후 취소','조건부 갱신 실패','publisher confirm','consumer acknowledgement'])assert.ok(s.includes(p),p);assert.ok(!s.includes('`freshness_status=stale`과 지연 사유를 함께 표시해야'));
 const b=read('research/stock-dashboard-case-brief.md').toString();for(const p of ['11:59Z에는 current','12:01Z에는 stale','기대 시각이 없으면 unknown'])assert.ok(b.includes(p),p);
});
test('R16 current source label and gap guidance do not rewrite source history',()=>{
 const s=read('src/content/docs/03-full-stack/frontend-backend-boundary.md').toString();assert.ok(s.includes('OWASP Web Frontend Security Cheat Sheet — 기존 AJAX 주소'));assert.ok(!s.includes('전체 주장 묶음을 함께 대조한 뒤 전환합니다'));
 const p='research/source-map.md';assert.equal(sha(r16PreFixBytes(p,read(p))),r16FixTransitions.find(e=>e.path===p).before);
});
