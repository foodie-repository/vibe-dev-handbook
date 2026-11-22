# 공개 베타 출처 공백 레지스터

2026-11-22 R25 후속 판정: 방법론 여섯 항목의 직접 근거와 제품별 확인 한계는 같은 저장 reviewer의 Fix2 PASS로 확정했습니다. 과거 미확인 기록은 당시 상태로 보존하며 제품 기능 전체나 실제 계정 검증으로 확대하지 않습니다. 상세 근거: r25-reference-adjudication.md 및 r25-fix-validation.md.

2026-11-22 R25: PBSG-014의 [여섯 묶음의 직접 근거](public-beta-review-source-excerpts/r25-reference-followup-2026-11-22.md)를 각 정의와 연결했습니다. 아래 8월의 not-confirmed는 당시 판정입니다. 후속 보충의 충분성은 R25-I01 동일 reviewer 재검토로 판정합니다.

2026-11-15 R07/PBSG-015 좁은 재판정: 아래 과거 confirmed 기록은 보존합니다. [현재 직접 근거](public-beta-review-source-excerpts/r07-testing-2026-11-15.md)에서 ISO 일반 개념·조직·관리·동적 테스트와 정적 리뷰 연결은 확인했지만 manual/automated·scripted/unscripted 열거의 공개 페이지 귀속은 not-confirmed입니다. 테스트 전략 본문·출처 절에서 그 귀속을 제거하고 교육적 수행 방식 구분은 유지했습니다. [R07-I01 재판정](../docs/project/reviews/public-beta-1/r07-testing-adjudication.md)에 연결하며 같은 저장 reviewer 후속 PASS C0/I0/M0에서 귀속 오류의 해소를 확인했습니다. 열거 자체의 not-confirmed는 유지하며 R07 controller closeout과 구분합니다. PBSG-016과 무관한 공백의 판정은 바꾸지 않습니다.

## 기록 계약

- 기준일: Task 5 공백 감사 2026-08-12, Task 8 게시 crosswalk 2026-08-13
- 기준 커밋: `2aa485e7c70ba1be33ec59776693064659177cbc`
- 범위: Task 5에서 감사한 공개 Markdown 58개와 Task 8 현재 도구 참고편 1개, 합계 59개, 게시 SVG 12개, 대응 Mermaid 원본 12개, `docs/project/public-beta-content-audit.md`의 SOURCE 관련 finding
- 상태 경계: Task 5에서는 네트워크 조사를 실행하지 않았습니다. 아래 행의 `not-confirmed`는 필요한 공식·1차 자료를 아직 직접 확인하지 않았다는 뜻이며, 비공식 블로그나 검색 요약으로 대체하지 않습니다.
- 정본 경계: 이미 확인한 출처와 적용 기록은 [`research/source-map.md`](source-map.md)가 정본이고, 아직 닫히지 않은 추적 가능한 주장 묶음은 이 레지스터가 정본입니다. 기존 확인 출처를 새 Gap ID로 복제하지 않고 필요한 추가 범위만 기록합니다.
- 위험 경계: 이 표의 위험은 미확인 주장을 공개 원고에 일반화했을 때의 위험입니다. 현재 원고가 이미 그 주장을 단정한다는 뜻이나 `public-beta-content-audit.md`의 finding severity 재분류가 아닙니다.

## 폐기 사례 의미 감사

직접 문자열 검색은 알려진 한 건을 유일 건수로 가정하지 않고 `반도체`, `semiconductor`, `wafer`, `fab`, `chip dashboard`, `공개 반도체 데이터`를 대소문자 구분 없이 공개 원고·SVG·Mermaid 원본 전체에 적용했습니다. 그 결과 현재 공개 범위에서는 `src/content/docs/start-here/learning-paths.md:36`의 `공개 반도체 데이터` 한 건만 검출됐고 SVG와 Mermaid 원본에서는 0건이었습니다.

의미 감사에서는 과거 사례의 단어뿐 아니라 사용자·역할, 읽기·쓰기 상태, API·필드, 원천·단위·품질 상태, 실패 조건·오라클, 다이어그램 단계가 남았는지 별도로 판정했습니다.

| 의미 축 | 확인한 잔존 후보 | 판정 |
|---|---|---|
| 사용자·역할 | 데이터 분석가·대시보드 독자 표현, 모임 주최자·참가자 표현 | 데이터 분석가는 현재 독자 범위이고 모임 역할은 승인된 개발 사례입니다. 과거 사례의 전용 역할 잔존은 0건입니다. |
| 읽기·쓰기 상태 | 조회, 생성·수정, 권위 상태, fixture 상태 표현 | 현재 모임 참가 웹앱과 교육용 주가 fixture의 상태 계약입니다. 과거 사례의 보고서 작성 흐름 잔존은 0건입니다. |
| API·필드 | `metric_id`, `report_id`, 보고서 endpoint와 기업 비교 필드 후보 | 현재 공개 원고·자산에서 과거 사례 전용 계약 잔존은 0건입니다. 일반적인 API·지표 표현은 문맥을 읽어 제외했습니다. |
| 원천·단위·품질 상태 | 원천 버전, 단위, freshness, checksum, 품질 단계 | 현재 교육용 주가 fixture의 재현성과 증거 경계입니다. 과거 반도체 원천이나 단위를 현재 사실로 쓰는 잔존은 0건입니다. |
| 실패 조건·오라클 | 누락·중복·오래된 값, 검토 대기, 성공 판정 | 현재 모임·주가 사례의 검증 계약입니다. 과거 사례에만 성립하는 실패·오라클 잔존은 0건입니다. |
| 다이어그램 단계 | 대시보드·API·운영 흐름의 노드와 라벨 | 게시 SVG 12개와 Mermaid 원본 12개에서 과거 사례 단계 잔존은 0건입니다. |

따라서 현재 공개 범위의 의미 잔존은 직접 검색과 같은 `learning-paths.md` 한 건뿐이며 추가 의미 잔존은 0건입니다. 이 건은 PB-004·PBCA-001과 Task 9에 이미 배정돼 있으므로 Task 5에서는 공개 원고를 수정하지 않습니다. 날짜가 있는 역사 증거 범위인 `docs/project/reviews/`, `docs/superpowers/`, `CHANGELOG.md`에서는 16개 파일 73개 일치 행이 확인됐습니다. 이는 과거 원고·검토·전환 결정을 재현하는 역사 기록이므로 현재 권고나 현재 `reviewEvidence`로 재사용하지 않고 그대로 보존합니다. `research/`의 과거 브리프와 현재·역사 적용을 함께 기록하는 `source-map.md`도 공개 원고와 분리해 해석합니다.

## 출처 공백

