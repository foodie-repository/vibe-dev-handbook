# 공개 베타 공통 독립 검토 계약

- 계약 버전: `2026-08-30-subscription-only-checkpoint-separation`
- 적용: 2026-08-28 이후의 Claude 작업 단위·M5 검토. 이 파일은 계약이며 실행 결과나 PASS가 아닙니다.
- 권위: [완성 명세](../../../superpowers/specs/2026-08-12-public-beta-completion-design.md), [마스터 계획](../../../superpowers/plans/2026-08-12-public-beta-master-plan.md), `AGENTS.md`, `RULES.md`가 우선합니다. 아래 대응표는 필수 기준의 축약본이지 새 완료 계약이 아닙니다.
- 경로의 `opus5`는 계획에서 고정한 증거 경로 ID입니다. 과거 파일·결정 기록을 개명하거나 소급 수정하지 않으며, 실제 모델은 각 실행의 메타데이터로 판정합니다.

## A. 실행·권한·입력 계약

Codex는 작성·조사·자체 점검·지적 재판정·수정·검증·통합을 담당하며 M5의 독립 리뷰어로 계산하지 않습니다. 작성자와 분리된 Codex 작업 검토는 로컬 체크포인트의 구현 결함 게이트로 기록할 수 있지만 Claude R01~R26, `ready` 증거 또는 소유자 승인을 대신하지 않습니다. Claude는 작성 대화나 Codex의 자체 PASS를 결론으로 물려받지 않는 읽기 전용 리뷰어입니다. 소유자는 고정 원고·기준 SHA의 최종 승인자이고, 실제 사람 기술·편집·독자 검토는 수행했을 때만 선택 증거입니다. Codex의 모델·effort는 변경하지 않습니다.

Claude 호출은 `/opt/homebrew/bin/claude --model 'claude-opus-4-8[1m]' --effort high`의 요청 설정이 **현재 구독 포함 사용량만 소비함을 먼저 입증한 경우**에만 허용합니다. CLI나 구독 로그인 확인만으로 입증되지 않습니다. API 키 기반 종량제·별도 API 호출·API 크레딧·이미 충전된 구독 외 크레딧·Extra usage·추가 사용량 결제·자동 충전/구매·유료 프록시/게이트웨이/다른 제공자·한도 우회용 계정 전환/상향은 금지하며 추가 비용을 선택지로 제안하지 않습니다. API 키·인증 도우미·환경/게이트웨이·추가 사용 설정의 별도 과금 가능성을 배제하지 못하면 시험 호출도 하지 않습니다. 비밀값·인증정보 내용은 읽거나 기록하지 않고 설정 존재와 비민감 상태만 확인하며 인증정보 삭제·전역 설정 변경을 하지 않습니다. `opus` 별칭·다른 모델/컨텍스트/effort·프록시·계정·제공자로 우회하지 않습니다. 1M은 최대 입력 용량이며 비용 조건보다 우선하지 않습니다.

허용 도구는 요청서에 열거된 파일을 읽는 `Read`뿐입니다. 파일 수정·셸/Bash·Git·테스트·웹 검색/접근·MCP·플러그인·스킬·하위 에이전트 실행은 금지합니다. 현재 CLI에서 확인한 `--safe-mode`·`--tools Read`·명시적 금지 도구·설정 격리·빈 MCP·세션 비저장 옵션을 함께 사용합니다. 인증을 API 경로로 제한하는 `--bare`는 사용하지 않습니다. 옵션의 존재나 safe mode는 구독 포함 과금 증거가 아닙니다. 권한·네트워크·비용 조건을 만족하지 않으면 모델 실행 전에 해당 검토를 `blocked`로 둡니다.

각 요청은 [검토 요청 템플릿](../../../../templates/public-beta-review-request-template.md)을 사용해 다음 입력을 경로·개별 SHA-256·결합 SHA-256으로 고정합니다. 원고 본문 또는 필요한 근거가 빠졌으면 범위 축소 PASS 대신 입력 공백을 보고합니다.

