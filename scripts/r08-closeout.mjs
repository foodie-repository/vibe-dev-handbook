import {createHash} from 'node:crypto';
import {r09PreFixBytes} from './r09-fix-transition.mjs';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
export const r08Closeout={
  "changes": [
    {
      "path": "src/content/docs/09-git-github/git-and-github.md",
      "before": "791bf69c68c9a34d2868a35f67b4272694c47b4e81043a32d308c04dafad730d",
      "after": "e9a859657dc626c9ee734231c8a2ba59e666887ed764cb0b0b888001f57118c1",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r08-git-github-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r08-git-github-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r08-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "CONTENT_MAP.md",
      "before": "7bcae6316df2a36bdb8a5e552d0d55c9878b37450193181c5ba812345518a9d5",
      "after": "32cb36b429074685f7ca53531b2376712047b0f70329711f2ff396b74916e20a",
      "replacements": [
        [
          "- 상태: `draft` 52개, `seed` 0개, `review` 7개, `ready` 0개",
          "- 상태: `draft` 51개, `seed` 0개, `review` 8개, `ready` 0개"
        ],
        [
          "| `draft` | 16,550 | `/09-git-github/git-and-github/` |",
          "| `review` | 16,550 | `/09-git-github/git-and-github/` |"
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "before": "6181325b76e77985fc0eda8750715c64c8d883a897a94f22b961b734ffadc5fb",
      "after": "7f6bb729c6f5f9f5dc3b569066c2419896ebcde36c4ff10d597bdd7c6ff40051",
      "replacements": [
        [
          "# 공개 베타 M5 독립 검토 행렬",
          "# 공개 베타 M5 독립 검토 행렬\n\n2026-11-15 R08 controller closeout: 최초 NEEDS CHANGES 대상 C0/I3/M3·16/18 및 인접 R21 문맥 C0/I1/M2를 보존하고 같은 저장 reviewer 후속 PASS C0/I0/M0·18/18·코드C0/I0/M0을 연결합니다. 지정9건은 RESOLVED이며 R21 전체 검토와 R12 사례 검토는 미완료입니다. R08 본문·그림 불변 metadata-only review 전이, R01~R08 done, R09~R26 pending/not-fixed, 공개59개 draft51/review8/ready0입니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r08-controller-closeout.md입니다. 다른 행의 열린 finding·M5 전체·ready·RC·소유자 승인·M6/M7 미완료를 유지합니다. 다음은 R09이며 외부 쓰기는 하지 않습니다."
        ],
        [
          "| R08 | `git-github` | 개별 심층 | 1 | 작성·구현 완료 | pending | 대기 | false |",
          "| R08 | `git-github` | 개별 심층 | 1 | 작성·구현 완료 | done | 통과 | false |"
        ],
        [
          "`row_defaults`는 아직 시작하지 않은 R08~R26의 기본 상태이며 R01~R07은 완료된 `review_state` 전체로 이를 대체합니다.",
          "`row_defaults`는 아직 시작하지 않은 R09~R26의 기본 상태이며 R01~R08은 완료된 `review_state` 전체로 이를 대체합니다. R21은 R08-XI01·XM01·XM02의 국소 해소와 원문 diff·후속 판정을 입력에 포함하되 전체 심층 검토를 별도로 수행합니다."
        ],
        [
          "\"block_reason\": \"R08~R26 입력 고정 및 Codex 검토 미실행\"",
          "\"block_reason\": \"R09~R26 입력 고정 및 Codex 검토 미실행\""
        ],
        [
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r08-git-github-codex-rereview.md\"",
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r08-git-github-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r08-git-github-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r08-git-github-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"8fd0387be743ef54b9b6c1ad24ae4a407347bda50223a5b14cc9948c3fdb4151\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-target-important3-minor3-and-R21-context-important1-minor2-resolved\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"791bf69c68c9a34d2868a35f67b4272694c47b4e81043a32d308c04dafad730d\",\"current_target_sha256\":\"e9a859657dc626c9ee734231c8a2ba59e666887ed764cb0b0b888001f57118c1\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r08-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r08-git-github-codex-rereview.md\",\"next_scope\":\"R09 pending; R21 full review pending; no M5/ready/public approval\"}"
        ]
      ]
    },
    {
      "path": "PROJECT_CONTEXT.md",
      "before": "50f6bd3fdec74559e96744e6c6aeffa364a6be32f77fb779d5924923212cb624",
      "after": "b40ef40d310b8df5caad51fc9ce07f299fd576237d23b4b233be42ab9026bdc6",
      "replacements": [
        [
          "# 프로젝트 컨텍스트",
          "# 프로젝트 컨텍스트\n\n2026-11-15 R08 controller closeout: 최초 NEEDS CHANGES 대상 C0/I3/M3·16/18 및 인접 R21 문맥 C0/I1/M2를 보존하고 같은 저장 reviewer 후속 PASS C0/I0/M0·18/18·코드C0/I0/M0을 연결합니다. 지정9건은 RESOLVED이며 R21 전체 검토와 R12 사례 검토는 미완료입니다. R08 본문·그림 불변 metadata-only review 전이, R01~R08 done, R09~R26 pending/not-fixed, 공개59개 draft51/review8/ready0입니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r08-controller-closeout.md입니다. 다른 행의 열린 finding·M5 전체·ready·RC·소유자 승인·M6/M7 미완료를 유지합니다. 다음은 R09이며 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r08-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "ROADMAP.md",
      "before": "d13d1fed1002a8ef4b827a75d775ec0adf6331b82cb5ba483bde67bf2038a89b",
      "after": "dc8b62dd5543544b60af5dd656df77f896e09d72b2fee72898a53a3d87ba5025",
      "replacements": [
        [
          "# 로드맵",
          "# 로드맵\n\n2026-11-15 R08 controller closeout: 최초 NEEDS CHANGES 대상 C0/I3/M3·16/18 및 인접 R21 문맥 C0/I1/M2를 보존하고 같은 저장 reviewer 후속 PASS C0/I0/M0·18/18·코드C0/I0/M0을 연결합니다. 지정9건은 RESOLVED이며 R21 전체 검토와 R12 사례 검토는 미완료입니다. R08 본문·그림 불변 metadata-only review 전이, R01~R08 done, R09~R26 pending/not-fixed, 공개59개 draft51/review8/ready0입니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r08-controller-closeout.md입니다. 다른 행의 열린 finding·M5 전체·ready·RC·소유자 승인·M6/M7 미완료를 유지합니다. 다음은 R09이며 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r08-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "before": "135a4bb039b2ac171845a628bfc651d676b54aa739eae7a6468ec8efc49a65bd",
      "after": "2fc85322397d2bfc915e55dd380064bb3afd56b5905e804bc7de3547dabf74ef",
      "replacements": [
        [
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R07 완료, R08~R26 검토 및 통합 미완료 |",
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R08 완료, R09~R26 검토 및 통합 미완료 |"
        ],
        [
          "| `src/content/docs/09-git-github/git-and-github.md` | draft | M3-GIT-OPS |",
          "| `src/content/docs/09-git-github/git-and-github.md` | review | M3-GIT-OPS |"
        ],
        [
          "| - [ ] | R08 `git-github` |",
          "| - [x] | R08 `git-github` |"
        ]
      ]
    },
    {
      "path": "research/source-map.md",
      "before": "a0b728e876d70510fb0201b0136fb8be0cb2fbf966ca56d5bc4d775c6d2adb48",
      "after": "6bd6c75395229ece85e8a720d48018ffeb2a303e828c988723eea5440fa89c1f",
      "replacements": [
        [
          "원고와 인접 문맥의 수정은 같은 R08 reviewer 후속 검토 대기이고 R21 전체 검토를 대체하지 않습니다.",
          "원고와 지정 인접 문맥의 수정은 같은 저장 R08 reviewer 후속 PASS C0/I0/M0로 해소했으며 R21 전체 검토를 대체하지 않습니다. review 전이는 R08 controller closeout에 연결하고 ready·공개 승인을 뜻하지 않습니다."
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
    "execution_request_path": "docs/project/reviews/public-beta-1/r08-git-github-request.md",
    "execution_manifest_path": "docs/project/reviews/public-beta-1/r08-git-github-input-manifest.json",
    "source_checked_at": "2026-11-15",
    "combined_sha256": "8fd0387be743ef54b9b6c1ad24ae4a407347bda50223a5b14cc9948c3fdb4151",
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
    "rereview_state": "pass-target-important3-minor3-and-R21-context-important1-minor2-resolved",
    "deferred_findings": [],
    "reviewed_target_sha256": "791bf69c68c9a34d2868a35f67b4272694c47b4e81043a32d308c04dafad730d",
    "current_target_sha256": "e9a859657dc626c9ee734231c8a2ba59e666887ed764cb0b0b888001f57118c1",
    "metadata_transition": "metadata-only-draft-to-review",
    "closeout_path": "docs/project/reviews/public-beta-1/r08-controller-closeout.md",
    "rereview_path": "docs/project/reviews/public-beta-1/r08-git-github-codex-rereview.md",
    "next_scope": "R09 pending; R21 full review pending; no M5/ready/public approval"
  },
  "evidence": [
    {
      "path": "docs/project/reviews/public-beta-1/r08-controller-closeout.md",
      "sha256": "70a1e78a331ba7768403819c8af06bc61f6889c23e18a24c4c11503da2d4736b"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r08-git-github-request.md",
      "sha256": "190bf9a357de3de2209960b2651b9a369216fd59a66737c010cd2ee28229bca3"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r08-git-github-input-manifest.json",
      "sha256": "ae350f445b25eae14867b3b97bff8dbbd47841344fe378089d1bc32b88e9ebab"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r08-git-github-codex-review.md",
      "sha256": "ae5079ad022cd394a9fc1ad7247edd99f849853140dad61cca8e0a1b365c6829"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r08-git-github-adjudication.md",
      "sha256": "8fd76d99476cd450ea1fa3817dab927fdf53e62feced90d2eb6f8fc35e17ae0f"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r08-git-github-codex-rereview.md",
      "sha256": "1a66d5e14063aaa92cb9276c059c277bf5d71c4fe2b2768e4c87ca367b69a52d"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r08-fix-validation.md",
      "sha256": "111a6cfc3e62d9883dc6ec9cabb416fc969cd18727a9044d6f2648aeb8836c55"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r08-input-preparation-report.md",
      "sha256": "3957a70106e2ec20c8f580888c7e75ab13c25ac4e141244eec9ac155ef30b56d"
    }
  ]
};
const hash=b=>createHash('sha256').update(b).digest('hex');
export function r08PreCloseoutBytes(path,bytes){
 bytes=r09PreFixBytes(path,bytes);
 const e=r08Closeout.changes.find(e=>e.path===path);if(!e||hash(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R08 closeout reversal not unique');text=text.replace(after,before)}
 if(hash(text)!==e.before)throw Error('R08 pre-closeout hash mismatch');return Buffer.from(text);
}
export function validateR08Closeout(root,{read=p=>readFileSync(resolve(root,p))}={}){
 const errors=[];const required=[...r08Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)).map(e=>({path:e.path,sha256:e.after})),...r08Closeout.evidence];
 for(const e of required){try{if(hash(r09PreFixBytes(e.path,read(e.path)))!==e.sha256)errors.push('R08 closeout pinned file mismatch: '+e.path)}catch{errors.push('R08 closeout missing file: '+e.path)}}return errors;
}
