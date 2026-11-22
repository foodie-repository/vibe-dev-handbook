import {r26PreFixBytes} from './r26-fix-transition.mjs';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
export const r25Closeout={
  "changes": [
    {
      "path": "src/content/docs/reference/development-glossary.md",
      "before": "728022ddc235e2196e60c52bc0dca8c07d0c4cd160dfdb5d4d196e5afe4b260d",
      "after": "8baea08e721236af9e6a0f088539b3007366d3e16c888618e6bed92109db5c6e",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r25-reference-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r25-reference-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r25-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/reference/agent-output-glossary.md",
      "before": "92b4ef91008c2df75e2a3faa1e97c1f6e54162a62e7e9cb2eb87bcfa5f6ec595",
      "after": "f5961f6cb90f0a279c8a4a22376849a040d886a8095ff4f5b3eac2781d66fb73",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r25-reference-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r25-reference-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r25-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/reference/methodology-map.md",
      "before": "862ae45028a6e7e2360a9ecac1da3a61acb3262790734793defe5bf634ca4cb1",
      "after": "26e314f9dcdbcfba74aacbe2aaf36dc9aca8cfcb49d706473ec1a9d541398f65",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r25-reference-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r25-reference-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r25-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/reference/checklists.md",
      "before": "dfee0c52c86045d3944c221594d90a1f955490bed3f7553ec51536bcaa991431",
      "after": "60b8f586e447e690fe87052186a790eb5044245f8e869f47b42ed58d40ca1b22",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r25-reference-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r25-reference-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r25-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/reference/current-tool-mapping.md",
      "before": "dccee3444d723569ab4cfe54dd900f24c5e954d3dff2e5a1e875d5abb95985e1",
      "after": "ac9f9b1079eaf269ade123c2d3198629366c33ffd28169d09034a7a157bda248",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r25-reference-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r25-reference-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r25-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "CONTENT_MAP.md",
      "before": "d5e16b90794f4ba2b296bcc5b27aee31285107be57860e865d83171ef44814e2",
      "after": "7b04a87a626c0a39c5688d98493a04c43970ca194b70cc44550c9716c1a955d3",
      "replacements": [
        [
          "- 상태: `draft` 5개, `seed` 0개, `review` 54개, `ready` 0개",
          "- 상태: `draft` 0개, `seed` 0개, `review` 59개, `ready` 0개"
        ],
        [
          "| [개발 용어집](src/content/docs/reference/development-glossary.md) | `draft` | 27,913 | `/reference/development-glossary/` |",
          "| [개발 용어집](src/content/docs/reference/development-glossary.md) | `review` | 27,913 | `/reference/development-glossary/` |"
        ],
        [
          "| [에이전트 출력 용어집](src/content/docs/reference/agent-output-glossary.md) | `draft` | 11,003 | `/reference/agent-output-glossary/` |",
          "| [에이전트 출력 용어집](src/content/docs/reference/agent-output-glossary.md) | `review` | 11,003 | `/reference/agent-output-glossary/` |"
        ],
        [
          "| [방법론 관계 지도](src/content/docs/reference/methodology-map.md) | `draft` | 17,846 | `/reference/methodology-map/` |",
          "| [방법론 관계 지도](src/content/docs/reference/methodology-map.md) | `review` | 17,846 | `/reference/methodology-map/` |"
        ],
        [
          "| [실전 체크리스트](src/content/docs/reference/checklists.md) | `draft` | 10,426 | `/reference/checklists/` |",
          "| [실전 체크리스트](src/content/docs/reference/checklists.md) | `review` | 10,426 | `/reference/checklists/` |"
        ],
        [
          "| [현재 도구 매핑](src/content/docs/reference/current-tool-mapping.md) | `draft` | 16,515 | `/reference/current-tool-mapping/` |",
          "| [현재 도구 매핑](src/content/docs/reference/current-tool-mapping.md) | `review` | 16,515 | `/reference/current-tool-mapping/` |"
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "before": "6ab1562dcfdded5fbc2da1125c1d9ecf8d4a4a7c171f126ff46b254cc7a77323",
      "after": "4c69ec7fe687bf21d7d5e44960950963a04a2a340b377969d61ae00032b7f401",
      "replacements": [
        [
          "# 공개 베타 M5 독립 검토 행렬",
          "# 공개 베타 M5 독립 검토 행렬\n\n2026-11-22 R25 참고편: 최초 BLOCKED(C0/I3/M3), 같은 저장 reviewer의 Fix1 NEEDS CHANGES(C0/I0/M1), Fix2 PASS(C0/I0/M0)를 별도로 보존합니다. 여섯 지적은 모두 해소됐습니다. 참고편 5개는 본문 변경 없이 review로 전이합니다. 현재 집계는 R01~R25 done·R26 pending, 공개 59개 중 draft 0·review 59·ready 0입니다. M5 전체 완료나 공개 승인이 아니며 R25 실행 예외는 R26에 적용하지 않습니다. 아래의 이전 날짜 기록은 당시 상태입니다."
        ],
        [
          "| R25 | `reference` | 참고편 묶음 | 5 | 작성·구현 완료 | pending | 대기 | false |",
          "| R25 | `reference` | 참고편 묶음 | 5 | 작성·구현 완료 | done | 통과 | false |"
        ],
        [
          "`row_defaults`는 아직 시작하지 않은 R25~R26의 기본 상태이며 R01~R24는 완료된 `review_state` 전체로 이를 대체합니다.",
          "`row_defaults`는 아직 시작하지 않은 R26의 기본 상태이며 R01~R25는 완료된 `review_state` 전체로 이를 대체합니다."
        ],
        [
          "\"block_reason\": \"R25~R26 입력 고정 및 Codex 검토 미실행\"",
          "\"block_reason\": \"R26 입력 고정 및 Codex 검토 미실행\""
        ],
        [
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r25-reference-codex-rereview.md\"",
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r25-reference-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r25-reference-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r25-reference-input-manifest.json\",\"source_checked_at\":\"2026-11-22\",\"combined_sha256\":\"462b0296cc3a93dff0a8fc2ccd65d226d0a3eb76183d1245f524ef6b51921fc2\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-blocked-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"BLOCKED\",\"rereview_state\":\"pass-important3-minor3-resolved-after-fix2\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"728022ddc235e2196e60c52bc0dca8c07d0c4cd160dfdb5d4d196e5afe4b260d\",\"current_target_sha256\":\"8baea08e721236af9e6a0f088539b3007366d3e16c888618e6bed92109db5c6e\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r25-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r25-reference-codex-rereview.md\",\"next_scope\":\"R26 pending; no M5/ready/public approval\",\"target_hashes\":[{\"path\":\"src/content/docs/reference/development-glossary.md\",\"reviewed_sha256\":\"728022ddc235e2196e60c52bc0dca8c07d0c4cd160dfdb5d4d196e5afe4b260d\",\"current_sha256\":\"8baea08e721236af9e6a0f088539b3007366d3e16c888618e6bed92109db5c6e\"},{\"path\":\"src/content/docs/reference/agent-output-glossary.md\",\"reviewed_sha256\":\"92b4ef91008c2df75e2a3faa1e97c1f6e54162a62e7e9cb2eb87bcfa5f6ec595\",\"current_sha256\":\"f5961f6cb90f0a279c8a4a22376849a040d886a8095ff4f5b3eac2781d66fb73\"},{\"path\":\"src/content/docs/reference/methodology-map.md\",\"reviewed_sha256\":\"862ae45028a6e7e2360a9ecac1da3a61acb3262790734793defe5bf634ca4cb1\",\"current_sha256\":\"26e314f9dcdbcfba74aacbe2aaf36dc9aca8cfcb49d706473ec1a9d541398f65\"},{\"path\":\"src/content/docs/reference/checklists.md\",\"reviewed_sha256\":\"dfee0c52c86045d3944c221594d90a1f955490bed3f7553ec51536bcaa991431\",\"current_sha256\":\"60b8f586e447e690fe87052186a790eb5044245f8e869f47b42ed58d40ca1b22\"},{\"path\":\"src/content/docs/reference/current-tool-mapping.md\",\"reviewed_sha256\":\"dccee3444d723569ab4cfe54dd900f24c5e954d3dff2e5a1e875d5abb95985e1\",\"current_sha256\":\"ac9f9b1079eaf269ade123c2d3198629366c33ffd28169d09034a7a157bda248\"}]}"
        ]
      ]
    },
    {
      "path": "PROJECT_CONTEXT.md",
      "before": "68f4d012c1036ec2c97ad604e09f5f8cde3c1d9c78949937615cd3474e27127c",
      "after": "1a9543bae518e91f125962f226ae709650d8c67dc74b1abd4987ce92efeaa824",
      "replacements": [
        [
          "# 프로젝트 컨텍스트",
          "# 프로젝트 컨텍스트\n\n2026-11-22 R25 참고편: 최초 BLOCKED(C0/I3/M3), 같은 저장 reviewer의 Fix1 NEEDS CHANGES(C0/I0/M1), Fix2 PASS(C0/I0/M0)를 별도로 보존합니다. 여섯 지적은 모두 해소됐습니다. 참고편 5개는 본문 변경 없이 review로 전이합니다. 현재 집계는 R01~R25 done·R26 pending, 공개 59개 중 draft 0·review 59·ready 0입니다. M5 전체 완료나 공개 승인이 아니며 R25 실행 예외는 R26에 적용하지 않습니다. 아래의 이전 날짜 기록은 당시 상태입니다. 상세: `docs/project/reviews/public-beta-1/r25-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "ROADMAP.md",
      "before": "a2a487957541e4189294a0c7bd4b1951d4d9181bc2b2bd3cb9aa4a66db2fd520",
      "after": "28a3615c5b9c1bebcac799bef64474abf638edb46d049bf906790bbfd1a25c4a",
      "replacements": [
        [
          "# 로드맵",
          "# 로드맵\n\n2026-11-22 R25 참고편: 최초 BLOCKED(C0/I3/M3), 같은 저장 reviewer의 Fix1 NEEDS CHANGES(C0/I0/M1), Fix2 PASS(C0/I0/M0)를 별도로 보존합니다. 여섯 지적은 모두 해소됐습니다. 참고편 5개는 본문 변경 없이 review로 전이합니다. 현재 집계는 R01~R25 done·R26 pending, 공개 59개 중 draft 0·review 59·ready 0입니다. M5 전체 완료나 공개 승인이 아니며 R25 실행 예외는 R26에 적용하지 않습니다. 아래의 이전 날짜 기록은 당시 상태입니다. 상세: `docs/project/reviews/public-beta-1/r25-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "before": "c51886cd409246467a7d8614be3c5dea5645ebf16e84067bcc3faf7d087c998d",
      "after": "62d94080d5e7fa098f314b7421aed8df1d220a525f02d63b64dfdfe5febb9e8c",
      "replacements": [
        [
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R24 완료, R25~R26 검토 및 통합 미완료 |",
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R25 완료, R26 검토 및 통합 미완료 |"
        ],
        [
          "| `src/content/docs/reference/development-glossary.md` | draft | M3-REF |",
          "| `src/content/docs/reference/development-glossary.md` | review | M3-REF |"
        ],
        [
          "| `src/content/docs/reference/agent-output-glossary.md` | draft | M3-REF |",
          "| `src/content/docs/reference/agent-output-glossary.md` | review | M3-REF |"
        ],
        [
          "| `src/content/docs/reference/methodology-map.md` | draft | M3-REF |",
          "| `src/content/docs/reference/methodology-map.md` | review | M3-REF |"
        ],
        [
          "| `src/content/docs/reference/checklists.md` | draft | M3-REF |",
          "| `src/content/docs/reference/checklists.md` | review | M3-REF |"
        ],
        [
          "| `src/content/docs/reference/current-tool-mapping.md` | draft | M3-REF |",
          "| `src/content/docs/reference/current-tool-mapping.md` | review | M3-REF |"
        ],
        [
          "| - [ ] | R25 `reference` |",
          "| - [x] | R25 `reference` |"
        ]
      ]
    },
    {
      "path": "research/source-map.md",
      "before": "20630d38aac24d897063ed5908ce00f6808a4c291bd7d62b697893480ab9e418",
      "after": "f8ba5e6b6e81ad0ea1a48db0b0f7403b6752967c5743fd6efeeef20965820872",
      "replacements": [
        [
          "# 출처 지도",
          "# 출처 지도\n\n2026-11-22 R25 후속 판정: 방법론 여섯 항목의 직접 근거와 제품별 확인 한계는 같은 저장 reviewer의 Fix2 PASS로 확정했습니다. 과거 미확인 기록은 당시 상태로 보존하며 제품 기능 전체나 실제 계정 검증으로 확대하지 않습니다. 상세 근거: r25-reference-adjudication.md 및 r25-fix-validation.md."
        ]
      ]
    },
    {
      "path": "docs/project/public-beta-content-audit.md",
      "before": "102055e29ad4496dda114a4e102f02221099bd0f965099b002bad0364666c2a6",
      "after": "cdc463f4aafe16562ff591f7debe7ab015c686ed8b4c9e43e50d4c45fa593bc6",
      "replacements": [
        [
          "# 공개 베타 콘텐츠 포트폴리오 감사",
          "# 공개 베타 콘텐츠 포트폴리오 감사\n\n2026-11-22 R25 후속 판정: 방법론 여섯 항목의 직접 근거와 제품별 확인 한계는 같은 저장 reviewer의 Fix2 PASS로 확정했습니다. 과거 미확인 기록은 당시 상태로 보존하며 제품 기능 전체나 실제 계정 검증으로 확대하지 않습니다. 상세 근거: r25-reference-adjudication.md 및 r25-fix-validation.md."
        ]
      ]
    },
    {
      "path": "research/public-beta-source-gap-register.md",
      "before": "f813a978a9743b18b29baa2cc6a21a2659851b253961e61ef9720deb1f8d4a84",
      "after": "01868aa36509e2334f6a6c3702ff0f239f0e43f0629a343033b92aff8385936d",
      "replacements": [
        [
          "# 공개 베타 출처 공백 레지스터",
          "# 공개 베타 출처 공백 레지스터\n\n2026-11-22 R25 후속 판정: 방법론 여섯 항목의 직접 근거와 제품별 확인 한계는 같은 저장 reviewer의 Fix2 PASS로 확정했습니다. 과거 미확인 기록은 당시 상태로 보존하며 제품 기능 전체나 실제 계정 검증으로 확대하지 않습니다. 상세 근거: r25-reference-adjudication.md 및 r25-fix-validation.md."
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
    "execution_request_path": "docs/project/reviews/public-beta-1/r25-reference-request.md",
    "execution_manifest_path": "docs/project/reviews/public-beta-1/r25-reference-input-manifest.json",
    "source_checked_at": "2026-11-22",
    "combined_sha256": "462b0296cc3a93dff0a8fc2ccd65d226d0a3eb76183d1245f524ef6b51921fc2",
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
    "rereview_state": "pass-important3-minor3-resolved-after-fix2",
    "deferred_findings": [],
    "reviewed_target_sha256": "728022ddc235e2196e60c52bc0dca8c07d0c4cd160dfdb5d4d196e5afe4b260d",
    "current_target_sha256": "8baea08e721236af9e6a0f088539b3007366d3e16c888618e6bed92109db5c6e",
    "metadata_transition": "metadata-only-draft-to-review",
    "closeout_path": "docs/project/reviews/public-beta-1/r25-controller-closeout.md",
    "rereview_path": "docs/project/reviews/public-beta-1/r25-reference-codex-rereview.md",
    "next_scope": "R26 pending; no M5/ready/public approval",
    "target_hashes": [
      {
        "path": "src/content/docs/reference/development-glossary.md",
        "reviewed_sha256": "728022ddc235e2196e60c52bc0dca8c07d0c4cd160dfdb5d4d196e5afe4b260d",
        "current_sha256": "8baea08e721236af9e6a0f088539b3007366d3e16c888618e6bed92109db5c6e"
      },
      {
        "path": "src/content/docs/reference/agent-output-glossary.md",
        "reviewed_sha256": "92b4ef91008c2df75e2a3faa1e97c1f6e54162a62e7e9cb2eb87bcfa5f6ec595",
        "current_sha256": "f5961f6cb90f0a279c8a4a22376849a040d886a8095ff4f5b3eac2781d66fb73"
      },
      {
        "path": "src/content/docs/reference/methodology-map.md",
        "reviewed_sha256": "862ae45028a6e7e2360a9ecac1da3a61acb3262790734793defe5bf634ca4cb1",
        "current_sha256": "26e314f9dcdbcfba74aacbe2aaf36dc9aca8cfcb49d706473ec1a9d541398f65"
      },
      {
        "path": "src/content/docs/reference/checklists.md",
        "reviewed_sha256": "dfee0c52c86045d3944c221594d90a1f955490bed3f7553ec51536bcaa991431",
        "current_sha256": "60b8f586e447e690fe87052186a790eb5044245f8e869f47b42ed58d40ca1b22"
      },
      {
        "path": "src/content/docs/reference/current-tool-mapping.md",
        "reviewed_sha256": "dccee3444d723569ab4cfe54dd900f24c5e954d3dff2e5a1e875d5abb95985e1",
        "current_sha256": "ac9f9b1079eaf269ade123c2d3198629366c33ffd28169d09034a7a157bda248"
      }
    ]
  },
  "evidence": [
    {
      "path": "docs/project/reviews/public-beta-1/r25-controller-closeout.md",
      "sha256": "e527d313517d228e2b611256d1da67d65aad573a7f967160c74640e35cb6320e"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r25-reference-request.md",
      "sha256": "ffb259409d029f1fa0cd02680f4ba6c7878287756224de030a21a57e9096aa44"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r25-reference-input-manifest.json",
      "sha256": "fe408dbb2ace4eb8b767593d8b5d4c852655c36b08824cfe8c2b035b6be41d10"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r25-reference-codex-review.md",
      "sha256": "bc62ca1eba193285b9b8a8414192819967a80be03dee218cda72dee98e122528"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r25-reference-adjudication.md",
      "sha256": "52d3b1644c7f8ba0230727eb1d4f3b1290039ff6a928c326abeaa094f98cf3ec"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r25-reference-codex-rereview-fix1.md",
      "sha256": "4ac607c1e77cd57e2b27669d67a0dc52b18d6967e08fee3ccc0a9ecadc4bd864"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r25-reference-codex-rereview.md",
      "sha256": "a9d016bf6672989a5207f5995211f64394978d54891bb02b9396c6cb312ed2c2"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r25-fix-validation.md",
      "sha256": "2b9000c1bfdbea1b934623f21e49955e3280a65fecbd4b6e5288efad2313403b"
    }
  ]
};
const hash=b=>createHash('sha256').update(b).digest('hex');
export function r25PreCloseoutBytes(path,bytes){
 bytes=r26PreFixBytes(path,bytes);
 const e=r25Closeout.changes.find(e=>e.path===path);if(!e||hash(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R25 closeout reversal not unique');text=text.replace(after,before)}
 if(hash(text)!==e.before)throw Error('R25 pre-closeout hash mismatch');return Buffer.from(text);
}
export function validateR25Closeout(root,{read:load=p=>readFileSync(resolve(root,p))}={}){
 const read=p=>r26PreFixBytes(p,load(p));
 const errors=[];const required=[...r25Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)).map(e=>({path:e.path,sha256:e.after})),...r25Closeout.evidence];
 for(const e of required){try{if(hash(read(e.path))!==e.sha256)errors.push('R25 closeout pinned file mismatch: '+e.path)}catch{errors.push('R25 closeout missing file: '+e.path)}}return errors;
}
