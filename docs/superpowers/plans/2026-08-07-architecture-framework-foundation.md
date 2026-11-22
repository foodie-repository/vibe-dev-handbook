# Architecture and Framework Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 비개발자가 제품 이름을 고르는 단계보다 먼저 시스템의 책임·경계·인터페이스·상태·배치·품질 트레이드오프를 설명하고, 아키텍처·설계·기술 스택·프레임워크·라이브러리·런타임을 구분해 AI의 기술 제안을 검토할 수 있는 심화 기준 장을 완성합니다.

**Architecture:** 기존 짧은 `draft`를 제품 중립의 영속 개념 장으로 확장하고, 모임 참가 웹앱과 주가 데이터 대시보드에서 같은 판단 질문이 어떻게 다른 결론을 만드는지 필요한 지점만 비교합니다. 구조 결정에서 도구 선택으로 내려가는 세로형 책임 지도를 추가하고, 현재 제품 기능은 별도 도구 매핑 문서에만 연결합니다.

**Tech Stack:** Markdown/MDX, 접근 가능한 SVG, Mermaid 원본, Astro 7.1.6, Starlight 0.41.4, Pagefind, Node.js 22.16.0, npm 10.9.2, Claude Code `claude-opus-5` Max, Git

## Global Constraints

- 이 계획은 승인된 이중 사례 전환과 `2026-08-07-learning-path-search-and-review.md` 완료 뒤 실행합니다. 공식 13장 Build Track의 범위·순서는 바꾸지 않고 이 장은 Deep Track의 심화 기준 장으로 유지합니다.
- 제품 이름 없이 설명할 수 있는 영속 개념을 정본으로 두고 Supabase·Vercel·Codex Sites·Astro·React·Django 같은 제품과 프레임워크는 정의나 결론을 대신하지 못하게 합니다.
- SWEBOK의 현재 확인 범위와 저장소에서 이미 검증한 공식 출처만 사용합니다. 새 기술 주장이나 현재 제품 기능을 확정하려면 별도 네트워크 승인을 받기 전까지 조사 공백으로 남깁니다.
- 마이크로서비스·메시지 큐·캐시·별도 검색 서버는 입증된 요구와 품질 속성이 없으면 초기 답으로 제시하지 않습니다.
- 모든 예시는 승인된 모임 웹앱의 W-01~W-05와 가상 주가 대시보드의 D-01~D-05를 사용하고 실제 개인정보·주식 값·계정·토큰을 사용하지 않습니다.
- 공개 장은 독립 Opus 검토와 Codex 재판정 전까지 `draft`를 유지합니다. 사람 기술·편집 검토와 비개발자 독자 테스트 전에는 `ready`로 올리지 않습니다.
- 산문 문단과 목록 항목의 산문은 임의 하드랩 없이 한 줄로 저장합니다.
- 조사 계약, 원고·다이어그램, 독립 검토, 재판정·승격을 각각 검증 가능한 로컬 커밋으로 나누고 푸시·배포하지 않습니다.

---

### Task 1: 아키텍처·프레임워크 주장 계약 작성

**Files:**
- Create: `research/architecture-framework-research-brief.md`
- Read: `docs/superpowers/specs/2026-08-07-dual-case-study-system-design.md`
- Read: `src/content/docs/01-mental-models/software-is-a-system.md`
- Read: `src/content/docs/06-requirements-design/architecture-and-frameworks.md`
- Read: `src/content/docs/reference/development-glossary.md`
- Read: `research/source-map.md`
- Read: `docs/project/quality-rubric.md`

**Interfaces:**
- Consumes: 승인 명세의 영속 지식 1층과 장별 사례 배치 규칙
- Produces: 원고·다이어그램·독립 검토가 공유할 정의, 구분, 판단 질문, 비목표, 근거 범위와 일반화 금지선

- [ ] **Step 1: 현재 원고와 인접 장의 중복·공백을 기록**

```bash
wc -m src/content/docs/06-requirements-design/architecture-and-frameworks.md
rg -n "architecture|framework|library|runtime|아키텍처|프레임워크|라이브러리|런타임|품질 속성|트레이드오프" src/content/docs/01-mental-models/software-is-a-system.md src/content/docs/06-requirements-design src/content/docs/reference/development-glossary.md research/source-map.md
```

