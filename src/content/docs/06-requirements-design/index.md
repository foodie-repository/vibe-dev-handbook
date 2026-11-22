---
title: "6. 요구사항과 설계"
description: "아이디어를 요구사항, 설계 선택, 작업, 테스트 증거로 바꾸는 방법을 익힙니다."
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
  - 요구사항과 설계 문서의 역할을 구분한다
  - 요구·구조 선택·결정 기록의 순서와 책임을 설명한다
sidebar:
  order: 1
---
아이디어를 곧바로 코드로 옮기면 해결할 문제, 구조 선택, 구현 규율, 검증 기준이 한데 섞입니다. 이 부는 요구를 정의하는 산출물과 개발 접근, 구조와 기술 선택, 중요한 결정을 남기는 기록을 구분합니다.

## 이 부가 답하는 질문

- PRD, Software Design Description, Spec-Driven Development, TDD는 각각 어떤 범주인가요?
- 사용자 문제와 품질 조건을 구성요소·책임·경계·상태와 기술 선택으로 어떻게 내리나요?
- 중요한 선택의 맥락·대안·결과·검증·재검토 조건을 어디에 남기나요?

## 권장 순서

1. [PRD·두 종류의 SDD·TDD](prd-sdd-tdd/) — 제품 요구와 설계 설명이라는 산출물, 스펙 주도 개발이라는 접근, 테스트 주도 개발이라는 구현 규율을 구분합니다.
2. [아키텍처와 프레임워크](architecture-and-frameworks/) — 요구와 제약에서 책임·경계·상태·품질 속성을 거쳐 구조와 도구를 고르는 순서를 익힙니다.
3. [ADR과 트레이드오프 기록](adr-and-tradeoffs/) — 중요한 선택 하나의 맥락·대안·결정·결과·증거와 다시 볼 조건을 기록합니다.

첫 장은 **문제와 작업을 어떤 범주의 계약으로 만들지**, 둘째 장은 **어떤 구조와 도구로 실현할지**, 셋째 장은 **왜 그 선택을 했고 언제 바꿀지**에 답합니다. TDD를 문서 종류로 부르거나 프레임워크 이름을 아키텍처와 같은 뜻으로 사용하지 마세요.

## 다음 이동

정한 요구와 설계를 작고 검토 가능한 작업으로 전달하는 흐름은 [7. 개발 절차와 협업](../07-workflow-methods/)에서 이어집니다. 어떤 검증이 요구를 증명하는지 먼저 보고 싶다면 [8. 품질과 안전](../08-quality/)로 이동하세요.
