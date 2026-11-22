import {r13PreFixBytes} from './r13-fix-transition.mjs';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
export const r12Closeout={
  "changes": [
    {
      "path": "src/content/docs/12-case-studies/first-full-stack-project.md",
      "before": "6be7f002018c341ad0bfae9e08623a7953154f233e57517ec5ecf59157d721c0",
      "after": "c492b1be6c3f7f85287de61c32c3e0f959c98c48e7959a8ced35b9e3c01c4851",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r12-meeting-capstone-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r12-meeting-capstone-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r12-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "CONTENT_MAP.md",
      "before": "1ae5f1f694f98f3e1e9cb4065dc369d7ac4eaa72c8155fa9f401c1696fb7de6a",
      "after": "c79d2f7150b29bb2f218cd751183bd930143d7f4c94ffa1c908a16ac9b1edcf2",
      "replacements": [
        [
          "- 상태: `draft` 48개, `seed` 0개, `review` 11개, `ready` 0개",
          "- 상태: `draft` 47개, `seed` 0개, `review` 12개, `ready` 0개"
        ],
        [
          "| `draft` | 22,404 | `/12-case-studies/first-full-stack-project/` |",
          "| `review` | 22,404 | `/12-case-studies/first-full-stack-project/` |"
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "before": "d8b7d161a9ec2ae6314779cea9d816f6185b986ce151ff05c7280b6ebd0e453e",
      "after": "67402debeeb45579307aafd8d00e02327ab3ee97053e3196fe66a441a4983f38",
      "replacements": [
        [
          "# 공개 베타 M5 독립 검토 행렬",
          "# 공개 베타 M5 독립 검토 행렬\n\n2026-11-15 R12 controller closeout: 최초 NEEDS CHANGES C0/I5/M3·15/18을 보존하고 같은 저장 reviewer의 Fix1 PASS C0/I0/M0·18/18·코드PASS로 지정8건을 RESOLVED로 연결합니다. 본문·그림 불변 metadata-only review 전이, R01~R12 done, R13~R26 pending/not-fixed, 공개59개 draft47/review12/ready0입니다. 실패 캡처exit1둘과 보충검사exit0을 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r12-controller-closeout.md입니다. 다른 행의 열린 finding·M5 전체·ready·RC·소유자 승인·M6/M7 미완료를 유지합니다. 다음은 R13이며 외부 쓰기는 하지 않습니다."
        ],
        [
          "| R12 | `meeting-capstone` | 개별 심층 | 1 | 작성·구현 완료 | pending | 대기 | false |",
          "| R12 | `meeting-capstone` | 개별 심층 | 1 | 작성·구현 완료 | done | 통과 | false |"
        ],
        [
          "`row_defaults`는 아직 시작하지 않은 R12~R26의 기본 상태이며 R01~R11은 완료된 `review_state` 전체로 이를 대체합니다.",
          "`row_defaults`는 아직 시작하지 않은 R13~R26의 기본 상태이며 R01~R12는 완료된 `review_state` 전체로 이를 대체합니다."
        ],
        [
          "\"block_reason\": \"R12~R26 입력 고정 및 Codex 검토 미실행\"",
          "\"block_reason\": \"R13~R26 입력 고정 및 Codex 검토 미실행\""
        ],
        [
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r12-meeting-capstone-codex-rereview.md\"",
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r12-meeting-capstone-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r12-meeting-capstone-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r12-meeting-capstone-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"85ee15e06ea70e971cc5894eccceb2af70bd5190c72ebe26279042caf8090d27\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important5-minor3-resolved\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"6be7f002018c341ad0bfae9e08623a7953154f233e57517ec5ecf59157d721c0\",\"current_target_sha256\":\"c492b1be6c3f7f85287de61c32c3e0f959c98c48e7959a8ced35b9e3c01c4851\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r12-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r12-meeting-capstone-codex-rereview.md\",\"next_scope\":\"R13 pending; no M5/ready/public approval\"}"
        ]
      ]
    },
    {
      "path": "PROJECT_CONTEXT.md",
      "before": "5ebd4cb5dd452e6529ee4315d0b642dc8cb8bf3c6c361aca415947ae147637c9",
      "after": "9ebaff6721abe280cb79b4d6afe7ba2e8d8ff5608068f95d1185ec8c402a7d01",
      "replacements": [
        [
          "# 프로젝트 컨텍스트",
          "# 프로젝트 컨텍스트\n\n2026-11-15 R12 controller closeout: 최초 NEEDS CHANGES C0/I5/M3·15/18을 보존하고 같은 저장 reviewer의 Fix1 PASS C0/I0/M0·18/18·코드PASS로 지정8건을 RESOLVED로 연결합니다. 본문·그림 불변 metadata-only review 전이, R01~R12 done, R13~R26 pending/not-fixed, 공개59개 draft47/review12/ready0입니다. 실패 캡처exit1둘과 보충검사exit0을 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r12-controller-closeout.md입니다. 다른 행의 열린 finding·M5 전체·ready·RC·소유자 승인·M6/M7 미완료를 유지합니다. 다음은 R13이며 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r12-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "ROADMAP.md",
      "before": "0513863b8b12c2cafe0eb9498633c95eb69326b26ead8ddfb38b26a632ccafff",
      "after": "d83483ccc4243a963065e5dcb879fcb2b736204710fa7d822c8fef7e1ca532ab",
      "replacements": [
        [
          "# 로드맵",
          "# 로드맵\n\n2026-11-15 R12 controller closeout: 최초 NEEDS CHANGES C0/I5/M3·15/18을 보존하고 같은 저장 reviewer의 Fix1 PASS C0/I0/M0·18/18·코드PASS로 지정8건을 RESOLVED로 연결합니다. 본문·그림 불변 metadata-only review 전이, R01~R12 done, R13~R26 pending/not-fixed, 공개59개 draft47/review12/ready0입니다. 실패 캡처exit1둘과 보충검사exit0을 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r12-controller-closeout.md입니다. 다른 행의 열린 finding·M5 전체·ready·RC·소유자 승인·M6/M7 미완료를 유지합니다. 다음은 R13이며 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r12-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "before": "51fdaece051ca66c3f9168ba011e5a1ddf61eba9ce26f95aacf41811f7328067",
      "after": "1c3a4688e92eb95e9c03f9144b3c1ccc5258b2a4827e30dd0639fc680706aac6",
      "replacements": [
        [
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R11 완료, R12~R26 검토 및 통합 미완료 |",
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R12 완료, R13~R26 검토 및 통합 미완료 |"
        ],
        [
          "| `src/content/docs/12-case-studies/first-full-stack-project.md` | draft | M3-CAP |",
          "| `src/content/docs/12-case-studies/first-full-stack-project.md` | review | M3-CAP |"
        ],
        [
          "| - [ ] | R12 `meeting-capstone` |",
          "| - [x] | R12 `meeting-capstone` |"
        ]
      ]
    },
    {
      "path": "research/source-map.md",
      "before": "58f679438c6120742d4ce0d16e20ad9888c206c5746d61f495b0c3ed753b7001",
      "after": "a189c448ac40e9f316f0dd20c97ef7c5babc73bf859dc83d28afe24da35f75fa",
      "replacements": [
        [
          "R12 수정의 해소 여부는 같은 저장 reviewer의 후속 검토 전까지 미확정입니다.",
          "R12 수정은 같은 저장 reviewer의 Fix1 PASS18/18·C0/I0/M0으로 해소했습니다. review 전이는 R12 controller closeout에 연결하며 M5 전체·ready·공개 승인을 뜻하지 않습니다."
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/r12-meeting-capstone-adjudication.md",
      "before": "a03af6a9f32e8d793715ecc2aee63e65593afc86adc750b0a3ffba5bb2dc667a",
      "after": "ff40a01d42e2ebdd4c64e564e2f95dbb1bb56b47e9b04f645bbddd5258a7b5b6",
      "replacements": [
        [
          "R12의 review 전이와 controller closeout은 다음 별도 완료 검토에서 판단합니다.",
          "Fix1은819fc11에 선별 커밋했습니다. 이후 R12의 review 전이와 controller closeout은 r12-controller-closeout.md에 연결합니다."
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
    "execution_request_path": "docs/project/reviews/public-beta-1/r12-meeting-capstone-request.md",
    "execution_manifest_path": "docs/project/reviews/public-beta-1/r12-meeting-capstone-input-manifest.json",
    "source_checked_at": "2026-11-15",
    "combined_sha256": "85ee15e06ea70e971cc5894eccceb2af70bd5190c72ebe26279042caf8090d27",
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
    "rereview_state": "pass-important5-minor3-resolved",
    "deferred_findings": [],
    "reviewed_target_sha256": "6be7f002018c341ad0bfae9e08623a7953154f233e57517ec5ecf59157d721c0",
    "current_target_sha256": "c492b1be6c3f7f85287de61c32c3e0f959c98c48e7959a8ced35b9e3c01c4851",
    "metadata_transition": "metadata-only-draft-to-review",
    "closeout_path": "docs/project/reviews/public-beta-1/r12-controller-closeout.md",
    "rereview_path": "docs/project/reviews/public-beta-1/r12-meeting-capstone-codex-rereview.md",
    "next_scope": "R13 pending; no M5/ready/public approval"
  },
  "evidence": [
    {
      "path": "docs/project/reviews/public-beta-1/r12-controller-closeout.md",
      "sha256": "ed311780342e1cfc0475a0807a4228e36417d7d98c15ca92537ed6382689ad25"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r12-meeting-capstone-request.md",
      "sha256": "4130fabf2966bea2c9e473fac21b9bfe2e91af9503e69b4cf09a5e7606277acf"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r12-meeting-capstone-input-manifest.json",
      "sha256": "3f79f94c5de16d3177a477217841f9afddf3001523d8b85edde46a5625162515"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r12-meeting-capstone-codex-review.md",
      "sha256": "a87da9f39fdb643edb89d7f117c9f4d78136722557f1ab078614956f96541e5e"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r12-meeting-capstone-adjudication.md",
      "sha256": "ff40a01d42e2ebdd4c64e564e2f95dbb1bb56b47e9b04f645bbddd5258a7b5b6"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r12-meeting-capstone-codex-rereview.md",
      "sha256": "16a5814ff4b3d8cfb649134de3a88a1984cb5d218accd83ccc97e79f8ba1bd3c"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r12-fix-validation.md",
      "sha256": "e8945e4e8210e9c709080b420f9bad2fd94afe324e8b313e05ccea759f71cb94"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r12-input-preparation-report.md",
      "sha256": "6c9e6aeec2818f99909f3b18628f84edf26c1a9d502fa4815c7339ffe1d14f08"
    }
  ]
};
const hash=b=>createHash('sha256').update(b).digest('hex');
export function r12PreCloseoutBytes(path,bytes){
 bytes=r13PreFixBytes(path,bytes);
 const e=r12Closeout.changes.find(e=>e.path===path);if(!e||hash(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R12 closeout reversal not unique');text=text.replace(after,before)}
 if(hash(text)!==e.before)throw Error('R12 pre-closeout hash mismatch');return Buffer.from(text);
}
export function validateR12Closeout(root,{read=p=>readFileSync(resolve(root,p))}={}){
 const errors=[];const required=[...r12Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)).map(e=>({path:e.path,sha256:e.after})),...r12Closeout.evidence];
 for(const e of required){try{if(hash(r13PreFixBytes(e.path,read(e.path)))!==e.sha256)errors.push('R12 closeout pinned file mismatch: '+e.path)}catch{errors.push('R12 closeout missing file: '+e.path)}}return errors;
}
