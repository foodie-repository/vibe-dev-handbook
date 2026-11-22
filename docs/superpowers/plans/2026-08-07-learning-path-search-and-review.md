# Learning Path Search and Review Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 두 캡스톤을 포함한 13장 Build Track과 검색·참조 진입점을 공개 정보 구조에 반영하고, 실질 변경된 여섯 원고를 Opus 5 Max 읽기 전용 독립 검토·Codex 재판정·자동·브라우저 검증 뒤 `review`로 재진입시킵니다.

**Architecture:** `learning-paths.md`가 Build Track 범위·순서의 단일 진실 공급원을 유지하고 Pagefind는 제목·설명·본문·용어집의 한국어·영문 별칭을 정적 인덱스로 제공합니다. 검토는 원고별 준비 기록 → 입력 지문 → Claude Code Opus 5 Max 읽기 전용 결과 → Codex 재판정 → 최소 반영 → 상태 승격의 직렬 게이트로 진행합니다.

**Tech Stack:** Markdown/MDX, Astro 7.1.6, Starlight 0.41.4, Pagefind, Node.js 22.16.0, npm 10.9.2, Claude Code `claude-opus-5` Max, Git

## Global Constraints

- 이 계획은 영향 감사·두 캡스톤·반복 사례 전환 계획이 완료된 뒤 실행합니다. 현재 도구 매핑 계획까지 완료했다면 공개 문서 수 59개를 기준으로 사용합니다.
- Build Track 목록은 `src/content/docs/start-here/learning-paths.md`에만 완전하게 정의하고 홈·로드맵·내부 문서는 참조만 합니다.
- 검색은 기존 Pagefind를 사용하며 새 검색 의존성·서버·데이터베이스를 추가하지 않습니다.
- Opus 검토는 `claude-opus-5`, effort `max`, plan mode, `Read` 전용, 안전 모드로 실행하고 Bash·파일 수정·웹 검색·웹 가져오기·MCP·플러그인·하위 에이전트를 금지합니다.
- Claude Code 실행은 사용자에게 승인된 교차검증 범위에서만 수행하고 계정·조직 식별자·세션 비밀을 검토 기록에 남기지 않습니다.
- P0가 있거나 P1을 반영·기각할 근거가 부족하거나 입력 지문이 달라지면 상태를 올리지 않습니다.
- AI 검토는 사람 `technical:`·`editorial:`·`reader:` 증거가 아니며 모든 문서는 사람 검토 전 `ready`로 올리지 않습니다.
- 산문 문단과 목록 항목의 산문은 임의 하드랩 없이 한 줄로 저장합니다.
- 원고별 검토·재판정·반영·검증을 독립 커밋하고 푸시·배포하지 않습니다.

---

### Task 1: 13장 Build Track과 두 이용 방식 공개

