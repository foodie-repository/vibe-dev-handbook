import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {r06PreFixBytes} from './r06-fix-transition.mjs';
// Exact metadata-only R05 closeout; original verdict and open Minor remain distinct.
export const r05Closeout={
  "changes": [
    {
      "path": "src/content/docs/05-frontend/browser-dom-rendering.md",
      "before": "8880963d63d3ecad3bed53976a070e102ec8daece775dc1e86acaf4e5dcc7e43",
      "after": "4d914c5e17c05a3683faa48bbe657ba7f655eb6a4595199bfeb09dc2fa37bfe9",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r05-browser-dom-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r05-browser-dom-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r05-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "CONTENT_MAP.md",
      "before": "2722d63b7106c8addfa3ef521959744eba1260fdccd6b9a218ac252b446661d5",
      "after": "a6b42aef2fdec104483fecac88cbfda5b1c84be49ec8cc993f5f0ef5a7eeaca5",
      "replacements": [
        [
          "- 상태: `draft` 55개, `seed` 0개, `review` 4개, `ready` 0개",
          "- 상태: `draft` 54개, `seed` 0개, `review` 5개, `ready` 0개"
        ],
        [
          "| `draft` | 15,578 | `/05-frontend/browser-dom-rendering/` |",
          "| `review` | 15,578 | `/05-frontend/browser-dom-rendering/` |"
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "before": "a1e266eb12b8e3e502de0cf1f5a9a37927bc2b4fd8667a3b629e82b41c475930",
      "after": "1d5a2fd29e3c262d9801ac3aa68320ff412faa6ce15dd8d032477f2a2524d316",
      "replacements": [
        [
          "# 공개 베타 M5 독립 검토 행렬",
          "# 공개 베타 M5 독립 검토 행렬\n\n2026-11-15 R05 controller closeout: 최초 NEEDS CHANGES C0/I2/M4·17/18과 원문23청크·PNG18 검토를 보존하고, 같은 저장 reviewer 후속 PASS C0/I0/M1·18/18 및 코드 PASS C0/I0/M0을 연결합니다. I2/M3은 RESOLVED이며 공유 그림 R05-M01은 ACCEPTED-CURRENT / OPEN으로 R26에 전달합니다. 인접 R17의 I02만 실제 해소했으며 R17 전체는 미완료·draft입니다. R01~R05 done, R06~R26 pending/not-fixed, 공개59개 draft54/review5/ready0입니다. R05 본문·그림은 유지하고 metadata-only review로 전이합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r05-controller-closeout.md입니다. R01/R04의 기존 열린 Minor와 M5 전체·ready·RC·소유자 승인·M6/M7 미완료 경계를 유지합니다. 다음은 R06이며 외부 쓰기는 하지 않습니다."
        ],
        [
          "| R05 | `browser-dom` | 개별 심층 | 1 | 작성·구현 완료 | pending | 대기 | false |",
          "| R05 | `browser-dom` | 개별 심층 | 1 | 작성·구현 완료 | done | 통과 | false |"
        ],
        [
          "`row_defaults`는 아직 시작하지 않은 R05~R26의 기본 상태이며 R01~R04는 완료된 `review_state` 전체로 이를 대체합니다.",
          "`row_defaults`는 아직 시작하지 않은 R06~R26의 기본 상태이며 R01~R05는 완료된 `review_state` 전체로 이를 대체합니다. R17은 R05-I02의 실제 수정·해소 범위, R26은 열린 R05-M01과 소비 문맥을 입력에 포함합니다."
        ],
        [
          "\"block_reason\": \"R05~R26 입력 고정 및 Codex 검토 미실행\"",
          "\"block_reason\": \"R06~R26 입력 고정 및 Codex 검토 미실행\""
        ],
        [
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r05-browser-dom-codex-rereview.md\"",
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r05-browser-dom-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r05-browser-dom-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r05-browser-dom-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"21bae99956c6de10afdbfbba22cb3f91b88fe4c9c5f6737dc27ab26daea4c9a4\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":1},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important2-minor3-resolved-minor1-accepted-current-open\",\"deferred_findings\":[{\"id\":\"R05-M01\",\"owner\":\"R26\",\"state\":\"open\"}],\"reviewed_target_sha256\":\"8880963d63d3ecad3bed53976a070e102ec8daece775dc1e86acaf4e5dcc7e43\",\"current_target_sha256\":\"4d914c5e17c05a3683faa48bbe657ba7f655eb6a4595199bfeb09dc2fa37bfe9\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r05-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r05-browser-dom-codex-rereview.md\",\"next_scope\":\"R06 pending; no M5/ready/public approval\"}"
        ]
      ]
    },
    {
      "path": "PROJECT_CONTEXT.md",
      "before": "c958125ea69a3c0e03fc0075e990fa9598e916571ee8559e668d36b3c83085aa",
      "after": "0195202212508b740caf7d38d87fa88393a6c280aba25695bd6543dfd568bc76",
      "replacements": [
        [
          "# 프로젝트 컨텍스트",
          "# 프로젝트 컨텍스트\n\n2026-11-15 R05 controller closeout: 최초 NEEDS CHANGES C0/I2/M4·17/18과 원문23청크·PNG18 검토를 보존하고, 같은 저장 reviewer 후속 PASS C0/I0/M1·18/18 및 코드 PASS C0/I0/M0을 연결합니다. I2/M3은 RESOLVED이며 공유 그림 R05-M01은 ACCEPTED-CURRENT / OPEN으로 R26에 전달합니다. 인접 R17의 I02만 실제 해소했으며 R17 전체는 미완료·draft입니다. R01~R05 done, R06~R26 pending/not-fixed, 공개59개 draft54/review5/ready0입니다. R05 본문·그림은 유지하고 metadata-only review로 전이합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r05-controller-closeout.md입니다. R01/R04의 기존 열린 Minor와 M5 전체·ready·RC·소유자 승인·M6/M7 미완료 경계를 유지합니다. 다음은 R06이며 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r05-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "ROADMAP.md",
      "before": "e31637ea2aeb6e45cd4f629cdc52f55f574370ecae640dcb70807f0ebce2a2b6",
      "after": "a455d10fed70444178f33e707d881e3945196181577f707d6fc683c3e92afad0",
      "replacements": [
        [
          "# 로드맵",
          "# 로드맵\n\n2026-11-15 R05 controller closeout: 최초 NEEDS CHANGES C0/I2/M4·17/18과 원문23청크·PNG18 검토를 보존하고, 같은 저장 reviewer 후속 PASS C0/I0/M1·18/18 및 코드 PASS C0/I0/M0을 연결합니다. I2/M3은 RESOLVED이며 공유 그림 R05-M01은 ACCEPTED-CURRENT / OPEN으로 R26에 전달합니다. 인접 R17의 I02만 실제 해소했으며 R17 전체는 미완료·draft입니다. R01~R05 done, R06~R26 pending/not-fixed, 공개59개 draft54/review5/ready0입니다. R05 본문·그림은 유지하고 metadata-only review로 전이합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r05-controller-closeout.md입니다. R01/R04의 기존 열린 Minor와 M5 전체·ready·RC·소유자 승인·M6/M7 미완료 경계를 유지합니다. 다음은 R06이며 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r05-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "before": "d85406400845a7ea61eff30d6a1e5d5fcb224c7106a72d761b9c01f391794f49",
      "after": "8d6721d1fdcdf33466b011d8ca80f4cbd189cb7c5f8286d7b35a87e6a94ab567",
      "replacements": [
        [
          "| `src/content/docs/05-frontend/browser-dom-rendering.md` | draft | M3-FRONT-DESIGN |",
          "| `src/content/docs/05-frontend/browser-dom-rendering.md` | review | M3-FRONT-DESIGN |"
        ],
        [
          "| - [ ] | R05 `browser-dom` |",
          "| - [x] | R05 `browser-dom` |"
        ],
        [
          "Task 22; R01~R26 입력 고정 및 Codex 검토 미실행",
          "Task 22; R01~R05 완료, R06~R26 검토 및 통합 미완료"
        ],
        [
          "| `src/content/docs/01-mental-models/software-is-a-system.md` | draft |",
          "| `src/content/docs/01-mental-models/software-is-a-system.md` | review |"
        ],
        [
          "| `src/content/docs/03-full-stack/client-server-full-stack.md` | draft |",
          "| `src/content/docs/03-full-stack/client-server-full-stack.md` | review |"
        ],
        [
          "| `src/content/docs/03-full-stack/http-request-response.md` | draft |",
          "| `src/content/docs/03-full-stack/http-request-response.md` | review |"
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
    "execution_request_path": "docs/project/reviews/public-beta-1/r05-browser-dom-request.md",
    "execution_manifest_path": "docs/project/reviews/public-beta-1/r05-browser-dom-input-manifest.json",
    "source_checked_at": "2026-11-15",
    "combined_sha256": "21bae99956c6de10afdbfbba22cb3f91b88fe4c9c5f6737dc27ab26daea4c9a4",
    "actual_invocation": "completed",
    "observed_model_context_effort": "gpt-6-astra/high; fresh initial/read-only; same persisted session resumed",
    "result_state": "pass-via-followup-original-needs-changes-preserved",
    "adjudication_state": "complete",
    "valid_independent_evidence": true,
    "open_findings": {
      "critical": 0,
      "important": 0,
      "minor": 1
    },
    "historical_verdict": "NEEDS CHANGES",
    "rereview_state": "pass-important2-minor3-resolved-minor1-accepted-current-open",
    "deferred_findings": [
      {
        "id": "R05-M01",
        "owner": "R26",
        "state": "open"
      }
    ],
    "reviewed_target_sha256": "8880963d63d3ecad3bed53976a070e102ec8daece775dc1e86acaf4e5dcc7e43",
    "current_target_sha256": "4d914c5e17c05a3683faa48bbe657ba7f655eb6a4595199bfeb09dc2fa37bfe9",
    "metadata_transition": "metadata-only-draft-to-review",
    "closeout_path": "docs/project/reviews/public-beta-1/r05-controller-closeout.md",
    "rereview_path": "docs/project/reviews/public-beta-1/r05-browser-dom-codex-rereview.md",
    "next_scope": "R06 pending; no M5/ready/public approval"
  },
  "evidence": [
    {
      "path": "docs/project/reviews/public-beta-1/r05-controller-closeout.md",
      "sha256": "4c9e6254e371609a2e210d4e707667c43e413cb6c3cbd9c9c13372530eccb671"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r05-browser-dom-request.md",
      "sha256": "1718dd10bcba69f30b53da01c2a73bd428366fc4b311f3be4f30c2889faf9594"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r05-browser-dom-input-manifest.json",
      "sha256": "9aabcd4fd20a4b01ffd6d203f571aa5734e73577aac057e14f000ba6dd151452"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r05-browser-dom-codex-review.md",
      "sha256": "78418c6c9637f18bb82280b5dfb77d0e7319bfbf20c3c7e8b1693b1037ba678f"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r05-browser-dom-adjudication.md",
      "sha256": "05071c29cc688fac2d7528ba61c2475cda145090c89dfa39257b77780e0fea94"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r05-browser-dom-codex-rereview.md",
      "sha256": "ef7e68368fb2f4b2a6d7557ce5b8bd577277b1ab95e0d80806cb07d76811d17a"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r05-fix-validation.md",
      "sha256": "87b8990f09ecc3e7cb667ea466381e30d98179594d52e0700505e9eb99aa08c0"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r05-shared-figure-context.json",
      "sha256": "3c7fd82a4009320fdecc83a4c165294b903a153765f3fe2ba6aa2a2457516535"
    }
  ]
};
const hash=b=>createHash('sha256').update(b).digest('hex');
export function r05PreCloseoutBytes(path,bytes){
 bytes=r06PreFixBytes(path,bytes);
 const e=r05Closeout.changes.find(e=>e.path===path);if(!e||hash(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R05 closeout reversal not unique');text=text.replace(after,before)}
 if(hash(text)!==e.before)throw Error('R05 pre-closeout hash mismatch');return Buffer.from(text);
}
export function validateR05Closeout(root,{read=p=>readFileSync(resolve(root,p))}={}){
 const errors=[];const required=[...r05Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)).map(e=>({path:e.path,sha256:e.after})),...r05Closeout.evidence];
 for(const e of required){try{if(hash(r06PreFixBytes(e.path,read(e.path)))!==e.sha256)errors.push('R05 closeout pinned file mismatch: '+e.path)}catch{errors.push('R05 closeout missing file: '+e.path)}}return errors;
}
