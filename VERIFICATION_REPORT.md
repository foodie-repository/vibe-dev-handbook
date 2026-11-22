# 검증 보고서

최초 검증일: 2026-08-07 · 최신 체크포인트: 2026-11-23

## 2026-11-23 Task 26 로컬 릴리스 후보

[검증 보고서](docs/project/reviews/public-beta-1/release-candidate.md)에 콘텐츠 기준 SHA, 두 경로의 검색 색인·화면 검증, 실패 후 재검증 범위를 기록했습니다. 보고서의 독립 검토는 PASS C0/I0/M0입니다. 최종 커밋을 포함하는 검증은 자기 참조를 피하기 위해 해당 커밋의 HEAD·tree와 함께 로컬 진행 원장에 별도로 남깁니다. 실제 GitHub Actions·Pages·공개 URL 검증은 여기에 포함하지 않습니다.

## 2026-11-23 Task 23 로컬 원고 승격

승인본 `e52fa3e`와 네 번째 배치 커밋 `e1d80b3`의 Git 원본을 대조했습니다. 59개 경로가 일치하고 본문 변경 및 허용되지 않은 frontmatter 차이는 각각 0개이며, 커밋 상태는 ready 59/review 0입니다. 배치별 로컬 커밋은 13개 `30a71bf`, 23개 `848ce0d`, 18개 `06a5a96`, 5개 `e1d80b3`입니다. 첫 독립 검토의 Important 2건은 같은 세션에서 해소를 확인했고, 네 배치의 최종 판정은 모두 PASS(C0/I0/M0)입니다. R26의 기존 비차단 Minor 5건은 유지합니다.

마지막 승격 배치의 전체 자동 검사 438개는 제외·실패 없이 통과했습니다. [최종 QA](docs/project/reviews/public-beta-1/ready-promotion-qa.md)에는 59개 경로·118개 상태의 실제 HTML과 동일성 검사, 재사용한 근거의 범위를 기록했습니다. 이는 로컬 빌드 결과이며 GitHub Pages 검증이 아닙니다.

## 2026-11-15 R04 controller closeout 영향 검증

R04 최초 NEEDS CHANGES C0/I2/M8·16/18과 같은 저장 reviewer의 수정 후 PASS C0/I0/M2·18/18을 구별해 보존했습니다. 완료 정리는 [독립 검토](docs/project/reviews/public-beta-1/r04-closeout-review.md) PASS C0/I0/M1·코드 C0/I0/M0이며, 새 R04-CO-M01 인벤토리 상태 표시는 [재판정](docs/project/reviews/public-beta-1/r04-closeout-adjudication.md)에 따라 사용자 중단 경계에서 비차단 미해결로 남깁니다. 원고의 M05/R16·M08/R20과는 다른 finding입니다.

수정 단위의198/198·build60·실제6상태와 완료 정리의 targeted15/15·전체201/201·fail0·build60/Pagefind60/built60·local matrix/R04 errors0을 확인했습니다. 배지1440/390 light 두 상태는 HTTP200·H1하나·검토 중 표시·초안 표시 없음·이미지 로드·전역overflow 없음·console/pageerror/요청 실패0이며 PNG2를 직접 판독했습니다. 최초 기대값/fixture 실패는 좁은 수정 후 통과했고 그 이력을 보존합니다. 독립 완료 검토의20파일·57청크·PNG2·payload·실제 프로필·동일 세션·응답 후 불변성 감사도 errors0/exit0입니다. 기존 sitemap site 미설정 경고는 유지합니다. 원고 본문·그림 불변의 review 전이이며 R01~R04 done·draft55/review4/ready0, M5 전체·공개 승인은 미완료입니다. 새 수정·재검토·전체 검사·R05는 시작하지 않고 최종 staged/공개 안전 확인만 남깁니다.

## 2026-10-25 R03 controller closeout 영향 검증

최종 독립 완료 검토는 [최초 결과](docs/project/reviews/public-beta-1/r03-closeout-review.md)의 NEEDS CHANGES C0/I1/M0에서 정본 해시 누락을 보완한 뒤 [동일 세션 후속](docs/project/reviews/public-beta-1/r03-closeout-rereview.md)의 PASS C0/I0/M0으로 해소됐습니다. 누락 방어 RED1→GREEN, fixture 누락3건을 명시 경로 추가로 교정한 뒤 static190/190·fail0·exit0, 참조214/SVG14·local matrix errors0입니다. 원고·그림·배지 출력은 불변이므로 아래 build·렌더 결과를 재사용합니다. 최종5파일·payload·같은 세션/과거 결과 복구·actual astra/high/readOnly·금지 도구0·응답 후 불변성 감사 errors0/exit0이며 원시 응답 SHA는 `f17d7e5d2e33598f468a14fb5a44c029f90c78fd3c5b97afd34fab12f77b9e73`입니다. 중간 자동 압축 이벤트 오분류에 따른 무응답 중단은 PASS로 계산하지 않았습니다.

원고 본문은 같은 reviewer의 Fix Round1 PASS와 동일하고 front matter만 review로 전이했습니다. 최초 원고 NEEDS CHANGES C0/I3/M4와 준비 코드 Minor1, 후속 원고·코드 PASS C0/I0/M0은 별도 정본으로 보존했습니다. 완료 단위의 targeted12/12·실패0, 전체 npm run check exit0·tests189/pass189/fail0·content59·refs212/SVG14·계획100점/중복0/누락0, build60/Pagefind60·built-output60/리터럴0/고지 동일을 확인했습니다. 기존 sitemap site 미설정 경고1개는 유지합니다. 첫 전체 검사의 CLI 행 집계 기대값은 R01/R02로 남아 실패1건이었으며 R03 완료 행을 포함하도록 수정한 뒤 통과했습니다.

localhost의 변경된 배지를 1440×1000과390×844 light에서 실제 실행·PNG 직접 판독했습니다. 두 폭 모두 HTTP200/H1 1개/검토 중 표시/초안 표시 없음/전역 overflow 없음/console warning·error/pageerror/request 실패0입니다. 최초 모바일에서 화면 아래 lazy 이미지가 미로드라 전체 이미지 조건이 실패했으며, 해당 모바일만 그림 영역으로 스크롤·decode 후 상단으로 돌아와 재확인해 이미지 로드와 배지 판독을 통과했습니다. 최초 실패 PNG/JSON은 보존합니다. 원래18개 PNG·dark·전체 원고 검토는 반복하지 않았습니다. 최종 독립 완료 검토·응답 후 감사·exact index/공개 안전의 실행 결과는 완료 검토 기록과 로컬 진행 원장에 후속 기록합니다. 이 절 자체는 미실행 검증의 PASS 증거가 아닙니다.

## 2026-10-25 R02 controller closeout

기준 HEAD 9f1b2db에서 최초 BLOCKED·원문51청크/PNG18·17/18, B01 해소, Minor3 재판정·수정·후속 PASS를 재사용했습니다. [완료 판정](docs/project/reviews/public-beta-1/r02-controller-closeout.md)에 따라 R02만 done, 원고는 본문 불변 metadata-only review이며 공개59개 draft57/review2/ready0입니다. 역사 입력과 최초 판정은 바꾸지 않았고 R03~R26·M5 전체·ready·소유자 공개 승인·RC·M6/M7은 미완료입니다.

이번 npm run check는 exit0·tests180/pass180/fail0, content59·references203/SVG14, plan100/public59/duplicates0/missing0, build60/Pagefind60·built HTML60/literal Markdown0/고지 byte 일치입니다. 최초 focused47 중 CLI 완료 행 기대값1건 실패를 R01+R02로 교정한 이력은 남겼습니다. 기존 site 미설정 sitemap 경고와 docs→404 안내는 로컬 빌드 한계입니다. 보호 Edge의 localhost 한 페이지1440×1000·390×844 light에서 HTTP200·H1 1·검토 중 배지·초안 배지 제거·전역 overflow false·console warning/error0·pageerror0·requestfailed0을 확인하고 두 PNG를 실제로 읽었습니다. 배지 전이만 확인했으며 전체 원고·PNG18·전체 사이트 회귀는 반복하지 않았고 전용 브라우저·preview는 종료했습니다.

[독립 완료 검토와 재판정](docs/project/reviews/public-beta-1/r02-closeout-review.md)은 PASS C0/I0/M1·local commit-safe 예입니다. R02-CO-M01은 기존 테스트 긍정 사례의 no-op이며 별도 정확한 전이·변조 방어가 핵심 조건을 검사하므로 수용·비차단 현행 유지로 재판정했습니다. 원고 Minor3 해소 C0/I0/M0과 구분하며 신규 Minor를 resolved로 표시하지 않습니다. 응답 후 실제22입력·payload/framed·전후 불변성·실제 astra/high/fresh/readOnly·금지 도구0·응답 완전성 감사는 exit0/errors0입니다. 이후 사실 기록과 커밋 전 영향 검사만 수행하며 R03 이후·push·배포·공개 URL은 시작하지 않습니다.

## 2026-09-30 R01 closeout Fix Round 2

HEAD `b163d4f`의 staged12 후보는 중단 당시 패치 SHA-256 `b40e5ecc9f05591946520a07933ced305fc8ef0674a29477d2c286ba6edbd345`와 일치했습니다. 이전 구현 리뷰어 세션은 현재 실행 환경에 없어 fresh 대체 구현 리뷰어가 원 Important 두 건을 재검토했습니다. 이 검토는 M5 원고 검토의 재실행이 아닙니다. 결과는 `NEEDS CHANGES C0/I1/M0`으로, `R01-CLOSEOUT-I01`은 `RESOLVED`, `R01-CLOSEOUT-I02`는 `OPEN`입니다. I02는 R02 진행 허용은 충족했지만 R01 콘텐츠 지도 `review→draft`와 계획 `[x]→[ ]` 역행도 허용하는 같은 원인의 잔여 오류였습니다.

기존 공유 문맥 회귀에 두 역행을 추가해 RED exit1·test1/pass0/fail1에서 실제 `[false,false]`를 확인했습니다. 검사기에 두 거부 조건만 추가한 뒤 같은 회귀는 GREEN exit0·test1/pass1/fail0이며, 정상 R02 상태·집계·체크 변경 허용과 R01 제목·slug 변경 거부도 함께 유지합니다. 같은 대체 리뷰어는 Fix Round 2의 패치 `e4b9f888b45377465ad7cb7129990efdab36ba2f690d35968cbaceb6155c322f`에서 두 역행이 각각 `context excerpt content mismatch`로 거부되는 것을 직접 재현하고 `PASS C0/I0/M0`, I01·I02 `RESOLVED`, exact staged12 commit-safe Yes로 판정했습니다. 이 문단의 최종 결과 기록만 그 검토 뒤 추가했습니다. 원고 본문·자산·출처·역사 요청/결과/재판정은 불변이고 R01의 비차단 Minor2, 공개 draft58/review1/ready0, M5 전체·소유자·R26·공개 전 승인 경계를 유지합니다.

Fix Round 2의 fresh 정적 검사는 exit0·tests155/pass155/fail0, 공개59개, 참조190개·SVG14개, 계획100점·중복0·누락0입니다. 공개 안전 검사는 exit0·tracked/scanned259·finding0, 로컬 시각 증거를 포함한 행렬 검사는 exit0·errors0입니다. `git checkout-index`로 만든 정확한 HEAD+index 스냅샷에서도 기본 행렬 검사가 exit0·errors0이고 cached diff check는 exit0입니다. Runtime·공개 자산 불변이므로 앞서 통과한 build와 브라우저 검증은 반복하지 않았습니다. 최초 sandbox stage는 index.lock 쓰기 권한 때문에 실패했고, 승인된 Git index 쓰기 경로에서 같은 세 파일만 stage해 성공했습니다. 네트워크 조사·Claude 호출·외부 쓰기는 실행하지 않았습니다.

## 2026-09-12 Task22 R01 controller closeout

Input commit `7e6226b`의 고정 입력을 fresh `gpt-6-astra`/`high` reviewer가 읽기 전용으로 검토했고 result commit `b163d4f`에 canonical `PASS` C0/I0/M2·루브릭17/18·치명 항목0·텍스트27/27·문맥 발췌17/17·PNG12/12·`view_image`12회만 사용한 결과가 보존됐습니다. Controller는 R01-M01·M02를 모두 `수용·현행 유지(비차단 Minor)`로 100% 재판정하고 같은 원고 위치의 open Minor로 남겼습니다. Critical·Important는0건이며 본문 의미와 SVG/MMD·출처·요청서가 불변인 frontmatter-only 전이이므로 재검토는 `not-required-metadata-only`입니다. Closeout 후보의 첫 독립 검토는 `NEEDS CHANGES` C0/I2/M0으로 R01 미실행 stale 문구·모호한 CLI 호출 수 필드와 R02 이후 공유 문서 상태 변경 오탐을 지적했습니다. Fix Round 1은 행렬과 CLI를 R01 done/R02~R26 pending으로 정렬하고, 역사 request의 발췌·SHA는 고정하면서 현재 공유 문서는 R01이 실제 읽은 segment와 R01 관련 전이만 대조하도록 좁혔습니다. 같은 reviewer의 I01·I02 재검토는 아직 남아 있습니다.

최초 TDD RED는 closeout 상태를 요구하는 새 테스트가 기존 `pending` 상태에서 `pending !== done`으로 exit1·1/0/1이 된 것을 확인했고, 구현 뒤 같은 테스트는 exit0·1/1/0으로 GREEN이 됐습니다. Fix Round 1 RED는 stale R01 문구를 거부하지 않고 R02 콘텐츠 상태·집계 및 R02 계획 체크만 바꾼 후보를 공유 문서 full-file hash 불일치로 거부해 exit1·2/0/2였으며, 최소 구현 뒤 같은 두 테스트는 exit0·2/2/0으로 GREEN이 됐습니다. `npm run sync:content-map`은 공개59개의 상태를 draft58/review1/ready0으로 동기화해 exit0이었습니다. Fix Round 1 focused M5 tests는31/31, 기본 행렬과 `--local-evidence` 검증은 각각 rows26·public59·input-fixed R01·completed Codex R01·`historicalClaudeModelCallCount`0·errors0입니다. 최초 후보의 `npm run check`는 tests153/153·public59·references190+SVG14·plan100/59/0/0·build60·Pagefind60·built-output 오류0이었고, Fix Round 1은 runtime·public asset을 추가 변경하지 않아 build를 반복하지 않았습니다. Fix Round 1의 fresh `npm run check:static`은 tests155/155·public59·references190+SVG14·plan100/59/0/0, exact staged `npm run validate:release`는 tracked/scanned259·forbidden0·binary0·finding0으로 모두 exit0입니다. 최초 build에는 `site` 미설정으로 sitemap 생성을 건너뛴다는 nonblocking warning1이 있었고 실패는0건입니다.

원고의 검토 전 SHA는 `d9569195713fd0db9201af1d18c141ab4a9836eca3980bc4905b2b46374aea2e`, frontmatter 전이 뒤 SHA는 `f086dc056630893c03b2a8c1a98304063bf1053eef26b25da7b587ae038bbc3d`, result SHA는 `e56086d11ee3fcd8d92070a70778105c92a8d7f69fa0b9feb278a2040c6abeca`, adjudication SHA는 `1e9f83f1663a189a4db41b8b08d89a9946244d3b431095cbbc40228ae9f3f3db`입니다. 초기 reviewed request SHA `808ca9a88841c037d29fd2d46089f0b0cbe9ef1306639e56c8399e284f01a8ca`와 framed combined SHA `5750e879649ddff967f7f09d932b74c82017d81497086e176c5bc79177224f89`는 역사 묶음으로 유지했습니다. R01은 `done`·release-ready false이고, R02~R26은 pending/not-fixed입니다. M5 전체·소유자·R26·M6/M7·push·배포·공개 URL은 승격하지 않으며 다음 재개점은 R02 input freeze입니다.

## 2026-09-05 Task22 Codex 검토 계약 상태 closeout

푸디님의 DEC-PB-009 결정에 따라 선행 커밋 `c9e83a9`에서 앞으로의 M5 계약을 R01~R25 fresh Codex 행별 읽기 전용 검토와 분리된 R26 fresh Codex 통합 검토로 전환했습니다. 계약 개정의 최초 독립 검토 `NEEDS CHANGES` C0/I5/M1, Fix Round 1 재검토 C0/I2/M0 뒤 Fix Round 2에서 모든 Critical·Important를 해소했고 같은 reviewer가 최종 `PASS` C0/I0/M0·commit-safe Yes로 판정했습니다. 현재 controller가 결과를 정본 경로에 저장하고 100% 재판정하며 Critical·Important가 남으면 같은 reviewer에게 좁게 재검토받는 조건입니다. 과거 Claude·Opus·auth·subscription 기록은 호출0건·유효 PASS 없음의 역사이며 현재 blocker나 재개 조건이 아닙니다.

이번 상태 closeout의 focused M5 계약 테스트는15/15, 행렬 검증은 rows26·allocatedPublicInputs59·modelCallCount0·errors0, 정적 검사는139/139·content59·references186+SVG14·plan100/59/0/0, 공개 안전 검사는 tracked/scanned255·finding0, JSON parse와 staged diff check는 모두 exit0으로 확인합니다. M5-02~04·R01~R26은 pending·입력 not-fixed·검토/결과/재판정 not-run·finding not-assessed이고 public59 draft/ready0, score81.5, 감사57/2 C0/I2, source gap22/4 C1/I3, M6-03·M7은 승격하지 않습니다. 생산 입력이 바뀌지 않아 build·브라우저·네트워크·Claude는 실행하지 않습니다.

## 2026-09-05 Task22 인증 preflight 상태 closeout

선행 커밋 `2c0215ee01f31f4bbf0dcfb1f2ffe81ab87d7830`의 비모델 인증 사전 확인을 최신 권위 상태 문서에 동기화했습니다. Claude Code는 이전 2026-08-28 기록의 `2.1.247`에서 로컬 `2.1.252`로 바뀌었고, 실행 파일 mtime은 `2026-09-02T01:07:02+0900`, SHA-256은 `b661c6a094fcc32656bf7c0071c5b45bf900b34d4f0a1ab3d78fd59aeba2c2c7`입니다. 새 도움말에는 Extra usage 또는 정확한 모델·1M 구독 자격을 비민감하게 입증하는 옵션이 없었습니다. 검사한 API·토큰·대체 제공자·프록시 환경 변수 이름은 모두 없었으나 이것은 모든 과금 경로 부재의 증명이 아닙니다.

필터된 샌드박스·승인 호스트의 인증 조회는 모두 `loggedIn=false`·`apiProvider=firstParty`·구독 유형 필드 없음이었고, 승인 호스트 명령은 `pipefail` exit1이었습니다. 원시 출력·auth method·projectsDirectory 값·계정 식별자·비밀은 기록하지 않았습니다. 현재 직접 차단은 `auth`이며, 푸디님이 동일 구독 계정 로그인을 직접 복구한 뒤에도 정확한 Opus4.8·1M·`high`의 구독 포함 사용과 구독 외 과금 비소비를 별도로 입증해야 하므로 `subscription_unverified` 후속 경계는 남습니다. 모델 호출·시험 호출·R01~R26 실행은0건이고 입력 `not-fixed`, 호출/결과 `not-run`, 설정 `not-confirmed`, finding `not-assessed`, release false를 유지합니다. M5-02~04·M5 전체·소유자·M6-03·RC·공개 상태와 인정 점수81.5, 공개59 `draft`·`ready`0은 승격하지 않았습니다.

선행 구현의 TDD RED `1 !== 2` 뒤 focused9/9, 행렬 rows26/public59/modelCallCount0/errors0, 정적133/133·content59·references184+SVG14·plan100/59/0/0, 공개 안전 tracked/scanned253·finding0, `git diff --check` exit0과 독립 검토 `Approved` C0/I0/M0을 확인했습니다. 이번 상태 회계 확인은 manifest tests133, score81.5, M5-01 done, M5-02~04 pending0, public draft59/ready0, 현재 blocker `auth`와 후속 `subscription_unverified`, 모델 호출0을 기계적으로 대조했습니다. build·브라우저·네트워크·Claude·설치·외부 쓰기는 실행하지 않았습니다.

## 2026-09-05 Task22 Step1 상태 closeout

검토 계약·R01~R26 행렬과 구독 전용 차단 경계를 고정한 구현 `54a5e38`은 독립 Fix Round 1에서 `PASS` Critical0·Important0·Minor0으로 판정됐습니다. 해당 구현의 정적 검사132/132를 근거로 M5-01만 `done`1.0/1.0으로 닫고 인정 점수를80.5점에서81.5점으로 갱신했습니다.

M5-02~04와 Claude R01~R26은 `pending`·`blocked/subscription_unverified`이며 입력 `not-fixed`·호출/결과 `not-run`·실제 설정 `not-confirmed`·finding `not-assessed`·모델 호출0건입니다. 공개59개 `draft`·`ready`0, 콘텐츠 감사 conform57·needs_edit2·C0/I2/M0, source gap confirmed22·not-confirmed4·C1/I3/N0을 유지하고 M5 전체·소유자 승인·M6-03·RC·원격 CI·push·배포·공개 URL·태그·릴리스를 완료로 올리지 않습니다. 이번 상태 closeout의 JSON 파싱은 `manifest-ok`·exit0, `npm run check:static`은 테스트132/132·공개59·참조183+SVG14·계획100/59/0/0·exit0, `npm run validate:release`는 tracked/scanned235·finding0·exit0, `git diff --check`는 exit0으로 통과했습니다. build·브라우저·네트워크·Claude 호출은 실행하지 않았습니다.

## 2026-09-05 Task20 사후 감사 정합성

선행 커밋 `adbadb2`의 현재 콘텐츠 감사 집계와 회귀 증거를 권위 상태 문서의 최신 항목에만 동기화했습니다. 공개59개는 conform57·needs_edit2이며 현재 finding은 Critical0·Important2·Minor0입니다. 남은 현재 콘텐츠 finding은 PB-053의 PBCA-011과 PB-058의 PBCA-007이고, source gap confirmed22/not-confirmed4·미확인 위험 C1/I3/N0은 변동하지 않습니다.

이 상태 문서 갱신 뒤 `npm run check:static`은 정적130/130·exit0, `npm run validate:release`는 tracked/scanned234·finding0·exit0, 대상 파일 `git diff --check`는 exit0으로 통과했습니다. 생산 입력은 바꾸지 않았으므로 build·브라우저·네트워크 검증은 실행하지 않았으며, 인정 점수80.5·public draft59/ready0, M5 `blocked/subscription_unverified`·호출0, 소유자·RC·원격·배포·공개 경계와 과거 감사 이력은 유지합니다.

## 2026-09-05 Task21 dedicated closeout

Task21 누적 구현·증거 커밋 `16ca9e6`·`bbc7dc8`·`059bc02`·`11e1436`·`94267b1`·`f9b2cb0`·`9fba98b`·`1ea9e53`·`b07de5c`·`39ce436`을 전체 패키지로 검토했습니다. 수정 후 공개59경로의150페이지 상태와68시각 조합은 최종 실패·누락0이고, 검색12고유어×2폭, 소비 문맥 링크3×2폭, 사이드바17목적지×2폭, 기본404복구2폭, 대표 표3경로×2폭×2테마, `/handbook/` HTML60·내부 링크4036·favicon60·CSS157·SVG17·script275·오류0을 보존합니다. 과거 검색·키보드·표 실패와 API 상세 모바일 원본 crop2개의 잘림은 삭제하지 않고 최종 성공·same-pixel 보충과 분리했습니다.

데스크톱은 최초 로드부터 실제 OS 키보드로 native theme을 왕복했고, 모바일은 포인터 없는 Tab 도달 source14와 같은 nonce/탭의 실제 OS `Up`·`Return` 선택 source15를 상관된 두 구간으로 확인했습니다. 모바일 select의 포인터 초점 설정을 숨기지 않으며, 최초 로드부터 선택 완료까지 포인터 없는 단일 OS end-to-end 흐름은 `not-confirmed`로 유지합니다. 두 Retina 780×1688 JPEG는 CSS viewport390×844와 구분합니다. current-input drift의 non-dist 고유 경로는5개이며 CONTENT_MAP 비런타임 변경, QA-BASE 원고, 가상 진단 표기, Task20 자산 문맥, QA-TABLE CSS의 각 후속 검증과 연결됩니다.

fresh 집중 계약 테스트23/23·실패0·exit0, 정본 verifier `valid_partial_lineage`·errors0·exit0, `npm run check:static` 테스트129/129·공개59·참조183+SVG14·계획100/59/0/0·exit0, build HTML60·학습SVG14·Pagefind60·exit0, 공개 안전 tracked/scanned233·finding0·exit0을 확인했습니다. 검증 Task Space와 preview 포트는 정리했습니다. 독립 전체 패키지 검토는 `PASS`, Critical0·Important0·Minor0이며 Task21과 M4-03~05 closeout을 수용했습니다. 이에 M4 전체는 `done`, 인정 점수는74.5점에서80.5점입니다. M5 Claude `blocked/subscription_unverified`·호출0, 공개59 `draft`·`ready`0, M5·소유자 승인·M6-03·RC·원격 CI·push·배포·공개 URL·태그·릴리스 미완료를 유지합니다.

## 2026-08-30 Task24 dedicated closeout

Exact HEAD `0d281da3ce8d3de5c02c6430efacc3872cbbbed3`·tree `f3d7ac51f832edf8497bb23e3a7ab7115584d12e`의 Task24 패키지 계약은8/8·실패0, 전용 검증은 Issue YAML4·폼3·고유 입력ID20·필수 안전 옵션6·로컬 링크34·버전4·라이선스 해시2·실패0입니다. 정적 검사는122/122·공개 콘텐츠59·참조163+학습 SVG14·계획100점/공개59/중복0/누락0, 공개 안전은 tracked/scanned227·forbidden0·binary0·finding0으로 모두 exit0입니다.

CC BY4.0과 MIT 원문 SHA-256, 경로별 정책, 제3자 고지와 운반, README 상태, CONTRIBUTING·SECURITY·PR·Issue Forms, source-map과 현재 권리 판정을 독립적으로 다시 대조한 전체 패키지 검토는 Critical0·Important0·Minor0 `PASS`·Task24 로컬 close 가능입니다. 직전 성공 build 뒤 생산 입력 변경0이므로 build·브라우저를 반복하지 않았고 실제 GitHub Issue Forms 서비스 적용·PVR 활성화·UI·원격 CI를 실행했다고 주장하지 않습니다.

