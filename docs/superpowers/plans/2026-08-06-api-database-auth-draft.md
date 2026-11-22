# API·데이터베이스·인증 초안 구현 계획

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 확인된 공식 출처와 조사 브리프를 바탕으로 비개발자가 보고서 수정 요청의 API 계약·인증·인가·업무 규칙·영속 변경·검증 증거를 재구성할 수 있는 공개 `draft`를 완성합니다.

**Architecture:** 기존 정보 구조를 바꾸지 않고 `04-backend-data/api-database-auth.md` 한 장이 책임 경계의 중심 지도가 되게 합니다. API·데이터베이스·인증을 별도 백과사전처럼 나열하지 않고 “사용자가 자신의 보고서를 수정한다”는 한 흐름으로 연결하며, 구현 세부는 인접 장으로 위임합니다. 게시용 SVG와 Mermaid 원본은 같은 논리 흐름을 표현하고 공개 원고의 대체 텍스트가 시각 자료 없이도 같은 정보를 전달하게 합니다.

**Tech Stack:** Astro 7.1.6, Starlight 0.41.4, Markdown, 접근 가능한 SVG, Mermaid 원본, Node.js 내장 검증기, npm 10.9.2

## 접근 결정

- 채택: API·영속 상태·인증·인가를 하나의 보고서 수정 요청으로 연결합니다. Phase 1 독자가 전체 책임 흐름을 먼저 이해한 뒤 세부 장으로 이동할 수 있고 기존 Build Track 순서를 바꾸지 않습니다.
- 제외: API·데이터베이스·인증을 각각 새 공개 장으로 분리하지 않습니다. 정보 구조·사이드바·교차 링크를 바꾸고 같은 사례와 용어를 반복하게 됩니다.
- 제외: 현재 시드에 정의와 목록만 추가하지 않습니다. 실패 조건·증거·판단 규칙·연습과 다이어그램이라는 `draft` 승격 기준을 충족하지 못합니다.

## Global Constraints

- 새 패키지 설치, 추가 네트워크 조사, 정보 구조 변경, 푸시와 배포를 수행하지 않습니다.
- 공개 콘텐츠는 `src/content/docs/`, 게시용 다이어그램과 Mermaid 원본은 `src/assets/diagrams/`에만 둡니다.
- 본문은 한국어 존댓말로 쓰고, 일반 산문 문단에 임의 하드랩을 넣지 않으며, Starlight가 H1을 생성하므로 본문은 H2부터 시작합니다.
- `research/api-database-auth-research-brief.md`의 11개 주장, 출처 적용 한계와 일반화 금지선을 지킵니다.
- 특정 프레임워크·ORM·데이터베이스·세션 방식·토큰 형식을 보편적 정답으로 제시하지 않습니다.
- 실제 자격 증명·개인정보·운영 데이터는 예시에 사용하지 않습니다.
- 공개 원고는 독립 검토 전이므로 `contentStatus: draft`까지만 올리고 `reviewEvidence`를 추가하지 않습니다.
- 수용 기준과 필수 검증을 통과한 이번 독립 작업 파일만 선별해 로컬 커밋하고 `git push`는 수행하지 않습니다.

---

### Task 1: 공개 장을 한 요청 흐름 중심의 완결된 초안으로 확장

**Files:**
- Modify: `src/content/docs/04-backend-data/api-database-auth.md`
- Read: `research/api-database-auth-research-brief.md`
- Read: `src/content/docs/03-full-stack/http-request-response.md`
- Read: `src/content/docs/03-full-stack/client-server-full-stack.md`

**Interfaces:**
- Consumes: 브리프의 보고서 수정 사례, 11개 검증 주장, 용어 경계, 출처 한계와 `seed`→`draft` 수용 기준
- Produces: API 계약·인증·인가·업무 검증·트랜잭션·응답·증거를 연결하는 단일 공개 학습 장

- [ ] **Step 1: frontmatter 상태와 독자 계약을 갱신**

`contentStatus`를 `draft`로 변경하고 기존 여섯 학습 목표를 본문에서 모두 다룹니다. 독립 검토 전이므로 `reviewEvidence`는 추가하지 않습니다.

- [ ] **Step 2: 다음 공개 구조로 본문을 다시 작성**

