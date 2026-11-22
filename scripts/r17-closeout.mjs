import {createHash} from 'node:crypto';
import {r18PreFixBytes} from './r18-fix-transition.mjs';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
export const r17Closeout={
  "changes": [
    {
      "path": "src/content/docs/05-frontend/accessibility-responsive-design.md",
      "before": "96c18123b4e5bd3ff13ed640dd4a6d390effbed6f01abbb603649f4f7c1e7cf3",
      "after": "f771876d195f11c237b1b548bec3d26056f6d1bf1e98b84df81fc0f91e97ef21",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r17-frontend-support-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r17-frontend-support-evidence-followup.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r17-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/05-frontend/ui-state-and-ux.md",
      "before": "357e478e8e7eaff7c1c4767e14b6c6eef85ae311c7b4c566d8fb315d061e3f60",
      "after": "32e0a610adf75d6b9f4942c2cf8fb94980948ce346950e934660fcb57c2db5ad",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r17-frontend-support-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r17-frontend-support-evidence-followup.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r17-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "CONTENT_MAP.md",
      "before": "c66220af7a042efbbfa7180b5de88244079a3a904b6de9d88f05e5c0073fd7da",
      "after": "ef190425678b5ae4cfd30135a630fae4b4407769a2e7b3b93b068dec2b71755d",
      "replacements": [
        [
          "- 상태: `draft` 38개, `seed` 0개, `review` 21개, `ready` 0개",
          "- 상태: `draft` 36개, `seed` 0개, `review` 23개, `ready` 0개"
        ],
        [
          "| [접근성과 반응형 설계](src/content/docs/05-frontend/accessibility-responsive-design.md) | `draft` | 12,431 | `/05-frontend/accessibility-responsive-design/` |",
          "| [접근성과 반응형 설계](src/content/docs/05-frontend/accessibility-responsive-design.md) | `review` | 12,431 | `/05-frontend/accessibility-responsive-design/` |"
        ],
        [
          "| [UI 상태와 사용자 경험](src/content/docs/05-frontend/ui-state-and-ux.md) | `draft` | 14,362 | `/05-frontend/ui-state-and-ux/` |",
          "| [UI 상태와 사용자 경험](src/content/docs/05-frontend/ui-state-and-ux.md) | `review` | 14,362 | `/05-frontend/ui-state-and-ux/` |"
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "before": "56db4b69415a02851cf7362f7ee795d1517765c3f70d2447d960d647c3e4e7d4",
      "after": "1c6e40bc5725e7cd39047137cae309f55e5c8ea1694be36bdf24557a056da753",
      "replacements": [
        [
          "# 공개 베타 M5 독립 검토 행렬",
          "# 공개 베타 M5 독립 검토 행렬\n\n2026-11-15 R17 controller closeout: 최초 NEEDS CHANGES C0/I3/M3·각17/18·준비기록M1과 Fix1의 내용/시각/코드 PASS·증거 BLOCKED를 보존합니다. 같은 저장 reviewer의 증거 한정 후속 PASS C0/I0/M0·두 원고각18/18·7ID RESOLVED를 연결합니다. 본문불변 metadata-only review 전이, R01~R17done, R18~R26pending/not-fixed, 공개59개draft36/review23/ready0입니다. 완료행17과 review문서23을 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별표/JSON과 r17-controller-closeout.md입니다. 다른 열린finding·M5전체·ready·RC·소유자승인·M6/M7은 미완료이며 다음은R18이고 외부쓰기는 하지 않습니다."
        ],
        [
          "| R17 | `frontend-support` | 소묶음 | 2 | 작성·구현 완료 | pending | 대기 | false |",
          "| R17 | `frontend-support` | 소묶음 | 2 | 작성·구현 완료 | done | 통과 | false |"
        ],
        [
          "`row_defaults`는 아직 시작하지 않은 R17~R26의 기본 상태이며 R01~R16는 완료된 `review_state` 전체로 이를 대체합니다.",
          "`row_defaults`는 아직 시작하지 않은 R18~R26의 기본 상태이며 R01~R17는 완료된 `review_state` 전체로 이를 대체합니다."
        ],
        [
          "\"block_reason\": \"R17~R26 입력 고정 및 Codex 검토 미실행\"",
          "\"block_reason\": \"R18~R26 입력 고정 및 Codex 검토 미실행\""
        ],
        [
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r17-frontend-support-codex-rereview.md\"",
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r17-frontend-support-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r17-frontend-support-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r17-frontend-support-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"8b756d33e1e58834a78a24cf546357897d92503bf9f5f9dc9c70dbbdf04d7d1d\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important3-minor4-resolved-after-evidence-supplement\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"96c18123b4e5bd3ff13ed640dd4a6d390effbed6f01abbb603649f4f7c1e7cf3\",\"current_target_sha256\":\"f771876d195f11c237b1b548bec3d26056f6d1bf1e98b84df81fc0f91e97ef21\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r17-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r17-frontend-support-codex-rereview.md\",\"next_scope\":\"R18 pending; no M5/ready/public approval\",\"target_hashes\":[{\"path\":\"src/content/docs/05-frontend/accessibility-responsive-design.md\",\"reviewed_sha256\":\"96c18123b4e5bd3ff13ed640dd4a6d390effbed6f01abbb603649f4f7c1e7cf3\",\"current_sha256\":\"f771876d195f11c237b1b548bec3d26056f6d1bf1e98b84df81fc0f91e97ef21\"},{\"path\":\"src/content/docs/05-frontend/ui-state-and-ux.md\",\"reviewed_sha256\":\"357e478e8e7eaff7c1c4767e14b6c6eef85ae311c7b4c566d8fb315d061e3f60\",\"current_sha256\":\"32e0a610adf75d6b9f4942c2cf8fb94980948ce346950e934660fcb57c2db5ad\"}],\"evidence_followup_path\":\"docs/project/reviews/public-beta-1/r17-frontend-support-evidence-followup.md\"}"
        ]
      ]
    },
    {
      "path": "PROJECT_CONTEXT.md",
      "before": "ab536a26d5393751a46148bf593fe6e5177c6b635196ef5f621b18c045249132",
      "after": "f595023bc64c4af3f7ee87d9a7a839192bf1c97198e7b8561e6c2c83014428cb",
      "replacements": [
        [
          "# 프로젝트 컨텍스트",
          "# 프로젝트 컨텍스트\n\n2026-11-15 R17 controller closeout: 최초 NEEDS CHANGES C0/I3/M3·각17/18·준비기록M1과 Fix1의 내용/시각/코드 PASS·증거 BLOCKED를 보존합니다. 같은 저장 reviewer의 증거 한정 후속 PASS C0/I0/M0·두 원고각18/18·7ID RESOLVED를 연결합니다. 본문불변 metadata-only review 전이, R01~R17done, R18~R26pending/not-fixed, 공개59개draft36/review23/ready0입니다. 완료행17과 review문서23을 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별표/JSON과 r17-controller-closeout.md입니다. 다른 열린finding·M5전체·ready·RC·소유자승인·M6/M7은 미완료이며 다음은R18이고 외부쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r17-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "ROADMAP.md",
      "before": "6917bb23c8365bd7ce8cef3d5415d10a8762dda8c0a5c6076fa9bec5e79271d2",
      "after": "a3575d176ce6dc60e260c285b6804bdf259b7f71963570bf07e631e55ad391ef",
      "replacements": [
        [
          "# 로드맵",
          "# 로드맵\n\n2026-11-15 R17 controller closeout: 최초 NEEDS CHANGES C0/I3/M3·각17/18·준비기록M1과 Fix1의 내용/시각/코드 PASS·증거 BLOCKED를 보존합니다. 같은 저장 reviewer의 증거 한정 후속 PASS C0/I0/M0·두 원고각18/18·7ID RESOLVED를 연결합니다. 본문불변 metadata-only review 전이, R01~R17done, R18~R26pending/not-fixed, 공개59개draft36/review23/ready0입니다. 완료행17과 review문서23을 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별표/JSON과 r17-controller-closeout.md입니다. 다른 열린finding·M5전체·ready·RC·소유자승인·M6/M7은 미완료이며 다음은R18이고 외부쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r17-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "before": "8ef79bd722a043940b211c7cb1071955a90da79fd4f83078d73e3a39e72e2590",
      "after": "95e2e792cfb411b38c76b1c0331ad42cff753290a5c69cff2ddd8d7e8b1e92ff",
      "replacements": [
        [
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R16 완료, R17~R26 검토 및 통합 미완료 |",
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R17 완료, R18~R26 검토 및 통합 미완료 |"
        ],
        [
          "| `src/content/docs/05-frontend/accessibility-responsive-design.md` | draft | M3-FRONT-DESIGN |",
          "| `src/content/docs/05-frontend/accessibility-responsive-design.md` | review | M3-FRONT-DESIGN |"
        ],
        [
          "| `src/content/docs/05-frontend/ui-state-and-ux.md` | draft | M3-FRONT-DESIGN |",
          "| `src/content/docs/05-frontend/ui-state-and-ux.md` | review | M3-FRONT-DESIGN |"
        ],
        [
          "| - [ ] | R17 `frontend-support` |",
          "| - [x] | R17 `frontend-support` |"
        ]
      ]
    },
    {
      "path": "research/source-map.md",
      "before": "e4e1ac679995fe5a89a5ecb04afd90c0c1c2d348652ab2b3c7b07cec6fdec4da",
      "after": "d0f9581672ef33c6ca29c2d008cb2aa21907900cfc29e0f78dc9acbcdf9aeaae",
      "replacements": [
        [
          "# 출처 지도",
          "# 출처 지도\n\n2026-11-15 R17 후속 판정: 아래 R17 현재 적용 보충의 검토 대기는 당시 고정 후보 상태입니다. 같은 저장 reviewer의 Fix1과 증거 한정 후속 PASS C0/I0/M0·두 원고각18/18·7개ID RESOLVED로 해소했고 review 전이는 R17 controller closeout에 연결합니다. 과거 출처·접근 실패·미확인 범위는 유지하며 M5전체/ready/공개 승인을 뜻하지 않습니다."
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/r17-frontend-support-adjudication.md",
      "before": "8d306eafd2f9e7b7a4834926c1eec0f55d5f3ce48a6e39881833945aeb5ae62a",
      "after": "a16fbe826db931e00cbee520bff487eccba2015e8b5b709dfa884706aa1c652f",
      "replacements": [
        [
          "원고·코드 추가 수정은 없으며 R17 controller closeout·review 전이는 여전히 별도 절차입니다.",
          "준비·수정 단위는337f154로 커밋했습니다. 원고·코드 추가 수정 없이 R17 controller closeout·review 전이는 r17-controller-closeout.md에 연결하며 M5전체·ready·공개 승인은 미완료입니다."
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
    "execution_request_path": "docs/project/reviews/public-beta-1/r17-frontend-support-request.md",
    "execution_manifest_path": "docs/project/reviews/public-beta-1/r17-frontend-support-input-manifest.json",
    "source_checked_at": "2026-11-15",
    "combined_sha256": "8b756d33e1e58834a78a24cf546357897d92503bf9f5f9dc9c70dbbdf04d7d1d",
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
    "rereview_state": "pass-important3-minor4-resolved-after-evidence-supplement",
    "deferred_findings": [],
    "reviewed_target_sha256": "96c18123b4e5bd3ff13ed640dd4a6d390effbed6f01abbb603649f4f7c1e7cf3",
    "current_target_sha256": "f771876d195f11c237b1b548bec3d26056f6d1bf1e98b84df81fc0f91e97ef21",
    "metadata_transition": "metadata-only-draft-to-review",
    "closeout_path": "docs/project/reviews/public-beta-1/r17-controller-closeout.md",
    "rereview_path": "docs/project/reviews/public-beta-1/r17-frontend-support-codex-rereview.md",
    "next_scope": "R18 pending; no M5/ready/public approval",
    "target_hashes": [
      {
        "path": "src/content/docs/05-frontend/accessibility-responsive-design.md",
        "reviewed_sha256": "96c18123b4e5bd3ff13ed640dd4a6d390effbed6f01abbb603649f4f7c1e7cf3",
        "current_sha256": "f771876d195f11c237b1b548bec3d26056f6d1bf1e98b84df81fc0f91e97ef21"
      },
      {
        "path": "src/content/docs/05-frontend/ui-state-and-ux.md",
        "reviewed_sha256": "357e478e8e7eaff7c1c4767e14b6c6eef85ae311c7b4c566d8fb315d061e3f60",
        "current_sha256": "32e0a610adf75d6b9f4942c2cf8fb94980948ce346950e934660fcb57c2db5ad"
      }
    ],
    "evidence_followup_path": "docs/project/reviews/public-beta-1/r17-frontend-support-evidence-followup.md"
  },
  "evidence": [
    {
      "path": "docs/project/reviews/public-beta-1/r17-controller-closeout.md",
      "sha256": "2ba7591e60e70f6fc64a0340de013103fab0a72b5503395034e327245035ae22"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r17-frontend-support-request.md",
      "sha256": "06e436671dd990b18e5807a85a1df43eac656aeeaf6a95ba57ca5d507169af12"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r17-frontend-support-input-manifest.json",
      "sha256": "a7999712dc155e7f2b1bbc68d53d05cba1aced1b31fe6bb8d2d0592d451615be"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r17-frontend-support-codex-review.md",
      "sha256": "7a7d7a48373a96783ffd5223d678e9c2742cc1615dfc81ae2ae560844fa668f7"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r17-frontend-support-adjudication.md",
      "sha256": "a16fbe826db931e00cbee520bff487eccba2015e8b5b709dfa884706aa1c652f"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r17-frontend-support-codex-rereview.md",
      "sha256": "27dcd3e25f1c1c4ef996381da11a892a4ee01ddac5da3b8830c1df4b6b5da0e0"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r17-frontend-support-evidence-followup.md",
      "sha256": "7321cb0241164fd170361dd10a2ea58ee2630e59563df3ba780b543d1ca1cb94"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r17-fix-validation.md",
      "sha256": "6b18a7e35dde288ae85406c53fd8205fae94fe0149ba3d8fc1a3709759e26e51"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r17-input-preparation-validation.md",
      "sha256": "24d987081bb564f6394cd2a153d04df30121f152f7efc39f26260e751af45a1a"
    }
  ]
};
const hash=b=>createHash('sha256').update(b).digest('hex');
export function r17PreCloseoutBytes(path,bytes){
 bytes=r18PreFixBytes(path,bytes);
 const e=r17Closeout.changes.find(e=>e.path===path);if(!e||hash(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R17 closeout reversal not unique');text=text.replace(after,before)}
 if(hash(text)!==e.before)throw Error('R17 pre-closeout hash mismatch');return Buffer.from(text);
}
export function validateR17Closeout(root,{read=p=>readFileSync(resolve(root,p))}={}){
 const errors=[];const required=[...r17Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)).map(e=>({path:e.path,sha256:e.after})),...r17Closeout.evidence];
 for(const e of required){try{if(hash(r18PreFixBytes(e.path,read(e.path)))!==e.sha256)errors.push('R17 closeout pinned file mismatch: '+e.path)}catch{errors.push('R17 closeout missing file: '+e.path)}}return errors;
}