이에 Task24는 `done / implementation verified / Claude review pending`, M6-02는 `done`1.5/1.5, 인정 점수는74.5점입니다. 현재 권리 미판정은0개이지만 M6 전체·M6-03·Task26 전체·M5·`ready`·최종 release/publication 소유자 승인·canonical RC·새 공개 root snapshot·원격 Actions·push·배포·공개 URL은 완료가 아닙니다.

## 2026-08-30 Task20 dedicated closeout

Task20의 PBV-03 분할·Fix Round 1과 후속 11개 시각 자산은 각각 구현·최소 자동 검사·실제 headed Chrome 검증·별도 Codex 검토 C0/I0/M0·독립 로컬 커밋을 마쳤습니다. 후속 자산의 최종 Chrome 증거는 PBV-02 12상태, PBV-06 18상태, 나머지 9개 각 6상태인 총84상태이며 HTTP·H1·draft 배지·네 테마 필드·SVG·title/desc·marker·핵심/보조 레이블·잘림·겹침·전역 overflow·제한된 실제 내부 scroll·console warning/error·pageerror·외부 요청과 전체/원본 다이어그램/상단/인접 문맥 이미지를 확인했습니다. 자산과 소비 원고 byte가 이 검증 뒤 바뀌지 않아 동일 Chrome 검증은 반복하지 않았습니다.

2026-08-30 현재 Node.js22.16.0·npm10.9.2에서 콘텐츠 지도 sync는 변경 없음, `npm run check:static`은 테스트115/115·공개59·참조178+SVG14·계획100/59/중복0/누락0, build는 HTML60·최적화 SVG14·Pagefind60, built-output 검사는 리터럴 Markdown0·고지 byte 일치, release 검사는 tracked210·finding0, `git diff --check`는 통과했습니다. 기존 `site` 미설정 sitemap 안내1건만 비차단 경고로 남습니다. 개별 검토 시점에는 고정 입력515개가 모두 일치했고 closeout 후보 감사 문서 갱신 뒤에는 감사 문서 경로만 11개 단위에서 기대 해시와 달랐으며 그 밖의504개 입력은 일치했습니다. 최초 합동 closeout은 이 자기참조 경계의 부정확한 문구 때문에 `NEEDS CHANGES` C0/I1/M0이었고, 문구를 고친 Fix Round 1을 같은 리뷰어가 I01 `RESOLVED`·`PASS` C0/I0/M0으로 판정했습니다.

PBVA-001~005는 모두 해소됐고 M4-01은 `done`2.0/2.0, M4-02는 `done`3.0/3.0, 현재 인정 점수는66.5점에서71.0점입니다. Task20 상태는 `implementation verified / Claude review pending`이며 Claude는 `blocked/subscription_unverified`·호출0을 유지합니다. Task21·M4-03~05, M5 R01~R26, `ready`, 소유자 승인, RC, release, push, deploy, publication, public URL은 이 closeout으로 완료되지 않습니다.

## 2026-08-30 Task25 공개 안전 검사기 Fix Round 1 체크포인트

최초 후보의 stage 전 working tree 기준은 Node22.16.0 검사기 경계 테스트37/37과 tracked/text220·binary0·finding0이었습니다. exact 15파일 staged diff의 최초 독립 검토는 `NEEDS CHANGES` C0/I2/M1로, 상대 파일명에서 session·organization ID·정확 비용·개인 경로 등이 raw 출력될 수 있고 금지 디렉터리의 tracked 파일을 조용히 제외해 fail-open이 가능하며 220과 확정 staged222 기준이 혼동된다고 지적했습니다. 두 계약을 회귀 테스트로 먼저 실패35/38로 재현한 뒤 모든 지원 민감 패턴을 파일명에도 적용하고 금지 경로 tracked 파일은 내용을 읽지 않은 채 `forbidden-tracked-path` finding으로 차단했습니다. exact `HEAD + index` 격리 스냅샷의 fresh focused 검사는38/38·실패0·exit0, 공개 안전 검사는 tracked222·scanned222·forbidden0·binary0·finding0·exit0, 정적 검사는110/110·실패0·content59·references159+SVG14·plan100/59/중복0/누락0·exit0입니다. 같은 리뷰어는 I01·I02를 각각 `RESOLVED`, Fix Round1을 `PASS` C0/I0·safe-to-commit Yes로 판정했고 ignored append-only 보고서 SHA-256은 `c63d6841a9e9b46fffbdc7b7ac36734286bd7d6d2cdcc6207b9f3069a0e2b4bf`입니다. 이 체크포인트 범위는 값 자체를 출력하지 않는 검사기·테스트·`validate:release` 연결과 실제 finding이 재현된 과거 검토7파일의 session ID9개·정확 비용9개 표식 치환뿐이며 상태는 `implementation verified / Claude review pending`입니다. RIGHTS-01~08·Task25 전체·M6·Claude·ready·owner·RC·release·push·deploy·publication·public URL의 PASS는 아닙니다.

## 2026-08-30 Task25 dedicated closeout

Exact HEAD `c6a2ffabc0628e5d48810b21e0a1c0dd1bd1087d`·tree `2357166fffd520dd105819e669a29c7432c5d4fc`의 closeout 계약은10/10·실패0, focused 공개 안전 회귀는38/38, 전체 정적은122/122, 콘텐츠59, 참조163+학습 SVG14, 계획100점·공개59·중복0·누락0, 공개 안전은 tracked/scanned227·forbidden0·binary0·finding0으로 모두 exit0입니다. 최초 closeout 계약9/10은 역사 `open` 보존 문장까지 현재 판정 표로 읽은 하네스 범위 오류였고, 표만 파싱하도록 교정했습니다.

첫 `npm run check`는 같은 exact 사본의 `node_modules` symlink가 Astro/Vite compile metadata 경로를 원 worktree와 임시 경로로 이중 해석해 정적122/122 뒤 build exit1이었습니다. 동일 설치본을 실제 디렉터리로 복사한 exact 사본에서 build만 fresh 재실행해 HTML60·최적화 SVG14·Pagefind HTML60·exit0을 확인했고 `validate:built`는 일반 본문 리터럴 Markdown0·정본/빌드 고지 byte 동일·exit0입니다. 화면 입력이 불변이므로 브라우저를 반복하지 않았습니다.

독립 검토자가 현재 HEAD의 검사기·회귀·고지·RIGHTS-01~08·이력 전략을 별도 exact 사본에서 재검증해 closeout 계약10/10, 공개 안전/고지 focused44/44, 정적122/122, 공개 안전227/227 finding0, build60/Pagefind60, 고지 SHA-256 `ccd611bad94a102a98d2119d04f3ff759a735effd357a7cc40aa7cc66197c54a` 양쪽 일치와 `PASS` C0/I0/M0·Task25 단독 close 가능을 판정했습니다. 현재 권리 미판정은0개이고 과거 `open/not-confirmed`는 연구 이력으로 남습니다. Task25는 `done / implementation verified / Claude review pending`, M6-01은 `done`2.0/2.0, 인정 점수는73.0점입니다. M6 전체·M5·ready·최종 release/publication 소유자 승인·canonical RC·원격 CI·새 공개 root snapshot·push·배포·공개 URL은 완료가 아니며 M7 외부 쓰기 직전 실제 canonical RC의 고지·배포·Pagefind 검색을 다시 확인합니다.

## 2026-08-30 Task26 Step1 공개 workflow 게이트 Fix Round 1 체크포인트

exact `HEAD + index`에서 focused workflow 계약2개·base-path fixture2개, 정적110/110·콘텐츠59·참조160+SVG14·계획100/59/0/0, 공개 안전 tracked/scanned223·forbidden0·binary0·finding0, cached diff-check를 모두 exit0으로 확인했습니다. CI와 deploy는 `npm ci`→`npm run check`→`npm run validate:release`를 실행하고 release 성공 뒤에만 artifact를 업로드합니다. 최초 독립 검토 `NEEDS CHANGES` C0/I1/M0의 build job Pages/OIDC write 권한 상속은 job별 유효 권한 테스트 RED(exit1) 뒤 workflow 기본 `contents: read`·deploy job 전용 `contents: read`/`pages: write`/`id-token: write` GREEN(exit0)으로 교정했고, 같은 리뷰어가 I-01을 `RESOLVED`, Fix Round1을 `PASS` C0/I0/M0·safe-to-commit Yes로 판정했습니다. 화면·런타임 콘텐츠는 바뀌지 않아 브라우저를 반복하지 않았습니다. `npm ls --depth=0 --json`은 직접 의존성2개와 exit0을 확인했지만 플랫폼 보조 패키지7개가 extraneous이므로 clean canonical RC·Task26 Step2~5·M6/M7·M5·ready·owner·원격·배포·공개 PASS로 확대하지 않습니다.

## 2026-08-30 Task21 QA-BASE-001 체크포인트

하위 경로 실패 빌드 a1에서 `dependencies-package-managers-environments.md`의 root-absolute 내부 링크4개가 `/handbook/` 밖으로 이탈한 사실을 재현했습니다. 원고는 같은 목적지를 가리키는 상대 링크4개만 바꾸고, built-output 검증기는 HTML page path를 기준으로 상대 URL과 `..`를 정규화해 base 이탈을 차단하도록 좁게 확장했습니다. 회귀 테스트는 기존 RED9개 중3실패에서 GREEN으로 전환했으며 현행 focused는16/16·실패0·exit0입니다.

exact `HEAD + index` 격리 스냅샷에서 실제 `node_modules` 사본을 사용한 root와 `PUBLIC_SITE_URL=https://example.github.io PUBLIC_BASE_PATH=/handbook` 전체 `npm run check`는 각각 테스트115/115·공개59·참조160+SVG14·계획100/59/중복0/누락0·HTML60·Pagefind60·built-output 경로 오류0·고지 byte 일치로 exit0입니다. 성공 빌드 a2의 `/handbook/` HTML60·내부 링크4036·favicon60·CSS157·SVG17·script275·경로/존재 오류0 증거 뒤 검증 대상 source/runtime blob이 바뀌지 않아 브라우저를 반복하지 않았습니다. 첫 exact root 검증은 temp snapshot의 `node_modules` symlink가 real worktree compile metadata 경로를 노출해 build exit1이었고, 첫 공개 안전 검사는 그 symlink를 임시 index에 잘못 넣어 forbidden1·finding1·exit1이었습니다. 두 임시 구성 문제를 후보 실패와 분리해 보존하고 symlink를 제거한 뒤 공개 안전 tracked/scanned223·forbidden0·binary0·finding0·exit0 및 cached diff-check exit0을 확인했습니다.

exact staged 5파일의 path SHA-256은 `c6d62ec92f9f30c4b905ba117fa3a9ad631a1dae372bce1192abff0162a9715a`, cached diff SHA-256은 `6d58fc11b603ab70f7b31a185a1f308e254b5d01944dacb7b6a5a2583c5de224`였고 현재 index blob과 검증 snapshot blob은 모두 일치했습니다. 같은 리뷰어의 독립 검토는 `PASS` C0/I0/M0·safe-to-commit Yes입니다. 이 단위는 `implementation verified / Claude review pending`이며 `QA-TABLE-001`·`QA-KEYBOARD-001`·Task21 전체·M4-03~05·M5·ready·owner·RC·원격·배포·공개 PASS가 아닙니다.

## 2026-08-30 Task21 QA-TABLE-001 체크포인트

이전 CSS의 실제 Chrome baseline은 `/01-mental-models/developer-thinking/` 390×844 light 첫 열 폭38.75px·내용 폭22.75px·글자15.04px에서 `구분`·`사실`·`가정`·`제약`이 각각2줄로 갈라져 실패했습니다. computed `overflow-wrap`·`word-break`는 normal이므로 특정 줄바꿈 속성을 원인으로 단정하지 않았습니다. 50rem 이하 `.sl-markdown-content`의 `th`, `td`에 `min-width: 8rem`을 주는 CSS 한 규칙만 추가했고 원고·컴포넌트·정보 구조·데스크톱 규칙은 바꾸지 않았습니다.

현재 exact CSS SHA-256 `2236f2a8a9b30515cb641d48de7089d15590834766ada3f60de9f649ef36c137`과 세 소비 원고 hash는 수집 입력과 일치합니다. `/01-mental-models/developer-thinking/`, `/01-mental-models/abstraction-and-tradeoffs/`, `/reference/current-tool-mapping/`의 390×844/1440×1000×light/dark 실제 Chrome 회귀는12/12 success·고유12·HTTP200·네 theme 값 일치·document/body overflow0·browser event0·failure0입니다. 모바일 내부 이동은 각 양테마에서26·154·507px 끝에 도달했고 데스크톱 여섯 상태는 이동0, 짧은 레이블8개는 모두 한 줄입니다. `table-probes.jsonl`13행·helper·PNG24·raw13의 경로와 hash를 재확인하고 reviewer가 baseline·regression 원본을 직접 보았습니다. 오른쪽 PNG는 표 내부 스크롤 뒤 상태이며 모든 행·셀을 전수 판독했다는 주장은 하지 않습니다.

exact `HEAD + index` CSS 한 파일의 staged path SHA-256은 `a29da3732d4cd657b6c4117eae36a33a6c7ffdca731570b655a1c70e48746420`, cached diff SHA-256은 `933a81089f4baf4d08e1116b1327ee071c2a684e8ac21f01320ce2f3189a5e52`, index/snapshot blob은 `3cc6d950d70eaf9f28287d49ecf5633c8b880439`로 일치했습니다. fresh 정적 검사는115/115·실패0·content59·references160+SVG14·plan100/59/0/0·exit0, 공개 안전 검사는 tracked/scanned223·forbidden0·binary0·finding0·exit0, diff-check는 exit0입니다. 관련 입력 불변으로 full build와 브라우저를 반복하지 않았고 같은 리뷰어는 `PASS` C0/I0/M0·safe-to-commit Yes로 판정했습니다. 이 단위는 `implementation verified / Claude review pending`이며 네이티브 키보드 표 스크롤·`QA-KEYBOARD-001`·Task21 전체·M4-03~05·M5·ready·owner·RC·원격·배포·공개 PASS가 아닙니다.

## 2026-08-30 Task21 Step1 참조 검사 범위 교정 체크포인트

비공개 `.superpowers` 조사 원문·발췌가 공개 Markdown fragment 검사에 섞여 실패한 과거 Node22 전체 검사106/107·exit1·build 미실행을 보존했습니다. 기존 `.git`·`.worktrees`·`node_modules`·`dist` 제외 집합에 `.superpowers` 한 항목만 추가하고 실제 CLI가 그 아래의 누락 fragment fixture를 공개 참조 오류로 세지 않는 회귀 한 개를 추가했습니다. `.superpowers/**` tracked Markdown은0개이고 권위 계획·명세인 별도 `docs/superpowers/**` tracked14개와 공개 문서·SVG 검사는 계속 포함되며, `.superpowers`가 tracked되면 공개 안전 검사가 forbidden path로 차단합니다.

exact2 staged path SHA-256은 `750ce1b8fbb306366e1d8d552cefc0c92a9f576ead37b403044d02315a790774`, cached diff SHA-256은 `75decb149a5f2a57ce032ebf1ae48023014c85680e57019fd04e429eb75ec9cf`이고 index/snapshot blob2/2 mismatch0입니다. fresh focused2/2·정적116/116·content59·references160+SVG14·plan100/59/0/0·공개 안전 tracked/scanned223·forbidden0·binary0·finding0·diff-check가 exit0이며 독립 검토는 `PASS` C0/I0/M0·safe-to-commit Yes입니다. runtime·원고·CSS·자산 불변으로 build/Chrome은 반복하지 않았고 Task21 전체·키보드·M4-03~05·Claude/M5·ready·owner·RC·원격·배포·공개 PASS가 아닙니다.


## 2026-08-30 실행 승인 경계

현재 branch `codex/public-beta-completion`·HEAD `eacf0264268f9b4dcf1dfa4e95399c7df3c5957c`, tracked 수정65·untracked36·staged0, 검토 입력16단위 해시 불일치0을 재확인했습니다. 기존101개 변경은 보존하며 reset·restore·stash·덮어쓰기·삭제하지 않습니다. 공개·비민감 공식 원문 읽기 전용 조사, 잠금 파일의 정확한 버전만 쓰는 로컬 의존성 복원, 기존 자동 검사·빌드·preview·localhost Chrome 검증은 승인됐습니다.

Claude는 정확한 Opus4.8/1M/high의 구독 포함 사용량과 구독 외 과금 비소비가 입증될 때까지 `blocked/subscription_unverified`·호출0을 유지하며 M5·`ready`·소유자·공개 게이트를 막습니다. 다만 구현·필수 자동/브라우저 검증·작성자와 분리된 Codex 작업 검토를 통과하고 안전하게 분리되는 단위는 `implementation verified / Claude review pending` 로컬 체크포인트로 커밋할 수 있습니다. push·원격 브랜치·Pages·릴리스·실제 공개와 프로젝트 라이선스·핵심 패키지/구조 결정은 승인되지 않았습니다. 아래 2026-08-28 검증 수치는 입력이 바뀌지 않은 범위의 기존 증거이며, 이번 정책 반영 뒤 필요한 정적·계획·안전·diff 검사는 별도 실행 결과로 갱신합니다.

## 2026-08-28 후속 독립 작업 체크포인트

고정 crate/Rust 원문 후속: source-lock 후보21개의 선언·39개 고지·추가 소스 등을70파일로 보존했고, pagefind_microjson GPL 버전/배포 범위의 RIGHTS-07과 추가 고지 범위 RIGHTS-08을 Important/open으로 기록했습니다. 원문70개 지문·수신 텍스트 대조, source의 직접 parse 사용·실제 WASM export를 확인하되 정확한 함수 본문 대응·권리 완료로 확대하지 않습니다. 기존 runtime/고지/dist는 불변이며 원문 조회만 승인받았으므로 설치·Rust/WASM 실행·사이트 build·Chrome·Claude·커밋은 하지 않습니다. 새 기록의 필수 정적/안전 검사와16단위 검토 입력 해시는 ignored resume-checkpoint-2026-08-28-crates.json을 따릅니다. 아래 원전/고지/CSS 기록은 앞선 실행 증거입니다.

WASM·아이콘 원전 연결 후속: CSS SVG15회·원문10개 모두 직접 소스에 연결했고 고정 Pagefind component CSS41,830bytes/설치 default Svelte16,473bytes의 전체 일치를 확인했습니다. 별도 web Cargo.lock22항목과 실제 WASM producers(rustc/walrus/wasm-bindgen)를 보존했습니다. 최초 저작자·이전 라이선스, 실제 crate/feature·std 포함 및 고지 연쇄는 미확인이므로 RIGHTS-03/04 전체를 닫지 않습니다. 새 내용은 기록 문서와 ignored 증거에만 반영하며 public 고지·원고·자산·런타임·dist는 유지합니다. 이번 문서 변경에 필요한 Node22 check:static·안전 검사·입력16단위 해시·diff 결과는 ignored resume-checkpoint-2026-08-28-origin.json에 보존하며 새 build/Chrome/Claude 검증으로 계산하지 않습니다. HEAD·stage0·Claude blocked/subscription_unverified·ready0 경계는 그대로입니다. 아래 배포 고지 검증은 앞선 실행의 증거입니다.

배포 고지 전달 후속: 실제 dist171파일과 설치/공식 원문을 대조해 확인 고지15개를9구획으로 묶은 `public/third-party-notices.txt`를 추가했습니다. 원문15구간의 SHA·byte 보존을 확인했고, 누락·빈 파일·내용/줄바꿈/디코딩상 같은 서로 다른 byte를 거부하는 실제 CLI 테스트는 RED6실패→GREEN16/16입니다. 새 Node22 `npm run check`는115/115테스트·콘텐츠59·참조178+SVG14·계획100/59/중복0/누락0·build/Pagefind60·HTML60/literal0/고지 byte 일치, exit0입니다. 기존 sitemap warning1·404 entry notice는 유지합니다. 기존 dist171개는 모두 동일하며18,360bytes의 고지1개만 추가돼172개입니다. 실제 localhost4350 Astro preview에서 HTTP200·text/plain·원본 byte 일치(SHA `bf847cf82a424cad890e1d9caf9a11038026b7ea9a538515678cae691504c2d9`)를 확인했습니다. 첫 sandbox listen/connect EPERM은 별도 승인 후 성공과 구분했고, 전용 preview 두 PID는 정상 종료·부재 확인했습니다. UI bytes가 바뀌지 않아 Chrome·기존150상태 검증을 반복하지 않았습니다.

이것은 확인된 고지의 전달 검증이며 RIGHTS-03/04 전체·권리 완결성·독립 검토 PASS가 아닙니다. WASM crate/feature·아이콘/CSS SVG 이전 출처·일부 UI 전이 포함물/provenance·기여/인용 권리는 남습니다. Claude는 blocked/subscription_unverified·호출0, stage/commit/외부쓰기도0입니다. 새 기록 뒤 참조·안전 검사·입력16단위 해시·diff만 최종 확인하며 ignored `resume-checkpoint-2026-08-28-distribution.json`과 `distribution-fullcheck-log.json`에 실제 결과를 보존합니다. 아래 같은 날 기록은 이 후속 전의 이력입니다.

Pagefind 후속 승인 범위의 공식 원문 확인: v1.5.2 commit `bf17396721be637cc67c8ed7ead1dc7b8ac43d96`의 MIT 전문·default-ui 선언·버전 치환·번들 경로를 확인했고 Node wrapper 고지2개는 설치본과 byte 일치합니다. RIGHTS-04의 원문 미확인 부분만 해소했으며 RIGHTS-03/04 전체·필수 검토·배포 고지 충족은 대기입니다. [제3자 고지](THIRD_PARTY_NOTICES.md)·[출처 지도](research/source-map.md)·[안전 감사](docs/project/reviews/public-beta-1/release-safety-audit.md)에 반영하고 raw6개를 보존했습니다. 이 후속은 원고·SVG/MMD·CSS·dist를 바꾸지 않는 기록 작업이며 새 build/Chrome/Claude 검증은 수행하지 않습니다. 실제 최종 문서 검사·입력 해시 결과는 ignored `resume-checkpoint-2026-08-28-pagefind.json`으로 이어갑니다.

같은 날 후속 Task25 자체 감사: 기존42전문+17발췌 중17개 미열람4,875행을 기존 작성 담당 Codex가 추가 확인했습니다. 누적59개 전문 수동 열람이며 부모가 정확17경로·구간의 누락/중복0·전체59원고의 현행 해시 일치를 확인했습니다. 외부 원전 대조와 권리 PASS는 아니며 ADR 표·템플릿의 R17-C01을 비교 후보로 추가하고 기존 RIGHTS-01~06·두 후보·Claude 차단을 유지했습니다. 공개 원고·그림·CSS·dist는 바꾸지 않아 전체 빌드·브라우저·Claude preflight를 반복하지 않습니다. 상세는 [안전 감사](docs/project/reviews/public-beta-1/release-safety-audit.md)와 입력 원장의 보충 보고서이며 후속 체크포인트는 ignored `resume-checkpoint-2026-08-28-rights-followup.json`입니다.

HEAD `eacf0264268f9b4dcf1dfa4e95399c7df3c5957c`·브랜치 `codex/public-beta-completion`를 유지하며 stage·새커밋·외부쓰기는 없습니다. 원래 PBV02 SVG/MMD bytes는 불변입니다. Task20 후속11자산은 구현·84개Chrome최종상태까지 검증했고 필수 독립 검토는 전부 blocked/subscription_unverified입니다. 검토 생략·Codex 대체·closeout·ready 승격은 하지 않았습니다.

| 범위 | 새 실제 증거 | 남은 경계 |
|---|---|---|
| Task21 사이트 QA | 수정후150페이지/68시각 자동 검사, 표12상태, 검색24·소비링크6·사이드바17목적지씩2폭·404복구2. 원래300페이지시도·상호작용41시도·표13시도와 실패 보존. API상세 모바일crop2개의 새 잘림은 원본보존/실제viewport+samepixelcrop2쌍으로 보충. | keyboard-theme2상태는not-confirmed, OS UI진단timeout. [상세 QA](docs/project/reviews/public-beta-1/site-qa.md)·[manifest](docs/project/reviews/public-beta-1/site-qa-browser-manifest.json) 참조. |
| Task21 실제 결함 교정 | 모바일 표min-width8rem, basepath 원문링크4개, built validator+회귀테스트5개. `/handbook/` 새빌드60HTML·링크4036/favicon60/CSS157/SVG17/scripts275·오류0. | 최종RC root/subpath브라우저게이트·독립검토와 별개. |
| Task24 공개 준비 | 공식CC BY4.0/MIT 원문·적용정책·제3자고지·README/기여/보안/PR·Issue3종/chooser. YAML4/ID20/안전6·링크31·분류213, 버전4곳0.1.0-beta.1 일치. | 준비버전이지RC/공개완료아님. [문서 기록](docs/project/reviews/public-beta-1/release-preparation.md). |
| Task25 안전 | 신규검사기37테스트, 과거7문서의세션/정확비용18개만마스킹. URL/정규식오탐3개는원문불변+테스트교정. tracked206개finding0. 역사값비출력집계·snapshot전략보존. | 새untracked는별도검사, 권리/배포물고지·필수검토남음. [안전 감사](docs/project/reviews/public-beta-1/release-safety-audit.md). |
| Task26 게이트 준비 | 두workflow npm ci→check→validate:release, 기존권한/트리거유지. 실제YAML/분기fixture2개focused RED→GREEN. | worktree npm ls는직접의존성2개없음exit1. cleanRC/ready59/M5/owner/M7미실행. [RC경계](docs/project/reviews/public-beta-1/release-candidate.md). |
| 최종 로컬 자동 검증 | Node22.16.0/npm10.9.2 check:108/108테스트·공개59·참조171+SVG14·계획100/59/중복0/누락0·HTML60/Pagefind60/literal0, exit0. validate:release206/206·finding0, exit0. | 첫Node22check는106/107·ignored조사원문anchor오류로exit1, build미실행. `.superpowers`만제외+RED/GREEN테스트후최종성공. 기존site미설정warning1/404notice보존. |