**Files:**
- Modify: `src/content/docs/start-here/learning-paths.md`
- Modify: `src/content/docs/start-here/how-to-use-this-guide.md`
- Modify: `src/content/docs/12-case-studies/index.md`
- Modify: `src/content/docs/reference/index.md`
- Modify: `CONTENT_MAP.md` via generator
- Modify: `PROJECT_CONTEXT.md`
- Modify: `PROJECT_MANIFEST.json`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`

**Interfaces:**
- Consumes: 모임 캡스톤, 주가 캡스톤, 현재 도구 매핑 참고 페이지와 승인된 정보 구조
- Produces: 순차 학습·검색 참조를 함께 설명하는 공개 경로와 공식 13장 목록

- [ ] **Step 1: Build Track 설명을 이중 사례로 교체**

기존 반도체 대시보드 단일 설명을 다음 역할로 바꿉니다.

```markdown
이 경로는 모임 일정·참가 신청 웹앱을 일반 개발의 기본 사례로 따라가고, 데이터 원천·품질·재현성·해석 책임이 결론을 바꾸는 지점에서는 교육용 주가 데이터 대시보드를 비교합니다. 특정 제품 사용법이 아니라 문제·아키텍처·요구·설계·작업·테스트·Git·배포·운영 증거를 연결합니다.
```

- [ ] **Step 2: 공식 목록을 13장으로 고정**

기존 핵심 개념 장 11개의 순서를 유지하고 12번에 `[첫 풀스택 프로젝트: 모임 참가 웹앱](../../12-case-studies/first-full-stack-project/)`, 13번에 `[데이터 분석가의 주가 대시보드 사례](../../12-case-studies/analytics-dashboard-case-study/)`를 둡니다. 문장도 `공식 Build Track은 다음 13개 장입니다`로 바꿉니다.

- [ ] **Step 3: 순차 학습과 검색·참조 사용법 작성**

`how-to-use-this-guide.md`에 `처음부터 따라가기`와 `필요한 내용만 찾기`를 같은 수준의 절로 추가합니다. 검색 절은 한국어 용어, 영문 용어·약어, 문제 문장, 용어집, 관련 장 링크를 순서대로 사용하고 검색으로 들어온 장의 `한 문장 정의 → 시스템 위치 → 판단 규칙 → 관련 용어`를 먼저 읽도록 안내합니다.

- [ ] **Step 4: 사례·참고 인덱스 연결**

사례 인덱스는 두 캡스톤의 독립 목적과 공통 체크 질문을 설명합니다. 참고 인덱스는 개발 용어집·에이전트 출력 용어집·현재 도구 매핑 페이지를 `영속 개념`, `작업 로그 용어`, `날짜가 있는 제품 예시`로 구분합니다.

- [ ] **Step 5: 상태·빌드·커밋**

```bash
npm run sync:content-map
ASTRO_TELEMETRY_DISABLED=1 npm run check
rg -n "공식 Build Track은 다음 13개 장|첫 풀스택 프로젝트: 모임 참가 웹앱|데이터 분석가의 주가 대시보드 사례|필요한 내용만 찾기" src/content/docs/start-here/learning-paths.md src/content/docs/start-here/how-to-use-this-guide.md
! rg -n "공개 반도체|12개 장" src/content/docs/start-here/learning-paths.md
git diff --check
git add src/content/docs/start-here/learning-paths.md src/content/docs/start-here/how-to-use-this-guide.md src/content/docs/12-case-studies/index.md src/content/docs/reference/index.md CONTENT_MAP.md PROJECT_CONTEXT.md PROJECT_MANIFEST.json ROADMAP.md CHANGELOG.md
git commit -m "docs: publish dual-case learning path"
```

Expected: 현재 도구 매핑 계획 완료 기준 공개 문서 59개, 전체 `review` 4개·`draft` 42개·`seed` 13개·`ready` 0개, 공식 Build Track `review` 3개·`draft` 10개.

### Task 2: 여섯 원고의 독립 검토 계약 작성

**Files:**
- Create: `docs/project/reviews/2026-08-07-first-full-stack-project-review-prep.md`
- Create: `docs/project/reviews/2026-08-07-stock-dashboard-case-study-review-prep.md`
- Create: `docs/project/reviews/2026-08-07-software-is-a-system-review-prep.md`
- Create: `docs/project/reviews/2026-08-07-client-server-full-stack-review-prep.md`
- Create: `docs/project/reviews/2026-08-07-http-request-response-review-prep.md`
- Create: `docs/project/reviews/2026-08-07-api-database-auth-review-prep.md`

**Interfaces:**
- Consumes: 현재 원고, 사례 브리프, 다이어그램, 출처 지도, 품질 루브릭
- Produces: 원고별 P0·P1·P2·루브릭·출처 질문과 고정된 읽기 전용 입력 목록

- [ ] **Step 1: 공통 검토 계약 작성**

여섯 문서 모두 `목적과 현재 상태`, `자체 품질 루브릭`, `치명 항목`, `입력 파일`, `우선순위 정의`, `검토 질문`, `요구 출력`, `입력 지문`, `승격 경계`를 포함합니다. 요구 출력은 `검토 범위와 전제`, `P0 치명 오류`, `P1 review 전 필수`, `P2 개선 권장`, `잘된 점`, `9항목 루브릭`, `추가 출처 확인 목록`, `상태 권고` 순서이며 지적이 없으면 `없음`을 쓰게 합니다.

- [ ] **Step 2: 원고별 입력 목록 고정**

모든 검토는 `AGENTS.md`, `PROJECT_CONTEXT.md`, `RULES.md`, `content-lifecycle.md`, `quality-rubric.md`, `editorial-guide.md`, `research/source-map.md`, 승인 명세, 개발·에이전트 용어집을 공통 입력으로 사용합니다. 여기에 다음 대상별 입력을 더합니다.

| 대상 | 추가 입력 |
|---|---|
| 첫 풀스택 프로젝트 | `meeting-webapp-case-brief.md`, 원고, meeting SVG·MMD, API·테스트·배포·운영 장 |
| 주가 대시보드 | `stock-dashboard-case-brief.md`, 원고, analytics SVG·MMD, 테스트·배포·운영 장 |
| 소프트웨어는 시스템입니다 | 원고, 두 캡스톤, analytics SVG, 학습 경로 |
| 클라이언트·서버·풀스택 | 원고, meeting 브리프, HTTP·API 장, 모임 캡스톤 |
| HTTP 요청과 응답 | 원고, client-server·API 장, meeting 브리프, 모임 캡스톤 |
| API·데이터베이스·인증 | `meeting-api-database-auth-research-brief.md`, 원고, API SVG·MMD, HTTP·데이터 모델·보안·운영 장 |

- [ ] **Step 3: 원고별 핵심 검토 질문 고정**

첫 풀스택은 W-01~W-05 추적·비목표·정원 동시성·운영 인수, 주가 캡스톤은 fixture 고지·거래일·가격 기준·단위·값 상태·투자 판단 금지, 시스템 장은 두 사례 비교가 여섯 렌즈를 흐리지 않는지, 풀스택 장은 정적 안내와 동적 참가 상태의 권위 경계, HTTP 장은 GET·POST·DELETE·응답 유실·재시도, API 장은 주체·대상·행동·중복·정원·트랜잭션·commit 뒤 응답 유실을 질문합니다.

- [ ] **Step 4: 자체 루브릭과 입력 지문 기록**

각 대상은 9개 항목을 0~2점으로 평가하고 치명 항목을 별도로 판정합니다. 입력 목록 순서대로 `shasum -a 256`을 계산해 파일별 지문과 결합 지문을 해당 준비 문서에 기록합니다. 원고를 수정한 뒤 같은 준비 지문을 검토 입력으로 재사용하지 않습니다.

- [ ] **Step 5: 준비 문서 검증과 커밋**

```bash
rg -n "P0 치명 오류|P1 review 전 필수|P2 개선 권장|9항목 루브릭|입력 지문|승격 경계" docs/project/reviews/2026-08-07-*-review-prep.md
! rg -n -e 'TB''D' -e 'TO''DO' -e '추후'' 결정' -e '미''정' docs/project/reviews/2026-08-07-*-review-prep.md
npm run check:static
git diff --check
git add docs/project/reviews/2026-08-07-*-review-prep.md
git commit -m "docs: prepare dual-case independent reviews"
```

Expected: 여섯 준비 기록에 대상별 입력·질문·실제 SHA-256이 있고 원고 상태는 모두 `draft` 그대로.

### Task 3: Opus 5 Max 읽기 전용 검토를 원고별로 실행

**Files:**
- Create: `docs/project/reviews/2026-08-07-first-full-stack-project-opus5-review.md`
- Create: `docs/project/reviews/2026-08-07-stock-dashboard-case-study-opus5-review.md`
- Create: `docs/project/reviews/2026-08-07-software-is-a-system-opus5-review.md`
- Create: `docs/project/reviews/2026-08-07-client-server-full-stack-opus5-review.md`
- Create: `docs/project/reviews/2026-08-07-http-request-response-opus5-review.md`
- Create: `docs/project/reviews/2026-08-07-api-database-auth-opus5-review.md`

**Interfaces:**
- Consumes: Task 2의 고정 입력·프롬프트, Claude Code 사용 승인과 가용 한도
- Produces: 원고별 실행 메타데이터·입력 불변·Opus 결과 전문

- [ ] **Step 1: 실행 전 Claude Code와 권한 확인**

```bash
claude --version
git status --short
```

Expected: 로그인된 Claude Code 버전 확인, 계획 문서 외 예상하지 않은 변경 없음. 모델 호출 전 세션 한도 오류가 나면 결과 없음으로 기록하고 해당 원고는 `draft`를 유지합니다.

- [ ] **Step 2: 첫 풀스택과 주가 캡스톤을 직렬 검토**

각 준비 문서의 입력만 `Read`로 허용하고 `claude-opus-5`, effort `max`, plan mode, 안전 모드로 한 원고씩 실행합니다. 결과 JSON의 모델·종료 코드·처리 시간·턴 수·웹 요청·권한 거부·마지막 assistant 결과 전문을 대응 실행 기록에 저장합니다. 두 실행 사이에 원고를 수정하지 않습니다.

- [ ] **Step 3: 시스템·풀스택·HTTP·API 장을 직렬 검토**

같은 안전 계약으로 한 원고씩 실행하고, 앞선 검토 결과를 다음 검토 입력에 넣지 않습니다. 독립 리뷰어는 현재 원고와 지정된 인접 자료만 읽고 Codex의 예상 판정이나 과거 Opus 결과를 보지 않습니다.

- [ ] **Step 4: 입력 불변과 정상 결과 판정**

각 실행 직후 준비 문서와 같은 순서로 SHA-256을 다시 계산합니다. 전후 결합 지문과 대상 원고 지문이 모두 같고 종료 코드 0·결과 본문이 있을 때만 정상 결과로 기록합니다. API `429`, 세션 한도, 본문 없음, 모델 불일치, 입력 변경은 정상 결과로 세지 않습니다.

- [ ] **Step 5: 실행 기록 검증과 커밋**

```bash
rg -n "실제 주 모델: `claude-opus-5`|추론 강도: `max`|종료 코드: `0`|검토 전|검토 후|P0 치명 오류|P1 review 전 필수" docs/project/reviews/2026-08-07-*-opus5-review.md
git diff -- src/content/docs src/assets research
git diff --check
git add docs/project/reviews/2026-08-07-*-opus5-review.md
git commit -m "docs: record dual-case Opus reviews"
```

Expected: 공개 원고·자산·조사 diff 0줄, 정상 결과가 없는 대상은 실행 실패 사실만 기록되고 다음 Task의 승격 대상에서 제외됨.

### Task 4: Opus 지적을 저장소 근거에 재판정하고 최소 반영

**Files:**
- Create: `docs/project/reviews/2026-08-07-first-full-stack-project-opus5-adjudication.md`
- Create: `docs/project/reviews/2026-08-07-stock-dashboard-case-study-opus5-adjudication.md`
- Create: `docs/project/reviews/2026-08-07-software-is-a-system-opus5-adjudication.md`
- Create: `docs/project/reviews/2026-08-07-client-server-full-stack-opus5-adjudication.md`
- Create: `docs/project/reviews/2026-08-07-http-request-response-opus5-adjudication.md`
- Create: `docs/project/reviews/2026-08-07-api-database-auth-opus5-adjudication.md`
- Modify as accepted findings require: the corresponding six public documents, their briefs, diagrams, `research/source-map.md`, `src/content/docs/reference/development-glossary.md`, `src/content/docs/reference/agent-output-glossary.md`

**Interfaces:**
- Consumes: 정상 Opus 결과, 실제 원고, 승인 명세, 공식 출처 범위와 프로젝트 규칙
- Produces: 지적별 수용·부분 수용·기각·보류 근거와 필요한 최소 원고 수정

- [ ] **Step 1: 지적별 재판정 표 작성**

각 P0·P1·P2를 `ID`, `Opus 주장`, `실제 근거`, `판정`, `최소 반영`, `검증` 열로 기록합니다. `수용`, `부분 수용`, `기각`, `보류` 중 하나를 사용하고 Opus 권고를 그대로 반영하지 않습니다. P0는 모두 해소 전 중단하고, P1은 수용·부분 수용 반영 또는 근거 있는 기각이 완료돼야 다음 단계로 갑니다.

- [ ] **Step 2: 캡스톤 두 장을 각각 반영·검증·커밋**

첫 풀스택은 W-01~W-05·권한·동시성·운영 인수 범위 안에서만, 주가 캡스톤은 fixture·데이터 품질·투자 안전 경계 안에서만 수정합니다. 각 장별로 `npm run sync:content-map`, `ASTRO_TELEMETRY_DISABLED=1 npm run check`, 1440×1000·390×844 렌더링을 실행하고 대응 재판정 문서·원고·자산·출처만 별도 커밋합니다.

```bash
git commit -m "docs: apply meeting capstone review"
git commit -m "docs: apply stock dashboard review"
```

- [ ] **Step 3: 시스템·풀스택·HTTP·API 장을 각각 반영·검증·커밋**

각 장은 정의와 사례의 경계를 유지하고 인접 장으로 범위를 넘기지 않습니다. 장별 정적·전체 빌드와 두 뷰포트 확인 후 대응 재판정 문서·원고·필요 자산·출처만 별도 커밋합니다.

```bash
git commit -m "docs: apply system chapter review"
git commit -m "docs: apply full-stack chapter review"
git commit -m "docs: apply HTTP chapter review"
git commit -m "docs: apply backend chapter review"
```

- [ ] **Step 4: 반영 후 자체 루브릭 재평가**

각 준비 기록에 반영 후 자체 점수와 남은 한계를 추가합니다. 독립 점수와 자체 점수를 섞지 않고, 직접 출처가 확인되지 않은 항목은 점수와 별개로 `ready` 차단 사유에 남깁니다.

### Task 5: 여섯 원고를 `review`로 재진입시키고 상태 동기화

**Files:**
- Modify: the six target public documents
- Modify: `CONTENT_MAP.md` via generator
- Modify: `docs/project/reviews/2026-08-05-build-track-review-status-audit.md`
- Modify: `PROJECT_CONTEXT.md`
- Modify: `PROJECT_MANIFEST.json`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`
- Modify: `VERIFICATION_REPORT.md`

