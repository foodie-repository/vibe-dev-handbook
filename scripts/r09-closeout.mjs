import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {r10PreFixBytes} from './r10-fix-transition.mjs';
export const r09Closeout={
  "changes": [
    {
      "path": "src/content/docs/10-deployment-operations/build-deploy-domain-dns.md",
      "before": "7aa5415bf0701c5e209d1996c736a1f9bf57c9d137433b780f397ed40f1a9f39",
      "after": "157c675aa181f355939e29963f62d9c246129ea800261256f004f5ce9195d28c",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r09-build-deploy-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r09-build-deploy-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r09-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "CONTENT_MAP.md",
      "before": "d5be7727c354b583aeefa0f3da3f392f672665bcc8aeadf4513f02dd8bf3476e",
      "after": "c7b5eca1e4a79590e490b8c786599d2bb32e8072f16c9e02c841433bf73f75b4",
      "replacements": [
        [
          "- 상태: `draft` 51개, `seed` 0개, `review` 8개, `ready` 0개",
          "- 상태: `draft` 50개, `seed` 0개, `review` 9개, `ready` 0개"
        ],
        [
          "| `draft` | 18,070 | `/10-deployment-operations/build-deploy-domain-dns/` |",
          "| `review` | 18,070 | `/10-deployment-operations/build-deploy-domain-dns/` |"
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "before": "7f6bb729c6f5f9f5dc3b569066c2419896ebcde36c4ff10d597bdd7c6ff40051",
      "after": "aafd2e6b5409d2f1401df38cff3c93aff225c15e029866797fe1daa38505b140",
      "replacements": [
        [
          "# 공개 베타 M5 독립 검토 행렬",
          "# 공개 베타 M5 독립 검토 행렬\n\n2026-11-15 R09 controller closeout: 최초 NEEDS CHANGES C0/I3/M3·15/18과 Fix1 기록 Minor1을 보존하고 같은 저장 reviewer의 후속 PASS C0/I0/M0·18/18·코드C0/I0/M0을 연결합니다. 지정6건·V01·CO-M01은 RESOLVED이며 최초 응답의 위치 메타데이터 정규화는 원문 해시와 구분해 보존합니다. R09 본문·그림 불변 metadata-only review 전이, R01~R09 done, R10~R26 pending/not-fixed, 공개59개 draft50/review9/ready0입니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r09-controller-closeout.md입니다. 다른 행의 열린 finding·M5 전체·ready·RC·소유자 승인·M6/M7 미완료를 유지합니다. 다음은 R10이며 외부 쓰기는 하지 않습니다."
        ],
        [
          "| R09 | `build-deploy` | 개별 심층 | 1 | 작성·구현 완료 | pending | 대기 | false |",
          "| R09 | `build-deploy` | 개별 심층 | 1 | 작성·구현 완료 | done | 통과 | false |"
        ],
        [
          "`row_defaults`는 아직 시작하지 않은 R09~R26의 기본 상태이며 R01~R08은 완료된 `review_state` 전체로 이를 대체합니다.",
          "`row_defaults`는 아직 시작하지 않은 R10~R26의 기본 상태이며 R01~R09는 완료된 `review_state` 전체로 이를 대체합니다."
        ],
        [
          "\"block_reason\": \"R09~R26 입력 고정 및 Codex 검토 미실행\"",
          "\"block_reason\": \"R10~R26 입력 고정 및 Codex 검토 미실행\""
        ],
        [
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r09-build-deploy-codex-rereview.md\"",
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r09-build-deploy-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r09-build-deploy-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r09-build-deploy-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"64b2b4611db3e03591fb3f74ba80a659a574c97601b483b4afbccc9312508218\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important3-minor3-and-controller-V01-and-record-CO-M01-resolved\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"7aa5415bf0701c5e209d1996c736a1f9bf57c9d137433b780f397ed40f1a9f39\",\"current_target_sha256\":\"157c675aa181f355939e29963f62d9c246129ea800261256f004f5ce9195d28c\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r09-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r09-build-deploy-codex-rereview.md\",\"next_scope\":\"R10 pending; no M5/ready/public approval\"}"
        ]
      ]
    },
    {
      "path": "PROJECT_CONTEXT.md",
      "before": "b40ef40d310b8df5caad51fc9ce07f299fd576237d23b4b233be42ab9026bdc6",
      "after": "8545bf032b0ef0b501729288353c1ccdda52783e7d17f4898d834411ff025bf7",
      "replacements": [
        [
          "# 프로젝트 컨텍스트",
          "# 프로젝트 컨텍스트\n\n2026-11-15 R09 controller closeout: 최초 NEEDS CHANGES C0/I3/M3·15/18과 Fix1 기록 Minor1을 보존하고 같은 저장 reviewer의 후속 PASS C0/I0/M0·18/18·코드C0/I0/M0을 연결합니다. 지정6건·V01·CO-M01은 RESOLVED이며 최초 응답의 위치 메타데이터 정규화는 원문 해시와 구분해 보존합니다. R09 본문·그림 불변 metadata-only review 전이, R01~R09 done, R10~R26 pending/not-fixed, 공개59개 draft50/review9/ready0입니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r09-controller-closeout.md입니다. 다른 행의 열린 finding·M5 전체·ready·RC·소유자 승인·M6/M7 미완료를 유지합니다. 다음은 R10이며 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r09-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "ROADMAP.md",
      "before": "dc8b62dd5543544b60af5dd656df77f896e09d72b2fee72898a53a3d87ba5025",
      "after": "f46b96495a9dc9d3f11c29e48b742056a8d4abd9120b7f8ed9c18395f604c794",
      "replacements": [
        [
          "# 로드맵",
          "# 로드맵\n\n2026-11-15 R09 controller closeout: 최초 NEEDS CHANGES C0/I3/M3·15/18과 Fix1 기록 Minor1을 보존하고 같은 저장 reviewer의 후속 PASS C0/I0/M0·18/18·코드C0/I0/M0을 연결합니다. 지정6건·V01·CO-M01은 RESOLVED이며 최초 응답의 위치 메타데이터 정규화는 원문 해시와 구분해 보존합니다. R09 본문·그림 불변 metadata-only review 전이, R01~R09 done, R10~R26 pending/not-fixed, 공개59개 draft50/review9/ready0입니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r09-controller-closeout.md입니다. 다른 행의 열린 finding·M5 전체·ready·RC·소유자 승인·M6/M7 미완료를 유지합니다. 다음은 R10이며 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r09-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "before": "2fc85322397d2bfc915e55dd380064bb3afd56b5905e804bc7de3547dabf74ef",
      "after": "37f6ac5a002da7ee374c3bdb0791407fc9889f3b7a6b9a90f17f56e911aa591a",
      "replacements": [
        [
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R08 완료, R09~R26 검토 및 통합 미완료 |",
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R09 완료, R10~R26 검토 및 통합 미완료 |"
        ],
        [
          "| `src/content/docs/10-deployment-operations/build-deploy-domain-dns.md` | draft | M3-GIT-OPS |",
          "| `src/content/docs/10-deployment-operations/build-deploy-domain-dns.md` | review | M3-GIT-OPS |"
        ],
        [
          "| - [ ] | R09 `build-deploy` |",
          "| - [x] | R09 `build-deploy` |"
        ]
      ]
    },
    {
      "path": "research/source-map.md",
      "before": "422b99041e6f60c684908a510417db0cb4e800a62e675b1da057eb5f0344baa0",
      "after": "239b9effb98ee279af319c4f884dd1743874ae3ca9df2cd1c9a941b39a174499",
      "replacements": [
        [
          "R09 수정과 감사 정정은 같은 저장 reviewer 후속 확인 대기입니다.",
          "R09 수정과 감사 정정은 같은 저장 reviewer 후속 PASS C0/I0/M0으로 해소했습니다. review 전이는 R09 controller closeout에 연결하며 ready·공개 승인을 뜻하지 않습니다."
        ]
      ]
    },
    {
      "path": "docs/project/public-beta-visual-audit.md",
      "before": "bc9c50c5bc927942fc2ee03b74c561d134d3eb4c214f564beb00729f502600d2",
      "after": "fa8fb01ec74718c80f81e5c016f212a7629c61f218591cc742551f144dfd98e4",
      "replacements": [
        [
          "R09-A-I01의 같은 reviewer 후속 확인은 대기입니다.",
          "R09-A-I01은 같은 저장 reviewer의 Fix1에서 RESOLVED로 확인됐습니다. 이 감사 정정은 원본 그림을 바꾸거나 다른 행의 검토를 완료한 것이 아닙니다."
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/r09-build-deploy-adjudication.md",
      "before": "77c50c4ffdc32517df2719dc4400434cab585da0ad1a74267b8a5d0f71d75aa4",
      "after": "4f883381b79f5b21ed4f67b6b8ed8c7a7ad4f0bd3d919ccdd2e4f0b9db3462f9",
      "replacements": [
        [
          "대상 원고는 아직 draft이고 controller closeout은 미완료입니다.",
          "Fix1 기록 당시에는 대상 원고 draft와 controller closeout 미완료를 유지했습니다. 이후 상태 전이와 행 완료 판단은 r09-controller-closeout.md에 연결합니다."
        ],
        [
          "현재 남은 R09 finding은 C0/I0/M0이며 원고 draft와 controller closeout 미완료를 유지합니다.",
          "기록 후속에서 남은 R09 finding은 C0/I0/M0입니다. 당시 draft와 closeout 미완료를 유지했으며 이후 review 전이는 r09-controller-closeout.md를 따릅니다."
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
    "execution_request_path": "docs/project/reviews/public-beta-1/r09-build-deploy-request.md",
    "execution_manifest_path": "docs/project/reviews/public-beta-1/r09-build-deploy-input-manifest.json",
    "source_checked_at": "2026-11-15",
    "combined_sha256": "64b2b4611db3e03591fb3f74ba80a659a574c97601b483b4afbccc9312508218",
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
    "rereview_state": "pass-important3-minor3-and-controller-V01-and-record-CO-M01-resolved",
    "deferred_findings": [],
    "reviewed_target_sha256": "7aa5415bf0701c5e209d1996c736a1f9bf57c9d137433b780f397ed40f1a9f39",
    "current_target_sha256": "157c675aa181f355939e29963f62d9c246129ea800261256f004f5ce9195d28c",
    "metadata_transition": "metadata-only-draft-to-review",
    "closeout_path": "docs/project/reviews/public-beta-1/r09-controller-closeout.md",
    "rereview_path": "docs/project/reviews/public-beta-1/r09-build-deploy-codex-rereview.md",
    "next_scope": "R10 pending; no M5/ready/public approval"
  },
  "evidence": [
    {
      "path": "docs/project/reviews/public-beta-1/r09-controller-closeout.md",
      "sha256": "f34239f766345cf209d2a664f4ba311cd7bb7ad16bd5ea8c291013a5478ef712"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r09-build-deploy-request.md",
      "sha256": "a2495198ef9078c5cc77339ad94e34cff79691185e9f3ff84b92a9364d4aa0ec"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r09-build-deploy-input-manifest.json",
      "sha256": "3720eef573f58dddfb9e79e1207dbbb2b653cb03f903fdcb07616326d28bf67f"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r09-build-deploy-codex-review.md",
      "sha256": "3d4424c8733c5261a5bac6a2ec56caea3f2d4a7a49c361537f20de3a0a2fd88c"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r09-build-deploy-adjudication.md",
      "sha256": "4f883381b79f5b21ed4f67b6b8ed8c7a7ad4f0bd3d919ccdd2e4f0b9db3462f9"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r09-build-deploy-codex-rereview.md",
      "sha256": "a2bcbec87bcb4b0db84b28b83ae565a9672bbf29cb918ca62d1d588ffe0b4198"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r09-metadata-rereview.md",
      "sha256": "333190029a734bc002e95e1d90581d8d67395a041b6995188e3b880f4ce211a6"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r09-fix-validation.md",
      "sha256": "18f7d24af8034859c4dc16ea9a83be187040ef17b0c6a06dd5a5e1c46cbf4cfd"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r09-input-preparation-report.md",
      "sha256": "c71babcc1056f379e8d93e66b6fcfb3c3ceb9e29ceda81fb5f857aa7e4a42ded"
    }
  ]
};
const hash=b=>createHash('sha256').update(b).digest('hex');
export function r09PreCloseoutBytes(path,bytes){
 bytes=r10PreFixBytes(path,bytes);
 const e=r09Closeout.changes.find(e=>e.path===path);if(!e||hash(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R09 closeout reversal not unique');text=text.replace(after,before)}
 if(hash(text)!==e.before)throw Error('R09 pre-closeout hash mismatch');return Buffer.from(text);
}
export function validateR09Closeout(root,{read=p=>readFileSync(resolve(root,p))}={}){
 const errors=[];const required=[...r09Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)).map(e=>({path:e.path,sha256:e.after})),...r09Closeout.evidence];
 for(const e of required){try{if(hash(r10PreFixBytes(e.path,read(e.path)))!==e.sha256)errors.push('R09 closeout pinned file mismatch: '+e.path)}catch{errors.push('R09 closeout missing file: '+e.path)}}return errors;
}
