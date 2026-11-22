import {r20PreCloseoutBytes} from '../scripts/r20-closeout.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r10Closeout,r10PreCloseoutBytes,validateR10Closeout} from '../scripts/r10-closeout.mjs';
import {validateFiles,validateMatrix} from '../scripts/validate-m5-review-matrix.mjs';
import {validateR10Inputs} from '../scripts/r10-review-inputs.mjs';
import {r11PreFixBytes} from '../scripts/r11-fix-transition.mjs';
import {preReadyBytes} from '../scripts/r26-closeout.mjs';
const read=p=>preReadyBytes(p,readFileSync(new URL('../'+p,import.meta.url))),sha=b=>createHash('sha256').update(b).digest('hex');
test('R10 closeout restores eight exact predecessors and preserves manuscript body',()=>{
 assert.equal(r10Closeout.changes.length,8);
 for(const e of r10Closeout.changes){const now=read(e.path),before=r10PreCloseoutBytes(e.path,now);assert.equal(sha(r11PreFixBytes(e.path,now)),e.after);assert.equal(sha(before),e.before);assert.notDeepEqual(now,before);const drift=Buffer.concat([now,Buffer.from('drift')]);assert.deepEqual(r10PreCloseoutBytes(e.path,drift),drift);}
 const p=r10Closeout.changes[0].path,now=read(p).toString(),before=r10PreCloseoutBytes(p,read(p)).toString();assert.equal(now.split('\n---\n')[1],before.split('\n---\n')[1]);assert.match(now,/contentStatus: review/);assert.match(before,/contentStatus: draft/);
});
test('R10 done retains original and Fix1 history without closing adjacent or later rows',()=>{
 const r=validateFiles();assert.deepEqual(r.errors,[]);const s=r.matrix.rows[9].review_state;assert.deepEqual(s,r10Closeout.state);assert.equal(s.historical_verdict,'NEEDS CHANGES');assert.equal(s.release_ready,false);assert.deepEqual(s.open_findings,{critical:0,important:0,minor:0});assert.ok(r.matrix.rows[25].review_state.status === 'done' && r.matrix.rows[25].review_state.release_ready === false);
 for(const mutate of [s=>s.release_ready=true,s=>s.historical_verdict='PASS',s=>s.valid_independent_evidence=false,s=>s.current_target_sha256='0'.repeat(64)]){const m=structuredClone(r.matrix);mutate(m.rows[9].review_state);assert.ok(validateMatrix(m).some(e=>e.includes('R10 review_state')));}
 const a=read('docs/project/reviews/public-beta-1/r10-operations-adjudication.md').toString();assert.match(a,/모두 RESOLVED/);assert.match(a,/최초 NEEDS CHANGES/);assert.match(a,/Fix1 당시/);assert.match(a,/이후 review 전이와 R10 완료 판단/);assert.doesNotMatch(a,/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i);
 assert.equal(sha(read('docs/project/reviews/public-beta-1/r10-operations-codex-review.md')),'d9f273cfc8f48a08c9ba3af54b30b91348ffb0079edde21a4cd59a0911a5a88f');
 assert.match(r20PreCloseoutBytes('src/content/docs/08-quality/performance-security.md',read('src/content/docs/08-quality/performance-security.md')).toString(),/contentStatus: draft/);
 const m=structuredClone(r.matrix);m.rows[10].review_state=s;assert.ok(validateMatrix(m).some(e=>e.includes('R11')));
});
test('R10 closeout rejects missing drifted and rolled-back current evidence',()=>{
 assert.deepEqual(validateR10Closeout('',{read}),[]);assert.deepEqual(validateR10Inputs(undefined,{read}).errors,[]);
 for(const e of [...r10Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)),...r10Closeout.evidence])for(const mode of ['drift','missing',...(e.before?['rollback']:[])]){const altered=p=>{if(p!==e.path)return read(p);if(mode==='missing')throw Error('missing');return mode==='rollback'?r10PreCloseoutBytes(p,read(p)):Buffer.concat([read(p),Buffer.from('drift')]);};assert.ok(validateR10Closeout('',{read:altered}).some(x=>x.includes(e.path)),e.path+' '+mode);assert.ok(validateR10Inputs(undefined,{read:altered}).errors.some(x=>x.includes(e.path)),e.path+' gate');}
});
