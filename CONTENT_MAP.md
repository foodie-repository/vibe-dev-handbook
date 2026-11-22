# 콘텐츠 지도

이 파일은 공개 콘텐츠의 폴더 구조, 문서 상태, 공개 경로를 한눈에 보여줍니다. 사이트 내비게이션은 `astro.config.mjs`의 자동 생성 사이드바와 각 문서의 `sidebar.order`를 사용합니다.

- 총 문서: **59개**
- 상태: `draft` 0개, `seed` 0개, `review` 0개, `ready` 59개
- 시각 자료: `src/assets/diagrams/`의 게시용 SVG와 `source/`의 Mermaid 원본

## 상태 의미

- `seed`: 범위와 핵심 질문을 고정한 집필 시드
- `draft`: 처음부터 끝까지 읽을 수 있지만 독립 검토 전인 초안
- `review`: 자체 점검 뒤 독립 검토와 재판정에 필요한 원고·입력·검토 요청을 고정한 상태
- `ready`: 독립 검토·재판정·적합성·출처·자동·브라우저 증거와 소유자 묶음 승인을 확인한 출판 준비 상태이며, 로컬 학습 다이어그램을 참조하면 시각 자료 증거도 필요함

상세한 승격 조건과 `reviewEvidence` 형식은 [`docs/project/content-lifecycle.md`](docs/project/content-lifecycle.md)를 단일 진실 공급원으로 사용합니다.

## 폴더 구조

```text
src/content/docs/
├── index.md
├── start-here/
├── 01-mental-models/
├── 02-work-environment/
├── 03-full-stack/
├── 04-backend-data/
├── 05-frontend/
├── 06-requirements-design/
├── 07-workflow-methods/
├── 08-quality/
├── 09-git-github/
├── 10-deployment-operations/
├── 11-ai-native/
├── 12-case-studies/
└── reference/
```

## 문서 목록

### 1. 개발자 사고와 소프트웨어

| 문서 | 상태 | 본문 문자 수 | 공개 경로 |
|---|---:|---:|---|
| [추상화와 트레이드오프](src/content/docs/01-mental-models/abstraction-and-tradeoffs.md) | `ready` | 8,135 | `/01-mental-models/abstraction-and-tradeoffs/` |
| [개발자처럼 문제를 나누는 법](src/content/docs/01-mental-models/developer-thinking.md) | `ready` | 13,199 | `/01-mental-models/developer-thinking/` |
| [1. 개발자 사고와 소프트웨어](src/content/docs/01-mental-models/index.md) | `ready` | 814 | `/01-mental-models/` |
| [소프트웨어는 시스템입니다](src/content/docs/01-mental-models/software-is-a-system.md) | `ready` | 15,550 | `/01-mental-models/software-is-a-system/` |

### 2. 작업 환경

| 문서 | 상태 | 본문 문자 수 | 공개 경로 |
|---|---:|---:|---|
| [의존성·패키지 관리자·환경](src/content/docs/02-work-environment/dependencies-package-managers-environments.md) | `ready` | 9,538 | `/02-work-environment/dependencies-package-managers-environments/` |
| [파일·폴더·경로](src/content/docs/02-work-environment/files-folders-paths.md) | `ready` | 20,820 | `/02-work-environment/files-folders-paths/` |
| [2. 작업 환경](src/content/docs/02-work-environment/index.md) | `ready` | 773 | `/02-work-environment/` |
| [터미널·프로세스·포트](src/content/docs/02-work-environment/terminal-processes-ports.md) | `ready` | 13,409 | `/02-work-environment/terminal-processes-ports/` |

### 3. 풀스택 구조

| 문서 | 상태 | 본문 문자 수 | 공개 경로 |
|---|---:|---:|---|
| [클라이언트·서버·풀스택](src/content/docs/03-full-stack/client-server-full-stack.md) | `ready` | 16,184 | `/03-full-stack/client-server-full-stack/` |
| [프런트엔드와 백엔드의 경계](src/content/docs/03-full-stack/frontend-backend-boundary.md) | `ready` | 9,999 | `/03-full-stack/frontend-backend-boundary/` |
| [HTTP 요청과 응답](src/content/docs/03-full-stack/http-request-response.md) | `ready` | 15,556 | `/03-full-stack/http-request-response/` |
| [3. 풀스택 구조](src/content/docs/03-full-stack/index.md) | `ready` | 791 | `/03-full-stack/` |

### 4. 백엔드와 데이터

| 문서 | 상태 | 본문 문자 수 | 공개 경로 |
|---|---:|---:|---|
| [API·데이터베이스·인증](src/content/docs/04-backend-data/api-database-auth.md) | `ready` | 23,498 | `/04-backend-data/api-database-auth/` |
| [데이터 모델·스키마·마이그레이션](src/content/docs/04-backend-data/data-model-schema-migration.md) | `ready` | 13,691 | `/04-backend-data/data-model-schema-migration/` |
| [4. 백엔드와 데이터](src/content/docs/04-backend-data/index.md) | `ready` | 875 | `/04-backend-data/` |
| [상태·캐시·큐](src/content/docs/04-backend-data/state-cache-queue.md) | `ready` | 14,503 | `/04-backend-data/state-cache-queue/` |

