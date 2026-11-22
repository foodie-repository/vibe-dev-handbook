# 2026-08-07 draft Build Track 사례 정렬 감사

감사일은 2026-08-10이며, 대상은 독립 검토 전 `draft`인 `Git과 GitHub는 다릅니다`, `빌드·배포·도메인·DNS`, `로그·모니터링·백업`, `AI 코딩 에이전트와 일하는 법` 네 장입니다. 네 장은 공통 H2 `개발 사례: 모임 참가 웹앱` 아래에서 캡스톤의 사용자 행동과 실패 위험을 각 장의 영속 개념에 연결하지만, 특정 배포 제품이나 실제 서비스가 존재한다는 뜻으로 읽히지 않도록 경계를 유지합니다.

## 장별 정렬 결과

### `Git과 GitHub는 다릅니다`

| 사례 사용자 행동 | 장의 영속 개념 | 추가된 실패 위험 | 검증 증거 | 상태 유지 이유 | 다음 독립 검토 |
|---|---|---|---|---|---|
| 같은 사용자의 같은 모임 활성 참가를 한 건으로 제한하는 변경을 요구·서비스·데이터 제약·테스트·문서의 검토 가능한 작업 단위로 묶고, 전체 상태와 unstaged·staged diff를 읽은 뒤 관련 파일만 로컬 commit 후보로 선택하며 push·Pull Request·merge·배포는 별도 승인으로 남깁니다. | Git과 GitHub의 책임, 작업 트리·스테이징·커밋·브랜치·HEAD·원격 상태, commit·push·Pull Request·merge·deploy의 서로 다른 상태와 승인 경계, 보존할 작업을 먼저 묻는 복구 판단입니다. | 사용자 기존 변경이나 무관한 UI 변경의 혼입·덮어쓰기, 비밀·개인정보·운영 데이터의 커밋, 공유 이력의 임의 재작성, Git으로 운영 데이터까지 복구할 수 있다는 오해를 추가로 드러냅니다. | Task 1 commit `8df099aaee00d4e55459e8079694a987ee7a0cb8`, 본문 14,058자와 `CONTENT_MAP.md` 일치, 공통 H2 정확히 1회, 데스크톱·모바일에서 H1·draft 배지·`중복 신청 방지의 Git 안전 경계`·4행 복구 표·전역 overflow 0·콘솔 오류와 경고 0을 확인했습니다. | 사례·작업 단위·복구 표를 실질 보완했지만 자동 검사와 Task 1 Codex 태스크 검토·브라우저 확인은 Opus 독립 검토나 사람 검토가 아니며 `reviewEvidence`도 없습니다. 따라서 `draft`를 유지합니다. | 준비된 장별 계약으로 Opus 독립 검토를 새로 수행하고, 결과 재판정·필요 반영 뒤 사람 기술·편집·비개발자 독자 검토를 진행합니다. |

### `빌드·배포·도메인·DNS`

| 사례 사용자 행동 | 장의 영속 개념 | 추가된 실패 위험 | 검증 증거 | 상태 유지 이유 | 다음 독립 검토 |
|---|---|---|---|---|---|
| 공개 조회·로그인·참가·취소·정원 충돌이 있는 모임 웹앱을 공개한다고 가정하고, 소스와 잠금·빌드·설정과 비밀·데이터 변경·호스팅과 DNS와 HTTPS·사용자 흐름의 여섯 책임을 직접 증거와 함께 인수합니다. | 소스·검증·빌드·아티팩트·환경·배포·호스팅·DNS·HTTPS·사용자 흐름·운영 인수의 구분, 재현 가능한 빌드와 환경별 설정, 정적·동적 서비스 및 로컬 검증과 실제 배포의 증거 경계입니다. | 서버 비밀의 브라우저 번들 노출, 호환되지 않는 스키마 마이그레이션과 복원 불능, 잘못된 DNS·인증서·공개 주소, 로컬 빌드를 실제 배포 성공으로 오인하는 문제, 승인 없는 운영 smoke의 부작용을 추가합니다. | Task 2 commit `07f1bda1a297d79810c3a17ee7252dbe5e35949a`, 본문 15,074자와 `CONTENT_MAP.md` 일치, 공통 H2 정확히 1회, 데스크톱·모바일에서 H1·draft 배지·`모임 참가 웹앱을 공개한다면`·6행 책임 표·전역 overflow 0·콘솔 오류와 경고 0을 확인했습니다. | 로컬 사례 계약과 렌더링은 확인했지만 실제 공개 URL·서버·데이터베이스·DNS·HTTPS·배포를 확인하지 않았고, Task 2 Codex 태스크 검토는 Opus·사람 검토 또는 생명주기 승격 증거가 아니며 `reviewEvidence`도 없습니다. 따라서 `draft`를 유지합니다. | 장의 영속 배포 책임과 모임 사례의 여섯 증거 경계를 Opus가 독립 검토한 뒤 사람 기술·편집·독자 검토를 진행하며, 제품별 현재 도구 확인은 별도 승인 게이트에서 분리합니다. |

