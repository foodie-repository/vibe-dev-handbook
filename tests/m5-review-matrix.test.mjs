import {preReadyBytes} from '../scripts/r26-closeout.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as matrixValidator from '../scripts/validate-m5-review-matrix.mjs';
import {r07PreFixBytes} from '../scripts/r07-fix-transition.mjs';

const { extractJsonBlock, validateAttemptLog, validateFiles, validateLocalEvidence, validateMatrix, validateMatrixDocument, validateR01Bundle, validateR01Closeout, validateR01SourceEvidence } = matrixValidator;
const r01RequestPath = 'docs/project/reviews/public-beta-1/r01-software-system-request.md';
const r01SourceEvidencePath = 'research/public-beta-review-source-excerpts/r01-software-system.md';
const r01TargetPath = 'src/content/docs/01-mental-models/software-is-a-system.md';
const r01ResultPath = 'docs/project/reviews/public-beta-1/r01-software-system-codex-review.md';
const r01AdjudicationPath = 'docs/project/reviews/public-beta-1/r01-software-system-adjudication.md';

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

function replaceJsonBlock(document, marker, payload) {
  return document.replace(
    new RegExp(`<!-- ${marker}:start -->\\n\`\`\`json\\n[\\s\\S]*?\\n\`\`\`\\n<!-- ${marker}:end -->`),
    `<!-- ${marker}:start -->\n\`\`\`json\n${JSON.stringify(payload, null, 2)}\n\`\`\`\n<!-- ${marker}:end -->`,
  );
}

function mutateAndRehashRequest(mutate) {
  const { matrix, request, requestDocument } = validateFiles();
  const changedMatrix = structuredClone(matrix);
  const changedRequest = structuredClone(request);
  mutate(changedRequest);
  const requestJson = JSON.stringify(changedRequest, null, 2);
  const changedDocument = requestDocument.replace(
    /<!-- m5-r01-review-request:data:start -->\n```json\n[\s\S]*?\n```\n<!-- m5-r01-review-request:data:end -->/,
    `<!-- m5-r01-review-request:data:start -->\n\`\`\`json\n${requestJson}\n\`\`\`\n<!-- m5-r01-review-request:data:end -->`,
  );
  const documentBytes = Buffer.from(changedDocument, 'utf8');
  changedMatrix.rows[0].review_state.request_sha256 = sha256(documentBytes);
  return { matrix: changedMatrix, request: changedRequest, requestDocument: changedDocument };
}

