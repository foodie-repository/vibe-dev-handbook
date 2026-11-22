# Public Beta Completion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 비개발자 바이브 코더가 소프트웨어의 구조·용어·개발 절차·개발자의 사고법을 이해하고 AI가 만든 결과를 질문·검토·검증·운영할 수 있도록 돕는 한국어 핸드북을 완성하여 공개 GitHub 저장소와 GitHub Pages에 `v0.1.0-beta.1`로 배포하고 실제 공개 URL까지 검증합니다.

**Architecture:** 승인된 완성 명세를 불변에 가까운 상위 계약으로 두고, 이 문서를 진행률·작업 순서·체크리스트·변경 이유를 기록하는 단일 가변 실행 원장으로 사용합니다. Task 8 뒤 공개 콘텐츠 59개는 역할별 작업 패키지로 한 번씩만 배정하고, 로컬 원고 완성(M3), 시각·사이트 완성(M4), Codex 두 겹 독립 검토와 controller 재판정(M5), 공개 준비(M6), 실제 GitHub Pages 공개와 URL 검증(M7)을 분리합니다.

**Tech Stack:** Markdown, Astro 7.1.6, Starlight 0.41.4, Node.js 22.16.0 권장, npm 10.9.2, Node test runner, Mermaid 원본과 정적 SVG, Pagefind, GitHub Actions, GitHub Pages, Codex, Playwright CLI.

## 2026-09-05 Task22 Codex 검토 계약 개정

푸디님의 명시 결정에 따라 기존 Task22와 M5의 **앞으로의** 완료 기준은 Claude 구독 전용 검토가 아니라 Codex 두 겹 독립 검토입니다. R01~R25는 controller·작성자·이전 대화 이력과 분리된 fresh Codex reviewer, R26은 R01~R25 reviewer들과 분리된 fresh Codex reviewer가 수행합니다. 기본 프로필은 R01~R25 `gpt-6-astra`/`high`, R26 `gpt-6-astra`/`xhigh`이며 사용 불가 시 자동 fallback하지 않습니다. 과거 Claude 계약·시도·사전 확인은 `waived_by_owner`, 모델 호출0, 유효 결과 없음의 역사 기록으로 보존하고 Claude PASS로 해석하지 않습니다. R01~R26 완료 뒤에도 public59 `draft`/ready0, 소유자 승인, 동일 RC SHA, M6/M7는 별도 게이트입니다.

상태 closeout 기준은 DEC-PB-009와 계약 개정 커밋 `c9e83a9`, Fix Round 2 독립 재검토 `PASS` C0/I0/M0입니다. M5-01의 기존 완료 점수는 그대로 두고 이 계약 증거를 추가하며, M5-02~04·R01~R26·public59·점수81.5·감사·source gap·M6-03·M7은 승격하지 않습니다. 다음 실행은 R01 입력과 결합 해시를 고정한 뒤 계획된 fresh Codex reviewer 검토를 시작하는 것입니다.

## 역사 전용: 2026-08-30 실행 승인

이 절은 2026-08-30 당시의 실행 승인과 상태를 보존하는 역사 기록이며, 2026-09-05 이후 M5의 현재 실행 지시가 아닙니다. 기존 목표·Task·가중 원장은 유지합니다. 공개·비민감 공식 원문 읽기 전용 조사, 현재 package/lock에 고정된 정확한 버전의 로컬 의존성 복원, 기존 자동 검사·빌드·preview·localhost Chrome 검증을 반복 승인 없이 진행합니다. 특정 라이선스·Claude·네트워크·권한 단위가 막혀도 그 결과에 의존하지 않는 Task20~26 독립 작업이 하나라도 남으면 전체 목표를 `blocked`로 바꾸지 않습니다.

Claude R01~R26은 구독 포함 Opus4.8/1M/high 조건을 충족할 때만 실행하는 M5·`ready`·공개 전 필수 게이트이며 Codex 검토로 대체하지 않습니다. 다만 구현·자동 검증·필요한 실제 브라우저/출력물 검증·작성자와 분리된 Codex 작업 검토에서 Critical·Important 0개를 확인하고 다른 미완료 변경과 안전하게 분리할 수 있는 단위는 관련 파일만 `implementation verified / Claude review pending` 로컬 체크포인트로 커밋합니다. 이후 Claude finding이나 입력 변경은 기존 커밋을 덮어쓰지 않고 좁은 수정 커밋과 필요한 재검토로 처리합니다. push·원격 브랜치·Pages·릴리스·실제 공개·프로젝트 라이선스·핵심 패키지/구조 변경은 승인하지 않습니다.

## 역사 전용: 2026-08-28 Claude 운영 개정

이 절은 2026-08-28 당시 Claude·Opus·구독·인증 운영을 보존하는 역사 기록이며, 2026-09-05 이후 M5의 현재 실행·차단·재개 조건이 아닙니다. 당시 푸디님의 명시 지시에 따라 Claude 실행·비용·입력·대기 운영만 변경했습니다. 최상위 목표, R01~R25 공개59개 전체와 R26 통합 검토, 품질·소유자 승인·배포/공개 권한 경계, 과거 Task·검토·Opus5/xhigh 기록과 증거 파일명은 유지합니다. 기존 목표/작업을 새로 만들거나 앱 목표를 문서로 재개했다고 주장하지 않았습니다. 당시 재개 지점은 Task20 PBV-02였고 Task19를 재실행하지 않았습니다.

[명세 10.2절](../specs/2026-08-12-public-beta-completion-design.md)의 구독 포함 사용량 입증이 최우선입니다. 실제 바이너리 `/opt/homebrew/bin/claude`에서 `--model 'claude-opus-4-8[1m]' --effort high`를 구독 안에서 충족하지 못하면 시험 모델 호출 없이 해당 검토를 `blocked`로 기록합니다. API/기존 크레딧/Extra usage/추가 결제/자동 충전/유료 경유/한도 우회 계정·상향/자동 fallback은 금지하고 추가 비용을 선택지로 묻지 않습니다. 기존 승인이나1M 지정은 구독 외 비용 승인이 아닙니다. 비밀값·인증정보 내용은 열람/저장하지 않고 설정 존재·비민감 상태만 확인하며 전역 설정/인증정보를 바꾸지 않습니다. Codex의 모델·effort는 변경하지 않습니다.

[공통 검토 계약](../../project/reviews/public-beta-1/opus5-review-contract.md)과 [요청 템플릿](../../../templates/public-beta-review-request-template.md)·[시도 템플릿](../../../templates/public-beta-claude-attempt-template.md)을 사용합니다. 필수 기준 C01~C12·권위 조항 대응표, 대상 본문 전체·필요한 실제 출처/인접 문맥/용어/그림/미해결 finding을 주고 전체 명세/계획은 반복 입력하지 않습니다. 쟁점 관련 조항만 추가하며 작업 단위 검토는 최종 M5와 별도로 관리합니다.

검토 차단 중에는 파일/해시/검증 범위를 분리해 기존 PBV-02 변경을 보존하고 비의존 Codex 작업을 계속합니다. 고정 입력 수정은 영향 행·전후 해시·이전 증거 무효화/재검토를 기록합니다. 당시 운영에서는 필요한 Claude 검토 전 커밋/완료를 보류했으며 2026-08-30 이후 로컬 체크포인트 커밋은 위 실행 승인이 우선합니다. 구현 완료·필수 Claude 검토 대기·공개 가능은 계속 별도 상태입니다. 원고/관련 입력 불변·당시 계약상 유효한 완료 검토는 모델 변경만으로 반복하지 않습니다. 한도 직후 재시도/가용성 폴링·예약/자동화·충분한 유효 검증의 이유 없는 반복을 하지 않습니다. 실제 재개 조건과 구독/모델 조건을 함께 확인한 뒤 막힌 행 하나만 제한적으로 재시도하고 독립 작업 소진 시 잔여 조건을 보고합니다. preview/Chrome 권한 거절은 이 개정으로 해제되지 않습니다.

## Global Constraints

### 2026-08-28 재개 실행 체크포인트

정본 worktree의 branch와 HEAD는 `codex/public-beta-completion`·`eacf0264268f9b4dcf1dfa4e95399c7df3c5957c`입니다. 초기 PBV02의 SVG/MMD bytes는 그대로이며 새 stage·commit은 없습니다. 아래는 검토 차단에 의존하지 않는 구현·검증 진척이지 milestone 점수·closeout·ready 승격이 아닙니다.

| 단위 | 이번에 완료한 로컬 범위 | 남은 조건 |
|---|---|---|
| 운영 개정 | 구독 전용 exact Opus4.8/1M/high·공통 계약/권위 대응·검토 입력/대기 원칙 구현·정적/빌드 검사 | 구독 포함·구독 외 과금 비소비 입증, 필요한 독립 검토 |
| Task20 | PBV02→09→12→08→01→06→05→07→11→10→04의11단위, 각각 구현·최소 자동 검사·실제 Chrome84최종상태·원본픽셀/실패증거 보존 | 단위별 Claude 검토·필요수정·로컬커밋·전체closeout. PBV03/PBV13 유지 |
| Task21 | 표·basepath 실제실패 교정, 새150페이지/68시각·표12·검색24·내비게이션/404, 잘린 API모바일crop2개만 실제viewport로 보충 | keyboard-theme2개 not-confirmed·실제UI진단timeout, 필수독립검토. [QA](../../project/reviews/public-beta-1/site-qa.md) |
| Task24 | 공식라이선스2·경로/제3자정책·기여/보안/PR/Issue·준비버전0.1.0-beta.1, focused/전체검사 | 권리/배포고지·독립검토·실제GitHubUI. README는RC검증전 준비중 |
| Task25 | 값없는안전검사37테스트, 과거7문서session/cost18개마스킹, tracked206 finding0·역사값비출력감사·권리후보대조 | 새파일별도검사·원전/기여권리·배포물고지·Claude/owner. [감사](../../project/reviews/public-beta-1/release-safety-audit.md) |
| Task26 Step1 | CI/deploy npm ci→check→validate:release, 권한/트리거유지·공식Action확인·로컬분기검사 | worktree npm ls 직접의존성2개없음exit1. cleanRC·M5/ready59·owner·최종RC행렬은미수행 |

Node22.16.0/npm10.9.2 최종check는108테스트·59문서·171참조+14SVG·계획100점/59개/중복0/누락0·HTML60/Pagefind60/literal0, validate:release는206개/finding0으로 exit0입니다. 첫Node22검사106/107의 ignored조사앵커오류를 보존하고 `.superpowers`만제외+실패테스트 뒤 재검증했습니다. 빌드 전후dist171파일의경로/bytes해시가 같아 전체브라우저를 반복하지 않았습니다. 기록갱신 뒤 참조/계획/diff/예정파일안전/입력해시만 확인합니다.

재개 입력은 [개별/결합 해시 원장](../../project/reviews/public-beta-1/review-inputs-2026-08-28.json)에 고정합니다. Task20 과거 full화면은 당시레이아웃 증거이고 Task21 CSS변경후 현행픽셀은 새68시각행렬로 보충하며 실질입력 변경범위를 남깁니다. 미호출 Claude PASS는 없고 유효한 불변 과거검토는 모델변경만으로 다시 실행하지 않습니다. M5 R01~R25의전체59개/R26, owner/ready/M6/M7는 유지합니다. 더 진행하려면 구독/실제UI/공식고지접근·기여권리/의존성환경 조건이 필요하며 외부쓰기·설치·시험Claude·유료경로·우회는 하지 않습니다.

- 모든 공개 원고와 프로젝트 문서는 비개발자 독자를 기준으로 정확하고 자연스러운 한국어로 작성합니다.
- 영속 개념·원리·판단 기준을 먼저 설명하고, 현재 도구는 날짜가 있는 별도 매핑으로만 다룹니다.
- 일반 개발 사례는 모임 참가 웹앱, 분석 사례는 교육용 주가 fixture 대시보드를 사용합니다. 반도체처럼 합의에서 제외한 특수 사례는 공개 원고에 남기지 않습니다.
- 사례가 개념을 대체하지 않게 하고, 비유에는 맞는 지점과 깨지는 지점을 함께 씁니다.
- 코드 문법보다 구조·관계·흐름·실패 방식·검증법을 우선합니다.
- 시각화는 이해를 실제로 돕는 경우에만 사용합니다. `diagram-design`을 기본으로 하고, 노드 8~12개의 복잡한 구조도는 Node.js 22.16.0 호환성을 재확인한 뒤 `archify`를 조건부로 사용하며, 12개를 넘는 정보 단위는 먼저 분할합니다.
- 게시용 시각 자료의 정본은 정적 SVG 하나입니다. Mermaid 원본은 의미를 보존할 수 있을 때만 유지하며, Mermaid·Archify·SVG 세 종류를 동시에 정본으로 만들지 않습니다.
- 공개 콘텐츠 문자 수가 바뀌면 `npm run sync:content-map`으로 `CONTENT_MAP.md`를 재생성합니다.
- 파일 수정 후 최소 `npm run check:static`을 실행하고, 의존성이 설치된 정본 worktree에서는 `ASTRO_TELEMETRY_DISABLED=1 npm run check`까지 실행합니다.
- 로컬 자동 검사, 브라우저 확인, 독립 AI 검토, 소유자 승인, 로컬 커밋, 원격 push, 실제 배포를 서로 다른 상태로 기록합니다.
- 잠금 파일에 없는 새 의존성·버전, 새 프레임워크 도입, 대량 이동·삭제, 비밀정보·개인정보·운영 데이터 사용은 허용되지 않습니다. 현재 package/lock의 정확한 버전만 쓰고 manifest·lock 불변을 확인하는 로컬 복원은 허용하며 설치 산출물·캐시는 커밋하지 않습니다.
- 공개·비민감 공식 문서·표준·공식 저장소/릴리스/태그/커밋/라이선스/NOTICE/COPYRIGHT·정확한 package/crate 메타데이터와 배포 포함 범위의 읽기 전용 조사는 승인됐습니다. 로그인·유료·비공개·개인/내부 자료는 접근하지 않습니다. 새 M5 검토는 2026-09-05 Codex 두 겹 계약의 고정 입력·분리된 fresh reviewer·계획된 모델/effort·읽기 전용 조건을 모두 충족할 때만 허용하며 자동 fallback하지 않습니다. Claude/Opus·구독 조건은 위 역사 전용 2026-08-28 기록에만 적용됩니다.
- `git push`, 원격 저장소 생성, Pages 설정, 태그·릴리스 생성, 실제 공개 배포는 M7 실행 직전 별도 승인을 받습니다.
- 관련 독립 작업이 수용 기준·필수 검증·필요한 독립 검토를 모두 통과하면 변경 파일만 선별해 작은 로컬 커밋을 만들고, push·merge·deploy는 하지 않습니다.
- 장시간 작업도 시간·세션 기준 `WIP` 커밋으로 저장하지 않습니다. 기본은 한 미커밋 독립 단위이며 검토 차단 시 위 운영 개정의 비의존 진행 예외를 따릅니다. 범위가 크면 수정 전에 검토 가능한 하위 체크포인트로 나눠 각 체크포인트의 수용 기준·검증·남은 범위를 기록한 뒤 커밋합니다.
- 사용자 결정이 필요하지 않은 로컬 작업은 체크리스트 순서대로 계속 진행합니다. 목표·라이선스·공개 범위·권한 경계가 바뀌면 멈추고 명세와 이 계획의 변경 기록을 먼저 갱신합니다.
- 외부 개발자 한 명의 가벼운 검토는 선택 항목 O1이며 완료 분모와 공개 차단 조건에 포함하지 않습니다.

---

## 1. 정본과 우선순위

문서나 과거 계획이 충돌하면 다음 순서로 판정합니다.

1. `docs/superpowers/specs/2026-08-12-public-beta-completion-design.md`
2. 이 마스터 실행 계획과 현재 Git 객체·자동 검증 결과
3. 연결된 기존 하위 계획과 역사적 검토 기록

과거 하위 계획에 남은 `max`, Claude Code Opus 4.8·1M/`high`, 사람 세 역할 필수 검토, 오래된 상태 수치와 미체크 상자는 현행 수용 기준이 아닙니다. M5 독립 검토는 R01~R25 `gpt-6-astra`/`high`와 분리된 R26 `gpt-6-astra`/`xhigh`의 fresh Codex reviewer 계약으로 고정하고, 사람 기술·편집·비개발자 독자 검토는 실제 수행했을 때만 선택 증거로 기록합니다. 완료 여부는 체크 상자만 보지 않고 커밋 객체, 파일 범위, 현재 출력과 증거 경로를 함께 확인합니다.

### 연결된 기존 하위 계획

| 계획 | 이 마스터 계획에서의 역할 | 실행 판정 |
|---|---|---|
| `docs/superpowers/plans/2026-08-04-foundation-scaffold.md` | 초기 구조와 검증 기반의 역사 기록 | 완료된 기반 증거만 참조 |
| `docs/superpowers/plans/2026-08-06-api-database-auth-draft.md` | API 장의 과거 집필·검토 기록 | 현행 원고의 새 M3·M5 계약이 우선 |
| `docs/superpowers/plans/2026-08-07-dual-case-transition-impact-audit.md` | 이중 사례 전환 영향 감사 | 완료 증거로 참조하고 M1에서 전체 코퍼스를 다시 감사 |
| `docs/superpowers/plans/2026-08-07-meeting-webapp-capstone.md` | 모임 참가 웹앱 캡스톤 | 완료된 원고 기반을 M3에서 최종 정렬 |
| `docs/superpowers/plans/2026-08-07-stock-dashboard-capstone.md` | 교육용 주가 fixture 캡스톤 | 완료된 원고 기반을 M3에서 최종 정렬 |
| `docs/superpowers/plans/2026-08-07-recurring-case-migration.md` | 반복 사례 정렬 | 완료 증거로 참조하고 잔존 표현은 M1에서 재검색 |
| `docs/superpowers/plans/2026-08-07-draft-build-track-case-alignment.md` | Git·배포·운영·에이전트 장 사례 정렬 | 완료 증거로 참조하고 새 M5 검토는 다시 수행 |
| `docs/superpowers/plans/2026-08-07-current-tool-mapping.md` | 현재 도구 매핑의 조사 계약과 구현 | Task 1은 완료, 나머지는 M2-01~03으로 이관 |
| `docs/superpowers/plans/2026-08-07-learning-path-search-and-review.md` | 공식 Build Track 13장과 검색 경험 | 구조·검색 작업을 M2-04로 이관하고 과거 검토 작업은 M5로 통합 |
| `docs/superpowers/plans/2026-08-07-architecture-framework-foundation.md` | 아키텍처·프레임워크 기반 장 | M2-05~06으로 이관 |

## 2. 실행 기준점과 브랜치 계약

- 명세 커밋: `83bdfe9f831c3ca24a70a2218990171f3fda0a58`
- 명세 작성 브랜치: `codex/current-tool-mapping`
- 마스터 계획 승인 뒤 실행 브랜치: `codex/public-beta-completion`
- 마스터 계획 승인 뒤 실행 worktree: `.worktrees/public-beta-completion`
- 공개 베타 정본 SHA: 마스터 계획 커밋을 부모로 삼은 새 실행 브랜치의 최초 커밋에서 기록
- 현재 로컬 `main`: `c362d9c`의 프롬프트 블록 하드랩 정규화가 별도로 존재하므로 단순 merge하지 않고 M0-03에서 최신 원고에 의미를 좁게 이식

M0-03에서 `main`의 변경을 가져올 때 최신 사례·원고를 보존합니다. `AGENTS.md`의 프롬프트 블록 규칙과 여전히 필요한 자연어 줄바꿈 교정만 현재 문맥에 적용하고, 충돌하는 `CONTENT_MAP.md`는 선택하지 않고 생성기로 다시 만듭니다. `git reset --hard`, 강제 push, 사용자 변경 폐기는 금지합니다.

## 3. 진행률 계산과 초기 기준선

전체 진척률은 완성 명세의 가중치 합계 100점으로 계산합니다. `done` 작업만 전액 반영하고, `in_progress`는 이 문서에 명시된 하위 체크포인트가 실제 증거로 확인된 비율만 반영합니다. 상태 이름만으로 품질을 과대평가하지 않도록 M3의 현재 원고 기준선에는 `seed` 10%, `draft`·`review` 50%, `ready` 100%의 보수적 작성 단계 환산값을 사용합니다. 이 환산값은 최초 기준선 계산에만 사용하고 이후에는 각 작업 패키지의 수용 기준 통과 여부로 갱신합니다.

<!-- PUBLIC_BETA_LEDGER_START -->
| ID | 마일스톤 | 점수 | 상태 | 현재 인정 점수 | 완료 증거 또는 다음 게이트 |
|---|---|---:|---|---:|---|
| M0-01 | 완성 명세 승인·커밋 | 2.0 | done | 2.0 | `83bdfe9f831c3ca24a70a2218990171f3fda0a58` |
| M0-02 | 마스터 계획 승인·커밋 | 2.0 | done | 2.0 | 계획 `e0228e5`, 운영 보강 `217e5ab`, 푸디님 2026-08-12 최종 승인 |
| M0-03 | 실행 정본 branch/worktree와 `main` 변경 조정 | 3.0 | done | 3.0 | 기준 `ff8fec85cb2bde4411638ef4f846649f1a4797ad`, Task 1 local commit |
| M0-04 | 생명주기·검증기·진행 원장 계약 정렬 | 1.0 | done | 1.0 | Task 2 `600ab10`, Task 3 `test: validate public beta execution ledger` |
| M1-01 | 58개 인벤토리·역할·규칙 감사 | 5.0 | done | 5.0 | Task 4 `docs/project/public-beta-content-audit.md` |
| M1-02 | 출처 공백·폐기 사례 의미 감사 | 2.0 | done | 2.0 | Task 5 `research/public-beta-source-gap-register.md` |
| M1-03 | 24개 시각 원본·게시 자산 감사 | 3.0 | done | 3.0 | Task 6 `docs/project/public-beta-visual-audit.md` |
| M2-01 | 현재 도구 조사 계약 | 1.0 | done | 1.0 | `48d0c8e`, `4acf77f` |
| M2-02 | 공식 자료 조사와 날짜 있는 사실 팩 | 1.5 | done | 1.5 | Task 7 `167b945` + Fix Round 1 `4b2a23c`, same-reviewer re-review PASS |
| M2-03 | 현재 도구 매핑 원고와 링크·브라우저 검증 | 1.5 | done | 1.5 | Task 8 `4a03844` + Fix Round 1 `e08ba8e`, same-reviewer re-review PASS |
| M2-04 | 공식 13장 Build Track·검색·내비게이션 정렬 | 4.0 | done | 4.0 | Task 9 `0cf4b03`, 독립 검토 Critical 0·Important 0·Minor 0 `PASS` |
| M2-05 | 아키텍처·프레임워크 기반 원고와 도표 | 3.0 | done | 3.0 | Task 10 `62b4cb5`, 독립 검토 Critical 0·Important 0·Minor 1 `PASS` |
| M2-06 | 아키텍처 장 통합·링크·브라우저 검증 | 1.0 | done | 1.0 | Task 10 `62b4cb5`, 독립 검토 Critical 0·Important 0·Minor 1 `PASS` |
| M3-NAV | 홈·시작하기·섹션 인덱스 | 4.0 | done | 4.0 | Task 11 `18d1fc2`, 독립 검토 Critical 0·Important 0·Minor 0 `PASS` |
| M3-MENTAL-ENV | 사고 모델·작업 환경 | 5.0 | done | 5.0 | Task 12 `71a3b4d`..`45141a8`, browser/context `468be53`, Fix Round 1 `d408663`, package re-review Critical 0·Important 0·Minor 0 `PASS` |
| M3-FULLSTACK-DATA | 풀스택·백엔드·데이터 | 5.0 | done | 5.0 | Task 13 `a62ffa2`·`35d45de`·`1d41df5`·`3749ca4`·`5b3b71a`·`cff8bb2`; context `1947da5`; Fix1 `759d2be`; Fix2 `c286725`; same-reviewer `PASS` C0/I0/M0 |
| M3-FRONT-DESIGN | 프런트엔드·요구사항·설계 | 5.0 | done | 5.0 | Task 14 `56bca2b`·`621edc1`·`9f43c8c`·`66d815c`·`8a878e5`·`373b192`; correction `1e21a79`; context `e868ad0`; Fix1 `3d60188`; Fix2 `b0872b8`; same-reviewer `PASS` C0/I0/M0 |
| M3-WORKFLOW-QUALITY | 개발 절차·품질·안전 | 5.0 | done | 5.0 | Task 15 `f8f42c8`·`4d295f4`·`1410b43`·`2388bb5`·`fd02fa5`·`579176f`; context `bfceed4`; independent `PASS` C0/I0/M0 |
| M3-GIT-OPS | Git·배포·운영 | 4.0 | done | 4.0 | Task16 `404db2a`·`93edd54`·`47cd4cf`·`1894183`·`028d5d4`·`08ff6dd`; context `be31f1e`; Fix1 `76901ff`; same-reviewer `PASS` C0/I0/M0 |
| M3-AI | AI 네이티브 개발 | 3.0 | done | 3.0 | Task17 `0360cd9`·`cf2c3f0`·`c438aff`·`4d709e8`; context `80315b64`; independent `PASS` C0/I0/M0 |
| M3-CAP | 두 캡스톤 | 2.0 | done | 2.0 | Task18 구현 `7258026`·`a9ec7eb`; context `8d7c6e3`; ignored Fix1; same-reviewer `PASS` C0/I0/M0 |
| M3-REF | 용어집·방법론·체크리스트·현재 도구 | 2.0 | done | 2.0 | Task19 units `fb743b1`·`9f3fcb3`·`3adade8`·`a949503`·`2580e2b`; current-tool Fix1 `864a189`; context `1455bb2`; package SHA `09cb94e0c9b3dae96671b1824fcd4513b17dd689b346791e20c65fe907f0332a`; independent `PASS` C0/I0/M0 |
| M4-01 | 시각 자료 인벤토리 기반 | 2.0 | done | 2.0 | Tasks 6·10·20, 게시 SVG14개·Mermaid14개·소비 occurrence17개, Task20 합동 Fix1 `PASS` C0/I0/M0 |
| M4-02 | 과대 도표 분할·기존 도표 교정·필요 신규 도표 | 3.0 | done | 3.0 | Task20 PBV-03 분할·Fix1과 후속11개 자산별 커밋·실제 Chrome84상태·개별 및 합동 Codex `PASS` C0/I0/M0 |
| M4-03 | 검색·학습 경로·내비게이션·404 | 3.0 | done | 3.0 | Tasks 9·21, Task21 closeout independent `PASS` C0/I0/M0 |
| M4-04 | 접근성·반응형·테마 QA | 2.0 | done | 2.0 | Task21 desktop/mobile native theme evidence, closeout `PASS` C0/I0/M0 |
| M4-05 | 전체 사이트 로컬 브라우저 회귀 | 2.0 | done | 2.0 | Task21 150 final page states·68 visual states, closeout `PASS` C0/I0/M0 |
| M5-01 | 독립 검토 계약·검토 행렬 고정 | 1.0 | done | 1.0 | Task 22 `54a5e38`, 기존 Fix Round 1 independent `PASS` C0/I0/M0; DEC-PB-009 계약 개정 `c9e83a9`, Fix Round 2 independent `PASS` C0/I0/M0 |
| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | done | 7.0 | Task 22; R01~R26 완료, R26 Fix1 PASS C0/I0/M5, 원고 59개 review |
| M5-03 | 전 문서 conformance·source·automated·browser·visual 증거 | 3.0 | done | 3.0 | Task 23; ready-promotion-qa.md의 59개 경로·118상태 및 문서별 근거 |
| M5-04 | 소유자 승인과 공개 문서 100% `ready` | 2.0 | done | 2.0 | Task 23; 승인 f327b03, e1d80b3에서 ready 59/review 0·본문 불변 |
| M6-01 | 라이선스·권리·보안·개인정보 감사 | 2.0 | done | 2.0 | Tasks 24~25; Task24 Fix Round 1 PASS C0/I0/M0; Task25 dedicated closeout PASS C0/I0/M0 |
| M6-02 | 버전·README·기여·이슈·릴리스 문서 | 1.5 | done | 1.5 | Task24 implementation `3d1b839`; Fix Round 1 PASS C0/I0/M0; dedicated closeout PASS C0/I0/M0 |
| M6-03 | 로컬 릴리스 후보 전체 게이트 | 1.5 | done | 1.5 | 조건부: 최종 clean HEAD의 사후 3개 검사 성공 기록이 있을 때만 인정. 콘텐츠 71b71c5, 후보 증거 0d3cc31 |
| M7-01 | 공개 저장소·Pages 승인과 원격 설정 | 1.0 | pending | 0.0 | Task 27, 별도 승인 필요 |
| M7-02 | release SHA push·CI·Pages 성공 | 1.5 | pending | 0.0 | Task 27, 별도 승인 필요 |
| M7-03 | 실제 공개 URL·검색·링크·자산 검증 | 1.5 | pending | 0.0 | Task 28, 별도 승인 필요 |
| M7-04 | `v0.1.0-beta.1` 태그·릴리스·공개 베타 선언 | 1.0 | pending | 0.0 | Task 28, 별도 승인 필요 |
<!-- PUBLIC_BETA_LEDGER_END -->

2026-11-23 이 표의 M6-03 `done`과 합계 95/100점은 최종 clean HEAD의 사후 게이트가 성공한 경우에만 유효합니다. 로컬 인계 기록에 성공 결과가 없거나 검사에 실패하면 M6는 미완료이고 인정 점수는 93.5점입니다. M7은 별도 승인·실행·검증 전까지 0점입니다.

2026-11-23 로컬 원고 승격 후 합계는 93.5점입니다. M5-03·04는 완료했고 M6-03 최종 RC와 M7은 대기입니다. 아래 점수는 각 기록 시점의 값입니다.

2026-11-22 현재 합계는 88.5점입니다. 아래 81.5점은 R26 완료 전의 역사 값입니다. M5-03·04와 M6-03·M7은 아직 획득하지 않았습니다.

#### 역사 전용: 2026-08-30 원장 상태 스냅샷

아래 원장 서술의 Claude·Opus·`auth`·구독 표현은 당시 상태 스냅샷을 보존하는 역사 기록이며, 2026-09-05 이후 M5의 현재 차단·재개·실행 지시가 아닙니다. 점수 81.5는 그대로 유지합니다.

현재 원장의 인정 점수 합계는81.5점입니다. M1-01의5점, M1-02의2점, M1-03의3점을 반영해 세 하위 감사 작업과 인벤토리·finding 배정 단계를 완료했고 M2-02·M2-03·M2-04·M2-05·M2-06은 Tasks7~10의 구현과 독립 검토 `PASS`에 따라 모두 `done`입니다. M3-NAV는 Task11 독립 검토 `PASS`에 따라 `done`4.0/4.0, M3-MENTAL-ENV는 Task12 구현·browser/context·Fix Round1 뒤 `PASS`에 따라 `done`5.0/5.0, M3-FULLSTACK-DATA는 Task13 구현·context·두 fix 뒤 `PASS`에 따라 `done`5.0/5.0, M3-FRONT-DESIGN은 Task14 구현·두 fix 뒤 `PASS`에 따라 `done`5.0/5.0, M3-WORKFLOW-QUALITY는 Task15 구현과 context `bfceed4`·독립 검토 `PASS`에 따라 `done`5.0/5.0입니다. M3-GIT-OPS는 Task16 구현 `404db2a`·`93edd54`·`47cd4cf`·`1894183`·`028d5d4`·`08ff6dd`, context `be31f1e`, 최초 `NEEDS CHANGES` C0/I2/M0, Fix1 `76901ff`와 same-reviewer `PASS` C0/I0/M0에 따라 `done`4.0/4.0입니다. M3-AI는 Task17 구현 `0360cd9`·`cf2c3f0`·`c438aff`·`4d709e8`, context `80315b64`와 독립 검토 `PASS` C0/I0/M0에 따라 `done`3.0/3.0입니다. M3-CAP은 Task18 구현 `7258026`·`a9ec7eb`, context `8d7c6e3`, 최초 `NEEDS CHANGES` C0/I1/M0, ignored Fix1과 same-reviewer `PASS` C0/I0/M0에 따라 `done`2.0/2.0입니다. M3-REF는 Task19 unit commits `fb743b1`·`9f3fcb3`·`3adade8`·`a949503`·`2580e2b`, current-tool Fix1 `864a189`, context `1455bb2`와 SHA-256 `09cb94e0c9b3dae96671b1824fcd4513b17dd689b346791e20c65fe907f0332a` package의 fresh independent `PASS` C0/I0/M0에 따라 `done`2.0/2.0입니다. 이에 현행 원장의 M3 content-package 9행은 모두 `done`입니다. M4-01은 Tasks6·10·20의 게시 SVG14개·Mermaid14개·소비 occurrence17개와 Task20 합동 Fix Round1 `PASS` C0/I0/M0에 따라 `done`2.0/2.0이고, M4-02는 PBV-03 분할·Fix1과 후속11개 자산별 구현·실제 Chrome84상태·개별 및 합동 Codex `PASS`에 따라 `done`3.0/3.0입니다. M4-03~05는 Task21의150페이지 최종 상태·68시각 조합·검색·내비게이션·404·접근성·반응형·테마 누적 증거와 independent `PASS` C0/I0/M0에 따라 각각 `done`3.0/3.0·2.0/2.0·2.0/2.0이고 M4 전체는 완료됐습니다. M5-01은 Task22의 계약·행렬 구현 `54a5e38`과 Fix Round 1 independent `PASS` C0/I0/M0에 따라 `done`1.0/1.0입니다. M5-02~04와 Claude R01~R26은 `pending`이고 모델 호출은0건입니다. 현재 직접 차단은 `auth`이며, 푸디님이 동일 구독 계정 로그인을 직접 복구한 뒤에도 정확한 Opus4.8·1M·`high` 구독 포함 사용과 구독 외 과금 비소비를 입증해야 하므로 `subscription_unverified`는 후속 경계로 남습니다. M6-01은 Task24 Fix Round1과 Task25 dedicated closeout의 독립 `PASS`에 따라 `done`2.0/2.0입니다. M6-02는 Task24 dedicated closeout `PASS`에 따라 `done`1.5/1.5입니다. 현재 공개 콘텐츠는59개·`draft`59개·`seed`0개·`review`0개·`ready`0개이고 공식 Build Track13개는 모두 `draft`이며 학습 도표는 SVG14개·Mermaid 원본14개입니다. 콘텐츠 감사는 선행 `adbadb2` 정합성 근거에 따라 conform57개·needs_edit2개·needs_rewrite0개, 현재 finding은 Critical0개·Important2개·Minor0개이고 source gap은 confirmed22개·not-confirmed4개·미확인 위험 C1/I3/N0입니다. 시각 감사 verdict는 keep2개·reflow8개·replace3개이고 PBVA-001~005는 모두 해소돼 현재 시각 finding은 Critical0개·Important0개입니다. PBSG-014·019·020·026은 실제 조직·제품·계정·원천·권리·전체 교육 계약을 확인할 때까지 `not-confirmed`로 남아 있습니다. M3 content-package와 M4 전체·M5-01·M6-01의 완료는 M1·M3 종료 게이트·M5 전체·M6-03의 완료나 `ready`·owner acceptance·release를 뜻하지 않으며 Task22 이후 전체가 완료된 것은 아닙니다. Critical·Important 규칙 위반과 폐기 사례 잔존이 모두0건이 되기 전에는 M1 종료 게이트를 통과한 것으로 보지 않으며 M5 독립 검토·소유자 승인·M7 실제 공개 URL 검증 전에는 계산 결과가 높아져도 `ready`,100% 또는 공개 베타 완료로 보고하지 않습니다. 이후 검토도 Claude Code Opus4.8·1M, effort `high` 읽기 전용 검토·Codex 재판정·소유자 승인 순서를 유지하고 사람 검토는 실제 수행 시 선택 증거로 보존하며 push·배포·실제 공개 URL 검증은 수행하지 않았습니다.

