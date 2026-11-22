# Draft Build Track Case Alignment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 아직 독립 검토 전인 Git·배포·운영·AI 에이전트 네 장에 모임 참가 웹앱의 동일한 사용자 문제와 증거 흐름을 연결해 이후 Phase 1 검토가 서로 다른 임의 사례를 재구성하지 않게 합니다.

**Architecture:** 각 장의 영속 개념과 기존 깊이는 유지하고, `개발 사례: 모임 참가 웹앱` 상자 하나만 장의 책임에 맞게 추가하거나 기존 일반 예시를 교체합니다. 네 장은 모두 `draft`를 유지하며 한 장씩 자동·브라우저 검증하고 독립 커밋합니다.

**Tech Stack:** Markdown/MDX, Astro 7.1.6, Starlight 0.41.4, Node.js 22.16.0, npm 10.9.2, Git

## Global Constraints

- 이 계획은 모임 캡스톤과 반복 사례 전환 계획 완료 뒤 실행합니다.
- 새 기능·제품·프레임워크를 설명하지 않고 기존 영속 개념을 모임 웹앱의 판단과 증거에 적용합니다.
- 각 장에는 웹앱 사례 하나만 추가하고 주가 사례는 데이터 책임이 결론을 바꾸는 기존 문맥에만 남깁니다.
- 네 파일의 `contentStatus: draft`를 유지하고 Opus 결과 전 `reviewEvidence`를 추가하지 않습니다.
- 산문 문단과 목록 항목의 산문은 임의 하드랩 없이 한 줄로 저장합니다.
- 장별 검증을 통과한 파일과 콘텐츠 지도만 독립 커밋하고 푸시·배포하지 않습니다.

---

### Task 1: Git 장에 모임 참가 변경의 안전 경계 적용

**Files:**
- Modify: `src/content/docs/09-git-github/git-and-github.md`
- Modify: `CONTENT_MAP.md` via generator

**Interfaces:**
- Consumes: 모임 캡스톤 W-03 참가·취소와 저장소의 자동 커밋·푸시 승인 경계
- Produces: 사용자 요구에서 diff·stage·commit·push·deploy를 분리하는 실제 Git 사례

- [ ] **Step 1: 사례 상자 작성**

`개발 사례: 모임 참가 웹앱의 중복 신청 방지` 절을 추가하고 다음 변경을 한 작업 단위로 둡니다.

```markdown
- 요구: 같은 사용자가 같은 모임에 활성 참가를 두 번 만들 수 없습니다.
- 예상 변경: 참가 서비스·데이터 제약·정상/중복 테스트·관련 문서입니다.
- 검토: `git status`, unstaged diff, staged diff로 실제 범위와 비밀·fixture를 확인합니다.
- 커밋: 수용 기준과 테스트를 통과한 관련 파일만 로컬 커밋합니다.
- 별도 승인: push, Pull Request, merge, 배포는 로컬 커밋과 다른 외부 상태 변경입니다.
```

- [ ] **Step 2: 실패 복구와 되돌리기 연결**

중복 방지 변경과 무관한 UI 포맷 변경이 섞였을 때 stage 범위를 나누고, 실패한 변경을 되돌릴 때 아직 커밋하지 않은 사용자 작업과 이미 공유된 커밋을 구분하는 질문을 추가합니다. 명령 하나로 모든 상황을 되돌릴 수 있다고 표현하지 않습니다.

- [ ] **Step 3: 검증과 커밋**

```bash
npm run sync:content-map
npm run check:static
rg -n "모임 참가 웹앱|중복 신청|unstaged diff|staged diff|push|배포" src/content/docs/09-git-github/git-and-github.md
git diff --check
git add src/content/docs/09-git-github/git-and-github.md CONTENT_MAP.md
git commit -m "docs: align Git chapter with meeting case"
```

Expected: `contentStatus: draft` 유지, Git·GitHub 정의와 기존 안전 루프 보존, 정적 검사 성공.

### Task 2: 배포 장에 동적 웹앱과 데이터베이스 운영 책임 적용

**Files:**
- Modify: `src/content/docs/10-deployment-operations/build-deploy-domain-dns.md`
- Modify: `CONTENT_MAP.md` via generator

**Interfaces:**
- Consumes: 모임 캡스톤 W-05와 정적 문서 사이트·동적 웹앱의 책임 차이
- Produces: 소스·빌드·런타임·데이터 마이그레이션·호스팅·DNS·공개 흐름을 구분하는 배포 사례

- [ ] **Step 1: 배포 책임 표 작성**

`개발 사례: 모임 참가 웹앱을 공개한다면` 절에 다음 행을 포함합니다.

