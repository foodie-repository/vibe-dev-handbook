import {r23PreCloseoutBytes} from '../scripts/r23-closeout.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r23FixTransitions,r23PreFixBytes,validateR23Current} from '../scripts/r23-fix-transition.mjs';
const read=p=>r23PreCloseoutBytes(p,readFileSync(new URL('../'+p,import.meta.url))),sha=b=>createHash('sha256').update(b).digest('hex');
test('R23 exact six transitions preserve initial evidence and reject rollback or drift',()=>{
 assert.equal(r23FixTransitions.length,6);assert.deepEqual(validateR23Current(read),[]);
 for(const e of r23FixTransitions){const old=r23PreFixBytes(e.path,read(e.path));assert.equal(sha(old),e.before);for(const bad of[old,Buffer.concat([read(e.path),Buffer.from('drift')])])assert.ok(validateR23Current(p=>p===e.path?bad:read(p)).length>0);}
});
test('R23 finding corrections retain concurrency, approval, wrap and source boundaries',()=>{
 const a=read('src/content/docs/11-ai-native/agent-review-and-verification.md').toString(),b=read('src/content/docs/11-ai-native/context-spec-harness-loop.md').toString(),c=read('src/content/docs/11-ai-native/permissions-sandbox-worktrees.md').toString(),d=read('research/public-beta-review-source-excerpts/r23-ai-support-2026-11-16.md').toString();
 for(const s of[a,c]){assert.ok(s.includes('경쟁 구간'));assert.ok(s.includes('결함 구현'));assert.ok(s.includes('미재현·동시성 검증 미완료'));assert.match(s,/\x60\x60\x60text wrap/);assert.match(s,/contentStatus: draft/);}
 assert.match(a,/\n### 스냅샷 기반 검토의 함정\n/);assert.equal((a.match(/\x60\x60\x60text wrap/g)??[]).length,1);assert.equal((c.match(/\x60\x60\x60text wrap/g)??[]).length,2);
 assert.ok(c.includes('목록 조회까지만 허용하고 실행 선택 전에 멈춥니다'));assert.ok(c.includes('로컬 commit 자체는 Git 이력의 변경'));assert.ok(!c.includes('| external effect | commit·'));
 for(const phrase of['검색 증강 생성(RAG)','형식만 갖춘 명세(spec theater)','평가자(grader)'])assert.ok(b.includes(phrase));
 assert.doesNotMatch(d,/https:\/\/[^\s)]*?\/https?:\/\//);assert.ok(d.includes('not-confirmed'));
});
