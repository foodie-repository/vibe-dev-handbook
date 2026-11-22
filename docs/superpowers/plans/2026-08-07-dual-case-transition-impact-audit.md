# Dual Case Transition Impact Audit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 승인된 모임 웹앱·주가 분석 이중 사례 체계가 현재 공개 원고·다이어그램·조사·검토 증거에 미치는 영향을 파일별로 판정하고 이후 구현의 상태·재검토 경계를 고정합니다.

**Architecture:** 키워드 검색과 참조 그래프를 함께 사용해 직접 표현과 연결 자산을 찾고, 각 파일을 `변경 없음`, `표면 편집`, `실질 변경`, `역사적 증거 보존`으로 분류합니다. 감사 문서는 이후 다섯 계획이 소비하는 단일 영향 목록이며 이 단계에서는 공개 원고와 기존 검토 기록을 수정하지 않습니다.

**Tech Stack:** Markdown, ripgrep, Git, Node.js 22.16.0, npm 10.9.2, 기존 콘텐츠 검증 스크립트

## Global Constraints

- 공개 콘텐츠의 정본은 `src/content/docs/`이며 이 계획에서는 수정하지 않습니다.
- `docs/project/reviews/`의 과거 검토 기록은 당시 정본의 역사적 증거이므로 수정하지 않습니다.
- 현재 `review` 문서를 일괄 강등하지 않고 파일별 실질 변경이 시작되는 커밋에서만 `draft`로 재판정합니다.
- 네트워크 접근, 새 의존성, 실제 주식 데이터, Supabase·Vercel·Codex Sites의 현재 기능 주장은 이 계획의 범위 밖입니다.
- Markdown 산문 문단과 목록 항목의 산문은 임의 하드랩 없이 한 줄로 저장합니다.
- 검증을 통과한 이 감사 단위는 관련 파일만 로컬 커밋하고 푸시·배포는 수행하지 않습니다.

---

### Task 1: 직접 표현과 참조 자산 기준선 수집

**Files:**
- Inspect: `src/content/docs/`
- Inspect: `src/assets/diagrams/`
- Inspect: `research/`
- Inspect: `docs/project/reviews/`
- Inspect: `CONTENT_MAP.md`

**Interfaces:**
- Consumes: `docs/superpowers/specs/2026-08-07-dual-case-study-system-design.md`의 표면·실질 변경 정의
- Produces: 감사 문서에 옮길 재현 가능한 파일 목록과 현재 상태

- [ ] **Step 1: 작업 트리와 승인된 정본 확인**

```bash
git status --short --branch
git show --stat --oneline 93f9f88
```

Expected: 브랜치 `main`, 계획 실행 전에 예상하지 않은 변경 없음, 커밋 `93f9f88 docs: refine handbook case study design` 확인.

- [ ] **Step 2: 직접 표현을 전수 검색**

```bash
rg -n "반도체|북마크|bookmark|기업 A|기업 B" src/content/docs src/assets/diagrams research docs/project/reviews
```

Expected: 공개 문서에서는 `software-is-a-system.md`, `client-server-full-stack.md`, `http-request-response.md`, `api-database-auth.md`, `browser-dom-rendering.md`, `prd-sdd-tdd.md`, `first-full-stack-project.md`, `analytics-dashboard-case-study.md`, `learning-paths.md`가 직접 검색되고, 북마크·API·분석 다이어그램과 현재 조사·과거 검토 기록이 함께 식별됨.

- [ ] **Step 3: 키워드가 없는 연결 파일 확인**

```bash
rg -n "first-full-stack-project|analytics-dashboard-case-study|bookmark-architecture|analytics-dashboard-architecture|api-database-auth-flow" src/content/docs src/assets research docs/project CONTENT_MAP.md
rg --files src/assets/diagrams | rg "bookmark|analytics-dashboard|api-database-auth"
```

Expected: `12-case-studies/index.md`, 세 다이어그램의 SVG·Mermaid 원본, 출처 지도, 콘텐츠 지도와 과거 검토 증거가 참조 그래프로 추가됨.

### Task 2: 파일별 영향 감사 정본 작성

**Files:**
- Create: `docs/project/reviews/2026-08-07-dual-case-transition-impact-audit.md`

**Interfaces:**
- Consumes: Task 1의 검색 결과와 현재 frontmatter 상태
- Produces: 후속 계획이 그대로 사용하는 `파일`, `현재 상태`, `영향 등급`, `변경 이유`, `새 상태`, `재검토` 계약

