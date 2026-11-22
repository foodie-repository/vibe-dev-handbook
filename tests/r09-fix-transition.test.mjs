import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r09FixTransitions,r09PreFixBytes,validateR09Current} from '../scripts/r09-fix-transition.mjs';
import {r09PreCloseoutBytes} from '../scripts/r09-closeout.mjs';
import {preReadyBytes} from '../scripts/r26-closeout.mjs';
const read=p=>preReadyBytes(p,readFileSync(new URL('../'+p,import.meta.url))),sha=b=>createHash('sha256').update(b).digest('hex');
test('R09 restores four exact historical inputs and rejects rollback or drift',()=>{
 assert.equal(r09FixTransitions.length,4);assert.deepEqual(validateR09Current(read),[]);
 for(const e of r09FixTransitions){const now=read(e.path),old=r09PreFixBytes(e.path,now);assert.equal(sha(r09PreCloseoutBytes(e.path,now)),e.after);assert.equal(sha(old),e.before);for(const b of [old,Buffer.concat([now,Buffer.from('drift')])])assert.ok(validateR09Current(p=>p===e.path?b:read(p)).length>0);}
});
test('R09 separates permission cases and retains source product and topology boundaries',()=>{
 const t=read('src/content/docs/10-deployment-operations/build-deploy-domain-dns.md').toString();
 for(const s of ['배포 권한이 없어도','원격 접근 자체가 허용되지 않았다면','배포 작업만 성공하고 사용자 검증을 하지 않았다면','새 빌드를 실행하지 말고 기존 빌드','포괄 승인은 아닙니다','/project-name/logo.svg','authoritative nameserver','RFC 9499로 대체된 역사적 참고','2026-08-13에는','Vercel 재확인 실패','not-confirmed'])assert.ok(t.includes(s),s);
 assert.ok(!t.includes('/handbook/logo.svg'));assert.match(t,/contentStatus: review/);assert.ok(t.includes('```text wrap\n배포 관련 파일'));
 const audit=read('docs/project/public-beta-visual-audit.md').toString();assert.ok(audit.includes('실선 `S→B→A→H→U`'));assert.ok(audit.includes('점선 `D→U`'));assert.ok(audit.includes('점선 이름 조회 `사용자→DNS→호스팅`'));
 assert.equal(sha(read('src/assets/diagrams/deploy-flow.svg')),'be3798c0984fed38d4262bdc6b3d86b1b4800d5564e4d47394f25a3f9133d726');assert.equal(sha(read('src/assets/diagrams/source/deploy-flow.mmd')),'4ad88f9765658cd4d3814760479997215c2fe9e6bf0c426a9942858aeddc78dc');
});
