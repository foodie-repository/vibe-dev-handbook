import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {r03PreFixBytes} from './r03-fix-transition.mjs';

// Exact R02 controller transition, never a generic way to bless changed review inputs.
export const r02Closeout = {
  "changes": [
    {
      "path": "src/content/docs/03-full-stack/client-server-full-stack.md",
      "before": "33f7bb6416664603b9d78494ad072e0af9fb1b43806470a56c0def4b63721a70",
      "after": "38b6f61b9a981626245d26d75b5ded63b02b676d7e43442161953d8bc5f30282",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r02-client-server-execution-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r02-client-server-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r02-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "CONTENT_MAP.md",
      "before": "ff40771c3b71fd4b19f381b97310d8de2466e889dc72015df8f28aa7d5cf5a25",
      "after": "8b6410686de4bb74ed02fd2b9f00f5e2a41c405e92708b183c7cac7035f26b47",
      "replacements": [
        [
          "- 상태: `draft` 58개, `seed` 0개, `review` 1개, `ready` 0개",
          "- 상태: `draft` 57개, `seed` 0개, `review` 2개, `ready` 0개"
        ],
        [
          "| `draft` | 16,184 | `/03-full-stack/client-server-full-stack/` |",
          "| `review` | 16,184 | `/03-full-stack/client-server-full-stack/` |"
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "before": "b88c0bdc3d84f18a52295fe82083fcebed3c894ff27c8843229af7413967d938",
      "after": "da547c82641189872bc5d456b8123a8e635f3fed8ece89cffbe879b56f61a3b6",
      "replacements": [
        [
          "# 공개 베타 M5 독립 검토 행렬",
          "# 공개 베타 M5 독립 검토 행렬\n\n2026-10-25 R02 controller closeout: 최초 BLOCKED·17/18·원문51청크/PNG18 검토는 역사로 보존하고 B01 RESOLVED와 Minor3 후속 PASS C0/I0/M0·100% 재판정을 연결했습니다. R01·R02는 done, R03~R26은 pending/not-fixed입니다. R02 원고는 본문 불변 metadata-only review이며 공개59개 draft57/review2/ready0입니다. M5 전체·R26·ready·소유자 공개 승인·RC·외부 쓰기는 미완료입니다. 아래 날짜별 산문은 당시 기록이며 현재 정본은 이 문단·행별 표·JSON입니다. 다음은 별도 재개 시 R03이며 이번 실행에서는 시작하지 않습니다."
        ],
        [
          "## 목적과 현재 경계",
          "## 2026-09-12 당시 목적과 경계 (역사)"
        ],
        [
          "## 검증과 재개 조건",
          "## 2026-09-12 당시 검증과 재개 조건 (역사)"
        ],
        [
          "| R02 | `client-server` | 개별 심층 | 1 | 작성·구현 완료 | pending | 대기 | false |",
          "| R02 | `client-server` | 개별 심층 | 1 | 작성·구현 완료 | done | 통과 | false |"
        ],
        [
          "`row_defaults`는 아직 시작하지 않은 R02~R26의 기본 상태이며 R01은 완료된 `review_state` 전체로 이를 대체합니다.",
          "`row_defaults`는 아직 시작하지 않은 R03~R26의 기본 상태이며 R01·R02는 완료된 `review_state` 전체로 이를 대체합니다."
        ],
        [
          "\"block_reason\": \"R02~R26 입력 고정 및 Codex 검토 미실행\"",
          "\"block_reason\": \"R03~R26 입력 고정 및 Codex 검토 미실행\""
        ],
        [
          "\"review_state\": {\"status\":\"pending\",\"required_review_state\":\"대기\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r02-client-server-execution-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r02-client-server-execution-manifest.json\",\"source_checked_at\":\"2026-10-15\",\"combined_sha256\":\"acf16f2062b5ac6101f3f7a6556d5ce17ca19b61e7f0deaa56f6a62df44faa8c\",\"actual_invocation\":\"not-run\",\"observed_model_context_effort\":\"not-confirmed\",\"result_state\":\"not-run\",\"adjudication_state\":\"not-run\",\"valid_independent_evidence\":false,\"open_findings\":{\"critical\":\"not-assessed\",\"important\":\"not-assessed\",\"minor\":\"not-assessed\"}}",
          "\"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r02-client-server-execution-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r02-client-server-execution-manifest.json\",\"source_checked_at\":\"2026-10-15\",\"combined_sha256\":\"acf16f2062b5ac6101f3f7a6556d5ce17ca19b61e7f0deaa56f6a62df44faa8c\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh/read-only verified\",\"result_state\":\"pass-via-followups-original-blocked-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"BLOCKED\",\"b01_state\":\"resolved\",\"rereview_state\":\"pass-minor3-resolved\",\"reviewed_target_sha256\":\"33f7bb6416664603b9d78494ad072e0af9fb1b43806470a56c0def4b63721a70\",\"current_target_sha256\":\"38b6f61b9a981626245d26d75b5ded63b02b676d7e43442161953d8bc5f30282\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r02-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r02-client-server-codex-rereview.md\",\"next_scope\":\"R03 pending; not started in this run\"}"
        ]
      ]
    },
    {
      "path": "PROJECT_CONTEXT.md",
      "before": "ac5b98fc5f7b2afc3f9c3cfa7d1927da2a547d6237d47d967331df1cec911a56",
      "after": "05847dc7b627bc8b78d6e4a07f2b3ad41d9d0a90ea8a8c6b17c19c1bca39e70c",
      "replacements": [
        [
          "# 프로젝트 컨텍스트",
          "# 프로젝트 컨텍스트\n\n2026-10-25 R02 controller closeout: 최초 BLOCKED·17/18·원문51청크/PNG18 검토는 역사로 보존하고 B01 RESOLVED와 Minor3 후속 PASS C0/I0/M0·100% 재판정을 연결했습니다. R01·R02는 done, R03~R26은 pending/not-fixed입니다. R02 원고는 본문 불변 metadata-only review이며 공개59개 draft57/review2/ready0입니다. M5 전체·R26·ready·소유자 공개 승인·RC·외부 쓰기는 미완료입니다. 아래 날짜별 산문은 당시 기록이며 현재 정본은 이 문단·행별 표·JSON입니다. 다음은 별도 재개 시 R03이며 이번 실행에서는 시작하지 않습니다. 상세 근거는 `docs/project/reviews/public-beta-1/r02-controller-closeout.md`입니다."
        ]
      ]
    },
    {
      "path": "ROADMAP.md",
      "before": "594ab0b39fefacb1d8c2f315de07e15e8cf942994019cf34c46365a34d9e2c43",
      "after": "8a133edb54b06191a29b36ef5e52c91d125997a84306ba68c4e6762c7095f106",
      "replacements": [
        [
          "# 로드맵",
          "# 로드맵\n\n2026-10-25 R02 controller closeout: 최초 BLOCKED·17/18·원문51청크/PNG18 검토는 역사로 보존하고 B01 RESOLVED와 Minor3 후속 PASS C0/I0/M0·100% 재판정을 연결했습니다. R01·R02는 done, R03~R26은 pending/not-fixed입니다. R02 원고는 본문 불변 metadata-only review이며 공개59개 draft57/review2/ready0입니다. M5 전체·R26·ready·소유자 공개 승인·RC·외부 쓰기는 미완료입니다. 아래 날짜별 산문은 당시 기록이며 현재 정본은 이 문단·행별 표·JSON입니다. 다음은 별도 재개 시 R03이며 이번 실행에서는 시작하지 않습니다. 상세 근거는 `docs/project/reviews/public-beta-1/r02-controller-closeout.md`입니다."
        ]
      ]
    },
    {
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "before": "458a0f58dcb1e74068698feba70b752b276dac68f380583559ec9e3f02691ded",
      "after": "e67781109b71c8212db64f94613d76c651925d6a59ae6b262fb6eab4feb6db9e",
      "replacements": [
        [
          "| - [ ] | R02 `client-server` | `03-full-stack/client-server-full-stack.md` | 개별 심층 | `public-beta-1/r02-client-server-codex-review.md` | `public-beta-1/r02-client-server-adjudication.md` |",
          "| - [x] | R02 `client-server` | `03-full-stack/client-server-full-stack.md` | 개별 심층 | `public-beta-1/r02-client-server-codex-review.md` | `public-beta-1/r02-client-server-adjudication.md` |"
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
    "execution_request_path": "docs/project/reviews/public-beta-1/r02-client-server-execution-request.md",
    "execution_manifest_path": "docs/project/reviews/public-beta-1/r02-client-server-execution-manifest.json",
    "source_checked_at": "2026-10-15",
    "combined_sha256": "acf16f2062b5ac6101f3f7a6556d5ce17ca19b61e7f0deaa56f6a62df44faa8c",
    "actual_invocation": "completed",
    "observed_model_context_effort": "gpt-6-astra/high; fresh/read-only verified",
    "result_state": "pass-via-followups-original-blocked-preserved",
    "adjudication_state": "complete",
    "valid_independent_evidence": true,
    "open_findings": {
      "critical": 0,
      "important": 0,
      "minor": 0
    },
    "historical_verdict": "BLOCKED",
    "b01_state": "resolved",
    "rereview_state": "pass-minor3-resolved",
    "reviewed_target_sha256": "33f7bb6416664603b9d78494ad072e0af9fb1b43806470a56c0def4b63721a70",
    "current_target_sha256": "38b6f61b9a981626245d26d75b5ded63b02b676d7e43442161953d8bc5f30282",
    "metadata_transition": "metadata-only-draft-to-review",
    "closeout_path": "docs/project/reviews/public-beta-1/r02-controller-closeout.md",
    "rereview_path": "docs/project/reviews/public-beta-1/r02-client-server-codex-rereview.md",
    "next_scope": "R03 pending; not started in this run"
  },
  "evidence": [
    {
      "path": "docs/project/reviews/public-beta-1/r02-controller-closeout.md",
      "sha256": "e7eb37974d86f30c0d448a698b4735aa0355e1d3294c5a4f0a850c223d5fe674"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r02-client-server-codex-review.md",
      "sha256": "98472e1e842caa3c751cb1b32017182b481a8640192257675fd6e4541b1b89be"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r02-b01-evidence.md",
      "sha256": "b182868185e1b2b56a592b313add8b216d4ea2839e66c0eb6180cb7fdde74254"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r02-b01-followup-review.md",
      "sha256": "798e6b84ea57616220b2f6f2f1da68c1142de2517442ebc6074cde129b83e77b"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r02-client-server-adjudication.md",
      "sha256": "65fdb3fa480dda171a2ba4d4e798cdc88d5fc7a060cc4c3f4b315dce7934ab06"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r02-client-server-codex-rereview.md",
      "sha256": "eca02b2bb6d61fe76f84863e8e9e18d06b039313214a412215660441e5238a5b"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r02-successor-amendment.md",
      "sha256": "3f5228dea6b0ba82fb3f53de6b590cf7185813a01f805a4d84bf9035a743048f"
    }
  ]
};
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
export function r02PreCloseoutBytes(path, bytes) {
  bytes = r03PreFixBytes(path, bytes);
  const entry = r02Closeout.changes.find(x => x.path === path);
  if (!entry || hash(bytes) !== entry.after) return bytes;
  let text = bytes.toString('utf8');
  for (const [before, after] of [...entry.replacements].reverse()) {
    if (text.split(after).length !== 2) throw new Error('R02 closeout reversal is not unique');
    text = text.replace(after, before);
  }
  if (hash(text) !== entry.before) throw new Error('R02 pre-closeout hash mismatch');
  return Buffer.from(text);
}
export function validateR02Closeout(root) {
  const errors = [];
  const required = [...r02Closeout.changes.filter(x => !['PROJECT_CONTEXT.md','ROADMAP.md'].includes(x.path)).map(x => ({path:x.path,sha256:x.after})), ...r02Closeout.evidence];
  for (const entry of required) {
    try {
      if (hash(r03PreFixBytes(entry.path, readFileSync(resolve(root, entry.path)))) !== entry.sha256) errors.push('R02 closeout pinned file mismatch: '+entry.path);
    } catch { errors.push('R02 closeout missing file: '+entry.path); }
  }
  return errors;
}