Expected: 현재 장이 짧은 `draft`이고, 기본 정의는 용어집에 있지만 아키텍처 결정 순서·프레임워크 선택 근거·두 사례의 비교 계약은 부족하다는 파일별 근거가 나옴.

- [ ] **Step 2: 조사 브리프에 주장 매트릭스 작성**

다음 8개 주장 묶음을 `주장 ID / 독자 질문 / 안전한 설명 / 확인 근거 / 적용 범위 / 비유 한계 / 일반화 금지선 / 공개 반영 위치` 열로 기록합니다.

1. 아키텍처·상세 설계·구현·기술 스택은 서로 다른 결정 수준입니다.
2. 구성요소·책임·경계·인터페이스·상태·데이터·배치는 하나의 구조 설명에서 연결되어야 합니다.
3. 품질 속성·제약·실패 영향·되돌리기 비용이 아키텍처 대안을 가르는 기준입니다.
4. 프레임워크·라이브러리·런타임·플랫폼·도구는 역할과 제어 관계가 다릅니다.
5. 프레임워크는 책임·렌더링·상태·팀 역량·배포 환경·유지 비용에 맞춰 선택합니다.
6. 아키텍처는 그림 한 장이나 제품 목록이 아니라 결정·이유·검증·변경 조건의 묶음입니다.
7. 초기 모임 웹앱은 모놀리식 애플리케이션과 단일 관계형 데이터베이스로 충분하다는 가설부터 검증합니다.
8. 주가 대시보드는 정적 전달로 시작하고 최신성·개인화·쓰기 요구가 확인될 때 API 전환을 검토합니다.

- [ ] **Step 3: 출처 공백과 추가 조사 게이트 명시**

SWEBOK가 뒷받침하는 넓은 교육 범위와 직접 뒷받침하지 않는 프레임워크별 제어 흐름, 아키텍처 스타일별 장단점, 품질 속성 세부 분류를 분리합니다. 직접 출처가 없는 세부는 보편 규칙으로 공개하지 않고 후속 네트워크 조사 후보로 기록합니다.

- [ ] **Step 4: 브리프 검증과 커밋**

```bash
rg -n "주장 ID|독자 질문|안전한 설명|확인 근거|적용 범위|비유 한계|일반화 금지선|공개 반영 위치" research/architecture-framework-research-brief.md
! rg -n -e 'TB''D' -e 'TO''DO' -e '추후'' 작성' -e '미''정' research/architecture-framework-research-brief.md
npm run check:static
git diff --check
git add research/architecture-framework-research-brief.md
git commit -m "docs: define architecture chapter evidence contract"
```

Expected: 8개 주장 묶음과 출처 한계가 모두 존재하고 정적 검증이 성공하며 조사 브리프만 커밋됨.

---

### Task 2: 영속 개념과 두 사례로 공개 장 확장

**Files:**
- Modify: `src/content/docs/06-requirements-design/architecture-and-frameworks.md`
- Modify: `src/content/docs/reference/development-glossary.md`
- Modify: `research/source-map.md`
- Create: `src/assets/diagrams/architecture-decision-layers.svg`
- Create: `src/assets/diagrams/source/architecture-decision-layers.mmd`
- Modify: `CONTENT_MAP.md` via generator

**Interfaces:**
- Consumes: `research/architecture-framework-research-brief.md`의 8개 주장 묶음
- Produces: 제품명 없이 읽히는 심화 장, 동일 문구의 게시 SVG·Mermaid 원본, 용어·출처 추적

- [ ] **Step 1: front matter의 학습 행동을 검토 가능하게 고정**

`learningObjectives`를 다음 행동으로 교체하고 `contentStatus: draft`를 유지합니다.

- 아키텍처·설계·구현·기술 스택을 구분한다
- 시스템 책임·경계·상태·품질 속성으로 구조를 설명한다
- 프레임워크 제안을 선택 근거와 변경 조건으로 검토한다
- 현재 요구보다 복잡한 구조를 제안하는 과설계 신호를 찾는다

- [ ] **Step 2: 장을 프로젝트 표준 구조로 확장**

본문을 H2부터 시작하고 다음 순서로 작성합니다.

