import {r26State, validateR26Closeout, preReadyBytes} from './r26-closeout.mjs';
import {r25Closeout,validateR25Closeout} from './r25-closeout.mjs';
import {r24Closeout,validateR24Closeout} from './r24-closeout.mjs';
import {r23Closeout,validateR23Closeout} from './r23-closeout.mjs';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { r02HistoricalBytes } from './r02-minor-transition.mjs';
import { r02Closeout, r02PreCloseoutBytes, validateR02Closeout } from './r02-closeout.mjs';
import { r03Closeout, validateR03Closeout } from './r03-closeout.mjs';
import { r04Closeout, validateR04Closeout } from './r04-closeout.mjs';

import { r05Closeout, validateR05Closeout } from './r05-closeout.mjs';
import { r06Closeout, validateR06Closeout } from './r06-closeout.mjs';
import { r07Closeout, validateR07Closeout } from './r07-closeout.mjs';
import { r08Closeout, validateR08Closeout } from './r08-closeout.mjs';
import { r09Closeout, validateR09Closeout } from './r09-closeout.mjs';
import { r10Closeout, validateR10Closeout } from './r10-closeout.mjs';
import { r11Closeout, validateR11Closeout } from './r11-closeout.mjs';
import { r12Closeout, validateR12Closeout } from './r12-closeout.mjs';
import { r13Closeout, validateR13Closeout } from './r13-closeout.mjs';
import { r14Closeout, validateR14Closeout } from './r14-closeout.mjs';
import { r15Closeout, validateR15Closeout } from './r15-closeout.mjs';
import { r16Closeout, validateR16Closeout } from './r16-closeout.mjs';
import { r17Closeout, validateR17Closeout } from './r17-closeout.mjs';
import { r18Closeout, validateR18Closeout } from './r18-closeout.mjs';
import { r19Closeout, validateR19Closeout } from './r19-closeout.mjs';
import { r20Closeout, validateR20Closeout } from './r20-closeout.mjs';
import { r21Closeout, validateR21Closeout } from './r21-closeout.mjs';
import { r22Closeout, validateR22Closeout } from './r22-closeout.mjs';
const matrixPath = 'docs/project/reviews/public-beta-1/review-matrix.md';
const r02CurrentNote = "2026-10-15 현재 상태: R02는 아래 실행 입력 보충과 JSON의 `review_state`에 따라 `pending/input-fixed`이며 실제 검토는 `not-run`입니다. 아래 9월12일 본문과 10월2일 후보절은 당시 상태를 보존한 역사 기록이며, R03~R26은 계속 `pending/not-fixed`입니다.";
const expectedR02ReviewState = {"status":"pending","required_review_state":"대기","release_ready":false,"input_manifest_state":"input-fixed","individual_sha256_state":"fixed","execution_request_path":"docs/project/reviews/public-beta-1/r02-client-server-execution-request.md","execution_manifest_path":"docs/project/reviews/public-beta-1/r02-client-server-execution-manifest.json","source_checked_at":"2026-10-15","combined_sha256":"acf16f2062b5ac6101f3f7a6556d5ce17ca19b61e7f0deaa56f6a62df44faa8c","actual_invocation":"not-run","observed_model_context_effort":"not-confirmed","result_state":"not-run","adjudication_state":"not-run","valid_independent_evidence":false,"open_findings":{"critical":"not-assessed","important":"not-assessed","minor":"not-assessed"}};
const attemptLogPath = 'docs/project/reviews/public-beta-1/claude-attempt-log.md';
const r01RequestPath = 'docs/project/reviews/public-beta-1/r01-software-system-request.md';
const r01SourceEvidencePath = 'research/public-beta-review-source-excerpts/r01-software-system.md';
const r01TargetPath = 'src/content/docs/01-mental-models/software-is-a-system.md';
const r01ResultPath = 'docs/project/reviews/public-beta-1/r01-software-system-codex-review.md';
const r01AdjudicationPath = 'docs/project/reviews/public-beta-1/r01-software-system-adjudication.md';
const reviewRoot = 'docs/project/reviews/public-beta-1';
const contentRoot = 'src/content/docs';
const exactIds = Array.from({ length: 26 }, (_, index) => `R${String(index + 1).padStart(2, '0')}`);
const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const content = path => `${contentRoot}/${path}`;
const plannedRow = (id, slug, method, inputs = undefined) => ({ id, slug, method, ...(inputs ? { inputs: inputs.map(content) } : {}) });
const expectedRows = [
  plannedRow('R01', 'software-system', '개별 심층', ['01-mental-models/software-is-a-system.md']),
  plannedRow('R02', 'client-server', '개별 심층', ['03-full-stack/client-server-full-stack.md']),
  plannedRow('R03', 'http', '개별 심층', ['03-full-stack/http-request-response.md']),
  plannedRow('R04', 'api-data-auth', '개별 심층', ['04-backend-data/api-database-auth.md']),
  plannedRow('R05', 'browser-dom', '개별 심층', ['05-frontend/browser-dom-rendering.md']),
  plannedRow('R06', 'prd-sdd-tdd', '개별 심층', ['06-requirements-design/prd-sdd-tdd.md']),
  plannedRow('R07', 'testing', '개별 심층', ['08-quality/testing-strategy.md']),
  plannedRow('R08', 'git-github', '개별 심층', ['09-git-github/git-and-github.md']),
  plannedRow('R09', 'build-deploy', '개별 심층', ['10-deployment-operations/build-deploy-domain-dns.md']),
  plannedRow('R10', 'operations', '개별 심층', ['10-deployment-operations/logs-monitoring-backup.md']),
  plannedRow('R11', 'coding-agents', '개별 심층', ['11-ai-native/working-with-coding-agents.md']),
  plannedRow('R12', 'meeting-capstone', '개별 심층', ['12-case-studies/first-full-stack-project.md']),
  plannedRow('R13', 'stock-capstone', '개별 심층', ['12-case-studies/analytics-dashboard-case-study.md']),
  plannedRow('R14', 'mental-support', '소묶음', ['01-mental-models/abstraction-and-tradeoffs.md', '01-mental-models/developer-thinking.md']),
  plannedRow('R15', 'work-environment', '소묶음', ['02-work-environment/dependencies-package-managers-environments.md', '02-work-environment/files-folders-paths.md', '02-work-environment/terminal-processes-ports.md']),
  plannedRow('R16', 'data-support', '소묶음', ['03-full-stack/frontend-backend-boundary.md', '04-backend-data/data-model-schema-migration.md', '04-backend-data/state-cache-queue.md']),
  plannedRow('R17', 'frontend-support', '소묶음', ['05-frontend/accessibility-responsive-design.md', '05-frontend/ui-state-and-ux.md']),
  plannedRow('R18', 'design-support', '소묶음', ['06-requirements-design/adr-and-tradeoffs.md', '06-requirements-design/architecture-and-frameworks.md']),
  plannedRow('R19', 'workflow-support', '소묶음', ['07-workflow-methods/code-review-ci-cd.md', '07-workflow-methods/incremental-delivery.md', '07-workflow-methods/software-development-lifecycle.md']),
  plannedRow('R20', 'quality-support', '소묶음', ['08-quality/debugging-observability.md', '08-quality/performance-security.md']),
  plannedRow('R21', 'git-support', '소묶음', ['09-git-github/branch-commit-pull-request.md', '09-git-github/undo-merge-conflict-release.md']),
  plannedRow('R22', 'deploy-config', '개별 안전', ['10-deployment-operations/environment-variables-config.md']),
  plannedRow('R23', 'ai-support', '소묶음', ['11-ai-native/agent-review-and-verification.md', '11-ai-native/context-spec-harness-loop.md', '11-ai-native/permissions-sandbox-worktrees.md']),
  plannedRow('R24', 'navigation', '내비게이션 묶음', ['index.md', 'start-here/index.md', 'start-here/how-to-use-this-guide.md', 'start-here/learning-paths.md', 'start-here/why-this-guide.md', '01-mental-models/index.md', '02-work-environment/index.md', '03-full-stack/index.md', '04-backend-data/index.md', '05-frontend/index.md', '06-requirements-design/index.md', '07-workflow-methods/index.md', '08-quality/index.md', '09-git-github/index.md', '10-deployment-operations/index.md', '11-ai-native/index.md', '12-case-studies/index.md', 'reference/index.md']),
  plannedRow('R25', 'reference', '참고편 묶음', ['reference/development-glossary.md', 'reference/agent-output-glossary.md', 'reference/methodology-map.md', 'reference/checklists.md', 'reference/current-tool-mapping.md']),
  plannedRow('R26', 'integration', '통합'),
];
const expectedAdditionalInputs = ['docs/project/public-beta-content-audit.md', 'research/public-beta-source-gap-register.md', 'docs/project/public-beta-visual-audit.md', 'CONTENT_MAP.md'];
const r01BaselineCommit = 'd164e974db1b1b88dd804009b458bcc0442c13f3';
const directInput = (id, role, path, readMode, evidenceScope = undefined) => ({ id, role, path, read_mode: readMode, ...(evidenceScope ? { evidence_scope: evidenceScope } : {}) });
const renderScope = (consumerId, route, viewport, theme) => ({ consumer_id: consumerId, route, viewport, theme, kind: 'actual-diagram-crop' });
const expectedR01DirectInputs = [
  directInput('review-contract', '검토 계약 전체', 'docs/project/reviews/public-beta-1/codex-review-contract.md', 'full'),
  directInput('target-manuscript', '대상 원고 전체', 'src/content/docs/01-mental-models/software-is-a-system.md', 'full'),
  directInput('consumed-svg', '두 공개 문맥이 소비하는 게시 SVG 전체', 'src/assets/diagrams/analytics-dashboard-architecture.svg', 'full'),
  directInput('mermaid-source', '게시 SVG의 편집 원본 전체', 'src/assets/diagrams/source/analytics-dashboard-architecture.mmd', 'full'),
  directInput('official-source-evidence', '2026-09-12 공식·1차 근거의 짧은 원문 발췌·위치·claim-to-excerpt 연결·적용 범위·실패 경계 전체', r01SourceEvidencePath, 'full'),
  directInput('render-pb021-1440-light', 'PB-021 1440×1000 light 실제 다이어그램 crop', 'output/playwright/task20-analytics-evidence/final-crops/pb-021-desktop-light-task20-pbv02-20260827155719257-59c60b91893d68-diagram.png', 'binary-full', renderScope('PB-021', '/01-mental-models/software-is-a-system/', '1440x1000', 'light')),
  directInput('render-pb021-1440-dark', 'PB-021 1440×1000 dark 실제 다이어그램 crop', 'output/playwright/task20-analytics-evidence/final-crops/pb-021-desktop-dark-task20-pbv02-20260827155431806-ca3bf04e72a678-diagram.png', 'binary-full', renderScope('PB-021', '/01-mental-models/software-is-a-system/', '1440x1000', 'dark')),
  directInput('render-pb021-1024-light', 'PB-021 1024×768 light 실제 다이어그램 crop', 'output/playwright/task20-analytics-evidence/final-crops/pb-021-tablet-light-task20-pbv02-20260827155431806-ca3bf04e72a678-diagram.png', 'binary-full', renderScope('PB-021', '/01-mental-models/software-is-a-system/', '1024x768', 'light')),
  directInput('render-pb021-1024-dark', 'PB-021 1024×768 dark 실제 다이어그램 crop', 'output/playwright/task20-analytics-evidence/final-crops/pb-021-tablet-dark-task20-pbv02-20260827155431806-ca3bf04e72a678-diagram.png', 'binary-full', renderScope('PB-021', '/01-mental-models/software-is-a-system/', '1024x768', 'dark')),
  directInput('render-pb021-390-light', 'PB-021 390×844 light 실제 다이어그램 crop', 'output/playwright/task20-analytics-evidence/final-crops/pb-021-390x844-light-bounded-1787846823654-diagram-calibrated.png', 'binary-full', renderScope('PB-021', '/01-mental-models/software-is-a-system/', '390x844', 'light')),
  directInput('render-pb021-390-dark', 'PB-021 390×844 dark 실제 다이어그램 crop', 'output/playwright/task20-analytics-evidence/final-crops/pb-021-390x844-dark-bounded-1787846823654-diagram-calibrated.png', 'binary-full', renderScope('PB-021', '/01-mental-models/software-is-a-system/', '390x844', 'dark')),
  directInput('render-pb053-1440-light', 'PB-053 1440×1000 light 실제 다이어그램 crop', 'output/playwright/task20-analytics-evidence/final-crops/pb-053-1440x1000-light-bounded-1787846823654-diagram-calibrated.png', 'binary-full', renderScope('PB-053', '/12-case-studies/analytics-dashboard-case-study/', '1440x1000', 'light')),
  directInput('render-pb053-1440-dark', 'PB-053 1440×1000 dark 실제 다이어그램 crop', 'output/playwright/task20-analytics-evidence/final-crops/pb-053-1440x1000-dark-bounded-1787846823654-diagram-calibrated.png', 'binary-full', renderScope('PB-053', '/12-case-studies/analytics-dashboard-case-study/', '1440x1000', 'dark')),
  directInput('render-pb053-1024-light', 'PB-053 1024×768 light 실제 다이어그램 crop', 'output/playwright/task20-analytics-evidence/final-crops/pb-053-1024x768-light-bounded-1787846823654-diagram-calibrated.png', 'binary-full', renderScope('PB-053', '/12-case-studies/analytics-dashboard-case-study/', '1024x768', 'light')),
  directInput('render-pb053-1024-dark', 'PB-053 1024×768 dark 실제 다이어그램 crop', 'output/playwright/task20-analytics-evidence/final-crops/pb-053-1024x768-dark-bounded-1787846823654-diagram-calibrated.png', 'binary-full', renderScope('PB-053', '/12-case-studies/analytics-dashboard-case-study/', '1024x768', 'dark')),
  directInput('render-pb053-390-light', 'PB-053 390×844 light 실제 다이어그램 crop', 'output/playwright/task20-analytics-evidence/final-crops/pb-053-390x844-light-bounded-1787846823654-diagram-calibrated.png', 'binary-full', renderScope('PB-053', '/12-case-studies/analytics-dashboard-case-study/', '390x844', 'light')),
  directInput('render-pb053-390-dark', 'PB-053 390×844 dark 실제 다이어그램 crop', 'output/playwright/task20-analytics-evidence/final-crops/pb-053-390x844-dark-bounded-1787846823654-diagram-calibrated.png', 'binary-full', renderScope('PB-053', '/12-case-studies/analytics-dashboard-case-study/', '390x844', 'dark')),
];
const contextExcerpt = (id, path, role, segments) => ({ id, path, role, segments: segments.map(([label, start_line, end_line]) => ({ label, start_line, end_line })) });
const expectedR01ContextExcerpts = [
  contextExcerpt('completion-spec', 'docs/superpowers/specs/2026-08-12-public-beta-completion-design.md', '최상위 목표·핵심 장·M5 계약', [['목표·독자·비목표', 15, 53], ['M5 완료 범위', 173, 180], ['핵심 개념 장 완료 기준', 282, 290], ['Codex 두 겹 계약과 대기 경계', 338, 356]]),
  contextExcerpt('master-plan', 'docs/superpowers/plans/2026-08-12-public-beta-master-plan.md', 'Task22 R01 배정·입력·실행 절차', [['현재 Codex 계약 개정과 다음 실행', 11, 15], ['R01 배정', 1576, 1584], ['Step1 완료와 Step2 프로필', 1613, 1624], ['Step3 입력·결과 조건', 1656, 1663]]),
  contextExcerpt('repository-rules', 'RULES.md', '프로젝트 핵심 규칙 전체', [['핵심 규칙', 1, 12]]),
  contextExcerpt('content-map-pb-021', 'CONTENT_MAP.md', '공개 경로·현재 상태', [['PB-021 콘텐츠 지도 행', 48, 48]]),
  contextExcerpt('content-audit-pb-021', 'docs/project/public-beta-content-audit.md', '현재 콘텐츠 감사 판정', [['PB-021 감사 행', 46, 46]]),
  contextExcerpt('source-gap-pbsg-021', 'research/public-beta-source-gap-register.md', 'R01 출처 gap 상태와 일반화 금지선', [['PBSG-021', 53, 53]]),
  contextExcerpt('source-map-pb-021', 'research/source-map.md', 'PB-021 직접 근거와 장별 출처', [['PB-021 직접 근거', 212, 215], ['장별 출처와 두 사례 연결', 251, 258]]),
  contextExcerpt('visual-audit-pbv-02', 'docs/project/public-beta-visual-audit.md', '공유 다이어그램 정본·두 소비 문맥·12상태 판정', [['PBV-02 자산 행', 15, 19], ['후속 자산 검증과 반복 경계', 53, 55], ['PBV-02A와 PBV-02B', 57, 61]]),
  contextExcerpt('site-qa-r01', 'docs/project/reviews/public-beta-1/site-qa.md', '현재 로컬 사이트·시각 증거와 한계', [['최종 로컬 관찰과 증거 경계', 37, 49], ['Task21 패키지 독립 판정', 69, 69]]),
  contextExcerpt('browser-manifest-r01', 'docs/project/reviews/public-beta-1/site-qa-browser-manifest.json', 'R01 공유 SVG의 원본 crop과 픽셀 판정 귀속', [['pixel_adjudication과 R01 네 시각 source', 16462, 16519]]),
  contextExcerpt('pbv02-checkpoint-report', '.superpowers/sdd/2026-08-12-public-beta-master-plan/task-20-pbv-02-report.md', 'PBV-02 actual Chrome 12상태와 증거 경계', [['actual Chrome 12상태와 scroll 보충', 48, 52]]),
  contextExcerpt('pbv02-historical-input-manifest', 'docs/project/reviews/public-beta-1/review-inputs-2026-08-28.json', 'PBV-02 두 소비 문맥의 actual PNG 경로·해시와 역사 상태', [['PB-021 actual crop 경로와 해시', 147, 197], ['PB-053 actual crop 경로와 해시', 203, 265], ['시각 source와 역사 상태 경계', 311, 338]]),
  contextExcerpt('development-glossary-system', 'src/content/docs/reference/development-glossary.md', '시스템·웹·상태 관련 용어 정본', [['시스템과 코드 핵심 용어', 39, 75], ['웹 역할 용어', 92, 100], ['흐름과 복구 오라클', 120, 122], ['데이터·권위 상태 용어', 128, 138]]),
  contextExcerpt('adjacent-client-server', 'src/content/docs/03-full-stack/client-server-full-stack.md', '인접 장의 원본·사본·증거·정적 전달 경계', [['상태 원본과 사본', 114, 140], ['실패 위치·정적 전달·판단 규칙', 142, 184], ['관련 용어와 출처 경계', 263, 283]]),
  contextExcerpt('shared-diagram-case-study', 'src/content/docs/12-case-studies/analytics-dashboard-case-study.md', 'analytics 사례의 공유 도표 문맥과 역링크', [['공유 다이어그램과 일곱 책임', 112, 126], ['R01 역링크와 관련 장', 595, 610]]),
  contextExcerpt('meeting-case-brief', 'research/meeting-webapp-case-brief.md', '일반 개발 사례의 역할·상태·책임·성공 층', [['독자 문제부터 완료 판정 층', 3, 38], ['비목표', 50, 52]]),
  contextExcerpt('stock-case-brief', 'research/stock-dashboard-case-brief.md', '분석 사례 fixture·안전·실제 원천 금지선', [['목적·안전 경계·fixture', 3, 23], ['요구·전달 규칙·공식 원천 금지선', 81, 110]]),
];
const localDirectEvidenceHashes = new Map([
  ['render-pb021-1440-light', 'c260a7a70fffc8c41320c2bb524713b675eb7d4ef19d71a216a89bfb61ff50ed'],
  ['render-pb021-1440-dark', '0a961b9e3e30b54836bf2032f136b408ea283512c0738399febc25cfb43dc9c8'],
  ['render-pb021-1024-light', 'c260a7a70fffc8c41320c2bb524713b675eb7d4ef19d71a216a89bfb61ff50ed'],
  ['render-pb021-1024-dark', '74793fcc6c93962f05868fd5e8b4a8fc9abcfb753b6bdedce5b4070e1022f308'],
  ['render-pb021-390-light', '370a6abcf76e021fc6e143f3c374b12f584d5f226e0a34a24eec82a59a365dee'],
  ['render-pb021-390-dark', '3cfa726e159a6391a4f544b1c4393ed8597560816e01203856d2f6e4237cbb8a'],
  ['render-pb053-1440-light', 'c1e751bb6e4850089522b8d3eabc57e2f4297fe1535ec52bb90c90fe8a20ee91'],
  ['render-pb053-1440-dark', '0c24fc0b38785641aac398f007ca4c28440c6792139a66d81b06af06003aa3f6'],
  ['render-pb053-1024-light', 'c1e751bb6e4850089522b8d3eabc57e2f4297fe1535ec52bb90c90fe8a20ee91'],
  ['render-pb053-1024-dark', '8087f6c8463877fb4cc0f7f86142a14b99679e272b85398e75221c75ad85aa0b'],
  ['render-pb053-390-light', '1f98b1c596412436bf362f67e10fd47b197b65fd6a03f86308d0b3be14506bd5'],
  ['render-pb053-390-dark', 'abd52134e6f2e6acf1853c590e75c70eb2751656666356d2be904ec0778c827f'],
]);
const localContextEvidenceHashes = new Map([
  ['pbv02-checkpoint-report', 'af9b5f7d22aba13da09dec2b599ac22b54e20f63a02bc957dbbc3efdd0bd64ed'],
]);
const expectedR01CombinedSha256 = '5750e879649ddff967f7f09d932b74c82017d81497086e176c5bc79177224f89';
const expectedR01SourceEvidenceDocumentSha256 = 'c63f3a30f393400827e3c702fefb578e1c036ab379be1dfd37b0b891bca20902';
const expectedR01SourceEvidenceSemanticSha256 = 'be5c160abd42c3e7898d4d12ffa536e293dbd3d5a549d2085b3f6854a68eebb9';
const expectedR01ReviewedTargetSha256 = 'd9569195713fd0db9201af1d18c141ab4a9836eca3980bc4905b2b46374aea2e';
const expectedR01CurrentTargetSha256 = 'f086dc056630893c03b2a8c1a98304063bf1053eef26b25da7b587ae038bbc3d';
const expectedR01ResultSha256 = 'e56086d11ee3fcd8d92070a70778105c92a8d7f69fa0b9feb278a2040c6abeca';
const expectedR01AdjudicationSha256 = '1e9f83f1663a189a4db41b8b08d89a9946244d3b431095cbbc40228ae9f3f3db';
const expectedR01ReviewedInputCommit = '7e6226b4e5f067e779767bf4ad944fd9e3c0ef5f';
const expectedR01ResultCommit = 'b163d4f3f4d12d4d9afb9fc3775fe5623dde0bcc';
const expectedR01ReviewEvidence = [
  `request: ${r01RequestPath}`,
  `independent: ${r01ResultPath}`,
  `adjudication: ${r01AdjudicationPath}`,
];
const expectedR01ClaimFamilies = [
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
];
const expectedR01SourceIds = [
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
];
const expectedR01RequiredExcerptMappings = new Map([
  ['software-engineering-scope', ['SWEBOK-PDF-01-E02', 'SWEBOK-PDF-01-E03', 'SWEBOK-PDF-01-E04', 'SWEBOK-PDF-01-E05', 'SWEBOK-PDF-01-E06', 'SWEBOK-PDF-01-E07']],
  ['http-cache-freshness', ['RFC9111-CACHE-01-E01', 'RFC9111-CACHE-01-E02', 'RFC9111-CACHE-01-E03', 'RFC9111-CACHE-01-E04']],
  ['build-time-versus-request-time-rendering', ['ASTRO-ODR-01-E01', 'ASTRO-ODR-01-E02', 'ASTRO-ODR-01-E03', 'ASTRO-ODR-01-E04', 'ASTRO-ODR-01-E05']],
]);
const expectedR01SharedContextSourceHashes = new Map([
  ['master-plan', '62715ae64199d5f11f8ff62891c71b99402f22bf8e9fbd004cdc20d7626d96dc'],
  ['content-map-pb-021', '9272b9d290ba49c25fdd8358b9c2e2fa32aebd19d97e8dcad4f5a015664fbbed'],
  ['source-map-pb-021', 'e7dd71b588d92241e815d165f986fb81c1eb909ff991376877741d15ea52d22e'],
]);
const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const expectedR01ReviewState = {
  status: 'done',
  required_review_state: '통과',
  input_manifest_state: 'input-fixed',
  individual_sha256_state: 'fixed',
  source_evidence_state: 'confirmed',
  review_ready: true,
  baseline_commit: r01BaselineCommit,
  reviewed_input_commit: expectedR01ReviewedInputCommit,
  result_commit: expectedR01ResultCommit,
  combined_sha256_rule: 'sha256-framed-bytes-v1',
  reviewed_target_sha256: expectedR01ReviewedTargetSha256,
  current_target_sha256: expectedR01CurrentTargetSha256,
  metadata_transition: 'metadata-only-draft-to-review',
  content_semantics_changed: false,
  result_sha256: expectedR01ResultSha256,
  adjudication_sha256: expectedR01AdjudicationSha256,
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
};

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