- [ ] **Step 1: 감사 문서 골격과 판정 규칙 작성**

문서에 `목적`, `기준선`, `판정 규칙`, `공개 문서`, `다이어그램`, `조사와 출처`, `역사적 검토 증거`, `상태 영향`, `후속 계획 입력` 섹션을 이 순서로 작성합니다. `판정 규칙`은 승인 명세의 정의를 인용하지 않고 다음처럼 재서술합니다.

```markdown
- 변경 없음: 새 사례 체계와 모순되는 표현·링크·상태가 없고 적용 예를 추가할 학습 필요도 없습니다.
- 표면 편집: 이름이나 연결 문구만 바뀌며 요구사항·필드·권한·오라클·출처·결론이 유지됩니다.
- 실질 변경: 사용자 문제, 상태, 입력·출력, 권한, 데이터 의미, 실패, 테스트, 출처 또는 학습 흐름이 달라집니다.
- 역사적 증거 보존: 당시 원고를 검토한 기록이므로 내용은 바꾸지 않고 새 검토에서 이전 정본으로만 참조합니다.
```

- [ ] **Step 2: 공개 문서 판정표 작성**

다음 행을 모두 포함하고 검색 줄 번호, 참조 자산과 판정 이유를 실제 파일에 대조해 기록합니다.

| 파일 | 기준 판정 | 상태 처리 |
|---|---|---|
| `src/content/docs/12-case-studies/first-full-stack-project.md` | 실질 변경 | 기존 `draft` 유지 |
| `src/content/docs/12-case-studies/analytics-dashboard-case-study.md` | 실질 변경 | 변경 시작 시 `review`→`draft`, 기존 `reviewEvidence` 제거 |
| `src/content/docs/04-backend-data/api-database-auth.md` | 실질 변경 | 변경 시작 시 `review`→`draft`, 기존 `reviewEvidence` 제거 |
| `src/content/docs/01-mental-models/software-is-a-system.md` | 실질 변경 | 변경 시작 시 `review`→`draft`, 새 독립 검토 필요 |
| `src/content/docs/03-full-stack/client-server-full-stack.md` | 실질 변경 | 변경 시작 시 `review`→`draft`, 새 독립 검토 필요 |
| `src/content/docs/03-full-stack/http-request-response.md` | 실질 변경 | 변경 시작 시 `review`→`draft`, 새 독립 검토 필요 |
| `src/content/docs/05-frontend/browser-dom-rendering.md` | 표면 편집 | 학습 결론·필드가 유지되는 최소 변경만 허용, 상태 유지 후보 |
| `src/content/docs/06-requirements-design/prd-sdd-tdd.md` | 표면 편집 | 원천·최신성 요구의 의미가 유지되는 최소 변경만 허용, 상태 유지 후보 |
| `src/content/docs/08-quality/testing-strategy.md` | 변경 없음 또는 링크 문맥 표면 편집 | `FR-014`와 오라클 의미가 바뀌지 않으면 상태 유지 후보 |
| `src/content/docs/start-here/learning-paths.md` | 실질 변경 | 기존 `draft` 유지, Build Track 12→13 동기화 |
| `src/content/docs/12-case-studies/index.md` | 표면 편집 | 기존 `draft` 유지 |
| `src/content/docs/index.md` | 링크 문맥 표면 편집 | 기존 `draft` 유지, `12개 장`→`13개 장` 링크 문구·링크 확인 |

표면 편집 후보는 실제 구현 diff에서 요구사항·필드·위험·출처가 바뀌면 즉시 실질 변경으로 재분류한다는 규칙을 표 아래에 적습니다.

- [ ] **Step 3: 자산·조사·증거 판정표 작성**

다음 책임을 빠짐없이 기록합니다.

```markdown
- `bookmark-architecture.svg`와 `source/bookmark-architecture.mmd`: 모임 웹앱 구조로 이름과 의미를 함께 바꾸는 실질 변경입니다.
- `api-database-auth-flow.svg`와 `.mmd`: 보고서 수정 흐름을 모임 참가·취소의 주체·대상·행동·정원·트랜잭션 흐름으로 바꾸는 실질 변경입니다.
- `analytics-dashboard-architecture.svg`와 `.mmd`: 파일명은 유지하되 주가 fixture의 원천·거래일·조정 상태·가격·거래량 계약을 반영하는 실질 변경 후보입니다.
- `research/api-database-auth-research-brief.md`: 2026-08-06 반도체 보고서 정본을 뒷받침한 조사 기록으로 보존하고 새 모임 사례 브리프를 별도 생성합니다.
- `research/source-map.md`: 현재 공개 원고를 따라 새 적용 기록과 미확인 범위를 추가합니다.
- `docs/project/reviews/2026-08-05-*`와 `2026-08-06-*`: 수정 금지, 새 원고의 검토 증거로 재사용 금지입니다.
```