최종 Node22 빌드 전후 dist171파일의 경로·SHA는 동일합니다. 후속 원장·검토 요청 반영 후 필수 check:static은108/108·공개59·참조178+SVG14·계획100/59/중복0/누락0, exit0이고 tracked 안전 검사206개·finding0, exit0입니다. 신규35개 예정파일 검사도finding0·입력16단위해시 불일치0이며 staged0입니다. Task21 보조 계약12테스트와 계보 검사도 통과했으나 이는 공개 테스트108개와 별도입니다. 통합 정본의 부모 관찰은 기록됐고 keyboard2/Claude미확인·전체partial을 유지합니다. 마지막 결과 기록에 따른 해시·diff·참조만 갱신하며 전체 브라우저·빌드를 반복하지 않습니다. 원출력과 단계별 지문은 ignored `.superpowers/sdd/2026-08-12-public-beta-master-plan/final-node22-gates-a2.json` 및 연결 로그, 최종 상태는 `resume-checkpoint-2026-08-28.json`, 원본 화면은 `output/playwright/`에 보존합니다. 이 결과는 clean 독립 설치·M5 검토·전체권리감사·소유자승인·실제공개를 대신하지 않습니다.

## 2026-08-28 운영 개정과 Task20 재개

기준 branch `codex/public-beta-completion`과 HEAD `eacf0264268f9b4dcf1dfa4e95399c7df3c5957c`가 일치했습니다. 재개 전 staged·untracked는 없고 PBV-02 SVG·Mermaid 두 파일의 unstaged `+51/-90`만 있었으며 기존 변경을 보존했습니다. Task19와 PBV-03 완료는 다시 실행하지 않습니다. 아래 2026-08-20 이하 내용은 당시 증거이며 새 실행·검토 결과로 소급 사용하지 않습니다. 앞으로의 Claude 모델/과금/입력/대기 운영은 명세 10.2절의 2026-08-28 개정이 우선합니다.

정책 문서 개정은 PBV-02와 별도 작업 단위입니다. 공통 검토 계약은 원래 필수 기준의 대응표, R01~R25의 공개59개와 R26 통합 범위, 실제 원문·관련 근거 입력을 유지합니다. 구독 전용 조건이 증명된 경우에만 `/opt/homebrew/bin/claude --model 'claude-opus-4-8[1m]' --effort high`를 사용하며 과거 모델 기록과 유효한 검토는 보존합니다. 작성·필수 검토 대기·공개 가능을 분리하고, 검토와 독립적인 개발은 진행하되 필요한 검토를 건너뛴 완료 커밋이나 M5·ready 승격은 하지 않습니다.

| 항목 | 현재 증거와 판정 |
|---|---|
| Claude 비모델 사전 확인 | [실제 확인 기록](docs/project/reviews/public-beta-1/claude-preflight-2026-08-28.md): 실제 바이너리·CLI2.1.247·검사한 위험 설정 부재·승인된 호스트의 Pro 로그인 확인. 정확한 모델/1M 구독 포함 및 추가 사용량 비소비는 `not-confirmed`, `blocked / subscription_unverified`. 모델 호출0·실제 검토 결과0. |
| PBV-02 최소 구조 검증 | `node output/playwright/task20-analytics-evidence/verify-analytics.mjs`: exit0, 42 assertions와 XML exit0. 두 정본의 7노드·전진6/피드백1·동일 title/desc 의미·모든 단계/보조 레이블·테마 marker4·소비2의 alt와 draft 유지. 초기 보조 검사 키 오류만 수정했으며 원고와 그림은 바꾸지 않음. |
| PBV-02 파일 보존 | SVG SHA-256 `0627d5671fdd25b07fac3c54e65f7bee9ef24c384dd45e8741bd64469590e143`, Mermaid `c43970fb0dc454261cd04c7fd276f68c83ab550d37a265dcb931a44ca5932f3a`. |
| 정책 필수 자동 검증 | `npm run check:static` exit0: tests65/65·content59·references200 Markdown/MDX+SVG14·plan100/public59/중복0/누락0. `ASTRO_TELEMETRY_DISABLED=1 npm run build` exit0: pages60·Pagefind60·SVG14, `npm run validate:built` exit0: HTML60·literal Markdown0. 기존 sitemap warning1·404 entry notice를 보존했습니다. 검사 뒤 ROADMAP의 local commit/owner 승인 구분 한 문장은 targeted assert·diff-check로 확인했으며 전체 검증을 반복하지 않았습니다. |
| PBV-02 실제 Chrome | 새로 승인된 localhost4341 preview와 전용 headed Google Chrome152.0.7977.64에서 두 경로×3 viewport×light/dark 최종12/12. HTTP200·H1·초안 배지·네 theme 필드·SVG load·7노드/7화살표·marker4·전역 overflow0·내부 scroll 실패0·console warning/error0·pageerror0·외부 요청/요청 실패0. 전체 PNG12·다이어그램 crop12·상단 viewport12를 보존하고 핵심/보조 글자·선·marker·잘림/겹침을 원본 크기로 확인했습니다. Claude 독립 검토 PASS는 아닙니다. |
| PBV-02 실제 실패와 캡처 한계 | 최초 helper의 배지 키·lazy load 판정 실패12, 다음 시도 첫 상태의 local JS ERR_ABORTED1은 보존하고 그 한 상태만 재수집했습니다. 큰 fullPage PNG8의 16384px 반복을 발견해 해당 전체 캡처를 무효화하고 8000px 이하32장·동일 픽셀 연결부24곳으로 교체했습니다. 실제 스크롤 화면과의 관찰 좌표차-16px·채널 반올림 최대1/255를 명시하며 좌표 완전 일치로 주장하지 않습니다. sticky-header locator crop은 최종 그림 증거에서 제외했습니다. 원래 OCR H1 exact3/12·배지9/12는 보조 결과이고 원본 상단 화면12장으로 직접 확인했습니다. |
| PBV-02 실제 내부 스크롤 보충 | 초기12상태의 scroll-container 존재/overflow 확인에 더해 실제 이동 검사가 필요해 그 항목만 추가했습니다. `verify-scroll-interaction.mjs` exit0: 12/12상태·24개 컨테이너의 0→최대→복귀 이동 확인, 외부 요청0. 별도13-record `scroll-interaction.jsonl` SHA-256 `508b65bedddd58ce89c986b8dc598c909b3bdfb031a276a95463eb19d316a9a8`; source4개 해시는 불변이며 기존 전체/그림 검증은 반복하지 않았습니다. |
| PBV-09 구현·자동 검사 | SVG/Mermaid 7노드·전진6/피드백1·title/desc·단계/보조 문구 의미를 유지하고 560×1000·core28/detail20·explicit marker4로 정리했습니다. PB-048 원고와 PBV-02 해시는 불변입니다. 집중182확인/XML/diff exit0, 변경 후 `ASTRO_TELEMETRY_DISABLED=1 npm run check` exit0: tests65/65·content59·references202+SVG14·plan100/public59/중복0/누락0·build/Pagefind60·literal0. 기존 sitemap warning1/404 notice는 유지합니다. |
| PBV-09 실제 Chrome·픽셀 | `/10-deployment-operations/logs-monitoring-backup/`의 3viewport×2theme6/6 통과. HTTP200·H1·초안·4theme·SVG load·16label bbox·7node/7arrow·4marker·실제 내부 scroll 이동·전역 overflow0·console warning/error0·pageerror0·외부 요청/실패0. bounded20 PNG·정확한14seam을 원본 RGBA 행으로 결합한 full6, 동일 full에서 무손실 crop6, top viewport6의 hash/dimensions/bytes를 확인하고 원본 crop/상단 및 full 배치를 직접 보았습니다. 모바일358×639px core17.9/detail12.8px이며 판독성 확보로 이전보다 약149px 길어졌습니다. |
| PBV-09 실패·증거 경계 | 초기 두 수집은 CLI VM에 없는 URL 전역 때문에 상태 수집 전 종료됐으며 오류 로그를 보존했습니다. 해당 helper 한 줄 수정 후 attempt3에서6/6입니다. 직접crop과 full-derived crop의 네 desktop/tablet는 동일 픽셀이나 mobile2는 최대 채널차14/13·변경 픽셀 비율 약0.099%/0.098%로 동일하지 않습니다. fractional DOM 좌표는 관찰 사실이며 원인으로 단정하지 않았습니다. 두 원본 모두 시각 확인했고 최종 crop은 선택된 full과 정확히 일치합니다. cleanup 기록 helper의 sandbox ps 실패도 성공으로 삼지 않고 승인된 PID 확인 뒤 기록했습니다. |
| PBV-09 증거·cleanup | `output/playwright/task20-operations-evidence/manifest.jsonl`31 records·SHA-256 `a66a9b6629a94a2bb9e8ee314727bfe99568d8d3bf98205f3a18737989d4e218`. 전용 Chrome43143/daemon43140 종료·부재 확인, preview4341/PID10311은 다음 자산용으로 유지했습니다. |
| PBV-12 구현·검증 | 원고와 앞선 자산 불변, SVG/MMD7노드·7edge·고유title/desc·560×1000·28/20px·marker4. 집중190/XML/diff exit0, 새 `ASTRO_TELEMETRY_DISABLED=1 npm run check` exit0: tests65/content59/references211+SVG14/plan100-public59-dup0-missing0/build60/Pagefind60/literal0. 실제 Chrome152의 PB-052 한 경로×3viewport×2theme6/6, HTTP/H1/초안/4theme/SVGhash/16label bbox/marker/실제scroll/overflow/console/pageerror/external 통과. full6·직접SVGcrop6·상단6의 hash/bytes/dimensions 및 원본판독, bounded20tile/14exactseam을 확인했습니다. |
| PBV-12 증거·경계 | manifest18 SHA-256 `cf0489a70fa7fb7f4e05c129aafed04692353d29268b1c0f86773a9864314c45`, 첫 수집6/6·실패상태0. 그림crop은 같은 상태의 직접 fullPage+SVG rect 촬영이며 조합full에서 추출한 이미지와 동일하다고 주장하지 않습니다. 전용Chrome51330/daemon51327 종료·부재 확인, preview10311은 유지. 태블릿H1의 마지막 단어가 줄바꿈되지만 전체 글자가 보이고, 사이드바 자체 scroll 유지·전체내비게이션 검증은 Task21 범위입니다. |
| PBV-08 구현·자동 검사 | 560×952·5node/6edge·DB/운영 증거 같은 층 분기·왕복 방향·19text·marker2·title/desc/MMD 일치. Task20 원고 계약에 맞춰 그림 앞 질문과 뒤 실제 권한/복원 성공 비증명 두 문장만 보완했습니다. focused184/XML/diff exit0. `npm run sync:content-map`1회 exit0로 PB-054 본문 문자 수18,119→18,254만 갱신, 새 fullcheck exit0: tests65/content59/references215+SVG14/plan100-public59-dup0-missing0/build60/Pagefind60/literal0, 기존sitemapwarning1/404notice 유지. |
| PBV-08 실제 Chrome·픽셀 | PB-054×3viewport×2theme6/6 첫 수집 통과·실패0. HTTP/H1/draft/4theme/정확한SVG hash/19label bbox·상호겹침/5node6edge/2marker/실제scroll/overflow/console/pageerror/external 통과. 원본그림6·상단6·주변원고crop6와 전체배치6를 확인했고, bounded20tile/14exactseam·PNG hash/bytes/dimensions·문맥crop의 full동일픽셀을 검증했습니다. 모바일358×609px core17.9/detail12.8px, 같은층분기/왕복방향/안내문 판독·잘림0입니다. |
| PBV-08 증거·cleanup | manifest24 SHA-256 `56647cce10937e581ac06b0665354629ff7667b5ac20993d7e73773aab2f02e9`, Chrome63397/daemon63394 종료부재·preview10311유지. 그림crop은 same-state 직접SVG영역촬영으로 별도full과 동일하다고 주장하지 않습니다. 기존넓은추적표는 full에서 왼쪽 일부만 보이고 행높이가 크며 내부scroll은 작동하지만 전체표 판독QA는 Task21에 남습니다. 원고/그림이 바뀌었으므로 과거PB-054 해시는 새문장 검토증거가 아니고 M5 R12/R26은 대기입니다. |
| PBV-01 구현·검증 | 480×960 한 열·7node6edge·원래14문구·하단기본기설명·marker2·고유title/desc를 유지하고 홈 그림앞뒤 두문장만 보완했습니다. focused225/XML/문법/diff0, sync1회 홈문자2,224→2,353, freshfull exit0 tests65/content59/references219+SVG14/plan100-public59-dup0-missing0/build60/Pagefind60/literal0. 기존sitemapwarning1/404notice 유지. |
| PBV-01 실제Chrome·증거 | 홈3viewport×2theme6/6첫수집·실패0, HTTP/H1/초안/4theme/sourceSHA/17labelbbox/7node6edge/2marker/overflow/console/pageerror/external 통과. 본문내부scroll 대상0. mobile358×716px core20.88/detail17.9/note14.92px, 원본그림6·상단6·새문장문맥6와full배치6 확인. 각full은8000px이하단일tile6·seam0, PNGhash/dim/bytes/원본RGBA·문맥동일픽셀검증. manifest24 SHA-256 `346a0ce62f7d8fed592b1cc546e64f3ac81ea1ac945ff474e829c4ca1e0c21c1`. Chrome78844/daemon78841종료·첫sandboxps거부후승인된조회로부재확인, preview10311유지. |
| PBV-06 구현·검증 | 560×1172·5node8방향으로 백엔드의 저장소/선택적 외부 호출을 분리하고 실선 요청/점선 반환과 원래 안내를 보존했습니다. 세 소비 원고는 그림 앞뒤 문장·alt만 변경, focused269/XML/문법/diff0·sync1회 PB02515,782→15,998/PB02714,254→14,497/PB03215,111→15,327. freshfull exit0 tests65/content59/references230+SVG14/plan100-public59-dup0-missing0/build60/Pagefind60/literal0, 기존sitemapwarning1/404notice 유지. |
| PBV-06 실제Chrome·증거 | 세 경로×3viewport×2theme18/18첫수집·실패0, HTTP/H1/초안/4theme/sourceSHA/25labelbbox/5node8edge/marker2/overflow/실제내부scroll/console/pageerror/external 통과. mobile358×749px core17.9/detail12.79px, 그림18·상단18·문맥18·full배치18 확인. 42boundedtile/24exactseam·PNGhash/dim/bytes/RGBA/문맥동일픽셀 검증. manifest60 SHA-256 `3a39561009cf67ae0d692102c97fc1f70ea6278a72b8f91642481a1744184a58`. close3회는 연결 실패로 정리 성공이 아니며 승인된 exact TERM으로 Chrome97495/daemon97492 부재 확인, preview10311 유지. |
| PBV-05 구현·검증 | 560×1008·6node/실선4/조회점선1/22label/marker4로 DNS 대상 정보와 호스팅 콘텐츠 응답을 분리했습니다. 원고 앞뒤 두문장·alt만 변경, 나머지 byte보존. focused108(XML/문법포함)0, sync1 PB04616,779→16,998·freshfull exit0 tests65/content59/references232+SVG14/plan100-public59-dup0-missing0/build60/Pagefind60/literal0. |
| PBV-05 실제Chrome·증거 | 3viewport×2theme6/6첫수집·실패0, HTTP/H1/초안/4theme/SVGhash/22labelbbox/관계/marker/전역overflow/실제내부scroll/console/pageerror/external 통과. 그림6·상단6·문맥6·full배치6, 20tile14exactseam·PNGhash/dim/bytes/RGBA/문맥동일픽셀 확인. manifest24 SHA-256 `773c1b2fa5aba6eeb5107d0cabb08546507140d57359e1f5f21ade304fb157d7`. Chrome5768/daemon5765 close0·부재확인·preview10311유지. |
| PBV-07 구현·검증 | 480×864·4node3명령·로컬3/원격1·17label·marker2, PR/CI를 별도 협업기능으로 구분했습니다. 원고앞질문1문장외 byte불변·alt/7행동/비증명 보존. focused250/XML/문법0·sync1 PB04415,035→15,109·freshfull exit0 tests65/content59/references234+SVG14/plan100-public59-dup0-missing0/build60/Pagefind60/literal0. |
| PBV-07 실제Chrome·증거 | 6/6첫수집·실패0, HTTP/H1/초안/4theme/SVGhash/17labelbbox/명령·경계·marker/overflow/실제내부scroll/console/pageerror/external 통과. 그림6·상단6·문맥6·full배치6, 14tile8exactseam·PNGhash/dims/bytes/RGBA/문맥동일픽셀 확인. manifest24 SHA-256 `eedd86fc88fe017500405bbc3bdf585b686e8022c1a8d8aee20f319da4ded8a7`. Chrome9689/daemon9686 close0·부재확인·preview10311유지. |
| PBV-11 구현·검증 | 480×1080·6node5전진2귀환·21label·marker4·A/B와 정확출발도착·원래12core/detail·기존두안내 유지. PB039 앞뒤2문장/alt외 byte불변, 본문8단계와 그림6묶음의 관계/완료증거 분리. focused최종243/XML/문법0·sync1 PB0399,698→9,942·freshfull exit0 tests65/content59/references236+SVG14/plan100-public59-dup0-missing0/build60/Pagefind60/literal0. |
| PBV-11 실제Chrome·증거 | 6/6첫수집·실패0, HTTP/H1/초안/4theme/SVGhash/21labelbbox/7방향/marker/앞뒤exactDOM/overflow/실제scroll/console/pageerror/external 통과. 그림6·상단6·문맥6·full배치6, 14tile8exactseam·PNGhash/bytes/dims/RGBA/문맥동일픽셀 확인. manifest24 SHA-256 `31bda544786a2d6a0f1abe676fc36ba18ae3799b4f7e10d75575945379d01dc0`. Desktop문맥 원본1440×1921은 도구표시1367×1824로 축소됨을 구분하며 기존mobile표 긴 행은 Task21에서 확인합니다. Chrome13772/daemon13769close0·부재확인·preview10311유지. 필수Claude차단·PBV11reflow/PBVA003·004·005·M5R19/R26대기. |
| PBV-10 구현·자동 | 480×1280·7node8edge·24label·marker4, PRD의설계/스펙분기수렴과대표귀환·두SDD/TDD규율 보존. 원고질문/alt외byte불변·초기5≠8재현exit1→최종focused277/XML0. sync1 PB03618,503→18,635·freshfull exit0 tests65/content59/references238+SVG14/plan100/59/0/0/build60/Pagefind60/literal0. |
| PBV-10 Chrome·증거 | 6/6첫수집실패0·HTTP/H1/초안/4theme/SVGhash/24labels/8edge/4markers/기존후단추적설명/overflow/실제scroll/console/pageerror/external통과. 그림6·상단6·문맥6·full배치6, 20tile14exactseam·PNGhash/bytes/dims/RGBA/문맥동일픽셀. manifest24 SHA `643af4d540ebcc2f367f01da294d77f06caf91c9335b98584e58a6ace29f4317`, desktop/tablet문맥은도구표시축소·원본별도보존. Chrome17839/daemon17836close0부재·preview10311유지. PBV10replace/PBVA002·004·M5R06/R26와필수Claude검토대기. |
| PBV-04 구현·자동 | 480×1160·7node6edge·18label·marker2, 컨텍스트/하네스 병렬 수렴·선택한 책임 관계/비고정순서 보존. PB050 byte불변·Red4≠6 exit1→focused178/XML/문법0·sync생략·freshfull exit0 tests65/content59/references240+SVG14/plan100/59/0/0/build60/Pagefind60/literal0. |
| PBV-04 Chrome·증거 | 6/6첫수집실패0·HTTP/H1/초안/4theme/SVGhash/18labels/6edge/2markers/원고계약/overflow/실제scroll/console/pageerror/external 통과. 그림6·상단6·문맥6·full배치6, 12tile6exactseam·PNGhash/bytes/dims/RGBA/문맥동일픽셀. manifest24 SHA `2d2f1cf6d63e5d4e7745a4fa034a007d12aad104cdab4e0f540263718e0306c9`, desktop문맥 표시축소·원본 별도 보존. Chrome21443/daemon21440close0부재·preview10311유지. PBV04replace/PBVA002·003·004·M5R23/R26와 필수Claude 검토 대기. |
| 독립 검토·완료 | 정책과 11개 시각 자산(PBV02·09·12·08·01·06·05·07·11·10·04)의 필수 Claude 검토는 blocked/subscription_unverified이지만, 각 자산은 별도 Codex 검토에서 최종 `PASS` C0/I0/M0였습니다. 합동 closeout 최초 C0/I1/M0의 입력 계보 I01은 문구 교정 뒤 같은 리뷰어가 `RESOLVED`했고 Fix Round1은 `PASS` C0/I0/M0입니다. PBVA-001~005·M4-01·M4-02를 닫되 상태는 `implementation verified / Claude review pending`이며 Task21·M4-03~05·M5·ready·소유자·공개는 미완료입니다. |

기존 ignored `output/playwright/task20-analytics-evidence/manifest.jsonl`에는 이전 성공·실패·cleanup 기록을 덮어쓰지 않고 재개 기록을 추가합니다. 각 단위의 고정 검토 입력은 별도 manifest의 경로·개별/결합 해시로 구분합니다. 실제 입력 변경 때만 영향 증거를 무효화하고, 같은 이유의 실패 조회나 충분한 검증은 반복하지 않습니다. push·원격 브랜치·설치·배포·공개 URL 작업·유료 경로는 수행하지 않습니다.

## 2026-08-20 역사 결론

권장 개발 환경은 Node.js22.16.0과 npm10.9.2이며 Task19 whole-package 검증은 로컬 Node.js26.0.0과 npm11.12.1에서 수행했습니다. 현재 전체 공개 콘텐츠는 `review`0개·`draft`59개·`seed`0개·`ready`0개이고 공식 Build Track13개는 모두 `draft`이며 Node 내장 테스트는65개입니다. Task19 unit·Fix1·context를 포함한 SHA-256 `09cb94e0c9b3dae96671b1824fcd4513b17dd689b346791e20c65fe907f0332a` review package의 fresh 독립 검토가 `PASS` C0/I0/M0·finding0이므로 `M3-REF`는 `done`2.0/2.0, 현재 인정 점수는66.5점입니다. 현행 원장의 M3 content-package 9행은 모두 `done`이지만 전체 M1은 Important7개 때문에 `in_progress`이고 M3 종료 게이트·M4·M5도 완료되지 않았습니다. PBSG-014·019·020·026, Task20 PBVA finding, Task21 전체 다크·검색·외부 URL 회귀, M5 Opus5 `xhigh` 독립 검토·Codex 재판정·소유자 승인, 선택적 사람 검토, 원격 CI·push·실제 GitHub Pages 배포와 공개 URL도 아직 검증하지 않았으므로 프로젝트 전체를 `ready`나 출판 준비 완료로 표현하지 않습니다.

## 2026-08-20 참고편 전체 패키지 검증 체크포인트

Task19 다섯 참고편은 개발 용어집 `fb743b1`, 에이전트 출력 용어집 `9f3fcb3`, 방법론 지도 `3adade8`, 체크리스트 `a949503`, 현재 도구 참고편 `2580e2b`와 current-tool Fix Round 1 `864a189`의 unit별 독립 검토가 모두 `PASS` C0/I0/M0인 상태에서 whole-package gate를 통과했습니다. 구현·검토 완료는 fresh 독립 package review나 `M3-REF` 종료를 뜻하지 않습니다.

| 검증 항목 | 실제 명령 또는 방법 | 2026-08-20 결과 |
|---|---|---|
| 상태·회계·범위 | 다섯 reference frontmatter, public59, Build13, audit59행, gap26행, visual13행, unit commit/review와 whole diff를 대조 | references5 draft, public draft59/reviewEvidence0/ready0, Build draft13, audit43/16/0·finding C0/I7/M0, gap22/4·unresolved PBSG-014·019·020·026 C1/I3/N0, visual1/8/1/3. 다섯 참고 원고·direct support·source/audit/content map·asset·script/test/dependency의 package-time 변경0 |
| 정의·링크·형식 | Task19 필수 용어와 핵심 장↔참고편 backlinks, H1, TODO/TBD, 폐기 사례, secret pattern, hardwrap 전수 검사 | 정의 충돌0·깨진 링크0·본문 H10·TODO/TBD0·retired case0·의심 secret0·hardwrap0 |
| 현재 도구 경계 | Supabase9·Vercel8·Sites6·Codex3·Claude3 게시 claim의 URL·checked_at 또는 정직한 last-success/fresh-failure·status·scope·do-not-generalize 대조 | 누락0. Vercel8은 2026-08-20 fresh-check-failed와 최근 성공 2026-08-13을 함께 보존하고, Sites artifact/rollback·Codex plan label·Claude workspace-write/read-only는 `not-confirmed` 유지 |
| 자동·빌드 | `npm run sync:content-map`×2, `ASTRO_TELEMETRY_DISABLED=1 npm run check` 한 번 | sync 두 번 모두 no-op, tests65/65, content59, report-inclusive references194+SVG13, plan100/public59/duplicates0/missing0, Astro/Pagefind/build HTML60, literal Markdown0, 기존 sitemap warning1만 존재. 통과 뒤 finding 없이 full check를 반복하지 않음 |
| actual Pagefind UI | built local site에서 desktop1440×1000·mobile390×844, 실제 검색 버튼·입력·결과·클릭·뒤로 이동 | `복구`→`/10-deployment-operations/logs-monitoring-backup/` H1 `로그·모니터링·백업`, `worktree`→`/reference/agent-output-glossary/`, `SDD`→`/reference/methodology-map/`, `무엇이 실패했거나 실행되지 않았고`→`/reference/checklists/`; 두 viewport에서 final8/8·target set8·click8·back8, exact H1/status/target phrase, console error/warning0·pageerror0·external request0 |
| actual Chrome reference UI | localhost4339, actual headed Google Chrome151, five routes×1440×1000/390×844×light | accepted final10/10·unique tuple10·unique full PNG SHA10, HTTP200 10, `requested_theme`·`observed_prefers_color_scheme`·`observed_html_data_theme`·`observed_effective_color_scheme` exact10. exact H1와 `검토용 초안` Playwright visibility/nonzero rect/display/visibility/opacity/intersection10, initial/final document·실제 scroll-container reset10, headings/anchors10, global overflow0, table/code/URL internal-overflow 처리 실패0, image/alt 실패0, console error/warning0·pageerror0·external attempt0 |
| 픽셀·OCR·원본 | same-record direct full PNG와 expanded H1/status crop의 즉시 SHA256·dimensions·bytes·pixel stats, Tesseract5.5.1, original-detail inspection | full/H1/status provenance10씩, readback hash/dim/bytes/pixel match10씩, status OCR normalized exact10, H1 OCR nonempty/exact10, original full10+crops20=30. PB-059 긴 H1 wrap은 전체 글자·DOM exact·overflow0을 확인했고 모바일 넓은 표는 내부 가로 스크롤이 가능한 첫 구간만 PNG에 보인다는 한계를 기록; body image0이라 이미지 품질 주장은 하지 않음 |
| 실패·cleanup | append-only ignored manifest/raw, wrapper close/list/PID, preview SIGINT·process·port 확인 | manifest56 lines에서 preview EPERM1·Chrome diagnostic/timeout2·Pagefind attempt1 helper 실패9, 합계 failed12를 accepted final과 분리. Chrome wrapper close0·session/PID76954/headed Chrome 부재, preview session28257 SIGINT 뒤 wrapper exit2이나 preview process와 port4339 listener 부재. 사전 존재 headless-shell PID73779는 범위 밖이라 건드리지 않음 |

