import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {r04PreFixBytes} from './r04-fix-transition.mjs';

// Exact metadata/controller transition after R03 same-session PASS; no generic input forgiveness.
export const r03Closeout = {
  "changes": [
    {
      "path": "src/content/docs/03-full-stack/http-request-response.md",
      "before": "e4c13382187e9dffc19bf73486fd4d953f540e6a6b6f373dca9d6e5c7a7ea2a2",
      "after": "d90c0fe3dab7eba53c796c81491227edad717c8a1df890d9cd5c22d2c1e0b97c",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r03-http-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r03-http-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r03-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "CONTENT_MAP.md",
      "before": "131204af54bacc81c0edf1fb63daf2de3d5ff64c5290cf87df7785edb15e1329",
      "after": "73e8e3a9ef41ddb8cd88b6a4af4d392266afe969e7d0a5ad8593f86d930ad064",
      "replacements": [
        [
          "- 상태: `draft` 57개, `seed` 0개, `review` 2개, `ready` 0개",
          "- 상태: `draft` 56개, `seed` 0개, `review` 3개, `ready` 0개"
        ],
        [
          "| `draft` | 15,556 | `/03-full-stack/http-request-response/` |",
          "| `review` | 15,556 | `/03-full-stack/http-request-response/` |"
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "before": "da547c82641189872bc5d456b8123a8e635f3fed8ece89cffbe879b56f61a3b6",
      "after": "11b579926200b1dc587a71654260d6940ffba281aeaf9f9452931a389823b9b6",
      "replacements": [
        [
          "# 공개 베타 M5 독립 검토 행렬",
          "# 공개 베타 M5 독립 검토 행렬\n\n2026-10-25 R03 controller closeout: 최초 NEEDS CHANGES C0/I3/M4·15/18과 원문22청크·PNG18 검토를 보존하고, 같은 저장 reviewer의 Fix Round1 PASS C0/I0/M0·18/18 및 준비 코드 Minor1 해소를 연결했습니다. R01~R03은 done, R04~R26은 pending/not-fixed입니다. R03은 검토된 본문을 바꾸지 않고 metadata-only review로 전이하며 공개59개 draft56/review3/ready0입니다. M5 전체·R26·ready·소유자 공개 승인·RC·외부 쓰기는 미완료입니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단과 행별 표·JSON입니다. 다음은 R04의 입력 고정·같은 세션 후속 가능 조건 확인입니다."
        ],
        [
          "| R03 | `http` | 개별 심층 | 1 | 작성·구현 완료 | pending | 대기 | false |",
          "| R03 | `http` | 개별 심층 | 1 | 작성·구현 완료 | done | 통과 | false |"
        ],
        [
          "`row_defaults`는 아직 시작하지 않은 R03~R26의 기본 상태이며 R01·R02는 완료된 `review_state` 전체로 이를 대체합니다.",
          "`row_defaults`는 아직 시작하지 않은 R04~R26의 기본 상태이며 R01~R03은 완료된 `review_state` 전체로 이를 대체합니다."
        ],
        [
          "\"block_reason\": \"R03~R26 입력 고정 및 Codex 검토 미실행\"",
          "\"block_reason\": \"R04~R26 입력 고정 및 Codex 검토 미실행\""
        ],
        [
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r03-http-codex-rereview.md\"",
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r03-http-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r03-http-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r03-http-input-manifest.json\",\"source_checked_at\":\"2026-10-25\",\"combined_sha256\":\"6865f321010966ae7fae4821f2d801616e696d0901d6edf4b1ea5566d3ddee2c\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important3-minor4-prep-minor1-resolved\",\"reviewed_target_sha256\":\"e4c13382187e9dffc19bf73486fd4d953f540e6a6b6f373dca9d6e5c7a7ea2a2\",\"current_target_sha256\":\"d90c0fe3dab7eba53c796c81491227edad717c8a1df890d9cd5c22d2c1e0b97c\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r03-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r03-http-codex-rereview.md\",\"next_scope\":\"R04 pending; no M5/ready/public approval\"}"
        ]
      ]
    },
    {
      "path": "PROJECT_CONTEXT.md",
      "before": "05847dc7b627bc8b78d6e4a07f2b3ad41d9d0a90ea8a8c6b17c19c1bca39e70c",
      "after": "26a82ba0542ae7e1f07fe49d9eb7498b12c5c236bd62f92dc2e8c6ded4ac2bb9",
      "replacements": [
        [
          "# 프로젝트 컨텍스트",
          "# 프로젝트 컨텍스트\n\n2026-10-25 R03 controller closeout: 최초 NEEDS CHANGES C0/I3/M4·15/18과 원문22청크·PNG18 검토를 보존하고, 같은 저장 reviewer의 Fix Round1 PASS C0/I0/M0·18/18 및 준비 코드 Minor1 해소를 연결했습니다. R01~R03은 done, R04~R26은 pending/not-fixed입니다. R03은 검토된 본문을 바꾸지 않고 metadata-only review로 전이하며 공개59개 draft56/review3/ready0입니다. M5 전체·R26·ready·소유자 공개 승인·RC·외부 쓰기는 미완료입니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단과 행별 표·JSON입니다. 다음은 R04의 입력 고정·같은 세션 후속 가능 조건 확인입니다. 상세 근거는 `docs/project/reviews/public-beta-1/r03-controller-closeout.md`입니다."
        ]
      ]
    },
    {
      "path": "ROADMAP.md",
      "before": "8a133edb54b06191a29b36ef5e52c91d125997a84306ba68c4e6762c7095f106",
      "after": "1435765f4f013bf6d8c69649a426486cbdffb1562bf565a6b2d76a6feb49f0b7",
      "replacements": [
        [
          "# 로드맵",
          "# 로드맵\n\n2026-10-25 R03 controller closeout: 최초 NEEDS CHANGES C0/I3/M4·15/18과 원문22청크·PNG18 검토를 보존하고, 같은 저장 reviewer의 Fix Round1 PASS C0/I0/M0·18/18 및 준비 코드 Minor1 해소를 연결했습니다. R01~R03은 done, R04~R26은 pending/not-fixed입니다. R03은 검토된 본문을 바꾸지 않고 metadata-only review로 전이하며 공개59개 draft56/review3/ready0입니다. M5 전체·R26·ready·소유자 공개 승인·RC·외부 쓰기는 미완료입니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단과 행별 표·JSON입니다. 다음은 R04의 입력 고정·같은 세션 후속 가능 조건 확인입니다. 상세 근거는 `docs/project/reviews/public-beta-1/r03-controller-closeout.md`입니다."
        ]
      ]
    },
    {
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "before": "e67781109b71c8212db64f94613d76c651925d6a59ae6b262fb6eab4feb6db9e",
      "after": "d1a4029e6b3755b96ee54ddcfc26e0ae79dcc2bab69a1bc3ae62b8799e66fec4",
      "replacements": [
        [
          "| - [ ] | R03 `http` | `03-full-stack/http-request-response.md` | 개별 심층 | `public-beta-1/r03-http-codex-review.md` | `public-beta-1/r03-http-adjudication.md` |",
          "| - [x] | R03 `http` | `03-full-stack/http-request-response.md` | 개별 심층 | `public-beta-1/r03-http-codex-review.md` | `public-beta-1/r03-http-adjudication.md` |"
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
    "execution_request_path": "docs/project/reviews/public-beta-1/r03-http-request.md",
    "execution_manifest_path": "docs/project/reviews/public-beta-1/r03-http-input-manifest.json",
    "source_checked_at": "2026-10-25",
    "combined_sha256": "6865f321010966ae7fae4821f2d801616e696d0901d6edf4b1ea5566d3ddee2c",
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
    "rereview_state": "pass-important3-minor4-prep-minor1-resolved",
    "reviewed_target_sha256": "e4c13382187e9dffc19bf73486fd4d953f540e6a6b6f373dca9d6e5c7a7ea2a2",
    "current_target_sha256": "d90c0fe3dab7eba53c796c81491227edad717c8a1df890d9cd5c22d2c1e0b97c",
    "metadata_transition": "metadata-only-draft-to-review",
    "closeout_path": "docs/project/reviews/public-beta-1/r03-controller-closeout.md",
    "rereview_path": "docs/project/reviews/public-beta-1/r03-http-codex-rereview.md",
    "next_scope": "R04 pending; no M5/ready/public approval"
  },
  "evidence": [
    {
      "path": "docs/project/reviews/public-beta-1/r03-controller-closeout.md",
      "sha256": "37f817f3232ba8dc1197f9fa7026a845ff24f0e9c8c39e1369ed50a4ec0cdf82"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r03-http-request.md",
      "sha256": "cbf8caa2f354c73f3dce0c416a936d6ca9e07fd4a01d58303ef4ee63add0845d"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r03-http-input-manifest.json",
      "sha256": "3692a3f616aa7f679a5529d8ef20d3b856892841e2b74544215bad50afcbd3f9"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r03-http-codex-review.md",
      "sha256": "624fb5f3196d8198818fa06eef81727ce164818d85f65fc93a3851da17d9f8fe"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r03-http-adjudication.md",
      "sha256": "4408044bb1d1d4b44835b01f62379e8ce8e963e77b786ad254af566adabacd95"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r03-http-codex-rereview.md",
      "sha256": "0dac12855fabb46e01b96689ab9f5a5f5ed9f76d1a8e94020d4c2a900da8f209"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r03-fix-validation.md",
      "sha256": "cc24d44bffe88d77894553eedc5b224c94ddf2ad35e8633118f8d33d30f1b644"
    }
  ]
};
const hash=b=>createHash('sha256').update(b).digest('hex');
export function r03PreCloseoutBytes(path,bytes){
 bytes=r04PreFixBytes(path,bytes);
 const e=r03Closeout.changes.find(e=>e.path===path);if(!e||hash(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const [before,after] of [...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R03 closeout reversal not unique');text=text.replace(after,before)}
 if(hash(text)!==e.before)throw Error('R03 pre-closeout hash mismatch');return Buffer.from(text);
}
export function validateR03Closeout(root,{read=p=>readFileSync(resolve(root,p))}={}){
 const errors=[];const required=[...r03Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)).map(e=>({path:e.path,sha256:e.after})),...r03Closeout.evidence];
 for(const e of required){try{if(hash(r04PreFixBytes(e.path,read(e.path)))!==e.sha256)errors.push('R03 closeout pinned file mismatch: '+e.path)}catch{errors.push('R03 closeout missing file: '+e.path)}}return errors;
}
