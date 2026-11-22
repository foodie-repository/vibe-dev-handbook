import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {validateR25Inputs} from '../scripts/r25-review-inputs.mjs';
test('R25 preserves historical targets and the original BLOCKED response without local reviewer artifacts',()=>{
 const result=validateR25Inputs();assert.deepEqual(result.errors,[]);assert.equal(result.localEvidence,false);assert.equal(result.targets,5);
 const read=p=>p.endsWith('r25-reference-codex-review.md')?Buffer.from('PASS'):readFileSync(new URL('../'+p,import.meta.url));assert.ok(validateR25Inputs(undefined,{read}).errors.includes('initial result drift'));
});