| Gap ID | 문서 | 주장 | 위험 | 필요한 1차 출처 | 최신성 | 현재 상태 | 목표 작업 | 일반화 금지선 |
|---|---|---|---|---|---|---|---|---|
| PBSG-001 | PB-019 `abstraction-and-tradeoffs.md`; PB-022 `dependencies-package-managers-environments.md`; PB-024 `terminal-processes-ports.md` | 추상화의 비용, 의존성·패키지 관리자·잠금 파일·실행 환경의 책임, 터미널·프로세스·포트의 관계와 안전한 진단 | important | source-map의 확인된 소프트웨어공학 범위에 더해 언어 런타임·대표 패키지 관리자·운영체제·인터넷 표준의 공식 개념 및 진단 문서 | 2026-08-13 확인; 선택한 런타임·패키지 관리자·운영체제·셸·도구 버전 또는 표준 상태가 바뀌면 재확인 | confirmed | Task 12 | 한 생태계의 잠금·설치·포트 진단 동작을 모든 언어·운영체제·셸의 보편 규칙으로 확대하지 않습니다. |
| PBSG-002 | PB-026 `frontend-backend-boundary.md`; PB-029 `data-model-schema-migration.md`; PB-030 `state-cache-queue.md` | 클라이언트와 서버의 신뢰 경계, 스키마 변경과 데이터 보존, 권위 원본·캐시·큐의 일관성 및 재시도 | important | RFC 9110·9111, OWASP AJAX·Authorization, Chrome DevTools, PostgreSQL 18의 테이블·제약·ALTER·트랜잭션·격리, RabbitMQ 공식 reliability·queue, Parallel Change·Continuous Integration·Evolutionary Database Design의 1차 패턴 자료 | 2026-08-13 확인; 웹 표준·데이터베이스·메시징 제품 또는 버전과 적용 구성이 바뀌면 재확인 | confirmed | Task 13 | 화면 검증을 보안 통제로 간주하거나 PostgreSQL·RabbitMQ 한 제품의 동작과 단계적 마이그레이션 패턴을 다른 데이터베이스·큐의 무중단·무손실·정확히 한 번 보장으로 단정하지 않습니다. |
| PBSG-003 | PB-031 `accessibility-responsive-design.md`; PB-033 `ui-state-and-ux.md`; PB-034 `adr-and-tradeoffs.md`; PB-053 `analytics-dashboard-case-study.md` | 접근성·반응형 설계의 판단 기준, UI 상태와 오류 복구, ADR의 맥락·대안·결과·재검토 조건, 대시보드 차트·표·상태의 접근 가능한 대안 | important | 2026-08-13 확인: W3C WCAG 2.2 Recommendation과 비규범 Understanding·WAI Images 교육 자료, RFC 9110, Nygard ADR 원형, ISO/IEC/IEEE 42010:2022 공식 범위와 conceptual model | WCAG·HTTP·ADR 적용 범위 변경 시, 제품별 보조 기술·API·데이터·아키텍처 결정을 실제 채택할 때 재확인 | confirmed | Task 14; Task 18 | 일부 자동 검사·차트 대체 텍스트·특정 화면 폭을 접근성·반응형 적합 완료로, HTTP 멱등성을 모든 업무 재시도·복구로, ADR 원형과 핸드북 확장 필드를 모든 제품의 유일한 기준으로 확대하지 않습니다. |
| PBSG-004 | PB-037 `code-review-ci-cd.md`; PB-038 `incremental-delivery.md`; PB-041 `performance-security.md` | 사람 리뷰·CI·전달·배포 게이트, 작은 수직 조각, 성능 병목·위협·권한·비밀의 위험 기반 검증 | important | 2026-08-13 확인: Google Engineering Practices, Fowler CI·feature toggles, Agile Manifesto 원칙, GitHub 보호 브랜치·배포 환경, NIST SSDF 1.1·least privilege, OWASP threat modeling·input validation·secrets·logging, W3C User Timing·Resource Timing 초안과 Chrome·web.dev 성능 자료 | CI·호스팅 제품·보안 지침·웹 성능 표준 상태 변경 시와 다른 제품·임계값·위협 모델을 실제 채택할 때 재확인 | confirmed | Task 15 | 회사 관행·제품 설정·예시 성능 수치·보안 체크리스트를 모든 팀의 성공 공식으로 일반화하지 않고, 자동 검사 통과·보호 규칙 이름·보안 통제 존재를 사람 승인·사용자 성공·위험 제거 완료로 확대하지 않습니다. |
| PBSG-005 | PB-047 `environment-variables-config.md` | 설정·환경 변수·비밀의 분리, 로딩 우선순위, 노출 방지·회전·복구 | important | 2026-08-13 확인: Node.js v26.5.1 환경 변수·DotEnv 공식 문서, Astro 현재 환경 변수 가이드, Vercel 현재 환경 변수 제품 문서, OWASP Secrets Management Cheat Sheet | 런타임·프레임워크·호스팅 제품·비밀 관리 지침이 바뀌거나 실제 배포 대상을 선택할 때 해당 버전·설정·권한을 재확인 | confirmed | Task 16 | 환경 변수라는 저장 위치만으로 비밀이 암호화·격리·회전된다고 단정하거나 Node.js·Astro·Vercel 한 제품의 로딩·노출·환경 범위를 다른 런타임·프레임워크·호스팅 환경에 적용하지 않습니다. |
| PBSG-006 | PB-020 `developer-thinking.md` | 모호한 문제를 사실·가정·실패·증거로 분해하고 재현·가설·최소 변경·검증으로 좁히는 개발자 사고 절차 | normal | 소프트웨어공학의 문제 해결·디버깅·실험 설계를 다루는 표준 본문 또는 1차 교육·연구 자료 | 2026-08-13 확인; 인용한 문서 상태나 적용 범위 변경 시 재확인 | confirmed | Task 12 | 한 문제 해결 순서를 모든 장애·조직·도메인에 맞는 유일한 개발 절차로 제시하지 않습니다. |
| PBSG-007 | PB-035 `architecture-and-frameworks.md` | 아키텍처·기술 스택·프레임워크·라이브러리·런타임·플랫폼의 구분과 품질 속성·제약 기반 선택 | important | 2026-08-13 확인: ISO/IEC/IEEE 42010:2022 공식 범위와 conceptual model, CMU SEI 4판 소개, 2026-08-04 SWEBOK 기존 직접 확인, 2026-08-13 MDN 웹 프레임워크 자료 | 표준·자료 상태 변경 시와 예시 프레임워크·런타임·플랫폼을 실제 후보로 채택할 때 해당 제품의 공식 제어·지원·배포 범위를 재확인 | confirmed | Task 10; Task 14 | architecture description·품질 관계와 이 원고의 편집상 도구 구분·일곱 단계·사례 가설을 하나의 표준으로 합치거나 특정 프레임워크 구성을 아키텍처 자체·모든 웹앱의 기본 정답·현재 구현 성공으로 일반화하지 않습니다. |
| PBSG-008 | PB-039 `software-development-lifecycle.md`; PB-040 `debugging-observability.md` | 생명주기 단계별 종료 증거와 피드백, 재현·가설·로그·지표·트레이스로 원인을 좁히는 절차 | important | 2026-08-13 확인: ISO/IEC/IEEE 12207:2026, NIST SSDF 1.1, Agile Manifesto 원칙, Google SRE Book Effective Troubleshooting, OpenTelemetry signals·observability primer, OWASP Logging Cheat Sheet | 생명주기·보안·관측 지침의 문서 상태 변경 시와 특정 SDLC 모델·관측 제품·인시던트 절차를 실제 채택할 때 재확인 | confirmed | Task 15 | 이 원고의 단계 지도를 표준의 고정 순서로, 문서·화면·배포 표시를 단계 완료로, 세 신호의 수집을 관측 완성·근본 원인·복구 성공으로 일반화하지 않습니다. |
| PBSG-009 | PB-043 `branch-commit-pull-request.md`; PB-045 `undo-merge-conflict-release.md` | branch·commit·PR·merge·revert·reset·rebase·release의 공유 이력 경계와 안전한 복구 | important | 2026-08-13 확인: Git branch·pull·restore·revert·reset·rebase·tag 공식 reference와 GitHub PR·review·merge·release 공식 문서 | Git 또는 호스팅 제품의 관련 동작·문서 상태가 바뀌거나 실제 저장소의 ruleset·권한·merge·release 방법을 적용할 때 재확인 | confirmed | Task 16 | 로컬 미공유 이력과 원격 공유 이력을 같은 복구 절차로 다루거나 GitHub의 PR·Release 동작을 Git 자체·다른 호스팅 제품의 규칙으로 단정하지 않습니다. Git 이력 복구를 배포·데이터·외부 효과 복구로 확대하지 않습니다. |
| PBSG-010 | PB-049 `agent-review-and-verification.md`; PB-051 `permissions-sandbox-worktrees.md` | 독립 AI 검토의 증거 한계와 권한·샌드박스·worktree·dry-run의 보호 범위 및 우회 가능성 | important | 2026-08-13 확인: NIST least privilege, Apple macOS App Sandbox, Git worktree·clean, OpenAI Codex 공식 제품 자료·current primary repository, Anthropic evals·Claude Code permissions·sandbox와 fresh-context evaluator 예시 저장소 | Git·운영체제·에이전트 제품 정책·실행 환경이 바뀌거나 실제 sandbox·권한·review harness를 적용할 때 재확인 | confirmed | Task 17 | 읽기 전용·샌드박스·dry-run 표시를 부작용 불가능 또는 검토 독립성·정확성 보장으로 일반화하지 않습니다. |
| PBSG-011 | PB-048 `logs-monitoring-backup.md` | SLI·SLO·SLA의 서로 다른 측정·목표·약속 범위와 오류 예산을 운영 판단에 쓰는 조건 | important | 2026-08-13 확인: Google SRE Book의 Service Level Objectives와 Monitoring Distributed Systems 공개 조직 실무 자료 | Google 자료 상태가 바뀌거나 실제 SLI·SLO·SLA·오류 예산·알림 정책과 계약을 채택할 때 조직·공급자·계약의 현재 정의를 재확인 | confirmed | Task 16 | Google 조직의 SLI 산식·SLO 목표·오류 예산·알림 관행을 업계 표준으로, 내부 목표를 고객과의 법적 SLA로 일반화하지 않습니다. |
| PBSG-012 | PB-048 `logs-monitoring-backup.md`; PB-053 `analytics-dashboard-case-study.md` | RPO·RTO, 백업 격리·보존·복원 시험, 인시던트 안정화·복구·검증 절차와 대시보드 데이터·빌드 산출물의 복구 보안 경계 | critical | 2026-08-13 확인: NIST SP 800-61 Rev. 3 2025-04 최종본, NIST SP 800-34 Rev. 1 2010-05 발행·2010-11 갱신 최종본, CISA StopRansomware Guide 2023-10 개정 자료 | NIST·CISA 지침이 개정되거나 Task 18·25에서 실제 저장소·데이터베이스·산출물 저장소를 선택할 때 해당 제품·계정·보존·권한·복원 절차를 다시 확인 | confirmed | Task 16; Task 18; Task 25 | 백업·빌드 산출물 생성 성공을 복구 가능성으로 간주하거나 미국 연방·랜섬웨어 지침과 한 공급자의 보존·격리 기능을 모든 데이터·배포 환경의 의무 절차·재해 복구 보장으로 단정하지 않습니다. 실제 캡스톤·제품의 복원 성공은 별도 실행 증거가 필요합니다. |
| PBSG-013 | PB-057 `development-glossary.md` | 웹·데이터·Git·품질·운영·보안 핵심 용어의 정식 의미와 서로 다른 계층·보장 범위 | important | 2026-08-14 Task 19가 기존 source-map의 RFC·WHATWG·W3C·PostgreSQL·Git·ISO 29119·SWEBOK·Google SRE·NIST·OWASP 직접 적용 기록을 정의 묶음별로 재대조하고, ISO/IEC/IEEE 12207:2026 Published Edition 2와 IEEE 1016-2009 Inactive-Reserved 상태를 다시 직접 확인함 | 참조 표준·공식 프로젝트 상태가 바뀌거나 새 생태계의 엄격한 정의를 채택할 때 재확인 | confirmed | Task 19 | 빠른 표의 한국어 표현·범주 배치를 국제 표준 용어집·유일한 번역으로 만들거나 한 장의 비유·특정 제품 용어를 업계 전체 정의로 승격하지 않습니다. |
| PBSG-014 | PB-058 `methodology-map.md` | PRD·두 SDD·TDD·BDD·ADR·SDLC·Agile·Scrum·Kanban·DevOps·CI·continuous delivery·continuous deployment·GitFlow·trunk-based 개발과 context·spec·harness·loop의 범주와 관계 | important | 2026-08-20 Task 19가 기존 ISO/IEC/IEEE 29148·1016·42010·12207, GitHub Spec Kit, Fowler TDD·CI, Agile Manifesto, Nygard ADR, OpenAI·Anthropic의 2026-08-13~14 직접 확인 기록을 재사용함. BDD·Scrum·Kanban·DevOps·GitFlow·trunk-based development의 직접 원형·공식 source cluster는 없고 추가 네트워크는 실행하지 않음 | 누락된 여섯 묶음의 원형·현행 공식 자료를 직접 확인할 때와 기존 표준·조직 자료 상태 변경 시 재확인 | not-confirmed | Task 19 | 서로 다른 문서·개발 규율·결정 기록·팀 운영·통합/전달·브랜치 방식·AI 책임을 하나의 문서 템플릿·순차 절차·성숙도 사다리로 묶지 않습니다. |
| PBSG-015 | PB-042 `testing-strategy.md` | verification·validation, static testing과 동적 테스트, 테스트 수준·목적·초점의 구분 | important | 2026-08-13 확인: ISO/IEC/IEEE 29119-1:2022 Edition 2와 ISO JTC 1/SC 7 시리즈 안내, IEEE Computer Society SWEBOK V4.0a | 테스트 표준·SWEBOK 판본 변경 시와 조직이 구체 테스트 분류·프로세스를 채택할 때 재확인 | confirmed | Task 15 | 한 분류 체계를 모든 조직·도구의 유일한 테스트 분류로 제시하거나 static·dynamic, manual·automated, 수준·목적·초점의 서로 다른 축을 한 계층으로 일반화하지 않습니다. |
| PBSG-016 | PB-042 `testing-strategy.md` | 테스트 오라클·대역·fixture·flaky test·격리·피라미드·smoke test·coverage와 예상 실패·0개 실행의 도구별 판정 | important | 2026-08-13 확인: SWEBOK V4.0a, Fowler 사이트의 Practical Test Pyramid, Google Testing Blog의 flaky test·coverage 조직 사례 | 테스트 자료 상태 변경 시와 실제 테스트 러너·버전을 선택해 예상 실패·건너뜀·필터 0건·종료 코드 의미를 적용할 때 해당 공식 문서로 재확인 | confirmed | Task 15 | 특정 피라미드 비율·재시도 정책·coverage 수치나 한 도구의 성공 표시를 품질·사용자 성공·테스트 실행의 보편 증거로 일반화하지 않습니다. |
| PBSG-017 | PB-050 `context-spec-harness-loop.md` | GitHub Spec Kit·OpenAI·Anthropic의 현재 조직 사례와 컨텍스트·하네스·루프 등 신생 실무 표현의 문서 상태·적용 범위 | important | 2026-08-13 확인: GitHub Spec Kit 공식 site·current main 저장소, OpenAI Harness Engineering 2026-02-11, Anthropic context 2025-09-29·long-running harness 2025-11-26·harness design 2026-03-24 조직 자료 | 분기, 공식 site·저장소·조직 자료 상태 변경 시와 구체 도구·조직 절차를 채택할 때 재확인 | confirmed | Task 7; Task 8; Task 17 | 회사별 사례나 신생 표현을 합의된 표준·보편 성숙도 모델·제품 기능 보장으로 일반화하지 않습니다. |
| PBSG-018 | PB-055 `agent-output-glossary.md` | `plan mode`, `workspace-write`, `read-only`와 Claude Code·Codex의 권한·승인·실행 상태 용어 | important | 2026-08-20 직접 확인: OpenAI Codex의 current permissions·approvals·sandbox·environment modes·worktree 문서와 Anthropic Claude Code의 current permissions·permission modes·sandbox 문서. Codex의 정확한 current `plan mode` label과 Claude Code의 정확한 `workspace-write`·`read-only` mode label은 not-confirmed 경계로 분리함 | 제품 정책·플랜·버전·호스트·실행 환경이 변경되거나 실제 mode·sandbox·worktree를 적용할 때 재확인 | confirmed | Task 7; Task 8; Task 19 | 한 제품·플랜·샌드박스의 상태 이름을 다른 제품의 동일 보장이나 파일·네트워크·외부 쓰기 차단의 보편 증거로 해석하지 않습니다. `confirmed`는 제품별 직접 근거와 명칭 부정 경계를 함께 기록한 좁은 조사 계약이며 실제 계정 설정이나 실행 성공을 뜻하지 않습니다. |
| PBSG-019 | PB-053 `analytics-dashboard-case-study.md` | 실제 시장 데이터를 후속 채택할 때 상품·시세·조정 방식·거래일·시간대·원천 버전·이용 조건·재배포 권리를 함께 검증하는 계약 | critical | 2026-08-13 KRX 공식 거래 가이드·호가 공개 페이지에서 특정 거래 시간·단위·호가 공개 항목은 확인했으나 실제 제공자·데이터를 채택하지 않았고 전체 필드 정의·corporate action 조정·시간대·원천 버전·이용 약관·라이선스·수집/가공/재배포 허용 묶음은 직접 확인하지 못함 | 실제 원천 채택이 별도 승인될 때 해당 제공자·거래소의 현재 공식 계약 전체를 확인하고 Task 25 권리 감사·공개 직전에 재확인 | not-confirmed | Task 25; 실제 원천 채택 별도 승인 범위 | `EDU-FIXTURE`를 실제 시장 사실·투자 판단 근거로 쓰거나 KRX의 특정 공개 항목·조회 가능성을 수집·가공·재배포 허용으로 해석하지 않습니다. |
| PBSG-020 | PB-054 `first-full-stack-project.md` | 선택한 데이터베이스·런타임·배포 환경에서 정원 동시성, 고유성, 마이그레이션, 로그, 백업·복원의 구체 구현과 운영 보장 | important | source-map의 확인된 OpenAPI·OWASP·PostgreSQL 범위와 2026-08-13 Task 8의 선택적 제품 예시가 있으나, Task 18은 제품 조합·계정·데이터베이스·런타임·배포 환경을 채택하거나 구현·시험하지 않음 | 실제 제품 조합과 구현 범위가 별도 승인되고 대상 제품·버전의 공식 문서와 동시성·마이그레이션·로그·격리 복원 실행 증거가 생길 때 재확인 | not-confirmed | Task 18 이후 별도 승인 범위 | 현재 제품 중립 교육 범위 밖입니다. PostgreSQL 또는 Supabase·Vercel·Codex Sites 예시를 채택·계정·실제 구현·운영 보장으로 확대하지 않으며 Task 18의 문서·로컬 브라우저 검증으로 닫지 않습니다. |
| PBSG-021 | PB-021 `software-is-a-system.md` | component·responsibility·boundary의 세부 의미, 캐시 사본의 최신성, 정적 전달이 충분한 조건과 브라우저 개발자 도구의 현재 명칭 | important | 소프트웨어 아키텍처 표준·SWEBOK 세부 자료, HTTP 캐시 표준, 웹 플랫폼·브라우저의 공식 정적 전달 및 개발자 도구 문서 | 2026-08-13 확인; 브라우저·웹 플랫폼 문서 상태 또는 예시 도구 변경 시 재확인 | confirmed | Task 12 | 여섯 렌즈를 업계 표준 분류로 만들거나 한 브라우저의 도구 이름·캐시 표시·정적 전달 조건을 모든 브라우저와 시스템에 일반화하지 않습니다. |
| PBSG-022 | PB-025 `client-server-full-stack.md` | client·server의 역할·프로그램·호스트 용법, 브라우저에 전달된 코드·데이터의 노출 경계, 권위 상태·캐시·낙관적 UI·충돌, 정적 전달 전환, 인가·동시성 증거 | important | HTTP·웹 보안 표준, 브라우저 공식 보안 문서, 선택 상태 관리·캐시·데이터베이스의 공식 일관성·동시성 문서 | 2026-08-13 확인; HTTP·웹 보안·브라우저·Astro 문서 상태 또는 PostgreSQL 예시 버전이 바뀌면 재확인 | confirmed | Task 13 | 클라이언트·서버를 항상 별도 호스트로 보거나 브라우저 코드 은닉·화면 검증·낙관적 표시를 서버 인가·권위 상태·동시성 성공 증거로 일반화하지 않습니다. |
| PBSG-023 | PB-027 `http-request-response.md` | CORS와 혼합 콘텐츠의 직접 동작, 브라우저가 응답 사용을 제한하는 정책 경계와 서버 처리 성공의 구분 | important | Fetch·CORS·Mixed Content의 W3C 또는 WHATWG 규범 자료와 MDN·브라우저 공식 구현 문서 | 2026-08-13 확인; WHATWG Fetch·W3C Mixed Content 문서 상태 또는 브라우저 정책 예시가 바뀌면 재확인 | confirmed | Task 13 | CORS를 인증·인가나 서버 간 요청 차단으로 설명하거나 HTTP 성공 응답을 브라우저 화면에서 사용할 수 있다는 보장으로 일반화하지 않습니다. |
| PBSG-024 | PB-032 `browser-dom-rendering.md` | DOM 구성과 렌더링 단계, 개발자 도구의 기록·임시 DOM 편집, 브라우저·기기 차이, WCAG 세부 성공 기준 | important | 2026-08-13 확인: WHATWG HTML parsing·event loop·lazy loading과 DOM, CSSWG CSSOM Editor's Draft, Chrome DevTools Network·DOM·CSS·Rendering, W3C WCAG 2.2 | 브라우저·Chrome 도구·WCAG·웹 표준 상태 변경 시, 또는 특정 엔진·프레임워크 동작을 채택할 때 재확인 | confirmed | Task 14 | 단순화한 흐름을 모든 엔진의 내부 직렬 파이프라인·스레드·최적화로, CSSOM Editor's Draft를 Recommendation으로, `img`·`iframe` 규칙을 모든 lazy loading으로, 임시 DOM 편집을 소스 수정으로, 한 브라우저·기기 확인을 호환성·접근성 완료로 확대하지 않습니다. |
| PBSG-025 | PB-036 `prd-sdd-tdd.md` | PRD의 구성, Software Design Description과 ADR의 경계, 요구사항·수용 기준·테스트 케이스의 구분, TDD Red·Green·Refactor와 과정 증거 | important | 2026-08-13 확인: ISO/IEC/IEEE 29148:2018 요구공학, inactive-reserved IEEE 1016-2009 SDD, Nygard ADR 원형, GitHub Spec Kit 현재 공식 문서, Martin Fowler TDD 방법론 설명 | 29148 개정본 발행·1016 상태·Spec Kit 흐름·인용 방법론 자료 변경 시와 조직별 PRD·설계·테스트 절차를 실제 채택할 때 재확인 | confirmed | Task 14 | PRD·설계 설명·ADR·Spec-Driven Development·테스트 케이스를 같은 문서 종류로 묶거나 현재 제품 흐름을 보편 SDD 표준으로, 테스트 보유·사후 추가를 TDD 수행이나 모든 위험의 충분한 검증으로 일반화하지 않습니다. |
| PBSG-026 | PB-053 `analytics-dashboard-case-study.md` | 교육용 데이터 계약·canonical schema·lineage·freshness·checksum·관측값 상태·검토 전환·재현 가능한 빌드 manifest의 의미와 증거 | important | 2026-08-13 W3C PROV-O·DCAT 3, SLSA v1.2 Build Requirements, Reproducible Builds 정의가 provenance·derivation, catalog version·checksum, output digest·build provenance와 bit-for-bit 재현의 좁은 의미를 직접 지원함; 교육용 data contract·canonical schema·freshness·관측값 상태·검토 전환·manifest 전체는 핸드북 운영 계약을 포함하며 선택 도구·실행 증거도 없음 | 실제 데이터 계약·도구·빌드 방식을 별도 채택할 때 남은 개념의 공식 자료와 도구 버전 문서, 같은 입력·환경·명령의 실행 증거를 재확인 | not-confirmed | Task 18 이후 별도 승인 범위 | 확인된 일부 개념을 이 fixture의 업계 표준 스키마·값 정확성·최신성·권리·SLSA 준수·실제 재현 보장으로 확대하지 않으며 실제 시장 사실·권리는 PBSG-019와 분리합니다. |