function validateWithSharedContextDocuments(contentMapDocument, masterPlanDocument, sourceMapDocument = undefined) {
  const root = mkdtempSync(join(tmpdir(), 'm5-r01-shared-context-'));
  try {
    mkdirSync(join(root, 'docs', 'superpowers', 'plans'), { recursive: true });
    symlinkSync(new URL('../docs/project', import.meta.url), join(root, 'docs', 'project'), 'dir');
    symlinkSync(new URL('../docs/superpowers/specs', import.meta.url), join(root, 'docs', 'superpowers', 'specs'), 'dir');
    if (sourceMapDocument === undefined) symlinkSync(new URL('../research', import.meta.url), join(root, 'research'), 'dir');
    else {
      mkdirSync(join(root, 'research'));
      for (const name of readdirSync(new URL('../research', import.meta.url))) {
        if (name !== 'source-map.md') symlinkSync(new URL(`../research/${name}`, import.meta.url), join(root, 'research', name));
      }
      writeFileSync(join(root, 'research', 'source-map.md'), sourceMapDocument);
    }
    symlinkSync(new URL('../src', import.meta.url), join(root, 'src'), 'dir');
    symlinkSync(new URL('../RULES.md', import.meta.url), join(root, 'RULES.md'), 'file');
    writeFileSync(join(root, 'CONTENT_MAP.md'), contentMapDocument);
    writeFileSync(join(root, 'docs', 'superpowers', 'plans', '2026-08-12-public-beta-master-plan.md'), masterPlanDocument);
    const { matrix, request, requestDocument } = validateFiles();
    return validateR01Bundle(matrix, requestDocument, request, root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

test('default validation succeeds from tracked inputs when ignored local evidence is absent', () => {
  const root = mkdtempSync(join(tmpdir(), 'm5-clean-checkout-'));
  try {
    for (const directory of ['docs', 'research', 'src']) symlinkSync(new URL(`../${directory}`, import.meta.url), join(root, directory), 'dir');
    for (const file of ['CONTENT_MAP.md', 'RULES.md', 'AGENTS.md', 'PROJECT_CONTEXT.md', 'ROADMAP.md']) symlinkSync(new URL(`../${file}`, import.meta.url), join(root, file), 'file');
    assert.deepEqual(validateFiles(root).errors, []);
    const explicitLocal = spawnSync(process.execPath, [fileURLToPath(new URL('../scripts/validate-m5-review-matrix.mjs', import.meta.url)), '--local-evidence', root], { encoding: 'utf8' });
    assert.equal(explicitLocal.status, 1, explicitLocal.stderr || explicitLocal.stdout);
    assert.match(explicitLocal.stdout, /missing local direct evidence/);
    assert.match(explicitLocal.stdout, /missing local context evidence/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test('local evidence validation accepts exact PNG/report bytes and rejects missing or tampered evidence', () => {
  const root = mkdtempSync(join(tmpdir(), 'm5-local-evidence-'));
  try {
    const png = Buffer.concat([Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]), Buffer.from('fixture')]);
    const report = Buffer.from('alpha\nbeta\n');
    writeFileSync(join(root, 'evidence.png'), png);
    writeFileSync(join(root, 'report.md'), report);
    const request = {
      direct_inputs: [{ id: 'render-fixture', path: 'evidence.png', sha256: sha256(png), read_mode: 'binary-full' }],
      context_excerpts: [{ id: 'report-fixture', path: 'report.md', sha256: sha256(report), segments: [{ label: 'fixture line', start_line: 2, end_line: 2, text: 'beta' }] }],
    };
    const options = { directInputIds: ['render-fixture'], contextExcerptIds: ['report-fixture'] };
    assert.deepEqual(validateLocalEvidence(request, root, options), []);

    const missing = structuredClone(request);
    missing.direct_inputs[0].path = 'missing.png';
    assert.ok(validateLocalEvidence(missing, root, options).some(error => error.includes('missing local direct evidence')));

    const missingReport = structuredClone(request);
    missingReport.context_excerpts[0].path = 'missing.md';
    assert.ok(validateLocalEvidence(missingReport, root, options).some(error => error.includes('missing local context evidence')));

    writeFileSync(join(root, 'evidence.png'), Buffer.concat([png, Buffer.from('tampered')]));
    assert.ok(validateLocalEvidence(request, root, options).some(error => error.includes('local direct evidence hash mismatch')));

    writeFileSync(join(root, 'evidence.png'), Buffer.from('not a PNG'));
    assert.ok(validateLocalEvidence(request, root, options).some(error => error.includes('local PNG signature mismatch')));

    writeFileSync(join(root, 'report.md'), Buffer.from('alpha\nchanged\n'));
    assert.ok(validateLocalEvidence(request, root, options).some(error => error.includes('local context evidence hash mismatch')));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

// Production breaks caught: an incomplete R01 row, any Critical/Important promotion, a non-metadata target edit, or result/adjudication evidence drift.
test('R01 controller closeout requires the exact PASS result, complete adjudication, and metadata-only review transition', () => {
  const { matrix } = validateFiles();
  const state = matrix.rows[0].review_state;
  assert.equal(state.status, 'done');
  assert.equal(state.review_state, 'pass');
  assert.equal(state.result_state, 'pass');
  assert.equal(state.adjudication_state, 'complete');
  assert.equal(state.rereview_state, 'not-required-metadata-only');
  assert.equal(state.valid_independent_evidence, true);
  assert.deepEqual(state.open_findings, { critical: 0, important: 0, minor: 2 });
  assert.equal(state.release_ready, false);

  const targetDocument = readFileSync(new URL(`../${r01TargetPath}`, import.meta.url), 'utf8');
  const resultDocument = readFileSync(new URL(`../${r01ResultPath}`, import.meta.url), 'utf8');
  const adjudicationDocument = readFileSync(new URL(`../${r01AdjudicationPath}`, import.meta.url), 'utf8');
  assert.deepEqual(validateR01Closeout(matrix, undefined, { targetDocument, resultDocument, adjudicationDocument }), []);

  const bodyMutation = targetDocument.replace('소프트웨어는 눈앞의 화면이나 코드 파일 하나가 아니라', '소프트웨어는 화면 하나일 뿐이며');
  assert.ok(validateR01Closeout(matrix, undefined, { targetDocument: bodyMutation, resultDocument, adjudicationDocument }).some(error => error.includes('metadata-only target transition')));

  const resultMutation = resultDocument.replace('Minor `2`', 'Minor `1`');
  assert.ok(validateR01Closeout(matrix, undefined, { targetDocument, resultDocument: resultMutation, adjudicationDocument }).some(error => error.includes('canonical result SHA-256 mismatch')));

  const adjudicationMutation = adjudicationDocument.replace('accept-current', 'reject');
  assert.ok(validateR01Closeout(matrix, undefined, { targetDocument, resultDocument, adjudicationDocument: adjudicationMutation }).some(error => error.includes('adjudication')));

  const blockingFinding = structuredClone(matrix);
  blockingFinding.rows[0].review_state.open_findings.important = 1;
  assert.ok(validateMatrix(blockingFinding).some(error => error.includes('R01 review_state open_findings mismatch')));
});

test('R01 closeout matrix prose rejects every stale claim that R01 is unexecuted', () => {
  const document = readFileSync(new URL('../docs/project/reviews/public-beta-1/review-matrix.md', import.meta.url), 'utf8');
  const staleClaims = [
    '이 행렬 개정은 실제 R01~R26 실행',
    'R01의 요청서·직접 입력17개·문맥 발췌17개·선언 해시·실행 미완료 상태',
    '이제 입력과 해시를 유지한 채 R01 fresh Codex reviewer에게 전달할 수 있습니다.',
    '실제 검토는 여전히 `not-run`입니다.',
  ];
  for (const staleClaim of staleClaims) {
    const candidate = document.includes(staleClaim) ? document : `${document}\n${staleClaim}\n`;
    assert.ok(validateMatrixDocument(candidate).some(error => error.includes('stale R01 unexecuted claim')), staleClaim);
  }
});

test('R01 historical shared-context validation allows only R02-plus progress and keeps R01 segments fixed', () => {
  const historical = p => preReadyBytes(p,readFileSync(new URL('../'+p,import.meta.url))).toString('utf8');
  const contentMap = historical('CONTENT_MAP.md');
  const masterPlan = historical('docs/superpowers/plans/2026-08-12-public-beta-master-plan.md');
  const r02ProgressContentMap = contentMap
    .replace('- 상태: `draft` 58개, `seed` 0개, `review` 1개, `ready` 0개', '- 상태: `draft` 57개, `seed` 0개, `review` 2개, `ready` 0개')
    .replace('| [클라이언트·서버·풀스택](src/content/docs/03-full-stack/client-server-full-stack.md) | `draft` | 15,998 | `/03-full-stack/client-server-full-stack/` |', '| [클라이언트·서버·풀스택](src/content/docs/03-full-stack/client-server-full-stack.md) | `review` | 15,998 | `/03-full-stack/client-server-full-stack/` |');
  const r02ProgressMasterPlan = masterPlan.replace('| - [ ] | R02 `client-server` |', '| - [x] | R02 `client-server` |');
  assert.deepEqual(validateWithSharedContextDocuments(r02ProgressContentMap, r02ProgressMasterPlan), []);

  const changedR01ContentMap = contentMap.replace('| [소프트웨어는 시스템입니다](src/content/docs/01-mental-models/software-is-a-system.md) |', '| [소프트웨어는 단일 파일입니다](src/content/docs/01-mental-models/software-is-a-system.md) |');
  assert.ok(validateWithSharedContextDocuments(changedR01ContentMap, masterPlan).some(error => error.includes('context excerpt content mismatch: content-map-pb-021')));

  const changedR01MasterPlan = masterPlan.replace('| - [x] | R01 `software-system` |', '| - [x] | R01 `single-file` |');
  assert.ok(validateWithSharedContextDocuments(contentMap, changedR01MasterPlan).some(error => error.includes('context excerpt content mismatch: master-plan')));

  const revertedR01ContentMap = contentMap.replace('| [소프트웨어는 시스템입니다](src/content/docs/01-mental-models/software-is-a-system.md) | `review` |', '| [소프트웨어는 시스템입니다](src/content/docs/01-mental-models/software-is-a-system.md) | `draft` |');
  const revertedR01MasterPlan = masterPlan.replace('| - [x] | R01 `software-system` |', '| - [ ] | R01 `software-system` |');
  assert.deepEqual([
    validateWithSharedContextDocuments(revertedR01ContentMap, masterPlan).some(error => error.includes('context excerpt content mismatch: content-map-pb-021')),
    validateWithSharedContextDocuments(contentMap, revertedR01MasterPlan).some(error => error.includes('context excerpt content mismatch: master-plan')),
  ], [true, true], 'R01 completion metadata must not regress to the historical draft input');
});

test('R01 source-map appendix preserves historical excerpts and rejects edits to them', () => {
  // Test an unrelated appendix after restoring the exactly pinned R07 prefix.
  const sourceMap = r07PreFixBytes('research/source-map.md', readFileSync(new URL('../research/source-map.md', import.meta.url))).toString();
  const contentMap = readFileSync(new URL('../CONTENT_MAP.md', import.meta.url), 'utf8');
  const masterPlan = readFileSync(new URL('../docs/superpowers/plans/2026-08-12-public-beta-master-plan.md', import.meta.url), 'utf8');
  const appended = `${sourceMap}\n## R02 unrelated appendix\n`;
  assert.deepEqual(validateWithSharedContextDocuments(contentMap, masterPlan, appended), []);
  const changedR01Segment = appended.replace('| PB-021 ', '| PB-021 R01 변경 ');
  assert.notEqual(changedR01Segment, appended);
  assert.ok(validateWithSharedContextDocuments(contentMap, masterPlan, changedR01Segment).some(error => error.includes('context excerpt content mismatch: source-map-pb-021')));
});

test('R01 source-map appendix does not permit a changed declared historical hash', () => {
  const { matrix, request, requestDocument } = mutateAndRehashRequest(changed => {
    const excerpt = changed.context_excerpts.find(candidate => candidate.id === 'source-map-pb-021');
    excerpt.sha256 = '0'.repeat(64);
  });
  assert.ok(validateR01Bundle(matrix, requestDocument, request).some(error => error.includes('context source hash mismatch: research/source-map.md')));
});

test('R01 tracked official-source evidence fixes every required claim family for offline review', () => {
  const { errors, matrix, request, sourceEvidence, sourceEvidenceDocument } = validateFiles();
  assert.deepEqual(errors, []);
  assert.deepEqual(validateR01SourceEvidence(sourceEvidenceDocument, sourceEvidence), []);
  assert.equal(sourceEvidence.checked_at, '2026-09-12');
  assert.equal(sourceEvidence.checked_at_meaning, 'access-date-not-publication-date');
  assert.deepEqual(sourceEvidence.coverage, {
    required_claim_family_count: 10,
    confirmed_claim_families: sourceEvidence.required_claim_families,
    source_count: 18,
    confirmed_sources: 16,
    not_confirmed_sources: 2,
    review_input_complete: true,
  });
  assert.deepEqual(sourceEvidence.sources.map(source => source.id), [
    'SWEBOK-PDF-01',
    'SWEBOK-BASE-FAIL-01',
    'SWEBOK-TOPICS-FAIL-01',
    'SEI-ADD-01',
    'C4-SYSTEM-01',
    'C4-COMPONENT-01',
    'RFC9111-CACHE-01',
    'ASTRO-ODR-01',
    'CHROME-NETWORK-01',
    'FIREFOX-NETWORK-01',
    'RFC9110-HTTP-01',
    'OWASP-AJAX-01',
    'OWASP-AUTHORIZATION-01',
    'CHROME-SOURCES-01',
    'POSTGRES18-TRANSACTIONS-01',
    'POSTGRES18-ISOLATION-01',
    'POSTGRES18-CONSTRAINTS-01',
    'MDN-CURRICULUM-01',
  ]);
  for (const source of sourceEvidence.sources) {
    for (const excerpt of source.excerpts) {
      assert.ok(excerpt.word_count <= 25, `${source.id}/${excerpt.id} exceeds the quote ceiling`);
      assert.equal(excerpt.word_count, excerpt.text.trim().split(/\s+/).length);
    }
    assert.ok(source.excerpts.reduce((total, excerpt) => total + excerpt.word_count, 0) <= 25, `${source.id} exceeds the per-source quote ceiling`);
  }
  const sourceInput = request.direct_inputs.find(input => input.id === 'official-source-evidence');
  assert.equal(sourceInput.path, r01SourceEvidencePath);
  assert.equal(sourceInput.read_mode, 'full');
  assert.equal(request.official_source_evidence.state, 'input-fixed');
  assert.equal(request.official_source_evidence.confirmation, 'confirmed');
  assert.equal(request.official_source_evidence.review_ready, true);
  assert.equal(matrix.rows[0].review_state.status, 'done');
  assert.equal(matrix.rows[0].review_state.input_manifest_state, 'input-fixed');
  assert.equal(matrix.rows[0].review_state.source_evidence_state, 'confirmed');
  assert.equal(matrix.rows[0].review_state.review_ready, true);
  assert.equal(matrix.rows[0].review_state.review_state, 'pass');
  assert.equal(matrix.rows[0].review_state.result_state, 'pass');
});

test('R01 source evidence rejects a per-source verbatim total above 25 words even when each excerpt remains within the individual ceiling', () => {
  const { sourceEvidenceDocument, sourceEvidence } = validateFiles();
  const candidate = structuredClone(sourceEvidence);
  const source = candidate.sources.find(row => row.id === 'ASTRO-ODR-01');
  source.excerpts.push({
    id: 'ASTRO-ODR-01-E03',
    locator: 'On-demand rendering introduction, line 318',
    text: 'This additional short excerpt stays below the individual ceiling but pushes the source total above the allowed maximum.',
    word_count: 18,
  });
  const changedDocument = replaceJsonBlock(sourceEvidenceDocument, 'm5-r01-source-evidence:data', candidate);
  assert.ok(validateR01SourceEvidence(changedDocument, candidate).some(error => error.includes('source evidence per-source quote word count exceeds 25: ASTRO-ODR-01')));
});

test('R01 critical claim mappings require the exact lifecycle, Astro rendering, and HTTP cache evidence needed by the manuscript', () => {
  const { sourceEvidence, sourceEvidenceDocument } = validateFiles();
  const mappings = new Map(sourceEvidence.claim_mappings.map(mapping => [mapping.claim_family, mapping]));
  assert.deepEqual(mappings.get('software-engineering-scope').excerpt_ids, [
    'SWEBOK-PDF-01-E02',
    'SWEBOK-PDF-01-E03',
    'SWEBOK-PDF-01-E04',
    'SWEBOK-PDF-01-E05',
    'SWEBOK-PDF-01-E06',
    'SWEBOK-PDF-01-E07',
  ]);
  assert.deepEqual(mappings.get('build-time-versus-request-time-rendering').excerpt_ids, [
    'ASTRO-ODR-01-E01',
    'ASTRO-ODR-01-E02',
    'ASTRO-ODR-01-E03',
    'ASTRO-ODR-01-E04',
    'ASTRO-ODR-01-E05',
  ]);
  assert.deepEqual(mappings.get('http-cache-freshness').excerpt_ids, [
    'RFC9111-CACHE-01-E01',
    'RFC9111-CACHE-01-E02',
    'RFC9111-CACHE-01-E03',
    'RFC9111-CACHE-01-E04',
  ]);

  const mutations = [
    ['software-engineering-scope', 'SWEBOK-PDF-01-E07'],
    ['build-time-versus-request-time-rendering', 'ASTRO-ODR-01-E05'],
    ['http-cache-freshness', 'RFC9111-CACHE-01-E04'],
  ];
  for (const [family, excerptId] of mutations) {
    const candidate = structuredClone(sourceEvidence);
    candidate.claim_mappings.find(mapping => mapping.claim_family === family).excerpt_ids = candidate.claim_mappings.find(mapping => mapping.claim_family === family).excerpt_ids.filter(id => id !== excerptId);
    const changedDocument = replaceJsonBlock(sourceEvidenceDocument, 'm5-r01-source-evidence:data', candidate);
    assert.ok(validateR01SourceEvidence(changedDocument, candidate).some(error => error.includes(`source evidence required excerpt mapping mismatch: ${family}`)), family);
  }

  const failedSourcePromotion = structuredClone(sourceEvidence);
  const scopeMapping = failedSourcePromotion.claim_mappings.find(mapping => mapping.claim_family === 'software-engineering-scope');
  scopeMapping.source_ids = ['SWEBOK-BASE-FAIL-01'];
  const changedDocument = replaceJsonBlock(sourceEvidenceDocument, 'm5-r01-source-evidence:data', failedSourcePromotion);
  assert.ok(validateR01SourceEvidence(changedDocument, failedSourcePromotion).some(error => error.includes('source evidence claim mapping source not confirmed: software-engineering-scope/SWEBOK-BASE-FAIL-01')));
});

test('R01 source-evidence schema and semantics reject every hash-rematched source mutation', () => {
  const { sourceEvidence, sourceEvidenceDocument } = validateFiles();
  const mutations = [
    ['source removal', candidate => { candidate.sources.pop(); }],
    ['source addition', candidate => { candidate.sources.push(structuredClone(candidate.sources[0])); candidate.sources.at(-1).id = 'UNAPPROVED-SOURCE'; }],
    ['URL drift', candidate => { candidate.sources[0].official_url = 'https://example.invalid/swebok'; }],
    ['provider drift', candidate => { candidate.sources[3].provider = 'unverified mirror'; }],
    ['checked_at drift', candidate => { candidate.sources[4].checked_at = '2026-09-11'; }],
    ['old-date backdating', candidate => { candidate.checked_at = '2026-08-13'; }],
    ['access outcome drift', candidate => { candidate.sources[6].access_outcome = 'not-confirmed/http-403'; }],
    ['status or version drift', candidate => { candidate.sources[14].observed_version_or_status = 'PostgreSQL 17'; }],
    ['locator drift', candidate => { candidate.sources[5].locator = 'heading only'; }],
    ['claim scope drift', candidate => { candidate.sources[7].claim_scope = []; }],
    ['generalization boundary drift', candidate => { candidate.sources[8].generalization_boundary = 'all browsers'; }],
    ['excerpt drift', candidate => { candidate.sources[9].excerpts[0].text = 'All requests are always visible.'; candidate.sources[9].excerpts[0].word_count = 5; }],
    ['failed source promoted', candidate => { candidate.sources[1].access_outcome = 'confirmed'; }],
  ];
  for (const [label, mutate] of mutations) {
    const candidate = structuredClone(sourceEvidence);
    mutate(candidate);
    const changedDocument = sourceEvidenceDocument.replace(
      /<!-- m5-r01-source-evidence:data:start -->\n```json\n[\s\S]*?\n```\n<!-- m5-r01-source-evidence:data:end -->/,
      `<!-- m5-r01-source-evidence:data:start -->\n\`\`\`json\n${JSON.stringify(candidate, null, 2)}\n\`\`\`\n<!-- m5-r01-source-evidence:data:end -->`,
    );
    assert.ok(validateR01SourceEvidence(changedDocument, candidate).length > 0, label);
  }
});

test('R01 source bytes cannot be changed into accepted evidence by rehashing the request and matrix', () => {
  const { matrix, request, requestDocument, sourceEvidence, sourceEvidenceDocument } = validateFiles();
  const changedEvidence = structuredClone(sourceEvidence);
  changedEvidence.sources.find(source => source.id === 'C4-COMPONENT-01').excerpts[0].text = 'A component is any independently deployed service.';
  changedEvidence.sources.find(source => source.id === 'C4-COMPONENT-01').excerpts[0].word_count = 8;
  const changedSourceDocument = sourceEvidenceDocument.replace(
    /<!-- m5-r01-source-evidence:data:start -->\n```json\n[\s\S]*?\n```\n<!-- m5-r01-source-evidence:data:end -->/,
    `<!-- m5-r01-source-evidence:data:start -->\n\`\`\`json\n${JSON.stringify(changedEvidence, null, 2)}\n\`\`\`\n<!-- m5-r01-source-evidence:data:end -->`,
  );
  const changedRequest = structuredClone(request);
  changedRequest.direct_inputs.find(input => input.id === 'official-source-evidence').sha256 = sha256(Buffer.from(changedSourceDocument, 'utf8'));
  const changedRequestDocument = requestDocument.replace(
    /<!-- m5-r01-review-request:data:start -->\n```json\n[\s\S]*?\n```\n<!-- m5-r01-review-request:data:end -->/,
    `<!-- m5-r01-review-request:data:start -->\n\`\`\`json\n${JSON.stringify(changedRequest, null, 2)}\n\`\`\`\n<!-- m5-r01-review-request:data:end -->`,
  );
  const changedMatrix = structuredClone(matrix);
  changedMatrix.rows[0].review_state.request_sha256 = sha256(Buffer.from(changedRequestDocument, 'utf8'));
  changedMatrix.rows[0].review_state.combined_sha256 = 'a'.repeat(64);
  const errors = validateR01Bundle(changedMatrix, changedRequestDocument, changedRequest, undefined, { sourceEvidenceDocument: changedSourceDocument, sourceEvidence: changedEvidence });
  assert.ok(errors.some(error => error.includes('source evidence')), errors.join('; '));
  assert.ok(!errors.some(error => error.includes('request SHA-256 mismatch')), errors.join('; '));
});

test('R01 closeout preserves the complete historical offline input bundle and reviewed hashes', () => {
  const { matrix } = validateFiles();
  const row = matrix.rows[0];
  const { request_sha256: requestSha256, combined_sha256: combinedSha256, ...fixedState } = row.review_state ?? {};
  assert.deepEqual(fixedState, {
    status: 'done',
    required_review_state: '통과',
    input_manifest_state: 'input-fixed',
    individual_sha256_state: 'fixed',
    source_evidence_state: 'confirmed',
    review_ready: true,
    baseline_commit: 'd164e974db1b1b88dd804009b458bcc0442c13f3',
    reviewed_input_commit: '7e6226b4e5f067e779767bf4ad944fd9e3c0ef5f',
    result_commit: 'b163d4f3f4d12d4d9afb9fc3775fe5623dde0bcc',
    combined_sha256_rule: 'sha256-framed-bytes-v1',
    reviewed_target_sha256: 'd9569195713fd0db9201af1d18c141ab4a9836eca3980bc4905b2b46374aea2e',
    current_target_sha256: 'f086dc056630893c03b2a8c1a98304063bf1053eef26b25da7b587ae038bbc3d',
    metadata_transition: 'metadata-only-draft-to-review',
    content_semantics_changed: false,
    result_sha256: 'e56086d11ee3fcd8d92070a70778105c92a8d7f69fa0b9feb278a2040c6abeca',
    adjudication_sha256: '1e9f83f1663a189a4db41b8b08d89a9946244d3b431095cbbc40228ae9f3f3db',
    planned_model: 'gpt-6-astra',
    planned_reasoning_effort: 'high',
    review_state: 'pass',
    last_preflight_or_attempt: '2026-09-12 R01 Codex review',
    last_attempt: '2026-09-12 R01 Codex review',
    actual_invocation: 'completed',
    observed_model: 'gpt-6-astra',
    observed_reasoning_effort: 'high',
    reviewer_independence_state: 'verified',
    result_state: 'pass',
    adjudication_state: 'complete',
    rereview_state: 'not-required-metadata-only',
    valid_independent_evidence: true,
    open_findings: { critical: 0, important: 0, minor: 2 },
    release_ready: false,
    block_reason: 'none-row-complete',
    resume_condition: 'R02 input freeze를 시작하고 R01 open Minor2는 R26 통합 입력으로 유지합니다.',
  });
  assert.match(requestSha256, /^[0-9a-f]{64}$/);
  assert.match(combinedSha256, /^[0-9a-f]{64}$/);
  const request = extractJsonBlock(readFileSync(new URL('../docs/project/reviews/public-beta-1/r01-software-system-request.md', import.meta.url), 'utf8'), 'm5-r01-review-request:data');
  assert.equal(request.review_id, 'R01');
  assert.equal(request.baseline_commit, row.review_state.baseline_commit);
  assert.deepEqual(request.planned_profile, { model: 'gpt-6-astra', reasoning_effort: 'high' });
  assert.equal(request.direct_inputs.length, 17);
  assert.equal(request.context_excerpts.length, 17);
  assert.deepEqual(request.direct_inputs.map(input => input.path), [
    'docs/project/reviews/public-beta-1/codex-review-contract.md',
    'src/content/docs/01-mental-models/software-is-a-system.md',
    'src/assets/diagrams/analytics-dashboard-architecture.svg',
    'src/assets/diagrams/source/analytics-dashboard-architecture.mmd',
    'research/public-beta-review-source-excerpts/r01-software-system.md',
    'output/playwright/task20-analytics-evidence/final-crops/pb-021-desktop-light-task20-pbv02-20260827155719257-59c60b91893d68-diagram.png',
    'output/playwright/task20-analytics-evidence/final-crops/pb-021-desktop-dark-task20-pbv02-20260827155431806-ca3bf04e72a678-diagram.png',
    'output/playwright/task20-analytics-evidence/final-crops/pb-021-tablet-light-task20-pbv02-20260827155431806-ca3bf04e72a678-diagram.png',
    'output/playwright/task20-analytics-evidence/final-crops/pb-021-tablet-dark-task20-pbv02-20260827155431806-ca3bf04e72a678-diagram.png',
    'output/playwright/task20-analytics-evidence/final-crops/pb-021-390x844-light-bounded-1787846823654-diagram-calibrated.png',
    'output/playwright/task20-analytics-evidence/final-crops/pb-021-390x844-dark-bounded-1787846823654-diagram-calibrated.png',
    'output/playwright/task20-analytics-evidence/final-crops/pb-053-1440x1000-light-bounded-1787846823654-diagram-calibrated.png',
    'output/playwright/task20-analytics-evidence/final-crops/pb-053-1440x1000-dark-bounded-1787846823654-diagram-calibrated.png',
    'output/playwright/task20-analytics-evidence/final-crops/pb-053-1024x768-light-bounded-1787846823654-diagram-calibrated.png',
    'output/playwright/task20-analytics-evidence/final-crops/pb-053-1024x768-dark-bounded-1787846823654-diagram-calibrated.png',
    'output/playwright/task20-analytics-evidence/final-crops/pb-053-390x844-light-bounded-1787846823654-diagram-calibrated.png',
    'output/playwright/task20-analytics-evidence/final-crops/pb-053-390x844-dark-bounded-1787846823654-diagram-calibrated.png',
  ]);
  assert.deepEqual(request.context_excerpts.map(input => input.id), [
    'completion-spec',
    'master-plan',
    'repository-rules',
    'content-map-pb-021',
    'content-audit-pb-021',
    'source-gap-pbsg-021',
    'source-map-pb-021',
    'visual-audit-pbv-02',
    'site-qa-r01',
    'browser-manifest-r01',
    'pbv02-checkpoint-report',
    'pbv02-historical-input-manifest',
    'development-glossary-system',
    'adjacent-client-server',
    'shared-diagram-case-study',
    'meeting-case-brief',
    'stock-case-brief',
  ]);
});

test('R01 fixes both consumers actual render bytes and tracked official-source evidence before review', () => {
  const { matrix, request } = validateFiles();
  const renders = request.direct_inputs.slice(5);
  assert.equal(renders.length, 12);
  assert.deepEqual(renders.map(input => [input.id, input.read_mode, input.evidence_scope?.consumer_id, input.evidence_scope?.viewport, input.evidence_scope?.theme]), [
    ['render-pb021-1440-light', 'binary-full', 'PB-021', '1440x1000', 'light'],
    ['render-pb021-1440-dark', 'binary-full', 'PB-021', '1440x1000', 'dark'],
    ['render-pb021-1024-light', 'binary-full', 'PB-021', '1024x768', 'light'],
    ['render-pb021-1024-dark', 'binary-full', 'PB-021', '1024x768', 'dark'],
    ['render-pb021-390-light', 'binary-full', 'PB-021', '390x844', 'light'],
    ['render-pb021-390-dark', 'binary-full', 'PB-021', '390x844', 'dark'],
    ['render-pb053-1440-light', 'binary-full', 'PB-053', '1440x1000', 'light'],
    ['render-pb053-1440-dark', 'binary-full', 'PB-053', '1440x1000', 'dark'],
    ['render-pb053-1024-light', 'binary-full', 'PB-053', '1024x768', 'light'],
    ['render-pb053-1024-dark', 'binary-full', 'PB-053', '1024x768', 'dark'],
    ['render-pb053-390-light', 'binary-full', 'PB-053', '390x844', 'light'],
    ['render-pb053-390-dark', 'binary-full', 'PB-053', '390x844', 'dark'],
  ]);
  assert.deepEqual(request.official_source_evidence, {
    state: 'input-fixed',
    confirmation: 'confirmed',
    review_ready: true,
    artifact_path: 'research/public-beta-review-source-excerpts/r01-software-system.md',
    checked_at: '2026-09-12',
    checked_at_meaning: 'access-date-not-publication-date',
    claim_mapping_state: 'exact',
    claim_mapping_family_count: 10,
    confirmed_claim_families: [
      'software-engineering-scope',
      'architecture-responsibility-interface',
      'software-system-and-component-boundaries',
      'http-cache-freshness',
      'build-time-versus-request-time-rendering',
      'browser-network-evidence',
      'client-server-authority-and-authorization',
      'loaded-resource-evidence',
      'postgresql-18-state-integrity-and-concurrency',
      'frontend-education-scope',
    ],
    not_confirmed_boundaries: ['SWEBOK-BASE-FAIL-01', 'SWEBOK-TOPICS-FAIL-01'],
    freshness_boundary: '2026-09-12 접근 결과만 고정하며 source-map의 과거 확인일을 갱신하거나 실패한 IEEE HTML 본문을 확인된 것으로 재분류하지 않습니다.',
  });
  assert.equal(matrix.rows[0].review_state.status, 'done');
  assert.equal(matrix.rows[0].review_state.input_manifest_state, 'input-fixed');
  assert.equal(matrix.rows[0].review_state.source_evidence_state, 'confirmed');
  assert.equal(matrix.rows[0].review_state.review_ready, true);
});

test('row defaults and every review row reject unapproved state or alias keys', () => {
  const { matrix } = validateFiles();
  const mutations = [
    ['row defaults alias', candidate => { candidate.row_defaults.review_state = 'not-run'; }, 'row_defaults keys mismatch'],
    ['R02 default state override', candidate => { candidate.rows[1].last_preflight_or_attempt = 'not-run'; }, 'R02 row keys mismatch'],
    ['R02 model alias', candidate => { candidate.rows[1].observed_model = 'not-confirmed'; }, 'R02 row keys mismatch'],
    ['R26 default state override', candidate => { candidate.rows[25].last_preflight_or_attempt = 'not-run'; }, 'R26 row keys mismatch'],
    ['R26 model alias', candidate => { candidate.rows[25].observed_model = 'not-confirmed'; }, 'R26 row keys mismatch'],
    ['R26 integration alias', candidate => { candidate.rows[25].integration_requires.review_state = 'not-run'; }, 'R26 integration keys mismatch'],
  ];
  for (const [label, mutate, expected] of mutations) {
    const candidate = structuredClone(matrix);
    mutate(candidate);
    assert.ok(validateMatrix(candidate).some(error => error.includes(expected)), label);
  }
});

test('R01 semantic contract rejects request-hash-matched mutations without local evidence bytes', () => {
  const mutations = [
    ['prohibited', request => { request.reviewer_conditions.prohibited = []; }, 'request prohibited operations mismatch'],
    ['blocked_when', request => { request.contract_application.blocked_when = []; }, 'request blocked conditions mismatch'],
    ['framing', request => { request.combined_sha256_rule.framing = 'paths and bytes concatenated without length framing'; }, 'request combined SHA-256 framing mismatch'],
    ['source-map title-only', request => {
      const excerpt = request.context_excerpts.find(item => item.id === 'source-map-pb-021');
      excerpt.segments = [{ label: '정신 모델 출처 제목만', start_line: 200, end_line: 200, text: readFileSync(new URL('../research/source-map.md', import.meta.url), 'utf8').split('\n')[199] }];
    }, 'context excerpt semantic mismatch: source-map-pb-021'],
    ['source-map role scope', request => {
      request.context_excerpts.find(item => item.id === 'source-map-pb-021').role = '출처 제목 목록';
    }, 'context excerpt semantic mismatch: source-map-pb-021'],
  ];
  for (const [label, mutate, expected] of mutations) {
    const candidate = mutateAndRehashRequest(mutate);
    const errors = validateR01Bundle(candidate.matrix, candidate.requestDocument, candidate.request);
    assert.ok(errors.some(error => error.includes(expected)), `${label}: ${errors.join('; ')}`);
    assert.ok(!errors.some(error => error.includes('request SHA-256 mismatch')), `${label}: request hash must be rematched before semantic validation`);
    assert.ok(!errors.some(error => error.includes('combined SHA-256 mismatch')), `${label}: stored local-evidence commitment must remain valid`);
  }
});

test('R01 frozen available-input bundle rejects request, direct-input, excerpt, baseline, profile, and combined-hash drift', () => {
  const { matrix, request, requestDocument } = validateFiles();
  assert.deepEqual(validateR01Bundle(matrix, requestDocument, request), []);

  const wrongRequestHash = structuredClone(matrix);
  wrongRequestHash.rows[0].review_state.request_sha256 = '0'.repeat(64);
  assert.ok(validateR01Bundle(wrongRequestHash, requestDocument, request).some(error => error.includes('request SHA-256 mismatch')));

  const wrongCombinedHash = structuredClone(matrix);
  wrongCombinedHash.rows[0].review_state.combined_sha256 = '0'.repeat(64);
  assert.ok(validateR01Bundle(wrongCombinedHash, requestDocument, request).some(error => error.includes('combined SHA-256 mismatch')));

  const wrongDirectPath = structuredClone(request);
  wrongDirectPath.direct_inputs[0].path = 'docs/project/reviews/public-beta-1/opus5-review-contract.md';
  assert.ok(validateR01Bundle(matrix, requestDocument, wrongDirectPath).some(error => error.includes('direct input contract mismatch')));

  const wrongDirectHash = structuredClone(request);
  wrongDirectHash.direct_inputs[1].sha256 = '0'.repeat(64);
  assert.ok(validateR01Bundle(matrix, requestDocument, wrongDirectHash).some(error => error.includes('direct input hash mismatch')));

  const wrongExcerptPath = structuredClone(request);
  wrongExcerptPath.context_excerpts[0].path = 'PROJECT_CONTEXT.md';
  assert.ok(validateR01Bundle(matrix, requestDocument, wrongExcerptPath).some(error => error.includes('context excerpt contract mismatch')));

  const wrongContextHash = structuredClone(request);
  wrongContextHash.context_excerpts[1].sha256 = '0'.repeat(64);
  assert.ok(validateR01Bundle(matrix, requestDocument, wrongContextHash).some(error => error.includes('context source hash mismatch')));

  const wrongExcerpt = structuredClone(request);
  wrongExcerpt.context_excerpts[2].segments[0].text += '\n변조';
  assert.ok(validateR01Bundle(matrix, requestDocument, wrongExcerpt).some(error => error.includes('context excerpt content mismatch')));

  const wrongBaseline = structuredClone(request);
  wrongBaseline.baseline_commit = '0'.repeat(40);
  assert.ok(validateR01Bundle(matrix, requestDocument, wrongBaseline).some(error => error.includes('request baseline commit mismatch')));

  const wrongProfile = structuredClone(request);
  wrongProfile.planned_profile.reasoning_effort = 'medium';
  assert.ok(validateR01Bundle(matrix, requestDocument, wrongProfile).some(error => error.includes('request planned profile mismatch')));
});

test('R02-R25 completed evidence and R26 defaults cannot promote release state', () => {
  const { matrix } = validateFiles();
  assert.ok(matrix.rows[0].review_state);
  assert.equal(matrix.rows[1].review_state.input_manifest_state, 'input-fixed');
  assert.equal(matrix.rows[1].review_state.actual_invocation, 'completed');
  assert.ok(matrix.rows[25].review_state.status === 'done' && matrix.rows[25].review_state.release_ready === false);

  const anotherFixedRow = structuredClone(matrix);
  anotherFixedRow.rows[1].review_state = structuredClone(anotherFixedRow.rows[0].review_state);
  assert.ok(validateMatrix(anotherFixedRow).some(error => error.includes('R02 review_state mismatch')));

  const prematureResult = structuredClone(matrix);
  Object.assign(prematureResult.rows[0].review_state, {
    status: 'pending',
    review_state: 'not-run',
    result_state: 'not-run',
    adjudication_state: 'not-run',
    valid_independent_evidence: false,
    open_findings: { critical: 0, important: 1, minor: 2 },
    release_ready: true,
  });
  const errors = validateMatrix(prematureResult);
  for (const field of ['status', 'review_state', 'result_state', 'adjudication_state', 'valid_independent_evidence', 'open_findings', 'release_ready']) {
    assert.ok(errors.some(error => error.includes(`R01 review_state ${field}`)), `${field} promotion must be rejected`);
  }
});

test('R26 expands every R01-R25 assignment to the same 59 unique public documents', () => {
  const { matrix } = validateFiles();
  assert.deepEqual(matrix.rows.at(-1).integration_requires.full_public_row_ids, Array.from({ length: 25 }, (_, index) => `R${String(index + 1).padStart(2, '0')}`));
  const omittedSupportRow = structuredClone(matrix);
  omittedSupportRow.rows.at(-1).integration_requires.full_public_row_ids = omittedSupportRow.rows.at(-1).integration_requires.full_public_row_ids.filter(id => id !== 'R14');
  assert.ok(validateMatrix(omittedSupportRow).some(error => error.includes('R26 public integration row references')));
});

test('reviewer independence permits no R01-R25 override and requires exact R26 separation', () => {
  const { matrix } = validateFiles();
  const sameReviewer = structuredClone(matrix);
  sameReviewer.rows[0].reviewer_independence = 'controller와 동일 reviewer';
  assert.ok(validateMatrix(sameReviewer).some(error => error.includes('R01 reviewer independence override')));
  const blankReviewer = structuredClone(matrix);
  blankReviewer.rows[0].reviewer_independence = '';
  assert.ok(validateMatrix(blankReviewer).some(error => error.includes('R01 reviewer independence override')));
  const weakIntegration = structuredClone(matrix);
  weakIntegration.rows.at(-1).reviewer_independence = 'fresh Codex reviewer';
  assert.ok(validateMatrix(weakIntegration).some(error => error.includes('R26 reviewer independence')));
});

test('Codex contract retains the full rubric, input, evidence, and controller persistence contract', () => {
  const contract = readFileSync(new URL('../docs/project/reviews/public-beta-1/codex-review-contract.md', import.meta.url), 'utf8');
  for (const requiredSection of ['권위 조항 대응표', '9항목', '18점 중15점 이상', '치명 항목0', '검토 범위와 실제 읽은 입력', '입력 완전성', '증거 유효성']) assert.match(contract, new RegExp(requiredSection));
  assert.match(contract, /reviewer는 결과를 응답으로만 반환/);
  assert.match(contract, /controller가.*정본.*codex-review/);
});

test('Codex contract preserves the provider-neutral authority, input, role exception, and six-section rigor', () => {
  const contract = readFileSync(new URL('../docs/project/reviews/public-beta-1/codex-review-contract.md', import.meta.url), 'utf8');
  for (const requirement of ['CASE/DURABLE/AUDIENCE/ANALOGY/EVIDENCE/SOURCE/TERM/VISUAL', '폐기 사례', 'Software Design Description', 'Spec-Driven Development', '방법론 성숙도', '출처 발췌', '누락 범위', '예외 추적', '공통 자산의 모든 소비 문맥', '인덱스/참고편', '정책/시각 작업 단위', '항목별 점수/근거·합계·치명 항목·적용외 이유', '출력 상한/중간 종료']) assert.match(contract, new RegExp(requirement));
});

test('current M2 and M3 stage definitions require the Codex M5 gate rather than future Opus review', () => {
  const plan = readFileSync(new URL('../docs/superpowers/plans/2026-08-12-public-beta-master-plan.md', import.meta.url), 'utf8');
  assert.doesNotMatch(plan, /M2에서는 `draft`를 유지하고 독립 Opus 검토는 모든 원고 완성 뒤 M5에서 수행합니다\./);
  assert.doesNotMatch(plan, /M3은 “글이 길다”가 아니라 역할별 학습 목표를 처음부터 끝까지 수행할 수 있는 원고가 된 상태입니다\. 독립 Opus 검토와 `ready` 승격은 M5에서 수행합니다\./);
  assert.match(plan, /M2에서는 `draft`를 유지하고 Codex 두 겹 독립 검토와 `ready` 승격은 M5에서 수행합니다\./);
  assert.match(plan, /M3은 “글이 길다”가 아니라 역할별 학습 목표를 처음부터 끝까지 수행할 수 있는 원고가 된 상태입니다\. Codex 두 겹 독립 검토와 `ready` 승격은 M5에서 수행합니다\./);
});

test('two-layer Codex contract replaces the future Claude execution gate without altering its historical log', () => {
  const { matrix, attemptLog } = validateFiles();
  assert.deepEqual(matrix.contract, {
    path: 'docs/project/reviews/public-beta-1/codex-review-contract.md',
    version: '2026-09-05-two-layer-codex',
  });
  assert.equal(matrix.row_defaults.required_review_state, '대기');
  assert.equal(matrix.row_defaults.block_reason, 'R26 입력 고정 및 Codex 검토 미실행');
  assert.equal(matrix.historical_claude.status, 'waived_by_owner');
  assert.equal(matrix.historical_claude.model_call_count, 0);
  assert.match(matrix.rows[0].result_path, /-codex-review\.md$/);
  assert.match(matrix.rows[0].rereview_path, /-codex-rereview\.md$/);
  assert.equal(matrix.rows.at(-1).reviewer_independence, 'R01~R25 reviewer들과 분리된 fresh Codex reviewer');
  assert.equal(attemptLog.records.reduce((total, record) => total + record.model_call_count, 0), 0);
});

test('Task 22 Step 1 matrix allocates all 59 public documents once without starting M5', () => {
  const result = validateFiles();
  assert.deepEqual(result.errors, []);
  assert.equal(result.matrix.rows.length, 26);
  assert.equal(result.matrix.coverage.r01_r25_unique, 59);
  assert.equal(result.attemptLog.records[0].model_call_count, 0);
});

test('duplicate or missing R01-R25 coverage is rejected', () => {
  const { matrix } = validateFiles();
  const duplicate = structuredClone(matrix);
  duplicate.rows.find(row => row.id === 'R02').inputs[0] = duplicate.rows.find(row => row.id === 'R01').inputs[0];
  assert.ok(validateMatrix(duplicate).some(error => error.includes('duplicate public input')));
  const missing = structuredClone(matrix);
  missing.rows.find(row => row.id === 'R25').inputs.pop();
  assert.ok(validateMatrix(missing).some(error => error.includes('unassigned public input')));
});

test('premature review or release promotion is rejected', () => {
  const { matrix } = validateFiles();
  const promoted = structuredClone(matrix);
  promoted.row_defaults.status = 'done';
  promoted.row_defaults.release_ready = true;
  promoted.row_defaults.valid_independent_evidence = true;
  promoted.row_defaults.open_findings = { critical: 0, important: 0, minor: 0 };
  promoted.rows[0].status = 'done';
  const errors = validateMatrix(promoted);
  assert.ok(errors.some(error => error.includes('row default status')));
  assert.ok(errors.some(error => error.includes('row default release_ready')));
  assert.ok(errors.some(error => error.includes('row default valid_independent_evidence')));
  assert.ok(errors.some(error => error.includes('row default open_findings')));
  assert.ok(errors.some(error => error.includes('row state override')));
});

test('planned evidence paths and blocked preflight record cannot drift', () => {
  const { matrix, attemptLog } = validateFiles();
  const badPath = structuredClone(matrix);
  badPath.rows[0].result_path = 'docs/project/reviews/public-beta-1/wrong.md';
  assert.ok(validateMatrix(badPath).some(error => error.includes('result path')));
  const fakeCall = structuredClone(attemptLog);
  fakeCall.records[0].model_call_count = 1;
  assert.ok(validateAttemptLog(fakeCall).some(error => error.includes('model_call_count')));
});

test('Claude auth and subscription conditions cannot return as an M5 review prerequisite', () => {
  const { matrix } = validateFiles();
  const stalePrerequisite = structuredClone(matrix);
  stalePrerequisite.row_defaults.block_reason = 'auth';
  assert.ok(validateMatrix(stalePrerequisite).some(error => error.includes('row default block_reason')));

  const currentDocument = readFileSync(new URL('../docs/project/reviews/public-beta-1/review-matrix.md', import.meta.url), 'utf8');
  const stalePurpose = currentDocument.replace('R01 완료와 R02~R26 입력 고정·Codex 두 겹 검토', '현재 직접 차단 원인은 `auth`');
  const staleResume = currentDocument.replaceAll('R01~R25는 fresh Codex reviewer, R26은 분리된 fresh Codex reviewer', '동일 구독 계정 로그인을 직접 복구');
  const missingCurrentBoundary = currentDocument.replace('R01 완료와 R02~R26 입력 고정·Codex 두 겹 검토', '현재 남은 조건은');
  assert.deepEqual(
    [stalePurpose, staleResume, missingCurrentBoundary].map(document => validateMatrixDocument(document).length > 0),
    [true, true, true],
  );
});

test('each planned row and the R26 additional inputs are immutable', () => {
  const { matrix } = validateFiles();
  const swapped = structuredClone(matrix);
  [swapped.rows[0].inputs, swapped.rows[1].inputs] = [swapped.rows[1].inputs, swapped.rows[0].inputs];
  assert.ok(validateMatrix(swapped).some(error => error.includes('row contract')));
  const renamed = structuredClone(matrix);
  renamed.rows[0].slug = 'renamed';
  for (const key of ['request_path', 'result_path', 'adjudication_path', 'rereview_path']) renamed.rows[0][key] = renamed.rows[0][key].replace('software-system', 'renamed');
  assert.ok(validateMatrix(renamed).some(error => error.includes('row contract')));
  const incompleteIntegration = structuredClone(matrix);
  incompleteIntegration.rows.at(-1).integration_requires.additional_inputs.pop();
  assert.ok(validateMatrix(incompleteIntegration).some(error => error.includes('R26 additional inputs')));
});

test('preflight-only record cannot claim fixed or unchanged review inputs', () => {
  const { attemptLog } = validateFiles();
  const promoted = structuredClone(attemptLog);
  Object.assign(promoted.records[0], { scope: 'R01 execution', input_manifest: 'premature.json', combined_sha256_before: 'a'.repeat(64), combined_sha256_after: 'a'.repeat(64), input_unchanged: true });
  const errors = validateAttemptLog(promoted);
  for (const field of ['scope', 'input_manifest', 'combined_sha256_before', 'combined_sha256_after', 'input_unchanged']) assert.ok(errors.some(error => error.includes(field)), `${field} promotion must be rejected`);
});

test('historical Claude preflight remains immutable without becoming the current M5 blocker', () => {
  const { matrix, attemptLog, errors } = validateFiles();
  assert.deepEqual(errors, []);
  assert.equal(attemptLog.records.length, 2);
  assert.deepEqual(attemptLog.records.map(record => record.attempt_id), ['preflight-2026-08-28', 'preflight-2026-09-05']);
  assert.equal(attemptLog.records[0].block_reason, 'subscription_unverified');
  assert.equal(attemptLog.records[1].review_id, 'M5-preflight');
  assert.equal(attemptLog.records[1].attempt_kind, 'preflight-only');
  assert.equal(attemptLog.records[1].actual_invocation, 'not-run');
  assert.equal(attemptLog.records[1].model_call_count, 0);
  assert.equal(attemptLog.records[1].block_reason, 'auth');
  assert.equal(attemptLog.records[1].input_manifest, 'not-fixed');
  assert.equal(attemptLog.records[1].observed_model, 'not-confirmed');
  assert.equal(attemptLog.records[1].result_path, '없음');
  assert.equal(attemptLog.records[1].valid_independent_evidence, false);
  assert.equal(matrix.row_defaults.last_preflight_or_attempt, 'not-run');
  assert.equal(matrix.row_defaults.block_reason, 'R26 입력 고정 및 Codex 검토 미실행');
  assert.equal(matrix.historical_claude.status, 'waived_by_owner');
  assert.equal(attemptLog.records.reduce((total, record) => total + record.model_call_count, 0), 0);

  const reordered = structuredClone(attemptLog);
  reordered.records.reverse();
  assert.ok(validateAttemptLog(reordered).some(error => error.includes('attempt record order')));
  const alteredHistory = structuredClone(attemptLog);
  alteredHistory.records[0].requested_effort = 'medium';
  assert.ok(validateAttemptLog(alteredHistory).some(error => error.includes('attempt record 0 requested_effort')));
  const wrongBlocker = structuredClone(attemptLog);
  wrongBlocker.records[1].block_reason = 'subscription_unverified';
  assert.ok(validateAttemptLog(wrongBlocker).some(error => error.includes('attempt record 1 block_reason')));
});

test('CLI resolves the repository from the script path instead of the caller cwd', () => {
  const result = spawnSync(process.execPath, ['../scripts/validate-m5-review-matrix.mjs'], { cwd: 'tests', encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /"rows":26/);
  assert.match(result.stdout, /"inputFixedRows":\["R01","R02","R03","R04","R05","R06","R07","R08","R09","R10","R11","R12","R13","R14","R15","R16","R17","R18","R19","R20","R21","R22","R23","R24","R25","R26"\]/);
  assert.match(result.stdout, /"inputIncompleteRows":\[\]/);
  assert.match(result.stdout, /"localEvidenceValidation":"not-requested"/);
  assert.match(result.stdout, /"historicalClaudeModelCallCount":0/);
  assert.match(result.stdout, /"completedCodexRows":\["R01","R02","R03","R04","R05","R06","R07","R08","R09","R10","R11","R12","R13","R14","R15","R16","R17","R18","R19","R20","R21","R22","R23","R24","R25","R26"\]/);
  assert.doesNotMatch(result.stdout, /"modelCallCount":/);
});