이 whole-package gate는 로컬 참고편 일관성과 렌더·검색 증거만 확인합니다. 실제 제품 기능·계정·외부 서비스 성공·소유자 수용·`ready`·publication·push·배포·공개 URL을 증명하지 않으며 Task20도 시작하지 않았습니다. 다음 게이트는 fresh 독립 package review이고, 그 전까지 `M3-REF`는 `in_progress`1.0/2.0·score65.5입니다.

## 2026-08-20 참고편 dedicated closeout

Task19 개발 용어집 `fb743b1`, 에이전트 출력 용어집 `9f3fcb3`, 방법론 지도 `3adade8`, 체크리스트 `a949503`, 현재 도구 참고편 `2580e2b`, current-tool Fix Round1 `864a189`, review-pending context `1455bb2`를 포함한 package SHA-256 `09cb94e0c9b3dae96671b1824fcd4513b17dd689b346791e20c65fe907f0332a`의 fresh independent review는 `PASS` Critical0·Important0·Minor0이고 새 finding은 없습니다. 기존 ignored manifest56의 failed12, actual Pagefind success8, headed Chrome151 accepted final10, same-record full/H1/status provenance10, status/H1 OCR exact10, original full10+crops20=30과 Chrome/session/PID/preview/port cleanup을 그대로 보존했습니다. 상태 문서 전용 closeout에서는 full/static/build/browser/network를 다시 실행하지 않았습니다.

public59·draft59/reviewEvidence0/ready0, Build Track draft13, audit43/16/0·finding C0/I7/M0, gap confirmed22/not-confirmed4·unresolved PBSG-014·019·020·026 C1/I3/N0와 Vercel8 fresh-check-failed·Sites artifact/rollback·Codex plan label·Claude workspace-write/read-only의 명시적 `not-confirmed`, visual1/8/1/3은 변하지 않았습니다. 이 근거로 `M3-REF`만 `done`2.0/2.0으로 닫고 인정 점수를65.5점에서66.5점으로1.0점 올립니다. 현행 M3 content-package 9행은 모두 `done`이지만 이는 M3 종료 게이트나 M5 `ready`·owner acceptance·release가 아닙니다. Task20/21·M4/M5·push·deploy·publication·public URL은 미완료이고 Task20은 시작하지 않았으며 dedicated closeout review가 다음 게이트입니다.

## 2026-08-13~14 캡스톤 구현·패키지 검증 체크포인트

Task18은 PB-054 `7258026`과 PB-053 `a9ec7eb`으로 W-01~05·D-01~05 각각을 `요구 → 사용자 행동 → 상태 전이/데이터 변환 → 인터페이스 → 권한/권리 → 실패 위험 → 테스트 오라클 → Git 작업 단위 → 배포·운영 증거 → 복구`로 완성했습니다. Combined scope는 두 원고·두 case brief·CONTENT_MAP·콘텐츠 감사·source gap register·source map의 exact8 tracked files·+87/-39이며 glossary·current-tool page·assets·SVG/MMD·visual audit은 diff0입니다.

| 검증 항목 | 실제 명령 또는 방법 | 2026-08-13~14 결과 |
|---|---|---|
| 추적·경계 | 두 원고의 W-01~05·D-01~05 열 개 필드를 독립 파싱하고 support ledger·공식 근거와 whole staged diff를 대조 | 모임은 화면/업무/불변식/운영 성공, 역할·authn/authz/ownership/unique/capacity concurrency/transaction/commit-loss를 분리. 주가는 EDU-FIXTURE/composite key/price basis·unit·date·timezone/lineage·version·checksum·freshness/table-chart/LKG/manifest·restore/rights·비투자 조언을 분리. 실제 제품·계정·시장 데이터·권리 채택0 |
| 상태·감사·gap | frontmatter59, Build13, audit59행, gap26행, visual13행, PBSG-019·020·026과 PBCA-011을 직접 대조 | public draft59/reviewEvidence0, Build draft13, audit40/19/0·C0/I8/M1, gaps20/6·unresolved C1/I5/N0, visual1/8/1/3. PBSG-019·020·026 not-confirmed, PBCA-011 open |
| 자동·빌드 | `npm run sync:content-map`×2, `ASTRO_TELEMETRY_DISABLED=1 npm run check` | sync no-op, tests65/65, content59, references188+SVG13, plan100/public59/duplicates0/missing0, build HTML60/literal Markdown0, 기존 sitemap warning1만 존재 |
| actual Chrome | fresh dist localhost4338, actual headed Google Chrome151, 두 routes×1440×1000/390×844×light/dark | manifest30, final8/8·unique8(light4/dark4), exact four theme fields, HTTP/H1/status/scroll/headings/anchors/overflow/internal scroll/images/alt/console/pageerror/external failures0, diagrams8/missing0 |
| 픽셀·OCR·원본 | same-record direct unique screenshot·DOM rect expanded H1/status·diagram crops의 즉시 SHA/dimensions/bytes/pixels, Tesseract5.5.1, original inspection | screenshot/H1/status/diagram provenance8씩, status OCR exact8, H1 nonempty8/exact4이나 DOM·Playwright·original pixel H1 visible8, original full8+H1/status16+diagram8=32. PBV-02·08 모바일 작은 레이블4는 PBVA-004 Task20, desktop sticky-header diagram crop artifact2는 캡처 한계 |
| 실패·cleanup | append-only manifest와 raw, Chrome close/list/PID, preview SIGINT, port listener 확인 | sandbox CLI-list hang·sandbox ps permission 실패2를 accepted final과 분리. Chrome close0, session absent, PID67513 absent, preview session81126 SIGINT130, port4338 absent |

PBV-02·PBV-08의 모바일 판독성은 Task20에서 교정하며 Task18에서 해결됐다고 주장하지 않습니다. 이 로컬 full/browser 증거는 실제 데이터·권리·제품 조합·계정·배포·복구·소유자 수용·`ready`·publication·public URL을 증명하지 않습니다. 다음 게이트는 fresh 독립 패키지 검토이며 그 전까지 `M3-CAP`은 `in_progress`1.0/2.0·score64.5입니다.

## 2026-08-14 캡스톤 dedicated closeout

Task18 구현 `7258026`·`a9ec7eb`과 context `8d7c6e3`을 포함한 패키지는 최초 독립 검토에서 `NEEDS CHANGES` Critical0·Important1·Minor0이었습니다. ignored collector와 manifest에서 PB-053 analytics asset과 PB-054 meeting asset의 canonical PBV ID가 뒤바뀐 문제를 원본30 records와 PNG32를 rewrite/delete/rename하지 않는 append-only Fix Round 1으로 교정했고, 같은 리뷰어가 이전 Important를 resolved로 확인해 `PASS` Critical0·Important0·Minor0으로 재검토했습니다. 현재 ignored manifest는 original30+correction1=31 records이고 accepted final8, same-record screenshot/H1/status/diagram provenance8씩, status OCR exact8, H1 exact OCR4를 DOM·Playwright·original pixels8로 한정 보완한 증거, original32, PB-053 analytics/PBV-02 sticky crop artifact2, PBV-02·PBV-08 모바일 PBVA-004 finding4와 cleanup을 보존합니다. 상태 문서 전용 closeout에서 full/static/build/browser/network를 재실행하지 않았습니다. 공개59·draft59/reviewEvidence0, Build Track draft13, 콘텐츠 감사40/19/0·finding C0/I8/M1, gap confirmed20/not-confirmed6·미확인 C1/I5/N0와 PBSG-019·020·026 `not-confirmed`·PBCA-011 open, 시각 감사1/8/1/3과 Task20 경계는 그대로입니다. 이에 `M3-CAP`만 `done`2.0/2.0으로 닫고 인정 점수를64.5점에서65.5점으로1.0점 올립니다. 전체 M1·다른 M3·M3 전체·Task19 이후·Task20/21·M4·M5·소유자 승인·`ready`·push·deploy·publication·public URL은 미완료입니다.

## 2026-08-13 AI 네이티브 구현·패키지 검증 체크포인트

Task17은 PB-049~052를 `0360cd9`·`cf2c3f0`·`c438aff`·`4d709e8`의 four independent commits로 완성하고 source map·gap·audit·CONTENT_MAP의 직접 필요 범위만 동기화했습니다. Exact implementation scope는8 tracked files·+609/-216이고 네 원고는 모두 `draft`·`reviewEvidence`0입니다. PBSG-010·017만 직접 공식·1차 근거로 `confirmed` 전환했으며 PBSG-018·PBCA-008은 Task19에 남겼습니다.

| 검증 항목 | 실제 명령 또는 방법 | 2026-08-13 결과 |
|---|---|---|
| 회계·상태·범위 | frontmatter59, audit59행, gap26행, visual13행, base `b3a5ecc..4d709e8` diff와 exact scope를 독립 파싱 | public draft59/reviewEvidence0, Build draft13, audit40/19/0·C0/I8/M1, gaps20/6·unresolved C1/I5/N0, visual1/8/1/3, exact8 files·+609/-216. assets·visual audit·agent-output glossary·state-six diff0 |
| 자동·빌드 | `npm run sync:content-map`×2, `npm run check:static`, `ASTRO_TELEMETRY_DISABLED=1 npm run check` | 두 sync no-op, tests65/65, content59, references187+SVG13, plan100/public59/duplicates0/missing0, build HTML60/literal Markdown0, 기존 sitemap warning1만 존재 |
| actual Chrome | fresh dist localhost4337, Playwright CLI headed `--browser chrome --headed`, four routes×1440×1000/390×844 light | manifest33, accepted final8/8·unique8·PNG8, exact theme8, H1/status/scroll/headings/anchors/overflow/internal scroll/images/alt/console/pageerror/external failures0, PB-050·052 diagrams4/missing0 |
| 픽셀·OCR | 같은 browser-state의 direct unique screenshot 즉시 SHA/dimensions/bytes와 DOM rect H1/status crop, read-only recheck, Tesseract5.5.1, original inspection | PNG/H1 crop/status crop8/8, normalized `검토용초안`8/8, original full8+crops16=24, visible H1/status8/8, clipping/overlap0 |
| 실패·cleanup | manifest와 raw를 대조하고 Chrome close/list/PID, preview SIGINT, port listener를 확인 | preview EPERM1·Chrome timeout1·relative inspection failure1을 accepted와 분리 보존. Chrome close0, session absent, PID23825 absent, preview exit1, port4337 absent |

PBV-04·PBV-12의 topology/dark/mobile finding은 Task20에 남아 있고 원고는 두 자산을 완전 topology나 고정 순서로 일반화하지 않습니다. 이 로컬 증거는 독립 리뷰·M5·owner acceptance·push·배포·publication·public URL을 증명하지 않습니다. 다음 게이트는 fresh independent package review이며 그 전까지 `M3-AI` `in_progress`1.5/3.0·score63.0을 유지합니다.

## 2026-08-13 AI 네이티브 dedicated closeout

Task17 구현 `0360cd9`·`cf2c3f0`·`c438aff`·`4d709e8`과 context `80315b64`를 포함한 패키지의 독립 검토가 `PASS` Critical0·Important0·Minor0이므로 `M3-AI`만 `done`3.0/3.0으로 닫고 현재 인정 점수를63.0점에서64.5점으로 갱신합니다. 기존 ignored browser manifest33 records의 실패 이력과 accepted final8개, same-record PNG·H1/status crop provenance8개, OCR8/8·원본 검사24개·cleanup은 변경 없이 보존했고 상태 문서 전용 closeout에서 full/static/build/browser/network를 다시 실행하지 않았습니다. 공개59·draft59/seed0/review0/ready0, Build Track draft13, 콘텐츠 감사40/19/0·finding C0/I8/M1, gap confirmed20/not-confirmed6·미확인 C1/I5/N0, 시각 감사1/8/1/3은 그대로입니다. PBSG-018/PBCA-008은 Task19, PBV-04·12와 PBVA finding은 Task20에 남습니다. 전체 M1·다른 M3 패키지·M3 전체·Task18 이후·Task20·21·M5·소유자 승인·`ready`·push·배포·공개 URL 검증은 미완료이며 dedicated closeout review가 다음 게이트입니다. 상태 문서 반영 뒤 fresh `npm run validate:content`, `npm run validate:references`, `npm run validate:plan`은 콘텐츠59개·참조 Markdown/MDX187개와 학습SVG13개·원장100점/공개59개/중복0개/누락0개로 종료 코드0이었고 JSON·원장 별도 대조는38행·배정100점·인정64.5점과 정확한 여섯 파일·diff-check 통과를 확인했습니다.

## 2026-08-13 Git·배포·운영 구현·패키지 검증 체크포인트

Task 16은 PB-043~048 여섯 원고를 독립 작업 단위로 완성하고 직접 필요한 출처·gap·감사·콘텐츠 지도만 함께 동기화했습니다. 마지막 seed였던 `environment-variables-config`를 full manuscript `draft`로 올렸고, 나머지 다섯 원고도 의미 있는 변경에 맞춰 `draft`·`reviewEvidence` 0개를 유지했으며 날짜 있는 역사 검토 파일은 보존했습니다.

| 검증 항목 | 실제 명령 또는 방법 | 2026-08-13 결과 |
|---|---|---|
| 작업 범위·상태 | 시작 HEAD `7ad28fde37f935ed59eefbe809ac7ec8055e045d`부터 `git log`·`git diff --name-only`·frontmatter와 여섯 원고를 전수 대조 | `404db2a`·`93edd54`·`47cd4cf`·`1894183`·`028d5d4`·`08ff6dd`; 구현 tracked 범위 10파일·+706/-136. 대상 6/6 모두 `draft`, `reviewEvidence`·실제 본문 H1·빈 alt·TODO/TBD·폐기 사례·임의 하드랩 0개. 실제 계정·비밀·서비스·배포·DNS·복원 증거 없음 |
| 공식 근거·gap·감사 | `research/source-map.md`, `research/public-beta-source-gap-register.md`, `docs/project/public-beta-content-audit.md`의 양방향 행과 checked date·scope·status·do-not-generalize를 직접 대조 | PBSG-005·009·011·012를 `confirmed`로 전환해 confirmed18·not-confirmed8, 미확인 위험 Critical1·Important7·Normal0. 공개 상태 draft59·seed0·review0·ready0, Build Track draft13, 콘텐츠 감사 conform38·needs_edit21·needs_rewrite0, 현재 finding Critical0·Important10·Minor1. 제품별 배포·복원 성공이나 계정·라이브 URL 증거로 일반화하지 않음 |
| 생성물·자동 게이트 | 요구 용어·금지·비밀 패턴 `rg`, `npm run sync:content-map` 연속 2회, `npm run check:static`, fresh `npm run check`, JSON·회계와 `git diff --check` | 모두 종료 코드0. sync 2회 no-op, 테스트65/65, 콘텐츠59, 보고서 포함 참조 Markdown/MDX185·학습 SVG13, 원장100점·공개59·중복0·누락0, Astro·Pagefind·빌드 HTML60, 리터럴 Markdown0. 기존 `astro.config.site` 미설정 sitemap warning1건과 셸 `pyenv` rehash warning만 비차단 |
| 브라우저 12상태·픽셀 provenance | 승인된 `npm run preview -- --host 127.0.0.1 --port 4336`과 headed Google Chrome151에서 여섯 URL을 1440×1000·390×844 light로 열고 append-only JSONL·PNG·DOM rect crop을 대조 | accepted attempt3 final12/12·unique12. 네 theme 필드 `light`, URL·HTTP200·H1/상태 Playwright 가시성·nonzero rect·computed style·viewport intersection·real scroll reset·제목 계층·필수 앵커·overflow·표/코드 내부 스크롤·이미지와 alt·console warning/error·pageerror·외부 요청 실패0개. 기존 lazy diagram expected6/missing0. 같은 record의 unique nonce·timestamp·직접 no-copy PNG와 즉시 full PNG SHA256·dimensions·bytes, H1/status crop SHA256·dimensions·bytes·pixel stats를 보존 |
| provenance 재대조·OCR·원본 검사 | manifest-linked final12개를 파일에서 다시 hash/dimensions/bytes 대조하고 Tesseract5.5.1 `kor+eng` PSM6 OCR·original detail을 분리 실행 | full PNG, H1 crop, status crop 재대조 각각12/12. status OCR은 normalized `검토용초안` exact12/12. accepted full PNG12장·H1 crop12장·status crop12장을 원본으로 확인해 레이아웃·클리핑·H1·배지 실패0개 |
| 시각 경계·실패·정리 | 기존 다이어그램의 Task20 경계를 보존하고 `output/playwright/task16-git-ops-evidence/manifest.jsonl`, 모든 실패·미수용 시도, PNG/crop, browser list와 listener를 재집계 | manifest68 records. sandbox preview EPERM, Chrome launch timeout, attempt1 11/12, attempt2 0/12, sandbox cleanup `ps` EPERM을 accepted final과 분리 보존. 새 SVG/MMD/visual audit/asset diff0이며 Git·deploy·operations 그림과 PBVA finding은 Task20에 유지. Chrome close0·session absent·preview SIGINT·TCP4336 listener0·Chrome PID 부재 cleanup 확인; 첫 sandbox 합산 검증 실패 뒤 escalated attempt2 success도 모두 보존 |

fresh 독립 패키지 검토 전이므로 `M3-GIT-OPS`는 `in_progress` 1.7/4.0, 현재 인정 점수는 60.7점입니다. 이 검증은 전체 M1·M3 완료나 Task20 시각 교정, Task21 전체 다크·검색·외부 URL 회귀, M5 검토와 소유자 승인, `ready`, push·배포·공개 URL 검증을 대신하지 않습니다.

## 2026-08-13 Git·배포·운영 dedicated closeout

Task16 구현 `404db2a`·`93edd54`·`47cd4cf`·`1894183`·`028d5d4`·`08ff6dd`와 context `be31f1e`를 포함한 패키지의 독립 검토는 처음 `NEEDS CHANGES` Critical0·Important2·Minor0이었고, RPO·RTO 기준점과 감사 summary를 exact3 tracked files·+5/-5로 교정한 Fix Round1 `76901ff` 뒤 같은 리뷰어가 `PASS` Critical0·Important0·Minor0으로 재검토했습니다. 기존 ignored manifest68 records의 실패 이력, accepted attempt3 final12개, 같은-record PNG·H1/status crop provenance12개, OCR12/12·원본 검사36개·cleanup은 변경 없이 보존했고 상태 문서 전용 closeout에서 full/static/build/browser/network를 다시 실행하지 않았습니다. 공개59·draft59/seed0/review0/ready0, Build Track draft13, 콘텐츠 감사38/21/0·finding C0/I10/M1, gap confirmed18/not-confirmed8·미확인 C1/I7/N0, 시각 감사1/8/1/3과 existing Git/deploy/operations Task20 PBVA finding은 그대로입니다. 이에 `M3-GIT-OPS`만 `done`4.0/4.0으로 닫고 현재 인정 점수를60.7점에서63.0점으로 갱신합니다. 전체 M1·다른 M3 패키지·M3 전체·Task17 이후·Task20·21·M5·소유자 승인·`ready`·push·배포·공개 URL 검증은 미완료이며 dedicated closeout review가 다음 게이트입니다. 상태 문서 반영 뒤 fresh `npm run validate:content`, `npm run validate:references`, `npm run validate:plan`은 콘텐츠59개·참조 Markdown/MDX185개와 학습SVG13개·원장100점/공개59개/중복0개/누락0개로 종료 코드0이었고 JSON·원장 별도 대조는38행·배정100점·인정63.0점과 정확한 여섯 파일·diff-check 통과를 확인했습니다.

## 2026-08-13 개발 절차·품질·안전 구현·패키지 검증 체크포인트

Task 15는 PB-037~042 여섯 원고를 독립 작업 단위로 완성하고 직접 필요한 출처·gap·용어·감사·콘텐츠 지도만 함께 동기화했습니다. 세 seed를 `draft`로 올렸고 의미 있게 보강한 기존 `testing-strategy`는 `draft`로 내려 현재 `reviewEvidence`를 제거했으며, 모든 날짜 있는 역사 검토 파일은 보존했습니다.

| 검증 항목 | 실제 명령 또는 방법 | 2026-08-13 결과 |
|---|---|---|
| 작업 범위·상태 | 시작 HEAD `9e50a3b2269f2ee2348a24283bdbe143c5f6a8ba`부터 `git log`·`git diff --name-only`·frontmatter와 여섯 원고를 전수 대조 | `f8f42c8`·`4d295f4`·`1410b43`·`2388bb5`·`fd02fa5`·`579176f`; 구현 tracked 범위 11파일·+1,280/-177. 대상 6/6 모두 `draft`, `reviewEvidence`·실제 본문 H1·빈 alt·TODO/TBD·폐기 사례·임의 하드랩 0개. 본문 문자는 8,594·8,710·9,607·10,455·12,749·18,147자 |
| 공식 근거·gap·감사 | `research/source-map.md`, `research/public-beta-source-gap-register.md`, `docs/project/public-beta-content-audit.md`의 양방향 행과 checked date·scope·status·do-not-generalize를 직접 대조 | PBSG-004·008·015·016을 `confirmed`로 전환해 confirmed 14·not-confirmed 12, 미확인 위험 Critical 2·Important 10·Normal 0. 공개 상태 draft 58·seed 1·review 0·ready 0, Build Track draft 13, 콘텐츠 감사 conform 35·needs_edit 23·needs_rewrite 1, 현재 finding Critical 0·Important 12·Minor 1. 조사 실패·403은 근거로 쓰지 않음 |
| 생성물·자동 게이트 | 요구 용어·금지·비밀 패턴 `rg`, `npm run sync:content-map` 연속 2회, `npm run check:static`, fresh `npm run check`, JSON·회계와 `git diff --check` | 모두 종료 코드 0. sync 2회 no-op, 테스트 65/65, 콘텐츠 59, 참조 Markdown/MDX 183·학습 SVG 13, 원장 100점·공개 59·중복 0·누락 0, Astro·Pagefind·빌드 HTML 60, 리터럴 Markdown 0. 기존 `astro.config.site` 미설정 sitemap warning 1건과 셸 `pyenv` rehash warning만 비차단 |
| 브라우저 12상태·픽셀 provenance | 승인된 `npm run preview -- --host 127.0.0.1 --port 4335`와 headed Google Chrome 151에서 여섯 URL을 1440×1000·390×844 light로 열고 JSONL·PNG·DOM rect crop을 대조 | accepted attempt 2 final 12/12·unique 12. 네 theme 필드 `light`, URL·HTTP 200·H1/상태 Playwright 가시성·nonzero rect·computed style·viewport intersection·scroll container reset·제목 계층·필수 앵커·overflow·표/코드 내부 스크롤·이미지와 alt·console warning/error·pageerror·외부 요청 실패 0개. PB-039 lazy lifecycle 그림 2/2 로드. 같은 record의 unique nonce·timestamp·직접 no-copy PNG와 즉시 full PNG SHA256·dimensions·bytes, H1/status crop SHA256·dimensions·bytes·nonwhite/dark/orange pixel stats를 보존 |
| provenance 재대조·OCR·원본 검사 | manifest-linked final 12개를 파일에서 다시 hash/dimensions/bytes 대조하고 Tesseract 5.5.1 `kor+eng` PSM 6 OCR·original detail을 분리 실행 | full PNG, H1 crop, status crop 재대조 각각 12/12. status OCR은 NFC·공백·문장부호 정규화 뒤 `검토용초안` 12/12. accepted full PNG 12장·H1 crop 12장·status crop 12장을 원본으로 확인해 레이아웃·클리핑·H1·배지 실패 0개. 전체 PNG 축소 보기만으로 배지 픽셀 가시성을 주장하지 않음 |
| 시각 경계·실패·정리 | 기존 다이어그램의 Task 20 경계를 보존하고 `output/playwright/task15-workflow-quality-evidence/manifest.jsonl`, 실패·미수용 시도, PNG/crop, browser list와 listener를 재집계 | manifest 39 records. sandbox preview EPERM, Node wrapper timeout, collection의 registry ENOTFOUND, 첫 direct 반환 truncation의 미수용 캡처를 accepted final과 분리 보존. 새 SVG/MMD/visual audit/asset diff 0이며 software lifecycle·testing·operations 그림과 PBVA finding은 Task 20에 유지. Chrome close 0·browser list 0·preview SIGINT 130·TCP 4335 listener 0·Chrome PID 부재 cleanup 확인 |

fresh 독립 패키지 검토 전이므로 `M3-WORKFLOW-QUALITY`는 `in_progress` 1.5/5.0, 현재 인정 점수는 57.2점입니다. 이 검증은 전체 M3 완료나 Task 20 시각 교정, Task 21 전체 다크·검색·외부 URL 회귀, M5 검토와 소유자 승인, `ready`, push·배포·공개 URL 검증을 대신하지 않습니다.

## 2026-08-13 개발 절차·품질·안전 dedicated closeout

Task 15 구현 `f8f42c8`·`4d295f4`·`1410b43`·`2388bb5`·`fd02fa5`·`579176f`와 context `bfceed4`를 포함한 패키지의 독립 검토가 Critical 0개·Important 0개·Minor 0개 `PASS`했습니다. 기존 ignored manifest 39 records의 실패·미수용 이력, accepted final 12개, 같은-record PNG·H1/status crop provenance 12개와 summary, OCR 12/12·원본 검사 36개·cleanup은 변경 없이 보존했고 상태 문서 전용 closeout에서 브라우저를 다시 실행하지 않았습니다. 공개 59개·draft 58/seed 1/review 0/ready 0, Build Track draft13, 콘텐츠 감사 35/23/1·finding C0/I12/M1, gap confirmed14/not-confirmed12·미확인 C2/I10/N0, 시각 감사1/8/1/3과 PB-039 등 기존 Task 20 finding은 그대로입니다. 이에 `M3-WORKFLOW-QUALITY`만 `done` 5.0/5.0으로 닫고 현재 인정 점수를 57.2점에서 60.7점으로 갱신합니다. 전체 M1·다른 M3 패키지·M3 전체·Task 16 이후·Task 20·21·M5·소유자 승인·`ready`·push·배포·공개 URL 검증은 미완료이며 dedicated closeout review가 다음 게이트입니다. 상태 문서 반영 뒤 fresh `npm run validate:content`, `npm run validate:references`, `npm run validate:plan`은 콘텐츠 59개·참조 Markdown/MDX 183개와 학습 SVG 13개·원장 100점/공개 59개/중복 0개/누락 0개로 종료 코드 0이었고, JSON·원장 별도 대조는 38행·배정 100점·인정 60.7점과 정확한 여섯 파일·diff-check 통과를 확인했습니다.

