# 소유자 검토용 원고 승인 묶음

**승인 대기 — 공개 문서 59개 모두 `review`, `ready` 0개.** 승인 대상으로 고정한 원고 커밋은 `e52fa3e8ce081ce22495eefab8d4b668a3fed17d`입니다. 이 커밋에서 작업 트리가 깨끗한 상태로 59개 경로·원문 SHA-256과 R01~R26 행렬을 대조했습니다. 이 값은 **내용 승인을 요청하는 기준**이지 배포용 release candidate나 소유자 승인 기록이 아닙니다.

## 승인 시 달라지는 것

승인 범위는 아래 원고에 한해 네 배치로 frontmatter의 `contentStatus: review`를 `ready`로 바꾸고 `reviewEvidence`를 완성하는 로컬 작업입니다. 각 원고의 실제 행 검토·재판정, 콘텐츠 감사·출처 지도·자동 검사·브라우저 검사·소유자 승인 기록을 연결하고, 그림을 참조하는 원고에는 시각 감사를 연결합니다. 생성되는 콘텐츠 지도와 관련 상태·검증 기록도 갱신합니다. 승인 전에는 소유자 승인 파일을 만들지 않습니다. 승인 뒤에도 본문 바이트가 그대로인지 배치별로 대조하고 ready 표시를 실제로 검증해야 합니다.

원고 본문·출처의 의미나 그림이 바뀌면 이 승인을 재사용하지 않고 새 묶음을 제출합니다. **이 내용 승인에는 원격 쓰기, 배포, 공개 URL 검증, 태그·릴리스 및 최종 공개 승인이 포함되지 않습니다.** 승인하지 않으면 현재의 로컬 review 상태가 유지됩니다.

## 판단 근거와 한계

- [검토 행렬](review-matrix.md)에 공개 원고 59개를 R01~R25에 중복 없이 배정했고 R26은 별도 통합 검토입니다. [R26 재검토](r26-integration-codex-rereview.md)는 C0/I0/M5, [완료 후보 검토](r26-controller-closeout-review.md)는 신규 C0/I0/M0입니다. [최초 응답과 진단](r26-integration-evidence-status.md)은 별도로 보존했고, R25의 진단 예외는 적용하지 않았습니다.
- [콘텐츠 감사](../../public-beta-content-audit.md), [출처 지도](../../../../research/source-map.md), [출처 공백 대장](../../../../research/public-beta-source-gap-register.md), [시각 감사](../../public-beta-visual-audit.md)를 기준으로 삼습니다. 현재 제품 동작을 확인하지 못한 항목은 원래의 확인일·실패 경계를 유지합니다.
- 위 clean 커밋에서 `npm run check`가 종료 코드 0이었습니다. 테스트 434/434, 공개 문서 59개, 참조 검사 463개 Markdown/MDX·학습 SVG 14개, 계획 중복·누락 0개, 빌드·Pagefind 60페이지, 고지 바이트 일치입니다. 로컬 빌드는 공개 site URL을 설정하지 않아 sitemap을 건너뛰었습니다.
- 브라우저 근거는 [Task 21 로컬 사이트 QA](site-qa.md), 각 행의 실제 판독 기록, [R26 변경 범위 검증](r26-fix1-validation.md)입니다. R26 Fix1은 8개 문서의 9개 위치·36개 상태와 내부 스크롤 양끝 12장을 직접 확인했습니다. 전체 사이트 캡처를 이 커밋에서 되풀이한 것이 아닙니다. 포인터를 쓰지 않은 모바일 운영체제 전체 Tab 경로 한 번의 완주 및 실제 배포 환경은 미확인입니다.
- [권리·공개 안전 기록](release-safety-audit.md)은 소유자가 기존 구성요소를 유지하기로 한 결정과 최종 배포물의 고지 전달을 구분합니다. 실제 배포 범위·고지·검색은 M7 직전에 따로 확인해야 합니다.

### 수용 상태로 남은 Minor 5건