function reconstructR01ReviewedTarget(currentDocument) {
  const currentMetadata = [
    'contentStatus: review',
    'reviewEvidence:',
    ...expectedR01ReviewEvidence.map(item => `  - "${item}"`),
    '',
  ].join('\n');
  if (currentDocument.split(currentMetadata).length !== 2) return undefined;
  return currentDocument.replace(currentMetadata, 'contentStatus: draft\n');
}

function reconstructR01ReviewedContext(id, currentDocument) {
  if (id === 'content-map-pb-021') {
    const currentRow = '| [소프트웨어는 시스템입니다](src/content/docs/01-mental-models/software-is-a-system.md) | `review` | 15,550 | `/01-mental-models/software-is-a-system/` |';
    const reviewedRow = currentRow.replace('`review`', '`draft`');
    if (currentDocument.includes(currentRow)) return currentDocument.replace(currentRow, reviewedRow);
    return undefined;
  }
  if (id === 'master-plan') {
    const currentRow = '| - [x] | R01 `software-system` | `01-mental-models/software-is-a-system.md` | 개별 심층 | `public-beta-1/r01-software-system-codex-review.md` | `public-beta-1/r01-software-system-adjudication.md` |';
    const reviewedRow = currentRow.replace('- [x]', '- [ ]');
    if (currentDocument.includes(reviewedRow)) return undefined;
    if (currentDocument.includes(currentRow)) return currentDocument.replace(currentRow, reviewedRow);
  }
  return currentDocument;
}