```markdown
| 단계 | 확인할 책임 | 직접 증거 |
|---|---|---|
| 소스와 잠금 | 승인된 커밋과 재현 가능한 의존성 | commit ID·lockfile·깨끗한 작업 트리 |
| 빌드 | 클라이언트 자산과 서버 런타임이 대상 환경에 맞음 | 종료 코드·아티팩트·버전 |
| 설정과 비밀 | 테스트·운영 값이 분리되고 브라우저 번들에 서버 비밀이 없음 | 환경별 키 목록·빌드 산출물 검사 |
| 데이터 변경 | 스키마 마이그레이션 순서·호환성·복구 경로가 있음 | dry-run 또는 테스트 DB 결과·백업·복원 시험 |
| 호스팅·DNS·HTTPS | 공개 주소가 올바른 배포를 가리킴 | DNS·인증서·실제 URL 응답 |
| 사용자 흐름 | 공개 조회·로그인·참가·취소·정원 충돌이 운영 환경에서 의도대로 동작 | 승인된 smoke 결과·데이터 재조회·안전한 로그 |
```

- [ ] **Step 2: 정적 사이트와 동적 웹앱 차이 설명**

이 핸드북 자체는 정적 사이트라 서버 상태가 없지만 모임 웹앱은 사용자별 참가 상태와 서버 측 권한·데이터베이스가 있어 런타임과 데이터 복구 책임이 추가된다고 설명합니다. 특정 배포 제품 이름은 현재 도구 매핑 페이지로 위임합니다.

- [ ] **Step 3: 검증과 커밋**

```bash
npm run sync:content-map
ASTRO_TELEMETRY_DISABLED=1 npm run check
rg -n "모임 참가 웹앱|마이그레이션|테스트 DB|백업|복원|smoke|정적 사이트" src/content/docs/10-deployment-operations/build-deploy-domain-dns.md
git diff --check
git add src/content/docs/10-deployment-operations/build-deploy-domain-dns.md CONTENT_MAP.md
git commit -m "docs: align deployment chapter with meeting case"
```

Expected: `draft` 유지, 정적·동적 책임 차이와 공개 URL 증거 존재, 전체 빌드 성공.

### Task 3: 운영 장에 참가 실패·정원·복원 신호 적용

**Files:**
- Modify: `src/content/docs/10-deployment-operations/logs-monitoring-backup.md`
- Modify: `CONTENT_MAP.md` via generator

**Interfaces:**
- Consumes: W-03·W-04·W-05와 기존 로그·지표·알림·백업·복원 정의
- Produces: 사용자 영향과 데이터 일관성을 함께 감시하는 운영 사례

- [ ] **Step 1: 신호와 행동 조건 작성**

`개발 사례: 모집 중인 모임의 운영 신호` 절에 공개 상세 조회 성공률, 참가 요청 성공·중복·마감·권한 거절·서버 오류 분포, 정원 초과 불변식 위반 0건, 데이터베이스 연결 실패, 마지막 정상 백업과 복원 시험 시점을 구분합니다. 인증 실패나 중복 참가 같은 정상적인 업무 거절을 모두 장애로 세지 않습니다.

- [ ] **Step 2: 알림·인시던트·복구 흐름 작성**

정원 초과나 다른 사용자의 참가 취소가 확인되면 즉시 쓰기를 제한하고 영향 범위·배포 버전·관련 event_id를 안전한 내부 증거로 좁힌 뒤 데이터 복구·권한 수정·공개 흐름 재확인으로 이어지게 합니다. 로그에 이름·이메일·세션·토큰을 넣지 않고 가짜 예시 식별자만 사용합니다.

- [ ] **Step 3: 검증과 커밋**

```bash
npm run sync:content-map
npm run check:static
rg -n "모임|참가 요청|중복|마감|권한 거절|정원 초과|복원 시험|event_id" src/content/docs/10-deployment-operations/logs-monitoring-backup.md
! rg -n "실제 이메일|실제 토큰" src/content/docs/10-deployment-operations/logs-monitoring-backup.md
git diff --check
git add src/content/docs/10-deployment-operations/logs-monitoring-backup.md CONTENT_MAP.md
git commit -m "docs: align operations chapter with meeting case"
```

Expected: `draft` 유지, 정상 업무 거절과 장애가 분리되고 개인정보·비밀 예시 0건.

### Task 4: AI 에이전트 장에 수직 조각 작업 계약 적용

**Files:**
- Modify: `src/content/docs/11-ai-native/working-with-coding-agents.md`
- Modify: `CONTENT_MAP.md` via generator

**Interfaces:**
- Consumes: W-01 공개 조회와 W-03 참가·취소, 기존 8요소 작업 계약
- Produces: 범위·권한·수용 기준·검증을 갖춘 복사 가능한 모임 웹앱 작업 요청

