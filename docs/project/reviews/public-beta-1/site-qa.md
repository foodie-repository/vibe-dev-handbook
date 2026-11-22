# 공개 베타 전체 로컬 사이트 QA

확인일: 2026-08-28 · 부분 증거 재검증일 및 closeout일: 2026-09-05 · 상태: Task21 로컬 사이트 QA closeout PASS·M4-03~05 완료·포인터 없는 모바일 OS 전체 Tab 경로 미확인·M5 Claude 필수 독립 검토 대기 · 공개 가능 판정: 아니요

## 범위와 승인 경계

승인된 마스터 플랜 Task21과 Task8의 보충 검증을 수행합니다. Task20의 11개 시각 자산은 구현·자체 검증을 마쳤지만 Claude 독립 검토 자격이 `blocked / subscription_unverified`여서 닫지 않았습니다. 이번 QA는 그 검토와 독립적인 로컬 검증이며 Task20, M4, M5, `ready`, 소유자 승인이나 공개 완료를 대신하지 않습니다. 브라우저 증거 수집 실행 자체에서는 stage·commit·push·설치·원격 브랜치·배포·공개 URL 작업을 하지 않았습니다.

브랜치는 `codex/public-beta-completion`, 기준 HEAD는 `eacf0264268f9b4dcf1dfa4e95399c7df3c5957c`입니다. 기존 PBV-02 변경과 다른 단위의 미커밋 변경을 보존합니다. 원문·자산·CSS 변경이 필요하면 실제 실패를 먼저 재현하고 영향받는 검증만 다시 수행합니다.

## 새 기준선

`ASTRO_TELEMETRY_DISABLED=1 npm run check`는 exit0입니다. 테스트65/65, 공개 콘텐츠59, 참조242 Markdown/MDX와 학습 SVG14, 계획100점·공개59·중복0·누락0, 생성 HTML60, Pagefind 입력HTML60, 일반 본문 리터럴 Markdown0입니다. 실제 산출물 목록은 HTML60개와 Pagefind 파일72개입니다. `site` 미설정으로 sitemap을 생략하는 기존 warning1과 기본404의 `Entry docs → 404 was not found` 안내를 보존했습니다.

빌드 완료 원출력과 파일 목록은 ignored `output/playwright/task21-site-qa-evidence/baseline-build-completion.txt`, `baseline.json`에 있습니다. 완료 원출력 파일은 빌드·산출물 검사 부분이며 앞선 정적 단계는 이번 실행의 실제 도구 출력에서 확인한 결과입니다. 불완전한 로그를 전체 원출력이라고 표시하지 않습니다.

Task20 preview와 전용 Chrome을 종료하고 PID10311·10283·21440·21443 부재를 확인했습니다. Task21은 `http://127.0.0.1:4327`의 새 preview(PID26981)와 전용 `task21qa` headed Google Chrome(PID27249, daemon27246)을 사용합니다. CLI의 headed 설정과 실제 Chrome 명령행에 headless 옵션이 없음을 확인했습니다. 외부 요청은 정확한 localhost origin 경계 밖에서 차단하고 실패로 남깁니다.

## 수집 당시 계획과 기준선 이력

- 공개59개 경로: 1440×1000과390×844. 시각 자료가 있는16페이지는 양테마, 나머지43페이지는 섹션별 교차 테마로 총150페이지 상태를 검사합니다.
- 현재 시각 자료 소비17곳의 두 폭·두 테마, 총68개 조합을 포함합니다. 네 테마 필드의 정확한 일치와 각 자산·alt·렌더 증거를 따로 기록합니다.
- HTTP·H1·초안 배지·main·깨진 이미지·전역overflow·제한된 내부 스크롤·console·pageerror·외부 요청, 첫 화면과 다이어그램·표 관찰 이미지를 보존합니다. 실패 시도와 부분 수집은 숨기지 않습니다.
- 검색12개 고유어(승인된 Task21의8개와 Task8의5개 중 Supabase 중복1개), 검색 결과의 실제 키보드 진입과 돌아오기, 소비 문맥 링크3개, 사이드바, 키보드 초점, 기본404 복구를 두 폭에서 확인합니다. 검색어를 다시 입력해야 복구되는 경우 자동 문맥 보존이라고 하지 않습니다.
- 하위 base path 빌드는 별도 출력 폴더로 분리해 내부 링크·favicon·CSS·SVG 경로를 확인합니다. 기본404가 복구 가능하면 새404페이지를 만들지 않습니다.

