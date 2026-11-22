import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,mkdtempSync,mkdirSync,writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {execFileSync,spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {r08FixTransitions,r08PreFixBytes,validateR08Current} from '../scripts/r08-fix-transition.mjs';
import {preReadyBytes} from '../scripts/r26-closeout.mjs';
const sha=b=>createHash('sha256').update(b).digest('hex'),read=p=>preReadyBytes(p,readFileSync(new URL('../'+p,import.meta.url)));
test('R08 fixes restore exact five predecessors and reject current rollback or drift',()=>{
 assert.equal(r08FixTransitions.length,5);assert.deepEqual(validateR08Current(read),[]);
 for(const e of r08FixTransitions){const old=r08PreFixBytes(e.path,read(e.path));assert.equal(sha(old),e.before);for(const replacement of [old,Buffer.concat([read(e.path),Buffer.from('drift')])])assert.ok(validateR08Current(p=>p===e.path?replacement:read(p)).length>0);}
});
test('R08 safety explanations and R21 local context retain narrow boundaries',()=>{
 const body=read('src/content/docs/09-git-github/git-and-github.md').toString();
 for(const s of ['--untracked-files=all','GitHub에서의 PR 병합','핸드북의 작업 안전 정책','자동 stash나 변경 삭제','첫 커밋 전','순변화','squash'])assert.ok(body.includes(s),s);
 assert.match(body,/contentStatus: review/);
 const branch=read('src/content/docs/09-git-github/branch-commit-pull-request.md').toString();assert.ok(branch.includes('PR 생성자가 push를 수행했다는 증거는 아니며'));assert.ok(branch.includes('[모임 참가 웹앱]'));
 const undo=read('src/content/docs/09-git-github/undo-merge-conflict-release.md').toString().split('### 중복 참가 방지 변경에서 결함이 발견됐다면')[1].split('## AI의')[0];assert.ok(!undo.includes('대기 상태'));assert.ok(!undo.includes('이미 발송한 알림'));assert.ok(undo.includes('`confirmed`·`cancelled`'));
});
test('R08 synthetic Git counterexamples distinguish hidden files unborn HEAD net diff and staged candidate',()=>{
 const cwd=mkdtempSync(join(tmpdir(),'handbook-r08-git-'));
 const git=(args)=>execFileSync('git',args,{cwd,encoding:'utf8'});
 git(['init','--quiet','--initial-branch=main']);mkdirSync(join(cwd,'new'));
 writeFileSync(join(cwd,'new','example.txt'),'fictional example\n');
 assert.equal(git(['-c','status.showUntrackedFiles=no','status','--short']), '');
 assert.match(git(['-c','status.showUntrackedFiles=no','status','--short','--branch','--untracked-files=all']),/\?\? new\/example.txt/);
 git(['add','new/example.txt']);assert.match(git(['diff','--staged']),/fictional example/);
 assert.notEqual(spawnSync('git',['diff','HEAD'],{cwd,encoding:'utf8'}).status,0);
 git(['-c','user.name=Fictional Handbook Test','-c','user.email=fixture@example.invalid','commit','--quiet','-m','fictional baseline']);
 writeFileSync(join(cwd,'new','example.txt'),'staged B\n');git(['add','new/example.txt']);writeFileSync(join(cwd,'new','example.txt'),'fictional example\n');
 assert.equal(git(['diff','HEAD']),'');assert.match(git(['diff','--staged']),/staged B/);assert.match(git(['diff']),/staged B/);
 writeFileSync(join(cwd,'helper.json'),'{"required":false}\n');git(['add','helper.json']);writeFileSync(join(cwd,'helper.json'),'{"required":true}\n');
 const checked=JSON.parse(readFileSync(join(cwd,'helper.json'),'utf8')),candidate=JSON.parse(git(['show',':helper.json']));
 assert.equal(checked.required,true);assert.equal(candidate.required,false);
 // Generated fixture remains in its unique temp directory; no cleanup touches user work.
});