### 5. 프런트엔드

| 문서 | 상태 | 본문 문자 수 | 공개 경로 |
|---|---:|---:|---|
| [접근성과 반응형 설계](src/content/docs/05-frontend/accessibility-responsive-design.md) | `ready` | 12,431 | `/05-frontend/accessibility-responsive-design/` |
| [브라우저·DOM·렌더링](src/content/docs/05-frontend/browser-dom-rendering.md) | `ready` | 15,578 | `/05-frontend/browser-dom-rendering/` |
| [5. 프런트엔드](src/content/docs/05-frontend/index.md) | `ready` | 883 | `/05-frontend/` |
| [UI 상태와 사용자 경험](src/content/docs/05-frontend/ui-state-and-ux.md) | `ready` | 14,362 | `/05-frontend/ui-state-and-ux/` |

### 6. 요구사항과 설계

| 문서 | 상태 | 본문 문자 수 | 공개 경로 |
|---|---:|---:|---|
| [ADR과 트레이드오프 기록](src/content/docs/06-requirements-design/adr-and-tradeoffs.md) | `ready` | 12,603 | `/06-requirements-design/adr-and-tradeoffs/` |
| [아키텍처와 프레임워크](src/content/docs/06-requirements-design/architecture-and-frameworks.md) | `ready` | 12,293 | `/06-requirements-design/architecture-and-frameworks/` |
| [6. 요구사항과 설계](src/content/docs/06-requirements-design/index.md) | `ready` | 905 | `/06-requirements-design/` |
| [PRD·두 종류의 SDD·TDD](src/content/docs/06-requirements-design/prd-sdd-tdd.md) | `ready` | 19,154 | `/06-requirements-design/prd-sdd-tdd/` |

### 7. 개발 절차와 협업

| 문서 | 상태 | 본문 문자 수 | 공개 경로 |
|---|---:|---:|---|
| [코드 리뷰와 CI/CD](src/content/docs/07-workflow-methods/code-review-ci-cd.md) | `ready` | 9,079 | `/07-workflow-methods/code-review-ci-cd/` |
| [점진적 전달과 작업 분해](src/content/docs/07-workflow-methods/incremental-delivery.md) | `ready` | 9,547 | `/07-workflow-methods/incremental-delivery/` |
| [7. 개발 절차와 협업](src/content/docs/07-workflow-methods/index.md) | `ready` | 843 | `/07-workflow-methods/` |
| [소프트웨어 개발 생명주기](src/content/docs/07-workflow-methods/software-development-lifecycle.md) | `ready` | 10,168 | `/07-workflow-methods/software-development-lifecycle/` |

### 8. 품질과 안전

| 문서 | 상태 | 본문 문자 수 | 공개 경로 |
|---|---:|---:|---|
| [디버깅과 관측 가능성](src/content/docs/08-quality/debugging-observability.md) | `ready` | 11,710 | `/08-quality/debugging-observability/` |
| [8. 품질과 안전](src/content/docs/08-quality/index.md) | `ready` | 827 | `/08-quality/` |
| [성능과 보안](src/content/docs/08-quality/performance-security.md) | `ready` | 13,198 | `/08-quality/performance-security/` |
| [테스트 전략](src/content/docs/08-quality/testing-strategy.md) | `ready` | 18,834 | `/08-quality/testing-strategy/` |

### 9. Git과 GitHub

| 문서 | 상태 | 본문 문자 수 | 공개 경로 |
|---|---:|---:|---|
| [브랜치·커밋·Pull Request](src/content/docs/09-git-github/branch-commit-pull-request.md) | `ready` | 9,556 | `/09-git-github/branch-commit-pull-request/` |
| [Git과 GitHub는 다릅니다](src/content/docs/09-git-github/git-and-github.md) | `ready` | 16,550 | `/09-git-github/git-and-github/` |
| [9. Git과 GitHub](src/content/docs/09-git-github/index.md) | `ready` | 879 | `/09-git-github/` |
| [되돌리기·충돌·릴리스](src/content/docs/09-git-github/undo-merge-conflict-release.md) | `ready` | 10,288 | `/09-git-github/undo-merge-conflict-release/` |

### 10. 배포와 운영