수집기 구현자의 합성 수용·실패 테스트13개와 문법 검사가 통과했습니다. 수정 전 기준선은150개 페이지 상태·68개 시각 조합을150회 시도·실패0·누락0으로 수집했고 전체 manifest 검증 exit0을 확인했습니다. 입력 snapshot은 `c3759dc496193dab1146c3d5548da8cc9f0575125f23023725c1d0dfb14f877a`입니다. 68개 다이어그램 원본 crop의 핵심·보조 레이블과 화살표·양테마 marker도 직접 확인했습니다. 이후 실제 결함 수정으로 CSS·원문·콘텐츠 지도·빌드가 바뀌었으므로 이 snapshot은 수정 전 증거로 보존하며 현재 입력의 최종 검증으로 재사용하지 않습니다. 검색·키보드·404와 수정 후 행렬은 진행 중이고 Critical/Important 해소를 주장하지 않습니다.

## 재현·수정 이력

`QA-TABLE-001`은 수정 구현·회귀 검증 중이며 독립 판정 전입니다. 390×844의 `developer-thinking` 첫 표에서 `사실`, `가정`, `제약` 같은 짧은 항목이 한 글자씩 줄바꿈되고, `abstraction-and-tradeoffs` 표에서도 첫 열의 단어가 여러 줄로 쪼개졌습니다. 전역overflow0·내부 스크롤 검사 통과와는 별개의 실제 픽셀 관찰입니다. 해당 두 원본 PNG는 첫 수집의 `task21-20260827181437595-3f90d27f-8b7c-45d2-ac9c-e6cda0b84e81-001-first-table.png`, `-003-first-table.png`입니다. 실제 셀 폭38.75px·내용 폭22.75px·15.04px 글자·짧은4항목 각각2줄을 관찰해 동일 Chrome 테스트를 먼저 실패(exit1)시켰습니다. computed overflow-wrap/word-break는 모두 normal이어서 임의 줄바꿈 CSS가 원인이라고 단정하지 않았습니다. 모바일 셀에만 min-width8rem을 추가한 뒤 같은4항목이 내용 폭112px·각1줄로 통과(exit0)했습니다. 표 내부0→26px 이동과 전역overflow0, 원본 좌우 PNG를 확인했습니다. 넓은 화면·다른 대표 표·양테마와 전체 사이트 회귀 확인 및 필수 독립 검토는 남습니다.

`QA-BASE-001`은 수정 구현·자동 검사 통과·독립 판정 전입니다. 별도 `/handbook/` 빌드 a1에서 의존성·패키지 관리 원문의 root absolute 링크4개가 base 밖으로 빠졌습니다. 404 canonical 메타데이터는 자산 존재 검사의 오탐으로 분리했습니다. 원문 링크4개만 상대 경로로 고치고 built validator에 선택 basePath/pagePath·CLI 입력을 추가했습니다. 집중 테스트는 RED9개 중3실패→GREEN9/9이며 이전 실제 빌드에는 정확히4오류를 계속 검출합니다. 새 a2는 HTML60·내부 링크4036·favicon60·CSS157·SVG17·script275, 경로/존재 오류0이고 새 built validator도 exit0입니다. 수정 후 전체 check는 tests70/content59/references244+SVG14/plan100-59-0-0/build60/Pagefind60/literal0으로 exit0입니다. 두 빌드는 별도 산출물을 사용했고 원본 실패 a1은 보존합니다.

검색의 `dry-run`·`Supabase` desktop 최초 시도는 도착HTTP200·정상 H1이지만 `ERR_ABORTED`가 있어 failed로 보존했습니다. Supabase 실패는 result-enter 시점의 non-navigation `other` 요청이었고 설치된 Starlight는 focus/hover prefetch를 사용합니다. 초점 이동 후 로딩 안정화를 기다리는 수집기 수정 뒤 Supabase 재검증이 통과했습니다. dry-run은 보강 전 재검증에서 통과했으므로 원인은 미확정이며 둘을 동일 원인으로 단정하지 않습니다. 검색 뒤로 이동 시 scroll360은 복원되지만 검색어·결과는 다시 입력해야 합니다. 최소 재사용 가능성과 자동 문맥 복원은 구분하며, 이 전용 Chrome은 back-forward-cache가 비활성화된 검증 환경입니다.

