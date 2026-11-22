---
title: "12. 사례와 캡스톤"
description: "요구사항부터 운영까지 앞의 개념을 하나의 실제 프로젝트 흐름으로 연결합니다."
contentStatus: ready
reviewEvidence:
  - "conformance: docs/project/public-beta-content-audit.md"
  - "sources: research/source-map.md"
  - "automated: docs/project/reviews/public-beta-1/ready-promotion-qa.md#자동-검사"
  - "browser: docs/project/reviews/public-beta-1/ready-promotion-qa.md#브라우저-검사"
  - "owner: docs/project/reviews/public-beta-1/owner-approval.md"
  - "request: docs/project/reviews/public-beta-1/r24-navigation-request.md"
  - "independent: docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r24-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 개별 개발 개념을 프로젝트 생명주기로 연결한다
  - 일반 개발과 데이터 분석 사례의 계약·증거 책임을 비교한다
sidebar:
  order: 1
---
개별 용어를 이해해도 프로젝트에서는 동시에 여러 결정을 내려야 합니다. 이 부는 일반 개발과 데이터 분석의 서로 다른 책임을 두 캡스톤으로 연결합니다. 두 사례 모두 요구·설계·구현·검증·운영을 다루지만, 무엇을 바꾸고 어떤 증거로 성공을 판단하는지가 다릅니다.

## 이 부가 답하는 질문

- 사용자의 요청으로 상태를 바꾸는 웹앱은 어떤 계약·권한·동시성·운영 증거가 필요한가요?
- 원천 데이터를 해석 가능한 결과로 바꾸는 분석은 어떤 데이터 계약·품질·재현성·시각화 증거가 필요한가요?
- 자동 검사, 사람 승인, 외부 실행, 배포와 공개 확인을 프로젝트 흐름에서 어떻게 구분하나요?

## 권장 순서

1. [첫 풀스택 프로젝트: 모임 참가 웹앱](first-full-stack-project/) — 일정 조회·참가 신청·인증과 인가·정원 동시성·배포·운영·복구를 따라가며 일반 개발의 전체 흐름을 연결합니다.
2. [데이터 분석가의 주가 대시보드 사례](analytics-dashboard-case-study/) — 교육용 fixture의 데이터 계약·결측·신선도·lineage·재현성·시각화와 운영 증거를 따라가며 분석 책임을 비교합니다.

처음 전체 생명주기를 따라간다면 모임 참가 웹앱부터 읽고 분석 사례로 차이를 비교하세요. 관심 업무가 분석이라면 두 번째 사례부터 시작해도 되지만, **웹앱은 상태 변경과 권한**, **분석은 데이터 의미와 재현성**에 더 무게를 둔다는 차이를 유지해야 합니다. 분석 사례는 실제 시장 원천을 채택하지 않으며 시장 판단이나 거래 기능을 제공하지 않습니다.

## 다음 이동

낯선 용어와 단계별 점검 기준은 [용어·방법론·체크리스트](../reference/)에서 찾으세요. 앞의 개념을 순서대로 다시 연결하려면 [공식 학습 경로](../start-here/learning-paths/)의 Build Track 또는 Deep Track으로 돌아가세요.
