# 로컬 출판 준비 전이 검증

이 기록은 [소유자가 승인한 원고](owner-approval.md)의 로컬 상태 전이를 다룹니다. 현재 검증 범위는 4개 배치, 누적 59개 원고입니다. 공개 URL은 검증하지 않았습니다. [R24 당시 QA 기록](site-qa.md)은 원래 바이트로 보존합니다.

## 자동 검사

배치 4: 5개 상태 전이 후 전체 테스트 438개 통과·제외 0, 콘텐츠 59개와 계획 인벤토리 검사, 빌드 HTML 60개 및 생성물 검증 통과. QA 문서 자체의 갱신은 원고나 렌더 입력을 변경하지 않습니다.

배치 3: 18개 상태 전이 후 전체 테스트 438개 통과·제외 0, 콘텐츠 59개와 계획 인벤토리 검사, 빌드 HTML 60개 및 생성물 검증 통과. QA 문서 자체의 갱신은 원고나 렌더 입력을 변경하지 않습니다.

배치 2: 23개 상태 전이 후 전체 테스트 438개 통과·제외 0, 콘텐츠 59개와 계획 인벤토리 검사, 빌드 HTML 60개 및 생성물 검증 통과. QA 문서 자체의 갱신은 원고나 렌더 입력을 변경하지 않습니다.

첫 배치 후보에서 정적 검사 436개가 통과했습니다(기존 434개와 전이 회귀 테스트 2개, 실패·건너뜀 0, 종료 코드 0). 승인 묶음과 R26 목록의 경로·해시 59쌍을 대조했습니다. 현재 파일에서 허용한 상태·근거 메타데이터만 되돌리면 승인된 파일 전체의 SHA-256과 일치합니다. 본문·제목·승인 경로의 변조와 상태 되돌림은 각각 실패해야 합니다. 빌드 및 생성물 검사에서 HTML 60개, 일반 본문의 리터럴 Markdown 0개, 고지 파일 바이트 일치를 확인했습니다. 고지 바이트 일치가 배포 승인이나 법적 판단을 대신하지 않습니다.

## 브라우저 검사

아래 13개 경로를 로컬 빌드로 열었습니다. 1440×1000 밝은 테마와 390×844 어두운 테마에서 각 1회씩, 총 26개 상태 모두 HTTP 200, H1 1개, 배지 `출판 준비`였습니다. 이미지 디코딩 실패·전역 가로 넘침·콘솔 경고 및 오류·페이지 오류·실패한 요청은 0건입니다. 브라우저가 받은 HTML과 로컬 산출물의 바이트가 같았습니다. 먼저 주가 대시보드 사례의 양쪽 이미지를 열어 제목과 배지를 직접 판독했고, 나머지 24개 상태는 브라우저에서 자동 관찰했습니다. 26개 모두를 픽셀 단위로 검토했다는 뜻은 아닙니다.

| 로컬 경로 | 두 화면 폭에서 수신한 HTML의 SHA-256 |
|---|---|
| `/01-mental-models/software-is-a-system/` | `13b1a199b036bd9a9365e1af5b78ebb93647c34f0163d87c9911541b7a5c662b` |
| `/03-full-stack/client-server-full-stack/` | `0ac31a05d7638a0986ca308912f6c2b0e48cf62f97abd1e79b3b346e662f1265` |
| `/03-full-stack/http-request-response/` | `8882cac2f97e51e7d6cd5934fb10017defd91d7fd0cc5b3d192d36e2fefbb4d7` |
| `/04-backend-data/api-database-auth/` | `c254d66d01dfbd51838b47e9ad46d89b8c3ce55f1dfeb2c9990836982f357287` |
| `/05-frontend/browser-dom-rendering/` | `91ac843dcc5681ee378862b4b7b411f8f0f0c9913bdd6545581a56969becf53e` |
| `/06-requirements-design/prd-sdd-tdd/` | `012ceb7b24f57a07c24ad4b5e3bdde2ded0a927a94563255add79232128c7133` |
| `/08-quality/testing-strategy/` | `3bc527c7df2567cac2f4469734c6cd3db7d93e34aa6f00724db22467a119a72e` |
| `/09-git-github/git-and-github/` | `1bdbdb3790601cd237fd198ff50fb202300aac1cddc54d5f72f892422512269f` |
| `/10-deployment-operations/build-deploy-domain-dns/` | `aea9890606e373264089735083d29d6c67632fcf3855084d11cdb4fc1ba448f2` |
| `/10-deployment-operations/logs-monitoring-backup/` | `00789103ef70c2e047412d0a6605d6eb0be21784c222cf1cb310d25037860372` |
| `/11-ai-native/working-with-coding-agents/` | `8fc9366199fe5ae3f164d8b6e308f4dc6c9310bf1bb75741b7703ef2e2516aab` |
| `/12-case-studies/analytics-dashboard-case-study/` | `59f063397270b99006951c3dfa87918754cef7a847a2037f21eeaf5ef6358bed` |
| `/12-case-studies/first-full-stack-project/` | `5a755b8082ff93a6028db4e7633f2d1f91dbf1578f62ffa9c59d3b2b46f2de0d` |