**Interfaces:**
- Consumes: 정상 Opus 결과, 입력 불변, 재판정·필수 반영, 자동·브라우저 증거
- Produces: 새 원고 정본을 가리키는 `request:` 증거와 공식 Build Track `review` 9개·`draft` 4개 상태

- [ ] **Step 1: frontmatter 증거 추가**

정상 결과와 필수 반영을 모두 갖춘 원고만 `contentStatus: review`로 바꾸고 다음 정확한 `request:` 경로와 자동 증거를 추가합니다.

| 공개 원고 | `request:` 경로 |
|---|---|
| `first-full-stack-project.md` | `docs/project/reviews/2026-08-07-first-full-stack-project-opus5-review.md` |
| `analytics-dashboard-case-study.md` | `docs/project/reviews/2026-08-07-stock-dashboard-case-study-opus5-review.md` |
| `software-is-a-system.md` | `docs/project/reviews/2026-08-07-software-is-a-system-opus5-review.md` |
| `client-server-full-stack.md` | `docs/project/reviews/2026-08-07-client-server-full-stack-opus5-review.md` |
| `http-request-response.md` | `docs/project/reviews/2026-08-07-http-request-response-opus5-review.md` |
| `api-database-auth.md` | `docs/project/reviews/2026-08-07-api-database-auth-opus5-review.md` |

