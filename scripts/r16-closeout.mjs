import {r17PreFixBytes} from './r17-fix-transition.mjs';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
export const r16Closeout={
  "changes": [
    {
      "path": "src/content/docs/03-full-stack/frontend-backend-boundary.md",
      "before": "e88d80e5fda10338a645410b0dcc2fd014987f744f75586d647f31441636dac9",
      "after": "f50bf106d5b3ee45ceffff3fca06eb2edca27aa9b1193af8d396c96161b023cd",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r16-data-support-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r16-data-support-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r16-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/04-backend-data/data-model-schema-migration.md",
      "before": "9a2334cde915cdf6d8554b8bcfa9da3492791ae63df66933528227d6077e4aa0",
      "after": "2bbe29c1fa3aaca28dc83d89ab1146176e2230974867a36bc4cf36ec8f6d086f",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r16-data-support-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r16-data-support-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r16-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/04-backend-data/state-cache-queue.md",
      "before": "e1f1570362a645db9d812b1ba8c2fc11d760b707b4c918ce8252420e055ca030",
      "after": "dd00a9865c2865a1852f5c60d2fdbb0100f655db2c505810d192ddfe88ee2e4f",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r16-data-support-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r16-data-support-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r16-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "CONTENT_MAP.md",
      "before": "cf7be07c35b75cfd0f542bdc0ae00c52fb175ab00c64e16862de7e6dc9cc1ab8",
      "after": "4c4a3ae81ec1363a17557dd38bddf49f2febf71c3d558047734c17e91d8cd6f8",
      "replacements": [
        [
          "- 상태: `draft` 41개, `seed` 0개, `review` 18개, `ready` 0개",
          "- 상태: `draft` 38개, `seed` 0개, `review` 21개, `ready` 0개"
        ],
        [
          "| [프런트엔드와 백엔드의 경계](src/content/docs/03-full-stack/frontend-backend-boundary.md) | `draft` | 9,999 | `/03-full-stack/frontend-backend-boundary/` |",
          "| [프런트엔드와 백엔드의 경계](src/content/docs/03-full-stack/frontend-backend-boundary.md) | `review` | 9,999 | `/03-full-stack/frontend-backend-boundary/` |"
        ],
        [
          "| [데이터 모델·스키마·마이그레이션](src/content/docs/04-backend-data/data-model-schema-migration.md) | `draft` | 13,691 | `/04-backend-data/data-model-schema-migration/` |",
          "| [데이터 모델·스키마·마이그레이션](src/content/docs/04-backend-data/data-model-schema-migration.md) | `review` | 13,691 | `/04-backend-data/data-model-schema-migration/` |"
        ],
        [
          "| [상태·캐시·큐](src/content/docs/04-backend-data/state-cache-queue.md) | `draft` | 14,503 | `/04-backend-data/state-cache-queue/` |",
          "| [상태·캐시·큐](src/content/docs/04-backend-data/state-cache-queue.md) | `review` | 14,503 | `/04-backend-data/state-cache-queue/` |"
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "before": "85b3f86531cbb1a763cc845364464335bcc664780dafa50ad4175825452255bc",
      "after": "56db4b69415a02851cf7362f7ee795d1517765c3f70d2447d960d647c3e4e7d4",
      "replacements": [
        [
          "# 공개 베타 M5 독립 검토 행렬",
          "# 공개 베타 M5 독립 검토 행렬\n\n2026-11-15 R16 controller closeout: 최초 BLOCKED C0/I4/M4·내용18/16/16점·시각E01 I1·준비코드PASS를 보존하고 같은 저장 reviewer Fix1 PASS C0/I0/M0·세원고각18/18·준비/수정코드·시각PASS로8개ID를RESOLVED로연결합니다. 본문불변metadata-only review전이, R01~R16done, R17~R26pending/not-fixed, 공개59개draft38/review21/ready0입니다. 완료행16과review문서21을구분합니다. R04-M05는R16에서해소하고R04당시보류는역사로보존합니다. 원본142/불충분4와보충8포함Fix164의계보를유지합니다. 아래날짜별산문은역사이며현재정본은이문단·행별표/JSON과r16-controller-closeout.md입니다. 다른열린finding·M5전체·ready·RC·소유자승인·M6/M7미완료이며다음은R17이고외부쓰기는하지않습니다."
        ],
        [
          "| R16 | `data-support` | 소묶음 | 3 | 작성·구현 완료 | pending | 대기 | false |",
          "| R16 | `data-support` | 소묶음 | 3 | 작성·구현 완료 | done | 통과 | false |"
        ],
        [
          "`row_defaults`는 아직 시작하지 않은 R16~R26의 기본 상태이며 R01~R15는 완료된 `review_state` 전체로 이를 대체합니다.",
          "`row_defaults`는 아직 시작하지 않은 R17~R26의 기본 상태이며 R01~R16는 완료된 `review_state` 전체로 이를 대체합니다."
        ],
        [
          "\"block_reason\": \"R16~R26 입력 고정 및 Codex 검토 미실행\"",
          "\"block_reason\": \"R17~R26 입력 고정 및 Codex 검토 미실행\""
        ],
        [
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r16-data-support-codex-rereview.md\"",
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r16-data-support-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r16-data-support-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r16-data-support-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"79c1038651626c7d0eceb3dd20a4db7c36414d4432c3c454b664c76dbfb6c01c\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"BLOCKED\",\"rereview_state\":\"pass-important4-minor4-resolved\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"e88d80e5fda10338a645410b0dcc2fd014987f744f75586d647f31441636dac9\",\"current_target_sha256\":\"f50bf106d5b3ee45ceffff3fca06eb2edca27aa9b1193af8d396c96161b023cd\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r16-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r16-data-support-codex-rereview.md\",\"next_scope\":\"R17 pending; no M5/ready/public approval\",\"target_hashes\":[{\"path\":\"src/content/docs/03-full-stack/frontend-backend-boundary.md\",\"reviewed_sha256\":\"e88d80e5fda10338a645410b0dcc2fd014987f744f75586d647f31441636dac9\",\"current_sha256\":\"f50bf106d5b3ee45ceffff3fca06eb2edca27aa9b1193af8d396c96161b023cd\"},{\"path\":\"src/content/docs/04-backend-data/data-model-schema-migration.md\",\"reviewed_sha256\":\"9a2334cde915cdf6d8554b8bcfa9da3492791ae63df66933528227d6077e4aa0\",\"current_sha256\":\"2bbe29c1fa3aaca28dc83d89ab1146176e2230974867a36bc4cf36ec8f6d086f\"},{\"path\":\"src/content/docs/04-backend-data/state-cache-queue.md\",\"reviewed_sha256\":\"e1f1570362a645db9d812b1ba8c2fc11d760b707b4c918ce8252420e055ca030\",\"current_sha256\":\"dd00a9865c2865a1852f5c60d2fdbb0100f655db2c505810d192ddfe88ee2e4f\"}]}"
        ]
      ]
    },
    {
      "path": "PROJECT_CONTEXT.md",
      "before": "34c3baf50a73895a23c2782ae0e0e393c61090b8d5aa8bb071f27ee3428aa277",
      "after": "ab536a26d5393751a46148bf593fe6e5177c6b635196ef5f621b18c045249132",
      "replacements": [
        [
          "# 프로젝트 컨텍스트",
          "# 프로젝트 컨텍스트\n\n2026-11-15 R16 controller closeout: 최초 BLOCKED C0/I4/M4·내용18/16/16점·시각E01 I1·준비코드PASS를 보존하고 같은 저장 reviewer Fix1 PASS C0/I0/M0·세원고각18/18·준비/수정코드·시각PASS로8개ID를RESOLVED로연결합니다. 본문불변metadata-only review전이, R01~R16done, R17~R26pending/not-fixed, 공개59개draft38/review21/ready0입니다. 완료행16과review문서21을구분합니다. R04-M05는R16에서해소하고R04당시보류는역사로보존합니다. 원본142/불충분4와보충8포함Fix164의계보를유지합니다. 아래날짜별산문은역사이며현재정본은이문단·행별표/JSON과r16-controller-closeout.md입니다. 다른열린finding·M5전체·ready·RC·소유자승인·M6/M7미완료이며다음은R17이고외부쓰기는하지않습니다. 상세: `docs/project/reviews/public-beta-1/r16-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "ROADMAP.md",
      "before": "0f840402e8981b994714cb405ef89b7a8460e5721e16275f3becb183f1872f98",
      "after": "6917bb23c8365bd7ce8cef3d5415d10a8762dda8c0a5c6076fa9bec5e79271d2",
      "replacements": [
        [
          "# 로드맵",
          "# 로드맵\n\n2026-11-15 R16 controller closeout: 최초 BLOCKED C0/I4/M4·내용18/16/16점·시각E01 I1·준비코드PASS를 보존하고 같은 저장 reviewer Fix1 PASS C0/I0/M0·세원고각18/18·준비/수정코드·시각PASS로8개ID를RESOLVED로연결합니다. 본문불변metadata-only review전이, R01~R16done, R17~R26pending/not-fixed, 공개59개draft38/review21/ready0입니다. 완료행16과review문서21을구분합니다. R04-M05는R16에서해소하고R04당시보류는역사로보존합니다. 원본142/불충분4와보충8포함Fix164의계보를유지합니다. 아래날짜별산문은역사이며현재정본은이문단·행별표/JSON과r16-controller-closeout.md입니다. 다른열린finding·M5전체·ready·RC·소유자승인·M6/M7미완료이며다음은R17이고외부쓰기는하지않습니다. 상세: `docs/project/reviews/public-beta-1/r16-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "before": "352a05983e2dacfc0907c32d4795373173b8708f34bb2b745cb3d3efa2e37b10",
      "after": "8ef79bd722a043940b211c7cb1071955a90da79fd4f83078d73e3a39e72e2590",
      "replacements": [
        [
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R15 완료, R16~R26 검토 및 통합 미완료 |",
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R16 완료, R17~R26 검토 및 통합 미완료 |"
        ],
        [
          "| `src/content/docs/03-full-stack/frontend-backend-boundary.md` | draft | M3-FULLSTACK-DATA |",
          "| `src/content/docs/03-full-stack/frontend-backend-boundary.md` | review | M3-FULLSTACK-DATA |"
        ],
        [
          "| `src/content/docs/04-backend-data/data-model-schema-migration.md` | draft | M3-FULLSTACK-DATA |",
          "| `src/content/docs/04-backend-data/data-model-schema-migration.md` | review | M3-FULLSTACK-DATA |"
        ],
        [
          "| `src/content/docs/04-backend-data/state-cache-queue.md` | draft | M3-FULLSTACK-DATA |",
          "| `src/content/docs/04-backend-data/state-cache-queue.md` | review | M3-FULLSTACK-DATA |"
        ],
        [
          "| - [ ] | R16 `data-support` |",
          "| - [x] | R16 `data-support` |"
        ]
      ]
    },
    {
      "path": "research/source-map.md",
      "before": "f2128d676e4a24cb757034c4ef7da8c01a24a6a457cbfbdd053bfcee0340101c",
      "after": "cba375f7c9203880f7e506112cf4c572b11828a27c70f70e820ec1c2e201ddbf",
      "replacements": [
        [
          "# 출처 지도",
          "# 출처 지도\n\n2026-11-15 R16 후속 판정: 아래 R16 현재 적용 보충의 검토 대기는 당시 고정 후보 상태입니다. 같은 저장 reviewer Fix1 PASS C0/I0/M0·세 원고각18/18·8개ID RESOLVED로 해소했고 review 전이는 R16 controller closeout에 연결합니다. 과거 출처·접근 실패·미확인 범위는 유지하며 M5전체/ready/공개 승인을 뜻하지 않습니다."
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/r16-data-support-adjudication.md",
      "before": "5b96e66f71f24cc65761f99b1f7bd94078d8b2cbd2fb23089f7b086958ae91dc",
      "after": "13d18af50bae5c4f95cdc4fbe5affb9456dadefd67f611768ede6c2220ce3994",
      "replacements": [
        [
          "R16done/review전이는별도입니다.",
          "준비·수정단위는3e85df5로커밋했습니다. R16done/review전이는r16-controller-closeout.md에연결하며M5전체/ready/공개승인은미완료입니다."
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
    "execution_request_path": "docs/project/reviews/public-beta-1/r16-data-support-request.md",
    "execution_manifest_path": "docs/project/reviews/public-beta-1/r16-data-support-input-manifest.json",
    "source_checked_at": "2026-11-15",
    "combined_sha256": "79c1038651626c7d0eceb3dd20a4db7c36414d4432c3c454b664c76dbfb6c01c",
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
    "historical_verdict": "BLOCKED",
    "rereview_state": "pass-important4-minor4-resolved",
    "deferred_findings": [],
    "reviewed_target_sha256": "e88d80e5fda10338a645410b0dcc2fd014987f744f75586d647f31441636dac9",
    "current_target_sha256": "f50bf106d5b3ee45ceffff3fca06eb2edca27aa9b1193af8d396c96161b023cd",
    "metadata_transition": "metadata-only-draft-to-review",
    "closeout_path": "docs/project/reviews/public-beta-1/r16-controller-closeout.md",
    "rereview_path": "docs/project/reviews/public-beta-1/r16-data-support-codex-rereview.md",
    "next_scope": "R17 pending; no M5/ready/public approval",
    "target_hashes": [
      {
        "path": "src/content/docs/03-full-stack/frontend-backend-boundary.md",
        "reviewed_sha256": "e88d80e5fda10338a645410b0dcc2fd014987f744f75586d647f31441636dac9",
        "current_sha256": "f50bf106d5b3ee45ceffff3fca06eb2edca27aa9b1193af8d396c96161b023cd"
      },
      {
        "path": "src/content/docs/04-backend-data/data-model-schema-migration.md",
        "reviewed_sha256": "9a2334cde915cdf6d8554b8bcfa9da3492791ae63df66933528227d6077e4aa0",
        "current_sha256": "2bbe29c1fa3aaca28dc83d89ab1146176e2230974867a36bc4cf36ec8f6d086f"
      },
      {
        "path": "src/content/docs/04-backend-data/state-cache-queue.md",
        "reviewed_sha256": "e1f1570362a645db9d812b1ba8c2fc11d760b707b4c918ce8252420e055ca030",
        "current_sha256": "dd00a9865c2865a1852f5c60d2fdbb0100f655db2c505810d192ddfe88ee2e4f"
      }
    ]
  },
  "evidence": [
    {
      "path": "docs/project/reviews/public-beta-1/r16-controller-closeout.md",
      "sha256": "06bae81b5885b97a2fe5d1e2417c24a062ff85d42141455e1e04e033dcbb711f"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r16-data-support-request.md",
      "sha256": "d7dc6f58c00ba0998748aa1ca115c9c3e400c53e6fe7cc34583e3121b3c9081d"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r16-data-support-input-manifest.json",
      "sha256": "4ed31e5401d52dc03c12b98a81d725e2694aec1e2dd9b94e226c5b3ba3d70ccd"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r16-data-support-codex-review.md",
      "sha256": "d153405b8227a6b95a085b0c491804bea5cfd6e13de9cad859665d7fa53498c7"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r16-data-support-adjudication.md",
      "sha256": "13d18af50bae5c4f95cdc4fbe5affb9456dadefd67f611768ede6c2220ce3994"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r16-data-support-codex-rereview.md",
      "sha256": "e72a052e024b7ca45dbb7157d98508c15cb087af739c82248cb5ebd767c57440"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r16-fix-validation.md",
      "sha256": "d94776212ffbdb48adb9410daefa25506c70b347f7cb30946f32894a962520c9"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r16-input-preparation-validation.md",
      "sha256": "bc0e1898a233274d5e9f06e03b433e6c52046342612d10e1eed9d4a42eb5223b"
    }
  ]
};
const hash=b=>createHash('sha256').update(b).digest('hex');
export function r16PreCloseoutBytes(path,bytes){
 bytes=r17PreFixBytes(path,bytes);
 const e=r16Closeout.changes.find(e=>e.path===path);if(!e||hash(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R16 closeout reversal not unique');text=text.replace(after,before)}
 if(hash(text)!==e.before)throw Error('R16 pre-closeout hash mismatch');return Buffer.from(text);
}
export function validateR16Closeout(root,{read=p=>readFileSync(resolve(root,p))}={}){
 const errors=[];const required=[...r16Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)).map(e=>({path:e.path,sha256:e.after})),...r16Closeout.evidence];
 for(const e of required){try{if(hash(r17PreFixBytes(e.path,read(e.path)))!==e.sha256)errors.push('R16 closeout pinned file mismatch: '+e.path)}catch{errors.push('R16 closeout missing file: '+e.path)}}return errors;
}