- [ ] **Step 1: 읽기 전용 진단 계약 작성**

공개 모임 상세이 비어 보이는 문제에 대해 상태 확인·재현·Network·서버 응답·데이터 존재·렌더링 증거를 읽기 전용으로 수집하고 파일 수정·비밀 출력·운영 데이터 변경을 금지하는 진단 요청을 작성합니다.

- [ ] **Step 2: 변경 작업 계약 작성**

W-03 중복 참가 방지를 한 작업 단위로 고정하고 다음 항목을 모두 포함합니다.

```markdown
- 목표: 같은 사용자의 같은 모임 활성 참가가 한 건만 존재합니다.
- 비목표: 정원 대기 명단·알림·결제·UI 전면 개편은 하지 않습니다.
- 변경 범위: 참가 계약·데이터 제약·서비스·테스트·관련 문서입니다.
- 권한: 로컬 파일 수정·비파괴 테스트·검증 통과 뒤 관련 파일 로컬 커밋만 허용합니다.
- 수용 기준: 첫 참가 성공, 중복 참가 안전한 거절, 다른 모임 참가 영향 없음, 실패 뒤 데이터 불변입니다.
- 검증: 대상 테스트, 전체 테스트, status와 staged diff, 종료 코드·실행 수·실패 0건을 보고합니다.
- 금지: 새 의존성·네트워크·실제 계정·실제 개인정보·push·배포를 사용하지 않습니다.
```

- [ ] **Step 3: 증거 인수와 검증·커밋**

에이전트가 “완료”라고 말해도 실제 diff, 테스트 종료 코드·수량, 데이터 오라클, 브라우저 상태와 커밋·푸시·배포 상태를 별도 확인하는 인수 질문을 추가합니다.

```bash
npm run sync:content-map
ASTRO_TELEMETRY_DISABLED=1 npm run check
rg -n "공개 모임|중복 참가|비목표|수용 기준|실패 뒤 데이터|staged diff|push|배포" src/content/docs/11-ai-native/working-with-coding-agents.md
git diff --check
git add src/content/docs/11-ai-native/working-with-coding-agents.md CONTENT_MAP.md
git commit -m "docs: align agent chapter with meeting case"
```

Expected: `draft` 유지, 기존 8요소 계약과 권한 경계 보존, 전체 빌드 성공.

### Task 5: 네 장의 일관성과 프로젝트 문맥 검증

**Files:**
- Create: `docs/project/reviews/2026-08-07-draft-case-alignment-audit.md`
- Modify: `PROJECT_CONTEXT.md`
- Modify: `PROJECT_MANIFEST.json`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`
- Modify with actual results: `VERIFICATION_REPORT.md`

**Interfaces:**
- Consumes: Tasks 1~4의 네 커밋과 실제 빌드 결과
- Produces: 사례 명칭·상태·수용 기준이 일치하며 네 장이 다음 Opus 검토 대기열에 있다는 체크포인트

- [ ] **Step 1: 일관성 감사 문서 작성**

네 장마다 `사례 사용자 행동`, `장의 영속 개념`, `추가된 실패 위험`, `검증 증거`, `상태 유지 이유`, `다음 독립 검토`를 표로 기록합니다. 사례 표시 이름은 모두 `개발 사례: 모임 참가 웹앱`으로 통일합니다.

- [ ] **Step 2: 전체 검증과 브라우저 확인**

```bash
ASTRO_TELEMETRY_DISABLED=1 npm run check
rg -n "개발 사례: 모임 참가 웹앱" src/content/docs/09-git-github/git-and-github.md src/content/docs/10-deployment-operations/build-deploy-domain-dns.md src/content/docs/10-deployment-operations/logs-monitoring-backup.md src/content/docs/11-ai-native/working-with-coding-agents.md
git diff --check
```

Expected: 네 파일 모두 같은 표시 이름, 상태 수 변화 없음, 전체 빌드 성공. 각 페이지를 1440×1000과 390×844에서 확인해 새 사례 상자·표·코드 블록·가로 넘침·콘솔 오류를 기록합니다.

- [ ] **Step 3: 문맥 동기화와 커밋**

네 장이 사례 정렬을 마쳤지만 Opus·사람 검토 전 `draft`라는 사실과 실제 검증 결과를 프로젝트 문맥에 기록합니다.

```bash
git add docs/project/reviews/2026-08-07-draft-case-alignment-audit.md PROJECT_CONTEXT.md PROJECT_MANIFEST.json ROADMAP.md CHANGELOG.md VERIFICATION_REPORT.md
git diff --cached --check
git commit -m "docs: verify draft case alignment"
```

Expected: 검증·문맥 파일만 커밋되고 작업 트리가 깨끗함.