본문 순서는 `먼저 결론 → 왜 필요한가 → 한 문장 정의 → 회사 건물 비유와 한계 → 시스템에서의 위치 → 보고서 수정 요청의 책임 흐름 → API 계약 → 인증과 인가 → 영속 상태·입력과 쿼리·제약·트랜잭션·동시 수정 → 성공·실패 증거 → 판단 규칙 → 흔한 실패 → AI 작업 계약 → 확인 체크리스트 → 짧은 연습 → 관련 용어와 출처`로 고정합니다.

- [ ] **Step 3: 보고서 수정 사례의 정상 흐름과 실패 분기를 구체화**

정상 흐름은 `브라우저 요청 → API 계약 확인 → 인증 상태 확인 → 보고서와 소유·공유 관계 조회 → 인가 → 입력·업무 규칙 검증 → 보고서와 변경 이력의 트랜잭션 → commit → 안전한 응답 → UI와 데이터·로그 증거 확인`으로 설명합니다. 대표 실패는 인증 정보 부족·만료, 다른 사용자의 보고서, 잘못된 기간, 동시 수정 충돌, 데이터 변경 실패로 구분하며 `401`·`403`·`404`·`400`·`409`·`5xx`는 가능한 계약 사례이지 모든 서비스의 고정 답이 아니라고 명시합니다.

- [ ] **Step 4: 기술 경계를 브리프의 판정대로 제한**

OpenAPI 명세는 계약 기술 수단이지 런타임 준수 증거가 아니고, `Authorization` 헤더는 자격 증명 전달 위치이지 인가 완료 증거가 아니며, 세션·토큰 존재는 모든 권한 정책이 아닙니다. JWS의 서명·MAC 기반 무결성 보호와 JWE의 암호화·무결성 보호를 구분하고, prepared statement는 입력 값과 SQL 구조를 분리하지만 입력 검증·인가·업무 규칙을 대신하지 않는다고 설명합니다. PostgreSQL 18의 직렬화 실패·재시도는 제품 예시로만 사용합니다.

- [ ] **Step 5: 인접 장으로 구현 세부를 위임하고 출처를 연결**

HTTP 메시지·상태 코드는 `../../03-full-stack/http-request-response/`, 클라이언트·서버 책임은 `../../03-full-stack/client-server-full-stack/`, 데이터 모델·스키마·마이그레이션은 `../data-model-schema-migration/`, 캐시·큐는 `../state-cache-queue/`, 보안 세부는 `../../08-quality/performance-security/`, 로그·복구는 `../../10-deployment-operations/logs-monitoring-backup/`, 기본 용어는 `../../reference/development-glossary/`로 연결합니다. 이 경로는 Starlight의 현재 페이지 URL 깊이를 기준으로 작성하고 참조 검사로 확인합니다.

- [ ] **Step 6: 공개 원고의 정적 검사를 실행**

Run: `npm run check:static`

Expected: 테스트 26개 통과, 콘텐츠·내부 링크·로컬 이미지·SVG 접근성 오류 0개.

### Task 2: 책임 흐름 SVG와 Mermaid 원본 추가

**Files:**
- Create: `src/assets/diagrams/api-database-auth-flow.svg`
- Create: `src/assets/diagrams/source/api-database-auth-flow.mmd`
- Modify: `src/content/docs/04-backend-data/api-database-auth.md`

**Interfaces:**
- Consumes: Task 1의 정상 흐름과 실패 분기
- Produces: 같은 7단계 책임 흐름을 표현하는 게시용 접근 가능 SVG, 편집 가능한 Mermaid 원본과 동등한 본문 대체 텍스트

- [ ] **Step 1: 다이어그램의 노드와 실패 신호를 고정**

주 흐름은 `요청과 대상 식별 → API 계약 → 인증 → 대상·관계 조회와 인가 → 입력·업무 규칙 → 데이터베이스 트랜잭션과 commit → 응답·UI·증거`의 7개 노드로 제한합니다. 각 단계 옆에는 `형식 오류`, `인증 실패`, `권한 거절`, `입력 오류·충돌`, `rollback·서버 오류`를 짧게 표시하고 구현 컴포넌트의 고정 배치로 오해되지 않도록 “논리적 책임 순서”라고 표기합니다.