#### 현재 2026-09-05 M5 상태

현재 점수는 81.5점이며 변경하지 않습니다. M5-01의 최신 증거는 기존 `54a5e38`과 `c9e83a9` 계약 개정·Fix Round 2 independent `PASS` C0/I0/M0입니다. M5-02~04는 `pending`, R01~R26 입력은 `not-fixed`, Codex 모델 호출과 유효 결과는 0건입니다. 현재 직접 조건은 R01~R26의 고정 입력·개별/결합 SHA-256과 R01~R25 fresh Codex reviewer 및 분리된 R26 fresh Codex reviewer의 실제 읽기 전용 검토·controller 정본 저장·100% 재판정·같은 reviewer 재검토·Critical/Important 0건입니다. 과거 Claude/Opus/auth/subscription 기록은 호출0·유효 PASS 없음의 역사 전용이며 현재 M5 blocker나 resume condition이 아닙니다. M5·`ready`·소유자 승인·RC·M6/M7·push·배포·공개 URL은 완료로 올리지 않습니다.

## 4. 공개 콘텐츠 59개 단일 배정표

아래 표는 누락과 중복을 막기 위한 정본 인벤토리입니다. 모든 경로는 정확히 한 M3 작업 패키지에만 속하며, M5 검토 단위는 별도 행렬에서 다시 연결합니다.

문서 수는 품질 목표가 아니라 누락 방지용 회계 값입니다. 기본 실행 계약은 현재 58개에 Task 8의 현재 도구 참고편 1개를 더한 `releaseDocumentCount = 59`이지만, M1이 `merge` 또는 `remove`를 판정하고 푸디님이 정보 구조 변경을 승인하면 실제 학습 역할에 맞춰 달라질 수 있습니다. 이 경우 같은 결정 커밋에서 인벤토리·M3 배정·R01~R25 검토 행렬·manifest·모든 수량 수용 기준을 새 실제 값으로 갱신합니다. 문서 수를 맞추기 위해 불필요한 글을 유지하거나 새 글을 만들지 않습니다.

<!-- PUBLIC_BETA_INVENTORY_START -->
| 경로 | 현재 상태 | M3 패키지 |
|---|---|---|
| `src/content/docs/index.md` | ready | M3-NAV |
| `src/content/docs/start-here/index.md` | ready | M3-NAV |
| `src/content/docs/start-here/how-to-use-this-guide.md` | ready | M3-NAV |
| `src/content/docs/start-here/learning-paths.md` | ready | M3-NAV |
| `src/content/docs/start-here/why-this-guide.md` | ready | M3-NAV |
| `src/content/docs/01-mental-models/index.md` | ready | M3-NAV |
| `src/content/docs/02-work-environment/index.md` | ready | M3-NAV |
| `src/content/docs/03-full-stack/index.md` | ready | M3-NAV |
| `src/content/docs/04-backend-data/index.md` | ready | M3-NAV |
| `src/content/docs/05-frontend/index.md` | ready | M3-NAV |
| `src/content/docs/06-requirements-design/index.md` | ready | M3-NAV |
| `src/content/docs/07-workflow-methods/index.md` | ready | M3-NAV |
| `src/content/docs/08-quality/index.md` | ready | M3-NAV |
| `src/content/docs/09-git-github/index.md` | ready | M3-NAV |
| `src/content/docs/10-deployment-operations/index.md` | ready | M3-NAV |
| `src/content/docs/11-ai-native/index.md` | ready | M3-NAV |
| `src/content/docs/12-case-studies/index.md` | ready | M3-NAV |
| `src/content/docs/reference/index.md` | ready | M3-NAV |
| `src/content/docs/01-mental-models/abstraction-and-tradeoffs.md` | ready | M3-MENTAL-ENV |
| `src/content/docs/01-mental-models/developer-thinking.md` | ready | M3-MENTAL-ENV |
| `src/content/docs/01-mental-models/software-is-a-system.md` | ready | M3-MENTAL-ENV |
| `src/content/docs/02-work-environment/dependencies-package-managers-environments.md` | ready | M3-MENTAL-ENV |
| `src/content/docs/02-work-environment/files-folders-paths.md` | ready | M3-MENTAL-ENV |
| `src/content/docs/02-work-environment/terminal-processes-ports.md` | ready | M3-MENTAL-ENV |
| `src/content/docs/03-full-stack/client-server-full-stack.md` | ready | M3-FULLSTACK-DATA |
| `src/content/docs/03-full-stack/frontend-backend-boundary.md` | ready | M3-FULLSTACK-DATA |
| `src/content/docs/03-full-stack/http-request-response.md` | ready | M3-FULLSTACK-DATA |
| `src/content/docs/04-backend-data/api-database-auth.md` | ready | M3-FULLSTACK-DATA |
| `src/content/docs/04-backend-data/data-model-schema-migration.md` | ready | M3-FULLSTACK-DATA |
| `src/content/docs/04-backend-data/state-cache-queue.md` | ready | M3-FULLSTACK-DATA |
| `src/content/docs/05-frontend/accessibility-responsive-design.md` | ready | M3-FRONT-DESIGN |
| `src/content/docs/05-frontend/browser-dom-rendering.md` | ready | M3-FRONT-DESIGN |
| `src/content/docs/05-frontend/ui-state-and-ux.md` | ready | M3-FRONT-DESIGN |
| `src/content/docs/06-requirements-design/adr-and-tradeoffs.md` | ready | M3-FRONT-DESIGN |
| `src/content/docs/06-requirements-design/architecture-and-frameworks.md` | ready | M3-FRONT-DESIGN |
| `src/content/docs/06-requirements-design/prd-sdd-tdd.md` | ready | M3-FRONT-DESIGN |
| `src/content/docs/07-workflow-methods/code-review-ci-cd.md` | ready | M3-WORKFLOW-QUALITY |
| `src/content/docs/07-workflow-methods/incremental-delivery.md` | ready | M3-WORKFLOW-QUALITY |
| `src/content/docs/07-workflow-methods/software-development-lifecycle.md` | ready | M3-WORKFLOW-QUALITY |
| `src/content/docs/08-quality/debugging-observability.md` | ready | M3-WORKFLOW-QUALITY |
| `src/content/docs/08-quality/performance-security.md` | ready | M3-WORKFLOW-QUALITY |
| `src/content/docs/08-quality/testing-strategy.md` | ready | M3-WORKFLOW-QUALITY |
| `src/content/docs/09-git-github/branch-commit-pull-request.md` | ready | M3-GIT-OPS |
| `src/content/docs/09-git-github/git-and-github.md` | ready | M3-GIT-OPS |
| `src/content/docs/09-git-github/undo-merge-conflict-release.md` | ready | M3-GIT-OPS |
| `src/content/docs/10-deployment-operations/build-deploy-domain-dns.md` | ready | M3-GIT-OPS |
| `src/content/docs/10-deployment-operations/environment-variables-config.md` | ready | M3-GIT-OPS |
| `src/content/docs/10-deployment-operations/logs-monitoring-backup.md` | ready | M3-GIT-OPS |
| `src/content/docs/11-ai-native/agent-review-and-verification.md` | ready | M3-AI |
| `src/content/docs/11-ai-native/context-spec-harness-loop.md` | ready | M3-AI |
| `src/content/docs/11-ai-native/permissions-sandbox-worktrees.md` | ready | M3-AI |
| `src/content/docs/11-ai-native/working-with-coding-agents.md` | ready | M3-AI |
| `src/content/docs/12-case-studies/analytics-dashboard-case-study.md` | ready | M3-CAP |
| `src/content/docs/12-case-studies/first-full-stack-project.md` | ready | M3-CAP |
| `src/content/docs/reference/agent-output-glossary.md` | ready | M3-REF |
| `src/content/docs/reference/checklists.md` | ready | M3-REF |
| `src/content/docs/reference/current-tool-mapping.md` | ready | M3-REF |
| `src/content/docs/reference/development-glossary.md` | ready | M3-REF |
| `src/content/docs/reference/methodology-map.md` | ready | M3-REF |
<!-- PUBLIC_BETA_INVENTORY_END -->

---
## 5. 실행 프로토콜

각 작업은 아래 순서를 따릅니다.

- [ ] 작업 시작 전 `git status --short`, 현재 branch, HEAD, 선행 작업 증거를 기록합니다.
- [ ] 작업 목표·비목표·대상 파일·수용 기준·검증 명령을 현재 상태 보고에 고정합니다.
- [ ] 파일 수정 전 관련 원고·프로젝트 규칙·출처·하위 계획을 완독합니다.
- [ ] 가장 작은 구현 단위만 수정하고 생성 파일은 생성기로 갱신합니다.
- [ ] 집중 검증에서 실패를 재현한 뒤 수정하고, 정적 검사와 전체 검사를 순서대로 실행합니다.
- [ ] 원고·시각 자료·사이트 동작은 필요한 뷰포트와 테마에서 실제로 확인합니다.
- [ ] 독립 검토가 필요한 작업은 입력과 해시를 고정한 뒤 fresh Codex reviewer가 읽기 전용으로 실행하고 controller가 재판정합니다. 지정 모델/effort 미가용이면 자동 fallback하지 않고 해당 행을 pending으로 두며 비의존 개발을 계속합니다.
- [ ] `PROJECT_CONTEXT.md`, `ROADMAP.md`, `CHANGELOG.md`와 이 계획의 원장 중 실제로 바뀐 현재 사실만 갱신합니다.
- [ ] `git diff --check`, staged 파일 목록, cached diff, unstaged 변경을 확인한 뒤 관련 파일만 로컬 커밋합니다.
- [ ] 커밋 후 SHA·부모·파일 범위·clean 상태를 기록하고 다음 독립 작업으로 이동합니다.

### 장시간 작업의 검증 가능한 체크포인트 커밋

기본 커밋 단위는 리뷰어가 그 범위만 독립적으로 승인하거나 거절할 수 있고 자체 검증 주기를 갖는 작업입니다. 계획의 `Task` 하나가 항상 커밋 하나를 뜻하지는 않습니다. M3의 원고 한 행, M4의 시각 자산 한 행, M5의 검토 한 행처럼 계획이 더 작은 단위를 고정하면 그 단위가 우선합니다.

- [ ] 기본은 한 미커밋 독립 단위입니다. 필수 검토 차단 시 파일/해시/검증/잔여 조건을 분리해 비의존 단위를 진행할 수 있지만 필요한 독립 검토 전에는 커밋/완료하지 않습니다. 기존 변경을 reset·restore·stash·덮어쓰기·WIP 커밋으로 치우지 않습니다.
- [ ] 작업이 한 실행 구간에 끝나기 어렵거나 여러 리뷰 판단을 포함할 것으로 보이면 파일 수정 전에 `checkpoint_id`, 정확한 파일, 완료 범위, 비목표, 수용 기준, 검증 명령, 남은 범위를 해당 감사표 또는 이 계획에 기록합니다.
- [ ] 체크포인트에는 선언한 범위의 완성본만 포함합니다. `TODO`, 임시 문구, 끊긴 표·링크, 절반만 바뀐 상태·증거, 아직 실패하는 구현·원고 변경은 커밋하지 않습니다.
- [ ] 집중 검증과 해당 범위에 필요한 정적·전체·브라우저 검증을 통과하고, 생성 파일을 동기화하고, 부모 Task는 `in_progress`, 완료한 체크포인트와 남은 체크포인트는 구분해 기록합니다.
- [ ] staged 파일과 cached diff 전체를 읽고 무관한 변경·다음 체크포인트·기존 사용자 작업이 0건인지 확인합니다. unstaged 변경이 남으면 이유와 소유 범위를 기록하며 검토 차단 시 비의존 진행은 2026-08-28 개정 조건을 따릅니다.
- [ ] 세션 종료, 시간 경과, 사용량 부족만을 이유로 `WIP`, `savepoint`, `작업 중` 커밋을 만들지 않습니다. 외부 제한이나 검증 실패의 민감정보를 제거한 재현 기록만 대상 원고·구현과 분리된 evidence-only 체크포인트로 분리하되 필수 검증·필요한 독립 검토를 통과한 뒤에만 커밋할 수 있습니다.
- [ ] 체크포인트 커밋 후 새 SHA·부모·파일 집합·검증 결과·clean 여부를 기록합니다. 자동으로 amend·squash하지 않고 후속 수정은 별도 검증 가능한 커밋으로 남깁니다.

`Critical`은 보안·데이터 손실·공개 권리·완료 조건을 깨는 오류, `Important`는 핵심 정의·경계·학습 흐름·검증 계약의 실질 오류, `Minor`는 공개를 막지 않는 국소 표현·시각 일관성 문제로 분류합니다. Critical과 Important는 해당 작업을 완료하기 전에 해결하고 같은 범위를 재검토합니다.

## 6. M0 — 거버넌스와 실행 정본

### Task 1: 공개 베타 정본 worktree를 만들고 `main`의 별도 변경을 최신 문맥에 조정합니다

**Files:**

- Create: `docs/project/public-beta-git-reconciliation.md`
- Potentially modify: `AGENTS.md`
- Potentially modify: `src/content/docs/04-backend-data/api-database-auth.md`
- Potentially modify: `src/content/docs/08-quality/testing-strategy.md`
- Potentially modify: `src/content/docs/09-git-github/git-and-github.md`
- Potentially modify: `src/content/docs/12-case-studies/analytics-dashboard-case-study.md`
- Regenerate if a public manuscript changes: `CONTENT_MAP.md`
- Modify: `PROJECT_CONTEXT.md`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`
- Modify: `docs/superpowers/plans/2026-08-12-public-beta-master-plan.md`

**Step 1: 고정된 선행 조건을 확인합니다.**

- [ ] `superpowers:using-git-worktrees`와 `superpowers:verification-before-completion`을 읽습니다.
- [ ] 현재 worktree가 `codex/current-tool-mapping`, HEAD가 승인된 이 계획 커밋, `git status --short`가 빈 출력인지 확인합니다.
- [ ] `.worktrees/`가 Git 무시 대상인지 확인합니다.

```bash
git branch --show-current
git rev-parse HEAD
git status --short
git -C ../.. check-ignore -q .worktrees
git worktree list --porcelain
```

Expected: 현재 branch와 계획 커밋 SHA가 확인되고 tracked 변경이 없으며 `.worktrees`는 무시됩니다.

**Step 2: 전용 실행 branch와 worktree를 만듭니다.**

- [ ] `codex/public-beta-completion` branch가 아직 없음을 확인합니다.
- [ ] 승인된 계획 커밋을 기준으로 `.worktrees/public-beta-completion`을 만듭니다.

```bash
git branch --list codex/public-beta-completion
git worktree add ../public-beta-completion -b codex/public-beta-completion "$(git rev-parse HEAD)"
git -C ../public-beta-completion branch --show-current
git -C ../public-beta-completion status --short
```

Expected: 새 worktree의 branch가 `codex/public-beta-completion`이고 상태가 깨끗합니다. branch나 경로가 이미 존재하면 덮어쓰지 않고 원인과 기존 SHA를 확인합니다.

**Step 3: `main`의 별도 커밋을 의미 단위로 감사합니다.**

- [ ] merge base와 `main` 고유 커밋 `c362d9c`의 파일·hunk를 기록합니다.
- [ ] `git merge-tree`로 충돌을 재현하되 merge·index 수정은 하지 않습니다.
- [ ] 각 hunk를 `preserve-current`, `transplant-formatting`, `obsolete`, `regenerate` 중 하나로 판정합니다.
- [ ] 현재 원고의 요구사항·사례·상태·검토 증거를 과거 내용으로 되돌리지 않는 이유를 기록합니다.

```bash
git merge-base main codex/public-beta-completion
git show --stat --oneline c362d9c
git show --format=fuller --find-renames c362d9c -- AGENTS.md CONTENT_MAP.md src/content/docs/04-backend-data/api-database-auth.md src/content/docs/08-quality/testing-strategy.md src/content/docs/09-git-github/git-and-github.md src/content/docs/12-case-studies/analytics-dashboard-case-study.md
git merge-tree "$(git merge-base main codex/public-beta-completion)" main codex/public-beta-completion
```

Expected: `AGENTS.md`와 다섯 공개 원고·`CONTENT_MAP.md`의 별도 변경 및 충돌 경계가 `docs/project/public-beta-git-reconciliation.md`에 재현 가능하게 기록됩니다.

**Step 4: 여전히 유효한 규칙과 프롬프트 블록 줄바꿈만 최신 원고에 좁게 이식합니다.**

- [ ] `AGENTS.md`의 Markdown·프롬프트 블록 한 줄 정책을 현행 최상위 규칙과 충돌 없이 반영합니다.
- [ ] 네 충돌 원고와 `testing-strategy.md`의 현재 프롬프트 블록을 직접 읽고, 같은 목록 항목 안의 임의 하드랩만 제거합니다.
- [ ] 정의·사례·API·fixture·테스트 오라클·frontmatter·검토 증거·출처 의미는 변경하지 않습니다.
- [ ] `CONTENT_MAP.md` 충돌본을 수동 선택하지 않고 원고 변경 뒤 생성기로 갱신합니다.

```bash
npm run sync:content-map
git diff -- AGENTS.md CONTENT_MAP.md src/content/docs/04-backend-data/api-database-auth.md src/content/docs/08-quality/testing-strategy.md src/content/docs/09-git-github/git-and-github.md src/content/docs/12-case-studies/analytics-dashboard-case-study.md
```

Expected: 실제로 유효한 문단만 좁게 바뀌고 콘텐츠 지도는 현재 원고 상태·문자 수와 일치합니다.

**Step 5: 검증하고 정본 기준 커밋을 만듭니다.**

```bash
rg -n "반도체|semiconductor|chip dashboard|wafer" src/content/docs src/assets/diagrams src/assets/diagrams/source
git diff --check
npm run check:static
ASTRO_TELEMETRY_DISABLED=1 npm run check
git status --short
git diff --stat
```

Expected: 공개 코퍼스의 폐기 사례는 M1에서 판정할 알려진 학습 경로 항목 외 새 잔존이 없고, 테스트 27개 이상·공개 콘텐츠 58개·SVG 12개 이상·HTML 59개 이상이 오류 없이 검증됩니다. Sitemap의 `site` 미설정 안내는 공개 전 M6/M7 게이트로 남길 수 있지만 오류로 숨기지 않습니다.

- [ ] `public-beta-git-reconciliation.md`에 기준 SHA·merge base·판정·적용 diff·검증 종료 코드를 기록합니다.
- [ ] 원장 M0-03을 `done`으로 바꾸고 M0 기준 SHA를 기록합니다.
- [ ] staged diff 전체를 읽고 관련 파일만 커밋합니다.

```bash
git add AGENTS.md CONTENT_MAP.md PROJECT_CONTEXT.md ROADMAP.md CHANGELOG.md docs/project/public-beta-git-reconciliation.md docs/superpowers/plans/2026-08-12-public-beta-master-plan.md src/content/docs/04-backend-data/api-database-auth.md src/content/docs/08-quality/testing-strategy.md src/content/docs/09-git-github/git-and-github.md src/content/docs/12-case-studies/analytics-dashboard-case-study.md
git diff --cached --check
git diff --cached --stat
git commit -m "chore: establish public beta baseline"
```

실제 변경되지 않은 후보 파일은 `git add` 결과에 포함되지 않아야 합니다. 커밋에는 조정 기록과 실제 이식 파일만 포함합니다.

### Task 2: `ready` 생명주기와 자동 검증 계약을 승인된 명세에 맞춥니다

**Files:**

- Modify: `docs/project/content-lifecycle.md`
- Modify: `docs/project/quality-rubric.md`
- Modify: `CONTENT_MAP.md`
- Modify: `templates/chapter-template.md`
- Modify: `scripts/content-validation.mjs`
- Modify: `tests/content-validation.test.mjs`
- Modify if current-policy wording is present: `docs/project/editorial-guide.md`
- Modify: `PROJECT_CONTEXT.md`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`
- Modify: `docs/superpowers/plans/2026-08-12-public-beta-master-plan.md`

**Step 1: 현재 계약이 새 명세를 거부하는 실패 테스트를 먼저 추가합니다.**

- [x] `ready` 문서에 `independent:`, `adjudication:`, `conformance:`, `sources:`, `automated:`, `browser:`, `owner:`가 모두 필요하다는 테스트를 추가합니다.
- [x] 다이어그램 참조가 있는 `ready` 문서에는 `visual:`이 필요하다는 테스트를 추가합니다.
- [x] 다이어그램이 없는 문서는 `visual:` 없이 통과한다는 테스트를 추가합니다.
- [x] 짧은 `index.md`는 역할상 500자 미만이어도 다른 증거가 완전하면 통과하고, 일반 장은 기존 최소 길이 방어선을 유지한다는 테스트를 추가합니다.
- [x] `technical:`, `editorial:`, `reader:`가 선택 증거로 파싱되지만 필수 접두사가 아니라는 테스트를 추가합니다.

```bash
node --test tests/content-validation.test.mjs
```

Expected before implementation: 새 접두사·시각 자료 조건·인덱스 예외 테스트가 실패합니다.

**Step 2: 최소한의 검증기 인터페이스를 구현합니다.**

```js
const READY_EVIDENCE_PREFIXES = [
  'independent:',
  'adjudication:',
  'conformance:',
  'sources:',
  'automated:',
  'browser:',
  'owner:',
];

const OPTIONAL_EVIDENCE_PREFIXES = ['technical:', 'editorial:', 'reader:'];
const REVIEW_EVIDENCE_ITEM_PATTERN = /^(request|independent|adjudication|conformance|sources|automated|browser|owner|visual|technical|editorial|reader):\s*(.+)$/i;
```

- [x] 본문에서 실제 로컬 다이어그램 이미지 참조를 식별하는 `hasLearningDiagramReference(body)`를 추가합니다.
- [x] `contentStatus: ready`이고 다이어그램 참조가 있을 때만 `visual:`을 요구합니다.
- [x] `/(^|\/)index\.md$/`인 공개 인덱스에는 일반 장의 500자 방어선을 적용하지 않습니다.
- [x] 증거 경로 존재 검증은 새 접두사를 모두 처리합니다.
- [x] 사람 검토 템플릿과 과거 기록은 삭제·소급 개작하지 않고 선택 증거로 남깁니다.

**Step 3: 정책 문구를 단일화합니다.**

- [x] `content-lifecycle.md`에 `review`와 `ready`의 새 의미, 의미 변경 시 재검토, 소유자 묶음 승인, 시각 자료 조건을 기록합니다.
- [x] `quality-rubric.md`에서 기존 사람 세 역할 필수 표현을 새 증거 체계로 바꿉니다.
- [x] `CONTENT_MAP.md`의 상태 의미를 새 계약과 맞춥니다.
- [x] `chapter-template.md`가 새 필수 접두사와 생명주기 정본을 가리키게 합니다.
- [x] 실제 사람 검토는 선택 사항이지만 수행했다면 가짜 AI 증거로 대체할 수 없다는 경계는 유지합니다.

**Step 4: 검증·커밋합니다.**

```bash
node --test tests/content-validation.test.mjs
rg -n "READY_EVIDENCE_PREFIXES|independent:|adjudication:|conformance:|sources:|automated:|browser:|owner:|visual:" scripts/content-validation.mjs tests/content-validation.test.mjs docs/project/content-lifecycle.md docs/project/quality-rubric.md CONTENT_MAP.md templates/chapter-template.md
git diff --check
npm run check:static
ASTRO_TELEMETRY_DISABLED=1 npm run check
```

Expected: 기존 테스트와 새 테스트가 모두 통과하고 공개 문서 58개의 현재 `seed`·`draft`·`review` 상태는 강제로 바뀌지 않습니다.

```bash
git add docs/project/content-lifecycle.md docs/project/quality-rubric.md docs/project/editorial-guide.md CONTENT_MAP.md templates/chapter-template.md scripts/content-validation.mjs tests/content-validation.test.mjs PROJECT_CONTEXT.md ROADMAP.md CHANGELOG.md docs/superpowers/plans/2026-08-12-public-beta-master-plan.md
git diff --cached --check
git commit -m "test: align public beta evidence gates"
```

### Task 3: 마스터 원장과 58개 단일 배정을 기계 검증합니다

**Files:**

- Create: `scripts/validate-public-beta-plan.mjs`
- Create: `tests/public-beta-plan-validation.test.mjs`
- Modify: `package.json`
- Modify: `docs/superpowers/plans/2026-08-12-public-beta-master-plan.md`
- Modify: `PROJECT_CONTEXT.md`
- Modify: `CHANGELOG.md`

**Step 1: 잘못된 원장을 거부하는 테스트를 작성합니다.**

- [x] 마일스톤 점수 합이 100이 아니면 실패합니다.
- [x] 인정 점수가 배정 점수보다 크면 실패합니다.
- [x] 상태가 `pending`, `in_progress`, `blocked`, `done`, `optional` 이외이면 실패합니다.
- [x] 원장 ID가 중복되면 실패합니다.
- [x] 인벤토리 경로가 중복·누락되거나 `src/content/docs/` 실제 Markdown 목록과 다르면 실패합니다.
- [x] 공개 문서 경로 수가 현재 58개와 다르면 숫자 드리프트를 구체적으로 보고합니다.

```bash
node --test tests/public-beta-plan-validation.test.mjs
```

Expected before implementation: 모듈이 없어서 실패합니다.

**Step 2: 주석 경계만 읽는 파서를 구현합니다.**

```js
export function parseLedger(markdown) {}
export function parseInventory(markdown) {}
export function validateLedger(rows) {}
export function validateInventory(rows, publicDocumentPaths) {}
```

- [x] `PUBLIC_BETA_LEDGER_START/END`와 `PUBLIC_BETA_INVENTORY_START/END` 바깥의 역사 표는 검사하지 않습니다.
- [x] 오류 메시지는 행 ID·경로·기대값을 포함합니다.
- [x] CLI 실행은 현재 계획과 `src/content/docs/**/*.md`를 읽고 오류 0이면 요약만 출력합니다.

**Step 3: 프로젝트 검증 체인에 연결합니다.**

```json
{
  "scripts": {
    "validate:plan": "node scripts/validate-public-beta-plan.mjs",
    "check:static": "npm run test && npm run validate:content && npm run validate:references && npm run validate:plan"
  }
}
```

- [x] 기존 스크립트 순서와 의미를 보존하면서 `validate:plan`을 마지막 정적 단계로 추가합니다.
- [x] 이 계획 자체의 현재 인벤토리 58개와 100점 원장이 통과하게 합니다.

**Step 4: 전체 검증·커밋합니다.**

```bash
node --test tests/public-beta-plan-validation.test.mjs
npm run validate:plan
npm run check:static
ASTRO_TELEMETRY_DISABLED=1 npm run check
git diff --check
```

Expected: 새 테스트와 기존 테스트가 통과하고 원장 합계 100, 공개 문서 58개, 중복·누락 0개가 출력됩니다.

```bash
git add scripts/validate-public-beta-plan.mjs tests/public-beta-plan-validation.test.mjs package.json docs/superpowers/plans/2026-08-12-public-beta-master-plan.md PROJECT_CONTEXT.md CHANGELOG.md
git diff --cached --check
git commit -m "test: validate public beta execution ledger"
```

## 7. M1 — 전체 포트폴리오와 규칙 감사

### Task 4: 공개 콘텐츠 58개의 역할·학습 결과·규칙 판정을 고정합니다

**Files:**

- Create: `docs/project/public-beta-content-audit.md`
- Modify: `docs/superpowers/plans/2026-08-12-public-beta-master-plan.md`
- Modify: `PROJECT_CONTEXT.md`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`

**Step 1: 감사 표 구조를 만듭니다.**

각 공개 문서에 다음 열을 정확히 한 행으로 기록합니다.

```text
ID | 경로 | 역할 | 독자 질문 | 학습 결과 | 현재 상태 | CASE | DURABLE | AUDIENCE | ANALOGY | EVIDENCE | SOURCE | TERM | VISUAL | 판정 | 목표 작업 | 근거
```

- [ ] 역할은 `core`, `capstone`, `navigation`, `reference`, `current-tool` 중 하나입니다.
- [ ] 규칙 판정은 `conform`, `needs_edit`, `needs_rewrite`, `merge`, `remove`, `historical_only` 중 하나입니다.
- [ ] 문서 개수나 길이를 학습 역할의 대리 지표로 사용하지 않습니다.
- [ ] 각 `seed`는 유지·확장·병합·제거 이유를 기록합니다.
- [ ] 현재 `review` 4개도 새 정책에 자동 통과시키지 않고 내용·근거·역할을 다시 판정합니다.
- [ ] `merge`·`remove`가 실제 정보 구조나 공개 URL을 바꾸면 감사에서는 제안으로만 기록하고 푸디님 승인 뒤 인벤토리·리디렉션/링크·진척률 분모를 같은 변경 작업에서 갱신합니다.

**Step 2: 공개 코퍼스를 파일 단위로 완독하고 의미 판정을 기록합니다.**

- [ ] 제목·description·learningObjectives·본문·교차 링크·프롬프트·대체 텍스트를 함께 읽습니다.
- [ ] 용어집과 핵심 장의 정의가 충돌하면 양쪽에 같은 finding ID를 연결합니다.
- [ ] 반복 사례는 영속 개념 뒤에 배치됐는지, 사례가 개념을 대체하지 않는지 확인합니다.
- [ ] 근거 없는 현재 제품 단정, 계획과 실행 상태 혼동, 비유 한계 누락을 별도 finding으로 남깁니다.

```bash
find src/content/docs -type f -name '*.md' | sort
rg -n "contentStatus:|learningObjectives:|reviewEvidence:" src/content/docs
rg -n "TODO|TBD|작성 예정" src/content/docs
npm run validate:content
npm run validate:references
```

Expected: 감사 표가 실제 공개 문서 58개와 일대일로 일치하고 모든 불일치가 목표 작업 ID를 가집니다.

**Step 3: 마스터 인벤토리와 독립 대조합니다.**

```bash
npm run validate:plan
node scripts/validate-content.mjs
git diff --check
```

Expected: 감사 표 행 58개, 인벤토리 58개, 실제 공개 문서 58개가 일치합니다. Critical·Important는 작업 ID 없이 남지 않습니다.

**Step 4: 문맥과 원장을 갱신하고 커밋합니다.**

```bash
git add docs/project/public-beta-content-audit.md docs/superpowers/plans/2026-08-12-public-beta-master-plan.md PROJECT_CONTEXT.md ROADMAP.md CHANGELOG.md
git diff --cached --check
git commit -m "docs: audit public beta content portfolio"
```

### Task 5: 폐기 사례의 의미 잔존과 출처 공백을 전수 기록합니다

**Files:**

- Create: `research/public-beta-source-gap-register.md`
- Modify: `docs/project/public-beta-content-audit.md`
- Modify: `research/source-map.md`
- Modify: `docs/superpowers/plans/2026-08-12-public-beta-master-plan.md`
- Modify: `PROJECT_CONTEXT.md`
- Modify: `CHANGELOG.md`

**Step 1: 기계 검색으로 후보를 모읍니다.**

```bash
rg -n -i "반도체|semiconductor|wafer|fab|chip dashboard|공개 반도체 데이터" src/content/docs src/assets/diagrams src/assets/diagrams/source
rg -n "Supabase|Vercel|Codex Sites|Claude Code|Codex|GitHub Pages" src/content/docs
rg -n "source_version_or_document_status|checked_at|not-confirmed|official" research src/content/docs
```

Expected: 공개 코퍼스의 후보 위치가 수집되고 역사 보고서·CHANGELOG는 공개 현재 권고와 분리됩니다.

**Step 2: 단어가 아니라 의미를 감사합니다.**

- [x] 이전 사용자·역할, 읽기·쓰기 상태, API·필드, 원천·단위·품질 상태, 실패 조건·오라클, 다이어그램 단계가 남았는지 판정합니다.
- [x] 현재 알려진 `learning-paths.md` 한 건을 고정된 유일 건수로 가정하지 않습니다.
- [x] 공개 원고에 남은 폐기 사례는 해당 M2/M3 작업에 `needs_edit` 또는 `needs_rewrite`로 연결합니다.
- [x] 날짜가 있는 역사 증거는 소급 개작하지 않고 현재 권고로 오해되지 않는지 표시만 점검합니다.

**Step 3: 출처 공백 레지스터를 만듭니다.**

각 행은 다음 필드를 가집니다.

```text
Gap ID | 문서 | 주장 | 위험 | 필요한 1차 출처 | 최신성 | 현재 상태 | 목표 작업 | 일반화 금지선
```

- [x] `research/source-map.md`의 기존 source ID와 중복되는 항목은 새 ID를 만들지 않고 연결합니다.
- [x] 제품·표준·보안·데이터 권리·현재 도구 주장을 우선순위 `critical`, `important`, `normal`로 구분합니다.
- [x] 공식 근거가 없으면 비공식 블로그로 조용히 대체하지 않습니다.
- [x] 읽기 전용 네트워크 조사가 필요한 행은 M2 또는 M6의 승인된 도메인에 연결합니다.

**Step 4: 검증·커밋합니다.**

```bash
rg -n "Gap ID|critical|important|normal|not-confirmed" research/public-beta-source-gap-register.md
npm run validate:references
npm run validate:plan
git diff --check
```

Expected: 공개 폐기 사례 후보 전체가 판정되고 source gap마다 문서·위험·목표 작업·금지선이 있습니다.

```bash
git add research/public-beta-source-gap-register.md docs/project/public-beta-content-audit.md research/source-map.md docs/superpowers/plans/2026-08-12-public-beta-master-plan.md PROJECT_CONTEXT.md CHANGELOG.md
git diff --cached --check
git commit -m "docs: register public beta source gaps"
```

Task 5 결과와 Fix Round 1: 공개 Markdown 58개·게시 SVG 12개·Mermaid 원본 12개의 직접·의미 감사를 수행해 `start-here/learning-paths.md` 한 건만 현재 폐기 사례 의미 잔존으로 판정하고 추가 의미 잔존 0건을 확인했습니다. 날짜 있는 역사 범위 `docs/project/reviews/`·`docs/superpowers/`·`CHANGELOG.md`의 16개 파일 73개 일치 행은 현재 권고와 분리해 보존했습니다. 최초 PBSG-001~PBSG-020에 source-map의 여섯 현행 주장 묶음 PBSG-021~PBSG-026을 보완해 현재 26개 모두 `not-confirmed`로 배정했습니다. 이 심화 대조가 Task 4의 초기 28·16·14와 0·9·1을 보정한 현재 판정은 conform 22개·needs_edit 22개·needs_rewrite 14개, Critical 0개·Important 10개·Minor 1개입니다. Task 5와 Fix Round 1에서는 네트워크 조사·공개 원고·자산·생명주기 상태 변경을 수행하지 않았고 M1-02 `done` 2.0·현재 인정 점수 30.7은 유지합니다.

### Task 6: 12개 SVG와 12개 Mermaid 원본의 교육 질문·복잡도·접근성을 감사합니다

**Files:**

- Create: `docs/project/public-beta-visual-audit.md`
- Modify: `docs/project/public-beta-content-audit.md`
- Modify: `docs/superpowers/plans/2026-08-12-public-beta-master-plan.md`
- Modify: `PROJECT_CONTEXT.md`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`