## Task 7 fact pack 양방향 crosswalk

2026-08-13의 Supabase·Vercel·Codex Sites fact pack은 제품별 좁은 기능 예시를 직접 확인했지만 이 레지스터의 더 넓은 표준·보안·조직 사례·실제 캡스톤 보장을 닫지는 않았습니다. Task 7 단독 판정 당시에는 PBSG-001~PBSG-026의 기존 ID·행·위험·상태·목표 작업을 바꾸지 않아 26개 모두 `not-confirmed`, 위험 집계 critical 2개·important 23개·normal 1개였습니다. 이후 상태는 아래 목표 Task의 전환 기록을 정본으로 봅니다.

| Gap ID | 연결되는 Task 7 claim | fact pack이 직접 확인한 좁은 범위 | 남은 공백과 상태 유지 이유 | 후속 경계 |
|---|---|---|---|---|
| PBSG-004 | VERCEL-BUILD-01, VERCEL-DEPLOY-01, VERCEL-LOG-01, VERCEL-ROLLBACK-01 | Vercel의 build·deployment URL·build/runtime log·routing-layer rollback | 2026-08-13 Task 15에서 CI·사람 리뷰·작은 수직 조각·위협·성능·보안의 제품 중립 공식·1차 자료를 추가 확인해 `confirmed`; Vercel 행은 여전히 제품별 build·deployment·routing 범위로만 사용 | 실제 Vercel 설정을 채택하면 GitHub·Vercel의 현재 플랜·보호·승인·복구 경계를 다시 확인 |
| PBSG-005 | SUPA-KEY-01, VERCEL-ENV-01, SITES-RUNTIME-01 | 세 제품의 공개 키·서버 비밀·배포별 환경 설정이라는 제품 경계 | 2026-08-13 Task 16에서 Node.js·Astro·Vercel·OWASP 직접 근거로 config·환경 변수·비밀, 로딩·노출·회전·유출 복구의 제품 중립 경계를 확인해 `confirmed`; 세 제품 행은 각각의 좁은 공개 기능 범위로만 사용 | 실제 배포 대상을 채택하면 해당 런타임·프레임워크·호스팅의 현재 precedence·권한·회전 절차를 재확인 |
| PBSG-012 | SUPA-OPS-01, VERCEL-ROLLBACK-01, SITES-ROLLBACK-01 | Supabase DB backup이 Storage 객체를 제외한다는 범위, Vercel routing rollback, Sites rollback의 미확인 경계 | 2026-08-13 Task 16에서 NIST·CISA 직접 지침으로 RPO·RTO·격리 백업·복원 시험·인시던트의 제품 중립 경계를 확인해 `confirmed`; 실제 데이터·산출물 복구 성공과 Sites rollback 기능은 확인하지 않음 | Task 18·25에서 실제 저장소·데이터베이스·산출물 저장소를 선택하면 해당 공식 문서와 승인된 격리 복원 증거를 별도 확보 |
| PBSG-017 | 직접 해소 claim 없음 | Task 7 fact pack의 제품 기능 출판 계약과 `checked_at`·문서 상태 형식만 재사용 가능 | GitHub Spec Kit·OpenAI·Anthropic 조직 사례와 context·harness·loop 표현의 문서 상태·성숙도는 이번 세 제품 기능 조사 범위가 아니므로 `not-confirmed` 유지 | Task 8이 자동 해소하지 않으며 Task 17과 해당 공식 원문 조사 필요 |
| PBSG-018 | 직접 해소 claim 없음 | Task 7 fact pack의 제품·환경별 상태 분리 원칙만 재사용 가능 | Codex·Claude Code의 `plan mode`·`workspace-write`·`read-only` 권한 보장은 Supabase·Vercel·Sites 기능 문서로 확인할 수 없으므로 `not-confirmed` 유지 | Task 8이 자동 해소하지 않으며 Task 19에서 OpenAI·Anthropic 공식 제품 자료를 별도 확인 |
| PBSG-020 | SUPA-DB-01, SUPA-AUTH-01, SUPA-AUTHZ-01, SUPA-API-01, SUPA-SERVER-01, SUPA-MIG-01, SUPA-OPS-01, SUPA-LOG-01, SUPA-KEY-01, VERCEL-RUNTIME-01, VERCEL-DEPLOY-01, VERCEL-DATA-01, SITES-ARTIFACT-01, SITES-VERSION-01, SITES-HOST-01, SITES-RUNTIME-01 | 후보 제품의 저장·Auth·RLS·API·함수·마이그레이션·백업·로그·키·runtime·hosting·version 책임과 Sites 입력 archive의 미게시 경계 | Task 18에서도 실제 모임 앱의 제품 조합·계정·배포 환경을 선택하지 않았고 정원 동시성·고유성·인가 부정 테스트·마이그레이션·로그·백업·복원을 구현하거나 시험하지 않았으므로 현재 제품 중립 교육 범위 밖의 `not-confirmed` 유지 | 실제 구현 선택과 별도 승인이 생길 때 제품 공식 자료와 동시성·복원 실행 증거를 새 범위에서 고정 |

