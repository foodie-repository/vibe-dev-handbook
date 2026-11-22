---
title: "7. 개발 절차와 협업"
description: "소프트웨어 생명주기, 점진적 전달, 코드 리뷰와 CI/CD를 이해합니다."
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
  - 개발 절차를 피드백 시스템으로 설명한다
  - 생명주기·작업 분해·검토와 자동 게이트의 책임을 구분한다
sidebar:
  order: 1
---
좋은 개발 절차는 문서를 많이 만드는 관료제가 아니라, 잘못된 가정을 일찍 발견하고 변경을 작게 유지하며 다음 사람이 맥락을 이어받게 하는 피드백 시스템입니다. 이 부는 전체 생명주기, 한 번에 전달할 변경 단위, 사람과 자동화가 확인하는 게이트를 차례로 봅니다.

## 이 부가 답하는 질문

- 문제 이해부터 운영 학습까지 어떤 결정과 증거가 되돌아오나요?
- 큰 기능을 어떻게 독립 검토·검증·되돌리기 가능한 수직 조각으로 나누나요?
- 코드 리뷰, 지속적 통합(CI), 전달과 배포는 어떤 서로 다른 게이트인가요?

## 권장 순서

1. [소프트웨어 개발 생명주기](software-development-lifecycle/) — 문제·요구·설계·구현·검증·배포·운영 학습이 반복되는 전체 지도를 봅니다.
2. [점진적 전달과 작업 분해](incremental-delivery/) — 지도에서 한 번에 바꿀 범위를 사용자 가치와 검증 가능한 결과로 자릅니다.
3. [코드 리뷰와 CI/CD](code-review-ci-cd/) — 사람 검토·자동 통합·전달·배포의 승인과 실패 경계를 구분합니다.

생명주기는 **전체 피드백 흐름**, 점진적 전달은 **변경 단위**, 리뷰와 CI/CD는 **그 단위를 통과시키는 게이트**입니다. 자동 검사를 통과했다고 사람 검토·배포 승인·공개 확인까지 끝난 것은 아닙니다.

## 다음 이동

각 게이트에서 무엇을 테스트하고 어떤 위험을 별도 증거로 확인할지는 [8. 품질과 안전](../08-quality/)에서 이어집니다. 변경 단위를 실제 Git 이력과 검토 경계로 옮기려면 [9. Git과 GitHub](../09-git-github/)로 이동하세요.