| ID | 남은 사항 |
|---|---|
| R01-M01 | 첫 정의에서 프로그램과 시스템의 관계를 더 빨리 안내할 수 있습니다. |
| R01-M02 | 첫 비교표 전에 데이터 계보와 데이터셋 버전을 더 설명할 수 있습니다. |
| R05-M01 | 공유 그림 하단의 각 관계에 개별 레이블은 없습니다. 기존 의미 보존 판단을 유지했습니다. |
| R05-CO-M01 | 한 공개 본문의 ‘현재 draft’라는 설명은 문서 상태와 독립적인 표현이 아닙니다. 이 문구를 바꾸면 상태 표시만의 변경이 아니라 본문 변경입니다. |
| R02-CO-M01 | 한 양성 회귀 사례는 현재 정상 입력을 재검사합니다. 실제 상태 변형까지 시험했다는 증거로 사용하지 않습니다. |

### 검토 행별 근거

| 행 | 대상 | 최초 결과 | 재판정 | 후속 검토 |
|---|---|---|---|---|
| R01 | software-system | [최초](r01-software-system-codex-review.md) | [재판정](r01-software-system-adjudication.md) | 최초 PASS, 본문 변경 없는 수용으로 원고 재검토 불필요 |
| R02 | client-server | [최초](r02-client-server-codex-review.md) | [재판정](r02-client-server-adjudication.md) | [후속](r02-client-server-codex-rereview.md) |
| R03 | http | [최초](r03-http-codex-review.md) | [재판정](r03-http-adjudication.md) | [후속](r03-http-codex-rereview.md) |
| R04 | api-data-auth | [최초](r04-api-data-auth-codex-review.md) | [재판정](r04-api-data-auth-adjudication.md) | [후속](r04-api-data-auth-codex-rereview.md) |
| R05 | browser-dom | [최초](r05-browser-dom-codex-review.md) | [재판정](r05-browser-dom-adjudication.md) | [후속](r05-browser-dom-codex-rereview.md) |
| R06 | prd-sdd-tdd | [최초](r06-prd-sdd-tdd-codex-review.md) | [재판정](r06-prd-sdd-tdd-adjudication.md) | [후속](r06-prd-sdd-tdd-codex-rereview.md) |
| R07 | testing | [최초](r07-testing-codex-review.md) | [재판정](r07-testing-adjudication.md) | [후속](r07-testing-codex-rereview.md) |
| R08 | git-github | [최초](r08-git-github-codex-review.md) | [재판정](r08-git-github-adjudication.md) | [후속](r08-git-github-codex-rereview.md) |
| R09 | build-deploy | [최초](r09-build-deploy-codex-review.md) | [재판정](r09-build-deploy-adjudication.md) | [후속](r09-build-deploy-codex-rereview.md) |
| R10 | operations | [최초](r10-operations-codex-review.md) | [재판정](r10-operations-adjudication.md) | [후속](r10-operations-codex-rereview.md) |
| R11 | coding-agents | [최초](r11-coding-agents-codex-review.md) | [재판정](r11-coding-agents-adjudication.md) | [후속](r11-coding-agents-codex-rereview.md) |
| R12 | meeting-capstone | [최초](r12-meeting-capstone-codex-review.md) | [재판정](r12-meeting-capstone-adjudication.md) | [후속](r12-meeting-capstone-codex-rereview.md) |
| R13 | stock-capstone | [최초](r13-stock-capstone-codex-review.md) | [재판정](r13-stock-capstone-adjudication.md) | [후속](r13-stock-capstone-codex-rereview.md) |
| R14 | mental-support | [최초](r14-mental-support-codex-review.md) | [재판정](r14-mental-support-adjudication.md) | [후속](r14-mental-support-codex-rereview.md) |
| R15 | work-environment | [최초](r15-work-environment-codex-review.md) | [재판정](r15-work-environment-adjudication.md) | [후속](r15-work-environment-codex-rereview.md) |
| R16 | data-support | [최초](r16-data-support-codex-review.md) | [재판정](r16-data-support-adjudication.md) | [후속](r16-data-support-codex-rereview.md) |
| R17 | frontend-support | [최초](r17-frontend-support-codex-review.md) | [재판정](r17-frontend-support-adjudication.md) | [후속](r17-frontend-support-codex-rereview.md) |
| R18 | design-support | [최초](r18-design-support-codex-review.md) | [재판정](r18-design-support-adjudication.md) | [후속](r18-design-support-codex-rereview.md) |
| R19 | workflow-support | [최초](r19-workflow-support-codex-review.md) | [재판정](r19-workflow-support-adjudication.md) | [후속](r19-workflow-support-codex-rereview.md) |
| R20 | quality-support | [최초](r20-quality-support-codex-review.md) | [재판정](r20-quality-support-adjudication.md) | [후속](r20-quality-support-codex-rereview.md) |
| R21 | git-support | [최초](r21-git-support-codex-review.md) | [재판정](r21-git-support-adjudication.md) | [후속](r21-git-support-codex-rereview.md) |
| R22 | deploy-config | [최초](r22-deploy-config-codex-review.md) | [재판정](r22-deploy-config-adjudication.md) | [후속](r22-deploy-config-codex-rereview.md) |
| R23 | ai-support | [최초](r23-ai-support-codex-review.md) | [재판정](r23-ai-support-adjudication.md) | [후속](r23-ai-support-codex-rereview.md) |
| R24 | navigation | [최초](r24-navigation-codex-review.md) | [재판정](r24-navigation-adjudication.md) | [후속](r24-navigation-codex-rereview.md) |
| R25 | reference | [최초](r25-reference-codex-review.md) | [재판정](r25-reference-adjudication.md) | [후속](r25-reference-codex-rereview.md) |
| R26 | integration | [최초](r26-integration-codex-review.md) | [재판정](r26-integration-adjudication.md) | [후속](r26-integration-codex-rereview.md) |

