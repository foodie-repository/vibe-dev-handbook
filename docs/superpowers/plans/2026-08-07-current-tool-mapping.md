# Current Tool Mapping Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 영속적인 백엔드·데이터베이스·인증·배포 책임을 Supabase·Vercel·Codex Sites의 확인된 현재 기능에 대응시키되 제품 사용법을 핵심 개념과 분리한 날짜가 있는 참고 문서를 만듭니다.

**Architecture:** 먼저 제품 이름 없이 책임·검증 질문·일반화 금지선을 조사 브리프로 고정합니다. 별도 네트워크 승인 뒤 공식 1차 자료만 확인하고, 확인된 주장만 하나의 교체 가능한 참고 페이지와 핵심 장의 짧은 연결 상자에 반영합니다.

**Tech Stack:** Markdown/MDX, Astro 7.1.6, Starlight 0.41.4, Pagefind, Node.js 22.16.0, npm 10.9.2, 공식 제품 문서

## Global Constraints

- Task 1은 오프라인으로 실행하고 Task 2의 네트워크 접근은 사용자에게 별도 승인을 받은 뒤에만 수행합니다.
- 새 의존성·플러그인 설치, 계정 생성, 프로젝트 생성, 로그인, 데이터베이스 생성, 배포와 외부 쓰기를 수행하지 않습니다.
- Supabase 작업에는 `supabase:supabase`, Codex Sites 해석에는 `sites:sites-hosting` 스킬 지침을 실행 시 먼저 읽습니다.
- Vercel 플러그인은 설치하지 않고 공식 Vercel 문서를 읽기 전용으로 확인합니다.
- 제품과 개념을 등치하지 않고 확인일·버전 또는 문서 상태·적용 범위·일반화 금지선을 모든 주장에 기록합니다.
- 공식 근거를 찾지 못한 기능은 공개 원고에서 제외하고 조사 결과에 `확인 불가로 미게시`라고 기록합니다.
- 제품 UI의 버튼 위치·요금·무료 한도는 학습 목표가 아니며 공식 확인이 있어도 첫 페이지 범위에서 제외합니다.
- 검증을 통과한 오프라인 브리프와 공개 참고 페이지를 각각 독립 커밋하고 푸시·배포하지 않습니다.

---

### Task 1: 제품 중립 주장 매트릭스 작성

**Files:**
- Create: `research/current-tool-mapping-research-brief.md`
- Read: `src/content/docs/04-backend-data/api-database-auth.md`
- Read: `src/content/docs/10-deployment-operations/build-deploy-domain-dns.md`
- Read: `src/content/docs/12-case-studies/first-full-stack-project.md`
- Read: `docs/superpowers/specs/2026-08-07-dual-case-study-system-design.md`

**Interfaces:**
- Consumes: 영속 개념 장의 책임과 승인 명세의 4층 구조
- Produces: 제품별로 검증할 주장·반례·증거·미게시 조건이 고정된 오프라인 브리프

- [ ] **Step 1: 책임 축을 제품 이름 없이 작성**

브리프 첫 표는 다음 책임을 행으로 사용합니다.

```markdown
| 책임 | 독자가 먼저 이해할 질문 | 제품 예시에서 확인할 증거 |
|---|---|---|
| 관계형 데이터 저장 | 어떤 상태가 권위 있는 원본이며 스키마·제약·트랜잭션은 어디서 집행되는가 | 공식 데이터베이스 종류, 제약·트랜잭션 범위, 마이그레이션·복구 문서 |
| 인증 | 자격 증명과 세션이 어떻게 주체를 확인하는가 | 공식 인증 방식·세션 경계·비밀 취급 문서 |
| 인가 | 확인된 주체가 대상에 행동할 수 있는지 어디서 집행하는가 | 공식 정책 기능과 서버·데이터 경계, 기본 거절·테스트 한계 |
| 서버 실행과 API | 비밀·업무 규칙·입력 검증이 어느 런타임에서 실행되는가 | 공식 런타임·함수·API 배포 문서와 제한 |
| 빌드와 아티팩트 | 어떤 소스가 어떤 산출물로 변하며 환경별 설정은 어디서 주입되는가 | 공식 빌드·환경 변수·아티팩트 설명 |
| 호스팅과 공개 주소 | 누가 파일·서버를 제공하고 도메인·HTTPS를 연결하는가 | 공식 배포·도메인·HTTPS 문서 |
| 운영과 복구 | 로그·배포 이력·롤백·데이터 백업·복원 책임은 누구에게 있는가 | 공식 로그·배포 복구·데이터 백업 문서와 사용자가 맡는 책임 |
```

