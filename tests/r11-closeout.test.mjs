import {r12PreFixBytes} from '../scripts/r12-fix-transition.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r11Closeout,r11PreCloseoutBytes,validateR11Closeout} from '../scripts/r11-closeout.mjs';
import {validateFiles,validateMatrix} from '../scripts/validate-m5-review-matrix.mjs';
import {validateR11Inputs} from '../scripts/r11-review-inputs.mjs';
import {preReadyBytes} from '../scripts/r26-closeout.mjs';
const read=p=>preReadyBytes(p,readFileSync(new URL('../'+p,import.meta.url))),sha=b=>createHash('sha256').update(b).digest('hex');
test('R11 closeout restores eight exact predecessors and preserves body',()=>{
 assert.equal(r11Closeout.changes.length,8);
 for(const e of r11Closeout.changes){const now=read(e.path),before=r11PreCloseoutBytes(e.path,now);assert.equal(sha(r12PreFixBytes(e.path,now)),e.after);assert.equal(sha(before),e.before);const drift=Buffer.concat([now,Buffer.from('drift')]);assert.deepEqual(r11PreCloseoutBytes(e.path,drift),drift);}
 const p=r11Closeout.changes[0].path,now=read(p).toString(),before=r11PreCloseoutBytes(p,read(p)).toString();assert.equal(now.split('\n---\n')[1],before.split('\n---\n')[1]);assert.match(now,/contentStatus: review/);assert.match(before,/contentStatus: draft/);
});
test('R11 completion preserves both historical verdicts and separate procedure resolution',()=>{
 const r=validateFiles();assert.deepEqual(r.errors,[]);const s=r.matrix.rows[10].review_state;assert.deepEqual(s,r11Closeout.state);assert.equal(s.historical_verdict,'NEEDS CHANGES');assert.equal(s.release_ready,false);assert.deepEqual(s.open_findings,{critical:0,important:0,minor:0});assert.ok(r.matrix.rows[25].review_state.status === 'done' && r.matrix.rows[25].review_state.release_ready === false);
 for(const mutate of [s=>s.release_ready=true,s=>s.historical_verdict='PASS',s=>s.valid_independent_evidence=false,s=>s.current_target_sha256='0'.repeat(64)]){const m=structuredClone(r.matrix);mutate(m.rows[10].review_state);assert.ok(validateMatrix(m).some(e=>e.includes('R11 review_state')));}
 assert.equal(sha(read('docs/project/reviews/public-beta-1/r11-coding-agents-codex-review.md')),'69e036963050ec16ff659d8151d92e33cfeed4c7ae348c60f7957cbbb10cc612');
 assert.equal(sha(read('docs/project/reviews/public-beta-1/r11-coding-agents-codex-rereview.md')),'8e85040a67db574f85f2822900c434028848de1141e3d25e053949fb3fa7eb06');
 assert.equal(sha(read('docs/project/reviews/public-beta-1/r11-procedure-review.md')),'87d3eca31be610c4890039b565a669fd98597ca400654e73b9707a29940c477e');
 const m=structuredClone(r.matrix);m.rows[11].review_state=s;assert.ok(validateMatrix(m).some(e=>e.includes('R12')));
});
test('R11 closeout rejects missing drifted and rolled-back current evidence',()=>{
 assert.deepEqual(validateR11Closeout('',{read}),[]);assert.deepEqual(validateR11Inputs(undefined,{read}).errors,[]);
 for(const e of [...r11Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)),...r11Closeout.evidence])for(const mode of ['drift','missing',...(e.before?['rollback']:[])]){const altered=p=>{if(p!==e.path)return read(p);if(mode==='missing')throw Error('missing');return mode==='rollback'?r11PreCloseoutBytes(p,read(p)):Buffer.concat([read(p),Buffer.from('drift')]);};assert.ok(validateR11Closeout('',{read:altered}).some(x=>x.includes(e.path)),e.path+' '+mode);assert.ok(validateR11Inputs(undefined,{read:altered}).errors.some(x=>x.includes(e.path)),e.path+' gate');}
});
