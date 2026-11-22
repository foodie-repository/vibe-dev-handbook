# R14 문제 분해·추상화 직접 근거 — 2026-11-15

R14 두 원고의 지정 개념을 판단하기 위해 공식·1차 URL5개를 읽기 전용으로 추출했습니다. 모두 본문 반환 성공이며 실패0입니다. 아래 짧은 직접 발췌와 절 위치·적용/누락 범위를 고정합니다. 전체 글이나 책 전체를 읽었다고 주장하지 않습니다. 페이지 안의 자동 인용 Accessed/ Retrieved 날짜(9월·10월)는 사이트가 제공한 문구이며 이번 확인일과 혼합하지 않습니다. 제품·가격·릴리스의 현재 상태를 주장하는 조사도 아닙니다.

## R14-S1 Building Quality Software: 4 Engineering-Centric Techniques | CMU Software Engineering Institute

- URL: https://www.sei.cmu.edu/blog/building-quality-software-4-engineering-centric-techniques
- 확인일: 2026-11-15, 공식 본문 추출 성공
- 위치: An Engineering-Centric Approach: Four Techniques / first technique
- 직접 발췌: “A model is a simplified view of the real system that eliminates details not relevant to the problem.”

현재 문제에 필요한 속성만 남기는 모델과 정보 은닉·응집·관심사 분리를 복잡성 관리의 도구로 설명합니다. 미래 요구를 모두 미리 구현하는 방식의 비용을 논의합니다. 네 기법은 저자의 실용 제안이지 산업 전체의 유일한 절차가 아닙니다. 급여 예시의 API 설계 처방이나 해당 글의 TDD/refactoring 설명 전체를 핸드북의 규칙으로 수입하지 않습니다. 발췌 밖 사례·방법 세부·관련 링크·그림은 판단 범위에 포함하지 않습니다.

## R14-S2 Managing Architectural Risk During Agile Development | CMU Software Engineering Institute

- URL: https://www.sei.cmu.edu/blog/managing-architectural-risk-during-agile-development
- 확인일: 2026-11-15, 공식 본문 추출 성공
- 위치: 결론의 Software Architecture in Practice 인용 직후 설명
- 직접 발췌: “it also removes some of the “conditions” that can contribute to architecture risk.”

추상화가 분석·의사결정에 필요한 위험 조건까지 제거할 수 있다는 한계를 적용합니다. Agile 위험 관리 절차와 특정 설계 선택을 보편 규칙으로 일반화하지 않습니다. 발췌는 저자 자신의 설명이며 직전 책 인용문 전체를 복제하지 않습니다. 발췌 밖 사례·방법 세부·관련 링크·그림은 판단 범위에 포함하지 않습니다.

## R14-S3 Abstractions | C4 model

- URL: https://c4model.com/abstractions
- 확인일: 2026-11-15, 공식 본문 추출 성공
- 위치: Abstractions 첫 문단
- 직접 발췌: “we first need a common set of abstractions”

C4는 system/container/component/code라는 정적 구조의 공통 추상화를 사용하는 특정 모델입니다. 핸드북의 사용자 흐름·업무 규칙·인터페이스·데이터 접근·런타임 분류가 C4의 정식 단계라는 뜻은 아닙니다. 발췌 밖 사례·방법 세부·관련 링크·그림은 판단 범위에 포함하지 않습니다.

## R14-S4 FAQ | C4 model

- URL: https://c4model.com/abstractions/faq
- 확인일: 2026-11-15, 공식 본문 추출 성공
- 위치: Can we change the terminology? 마지막 문장
- 직접 발췌: “Just make sure that everybody explicitly understands it.”

용어 변경은 가능하지만 팀이 뜻을 명시적으로 공유해야 합니다. Can we add more abstraction levels? 절은 진짜 필요가 있을 때 추가 수준을 정확히 정의할 수 있음을 허용하며, 불명확한 용어 때문에 수준을 늘리는 혼선을 경고합니다. 추가 수준의 절대 금지로 읽지 않습니다. 발췌 밖 사례·방법 세부·관련 링크·그림은 판단 범위에 포함하지 않습니다.

## R14-S5 Google SRE - Troubleshooting Methodology: A Learning Path

- URL: https://sre.google/sre-book/effective-troubleshooting/
- 확인일: 2026-11-15, 공식 본문 추출 성공
- 위치: Test and Treat 다섯째 고려 사항
- 직접 발췌: “Some tests may not be definitive, only suggestive.”

Theory의 관찰·가설·확인/반박, Problem Report의 기대/실제/재현 조건, Triage의 사용자 영향 완화와 안전한 증거 보존, Examine/Diagnose의 경계·로그·재현/범위 축소, Test and Treat의 판별력·위험·교란·부작용·제한적 증거·기록을 적용합니다. Cure는 복수 원인·상태 의존성과 운영 재현 위험을 인정합니다. 본문 도입은 다른 효과적인 접근도 허용합니다. 운영 시스템 변경 예시는 실행 승인이 아니며 실제 제품 기능이나 App Engine 사례의 현재성을 확인한 것으로 쓰지 않습니다. 발췌 밖 사례·방법 세부·관련 링크·그림은 판단 범위에 포함하지 않습니다.

## 같은 실행에서 확인한 근거 재사용

SWEBOK 공식 topics의 설계·추상화/캡슐화·모델링·경험적 방법은 `r06-prd-sdd-tdd-2026-11-15.md`의 관련 절을 재사용합니다. 확인일과 입력이 같은 실행에서 유효하고 이번 두 원고에 제품별 새 기능 주장이 없으므로 다시 요청하지 않았습니다. 운영 안정화 경계는 `r10-operations-2026-11-15.md`의 NIST/CISA 관련 근거와 함께 읽되 R14의 실용 루프를 표준 절차로 인증하지 않습니다. 과거 source-map 확인일·실패·gap은 그대로 남깁니다.
