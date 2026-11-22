# Recurring Case Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 핵심 개념 장의 반도체·보고서 사례를 승인된 모임 웹앱과 교육용 주가 대시보드 역할에 맞게 바꾸고 실질 변경과 표면 편집을 구분해 콘텐츠 상태와 검토 증거를 정확하게 유지합니다.

**Architecture:** 모임 웹앱은 쓰기·사용자 상태·인증·인가·동시성의 기본 사례로, 주가 대시보드는 원천·품질·재현성·정적 전달의 비교 사례로 사용합니다. 사용자 문제·필드·권한·테스트 오라클이 바뀌는 장은 변경 시작 시 `draft`로 내리고, 이름만 바뀌는 장은 별도 표면 편집 검증 기록을 남긴 뒤 현재 `review`를 유지합니다.

**Tech Stack:** Markdown/MDX, SVG, Mermaid, Astro 7.1.6, Starlight 0.41.4, Node.js 22.16.0, npm 10.9.2, Git

## Global Constraints

- 이 계획은 `2026-08-07-dual-case-transition-impact-audit.md`, 모임 캡스톤과 주가 캡스톤 커밋이 완료된 뒤 실행합니다.
- 개념 정의를 사례로 대체하지 않고 정의·시스템 위치·판단 규칙 다음에 사례를 배치합니다.
- 모든 장에 두 사례를 넣지 않고 판단 차이가 실제로 필요한 곳만 비교합니다.
- 실질 변경된 `review` 원고는 같은 변경 커밋에서 `draft`로 내리고 기존 `reviewEvidence`를 제거합니다.
- 과거 `docs/project/reviews/` 기록과 원래 입력 지문은 수정하지 않습니다.
- 제품 UI·버튼·요금·현재 기능은 포함하지 않습니다.
- 산문 문단과 목록 항목의 산문은 임의 하드랩 없이 한 줄로 저장합니다.
- 각 작업은 콘텐츠 지도·상태 문맥·검증을 함께 갱신해 독립 커밋하며 푸시·배포하지 않습니다.

---

### Task 1: 시스템 장을 두 사례의 책임 차이로 개정

**Files:**
- Modify: `src/content/docs/01-mental-models/software-is-a-system.md`
- Modify: `research/source-map.md`
- Modify: `CONTENT_MAP.md` via generator
- Modify: `PROJECT_CONTEXT.md`
- Modify: `PROJECT_MANIFEST.json`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`

**Interfaces:**
- Consumes: 모임 웹앱의 역할·상태 계약과 주가 캡스톤의 D-01~D-05·분석 다이어그램
- Produces: 화면 성공·업무 상태 성공·데이터 의미 성공·운영 성공을 두 사례로 구분하는 `draft` 시스템 장

- [ ] **Step 1: frontmatter 상태 재판정**

`contentStatus: review`를 `contentStatus: draft`로 바꾸고 기존 `reviewEvidence` 블록을 제거합니다. `description`과 학습 목표는 여섯 시스템 렌즈의 영속 정의를 유지합니다.

- [ ] **Step 2: 도입과 여섯 렌즈 사례 개정**

도입의 “반도체 지표 대시보드”를 “모임 참가 웹앱”으로 바꾸고 화면이 보여도 참가 상태·정원·권한·복구가 완료됐다고 할 수 없음을 설명합니다. 기존 `데이터 분석 대시보드를 시스템으로 보기` 절과 `analytics-dashboard-architecture.svg`는 주가 fixture의 원천·거래일·가격 기준·품질·전달 책임을 보여 주는 보조 비교로 유지합니다. 표에는 다음 대비를 포함합니다.

```markdown
| 렌즈 | 모임 참가 웹앱 | 주가 데이터 대시보드 |
|---|---|---|
| 권위 있는 상태 | 이벤트·참가 관계·모집 상태 | 승인된 dataset_version·값 상태·원천/변환 버전 |
| 핵심 실패 | 권한 우회·중복 참가·정원 초과 | 잘못된 단위·거래일·가격 기준·차단 값 게시 |
| 완료 증거 | 데이터 재조회·권한 부정 테스트·동시 요청·공개 흐름 | fixture 고지·품질 게이트·lineage·표/차트 일치·갱신 복구 |
```

- [ ] **Step 3: AI 작업 지시와 연습 개정**

“완벽하게 만들어 주세요” 반례는 모임 참가 웹앱으로 바꾸고 목표·비목표·역할·정원·권한·검증 증거가 있는 작업 계약으로 개선합니다. 연습은 독자가 모임 웹앱 또는 자신의 프로젝트 중 하나를 선택해 구성요소·경계·상태·흐름·제약·증거 지도를 작성하게 합니다.

- [ ] **Step 4: 상태·검증·커밋**

```bash
npm run sync:content-map
npm run check:static
node -e "const m=JSON.parse(require('fs').readFileSync('PROJECT_MANIFEST.json','utf8')); console.log(m.inventory.contentStatus)"
! rg -n "반도체" src/content/docs/01-mental-models/software-is-a-system.md
git diff --check
git add src/content/docs/01-mental-models/software-is-a-system.md research/source-map.md CONTENT_MAP.md PROJECT_CONTEXT.md PROJECT_MANIFEST.json ROADMAP.md CHANGELOG.md
git commit -m "docs: migrate system chapter case study"
```

Expected: 이 순서의 앞선 계획만 완료된 기준에서 전체 상태 `review` 7개·`draft` 38개·`seed` 13개·`ready` 0개, 공식 12장 Build Track `review` 6개·`draft` 6개. 새 독립 검토 전 `draft` 유지.

### Task 2: 클라이언트·서버 장을 모임 조회·참가 흐름으로 개정

**Files:**
- Modify: `src/content/docs/03-full-stack/client-server-full-stack.md`
- Modify: `research/source-map.md`
- Modify: `CONTENT_MAP.md` via generator
- Modify: `PROJECT_CONTEXT.md`
- Modify: `PROJECT_MANIFEST.json`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`