- [ ] **Step 2: 제품별 검증 질문 작성**

Supabase는 `Postgres 여부`, `Auth와 세션`, `데이터 접근 정책`, `API 또는 서버 실행`, `마이그레이션`, `백업·복원`, `로그`, `클라이언트 공개 키와 서버 비밀의 경계`를 확인합니다. Vercel은 `정적·서버 런타임`, `빌드`, `환경 변수`, `배포 이력`, `도메인·HTTPS`, `로그`, `롤백`, `데이터베이스 책임이 별도인지`를 확인합니다. Codex Sites는 `입력 아티팩트`, `빌드 또는 버전 단위`, `호스팅·공개 URL`, `환경·서버 실행 지원 경계`, `롤백·관찰 증거`, `GitHub Pages·Vercel과 동일시하면 안 되는 차이`를 확인합니다.

- [ ] **Step 3: 출처·판정 스키마 고정**

각 주장 기록은 다음 필드를 사용합니다.

```yaml
claim_id: SUPA-DB-01
product: Supabase
responsibility: 관계형 데이터 저장
claim: 공식 자료에서 확인할 한 문장 주장
source_url: 공식 문서 직접 URL
checked_at: 2026-08-07
source_type: official-docs
status: confirmed | limited | not-confirmed
scope: 이 핸드북에서 적용할 범위
do_not_generalize: 이 주장으로 결론 내리면 안 되는 범위
```

`claim`과 `source_url`은 Task 2에서 채우는 빈칸으로 두지 않습니다. Task 1 문서에서는 실제 주장 행 대신 `검증 질문` 표만 저장하고, 위 YAML은 필드 정의 예시로 표시합니다.

- [ ] **Step 4: 오프라인 브리프 검증과 커밋**

```bash
rg -n "관계형 데이터 저장|인증|인가|서버 실행|빌드와 아티팩트|호스팅과 공개 주소|운영과 복구|Supabase|Vercel|Codex Sites|do_not_generalize" research/current-tool-mapping-research-brief.md
! rg -n -e 'TB''D' -e 'TO''DO' -e '추후'' 결정' -e '미''정' research/current-tool-mapping-research-brief.md
npm run check:static
git diff --check
git add research/current-tool-mapping-research-brief.md
git commit -m "docs: define current tool research contract"
```

Expected: 책임 7개·제품 3개의 검증 질문과 미게시 규칙 존재, 현재 기능을 확인된 사실처럼 쓴 문장 0건, 로컬 커밋 성공.

### Task 2: 공식 1차 자료 읽기 전용 조사

**Files:**
- Modify: `research/current-tool-mapping-research-brief.md`
- Modify: `research/source-map.md`

**Interfaces:**
- Consumes: Task 1의 주장 매트릭스와 사용자 네트워크 승인
- Produces: 확인일·직접 URL·적용 범위·일반화 금지선이 있는 제품별 판정

- [ ] **Step 1: 네트워크 승인과 읽기 전용 경계 확인**

사용자에게 `Supabase·Vercel·Codex Sites 공식 자료를 읽기 전용으로 조회하며 계정·프로젝트·배포·외부 쓰기는 하지 않는다`는 범위로 승인을 요청합니다. 승인이 없으면 Task 1 커밋에서 중단하며 공개 제품 매핑 페이지를 만들지 않습니다.

- [ ] **Step 2: Supabase 공식 자료 확인**

`supabase:supabase` 스킬을 읽고 공식 `supabase.com/docs`의 데이터베이스, Auth, 데이터 접근 정책, 서버 실행, 로컬·마이그레이션, 백업·복원, 로그, 키·비밀 문서를 직접 확인합니다. 각 책임은 `confirmed`, `limited`, `not-confirmed`로 판정하고 “관리형 서비스가 업무 규칙·인가 테스트·복원 책임을 자동으로 완료하지 않는다”는 일반화 금지선을 둡니다.

- [ ] **Step 3: Vercel 공식 자료 확인**

