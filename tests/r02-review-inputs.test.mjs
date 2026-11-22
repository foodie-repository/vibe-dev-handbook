import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { validateFiles, extractJsonBlock } from '../scripts/validate-m5-review-matrix.mjs';

const repo = fileURLToPath(new URL('../', import.meta.url));
const requestPath = 'docs/project/reviews/public-beta-1/r02-client-server-request.md';
const manifestPath = 'docs/project/reviews/public-beta-1/r02-client-server-input-manifest.json';
const executionFiles = ['docs/project/reviews/public-beta-1/r02-client-server-execution-request.md', 'docs/project/reviews/public-beta-1/r02-client-server-execution-manifest.json', 'research/public-beta-review-source-excerpts/r02-client-server-2026-10-15.md'];
const hash = bytes => createHash('sha256').update(bytes).digest('hex');

// Exercise the real tracked checkout contract, without the ignored local PNGs.
function fixture(run) {
  const root = mkdtempSync(join(tmpdir(), 'r02-inputs-'));
  try {
    const files = [...new Set([...execFileSync('git', ['ls-files', '-z'], { cwd: repo, encoding: 'utf8' }).split('\0').filter(Boolean), ...executionFiles, 'docs/project/reviews/public-beta-1/r02-controller-closeout.md', 'docs/project/reviews/public-beta-1/r03-controller-closeout.md', 'docs/project/reviews/public-beta-1/r04-controller-closeout.md', 'docs/project/reviews/public-beta-1/r05-controller-closeout.md', 'docs/project/reviews/public-beta-1/r06-controller-closeout.md', 'docs/project/reviews/public-beta-1/r07-controller-closeout.md', 'docs/project/reviews/public-beta-1/r08-controller-closeout.md', 'docs/project/reviews/public-beta-1/r09-controller-closeout.md', 'docs/project/reviews/public-beta-1/r10-controller-closeout.md', 'docs/project/reviews/public-beta-1/r11-controller-closeout.md', 'docs/project/reviews/public-beta-1/r12-controller-closeout.md', 'docs/project/reviews/public-beta-1/r13-controller-closeout.md', 'docs/project/reviews/public-beta-1/r15-controller-closeout.md', 'docs/project/reviews/public-beta-1/r16-controller-closeout.md', 'docs/project/reviews/public-beta-1/r17-controller-closeout.md', 'docs/project/reviews/public-beta-1/r18-controller-closeout.md', 'docs/project/reviews/public-beta-1/r19-controller-closeout.md', 'docs/project/reviews/public-beta-1/r20-controller-closeout.md', 'docs/project/reviews/public-beta-1/r21-controller-closeout.md', 'docs/project/reviews/public-beta-1/r22-controller-closeout.md', 'docs/project/reviews/public-beta-1/r23-controller-closeout.md', 'docs/project/reviews/public-beta-1/r24-controller-closeout.md', 'docs/project/reviews/public-beta-1/r25-controller-closeout.md', 'docs/project/reviews/public-beta-1/r26-controller-closeout.md'])];
    for (const path of files) {
      mkdirSync(dirname(join(root, path)), { recursive: true });
      writeFileSync(join(root, path), readFileSync(join(repo, path)));
    }
    return run(root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

test('R02 request removal cannot silently pass the M5 gate', () => fixture(root => {
  rmSync(join(root, requestPath));
  assert.ok(validateFiles(root).errors.some(e => e.includes('R02 candidate request')), 'missing R02 request must fail');
}));

test('R02 malformed or promoted manifest cannot authorize a candidate', () => fixture(root => {
  const path = join(root, manifestPath);
  const original = readFileSync(path, 'utf8');
  for (const mutation of ['{', JSON.stringify({ ...JSON.parse(original), review_ready: true }), JSON.stringify({ ...JSON.parse(original), actual_review: 'pass' })]) {
    writeFileSync(path, mutation);
    assert.ok(validateFiles(root).errors.some(e => e.includes('R02 candidate manifest')));
  }
}));

test('R02 request tampering still fails when its manifest hash is rematched', () => fixture(root => {
  const path = join(root, requestPath);
  const changed = readFileSync(path, 'utf8').replace('"review_ready": false', '"review_ready": true');
  writeFileSync(path, changed);
  const mp = join(root, manifestPath);
  const manifest = JSON.parse(readFileSync(mp, 'utf8'));
  manifest.request_sha256 = hash(changed);
  writeFileSync(mp, JSON.stringify(manifest));
  assert.ok(validateFiles(root).errors.some(e => e.includes('R02 candidate request hash')));
}));

test('R02 whole manuscript and embedded context drift cannot pass', () => fixture(root => {
  const paths = ['src/content/docs/03-full-stack/client-server-full-stack.md', 'src/content/docs/reference/development-glossary.md'];
  for (const path of paths) {
    const full = join(root, path), original = readFileSync(full);
    writeFileSync(full, Buffer.concat([original, Buffer.from('\nchanged\n')]));
    assert.ok(validateFiles(root).errors.some(e => e.includes('R02 candidate input') || e.includes('R02 candidate context')));
    writeFileSync(full, original);
  }
}));

test('R02 tracked validation is not local evidence or execution readiness', () => fixture(root => {
  const result = validateFiles(root);
  assert.deepEqual(result.errors, []);
  assert.deepEqual(result.r02Candidate, { state: 'candidate-fixed', directInputs: 23, contextExcerpts: 19, localEvidence: 'not-checked', reviewReady: false });
  const local = validateFiles(root, { localEvidence: true });
  assert.ok(local.errors.some(e => e.includes('R02 candidate local')));
  const r02 = result.matrix.rows.find(row => row.id === 'R02');
  assert.equal(r02.review_state.input_manifest_state, 'input-fixed');
  assert.equal(r02.review_state.actual_invocation, 'completed');
}));

test('R02 execution input is mandatory and is not a completed review', () => fixture(root => {
  const valid = validateFiles(root);
  assert.deepEqual(valid.errors, []);
  assert.equal(valid.r02Execution.state, 'input-fixed');
  assert.equal(valid.r02Execution.actualReview, 'not-run');
  rmSync(join(root, executionFiles[0]));
  assert.ok(validateFiles(root).errors.some(e => e.includes('R02 execution request')));
}));

test('R02 execution rejects freshness drift and manifest rehash or promotion', () => fixture(root => {
  const mp = join(root, executionFiles[1]), sp = join(root, executionFiles[2]);
  const original = readFileSync(mp, 'utf8');
  for (const patch of [{ state: 'done' }, { actual_review: 'pass' }, { combined_sha256: '0'.repeat(64) }, { source_checked_at: '2026-09-30' }]) {
    writeFileSync(mp, JSON.stringify({ ...JSON.parse(original), ...patch }));
    assert.ok(validateFiles(root).errors.some(e => e.includes('R02 execution manifest')));
  }
  writeFileSync(mp, original);
  writeFileSync(sp, readFileSync(sp, 'utf8').replaceAll('2026-10-15', '2026-09-30'));
  const rematched = JSON.parse(original);
  rematched.entries.at(-1).sha256 = hash(readFileSync(sp));
  writeFileSync(mp, JSON.stringify(rematched));
  assert.ok(validateFiles(root).errors.some(e => e.includes('R02 execution')));
}));

test('R02 local mode rejects a non-PNG crop and missing capture manifest', () => fixture(root => {
  const request = extractJsonBlock(readFileSync(join(root, requestPath), 'utf8'), 'm5-r02-review-request:data');
  const png = request.direct_inputs.find(x => x.read_mode === 'binary-full');
  mkdirSync(dirname(join(root, png.path)), { recursive: true });
  writeFileSync(join(root, png.path), 'not-a-png');
  const result = validateFiles(root, { localEvidence: true });
  assert.ok(result.errors.some(e => e.includes('R02 candidate local PNG')));
  assert.ok(result.errors.some(e => e.includes('R02 candidate local manifest')));
}));

test('R02 matrix appendix preserves historical bytes but rejects earlier drift', () => fixture(root => {
  const path = join(root, 'docs/project/reviews/public-beta-1/review-matrix.md');
  assert.deepEqual(validateFiles(root).errors, []);
  const original = readFileSync(path, 'utf8');
  for (const changed of [
    original.replace('최초 기록일: 2026-08-30', '최초 기록일: 2026-08-31'),
    original.replace('\n## R02 입력 후보 체크포인트\n', ' \n## R02 입력 후보 체크포인트\n'),
  ]) {
    writeFileSync(path, changed);
    assert.ok(validateFiles(root).errors.some(e => e.includes('R02 candidate context hash mismatch: matrix-allocation')));
  }
}));