반대 방향으로도 같은 경계를 적용합니다. Task 7의 각 claim은 위 Gap을 닫았다는 표지가 아니라 후속 작업이 제품 예시를 과장하지 않게 하는 입력이며, PBSG 행이 남아 있다는 사실은 확인된 좁은 claim까지 부정한다는 뜻이 아닙니다. 제품 fact pack의 `confirmed`는 공식 문서가 해당 한 문장을 뒷받침한다는 상태이고, 실제 모임 앱·주가 대시보드·운영 환경이 그 기능을 채택하거나 성공했다는 상태가 아닙니다.

## Task 8 공개 페이지 매핑과 미게시 경계

Task 8은 `src/content/docs/reference/current-tool-mapping.md`에 Task 7의 게시 후보 `confirmed` 17개·`limited` 4개만 옮겼습니다. 새로운 제품 claim을 만들거나 `source-map.md`의 확인일을 다시 쓰지 않았으며, 각 공개 행은 영속 책임·현재 기능·사용자 결정·직접 증거·확인일·일반화 금지선을 함께 보여 줍니다.

| 공개 묶음 | 사용한 기존 claim | 공개 방식 | 연결 Gap | 남은 경계 |
|---|---|---|---|---|
| Supabase | SUPA-DB-01, SUPA-AUTH-01, SUPA-AUTHZ-01, SUPA-API-01, SUPA-SERVER-01, SUPA-MIG-01, SUPA-OPS-01, SUPA-LOG-01, SUPA-KEY-01 | 9개 행이며 `limited`인 서버 함수와 데이터베이스 백업은 조건부 기능으로 표시 | PBSG-005, PBSG-012, PBSG-020 | 실제 비밀 운영·전체 데이터 복구·모임 앱 제품 선택·인가·동시성·복원 성공은 미검증 |
| Vercel | VERCEL-BUILD-01, VERCEL-RUNTIME-01, VERCEL-ENV-01, VERCEL-DEPLOY-01, VERCEL-DOMAIN-01, VERCEL-LOG-01, VERCEL-ROLLBACK-01, VERCEL-DATA-01 | 8개 행이며 `limited`인 Functions와 외부 storage 연결은 조건부 기능으로 표시 | PBSG-004, PBSG-005, PBSG-012, PBSG-020 | CI·배포 승인·외부 데이터·실제 URL·데이터 복구는 미검증 |
| Codex Sites | SITES-VERSION-01, SITES-HOST-01, SITES-RUNTIME-01, SITES-DOMAIN-01 | 공개 공식 URL이 직접 뒷받침하는 4개 행만 게시 | PBSG-005, PBSG-020 | beta·계정·workspace·지원 패턴 차이와 실제 배포는 미검증 |
| Codex Sites 미게시 | SITES-ARTIFACT-01, SITES-ROLLBACK-01 | 정확한 입력 아티팩트 구성·운영 롤백 범위는 공개 공식 근거 부족으로 기능 표에서 제외하고 미게시 경계만 설명 | PBSG-012, PBSG-020 | Sites 기능은 미확인이고 기능 부재 판정도 아닙니다. Task 16의 PBSG-012 `confirmed`는 제품 중립 복구 원칙 판정이며 이 미게시 기능이나 실제 복원 성공을 확인하지 않습니다. |

