import {r17PreCloseoutBytes} from '../scripts/r17-closeout.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r17FixTransitions,r17PreFixBytes,validateR17Current} from '../scripts/r17-fix-transition.mjs';
import {validateR17Inputs} from '../scripts/r17-review-inputs.mjs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url)),sha=b=>createHash('sha256').update(b).digest('hex');
const ui='src/content/docs/05-frontend/ui-state-and-ux.md',a11y='src/content/docs/05-frontend/accessibility-responsive-design.md';
test('R17 exact four-file transition preserves original needs-changes inputs and rejects drift rollback missing',()=>{
 assert.equal(r17FixTransitions.length,4);assert.deepEqual(validateR17Current(read),[]);assert.deepEqual(validateR17Inputs(undefined,{read}).errors,[]);
 for(const e of r17FixTransitions){const now=r17PreCloseoutBytes(e.path,read(e.path)),before=r17PreFixBytes(e.path,now);assert.equal(sha(now),e.after);assert.equal(sha(before),e.before);const drift=Buffer.concat([now,Buffer.from('drift')]);assert.deepEqual(r17PreFixBytes(e.path,drift),drift);for(const mode of ['drift','rollback','missing']){const altered=p=>{if(p!==e.path)return read(p);if(mode==='missing')throw Error('missing');return mode==='rollback'?before:drift;};assert.ok(validateR17Current(altered).some(x=>x.includes(e.path)));assert.ok(validateR17Inputs(undefined,{read:altered}).errors.some(x=>x.includes(e.path)));}}
});
test('R17 natural-language wrap preserves all text-fence contents and intentional line breaks',()=>{
 for(const p of [ui,a11y]){const now=read(p).toString(),before=r17PreFixBytes(p,read(p)).toString(),blocks=s=>[...s.matchAll(/```text(?: wrap)?\n([\s\S]*?)```/g)].map(m=>m[1]);assert.deepEqual(blocks(now),blocks(before));assert.equal((now.match(/```text wrap/g)||[]).length,p===ui?2:1);}
});
test('R17 explains error-response uncertainty and event cancellation precedence without claiming live application tests',()=>{
 const s=read(ui).toString();for(const p of ['진행 중임을 나타내는 회전 표시(spinner)','시험 데이터·상태(fixture)','오류 응답을 받았다는 사실만으로','데이터베이스 확정 뒤','중간 서버가 오류','결과 조회마저 실패','계약상 미적용·종결이 확인된 오류','event.cancelled가 registration.confirmed보다 우선','open + confirmed','closed + confirmed','cancelled + confirmed','cancelled + cancelled','특정 이전 요청의 적용 여부를 대신 증명하지'])assert.ok(s.includes(p),p);assert.ok(!s.includes('대기·다른 모임'));assert.ok(!s.includes('| submitting | 명시적 서버 오류 |'));
 const brief=read('research/meeting-webapp-case-brief.md').toString();assert.ok(brief.includes('세 모임 상태 모두'));assert.ok(brief.includes('대기 명단'));
});
test('R17 status-message scope distinguishes result content and focus changes',()=>{
 for(const p of [ui,a11y]){const s=read(p).toString();for(const phrase of ['문맥을 바꾸지 않고','포커스를 옮기지 않아도','검색 결과 목록 자체','결과 0건','모든 DOM 변화','오류 요약'])assert.ok(s.includes(phrase),phrase);}
});