**Step 1: `diagram-design`과 `archify`를 다시 읽고 판정 기준을 고정합니다.**

- [x] `diagram-design`은 모든 정적 교육 그림의 기본 규칙으로 적용합니다.
- [x] `archify`는 노드 8~12개의 복잡한 상세 구조 후보에만 표시합니다.
- [x] Node.js 22.16.0 호환 확인 전에는 Archify를 실행하거나 공개 런타임으로 채택하지 않습니다.

**Step 2: 게시 자산과 원본을 일대일 대조합니다.**

```bash
find src/assets/diagrams -maxdepth 1 -type f -name '*.svg' | sort
find src/assets/diagrams/source -maxdepth 1 -type f -name '*.mmd' | sort
rg -n "src/assets/diagrams|assets/diagrams" src/content/docs
npm run validate:references
```

각 자산 행에는 다음을 기록합니다.

```text
Asset ID | SVG | source | 소비 문서 | 학습 질문 | 문법 | 노드 | 화살표 | 초점 | title/desc/alt | 현재 크기 | 모바일 | dark | 판정 | 도구 | 목표 작업
```

- [x] 판정은 `keep`, `reflow`, `split`, `replace`, `remove`, `add` 중 하나입니다.
- [x] API `1200×1640`, 분석 `760×1200`, 운영·에이전트 `760×1040`, 1200px 가로형 자산을 실제 소비 페이지와 함께 우선 확인합니다.
- [x] 그림 앞·뒤 설명, 대체 텍스트, 색 외 의미, marker 화살표 머리, 라이트·다크 대비를 확인합니다.
- [x] SVG와 Mermaid 의미가 다르면 어느 쪽이 게시 정본인지 판정하고 조용히 둘 다 유지하지 않습니다.

**Step 3: 실제 픽셀 기준선만 확인합니다.**

- [x] 기존 사이트를 로컬 preview로 실행합니다.
- [x] 각 자산 소비 페이지를 1440×1000과 390×844, 라이트·다크에서 한 번씩 확인합니다.
- [x] 자산 내부 글자 크기, 잘림·겹침, 전역 overflow, 선·화살표 머리, 제목·설명 접근성을 기록합니다.
- [x] 이 단계에서는 자산을 수정하지 않습니다.

```bash
ASTRO_TELEMETRY_DISABLED=1 npm run build
npm run preview -- --host 127.0.0.1 --port 4327
```

Expected: 감사 파일에 실제 뷰포트·테마·검사일·결함과 보존된 증거 범위가 기록되고 수정 전 baseline과 M4 목표가 구분됩니다. Preview와 브라우저 세션은 검사 뒤 종료합니다.

**Step 4: 검증·커밋합니다.**

```bash
rg -n "keep|reflow|split|replace|remove|add|diagram-design|archify" docs/project/public-beta-visual-audit.md
npm run validate:references
npm run validate:plan
git diff --check
```

```bash
git add docs/project/public-beta-visual-audit.md docs/project/public-beta-content-audit.md docs/superpowers/plans/2026-08-12-public-beta-master-plan.md PROJECT_CONTEXT.md ROADMAP.md CHANGELOG.md
git diff --cached --check
git commit -m "docs: audit public beta learning diagrams"
```

M1은 공개 콘텐츠의 Critical·Important 규칙 위반과 폐기된 공개 사례 잔존이 모두 0건이어야 완료합니다. 모든 finding을 담당 작업·우선순위·검증 방법에 배정하고 감사의 미판정 행을 0개로 만드는 일은 다음 작업을 진행할 수 있게 하는 추적 상태이며, M1 종료 게이트 통과를 뜻하지 않습니다.

Task 6 결과: 게시 SVG 12개·Mermaid 원본 12개를 정확히 12행으로 판정하고, 공유 자산을 포함한 소비 occurrence 15개에서 `1440×1000`·`390×844` light/dark의 서로 다른 시각 캡처 60개와 소비 문맥별 합본 15개를 headed real Chrome으로 남겼습니다. 실행 당시 H1·배지·자산·alt·overflow·console·page error를 관찰했지만 상태별 DOM·console·theme 결과 manifest/log를 보존하지 않았으므로 그 수치와 초기 실패 시도 제외 과정은 독립 재현 증거로 인정하지 않고 Task 21에서 다시 검증합니다. 판정은 keep 0개·reflow 8개·split 1개·replace 3개이고 remove·add 0개입니다. PBVA-001~PBVA-005 Important 5개는 API 분할, source/topology drift, dark marker 8자산, 390px 판독 10자산, lifecycle 앞뒤 설명을 모두 Task 20과 자산별 검증 기준에 배정해 미배정 Critical·Important 0개입니다. Node.js `v26.0.0`에서 Node.js 22.16.0 호환성을 확인하지 못했으므로 Archify는 실행·변환·도입하지 않았고, 13노드 API는 분할 전 후보에서 제외했습니다. 공개 원고·SVG·Mermaid·콘텐츠 상태는 변경하지 않았으며 M4-01의 기존 0.5점과 M4-02 이후 점수는 유지합니다. M1-01·M1-02·M1-03 하위 감사 작업과 인벤토리·finding 배정 단계는 완료됐지만, 현재 Important 15개와 현행 폐기 사례 잔존 1건이 실제로 해소되기 전까지 전체 M1 milestone은 `in_progress`입니다. 12개 자산 모두 Task 20의 실제 교정과 Task 21의 상태별 manifest 재검증을 통과하기 전에는 M4 시각 교정 완료로 인정하지 않습니다.

---

## 8. M2 — 필수 기반 계획 완료

### Task 7: Supabase·Vercel·Codex Sites의 공식 자료를 읽기 전용으로 확인합니다

**Files:**

- Modify: `research/current-tool-mapping-research-brief.md`
- Modify: `research/source-map.md`
- Modify: `research/public-beta-source-gap-register.md`
- Modify: `docs/superpowers/plans/2026-08-12-public-beta-master-plan.md`
- Modify: `CHANGELOG.md`

**Approved read-only scope upon this plan's explicit approval:**

- `supabase.com/docs`의 데이터베이스·Auth·인가 정책·서버 실행·마이그레이션·백업·로그·키 문서
- `vercel.com/docs`의 빌드·런타임·환경 변수·배포·도메인·HTTPS·로그·롤백 문서
- 설치된 `sites:sites-hosting` 스킬과 로컬 제품 자료, 필요할 때만 OpenAI 공식 도메인의 Codex Sites 문서
- 공식 문서가 직접 가리키는 같은 제품의 공식 하위 문서

계정 로그인, 프로젝트 생성, 설정 변경, 무료 한도 시험, 데이터베이스 생성, 배포와 외부 쓰기는 허용 범위가 아닙니다. Vercel 플러그인은 설치하지 않습니다.

**Step 1: 실행일과 제품별 조사 계약을 확인합니다.**

- [x] `supabase:supabase`와 `sites:sites-hosting` 스킬을 읽습니다.
- [x] `research/current-tool-mapping-research-brief.md`의 7개 영속 책임과 세 제품 질문을 확인합니다.
- [x] Task 1의 완료 커밋 `48d0c8e`와 문서 상태 필드 수정 `4acf77f`를 현재 Git 객체에서 대조합니다.
- [x] 조사 실행일을 시스템 날짜로 기록하고 과거 계획의 `checked_at: 2026-08-07`을 복제하지 않습니다.

```bash
date +%F
git show --stat --oneline 48d0c8e
git show --stat --oneline 4acf77f
rg -n "관계형 데이터 저장|인증|인가|서버 실행|빌드와 아티팩트|호스팅과 공개 주소|운영과 복구" research/current-tool-mapping-research-brief.md
```

**Step 2: 제품별 공식 주장만 판정합니다.**

각 주장에 다음 필드를 실제 값으로 기록합니다.

```yaml
claim_id: SUPA-DB-01
product: Supabase
responsibility: 관계형 데이터 저장
claim: 공식 자료에서 직접 확인한 한 문장 주장
source_url: 공식 문서 직접 URL
checked_at: 실행일
source_version_or_document_status: 확인한 버전 또는 문서 상태
source_type: official-docs
status: confirmed | limited | not-confirmed
scope: 이 핸드북에서 적용할 범위
do_not_generalize: 이 주장으로 결론 내리면 안 되는 범위
```

- [x] Supabase는 Postgres·Auth·인가 정책·API/서버 실행·마이그레이션·백업·로그·클라이언트 공개 키와 서버 비밀 경계를 확인합니다.
- [x] Vercel은 정적·서버 런타임·빌드·환경 변수·배포 이력·도메인·HTTPS·로그·롤백과 외부 데이터 책임을 확인합니다.
- [x] Codex Sites는 입력 아티팩트·버전·호스팅·공개 URL·서버 런타임·환경 변수·도메인·롤백 경계 중 공식 자료로 확인되는 범위만 기록합니다. 입력 archive의 정확한 구성은 로컬 공식 제품 자료와 공개 직접 URL의 근거 차이를 `SITES-ARTIFACT-01` `not-confirmed`·미게시 claim으로 명시합니다.
- [x] 공식 근거가 없거나 제품 상태가 불명확하면 `not-confirmed`로 두고 공개 원고 입력 목록에서 제외합니다.
- [x] 가격·무료 한도·UI 버튼 위치는 공개 베타의 학습 목표에서 제외합니다.

**Step 3: 현재성·직접 URL·일반화 금지선을 검증합니다.**

```bash
rg -n "claim_id: (SUPA|VERCEL|SITES)-|checked_at:|source_version_or_document_status:|status: (confirmed|limited|not-confirmed)|do_not_generalize:" research/current-tool-mapping-research-brief.md
rg -n "Supabase|Vercel|Codex Sites" research/source-map.md
```

Expected: 게시 후보 주장마다 공식 직접 URL·실제 확인일·문서 상태·적용 범위·일반화 금지선이 있고 확인하지 못한 기능은 숨겨지지 않습니다. 네트워크·인증·429 실패가 있으면 해당 제품만 `blocked`로 기록하고 다른 모델·비공식 소스로 대체하지 않습니다.

**Task 7 완료 체크포인트 (2026-08-13):** 구현 커밋 `167b945`와 Fix Round 1 `4b2a23c`에 Supabase 9개·Vercel 8개·Codex Sites 6개, 총 23개 claim을 기록했고 현재 분포는 `confirmed` 17개·`limited` 4개·`not-confirmed` 2개입니다. 공개 공식 URL이 정확한 Sites 입력 archive 구성을 직접 뒷받침하지 않는 `SITES-ARTIFACT-01`과 rollback 범위가 닫히지 않은 `SITES-ROLLBACK-01` 2개는 미게시하며, 게시 입력 후보는 21개입니다. 첫 독립 검토의 Critical 0개·Important 1개·Minor 1개를 고친 뒤 같은 리뷰어가 Fix Round 1을 Critical 0개·Important 0개·Minor 0개 `PASS`로 재검토했습니다. PBSG-004·005·012·017·018·020과 양방향 crosswalk를 유지했고 기존 gap 26개와 상태·위험 집계는 변경하지 않았으며, 제품 fact pack은 실제 캡스톤의 제품 선택·동시성·복원 성공을 증명하지 않습니다. M2-02는 `done` 1.5점이고 현재 인정 점수는 35.2점입니다. 전체 M1은 공개 콘텐츠 Important 15개와 현행 폐기 사례 잔존 1건 때문에 계속 `in_progress`이며 M2-03과 Task 8은 아직 `pending`입니다.

**Step 4: 조사 파일만 검증·커밋합니다.**

```bash
npm run check:static
git diff --check
git add research/current-tool-mapping-research-brief.md research/source-map.md research/public-beta-source-gap-register.md docs/superpowers/plans/2026-08-12-public-beta-master-plan.md CHANGELOG.md
git diff --cached --check
git commit -m "docs: verify current tool mappings"
```

### Task 8: 영속 책임과 분리된 날짜 있는 현재 도구 매핑 페이지를 만듭니다

**Files:**

- Create: `src/content/docs/reference/current-tool-mapping.md`
- Modify: `src/content/docs/reference/index.md`
- Modify: `src/content/docs/04-backend-data/api-database-auth.md`
- Modify: `src/content/docs/10-deployment-operations/build-deploy-domain-dns.md`
- Modify: `src/content/docs/12-case-studies/first-full-stack-project.md`
- Regenerate: `CONTENT_MAP.md`
- Modify: `PROJECT_CONTEXT.md`
- Modify: `PROJECT_MANIFEST.json`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`
- Modify: `VERIFICATION_REPORT.md`
- Modify: `docs/project/public-beta-content-audit.md`
- Modify: `research/public-beta-source-gap-register.md`
- Modify: `docs/superpowers/plans/2026-08-12-public-beta-master-plan.md`
- Modify: `scripts/validate-public-beta-plan.mjs`
- Modify: `tests/public-beta-plan-validation.test.mjs`

검증기의 공개 문서 수 계약도 Task 8 뒤의 실제 인벤토리 59개와 맞아야 하므로, 위 두 파일은 승인된 수용 기준의 누락을 바로잡는 범위 교정에 포함합니다. 테스트 기대값을 먼저 59로 바꾸어 RED를 확인한 뒤 검증기 상수만 59로 최소 수정합니다.

**Step 1: 확인된 주장만 사용하는 새 참고 페이지를 작성합니다.**

- [x] frontmatter는 `contentStatus: draft`와 영속 책임·현재성·일반화 금지선을 읽는 세 학습 목표를 가집니다.
- [x] 본문 순서는 `사용법 → 남는 영속 책임 → Supabase → Vercel → Codex Sites 또는 미게시 경계 → 모임 웹앱 대응 → 도구 교체 판단 → 검증 체크리스트 → 확인일·공식 출처`입니다.
- [x] 각 제품 표는 `영속 책임`, `확인된 현재 기능`, `사용자가 여전히 결정할 것`, `직접 증거`, `확인일`, `일반화 금지선` 열을 사용합니다.
- [x] `not-confirmed` 기능을 추측하지 않고 “공식 근거 부족으로 이 판에서는 다루지 않음”으로 표시합니다.
- [x] “데이터베이스 = Supabase”, “배포 = Vercel”, “호스팅 = Codex Sites” 같은 등치를 쓰지 않습니다.

**Step 2: 영속 개념 장과 캡스톤에는 짧은 연결 상자만 추가합니다.**

- [x] API 장은 데이터·인증·인가·서버 책임 정의 뒤 현재 관리형 예시 링크만 2~3문장으로 연결합니다.
- [x] 배포 장은 정적·동적 책임을 먼저 판정한 뒤 현재 호스팅 예시로 연결합니다.
- [x] 모임 캡스톤은 아키텍처 결정과 교체 가능한 도구 매핑을 분리해 읽는 방법만 연결합니다.
- [x] 세 장의 영속 정의·상태·오라클·보안 경계·사례 계약을 제품 설명으로 바꾸지 않습니다.

**Step 3: 콘텐츠 지도와 마스터 인벤토리에 새 문서를 등록합니다.**

- [x] `npm run sync:content-map`으로 공개 문서 수를 59개로 갱신합니다.
- [x] 이 계획의 `PUBLIC_BETA_INVENTORY`에 새 경로를 `M3-REF`, 현재 상태 `draft`로 정확히 한 번 추가합니다.
- [x] `public-beta-content-audit.md`에 역할 `current-tool`, 8개 규칙 판정, 독자 질문, source gap, M3-REF와 R25 연결을 한 행으로 추가합니다.
- [x] 새 claim을 만들지 않고 Task 7의 `not-confirmed` 미게시 경계를 source gap register와 기존 source-map 기록에 연결합니다.
- [x] 진행률 분모는 100점을 유지하고 새 문서를 M3-REF에 함께 배정하되, 기존 네 문서가 미완성인 동안 M3-REF 전체를 완료로 올리지 않습니다.

```bash
npm run sync:content-map
npm run validate:plan
```

Expected: 실제 공개 Markdown, 콘텐츠 지도와 마스터 인벤토리가 모두 59개입니다.

**Step 4: 자동·브라우저·검색 검증을 수행합니다.**

```bash
ASTRO_TELEMETRY_DISABLED=1 npm run check
rg -n "확인일|문서 상태|일반화 금지선|영속 책임|Supabase|Vercel" src/content/docs/reference/current-tool-mapping.md
```

- [x] 1440×1000과 390×844에서 상태 배지·표·긴 URL·내비게이션·전역 overflow·console 오류와 경고를 구현 실행 중 확인하고, 데스크톱·모바일 전체 페이지 PNG 2장을 보존했습니다.
- [x] Pagefind에서 `Supabase`, `Vercel`, `데이터베이스`, `authorization`, `배포`를 검색하고 새 페이지 또는 관련 핵심 장이 나오는지 구현 보고서에 기록했습니다.
- [x] Codex Sites가 미게시 판정이면 검색 결과를 억지로 만들지 않고 미게시 경계를 기록합니다.

Task 8의 보존된 브라우저 증거는 PNG 2장뿐입니다. 이 픽셀 증거는 데스크톱·모바일의 페이지 제목·초안 배지·세 제품 표 영역 렌더링을 뒷받침하지만, 구현 실행에서 관찰·보고한 DOM exact count·전역 overflow·console·pageerror·세 연결 클릭·다섯 Pagefind 결과·세션 정리와 초기 자동화 실패는 상태별 manifest·browser log가 없어 독립 재현 증거가 아닙니다. 이 항목들은 Task 21에서 실패 시도를 포함한 manifest·log와 함께 다시 검증합니다.

Expected: 공개 콘텐츠 59개, 생성 HTML 60개 이상, 새 페이지와 세 연결 링크가 유효하고 제품 종속 과장이 0건입니다.

**Step 5: 문맥과 원장을 갱신하고 커밋합니다.**

```bash
git add src/content/docs/reference/current-tool-mapping.md src/content/docs/reference/index.md src/content/docs/04-backend-data/api-database-auth.md src/content/docs/10-deployment-operations/build-deploy-domain-dns.md src/content/docs/12-case-studies/first-full-stack-project.md CONTENT_MAP.md docs/project/public-beta-content-audit.md research/public-beta-source-gap-register.md PROJECT_CONTEXT.md PROJECT_MANIFEST.json ROADMAP.md CHANGELOG.md VERIFICATION_REPORT.md docs/superpowers/plans/2026-08-12-public-beta-master-plan.md scripts/validate-public-beta-plan.mjs tests/public-beta-plan-validation.test.mjs
git diff --cached --check
git commit -m "docs: add dated current tool mappings"
```

Task 8 완료 체크포인트(2026-08-13): 구현 `4a03844`와 Fix Round 1 `e08ba8e`에 Task 7의 게시 가능 21개 claim과 미게시 경계 2개만 사용한 날짜 있는 참고 페이지, 세 영속 장의 좁은 연결, 공개 문서 59개 인벤토리와 검증기 계약을 반영했습니다. 공개 상태는 `draft` 42개·`seed` 13개·`review` 4개·`ready` 0개입니다. 첫 독립 검토의 Critical 0개·Important 4개·Minor 1개를 고친 뒤 같은 리뷰어가 Fix Round 1을 Critical 0개·Important 0개·Minor 0개 `PASS`로 재검토했습니다. fresh 전체 검증은 Node 테스트 65/65·Astro HTML 60개·Pagefind HTML 60개·빌드 산출물 HTML 60개로 통과했습니다. 보존된 PNG 2장만 headed Chrome의 1440×1000·390×844에서 페이지 제목·초안 배지·세 제품 표 영역이 렌더된 독립 증거이며, DOM exact count·overflow·console·pageerror·세 연결 링크 클릭·다섯 검색어 결과·log·cleanup과 초기 자동화 실패는 구현 실행에서 관찰·보고됐지만 상태별 manifest·log가 없어 독립 재현 증거가 아니므로 Task 21에서 다시 검증합니다. M2-03은 `done` 1.5점, 현재 인정 점수는 36.7점입니다. 전체 M1은 Important 15개와 현행 폐기 사례 잔존 1건 때문에 `in_progress`이고 M3-REF도 `in_progress` 1.0점이며, push·배포·실제 공개 URL 검증은 수행하지 않았습니다.

### Task 9: 공식 13장 Build Track과 검색 기반 학습 경로를 정렬합니다

**Files:**

- Modify: `src/content/docs/index.md`
- Modify: `src/content/docs/start-here/learning-paths.md`
- Modify: `src/content/docs/start-here/how-to-use-this-guide.md`
- Modify: `src/content/docs/12-case-studies/index.md`
- Modify: `src/content/docs/reference/index.md`
- Regenerate: `CONTENT_MAP.md`
- Modify: `PROJECT_CONTEXT.md`
- Modify: `PROJECT_MANIFEST.json`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`
- Modify: `VERIFICATION_REPORT.md`
- Modify: `docs/project/public-beta-content-audit.md`
- Modify: `docs/superpowers/plans/2026-08-12-public-beta-master-plan.md`

**Step 1: 기존 학습 경로의 폐기 사례를 승인된 두 사례 체계로 바꿉니다.**

- [x] 일반 개발의 반복 사례는 모임 일정·참가 신청 웹앱, 데이터 분석 비교 사례는 교육용 주가 데이터 대시보드로 설명합니다.
- [x] `공개 반도체 데이터`와 같은 특수 사례 잔존을 제거합니다.
- [x] 투자 추천·수익 보장·실제 자동 주문으로 읽힐 수 있는 표현을 넣지 않습니다.

**Step 2: Build Track을 정확히 13장으로 고정합니다.**

- [x] 기존 핵심 장 11개의 순서를 유지합니다.
- [x] 12번은 `첫 풀스택 프로젝트: 모임 참가 웹앱`, 13번은 `데이터 분석가의 주가 대시보드 사례`입니다.
- [x] 완전한 13장 목록은 `learning-paths.md`에만 두고 다른 문서는 링크와 설명만 가집니다.
- [x] 현재 도구 매핑은 날짜 있는 참고편이며 Build Track 핵심 정의를 대체하지 않습니다.

**Step 3: 순차 학습과 검색 기반 학습을 같은 수준으로 설명합니다.**

- [x] `how-to-use-this-guide.md`에 `처음부터 따라가기`와 `필요한 내용만 찾기`를 병렬 절로 둡니다.
- [x] 검색 흐름은 한국어 용어 → 영문·약어 → 문제 문장 → 용어집 → 관련 장의 한 문장 정의·시스템 위치·판단 규칙 순서입니다.
- [x] 사례 인덱스는 일반 개발과 데이터 분석의 역할 차이를 먼저 설명합니다.
- [x] 참고편 인덱스는 용어집·방법론 지도·체크리스트·날짜 있는 현재 도구 매핑의 용도를 구분합니다.

**Step 4: 구조 불변·폐기 사례·검색을 검증합니다.**

```bash
node --input-type=module -e "import fs from 'node:fs'; const s=fs.readFileSync('src/content/docs/start-here/learning-paths.md','utf8'); const build=s.split('## Build Track:')[1].split('## Deep Track:')[0]; const n=[...build.matchAll(/^\\d+\\. \\[/gm)].length; if(n!==13) throw new Error('Build Track expected 13, got '+n); console.log('Build Track 13 verified')"
if rg -n -i "반도체|semiconductor|wafer|fab|chip dashboard|공개 반도체 데이터" src/content/docs src/assets/diagrams src/assets/diagrams/source; then exit 1; fi
npm run sync:content-map
ASTRO_TELEMETRY_DISABLED=1 npm run check
```

- [x] Pagefind에서 `백엔드`, `인증`, `fallback`, `dry-run`, `Supabase`, `주가`, `모임 참가`를 데스크톱과 모바일에서 검색합니다.
- [x] 검색 결과 클릭 뒤 H1 1개, 상태 배지, 대상 문구, 뒤로 이동, 전역 overflow 0, console error/warning 0을 확인합니다.

Expected: Build Track 13장, 공개 폐기 사례 0건, 검색·경로·두 사례 링크가 실제 빌드 결과와 일치합니다.

**Step 5: 검증 기록과 원장을 갱신하고 커밋합니다.**

```bash
git add src/content/docs/index.md src/content/docs/start-here/learning-paths.md src/content/docs/start-here/how-to-use-this-guide.md src/content/docs/12-case-studies/index.md src/content/docs/reference/index.md CONTENT_MAP.md docs/project/public-beta-content-audit.md PROJECT_CONTEXT.md PROJECT_MANIFEST.json ROADMAP.md CHANGELOG.md VERIFICATION_REPORT.md docs/superpowers/plans/2026-08-12-public-beta-master-plan.md
git diff --cached --check
git commit -m "docs: align learning paths and search entry points"
```

Task 9 완료 체크포인트(2026-08-13): 구현 `0cf4b03`은 홈의 공식 경로 참조와 네 공개 진입 문서를 정렬해 기존 핵심 11장·모임 참가 웹앱·교육용 주가 대시보드의 정확한 13장 Build Track을 `learning-paths.md` 한 곳에 고정했습니다. 공개 Markdown 59개·게시 SVG 12개·Mermaid 원본 12개의 폐기 사례 직접 검색은 0건이고, 감사 판정은 conform 19개·needs_edit 26개·needs_rewrite 14개, 현재 finding은 Critical 0개·Important 13개·Minor 1개입니다. 전체 공개 상태는 `draft` 42개·`seed` 13개·`review` 4개·`ready` 0개이고 Build Track은 `draft` 10개·`seed` 0개·`review` 3개·`ready` 0개입니다. 브라우저 증거는 JSONL 30 records, 7개 검색어×2 뷰포트의 성공 튜플 14개·고유 14개, 학습 경로 상태 2개, 보존 실패 5개와 실제 cleanup을 포함합니다. 독립 검토는 exact 13-file scope, Build 13, 폐기 사례·역사·감사·회계와 브라우저 manifest를 대조해 Critical 0개·Important 0개·Minor 0개 `PASS`했으므로 M2-04를 `done` 4.0점·현재 인정 점수 40.7점으로 닫았습니다. 전체 M1은 남은 Important 13개 때문에 `in_progress`이고 M3-NAV도 Task 11 전 `in_progress` 2.0점을 유지합니다. 이후 검토의 Opus 5 `xhigh`·Codex·소유자 승인과 선택적 사람 검토 계약은 바꾸지 않았으며, Task 21 전체 회귀·`ready`·push·배포·공개 URL 검증은 수행하지 않았습니다.

### Task 10: 아키텍처·프레임워크 기반 장과 판단 지도를 완성합니다

**Files:**

