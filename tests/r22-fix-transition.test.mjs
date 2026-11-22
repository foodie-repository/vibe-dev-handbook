import {r22PreCloseoutBytes} from '../scripts/r22-closeout.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r22FixTransitions,r22PreFixBytes,validateR22Current} from '../scripts/r22-fix-transition.mjs';
const read=p=>r22PreCloseoutBytes(p,readFileSync(new URL('../'+p,import.meta.url))),sha=b=>createHash('sha256').update(b).digest('hex');
test('R22 exact three transitions preserve original evidence and reject rollback or drift',()=>{
 assert.equal(r22FixTransitions.length,3);assert.deepEqual(validateR22Current(read),[]);
 for(const e of r22FixTransitions){const old=r22PreFixBytes(e.path,read(e.path));assert.equal(sha(old),e.before);for(const bad of[old,Buffer.concat([read(e.path),Buffer.from('drift')])])assert.ok(validateR22Current(p=>p===e.path?bad:read(p)).length>0);}
});
test('R22 config and secret safety distinctions and natural-language wrap remain explicit',()=>{
 const s=read('src/content/docs/10-deployment-operations/environment-variables-config.md').toString();
 for(const phrase of ['설정으로 사용되는 목적과 역할','별도 축으로 공개 가능 여부','변수 이름만 발견한 것은','악용 가능한 파생값','완전히 마스킹된 값','되돌릴 수 있게 인코딩','비밀값의 길이, 해시','별도 승인 없는 실제 .env','명령은 별도 승인된 범위','import.meta.env','context: "client", access: "public"','context: "server", access: "secret"','추출에서 빠진 CLI 옵션','선택 사항이라 값 자체가 없어도 되는 설정'])assert.ok(s.includes(phrase),phrase);
 assert.ok(!s.includes('--env-file'));assert.match(s,/\x60\x60\x60text wrap\n허용된 로컬/);assert.match(s,/contentStatus: draft/);
});