각 원고의 `reviewEvidence`에는 위 `request:` 한 항목과 `automated: ASTRO_TELEMETRY_DISABLED=1 npm run check, 2026-08-07` 한 항목을 기록합니다.

- [ ] **Step 2: 콘텐츠 지도와 상태 감사 갱신**

```bash
npm run sync:content-map
ASTRO_TELEMETRY_DISABLED=1 npm run check
```

Expected: 공개 문서 59개, 전체 `review` 10개·`draft` 36개·`seed` 13개·`ready` 0개. 공식 Build Track 13개 중 `review` 9개·`draft` 4개·`seed` 0개·`ready` 0개. 남은 draft는 `Git과 GitHub는 다릅니다`, `빌드·배포·도메인·DNS`, `로그·모니터링·백업`, `AI 코딩 에이전트와 일하는 법`.

- [ ] **Step 3: 사람 검토 경계와 프로젝트 문맥 기록**

상태 감사·문맥·검증 보고서에 새 `review`가 AI 독립 검토 시작 상태이고 사람 `technical:`·`editorial:`·실제 `reader:` 증거는 여전히 0개라고 기록합니다. 현재 도구 매핑 페이지와 학습 경로·인덱스는 별도 `draft`이며 Build Track 진행률에 잘못 포함하지 않습니다.

