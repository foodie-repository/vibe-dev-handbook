# Vibe Development Handbook Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 비개발자용 개발 온보딩 핸드북을 출판 가능한 문서 저장소로 만들고, Phase 1 집필을 안전하게 이어갈 수 있는 기반을 확립합니다.

**Architecture:** Astro Starlight가 `src/content/docs/`의 Markdown을 정적 사이트로 빌드합니다. 조사·편집 정책·템플릿은 공개 콘텐츠와 분리하고, Node 기반 콘텐츠 검증기와 GitHub Actions가 품질 및 배포 게이트를 담당합니다.

**Tech Stack:** Node.js 22, npm, Astro 7.1.6, Starlight 0.41.4, Node test runner, GitHub Actions, GitHub Pages

## Global Constraints

- 공개 콘텐츠와 작업 보고는 한국어를 기본으로 합니다.
- 코드 문법보다 구조·관계·판단·검증을 우선합니다.
- 새 의존성, 네트워크, 구조 변경, 커밋과 푸시는 사용자 승인 후 수행합니다.
- 비밀정보와 회사 데이터를 저장소에 넣지 않습니다.
- 완료 주장은 실제 테스트와 빌드 증거가 있을 때만 합니다.

---

### Task 1: 로컬 설치와 기반 검증

**Files:**
- Verify: `package.json`
- Generate: `package-lock.json`
- Verify: `astro.config.mjs`
- Verify: `src/content.config.ts`

**Interfaces:**
- Consumes: Node.js 22.12.0 이상과 npm 10 이상
- Produces: 재현 가능한 의존성 잠금 파일과 로컬 빌드 증거

- [x] **Step 1: 현재 상태 확인**

```bash
node --version
npm --version
git status --short
```

Expected: Node.js 22.12.0 이상, npm 10 이상, 예상하지 않은 변경 없음.

- [x] **Step 2: 설치 승인 후 의존성 설치**

```bash
npm install
```

Expected: `package-lock.json` 생성, 설치 오류 0개.

- [x] **Step 3: 자동 검증 실행**

```bash
npm run check
```

Expected: 테스트 0 failures, 콘텐츠 오류 0개, `dist/` 생성.

- [x] **Step 4: 변경 검토**

```bash
git status --short
git diff -- package.json package-lock.json
```

Expected: 의도한 잠금 파일과 필요한 메타데이터 변경만 존재.

- [ ] **Step 5: 승인 후 커밋**

```bash
git add package.json package-lock.json
git commit -m "chore: lock handbook dependencies"
```

### Task 2: Build Track의 필수 장을 review 상태로 승격

**Files:**
- Modify: `src/content/docs/01-mental-models/software-is-a-system.md`
- Modify: `src/content/docs/03-full-stack/client-server-full-stack.md`
- Modify: `src/content/docs/03-full-stack/http-request-response.md`
- Modify: `src/content/docs/04-backend-data/api-database-auth.md`
- Modify: `src/content/docs/05-frontend/browser-dom-rendering.md`
- Modify: `src/content/docs/06-requirements-design/prd-sdd-tdd.md`
- Modify: `src/content/docs/08-quality/testing-strategy.md`
- Modify: `src/content/docs/09-git-github/git-and-github.md`
- Modify: `src/content/docs/10-deployment-operations/build-deploy-domain-dns.md`
- Modify: `src/content/docs/10-deployment-operations/logs-monitoring-backup.md`
- Modify: `src/content/docs/11-ai-native/working-with-coding-agents.md`
- Modify: `src/content/docs/12-case-studies/analytics-dashboard-case-study.md`
- Modify: `research/source-map.md`

공식 문서 범위와 읽는 순서는 `src/content/docs/start-here/learning-paths.md`의 Build Track을 따릅니다. 이 계획에는 목록을 다시 정의하지 않고 작업 대상 파일만 명시합니다.

