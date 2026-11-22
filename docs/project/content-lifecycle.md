# 콘텐츠 상태와 승격 기준

이 문서는 공개 학습 문서의 `contentStatus` 의미와 승격 증거를 정의하는 단일 진실 공급원입니다. 상태는 원고 분량이 아니라 독자가 사용할 수 있는 수준과 검토 증거를 나타냅니다.

## 상태 정의

| 상태 | 의미 | 최소 조건 |
|---|---|---|
| `seed` | 집필 시드 | 범위, 독자 질문, 핵심 정의, 판단 질문과 대표 실패를 고정함 |
| `draft` | 검토용 초안 | 처음부터 끝까지 읽을 수 있고 장 템플릿의 핵심 질문에 답하지만 독립 검토 전임 |
| `review` | 검토 중 | 자체 품질 점검을 마치고 독립 검토와 재판정에 필요한 원고·입력·검토 요청을 고정함 |
| `ready` | 출판 준비 | 독립 검토, 재판정, 요구사항 적합성, 출처, 자동·브라우저 검증과 소유자 묶음 승인을 증거로 확인함 |

섹션 인덱스와 홈도 공개 문서이므로 상태를 표시하지만, Phase 1 진행률은 `src/content/docs/start-here/learning-paths.md`에 정의된 공식 Build Track 장만 집계합니다.

## 승격 규칙

### `seed`에서 `draft`로

- 장의 학습 목표를 본문에서 실제로 다룹니다.
- 쉬운 정의와 정식 용어를 연결합니다.
- 비유를 사용했다면 맞는 지점과 깨지는 지점을 설명합니다.
- 시스템에서의 위치, 판단 기준, 실패 모드, 검증 방법과 짧은 연습이 있습니다.
- 새 기술 사실의 출처와 확인 범위를 `research/source-map.md`에서 추적할 수 있습니다.

### `draft`에서 `review`로

- `docs/project/quality-rubric.md`로 자체 점검을 마쳤습니다.
- 치명 항목이 없습니다.
- `npm run check`가 성공합니다.
- 작성 맥락을 그대로 공유하지 않은 독립 리뷰어에게 검토를 요청하고, 원고와 검토 입력을 고정합니다.
- frontmatter의 `reviewEvidence`에 `request:`로 시작하는 검토 요청 기록을 남깁니다.

### `review`에서 `ready`로

- 품질 루브릭 18점 중 15점 이상입니다.
- `independent:`에 독립 검토 결과를, `adjudication:`에 finding 재판정과 남은 위험을, `conformance:`에 확정 원고와 수용 기준의 대조를 기록합니다.
- `sources:`에 공식·1차 출처, 확인일과 적용 범위를 추적할 수 있는 근거를 기록합니다.
- `automated:`와 `browser:`에 각각 자동 검사와 필요한 브라우저 검증의 실행 결과를 기록합니다.
- `owner:`에 소유자가 같은 원고 SHA와 승격 범위를 확인한 묶음 승인 기록을 남깁니다.
- 본문에서 `src/assets/diagrams/`의 로컬 학습 다이어그램 이미지를 참조하면 `visual:`에 해당 시각 자료의 접근성·표현 검증 기록을 남깁니다. 다이어그램이 없는 문서에는 `visual:`이 필요하지 않습니다.

### 의미 있는 변경 뒤 재검토

`review` 또는 `ready` 문서의 주장, 사례, 출처 적용 범위, 다이어그램 의미, 학습 목표나 판단 기준이 실질적으로 바뀌면 관련 독립 검토·재판정·적합성·출처·자동·브라우저 증거를 다시 확인합니다. 이전 기록은 역사적 증거로 보존하되 바뀐 원고의 `ready` 승격 근거로 소급 재사용하지 않습니다.

## `reviewEvidence` 형식

증거는 저장소 안의 검토 기록 경로, 이슈나 리뷰 URL, 검증 명령과 날짜처럼 다음 작업자가 확인할 수 있는 값을 사용합니다. 개인정보, 토큰, 비공개 대화 전문은 기록하지 않습니다.

```yaml
reviewEvidence:
  - "request: docs/project/reviews/http-request-response.md"
  - "independent: docs/project/reviews/http-request-response.md#independent"
  - "adjudication: docs/project/reviews/http-request-response.md#adjudication"
  - "conformance: docs/project/reviews/http-request-response.md#conformance"
  - "sources: research/source-map.md#http-request-response"
  - "automated: npm run check, 2026-08-05"
  - "browser: docs/project/reviews/http-request-response.md#browser"
  - "owner: docs/project/reviews/http-request-response.md#owner-approval"
  - "visual: docs/project/reviews/http-request-response.md#visual"
```

자동 검증기는 필수 증거 종류와 다이어그램 조건, 저장소 안 증거 경로의 존재만 확인합니다. 리뷰가 실제로 충분했는지, 출처가 주장을 뒷받침하는지, 소유자 묶음 승인이 같은 원고를 가리키는지는 사람이 검토해야 합니다.

사람 기술·편집·비개발자 독자 검토는 `ready`의 필수 접두사가 아니라 선택 증거입니다. 실제로 수행했다면 각각 `technical:`, `editorial:`, `reader:` 기록으로 남길 수 있지만, AI가 만든 내용이나 형식상 기록으로 대체할 수 없습니다.

사람 기술 검토는 [`templates/human-technical-review-template.md`](../../templates/human-technical-review-template.md)를 복사해 실제 주장·근거·예외·위험과 재검토 결과를 `docs/project/reviews/`에 기록합니다. 빈 양식, 검토 요청, 작성자의 자체 점검, AI 검토 본문 또는 사람이 근거를 직접 확인하지 않고 AI 지적을 승인한 기록은 사람 `technical:` 증거가 아닙니다.

사람 편집 검토는 [`templates/editorial-review-template.md`](../../templates/editorial-review-template.md)를 복사해 실제 첫 독해·용어·구조·비유 한계·교차 링크·학습 과제와 재검토 결과를 `docs/project/reviews/`에 기록합니다. 빈 양식, 검토 요청, 작성자의 자체 교정, AI 교정 결과 또는 사람이 원문과 편집 규칙을 대조하지 않고 AI 제안을 승인한 기록은 사람 `editorial:` 증거가 아닙니다.

비개발자 독자 테스트는 [`templates/non-developer-reader-test-template.md`](../../templates/non-developer-reader-test-template.md)를 복사해 실제 관찰 결과를 `docs/project/reviews/`에 기록합니다. 빈 양식, 테스트 요청, 진행자의 예상 또는 AI가 독자 역할을 연기한 결과는 `reader:` 증거가 아니며, 실제 참여자의 익명 코드·날짜·과제별 관찰·제공한 도움·학습 목표별 판정과 남은 한계를 확인할 수 있어야 합니다.
