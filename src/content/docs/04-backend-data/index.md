---
title: "4. 백엔드와 데이터"
description: "API, 데이터베이스, 인증, 스키마, 마이그레이션, 상태와 비동기 처리를 이해합니다."
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
  - 백엔드와 데이터 계층의 주요 책임을 설명한다
  - 계약·영속 구조·임시 사본과 비동기 전달을 구분한다
sidebar:
  order: 1
---
백엔드는 단순히 데이터를 전달하는 중간층이 아닙니다. 요청 계약을 해석하고 신원과 권한을 확인하며 업무 규칙과 데이터 일관성을 집행합니다. 데이터 계층에서는 무엇을 영속적인 원본으로 둘지, 구조를 어떻게 바꿀지, 사본과 비동기 작업을 어떻게 다룰지도 결정해야 합니다.

## 이 부가 답하는 질문

- API 계약, 인증·인가, 업무 규칙, 트랜잭션은 한 요청에서 어떻게 이어지나요?
- 업무 개념을 어떤 데이터 모델과 스키마로 표현하고 기존 데이터를 보존하며 바꾸나요?
- 권위 있는 상태, 빠른 사본인 캐시, 나중에 처리할 큐를 어떻게 구분하나요?

## 권장 순서

1. [API·데이터베이스·인증](api-database-auth/) — 모임 참가 요청을 따라 계약·신원·권한·업무 규칙·영속 변경의 책임과 증거를 구분합니다.
2. [데이터 모델·스키마·마이그레이션](data-model-schema-migration/) — 저장할 개념과 제약을 구조로 표현하고 기존 데이터를 보존하며 변경하는 위험을 봅니다.
3. [상태·캐시·큐](state-cache-queue/) — 영속 원본, 임시 사본, 비동기 전달의 중복·지연·실패를 구분합니다.

API는 **구성요소 사이의 계약**, 데이터 모델과 스키마는 **저장 구조와 제약**, 캐시와 큐는 **사본과 전달 시점**의 문제입니다. 제품 하나가 이 책임을 함께 제공해도 개념을 같은 것으로 보지 마세요.

## 다음 이동

서버의 결과가 브라우저 구조·UI 상태·접근 가능한 화면으로 바뀌는 과정을 보려면 [5. 프런트엔드](../05-frontend/)로 이동하세요. 요구와 데이터 구조를 먼저 설계하고 싶다면 [6. 요구사항과 설계](../06-requirements-design/)로 이어가세요.
