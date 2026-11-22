import {createHash} from 'node:crypto';
import {r19PreFixBytes} from './r19-fix-transition.mjs';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
export const r18Closeout={
  "changes": [
    {
      "path": "src/content/docs/06-requirements-design/adr-and-tradeoffs.md",
      "before": "6ae2dead43ae59b3b048260cc1964eddada76e8fa8547b9e9302d73850f41178",
      "after": "a3b14ed20f674eb88379a33c0866ee3dadb3ce7d86cc88f748e5e49928885e06",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r18-design-support-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r18-design-support-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r18-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/06-requirements-design/architecture-and-frameworks.md",
      "before": "10c841738885363c3a7ba978c4e043ad2f69d6abdff690851f3345ce5128eb64",
      "after": "72798fd19f5e063a31f0ff56cb4ee8ecb59d49a67304a3a869a996ed420310d0",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r18-design-support-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r18-design-support-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r18-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "CONTENT_MAP.md",
      "before": "7924389a50266dfc0a43a7d6ee09c4a2ec9c068fe1acada279c232b453b052d4",
      "after": "5a709ee2194326260f237a2733c8bb973aa4dbac7dd64fa8649981a13526b819",
      "replacements": [
        [
          "- 상태: `draft` 36개, `seed` 0개, `review` 23개, `ready` 0개",
          "- 상태: `draft` 34개, `seed` 0개, `review` 25개, `ready` 0개"
        ],
        [
          "| [ADR과 트레이드오프 기록](src/content/docs/06-requirements-design/adr-and-tradeoffs.md) | `draft` | 12,603 | `/06-requirements-design/adr-and-tradeoffs/` |",
          "| [ADR과 트레이드오프 기록](src/content/docs/06-requirements-design/adr-and-tradeoffs.md) | `review` | 12,603 | `/06-requirements-design/adr-and-tradeoffs/` |"
        ],
        [
          "| [아키텍처와 프레임워크](src/content/docs/06-requirements-design/architecture-and-frameworks.md) | `draft` | 12,293 | `/06-requirements-design/architecture-and-frameworks/` |",
          "| [아키텍처와 프레임워크](src/content/docs/06-requirements-design/architecture-and-frameworks.md) | `review` | 12,293 | `/06-requirements-design/architecture-and-frameworks/` |"
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "before": "1c6e40bc5725e7cd39047137cae309f55e5c8ea1694be36bdf24557a056da753",
      "after": "2e9252b923b6b8459a3ac850b1fb95392fac4bfbd15a4a8491ac9cd1c77c7d55",
      "replacements": [
        [
          "# 공개 베타 M5 독립 검토 행렬",
          "# 공개 베타 M5 독립 검토 행렬\n\n2026-11-15 R18 controller closeout: 최초 NEEDS CHANGES C0/I3/M1·ADR16/18·아키텍처17/18와 준비 PASS C0/I0/M2를 보존합니다. 같은 저장 reviewer Fix1의 원고/코드 PASS C0/I0/M0·두18/18·6ID RESOLVED를 연결합니다. 본문 불변 metadata-only review 전이, R01~R18done, R19~R26pending/not-fixed, 공개59개draft34/review25/ready0입니다. 완료행18과 review문서25를 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별표/JSON과 r18-controller-closeout.md입니다. conceptual model의 현재not-confirmed·다른 열린finding·M5전체·ready·RC·소유자승인·M6/M7은 남고 다음은R19입니다. 외부 쓰기는 하지 않습니다."
        ],
        [
          "| R18 | `design-support` | 소묶음 | 2 | 작성·구현 완료 | pending | 대기 | false |",
          "| R18 | `design-support` | 소묶음 | 2 | 작성·구현 완료 | done | 통과 | false |"
        ],
        [
          "`row_defaults`는 아직 시작하지 않은 R18~R26의 기본 상태이며 R01~R17는 완료된 `review_state` 전체로 이를 대체합니다.",
          "`row_defaults`는 아직 시작하지 않은 R19~R26의 기본 상태이며 R01~R18는 완료된 `review_state` 전체로 이를 대체합니다."
        ],
        [
          "\"block_reason\": \"R18~R26 입력 고정 및 Codex 검토 미실행\"",
          "\"block_reason\": \"R19~R26 입력 고정 및 Codex 검토 미실행\""
        ],
        [
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r18-design-support-codex-rereview.md\"",
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r18-design-support-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r18-design-support-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r18-design-support-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"407e52a12933af78233aa0ff00940a04dc05aec3b8226ea95140e0a34f8d8069\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important3-minor3-resolved\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"6ae2dead43ae59b3b048260cc1964eddada76e8fa8547b9e9302d73850f41178\",\"current_target_sha256\":\"a3b14ed20f674eb88379a33c0866ee3dadb3ce7d86cc88f748e5e49928885e06\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r18-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r18-design-support-codex-rereview.md\",\"next_scope\":\"R19 pending; no M5/ready/public approval\",\"target_hashes\":[{\"path\":\"src/content/docs/06-requirements-design/adr-and-tradeoffs.md\",\"reviewed_sha256\":\"6ae2dead43ae59b3b048260cc1964eddada76e8fa8547b9e9302d73850f41178\",\"current_sha256\":\"a3b14ed20f674eb88379a33c0866ee3dadb3ce7d86cc88f748e5e49928885e06\"},{\"path\":\"src/content/docs/06-requirements-design/architecture-and-frameworks.md\",\"reviewed_sha256\":\"10c841738885363c3a7ba978c4e043ad2f69d6abdff690851f3345ce5128eb64\",\"current_sha256\":\"72798fd19f5e063a31f0ff56cb4ee8ecb59d49a67304a3a869a996ed420310d0\"}]}"
        ]
      ]
    },
    {
      "path": "PROJECT_CONTEXT.md",
      "before": "f595023bc64c4af3f7ee87d9a7a839192bf1c97198e7b8561e6c2c83014428cb",
      "after": "8a03283f25e6c8c1b39c1071cefcbf766b60b02e76c19397f96912b2c48b9517",
      "replacements": [
        [
          "# 프로젝트 컨텍스트",
          "# 프로젝트 컨텍스트\n\n2026-11-15 R18 controller closeout: 최초 NEEDS CHANGES C0/I3/M1·ADR16/18·아키텍처17/18와 준비 PASS C0/I0/M2를 보존합니다. 같은 저장 reviewer Fix1의 원고/코드 PASS C0/I0/M0·두18/18·6ID RESOLVED를 연결합니다. 본문 불변 metadata-only review 전이, R01~R18done, R19~R26pending/not-fixed, 공개59개draft34/review25/ready0입니다. 완료행18과 review문서25를 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별표/JSON과 r18-controller-closeout.md입니다. conceptual model의 현재not-confirmed·다른 열린finding·M5전체·ready·RC·소유자승인·M6/M7은 남고 다음은R19입니다. 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r18-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "ROADMAP.md",
      "before": "a3575d176ce6dc60e260c285b6804bdf259b7f71963570bf07e631e55ad391ef",
      "after": "ca71811b7d081da1ac5bc59749f73d4382f4bdf50ca60253ea567ed791197e8f",
      "replacements": [
        [
          "# 로드맵",
          "# 로드맵\n\n2026-11-15 R18 controller closeout: 최초 NEEDS CHANGES C0/I3/M1·ADR16/18·아키텍처17/18와 준비 PASS C0/I0/M2를 보존합니다. 같은 저장 reviewer Fix1의 원고/코드 PASS C0/I0/M0·두18/18·6ID RESOLVED를 연결합니다. 본문 불변 metadata-only review 전이, R01~R18done, R19~R26pending/not-fixed, 공개59개draft34/review25/ready0입니다. 완료행18과 review문서25를 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별표/JSON과 r18-controller-closeout.md입니다. conceptual model의 현재not-confirmed·다른 열린finding·M5전체·ready·RC·소유자승인·M6/M7은 남고 다음은R19입니다. 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r18-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "before": "95e2e792cfb411b38c76b1c0331ad42cff753290a5c69cff2ddd8d7e8b1e92ff",
      "after": "f7c5540d94357bf3572df5548cca89bf6fed0c869f1f43aec3c278900a544d20",
      "replacements": [
        [
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R17 완료, R18~R26 검토 및 통합 미완료 |",
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R18 완료, R19~R26 검토 및 통합 미완료 |"
        ],
        [
          "| `src/content/docs/06-requirements-design/adr-and-tradeoffs.md` | draft | M3-FRONT-DESIGN |",
          "| `src/content/docs/06-requirements-design/adr-and-tradeoffs.md` | review | M3-FRONT-DESIGN |"
        ],
        [
          "| `src/content/docs/06-requirements-design/architecture-and-frameworks.md` | draft | M3-FRONT-DESIGN |",
          "| `src/content/docs/06-requirements-design/architecture-and-frameworks.md` | review | M3-FRONT-DESIGN |"
        ],
        [
          "| - [ ] | R18 `design-support` |",
          "| - [x] | R18 `design-support` |"
        ]
      ]
    },
    {
      "path": "research/source-map.md",
      "before": "a2b28a0f07deffd94e49ad5e0a22d6c85f754e6b51e3fcf3794739a65d464e3f",
      "after": "50ff4cbad9ae2258b48c2e6bf421f4814dd229c24585ced228436a8f6e0975c9",
      "replacements": [
        [
          "# 출처 지도",
          "# 출처 지도\n\n2026-11-15 R18 후속 판정: 아래 R18 현재 적용 보충의 검토 대기는 당시 고정 후보 상태입니다. 같은 저장 reviewer Fix1의 원고/코드 PASS C0/I0/M0·두 원고각18/18·6개ID RESOLVED로 해소했고 review 전이는 R18 controller closeout에 연결합니다. 과거 출처·접근 실패·미확인 범위는 유지하며 M5전체/ready/공개 승인을 뜻하지 않습니다."
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/r18-design-support-adjudication.md",
      "before": "601dc47f6eae79a9b9012c5150a2fe29be26ba26c793327ee8a384c70faecad2",
      "after": "f830b5e737a5867fffa10db3836c638b95b77fe1872e20c42e85b3be0202b308",
      "replacements": [
        [
          "로컬 체크포인트와 별도 controller closeout은 뒤따르는 절차이며 아직 R18done/review/M5/ready/공개를 선언하지 않습니다.",
          "준비·수정17파일은64fae48로 로컬 커밋했습니다. 본문 불변 R18done/review 전이와 controller closeout은 r18-controller-closeout.md로 연결하며 M5전체/ready/공개는 미완료입니다."
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
    "execution_request_path": "docs/project/reviews/public-beta-1/r18-design-support-request.md",
    "execution_manifest_path": "docs/project/reviews/public-beta-1/r18-design-support-input-manifest.json",
    "source_checked_at": "2026-11-15",
    "combined_sha256": "407e52a12933af78233aa0ff00940a04dc05aec3b8226ea95140e0a34f8d8069",
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
    "rereview_state": "pass-important3-minor3-resolved",
    "deferred_findings": [],
    "reviewed_target_sha256": "6ae2dead43ae59b3b048260cc1964eddada76e8fa8547b9e9302d73850f41178",
    "current_target_sha256": "a3b14ed20f674eb88379a33c0866ee3dadb3ce7d86cc88f748e5e49928885e06",
    "metadata_transition": "metadata-only-draft-to-review",
    "closeout_path": "docs/project/reviews/public-beta-1/r18-controller-closeout.md",
    "rereview_path": "docs/project/reviews/public-beta-1/r18-design-support-codex-rereview.md",
    "next_scope": "R19 pending; no M5/ready/public approval",
    "target_hashes": [
      {
        "path": "src/content/docs/06-requirements-design/adr-and-tradeoffs.md",
        "reviewed_sha256": "6ae2dead43ae59b3b048260cc1964eddada76e8fa8547b9e9302d73850f41178",
        "current_sha256": "a3b14ed20f674eb88379a33c0866ee3dadb3ce7d86cc88f748e5e49928885e06"
      },
      {
        "path": "src/content/docs/06-requirements-design/architecture-and-frameworks.md",
        "reviewed_sha256": "10c841738885363c3a7ba978c4e043ad2f69d6abdff690851f3345ce5128eb64",
        "current_sha256": "72798fd19f5e063a31f0ff56cb4ee8ecb59d49a67304a3a869a996ed420310d0"
      }
    ]
  },
  "evidence": [
    {
      "path": "docs/project/reviews/public-beta-1/r18-controller-closeout.md",
      "sha256": "b0541024783e703f905284e82050698c5fa567b8fe697a5825a7394c5d57dd88"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r18-design-support-request.md",
      "sha256": "d644a8e0e212b1e149a123d350853a25f2bd4b81bffcf265bc884978bb2178cb"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r18-design-support-input-manifest.json",
      "sha256": "f1a24ead050905b371c01e608a4e733095354335819248ac898ed0cea67ef363"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r18-design-support-codex-review.md",
      "sha256": "77d51dd540753fd085c40bc4bd4935a51962770a77ec484553c7fee00863d7fb"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r18-design-support-adjudication.md",
      "sha256": "f830b5e737a5867fffa10db3836c638b95b77fe1872e20c42e85b3be0202b308"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r18-design-support-codex-rereview.md",
      "sha256": "085a9f416847cf3816e08dd36b05129479d005eba7801444928a2d108beb7a74"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r18-fix-validation.md",
      "sha256": "6d300252b045fc0e62ae2fd821b4e48a76f510818ed35495d43c0d4bacae881a"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r18-input-preparation-validation.md",
      "sha256": "98bcbe7752a3afeddb3d723fd78c2947d3bb281a3d685112e504dbd9f27da0eb"
    }
  ]
};
const hash=b=>createHash('sha256').update(b).digest('hex');
export function r18PreCloseoutBytes(path,bytes){
 bytes=r19PreFixBytes(path,bytes);
 const e=r18Closeout.changes.find(e=>e.path===path);if(!e||hash(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R18 closeout reversal not unique');text=text.replace(after,before)}
 if(hash(text)!==e.before)throw Error('R18 pre-closeout hash mismatch');return Buffer.from(text);
}
export function validateR18Closeout(root,{read=p=>readFileSync(resolve(root,p))}={}){
 const errors=[];const required=[...r18Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)).map(e=>({path:e.path,sha256:e.after})),...r18Closeout.evidence];
 for(const e of required){try{if(hash(r19PreFixBytes(e.path,read(e.path)))!==e.sha256)errors.push('R18 closeout pinned file mismatch: '+e.path)}catch{errors.push('R18 closeout missing file: '+e.path)}}return errors;
}