export function calculateFramedSha256(entries) {
  const hash = createHash('sha256');
  hash.update('sha256-framed-bytes-v1\n', 'utf8');
  for (const { path, bytes } of entries) {
    const pathBytes = Buffer.from(path, 'utf8');
    hash.update(`path-bytes:${pathBytes.length}\n`, 'utf8');
    hash.update(pathBytes);
    hash.update(`\ncontent-bytes:${bytes.length}\n`, 'utf8');
    hash.update(bytes);
    hash.update('\n', 'utf8');
  }
  return hash.digest('hex');
}

export function validateLocalEvidence(request, root = repositoryRoot, options = {}) {
  const errors = [];
  const directInputIds = options.directInputIds ?? [...localDirectEvidenceHashes.keys()];
  const contextExcerptIds = options.contextExcerptIds ?? [...localContextEvidenceHashes.keys()];
  for (const id of directInputIds) {
    const input = request?.direct_inputs?.find(candidate => candidate.id === id);
    if (!input) {
      errors.push(`missing local direct evidence descriptor: ${id}`);
      continue;
    }
    const absolute = resolve(root, input.path ?? '');
    if (!existsSync(absolute)) {
      errors.push(`missing local direct evidence: ${id}`);
      continue;
    }
    let bytes;
    try {
      bytes = readFileSync(absolute);
    } catch {
      errors.push(`unreadable local direct evidence: ${id}`);
      continue;
    }
    if (input.read_mode !== 'binary-full') errors.push(`local direct evidence read mode mismatch: ${id}`);
    if (bytes.length < pngSignature.length || !bytes.subarray(0, pngSignature.length).equals(pngSignature)) errors.push(`local PNG signature mismatch: ${id}`);
    if (input.sha256 !== sha256(bytes)) errors.push(`local direct evidence hash mismatch: ${id}`);
  }
  for (const id of contextExcerptIds) {
    const excerpt = request?.context_excerpts?.find(candidate => candidate.id === id);
    if (!excerpt) {
      errors.push(`missing local context evidence descriptor: ${id}`);
      continue;
    }
    const absolute = resolve(root, excerpt.path ?? '');
    if (!existsSync(absolute)) {
      errors.push(`missing local context evidence: ${id}`);
      continue;
    }
    let bytes;
    try {
      bytes = readFileSync(absolute);
    } catch {
      errors.push(`unreadable local context evidence: ${id}`);
      continue;
    }
    if (excerpt.sha256 !== sha256(bytes)) errors.push(`local context evidence hash mismatch: ${id}`);
    const lines = bytes.toString('utf8').split('\n');
    for (const segment of excerpt.segments ?? []) {
      const start = segment.start_line;
      const end = segment.end_line;
      if (!Number.isInteger(start) || !Number.isInteger(end) || start < 1 || end < start || end > lines.length) {
        errors.push(`local context evidence range mismatch: ${id}`);
        continue;
      }
      if (segment.text !== lines.slice(start - 1, end).join('\n')) errors.push(`local context evidence content mismatch: ${id}`);
    }
  }
  return errors;
}

export function extractJsonBlock(text, marker) {
  const start = `<!-- ${marker}:start -->`;
  const end = `<!-- ${marker}:end -->`;
  const startIndex = text.indexOf(start);
  const endIndex = text.indexOf(end);
  if (startIndex < 0 || endIndex < 0 || endIndex <= startIndex) throw new Error(`missing ${marker} marker block`);
  const body = text.slice(startIndex + start.length, endIndex).trim();
  const match = body.match(/^```json\n([\s\S]+)\n```$/);
  if (!match) throw new Error(`invalid ${marker} JSON fence`);
  return JSON.parse(match[1]);
}