- [ ] **Step 4: 상태 커밋**

```bash
git add src/content/docs/01-mental-models/software-is-a-system.md src/content/docs/03-full-stack/client-server-full-stack.md src/content/docs/03-full-stack/http-request-response.md src/content/docs/04-backend-data/api-database-auth.md src/content/docs/12-case-studies/first-full-stack-project.md src/content/docs/12-case-studies/analytics-dashboard-case-study.md CONTENT_MAP.md docs/project/reviews/2026-08-05-build-track-review-status-audit.md PROJECT_CONTEXT.md PROJECT_MANIFEST.json ROADMAP.md CHANGELOG.md VERIFICATION_REPORT.md
git diff --cached --check
git commit -m "docs: restore reviewed dual-case build track"
```

Expected: 상태·검증 문맥만 커밋되고 작업 트리가 깨끗함.

### Task 6: 한국어·영문 검색과 최종 전환 게이트 검증

**Files:**
- Verify: `astro.config.mjs`
- Verify: `dist/pagefind/`
- Modify with actual results: `VERIFICATION_REPORT.md`
- Modify: `PROJECT_CONTEXT.md`
- Modify: `PROJECT_MANIFEST.json`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`

**Interfaces:**
- Consumes: 13장 학습 경로, 여섯 `review` 원고, 제품 매핑 참고 페이지, Pagefind 빌드
- Produces: 순차 학습과 검색 참조가 모두 작동하며 Phase 1의 남은 네 장이 명확한 최종 체크포인트

- [ ] **Step 1: 공개 옛 사례 표현 0건 확인**

```bash
! rg -n "반도체|북마크|bookmark|기업 A|기업 B|reportId|rpt-42" src/content/docs src/assets/diagrams
rg -n "모임 참가|정원|주가|fixture|투자 판단|영속 개념|현재 도구" src/content/docs/start-here src/content/docs/12-case-studies src/content/docs/reference/current-tool-mapping.md
```

Expected: 옛 공개 사례 표현 0건, 두 사례·영속 개념·도구 매핑 표현 존재. 과거 `docs/project/reviews/`의 옛 표현은 검사 대상에서 제외.

- [ ] **Step 2: 전체 빌드와 Pagefind 인덱스 확인**

```bash
ASTRO_TELEMETRY_DISABLED=1 npm run check
find dist/pagefind -type f | wc -l
du -sh dist/pagefind
rg -l "data-pagefind-body|aria-label=\"검색\"" dist | wc -l
```

Expected: HTML 60개와 검색 인덱스 생성, 빌드 산출물 오류 0개. 파일 수·크기는 실제 결과를 기록하고 고정값을 미리 주장하지 않습니다.

- [ ] **Step 3: 데스크톱·모바일 검색 질의 QA**

1440×1000과 390×844에서 `모임`, `정원`, `authentication`, `authorization`, `주가`, `fixture`, `fallback`, `Supabase`, `Vercel`을 검색합니다. 각 질의는 관련 장 또는 용어집·현재 도구 페이지를 최소 한 개 반환하고 결과 클릭 후 제목·상태 배지·문맥이 질의와 맞아야 합니다. Codex Sites가 공식 근거 부족으로 미게시됐다면 질의 수용 기준에서 제외합니다.

- [ ] **Step 4: 네비게이션·접근성·콘솔 확인**

두 캡스톤, 학습 경로, 현재 도구 매핑 페이지에서 H1 1개, 이전·다음 또는 사이드바 이동, 표·코드·다이어그램 대체 텍스트, 키보드 검색 열기·닫기, 페이지 전역 가로 넘침 0개, 콘솔 오류·경고 0개를 확인합니다.

- [ ] **Step 5: 최종 체크포인트와 다음 작업 기록**

검증 보고서와 프로젝트 문맥에 실제 명령 결과와 검색 질의 결과를 기록하고 다음 독립 작업을 `Git과 GitHub는 다릅니다`의 Opus 5 Max 검토로 고정합니다. Git·배포·운영·AI 에이전트 네 장과 사람 기술·편집·독자 검토가 남아 있으므로 Phase 1 완료·ready·공개 배포라고 표현하지 않습니다.

- [ ] **Step 6: 검증 기록 커밋**

```bash
git add VERIFICATION_REPORT.md PROJECT_CONTEXT.md PROJECT_MANIFEST.json ROADMAP.md CHANGELOG.md
git diff --cached --check
git commit -m "docs: verify dual-case learning and search"
git status --short --branch
```

Expected: 검증 문맥만 커밋, 깨끗한 로컬 작업 트리, 푸시·배포 없음.
