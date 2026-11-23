import {readFileSync} from 'node:fs';
import {hasLearningDiagramReference} from './content-validation.mjs';
import {beforeTask23Summary} from './task23-summary-history.mjs';
import {resolve} from 'node:path';
import {createHash} from 'node:crypto';
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
export const r26State = {
  "status": "done",
  "required_review_state": "통과",
  "release_ready": false,
  "input_manifest_state": "input-fixed",
  "individual_sha256_state": "fixed",
  "actual_invocation": "completed",
  "observed_model_context_effort": "gpt-6-astra/xhigh; fresh initial/read-only; same persisted session resumed",
  "historical_verdict": "BLOCKED",
  "initial_runner_exit": 1,
  "evidence_followup_verdict": "BLOCKED",
  "result_state": "pass-via-fix1-prior-blocked-preserved",
  "adjudication_state": "complete",
  "valid_independent_evidence": true,
  "open_findings": {
    "critical": 0,
    "important": 0,
    "minor": 5
  },
  "open_ids": [
    "R01-M01",
    "R01-M02",
    "R05-M01",
    "R05-CO-M01",
    "R02-CO-M01"
  ],
  "combined_sha256": "c2a8d1a78854a7762133d90897b57e27e4b3312e3656834e4efb30d364d8f67a",
  "fix1_pin": "7578c67741c6c4d16b451abf2798f77a7df312a7374ae9d5f62e4e589ab96d3b",
  "fix1_commit": "f169ecc6f66f44ee4159f900d69534890c6c18b4",
  "closeout_path": "docs/project/reviews/public-beta-1/r26-controller-closeout.md"
};
const edits = [
  {
    "path": "PROJECT_CONTEXT.md",
    "before": "1a9543bae518e91f125962f226ae709650d8c67dc74b1abd4987ce92efeaa824",
    "after": "6608a5a28f6e9069216cd4e1ce58e82c65d11062c94055cbe76b1a22496e9366",
    "ranges": [
      {
        "i": 2,
        "n": 2,
        "prev": []
      }
    ]
  },
  {
    "path": "ROADMAP.md",
    "before": "28a3615c5b9c1bebcac799bef64474abf638edb46d049bf906790bbfd1a25c4a",
    "after": "85a6ffa6aafc9ba9b502b9168c9df01848062d070dbbe35338e8d4b95156bcb2",
    "ranges": [
      {
        "i": 2,
        "n": 2,
        "prev": []
      }
    ]
  },
  {
    "path": "docs/project/reviews/public-beta-1/review-matrix.md",
    "before": "7f9253e4f19f7a6abbffcee7dbffb603ad7aa12505567152f035212ee9beae62",
    "after": "e99d21569a3f2f42c51edb7d10a777b70e8ec1abde8d7018e48feefb9cbdc0f4",
    "ranges": [
      {
        "i": 2,
        "n": 2,
        "prev": []
      },
      {
        "i": 91,
        "n": 1,
        "prev": [
          "| R26 | `integration` | 통합 | 별도 | 미착수 | pending | 대기 | false |"
        ]
      },
      {
        "i": 489,
        "n": 1,
        "prev": [
          "      \"implementation_state\": \"미착수\","
        ]
      },
      {
        "i": 499,
        "n": 2,
        "prev": [
          "      }"
        ]
      }
    ]
  },
  {
    "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
    "before": "62d94080d5e7fa098f314b7421aed8df1d220a525f02d63b64dfdfe5febb9e8c",
    "after": "2d410ce4fde945f414b4307e905a7ed94bd576eff36e23698ecde2b5617f6317",
    "ranges": [
      {
        "i": 142,
        "n": 1,
        "prev": [
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R25 완료, R26 검토 및 통합 미완료 |"
        ]
      },
      {
        "i": 154,
        "n": 2,
        "prev": []
      },
      {
        "i": 1610,
        "n": 1,
        "prev": [
          "| - [ ] | R26 `integration` | R01~R25 전체 공개59개, R01~R25 결과·재판정·재검토, 콘텐츠·source gap·시각 감사, `CONTENT_MAP.md` | 통합 | `public-beta-1/r26-integration-codex-review.md` | `public-beta-1/r26-integration-adjudication.md` |"
        ]
      }
    ]
  }
];
export const reviewedDocs = [
  ["src/content/docs/01-mental-models/abstraction-and-tradeoffs.md","39e01f64db9883c58de86b9fa22713fe092cab3e7e19a24cbbd65d1f42ea8126"],
  ["src/content/docs/01-mental-models/developer-thinking.md","6fa248d88d051549a677e35d6ab2a3ab0b97d3b5435b04678cb6dace73fe1184"],
  ["src/content/docs/01-mental-models/index.md","1560f6ee1fb9c1b8462036649712d763a1097bb71befe61cc4afd2b31eaf6399"],
  ["src/content/docs/01-mental-models/software-is-a-system.md","f086dc056630893c03b2a8c1a98304063bf1053eef26b25da7b587ae038bbc3d"],
  ["src/content/docs/02-work-environment/dependencies-package-managers-environments.md","017796aa03a0ad2e37ac33bb8d847fe11fa351bfb7ca7249b105ac6597a2ebfe"],
  ["src/content/docs/02-work-environment/files-folders-paths.md","df9f467541e9628f9805a82490ab5c02f6bf45bb586b3938510df6596cec7cd8"],
  ["src/content/docs/02-work-environment/index.md","1506eb8dd60c0442f5df810a07c71953b56e13b95c40dd042e164a1113bbaabf"],
  ["src/content/docs/02-work-environment/terminal-processes-ports.md","e4eabb8996442e78dae3dc9639fa3c009c88fbca7c90f516b626a33d5e92ab1a"],
  ["src/content/docs/03-full-stack/client-server-full-stack.md","38b6f61b9a981626245d26d75b5ded63b02b676d7e43442161953d8bc5f30282"],
  ["src/content/docs/03-full-stack/frontend-backend-boundary.md","f50bf106d5b3ee45ceffff3fca06eb2edca27aa9b1193af8d396c96161b023cd"],
  ["src/content/docs/03-full-stack/http-request-response.md","d90c0fe3dab7eba53c796c81491227edad717c8a1df890d9cd5c22d2c1e0b97c"],
  ["src/content/docs/03-full-stack/index.md","7e801b01d1e139c34f8b52612168d1c471830912d15a41f0bcb566461e1e4388"],
  ["src/content/docs/04-backend-data/api-database-auth.md","9f11f724ab45a4bb6fd779324dee100a5103e7cd5167afa912ab04561be6882f"],
  ["src/content/docs/04-backend-data/data-model-schema-migration.md","2bbe29c1fa3aaca28dc83d89ab1146176e2230974867a36bc4cf36ec8f6d086f"],
  ["src/content/docs/04-backend-data/index.md","94979407bed69dce08cf30aefed40362ae70a334fcfbb35b3d00ae26000e0aed"],
  ["src/content/docs/04-backend-data/state-cache-queue.md","dd00a9865c2865a1852f5c60d2fdbb0100f655db2c505810d192ddfe88ee2e4f"],
  ["src/content/docs/05-frontend/accessibility-responsive-design.md","f771876d195f11c237b1b548bec3d26056f6d1bf1e98b84df81fc0f91e97ef21"],
  ["src/content/docs/05-frontend/browser-dom-rendering.md","4d914c5e17c05a3683faa48bbe657ba7f655eb6a4595199bfeb09dc2fa37bfe9"],
  ["src/content/docs/05-frontend/index.md","f1fc8b591c7052593cc293ad93e5065d19218eb0d2c08a5ee9ff3ff40a6d2701"],
  ["src/content/docs/05-frontend/ui-state-and-ux.md","32e0a610adf75d6b9f4942c2cf8fb94980948ce346950e934660fcb57c2db5ad"],
  ["src/content/docs/06-requirements-design/adr-and-tradeoffs.md","a3b14ed20f674eb88379a33c0866ee3dadb3ce7d86cc88f748e5e49928885e06"],
  ["src/content/docs/06-requirements-design/architecture-and-frameworks.md","72798fd19f5e063a31f0ff56cb4ee8ecb59d49a67304a3a869a996ed420310d0"],
  ["src/content/docs/06-requirements-design/index.md","0b09a9281b0735a906b7e578e2103e1360ef7baca85d98fac0c8e91ff5babe48"],
  ["src/content/docs/06-requirements-design/prd-sdd-tdd.md","5b0c91327e30d694d5025e0f6b378f88406f616bce284e5c3a74b8e2fe67207d"],
  ["src/content/docs/07-workflow-methods/code-review-ci-cd.md","3d020021cfe50ddda9c219360b20361bac82b99b47e4135dbe4c6d1dbf0e25f4"],
  ["src/content/docs/07-workflow-methods/incremental-delivery.md","65f76f635bcec37285abb42b171734ca6899526418ba2113e836824685ae9be5"],
  ["src/content/docs/07-workflow-methods/index.md","d2d878921c3035339d79c3612b715e2587a5c51e278a3c01a235d4ab094f6fa2"],
  ["src/content/docs/07-workflow-methods/software-development-lifecycle.md","2939fcdcf0ef802f66d78c3c1903fb5a16f1a8008c618f51f7c444a26dc36381"],
  ["src/content/docs/08-quality/debugging-observability.md","edc46880d09b9bb0288ff76e8dd58f13eab67ade82a16d35530d17f55d90b0f6"],
  ["src/content/docs/08-quality/index.md","bf776df0c65c10b528a46a62ead8751c099a81f13ebde020769364229f66e9e0"],
  ["src/content/docs/08-quality/performance-security.md","3a4cf7084e72f2224cf38b0af9c4d4056bf0a0ae4d5442d7a6b1afe06dbcdedf"],
  ["src/content/docs/08-quality/testing-strategy.md","b5ac2191970ab30a261a1c530eb6eae050895bb17499ff0c6ca5388fbea5bbc9"],
  ["src/content/docs/09-git-github/branch-commit-pull-request.md","5d76d3aff4a4e330e5f87fc901666e084016bee5a2466038e29f7176f3664c09"],
  ["src/content/docs/09-git-github/git-and-github.md","e9a859657dc626c9ee734231c8a2ba59e666887ed764cb0b0b888001f57118c1"],
  ["src/content/docs/09-git-github/index.md","d31c2409ab4f0151330e61b2cda7c07acf9c21c823e91cccaf89ba571b5e9b37"],
  ["src/content/docs/09-git-github/undo-merge-conflict-release.md","3c39c8d3728e6a46c6ff88138e63eae8da1122ed48bea605e984d892d6132d30"],
  ["src/content/docs/10-deployment-operations/build-deploy-domain-dns.md","157c675aa181f355939e29963f62d9c246129ea800261256f004f5ce9195d28c"],
  ["src/content/docs/10-deployment-operations/environment-variables-config.md","24b23cb6ae0a2cdfdcf8e69f9a4ff80dbb8dccea7d0bf91370d28b2a6f1bb34b"],
  ["src/content/docs/10-deployment-operations/index.md","9d9857b8ca69593b2526013e688c4a4149d6cab51160e4301727510db948809c"],
  ["src/content/docs/10-deployment-operations/logs-monitoring-backup.md","17aa3d355ad4432d1fda08fade29284442bdb6f07bcb6340721df0bae9437975"],
  ["src/content/docs/11-ai-native/agent-review-and-verification.md","b362a31b7397b97b7f4652bf0b6c9e5ffd696d7f8c9e4c634711b3400d992741"],
  ["src/content/docs/11-ai-native/context-spec-harness-loop.md","b0b441d1bde4ac968d75561523834bee6f36cd22384cedf83aab6018f6b1e725"],
  ["src/content/docs/11-ai-native/index.md","69f9aa4418857a1fbe0fcc2e364599bb0fd71d17eebeb12f6383e8fb65c156aa"],
  ["src/content/docs/11-ai-native/permissions-sandbox-worktrees.md","1ecd6f175210d466e67a9bab10c5b309948dcd28449644b62a7ba9fcb3642faa"],
  ["src/content/docs/11-ai-native/working-with-coding-agents.md","ac63eb2a468416b43c57432ac4297e0af3c27edf6d694b86a40bca7131311711"],
  ["src/content/docs/12-case-studies/analytics-dashboard-case-study.md","b92022a372822ffa44cf28d67f4decf85ed5e6f79bb85a657d71b4df890e1238"],
  ["src/content/docs/12-case-studies/first-full-stack-project.md","c492b1be6c3f7f85287de61c32c3e0f959c98c48e7959a8ced35b9e3c01c4851"],
  ["src/content/docs/12-case-studies/index.md","467a69706d3088eb7cda2149ba0524ba170911fbd9fa6a0dbfd16d3c1521ae10"],
  ["src/content/docs/index.md","af2b371b4308292f4f855d22ac3e33f505598338f3f0ff4b67bc6b9b87ce65d2"],
  ["src/content/docs/reference/agent-output-glossary.md","f482d9aa06fa8bd19d647b9fdc5bf9356b293bb7362b1727a6dd5fb6cdd239b2"],
  ["src/content/docs/reference/checklists.md","60b8f586e447e690fe87052186a790eb5044245f8e869f47b42ed58d40ca1b22"],
  ["src/content/docs/reference/current-tool-mapping.md","ac9f9b1079eaf269ade123c2d3198629366c33ffd28169d09034a7a157bda248"],
  ["src/content/docs/reference/development-glossary.md","8baea08e721236af9e6a0f088539b3007366d3e16c888618e6bed92109db5c6e"],
  ["src/content/docs/reference/index.md","55478301281db6d86b20d745c133eb0cd09ff80a10769a57a17c230e96cf659b"],
  ["src/content/docs/reference/methodology-map.md","3546797ccd896fc249dfb9c2d2d1bffbcc0285ad5db5721b83610f395c82c866"],
  ["src/content/docs/start-here/how-to-use-this-guide.md","147f4050bc51eba5ed0cad5e851a4bc07daa43fe2e6f6724e1ddb114469bb52b"],
  ["src/content/docs/start-here/index.md","7d9a47e894061126de83fc4df53e01df19b3393ed8ed526b2d7ee7d5da84fa8a"],
  ["src/content/docs/start-here/learning-paths.md","8ae3482139ced197a22552533ed527f1fe01b5cae49a42d7b0734e22d5787e74"],
  ["src/content/docs/start-here/why-this-guide.md","c45c9c35a7cd37443b8955966e6df24da69f78750f764cc75a96399807320cef"]
];
const evidence = [
  ["docs/project/reviews/public-beta-1/r26-integration-request.md","34f47a869a29c5b0e4c96b6b5c92586ba84c739479f989838a818fe9de6f04cf"],
  ["docs/project/reviews/public-beta-1/r26-integration-input-manifest.json","466ca970dd309eddec5f898ae1fc3dbaad313b43de907717120df0de60187b68"],
  ["docs/project/reviews/public-beta-1/r26-integration-review-returns.json","818c806eeae97f10e75862b102216102ce67cab355c5d60e3c948e23616dbb58"],
  ["docs/project/reviews/public-beta-1/r26-integration-evidence-status.md","b548a463986b5c171671d8472383c0ee501168b02857846b3d36f8180a811f1f"],
  ["docs/project/reviews/public-beta-1/r26-integration-codex-review.md","d41bfcdc121e4c902feb62513b0fdd63906f3397584308b4e6156dd3c6d29ece"],
  ["docs/project/reviews/public-beta-1/r26-integration-codex-rereview.md","1e6bd89b3304b6e7e5575dc7414e37c39b1b5fd37419e043047e4114fc00ce81"],
  ["docs/project/reviews/public-beta-1/r26-integration-adjudication.md","529ed94b34589a0bddf8764049810840d9f419fa2addb88245cb20cc35207bf6"],
  ["docs/project/reviews/public-beta-1/r26-fix1-validation.md","dc766ad03336d4d6fa0d0caa90e83f02c371199463ffe5b41814bab075c503fd"],
  ["docs/project/reviews/public-beta-1/r26-controller-closeout.md","4e13960b1e9a3a285e32b5f46b22dc54cc00dcb02e26e281a1a9749e48072072"]
];