1. 이 계약과 해당 검토 행·기준 commit·수용 기준·비목표·의존관계·재검토 대상 finding입니다. 전체 명세/계획은 매번 입력하지 않고 실제 쟁점과 관련된 조항만 추가합니다.
2. 대상 원고 전체입니다. frontmatter·본문·코드/프롬프트·표·alt·교차 링크를 생략하지 않고, Codex의 요약이나 판정으로 대체하지 않습니다.
3. 주장 판단에 필요한 실제 공식·1차 출처 원문 또는 정확한 원문 발췌·URL·확인일·적용 범위, source-map/source-gap 해당 행입니다. 원문 발췌는 원본 출처와 위치·누락 범위를 추적할 수 있어야 하며 필요한 예외를 자르지 않습니다. 원문이 없거나 오래된 내용만 있으면 직접 확인했다는 주장을 금지하고 `not-confirmed`로 남깁니다. Claude는 웹을 열지 않습니다.
4. 관련 중심 장·인접 문맥·용어집의 실제 정의, 소비 SVG·Mermaid 원본·alt와 필요한 실제 렌더 증거입니다. 공통 자산의 모든 소비 문맥, 접근성·테마/뷰포트 증거와 한계를 포함합니다.
5. 관련 콘텐츠/출처/시각 감사 행, 기존 미해결 finding·재판정·diff·검증 결과입니다. 적용하지 않는 기준은 사유를 명시하며 Codex의 자체 결론만 전달하지 않습니다.

작성·자체 점검·해당 자동 검증을 마친 안정된 입력부터 요청하고 기존 행 단위·선행 관계 안에서 위험이 큰 항목을 우선합니다. 1M을 채우려는 거대한 일괄 검토나 필수 범위를 표본으로 줄이는 검토는 하지 않습니다.

## B. 필수 평가 기준과 권위 조항 대응표

아래 ID 전부를 적용 여부와 함께 검토합니다. 행별 추가 조항이 필요하면 요청서에 원문 위치를 덧붙입니다. 준수 여부를 기계 점수만으로 확정하지 않습니다.