**Interfaces:**
- Consumes: 장 템플릿, 편집 가이드, 품질 루브릭, 용어집
- Produces: 처음부터 끝까지 연결되는 최소 학습 경로

- [ ] **Step 1: 각 장의 독자 질문과 학습 목표를 점검**

```bash
rg -n "^(title|description|contentStatus|learningObjectives):" src/content/docs/{01-mental-models,03-full-stack,06-requirements-design,09-git-github,10-deployment-operations,11-ai-native,12-case-studies}
```

Expected: 모든 대상 파일에 필수 메타데이터 존재.

- [ ] **Step 2: 품질 루브릭으로 현재 격차 기록**

각 파일에 대해 `docs/project/quality-rubric.md`의 9개 항목을 평가하고, 작업 노트에 점수와 가장 큰 위험 한 개를 적습니다. 장 본문에는 내부 점수를 게시하지 않습니다.

- [ ] **Step 3: 한 번에 한 장만 개정**

각 장에서 정의, 구조, 비유 한계, 실패 모드, 판단 기준, 연습을 보강합니다. 새로운 기술 사실은 `research/source-map.md`에 공식 출처와 확인일을 먼저 추가합니다.

- [ ] **Step 4: 장별 자동 검증**

```bash
npm run check:static
```

Expected: 테스트·콘텐츠·참조 오류 0개. 실패하면 다음 장으로 넘어가지 않습니다.

- [ ] **Step 5: 전체 빌드와 교차 링크 검토**

```bash
npm run check
```

Expected: 테스트와 빌드 성공. 브라우저에서 모바일 폭과 데스크톱 폭을 각각 확인합니다.

- [ ] **Step 6: 독립 리뷰**

작성 맥락을 보지 않은 리뷰어 또는 별도 에이전트에게 다음 기준만 제공합니다: 용어 정확성, 비유 한계, 결론의 근거, 초보자가 재구성 가능한지, 보안·운영 누락. 리뷰 결과에서 사실 오류와 모호성을 먼저 수정합니다.

- [ ] **Step 7: 상태 승격과 승인 후 커밋**

검토 기준을 통과한 파일만 `contentStatus: review`로 변경합니다.

```bash
git add src/content/docs research/source-map.md
git commit -m "docs: complete the first build-track learning path"
```

### Task 3: GitHub Pages 첫 배포

**Files:**
- Verify: `.github/workflows/ci.yml`
- Verify: `.github/workflows/deploy.yml`
- Modify only if required: `astro.config.mjs`
- Modify only for custom domain: `public/CNAME`

**Interfaces:**
- Consumes: `main` 브랜치, 빌드 가능한 잠금 파일, GitHub Pages 설정
- Produces: 공개 정적 사이트 URL과 재현 가능한 배포 이력

- [ ] **Step 1: 원격 저장소와 브랜치 확인**

```bash
git remote -v
git branch --show-current
git status --short
```

Expected: 올바른 원격, `main`, 깨끗한 작업 트리.

- [ ] **Step 2: 로컬에서 CI와 동일한 검증**

```bash
npm ci
npm run check
```

Expected: 모든 명령 종료 코드 0.

- [ ] **Step 3: GitHub Pages 소스를 GitHub Actions로 설정**

GitHub 저장소의 Settings → Pages에서 Source를 GitHub Actions로 선택합니다.

- [ ] **Step 4: 사용자 승인 후 푸시**

```bash
git push -u origin main
```

- [ ] **Step 5: Actions 증거 확인**

CI와 Deploy 워크플로의 모든 작업이 성공했는지 확인하고, 배포 URL에서 홈·검색·내비게이션·다이어그램을 직접 확인합니다.

- [ ] **Step 6: 문맥과 변경 기록 갱신**

`PROJECT_CONTEXT.md`에 공개 URL과 배포 결정을 기록하고 `CHANGELOG.md`에 첫 공개 베타를 추가한 뒤 승인 후 커밋합니다.
