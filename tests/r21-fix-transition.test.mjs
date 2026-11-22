import {r21PreCloseoutBytes} from '../scripts/r21-closeout.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r21FixTransitions,r21PreFixBytes,validateR21Current} from '../scripts/r21-fix-transition.mjs';
const read=p=>r21PreCloseoutBytes(p,readFileSync(new URL('../'+p,import.meta.url))),sha=b=>createHash('sha256').update(b).digest('hex');
test('R21 exact four transitions preserve predecessors and reject rollback or drift',()=>{
 assert.equal(r21FixTransitions.length,4);assert.deepEqual(validateR21Current(read),[]);
 for(const e of r21FixTransitions){const old=r21PreFixBytes(e.path,read(e.path));assert.equal(sha(old),e.before);for(const bad of[old,Buffer.concat([read(e.path),Buffer.from('drift')])])assert.ok(validateR21Current(p=>p===e.path?bad:read(p)).length>0);}
});
test('R21 safety explanations preserve candidate forms loss boundaries and R08 resolutions',()=>{
 const b=read('src/content/docs/09-git-github/branch-commit-pull-request.md').toString(),u=read('src/content/docs/09-git-github/undo-merge-conflict-release.md').toString();
 for(const s of['--untracked-files=all','ignored','첫 커밋 전에는','일부만 stage하거나','후보 스냅샷','Git 명령의 내장 조건','PR 생성자가 push를 수행했다는 증거는 아니며'])assert.ok(b.includes(s),s);
 for(const s of['HEAD=A, index=B','경로를 지정하는 형식은','모든 untracked 파일을 일괄 삭제한다는 뜻은 아닙니다','기본 source는 HEAD','--no-commit','자동 stash나 사용자 변경 삭제','`confirmed`·`cancelled`'])assert.ok(u.includes(s),s);
 assert.match(u,/\x60\x60\x60text wrap\n파일과 외부 상태/);
 assert.match(b,/contentStatus: draft/);assert.match(u,/contentStatus: draft/);
});