| ID | 반드시 확인할 내용 | 권위 조항 |
|---|---|---|
| C01 독자·임무 | 비개발자·분석가·PM·디자이너·도메인 전문가가 시스템을 이해하고 AI 결과를 질문·검토·검증·운영하도록 돕습니다. 문법 암기·제품 매뉴얼·한 번의 프롬프트 만능론·새 플랫폼/CMS/계정/결제는 목표가 아닙니다. | 명세 2~4, AGENTS 1·5·7, RULES 1·2·9 |
| C02 역할·깊이 | 핵심 장은 독자 질문·한 문장 정의·비유/한계·시스템 위치·실제 신호/용어·판단 규칙·오해/실패/복구·체크리스트·짧은 연습·용어/출처·AI 실전 연결을 갖춥니다. 캡스톤은 요구→설계→상태/API/데이터/권한→테스트→Git→배포/운영/복구를 추적하고 성공 화면과 업무/데이터/운영 성공, 불변식/복구 오라클을 구분합니다. 내비게이션은 순차/검색 학습·실제 제목/순서/상태/링크·탐색/모바일/검색 증거를, 참고편은 정의 일치·검색/약어/링크·실행 가능 체크리스트를 확인합니다. 인덱스에 핵심 장의 분량이나 10절을 강요하지 않습니다. | 명세 3·9.1~9.5, AGENTS 5, 계획 Tasks 11~19 |
| C03 규칙·사례 | CASE/DURABLE/AUDIENCE/ANALOGY/EVIDENCE/SOURCE/TERM/VISUAL을 기존 원고에도 전수 적용합니다. 일반 사례는 모임 참가 웹앱, 분석 사례는 명시적 교육용 주가 fixture입니다. 폐기 사례의 사용자·역할·상태·API·필드·원천·단위·실패·오라클·그림 의미도 제거 여부를 확인하되 역사 증거는 소급 개작하지 않습니다. 사례는 개념을 대체하지 않으며 차이가 있을 때만 비교합니다. 투자 추천/수익 보장/자동 주문은 범위 밖이고 실제 데이터의 정의·조정·거래일/시간대·권리/재배포 범위는 별도 근거가 필요합니다. | 명세 7.1~7.4·9.2, RULES 3·8, 계획 Global Constraints·M1·Task 18 |
| C04 설명·용어 | 쉬운 정의→정식 용어→구조/관계→실제 신호→판단/검증으로 연결합니다. 비유의 일치/한계를 명시합니다. PRD·Software Design Description·Spec-Driven Development·TDD의 산출물/접근/규율을 혼용하지 않고 context/harness/loop의 성숙도·맥락을 표시합니다. 용어집/인접 장과 충돌하지 않아야 합니다. | 명세 3·7·9, AGENTS 5, RULES 1~5, 편집 가이드 설명/비유/교차 연결 |
| C05 근거·현재성 | 중요 주장에 공식·1차 URL·확인일·버전/상태·적용 문서/범위·일반화 금지선을 추적합니다. 마케팅과 합의, 영속 개념과 제품을 구분하고 계정/요금제/지역/베타 차이를 숨기지 않습니다. 접근 실패·404·인증/429·버전 불일치·캐시 근거를 현재 성공으로 쓰지 않습니다. 미확인은 `not-confirmed`·미게시 경계로 남기고 RC 시점에 현재 도구를 재확인합니다. | 명세 7.4·9.5·11·16.1, AGENTS 6, RULES 7, source-map/source-gap |
| C06 안전·권한 | 보안·개인정보·비밀·회사/운영 데이터·파괴적 변경·권리 위험과 복구 경로를 확인합니다. 예시는 가상임을 명시하고 무단 설치/네트워크/외부 쓰기·권한 확대를 유도하지 않습니다. 계획·구현·검증·commit·push·배포·공개 URL 성공을 분리하고 승인 없이 실행하도록 쓰지 않습니다. | 명세 7.1·13·14·18·19, AGENTS 4, RULES 6·8·10, 계획 5·Tasks 24~28 |
| C07 시각·접근성 | 한 그림 한 질문, 앞의 관찰 안내와 뒤의 증명/한계, 적합한 문법과 source/SVG 의미 일치를 확인합니다. 보통 노드4~7·기본상한9·화살표12이하·초점2이하, 9초과 개요/상세 분리·12초과 먼저 분할 원칙과 도구 선택 근거를 확인합니다. 색 외 레이블/선·title/desc/alt, 모바일 핵심 글자·잘림/겹침/overflow·선/marker 대비를 실제 light/dark·desktop/mobile에서 확인합니다. 정적 SVG 기본, Archify 조건부·새 런타임/삼중 정본 금지, 스킬 기본 외부 폰트/스타일을 무단 도입하지 않습니다. | 명세 12·16.3, 계획 Tasks 20~21, AGENTS 7 |
| C08 편집·메타데이터 | 자연스러운 존댓말·결론/이유/예외·과장 금지·한 문단 한 주장·첫 영문 용어 설명을 확인합니다. 공개 본문 중복 H1·깨진 링크/앵커·빈 alt·메타데이터/학습목표·CONTENT_MAP/manifest 불일치·미완성 표식을 확인합니다. 수정 문단/프롬프트에 임의 하드랩을 넣지 않고 기존 코드/표/구조는 보존합니다. 공개 콘텐츠는 지정 경로에, 조사·정책·템플릿은 별도 경로에 둡니다. | AGENTS 5·7~9, 편집 가이드, 명세 16.1~16.2 |
| C09 검토·상태 | `seed`/`draft`/`review`/`ready`와 구현/필수 검토 대기/공개 가능을 구분합니다. 자체 점검·실제 요청/고정 입력 없이는 `review`, 독립 검토·Codex 재판정·conformance·sources·automated·browser·owner·조건부 visual 증거 없이는 `ready`가 아닙니다. 소유자 승인은 정확한 범위/동일 RC SHA를 가리켜야 합니다. Critical/Important·미확인 중요 사실·실패/부분 응답은 완료 증거가 아닙니다. | 명세 8·10·16·21, 콘텐츠 생명주기, 계획 Tasks 22~23 |
| C10 웹·공개 게이트 | 검색(한국어/영문/약어)·학습 경로/인덱스·두 캡스톤·404·키보드/포커스·테마/반응형·이미지/overflow·console의 실제 증거를 확인합니다. 최종 local clean/RC SHA·전체 ready·감사·라이선스/버전·README/피드백·현재 tree/이력 권리·개인정보와 승인된 공개 snapshot을 확인합니다. local build·CI·Pages·비로그인 실제 URL·동일 SHA 태그/릴리스는 각각 별도 증거이며 M7 전 100%/공개 완료를 금지합니다. | 명세 6·15~19·21, 계획 Tasks 21~28 |
| C11 검토 커버리지·통합 | 아래 C절의 R01~R25 공개59개 전체와 R26 통합을 유지합니다. 핵심/고위험은 기존 개별/소묶음, 나머지는 의미 묶음입니다. 작업 단위의 독립 검토가 최종 M5를 대신하지 않습니다. R26은 Build Track13 순서·핵심 정의·두 사례·용어집·현재성·모든 인덱스/링크·증거 과장을 교차 확인합니다. | 명세 6 M5·9~10, 계획 4·Task 22 고정 리뷰 단위·Step 6 |
| C12 실행·변경 이력 | A절의 구독 전용/모델/권한/비밀 금지와 E절의 preflight·요청/실제 구분·해시·실패·재개·증거 유효성·검토 대기 시 독립 진행을 적용합니다. 구현·필수 자동/브라우저 검증·별도 Codex 작업 검토를 통과한 분리 가능 단위는 `implementation verified / Claude review pending` 로컬 체크포인트로 커밋할 수 있지만 M5·`ready`로 계산하지 않습니다. WIP·무관 변경·push/배포를 섞지 않고 과거 실행·점수·승인 기록과 실제 미통과 게이트를 보존합니다. | 명세 5·10.2~10.3·13~15·18.2, 계획 3·5·Task 22·DEC-PB-007~008 |