### 고정 원고 59개

아래 해시는 frontmatter를 포함한 커밋의 파일 전체 바이트에 대한 SHA-256입니다. 승인 뒤 예상되는 frontmatter 변경은 이 값과 분리해 검사합니다.

| 행 | 원고 | SHA-256 |
|---|---|---|
| R01 | [소프트웨어는 시스템입니다](../../../../src/content/docs/01-mental-models/software-is-a-system.md) | `f086dc056630893c03b2a8c1a98304063bf1053eef26b25da7b587ae038bbc3d` |
| R02 | [클라이언트·서버·풀스택](../../../../src/content/docs/03-full-stack/client-server-full-stack.md) | `38b6f61b9a981626245d26d75b5ded63b02b676d7e43442161953d8bc5f30282` |
| R03 | [HTTP 요청과 응답](../../../../src/content/docs/03-full-stack/http-request-response.md) | `d90c0fe3dab7eba53c796c81491227edad717c8a1df890d9cd5c22d2c1e0b97c` |
| R04 | [API·데이터베이스·인증](../../../../src/content/docs/04-backend-data/api-database-auth.md) | `9f11f724ab45a4bb6fd779324dee100a5103e7cd5167afa912ab04561be6882f` |
| R05 | [브라우저·DOM·렌더링](../../../../src/content/docs/05-frontend/browser-dom-rendering.md) | `4d914c5e17c05a3683faa48bbe657ba7f655eb6a4595199bfeb09dc2fa37bfe9` |
| R06 | [PRD·두 종류의 SDD·TDD](../../../../src/content/docs/06-requirements-design/prd-sdd-tdd.md) | `5b0c91327e30d694d5025e0f6b378f88406f616bce284e5c3a74b8e2fe67207d` |
| R07 | [테스트 전략](../../../../src/content/docs/08-quality/testing-strategy.md) | `b5ac2191970ab30a261a1c530eb6eae050895bb17499ff0c6ca5388fbea5bbc9` |
| R08 | [Git과 GitHub는 다릅니다](../../../../src/content/docs/09-git-github/git-and-github.md) | `e9a859657dc626c9ee734231c8a2ba59e666887ed764cb0b0b888001f57118c1` |
| R09 | [빌드·배포·도메인·DNS](../../../../src/content/docs/10-deployment-operations/build-deploy-domain-dns.md) | `157c675aa181f355939e29963f62d9c246129ea800261256f004f5ce9195d28c` |
| R10 | [로그·모니터링·백업](../../../../src/content/docs/10-deployment-operations/logs-monitoring-backup.md) | `17aa3d355ad4432d1fda08fade29284442bdb6f07bcb6340721df0bae9437975` |
| R11 | [AI 코딩 에이전트와 일하는 법](../../../../src/content/docs/11-ai-native/working-with-coding-agents.md) | `ac63eb2a468416b43c57432ac4297e0af3c27edf6d694b86a40bca7131311711` |
| R12 | [첫 풀스택 프로젝트: 모임 참가 웹앱](../../../../src/content/docs/12-case-studies/first-full-stack-project.md) | `c492b1be6c3f7f85287de61c32c3e0f959c98c48e7959a8ced35b9e3c01c4851` |
| R13 | [데이터 분석가의 주가 대시보드 사례](../../../../src/content/docs/12-case-studies/analytics-dashboard-case-study.md) | `b92022a372822ffa44cf28d67f4decf85ed5e6f79bb85a657d71b4df890e1238` |
| R14 | [추상화와 트레이드오프](../../../../src/content/docs/01-mental-models/abstraction-and-tradeoffs.md) | `39e01f64db9883c58de86b9fa22713fe092cab3e7e19a24cbbd65d1f42ea8126` |
| R14 | [개발자처럼 문제를 나누는 법](../../../../src/content/docs/01-mental-models/developer-thinking.md) | `6fa248d88d051549a677e35d6ab2a3ab0b97d3b5435b04678cb6dace73fe1184` |
| R15 | [의존성·패키지 관리자·환경](../../../../src/content/docs/02-work-environment/dependencies-package-managers-environments.md) | `017796aa03a0ad2e37ac33bb8d847fe11fa351bfb7ca7249b105ac6597a2ebfe` |
| R15 | [파일·폴더·경로](../../../../src/content/docs/02-work-environment/files-folders-paths.md) | `df9f467541e9628f9805a82490ab5c02f6bf45bb586b3938510df6596cec7cd8` |
| R15 | [터미널·프로세스·포트](../../../../src/content/docs/02-work-environment/terminal-processes-ports.md) | `e4eabb8996442e78dae3dc9639fa3c009c88fbca7c90f516b626a33d5e92ab1a` |
| R16 | [프런트엔드와 백엔드의 경계](../../../../src/content/docs/03-full-stack/frontend-backend-boundary.md) | `f50bf106d5b3ee45ceffff3fca06eb2edca27aa9b1193af8d396c96161b023cd` |
| R16 | [데이터 모델·스키마·마이그레이션](../../../../src/content/docs/04-backend-data/data-model-schema-migration.md) | `2bbe29c1fa3aaca28dc83d89ab1146176e2230974867a36bc4cf36ec8f6d086f` |
| R16 | [상태·캐시·큐](../../../../src/content/docs/04-backend-data/state-cache-queue.md) | `dd00a9865c2865a1852f5c60d2fdbb0100f655db2c505810d192ddfe88ee2e4f` |
| R17 | [접근성과 반응형 설계](../../../../src/content/docs/05-frontend/accessibility-responsive-design.md) | `f771876d195f11c237b1b548bec3d26056f6d1bf1e98b84df81fc0f91e97ef21` |
| R17 | [UI 상태와 사용자 경험](../../../../src/content/docs/05-frontend/ui-state-and-ux.md) | `32e0a610adf75d6b9f4942c2cf8fb94980948ce346950e934660fcb57c2db5ad` |
| R18 | [ADR과 트레이드오프 기록](../../../../src/content/docs/06-requirements-design/adr-and-tradeoffs.md) | `a3b14ed20f674eb88379a33c0866ee3dadb3ce7d86cc88f748e5e49928885e06` |
| R18 | [아키텍처와 프레임워크](../../../../src/content/docs/06-requirements-design/architecture-and-frameworks.md) | `72798fd19f5e063a31f0ff56cb4ee8ecb59d49a67304a3a869a996ed420310d0` |
| R19 | [코드 리뷰와 CI/CD](../../../../src/content/docs/07-workflow-methods/code-review-ci-cd.md) | `3d020021cfe50ddda9c219360b20361bac82b99b47e4135dbe4c6d1dbf0e25f4` |
| R19 | [점진적 전달과 작업 분해](../../../../src/content/docs/07-workflow-methods/incremental-delivery.md) | `65f76f635bcec37285abb42b171734ca6899526418ba2113e836824685ae9be5` |
| R19 | [소프트웨어 개발 생명주기](../../../../src/content/docs/07-workflow-methods/software-development-lifecycle.md) | `2939fcdcf0ef802f66d78c3c1903fb5a16f1a8008c618f51f7c444a26dc36381` |
| R20 | [디버깅과 관측 가능성](../../../../src/content/docs/08-quality/debugging-observability.md) | `edc46880d09b9bb0288ff76e8dd58f13eab67ade82a16d35530d17f55d90b0f6` |
| R20 | [성능과 보안](../../../../src/content/docs/08-quality/performance-security.md) | `3a4cf7084e72f2224cf38b0af9c4d4056bf0a0ae4d5442d7a6b1afe06dbcdedf` |
| R21 | [브랜치·커밋·Pull Request](../../../../src/content/docs/09-git-github/branch-commit-pull-request.md) | `5d76d3aff4a4e330e5f87fc901666e084016bee5a2466038e29f7176f3664c09` |
| R21 | [되돌리기·충돌·릴리스](../../../../src/content/docs/09-git-github/undo-merge-conflict-release.md) | `3c39c8d3728e6a46c6ff88138e63eae8da1122ed48bea605e984d892d6132d30` |
| R22 | [환경 변수와 설정](../../../../src/content/docs/10-deployment-operations/environment-variables-config.md) | `24b23cb6ae0a2cdfdcf8e69f9a4ff80dbb8dccea7d0bf91370d28b2a6f1bb34b` |
| R23 | [에이전트 결과 리뷰와 검증](../../../../src/content/docs/11-ai-native/agent-review-and-verification.md) | `b362a31b7397b97b7f4652bf0b6c9e5ffd696d7f8c9e4c634711b3400d992741` |
| R23 | [컨텍스트·스펙·하네스·루프](../../../../src/content/docs/11-ai-native/context-spec-harness-loop.md) | `b0b441d1bde4ac968d75561523834bee6f36cd22384cedf83aab6018f6b1e725` |
| R23 | [권한·샌드박스·worktree](../../../../src/content/docs/11-ai-native/permissions-sandbox-worktrees.md) | `1ecd6f175210d466e67a9bab10c5b309948dcd28449644b62a7ba9fcb3642faa` |
| R24 | [바이브 개발 핸드북](../../../../src/content/docs/index.md) | `af2b371b4308292f4f855d22ac3e33f505598338f3f0ff4b67bc6b9b87ce65d2` |
| R24 | [시작하기](../../../../src/content/docs/start-here/index.md) | `7d9a47e894061126de83fc4df53e01df19b3393ed8ed526b2d7ee7d5da84fa8a` |
| R24 | [이 가이드를 사용하는 법](../../../../src/content/docs/start-here/how-to-use-this-guide.md) | `147f4050bc51eba5ed0cad5e851a4bc07daa43fe2e6f6724e1ddb114469bb52b` |
| R24 | [학습 경로](../../../../src/content/docs/start-here/learning-paths.md) | `8ae3482139ced197a22552533ed527f1fe01b5cae49a42d7b0734e22d5787e74` |
| R24 | [왜 이 가이드가 필요한가](../../../../src/content/docs/start-here/why-this-guide.md) | `c45c9c35a7cd37443b8955966e6df24da69f78750f764cc75a96399807320cef` |
| R24 | [1. 개발자 사고와 소프트웨어](../../../../src/content/docs/01-mental-models/index.md) | `1560f6ee1fb9c1b8462036649712d763a1097bb71befe61cc4afd2b31eaf6399` |
| R24 | [2. 작업 환경](../../../../src/content/docs/02-work-environment/index.md) | `1506eb8dd60c0442f5df810a07c71953b56e13b95c40dd042e164a1113bbaabf` |
| R24 | [3. 풀스택 구조](../../../../src/content/docs/03-full-stack/index.md) | `7e801b01d1e139c34f8b52612168d1c471830912d15a41f0bcb566461e1e4388` |
| R24 | [4. 백엔드와 데이터](../../../../src/content/docs/04-backend-data/index.md) | `94979407bed69dce08cf30aefed40362ae70a334fcfbb35b3d00ae26000e0aed` |
| R24 | [5. 프런트엔드](../../../../src/content/docs/05-frontend/index.md) | `f1fc8b591c7052593cc293ad93e5065d19218eb0d2c08a5ee9ff3ff40a6d2701` |
| R24 | [6. 요구사항과 설계](../../../../src/content/docs/06-requirements-design/index.md) | `0b09a9281b0735a906b7e578e2103e1360ef7baca85d98fac0c8e91ff5babe48` |
| R24 | [7. 개발 절차와 협업](../../../../src/content/docs/07-workflow-methods/index.md) | `d2d878921c3035339d79c3612b715e2587a5c51e278a3c01a235d4ab094f6fa2` |
| R24 | [8. 품질과 안전](../../../../src/content/docs/08-quality/index.md) | `bf776df0c65c10b528a46a62ead8751c099a81f13ebde020769364229f66e9e0` |
| R24 | [9. Git과 GitHub](../../../../src/content/docs/09-git-github/index.md) | `d31c2409ab4f0151330e61b2cda7c07acf9c21c823e91cccaf89ba571b5e9b37` |
| R24 | [10. 배포와 운영](../../../../src/content/docs/10-deployment-operations/index.md) | `9d9857b8ca69593b2526013e688c4a4149d6cab51160e4301727510db948809c` |
| R24 | [11. AI 네이티브 개발](../../../../src/content/docs/11-ai-native/index.md) | `69f9aa4418857a1fbe0fcc2e364599bb0fd71d17eebeb12f6383e8fb65c156aa` |
| R24 | [12. 사례와 캡스톤](../../../../src/content/docs/12-case-studies/index.md) | `467a69706d3088eb7cda2149ba0524ba170911fbd9fa6a0dbfd16d3c1521ae10` |
| R24 | [용어·방법론·체크리스트](../../../../src/content/docs/reference/index.md) | `55478301281db6d86b20d745c133eb0cd09ff80a10769a57a17c230e96cf659b` |
| R25 | [개발 용어집](../../../../src/content/docs/reference/development-glossary.md) | `8baea08e721236af9e6a0f088539b3007366d3e16c888618e6bed92109db5c6e` |
| R25 | [에이전트 출력 용어집](../../../../src/content/docs/reference/agent-output-glossary.md) | `f482d9aa06fa8bd19d647b9fdc5bf9356b293bb7362b1727a6dd5fb6cdd239b2` |
| R25 | [방법론 관계 지도](../../../../src/content/docs/reference/methodology-map.md) | `3546797ccd896fc249dfb9c2d2d1bffbcc0285ad5db5721b83610f395c82c866` |
| R25 | [실전 체크리스트](../../../../src/content/docs/reference/checklists.md) | `60b8f586e447e690fe87052186a790eb5044245f8e869f47b42ed58d40ca1b22` |
| R25 | [현재 도구 매핑](../../../../src/content/docs/reference/current-tool-mapping.md) | `ac9f9b1079eaf269ade123c2d3198629366c33ffd28169d09034a7a157bda248` |