### `로그·모니터링·백업`

| 사례 사용자 행동 | 장의 영속 개념 | 추가된 실패 위험 | 검증 증거 | 상태 유지 이유 | 다음 독립 검토 |
|---|---|---|---|---|---|
| 방문자가 모집 중인 모임을 조회하고 참가·취소할 때 결과 분포와 정원·인가 불변식, 데이터베이스 연결, 마지막 정상 백업과 복원 시험을 서로 분리해 보고, 불변식 위반 시 쓰기 제한·증거 보존·원인별 복구·재검증 순서로 대응합니다. | 로그·지표·트레이스·모니터링·관측 가능성·알림, 사용자 영향과 내부 건강의 구분, 인시던트 대응, 백업·복원·RPO·RTO와 복구 가능성의 직접 증거입니다. | 정상 업무·보안 거절과 시스템 실패의 잘못된 합산, 인증 상태와 인증 의존성 장애의 혼동, 개인정보·비밀을 담은 로그, 불변식 위반만 보고 백업을 자동 복원하는 행동, 백업 생성을 복원 가능성으로 오인하는 문제를 추가합니다. | Task 3 commit `c8a3b7fbe2051afbce417bfd98dd52ae8fb0e016`과 fix commit `887c4f4eaa7c2a2d2cd95d256bd08d841b7f23ff`, 본문 17,521자와 `CONTENT_MAP.md` 일치, 공통 H2 정확히 1회, 데스크톱·모바일에서 H1·draft 배지·`모집 중인 모임의 운영 신호`·결과 분포·5행 신호 표·4단계 복구 목록·전역 overflow 0·콘솔 오류와 경고 0을 확인했습니다. | 수정 후 Task 3 Codex 재검토는 PASS지만 저장소의 Opus·사람 검토나 `reviewEvidence`가 아니고 실제 모니터링·백업·복원·서비스·데이터베이스를 검증하지 않았습니다. 따라서 `draft`를 유지합니다. | 수정된 결과 분류와 운영 행동 조건을 포함한 전체 장을 같은 입력 경계로 Opus가 독립 검토하고, 사람 기술·편집·독자 검토와 직접 운영·복구 출처 확인을 별도로 진행합니다. |

### `AI 코딩 에이전트와 일하는 법`

| 사례 사용자 행동 | 장의 영속 개념 | 추가된 실패 위험 | 검증 증거 | 상태 유지 이유 | 다음 독립 검토 |
|---|---|---|---|---|---|
| 빈 모임 상세 화면은 파일·비밀·운영 데이터를 건드리지 않는 읽기 전용 진단으로 시작하고, W-03 중복 참가 방지만 하나의 변경 계약으로 고정하며, 자동 검사·데이터 오라클·브라우저·로컬 commit·push·배포를 분리한 인수 목록으로 완료 주장을 검증합니다. | 모델·도구·하네스의 작업 시스템, 요청 유형별 권한, 상태·목표·비목표·계획·한 단위 변경·검증·독립 리뷰·handoff의 루프, 증거 계층과 쓰기 소유권입니다. | 진단 중 파일이나 운영 상태를 바꾸는 행위, 넓은 범위의 변경과 민감정보 출력, 테스트 통과를 데이터·브라우저 성공으로 오인하는 문제, local commit·push·배포를 하나의 완료 상태로 합치는 문제를 추가합니다. | Task 4 commit `ad56158c6f0a3d68e6a61295c3edc1866fd4a80d`, 본문 18,384자와 `CONTENT_MAP.md` 일치, 공통 H2 정확히 1회, 데스크톱·모바일에서 H1·draft 배지·세 H3·읽기 전용과 변경 계약 code block·8개 인수 항목·전역 overflow 0·콘솔 오류와 경고 0을 확인했습니다. 모바일 code block은 요소 내부 가로 스크롤만 있고 페이지 전역 넘침은 없습니다. | 계약과 인수 기준을 실질 보완했지만 Task 4 Codex 태스크 검토·자동 검사·브라우저 확인은 Opus 독립 검토나 사람 검토가 아니며 `reviewEvidence`도 없습니다. 따라서 `draft`를 유지합니다. | 읽기 전용 진단·변경 계약·완료 인수의 권한과 증거 경계를 Opus가 독립 검토한 뒤 사람 기술·편집·비개발자 독자 검토를 진행합니다. |

