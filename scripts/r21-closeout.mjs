import {r22PreFixBytes} from './r22-fix-transition.mjs';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
export const r21Closeout={
  "changes": [
    {
      "path": "src/content/docs/09-git-github/branch-commit-pull-request.md",
      "before": "1f43c51daf027432e2f36e5680361a02fbff9262d93a6123391dcaf8df39ea91",
      "after": "5d76d3aff4a4e330e5f87fc901666e084016bee5a2466038e29f7176f3664c09",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r21-git-support-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r21-git-support-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r21-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/09-git-github/undo-merge-conflict-release.md",
      "before": "ce34e4193f54120f7851809e51c7f8b3d27b6a7cffc6c461bacfe61c0a70c4dc",
      "after": "3c39c8d3728e6a46c6ff88138e63eae8da1122ed48bea605e984d892d6132d30",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r21-git-support-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r21-git-support-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r21-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "CONTENT_MAP.md",
      "before": "8183a92cf92fbad4aaf3c19d249232b40efe7a6ec1673f939b46494608f4dfb6",
      "after": "876688646cf188d45fcf74b7b21fd20ce12a8b23da2acb4e268f3295322da3a1",
      "replacements": [
        [
          "- 상태: `draft` 29개, `seed` 0개, `review` 30개, `ready` 0개",
          "- 상태: `draft` 27개, `seed` 0개, `review` 32개, `ready` 0개"
        ],
        [
          "| [브랜치·커밋·Pull Request](src/content/docs/09-git-github/branch-commit-pull-request.md) | `draft` | 9,556 | `/09-git-github/branch-commit-pull-request/` |",
          "| [브랜치·커밋·Pull Request](src/content/docs/09-git-github/branch-commit-pull-request.md) | `review` | 9,556 | `/09-git-github/branch-commit-pull-request/` |"
        ],
        [
          "| [되돌리기·충돌·릴리스](src/content/docs/09-git-github/undo-merge-conflict-release.md) | `draft` | 10,288 | `/09-git-github/undo-merge-conflict-release/` |",
          "| [되돌리기·충돌·릴리스](src/content/docs/09-git-github/undo-merge-conflict-release.md) | `review` | 10,288 | `/09-git-github/undo-merge-conflict-release/` |"
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "before": "487bbedc2e70d8d308a450f709b161bec4e30da25465a4db345c6c82994b786e",
      "after": "f6c5e164eb418e5dee6815258924607c3261eb299a26d7371a32d1bf2ca72810",
      "replacements": [
        [
          "# 공개 베타 M5 독립 검토 행렬",
          "# 공개 베타 M5 독립 검토 행렬\n\n2026-11-16 R21 controller closeout: 최초 NEEDS CHANGES C0/I6/M4·두16/18·별도캡처PM01 Minor1을 보존합니다. 같은 저장 reviewer Fix1의 원고·코드·기록 PASS C0/I0/M0·두18/18·원고10건과현행PM01 RESOLVED를 연결합니다. R08-XI01/XM01/XM02 국소해소와 역사원문은 유지합니다. 본문 불변 metadata-only review 전이, R01~R21done, R22~R26pending/not-fixed, 공개59개draft27/review32/ready0입니다. 완료행21과review문서32를 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별표/JSON과 r21-controller-closeout.md입니다. 다른 열린finding·M5전체·ready·RC·소유자승인·M6/M7은 남고 다음은R22입니다. 외부 쓰기는 하지 않습니다."
        ],
        [
          "| R21 | `git-support` | 소묶음 | 2 | 작성·구현 완료 | pending | 대기 | false |",
          "| R21 | `git-support` | 소묶음 | 2 | 작성·구현 완료 | done | 통과 | false |"
        ],
        [
          "`row_defaults`는 아직 시작하지 않은 R21~R26의 기본 상태이며 R01~R20는 완료된 `review_state` 전체로 이를 대체합니다.",
          "`row_defaults`는 아직 시작하지 않은 R22~R26의 기본 상태이며 R01~R21는 완료된 `review_state` 전체로 이를 대체합니다."
        ],
        [
          "\"block_reason\": \"R21~R26 입력 고정 및 Codex 검토 미실행\"",
          "\"block_reason\": \"R22~R26 입력 고정 및 Codex 검토 미실행\""
        ],
        [
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r21-git-support-codex-rereview.md\"",
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r21-git-support-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r21-git-support-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r21-git-support-input-manifest.json\",\"source_checked_at\":\"2026-11-16\",\"combined_sha256\":\"847e3b3f67581fb798d1cfab15264a18f1285c3717d3a50a9799cba45eb00c37\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important6-minor4-and-capture1-resolved-after-fix1\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"1f43c51daf027432e2f36e5680361a02fbff9262d93a6123391dcaf8df39ea91\",\"current_target_sha256\":\"5d76d3aff4a4e330e5f87fc901666e084016bee5a2466038e29f7176f3664c09\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r21-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r21-git-support-codex-rereview.md\",\"next_scope\":\"R22 pending; no M5/ready/public approval\",\"target_hashes\":[{\"path\":\"src/content/docs/09-git-github/branch-commit-pull-request.md\",\"reviewed_sha256\":\"1f43c51daf027432e2f36e5680361a02fbff9262d93a6123391dcaf8df39ea91\",\"current_sha256\":\"5d76d3aff4a4e330e5f87fc901666e084016bee5a2466038e29f7176f3664c09\"},{\"path\":\"src/content/docs/09-git-github/undo-merge-conflict-release.md\",\"reviewed_sha256\":\"ce34e4193f54120f7851809e51c7f8b3d27b6a7cffc6c461bacfe61c0a70c4dc\",\"current_sha256\":\"3c39c8d3728e6a46c6ff88138e63eae8da1122ed48bea605e984d892d6132d30\"}]}"
        ]
      ]
    },
    {
      "path": "PROJECT_CONTEXT.md",
      "before": "17a14974b7d2a8273686e11732884dba170ac529645e4085e74f584fabe6b66d",
      "after": "787a239f6186ae3e3ed229710a1494a40feb802d20caa9e889422e20b1543101",
      "replacements": [
        [
          "# 프로젝트 컨텍스트",
          "# 프로젝트 컨텍스트\n\n2026-11-16 R21 controller closeout: 최초 NEEDS CHANGES C0/I6/M4·두16/18·별도캡처PM01 Minor1을 보존합니다. 같은 저장 reviewer Fix1의 원고·코드·기록 PASS C0/I0/M0·두18/18·원고10건과현행PM01 RESOLVED를 연결합니다. R08-XI01/XM01/XM02 국소해소와 역사원문은 유지합니다. 본문 불변 metadata-only review 전이, R01~R21done, R22~R26pending/not-fixed, 공개59개draft27/review32/ready0입니다. 완료행21과review문서32를 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별표/JSON과 r21-controller-closeout.md입니다. 다른 열린finding·M5전체·ready·RC·소유자승인·M6/M7은 남고 다음은R22입니다. 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r21-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "ROADMAP.md",
      "before": "e21066f1f07d7ea59d582fa798dd96b67ea962b71d3503e76bd259076b7d6f3c",
      "after": "89264eb8a91ac6afa25589a5346225c86d681c45f10bc68f2bba4df46338e7ca",
      "replacements": [
        [
          "# 로드맵",
          "# 로드맵\n\n2026-11-16 R21 controller closeout: 최초 NEEDS CHANGES C0/I6/M4·두16/18·별도캡처PM01 Minor1을 보존합니다. 같은 저장 reviewer Fix1의 원고·코드·기록 PASS C0/I0/M0·두18/18·원고10건과현행PM01 RESOLVED를 연결합니다. R08-XI01/XM01/XM02 국소해소와 역사원문은 유지합니다. 본문 불변 metadata-only review 전이, R01~R21done, R22~R26pending/not-fixed, 공개59개draft27/review32/ready0입니다. 완료행21과review문서32를 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별표/JSON과 r21-controller-closeout.md입니다. 다른 열린finding·M5전체·ready·RC·소유자승인·M6/M7은 남고 다음은R22입니다. 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r21-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "before": "f057373b70a25e28e38c5811dd833c4214b1c26d0698e56092808424c3f3bd94",
      "after": "e03557dded84b63f40527d5d9b40343e09c62b16e6e19f370b0ea188dcde3a26",
      "replacements": [
        [
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R20 완료, R21~R26 검토 및 통합 미완료 |",
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R21 완료, R22~R26 검토 및 통합 미완료 |"
        ],
        [
          "| `src/content/docs/09-git-github/branch-commit-pull-request.md` | draft | M3-GIT-OPS |",
          "| `src/content/docs/09-git-github/branch-commit-pull-request.md` | review | M3-GIT-OPS |"
        ],
        [
          "| `src/content/docs/09-git-github/undo-merge-conflict-release.md` | draft | M3-GIT-OPS |",
          "| `src/content/docs/09-git-github/undo-merge-conflict-release.md` | review | M3-GIT-OPS |"
        ],
        [
          "| - [ ] | R21 `git-support` |",
          "| - [x] | R21 `git-support` |"
        ]
      ]
    },
    {
      "path": "research/source-map.md",
      "before": "0edba96840dbc66161902b57098a49ad2b2cfe12c0fb628c36250472bedd19bc",
      "after": "cda305d49f5e510b812623b4e7cdadde3ff518e720ddd5779118e76d4d4ce534",
      "replacements": [
        [
          "# 출처 지도",
          "# 출처 지도\n\n2026-11-16 R21 후속 판정: 공식16페이지의 명시 범위와 정확한 수정에 대해 같은 저장 reviewer Fix1 PASS C0/I0/M0·두18/18을 연결합니다. 원고10건과 현행PM01은 해소됐으며 review 전이는 R21 controller closeout으로 연결합니다. 과거 출처·실패·미확인 범위는 유지하고 M5전체/ready/공개 승인을 뜻하지 않습니다."
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/r21-git-support-adjudication.md",
      "before": "7b902459ab443b57d1ef1ed9199bb7ef12daa617ba6c0b37163c8d9307bea2a8",
      "after": "bde25e4ed27b9b4ba281aba77171c050e0cae166db940012e0d1a62a23749f88",
      "replacements": [
        [
          "로컬 체크포인트와 controller closeout은 뒤따르는 절차이며 아직 R21done/review/M5/ready/공개를 선언하지 않습니다.",
          "수정12파일은 e7dd8d5로 로컬 커밋했습니다. 본문 불변 R21done/review 전이와 controller closeout은 r21-controller-closeout.md로 연결하며 M5전체/ready/공개는 미완료입니다."
        ]
      ]
    }
  ],
  "state": {
    "status": "done",
    "required_review_state": "통과",
    "release_ready": false,
    "input_manifest_state": "input-fixed",
    "individual_sha256_state": "fixed",
    "execution_request_path": "docs/project/reviews/public-beta-1/r21-git-support-request.md",
    "execution_manifest_path": "docs/project/reviews/public-beta-1/r21-git-support-input-manifest.json",
    "source_checked_at": "2026-11-16",
    "combined_sha256": "847e3b3f67581fb798d1cfab15264a18f1285c3717d3a50a9799cba45eb00c37",
    "actual_invocation": "completed",
    "observed_model_context_effort": "gpt-6-astra/high; fresh initial/read-only; same persisted session resumed",
    "result_state": "pass-via-followup-original-needs-changes-preserved",
    "adjudication_state": "complete",
    "valid_independent_evidence": true,
    "open_findings": {
      "critical": 0,
      "important": 0,
      "minor": 0
    },
    "historical_verdict": "NEEDS CHANGES",
    "rereview_state": "pass-important6-minor4-and-capture1-resolved-after-fix1",
    "deferred_findings": [],
    "reviewed_target_sha256": "1f43c51daf027432e2f36e5680361a02fbff9262d93a6123391dcaf8df39ea91",
    "current_target_sha256": "5d76d3aff4a4e330e5f87fc901666e084016bee5a2466038e29f7176f3664c09",
    "metadata_transition": "metadata-only-draft-to-review",
    "closeout_path": "docs/project/reviews/public-beta-1/r21-controller-closeout.md",
    "rereview_path": "docs/project/reviews/public-beta-1/r21-git-support-codex-rereview.md",
    "next_scope": "R22 pending; no M5/ready/public approval",
    "target_hashes": [
      {
        "path": "src/content/docs/09-git-github/branch-commit-pull-request.md",
        "reviewed_sha256": "1f43c51daf027432e2f36e5680361a02fbff9262d93a6123391dcaf8df39ea91",
        "current_sha256": "5d76d3aff4a4e330e5f87fc901666e084016bee5a2466038e29f7176f3664c09"
      },
      {
        "path": "src/content/docs/09-git-github/undo-merge-conflict-release.md",
        "reviewed_sha256": "ce34e4193f54120f7851809e51c7f8b3d27b6a7cffc6c461bacfe61c0a70c4dc",
        "current_sha256": "3c39c8d3728e6a46c6ff88138e63eae8da1122ed48bea605e984d892d6132d30"
      }
    ]
  },
  "evidence": [
    {
      "path": "docs/project/reviews/public-beta-1/r21-controller-closeout.md",
      "sha256": "95855ccdb5c1ac2b903c8d0e3ee0f8e663e28326cea4693d02a4b82c1e7a18f6"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r21-git-support-request.md",
      "sha256": "e460b360bb0b6b1a694c50d6572043a93591b8dd7e619fb2cca4d977fd5756c2"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r21-git-support-input-manifest.json",
      "sha256": "c039630f84b8b4d35518991c5f81d14c710ac59e86eeed27b08cd4c1a618ceb3"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r21-git-support-codex-review.md",
      "sha256": "1580931224cd68c8793b7ffcc9607c918ce2aedaa41e676f18dd6e900eb05b5c"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r21-git-support-adjudication.md",
      "sha256": "bde25e4ed27b9b4ba281aba77171c050e0cae166db940012e0d1a62a23749f88"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r21-git-support-codex-rereview.md",
      "sha256": "5bad99bbd0b608b2724a78c2790a5c3b910c6c06472a0d3234c44ab59adbe651"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r21-fix-validation.md",
      "sha256": "cbf885c652e2c706d37e909d4f47361a4c64b0f4b972781e0f6142d8e8245bf2"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r21-input-preparation-validation.md",
      "sha256": "7e4fc193c4afc8271a4c2682620ba66f0fa2c92536a35dcb3f0ae73b291e5d93"
    }
  ]
};
const hash=b=>createHash('sha256').update(b).digest('hex');
export function r21PreCloseoutBytes(path,bytes){
 bytes=r22PreFixBytes(path,bytes);
 const e=r21Closeout.changes.find(e=>e.path===path);if(!e||hash(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R21 closeout reversal not unique');text=text.replace(after,before)}
 if(hash(text)!==e.before)throw Error('R21 pre-closeout hash mismatch');return Buffer.from(text);
}
export function validateR21Closeout(root,{read=p=>readFileSync(resolve(root,p))}={}){
 const errors=[];const required=[...r21Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)).map(e=>({path:e.path,sha256:e.after})),...r21Closeout.evidence];
 for(const e of required){try{if(hash(r22PreFixBytes(e.path,read(e.path)))!==e.sha256)errors.push('R21 closeout pinned file mismatch: '+e.path)}catch{errors.push('R21 closeout missing file: '+e.path)}}return errors;
}