**Interfaces:**
- Consumes: `meeting-webapp-case-brief.md`의 W-01·W-03·W-04
- Produces: 정적 공개 설명과 동적 참가 가능 상태를 구분하는 `draft` 풀스택 장

- [ ] **Step 1: frontmatter 상태 재판정**

`contentStatus`를 `draft`로 내리고 기존 `reviewEvidence`를 제거합니다. 클라이언트·서버 역할 축과 프런트엔드·백엔드 책임 축의 정의는 바꾸지 않습니다.

- [ ] **Step 2: 전체 흐름 표를 모임 사용자 행동으로 교체**

기업·기간·지표 선택 흐름을 `공개 모임 상세 조회 → 로그인 상태 확인 → 참가 요청 → 서버 계약·인가·정원 판단 → registrations 확정 → 응답 → 화면 상태 → 사용자 완료`로 바꿉니다. 각 단계에 브라우저 Network, 서버 로그, 데이터 재조회, UI 상태, 사용자 성공 중 무엇이 직접 증거인지 적습니다.

- [ ] **Step 3: 정적·동적 선택과 실패 분기 개정**

변하지 않는 행사 안내 사본은 정적 전달할 수 있지만 남은 자리·참가 상태·마감은 동시 변경되는 권위 상태이므로 정적 사본만으로 쓰기 결정을 할 수 없다는 경계를 설명합니다. 늦은 응답, 중복 클릭, 취소 뒤 재참가, 마지막 한 자리 충돌, 캐시된 정원 표시를 각각 상태 원본과 사본 문제로 연결합니다.

- [ ] **Step 4: 상태·검증·커밋**

```bash
npm run sync:content-map
npm run check:static
! rg -n "반도체|기업 두 곳|영업이익률" src/content/docs/03-full-stack/client-server-full-stack.md
rg -n "공개 모임|참가|정원|상태 원본|늦은 응답|중복" src/content/docs/03-full-stack/client-server-full-stack.md
git diff --check
git add src/content/docs/03-full-stack/client-server-full-stack.md research/source-map.md CONTENT_MAP.md PROJECT_CONTEXT.md PROJECT_MANIFEST.json ROADMAP.md CHANGELOG.md
git commit -m "docs: migrate full-stack chapter case study"
```

Expected: 전체 상태 `review` 6개·`draft` 39개·`seed` 13개·`ready` 0개, 공식 12장 Build Track `review` 5개·`draft` 7개.

### Task 3: HTTP 장을 조회·참가·취소 계약으로 개정