## Task 3 검토와 수정 이력

Task 3의 첫 독립 Codex 태스크 검토 정본은 `NEEDS CHANGES`, Critical 0건·Important 1건·Minor 0건이었습니다. Important는 당시 `logs-monitoring-backup.md:191,196`이 `closed`·`full`·`미인증`을 독립 결과로 확정하지 않고 `인증 실패`가 정상 보안 거절과 인증 시스템·의존성 실패까지 포괄해 운영 판정을 흐린다는 지적이었습니다.

fix commit `887c4f4eaa7c2a2d2cd95d256bd08d841b7f23ff`는 결과를 `성공·활성 참가 중복·closed(모집 마감)·full(정원 가득 참)·미인증·인가 거절·서버 또는 인증 의존성 오류`로 분리하고 후속 문장을 `미인증 요청의 거절`로 좁혔습니다. 같은 reviewer의 재검토 정본은 `PASS`, Critical 0건·Important 0건·Minor 0건이며 이전 finding 해소·회귀 없음·본문 17,521자와 `CONTENT_MAP.md` 일치를 확인했습니다.

이 두 판정은 작업 중 주고받은 Codex 태스크 검토이며 저장소의 `reviewEvidence`가 아닙니다. Task 5에서는 Opus를 실행하지 않았고, 이 기록을 Opus 독립 검토·사람 기술 검토·사람 편집 검토·독자 테스트 또는 `draft`에서 `review`로의 생명주기 승격 증거로 해석하지 않습니다.

## Task 5 검토와 수정 이력

Task 5 구현·감사 commit `515e205d5406db35ae0cbb6ea052c71f2431bedb` 뒤 수행한 첫 Codex 태스크 검토 정본은 `NEEDS CHANGES`, Critical 0건·Important 1건·Minor 0건이었습니다. Important는 `VERIFICATION_REPORT.md`의 2026-08-07 일반 헤딩 네 개가 날짜와 역사 표지 없이 남아 있어, 아래 역사 수치·표·목록을 상단 2026-08-10 최신 상태와 독립적으로 읽으면 현행 상태처럼 오인하는 current-state 드리프트를 만든다는 지적이었습니다.

fix commit `fc785097c876c9dcdb70b4cd8735e7051380e802`는 `VERIFICATION_REPORT.md` 한 파일의 헤딩 네 개만 `2026-08-07 ... (역사 기록)` 형식으로 바꾸고 내용·수치·표·목록과 상단 2026-08-10 최신 체크포인트는 유지했습니다. 같은 reviewer의 재검토 정본은 `PASS`, Critical 0건·Important 0건·Minor 0건이며 finding 해소와 범위 회귀 없음을 확인했습니다.

이 시간 순서는 Task 5 구현·감사 commit 뒤 첫 검토와 heading fix·재검토가 이어졌다는 뜻이며, Task 5 자체 검토가 구현 commit 전에 완료됐다고 주장하지 않습니다. 이 Codex 태스크 검토 역시 Opus 독립 검토·사람 기술 검토·사람 편집 검토·독자 테스트·저장소 `reviewEvidence` 또는 생명주기 승격 증거가 아닙니다.

## 자동·문맥 검증

| 검증 항목 | 실제 결과 |
|---|---|
| 최종 fresh 게이트 | 문맥 반영 뒤 `ASTRO_TELEMETRY_DISABLED=1 npm run check` 종료 코드 0, Node 테스트 27개 통과·실패 0개, 공개 콘텐츠 58개, 이 감사 문서를 포함한 참조 Markdown/MDX 143개, 학습 SVG 12개, Astro HTML 59개, 빌드 본문 리터럴 Markdown 0개입니다. `site` 미설정으로 sitemap 통합을 건너뛴 기존 경고만 비차단으로 남았습니다. |
| 상태·문자 수 | 실제 frontmatter·`PROJECT_MANIFEST.json`·`CONTENT_MAP.md`는 전체 `review` 4개·`draft` 41개·`seed` 13개·`ready` 0개로 일치하고, 공식 12장 Build Track은 `review` 3개·`draft` 9개·`seed` 0개·`ready` 0개입니다. 네 대상은 모두 `draft`, `reviewEvidence` 없음, 본문은 각각 14,058자·15,074자·17,521자·18,384자로 일치합니다. |
| 공통 구조 | 네 원고마다 exact H2 `개발 사례: 모임 참가 웹앱`이 정확히 1회이고, 공개 원고나 `CONTENT_MAP.md`를 Task 5에서 수정하지 않았습니다. |
| SDD 임시 장부 | 검증 수를 오염시키던 ignored scratch `.superpowers/sdd/2026-08-07-draft-build-track-case-alignment`는 필요한 내용을 모두 읽은 뒤 `/private/tmp/vibe-handbook-sdd-019fcd36/draft-build-track-case-alignment-ledger`로 이동했습니다. 저장소 경로는 없고 외부 경로에는 원래 6개 파일이 보존되며 tracked 변경은 만들지 않았습니다. |
| 계획 밖 잔존 | `src/content/docs/start-here/learning-paths.md`의 `공개 반도체 데이터` 1건은 승인된 후속 `learning-path-search-and-review` 범위이므로 수정하지 않았습니다. |

