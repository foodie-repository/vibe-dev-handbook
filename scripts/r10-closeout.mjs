import {createHash} from 'node:crypto';
import {r11PreFixBytes} from './r11-fix-transition.mjs';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
export const r10Closeout={
  "changes": [
    {
      "path": "src/content/docs/10-deployment-operations/logs-monitoring-backup.md",
      "before": "655f871ba666f13d2d4dc1f28423fabd42cb6e21fb414d943a52324766c272ac",
      "after": "17aa3d355ad4432d1fda08fade29284442bdb6f07bcb6340721df0bae9437975",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r10-operations-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r10-operations-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r10-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "CONTENT_MAP.md",
      "before": "864d6c58af6bc9ad755c2aa312b6356d0986feab452f7e4b0e47f3110c510486",
      "after": "20f9f54758ca40ea59ed5f59d8514cc5c9bb71796031c7d7fac36ae094ddd2a0",
      "replacements": [
        [
          "- 상태: `draft` 50개, `seed` 0개, `review` 9개, `ready` 0개",
          "- 상태: `draft` 49개, `seed` 0개, `review` 10개, `ready` 0개"
        ],
        [
          "| `draft` | 21,027 | `/10-deployment-operations/logs-monitoring-backup/` |",
          "| `review` | 21,027 | `/10-deployment-operations/logs-monitoring-backup/` |"
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "before": "aafd2e6b5409d2f1401df38cff3c93aff225c15e029866797fe1daa38505b140",
      "after": "a2a7f989878413261ca194aac1cb4b75caa222e249a871604312344c72beed36",
      "replacements": [
        [
          "# 공개 베타 M5 독립 검토 행렬",
          "# 공개 베타 M5 독립 검토 행렬\n\n2026-11-15 R10 controller closeout: 최초 NEEDS CHANGES C0/I3/M3·15/18을 보존하고 같은 저장 reviewer의 Fix1 PASS C0/I0/M0·18/18·코드PASS로 지정6건을 RESOLVED로 연결합니다. R10 본문·그림 불변 metadata-only review 전이, R01~R10 done, R11~R26 pending/not-fixed, 공개59개 draft49/review10/ready0입니다. R20은 인접 두 문단의 국소 해소만 반영했고 전체 검토는 미완료입니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r10-controller-closeout.md입니다. 다른 행의 열린 finding·M5 전체·ready·RC·소유자 승인·M6/M7 미완료를 유지합니다. 다음은 R11이며 외부 쓰기는 하지 않습니다."
        ],
        [
          "| R10 | `operations` | 개별 심층 | 1 | 작성·구현 완료 | pending | 대기 | false |",
          "| R10 | `operations` | 개별 심층 | 1 | 작성·구현 완료 | done | 통과 | false |"
        ],
        [
          "`row_defaults`는 아직 시작하지 않은 R10~R26의 기본 상태이며 R01~R09는 완료된 `review_state` 전체로 이를 대체합니다.",
          "`row_defaults`는 아직 시작하지 않은 R11~R26의 기본 상태이며 R01~R10은 완료된 `review_state` 전체로 이를 대체합니다."
        ],
        [
          "\"block_reason\": \"R10~R26 입력 고정 및 Codex 검토 미실행\"",
          "\"block_reason\": \"R11~R26 입력 고정 및 Codex 검토 미실행\""
        ],
        [
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r10-operations-codex-rereview.md\"",
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r10-operations-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r10-operations-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r10-operations-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"2eaeb279949738b21676d927248a674c0982fe8ce8b63225b353b9903ff39d49\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important3-minor3-resolved\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"655f871ba666f13d2d4dc1f28423fabd42cb6e21fb414d943a52324766c272ac\",\"current_target_sha256\":\"17aa3d355ad4432d1fda08fade29284442bdb6f07bcb6340721df0bae9437975\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r10-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r10-operations-codex-rereview.md\",\"next_scope\":\"R11 pending; R20 local fix only; no M5/ready/public approval\"}"
        ]
      ]
    },
    {
      "path": "PROJECT_CONTEXT.md",
      "before": "8545bf032b0ef0b501729288353c1ccdda52783e7d17f4898d834411ff025bf7",
      "after": "1b49880fc177a996e1a560974d38ae9e6d59026df998ef1c87ae2e24c8be1ef5",
      "replacements": [
        [
          "# 프로젝트 컨텍스트",
          "# 프로젝트 컨텍스트\n\n2026-11-15 R10 controller closeout: 최초 NEEDS CHANGES C0/I3/M3·15/18을 보존하고 같은 저장 reviewer의 Fix1 PASS C0/I0/M0·18/18·코드PASS로 지정6건을 RESOLVED로 연결합니다. R10 본문·그림 불변 metadata-only review 전이, R01~R10 done, R11~R26 pending/not-fixed, 공개59개 draft49/review10/ready0입니다. R20은 인접 두 문단의 국소 해소만 반영했고 전체 검토는 미완료입니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r10-controller-closeout.md입니다. 다른 행의 열린 finding·M5 전체·ready·RC·소유자 승인·M6/M7 미완료를 유지합니다. 다음은 R11이며 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r10-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "ROADMAP.md",
      "before": "f46b96495a9dc9d3f11c29e48b742056a8d4abd9120b7f8ed9c18395f604c794",
      "after": "c15912ab09ff763eb72fc0ff3cb52b8270e15c87f2f36abe7187b4077c92ff0e",
      "replacements": [
        [
          "# 로드맵",
          "# 로드맵\n\n2026-11-15 R10 controller closeout: 최초 NEEDS CHANGES C0/I3/M3·15/18을 보존하고 같은 저장 reviewer의 Fix1 PASS C0/I0/M0·18/18·코드PASS로 지정6건을 RESOLVED로 연결합니다. R10 본문·그림 불변 metadata-only review 전이, R01~R10 done, R11~R26 pending/not-fixed, 공개59개 draft49/review10/ready0입니다. R20은 인접 두 문단의 국소 해소만 반영했고 전체 검토는 미완료입니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r10-controller-closeout.md입니다. 다른 행의 열린 finding·M5 전체·ready·RC·소유자 승인·M6/M7 미완료를 유지합니다. 다음은 R11이며 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r10-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "before": "37f6ac5a002da7ee374c3bdb0791407fc9889f3b7a6b9a90f17f56e911aa591a",
      "after": "688c2074e31d0848d7562f4828104637dae94dda55079b57567e4516911dabbe",
      "replacements": [
        [
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R09 완료, R10~R26 검토 및 통합 미완료 |",
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R10 완료, R11~R26 검토 및 통합 미완료 |"
        ],
        [
          "| `src/content/docs/10-deployment-operations/logs-monitoring-backup.md` | draft | M3-GIT-OPS |",
          "| `src/content/docs/10-deployment-operations/logs-monitoring-backup.md` | review | M3-GIT-OPS |"
        ],
        [
          "| - [ ] | R10 `operations` |",
          "| - [x] | R10 `operations` |"
        ]
      ]
    },
    {
      "path": "research/source-map.md",
      "before": "9e63fd76f65c11c565b00beb1945383059dc87c25a2c8c5a6a28dfdbe7554ffd",
      "after": "75d8dfd33f985ac7fdde5e1279ae58819890f967fbd66958f4000e85883367c7",
      "replacements": [
        [
          "R10 수정과 인접 R20의 국소 사례 정렬은 같은 저장 reviewer 후속 검토 전까지 해소 완료로 처리하지 않습니다.",
          "R10 수정과 인접 R20의 국소 사례 정렬은 같은 저장 reviewer의 Fix1 PASS C0/I0/M0으로 해소했습니다. R10 review 전이는 controller closeout에 연결하며 R20 전체·ready·공개 승인을 뜻하지 않습니다."
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/r10-operations-adjudication.md",
      "before": "6f079616d56ccf8e2cb36bdf1fbb213d0227d6a6b936111bdbb0a9e0b609b28e",
      "after": "3f0d1887e430cb513484824eb61dd5047b0d976519f813f5789cdb2748c3df2a",
      "replacements": [
        [
          "## 현재 판정 — Fix1 해소, controller closeout 대기",
          "## 현재 판정 — Fix1 해소와 controller closeout 연결"
        ],
        [
          "현재 R10 원고 draft·행렬pending이며 review 전이와 R10 완료는 별도 controller closeout에서만 처리합니다.",
          "Fix1 당시 R10 원고 draft·행렬pending을 유지했고, 이후 review 전이와 R10 완료 판단은 r10-controller-closeout.md에 연결합니다."
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
    "execution_request_path": "docs/project/reviews/public-beta-1/r10-operations-request.md",
    "execution_manifest_path": "docs/project/reviews/public-beta-1/r10-operations-input-manifest.json",
    "source_checked_at": "2026-11-15",
    "combined_sha256": "2eaeb279949738b21676d927248a674c0982fe8ce8b63225b353b9903ff39d49",
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
    "rereview_state": "pass-important3-minor3-resolved",
    "deferred_findings": [],
    "reviewed_target_sha256": "655f871ba666f13d2d4dc1f28423fabd42cb6e21fb414d943a52324766c272ac",
    "current_target_sha256": "17aa3d355ad4432d1fda08fade29284442bdb6f07bcb6340721df0bae9437975",
    "metadata_transition": "metadata-only-draft-to-review",
    "closeout_path": "docs/project/reviews/public-beta-1/r10-controller-closeout.md",
    "rereview_path": "docs/project/reviews/public-beta-1/r10-operations-codex-rereview.md",
    "next_scope": "R11 pending; R20 local fix only; no M5/ready/public approval"
  },
  "evidence": [
    {
      "path": "docs/project/reviews/public-beta-1/r10-controller-closeout.md",
      "sha256": "556182155be01b2a3dd37491e7eee65d345db5a5e345f8ad71107fbcd60d1d30"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r10-operations-request.md",
      "sha256": "6854026d058aa3f060cf2aee9838de5443da0815505be4eb5d8b03b13560fa87"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r10-operations-input-manifest.json",
      "sha256": "ff38dce34fe8b336626f4fea2564358e8186ef3881749b7b980879d79373e92c"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r10-operations-codex-review.md",
      "sha256": "d9f273cfc8f48a08c9ba3af54b30b91348ffb0079edde21a4cd59a0911a5a88f"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r10-operations-adjudication.md",
      "sha256": "3f0d1887e430cb513484824eb61dd5047b0d976519f813f5789cdb2748c3df2a"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r10-operations-codex-rereview.md",
      "sha256": "d020af0cb8b56a978e2b3238fdfa877fcc19219abbd9c2e848d95d2e980f6bf2"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r10-fix-validation.md",
      "sha256": "6ae406151bd6002e6a76fcafb78a86d03896c9d663e91f1c501927ced6ce6b79"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r10-input-preparation-report.md",
      "sha256": "5b6f035b0c6aa1d4234353d6324207c8734209e1d55a7e67ba0fa3017ec680f5"
    }
  ]
};
const hash=b=>createHash('sha256').update(b).digest('hex');
export function r10PreCloseoutBytes(path,bytes){
 bytes=r11PreFixBytes(path,bytes);
 const e=r10Closeout.changes.find(e=>e.path===path);if(!e||hash(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R10 closeout reversal not unique');text=text.replace(after,before)}
 if(hash(text)!==e.before)throw Error('R10 pre-closeout hash mismatch');return Buffer.from(text);
}
export function validateR10Closeout(root,{read=p=>readFileSync(resolve(root,p))}={}){
 const errors=[];const required=[...r10Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)).map(e=>({path:e.path,sha256:e.after})),...r10Closeout.evidence];
 for(const e of required){try{if(hash(r11PreFixBytes(e.path,read(e.path)))!==e.sha256)errors.push('R10 closeout pinned file mismatch: '+e.path)}catch{errors.push('R10 closeout missing file: '+e.path)}}return errors;
}