- Create: `research/architecture-framework-research-brief.md`
- Modify: `src/content/docs/06-requirements-design/architecture-and-frameworks.md`
- Modify: `src/content/docs/reference/development-glossary.md`
- Modify: `research/source-map.md`
- Create: `src/assets/diagrams/architecture-decision-layers.svg`
- Create: `src/assets/diagrams/source/architecture-decision-layers.mmd`
- Modify: `src/content/docs/start-here/learning-paths.md`
- Modify: `src/content/docs/06-requirements-design/index.md`
- Modify: `src/content/docs/12-case-studies/first-full-stack-project.md`
- Modify: `src/content/docs/12-case-studies/analytics-dashboard-case-study.md`
- Regenerate: `CONTENT_MAP.md`
- Modify: `PROJECT_CONTEXT.md`
- Modify: `PROJECT_MANIFEST.json`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`
- Modify: `VERIFICATION_REPORT.md`
- Modify: `docs/project/public-beta-content-audit.md`
- Modify: `docs/project/public-beta-visual-audit.md`
- Modify: `docs/superpowers/plans/2026-08-12-public-beta-master-plan.md`

**Step 1: 제품 이름 없는 주장 계약을 먼저 작성합니다.**

- [x] 아키텍처·상세 설계·구현·기술 스택의 결정 수준을 구분합니다.
- [x] 구성요소·책임·경계·인터페이스·상태·데이터·배치를 한 구조 설명에 연결합니다.
- [x] 품질 속성·제약·실패 영향·되돌리기 비용을 대안 선택 기준으로 둡니다.
- [x] 프레임워크·라이브러리·런타임·플랫폼·도구의 역할과 제어 관계를 구분합니다.
- [x] 모임 웹앱은 단순 모놀리스·단일 관계형 데이터베이스 가설부터, 주가 대시보드는 정적 전달부터 검증하는 이유와 변경 신호를 기록합니다.
- [x] SWEBOK와 기존 공식 근거가 직접 뒷받침하지 않는 세부는 제품 중립 보편 규칙으로 쓰지 않습니다.

**Step 2: 장을 역할별 완료 구조로 확장합니다.**

본문은 `필요성 → 한 문장 정의 → 도시 계획/건축 공법 비유와 한계 → 결정 수준 → 구조 질문 → 품질과 제약 → 도구 범주 → 선택 절차 → 모임 사례 → 주가 사례 → 실패·과설계 신호 → AI 검토 계약 → 체크리스트 → 연습 → 출처` 순서로 작성합니다.

- [x] 아키텍처가 그림 한 장이나 제품 목록이 아니라 결정·이유·검증·변경 조건의 묶음임을 설명합니다.
- [x] 프레임워크 선택은 책임·렌더링·상태·팀 역량·배포 환경·유지 비용과 연결합니다.
- [x] 마이크로서비스·큐·캐시·별도 검색 서버는 입증된 요구와 품질 속성이 없으면 초기 답으로 제시하지 않습니다.
- [x] AI 요청 계약은 읽기 전용 현황 확인, 대안 2개, 트레이드오프, 비목표, 증거, 가역성, 승인 경계를 포함합니다.

**Step 3: `diagram-design`으로 7단계 세로형 판단 지도를 만듭니다.**

```text
사용자 문제·제약 → 책임·경계·상태 → 품질 속성·트레이드오프 → 아키텍처 결정 → 프레임워크·런타임 선택 → 구현·배포 → 검증 증거·변경 조건
```

- [x] 노드 7개인 단순 세로 흐름이므로 Archify를 사용하지 않습니다.
- [x] SVG에는 고유 `<title>`, `<desc>`, `role="img"`, `aria-labelledby`를 넣습니다.
- [x] 색 이외의 레이블·선 종류로 의미를 전달하고 Mermaid 원본과 문구·순서를 맞춥니다.
- [x] 원고는 그림 앞에서 읽을 질문, 뒤에서 그림이 증명하지 않는 범위를 설명합니다.
- [x] 새 SVG·Mermaid와 소비 원고를 `public-beta-visual-audit.md`에 한 행으로 추가하고 복잡도·도구·뷰포트·테마 증거를 기록합니다.
- [x] 실질 확장된 아키텍처 원고의 8개 콘텐츠 규칙 판정과 source gap 상태를 content audit에 갱신합니다.

**Step 4: Deep Track·인덱스·캡스톤 역링크를 연결합니다.**

- [x] 공식 Build Track 13장 목록은 바꾸지 않고 Deep Track 첫 링크로 둡니다.
- [x] 요구사항 인덱스는 PRD·SDD·TDD, 아키텍처·프레임워크, ADR의 질문을 구분합니다.
- [x] 두 캡스톤은 선택 이유를 다시 검토하는 지점에서만 한 문장으로 역링크합니다.

**Step 5: 자동·시각·브라우저 검증과 커밋을 수행합니다.**

```bash
npm run sync:content-map
ASTRO_TELEMETRY_DISABLED=1 npm run check
rg -n "모임 참가 웹앱|주가 데이터 대시보드|아키텍처|프레임워크|기술 스택|비유.*한계|AI.*검토|확인 체크리스트|짧은 연습" src/content/docs/06-requirements-design/architecture-and-frameworks.md
rg -n "<title>|<desc>|aria-labelledby|role=\"img\"" src/assets/diagrams/architecture-decision-layers.svg
git diff --check
```

- [x] 소비 페이지를 1440×1000·390×844, 라이트·다크에서 확인합니다.
- [x] 7단계 라벨·화살표 머리·대체 텍스트·잘림·겹침·전역 overflow·console error/warning을 기록합니다.
- [x] M2에서는 `draft`를 유지하고 Codex 두 겹 독립 검토와 `ready` 승격은 M5에서 수행합니다. 모든 원고 완성 뒤에 수행하며, 이 문장은 현재 M5 게이트입니다. 날짜별 Opus closeout 기록은 역사 증거로만 보존합니다.

```bash
git add research/architecture-framework-research-brief.md src/content/docs/06-requirements-design/architecture-and-frameworks.md src/content/docs/reference/development-glossary.md research/source-map.md src/assets/diagrams/architecture-decision-layers.svg src/assets/diagrams/source/architecture-decision-layers.mmd src/content/docs/start-here/learning-paths.md src/content/docs/06-requirements-design/index.md src/content/docs/12-case-studies/first-full-stack-project.md src/content/docs/12-case-studies/analytics-dashboard-case-study.md CONTENT_MAP.md docs/project/public-beta-content-audit.md docs/project/public-beta-visual-audit.md PROJECT_CONTEXT.md PROJECT_MANIFEST.json ROADMAP.md CHANGELOG.md VERIFICATION_REPORT.md docs/superpowers/plans/2026-08-12-public-beta-master-plan.md
git diff --cached --check
git commit -m "docs: complete architecture decision foundation"
```

Task 10 구현·검토 체크포인트(2026-08-13): 제품 중립 주장 계약과 공식·1차 근거 적용 범위를 `research/architecture-framework-research-brief.md`와 source map에 기록하고, 아키텍처를 결정·이유·검증 증거·변경 조건의 묶음으로 설명하는 본문 11,573자의 `draft` 원고를 구현 `62b4cb5`에서 완성했습니다. 원고는 요구된 절 순서, 두 사례의 단순한 최초 가설과 변경 신호, 과설계 금지선, 읽기 전용 AI 검토 계약을 갖추고 Deep Track·요구사항 인덱스·두 캡스톤의 결정 재검토 지점으로 연결됩니다. 공식 Build Track 13개와 전체 상태 `draft` 42개·`seed` 13개·`review` 4개·`ready` 0개는 바꾸지 않았습니다. `diagram-design` 지침으로 560×772의 정확히 7개 노드·6개 화살표인 접근 가능한 SVG와 같은 라벨·순서·토폴로지의 Mermaid 원본을 만들었고, 단순 선형 흐름이라 Archify는 사용하지 않았습니다. 콘텐츠 감사는 conform 19개·needs_edit 27개·needs_rewrite 13개와 현재 Critical 0개·Important 13개·Minor 1개, 시각 감사는 13 SVG·13 Mermaid·16 occurrences와 keep 1개·reflow 8개·split 1개·replace 3개·현재 Critical 0개·Important 5개입니다. 20-record 브라우저 manifest는 1440×1000·390×844의 라이트·다크 4상태, 네 테마 값 일치, H1·배지·대체 텍스트·7개 라벨·6개 화살표·명시적 marker fill, 전역 overflow·console·pageerror 0, 역링크 실제 클릭 4개, 보존 실패 5개와 browser·preview·port cleanup을 기록합니다. SWEBOK 새 조회 HTTP 403과 ISO 페이지 미채택을 숨기지 않았고, 허용 범위 밖 PBSG-007 정본 source-gap register는 `not-confirmed`로 유지했습니다. 독립 검토는 Critical 0개·Important 0개·Minor 1개 `PASS`했으며, 비차단 Minor는 과거 ignored Task 10 JSONL의 짧은 `html_data_theme`·`effective_color_scheme` 키를 바꾸지 않고 Task 21의 새 manifest에서 정확한 `requested_theme`·`observed_prefers_color_scheme`·`observed_html_data_theme`·`observed_effective_color_scheme`만 최종 튜플로 인정하는 후속 경계입니다. 이에 M2-05는 `done` 3.0점, M2-06은 `done` 1.0점, 현재 인정 점수는 44.7점이고 M2 기반 단계 M2-01~06은 완료됐습니다. Task 21 전체 회귀·M5 Opus 5 `xhigh` 독립 검토·Codex 재판정·소유자 승인·`ready`·push·배포·공개 URL 검증은 남아 있습니다.

M2는 날짜 있는 현재 도구 매핑, 13장 Build Track과 검색 진입점, 아키텍처·프레임워크 기반 장과 판단 지도가 모두 자동·브라우저 검증을 통과하고 `draft` 상태로 M3/M5에 인계됐을 때 완료합니다. Task 10 독립 검토 `PASS`로 이 M2 기반 단계는 완료됐지만 M1·M3·M4·M5와 공개 베타는 완료되지 않았습니다.

---

## 9. M3 — 역할별 전체 원고 완성

M3은 “글이 길다”가 아니라 역할별 학습 목표를 처음부터 끝까지 수행할 수 있는 원고가 된 상태입니다. Codex 두 겹 독립 검토와 `ready` 승격은 M5에서 수행합니다. 날짜별 Opus 검토·closeout 문구는 과거 실제 기록이며 현재 실행 지시가 아닙니다.

### 공통 원고 프로토콜

각 아래 체크 행은 독립 작업 단위입니다. 한 작업 단위는 한 핵심 원고 또는 서로 의존하는 짧은 인덱스 묶음만 수정합니다.

**Step 1: 입력 계약을 고정합니다.**

- [ ] 대상 원고 전체, `docs/project/public-beta-content-audit.md`의 해당 행, `research/public-beta-source-gap-register.md`, 관련 용어집·캡스톤·source-map 행을 읽습니다.
- [ ] 독자 질문·학습 결과·비목표·적용 규칙·중요 출처·시각화 여부를 시작 보고에 고정합니다.
- [ ] 문서의 역할이 `core`, `capstone`, `navigation`, `reference`, `current-tool` 중 무엇인지 확인합니다.

**Step 2: 역할에 맞게 원고를 완성합니다.**

- [ ] 핵심 장은 필요성, 한 문장 정의, 비유와 한계, 시스템 위치, 실제 신호·용어, 판단 규칙, 실패·복구, 확인 체크리스트, 짧은 연습, 관련 용어·출처를 역할에 맞게 갖춥니다.
- [ ] 인덱스·홈·학습 경로는 실제 공개 문서·제목·순서·상태와 일치하고 순차·검색 기반 이동을 지원합니다. 핵심 장의 10개 절과 500자 규칙을 강요하지 않습니다.
- [ ] 참고편은 핵심 장 정의와 충돌하지 않고 한국어·영문·약어·유사 용어 검색, 교차 링크, 실제 판단 사용법을 제공합니다.
- [ ] 캡스톤은 요구사항→설계→상태→API→데이터→권한→테스트→Git→배포→운영을 추적하고 화면 성공과 업무·데이터·운영 성공을 구분합니다.
- [ ] 현재 도구 매핑은 확인일·공식 URL·문서 상태·적용 범위·일반화 금지선을 유지합니다.
- [ ] 사례와 도구 설명은 영속 정의 뒤에 둡니다.
- [ ] 비유를 쓰지 않는 편이 더 명확하면 비유를 억지로 추가하지 않고 그 이유를 자체 점검에 기록합니다.
- [ ] 시각 자료가 관계를 실제로 더 명확하게 만들면 `public-beta-visual-audit.md`에 `add` 후보와 학습 질문을 기록하고 M4로 넘깁니다. 단순 표가 더 명확하면 표를 사용합니다.

**Step 3: 상태와 증거를 정직하게 유지합니다.**

- [ ] `seed`는 처음부터 끝까지 읽을 수 있는 원고가 된 뒤 `draft`로 바꿉니다.
- [ ] 기존 `review` 원고를 의미 있게 수정하면 `draft`로 내리고 과거 `reviewEvidence`를 제거하되 과거 검토 파일은 역사 증거로 보존합니다.
- [ ] 표면 편집만 했다면 요구·데이터·기술 주장·실패·테스트·출처·다이어그램 의미가 불변이라는 diff 증거가 있을 때만 상태를 유지합니다.
- [ ] M3에서 `ready`로 올리지 않습니다.

**Step 4: 원고 단위 집중 검증을 실행합니다.**

```bash
npm run sync:content-map
npm run check:static
git diff --check
```

- [ ] 대상 원고의 필수 용어·사례·실패·검증·출처 범위를 `rg`로 확인합니다.
- [ ] 공개 본문의 `TODO`, `TBD`, `작성 예정`, 폐기 사례, 빈 대체 텍스트, 본문 H1이 0건인지 확인합니다.
- [ ] 문서 링크와 `CONTENT_MAP.md`의 상태·본문 문자 수가 일치합니다.
- [ ] 같은 작업에서 의미가 바뀐 용어집·source-map·다이어그램 원본과 게시 자산을 함께 갱신합니다.

**Step 5: 패키지 끝에서 전체 검증·브라우저 확인을 실행합니다.**

```bash
ASTRO_TELEMETRY_DISABLED=1 npm run check
npm run validate:plan
```

- [ ] 변경한 페이지를 1440×1000과 390×844에서 확인합니다.
- [ ] H1 1개, 상태 배지, 제목 계층, 표·코드·다이어그램 내부 스크롤과 전역 overflow, console error/warning을 기록합니다.
- [ ] 패키지 진행률·상태 집계·남은 finding을 원장과 프로젝트 문맥에 반영합니다.

**Step 6: 독립 커밋을 만듭니다.**

각 체크 행의 원고, 직접 연결된 용어·출처·자산, 생성된 `CONTENT_MAP.md`, 필요한 문맥 파일만 stage합니다. staged diff 전체를 읽고 `git diff --cached --check`가 통과한 뒤 표에 고정된 커밋 메시지를 사용합니다.

### Task 11: 홈·시작하기·섹션 인덱스 18개를 실제 학습 구조와 일치시킵니다

**Files:** `M3-NAV`로 배정된 18개 경로, `CONTENT_MAP.md`, `PROJECT_CONTEXT.md`, `PROJECT_MANIFEST.json`, `ROADMAP.md`, `CHANGELOG.md`, `VERIFICATION_REPORT.md`, 이 마스터 계획.

| 체크 | 작업 단위 | 정확한 파일 | 수용 기준 | 커밋 메시지 |
|---|---|---|---|---|
| - [x] | M3-NAV-01 홈·시작 | `src/content/docs/index.md`, `src/content/docs/start-here/index.md`, `src/content/docs/start-here/how-to-use-this-guide.md`, `src/content/docs/start-here/why-this-guide.md` | 대상 독자·핸드북의 약속·비목표·순차/검색 이용법·완료 증거 경계를 중복 없이 설명하고 실제 시작 링크가 유효함 | `docs: complete handbook entry pages` |
| - [x] | M3-NAV-02 학습 경로 | `src/content/docs/start-here/learning-paths.md` | 공식 Build Track 13장, Deep Track, 두 사례 역할, 검색 기반 경로, 현재 도구 참고편의 위치가 실제 문서와 일치함 | `docs: complete public learning paths` |
| - [x] | M3-NAV-03 1~4부 인덱스 | `src/content/docs/01-mental-models/index.md`, `02-work-environment/index.md`, `03-full-stack/index.md`, `04-backend-data/index.md` | 각 부의 독자 질문·읽는 순서·장 사이 책임 차이·다음 이동이 실제 경로와 일치함 | `docs: complete foundation section indexes` |
| - [x] | M3-NAV-04 5~8부 인덱스 | `src/content/docs/05-frontend/index.md`, `06-requirements-design/index.md`, `07-workflow-methods/index.md`, `08-quality/index.md` | UI·설계·절차·품질을 서로 다른 질문으로 안내하고 중복 정의를 만들지 않음 | `docs: complete delivery section indexes` |
| - [x] | M3-NAV-05 9~12부·참고편 인덱스 | `src/content/docs/09-git-github/index.md`, `10-deployment-operations/index.md`, `11-ai-native/index.md`, `12-case-studies/index.md`, `reference/index.md` | 변경·운영·AI·두 캡스톤·참고편 역할과 승인 경계가 실제 장·검색 결과와 일치함 | `docs: complete practice section indexes` |

**Package verification:**

```bash
node --input-type=module -e "import fs from 'node:fs'; const s=fs.readFileSync('src/content/docs/start-here/learning-paths.md','utf8'); const build=s.split('## Build Track:')[1].split('## Deep Track:')[0]; if([...build.matchAll(/^\\d+\\. \\[/gm)].length!==13) process.exit(1)"
npm run sync:content-map
ASTRO_TELEMETRY_DISABLED=1 npm run check
```

Expected: 공개 인덱스 링크 0건 오류, Build Track 13개, 순차·검색 경로가 실제 페이지와 일치하고 M3-NAV가 `done`입니다.

2026-08-13 구현 체크포인트 — 독립 검토 대기: M3-NAV-01~05는 `07b76f6`·`bd2dee3`·`43345db`·`080a64f`·`964dce0`의 다섯 독립 커밋으로 구현했습니다. 정확한 대상 18개는 모두 `draft`이고 `reviewEvidence`는 0개이며, 로컬 링크 123개·직접 자식 링크 44개·Build Track 13개·본문 H1 0개·빈 alt 0개·임의 하드랩 0개·폐기 사례 0개를 기계 대조했습니다. fresh 로컬 게이트는 테스트 65/65·공개 문서 59개·참조 Markdown/MDX 175개·학습 SVG 13개·원장 100점·중복 0개·누락 0개·빌드 HTML 60개·리터럴 Markdown 0개로 종료 코드 0이고, 기존 `site` 미설정 sitemap 경고 1건만 남았습니다. ignored browser manifest 139 records는 headed Google Chrome의 18 URL×1440×1000/390×844 light 최종 36개 고유 상태, 정확한 네 테마 필드 일치 36개, H1·초안 배지·제목 계층·전역 overflow·핵심 링크 실제 이동 36개, 내부 스크롤·깨진 이미지·console warning/error·pageerror 실패 0개, PNG 36장과 cleanup을 보존합니다. 실패 79건은 route resolver·sandbox preview·CLI VM·URL 전역·12부 H1 기대값을 교정하기 전 시도로 성공 상태와 분리했습니다. 독립 검토 전이므로 원장 `M3-NAV`는 `in_progress` 2.0/4.0, 현재 인정 점수는 44.7점으로 유지하며 Task 11 전체 완료, `ready`, Task 21 검색·외부 URL 회귀, push·배포·공개 URL 검증을 주장하지 않습니다.

2026-08-13 closeout: 구현 `18d1fc206269890d512f6985d36bd8d2d01073be`와 앞선 다섯 공개 커밋을 포함한 정확한 25파일 범위의 독립 검토가 Critical 0개·Important 0개·Minor 0개 `PASS`했습니다. 공식 Build Track 13개, 공개 문서 59개·상태 42 draft/13 seed/4 review/0 ready, 콘텐츠 감사 19/27/13·finding 0/13/1, browser manifest 139 records·최종 36상태·실패 79건·PNG 36장·cleanup과 참조 Markdown/MDX 175개·학습 SVG 13개 경계를 유지한 채 `M3-NAV`를 `done` 4.0/4.0, 현재 인정 점수를 46.7점으로 닫습니다. 전체 M1은 Important 13개 때문에 `in_progress`이고 다른 M3 패키지·Task 21 전체 회귀·M5 Opus 5 `xhigh`/Codex/소유자 승인·선택적 사람 검토·`ready`·push·배포·공개 URL 검증은 남아 있습니다.

### Task 12: 사고 모델·작업 환경 6개 핵심 원고를 완성합니다

**Files:** 아래 여섯 원고, 연결된 `research/source-map.md`, `src/content/docs/reference/development-glossary.md`, `src/content/docs/reference/agent-output-glossary.md`, `CONTENT_MAP.md`, 필요한 문맥 파일.

| 체크 | ID·파일 | 독자 질문과 반드시 포함할 판단·실패·검증 | 커밋 메시지 |
|---|---|---|---|
| - [x] | M3-ME-01 `01-mental-models/abstraction-and-tradeoffs.md` | “무엇을 숨기고 무엇을 드러내야 하는가?”를 추상화 층·책임·비용·누수·과소/과잉 추상화·되돌리기 질문으로 설명하고 비유의 깨지는 지점을 포함함 | `docs: complete abstraction and tradeoffs chapter` |
| - [x] | M3-ME-02 `01-mental-models/developer-thinking.md` | 모호한 문제를 관찰 가능한 증상·가설·제약·작은 실험·피드백으로 나누고 구현부터 시작하는 실패와 증거 기반 종료를 설명함 | `docs: complete developer thinking chapter` |
| - [x] | M3-ME-03 `01-mental-models/software-is-a-system.md` | 여섯 렌즈, 상태 변경/읽기 분석 책임, 화면·업무·데이터·운영 성공 구분, 모임·주가 사례의 경계를 최종 감사하고 특수 사례 잔존이 없음 | `docs: finalize software system chapter` |
| - [x] | M3-ME-04 `02-work-environment/dependencies-package-managers-environments.md` | 런타임·의존성·패키지 관리자·manifest·lockfile·환경 격리·버전 드리프트·설치 승인과 재현 가능한 확인을 구분함 | `docs: complete dependency environment chapter` |
| - [x] | M3-ME-05 `02-work-environment/files-folders-paths.md` | 절대/상대 경로·현재 디렉터리·확장자·숨김 파일·권한·glob·대소문자·안전한 탐색과 파괴적 경로 실수를 비개발자 행동으로 연결함 | `docs: finalize files folders paths chapter` |
| - [x] | M3-ME-06 `02-work-environment/terminal-processes-ports.md` | 터미널·셸·명령·프로세스·PID·포트·환경 변수·foreground/background·종료 코드와 이미 사용 중인 포트 진단·안전 종료를 구분함 | `docs: complete terminal processes ports chapter` |

**Package verification:**

```bash
rg -n "추상화|트레이드오프|가설|제약|시스템|의존성|lockfile|절대 경로|상대 경로|프로세스|PID|포트|종료 코드" src/content/docs/01-mental-models src/content/docs/02-work-environment
npm run sync:content-map
ASTRO_TELEMETRY_DISABLED=1 npm run check
```

Expected: 여섯 원고가 처음부터 끝까지 읽히고 seed 3개가 `draft` 이상이며 M3-MENTAL-ENV의 내용 완료 기준이 충족됩니다.

2026-08-13 구현·패키지 검증 체크포인트 — fresh 독립 패키지 재검토 대기: M3-ME-01~06은 `71a3b4d`·`5da79a1`·`1e2e46c`·`4e629a6`·`d2a11e7`·`45141a8`의 여섯 독립 커밋으로 구현했습니다. 정확한 구현 tracked 범위는 여섯 원고·CONTENT_MAP·콘텐츠 감사·source gap register·source map·개발 용어집의 11개이고 +1,033/-134이며, 대상은 모두 `draft`·`reviewEvidence` 0개입니다. PBSG-001·006·021만 2026-08-13 공식·1차 근거 범위에서 `confirmed`로 전환해 gap confirmed 3/not-confirmed 23·미확인 위험 2/21/0, 공개 상태 draft 46/seed 10/review 3/ready 0, 콘텐츠 감사 23/26/10·현재 finding 0/13/1입니다. fresh 로컬 게이트는 테스트 65/65·공개 문서 59개·참조 Markdown/MDX 177개·학습 SVG 13개·원장 100점·중복 0개·누락 0개·빌드 HTML 60개·리터럴 Markdown 0개로 종료 코드 0이고 기존 sitemap 경고 1건만 남았습니다. ignored browser manifest 27 records와 PNG 16장은 headed Google Chrome 151의 여섯 URL×1440×1000/390×844 light 최종 12개 고유 상태, 정확한 네 테마 필드·H1·초안 배지·제목 계층·전역 overflow·표·코드 내부 스크롤·이미지와 alt·학습 앵커, console warning/error·pageerror 실패 0개와 cleanup을 보존합니다. lazy SVG 로드 전 PB-021 실패 4건과 앞선 preview 실패·차단은 성공과 분리했습니다. 기존 독립 읽기 전용 검토는 Critical 0개·Important 0개·Minor 0개 `CONTENT PASS, PACKAGE BLOCKED`였으므로, 차단 해소 뒤 fresh 독립 패키지 재검토가 끝나기 전까지 `M3-MENTAL-ENV`는 `in_progress` 1.5/5.0·현재 인정 점수 46.7점입니다. Task 13·Task 21 전체 회귀·M5·소유자 승인·`ready`·push·배포·공개 URL 검증은 시작하거나 완료로 주장하지 않습니다.

2026-08-13 closeout: 구현 커밋 `71a3b4d`..`45141a8`, browser/context 커밋 `468be53`, 상태 요약 Fix Round 1 `d408663`을 포함한 Task 12 패키지를 재검토했습니다. fresh 패키지 검토는 처음에 `PROJECT_CONTEXT.md`의 현행 상태 요약 충돌로 `NEEDS CHANGES` Critical 0개·Important 1개·Minor 0개였고, Fix Round 1이 공개 59개·draft 46/seed 10/review 3/ready 0 정본을 맞춘 뒤 같은 리뷰어가 Critical 0개·Important 0개·Minor 0개 `PASS`로 판정했습니다. 이에 `M3-MENTAL-ENV`를 `done` 5.0/5.0으로 닫고 기존 46.7점에 미인정 3.5점을 더해 현재 인정 점수를 50.2점으로 갱신합니다. 콘텐츠 감사 23/26/10·현재 finding 0/13/1, gap confirmed 3/not-confirmed 23·미확인 위험 2/21/0, 시각 감사와 PB-021의 PBVA-004 Task 20 경계는 그대로입니다. 전체 M1은 Important 13개 때문에 `in_progress`이고 다른 M3 패키지와 M3 전체도 미완료이며 Task 13은 아직 구현하지 않았습니다. Task 21 전체 다크·검색·외부 URL 회귀, M5 Claude Code Opus 5 `xhigh`·Codex·소유자 승인, 선택적 사람 검토, `ready` 0개, push·배포·공개 URL 검증도 남아 있습니다.

### Task 13: 풀스택·백엔드·데이터 6개 핵심 원고를 완성합니다

**Files:** 아래 여섯 원고, 관련 용어집·source-map·기존 API/풀스택 다이어그램, `CONTENT_MAP.md`, 필요한 문맥 파일.

| 체크 | ID·파일 | 독자 질문과 반드시 포함할 판단·실패·검증 | 커밋 메시지 |
|---|---|---|---|
| - [x] | M3-FD-01 `03-full-stack/client-server-full-stack.md` | 클라이언트·서버 역할축과 프런트·백 책임축, 원본·사본 상태, 모임 참가 요청의 증거층, 늦은 응답·중복 클릭·캐시 실패를 구분함 | `docs: finalize client server full stack chapter` |
| - [x] | M3-FD-02 `03-full-stack/frontend-backend-boundary.md` | 표시·상호작용·클라이언트 상태와 서버 권위·업무 규칙·비밀·데이터 책임의 경계, 검증은 서버에서 끝나야 하는 이유와 경계 이동 신호를 설명함 | `docs: complete frontend backend boundary chapter` |
| - [x] | M3-FD-03 `03-full-stack/http-request-response.md` | URL·메서드·헤더·본문·상태 코드·안전성·멱등성·TLS·브라우저 정책과 응답 유실 뒤 재조회 계약을 구분함 | `docs: finalize HTTP request response chapter` |
| - [x] | M3-FD-04 `04-backend-data/api-database-auth.md` | API·DB·인증·인가·트랜잭션·고유성·동시성·commit 뒤 응답 유실·복구 오라클과 현재 도구 링크의 분리를 완성함 | `docs: finalize API database auth chapter` |
| - [x] | M3-FD-05 `04-backend-data/data-model-schema-migration.md` | 엔터티·속성·관계·키·제약·스키마·마이그레이션·backfill·호환성·rollback/roll-forward·데이터 검증을 모임 참가 관계로 설명함 | `docs: complete data model migration chapter` |
| - [x] | M3-FD-06 `04-backend-data/state-cache-queue.md` | 권위 상태·파생 상태·세션·캐시·큐·이벤트의 책임, 신선도·중복·순서·재처리·eventual consistency·장애 시 원본 확인을 구분함 | `docs: complete state cache queue chapter` |

**Package verification:**

```bash
rg -n "클라이언트|서버|프런트엔드|백엔드|HTTP|멱등|API|인증|인가|트랜잭션|스키마|마이그레이션|캐시|큐|신선도" src/content/docs/03-full-stack src/content/docs/04-backend-data
npm run sync:content-map
ASTRO_TELEMETRY_DISABLED=1 npm run check
```

Expected: 세 seed 원고가 `draft` 이상이고 여섯 장의 데이터·권한·상태 계약이 캡스톤과 충돌하지 않으며 M3-FULLSTACK-DATA가 `done`입니다.

2026-08-13 구현·패키지 검증 체크포인트 — fresh 독립 패키지 검토 대기: M3-FD-01~06은 `a62ffa2`·`35d45de`·`1d41df5`·`3749ca4`·`5b3b71a`·`cff8bb2`의 여섯 독립 커밋으로 구현했습니다. 정확한 구현 tracked 범위는 여섯 원고·CONTENT_MAP·콘텐츠 감사·source gap register·source map·개발 용어집의 11개이고 +744/-100이며 대상은 모두 `draft`·`reviewEvidence` 0개입니다. PBSG-002·022·023을 2026-08-13 공식·1차 근거의 직접 범위에서 `confirmed`로 전환해 gap confirmed 6/not-confirmed 20·미확인 위험 2/18/0, 공개 상태 draft 49/seed 7/review 3/ready 0, 콘텐츠 감사 26/26/7·현재 finding 0/13/1입니다. fresh 로컬 게이트는 테스트 65/65·공개 문서 59개·참조 Markdown/MDX 178개·학습 SVG 13개·원장 100점·중복 0개·누락 0개·빌드 HTML 60개·리터럴 Markdown 0개로 종료 코드 0이고 기존 sitemap 경고 1건만 남았습니다. ignored browser manifest 20 records와 PNG 12장은 headed Google Chrome 151의 여섯 URL×1440×1000/390×844 light 최종 12개 고유 상태, 정확한 네 테마 필드·H1·초안 배지·제목 계층·앵커·전역 overflow·표·코드 내부 스크롤·이미지와 alt·학습 앵커, console warning/error·pageerror 실패 0개와 cleanup을 보존합니다. sandbox preview EPERM 1건은 성공과 분리했습니다. 기존 PB-025·027 full-stack 그림과 PB-028 API 그림 finding은 Task 20에 유지하고 새 시각 자산은 만들지 않았습니다. fresh 독립 패키지 검토가 끝나기 전까지 `M3-FULLSTACK-DATA`는 `in_progress` 1.5/5.0·현재 인정 점수 50.2점입니다. Task 14·Task 21 전체 회귀·M5·소유자 승인·`ready`·push·배포·공개 URL 검증은 시작하거나 완료로 주장하지 않습니다.

2026-08-13 dedicated closeout: Task 13 구현 `a62ffa2`·`35d45de`·`1d41df5`·`3749ca4`·`5b3b71a`·`cff8bb2`, context `1947da5`, Fix Round 1 `759d2be`, Fix Round 2 `c286725`를 포함한 패키지는 같은 리뷰어의 최초 `NEEDS CHANGES` Critical 0개·Important 2개·Minor 1개, Fix Round 1 뒤 `NEEDS CHANGES` Critical 0개·Important 0개·Minor 1개, Fix Round 2 뒤 `PASS` Critical 0개·Important 0개·Minor 0개 이력으로 닫혔습니다. 이에 `M3-FULLSTACK-DATA`를 `done` 5.0/5.0으로 닫고 기존 50.2점에 미인정 3.5점을 더해 현재 인정 점수를 53.7점으로 갱신합니다. ignored browser manifest 20 records·최종 12개·PNG 12장·sandbox preview EPERM 1건·cleanup은 기존 증거로 보존했고 상태 문서 전용 closeout에서 브라우저를 재실행하지 않았습니다. 공개 59개·draft 49/seed 7/review 3/ready 0, 콘텐츠 감사 26/26/7·현재 finding 0/13/1, gap confirmed 6/not-confirmed 20·미확인 위험 2/18/0, 기존 시각 finding의 Task 20 경계는 그대로입니다. 전체 M1은 `in_progress`이고 다른 M3 패키지와 M3 전체, Task 14 이후, Task 21 전체 다크·검색·외부 URL 회귀, M5 Claude Code Opus 5 `xhigh`·Codex·소유자 승인, 선택적 사람 검토, `ready`·push·배포·공개 URL 검증은 남아 있습니다.

이 상태 closeout의 다음 게이트는 exact six-file diff와 회계를 확인하는 dedicated closeout review입니다.

### Task 14: 프런트엔드·요구사항·설계 6개 핵심 원고를 완성합니다

**Files:** 아래 여섯 원고, 관련 용어집·source-map·PRD/SDD/TDD·아키텍처 다이어그램, `CONTENT_MAP.md`, 필요한 문맥 파일.

| 체크 | ID·파일 | 독자 질문과 반드시 포함할 판단·실패·검증 | 커밋 메시지 |
|---|---|---|---|
| - [x] | M3-FR-01 `05-frontend/accessibility-responsive-design.md` | 접근성이 장식이 아니라 사용 가능성임을 시맨틱·키보드·초점·이름·대비·대체 텍스트·확대·반응형 reflow·실제 검증으로 설명함 | `docs: complete accessibility responsive chapter` |
| - [x] | M3-FR-02 `05-frontend/browser-dom-rendering.md` | URL 입력→네트워크→파싱→DOM/CSSOM→렌더→이벤트·상태 흐름, View Source/DOM/화면/Network 증거 차이와 렌더 실패를 설명함 | `docs: finalize browser DOM rendering chapter` |
| - [x] | M3-FR-03 `05-frontend/ui-state-and-ux.md` | loading·empty·success·validation·conflict·error·retry 상태와 서버 권위 상태를 구분하고 낙관적 UI·중복 행동·복구 가능성을 판단함 | `docs: complete UI state UX chapter` |
| - [x] | M3-FR-04 `06-requirements-design/adr-and-tradeoffs.md` | ADR의 맥락·결정·대안·결과·가정·검증·재검토 조건을 설명하고 결정 기록을 영원한 정답이나 회의록으로 오해하지 않게 함 | `docs: complete ADR tradeoffs chapter` |
| - [x] | M3-FR-05 `06-requirements-design/architecture-and-frameworks.md` | Task 10의 결정 수준·품질 속성·도구 범주·과설계·7단계 지도를 M3 감사에 따라 최종 정렬함 | `docs: finalize architecture framework chapter` |
| - [x] | M3-FR-06 `06-requirements-design/prd-sdd-tdd.md` | PRD, Software Design Description, Spec-Driven Development, TDD의 목적·입출력·순서·실패를 구분하고 문서 이름 흉내내기와 테스트 사후 작성 오해를 막음 | `docs: finalize PRD SDD TDD chapter` |

**Package verification:**

```bash
rg -n "접근성|키보드|DOM|CSSOM|loading|empty|conflict|ADR|아키텍처|프레임워크|Software Design Description|Spec-Driven Development|TDD" src/content/docs/05-frontend src/content/docs/06-requirements-design
npm run sync:content-map
ASTRO_TELEMETRY_DISABLED=1 npm run check
```

Expected: 세 seed 원고가 `draft` 이상이고 두 기존 review 원고의 의미 변경 여부·상태·증거가 정직하게 처리되며 M3-FRONT-DESIGN이 `done`입니다.

2026-08-13 dedicated closeout: M3-FR-01~06 구현 `56bca2b`·`621edc1`·`9f43c8c`·`66d815c`·`8a878e5`·`373b192`, source gap 문구 교정 `1e21a79`, context `e868ad0`, Fix Round 1 `3d60188`, Fix Round 2 `b0872b8`을 포함한 패키지는 같은 리뷰어의 최초 `NEEDS CHANGES` Critical 0개·Important 1개·Minor 0개, Fix Round 1 뒤 `NOT RESOLVED` Critical 0개·Important 1개·Minor 0개, Fix Round 2 뒤 `PASS` Critical 0개·Important 0개·Minor 0개 이력으로 닫혔습니다. 이에 `M3-FRONT-DESIGN`을 `done` 5.0/5.0으로 닫고 기존 53.7점에 미인정 3.5점을 더해 현재 인정 점수를 57.2점으로 갱신합니다. ignored manifest 108 records·역사 실패 7건·attempt 1/2/3 final 각 12개와 cleanup은 기존 증거로 보존했고 상태 문서 전용 closeout에서 브라우저를 재실행하지 않았습니다. 축소 whole-image renderer는 작은 배지를 누락할 수 있어 전체 이미지 육안을 배지 가시성 근거로 주장하지 않으며, accepted attempt 3의 같은 browser-state record에 결합된 즉시 PNG SHA256·dimensions·bytes와 DOM rect H1/status crop SHA256·dimensions·pixel stats·배지 OCR normalized exact 12/12를 근거로 사용합니다. 공개 59개·draft 54/seed 4/review 1/ready 0, Build Track draft12/review1, 콘텐츠 감사 30/25/4·현재 finding 0/13/1, gap confirmed10/not-confirmed16·미확인2/14/0, 시각 감사1/8/1/3과 PB-032·PB-036의 Task 20 finding은 그대로입니다. 전체 M1은 `in_progress`이고 다른 M3 패키지와 M3 전체, Task 15 이후, Task 20·Task 21 전체 다크·검색·외부 URL 회귀, M5 Claude Code Opus 5 `xhigh`·Codex·소유자 승인, `ready`·push·배포·공개 URL 검증은 남아 있습니다. dedicated closeout review가 다음 게이트입니다.

### Task 15: 개발 절차·품질·안전 6개 핵심 원고를 완성합니다

**Files:** 아래 여섯 원고, 관련 용어집·source-map·소프트웨어 생명주기/PRD/TDD/운영 도표, `CONTENT_MAP.md`, 필요한 문맥 파일.

| 체크 | ID·파일 | 독자 질문과 반드시 포함할 판단·실패·검증 | 커밋 메시지 |
|---|---|---|---|
| - [x] | M3-WQ-01 `07-workflow-methods/code-review-ci-cd.md` | review와 approval, CI와 delivery/deployment, 자동 게이트와 사람 판단, 실패한 검사·우회·branch protection·배포 승인 경계를 설명함 | `docs: complete code review CI CD chapter` |
| - [x] | M3-WQ-02 `07-workflow-methods/incremental-delivery.md` | vertical slice·작은 독립 작업·수용 기준·feature flag·feedback·rollback과 파일 수만 작게 나누는 가짜 점진성을 구분함 | `docs: complete incremental delivery chapter` |
| - [x] | M3-WQ-03 `07-workflow-methods/software-development-lifecycle.md` | 탐색→요구→설계→구현→검증→배포→운영→학습이 실제로 되돌아가는 흐름이며 문서 작성이 단계 완료를 보장하지 않음을 설명함 | `docs: complete software lifecycle chapter` |
| - [x] | M3-WQ-04 `08-quality/debugging-observability.md` | 증상·재현·가설·관찰·실험·원인·수정·회귀와 로그·지표·트레이스·관측 가능성의 차이를 설명하고 무작위 수정 실패를 막음 | `docs: complete debugging observability chapter` |
| - [x] | M3-WQ-05 `08-quality/performance-security.md` | 성능 예산·병목·측정과 위협·자산·신뢰 경계·최소 권한·입력 검증·비밀·의존성 위험을 우선순위·증거와 연결함 | `docs: complete performance security chapter` |
| - [x] | M3-WQ-06 `08-quality/testing-strategy.md` | 테스트 피라미드를 규칙이 아닌 위험 배분 모델로 다루고 unit/integration/contract/e2e/static/manual, fixture, oracle, flaky, coverage와 실제 성공 증거를 구분함 | `docs: finalize testing strategy chapter` |

**Package verification:**

```bash
rg -n "review|approval|CI|delivery|deployment|vertical slice|수용 기준|생명주기|재현|가설|로그|지표|트레이스|성능|신뢰 경계|fixture|oracle|flaky" src/content/docs/07-workflow-methods src/content/docs/08-quality
npm run sync:content-map
ASTRO_TELEMETRY_DISABLED=1 npm run check
```

Expected: 세 seed 원고가 `draft` 이상이고 자동 검사·사람 판단·배포·운영 증거가 섞이지 않으며 M3-WORKFLOW-QUALITY가 `done`입니다.

2026-08-13 구현·패키지 검증 체크포인트 — fresh 독립 패키지 검토 대기: M3-WQ-01~06은 `f8f42c8`·`4d295f4`·`1410b43`·`2388bb5`·`fd02fa5`·`579176f`의 여섯 독립 커밋으로 구현했습니다. 정확한 구현 tracked 범위는 여섯 원고·CONTENT_MAP·콘텐츠 감사·source gap register·source map·개발 용어집의 11개이고 +1,280/-177이며 대상은 모두 `draft`·`reviewEvidence` 0개입니다. PBSG-004·008·015·016을 2026-08-13 공식·1차 근거의 직접 범위에서 `confirmed`로 전환해 gap confirmed14/not-confirmed12·미확인 위험2/10/0, 공개 상태 draft58/seed1/review0/ready0, Build Track draft13, 콘텐츠 감사35/23/1·현재 finding0/12/1입니다. fresh 로컬 게이트는 테스트65/65·공개59·참조 Markdown/MDX183·학습 SVG13·원장100점·중복0·누락0·빌드 HTML60·리터럴 Markdown0으로 종료 코드0이고 기존 sitemap 경고1건만 남았습니다. ignored browser manifest39는 headed Google Chrome151의 여섯 URL×1440×1000/390×844 light accepted final12개, 정확한 네 테마 필드·H1/상태 가시성·scroll reset·제목·앵커·전역 overflow·표/코드 내부 스크롤·이미지와 alt·학습 앵커·console/pageerror·외부 요청 실패0개, 즉시 PNG·DOM rect crop provenance와 OCR12/12·원본 검사36개·cleanup을 보존합니다. preview EPERM·wrapper/collection 실패·미수용 캡처는 final과 분리했습니다. existing software lifecycle·testing·operations 그림과 PBVA finding은 Task20에 유지하고 새 시각 자산은 만들지 않았습니다. fresh 독립 패키지 검토가 끝나기 전까지 `M3-WORKFLOW-QUALITY`는 `in_progress`1.5/5.0·현재 인정 점수57.2점입니다. Task16·Task21 전체 회귀·M5·소유자 승인·`ready`·push·배포·공개 URL 검증은 시작하거나 완료로 주장하지 않습니다.

2026-08-13 dedicated closeout: M3-WQ-01~06 구현 `f8f42c8`·`4d295f4`·`1410b43`·`2388bb5`·`fd02fa5`·`579176f`와 context `bfceed4`를 포함한 패키지의 독립 검토가 Critical 0개·Important 0개·Minor 0개 `PASS`했습니다. 이에 `M3-WORKFLOW-QUALITY`를 `done` 5.0/5.0으로 닫고 기존 57.2점에 미인정 3.5점을 더해 현재 인정 점수를 60.7점으로 갱신합니다. ignored manifest 39 records의 preview·wrapper·collection 실패와 미수용 캡처, accepted final 12개, 같은-record PNG·H1/status crop provenance 12개와 summary, OCR 12/12·원본 검사 36개·cleanup은 그대로 보존했고 상태 문서 전용 closeout에서 브라우저를 재실행하지 않았습니다. 공개59·draft58/seed1/review0/ready0, Build Track draft13, 콘텐츠 감사35/23/1·finding C0/I12/M1, gap confirmed14/not-confirmed12·미확인 C2/I10/N0, 시각 감사1/8/1/3과 PB-039 등 기존 Task20 finding은 불변입니다. 전체 M1·다른 M3 패키지·M3 전체·Task16 이후·Task20·Task21·M5·소유자 승인·`ready`·push·배포·공개 URL 검증은 미완료이며 dedicated closeout review가 다음 게이트입니다.

### Task 16: Git·배포·운영 6개 핵심 원고를 완성합니다

**Files:** 아래 여섯 원고, 관련 용어집·source-map·Git/배포/운영 도표, `CONTENT_MAP.md`, 필요한 문맥 파일.

| 체크 | ID·파일 | 독자 질문과 반드시 포함할 판단·실패·검증 | 커밋 메시지 |
|---|---|---|---|
| - [x] | M3-GO-01 `09-git-github/branch-commit-pull-request.md` | branch·commit·remote tracking·Pull Request·review·merge의 목적과 상태를 구분하고 작은 브랜치·동기화·충돌·승인 흐름을 설명함 | `docs: complete branch commit pull request chapter` |
| - [x] | M3-GO-02 `09-git-github/git-and-github.md` | Git/GitHub, working tree/index/commit, status와 세 diff, local/remote, fetch/pull/push, 변경 보존과 외부 승인 경계를 모임 사례로 최종 정렬함 | `docs: finalize Git and GitHub chapter` |
| - [x] | M3-GO-03 `09-git-github/undo-merge-conflict-release.md` | restore/revert/reset/rebase의 영향 범위, 충돌 원인·해결·검증, 태그·버전·release와 이미 공유된 이력의 안전 경계를 구분함 | `docs: complete undo conflict release chapter` |
| - [x] | M3-GO-04 `10-deployment-operations/build-deploy-domain-dns.md` | source→build→artifact→environment→hosting→DNS→HTTPS→user flow→operations, 정적/동적 책임, local/CI/deployed evidence와 현재 도구 링크를 최종 정렬함 | `docs: finalize build deploy DNS chapter` |
| - [x] | M3-GO-05 `10-deployment-operations/environment-variables-config.md` | config와 secret, build-time/runtime, local/preview/production, 누락·기본값·rotation·클라이언트 노출·가짜 예시·검증 경계를 설명함 | `docs: complete environment configuration chapter` |
| - [x] | M3-GO-06 `10-deployment-operations/logs-monitoring-backup.md` | event/log/metric/trace, monitoring/observability, SLI/SLO/SLA, alert/incident/runbook, backup/restore/recovery, RPO/RTO와 모임 불변식·복구를 최종 정렬함 | `docs: finalize operations recovery chapter` |

**Package verification:**

```bash
rg -n "working tree|staging|commit|branch|Pull Request|merge|revert|rebase|release|artifact|DNS|HTTPS|build-time|runtime|secret|SLI|SLO|SLA|backup|restore|RPO|RTO" src/content/docs/09-git-github src/content/docs/10-deployment-operations
npm run sync:content-map
ASTRO_TELEMETRY_DISABLED=1 npm run check
```

Expected: 환경 변수 원고가 `draft` 이상이고 Git·배포·운영의 상태·권한·증거 경계가 서로 일치하며 M3-GIT-OPS가 `done`입니다.

2026-08-13 구현·패키지 검증 체크포인트 — fresh 독립 패키지 검토 대기: M3-GO-01~06은 `404db2a`·`93edd54`·`47cd4cf`·`1894183`·`028d5d4`·`08ff6dd`의 여섯 독립 커밋으로 구현했습니다. 정확한 구현 tracked 범위는 여섯 원고·CONTENT_MAP·콘텐츠 감사·source gap register·source map의 10파일·+706/-136이며 대상은 모두 `draft`·`reviewEvidence` 0개입니다. PBSG-005·009·011·012를 2026-08-13 공식·1차 근거의 직접 범위에서 `confirmed`로 전환해 gap confirmed18/not-confirmed8·미확인 위험1/7/0, 공개 상태 draft59/seed0/review0/ready0, Build Track draft13, 콘텐츠 감사38/21/0·현재 finding0/10/1입니다. fresh 로컬 게이트는 테스트65/65·공개59·보고서 포함 참조 Markdown/MDX185·학습 SVG13·원장100점·중복0·누락0·빌드 HTML60·리터럴 Markdown0으로 종료 코드0이고 기존 sitemap 경고1건만 남았습니다. ignored browser manifest68은 headed Google Chrome151의 여섯 URL×1440×1000/390×844 light accepted attempt3 final12개, 정확한 네 테마 필드·H1/상태 가시성·scroll reset·제목·앵커·전역 overflow·표/코드 내부 스크롤·이미지와 alt·학습 앵커·console/pageerror·외부 요청 실패0개, 즉시 PNG·DOM rect crop provenance와 OCR12/12·원본 검사36개·cleanup을 보존합니다. sandbox preview EPERM·Chrome launch timeout·attempt1 11/12·attempt2 0/12·sandbox cleanup `ps` 권한 실패는 final과 분리했습니다. existing Git·deploy·operations 그림과 PBVA finding은 Task20에 유지하고 새 시각 자산은 만들지 않았습니다. fresh 독립 패키지 검토가 끝나기 전까지 `M3-GIT-OPS`는 `in_progress`1.7/4.0·현재 인정 점수60.7점입니다. 전체 M1·다른 M3 패키지·M3 전체·Task17 이후·Task20·Task21·M5·소유자 승인·`ready`·push·배포·공개 URL 검증은 시작하거나 완료로 주장하지 않습니다.

2026-08-13 dedicated closeout: M3-GO-01~06 구현 `404db2a`·`93edd54`·`47cd4cf`·`1894183`·`028d5d4`·`08ff6dd`, context `be31f1e`를 포함한 패키지는 같은 리뷰어의 최초 `NEEDS CHANGES` Critical0·Important2·Minor0, RPO·RTO 기준점과 감사 summary를 exact3 tracked files·+5/-5로 교정한 Fix Round1 `76901ff` 뒤 `PASS` Critical0·Important0·Minor0 이력으로 닫혔습니다. 이에 `M3-GIT-OPS`를 `done`4.0/4.0으로 닫고 기존60.7점에 미인정2.3점을 더해 현재 인정 점수를63.0점으로 갱신합니다. ignored manifest68 records의 실패 이력, accepted attempt3 final12개, 같은-record PNG·H1/status crop provenance12개, OCR12/12·원본 검사36개·cleanup은 그대로 보존했고 상태 문서 전용 closeout에서 full/static/build/browser/network를 재실행하지 않았습니다. 공개59·draft59/seed0/review0/ready0, Build Track draft13, 콘텐츠 감사38/21/0·finding C0/I10/M1, gap confirmed18/not-confirmed8·미확인 C1/I7/N0, 시각 감사1/8/1/3과 existing Git/deploy/operations Task20 PBVA finding은 불변입니다. 전체 M1·다른 M3 패키지·M3 전체·Task17 이후·Task20·Task21·M5·소유자 승인·`ready`·push·배포·공개 URL 검증은 미완료이며 dedicated closeout review가 다음 게이트입니다.

### Task 17: AI 네이티브 개발 4개 핵심 원고를 완성합니다

**Files:** 아래 네 원고, `src/content/docs/reference/agent-output-glossary.md`, 관련 source-map, 에이전트/하네스 도표, `CONTENT_MAP.md`, 필요한 문맥 파일.

| 체크 | ID·파일 | 독자 질문과 반드시 포함할 판단·실패·검증 | 커밋 메시지 |
|---|---|---|---|
| - [x] | M3-AI-01 `11-ai-native/agent-review-and-verification.md` | AI 출력의 주장·변경·계획·검증을 분리하고 diff·test·data·browser·security·human judgment 증거층, 독립 검토·재판정·완료 주장 경계를 설명함 | `docs: complete agent review verification chapter` |
| - [x] | M3-AI-02 `11-ai-native/context-spec-harness-loop.md` | context/spec/harness/loop engineering의 목적·성숙도·상호 관계, 입력 품질·도구 경계·관찰·평가·회귀와 유행어 복제의 한계를 설명함 | `docs: complete context harness loop chapter` |
| - [x] | M3-AI-03 `11-ai-native/permissions-sandbox-worktrees.md` | read/write/network/exec 권한, sandbox, approval, worktree, destructive action, secrets, external side effects와 최소 권한·복구 경로를 설명함 | `docs: complete permissions sandbox worktrees chapter` |
| - [x] | M3-AI-04 `11-ai-native/working-with-coding-agents.md` | 상태→목표→비목표→계획→한 단위 변경→검증→독립 검토→인수 루프, 진단/변경 계약, 모임 W-03, local commit/push/deploy 분리를 최종 정렬함 | `docs: finalize coding agents workflow chapter` |

**Package verification:**

```bash
rg -n "diff|검증|독립 검토|context|spec|harness|loop|권한|sandbox|worktree|secret|목표|비목표|인수|push|deploy" src/content/docs/11-ai-native src/content/docs/reference/agent-output-glossary.md
npm run sync:content-map
ASTRO_TELEMETRY_DISABLED=1 npm run check
```

Expected: 네 원고가 모델·제품 사용법보다 오래가는 권한·증거·루프를 먼저 가르치고 M3-AI가 `done`입니다.

2026-08-13 구현·패키지 검증 체크포인트 — fresh 독립 패키지 검토 대기: M3-AI-01~04는 `0360cd9`·`cf2c3f0`·`c438aff`·`4d709e8`의 four independent commits로 구현했습니다. Exact implementation scope는 four manuscripts·CONTENT_MAP·content audit·source gap register·source map의8 tracked files·+609/-216이고 모두 `draft`·`reviewEvidence`0입니다. PBSG-010·017을 2026-08-13 공식·1차 근거의 직접 범위에서 `confirmed`로 전환해 gaps20/6·unresolved C1/I5/N0, public draft59, Build Track draft13, audit40/19/0·finding C0/I8/M1입니다. Fresh sync×2 no-op, static/full tests65/content59/references187+SVG13/plan100-59-0-0/build60/literal0을 통과했습니다. Ignored browser manifest33은 preview EPERM·Chrome launch timeout·relative original inspection failure를 accepted final과 분리하고 headed Google Chrome151 final8/8 unique8, exact theme/H1/status/scroll/headings/anchors/overflow/internal-scroll/images/alt/console/pageerror/external failures0, PB-050·052 lazy diagram4/missing0, same-record direct PNG/crop provenance·OCR8/8·original24·cleanup을 보존합니다. PBV-04·12/PBVA는 Task20, PBSG-018/PBCA-008은 Task19에 남기고 assets·visual audit·agent-output glossary diff0입니다. Fresh independent package review 전까지 `M3-AI`는 `in_progress`1.5/3.0·score63.0이며 Task18 이후·Task20/21·M5·owner·`ready`·push·deploy·publication·public URL은 미완료입니다.

2026-08-13 dedicated closeout: M3-AI-01~04 구현 `0360cd9`·`cf2c3f0`·`c438aff`·`4d709e8`, context `80315b64`를 포함한 패키지의 독립 검토가 `PASS` Critical0·Important0·Minor0이므로 `M3-AI`를 `done`3.0/3.0으로 닫고 기존63.0점에 미인정1.5점을 더해 현재 인정 점수를64.5점으로 갱신합니다. ignored manifest33 records의 실패 이력과 accepted final8개, same-record PNG·H1/status crop provenance8개, OCR8/8·원본 검사24개·cleanup은 그대로 보존했고 상태 문서 전용 closeout에서 full/static/build/browser/network를 재실행하지 않았습니다. 공개59·draft59/seed0/review0/ready0, Build Track draft13, 콘텐츠 감사40/19/0·finding C0/I8/M1, gap confirmed20/not-confirmed6·미확인 C1/I5/N0, 시각 감사1/8/1/3은 불변입니다. PBSG-018/PBCA-008은 Task19, PBV-04·12와 PBVA finding은 Task20에 남습니다. 전체 M1·다른 M3 패키지·M3 전체·Task18 이후·Task20·Task21·M5·소유자 승인·`ready`·push·배포·공개 URL 검증은 미완료이며 dedicated closeout review가 다음 게이트입니다.

### Task 18: 두 캡스톤을 처음부터 끝까지 추적 가능한 학습 프로젝트로 완성합니다

**Files:** 두 캡스톤, 연결된 사례 브리프·source-map·다이어그램, `CONTENT_MAP.md`, 필요한 문맥 파일.

| 체크 | ID·파일 | 독자 질문과 반드시 포함할 판단·실패·검증 | 커밋 메시지 |
|---|---|---|---|
| - [x] | M3-CP-01 `12-case-studies/first-full-stack-project.md` | W-01~W-05에서 사용자·역할·상태·API·인가·고유성·정원 동시성·테스트·Git·배포·운영·복구까지 양방향 추적되고 Supabase/Vercel/Codex Sites는 날짜 있는 선택 예로만 연결됨 | `docs: finalize meeting webapp capstone` |
| - [x] | M3-CP-02 `12-case-studies/analytics-dashboard-case-study.md` | D-01~D-05에서 EDU-FIXTURE·복합 선택 키·lineage·결측·신선도·재현성·시각화·갱신·오류 상태·배포·권리 경계까지 추적되고 투자 조언으로 읽히지 않음 | `docs: finalize stock dashboard capstone` |

**Step 1: 공통 추적 행렬을 캡스톤마다 확인합니다.**

```text
요구 ID → 사용자 행동 → 상태 전이 또는 데이터 변환 → 인터페이스 → 권한/권리 → 실패 위험 → 테스트 오라클 → Git 작업 단위 → 배포·운영 증거 → 복구
```

- [x] 모임 사례의 성공 화면·업무 상태·데이터 불변식·운영 성공을 구분합니다.
- [x] 주가 사례의 차트 렌더·데이터 의미·신선도·원천·변환 재현성·운영 성공을 구분합니다.
- [x] 실제 서비스·실제 시장 데이터·수익률·계정·토큰을 사용하거나 성공했다고 주장하지 않습니다.
- [x] 캡스톤의 도구 선택은 Task 8 현재 도구 페이지로 역링크하고 영속 아키텍처를 바꾸지 않습니다.

**Package verification:**

```bash
rg -n "W-0[1-5]|D-0[1-5]|권한|인가|정원|동시|불변식|EDU-FIXTURE|instrument_id|instrument_type|market|lineage|신선도|재현|복구" src/content/docs/12-case-studies/first-full-stack-project.md src/content/docs/12-case-studies/analytics-dashboard-case-study.md
if rg -n "실제 투자 추천|수익 보장|자동 주문" src/content/docs/12-case-studies; then exit 1; fi
npm run sync:content-map
ASTRO_TELEMETRY_DISABLED=1 npm run check
```

- [x] 두 페이지를 데스크톱·모바일·라이트·다크에서 확인하고 모든 내부 링크·도표·표·코드 블록의 접근성과 overflow를 기록합니다.
- [x] 캡스톤끼리 동일 예시를 기계적으로 반복하지 않고 개발과 분석의 다른 위험·증거가 드러나는지 자체 검토합니다.

Expected: 두 캡스톤의 요구부터 복구까지 추적 공백이 0개이고 M3-CAP이 `done`입니다.

2026-08-13~14 구현·패키지 검증 체크포인트 — fresh 독립 패키지 검토 대기: M3-CP-01~02는 `7258026`·`a9ec7eb`의 두 독립 커밋으로 구현했습니다. Exact tracked 범위는 두 원고·두 case brief·CONTENT_MAP·content audit·source gap register·source map의8파일·+87/-39이고 모두 `draft`·`reviewEvidence`0입니다. W-01~05·D-01~05 각각은 요구부터 복구까지 열 개 연결을 독립 완성했습니다. PBSG-019·020·026은 actual source/right/product stack/full educational contract·execution evidence가 없어 not-confirmed, PBCA-011도 open이며 public draft59, Build draft13, audit40/19/0·finding C0/I8/M1, gap20/6·unresolved C1/I5/N0, visual1/8/1/3입니다. Fresh sync×2 no-op과 full check는 tests65/content59/references188+SVG13/plan100-59-0-0/build60/literal0으로 통과했습니다. Ignored manifest30은 sandbox CLI-list hang·sandbox ps failure를 accepted와 분리하고 actual headed Chrome151 final8/8 unique8(light4/dark4), exact themes/H1/status/scroll/headings/anchors/overflow/internal-scroll/images/alt/console/pageerror/external failures0, same-record screenshot/H1/status/diagram provenance8, status OCR8, H1 exact OCR4지만 DOM·Playwright·original pixel8, original32, cleanup을 보존합니다. PBV-02·PBV-08 mobile small labels4/PBVA-004는 Task20에 남기고 desktop sticky-header diagram crop artifact2는 capture limitation으로 기록했습니다. Fresh independent package review 전 `M3-CAP`은 `in_progress`1.0/2.0·score64.5이며 Task19~21·M5·owner·`ready`·push·deploy·publication·public URL은 미완료입니다.

2026-08-14 dedicated closeout: M3-CP-01~02 구현 `7258026`·`a9ec7eb`, context `8d7c6e3`을 포함한 패키지는 최초 독립 검토에서 `NEEDS CHANGES` Critical0·Important1·Minor0이었고, ignored evidence의 canonical diagram ID swap을 원본 manifest30·PNG32를 rewrite/delete/rename하지 않는 append-only Fix Round1으로 교정한 뒤 같은 리뷰어가 이전 Important를 resolved로 확인해 `PASS` Critical0·Important0·Minor0으로 재검토했습니다. ignored manifest는 original30+correction1=current31, accepted final8, same-record screenshot/H1/status/diagram provenance8씩, status OCR exact8, H1 exact OCR4를 DOM·Playwright·original pixels8로 한정 보완한 증거, original32, PB-053 analytics/PBV-02 sticky crop artifact2, PBV-02·PBV-08 모바일 PBVA-004 finding4와 cleanup을 보존합니다. 상태 문서 전용 closeout에서 full/static/build/browser/network를 재실행하지 않았습니다. public59 draft/reviewEvidence0, Build13 draft, audit40/19/0·finding C0/I8/M1, gap20/6·unresolved C1/I5/N0와 PBSG-019·020·026 not-confirmed·PBCA-011 open, visual1/8/1/3과 Task20 경계는 그대로입니다. 이에 `M3-CAP`을 `done`2.0/2.0으로 닫고 기존64.5점에 미인정1.0점을 더해 현재 인정 점수를65.5점으로 갱신합니다. 전체 M1·다른 M3·M3 전체·Task19 이후·Task20/21·M4·M5·소유자 승인·`ready`·push·deploy·publication·public URL 검증은 미완료입니다.

### Task 19: 용어집·방법론 지도·체크리스트·현재 도구 참고편을 전체 원고와 동기화합니다

**Files:** 아래 다섯 참고 원고, 모든 공개 원고의 용어 사용, `research/source-map.md`, `CONTENT_MAP.md`, 필요한 문맥 파일.

| 체크 | ID·파일 | 독자 질문과 반드시 포함할 판단·실패·검증 | 커밋 메시지 |
|---|---|---|---|
| - [x] | M3-RF-01 `reference/development-glossary.md` | 한국어·영문·약어·정의·관련 용어·오해·관련 장이 일치하고 SDD 두 뜻, PRD/설계/TDD, framework/library/runtime/platform 등을 충돌 없이 구분함 | `docs: synchronize development glossary` |
| - [x] | M3-RF-02 `reference/agent-output-glossary.md` | snapshot, dry-run, fallback, rollback, diff, patch, sandbox, worktree, fixture, smoke test, artifact 등 에이전트 출력 용어를 행동·부작용·확인 질문과 연결함 | `docs: complete agent output glossary` |
| - [x] | M3-RF-03 `reference/methodology-map.md` | PRD·SDD·TDD·SDLC·Agile·CI/CD·context/harness/loop의 범주·선후·중첩·성숙도를 구분하고 하나의 만능 절차로 합치지 않음 | `docs: complete methodology relationship map` |
| - [x] | M3-RF-04 `reference/checklists.md` | 시작·진단·변경·검토·커밋·배포·운영·복구 체크리스트가 실제 성공 증거와 외부 승인 경계를 포함하고 체크 수 자체를 완료로 과장하지 않음 | `docs: complete practical checklists` |
| - [x] | M3-RF-05 `reference/current-tool-mapping.md` | Task 8의 확인일·직접 URL·문서 상태·범위·일반화 금지선이 release candidate 시점에도 유효하고 `not-confirmed`가 숨겨지지 않음 | `docs: finalize current tool reference` |

**Step 1: 용어 충돌과 역링크를 전수 대조합니다.**

- [x] 핵심 장의 첫 정의와 용어집의 정의를 양방향으로 비교합니다.
- [x] 같은 약어의 여러 뜻과 비슷한 용어의 경계를 첫 등장부터 구분합니다.
- [x] 용어집에서 가리키는 관련 장과 관련 장에서 가리키는 참고편 링크가 실제 존재합니다.
- [x] `fallback`, `rollback`, `restore`, `recovery`처럼 혼동하기 쉬운 단어를 서로 바꾸어 쓰지 않습니다.

**Step 2: 현재 도구 페이지의 최신성은 승인된 공식 범위에서 다시 확인합니다.**

- [x] Task 7 이후 제품 문서 상태가 변했는지 공식 URL을 재확인합니다.
- [x] 변경됐다면 source-map·research brief·페이지를 함께 고치고 확인일을 실제 재확인일로 바꿉니다.
- [x] 확인 실패는 `not-confirmed`로 낮추고 공개 핵심 주장에 사용하지 않습니다.

**Package verification:**

```bash
rg -n "Software Design Description|Spec-Driven Development|TDD|framework|library|runtime|platform|snapshot|dry-run|fallback|rollback|fixture|artifact|checked_at|not-confirmed" src/content/docs/reference research/current-tool-mapping-research-brief.md
npm run sync:content-map
ASTRO_TELEMETRY_DISABLED=1 npm run check
```

- [x] Pagefind에서 한국어·영문·약어·오류 문장을 각각 검색해 용어집과 핵심 장의 결과를 확인합니다.
- [x] 참고편 전체를 1440×1000·390×844에서 확인하고 긴 표·코드·URL의 전역 overflow와 console error/warning을 기록합니다.

Expected: 핵심 장과 참고편의 정의 충돌 0개, 깨진 역링크 0개, 현재 도구 주장의 확인 상태 누락 0개이고 M3-REF가 `done`입니다.

2026-08-20 구현·whole-package 검증 체크포인트 — fresh independent package review 대기: M3-RF-01~05는 `fb743b1`·`9f3fcb3`·`3adade8`·`a949503`·`2580e2b`의 다섯 unit commit과 current-tool Fix Round1 `864a189`으로 구현했고 각 unit review는 `PASS` C0/I0/M0입니다. 다섯 참고편·public59·Build13은 모두 `draft`·reviewEvidence0·ready0이고 audit43/16/0·finding C0/I7/M0, gaps22/4·unresolved PBSG-014·019·020·026 C1/I3/N0, visual1/8/1/3입니다. 현재 도구 claim은 Supabase9·Vercel8·Sites6·Codex3·Claude3이며 각 게시 행의 URL·checked_at 또는 honest last-success/fresh-failure·status·scope·do-not-generalize를 확인했고 Vercel8 fresh-check-failed/last-success 2026-08-13, Sites artifact/rollback·Codex plan label·Claude workspace-write/read-only `not-confirmed`를 유지했습니다. `npm run sync:content-map`×2는 no-op이고 fresh full check는 tests65/content59/report-inclusive references194+SVG13/plan100-59-0-0/Astro·Pagefind·build HTML60/literal0으로 통과했습니다. actual Pagefind는 `복구`·`worktree`·`SDD`·`무엇이 실패했거나 실행되지 않았고`를 desktop/mobile에서 검색·target click·back해 final8/8, actual headed Google Chrome151은 five reference routes×1440×1000/390×844×light final10/10·unique10, exact four theme fields·H1/`검토용 초안`·scroll/headings/anchors/overflow/internal-scroll/images/alt/console/pageerror/external failures0, same-record full/H1/status provenance10씩, status/H1 OCR exact10, original30을 통과했습니다. ignored manifest56은 preview/Chrome/Pagefind helper 실패12를 accepted final과 분리하고 Chrome/session/PID/preview/port cleanup을 보존합니다. Fresh independent package review 전 `M3-REF`는 `in_progress`1.0/2.0·score65.5·ready0이며 Task20/21·M4/M5·owner·push·deploy·publication·public URL은 미완료입니다.

2026-08-20 dedicated closeout: Task19 unit commits `fb743b1`·`9f3fcb3`·`3adade8`·`a949503`·`2580e2b`, current-tool Fix1 `864a189`, review-pending context `1455bb2`를 포함한 review package SHA-256 `09cb94e0c9b3dae96671b1824fcd4513b17dd689b346791e20c65fe907f0332a`의 fresh independent review는 `PASS` C0/I0/M0·finding0입니다. ignored manifest56의 failed12·Pagefind success8·Chrome151 final10·same-record provenance10·OCR exact10·original30·cleanup은 그대로 보존하고 상태 문서 전용 closeout에서 full/static/build/browser/network를 재실행하지 않았습니다. public59 draft/reviewEvidence0/ready0, Build13 draft, audit43/16/0·finding C0/I7/M0, gaps22/4·unresolved PBSG-014·019·020·026 C1/I3/N0와 explicit `not-confirmed`, visual1/8/1/3을 유지하며 `M3-REF`를 `done`2.0/2.0, recognized score66.5로 닫습니다. 이로써 현행 원장의 M3 content-package 9행은 모두 `done`이지만 M3 종료 게이트·M5 `ready`·owner acceptance·release를 뜻하지 않습니다. Task20/21·M4/M5·push·deploy·publication·public URL은 미완료이고 Task20은 시작하지 않았으며 dedicated closeout review가 다음 게이트입니다.

### M3 종료 게이트

- [ ] `seed` 공개 문서가 0개입니다.
- [ ] 59개 공개 문서가 역할별 감사에서 내용 완료 판정을 받았습니다.
- [ ] 공개 폐기 사례 잔존이 0개입니다.
- [ ] 중요 source gap이 해결되거나 공개 범위에서 명시적으로 제거·`not-confirmed` 처리됐습니다.
- [ ] 원고별 상태와 `CONTENT_MAP.md`, `PROJECT_MANIFEST.json`의 집계가 일치합니다.
- [ ] 모든 M3 패키지의 전체 `npm run check`와 패키지 브라우저 검증이 통과했습니다.
- [ ] 이 단계의 `draft`·`review`는 M5 전이 상태이며 `ready`·배포·공개를 뜻하지 않습니다.

```bash
if rg -n "^contentStatus: seed$" src/content/docs; then exit 1; fi
if rg -n -i "반도체|semiconductor|wafer|fab|chip dashboard|공개 반도체 데이터" src/content/docs src/assets/diagrams src/assets/diagrams/source; then exit 1; fi
npm run validate:content
npm run validate:references
npm run validate:plan
ASTRO_TELEMETRY_DISABLED=1 npm run check
git status --short
```

Expected: 공개 원고 내용 완성, seed 0, 폐기 사례 0, 전체 자동 검사 성공, worktree clean. 독립 검토와 `ready`는 아직 남아 있습니다.

---

## 10. M4 — 시각 자료와 사이트 경험 완성

### Task 20: 과대 API 도표를 분할하고 시각 감사 finding을 자산별로 교정합니다

**Files:**

- Modify: `docs/project/public-beta-visual-audit.md`
- Modify: `src/assets/diagrams/api-database-auth-flow.svg`
- Modify: `src/assets/diagrams/source/api-database-auth-flow.mmd`
- Create: `src/assets/diagrams/api-database-auth-sequence.svg`
- Create: `src/assets/diagrams/source/api-database-auth-sequence.mmd`
- Modify: `src/content/docs/04-backend-data/api-database-auth.md`
- Potentially modify only when Task 6 marks `reflow`, `split`, `replace`, or `remove`: the remaining files under `src/assets/diagrams/`, matching sources under `src/assets/diagrams/source/`, and their exact consuming manuscripts
- Regenerate when a consumer manuscript changes: `CONTENT_MAP.md`
- Modify: `PROJECT_CONTEXT.md`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`
- Modify: `VERIFICATION_REPORT.md`
- Modify: `docs/superpowers/plans/2026-08-12-public-beta-master-plan.md`