## 최종 로컬 관찰과 남은 게이트

정본은 [사이트 QA 증거 manifest](site-qa-browser-manifest.json)입니다. 수정 후 `fe4bd387ce2fbc6972b17555f2f49de5217345b7e0009e7e6b767f05f905e8e2` 입력 snapshot의 전체150페이지 상태·68시각 조합은 DOM/HTTP/테마/런타임 자동 검사에서 실패0·누락0이며 full manifest 검사 exit0입니다. 원래 기준선150시도도 보존해 전체300시도를 추적합니다. DOM 수집 통과는 픽셀·상호작용·독립 검토 전체 PASS가 아닙니다.

68개 새 그림 crop과 기존 crop을 RGBA로 비교해30개는 완전히 같았고38개는 달랐습니다. 기존68개 직접 관찰과 별도로 변경38개를 모두 다시 보았습니다. 이때 API 상세 시퀀스의 모바일 양테마2개 crop에 actor 박스 상단 잘림을 발견해 최종 그림 증거에서 제외했습니다. 원본 SVG와 페이지는 바꾸지 않고 해당2상태만 새 viewport로 관찰했습니다. 그림의 전후 DOM box가 같은 상태에서 viewport PNG로부터358×500px을 무손실 추출한 crop2개와 실제390×844화면2개를 직접 확인해 상단 actor4개·11단계·실선/점선·commit/응답 유실 표시가 보존됨을 확인했습니다. 원래 실패 crop은 삭제하지 않았으며 `sequence-viewport-supplement.jsonl`로 연결합니다. 보충의 badge selector는 빈 배열이므로 배지 재검증 증거가 아니며 배지 근거는 원래150행렬에 한정합니다.

모바일 표 수정은 대표3경로×2폭×2테마12개가 통과했습니다. `developer-thinking`·`abstraction-and-tradeoffs`·`current-tool-mapping`의 모바일 내부 이동 범위는 각각26·154·507px이고 데스크톱은0입니다. 모바일 좌우·데스크톱 왼쪽 원본 총18장으로 짧은 레이블의 낱글자 줄바꿈 개선과 내부 스크롤 경계를 확인했습니다. 일부 열이 화면 밖에 있는 것은 내부 스크롤 구조이며 모든 표의 모든 행·셀을 육안으로 읽었다는 주장은 하지 않습니다.

상호작용41시도의 마지막36개 중34개가 통과하고 키보드 테마2개가 실패했습니다. 검색12개×2폭24개, 소비 문맥 링크3개×2폭6개, 사이드바17목적지씩 두 폭, 기본404 두 폭에서 홈 브랜드 링크로 HTTP200 복구를 확인했습니다. 검색은 결과 Tab/Enter 진입과 수동 재검색 재사용을 확인했지만 자동 검색어 복원을 주장하지 않습니다. 과거 실패7건을 유지하며 새404페이지는 만들지 않았습니다. 검색 결과 초점2장·키보드 skip/theme/body 초점6장·404화면2장을 직접 확인했습니다.

`QA-KEYBOARD-001`: Tab 초점·검색 열기·본문 진입은 확인됐지만 키보드로 native select 값을 dark로 바꾸지 못했습니다. 실제 OS UI 진단도 Chrome 식별자 중복 뒤 정확한 앱 경로에서 -10005 timeoutReached로 실패했습니다. `native-keyboard-boundary.md`에 진단 한계와 재개 조건을 남겼으며 사이트 자체 결함으로 확정하거나 설정·권한을 우회하지 않았습니다. 실제 UI 접근 또는 사용자 수동 검증이라는 새 조건이 필요합니다. 이 항목과 필수 Claude 검토가 남아 Task21·M4 전체 PASS는 아닙니다.

