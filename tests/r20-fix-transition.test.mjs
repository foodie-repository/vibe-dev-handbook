import {r20PreCloseoutBytes} from '../scripts/r20-closeout.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r20FixTransitions,r20PreFixBytes,validateR20Current} from '../scripts/r20-fix-transition.mjs';
import {validateR20Inputs} from '../scripts/r20-review-inputs.mjs';
const read=p=>r20PreCloseoutBytes(p,readFileSync(new URL('../'+p,import.meta.url))),sha=b=>createHash('sha256').update(b).digest('hex');
const debug='src/content/docs/08-quality/debugging-observability.md',perf='src/content/docs/08-quality/performance-security.md';
test('R20 exact four-file transition preserves history and rejects drift rollback missing',()=>{
 assert.equal(r20FixTransitions.length,4);assert.deepEqual(validateR20Current(read),[]);assert.deepEqual(validateR20Inputs().errors,[]);
 for(const e of r20FixTransitions){const now=read(e.path),before=r20PreFixBytes(e.path,now);assert.equal(sha(now),e.after);assert.equal(sha(before),e.before);const drift=Buffer.concat([now,Buffer.from('drift')]);assert.deepEqual(r20PreFixBytes(e.path,drift),drift);for(const mode of ['drift','rollback','missing']){const altered=p=>{if(p!==e.path)return read(p);if(mode==='missing')throw Error('missing');return mode==='rollback'?before:drift;};assert.ok(validateR20Current(altered).some(x=>x.includes(e.path)));assert.ok(validateR20Inputs(undefined,{read:altered}).errors.some(x=>x.includes(e.path)));}}
});
test('R20 six natural-language wraps preserve logical content except declared regression instruction',()=>{
 const blocks=s=>[...s.matchAll(/`{3}text(?: wrap)?\n([\s\S]*?)`{3}/g)].map(m=>m[1]);
 for(const p of[debug,perf]){const now=read(p).toString(),before=r20PreFixBytes(p,read(p)).toString();assert.equal((now.match(/`{3}text wrap/g)||[]).length,p===debug?4:2);const old=blocks(before);if(p===debug)old[3]=old[3].replace('7. 수정 전 실패하고 수정 후 성공할 회귀 증거와 운영 확인을 설계하세요.','7. 이번 결함 재현 테스트의 수정 전 실패·수정 후 성공, 기존 회귀 테스트의 통과 유지, 운영 확인을 구분해 설계하세요.');assert.deepEqual(blocks(now),old);assert.match(now,/contentStatus: draft/);}
});
test('R20 regression distinguishes defect oracle from preserved invariants and safe unknown recovery',()=>{
 const text=read(debug).toString();assert.ok(text.includes('## 8. 이번 결함의 회귀 증거'));assert.ok(text.includes('이번 결함 재현 테스트는 수정 전 실패하고 수정 후 성공하며, 기존 정상·거절 회귀 테스트는 전후 모두 통과하나요?'));assert.ok(!text.includes('- [ ] 회귀 테스트가 수정 전 실패'));
 const s=read(debug).toString();for(const x of['회귀 검증(regression testing)','기존 회귀 테스트는 수정 전후 모두 통과','이전 요청이 안전하게 종결','새로운 참가 쓰기를 보류','인증된 사용자가 자신의 현재 참가 상태','특정 과거 요청의 처리 결과나 종결을 단정하지','재조회가 실패하면 결과 불명을 유지','수정 전에는 위 확인 경로가 없어','이 데이터 조건은 수정 전에도 지켜졌으므로','실제 DB의 경쟁 구간과 대기 종류','스팬(span)','95번째 백분위수'])assert.ok(s.includes(x),x);
});
test('R20 source history and inherited notification fix remain bounded',()=>{
 const s=read(perf).toString();for(const x of['95번째 백분위수','2026-08-13 당시 2026-04-20','Resource Timing은 2026-09-01','Chrome 129 고정을 확인하지 못했으며','실제 현재 UI를 실행 확인하지 않았습니다','제품 알림은 첫 프로젝트의 비목표'])assert.ok(s.includes(x),x);assert.ok(!s.includes('취약한 알림 의존성'));
});