export function validateR01SourceEvidence(document, evidence = undefined) {
  const errors = [];
  let embedded;
  try {
    embedded = extractJsonBlock(document, 'm5-r01-source-evidence:data');
  } catch (error) {
    errors.push(`source evidence marker invalid: ${error.message}`);
    return errors;
  }
  const payload = evidence ?? embedded;
  if (JSON.stringify(embedded) !== JSON.stringify(payload)) errors.push('source evidence marker payload mismatch');
  const expectedTopKeys = ['schema_version', 'campaign', 'review_id', 'artifact_id', 'checked_at', 'checked_at_meaning', 'source_scope', 'required_claim_families', 'coverage', 'claim_mappings', 'sources'];
  if (JSON.stringify(Object.keys(payload ?? {}).sort()) !== JSON.stringify(expectedTopKeys.sort())) errors.push('source evidence keys mismatch');
  const expectedMetadata = {
    schema_version: 1,
    campaign: 'public-beta-1-m5',
    review_id: 'R01',
    artifact_id: 'r01-software-system-official-source-evidence',
    checked_at: '2026-09-12',
    checked_at_meaning: 'access-date-not-publication-date',
    source_scope: 'R01 C05 오프라인 대조 입력이며 공개 원고의 대체본이나 새로운 보편 주장 근거가 아닙니다.',
  };
  for (const [key, value] of Object.entries(expectedMetadata)) if (JSON.stringify(payload?.[key]) !== JSON.stringify(value)) errors.push(`source evidence ${key} mismatch`);
  if (JSON.stringify(payload?.required_claim_families) !== JSON.stringify(expectedR01ClaimFamilies)) errors.push('source evidence required claim families mismatch');
  const expectedCoverage = { required_claim_family_count: 10, confirmed_claim_families: expectedR01ClaimFamilies, source_count: 18, confirmed_sources: 16, not_confirmed_sources: 2, review_input_complete: true };
  if (JSON.stringify(Object.keys(payload?.coverage ?? {}).sort()) !== JSON.stringify(Object.keys(expectedCoverage).sort())) errors.push('source evidence coverage keys mismatch');
  if (JSON.stringify(payload?.coverage) !== JSON.stringify(expectedCoverage)) errors.push('source evidence coverage mismatch');
  const sources = payload?.sources ?? [];
  if (JSON.stringify(sources.map(source => source?.id)) !== JSON.stringify(expectedR01SourceIds)) errors.push('source evidence source ID set or order mismatch');
  const expectedSourceKeys = ['id', 'official_url', 'provider', 'observed_document', 'observed_version_or_status', 'checked_at', 'access_outcome', 'locator', 'excerpts', 'claim_scope', 'generalization_boundary'];
  const expectedExcerptKeys = ['id', 'locator', 'text', 'word_count'];
  const seenExcerptIds = new Set();
  const excerptOwner = new Map();
  for (const source of sources) {
    if (JSON.stringify(Object.keys(source ?? {}).sort()) !== JSON.stringify(expectedSourceKeys.sort())) errors.push(`source evidence source keys mismatch: ${source?.id}`);
    for (const key of ['official_url', 'provider', 'observed_document', 'observed_version_or_status', 'locator', 'generalization_boundary']) if (typeof source?.[key] !== 'string' || !source[key]) errors.push(`source evidence ${source?.id} ${key} missing`);
    if (!source?.official_url?.startsWith('https://')) errors.push(`source evidence ${source?.id} official URL mismatch`);
    if (source?.checked_at !== '2026-09-12') errors.push(`source evidence ${source?.id} checked_at mismatch`);
    const confirmed = source?.access_outcome?.startsWith('confirmed/');
    const notConfirmed = source?.access_outcome?.startsWith('not-confirmed/');
    if (!confirmed && !notConfirmed) errors.push(`source evidence ${source?.id} access outcome mismatch`);
    if (!Array.isArray(source?.excerpts) || !Array.isArray(source?.claim_scope)) errors.push(`source evidence ${source?.id} excerpt or scope type mismatch`);
    if (confirmed && (!(source?.excerpts?.length > 0) || !(source?.claim_scope?.length > 0))) errors.push(`source evidence confirmed source lacks excerpt or scope: ${source?.id}`);
    if (notConfirmed && ((source?.excerpts?.length ?? 0) !== 0 || (source?.claim_scope?.length ?? 0) !== 0)) errors.push(`source evidence not-confirmed source claims evidence: ${source?.id}`);
    for (const family of source?.claim_scope ?? []) if (!expectedR01ClaimFamilies.includes(family)) errors.push(`source evidence ${source?.id} claim scope mismatch`);
    let sourceQuoteWordCount = 0;
    for (const excerpt of source?.excerpts ?? []) {
      if (JSON.stringify(Object.keys(excerpt ?? {}).sort()) !== JSON.stringify(expectedExcerptKeys.sort())) errors.push(`source evidence excerpt keys mismatch: ${source?.id}/${excerpt?.id}`);
      if (typeof excerpt?.id !== 'string' || !excerpt.id.startsWith(`${source.id}-E`) || seenExcerptIds.has(excerpt.id)) errors.push(`source evidence excerpt ID mismatch: ${source?.id}/${excerpt?.id}`);
      else {
        seenExcerptIds.add(excerpt.id);
        excerptOwner.set(excerpt.id, source.id);
      }
      if (typeof excerpt?.locator !== 'string' || !excerpt.locator || typeof excerpt?.text !== 'string' || !excerpt.text) errors.push(`source evidence excerpt locator or text missing: ${source?.id}/${excerpt?.id}`);
      const actualWordCount = typeof excerpt?.text === 'string' && excerpt.text.trim() ? excerpt.text.trim().split(/\s+/).length : 0;
      if (excerpt?.word_count !== actualWordCount || actualWordCount < 1 || actualWordCount > 25) errors.push(`source evidence excerpt word count mismatch: ${source?.id}/${excerpt?.id}`);
      sourceQuoteWordCount += actualWordCount;
    }
    if (sourceQuoteWordCount > 25) errors.push(`source evidence per-source quote word count exceeds 25: ${source?.id}`);
  }
  const coveredFamilies = [...new Set(sources.filter(source => source?.access_outcome?.startsWith('confirmed/')).flatMap(source => source.claim_scope ?? []))];
  if (JSON.stringify(coveredFamilies) !== JSON.stringify(expectedR01ClaimFamilies)) errors.push('source evidence confirmed claim coverage mismatch');
  const claimMappings = payload?.claim_mappings ?? [];
  const expectedClaimMappingKeys = ['claim_family', 'supported_claim', 'source_ids', 'excerpt_ids', 'support_boundary'];
  if (JSON.stringify(claimMappings.map(mapping => mapping?.claim_family)) !== JSON.stringify(expectedR01ClaimFamilies)) errors.push('source evidence claim mapping family set or order mismatch');
  const sourcesById = new Map(sources.map(source => [source.id, source]));
  for (const mapping of claimMappings) {
    const family = mapping?.claim_family;
    if (JSON.stringify(Object.keys(mapping ?? {}).sort()) !== JSON.stringify(expectedClaimMappingKeys.sort())) errors.push(`source evidence claim mapping keys mismatch: ${family}`);
    if (typeof mapping?.supported_claim !== 'string' || !mapping.supported_claim || typeof mapping?.support_boundary !== 'string' || !mapping.support_boundary) errors.push(`source evidence claim mapping text missing: ${family}`);
    if (!Array.isArray(mapping?.source_ids) || mapping.source_ids.length === 0 || new Set(mapping.source_ids).size !== mapping.source_ids.length) errors.push(`source evidence claim mapping source IDs mismatch: ${family}`);
    if (!Array.isArray(mapping?.excerpt_ids) || mapping.excerpt_ids.length === 0 || new Set(mapping.excerpt_ids).size !== mapping.excerpt_ids.length) errors.push(`source evidence claim mapping excerpt IDs mismatch: ${family}`);
    for (const sourceId of mapping?.source_ids ?? []) {
      const source = sourcesById.get(sourceId);
      if (!source?.access_outcome?.startsWith('confirmed/')) errors.push(`source evidence claim mapping source not confirmed: ${family}/${sourceId}`);
      if (!source?.claim_scope?.includes(family)) errors.push(`source evidence claim mapping source scope mismatch: ${family}/${sourceId}`);
    }
    for (const excerptId of mapping?.excerpt_ids ?? []) {
      if (!seenExcerptIds.has(excerptId)) errors.push(`source evidence claim mapping excerpt missing: ${family}/${excerptId}`);
      else if (!(mapping?.source_ids ?? []).includes(excerptOwner.get(excerptId))) errors.push(`source evidence claim mapping excerpt ownership mismatch: ${family}/${excerptId}`);
    }
  }
  for (const [family, excerptIds] of expectedR01RequiredExcerptMappings) {
    const mapping = claimMappings.find(candidate => candidate?.claim_family === family);
    if (JSON.stringify(mapping?.excerpt_ids) !== JSON.stringify(excerptIds)) errors.push(`source evidence required excerpt mapping mismatch: ${family}`);
  }
  if (sha256(Buffer.from(JSON.stringify(payload), 'utf8')) !== expectedR01SourceEvidenceSemanticSha256) errors.push('source evidence exact semantics mismatch');
  if (sha256(Buffer.from(document, 'utf8')) !== expectedR01SourceEvidenceDocumentSha256) errors.push('source evidence file SHA-256 mismatch');
  return errors;
}

export function validateMatrixDocument(text) {
  text = r02PreCloseoutBytes(matrixPath, Buffer.from(text)).toString('utf8');
  const errors = [];
  if (!text.includes('최초 기록일: 2026-08-30 · 현재 경계 확인일: 2026-09-12')) errors.push('matrix original and current boundary dates mismatch');
  const purpose = text.match(/## 목적과 현재 경계\n\n([\s\S]*?)(?=\n## )/)?.[1] ?? '';
  const resume = text.match(/## 검증과 재개 조건\n\n([\s\S]*)$/)?.[1] ?? '';
  if (!purpose.includes('R01 완료와 R02~R26 입력 고정·Codex 두 겹 검토')) errors.push('current Codex review boundary missing');
  if (!resume.includes('R01~R25는 fresh Codex reviewer, R26은 분리된 fresh Codex reviewer')) errors.push('current Codex resume boundary missing');
  if (purpose.includes('현재 직접 차단 원인은 `auth`')) errors.push('stale Claude auth blocker');
  if (resume.includes('동일 구독 계정 로그인을 직접 복구')) errors.push('stale Claude subscription resume condition');
  for (const staleClaim of [
    '이 행렬 개정은 실제 R01~R26 실행',
    'R01의 요청서·직접 입력17개·문맥 발췌17개·선언 해시·실행 미완료 상태',
    '이제 입력과 해시를 유지한 채 R01 fresh Codex reviewer에게 전달할 수 있습니다.',
    '실제 검토는 여전히 `not-run`입니다.',
  ]) if (text.includes(staleClaim)) errors.push(`stale R01 unexecuted claim: ${staleClaim}`);
  return errors;
}

function listMarkdownFiles(directory, repositoryRoot) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const absolute = join(directory, entry.name);
    if (entry.isDirectory()) return listMarkdownFiles(absolute, repositoryRoot);
    if (!entry.isFile() || !/\.mdx?$/.test(entry.name)) return [];
    return [relative(repositoryRoot, absolute).split(sep).join('/')];
  });
}

function expectedReviewPath(row, suffix) {
  return `${reviewRoot}/${row.id.toLowerCase()}-${row.slug}-${suffix}.md`;
}

