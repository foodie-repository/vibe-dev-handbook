---
title: "10. 배포와 운영"
description: "환경 변수, 설정, 빌드, 배포, 도메인, DNS, 로그, 모니터링, 백업을 이해합니다."
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
  - 배포와 운영을 여러 책임의 연결로 설명한다
  - 설정·전달·공개·관측·복구 증거를 구분한다
sidebar:
  order: 1
---
로컬에서 동작한 프로그램을 사용자 환경에 안전하게 전달하려면 설정과 비밀정보, 빌드 산출물, 배포 대상, 도메인 연결, 운영 신호와 복구 가능성을 각각 확인해야 합니다. 이 부는 “내 컴퓨터에서 된다”와 “사용자가 안전하게 쓸 수 있다” 사이의 책임을 나눕니다.

## 이 부가 답하는 질문

- 환경마다 달라지는 설정과 공개하면 안 되는 비밀정보를 어떻게 분리하나요?
- 소스 코드가 빌드 산출물·배포 대상·도메인과 DNS를 거쳐 사용자에게 도달하는 과정은 무엇인가요?
- 배포 뒤 실패를 어떻게 발견하고, 데이터를 어떻게 복구할 수 있나요?

## 권장 순서

1. [환경 변수와 설정](environment-variables-config/) — 코드와 설정, 공개 가능한 값과 비밀정보의 경계를 먼저 세웁니다.
2. [빌드·배포·도메인·DNS](build-deploy-domain-dns/) — 재현 가능한 산출물을 대상 환경에 전달하고 공개 주소로 연결하는 각 상태를 구분합니다.
3. [로그·모니터링·백업](logs-monitoring-backup/) — 실제 동작을 관측하고 장애를 알리며 필요한 상태를 복원할 준비를 확인합니다.

설정은 **환경 차이를 주입하는 책임**, 빌드·배포·도메인은 **실행 가능한 결과를 전달하고 연결하는 책임**, 로그·모니터링·백업은 **운영 상태를 발견하고 복구하는 책임**입니다. 로컬 빌드나 미리보기 성공은 원격 배포·공개 URL·운영 정상의 증거가 아닙니다.

## 다음 이동

에이전트가 명령과 외부 작업을 수행할 때의 권한·검토 경계는 [11. AI 네이티브 개발](../11-ai-native/)에서 이어집니다. 요구부터 운영까지 전체 증거 흐름을 사례로 연결하려면 [12. 사례와 캡스톤](../12-case-studies/)으로 이동하세요.