1. 왜 필요한가: AI가 제품 목록을 아키텍처처럼 제안할 때 생기는 검증 문제
2. 한 문장 정의: 아키텍처와 프레임워크를 각각 정의하고 관계를 분리
3. 도시 계획과 건축 공법 비유: 맞는 지점과 소프트웨어에서 깨지는 지점
4. 결정 수준: 사용자 문제 → 아키텍처 → 상세 설계 → 구현 → 운영 증거
5. 구조의 일곱 질문: 구성요소·책임·경계·인터페이스·상태·데이터·배치
6. 품질과 제약: 보안·성능·가용성·변경 용이성·비용·복구, 우선순위 충돌과 ADR
7. 도구 범주: 프레임워크·라이브러리·런타임·플랫폼·도구·기술 스택
8. 선택 절차: 요구 책임 → 렌더링·상태 → 팀·배포 → 유지 비용 → 검증 증거 → 변경 조건
9. 개발 사례: 모임 웹앱의 단순 모놀리스·단일 관계형 데이터베이스와 마이크로서비스 보류 근거
10. 데이터 분석 사례: 정적 주가 대시보드와 API로 전환할 관찰 신호
11. 흔한 오해와 실패: 이름 나열, 미래 규모 추측, 유행 채택, 경계 없는 추상화, 운영 책임 누락
12. AI 검토 계약: 읽기 전용 현황 확인, 대안 2개, 트레이드오프, 비목표, 증거, 가역성, 승인 경계
13. 확인 체크리스트, 짧은 연습 3개, 관련 용어와 출처 범위

- [ ] **Step 3: 세로형 결정 지도를 SVG와 Mermaid로 제작**

다이어그램은 `사용자 문제·제약 → 책임·경계·상태 → 품질 속성·트레이드오프 → 아키텍처 결정 → 프레임워크·런타임 선택 → 구현·배포 → 검증 증거·변경 조건` 흐름을 한 열로 보여 줍니다. 각 단계에 “선택 기준”과 “AI에게 요구할 증거” 한 줄을 넣고, SVG에 고유한 `<title>`과 `<desc>`를 제공하며 원고의 대체 텍스트가 그림 없이도 결론을 전달하게 합니다.

- [ ] **Step 4: 용어와 출처 범위 동기화**

용어집의 기존 `architecture`, `framework`, `library`, `runtime`, `quality attribute`, `constraint` 정의와 중복하지 않는 범위에서 `design`, `technology stack`, `platform`, `monolith`, `microservice`, `architectural decision record`를 추가합니다. `research/source-map.md`에는 확인한 SWEBOK 적용 범위, 편집자가 만든 선택 절차임을 밝히는 한계, 제품별 세부를 네트워크 승인 전 일반화하지 않는 금지선을 기록합니다.

- [ ] **Step 5: 원고·자산·지도 검증과 커밋**

```bash
npm run sync:content-map
npm run check:static
ASTRO_TELEMETRY_DISABLED=1 npm run check
rg -n "모임 참가 웹앱|주가 데이터 대시보드|아키텍처|프레임워크|기술 스택|비유의 한계|AI.*검토|확인 체크리스트|짧은 연습" src/content/docs/06-requirements-design/architecture-and-frameworks.md
rg -n "<title>|<desc>" src/assets/diagrams/architecture-decision-layers.svg
git diff --check
git add src/content/docs/06-requirements-design/architecture-and-frameworks.md src/content/docs/reference/development-glossary.md research/source-map.md src/assets/diagrams/architecture-decision-layers.svg src/assets/diagrams/source/architecture-decision-layers.mmd CONTENT_MAP.md
git commit -m "docs: deepen architecture and framework guide"
```

Expected: 테스트 26개 이상, 현재 도구 매핑 참고 페이지가 구현됐으면 공개 문서 59개이고 승인 대기라면 58개, 학습 SVG·Mermaid 13쌍, 빌드·생성물 검증 성공, 장은 `draft` 유지, 지정 파일만 커밋됨.

---

### Task 3: Deep Track과 두 캡스톤에서 심화 장 연결

**Files:**
- Modify: `src/content/docs/start-here/learning-paths.md`
- Modify: `src/content/docs/06-requirements-design/index.md`
- Modify: `src/content/docs/12-case-studies/first-full-stack-project.md`
- Modify: `src/content/docs/12-case-studies/analytics-dashboard-case-study.md`
- Modify: `CONTENT_MAP.md` via generator

**Interfaces:**
- Consumes: 확장된 아키텍처·프레임워크 장의 판단 질문
- Produces: 순서 학습과 검색 진입에서 찾을 수 있는 Deep Track 링크, 캡스톤의 구체적 역방향 링크