export function validateMatrix(matrix, root = repositoryRoot) {
  const errors = [];
  if (matrix.schema_version !== 1 || matrix.campaign !== 'public-beta-1-m5') errors.push('matrix schema or campaign mismatch');
  if (matrix.contract?.path !== `${reviewRoot}/codex-review-contract.md` || matrix.contract?.version !== '2026-09-05-two-layer-codex') errors.push('contract path or version mismatch');
  if (matrix.planning_baseline_commit !== 'f9b2cb0e2f5f2ba81d179d17056702abf4ab71e9') errors.push('planning baseline commit mismatch');
  const defaults = matrix.row_defaults ?? {};
  const requiredDefaults = {
    status: 'pending',
    required_review_state: '대기',
    release_ready: false,
    block_reason: 'R26 입력 고정 및 Codex 검토 미실행',
    input_manifest_state: 'not-fixed',
    individual_sha256_state: 'not-fixed',
    combined_sha256: 'not-fixed',
    last_attempt: 'not-run',
    actual_invocation: 'not-run',
    observed_model_context_effort: 'not-confirmed',
    result_state: 'not-run',
    adjudication_state: 'not-run',
    rereview_state: 'not-run',
    valid_independent_evidence: false,
    reviewer_independence: 'controller·작성자·이전 대화 이력과 분리된 fresh Codex reviewer',
    open_findings: { critical: 'not-assessed', important: 'not-assessed', minor: 'not-assessed' },
    resume_condition: '해당 행의 고정 입력·개별 SHA-256·결합 SHA-256을 기록하고, 계획된 Codex 모델과 reasoning effort가 실제로 사용 가능한지 확인한 뒤 fresh reviewer에게 읽기 전용 검토를 요청합니다.',
  };
  const defaultKeys = [...Object.keys(requiredDefaults), 'last_preflight_or_attempt'].sort();
  if (JSON.stringify(Object.keys(defaults).sort()) !== JSON.stringify(defaultKeys)) errors.push('row_defaults keys mismatch');
  for (const [key, value] of Object.entries(requiredDefaults)) if (JSON.stringify(defaults[key]) !== JSON.stringify(value)) errors.push(`row default ${key} mismatch`);
  if (defaults.last_preflight_or_attempt !== 'not-run') errors.push('last Codex attempt state mismatch');
  const historicalClaude = matrix.historical_claude ?? {};
  if (JSON.stringify(historicalClaude) !== JSON.stringify({ status: 'waived_by_owner', model_call_count: 0, valid_result: false, attempt_log: `${reviewRoot}/claude-attempt-log.md`, note: '과거 Claude 사전 확인·차단 기록은 역사이며 유효 Claude 결과나 PASS가 아닙니다.' })) errors.push('historical Claude boundary mismatch');
  const rows = matrix.rows ?? [];
  if (JSON.stringify(rows.map(row => row.id)) !== JSON.stringify(exactIds)) errors.push('review IDs must be exactly R01-R26 in order');
  const assigned = new Map();
  for (const [index, row] of rows.entries()) {
    const expectedRow = expectedRows[index];
    const publicRowKeys = ['id', 'slug', 'method', 'implementation_state', 'inputs', 'request_path', 'result_path', 'adjudication_path', 'rereview_path'];
    const expectedRowKeys = ['R01', 'R02', 'R03', 'R04', 'R05', 'R06', 'R07', 'R08', 'R09', 'R10', 'R11', 'R12', 'R13', 'R14', 'R15', 'R16', 'R17', 'R18', 'R19', 'R20', 'R21', 'R22', 'R23', 'R24', 'R25'].includes(row.id)
      ? [...publicRowKeys, 'review_state']
      : row.id === 'R26'
        ? ['id', 'slug', 'method', 'implementation_state', 'request_path', 'result_path', 'adjudication_path', 'rereview_path', 'reviewer_independence', 'integration_requires', 'review_state']
        : publicRowKeys;
    if (JSON.stringify(Object.keys(row).sort()) !== JSON.stringify(expectedRowKeys.sort())) errors.push(`${row.id} row keys mismatch`);
    if (JSON.stringify({ id: row.id, slug: row.slug, method: row.method, ...(row.inputs ? { inputs: row.inputs } : {}) }) !== JSON.stringify(expectedRow)) errors.push(`${row.id} row contract mismatch`);
    for (const key of Object.keys(requiredDefaults)) {
      if (!Object.hasOwn(row, key)) continue;
      if (key === 'reviewer_independence' && row.id !== 'R26') errors.push(`${row.id} reviewer independence override is not allowed`);
      else if (key !== 'reviewer_independence') errors.push(`${row.id} row state override is not allowed: ${key}`);
    }
    if (row.id !== 'R26' && row.implementation_state !== '작성·구현 완료') errors.push(`${row.id} implementation state mismatch`);
    if (row.id === 'R26' && row.implementation_state !== '작성·구현 완료') errors.push('R26 implementation state mismatch');
    if (row.request_path !== expectedReviewPath(expectedRow, 'request')) errors.push(`${row.id} request path mismatch`);
    if (row.result_path !== expectedReviewPath(expectedRow, 'codex-review')) errors.push(`${row.id} result path mismatch`);
    if (row.adjudication_path !== expectedReviewPath(expectedRow, 'adjudication')) errors.push(`${row.id} adjudication path mismatch`);
    if (row.rereview_path !== expectedReviewPath(expectedRow, 'codex-rereview')) errors.push(`${row.id} rereview path mismatch`);
    if (row.id !== 'R26' && defaults.reviewer_independence !== 'controller·작성자·이전 대화 이력과 분리된 fresh Codex reviewer') errors.push(`${row.id} reviewer independence mismatch`);
    if (row.id === 'R26' && row.reviewer_independence !== 'R01~R25 reviewer들과 분리된 fresh Codex reviewer') errors.push('R26 reviewer independence mismatch');
    if (row.id === 'R01') {
      const state = row.review_state ?? {};
      const allowedKeys = [...Object.keys(expectedR01ReviewState), 'request_sha256', 'combined_sha256'].sort();
      if (JSON.stringify(Object.keys(state).sort()) !== JSON.stringify(allowedKeys)) errors.push('R01 review_state keys mismatch');
      for (const [key, value] of Object.entries(expectedR01ReviewState)) if (JSON.stringify(state[key]) !== JSON.stringify(value)) errors.push(`R01 review_state ${key} mismatch`);
      if (!/^[0-9a-f]{64}$/.test(state.request_sha256 ?? '')) errors.push('R01 review_state request_sha256 mismatch');
      if (!/^[0-9a-f]{64}$/.test(state.combined_sha256 ?? '')) errors.push('R01 review_state combined_sha256 mismatch');
    } else if (row.id === 'R02') {
      if (JSON.stringify(row.review_state) !== JSON.stringify(r02Closeout.state)) errors.push('R02 review_state mismatch');
    } else if (row.id === 'R03') {
      if (JSON.stringify(row.review_state) !== JSON.stringify(r03Closeout.state)) errors.push('R03 review_state mismatch');
    } else if (row.id === 'R04') {
      if (JSON.stringify(row.review_state) !== JSON.stringify(r04Closeout.state)) errors.push('R04 review_state mismatch');
    } else if (row.id === 'R05') {
      if (JSON.stringify(row.review_state) !== JSON.stringify(r05Closeout.state)) errors.push('R05 review_state mismatch');
    } else if (row.id === 'R06') {
      if (JSON.stringify(row.review_state) !== JSON.stringify(r06Closeout.state)) errors.push('R06 review_state mismatch');
    } else if (row.id === 'R07') {
      if (JSON.stringify(row.review_state) !== JSON.stringify(r07Closeout.state)) errors.push('R07 review_state mismatch');
    } else if (row.id === 'R21') {
      if (JSON.stringify(row.review_state) !== JSON.stringify(r21Closeout.state)) errors.push('R21 review_state mismatch');
    } else if (row.id === 'R26') {
      if (JSON.stringify(row.review_state) !== JSON.stringify(r26State)) errors.push('R26 review_state mismatch');
    } else if (row.id === 'R25') {
      if (JSON.stringify(row.review_state) !== JSON.stringify(r25Closeout.state)) errors.push('R25 review_state mismatch');
    } else if (row.id === 'R24') {
      if (JSON.stringify(row.review_state) !== JSON.stringify(r24Closeout.state)) errors.push('R24 review_state mismatch');
    } else if (row.id === 'R23') {
      if (JSON.stringify(row.review_state) !== JSON.stringify(r23Closeout.state)) errors.push('R23 review_state mismatch');
    } else if (row.id === 'R22') {
      if (JSON.stringify(row.review_state) !== JSON.stringify(r22Closeout.state)) errors.push('R22 review_state mismatch');
    } else if (row.id === 'R20') {
      if (JSON.stringify(row.review_state) !== JSON.stringify(r20Closeout.state)) errors.push('R20 review_state mismatch');
    } else if (row.id === 'R19') {
      if (JSON.stringify(row.review_state) !== JSON.stringify(r19Closeout.state)) errors.push('R19 review_state mismatch');
    } else if (row.id === 'R18') {
      if (JSON.stringify(row.review_state) !== JSON.stringify(r18Closeout.state)) errors.push('R18 review_state mismatch');
    } else if (row.id === 'R17') {
      if (JSON.stringify(row.review_state) !== JSON.stringify(r17Closeout.state)) errors.push('R17 review_state mismatch');
    } else if (row.id === 'R16') {
      const correctedR16 = {...r16Closeout.state, result_state: 'pass-via-followup-original-blocked-preserved'};
      if (JSON.stringify(row.review_state) !== JSON.stringify(correctedR16)) errors.push('R16 review_state mismatch');
    } else if (row.id === 'R15') {
      if (JSON.stringify(row.review_state) !== JSON.stringify(r15Closeout.state)) errors.push('R15 review_state mismatch');
    } else if (row.id === 'R14') {
      if (JSON.stringify(row.review_state) !== JSON.stringify(r14Closeout.state)) errors.push('R14 review_state mismatch');
    } else if (row.id === 'R13') {
      if (JSON.stringify(row.review_state) !== JSON.stringify(r13Closeout.state)) errors.push('R13 review_state mismatch');
    } else if (row.id === 'R12') {
      if (JSON.stringify(row.review_state) !== JSON.stringify(r12Closeout.state)) errors.push('R12 review_state mismatch');
    } else if (row.id === 'R11') {
      if (JSON.stringify(row.review_state) !== JSON.stringify(r11Closeout.state)) errors.push('R11 review_state mismatch');
    } else if (row.id === 'R10') {
      if (JSON.stringify(row.review_state) !== JSON.stringify(r10Closeout.state)) errors.push('R10 review_state mismatch');
    } else if (row.id === 'R09') {
      if (JSON.stringify(row.review_state) !== JSON.stringify(r09Closeout.state)) errors.push('R09 review_state mismatch');
    } else if (row.id === 'R08') {
      if (JSON.stringify(row.review_state) !== JSON.stringify(r08Closeout.state)) errors.push('R08 review_state mismatch');
    } else if (Object.hasOwn(row, 'review_state')) {
      errors.push(`${row.id} review_state override is not allowed`);
    }
    if (row.id === 'R26') continue;
    if (!Array.isArray(row.inputs) || row.inputs.length === 0) errors.push(`${row.id} has no public inputs`);
    for (const path of row.inputs ?? []) {
      if (!path.startsWith(`${contentRoot}/`) || !/\.mdx?$/.test(path)) errors.push(`${row.id} invalid public input path: ${path}`);
      if (!existsSync(resolve(root, path))) errors.push(`${row.id} missing public input: ${path}`);
      const previous = assigned.get(path);
      if (previous) errors.push(`duplicate public input: ${path} in ${previous} and ${row.id}`);
      else assigned.set(path, row.id);
    }
  }
  const actual = listMarkdownFiles(resolve(root, contentRoot), resolve(root)).sort();
  const allocated = [...assigned.keys()].sort();
  if (actual.length !== 59) errors.push(`public content count must be 59, got ${actual.length}`);
  for (const path of actual) if (!assigned.has(path)) errors.push(`unassigned public input: ${path}`);
  for (const path of allocated) if (!actual.includes(path)) errors.push(`allocated non-public input: ${path}`);
  if (matrix.coverage?.r01_r25_unique !== 59 || matrix.coverage?.duplicates !== 0 || matrix.coverage?.missing !== 0 || matrix.coverage?.r26_is_additional_integration !== true) errors.push('declared coverage summary mismatch');
  const integration = rows.find(row => row.id === 'R26')?.integration_requires;
  const expectedPublicRows = exactIds.slice(0, 25);
  if (JSON.stringify(Object.keys(integration ?? {}).sort()) !== JSON.stringify(['full_public_row_ids', 'review_and_adjudication_row_ids', 'additional_inputs'].sort())) errors.push('R26 integration keys mismatch');
  if (JSON.stringify(integration?.full_public_row_ids) !== JSON.stringify(expectedPublicRows)) errors.push('R26 public integration row references mismatch');
  if (JSON.stringify(integration?.review_and_adjudication_row_ids) !== JSON.stringify(exactIds.slice(0, 25))) errors.push('R26 review result row references mismatch');
  if (JSON.stringify(integration?.additional_inputs) !== JSON.stringify(expectedAdditionalInputs)) errors.push('R26 additional inputs mismatch');
  const expandedPublicInputs = (integration?.full_public_row_ids ?? []).flatMap(id => rows.find(row => row.id === id)?.inputs ?? []);
  if (new Set(expandedPublicInputs).size !== 59 || expandedPublicInputs.length !== 59 || expandedPublicInputs.some(path => !actual.includes(path)) || actual.some(path => !expandedPublicInputs.includes(path))) errors.push('R26 expanded public inputs must be exactly 59 unique public documents');
  return errors;
}