공식 `vercel.com/docs`의 배포, 빌드, 지원 런타임, 환경 변수, 도메인·HTTPS, 로그, 배포 이력·롤백 문서를 직접 확인합니다. Vercel을 데이터베이스나 인증 자체와 동일시하지 않고, 외부 상태 저장소를 사용하면 그 백업·복구 책임이 별도로 남는다는 범위만 공식 자료가 직접 뒷받침할 때 기록합니다.

- [ ] **Step 4: Codex Sites 공식·내장 자료 확인**

`sites:sites-hosting` 스킬을 읽고 현재 세션에서 제공하는 공식 또는 제품 소유 내장 자료의 build·version·deployment·hosting 모델을 확인합니다. 공개 공식 URL이 없거나 서버 런타임·환경 변수·도메인·롤백 책임을 검증할 수 없으면 해당 행을 `not-confirmed`로 두고 공개 참고 페이지에는 “확인된 정적 사이트 게시 대안 범위”만 포함하거나 제품 자체를 미게시합니다.

- [ ] **Step 5: 출처 지도와 조사 기록 검증**

```bash
rg -n "claim_id: (SUPA|VERCEL|SITES)-|checked_at: 2026-08-07|status: (confirmed|limited|not-confirmed)|do_not_generalize:" research/current-tool-mapping-research-brief.md
rg -n "Supabase|Vercel|Codex Sites" research/source-map.md
! rg -n "source_url: *(검색|홈페이지|없음)$" research/current-tool-mapping-research-brief.md
```

Expected: 게시할 주장마다 공식 직접 URL·확인일·판정·적용 범위·일반화 금지선 존재. 확인 불가 주장은 공개 원고 입력 목록에서 제외됨.

- [ ] **Step 6: 조사 커밋**

```bash
git add research/current-tool-mapping-research-brief.md research/source-map.md
git diff --cached --check
git commit -m "docs: verify current tool mappings"
```

Expected: 조사·출처 파일만 커밋, 외부 상태 변경 없음.

### Task 3: 교체 가능한 현재 도구 참고 페이지 작성

**Files:**
- Create: `src/content/docs/reference/current-tool-mapping.md`
- Modify: `src/content/docs/reference/index.md`
- Modify: `src/content/docs/04-backend-data/api-database-auth.md`
- Modify: `src/content/docs/10-deployment-operations/build-deploy-domain-dns.md`
- Modify: `src/content/docs/12-case-studies/first-full-stack-project.md`
- Modify: `CONTENT_MAP.md` via generator

**Interfaces:**
- Consumes: Task 2에서 `confirmed` 또는 범위가 명확한 `limited`로 판정된 주장만 사용
- Produces: 핵심 정의와 분리된 날짜가 있는 제품 매핑 페이지와 세 개의 짧은 교차 링크

- [ ] **Step 1: 새 참고 페이지 frontmatter 작성**

```yaml
title: "현재 도구 매핑: 관리형 백엔드와 배포"
description: "영속적인 데이터·인증·배포 책임이 Supabase, Vercel과 확인 가능한 사이트 호스팅 예시에서 어디에 나타나는지 날짜와 범위를 표시해 비교합니다."
contentStatus: draft
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 데이터베이스·인증·인가·배포 책임과 제품 이름을 구분한다
  - 현재 제품 기능의 확인일·적용 범위·일반화 금지선을 읽는다
  - 도구가 바뀌어도 유지할 아키텍처 질문과 검증 증거를 선택한다
```

- [ ] **Step 2: 영속 책임을 먼저 설명**

본문은 `이 페이지의 사용법`, `먼저 남는 책임`, `Supabase 적용 예`, `Vercel 적용 예`, `Codex Sites 적용 예 또는 미게시 사유`, `모임 웹앱에 대응하기`, `도구가 바뀔 때 교체할 부분`, `검증 체크리스트`, `확인일과 공식 출처` 순서로 작성합니다. 각 제품 절 첫 문장은 제품이 데이터베이스·백엔드·배포·호스팅의 일반 정의가 아니라 하나의 현재 구현 예라고 명시합니다.

- [ ] **Step 3: 제품 매핑 표 작성**