**Files:**
- Modify: `src/content/docs/03-full-stack/http-request-response.md`
- Modify: `research/source-map.md`
- Modify: `CONTENT_MAP.md` via generator
- Modify: `PROJECT_CONTEXT.md`
- Modify: `PROJECT_MANIFEST.json`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`

**Interfaces:**
- Consumes: 모임 캡스톤의 GET·POST·DELETE 행동과 W-04 충돌 계약
- Produces: HTTP 메시지와 업무 성공·실패·재시도 위험을 구분하는 `draft` 장

- [ ] **Step 1: frontmatter 상태 재판정**

`contentStatus`를 `draft`로 내리고 기존 `reviewEvidence`를 제거합니다. HTTP 메서드의 안전성·멱등성, 상태 코드 범주, 브라우저 정책 경계의 영속 정의는 유지합니다.

- [ ] **Step 2: 예제 요청·응답을 모임 흐름으로 교체**

기존 반도체 조회 절을 다음 세 요청으로 바꿉니다.

```http
GET /events/evt-42
POST /events/evt-42/registrations
DELETE /events/evt-42/registrations/me
```

`GET`은 공개 조회, `POST`는 인증·중복·정원·마감 판단이 필요한 쓰기, `DELETE`는 자신의 참가만 취소하는 계약으로 설명합니다. 응답 예시는 `2xx`, 인증 실패, 권한 거절, 입력 오류, 이미 참가함·정원 마감·버전 충돌, 서버 오류와 응답 유실을 구분하되 특정 상태 코드 하나를 모든 API의 유일한 정답으로 고정하지 않습니다.

- [ ] **Step 3: 재시도와 AI 검토 연습 개정**

참가 `POST`의 응답을 받지 못했을 때 같은 요청을 즉시 반복하면 중복 신청이나 마지막 자리 판단에 영향을 줄 수 있으므로 현재 상태 재조회·서버의 중복 방지 계약·처리 기록을 먼저 확인하게 합니다. 읽기 전용 AI 검토 요청은 실제 구현을 수정하지 않고 메서드·경로·헤더·본문·상태·재시도 정책·테스트 증거를 보고하도록 씁니다.

- [ ] **Step 4: 상태·검증·커밋**

```bash
npm run sync:content-map
npm run check:static
! rg -n "반도체" src/content/docs/03-full-stack/http-request-response.md
rg -n "GET /events/evt-42|POST /events/evt-42/registrations|DELETE /events/evt-42/registrations/me|재시도|중복|정원" src/content/docs/03-full-stack/http-request-response.md
git diff --check
git add src/content/docs/03-full-stack/http-request-response.md research/source-map.md CONTENT_MAP.md PROJECT_CONTEXT.md PROJECT_MANIFEST.json ROADMAP.md CHANGELOG.md
git commit -m "docs: migrate HTTP chapter case study"
```

Expected: 전체 상태 `review` 5개·`draft` 40개·`seed` 13개·`ready` 0개, 공식 12장 Build Track `review` 4개·`draft` 8개.

### Task 4: API·데이터베이스·인증 장을 모임 참가 트랜잭션으로 개정

**Files:**
- Create: `research/meeting-api-database-auth-research-brief.md`
- Modify: `src/content/docs/04-backend-data/api-database-auth.md`
- Modify: `src/assets/diagrams/source/api-database-auth-flow.mmd`
- Modify: `src/assets/diagrams/api-database-auth-flow.svg`
- Modify: `research/source-map.md`
- Modify: `CONTENT_MAP.md` via generator
- Modify: `PROJECT_CONTEXT.md`
- Modify: `PROJECT_MANIFEST.json`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`
- Preserve: `research/api-database-auth-research-brief.md`

**Interfaces:**
- Consumes: W-03·W-04, 현재 확인된 OpenAPI 3.2.0·OWASP·NIST·IETF·PostgreSQL 18·MDN 출처 범위
- Produces: 참가 요청을 계약·인증·인가·업무 규칙·트랜잭션·응답 증거로 연결하는 `draft` 장과 7단계 다이어그램

- [ ] **Step 1: 새 조사 브리프와 상태 재판정**

새 브리프는 검증할 주장을 `API 계약`, `인증과 세션`, `자신의 참가 관계에 대한 인가`, `주최자 소유권`, `고유성`, `정원과 마감`, `동시 요청`, `트랜잭션`, `commit 뒤 응답 유실`, `비밀 없는 로그`로 고정하고 기존 출처 ID의 적용 범위와 새 제품 출처가 필요하지 않음을 기록합니다. 공개 원고는 `draft`로 내리고 기존 `reviewEvidence`를 제거합니다.

- [ ] **Step 2: 보고서 필드와 행동을 참가 계약으로 교체**

