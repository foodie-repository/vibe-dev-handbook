import {r12PreFixBytes} from './r12-fix-transition.mjs';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
export const r11Closeout={
  "changes": [
    {
      "path": "src/content/docs/11-ai-native/working-with-coding-agents.md",
      "before": "b4e9e6b2354bbe19faea189931823fdd682f2f9a657187d44cfadd5ca7a3b44c",
      "after": "ac63eb2a468416b43c57432ac4297e0af3c27edf6d694b86a40bca7131311711",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r11-coding-agents-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r11-coding-agents-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r11-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "CONTENT_MAP.md",
      "before": "7f4756a03eceb0bac7a74168e042c588e1865bc4658d2c41636f300d54c4950c",
      "after": "c2000d3624120a9c2902fef4e51fe024866e42dd15c916eba9b7841b2f7ffe9c",
      "replacements": [
        [
          "- 상태: `draft` 49개, `seed` 0개, `review` 10개, `ready` 0개",
          "- 상태: `draft` 48개, `seed` 0개, `review` 11개, `ready` 0개"
        ],
        [
          "| `draft` | 20,352 | `/11-ai-native/working-with-coding-agents/` |",
          "| `review` | 20,352 | `/11-ai-native/working-with-coding-agents/` |"
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "before": "a2a7f989878413261ca194aac1cb4b75caa222e249a871604312344c72beed36",
      "after": "d8b7d161a9ec2ae6314779cea9d816f6185b986ce151ff05c7280b6ebd0e453e",
      "replacements": [
        [
          "# 공개 베타 M5 독립 검토 행렬",
          "# 공개 베타 M5 독립 검토 행렬\n\n2026-11-15 R11 controller closeout: 최초 NEEDS CHANGES C0/I2/M2·16/18을 보존하고 같은 저장 reviewer의 Fix1 PASS C0/I0/M0·18/18·코드PASS로 지정4건과 별도 절차 Important 1건을 RESOLVED로 연결합니다. R11 본문·그림 불변 metadata-only review 전이, R01~R11 done, R12~R26 pending/not-fixed, 공개59개 draft48/review11/ready0입니다. Fix1 체크포인트 NEEDS CHANGES와 순서 이탈은 보존하고 별도 절차 PASS를 연결합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r11-controller-closeout.md입니다. 다른 행의 열린 finding·M5 전체·ready·RC·소유자 승인·M6/M7 미완료를 유지합니다. 다음은 R12이며 외부 쓰기는 하지 않습니다."
        ],
        [
          "| R11 | `coding-agents` | 개별 심층 | 1 | 작성·구현 완료 | pending | 대기 | false |",
          "| R11 | `coding-agents` | 개별 심층 | 1 | 작성·구현 완료 | done | 통과 | false |"
        ],
        [
          "`row_defaults`는 아직 시작하지 않은 R11~R26의 기본 상태이며 R01~R10은 완료된 `review_state` 전체로 이를 대체합니다.",
          "`row_defaults`는 아직 시작하지 않은 R12~R26의 기본 상태이며 R01~R11은 완료된 `review_state` 전체로 이를 대체합니다."
        ],
        [
          "\"block_reason\": \"R11~R26 입력 고정 및 Codex 검토 미실행\"",
          "\"block_reason\": \"R12~R26 입력 고정 및 Codex 검토 미실행\""
        ],
        [
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r11-coding-agents-codex-rereview.md\"",
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r11-coding-agents-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r11-coding-agents-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r11-coding-agents-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"b6c9b9ee54fb560076d813dfdcd8f9a39cce9b163df36b57e60c6461b231aa2b\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important2-minor2-and-procedure-important1-resolved\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"b4e9e6b2354bbe19faea189931823fdd682f2f9a657187d44cfadd5ca7a3b44c\",\"current_target_sha256\":\"ac63eb2a468416b43c57432ac4297e0af3c27edf6d694b86a40bca7131311711\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r11-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r11-coding-agents-codex-rereview.md\",\"next_scope\":\"R12 pending; no M5/ready/public approval\"}"
        ]
      ]
    },
    {
      "path": "PROJECT_CONTEXT.md",
      "before": "1b49880fc177a996e1a560974d38ae9e6d59026df998ef1c87ae2e24c8be1ef5",
      "after": "5ebd4cb5dd452e6529ee4315d0b642dc8cb8bf3c6c361aca415947ae147637c9",
      "replacements": [
        [
          "# 프로젝트 컨텍스트",
          "# 프로젝트 컨텍스트\n\n2026-11-15 R11 controller closeout: 최초 NEEDS CHANGES C0/I2/M2·16/18을 보존하고 같은 저장 reviewer의 Fix1 PASS C0/I0/M0·18/18·코드PASS로 지정4건과 별도 절차 Important 1건을 RESOLVED로 연결합니다. R11 본문·그림 불변 metadata-only review 전이, R01~R11 done, R12~R26 pending/not-fixed, 공개59개 draft48/review11/ready0입니다. Fix1 체크포인트 NEEDS CHANGES와 순서 이탈은 보존하고 별도 절차 PASS를 연결합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r11-controller-closeout.md입니다. 다른 행의 열린 finding·M5 전체·ready·RC·소유자 승인·M6/M7 미완료를 유지합니다. 다음은 R12이며 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r11-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "ROADMAP.md",
      "before": "c15912ab09ff763eb72fc0ff3cb52b8270e15c87f2f36abe7187b4077c92ff0e",
      "after": "0513863b8b12c2cafe0eb9498633c95eb69326b26ead8ddfb38b26a632ccafff",
      "replacements": [
        [
          "# 로드맵",
          "# 로드맵\n\n2026-11-15 R11 controller closeout: 최초 NEEDS CHANGES C0/I2/M2·16/18을 보존하고 같은 저장 reviewer의 Fix1 PASS C0/I0/M0·18/18·코드PASS로 지정4건과 별도 절차 Important 1건을 RESOLVED로 연결합니다. R11 본문·그림 불변 metadata-only review 전이, R01~R11 done, R12~R26 pending/not-fixed, 공개59개 draft48/review11/ready0입니다. Fix1 체크포인트 NEEDS CHANGES와 순서 이탈은 보존하고 별도 절차 PASS를 연결합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r11-controller-closeout.md입니다. 다른 행의 열린 finding·M5 전체·ready·RC·소유자 승인·M6/M7 미완료를 유지합니다. 다음은 R12이며 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r11-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "before": "688c2074e31d0848d7562f4828104637dae94dda55079b57567e4516911dabbe",
      "after": "51fdaece051ca66c3f9168ba011e5a1ddf61eba9ce26f95aacf41811f7328067",
      "replacements": [
        [
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R10 완료, R11~R26 검토 및 통합 미완료 |",
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R11 완료, R12~R26 검토 및 통합 미완료 |"
        ],
        [
          "| `src/content/docs/11-ai-native/working-with-coding-agents.md` | draft | M3-AI |",
          "| `src/content/docs/11-ai-native/working-with-coding-agents.md` | review | M3-AI |"
        ],
        [
          "| - [ ] | R11 `coding-agents` |",
          "| - [x] | R11 `coding-agents` |"
        ]
      ]
    },
    {
      "path": "research/source-map.md",
      "before": "2ed0ce6c0c2e23f33b779fc405e9b1bb49d7913dba80fa17446d13efb26b4679",
      "after": "c7a2ef5a34bc084bf4ab47c384b871ca97cd0337fa32114a17ec119ce4ce75e3",
      "replacements": [
        [
          "R11의 blocked·W03 동시 중복·템플릿 수정은 같은 저장 reviewer 후속 검토 전까지 해소 완료로 처리하지 않습니다.",
          "R11의 blocked·W03 동시 중복·템플릿 수정은 같은 저장 reviewer의 Fix1 원고 PASS18/18로 해소했습니다. 별도 절차 Important도 좁은 후속 PASS로 해소했지만 과거 순서 이탈은 보존합니다. R11 review 전이는 controller closeout에 연결하며 ready·공개 승인을 뜻하지 않습니다."
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/r11-coding-agents-adjudication.md",
      "before": "b15f1d838a612d9efa0f52b60e696f02838690efdb786b2bd9d1a22fc09a3fd8",
      "after": "fbfa326cbd55dc42728c58a9a8d5fff0e913f9e75fe44f3dd84d6b95e7a946aa",
      "replacements": [
        [
          "이 단위는 Fix1 선별 커밋의 수용 조건만 충족하며 R11 controller closeout·원고 review 전이·M5 전체·ready·공개 승인은 별도 미완료입니다.",
          "Fix1은bc6ccad에 선별 커밋했습니다. 이후 R11 controller closeout·원고 review 전이는 r11-controller-closeout.md에 연결하고 M5 전체·ready·공개 승인은 미완료로 유지합니다."
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
    "execution_request_path": "docs/project/reviews/public-beta-1/r11-coding-agents-request.md",
    "execution_manifest_path": "docs/project/reviews/public-beta-1/r11-coding-agents-input-manifest.json",
    "source_checked_at": "2026-11-15",
    "combined_sha256": "b6c9b9ee54fb560076d813dfdcd8f9a39cce9b163df36b57e60c6461b231aa2b",
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
    "rereview_state": "pass-important2-minor2-and-procedure-important1-resolved",
    "deferred_findings": [],
    "reviewed_target_sha256": "b4e9e6b2354bbe19faea189931823fdd682f2f9a657187d44cfadd5ca7a3b44c",
    "current_target_sha256": "ac63eb2a468416b43c57432ac4297e0af3c27edf6d694b86a40bca7131311711",
    "metadata_transition": "metadata-only-draft-to-review",
    "closeout_path": "docs/project/reviews/public-beta-1/r11-controller-closeout.md",
    "rereview_path": "docs/project/reviews/public-beta-1/r11-coding-agents-codex-rereview.md",
    "next_scope": "R12 pending; no M5/ready/public approval"
  },
  "evidence": [
    {
      "path": "docs/project/reviews/public-beta-1/r11-controller-closeout.md",
      "sha256": "f2decbea36c9933d67dd0a2a5397a2d796d596bd8841420123b883b4bf1260fd"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r11-coding-agents-request.md",
      "sha256": "39851c1774eb1ecaaad18ae06bb7461061b0e7d782aac0a5c925d8d17b6f187e"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r11-coding-agents-input-manifest.json",
      "sha256": "94b08107a1a7435468d28e3532d8f7abf29f76d3caa82d99de2a18ef21012bff"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r11-coding-agents-codex-review.md",
      "sha256": "69e036963050ec16ff659d8151d92e33cfeed4c7ae348c60f7957cbbb10cc612"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r11-coding-agents-adjudication.md",
      "sha256": "fbfa326cbd55dc42728c58a9a8d5fff0e913f9e75fe44f3dd84d6b95e7a946aa"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r11-coding-agents-codex-rereview.md",
      "sha256": "8e85040a67db574f85f2822900c434028848de1141e3d25e053949fb3fa7eb06"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r11-fix-validation.md",
      "sha256": "868421c3d29b37755399ce784f6209895e2381092cd8427055dae23858ac223c"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r11-input-preparation-report.md",
      "sha256": "9530e1bc092282ea2da3508b6a9179f0338181afb02c31e9596af08a41a987ca"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r11-procedure-review.md",
      "sha256": "87d3eca31be610c4890039b565a669fd98597ca400654e73b9707a29940c477e"
    }
  ]
};
const hash=b=>createHash('sha256').update(b).digest('hex');
export function r11PreCloseoutBytes(path,bytes){
 bytes=r12PreFixBytes(path,bytes);
 const e=r11Closeout.changes.find(e=>e.path===path);if(!e||hash(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R11 closeout reversal not unique');text=text.replace(after,before)}
 if(hash(text)!==e.before)throw Error('R11 pre-closeout hash mismatch');return Buffer.from(text);
}
export function validateR11Closeout(root,{read=p=>readFileSync(resolve(root,p))}={}){
 const errors=[];const required=[...r11Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)).map(e=>({path:e.path,sha256:e.after})),...r11Closeout.evidence];
 for(const e of required){try{if(hash(r12PreFixBytes(e.path,read(e.path)))!==e.sha256)errors.push('R11 closeout pinned file mismatch: '+e.path)}catch{errors.push('R11 closeout missing file: '+e.path)}}return errors;
}