로컬 원출력은 `output/playwright/task23-batch1-pilot-1795363932714/results.json`(SHA-256 `3f77eeb8c6eb8ecaaf702c952dbd88edd0d5a537cd5188dabe11eada5adb9b21`)과 `output/playwright/task23-batch1-remaining-1795363982232/results.json`(`290dfbfd0550015ff035821b1aaeddeaa1ebba3a94eca4e49a3e7ca748e34b4a`)입니다. `ready` 전이 전체 59개에 대한 최종 화면 검증은 별도입니다.

### 배치 2: 23개 경로

이번 배치의 23개 경로를 1440×1000 밝은 테마와 390×844 어두운 테마에서 새로 열었습니다. 46개 상태 모두 HTTP 200, H1 한 개, 출판 준비 배지와 정상 이미지가 확인됐고, 전역 가로 넘침·콘솔 경고 및 오류·페이지 오류·실패한 요청은 없었습니다. 픽셀 전수 검토가 아니라 실제 브라우저 관찰입니다. 원출력: `output/playwright/task23-batch2-changed-1795365670171/results.json`, SHA-256 `8f075a0af345d81aac911f695ff4339350ef5fefe22884c82e3eb5c18061fb8d`.

| 로컬 경로 | 수신 HTML SHA-256 |
|---|---|
| `/01-mental-models/abstraction-and-tradeoffs/` | `42e12911e815780e32226db8d7ed61bb52c5937d184b4fca07318be6abf44464` |
| `/01-mental-models/developer-thinking/` | `aa27a10a8307bfe102be114f64ae4cffb193f6cc219648b2a7d663806dca68f1` |
| `/02-work-environment/dependencies-package-managers-environments/` | `b8b6d96c732163d098848fa6431b49d67b666b5db3d3eb48c932e2d1ecd6888c` |
| `/02-work-environment/files-folders-paths/` | `b72450b4bf6cfbee7724bf8b6c8a373f6144efe28a800aa72ba81e8e646dc9ba` |
| `/02-work-environment/terminal-processes-ports/` | `05b45a8e8d4afac5f207803821516ecc8b40a52263ca0723b5f16972210e6a1a` |
| `/03-full-stack/frontend-backend-boundary/` | `c1e076ff4d33a0ffc064e72690fc9e337985132d69ea55ebee8e3f21f478b4f8` |
| `/04-backend-data/data-model-schema-migration/` | `6b7be7630d8481151d99d9db2c539ef136e1f20b5a559a942df89f80b0a0df29` |
| `/04-backend-data/state-cache-queue/` | `495e8d1807e869fe5422d1d2009a11daea3fcecfdf973b8fb383188be9151414` |
| `/05-frontend/accessibility-responsive-design/` | `301f5d48dc96a33da9b0d532ad52b4b46d0ccc4307b45c70e519fc9677522c49` |
| `/05-frontend/ui-state-and-ux/` | `1f9eab20f493a7781edd373fc0edda312ed36008aa0b2de1388994607065128e` |
| `/06-requirements-design/adr-and-tradeoffs/` | `a0817102b39f4c22b78d18bf74394cd7ecf3494a2c1891a1257864b46ad6348d` |
| `/06-requirements-design/architecture-and-frameworks/` | `62d0e14012f1b28419a7040e3163eaf9034591acab7b7a53b2f197cacc7d9c4c` |
| `/07-workflow-methods/code-review-ci-cd/` | `c96b661376a48ae29e620a21058e929da49c96e73a23c744c356a96fae63bd21` |
| `/07-workflow-methods/incremental-delivery/` | `b095e59f9f3698c2e5ea92264db5da86b70dbb1e5596a3ef5b0350d549a5c17c` |
| `/07-workflow-methods/software-development-lifecycle/` | `b084a2af716cccc429741e587e92d3bb2e10b692c221046e1f2686fd83175e80` |
| `/08-quality/debugging-observability/` | `4a266495366b566dd673b52538fb80856c2e294d837e972ee22b71cf31741752` |
| `/08-quality/performance-security/` | `f730f71c114dbb29cdf27213e5cc9e40b92792178c644e74b56797edc29d6a64` |
| `/09-git-github/branch-commit-pull-request/` | `481abcef7d94f24eba1b87872a653d9d5c3561632215ac36d47231eab8be3339` |
| `/09-git-github/undo-merge-conflict-release/` | `211cd73d77a1cb19cbd63540302c20e251163c6f812905379dad2132a98c5630` |
| `/10-deployment-operations/environment-variables-config/` | `412262343f2a729ebce127cead2383551e7c085ddb4d62632162ae642f35bc5a` |
| `/11-ai-native/agent-review-and-verification/` | `b1df2bd5f4fc9914981a4af94fabe1f6d98f53b1677b3f8f4d4a37b936737d40` |
| `/11-ai-native/context-spec-harness-loop/` | `ce19b0a0796078e227bbc8cda41597ccb8beb6d47fd58d20ce65772bc9a5e8b5` |
| `/11-ai-native/permissions-sandbox-worktrees/` | `cdde2c0bd6428ea478083a310b7688a90285427a8feaebc3da382484b35999f3` |