새 Task24 조사 원문이 ignored `.superpowers`에 들어온 뒤 Node22 최종 검사 첫 시도는 참조 검사의 조사 원문 앵커 오류로106/107통과·exit1, 빌드 미실행이었습니다. 같은 실패를 새 테스트로 재현한 뒤 비공개 조사 디렉터리만 제외했고 집중2/2·최종108/108테스트, 콘텐츠59, 참조171 Markdown/MDX+SVG14, 계획100점·59문서·중복0·누락0, HTML60·Pagefind60·리터럴0으로 전체check exit0입니다. 참조 수 감소는 원고 삭제가 아니라 조사 디렉터리 제외 때문입니다. Node22.16.0/npm10.9.2의 실제 명령·로그는 ignored `final-node22-gates-a2.json`과 연결 파일에 보존합니다. 빌드 전후 dist171개 파일의 경로·bytes SHA가 모두 같아 사이트 행렬은 다시 실행하지 않았습니다.

2026-08-30 부분 증거 계보 재검증에서 shape 계약12/12는 통과했지만 최초 전체 verifier는 과거 final-gates의 dist 지문과 이후 정상 빌드가 교체한 현재 ignored `dist/`를 같은 상태로 요구해 exit1이었습니다. 회귀 snapshot 이후 바뀐 비-dist 입력은 `CONTENT_MAP.md`, basepath 교정 원고, 가상 진단 표기 원고, 운영 도표 원고, 모바일 표 CSS의 고유5개이며 각각 `16ca9e6`·`bbc7dc8`·`cf193f6`·`3d397b9`과 연결된 좁은 검증 이력이 있습니다. 현재 snapshot 전체를 8월28일 브라우저 행렬과 동일하다고 재표시하지 않습니다. mutable current input/dist drift를 불변 캡처·raw·PNG·실패 계보와 분리하는 회귀 테스트는 수정 전12/13·exit1에서 수정 후13/13·exit0이 되었고, 최신 키보드 경계 지문을 반영한 정본 verifier는 `valid_partial_lineage`·errors0입니다. 진단상 두 snapshot의 input record530개 중 current drift140·missing10, final-gates dist171개 중 drift66·missing5이며 중복 snapshot과 ignored build 산출물을 포함하는 수치라 현재 사이트 결함 수가 아닙니다. Node22.16.0의 fresh build는 HTML60·학습 SVG14·Pagefind HTML60으로 exit0이었지만 브라우저·키보드를 반복하지 않았고, 이 보정은 Task21·M4 PASS가 아니라 역사 증거 검증 가능성만 복구합니다.

preview·Chrome은 최초 수집 후 종료하고 위 두 실패 crop 보충 때만 다시 실행했습니다. 최종 close와 정확한 preview PID 종료를 기록하며 사용자 Chrome에는 조작하지 않습니다. `.gitignore`에는 두 정확한 basepath 증거 디렉터리만 추가했고 산출물은 삭제하지 않았습니다.

2026-08-30 Codex 독립 검토의 최초 판정은 manifest 데이터·실패 원장·tracked 후보 공개 안전에는 문제가 없지만 helper가 `gates.task21`, `gates.ready`, `gates.commit` 직접 승격을 막지 못한다는 Important1건으로 `NEEDS CHANGES` C0/I1/M0이었습니다. 세 승격을 각각 변조하는 계약 테스트를 먼저 추가해13/14·exit1의 RED를 확인하고, 정확한 부분 상태만 허용하도록 한 조건을 추가한 뒤14/14·exit0과 direct verifier `valid_partial_lineage`·errors0을 확인했습니다. 같은 리뷰어의 Fix Round1은 세 변조 거절을 직접 재현하고 I-01 `RESOLVED`, `PASS` C0/I0/M0, 정확한 tracked 후보3파일의 partial-evidence checkpoint stage 가능으로 판정했습니다. 이 부분 증거 체크포인트는 Task21·M4·native keyboard theme·Claude 검토·`ready`·소유자 승인·RC·push·배포·공개 상태를 완료하거나 허가하지 않습니다.

