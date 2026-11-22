import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const document = read('docs/project/reviews/public-beta-1/r02-successor-amendment.md');
const policy = JSON.parse(document.split('<!-- r02-successor-policy:start -->')[1].split('```json\n')[1].split('\n```')[0]);
test('R02 succession retains the exact owner-authorized scope and input obligations', () => {
  assert.deepEqual(policy, {
    review_id: 'R02', trigger: 'original-ephemeral-reviewer-ended',
    profile: {model: 'gpt-6-astra', effort: 'high', fresh: true, read_only: true},
    required_inputs: ['original-review-full','b01-evidence-full','b01-followup-full','contract-and-amendments','finding-adjudication','before-after-diff-and-hashes','affected-manuscript-context','direct-source-evidence'],
    preserve_original_verdict: 'BLOCKED', unchanged_scope: 'reuse-with-explicit-attribution',
    changed_scope: 'actual-independent-review', insufficient_input: 'BLOCKED',
    other_rows_affected: false, automatic_closeout: false,
  });
  for (const requirement of ['공통 계약의 여섯 절', '전송 전후 불변성', '미해결 Critical/Important0', '해당 시각 범위를 다시 확인', '모델 호출 전에 중단']) assert.ok(document.includes(requirement), requirement);
});
test('R02 exception leaves the shared contract and original image amendment immutable', () => {
  for (const [path, hash] of [
    ['docs/project/reviews/public-beta-1/codex-review-contract.md','e0df0f1092868097207189175ee9d0ead5d7fc15aecf56dd0d2937b8f44fd946'],
    ['docs/project/reviews/public-beta-1/r02-image-delivery-amendment.md','027508d6d1c1558c724e499e1282acf50742a38563ee9f48e5e3041f7308749d'],
  ]) assert.equal(createHash('sha256').update(read(path)).digest('hex'), hash);
});