### Task 3: 프로젝트 문맥에 감사 결과 연결

**Files:**
- Modify: `PROJECT_CONTEXT.md`
- Modify: `PROJECT_MANIFEST.json`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`

**Interfaces:**
- Consumes: Task 2의 영향 감사 경로와 판정 수
- Produces: 다음 실행자가 영향 감사부터 모임 캡스톤으로 이어가는 단일 다음 단계

- [ ] **Step 1: 현재 상태와 다음 단계 갱신**

`PROJECT_CONTEXT.md`의 마지막 2026-08-07 사례 문단 뒤에 영향 감사 완료 사실, 아직 공개 원고 미변경, 실질 변경 `review` 문서는 변경 시작 시에만 `draft`로 바꾼다는 경계를 한 문단으로 추가합니다. `PROJECT_MANIFEST.json`의 두 번째 `nextSteps`는 다음 문장으로 교체합니다.

```json
"이중 사례 전환 영향 감사를 정본으로 사용해 먼저 모임 참가 웹앱 캡스톤을 독립 작업으로 확장하고, 실질 변경된 review 원고는 변경 시작 커밋에서 draft로 재판정한다."
```

`ROADMAP.md`는 Phase 1 사례 체계 문단에 감사 문서 링크와 구현 순서만 추가하고 상태 수치는 바꾸지 않습니다. `CHANGELOG.md`의 미출시 `추가`에 영향 감사 문서와 역사적 검토 증거 보존 규칙을 한 항목으로 기록합니다.

- [ ] **Step 2: JSON과 불변 범위 검증**

```bash
node -e "JSON.parse(require('fs').readFileSync('PROJECT_MANIFEST.json','utf8')); console.log('manifest valid')"
git diff -- docs/project/reviews/2026-08-05-* docs/project/reviews/2026-08-06-*
```

Expected: `manifest valid`, 과거 검토 기록 diff 0줄.

### Task 4: 감사 단위 검증과 커밋

**Files:**
- Verify: `docs/project/reviews/2026-08-07-dual-case-transition-impact-audit.md`
- Verify: `PROJECT_CONTEXT.md`
- Verify: `PROJECT_MANIFEST.json`
- Verify: `ROADMAP.md`
- Verify: `CHANGELOG.md`

**Interfaces:**
- Consumes: Task 1~3의 감사 결과
- Produces: 공개 원고를 건드리지 않은 검증 가능 감사 커밋

- [ ] **Step 1: 감사 누락과 플레이스홀더 검사**

```bash
rg -n "first-full-stack-project|analytics-dashboard-case-study|api-database-auth|software-is-a-system|client-server-full-stack|http-request-response|browser-dom-rendering|prd-sdd-tdd|testing-strategy|learning-paths|bookmark-architecture|analytics-dashboard-architecture|api-database-auth-flow" docs/project/reviews/2026-08-07-dual-case-transition-impact-audit.md
! rg -n -e 'TB''D' -e 'TO''DO' -e '추후'' 결정' -e '미''정' docs/project/reviews/2026-08-07-dual-case-transition-impact-audit.md
```

Expected: 모든 대상 경로가 한 번 이상 검색되고 플레이스홀더 0건.

- [ ] **Step 2: 저장소 검증**

```bash
npm run check:static
git diff --check
git status --short
```

Expected: 테스트 26개와 콘텐츠·참조 검증 성공, 공백 오류 0건, 감사 관련 5개 파일만 변경.

- [ ] **Step 3: 범위 고정 커밋**

```bash
git add docs/project/reviews/2026-08-07-dual-case-transition-impact-audit.md PROJECT_CONTEXT.md PROJECT_MANIFEST.json ROADMAP.md CHANGELOG.md
git diff --cached --check
git commit -m "docs: audit dual case transition impact"
```

Expected: 커밋 성공, `git status --short` 결과 없음. 푸시하지 않습니다.
