import {r14PreFixBytes} from './r14-fix-transition.mjs';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
export const r13Closeout={
  "changes": [
    {
      "path": "src/content/docs/12-case-studies/analytics-dashboard-case-study.md",
      "before": "08a927dacc3ff0fa662ff87728316485b7cd4749bbb8931a83de301d50b1e1d5",
      "after": "4be57134aca3ace3b0d6e3400ddfefd515b7f04b42affa4c1e1c4ab71d0d9502",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r13-stock-capstone-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r13-stock-capstone-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r13-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "CONTENT_MAP.md",
      "before": "52d3f2c261009597ef97945dd81f347b589903adbd464c52fe9b0e0ad9b7f8ee",
      "after": "0079567455bd8d7187876ac529cf1a25cfa27c7e9d0652fdd03f3f139e5959e0",
      "replacements": [
        [
          "- 상태: `draft` 47개, `seed` 0개, `review` 12개, `ready` 0개",
          "- 상태: `draft` 46개, `seed` 0개, `review` 13개, `ready` 0개"
        ],
        [
          "| `draft` | 34,351 | `/12-case-studies/analytics-dashboard-case-study/` |",
          "| `review` | 34,351 | `/12-case-studies/analytics-dashboard-case-study/` |"
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "before": "67402debeeb45579307aafd8d00e02327ab3ee97053e3196fe66a441a4983f38",
      "after": "cba5a21ec8703adb49f4449a3b5fe018a44a0969e75c3bc9f8e01c5812c85cba",
      "replacements": [
        [
          "# 공개 베타 M5 독립 검토 행렬",
          "# 공개 베타 M5 독립 검토 행렬\n\n2026-11-15 R13 controller closeout: 최초 NEEDS CHANGES C0/I4/M2·15/18을 보존하고 같은 저장 reviewer의 Fix1 PASS C0/I0/M0·18/18·코드PASS로 원고6건·포인터1건을 RESOLVED로 연결합니다. 본문·그림 불변 metadata-only review 전이, R01~R13 done, R14~R26 pending/not-fixed, 공개59개 draft46/review13/ready0입니다. 최초 검사exit1·최초pilot 시각불수용과 보정검사exit0을 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r13-controller-closeout.md입니다. 다른 행의 열린 finding·M5 전체·ready·RC·소유자 승인·M6/M7 미완료를 유지합니다. 다음은 R14이며 외부 쓰기는 하지 않습니다."
        ],
        [
          "| R13 | `stock-capstone` | 개별 심층 | 1 | 작성·구현 완료 | pending | 대기 | false |",
          "| R13 | `stock-capstone` | 개별 심층 | 1 | 작성·구현 완료 | done | 통과 | false |"
        ],
        [
          "`row_defaults`는 아직 시작하지 않은 R13~R26의 기본 상태이며 R01~R12는 완료된 `review_state` 전체로 이를 대체합니다.",
          "`row_defaults`는 아직 시작하지 않은 R14~R26의 기본 상태이며 R01~R13은 완료된 `review_state` 전체로 이를 대체합니다."
        ],
        [
          "\"block_reason\": \"R13~R26 입력 고정 및 Codex 검토 미실행\"",
          "\"block_reason\": \"R14~R26 입력 고정 및 Codex 검토 미실행\""
        ],
        [
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r13-stock-capstone-codex-rereview.md\"",
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r13-stock-capstone-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r13-stock-capstone-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r13-stock-capstone-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"1f9bf1bf61bd0fea2e00c8ff98a1d2216c3c86d587460e7ca7c11a0ec7eae346\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important4-minor2-preparation-minor1-resolved\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"08a927dacc3ff0fa662ff87728316485b7cd4749bbb8931a83de301d50b1e1d5\",\"current_target_sha256\":\"4be57134aca3ace3b0d6e3400ddfefd515b7f04b42affa4c1e1c4ab71d0d9502\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r13-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r13-stock-capstone-codex-rereview.md\",\"next_scope\":\"R14 pending; no M5/ready/public approval\"}"
        ]
      ]
    },
    {
      "path": "PROJECT_CONTEXT.md",
      "before": "9ebaff6721abe280cb79b4d6afe7ba2e8d8ff5608068f95d1185ec8c402a7d01",
      "after": "1542539e4c01548761034ba48891669d3b664340f7947c9a55cb120d891fdb1c",
      "replacements": [
        [
          "# 프로젝트 컨텍스트",
          "# 프로젝트 컨텍스트\n\n2026-11-15 R13 controller closeout: 최초 NEEDS CHANGES C0/I4/M2·15/18을 보존하고 같은 저장 reviewer의 Fix1 PASS C0/I0/M0·18/18·코드PASS로 원고6건·포인터1건을 RESOLVED로 연결합니다. 본문·그림 불변 metadata-only review 전이, R01~R13 done, R14~R26 pending/not-fixed, 공개59개 draft46/review13/ready0입니다. 최초 검사exit1·최초pilot 시각불수용과 보정검사exit0을 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r13-controller-closeout.md입니다. 다른 행의 열린 finding·M5 전체·ready·RC·소유자 승인·M6/M7 미완료를 유지합니다. 다음은 R14이며 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r13-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "ROADMAP.md",
      "before": "d83483ccc4243a963065e5dcb879fcb2b736204710fa7d822c8fef7e1ca532ab",
      "after": "03f2620732a3267d7906fd896659f5bcb18a25f099b56464e6fdf8eafb540589",
      "replacements": [
        [
          "# 로드맵",
          "# 로드맵\n\n2026-11-15 R13 controller closeout: 최초 NEEDS CHANGES C0/I4/M2·15/18을 보존하고 같은 저장 reviewer의 Fix1 PASS C0/I0/M0·18/18·코드PASS로 원고6건·포인터1건을 RESOLVED로 연결합니다. 본문·그림 불변 metadata-only review 전이, R01~R13 done, R14~R26 pending/not-fixed, 공개59개 draft46/review13/ready0입니다. 최초 검사exit1·최초pilot 시각불수용과 보정검사exit0을 구분합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r13-controller-closeout.md입니다. 다른 행의 열린 finding·M5 전체·ready·RC·소유자 승인·M6/M7 미완료를 유지합니다. 다음은 R14이며 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r13-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "before": "1c3a4688e92eb95e9c03f9144b3c1ccc5258b2a4827e30dd0639fc680706aac6",
      "after": "72118ce1f53122dd046a91a3de6f6b91b5f31ee43809a2dbf0bd278963a87075",
      "replacements": [
        [
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R12 완료, R13~R26 검토 및 통합 미완료 |",
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R13 완료, R14~R26 검토 및 통합 미완료 |"
        ],
        [
          "| `src/content/docs/12-case-studies/analytics-dashboard-case-study.md` | draft | M3-CAP |",
          "| `src/content/docs/12-case-studies/analytics-dashboard-case-study.md` | review | M3-CAP |"
        ],
        [
          "| - [ ] | R13 `stock-capstone` |",
          "| - [x] | R13 `stock-capstone` |"
        ]
      ]
    },
    {
      "path": "research/source-map.md",
      "before": "068c4e1cc4e28be7bb36aeebcb2fa74307e9ca10fbefd03e82dd8a737dc4bf18",
      "after": "99fc13dcdb156ab503cab88f3b43d17bd863bf5f4c4b12de19fab40a3aa6ac60",
      "replacements": [
        [
          "PBSG-019/026의 not-confirmed를 유지하고 실제 구현·검토 PASS·배포·공개 성공으로 확대하지 않습니다.",
          "PBSG-019/026의 not-confirmed와 실제 구현·배포·공개 미검증을 유지합니다. R13 문서 수정은 같은 저장 reviewer의 Fix1 PASS18/18·C0/I0/M0으로 해소했습니다. review 전이는 R13 controller closeout에 연결하며 M5 전체·ready·공개 승인을 뜻하지 않습니다."
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/r13-stock-capstone-adjudication.md",
      "before": "89ff0a106124c8790c24d6015f4f98ee76076778be0100aa3303b9b2d639ede7",
      "after": "d2568175ea4c8fdce1c1b57435977490a417d4b8e4787aaf7a4ebdf547a28788",
      "replacements": [
        [
          "R13 controller closeout와 review 전이는 아직 별도 대기입니다.",
          "Fix1은 09c3a49에 선별 커밋했습니다. 이후 R13의 review 전이와 controller closeout은 r13-controller-closeout.md에 연결합니다."
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
    "execution_request_path": "docs/project/reviews/public-beta-1/r13-stock-capstone-request.md",
    "execution_manifest_path": "docs/project/reviews/public-beta-1/r13-stock-capstone-input-manifest.json",
    "source_checked_at": "2026-11-15",
    "combined_sha256": "1f9bf1bf61bd0fea2e00c8ff98a1d2216c3c86d587460e7ca7c11a0ec7eae346",
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
    "rereview_state": "pass-important4-minor2-preparation-minor1-resolved",
    "deferred_findings": [],
    "reviewed_target_sha256": "08a927dacc3ff0fa662ff87728316485b7cd4749bbb8931a83de301d50b1e1d5",
    "current_target_sha256": "4be57134aca3ace3b0d6e3400ddfefd515b7f04b42affa4c1e1c4ab71d0d9502",
    "metadata_transition": "metadata-only-draft-to-review",
    "closeout_path": "docs/project/reviews/public-beta-1/r13-controller-closeout.md",
    "rereview_path": "docs/project/reviews/public-beta-1/r13-stock-capstone-codex-rereview.md",
    "next_scope": "R14 pending; no M5/ready/public approval"
  },
  "evidence": [
    {
      "path": "docs/project/reviews/public-beta-1/r13-controller-closeout.md",
      "sha256": "4eca504716bb42447780f8368e46def9ec93b43e2bff08ad94055987c442d5dd"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r13-stock-capstone-request.md",
      "sha256": "7fde3cf7d945aa96183c819cf49c1b3547d21bd592f07b30b038525f27e44b85"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r13-stock-capstone-input-manifest.json",
      "sha256": "a4c836be830990a1010b8e2ada9885a182a8a3879132ae231fedb73c0aff7078"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r13-stock-capstone-codex-review.md",
      "sha256": "340588c0dda151d9faaf5274fb0fbfa86e8d11b4bc514fee0b2d9c636336faae"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r13-stock-capstone-adjudication.md",
      "sha256": "d2568175ea4c8fdce1c1b57435977490a417d4b8e4787aaf7a4ebdf547a28788"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r13-stock-capstone-codex-rereview.md",
      "sha256": "21eb05c1c8152cd40dfff4a30edde61629c0759afc159b47ac92a4679ffa4ecc"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r13-fix-validation.md",
      "sha256": "af6ad7227557472f945e990ea0cfb60681dba91929343fae24c3cdb6fa4689d3"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r13-input-preparation-report.md",
      "sha256": "4f11ad5db645d90393647882808cefa9e000ea955473a26bdf43cb32b5da470d"
    }
  ]
};
const hash=b=>createHash('sha256').update(b).digest('hex');
export function r13PreCloseoutBytes(path,bytes){
 bytes=r14PreFixBytes(path,bytes);
 const e=r13Closeout.changes.find(e=>e.path===path);if(!e||hash(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R13 closeout reversal not unique');text=text.replace(after,before)}
 if(hash(text)!==e.before)throw Error('R13 pre-closeout hash mismatch');return Buffer.from(text);
}
export function validateR13Closeout(root,{read=p=>readFileSync(resolve(root,p))}={}){
 const errors=[];const required=[...r13Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)).map(e=>({path:e.path,sha256:e.after})),...r13Closeout.evidence];
 for(const e of required){try{if(hash(r14PreFixBytes(e.path,read(e.path)))!==e.sha256)errors.push('R13 closeout pinned file mismatch: '+e.path)}catch{errors.push('R13 closeout missing file: '+e.path)}}return errors;
}