**Step 1: 도구를 선택하기 전에 API 그림을 두 학습 질문으로 나눕니다.**

- [x] 개요 `api-database-auth-flow`는 “참가 요청이 어떤 책임 경계를 순서대로 통과하는가?”에만 답합니다.
- [x] 상세 `api-database-auth-sequence`는 “동시 요청·중복·정원·commit 뒤 응답 유실에서 무엇을 저장하고 어떻게 복구하는가?”에만 답합니다.
- [x] 정상 개요는 7개 이하 노드와 12개 이하 화살표를 목표로 하고, 실패 분기는 본문 표 또는 상세 그림으로 이동합니다.
- [x] 상세 그림은 12개 정보 단위 안에서 A·B 병렬 요청과 트랜잭션 확정 경계·응답 유실 복구를 구분해 추가 분할 조건에 해당하지 않습니다.

**Step 2: `diagram-design`을 기본으로 만들고 Archify는 조건부 설계 보조로만 평가합니다.**

- [x] `diagram-design` 스킬을 읽고 두 그림의 문법·삭제 기준·접근성 계약을 고정했습니다.
- [x] 상세 그림의 자동 라우팅 도입 조건이 성립하지 않아 `archify`는 읽거나 실행하지 않았습니다.
- [x] Archify를 사용하지 않았으므로 doctor/export 사전 검사는 해당 없음으로 기록하고 새 설치·업그레이드를 하지 않았습니다.
- [x] `diagram-design`으로 접근 가능한 정적 SVG를 만들고 Node22 검증을 통과했습니다.
- [x] 최종 게시 정본은 접근 가능한 정적 SVG이며 대응 Mermaid 원본의 의미를 유지했습니다.

**Step 3: SVG·원고·원본의 의미와 접근성을 동기화합니다.**

- [x] 모든 게시 SVG에 고유 `<title>`, `<desc>`, `role="img"`, `aria-labelledby`를 두었습니다.
- [x] 색만으로 정상·거절·실패를 구분하지 않고 레이블·실선/점선·기호를 함께 사용했습니다.
- [x] marker path의 fill이 참조 선의 색과 라이트·다크 테마에서 함께 바뀌는지 확인했습니다.
- [x] 원고의 대체 텍스트가 그림 없이도 책임 순서와 핵심 실패를 설명하도록 맞췄습니다.
- [x] 그림 앞의 읽을 질문과 뒤의 증명·비증명 범위를 자산별로 확인했습니다.

**Step 4: Task 6 감사의 나머지 자산을 한 개씩 처리합니다.**

각 `reflow`, `split`, `replace`, `remove`, `add` 행은 독립 커밋으로 처리합니다. 우선순위는 다음과 같습니다.

1. `analytics-dashboard-architecture.svg`의 760×1200 모바일 레이블·밀도
2. `operations-recovery-loop.svg`와 `agent-feedback-loop.svg`의 760×1040 세로 길이
3. `meeting-webapp-architecture.svg`, `api-database-auth-flow.svg` 등 1200px 폭 자산의 실제 글자 크기
4. `learning-map`, `full-stack-flow`, `deploy-flow`, `git-flow`, `software-lifecycle`, `prd-sdd-tdd`, `context-harness-loop`, Task 10의 `architecture-decision-layers`
5. M3에서 새로 등록한 `add` 후보

- [x] `keep` 판정 자산은 크기만 보고 다시 만들지 않았습니다.
- [x] remove 판정은 없었고 모든 자산의 유지·분할·교정 근거를 감사 표에 기록했습니다.
- [x] 게시 자산과 source 원본의 문구·단계·화살표 의미가 다른 네 자산은 같은 작업에서 맞췄습니다.

