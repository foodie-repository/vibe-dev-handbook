import test from 'node:test';
import {r05PreCloseoutBytes} from '../scripts/r05-closeout.mjs';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r05FixTransitions,r05PreFixBytes,validateR05Current} from '../scripts/r05-fix-transition.mjs';
import {validateR05Inputs,r05Root} from '../scripts/r05-review-inputs.mjs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url));
const sha=b=>createHash('sha256').update(b).digest('hex');
test('R05 exact finding transitions retain initial review and reject rollback or unknown drift',()=>{
 assert.deepEqual(validateR05Current(read),[]);
 for(const e of r05FixTransitions){
  const now=read(e.path),before=r05PreFixBytes(e.path,now);
  assert.equal(sha(r05PreCloseoutBytes(e.path,now)),e.after);assert.equal(sha(before),e.before);assert.notDeepEqual(now,before);
  const drift=Buffer.concat([now,Buffer.from('drift')]);assert.deepEqual(r05PreFixBytes(e.path,drift),drift);
  for(const bad of [before,drift])assert.ok(validateR05Inputs(r05Root,{read:p=>p===e.path?bad:read(p)}).errors.includes('R05 current patch mismatch: '+e.path));
 }
});
test('R05 diagnostic table and recovery table preserve separate evidence boundaries',()=>{
 const browser=read('src/content/docs/05-frontend/browser-dom-rendering.md').toString();
 const row=browser.split('\n').find(x=>x.startsWith('| DOM 존재, 렌더링 실패 |')).split('|');
 assert.match(row[2],/노드 존재는 판단할 수 없음/);assert.match(row[3],/필요한 노드가 존재/);
 assert.match(browser,/기록을 시작하기 전에 발생한 요청은 빠질 수/);
 assert.match(browser,/CSS 객체 모델\(CSS Object Model, CSSOM\)/);assert.match(browser,/교육용 가상 주가 자료\(fixture\)/);
 const ui=read('src/content/docs/05-frontend/ui-state-and-ux.md').toString();
 assert.doesNotMatch(ui,/\| 이전 요청 적용 확인 \||\| 이전 요청 미적용 확인 \|/);
 assert.match(ui,/이전 요청의 종결·미적용 또는 안전한 멱등 재시도 조건 확인/);
 assert.match(ui,/이전 요청이 뒤늦게 확정되거나 다른 탭에서 참가·취소/);
 assert.match(ui,/`unknown`을 유지하고 새 쓰기를 보류/);
});