- [ ] **Step 2: Mermaid 원본을 먼저 작성**

`flowchart TD`를 사용해 7개 주 노드와 실패 노트를 표현합니다. 대상 조회와 인가, 입력 검증과 인가, 트랜잭션과 동시 충돌이 서로 다른 판단임을 노드 이름으로 드러냅니다.

- [ ] **Step 3: 기존 저장소 스타일의 SVG를 작성**

SVG는 `role="img"`, `aria-labelledby="title desc"`, 고유한 `title`과 `desc`, 밝은 화면과 `prefers-color-scheme: dark` 스타일을 포함합니다. 시스템 기본 sans-serif, 흰색·짙은 청회색 상자, 초록색 commit 강조를 사용하고 외부 폰트·스크립트·이미지는 추가하지 않습니다. 화살표는 상자 뒤에 그리며 본문 폭에서 축소돼도 단계 번호와 핵심 명사가 남도록 세로형으로 구성합니다.

- [ ] **Step 4: 원고에 이미지와 동등한 대체 텍스트를 연결**

이미지 마크다운의 alt에는 각 책임을 단순 나열하지 않고, 요청이 어떤 순서로 통과하고 어느 단계의 실패가 어떤 증거로 보이는지 요약합니다. 이미지 다음 산문과 목록은 시각 자료를 보지 않아도 같은 정상 흐름과 실패 경계를 이해할 수 있어야 합니다.

- [ ] **Step 5: 참조 검사를 실행**

Run: `npm run validate:references`

Expected: 새 SVG의 `title`·`desc`, 로컬 이미지 경로와 모든 내부 링크 오류 0개.

### Task 3: 용어집을 장의 책임 경계와 동기화

**Files:**
- Modify: `src/content/docs/reference/development-glossary.md`

**Interfaces:**
- Consumes: 공개 장의 중심 용어와 구분 기준
- Produces: 다른 장에서도 재사용할 수 있는 짧고 관계 중심적인 정의

- [ ] **Step 1: 웹·풀스택 용어를 보완**

`API`는 입력·출력·오류·권한 조건을 포함할 수 있는 인터페이스 계약으로 확장하고 `endpoint`를 구체적인 메서드·경로 접근 지점으로 추가합니다. endpoint 하나가 API 전체나 백엔드 전체는 아니라는 한계를 포함합니다.

- [ ] **Step 2: 데이터 용어를 보완**

`database`, `transaction` 정의를 영속 상태·원자성 중심으로 정교화하고 `database constraint`, `commit`, `rollback`을 추가합니다. 트랜잭션이 동시 수정 정책을 자동 결정하지 않고 rollback이 백업 복원을 뜻하지 않는다는 한계를 포함합니다.

- [ ] **Step 3: 신원·권한 용어를 보완**

`authentication`, `authorization`, `session`, `token`을 주체·대상·행동·수명·정책 집행 관점으로 정교화합니다. `digital signature`와 `encryption`을 추가해 무결성·출처 확인과 기밀성의 차이를 짧게 정의합니다.

- [ ] **Step 4: 정적 검사를 실행**

Run: `npm run check:static`

Expected: 콘텐츠·용어 링크·Markdown 렌더링 검사 오류 0개.

### Task 4: 자체 점검과 프로젝트 상태 동기화

**Files:**
- Create: `docs/project/reviews/2026-08-06-api-database-auth-review-prep.md`
- Modify: `CONTENT_MAP.md` through `npm run sync:content-map`
- Modify: `PROJECT_CONTEXT.md`
- Modify: `ROADMAP.md`
- Modify: `PROJECT_MANIFEST.json`
- Modify: `VERIFICATION_REPORT.md`
- Modify: `CHANGELOG.md`

**Interfaces:**
- Consumes: 완성된 공개 원고, 다이어그램, 용어집, 품질 루브릭과 실제 검증 결과
- Produces: 다음 Opus 5 Max 검토가 읽을 수 있는 자체 점검·검토 계약과 정확한 저장소 상태

- [ ] **Step 1: 품질 루브릭을 실제 원고에 적용**