**Step 5: 자산 단위 자동·픽셀 검증을 수행합니다.**

```bash
npm run sync:content-map
npm run validate:references
ASTRO_TELEMETRY_DISABLED=1 npm run check
git diff --check
```

각 소비 페이지에서 다음을 확인합니다.

- [x] 1440×1000, 1024×768, 390×844
- [x] 라이트·다크
- [x] 핵심 레이블이 기본 확대에서 읽힘
- [x] 잘림·겹침·전역 overflow 0
- [x] 선·화살표 머리·점선·실선·박스 경계 대비
- [x] SVG `<title>`·`<desc>`와 Markdown 대체 텍스트 존재
- [x] console error/warning 0

Expected: API 개요와 상세가 서로 다른 질문에 답하고, Task 6의 시각 finding마다 변경 또는 유지 근거와 실제 픽셀 증거가 있습니다.

**Step 6: API 분할 커밋과 나머지 자산별 커밋을 만듭니다.**

```bash
git add src/assets/diagrams/api-database-auth-flow.svg src/assets/diagrams/source/api-database-auth-flow.mmd src/assets/diagrams/api-database-auth-sequence.svg src/assets/diagrams/source/api-database-auth-sequence.mmd src/content/docs/04-backend-data/api-database-auth.md CONTENT_MAP.md docs/project/public-beta-visual-audit.md PROJECT_CONTEXT.md ROADMAP.md CHANGELOG.md VERIFICATION_REPORT.md docs/superpowers/plans/2026-08-12-public-beta-master-plan.md
git diff --cached --check
git commit -m "docs: split API learning diagrams"
```

나머지 기존 자산의 커밋 메시지는 감사 행에 정확히 고정합니다. 우선 후보는 `docs: refine analytics dashboard architecture diagram`, `docs: refine operations recovery loop diagram`, `docs: refine agent feedback loop diagram`, `docs: refine meeting webapp architecture diagram`, `docs: refine learning map diagram`, `docs: refine full stack flow diagram`, `docs: refine deploy flow diagram`, `docs: refine Git flow diagram`, `docs: refine software lifecycle diagram`, `docs: refine PRD SDD TDD diagram`, `docs: refine context harness loop diagram`, `docs: refine architecture decision layers diagram`입니다. M3에서 새 `add` 후보가 생기면 구현 전에 감사 표의 `commit_message` 열에 실제 파일 stem을 사용한 완전한 메시지를 기록합니다.

2026-08-30 dedicated closeout: PBV-03 분할·Fix Round1과 후속11개 자산은 자산별 구현·최소 자동 검사·실제 headed Chrome 검증·별도 Codex `PASS` C0/I0/M0·로컬 커밋을 마쳤습니다. 후속 자산의 최종 Chrome 증거는 PBV-02 12상태·PBV-06 18상태·나머지9개 각6상태로 총84상태이며, 전체 Node22 게이트는 테스트115/115·공개59·참조178+SVG14·계획100/59/중복0/누락0·빌드 HTML60/SVG14/Pagefind60·built-output 리터럴 Markdown0·tracked210 안전 finding0·diff check 통과입니다. 개별 검토 시점의 고정 입력515개는 모두 일치했고 closeout 후보 감사 문서 갱신 뒤에는 이 공유 경로만11개 단위에서 기대 해시와 달랐으며 나머지504개는 일치했습니다. 합동 closeout 최초 `NEEDS CHANGES` C0/I1/M0의 입력 계보 I01은 문구 교정 뒤 같은 리뷰어가 `RESOLVED`했고 Fix Round1을 `PASS` C0/I0/M0으로 판정했습니다. PBVA-001~005는 모두 해소됐고 M4-01·M4-02는 `done`, 현재 인정 점수는71.0점입니다. 상태는 `implementation verified / Claude review pending`이며 Task21·M4-03~05·M5·`ready`·owner·RC·release·push·deploy·publication·public URL은 미완료입니다.

2026-08-30 `QA-BASE-001` 체크포인트: Step4의 하위 경로 a1에서 원고 내부 링크4개가 `/handbook/` 밖으로 이탈한 실패를 재현해 상대 링크로 교정하고, Step5의 built-output 검증기에 page path 기준 base 이탈 회귀 방어를 추가했습니다. RED9개 중3실패→현행 focused16/16, exact root와 `/handbook/` 전체 check의 테스트115/115·공개59·참조160+SVG14·계획100/59/0/0·HTML60·Pagefind60·built-output 오류0, 공개 안전 tracked/scanned223·finding0, diff-check가 모두 exit0입니다. a2의 링크4036·favicon60·CSS157·SVG17·script275·오류0 뒤 관련 source/runtime 입력이 바뀌지 않아 브라우저를 반복하지 않았고 같은 리뷰어가 exact 구현을 `PASS` C0/I0/M0으로 판정했습니다. 첫 temp symlink build/release 실패는 후보 결함과 분리해 보존합니다. 이 좁은 단위만 `implementation verified / Claude review pending`이며 표·키보드·Task21 전체·M4-03~05·M5·ready·owner·RC·원격·배포·공개는 남습니다.

2026-08-30 `QA-TABLE-001` 체크포인트: Step5의 실제 390px 표 레이블 낱글자 줄바꿈 실패를 50rem 이하 본문 셀 min-width8rem 한 규칙으로 교정했습니다. 현행 CSS·세 원고와 일치하는 Step2 실제 Chrome 세 경로×2폭×2테마12/12, PNG24·raw13 무결성, HTTP/theme/전역 overflow/browser event/failure0, 모바일 내부 이동26/154/507px 끝 도달·데스크톱0을 확인했습니다. exact index fresh 정적115/115·공개59·참조160+SVG14·계획100/59/0/0, 공개 안전223/finding0, diff-check는 exit0이고 같은 리뷰어는 `PASS` C0/I0/M0입니다. 입력 불변으로 full build와 브라우저를 반복하지 않았습니다. 이 좁은 단위만 `implementation verified / Claude review pending`이며 네이티브 키보드 표 스크롤·키보드·Task21 전체·M4-03~05·M5·ready·owner·RC·원격·배포·공개는 남습니다.

2026-08-30 Step1 참조 검사 범위 교정 체크포인트: 비공개 `.superpowers` 조사 원문이 공개 fragment 검사에 섞인 과거106/107·exit1·build 미실행을 보존하고 제외 집합 한 항목과 실제 CLI 회귀 한 개로 교정했습니다. exact2 focused2/2·정적116/116·공개59·참조160+SVG14·계획100/59/0/0·공개 안전223/finding0·diff-check가 exit0이고 독립 검토는 `PASS` C0/I0/M0입니다. `.superpowers/**` tracked Markdown0, `docs/superpowers/**` tracked14는 계속 검사되며 runtime·원고·CSS·자산 불변으로 build/Chrome은 반복하지 않았습니다. 이 단위만 `implementation verified / Claude review pending`이며 Task21 전체·키보드·M4-03~05·Claude/M5·ready·owner·RC·원격·배포·공개는 남습니다.


2026-09-05 dedicated closeout: Task21 누적 구현·증거 커밋 `16ca9e6`·`bbc7dc8`·`059bc02`·`11e1436`·`94267b1`·`f9b2cb0`·`9fba98b`·`1ea9e53`·`b07de5c`·`39ce436`의 전체 패키지를 검토했습니다. 수정 후 공개59경로의150페이지 최종 상태·68시각 조합, 검색24상태·소비 문맥 링크6·사이드바17목적지×2폭·404복구2폭, 표12상태, 하위 base path, 데스크톱 실제 OS 키보드 전체 경로와 모바일의 상관된 Tab 도달·OS native 선택 구간을 확인했습니다. 모바일 포인터 없는 단일 OS end-to-end는 `not-confirmed`로 보존합니다. fresh focused23/23·canonical verifier errors0·static129/129·content59·references183+SVG14·plan100/59/0/0·build60/Pagefind60·release233/finding0과 independent `PASS` C0/I0/M0을 근거로 Task21과 M4-03~05를 `done`, M4 전체를 완료하고 score80.5로 갱신합니다. M5 Claude blocked/subscription_unverified·호출0, public59 draft/ready0, owner·M6-03·RC·remote·push·deploy·public URL·tag·release는 미완료입니다.

### Task 21: 검색·내비게이션·404·접근성·반응형 사이트 경험을 전체 로컬 빌드에서 검증합니다

**Files:**

- Create: `docs/project/reviews/public-beta-1/site-qa.md`
- Create: `docs/project/reviews/public-beta-1/site-qa-browser-manifest.json`
- Potentially modify after a reproduced failure: `astro.config.mjs`
- Potentially modify after a reproduced failure: `src/styles/custom.css`
- Potentially modify after a reproduced failure: `src/components/PageTitle.astro`
- Create only if the built default 404 lacks a clear home or search recovery path: `src/pages/404.astro`
- Potentially modify after a reproduced validation gap: `scripts/validate-built-output.mjs`
- Potentially modify after a reproduced validation gap: `tests/built-output-validation.test.mjs`
- Modify: `PROJECT_CONTEXT.md`
- Modify: `PROJECT_MANIFEST.json`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`
- Modify: `VERIFICATION_REPORT.md`
- Modify: `docs/superpowers/plans/2026-08-12-public-beta-master-plan.md`

**Step 1: 정적·빌드 기준선을 새로 만듭니다.**

```bash
ASTRO_TELEMETRY_DISABLED=1 npm run check
find dist -type f -name '*.html' | sort
find dist/pagefind -type f | sort
```

Expected: 테스트·59개 공개 콘텐츠·참조·모든 SVG·60개 이상 HTML·Pagefind 산출물이 오류 없이 생성됩니다. 실제 숫자는 보고서와 manifest에 기록하고 과거 숫자를 복제하지 않습니다.

**Step 2: 59개 모든 공개 페이지를 두 대표 폭에서 DOM 검사합니다.**

- [x] 로컬 preview를 `127.0.0.1:4327`에서 실행하고 기존 Playwright CLI를 사용합니다.
- [x] 콘텐츠 지도에서 공개 경로 59개를 읽어 1440×1000과 390×844에서 각각 방문합니다.
- [x] 각 페이지에서 main H1 정확히 1개, 상태 배지 1개, `main` 존재, 전역 가로 overflow 0, 깨진 이미지 0, console error/warning 0을 확인합니다.
- [x] 표·코드 블록의 제한된 내부 스크롤은 페이지 전역 overflow와 분리해 기록합니다.
- [x] 시각 자료 소비 페이지는 라이트·다크를 모두 확인하고 나머지 페이지는 대표 섹션별로 테마를 교차 배정합니다.
- [x] 브라우저의 모든 시도는 `site-qa-browser-manifest.json`에 버리지 않고 기록합니다. 각 레코드는 stable ID, route, occurrence ID, attempt 번호·상태, viewport, `requested_theme`, `observed_prefers_color_scheme`, `observed_html_data_theme`, `observed_effective_color_scheme`, H1·배지 수, `main`·대상 자산·비어 있지 않은 alt 존재, document/body overflow px, 깨진 이미지 수, console error/warning, page error, screenshot 경로 또는 부재 사유, 최종 판정을 가집니다. `observed_prefers_color_scheme`은 `matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'`로 정규화한 enum이고, `observed_html_data_theme`은 `html[data-theme]`에서 관찰한 `light` 또는 `dark` 값입니다. `observed_effective_color_scheme`은 root의 computed `color-scheme` raw 값이 정확히 `light` 또는 `dark`일 때만 해당 enum으로 인정하며 `normal`·복합값·그 밖의 값은 불일치 실패로 보존합니다. 과거 ignored Task 10 JSONL의 짧은 `html_data_theme`·`effective_color_scheme` 키는 역사 증거로만 보존하고, Task 21의 새 수집기와 최종 튜플에는 가져오거나 정확한 `observed_*` 필드의 별칭으로 인정하지 않습니다.
- [x] Task 6 기준 15개 다이어그램 소비 occurrence의 `1440×1000 light/dark`·`390×844 light/dark` 60개 최종 조합을 최소 집합으로 다시 실행하고, Task 20 뒤 감사 정본의 최종 occurrence 수와 정확히 맞춥니다. 최종 조합은 `requested_theme`가 `light` 또는 `dark`이고 `observed_prefers_color_scheme`, `observed_html_data_theme`, `observed_effective_color_scheme`이 모두 존재하며 `requested_theme`와 정확히 같을 때만 인정합니다. 누락·불일치는 실패 attempt로 manifest에 보존하고 최종 조합에서 제외하며, dark marker 픽셀 증거는 네 필드가 모두 `dark`인 조합에서만 유효합니다. 모든 시도와 최종 조합 수·고유성·필수 필드·screenshot 경로 존재를 기계 검사해 요약 수치만 남기거나 실패 시도를 조용히 제외하지 않습니다.

**Step 3: 키보드·검색·내비게이션을 실제로 사용합니다.**

- [x] Tab만으로 skip link, 상단 내비게이션, 검색, 테마 전환, 본문 링크에 도달하고 초점 표시가 보이는지 확인합니다.
- [x] 검색어 `백엔드`, `인증`, `fallback`, `dry-run`, `Supabase`, `주가`, `모임 참가`, `Spec-Driven Development`에서 관련 핵심 장·참고편이 나오는지 확인합니다.
- [x] 검색 결과를 키보드로 열고 뒤로 이동했을 때 검색·스크롤 맥락이 최소한 사용 가능한지 확인합니다.
- [x] 사이드바의 12개 부, 시작하기, 참고편, 두 캡스톤, 현재 도구 매핑이 실제 URL과 일치합니다.
- [x] Task 8의 세 소비 문맥 링크와 `Supabase`, `Vercel`, `데이터베이스`, `authorization`, `배포` 검색을 다시 실행하고, 실패 시도를 버리지 않은 상태별 manifest와 실행 log에 출발·도착 경로, 검색어별 실제 결과 제목·경로, console·pageerror, preview·browser·port·session 종료 상태를 기록합니다.

**Step 4: 404와 직접 URL 복구를 확인합니다.**

- [x] 존재하지 않는 `/definitely-missing-public-beta-page/`가 404 상태와 복구 가능한 홈 또는 검색 경로를 제공합니다.
- [x] 기본 404가 이를 충족하면 새 페이지를 만들지 않습니다.
- [x] 기본 404에 명확한 복구 경로가 없을 때만 `src/pages/404.astro`를 추가하고 홈·학습 경로·검색 안내를 제공합니다.
- [x] 하위 경로 base를 가정한 빌드에서도 내부 링크·favicon·CSS·SVG 자산 경로를 확인합니다.

**Step 5: 재현된 결함만 수정하고 회귀 방어를 추가합니다.**

- [x] CSS 수정은 실패한 뷰포트·요소를 직접 해결하는 최소 규칙만 추가합니다.
- [x] 빌드 출력에서 반복 검출 가능한 결함이면 `validate-built-output.mjs`의 실패 테스트를 먼저 추가합니다.
- [x] 전체 사이트 레이아웃이나 정보 구조를 이 단계에서 새로 설계하지 않습니다.

```bash
node --test tests/built-output-validation.test.mjs
ASTRO_TELEMETRY_DISABLED=1 npm run check
git diff --check
```

**Step 6: QA 기록과 수정 파일만 커밋합니다.**

```bash
git add docs/project/reviews/public-beta-1/site-qa.md docs/project/reviews/public-beta-1/site-qa-browser-manifest.json astro.config.mjs src/styles/custom.css src/components/PageTitle.astro scripts/validate-built-output.mjs tests/built-output-validation.test.mjs PROJECT_CONTEXT.md PROJECT_MANIFEST.json ROADMAP.md CHANGELOG.md VERIFICATION_REPORT.md docs/superpowers/plans/2026-08-12-public-beta-master-plan.md
test ! -e src/pages/404.astro || git add src/pages/404.astro
git diff --cached --check
git commit -m "test: verify public beta site experience"
```

실제로 존재하거나 변경된 파일만 staged 목록에 포함합니다. Preview·브라우저 세션·포트는 커밋 전 종료하고 잔존 프로세스 0을 확인합니다.

### M4 종료 게이트

- [x] Task 6의 시각 감사 행이 모두 `verified` 또는 근거 있는 `keep`으로 닫혔습니다.
- [x] 모든 게시 SVG가 접근성·라이트·다크·데스크톱·모바일 검증을 통과했습니다.
- [x] Task 6 시각 baseline을 다시 포함한 `site-qa-browser-manifest.json`의 모든 시도와 최종 조합이 추적되고, 최종 조합의 필수 DOM·console 필드와 screenshot 경로가 완전합니다. 각 최종 조합의 `requested_theme`, `observed_prefers_color_scheme`, `observed_html_data_theme`, `observed_effective_color_scheme`이 모두 존재하고 같은 `light` 또는 `dark` 값이며 실패한 최종 상태가 0개입니다. PBVA-003 dark marker 종료 증거는 네 필드가 모두 `dark`인 최종 조합의 픽셀 증거만 사용합니다.
- [x] 59개 공개 페이지 × 2 대표 폭 DOM 검증에서 전역 overflow·깨진 이미지·console 오류와 경고가 0개입니다.
- [x] 검색·학습 경로·사이드바·404 복구가 로컬 빌드에서 동작합니다.
- [x] 새 의존성이나 공개 다이어그램 런타임을 추가하지 않았습니다.

---

## 11. M5 — 독립 검토와 모든 공개 문서 `ready` 승격

### Task 22: Codex 두 겹 독립 검토 행렬을 실행하고 모든 Critical·Important finding을 재판정·해결합니다

**Files:**

- Create/validate: `docs/project/reviews/public-beta-1/codex-review-contract.md` (2026-09-05 두 겹 Codex 계약)
- Create: `docs/project/reviews/public-beta-1/review-matrix.md`
- Preserve: `docs/project/reviews/public-beta-1/claude-attempt-log.md` (역사 `waived_by_owner`, 모델 호출0, 유효 결과 없음)
- Create for each row: the exact `*-codex-review.md` and `*-adjudication.md` files listed below
- Create only when a semantic Critical·Important fix requires another independent pass: matching `*-codex-rereview.md`
- Modify as accepted findings require: exact target manuscript, directly coupled source-map/glossary/diagram files, `CONTENT_MAP.md`
- Modify: `PROJECT_CONTEXT.md`
- Modify: `PROJECT_MANIFEST.json`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`
- Modify: `VERIFICATION_REPORT.md`
- Modify: `docs/superpowers/plans/2026-08-12-public-beta-master-plan.md`

#### 고정 리뷰 단위

아래 R01~R25는 공개 콘텐츠 59개를 정확히 한 번씩 배정합니다. R26은 R01~R25 전체를 확장해 같은 공개 문서59개와 행별 결과·재판정·재검토, 감사·source gap·시각 감사·`CONTENT_MAP.md`를 통합 검토하며 문서 분모에 중복 계산하지 않습니다.

`docs/project/reviews/public-beta-1/`은 여러 날에 걸친 공개 베타 1 검토 캠페인의 안정적인 경로입니다. 파일 이름의 고정 ID와 별도로 각 기록 본문에 실제 시작·종료 날짜와 시간, 실행 기준 SHA를 남기므로 계획 작성일을 실제 실행일처럼 복제하지 않습니다.

| 체크 | ID·slug | 입력 공개 원고 | 방식 | 결과 파일 | 재판정 파일 |
|---|---|---|---|---|---|
| - [x] | R01 `software-system` | `01-mental-models/software-is-a-system.md` | 개별 심층 | `public-beta-1/r01-software-system-codex-review.md` | `public-beta-1/r01-software-system-adjudication.md` |
| - [x] | R02 `client-server` | `03-full-stack/client-server-full-stack.md` | 개별 심층 | `public-beta-1/r02-client-server-codex-review.md` | `public-beta-1/r02-client-server-adjudication.md` |
| - [x] | R03 `http` | `03-full-stack/http-request-response.md` | 개별 심층 | `public-beta-1/r03-http-codex-review.md` | `public-beta-1/r03-http-adjudication.md` |
| - [x] | R04 `api-data-auth` | `04-backend-data/api-database-auth.md` | 개별 심층 | `public-beta-1/r04-api-data-auth-codex-review.md` | `public-beta-1/r04-api-data-auth-adjudication.md` |
| - [x] | R05 `browser-dom` | `05-frontend/browser-dom-rendering.md` | 개별 심층 | `public-beta-1/r05-browser-dom-codex-review.md` | `public-beta-1/r05-browser-dom-adjudication.md` |
| - [x] | R06 `prd-sdd-tdd` | `06-requirements-design/prd-sdd-tdd.md` | 개별 심층 | `public-beta-1/r06-prd-sdd-tdd-codex-review.md` | `public-beta-1/r06-prd-sdd-tdd-adjudication.md` |
| - [x] | R07 `testing` | `08-quality/testing-strategy.md` | 개별 심층 | `public-beta-1/r07-testing-codex-review.md` | `public-beta-1/r07-testing-adjudication.md` |
| - [x] | R08 `git-github` | `09-git-github/git-and-github.md` | 개별 심층 | `public-beta-1/r08-git-github-codex-review.md` | `public-beta-1/r08-git-github-adjudication.md` |
| - [x] | R09 `build-deploy` | `10-deployment-operations/build-deploy-domain-dns.md` | 개별 심층 | `public-beta-1/r09-build-deploy-codex-review.md` | `public-beta-1/r09-build-deploy-adjudication.md` |
| - [x] | R10 `operations` | `10-deployment-operations/logs-monitoring-backup.md` | 개별 심층 | `public-beta-1/r10-operations-codex-review.md` | `public-beta-1/r10-operations-adjudication.md` |
| - [x] | R11 `coding-agents` | `11-ai-native/working-with-coding-agents.md` | 개별 심층 | `public-beta-1/r11-coding-agents-codex-review.md` | `public-beta-1/r11-coding-agents-adjudication.md` |
| - [x] | R12 `meeting-capstone` | `12-case-studies/first-full-stack-project.md` | 개별 심층 | `public-beta-1/r12-meeting-capstone-codex-review.md` | `public-beta-1/r12-meeting-capstone-adjudication.md` |
| - [x] | R13 `stock-capstone` | `12-case-studies/analytics-dashboard-case-study.md` | 개별 심층 | `public-beta-1/r13-stock-capstone-codex-review.md` | `public-beta-1/r13-stock-capstone-adjudication.md` |
| - [x] | R14 `mental-support` | `01-mental-models/abstraction-and-tradeoffs.md`, `developer-thinking.md` | 소묶음 | `public-beta-1/r14-mental-support-codex-review.md` | `public-beta-1/r14-mental-support-adjudication.md` |
| - [x] | R15 `work-environment` | `02-work-environment/dependencies-package-managers-environments.md`, `files-folders-paths.md`, `terminal-processes-ports.md` | 소묶음 | `public-beta-1/r15-work-environment-codex-review.md` | `public-beta-1/r15-work-environment-adjudication.md` |
| - [x] | R16 `data-support` | `03-full-stack/frontend-backend-boundary.md`, `04-backend-data/data-model-schema-migration.md`, `state-cache-queue.md` | 소묶음 | `public-beta-1/r16-data-support-codex-review.md` | `public-beta-1/r16-data-support-adjudication.md` |
| - [x] | R17 `frontend-support` | `05-frontend/accessibility-responsive-design.md`, `ui-state-and-ux.md` | 소묶음 | `public-beta-1/r17-frontend-support-codex-review.md` | `public-beta-1/r17-frontend-support-adjudication.md` |
| - [x] | R18 `design-support` | `06-requirements-design/adr-and-tradeoffs.md`, `architecture-and-frameworks.md` | 소묶음 | `public-beta-1/r18-design-support-codex-review.md` | `public-beta-1/r18-design-support-adjudication.md` |
| - [x] | R19 `workflow-support` | `07-workflow-methods/code-review-ci-cd.md`, `incremental-delivery.md`, `software-development-lifecycle.md` | 소묶음 | `public-beta-1/r19-workflow-support-codex-review.md` | `public-beta-1/r19-workflow-support-adjudication.md` |
| - [x] | R20 `quality-support` | `08-quality/debugging-observability.md`, `performance-security.md` | 소묶음 | `public-beta-1/r20-quality-support-codex-review.md` | `public-beta-1/r20-quality-support-adjudication.md` |
| - [x] | R21 `git-support` | `09-git-github/branch-commit-pull-request.md`, `undo-merge-conflict-release.md` | 소묶음 | `public-beta-1/r21-git-support-codex-review.md` | `public-beta-1/r21-git-support-adjudication.md` |
| - [x] | R22 `deploy-config` | `10-deployment-operations/environment-variables-config.md` | 개별 안전 | `public-beta-1/r22-deploy-config-codex-review.md` | `public-beta-1/r22-deploy-config-adjudication.md` |
| - [x] | R23 `ai-support` | `11-ai-native/agent-review-and-verification.md`, `context-spec-harness-loop.md`, `permissions-sandbox-worktrees.md` | 소묶음 | `public-beta-1/r23-ai-support-codex-review.md` | `public-beta-1/r23-ai-support-adjudication.md` |
| - [x] | R24 `navigation` | 홈, 시작하기 4개, 12개 섹션 index, `reference/index.md` | 내비게이션 묶음 | `public-beta-1/r24-navigation-codex-review.md` | `public-beta-1/r24-navigation-adjudication.md` |
| - [x] | R25 `reference` | `reference/development-glossary.md`, `agent-output-glossary.md`, `methodology-map.md`, `checklists.md`, `current-tool-mapping.md` | 참고편 묶음 | `public-beta-1/r25-reference-codex-review.md` | `public-beta-1/r25-reference-adjudication.md` |
| - [x] | R26 `integration` | R01~R25 전체 공개59개, R01~R25 결과·재판정·재검토, 콘텐츠·source gap·시각 감사, `CONTENT_MAP.md` | 통합 | `public-beta-1/r26-integration-codex-review.md` | `public-beta-1/r26-integration-adjudication.md` |

R24의 정확한 경로는 이 계획 `M3-NAV` 18개 전체입니다. 모든 결과·재판정 파일은 `docs/project/reviews/` 아래에 둡니다.

**Step 1: 공통 계약과 행렬을 고정합니다.**

- [x] 역사 전용 `opus5-review-contract.md`의 실질 기준을 [Codex 검토 계약](../../project/reviews/public-beta-1/codex-review-contract.md)의 C01~C12와 권위 조항 대응표, 9항목 루브릭/치명 항목, 심각도·6절 출력·권한·입력/증거 유효성 기준으로 보존·이식했음을 확인합니다.
- [x] 요청 템플릿으로 각 ID의 검토 종류(작업 단위 또는 M5)·기준 commit·입력별/결합 SHA-256·status·block_reason·마지막 사전 확인/실행·재개 조건·결과/재판정/재검토·남은 finding을 기록합니다. 구현 상태·필수 검토 상태·공개 가능 여부는 별도 필드입니다.
- [x] R01~R25는 공통 계약 C01~C12의 정확한59경로와 대조해 중복0·누락0을 유지하고, R26은 R01~R25 전체를 확장해 같은 공개59개를 정확히 한 번 통합하도록 고정합니다. `*-codex-review.md`와 `*-codex-rereview.md` 경로를 사용하며 실제 모델과 reasoning effort는 실행 메타데이터로 판정합니다.
- [x] `claude-attempt-log.md`는 시도 템플릿으로 정상/실패/미호출을 구분하고 요청 모델/1M/high·실제 인자·결과의 실제 설정·구독 전용 입증/차단·CLI·시각·종료 코드/실패 단계·reset 안내·입력 해시를 기록합니다. 비밀/계정 식별정보/세션ID/정확한 비용은 기록하지 않습니다.
- [x] 과거 입력 불변·당시 계약상 유효한 완료 검토는 모델 변경만으로 반복하지 않습니다. 과거 `max` 등 M5 계약에 맞지 않는 기록과 작업 단위 검토를 새 M5 행의 증거로 바꾸지 않습니다.
- [x] 계약/행렬 단위도 필수 자동 검증과 작성자와 분리된 Codex 작업 검토에서 미해결 Critical·Important 0건을 확인하고 다른 미완료 변경과 안전하게 분리한 뒤에만 관련 파일을 `implementation verified / M5 Codex review pending` 체크포인트로 선별 커밋합니다. 과거 Claude 검토가 막힌 기록은 이 조건을 충족한 로컬 단위의 커밋을 금지하지 않지만, Codex R01~R26·M5·`ready`·소유자·M7 게이트는 완료하지 않습니다.

**Step 2: 행별 입력·독립성·Codex 실행 프로필을 고정합니다.**

이 2026-09-05 개정 뒤의 실행은 Claude CLI·인증·구독·preflight를 호출하거나 재개 조건으로 쓰지 않습니다. 과거 Step2의 Claude 사전 확인은 역사 기록을 설명할 뿐 미래 절차가 아닙니다. 각 R01~R25는 controller·작성자·이전 대화 이력과 분리된 fresh Codex reviewer, R26은 R01~R25 reviewer들과 분리된 fresh Codex reviewer에게 배정합니다. R01~R25는 `gpt-6-astra`/`high`, R26은 `gpt-6-astra`/`xhigh`를 계획 기본값으로 요청하고, 실제 모델·reasoning effort를 결과에 기록합니다. 지정 프로필이 없으면 자동 fallback하지 않고 해당 행을 pending으로 둡니다.

#### 역사 전용: 2026-09-05 Claude 인증 preflight

아래 Claude CLI·구독·`auth` 문단과 체크 상자는 과거 사전 확인의 사실과 모델 호출0을 보존하기 위한 기록입니다. 현재 M5 blocker, resume condition, 실제 실행 순서로 사용하지 않으며 실행하거나 완료할 작업 목록이 아닙니다.

셸 alias·TeamClaude 프록시가 아니라 실제 바이너리 `/opt/homebrew/bin/claude`를 사용합니다. 다음은 버전/옵션/파일 상태 확인일 뿐 과금·1M 포함 사용을 입증하지 않습니다.

```bash
ls -l /opt/homebrew/bin/claude
/opt/homebrew/bin/claude --version
/opt/homebrew/bin/claude --help
git status --short
```

- [ ] API/auth helper/환경/게이트웨이/Extra usage의 별도 과금 가능성을 비밀값 없이 확인하고 실제 구독 포함 사용 경로와 정확한 Opus4.8/1M/high 포함 사용을 입증합니다. 구독 로그인만으로 충분하지 않습니다.
- [ ] 설정 존재·비민감 상태만 확인하고 인증정보 내용·원시 인증 출력·계정 이메일/조직ID/토큰을 열람·출력·저장하지 않습니다. 인증정보 삭제·전역 설정 변경·`--bare`·시험 호출은 하지 않습니다.
- [x] 구독 전용 입증 또는 요청 설정이 불가능하면 모델 호출 없이 해당 행의 `status: blocked`, `block_reason: subscription_unverified`·`subscription_ineligible`·`auth`·`model_unavailable`·`cli` 등 실제 원인을 기록합니다. 2026-09-05 인증 사전 확인의 현재 직접 원인은 `auth`이며, 로그인 복구 뒤에도 `subscription_unverified` 후속 경계가 남습니다. 다른 모델/effort/컨텍스트/계정/제공자·크레딧/추가 결제 경로로 전환하거나 유료 선택지를 묻지 않습니다.
- [x] 미호출 종료 코드는 `not-run`, 실제 설정 미확인은 `not-confirmed`로 쓰고 순서가 오지 않은 M5 행을 시도했다고 쓰지 않습니다.

2026-09-05 Task22 인증 preflight 체크포인트: 선행 커밋 `2c0215ee01f31f4bbf0dcfb1f2ffe81ab87d7830`에서 Claude Code는 로컬 `2.1.252`(실행 파일 mtime `2026-09-02T01:07:02+0900`, SHA-256 `b661c6a094fcc32656bf7c0071c5b45bf900b34d4f0a1ab3d78fd59aeba2c2c7`)로 확인됐습니다. 새 도움말에는 Extra usage 또는 정확한 모델·1M 구독 자격의 비민감 입증 옵션이 없었고, 검사한 API·토큰·대체 제공자·프록시 환경 변수 이름은 없었지만 모든 과금 경로의 부재를 증명하지는 않습니다. 필터된 샌드박스·승인 호스트 인증 확인은 모두 `loggedIn=false`·`apiProvider=firstParty`·구독 유형 필드 없음이었으며 호스트 명령은 `pipefail` exit1이었습니다. 현재 직접 차단은 `auth`이고, 푸디님이 동일 구독 계정 로그인을 직접 복구한 뒤 정확한 Opus4.8·1M·`high` 구독 포함 사용과 구독 외 과금 비소비를 입증해야 `subscription_unverified` 후속 경계를 해소할 수 있습니다. 모델 호출·시험 호출·R01~R26 실행은0건이고 입력 `not-fixed`, 호출/결과 `not-run`, 설정 `not-confirmed`, finding `not-assessed`, release false를 유지합니다. 이 체크포인트는 M5-02~04, `ready`, 소유자, RC 또는 공개 상태를 승격하지 않습니다.

**차단·429 중단과 재개:**

- [ ] `429`·session/usage limit은 `blocked`·`block_reason: usage_limit`으로 기록하고 같은 실행 구간의 자동 재시도·가용성 폴링을 하지 않습니다.
- [ ] 실패 단계·마지막 사전 확인/실행·입력 파일/전후 해시·제공된 reset 시각·다음 재개 조건을 기록합니다. 원시 출력에 민감정보가 섞였을 수 있으면 저장하지 않습니다. 부분 출력은 폐기하고 정상 검토0건으로 계산하며 결과/재판정/`independent:`/승격에 사용하지 않습니다.
- [ ] 검토 입력 고정 중 동시 변경은 금지하지만 이후 비의존 수정이 필요하면 영향 행·전후 해시·기존 증거 무효화/재검토를 기록하고 진행합니다. 영향 없는 유효 증거는 유지합니다.
- [ ] 차단된 검토 결과에 의존하지 않는 작성·수정·근거 정리·자동 검사·로컬 시각 검증을 계속합니다. 미통과 M5·소유자·ready·M6/M7을 전제로 완료하지 않습니다.
- [ ] 실제 reset 안내·동일 구독 인증 복구·포함 사용 가능 상태 변경 등 재개 조건을 확인한 뒤 구독/모델/권한/입력 조건을 다시 입증하고 막힌 행 하나만 한 번 실행합니다. 같은 원인이면 메타데이터만 남기고 비의존 작업으로 돌아갑니다.
- [ ] 한도 우회 계정/요금제 변경·자동 로그인·예약/자동화는 하지 않습니다. 독립 작업을 소진하면 체크포인트와 필수 잔여 검토/승인을 보고하며 일을 늘리거나 완료로 가장하지 않습니다.
- [ ] 실패 기록도 필수 자동 검증·작성자와 분리된 Codex 작업 검토·안전 분리 전에는 stage/커밋하지 않습니다. 이 조건을 통과한 evidence-only 단위만 `implementation verified / Claude review pending` 체크포인트로 따로 커밋하며 원고/미완성 PBV-02/부분 결과를 섞지 않습니다. 실패 기록은 Claude 검토 점수나 `reviewEvidence`를 만들지 않습니다.

**Step 3: 안정된 원고의 전체 입력을 fresh Codex reviewer가 읽기 전용으로 검토합니다.**

각 행에는 공통 계약/권위 대응표, 대상 본문 전체(frontmatter·코드/프롬프트·표·alt 포함), 필요한 실제 출처 원문/source-map/source-gap·인접 장/용어집·SVG/원본/실제 렌더·미해결 finding을 제공합니다. 전체 명세/계획 등 긴 문서를 매번 반복하지 않고 쟁점의 원조항만 추가합니다. Codex 요약/자체 PASS가 본문이나 필요한 근거를 대신하지 않으며 열거하지 않은 파일은 임의 탐색하지 않습니다. R26도 해당 대상 본문 전체와 실제 R01~R25 결과/재판정을 대조합니다.

각 reviewer에게 새 `public-beta-codex-review-request-template.md`, 행렬의 고정 입력·개별/결합 SHA-256, C01~C12를 제공합니다. reviewer는 실제 입력 전체를 Read-only로 완독하고, 완독 여부·부족 입력·실제 모델/effort·결과·finding을 응답으로만 반환합니다. controller가 입력 완전성·해시·권한·응답 형식을 확인한 뒤에만 `*-codex-review.md` 정본 경로에 저장합니다. 입력·해시·완독·모델/effort가 하나라도 미확인이면 `BLOCKED`이며 PASS가 아닙니다.

- [ ] R01~R25 reviewer가 controller·작성자·이전 대화 이력과 분리됐는지, R26 reviewer가 R01~R25 reviewer들과 분리됐는지 요청서와 결과에 기록합니다.
- [ ] 결과가 실제 모델/effort, 입력 완독/불변, C01~C12, Critical/Important/Minor와 위치·근거·최소 수정·재확인 기준을 포함할 때만 정상 독립 검토로 인정합니다.
- [ ] 정상 결과 파일을 원고 수정 전에 해당 행ID의 고정 결과 경로·`commit_message`로 분리 커밋합니다. 모든 커밋은 필요한 검증/검토와 staged diff 확인을 전제로 합니다.

**Step 4: controller가 모든 finding을 근거에 대조해 재판정합니다.**

- [ ] 수용/부분 수용/기각·정본 근거·반영 위치/비반영 이유·추가 검증을100% 기록합니다. reviewer가 직접 읽지 않은 외부 사실은 제안으로만 취급하고 실제 공식 원문/source-map과 대조합니다.
- [ ] Critical/Important는 수정·근거 있는 기각·필요 재검토 없이 닫지 않습니다. Minor는 남기는 이유와 후속 위치를 기록합니다.
- [ ] 수용 변경은 대상 원고와 직접 관련된 용어/출처/그림만 좁게 수정하고 영향 해시를 갱신합니다. 의미 수정 뒤 `npm run sync:content-map`, `npm run check`, 영향 있는 브라우저 검증을 수행합니다.

**Step 5: 의미 있는 Critical/Important 수정은 같은 계약으로 재검토합니다.**

- [ ] 새 입력 해시·원 finding·영향 범위를 기록하고 변경 대상 본문 전체/필요 근거를 포함한 좁은 재검토를 요청합니다. 같은 reviewer가 actual Codex 모델/effort·Read-only 조건을 기록합니다.
- [ ] 결과 stem의 `-codex-review.md`를 `-codex-rereview.md`로 연결하고 원 기록을 덮어쓰지 않습니다. 동일 reviewer pass·입력 불변·Critical/Important0·남은 Minor를 재판정/행렬에 기록합니다.

**Step 6: 행별 완료와 R26 통합을 확인합니다.**

각 R01~R25 행은 현재 입력에 적용되는 fresh Codex 결과, 전후 해시 일치, controller 재판정100%, 미해결 Critical/Important0, 수용 변경의 자동/브라우저 검증 통과, 현재 `review`와 실제 `request:`, 결과/재판정/필요 재검토/구현 커밋SHA가 모두 있을 때만 `done`입니다. 작업 단위 검토를 M5로 대체하지 않습니다.

R26은 R01~R25 전체가 배정한 공개59개와 모든 R01~R25 결과·재판정·재검토, 콘텐츠 감사·source gap·시각 감사·`CONTENT_MAP.md`를 실제로 읽고 Build Track13 순서·핵심 정의 충돌·두 사례 역할·용어집·현재 도구 최신성·모든 인덱스/링크·증거 과장을 교차 확인합니다. Critical/Important는 같은 방식으로 해결·재검토합니다.

```bash
npm run sync:content-map
ASTRO_TELEMETRY_DISABLED=1 npm run check
npm run validate:plan
rg -n "blocked|Critical [1-9]|Important [1-9]|미판정" docs/project/reviews/public-beta-1/review-matrix.md
git diff --check
```

Expected: R01~R26 모두 `done`, blocked0·미판정0·미해결 Critical/Important0, 공개59개 `review`, seed/draft/ready0입니다. 소유자 승인 전이므로 이 상태도 공개 준비 완료가 아닙니다.

### Task 23: 고정된 원고 묶음을 소유자에게 승인받고 59개 공개 문서를 `ready`로 승격합니다

**Files:**

- Create: `docs/project/reviews/public-beta-1/owner-review-package.md`
- Create only after an actual user approval: `docs/project/reviews/public-beta-1/owner-approval.md`
- Modify: all 59 files under `src/content/docs/`
- Regenerate: `CONTENT_MAP.md`
- Modify: `PROJECT_CONTEXT.md`
- Modify: `PROJECT_MANIFEST.json`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`
- Modify: `VERIFICATION_REPORT.md`
- Modify: `docs/project/reviews/public-beta-1/site-qa.md`
- Modify: `docs/superpowers/plans/2026-08-12-public-beta-master-plan.md`

