---
title: "8. 품질과 안전"
description: "테스트, 디버깅, 관측 가능성, 성능, 보안의 기본 판단을 익힙니다."
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
  - 품질을 여러 증거와 설계 속성의 조합으로 설명한다
  - 테스트·진단·성능과 보안의 서로 다른 질문을 구분한다
sidebar:
  order: 1
---
품질은 “테스트가 통과했다”는 한 문장으로 끝나지 않습니다. 요구한 기능이 맞는지, 실패 원인을 좁힐 신호가 있는지, 필요한 속도로 동작하는지, 사용자와 데이터를 보호하는지를 서로 다른 위험과 증거로 다뤄야 합니다.

## 이 부가 답하는 질문

- 중요한 실패 위험을 어떤 크기의 테스트와 보완 증거에 연결하나요?
- 이미 나타난 증상에서 원인을 어떻게 좁히고 어떤 신호를 남기나요?
- 성능 병목과 보안 위협을 어떤 측정·자산·권한·통제로 판단하나요?

## 권장 순서

1. [테스트 전략](testing-strategy/) — 요구와 위험을 단위·통합·계약·종단 간·smoke test와 브라우저·운영 증거로 배치합니다.
2. [디버깅과 관측 가능성](debugging-observability/) — 실패가 나타났을 때 재현·가설·구분 실험과 로그·지표·트레이스로 원인을 좁힙니다.
3. [성능과 보안](performance-security/) — 측정 없는 최적화와 위협·권한·비밀을 놓친 설계를 피합니다.

테스트 전략은 **예상한 위험을 미리 확인하는 배치**, 디버깅과 관측은 **실제 증상을 설명할 증거**, 성능과 보안은 **품질 속성과 피해 위험**의 문제입니다. 테스트 하나가 사용자 성공·데이터 의미·보안·운영 복구를 모두 증명한다고 가정하지 마세요.

## 다음 이동

검증된 변경을 이력과 검토 단위로 보존하려면 [9. Git과 GitHub](../09-git-github/)로 이동하세요. 이미 공개 환경의 문제를 다루고 있다면 [10. 배포와 운영](../10-deployment-operations/)에서 배포·관측·복구 증거를 함께 보세요.
