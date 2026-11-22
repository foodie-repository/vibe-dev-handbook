import {r23PreCloseoutBytes} from './r23-closeout.mjs';
import {r23PreFixBytes} from './r23-fix-transition.mjs';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
export const r22Closeout={
  "changes": [
    {
      "path": "src/content/docs/10-deployment-operations/environment-variables-config.md",
      "before": "9b03c982a1d22707565c0508c045c25c4abac12c7d8f7a4bd77ebaea37ec375f",
      "after": "68e09c8d1027060e47a2a3f88a158f43aa475a60451f9d0c412b62fe1a60cce8",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r22-deploy-config-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r22-deploy-config-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r22-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "CONTENT_MAP.md",
      "before": "ae7387a2fd44e47948af2fe566faab8302f1dfeb86cce0d17ee7862c32405e23",
      "after": "d8889be8880a2c15becfb746566db9b1208871fb0155020735d6b19ccc53d21d",
      "replacements": [
        [
          "- 상태: `draft` 27개, `seed` 0개, `review` 32개, `ready` 0개",
          "- 상태: `draft` 26개, `seed` 0개, `review` 33개, `ready` 0개"
        ],
        [
          "| [환경 변수와 설정](src/content/docs/10-deployment-operations/environment-variables-config.md) | `draft` | 11,881 | `/10-deployment-operations/environment-variables-config/` |",
          "| [환경 변수와 설정](src/content/docs/10-deployment-operations/environment-variables-config.md) | `review` | 11,881 | `/10-deployment-operations/environment-variables-config/` |"
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "before": "f6c5e164eb418e5dee6815258924607c3261eb299a26d7371a32d1bf2ca72810",
      "after": "e7c41d4d4bda37bb742094920a4eb654a4b060c3684237f5c2e6a38f73bbecf8",
      "replacements": [
        [
          "# 공개 베타 M5 독립 검토 행렬",
          "# 공개 베타 M5 독립 검토 행렬\n\n2026-11-16 R22 controller closeout: 최초 NEEDS CHANGES C0/I7/M2·13/18·치명1은 역사로 보존합니다. 같은 저장 reviewer Fix1 원고/코드/기록 PASS C0/I0/M0·18/18·치명0·F01~F09 RESOLVED를 연결합니다. 본문 불변 metadata-only review 전이, R01~R22done, R23~R26pending/not-fixed, 공개59draft26/review33/ready0입니다. 완료행22와review문서33을 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별표/JSON과 r22-controller-closeout.md입니다. M5전체·ready·RC·소유자승인·M6/M7은 남고 다음은R23입니다. 외부 쓰기는 하지 않습니다."
        ],
        [
          "| R22 | `deploy-config` | 개별 안전 | 1 | 작성·구현 완료 | pending | 대기 | false |",
          "| R22 | `deploy-config` | 개별 안전 | 1 | 작성·구현 완료 | done | 통과 | false |"
        ],
        [
          "`row_defaults`는 아직 시작하지 않은 R22~R26의 기본 상태이며 R01~R21는 완료된 `review_state` 전체로 이를 대체합니다.",
          "`row_defaults`는 아직 시작하지 않은 R23~R26의 기본 상태이며 R01~R22는 완료된 `review_state` 전체로 이를 대체합니다."
        ],
        [
          "\"block_reason\": \"R22~R26 입력 고정 및 Codex 검토 미실행\"",
          "\"block_reason\": \"R23~R26 입력 고정 및 Codex 검토 미실행\""
        ],
        [
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r22-deploy-config-codex-rereview.md\"",
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r22-deploy-config-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r22-deploy-config-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r22-deploy-config-input-manifest.json\",\"source_checked_at\":\"2026-11-16\",\"combined_sha256\":\"58c56c624506bca4d5ec56cf09f384ebdf607044bede66a5a81a4ddc1194d280\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important7-minor2-fatal1-resolved-after-fix1\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"9b03c982a1d22707565c0508c045c25c4abac12c7d8f7a4bd77ebaea37ec375f\",\"current_target_sha256\":\"68e09c8d1027060e47a2a3f88a158f43aa475a60451f9d0c412b62fe1a60cce8\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r22-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r22-deploy-config-codex-rereview.md\",\"next_scope\":\"R23 pending; no M5/ready/public approval\",\"target_hashes\":[{\"path\":\"src/content/docs/10-deployment-operations/environment-variables-config.md\",\"reviewed_sha256\":\"9b03c982a1d22707565c0508c045c25c4abac12c7d8f7a4bd77ebaea37ec375f\",\"current_sha256\":\"68e09c8d1027060e47a2a3f88a158f43aa475a60451f9d0c412b62fe1a60cce8\"}]}"
        ]
      ]
    },
    {
      "path": "PROJECT_CONTEXT.md",
      "before": "787a239f6186ae3e3ed229710a1494a40feb802d20caa9e889422e20b1543101",
      "after": "be9e9358522cd310728ad5b1d90bef7c84cd615ced1557c7f978d110da54eab4",
      "replacements": [
        [
          "# 프로젝트 컨텍스트",
          "# 프로젝트 컨텍스트\n\n2026-11-16 R22 controller closeout: 최초 NEEDS CHANGES C0/I7/M2·13/18·치명1은 역사로 보존합니다. 같은 저장 reviewer Fix1 원고/코드/기록 PASS C0/I0/M0·18/18·치명0·F01~F09 RESOLVED를 연결합니다. 본문 불변 metadata-only review 전이, R01~R22done, R23~R26pending/not-fixed, 공개59draft26/review33/ready0입니다. 완료행22와review문서33을 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별표/JSON과 r22-controller-closeout.md입니다. M5전체·ready·RC·소유자승인·M6/M7은 남고 다음은R23입니다. 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r22-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "ROADMAP.md",
      "before": "89264eb8a91ac6afa25589a5346225c86d681c45f10bc68f2bba4df46338e7ca",
      "after": "38de18061cf470b2f2b365f7cbb14512f9986f54d6fb723a9a0a6111faeb7ac0",
      "replacements": [
        [
          "# 로드맵",
          "# 로드맵\n\n2026-11-16 R22 controller closeout: 최초 NEEDS CHANGES C0/I7/M2·13/18·치명1은 역사로 보존합니다. 같은 저장 reviewer Fix1 원고/코드/기록 PASS C0/I0/M0·18/18·치명0·F01~F09 RESOLVED를 연결합니다. 본문 불변 metadata-only review 전이, R01~R22done, R23~R26pending/not-fixed, 공개59draft26/review33/ready0입니다. 완료행22와review문서33을 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별표/JSON과 r22-controller-closeout.md입니다. M5전체·ready·RC·소유자승인·M6/M7은 남고 다음은R23입니다. 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r22-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "before": "e03557dded84b63f40527d5d9b40343e09c62b16e6e19f370b0ea188dcde3a26",
      "after": "ecb44d53c9e9333697c0cdb64db362122d9215aedec373c1fb5f2693259150d3",
      "replacements": [
        [
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R21 완료, R22~R26 검토 및 통합 미완료 |",
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R22 완료, R23~R26 검토 및 통합 미완료 |"
        ],
        [
          "| `src/content/docs/10-deployment-operations/environment-variables-config.md` | draft | M3-GIT-OPS |",
          "| `src/content/docs/10-deployment-operations/environment-variables-config.md` | review | M3-GIT-OPS |"
        ],
        [
          "| - [ ] | R22 `deploy-config` |",
          "| - [x] | R22 `deploy-config` |"
        ]
      ]
    },
    {
      "path": "research/source-map.md",
      "before": "2b7780f1eecb5e6d133bdc740fe93642af7e2edd4e49e441a30deba48d44f780",
      "after": "8e3912c1bdf3e663f1d6d98663220d42bf067b3220fdc97791ac2b49fc65b5cb",
      "replacements": [
        [
          "# 출처 지도",
          "# 출처 지도\n\n2026-11-16 R22 후속 판정: 공식4페이지의 명시 범위와 좁힌 현재 주장에 대해 같은 저장 reviewer Fix1 PASS C0/I0/M0·18/18·치명0을 연결합니다. F01~F09는 해소됐으며 review 전이는 R22 controller closeout으로 연결합니다. 과거 출처·실패·미확인 범위는 유지하고 M5전체/ready/공개 승인을 뜻하지 않습니다."
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/r22-deploy-config-adjudication.md",
      "before": "a9e00717f88d892072237b4a5a81a1453669daf47d89b10ca24b99c5aaa40f6d",
      "after": "f3510d803ae46ffaab1819d0de59f294c72160f385cf5f369bdf34b23e650543",
      "replacements": [
        [
          "최종index·로컬커밋·본문불변review전이·독립controllercloseout은 별도 후속 단계이며 M5전체/ready/공개는 미완료입니다.",
          "최종index639차이0·공개안전639finding0·11파일dd7bf74로 수정단위를 커밋했습니다. 본문불변review전이·독립controllercloseout은 r22-controller-closeout.md로 연결하며 M5전체/ready/공개는 미완료입니다."
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
    "execution_request_path": "docs/project/reviews/public-beta-1/r22-deploy-config-request.md",
    "execution_manifest_path": "docs/project/reviews/public-beta-1/r22-deploy-config-input-manifest.json",
    "source_checked_at": "2026-11-16",
    "combined_sha256": "58c56c624506bca4d5ec56cf09f384ebdf607044bede66a5a81a4ddc1194d280",
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
    "rereview_state": "pass-important7-minor2-fatal1-resolved-after-fix1",
    "deferred_findings": [],
    "reviewed_target_sha256": "9b03c982a1d22707565c0508c045c25c4abac12c7d8f7a4bd77ebaea37ec375f",
    "current_target_sha256": "68e09c8d1027060e47a2a3f88a158f43aa475a60451f9d0c412b62fe1a60cce8",
    "metadata_transition": "metadata-only-draft-to-review",
    "closeout_path": "docs/project/reviews/public-beta-1/r22-controller-closeout.md",
    "rereview_path": "docs/project/reviews/public-beta-1/r22-deploy-config-codex-rereview.md",
    "next_scope": "R23 pending; no M5/ready/public approval",
    "target_hashes": [
      {
        "path": "src/content/docs/10-deployment-operations/environment-variables-config.md",
        "reviewed_sha256": "9b03c982a1d22707565c0508c045c25c4abac12c7d8f7a4bd77ebaea37ec375f",
        "current_sha256": "68e09c8d1027060e47a2a3f88a158f43aa475a60451f9d0c412b62fe1a60cce8"
      }
    ]
  },
  "evidence": [
    {
      "path": "docs/project/reviews/public-beta-1/r22-controller-closeout.md",
      "sha256": "a00441af81d1149c2443be8d70a0729354360b2676324bf8b15730154d9f2a1e"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r22-deploy-config-request.md",
      "sha256": "d475593b7d09aba0ddb220991e96ae791d29c5df3a8436c7bd1d51ea964359c5"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r22-deploy-config-input-manifest.json",
      "sha256": "12c3dab395e236d23ffb7ed911073c86cf137d69a81714ff507ea35894f70964"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r22-deploy-config-codex-review.md",
      "sha256": "15c39ce5df3e6d08cea3702a7a416f7e37cb01f8942432c8f34be6abafa74363"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r22-deploy-config-adjudication.md",
      "sha256": "f3510d803ae46ffaab1819d0de59f294c72160f385cf5f369bdf34b23e650543"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r22-deploy-config-codex-rereview.md",
      "sha256": "4f6d135d60fd4b24dcdc2dc0aa5a9789e2b605ae12abc9c3dd13984817ddae2a"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r22-fix-validation.md",
      "sha256": "bca3364a0396e59383188fe7a64126b749c1d59e1c7db17588f743917fe96f84"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r22-input-preparation-validation.md",
      "sha256": "c480561da015f8ed650040fa2a60538a5f88484bce1357595e254586cd7c0a3b"
    }
  ]
};
const hash=b=>createHash('sha256').update(b).digest('hex');
export function r22PreCloseoutBytes(path,bytes){
 bytes=r23PreFixBytes(path,r23PreCloseoutBytes(path,bytes));
 const e=r22Closeout.changes.find(e=>e.path===path);if(!e||hash(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R22 closeout reversal not unique');text=text.replace(after,before)}
 if(hash(text)!==e.before)throw Error('R22 pre-closeout hash mismatch');return Buffer.from(text);
}
export function validateR22Closeout(root,{read=p=>readFileSync(resolve(root,p))}={}){
 const errors=[];const required=[...r22Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)).map(e=>({path:e.path,sha256:e.after})),...r22Closeout.evidence];
 for(const e of required){try{if(hash(r23PreFixBytes(e.path,r23PreCloseoutBytes(e.path,read(e.path))))!==e.sha256)errors.push('R22 closeout pinned file mismatch: '+e.path)}catch{errors.push('R22 closeout missing file: '+e.path)}}return errors;
}