## 로컬 Chrome 확인

fresh 빌드의 로컬 preview만 실제 Chrome에서 확인했으며, 같은 브라우저 상태를 추측하지 않고 각 뷰포트에서 DOM과 전역 넘침을 다시 읽었습니다.

| 경로 | 뷰포트 | 확인 결과 |
|---|---:|---|
| `/09-git-github/git-and-github/` | 1440×1000 | main H1 정확히 1개, `검토용 초안` 정확히 1개, 공통 H2와 사례 H3·핵심 문구·4행 복구 표 존재, html/body overflow 각 0, console error/warning 각 0입니다. |
| `/09-git-github/git-and-github/` | 390×844 | 같은 구조와 표를 확인했고 html/body overflow 각 0, console error/warning 각 0입니다. 넓은 표 래퍼의 제한된 내부 스크롤과 페이지 전역 넘침을 분리했습니다. |
| `/10-deployment-operations/build-deploy-domain-dns/` | 1440×1000 | main H1 정확히 1개, `검토용 초안` 정확히 1개, 공통 H2와 사례 H3·핵심 문구·6행 책임 표 존재, html/body overflow 각 0, console error/warning 각 0입니다. |
| `/10-deployment-operations/build-deploy-domain-dns/` | 390×844 | 같은 구조와 6행 표를 확인했고 html/body overflow 각 0, console error/warning 각 0입니다. 표 래퍼의 제한된 내부 스크롤과 페이지 전역 넘침을 분리했습니다. |
| `/10-deployment-operations/logs-monitoring-backup/` | 1440×1000 | main H1 정확히 1개, `검토용 초안` 정확히 1개, 공통 H2와 사례 H3·정확한 결과 분포·5행 신호 표·4단계 복구 목록 존재, html/body overflow 각 0, console error/warning 각 0입니다. |
| `/10-deployment-operations/logs-monitoring-backup/` | 390×844 | 같은 구조·결과 분포·복구 목록을 확인했고 html/body overflow 각 0, console error/warning 각 0입니다. 표 래퍼의 제한된 내부 스크롤과 페이지 전역 넘침을 분리했습니다. |
| `/11-ai-native/working-with-coding-agents/` | 1440×1000 | main H1 정확히 1개, `검토용 초안` 정확히 1개, 공통 H2와 세 사례 H3·읽기 전용과 변경 계약 code block·8개 인수 항목 존재, html/body overflow 각 0, console error/warning 각 0입니다. |
| `/11-ai-native/working-with-coding-agents/` | 390×844 | 같은 구조·두 계약·인수 목록을 확인했고 html/body overflow 각 0, console error/warning 각 0입니다. 긴 code block 자체에는 제한된 가로 스크롤이 있지만 부모와 페이지 전역 넘침은 0입니다. |

필요한 최소 캡처만 ignored `output/playwright/draft-case-alignment/` 아래에 두었고 tracked 파일로 추가하지 않았습니다. 확인 뒤 Playwright Chrome 세션과 preview를 종료했으며 4327번 포트의 listener와 해당 Chrome·preview 프로세스가 남지 않았음을 확인했습니다.

## 판정과 다음 경계

네 장의 공통 사례는 각 장의 영속 개념을 바꾸지 않고 모임 참가 웹앱의 구체적인 사용자 행동·실패 위험·검증 질문에 연결됐습니다. 네 장은 모두 `draft`이고 `reviewEvidence`가 없으며, Tasks 1~4의 Codex 태스크 검토와 Task 5의 fresh 자동 검사·로컬 Chrome 확인은 사람 검토나 공개 준비 완료를 뜻하지 않습니다.

다음 독립 계획은 `docs/superpowers/plans/2026-08-07-current-tool-mapping.md`입니다. 제품별 현재 기능·설정·제약을 공식 자료로 확인하는 네트워크 조사는 별도 승인 게이트이며, 승인 전에는 시작하거나 확인했다고 주장하지 않습니다. 실제 서비스·데이터베이스·원격 CI·push·Pull Request·merge·배포·DNS·HTTPS·운영 계정·물리 기기·Chrome 외 브라우저·스크린리더는 이번 감사에서 확인하지 않았습니다.