Task 8 매핑 종료 당시에도 PBSG-001~PBSG-026의 ID·9열·위험·상태·목표 작업은 변하지 않아 26개 모두 `not-confirmed`, 위험 집계 critical 2개·important 23개·normal 1개였습니다. 이는 역사적 Task 8 판정이며, 이후 상태는 아래 목표 Task의 전환 기록을 정본으로 봅니다. PBSG-017의 조직 사례와 PBSG-018의 코딩 에이전트 권한 용어는 이 제품 페이지로 해소하지 않았습니다.

## Task 12 정신 모델·작업 환경 전환 기록

- PBSG-001은 SWEBOK·SEI·C4의 추상화와 정보 은닉 범위, Node.js·npm CLI 11.19.0 Legacy·Python 3.14.7의 런타임·의존성·매니페스트·잠금 파일·격리 환경 범위, POSIX.1-2024 Issue 8·Apple macOS Tahoe 26 Terminal·RFC 6335/BCP 165·IANA 레지스트리·Windows Server 2025 PowerShell·PowerShell 7.5의 셸·프로세스·PID·포트·조회·종료 범위를 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. 각 원고는 C4 계층, npm 설치 규칙, Python `venv`, POSIX job control, Apple Control-C, IANA 포트 등록, Windows 조회·종료 도구를 해당 모델·생태계·운영체제·표준의 범위로 한정하며, 접근에 실패한 ACM Parnas 본문과 현행 POSIX `ps`·`kill` 본문은 갱신 근거로 사용하지 않습니다.
- PBSG-006은 Google SRE Book의 관찰·가설·검사·재현·범위 축소·영향 완화·증거 보존 범위와 SWEBOK의 넓은 소프트웨어공학 교육 범위를 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. PB-020은 이 흐름을 하나뿐인 절차로 제시하지 않고 안전·권한·도메인에 따라 순서와 깊이가 달라질 수 있다는 금지선을 본문과 source map에 함께 유지합니다.
- PBSG-021은 SEI·C4의 책임·인터페이스·구성요소·시스템 경계, RFC 9111의 HTTP 캐시 최신성, Astro의 정적/요청 시점 렌더링 예시, Chrome·Firefox의 현재 개발자 도구 명칭을 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. 여섯 렌즈는 편집 틀로, RFC·제품 문서는 각 표준·제품 범위로 한정합니다.
- 현재 집계는 `confirmed` 3개, `not-confirmed` 23개입니다. 미확인 위험 집계는 critical 2개·important 21개·normal 0개이며, 확인된 PBSG-001·006·021의 위험은 미확인 집계에서 제외합니다.

