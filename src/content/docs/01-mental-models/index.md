---
title: "1. 개발자 사고와 소프트웨어"
description: "코드보다 먼저 시스템, 경계, 가정, 트레이드오프를 보는 사고법을 익힙니다."
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
  - 1부의 핵심 학습 질문을 설명한다
  - 세 장의 책임 차이와 권장 순서를 고른다
sidebar:
  order: 1
---
소프트웨어 개발을 시작할 때 “어떤 코드를 쓸까?”보다 먼저 물어야 할 질문은 “무엇이 연결되어 있고, 어디에 책임을 두며, 무엇으로 맞다고 판단할까?”입니다. 이 부는 화면을 시스템으로 보는 관점, 모호한 문제를 나누는 사고 과정, 복잡성을 다루는 선택 기준을 차례로 연결합니다.

## 이 부가 답하는 질문

- 화면 뒤에는 어떤 구성요소·책임·경계·상태·흐름이 있나요?
- 모호한 요청을 어떻게 관찰 가능한 질문과 작은 실험으로 바꾸나요?
- 무엇을 숨기고 무엇을 드러내며, 그 선택의 비용을 어떻게 비교하나요?

## 권장 순서

1. [소프트웨어는 시스템입니다](software-is-a-system/) — 만들려는 대상을 구성요소와 관계의 지도로 봅니다.
2. [개발자처럼 문제를 나누는 법](developer-thinking/) — 지도에서 불확실한 부분을 사실·가정·가설·작은 검증으로 나눕니다.
3. [추상화와 트레이드오프](abstraction-and-tradeoffs/) — 복잡성을 숨기는 경계가 어떤 편의와 비용을 만드는지 비교합니다.

첫 장은 **무엇을 볼지**, 둘째 장은 **어떻게 문제를 좁힐지**, 셋째 장은 **어떤 선택 비용을 비교할지**를 담당합니다. 세 장의 정의를 하나로 합치지 말고, 현재 작업에서 필요한 질문으로 돌아오세요.

## 다음 이동

시스템 지도를 실제 파일·명령·실행 환경과 연결하려면 [2. 작업 환경](../02-work-environment/)으로 이동하세요. 이미 클라이언트와 서버 사이의 흐름이 궁금하다면 [3. 풀스택 구조](../03-full-stack/)로 바로 이동해도 됩니다.
