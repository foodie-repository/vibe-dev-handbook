# R19 개발 흐름 지원 — 고정 검토 요청

기준 commit613b6243c16065125aa361d1c782353a0b5e3198, 입력 고정2026-11-16입니다. 세 대상 원고의 frontmatter부터 마지막 문장까지와 full_text_paths 전체, context_excerpts 명시 범위를 실제 읽습니다. 인접 완료 원고는 용어·권한·실패 경계 비교용이며 이전 행의 전체 검토를 반복하지 않습니다.

Controller·작성자·이전 대화와 분리된 fresh gpt-6-astra/high 저장 세션입니다. 공식 ChatGPT 구독·실제 모델/effort·history0·readOnly/networkfalse·도구/MCP 비활성을 실행에서 확인하고 같은 저장 ID를 실제 복구해 후속 검토합니다. R02 승계 예외·API 키·추가 크레딧·전역 설정/인증 변경은 허용하지 않습니다.

공통 계약 C01~C12·한국어 여섯 절·각 원고9항목18점/치명 기준을 적용합니다. 리뷰 활동과 승인·CI 규율과 서비스·delivery와deployment·커밋과아티팩트·실패/우회/운영 성공을 구분합니다. 작은 수직 조각의 독립 수용·통합·결과불명/인가/동시성·호환/플래그/rollback과 외부 부작용을 확인합니다. SDLC의 발견부터학습까지 질문·증거·피드백·안전게이트와8단계편집지도/ISO생명주기/6묶음그림의 범위가 맞는지 봅니다. 취향에 따른 전면 재작성은 요청하지 않습니다.

Google2·Fowler/Hodgson2·Agile·ISO·NIST·GitHub2의 관련 직접근거를2026-11-16새 확인했습니다. ISO의 첫추출에서 빠진판본·발행메타데이터는Exa로보충했습니다. 공개ISO소개만 확인하고140쪽전문은미독입니다. Hodgson2017표시와2016발행이력 차이는 출처파일에명시했습니다. GitHub의skipped/neutral허용·플랜/역할/bypass·환경보호는제품범위이지 실제계정설정이나실행성공이아닙니다. 원고기존날짜는역사이며새확인과구분합니다. 출처별실제읽은절/미독/일반화금지선을보존합니다.

SVG/Mermaid/alt의6노드·7연결(실선5+귀환2)·title/desc·A/B와테마marker를대조합니다. 소비문맥은SDLC원고한곳이며발견=문제이해,배포/운영묶음,학습=피드백이라는앞뒤안내와그림의비증명범위를읽습니다. 세경로×1440/390×light/dark12상태의images전체를localImage/detail original로전달합니다. 각ID의판독범위와한계를기록하고텍스트/OCR/경로를이미지판독으로대체하지않습니다. 표·프롬프트·ASCII도식의내부가로/세로분할은원문전체읽기와별도입니다.

첫대표캡처는숨겨진목차까지판정하는대기조건으로첫이미지전timeout/exit1이며0상태·0PNG·실패log를보존합니다. 기존검증된가시목차조건으로캡처만보정하고원고/CSS는유지했습니다. 보완대표SDLC두상태를실제읽은뒤나머지10상태로확장합니다. controller표본판독과reviewer전체판독은구분합니다. 중간관측/완료상태/실패단계를점진저장하며미완료묶음을성공으로세지않습니다. 상세판독수와검증수치는별도보고서/로그를우선합니다.

준비는원고PASS/review/M5/ready/공개승인이아닙니다. 도구·쓰기·셸·웹·MCP·위임없이응답만반환하세요. 준비검사기/테스트의C/I/M와체크포인트적합성은원고판정과별도입니다. 개인home절대경로·비공개전체세션ID를출력하지마세요. 최초정상결과는수정전별도커밋하고전송후불변성감사를수행합니다.