## Task 13 풀스택·백엔드·데이터 전환 기록

- PBSG-022는 RFC 9110·9111, OWASP AJAX·Authorization Cheat Sheet, Chrome DevTools Sources, Astro on-demand rendering, PostgreSQL 18 트랜잭션·격리·제약을 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. 원고는 client·server를 상호작용 역할로 구분하고, 브라우저에 전달된 배포 자산과 client-side 검증을 비밀 은닉·인가 증거로 보지 않으며, HTTP 캐시·정적 렌더링·PostgreSQL 동시성 예시를 다른 캐시·프레임워크·데이터베이스의 보편 동작으로 확대하지 않습니다.
- PBSG-023은 RFC 9110, WHATWG Fetch의 CORS protocol, W3C Mixed Content Candidate Recommendation Draft와 Chrome DevTools Network를 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. 원고는 preflight 실패와 본 요청 뒤 response sharing 실패를 구분하고, mixed content의 자원별 자동 업그레이드·차단 범위를 유지하며, CORS를 인증·인가·서버 간 차단이나 서버 미처리의 보편 증거로 사용하지 않습니다.
- PBSG-002는 RFC 9110·9111, OWASP AJAX·Authorization, Chrome DevTools, PostgreSQL 18의 테이블·제약·ALTER·트랜잭션·격리, RabbitMQ reliability·queue와 Parallel Change·Continuous Integration·Evolutionary Database Design의 1차 패턴 자료를 2026-08-13에 직접 확인해 `confirmed`를 유지합니다. PostgreSQL은 관계형 구조·제품 동작만, Parallel Change는 expand·migrate·contract와 구·신 계약 공존만, Continuous Integration의 데이터베이스 필드 예시는 새 필드·이중 쓰기·기존 데이터 복사·새 읽기·옛 필드 제거만, Evolutionary Database Design은 스키마·데이터·접근 코드 변경·마이그레이션 테스트·복수 애플리케이션 버전의 하위 호환 스키마만 지원합니다. PB-026·029·030은 이 직접 범위를 각각 연결하며, 이를 다른 데이터베이스·큐의 무중단·무손실·정확히 한 번 완료나 실제 서비스 성공으로 일반화하지 않습니다.
- 현재 집계는 `confirmed` 6개, `not-confirmed` 20개입니다. 미확인 위험 집계는 critical 2개·important 18개·normal 0개이며, 확인된 PBSG-001·002·006·021·022·023의 위험은 미확인 집계에서 제외합니다.

## Task 14 프런트엔드·설계 전환 기록