## C. 고정 검토 범위

[계획 Task 22의 고정 리뷰 단위](../../../superpowers/plans/2026-08-12-public-beta-master-plan.md)의 R01~R26 ID·대상·결과 경로·의존관계를 그대로 사용합니다. 아래는 입력 생성 시 사용할 정확한 경로 전개 규칙이며 모든 경로의 루트는 `src/content/docs/`입니다. R24의 18개는 계획의 M3-NAV 인벤토리와 동일해야 합니다. R01~R25 합집합은 공개 파일 전체59개, 중복0·누락0이어야 하며 R26은 추가 통합 검토입니다.

| ID | 경로(동일 디렉터리의 파일도 모두 명시) | 개수 |
|---|---|---:|
| R01 | `01-mental-models/software-is-a-system.md` | 1 |
| R02 | `03-full-stack/client-server-full-stack.md` | 1 |
| R03 | `03-full-stack/http-request-response.md` | 1 |
| R04 | `04-backend-data/api-database-auth.md` | 1 |
| R05 | `05-frontend/browser-dom-rendering.md` | 1 |
| R06 | `06-requirements-design/prd-sdd-tdd.md` | 1 |
| R07 | `08-quality/testing-strategy.md` | 1 |
| R08 | `09-git-github/git-and-github.md` | 1 |
| R09 | `10-deployment-operations/build-deploy-domain-dns.md` | 1 |
| R10 | `10-deployment-operations/logs-monitoring-backup.md` | 1 |
| R11 | `11-ai-native/working-with-coding-agents.md` | 1 |
| R12 | `12-case-studies/first-full-stack-project.md` | 1 |
| R13 | `12-case-studies/analytics-dashboard-case-study.md` | 1 |
| R14 | `01-mental-models/abstraction-and-tradeoffs.md`, `01-mental-models/developer-thinking.md` | 2 |
| R15 | `02-work-environment/dependencies-package-managers-environments.md`, `02-work-environment/files-folders-paths.md`, `02-work-environment/terminal-processes-ports.md` | 3 |
| R16 | `03-full-stack/frontend-backend-boundary.md`, `04-backend-data/data-model-schema-migration.md`, `04-backend-data/state-cache-queue.md` | 3 |
| R17 | `05-frontend/accessibility-responsive-design.md`, `05-frontend/ui-state-and-ux.md` | 2 |
| R18 | `06-requirements-design/adr-and-tradeoffs.md`, `06-requirements-design/architecture-and-frameworks.md` | 2 |
| R19 | `07-workflow-methods/code-review-ci-cd.md`, `07-workflow-methods/incremental-delivery.md`, `07-workflow-methods/software-development-lifecycle.md` | 3 |
| R20 | `08-quality/debugging-observability.md`, `08-quality/performance-security.md` | 2 |
| R21 | `09-git-github/branch-commit-pull-request.md`, `09-git-github/undo-merge-conflict-release.md` | 2 |
| R22 | `10-deployment-operations/environment-variables-config.md` | 1 |
| R23 | `11-ai-native/agent-review-and-verification.md`, `11-ai-native/context-spec-harness-loop.md`, `11-ai-native/permissions-sandbox-worktrees.md` | 3 |
| R24 | `index.md`, `start-here/index.md`, `start-here/how-to-use-this-guide.md`, `start-here/learning-paths.md`, `start-here/why-this-guide.md`, `01-mental-models/index.md`, `02-work-environment/index.md`, `03-full-stack/index.md`, `04-backend-data/index.md`, `05-frontend/index.md`, `06-requirements-design/index.md`, `07-workflow-methods/index.md`, `08-quality/index.md`, `09-git-github/index.md`, `10-deployment-operations/index.md`, `11-ai-native/index.md`, `12-case-studies/index.md`, `reference/index.md` | 18 |
| R25 | `reference/development-glossary.md`, `reference/agent-output-glossary.md`, `reference/methodology-map.md`, `reference/checklists.md`, `reference/current-tool-mapping.md` | 5 |

