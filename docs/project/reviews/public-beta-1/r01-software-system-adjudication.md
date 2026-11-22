# R01 `software-system` controller 재판정

- 재판정일: `2026-09-12`
- 대상 결과: `docs/project/reviews/public-beta-1/r01-software-system-codex-review.md`
- 결과 판정: `PASS`, Critical `0`, Important `0`, Minor `2`, 루브릭 `17/18`, 치명 항목 `0`
- controller 결론: 두 finding을 모두 `수용·현행 유지(비차단 Minor)`로 재판정하며, 의미 수정이나 재검토 없이 같은 원고 위치의 open Minor로 추적합니다.
- 승인 경계: 이 재판정은 R01 행만 닫으며 소유자 승인, `ready`, R26, M5 전체, M6/M7, push, 배포 또는 공개 URL을 승인하지 않습니다.

## 입력과 결과 대조

Controller는 input commit `7e6226b4e5f067e779767bf4ad944fd9e3c0ef5f`의 고정 요청서와 result commit `b163d4f3f4d12d4d9afb9fc3775fe5623dde0bcc`의 정본 결과를 대조했습니다. 독립 reviewer는 `gpt-6-astra` / `high`, 텍스트 `27/27`, 문맥 발췌 `17/17`, PNG `12/12`, `view_image` 12회만 사용한 읽기 전용 조건에서 `PASS C0/I0/M2`를 반환했습니다. 요청서 SHA-256 `808ca9a88841c037d29fd2d46089f0b0cbe9ef1306639e56c8399e284f01a8ca`와 framed combined SHA-256 `5750e879649ddff967f7f09d932b74c82017d81497086e176c5bc79177224f89`는 검토된 역사 입력 묶음의 식별자로 유지합니다.

대상 원고 본문, 제목, 설명, 학습 목표, 사례, 링크, 표, 프롬프트, alt는 바꾸지 않았습니다. 검토된 `draft` 문서 SHA-256은 `d9569195713fd0db9201af1d18c141ab4a9836eca3980bc4905b2b46374aea2e`이고, `contentStatus: review`와 아래 세 `reviewEvidence`만 추가한 현재 SHA-256은 `f086dc056630893c03b2a8c1a98304063bf1053eef26b25da7b587ae038bbc3d`입니다. 현재 frontmatter에서 이 정확한 세 증거를 제거하고 상태를 `draft`로 되돌려 재구성한 바이트의 SHA-256이 검토 전 값과 일치하므로, 이 전이는 검토 입력의 의미를 바꾸지 않는 metadata-only 변경입니다.

## Finding 재판정

### R01-M01 — 프로그램과 시스템의 직접 연결

- 재판정: `수용·현행 유지(비차단 Minor)`
- 상태: open Minor
- 근거: 프로그램과 시스템을 직접 잇는 문장이 있으면 첫 학습의 관계 설명이 더 좋아집니다. 다만 현행 원고는 코드가 시스템 전부가 아님을 설명하고 구성요소·책임·경계·상태·흐름·제약을 실제 사례와 연결하므로 핵심 목표를 깨지 않습니다. 실제 검토도 루브릭 `17/18`, Critical·Important·치명 항목 `0`으로 통과했습니다.
- 현행 유지 이유: 이 finding은 잘못된 경계나 안전 오류가 아니라 국소적인 초보자 설명 보완입니다. 현재 행 closeout을 막지 않고, 별도 목표나 새 작업을 만들지 않습니다.
- 후속 위치: 같은 원고의 `한 문장 정의`와 `시스템을 보는 여섯 렌즈` 사이에서 open Minor로 추적합니다.

### R01-M02 — `lineage`와 `dataset_version` 첫 등장

- 재판정: `수용·현행 유지(비차단 Minor)`
- 상태: open Minor
- 근거: 첫 등장 마찰은 실제입니다. 다만 인접 문단이 원천·변환·저장·게시 책임을 한국어로 설명하고, 그림 alt와 연결된 개발 용어집·캡스톤 정의가 의미를 보충하므로 핵심 데이터 경계나 안전 판단 오류는 아닙니다. 실제 검토의 Critical·Important·치명 항목도 모두 `0`입니다.
- 현행 유지 이유: 현재 표현은 초보자의 첫 독해를 조금 어렵게 하지만 잘못된 정의를 가르치지는 않습니다. 그림이나 본문 의미를 고치지 않고 현재 행을 닫으며, 별도 목표나 새 작업을 만들지 않습니다.
- 후속 위치: 같은 원고의 `두 사례로 책임 차이 보기`와 `보조 비교: 교육용 주가 fixture 대시보드`에서 open Minor로 추적합니다.

