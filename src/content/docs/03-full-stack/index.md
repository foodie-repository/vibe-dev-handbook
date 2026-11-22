---
title: "3. 풀스택 구조"
description: "사용자 화면에서 서버와 데이터 저장소까지 한 요청의 전체 경로를 이해합니다."
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
  - 풀스택 이해의 범위를 설명한다
  - 역할 지도·HTTP 계약·신뢰 경계의 차이를 구분한다
sidebar:
  order: 1
---
이 부에서는 사용자 행동이 화면에서 시작해 네트워크·서버·데이터로 이동하고 다시 사용자 결과로 돌아오는 경로를 봅니다. 모든 계층을 직접 구현하는 법보다, 각 계층이 맡은 책임과 실패 증거를 연결하는 것이 목표입니다.

## 이 부가 답하는 질문

- 클라이언트·서버와 프런트엔드·백엔드는 어떤 서로 다른 분류인가요?
- 한 요청의 메서드·경로·헤더·본문·응답 상태는 어떤 약속을 이루나요?
- 화면의 검증과 서버의 집행은 신뢰 경계에서 어떻게 나뉘나요?

## 권장 순서

1. [클라이언트·서버·풀스택](client-server-full-stack/) — 사용자 행동이 여러 구성요소를 지나는 전체 역할 지도를 만듭니다.
2. [HTTP 요청과 응답](http-request-response/) — 지도 위에서 오가는 한 번의 메시지 계약과 네트워크·브라우저·업무 실패를 읽습니다.
3. [프런트엔드와 백엔드의 경계](frontend-backend-boundary/) — 사용자 편의용 화면 검사와 서버가 반드시 집행할 권한·업무 규칙을 구분합니다.

첫 장은 **전체 관계**, 둘째 장은 **메시지 계약**, 셋째 장은 **책임과 신뢰 경계**에 답합니다. HTTP 성공만으로 화면·업무·데이터 성공을 한꺼번에 주장하지 마세요.

## 다음 이동

서버 안에서 API·데이터베이스·인증과 데이터 상태가 어떤 책임을 맡는지 보려면 [4. 백엔드와 데이터](../04-backend-data/)로 이동하세요. 화면 쪽 상태가 궁금하다면 [5. 프런트엔드](../05-frontend/)를 먼저 읽어도 됩니다.