R26은 R01~R13의 Build Track13장, R24의18문서, R25의5참고편의 **본문 전체**와 관련 source/term/visual, 전체 콘텐츠 감사, R01~R25의 결과·재판정·미해결 finding을 읽습니다. 판정 요약만으로 본문 대조를 대신하지 않습니다.

## D. 루브릭·판정·출력

9항목을 각0~2점으로 평가합니다. 핵심 장은18점 중15점 이상이면서 치명 항목0이어야 합니다. 총점으로 치명 항목이나 필수 증거 부족을 상쇄하지 않습니다. 인덱스/참고편은 역할에 맞는 근거·적용외 이유를 적고 분량이나10절 구조를 강제하지 않습니다. 정책/시각 작업 단위는 C01~C12 중 적용 기준과 원래 작업 수용 기준으로 검토하며 원고 점수표가 적용되지 않는 이유를 명시합니다.

| 항목 | 0점 | 1점 | 2점 |
|---|---|---|---|
| 독자 문제 | 해결하는 문제 불명확 | 문제는 있으나 범위가 넓음 | 구체적 질문/사용 상황 |
| 정확성 | 오해/혼용 가능 | 대체로 맞지만 예외 부족 | 정의/예외/용어 구분 정확 |
| 구조 | 나열 중심 | 부분적 흐름 | 전체 시스템의 위치/관계 |
| 쉬운 설명 | 전문용어 의존 | 비유/예시 일부 | 쉬운 정의와 정식 용어 연결 |
| 비유 한계 | 비유를 사실처럼 설명 | 한계 암시 | 맞는 지점과 깨지는 지점 명시 |
| 판단 기준 | 정보만 제공 | 일반 조언 | 선택 조건/금지 신호/검증 증거 |
| 실패 모드 | 성공 경로만 설명 | 대표 실패 일부 | 실패와 복구/예방 연결 |
| 실전 연결 | 추상 설명만 있음 | 단편 예시 | AI 작업 지시/검토 상황 연결 |
| 근거 | 출처 없음 | 출처 불명확 | 공식/1차 출처와 확인일 추적 |

치명 항목은 보안/데이터 손실 위험 무시, PRD/두 SDD/TDD의 다른 범주 혼용, 미확인 현재 제품 기능 단정, 실제 검증 없이 AI 출력/테스트 결과를 신뢰하도록 유도함, 권리가 불명확한 이미지/장문 복제입니다. 심각도는 Critical/P0(보안·데이터 손실·공개 권리·완료 조건을 깨는 오류), Important/P1(핵심 정의·경계·학습 흐름·검증 계약의 실질 오류), Minor/P2(공개를 막지 않는 국소 표현/시각 일관성 문제)입니다.

출력은 자연스러운 한국어로 다음6절을 기본으로 하며 원고 재출력·전면 개작은 요청하지 않습니다. finding 하나는 위치/최소 인용·심각도·근거·최소 수정·재확인 기준을 약200단어 이내로 간결하게 쓰고, 같은 원인은 영향받는 모든 위치를 나열해 통합합니다. 건수 상한으로 중요한 finding을 누락하지 않으며 출력 상한/중간 종료는 불완전으로 기록하고 PASS로 인정하지 않습니다.