원고의 `reportId`, 보고서 이름·기간·버전·변경 이력을 `eventId`, 참가자 주체, registrations 관계, event.status, capacity, 활성 참가 수와 취소 이력으로 교체합니다. 인증은 주체 확인, 인가는 자신의 참가 취소·주최자 전용 수정, 업무 규칙은 중복·정원·마감, 데이터베이스는 이벤트와 참가 관계의 일관성 책임으로 구분합니다.

- [ ] **Step 3: 동시성과 오류 오라클 작성**

두 참가자가 마지막 한 자리에 동시에 신청할 때 둘 다 사전 조회에서 가능해 보여도 확정 경계에서는 한 요청만 성공해야 한다는 오라클을 설명합니다. 가능한 구현 전략을 특정 제품으로 고정하지 않고 트랜잭션 격리·조건부 갱신·제약과 재시도 정책을 설계 대안으로 구분하며, 실제 선택은 데이터베이스와 요구에 맞춰 검증해야 한다고 적습니다.

- [ ] **Step 4: 7단계 다이어그램 동기화**

Mermaid와 SVG의 제목을 `모임 참가 요청의 API·인증·인가·데이터베이스 책임 흐름`으로 바꾸고 다음 단계를 일치시킵니다.

```text
1. 요청과 eventId 식별
2. API 계약
3. 인증과 요청 주체
4. 이벤트·참가 관계 조회와 인가
5. 중복·모집 상태·정원 업무 규칙
6. registrations와 정원 판단 트랜잭션·commit
7. 응답·재조회·안전한 로그·동시성 테스트
```

실패 분기는 형식 오류, 인증 실패, 권한 거절, 중복·마감·정원 충돌, rollback·서버 오류, commit 뒤 응답 전달 실패를 포함합니다.

- [ ] **Step 5: 상태·검증·커밋**

```bash
npm run sync:content-map
ASTRO_TELEMETRY_DISABLED=1 npm run check
! rg -n "반도체|보고서|reportId|rpt-42" src/content/docs/04-backend-data/api-database-auth.md src/assets/diagrams/api-database-auth-flow.svg src/assets/diagrams/source/api-database-auth-flow.mmd
rg -n "eventId|registrations|중복|모집 상태|정원|동시|commit 뒤 응답" src/content/docs/04-backend-data/api-database-auth.md src/assets/diagrams/api-database-auth-flow.svg
git diff -- research/api-database-auth-research-brief.md docs/project/reviews/2026-08-06-api-database-auth-*.md
git diff --check
git add research/meeting-api-database-auth-research-brief.md research/source-map.md src/content/docs/04-backend-data/api-database-auth.md src/assets/diagrams/api-database-auth-flow.svg src/assets/diagrams/source/api-database-auth-flow.mmd CONTENT_MAP.md PROJECT_CONTEXT.md PROJECT_MANIFEST.json ROADMAP.md CHANGELOG.md
git commit -m "docs: migrate backend chapter to meeting flow"
```

Expected: 과거 브리프·검토 기록 diff 0줄, 전체 상태 `review` 4개·`draft` 41개·`seed` 13개·`ready` 0개, 공식 12장 Build Track `review` 3개·`draft` 9개.

### Task 5: 브라우저·PRD 장의 표면 편집을 별도 검증

**Files:**
- Create: `docs/project/reviews/2026-08-07-surface-case-edits-verification.md`
- Modify: `src/content/docs/05-frontend/browser-dom-rendering.md`
- Modify: `src/content/docs/06-requirements-design/prd-sdd-tdd.md`
- Modify: `research/source-map.md`
- Modify: `CONTENT_MAP.md` via generator
- Modify: `PROJECT_CONTEXT.md`
- Modify: `CHANGELOG.md`

**Interfaces:**
- Consumes: 영향 감사의 표면 편집 판정과 주가 캡스톤의 fixture 고지
- Produces: 학습 결론·요구·오라클을 바꾸지 않은 최소 문구·링크 변경과 상태 유지 증거

- [ ] **Step 1: 허용 변경 범위 고정**

`browser-dom-rendering.md`는 두 `반도체` 표현만 `교육용 주가 fixture`로 바꾸고 Network `200`이 화면과 데이터 의미를 증명하지 않는 기존 결론을 유지합니다. `prd-sdd-tdd.md`는 한 `공개 반도체 데이터 대시보드` 표현만 `교육용 주가 데이터 대시보드`로 바꾸고 `FR-014`의 원천·기준 시점·갱신 상태 요구와 추적 표는 바꾸지 않습니다. 필드·권한·테스트·출처가 달라질 필요가 발견되면 이 Task를 중단하고 해당 파일을 실질 변경 계획으로 분리합니다.