2026-08-30 native select 비교 후속에서는 HEAD `ee39f42`의 새 Node22 build와 headed Chrome152를 사용했습니다. 데스크톱에서 실제 Tab 네 번으로 사이트 테마 select에 도달했지만 `ArrowUp`은 keydown/keyup만 만들고 값·`input`·`change`를 바꾸지 않았으며, 같은 Chrome의 최소 native select에서도 단일 `ArrowUp`과 `Space → ArrowUp → Enter`가 똑같이 실패했습니다. 따라서 사이트별 결함을 뒷받침하지 않아 코드를 수정하지 않았고 focus-visible screenshot과 비교 JSON을 새 키보드 경계에 보존했습니다. `native_keyboard_theme`는 계속 `unverified`, Task21은 `partial`이며 실제 Chrome native UI 입력 또는 사용자 수동 확인 전에는 M4 PASS가 아닙니다.

2026-08-30 실제 OS 입력 후속에서는 HEAD `9fba98b`의 localhost preview를 macOS26.4.1·Chrome151 게스트 창으로 열었습니다. 중복 bundle ID와 `/Applications/Google Chrome.app`의 기존 `-10005 timeoutReached`는 실패 이력으로 유지하되, 실제 실행 가능한 AppTranslocation 경로를 정확히 지정하자 접근성 트리와 OS 키 입력을 사용할 수 있었습니다. 페이지 로드 뒤 포인터 없이 `Tab` 네 번으로 콘텐츠 건너뛰기 → 사이트 브랜드 → 검색 → 테마 select에 도달했고, native 메뉴에서 `Up`·`Return`으로 `자동 → 밝은 테마 → 어두운 테마`를 확정했습니다. 자동 모드 자체가 macOS dark 선호를 따르므로 화면 변화와 값 변화를 혼동하지 않도록 `어두운 테마 → 밝은 테마 → 어두운 테마`를 같은 키보드 경로로 왕복했고, AX select 값과 페이지 색상이 함께 바뀌며 초점 윤곽이 유지됨을 확인했습니다. `native-keyboard-verification.json`과 1024×768 전체 Chrome 창 screenshot4개를 fingerprinted source로 추가했으며 이 크기를 웹페이지 viewport라고 표시하지 않습니다. Guest 창은 `noWindowsAvailable`, preview 포트4327은 listener0으로 정리했습니다. 이에 `native_keyboard_theme`은 실제 OS-level 입력 범위에서 `verified`로 전환하지만, 과거 Playwright 실패7건은 그대로 남고 Task21·M4 전체 PASS는 정본 전체 검증·독립 패키지 검토·상태 문맥 closeout 전까지 올리지 않습니다.

2026-09-05 모바일 메뉴 키보드 후속에서는 HEAD `1ea9e53`의 localhost preview와 ego lite 1.2.3 전용 Task Space를 사용했습니다. CDP로 확인한 정확한 390×844 화면에서 포인터 입력 없이 콘텐츠 건너뛰기 → 사이트 브랜드 → 검색 → 메뉴까지 Tab으로 이동한 뒤 Enter로 모바일 사이드바를 열었고, 메뉴 내부에서 73회의 Tab 뒤 테마 `SELECT`에 도달했습니다. 선택 요소는 116×48px로 보이고 초점 윤곽이 있으며 값은 `자동`이었습니다. 당시 문서 테마가 dark였던 것은 macOS 선호를 따른 자동 모드이므로 명시적인 어두운 테마 선택으로 판정하지 않습니다. `ArrowUp`, `ArrowUp → ArrowUp → Enter`, `Space → ArrowUp → Enter`에서는 값이 모두 `auto`로 유지되어 모바일 메뉴의 네이티브 값 변경은 `not-confirmed`로 남깁니다. ego-browser 캡처는 timeout이었고, 별도로 보이는 ego lite 앱 창은 CDP가 보고한 모바일 반응형 상태와 달리 데스크톱 레이아웃이라 같은 상태의 화면 증거로 연결하지 않았습니다. 후속 직접 CDP 캡처 시도도 390×844 로드는 확인했지만 문서 포커스를 재현하지 못해 캡처 호출 전에 중단했습니다. 이 좁은 후속은 기존 전체 사이트 HTTP·자산·console·pageerror·overflow·검색·시각 행렬을 다시 실행하지 않았으며, `mobile_menu_native_theme`과 Task21·M4는 각각 `not-confirmed`, `partial`로 유지합니다.

