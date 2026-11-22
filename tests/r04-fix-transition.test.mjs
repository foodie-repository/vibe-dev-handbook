import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r04FixTransitions,r04PreFixBytes,validateR04Current} from '../scripts/r04-fix-transition.mjs';
import {r04PreCloseoutBytes} from '../scripts/r04-closeout.mjs';
import {validateR04Inputs,r04Root} from '../scripts/r04-review-inputs.mjs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url));
const sha=b=>createHash('sha256').update(b).digest('hex');
test('R04 exact finding transitions preserve historical bytes and reject rollback or unknown edits',()=>{
 assert.deepEqual(validateR04Current(read),[]);
 for(const e of r04FixTransitions){
  const now=read(e.path),before=r04PreFixBytes(e.path,now);
  assert.equal(sha(r04PreCloseoutBytes(e.path,now)),e.after);assert.equal(sha(before),e.before);assert.notDeepEqual(now,before);
  const drift=Buffer.concat([now,Buffer.from('drift')]);assert.deepEqual(r04PreFixBytes(e.path,drift),drift);
  for(const bad of [before,drift])assert.ok(validateR04Inputs(r04Root,{read:p=>p===e.path?bad:read(p)}).errors.includes('R04 current patch mismatch: '+e.path));
 }
});
test('R04 corrected self-message arrow is separated from the following label including marker height',()=>{
 const path='src/assets/diagrams/api-database-auth-sequence.svg';
 const check=svg=>{
  const loop=svg.match(/d="M612 348 H660 V(\d+) H616"/),mask=svg.match(/data-unit="5"><rect class="label-mask" x="356" y="(\d+)"/);
  assert.ok(loop&&mask);return Number(mask[1])-Number(loop[1])>7.5;
 };
 assert.equal(check(read(path).toString()),true);
 assert.equal(check(r04PreFixBytes(path,read(path)).toString()),false);
});
test('R04 figure separates personal confirmation from totals without changing topology',()=>{
 const svg=read('src/assets/diagrams/api-database-auth-sequence.svg').toString();
 const mmd=read('src/assets/diagrams/source/api-database-auth-sequence.mmd').toString();
 assert.equal([...svg.matchAll(/data-unit="\d+"/g)].length,11);assert.equal([...svg.matchAll(/class="lifeline"/g)].length,4);assert.equal([...svg.matchAll(/data-parallel=/g)].length,1);
 assert.match(svg,/동시성 전략으로 1건 확정/);assert.doesNotMatch(svg,/제약으로 1건만 확정/);assert.match(svg,/A 확정·인원≤정원/);assert.match(mmd,/A 참가 confirmed·확정 수≤정원/);
});
