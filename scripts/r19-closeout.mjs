import {r20PreFixBytes} from './r20-fix-transition.mjs';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
export const r19Closeout={
  "changes": [
    {
      "path": "src/content/docs/07-workflow-methods/code-review-ci-cd.md",
      "before": "e6a2742051596b5cd54d86d7626491110ac3dcc88cf2fcab72b9607d620d190a",
      "after": "3d020021cfe50ddda9c219360b20361bac82b99b47e4135dbe4c6d1dbf0e25f4",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r19-workflow-support-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r19-record-followup-review.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r19-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/07-workflow-methods/incremental-delivery.md",
      "before": "f93b5f63b72ace83a15670aae56c3f25d156ebef01259c68b2c3e652c850d035",
      "after": "65f76f635bcec37285abb42b171734ca6899526418ba2113e836824685ae9be5",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r19-workflow-support-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r19-record-followup-review.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r19-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/07-workflow-methods/software-development-lifecycle.md",
      "before": "3a26d37d1a2458088c5b73923f01b6926c04ea60c8c8b593fa702f4f9c754f2b",
      "after": "2939fcdcf0ef802f66d78c3c1903fb5a16f1a8008c618f51f7c444a26dc36381",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r19-workflow-support-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r19-record-followup-review.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r19-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "CONTENT_MAP.md",
      "before": "af668d35fe44d67be57a52baeb81465e8ba68933fa333eb30222b95e3ed1af1d",
      "after": "bc572fded6dce546325aee53f557b3fd945e5987c5f5e9b8f15f6626b170a7b8",
      "replacements": [
        [
          "- 상태: `draft` 34개, `seed` 0개, `review` 25개, `ready` 0개",
          "- 상태: `draft` 31개, `seed` 0개, `review` 28개, `ready` 0개"
        ],
        [
          "| [코드 리뷰와 CI/CD](src/content/docs/07-workflow-methods/code-review-ci-cd.md) | `draft` | 9,079 | `/07-workflow-methods/code-review-ci-cd/` |",
          "| [코드 리뷰와 CI/CD](src/content/docs/07-workflow-methods/code-review-ci-cd.md) | `review` | 9,079 | `/07-workflow-methods/code-review-ci-cd/` |"
        ],
        [
          "| [점진적 전달과 작업 분해](src/content/docs/07-workflow-methods/incremental-delivery.md) | `draft` | 9,547 | `/07-workflow-methods/incremental-delivery/` |",
          "| [점진적 전달과 작업 분해](src/content/docs/07-workflow-methods/incremental-delivery.md) | `review` | 9,547 | `/07-workflow-methods/incremental-delivery/` |"
        ],
        [
          "| [소프트웨어 개발 생명주기](src/content/docs/07-workflow-methods/software-development-lifecycle.md) | `draft` | 10,168 | `/07-workflow-methods/software-development-lifecycle/` |",
          "| [소프트웨어 개발 생명주기](src/content/docs/07-workflow-methods/software-development-lifecycle.md) | `review` | 10,168 | `/07-workflow-methods/software-development-lifecycle/` |"
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "before": "2e9252b923b6b8459a3ac850b1fb95392fac4bfbd15a4a8491ac9cd1c77c7d55",
      "after": "167a5cf689386cdefb5dd822426c435ce96c3d5a5e8f46979ed6b732f1c6f20a",
      "replacements": [
        [
          "# 공개 베타 M5 독립 검토 행렬",
          "# 공개 베타 M5 독립 검토 행렬\n\n2026-11-16 R19 controller closeout: 최초 NEEDS CHANGES C0/I5/M5·CI16/점진15/생명17점과 준비 코드PASS를 보존합니다. 같은 저장 reviewer Fix1의 원고/코드 PASS·세18/18·기존10ID RESOLVED 및 기록 후속 PASS C0/I0/M0·기록Minor1 RESOLVED를 연결합니다. 본문 불변 metadata-only review 전이, R01~R19done, R20~R26pending/not-fixed, 공개59개draft31/review28/ready0입니다. 완료행19와review문서28을 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별표/JSON과 r19-controller-closeout.md입니다. 다른 열린finding·M5전체·ready·RC·소유자승인·M6/M7은 남고 다음은R20입니다. 외부 쓰기는 하지 않습니다."
        ],
        [
          "| R19 | `workflow-support` | 소묶음 | 3 | 작성·구현 완료 | pending | 대기 | false |",
          "| R19 | `workflow-support` | 소묶음 | 3 | 작성·구현 완료 | done | 통과 | false |"
        ],
        [
          "`row_defaults`는 아직 시작하지 않은 R19~R26의 기본 상태이며 R01~R18는 완료된 `review_state` 전체로 이를 대체합니다.",
          "`row_defaults`는 아직 시작하지 않은 R20~R26의 기본 상태이며 R01~R19는 완료된 `review_state` 전체로 이를 대체합니다."
        ],
        [
          "\"block_reason\": \"R19~R26 입력 고정 및 Codex 검토 미실행\"",
          "\"block_reason\": \"R20~R26 입력 고정 및 Codex 검토 미실행\""
        ],
        [
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r19-workflow-support-codex-rereview.md\"",
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r19-workflow-support-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r19-workflow-support-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r19-workflow-support-input-manifest.json\",\"source_checked_at\":\"2026-11-16\",\"combined_sha256\":\"f23c4d7c2a9a5eebdcad039acaac3fb75aa1a6ed5c9b9c19599bed2a22f3851e\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important5-minor6-resolved-after-record-followup\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"e6a2742051596b5cd54d86d7626491110ac3dcc88cf2fcab72b9607d620d190a\",\"current_target_sha256\":\"3d020021cfe50ddda9c219360b20361bac82b99b47e4135dbe4c6d1dbf0e25f4\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r19-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r19-workflow-support-codex-rereview.md\",\"next_scope\":\"R20 pending; no M5/ready/public approval\",\"target_hashes\":[{\"path\":\"src/content/docs/07-workflow-methods/code-review-ci-cd.md\",\"reviewed_sha256\":\"e6a2742051596b5cd54d86d7626491110ac3dcc88cf2fcab72b9607d620d190a\",\"current_sha256\":\"3d020021cfe50ddda9c219360b20361bac82b99b47e4135dbe4c6d1dbf0e25f4\"},{\"path\":\"src/content/docs/07-workflow-methods/incremental-delivery.md\",\"reviewed_sha256\":\"f93b5f63b72ace83a15670aae56c3f25d156ebef01259c68b2c3e652c850d035\",\"current_sha256\":\"65f76f635bcec37285abb42b171734ca6899526418ba2113e836824685ae9be5\"},{\"path\":\"src/content/docs/07-workflow-methods/software-development-lifecycle.md\",\"reviewed_sha256\":\"3a26d37d1a2458088c5b73923f01b6926c04ea60c8c8b593fa702f4f9c754f2b\",\"current_sha256\":\"2939fcdcf0ef802f66d78c3c1903fb5a16f1a8008c618f51f7c444a26dc36381\"}],\"evidence_followup_path\":\"docs/project/reviews/public-beta-1/r19-record-followup-review.md\"}"
        ]
      ]
    },
    {
      "path": "PROJECT_CONTEXT.md",
      "before": "8a03283f25e6c8c1b39c1071cefcbf766b60b02e76c19397f96912b2c48b9517",
      "after": "b32bee76059b24d36a1211d5a7e46c54028404c4ee5e5c5b90c996eeca02547d",
      "replacements": [
        [
          "# 프로젝트 컨텍스트",
          "# 프로젝트 컨텍스트\n\n2026-11-16 R19 controller closeout: 최초 NEEDS CHANGES C0/I5/M5·CI16/점진15/생명17점과 준비 코드PASS를 보존합니다. 같은 저장 reviewer Fix1의 원고/코드 PASS·세18/18·기존10ID RESOLVED 및 기록 후속 PASS C0/I0/M0·기록Minor1 RESOLVED를 연결합니다. 본문 불변 metadata-only review 전이, R01~R19done, R20~R26pending/not-fixed, 공개59개draft31/review28/ready0입니다. 완료행19와review문서28을 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별표/JSON과 r19-controller-closeout.md입니다. 다른 열린finding·M5전체·ready·RC·소유자승인·M6/M7은 남고 다음은R20입니다. 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r19-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "ROADMAP.md",
      "before": "ca71811b7d081da1ac5bc59749f73d4382f4bdf50ca60253ea567ed791197e8f",
      "after": "2a24910c876b3e40617ce2588a479f265ea2cdb3e9d86d20766c08931ed71ea7",
      "replacements": [
        [
          "# 로드맵",
          "# 로드맵\n\n2026-11-16 R19 controller closeout: 최초 NEEDS CHANGES C0/I5/M5·CI16/점진15/생명17점과 준비 코드PASS를 보존합니다. 같은 저장 reviewer Fix1의 원고/코드 PASS·세18/18·기존10ID RESOLVED 및 기록 후속 PASS C0/I0/M0·기록Minor1 RESOLVED를 연결합니다. 본문 불변 metadata-only review 전이, R01~R19done, R20~R26pending/not-fixed, 공개59개draft31/review28/ready0입니다. 완료행19와review문서28을 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별표/JSON과 r19-controller-closeout.md입니다. 다른 열린finding·M5전체·ready·RC·소유자승인·M6/M7은 남고 다음은R20입니다. 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r19-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "before": "f7c5540d94357bf3572df5548cca89bf6fed0c869f1f43aec3c278900a544d20",
      "after": "c4e3c1bd86154889f20e77dfc79d04f8da2bc3ea6f4c32245103eef9344844c0",
      "replacements": [
        [
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R18 완료, R19~R26 검토 및 통합 미완료 |",
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R19 완료, R20~R26 검토 및 통합 미완료 |"
        ],
        [
          "| `src/content/docs/07-workflow-methods/code-review-ci-cd.md` | draft | M3-WORKFLOW-QUALITY |",
          "| `src/content/docs/07-workflow-methods/code-review-ci-cd.md` | review | M3-WORKFLOW-QUALITY |"
        ],
        [
          "| `src/content/docs/07-workflow-methods/incremental-delivery.md` | draft | M3-WORKFLOW-QUALITY |",
          "| `src/content/docs/07-workflow-methods/incremental-delivery.md` | review | M3-WORKFLOW-QUALITY |"
        ],
        [
          "| `src/content/docs/07-workflow-methods/software-development-lifecycle.md` | draft | M3-WORKFLOW-QUALITY |",
          "| `src/content/docs/07-workflow-methods/software-development-lifecycle.md` | review | M3-WORKFLOW-QUALITY |"
        ],
        [
          "| - [ ] | R19 `workflow-support` |",
          "| - [x] | R19 `workflow-support` |"
        ]
      ]
    },
    {
      "path": "research/source-map.md",
      "before": "0149fd1f5a61ac9b3e4d4a76c53b2bb4e0c9e02c20cbe130b763efaebcdb227b",
      "after": "427ec24d3822f757fb05cae5bd05772ed994ecc517eae6e2d72ae6c5b38cf74b",
      "replacements": [
        [
          "# 출처 지도",
          "# 출처 지도\n\n2026-11-16 R19 후속 판정: 아래 R19 현재 적용 보충의 검토 대기는 당시 고정 후보 상태입니다. 같은 저장 reviewer Fix1의 원고/코드 PASS·세 원고각18/18·기존10개ID RESOLVED와 기록 후속 PASS C0/I0/M0·기록Minor1 RESOLVED로 해소했고 review 전이는 R19 controller closeout에 연결합니다. 과거 출처·접근 실패·미확인 범위는 유지하며 M5전체/ready/공개 승인을 뜻하지 않습니다."
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/r19-workflow-support-adjudication.md",
      "before": "6af6b3d4b84b27ee688dc0b6421db6dd2185b56c01d40cd1c8337d51a3d2e3c7",
      "after": "8068a1d81fa6fcc8011749dde808bfc9f2af921e8e6589717ac3635197d98922",
      "replacements": [
        [
          "로컬 체크포인트와 별도 controller closeout은 뒤따르는 절차이며 아직 R19done/review/M5/ready/공개를 선언하지 않습니다.",
          "준비·수정19파일은a2a2010으로 로컬 커밋했습니다. 본문 불변 R19done/review 전이와 controller closeout은 r19-controller-closeout.md로 연결하며 M5전체/ready/공개는 미완료입니다."
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
    "execution_request_path": "docs/project/reviews/public-beta-1/r19-workflow-support-request.md",
    "execution_manifest_path": "docs/project/reviews/public-beta-1/r19-workflow-support-input-manifest.json",
    "source_checked_at": "2026-11-16",
    "combined_sha256": "f23c4d7c2a9a5eebdcad039acaac3fb75aa1a6ed5c9b9c19599bed2a22f3851e",
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
    "rereview_state": "pass-important5-minor6-resolved-after-record-followup",
    "deferred_findings": [],
    "reviewed_target_sha256": "e6a2742051596b5cd54d86d7626491110ac3dcc88cf2fcab72b9607d620d190a",
    "current_target_sha256": "3d020021cfe50ddda9c219360b20361bac82b99b47e4135dbe4c6d1dbf0e25f4",
    "metadata_transition": "metadata-only-draft-to-review",
    "closeout_path": "docs/project/reviews/public-beta-1/r19-controller-closeout.md",
    "rereview_path": "docs/project/reviews/public-beta-1/r19-workflow-support-codex-rereview.md",
    "next_scope": "R20 pending; no M5/ready/public approval",
    "target_hashes": [
      {
        "path": "src/content/docs/07-workflow-methods/code-review-ci-cd.md",
        "reviewed_sha256": "e6a2742051596b5cd54d86d7626491110ac3dcc88cf2fcab72b9607d620d190a",
        "current_sha256": "3d020021cfe50ddda9c219360b20361bac82b99b47e4135dbe4c6d1dbf0e25f4"
      },
      {
        "path": "src/content/docs/07-workflow-methods/incremental-delivery.md",
        "reviewed_sha256": "f93b5f63b72ace83a15670aae56c3f25d156ebef01259c68b2c3e652c850d035",
        "current_sha256": "65f76f635bcec37285abb42b171734ca6899526418ba2113e836824685ae9be5"
      },
      {
        "path": "src/content/docs/07-workflow-methods/software-development-lifecycle.md",
        "reviewed_sha256": "3a26d37d1a2458088c5b73923f01b6926c04ea60c8c8b593fa702f4f9c754f2b",
        "current_sha256": "2939fcdcf0ef802f66d78c3c1903fb5a16f1a8008c618f51f7c444a26dc36381"
      }
    ],
    "evidence_followup_path": "docs/project/reviews/public-beta-1/r19-record-followup-review.md"
  },
  "evidence": [
    {
      "path": "docs/project/reviews/public-beta-1/r19-controller-closeout.md",
      "sha256": "03ced833bcdca755c44fd7442319c2ea541d875091e4a6b283f358c5cd357d30"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r19-workflow-support-request.md",
      "sha256": "e4fcb76a1f90d0278b0a1981f64462ad87a883f7dadddb192487ed0416615d35"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r19-workflow-support-input-manifest.json",
      "sha256": "ee70c43e2d1c02324746432f140a395998f5ceb844151d9a0c59929579177537"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r19-workflow-support-codex-review.md",
      "sha256": "595bab1e2d2dca94031c4a913300e7dfd3dbfa40fe0cf9855410305db8886a64"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r19-workflow-support-adjudication.md",
      "sha256": "8068a1d81fa6fcc8011749dde808bfc9f2af921e8e6589717ac3635197d98922"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r19-workflow-support-codex-rereview.md",
      "sha256": "889cb57a9f5aaaf942069b5c98f86ad1f5d602de4cafac77344ee19c7f81658b"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r19-fix-validation.md",
      "sha256": "645a7c3c42053fa04b255dffea402111cf2eb2644026a2132564c92f9f36cccb"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r19-input-preparation-validation.md",
      "sha256": "8fb9d04fdb6e9d08f624732c644c33b99e194a2a4b639ce70bc1ae120c818fe6"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r19-record-followup-review.md",
      "sha256": "28ae1e8375be40e1bc88fd070ab51603d84e005ef03e8033dac6610004f830a5"
    }
  ]
};
const hash=b=>createHash('sha256').update(b).digest('hex');
export function r19PreCloseoutBytes(path,bytes){
 bytes=r20PreFixBytes(path,bytes);
 const e=r19Closeout.changes.find(e=>e.path===path);if(!e||hash(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R19 closeout reversal not unique');text=text.replace(after,before)}
 if(hash(text)!==e.before)throw Error('R19 pre-closeout hash mismatch');return Buffer.from(text);
}
export function validateR19Closeout(root,{read=p=>readFileSync(resolve(root,p))}={}){
 const errors=[];const required=[...r19Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)).map(e=>({path:e.path,sha256:e.after})),...r19Closeout.evidence];
 for(const e of required){try{if(hash(r20PreFixBytes(e.path,read(e.path)))!==e.sha256)errors.push('R19 closeout pinned file mismatch: '+e.path)}catch{errors.push('R19 closeout missing file: '+e.path)}}return errors;
}