### 배치 3: 18개 경로

이번 배치의 18개 경로를 1440×1000 밝은 테마와 390×844 어두운 테마에서 새로 열었습니다. 36개 상태 모두 HTTP 200, H1 한 개, 출판 준비 배지와 정상 이미지가 확인됐고, 전역 가로 넘침·콘솔 경고 및 오류·페이지 오류·실패한 요청은 없었습니다. 픽셀 전수 검토가 아니라 실제 브라우저 관찰입니다. 원출력: `output/playwright/task23-batch3-changed-1795365982485/results.json`, SHA-256 `47f69fe090a96f8122c9ddb19b4ec57fad7f7792c0735ca2570ee325b1934a08`.

| 로컬 경로 | 수신 HTML SHA-256 |
|---|---|
| `/01-mental-models/` | `68cf2f1c4ceab3cde111a69d0db95634ad30042bc8d5848d6a98527e55448315` |
| `/02-work-environment/` | `369f912186865c07819c6eb672250cc79cfea014e3d0e425d5a9299890060332` |
| `/03-full-stack/` | `4194a181d1d4874ebc61ad802e93ab11a5320b8298914d8cc937c8c3054f7848` |
| `/04-backend-data/` | `2607ca276bf2098fd65aa50a70c26c75f76269081c99e241fbd193ae113ecd40` |
| `/05-frontend/` | `e3e0900fa6779ce7fcd2b3b139362d72c1a30c303d9396d95fe9ab666efebf5d` |
| `/06-requirements-design/` | `37dadeeb807774fd69d1ed337574f5150a7d20c353b3941ee63c8e2e7a2bbead` |
| `/07-workflow-methods/` | `bd874ac52fcf380603019996960192284e21351330427876c440427ded06a854` |
| `/08-quality/` | `af7ca3f73308ed82cfe355a0d43b4eadf21662670706869b494755204a095192` |
| `/09-git-github/` | `844415690b6311b8ee8b1fe756b9aeb29b0411ef8be1b090d80369fab89c04be` |
| `/10-deployment-operations/` | `fe810f84b2a2a370a33bc276bdeb4ff902570be3e6ae86219ba6926f7667e129` |
| `/11-ai-native/` | `bf537725d949235fac80fbb526a98769584783ef01d3ba0d0c2f317d514a8e30` |
| `/12-case-studies/` | `da2cb32e3ab70f42bac8e188cf3c4343d674ec319820b729bcc99c5674db2c4e` |
| `/` | `6787b8f89d999dd65b95d0666b6ca689365a3f4baf9e7238e29089bd8849d058` |
| `/reference/` | `f8b6ff1d53100139a14f8c9f3fce9add18ed1538efd11fe5f25d15d3e3f20889` |
| `/start-here/how-to-use-this-guide/` | `6e7e0805264f37cfaceb2997381757b6c01fa348a568c7207273f86dc8ae16b0` |
| `/start-here/` | `e626e2603461b208ebba84f9762be698977f2bcb2c1650a7e68ee6b505e641d2` |
| `/start-here/learning-paths/` | `06c68bae24681125add36560d58a8a1e33b8085dfbc5f6fc6daab1fc7b9cd679` |
| `/start-here/why-this-guide/` | `57f61cd159c22789a5b6c9900d0ff56b54e9a721c6a0c1f33c2fe15c2e426d7c` |