<!-- m5-r19-request:data:start -->
```json
{
  "schema_version": 1,
  "review_id": "R19",
  "baseline_commit": "613b6243c16065125aa361d1c782353a0b5e3198",
  "targets": [
    "src/content/docs/07-workflow-methods/code-review-ci-cd.md",
    "src/content/docs/07-workflow-methods/incremental-delivery.md",
    "src/content/docs/07-workflow-methods/software-development-lifecycle.md"
  ],
  "planned_profile": {
    "model": "gpt-6-astra",
    "reasoning_effort": "high"
  },
  "fresh": true,
  "persistent": true,
  "successor_exception": false,
  "full_text_paths": [
    "docs/project/reviews/public-beta-1/codex-review-contract.md",
    "src/content/docs/07-workflow-methods/code-review-ci-cd.md",
    "src/content/docs/07-workflow-methods/incremental-delivery.md",
    "src/content/docs/07-workflow-methods/software-development-lifecycle.md",
    "research/public-beta-review-source-excerpts/r19-workflow-support-2026-11-16.md",
    "research/meeting-webapp-case-brief.md",
    "src/content/docs/reference/development-glossary.md",
    "src/content/docs/reference/methodology-map.md",
    "src/content/docs/06-requirements-design/prd-sdd-tdd.md",
    "src/content/docs/09-git-github/branch-commit-pull-request.md",
    "src/content/docs/08-quality/testing-strategy.md",
    "src/content/docs/10-deployment-operations/build-deploy-domain-dns.md",
    "src/content/docs/05-frontend/ui-state-and-ux.md",
    "src/assets/diagrams/software-lifecycle.svg",
    "src/assets/diagrams/source/software-lifecycle.mmd",
    "src/styles/custom.css",
    "templates/agent-task-brief-template.md",
    "WORKSPACE_MAP.md",
    "package.json",
    ".gitignore",
    "astro.config.mjs",
    "src/content.config.ts"
  ],
  "context_excerpts": [
    {
      "path": "docs/superpowers/specs/2026-08-12-public-beta-completion-design.md",
      "sha256": "7012b0ed9e0a7c4279358a51e9e4b7062f6456f33dee8d0570051718d6d9dbfa",
      "segments": [
        {
          "start_line": 15,
          "end_line": 59,
          "text": "## 2. 최상위 목표\n\n비개발자 바이브 코더가 소프트웨어의 구조·용어·개발 절차·개발자의 사고법을 이해하고, AI가 만든 결과를 질문·검토·검증·운영할 수 있도록 돕는 한국어 핸드북을 완성하여 공개 GitHub 저장소와 GitHub Pages에서 공개 베타로 배포하고 실제 공개 URL까지 검증합니다.\n\n완료 범위에는 다음이 포함됩니다.\n\n- 역할별 전체 공개 원고 완성\n- 기존 원고를 포함한 콘텐츠 규칙 전수 감사\n- 모임 참가 웹앱과 주가 데이터 분석 대시보드 사례의 일관된 적용\n- 초보자가 관계·흐름·상태를 이해하는 데 필요한 시각 자료\n- 검색·학습 경로·용어집·교차 링크\n- 자동 검증·빌드·브라우저 검증\n- Codex 두 겹 독립 검토와 지적 재판정(10.2절)\n- 프로젝트 소유자 최종 승인\n- 공개 GitHub 저장소와 GitHub Issues 피드백 경로\n- GitHub Pages 공개 배포와 비로그인 환경의 실제 URL 검증\n- `v0.1.0-beta.1` 릴리스 기록\n\n## 3. 독자와 교육 목표\n\n주요 독자는 Claude Code·Codex 등으로 바이브 코딩을 하는 비개발자, 데이터 분석가, PM, 디자이너와 도메인 전문가입니다. 코드를 많이 작성하는 법보다 다음 능력을 먼저 기릅니다.\n\n- 화면을 하나의 결과가 아니라 여러 책임이 연결된 소프트웨어 시스템으로 봅니다.\n- 프런트엔드·백엔드·API·데이터베이스·인증·배포·운영의 위치와 관계를 설명합니다.\n- 요구사항·설계·작업 계획·테스트·검토를 서로 다른 산출물과 활동으로 구분합니다.\n- Git 상태, diff, 로그, HTTP 응답, 권위 있는 데이터 재조회와 브라우저 화면을 서로 다른 증거로 사용합니다.\n- AI에게 모호하게 일을 넘기지 않고 목표·비목표·권한·실패 조건·수용 기준·검증 방법을 전달합니다.\n- 특정 도구가 바뀌어도 유지되는 구조·원리·판단법을 익힙니다.\n\n## 4. 비목표\n\n공개 베타의 필수 범위에 다음은 포함하지 않습니다.\n\n- 종이책 출판을 전제로 한 전문 교정·교열\n- 여러 명의 외부 기술 검토자와 대규모 독자 연구\n- 실제 비개발자 참여자를 모집한 사용성 실험\n- 맞춤 도메인\n- 사용자 계정과 학습 진도 저장\n- 서버·데이터베이스·CMS를 사용하는 별도 핸드북 애플리케이션\n- 유료 서비스·결제·광고\n- 오프라인 PDF·전자책\n- 영어판과 다국어판\n- 모든 개발 도구의 완전한 사용 설명서\n\n외부 개발자 한 명의 가벼운 검토는 원고 완성 뒤 수행할 수 있는 선택 항목이며 공개 베타 완료의 필수 조건이나 진행률 분모에 포함하지 않습니다. 맞춤 도메인, 퀴즈, 진도 저장, PDF와 다국어는 공개 베타 이후 실제 피드백이 필요성을 뒷받침할 때 별도 명세로 검토합니다."
        },
        {
          "start_line": 173,
          "end_line": 180,
          "text": "### M5 — 독립 검토와 모든 공개 문서 `ready` 승격\n\n- 10.2절의 Codex 두 겹 독립성 조건을 충족할 때 독립 검토를 실행합니다. M5의 R01~R25는 공개 문서 59개 전체, R26은 분리된 통합 검토이며 표본·작업 단위 검토로 대체하지 않습니다.\n- controller가 Codex finding을 현재 원고·공식 근거·프로젝트 규칙에 대조해 재판정합니다.\n- Critical·Important 지적을 수정하고 필요한 범위를 재검토합니다.\n- 자동·브라우저·시각 자료 검증을 완료합니다.\n- 프로젝트 소유자가 고정된 검토 묶음과 기준 SHA를 승인합니다.\n- 실제 공개되는 모든 문서를 `ready`로 승격합니다."
        },
        {
          "start_line": 282,
          "end_line": 290,
          "text": "### 9.1 핵심 개념 장\n\n- 독자 질문과 한 문장 정의가 명확합니다.\n- 쉬운 설명과 정식 용어를 연결합니다.\n- 비유를 쓰면 맞는 지점과 깨지는 지점을 설명합니다.\n- 시스템 내 위치와 다른 구성요소의 관계를 보여 줍니다.\n- 판단 기준·금지 신호·대표 실패·복구·검증 증거가 있습니다.\n- 실제 AI 작업 요청과 결과 검토에 연결합니다.\n- 해당 행의 Codex 독립 심층 검토를 통과합니다."
        },
        {
          "start_line": 338,
          "end_line": 356,
          "text": "### 10.2 Codex 두 겹 독립 검토 계약\n\n2026-09-05 사용자 결정은 공개 베타 1 M5 캠페인에 한해 과거 2026-08-28 Claude 운영 개정의 미래 완료 기준을 대체합니다. 과거 Claude 계약·사전 확인·요청·시도·결과 파일은 역사로 보존하며, `blocked`·`not-run`·모델 호출0은 유효 Claude 결과나 PASS가 아닙니다. 이는 Claude 일반 사용이나 다른 캠페인의 과거 기록을 변경하지 않습니다.\n\n- R01~R25는 controller·작성자·이전 대화 이력과 분리된 fresh Codex reviewer가 고정 입력 전체를 읽기 전용으로 검토합니다. R26은 R01~R25 reviewer들과 분리된 fresh Codex reviewer가 공개 문서59개 전체, 행별 결과·재판정·재검토, 감사·source gap을 통합 검토합니다.\n- 계획 기본 프로필은 R01~R25 `gpt-6-astra`/`high`, R26 `gpt-6-astra`/`xhigh`입니다. 실제 실행의 모델·reasoning effort를 결과에 기록하며 지정 프로필을 사용할 수 없으면 자동 fallback하지 않고 계약 개정 전까지 해당 행을 보류합니다.\n- `Read`로 열거된 고정 입력만 허용합니다. reviewer는 파일·Git·테스트·웹·MCP·플러그인·스킬·외부 상태를 바꾸지 않습니다.\n- 입력별·결합 SHA-256, 실제 완독 여부, 실제 모델·reasoning effort, 결과·finding·재판정·재검토를 분리해 기록합니다. 입력 부족·해시 불일치·미완독·미확인 모델/effort·실패/부분 결과는 PASS 증거가 아닙니다.\n- 작성·자체 점검·관련 자동 검증을 마친 안정된 원고부터 기존 검토 단위·의존관계를 유지해 위험이 큰 항목을 우선합니다. 핵심·캡스톤·보안·데이터·배포는 개별 또는 기존 소묶음으로, 인덱스·참고편은 기존 의미 묶음으로 검토하고 R26 통합 검토를 유지합니다.\n- [Codex 독립 검토 계약](../../project/reviews/public-beta-1/codex-review-contract.md)의 C01~C12와 해당 행의 요청서를 제공합니다. 대상 원고 전체(메타데이터·코드/프롬프트·alt 포함), 필요한 실제 출처 원문·인접 문맥·용어·그림/원본·미해결 finding을 고정 입력으로 제공합니다. controller 요약·자체 PASS가 원문을 대체하지 않습니다.\n- 검토 전후 입력 해시를 비교합니다. reviewer는 결과를 응답으로만 반환하고 controller가 입력 완전성·해시·실제 모델/effort·읽기 전용 권한·응답 형식을 확인한 뒤 행렬의 Codex 결과 정본 경로에 저장합니다. 결과는 위치·심각도·근거·최소 수정·재확인 기준 중심으로 받고 불필요한 원문 재출력·전면 재작성을 요청하지 않습니다. 계약 경량화로 필수 기준을 줄이거나 작업 단위 검토를 최종 M5 검토로 계산하지 않습니다.\n\n### 10.2.1 검토 대기와 개발 진행\n\n검토 원장은 기존 `pending`·`in_progress`·`blocked`·`done` 상태를 사용하고 대상·대기 사유·입력 파일/해시·마지막 실행·다음 재개 조건을 기록합니다. 현재 대기 사유는 R01~R26 입력 고정 및 Codex 검토 미실행이며, 지정 모델/effort를 사용할 수 없을 때만 실제 원인을 기록합니다. 구현 상태, 필수 검토 상태, 공개 가능 여부는 별도 필드로 관리하며 `blocked`가 전체 목표 중단이나 완료를 뜻하지 않습니다.\n\n검토가 막혀도 결과에 의존하지 않는 기존 목표 안의 작성·수정·근거 정리·자동 검사·로컬 시각 검증은 계속합니다. 고정 입력을 변경해야 하면 변경 전후 SHA-256과 영향 행을 기록하고 이전 증거를 해당 새 입력의 근거로 무효화한 뒤 필요한 범위만 재검토합니다. 영향 없는 유효 증거는 유지합니다. 필수 검토·미해결 Critical/Important·소유자 승인이 남아 있으면 M5 완료·`ready`·공개 가능으로 표시하지 않습니다.\n\n독립 로컬 작업 단위가 수용 기준, 자동 검증, 필요한 실제 브라우저 또는 출력물 검증, 작성자와 분리된 Codex 작업 검토에서 Critical·Important 0개를 충족하고 다른 미완료 변경과 안전하게 분리되면 관련 파일만 선별해 로컬 체크포인트 커밋할 수 있습니다. 이 커밋은 M5 독립 검토·`ready`·소유자 승인·release candidate·push·배포·공개 가능을 뜻하지 않습니다. 이후 Codex finding이나 입력 변경이 생기면 기존 커밋을 덮어쓰지 않고 영향 파일의 좁은 수정 커밋과 필요한 재검토를 추가합니다."
        },
        {
          "start_line": 391,
          "end_line": 417,
          "text": "## 11. 출처와 최신성\n\n- 표준·제품·프레임워크·GitHub 기능은 공식 문서 또는 1차 자료를 우선합니다.\n- 출처별 공식 URL, 확인일, 주장, 적용 문서, 적용 범위와 일반화 금지선을 `research/source-map.md` 또는 연결된 조사 기록에 남깁니다.\n- 마케팅 문구와 업계에서 안정적으로 쓰이는 개념을 구분합니다.\n- 한 출처의 표현을 길게 복제하지 않고 독자의 학습 흐름에 맞게 재구성합니다.\n- 접근 실패·404·인증 실패·429·버전 불일치는 숨기지 않고 현재성 미검증 또는 `blocked`로 기록합니다.\n- 이전에 저장된 근거를 현재 확인 결과로 표현하지 않습니다.\n- 공식 근거가 필요한 완료 항목을 비공식 블로그로 조용히 대체하지 않습니다.\n\n현재 도구 조사는 공식 자료에 한정한 승인된 읽기 전용 네트워크 범위 안에서 수행합니다. 계정 접근·설정 변경·배포·공개 글 수정은 도구 조사 승인이 허용하지 않습니다.\n\n## 12. 시각 자료 설계와 도구 선택\n\n### 12.1 기본 원칙\n\n- 시각 자료는 장식이 아니라 개념의 관계·흐름·상태를 글보다 명확하게 설명할 때 사용합니다.\n- 한 다이어그램은 한 질문에 답합니다.\n- 그림 앞에서 무엇을 봐야 하는지, 그림 뒤에서 무엇을 증명하고 무엇을 증명하지 않는지 설명합니다.\n- 표나 짧은 문장으로 더 명확하면 다이어그램을 만들지 않습니다.\n- 흐름도·아키텍처·시퀀스·상태·ER 등 질문에 맞는 문법을 선택합니다.\n- 보통 4~7개 노드를 권장하고 정적 다이어그램은 9개를 기본 상한으로 둡니다.\n- 화살표는 12개 이하, 초점 요소는 2개 이하를 권장합니다.\n- 9개를 넘으면 개요와 상세로 나누고, 12개를 넘으면 도구 선택 전에 구조를 분할합니다.\n- 색만으로 의미를 전달하지 않고 title·desc·대체 텍스트·선 종류·레이블을 사용합니다.\n- 확대 없이 모바일에서 핵심 레이블을 읽을 수 있어야 합니다.\n- 라이트·다크·데스크톱·모바일에서 잘림·겹침·가로 넘침·선과 화살표 머리 대비를 검증합니다."
        }
      ]
    },
    {
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "sha256": "f7c5540d94357bf3572df5548cca89bf6fed0c869f1f43aec3c278900a544d20",
      "segments": [
        {
          "start_line": 1576,
          "end_line": 1585,
          "text": "#### 고정 리뷰 단위\n\n아래 R01~R25는 공개 콘텐츠 59개를 정확히 한 번씩 배정합니다. R26은 R01~R25 전체를 확장해 같은 공개 문서59개와 행별 결과·재판정·재검토, 감사·source gap·시각 감사·`CONTENT_MAP.md`를 통합 검토하며 문서 분모에 중복 계산하지 않습니다.\n\n`docs/project/reviews/public-beta-1/`은 여러 날에 걸친 공개 베타 1 검토 캠페인의 안정적인 경로입니다. 파일 이름의 고정 ID와 별도로 각 기록 본문에 실제 시작·종료 날짜와 시간, 실행 기준 SHA를 남기므로 계획 작성일을 실제 실행일처럼 복제하지 않습니다.\n\n| 체크 | ID·slug | 입력 공개 원고 | 방식 | 결과 파일 | 재판정 파일 |\n|---|---|---|---|---|---|\n| - [x] | R01 `software-system` | `01-mental-models/software-is-a-system.md` | 개별 심층 | `public-beta-1/r01-software-system-codex-review.md` | `public-beta-1/r01-software-system-adjudication.md` |\n| - [x] | R02 `client-server` | `03-full-stack/client-server-full-stack.md` | 개별 심층 | `public-beta-1/r02-client-server-codex-review.md` | `public-beta-1/r02-client-server-adjudication.md` |"
        },
        {
          "start_line": 1613,
          "end_line": 1624,
          "text": "**Step 1: 공통 계약과 행렬을 고정합니다.**\n\n- [x] 역사 전용 `opus5-review-contract.md`의 실질 기준을 [Codex 검토 계약](../../project/reviews/public-beta-1/codex-review-contract.md)의 C01~C12와 권위 조항 대응표, 9항목 루브릭/치명 항목, 심각도·6절 출력·권한·입력/증거 유효성 기준으로 보존·이식했음을 확인합니다.\n- [x] 요청 템플릿으로 각 ID의 검토 종류(작업 단위 또는 M5)·기준 commit·입력별/결합 SHA-256·status·block_reason·마지막 사전 확인/실행·재개 조건·결과/재판정/재검토·남은 finding을 기록합니다. 구현 상태·필수 검토 상태·공개 가능 여부는 별도 필드입니다.\n- [x] R01~R25는 공통 계약 C01~C12의 정확한59경로와 대조해 중복0·누락0을 유지하고, R26은 R01~R25 전체를 확장해 같은 공개59개를 정확히 한 번 통합하도록 고정합니다. `*-codex-review.md`와 `*-codex-rereview.md` 경로를 사용하며 실제 모델과 reasoning effort는 실행 메타데이터로 판정합니다.\n- [x] `claude-attempt-log.md`는 시도 템플릿으로 정상/실패/미호출을 구분하고 요청 모델/1M/high·실제 인자·결과의 실제 설정·구독 전용 입증/차단·CLI·시각·종료 코드/실패 단계·reset 안내·입력 해시를 기록합니다. 비밀/계정 식별정보/세션ID/정확한 비용은 기록하지 않습니다.\n- [x] 과거 입력 불변·당시 계약상 유효한 완료 검토는 모델 변경만으로 반복하지 않습니다. 과거 `max` 등 M5 계약에 맞지 않는 기록과 작업 단위 검토를 새 M5 행의 증거로 바꾸지 않습니다.\n- [x] 계약/행렬 단위도 필수 자동 검증과 작성자와 분리된 Codex 작업 검토에서 미해결 Critical·Important 0건을 확인하고 다른 미완료 변경과 안전하게 분리한 뒤에만 관련 파일을 `implementation verified / M5 Codex review pending` 체크포인트로 선별 커밋합니다. 과거 Claude 검토가 막힌 기록은 이 조건을 충족한 로컬 단위의 커밋을 금지하지 않지만, Codex R01~R26·M5·`ready`·소유자·M7 게이트는 완료하지 않습니다.\n\n**Step 2: 행별 입력·독립성·Codex 실행 프로필을 고정합니다.**\n\n이 2026-09-05 개정 뒤의 실행은 Claude CLI·인증·구독·preflight를 호출하거나 재개 조건으로 쓰지 않습니다. 과거 Step2의 Claude 사전 확인은 역사 기록을 설명할 뿐 미래 절차가 아닙니다. 각 R01~R25는 controller·작성자·이전 대화 이력과 분리된 fresh Codex reviewer, R26은 R01~R25 reviewer들과 분리된 fresh Codex reviewer에게 배정합니다. R01~R25는 `gpt-6-astra`/`high`, R26은 `gpt-6-astra`/`xhigh`를 계획 기본값으로 요청하고, 실제 모델·reasoning effort를 결과에 기록합니다. 지정 프로필이 없으면 자동 fallback하지 않고 해당 행을 pending으로 둡니다."
        },
        {
          "start_line": 1656,
          "end_line": 1668,
          "text": "**Step 3: 안정된 원고의 전체 입력을 fresh Codex reviewer가 읽기 전용으로 검토합니다.**\n\n각 행에는 공통 계약/권위 대응표, 대상 본문 전체(frontmatter·코드/프롬프트·표·alt 포함), 필요한 실제 출처 원문/source-map/source-gap·인접 장/용어집·SVG/원본/실제 렌더·미해결 finding을 제공합니다. 전체 명세/계획 등 긴 문서를 매번 반복하지 않고 쟁점의 원조항만 추가합니다. Codex 요약/자체 PASS가 본문이나 필요한 근거를 대신하지 않으며 열거하지 않은 파일은 임의 탐색하지 않습니다. R26도 해당 대상 본문 전체와 실제 R01~R25 결과/재판정을 대조합니다.\n\n각 reviewer에게 새 `public-beta-codex-review-request-template.md`, 행렬의 고정 입력·개별/결합 SHA-256, C01~C12를 제공합니다. reviewer는 실제 입력 전체를 Read-only로 완독하고, 완독 여부·부족 입력·실제 모델/effort·결과·finding을 응답으로만 반환합니다. controller가 입력 완전성·해시·권한·응답 형식을 확인한 뒤에만 `*-codex-review.md` 정본 경로에 저장합니다. 입력·해시·완독·모델/effort가 하나라도 미확인이면 `BLOCKED`이며 PASS가 아닙니다.\n\n- [ ] R01~R25 reviewer가 controller·작성자·이전 대화 이력과 분리됐는지, R26 reviewer가 R01~R25 reviewer들과 분리됐는지 요청서와 결과에 기록합니다.\n- [ ] 결과가 실제 모델/effort, 입력 완독/불변, C01~C12, Critical/Important/Minor와 위치·근거·최소 수정·재확인 기준을 포함할 때만 정상 독립 검토로 인정합니다.\n- [ ] 정상 결과 파일을 원고 수정 전에 해당 행ID의 고정 결과 경로·`commit_message`로 분리 커밋합니다. 모든 커밋은 필요한 검증/검토와 staged diff 확인을 전제로 합니다.\n\n**Step 4: controller가 모든 finding을 근거에 대조해 재판정합니다.**\n\n- [ ] 수용/부분 수용/기각·정본 근거·반영 위치/비반영 이유·추가 검증을100% 기록합니다. reviewer가 직접 읽지 않은 외부 사실은 제안으로만 취급하고 실제 공식 원문/source-map과 대조합니다."
        }
      ]
    },
    {
      "path": "AGENTS.md",
      "sha256": "0ca72fc4091bffb1320b0243c11d2f449d86cb8aa8d5bbb16c5ee77ef33d091d",
      "segments": [
        {
          "start_line": 1,
          "end_line": 134,
          "text": "# AGENTS.md\n\n이 파일은 Codex를 포함한 코딩 에이전트가 이 저장소에서 작업할 때 따라야 할 최상위 운영 지침입니다.\n\n## 1. 임무\n\n이 저장소의 목적은 비개발자가 개발자 흉내를 내게 하는 것이 아니라, **소프트웨어 시스템을 이해하고 AI가 만든 결과를 질문·검토·검증·운영할 수 있게 만드는 것**입니다.\n\n대상 독자는 다음과 같습니다.\n\n- Claude Code, Codex 등으로 바이브 코딩을 하는 비개발자\n- 데이터 분석가, PM, 디자이너, 도메인 전문가\n- 코드를 직접 많이 쓰지는 않지만 개발 의사결정에 참여하는 사람\n\n## 2. 작업 시작 순서\n\n항상 다음 파일을 먼저 읽습니다.\n\n1. `PROJECT_CONTEXT.md`\n2. `ROADMAP.md`\n3. `RULES.md`\n4. `WORKSPACE_MAP.md`\n5. 관련 `docs/project/`, `research/`, 대상 콘텐츠\n\n그다음 한국어로 다음을 보고합니다.\n\n- 현재 상태와 확인한 사실\n- 이번 작업의 목표와 비목표\n- 수정할 파일과 이유\n- 수용 기준\n- 검증 명령\n- 불확실성 또는 결정이 필요한 지점\n\n## 3. 표준 작업 루프\n\n`상태 확인 → 목표 고정 → 작은 계획 → 한 단계 구현 → 자동 검증 → 독립 검토 → 문맥 갱신`\n\n한 번에 큰 장 전체나 여러 하위 시스템을 수정하지 않습니다. 리뷰어가 한 작업만 독립적으로 승인하거나 거절할 수 있는 크기로 나눕니다.\n\n수용 기준과 필수 검증을 통과한 독립 작업 단위는 관련 파일만 선별해 커밋합니다. 커밋 전에는 staged diff와 작업 트리를 확인하고, 기존의 무관한 변경·검증 실패·미완성 작업을 포함하지 않습니다. 작업 단위를 안전하게 분리할 수 없거나 사용자 결정이 남아 있으면 커밋하지 않고 상태를 보고합니다.\n\n## 4. 권한과 안전\n\n다음 행동은 사용자 승인 전에 수행하지 않습니다.\n\n- 새 패키지 설치 또는 네트워크 접근\n- 대량 파일 이동·삭제·이름 변경\n- 배포 구조, 프레임워크, 정보 구조 변경\n- `git push`, 원격 브랜치 생성, 배포와 그 밖의 외부 쓰기\n- 비밀정보, 개인정보, 회사 내부 데이터 접근 또는 저장\n\n로컬 `git commit`은 3절의 작업 단위 자동 커밋 규칙을 따릅니다. 자동 커밋은 푸시나 배포 승인을 뜻하지 않습니다.\n\n`.env`, 토큰, API 키, 인증서, 사용자 데이터는 커밋하지 않습니다. 예시는 반드시 가짜 값임을 분명히 표시합니다. 파괴적 명령 대신 dry-run, diff, 백업 또는 되돌리기 경로를 먼저 제시합니다.\n\n## 5. 콘텐츠 원칙\n\n### 쉬운 설명은 정확성을 희생하지 않습니다\n\n- 전문용어를 숨기지 말고 먼저 쉬운 말로 정의한 뒤 정식 용어를 연결합니다.\n- 비유를 사용하면 반드시 **비유가 맞는 지점과 깨지는 지점**을 함께 설명합니다.\n- 코드 문법보다 구조, 관계, 흐름, 결정 기준, 실패 방식, 검증법을 우선합니다.\n- “AI에게 해달라고 하면 된다”는 식의 설명을 금지합니다.\n\n### 장의 기본 구조\n\n1. 왜 필요한가\n2. 한 문장 정의\n3. 비유와 비유의 한계\n4. 시스템에서의 위치\n5. 실제 작업에서 보이는 신호와 용어\n6. 판단 규칙\n7. 흔한 오해와 실패\n8. 확인 체크리스트\n9. 짧은 연습\n10. 관련 용어와 출처\n\n### 용어 정책\n\n- 같은 약어에 여러 뜻이 있으면 첫 등장부터 구분합니다.\n- 특히 SDD는 `Software Design Description`과 `Spec-Driven Development`를 혼용하지 않습니다.\n- PRD, 설계 명세, 테스트 계획, TDD를 모두 “문서 종류”로 묶지 않습니다. TDD는 테스트를 먼저 작성하는 개발 규율입니다.\n- 컨텍스트 엔지니어링, 하네스 엔지니어링, 루프 엔지니어링은 성숙도와 사용 맥락을 표시합니다.\n\n### Markdown과 프롬프트 블록\n\n- 일반 산문 문단과 프롬프트 블록 안의 자연어 문장은 표시 폭을 맞추기 위해 임의로 줄바꿈하지 않습니다.\n- 프롬프트 블록의 같은 목록 항목은 한 줄로 유지합니다. 빈 줄과 목록 계층은 의미상 구획이므로 보존합니다.\n- 코드, 셸 명령, 명령 출력, 표, 디렉터리 트리, 흐름도·수식, URL과 의도적인 강제 줄바꿈은 재정렬하지 않습니다.\n- 기존 문서에서는 실제로 수정하는 프롬프트 블록에만 적용합니다. 이 규칙만을 이유로 관련 없는 문서 전체를 reflow하지 않습니다.\n\n## 6. 근거와 최신성\n\n- 표준, 제품 기능, 프레임워크 설정은 공식 문서 또는 1차 자료를 우선합니다.\n- 날짜에 따라 달라질 수 있는 내용은 작업 시점에 다시 확인합니다.\n- 조사 근거는 `research/source-map.md`에 출처, 확인일, 적용 범위를 남깁니다.\n- 마케팅 문구와 업계 합의된 개념을 구분합니다.\n- 한 출처의 표현을 그대로 베끼지 않고, 독자에게 필요한 구조로 재해석합니다.\n\n## 7. 기술 구조 규칙\n\n- 공개 콘텐츠는 `src/content/docs/`에만 둡니다.\n- 조사 메모는 `research/`, 편집 정책은 `docs/project/`, 템플릿은 `templates/`에 둡니다.\n- 파일명은 영문 kebab-case, 본문과 작업 보고는 한국어를 기본으로 합니다.\n- 한 파일은 한 질문 또는 한 학습 목표 집합만 담당합니다.\n- 사이트 기능보다 콘텐츠 품질을 우선합니다. 실제 요구 없이 CMS, 데이터베이스, 인증, 프런트엔드 프레임워크를 추가하지 않습니다.\n- 아키텍처 결정이 바뀌면 ADR과 `PROJECT_CONTEXT.md`를 함께 갱신합니다.\n\n## 8. 품질 게이트\n\n파일 수정 후 최소한 다음을 실행합니다.\n\n\u0060\u0060\u0060bash\nnpm run check:static\n\u0060\u0060\u0060\n\n의존성이 설치되어 있으면 다음도 실행합니다.\n\n\u0060\u0060\u0060bash\nnpm run build\n\u0060\u0060\u0060\n\n완료라고 보고하기 전에 실제 명령의 종료 코드와 오류 수를 확인합니다. 빌드를 실행하지 못했다면 이유를 명시하고 성공했다고 표현하지 않습니다.\n\n## 9. 완료 정의\n\n작업은 다음 조건을 모두 충족해야 완료입니다.\n\n- 목표와 비목표가 지켜짐\n- 수용 기준을 각 항목별로 확인함\n- 새 용어가 용어집 또는 관련 문서와 일치함\n- 링크, 그림 대체 텍스트, 메타데이터 검증을 통과함\n- 변경 이유와 검증 결과를 한국어로 보고함\n- 다음 세션이 이어받을 수 있도록 `PROJECT_CONTEXT.md`, `ROADMAP.md`, `CHANGELOG.md` 중 필요한 파일을 갱신함"
        }
      ]
    },
    {
      "path": "RULES.md",
      "sha256": "9c68b91038149c57a811b0f431012c6ffb96b3b5464600768c12095dac5914eb",
      "segments": [
        {
          "start_line": 1,
          "end_line": 12,
          "text": "# 프로젝트 핵심 규칙\n\n1. 기본기를 유행어보다 먼저 설명합니다.\n2. 독자에게 코드를 외우게 하기보다 시스템의 구조와 흐름을 보게 합니다.\n3. 비유에는 항상 적용 범위와 한계를 적습니다.\n4. 같은 약어의 여러 뜻을 섞지 않습니다.\n5. 요구사항, 설계, 구현, 테스트, 배포, 운영을 하나의 생명주기로 연결합니다.\n6. 작은 변경, 자동 검증, 되돌릴 수 있는 작업을 기본값으로 삼습니다.\n7. 공식·1차 출처를 우선하고 최신성이 필요한 사실은 다시 확인합니다.\n8. 회사 데이터, 개인정보, 비밀정보를 예제나 저장소에 넣지 않습니다.\n9. 새 도구는 실제 독자 문제를 해결할 때만 추가합니다.\n10. 검증하지 못한 결과를 완료됐다고 표현하지 않습니다."
        }
      ]
    },
    {
      "path": "research/source-map.md",
      "sha256": "50ff4cbad9ae2258b48c2e6bf421f4814dd229c24585ced228436a8f6e0975c9",
      "segments": [
        {
          "start_line": 423,
          "end_line": 430,
          "text": "|---|---|---|---|---|\n| `07-workflow-methods/code-review-ci-cd.md` | https://google.github.io/eng-practices/review/, https://google.github.io/eng-practices/review/reviewer/looking-for.html | 2026-08-13 직접 확인; Google Engineering Practices의 현재 공개 canonical 조직 지침, 별도 판본 번호·절대 갱신일 미표시 | 코드 리뷰를 저자 외 사람이 변경을 검토하는 과정으로 정의하고 설계·기능·복잡성·테스트·문서와 테스트 자체의 타당성을 사람 판단 대상으로 두는 범위 | Google의 승인 관행·역할·속도를 모든 조직의 필수 절차로 확대하지 않고, 리뷰 활동을 권한 있는 승인이나 자동 검사로 대체하지 않음 |\n| `07-workflow-methods/code-review-ci-cd.md` | https://martinfowler.com/articles/continuousIntegration.html | 2026-08-13 직접 확인; Martin Fowler 방법론 설명, 2024-01-18 갱신 | CI의 잦은 공유 코드 통합·자동 빌드와 테스트·깨진 빌드 복구, continuous delivery의 배포 가능 상태와 continuous deployment의 자동 운영 반영 구분 | 특정 통합 빈도·브랜치 방식·배포 빈도를 표준이나 모든 팀의 성공 공식으로 확대하지 않고 CI 서비스 실행을 CI 규율 전체로 등치하지 않음 |\n| `07-workflow-methods/code-review-ci-cd.md` | https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches, https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments, https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/review-deployments | 2026-08-13 직접 확인; GitHub current unversioned product documentation as displayed, 플랜·저장소·역할에 따른 제한 명시 | 필수 Pull Request 리뷰·상태 검사·배포 환경 승인·보호 규칙과 bypass 권한·배포 검토 이력의 GitHub 제품 범위 | GitHub 설정을 Git 자체나 모든 CI·호스팅 제품의 동작으로 확대하지 않고 보호 규칙 이름을 현재 활성 설정·우회 불가의 증거로 사용하지 않음 |\n| `07-workflow-methods/incremental-delivery.md` | https://agilemanifesto.org/principles | 2026-08-13 직접 확인; Agile Manifesto 원칙, 2001 공개 원문 | 가치 있는 소프트웨어의 이른·지속적·빈번한 전달, 작동하는 소프트웨어를 진행의 주요 척도로 두고 정기적으로 조정하는 피드백 범위 | 특정 스프린트 길이·티켓 크기·수직 조각 양식이나 한 조직의 배포 빈도를 원문이 정한다고 확대하지 않음 |\n| `07-workflow-methods/incremental-delivery.md` | https://martinfowler.com/articles/feature-toggles.html | 2026-08-13 직접 확인; Pete Hodgson, 2017-10-09, Martin Fowler 사이트의 1차 실무 설명 | feature toggle로 코드 배포와 기능 공개를 분리하고 켜짐·꺼짐 상태를 시험하며 오래된 토글의 복잡성을 관리하는 범위 | 모든 기능·데이터 변경이 플래그로 안전해진다고 단정하거나 플래그를 인가·데이터 호환성·복구 전체의 대체물로 사용하지 않음 |\n| `07-workflow-methods/software-development-lifecycle.md` | https://www.iso.org/standard/90219.html | 2026-08-13 직접 확인; ISO/IEC/IEEE 12207:2026 Edition 2, 2026-04 Published, stage 60.60 | 소프트웨어 생명주기를 conception·development·operation·support·retirement까지 다루고 과정이 병행·반복·재귀·점진 적용될 수 있으며 특정 생명주기 모델을 강제하지 않는 표준 범위 | 이 원고의 여덟 단계·단계명·종료 증거를 ISO 표준의 고정 순서나 모든 조직의 필수 문서 목록으로 확대하지 않음 |\n| `08-quality/debugging-observability.md` | https://sre.google/sre-book/effective-troubleshooting/ | 2026-08-13 직접 확인; Google SRE Book Chapter 12, Chris Jones, 온라인 판권 표시 2017 | 문제 보고·관측·시스템 지식에서 가설을 만들고 통제된 시험으로 반증하며 영향 완화·증거 보존·재현·수정·재발 방지를 연결하는 운영 신뢰성 문맥 | 한 장의 이상화된 흐름을 모든 장애의 유일한 순서로 확대하지 않고 운영 위험·권한·사용자 영향에 따라 안정화를 먼저 할 수 있음을 유지 |"
        }
      ]
    },
    {
      "path": "research/public-beta-source-gap-register.md",
      "sha256": "eefe11c1c41b74d3e01fa11dd403426584c4bb18dddbe8c1ca3782e4d05025bd",
      "segments": [
        {
          "start_line": 37,
          "end_line": 39,
          "text": "| PBSG-003 | PB-031 `accessibility-responsive-design.md`; PB-033 `ui-state-and-ux.md`; PB-034 `adr-and-tradeoffs.md`; PB-053 `analytics-dashboard-case-study.md` | 접근성·반응형 설계의 판단 기준, UI 상태와 오류 복구, ADR의 맥락·대안·결과·재검토 조건, 대시보드 차트·표·상태의 접근 가능한 대안 | important | 2026-08-13 확인: W3C WCAG 2.2 Recommendation과 비규범 Understanding·WAI Images 교육 자료, RFC 9110, Nygard ADR 원형, ISO/IEC/IEEE 42010:2022 공식 범위와 conceptual model | WCAG·HTTP·ADR 적용 범위 변경 시, 제품별 보조 기술·API·데이터·아키텍처 결정을 실제 채택할 때 재확인 | confirmed | Task 14; Task 18 | 일부 자동 검사·차트 대체 텍스트·특정 화면 폭을 접근성·반응형 적합 완료로, HTTP 멱등성을 모든 업무 재시도·복구로, ADR 원형과 핸드북 확장 필드를 모든 제품의 유일한 기준으로 확대하지 않습니다. |\n| PBSG-004 | PB-037 `code-review-ci-cd.md`; PB-038 `incremental-delivery.md`; PB-041 `performance-security.md` | 사람 리뷰·CI·전달·배포 게이트, 작은 수직 조각, 성능 병목·위협·권한·비밀의 위험 기반 검증 | important | 2026-08-13 확인: Google Engineering Practices, Fowler CI·feature toggles, Agile Manifesto 원칙, GitHub 보호 브랜치·배포 환경, NIST SSDF 1.1·least privilege, OWASP threat modeling·input validation·secrets·logging, W3C User Timing·Resource Timing 초안과 Chrome·web.dev 성능 자료 | CI·호스팅 제품·보안 지침·웹 성능 표준 상태 변경 시와 다른 제품·임계값·위협 모델을 실제 채택할 때 재확인 | confirmed | Task 15 | 회사 관행·제품 설정·예시 성능 수치·보안 체크리스트를 모든 팀의 성공 공식으로 일반화하지 않고, 자동 검사 통과·보호 규칙 이름·보안 통제 존재를 사람 승인·사용자 성공·위험 제거 완료로 확대하지 않습니다. |\n| PBSG-005 | PB-047 `environment-variables-config.md` | 설정·환경 변수·비밀의 분리, 로딩 우선순위, 노출 방지·회전·복구 | important | 2026-08-13 확인: Node.js v26.5.1 환경 변수·DotEnv 공식 문서, Astro 현재 환경 변수 가이드, Vercel 현재 환경 변수 제품 문서, OWASP Secrets Management Cheat Sheet | 런타임·프레임워크·호스팅 제품·비밀 관리 지침이 바뀌거나 실제 배포 대상을 선택할 때 해당 버전·설정·권한을 재확인 | confirmed | Task 16 | 환경 변수라는 저장 위치만으로 비밀이 암호화·격리·회전된다고 단정하거나 Node.js·Astro·Vercel 한 제품의 로딩·노출·환경 범위를 다른 런타임·프레임워크·호스팅 환경에 적용하지 않습니다. |"
        },
        {
          "start_line": 41,
          "end_line": 43,
          "text": "| PBSG-007 | PB-035 `architecture-and-frameworks.md` | 아키텍처·기술 스택·프레임워크·라이브러리·런타임·플랫폼의 구분과 품질 속성·제약 기반 선택 | important | 2026-08-13 확인: ISO/IEC/IEEE 42010:2022 공식 범위와 conceptual model, CMU SEI 4판 소개, 2026-08-04 SWEBOK 기존 직접 확인, 2026-08-13 MDN 웹 프레임워크 자료 | 표준·자료 상태 변경 시와 예시 프레임워크·런타임·플랫폼을 실제 후보로 채택할 때 해당 제품의 공식 제어·지원·배포 범위를 재확인 | confirmed | Task 10; Task 14 | architecture description·품질 관계와 이 원고의 편집상 도구 구분·일곱 단계·사례 가설을 하나의 표준으로 합치거나 특정 프레임워크 구성을 아키텍처 자체·모든 웹앱의 기본 정답·현재 구현 성공으로 일반화하지 않습니다. |\n| PBSG-008 | PB-039 `software-development-lifecycle.md`; PB-040 `debugging-observability.md` | 생명주기 단계별 종료 증거와 피드백, 재현·가설·로그·지표·트레이스로 원인을 좁히는 절차 | important | 2026-08-13 확인: ISO/IEC/IEEE 12207:2026, NIST SSDF 1.1, Agile Manifesto 원칙, Google SRE Book Effective Troubleshooting, OpenTelemetry signals·observability primer, OWASP Logging Cheat Sheet | 생명주기·보안·관측 지침의 문서 상태 변경 시와 특정 SDLC 모델·관측 제품·인시던트 절차를 실제 채택할 때 재확인 | confirmed | Task 15 | 이 원고의 단계 지도를 표준의 고정 순서로, 문서·화면·배포 표시를 단계 완료로, 세 신호의 수집을 관측 완성·근본 원인·복구 성공으로 일반화하지 않습니다. |\n| PBSG-009 | PB-043 `branch-commit-pull-request.md`; PB-045 `undo-merge-conflict-release.md` | branch·commit·PR·merge·revert·reset·rebase·release의 공유 이력 경계와 안전한 복구 | important | 2026-08-13 확인: Git branch·pull·restore·revert·reset·rebase·tag 공식 reference와 GitHub PR·review·merge·release 공식 문서 | Git 또는 호스팅 제품의 관련 동작·문서 상태가 바뀌거나 실제 저장소의 ruleset·권한·merge·release 방법을 적용할 때 재확인 | confirmed | Task 16 | 로컬 미공유 이력과 원격 공유 이력을 같은 복구 절차로 다루거나 GitHub의 PR·Release 동작을 Git 자체·다른 호스팅 제품의 규칙으로 단정하지 않습니다. Git 이력 복구를 배포·데이터·외부 효과 복구로 확대하지 않습니다. |"
        },
        {
          "start_line": 67,
          "end_line": 69,
          "text": "|---|---|---|---|---|\n| PBSG-004 | VERCEL-BUILD-01, VERCEL-DEPLOY-01, VERCEL-LOG-01, VERCEL-ROLLBACK-01 | Vercel의 build·deployment URL·build/runtime log·routing-layer rollback | 2026-08-13 Task 15에서 CI·사람 리뷰·작은 수직 조각·위협·성능·보안의 제품 중립 공식·1차 자료를 추가 확인해 `confirmed`; Vercel 행은 여전히 제품별 build·deployment·routing 범위로만 사용 | 실제 Vercel 설정을 채택하면 GitHub·Vercel의 현재 플랜·보호·승인·복구 경계를 다시 확인 |\n| PBSG-005 | SUPA-KEY-01, VERCEL-ENV-01, SITES-RUNTIME-01 | 세 제품의 공개 키·서버 비밀·배포별 환경 설정이라는 제품 경계 | 2026-08-13 Task 16에서 Node.js·Astro·Vercel·OWASP 직접 근거로 config·환경 변수·비밀, 로딩·노출·회전·유출 복구의 제품 중립 경계를 확인해 `confirmed`; 세 제품 행은 각각의 좁은 공개 기능 범위로만 사용 | 실제 배포 대상을 채택하면 해당 런타임·프레임워크·호스팅의 현재 precedence·권한·회전 절차를 재확인 |"
        },
        {
          "start_line": 83,
          "end_line": 85,
          "text": "| Supabase | SUPA-DB-01, SUPA-AUTH-01, SUPA-AUTHZ-01, SUPA-API-01, SUPA-SERVER-01, SUPA-MIG-01, SUPA-OPS-01, SUPA-LOG-01, SUPA-KEY-01 | 9개 행이며 `limited`인 서버 함수와 데이터베이스 백업은 조건부 기능으로 표시 | PBSG-005, PBSG-012, PBSG-020 | 실제 비밀 운영·전체 데이터 복구·모임 앱 제품 선택·인가·동시성·복원 성공은 미검증 |\n| Vercel | VERCEL-BUILD-01, VERCEL-RUNTIME-01, VERCEL-ENV-01, VERCEL-DEPLOY-01, VERCEL-DOMAIN-01, VERCEL-LOG-01, VERCEL-ROLLBACK-01, VERCEL-DATA-01 | 8개 행이며 `limited`인 Functions와 외부 storage 연결은 조건부 기능으로 표시 | PBSG-004, PBSG-005, PBSG-012, PBSG-020 | CI·배포 승인·외부 데이터·실제 URL·데이터 복구는 미검증 |\n| Codex Sites | SITES-VERSION-01, SITES-HOST-01, SITES-RUNTIME-01, SITES-DOMAIN-01 | 공개 공식 URL이 직접 뒷받침하는 4개 행만 게시 | PBSG-005, PBSG-020 | beta·계정·workspace·지원 패턴 차이와 실제 배포는 미검증 |"
        },
        {
          "start_line": 113,
          "end_line": 116,
          "text": "\n- PBSG-004는 Google Engineering Practices, Fowler의 CI·feature toggle, Agile Manifesto 원칙, GitHub 보호 브랜치·배포 환경, NIST SSDF 1.1·least privilege, OWASP threat modeling·input validation·secrets·logging, W3C User Timing·Resource Timing 초안과 Chrome·web.dev 성능 자료를 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. PB-037·038·041은 회사 관행·제품 설정·예시 수치·보안 통제를 모든 팀의 성공 공식이나 위험 제거 완료로 확대하지 않습니다.\n- PBSG-008은 ISO/IEC/IEEE 12207:2026, Google SRE Book Effective Troubleshooting, OpenTelemetry signals·observability primer와 OWASP Logging Cheat Sheet를 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. PB-039·040은 생명주기 지도를 표준의 고정 순서로, 세 관측 신호 수집을 원인 규명·복구 성공으로 사용하지 않으며 개인정보·비밀 없는 관측 경계를 유지합니다.\n- PBSG-015·016은 ISO/IEC/IEEE 29119-1:2022와 공식 시리즈 안내, SWEBOK V4.0a, Fowler 사이트의 Practical Test Pyramid, Google Testing Blog의 flaky test·coverage 조직 사례를 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. PB-042는 static·dynamic, manual·automated, 테스트 수준·목적·초점을 다른 축으로 구분하고 피라미드·coverage·도구 성공 표시를 실제 위험 배분·오라클·사용자 성공의 대리 증거로 사용하지 않습니다. 특정 테스트 러너의 예상 실패·건너뜀·필터 0건·종료 코드 의미는 채택한 도구·버전의 공식 문서와 출력으로 다시 확인합니다."
        },
        {
          "start_line": 159,
          "end_line": 162,
          "text": "|---|---|---|\n| PBCA-003 | PBSG-001, PBSG-002, PBSG-003, PBSG-004, PBSG-005 | Task 12; Task 13; Task 14; Task 15; Task 16 |\n| PBCA-004 | PBSG-007, PBSG-008, PBSG-009, PBSG-010 | Task 10; Task 14; Task 15; Task 16; Task 17 |\n| PBCA-005 | PBSG-017 | Task 7; Task 8; Task 17 |"
        }
      ]
    },
    {
      "path": "docs/project/public-beta-content-audit.md",
      "sha256": "5b9bbec64eca339ee0b0a3c82be50c262120d6fe493c57e7963f79dc9215a608",
      "segments": [
        {
          "start_line": 63,
          "end_line": 67,
          "text": "| PB-036 | `src/content/docs/06-requirements-design/prd-sdd-tdd.md` | core | PRD·두 SDD·TDD는 어떤 범주이며 어떻게 연결되는가? | 요구 문서·설계 문서·개발 접근·구현 규율을 입력·출력·순서·실패로 구분한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 5; Task 14; Task 20 resolved | 29148의 현재·개정 예정 상태, inactive-reserved 1016, Spec Kit 현재 흐름, Fowler TDD를 직접 연결해 PBSG-025를 닫았습니다. 의미 변경으로 과거 검토 파일은 보존하되 현재 `reviewEvidence`를 제거했으며, PRD 그림의 topology·390px 판독성은 Task 20 `9f10b20`과 실제 Chrome 6상태·Codex `PASS`로 교정됐습니다. |\n| PB-037 | `src/content/docs/07-workflow-methods/code-review-ci-cd.md` | core | 코드 리뷰·CI·CD는 어떤 서로 다른 게이트인가? | 사람 검토·자동 통합·전달·배포 증거를 구분한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 5; Task 15 | 코드 리뷰와 승인, CI와 자동 검사 서비스, 지속적 전달과 지속적 배포를 구분하고 실패 검사·보호 규칙·우회·배포 승인·커밋과 아티팩트·운영 증거·복구를 반복 사례와 직접 출처로 연결해 PBSG-004의 전달 게이트 범위를 닫았습니다. |\n| PB-038 | `src/content/docs/07-workflow-methods/incremental-delivery.md` | core | 큰 기능을 어떻게 작은 수직 조각으로 전달하는가? | 독립 수용·검증·되돌리기 가능한 단위로 나눈다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 5; Task 15 | 수직 조각을 파일 수·계층 분할과 구분하고 정상·거절·결과 불명·회귀 수용 기준, feature flag, 피드백, 코드·데이터·외부 부작용의 롤백·롤포워드, 가짜 점진성을 모임 참가 반복 사례와 PBSG-004 확인 근거로 확장했습니다. |\n| PB-039 | `src/content/docs/07-workflow-methods/software-development-lifecycle.md` | core | 문제 이해부터 운영 학습까지 어떤 증거가 이어지는가? | SDLC 단계와 위험별 피드백·승인 게이트를 설명한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 5; Task 15; Task 20 resolved | 발견→요구사항→설계→구현→검증→배포→운영→학습의 질문·산출물·종료 증거·되돌아가기, 문서·테스트·화면·배포 표시의 증거 한계를 모임 사례와 PBSG-008 확인 근거로 확장했습니다. 생명주기 자산의 marker·390px 판독성·앞 질문과 뒤 증명 범위는 Task 20 `2a04764`와 실제 Chrome 6상태·Codex `PASS`로 교정됐습니다. |\n| PB-040 | `src/content/docs/08-quality/debugging-observability.md` | core | 증상에서 원인으로 어떻게 좁히고 어떤 신호를 남기는가? | 재현·가설·로그·지표·트레이스로 진단한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 5; Task 15 | 증상→기대→재현→관찰→가설→구분 실험→원인→수정→회귀, 무작위 수정 금지, 완화·수정·복구·예방 상태, log·metric·trace·monitoring·observability 구분과 개인정보 없는 관측 계약을 모임 사례와 PBSG-008 확인 근거로 확장했습니다. |"
        }
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "sha256": "2e9252b923b6b8459a3ac850b1fb95392fac4bfbd15a4a8491ac9cd1c77c7d55",
      "segments": [
        {
          "start_line": 373,
          "end_line": 401,
          "text": "    },\n    {\n      \"id\": \"R18\",\n      \"slug\": \"design-support\",\n      \"method\": \"소묶음\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/06-requirements-design/adr-and-tradeoffs.md\", \"src/content/docs/06-requirements-design/architecture-and-frameworks.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r18-design-support-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r18-design-support-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r18-design-support-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r18-design-support-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r18-design-support-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r18-design-support-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"407e52a12933af78233aa0ff00940a04dc05aec3b8226ea95140e0a34f8d8069\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important3-minor3-resolved\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"6ae2dead43ae59b3b048260cc1964eddada76e8fa8547b9e9302d73850f41178\",\"current_target_sha256\":\"a3b14ed20f674eb88379a33c0866ee3dadb3ce7d86cc88f748e5e49928885e06\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r18-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r18-design-support-codex-rereview.md\",\"next_scope\":\"R19 pending; no M5/ready/public approval\",\"target_hashes\":[{\"path\":\"src/content/docs/06-requirements-design/adr-and-tradeoffs.md\",\"reviewed_sha256\":\"6ae2dead43ae59b3b048260cc1964eddada76e8fa8547b9e9302d73850f41178\",\"current_sha256\":\"a3b14ed20f674eb88379a33c0866ee3dadb3ce7d86cc88f748e5e49928885e06\"},{\"path\":\"src/content/docs/06-requirements-design/architecture-and-frameworks.md\",\"reviewed_sha256\":\"10c841738885363c3a7ba978c4e043ad2f69d6abdff690851f3345ce5128eb64\",\"current_sha256\":\"72798fd19f5e063a31f0ff56cb4ee8ecb59d49a67304a3a869a996ed420310d0\"}]}\n    },\n    {\n      \"id\": \"R19\",\n      \"slug\": \"workflow-support\",\n      \"method\": \"소묶음\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/07-workflow-methods/code-review-ci-cd.md\", \"src/content/docs/07-workflow-methods/incremental-delivery.md\", \"src/content/docs/07-workflow-methods/software-development-lifecycle.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r19-workflow-support-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r19-workflow-support-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r19-workflow-support-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r19-workflow-support-codex-rereview.md\"\n    },\n    {\n      \"id\": \"R20\",\n      \"slug\": \"quality-support\",\n      \"method\": \"소묶음\",\n      \"implementation_state\": \"작성·구현 완료\","
        }
      ]
    },
    {
      "path": "docs/project/public-beta-visual-audit.md",
      "sha256": "fa8fb01ec74718c80f81e5c016f212a7629c61f218591cc742551f144dfd98e4",
      "segments": [
        {
          "start_line": 29,
          "end_line": 31,
          "text": "| PBV-10 `prd-sdd-tdd` | `src/assets/diagrams/prd-sdd-tdd.svg` | `src/assets/diagrams/source/prd-sdd-tdd.mmd` | PB-036 `prd-sdd-tdd.md` | 문제·요구·설계·스펙·작업·구현·검증이 어떻게 추적 가능한 연결을 이루는가? | 분기·수렴+피드백 | 7 | 8 | 요구·증거 중심 | 2026-08-28 질문/정확alt 보완·기존뒤추적설명 보존·고유title/desc 일치. | `480×1280`, viewBox·width·height 일치 | Chrome6/6·358×954.7px·core20.88/detail17.9/note14.92·원본그림/상단 및 문맥/full배치 확인. | 명시marker4·실선7/점선1·실제양테마 방향 확인·focused277/XML/full/Chrome 통과. | replace | diagram-design | `9f10b20`; Codex `PASS` C0/I0/M0; PBVA-002·004 자산 조건 충족; Claude pending |\n| PBV-11 `software-lifecycle` | `src/assets/diagrams/software-lifecycle.svg` | `src/assets/diagrams/source/software-lifecycle.mmd` | PB-039 `software-development-lifecycle.md` | 문제 이해부터 운영 학습까지 어떤 증거와 피드백이 이어지는가? | 세로6묶음+좌우A/B귀환 | 6 | 7 | 검증·운영 2그룹 | 2026-08-28 앞질문/alt/뒤한계 보완·8단계와6묶음 대응·나머지원고 byte불변·title/desc 일치. | `480×1080`, viewBox·width·height 일치 | 실제Chrome6/6·358×805.5px·core20.88/detail17.9/note14.92, 원본그림/상단 및 문맥·full배치 확인. | 명시marker4·실선/점선/A/B·모든방향 확인, 최종243/XML/full/Chrome 통과. | reflow | diagram-design | `2a04764`; Codex `PASS` C0/I0/M0; PBVA-003·004·005 조건 충족; Claude pending |\n| PBV-12 `agent-feedback-loop` | `src/assets/diagrams/agent-feedback-loop.svg` | `src/assets/diagrams/source/agent-feedback-loop.mmd` | PB-052 `working-with-coding-agents.md` | 에이전트가 상태 확인부터 문맥 갱신까지 어떤 증거 루프로 작업하는가? | 세로 단계+피드백 | 7 | 7 | 리뷰·갱신 2그룹 | 고유 title·desc·role·aria와 원고의 질문지도/비증명 경계가 일치하며 원고는 불변입니다. | `560×1000`, viewBox·width·height 일치 | 2026-08-28 실제 Chrome6상태: 모바일358×639px core17.9/detail12.8px·하단 안내 판독. 보조 글자를 키워 이전보다 약149px 길어졌습니다. | explicit marker4·주 흐름·점선 피드백이 선과 같은 가시색으로 전환됩니다. | reflow | diagram-design | `2ccd9f4`; Codex `PASS` C0/I0/M0; PBVA-003 자산 조건 충족; Claude pending |"
        },
        {
          "start_line": 73,
          "end_line": 75,
          "text": "| PBV-10 | `/06-requirements-design/prd-sdd-tdd/` | prd-sdd-tdd | 6상태·원본 화면 확인; topology·모바일 판독 결함 0; Codex PASS |\n| PBV-11 | `/07-workflow-methods/software-development-lifecycle/` | software-lifecycle | 6상태·원본 화면 확인; marker·모바일 판독·앞뒤 설명 결함 0; Codex PASS |\n| PBV-12 | `/11-ai-native/working-with-coding-agents/` | agent-feedback-loop | 6상태·원본 화면 확인; marker·모바일 판독 결함 0; Codex PASS |"
        },
        {
          "start_line": 83,
          "end_line": 87,
          "text": "| PBVA-002 | Important (resolved) | PBV-04, PBV-05, PBV-06, PBV-10 | Task 6에서 관찰한 SVG·source·원고 topology 차이를 네 자산의 학습 질문에 맞춰 함께 교정했습니다. context의 책임 연결, deploy의 콘텐츠/이름 조회 분리, full-stack의 저장소/외부 서비스 독립 분기, PRD의 분기·수렴·대표 피드백이 현재 SVG·Mermaid·alt·앞뒤 설명에서 일치합니다. | 현재 의미 동기화를 유지하고 후속 변경 시 SVG·Mermaid·원고를 같은 단위에서 검증합니다. | Task 20 resolved | 네 자산별 focused semantic 검사와 실제 Chrome 36상태, 각각의 별도 Codex `PASS` C0/I0/M0, 전체 참조·빌드 검사와 합동 closeout 재검토를 통과했습니다. |\n| PBVA-003 | Important (resolved) | PBV-01, PBV-04, PBV-05, PBV-06, PBV-07, PBV-09, PBV-11, PBV-12 | 여덟 SVG의 marker fill을 주 흐름·반환·피드백 선 의미와 light/dark 테마에 맞는 명시적 변수·class로 연결했습니다. | 명시 marker와 참조 선의 동일 의미·가시색을 유지합니다. | Task 20 resolved | 여덟 자산의 실제 Chrome 60상태에서 화살촉 소실·대비 결함 0개를 원본 crop으로 확인했고, 자산별 Codex 최종 PASS와 합동 closeout 재검토가 C0/I0/M0였습니다. |\n| PBVA-004 | Important (resolved) | PBV-01, PBV-02, PBV-04, PBV-05, PBV-06, PBV-07, PBV-08, PBV-10, PBV-11 | 아홉 자산을 모바일 세로 재배치·관계 단순화·단계 묶음으로 교정해 실제 콘텐츠 폭 358px에서 핵심·보조 레이블과 관계를 기본 확대에서 읽을 수 있게 했습니다. | 현재 세로 레이아웃과 원고의 이동 세부·비증명 설명을 유지합니다. | Task 20 resolved | 아홉 자산의 실제 Chrome 72상태에서 핵심·보조 레이블 판독, 내부 겹침·잘림·전역 overflow 0개를 확인했고, 자산별 Codex 최종 PASS와 합동 closeout 재검토가 C0/I0/M0였습니다. |\n| PBVA-005 | Important (resolved) | PBV-11 | 그림 앞에 불확실성과 피드백을 읽는 질문을, 뒤에 선형 강제 절차가 아니며 운영·검증 증거가 앞 결정을 재검토하게 한다는 범위와 한계를 추가했습니다. | 질문·alt·6개 책임 묶음·대표 피드백 A/B·비증명 설명의 일치를 유지합니다. | Task 20 resolved | 원고·SVG·Mermaid 의미 검사, actual Chrome 6상태의 인접 문맥, 자산별 Codex PASS와 합동 closeout 재검토 C0/I0/M0를 확인했습니다. |\n"
        }
      ]
    }
  ],
  "render_provenance": {
    "manifest_path": "output/playwright/r19-inputs-20261116-corrected-pilot/observations.json",
    "manifest_sha256": "7016c3b5b5adcafc0d0f4b85598f663d5eaac6f1b277b5c16c87a52922c76ac1",
    "additional_context_manifests": [
      {
        "path": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "sha256": "0a3391923b9882307aa933d1bafc7f227d93d85f0c1db6c5215e8e0a6a7cf594"
      }
    ],
    "input_files": [
      {
        "path": "src/content/docs/07-workflow-methods/code-review-ci-cd.md",
        "sha256": "961ec7c9263440d6982b69672df91ed80135b195490434d52a8666be36f3425c"
      },
      {
        "path": "src/content/docs/07-workflow-methods/incremental-delivery.md",
        "sha256": "e767cb72008ce8bb24ed28282b44aef92c314a138e3294ca7a66795142482e71"
      },
      {
        "path": "src/content/docs/07-workflow-methods/software-development-lifecycle.md",
        "sha256": "308c504db784905d390324fbad3c08f53bd71ba67a1dc8fb82bd8c56946b7bc9"
      },
      {
        "path": "src/styles/custom.css",
        "sha256": "2236f2a8a9b30515cb641d48de7089d15590834766ada3f60de9f649ef36c137"
      }
    ],
    "states": [
      {
        "route": "07-workflow-methods/software-development-lifecycle",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [
          {
            "src": "/_astro/software-lifecycle.QicGEue5_ZNME2O.svg",
            "alt": "문제 이해, 요구사항, 설계, 구현, 검증, 배포·운영의 여섯 묶음과 검증에서 설계로, 운영에서 요구사항으로 돌아가 새 증거를 반영하는 두 피드백",
            "loaded": true
          }
        ],
        "errors": [],
        "image_count": 8
      },
      {
        "route": "07-workflow-methods/software-development-lifecycle",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [
          {
            "src": "/_astro/software-lifecycle.QicGEue5_ZNME2O.svg",
            "alt": "문제 이해, 요구사항, 설계, 구현, 검증, 배포·운영의 여섯 묶음과 검증에서 설계로, 운영에서 요구사항으로 돌아가 새 증거를 반영하는 두 피드백",
            "loaded": true
          }
        ],
        "errors": [],
        "image_count": 15
      },
      {
        "route": "07-workflow-methods/software-development-lifecycle",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [
          {
            "src": "/_astro/software-lifecycle.QicGEue5_ZNME2O.svg",
            "alt": "문제 이해, 요구사항, 설계, 구현, 검증, 배포·운영의 여섯 묶음과 검증에서 설계로, 운영에서 요구사항으로 돌아가 새 증거를 반영하는 두 피드백",
            "loaded": true
          }
        ],
        "errors": [],
        "image_count": 8
      },
      {
        "route": "07-workflow-methods/software-development-lifecycle",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [
          {
            "src": "/_astro/software-lifecycle.QicGEue5_ZNME2O.svg",
            "alt": "문제 이해, 요구사항, 설계, 구현, 검증, 배포·운영의 여섯 묶음과 검증에서 설계로, 운영에서 요구사항으로 돌아가 새 증거를 반영하는 두 피드백",
            "loaded": true
          }
        ],
        "errors": [],
        "image_count": 15
      },
      {
        "route": "07-workflow-methods/code-review-ci-cd",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 5
      },
      {
        "route": "07-workflow-methods/code-review-ci-cd",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 8
      },
      {
        "route": "07-workflow-methods/code-review-ci-cd",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 5
      },
      {
        "route": "07-workflow-methods/code-review-ci-cd",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 8
      },
      {
        "route": "07-workflow-methods/incremental-delivery",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 7
      },
      {
        "route": "07-workflow-methods/incremental-delivery",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 12
      },
      {
        "route": "07-workflow-methods/incremental-delivery",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 7
      },
      {
        "route": "07-workflow-methods/incremental-delivery",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 12
      }
    ]
  },
  "images": [
    {
      "id": "R19-PNG-01",
      "order": 1,
      "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-1440-light-top.png",
      "sha256": "7113810887ab21b664217a4b1d6cf5de800c8748d38623d4cf5357352236341e",
      "dimensions": {
        "width": 1440,
        "height": 1000
      },
      "kind": "viewport",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R19-PNG-02",
      "order": 2,
      "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-1440-light-item0-x0-y0.png",
      "sha256": "e4ead27415275d95c939cca8b861a4ec9278e6daf8d821bf144dfd885a50a0c8",
      "dimensions": {
        "width": 480,
        "height": 880
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-1440-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 215,
          "documentRange": [
            325,
            1205
          ],
          "targetRange": [
            324.828125,
            1404.828125
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 480,
            "height": 880
          }
        }
      }
    },
    {
      "id": "R19-PNG-03",
      "order": 3,
      "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-1440-light-item0-x0-y1.png",
      "sha256": "c50232c8d741679b6176cdcd3c7beffbb8aa4979939f930a88a98c843b6e968e",
      "dimensions": {
        "width": 480,
        "height": 249
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-1440-light-item0-x0-y1.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1045,
          "documentRange": [
            1155,
            1404.828125
          ],
          "targetRange": [
            324.828125,
            1404.828125
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 480,
            "height": 249.828125
          }
        }
      }
    },
    {
      "id": "R19-PNG-04",
      "order": 4,
      "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-1440-light-item1-x0-y0.png",
      "sha256": "b8b0847b080d2b76a68ad282b73765c1ffc8b45d3eba524d5a9a08263e08f895",
      "dimensions": {
        "width": 788,
        "height": 811
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-1440-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2305,
          "documentRange": [
            2415,
            3226.03125
          ],
          "targetRange": [
            2414.828125,
            3226.03125
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 811.03125
          }
        }
      }
    },
    {
      "id": "R19-PNG-05",
      "order": 5,
      "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-1440-light-item2-x0-y0.png",
      "sha256": "3c94d82a2ac1c156c04d77b3c6f3820dbfd426d6b2ac072efcf03e79b4f90208",
      "dimensions": {
        "width": 788,
        "height": 222
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-1440-light-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3793,
          "documentRange": [
            3903.03125,
            4125.03125
          ],
          "targetRange": [
            3903.03125,
            4125.03125
          ],
          "clip": {
            "x": 324,
            "y": 110.03125,
            "width": 788,
            "height": 222
          }
        }
      }
    },
    {
      "id": "R19-PNG-06",
      "order": 6,
      "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-1440-light-item3-x0-y0.png",
      "sha256": "729a2e09f0b9c4b1d05ee229db24aa9f35da39c583e7f1022303d05b2ae30f99",
      "dimensions": {
        "width": 788,
        "height": 123
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-1440-light-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 6673,
          "documentRange": [
            6783,
            6906.53125
          ],
          "targetRange": [
            6782.53125,
            6906.53125
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 123.53125
          }
        }
      }
    },
    {
      "id": "R19-PNG-07",
      "order": 7,
      "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-1440-light-item4-x0-y0.png",
      "sha256": "cbc82485b5f4fd6d63c3ca8bb9b27f10d238963ec630dc7d497d72f3a8ef82ed",
      "dimensions": {
        "width": 788,
        "height": 335
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-1440-light-item4-x0-y0.png",
          "label": "item4",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 8299,
          "documentRange": [
            8409,
            8744.53125
          ],
          "targetRange": [
            8408.53125,
            8744.53125
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 335.53125
          }
        }
      }
    },
    {
      "id": "R19-PNG-08",
      "order": 8,
      "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-1440-light-item4-x1-y0.png",
      "sha256": "88d3234db79533f2490959bdde737f3fe0ba39928f364ca201043e523991207e",
      "dimensions": {
        "width": 788,
        "height": 335
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-1440-light-item4-x1-y0.png",
          "label": "item4",
          "requestedScrollLeft": 473,
          "actualScrollLeft": 473,
          "pageScrollY": 8299,
          "documentRange": [
            8409,
            8744.53125
          ],
          "targetRange": [
            8408.53125,
            8744.53125
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 335.53125
          }
        }
      }
    },
    {
      "id": "R19-PNG-09",
      "order": 9,
      "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-top.png",
      "sha256": "1063c21df291f5be817a91c6f919c598a95baf452fd49a882712286bb22390df",
      "dimensions": {
        "width": 390,
        "height": 844
      },
      "kind": "viewport",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R19-PNG-10",
      "order": 10,
      "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item0-x0-y0.png",
      "sha256": "c2094b3dd3c89b8984fca7dc70bc0dca978cebbd55ceda5330682dcb6fc6805d",
      "dimensions": {
        "width": 358,
        "height": 723
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 293,
          "documentRange": [
            403.375,
            1127
          ],
          "targetRange": [
            403.375,
            1208.875
          ],
          "clip": {
            "x": 16,
            "y": 110.375,
            "width": 358,
            "height": 723.625
          }
        }
      }
    },
    {
      "id": "R19-PNG-11",
      "order": 11,
      "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item0-x0-y1.png",
      "sha256": "4e76d5aa57294edc4457d9b0a892b8e99da059e718d2ca4313080f69d1867827",
      "dimensions": {
        "width": 358,
        "height": 131
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item0-x0-y1.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 967,
          "documentRange": [
            1077,
            1208.875
          ],
          "targetRange": [
            403.375,
            1208.875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 131.875
          }
        }
      }
    },
    {
      "id": "R19-PNG-12",
      "order": 12,
      "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item1-x0-y0.png",
      "sha256": "46d9a6725261b159acd1ee07d036fd78c8b3bae55916b7281bdf0e42a8f538b1",
      "dimensions": {
        "width": 358,
        "height": 724
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2555,
          "documentRange": [
            2665,
            3389
          ],
          "targetRange": [
            2664.859375,
            3686.6875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 724
          }
        }
      }
    },
    {
      "id": "R19-PNG-13",
      "order": 13,
      "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item1-x0-y1.png",
      "sha256": "c55110bac2a58b73382fc9b68767266c6dbd928e1205f6cf07bf27059f23374e",
      "dimensions": {
        "width": 358,
        "height": 347
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item1-x0-y1.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3229,
          "documentRange": [
            3339,
            3686.6875
          ],
          "targetRange": [
            2664.859375,
            3686.6875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 347.6875
          }
        }
      }
    },
    {
      "id": "R19-PNG-14",
      "order": 14,
      "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item1-x1-y0.png",
      "sha256": "7910eedf5653b272b048e72489a27dcf3b9c807194eda3370eb8d12d100ce72c",
      "dimensions": {
        "width": 358,
        "height": 724
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item1-x1-y0.png",
          "label": "item1",
          "requestedScrollLeft": 284,
          "actualScrollLeft": 284,
          "pageScrollY": 2555,
          "documentRange": [
            2665,
            3389
          ],
          "targetRange": [
            2664.859375,
            3686.6875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 724
          }
        }
      }
    },
    {
      "id": "R19-PNG-15",
      "order": 15,
      "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item1-x1-y1.png",
      "sha256": "28158a62bf6fa340c59af47e4a901f64838759b72085bb615b50479b311156ed",
      "dimensions": {
        "width": 358,
        "height": 347
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item1-x1-y1.png",
          "label": "item1",
          "requestedScrollLeft": 284,
          "actualScrollLeft": 284,
          "pageScrollY": 3229,
          "documentRange": [
            3339,
            3686.6875
          ],
          "targetRange": [
            2664.859375,
            3686.6875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 347.6875
          }
        }
      }
    },
    {
      "id": "R19-PNG-16",
      "order": 16,
      "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item2-x0-y0.png",
      "sha256": "bf1f1da49a13655403151372ae9908be043ce599b3e8be773cd934795ef9472f",
      "dimensions": {
        "width": 358,
        "height": 237
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 4571,
          "documentRange": [
            4681,
            4918.875
          ],
          "targetRange": [
            4680.875,
            4918.875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 237.875
          }
        }
      }
    },
    {
      "id": "R19-PNG-17",
      "order": 17,
      "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item2-x1-y0.png",
      "sha256": "848bce0e7d20f5da4fc939dbb20b265ebdea3b39217081783b17f5ae9c564f9e",
      "dimensions": {
        "width": 358,
        "height": 237
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 189,
          "actualScrollLeft": 189,
          "pageScrollY": 4571,
          "documentRange": [
            4681,
            4918.875
          ],
          "targetRange": [
            4680.875,
            4918.875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 237.875
          }
        }
      }
    },
    {
      "id": "R19-PNG-18",
      "order": 18,
      "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item3-x0-y0.png",
      "sha256": "fb3ad16a2d3513cb1530ad65004d4d178fd8beb5387e562e9f61f69f306810f1",
      "dimensions": {
        "width": 358,
        "height": 139
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 8549,
          "documentRange": [
            8659,
            8798.53125
          ],
          "targetRange": [
            8658.53125,
            8798.53125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 139.53125
          }
        }
      }
    },
    {
      "id": "R19-PNG-19",
      "order": 19,
      "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item3-x1-y0.png",
      "sha256": "ef310a6391739f8579d3a1e1b8134904a8c1024f4158a0bbde1d8b4e52e727d3",
      "dimensions": {
        "width": 358,
        "height": 139
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item3-x1-y0.png",
          "label": "item3",
          "requestedScrollLeft": 198,
          "actualScrollLeft": 198,
          "pageScrollY": 8549,
          "documentRange": [
            8659,
            8798.53125
          ],
          "targetRange": [
            8658.53125,
            8798.53125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 139.53125
          }
        }
      }
    },
    {
      "id": "R19-PNG-20",
      "order": 20,
      "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item4-x0-y0.png",
      "sha256": "c81c48e2bf9f8f85ce6313034d0c6cd5d671e66ef6d35be654f4ce4e1dc89611",
      "dimensions": {
        "width": 358,
        "height": 336
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item4-x0-y0.png",
          "label": "item4",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 10895,
          "documentRange": [
            11005.3125,
            11341.3125
          ],
          "targetRange": [
            11005.3125,
            11341.3125
          ],
          "clip": {
            "x": 16,
            "y": 110.3125,
            "width": 358,
            "height": 336
          }
        }
      }
    },
    {
      "id": "R19-PNG-21",
      "order": 21,
      "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item4-x1-y0.png",
      "sha256": "3c6b2b7f0b216b97cc77c822b19dfff2df18a0980ec64539c72791c195f78cb7",
      "dimensions": {
        "width": 358,
        "height": 336
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item4-x1-y0.png",
          "label": "item4",
          "requestedScrollLeft": 356,
          "actualScrollLeft": 356,
          "pageScrollY": 10895,
          "documentRange": [
            11005.3125,
            11341.3125
          ],
          "targetRange": [
            11005.3125,
            11341.3125
          ],
          "clip": {
            "x": 16,
            "y": 110.3125,
            "width": 358,
            "height": 336
          }
        }
      }
    },
    {
      "id": "R19-PNG-22",
      "order": 22,
      "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item4-x2-y0.png",
      "sha256": "0379217b3030abb4f4271c963fb5b4b02af5b3ddf84fd1da319332b8d2308fba",
      "dimensions": {
        "width": 358,
        "height": 336
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item4-x2-y0.png",
          "label": "item4",
          "requestedScrollLeft": 712,
          "actualScrollLeft": 712,
          "pageScrollY": 10895,
          "documentRange": [
            11005.3125,
            11341.3125
          ],
          "targetRange": [
            11005.3125,
            11341.3125
          ],
          "clip": {
            "x": 16,
            "y": 110.3125,
            "width": 358,
            "height": 336
          }
        }
      }
    },
    {
      "id": "R19-PNG-23",
      "order": 23,
      "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item4-x3-y0.png",
      "sha256": "702e325ee5de8b5484725fc34215cfe6b0eb5437e0bc17bdeb1a4479bf308c96",
      "dimensions": {
        "width": 358,
        "height": 336
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-pilot/software-development-lifecycle-390-dark-item4-x3-y0.png",
          "label": "item4",
          "requestedScrollLeft": 903,
          "actualScrollLeft": 903,
          "pageScrollY": 10895,
          "documentRange": [
            11005.3125,
            11341.3125
          ],
          "targetRange": [
            11005.3125,
            11341.3125
          ],
          "clip": {
            "x": 16,
            "y": 110.3125,
            "width": 358,
            "height": 336
          }
        }
      }
    },
    {
      "id": "R19-PNG-24",
      "order": 24,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-1440-dark-top.png",
      "sha256": "d1eb2a2914aea540e2f3d43950c603fac7cb0821b26f50ca66ee6be55ee591ac",
      "dimensions": {
        "width": 1440,
        "height": 1000
      },
      "kind": "viewport",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R19-PNG-25",
      "order": 25,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-1440-dark-item0-x0-y0.png",
      "sha256": "b106d14629afaca7ec8e9c97376710f2a847cb708b92d8a806925f4c596bf9bd",
      "dimensions": {
        "width": 480,
        "height": 880
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-1440-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 215,
          "documentRange": [
            325,
            1205
          ],
          "targetRange": [
            324.828125,
            1404.828125
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 480,
            "height": 880
          }
        }
      }
    },
    {
      "id": "R19-PNG-26",
      "order": 26,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-1440-dark-item0-x0-y1.png",
      "sha256": "1be2298c3df7404ab5012825abdc287362a32aeb25f539471d28b25645973f0c",
      "dimensions": {
        "width": 480,
        "height": 249
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-1440-dark-item0-x0-y1.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1045,
          "documentRange": [
            1155,
            1404.828125
          ],
          "targetRange": [
            324.828125,
            1404.828125
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 480,
            "height": 249.828125
          }
        }
      }
    },
    {
      "id": "R19-PNG-27",
      "order": 27,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-1440-dark-item1-x0-y0.png",
      "sha256": "e82deeb732afa55a5bdbcc56efaeff511ce40a2aebf5d1b57fc71fa314fa9190",
      "dimensions": {
        "width": 788,
        "height": 811
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-1440-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2305,
          "documentRange": [
            2415,
            3226.03125
          ],
          "targetRange": [
            2414.828125,
            3226.03125
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 811.03125
          }
        }
      }
    },
    {
      "id": "R19-PNG-28",
      "order": 28,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-1440-dark-item2-x0-y0.png",
      "sha256": "6594c8cc684022574da1112a76cd4e591c90d76fe6e2d2044362e72e367c14b0",
      "dimensions": {
        "width": 788,
        "height": 222
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-1440-dark-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3793,
          "documentRange": [
            3903.03125,
            4125.03125
          ],
          "targetRange": [
            3903.03125,
            4125.03125
          ],
          "clip": {
            "x": 324,
            "y": 110.03125,
            "width": 788,
            "height": 222
          }
        }
      }
    },
    {
      "id": "R19-PNG-29",
      "order": 29,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-1440-dark-item3-x0-y0.png",
      "sha256": "600883ebd6d60b80c12c6e4a686641a7948ca0517d73caa75df0a687364a879b",
      "dimensions": {
        "width": 788,
        "height": 123
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-1440-dark-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 6673,
          "documentRange": [
            6783,
            6906.53125
          ],
          "targetRange": [
            6782.53125,
            6906.53125
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 123.53125
          }
        }
      }
    },
    {
      "id": "R19-PNG-30",
      "order": 30,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-1440-dark-item4-x0-y0.png",
      "sha256": "1d1988a097b5bb59ee1a9d02cf9b5c980f55955585d3b3dcc231f216fdfedc73",
      "dimensions": {
        "width": 788,
        "height": 335
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-1440-dark-item4-x0-y0.png",
          "label": "item4",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 8299,
          "documentRange": [
            8409,
            8744.53125
          ],
          "targetRange": [
            8408.53125,
            8744.53125
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 335.53125
          }
        }
      }
    },
    {
      "id": "R19-PNG-31",
      "order": 31,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-1440-dark-item4-x1-y0.png",
      "sha256": "7d73a8ccc431ec7f5191019826ac2d1647123f509401a6c3e5f4000846d44fb4",
      "dimensions": {
        "width": 788,
        "height": 335
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-1440-dark-item4-x1-y0.png",
          "label": "item4",
          "requestedScrollLeft": 473,
          "actualScrollLeft": 473,
          "pageScrollY": 8299,
          "documentRange": [
            8409,
            8744.53125
          ],
          "targetRange": [
            8408.53125,
            8744.53125
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 335.53125
          }
        }
      }
    },
    {
      "id": "R19-PNG-32",
      "order": 32,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-top.png",
      "sha256": "7e2c87645a3347185953dd4042dbd796c127f0d35dcd3f6f6abe6758efcb899d",
      "dimensions": {
        "width": 390,
        "height": 844
      },
      "kind": "viewport",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R19-PNG-33",
      "order": 33,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item0-x0-y0.png",
      "sha256": "e8eb76a4a4cefdeaa01eb6485399e4df7f0bc847375fd8407ef439abb315213a",
      "dimensions": {
        "width": 358,
        "height": 723
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 293,
          "documentRange": [
            403.375,
            1127
          ],
          "targetRange": [
            403.375,
            1208.875
          ],
          "clip": {
            "x": 16,
            "y": 110.375,
            "width": 358,
            "height": 723.625
          }
        }
      }
    },
    {
      "id": "R19-PNG-34",
      "order": 34,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item0-x0-y1.png",
      "sha256": "8e596c932c3a4e242d296f00997fcea05ebf24964537ecdefb980fa710d66fb4",
      "dimensions": {
        "width": 358,
        "height": 131
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item0-x0-y1.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 967,
          "documentRange": [
            1077,
            1208.875
          ],
          "targetRange": [
            403.375,
            1208.875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 131.875
          }
        }
      }
    },
    {
      "id": "R19-PNG-35",
      "order": 35,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item1-x0-y0.png",
      "sha256": "262c6090aa9ea4549c68a43dc5d83a65dcf68a6129b0b679907d1e0a9aa0a1f4",
      "dimensions": {
        "width": 358,
        "height": 724
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2555,
          "documentRange": [
            2665,
            3389
          ],
          "targetRange": [
            2664.859375,
            3686.6875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 724
          }
        }
      }
    },
    {
      "id": "R19-PNG-36",
      "order": 36,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item1-x0-y1.png",
      "sha256": "cd65207eb7a38ef873a067a88a850dee4d690f467a9542023f1babcbdfd67f2a",
      "dimensions": {
        "width": 358,
        "height": 347
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item1-x0-y1.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3229,
          "documentRange": [
            3339,
            3686.6875
          ],
          "targetRange": [
            2664.859375,
            3686.6875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 347.6875
          }
        }
      }
    },
    {
      "id": "R19-PNG-37",
      "order": 37,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item1-x1-y0.png",
      "sha256": "b20559844109356f9242caa04da2b4cd36ef3cdf1b2ee1b6886acf0106706d00",
      "dimensions": {
        "width": 358,
        "height": 724
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item1-x1-y0.png",
          "label": "item1",
          "requestedScrollLeft": 284,
          "actualScrollLeft": 284,
          "pageScrollY": 2555,
          "documentRange": [
            2665,
            3389
          ],
          "targetRange": [
            2664.859375,
            3686.6875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 724
          }
        }
      }
    },
    {
      "id": "R19-PNG-38",
      "order": 38,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item1-x1-y1.png",
      "sha256": "5900c26c2f6a1d2bb37df38650dd6419c4e08516cfa24e8c3504293ac6d82165",
      "dimensions": {
        "width": 358,
        "height": 347
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item1-x1-y1.png",
          "label": "item1",
          "requestedScrollLeft": 284,
          "actualScrollLeft": 284,
          "pageScrollY": 3229,
          "documentRange": [
            3339,
            3686.6875
          ],
          "targetRange": [
            2664.859375,
            3686.6875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 347.6875
          }
        }
      }
    },
    {
      "id": "R19-PNG-39",
      "order": 39,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item2-x0-y0.png",
      "sha256": "e4fc6dc3b0362b65b77df71437b0c7e1d193e84957fafd59acf9c2bf2d572dd5",
      "dimensions": {
        "width": 358,
        "height": 237
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 4571,
          "documentRange": [
            4681,
            4918.875
          ],
          "targetRange": [
            4680.875,
            4918.875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 237.875
          }
        }
      }
    },
    {
      "id": "R19-PNG-40",
      "order": 40,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item2-x1-y0.png",
      "sha256": "1c81afcca011bb034f776e74eed2fbe2d387bc263b2110313671db04453f0129",
      "dimensions": {
        "width": 358,
        "height": 237
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 189,
          "actualScrollLeft": 189,
          "pageScrollY": 4571,
          "documentRange": [
            4681,
            4918.875
          ],
          "targetRange": [
            4680.875,
            4918.875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 237.875
          }
        }
      }
    },
    {
      "id": "R19-PNG-41",
      "order": 41,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item3-x0-y0.png",
      "sha256": "487f7ff48a71881a0e126b831af6108e7eca825526873093e7a78dde2cd64b1e",
      "dimensions": {
        "width": 358,
        "height": 139
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 8549,
          "documentRange": [
            8659,
            8798.53125
          ],
          "targetRange": [
            8658.53125,
            8798.53125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 139.53125
          }
        }
      }
    },
    {
      "id": "R19-PNG-42",
      "order": 42,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item3-x1-y0.png",
      "sha256": "77f4097e85b709d11a2e0550b33917d0861d069a6143bca6fe317ecd886cae5a",
      "dimensions": {
        "width": 358,
        "height": 139
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item3-x1-y0.png",
          "label": "item3",
          "requestedScrollLeft": 198,
          "actualScrollLeft": 198,
          "pageScrollY": 8549,
          "documentRange": [
            8659,
            8798.53125
          ],
          "targetRange": [
            8658.53125,
            8798.53125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 139.53125
          }
        }
      }
    },
    {
      "id": "R19-PNG-43",
      "order": 43,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item4-x0-y0.png",
      "sha256": "09bba3428d42f0083fa6cc03be9f7f1b29031c3ef97416b3a3181079c19b706e",
      "dimensions": {
        "width": 358,
        "height": 336
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item4-x0-y0.png",
          "label": "item4",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 10895,
          "documentRange": [
            11005.3125,
            11341.3125
          ],
          "targetRange": [
            11005.3125,
            11341.3125
          ],
          "clip": {
            "x": 16,
            "y": 110.3125,
            "width": 358,
            "height": 336
          }
        }
      }
    },
    {
      "id": "R19-PNG-44",
      "order": 44,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item4-x1-y0.png",
      "sha256": "0464eca53eee97aa8977f0e215a79e4e5b83f0e6f7282c4e2d31e1ad29118356",
      "dimensions": {
        "width": 358,
        "height": 336
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item4-x1-y0.png",
          "label": "item4",
          "requestedScrollLeft": 356,
          "actualScrollLeft": 356,
          "pageScrollY": 10895,
          "documentRange": [
            11005.3125,
            11341.3125
          ],
          "targetRange": [
            11005.3125,
            11341.3125
          ],
          "clip": {
            "x": 16,
            "y": 110.3125,
            "width": 358,
            "height": 336
          }
        }
      }
    },
    {
      "id": "R19-PNG-45",
      "order": 45,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item4-x2-y0.png",
      "sha256": "99aaa7f7ff39c626d9ddfde6c92fb695ea1d98e699a43ec06c8010833a4855ea",
      "dimensions": {
        "width": 358,
        "height": 336
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item4-x2-y0.png",
          "label": "item4",
          "requestedScrollLeft": 712,
          "actualScrollLeft": 712,
          "pageScrollY": 10895,
          "documentRange": [
            11005.3125,
            11341.3125
          ],
          "targetRange": [
            11005.3125,
            11341.3125
          ],
          "clip": {
            "x": 16,
            "y": 110.3125,
            "width": 358,
            "height": 336
          }
        }
      }
    },
    {
      "id": "R19-PNG-46",
      "order": 46,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item4-x3-y0.png",
      "sha256": "f2b035a128469b6a8efe6b64aae39b236afa549d35a5507fab6d9718dc078e73",
      "dimensions": {
        "width": 358,
        "height": 336
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/software-development-lifecycle",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/software-development-lifecycle-390-light-item4-x3-y0.png",
          "label": "item4",
          "requestedScrollLeft": 903,
          "actualScrollLeft": 903,
          "pageScrollY": 10895,
          "documentRange": [
            11005.3125,
            11341.3125
          ],
          "targetRange": [
            11005.3125,
            11341.3125
          ],
          "clip": {
            "x": 16,
            "y": 110.3125,
            "width": 358,
            "height": 336
          }
        }
      }
    },
    {
      "id": "R19-PNG-47",
      "order": 47,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-1440-light-top.png",
      "sha256": "f7568ce02ec7d9997e0de51cfc49547d754c225a53d5bd741a2536960fb65804",
      "dimensions": {
        "width": 1440,
        "height": 1000
      },
      "kind": "viewport",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R19-PNG-48",
      "order": 48,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-1440-light-item0-x0-y0.png",
      "sha256": "e671f0d54ab05f997ee955ba4f39a734148ce4ce1f8d8758366321f3d765d004",
      "dimensions": {
        "width": 788,
        "height": 391
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-1440-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 667,
          "documentRange": [
            777.328125,
            1168.9375
          ],
          "targetRange": [
            777.328125,
            1168.9375
          ],
          "clip": {
            "x": 324,
            "y": 110.328125,
            "width": 788,
            "height": 391.609375
          }
        }
      }
    },
    {
      "id": "R19-PNG-49",
      "order": 49,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-1440-light-item1-x0-y0.png",
      "sha256": "547e415c0671436c43e32028f3d836743eb11d1cec75b4eaae6f6270e3b2de9b",
      "dimensions": {
        "width": 788,
        "height": 270
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-1440-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1564,
          "documentRange": [
            1674,
            1944.9375
          ],
          "targetRange": [
            1673.9375,
            1944.9375
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 270.9375
          }
        }
      }
    },
    {
      "id": "R19-PNG-50",
      "order": 50,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-1440-light-item2-x0-y0.png",
      "sha256": "4a2a7e1a37ddd82b840b93da7cd2605617c7d6960b6197e7b394098c37a74aa2",
      "dimensions": {
        "width": 788,
        "height": 409
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-1440-light-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 5992,
          "documentRange": [
            6102.109375,
            6511.609375
          ],
          "targetRange": [
            6102.109375,
            6511.609375
          ],
          "clip": {
            "x": 324,
            "y": 110.109375,
            "width": 788,
            "height": 409.5
          }
        }
      }
    },
    {
      "id": "R19-PNG-51",
      "order": 51,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-1440-light-item2-x1-y0.png",
      "sha256": "d56aa46488822053f43d2b6c169f88ea1b27590b1c5e5a74490a2d37408b28c3",
      "dimensions": {
        "width": 788,
        "height": 409
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-1440-light-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 538,
          "actualScrollLeft": 538,
          "pageScrollY": 5992,
          "documentRange": [
            6102.109375,
            6511.609375
          ],
          "targetRange": [
            6102.109375,
            6511.609375
          ],
          "clip": {
            "x": 324,
            "y": 110.109375,
            "width": 788,
            "height": 409.5
          }
        }
      }
    },
    {
      "id": "R19-PNG-52",
      "order": 52,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-dark-top.png",
      "sha256": "78f8c7381ff55aff548b41afba782f56e9c94dfb51606b66ede855d9244a40f0",
      "dimensions": {
        "width": 390,
        "height": 844
      },
      "kind": "viewport",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R19-PNG-53",
      "order": 53,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-dark-item0-x0-y0.png",
      "sha256": "70f0719b26aeabdb5b916453e0c7574c59111939e096761ee551787c010543c8",
      "dimensions": {
        "width": 358,
        "height": 602
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 974,
          "documentRange": [
            1084.46875,
            1686.703125
          ],
          "targetRange": [
            1084.46875,
            1686.703125
          ],
          "clip": {
            "x": 16,
            "y": 110.46875,
            "width": 358,
            "height": 602.234375
          }
        }
      }
    },
    {
      "id": "R19-PNG-54",
      "order": 54,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-dark-item0-x1-y0.png",
      "sha256": "8e530082a3b029e8eed9e0643399f4d7432f9ef00ff8744ef572c8ace50ed2ce",
      "dimensions": {
        "width": 358,
        "height": 602
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-dark-item0-x1-y0.png",
          "label": "item0",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 974,
          "documentRange": [
            1084.46875,
            1686.703125
          ],
          "targetRange": [
            1084.46875,
            1686.703125
          ],
          "clip": {
            "x": 16,
            "y": 110.46875,
            "width": 358,
            "height": 602.234375
          }
        }
      }
    },
    {
      "id": "R19-PNG-55",
      "order": 55,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-dark-item1-x0-y0.png",
      "sha256": "283ade0bc628a9196fd802f155d48a75dd4786e88269f8ed81cee03a52c2bcbf",
      "dimensions": {
        "width": 358,
        "height": 271
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2336,
          "documentRange": [
            2446.09375,
            2717.09375
          ],
          "targetRange": [
            2446.09375,
            2717.09375
          ],
          "clip": {
            "x": 16,
            "y": 110.09375,
            "width": 358,
            "height": 271
          }
        }
      }
    },
    {
      "id": "R19-PNG-56",
      "order": 56,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-dark-item2-x0-y0.png",
      "sha256": "e4b39d27e50477154d6f355aae1f576740ada34fb265a56a862be09d090ef3cd",
      "dimensions": {
        "width": 358,
        "height": 409
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-dark-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 8659,
          "documentRange": [
            8769,
            9178.109375
          ],
          "targetRange": [
            8768.609375,
            9178.109375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 409.109375
          }
        }
      }
    },
    {
      "id": "R19-PNG-57",
      "order": 57,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-dark-item2-x1-y0.png",
      "sha256": "50baf253bd05557aaf5b63af64bbc3066e1a4e8493cd9a3ff68bb6fd5073df2c",
      "dimensions": {
        "width": 358,
        "height": 409
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-dark-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 356,
          "actualScrollLeft": 356,
          "pageScrollY": 8659,
          "documentRange": [
            8769,
            9178.109375
          ],
          "targetRange": [
            8768.609375,
            9178.109375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 409.109375
          }
        }
      }
    },
    {
      "id": "R19-PNG-58",
      "order": 58,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-dark-item2-x2-y0.png",
      "sha256": "e350222dfd0140b7ae335cb50d0c90f82d09f8d39856d4af3234e9c0f954cdf6",
      "dimensions": {
        "width": 358,
        "height": 409
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-dark-item2-x2-y0.png",
          "label": "item2",
          "requestedScrollLeft": 712,
          "actualScrollLeft": 712,
          "pageScrollY": 8659,
          "documentRange": [
            8769,
            9178.109375
          ],
          "targetRange": [
            8768.609375,
            9178.109375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 409.109375
          }
        }
      }
    },
    {
      "id": "R19-PNG-59",
      "order": 59,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-dark-item2-x3-y0.png",
      "sha256": "6e5ef9d33080ef8b558e743eaf4918d5985958a1fcf64f5b24cf800eb2462c13",
      "dimensions": {
        "width": 358,
        "height": 409
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-dark-item2-x3-y0.png",
          "label": "item2",
          "requestedScrollLeft": 968,
          "actualScrollLeft": 968,
          "pageScrollY": 8659,
          "documentRange": [
            8769,
            9178.109375
          ],
          "targetRange": [
            8768.609375,
            9178.109375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 409.109375
          }
        }
      }
    },
    {
      "id": "R19-PNG-60",
      "order": 60,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-1440-dark-top.png",
      "sha256": "629876148479c8a1104597ac7dbebe3ed1d852315cc685da59164d01f5bbe049",
      "dimensions": {
        "width": 1440,
        "height": 1000
      },
      "kind": "viewport",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R19-PNG-61",
      "order": 61,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-1440-dark-item0-x0-y0.png",
      "sha256": "a06f95f8d14823dfcbf5b457f545a2bdfb023e0ffd018e9a2e1d311702d73122",
      "dimensions": {
        "width": 788,
        "height": 391
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-1440-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 667,
          "documentRange": [
            777.328125,
            1168.9375
          ],
          "targetRange": [
            777.328125,
            1168.9375
          ],
          "clip": {
            "x": 324,
            "y": 110.328125,
            "width": 788,
            "height": 391.609375
          }
        }
      }
    },
    {
      "id": "R19-PNG-62",
      "order": 62,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-1440-dark-item1-x0-y0.png",
      "sha256": "ee5f6c4358b813c2876f603639a16cf616eee7bdcca96e0454b7eead30d410f8",
      "dimensions": {
        "width": 788,
        "height": 270
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-1440-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1564,
          "documentRange": [
            1674,
            1944.9375
          ],
          "targetRange": [
            1673.9375,
            1944.9375
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 270.9375
          }
        }
      }
    },
    {
      "id": "R19-PNG-63",
      "order": 63,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-1440-dark-item2-x0-y0.png",
      "sha256": "a78cebc6ac4f1cc1e8562b093b64a4558e30e5cde574f8b8b54ac77e3e913b23",
      "dimensions": {
        "width": 788,
        "height": 409
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-1440-dark-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 5992,
          "documentRange": [
            6102.109375,
            6511.609375
          ],
          "targetRange": [
            6102.109375,
            6511.609375
          ],
          "clip": {
            "x": 324,
            "y": 110.109375,
            "width": 788,
            "height": 409.5
          }
        }
      }
    },
    {
      "id": "R19-PNG-64",
      "order": 64,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-1440-dark-item2-x1-y0.png",
      "sha256": "5cd2c3c812b9674947c7077f836e40b9e4a48a5dccff07e06e71bfe98faf547b",
      "dimensions": {
        "width": 788,
        "height": 409
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-1440-dark-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 538,
          "actualScrollLeft": 538,
          "pageScrollY": 5992,
          "documentRange": [
            6102.109375,
            6511.609375
          ],
          "targetRange": [
            6102.109375,
            6511.609375
          ],
          "clip": {
            "x": 324,
            "y": 110.109375,
            "width": 788,
            "height": 409.5
          }
        }
      }
    },
    {
      "id": "R19-PNG-65",
      "order": 65,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-light-top.png",
      "sha256": "7f2111962b1583c827d4a7f2a36edaec96b5c12afa41c24dd6cf0a67555ad28a",
      "dimensions": {
        "width": 390,
        "height": 844
      },
      "kind": "viewport",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R19-PNG-66",
      "order": 66,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-light-item0-x0-y0.png",
      "sha256": "6ba85f3499aeee0dabc92af7766c27fdfed10ca52b34d51e8b356f0785688ed7",
      "dimensions": {
        "width": 358,
        "height": 602
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 974,
          "documentRange": [
            1084.46875,
            1686.703125
          ],
          "targetRange": [
            1084.46875,
            1686.703125
          ],
          "clip": {
            "x": 16,
            "y": 110.46875,
            "width": 358,
            "height": 602.234375
          }
        }
      }
    },
    {
      "id": "R19-PNG-67",
      "order": 67,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-light-item0-x1-y0.png",
      "sha256": "8d9f95d0069b282287630a535bd4b883e38d7cff9c94bd952fe7ecdb419e86ce",
      "dimensions": {
        "width": 358,
        "height": 602
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-light-item0-x1-y0.png",
          "label": "item0",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 974,
          "documentRange": [
            1084.46875,
            1686.703125
          ],
          "targetRange": [
            1084.46875,
            1686.703125
          ],
          "clip": {
            "x": 16,
            "y": 110.46875,
            "width": 358,
            "height": 602.234375
          }
        }
      }
    },
    {
      "id": "R19-PNG-68",
      "order": 68,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-light-item1-x0-y0.png",
      "sha256": "be7fb323ba5fa7e8a7b84ec7f60194bee150417b54df9171b8feae9b2f231e54",
      "dimensions": {
        "width": 358,
        "height": 271
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2336,
          "documentRange": [
            2446.09375,
            2717.09375
          ],
          "targetRange": [
            2446.09375,
            2717.09375
          ],
          "clip": {
            "x": 16,
            "y": 110.09375,
            "width": 358,
            "height": 271
          }
        }
      }
    },
    {
      "id": "R19-PNG-69",
      "order": 69,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-light-item2-x0-y0.png",
      "sha256": "d36327a10acc3c246d0588697dec5aad103961d837d04c688e1272f0f2c6437f",
      "dimensions": {
        "width": 358,
        "height": 409
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-light-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 8659,
          "documentRange": [
            8769,
            9178.109375
          ],
          "targetRange": [
            8768.609375,
            9178.109375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 409.109375
          }
        }
      }
    },
    {
      "id": "R19-PNG-70",
      "order": 70,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-light-item2-x1-y0.png",
      "sha256": "1606e88837e94a475e86b9900b0ec6b624cebb4fe7646e177d8de474d31ea182",
      "dimensions": {
        "width": 358,
        "height": 409
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-light-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 356,
          "actualScrollLeft": 356,
          "pageScrollY": 8659,
          "documentRange": [
            8769,
            9178.109375
          ],
          "targetRange": [
            8768.609375,
            9178.109375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 409.109375
          }
        }
      }
    },
    {
      "id": "R19-PNG-71",
      "order": 71,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-light-item2-x2-y0.png",
      "sha256": "9fabb39b20344cb9dc2dd76af83b503c894efff795fe40922c4f8a09d10d06ff",
      "dimensions": {
        "width": 358,
        "height": 409
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-light-item2-x2-y0.png",
          "label": "item2",
          "requestedScrollLeft": 712,
          "actualScrollLeft": 712,
          "pageScrollY": 8659,
          "documentRange": [
            8769,
            9178.109375
          ],
          "targetRange": [
            8768.609375,
            9178.109375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 409.109375
          }
        }
      }
    },
    {
      "id": "R19-PNG-72",
      "order": 72,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-light-item2-x3-y0.png",
      "sha256": "772718b6c26bef62df04fc823f812b6a9c7d4e8f6256ad172e1a11e851d5e418",
      "dimensions": {
        "width": 358,
        "height": 409
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/code-review-ci-cd",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/code-review-ci-cd-390-light-item2-x3-y0.png",
          "label": "item2",
          "requestedScrollLeft": 968,
          "actualScrollLeft": 968,
          "pageScrollY": 8659,
          "documentRange": [
            8769,
            9178.109375
          ],
          "targetRange": [
            8768.609375,
            9178.109375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 409.109375
          }
        }
      }
    },
    {
      "id": "R19-PNG-73",
      "order": 73,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-light-top.png",
      "sha256": "fd99eba8140165b4716c1d593e1b0de5e4b1dc12471ae5cca07f4f3d16254f4f",
      "dimensions": {
        "width": 1440,
        "height": 1000
      },
      "kind": "viewport",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R19-PNG-74",
      "order": 74,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-light-item0-x0-y0.png",
      "sha256": "71243d9553a61c021255d32d0b2b1452a654ca0b07e61fd9cec87248405e47ed",
      "dimensions": {
        "width": 788,
        "height": 182
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1028,
          "documentRange": [
            1138.328125,
            1320.96875
          ],
          "targetRange": [
            1138.328125,
            1320.96875
          ],
          "clip": {
            "x": 324,
            "y": 110.328125,
            "width": 788,
            "height": 182.640625
          }
        }
      }
    },
    {
      "id": "R19-PNG-75",
      "order": 75,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-light-item1-x0-y0.png",
      "sha256": "d7075c32917a92162ff2a36f04f58faa8e6aa235aaab3de88e296dc8afe153aa",
      "dimensions": {
        "width": 788,
        "height": 172
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1695,
          "documentRange": [
            1805,
            1977.5625
          ],
          "targetRange": [
            1804.5625,
            1977.5625
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 172.5625
          }
        }
      }
    },
    {
      "id": "R19-PNG-76",
      "order": 76,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-light-item2-x0-y0.png",
      "sha256": "0d4b39885332f28f6b8a9cb8ee7850aeb85f9fbdc61d6f8869caa311b01d2d1f",
      "dimensions": {
        "width": 788,
        "height": 216
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-light-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3338,
          "documentRange": [
            3448,
            3664.59375
          ],
          "targetRange": [
            3447.953125,
            3664.59375
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 216.59375
          }
        }
      }
    },
    {
      "id": "R19-PNG-77",
      "order": 77,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-light-item3-x0-y0.png",
      "sha256": "b41f8c454bb82c0d681492d505c738c93a1a375d9ce820d165786cee28d5bb10",
      "dimensions": {
        "width": 788,
        "height": 259
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-light-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 5040,
          "documentRange": [
            5150,
            5409.546875
          ],
          "targetRange": [
            5149.578125,
            5409.546875
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 259.546875
          }
        }
      }
    },
    {
      "id": "R19-PNG-78",
      "order": 78,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-light-item4-x0-y0.png",
      "sha256": "5c51d924bc5c72cb255482e7666fa2af11a44bd2707241f64a5ef2d0128a290e",
      "dimensions": {
        "width": 788,
        "height": 483
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-light-item4-x0-y0.png",
          "label": "item4",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 6747,
          "documentRange": [
            6857.234375,
            7340.234375
          ],
          "targetRange": [
            6857.234375,
            7340.234375
          ],
          "clip": {
            "x": 324,
            "y": 110.234375,
            "width": 788,
            "height": 483
          }
        }
      }
    },
    {
      "id": "R19-PNG-79",
      "order": 79,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-light-item4-x1-y0.png",
      "sha256": "85d12fec301253135630092169bbc4ccec8fabab69e8fdc5e436a33530cbad87",
      "dimensions": {
        "width": 788,
        "height": 483
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-light-item4-x1-y0.png",
          "label": "item4",
          "requestedScrollLeft": 182,
          "actualScrollLeft": 182,
          "pageScrollY": 6747,
          "documentRange": [
            6857.234375,
            7340.234375
          ],
          "targetRange": [
            6857.234375,
            7340.234375
          ],
          "clip": {
            "x": 324,
            "y": 110.234375,
            "width": 788,
            "height": 483
          }
        }
      }
    },
    {
      "id": "R19-PNG-80",
      "order": 80,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-dark-top.png",
      "sha256": "8129bec381a9a2d53abace64e3b5831d7f2d429aaf9f29a9af9132c9e6e104a0",
      "dimensions": {
        "width": 390,
        "height": 844
      },
      "kind": "viewport",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R19-PNG-81",
      "order": 81,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-dark-item0-x0-y0.png",
      "sha256": "bad6cb4a70e8d6042b553d4256318dace8ce529075c93e51a316d5a9a313bfb8",
      "dimensions": {
        "width": 358,
        "height": 314
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1422,
          "documentRange": [
            1532,
            1846.140625
          ],
          "targetRange": [
            1531.859375,
            1846.140625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 314.140625
          }
        }
      }
    },
    {
      "id": "R19-PNG-82",
      "order": 82,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-dark-item0-x1-y0.png",
      "sha256": "a90d2c6e067b82a50e2c809f55fe3f8ba4418f7d7e4cadab8c2f48e8257c6a54",
      "dimensions": {
        "width": 358,
        "height": 314
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-dark-item0-x1-y0.png",
          "label": "item0",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 1422,
          "documentRange": [
            1532,
            1846.140625
          ],
          "targetRange": [
            1531.859375,
            1846.140625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 314.140625
          }
        }
      }
    },
    {
      "id": "R19-PNG-83",
      "order": 83,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-dark-item1-x0-y0.png",
      "sha256": "f1060fffca21323739c248d932040ec8430f2027d89080c8c07c41ffecd4fec1",
      "dimensions": {
        "width": 358,
        "height": 189
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2352,
          "documentRange": [
            2462.03125,
            2651.03125
          ],
          "targetRange": [
            2462.03125,
            2651.03125
          ],
          "clip": {
            "x": 16,
            "y": 110.03125,
            "width": 358,
            "height": 189
          }
        }
      }
    },
    {
      "id": "R19-PNG-84",
      "order": 84,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-dark-item1-x1-y0.png",
      "sha256": "36e6ce7f6f7158ec0757478f9d937c50cb800a0ff44f8875857d8d46c60ed41d",
      "dimensions": {
        "width": 358,
        "height": 189
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-dark-item1-x1-y0.png",
          "label": "item1",
          "requestedScrollLeft": 324,
          "actualScrollLeft": 324,
          "pageScrollY": 2352,
          "documentRange": [
            2462.03125,
            2651.03125
          ],
          "targetRange": [
            2462.03125,
            2651.03125
          ],
          "clip": {
            "x": 16,
            "y": 110.03125,
            "width": 358,
            "height": 189
          }
        }
      }
    },
    {
      "id": "R19-PNG-85",
      "order": 85,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-dark-item2-x0-y0.png",
      "sha256": "a5bdf59bb0a2eb2199cb8c9324950127c86f1e5deefbf59575014630d8ce7035",
      "dimensions": {
        "width": 358,
        "height": 427
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-dark-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 4672,
          "documentRange": [
            4782.296875,
            5209.5625
          ],
          "targetRange": [
            4782.296875,
            5209.5625
          ],
          "clip": {
            "x": 16,
            "y": 110.296875,
            "width": 358,
            "height": 427.265625
          }
        }
      }
    },
    {
      "id": "R19-PNG-86",
      "order": 86,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-dark-item2-x1-y0.png",
      "sha256": "5654c1b8daff04b93d711cd96efbb4bc1c04ff07be2b70d1c08950350f67e2f8",
      "dimensions": {
        "width": 358,
        "height": 427
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-dark-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 26,
          "actualScrollLeft": 26,
          "pageScrollY": 4672,
          "documentRange": [
            4782.296875,
            5209.5625
          ],
          "targetRange": [
            4782.296875,
            5209.5625
          ],
          "clip": {
            "x": 16,
            "y": 110.296875,
            "width": 358,
            "height": 427.265625
          }
        }
      }
    },
    {
      "id": "R19-PNG-87",
      "order": 87,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-dark-item3-x0-y0.png",
      "sha256": "80d6f1e429bc7d2eeb75fa7611033bfd384d03eee3f84aed3561d41756032861",
      "dimensions": {
        "width": 358,
        "height": 444
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-dark-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 7122,
          "documentRange": [
            7232,
            7676
          ],
          "targetRange": [
            7231.734375,
            7676
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 444
          }
        }
      }
    },
    {
      "id": "R19-PNG-88",
      "order": 88,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-dark-item3-x1-y0.png",
      "sha256": "dfc9616373030f0c2f32ae5231c8100f219f7f476e8cbf4755c9c7d64998e4e5",
      "dimensions": {
        "width": 358,
        "height": 444
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-dark-item3-x1-y0.png",
          "label": "item3",
          "requestedScrollLeft": 26,
          "actualScrollLeft": 26,
          "pageScrollY": 7122,
          "documentRange": [
            7232,
            7676
          ],
          "targetRange": [
            7231.734375,
            7676
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 444
          }
        }
      }
    },
    {
      "id": "R19-PNG-89",
      "order": 89,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-dark-item4-x0-y0.png",
      "sha256": "6eadc7b0e555c253e3aa61777eea646303cb144ec9b29d07d26d75d8ea84a2fb",
      "dimensions": {
        "width": 358,
        "height": 483
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-dark-item4-x0-y0.png",
          "label": "item4",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 9658,
          "documentRange": [
            9768.375,
            10251.375
          ],
          "targetRange": [
            9768.375,
            10251.375
          ],
          "clip": {
            "x": 16,
            "y": 110.375,
            "width": 358,
            "height": 483
          }
        }
      }
    },
    {
      "id": "R19-PNG-90",
      "order": 90,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-dark-item4-x1-y0.png",
      "sha256": "aceafa507aef42e650cf373376296c4d40ccf85abb1912a3ffc5d2f23b058591",
      "dimensions": {
        "width": 358,
        "height": 483
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-dark-item4-x1-y0.png",
          "label": "item4",
          "requestedScrollLeft": 356,
          "actualScrollLeft": 356,
          "pageScrollY": 9658,
          "documentRange": [
            9768.375,
            10251.375
          ],
          "targetRange": [
            9768.375,
            10251.375
          ],
          "clip": {
            "x": 16,
            "y": 110.375,
            "width": 358,
            "height": 483
          }
        }
      }
    },
    {
      "id": "R19-PNG-91",
      "order": 91,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-dark-item4-x2-y0.png",
      "sha256": "81599919d25d56b444548822bba9ee5ec60a16651779b9cdd6bc3c797a01a964",
      "dimensions": {
        "width": 358,
        "height": 483
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-dark-item4-x2-y0.png",
          "label": "item4",
          "requestedScrollLeft": 612,
          "actualScrollLeft": 612,
          "pageScrollY": 9658,
          "documentRange": [
            9768.375,
            10251.375
          ],
          "targetRange": [
            9768.375,
            10251.375
          ],
          "clip": {
            "x": 16,
            "y": 110.375,
            "width": 358,
            "height": 483
          }
        }
      }
    },
    {
      "id": "R19-PNG-92",
      "order": 92,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-dark-top.png",
      "sha256": "65a657a39b9d9f7dd995908c8f8bf3b13bca082dfd6bd44a2b936b80f8b69aed",
      "dimensions": {
        "width": 1440,
        "height": 1000
      },
      "kind": "viewport",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R19-PNG-93",
      "order": 93,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-dark-item0-x0-y0.png",
      "sha256": "723c45a4d81b18f6cc5b5c645b749ab164c09a40bb44e6fc0efe0e9bf06f9f2a",
      "dimensions": {
        "width": 788,
        "height": 182
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1028,
          "documentRange": [
            1138.328125,
            1320.96875
          ],
          "targetRange": [
            1138.328125,
            1320.96875
          ],
          "clip": {
            "x": 324,
            "y": 110.328125,
            "width": 788,
            "height": 182.640625
          }
        }
      }
    },
    {
      "id": "R19-PNG-94",
      "order": 94,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-dark-item1-x0-y0.png",
      "sha256": "23732746c26e12351353891a6ee82fb46be41e2b5408409b0a32d95818a0be98",
      "dimensions": {
        "width": 788,
        "height": 172
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1695,
          "documentRange": [
            1805,
            1977.5625
          ],
          "targetRange": [
            1804.5625,
            1977.5625
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 172.5625
          }
        }
      }
    },
    {
      "id": "R19-PNG-95",
      "order": 95,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-dark-item2-x0-y0.png",
      "sha256": "1c7e2375a78c1ae82fc8f5866362a8c93813d33a3e558785d50da0016951c75c",
      "dimensions": {
        "width": 788,
        "height": 216
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-dark-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3338,
          "documentRange": [
            3448,
            3664.59375
          ],
          "targetRange": [
            3447.953125,
            3664.59375
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 216.59375
          }
        }
      }
    },
    {
      "id": "R19-PNG-96",
      "order": 96,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-dark-item3-x0-y0.png",
      "sha256": "6e8deeed09054705cd1d402ad97c585dcc956dd93ad5679cbed1e386ecd2348d",
      "dimensions": {
        "width": 788,
        "height": 259
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-dark-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 5040,
          "documentRange": [
            5150,
            5409.546875
          ],
          "targetRange": [
            5149.578125,
            5409.546875
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 259.546875
          }
        }
      }
    },
    {
      "id": "R19-PNG-97",
      "order": 97,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-dark-item4-x0-y0.png",
      "sha256": "9d7704dd3485bc9990e6edaf8c72ab568ddadbec60e6785736f44878c7640029",
      "dimensions": {
        "width": 788,
        "height": 483
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-dark-item4-x0-y0.png",
          "label": "item4",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 6747,
          "documentRange": [
            6857.234375,
            7340.234375
          ],
          "targetRange": [
            6857.234375,
            7340.234375
          ],
          "clip": {
            "x": 324,
            "y": 110.234375,
            "width": 788,
            "height": 483
          }
        }
      }
    },
    {
      "id": "R19-PNG-98",
      "order": 98,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-dark-item4-x1-y0.png",
      "sha256": "1a773d26c9e4b447213181b492112df21066da11a2bb02e772d9d1155997334c",
      "dimensions": {
        "width": 788,
        "height": 483
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-1440-dark-item4-x1-y0.png",
          "label": "item4",
          "requestedScrollLeft": 182,
          "actualScrollLeft": 182,
          "pageScrollY": 6747,
          "documentRange": [
            6857.234375,
            7340.234375
          ],
          "targetRange": [
            6857.234375,
            7340.234375
          ],
          "clip": {
            "x": 324,
            "y": 110.234375,
            "width": 788,
            "height": 483
          }
        }
      }
    },
    {
      "id": "R19-PNG-99",
      "order": 99,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-light-top.png",
      "sha256": "44df6575c8b828e598b4b140ae226a6a3949f23cfca5344a6f823afcd412ea53",
      "dimensions": {
        "width": 390,
        "height": 844
      },
      "kind": "viewport",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R19-PNG-100",
      "order": 100,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-light-item0-x0-y0.png",
      "sha256": "6a1c736a50a35398defa407773b133dcaaf6305c2d591cf868f7e283acef53fd",
      "dimensions": {
        "width": 358,
        "height": 314
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1422,
          "documentRange": [
            1532,
            1846.140625
          ],
          "targetRange": [
            1531.859375,
            1846.140625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 314.140625
          }
        }
      }
    },
    {
      "id": "R19-PNG-101",
      "order": 101,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-light-item0-x1-y0.png",
      "sha256": "5b32d139ee68cccc54281c23521b0d5734b9159ecac69850977264a11e76aa4d",
      "dimensions": {
        "width": 358,
        "height": 314
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-light-item0-x1-y0.png",
          "label": "item0",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 1422,
          "documentRange": [
            1532,
            1846.140625
          ],
          "targetRange": [
            1531.859375,
            1846.140625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 314.140625
          }
        }
      }
    },
    {
      "id": "R19-PNG-102",
      "order": 102,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-light-item1-x0-y0.png",
      "sha256": "578d0e02b4babfc41d8acd8bd38e9b8c48bf28dddcc48412fd635ac830134888",
      "dimensions": {
        "width": 358,
        "height": 189
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2352,
          "documentRange": [
            2462.03125,
            2651.03125
          ],
          "targetRange": [
            2462.03125,
            2651.03125
          ],
          "clip": {
            "x": 16,
            "y": 110.03125,
            "width": 358,
            "height": 189
          }
        }
      }
    },
    {
      "id": "R19-PNG-103",
      "order": 103,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-light-item1-x1-y0.png",
      "sha256": "a270f91d2442bc457f51bef0ac78df7905b74007b1bc5052e99fb0107c3fba57",
      "dimensions": {
        "width": 358,
        "height": 189
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-light-item1-x1-y0.png",
          "label": "item1",
          "requestedScrollLeft": 324,
          "actualScrollLeft": 324,
          "pageScrollY": 2352,
          "documentRange": [
            2462.03125,
            2651.03125
          ],
          "targetRange": [
            2462.03125,
            2651.03125
          ],
          "clip": {
            "x": 16,
            "y": 110.03125,
            "width": 358,
            "height": 189
          }
        }
      }
    },
    {
      "id": "R19-PNG-104",
      "order": 104,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-light-item2-x0-y0.png",
      "sha256": "f329eb84d827c9f4d378065bf2e5f948d60d962802a0ef5d215983df32447ea8",
      "dimensions": {
        "width": 358,
        "height": 427
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-light-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 4672,
          "documentRange": [
            4782.296875,
            5209.5625
          ],
          "targetRange": [
            4782.296875,
            5209.5625
          ],
          "clip": {
            "x": 16,
            "y": 110.296875,
            "width": 358,
            "height": 427.265625
          }
        }
      }
    },
    {
      "id": "R19-PNG-105",
      "order": 105,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-light-item2-x1-y0.png",
      "sha256": "0ca8ee7b0f8a2d7b58ce4620e34a372e3ee68957ec31abb8575ea76194b36ee8",
      "dimensions": {
        "width": 358,
        "height": 427
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-light-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 26,
          "actualScrollLeft": 26,
          "pageScrollY": 4672,
          "documentRange": [
            4782.296875,
            5209.5625
          ],
          "targetRange": [
            4782.296875,
            5209.5625
          ],
          "clip": {
            "x": 16,
            "y": 110.296875,
            "width": 358,
            "height": 427.265625
          }
        }
      }
    },
    {
      "id": "R19-PNG-106",
      "order": 106,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-light-item3-x0-y0.png",
      "sha256": "031da6f8089f26d8c0f900ee5dd319f943b6a7f58dbd31040be04f2257feba74",
      "dimensions": {
        "width": 358,
        "height": 444
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-light-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 7122,
          "documentRange": [
            7232,
            7676
          ],
          "targetRange": [
            7231.734375,
            7676
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 444
          }
        }
      }
    },
    {
      "id": "R19-PNG-107",
      "order": 107,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-light-item3-x1-y0.png",
      "sha256": "49d9f665f8c273a90553e45dfc8d9868f8f585a0c26356aae2f9b6496cba961f",
      "dimensions": {
        "width": 358,
        "height": 444
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-light-item3-x1-y0.png",
          "label": "item3",
          "requestedScrollLeft": 26,
          "actualScrollLeft": 26,
          "pageScrollY": 7122,
          "documentRange": [
            7232,
            7676
          ],
          "targetRange": [
            7231.734375,
            7676
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 444
          }
        }
      }
    },
    {
      "id": "R19-PNG-108",
      "order": 108,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-light-item4-x0-y0.png",
      "sha256": "513f0266a32b749c40c7ffef48b91467a1246fd5d8405ab9cc334723b4da8fd8",
      "dimensions": {
        "width": 358,
        "height": 483
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-light-item4-x0-y0.png",
          "label": "item4",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 9658,
          "documentRange": [
            9768.375,
            10251.375
          ],
          "targetRange": [
            9768.375,
            10251.375
          ],
          "clip": {
            "x": 16,
            "y": 110.375,
            "width": 358,
            "height": 483
          }
        }
      }
    },
    {
      "id": "R19-PNG-109",
      "order": 109,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-light-item4-x1-y0.png",
      "sha256": "95e8af480257e44707368f786b7b8ec2a0000f22e854703e43fe3672941f64e9",
      "dimensions": {
        "width": 358,
        "height": 483
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-light-item4-x1-y0.png",
          "label": "item4",
          "requestedScrollLeft": 356,
          "actualScrollLeft": 356,
          "pageScrollY": 9658,
          "documentRange": [
            9768.375,
            10251.375
          ],
          "targetRange": [
            9768.375,
            10251.375
          ],
          "clip": {
            "x": 16,
            "y": 110.375,
            "width": 358,
            "height": 483
          }
        }
      }
    },
    {
      "id": "R19-PNG-110",
      "order": 110,
      "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-light-item4-x2-y0.png",
      "sha256": "4cc9cf977b51dc329ab2fb239e08ce86e0176dd3828eb9f073efbf5059913c3e",
      "dimensions": {
        "width": 358,
        "height": 483
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods/incremental-delivery",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r19-inputs-20261116-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r19-inputs-20261116-corrected-remaining/incremental-delivery-390-light-item4-x2-y0.png",
          "label": "item4",
          "requestedScrollLeft": 612,
          "actualScrollLeft": 612,
          "pageScrollY": 9658,
          "documentRange": [
            9768.375,
            10251.375
          ],
          "targetRange": [
            9768.375,
            10251.375
          ],
          "clip": {
            "x": 16,
            "y": 110.375,
            "width": 358,
            "height": 483
          }
        }
      }
    }
  ]
}
```
<!-- m5-r19-request:data:end -->