각 행은 `영속 책임`, `확인된 제품 기능`, `사용자가 여전히 결정할 것`, `직접 증거`, `확인일`, `금지할 일반화` 열을 사용합니다. 조사에서 `not-confirmed`인 셀은 기능을 추측하지 않고 “공식 근거 부족으로 이 판에서는 다루지 않음”이라고 표시합니다.

- [ ] **Step 4: 핵심 장에는 짧은 연결 상자만 추가**

`api-database-auth.md`는 영속 개념 설명 뒤에 “현재 관리형 백엔드 적용 예는 참고 페이지에서 책임별로 확인한다”는 2~3문장 링크만 추가합니다. `build-deploy-domain-dns.md`도 Vercel·Codex Sites를 정답으로 나열하지 않고 정적·동적 책임을 먼저 판정한 뒤 참고 페이지로 연결합니다. 모임 캡스톤에는 아키텍처와 도구 매핑을 분리해 읽는 방법만 추가합니다.

- [ ] **Step 5: 콘텐츠 지도와 전체 검증**

```bash
npm run sync:content-map
ASTRO_TELEMETRY_DISABLED=1 npm run check
rg -n "확인일|일반화|공식 근거|영속 책임|Supabase|Vercel" src/content/docs/reference/current-tool-mapping.md
```

Expected: 공개 문서 59개, 전체 상태 `review` 4개·`draft` 42개·`seed` 13개·`ready` 0개, 생성 HTML 60개, 새 제품 페이지 검색 인덱스 포함.

### Task 4: 검색·렌더링·문맥 검증과 커밋

**Files:**
- Modify: `PROJECT_CONTEXT.md`
- Modify: `PROJECT_MANIFEST.json`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`
- Modify with actual evidence: `VERIFICATION_REPORT.md`
- Verify: all files from Task 3

**Interfaces:**
- Consumes: 새 참고 페이지와 실제 빌드 결과
- Produces: 제품 페이지의 날짜·범위·검색 가능성을 확인한 `draft` 커밋

- [ ] **Step 1: 제품 종속 과장 검사**

```bash
! rg -n "데이터베이스 = Supabase|배포 = Vercel|호스팅 = Codex Sites|모든 프로젝트의 정답|자동으로 안전" src/content/docs/reference/current-tool-mapping.md src/content/docs/04-backend-data/api-database-auth.md src/content/docs/10-deployment-operations/build-deploy-domain-dns.md src/content/docs/12-case-studies/first-full-stack-project.md
rg -n "checked_at: 2026-08-07|source_url:" research/current-tool-mapping-research-brief.md
```

Expected: 개념·제품 등치와 자동 완성 주장 0건, 게시된 주장마다 조사 근거 존재.

- [ ] **Step 2: 브라우저와 검색 확인**

1440×1000과 390×844에서 새 참고 페이지의 표·긴 URL·상태 배지·내비게이션·가로 넘침·콘솔 오류를 확인합니다. Pagefind 검색 UI에서 `Supabase`, `Vercel`, `데이터베이스`, `authorization`, `배포`를 입력해 새 페이지 또는 관련 핵심 장이 결과에 나타나는지 기록합니다. Codex Sites가 미게시 판정이면 해당 검색 결과를 수용 기준으로 요구하지 않습니다.

- [ ] **Step 3: 문맥과 검증 보고서 동기화**

실제 문서 수·상태 수·HTML 수·검색 결과만 프로젝트 문맥과 검증 보고서에 기록합니다. 제품 페이지는 사람 기술·편집 검토 전 `draft`이며 확인일 이후 기능 변경 가능성을 명시합니다.

- [ ] **Step 4: 범위 고정 커밋**

```bash
git add src/content/docs/reference/current-tool-mapping.md src/content/docs/reference/index.md src/content/docs/04-backend-data/api-database-auth.md src/content/docs/10-deployment-operations/build-deploy-domain-dns.md src/content/docs/12-case-studies/first-full-stack-project.md CONTENT_MAP.md PROJECT_CONTEXT.md PROJECT_MANIFEST.json ROADMAP.md CHANGELOG.md VERIFICATION_REPORT.md
git diff --cached --check
git commit -m "docs: add dated current tool mappings"
```

Expected: 공개 참고 페이지·최소 교차 링크·상태 문맥만 커밋되고 작업 트리가 깨끗함. 제품 기능이 바뀌면 이 페이지와 적용 상자만 교체할 수 있음.
