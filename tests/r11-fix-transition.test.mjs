import test from 'node:test';
import {r11PreCloseoutBytes} from '../scripts/r11-closeout.mjs';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r11FixTransitions,r11PreFixBytes,validateR11Current} from '../scripts/r11-fix-transition.mjs';
import {validateR11Inputs} from '../scripts/r11-review-inputs.mjs';
import {validateR10Inputs} from '../scripts/r10-review-inputs.mjs';
import {preReadyBytes} from '../scripts/r26-closeout.mjs';
const read=p=>preReadyBytes(p,readFileSync(new URL('../'+p,import.meta.url))),sha=b=>createHash('sha256').update(b).digest('hex');
test('R11 restores four exact historical files and rejects rollback or drift',()=>{
 assert.equal(r11FixTransitions.length,4);assert.deepEqual(validateR11Current(read),[]);
 for(const e of r11FixTransitions){const now=read(e.path),old=r11PreFixBytes(e.path,now);assert.equal(sha(r11PreCloseoutBytes(e.path,now)),e.after);assert.equal(sha(old),e.before);for(const b of [old,Buffer.concat([now,Buffer.from('drift')])])assert.ok(validateR11Current(p=>p===e.path?b:read(p)).length>0);}
 assert.deepEqual(validateR11Inputs(undefined,{read}).errors,[]);assert.deepEqual(validateR10Inputs(undefined,{read}).errors,[]);
});
test('R11 fixes blocked and W03 independent oracles without product or release claims',()=>{
 const t=read('src/content/docs/11-ai-native/working-with-coding-agents.md').toString();
 for(const s of ['현재 범위에서 진행할 수 없다는 주장','같은 시작 장벽','실패 요청의 부분 저장 0건','애플리케이션의 사전 조회와 독립적으로','mock 결과만으로','W-04 전체로 범위를 넓히지','제품·버전·실행 환경의 공식 문서와 실제 설정'])assert.ok(t.includes(s),s);
 assert.ok(!t.includes('계획 모드 또는 `/plan`'));assert.ok(!t.includes('없어 진행할 수 있다는 주장'));assert.match(t,/contentStatus: review/);
 const template=read('templates/agent-task-brief-template.md').toString();assert.ok(template.includes('독립 리뷰 적용 여부·finding 재판정·수정 후 재검증'));assert.ok(template.includes('권한 있는 수용 주체·수용 결정·남은 조건'));
 assert.equal(sha(read('src/assets/diagrams/agent-feedback-loop.svg')),'a0e6b969975c8bb71ea435ee2acce03df834d3c3dd975228c8b164c96dd8ef5f');assert.equal(sha(read('src/assets/diagrams/source/agent-feedback-loop.mmd')),'9d58dee1e64fbd69e3d3198518cef570c8f4f2a41837b22d7452b24c73969468');
});