- [ ] **Step 1: Deep Track의 첫 심화 링크로 배치**

`learning-paths.md`의 Deep Track 설명에 `[아키텍처와 프레임워크](../../06-requirements-design/architecture-and-frameworks/)`를 첫 링크로 추가합니다. 공식 Build Track 13개 목록·순서·상태 집계는 변경하지 않고 “이 장은 Build Track 범위를 늘리지 않는 선택 심화 장”이라고 명시합니다.

- [ ] **Step 2: 요구사항·설계 인덱스의 역할 구분**

세 링크를 `요구와 개발 규율`, `구조와 도구 선택`, `결정 기록`이라는 질문으로 설명해 PRD·SDD·TDD, 아키텍처·프레임워크, ADR 장의 중복처럼 보이지 않게 합니다.

- [ ] **Step 3: 캡스톤에 판단 근거 역링크 추가**

모임 캡스톤의 단순 모놀리스·단일 데이터베이스 선택 지점과 주가 캡스톤의 정적 전달·API 전환 지점에 한 문장씩 연결합니다. 정의를 캡스톤에 복제하지 않고 “왜 이 선택인지 다시 검토하려면”이라는 독자 의도로 링크합니다.

- [ ] **Step 4: 링크와 Build Track 불변 검증 후 커밋**

```bash
npm run sync:content-map
npm run check:static
node - <<'NODE'
const fs = require('node:fs');
const s = fs.readFileSync('src/content/docs/start-here/learning-paths.md', 'utf8');
const build = s.split('## Build Track:')[1].split('## Deep Track:')[0];
const rows = [...build.matchAll(/^\d+\. \[/gm)];
if (rows.length !== 13) throw new Error(`Build Track expected 13, got ${rows.length}`);
if (!s.includes('../../06-requirements-design/architecture-and-frameworks/')) throw new Error('Deep Track architecture link missing');
console.log('Build Track 13 and Deep Track architecture link verified');
NODE
git diff --check
git add src/content/docs/start-here/learning-paths.md src/content/docs/06-requirements-design/index.md src/content/docs/12-case-studies/first-full-stack-project.md src/content/docs/12-case-studies/analytics-dashboard-case-study.md CONTENT_MAP.md
git commit -m "docs: connect architecture deep track"
```

Expected: Build Track가 정확히 13개로 유지되고 Deep Track·인덱스·두 캡스톤의 링크 검증이 성공하며 다섯 파일만 커밋됨.

---

### Task 4: 자체 평가와 읽기 전용 Opus 독립 검토

**Files:**
- Create: `docs/project/reviews/2026-08-07-architecture-framework-review-prep.md`
- Create: `docs/project/reviews/2026-08-07-architecture-framework-opus5-review.md`
- Read: `AGENTS.md`
- Read: `PROJECT_CONTEXT.md`
- Read: `RULES.md`
- Read: `docs/project/content-lifecycle.md`
- Read: `docs/project/quality-rubric.md`
- Read: `research/architecture-framework-research-brief.md`
- Read: `research/source-map.md`
- Read: `src/content/docs/01-mental-models/software-is-a-system.md`
- Read: `src/content/docs/06-requirements-design/prd-sdd-tdd.md`
- Read: `src/content/docs/06-requirements-design/architecture-and-frameworks.md`
- Read: `src/content/docs/06-requirements-design/adr-and-tradeoffs.md`
- Read: `src/content/docs/12-case-studies/first-full-stack-project.md`
- Read: `src/content/docs/12-case-studies/analytics-dashboard-case-study.md`
- Read: `src/content/docs/reference/development-glossary.md`

**Interfaces:**
- Consumes: 원고와 근거·인접 장·캡스톤의 고정 입력 묶음
- Produces: 입력 지문, 자체 루브릭, 실제 Opus 결과 전문과 정상성 메타데이터

- [ ] **Step 1: 자체 루브릭과 입력 지문 고정**

준비 문서에 9개 루브릭 점수·근거 문장·치명 항목 판정, 의도적으로 제외한 제품 기능, 직접 출처 대기 범위, 위 14개 입력의 개별·결합 SHA-256과 대상 원고 SHA-256을 기록합니다. 총점 15/18 미만이거나 치명 항목이 있으면 원고를 보완하고 다시 전체 검증한 뒤 새 지문을 계산합니다.

