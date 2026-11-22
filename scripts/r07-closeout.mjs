import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {r08PreFixBytes} from './r08-fix-transition.mjs';
export const r07Closeout={
  "changes": [
    {
      "path": "src/content/docs/08-quality/testing-strategy.md",
      "before": "67625c79c44769baebd7ad2136107488af3f8f3ff729ebecfabfad812defbed4",
      "after": "b5ac2191970ab30a261a1c530eb6eae050895bb17499ff0c6ca5388fbea5bbc9",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r07-testing-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r07-testing-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r07-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "CONTENT_MAP.md",
      "before": "973dcba740e6ad52bbd3ba0f1cb5cd0dc1404546611688f84b4a4f1fe9d4801e",
      "after": "f98c6b94f1df1a089361fbea2ae6755517918630554e80b50d35e3981f94b1fb",
      "replacements": [
        [
          "- 상태: `draft` 53개, `seed` 0개, `review` 6개, `ready` 0개",
          "- 상태: `draft` 52개, `seed` 0개, `review` 7개, `ready` 0개"
        ],
        [
          "| `draft` | 18,834 | `/08-quality/testing-strategy/` |",
          "| `review` | 18,834 | `/08-quality/testing-strategy/` |"
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "before": "1332cb3fb2ed3f43694c5ddb9017f19961ca69e0f82b20324c6224af59055626",
      "after": "6181325b76e77985fc0eda8750715c64c8d883a897a94f22b961b734ffadc5fb",
      "replacements": [
        [
          "# 공개 베타 M5 독립 검토 행렬",
          "# 공개 베타 M5 독립 검토 행렬\n\n2026-11-15 R07 controller closeout: 최초 NEEDS CHANGES C0/I2/M3·15/18·준비 checkpoint 보류를 보존하고 같은 저장 reviewer 후속 PASS C0/I0/M0·18/18·코드C0/I0/M0·보류 해소를 연결합니다. I01/I02/M01~M03/V01은 RESOLVED입니다. ISO 공개 열거 귀속의 not-confirmed는 유지하며 그 잘못된 귀속을 제거한 원고 오류 해소와 구분합니다. R07 본문 불변 metadata-only review 전이, R01~R07 done, R08~R26 pending/not-fixed, 공개59개 draft52/review7/ready0입니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r07-controller-closeout.md입니다. 다른 행의 열린 finding·M5 전체·ready·RC·소유자 승인·M6/M7 미완료를 유지합니다. 다음은 R08이며 외부 쓰기는 하지 않습니다."
        ],
        [
          "| R07 | `testing` | 개별 심층 | 1 | 작성·구현 완료 | pending | 대기 | false |",
          "| R07 | `testing` | 개별 심층 | 1 | 작성·구현 완료 | done | 통과 | false |"
        ],
        [
          "`row_defaults`는 아직 시작하지 않은 R07~R26의 기본 상태이며 R01~R06는 완료된 `review_state` 전체로 이를 대체합니다. R07과 방법론 지도 배정 행은 R06의 국소 참조·날짜 수정 결과를 입력에 포함하되 해당 전체 검토를 생략하지 않습니다.",
          "`row_defaults`는 아직 시작하지 않은 R08~R26의 기본 상태이며 R01~R07은 완료된 `review_state` 전체로 이를 대체합니다. 남은 행은 관련 국소 수정 증거를 재사용하되 각 행의 전체 검토를 생략하지 않습니다."
        ],
        [
          "\"block_reason\": \"R07~R26 입력 고정 및 Codex 검토 미실행\"",
          "\"block_reason\": \"R08~R26 입력 고정 및 Codex 검토 미실행\""
        ],
        [
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r07-testing-codex-rereview.md\"",
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r07-testing-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r07-testing-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r07-testing-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"6404bee6f92a42406f318a06583d0609ac2ec40cdf193207cd1870504b227880\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important2-minor3-v01-resolved\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"67625c79c44769baebd7ad2136107488af3f8f3ff729ebecfabfad812defbed4\",\"current_target_sha256\":\"b5ac2191970ab30a261a1c530eb6eae050895bb17499ff0c6ca5388fbea5bbc9\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r07-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r07-testing-codex-rereview.md\",\"next_scope\":\"R08 pending; no M5/ready/public approval\"}"
        ]
      ]
    },
    {
      "path": "PROJECT_CONTEXT.md",
      "before": "00d6a944deae8d8d7b2fd3e932beeaf4f6286a60a1d11f6b726336b28eb389a3",
      "after": "50f6bd3fdec74559e96744e6c6aeffa364a6be32f77fb779d5924923212cb624",
      "replacements": [
        [
          "# 프로젝트 컨텍스트",
          "# 프로젝트 컨텍스트\n\n2026-11-15 R07 controller closeout: 최초 NEEDS CHANGES C0/I2/M3·15/18·준비 checkpoint 보류를 보존하고 같은 저장 reviewer 후속 PASS C0/I0/M0·18/18·코드C0/I0/M0·보류 해소를 연결합니다. I01/I02/M01~M03/V01은 RESOLVED입니다. ISO 공개 열거 귀속의 not-confirmed는 유지하며 그 잘못된 귀속을 제거한 원고 오류 해소와 구분합니다. R07 본문 불변 metadata-only review 전이, R01~R07 done, R08~R26 pending/not-fixed, 공개59개 draft52/review7/ready0입니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r07-controller-closeout.md입니다. 다른 행의 열린 finding·M5 전체·ready·RC·소유자 승인·M6/M7 미완료를 유지합니다. 다음은 R08이며 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r07-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "ROADMAP.md",
      "before": "ac5545a212e0d942be1719777bd457c524f67b817f067b339d2b9576532879de",
      "after": "d13d1fed1002a8ef4b827a75d775ec0adf6331b82cb5ba483bde67bf2038a89b",
      "replacements": [
        [
          "# 로드맵",
          "# 로드맵\n\n2026-11-15 R07 controller closeout: 최초 NEEDS CHANGES C0/I2/M3·15/18·준비 checkpoint 보류를 보존하고 같은 저장 reviewer 후속 PASS C0/I0/M0·18/18·코드C0/I0/M0·보류 해소를 연결합니다. I01/I02/M01~M03/V01은 RESOLVED입니다. ISO 공개 열거 귀속의 not-confirmed는 유지하며 그 잘못된 귀속을 제거한 원고 오류 해소와 구분합니다. R07 본문 불변 metadata-only review 전이, R01~R07 done, R08~R26 pending/not-fixed, 공개59개 draft52/review7/ready0입니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r07-controller-closeout.md입니다. 다른 행의 열린 finding·M5 전체·ready·RC·소유자 승인·M6/M7 미완료를 유지합니다. 다음은 R08이며 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r07-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "before": "6574d9ffdd49ed45a68b8db5e31e37e42a4e0d42565b66aaa4dd7a1c019f9366",
      "after": "135a4bb039b2ac171845a628bfc651d676b54aa739eae7a6468ec8efc49a65bd",
      "replacements": [
        [
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R06 완료, R07~R26 검토 및 통합 미완료 |",
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R07 완료, R08~R26 검토 및 통합 미완료 |"
        ],
        [
          "| `src/content/docs/08-quality/testing-strategy.md` | draft | M3-WORKFLOW-QUALITY |",
          "| `src/content/docs/08-quality/testing-strategy.md` | review | M3-WORKFLOW-QUALITY |"
        ],
        [
          "| - [ ] | R07 `testing` |",
          "| - [x] | R07 `testing` |"
        ]
      ]
    },
    {
      "path": "research/public-beta-source-gap-register.md",
      "before": "bc0d1567b3d082345973efd30f8c8ba7f75c0984837b4b33fe20cc73ba036f7c",
      "after": "eefe11c1c41b74d3e01fa11dd403426584c4bb18dddbe8c1ca3782e4d05025bd",
      "replacements": [
        [
          "같은 reviewer의 해소 판정 전까지 현재 수정은 미검토 후보입니다.",
          "같은 저장 reviewer 후속 PASS C0/I0/M0에서 귀속 오류의 해소를 확인했습니다. 열거 자체의 not-confirmed는 유지하며 R07 controller closeout과 구분합니다."
        ]
      ]
    },
    {
      "path": "docs/project/public-beta-content-audit.md",
      "before": "47a74a2470f56324a3d219593413b8acff679768b3a6be01a6ca93a1e8f2f70a",
      "after": "5b9bbec64eca339ee0b0a3c82be50c262120d6fe493c57e7963f79dc9215a608",
      "replacements": [
        [
          "이 수정은 아직 후속 독립 검토 전이며 기존 conform만으로 R07 전체 PASS·review/ready를 주장하지 않습니다.",
          "같은 저장 reviewer 후속 PASS C0/I0/M0로 해당 귀속 오류의 해소를 확인했습니다. 기존 conform을 재사용한 것만으로 판정한 것이 아니며, review 전이는 R07 controller closeout에 연결하고 ready·M5 전체 완료는 주장하지 않습니다."
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
    "execution_request_path": "docs/project/reviews/public-beta-1/r07-testing-request.md",
    "execution_manifest_path": "docs/project/reviews/public-beta-1/r07-testing-input-manifest.json",
    "source_checked_at": "2026-11-15",
    "combined_sha256": "6404bee6f92a42406f318a06583d0609ac2ec40cdf193207cd1870504b227880",
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
    "rereview_state": "pass-important2-minor3-v01-resolved",
    "deferred_findings": [],
    "reviewed_target_sha256": "67625c79c44769baebd7ad2136107488af3f8f3ff729ebecfabfad812defbed4",
    "current_target_sha256": "b5ac2191970ab30a261a1c530eb6eae050895bb17499ff0c6ca5388fbea5bbc9",
    "metadata_transition": "metadata-only-draft-to-review",
    "closeout_path": "docs/project/reviews/public-beta-1/r07-controller-closeout.md",
    "rereview_path": "docs/project/reviews/public-beta-1/r07-testing-codex-rereview.md",
    "next_scope": "R08 pending; no M5/ready/public approval"
  },
  "evidence": [
    {
      "path": "docs/project/reviews/public-beta-1/r07-controller-closeout.md",
      "sha256": "0b2ac77139f99a894e535f457785d4d232aad94369ba9180b454775ba51be716"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r07-testing-request.md",
      "sha256": "2c2d78e7f86c3cd8e600ba3fa0eff6ec3e48cf8475132023bc059c4a008bc125"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r07-testing-input-manifest.json",
      "sha256": "afe5b2651a8d2094c581ca5cd7909ed7a7465b9cad8964ad40d4be01bdd1c062"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r07-testing-codex-review.md",
      "sha256": "b225247637104efd3568893b84f3579b9cd22b9603ae7c9b8f8d92cb4e444b1e"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r07-testing-adjudication.md",
      "sha256": "424e6bd1265ebf4c6f70c8aa6a210d055bf76234d400a50ac819f7cf512edeea"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r07-testing-codex-rereview.md",
      "sha256": "d9f8b52e464478d9d86f447e2bca424dad5f472df0cf3d7e0b97f7fa1dfc135f"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r07-fix-validation.md",
      "sha256": "a93aabd2b4d2e0a9a6aa05ccb67a2d2cecb544191ba9001bdc26640a79844266"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r07-input-preparation-report.md",
      "sha256": "233b2552dab53a042f9721e3261a576837ba182fd0c036c74df5c3a307189547"
    }
  ]
};
const hash=b=>createHash('sha256').update(b).digest('hex');
export function r07PreCloseoutBytes(path,bytes){
 bytes=r08PreFixBytes(path,bytes);
 const e=r07Closeout.changes.find(e=>e.path===path);if(!e||hash(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R07 closeout reversal not unique');text=text.replace(after,before)}
 if(hash(text)!==e.before)throw Error('R07 pre-closeout hash mismatch');return Buffer.from(text);
}
export function validateR07Closeout(root,{read=p=>readFileSync(resolve(root,p))}={}){
 const errors=[];const required=[...r07Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)).map(e=>({path:e.path,sha256:e.after})),...r07Closeout.evidence];
 for(const e of required){try{if(hash(r08PreFixBytes(e.path,read(e.path)))!==e.sha256)errors.push('R07 closeout pinned file mismatch: '+e.path)}catch{errors.push('R07 closeout missing file: '+e.path)}}return errors;
}