## 2026-08-13 프런트엔드·요구사항·설계 구현·패키지 검증 체크포인트

Task 14는 PB-031~036 여섯 원고를 독립 작업 단위로 완성하고 직접 필요한 출처·gap·용어·감사·콘텐츠 지도만 함께 동기화했습니다. 세 seed는 `draft`로 올렸고 의미를 보강한 기존 review 두 개는 `draft`로 내려 현재 `reviewEvidence`를 제거했으며, 모든 날짜 있는 역사 검토 파일은 보존했습니다.

| 검증 항목 | 실제 명령 또는 방법 | 2026-08-13 결과 |
|---|---|---|
| 작업 범위·상태 | 시작 HEAD `2f04bd1f42beb9abeeae8672a79000fbf1154dee`부터 `git log`·`git diff --name-only`·frontmatter와 여섯 원고를 전수 대조 | `56bca2b`·`621edc1`·`9f43c8c`·`66d815c`·`8a878e5`·`373b192`와 교정 `1e21a79`; 구현 tracked 범위 11파일·+886/-116. 대상 6/6 모두 `draft`, `reviewEvidence`·실제 본문 H1·TODO/TBD·폐기 사례 0개. browser·PRD의 과거 review 파일은 역사 증거로 보존 |
| 공식 근거·gap·감사 | `research/source-map.md`, `research/public-beta-source-gap-register.md`, `docs/project/public-beta-content-audit.md`의 양방향 행과 checked date·scope·status·do-not-generalize를 직접 대조 | PBSG-003·007·024·025를 `confirmed`로 전환해 confirmed 10·not-confirmed 16, 미확인 위험 Critical 2·Important 14·Normal 0. 공개 상태 draft 54·seed 4·review 1·ready 0, 콘텐츠 감사 conform 30·needs_edit 25·needs_rewrite 4, 현재 finding Critical 0·Important 13·Minor 1. 조사 실패·403은 승격 근거로 쓰지 않음 |
| 생성물·자동 게이트 | 요구 용어·금지 패턴 `rg`, `npm run sync:content-map` 연속 2회, `npm run check:static`, fresh `ASTRO_TELEMETRY_DISABLED=1 npm run check`, JSON·회계와 `git diff --check` | 모두 종료 코드 0. sync 2회 no-op, 테스트 65/65, 콘텐츠 59, 참조 Markdown/MDX 181·학습 SVG 13, 원장 100점·공개 59·중복 0·누락 0, Astro·Pagefind·빌드 HTML 60, 리터럴 Markdown 0. 기존 `astro.config.site` 미설정 sitemap warning 1건과 셸 `pyenv` rehash warning만 비차단 |
| 브라우저 12상태·픽셀 provenance | 승인된 `npm run preview -- --host 127.0.0.1 --port 4334`와 headed Google Chrome 151에서 여섯 URL을 1440×1000·390×844 light로 열고 JSONL·PNG·DOM rect crop을 대조 | attempt 1/2 full PNG SHA256은 12/12 동일하지만 축소 whole-image renderer가 작은 배지를 시각적으로 누락할 수 있어 whole-image 육안을 배지 가시성 근거로 사용하지 않음. attempt 2 DOM rect crop은 H1·`검토용 초안` pixel evidence 12/12·배지 OCR normalized exact 12/12였으나 원래 browser-state record에 즉시 hash가 없어 provenance 한계를 기록. Fix Round 2 attempt 3은 unique nonce·timestamp·직접 no-copy screenshot path와 캡처 직후 같은 record의 full PNG SHA256·dimensions·bytes, H1/status crop SHA256·dimensions·nonwhite/dark/orange pixel stats를 결합해 final 12/12. attempt 2/3 full PNG SHA256도 12/12 동일하고 새 crop 24장 원본 확인, H1/status pixel evidence 12/12·배지 OCR normalized exact 12/12. 네 theme 필드 `light`, URL·HTTP 200·제목 계층·필수 앵커·overflow·표·코드 내부 스크롤·이미지와 alt·console warning/error·pageerror 실패 0개 |
| 시각 경계·실패·정리 | 기존 다이어그램의 Task 20 경계를 보존하고 `output/playwright/task14-front-design-evidence/manifest.jsonl`, raw 출력, PNG·crop, browser list와 listener를 재집계 | 같은 리뷰어 이력은 최초 `NEEDS CHANGES` C0/I1/M0 → Fix Round 1 `NOT RESOLVED` C0/I1/M0 → Fix Round 2 `PASS` C0/I0/M0. 누적 manifest 108 records·역사 실패 7건·attempt 1/2/3 final 각 12개. PB-032·PB-036 모바일 작은 라벨·dark marker finding은 Task 20에 보존하고 콘텐츠·CSS·자산 diff 0. Fix2 Chrome close exit 0·browser list 없음·preview SIGINT 실제 exit 1·TCP 4334 listener 부재를 cleanup 기록으로 보존 |

Task 14 Fix Round 2의 같은 리뷰어 `PASS`를 근거로 `M3-FRONT-DESIGN`만 `done` 5.0/5.0으로 닫고 현재 인정 점수를 57.2점으로 갱신했습니다. dedicated closeout review가 다음 게이트이며, 이 검증은 전체 M3 완료나 Task 20 시각 교정, Task 21 전체 다크·검색·외부 URL 회귀, M5 검토와 소유자 승인, `ready`, push·배포·공개 URL 검증을 대신하지 않습니다.

## 2026-08-13 풀스택·백엔드·데이터 구현·패키지 검증 체크포인트

Task 13은 PB-025~030 여섯 원고를 독립 작업 단위로 완성하고 직접 필요한 출처·gap·용어·감사·콘텐츠 지도만 함께 동기화했습니다. 세 seed는 `draft`로 올렸고 의미를 보강한 기존 review 두 개는 Task 13 시작 전부터 정직한 `draft`·`reviewEvidence` 0개였으며, 모든 날짜 있는 역사 검토 파일은 보존했습니다.

| 검증 항목 | 실제 명령 또는 방법 | 2026-08-13 결과 |
|---|---|---|
| 작업 범위·상태 | 시작 HEAD `d62ebaba096c4bb0d42f534a14f4089db3d98840`부터 `git log`·`git diff --name-only`·frontmatter를 대조 | `a62ffa2`·`35d45de`·`1d41df5`·`3749ca4`·`5b3b71a`·`cff8bb2`의 정확한 여섯 원고 커밋, 구현 tracked 범위 11파일·+744/-100. 대상 6/6 모두 `draft`, `reviewEvidence`·본문 H1·TODO/TBD·폐기 사례 0개. 본문 문자는 15,782·9,955·14,254·21,250·12,168·13,408자 |
| 공식 근거·gap·감사 | `research/source-map.md`, `research/public-beta-source-gap-register.md`, `docs/project/public-beta-content-audit.md`의 양방향 행과 파생 집계를 직접 대조 | PBSG-002·022·023을 `confirmed`로 전환해 confirmed 6·not-confirmed 20, 미확인 위험 Critical 2·Important 18·Normal 0. 공개 상태 draft 49·seed 7·review 3·ready 0, 콘텐츠 감사 conform 26·needs_edit 26·needs_rewrite 7, 현재 finding Critical 0·Important 13·Minor 1. 제품·브라우저·보안 의미는 출처별 적용 범위를 넘겨 일반화하지 않음 |
| 생성물·자동 게이트 | 요구 용어 `rg`, `npm run sync:content-map` 연속 2회, `npm run check:static`, fresh `ASTRO_TELEMETRY_DISABLED=1 npm run check`, JSON·회계·금지 패턴과 `git diff --check` | 모두 종료 코드 0. sync 2회 no-op, 테스트 65/65, 콘텐츠 59, 참조 Markdown/MDX 178·학습 SVG 13, 원장 100점·공개 59·중복 0·누락 0, Astro·Pagefind·빌드 HTML 60, 리터럴 Markdown 0. 기존 `astro.config.site` 미설정 sitemap warning 1건과 셸 `pyenv` rehash warning만 비차단 |
| 브라우저 12상태 | 승인된 `npm run preview -- --host 127.0.0.1 --port 4333`과 headed Google Chrome 151에서 여섯 URL을 1440×1000·390×844 light로 열고 JSONL·PNG를 대조 | 최종 12/12 고유 tuple. 모든 final의 `requested_theme`·`observed_prefers_color_scheme`·`observed_html_data_theme`·`observed_effective_color_scheme`가 정확히 `light`, H1 1개·`검토용 초안` 배지 1개·제목 계층·앵커 정상·document/body overflow 0. 표·코드 내부 스크롤, 깨진 이미지·빈 alt·console warning/error·pageerror·학습 앵커 실패 0개. 실제 UA Chrome/151, vendor `Google Inc.`이고 final PNG 12장을 원본 크기로 확인 |
| 실패 보존·정리 | `output/playwright/task13-fullstack-data-evidence/manifest.jsonl`, raw 출력, PNG, Playwright session list·`lsof`·`pgrep`·`ps`를 재집계 | manifest 20 records·browser states 12·final 12·browser 실패 0·PNG 12. sandbox preview EPERM 1건과 exact escalated 성공을 분리 보존했습니다. Chrome PID 9489·Playwright 세션·preview·TCP 4333 listener·일치 프로세스 부재를 cleanup과 독립 후속 확인으로 보존 |

PB-025·027이 소비하는 기존 full-stack 그림의 외부 서비스 topology·dark marker·390px 판독성, PB-028 API 그림의 분할·390px 판독성 finding은 Task 20에 남겼고 새 시각 자산은 만들지 않았습니다. Task 13 package same-reviewer review history는 최초 `NEEDS CHANGES` Critical 0개·Important 2개·Minor 1개, Fix Round 1 뒤 `NEEDS CHANGES` Critical 0개·Important 0개·Minor 1개, Fix Round 2 뒤 `PASS` Critical 0개·Important 0개·Minor 0개입니다. 구현 커밋은 `a62ffa2`·`35d45de`·`1d41df5`·`3749ca4`·`5b3b71a`·`cff8bb2`, context는 `1947da5`, Fix Round 1은 `759d2be`, Fix Round 2는 `c286725`이며, 이 근거로 `M3-FULLSTACK-DATA`를 `done` 5.0/5.0, 현재 인정 점수를 53.7점으로 닫습니다. 기존 ignored browser manifest 20 records·최종 12개·PNG 12장·sandbox preview EPERM 1건·cleanup은 보존했고 상태 문서 전용 closeout에서 브라우저를 재실행하지 않았습니다. 공개 상태 49/7/3/0, 콘텐츠 감사 26/26/7·finding 0/13/1, gap 6/20·미확인 2/18/0은 유지합니다. 이는 전체 M1·다른 M3·M3 전체, `ready`, Task 14 이후, Task 21 전체 다크·검색·외부 URL 회귀, M5 검토, 소유자 승인, push·배포·공개 URL 검증 완료가 아닙니다.

Task 13 dedicated closeout은 `CHANGELOG.md`, `PROJECT_CONTEXT.md`, `PROJECT_MANIFEST.json`, `ROADMAP.md`, `VERIFICATION_REPORT.md`, master plan의 정확한 여섯 tracked 파일만 갱신했습니다. `npm run validate:content`, `npm run validate:references`, `npm run validate:plan`을 fresh 실행해 공개 콘텐츠 59개, 참조 Markdown/MDX 179개·학습 SVG 13개, 원장 배정 100점·공개 문서 59개·중복 0개·누락 0개를 각각 종료 코드 0으로 확인했습니다. 첫 별도 회계 명령은 gap 표에 존재하지 않는 주석 마커를 가정해 종료 코드 1로 멈췄고 데이터를 변경하지 않았으며, 실제 `출처 공백` 절의 26행으로 범위를 바로잡은 재검사는 `PROJECT_MANIFEST.json`, 원장 38행·배정 100점·현재 인정 점수 53.7점·`M3-FULLSTACK-DATA done` 5.0/5.0, 공개 상태 49/7/3/0, 콘텐츠 감사 26/26/7·finding 0/13/1, gap 6/20·미확인 2/18/0과 exact 6-file tracked 범위를 통과했습니다. `git diff --check`도 종료 코드 0입니다. 공개 원고·CONTENT_MAP·감사·gap·시각 자산·브라우저 증거가 바뀌지 않은 상태 closeout이므로 전체 static·build·브라우저·네트워크 검증은 다시 실행하지 않았습니다. 다음 게이트는 이 상태 closeout의 dedicated review입니다.

## 2026-08-13 사고 모델·작업 환경 구현·패키지 검증 체크포인트

Task 12는 PB-019~024 여섯 원고를 독립 작업 단위로 완성하고 직접 필요한 출처·gap·용어·감사·콘텐츠 지도만 함께 동기화했습니다. 세 seed와 의미 보강이 필요했던 기존 review 한 개는 모두 `draft`로 정렬했으며, 과거 검토 기록 파일은 건드리지 않고 현재 `reviewEvidence`를 0개로 유지했습니다.

| 검증 항목 | 실제 명령 또는 방법 | 2026-08-13 결과 |
|---|---|---|
| 작업 범위·상태 | 시작 HEAD `7165a789c271e8dd441f64459d8320e41fcd6f26`부터 `git log`·`git diff --name-only`·frontmatter를 대조 | `71a3b4d`·`5da79a1`·`1e2e46c`·`4e629a6`·`d2a11e7`·`45141a8`의 정확한 여섯 원고 커밋, 구현 tracked 범위 11파일·+1,033/-134. 대상 6/6 모두 `draft`, `reviewEvidence`·본문 H1·TODO/TBD·반도체/semiconductor 0개. 본문 문자는 8,066·12,552·15,550·9,297·20,543·12,666자 |
| 공식 근거·gap·감사 | `research/source-map.md`, `research/public-beta-source-gap-register.md`, `docs/project/public-beta-content-audit.md`의 양방향 행과 파생 집계를 직접 대조 | PBSG-001·006·021만 `confirmed`, 나머지 23개 `not-confirmed`; 미확인 위험 Critical 2·Important 21·Normal 0. 공개 상태 draft 46·seed 10·review 3·ready 0, 콘텐츠 감사 conform 23·needs_edit 26·needs_rewrite 10, 현재 finding Critical 0·Important 13·Minor 1. ACM Parnas·POSIX 본문 HTTP 403, GNU Bash timeout과 별도 curl 권한 거절은 미확인으로 보존 |
| 생성물·자동 게이트 | `npm run sync:content-map`, `npm run check:static`, fresh `ASTRO_TELEMETRY_DISABLED=1 npm run check`, 콘텐츠·참조·계획 validator와 `git diff --check` | 모두 종료 코드 0. sync no-op, 테스트 65/65, 콘텐츠 59, 참조 Markdown/MDX 177·학습 SVG 13, 원장 100점·공개 59·중복 0·누락 0, Astro·Pagefind·빌드 HTML 60, 리터럴 Markdown 0. 기존 `astro.config.site` 미설정 sitemap warning 1건과 셸 `pyenv` rehash warning만 비차단 |
| 브라우저 12상태 | 승인된 `npm run preview -- --host 127.0.0.1 --port 4332`와 headed Google Chrome 151에서 여섯 URL을 1440×1000·390×844 light로 열고 JSONL·PNG를 대조 | 최종 12/12 고유 tuple. 모든 final의 `requested_theme`·`observed_prefers_color_scheme`·`observed_html_data_theme`·`observed_effective_color_scheme`가 정확히 `light`, H1 1개·`검토용 초안` 배지 1개·제목 계층 정상·document/body overflow 0. 표·코드 내부 스크롤, 깨진 이미지·빈 alt·console warning/error·pageerror·학습 앵커 실패 0개. 실제 UA Chrome/151, vendor `Google Inc.`이며 final PNG 12장의 요청 viewport와 원본 픽셀을 직접 확인 |
| 실패 보존·정리 | `output/playwright/task12-mental-environment-evidence/manifest.jsonl`, raw 출력, PNG, Playwright session list·`lsof`·`pgrep`·`ps`를 재집계 | manifest 27 records·browser states 16·final 12·실패 4·PNG 16. PB-021 lazy SVG를 스크롤 전 판정한 실패 4건은 attempt 1·2로 보존하고 이미지 로드 뒤 attempt 3의 두 final만 추가했습니다. 과거 preview EPERM 1건·승인 사용량 차단 1건과 이번 성공도 분리했습니다. Chrome PID 40497·Playwright 세션·preview·TCP 4332 listener·일치 프로세스 부재를 cleanup과 독립 후속 확인으로 보존 |

Task 12 원고의 기존 독립 읽기 전용 검토는 Critical 0개·Important 0개·Minor 0개 `CONTENT PASS, PACKAGE BLOCKED`였습니다. browser/context 커밋 `468be53`으로 막혔던 증거를 채운 뒤 fresh 패키지 검토는 `PROJECT_CONTEXT.md` 현행 집계 충돌 한 건으로 Critical 0개·Important 1개·Minor 0개 `NEEDS CHANGES`였고, 상태 요약 Fix Round 1 `d408663` 뒤 같은 리뷰어가 Critical 0개·Important 0개·Minor 0개 `PASS`로 재검토했습니다. 이에 `M3-MENTAL-ENV`를 `done` 5.0/5.0, 현재 인정 점수를 50.2점으로 닫았습니다. 공개 상태 46 draft/10 seed/3 review/0 ready, 콘텐츠 감사 23/26/10·finding 0/13/1, gap confirmed 3/not-confirmed 23·미확인 2/21/0, 시각 감사와 PB-021 PBVA-004 Task 20 경계는 유지합니다. 전체 M1은 Important 13개 때문에 `in_progress`이고 다른 M3 패키지와 M3 전체는 미완료이며 Task 13은 아직 구현하지 않았습니다. Task 21 전체 다크·검색·외부 URL 회귀, M5·소유자 승인·`ready`·push·배포·공개 URL 검증도 남아 있습니다.

Task 12 dedicated closeout은 위 여섯 current-state 문서와 원장만 갱신했습니다. `npm run validate:content`, `npm run validate:references`, `npm run validate:plan`을 fresh 실행해 공개 콘텐츠 59개, 참조 Markdown/MDX 177개·학습 SVG 13개, 원장 배정 100점·공개 문서 59개·중복 0개·누락 0개를 각각 종료 코드 0으로 확인했습니다. 별도 JSON·회계 검사는 `PROJECT_MANIFEST.json`, 원장 38행·배정 100점·현재 인정 점수 50.2점·`M3-MENTAL-ENV done` 5.0/5.0, 공개 상태 46/10/3/0, 콘텐츠 감사 23/26/10·finding 0/13/1, gap 3/23·미확인 2/21/0과 exact 6-file tracked 범위를 통과했고 `git diff --check`도 종료 코드 0입니다. 공개 원고·CONTENT_MAP·감사·gap·시각 자산·브라우저 증거가 바뀌지 않은 상태 closeout이므로 전체 npm check·build·브라우저·네트워크 검증은 다시 실행하지 않았습니다.

## 2026-08-13 홈·시작하기·섹션 인덱스 구현 체크포인트

Task 11은 홈·시작하기·학습 경로·1~12부·참고편의 공개 진입점 18개를 다섯 작업 단위로 나누어 구현했습니다. 공식 Build Track의 기존 13개 제목·순서·경로는 유지하고, 각 인덱스가 실제 자식 장·독자 질문·권장 순서·책임 차이·다음 이동을 안내하도록 했습니다. 홈과 시작하기는 순차·검색 이용법과 파일 변경·자동 검사·브라우저·로컬 커밋·원격 공유·배포·공개 확인의 서로 다른 증거를 구분하며, 현재 제품 기능은 날짜 있는 교체 가능 참고편에만 둡니다.

| 검증 항목 | 실제 명령 또는 방법 | 2026-08-13 결과 |
|---|---|---|
| 작업 범위·상태 | 시작 HEAD `257016027fe27e0d2c064b28ba9182727cd3a887`에서 정확한 공개 대상 18개와 생성된 `CONTENT_MAP.md`를 다섯 커밋 `07b76f6`·`bd2dee3`·`43345db`·`080a64f`·`964dce0`으로 분리하고 frontmatter를 전수 대조 | 대상 18/18 존재, 모두 `contentStatus: draft`, `reviewEvidence` 0개. 공용 문맥 전 정확한 tracked 변경은 공개 18개와 CONTENT_MAP 1개뿐이며 Task 12는 시작하지 않음 |
| 링크·학습 구조 | Starlight 페이지 라우트 깊이로 모든 Markdown 링크를 해석하고 섹션·참고편의 실제 sibling 문서, Build Track 13개 제목·순서·경로를 Node 감사기로 대조 | 로컬 링크 123개·직접 자식 링크 44개·Build Track 13개, 끊긴 링크·중복·누락 0개 |
| 좁은 금지·서식 감사 | 18개 본문에서 TODO/TBD/작성 예정, 본문 H1, 빈 이미지 alt, 폐기 사례, frontmatter 상태와 연속 산문 줄을 검사 | 미완성 표식·본문 H1·빈 alt·폐기 사례·임의 하드랩 각 0개. 모임 참가 웹앱과 교육용 주가 fixture 경계 및 제품 중립 책임 구분 유지 |
| 생성물·자동 게이트 | `npm run sync:content-map` 연속 2회, `npm run validate:content`, `npm run validate:references`, `npm run validate:plan`, `ASTRO_TELEMETRY_DISABLED=1 npm run check:static`, fresh `ASTRO_TELEMETRY_DISABLED=1 npm run check`, `git diff --check` | 모두 종료 코드 0. sync 2회 모두 no-op, 테스트 65/65, 콘텐츠 59, 참조 Markdown/MDX 175·학습 SVG 13, 원장 100점·중복 0·누락 0, 빌드 HTML 60·Pagefind HTML 60·리터럴 Markdown 0. 기존 `astro.config.site` 미설정 sitemap warning 1건과 셸 `pyenv` rehash warning만 비차단 |
| 브라우저 36상태·링크 이동 | fresh dist의 127.0.0.1:4331 preview와 headed Google Chrome 151에서 18 URL을 1440×1000·390×844 light로 열고, 각 페이지의 지정 핵심 링크를 실제 클릭해 목적지 URL·H1을 확인 | 최종 36/36 고유 tuple. 각 tuple의 `requested_theme`·`observed_prefers_color_scheme`·`observed_html_data_theme`·`observed_effective_color_scheme`가 light로 일치하고 H1 정확히 1·초안 배지 정확히 1·제목 계층·전역 overflow·핵심 링크 이동 36/36, 내부 스크롤 실패·깨진 이미지·console warning/error·pageerror 0개. 원본 PNG 36장과 contact sheet 4개를 육안 확인 |
| 실패 보존·정리 | `output/playwright/task11-navigation-evidence/manifest.jsonl`의 139개 record를 JSON 파싱하고 모든 실패·최종 상태·cleanup을 재집계 | 실패 79건은 route resolver 1·sandbox preview EPERM 1·CLI VM import 1·URL 전역 기대 72·12부 목적지 H1 기대 4로, 교정 뒤 성공과 분리됨. Chrome PID 11748·preview PID 10173·4331 listener·일치 명령 부재를 cleanup completed record로 보존 |

구현 `18d1fc206269890d512f6985d36bd8d2d01073be`와 앞선 다섯 공개 커밋을 포함한 정확한 25파일 범위의 독립 검토는 Critical 0개·Important 0개·Minor 0개 `PASS`했습니다. 이에 원장 `M3-NAV`를 `done` 4.0/4.0, 전체 인정 점수를 46.7점으로 닫았습니다. 콘텐츠 감사 19/27/13·finding 0/13/1과 공개 상태 42 draft·13 seed·4 review·0 ready는 바꾸지 않았습니다. Task 11 브라우저 증거는 이번에 바뀐 진입·인덱스의 로컬 링크 흐름을 확인하지만 Task 9 검색 증거를 재주장하지 않으며, 검색 동작·외부 URL·전체 상태 회귀·원격 배포·공개 URL은 Task 21과 M7 경계로 남습니다.

Closeout은 상태 문서와 원장만 갱신했습니다. `npm run validate:content`, `npm run validate:references`, `npm run validate:plan`을 fresh 실행해 공개 콘텐츠 59개, 참조 Markdown/MDX 175개·학습 SVG 13개, 원장 배정 100점·중복 0개·누락 0개를 각각 종료 코드 0으로 확인했습니다. 별도 JSON·회계 검사는 `PROJECT_MANIFEST.json`, 원장 38행·현재 인정 점수 46.7점·`M3-NAV done` 4.0/4.0, 다른 M3 패키지 `in_progress`, manifest 139 records·최종 36상태·실패 79건·PNG 36장·cleanup을 통과했고, exact 6-file tracked 범위·보호 파일 diff 0·`git diff --check`도 확인했습니다. 공개 원고·CONTENT_MAP·감사·자산·증거가 바뀌지 않은 closeout이므로 전체 npm check·build·브라우저·네트워크 검증은 다시 실행하지 않았습니다.

## 2026-08-13 아키텍처·프레임워크 기반 구현 체크포인트

Task 10은 CMU SEI의 공식 소프트웨어 아키텍처 자료, 기존에 직접 확인해 둔 SWEBOK 범위, MDN의 framework 설명을 제품 중립 주장 계약으로 재구성했습니다. SWEBOK 직접 새로고침은 HTTP 403으로 실패해 기존 확인 기록만 유지했고, ISO 공식 페이지는 표시된 이용 제한 때문에 본문 근거로 채택하지 않았습니다. 아키텍처·상세 설계·구현·기술 스택과 프레임워크·라이브러리·런타임·플랫폼·도구를 구분하되, 이 분류가 모든 조직의 보편 표준이라는 과장은 하지 않았습니다.

