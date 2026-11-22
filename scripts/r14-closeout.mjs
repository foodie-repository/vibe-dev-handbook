import {r15PreFixBytes} from './r15-fix-transition.mjs';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
export const r14Closeout={
  "changes": [
    {
      "path": "src/content/docs/01-mental-models/abstraction-and-tradeoffs.md",
      "before": "09f891345a431a3ed684292e554597b743d872c4591cac5cde425e67b8a41dc2",
      "after": "39e01f64db9883c58de86b9fa22713fe092cab3e7e19a24cbbd65d1f42ea8126",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r14-mental-support-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r14-mental-support-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r14-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/01-mental-models/developer-thinking.md",
      "before": "1d012eb30e5cbcec3da87d2ab128bd363dbbd69b1d7b4bb980ad491bdc02a977",
      "after": "6fa248d88d051549a677e35d6ab2a3ab0b97d3b5435b04678cb6dace73fe1184",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r14-mental-support-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r14-mental-support-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r14-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "CONTENT_MAP.md",
      "before": "bb2e7a7ffc6445c983fc5323b0db7bc23edde20aa9a7c5de07058fe8c744fa20",
      "after": "50fd0cf9c1147db138445e7e94704faaa39dcf33919492604ef097ff7aaefb43",
      "replacements": [
        [
          "- 상태: `draft` 46개, `seed` 0개, `review` 13개, `ready` 0개",
          "- 상태: `draft` 44개, `seed` 0개, `review` 15개, `ready` 0개"
        ],
        [
          "| `draft` | 8,135 | `/01-mental-models/abstraction-and-tradeoffs/` |",
          "| `review` | 8,135 | `/01-mental-models/abstraction-and-tradeoffs/` |"
        ],
        [
          "| `draft` | 13,199 | `/01-mental-models/developer-thinking/` |",
          "| `review` | 13,199 | `/01-mental-models/developer-thinking/` |"
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "before": "cba5a21ec8703adb49f4449a3b5fe018a44a0969e75c3bc9f8e01c5812c85cba",
      "after": "31d8c4f5d0f70bb6ce2bb7755c7070777d8f5791682e36b9d949f584a5d55988",
      "replacements": [
        [
          "# 공개 베타 M5 독립 검토 행렬",
          "# 공개 베타 M5 독립 검토 행렬\n\n2026-11-15 R14 controller closeout: 최초 NEEDS CHANGES C0/I1/M2·두 원고17/18·16/18을 보존하고 같은 저장 reviewer의 Fix1 PASS C0/I0/M0·각18/18·코드PASS로 세 ID를 RESOLVED로 연결합니다. 본문 불변 metadata-only review 전이, R01~R14 done, R15~R26 pending/not-fixed, 공개59개 draft44/review15/ready0입니다. R14는 두 문서라 완료행14와 review문서15를 구분합니다. 실패와 성공·재사용 검증은 따로 보존합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r14-controller-closeout.md입니다. 다른 행의 열린 finding·M5전체·ready·RC·소유자승인·M6/M7미완료입니다. 다음은 R15이며 외부 쓰기는 하지 않습니다."
        ],
        [
          "| R14 | `mental-support` | 소묶음 | 2 | 작성·구현 완료 | pending | 대기 | false |",
          "| R14 | `mental-support` | 소묶음 | 2 | 작성·구현 완료 | done | 통과 | false |"
        ],
        [
          "`row_defaults`는 아직 시작하지 않은 R14~R26의 기본 상태이며 R01~R13은 완료된 `review_state` 전체로 이를 대체합니다.",
          "`row_defaults`는 아직 시작하지 않은 R15~R26의 기본 상태이며 R01~R14는 완료된 `review_state` 전체로 이를 대체합니다."
        ],
        [
          "\"block_reason\": \"R14~R26 입력 고정 및 Codex 검토 미실행\"",
          "\"block_reason\": \"R15~R26 입력 고정 및 Codex 검토 미실행\""
        ],
        [
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r14-mental-support-codex-rereview.md\"",
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r14-mental-support-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r14-mental-support-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r14-mental-support-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"32deccb055227898c87e76d7be27cc5face250fe6aaa50ab749a3631e8e2b6d6\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important1-minor2-resolved\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"09f891345a431a3ed684292e554597b743d872c4591cac5cde425e67b8a41dc2\",\"current_target_sha256\":\"39e01f64db9883c58de86b9fa22713fe092cab3e7e19a24cbbd65d1f42ea8126\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r14-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r14-mental-support-codex-rereview.md\",\"next_scope\":\"R15 pending; no M5/ready/public approval\",\"target_hashes\":[{\"path\":\"src/content/docs/01-mental-models/abstraction-and-tradeoffs.md\",\"reviewed_sha256\":\"09f891345a431a3ed684292e554597b743d872c4591cac5cde425e67b8a41dc2\",\"current_sha256\":\"39e01f64db9883c58de86b9fa22713fe092cab3e7e19a24cbbd65d1f42ea8126\"},{\"path\":\"src/content/docs/01-mental-models/developer-thinking.md\",\"reviewed_sha256\":\"1d012eb30e5cbcec3da87d2ab128bd363dbbd69b1d7b4bb980ad491bdc02a977\",\"current_sha256\":\"6fa248d88d051549a677e35d6ab2a3ab0b97d3b5435b04678cb6dace73fe1184\"}]}"
        ]
      ]
    },
    {
      "path": "PROJECT_CONTEXT.md",
      "before": "1542539e4c01548761034ba48891669d3b664340f7947c9a55cb120d891fdb1c",
      "after": "b7c341242ec9031fb5779897f4ea54dac9523b765d19c9343a7a390be8022acd",
      "replacements": [
        [
          "# 프로젝트 컨텍스트",
          "# 프로젝트 컨텍스트\n\n2026-11-15 R14 controller closeout: 최초 NEEDS CHANGES C0/I1/M2·두 원고17/18·16/18을 보존하고 같은 저장 reviewer의 Fix1 PASS C0/I0/M0·각18/18·코드PASS로 세 ID를 RESOLVED로 연결합니다. 본문 불변 metadata-only review 전이, R01~R14 done, R15~R26 pending/not-fixed, 공개59개 draft44/review15/ready0입니다. R14는 두 문서라 완료행14와 review문서15를 구분합니다. 실패와 성공·재사용 검증은 따로 보존합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r14-controller-closeout.md입니다. 다른 행의 열린 finding·M5전체·ready·RC·소유자승인·M6/M7미완료입니다. 다음은 R15이며 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r14-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "ROADMAP.md",
      "before": "03f2620732a3267d7906fd896659f5bcb18a25f099b56464e6fdf8eafb540589",
      "after": "8a064849b8203c1c3daff7f174fe8c8e50701df15b1ae796c6af82a26e17c295",
      "replacements": [
        [
          "# 로드맵",
          "# 로드맵\n\n2026-11-15 R14 controller closeout: 최초 NEEDS CHANGES C0/I1/M2·두 원고17/18·16/18을 보존하고 같은 저장 reviewer의 Fix1 PASS C0/I0/M0·각18/18·코드PASS로 세 ID를 RESOLVED로 연결합니다. 본문 불변 metadata-only review 전이, R01~R14 done, R15~R26 pending/not-fixed, 공개59개 draft44/review15/ready0입니다. R14는 두 문서라 완료행14와 review문서15를 구분합니다. 실패와 성공·재사용 검증은 따로 보존합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r14-controller-closeout.md입니다. 다른 행의 열린 finding·M5전체·ready·RC·소유자승인·M6/M7미완료입니다. 다음은 R15이며 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r14-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "before": "72118ce1f53122dd046a91a3de6f6b91b5f31ee43809a2dbf0bd278963a87075",
      "after": "f270d3109d4d1557dea69d33ae0c68231bcba06af2855b1faac3e2672999e988",
      "replacements": [
        [
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R13 완료, R14~R26 검토 및 통합 미완료 |",
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R14 완료, R15~R26 검토 및 통합 미완료 |"
        ],
        [
          "| `src/content/docs/01-mental-models/abstraction-and-tradeoffs.md` | draft | M3-MENTAL-ENV |",
          "| `src/content/docs/01-mental-models/abstraction-and-tradeoffs.md` | review | M3-MENTAL-ENV |"
        ],
        [
          "| `src/content/docs/01-mental-models/developer-thinking.md` | draft | M3-MENTAL-ENV |",
          "| `src/content/docs/01-mental-models/developer-thinking.md` | review | M3-MENTAL-ENV |"
        ],
        [
          "| - [ ] | R14 `mental-support` |",
          "| - [x] | R14 `mental-support` |"
        ]
      ]
    },
    {
      "path": "research/source-map.md",
      "before": "99fc13dcdb156ab503cab88f3b43d17bd863bf5f4c4b12de19fab40a3aa6ac60",
      "after": "860ab0ca893cba157736045650e6a7978b72a08a0431232017235393ef8e2fa2",
      "replacements": [
        [
          "# 출처 지도",
          "# 출처 지도\n\n2026-11-15 R14 현재 적용 보충: [문제 분해·추상화 직접 근거](public-beta-review-source-excerpts/r14-mental-support-2026-11-15.md)의 SEI2·C4 2·Google SRE1 관련 본문을 새 확인했고 같은 실행 SWEBOK 주제 목록은 재사용했습니다. 아래 과거 확인일과 ACM 접근 실패는 역사로 보존합니다. 두 원고의 현재 상태와 특정 요청 결과 구분·fixture 첫 정의·링크 제목 수정은 같은 저장 reviewer Fix1 PASS 각18/18·C0/I0/M0으로 해소했고 review 전이는 R14 controller closeout에 연결합니다. R10 미제공 자료·표준 전문·실제 제품 기능·M5전체·ready·공개 승인의 근거로 확대하지 않습니다."
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/r14-mental-support-adjudication.md",
      "before": "695fdad94a36680bb1ca4428555354ac030fda006e4bd4fe8154c18443d8744c",
      "after": "5f4fe3775cff6f9ec13b43b4a4a95de10014dc3d1f286ccb1bb859a05d7eadfa",
      "replacements": [
        [
          "R14 controller closeout와 review 전이는 아직 별도 대기이며",
          "Fix1은 069db0b에 선별 커밋했습니다. R14의 review 전이와 controller closeout은 r14-controller-closeout.md에 연결하며"
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
    "execution_request_path": "docs/project/reviews/public-beta-1/r14-mental-support-request.md",
    "execution_manifest_path": "docs/project/reviews/public-beta-1/r14-mental-support-input-manifest.json",
    "source_checked_at": "2026-11-15",
    "combined_sha256": "32deccb055227898c87e76d7be27cc5face250fe6aaa50ab749a3631e8e2b6d6",
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
    "rereview_state": "pass-important1-minor2-resolved",
    "deferred_findings": [],
    "reviewed_target_sha256": "09f891345a431a3ed684292e554597b743d872c4591cac5cde425e67b8a41dc2",
    "current_target_sha256": "39e01f64db9883c58de86b9fa22713fe092cab3e7e19a24cbbd65d1f42ea8126",
    "metadata_transition": "metadata-only-draft-to-review",
    "closeout_path": "docs/project/reviews/public-beta-1/r14-controller-closeout.md",
    "rereview_path": "docs/project/reviews/public-beta-1/r14-mental-support-codex-rereview.md",
    "next_scope": "R15 pending; no M5/ready/public approval",
    "target_hashes": [
      {
        "path": "src/content/docs/01-mental-models/abstraction-and-tradeoffs.md",
        "reviewed_sha256": "09f891345a431a3ed684292e554597b743d872c4591cac5cde425e67b8a41dc2",
        "current_sha256": "39e01f64db9883c58de86b9fa22713fe092cab3e7e19a24cbbd65d1f42ea8126"
      },
      {
        "path": "src/content/docs/01-mental-models/developer-thinking.md",
        "reviewed_sha256": "1d012eb30e5cbcec3da87d2ab128bd363dbbd69b1d7b4bb980ad491bdc02a977",
        "current_sha256": "6fa248d88d051549a677e35d6ab2a3ab0b97d3b5435b04678cb6dace73fe1184"
      }
    ]
  },
  "evidence": [
    {
      "path": "docs/project/reviews/public-beta-1/r14-controller-closeout.md",
      "sha256": "bf60ee6a2e2fd8c6f4e1645ca49358b1c3a6fb8da71ae69fec435c74490fb2e5"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r14-mental-support-request.md",
      "sha256": "afde89578def7413619eb90d4b1cdb0364b0cf6d132ba9051ded6c0e50034723"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r14-mental-support-input-manifest.json",
      "sha256": "734a4d3064564b399c65afcaf50b24de30d8a7171b9dd5ba239bdf68de2c22db"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r14-mental-support-codex-review.md",
      "sha256": "69a60f94e42df010237d84fdaacdfad04447a3171d6e1d788a560893d55602ad"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r14-mental-support-adjudication.md",
      "sha256": "5f4fe3775cff6f9ec13b43b4a4a95de10014dc3d1f286ccb1bb859a05d7eadfa"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r14-mental-support-codex-rereview.md",
      "sha256": "9681619cb0ab2d94971e92b6092fcc6865d1035e0c09f321e17145da5b67eef8"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r14-fix-validation.md",
      "sha256": "5fedd87e911f5431290efb675c663debde67eaedf2ac3383f7a4b842bb118f46"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r14-input-preparation-report.md",
      "sha256": "8032ff3c30f549527d21129ac45ffb00c7f945144645b65861fefd2e45fe8420"
    }
  ]
};
const hash=b=>createHash('sha256').update(b).digest('hex');
export function r14PreCloseoutBytes(path,bytes){
 bytes=r15PreFixBytes(path,bytes);
 const e=r14Closeout.changes.find(e=>e.path===path);if(!e||hash(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R14 closeout reversal not unique');text=text.replace(after,before)}
 if(hash(text)!==e.before)throw Error('R14 pre-closeout hash mismatch');return Buffer.from(text);
}
export function validateR14Closeout(root,{read=p=>readFileSync(resolve(root,p))}={}){
 const errors=[];const required=[...r14Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)).map(e=>({path:e.path,sha256:e.after})),...r14Closeout.evidence];
 for(const e of required){try{if(hash(r15PreFixBytes(e.path,read(e.path)))!==e.sha256)errors.push('R14 closeout pinned file mismatch: '+e.path)}catch{errors.push('R14 closeout missing file: '+e.path)}}return errors;
}
