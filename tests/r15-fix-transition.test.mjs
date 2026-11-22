import {r15PreCloseoutBytes} from '../scripts/r15-closeout.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r15FixTransitions,r15PreFixBytes,validateR15Current} from '../scripts/r15-fix-transition.mjs';
import {validateR15Inputs} from '../scripts/r15-review-inputs.mjs';
import {validateR14Inputs} from '../scripts/r14-review-inputs.mjs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url)),sha=b=>createHash('sha256').update(b).digest('hex');
test('R15 exact five-file fix restores frozen inputs and rejects drift missing and rollback',()=>{
 assert.equal(r15FixTransitions.length,5);assert.deepEqual(validateR15Inputs().errors,[]);assert.deepEqual(validateR14Inputs().errors,[]);
 for(const e of r15FixTransitions){const b=read(e.path),old=r15PreFixBytes(e.path,b);assert.equal(sha(r15PreCloseoutBytes(e.path,b)),e.after);assert.equal(sha(old),e.before);for(const mode of ['drift','missing','rollback']){const altered=p=>{if(p!==e.path)return read(p);if(mode==='missing')throw Error('missing');return mode==='rollback'?old:Buffer.concat([b,Buffer.from('drift')]);};assert.ok(validateR15Current(altered).length);assert.ok(validateR15Inputs(undefined,{read:altered}).errors.length);}}
});
test('R15 ignore output and denied parent do not prove exclusion or target existence',()=>{
 const t=read('src/content/docs/02-work-environment/files-folders-paths.md').toString();
 for(const x of ['출력이 있다는 사실만으로 제외 여부를 판정하지 않습니다','부정 패턴','!.env.example','오류 없이 조회','기본 검사에서 빠지는 tracked','최종 파일의 존재는 아직 확인하지 못했을 수 있음'])assert.ok(t.includes(x),x);
 assert.ok(!t.includes('파일은 있지만 읽기·실행·쓰기 권한이 없음'));
});
test('R15 process termination preserves graceful shutdown and listener selection boundaries',()=>{
 const t=read('src/content/docs/02-work-environment/terminal-processes-ports.md').toString();
 for(const x of ['정상 종료 요청으로 간주하지 마세요','확인 프롬프트나 `-Force` 사용 여부도 정상 저장을 보장하지 않습니다','로컬 주소와 `State`','OwningProcess','Listen','부모 프로세스의 ID(PPID)','교육용 가상 데이터(fixture)'])assert.ok(t.includes(x),x);
 assert.equal(sha(read('src/styles/custom.css')),'2236f2a8a9b30515cb641d48de7089d15590834766ada3f60de9f649ef36c137');
});
test('R15 current floating Python link preserves historical confirmation instead of replacing its date',()=>{
 const t=read('src/content/docs/02-work-environment/dependencies-package-managers-environments.md').toString();
 for(const x of ['[Python 3.14 `venv`]','2026-08-13','3.14.7','3.14.10','현재 패치 버전은 확인하지 못했으므로','변경 전후 차이(diff)','지속적 통합(Continuous Integration, CI)'])assert.ok(t.includes(x),x);
});
