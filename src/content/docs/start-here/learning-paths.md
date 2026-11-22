---
title: "학습 경로"
description: "시간과 목적에 따라 빠른 지도, Build Track, Deep Track을 선택합니다."
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
  - 세 학습 경로의 차이를 설명한다
  - 자신의 목표에 맞는 경로를 고른다
  - 순차 학습과 검색 기반 학습을 상황에 맞게 전환한다
sidebar:
  order: 3
---
이 핸드북은 처음부터 순서대로 따라가도 되고, 지금 막힌 문제에 필요한 내용부터 찾아봐도 됩니다. 두 방법은 우열이 있는 단계가 아니라 서로 다른 출발점이며, [이 가이드를 사용하는 법](../how-to-use-this-guide/)에서 각각의 학습 흐름을 안내합니다.

## 빠른 지도: 전체 지형부터

**적합한 사람:** AI 로그의 용어가 낯설고, 무엇을 모르는지부터 알고 싶은 분

권장 순서:

1. [소프트웨어는 시스템입니다](../../01-mental-models/software-is-a-system/)
2. [클라이언트·서버·풀스택](../../03-full-stack/client-server-full-stack/)
3. [PRD·두 종류의 SDD·TDD](../../06-requirements-design/prd-sdd-tdd/)
4. [테스트 전략](../../08-quality/testing-strategy/)
5. [Git과 GitHub는 다릅니다](../../09-git-github/git-and-github/)
6. [빌드·배포·도메인·DNS](../../10-deployment-operations/build-deploy-domain-dns/)
7. [AI 코딩 에이전트와 일하는 법](../../11-ai-native/working-with-coding-agents/)
8. [에이전트 출력 용어집](../../reference/agent-output-glossary/)

목표는 각 개념을 깊이 구현하는 것이 아니라, 서로의 관계를 한 장의 지도처럼 설명하는 것입니다.

## 검색 기반 경로: 지금 막힌 문제부터

**적합한 사람:** 프로젝트를 진행하다 낯선 용어·오류·검토 질문을 만난 분

