import {r21PreFixBytes} from './r21-fix-transition.mjs';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
export const r20Closeout={
  "changes": [
    {
      "path": "src/content/docs/08-quality/debugging-observability.md",
      "before": "c384bb5c15d3778426b73e509cf81867276461ddba888967ed2e37e6b2e047fe",
      "after": "edc46880d09b9bb0288ff76e8dd58f13eab67ade82a16d35530d17f55d90b0f6",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r20-quality-support-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r20-fix2-followup-review.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r20-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/08-quality/performance-security.md",
      "before": "ea04fef29f4338a592328ad784713a59431d5f96a910f19d1157465ad105a324",
      "after": "3a4cf7084e72f2224cf38b0af9c4d4056bf0a0ae4d5442d7a6b1afe06dbcdedf",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r20-quality-support-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r20-fix2-followup-review.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r20-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "CONTENT_MAP.md",
      "before": "a4281934deaa665a6ff23ceffc51840abd531675d079ce74eea08ad6a16e5c78",
      "after": "1d0d601caa9375a259950489c8221104d8efa3c4cb5ffed64996c12b1a00e0e1",
      "replacements": [
        [
          "- 상태: `draft` 31개, `seed` 0개, `review` 28개, `ready` 0개",
          "- 상태: `draft` 29개, `seed` 0개, `review` 30개, `ready` 0개"
        ],
        [
          "| [디버깅과 관측 가능성](src/content/docs/08-quality/debugging-observability.md) | `draft` | 11,710 | `/08-quality/debugging-observability/` |",
          "| [디버깅과 관측 가능성](src/content/docs/08-quality/debugging-observability.md) | `review` | 11,710 | `/08-quality/debugging-observability/` |"
        ],
        [
          "| [성능과 보안](src/content/docs/08-quality/performance-security.md) | `draft` | 13,198 | `/08-quality/performance-security/` |",
          "| [성능과 보안](src/content/docs/08-quality/performance-security.md) | `review` | 13,198 | `/08-quality/performance-security/` |"
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "before": "167a5cf689386cdefb5dd822426c435ce96c3d5a5e8f46979ed6b732f1c6f20a",
      "after": "487bbedc2e70d8d308a450f709b161bec4e30da25465a4db345c6c82994b786e",
      "replacements": [
        [
          "# 공개 베타 M5 독립 검토 행렬",
          "# 공개 베타 M5 독립 검토 행렬\n\n2026-11-16 R20 controller closeout: 최초 NEEDS CHANGES C0/I2/M3·15/16점과 캡처Minor1, Fix1 원고PASS with Minor·17/18점 및 기록Minor1을 보존합니다. 같은 저장 reviewer Fix2의 원고·코드·기록 PASS C0/I0/M0·두18/18·M03/F1-M01 RESOLVED를 연결하며 앞선I2와나머지Minor 해소를 승계합니다. R04-M08은R20에서해소하고R04당시보류는역사로보존합니다. 본문 불변 metadata-only review 전이, R01~R20done, R21~R26pending/not-fixed, 공개59개draft29/review30/ready0입니다. 완료행20과review문서30을 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별표/JSON과 r20-controller-closeout.md입니다. 다른 열린finding·M5전체·ready·RC·소유자승인·M6/M7은 남고 다음은R21입니다. 외부 쓰기는 하지 않습니다."
        ],
        [
          "| R20 | `quality-support` | 소묶음 | 2 | 작성·구현 완료 | pending | 대기 | false |",
          "| R20 | `quality-support` | 소묶음 | 2 | 작성·구현 완료 | done | 통과 | false |"
        ],
        [
          "`row_defaults`는 아직 시작하지 않은 R20~R26의 기본 상태이며 R01~R19는 완료된 `review_state` 전체로 이를 대체합니다.",
          "`row_defaults`는 아직 시작하지 않은 R21~R26의 기본 상태이며 R01~R20는 완료된 `review_state` 전체로 이를 대체합니다."
        ],
        [
          "\"block_reason\": \"R20~R26 입력 고정 및 Codex 검토 미실행\"",
          "\"block_reason\": \"R21~R26 입력 고정 및 Codex 검토 미실행\""
        ],
        [
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r20-quality-support-codex-rereview.md\"",
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r20-quality-support-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r20-quality-support-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r20-quality-support-input-manifest.json\",\"source_checked_at\":\"2026-11-16\",\"combined_sha256\":\"a8aa006a7590172fee04a8876c668183f6ec8ad8fe2a1615952dcd3572d44073\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important2-minor5-resolved-after-fix2\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"c384bb5c15d3778426b73e509cf81867276461ddba888967ed2e37e6b2e047fe\",\"current_target_sha256\":\"edc46880d09b9bb0288ff76e8dd58f13eab67ade82a16d35530d17f55d90b0f6\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r20-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r20-quality-support-codex-rereview.md\",\"next_scope\":\"R21 pending; no M5/ready/public approval\",\"target_hashes\":[{\"path\":\"src/content/docs/08-quality/debugging-observability.md\",\"reviewed_sha256\":\"c384bb5c15d3778426b73e509cf81867276461ddba888967ed2e37e6b2e047fe\",\"current_sha256\":\"edc46880d09b9bb0288ff76e8dd58f13eab67ade82a16d35530d17f55d90b0f6\"},{\"path\":\"src/content/docs/08-quality/performance-security.md\",\"reviewed_sha256\":\"ea04fef29f4338a592328ad784713a59431d5f96a910f19d1157465ad105a324\",\"current_sha256\":\"3a4cf7084e72f2224cf38b0af9c4d4056bf0a0ae4d5442d7a6b1afe06dbcdedf\"}],\"evidence_followup_path\":\"docs/project/reviews/public-beta-1/r20-fix2-followup-review.md\",\"inherited_resolution\":{\"id\":\"R04-M08\",\"state\":\"resolved\",\"historical_state\":\"R04 deferred/open preserved\",\"evidence_path\":\"docs/project/reviews/public-beta-1/r20-quality-support-codex-review.md\"}}"
        ]
      ]
    },
    {
      "path": "PROJECT_CONTEXT.md",
      "before": "b32bee76059b24d36a1211d5a7e46c54028404c4ee5e5c5b90c996eeca02547d",
      "after": "17a14974b7d2a8273686e11732884dba170ac529645e4085e74f584fabe6b66d",
      "replacements": [
        [
          "# 프로젝트 컨텍스트",
          "# 프로젝트 컨텍스트\n\n2026-11-16 R20 controller closeout: 최초 NEEDS CHANGES C0/I2/M3·15/16점과 캡처Minor1, Fix1 원고PASS with Minor·17/18점 및 기록Minor1을 보존합니다. 같은 저장 reviewer Fix2의 원고·코드·기록 PASS C0/I0/M0·두18/18·M03/F1-M01 RESOLVED를 연결하며 앞선I2와나머지Minor 해소를 승계합니다. R04-M08은R20에서해소하고R04당시보류는역사로보존합니다. 본문 불변 metadata-only review 전이, R01~R20done, R21~R26pending/not-fixed, 공개59개draft29/review30/ready0입니다. 완료행20과review문서30을 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별표/JSON과 r20-controller-closeout.md입니다. 다른 열린finding·M5전체·ready·RC·소유자승인·M6/M7은 남고 다음은R21입니다. 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r20-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "ROADMAP.md",
      "before": "2a24910c876b3e40617ce2588a479f265ea2cdb3e9d86d20766c08931ed71ea7",
      "after": "e21066f1f07d7ea59d582fa798dd96b67ea962b71d3503e76bd259076b7d6f3c",
      "replacements": [
        [
          "# 로드맵",
          "# 로드맵\n\n2026-11-16 R20 controller closeout: 최초 NEEDS CHANGES C0/I2/M3·15/16점과 캡처Minor1, Fix1 원고PASS with Minor·17/18점 및 기록Minor1을 보존합니다. 같은 저장 reviewer Fix2의 원고·코드·기록 PASS C0/I0/M0·두18/18·M03/F1-M01 RESOLVED를 연결하며 앞선I2와나머지Minor 해소를 승계합니다. R04-M08은R20에서해소하고R04당시보류는역사로보존합니다. 본문 불변 metadata-only review 전이, R01~R20done, R21~R26pending/not-fixed, 공개59개draft29/review30/ready0입니다. 완료행20과review문서30을 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별표/JSON과 r20-controller-closeout.md입니다. 다른 열린finding·M5전체·ready·RC·소유자승인·M6/M7은 남고 다음은R21입니다. 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r20-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "before": "c4e3c1bd86154889f20e77dfc79d04f8da2bc3ea6f4c32245103eef9344844c0",
      "after": "f057373b70a25e28e38c5811dd833c4214b1c26d0698e56092808424c3f3bd94",
      "replacements": [
        [
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R19 완료, R20~R26 검토 및 통합 미완료 |",
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R20 완료, R21~R26 검토 및 통합 미완료 |"
        ],
        [
          "| `src/content/docs/08-quality/debugging-observability.md` | draft | M3-WORKFLOW-QUALITY |",
          "| `src/content/docs/08-quality/debugging-observability.md` | review | M3-WORKFLOW-QUALITY |"
        ],
        [
          "| `src/content/docs/08-quality/performance-security.md` | draft | M3-WORKFLOW-QUALITY |",
          "| `src/content/docs/08-quality/performance-security.md` | review | M3-WORKFLOW-QUALITY |"
        ],
        [
          "| - [ ] | R20 `quality-support` |",
          "| - [x] | R20 `quality-support` |"
        ]
      ]
    },
    {
      "path": "research/source-map.md",
      "before": "8b77133b3870030fd2da46fe7b99d834b333461b57e33686c29d236502186f1c",
      "after": "3b4ec3a738cce9717f9858c24d3f5b91f34874b7990248ac55c6dd5f9010d70c",
      "replacements": [
        [
          "# 출처 지도",
          "# 출처 지도\n\n2026-11-16 R20 후속 판정: 아래 R20 현재 적용 보충의 검토 대기는 당시 고정 후보 상태입니다. 같은 저장 reviewer Fix2의 원고/코드/기록 PASS C0/I0/M0·두 원고각18/18·M03/F1-M01 RESOLVED와 앞선 I2/M01/M02/P-M01 해소를 연결했고 review 전이는 R20 controller closeout에 연결합니다. 과거 출처·접근 실패·미확인 범위는 유지하며 M5전체/ready/공개 승인을 뜻하지 않습니다."
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/r20-quality-support-adjudication.md",
      "before": "6c8e2f6a6e65bf4bdd31101dada7482524c00b98222f5c7a7aa4ca4a7de3658a",
      "after": "7c1ac1faca48e4c9773d159ca0537a4d2966bf5d715953a390eb54405f25afa8",
      "replacements": [
        [
          "로컬 체크포인트와 별도 controller closeout은 뒤따르는 절차이며 아직 R20done/review/M5/ready/공개를 선언하지 않습니다.",
          "준비·수정19파일은a10b115로 로컬 커밋했습니다. 본문 불변 R20done/review 전이와 controller closeout은 r20-controller-closeout.md로 연결하며 M5전체/ready/공개는 미완료입니다."
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
    "execution_request_path": "docs/project/reviews/public-beta-1/r20-quality-support-request.md",
    "execution_manifest_path": "docs/project/reviews/public-beta-1/r20-quality-support-input-manifest.json",
    "source_checked_at": "2026-11-16",
    "combined_sha256": "a8aa006a7590172fee04a8876c668183f6ec8ad8fe2a1615952dcd3572d44073",
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
    "rereview_state": "pass-important2-minor5-resolved-after-fix2",
    "deferred_findings": [],
    "reviewed_target_sha256": "c384bb5c15d3778426b73e509cf81867276461ddba888967ed2e37e6b2e047fe",
    "current_target_sha256": "edc46880d09b9bb0288ff76e8dd58f13eab67ade82a16d35530d17f55d90b0f6",
    "metadata_transition": "metadata-only-draft-to-review",
    "closeout_path": "docs/project/reviews/public-beta-1/r20-controller-closeout.md",
    "rereview_path": "docs/project/reviews/public-beta-1/r20-quality-support-codex-rereview.md",
    "next_scope": "R21 pending; no M5/ready/public approval",
    "target_hashes": [
      {
        "path": "src/content/docs/08-quality/debugging-observability.md",
        "reviewed_sha256": "c384bb5c15d3778426b73e509cf81867276461ddba888967ed2e37e6b2e047fe",
        "current_sha256": "edc46880d09b9bb0288ff76e8dd58f13eab67ade82a16d35530d17f55d90b0f6"
      },
      {
        "path": "src/content/docs/08-quality/performance-security.md",
        "reviewed_sha256": "ea04fef29f4338a592328ad784713a59431d5f96a910f19d1157465ad105a324",
        "current_sha256": "3a4cf7084e72f2224cf38b0af9c4d4056bf0a0ae4d5442d7a6b1afe06dbcdedf"
      }
    ],
    "evidence_followup_path": "docs/project/reviews/public-beta-1/r20-fix2-followup-review.md",
    "inherited_resolution": {
      "id": "R04-M08",
      "state": "resolved",
      "historical_state": "R04 deferred/open preserved",
      "evidence_path": "docs/project/reviews/public-beta-1/r20-quality-support-codex-review.md"
    }
  },
  "evidence": [
    {
      "path": "docs/project/reviews/public-beta-1/r20-controller-closeout.md",
      "sha256": "b40c386edfe5e4e223d3f407b21b2a4c8b3c26615ffac9ba600218b1dc7c693b"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r20-quality-support-request.md",
      "sha256": "92ba0a56f4b0c5e6ece687ebdb9254f149762cb133758d1a9272957f499d202a"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r20-quality-support-input-manifest.json",
      "sha256": "a2b5431648bc8a5e258587a5184242210f4c0106e4ad93c94562f46169e85b57"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r20-quality-support-codex-review.md",
      "sha256": "e1d2a9ba15a7d3a23046f25c56b82e8880ed6ae7c1f660cca826734d35bb5dda"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r20-quality-support-adjudication.md",
      "sha256": "7c1ac1faca48e4c9773d159ca0537a4d2966bf5d715953a390eb54405f25afa8"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r20-quality-support-codex-rereview.md",
      "sha256": "0bcd7a25aaaf3473a767f500c30bf0d374972e9938fa49bf9e59d0bbf4ff2461"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r20-fix-validation.md",
      "sha256": "ea0bb124585ac8093bda11332a57e6fe3870cea25f7f5c25288ae6c6502c85d6"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r20-fix2-validation.md",
      "sha256": "c4012ecf5d169f6b81663f0f13dfbdec455d198eebdf5f290b3699bd3130687f"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r20-input-preparation-validation.md",
      "sha256": "c7f4440773bbf8ff2147eeb30531c202668729fc8593dd605dbb646eafd702cc"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r20-fix2-followup-review.md",
      "sha256": "9df4ac72e148240defd4902e8c301b17d536daa982d163196253a0ed7f080595"
    }
  ]
};
const hash=b=>createHash('sha256').update(b).digest('hex');
export function r20PreCloseoutBytes(path,bytes){
 bytes=r21PreFixBytes(path,bytes);
 const e=r20Closeout.changes.find(e=>e.path===path);if(!e||hash(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R20 closeout reversal not unique');text=text.replace(after,before)}
 if(hash(text)!==e.before)throw Error('R20 pre-closeout hash mismatch');return Buffer.from(text);
}
export function validateR20Closeout(root,{read=p=>readFileSync(resolve(root,p))}={}){
 const errors=[];const required=[...r20Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)).map(e=>({path:e.path,sha256:e.after})),...r20Closeout.evidence];
 for(const e of required){try{if(hash(r21PreFixBytes(e.path,read(e.path)))!==e.sha256)errors.push('R20 closeout pinned file mismatch: '+e.path)}catch{errors.push('R20 closeout missing file: '+e.path)}}return errors;
}
