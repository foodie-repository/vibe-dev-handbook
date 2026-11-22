import {r13PreFixBytes} from '../scripts/r13-fix-transition.mjs';
import test from 'node:test';
import {r06PreCloseoutBytes} from '../scripts/r06-closeout.mjs';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r06FixTransitions,r06PreFixBytes,validateR06Current} from '../scripts/r06-fix-transition.mjs';
import {r06Root,validateR06Inputs} from '../scripts/r06-review-inputs.mjs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url));
const sha=b=>createHash('sha256').update(b).digest('hex');
test('R06 E01 supplement matches historical case bytes and explicit requirement/test excerpts',()=>{
 const c=JSON.parse(read('docs/project/reviews/public-beta-1/r06-case-context.json')),b=r13PreFixBytes(c.path,read(c.path)),lines=b.toString().split('\n');assert.equal(sha(b),c.sha256);for(const s of c.segments)assert.equal(lines.slice(s.start_line-1,s.end_line).join('\n'),s.text);const text=c.segments.map(s=>s.text).join('\n');for(const id of ['D-01','D-02','D-03','D-04','D-05'])assert.ok(text.includes(id));assert.match(text,/테스트 오라클/);assert.match(text,/오래된 배포/);assert.doesNotMatch(b.toString(),/R-02|R-03/);
});
test('R06 exact finding fixes preserve original BLOCKED inputs and reject rollback or drift',()=>{
 assert.deepEqual(validateR06Current(read),[]);
 for(const e of r06FixTransitions){const now=read(e.path),before=r06PreFixBytes(e.path,now);assert.equal(sha(r06PreCloseoutBytes(e.path,now)),e.after);assert.equal(sha(before),e.before);assert.notDeepEqual(now,before);const drift=Buffer.concat([now,Buffer.from('drift')]);assert.deepEqual(r06PreFixBytes(e.path,drift),drift);for(const bad of [before,drift])assert.ok(validateR06Inputs(r06Root,{read:p=>p===e.path?bad:read(p)}).errors.includes('R06 current patch mismatch: '+e.path));}
});
test('R06 separates temporary Green, historical product flow, diagram topology and current case references',()=>{
 const p=read('src/content/docs/06-requirements-design/prd-sdd-tdd.md').toString(),t=read('src/content/docs/08-quality/testing-strategy.md').toString(),m=read('src/content/docs/reference/methodology-map.md').toString();
 assert.match(p,/한 예에만 맞춘 임시 구현에서 시작할 수 있지만 이를 요구 전체의 충족으로 보고하지 않습니다/);assert.match(p,/다음 사례와 경계 테스트/);assert.doesNotMatch(p,/한 입력만 하드코딩하거나/);
 const relation=p.split('## 한 장의 관계도')[1].split('## 집을 만드는 과정')[0];assert.doesNotMatch(relation,/```/);assert.match(relation,/요구는 두 갈래로/);assert.match(relation,/설계 설명과 기능 스펙은 계획·작업 분해에서 만나/);
 for(const s of [p,t]){assert.doesNotMatch(s,/R-02|R-03/);for(const id of ['D-01','D-02','D-03','D-04','D-05'])assert.ok(s.includes(id));assert.match(s,/사례의 요구사항 ID가 아닙니다/);}
 for(const s of [p,m]){assert.match(s,/2026-08-13/);assert.match(s,/2026-11-15/);assert.match(s,/Converge/);assert.doesNotMatch(s,/현재 (?:GitHub )?Spec Kit (?:핵심 사례에서는|사례의 핵심 흐름은)/);}
});
