---
title: "5. 프런트엔드"
description: "브라우저 렌더링, UI 상태, 사용자 경험, 접근성, 반응형 설계를 이해합니다."
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
  - 프런트엔드를 상호작용과 상태 관리의 계층으로 설명한다
  - 렌더링·UI 상태·접근성과 반응형의 질문을 구분한다
sidebar:
  order: 1
---
프런트엔드는 서버 결과를 화면 구조와 상호작용으로 바꾸고, 로딩·빈 결과·오류·성공·권한 없음 같은 상태를 사용자에게 전달합니다. 이 부는 브라우저가 화면을 만드는 과정, 사용자가 경험하는 상태 전이, 다양한 능력과 화면에서 사용할 수 있는 조건을 서로 다른 질문으로 다룹니다.

## 이 부가 답하는 질문

- HTML·CSS·JavaScript와 DOM은 서버 결과를 어떻게 화면으로 바꾸나요?
- 로딩·빈 값·오류·성공과 사용자 행동 사이의 전이는 어떻게 설계하나요?
- 키보드·보조 기술·작은 화면에서도 의미와 조작을 어떻게 보존하나요?

## 권장 순서

1. [브라우저·DOM·렌더링](browser-dom-rendering/) — 응답·앱 상태·DOM·화면·사용자 성공의 서로 다른 증거를 봅니다.
2. [UI 상태와 사용자 경험](ui-state-and-ux/) — 정상 화면 하나가 아니라 상태와 전이, 오류 뒤 복구 행동을 설계합니다.
3. [접근성과 반응형 설계](accessibility-responsive-design/) — 같은 정보와 기능을 다양한 입력 방식·능력·화면 크기에서 사용할 수 있는지 확인합니다.

렌더링은 **브라우저가 화면을 만드는 과정**, UI 상태는 **사용자에게 보여 주는 현재 상황과 전이**, 접근성과 반응형은 **누가 어떤 환경에서 사용할 수 있는가**의 문제입니다. 같은 백엔드가 정상이어도 세 증거는 따로 확인해야 합니다.

## 다음 이동

어떤 화면을 만들지 결정하기 전에 요구·수용 기준·구조 결정을 정리하려면 [6. 요구사항과 설계](../06-requirements-design/)로 이동하세요. 구현된 화면의 실패 위험을 검증하려면 [8. 품질과 안전](../08-quality/)로 바로 이어가도 됩니다.