// Reconstruct only Task 23 metadata; unknown bytes must still fail the original hash.
const approvedHashes = new Map(reviewedDocs);
export const readyEvidence = [
  "conformance: docs/project/public-beta-content-audit.md",
  "sources: research/source-map.md",
  "automated: docs/project/reviews/public-beta-1/ready-promotion-qa.md#자동-검사",
  "browser: docs/project/reviews/public-beta-1/ready-promotion-qa.md#브라우저-검사",
  "owner: docs/project/reviews/public-beta-1/owner-approval.md"
];
const reviewHeader = "contentStatus: review\nreviewEvidence:\n";
export function readyHeader(hasDiagram) {
  const evidence = hasDiagram ? [...readyEvidence, "visual: docs/project/public-beta-visual-audit.md"] : readyEvidence;
  return "contentStatus: ready\nreviewEvidence:\n" + evidence.map(item => `  - "${item}"\n`).join("");
}
export function preReadyBytes(path, bytes) {
  // The frozen reviews predate standing permission to publish the handbook.
  if (path === 'AGENTS.md' && sha(bytes) === '23f98c640b9174c9e87871134c7b1d6eaf4643a980eb2119d48f6fa728355691') {
    return Buffer.from(bytes.toString().replace(/^이 핸드북에서는 사용자가 일반 푸시와 .*$/m, '로컬 `git commit`은 3절의 작업 단위 자동 커밋 규칙을 따릅니다. 자동 커밋은 푸시나 배포 승인을 뜻하지 않습니다.'));
  }
  // Restore the exact inputs of the pre-publication review for these presentation-only edits.
  const archive = new URL('../docs/project/reviews/public-beta-1/reader-layout-history/', import.meta.url);
  if (path === 'src/components/PageTitle.astro' && sha(bytes) === 'c9a4b5699b07df833dca02891c61574628a278df274fda776ddd7398065e3bc3') {
    return readFileSync(new URL('page-title.astro.txt', archive));
  }
  if (path === 'src/content/docs/index.md' && sha(bytes) === '86c42e9e781a4042aba40f258bf4424852f87fe5f38fb723b3f7ab014951313c') {
    bytes = Buffer.concat([bytes, readFileSync(new URL('home-badge-legend.txt', archive))]);
  }
  if (path === 'CONTENT_MAP.md' && sha(bytes) === '86021723ccbd3d0e35b443ae52f1f637e6465e6f77c0a33e85dd95ca160c036f') {
    bytes = Buffer.from(bytes.toString().replace('(src/content/docs/index.md) | `ready` | 2,058', '(src/content/docs/index.md) | `ready` | 2,398'));
  }
  if (path === 'astro.config.mjs' && sha(bytes) === 'f6b1e6d6285d985bf444c36ed3eaba3e9b6590a8dfbc48af8fafed030d1de52b') {
    bytes = Buffer.from(bytes.toString().replace("        Sidebar: './src/components/ReaderSidebar.astro',\n", ''));
  }
  // Reconstruct only the release configuration used by the frozen manuscript reviews.
  if (path === 'astro.config.mjs' && sha(bytes) === '43ab68187bbb02a41910fafb6ab4b7feeb07f1e1ee53d1ca95936486321b1dec') {
    const original = bytes.toString()
      .replace("import { responsiveDiagrams } from './scripts/responsive-diagrams.mjs';\n", '')
      .replace("  markdown: { rehypePlugins: [[responsiveDiagrams, { base }]] },\n", '')
      .replace(", './src/styles/reader.css'", '')
      .replace("        TableOfContents: './src/components/ReaderToc.astro',\n", '');
    if (sha(original) !== 'baa48f6186f1f9b48cff9a3086e755e4a092b5a0c7bc919f08eedf4976385783') throw Error('Reader layout predecessor mismatch');
    return Buffer.from(original);
  }
  bytes = beforeTask23Summary(path,bytes);
  let expected = approvedHashes.get(path), original;
  if (expected) {
    if (!bytes.subarray(0,2048).includes("contentStatus: ready\n")) return bytes;
    const text = bytes.toString("utf8"), end = text.indexOf("\n---\n",4);
    if (end < 0 || !Buffer.from(text).equals(bytes)) return bytes;
    const head = text.slice(0,end), body = text.slice(end);
    const marker = readyHeader(hasLearningDiagramReference(body));
    if (!head.includes(marker)) return bytes;
    original = head.replace(marker,reviewHeader) + body;
  } else if (path === "CONTENT_MAP.md") {
    expected = "25a8299192c1e23de182f0207e4ef0697f76ce34021c969706f9985bd94e6599";
    original = bytes.toString().replace(/`review` \d+개, `ready` \d+개/, "`review` 59개, `ready` 0개")
      .replace(/(\]\((src\/content\/docs\/[^)]+)\) \| )`ready`/g,(all,prefix,p) => approvedHashes.has(p) ? prefix+"`review`" : all);
  } else if (path === "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md") {
    expected = "2d410ce4fde945f414b4307e905a7ed94bd576eff36e23698ecde2b5617f6317";
    original = bytes.toString().replace(/^(\| `(src\/content\/docs\/[^`]+)` \| )ready( \|)/gm,(all,prefix,p,end) => approvedHashes.has(p) ? prefix+"review"+end : all);
  } else return bytes;
  return sha(original) === expected ? Buffer.from(original) : bytes;
}

// Only the exact closeout bytes can be projected back to the Fix1 checkpoint.
export function r26PreCloseoutBytes(path, bytes) {
  bytes = preReadyBytes(path,bytes);
  const e = edits.find(x => x.path === path);
  if (!e || sha(bytes) !== e.after) return bytes;
  const lines = bytes.toString('utf8').split('\n');
  for (const {i,n,prev} of [...e.ranges].reverse()) lines.splice(i,n,...prev);
  const result = Buffer.from(lines.join('\n'));
  if (sha(result) !== e.before) throw Error('R26 predecessor mismatch: '+path);
  return result;
}
export function validateR26Closeout(root, read = path => readFileSync(resolve(root,path))) {
  const expected = [...edits.map(e=>[e.path,e.after]),...reviewedDocs,...evidence];
  return expected.flatMap(([path,hash])=>{
    try { return sha(preReadyBytes(path,read(path)))===hash ? [] : ['R26 closeout drift: '+path]; }
    catch { return ['R26 closeout missing: '+path]; }
  });
}