| 검증 항목 | 실제 명령 또는 방법 | 2026-08-13 결과 |
|---|---|---|
| 주장·출처 계약 | `research/architecture-framework-research-brief.md`, `research/source-map.md`, 기존 source-gap register를 대조하고 공식 URL만 읽기 전용 확인 | CMU SEI·MDN 직접 확인 성공, SWEBOK 새 조회 HTTP 403 보존, ISO 페이지 미채택. Task 10이 직접 뒷받침한 범위만 source map에 추가했고 허용 범위 밖 PBSG-007 정본 register는 `not-confirmed`로 유지 |
| 원고 구조·상태 | 필수 절 순서, 주요 용어·금지 기본값·AI 계약·frontmatter를 직접 검색하고 CONTENT_MAP을 연속 두 번 동기화 | 필요성부터 출처까지 요구 순서를 갖춘 본문 11,573자 `draft`, reviewEvidence 없음. 공식 Build Track 13장과 전체 상태 42 draft·13 seed·4 review·0 ready는 불변 |
| 도식 구조·접근성 | SVG·Mermaid의 라벨·순서·노드·화살표를 대조하고 `<title>`·`<desc>`·`role`·`aria-labelledby`·명시적 light/dark marker fill을 검사 | 560×772 SVG와 대응 MMD가 정확히 7개 노드·6개 순방향 관계·같은 7개 라벨과 순서를 사용함. 화살표는 상자 뒤에 있고 marker는 `currentColor`가 아닌 라이트 `#344054`·다크 `#d0d5dd`를 명시함 |
| 소비 문맥·감사 회계 | Deep Track·요구사항 인덱스·두 캡스톤 링크와 콘텐츠·시각 감사 표·finding register를 독립 계산 | 역링크 4개, Build Track 13 불변. 콘텐츠 판정 19/27/13·현재 finding 0/13/1, 시각 자산 13쌍·occurrence 16개·keep/reflow/split/replace 1/8/1/3·시각 finding 0/5 |
| 정적·전체 로컬 게이트 | `npm run sync:content-map` 2회, `npm run validate:content`, `npm run validate:references`, `npm run validate:plan`, `ASTRO_TELEMETRY_DISABLED=1 npm run check:static`, `ASTRO_TELEMETRY_DISABLED=1 npm run check`, JSON·범위·도식 계약·`git diff --check` | 최종 상태 문서까지 반영한 검증 결과를 이 작업의 ignored 보고서와 커밋 직전 staged diff에 함께 고정함. 빌드는 Astro 60 pages·Pagefind HTML 60개로 성공했고 기존 `site` 미설정 sitemap warning과 셸 `pyenv` rehash warning만 비차단 |
| 브라우저 4상태 | fresh build·127.0.0.1 preview·headed 실제 Google Chrome에서 1440×1000·390×844의 라이트·다크를 요청하고 실행 중 `output/playwright/task10-architecture-evidence/manifest.jsonl`에 기록 | 네 상태 모두 requested·prefers·HTML·effective 테마 일치, H1 1개·`검토용 초안` 배지 1개·대체 텍스트·7개 라벨·6개 화살표·두 marker fill 확인, 데스크톱 560×772·모바일 358×494, 전역 overflow 0·console warning/error 0·pageerror 0, PNG 4장 육안 확인 |
| 역링크·실패·정리 | 학습 경로·요구사항 인덱스·두 캡스톤에서 실제 클릭하고 모든 시도·정리 상태를 같은 manifest에 append | 역링크 4개 성공. 보존 실패 5건은 sandbox preview `EPERM`, JavaScript function wrapper, 셸 selector 확장, page-relative href 가정과 첫 partial batch이며 교정 뒤 최종 상태는 성공. Chrome close 0, preview Ctrl-C 예상 130, PID·4330 listener 부재를 cleanup record로 보존 |

이 구현은 공개 상태를 승격하지 않았습니다. 브라우저 manifest 20 records와 PNG 4장은 아키텍처 소비 페이지의 네 상태와 네 역링크를 뒷받침하지만 Task 21의 전체 사이트 회귀를 대신하지 않습니다. 구현 `62b4cb5`의 독립 검토는 Critical 0개·Important 0개·Minor 1개 `PASS`했고, 비차단 Minor는 과거 ignored JSONL의 `html_data_theme`·`effective_color_scheme` 짧은 키를 변경하지 않되 Task 21의 새 manifest에서는 `requested_theme`·`observed_prefers_color_scheme`·`observed_html_data_theme`·`observed_effective_color_scheme`의 정확한 이름만 최종 튜플로 인정하는 후속 경계입니다. 이에 M2-05는 `done` 3.0점, M2-06은 `done` 1.0점, 현재 인정 점수는 44.7점이고 M2 기반 단계 M2-01~06은 완료됐습니다. 콘텐츠 감사 19/27/13·현재 finding 0/13/1, 시각 감사 13쌍·16 occurrences·1/8/1/3·PBVA Important 5개, 공개 상태 42 draft·13 seed·4 review·0 ready와 Build Track 13은 변하지 않았습니다. 전체 M1·M3·M4·M5와 공개 베타는 완료되지 않았고, 이후 M5의 Claude Code Opus 5, effort `xhigh` 읽기 전용 검토·Codex 재판정·소유자 승인 순서를 유지하며 Task 10에서는 계정 로그인·설치·외부 쓰기·push·배포·공개 URL 검증을 수행하지 않았습니다.

Task 10 closeout은 상태 문서와 원장만 갱신하므로 공개 원고·자산·브라우저 증거를 다시 만들지 않았습니다. `npm run validate:content`, `npm run validate:references`, `npm run validate:plan`을 fresh 실행해 공개 콘텐츠 59개, 참조 Markdown/MDX 173개·학습 SVG 13개, 원장 배정 100점·중복 0개·누락 0개를 각각 종료 코드 0으로 확인했습니다. `PROJECT_MANIFEST.json` 파싱, 원장 38행·현재 인정 점수 44.7점·M2-05 `done` 3.0/3.0·M2-06 `done` 1.0/1.0, exact 6-file tracked 범위와 `git diff --check`도 통과했습니다. 전체 빌드·브라우저·네트워크 검증은 반복하지 않았습니다.

## 2026-08-13 공식 13장 학습 경로·검색 진입점 구현 체크포인트

`learning-paths.md`의 Build Track은 기존 핵심 11장 순서를 유지하고 12번 모임 참가 웹앱·13번 교육용 주가 대시보드 사례를 더한 정확한 13개 번호 링크입니다. 완전한 목록은 이 페이지에만 두고, 홈은 같은 앵커를 한 문장으로 참조하며 현재 도구 매핑은 확인일이 있는 교체 가능한 참고편으로 분리했습니다. `how-to-use-this-guide.md`는 `처음부터 따라가기`와 `필요한 내용만 찾기`를 병렬 H2로 두고 한국어 용어 → 영문·약어 → 문제 문장 → 용어집 → 관련 장의 한 문장 정의·시스템 위치·판단 규칙 순서를 안내합니다.

| 검증 항목 | 실제 명령 또는 방법 | 2026-08-13 결과 |
|---|---|---|
| 콘텐츠 지도·정적 계약 | 공개 원고 변경 뒤 `npm run sync:content-map`을 실행하고 즉시 한 번 더 실행한 뒤, 최종 상태에서도 재실행하고 `npm run validate:content`, `npm run validate:references`, `npm run validate:plan`을 각각 재실행 | 최초 동기화에서 변경된 공개 문서의 본문 문자 수를 갱신했고, 즉시 반복한 두 번째 실행과 최종 반복 실행은 모두 `콘텐츠 지도 변경 없음`; 공개 Markdown/MDX 59개, ignored Task 9 보고서를 포함한 참조 Markdown/MDX 170개·학습 SVG 12개, 원장 100점·중복 0·누락 0으로 종료 코드 0 |
| Build Track 정확성 | 계획의 13개 번호 링크 검사와 제목·상대 경로·순서 13쌍의 별도 Node 대조 | 개수 13, 기존 핵심 11장 순서, 모임 웹앱 12번, 주가 대시보드 13번, 중복·추가 0으로 종료 코드 0 |
| 공개 폐기 사례·금융 금지선 | `src/content/docs`, `src/assets/diagrams`, `src/assets/diagrams/source`에서 폐기 사례 패턴을 직접 검색하고 Task 9 공개 5문서에서 `투자 추천`, `수익 보장`, `실제 자동 주문`을 별도 검색 | 공개 폐기 사례 0건, 금지 금융 표현 0건. `docs/project`·`docs/superpowers`·`CHANGELOG.md`의 관리·역사 범위는 18개 파일 75개 일치 행으로 별도 계수해 소급 대량 수정하지 않음 |
| 감사·상태 회계 | 실제 frontmatter 59개, 공식 Build Track 13개, 콘텐츠 감사 59행과 PBCA·PBVA register, manifest를 한 스크립트에서 대조 | 전체 상태 `draft` 42·`seed` 13·`review` 4·`ready` 0, Build Track `draft` 10·`seed` 0·`review` 3·`ready` 0, 판정 conform 19·needs_edit 26·needs_rewrite 14, PBCA 0/8/1 + PBVA 0/5/0 = 현재 Critical 0·Important 13·Minor 1 |
| 전체 로컬 게이트 | `ASTRO_TELEMETRY_DISABLED=1 npm run check:static`과 `ASTRO_TELEMETRY_DISABLED=1 npm run check` fresh 실행 | 둘 다 종료 코드 0; 최종 Node 테스트 65/65, 공개 콘텐츠 59개, ignored Task 9 보고서를 포함한 참조 170개·SVG 12개, Astro 60 pages, Pagefind HTML 60개, 빌드 HTML 60개·본문 리터럴 Markdown 0개. 기존 `site` 미설정 sitemap warning과 셸 `pyenv` rehash warning만 비차단 |
| Pagefind 데스크톱·모바일 | fresh build·preview와 headed 실제 Google Chrome에서 1440×1000·390×844 light로 `백엔드`, `인증`, `fallback`, `dry-run`, `Supabase`, `주가`, `모임 참가`를 각각 검색·클릭하고 ignored `output/playwright/task9-search-evidence/manifest.jsonl`에 실행 중 기록 | 성공 튜플 14개·고유 키 14개·누락 0·중복 0. 각 튜플은 시작 URL, 결과 제목·경로, 클릭 대상, H1 1개, 상태 배지 1개, 대상 문구, 전역 overflow 0, console warning/error 0, pageerror 0, 홈 뒤로 이동, screenshot, 실제 테마와 성공 상태를 보존함 |
| 학습 경로 실제 렌더 | 같은 두 Chrome 뷰포트에서 학습 경로의 Build 절 DOM·링크·문구와 전체 페이지 PNG를 기록 | 두 상태 모두 Build 13개 제목·경로·순서, 순차·검색 방식, 모임·주가 사례 링크, H1 1개·배지 1개, 전역 overflow 0, console warning/error 0, pageerror 0. 데스크톱의 responsive 중복 링크 2개와 모바일의 실제 링크 1개는 각 viewport DOM 사실로 기록함 |
| 실패 시도·프로세스 정리 | manifest에 성공만 선별하지 않고 preview·browser·DOM selector·theme setup 시도를 즉시 append하고, 정리 시작 기록 뒤 두 브라우저 close·preview interrupt·PID와 포트 부재를 확인 | 보존 실패 5건: sandbox preview `listen EPERM`, sandbox Playwright cache `EPERM`, Starlight heading wrapper를 잘못 가정한 학습 경로 selector 2건, 모바일 visible theme selector timeout 1건. 교정 뒤 최종 상태는 모두 성공했고 desktop/mobile close exit 0, preview Ctrl-C 예상 exit 130, 두 PID와 TCP 4327 listener 부재를 cleanup 완료 record로 보존함 |

추가 정적 검증의 첫 제목·경로 대조 명령은 셸 인용 오류로 Node 코드가 실행되기 전에 실패했고, 단순한 줄 파서로 바꾼 재실행이 13쌍을 통과했습니다. 첫 회계 스크립트는 콘텐츠 감사의 PBCA만 세어 Important 8건으로 실패했으며, 별도 시각 감사 PBVA 5건을 같은 계산에 포함한 재실행이 현재 Important 13건을 확인했습니다. 두 실패는 원고 결함으로 숨기거나 성공으로 바꾸지 않았고, 수정된 검증 결과와 원인을 함께 남깁니다.

이 구현은 공개 문서 상태를 승격하지 않았습니다. 구현 `0cf4b03`의 exact 13-file scope, Build 13, 현행 폐기 사례 0건, 역사 범위, 감사 19/26/14·현재 Critical 0개·Important 13개·Minor 1개, JSONL 30 records·검색 성공 14개·학습 경로 상태 2개·실패 5개·cleanup을 대조한 독립 검토는 Critical 0개·Important 0개·Minor 0개 `PASS`했습니다. 이에 M2-04를 `done` 4.0점·현재 인정 점수 40.7점으로 닫았지만 전체 M1은 남은 Important 13개 때문에 `in_progress`이고 M3-NAV도 Task 11 전 `in_progress` 2.0점입니다. 이후 검토는 Claude Code Opus 5, effort `xhigh` 읽기 전용 검토·Codex 재판정·소유자 승인 순서를 유지하고 사람 검토는 실제 수행 시 선택 증거로 보존합니다. Task 9의 manifest는 이 범위의 검색·경로 증거이지만 Task 21의 전체 페이지·테마·자산·접근성 회귀를 대신하지 않으며, push·배포·실제 공개 URL 검증은 수행하지 않았습니다.

Closeout 상태 문서 반영 뒤 `npm run validate:content`, `npm run validate:references`, `npm run validate:plan`을 fresh 실행해 공개 콘텐츠 59개, 참조 Markdown/MDX 170개·학습 SVG 12개, 원장 배정 100점·중복 0개·누락 0개를 각각 종료 코드 0으로 확인했습니다. 별도 JSON·회계 검사는 원장 38행·현재 인정 점수 40.7점, M2-04 `done` 4.0/4.0, M3-NAV `in_progress` 2.0/4.0, 전체 및 Build Track 상태와 감사 59행×17열·현재 Critical 0개·Important 13개·Minor 1개를 확인했습니다. 공개 원고·자산·브라우저 증거가 바뀌지 않은 closeout이므로 전체 빌드와 브라우저는 다시 실행하지 않았습니다.

## 2026-08-13 날짜 있는 현재 도구 매핑 구현 체크포인트

Task 7의 날짜 있는 fact pack 가운데 `confirmed` 17개와 적용 경계를 표시한 `limited` 4개만 공개 참고편에 사용했습니다. Supabase 9행·Vercel 8행·Codex Sites 4행을 영속 책임·현재 기능·남은 사용자 결정·직접 증거·확인일·일반화 금지선의 같은 6열로 제시했고, limited 4개는 본문에서 조건부 기능으로 표시했습니다. 공개 공식 URL이 정확한 입력 아티팩트 구성과 운영 롤백 범위를 직접 뒷받침하지 않는 `SITES-ARTIFACT-01`·`SITES-ROLLBACK-01`은 제품 기능으로 게시하지 않았습니다.

| 검증 항목 | 실제 명령 또는 방법 | 2026-08-13 결과 |
|---|---|---|
| 콘텐츠 지도 재동기화 | 공개 원고 최종 변경 뒤 `npm run sync:content-map` 2회 실행 및 전후 diff 대조 | 첫 실행 갱신·59개 통과, 두 번째 실행 `콘텐츠 지도 변경 없음`; 실제 공개 Markdown·CONTENT_MAP·마스터 인벤토리·manifest 모두 59개, 상태 `draft` 42·`seed` 13·`review` 4·`ready` 0 |
| 검증기 계약 TDD | 테스트의 문서 수 기대값을 먼저 59로 바꾸고 focused RED 뒤 검증기 상수 58→59, focused·전체 테스트 재실행 | focused RED 0/1 뒤 GREEN 1/1, 계획 검증 테스트 23/23, 전체 Node 테스트 65/65; 다른 validator 로직 완화 0 |
| 정적·전체 로컬 게이트 | `npm run validate:content`, `npm run validate:references`, `npm run validate:plan`, `ASTRO_TELEMETRY_DISABLED=1 npm run check:static`, `ASTRO_TELEMETRY_DISABLED=1 npm run check` | 모두 종료 코드 0; 최종 문맥 보고서 반영 뒤 콘텐츠 59개, 참조 Markdown/MDX 168개·학습 SVG 12개, 원장 100점·중복 0·누락 0, Astro 60 pages·Pagefind HTML 60개·빌드 HTML 60개·본문 리터럴 Markdown 0개 |
| 보존된 데스크톱·모바일 픽셀 증거 | ignored `output/playwright/task8-current-tool-desktop.png`·`task8-current-tool-mobile.png` 육안 대조 | 1440×1000·390×844 뷰포트에서 만든 전체 페이지 PNG 2장이 페이지 제목·`검토용 초안` 배지·Supabase·Vercel·Codex Sites의 세 표 영역이 데스크톱과 모바일에 렌더된 모습을 뒷받침함. PNG만으로 DOM exact count·전역 overflow 수치·console·pageerror·클릭·검색·프로세스 정리를 독립 검증하지 않음 |
| 구현 실행 중 DOM·브라우저 관찰 | fresh 빌드의 127.0.0.1 preview와 headed 실제 Google Chrome에서 구현자가 관찰해 Task 8 보고서에 기록 | 각 뷰포트 H1 1개·정확한 배지 1개·제품 표 3개·전역 overflow 0·console error/warning 0·pageerror 0과 모바일 표 내부 제한 스크롤을 관찰했으나 상태별 manifest·browser log를 보존하지 않아 독립 재현 증거가 아님. Task 21에서 모든 시도와 상태를 manifest·log로 다시 검증함 |
| 연결 문맥 구현 관찰 | API·데이터베이스·인증, 빌드·배포·도메인·DNS, 첫 풀스택 프로젝트에서 구현 실행 중 새 링크를 클릭 | 세 문서의 링크와 `/reference/current-tool-mapping/` 이동을 관찰·보고했지만 클릭 시도·결과 log를 보존하지 않아 독립 재현 증거가 아님. Task 21에서 소비 문맥별 링크 수·출발·도착 경로를 다시 기록함 |
| Pagefind UI 구현 관찰 | 구현 실행 중 `Supabase`, `Vercel`, `데이터베이스`, `authorization`, `배포`를 fresh 검색 | 관련 핵심 결과의 제목·경로를 관찰·보고했고 Sites 미게시 경계용 성공 조건은 만들지 않았으나 검색 상태·결과 manifest 또는 log를 보존하지 않음. Task 21에서 검색어별 실제 제목·경로와 모든 시도를 다시 기록함 |
| 범위·세션 정리 | Git 허용 경로 검사와 구현 실행 중 브라우저 close·preview 중지·4338 listener·세션 process 확인 | tracked 범위는 Git diff로 재검증 가능함. 브라우저·preview·port·session 잔존 0은 구현 실행에서 관찰·보고했지만 process log를 보존하지 않아 Task 21에서 종료 상태와 함께 다시 기록함 |

초기 실패도 최종 성공과 분리해 기록합니다. 새 파일을 CONTENT_MAP에 등록하기 전 첫 동기화는 “문서가 콘텐츠 지도에 없습니다”로 실패했고, 59개 인벤토리와 기존 검증기 58개 상수의 불일치로 첫 `validate:plan`도 실패했습니다. 브라우저 단계에서는 sandbox 내부 preview의 `listen EPERM`, Playwright 자동화 초안의 run-code 구문 오류·상대 href selector timeout·Node VM의 `URL` 미정의 오류를 구현자가 교정했다고 보고했습니다. 이 브라우저 초기 실패와 교정 뒤 DOM·클릭 결과에는 별도 보존 log가 없으므로 독립 재현 증거로 사용하지 않고 Task 21에서 실패 시도를 포함한 manifest·log로 다시 확인합니다. 전체 빌드에는 기존 `site` 설정 미지정 sitemap warning 1개와 셸의 `pyenv` rehash 경고가 있었지만 종료 코드와 자동 검증 수치는 성공이었고, 이번 작업은 배포 설정이나 사용자 환경을 변경하지 않았습니다.

M2-03은 Task 8 구현 `4a03844`와 Fix Round 1 `e08ba8e`를 같은 리뷰어가 Critical 0개·Important 0개·Minor 0개 `PASS`로 재검토했으므로 `done` 1.5점이고 현재 인정 점수는 36.7점입니다. 게시된 fact claim은 21개이고 공개 공식 근거가 부족한 Sites 2개는 미게시이며, 공개 문서 59개의 상태는 `draft` 42개·`seed` 13개·`review` 4개·`ready` 0개입니다. 보존된 PNG 2장 외의 DOM exact count·링크·검색·console·pageerror·log·cleanup은 위 표와 같이 Task 21에서 다시 검증합니다. 현재 Important finding 15개와 폐기 사례 잔존 1건 때문에 전체 M1은 계속 `in_progress`이고 M3-REF도 `in_progress` 1.0점이며, push·배포·실제 공개 URL 검증은 수행하지 않았습니다.

## 2026-08-10 독립 검토 전 Build Track 사례 정렬 체크포인트

이 절은 `Git과 GitHub는 다릅니다`, `빌드·배포·도메인·DNS`, `로그·모니터링·백업`, `AI 코딩 에이전트와 일하는 법`의 모임 참가 웹앱 사례 정렬을 마친 뒤 새로 얻은 증거입니다. 아래 날짜가 있는 역사적 검증 결과와 당시 상태 집계를 소급해 바꾸지 않으며, 장별 감사는 `docs/project/reviews/2026-08-07-draft-case-alignment-audit.md`에 기록했습니다.

| 검증 항목 | 실제 명령 또는 방법 | 2026-08-10 결과 |
|---|---|---|
| 최종 전체 로컬 게이트 | SDD 임시 장부 이동과 문맥 반영 뒤 `ASTRO_TELEMETRY_DISABLED=1 npm run check` fresh 실행 | 종료 코드 0, Node 테스트 27개 통과·실패 0개, 공개 콘텐츠 58개, 새 tracked 감사 문서를 포함한 참조 Markdown/MDX 143개, 학습 SVG 12개, Astro HTML 59개, 빌드 본문 리터럴 Markdown 0개; `site` 미설정으로 sitemap 통합을 건너뛴 기존 경고만 비차단 |
| 네 장 구조·문자 수·상태 | exact H2와 frontmatter·`CONTENT_MAP.md`·`PROJECT_MANIFEST.json`·본문 문자 수 대조 | 네 파일마다 `개발 사례: 모임 참가 웹앱` 정확히 1회, Git 14,058자·배포 15,074자·운영 17,521자·에이전트 18,384자 일치, 네 장 모두 `draft`와 `reviewEvidence` 없음; 전체 `review` 4개·`draft` 41개·`seed` 13개·`ready` 0개, 공식 12장 Build Track `review` 3개·`draft` 9개·`seed` 0개·`ready` 0개 일치 |
| Task 3 finding·fix·재검토 | 첫 Codex 태스크 검토 정본, fix commit `887c4f4eaa7c2a2d2cd95d256bd08d841b7f23ff`, 같은 reviewer 재검토 대조 | 첫 결과 `NEEDS CHANGES`, Critical 0건·Important 1건·Minor 0건; `closed`·`full`·`미인증`과 서버 또는 인증 의존성 오류를 독립 분류하고 `미인증 요청의 거절`로 좁힌 뒤 `PASS`, Critical 0건·Important 0건·Minor 0건, finding 해소·회귀 없음·17,521자 일치. 이 결과는 Opus·사람 검토나 저장소 `reviewEvidence`가 아님 |
| Task 5 finding·fix·재검토 | 구현·감사 commit `515e205d5406db35ae0cbb6ea052c71f2431bedb` 뒤 첫 Codex 태스크 검토, heading fix commit `fc785097c876c9dcdb70b4cd8735e7051380e802`, 같은 reviewer 재검토 대조 | 첫 결과 `NEEDS CHANGES`, Critical 0건·Important 1건·Minor 0건; 2026-08-07 일반 헤딩 네 개가 날짜·역사 표지 없이 최신 2026-08-10 상태와 독립적으로 읽힐 때 current-state 드리프트를 만드는 finding을 `VERIFICATION_REPORT.md` 한 파일의 헤딩 네 개만 `2026-08-07 ... (역사 기록)`으로 바꿔 해소한 뒤 `PASS`, Critical 0건·Important 0건·Minor 0건. 이 결과는 Opus·사람 검토나 저장소 `reviewEvidence`가 아님 |
| 네 장 로컬 Chrome | fresh 빌드의 로컬 preview와 실제 Chrome, 각 경로 1440×1000·390×844 | 8개 뷰포트 모두 main H1 정확히 1개·`검토용 초안` 정확히 1개·공통 H2·해당 H3와 핵심 사례 문구 존재, html/body overflow 각 0, console error/warning 각 0; Git 4행 복구 표, 배포 6행 책임 표, 운영 결과 분포·5행 신호 표·4단계 복구 목록, 에이전트 읽기 전용·변경 계약 code block과 8개 인수 항목 확인. 모바일의 넓은 표·code block 자체 제한 스크롤은 페이지 전역 넘침과 분리 |
| ignored SDD 장부 | 필요한 입력을 모두 읽은 뒤 `.superpowers/sdd/2026-08-07-draft-build-track-case-alignment`를 `/private/tmp/vibe-handbook-sdd-019fcd36/draft-build-track-case-alignment-ledger`로 이동하고 양쪽 경계·tracked 상태 확인 | 저장소 scratch 경로 없음, 외부 장부에 원래 6개 파일 보존, 이동으로 생긴 tracked 변경 0개, 새 감사 추가 전 fresh check의 참조 수 142개에서 최종 143개로 예상대로 1개 증가 |
| 범위·프로세스 정리 | `git diff --check`, 허용 파일 범위·Playwright 세션·preview PID·4327 listener 확인 | 허용된 문맥 6파일만 변경, Playwright Chrome 세션·preview·4327 listener 잔존 0; 물리 기기·Chrome 외 브라우저·스크린리더·실제 서비스·데이터베이스·원격 CI·push·Pull Request·merge·배포·DNS·HTTPS는 확인하지 않음 |

Task 5에서는 Opus를 실행하지 않았습니다. Tasks 1~4의 Codex 태스크 검토와 Task 5 구현·감사 commit 뒤 수행한 첫 Codex 태스크 검토·heading fix·재검토, 자동·브라우저 증거는 Opus·사람 검토·저장소 `reviewEvidence` 또는 생명주기 승격 증거가 아니며 네 장은 모두 `draft`를 유지합니다. 다음 독립 계획은 `docs/superpowers/plans/2026-08-07-current-tool-mapping.md`이고, 제품별 현재 기능·설정·제약의 공식 자료 확인처럼 네트워크가 필요한 조사는 별도 승인 게이트입니다. `src/content/docs/start-here/learning-paths.md`의 `공개 반도체 데이터` 1건은 후속 `learning-path-search-and-review` 범위이므로 수정하지 않았습니다.