- [ ] **Step 2: 표면 편집 검증 기록 작성**

검증 문서에 각 파일의 변경 전후 문장, 유지된 학습 목표, 바뀌지 않은 입력·출력·위험·오라클·출처, `review` 유지 이유와 자동·브라우저 확인 결과를 기록합니다. 과거 독립 검토가 새 주가 사실을 검토했다고 표현하지 않습니다.

- [ ] **Step 3: 자동·렌더링 검증**

```bash
npm run sync:content-map
ASTRO_TELEMETRY_DISABLED=1 npm run check
git diff --word-diff=plain -- src/content/docs/05-frontend/browser-dom-rendering.md src/content/docs/06-requirements-design/prd-sdd-tdd.md
! rg -n "반도체" src/content/docs/05-frontend/browser-dom-rendering.md src/content/docs/06-requirements-design/prd-sdd-tdd.md
```

Expected: 두 파일 diff가 도메인 표시와 필요한 링크 문맥에 한정되고 `contentStatus: review`·기존 `request:` 증거가 유지됨. 1440×1000과 390×844에서 두 페이지의 상태 배지, 변경 문구, 링크 이동, 가로 넘침과 콘솔 오류를 확인합니다.

- [ ] **Step 4: 범위 고정 커밋**

```bash
git add docs/project/reviews/2026-08-07-surface-case-edits-verification.md src/content/docs/05-frontend/browser-dom-rendering.md src/content/docs/06-requirements-design/prd-sdd-tdd.md research/source-map.md CONTENT_MAP.md PROJECT_CONTEXT.md CHANGELOG.md
git diff --cached --check
git commit -m "docs: align surface case references"
```

Expected: 전체 상태 수치 변화 없음, 과거 검토 기록 수정 없음.

### Task 6: 반복 사례 전환 잔여 표현과 전체 렌더링 확인

**Files:**
- Verify: all files modified by Tasks 1~5
- Modify if evidence requires: `VERIFICATION_REPORT.md`
- Modify: `PROJECT_CONTEXT.md`
- Modify: `PROJECT_MANIFEST.json`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`

**Interfaces:**
- Consumes: 다섯 독립 커밋과 실제 빌드·브라우저 결과
- Produces: 남은 반도체 표현의 의도된 위치와 새 상태를 재현할 수 있는 전환 체크포인트

- [ ] **Step 1: 공개 잔여 표현 감사**

```bash
rg -n "반도체|북마크|bookmark|기업 A|기업 B|reportId|rpt-42" src/content/docs src/assets/diagrams
```

Expected: 주가 캡스톤·모임 캡스톤·반복 사례 전환이 완료됐다면 결과 0건. 결과가 있으면 해당 파일을 감사 판정과 대조하고 의도하지 않은 잔여 표현을 원래 Task 범위에서 수정한 뒤 다시 검증합니다.

- [ ] **Step 2: 전체 상태와 검색 인덱스 검증**

```bash
npm run sync:content-map
ASTRO_TELEMETRY_DISABLED=1 npm run check
node -e "const m=JSON.parse(require('fs').readFileSync('PROJECT_MANIFEST.json','utf8')); console.log(m.inventory.contentStatus)"
find dist/pagefind -type f | wc -l
git diff --check
```

Expected: 콘텐츠 지도와 manifest 수치 일치, 전체 상태 `review` 4개·`draft` 41개·`seed` 13개·`ready` 0개, 검색 인덱스 생성, 오류 0개.

- [ ] **Step 3: 문맥·검증 보고서 체크포인트 기록**

실제 명령의 테스트 수·콘텐츠 수·참조 수·SVG 수·HTML 수와 브라우저 결과만 `VERIFICATION_REPORT.md`와 프로젝트 문맥에 기록합니다. Opus 재검토 전이므로 실질 변경된 네 핵심 장과 주가 캡스톤을 `review`로 표현하지 않습니다.

- [ ] **Step 4: 체크포인트 커밋**

```bash
git add VERIFICATION_REPORT.md PROJECT_CONTEXT.md PROJECT_MANIFEST.json ROADMAP.md CHANGELOG.md CONTENT_MAP.md
git diff --cached --check
git commit -m "docs: record recurring case migration checkpoint"
```

Expected: 상태·검증 기록만 커밋되고 작업 트리가 깨끗함. 다음 계획은 도구 매핑 조사 또는 학습 경로 통합이며, 실질 변경 원고의 독립 검토는 마지막 통합 계획에서 수행합니다.
