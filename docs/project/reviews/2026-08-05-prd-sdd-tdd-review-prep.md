# PRD·두 종류의 SDD·TDD 검토 준비 기록

## 목적과 현재 상태

이 문서는 공식 Build Track 여섯 번째 장인 `src/content/docs/06-requirements-design/prd-sdd-tdd.md`의 자체 품질 점검과 독립 검토 요청 범위를 기록합니다. 원고는 PRD, Software Design Description, Spec-Driven Development와 TDD를 산출물·개발 접근·구현 규율로 구분하고 요구에서 운영 증거까지 연결하는 `review` 상태입니다. 독립 AI 검토와 지적 반영·자동 검증·로컬 렌더링은 완료했지만 독립적인 사람의 기술·편집 검토와 실제 비개발자 독자 테스트는 아직 통과하지 않았습니다.

2026-08-05 03:45 KST의 첫 읽기 전용 요청은 모델 실행 전 API `429`로 종료됐고 입력·출력 토큰과 모델 사용 기록이 모두 0이었습니다. 이후 같은 날 한도 재설정 뒤 Claude Code 2.1.221의 `claude-opus-5`를 `max`, 계획 모드와 `Read` 전용으로 재실행한 결과는 종료 코드 0·P0 0건·P1 11건·P2 13건·독립 루브릭 15/18·치명 항목 없음으로 정상 완료됐습니다. 검토 전후 17개 입력 파일별 SHA-256과 결합 SHA-256이 모두 일치했고 웹 검색·웹 가져오기·권한 거부는 0건이었습니다. 계정 식별 정보는 기록하지 않습니다.

Codex는 정상 결과의 24개 지적을 실제 원고·인접 장·용어집·템플릿·출처 지도와 SVG에 대조해 수용 18건·부분 수용 4건·기각 2건으로 재판정하고 여섯 개 구현 묶음으로 정리했습니다. 실행 정본은 `docs/project/reviews/2026-08-05-prd-sdd-tdd-opus5-review.md`, 재판정은 `docs/project/reviews/2026-08-05-prd-sdd-tdd-opus5-adjudication.md`에 기록했습니다. 2026-08-06에는 이 여섯 묶음을 공개 원고·게시 SVG·Mermaid 원본·출처 지도에 반영하고, 독립 검토 정본을 `request:` 증거로 연결한 뒤 `npm run check`와 1440×1000·390×844 로컬 렌더링을 통과해 `review`로 승격했습니다.

## 자체 품질 루브릭

| 항목 | 점수 | 근거와 남은 한계 |
|---|---:|---|
| 독자 문제 | 2 | “PRD → SDD → TDD”라는 이름만 따라 문서와 테스트는 생기지만 사용자 문제·설계·작업·증거가 연결되지 않는 비개발자의 구체적인 상황에서 시작합니다. |
| 정확성 | 2 | PRD와 Software Design Description은 산출물, Spec-Driven Development는 접근, TDD는 구현 규율로 구분하고 수용 기준·테스트, TDD·테스트 전략, 실제 제약·기술 선호의 예외를 명시합니다. |
| 구조 | 2 | 사용자 문제에서 요구·설계·스펙·계획·작업·구현·검증·운영 피드백으로 이어지는 추적 구조 안에 네 개념을 배치합니다. |
| 쉬운 설명 | 2 | 정식 영문 이름과 범주별 비교 목록을 집 비유, 공개 데이터 대시보드 요구와 위험별 절차 표에 연결합니다. |
| 비유 한계 | 2 | 소프트웨어의 반복 변경, 실행 가능한 테스트, 작은 변경에서 산출물을 합칠 수 있다는 점 때문에 건축 비유가 깨지는 지점을 명시합니다. |
| 판단 기준 | 2 | 단계별 종료 질문, 수용 기준의 관찰 가능성, 과정 증거, 추적성, 변경 위험과 되돌리기 비용으로 문서·검증 수준을 선택하게 합니다. |
| 실패 모드 | 2 | SDD 약어 혼용, 템플릿 의식, 구현 선결, 파일 작업 분해, 모호한 수용 기준, 사후 테스트의 TDD 오표기, 구현 세부 고정, 스펙 드리프트와 과한 절차를 복구 질문에 연결합니다. |
| 실전 연결 | 2 | 대시보드의 원천·갱신 상태 요구, TDD의 Red·Green·Refactor 과정, AI 읽기 전용 점검 지시, 체크리스트와 즐겨찾기 연습을 제공합니다. |
| 근거 | 1 | SWEBOK 세부 주제와 GitHub Spec Kit의 확인일과 적용 범위는 추적되지만 PRD, Software Design Description과 TDD의 세부 정의·과정 증거를 직접 뒷받침하는 공식·1차 자료를 이번 작업에서 새로 확인하지 않았습니다. |

합계는 18점 중 17점입니다. 자체 점검에서 치명 항목은 발견하지 못했지만, 이 점수는 독립 검토나 `ready` 판정을 대신하지 않습니다.

## 자체 점검에서 보완한 범위