- [ ] **Step 2: Claude Code 가용성과 작업 트리 확인**

```bash
claude --version
git status --short
```

Expected: 로그인된 Claude Code 버전이 출력되고, 검토 입력은 직전 커밋과 일치함. 세션 한도 또는 API `429`면 실패 사실만 기록하고 장을 `draft`로 유지함.

- [ ] **Step 3: Opus 5 Max를 단일 읽기 전용 요청으로 실행**

`claude -p --model claude-opus-5 --effort max`에 계획 권한 모드, `Read`만 허용, 사용자 설정·플러그인·스킬·MCP·Chrome·슬래시 명령·세션 저장 비활성화를 적용합니다. 프롬프트는 준비 문서에 고정한 14개 파일 외 읽기, Bash, 파일 수정·생성, Git, 테스트, 웹 검색·웹 가져오기와 하위 에이전트를 금지하고 다음 출력 구조를 요구합니다.

- P0 치명 오류, P1 `review` 전 필수, P2 개선 권고를 파일·절·근거·최소 수정 방향과 함께 분리
- 아키텍처·설계·기술 스택·프레임워크·라이브러리·런타임 구분의 정확성
- 비유의 맞는 지점과 깨지는 지점, 모임·주가 사례의 과설계 또는 잘못된 일반화
- 제품 중립성, AI 검토 계약의 권한·증거·가역성, 출처 공백
- 독립 18점 루브릭과 치명 항목, `draft` 유지 또는 `review` 진입 권고

- [ ] **Step 4: 정상 결과와 입력 불변 판정**

실행 기록에 CLI 버전·실제 주 모델·추론 강도·권한 모드·허용 도구·종료 코드·처리 시간·턴 수·웹 요청·권한 거부·결과 전문을 남깁니다. 같은 순서로 SHA-256을 다시 계산해 전후 결합 지문과 대상 원고 지문이 모두 같고 종료 코드 0·결과 본문이 있을 때만 정상 결과로 인정합니다.

- [ ] **Step 5: 검토 증거만 검증·커밋**

```bash
rg -n "claude-opus-5|추론 강도: `max`|종료 코드: `0`|검토 전|검토 후|P0 치명 오류|P1.*필수|P2 개선" docs/project/reviews/2026-08-07-architecture-framework-opus5-review.md
git diff -- src/content/docs src/assets research
git diff --check
git add docs/project/reviews/2026-08-07-architecture-framework-review-prep.md docs/project/reviews/2026-08-07-architecture-framework-opus5-review.md
git commit -m "docs: record architecture Opus review"
```

Expected: 공개 원고·자산·조사 diff 0줄, 정상 결과면 Opus 결과 전문과 전후 불변 지문이 있고, 비정상 결과면 실패 상태만 기록되며 승격 작업을 시작하지 않음.

---

### Task 5: Codex 재판정·최소 반영·상태 승격

**Files:**
- Create: `docs/project/reviews/2026-08-07-architecture-framework-opus5-adjudication.md`
- Modify: `src/content/docs/06-requirements-design/architecture-and-frameworks.md`
- Modify: `src/content/docs/reference/development-glossary.md` if accepted findings require it
- Modify: `research/architecture-framework-research-brief.md` if accepted findings change claim limits
- Modify: `research/source-map.md` if accepted findings change evidence scope
- Modify: `src/assets/diagrams/architecture-decision-layers.svg` if accepted findings change diagram semantics
- Modify: `src/assets/diagrams/source/architecture-decision-layers.mmd` if accepted findings change diagram semantics
- Modify: `CONTENT_MAP.md` via generator
- Modify: `PROJECT_CONTEXT.md`
- Modify: `PROJECT_MANIFEST.json`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`
- Modify: `VERIFICATION_REPORT.md`

**Interfaces:**
- Consumes: 정상 Opus 결과의 P0·P1·P2와 실제 정본 근거
- Produces: 지적별 수용·부분 수용·기각·보류 판정, 필요한 최소 변경, `request:` 검토 증거와 검증 보고

- [ ] **Step 1: 모든 지적을 정본에 대조해 재판정**

각 지적에 `판정 / 실제 근거 / 반영 위치 / 비반영 이유 / 추가 검증`을 기록합니다. P0는 모두 해결해야 하고 P1은 반영하거나 구체적 근거로 기각해야 하며, 직접 출처가 필요한 P2는 추측으로 채우지 않고 `보류`와 일반화 금지선으로 남깁니다.

- [ ] **Step 2: 최소 변경 반영과 다이어그램 동기화**

수용·부분 수용한 지적만 원고·용어집·브리프·출처 지도에 반영합니다. 다이어그램의 의미가 바뀌면 SVG·Mermaid·대체 텍스트를 같은 작업에서 함께 바꾸고, 제품별 사용법이나 Build Track 목록 변경은 포함하지 않습니다.

- [ ] **Step 3: `review` 진입 조건 판정**

정상 Opus 결과, 입력 불변, P0 0건, P1 전부 반영 또는 근거 있는 기각, 자체 루브릭 15/18 이상, 치명 항목 없음, 전체 자동·브라우저 검증이 모두 충족될 때만 front matter를 다음처럼 갱신합니다.

```yaml
contentStatus: review
reviewEvidence:
  - request:docs/project/reviews/2026-08-07-architecture-framework-opus5-review.md
