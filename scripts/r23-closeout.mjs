import {r24PreCloseoutBytes} from './r24-closeout.mjs';
import {r24PreFixBytes} from './r24-fix-transition.mjs';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
export const r23Closeout={
  "changes": [
    {
      "path": "src/content/docs/11-ai-native/agent-review-and-verification.md",
      "before": "099b6ae0c9bbefa18a5fa48df092634ea9424faa5b6c8b5e573a6dbb64da2be1",
      "after": "b362a31b7397b97b7f4652bf0b6c9e5ffd696d7f8c9e4c634711b3400d992741",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r23-ai-support-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r23-ai-support-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r23-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/11-ai-native/context-spec-harness-loop.md",
      "before": "598c5c2eccff8f1111dbc7a0f6f525204de55e103d6ebe82ad4de9e84b6d3461",
      "after": "b0b441d1bde4ac968d75561523834bee6f36cd22384cedf83aab6018f6b1e725",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r23-ai-support-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r23-ai-support-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r23-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/11-ai-native/permissions-sandbox-worktrees.md",
      "before": "4ea123ba72d960995cfd8b7c486213feb3be25344a44a0df34a543928ff96c66",
      "after": "e3f1aefb39a8fdb748ff10208c1b8c5d84f323a953154484814c19539fc4c6f6",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r23-ai-support-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r23-ai-support-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r23-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "CONTENT_MAP.md",
      "before": "bab8a0fb7603b45aa8508dcc264650c88f8b6b5715c25ec7c95bcaf79f8fa151",
      "after": "bc57c65ef32bb85f46227311356a2a3da14dd2d5f88b64c1caa01b108001c18c",
      "replacements": [
        [
          "- 상태: `draft` 26개, `seed` 0개, `review` 33개, `ready` 0개",
          "- 상태: `draft` 23개, `seed` 0개, `review` 36개, `ready` 0개"
        ],
        [
          "| [에이전트 결과 리뷰와 검증](src/content/docs/11-ai-native/agent-review-and-verification.md) | `draft` | 8,285 | `/11-ai-native/agent-review-and-verification/` |",
          "| [에이전트 결과 리뷰와 검증](src/content/docs/11-ai-native/agent-review-and-verification.md) | `review` | 8,285 | `/11-ai-native/agent-review-and-verification/` |"
        ],
        [
          "| [컨텍스트·스펙·하네스·루프](src/content/docs/11-ai-native/context-spec-harness-loop.md) | `draft` | 9,062 | `/11-ai-native/context-spec-harness-loop/` |",
          "| [컨텍스트·스펙·하네스·루프](src/content/docs/11-ai-native/context-spec-harness-loop.md) | `review` | 9,062 | `/11-ai-native/context-spec-harness-loop/` |"
        ],
        [
          "| [권한·샌드박스·worktree](src/content/docs/11-ai-native/permissions-sandbox-worktrees.md) | `draft` | 13,131 | `/11-ai-native/permissions-sandbox-worktrees/` |",
          "| [권한·샌드박스·worktree](src/content/docs/11-ai-native/permissions-sandbox-worktrees.md) | `review` | 13,131 | `/11-ai-native/permissions-sandbox-worktrees/` |"
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "before": "e7c41d4d4bda37bb742094920a4eb654a4b060c3684237f5c2e6a38f73bbecf8",
      "after": "64f675aaafc2feac638dbd3162ce57311851787e2c8350e8ad7fefc49c4247ec",
      "replacements": [
        [
          "# 공개 베타 M5 독립 검토 행렬",
          "# 공개 베타 M5 독립 검토 행렬\n\n2026-11-16 R23 controller closeout: 최초 NEEDS CHANGES C0/I3/M3·각15/17/15·치명0·준비Minor1은 역사로 보존합니다. 같은 저장 reviewer Fix1 원고/준비 코드 PASS C0/I0/M0·각18/18·치명0·7finding RESOLVED를 연결합니다. 본문 불변 metadata-only review 전이, R01~R23done, R24~R26pending/not-fixed, 공개59draft23/review36/ready0입니다. 완료행23과review문서36을 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별표/JSON과 r23-controller-closeout.md입니다. M5전체·ready·RC·소유자승인·M6/M7은 남고 다음은R24입니다. 외부 쓰기는 하지 않습니다."
        ],
        [
          "| R23 | `ai-support` | 소묶음 | 3 | 작성·구현 완료 | pending | 대기 | false |",
          "| R23 | `ai-support` | 소묶음 | 3 | 작성·구현 완료 | done | 통과 | false |"
        ],
        [
          "`row_defaults`는 아직 시작하지 않은 R23~R26의 기본 상태이며 R01~R22는 완료된 `review_state` 전체로 이를 대체합니다.",
          "`row_defaults`는 아직 시작하지 않은 R24~R26의 기본 상태이며 R01~R23는 완료된 `review_state` 전체로 이를 대체합니다."
        ],
        [
          "\"block_reason\": \"R23~R26 입력 고정 및 Codex 검토 미실행\"",
          "\"block_reason\": \"R24~R26 입력 고정 및 Codex 검토 미실행\""
        ],
        [
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r23-ai-support-codex-rereview.md\"",
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r23-ai-support-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r23-ai-support-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r23-ai-support-input-manifest.json\",\"source_checked_at\":\"2026-11-16\",\"combined_sha256\":\"cae85ed2b9ab927efd2bd226eea7a597d315768dbe8591a7b5ed0e8fb9a69cea\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important3-minor3-preparation-minor1-resolved-after-fix1\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"099b6ae0c9bbefa18a5fa48df092634ea9424faa5b6c8b5e573a6dbb64da2be1\",\"current_target_sha256\":\"b362a31b7397b97b7f4652bf0b6c9e5ffd696d7f8c9e4c634711b3400d992741\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r23-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r23-ai-support-codex-rereview.md\",\"next_scope\":\"R24 pending; no M5/ready/public approval\",\"target_hashes\":[{\"path\":\"src/content/docs/11-ai-native/agent-review-and-verification.md\",\"reviewed_sha256\":\"099b6ae0c9bbefa18a5fa48df092634ea9424faa5b6c8b5e573a6dbb64da2be1\",\"current_sha256\":\"b362a31b7397b97b7f4652bf0b6c9e5ffd696d7f8c9e4c634711b3400d992741\"},{\"path\":\"src/content/docs/11-ai-native/context-spec-harness-loop.md\",\"reviewed_sha256\":\"598c5c2eccff8f1111dbc7a0f6f525204de55e103d6ebe82ad4de9e84b6d3461\",\"current_sha256\":\"b0b441d1bde4ac968d75561523834bee6f36cd22384cedf83aab6018f6b1e725\"},{\"path\":\"src/content/docs/11-ai-native/permissions-sandbox-worktrees.md\",\"reviewed_sha256\":\"4ea123ba72d960995cfd8b7c486213feb3be25344a44a0df34a543928ff96c66\",\"current_sha256\":\"e3f1aefb39a8fdb748ff10208c1b8c5d84f323a953154484814c19539fc4c6f6\"}]}"
        ]
      ]
    },
    {
      "path": "PROJECT_CONTEXT.md",
      "before": "be9e9358522cd310728ad5b1d90bef7c84cd615ced1557c7f978d110da54eab4",
      "after": "1fd0badfd76daa4da0835b03a1c779c5e2c4158203f2de87345e3094ff37417d",
      "replacements": [
        [
          "# 프로젝트 컨텍스트",
          "# 프로젝트 컨텍스트\n\n2026-11-16 R23 controller closeout: 최초 NEEDS CHANGES C0/I3/M3·각15/17/15·치명0·준비Minor1은 역사로 보존합니다. 같은 저장 reviewer Fix1 원고/준비 코드 PASS C0/I0/M0·각18/18·치명0·7finding RESOLVED를 연결합니다. 본문 불변 metadata-only review 전이, R01~R23done, R24~R26pending/not-fixed, 공개59draft23/review36/ready0입니다. 완료행23과review문서36을 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별표/JSON과 r23-controller-closeout.md입니다. M5전체·ready·RC·소유자승인·M6/M7은 남고 다음은R24입니다. 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r23-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "ROADMAP.md",
      "before": "38de18061cf470b2f2b365f7cbb14512f9986f54d6fb723a9a0a6111faeb7ac0",
      "after": "225d8ca60314bd4c7078a2bb2b72a89df1594801025262dae8f885925454454c",
      "replacements": [
        [
          "# 로드맵",
          "# 로드맵\n\n2026-11-16 R23 controller closeout: 최초 NEEDS CHANGES C0/I3/M3·각15/17/15·치명0·준비Minor1은 역사로 보존합니다. 같은 저장 reviewer Fix1 원고/준비 코드 PASS C0/I0/M0·각18/18·치명0·7finding RESOLVED를 연결합니다. 본문 불변 metadata-only review 전이, R01~R23done, R24~R26pending/not-fixed, 공개59draft23/review36/ready0입니다. 완료행23과review문서36을 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별표/JSON과 r23-controller-closeout.md입니다. M5전체·ready·RC·소유자승인·M6/M7은 남고 다음은R24입니다. 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r23-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "before": "ecb44d53c9e9333697c0cdb64db362122d9215aedec373c1fb5f2693259150d3",
      "after": "150ab96e6383242b42f4cef02808a38cd41f0f6aeb1cdfd39665d3cd10f584e2",
      "replacements": [
        [
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R22 완료, R23~R26 검토 및 통합 미완료 |",
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R23 완료, R24~R26 검토 및 통합 미완료 |"
        ],
        [
          "| `src/content/docs/11-ai-native/agent-review-and-verification.md` | draft | M3-AI |",
          "| `src/content/docs/11-ai-native/agent-review-and-verification.md` | review | M3-AI |"
        ],
        [
          "| `src/content/docs/11-ai-native/context-spec-harness-loop.md` | draft | M3-AI |",
          "| `src/content/docs/11-ai-native/context-spec-harness-loop.md` | review | M3-AI |"
        ],
        [
          "| `src/content/docs/11-ai-native/permissions-sandbox-worktrees.md` | draft | M3-AI |",
          "| `src/content/docs/11-ai-native/permissions-sandbox-worktrees.md` | review | M3-AI |"
        ],
        [
          "| - [ ] | R23 `ai-support` |",
          "| - [x] | R23 `ai-support` |"
        ]
      ]
    },
    {
      "path": "research/source-map.md",
      "before": "01d8c20585f74314b41c1309369139ab8e87655fed5ace199c04bf08a18b84c6",
      "after": "8fb691e92e07e52c3393811831b6a609986b7dd6b3b0e22423d2b99039ad2aa9",
      "replacements": [
        [
          "# 출처 지도",
          "# 출처 지도\n\n2026-11-16 R23 후속 판정: 공식16페이지의 명시 구간과 날짜별 확인 한계를 유지하며 같은 저장 reviewer Fix1 PASS C0/I0/M0·각18/18·치명0·7finding RESOLVED를 연결합니다. 추가 원전 조사나 not-confirmed 갱신 없이 metadata review 전이는 R23 controller closeout으로 연결합니다. M5전체/ready/공개 승인이 아닙니다."
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
    "execution_request_path": "docs/project/reviews/public-beta-1/r23-ai-support-request.md",
    "execution_manifest_path": "docs/project/reviews/public-beta-1/r23-ai-support-input-manifest.json",
    "source_checked_at": "2026-11-16",
    "combined_sha256": "cae85ed2b9ab927efd2bd226eea7a597d315768dbe8591a7b5ed0e8fb9a69cea",
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
    "rereview_state": "pass-important3-minor3-preparation-minor1-resolved-after-fix1",
    "deferred_findings": [],
    "reviewed_target_sha256": "099b6ae0c9bbefa18a5fa48df092634ea9424faa5b6c8b5e573a6dbb64da2be1",
    "current_target_sha256": "b362a31b7397b97b7f4652bf0b6c9e5ffd696d7f8c9e4c634711b3400d992741",
    "metadata_transition": "metadata-only-draft-to-review",
    "closeout_path": "docs/project/reviews/public-beta-1/r23-controller-closeout.md",
    "rereview_path": "docs/project/reviews/public-beta-1/r23-ai-support-codex-rereview.md",
    "next_scope": "R24 pending; no M5/ready/public approval",
    "target_hashes": [
      {
        "path": "src/content/docs/11-ai-native/agent-review-and-verification.md",
        "reviewed_sha256": "099b6ae0c9bbefa18a5fa48df092634ea9424faa5b6c8b5e573a6dbb64da2be1",
        "current_sha256": "b362a31b7397b97b7f4652bf0b6c9e5ffd696d7f8c9e4c634711b3400d992741"
      },
      {
        "path": "src/content/docs/11-ai-native/context-spec-harness-loop.md",
        "reviewed_sha256": "598c5c2eccff8f1111dbc7a0f6f525204de55e103d6ebe82ad4de9e84b6d3461",
        "current_sha256": "b0b441d1bde4ac968d75561523834bee6f36cd22384cedf83aab6018f6b1e725"
      },
      {
        "path": "src/content/docs/11-ai-native/permissions-sandbox-worktrees.md",
        "reviewed_sha256": "4ea123ba72d960995cfd8b7c486213feb3be25344a44a0df34a543928ff96c66",
        "current_sha256": "e3f1aefb39a8fdb748ff10208c1b8c5d84f323a953154484814c19539fc4c6f6"
      }
    ]
  },
  "evidence": [
    {
      "path": "docs/project/reviews/public-beta-1/r23-controller-closeout.md",
      "sha256": "80f95770de50fa6f00359da0b8496aea5ac481f336734b0e4dde089bc5370be1"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r23-ai-support-request.md",
      "sha256": "f08e7fde7f7822b3c5454d95ae1fc884c36b623fa2b68d14e3699af0a075fa8c"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r23-ai-support-input-manifest.json",
      "sha256": "fe3ee55f1ec94cc0e64eb498d87d9a27e0515c21a75e70e22aae23830de7d6ad"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r23-ai-support-codex-review.md",
      "sha256": "3ff0984f78417595696a0d2d80c5566a1ad9d048a13061a9a1901c6e679bfbc4"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r23-ai-support-adjudication.md",
      "sha256": "8bf67dff1449e40b246a1af2d700a71ab4168d5c89dd663a08a8bcabc6777965"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r23-ai-support-codex-rereview.md",
      "sha256": "bf3d73d16afe87da8c7371305047b0fb84677de272c4a3fcd09856e03b16eb58"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r23-fix-validation.md",
      "sha256": "423d2234baa1b82d509fb5b0eca63a8d52df7e7c122b47b9a9e9855b08cb1c1a"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r23-input-preparation-validation.md",
      "sha256": "780555dc03ef7fb7ef984cbbe8ac789779a1c9e07ffe74efa5dac5a5175f3d3d"
    }
  ]
};
const hash=b=>createHash('sha256').update(b).digest('hex');
export function r23PreCloseoutBytes(path,bytes){
 bytes=r24PreFixBytes(path,r24PreCloseoutBytes(path,bytes));
 const e=r23Closeout.changes.find(e=>e.path===path);if(!e||hash(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R23 closeout reversal not unique');text=text.replace(after,before)}
 if(hash(text)!==e.before)throw Error('R23 pre-closeout hash mismatch');return Buffer.from(text);
}
export function validateR23Closeout(root,{read=p=>readFileSync(resolve(root,p))}={}){
 const errors=[];const required=[...r23Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)).map(e=>({path:e.path,sha256:e.after})),...r23Closeout.evidence];
 for(const e of required){try{if(hash(r24PreFixBytes(e.path,r24PreCloseoutBytes(e.path,read(e.path))))!==e.sha256)errors.push('R23 closeout pinned file mismatch: '+e.path)}catch{errors.push('R23 closeout missing file: '+e.path)}}return errors;
}