## 재검토와 남은 경계

수용한 변경은 `contentStatus`와 실제 request/result/adjudication 경로를 기록한 frontmatter뿐이고 원고 의미·SVG/MMD·alt·스타일·출처·요청서는 불변입니다. Critical·Important는 `0`이며 의미 수정이 없으므로 같은 reviewer 재검토와 PNG 12개 재검증은 필요하지 않습니다. Minor `2`는 닫거나 해결한 것으로 바꾸지 않고 R01과 이후 R26의 남은 위험 입력으로 유지합니다.

R02~R26은 계속 `pending/not-fixed`입니다. 공개 문서 상태는 `review 1 / draft 58 / ready 0`이며, R01 완료는 M5 전체, R26 통합, 소유자 승인, release candidate 또는 공개 완료가 아닙니다.

<!-- m5-r01-adjudication:data:start -->
```json
{
  "schema_version": 1,
  "campaign": "public-beta-1-m5",
  "review_id": "R01",
  "adjudicated_at": "2026-09-12",
  "reviewed_input_commit": "7e6226b4e5f067e779767bf4ad944fd9e3c0ef5f",
  "result_commit": "b163d4f3f4d12d4d9afb9fc3775fe5623dde0bcc",
  "request_sha256": "808ca9a88841c037d29fd2d46089f0b0cbe9ef1306639e56c8399e284f01a8ca",
  "combined_sha256": "5750e879649ddff967f7f09d932b74c82017d81497086e176c5bc79177224f89",
  "target": {
    "path": "src/content/docs/01-mental-models/software-is-a-system.md",
    "reviewed_sha256": "d9569195713fd0db9201af1d18c141ab4a9836eca3980bc4905b2b46374aea2e",
    "current_sha256": "f086dc056630893c03b2a8c1a98304063bf1053eef26b25da7b587ae038bbc3d",
    "transition": "metadata-only-draft-to-review",
    "content_semantics_changed": false,
    "review_evidence": [
      "request: docs/project/reviews/public-beta-1/r01-software-system-request.md",
      "independent: docs/project/reviews/public-beta-1/r01-software-system-codex-review.md",
      "adjudication: docs/project/reviews/public-beta-1/r01-software-system-adjudication.md"
    ]
  },
  "review_result": {
    "path": "docs/project/reviews/public-beta-1/r01-software-system-codex-review.md",
    "sha256": "e56086d11ee3fcd8d92070a70778105c92a8d7f69fa0b9feb278a2040c6abeca",
    "verdict": "PASS",
    "rubric_score": 17,
    "rubric_maximum": 18,
    "fatal_findings": 0,
    "critical": 0,
    "important": 0,
    "minor": 2,
    "actual_model": "gpt-6-astra",
    "actual_reasoning_effort": "high",
    "text_chunks_read": "27/27",
    "context_excerpts_read": "17/17",
    "png_inputs_read": "12/12",
    "reviewer_tools": "view_image:12-only"
  },
  "findings": [
    {
      "id": "R01-M01",
      "severity": "Minor",
      "decision": "accept-current",
      "status": "open-nonblocking",
      "reason": "직접 연결 문장은 유익하지만 현행 원고가 핵심 시스템 경계와 학습 목표를 충족하고 C/I/fatal 0 및 17/18을 확보했습니다.",
      "follow_up_location": "src/content/docs/01-mental-models/software-is-a-system.md#한-문장-정의 및 #시스템을-보는-여섯-렌즈"
    },
    {
      "id": "R01-M02",
      "severity": "Minor",
      "decision": "accept-current",
      "status": "open-nonblocking",
      "reason": "첫 등장 마찰은 있지만 인접 한국어 설명·alt·용어집·캡스톤 정의가 의미를 보충해 핵심 경계 오류가 아닙니다.",
      "follow_up_location": "src/content/docs/01-mental-models/software-is-a-system.md#두-사례로-책임-차이-보기 및 #보조-비교-교육용-주가-fixture-대시보드"
    }
  ],
  "summary": {
    "findings_total": 2,
    "adjudicated": 2,
    "open_findings": {
      "critical": 0,
      "important": 0,
      "minor": 2
    },
    "rereview_required": false,
    "rereview_state": "not-required-metadata-only",
    "release_ready": false,
    "next_row": "R02-input-freeze"
  }
}
```
<!-- m5-r01-adjudication:data:end -->