- PBSG-024는 WHATWG HTML의 parsing·event loop·`img`·`iframe` lazy loading, WHATWG DOM, CSSWG CSSOM Editor's Draft, Chrome DevTools Network·DOM·CSS·Rendering과 W3C WCAG 2.2를 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. 원고는 URL·네트워크·HTML 파싱·DOM·스타일·렌더링 기회·이벤트·상태를 진단용 개념 흐름으로 한정하고, View Source·Network·live DOM·Computed 값·픽셀을 서로 다른 증거로 구분합니다. 이를 모든 엔진의 직렬 내부 구현, 모든 lazy loading, 임시 DOM 편집의 소스 변경, 한 Chrome·기기의 호환성·접근성 완료로 확대하지 않습니다.
- PBSG-003은 W3C WCAG 2.2와 비규범 Understanding·WAI Images 자료, RFC 9110, Nygard의 ADR 원형, ISO/IEC/IEEE 42010:2022 공식 범위와 conceptual model을 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. PB-031·033·034의 전체 주장과 PB-053의 기존 차트·표·상태 접근성 계약을 함께 대조했으며, 자동 검사·특정 화면·차트 대체 텍스트를 전체 적합으로, HTTP 의미를 애플리케이션의 모든 중복·복구로, ADR 양식을 영구 진리나 유일한 템플릿으로 확대하지 않습니다.
- PBSG-007은 ISO/IEC/IEEE 42010:2022 공식 범위와 conceptual model, CMU SEI 4판 소개, 기존 SWEBOK 확인 기록, MDN 웹 프레임워크 자료를 원고 전체에 대조해 `confirmed`로 전환했습니다. architecture description·이해관계자·관심사·관점·뷰·결정·근거와 품질 관계가 닫는 주장, 생태계별 용례가 겹치는 핸드북의 실용 도구 구분, 이 핸드북의 일곱 단계와 두 사례 가설을 분리했으며 특정 방법·제품·현재 구현·배포 성공으로 확대하지 않습니다.
- PBSG-025는 ISO/IEC/IEEE 29148:2018, inactive-reserved IEEE 1016-2009, Nygard ADR 원형, GitHub Spec Kit 현재 문서, Fowler의 TDD 설명을 원고 전체에 대조해 `confirmed`로 전환했습니다. PRD·Software Design Description 산출물, Spec-Driven Development 접근, TDD 구현 규율의 입력·출력·순서·실패를 분리하고 표준·제품·방법론의 상태와 비보장선을 기록했으며, 사후 테스트를 TDD로 승격하지 않습니다.
- 현재 집계는 `confirmed` 10개, `not-confirmed` 16개입니다. 미확인 위험 집계는 critical 2개·important 14개·normal 0개이며, 확인된 PBSG-001·002·003·006·007·021·022·023·024·025의 위험은 미확인 집계에서 제외합니다.

## Task 15 워크플로·품질 전환 기록

- PBSG-004는 Google Engineering Practices, Fowler의 CI·feature toggle, Agile Manifesto 원칙, GitHub 보호 브랜치·배포 환경, NIST SSDF 1.1·least privilege, OWASP threat modeling·input validation·secrets·logging, W3C User Timing·Resource Timing 초안과 Chrome·web.dev 성능 자료를 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. PB-037·038·041은 회사 관행·제품 설정·예시 수치·보안 통제를 모든 팀의 성공 공식이나 위험 제거 완료로 확대하지 않습니다.
- PBSG-008은 ISO/IEC/IEEE 12207:2026, Google SRE Book Effective Troubleshooting, OpenTelemetry signals·observability primer와 OWASP Logging Cheat Sheet를 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. PB-039·040은 생명주기 지도를 표준의 고정 순서로, 세 관측 신호 수집을 원인 규명·복구 성공으로 사용하지 않으며 개인정보·비밀 없는 관측 경계를 유지합니다.
- PBSG-015·016은 ISO/IEC/IEEE 29119-1:2022와 공식 시리즈 안내, SWEBOK V4.0a, Fowler 사이트의 Practical Test Pyramid, Google Testing Blog의 flaky test·coverage 조직 사례를 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. PB-042는 static·dynamic, manual·automated, 테스트 수준·목적·초점을 다른 축으로 구분하고 피라미드·coverage·도구 성공 표시를 실제 위험 배분·오라클·사용자 성공의 대리 증거로 사용하지 않습니다. 특정 테스트 러너의 예상 실패·건너뜀·필터 0건·종료 코드 의미는 채택한 도구·버전의 공식 문서와 출력으로 다시 확인합니다.
- 현재 집계는 `confirmed` 14개, `not-confirmed` 12개입니다. 미확인 위험 집계는 critical 2개·important 10개·normal 0개이며, 확인된 PBSG-001·002·003·004·006·007·008·015·016·021·022·023·024·025의 위험은 미확인 집계에서 제외합니다.

## Task 17 AI 네이티브 개발 전환 기록

- PBSG-017은 GitHub Spec Kit 공식 site·current main 저장소, OpenAI의 2026-02-11 Harness Engineering 조직 사례, Anthropic의 2025-09-29 context engineering과 2025-11-26·2026-03-24 long-running harness 조직 사례를 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. PB-050은 네 표현을 정보·목표·환경·반복 평가의 지속 책임으로 구분하고, 각 현재 사례의 발표일·문서 상태·직접 적용·일반화 금지선과 입력 품질·도구 경계·관찰·평가·회귀·실패 복구를 연결합니다. 신생 표현을 합의된 표준·보편 성숙도 모델·제품 기능 보장으로 사용하지 않습니다.
- PBSG-010은 NIST least privilege, Apple의 kernel-level macOS App Sandbox, Git worktree·`clean --dry-run`, OpenAI Codex의 current sandbox·network·approval·workspace-write 경계, Anthropic의 permissions·Bash sandbox·fallback·escape hatch·eval 한계와 fresh-context evaluator 예시를 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. PB-049는 독립 리뷰를 역할·컨텍스트·권한으로 분리하되 model grader·fresh context·PASS를 정확성·인간 승인으로 확대하지 않고, PB-051은 read·write·network·exec·approval·sandbox·worktree·destructive·secrets·external effects와 허용·거절·복구 증거를 제품별 금지선과 연결합니다.
- PBSG-018은 Task 19 소유이며 이번 제품 용어 조사·상태 전환 대상이 아닙니다. `read-only`·`workspace-write`·`plan mode` 같은 제품 상태 이름을 보편 보장으로 옮기지 않았습니다.
- 현재 집계는 `confirmed` 20개, `not-confirmed` 6개입니다. 미확인 위험 집계는 critical 1개·important 5개·normal 0개이며, PBSG-013·014·018·019·020·026만 `not-confirmed`입니다.

## Task 18 캡스톤 판정 기록

- PBSG-019는 KRX 공식 거래 가이드·호가 공개 페이지의 특정 거래 시간·단위·공개 필드만 직접 확인했습니다. 실제 원천을 채택하지 않았고 조정·시간대·원천 버전·이용 약관·라이선스·재배포 권리 전체 계약이 없으므로 `not-confirmed`를 유지합니다.
- PBSG-026은 W3C PROV-O·DCAT 3, SLSA v1.2와 Reproducible Builds 정의가 provenance·version·checksum·output digest·build provenance·bit-for-bit 재현의 일부를 직접 지원합니다. 교육용 data contract·canonical schema·freshness·관측값 상태·검토 전환·manifest 전체는 이 핸드북의 운영 규칙을 포함하고 선택 도구·실행 증거가 없으므로 `not-confirmed`를 유지합니다.
- PBSG-020은 PB-054가 제품 조합·계정·구현·배포를 채택하지 않은 제품 중립 교육 범위라서 `not-confirmed`를 유지합니다. 세 행의 미확인 상태를 문서·로컬 브라우저 검사로 닫지 않았고, PBCA-011도 PBSG-019·026이 남아 있어 유지합니다.
- 현재 집계는 `confirmed` 20개, `not-confirmed` 6개로 변하지 않습니다. 미확인 위험 집계도 critical 1개·important 5개·normal 0개이며 PBSG-013·014·018·019·020·026만 `not-confirmed`입니다.

## Task 19 참고편 전환 기록