같은 staged 두 파일과 ignored 근거·계약 도구를 읽기 전용으로 대조한 Codex 독립 검토는 `PASS`, Critical 0·Important 0·Minor 0이었습니다. 리뷰어는 이 경계 기록의 좁은 로컬 체크포인트 커밋만 수용하고, 모바일 네이티브 값 변경과 동일 상태 화면이 미확인이라는 이유로 Task21 closeout과 M4 PASS는 모두 불가하다고 판정했습니다.

같은 날 모바일 후속의 동일 탭 상관관계를 다시 진단했습니다. CDP로 390×844 CSS viewport와 `TASK21-MOBILE-390-NONCE` 제목을 설정한 활성 탭 하나가 macOS 접근성 트리에도 같은 제목과 모바일 메뉴로 나타나, 앞선 불일치는 사이트 반응형 동작이 아니라 서로 다른 ego lite 화면을 본 데서 생겼음을 확인했습니다. 앞선 ego-browser 기록은 포인터 없이 메뉴와 보이는 테마 select까지 Tab으로 도달한 근거로 유지하고, 같은 상관 탭에서 접근성 클릭으로 select에 초점을 설정한 뒤 실제 OS `Up`·`Return`으로 `자동 → 밝은 테마 → 어두운 테마`를 확정했습니다. 접근성 값, 보이는 select의 DOM 값과 초점, `html` 테마, `color-scheme`, 본문 배경, 저장된 dark 값이 일치했고 전역 가로 overflow는 없었습니다. CSS viewport 390×844의 light/dark 전체 화면은 Retina 780×1688 JPEG 두 장으로 보존했으며 JPEG 자체가 390×844 raster라고 표시하지 않습니다. Computer Use의 `Tab`은 ego lite HTML content container에서 DOM 초점으로 진행하지 않아, 최초 로드부터 선택 완료까지 포인터 없는 단일 OS Tab 흐름은 계속 `not-confirmed`입니다. 기존 전체 사이트 HTTP·자산·console·pageerror·검색·표·시각 행렬은 입력 변경이 없어 다시 실행하지 않았습니다. 따라서 `mobile_menu_native_theme`만 상관된 두 증거 구간 범위에서 `verified`로 전환하고, `mobile_menu_end_to_end_os_keyboard`, Task21, M4는 각각 `not-confirmed`, `partial`, 미완료로 유지합니다. 집중 계약 테스트는 23/23·exit0, 정본 verifier는 `valid_partial_lineage`·errors0·exit0입니다.

이 모바일 네이티브 증거 단위의 Codex 독립 재검토는 두 원본 JPEG를 포함한 source 14~17, staged 두 파일, 계약 도구를 대조해 `PASS`, Critical 0·Important 0·Minor 0으로 판정했습니다. 리뷰어는 `mobile_menu_native_theme: verified`와 좁은 로컬 체크포인트 커밋만 수용했으며, 포인터 없는 단일 OS end-to-end 흐름은 `not-confirmed`이고 Task21 closeout과 M4 PASS는 승인하지 않았습니다.

이후 누적 Task21 패키지 전체를 별도로 독립 검토했습니다. 리뷰어는 수정 후150페이지 상태·68시각 조합, 검색·내비게이션·404, 표와 base path, 데스크톱 전체 OS 키보드 경로, 모바일의 상관된 두 키보드 구간, current-input drift 고유5경로의 후속 검증, 실패·보충 계보를 대조해 `PASS`, Critical 0·Important 0·Minor 0으로 판정했습니다. 마스터 계획은 하나의 연속된 모바일 OS 입력 실행만을 유일한 수용 근거로 요구하지 않으므로 포인터 없는 단일 모바일 end-to-end 미확인은 차단 finding이 아니지만 이 한계는 계속 `not-confirmed`로 보존합니다. 이 판정을 근거로 Task21과 M4-03~05를 닫되, 이 closeout은 M5 Claude, 공개59개의 `ready`, 소유자 공개 승인, M6-03, RC, push, 원격 CI, 배포, 공개 URL, 태그, 릴리스 완료를 뜻하지 않습니다.