9개 항목을 0~2점으로 판정하고 근거 섹션을 기록합니다. 보안·데이터 손실 위험 무시, 제품 동작 무근거 일반화, AI 완료 주장 무검증 같은 치명 항목을 별도로 확인합니다. 점수는 원고를 읽은 뒤 계산하며 `draft`를 자동으로 `review`로 올리는 근거로 사용하지 않습니다.

- [ ] **Step 2: 다음 독립 검토 계약을 작성**

검토 대상과 읽기 전용 파일 목록, P0·P1·P2 정의, 11개 기술 주장, 비개발자 재구성 가능성, 비유 한계, 출처 범위, 입력 파일 지문과 웹·쓰기 금지 조건을 `docs/project/reviews/2026-08-06-api-database-auth-review-prep.md`에 기록합니다. 실제 Claude 결과가 없으므로 검토 완료나 `request:` 증거라고 표시하지 않습니다.

- [ ] **Step 3: 생성 문서와 상태 집계를 동기화**

Run: `npm run sync:content-map`

Expected after target `seed`→`draft`: 공개 콘텐츠 `review` 7개·`draft` 38개·`seed` 13개·`ready` 0개. 공식 Build Track은 `review` 6개·`draft` 6개·`seed` 0개·`ready` 0개입니다.

- [ ] **Step 4: 프로젝트 문맥을 실제 결과와 일치시킴**

`PROJECT_CONTEXT.md`, `ROADMAP.md`, `PROJECT_MANIFEST.json`, `VERIFICATION_REPORT.md`, `CHANGELOG.md`에 원고 문자 수, 상태, SVG·Mermaid 수, 자체 점검 결과와 남은 독립·사람 검토를 기록합니다. 예상 인벤토리는 공개 문서 58개, 학습 SVG 12개, Mermaid 원본 12개, 자동 테스트 26개입니다.

- [ ] **Step 5: JSON과 상태 문구를 검증**

Run: `node -e "JSON.parse(require('fs').readFileSync('PROJECT_MANIFEST.json','utf8')); console.log('PROJECT_MANIFEST.json: valid')"`

Run: `rg -n "API·데이터베이스·인증|review|draft|seed" PROJECT_CONTEXT.md ROADMAP.md PROJECT_MANIFEST.json VERIFICATION_REPORT.md CONTENT_MAP.md`

Expected: JSON 파싱 성공, 대상 장 `draft`, 전체와 Build Track 집계가 서로 일치하며 독립 검토 완료 주장이 없음.

### Task 5: 전체 검증·렌더링 확인·독립 커밋

**Files:**
- Verify: all files changed by Tasks 1–4

**Interfaces:**
- Consumes: 공개 초안과 모든 동기화 문서
- Produces: 자동·브라우저 증거가 있는 하나의 로컬 구현 커밋

- [ ] **Step 1: 전체 검증을 실행**

Run: `ASTRO_TELEMETRY_DISABLED=1 npm run check`

Expected: 테스트 26개 통과, 콘텐츠 58개, 참조 대상과 학습 SVG 12개, 빌드 페이지 59개, 빌드 본문 리터럴 Markdown 오류 0개.

- [ ] **Step 2: 데스크톱·모바일 렌더링을 확인**

최신 빌드를 로컬 preview로 열고 `/04-backend-data/api-database-auth/`를 1440px와 390px에서 확인합니다. H1 1개, `초안` 상태 배지, 다이어그램·대체 텍스트·표·코드 블록·내부 링크, 페이지·표·코드의 가로 넘침과 Console 오류·경고를 기록합니다.

- [ ] **Step 3: 변경 범위와 생성물 일치를 감사**

Run: `git diff --check`

Run: `git status --short`

Run: `git diff --stat`

Expected: 계획된 공개 원고·SVG·Mermaid·용어집·검토 준비·상태 문서와 생성된 `CONTENT_MAP.md`만 변경되며 새 의존성·설정·원격 상태 변경이 없음.

- [ ] **Step 4: 이번 구현 파일만 스테이징하고 staged diff 확인**

Run: `git diff --cached --check`

Expected: staged diff 오류 0개, 별도 unstaged 변경 0개.

- [ ] **Step 5: 로컬 커밋**

```bash
git commit -m "docs: expand api database auth chapter"
```

Expected: 로컬 커밋 성공, 작업 트리 깨끗함, push·배포 없음.