| 문서 | 상태 | 본문 문자 수 | 공개 경로 |
|---|---:|---:|---|
| [빌드·배포·도메인·DNS](src/content/docs/10-deployment-operations/build-deploy-domain-dns.md) | `ready` | 18,070 | `/10-deployment-operations/build-deploy-domain-dns/` |
| [환경 변수와 설정](src/content/docs/10-deployment-operations/environment-variables-config.md) | `ready` | 12,139 | `/10-deployment-operations/environment-variables-config/` |
| [10. 배포와 운영](src/content/docs/10-deployment-operations/index.md) | `ready` | 897 | `/10-deployment-operations/` |
| [로그·모니터링·백업](src/content/docs/10-deployment-operations/logs-monitoring-backup.md) | `ready` | 21,027 | `/10-deployment-operations/logs-monitoring-backup/` |

### 11. AI 네이티브 개발

| 문서 | 상태 | 본문 문자 수 | 공개 경로 |
|---|---:|---:|---|
| [에이전트 결과 리뷰와 검증](src/content/docs/11-ai-native/agent-review-and-verification.md) | `ready` | 8,285 | `/11-ai-native/agent-review-and-verification/` |
| [컨텍스트·스펙·하네스·루프](src/content/docs/11-ai-native/context-spec-harness-loop.md) | `ready` | 9,062 | `/11-ai-native/context-spec-harness-loop/` |
| [11. AI 네이티브 개발](src/content/docs/11-ai-native/index.md) | `ready` | 1,042 | `/11-ai-native/` |
| [권한·샌드박스·worktree](src/content/docs/11-ai-native/permissions-sandbox-worktrees.md) | `ready` | 13,162 | `/11-ai-native/permissions-sandbox-worktrees/` |
| [AI 코딩 에이전트와 일하는 법](src/content/docs/11-ai-native/working-with-coding-agents.md) | `ready` | 20,352 | `/11-ai-native/working-with-coding-agents/` |

### 12. 사례와 캡스톤

| 문서 | 상태 | 본문 문자 수 | 공개 경로 |
|---|---:|---:|---|
| [데이터 분석가의 대시보드 사례](src/content/docs/12-case-studies/analytics-dashboard-case-study.md) | `ready` | 34,579 | `/12-case-studies/analytics-dashboard-case-study/` |
| [첫 풀스택 프로젝트](src/content/docs/12-case-studies/first-full-stack-project.md) | `ready` | 22,404 | `/12-case-studies/first-full-stack-project/` |
| [12. 사례와 캡스톤](src/content/docs/12-case-studies/index.md) | `ready` | 955 | `/12-case-studies/` |

### 홈

| 문서 | 상태 | 본문 문자 수 | 공개 경로 |
|---|---:|---:|---|
| [바이브 개발 핸드북](src/content/docs/index.md) | `ready` | 2,398 | `/` |

### 참고편

| 문서 | 상태 | 본문 문자 수 | 공개 경로 |
|---|---:|---:|---|
| [에이전트 출력 용어집](src/content/docs/reference/agent-output-glossary.md) | `ready` | 11,041 | `/reference/agent-output-glossary/` |
| [실전 체크리스트](src/content/docs/reference/checklists.md) | `ready` | 10,426 | `/reference/checklists/` |
| [현재 도구 매핑](src/content/docs/reference/current-tool-mapping.md) | `ready` | 16,515 | `/reference/current-tool-mapping/` |
| [개발 용어집](src/content/docs/reference/development-glossary.md) | `ready` | 27,913 | `/reference/development-glossary/` |
| [용어·방법론·체크리스트](src/content/docs/reference/index.md) | `ready` | 1,067 | `/reference/` |
| [방법론 관계 지도](src/content/docs/reference/methodology-map.md) | `ready` | 17,972 | `/reference/methodology-map/` |

### 시작하기

| 문서 | 상태 | 본문 문자 수 | 공개 경로 |
|---|---:|---:|---|
| [이 가이드를 사용하는 법](src/content/docs/start-here/how-to-use-this-guide.md) | `ready` | 3,023 | `/start-here/how-to-use-this-guide/` |
| [시작하기](src/content/docs/start-here/index.md) | `ready` | 960 | `/start-here/` |
| [학습 경로](src/content/docs/start-here/learning-paths.md) | `ready` | 4,918 | `/start-here/learning-paths/` |
| [왜 이 가이드가 필요한가](src/content/docs/start-here/why-this-guide.md) | `ready` | 1,879 | `/start-here/why-this-guide/` |

## Phase 1 우선 검토 경로

구체적인 문서 범위와 읽는 순서는 공개 문서인 [`src/content/docs/start-here/learning-paths.md`](src/content/docs/start-here/learning-paths.md)의 Build Track을 단일 진실 공급원으로 사용합니다. 이 콘텐츠 지도는 전체 문서 인벤토리와 현재 상태를 보여주는 역할만 맡으며 별도의 우선순위 목록을 중복 관리하지 않습니다.

공식 Build Track을 먼저 `review`로 올린 뒤 나머지 `seed`를 확장하는 것이 범위 확산을 줄입니다.