**Step 1: 소유자 승인 묶음을 고정합니다.**

- [x] clean worktree의 content release candidate SHA를 기록합니다.
- [x] 공개 원고 59개와 SHA-256, R01~R26 결과·재판정·재검토, 콘텐츠·출처·시각 감사, 자동·브라우저 검증, 남은 Minor·known limitation을 요약합니다.
- [x] 본문 변경 없이 `reviewEvidence`와 `contentStatus`만 기계적으로 승격할 예상 diff 계약을 포함합니다.
- [x] 승인 뒤 본문·출처·다이어그램 의미가 바뀌면 승인이 무효이고 새 묶음 승인이 필요함을 명시합니다.

```bash
git status --short
git rev-parse HEAD
find src/content/docs -type f -name '*.md' -print0 | sort -z | xargs -0 shasum -a 256
ASTRO_TELEMETRY_DISABLED=1 npm run check
```

**Step 2: 푸디님께 한 번의 묶음 승인을 요청합니다.**

승인 요청에는 다음을 분리해서 보여 줍니다.

- 원고 release candidate SHA
- 공개 문서 59개가 모두 내용 완료·Codex 검토·재판정·자동·브라우저·출처·시각 계약을 통과했다는 증거
- 남은 Minor와 공개 후 참고 사항
- 승인하면 허용되는 범위: frontmatter `ready`·증거 경로 추가와 생성 파일·문맥 갱신
- 승인하지 않아도 유지되는 상태: `review`, 로컬 전용, push·배포 없음

이 승인 단계는 의미 있는 사용자 결정이므로 자동으로 넘기지 않습니다.

**Step 3: 실제 승인 메시지를 로컬 증거로 기록합니다.**

- [x] 승인 날짜·기준 SHA·59개 경로·예상 기계 diff·승인 범위를 기록합니다.
- [x] 사용자의 비공개 대화 전문이나 불필요한 개인정보는 복제하지 않고 승인 취지를 짧게 기록합니다.
- [x] 승인 전에는 `owner-approval.md`를 만들어 통과한 것처럼 쓰지 않습니다.

**Step 4: 네 개의 기계적 승격 배치로 frontmatter를 갱신합니다.**

각 `ready` 문서는 다음 필수 경로를 실제 파일과 검증 절에 맞춰 가집니다. 아래는 R01 원고의 완전한 예이며 다른 원고는 R01 경로를 R02~R25 중 해당 문서에 배정된 정확한 결과·재판정 경로로 바꿉니다.

```yaml
contentStatus: ready
reviewEvidence:
  - "independent: docs/project/reviews/public-beta-1/r01-software-system-codex-review.md"
  - "adjudication: docs/project/reviews/public-beta-1/r01-software-system-adjudication.md"
  - "conformance: docs/project/public-beta-content-audit.md"
  - "sources: research/source-map.md"
  - "automated: docs/project/reviews/public-beta-1/site-qa.md#automated"
  - "browser: docs/project/reviews/public-beta-1/site-qa.md#browser"
  - "owner: docs/project/reviews/public-beta-1/owner-approval.md"
```

다이어그램 참조가 있는 문서에는 다음도 추가합니다.

```yaml
  - "visual: docs/project/public-beta-visual-audit.md"
```

승격 배치는 다음과 같습니다.

1. 13장 Build Track과 두 캡스톤
2. 나머지 핵심·보조 장
3. 홈·시작하기·모든 섹션 인덱스
4. 용어집·방법론·체크리스트·현재 도구 참고편

- [x] 각 배치에서 원고 본문 바이트를 대조했습니다. 원고 변경은 frontmatter에 한정하며, 지도·문맥과 소유자가 별도로 승인한 검사기·회귀 테스트만 함께 변경했습니다.
- [x] 각 배치마다 `npm run sync:content-map`, `npm run check:static`, cached diff 검토, 독립 로컬 커밋을 수행합니다.
- [x] `ready` 증거 경로가 존재하고 R01~R25 중 선택한 ID가 실제 대상 문서의 리뷰 행과 일치합니다.

**Step 5: 모든 `ready` 페이지를 다시 렌더링 검증합니다.**

```bash
npm run sync:content-map
ASTRO_TELEMETRY_DISABLED=1 npm run check
if rg -n "^contentStatus: (seed|draft|review)$" src/content/docs; then exit 1; fi
rg -l "^contentStatus: ready$" src/content/docs | wc -l
npm run validate:plan
```

Expected: ready 59개, seed·draft·review 0개, 모든 필수 증거 경로 존재, 전체 자동 검사 성공.

- [x] 59개 페이지 × 1440×1000·390×844에서 `출판 준비` 배지, H1 1개, 깨진 이미지, 전역 overflow, console error/warning을 다시 확인합니다.
- [x] R24의 고정 QA 파일은 그대로 보존하고, 새 `ready-promotion-qa.md`의 최종 빌드 절에 결과를 기록했습니다.
- [x] 소유자 승인 기준 SHA와 본문 SHA가 일치하고 승격으로 바뀐 것은 frontmatter·생성 지도·문맥뿐임을 증명합니다.

**Step 6: M5 종료 커밋과 원장을 확정합니다.**

```bash
git add src/content/docs CONTENT_MAP.md docs/project/reviews/public-beta-1/owner-review-package.md docs/project/reviews/public-beta-1/owner-approval.md docs/project/reviews/public-beta-1/site-qa.md PROJECT_CONTEXT.md PROJECT_MANIFEST.json ROADMAP.md CHANGELOG.md VERIFICATION_REPORT.md docs/superpowers/plans/2026-08-12-public-beta-master-plan.md
git diff --cached --check
git commit -m "docs: promote public beta content to ready"
```

실제 구현에서는 네 배치별 커밋을 먼저 만들고 마지막 명령은 남은 문맥 파일만 포함합니다. 같은 파일을 중복 커밋하거나 원고 본문 수정을 승격 커밋에 숨기지 않습니다.

### M5 종료 게이트

- [x] R01~R25 fresh Codex reviewer와 분리된 R26 reviewer의 유효한 정상 검토와 입력 불변이 확인됐습니다. 실제 모델/effort가 기록됐고 자동 fallback은 없습니다.
- [x] 모든 finding이 controller 재판정됐고 해결되지 않은 Critical·Important가 0개입니다.
- [x] 필요한 재검토가 같은 모델·effort·Read-only 계약으로 통과했습니다.
- [x] 푸디님의 실제 묶음 승인이 기준 SHA와 59개 범위를 가리킵니다.
- [x] 공개 문서 59개가 모두 `ready`이고 필수 증거·시각 조건을 통과합니다.
- [x] 이 완료는 여전히 로컬 상태이며 공개 저장소·Pages 배포 성공을 뜻하지 않습니다.

---

## 12. M6 — 공개 저장소와 릴리스 준비

### Task 24: 이중 라이선스·버전·기여·이슈·릴리스 문서를 공개 베타에 맞춥니다

**Files:**

- Create: `LICENSE-CONTENT`
- Create: `LICENSE-CODE`
- Create: `THIRD_PARTY_NOTICES.md`
- Modify: `LICENSE_POLICY.md`
- Modify: `README.md`
- Modify: `CONTRIBUTING.md`
- Modify: `SECURITY.md`
- Modify: `.github/pull_request_template.md`
- Create: `.github/ISSUE_TEMPLATE/content-error.yml`
- Create: `.github/ISSUE_TEMPLATE/technical-accuracy.yml`
- Create: `.github/ISSUE_TEMPLATE/accessibility.yml`
- Create: `.github/ISSUE_TEMPLATE/config.yml`
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `PROJECT_MANIFEST.json`
- Modify: `CHANGELOG.md`
- Modify: `PROJECT_CONTEXT.md`
- Modify: `ROADMAP.md`
- Modify: `research/source-map.md`
- Modify: `docs/superpowers/plans/2026-08-12-public-beta-master-plan.md`

**Approved read-only scope upon this plan's explicit approval:** Creative Commons 공식 CC BY 4.0 legal code·deed, Open Source Initiative 또는 MIT 공식 원문, GitHub 공식 라이선스·Issue form·private vulnerability reporting·Pages 문서, Astro/Starlight 공식 배포 문서. 법률 자문으로 표현하지 않습니다.

**Step 1: 공식 원문과 적용 범위를 직접 확인합니다.**

- [x] `CC BY 4.0`의 공식 legal code·deed URL, 이름, 버전, 출처 표시 조건을 확인합니다.
- [x] MIT License 공식 원문의 필수 문구를 확인합니다.
- [x] 제3자 인용·상표·외부 이미지·폰트·데이터는 프로젝트 라이선스로 재허가되지 않는 경계를 기록합니다.
- [x] 확인일·공식 URL·적용 범위·법률 자문 아님을 `LICENSE_POLICY.md`와 source-map에 기록합니다.

**Step 2: 공식 라이선스 원문과 경로별 적용표를 작성합니다.**

- [x] `LICENSE-CONTENT`에는 변형하지 않은 CC BY 4.0 공식 legal code를 둡니다.
- [x] `LICENSE-CODE`에는 `Copyright (c) 2026 Vibe Dev Handbook contributors`를 사용한 MIT 원문을 둡니다.
- [x] `src/content/docs/**`, 직접 제작한 교육용 `src/assets/diagrams/**`, 사람용 교육 템플릿과 설명 문서는 CC BY 4.0으로 분류합니다.
- [x] `src/components/**`, `src/styles/**`, `astro.config.mjs`, `src/content.config.ts`, `.github/workflows/**`, `scripts/**`, `tests/**`는 MIT로 분류합니다.
- [x] 혼합 파일·프로젝트 운영 문서·실행 코드 중심 템플릿은 `LICENSE_POLICY.md`의 정확한 경로 표에서 하나씩 분류합니다.
- [x] `THIRD_PARTY_NOTICES.md`는 직접 포함한 제3자 저작물·상표·의존성의 원 권리를 재허가하지 않는다고 설명하고 실제 포함 자산만 나열합니다.

**Step 3: 공개 베타 버전과 저장소 안내를 통일합니다.**

- [x] `package.json`·`package-lock.json`·`PROJECT_MANIFEST.json` 버전을 `0.1.0-beta.1`로 맞춥니다.
- [x] README 상태를 “대표 장 초안”에서 “공개 베타 1 release candidate”로 바꾸되 실제 URL 배포 전에는 공개 완료라고 쓰지 않습니다.
- [x] README에 대상 독자, 13장 Build Track, 검색 이용법, 로컬 검증, 이중 라이선스, 알려진 한계, 보안 제보 경계를 연결합니다.
- [x] CONTRIBUTING의 생명주기·검증·source-map·문단 하드랩·작업 단위·외부 승인 규칙을 현행 계약에 맞춥니다.
- [x] SECURITY는 실제 비밀·개인정보 금지, 교육 자료 한계, 공개 후 private vulnerability reporting 사용법과 공개 Issue에 비밀을 올리지 않는 경계를 설명합니다.

**Step 4: 기여와 오류 제보 양식을 만듭니다.**

- [x] `content-error.yml`: 페이지 URL·문제 문장·독자 영향·제안·출처를 받되 개인정보를 금지합니다.
- [x] `technical-accuracy.yml`: 주장·예외·위험·공식 근거·영향 범위를 받습니다.
- [x] `accessibility.yml`: 페이지·뷰포트·보조 기술·키보드 단계·실제/기대 결과를 받습니다.
- [x] `config.yml`: blank issue를 허용할지 명시하고 보안 문제는 private vulnerability reporting으로 안내합니다.
- [x] PR template은 콘텐츠 규칙, source-map, 자동·브라우저 검증, 상태·권한 경계를 확인합니다.

**Step 5: 문법·버전·링크·전체 빌드를 검증합니다.**

```bash
node --input-type=module -e "import fs from 'node:fs'; const p=JSON.parse(fs.readFileSync('package.json')); const m=JSON.parse(fs.readFileSync('PROJECT_MANIFEST.json')); if(p.version!=='0.1.0-beta.1'||m.project.version!=='0.1.0-beta.1') process.exit(1); console.log('version aligned')"
rg -n "CC BY 4.0|Creative Commons Attribution 4.0 International|MIT|0.1.0-beta.1|공개 베타 1" LICENSE-CONTENT LICENSE-CODE LICENSE_POLICY.md README.md PROJECT_MANIFEST.json CHANGELOG.md
npm run check:static
ASTRO_TELEMETRY_DISABLED=1 npm run check
git diff --check
```

Expected: 두 공식 라이선스 원문, 경로 적용표, 버전 4곳 이상 일치, Issue form YAML·내부 링크·전체 빌드 오류 0개.

**Step 6: 공개 준비 문서만 커밋합니다.**

```bash
git add LICENSE-CONTENT LICENSE-CODE THIRD_PARTY_NOTICES.md LICENSE_POLICY.md README.md CONTRIBUTING.md SECURITY.md .github/pull_request_template.md .github/ISSUE_TEMPLATE package.json package-lock.json PROJECT_MANIFEST.json CHANGELOG.md PROJECT_CONTEXT.md ROADMAP.md research/source-map.md docs/superpowers/plans/2026-08-12-public-beta-master-plan.md
git diff --cached --check
git commit -m "docs: prepare public beta licensing and contribution"
```

2026-08-30 Fix Round 1 체크포인트: 최초 Task24 Codex 검토 `NEEDS CHANGES` C0/I2/M0의 I-01은 Task25 고지 운반 `f7ec077`과 안전 감사 `a2f1e22`를 각각 별도 C0/I0/M0 체크포인트로 선행해 링크와 validator 의존성을 닫았습니다. I-02는 위 Task24 파일과 package/lock/manifest/source-map/CHANGELOG/문맥/로드맵/계획의 Task24 hunk만 고정한 exact index로 분리했고, 같은 검토자가 Fix Round 1을 `PASS` C0/I0/M0으로 판정해 I-01·I-02를 모두 해소했습니다. 상태는 `implementation verified / Claude review pending`이며 RIGHTS-01~08·실제 GitHub Issue/PVR·M5·ready·owner·RC·release·push·deploy·publication·public URL은 완료로 올리지 않습니다.

2026-08-30 Task24 dedicated closeout: exact HEAD `0d281da`·tree `f3d7ac51`에서 package contract8/8, Issue YAML4·폼3·고유ID20·필수안전6·로컬링크34·버전4·라이선스해시2·실패0, 정적122/122·공개59·참조163+SVG14·계획100/59/0/0, 공개 안전227/227·finding0을 확인했습니다. CC BY4.0/MIT 바이트·경로 정책·고지 운반·README/기여/보안/PR/Issue 양식과 현행 권리 미판정0을 독립 전체 패키지 검토가 `PASS` C0/I0/M0·로컬 close 가능으로 판정했습니다. 생산 입력 불변으로 build·브라우저를 반복하지 않았습니다. Task24와 M6-02는 `done`1.5/1.5, 원장 합계는74.5점입니다. 실제 GitHub Issue Forms/PVR 활성화·UI·원격 CI·M6 전체·M6-03·Task26 전체·M5·ready·최종 owner release 승인·canonical RC·push·deploy·publication·public URL은 완료로 올리지 않습니다.

### Task 25: 현재 파일·공개 스냅샷·Git 이력의 비밀·개인정보·권리 위험을 감사합니다

**Files:**

- Create: `scripts/validate-public-release.mjs`
- Create: `tests/public-release-validation.test.mjs`
- Create: `docs/project/reviews/public-beta-1/release-safety-audit.md`
- Modify only when a finding is reproduced: exact tracked file containing the finding
- Modify: `package.json`
- Modify: `PROJECT_CONTEXT.md`
- Modify: `PROJECT_MANIFEST.json`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`
- Modify: `VERIFICATION_REPORT.md`
- Modify: `docs/superpowers/plans/2026-08-12-public-beta-master-plan.md`

**Step 1: 고신뢰 비밀·개인 경로·검토 세션 메타데이터의 실패 테스트를 작성합니다.**

- [x] 실제처럼 보이는 OpenAI·Anthropic·GitHub 토큰, private key header, 비밀번호·연결 문자열을 탐지합니다.
- [x] `/Users/실제사용자명/`, `/home/실제사용자명/`처럼 개인 계정명을 드러내는 로컬 절대 경로를 공개 tracked 파일에서 탐지합니다. 계획에 명시된 범용 임시 경로 `/private/tmp/` 자체는 개인정보 finding으로 보지 않습니다.
- [x] Claude 세션 ID·정확한 비용·계정 이메일·조직 ID처럼 공개에 불필요한 실행 식별정보를 탐지합니다.
- [x] `fake-token`, `example.com`, `demo-user`, 명백히 가상임을 표시한 교육 예시는 허용합니다.
- [x] 오류 출력은 비밀 값 자체를 인쇄하지 않고 파일·규칙 ID·행 번호만 보여 줍니다.

```bash
node --test tests/public-release-validation.test.mjs
```

Expected before implementation: 모듈이 없어서 실패합니다.

**Step 2: 현재 tracked snapshot을 안전하게 검사하는 CLI를 구현합니다.**

```js
export function scanPublicReleaseText(source, filePath) {}
export async function collectTrackedFiles(projectRoot) {}
export async function validatePublicRelease(projectRoot) {}
```

- [x] `git ls-files -z`로 tracked 파일만 검사하고 `.git`, worktree, node_modules, dist, 브라우저 캐시를 읽지 않습니다.
- [x] binary 파일은 건너뛰고 파일 이름만 보고합니다.
- [x] CLI는 오류 수와 규칙별 건수만 출력하며 값은 마스킹합니다.
- [x] `validate:release` 스크립트를 추가하고 `check:static`에는 아직 넣지 않습니다. 공개 전 게이트와 CI에는 Task 26에서 연결합니다.

**Step 3: 현재 tracked 파일과 역사 patch의 존재 여부를 분리해 감사합니다.**

```bash
npm run validate:release
git log --all --format='%H %an <%ae>'
git log -p --all -- . | rg --count-matches '/Users/|/private/tmp/|세션 ID:|총 비용 표시: USD|sk-ant-|ghp_|-----BEGIN .* PRIVATE KEY-----'
git ls-files | sort
```

- [x] 첫 명령은 현재 공개 스냅샷의 값 없는 finding을 보고합니다.
- [x] `git log` 저자 이메일은 공개해도 되는 noreply 주소인지 별도 판정하되 보고서에 전체 이메일을 복제하지 않습니다.
- [x] 역사 patch 검색은 매치 수만 기록합니다. 1개 이상이면 비밀 값을 터미널·보고서에 출력하지 않고 이력 전체를 공개하지 않는 이유로 사용합니다.
- [x] 현재 알려진 과거 Claude session ID와 정확한 USD 비용은 공개 필요성이 없으므로 현재 tracked 역사 검토 문서에서 제거하거나 범주형 실행 성공 정보로 축약합니다.
- [x] 과거 검토의 모델·effort·종료 코드·입력 해시·finding 본문은 추적성에 필요한 범위로 유지합니다.

**Step 4: 저작권·인용·상표·데이터 권리를 수동 대조합니다.**

- [x] 외부 문장을 장문 복제하거나 출처의 표·도표를 재제작한 파일이 없는지 확인합니다.
- [x] 모든 학습 SVG가 직접 제작 또는 명시적으로 허용된 자산인지 확인합니다.
- [x] Supabase·Vercel·GitHub·Claude·Codex 같은 상표는 제품 식별을 위한 서술이며 프로젝트가 제휴·보증을 주장하지 않는다고 기록합니다.
- [x] 주가 사례는 EDU-FIXTURE이고 실제 원천 채택·재배포 권리를 주장하지 않습니다.
- [x] package dependencies의 라이선스는 프로젝트 이중 라이선스로 재허가하지 않습니다.

**Step 5: 공개 이력 전략을 고정합니다.**

현재 개발 이력에는 폐기 사례와 공개에 불필요한 session ID·비용 메타데이터가 존재하므로 공개 원격에는 전체 개발 이력을 push하지 않습니다. 대신 M6 최종 RC tree와 동일한 **새 root snapshot commit**을 M7에서 만들어 공개 `main`으로 push합니다.

- [x] `codex/public-beta-completion`의 전체 개발 이력은 로컬에 보존합니다.
- [x] 기존 commit을 rewrite·reset·삭제하지 않습니다.
- [x] 공개 snapshot은 현재 tracked 파일만 포함하며 `.git`, worktree, ignored SDD, node_modules, dist, 브라우저 캐시를 포함하지 않습니다.
- [ ] root commit의 공개 author name/email은 M7 승인 때 GitHub noreply 주소로 확인합니다.
- [ ] snapshot tree SHA가 M6 canonical RC tree SHA와 정확히 같은지 검증합니다.

**Step 6: 전체 검증·안전 감사 커밋을 만듭니다.**

```bash
node --test tests/public-release-validation.test.mjs
npm run validate:release
npm run check:static
ASTRO_TELEMETRY_DISABLED=1 npm run check
git diff --check
```

Expected: 현재 tracked snapshot의 고신뢰 비밀·개인 절대 경로·불필요 session ID/비용 finding 0개, 권리 미판정 0개. 개발 이력에는 과거 메타데이터가 있음을 숨기지 않고 clean root snapshot 전략으로 차단합니다.

```bash
git add scripts/validate-public-release.mjs tests/public-release-validation.test.mjs docs/project/reviews/public-beta-1/release-safety-audit.md package.json PROJECT_CONTEXT.md PROJECT_MANIFEST.json ROADMAP.md CHANGELOG.md VERIFICATION_REPORT.md docs/superpowers/plans/2026-08-12-public-beta-master-plan.md
git diff --name-only -- docs/project/reviews
git add -u -- docs/project/reviews
git diff --cached --check
git commit -m "security: audit public release snapshot"
```

두 번째 명령이 보여 준 파일이 실제 안전 finding으로 좁게 수정한 역사 검토 파일과 새 감사 파일뿐인지 확인한 뒤에만 `git add -u`를 실행합니다. 다른 작업의 변경이 한 건이라도 보이면 stage하지 않고 분리합니다.

2026-08-30 공개 안전 검사기 Fix Round 1 체크포인트: Task25 전체 권리 closeout과 분리해 검사기·38개 경계 테스트·`validate:release`와 실제 finding이 있던 과거 검토7파일의 session ID9개·정확 비용9개 마스킹만 exact 단위로 고정합니다. 최초 stage 전 기준 Node22 focused37/37·tracked/text220·binary0·finding0 뒤 최초 독립 검토 `NEEDS CHANGES` C0/I2/M1의 파일명 일부 민감값 노출·금지 경로 tracked 파일 silent 제외·수치 혼동을 회귀 실패35/38로 재현했습니다. 모든 지원 민감 패턴을 파일명에서도 가리고 금지 경로 tracked 파일은 내용을 읽지 않은 채 차단했으며 exact `HEAD + index`에서 focused38/38·공개 안전 tracked/scanned222·forbidden0·binary0·finding0·정적110/110·content59·references159+SVG14·plan100/59/0/0을 모두 exit0으로 확인했습니다. 같은 리뷰어가 I01·I02를 `RESOLVED`, Fix Round1을 `PASS` C0/I0·safe-to-commit Yes로 판정해 `implementation verified / Claude review pending` 로컬 체크포인트로 커밋합니다. RIGHTS-01~08·Task25 전체·M6·Claude·ready·owner·RC·release·push·deploy·publication·public URL은 완료로 올리지 않습니다.

2026-08-30 Task25 dedicated closeout: 소유자 권리 확인과 기존 구성요소 유지 결정을 반영한 exact HEAD에서 closeout evidence10/10, focused public-release38/38, 정적122/122·content59·references163+SVG14·plan100/59/0/0, 공개 안전 tracked/scanned227·forbidden0·binary0·finding0, build HTML60·SVG14·Pagefind60, 공개 고지 원본/빌드 SHA-256 일치를 모두 exit0으로 확인했습니다. 최초 closeout harness의 역사적 `open` 문구 오판 1건과 symlink node_modules를 두 번 해석한 격리 build 실패 1건은 각각 table-only 판정과 동일 의존성의 물리 복사 재실행으로 원인을 분리해 해소했고, 기존 독립 리뷰어의 별도 exact HEAD 재검증도 `PASS` C0/I0/M0이었습니다. Task25와 M6-01은 `done`2.0/2.0, 원장 합계는73.0점입니다. M7에서만 확인할 공개 root author와 canonical RC tree 동일성 2개 체크는 아직 미실행이며 M6-02~03·M5·ready·owner 최종 공개 승인·RC·release·push·deploy·publication·public URL은 완료로 올리지 않습니다.

### Task 26: 공개 snapshot의 기준 tree를 고정하고 로컬 릴리스 후보 전체 게이트를 통과합니다

**Files:**

- Create: `docs/project/reviews/public-beta-1/release-candidate.md`
- Modify: `.github/workflows/ci.yml`
- Modify: `.github/workflows/deploy.yml`
- Modify: `astro.config.mjs` only if final repository/base-path contract requires a verified correction
- Modify: `PROJECT_CONTEXT.md`
- Modify: `PROJECT_MANIFEST.json`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`
- Modify: `VERIFICATION_REPORT.md`
- Modify: `docs/superpowers/plans/2026-08-12-public-beta-master-plan.md`

**Step 1: GitHub Actions가 공개 게이트를 실제로 실행하게 합니다.**

- [x] CI와 deploy가 `npm ci` 뒤 `npm run check`와 `npm run validate:release`를 실행합니다.
- [x] Actions 버전·Node 버전·Pages artifact/deploy action은 GitHub 공식 문서에서 현재 지원 상태를 확인합니다.
- [x] deploy는 `main` push와 수동 실행만 허용하고 permissions는 `contents: read`, `pages: write`, `id-token: write` 최소 범위를 유지합니다.
- [x] repository site와 project site의 `PUBLIC_SITE_URL`·`PUBLIC_BASE_PATH` 분기가 현재 repo 이름에서 동작합니다.

역사 전용 2026-08-30 Step1 Fix Round 1 체크포인트: CI와 deploy의 `npm ci`→`npm run check`→`npm run validate:release`, artifact 업로드 전 release 성공, main push/수동 deploy, user-site/project-site fixture를 exact index로 고정했습니다. GitHub 공식 자료를 fresh 확인했고 최초 독립 Codex 검토 `NEEDS CHANGES` C0/I1/M0의 build job Pages/OIDC write 권한 상속을 job별 유효 권한 테스트 RED(exit1)→workflow 기본 `contents: read`·deploy job 전용 세 권한 GREEN(exit0)으로 교정했습니다. exact `HEAD + index`의 focused2+fixture2·정적110/110·content59·references160+SVG14·plan100/59/0/0·공개 안전 tracked/scanned223·finding0·diff-check는 모두 exit0이고 같은 리뷰어가 I-01을 `RESOLVED`, Fix Round1을 `PASS` C0/I0/M0으로 판정했습니다. 당시 상태는 `implementation verified / Claude review pending`이었으며 clean canonical RC·플랫폼 보조 패키지7개 extraneous·Task26 Step2~5·M6/M7·M5·ready·owner·RC·원격·배포·공개가 남아 있었습니다.

**Step 2: clean canonical RC에서 모든 로컬 게이트를 새로 실행합니다.**

```bash
git status --short
npm ls --depth=0
npm run validate:release
ASTRO_TELEMETRY_DISABLED=1 npm run check
npm run validate:plan
```

Expected: 설치된 의존성이 lockfile의 직접 의존성과 일치하고, 모든 테스트, 콘텐츠 59개 ready 59개, 참조·모든 SVG, HTML 60개 이상, Pagefind, 릴리스 안전 감사, 원장 검증이 exit 0입니다. clean `npm ci` 재설치는 이 로컬 게이트에서 수행하지 않고 M7의 GitHub Actions가 새 runner에서 검증합니다. 로컬 의존성이 없거나 불일치하면 새 설치·네트워크를 자동 허용하지 않고 blocker로 기록합니다.

**Step 3: 하위 경로와 루트 경로 빌드를 모두 검증합니다.**

```bash
PUBLIC_SITE_URL=https://example.github.io PUBLIC_BASE_PATH=/vibe-dev-handbook ASTRO_TELEMETRY_DISABLED=1 npm run check
PUBLIC_SITE_URL=https://example.github.io PUBLIC_BASE_PATH= ASTRO_TELEMETRY_DISABLED=1 npm run check
```

- [x] project-site base path에서 CSS·JS·favicon·SVG·내부 링크·Pagefind가 동작합니다.
- [x] user-site root path에서도 중복 슬래시·잘못된 절대 경로가 없습니다.
- [x] 두 빌드 모두 404·검색·대표 페이지를 1440×1000과 390×844에서 확인합니다.

**Step 4: release candidate tree와 공개하지 않을 이력을 기록합니다.**

```bash
git rev-parse HEAD
git rev-parse 'HEAD^{tree}'
git status --short
git ls-files -z | shasum -a 256
```

- [x] canonical RC commit SHA, tree SHA, tracked 목록 digest, 공개 문서·상태·SVG·source·tests·HTML 수를 기록합니다.
- [x] 공개 snapshot root commit은 M7에서 이 tree SHA를 그대로 사용하고 부모를 갖지 않습니다.
- [x] 개발 이력·다른 worktree·외부 SDD·ignored 파일은 공개 snapshot에 없음을 기록합니다.
- [x] 실제 remote·Pages·URL은 아직 미검증이라고 표시합니다.