export function validateR01Closeout(matrix, root = repositoryRoot, options = {}) {
  const errors = [];
  const readDocument = (path, supplied, label) => {
    if (supplied !== undefined) return supplied;
    const absolute = resolve(root, path);
    if (!existsSync(absolute)) {
      errors.push(`missing R01 ${label}: ${path}`);
      return undefined;
    }
    return readFileSync(absolute, 'utf8');
  };
  const targetBytes = readDocument(r01TargetPath, options.targetDocument, 'target');
  const targetDocument = targetBytes === undefined ? undefined : preReadyBytes(r01TargetPath,Buffer.from(targetBytes)).toString('utf8');
  const resultDocument = readDocument(r01ResultPath, options.resultDocument, 'canonical result');
  const adjudicationDocument = readDocument(r01AdjudicationPath, options.adjudicationDocument, 'adjudication');
  const row = matrix?.rows?.find(candidate => candidate.id === 'R01');

  if (targetDocument !== undefined) {
    const reconstructed = reconstructR01ReviewedTarget(targetDocument);
    if (sha256(Buffer.from(targetDocument, 'utf8')) !== expectedR01CurrentTargetSha256 || reconstructed === undefined || sha256(Buffer.from(reconstructed ?? '', 'utf8')) !== expectedR01ReviewedTargetSha256) errors.push('R01 metadata-only target transition mismatch');
  }
  if (resultDocument !== undefined) {
    if (sha256(Buffer.from(resultDocument, 'utf8')) !== expectedR01ResultSha256) errors.push('R01 canonical result SHA-256 mismatch');
    for (const required of ['판정: `PASS`, Critical `0`, Important `0`, Minor `2`, 루브릭 `17/18`, 치명 항목 `0`', '계획 및 실제 프로필: `gpt-6-astra` / reasoning effort `high`', '전송: 고정 텍스트 청크 `27/27`, 요청서 안의 문맥 발췌 `17/17`, 원본 PNG `12/12`', 'reviewer 도구: 지정 PNG를 원본 해상도로 확인하기 위한 `view_image` 12회만 사용']) {
      if (!resultDocument.includes(required)) errors.push(`R01 canonical result contract mismatch: ${required}`);
    }
  }

  let adjudication;
  if (adjudicationDocument !== undefined) {
    if (sha256(Buffer.from(adjudicationDocument, 'utf8')) !== expectedR01AdjudicationSha256) errors.push('R01 adjudication SHA-256 mismatch');
    try {
      adjudication = extractJsonBlock(adjudicationDocument, 'm5-r01-adjudication:data');
    } catch (error) {
      errors.push(`R01 adjudication marker invalid: ${error.message}`);
    }
  }
  const expectedAdjudication = {
    schema_version: 1,
    campaign: 'public-beta-1-m5',
    review_id: 'R01',
    adjudicated_at: '2026-09-12',
    reviewed_input_commit: expectedR01ReviewedInputCommit,
    result_commit: expectedR01ResultCommit,
    request_sha256: '808ca9a88841c037d29fd2d46089f0b0cbe9ef1306639e56c8399e284f01a8ca',
    combined_sha256: expectedR01CombinedSha256,
    target: {
      path: r01TargetPath,
      reviewed_sha256: expectedR01ReviewedTargetSha256,
      current_sha256: expectedR01CurrentTargetSha256,
      transition: 'metadata-only-draft-to-review',
      content_semantics_changed: false,
      review_evidence: expectedR01ReviewEvidence,
    },
    review_result: {
      path: r01ResultPath,
      sha256: expectedR01ResultSha256,
      verdict: 'PASS',
      rubric_score: 17,
      rubric_maximum: 18,
      fatal_findings: 0,
      critical: 0,
      important: 0,
      minor: 2,
      actual_model: 'gpt-6-astra',
      actual_reasoning_effort: 'high',
      text_chunks_read: '27/27',
      context_excerpts_read: '17/17',
      png_inputs_read: '12/12',
      reviewer_tools: 'view_image:12-only',
    },
    findings: [
      {
        id: 'R01-M01',
        severity: 'Minor',
        decision: 'accept-current',
        status: 'open-nonblocking',
        reason: '직접 연결 문장은 유익하지만 현행 원고가 핵심 시스템 경계와 학습 목표를 충족하고 C/I/fatal 0 및 17/18을 확보했습니다.',
        follow_up_location: 'src/content/docs/01-mental-models/software-is-a-system.md#한-문장-정의 및 #시스템을-보는-여섯-렌즈',
      },
      {
        id: 'R01-M02',
        severity: 'Minor',
        decision: 'accept-current',
        status: 'open-nonblocking',
        reason: '첫 등장 마찰은 있지만 인접 한국어 설명·alt·용어집·캡스톤 정의가 의미를 보충해 핵심 경계 오류가 아닙니다.',
        follow_up_location: 'src/content/docs/01-mental-models/software-is-a-system.md#두-사례로-책임-차이-보기 및 #보조-비교-교육용-주가-fixture-대시보드',
      },
    ],
    summary: {
      findings_total: 2,
      adjudicated: 2,
      open_findings: { critical: 0, important: 0, minor: 2 },
      rereview_required: false,
      rereview_state: 'not-required-metadata-only',
      release_ready: false,
      next_row: 'R02-input-freeze',
    },
  };
  if (adjudication !== undefined && JSON.stringify(adjudication) !== JSON.stringify(expectedAdjudication)) errors.push('R01 adjudication exact semantics mismatch');

  if (row?.result_path !== r01ResultPath || row?.adjudication_path !== r01AdjudicationPath) errors.push('R01 closeout evidence path mismatch');
  for (const [key, value] of Object.entries({
    reviewed_target_sha256: expectedR01ReviewedTargetSha256,
    current_target_sha256: expectedR01CurrentTargetSha256,
    result_sha256: expectedR01ResultSha256,
    adjudication_sha256: expectedR01AdjudicationSha256,
  })) {
    if (row?.review_state?.[key] !== value) errors.push(`R01 closeout ${key} mismatch`);
  }
  return errors;
}

export function validateR01Bundle(matrix, requestDocument, request, root = repositoryRoot, options = {}) {
  const errors = [];
  const row = matrix.rows?.find(candidate => candidate.id === 'R01');
  const expectedRequestKeys = ['schema_version', 'campaign', 'review_id', 'slug', 'baseline_commit', 'request_path', 'contract', 'planned_profile', 'reviewer_conditions', 'target_questions', 'non_goals', 'contract_application', 'direct_inputs', 'context_excerpts', 'combined_sha256_rule', 'official_source_evidence', 'source_freshness_boundary', 'execution_state'];
  if (JSON.stringify(Object.keys(request ?? {}).sort()) !== JSON.stringify(expectedRequestKeys.sort())) errors.push('request keys mismatch');
  const expectedMetadata = {
    schema_version: 1,
    campaign: 'public-beta-1-m5',
    review_id: 'R01',
    slug: 'software-system',
    baseline_commit: r01BaselineCommit,
    request_path: r01RequestPath,
  };
  for (const [key, value] of Object.entries(expectedMetadata)) if (JSON.stringify(request?.[key]) !== JSON.stringify(value)) errors.push(`request ${key === 'baseline_commit' ? 'baseline commit' : key} mismatch`);
  if (JSON.stringify(request?.contract) !== JSON.stringify({ path: `${reviewRoot}/codex-review-contract.md`, version: '2026-09-05-two-layer-codex' })) errors.push('request contract mismatch');
  if (JSON.stringify(request?.planned_profile) !== JSON.stringify({ model: 'gpt-6-astra', reasoning_effort: 'high' })) errors.push('request planned profile mismatch');
  const expectedClauses = Array.from({ length: 12 }, (_, index) => `C${String(index + 1).padStart(2, '0')}`);
  if (JSON.stringify(request?.contract_application?.clauses) !== JSON.stringify(expectedClauses)) errors.push('request C01-C12 application mismatch');
  if (JSON.stringify(request?.contract_application?.rubric) !== JSON.stringify({ items: 9, maximum: 18, pass_minimum: 15 }) || request?.contract_application?.fatal_zero_required !== true) errors.push('request rubric or fatal-zero mismatch');
  const expectedSections = ['검토 범위와 실제 읽은 입력', '판정과 건수', '위치별 finding', '9항목 루브릭과 치명 항목', '미확인 사실·남은 위험·검토 한계', '재확인 기준'];
  if (JSON.stringify(request?.contract_application?.output_sections) !== JSON.stringify(expectedSections)) errors.push('request six-section output mismatch');
  const reviewer = request?.reviewer_conditions ?? {};
  if (JSON.stringify(Object.keys(reviewer).sort()) !== JSON.stringify(['context', 'independence', 'access', 'response', 'prohibited'].sort())) errors.push('request reviewer condition keys mismatch');
  if (reviewer.context !== 'fresh' || reviewer.independence !== 'controller·작성자·이전 대화 이력과 분리된 fresh Codex reviewer' || reviewer.access !== 'read-only-fixed-inputs' || reviewer.response !== 'response-only') errors.push('request reviewer conditions mismatch');
  const expectedProhibited = ['파일 수정', 'Git', '셸/Bash', '테스트 실행', '웹·네트워크', 'MCP', '플러그인', '스킬', '하위 에이전트', '외부 상태 변경'];
  if (JSON.stringify(reviewer.prohibited) !== JSON.stringify(expectedProhibited)) errors.push('request prohibited operations mismatch');
  const expectedBlockedConditions = ['C05 tracked source-evidence 입력 누락·해시·schema·confirmed claim-family 불일치', '입력 누락·미독', '개별 또는 결합 SHA-256 불일치', '기준 SHA 불일치', '실제 모델·reasoning effort 미확인', '읽기 전용·response-only 위반', '출력 상한 또는 중간 종료'];
  if (JSON.stringify(Object.keys(request?.contract_application ?? {}).sort()) !== JSON.stringify(['clauses', 'rubric', 'fatal_zero_required', 'finding_severities', 'output_sections', 'blocked_when'].sort())) errors.push('request contract application keys mismatch');
  if (JSON.stringify(request?.contract_application?.blocked_when) !== JSON.stringify(expectedBlockedConditions)) errors.push('request blocked conditions mismatch');
  if (!Array.isArray(request?.target_questions) || request.target_questions.length !== 5 || !Array.isArray(request?.non_goals) || request.non_goals.length !== 5) errors.push('request questions or non-goals mismatch');
  const expectedExecutionState = { review: 'not-run', actual_invocation: 'not-run', observed_model: 'not-confirmed', observed_reasoning_effort: 'not-confirmed', result: 'not-run', adjudication: 'not-run', rereview: 'not-run', valid_independent_evidence: false, open_findings: { critical: 'not-assessed', important: 'not-assessed', minor: 'not-assessed' }, release_ready: false };
  if (JSON.stringify(request?.execution_state) !== JSON.stringify(expectedExecutionState)) errors.push('request execution state mismatch');
  const expectedFraming = "UTF-8 'sha256-framed-bytes-v1\\n' 뒤에 각 파일마다 UTF-8 'path-bytes:<경로 바이트 수>\\n', 경로 바이트, UTF-8 '\\ncontent-bytes:<내용 바이트 수>\\n', 원시 파일 바이트, UTF-8 '\\n'을 순서대로 연결합니다.";
  const expectedSelfReferenceBoundary = '요청서 자체에는 요청서 SHA-256과 결합 SHA-256을 쓰지 않고 review-matrix R01 review_state에만 기록합니다.';
  if (JSON.stringify(Object.keys(request?.combined_sha256_rule ?? {}).sort()) !== JSON.stringify(['name', 'algorithm', 'order', 'framing', 'self_reference_boundary'].sort())) errors.push('request combined SHA-256 rule keys mismatch');
  if (request?.combined_sha256_rule?.name !== 'sha256-framed-bytes-v1' || request?.combined_sha256_rule?.algorithm !== 'SHA-256' || JSON.stringify(request?.combined_sha256_rule?.order) !== JSON.stringify(['요청서 자체', 'direct_inputs 배열 순서']) || request?.combined_sha256_rule?.self_reference_boundary !== expectedSelfReferenceBoundary) errors.push('request combined SHA-256 rule mismatch');
  if (request?.combined_sha256_rule?.framing !== expectedFraming) errors.push('request combined SHA-256 framing mismatch');
  const expectedOfficialSourceEvidence = {
    state: 'input-fixed',
    confirmation: 'confirmed',
    review_ready: true,
    artifact_path: r01SourceEvidencePath,
    checked_at: '2026-09-12',
    checked_at_meaning: 'access-date-not-publication-date',
    claim_mapping_state: 'exact',
    claim_mapping_family_count: 10,
    confirmed_claim_families: expectedR01ClaimFamilies,
    not_confirmed_boundaries: ['SWEBOK-BASE-FAIL-01', 'SWEBOK-TOPICS-FAIL-01'],
    freshness_boundary: '2026-09-12 접근 결과만 고정하며 source-map의 과거 확인일을 갱신하거나 실패한 IEEE HTML 본문을 확인된 것으로 재분류하지 않습니다.',
  };
  if (JSON.stringify(request?.official_source_evidence) !== JSON.stringify(expectedOfficialSourceEvidence)) errors.push('request official source evidence boundary mismatch');
  if (request?.source_freshness_boundary !== '2026-09-12는 이 tracked 발췌 파일의 접근일이며 문서 발행일이 아닙니다. `unversioned current`는 그날 관찰한 상태일 뿐 영구 상태가 아니며, source-map의 2026-08-04·2026-08-13 기록은 수정하거나 갱신하지 않습니다.') errors.push('request source freshness boundary mismatch');

  let sourceEvidenceDocument = options.sourceEvidenceDocument;
  if (sourceEvidenceDocument === undefined) {
    const sourceEvidenceAbsolute = resolve(root, r01SourceEvidencePath);
    if (!existsSync(sourceEvidenceAbsolute)) errors.push(`missing source evidence: ${r01SourceEvidencePath}`);
    else sourceEvidenceDocument = readFileSync(sourceEvidenceAbsolute, 'utf8');
  }
  let sourceEvidence = options.sourceEvidence;
  if (sourceEvidence === undefined && sourceEvidenceDocument !== undefined) {
    try {
      sourceEvidence = extractJsonBlock(sourceEvidenceDocument, 'm5-r01-source-evidence:data');
    } catch {
      sourceEvidence = undefined;
    }
  }
  if (sourceEvidenceDocument !== undefined) errors.push(...validateR01SourceEvidence(sourceEvidenceDocument, sourceEvidence));

  const direct = request?.direct_inputs ?? [];
  const directDescriptors = direct.map(({ id, role, path, read_mode, evidence_scope }) => ({ id, role, path, read_mode, ...(evidence_scope ? { evidence_scope } : {}) }));
  if (JSON.stringify(directDescriptors) !== JSON.stringify(expectedR01DirectInputs)) errors.push('direct input contract mismatch');
  for (const [index, input] of direct.entries()) {
    const expectedInput = expectedR01DirectInputs[index];
    const expectedKeys = expectedInput?.evidence_scope ? ['id', 'role', 'path', 'sha256', 'read_mode', 'evidence_scope'] : ['id', 'role', 'path', 'sha256', 'read_mode'];
    if (JSON.stringify(Object.keys(input).sort()) !== JSON.stringify(expectedKeys.sort())) errors.push(`direct input keys mismatch: ${input.id}`);
    if (localDirectEvidenceHashes.has(input.id)) {
      if (input.sha256 !== localDirectEvidenceHashes.get(input.id)) errors.push(`local direct evidence declared hash mismatch: ${input.id}`);
      continue;
    }
    const absolute = resolve(root, input.path ?? '');
    if (!existsSync(absolute)) {
      errors.push(`missing direct input: ${input.path}`);
      continue;
    }
    let bytes = input.id === 'official-source-evidence' && options.sourceEvidenceDocument !== undefined ? Buffer.from(options.sourceEvidenceDocument, 'utf8') : readFileSync(absolute);
    if (input.id === 'target-manuscript') {
      bytes = preReadyBytes(input.path,bytes);
      const reconstructed = reconstructR01ReviewedTarget(bytes.toString('utf8'));
      if (reconstructed === undefined) {
        errors.push('R01 metadata-only target transition mismatch');
        continue;
      }
      bytes = Buffer.from(reconstructed, 'utf8');
    }
    if (input.read_mode !== expectedInput?.read_mode) errors.push(`direct input read mode mismatch: ${input.path}`);
    if (input.sha256 !== sha256(bytes)) errors.push(`direct input hash mismatch: ${input.path}`);
  }

  const excerpts = request?.context_excerpts ?? [];
  if (JSON.stringify(excerpts.map(({ id, path }) => ({ id, path }))) !== JSON.stringify(expectedR01ContextExcerpts.map(({ id, path }) => ({ id, path })))) errors.push('context excerpt contract mismatch');
  for (const [index, excerpt] of excerpts.entries()) {
    const expectedExcerpt = expectedR01ContextExcerpts[index];
    const excerptKeys = ['id', 'role', 'path', 'sha256', 'segments', 'omitted_scope', 'generalization_boundary'];
    if (JSON.stringify(Object.keys(excerpt).sort()) !== JSON.stringify(excerptKeys.sort())) errors.push(`context excerpt keys mismatch: ${excerpt.id}`);
    const excerptDescriptor = {
      id: excerpt.id,
      path: excerpt.path,
      role: excerpt.role,
      segments: (excerpt.segments ?? []).map(({ label, start_line, end_line }) => ({ label, start_line, end_line })),
    };
    if (JSON.stringify(excerptDescriptor) !== JSON.stringify(expectedExcerpt)) errors.push(`context excerpt semantic mismatch: ${excerpt.id}`);
    if (!excerpt.role || !excerpt.omitted_scope || !excerpt.generalization_boundary) errors.push(`context excerpt boundary missing: ${excerpt.id}`);
    if (!Array.isArray(excerpt.segments) || excerpt.segments.length === 0) {
      errors.push(`context excerpt segments missing: ${excerpt.id}`);
      continue;
    }
    for (const segment of excerpt.segments) if (JSON.stringify(Object.keys(segment).sort()) !== JSON.stringify(['label', 'start_line', 'end_line', 'text'].sort())) errors.push(`context excerpt segment keys mismatch: ${excerpt.id}`);
    if (localContextEvidenceHashes.has(excerpt.id)) {
      if (excerpt.sha256 !== localContextEvidenceHashes.get(excerpt.id)) errors.push(`local context evidence declared hash mismatch: ${excerpt.id}`);
      continue;
    }
    const absolute = resolve(root, excerpt.path ?? '');
    if (!existsSync(absolute)) {
      errors.push(`missing context source: ${excerpt.path}`);
      continue;
    }
    const sourceDocument = r02HistoricalBytes(excerpt.path, readFileSync(absolute)).toString('utf8');
    const sourceLines = sourceDocument.split('\n');
    const expectedSharedSourceHash = expectedR01SharedContextSourceHashes.get(excerpt.id);
    if (expectedSharedSourceHash !== undefined) {
      if (excerpt.sha256 !== expectedSharedSourceHash) errors.push(`context source hash mismatch: ${excerpt.path}`);
    } else if (excerpt.sha256 !== sha256(Buffer.from(sourceDocument, 'utf8'))) {
      errors.push(`context source hash mismatch: ${excerpt.path}`);
    }
    for (const segment of excerpt.segments) {
      const start = segment.start_line;
      const end = segment.end_line;
      if (!Number.isInteger(start) || !Number.isInteger(end) || start < 1 || end < start || end > sourceLines.length) {
        errors.push(`context excerpt range mismatch: ${excerpt.id}`);
        continue;
      }
      const observedText = sourceLines.slice(start - 1, end).join('\n');
      const comparableText = expectedSharedSourceHash === undefined ? observedText : reconstructR01ReviewedContext(excerpt.id, observedText);
      if (segment.text !== comparableText) errors.push(`context excerpt content mismatch: ${excerpt.id}`);
    }
  }

  try {
    const embedded = extractJsonBlock(requestDocument, 'm5-r01-review-request:data');
    if (JSON.stringify(embedded) !== JSON.stringify(request)) errors.push('request marker payload mismatch');
  } catch (error) {
    errors.push(`request marker invalid: ${error.message}`);
  }
  if (row?.request_path !== r01RequestPath) errors.push('R01 request path mismatch');
  const requestSha256 = sha256(Buffer.from(requestDocument, 'utf8'));
  if (row?.review_state?.request_sha256 !== requestSha256) errors.push('R01 request SHA-256 mismatch');
  if (row?.review_state?.combined_sha256 !== expectedR01CombinedSha256) errors.push('R01 combined SHA-256 mismatch');
  if (options.localEvidence === true) {
    errors.push(...validateLocalEvidence(request, root));
    const combinedEntries = [{ path: r01RequestPath, bytes: Buffer.from(requestDocument, 'utf8') }];
    let complete = true;
    for (const input of direct) {
      const absolute = resolve(root, input.path ?? '');
      if (!existsSync(absolute)) {
        complete = false;
        continue;
      }
      try {
        let bytes = readFileSync(absolute);
        if (input.id === 'target-manuscript') {
          const reconstructed = reconstructR01ReviewedTarget(bytes.toString('utf8'));
          if (reconstructed === undefined) {
            complete = false;
            continue;
          }
          bytes = Buffer.from(reconstructed, 'utf8');
        }
        combinedEntries.push({ path: input.path, bytes });
      } catch {
        complete = false;
      }
    }
    if (!complete) errors.push('R01 combined SHA-256 unavailable because local evidence is incomplete');
    else if (row?.review_state?.combined_sha256 !== calculateFramedSha256(combinedEntries)) errors.push('R01 combined SHA-256 mismatch');
  }
  return errors;
}

