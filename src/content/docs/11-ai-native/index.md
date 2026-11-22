---
title: "11. AI 네이티브 개발"
description: "코딩 에이전트, 컨텍스트, 스펙, 하네스, 실행 루프, 권한과 검증을 기존 개발 원리 위에서 이해합니다."
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
  - AI 네이티브 개발을 기존 소프트웨어공학과 연결해 설명한다
  - 지시·환경·권한·검증의 책임과 승인 경계를 구분한다
sidebar:
  order: 1
---
에이전트가 여러 파일을 읽고 도구를 실행하면서 개발의 병목은 타이핑에서 **의도·환경·제약·피드백을 설계하는 일**로 이동합니다. 그렇다고 요구사항, 아키텍처, Git, 테스트, 운영이 사라지는 것은 아닙니다. 이 부는 일을 맡기는 계약, 에이전트가 읽고 실행하는 환경, 허용된 부작용, 결과를 믿을 근거를 차례로 연결합니다.

## 이 부가 답하는 질문

- 목표·범위·수용 기준·검증·보고 계약을 에이전트에게 어떻게 전달하나요?
- 컨텍스트·스펙·하네스·루프는 각각 지식, 계약, 실행 환경, 피드백 반복에서 어떤 역할을 하나요?
- 읽기·수정·커밋·push·배포 같은 권한을 어떻게 나누고 결과를 독립적으로 확인하나요?

## 권장 순서

1. [AI 코딩 에이전트와 일하는 법](working-with-coding-agents/) — 모호한 요청을 목표·비목표·수용 기준·검증·보고가 있는 작업 계약으로 바꿉니다.
2. [컨텍스트·스펙·하네스·루프](context-spec-harness-loop/) — 필요한 지식과 제약, 실행·관찰 장치, 피드백 반복을 구분합니다.
3. [권한·샌드박스·worktree](permissions-sandbox-worktrees/) — 허용할 부작용과 격리 범위, 승인해야 할 외부 상태 변경을 정합니다.
4. [에이전트 결과 리뷰와 검증](agent-review-and-verification/) — 말로 된 완료 보고를 diff·명령 결과·브라우저·운영 증거와 대조합니다.

첫 장은 **일의 계약**, 둘째 장은 **지식과 실행·피드백 환경**, 셋째 장은 **행동 권한**, 넷째 장은 **결과를 믿을 증거**를 다룹니다. 특정 에이전트 제품의 현재 기능을 영속 원리와 같은 뜻으로 사용하지 말고, 승인·실행·검증·배포를 각각 별도 상태로 확인하세요.

## 다음 이동

이 책임들을 하나의 프로젝트 생명주기에 적용하려면 [12. 사례와 캡스톤](../12-case-studies/)으로 이동하세요. 작업 중 용어나 점검 기준을 빠르게 찾으려면 [용어·방법론·체크리스트](../reference/)를 사용하세요.
