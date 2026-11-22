import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {r26State, reviewedDocs, validateR26Closeout, r26PreCloseoutBytes} from '../scripts/r26-closeout.mjs';
import {validateFiles,validateMatrix} from '../scripts/validate-m5-review-matrix.mjs';

import {preReadyBytes} from '../scripts/r26-closeout.mjs';
const read = p => preReadyBytes(p,readFileSync(new URL('../'+p,import.meta.url)));
test('R26 is a separate integration review: no ready or owner approval is inferred',()=>{
  const result=validateFiles(), row=result.matrix.rows[25];
  assert.deepEqual(result.errors,[]);assert.equal(result.matrix.rows.length,26);
  assert.deepEqual(row.review_state,r26State);assert.equal(r26State.open_ids.length,5);
  assert.equal(reviewedDocs.length,59);assert.equal(new Set(reviewedDocs.map(([p])=>p)).size,59);
  for(const [path] of reviewedDocs)assert.match(read(path).toString(),/^contentStatus: review$/m);
  for(const mutate of [s=>s.historical_verdict='PASS',s=>s.initial_runner_exit=0,s=>s.release_ready=true,s=>s.open_findings.minor=0]){
    const copy=structuredClone(result.matrix);mutate(copy.rows[25].review_state);
    assert.ok(validateMatrix(copy).includes('R26 review_state mismatch'));
  }
});
test('R26 closeout rejects an altered manuscript, verdict, and rolled-back matrix',()=>{
  assert.deepEqual(validateR26Closeout('',read),[]);
  const matrix='docs/project/reviews/public-beta-1/review-matrix.md';
  for(const path of [reviewedDocs[0][0],'docs/project/reviews/public-beta-1/r26-integration-codex-rereview.md',matrix]){
    const changed=path===matrix?r26PreCloseoutBytes(path,read(path)):Buffer.concat([read(path),Buffer.from('drift')]);
    assert.notDeepEqual(changed,read(path));assert.ok(validateR26Closeout('',p=>p===path?changed:read(p)).some(x=>x.includes(path)));
  }
});