## 2026-08-10 반복 사례 전환 체크포인트

이 절은 반복 사례 전환 완료 시점의 새 검증 결과를 추가한 것이며, 아래 2026-08-07 역사적 결과와 당시 상태 집계를 현재 결과로 덮어쓰지 않습니다.

| 검증 항목 | 실제 명령 또는 방법 | 2026-08-10 결과 |
|---|---|---|
| 콘텐츠 지도 재생성 | `npm run sync:content-map` | 공개 Markdown/MDX 58개 검증 통과, `CONTENT_MAP.md` 변경 없음 |
| 전체 로컬 게이트 | Node.js 22.16.0·npm 10.9.2에서 `ASTRO_TELEMETRY_DISABLED=1 npm run check` fresh 실행 | 종료 코드 0, Node 테스트 27개 통과·실패 0개, 공개 콘텐츠 58개, 참조 Markdown/MDX 142개와 학습 SVG 12개 통과, Astro HTML 59개 생성, 빌드 본문 리터럴 Markdown 0개; `site` 미설정으로 sitemap 통합을 건너뛴 경고 1건은 비차단 |
| 매니페스트·상태·문자 수 | `PROJECT_MANIFEST.json` JSON 파싱과 실제 frontmatter·본문 문자 수·`CONTENT_MAP.md`를 저장소 파서로 대조 | JSON 파싱 성공, 전체 `review` 4개·`draft` 41개·`seed` 13개·`ready` 0개, 공식 Build Track `review` 3개·`draft` 9개·`seed` 0개·`ready` 0개, 공개 문서 58개와 제목·상태·경로·본문 문자 수 불일치 0개 |
| 검색 인덱스 산출물 | `find dist/pagefind -type f \| wc -l` | 파일 71개로 0보다 큼; 로컬 빌드에서 Pagefind 인덱스가 생성됐다는 증거일 뿐 공개 검색 UX·원격 CI·배포 성공의 증거는 아님 |
| 이전 사례 잔존 표현 | `rg -n "반도체|북마크|bookmark|기업 A|기업 B|reportId|rpt-42" src/content/docs src/assets/diagrams`와 Task 1~5의 원고 6개·SVG/Mermaid 2쌍을 대상으로 한 동일 검색 | 공개 전체에는 `src/content/docs/start-here/learning-paths.md:36`의 `공개 반도체 데이터` 1건이 남고, 영향 감사에서 후속 `learning-path-search-and-review`의 실질 변경으로 분류한 의도된 위치이므로 수정하지 않음; 이번 계획이 수정한 원고·자산 범위는 0건. Task 6 계획의 공개 전체 0건 예상과 실제 영향 감사 범위의 차이를 이 검증 경계로 기록하며 실패를 0건으로 과장하지 않음 |
| 역사 자료·diff 보존 | `git diff --name-only 56a0fd2..HEAD -- research/api-database-auth-research-brief.md ':(glob)docs/project/reviews/2026-08-05-*.md' ':(glob)docs/project/reviews/2026-08-06-*.md'`, 역사 검토 파일 수 확인, `git diff --check` | 내부 연구 브리프와 2026-08-05·06 역사 검토 파일 변경 0개, 역사 검토 파일 29개 보존, 공백 오류 0개 |
| 여섯 장 로컬 Chrome | `npm run preview`와 글로벌 `/opt/homebrew/bin/playwright-cli`, 1440×1000·390×844 | 여섯 페이지의 12개 뷰포트 모두 H1 1개, 시스템·클라이언트·HTTP·API 장은 정확한 `검토용 초안`, 브라우저·PRD 장은 정확한 `검토 중` 배지, 모임·fixture 핵심 문구, 전역 가로 넘침 없음, 콘솔 오류·경고 0개; PRD 장에서 데이터 분석가의 주가 대시보드 사례 내부 링크 이동과 도착 H1 1개 확인 |
| 두 SVG의 실제 Starlight UI | 시스템 장의 `analytics-dashboard-architecture.svg`와 API 장의 `api-database-auth-flow.svg`를 라이트·다크 테마에서 실제 Chrome으로 시각 확인 | 두 SVG 모두 양쪽 테마에서 라벨·선·화살표 머리가 읽히고 잘림·겹침·전역 가로 넘침 없음; analytics의 다크 marker 회귀는 재현되지 않았고 API의 실선 흐름·주황 점선 실패 분기·초록 commit 카드도 양쪽 테마에서 구분됨 |
| 프로세스 정리·검증 범위 | Playwright 세션 종료, preview 중단 뒤 프로세스 목록 확인 | Playwright·preview 잔존 프로세스 0개; 물리 기기, Chrome 외 브라우저, 스크린리더, 원격 CI와 실제 배포는 이번 체크포인트 범위 밖 |

반복 사례 전환으로 실질 변경한 `소프트웨어는 시스템입니다`, `클라이언트·서버·풀스택`, `HTTP 요청과 응답`, `API·데이터베이스·인증`과 주가 대시보드 캡스톤은 새 독립 Opus 검토와 사람 검토 전까지 `draft`를 유지합니다. Task 5에서 사례 이름만 표면 편집한 `브라우저·DOM·렌더링`과 `PRD·두 종류의 SDD·TDD`는 기존 `review`를 유지하지만 `ready`는 아닙니다. 이 체크포인트 당시 다음 독립 계획은 `draft-build-track-case-alignment`였고, 그 계획을 완료한 뒤의 현행 순서는 위 최신 체크포인트처럼 `current-tool-mapping` → `learning-path-search-and-review` → `architecture-framework-foundation`입니다.

## 2026-08-07 검증 결과 (역사 기록)

| 검증 항목 | 실행 명령 또는 방법 | 결과 |
|---|---|---|
| Node 단위 테스트 | `node --test` | 26개 통과, 실패 0개 |
| 공개 콘텐츠 규칙 | `node scripts/validate-content.mjs` | 게시 문서 58개, 중복 본문 H1 0개, 영문 병기 굵은 용어 뒤 한국어 조사 렌더링 위험 0개, 콘텐츠 지도 58행 일치, 저장소 내부 검토 증거 경로 존재 확인 |
| 콘텐츠 지도 동기화 | `npm run sync:content-map` 연속 2회 | 첫 실행에서 상태·본문 문자 수·집계 갱신, 두 번째 실행은 변경 없음, 기존 제목·행 순서·공개 경로 보존 |
| 내부 참조·SVG 접근성 | `node scripts/validate-references.mjs` | 전체 Markdown/MDX 128개, 공개 fragment 링크와 학습 SVG 12개 통과 |
| JavaScript 문법 | 10개 `.mjs` 파일에 `node --check` | 오류 0개 |
| JSON 문법 | Python 표준 `json` 파서 | 오류 0개 |
| YAML·frontmatter 문법 | PyYAML 파서 | 오류 0개 |
| 공개 경로 중복 | 콘텐츠 경로 58개 계산 | 중복 0개 |
| 다이어그램 대응 | SVG와 Mermaid 파일 stem 비교 | 12쌍 일치 |
| SVG XML·접근성 | XML 파싱 및 `title`·`desc` 확인 | 12개 통과 |
| 사이드바 순서 | `astro.config.mjs`의 14개 항목 비교 | 설계 순서와 일치 |
| 잠금 파일 재현성 | `npm ci --offline` | 362개 패키지 설치, 취약점 0개, 종료 코드 0 |
| 실제 정적 사이트 빌드 | `ASTRO_TELEMETRY_DISABLED=1 npm run check` | 59개 페이지와 검색 인덱스 생성, 콘텐츠 HTML 58개의 H1 각 1개·브라우저 제목 58개 고유, 종료 코드 0 |
| 공개 본문 Markdown 렌더링 | `npm run validate:built` | 빌드된 59개 HTML의 `<main>`에서 `<pre>`·`<code>` 예시를 제외하고 리터럴 `**` 0개, 일반 본문 노출과 `main` 검사 누락을 자동 차단 |
| 로컬 CI 게이트 구성 | `.github/workflows/ci.yml`, `.github/workflows/deploy.yml`, `.github/pull_request_template.md` 대조 | 일반 CI·배포·Pull Request 체크리스트가 모두 정적 검사·빌드·생성 HTML 검사를 포함하는 `npm run check`를 사용함, 원격 실행은 미검증 |
| GitHub Pages 하위 경로 | `PUBLIC_SITE_URL=https://foodie.github.io PUBLIC_BASE_PATH=/vibe-dev-handbook npm run build` | canonical URL, 자산·문서 링크, sitemap에 하위 경로 반영, 종료 코드 0 |
| 브라우저 확인 | `npm run preview`와 Playwright | 홈·사이드바·검색·이전·다음·다이어그램·상태 배지·Build Track 링크, 1440px·390px 화면 통과, 콘솔 오류·경고 0개 |
| 파일·폴더·경로 장 렌더링 | `npm run preview`와 Playwright | 최종 `review`에서 H1 1개·H2 18개·H3 17개·표 9개·체크 항목 12개·코드 블록 7개와 `검토 중` 배지, 실제 저장소 트리·진단 절차·상대 경로 계산과 AI 계약 연습을 확인, 1440×1000과 390×844에서 페이지·본문 가로 오버플로 없음·모바일의 넓은 표 4개는 요소 내부에서만 스크롤·콘솔 오류·경고 0개 |
| 파일·폴더·경로 장 Opus 검토 | Claude Code 2.1.222, `claude-opus-5`, `max`, 계획 모드와 `Read` 전용 권한 | 종료 코드 0·정상 결과 본문, P0 1건·P1 11건·P2 10건·독립 루브릭 15/18, 검토 전후 17개 입력 결합 SHA-256 `bbd2d8f75bfa3423c75097b41bf3dee56738d8ac1c24a2f665ddfb42ec079654`와 대상 원고 SHA-256 `135cd738b6fdf1e69001451cd0bd12c3e69d09669b2c24a3abadd30aa810553a` 일치, 웹 검색·웹 가져오기·권한 거부 0건 |
| 파일·폴더·경로 장 Codex 재판정·반영 | Opus 정본을 실제 원고·저장소·인접 장·공식 출처에 대조 | P0 수용 1건, P1 수용 9건·부분 수용 1건·기각 1건, P2 수용 8건·부분 수용 1건·보류 1건으로 판정하고 Git 상태·경로 진단·운영체제와 도구 범위·생성 절차·두 실전 연습을 보완, 공식 출처·`request:`·자동 검증·렌더링 증거를 갖춰 `review` 승격 |
| HTTP 보완 렌더링 | `npm run preview`와 Playwright | HTTPS 설명·브라우저 정책 표·판단 규칙이 접근성 트리에 표시되고, H1 1개·`review`의 `검토 중` 배지·1440px와 390px 페이지 전역 가로 오버플로 없음·콘솔 오류·경고 0개, 390px의 표 1개와 코드 블록 5개는 콘텐츠 폭 안의 의도된 내부 스크롤 영역 |
| 브라우저·DOM 장 렌더링 | `npm run preview`와 Playwright | 최신 반영본에서 자원·모델·과정 구분, 세 화면 흐름, 다섯 증거 계층, 안전한 연습과 이전 자산 진단이 접근성 트리에 표시되고 H1 1개·표 5개·체크 항목 12개·`review`의 `검토 중` 배지 확인, 1440×1000과 390×844에서 페이지·본문·표 가로 오버플로 없음·Console 오류·경고 0개 |
| 브라우저·DOM 장 자체 점검 | `docs/project/quality-rubric.md`와 검토 준비 기록 | 18점 중 17점, 치명 항목 없음, 앱 상태 반영·브라우저 화면 계산, 같은 문서 갱신·새 문서 로드, 증거 계층·도구·viewport·안전한 연습 경계 보완 |
| 브라우저·DOM 장 Opus 검토 | Claude Code 2.1.221, `claude-opus-5`, `max`, 계획 모드와 `Read` 전용 권한 | 첫 시도는 모델 실행 전 세션 한도 API `429`로 본문이 없었지만 재실행은 종료 코드 0·P0 0건·P1 10건·P2 12건·독립 16/18·치명 항목 없음으로 정상 완료, 11개 입력과 대상 원고의 검토 전후 SHA-256 일치, 웹 검색·웹 가져오기·권한 거부 0건 |
| 브라우저·DOM 장 Codex 재판정·반영 | Opus 정본을 실제 원고·인접 장·용어집·출처 지도에 대조 | P1 수용 8건·부분 수용 2건, P2 수용 8건·부분 수용 3건·기각 1건으로 판정한 7개 묶음을 원고와 출처 지도에 반영하고 용어집은 변경하지 않음, `request:`·자동 검증 증거를 갖춰 `review` 승격 |
| 시스템 장 자체 점검 | `docs/project/quality-rubric.md`와 검토 준비 기록 | 18점 중 17점, 치명 항목 없음, 여섯 시스템 렌즈·대시보드 사례·증거 범위·실패와 복구·AI 작업 계약 보완 |
| 시스템 장 Opus 검토·Codex 재판정 | Claude Code 2.1.221, `claude-opus-5`, `max`, 계획 모드와 `Read` 전용 권한 및 저장소 근거 대조 | 결과 전용 실행 종료 코드 0·정상 결과 본문, P0 0건·P1 12건·P2 12건·독립 루브릭 16/18·치명 항목 없음, 검토 전후 11개 입력 파일과 대상 원고 SHA-256 일치, 웹 검색·웹 가져오기·권한 거부 0건, Codex가 P1 수용 8건·부분 수용 4건과 P2 수용 9건·중복 통합 1건·부분 수용 1건·기각 1건으로 재판정하고 7개 묶음을 원고·용어집·출처 지도에 반영, `request:`·자동 검증 증거를 갖춰 `review` 승격 |
| 시스템 장 렌더링 | `npm run preview`와 Playwright | 최신 반영본에서 여섯 렌즈·증거 구분·대시보드 SVG와 대체 텍스트·체크리스트가 접근성 트리에 표시되고, H1 1개·H2·H3 23개·`review`의 `검토 중` 배지·표 4개·체크 항목 14개 확인·1440×1000과 390×844에서 페이지·표·코드 블록 가로 오버플로 없음·콘솔 오류·경고 0개 |
| 클라이언트·서버 장 자체 점검 | `docs/project/quality-rubric.md`와 검토 준비 기록 | 18점 중 17점, 치명 항목 없음, 역할·책임·신뢰 경계·상태 권위·증거 범위·정적/동적 선택과 실패 복구 보완 |
| 클라이언트·서버 장 Opus 검토·Codex 재판정 | Claude Code 2.1.221, `claude-opus-5`, `max`, 계획 모드와 `Read` 전용 권한 및 저장소 근거 대조 | 정본 복구 실행 종료 코드 0·실제 Opus 결과 전문, P0 0건·P1 8건·P2 13건·독립 16/18·치명 항목 없음, 검토 전후 현재 13개 입력 결합 SHA-256과 대상 원고 SHA-256 일치, 웹 검색·웹 가져오기·권한 거부 0건, Codex가 P1 수용 7건·부분 수용 1건과 P2 수용 10건·부분 수용 3건으로 재판정하고 7개 묶음을 원고·용어집·출처 지도에 반영, `request:`·자동 검증 증거를 갖춰 `review` 승격 |
| 클라이언트·서버 장 렌더링 | `npm run preview`와 Playwright | 두 분류 축·동적/정적 증거·브라우저 공개 범위·HTTPS·재시도·상태 충돌·캐시·최신성 전환 신호와 SVG 대체 텍스트가 접근성 트리에 표시되고, H1 1개·H2 16개·H3 8개·표 5개·체크 항목 14개·SVG 1개 확인, 1440×1200과 390×844에서 페이지·본문·표 가로 오버플로 없음·긴 코드 블록만 모바일 내부 스크롤·콘솔 오류·경고 0개, 인접 장과 용어집 앵커 실제 이동 통과 |
| PRD·SDD·TDD 장 자체 점검 | `docs/project/quality-rubric.md`와 검토 준비 기록 | 18점 중 17점, 치명 항목 없음, 네 개념의 범주·추적성·수용 기준·TDD 과정 증거·위험별 절차와 AI 점검 계약 보완 |
| PRD·SDD·TDD 장 Opus 검토 | Claude Code 2.1.221, `claude-opus-5`, `max`, 계획 모드와 `Read` 전용 권한 | 첫 시도는 모델 실행 전 API `429`로 본문이 없었지만 재실행은 종료 코드 0·P0 0건·P1 11건·P2 13건·독립 15/18·치명 항목 없음으로 정상 완료, 17개 입력과 대상 원고의 검토 전후 SHA-256 일치, 웹 검색·웹 가져오기·권한 거부 0건 |
| PRD·SDD·TDD 장 Codex 재판정·반영 | Opus 정본을 실제 원고·인접 장·용어집·템플릿·출처 지도와 SVG에 대조 | 수용 18건·부분 수용 4건·기각 2건으로 재판정한 6개 묶음을 원고·게시 SVG·Mermaid 원본·출처 지도에 반영하고, `request:`·자동 검증 증거를 갖춰 `review` 승격 |
| PRD·SDD·TDD 장 렌더링 | `npm run preview`와 Playwright | 대표적 Spec-Driven Development 범위·Plan과 설계 문서의 관계·TDD 책임 경계와 과정 증거·교육용 사례·상태별 권위 있는 원본·검증에서 요구로 돌아가는 피드백 경로가 접근성 트리와 SVG에 표시됨, H1 1개·H2 17개·H3 20개·표 4개·체크 항목 12개·`review`의 `검토 중` 배지 확인, 1440×1000과 390×844에서 페이지·표 가로 오버플로 없음·모바일의 긴 코드 블록 4개만 의도된 내부 스크롤·콘솔 오류·경고 0개 |
| 테스트 전략 장 자체 점검 | `docs/project/quality-rubric.md`와 검토 준비 기록 | 반영본 18점 중 17점, 치명 항목 없음, 실행 범위와 목적·초점·오라클·대역·불안정성·안전한 운영 대상·AI 검증 보고 재판정 절차 보완, 세부 직접 출처 부족으로 근거 1점 유지 |
| 테스트 전략 장 Opus 검토·Codex 재판정·반영 | Claude Code 2.1.223의 `claude-opus-5` Max 읽기 전용 결과와 실제 원고·근거 대조, `ASTRO_TELEMETRY_DISABLED=1 npm run check` | 종료 코드 0·P0 0건·P1 10건·P2 11건·독립 루브릭 14/18·치명 항목 없음, 검토 전후 18개 입력 결합 SHA-256과 대상 원고 SHA-256 일치, 웹 검색·웹 가져오기·권한 거부 0건, Codex 재판정 P1 수용 8건·부분 수용 2건과 P2 수용 9건·부분 수용 1건·보류 1건을 반영, static testing 분류는 직접 출처 확인 전 보류, 테스트 26개·공개 콘텐츠 58개·참조 128개·학습 SVG 12개·생성 HTML 59개·일반 본문 리터럴 Markdown 0개를 통과하고 실제 `request:`·자동 증거를 갖춰 `review` 승격 |
| 테스트 전략 장 렌더링 | `npm run preview`와 Playwright | 최종 `review`에서 H1 1개·H2 20개·H3 23개·표 2개·코드 블록 2개·체크 항목 16개·`검토 중` 배지와 실행 범위·종료 코드·운영 대상·값 상태 보완 문구를 확인, 1440×1000과 390×844에서 페이지·본문·표·코드 블록 가로 오버플로 없음·콘솔 오류·경고 0개 |
| Git·GitHub 장 자체 점검 | `docs/project/quality-rubric.md`와 검토 준비 기록 | 18점 중 17점, 치명 항목 없음, 로컬·스테이징·커밋·원격 상태와 status·diff 증거 범위·외부 승인 경계·AI 안전 루프 보완 |
| Git·GitHub 장 렌더링 | `npm run preview`와 Playwright | 긴 읽기 전용 점검 문장을 항목형으로 바꿔 902px이던 코드 블록 내부 폭을 콘텐츠 폭 안으로 줄인 뒤 H1 1개·`draft` 배지·Git/GitHub 역할·로컬/원격 상태·diff 빈틈·첫 커밋 전 예시·안전 루프·체크리스트 12개·SVG 대체 텍스트가 접근성 트리에 표시됨·세 코드 블록이 1440px와 390px에서 내부 가로 오버플로 없음·페이지 전역 가로 오버플로 없음·콘솔 오류·경고 0개 |
| 빌드·배포·도메인·DNS 장 자체 점검 | `docs/project/quality-rubric.md`와 검토 준비 기록 | 18점 중 17점, 치명 항목 없음, 아티팩트 출처·환경·base path·DNS·HTTPS·CI/CD·완료 증거와 데이터 포함 복구 경계 보완 |
| 빌드·배포·도메인·DNS 장 렌더링 | `npm run preview`와 Playwright | 새 빌드 산출물을 기준으로 H1 1개·`draft` 배지·완료 단계 6행과 연습 9행의 표 2개·코드 블록 4개·체크리스트 19개·SVG 대체 텍스트가 접근성 트리에 표시됨·1440px와 390px에서 페이지 전역 가로 오버플로 없음·모바일의 긴 URL과 읽기 전용 프롬프트는 코드 블록 내부에서만 스크롤됨·콘솔 오류·경고 0개 |
| 빌드·배포·도메인·DNS 장 Opus 검토 시도 | Claude Code 2.1.221, `claude-opus-5`, `max`, 계획 모드와 `Read` 전용 권한 | 재로그인 후 호스트의 `claude.ai` 로그인·Pro 구독을 확인했으나 원고 읽기 전 세션 한도 메시지와 오전 7시 KST 재설정 안내로 종료되어 검토 본문 미생성 |
| 로그·모니터링·백업 장 자체 점검 | `docs/project/quality-rubric.md`와 검토 준비 기록 | 18점 중 17점, 치명 항목 없음, 사용자 영향 신호·행동 가능한 알림·운영 순환·인시던트·백업 경계·RPO·RTO·격리 복원 시험과 정적 사이트 사례 보완 |
| 로그·모니터링·백업 장 렌더링 | `npm run preview`와 Playwright | 모바일 복원 표의 좁은 첫 열에서 한 글자가 떨어지던 문제를 순서형 목록으로 바꾸고 406px이던 읽기 전용 프롬프트 내부 폭을 문장 분리로 356px에 맞춘 뒤 H1 1개·`draft` 배지·핵심 제목·복원 6단계·연습 표 9행·체크리스트 27개·세로형 SVG 대체 텍스트가 접근성 트리에 표시됨·1440px와 390px에서 코드 블록 및 페이지 가로 오버플로 없음·콘솔 오류·경고 0개 |
| AI 코딩 에이전트 장 자체 점검 | `docs/project/quality-rubric.md`와 검토 준비 기록 | 18점 중 18점, 치명 항목 없음, 요청 유형·작업 계약·기준 상태·증거 층·출력 해석·권한·세션·병렬 소유권·완료 인수와 실제 저장소 하네스 보완 |
| AI 코딩 에이전트 장 렌더링 | `npm run preview`와 Playwright | 모바일 작업 계약 공식의 코드 블록 내부 스크롤을 줄 분리로 제거한 뒤 H1 1개·H2 26개·`draft` 배지·연습 표 9행·체크 항목 22개·코드 블록 3개·세로형 SVG와 대체 텍스트가 접근성 트리에 표시됨·1440px와 390px에서 코드 블록 및 페이지 가로 오버플로 없음·콘솔 오류·경고 0개 |
| 데이터 대시보드 사례 자체 점검 | `docs/project/quality-rubric.md`와 검토 준비 기록 | 18점 중 17점, 치명 항목 없음, 한 사용자 작업·요구·제약·데이터 계약·품질 게이트·전달·UI·테스트·Git·배포·운영·AI 인수 보완, 데이터 용어와 실제 원천 권리의 직접 출처 확인 대기 |
| 데이터 대시보드 사례 Opus 검토 | Claude Code 2.1.221, `claude-opus-5`, `max`, 계획 모드와 `Read` 전용 권한 | 종료 코드 0·정상 결과 본문, P0 0건·P1 9건·P2 18건·독립 루브릭 16/18, 검토 전후 29개 입력 파일 결합 SHA-256 일치, 웹 검색·웹 가져오기 0건, Codex 재판정 P1 8건 수용·1건 부분 수용과 P2 16건 수용·2건 부분 수용, 전체 verbose 이벤트 스트림은 화면 출력 한계로 중간 payload가 잘렸음을 검토 기록에 명시 |
| 데이터 대시보드 사례 렌더링 | `npm run preview`와 Playwright | 최신 빌드에서 H1 1개·H2 27개·H3 43개·`review`의 `검토 중` 배지·표 2개(데이터 행 9개·15개)·체크 항목 28개·코드 블록 3개·세로형 SVG와 확장된 대체 텍스트, 정정·철회·C-04·ADR 연결·프런트엔드 검증의 보안 경계·전체 재배포 설명이 표시됨·1440px와 390px에서 표·코드 블록 및 페이지 가로 오버플로 없음·콘솔 오류·경고 0개 |
| API·데이터베이스·인증 장 자체 점검 | `docs/project/quality-rubric.md`와 검토 준비 기록 | 지적 반영 뒤 작성자 자체 평가 18점 중 18점·치명 항목 없음, 안전한 AI 계약·허가받은 부정 테스트·인증 실패 일반화·API 호환성·용어 첫 등장·내부 스키마와 외부 계약·직접 및 요청 증거·응답 유실 흐름을 보완 |
| API·데이터베이스·인증 장 Opus 검토·Codex 재판정·반영 | Claude Code 2.1.223의 `claude-opus-5` Max 읽기 전용 결과와 실제 원고·근거 대조 | 종료 코드 0·P0 0건·P1 5건·P2 13건·독립 루브릭 15/18·치명 항목 없음, 검토 전후 17개 입력 결합 SHA-256과 대상 원고 SHA-256 일치, 웹 검색·웹 가져오기·권한 거부 0건, Codex 재판정 P1 수용 4건·부분 수용 1건과 P2 수용 10건·부분 수용 2건·기각 1건을 반영하고 RFC 7519 미확인 상태에서는 JWT 표현을 “서명된 토큰”으로 좁힘, `request:`·자동·브라우저 증거를 갖춰 `review` 승격 |
| API·데이터베이스·인증 장 렌더링 | `npm run preview`와 Playwright | 최종 `review`에서 H1 1개·H2 15개·H3 20개·표 1개·코드 블록 2개·체크 항목 17개·`검토 중` 배지와 응답 전달 실패가 추가된 7단계 세로형 SVG·대체 텍스트를 확인, 1440×1000과 390×844에서 페이지·본문·표·코드 블록 가로 오버플로 없음·콘솔 오류·경고 0개 |
| 사람 기술·편집 검토 절차 | `templates/human-technical-review-template.md`, `templates/editorial-review-template.md`와 콘텐츠 승격 규칙 대조 | 독립성·개인정보 경계, 주장별 직접 근거와 미확인 범위, 용어·구조·비유·교차 링크, P0·P1·P2, 재검토와 `technical:`·`editorial:` 증거 경계 포함 |
| 비개발자 독자 테스트 절차 | `templates/non-developer-reader-test-template.md`와 콘텐츠 승격 규칙 대조 | 한 문장·흐름·용어·새 상황·AI 결과 검토의 다섯 관찰 과제, 유도 질문 금지, 익명화, 학습 목표별 독립 수행·도움 후 수행·미수행·미관찰 판정, P0·P1·P2와 `reader:` 증거 경계 포함 |
| Claude Code 독립 검토 | `claude -p --model claude-opus-5 --effort max`와 읽기 전용 `Read` 도구 | 구조와 콘텐츠 검토를 두 실행으로 나누어 정상 완료, 웹 요청 0건, 권한 거부 0건, 결과와 Codex 재판정을 `docs/project/reviews/2026-08-05-opus5-cross-review.md`에 기록 |
| Build Track 상태 근거 감사 | 설계 명세·`docs/project/content-lifecycle.md`·자체 점검·독립 검토 기록·frontmatter 대조 | `review`는 검토 중인 상태임을 재확인하고 테스트 전략 장까지 정상 독립 검토 결과·재판정·반영·요청·자동·브라우저 증거를 대조, 공식 Build Track `review` 8개·`draft` 4개·`seed` 0개·`ready` 0개, 사람 `technical:`·`editorial:`·실제 `reader:` 증거 각 0개 |

