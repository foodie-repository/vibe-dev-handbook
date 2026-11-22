import {r16PreFixBytes} from './r16-fix-transition.mjs';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
export const r15Closeout={
  "changes": [
    {
      "path": "src/content/docs/02-work-environment/dependencies-package-managers-environments.md",
      "before": "37fee9dd01ec240e3031675608cad065ec84c4ec51b52f2c33a40189eae02698",
      "after": "017796aa03a0ad2e37ac33bb8d847fe11fa351bfb7ca7249b105ac6597a2ebfe",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r15-work-environment-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r15-work-environment-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r15-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/02-work-environment/files-folders-paths.md",
      "before": "079ef0db8f988358f5963215466bddf5aba4789c4132c608b7c42b41cf90c44a",
      "after": "df9f467541e9628f9805a82490ab5c02f6bf45bb586b3938510df6596cec7cd8",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r15-work-environment-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r15-work-environment-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r15-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/02-work-environment/terminal-processes-ports.md",
      "before": "c34ec8f9634faa8156b8766d4c815dfab3958a775acba61e94de97c6204af444",
      "after": "e4eabb8996442e78dae3dc9639fa3c009c88fbca7c90f516b626a33d5e92ab1a",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r15-work-environment-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r15-work-environment-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r15-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "CONTENT_MAP.md",
      "before": "8f6c856d5842b2a892d278fac9d4ce6db427d2e4391799deabfdc17880bc626a",
      "after": "2decc3fee01960c173c417b1455bc5a730cc97f88943c34e3db4eb010c0f0f5d",
      "replacements": [
        [
          "- 상태: `draft` 44개, `seed` 0개, `review` 15개, `ready` 0개",
          "- 상태: `draft` 41개, `seed` 0개, `review` 18개, `ready` 0개"
        ],
        [
          "| [의존성·패키지 관리자·환경](src/content/docs/02-work-environment/dependencies-package-managers-environments.md) | `draft` | 9,538 | `/02-work-environment/dependencies-package-managers-environments/` |",
          "| [의존성·패키지 관리자·환경](src/content/docs/02-work-environment/dependencies-package-managers-environments.md) | `review` | 9,538 | `/02-work-environment/dependencies-package-managers-environments/` |"
        ],
        [
          "| [파일·폴더·경로](src/content/docs/02-work-environment/files-folders-paths.md) | `draft` | 20,820 | `/02-work-environment/files-folders-paths/` |",
          "| [파일·폴더·경로](src/content/docs/02-work-environment/files-folders-paths.md) | `review` | 20,820 | `/02-work-environment/files-folders-paths/` |"
        ],
        [
          "| [터미널·프로세스·포트](src/content/docs/02-work-environment/terminal-processes-ports.md) | `draft` | 13,409 | `/02-work-environment/terminal-processes-ports/` |",
          "| [터미널·프로세스·포트](src/content/docs/02-work-environment/terminal-processes-ports.md) | `review` | 13,409 | `/02-work-environment/terminal-processes-ports/` |"
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "before": "31d8c4f5d0f70bb6ce2bb7755c7070777d8f5791682e36b9d949f584a5d55988",
      "after": "85b3f86531cbb1a763cc845364464335bcc664780dafa50ad4175825452255bc",
      "replacements": [
        [
          "# 공개 베타 M5 독립 검토 행렬",
          "# 공개 베타 M5 독립 검토 행렬\n\n2026-11-15 R15 controller closeout: 최초 NEEDS CHANGES C0/I3/M4·세 원고17/16/16점과 준비 코드PASS/시각I1을 보존하고 같은 저장 reviewer Fix1 PASS C0/I0/M0·각18/18·준비/수정 코드·시각PASS로 일곱 ID를 RESOLVED로 연결합니다. 본문 불변 metadata-only review 전이, R01~R15 done, R16~R26 pending/not-fixed, 공개59개 draft41/review18/ready0입니다. 완료행15와 review문서18을 구분합니다. 실패 캡처4개·보충4개·불변 연습표8개 재사용과 과거 판정은 보존합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r15-controller-closeout.md입니다. 다른행 열린finding·M5전체·ready·RC·소유자승인·M6/M7미완료이고 다음은 R16이며 외부쓰기는 하지 않습니다."
        ],
        [
          "| R15 | `work-environment` | 소묶음 | 3 | 작성·구현 완료 | pending | 대기 | false |",
          "| R15 | `work-environment` | 소묶음 | 3 | 작성·구현 완료 | done | 통과 | false |"
        ],
        [
          "`row_defaults`는 아직 시작하지 않은 R15~R26의 기본 상태이며 R01~R14는 완료된 `review_state` 전체로 이를 대체합니다.",
          "`row_defaults`는 아직 시작하지 않은 R16~R26의 기본 상태이며 R01~R15는 완료된 `review_state` 전체로 이를 대체합니다."
        ],
        [
          "\"block_reason\": \"R15~R26 입력 고정 및 Codex 검토 미실행\"",
          "\"block_reason\": \"R16~R26 입력 고정 및 Codex 검토 미실행\""
        ],
        [
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r15-work-environment-codex-rereview.md\"",
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r15-work-environment-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r15-work-environment-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r15-work-environment-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"603aef88db3219bd2177fcaebb5b9c272a65cf4d72eacb6d7518be319f74bddf\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important3-minor4-resolved\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"37fee9dd01ec240e3031675608cad065ec84c4ec51b52f2c33a40189eae02698\",\"current_target_sha256\":\"017796aa03a0ad2e37ac33bb8d847fe11fa351bfb7ca7249b105ac6597a2ebfe\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r15-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r15-work-environment-codex-rereview.md\",\"next_scope\":\"R16 pending; no M5/ready/public approval\",\"target_hashes\":[{\"path\":\"src/content/docs/02-work-environment/dependencies-package-managers-environments.md\",\"reviewed_sha256\":\"37fee9dd01ec240e3031675608cad065ec84c4ec51b52f2c33a40189eae02698\",\"current_sha256\":\"017796aa03a0ad2e37ac33bb8d847fe11fa351bfb7ca7249b105ac6597a2ebfe\"},{\"path\":\"src/content/docs/02-work-environment/files-folders-paths.md\",\"reviewed_sha256\":\"079ef0db8f988358f5963215466bddf5aba4789c4132c608b7c42b41cf90c44a\",\"current_sha256\":\"df9f467541e9628f9805a82490ab5c02f6bf45bb586b3938510df6596cec7cd8\"},{\"path\":\"src/content/docs/02-work-environment/terminal-processes-ports.md\",\"reviewed_sha256\":\"c34ec8f9634faa8156b8766d4c815dfab3958a775acba61e94de97c6204af444\",\"current_sha256\":\"e4eabb8996442e78dae3dc9639fa3c009c88fbca7c90f516b626a33d5e92ab1a\"}]}"
        ]
      ]
    },
    {
      "path": "PROJECT_CONTEXT.md",
      "before": "b7c341242ec9031fb5779897f4ea54dac9523b765d19c9343a7a390be8022acd",
      "after": "34c3baf50a73895a23c2782ae0e0e393c61090b8d5aa8bb071f27ee3428aa277",
      "replacements": [
        [
          "# 프로젝트 컨텍스트",
          "# 프로젝트 컨텍스트\n\n2026-11-15 R15 controller closeout: 최초 NEEDS CHANGES C0/I3/M4·세 원고17/16/16점과 준비 코드PASS/시각I1을 보존하고 같은 저장 reviewer Fix1 PASS C0/I0/M0·각18/18·준비/수정 코드·시각PASS로 일곱 ID를 RESOLVED로 연결합니다. 본문 불변 metadata-only review 전이, R01~R15 done, R16~R26 pending/not-fixed, 공개59개 draft41/review18/ready0입니다. 완료행15와 review문서18을 구분합니다. 실패 캡처4개·보충4개·불변 연습표8개 재사용과 과거 판정은 보존합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r15-controller-closeout.md입니다. 다른행 열린finding·M5전체·ready·RC·소유자승인·M6/M7미완료이고 다음은 R16이며 외부쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r15-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "ROADMAP.md",
      "before": "8a064849b8203c1c3daff7f174fe8c8e50701df15b1ae796c6af82a26e17c295",
      "after": "0f840402e8981b994714cb405ef89b7a8460e5721e16275f3becb183f1872f98",
      "replacements": [
        [
          "# 로드맵",
          "# 로드맵\n\n2026-11-15 R15 controller closeout: 최초 NEEDS CHANGES C0/I3/M4·세 원고17/16/16점과 준비 코드PASS/시각I1을 보존하고 같은 저장 reviewer Fix1 PASS C0/I0/M0·각18/18·준비/수정 코드·시각PASS로 일곱 ID를 RESOLVED로 연결합니다. 본문 불변 metadata-only review 전이, R01~R15 done, R16~R26 pending/not-fixed, 공개59개 draft41/review18/ready0입니다. 완료행15와 review문서18을 구분합니다. 실패 캡처4개·보충4개·불변 연습표8개 재사용과 과거 판정은 보존합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r15-controller-closeout.md입니다. 다른행 열린finding·M5전체·ready·RC·소유자승인·M6/M7미완료이고 다음은 R16이며 외부쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r15-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "before": "f270d3109d4d1557dea69d33ae0c68231bcba06af2855b1faac3e2672999e988",
      "after": "352a05983e2dacfc0907c32d4795373173b8708f34bb2b745cb3d3efa2e37b10",
      "replacements": [
        [
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R14 완료, R15~R26 검토 및 통합 미완료 |",
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R15 완료, R16~R26 검토 및 통합 미완료 |"
        ],
        [
          "| `src/content/docs/02-work-environment/dependencies-package-managers-environments.md` | draft | M3-MENTAL-ENV |",
          "| `src/content/docs/02-work-environment/dependencies-package-managers-environments.md` | review | M3-MENTAL-ENV |"
        ],
        [
          "| `src/content/docs/02-work-environment/files-folders-paths.md` | draft | M3-MENTAL-ENV |",
          "| `src/content/docs/02-work-environment/files-folders-paths.md` | review | M3-MENTAL-ENV |"
        ],
        [
          "| `src/content/docs/02-work-environment/terminal-processes-ports.md` | draft | M3-MENTAL-ENV |",
          "| `src/content/docs/02-work-environment/terminal-processes-ports.md` | review | M3-MENTAL-ENV |"
        ],
        [
          "| - [ ] | R15 `work-environment` |",
          "| - [x] | R15 `work-environment` |"
        ]
      ]
    },
    {
      "path": "research/source-map.md",
      "before": "1874292b365fe5df3bf79cb20e93037f57242cefa30f8b8b136a72b1dcab7e3f",
      "after": "46cdc5dcbee86ba8f471f29980c3ecfcddfc9d9ba29fb77750c8babc58e474a0",
      "replacements": [
        [
          "# 출처 지도",
          "# 출처 지도\n\n2026-11-15 R15 후속 판정: 아래 R15 현재 적용 보충의 검토 대기는 당시 고정 후보 상태입니다. 같은 저장 reviewer Fix1 PASS C0/I0/M0·세 원고각18/18·일곱ID RESOLVED로 해소했고 review 전이는 R15 controller closeout에 연결합니다. 과거 출처·접근 실패·미확인 범위는 유지하며 M5전체/ready/공개 승인을 뜻하지 않습니다."
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/r15-work-environment-adjudication.md",
      "before": "2fcdc098db19c1a9b95d62ee6b71abbb0f6138ae7cb5dd6346e6a838a83b35f0",
      "after": "269e790e8f5d290ea90cbfa02ed61a4ab2a6977c812746c46c003c06be645a91",
      "replacements": [
        [
          "준비·수정 체크포인트의 최종 선별 커밋, R15 closeout·review 전이·M5전체·ready·공개 승인은 아직 완료하지 않았습니다.",
          "준비·수정 체크포인트는3c5b69c로 선별 커밋했습니다. R15 closeout·review 전이는 r15-controller-closeout.md에 연결하며 M5전체·ready·공개 승인은 미완료입니다."
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
    "execution_request_path": "docs/project/reviews/public-beta-1/r15-work-environment-request.md",
    "execution_manifest_path": "docs/project/reviews/public-beta-1/r15-work-environment-input-manifest.json",
    "source_checked_at": "2026-11-15",
    "combined_sha256": "603aef88db3219bd2177fcaebb5b9c272a65cf4d72eacb6d7518be319f74bddf",
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
    "rereview_state": "pass-important3-minor4-resolved",
    "deferred_findings": [],
    "reviewed_target_sha256": "37fee9dd01ec240e3031675608cad065ec84c4ec51b52f2c33a40189eae02698",
    "current_target_sha256": "017796aa03a0ad2e37ac33bb8d847fe11fa351bfb7ca7249b105ac6597a2ebfe",
    "metadata_transition": "metadata-only-draft-to-review",
    "closeout_path": "docs/project/reviews/public-beta-1/r15-controller-closeout.md",
    "rereview_path": "docs/project/reviews/public-beta-1/r15-work-environment-codex-rereview.md",
    "next_scope": "R16 pending; no M5/ready/public approval",
    "target_hashes": [
      {
        "path": "src/content/docs/02-work-environment/dependencies-package-managers-environments.md",
        "reviewed_sha256": "37fee9dd01ec240e3031675608cad065ec84c4ec51b52f2c33a40189eae02698",
        "current_sha256": "017796aa03a0ad2e37ac33bb8d847fe11fa351bfb7ca7249b105ac6597a2ebfe"
      },
      {
        "path": "src/content/docs/02-work-environment/files-folders-paths.md",
        "reviewed_sha256": "079ef0db8f988358f5963215466bddf5aba4789c4132c608b7c42b41cf90c44a",
        "current_sha256": "df9f467541e9628f9805a82490ab5c02f6bf45bb586b3938510df6596cec7cd8"
      },
      {
        "path": "src/content/docs/02-work-environment/terminal-processes-ports.md",
        "reviewed_sha256": "c34ec8f9634faa8156b8766d4c815dfab3958a775acba61e94de97c6204af444",
        "current_sha256": "e4eabb8996442e78dae3dc9639fa3c009c88fbca7c90f516b626a33d5e92ab1a"
      }
    ]
  },
  "evidence": [
    {
      "path": "docs/project/reviews/public-beta-1/r15-controller-closeout.md",
      "sha256": "c068e1735ce8803823883c0be9b07f8608cf76831eba96877fb9380f16fc6373"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r15-work-environment-request.md",
      "sha256": "c7cab1b674f13228218abbe7bfbdc959ed5a5387972f175effaf4b6fe1d9a673"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r15-work-environment-input-manifest.json",
      "sha256": "68c5f7c081c7a404868d08e56be10701709bfa95f407a8096f21b7e69aa15eeb"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r15-work-environment-codex-review.md",
      "sha256": "aa00fe4dc07cc1e7091abb1b73f971fd364283dc8c06d3fe80fe23d4b2c63e4b"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r15-work-environment-adjudication.md",
      "sha256": "269e790e8f5d290ea90cbfa02ed61a4ab2a6977c812746c46c003c06be645a91"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r15-work-environment-codex-rereview.md",
      "sha256": "b96c8fa11006bd3d874280ac2229a9bcce2bb25cff24c57684596b26a289a5c5"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r15-fix-validation.md",
      "sha256": "b1d08803b82db5d8d36522ed2c0168f05b5eb6dc44203613237997e4c74386ee"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r15-input-preparation-validation.md",
      "sha256": "8e19918f4a7568c5a107642485ea30bd636bcf7b4caf561c967ab531d76c7d74"
    }
  ]
};
const hash=b=>createHash('sha256').update(b).digest('hex');
export function r15PreCloseoutBytes(path,bytes){
 bytes=r16PreFixBytes(path,bytes);
 const e=r15Closeout.changes.find(e=>e.path===path);if(!e||hash(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R15 closeout reversal not unique');text=text.replace(after,before)}
 if(hash(text)!==e.before)throw Error('R15 pre-closeout hash mismatch');return Buffer.from(text);
}
export function validateR15Closeout(root,{read=p=>readFileSync(resolve(root,p))}={}){
 const errors=[];const required=[...r15Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)).map(e=>({path:e.path,sha256:e.after})),...r15Closeout.evidence];
 for(const e of required){try{if(hash(r16PreFixBytes(e.path,read(e.path)))!==e.sha256)errors.push('R15 closeout pinned file mismatch: '+e.path)}catch{errors.push('R15 closeout missing file: '+e.path)}}return errors;
}