1. PRD·Software Design Description·Spec-Driven Development·TDD를 문서, 개발 접근과 구현 규율로 구분하고 서로가 증명하지 못하는 범위를 모바일에서도 읽기 쉬운 비교 목록으로 만들었습니다.
2. 네 개념을 고정된 일방향 절차가 아니라 구현·운영 피드백이 요구와 설계를 갱신하는 추적 가능한 연결로 설명했습니다.
3. PRD의 사용자 문제·범위·비범위·기능·품질 요구, 실제 제약과 관찰 가능한 수용 기준을 구현 세부와 구분했습니다.
4. Software Design Description을 기술 목록이 아니라 책임·경계·데이터·품질·실패·배포·검증과 대안을 연결하는 설계 문서로 확장했습니다.
5. Spec-Driven Development가 보편 표준으로 고정된 SDD 약어가 아님을 밝히고 GitHub Spec Kit의 흐름을 현재 프로젝트의 대표 사례로 한정했습니다.
6. TDD의 올바른 실패, 최소 구현과 동작 보존 리팩터링 증거를 설명하고 최종 테스트 파일만으로 TDD 과정을 증명할 수 없음을 명시했습니다.
7. TDD가 적합한 영역과 사용자 경험·접근성·외부 서비스·성능·복구에 필요한 다른 검증을 구분했습니다.
8. 수용 기준과 테스트 케이스, TDD와 테스트 전략을 분리하고 요구 변경 시 설계·작업·테스트·운영 증거를 다시 찾을 수 있는 추적성을 강조했습니다.
9. 변경 위험에 따라 한 작업 브리프로 합칠 수 있는 경우와 별도 위협·마이그레이션·롤아웃 계획이 필요한 경우를 나눴습니다.

## 독립 검토 요청 계약

Claude Code는 다음 파일만 읽고 수정 없이 검토합니다.

- `AGENTS.md`
- `PROJECT_CONTEXT.md`
- `RULES.md`
- `docs/project/content-lifecycle.md`
- `docs/project/quality-rubric.md`
- `research/source-map.md`
- `templates/prd-template.md`
- `templates/software-design-description-template.md`
- `templates/spec-driven-development-template.md`
- `templates/agent-task-brief-template.md`
- `src/content/docs/06-requirements-design/prd-sdd-tdd.md`
- `src/content/docs/06-requirements-design/adr-and-tradeoffs.md`
- `src/content/docs/08-quality/testing-strategy.md`
- `src/content/docs/12-case-studies/analytics-dashboard-case-study.md`
- `src/content/docs/12-case-studies/first-full-stack-project.md`
- `src/content/docs/reference/development-glossary.md`
- `src/content/docs/reference/methodology-map.md`

검토자는 다음 질문에 답해야 합니다.

1. PRD, Software Design Description, Spec-Driven Development와 TDD를 산출물·접근·구현 규율로 구분한 범주가 정확하며 중요한 예외가 빠지지 않았나요?
2. SDD가 두 의미로 쓰인다는 설명이 실제 맥락 차이를 충분히 표시하면서 Spec-Driven Development를 보편 표준처럼 과장하지 않나요?
3. PRD의 문제·요구·품질·제약·수용 기준과 기술 설계의 경계가 지나치게 단정되거나 구현 가능성 피드백을 차단하나요?
4. Software Design Description의 책임·인터페이스·데이터·품질·실패·배포·검증 범위와 ADR 분리 설명이 비개발자에게 정확한 판단 기준을 주나요?
5. GitHub Spec Kit의 Specify·Plan·Tasks·Implement 흐름과 단계별 종료 질문이 현재 확인된 출처 적용 범위를 넘어 일반화됐나요?
6. TDD의 Red·Green·Refactor, 올바른 실패, 최소 구현, 리팩터링과 과정 증거 설명에 중요한 오류가 있나요?
7. TDD에 적합한 영역과 탐색·시각·접근성·외부 연동·성능·복구의 다른 검증을 구분한 설명이 TDD 또는 테스트 전략을 잘못 축소하나요?
8. 사용자 문제에서 요구·설계·작업·테스트·운영 증거로 이어지는 추적 구조가 고정된 워터폴처럼 읽히거나 실제 피드백 순환을 놓치나요?
9. 대시보드 사례, 위험별 절차 표, AI 지시, 체크리스트와 연습이 독자가 네 개념을 실제로 구분하는지 관찰 가능하게 검증하나요?
10. 현재 출처가 직접 뒷받침하지 못하거나 추가 공식·1차 자료 확인이 필요한 주장은 무엇인가요?
11. 품질 루브릭 9개 항목을 0~2점으로 평가하고 치명 항목 여부를 판정해 주세요.

결과는 `P0 치명 오류`, `P1 review 전 필수`, `P2 개선 권장`, `잘된 점`, `루브릭 점수`, `추가 출처 확인 목록` 순으로 작성하고 각 지적에 대상 제목이나 짧은 대상 문구와 근거를 포함해야 합니다. 웹 검색, 파일 수정, Bash, 외부 플러그인과 하위 에이전트는 사용하지 않습니다.

## 승격 경계

Opus 검토·Codex 재판정·여섯 구현 묶음 반영·자체 재점검·`npm run check`·데스크톱과 모바일 렌더링·실제 검토 요청 증거 기록을 모두 확인해 `review`로 승격했습니다. 이 상태는 검토가 시작됐다는 뜻일 뿐 출판 준비 완료가 아닙니다. AI 검토는 사람 기술·편집 검토와 비개발자 독자 테스트를 대신하지 않으며, PRD·Software Design Description·요구공학·TDD 세부의 직접 공식·1차 출처 확인 전에는 `ready`로 올리지 않습니다.