## 2026-08-07 당시 확인된 프로젝트 규모 (역사 기록)

- 공개 학습 문서: 58개
- 콘텐츠 상태: `review` 9개, `draft` 36개, `seed` 13개, `ready` 0개
- 학습용 SVG: 12개
- Mermaid 원본: 12개
- 자동화 테스트: 26개
- 전체 Markdown/MDX: 128개

## 2026-08-07 당시 Phase 1 준비도 감사 (역사 기록)

Phase 1 진행률은 전체 58개 공개 문서가 아니라 `src/content/docs/start-here/learning-paths.md`의 공식 Build Track 12개 장만 집계합니다.

| 항목 | 현재 증거 | 판정 |
|---|---|---|
| 공식 Build Track 범위 | 학습 경로에 순서가 고정된 12개 장 | 확인 |
| `draft` | 4개 장 | 자체 점검은 끝났지만 정상 독립 검토 결과와 요청 증거가 모두 갖춰지지 않음 |
| `seed` | 0개 장 | 공식 Build Track의 집필 시드는 모두 처음부터 끝까지 읽을 수 있는 초안으로 확장됨 |
| `review` | `소프트웨어는 시스템입니다`, `클라이언트·서버·풀스택`, `HTTP 요청과 응답`, `API·데이터베이스·인증`, `브라우저·DOM·렌더링`, `PRD·두 종류의 SDD·TDD`, `테스트 전략`, `데이터 분석가의 대시보드 사례` 8개 장 | 자체 점검·자동 검증·독립 검토 요청과 정상 결과·지적 재판정·반영 증거 확인 |
| `ready` | 0개 장 | Phase 2 종료 조건 미충족 |
| 최종 사례의 선행 장 연결 | 앞선 Build Track 11개 문서 링크 11개와 요구·데이터·화면·테스트·Git·배포·운영·AI 인수 절 | 연결 존재 확인, 정확성·교육 효과는 독립 검토 필요 |
| 사람 기술·편집 검토 절차 | `templates/human-technical-review-template.md`, `templates/editorial-review-template.md` | 절차 준비, 실제 `technical:`·`editorial:` 증거 0개 |
| 비개발자 독자 테스트 절차 | `templates/non-developer-reader-test-template.md` | 절차 준비, 실제 `reader:` 증거 0개 |

Phase 1의 유일한 집필 시드였던 `API·데이터베이스·인증`은 2026-08-06에 확인한 12개 출처 ID와 핵심 주장 11개의 적용 한계를 따라 16,212자 공개 원고, 7단계 요청 흐름 SVG·Mermaid와 개발 용어집 연결을 갖췄습니다. Opus 5 Max 독립 검토는 P0 0건·P1 5건·P2 13건·15/18을 제시했고, Codex가 P1 수용 4건·부분 수용 1건과 P2 수용 10건·부분 수용 2건·기각 1건으로 재판정한 뒤 안전 경계·정의·호환성·증거·응답 유실·출처 일치를 반영했습니다. 반영 후 자체 루브릭 18/18·치명 항목 없음, 실제 `request:`·자동·브라우저 증거를 갖춰 `review`로 올렸습니다. 나머지 `draft` 4개 장도 원고가 길거나 자체 루브릭을 통과했다는 이유만으로 상태를 올리지 않으며, 독립 검토 요청·정상 결과·지적 재판정·반영을 먼저 확보합니다. `review` 8개 장은 사람 검토와 필요한 직접 출처를 갖추기 전에는 `ready`로 올리지 않습니다.

Build Track 밖의 기준 장인 `파일·폴더·경로`는 19,075자 원고에 POSIX·Microsoft·Git·Starlight·Astro·Apple 공식 자료를 직접 대조하고, Claude Code 2.1.222의 Opus 5 Max 읽기 전용 검토와 Codex 재판정·최소 반영을 완료했습니다. P0는 원고의 기술 오류가 아니라 출처 확인 전 문장이 남은 프로젝트 문맥 동기화 결함이었고, P1·P2 보완으로 tracked·staged·ignored 판정, `git check-ignore -v`, 파일 실재와 링크 최종 대상, Finder·Windows·base path, 생성 절차, 상대 경로 계산과 AI 계약 작성 연습을 강화했습니다. 자동 검사와 데스크톱·모바일 렌더링 증거를 갖춰 `review`로 표시하지만 공식 Build Track 진행률에는 포함하지 않으며 사람 기술·편집 검토와 실제 비개발자 독자 테스트 전에는 `ready`로 올리지 않습니다.

공식 Build Track의 첫 대상인 `HTTP 요청과 응답`은 장별 공식 출처 범위를 기록하고 `seed`에서 읽을 수 있는 초안으로 확장했습니다. 자체 품질 점검은 18점 중 17점이고 치명 항목이 없으며, Opus 5 Max 독립 교차검증의 정상 결과를 받아 공개 환경의 HTTPS 전제, 브라우저 정책 차단과 안전성·멱등성 구분을 보완했습니다. 독립 요청과 결과·재판정·자동 검증 증거를 갖춰 `review`로 표시하지만, 사람 기술·편집 검토·비개발자 독자 테스트와 직접 출처 확인이 남아 있어 `ready`는 아닙니다.

Build Track 첫 장인 `소프트웨어는 시스템입니다`는 구성요소·책임·경계와 인터페이스·상태·흐름·제약과 품질 속성의 여섯 렌즈를 공개 데이터 대시보드, 화면과 시스템 증거 범위, 실패·복구와 AI 작업 계약에 연결한 12,235자 원고입니다. 용어집과 SWEBOK·MDN 적용 기록을 동기화하고 자체 루브릭에서 18점 중 17점과 치명 항목 없음으로 평가했습니다. Opus 5 Max 읽기 전용 독립 검토는 P0 0건·P1 12건·P2 12건·16/18·치명 항목 없음으로 완료됐고 입력 지문 불변을 확인했습니다. Codex는 P1을 수용 8건·부분 수용 4건, P2를 수용 9건·중복 통합 1건·부분 수용 1건·기각 1건으로 재판정하고 7개 수정 묶음을 원고·용어집·출처 지도에 반영했습니다. 독립 요청·정상 결과·재판정·반영·자동 검증 증거를 갖춰 `review`로 표시하지만 사람 기술·편집 검토, 실제 비개발자 독자 테스트와 직접 출처 확인 전이므로 `ready`는 아닙니다.

Build Track 두 번째 장인 `클라이언트·서버·풀스택`은 클라이언트·서버 역할 축과 프런트엔드·백엔드 책임 축, 사용자 행동에서 데이터와 화면까지의 직접 증거, 상태 원본과 사본, 정적 전달과 동적 백엔드 선택 기준을 공개 대시보드 사례에 연결한 12,708자 원고입니다. Opus 5 Max 정본 검토는 P0 0건·P1 8건·P2 13건·16/18·치명 항목 없음으로 완료됐고, Codex는 P1 수용 7건·부분 수용 1건과 P2 수용 10건·부분 수용 3건으로 재판정했습니다. 로컬·원격 서버, 동적·정적 증거, 브라우저 공개 범위·HTTPS·쓰기 재시도·외부 입력, 상태 충돌·늦은 응답·캐시·최신성 신호와 용어·출처 한계를 일곱 묶음으로 반영하고 자동 검사·빌드·1440px·390px 브라우저 검증을 통과했습니다. 자체 루브릭은 18점 중 17점이고 치명 항목이 없으며 독립 요청·정본 결과·재판정·반영·자동 검증 증거를 갖춰 `review`로 표시하지만 사람 기술·편집 검토, 실제 비개발자 독자 테스트와 직접 출처 확인 전이므로 `ready`는 아닙니다.

`브라우저·DOM·렌더링`은 기존에 확인된 MDN Curriculum과 W3C 접근성 범위 안에서 HTML·CSS·JavaScript라는 자원·언어, DOM 모델, 앱 코드의 상태 반영과 브라우저 화면 계산, 같은 문서 안의 갱신과 새 문서 로드, 서버 응답·UI 상태·DOM·화면·사용자 성공의 증거 계층을 연결했습니다. 첫 Opus 5 Max 실행은 모델 실행 전 세션 한도 API `429`로 끝났지만 한도 재설정 뒤 재실행은 종료 코드 0·P0 0건·P1 10건·P2 12건·독립 16/18·치명 항목 없음으로 정상 완료됐고 11개 입력과 대상 원고의 검토 전후 SHA-256이 일치했습니다. Codex는 P1 수용 8건·부분 수용 2건과 P2 수용 8건·부분 수용 3건·기각 1건으로 재판정하고 개발자 도구의 관찰 순서·Console 출처·임시 DOM 편집, viewport·실제 기기, 상태 중복·포커스, 안전한 연습과 이전 자산 위임을 포함한 7개 묶음을 원고와 출처 지도에 반영했습니다. 자체 루브릭 17/18·치명 항목 없음, `request:`·자동 검증과 1440×1000·390×844 렌더링 증거를 갖춰 `review`로 표시하지만 사람 기술·편집 검토, 실제 비개발자 독자 테스트와 직접 공식 출처 확인 전이므로 `ready`는 아닙니다.

Build Track 여섯 번째 장인 `PRD·두 종류의 SDD·TDD`는 네 개념을 제품 요구·설계 문서·개발 접근·구현 규율로 구분하고, 수용 기준과 테스트, TDD와 테스트 전략, 요구에서 운영 증거까지의 추적성과 위험별 절차 선택을 공개 데이터 대시보드에 연결한 15,897자 원고입니다. 용어집과 SWEBOK·GitHub Spec Kit 장별 적용 기록을 동기화하고 자체 루브릭에서 18점 중 17점과 치명 항목 없음으로 평가했습니다. 한도 재설정 뒤 Claude Code Opus 5 Max 읽기 전용 검토는 종료 코드 0·P0 0건·P1 11건·P2 13건·독립 15/18·치명 항목 없음으로 완료됐고 17개 입력 지문 불변과 웹 요청·권한 거부 0건을 확인했습니다. Codex는 24건을 수용 18건·부분 수용 4건·기각 2건과 6개 구현 묶음으로 재판정해 대표적 Spec-Driven Development 범위, Plan과 설계 문서의 관계, TDD 책임 경계·과정 증거·적용 범위, 교육용 사례와 연습의 범주 구분, 상태별 권위 있는 원본, 검증·운영 학습의 피드백 경로를 원고·SVG·Mermaid 원본·출처 지도에 반영했습니다. 실제 `request:`·자동 검증과 1440×1000·390×844 렌더링 증거를 갖춰 `review`로 표시하지만 사람 기술·편집 검토, 실제 비개발자 독자 테스트와 직접 공식·1차 출처 확인 전이므로 `ready`는 아닙니다.

Build Track 일곱 번째 장인 `테스트 전략`은 사용자·데이터·보안·운영 실패 위험에서 가장 작은 충분한 테스트와 실제 경계·브라우저·배포·운영 증거를 선택하는 14,908자 `review`입니다. verification·validation, 실행 범위와 목적·초점, 오라클·대역·fixture·flaky test와 AI 검증 보고의 판정 기준을 구분하고 허가받은 권한 거절 테스트, 전용 테스트 대상, 운영 smoke 승인과 책임 문구 예외를 보완했습니다. Claude Code 2.1.223의 Opus 5 Max 읽기 전용 검토는 종료 코드 0·P0 0건·P1 10건·P2 11건·독립 14/18·치명 항목 없음으로 완료됐고 18개 입력과 대상 원고 지문 불변 및 웹 요청·권한 거부 0건을 확인했습니다. Codex는 P1 수용 8건·부분 수용 2건, P2 수용 9건·부분 수용 1건·보류 1건으로 재판정해 수용 항목을 반영하고 static testing은 직접 출처 확인 전 보류했습니다. 반영본 자체 17/18·치명 항목 없음, 실제 `request:`·자동·브라우저 증거를 갖췄지만 사람 기술·편집·독자 검토와 세부 직접 출처 확인 전이므로 `ready`로 올리지 않습니다.

Build Track 여덟 번째 장인 `Git과 GitHub는 다릅니다`는 Git과 GitHub, 작업 트리·스테이징·커밋·브랜치·원격과 commit·push·Pull Request·merge·deploy의 상태·승인 경계를 구분하는 14,058자 `draft`입니다. status와 diff의 빈틈, untracked·ignored 파일과 비밀·데이터 경계, 첫 커밋 전 저장소와 AI 변경 검토 루프를 유지하면서 모임 참가 웹앱의 중복 신청 방지를 요구·서비스·데이터 제약·테스트·문서의 한 작업 단위로 묶고, 관련 변경만 스테이징하는 절차와 커밋 전 사용자 작업·로컬 전용 커밋·공유 커밋·운영 상태의 4행 복구 표를 추가했습니다. 자체 루브릭 17/18·치명 항목 없음은 유지하지만 새 Opus와 사람 기술·편집·독자 검토 전이고 `reviewEvidence`가 없으므로 상태를 올리지 않습니다.

Build Track 아홉 번째 장인 `빌드·배포·도메인·DNS`는 소스에서 검증·아티팩트·환경·호스팅·DNS·HTTPS·사용자 흐름·운영 인수까지의 경계를 연결하는 15,074자 `draft`입니다. 이 저장소의 Astro·GitHub Pages 설정과 원격 미검증 범위, base path, CI·두 의미의 CD, DNS·인증서·증상별 진단과 데이터 포함 복구를 유지하면서 모임 참가 웹앱의 소스와 잠금·빌드·설정과 비밀·데이터 변경·호스팅과 DNS와 HTTPS·사용자 흐름을 6행 책임·직접 증거 표로 적용했습니다. 이 로컬 계약은 실제 공개 URL·서버·데이터베이스·DNS·배포 성공 증거가 아니며, 자체 루브릭 17/18·치명 항목 없음은 유지하지만 새 Opus와 사람 기술·편집·독자 검토 전이고 `reviewEvidence`가 없으므로 상태를 올리지 않습니다.

Build Track 열 번째 장인 `로그·모니터링·백업`은 사용자·시스템 신호에서 감지·범위 확인·안정화·복구·검증·학습으로 이어지는 운영 순환과 백업·복원 증거를 연결하는 17,521자 `draft`입니다. 로그·지표·트레이스·알림, 내부 건강과 실제 사용자 흐름, SLI·SLO·SLA, 인시던트·런북·사후 검토, 동기화·복제·버전 관리와 백업, RPO·RTO와 격리된 복원 시험을 유지하면서 모임 참가 웹앱의 공개 조회·참가 결과 분포·정원과 인가 불변식·데이터베이스 연결·백업과 복원 시험을 5행 신호 표와 4단계 복구 순서로 적용했습니다. 첫 Codex 태스크 검토의 Important 1건은 결과 분류 혼동을 지적했고 fix 뒤 같은 reviewer의 PASS로 해소했지만 이는 저장소의 Opus·사람 검토나 `reviewEvidence`가 아닙니다. 자체 루브릭 17/18·치명 항목 없음은 유지하지만 직접 운영·복구 출처와 새 Opus·사람 검토 전이므로 상태를 올리지 않습니다.

Build Track 열한 번째 장인 `AI 코딩 에이전트와 일하는 법`은 모델·도구·하네스, 요청 유형별 권한, 상태 확인에서 목표·비목표·계획·변경·검증·독립 리뷰·handoff로 이어지는 루프를 하나의 작업 계약으로 연결한 18,384자 `draft`입니다. dirty·untracked·ignored, 증거 여섯 층, 테스트 명령·종료 코드·수량, snapshot·dry-run·fallback·timeout·blocked·compaction, 권한·세션·병렬 소유권과 실제 저장소 하네스를 유지하면서 빈 모임 상세 화면의 읽기 전용 진단, W-03 중복 참가 방지의 변경 계약, 자동 검사·데이터 오라클·브라우저·local commit·push·배포를 분리하는 8개 완료 인수 질문을 추가했습니다. 자체 루브릭 18/18·치명 항목 없음과 로컬 렌더링 증거는 유지하지만 새 Opus·사람 검토 전이고 `reviewEvidence`가 없으므로 상태를 올리지 않습니다.

Build Track 열두 번째 장인 `데이터 분석가의 대시보드 사례`는 교육용 기업 A·B 한 지표 비교의 사용자 문제와 R-01~R-05 요구·C-01~C-04 제약을 데이터 계약·품질 게이트·정적 전달·UI 상태·테스트·Git·빌드·배포·운영 복구·AI 작업 인수까지 연결한 23,947자 원고로 확장했습니다. 값 0과 결측 사유, 통과·경고·차단과 사람 확인 대기, 지표 정의·원천·변환·데이터셋 버전과 체크섬, 기간 경계·환율·반올림, 정적 전달·API 선택 신호, 공개·내부·비밀 데이터와 로컬·공개 증거를 구분하고 방문자 측정의 개인정보 경계, 정정·철회, 빌드 매니페스트 정의와 세로형 SVG·Mermaid를 동기화했습니다. Opus 5 Max 읽기 전용 독립 검토는 P0 0건·P1 9건·P2 18건·16/18로 완료됐고 Codex 재판정과 보완 뒤 1440px·390px 렌더링에서 제목·표·코드·목록·체크리스트·다이어그램을 확인했습니다. 자체 품질 점검은 18점 중 17점이고 치명 항목이 없으며 독립 요청·정상 결과·재판정·자동 검증 증거를 갖춰 `review`로 표시합니다. 데이터·접근성·운영 용어, 방문자 측정의 관할별 개인정보 기준과 실제 원천 권리의 직접 출처, 사람 데이터·기술·편집 검토와 실제 비개발자 독자 테스트가 남아 있어 `ready`는 아닙니다.

HTTP 장의 브라우저 확인에서 Starlight가 출력하는 페이지 제목과 본문의 최상위 제목이 중복되는 문제를 발견했습니다. 공개 문서 58개 모두 Starlight 페이지 제목만 H1으로 사용하고 본문은 H2부터 시작하도록 통일했으며, fenced code block 바깥의 본문 H1을 금지하는 회귀 검사와 콘텐츠 지도의 누락·중복·상태·본문 문자 수 대조 검사를 추가했습니다.

홈 문서 제목과 사이트명이 같아 브라우저 탭에 `바이브 개발 핸드북 | 바이브 개발 핸드북`이 표시되던 문제는 홈 frontmatter의 단일 `<title>` 재정의로 해결했습니다. 홈은 `바이브 개발 핸드북`, 나머지 콘텐츠는 `문서명 | 바이브 개발 핸드북` 형식이며 58개 제목이 모두 고유합니다.

## 실제 빌드에서 발견하고 수정한 문제

첫 빌드에서 Starlight 0.39부터 제거된 `{ label, autogenerate }` 사이드바 형식이 발견됐습니다. 14개 그룹을 현재 스키마인 `{ label, items: [{ autogenerate }] }` 형식으로 수정한 뒤 빌드가 통과했습니다.

샌드박스에서는 Astro가 사용자 홈에 텔레메트리 설정 디렉터리를 만들 수 없으므로 검증 명령에 `ASTRO_TELEMETRY_DISABLED=1`을 적용했습니다. 일반 로컬 환경과 GitHub Actions에서는 이 샌드박스 제약이 없으며, 프로젝트 소스나 배포 결과에는 영향을 주지 않습니다.

기본 로컬 빌드는 `site` 값이 없어서 sitemap 생성을 건너뛰지만, GitHub Pages 환경 변수와 함께 실행한 빌드에서는 `dist/sitemap-index.xml`이 생성됐습니다. Starlight는 별도 404 콘텐츠가 없어도 `dist/404.html`을 생성했으며, 맞춤 404 문구는 공개 베타 단계에서 정비합니다.

## 호환성 수정 기록

초기 골격의 Astro 6과 Starlight 0.41 조합은 호환되지 않을 위험이 있어 다음으로 정정했습니다.

- Node.js: `>=22.12.0`, 권장 `.nvmrc`는 `22.16.0`
- Astro: `7.1.6`
- Starlight: `0.41.4`
- Starlight 콘텐츠 스키마의 Zod import: `astro/zod`
- Starlight 자동 생성 사이드바 그룹: `items` 안에 `autogenerate` 배치
- GitHub Actions checkout: 전체 Git 기록을 가져오도록 `fetch-depth: 0`

## 2026-08-07 당시 다음 검증 게이트 (역사 기록)

1. 최초 기준선 커밋 `4123fe8` 이후의 변경은 작은 독립 작업 단위로 검증하고 관련 파일만 자동 커밋하며, push·배포·원격 쓰기는 사용자 승인 뒤 수행합니다.
2. 네트워크 접근 승인 후 HTTP 장의 CORS·혼합 콘텐츠와 안전성·멱등성 설명을 공식 출처로 재확인합니다.
3. `review` 상태인 HTTP 장은 사람 기술·편집 검토, 비개발자 독자 테스트와 직접 출처 확인을 통과한 뒤에만 `ready` 승격을 검토합니다.
4. `review` 상태인 `브라우저·DOM·렌더링`은 사람 기술·편집 검토, 실제 비개발자 독자 테스트와 DOM·렌더링·개발자 도구·WCAG 세부의 직접 공식 출처 확인 뒤에만 `ready` 승격을 검토합니다.
5. `review` 상태인 `소프트웨어는 시스템입니다`는 사람 기술·편집 검토, 실제 비개발자 독자 테스트와 구성요소·캐시·정적 전달 세부의 직접 출처 확인 뒤에만 `ready` 승격을 검토합니다.
6. `review` 상태인 `클라이언트·서버·풀스택`은 사람 기술·편집 검토, 실제 비개발자 독자 테스트와 상태·보안·정적 전달 세부의 직접 출처 확인 뒤에만 `ready` 승격을 검토합니다.
7. `review` 상태인 `PRD·두 종류의 SDD·TDD`는 사람 기술·편집 검토, 실제 비개발자 독자 테스트와 PRD·Software Design Description·요구공학·TDD 세부의 직접 공식·1차 출처 확인 뒤에만 `ready` 승격을 검토합니다.
8. `review` 상태인 `테스트 전략`은 사람 기술·편집 검토, 실제 비개발자 독자 테스트와 verification·validation·static testing·테스트 분류·오라클·불안정성 세부의 직접 공식·1차 출처 확인 뒤에만 `ready` 승격을 검토합니다.
9. `Git과 GitHub는 다릅니다` 확장본을 준비된 계약으로 Opus 5 Max 독립 검토하고 사람 검토 대기열에 넣습니다.
10. `빌드·배포·도메인·DNS` 확장본을 준비된 계약으로 Opus 5 Max 독립 검토하고 사람 검토 대기열에 넣습니다.
11. `로그·모니터링·백업` 확장본을 준비된 계약으로 Opus 5 Max 독립 검토하고 사람 검토 대기열에 넣습니다.
12. `AI 코딩 에이전트와 일하는 법` 확장본을 준비된 계약으로 Opus 5 Max 독립 검토하고 사람 검토 대기열에 넣습니다.
13. 네트워크 접근 승인 후 `로그·모니터링·백업`의 SLI·SLO·SLA, RPO·RTO, 백업 보안·복원 시험과 인시던트 대응 세부를 표준·공식 1차 자료로 확인합니다.
14. `review` 상태인 `API·데이터베이스·인증`은 사람 기술·편집 검토와 실제 비개발자 독자 테스트에 요청하고, JWT 관계를 다시 추가할 필요가 생길 때만 별도 네트워크 승인 후 RFC 7519 공식 원문과 적용 범위를 확인합니다.
15. `데이터 분석가의 대시보드 사례`의 Opus 5 Max 지적 반영본은 남은 직접 1차 출처를 확인하고 사람 데이터·기술·편집 검토와 비개발자 독자 테스트 대기열에 넣습니다.
16. 키보드 전체 탐색, 초점 표시, 명암, 200% 확대와 스크린리더 점검은 Phase 2 접근성 검토에서 수행합니다.
17. GitHub Pages 첫 배포에서 원격 CI, 실제 공개 URL, 편집 링크와 맞춤 404 동작을 확인합니다.
18. `review` 상태인 `파일·폴더·경로` 기준 장은 사람 기술·편집 검토와 실제 비개발자 독자 테스트에 요청하고, Git 대소문자 전용 이름 변경과 제품별 숨김 파일 세부는 필요 범위를 먼저 정한 뒤 후속 조사합니다.

## 관련 문서

- [프로젝트 개요](README.md)
- [프로젝트 컨텍스트](PROJECT_CONTEXT.md)
- [콘텐츠 지도](CONTENT_MAP.md)
- [설계 명세](docs/superpowers/specs/2026-08-04-vibe-dev-handbook-design.md)
- [후속 구현 계획](docs/superpowers/plans/2026-08-04-foundation-scaffold.md)
