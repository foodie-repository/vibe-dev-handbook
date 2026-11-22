import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {r07PreFixBytes} from './r07-fix-transition.mjs';
export const r06Closeout={
  "changes": [
    {
      "path": "src/content/docs/06-requirements-design/prd-sdd-tdd.md",
      "before": "7ad9962b380f3a16a3edb238626c4067c39bb2e86a04dfa3d6bce10a2e24a687",
      "after": "5b0c91327e30d694d5025e0f6b378f88406f616bce284e5c3a74b8e2fe67207d",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r06-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "CONTENT_MAP.md",
      "before": "947fcb991d2d2f3eee291b1a26ce81fdcfb5d672b9c8c8357487ac908348b12b",
      "after": "fcbd29a41594dd8e7b957bf736d340f64a4184768a5701cc66c6dda24ad3ea96",
      "replacements": [
        [
          "- 상태: `draft` 54개, `seed` 0개, `review` 5개, `ready` 0개",
          "- 상태: `draft` 53개, `seed` 0개, `review` 6개, `ready` 0개"
        ],
        [
          "| `draft` | 19,154 | `/06-requirements-design/prd-sdd-tdd/` |",
          "| `review` | 19,154 | `/06-requirements-design/prd-sdd-tdd/` |"
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "before": "1d5a2fd29e3c262d9801ac3aa68320ff412faa6ce15dd8d032477f2a2524d316",
      "after": "1332cb3fb2ed3f43694c5ddb9017f19961ca69e0f82b20324c6224af59055626",
      "replacements": [
        [
          "# 공개 베타 M5 독립 검토 행렬",
          "# 공개 베타 M5 독립 검토 행렬\n\n2026-11-15 R06 controller closeout: 최초 BLOCKED C0/I1/M3·16/18과 별도 E01, 원문28청크·PNG18 검토를 보존하고 같은 저장 reviewer 후속 PASS C0/I0/M0·18/18 및 코드 PASS C0/I0/M0을 연결합니다. I01·M01~M03·E01은 RESOLVED이며 E01은 실제 오래된 요구 ID 오류의 Important 성격을 후속 확정하고 두 장 교정 뒤 해소했습니다. R06 본문·그림 불변 metadata-only review 전이, R01~R06 done, R07~R26 pending/not-fixed, 공개59개 draft53/review6/ready0입니다. 인접 테스트 전략·방법론 지도는 이번 영향 문장만 검토됐고 draft를 유지합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r06-controller-closeout.md입니다. 기존 다른 행의 열린 finding과 M5 전체·ready·RC·소유자 승인·M6/M7 미완료 경계를 유지합니다. 다음은 R07이며 외부 쓰기는 하지 않습니다."
        ],
        [
          "| R06 | `prd-sdd-tdd` | 개별 심층 | 1 | 작성·구현 완료 | pending | 대기 | false |",
          "| R06 | `prd-sdd-tdd` | 개별 심층 | 1 | 작성·구현 완료 | done | 통과 | false |"
        ],
        [
          "`row_defaults`는 아직 시작하지 않은 R06~R26의 기본 상태이며 R01~R05는 완료된 `review_state` 전체로 이를 대체합니다.",
          "`row_defaults`는 아직 시작하지 않은 R07~R26의 기본 상태이며 R01~R06는 완료된 `review_state` 전체로 이를 대체합니다. R07과 방법론 지도 배정 행은 R06의 국소 참조·날짜 수정 결과를 입력에 포함하되 해당 전체 검토를 생략하지 않습니다."
        ],
        [
          "\"block_reason\": \"R06~R26 입력 고정 및 Codex 검토 미실행\"",
          "\"block_reason\": \"R07~R26 입력 고정 및 Codex 검토 미실행\""
        ],
        [
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-codex-rereview.md\"",
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"a03038d69a14c6d74e9ad07332e51312eff6e4f5675b1130db4f719fe32b3fda\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-blocked-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"BLOCKED\",\"rereview_state\":\"pass-i01-minor3-e01-confirmed-important-all-resolved\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"7ad9962b380f3a16a3edb238626c4067c39bb2e86a04dfa3d6bce10a2e24a687\",\"current_target_sha256\":\"5b0c91327e30d694d5025e0f6b378f88406f616bce284e5c3a74b8e2fe67207d\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r06-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-codex-rereview.md\",\"next_scope\":\"R07 pending; no M5/ready/public approval\"}"
        ]
      ]
    },
    {
      "path": "PROJECT_CONTEXT.md",
      "before": "0195202212508b740caf7d38d87fa88393a6c280aba25695bd6543dfd568bc76",
      "after": "00d6a944deae8d8d7b2fd3e932beeaf4f6286a60a1d11f6b726336b28eb389a3",
      "replacements": [
        [
          "# 프로젝트 컨텍스트",
          "# 프로젝트 컨텍스트\n\n2026-11-15 R06 controller closeout: 최초 BLOCKED C0/I1/M3·16/18과 별도 E01, 원문28청크·PNG18 검토를 보존하고 같은 저장 reviewer 후속 PASS C0/I0/M0·18/18 및 코드 PASS C0/I0/M0을 연결합니다. I01·M01~M03·E01은 RESOLVED이며 E01은 실제 오래된 요구 ID 오류의 Important 성격을 후속 확정하고 두 장 교정 뒤 해소했습니다. R06 본문·그림 불변 metadata-only review 전이, R01~R06 done, R07~R26 pending/not-fixed, 공개59개 draft53/review6/ready0입니다. 인접 테스트 전략·방법론 지도는 이번 영향 문장만 검토됐고 draft를 유지합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r06-controller-closeout.md입니다. 기존 다른 행의 열린 finding과 M5 전체·ready·RC·소유자 승인·M6/M7 미완료 경계를 유지합니다. 다음은 R07이며 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r06-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "ROADMAP.md",
      "before": "a455d10fed70444178f33e707d881e3945196181577f707d6fc683c3e92afad0",
      "after": "ac5545a212e0d942be1719777bd457c524f67b817f067b339d2b9576532879de",
      "replacements": [
        [
          "# 로드맵",
          "# 로드맵\n\n2026-11-15 R06 controller closeout: 최초 BLOCKED C0/I1/M3·16/18과 별도 E01, 원문28청크·PNG18 검토를 보존하고 같은 저장 reviewer 후속 PASS C0/I0/M0·18/18 및 코드 PASS C0/I0/M0을 연결합니다. I01·M01~M03·E01은 RESOLVED이며 E01은 실제 오래된 요구 ID 오류의 Important 성격을 후속 확정하고 두 장 교정 뒤 해소했습니다. R06 본문·그림 불변 metadata-only review 전이, R01~R06 done, R07~R26 pending/not-fixed, 공개59개 draft53/review6/ready0입니다. 인접 테스트 전략·방법론 지도는 이번 영향 문장만 검토됐고 draft를 유지합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r06-controller-closeout.md입니다. 기존 다른 행의 열린 finding과 M5 전체·ready·RC·소유자 승인·M6/M7 미완료 경계를 유지합니다. 다음은 R07이며 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r06-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "before": "8d6721d1fdcdf33466b011d8ca80f4cbd189cb7c5f8286d7b35a87e6a94ab567",
      "after": "6574d9ffdd49ed45a68b8db5e31e37e42a4e0d42565b66aaa4dd7a1c019f9366",
      "replacements": [
        [
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R05 완료, R06~R26 검토 및 통합 미완료 |",
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R06 완료, R07~R26 검토 및 통합 미완료 |"
        ],
        [
          "| `src/content/docs/06-requirements-design/prd-sdd-tdd.md` | draft | M3-FRONT-DESIGN |",
          "| `src/content/docs/06-requirements-design/prd-sdd-tdd.md` | review | M3-FRONT-DESIGN |"
        ],
        [
          "| - [ ] | R06 `prd-sdd-tdd` |",
          "| - [x] | R06 `prd-sdd-tdd` |"
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
    "execution_request_path": "docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-request.md",
    "execution_manifest_path": "docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-input-manifest.json",
    "source_checked_at": "2026-11-15",
    "combined_sha256": "a03038d69a14c6d74e9ad07332e51312eff6e4f5675b1130db4f719fe32b3fda",
    "actual_invocation": "completed",
    "observed_model_context_effort": "gpt-6-astra/high; fresh initial/read-only; same persisted session resumed",
    "result_state": "pass-via-followup-original-blocked-preserved",
    "adjudication_state": "complete",
    "valid_independent_evidence": true,
    "open_findings": {
      "critical": 0,
      "important": 0,
      "minor": 0
    },
    "historical_verdict": "BLOCKED",
    "rereview_state": "pass-i01-minor3-e01-confirmed-important-all-resolved",
    "deferred_findings": [],
    "reviewed_target_sha256": "7ad9962b380f3a16a3edb238626c4067c39bb2e86a04dfa3d6bce10a2e24a687",
    "current_target_sha256": "5b0c91327e30d694d5025e0f6b378f88406f616bce284e5c3a74b8e2fe67207d",
    "metadata_transition": "metadata-only-draft-to-review",
    "closeout_path": "docs/project/reviews/public-beta-1/r06-controller-closeout.md",
    "rereview_path": "docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-codex-rereview.md",
    "next_scope": "R07 pending; no M5/ready/public approval"
  },
  "evidence": [
    {
      "path": "docs/project/reviews/public-beta-1/r06-controller-closeout.md",
      "sha256": "ba01572abcb5190247862e6464596bbc7cb918522296e6ad78e8a4b3eef7ca04"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-request.md",
      "sha256": "c1744b212193933e6b0e2d78cd7cbe6b05820de05bd4aa368c1f507c0289caca"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-input-manifest.json",
      "sha256": "1c330fd6930f170027c7295b42c862137652bcc588d50464c9f993038e5262a1"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-codex-review.md",
      "sha256": "ae459d008109664788067a75637b5181b993aacd11f07cde17a42755e340b727"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-adjudication.md",
      "sha256": "c6f1ed05200676a8c93325dd84790d78554c38d94be87493aa2f9aa17d0e08bf"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-codex-rereview.md",
      "sha256": "1c065d28e6f136ee17374a17d8316502d99a77e24a0ff3de43b67b8cb0262e80"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r06-fix-validation.md",
      "sha256": "e613b3c434149b3e3ab8982ec54c9664d3ae75a45e5b3a70be8b1d1cd21c1f9d"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r06-case-context.json",
      "sha256": "e1b11dbc0167172b7266e642cffd8f1c716218d68d34933034509c340709b10a"
    }
  ]
};
const hash=b=>createHash('sha256').update(b).digest('hex');
export function r06PreCloseoutBytes(path,bytes){
 bytes=r07PreFixBytes(path,bytes);
 const e=r06Closeout.changes.find(e=>e.path===path);if(!e||hash(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R06 closeout reversal not unique');text=text.replace(after,before)}
 if(hash(text)!==e.before)throw Error('R06 pre-closeout hash mismatch');return Buffer.from(text);
}
export function validateR06Closeout(root,{read=p=>readFileSync(resolve(root,p))}={}){
 const errors=[];const required=[...r06Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)).map(e=>({path:e.path,sha256:e.after})),...r06Closeout.evidence];
 for(const e of required){try{if(hash(r07PreFixBytes(e.path,read(e.path)))!==e.sha256)errors.push('R06 closeout pinned file mismatch: '+e.path)}catch{errors.push('R06 closeout missing file: '+e.path)}}return errors;
}