사이트 검색에서 한국어 용어나 영문·약어를 찾아보세요. 문제 문장으로 검색해도 관련 장이 나오지 않거나 사용법의 예시만 나올 수 있습니다. 그때는 핵심어로 줄이거나 [사용법의 검색 안내](../how-to-use-this-guide/#필요한-내용만-찾기)를 따르고, 다음 질문에 맞는 부의 인덱스로 이동하세요.

- “이 기능은 시스템 어디에 있나요?” → [개발자 사고와 소프트웨어](../../01-mental-models/)와 [풀스택 구조](../../03-full-stack/)
- “서버·데이터·권한 중 어디서 실패했나요?” → [백엔드와 데이터](../../04-backend-data/)
- “응답은 왔는데 화면이 왜 다르나요?” → [프런트엔드](../../05-frontend/)
- “요구와 설계, 작업과 검증을 어떻게 나누나요?” → [요구사항과 설계](../../06-requirements-design/)와 [개발 절차와 협업](../../07-workflow-methods/)
- “테스트는 통과했는데 무엇이 아직 불확실한가요?” → [품질과 안전](../../08-quality/)
- “변경·되돌리기·배포·운영 상태를 어떻게 구분하나요?” → [Git과 GitHub](../../09-git-github/)와 [배포와 운영](../../10-deployment-operations/)
- “에이전트의 권한과 완료 보고를 어떻게 검토하나요?” → [AI 네이티브 개발](../../11-ai-native/)

용어 뜻만 빨리 찾고 싶다면 [참고편](../../reference/)을 먼저 사용해도 됩니다. 다만 검색 결과나 체크리스트만으로 완료를 판정하지 말고, 연결된 핵심 장에서 정의·시스템 위치·판단 규칙·실패 조건·직접 증거를 확인하세요. 자세한 검색 순서는 [이 가이드를 사용하는 법](../how-to-use-this-guide/#필요한-내용만-찾기)에 있습니다.

## Build Track: 작은 서비스를 끝까지

**적합한 사람:** 직접 프로젝트를 만들면서 배우고 싶은 분

이 경로의 일반 개발 반복 사례는 모임 일정·참가 신청 웹앱입니다. 사용자 조회와 참가 신청, 인증·인가, 정원과 동시 요청, 배포와 운영처럼 상태를 안전하게 바꾸는 책임을 따라갑니다. 데이터 분석 비교 사례는 교육용 주가 데이터 대시보드입니다. 실제 시장 원천을 채택하지 않은 fixture로 데이터 계약·결측·신선도·재현성·시각화 책임을 살피며, 시장 판단이나 거래 기능을 다루지 않습니다. 두 사례는 같은 개념을 반복하기 위한 것이 아니라 상태 변경 시스템과 읽기·분석 시스템에서 책임·위험·증거가 어떻게 달라지는지 비교하기 위한 것입니다.

`문제 정의 → 사용자 흐름 → 데이터 계약 → 화면 → API → 저장 → 테스트 → Git → 배포 → 운영 확인`

각 단계마다 구현보다 먼저 산출물과 검증 증거를 정합니다. Phase 1에서 완성할 공식 Build Track은 기존 핵심 개념 장 11개와 두 캡스톤을 합친 다음 13개 장입니다.

1. [소프트웨어는 시스템입니다](../../01-mental-models/software-is-a-system/) — 화면이 아니라 구성요소·경계·흐름으로 문제를 봅니다.
2. [클라이언트·서버·풀스택](../../03-full-stack/client-server-full-stack/) — 사용자 행동이 여러 구성요소를 통과하는 지도를 만듭니다.
3. [HTTP 요청과 응답](../../03-full-stack/http-request-response/) — 브라우저와 서버가 의도·데이터·결과를 주고받는 규칙을 익힙니다.
4. [API·데이터베이스·인증](../../04-backend-data/api-database-auth/) — 요청 처리, 데이터 보존, 신원·권한 확인의 책임을 구분합니다.
5. [브라우저·DOM·렌더링](../../05-frontend/browser-dom-rendering/) — 서버의 결과가 사용자 화면으로 바뀌는 과정을 이해합니다.
6. [PRD·두 종류의 SDD·TDD](../../06-requirements-design/prd-sdd-tdd/) — 문제, 설계, 작업 방식과 테스트 규율을 혼동하지 않습니다.
7. [테스트 전략](../../08-quality/testing-strategy/) — 요구사항별로 어떤 증거가 필요한지 정합니다.
8. [Git과 GitHub는 다릅니다](../../09-git-github/git-and-github/) — 변경 이력과 협업 공간을 구분하고 되돌릴 지점을 만듭니다.
9. [빌드·배포·도메인·DNS](../../10-deployment-operations/build-deploy-domain-dns/) — 로컬 결과가 공개 서비스가 되는 단계를 연결합니다.
10. [로그·모니터링·백업](../../10-deployment-operations/logs-monitoring-backup/) — 배포 후 이상을 발견하고 복구할 최소 책임을 익힙니다.
11. [AI 코딩 에이전트와 일하는 법](../../11-ai-native/working-with-coding-agents/) — 범위·권한·수용 기준·검증 명령을 갖춘 작업 루프를 만듭니다.
12. [첫 풀스택 프로젝트: 모임 참가 웹앱](../../12-case-studies/first-full-stack-project/) — 일반 개발의 상태 변경 책임을 요구사항부터 복구까지 연결합니다.
13. [데이터 분석가의 주가 대시보드 사례](../../12-case-studies/analytics-dashboard-case-study/) — 데이터 분석의 계약·품질·재현성 책임을 요구사항부터 운영 확인까지 연결합니다.

이 목록이 Build Track 범위와 순서의 단일 진실 공급원입니다. 홈, 로드맵, 콘텐츠 지도와 작업 계획은 목록을 다시 정의하지 않고 이 경로를 참조합니다.

[현재 도구 매핑](../../reference/current-tool-mapping/)은 페이지에 표시된 확인일과 공식 근거 범위 안에서만 읽는 교체 가능한 참고편입니다. 날짜 있는 제품 예시는 영속적인 책임을 특정 시점의 기능과 비교할 때만 사용하며, Build Track의 핵심 정의나 13장 목록에 포함하지 않습니다.

## Deep Track: 트레이드오프를 설명하기

**적합한 사람:** AI에게 더 좋은 설계 판단을 맡기고 그 결과를 검토하고 싶은 분

먼저 [아키텍처와 프레임워크](../../06-requirements-design/architecture-and-frameworks/)에서 사용자 문제·책임·품질 속성·구조 결정·기술 선택·검증 증거의 순서를 익힙니다. 이어서 [데이터 모델·스키마·마이그레이션](../../04-backend-data/data-model-schema-migration/), [상태·캐시·큐](../../04-backend-data/state-cache-queue/), [접근성과 반응형 설계](../../05-frontend/accessibility-responsive-design/), [ADR과 트레이드오프 기록](../../06-requirements-design/adr-and-tradeoffs/), [디버깅과 관측 가능성](../../08-quality/debugging-observability/), [성능과 보안](../../08-quality/performance-security/), [컨텍스트·스펙·하네스·루프](../../11-ai-native/context-spec-harness-loop/)처럼 Build Track의 판단을 더 깊게 만드는 장을 선택해 읽습니다. 정답 목록보다 다음 질문에 집중합니다.

- 어떤 품질 속성을 우선했나요?
- 대안은 무엇이었고 왜 제외했나요?
- 규모와 위험이 달라지면 결정도 달라지나요?
- 이 선택을 나중에 바꾸는 비용은 얼마인가요?

## 권장 학습 리듬

한 장을 읽은 뒤 자신의 프로젝트에 다음 세 줄을 적어보세요.

1. 이 개념이 내 프로젝트에서 어디에 나타나는가
2. 지금 가장 위험한 가정은 무엇인가
3. 다음 작업에서 어떤 증거를 확인할 것인가

이 기록이 쌓이면 수동적인 독서가 실제 개발 판단으로 바뀝니다.