- PBSG-013은 기존 source-map의 공식·1차 웹·데이터·Git·품질·운영·보안 적용 기록을 중앙 용어집 전체와 다시 대조하고, 2026-08-14 ISO/IEC/IEEE 12207:2026 Published Edition 2와 IEEE 1016-2009 Inactive-Reserved 상태를 직접 재확인해 `confirmed`로 전환했습니다. PB-057은 뜻이 자주 섞이는 핵심 용어를 한글·영문·약어·정의·관련 용어·흔한 오해·핵심 장으로 연결하고, 두 SDD·PRD·TDD, framework·library·runtime·platform, fallback·rollback·restore·recovery를 서로 다른 범주와 보장 범위로 구분합니다.
- 현재 중간 집계는 `confirmed` 21개, `not-confirmed` 5개입니다. 미확인 위험 집계는 critical 1개·important 4개·normal 0개이며 PBSG-014·018·019·020·026만 `not-confirmed`입니다. PBSG-014·018은 각 참고편과 제품별 현재 매핑을 실제로 적용한 뒤 별도 판정하며, PBSG-019·020·026은 Task 19의 문서·로컬 검증으로 닫지 않습니다.

## Task 19 에이전트 출력 용어집 판정

- PBSG-018은 OpenAI Codex의 current permissions·approvals·sandbox·environment modes·worktree 문서와 Anthropic Claude Code의 current permissions·permission modes·sandbox 문서를 2026-08-14에 직접 확인해 `confirmed`로 전환했습니다. PB-055는 제품 중립 용어를 행동·상태, 가능한 부작용, 확인 질문으로 설명하고 `plan mode`·`workspace-write`·`read-only`를 제품·버전·호스트별 정책 이름으로 제한합니다. sandbox·worktree·dry-run·snapshot·fallback·rollback·diff·patch·fixture·smoke test·artifact를 무해·복구 가능·검증 완료의 보장으로 확대하지 않습니다.
- 현재 중간 집계는 `confirmed` 22개, `not-confirmed` 4개입니다. 미확인 위험 집계는 critical 1개·important 3개·normal 0개이며 PBSG-014·019·020·026만 `not-confirmed`입니다. PBCA-008은 날짜 있는 current-tool 제품별 권한 매핑이 아직 없으므로 유지하고, PBSG-019·020·026은 Task 19의 문서·로컬 검증으로 닫지 않습니다.

## Task 19 방법론 관계 지도 판정

- PB-058은 PRD·Software Design Description·Spec-Driven Development, TDD·BDD, ADR, SDLC·Agile·Scrum·Kanban·DevOps·CI·continuous delivery·continuous deployment·GitFlow·trunk-based development, context·spec·harness·loop를 다섯 범주로 나누고 각 개념의 목적·출력·관계·중첩·성숙도·출처 상태·일반화 금지선을 명시했습니다. 관련 core 장에는 양방향 참고 링크를 추가했으며 공개 상태는 `draft`를 유지합니다.
- PBSG-014는 기존 직접 출처가 있는 PRD·두 SDD·TDD·ADR·SDLC·Agile·CI·전달/배포·AI 실무 표현과, 직접 원형·공식 source cluster가 없는 BDD·Scrum·Kanban·DevOps·GitFlow·trunk-based development를 분리했습니다. 2026-08-20 추가 네트워크를 실행하지 않았으므로 전체 cluster는 `not-confirmed`이고 PBCA-007도 유지합니다.
- 현재 중간 집계는 `confirmed` 22개, `not-confirmed` 4개입니다. 미확인 위험 집계는 critical 1개·important 3개·normal 0개이며 PBSG-014·019·020·026만 `not-confirmed`입니다. 문서 보강과 로컬 검증을 누락된 직접 출처 확인으로 확대하지 않습니다.

### Task 19 현재 도구 reference release candidate 판정

- Supabase 9개 current claim과 ChatGPT Sites public beta 6개 경계, Codex·Claude Code의 permission·approval·sandbox·mode 공식 문서를 2026-08-20에 직접 다시 확인했습니다. Sites의 정확한 artifact archive 계약과 named production rollback·restore는 계속 `not-confirmed`입니다.
- Vercel 공식 문서 8개 URL은 2026-08-20 직접 열기에서 모두 `HTTP 400 Unsupported content-type: text/markdown`으로 실패했습니다. 검색 결과 요약을 대체 근거로 쓰지 않고 2026-08-13을 last successful check 역사로만 보존했으며, Vercel current claim은 `fresh-check-failed`·`not-confirmed` 경계로 공개 reference에 표시했습니다.
- PBSG-018은 제품별 current label의 직접 근거와 부정 경계가 `reference/current-tool-mapping.md`에 연결되어 `confirmed`를 유지합니다. Codex의 `workspace-write`·`read-only`, Claude Code의 `plan`, 각 sandbox 경계를 확인했지만 Codex의 정확한 current `plan mode` 제품 label과 Claude Code의 정확한 `workspace-write`·`read-only` 제품 mode label은 확인된 동의어로 만들지 않았습니다.
- 현재 집계는 `confirmed` 22개, `not-confirmed` 4개로 변하지 않습니다. 미확인 위험 집계는 critical 1개·important 3개·normal 0개이며 PBSG-014·019·020·026만 `not-confirmed`입니다. PBCA-007·PBCA-011은 유지하고, 제품 기능·문서 확인을 실제 채택·account access·구현·deploy·public URL·restore 성공으로 확대하지 않습니다.

## Finding 양방향 연결

| 감사 finding | 대응 Gap ID | 목표 작업 |
|---|---|---|
| PBCA-003 | PBSG-001, PBSG-002, PBSG-003, PBSG-004, PBSG-005 | Task 12; Task 13; Task 14; Task 15; Task 16 |
| PBCA-004 | PBSG-007, PBSG-008, PBSG-009, PBSG-010 | Task 10; Task 14; Task 15; Task 16; Task 17 |
| PBCA-005 | PBSG-017 | Task 7; Task 8; Task 17 |
| PBCA-006 | PBSG-011, PBSG-012 | Task 16; Task 25 |
| PBCA-007 | PBSG-013, PBSG-014 | Task 19 |
| PBCA-008 | PBSG-018 | Task 7; Task 8; Task 19 |
| PBCA-010 | PBSG-015, PBSG-016 | Task 15 |
| PBCA-011 | PBSG-003, PBSG-012, PBSG-019, PBSG-022, PBSG-023, PBSG-024, PBSG-025, PBSG-026 | Task 13; Task 14; Task 16; Task 18; Task 25 |

PBCA-001은 출처 공백이 아니라 폐기 사례 잔존 finding이므로 위 의미 감사와 Task 9에 연결합니다. PBSG-019는 실제 시장 데이터·권리, PBSG-026은 현재 교육용 데이터 개념의 출처 공백으로 서로 분리합니다. PBSG-020은 모임 캡스톤에서 실제 제품 세부를 채택할 경우 닫아야 하는 선제 공백입니다. Task 11은 탐색·내비게이션 정렬 작업이라 이번 SOURCE 주장 묶음의 목표 작업으로 배정하지 않습니다.

## 상태 전환 규칙

1. 목표 작업은 공식·1차 자료를 직접 읽고 출처 URL 또는 문서 식별자, 확인일, 버전이나 문서 상태, 적용 범위, 일반화 금지선을 기록합니다.
2. 이미 `source-map.md`에 확인된 자료가 해당 주장까지 직접 뒷받침하면 새 출처 항목을 복제하지 않고 기존 적용 기록을 연결합니다.
3. 공식·1차 자료가 주장을 직접 뒷받침하지 않으면 상태를 유지하고 원고의 주장을 축소하거나 제거합니다. 비공식 자료는 탐색 단서일 수 있지만 `confirmed` 대체 증거가 아닙니다.
4. 행을 닫을 때 이 레지스터, `source-map.md`, 대상 공개 원고, 관련 감사 finding의 범위가 서로 일치하는지 함께 대조합니다.