1. `검토 범위와 실제 읽은 입력`: 행ID·기준SHA·전체 입력의 완독/미독·부족/범위외와 C01~C12 적용 확인입니다.
2. `판정과 건수`: `PASS`/`NEEDS CHANGES`/`BLOCKED`, Critical/Important/Minor 건수와 주요 사유입니다. 정상 실행·입력 완독/불변·필수 기준 적합·미해결 Critical/Important0일 때만 PASS이며 소유자 승인/ready를 뜻하지 않습니다.
3. `위치별 finding`: 안정ID·파일:절/행·심각도·문제·입력 근거/적용 규칙·필요한 최소 수정·재확인 조건입니다.
4. `9항목 루브릭과 치명 항목`: 항목별 점수/근거·합계·치명 항목·적용외 이유입니다.
5. `미확인 사실·남은 위험·검토 한계`: 직접 확인하지 못한 외부 사실·미독/부족 입력·브라우저 증거 부족·Minor와 영향입니다.
6. `재확인 기준`: 수정 뒤 독립 재검토 대상/입력과 필요한 자동/시각 검증입니다. 파일/외부 상태를 바꾸지 않고 종료합니다.

## E. 증거 유효성·차단·완료

실행은 [사전 확인·시도 템플릿](../../../../templates/public-beta-claude-attempt-template.md)에 요청 모델/1M/high, 실제 인자, 결과에서 확인된 실제 모델/컨텍스트/effort, CLI·시각·종료 코드·실패 단계·권한 이벤트·입력 전후 해시를 분리해 남깁니다. 실제 값 미확인/불일치, 구독 전용 미입증, 오류/부분 출력은 PASS·`independent:`·M5 완료 증거로 쓰지 않습니다. 계정 이메일·조직 ID·토큰·세션 ID·정확한 비용을 저장하지 않습니다.

원장 `status`는 `pending`/`in_progress`/`blocked`/`done`을 유지합니다. `implementation_state`(미착수/작성·구현 완료/수정 필요), `required_review_state`(대기/차단/정상 검토 완료), `release_ready`(false 또는 모든 기존 게이트 충족 뒤 true)를 별도로 기록합니다. 차단 사유·고정 입력·마지막 사전 확인/시도·재개 조건을 남기되 필수 검토를 생략하지 않습니다. 한도 직후 재시도/폴링·예약/자동화·새 목표/작업 생성은 하지 않습니다. 실제 reset/인증 복구 등 재개 조건을 확인하고 구독 포함/모델 조건을 다시 입증한 뒤 막힌 행 하나만 제한적으로 재시도하며 같은 원인이면 독립 작업으로 돌아갑니다. 유료 경로는 선택지가 아닙니다.

차단된 검토에 의존하지 않는 기존 범위의 Codex 작업은 계속합니다. 고정 입력이 바뀌면 전후 SHA와 영향 행을 남기고 그 새 입력에 대해서만 이전 증거를 무효화해 필요한 범위를 재검토합니다. 수정 전 검토를 수정 후 원고 증거로 재사용하지 않습니다. 원고/관련 입력이 그대로이고 당시 계약상 유효한 완료 검토는 모델 변경만으로 반복하지 않습니다. 의미 없는 표면 편집의 증거 보존도 요구/주장/데이터/실패/테스트/출처/그림 의미가 그대로라는 diff 근거가 있어야 하며, 계약 문서의 개정은 실행·권한 기준만 바뀌었는지 별도로 대조합니다.

Codex는 모든 finding을 수용/부분 수용/기각으로 근거·최소 반영 범위와 함께 재판정합니다. Critical/Important의 의미 수정은 같은 계약의 영향 범위 재검토로 닫고 기각도 직접 근거를 남깁니다. 작업 단위 검토는 최종 M5 R01~R26을 대신하지 않습니다. 필요한 Claude 검토가 막힌 정책/구현 단위도 구현·필수 자동/브라우저 검증·별도 Codex 작업 검토가 통과하고 안전하게 분리되면 `implementation verified / Claude review pending` 로컬 체크포인트로 커밋할 수 있으며, 충분한 유효 자동·시각 증거는 이유 없이 반복하지 않습니다. 독립 작업이 소진되면 체크포인트·잔여 검토/승인 조건만 보고합니다.
