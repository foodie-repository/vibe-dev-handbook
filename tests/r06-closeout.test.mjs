import {r25PreCloseoutBytes} from '../scripts/r25-closeout.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r06Closeout,r06PreCloseoutBytes,validateR06Closeout} from '../scripts/r06-closeout.mjs';
import {validateFiles,validateMatrix} from '../scripts/validate-m5-review-matrix.mjs';
import {validateR06Inputs} from '../scripts/r06-review-inputs.mjs';
import {r07PreFixBytes} from '../scripts/r07-fix-transition.mjs';
import {preReadyBytes} from '../scripts/r26-closeout.mjs';
const read=p=>preReadyBytes(p,readFileSync(new URL('../'+p,import.meta.url))),sha=b=>createHash('sha256').update(b).digest('hex');
test('R06 CO-M01 case review owner matches the authoritative matrix',()=>{
 const r=validateFiles();assert.deepEqual(r.errors,[]);const owner=r.matrix.rows.find(row=>row.inputs.includes('src/content/docs/12-case-studies/analytics-dashboard-case-study.md'));assert.equal(owner.id,'R13');const a=read('docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-adjudication.md').toString();assert.match(a,/R13 전체 검토를 대신하지 않습니다/);assert.doesNotMatch(a,/R22 전체 검토/);
});
test('R06 metadata-only closeout exactly restores fixed predecessors and keeps adjacent drafts',()=>{
 for(const e of r06Closeout.changes){const now=read(e.path),before=r06PreCloseoutBytes(e.path,now);assert.equal(sha(r07PreFixBytes(e.path,now)),e.after);assert.equal(sha(before),e.before);assert.notDeepEqual(now,before);const drift=Buffer.concat([now,Buffer.from('drift')]);assert.deepEqual(r06PreCloseoutBytes(e.path,drift),drift);}
 const p=r06Closeout.changes[0].path,now=read(p).toString(),before=r06PreCloseoutBytes(p,read(p)).toString();assert.equal(now.split('\n---\n')[1],before.split('\n---\n')[1]);assert.match(now,/contentStatus: review/);assert.match(before,/contentStatus: draft/);
 assert.match(read('src/content/docs/08-quality/testing-strategy.md').toString(),/contentStatus: review/);assert.match(r25PreCloseoutBytes('src/content/docs/reference/methodology-map.md',read('src/content/docs/reference/methodology-map.md')).toString(),/contentStatus: draft/);
});
test('R06 done preserves original BLOCKED and subsequent E01 classification without premature promotion',()=>{
 const r=validateFiles();assert.deepEqual(r.errors,[]);const s=r.matrix.rows[5].review_state;assert.deepEqual(s,r06Closeout.state);assert.equal(s.historical_verdict,'BLOCKED');assert.equal(s.release_ready,false);assert.deepEqual(s.open_findings,{critical:0,important:0,minor:0});assert.deepEqual(s.deferred_findings,[]);assert.ok(r.matrix.rows[25].review_state.status === 'done' && r.matrix.rows[25].review_state.release_ready === false);
 for(const mutate of [s=>s.release_ready=true,s=>s.historical_verdict='PASS',s=>s.valid_independent_evidence=false,s=>s.current_target_sha256='0'.repeat(64)]){const m=structuredClone(r.matrix);mutate(m.rows[5].review_state);assert.ok(validateMatrix(m).some(e=>e.includes('R06 review_state')));}
 const a=read('docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-adjudication.md').toString();assert.match(a,/E01.*Important\/P1/);assert.match(a,/최초 C0\/I1\/M3·별도 E01 기록은 바꾸지/);
 const m=structuredClone(r.matrix);m.rows[6].review_state=s;assert.ok(validateMatrix(m).some(e=>e.includes('R07')));
});
test('R06 closeout rejects missing, drifted or rolled-back current pins before historical reuse',()=>{
 assert.deepEqual(validateR06Closeout('',{read}),[]);assert.deepEqual(validateR06Inputs(undefined,{read}).errors,[]);
 for(const e of [...r06Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)),...r06Closeout.evidence])for(const mode of ['drift','missing',...(e.before?['rollback']:[])]){const altered=p=>{if(p!==e.path)return read(p);if(mode==='missing')throw Error('missing');return mode==='rollback'?r06PreCloseoutBytes(p,read(p)):Buffer.concat([read(p),Buffer.from('drift')]);};assert.ok(validateR06Closeout('',{read:altered}).some(x=>x.includes(e.path)),e.path+' '+mode);assert.ok(validateR06Inputs(undefined,{read:altered}).errors.some(x=>x.includes(e.path)),e.path+' input gate');}
});