**Step 5: M6 마지막 로컬 커밋을 만듭니다.**

```bash
git add .github/workflows/ci.yml .github/workflows/deploy.yml astro.config.mjs docs/project/reviews/public-beta-1/release-candidate.md PROJECT_CONTEXT.md PROJECT_MANIFEST.json ROADMAP.md CHANGELOG.md VERIFICATION_REPORT.md docs/superpowers/plans/2026-08-12-public-beta-master-plan.md
git diff --cached --check
git commit -m "release: verify public beta candidate"
```

커밋 후 새 HEAD·tree SHA에서 `npm run validate:release`, `npm run validate:plan`, 전체 `npm run check`를 한 번 더 실행합니다. 버전 관리 파일이 자기 자신의 최종 SHA를 완전히 포함할 수는 없으므로 검증 기록에는 검사 대상 content SHA와 보고서 commit을 분리하고, 최종 명령 결과와 새 tree SHA는 M7 승인 패킷과 실행 상태에 기록합니다. 보고서의 self-reference만 고치기 위한 무한 수정 커밋을 만들지 않습니다.

### M6 종료 게이트

- [x] CC BY 4.0·MIT 공식 원문과 경로별 적용표가 있습니다.
- [x] 버전은 `0.1.0-beta.1`, 표시명은 공개 베타 1로 일치합니다.
- [x] 현재 tracked snapshot의 비밀·개인정보·로컬 경로·권리 미판정이 0개입니다.
- [x] 전체 개발 이력은 공개하지 않고 검증된 root snapshot tree만 공개한다는 전략이 고정됐습니다.
- [x] README·CONTRIBUTING·SECURITY·PR·Issue forms·workflow가 공개 저장소 사용을 지원합니다.
- [x] 커밋 전 후보의 전체 자동 검사와 두 배포 경로의 브라우저 검증을 확인했습니다. 별도의 필수 사후 게이트로, 최종 clean HEAD의 `validate:release`, `validate:plan`, `npm run check`가 모두 통과하고 해당 HEAD·tree와 결과가 로컬 인계 기록에 있어야 M6 종료를 확정합니다.

---

## 13. M7 — 실제 공개 배포와 URL 검증

M7은 `github:github`이 안내하는 저장소 식별·범위 확인과 `github:yeet`의 publish 안전 원칙을 적용하되, 새 공개 저장소의 첫 root snapshot을 직접 `main`에 올리는 승인된 릴리스 흐름이므로 draft PR을 만들지 않습니다. `gh`가 없거나 인증되지 않았으면 설치·로그인·fallback을 자동 수행하지 않고 멈춥니다.

### Task 27: 별도 승인을 받아 공개 GitHub 저장소·root snapshot·Pages 배포를 만듭니다

2026-11-23 M7 배포 대상은 `foodie-repository/vibe-dev-handbook`입니다. 소유자는 개발 이력이 없는 스냅샷의 `main` push, GitHub Actions를 통한 Pages 배포와 실제 URL 검증을 승인했습니다. 이 기록은 실행 전 승인 범위이며 배포 성공을 뜻하지 않습니다. 태그와 GitHub Release는 포함하지 않습니다.

**External writes requiring one final explicit approval:**

- 공개 GitHub 저장소 생성
- 원격 `origin` 추가
- 검증된 root snapshot을 원격 `main`으로 push
- GitHub Pages를 Actions 방식으로 설정
- Actions·Pages 실행과 저장소 설정 변경

**Step 1: 실행 직전의 정확한 외부 대상을 푸디님께 확인받습니다.**

다음 네 값을 실제 값으로 제시하고 한 번에 승인받습니다.

- GitHub owner
- 공개 repository 이름
- 공개 commit author name
- GitHub noreply author email

승인 요청에는 공개될 tracked 파일 목록 digest, M6 RC commit·tree SHA, 라이선스, 공개 가시성, push 시 CI와 Pages가 자동 실행된다는 부작용, 예상 공개 URL을 포함합니다. custom domain은 범위 밖입니다.

**Step 2: 로컬·GitHub 전제와 clean tree를 다시 확인합니다.**

```bash
gh --version
gh auth status
git status -sb
git remote -v
git rev-parse HEAD
git rev-parse 'HEAD^{tree}'
npm run validate:release
ASTRO_TELEMETRY_DISABLED=1 npm run check
```

Expected: `gh` 설치·인증 정상, remote 없음 또는 승인된 상태, canonical worktree clean, M6에 기록한 RC tree와 현재 tree 일치, 모든 로컬 게이트 통과. 실패하면 외부 쓰기를 시작하지 않습니다.

**Step 3: 승인된 repository와 예정 Pages URL을 release metadata에 반영하고 최종 tree를 다시 검증합니다.**

- [ ] `README.md`에 실제 GitHub repository URL과 예상 Pages URL을 넣되 live 검증 전에는 “배포 대상”이라고 표시합니다.
- [ ] `PROJECT_MANIFEST.json`에 승인된 repository·Pages target을 기록합니다.
- [ ] `PROJECT_CONTEXT.md`, `ROADMAP.md`, `CHANGELOG.md`, 이 원장에는 M7 외부 쓰기 승인과 아직 미검증인 상태를 기록합니다.
- [ ] 실제 URL·owner·repo 이름 외 원고 본문은 바꾸지 않습니다.

```bash
npm run validate:release
ASTRO_TELEMETRY_DISABLED=1 npm run check
git add README.md PROJECT_MANIFEST.json PROJECT_CONTEXT.md ROADMAP.md CHANGELOG.md docs/superpowers/plans/2026-08-12-public-beta-master-plan.md
git diff --cached --check
git commit -m "release: set public beta target"
```

Expected: 대상 metadata commit 뒤 모든 로컬 게이트가 다시 통과하고 새 HEAD·tree SHA가 외부 승인에 포함된 owner·repo·URL과 일치합니다. 이 새 tree가 실제 공개 snapshot 입력이며 M6의 이전 tree는 역사적 후보로만 남습니다.

**Step 4: 공개용 새 root commit을 같은 tree로 만듭니다.**

승인된 실제 값을 작업 전용 변수에 넣고 화면에 마스킹 없이 확인할 수 있는 이름·noreply 이메일만 사용합니다. 토큰은 변수나 로그에 넣지 않습니다.

```bash
test -n "$PUBLIC_AUTHOR_NAME"
test -n "$PUBLIC_AUTHOR_EMAIL"
test -n "$PUBLIC_GH_OWNER"
test -n "$PUBLIC_REPO_NAME"
PUBLIC_BETA_RC_TREE="$(git rev-parse 'HEAD^{tree}')"
PUBLIC_BETA_ROOT_COMMIT="$(printf '%s\n' 'release: public beta 1' | git -c user.name="$PUBLIC_AUTHOR_NAME" -c user.email="$PUBLIC_AUTHOR_EMAIL" commit-tree "$PUBLIC_BETA_RC_TREE")"
git cat-file -p "$PUBLIC_BETA_ROOT_COMMIT"
git branch release/public-beta-1 "$PUBLIC_BETA_ROOT_COMMIT"
git rev-parse 'release/public-beta-1^{tree}'
```

Expected: `release/public-beta-1`은 부모가 없는 root commit이고 tree SHA가 canonical RC tree와 정확히 같습니다. branch가 이미 있으면 덮어쓰지 않고 기존 commit·tree·실패 이력을 판정합니다.

**Step 5: root snapshot을 별도 worktree에서 다시 검증합니다.**

```bash
git worktree add ../public-beta-release release/public-beta-1
git -C ../public-beta-release log --oneline --decorate --max-count=3
git -C ../public-beta-release status --short
test -d node_modules
test ! -e ../public-beta-release/node_modules
ln -s "$PWD/node_modules" ../public-beta-release/node_modules
npm --prefix ../public-beta-release run validate:release
ASTRO_TELEMETRY_DISABLED=1 npm --prefix ../public-beta-release run check
unlink ../public-beta-release/node_modules
git -C ../public-beta-release status --short
```

- [ ] log가 root commit 한 개만 보여 줍니다.
- [ ] `.git`, 개발 worktree, ignored SDD, node_modules, dist, 브라우저 캐시가 tracked snapshot에 없습니다.
- [ ] canonical worktree의 이미 검증된 `node_modules`를 ignored 임시 심볼릭 링크로만 재사용해 `npm run validate:release`와 `npm run check`를 실행하고 링크를 제거합니다. 새 설치나 lockfile 변경은 하지 않습니다.
- [ ] canonical RC와 공개 root의 `git ls-tree -r` digest가 일치합니다.

**Step 6: 승인된 공개 저장소를 만들고 push합니다.**

```bash
gh repo create "$PUBLIC_GH_OWNER/$PUBLIC_REPO_NAME" --public --description "비개발자 바이브 코더를 위한 소프트웨어 개발 온보딩 핸드북"
git remote add origin "https://github.com/$PUBLIC_GH_OWNER/$PUBLIC_REPO_NAME.git"
git push origin release/public-beta-1:main
```

- [ ] `gh repo view "$PUBLIC_GH_OWNER/$PUBLIC_REPO_NAME" --json nameWithOwner,visibility,defaultBranchRef,url`로 target·public·main을 확인합니다.
- [ ] push 대상 SHA가 `PUBLIC_BETA_ROOT_COMMIT`과 일치합니다.
- [ ] 전체 개발 이력 branch를 push하지 않습니다.
- [ ] remote 생성 또는 push가 실패하면 즉시 재시도하지 않고 remote·GitHub 상태·원격 commit 존재 여부를 먼저 조회합니다.

**Step 7: Pages를 Actions 방식으로 활성화하고 CI·deploy를 관찰합니다.**

```bash
gh api -X POST "repos/$PUBLIC_GH_OWNER/$PUBLIC_REPO_NAME/pages" -f build_type=workflow
gh run list --repo "$PUBLIC_GH_OWNER/$PUBLIC_REPO_NAME" --limit 10
```

- [ ] Pages가 이미 활성화됐다면 중복 POST하지 않고 현재 설정을 조회합니다.
- [ ] CI와 Deploy 두 workflow의 run ID·head SHA·결론을 확인합니다.
- [ ] 진행 중이면 `gh run watch`로 해당 run만 관찰합니다.
- [ ] 실패하면 `github:gh-fix-ci` 지침을 읽고 로그를 근거로 원인을 분류하며 자동 재실행하지 않습니다.
- [ ] 수정이 필요하면 canonical branch에서 최소 수정→전체 검증→새 RC tree→새 root snapshot commit을 만들고 별도 push 승인을 다시 받습니다.

Expected: 공개 저장소 `main`이 승인된 root snapshot SHA를 가리키고 CI·Pages deploy가 같은 SHA에서 성공합니다. 이 시점에도 실제 URL 사용성 검증 전이므로 M7 완료가 아닙니다.

### Task 28: 실제 공개 URL을 검증하고 같은 release SHA에 태그·GitHub Release를 만듭니다

**Files on private canonical branch after live verification:**

- Create: `docs/project/reviews/public-beta-1/live-verification.md`
- Modify: `PROJECT_CONTEXT.md`
- Modify: `PROJECT_MANIFEST.json`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`
- Modify: `VERIFICATION_REPORT.md`
- Modify: `docs/superpowers/plans/2026-08-12-public-beta-master-plan.md`

이 로컬 사후 증거 커밋은 v0.1.0-beta.1 공개 snapshot의 tree를 바꾸므로 같은 release에 다시 push하지 않습니다. 공개 release SHA의 CI·Pages·URL 증거는 GitHub Actions와 GitHub Release notes에 남기고, 상세 검증 기록은 다음 개발 이력을 위한 private canonical branch에 보존합니다.

**Step 1: Pages가 보고한 실제 URL과 SHA를 고정합니다.**

```bash
gh api "repos/$PUBLIC_GH_OWNER/$PUBLIC_REPO_NAME/pages"
gh run list --repo "$PUBLIC_GH_OWNER/$PUBLIC_REPO_NAME" --workflow "Deploy to GitHub Pages" --limit 5
git ls-remote origin refs/heads/main
```

- [ ] Pages URL, build type, HTTPS, 최신 deploy head SHA를 기록합니다.
- [ ] 원격 main·CI·deploy SHA가 `PUBLIC_BETA_ROOT_COMMIT`과 일치합니다.
- [ ] URL이 project site인지 user site인지 확인하고 base path 예상과 일치시킵니다.

**Step 2: 실제 공개 사이트의 핵심 흐름을 새 브라우저 세션으로 검증합니다.**

- [ ] 루트·시작하기·학습 경로·13장 Build Track·두 캡스톤·용어집·현재 도구 매핑을 직접 URL로 엽니다.
- [ ] 1440×1000, 1024×768, 390×844에서 H1 1개, `출판 준비` 배지, 전역 overflow 0, 깨진 이미지 0, console error/warning 0을 확인합니다.
- [ ] 라이트·다크에서 모든 SVG의 레이블·선·화살표 머리·대비·잘림을 확인합니다.
- [ ] `백엔드`, `인증`, `fallback`, `dry-run`, `Supabase`, `주가`, `모임 참가`, `Spec-Driven Development` 검색과 결과 클릭을 확인합니다.
- [ ] 존재하지 않는 URL의 404 상태와 홈·검색 복구 경로를 확인합니다.
- [ ] favicon·CSS·JS·Pagefind·SVG 자산 요청이 200이고 base path가 중복되거나 빠지지 않았는지 확인합니다.
- [ ] 키보드만으로 skip link·검색·내비게이션·본문 링크에 접근합니다.

**Step 3: 공개 저장소 경험과 라이선스를 확인합니다.**

- [ ] README의 공개 URL·빠른 시작·상태·이중 라이선스가 실제 repository와 일치합니다.
- [ ] LICENSE-CONTENT, LICENSE-CODE, LICENSE_POLICY, CONTRIBUTING, SECURITY, Issue forms가 공개 저장소에서 보입니다.
- [ ] 새 Issue form 미리보기에서 필수 필드와 보안 경고가 표시됩니다. 실제 Issue를 생성하지 않습니다.
- [ ] repo 공개 commit history가 root snapshot 한 개부터 시작하며 과거 개발 이력·session metadata가 노출되지 않습니다.

**Step 4: 같은 공개 SHA에 태그와 Release를 만듭니다.**

태그·Release도 외부 쓰기이므로 Task 27의 최종 승인에 포함됐는지 확인하고, 포함되지 않았다면 별도 승인받습니다.

- [ ] `/private/tmp/vibe-public-beta-release-notes.md`를 `apply_patch`로 작성하고 공개 URL·release SHA·CI·Pages run URL·ready 수량·검증 범위·라이선스·알려진 한계·피드백 경로만 포함됐는지 직접 읽습니다.
- [ ] 파일에 토큰·계정 이메일·조직 ID·개인 절대 경로·Claude session ID·정확한 비용 메타데이터가 없는지 검사합니다.

```bash
git tag -a v0.1.0-beta.1 "$PUBLIC_BETA_ROOT_COMMIT" -m "Public Beta 1"
git push origin v0.1.0-beta.1
gh release create v0.1.0-beta.1 --repo "$PUBLIC_GH_OWNER/$PUBLIC_REPO_NAME" --title "공개 베타 1" --notes-file /private/tmp/vibe-public-beta-release-notes.md
```

Release notes에는 공개 URL, release SHA, CI·Pages run URL, 59개 ready 문서, 13장 Build Track, 두 캡스톤, 검색·모바일·다크 테마 검증, 이중 라이선스, 알려진 한계와 피드백 경로를 기록합니다. 임시 파일은 저장소에 커밋하지 않고 개인정보·토큰을 포함하지 않습니다.
태그 push 또는 Release 생성이 실패하면 즉시 반복하지 않고 원격 태그와 기존 Release를 먼저 조회해 중복·부분 성공 여부를 판정합니다.

**Step 5: local canonical branch에 사후 검증 기록을 남깁니다.**

- [ ] live URL·시간·release SHA·CI/deploy run·viewport·검색·자산·404·접근성·라이선스 결과를 기록합니다.
- [ ] 공개 release snapshot과 사후 로컬 증거 commit을 서로 다른 SHA로 분리합니다.
- [ ] 원장 M7-01~04와 M0~M7 전체를 `done`으로 바꾸고 최종 진척률 100점을 계산합니다.
- [ ] O1은 수행하지 않았으면 `optional`로 그대로 둡니다.

```bash
git add docs/project/reviews/public-beta-1/live-verification.md PROJECT_CONTEXT.md PROJECT_MANIFEST.json ROADMAP.md CHANGELOG.md VERIFICATION_REPORT.md docs/superpowers/plans/2026-08-12-public-beta-master-plan.md
git diff --cached --check
git commit -m "docs: record public beta deployment"
```

**Step 6: 공개 베타 완료를 보고합니다.**

완료 보고에는 다음을 포함합니다.

- 공개 repository URL
- 실제 GitHub Pages URL
- release SHA와 `v0.1.0-beta.1`
- CI·Pages·live browser 결과
- 공개 문서 ready 59/59
- 해결되지 않은 Critical·Important 0
- 남은 Minor·known limitations
- O1 외부 개발자 가벼운 검토가 선택 사항임
- 로컬 canonical 사후 증거 commit과 공개 release SHA가 다른 이유

M7의 실제 URL 검증과 release 생성이 모두 끝나기 전에는 100% 또는 공개 베타 완료라고 보고하지 않습니다.

---

## 14. O1 — 외부 개발자 한 명의 가벼운 검토

상태: `optional`.

- [ ] 전체 원고가 공개된 뒤 핵심 개념 오류·위험한 누락·이해하기 어려운 흐름을 가볍게 요청할 수 있습니다.
- [ ] 검토자의 개인정보·비공개 대화를 저장하지 않고 동의받은 요약만 기록합니다.
- [ ] 단순 취향·문체 제안은 공개 베타 완료를 되돌리지 않습니다.
- [ ] 실제 Critical·Important 결함이면 별도 수정 명세와 patch release 작업으로 전환합니다.
- [ ] 수행하지 않아도 진척률 100%와 공개 베타 완료를 막지 않습니다.

---

## 15. 계획 변경과 결정 기록

방향이 바뀌어도 과거 체크 상자와 이유를 지우지 않습니다. 변경은 이 문서의 해당 작업을 `superseded`로 덮어쓰는 대신 상태 열에서 `blocked` 또는 새 작업 ID로 연결하고, 아래 결정 기록에 남깁니다. 원장 상태 값은 자동 검증 계약상 `pending`, `in_progress`, `blocked`, `done`, `optional`만 사용하므로 대체된 작업은 설명 칸에 `replaced by`와 실제 대체 작업 ID를 기록하고 인정 점수를 0으로 둡니다.

### 변경 분류

| 분류 | 예 | 처리 |
|---|---|---|
| 구현 교정 | 오타, 링크, 검증기 결함, 같은 수용 기준 안의 도표 reflow | 명세 변경 없이 해당 작업·검증·결정 기록 갱신 |
| 작업 순서 변경 | source gap 때문에 M3 두 작업 순서 교체 | 원장 의존성·이유·진척률만 갱신 |
| 완료 기준 변경 | 사람 검토를 다시 필수화, ready 증거 추가·제거 | 완성 명세 먼저 수정·승인하고 이 계획 변경 |
| 범위 변경 | PDF, 다국어, 퀴즈, 맞춤 도메인, CMS 추가 | 공개 베타 밖 별도 명세 또는 사용자 승인 뒤 상위 명세 개정 |
| 권한 변경 | 새 의존성·외부 서비스·원격 쓰기 범위 확대 | 실행 전 별도 승인 |
| 공개 결함 | release 뒤 Critical·Important 발견 | 공개 중단·보안 우선 판정 뒤 patch release 명세 |

### 결정 기록 표

| 날짜 | 결정 ID | 변경 전 | 변경 후 | 이유·근거 | 영향 작업 | 승인·커밋 |
|---|---|---|---|---|---|---|
| 2026-08-12 | DEC-PB-001 | 사람 기술·편집·비개발자 독자 검토를 모두 필수 완료 조건으로 사용 | Claude Opus 5 `xhigh` 독립 검토, Codex 재판정, 자동·브라우저·소유자 묶음 승인을 필수로 하고 실제 사람 세 역할은 선택 증거로 사용 | 푸디님은 무료 공개 웹 핸드북에 외부 개발자 한 명의 가벼운 검토만 참고로 두기로 결정 | M0, M5, O1 | 완성 명세 `83bdfe9` |
| 2026-08-12 | DEC-PB-002 | 여러 계획을 채팅과 개별 파일에서 병렬 관리 | 승인된 완성 명세 + 이 마스터 실행 계획·체크리스트의 2문서 정본 체계 | 전체 완성을 빠짐없이 추적하고 방향 변경 이유를 보존 | M0~M7 | 계획 `e0228e5`, 보강 `217e5ab`, 푸디님 최종 승인 |
| 2026-08-12 | DEC-PB-003 | 과거 개발 Git 이력을 그대로 공개할 가능성 | 검증된 현재 tree의 새 root snapshot만 공개하고 전체 개발 이력은 로컬 보존 | 과거 폐기 사례·Claude session ID·비용 메타데이터의 공개 노출을 차단 | M6, M7 | 이 계획의 안전 기본값이며 Task 25 실제 감사로 확정 |
| 2026-08-12 | DEC-PB-004 | 큰 Task가 끝날 때까지 미커밋 변경을 누적하거나 시간 기준 WIP 커밋을 만들 수 있음 | 한 번에 미커밋 독립 단위 하나만 다루고, 큰 작업은 수정 전에 검증 가능한 하위 체크포인트로 나눠 완결된 범위만 자동 로컬 커밋 | 장기 실행 중 변경 손실·범위 혼합·미커밋 누적을 막으면서 각 커밋의 독립 승인 가능성을 유지 | M0~M6 | 푸디님 2026-08-12 승인, 이 보강 커밋 |
| 2026-08-12 | DEC-PB-005 | Claude 사용량 제한 시 행을 blocked로 둔다는 원칙만 있고 실패 기록·부분 출력·재개 절차가 상세하지 않음 | `status: blocked`·`block_reason: usage_limit`, 민감정보 없는 시도 기록, 부분 출력 폐기, evidence-only 체크포인트, 사용자 재로그인 또는 reset 뒤 막힌 행 1회 재개를 고정 | 과거 실제 429 경험을 반영하고 fallback·중복 호출·검토 증거 과장을 방지 | M5 | 푸디님 2026-08-12 승인, 이 보강 커밋 |
| 2026-08-12 | DEC-PB-006 | 실행 방식과 읽기 전용 외부 검토 범위가 미확정 | `superpowers:subagent-driven-development` 방식 1번으로 실행하고, 계획에 적힌 공식 문서 읽기 전용 조사와 Claude Code Opus 5 `xhigh` 읽기 전용 검토를 일괄 허용 | 구현자·검토자 분리와 연속 실행을 유지하면서 설치·원격 쓰기 경계는 그대로 보존 | M0~M7 | 푸디님 2026-08-12 최종 승인 |
| 2026-08-28 | DEC-PB-007 | Opus5/xhigh 미래 실행·전체 계획 반복 입력·검토 차단 시 단일 미커밋 단위 정지 | 구독 포함 사용량 입증 뒤 Opus4.8/1M/high 조건부 실행·공통 계약/권위 대응표·전체 대상 본문/필요 근거·차단 검토와 비의존 개발 분리 | 추가 과금 금지·정확성 우선·반복 감소를 함께 적용하고 R01~R25 공개59개/R26·소유자/공개 게이트·과거 증거를 보존 | 정책 단위, Task20 이후, M5 | 푸디님 2026-08-28 명시 지시; 필수 검증/필요 검토 전 커밋 없음 |
| 2026-08-30 | DEC-PB-008 | Claude 차단 중 구현·검증된 단위도 미커밋으로 누적하고 공식 원문·고정 의존성 복원마다 승인을 다시 확인 | 공식·비민감 읽기 전용 조사와 잠금 버전 복원·기존 로컬 검증을 상시 허용하고, 별도 Codex 작업 검토까지 통과한 분리 가능 단위는 `implementation verified / Claude review pending` 로컬 체크포인트 커밋 허용 | M5 Claude·`ready`·owner·M7 게이트는 유지하면서101개 누적 변경을 독립 단위로 분리하고 특정 blocker가 전체 목표를 멈추는 것을 방지 | 정책, Task20~26, M5~M7 | 푸디님 2026-08-30 명시 승인; push·배포·라이선스/핵심 구조 결정 제외 |
| 2026-09-05 | DEC-PB-009 | 미래 M5 완료가 Claude 구독 전용 Opus4.8/1M/high 및 Codex 재판정에 의존 | R01~R25 fresh Codex reviewer와 분리된 R26 fresh Codex reviewer, controller 재판정·같은 reviewer 재검토로 대체 | Claude 인증·구독 경로가 M5의 실제 품질 판단을 진행시키지 못하며, 모델 제공자 다양성이 사라지는 품질 비용은 fresh context·분리·고정 해시·C01~C12·재판정·재검토로 보완 | Task22~23, M5 | 푸디님 2026-09-05 명시 결정; 과거 Claude 기록은 waived_by_owner·호출0·유효 결과 없음으로 보존 |

새 결정은 `DEC-PB-010`부터 순서대로 추가합니다. 날짜·원인·대안·영향·승인 근거 없이 체크리스트를 조용히 다시 쓰지 않습니다.

## 16. 상태 보고 형식

장기 작업 중 `/status` 보고는 다음 순서를 사용합니다.

```text
/status
기준: branch / HEAD / clean 여부
전체 진척률: 인정 점수 / 100
현재 마일스톤: ID와 인정 점수
완료: 이번 보고 이후 실제 커밋과 검증
진행 중: 한 작업 단위와 다음 수용 기준
차단: 동일 blocker, 필요한 승인 또는 외부 상태
검증: 명령 / 종료 코드 / 수량 / 브라우저 범위
권한: 네트워크·Claude·commit·push·deploy 각각의 실제 상태
다음 작업: 사용자 결정 없이 이어갈 정확한 ID
```

진척률과 함께 반드시 미통과 게이트를 표시합니다. 예를 들어 M3가 끝나도 M5가 남았다면 “원고 내용 완료, 독립 검토·ready 미완료”라고 씁니다. 로컬 check를 실제 CI·Pages·URL 성공으로 바꾸어 쓰지 않습니다.

## 17. 공개 베타 최종 수용 체크리스트

### 콘텐츠

- [ ] 공개 문서 인벤토리와 실제 파일이 59개로 일치합니다.
- [ ] `ready` 59개, `seed`·`draft`·`review` 0개입니다.
- [ ] 공식 Build Track은 두 캡스톤을 포함한 13장입니다.
- [ ] 반도체 등 폐기 사례가 공개 본문·frontmatter·대체 텍스트·프롬프트·SVG·Mermaid에 0건입니다.
- [ ] 모임 참가 웹앱과 교육용 주가 fixture 대시보드의 역할·권한·데이터·오라클이 일관됩니다.
- [ ] 영속 지식과 날짜 있는 현재 도구 매핑이 분리됐습니다.
- [ ] 중요한 공식·1차 출처에 확인일·적용 범위·일반화 금지선이 있습니다.
- [ ] 핵심 장·용어집·인덱스·캡스톤의 정의·링크 충돌이 0개입니다.

### 검토와 증거

- [ ] R01~R25는 fresh Codex reviewer, R26은 분리된 fresh Codex reviewer가 Read-only로 검토하고 입력 불변·실제 모델/effort를 기록했습니다. 작업 단위 검토는 M5를 대체하지 않았습니다.
- [ ] 모든 지적이 controller 재판정됐고 해결되지 않은 Critical·Important가 0개입니다.
- [ ] 의미 있는 수정은 필요한 재검토를 통과했습니다.
- [ ] 모든 ready 문서에 independent·adjudication·conformance·sources·automated·browser·owner 증거가 있습니다.
- [ ] 다이어그램 소비 문서에 visual 증거가 있습니다.
- [ ] 푸디님의 묶음 승인이 고정 원고 SHA와 기계 승격 범위를 가리킵니다.

### 자동·사이트·시각

- [ ] `npm run validate:release` exit 0입니다.
- [ ] `ASTRO_TELEMETRY_DISABLED=1 npm run check` exit 0입니다.
- [ ] `npm run validate:plan` exit 0입니다.
- [ ] 로컬 project-site·root-site base path 빌드가 모두 통과합니다.
- [ ] 59개 공개 페이지의 대표 데스크톱·모바일 검증에서 H1·배지·이미지·overflow·console 결함이 0개입니다.
- [ ] 검색 8개 대표어, 내비게이션, 키보드, 404 복구가 동작합니다.
- [ ] 모든 게시 SVG가 대체 텍스트·title/desc·라이트·다크·데스크톱·모바일 검증을 통과합니다.
- [ ] API 과대 흐름도는 개요와 상세 질문으로 분리됐습니다.

### 릴리스·권리·보안

- [ ] 버전 `0.1.0-beta.1`, 태그 `v0.1.0-beta.1`, 표시명 공개 베타 1이 일치합니다.
- [ ] CC BY 4.0 콘텐츠·교육 시각 자료와 MIT 코드·설정 적용 경계가 명확합니다.
- [ ] 현재 tracked snapshot의 비밀·개인정보·개인 경로·권리 미판정이 0개입니다.
- [ ] 공개 Git history는 검증된 root snapshot부터 시작합니다.
- [ ] 공개 repository·remote main·CI·Pages가 같은 release SHA를 가리킵니다.
- [ ] 실제 HTTPS 공개 URL에서 루트·학습 경로·검색·13장·두 캡스톤·참고편·자산·404를 검증했습니다.
- [ ] 같은 공개 SHA에 태그와 GitHub Release가 있습니다.
- [ ] 상세 사후 증거는 private canonical branch에 별도 커밋됐습니다.

## 18. 이 계획 자체의 검증

### 구조·명세 커버리지

```bash
rg -n "^## ([1-9]|1[0-9])\\." docs/superpowers/plans/2026-08-12-public-beta-master-plan.md
rg -n "M0|M1|M2|M3|M4|M5|M6|M7|O1|Opus 5|xhigh|CC BY 4.0|MIT|v0.1.0-beta.1|GitHub Pages" docs/superpowers/plans/2026-08-12-public-beta-master-plan.md
rg -n "CASE|DURABLE|AUDIENCE|ANALOGY|EVIDENCE|SOURCE|TERM|VISUAL" docs/superpowers/plans/2026-08-12-public-beta-master-plan.md
```

Expected: 섹션 1~19, M0~M7·O1, 검토·라이선스·버전·배포·8개 규칙이 모두 존재합니다.

### 원장 점수·인벤토리

계획 검증 스크립트가 생기기 전에는 다음 일회성 명령으로 확인합니다.

```bash
node --input-type=module -e 'import fs from "node:fs"; const s=fs.readFileSync("docs/superpowers/plans/2026-08-12-public-beta-master-plan.md","utf8"); const ledger=s.split("<!-- PUBLIC_BETA_LEDGER_START -->")[1].split("<!-- PUBLIC_BETA_LEDGER_END -->")[0]; const points=[...ledger.matchAll(/^\\| M[0-7]-[^|]+ \\|[^|]+\\| ([0-9.]+) \\|/gm)].map(m=>Number(m[1])); const total=points.reduce((a,b)=>a+b,0); if(total!==100) throw new Error("ledger points "+total); const inventory=s.split("<!-- PUBLIC_BETA_INVENTORY_START -->")[1].split("<!-- PUBLIC_BETA_INVENTORY_END -->")[0]; const paths=[...inventory.matchAll(/`(src\\/content\\/docs\\/[^`]+\\.md)`/g)].map(m=>m[1]); if(paths.length!==59||new Set(paths).size!==59) throw new Error("current inventory "+paths.length+"/"+new Set(paths).size); console.log("ledger 100, current inventory 59 unique")'
```

Expected now: 원장 100점, 현재 공개 인벤토리 59개 고유 경로. Task 8의 검증기와 인벤토리도 같은 59개 계약을 사용합니다.

### 활성 요구·금지선

```bash
rg -n 'claude-opus-4-8|--effort high|구독|자동 전환|자동 대체|별도 승인|새 의존성|root snapshot' docs/superpowers/plans/2026-08-12-public-beta-master-plan.md
rg -n 'effort `max`|--effort max' docs/superpowers/plans/2026-08-12-public-beta-master-plan.md
rg -n '장시간 작업의 검증 가능한 체크포인트|미커밋 독립 작업 단위|WIP|checkpoint_id|block_reason.*usage_limit|부분 출력은 폐기|막힌 행 하나만 한 번' docs/superpowers/plans/2026-08-12-public-beta-master-plan.md
```

Expected: Codex two-layer fresh context·R26 분리·입력 완전성/해시·실제 모델/effort 기록·자동 fallback 금지·비의존 진행 계약이 존재합니다. Opus5/xhigh와 Claude 구독 기록은 역사로 남으며 새 실행 명령이 아닙니다.

### Markdown·프로젝트 검사

```bash
git diff --check
npm run check:static
ASTRO_TELEMETRY_DISABLED=1 npm run check
```

Expected: 계획 문서 추가로 기존 테스트·공개 콘텐츠·참조·SVG·빌드 출력 검증이 회귀하지 않습니다.

## 19. 승인 뒤 실행 시작(2026-08-12 역사 기록)

푸디님은 2026-08-12에 수정된 계획, 실행 방식 1번, 계획에 적힌 공식 문서 읽기 전용 조사와 Claude Code Opus 5 `xhigh` 읽기 전용 검토를 최종 승인했습니다.

1. M0-02를 `done`, 인정 점수를 2.0으로 갱신해 전체 기준선을 19.7점으로 확정했습니다.
2. 최상위 목표를 “바이브 개발 핸드북을 승인된 완성 명세와 마스터 계획에 따라 `v0.1.0-beta.1` 공개 베타로 완성하고, 별도 승인 뒤 GitHub Pages 실제 공개 URL까지 검증한다”로 생성했습니다.
3. 실행 방식은 `superpowers:subagent-driven-development`로 고정했습니다. 작업별 구현자와 독립 검토자를 분리하고 사용자 결정이 없는 작업 사이에는 멈추지 않습니다.
4. 이 승인 반영 커밋 뒤 Task 1부터 시작합니다. M7 외부 쓰기와 M5 소유자 묶음 승인 외에는 사용자 결정이 없는 로컬 작업을 계속 이어갑니다.

마스터 계획 승인 자체는 새 의존성 설치·전체 Git 이력 공개·원격 저장소 생성·push·Pages 설정·태그·Release를 허용하지 않습니다. M7의 정확한 owner·repository·공개 author identity·RC tree를 보고한 뒤 별도 승인을 받아야 합니다.
