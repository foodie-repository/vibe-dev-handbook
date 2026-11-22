import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {r05PreFixBytes} from './r05-fix-transition.mjs';
// Exact R04 controller transition after same-session PASS; open Minor2 remain open.
export const r04Closeout={
  "changes": [
    {
      "path": "src/content/docs/04-backend-data/api-database-auth.md",
      "before": "ce4d191006950c9eb1ea6d2e49edc6b55040f1c3b868b2afb259a063578046d3",
      "after": "72e356c3156c4a00b7af5a2b5269726dabf2ca053d577f5fbc6a0b7b3ef2e935",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r04-api-data-auth-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r04-api-data-auth-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r04-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "CONTENT_MAP.md",
      "before": "1ad48630c6576a6a6f944e39d1b4044eb43cf1278eb19fd17717095c573966ba",
      "after": "7d8ef3316830e5ad7aa86eb78d7ed6d99e80aaec0a3b3f8ff142c76238c0cd09",
      "replacements": [
        [
          "- 상태: `draft` 56개, `seed` 0개, `review` 3개, `ready` 0개",
          "- 상태: `draft` 55개, `seed` 0개, `review` 4개, `ready` 0개"
        ],
        [
          "| `draft` | 23,323 | `/04-backend-data/api-database-auth/` |",
          "| `review` | 23,323 | `/04-backend-data/api-database-auth/` |"
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "before": "11b579926200b1dc587a71654260d6940ffba281aeaf9f9452931a389823b9b6",
      "after": "a1e266eb12b8e3e502de0cf1f5a9a37927bc2b4fd8667a3b629e82b41c475930",
      "replacements": [
        [
          "# 공개 베타 M5 독립 검토 행렬",
          "# 공개 베타 M5 독립 검토 행렬\n\n2026-11-15 R04 controller closeout: 최초 NEEDS CHANGES C0/I2/M8·16/18 및 원문36청크·PNG18 검토는 역사로 보존합니다. 같은 저장 reviewer 후속 PASS C0/I0/M2·18/18·치명0과 코드 PASS C0/I0/M0으로 I2/M6을 해소했습니다. M05→R16 필드명 대응과 M08→R20 알림 확장 구분은 DEFERRED / OPEN이며 R26에서도 실제 처리 결과를 확인해야 합니다. R01~R04 done, R05~R26 pending/not-fixed, 공개59개 draft55/review4/ready0입니다. R04는 본문·그림 불변 metadata-only review로 전이합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r04-controller-closeout.md입니다. M5 전체·R26·ready·소유자 승인·RC·M6/M7·외부 쓰기는 미완료이고 다음은 R05입니다."
        ],
        [
          "| R04 | `api-data-auth` | 개별 심층 | 1 | 작성·구현 완료 | pending | 대기 | false |",
          "| R04 | `api-data-auth` | 개별 심층 | 1 | 작성·구현 완료 | done | 통과 | false |"
        ],
        [
          "`row_defaults`는 아직 시작하지 않은 R04~R26의 기본 상태이며 R01~R03은 완료된 `review_state` 전체로 이를 대체합니다.",
          "`row_defaults`는 아직 시작하지 않은 R05~R26의 기본 상태이며 R01~R04는 완료된 `review_state` 전체로 이를 대체합니다. R16은 R04-M05, R20은 R04-M08의 최초/후속 결과·재판정·해소 기준을 입력에 포함하고 R26은 실제 처리 결과를 통합 확인합니다. 이관은 해결이 아닙니다."
        ],
        [
          "\"block_reason\": \"R04~R26 입력 고정 및 Codex 검토 미실행\"",
          "\"block_reason\": \"R05~R26 입력 고정 및 Codex 검토 미실행\""
        ],
        [
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r04-api-data-auth-codex-rereview.md\"",
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r04-api-data-auth-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r04-api-data-auth-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r04-api-data-auth-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"6b1438f6f35d29511ce43e0e5b80bcf0e9a29813f35b481472d5159f7096d69b\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":2},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important2-minor6-resolved-minor2-deferred\",\"deferred_findings\":[{\"id\":\"R04-M05\",\"owner\":\"R16\",\"state\":\"open\"},{\"id\":\"R04-M08\",\"owner\":\"R20\",\"state\":\"open\"}],\"reviewed_target_sha256\":\"ce4d191006950c9eb1ea6d2e49edc6b55040f1c3b868b2afb259a063578046d3\",\"current_target_sha256\":\"72e356c3156c4a00b7af5a2b5269726dabf2ca053d577f5fbc6a0b7b3ef2e935\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r04-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r04-api-data-auth-codex-rereview.md\",\"next_scope\":\"R05 pending; no M5/ready/public approval\"}"
        ]
      ]
    },
    {
      "path": "PROJECT_CONTEXT.md",
      "before": "738b3f449e09eb09097d0dff572053b7c37da090e713565cddef9e03036f8c3e",
      "after": "c958125ea69a3c0e03fc0075e990fa9598e916571ee8559e668d36b3c83085aa",
      "replacements": [
        [
          "# 프로젝트 컨텍스트",
          "# 프로젝트 컨텍스트\n\n2026-11-15 R04 controller closeout: 최초 NEEDS CHANGES C0/I2/M8·16/18 및 원문36청크·PNG18 검토는 역사로 보존합니다. 같은 저장 reviewer 후속 PASS C0/I0/M2·18/18·치명0과 코드 PASS C0/I0/M0으로 I2/M6을 해소했습니다. M05→R16 필드명 대응과 M08→R20 알림 확장 구분은 DEFERRED / OPEN이며 R26에서도 실제 처리 결과를 확인해야 합니다. R01~R04 done, R05~R26 pending/not-fixed, 공개59개 draft55/review4/ready0입니다. R04는 본문·그림 불변 metadata-only review로 전이합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r04-controller-closeout.md입니다. M5 전체·R26·ready·소유자 승인·RC·M6/M7·외부 쓰기는 미완료이고 다음은 R05입니다. 상세: `docs/project/reviews/public-beta-1/r04-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "ROADMAP.md",
      "before": "1435765f4f013bf6d8c69649a426486cbdffb1562bf565a6b2d76a6feb49f0b7",
      "after": "e31637ea2aeb6e45cd4f629cdc52f55f574370ecae640dcb70807f0ebce2a2b6",
      "replacements": [
        [
          "# 로드맵",
          "# 로드맵\n\n2026-11-15 R04 controller closeout: 최초 NEEDS CHANGES C0/I2/M8·16/18 및 원문36청크·PNG18 검토는 역사로 보존합니다. 같은 저장 reviewer 후속 PASS C0/I0/M2·18/18·치명0과 코드 PASS C0/I0/M0으로 I2/M6을 해소했습니다. M05→R16 필드명 대응과 M08→R20 알림 확장 구분은 DEFERRED / OPEN이며 R26에서도 실제 처리 결과를 확인해야 합니다. R01~R04 done, R05~R26 pending/not-fixed, 공개59개 draft55/review4/ready0입니다. R04는 본문·그림 불변 metadata-only review로 전이합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r04-controller-closeout.md입니다. M5 전체·R26·ready·소유자 승인·RC·M6/M7·외부 쓰기는 미완료이고 다음은 R05입니다. 상세: `docs/project/reviews/public-beta-1/r04-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "before": "d1a4029e6b3755b96ee54ddcfc26e0ae79dcc2bab69a1bc3ae62b8799e66fec4",
      "after": "d85406400845a7ea61eff30d6a1e5d5fcb224c7106a72d761b9c01f391794f49",
      "replacements": [
        [
          "| - [ ] | R04 `api-data-auth` | `04-backend-data/api-database-auth.md` | 개별 심층 | `public-beta-1/r04-api-data-auth-codex-review.md` | `public-beta-1/r04-api-data-auth-adjudication.md` |",
          "| - [x] | R04 `api-data-auth` | `04-backend-data/api-database-auth.md` | 개별 심층 | `public-beta-1/r04-api-data-auth-codex-review.md` | `public-beta-1/r04-api-data-auth-adjudication.md` |"
        ],
        [
          "| `src/content/docs/04-backend-data/api-database-auth.md` | draft | M3-FULLSTACK-DATA |",
          "| `src/content/docs/04-backend-data/api-database-auth.md` | review | M3-FULLSTACK-DATA |"
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
    "execution_request_path": "docs/project/reviews/public-beta-1/r04-api-data-auth-request.md",
    "execution_manifest_path": "docs/project/reviews/public-beta-1/r04-api-data-auth-input-manifest.json",
    "source_checked_at": "2026-11-15",
    "combined_sha256": "6b1438f6f35d29511ce43e0e5b80bcf0e9a29813f35b481472d5159f7096d69b",
    "actual_invocation": "completed",
    "observed_model_context_effort": "gpt-6-astra/high; fresh initial/read-only; same persisted session resumed",
    "result_state": "pass-via-followup-original-needs-changes-preserved",
    "adjudication_state": "complete",
    "valid_independent_evidence": true,
    "open_findings": {
      "critical": 0,
      "important": 0,
      "minor": 2
    },
    "historical_verdict": "NEEDS CHANGES",
    "rereview_state": "pass-important2-minor6-resolved-minor2-deferred",
    "deferred_findings": [
      {
        "id": "R04-M05",
        "owner": "R16",
        "state": "open"
      },
      {
        "id": "R04-M08",
        "owner": "R20",
        "state": "open"
      }
    ],
    "reviewed_target_sha256": "ce4d191006950c9eb1ea6d2e49edc6b55040f1c3b868b2afb259a063578046d3",
    "current_target_sha256": "72e356c3156c4a00b7af5a2b5269726dabf2ca053d577f5fbc6a0b7b3ef2e935",
    "metadata_transition": "metadata-only-draft-to-review",
    "closeout_path": "docs/project/reviews/public-beta-1/r04-controller-closeout.md",
    "rereview_path": "docs/project/reviews/public-beta-1/r04-api-data-auth-codex-rereview.md",
    "next_scope": "R05 pending; no M5/ready/public approval"
  },
  "evidence": [
    {
      "path": "docs/project/reviews/public-beta-1/r04-controller-closeout.md",
      "sha256": "a7cc5b48531d301a77b8057381e8c9ce549c5b73574663aa02c2fa0aacc78653"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r04-api-data-auth-request.md",
      "sha256": "c137d765eeb9cd59dcdeef8662a8633a38d2a13f9fd838addbf91393174f1874"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r04-api-data-auth-input-manifest.json",
      "sha256": "301d7d3a2429d8a1e06e295907aedd6d068c90b9bbff91ad1fc82987ec2dd6d4"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r04-api-data-auth-codex-review.md",
      "sha256": "9830cd8171fcd0cde0f40f57c935357bf5e34887b3df653a4a6c0415842ad929"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r04-api-data-auth-adjudication.md",
      "sha256": "e55b0a704456b862086019a72fce6500a22cc94c38e46d43d89d41ca459c6a99"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r04-api-data-auth-codex-rereview.md",
      "sha256": "703fe65263b0a3b7d9208297af5fcaaa829e2aaaae92268d853cd9e56c44cb2c"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r04-fix-validation.md",
      "sha256": "235f3b0cd2f3efb419b53b10b84426d9a956ce562648ce6689b19d3f5c1ce745"
    }
  ]
};
const hash=b=>createHash('sha256').update(b).digest('hex');
export function r04PreCloseoutBytes(path,bytes){
 bytes=r05PreFixBytes(path,bytes);
 const e=r04Closeout.changes.find(e=>e.path===path);if(!e||hash(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R04 closeout reversal not unique');text=text.replace(after,before)}
 if(hash(text)!==e.before)throw Error('R04 pre-closeout hash mismatch');return Buffer.from(text);
}
export function validateR04Closeout(root,{read=p=>readFileSync(resolve(root,p))}={}){
 const errors=[];const required=[...r04Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)).map(e=>({path:e.path,sha256:e.after})),...r04Closeout.evidence];
 for(const e of required){try{if(hash(r05PreFixBytes(e.path,read(e.path)))!==e.sha256)errors.push('R04 closeout pinned file mismatch: '+e.path)}catch{errors.push('R04 closeout missing file: '+e.path)}}return errors;
}