export function validateAttemptLog(log) {
  const errors = [];
  if (log.schema_version !== 1 || log.campaign !== 'public-beta-1-m5') errors.push('attempt log schema or campaign mismatch');
  const records = log.records ?? [];
  if (records.length !== 2) errors.push('attempt log must preserve the 2026-08-28 and 2026-09-05 preflight-only records before model execution');
  const historicalRecord = {
    attempt_id: 'preflight-2026-08-28',
    attempt_kind: 'preflight-only',
    review_id: 'M5-preflight',
    scope: 'Task22 실행 자격 확인이며 R01~R26 행 시도가 아님',
    source: `${reviewRoot}/claude-preflight-2026-08-28.md`,
    requested_model: 'claude-opus-4-8[1m]',
    requested_context: '1M',
    requested_effort: 'high',
    actual_invocation: 'not-run',
    model_call_count: 0,
    start: 'not-run',
    end: 'not-run',
    exit_code: 'not-run',
    observed_model: 'not-confirmed',
    observed_context: 'not-confirmed',
    observed_effort: 'not-confirmed',
    completion: '사전 조건 차단',
    failure_stage: 'subscription-only eligibility preflight',
    tools: 'not-run',
    permission_events: 'not-run',
    web_events: 'not-run',
    status: 'blocked',
    block_reason: 'subscription_unverified',
    input_manifest: 'not-fixed',
    combined_sha256_before: 'not-fixed',
    combined_sha256_after: 'not-run',
    input_unchanged: 'not-confirmed',
    result_path: '없음',
    valid_independent_evidence: false,
    resume_condition: '정확한 모델·1M·high가 동일 구독의 포함 사용량만 소비하고 구독 외 과금 경로를 사용하지 않음을 비민감 방식으로 입증한 뒤, 선행 게이트를 닫은 행 하나의 입력만 고정합니다.',
  };
  const latestRecord = {
    ...historicalRecord,
    attempt_id: 'preflight-2026-09-05',
    scope: 'Task22 Step2 비모델 인증 사전 확인이며 R01~R26 행 시도가 아님',
    source: `${reviewRoot}/claude-preflight-2026-09-05.md`,
    failure_stage: 'authentication preflight',
    block_reason: 'auth',
    resume_condition: '푸디님이 동일 구독 계정 로그인을 직접 복구한 뒤 정확한 Opus4.8·1M·high가 구독 포함 사용량만 소비하고 구독 외 과금 경로를 사용하지 않음을 비민감 방식으로 입증한 뒤 행 하나의 입력만 고정합니다.',
  };
  const expectedRecords = [historicalRecord, latestRecord];
  if (JSON.stringify(records.map(record => record?.attempt_id)) !== JSON.stringify(expectedRecords.map(record => record.attempt_id))) errors.push('attempt record order mismatch');
  for (const [index, expected] of expectedRecords.entries()) {
    const record = records[index] ?? {};
    if (JSON.stringify(Object.keys(record).sort()) !== JSON.stringify(Object.keys(expected).sort())) errors.push(`attempt record ${index} keys mismatch`);
    for (const [key, value] of Object.entries(expected)) if (JSON.stringify(record[key]) !== JSON.stringify(value)) errors.push(`attempt record ${index} ${key} mismatch`);
  }
  if (records.reduce((sum, record) => sum + record.model_call_count, 0) !== 0) errors.push('attempt log model_call_count total mismatch');
  return errors;
}