### 배치 4: 5개 경로

이번 배치의 5개 경로를 1440×1000 밝은 테마와 390×844 어두운 테마에서 새로 열었습니다. 10개 상태 모두 HTTP 200, H1 한 개, 출판 준비 배지와 정상 이미지가 확인됐고, 전역 가로 넘침·콘솔 경고 및 오류·페이지 오류·실패한 요청은 없었습니다. 픽셀 전수 검토가 아니라 실제 브라우저 관찰입니다. 원출력: `output/playwright/task23-batch4-changed-1795366245356/results.json`, SHA-256 `80979fd206712424da037cd16959fdf78085c67115c061a174f5e81d455edb20`.

| 로컬 경로 | 수신 HTML SHA-256 |
|---|---|
| `/reference/agent-output-glossary/` | `9bf0d4d78ac7270fe736bf7c19b7d97b09d5a5c32241a1765e4c154e573e13ae` |
| `/reference/checklists/` | `cd058785d928b3d83c057ca7391217a5826d10da3401a45860f5f3fb92318821` |
| `/reference/current-tool-mapping/` | `3a53d4e7649ef2922e5b46d27ae191232fd42db9f2cd1b1ca45170ab89759d82` |
| `/reference/development-glossary/` | `0d342cb7e653bbe27829899f0d2db6ae467cd522390a64b1b00c608553003c4d` |
| `/reference/methodology-map/` | `8f694fd659cd47f2a6bfd5822d5e465fb32a8ce7b1cc1cf9c51b0dbfe3e198c5` |

### 최종 로컬 빌드의 검증 범위

배치별 관찰 기록을 모아 최종 빌드와 대조하자, 118개 상태 중 108개는 수신 HTML의 SHA-256이 달랐습니다. 이 108개는 최종 빌드로 다시 열었고, 마지막 배치 10개는 같은 빌드에서 관찰한 결과를 재사용했습니다. 최종 합계는 고유 경로 59개 × 2개 화면 폭 = 118개 상태입니다. 118개 모두 실제 수신 HTML과 최종 빌드 HTML의 바이트 해시가 같고, 관찰 시점의 원고 해시도 현재 후보와 같습니다. 전 상태에서 HTTP 200, H1 한 개, 출판 준비 배지, 깨진 이미지·전역 가로 넘침·런타임 오류 및 경고 0건을 확인했습니다. 대표 이미지 2장은 직접 판독했습니다. 공개 URL 검증이나 실제 배포가 아닙니다.

| 최종 근거 | 상태 수 | 로컬 JSON의 SHA-256 |
|---|---:|---|
| `output/playwright/task23-batch4-changed-1795366245356/results.json` | 10 | `80979fd206712424da037cd16959fdf78085c67115c061a174f5e81d455edb20` |
| `output/playwright/task23-final-pilot-1795366329856/results.json` | 2 | `47294bb4a728cc7a27176d2701acd42833360fdf0ad70da3bc9080ee2ac4a2e9` |
| `output/playwright/task23-final-drift-1795366355180/results.json` | 106 | `53e7d2504e54d07192f13661650299539bcbffcc1d10533f0c8f919f543c8063` |
