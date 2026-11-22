import {r13PreFixBytes} from '../scripts/r13-fix-transition.mjs';
import test from 'node:test';
import {r07PreCloseoutBytes} from '../scripts/r07-closeout.mjs';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r07FixTransitions,r07PreFixBytes,validateR07Current} from '../scripts/r07-fix-transition.mjs';
import {r07Root,validateR07Inputs} from '../scripts/r07-review-inputs.mjs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url)),sha=b=>createHash('sha256').update(b).digest('hex');
test('R07 exact fixes preserve original inputs and reject rollback or drift',()=>{
 assert.deepEqual(validateR07Current(read),[]);assert.deepEqual(validateR07Inputs().errors,[]);
 for(const e of r07FixTransitions){const now=read(e.path),before=r07PreFixBytes(e.path,now);assert.equal(sha(r07PreCloseoutBytes(e.path,now)),e.after);assert.equal(sha(before),e.before);assert.notDeepEqual(now,before);const drift=Buffer.concat([now,Buffer.from('drift')]);assert.deepEqual(r07PreFixBytes(e.path,drift),drift);for(const bad of [before,drift])assert.ok(validateR07Inputs(r07Root,{read:p=>p===e.path?bad:read(p)}).errors.some(x=>x.includes('R07 current patch mismatch: '+e.path)));}
});
test('R07 links executed state to evidence and retains safe smoke alternatives',()=>{
 const s=r07PreCloseoutBytes('src/content/docs/08-quality/testing-strategy.md',read('src/content/docs/08-quality/testing-strategy.md')).toString();
 assert.match(s,/실행 위치·상태와 시점/);assert.match(s,/같은 브랜치라는 사실만으로 같은 상태/);assert.match(s,/실행 당시 commit·미커밋 diff 상태·시점/);assert.match(s,/실행 이후 변경에 맞는 재검증/);
 assert.match(s,/### 읽기 전용 검토 지시 예\n\n```text wrap\n/);
 assert.match(s,/실제 구성요소 대신 사용하는 mock, stub, fake/);assert.match(s,/커버리지는 다룬 범위의 측정/);assert.match(s,/변경이 있었다면 사전 승인 범위·전용 대상·중지 조건·정리 결과/);assert.match(s,/미실행이나 적용외라면/);assert.match(s,/contentStatus: draft/);
});
test('R07 limits ISO attribution without rewriting dated source and audit history',()=>{
 const s=read('src/content/docs/08-quality/testing-strategy.md').toString();assert.match(s,/현재 공개 안내에서 manual·automated·scripted·unscripted 열거는 확인하지 못해/);assert.doesNotMatch(s,/공개 안내에서 동적 테스트의 조직·관리·수준과 manual·automated/);
 for(const p of ['research/source-map.md','research/public-beta-source-gap-register.md','docs/project/public-beta-content-audit.md']){const now=r07PreCloseoutBytes(p,read(p)),old=r07PreFixBytes(p,now);assert.equal(now.toString().split('\n').slice(4).join('\n'),old.toString().split('\n').slice(2).join('\n'));assert.match(now.toString(),/R07/);}
 const t=JSON.parse(read('docs/project/reviews/public-beta-1/r06-case-context.json'));assert.equal(sha(r13PreFixBytes(t.path,read(t.path))),t.sha256);
});