```

하나라도 실패하면 `draft`를 유지하고 미충족 조건을 재판정 문서와 프로젝트 문맥에 기록합니다.

- [ ] **Step 4: 자동·빌드·렌더링 검증**

```bash
npm run sync:content-map
npm run check:static
ASTRO_TELEMETRY_DISABLED=1 npm run check
rg -n "contentStatus: review|request:docs/project/reviews/2026-08-07-architecture-framework-opus5-review.md" src/content/docs/06-requirements-design/architecture-and-frameworks.md
git diff --check
```

빌드 뒤 로컬 서버에서 `/vibe-dev-handbook/06-requirements-design/architecture-and-frameworks/`를 1440×1000과 390×844로 확인합니다. H1 1개, 상태 배지, Deep Track·캡스톤 교차 링크, 표·목록·코드 블록, SVG와 대체 텍스트, 페이지·요소 가로 넘침 0, 콘솔 오류·경고 0을 검증합니다.

Expected: 모든 게이트가 충족되고 도구 매핑 참고 페이지까지 구현됐으면 공개 문서 59개 중 `review` 11개·`draft` 35개·`seed` 13개·`ready` 0개가 되고, 도구 매핑이 승인 대기면 58개 중 `review` 11개·`draft` 34개·`seed` 13개·`ready` 0개가 됨. 두 경우 모두 공식 Build Track은 `review` 9개·`draft` 4개로 유지됨. 게이트 실패 시 상태와 집계는 해당 실패 전 값으로 유지됨.

- [ ] **Step 5: 프로젝트 문맥과 검증 보고 동기화**

`PROJECT_CONTEXT.md`, `PROJECT_MANIFEST.json`, `ROADMAP.md`, `CHANGELOG.md`, `VERIFICATION_REPORT.md`에 실제 글자 수·자산 수·루브릭·Opus 정상성·Codex 판정·명령 종료 코드·브라우저 결과·남은 사람 검토와 직접 출처 공백만 기록합니다. 로컬 성공을 배포 또는 공개 검증으로 표현하지 않습니다.

- [ ] **Step 6: staged 범위·비밀정보 점검 후 커밋**

```bash
git status --short
git diff --stat
git diff --cached --check
rg -n --hidden --glob '!node_modules/**' --glob '!.git/**' -e 'sk-[A-Za-z0-9_-]{16,}' -e 'gh[pousr]_[A-Za-z0-9_]{20,}' -e 'AKIA[0-9A-Z]{16}' .
git add src/content/docs/06-requirements-design/architecture-and-frameworks.md src/content/docs/reference/development-glossary.md research/architecture-framework-research-brief.md research/source-map.md src/assets/diagrams/architecture-decision-layers.svg src/assets/diagrams/source/architecture-decision-layers.mmd CONTENT_MAP.md docs/project/reviews/2026-08-07-architecture-framework-opus5-adjudication.md PROJECT_CONTEXT.md PROJECT_MANIFEST.json ROADMAP.md CHANGELOG.md VERIFICATION_REPORT.md
git diff --cached --stat
git diff --cached --check
git commit -m "docs: review architecture foundation"
git status --short
```

Expected: 비밀정보 의심 패턴 0건, 해당 작업 파일만 staged·committed, 커밋 뒤 작업 트리 깨끗함. `git push`와 배포는 실행하지 않음.