// This pin protects the reviewed candidate, not a completed M5 review. A new
// input revision requires explicit review; rematching caller hashes is not enough.
export function validateR02Candidate(root = repositoryRoot, options = {}) {
  const errors = [];
  const requestPath = 'docs/project/reviews/public-beta-1/r02-client-server-request.md';
  const manifestPath = 'docs/project/reviews/public-beta-1/r02-client-server-input-manifest.json';
  const expected = {
    schema_version: 1, review_id: 'R02', state: 'candidate-fixed',
    baseline_commit: 'e2439993ef936fadcc5f380e787041f77ffcd63e',
    request_path: requestPath,
    request_sha256: '8c9fabeba1d2273e328278335e5ed008c16b98f74989e815e76e34b69eb0a68f',
    combined_sha256_rule: 'sha256-framed-bytes-v1',
    combined_sha256: 'cbc991605e63845f28ddedd0bd942ac48bd6df31262341056caf62da588aba95',
    direct_input_count: 23, context_excerpt_count: 19, render_state_count: 18,
    matrix_binding: 'not-integrated', review_ready: false, actual_review: 'not-run',
  };
  const load = (path, label) => {
    try { return r02HistoricalBytes(path, readFileSync(resolve(root, path))); }
    catch { errors.push(`R02 candidate ${label} unavailable`); return undefined; }
  };
  const requestBytes = load(requestPath, 'request');
  if (!requestBytes) return { errors };
  if (sha256(requestBytes) !== expected.request_sha256) return { errors: ['R02 candidate request hash mismatch'] };
  const request = extractJsonBlock(requestBytes.toString('utf8'), 'm5-r02-review-request:data');
  const manifestBytes = load(manifestPath, 'manifest');
  if (manifestBytes) {
    try {
      const actual = JSON.parse(manifestBytes.toString('utf8'));
      if (JSON.stringify(Object.keys(actual).sort()) !== JSON.stringify(Object.keys(expected).sort())
        || Object.entries(expected).some(([key, value]) => actual[key] !== value)) errors.push('R02 candidate manifest mismatch');
    } catch { errors.push('R02 candidate manifest malformed'); }
  }
  const entries = [{ path: requestPath, bytes: requestBytes }];
  for (const input of request.direct_inputs) {
    const local = input.read_mode === 'binary-full';
    if (local && !options.localEvidence) continue;
    const bytes = load(input.path, local ? 'local PNG' : 'input');
    if (!bytes) continue;
    if (sha256(bytes) !== input.sha256 || bytes.length !== input.bytes) errors.push(`R02 candidate ${local ? 'local PNG' : 'input'} hash/size mismatch: ${input.id}`);
    if (local && (bytes.length < 24 || !bytes.subarray(0, 8).equals(pngSignature)
      || bytes.readUInt32BE(16) !== input.dimensions.width || bytes.readUInt32BE(20) !== input.dimensions.height)) errors.push(`R02 candidate local PNG signature/dimensions mismatch: ${input.id}`);
    entries.push({ path: input.path, bytes });
  }
  for (const context of request.context_excerpts) {
    const local = context.path.startsWith('.superpowers/');
    if (local && !options.localEvidence) continue;
    const bytes = load(context.path, local ? 'local context' : 'context');
    if (!bytes) continue;
    let document = bytes.toString('utf8');
    // Reconstruct only the explicitly approved current-state overlay; all other historical bytes remain pinned.
    if (context.id === 'matrix-allocation') document = document.replace(`${r02CurrentNote}\n\n`, '').replace(`,\n      "review_state": ${JSON.stringify(expectedR02ReviewState)}`, '');
    if (context.path === 'research/source-map.md') document = document.split('\n## 2026-10-15 Task22 R02 실행 전 현재성 재확인\n')[0];
    const historical = context.id === 'matrix-allocation'
      ? Buffer.from(document.split('\n## R02 입력 후보 체크포인트\n')[0])
      : Buffer.from(document);
    if (sha256(historical) !== context.sha256) errors.push(`R02 candidate context hash mismatch: ${context.id}`);
    const lines = document.split('\n');
    for (const segment of context.segments) {
      if (lines.slice(segment.start_line - 1, segment.end_line).join('\n') !== segment.text) errors.push(`R02 candidate context excerpt mismatch: ${context.id}`);
    }
  }
  if (options.localEvidence) {
    const provenance = request.render_provenance;
    const bytes = load(provenance.manifest_path, 'local manifest');
    if (bytes && sha256(bytes) !== provenance.manifest_sha256) errors.push('R02 candidate local manifest hash mismatch');
    if (entries.length !== 24 || calculateFramedSha256(entries) !== expected.combined_sha256) errors.push('R02 candidate local combined hash mismatch');
  }
  return { errors, summary: {
    state: errors.length ? 'invalid' : 'candidate-fixed',
    directInputs: 23, contextExcerpts: 19,
    localEvidence: options.localEvidence ? (errors.length ? 'failed' : 'verified') : 'not-checked',
    reviewReady: false,
  } };
}

export function validateR02Execution(root = repositoryRoot, options = {}) {
  const errors = [];
  const requestPath = expectedR02ReviewState.execution_request_path;
  const manifestPath = expectedR02ReviewState.execution_manifest_path;
  const candidatePath = 'docs/project/reviews/public-beta-1/r02-client-server-request.md';
  const sourcePath = 'research/public-beta-review-source-excerpts/r02-client-server-2026-10-15.md';
  const load = (path, label) => {
    try { return r02HistoricalBytes(path, readFileSync(resolve(root, path))); }
    catch { errors.push(`R02 execution ${label} unavailable`); return undefined; }
  };
  const candidateBytes = load(candidatePath, 'candidate');
  // Never parse paths from an unpinned candidate.
  if (!candidateBytes || sha256(candidateBytes) !== '8c9fabeba1d2273e328278335e5ed008c16b98f74989e815e76e34b69eb0a68f') return { errors: [...errors, 'R02 execution candidate hash mismatch'] };
  const candidate = extractJsonBlock(candidateBytes.toString('utf8'), 'm5-r02-review-request:data');
  const expectedEntries = [
    { path: requestPath, sha256: '8c47b1fd4cb51c01078cfa411d766dbff227153392555f4c43f4c6945e29e2fb' },
    { path: candidatePath, sha256: sha256(candidateBytes) },
    ...candidate.direct_inputs.map(({ path, sha256 }) => ({ path, sha256 })),
    { path: sourcePath, sha256: '1a04fff3fb8b52a74c076337dc4a6ddb549584dbd6db294f7efcf04f1873e769' },
  ];
  const expected = {
    schema_version: 1, review_id: 'R02', baseline_commit: '6985e22a98430b120b67dd6b569a91cc2b967da7',
    state: 'input-fixed', source_checked_at: '2026-10-15',
    planned_profile: { model: 'gpt-6-astra', reasoning_effort: 'high' },
    actual_review: 'not-run', release_ready: false, entries: expectedEntries,
    combined_sha256_rule: 'sha256-framed-bytes-v1', combined_sha256: expectedR02ReviewState.combined_sha256,
  };
  const manifestBytes = load(manifestPath, 'manifest');
  if (manifestBytes) {
    try {
      const actual = JSON.parse(manifestBytes.toString('utf8'));
      if (JSON.stringify(Object.keys(actual).sort()) !== JSON.stringify(Object.keys(expected).sort())
        || Object.entries(expected).some(([key, value]) => JSON.stringify(actual[key]) !== JSON.stringify(value))) errors.push('R02 execution manifest mismatch');
    } catch { errors.push('R02 execution manifest malformed'); }
  }
  const entries = [];
  const localPaths = new Set(candidate.direct_inputs.filter(input => input.read_mode === 'binary-full').map(input => input.path));
  for (const input of expectedEntries) {
    if (localPaths.has(input.path) && !options.localEvidence) continue;
    const label = input.path === requestPath ? 'request' : input.path === sourcePath ? 'source' : 'input';
    const bytes = load(input.path, label);
    if (!bytes) continue;
    if (sha256(bytes) !== input.sha256) errors.push(`R02 execution ${label} hash mismatch`);
    entries.push({ path: input.path, bytes });
  }
  if (options.localEvidence && (entries.length !== 26 || calculateFramedSha256(entries) !== expected.combined_sha256)) errors.push('R02 execution local combined hash mismatch');
  return { errors, summary: {
    state: errors.length ? 'invalid' : 'input-fixed', actualReview: 'not-run',
    localEvidence: options.localEvidence ? (errors.length ? 'failed' : 'verified') : 'not-checked',
    releaseReady: false,
  } };
}

export function validateFiles(root = repositoryRoot, options = {}) {
  const matrixDocument = readFileSync(resolve(root, matrixPath), 'utf8');
  const matrix = extractJsonBlock(matrixDocument, 'm5-review-matrix:data');
  const attemptLog = extractJsonBlock(readFileSync(resolve(root, attemptLogPath), 'utf8'), 'm5-claude-attempt-log:data');
  const requestDocument = readFileSync(resolve(root, r01RequestPath), 'utf8');
  const request = extractJsonBlock(requestDocument, 'm5-r01-review-request:data');
  const sourceEvidenceDocument = readFileSync(resolve(root, r01SourceEvidencePath), 'utf8');
  const sourceEvidence = extractJsonBlock(sourceEvidenceDocument, 'm5-r01-source-evidence:data');
  const r02Candidate = validateR02Candidate(root, options);
  const r02Execution = validateR02Execution(root, options);
  return { matrix, attemptLog, request, requestDocument, sourceEvidence, sourceEvidenceDocument, r02Candidate: r02Candidate.summary, r02Execution: r02Execution.summary, localEvidenceRequested: options.localEvidence === true, errors: [...validateMatrixDocument(matrixDocument), ...validateMatrix(matrix, root), ...validateAttemptLog(attemptLog), ...validateR01Bundle(matrix, requestDocument, request, root, { ...options, sourceEvidence, sourceEvidenceDocument }), ...validateR01Closeout(matrix, root), ...r02Candidate.errors, ...r02Execution.errors, ...validateR02Closeout(root), ...validateR03Closeout(root), ...validateR04Closeout(root), ...validateR05Closeout(root), ...validateR06Closeout(root), ...validateR07Closeout(root), ...validateR08Closeout(root), ...validateR09Closeout(root), ...validateR10Closeout(root), ...validateR11Closeout(root), ...validateR12Closeout(root), ...validateR13Closeout(root), ...validateR14Closeout(root), ...validateR15Closeout(root), ...validateR16Closeout(root), ...validateR17Closeout(root), ...validateR18Closeout(root), ...validateR19Closeout(root), ...validateR20Closeout(root), ...validateR21Closeout(root), ...validateR22Closeout(root), ...validateR23Closeout(root), ...validateR24Closeout(root), ...validateR25Closeout(root), ...validateR26Closeout(root)] };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const args = process.argv.slice(2);
    const unknownFlags = args.filter(argument => argument.startsWith('-') && argument !== '--local-evidence');
    const rootArguments = args.filter(argument => !argument.startsWith('-'));
    if (unknownFlags.length > 0 || rootArguments.length > 1) throw new Error('usage: validate-m5-review-matrix.mjs [--local-evidence] [repository-root]');
    const localEvidence = args.includes('--local-evidence');
    const result = validateFiles(rootArguments[0] ? resolve(rootArguments[0]) : repositoryRoot, { localEvidence });
    const summary = { rows: result.matrix.rows.length, allocatedPublicInputs: result.matrix.coverage.r01_r25_unique, inputFixedRows: result.matrix.rows.filter(row => row.review_state?.input_manifest_state === 'input-fixed').map(row => row.id), inputIncompleteRows: result.matrix.rows.filter(row => row.review_state?.input_manifest_state === 'input-incomplete').map(row => row.id), completedCodexRows: result.matrix.rows.filter(row => row.review_state?.status === 'done').map(row => row.id), localEvidenceValidation: localEvidence ? 'requested' : 'not-requested', historicalClaudeModelCallCount: result.attemptLog.records.reduce((sum, record) => sum + record.model_call_count, 0), errors: result.errors };
    summary.r02Candidate = result.r02Candidate ?? { state: 'invalid', reviewReady: false };
    summary.r02Execution = result.r02Execution ?? { state: 'invalid', actualReview: 'not-run', releaseReady: false };
    summary.r02Current = result.matrix.rows.find(row => row.id === 'R02')?.review_state;
    process.stdout.write(`${JSON.stringify(summary)}\n`);
    if (result.errors.length) process.exitCode = 1;
  } catch (error) {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  }
}
