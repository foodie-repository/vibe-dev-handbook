# R24 내비게이션18원고 — 고정 검토 요청

기준 e027ffc56864ad392bb664e29d19fc3539c9c8d3·고정일2026-11-16. 18대상 전체frontmatter/본문/목록/표/프롬프트/alt/교차링크를 실제 완독합니다. 모든 full_text_paths와 context_excerpts 명시 범위, 실제 원본PNG226개를 판독합니다. 원고 전체를 인접문맥 발췌나 이전PASS로 대체하지 않습니다.

공통 계약 C01~C12·한국어6절·9항목 루브릭을 내비게이션 역할로 적용합니다. 핵심 장의분량/10절을 강요하지 않고 적용외항목의 이유를 밝힙니다. 순차/검색학습·18허브의제목/순서/목적/다음이동·13장단일목록·용어/상태경계·두사례·그림/모바일판독/검색의 실제 관련성을 확인합니다. 직접근거는 현재저장소의59개제목/목표/헤딩/첫문단 명시발췌와원고원문입니다. 외부제품 기능의새확인이아니며 과거확인일·not-confirmed를갱신하지않습니다. Task21의옛Claude표기는폐기된역사조건이며현재차단/재개요건이아닙니다. 모바일단일OS Tab전체경로 not-confirmed는그대로입니다.

Controller/작성자/이전대화와분리된fresh gpt-6-astra/high 저장세션을실제로확인하고동일세션에서후속검토합니다. 공식ChatGPT구독·readOnly/networkfalse·도구/MCP비활성·history0을실행확인하며API키/별도과금/전역설정/인증변경/승계예외는없습니다. 응답만반환하고도구/웹/셸/쓰기/위임/커밋은금지합니다. 개인home경로와전체세션ID를결과에넣지마세요.

새페이지72상태212PNG(18경로×2너비×2테마)와검색8상태14PNG를localImage/detailoriginal로전달합니다. 대표정상6상태20PNG를유지하고reference잘못된anchor선택2상태8PNG는실패역사로보존,selector교정repair2상태6PNG·나머지64상태186PNG로보충했습니다. 합계72/212·132cropcoverageerrors0·실제finalgate7PASS이며원고/CSS/자산수정은없습니다. 최초정규식문법실패는브라우저실행전교정했습니다. 검색message의문서수와result-link항목수(하위앵커포함)는같지않습니다. 한국어/영문/SDD6검색이동은프로그램focus+Enter이며OS Tab접근성검증아닙니다. 긴문제문장검색은사용법의동일예시만찾았으며문제해결관련성성공으로선언하지않습니다. 모바일자연어명령예시의가로스크롤은판정대상이며분할캡처가UX해소가아닙니다. 원문PNG 전체를실제로읽고이미지별/묶음별관찰·한계를명시하세요.

R23build60/현재공개입력불변범위를재사용하며새build/전체사이트회귀를했다고세지않습니다. 전체18원고검토와준비코드/검사/렌더의C/I/M를구분합니다. 준비는review/M5/ready/공개완료가아니며최초정상결과는수정전별도보존·사후불변성감사를수행합니다.

<!-- m5-r24-request:data:start -->
```json
{
  "schema_version": 1,
  "review_id": "R24",
  "baseline_commit": "e027ffc56864ad392bb664e29d19fc3539c9c8d3",
  "targets": [
    "src/content/docs/index.md",
    "src/content/docs/start-here/index.md",
    "src/content/docs/start-here/how-to-use-this-guide.md",
    "src/content/docs/start-here/learning-paths.md",
    "src/content/docs/start-here/why-this-guide.md",
    "src/content/docs/01-mental-models/index.md",
    "src/content/docs/02-work-environment/index.md",
    "src/content/docs/03-full-stack/index.md",
    "src/content/docs/04-backend-data/index.md",
    "src/content/docs/05-frontend/index.md",
    "src/content/docs/06-requirements-design/index.md",
    "src/content/docs/07-workflow-methods/index.md",
    "src/content/docs/08-quality/index.md",
    "src/content/docs/09-git-github/index.md",
    "src/content/docs/10-deployment-operations/index.md",
    "src/content/docs/11-ai-native/index.md",
    "src/content/docs/12-case-studies/index.md",
    "src/content/docs/reference/index.md"
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
    "src/content/docs/index.md",
    "src/content/docs/start-here/index.md",
    "src/content/docs/start-here/how-to-use-this-guide.md",
    "src/content/docs/start-here/learning-paths.md",
    "src/content/docs/start-here/why-this-guide.md",
    "src/content/docs/01-mental-models/index.md",
    "src/content/docs/02-work-environment/index.md",
    "src/content/docs/03-full-stack/index.md",
    "src/content/docs/04-backend-data/index.md",
    "src/content/docs/05-frontend/index.md",
    "src/content/docs/06-requirements-design/index.md",
    "src/content/docs/07-workflow-methods/index.md",
    "src/content/docs/08-quality/index.md",
    "src/content/docs/09-git-github/index.md",
    "src/content/docs/10-deployment-operations/index.md",
    "src/content/docs/11-ai-native/index.md",
    "src/content/docs/12-case-studies/index.md",
    "src/content/docs/reference/index.md",
    "research/public-beta-review-source-excerpts/r24-navigation-context-2026-11-16.md",
    "src/content/docs/reference/development-glossary.md",
    "src/content/docs/reference/agent-output-glossary.md",
    "research/meeting-webapp-case-brief.md",
    "src/assets/diagrams/learning-map.svg",
    "src/assets/diagrams/source/learning-map.mmd",
    "src/components/PageTitle.astro",
    "src/styles/custom.css",
    "astro.config.mjs",
    "src/content.config.ts",
    "WORKSPACE_MAP.md",
    "package.json",
    ".gitignore",
    "docs/project/reviews/public-beta-1/site-qa.md"
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
      "sha256": "150ab96e6383242b42f4cef02808a38cd41f0f6aeb1cdfd39665d3cd10f584e2",
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
      "path": "research/public-beta-source-gap-register.md",
      "sha256": "eefe11c1c41b74d3e01fa11dd403426584c4bb18dddbe8c1ca3782e4d05025bd",
      "segments": [
        {
          "start_line": 168,
          "end_line": 170,
          "text": "\nPBCA-001은 출처 공백이 아니라 폐기 사례 잔존 finding이므로 위 의미 감사와 Task 9에 연결합니다. PBSG-019는 실제 시장 데이터·권리, PBSG-026은 현재 교육용 데이터 개념의 출처 공백으로 서로 분리합니다. PBSG-020은 모임 캡스톤에서 실제 제품 세부를 채택할 경우 닫아야 하는 선제 공백입니다. Task 11은 탐색·내비게이션 정렬 작업이라 이번 SOURCE 주장 묶음의 목표 작업으로 배정하지 않습니다.\n"
        }
      ]
    },
    {
      "path": "docs/project/public-beta-content-audit.md",
      "sha256": "5b9bbec64eca339ee0b0a3c82be50c262120d6fe493c57e7963f79dc9215a608",
      "segments": [
        {
          "start_line": 27,
          "end_line": 46,
          "text": "|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|\n| PB-001 | `src/content/docs/index.md` | navigation | 이 핸드북은 무엇을 위해 어떤 순서로 읽는가? | 목적·비목표와 세 학습 경로를 선택한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 20 resolved | 홈은 완전한 목록을 복제하지 않고 공식 13장 Build Track을 참조하도록 정렬했습니다. learning-map의 marker와 390px 판독성은 Task 20 `e43d112`와 실제 Chrome 6상태·Codex `PASS`로 교정됐습니다. |\n| PB-002 | `src/content/docs/start-here/index.md` | navigation | 첫 학습을 어디서 시작하고 성공을 어떻게 판단하는가? | 시작 문서 세 개와 장기 판단 질문을 고른다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 11 | 짧은 시작 허브로서 링크·순서·성공 기준이 명확하므로 유지합니다. |\n| PB-003 | `src/content/docs/start-here/how-to-use-this-guide.md` | navigation | 읽은 내용을 프로젝트와 AI 작업에 어떻게 옮기는가? | 관계 지도와 작은 검증 루프로 학습을 적용한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 11 | 순차 학습과 검색 기반 선택 학습을 동등한 출발점으로 안내하고, 검색어 확장부터 관련 장의 정의·위치·판단 규칙까지 연결하므로 유지합니다. |\n| PB-004 | `src/content/docs/start-here/learning-paths.md` | navigation | 시간과 목적에 맞는 학습 경로는 무엇인가? | 빠른 지도·Build Track·Deep Track을 구분해 선택한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 11 | 승인된 모임 웹앱·교육용 주가 대시보드 체계, 기존 핵심 11장과 두 캡스톤의 정확한 순서, 현재 도구 참고편의 분리와 두 학습 출발점을 명시하므로 유지합니다. |\n| PB-005 | `src/content/docs/start-here/why-this-guide.md` | navigation | AI가 코드를 만들어도 왜 개발 기본기가 필요한가? | 화면 동작·운영 책임·전문가 경계를 구분한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 11 | 비유의 맞는 지점과 깨지는 지점, 증거 기반 작업 이유를 입문 독자에게 정확히 안내하므로 유지합니다. |\n| PB-006 | `src/content/docs/01-mental-models/index.md` | navigation | 시스템 사고 장에서 무엇부터 읽는가? | 네 문서의 관계와 순서를 찾는다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 11 | 섹션의 네 문서를 중복 없이 안내하는 허브이므로 유지합니다. |\n| PB-007 | `src/content/docs/02-work-environment/index.md` | navigation | 작업 환경의 핵심 문서는 무엇인가? | 파일·터미널·의존성 문서로 이동한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 11 | 작업 환경 세 문서의 범위와 링크가 일치하므로 유지합니다. |\n| PB-008 | `src/content/docs/03-full-stack/index.md` | navigation | 풀스택 흐름을 어떤 순서로 배우는가? | 클라이언트·HTTP·경계 문서로 이동한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 11 | 섹션 책임과 세 문서 링크가 명확하므로 유지합니다. |\n| PB-009 | `src/content/docs/04-backend-data/index.md` | navigation | 백엔드와 데이터의 책임을 어디서 배우는가? | API·데이터 모델·상태 문서로 이동한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 11 | 백엔드·데이터 세 문서의 탐색 허브 역할이 적절하므로 유지합니다. |\n| PB-010 | `src/content/docs/05-frontend/index.md` | navigation | 프런트엔드의 화면·상태·접근성을 어디서 배우는가? | 세 프런트엔드 문서로 이동한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 11 | 섹션 링크와 학습 범위가 일치하므로 유지합니다. |\n| PB-011 | `src/content/docs/06-requirements-design/index.md` | navigation | 요구와 설계 문서를 어떤 관계로 읽는가? | PRD·아키텍처·ADR 문서로 이동한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 11 | 세 문서의 구분과 링크가 명확하므로 유지합니다. |\n| PB-012 | `src/content/docs/07-workflow-methods/index.md` | navigation | 개발 절차와 협업 흐름을 어디서 배우는가? | SDLC·점진 전달·리뷰 문서로 이동한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 11 | 섹션 순서와 대상 문서가 일치하므로 유지합니다. |\n| PB-013 | `src/content/docs/08-quality/index.md` | navigation | 품질·디버깅·안전 문서를 어떻게 찾는가? | 테스트·관측·성능·보안 문서로 이동한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 11 | 품질 섹션의 세 문서 링크가 정확하므로 유지합니다. |\n| PB-014 | `src/content/docs/09-git-github/index.md` | navigation | Git 학습을 어떤 순서로 진행하는가? | Git·브랜치·복구 문서로 이동한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 11 | Git 섹션의 탐색 역할에 맞고 핵심·후속 문서를 분명히 구분하므로 유지합니다. |\n| PB-015 | `src/content/docs/10-deployment-operations/index.md` | navigation | 배포와 운영의 핵심 문서는 무엇인가? | 빌드·설정·운영 문서로 이동한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 11 | 배포·설정·운영의 세 책임으로 안정적으로 안내하므로 유지합니다. |\n| PB-016 | `src/content/docs/11-ai-native/index.md` | navigation | AI 네이티브 개발 문서를 어떤 순서로 읽는가? | 작업 계약·컨텍스트·권한·검증 문서로 이동한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 11 | 네 문서의 관계와 순서가 명확한 허브이므로 유지합니다. |\n| PB-017 | `src/content/docs/12-case-studies/index.md` | navigation | 앞선 개념을 어떤 사례로 종합하는가? | 두 캡스톤 사례로 이동한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 11 | 상태를 바꾸는 일반 개발과 데이터를 변환하는 분석의 책임 차이를 먼저 설명하고 모임 웹앱·교육용 주가 fixture로 연결하므로 유지합니다. |\n| PB-018 | `src/content/docs/reference/index.md` | navigation | 낯선 용어와 점검 기준을 어디서 찾는가? | 참고 문서들의 용도를 구분한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 11 | 두 용어집·방법론 지도·체크리스트·날짜 있는 현재 도구 매핑의 서로 다른 용도와 다의어 주의가 명확하므로 유지합니다. |\n| PB-019 | `src/content/docs/01-mental-models/abstraction-and-tradeoffs.md` | core | 추상화가 무엇을 숨기고 어떤 비용을 만드는가? | 추상화 경계와 선택 비용을 설명한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 12 | 정확한 정의·비유 한계·계층·책임·비용·누수·과소/과잉 추상화·가역성·실패 복구·AI 검토를 보강하고 PBSG-001의 세 원고 전체 주장 묶음을 공식·1차 출처로 확인해 SOURCE를 닫았습니다. |"
        }
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "sha256": "64f675aaafc2feac638dbd3162ce57311851787e2c8350e8ad7fefc49c4247ec",
      "segments": [
        {
          "start_line": 445,
          "end_line": 469,
          "text": "      \"id\": \"R23\",\n      \"slug\": \"ai-support\",\n      \"method\": \"소묶음\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/11-ai-native/agent-review-and-verification.md\", \"src/content/docs/11-ai-native/context-spec-harness-loop.md\", \"src/content/docs/11-ai-native/permissions-sandbox-worktrees.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r23-ai-support-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r23-ai-support-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r23-ai-support-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r23-ai-support-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r23-ai-support-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r23-ai-support-input-manifest.json\",\"source_checked_at\":\"2026-11-16\",\"combined_sha256\":\"cae85ed2b9ab927efd2bd226eea7a597d315768dbe8591a7b5ed0e8fb9a69cea\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important3-minor3-preparation-minor1-resolved-after-fix1\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"099b6ae0c9bbefa18a5fa48df092634ea9424faa5b6c8b5e573a6dbb64da2be1\",\"current_target_sha256\":\"b362a31b7397b97b7f4652bf0b6c9e5ffd696d7f8c9e4c634711b3400d992741\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r23-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r23-ai-support-codex-rereview.md\",\"next_scope\":\"R24 pending; no M5/ready/public approval\",\"target_hashes\":[{\"path\":\"src/content/docs/11-ai-native/agent-review-and-verification.md\",\"reviewed_sha256\":\"099b6ae0c9bbefa18a5fa48df092634ea9424faa5b6c8b5e573a6dbb64da2be1\",\"current_sha256\":\"b362a31b7397b97b7f4652bf0b6c9e5ffd696d7f8c9e4c634711b3400d992741\"},{\"path\":\"src/content/docs/11-ai-native/context-spec-harness-loop.md\",\"reviewed_sha256\":\"598c5c2eccff8f1111dbc7a0f6f525204de55e103d6ebe82ad4de9e84b6d3461\",\"current_sha256\":\"b0b441d1bde4ac968d75561523834bee6f36cd22384cedf83aab6018f6b1e725\"},{\"path\":\"src/content/docs/11-ai-native/permissions-sandbox-worktrees.md\",\"reviewed_sha256\":\"4ea123ba72d960995cfd8b7c486213feb3be25344a44a0df34a543928ff96c66\",\"current_sha256\":\"e3f1aefb39a8fdb748ff10208c1b8c5d84f323a953154484814c19539fc4c6f6\"}]}\n    },\n    {\n      \"id\": \"R24\",\n      \"slug\": \"navigation\",\n      \"method\": \"내비게이션 묶음\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/index.md\", \"src/content/docs/start-here/index.md\", \"src/content/docs/start-here/how-to-use-this-guide.md\", \"src/content/docs/start-here/learning-paths.md\", \"src/content/docs/start-here/why-this-guide.md\", \"src/content/docs/01-mental-models/index.md\", \"src/content/docs/02-work-environment/index.md\", \"src/content/docs/03-full-stack/index.md\", \"src/content/docs/04-backend-data/index.md\", \"src/content/docs/05-frontend/index.md\", \"src/content/docs/06-requirements-design/index.md\", \"src/content/docs/07-workflow-methods/index.md\", \"src/content/docs/08-quality/index.md\", \"src/content/docs/09-git-github/index.md\", \"src/content/docs/10-deployment-operations/index.md\", \"src/content/docs/11-ai-native/index.md\", \"src/content/docs/12-case-studies/index.md\", \"src/content/docs/reference/index.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r24-navigation-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r24-navigation-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r24-navigation-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md\"\n    },\n    {\n      \"id\": \"R25\",\n      \"slug\": \"reference\","
        }
      ]
    },
    {
      "path": "docs/project/public-beta-visual-audit.md",
      "sha256": "fa8fb01ec74718c80f81e5c016f212a7629c61f218591cc742551f144dfd98e4",
      "segments": [
        {
          "start_line": 19,
          "end_line": 21,
          "text": "|---|---|---|---|---|---|---:|---:|---|---|---|---|---|---|---|---|\n| PBV-01 `learning-map` | `src/assets/diagrams/learning-map.svg` | `src/assets/diagrams/source/learning-map.mmd` | PB-001 `index.md` | 시스템 사고부터 AI 네이티브까지 어떤 순서로 배우는가? | 세로 권장 단계 흐름 | 7 | 6 | 같은 위계 1그룹 | 고유 title/desc·alt·앞 질문/뒤 강제 선행·숙련 비증명 범위 일치. | `480×960`, viewBox·width·height 일치 | 2026-08-28 실제Chrome6상태, mobile358×716px core20.88/detail17.9/note14.92px 판독·잘림0. 이전보다 약600px 길어진 절충. | 명시light/dark marker2와 선이 일치하고 번호·실선 범례를 유지합니다. | reflow | diagram-design | `e43d112`; Codex `PASS` C0/I0/M0; PBVA-003·004 자산 조건 충족; Claude pending |\n| PBV-02 `analytics-dashboard-architecture` | `src/assets/diagrams/analytics-dashboard-architecture.svg` | `src/assets/diagrams/source/analytics-dashboard-architecture.mmd` | PB-021 `software-is-a-system.md`; PB-053 `analytics-dashboard-case-study.md` | fixture/승인 원천이 품질·저장·전달·UI·운영 증거로 어떻게 이어지는가? | 세로 단계+피드백 | 7 | 7 | 품질·UI 2그룹 | 고유 title·desc·role·aria, 기존 두 alt와 앞뒤 원고의 책임·한계는 불변입니다. | `560×1108`, viewBox·width·height 일치 | 2026-08-28 실제 Chrome12상태: 모바일358×708px, 핵심 약14.7px·보조 약11.5px를 원본 크기로 판독했습니다. | explicit light/dark marker4와 주 흐름·점선 피드백·박스·글자가 전환됩니다. | reflow | diagram-design | `aa13701`; Codex `PASS` C0/I0/M0; PBVA-004 자산 조건 충족; Claude pending |"
        },
        {
          "start_line": 60,
          "end_line": 62,
          "text": "|---|---|---|---|\n| PBV-01 | `/` | learning-map | 3 viewport×2 theme 6상태·원본 화면 확인; marker·모바일 판독·overflow 결함 0; Codex PASS |\n| PBV-02A | `/01-mental-models/software-is-a-system/` | analytics-dashboard-architecture | 3 viewport×2 theme 6상태·원본 화면 확인; 모바일 판독·overflow 결함 0; Codex PASS |"
        },
        {
          "start_line": 83,
          "end_line": 86,
          "text": "| PBVA-002 | Important (resolved) | PBV-04, PBV-05, PBV-06, PBV-10 | Task 6에서 관찰한 SVG·source·원고 topology 차이를 네 자산의 학습 질문에 맞춰 함께 교정했습니다. context의 책임 연결, deploy의 콘텐츠/이름 조회 분리, full-stack의 저장소/외부 서비스 독립 분기, PRD의 분기·수렴·대표 피드백이 현재 SVG·Mermaid·alt·앞뒤 설명에서 일치합니다. | 현재 의미 동기화를 유지하고 후속 변경 시 SVG·Mermaid·원고를 같은 단위에서 검증합니다. | Task 20 resolved | 네 자산별 focused semantic 검사와 실제 Chrome 36상태, 각각의 별도 Codex `PASS` C0/I0/M0, 전체 참조·빌드 검사와 합동 closeout 재검토를 통과했습니다. |\n| PBVA-003 | Important (resolved) | PBV-01, PBV-04, PBV-05, PBV-06, PBV-07, PBV-09, PBV-11, PBV-12 | 여덟 SVG의 marker fill을 주 흐름·반환·피드백 선 의미와 light/dark 테마에 맞는 명시적 변수·class로 연결했습니다. | 명시 marker와 참조 선의 동일 의미·가시색을 유지합니다. | Task 20 resolved | 여덟 자산의 실제 Chrome 60상태에서 화살촉 소실·대비 결함 0개를 원본 crop으로 확인했고, 자산별 Codex 최종 PASS와 합동 closeout 재검토가 C0/I0/M0였습니다. |\n| PBVA-004 | Important (resolved) | PBV-01, PBV-02, PBV-04, PBV-05, PBV-06, PBV-07, PBV-08, PBV-10, PBV-11 | 아홉 자산을 모바일 세로 재배치·관계 단순화·단계 묶음으로 교정해 실제 콘텐츠 폭 358px에서 핵심·보조 레이블과 관계를 기본 확대에서 읽을 수 있게 했습니다. | 현재 세로 레이아웃과 원고의 이동 세부·비증명 설명을 유지합니다. | Task 20 resolved | 아홉 자산의 실제 Chrome 72상태에서 핵심·보조 레이블 판독, 내부 겹침·잘림·전역 overflow 0개를 확인했고, 자산별 Codex 최종 PASS와 합동 closeout 재검토가 C0/I0/M0였습니다. |\n| PBVA-005 | Important (resolved) | PBV-11 | 그림 앞에 불확실성과 피드백을 읽는 질문을, 뒤에 선형 강제 절차가 아니며 운영·검증 증거가 앞 결정을 재검토하게 한다는 범위와 한계를 추가했습니다. | 질문·alt·6개 책임 묶음·대표 피드백 A/B·비증명 설명의 일치를 유지합니다. | Task 20 resolved | 원고·SVG·Mermaid 의미 검사, actual Chrome 6상태의 인접 문맥, 자산별 Codex PASS와 합동 closeout 재검토 C0/I0/M0를 확인했습니다. |"
        }
      ]
    }
  ],
  "render_provenance": {
    "manifest_path": "output/playwright/r24-inputs-20261116-observations.json",
    "manifest_sha256": "58684c5394f9f4a827a431ac7a2b902b4bb737f70ebea1fa6d4324951cc7ee62",
    "additional_context_manifests": [
      {
        "path": "output/playwright/r24-inputs-20261116-pilot/observations.json",
        "sha256": "0010cd25caabb86f07c5980310e03c041d8b399e149ebd921eaacca469c50dd2"
      },
      {
        "path": "output/playwright/r24-inputs-20261116-repair/observations.json",
        "sha256": "6998c4d7d9d70c1e354aff0feb69f87fc82a63f39ef2bf2527645e8fc7756607"
      },
      {
        "path": "output/playwright/r24-inputs-20261116-remaining/observations.json",
        "sha256": "6653dd3b396a705aca7bb95392d75ad89add6e4bc2e3566777df4e01e4b36d71"
      },
      {
        "path": "output/playwright/r24-search-20261116-desktop/observations.json",
        "sha256": "8faa7ed9502315b8bd4610a999dc7ec6de59b4562aabb0f210ec98e281605ca1"
      },
      {
        "path": "output/playwright/r24-search-20261116-mobile/observations.json",
        "sha256": "cc8ad276d6bab27ad5636cadfb024a5bd88d2b6b985ace58631886b3877e50bf"
      }
    ],
    "input_files": [
      {
        "path": "src/content/docs/index.md",
        "sha256": "3a35231f260c6e8941417cd3a09bbce282c5d6eeefcff662948320e112007dcb"
      },
      {
        "path": "src/content/docs/start-here/index.md",
        "sha256": "2d401914f5c44f965c8508f0798e13be0152c3d674ed2afec63f424a4c602734"
      },
      {
        "path": "src/content/docs/start-here/how-to-use-this-guide.md",
        "sha256": "01a6e9a63c6f0826ef2cf8d505df36b7b2400c566f59ff541c2fac9a99d30bb1"
      },
      {
        "path": "src/content/docs/start-here/learning-paths.md",
        "sha256": "a86e9f8c1491c605ec48f553f892fd6e1a9c489f089b4717df22a7a15bc279c2"
      },
      {
        "path": "src/content/docs/start-here/why-this-guide.md",
        "sha256": "a84a02e11ef32b4a96f0078e2704d0edf19d693d72a82bdfddbbb8e60ea8b74d"
      },
      {
        "path": "src/content/docs/01-mental-models/index.md",
        "sha256": "57fbb0299500f1c6daf0426d7bc3d6632851a555ba798067f0c0a37fb7c21a3a"
      },
      {
        "path": "src/content/docs/02-work-environment/index.md",
        "sha256": "204ab712629a07604e6d4256a7bc4cf6efc723a6fb8ea6593a1facccb6b64e16"
      },
      {
        "path": "src/content/docs/03-full-stack/index.md",
        "sha256": "4e97bd446bb15ff6e1cdaaafd2fda4b221fb07f8b9c335ad8005fb9ee7517324"
      },
      {
        "path": "src/content/docs/04-backend-data/index.md",
        "sha256": "0bc3a4fea0222b36271fe92b4a83319d019619532cf87ef251fa5002f2b6973f"
      },
      {
        "path": "src/content/docs/05-frontend/index.md",
        "sha256": "6ea93c86b312503105780d1158a94f45680c1ae6f8e602d2886ce0ab73ec4270"
      },
      {
        "path": "src/content/docs/06-requirements-design/index.md",
        "sha256": "16254ada745f93b17d598e22efd40aeaf7fd61ce8f3b3dc513b14aa96af1c798"
      },
      {
        "path": "src/content/docs/07-workflow-methods/index.md",
        "sha256": "f13724ccba91ce77bfda29624b1e08363476ff9e27754b8c3845597d18e3ba22"
      },
      {
        "path": "src/content/docs/08-quality/index.md",
        "sha256": "92437132a14f03af95f0714afa335b5b6e2ffec2fc47d8c6b3e5a58ff2052ee6"
      },
      {
        "path": "src/content/docs/09-git-github/index.md",
        "sha256": "879d060baf6d7f35e45be1e2685b56389adcec6479908cc313579cd518e3cf4f"
      },
      {
        "path": "src/content/docs/10-deployment-operations/index.md",
        "sha256": "d8d4ec030ea396019d5596b01866675719abfc14b33cff73ca73240a989a795a"
      },
      {
        "path": "src/content/docs/11-ai-native/index.md",
        "sha256": "db188b1ac99de066b4e60c74da04a3b6c5dc541c9757398d446c99e8267690d2"
      },
      {
        "path": "src/content/docs/12-case-studies/index.md",
        "sha256": "e7c90e444e111f299270175976a5e4baded3f6007938bdf29cf54086fdb0a60c"
      },
      {
        "path": "src/content/docs/reference/index.md",
        "sha256": "7eb4ac55dcf2eaadc30777c82d0360b22bc0fc41b08e586f9514efd91f1efc4f"
      },
      {
        "path": "src/styles/custom.css",
        "sha256": "2236f2a8a9b30515cb641d48de7089d15590834766ada3f60de9f649ef36c137"
      }
    ],
    "states": [
      {
        "route": "",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [
          {
            "src": "/_astro/learning-map.CrMRbe_l_Z1j7kY6.svg",
            "alt": "시스템 사고부터 AI 네이티브 개발까지 이어지는 학습 지도",
            "loaded": true
          }
        ],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [
          {
            "src": "/_astro/learning-map.CrMRbe_l_Z1j7kY6.svg",
            "alt": "시스템 사고부터 AI 네이티브 개발까지 이어지는 학습 지도",
            "loaded": true
          }
        ],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "start-here/how-to-use-this-guide",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 4
      },
      {
        "route": "start-here/how-to-use-this-guide",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 8
      },
      {
        "route": "start-here/learning-paths",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 1
      },
      {
        "route": "start-here/learning-paths",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 1
      },
      {
        "route": "reference",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "reference",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [
          {
            "src": "/_astro/learning-map.CrMRbe_l_Z1j7kY6.svg",
            "alt": "시스템 사고부터 AI 네이티브 개발까지 이어지는 학습 지도",
            "loaded": true
          }
        ],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [
          {
            "src": "/_astro/learning-map.CrMRbe_l_Z1j7kY6.svg",
            "alt": "시스템 사고부터 AI 네이티브 개발까지 이어지는 학습 지도",
            "loaded": true
          }
        ],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "start-here",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "start-here",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "start-here",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "start-here",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "start-here/how-to-use-this-guide",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 4
      },
      {
        "route": "start-here/how-to-use-this-guide",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 8
      },
      {
        "route": "start-here/learning-paths",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 1
      },
      {
        "route": "start-here/learning-paths",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 1
      },
      {
        "route": "start-here/why-this-guide",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 1
      },
      {
        "route": "start-here/why-this-guide",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 1
      },
      {
        "route": "start-here/why-this-guide",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 1
      },
      {
        "route": "start-here/why-this-guide",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 1
      },
      {
        "route": "01-mental-models",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "01-mental-models",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "01-mental-models",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "01-mental-models",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "02-work-environment",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "02-work-environment",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "02-work-environment",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "02-work-environment",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "03-full-stack",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "03-full-stack",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "03-full-stack",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "03-full-stack",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "04-backend-data",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "04-backend-data",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "04-backend-data",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "04-backend-data",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "05-frontend",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "05-frontend",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "05-frontend",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "05-frontend",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "06-requirements-design",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "06-requirements-design",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "06-requirements-design",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "06-requirements-design",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "07-workflow-methods",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "07-workflow-methods",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "07-workflow-methods",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "07-workflow-methods",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "08-quality",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "08-quality",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "08-quality",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "08-quality",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "09-git-github",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "09-git-github",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "09-git-github",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "09-git-github",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "10-deployment-operations",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "10-deployment-operations",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "10-deployment-operations",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "10-deployment-operations",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "11-ai-native",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "11-ai-native",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "11-ai-native",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "11-ai-native",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "12-case-studies",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "12-case-studies",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "12-case-studies",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "12-case-studies",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "reference",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "requestedTheme": "dark",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      },
      {
        "route": "reference",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "requestedTheme": "light",
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "images": [],
        "errors": [],
        "image_count": 3
      }
    ]
  },
  "images": [
    {
      "id": "R24-PNG-001",
      "order": 1,
      "path": "output/playwright/r24-inputs-20261116-pilot/home-1440-light-top.png",
      "sha256": "30faadf63e240cd300da9eae67db977f11a41fe016c9dd9ddef8b08e645213bb",
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
      "route": "",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-002",
      "order": 2,
      "path": "output/playwright/r24-inputs-20261116-pilot/home-1440-light-item0-x0-y0.png",
      "sha256": "490d08d5be920f706ddffaab5162fe5bc56ff332bf2f94d9def6901bd2973f98",
      "dimensions": {
        "width": 480,
        "height": 880
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-pilot/home-1440-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 828,
          "documentRange": [
            938,
            1818
          ],
          "targetRange": [
            937.828125,
            1897.828125
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
      "id": "R24-PNG-003",
      "order": 3,
      "path": "output/playwright/r24-inputs-20261116-pilot/home-1440-light-item0-x0-y1.png",
      "sha256": "29a0352ee61d88af70b20faffd5ccf53432ce3547c81fdb3bc26cf8a78fba468",
      "dimensions": {
        "width": 480,
        "height": 129
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-pilot/home-1440-light-item0-x0-y1.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1658,
          "documentRange": [
            1768,
            1897.828125
          ],
          "targetRange": [
            937.828125,
            1897.828125
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 480,
            "height": 129.828125
          }
        }
      }
    },
    {
      "id": "R24-PNG-004",
      "order": 4,
      "path": "output/playwright/r24-inputs-20261116-pilot/home-390-dark-top.png",
      "sha256": "a429161682747529419e2df8f73c8e8de2504da497c27c36add99f7204722285",
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
      "route": "",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-005",
      "order": 5,
      "path": "output/playwright/r24-inputs-20261116-pilot/home-390-dark-item0-x0-y0.png",
      "sha256": "b4ab266e49914ae5ee3655c438c137868bf76cdf36f2f8c53a3b48abbfed87e2",
      "dimensions": {
        "width": 358,
        "height": 715
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-pilot/home-390-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1154,
          "documentRange": [
            1264,
            1979.96875
          ],
          "targetRange": [
            1263.96875,
            1979.96875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 715.96875
          }
        }
      }
    },
    {
      "id": "R24-PNG-006",
      "order": 6,
      "path": "output/playwright/r24-inputs-20261116-pilot/home-390-dark-item0-x0-y1.png",
      "sha256": "756d59bb8139e20f61fabfaff0282affd4f90cf9ce45db749226aef859d65d4c",
      "dimensions": {
        "width": 358,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-pilot/home-390-dark-item0-x0-y1.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1828,
          "documentRange": [
            1938,
            1979.96875
          ],
          "targetRange": [
            1263.96875,
            1979.96875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 41.96875
          }
        }
      }
    },
    {
      "id": "R24-PNG-007",
      "order": 7,
      "path": "output/playwright/r24-inputs-20261116-pilot/start-here-how-to-use-this-guide-1440-light-top.png",
      "sha256": "852b1b31251374ac6fcc03b52abf609388c4b0dfaf7b580b480871a912002c49",
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
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-008",
      "order": 8,
      "path": "output/playwright/r24-inputs-20261116-pilot/start-here-how-to-use-this-guide-1440-light-item0-x0-y0.png",
      "sha256": "f0d29f070b16f8ec8ec83faf375ba9c0c632857b23d1eb9bbb1061e97c33d3ba",
      "dimensions": {
        "width": 788,
        "height": 216
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-pilot/start-here-how-to-use-this-guide-1440-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1138,
          "documentRange": [
            1248.328125,
            1464.96875
          ],
          "targetRange": [
            1248.328125,
            1464.96875
          ],
          "clip": {
            "x": 324,
            "y": 110.328125,
            "width": 788,
            "height": 216.640625
          }
        }
      }
    },
    {
      "id": "R24-PNG-009",
      "order": 9,
      "path": "output/playwright/r24-inputs-20261116-pilot/start-here-how-to-use-this-guide-1440-light-item1-x0-y0.png",
      "sha256": "9cf834e045e7cb31d0c5c628bae026e1a6539bd707b651e77540e27cc9125d77",
      "dimensions": {
        "width": 788,
        "height": 197
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-pilot/start-here-how-to-use-this-guide-1440-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2062,
          "documentRange": [
            2172.46875,
            2369.96875
          ],
          "targetRange": [
            2172.46875,
            2369.96875
          ],
          "clip": {
            "x": 324,
            "y": 110.46875,
            "width": 788,
            "height": 197.5
          }
        }
      }
    },
    {
      "id": "R24-PNG-010",
      "order": 10,
      "path": "output/playwright/r24-inputs-20261116-pilot/start-here-how-to-use-this-guide-1440-light-item2-x0-y0.png",
      "sha256": "b050f1ecb3ebcd912bfd4beb9936da8b89da37b806d4492e2f782c35f54f52c3",
      "dimensions": {
        "width": 788,
        "height": 346
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-pilot/start-here-how-to-use-this-guide-1440-light-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2421,
          "documentRange": [
            2568.46875,
            2915.09375
          ],
          "targetRange": [
            2568.46875,
            2915.09375
          ],
          "clip": {
            "x": 324,
            "y": 147.46875,
            "width": 788,
            "height": 346.625
          }
        }
      }
    },
    {
      "id": "R24-PNG-011",
      "order": 11,
      "path": "output/playwright/r24-inputs-20261116-pilot/start-here-how-to-use-this-guide-390-dark-top.png",
      "sha256": "8c934f18b8605b84b8f11ffb7bf10cd382b89c922f65a022e119c4bec22f40d2",
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
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-012",
      "order": 12,
      "path": "output/playwright/r24-inputs-20261116-pilot/start-here-how-to-use-this-guide-390-dark-item0-x0-y0.png",
      "sha256": "6d335241fbb185d4262d7bc5887605a6e342c16ae009396276297c25056bc7d9",
      "dimensions": {
        "width": 358,
        "height": 321
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-pilot/start-here-how-to-use-this-guide-390-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1532,
          "documentRange": [
            1642.265625,
            1964.21875
          ],
          "targetRange": [
            1642.265625,
            1964.21875
          ],
          "clip": {
            "x": 16,
            "y": 110.265625,
            "width": 358,
            "height": 321.953125
          }
        }
      }
    },
    {
      "id": "R24-PNG-013",
      "order": 13,
      "path": "output/playwright/r24-inputs-20261116-pilot/start-here-how-to-use-this-guide-390-dark-item1-x0-y0.png",
      "sha256": "4ed808ad6a18d38c8419aad883662d0c244e6f52988e4aa64fc87a675c9b612d",
      "dimensions": {
        "width": 358,
        "height": 213
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-pilot/start-here-how-to-use-this-guide-390-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2723,
          "documentRange": [
            2833,
            3046.203125
          ],
          "targetRange": [
            2832.703125,
            3046.203125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 213.203125
          }
        }
      }
    },
    {
      "id": "R24-PNG-014",
      "order": 14,
      "path": "output/playwright/r24-inputs-20261116-pilot/start-here-how-to-use-this-guide-390-dark-item1-x1-y0.png",
      "sha256": "4b64e3117d0a461aa872e78f2a4b9e4c8133ba5526c6781496212445e96dd5b0",
      "dimensions": {
        "width": 358,
        "height": 213
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-pilot/start-here-how-to-use-this-guide-390-dark-item1-x1-y0.png",
          "label": "item1",
          "requestedScrollLeft": 42,
          "actualScrollLeft": 42,
          "pageScrollY": 2723,
          "documentRange": [
            2833,
            3046.203125
          ],
          "targetRange": [
            2832.703125,
            3046.203125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 213.203125
          }
        }
      }
    },
    {
      "id": "R24-PNG-015",
      "order": 15,
      "path": "output/playwright/r24-inputs-20261116-pilot/start-here-how-to-use-this-guide-390-dark-item2-x0-y0.png",
      "sha256": "2eeda948b5c5b00f3602bc42f317cfec7be5e3bb005c4e00b4e1206978f87552",
      "dimensions": {
        "width": 358,
        "height": 714
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-pilot/start-here-how-to-use-this-guide-390-dark-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3175,
          "documentRange": [
            3285,
            3999.71875
          ],
          "targetRange": [
            3284.5,
            3999.71875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 714.71875
          }
        }
      }
    },
    {
      "id": "R24-PNG-016",
      "order": 16,
      "path": "output/playwright/r24-inputs-20261116-pilot/start-here-how-to-use-this-guide-390-dark-item2-x0-y1.png",
      "sha256": "a14f987b8136565be440e192a2cbef7bf1dfa0b96f540914820474807495bcfb",
      "dimensions": {
        "width": 358,
        "height": 40
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-pilot/start-here-how-to-use-this-guide-390-dark-item2-x0-y1.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3849,
          "documentRange": [
            3959,
            3999.71875
          ],
          "targetRange": [
            3284.5,
            3999.71875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 40.71875
          }
        }
      }
    },
    {
      "id": "R24-PNG-017",
      "order": 17,
      "path": "output/playwright/r24-inputs-20261116-pilot/start-here-how-to-use-this-guide-390-dark-item2-x1-y0.png",
      "sha256": "b99d0a66ab567d9072ea7744f109f670bb5a75621e53bb92eb583f8b9c9cac54",
      "dimensions": {
        "width": 358,
        "height": 714
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-pilot/start-here-how-to-use-this-guide-390-dark-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 26,
          "actualScrollLeft": 26,
          "pageScrollY": 3175,
          "documentRange": [
            3285,
            3999.71875
          ],
          "targetRange": [
            3284.5,
            3999.71875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 714.71875
          }
        }
      }
    },
    {
      "id": "R24-PNG-018",
      "order": 18,
      "path": "output/playwright/r24-inputs-20261116-pilot/start-here-how-to-use-this-guide-390-dark-item2-x1-y1.png",
      "sha256": "31524ae8a9ec48ba0aa0d1f10d439733d12f29bc2848d28bf2604c1b8a8b8af3",
      "dimensions": {
        "width": 358,
        "height": 40
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-pilot/start-here-how-to-use-this-guide-390-dark-item2-x1-y1.png",
          "label": "item2",
          "requestedScrollLeft": 26,
          "actualScrollLeft": 26,
          "pageScrollY": 3849,
          "documentRange": [
            3959,
            3999.71875
          ],
          "targetRange": [
            3284.5,
            3999.71875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 40.71875
          }
        }
      }
    },
    {
      "id": "R24-PNG-019",
      "order": 19,
      "path": "output/playwright/r24-inputs-20261116-pilot/start-here-learning-paths-1440-light-top.png",
      "sha256": "5e39ae896eaee87a5c8ea8b9651ca6af7f19c281eb8ac7417772fce991705e21",
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
      "route": "start-here/learning-paths",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-020",
      "order": 20,
      "path": "output/playwright/r24-inputs-20261116-pilot/start-here-learning-paths-390-dark-top.png",
      "sha256": "d1089d8cb88a5991ff3364d086d677c9d48fae59353c5d9e68d793d5b4fc71ac",
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
      "route": "start-here/learning-paths",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-021",
      "order": 21,
      "path": "output/playwright/r24-inputs-20261116-repair/reference-1440-light-top.png",
      "sha256": "5198c277b70c9fed796d0cb77448f05559b72622a7c29eb5a962beeaf195164f",
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
      "route": "reference",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-022",
      "order": 22,
      "path": "output/playwright/r24-inputs-20261116-repair/reference-1440-light-next-heading-x0-y0.png",
      "sha256": "56f89d3a9ee30d8c8d33fb61b6d6d07542c6a6fb65e1eadbc27687622f1079c2",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "reference",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-repair/reference-1440-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 268,
          "documentRange": [
            855.828125,
            896.828125
          ],
          "targetRange": [
            855.828125,
            896.828125
          ],
          "clip": {
            "x": 324,
            "y": 587.828125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-023",
      "order": 23,
      "path": "output/playwright/r24-inputs-20261116-repair/reference-1440-light-next0-x0-y0.png",
      "sha256": "b6b7505d5ab24f5aefa51ea288814a12398360944773daad36b5b65a04a4dd19",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "reference",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-repair/reference-1440-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 268,
          "documentRange": [
            913.828125,
            969.828125
          ],
          "targetRange": [
            913.828125,
            969.828125
          ],
          "clip": {
            "x": 324,
            "y": 645.828125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-024",
      "order": 24,
      "path": "output/playwright/r24-inputs-20261116-repair/reference-390-dark-top.png",
      "sha256": "16477f5fb3d0a25fe45f2a1441ca6ca3f19fbda9032e72cd15b9492deda9a09e",
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
      "route": "reference",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-025",
      "order": 25,
      "path": "output/playwright/r24-inputs-20261116-repair/reference-390-dark-next-heading-x0-y0.png",
      "sha256": "03f69e4151caf50011d0e22164aac707ea2e4f31f49d2c620867e9a7ed8b0132",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "reference",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-repair/reference-390-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 974,
          "documentRange": [
            1250.96875,
            1285.96875
          ],
          "targetRange": [
            1250.96875,
            1285.96875
          ],
          "clip": {
            "x": 16,
            "y": 276.96875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-026",
      "order": 26,
      "path": "output/playwright/r24-inputs-20261116-repair/reference-390-dark-next0-x0-y0.png",
      "sha256": "ada49c145edadb0eb486348e5698d307f998bdf40bb71632cf82e9b07209b1e4",
      "dimensions": {
        "width": 358,
        "height": 112
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "reference",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-repair/reference-390-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 974,
          "documentRange": [
            1302.765625,
            1414.765625
          ],
          "targetRange": [
            1302.765625,
            1414.765625
          ],
          "clip": {
            "x": 16,
            "y": 328.765625,
            "width": 358,
            "height": 112
          }
        }
      }
    },
    {
      "id": "R24-PNG-027",
      "order": 27,
      "path": "output/playwright/r24-inputs-20261116-remaining/home-1440-dark-top.png",
      "sha256": "abfdfde549383acd25c3b9a9299231a0d5457aa7b164d2997ff014e5feb5afd9",
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
      "route": "",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-028",
      "order": 28,
      "path": "output/playwright/r24-inputs-20261116-remaining/home-1440-dark-item0-x0-y0.png",
      "sha256": "8e94852804f697ab8335495227f79ee614e31e875936a65fe6ba3006aaa7c05e",
      "dimensions": {
        "width": 480,
        "height": 880
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/home-1440-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 828,
          "documentRange": [
            938,
            1818
          ],
          "targetRange": [
            937.828125,
            1897.828125
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
      "id": "R24-PNG-029",
      "order": 29,
      "path": "output/playwright/r24-inputs-20261116-remaining/home-1440-dark-item0-x0-y1.png",
      "sha256": "6f65eed6e71307c56a3c829464d366911c3dc0708ab6df432329146c9e893408",
      "dimensions": {
        "width": 480,
        "height": 129
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/home-1440-dark-item0-x0-y1.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1658,
          "documentRange": [
            1768,
            1897.828125
          ],
          "targetRange": [
            937.828125,
            1897.828125
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 480,
            "height": 129.828125
          }
        }
      }
    },
    {
      "id": "R24-PNG-030",
      "order": 30,
      "path": "output/playwright/r24-inputs-20261116-remaining/home-390-light-top.png",
      "sha256": "f4e3b7b2201aa35359c89480f368b34ec2d4e54738c7d70a0671a29db9836248",
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
      "route": "",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-031",
      "order": 31,
      "path": "output/playwright/r24-inputs-20261116-remaining/home-390-light-item0-x0-y0.png",
      "sha256": "aebc559cb5181b15b4cf52764a4533f4fc0ef4ae150a2d1c48d27ddc21ef976b",
      "dimensions": {
        "width": 358,
        "height": 715
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/home-390-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1154,
          "documentRange": [
            1264,
            1979.96875
          ],
          "targetRange": [
            1263.96875,
            1979.96875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 715.96875
          }
        }
      }
    },
    {
      "id": "R24-PNG-032",
      "order": 32,
      "path": "output/playwright/r24-inputs-20261116-remaining/home-390-light-item0-x0-y1.png",
      "sha256": "85dc47b388ce76a6a08bc53620da3d5023d0eed7a1b625608ebb3ec4fad3846d",
      "dimensions": {
        "width": 358,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/home-390-light-item0-x0-y1.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1828,
          "documentRange": [
            1938,
            1979.96875
          ],
          "targetRange": [
            1263.96875,
            1979.96875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 41.96875
          }
        }
      }
    },
    {
      "id": "R24-PNG-033",
      "order": 33,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-1440-light-top.png",
      "sha256": "f39ecef56f67c312e6d4c0b608e9b5e3d01c4fc3d329410d57e63d39bc6eaab7",
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
      "route": "start-here",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-034",
      "order": 34,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-1440-light-next-heading-x0-y0.png",
      "sha256": "56f89d3a9ee30d8c8d33fb61b6d6d07542c6a6fb65e1eadbc27687622f1079c2",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "start-here",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/start-here-1440-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 460,
          "documentRange": [
            1078.328125,
            1119.328125
          ],
          "targetRange": [
            1078.328125,
            1119.328125
          ],
          "clip": {
            "x": 324,
            "y": 618.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-035",
      "order": 35,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-1440-light-next0-x0-y0.png",
      "sha256": "47af5701e8f4d7c5a49564f5fae0f5f681cf7be2ce3ff3151d1523e38b0b4997",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "start-here",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/start-here-1440-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 460,
          "documentRange": [
            1136.328125,
            1192.328125
          ],
          "targetRange": [
            1136.328125,
            1192.328125
          ],
          "clip": {
            "x": 324,
            "y": 676.328125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-036",
      "order": 36,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-390-dark-top.png",
      "sha256": "6091d07f529c3a3d534d8d973dd12f9df7be03687426a819ace633abeb07fffb",
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
      "route": "start-here",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-037",
      "order": 37,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-390-dark-next-heading-x0-y0.png",
      "sha256": "03f69e4151caf50011d0e22164aac707ea2e4f31f49d2c620867e9a7ed8b0132",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "start-here",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/start-here-390-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 921,
          "documentRange": [
            1310.46875,
            1345.46875
          ],
          "targetRange": [
            1310.46875,
            1345.46875
          ],
          "clip": {
            "x": 16,
            "y": 389.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-038",
      "order": 38,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-390-dark-next0-x0-y0.png",
      "sha256": "a2e5ba9dc5239929e144a485a57690be76603bf877fe1fdcad92ee9a6fac3f7f",
      "dimensions": {
        "width": 358,
        "height": 140
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "start-here",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/start-here-390-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 921,
          "documentRange": [
            1362.265625,
            1502.265625
          ],
          "targetRange": [
            1362.265625,
            1502.265625
          ],
          "clip": {
            "x": 16,
            "y": 441.265625,
            "width": 358,
            "height": 140
          }
        }
      }
    },
    {
      "id": "R24-PNG-039",
      "order": 39,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-1440-dark-top.png",
      "sha256": "b4cc0b02ce691c9a7b765f7fb68acb41661efd252b977c4c14aa83bcee39392f",
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
      "route": "start-here",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-040",
      "order": 40,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-1440-dark-next-heading-x0-y0.png",
      "sha256": "e71d726a155cf17948587911135125fd7e4337472825b225d504688a8e619e04",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "start-here",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/start-here-1440-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 460,
          "documentRange": [
            1078.328125,
            1119.328125
          ],
          "targetRange": [
            1078.328125,
            1119.328125
          ],
          "clip": {
            "x": 324,
            "y": 618.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-041",
      "order": 41,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-1440-dark-next0-x0-y0.png",
      "sha256": "e6c2b73740f30911ef12b51c19815a7412d47026d5be369be621fd986294d14a",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "start-here",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/start-here-1440-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 460,
          "documentRange": [
            1136.328125,
            1192.328125
          ],
          "targetRange": [
            1136.328125,
            1192.328125
          ],
          "clip": {
            "x": 324,
            "y": 676.328125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-042",
      "order": 42,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-390-light-top.png",
      "sha256": "0eaed16141458b0e72973dc739aab4a339e5fc7379d14a8fc0e8392f0c7192fc",
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
      "route": "start-here",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-043",
      "order": 43,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-390-light-next-heading-x0-y0.png",
      "sha256": "a2fe66678427f844d5b6e04fb82e82d08d6caa7771d8b449bd77a824ce13f758",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "start-here",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/start-here-390-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 921,
          "documentRange": [
            1310.46875,
            1345.46875
          ],
          "targetRange": [
            1310.46875,
            1345.46875
          ],
          "clip": {
            "x": 16,
            "y": 389.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-044",
      "order": 44,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-390-light-next0-x0-y0.png",
      "sha256": "c2b05e2b1158bd68e26a253146bc5fbd9abbab396ea33d5c62681eabeda81520",
      "dimensions": {
        "width": 358,
        "height": 140
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "start-here",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/start-here-390-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 921,
          "documentRange": [
            1362.265625,
            1502.265625
          ],
          "targetRange": [
            1362.265625,
            1502.265625
          ],
          "clip": {
            "x": 16,
            "y": 441.265625,
            "width": 358,
            "height": 140
          }
        }
      }
    },
    {
      "id": "R24-PNG-045",
      "order": 45,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-how-to-use-this-guide-1440-dark-top.png",
      "sha256": "7dbff1c4e0bc1305576dabba6d8e6bbdba4d5bea08b568c548c1150bc1ea5e31",
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
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-046",
      "order": 46,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-how-to-use-this-guide-1440-dark-item0-x0-y0.png",
      "sha256": "0cb07a705fdd285f68ea1111609e629658eccc7178d1287cdca159f4af7b20a2",
      "dimensions": {
        "width": 788,
        "height": 216
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/start-here-how-to-use-this-guide-1440-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1138,
          "documentRange": [
            1248.328125,
            1464.96875
          ],
          "targetRange": [
            1248.328125,
            1464.96875
          ],
          "clip": {
            "x": 324,
            "y": 110.328125,
            "width": 788,
            "height": 216.640625
          }
        }
      }
    },
    {
      "id": "R24-PNG-047",
      "order": 47,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-how-to-use-this-guide-1440-dark-item1-x0-y0.png",
      "sha256": "d4e43b717bdddfe31c5b2dde4d3e3e1db53cd52a197b30f4fd41d5d1f30d3d51",
      "dimensions": {
        "width": 788,
        "height": 197
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/start-here-how-to-use-this-guide-1440-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2062,
          "documentRange": [
            2172.46875,
            2369.96875
          ],
          "targetRange": [
            2172.46875,
            2369.96875
          ],
          "clip": {
            "x": 324,
            "y": 110.46875,
            "width": 788,
            "height": 197.5
          }
        }
      }
    },
    {
      "id": "R24-PNG-048",
      "order": 48,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-how-to-use-this-guide-1440-dark-item2-x0-y0.png",
      "sha256": "4cac73e133c30c028a01affa22b146132e476a37bc1b3c52a24d70b2681ccc9c",
      "dimensions": {
        "width": 788,
        "height": 346
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/start-here-how-to-use-this-guide-1440-dark-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2421,
          "documentRange": [
            2568.46875,
            2915.09375
          ],
          "targetRange": [
            2568.46875,
            2915.09375
          ],
          "clip": {
            "x": 324,
            "y": 147.46875,
            "width": 788,
            "height": 346.625
          }
        }
      }
    },
    {
      "id": "R24-PNG-049",
      "order": 49,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-how-to-use-this-guide-390-light-top.png",
      "sha256": "f8c07b52536b7e9a2f5aca7472b72faec85e12fbfdac34c9bb1a240e9e897ba7",
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
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-050",
      "order": 50,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-how-to-use-this-guide-390-light-item0-x0-y0.png",
      "sha256": "ef64bb99b3c270612c6138400b6025cbb81857b2f5d89bfe57f9121928fd2ce4",
      "dimensions": {
        "width": 358,
        "height": 321
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/start-here-how-to-use-this-guide-390-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1532,
          "documentRange": [
            1642.265625,
            1964.21875
          ],
          "targetRange": [
            1642.265625,
            1964.21875
          ],
          "clip": {
            "x": 16,
            "y": 110.265625,
            "width": 358,
            "height": 321.953125
          }
        }
      }
    },
    {
      "id": "R24-PNG-051",
      "order": 51,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-how-to-use-this-guide-390-light-item1-x0-y0.png",
      "sha256": "4548ea6172798979d9a527265e70f73d8ad869174d2ee5bbaf699b7bfd840837",
      "dimensions": {
        "width": 358,
        "height": 213
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/start-here-how-to-use-this-guide-390-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2723,
          "documentRange": [
            2833,
            3046.203125
          ],
          "targetRange": [
            2832.703125,
            3046.203125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 213.203125
          }
        }
      }
    },
    {
      "id": "R24-PNG-052",
      "order": 52,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-how-to-use-this-guide-390-light-item1-x1-y0.png",
      "sha256": "215359a208ca9552848e15c9e2ad2c5ee18f22cc85b923748ca0a41fb940fc02",
      "dimensions": {
        "width": 358,
        "height": 213
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/start-here-how-to-use-this-guide-390-light-item1-x1-y0.png",
          "label": "item1",
          "requestedScrollLeft": 42,
          "actualScrollLeft": 42,
          "pageScrollY": 2723,
          "documentRange": [
            2833,
            3046.203125
          ],
          "targetRange": [
            2832.703125,
            3046.203125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 213.203125
          }
        }
      }
    },
    {
      "id": "R24-PNG-053",
      "order": 53,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-how-to-use-this-guide-390-light-item2-x0-y0.png",
      "sha256": "787fa721744c1a4d57873d4f2b88ddf1dd2a70b31121d1d35c311891fb7e4606",
      "dimensions": {
        "width": 358,
        "height": 714
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/start-here-how-to-use-this-guide-390-light-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3175,
          "documentRange": [
            3285,
            3999.71875
          ],
          "targetRange": [
            3284.5,
            3999.71875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 714.71875
          }
        }
      }
    },
    {
      "id": "R24-PNG-054",
      "order": 54,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-how-to-use-this-guide-390-light-item2-x0-y1.png",
      "sha256": "6b611311ccb859dae82de469709e4e15716f90d042fa32e077e4ac097cc2038e",
      "dimensions": {
        "width": 358,
        "height": 40
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/start-here-how-to-use-this-guide-390-light-item2-x0-y1.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3849,
          "documentRange": [
            3959,
            3999.71875
          ],
          "targetRange": [
            3284.5,
            3999.71875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 40.71875
          }
        }
      }
    },
    {
      "id": "R24-PNG-055",
      "order": 55,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-how-to-use-this-guide-390-light-item2-x1-y0.png",
      "sha256": "79809649765e6a8b5221de0ee9dba8f06ad4d3df7a1fe5b88d337e28d6e9853d",
      "dimensions": {
        "width": 358,
        "height": 714
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/start-here-how-to-use-this-guide-390-light-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 26,
          "actualScrollLeft": 26,
          "pageScrollY": 3175,
          "documentRange": [
            3285,
            3999.71875
          ],
          "targetRange": [
            3284.5,
            3999.71875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 714.71875
          }
        }
      }
    },
    {
      "id": "R24-PNG-056",
      "order": 56,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-how-to-use-this-guide-390-light-item2-x1-y1.png",
      "sha256": "3ea7f3a88b12d57cd96e6f442bda37be4c71b2b3207654df079b552d49fe8d3c",
      "dimensions": {
        "width": 358,
        "height": 40
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/start-here-how-to-use-this-guide-390-light-item2-x1-y1.png",
          "label": "item2",
          "requestedScrollLeft": 26,
          "actualScrollLeft": 26,
          "pageScrollY": 3849,
          "documentRange": [
            3959,
            3999.71875
          ],
          "targetRange": [
            3284.5,
            3999.71875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 40.71875
          }
        }
      }
    },
    {
      "id": "R24-PNG-057",
      "order": 57,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-learning-paths-1440-dark-top.png",
      "sha256": "ca1b86b5804f752b29183cfec0d030527f6f0f671d45b0e550aa9af195a6b87b",
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
      "route": "start-here/learning-paths",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-058",
      "order": 58,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-learning-paths-390-light-top.png",
      "sha256": "a79cb216e6084efda92613e89e9bd1b1c2a61614aa885e5c35bb5a9ec0426617",
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
      "route": "start-here/learning-paths",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-059",
      "order": 59,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-why-this-guide-1440-light-top.png",
      "sha256": "6eb887f0308eb979a45020cc31a179a25b8bf4b33588b6c03441156e6849d545",
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
      "route": "start-here/why-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-060",
      "order": 60,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-why-this-guide-390-dark-top.png",
      "sha256": "989b22aa1bc647cdc0b2654a319aef2849534a507addd6e0dcbe65bdbd41b881",
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
      "route": "start-here/why-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-061",
      "order": 61,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-why-this-guide-1440-dark-top.png",
      "sha256": "d475ff7ad796aa1af52f04371710421338e379f66f2dda8d9b1e24dafa38674b",
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
      "route": "start-here/why-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-062",
      "order": 62,
      "path": "output/playwright/r24-inputs-20261116-remaining/start-here-why-this-guide-390-light-top.png",
      "sha256": "8cb2ca8d7bb1ef7213dd681d0d3cea0dbca23a7b79aad194a23e6821281e88b2",
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
      "route": "start-here/why-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-063",
      "order": 63,
      "path": "output/playwright/r24-inputs-20261116-remaining/01-mental-models-1440-light-top.png",
      "sha256": "72126893d4a970ef5d06b495752daeaa7d16514ece57ccee2a49da203555d60d",
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
      "route": "01-mental-models",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-064",
      "order": 64,
      "path": "output/playwright/r24-inputs-20261116-remaining/01-mental-models-1440-light-next-heading-x0-y0.png",
      "sha256": "56f89d3a9ee30d8c8d33fb61b6d6d07542c6a6fb65e1eadbc27687622f1079c2",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "01-mental-models",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/01-mental-models-1440-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 276,
          "documentRange": [
            894.328125,
            935.328125
          ],
          "targetRange": [
            894.328125,
            935.328125
          ],
          "clip": {
            "x": 324,
            "y": 618.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-065",
      "order": 65,
      "path": "output/playwright/r24-inputs-20261116-remaining/01-mental-models-1440-light-next0-x0-y0.png",
      "sha256": "1d4090f090e5bed87e1fc7996611d5b2b424b2cc9c359a2065f048b205639b9b",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "01-mental-models",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/01-mental-models-1440-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 276,
          "documentRange": [
            952.328125,
            1008.328125
          ],
          "targetRange": [
            952.328125,
            1008.328125
          ],
          "clip": {
            "x": 324,
            "y": 676.328125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-066",
      "order": 66,
      "path": "output/playwright/r24-inputs-20261116-remaining/01-mental-models-390-dark-top.png",
      "sha256": "a7d9d182971fbe10708910d7409d38e688bd26e1ff853e25a96f33529d28108f",
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
      "route": "01-mental-models",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-067",
      "order": 67,
      "path": "output/playwright/r24-inputs-20261116-remaining/01-mental-models-390-dark-next-heading-x0-y0.png",
      "sha256": "03f69e4151caf50011d0e22164aac707ea2e4f31f49d2c620867e9a7ed8b0132",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "01-mental-models",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/01-mental-models-390-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 888,
          "documentRange": [
            1196.46875,
            1231.46875
          ],
          "targetRange": [
            1196.46875,
            1231.46875
          ],
          "clip": {
            "x": 16,
            "y": 308.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-068",
      "order": 68,
      "path": "output/playwright/r24-inputs-20261116-remaining/01-mental-models-390-dark-next0-x0-y0.png",
      "sha256": "f760edfc7fc960eb72572a359fc647aaad60852b6913d2dfb0f707745f927120",
      "dimensions": {
        "width": 358,
        "height": 112
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "01-mental-models",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/01-mental-models-390-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 888,
          "documentRange": [
            1248.265625,
            1360.265625
          ],
          "targetRange": [
            1248.265625,
            1360.265625
          ],
          "clip": {
            "x": 16,
            "y": 360.265625,
            "width": 358,
            "height": 112
          }
        }
      }
    },
    {
      "id": "R24-PNG-069",
      "order": 69,
      "path": "output/playwright/r24-inputs-20261116-remaining/01-mental-models-1440-dark-top.png",
      "sha256": "fb59919f345459424cf09a7d1bd637067af480602688c2c5717475902a4902f3",
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
      "route": "01-mental-models",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-070",
      "order": 70,
      "path": "output/playwright/r24-inputs-20261116-remaining/01-mental-models-1440-dark-next-heading-x0-y0.png",
      "sha256": "e71d726a155cf17948587911135125fd7e4337472825b225d504688a8e619e04",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "01-mental-models",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/01-mental-models-1440-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 276,
          "documentRange": [
            894.328125,
            935.328125
          ],
          "targetRange": [
            894.328125,
            935.328125
          ],
          "clip": {
            "x": 324,
            "y": 618.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-071",
      "order": 71,
      "path": "output/playwright/r24-inputs-20261116-remaining/01-mental-models-1440-dark-next0-x0-y0.png",
      "sha256": "d43607fc521155d682f54528ce9382e031b1323d5b0c4e91f8692e393f06ecd8",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "01-mental-models",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/01-mental-models-1440-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 276,
          "documentRange": [
            952.328125,
            1008.328125
          ],
          "targetRange": [
            952.328125,
            1008.328125
          ],
          "clip": {
            "x": 324,
            "y": 676.328125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-072",
      "order": 72,
      "path": "output/playwright/r24-inputs-20261116-remaining/01-mental-models-390-light-top.png",
      "sha256": "ac19cea067194667b906866b83bcde03906147b8956f4ddac9b8d5f9b4745110",
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
      "route": "01-mental-models",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-073",
      "order": 73,
      "path": "output/playwright/r24-inputs-20261116-remaining/01-mental-models-390-light-next-heading-x0-y0.png",
      "sha256": "a2fe66678427f844d5b6e04fb82e82d08d6caa7771d8b449bd77a824ce13f758",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "01-mental-models",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/01-mental-models-390-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 888,
          "documentRange": [
            1196.46875,
            1231.46875
          ],
          "targetRange": [
            1196.46875,
            1231.46875
          ],
          "clip": {
            "x": 16,
            "y": 308.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-074",
      "order": 74,
      "path": "output/playwright/r24-inputs-20261116-remaining/01-mental-models-390-light-next0-x0-y0.png",
      "sha256": "43bab3018b04296f8851565c6bd198bfd6519f1779f2e70ba199f1b9a9e591ce",
      "dimensions": {
        "width": 358,
        "height": 112
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "01-mental-models",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/01-mental-models-390-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 888,
          "documentRange": [
            1248.265625,
            1360.265625
          ],
          "targetRange": [
            1248.265625,
            1360.265625
          ],
          "clip": {
            "x": 16,
            "y": 360.265625,
            "width": 358,
            "height": 112
          }
        }
      }
    },
    {
      "id": "R24-PNG-075",
      "order": 75,
      "path": "output/playwright/r24-inputs-20261116-remaining/02-work-environment-1440-light-top.png",
      "sha256": "46976cf0f1c31dcf8d128e13344e0f9e94be936eafccc53bbc0b3e29a6a01b1b",
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
      "route": "02-work-environment",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-076",
      "order": 76,
      "path": "output/playwright/r24-inputs-20261116-remaining/02-work-environment-1440-light-next-heading-x0-y0.png",
      "sha256": "56f89d3a9ee30d8c8d33fb61b6d6d07542c6a6fb65e1eadbc27687622f1079c2",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "02-work-environment",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/02-work-environment-1440-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 220,
          "documentRange": [
            866.328125,
            907.328125
          ],
          "targetRange": [
            866.328125,
            907.328125
          ],
          "clip": {
            "x": 324,
            "y": 646.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-077",
      "order": 77,
      "path": "output/playwright/r24-inputs-20261116-remaining/02-work-environment-1440-light-next0-x0-y0.png",
      "sha256": "74af69bdcb1ef811835191affbfb7bad0a4e6bd08808009bd73386443f02e9cb",
      "dimensions": {
        "width": 788,
        "height": 28
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "02-work-environment",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/02-work-environment-1440-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 220,
          "documentRange": [
            924.328125,
            952.328125
          ],
          "targetRange": [
            924.328125,
            952.328125
          ],
          "clip": {
            "x": 324,
            "y": 704.328125,
            "width": 788,
            "height": 28
          }
        }
      }
    },
    {
      "id": "R24-PNG-078",
      "order": 78,
      "path": "output/playwright/r24-inputs-20261116-remaining/02-work-environment-390-dark-top.png",
      "sha256": "1742e8af4e3da8233d1cde4ba52a2fad182698f9981da08ff5bb376c9d511fe2",
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
      "route": "02-work-environment",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-079",
      "order": 79,
      "path": "output/playwright/r24-inputs-20261116-remaining/02-work-environment-390-dark-next-heading-x0-y0.png",
      "sha256": "03f69e4151caf50011d0e22164aac707ea2e4f31f49d2c620867e9a7ed8b0132",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "02-work-environment",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/02-work-environment-390-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 818,
          "documentRange": [
            1154.46875,
            1189.46875
          ],
          "targetRange": [
            1154.46875,
            1189.46875
          ],
          "clip": {
            "x": 16,
            "y": 336.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-080",
      "order": 80,
      "path": "output/playwright/r24-inputs-20261116-remaining/02-work-environment-390-dark-next0-x0-y0.png",
      "sha256": "9a7bc5c09fdffcfa32ac90c3526d5493d622935086f5f23a7f253a5d1baf5bd8",
      "dimensions": {
        "width": 358,
        "height": 84
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "02-work-environment",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/02-work-environment-390-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 818,
          "documentRange": [
            1206.265625,
            1290.265625
          ],
          "targetRange": [
            1206.265625,
            1290.265625
          ],
          "clip": {
            "x": 16,
            "y": 388.265625,
            "width": 358,
            "height": 84
          }
        }
      }
    },
    {
      "id": "R24-PNG-081",
      "order": 81,
      "path": "output/playwright/r24-inputs-20261116-remaining/02-work-environment-1440-dark-top.png",
      "sha256": "37a90fb871e28cd637a003d379543a3a55e8f80ed6069f3a3d28789ddc9ac50a",
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
      "route": "02-work-environment",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-082",
      "order": 82,
      "path": "output/playwright/r24-inputs-20261116-remaining/02-work-environment-1440-dark-next-heading-x0-y0.png",
      "sha256": "e71d726a155cf17948587911135125fd7e4337472825b225d504688a8e619e04",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "02-work-environment",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/02-work-environment-1440-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 220,
          "documentRange": [
            866.328125,
            907.328125
          ],
          "targetRange": [
            866.328125,
            907.328125
          ],
          "clip": {
            "x": 324,
            "y": 646.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-083",
      "order": 83,
      "path": "output/playwright/r24-inputs-20261116-remaining/02-work-environment-1440-dark-next0-x0-y0.png",
      "sha256": "f26a2de7bfc02f58367be0159b923dd7e9da2639c93a98c5b5346dd00d7b6b0c",
      "dimensions": {
        "width": 788,
        "height": 28
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "02-work-environment",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/02-work-environment-1440-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 220,
          "documentRange": [
            924.328125,
            952.328125
          ],
          "targetRange": [
            924.328125,
            952.328125
          ],
          "clip": {
            "x": 324,
            "y": 704.328125,
            "width": 788,
            "height": 28
          }
        }
      }
    },
    {
      "id": "R24-PNG-084",
      "order": 84,
      "path": "output/playwright/r24-inputs-20261116-remaining/02-work-environment-390-light-top.png",
      "sha256": "18d7572bd5725d600b799c3c47614282e45a863f161ab8f7511546745bf22958",
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
      "route": "02-work-environment",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-085",
      "order": 85,
      "path": "output/playwright/r24-inputs-20261116-remaining/02-work-environment-390-light-next-heading-x0-y0.png",
      "sha256": "a2fe66678427f844d5b6e04fb82e82d08d6caa7771d8b449bd77a824ce13f758",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "02-work-environment",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/02-work-environment-390-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 818,
          "documentRange": [
            1154.46875,
            1189.46875
          ],
          "targetRange": [
            1154.46875,
            1189.46875
          ],
          "clip": {
            "x": 16,
            "y": 336.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-086",
      "order": 86,
      "path": "output/playwright/r24-inputs-20261116-remaining/02-work-environment-390-light-next0-x0-y0.png",
      "sha256": "4cd2fb769406578f261d4a775600a75f2a7f6a4b50ab12a42a6868e506800e1e",
      "dimensions": {
        "width": 358,
        "height": 84
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "02-work-environment",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/02-work-environment-390-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 818,
          "documentRange": [
            1206.265625,
            1290.265625
          ],
          "targetRange": [
            1206.265625,
            1290.265625
          ],
          "clip": {
            "x": 16,
            "y": 388.265625,
            "width": 358,
            "height": 84
          }
        }
      }
    },
    {
      "id": "R24-PNG-087",
      "order": 87,
      "path": "output/playwright/r24-inputs-20261116-remaining/03-full-stack-1440-light-top.png",
      "sha256": "b728b394f78ceb1f3c29eea6a2279222f393e2ea4c7dab2035072f0d2f3e4386",
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
      "route": "03-full-stack",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-088",
      "order": 88,
      "path": "output/playwright/r24-inputs-20261116-remaining/03-full-stack-1440-light-next-heading-x0-y0.png",
      "sha256": "56f89d3a9ee30d8c8d33fb61b6d6d07542c6a6fb65e1eadbc27687622f1079c2",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "03-full-stack",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/03-full-stack-1440-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 248,
          "documentRange": [
            866.328125,
            907.328125
          ],
          "targetRange": [
            866.328125,
            907.328125
          ],
          "clip": {
            "x": 324,
            "y": 618.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-089",
      "order": 89,
      "path": "output/playwright/r24-inputs-20261116-remaining/03-full-stack-1440-light-next0-x0-y0.png",
      "sha256": "4fc6ff610c423d84f4a350ac0fe19f5c42c4d444934ea06f6b54a0d7c869f83a",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "03-full-stack",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/03-full-stack-1440-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 248,
          "documentRange": [
            924.328125,
            980.328125
          ],
          "targetRange": [
            924.328125,
            980.328125
          ],
          "clip": {
            "x": 324,
            "y": 676.328125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-090",
      "order": 90,
      "path": "output/playwright/r24-inputs-20261116-remaining/03-full-stack-390-dark-top.png",
      "sha256": "1b91f48b8f452efa257b88b39d3bd80cfcba7542295b5e8b66bc758644ee55eb",
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
      "route": "03-full-stack",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-091",
      "order": 91,
      "path": "output/playwright/r24-inputs-20261116-remaining/03-full-stack-390-dark-next-heading-x0-y0.png",
      "sha256": "03f69e4151caf50011d0e22164aac707ea2e4f31f49d2c620867e9a7ed8b0132",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "03-full-stack",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/03-full-stack-390-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 846,
          "documentRange": [
            1154.46875,
            1189.46875
          ],
          "targetRange": [
            1154.46875,
            1189.46875
          ],
          "clip": {
            "x": 16,
            "y": 308.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-092",
      "order": 92,
      "path": "output/playwright/r24-inputs-20261116-remaining/03-full-stack-390-dark-next0-x0-y0.png",
      "sha256": "8a141b49f29b9a3b3bfe2800d5eb7fed9d9c1f7e7fc681da541c30a9beba432c",
      "dimensions": {
        "width": 358,
        "height": 112
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "03-full-stack",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/03-full-stack-390-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 846,
          "documentRange": [
            1206.265625,
            1318.265625
          ],
          "targetRange": [
            1206.265625,
            1318.265625
          ],
          "clip": {
            "x": 16,
            "y": 360.265625,
            "width": 358,
            "height": 112
          }
        }
      }
    },
    {
      "id": "R24-PNG-093",
      "order": 93,
      "path": "output/playwright/r24-inputs-20261116-remaining/03-full-stack-1440-dark-top.png",
      "sha256": "61468076d99f50b95ea17429730d4c92235186b5c480e964b6530ff44e21387a",
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
      "route": "03-full-stack",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-094",
      "order": 94,
      "path": "output/playwright/r24-inputs-20261116-remaining/03-full-stack-1440-dark-next-heading-x0-y0.png",
      "sha256": "e71d726a155cf17948587911135125fd7e4337472825b225d504688a8e619e04",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "03-full-stack",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/03-full-stack-1440-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 248,
          "documentRange": [
            866.328125,
            907.328125
          ],
          "targetRange": [
            866.328125,
            907.328125
          ],
          "clip": {
            "x": 324,
            "y": 618.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-095",
      "order": 95,
      "path": "output/playwright/r24-inputs-20261116-remaining/03-full-stack-1440-dark-next0-x0-y0.png",
      "sha256": "aea7b71223d1ff3836a2120f124c0e1872b27f2c93aa731e373f7e624fdee32d",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "03-full-stack",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/03-full-stack-1440-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 248,
          "documentRange": [
            924.328125,
            980.328125
          ],
          "targetRange": [
            924.328125,
            980.328125
          ],
          "clip": {
            "x": 324,
            "y": 676.328125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-096",
      "order": 96,
      "path": "output/playwright/r24-inputs-20261116-remaining/03-full-stack-390-light-top.png",
      "sha256": "c21acb68f585cfceca6922ab87e4daf4dc984fbeae976dbf741603b71857449d",
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
      "route": "03-full-stack",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-097",
      "order": 97,
      "path": "output/playwright/r24-inputs-20261116-remaining/03-full-stack-390-light-next-heading-x0-y0.png",
      "sha256": "a2fe66678427f844d5b6e04fb82e82d08d6caa7771d8b449bd77a824ce13f758",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "03-full-stack",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/03-full-stack-390-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 846,
          "documentRange": [
            1154.46875,
            1189.46875
          ],
          "targetRange": [
            1154.46875,
            1189.46875
          ],
          "clip": {
            "x": 16,
            "y": 308.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-098",
      "order": 98,
      "path": "output/playwright/r24-inputs-20261116-remaining/03-full-stack-390-light-next0-x0-y0.png",
      "sha256": "b7fcc8bed568a45a75f7a6e8add358ea6efdc43a917c20b21387dfa06c91ea44",
      "dimensions": {
        "width": 358,
        "height": 112
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "03-full-stack",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/03-full-stack-390-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 846,
          "documentRange": [
            1206.265625,
            1318.265625
          ],
          "targetRange": [
            1206.265625,
            1318.265625
          ],
          "clip": {
            "x": 16,
            "y": 360.265625,
            "width": 358,
            "height": 112
          }
        }
      }
    },
    {
      "id": "R24-PNG-099",
      "order": 99,
      "path": "output/playwright/r24-inputs-20261116-remaining/04-backend-data-1440-light-top.png",
      "sha256": "6e15885152c5f75dde51f37d84030c958832b443e8ffa301211039370c2b9bdd",
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
      "route": "04-backend-data",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-100",
      "order": 100,
      "path": "output/playwright/r24-inputs-20261116-remaining/04-backend-data-1440-light-next-heading-x0-y0.png",
      "sha256": "56f89d3a9ee30d8c8d33fb61b6d6d07542c6a6fb65e1eadbc27687622f1079c2",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "04-backend-data",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/04-backend-data-1440-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 304,
          "documentRange": [
            922.328125,
            963.328125
          ],
          "targetRange": [
            922.328125,
            963.328125
          ],
          "clip": {
            "x": 324,
            "y": 618.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-101",
      "order": 101,
      "path": "output/playwright/r24-inputs-20261116-remaining/04-backend-data-1440-light-next0-x0-y0.png",
      "sha256": "cd954e68369ca22b2eeedd5bdb51d69d128042900f5376b63ff1c5cdd4592523",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "04-backend-data",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/04-backend-data-1440-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 304,
          "documentRange": [
            980.328125,
            1036.328125
          ],
          "targetRange": [
            980.328125,
            1036.328125
          ],
          "clip": {
            "x": 324,
            "y": 676.328125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-102",
      "order": 102,
      "path": "output/playwright/r24-inputs-20261116-remaining/04-backend-data-390-dark-top.png",
      "sha256": "156ec9b58f74de038aaad97ffbf65685475ee99706e3151d7d165e0c6f62c518",
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
      "route": "04-backend-data",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-103",
      "order": 103,
      "path": "output/playwright/r24-inputs-20261116-remaining/04-backend-data-390-dark-next-heading-x0-y0.png",
      "sha256": "03f69e4151caf50011d0e22164aac707ea2e4f31f49d2c620867e9a7ed8b0132",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/04-backend-data-390-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 902,
          "documentRange": [
            1210.46875,
            1245.46875
          ],
          "targetRange": [
            1210.46875,
            1245.46875
          ],
          "clip": {
            "x": 16,
            "y": 308.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-104",
      "order": 104,
      "path": "output/playwright/r24-inputs-20261116-remaining/04-backend-data-390-dark-next0-x0-y0.png",
      "sha256": "d6b492bc85b6b88c5030e7385a9369f9f6dfccc5627cbd547b1e82c6652a5546",
      "dimensions": {
        "width": 358,
        "height": 112
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/04-backend-data-390-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 902,
          "documentRange": [
            1262.265625,
            1374.265625
          ],
          "targetRange": [
            1262.265625,
            1374.265625
          ],
          "clip": {
            "x": 16,
            "y": 360.265625,
            "width": 358,
            "height": 112
          }
        }
      }
    },
    {
      "id": "R24-PNG-105",
      "order": 105,
      "path": "output/playwright/r24-inputs-20261116-remaining/04-backend-data-1440-dark-top.png",
      "sha256": "81211da362c86861ea25d9197788350b5a8dc895aa5a678af7e2c4f1c7870e7c",
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
      "route": "04-backend-data",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-106",
      "order": 106,
      "path": "output/playwright/r24-inputs-20261116-remaining/04-backend-data-1440-dark-next-heading-x0-y0.png",
      "sha256": "e71d726a155cf17948587911135125fd7e4337472825b225d504688a8e619e04",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "04-backend-data",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/04-backend-data-1440-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 304,
          "documentRange": [
            922.328125,
            963.328125
          ],
          "targetRange": [
            922.328125,
            963.328125
          ],
          "clip": {
            "x": 324,
            "y": 618.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-107",
      "order": 107,
      "path": "output/playwright/r24-inputs-20261116-remaining/04-backend-data-1440-dark-next0-x0-y0.png",
      "sha256": "6e094eea42f83af1ccc4b73a64dc21fc5a3afcfb88e2856c4b688dcefb47fbb3",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "04-backend-data",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/04-backend-data-1440-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 304,
          "documentRange": [
            980.328125,
            1036.328125
          ],
          "targetRange": [
            980.328125,
            1036.328125
          ],
          "clip": {
            "x": 324,
            "y": 676.328125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-108",
      "order": 108,
      "path": "output/playwright/r24-inputs-20261116-remaining/04-backend-data-390-light-top.png",
      "sha256": "e88b503231398d0113e89d91aca230ffd7aa2c355120a69d1ddebc9a61761ac9",
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
      "route": "04-backend-data",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-109",
      "order": 109,
      "path": "output/playwright/r24-inputs-20261116-remaining/04-backend-data-390-light-next-heading-x0-y0.png",
      "sha256": "a2fe66678427f844d5b6e04fb82e82d08d6caa7771d8b449bd77a824ce13f758",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/04-backend-data-390-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 902,
          "documentRange": [
            1210.46875,
            1245.46875
          ],
          "targetRange": [
            1210.46875,
            1245.46875
          ],
          "clip": {
            "x": 16,
            "y": 308.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-110",
      "order": 110,
      "path": "output/playwright/r24-inputs-20261116-remaining/04-backend-data-390-light-next0-x0-y0.png",
      "sha256": "c0f1e452ca33e23e90fdb58481f15f3d5746d57bfe274acae02712e8d20f22e8",
      "dimensions": {
        "width": 358,
        "height": 112
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/04-backend-data-390-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 902,
          "documentRange": [
            1262.265625,
            1374.265625
          ],
          "targetRange": [
            1262.265625,
            1374.265625
          ],
          "clip": {
            "x": 16,
            "y": 360.265625,
            "width": 358,
            "height": 112
          }
        }
      }
    },
    {
      "id": "R24-PNG-111",
      "order": 111,
      "path": "output/playwright/r24-inputs-20261116-remaining/05-frontend-1440-light-top.png",
      "sha256": "b2c01c40342f3e112f11b79629a5dd0861ec12e6244f2095fb4351b346e30425",
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
      "route": "05-frontend",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-112",
      "order": 112,
      "path": "output/playwright/r24-inputs-20261116-remaining/05-frontend-1440-light-next-heading-x0-y0.png",
      "sha256": "56f89d3a9ee30d8c8d33fb61b6d6d07542c6a6fb65e1eadbc27687622f1079c2",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "05-frontend",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/05-frontend-1440-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 276,
          "documentRange": [
            894.328125,
            935.328125
          ],
          "targetRange": [
            894.328125,
            935.328125
          ],
          "clip": {
            "x": 324,
            "y": 618.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-113",
      "order": 113,
      "path": "output/playwright/r24-inputs-20261116-remaining/05-frontend-1440-light-next0-x0-y0.png",
      "sha256": "50db4522e6a0f31e25fe0f6893f0cf5e45645325aff202e837a21e62161e4943",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "05-frontend",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/05-frontend-1440-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 276,
          "documentRange": [
            952.328125,
            1008.328125
          ],
          "targetRange": [
            952.328125,
            1008.328125
          ],
          "clip": {
            "x": 324,
            "y": 676.328125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-114",
      "order": 114,
      "path": "output/playwright/r24-inputs-20261116-remaining/05-frontend-390-dark-top.png",
      "sha256": "36d754b09a00d41deebd480d3772d7b925340cf3fe30ea3452a2bb19c1d5fe4e",
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
      "route": "05-frontend",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-115",
      "order": 115,
      "path": "output/playwright/r24-inputs-20261116-remaining/05-frontend-390-dark-next-heading-x0-y0.png",
      "sha256": "03f69e4151caf50011d0e22164aac707ea2e4f31f49d2c620867e9a7ed8b0132",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/05-frontend-390-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 874,
          "documentRange": [
            1182.46875,
            1217.46875
          ],
          "targetRange": [
            1182.46875,
            1217.46875
          ],
          "clip": {
            "x": 16,
            "y": 308.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-116",
      "order": 116,
      "path": "output/playwright/r24-inputs-20261116-remaining/05-frontend-390-dark-next0-x0-y0.png",
      "sha256": "8ad5b7798a54fcbaa86d34ff40d79faa762e8cd9aa8fed2c72372597e091d559",
      "dimensions": {
        "width": 358,
        "height": 112
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/05-frontend-390-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 874,
          "documentRange": [
            1234.265625,
            1346.265625
          ],
          "targetRange": [
            1234.265625,
            1346.265625
          ],
          "clip": {
            "x": 16,
            "y": 360.265625,
            "width": 358,
            "height": 112
          }
        }
      }
    },
    {
      "id": "R24-PNG-117",
      "order": 117,
      "path": "output/playwright/r24-inputs-20261116-remaining/05-frontend-1440-dark-top.png",
      "sha256": "071aed51d066a47fa445f75c63c53942a7298523e97a9a7e816f8ab136a7a03a",
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
      "route": "05-frontend",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-118",
      "order": 118,
      "path": "output/playwright/r24-inputs-20261116-remaining/05-frontend-1440-dark-next-heading-x0-y0.png",
      "sha256": "e71d726a155cf17948587911135125fd7e4337472825b225d504688a8e619e04",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "05-frontend",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/05-frontend-1440-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 276,
          "documentRange": [
            894.328125,
            935.328125
          ],
          "targetRange": [
            894.328125,
            935.328125
          ],
          "clip": {
            "x": 324,
            "y": 618.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-119",
      "order": 119,
      "path": "output/playwright/r24-inputs-20261116-remaining/05-frontend-1440-dark-next0-x0-y0.png",
      "sha256": "9eb1c6a614888cafe98b923d6bbce400db207183931b053e797fe4377cce98b8",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "05-frontend",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/05-frontend-1440-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 276,
          "documentRange": [
            952.328125,
            1008.328125
          ],
          "targetRange": [
            952.328125,
            1008.328125
          ],
          "clip": {
            "x": 324,
            "y": 676.328125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-120",
      "order": 120,
      "path": "output/playwright/r24-inputs-20261116-remaining/05-frontend-390-light-top.png",
      "sha256": "a0f7db8be27f0920c44d195fcfef9c24a91e30b0d941dd65972155b840333bb8",
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
      "route": "05-frontend",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-121",
      "order": 121,
      "path": "output/playwright/r24-inputs-20261116-remaining/05-frontend-390-light-next-heading-x0-y0.png",
      "sha256": "a2fe66678427f844d5b6e04fb82e82d08d6caa7771d8b449bd77a824ce13f758",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/05-frontend-390-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 874,
          "documentRange": [
            1182.46875,
            1217.46875
          ],
          "targetRange": [
            1182.46875,
            1217.46875
          ],
          "clip": {
            "x": 16,
            "y": 308.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-122",
      "order": 122,
      "path": "output/playwright/r24-inputs-20261116-remaining/05-frontend-390-light-next0-x0-y0.png",
      "sha256": "829f5733ae47ad6eb94c69920554c8cc43c6e1dfc42d43bb4c4214e6d6e2fabc",
      "dimensions": {
        "width": 358,
        "height": 112
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/05-frontend-390-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 874,
          "documentRange": [
            1234.265625,
            1346.265625
          ],
          "targetRange": [
            1234.265625,
            1346.265625
          ],
          "clip": {
            "x": 16,
            "y": 360.265625,
            "width": 358,
            "height": 112
          }
        }
      }
    },
    {
      "id": "R24-PNG-123",
      "order": 123,
      "path": "output/playwright/r24-inputs-20261116-remaining/06-requirements-design-1440-light-top.png",
      "sha256": "3d8e543c4c1322fee7240b0fe744622c8c8c3244bebdaa1ac0ba21bfcf0ffec3",
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
      "route": "06-requirements-design",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-124",
      "order": 124,
      "path": "output/playwright/r24-inputs-20261116-remaining/06-requirements-design-1440-light-next-heading-x0-y0.png",
      "sha256": "56f89d3a9ee30d8c8d33fb61b6d6d07542c6a6fb65e1eadbc27687622f1079c2",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "06-requirements-design",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/06-requirements-design-1440-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 276,
          "documentRange": [
            894.328125,
            935.328125
          ],
          "targetRange": [
            894.328125,
            935.328125
          ],
          "clip": {
            "x": 324,
            "y": 618.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-125",
      "order": 125,
      "path": "output/playwright/r24-inputs-20261116-remaining/06-requirements-design-1440-light-next0-x0-y0.png",
      "sha256": "bf123bb8d5f7088c5e48b9bc8262b2d1cb1e216b883988401d725d2115de362f",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "06-requirements-design",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/06-requirements-design-1440-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 276,
          "documentRange": [
            952.328125,
            1008.328125
          ],
          "targetRange": [
            952.328125,
            1008.328125
          ],
          "clip": {
            "x": 324,
            "y": 676.328125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-126",
      "order": 126,
      "path": "output/playwright/r24-inputs-20261116-remaining/06-requirements-design-390-dark-top.png",
      "sha256": "f185e5463d383935f683906e82684fb507d61f3a980b62b0dadf205aeac47405",
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
      "route": "06-requirements-design",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-127",
      "order": 127,
      "path": "output/playwright/r24-inputs-20261116-remaining/06-requirements-design-390-dark-next-heading-x0-y0.png",
      "sha256": "03f69e4151caf50011d0e22164aac707ea2e4f31f49d2c620867e9a7ed8b0132",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "06-requirements-design",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/06-requirements-design-390-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 958,
          "documentRange": [
            1266.46875,
            1301.46875
          ],
          "targetRange": [
            1266.46875,
            1301.46875
          ],
          "clip": {
            "x": 16,
            "y": 308.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-128",
      "order": 128,
      "path": "output/playwright/r24-inputs-20261116-remaining/06-requirements-design-390-dark-next0-x0-y0.png",
      "sha256": "2c57b929e077def03dde8c3b8797535a3d0c2f01feecaf82396a54af59246d21",
      "dimensions": {
        "width": 358,
        "height": 112
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "06-requirements-design",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/06-requirements-design-390-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 958,
          "documentRange": [
            1318.265625,
            1430.265625
          ],
          "targetRange": [
            1318.265625,
            1430.265625
          ],
          "clip": {
            "x": 16,
            "y": 360.265625,
            "width": 358,
            "height": 112
          }
        }
      }
    },
    {
      "id": "R24-PNG-129",
      "order": 129,
      "path": "output/playwright/r24-inputs-20261116-remaining/06-requirements-design-1440-dark-top.png",
      "sha256": "9bd80b7ec96a52f1a9031b702e5ae36d91f2a5822f33b58b1b2c6eb9554e6eb4",
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
      "route": "06-requirements-design",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-130",
      "order": 130,
      "path": "output/playwright/r24-inputs-20261116-remaining/06-requirements-design-1440-dark-next-heading-x0-y0.png",
      "sha256": "e71d726a155cf17948587911135125fd7e4337472825b225d504688a8e619e04",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "06-requirements-design",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/06-requirements-design-1440-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 276,
          "documentRange": [
            894.328125,
            935.328125
          ],
          "targetRange": [
            894.328125,
            935.328125
          ],
          "clip": {
            "x": 324,
            "y": 618.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-131",
      "order": 131,
      "path": "output/playwright/r24-inputs-20261116-remaining/06-requirements-design-1440-dark-next0-x0-y0.png",
      "sha256": "ff15eb27561789d087c14f287a45747005b3a83cd185e589ceeb0c0c8a25109c",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "06-requirements-design",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/06-requirements-design-1440-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 276,
          "documentRange": [
            952.328125,
            1008.328125
          ],
          "targetRange": [
            952.328125,
            1008.328125
          ],
          "clip": {
            "x": 324,
            "y": 676.328125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-132",
      "order": 132,
      "path": "output/playwright/r24-inputs-20261116-remaining/06-requirements-design-390-light-top.png",
      "sha256": "b13a669b173b8511347ead1e7575bb41807b00e82840453b7defea3cbcf5355b",
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
      "route": "06-requirements-design",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-133",
      "order": 133,
      "path": "output/playwright/r24-inputs-20261116-remaining/06-requirements-design-390-light-next-heading-x0-y0.png",
      "sha256": "a2fe66678427f844d5b6e04fb82e82d08d6caa7771d8b449bd77a824ce13f758",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "06-requirements-design",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/06-requirements-design-390-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 958,
          "documentRange": [
            1266.46875,
            1301.46875
          ],
          "targetRange": [
            1266.46875,
            1301.46875
          ],
          "clip": {
            "x": 16,
            "y": 308.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-134",
      "order": 134,
      "path": "output/playwright/r24-inputs-20261116-remaining/06-requirements-design-390-light-next0-x0-y0.png",
      "sha256": "cb5c0a978455103d9590e51540395545e001209ba1ec2aed7b4904fbf7190244",
      "dimensions": {
        "width": 358,
        "height": 112
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "06-requirements-design",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/06-requirements-design-390-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 958,
          "documentRange": [
            1318.265625,
            1430.265625
          ],
          "targetRange": [
            1318.265625,
            1430.265625
          ],
          "clip": {
            "x": 16,
            "y": 360.265625,
            "width": 358,
            "height": 112
          }
        }
      }
    },
    {
      "id": "R24-PNG-135",
      "order": 135,
      "path": "output/playwright/r24-inputs-20261116-remaining/07-workflow-methods-1440-light-top.png",
      "sha256": "6e5eebe7b60aa05ac4057ab0f189a1fbf1f7c9f805721080d636e118053c803a",
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
      "route": "07-workflow-methods",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-136",
      "order": 136,
      "path": "output/playwright/r24-inputs-20261116-remaining/07-workflow-methods-1440-light-next-heading-x0-y0.png",
      "sha256": "56f89d3a9ee30d8c8d33fb61b6d6d07542c6a6fb65e1eadbc27687622f1079c2",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "07-workflow-methods",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/07-workflow-methods-1440-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 276,
          "documentRange": [
            894.328125,
            935.328125
          ],
          "targetRange": [
            894.328125,
            935.328125
          ],
          "clip": {
            "x": 324,
            "y": 618.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-137",
      "order": 137,
      "path": "output/playwright/r24-inputs-20261116-remaining/07-workflow-methods-1440-light-next0-x0-y0.png",
      "sha256": "4d4dc38a7f785ede8abe6810ee45aa8ed3fcae265f6217c06b026a23499ee794",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "07-workflow-methods",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/07-workflow-methods-1440-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 276,
          "documentRange": [
            952.328125,
            1008.328125
          ],
          "targetRange": [
            952.328125,
            1008.328125
          ],
          "clip": {
            "x": 324,
            "y": 676.328125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-138",
      "order": 138,
      "path": "output/playwright/r24-inputs-20261116-remaining/07-workflow-methods-390-dark-top.png",
      "sha256": "aa4b747689cfc5f2fb072431ce923de6eb08850304efdbc7be08f15ebe16fd79",
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
      "route": "07-workflow-methods",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-139",
      "order": 139,
      "path": "output/playwright/r24-inputs-20261116-remaining/07-workflow-methods-390-dark-next-heading-x0-y0.png",
      "sha256": "03f69e4151caf50011d0e22164aac707ea2e4f31f49d2c620867e9a7ed8b0132",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/07-workflow-methods-390-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 902,
          "documentRange": [
            1210.46875,
            1245.46875
          ],
          "targetRange": [
            1210.46875,
            1245.46875
          ],
          "clip": {
            "x": 16,
            "y": 308.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-140",
      "order": 140,
      "path": "output/playwright/r24-inputs-20261116-remaining/07-workflow-methods-390-dark-next0-x0-y0.png",
      "sha256": "142e97877dc9740f0c984b196499d4840b217603cf3f19e74ac8f85ed901639d",
      "dimensions": {
        "width": 358,
        "height": 112
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "07-workflow-methods",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/07-workflow-methods-390-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 902,
          "documentRange": [
            1262.265625,
            1374.265625
          ],
          "targetRange": [
            1262.265625,
            1374.265625
          ],
          "clip": {
            "x": 16,
            "y": 360.265625,
            "width": 358,
            "height": 112
          }
        }
      }
    },
    {
      "id": "R24-PNG-141",
      "order": 141,
      "path": "output/playwright/r24-inputs-20261116-remaining/07-workflow-methods-1440-dark-top.png",
      "sha256": "8073ba62fb77c4b9d9e8cd8f093b935b4bdb23c5a4e5b0d7518bd52b1ed32072",
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
      "route": "07-workflow-methods",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-142",
      "order": 142,
      "path": "output/playwright/r24-inputs-20261116-remaining/07-workflow-methods-1440-dark-next-heading-x0-y0.png",
      "sha256": "e71d726a155cf17948587911135125fd7e4337472825b225d504688a8e619e04",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "07-workflow-methods",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/07-workflow-methods-1440-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 276,
          "documentRange": [
            894.328125,
            935.328125
          ],
          "targetRange": [
            894.328125,
            935.328125
          ],
          "clip": {
            "x": 324,
            "y": 618.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-143",
      "order": 143,
      "path": "output/playwright/r24-inputs-20261116-remaining/07-workflow-methods-1440-dark-next0-x0-y0.png",
      "sha256": "467022019dc2cd2719ae78afb75edbe6390f10d881e37fb5210a665328488497",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "07-workflow-methods",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/07-workflow-methods-1440-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 276,
          "documentRange": [
            952.328125,
            1008.328125
          ],
          "targetRange": [
            952.328125,
            1008.328125
          ],
          "clip": {
            "x": 324,
            "y": 676.328125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-144",
      "order": 144,
      "path": "output/playwright/r24-inputs-20261116-remaining/07-workflow-methods-390-light-top.png",
      "sha256": "d676e14d882e5f3462cb1bdf5acee66dcdefd6b6bf78d8f0d75511fa4f334f7b",
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
      "route": "07-workflow-methods",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-145",
      "order": 145,
      "path": "output/playwright/r24-inputs-20261116-remaining/07-workflow-methods-390-light-next-heading-x0-y0.png",
      "sha256": "a2fe66678427f844d5b6e04fb82e82d08d6caa7771d8b449bd77a824ce13f758",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/07-workflow-methods-390-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 902,
          "documentRange": [
            1210.46875,
            1245.46875
          ],
          "targetRange": [
            1210.46875,
            1245.46875
          ],
          "clip": {
            "x": 16,
            "y": 308.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-146",
      "order": 146,
      "path": "output/playwright/r24-inputs-20261116-remaining/07-workflow-methods-390-light-next0-x0-y0.png",
      "sha256": "c9cee9813e9b008aca4941af2fbf81b77da58998008f9c41a1e815bb5765824e",
      "dimensions": {
        "width": 358,
        "height": 112
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "07-workflow-methods",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/07-workflow-methods-390-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 902,
          "documentRange": [
            1262.265625,
            1374.265625
          ],
          "targetRange": [
            1262.265625,
            1374.265625
          ],
          "clip": {
            "x": 16,
            "y": 360.265625,
            "width": 358,
            "height": 112
          }
        }
      }
    },
    {
      "id": "R24-PNG-147",
      "order": 147,
      "path": "output/playwright/r24-inputs-20261116-remaining/08-quality-1440-light-top.png",
      "sha256": "3dea7202131eb40169a62b54d5d90f3f28dbc6da2d3c9f2599842669270c3d0f",
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
      "route": "08-quality",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-148",
      "order": 148,
      "path": "output/playwright/r24-inputs-20261116-remaining/08-quality-1440-light-next-heading-x0-y0.png",
      "sha256": "56f89d3a9ee30d8c8d33fb61b6d6d07542c6a6fb65e1eadbc27687622f1079c2",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "08-quality",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/08-quality-1440-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 248,
          "documentRange": [
            866.328125,
            907.328125
          ],
          "targetRange": [
            866.328125,
            907.328125
          ],
          "clip": {
            "x": 324,
            "y": 618.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-149",
      "order": 149,
      "path": "output/playwright/r24-inputs-20261116-remaining/08-quality-1440-light-next0-x0-y0.png",
      "sha256": "0bca975d01868d92ebc33bbf680153e39baf157eb83c25eed644c8b884610732",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "08-quality",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/08-quality-1440-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 248,
          "documentRange": [
            924.328125,
            980.328125
          ],
          "targetRange": [
            924.328125,
            980.328125
          ],
          "clip": {
            "x": 324,
            "y": 676.328125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-150",
      "order": 150,
      "path": "output/playwright/r24-inputs-20261116-remaining/08-quality-390-dark-top.png",
      "sha256": "a9c710c46001cc38debe5bac5482230b3c069c54a03793a4aa671952dd86d949",
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
      "route": "08-quality",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-151",
      "order": 151,
      "path": "output/playwright/r24-inputs-20261116-remaining/08-quality-390-dark-next-heading-x0-y0.png",
      "sha256": "03f69e4151caf50011d0e22164aac707ea2e4f31f49d2c620867e9a7ed8b0132",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "08-quality",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/08-quality-390-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 902,
          "documentRange": [
            1210.46875,
            1245.46875
          ],
          "targetRange": [
            1210.46875,
            1245.46875
          ],
          "clip": {
            "x": 16,
            "y": 308.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-152",
      "order": 152,
      "path": "output/playwright/r24-inputs-20261116-remaining/08-quality-390-dark-next0-x0-y0.png",
      "sha256": "d2a1374c2ced4aa454155a198b4796cf36fce6616d4ab246c0d40dd5fb31d1be",
      "dimensions": {
        "width": 358,
        "height": 112
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "08-quality",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/08-quality-390-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 902,
          "documentRange": [
            1262.265625,
            1374.265625
          ],
          "targetRange": [
            1262.265625,
            1374.265625
          ],
          "clip": {
            "x": 16,
            "y": 360.265625,
            "width": 358,
            "height": 112
          }
        }
      }
    },
    {
      "id": "R24-PNG-153",
      "order": 153,
      "path": "output/playwright/r24-inputs-20261116-remaining/08-quality-1440-dark-top.png",
      "sha256": "be1e8543e45e42871ab6dc98923296ebdbeb0dfd36108539f838d7dd6e9d1f68",
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
      "route": "08-quality",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-154",
      "order": 154,
      "path": "output/playwright/r24-inputs-20261116-remaining/08-quality-1440-dark-next-heading-x0-y0.png",
      "sha256": "e71d726a155cf17948587911135125fd7e4337472825b225d504688a8e619e04",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "08-quality",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/08-quality-1440-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 248,
          "documentRange": [
            866.328125,
            907.328125
          ],
          "targetRange": [
            866.328125,
            907.328125
          ],
          "clip": {
            "x": 324,
            "y": 618.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-155",
      "order": 155,
      "path": "output/playwright/r24-inputs-20261116-remaining/08-quality-1440-dark-next0-x0-y0.png",
      "sha256": "b213faedfa733e2124b683e33a623c833090ef3ebd9ca55adc37d48f660995d7",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "08-quality",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/08-quality-1440-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 248,
          "documentRange": [
            924.328125,
            980.328125
          ],
          "targetRange": [
            924.328125,
            980.328125
          ],
          "clip": {
            "x": 324,
            "y": 676.328125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-156",
      "order": 156,
      "path": "output/playwright/r24-inputs-20261116-remaining/08-quality-390-light-top.png",
      "sha256": "81e2c023474003ac6efb09e70d5b362bdab647e9b4298715f59d6a1278e98d68",
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
      "route": "08-quality",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-157",
      "order": 157,
      "path": "output/playwright/r24-inputs-20261116-remaining/08-quality-390-light-next-heading-x0-y0.png",
      "sha256": "a2fe66678427f844d5b6e04fb82e82d08d6caa7771d8b449bd77a824ce13f758",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "08-quality",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/08-quality-390-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 902,
          "documentRange": [
            1210.46875,
            1245.46875
          ],
          "targetRange": [
            1210.46875,
            1245.46875
          ],
          "clip": {
            "x": 16,
            "y": 308.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-158",
      "order": 158,
      "path": "output/playwright/r24-inputs-20261116-remaining/08-quality-390-light-next0-x0-y0.png",
      "sha256": "476336f744028de484f8827a6e66906aacd652aaf85ef67547046ccdeb7edd67",
      "dimensions": {
        "width": 358,
        "height": 112
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "08-quality",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/08-quality-390-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 902,
          "documentRange": [
            1262.265625,
            1374.265625
          ],
          "targetRange": [
            1262.265625,
            1374.265625
          ],
          "clip": {
            "x": 16,
            "y": 360.265625,
            "width": 358,
            "height": 112
          }
        }
      }
    },
    {
      "id": "R24-PNG-159",
      "order": 159,
      "path": "output/playwright/r24-inputs-20261116-remaining/09-git-github-1440-light-top.png",
      "sha256": "91ba1147339a5b47b39738b245c57060b2147d59ddbcf87a656b4df42fc4c8ea",
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
      "route": "09-git-github",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-160",
      "order": 160,
      "path": "output/playwright/r24-inputs-20261116-remaining/09-git-github-1440-light-next-heading-x0-y0.png",
      "sha256": "56f89d3a9ee30d8c8d33fb61b6d6d07542c6a6fb65e1eadbc27687622f1079c2",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "09-git-github",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/09-git-github-1440-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 248,
          "documentRange": [
            866.328125,
            907.328125
          ],
          "targetRange": [
            866.328125,
            907.328125
          ],
          "clip": {
            "x": 324,
            "y": 618.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-161",
      "order": 161,
      "path": "output/playwright/r24-inputs-20261116-remaining/09-git-github-1440-light-next0-x0-y0.png",
      "sha256": "4cfe10cd88628ab4c6f70e1c17dbf6de44d054782f835fea35b522331bc11d60",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "09-git-github",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/09-git-github-1440-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 248,
          "documentRange": [
            924.328125,
            980.328125
          ],
          "targetRange": [
            924.328125,
            980.328125
          ],
          "clip": {
            "x": 324,
            "y": 676.328125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-162",
      "order": 162,
      "path": "output/playwright/r24-inputs-20261116-remaining/09-git-github-390-dark-top.png",
      "sha256": "3fc4339fcc3c5fe162cb301c88a81c179825ea336d286b985cc1330843f139e8",
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
      "route": "09-git-github",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-163",
      "order": 163,
      "path": "output/playwright/r24-inputs-20261116-remaining/09-git-github-390-dark-next-heading-x0-y0.png",
      "sha256": "03f69e4151caf50011d0e22164aac707ea2e4f31f49d2c620867e9a7ed8b0132",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "09-git-github",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/09-git-github-390-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 874,
          "documentRange": [
            1182.46875,
            1217.46875
          ],
          "targetRange": [
            1182.46875,
            1217.46875
          ],
          "clip": {
            "x": 16,
            "y": 308.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-164",
      "order": 164,
      "path": "output/playwright/r24-inputs-20261116-remaining/09-git-github-390-dark-next0-x0-y0.png",
      "sha256": "702b42d65c75c0406713083eb139e3e69a6b72c4fcfb78524163b795cab62d9e",
      "dimensions": {
        "width": 358,
        "height": 112
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "09-git-github",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/09-git-github-390-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 874,
          "documentRange": [
            1234.265625,
            1346.265625
          ],
          "targetRange": [
            1234.265625,
            1346.265625
          ],
          "clip": {
            "x": 16,
            "y": 360.265625,
            "width": 358,
            "height": 112
          }
        }
      }
    },
    {
      "id": "R24-PNG-165",
      "order": 165,
      "path": "output/playwright/r24-inputs-20261116-remaining/09-git-github-1440-dark-top.png",
      "sha256": "3de4cf7b03028468c8f3d09aafa3198ddc60a7bd764ed1668fdf57a91ce9075e",
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
      "route": "09-git-github",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-166",
      "order": 166,
      "path": "output/playwright/r24-inputs-20261116-remaining/09-git-github-1440-dark-next-heading-x0-y0.png",
      "sha256": "e71d726a155cf17948587911135125fd7e4337472825b225d504688a8e619e04",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "09-git-github",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/09-git-github-1440-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 248,
          "documentRange": [
            866.328125,
            907.328125
          ],
          "targetRange": [
            866.328125,
            907.328125
          ],
          "clip": {
            "x": 324,
            "y": 618.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-167",
      "order": 167,
      "path": "output/playwright/r24-inputs-20261116-remaining/09-git-github-1440-dark-next0-x0-y0.png",
      "sha256": "cd8fde0d02be06e0dbf94b982799ccb6234f1c4e14a2d15a6f47dd9f9df1c049",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "09-git-github",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/09-git-github-1440-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 248,
          "documentRange": [
            924.328125,
            980.328125
          ],
          "targetRange": [
            924.328125,
            980.328125
          ],
          "clip": {
            "x": 324,
            "y": 676.328125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-168",
      "order": 168,
      "path": "output/playwright/r24-inputs-20261116-remaining/09-git-github-390-light-top.png",
      "sha256": "4d873088629253d98a8ee5c168c97b632b23e4e80b7d2d364cf8f49b91aa3efc",
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
      "route": "09-git-github",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-169",
      "order": 169,
      "path": "output/playwright/r24-inputs-20261116-remaining/09-git-github-390-light-next-heading-x0-y0.png",
      "sha256": "a2fe66678427f844d5b6e04fb82e82d08d6caa7771d8b449bd77a824ce13f758",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "09-git-github",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/09-git-github-390-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 874,
          "documentRange": [
            1182.46875,
            1217.46875
          ],
          "targetRange": [
            1182.46875,
            1217.46875
          ],
          "clip": {
            "x": 16,
            "y": 308.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-170",
      "order": 170,
      "path": "output/playwright/r24-inputs-20261116-remaining/09-git-github-390-light-next0-x0-y0.png",
      "sha256": "45a0699870b02413bf27aa979262927926285f324201a3f16c14c62b2024e1f1",
      "dimensions": {
        "width": 358,
        "height": 112
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "09-git-github",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/09-git-github-390-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 874,
          "documentRange": [
            1234.265625,
            1346.265625
          ],
          "targetRange": [
            1234.265625,
            1346.265625
          ],
          "clip": {
            "x": 16,
            "y": 360.265625,
            "width": 358,
            "height": 112
          }
        }
      }
    },
    {
      "id": "R24-PNG-171",
      "order": 171,
      "path": "output/playwright/r24-inputs-20261116-remaining/10-deployment-operations-1440-light-top.png",
      "sha256": "9435bc1f66947785529657f67e09694221392f5f29869f7b22c0a10362e2b9e5",
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
      "route": "10-deployment-operations",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-172",
      "order": 172,
      "path": "output/playwright/r24-inputs-20261116-remaining/10-deployment-operations-1440-light-next-heading-x0-y0.png",
      "sha256": "56f89d3a9ee30d8c8d33fb61b6d6d07542c6a6fb65e1eadbc27687622f1079c2",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "10-deployment-operations",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/10-deployment-operations-1440-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 276,
          "documentRange": [
            894.328125,
            935.328125
          ],
          "targetRange": [
            894.328125,
            935.328125
          ],
          "clip": {
            "x": 324,
            "y": 618.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-173",
      "order": 173,
      "path": "output/playwright/r24-inputs-20261116-remaining/10-deployment-operations-1440-light-next0-x0-y0.png",
      "sha256": "5d83b12f260301d3f7bc1c2c7e87dbf8bbf065e56f6b100fd910a1d0cdf9dc31",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "10-deployment-operations",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/10-deployment-operations-1440-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 276,
          "documentRange": [
            952.328125,
            1008.328125
          ],
          "targetRange": [
            952.328125,
            1008.328125
          ],
          "clip": {
            "x": 324,
            "y": 676.328125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-174",
      "order": 174,
      "path": "output/playwright/r24-inputs-20261116-remaining/10-deployment-operations-390-dark-top.png",
      "sha256": "95dc0aa6b3f1a63216861a4bc3f90192d09bedf05bb33cf09b91cdb287afb239",
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
      "route": "10-deployment-operations",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-175",
      "order": 175,
      "path": "output/playwright/r24-inputs-20261116-remaining/10-deployment-operations-390-dark-next-heading-x0-y0.png",
      "sha256": "03f69e4151caf50011d0e22164aac707ea2e4f31f49d2c620867e9a7ed8b0132",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "10-deployment-operations",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/10-deployment-operations-390-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 930,
          "documentRange": [
            1238.46875,
            1273.46875
          ],
          "targetRange": [
            1238.46875,
            1273.46875
          ],
          "clip": {
            "x": 16,
            "y": 308.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-176",
      "order": 176,
      "path": "output/playwright/r24-inputs-20261116-remaining/10-deployment-operations-390-dark-next0-x0-y0.png",
      "sha256": "7a43f4891360587ede23cc90a58bed18013a16b8d438514c10575d695bde928b",
      "dimensions": {
        "width": 358,
        "height": 112
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "10-deployment-operations",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/10-deployment-operations-390-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 930,
          "documentRange": [
            1290.265625,
            1402.265625
          ],
          "targetRange": [
            1290.265625,
            1402.265625
          ],
          "clip": {
            "x": 16,
            "y": 360.265625,
            "width": 358,
            "height": 112
          }
        }
      }
    },
    {
      "id": "R24-PNG-177",
      "order": 177,
      "path": "output/playwright/r24-inputs-20261116-remaining/10-deployment-operations-1440-dark-top.png",
      "sha256": "36c52c65fea8d311af7c729afc126fdc63a311f2f861f0c47ed622b14ebd11e2",
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
      "route": "10-deployment-operations",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-178",
      "order": 178,
      "path": "output/playwright/r24-inputs-20261116-remaining/10-deployment-operations-1440-dark-next-heading-x0-y0.png",
      "sha256": "e71d726a155cf17948587911135125fd7e4337472825b225d504688a8e619e04",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "10-deployment-operations",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/10-deployment-operations-1440-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 276,
          "documentRange": [
            894.328125,
            935.328125
          ],
          "targetRange": [
            894.328125,
            935.328125
          ],
          "clip": {
            "x": 324,
            "y": 618.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-179",
      "order": 179,
      "path": "output/playwright/r24-inputs-20261116-remaining/10-deployment-operations-1440-dark-next0-x0-y0.png",
      "sha256": "4db783817a3fc62b822253587128215daf76c85735e3cc63db285ee8913f8577",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "10-deployment-operations",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/10-deployment-operations-1440-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 276,
          "documentRange": [
            952.328125,
            1008.328125
          ],
          "targetRange": [
            952.328125,
            1008.328125
          ],
          "clip": {
            "x": 324,
            "y": 676.328125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-180",
      "order": 180,
      "path": "output/playwright/r24-inputs-20261116-remaining/10-deployment-operations-390-light-top.png",
      "sha256": "213557d1fc1909477beab3d73d14d0aff2d22473da2b540681c2cc626db80619",
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
      "route": "10-deployment-operations",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-181",
      "order": 181,
      "path": "output/playwright/r24-inputs-20261116-remaining/10-deployment-operations-390-light-next-heading-x0-y0.png",
      "sha256": "a2fe66678427f844d5b6e04fb82e82d08d6caa7771d8b449bd77a824ce13f758",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "10-deployment-operations",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/10-deployment-operations-390-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 930,
          "documentRange": [
            1238.46875,
            1273.46875
          ],
          "targetRange": [
            1238.46875,
            1273.46875
          ],
          "clip": {
            "x": 16,
            "y": 308.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-182",
      "order": 182,
      "path": "output/playwright/r24-inputs-20261116-remaining/10-deployment-operations-390-light-next0-x0-y0.png",
      "sha256": "89fd44bdf59a518050ebd37edd4d1d50dfb5c1cf57c168ce22e3143e66d95e0d",
      "dimensions": {
        "width": 358,
        "height": 112
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "10-deployment-operations",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/10-deployment-operations-390-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 930,
          "documentRange": [
            1290.265625,
            1402.265625
          ],
          "targetRange": [
            1290.265625,
            1402.265625
          ],
          "clip": {
            "x": 16,
            "y": 360.265625,
            "width": 358,
            "height": 112
          }
        }
      }
    },
    {
      "id": "R24-PNG-183",
      "order": 183,
      "path": "output/playwright/r24-inputs-20261116-remaining/11-ai-native-1440-light-top.png",
      "sha256": "d18a388bbfdbfe2591b3952e32fa8e35653565d0f7d3a6193bbf611f1c74891e",
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
      "route": "11-ai-native",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-184",
      "order": 184,
      "path": "output/playwright/r24-inputs-20261116-remaining/11-ai-native-1440-light-next-heading-x0-y0.png",
      "sha256": "56f89d3a9ee30d8c8d33fb61b6d6d07542c6a6fb65e1eadbc27687622f1079c2",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "11-ai-native",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/11-ai-native-1440-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 308,
          "documentRange": [
            926.328125,
            967.328125
          ],
          "targetRange": [
            926.328125,
            967.328125
          ],
          "clip": {
            "x": 324,
            "y": 618.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-185",
      "order": 185,
      "path": "output/playwright/r24-inputs-20261116-remaining/11-ai-native-1440-light-next0-x0-y0.png",
      "sha256": "3777911847f8ff581fbd0713e36b9447b289ea01c4ad86f91926b0f088a36b4e",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "11-ai-native",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/11-ai-native-1440-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 308,
          "documentRange": [
            984.328125,
            1040.328125
          ],
          "targetRange": [
            984.328125,
            1040.328125
          ],
          "clip": {
            "x": 324,
            "y": 676.328125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-186",
      "order": 186,
      "path": "output/playwright/r24-inputs-20261116-remaining/11-ai-native-390-dark-top.png",
      "sha256": "4fbedc698cbb746e1ba0fb5b68d7a48110740bc22c8958051a91d28dd1c877a8",
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
      "route": "11-ai-native",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-187",
      "order": 187,
      "path": "output/playwright/r24-inputs-20261116-remaining/11-ai-native-390-dark-next-heading-x0-y0.png",
      "sha256": "03f69e4151caf50011d0e22164aac707ea2e4f31f49d2c620867e9a7ed8b0132",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/11-ai-native-390-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 990,
          "documentRange": [
            1298.46875,
            1333.46875
          ],
          "targetRange": [
            1298.46875,
            1333.46875
          ],
          "clip": {
            "x": 16,
            "y": 308.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-188",
      "order": 188,
      "path": "output/playwright/r24-inputs-20261116-remaining/11-ai-native-390-dark-next0-x0-y0.png",
      "sha256": "8e755fba5ba8ac51af94c0b91c442d67d6eee596c90d65ea29c722dde93ab2d3",
      "dimensions": {
        "width": 358,
        "height": 112
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/11-ai-native-390-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 990,
          "documentRange": [
            1350.265625,
            1462.265625
          ],
          "targetRange": [
            1350.265625,
            1462.265625
          ],
          "clip": {
            "x": 16,
            "y": 360.265625,
            "width": 358,
            "height": 112
          }
        }
      }
    },
    {
      "id": "R24-PNG-189",
      "order": 189,
      "path": "output/playwright/r24-inputs-20261116-remaining/11-ai-native-1440-dark-top.png",
      "sha256": "3636106de20efb4d277bce271064eec6f9a556f0dd5d048997a2cdefad7ceae1",
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
      "route": "11-ai-native",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-190",
      "order": 190,
      "path": "output/playwright/r24-inputs-20261116-remaining/11-ai-native-1440-dark-next-heading-x0-y0.png",
      "sha256": "e71d726a155cf17948587911135125fd7e4337472825b225d504688a8e619e04",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "11-ai-native",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/11-ai-native-1440-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 308,
          "documentRange": [
            926.328125,
            967.328125
          ],
          "targetRange": [
            926.328125,
            967.328125
          ],
          "clip": {
            "x": 324,
            "y": 618.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-191",
      "order": 191,
      "path": "output/playwright/r24-inputs-20261116-remaining/11-ai-native-1440-dark-next0-x0-y0.png",
      "sha256": "281e8911c76a05ebe2ab69b6bf7bd143d33094cae1001befc52f1d605d795dea",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "11-ai-native",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/11-ai-native-1440-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 308,
          "documentRange": [
            984.328125,
            1040.328125
          ],
          "targetRange": [
            984.328125,
            1040.328125
          ],
          "clip": {
            "x": 324,
            "y": 676.328125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-192",
      "order": 192,
      "path": "output/playwright/r24-inputs-20261116-remaining/11-ai-native-390-light-top.png",
      "sha256": "75d1f0dcb2fa14c815db6f2ebb6605b2e4c082815256abeb794bc6b39830d85f",
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
      "route": "11-ai-native",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-193",
      "order": 193,
      "path": "output/playwright/r24-inputs-20261116-remaining/11-ai-native-390-light-next-heading-x0-y0.png",
      "sha256": "a2fe66678427f844d5b6e04fb82e82d08d6caa7771d8b449bd77a824ce13f758",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/11-ai-native-390-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 990,
          "documentRange": [
            1298.46875,
            1333.46875
          ],
          "targetRange": [
            1298.46875,
            1333.46875
          ],
          "clip": {
            "x": 16,
            "y": 308.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-194",
      "order": 194,
      "path": "output/playwright/r24-inputs-20261116-remaining/11-ai-native-390-light-next0-x0-y0.png",
      "sha256": "c87996b6d44a4ae6d0d69641da476ccade2c0fdf402052720b59062b6fa40189",
      "dimensions": {
        "width": 358,
        "height": 112
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/11-ai-native-390-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 990,
          "documentRange": [
            1350.265625,
            1462.265625
          ],
          "targetRange": [
            1350.265625,
            1462.265625
          ],
          "clip": {
            "x": 16,
            "y": 360.265625,
            "width": 358,
            "height": 112
          }
        }
      }
    },
    {
      "id": "R24-PNG-195",
      "order": 195,
      "path": "output/playwright/r24-inputs-20261116-remaining/12-case-studies-1440-light-top.png",
      "sha256": "8155533a4bbabced5d062d98b8ba94bc6b411387305ec0e5f2bad0c8c86c776b",
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
      "route": "12-case-studies",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-196",
      "order": 196,
      "path": "output/playwright/r24-inputs-20261116-remaining/12-case-studies-1440-light-next-heading-x0-y0.png",
      "sha256": "56f89d3a9ee30d8c8d33fb61b6d6d07542c6a6fb65e1eadbc27687622f1079c2",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "12-case-studies",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/12-case-studies-1440-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 359,
          "documentRange": [
            946.328125,
            987.328125
          ],
          "targetRange": [
            946.328125,
            987.328125
          ],
          "clip": {
            "x": 324,
            "y": 587.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-197",
      "order": 197,
      "path": "output/playwright/r24-inputs-20261116-remaining/12-case-studies-1440-light-next0-x0-y0.png",
      "sha256": "694b8633df9e025d1b93eed5c6af62cf232bfa8beb145b5c7aef174ff813262d",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "12-case-studies",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/12-case-studies-1440-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 359,
          "documentRange": [
            1004.328125,
            1060.328125
          ],
          "targetRange": [
            1004.328125,
            1060.328125
          ],
          "clip": {
            "x": 324,
            "y": 645.328125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-198",
      "order": 198,
      "path": "output/playwright/r24-inputs-20261116-remaining/12-case-studies-390-dark-top.png",
      "sha256": "ed620d313e22a2ef3cd0e5c2ee91ed47ead0754fd02761172ab130e828cd2f86",
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
      "route": "12-case-studies",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-199",
      "order": 199,
      "path": "output/playwright/r24-inputs-20261116-remaining/12-case-studies-390-dark-next-heading-x0-y0.png",
      "sha256": "03f69e4151caf50011d0e22164aac707ea2e4f31f49d2c620867e9a7ed8b0132",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "12-case-studies",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/12-case-studies-390-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1013,
          "documentRange": [
            1290.46875,
            1325.46875
          ],
          "targetRange": [
            1290.46875,
            1325.46875
          ],
          "clip": {
            "x": 16,
            "y": 277.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-200",
      "order": 200,
      "path": "output/playwright/r24-inputs-20261116-remaining/12-case-studies-390-dark-next0-x0-y0.png",
      "sha256": "d6b3ba1c5e767ac454b3530677e1849f868b57acf5b00dcff045e467f40750a1",
      "dimensions": {
        "width": 358,
        "height": 112
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "12-case-studies",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/12-case-studies-390-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1013,
          "documentRange": [
            1342.265625,
            1454.265625
          ],
          "targetRange": [
            1342.265625,
            1454.265625
          ],
          "clip": {
            "x": 16,
            "y": 329.265625,
            "width": 358,
            "height": 112
          }
        }
      }
    },
    {
      "id": "R24-PNG-201",
      "order": 201,
      "path": "output/playwright/r24-inputs-20261116-remaining/12-case-studies-1440-dark-top.png",
      "sha256": "a141a643a1764419c36cf45e56eafbf41d6b7995223411c95c20cf896aefe533",
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
      "route": "12-case-studies",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-202",
      "order": 202,
      "path": "output/playwright/r24-inputs-20261116-remaining/12-case-studies-1440-dark-next-heading-x0-y0.png",
      "sha256": "e71d726a155cf17948587911135125fd7e4337472825b225d504688a8e619e04",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "12-case-studies",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/12-case-studies-1440-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 359,
          "documentRange": [
            946.328125,
            987.328125
          ],
          "targetRange": [
            946.328125,
            987.328125
          ],
          "clip": {
            "x": 324,
            "y": 587.328125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-203",
      "order": 203,
      "path": "output/playwright/r24-inputs-20261116-remaining/12-case-studies-1440-dark-next0-x0-y0.png",
      "sha256": "25f5bfcaedd1ed1efbca065c60e2e3098483837d82b60fc256ca92c3251383eb",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "12-case-studies",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/12-case-studies-1440-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 359,
          "documentRange": [
            1004.328125,
            1060.328125
          ],
          "targetRange": [
            1004.328125,
            1060.328125
          ],
          "clip": {
            "x": 324,
            "y": 645.328125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-204",
      "order": 204,
      "path": "output/playwright/r24-inputs-20261116-remaining/12-case-studies-390-light-top.png",
      "sha256": "bd3fde2a46dcae6870473dc5b6ab1a75b1a8d6c97add50c16ea9887b5e5ea7fc",
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
      "route": "12-case-studies",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-205",
      "order": 205,
      "path": "output/playwright/r24-inputs-20261116-remaining/12-case-studies-390-light-next-heading-x0-y0.png",
      "sha256": "a2fe66678427f844d5b6e04fb82e82d08d6caa7771d8b449bd77a824ce13f758",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "12-case-studies",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/12-case-studies-390-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1013,
          "documentRange": [
            1290.46875,
            1325.46875
          ],
          "targetRange": [
            1290.46875,
            1325.46875
          ],
          "clip": {
            "x": 16,
            "y": 277.46875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-206",
      "order": 206,
      "path": "output/playwright/r24-inputs-20261116-remaining/12-case-studies-390-light-next0-x0-y0.png",
      "sha256": "d3d90bc50be7d025c2db22532c34c79d6460a3af908bcccb64f694f2c1e43e17",
      "dimensions": {
        "width": 358,
        "height": 112
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "12-case-studies",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/12-case-studies-390-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1013,
          "documentRange": [
            1342.265625,
            1454.265625
          ],
          "targetRange": [
            1342.265625,
            1454.265625
          ],
          "clip": {
            "x": 16,
            "y": 329.265625,
            "width": 358,
            "height": 112
          }
        }
      }
    },
    {
      "id": "R24-PNG-207",
      "order": 207,
      "path": "output/playwright/r24-inputs-20261116-remaining/reference-1440-dark-top.png",
      "sha256": "f56aff6bffc9932d1150ca051c7cde07bb1c9ce0472f38ef33fe6117943b92bc",
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
      "route": "reference",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-208",
      "order": 208,
      "path": "output/playwright/r24-inputs-20261116-remaining/reference-1440-dark-next-heading-x0-y0.png",
      "sha256": "e71d726a155cf17948587911135125fd7e4337472825b225d504688a8e619e04",
      "dimensions": {
        "width": 167,
        "height": 41
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "reference",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/reference-1440-dark-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 268,
          "documentRange": [
            855.828125,
            896.828125
          ],
          "targetRange": [
            855.828125,
            896.828125
          ],
          "clip": {
            "x": 324,
            "y": 587.828125,
            "width": 167.015625,
            "height": 41
          }
        }
      }
    },
    {
      "id": "R24-PNG-209",
      "order": 209,
      "path": "output/playwright/r24-inputs-20261116-remaining/reference-1440-dark-next0-x0-y0.png",
      "sha256": "62bd3bcb429cfa8ee4bff3e53e6237f557a1e8057829dc01b03a5c3ad32b3e8d",
      "dimensions": {
        "width": 788,
        "height": 56
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "reference",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/reference-1440-dark-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 268,
          "documentRange": [
            913.828125,
            969.828125
          ],
          "targetRange": [
            913.828125,
            969.828125
          ],
          "clip": {
            "x": 324,
            "y": 645.828125,
            "width": 788,
            "height": 56
          }
        }
      }
    },
    {
      "id": "R24-PNG-210",
      "order": 210,
      "path": "output/playwright/r24-inputs-20261116-remaining/reference-390-light-top.png",
      "sha256": "a587154a4e93e5911c0db8c278a3a5f25a9334f4d254ea0d02de5d1031f1f5a9",
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
      "route": "reference",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": null
      }
    },
    {
      "id": "R24-PNG-211",
      "order": 211,
      "path": "output/playwright/r24-inputs-20261116-remaining/reference-390-light-next-heading-x0-y0.png",
      "sha256": "a2fe66678427f844d5b6e04fb82e82d08d6caa7771d8b449bd77a824ce13f758",
      "dimensions": {
        "width": 138,
        "height": 35
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "reference",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/reference-390-light-next-heading-x0-y0.png",
          "label": "next-heading",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 974,
          "documentRange": [
            1250.96875,
            1285.96875
          ],
          "targetRange": [
            1250.96875,
            1285.96875
          ],
          "clip": {
            "x": 16,
            "y": 276.96875,
            "width": 138.375,
            "height": 35
          }
        }
      }
    },
    {
      "id": "R24-PNG-212",
      "order": 212,
      "path": "output/playwright/r24-inputs-20261116-remaining/reference-390-light-next0-x0-y0.png",
      "sha256": "cc8fb6a3990287ae99e3c3266878ba4a7cf2419757b732bf2f754abf826b7901",
      "dimensions": {
        "width": 358,
        "height": 112
      },
      "kind": "table-prompt-diagram-or-navigation-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "reference",
      "provenance": {
        "observations": "output/playwright/r24-inputs-20261116-observations.json",
        "capture": {
          "path": "output/playwright/r24-inputs-20261116-remaining/reference-390-light-next0-x0-y0.png",
          "label": "next0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 974,
          "documentRange": [
            1302.765625,
            1414.765625
          ],
          "targetRange": [
            1302.765625,
            1414.765625
          ],
          "clip": {
            "x": 16,
            "y": 328.765625,
            "width": 358,
            "height": 112
          }
        }
      }
    },
    {
      "id": "R24-PNG-213",
      "order": 213,
      "path": "output/playwright/r24-search-20261116-desktop/q0-results.png",
      "sha256": "a0075ccb11b3d1d1ed10db2db0cee11242c722c85eda224613785ce8a83c30ab",
      "dimensions": {
        "width": 1440,
        "height": 1000
      },
      "kind": "search-result-or-enter-destination",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "query": "백엔드",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-search-20261116-desktop/observations.json"
      }
    },
    {
      "id": "R24-PNG-214",
      "order": 214,
      "path": "output/playwright/r24-search-20261116-desktop/q0-destination.png",
      "sha256": "54e0fb592b00b4cf8beb9fe43e5d75ee0657cfe8aa2e85bde5d272916b97d003",
      "dimensions": {
        "width": 1440,
        "height": 1000
      },
      "kind": "search-result-or-enter-destination",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "query": "백엔드",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-search-20261116-desktop/observations.json"
      }
    },
    {
      "id": "R24-PNG-215",
      "order": 215,
      "path": "output/playwright/r24-search-20261116-desktop/q1-results.png",
      "sha256": "0fd319bc6ece4a3b0a47bd1b5d9446c2999b490f79894607e04fbede4a1ba37b",
      "dimensions": {
        "width": 1440,
        "height": 1000
      },
      "kind": "search-result-or-enter-destination",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "query": "authentication",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-search-20261116-desktop/observations.json"
      }
    },
    {
      "id": "R24-PNG-216",
      "order": 216,
      "path": "output/playwright/r24-search-20261116-desktop/q1-destination.png",
      "sha256": "523531c37663f2e8dc17e0baac4c280d1196d0b4fe11fe4fa92fafea987830a8",
      "dimensions": {
        "width": 1440,
        "height": 1000
      },
      "kind": "search-result-or-enter-destination",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "query": "authentication",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-search-20261116-desktop/observations.json"
      }
    },
    {
      "id": "R24-PNG-217",
      "order": 217,
      "path": "output/playwright/r24-search-20261116-desktop/q2-results.png",
      "sha256": "8d3eb8b0581d4978839516cf2c7a09c6780e78e31aab289358c60577f1faec49",
      "dimensions": {
        "width": 1440,
        "height": 1000
      },
      "kind": "search-result-or-enter-destination",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "query": "SDD",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-search-20261116-desktop/observations.json"
      }
    },
    {
      "id": "R24-PNG-218",
      "order": 218,
      "path": "output/playwright/r24-search-20261116-desktop/q2-destination.png",
      "sha256": "641ca2599b6989fe5b6867732b8fdde8dbcb5e3c3445c02c9ed33c55f407b1a4",
      "dimensions": {
        "width": 1440,
        "height": 1000
      },
      "kind": "search-result-or-enter-destination",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "query": "SDD",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-search-20261116-desktop/observations.json"
      }
    },
    {
      "id": "R24-PNG-219",
      "order": 219,
      "path": "output/playwright/r24-search-20261116-desktop/q3-results.png",
      "sha256": "1be6c851b73a7decad128334e00a6e160cbd0a8e991adc6b7ca999038398ce70",
      "dimensions": {
        "width": 1440,
        "height": 1000
      },
      "kind": "search-result-or-enter-destination",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "query": "로그인은 됐는데 참가 신청이 거절됨",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-search-20261116-desktop/observations.json"
      }
    },
    {
      "id": "R24-PNG-220",
      "order": 220,
      "path": "output/playwright/r24-search-20261116-mobile/q0-results.png",
      "sha256": "ae764316796665198a59af1cda881754c3223bdfb6dd4af868a33ade6e539c6b",
      "dimensions": {
        "width": 390,
        "height": 844
      },
      "kind": "search-result-or-enter-destination",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "query": "백엔드",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-search-20261116-mobile/observations.json"
      }
    },
    {
      "id": "R24-PNG-221",
      "order": 221,
      "path": "output/playwright/r24-search-20261116-mobile/q0-destination.png",
      "sha256": "12fd047f1bd026731d280aac85e586a23bd5f033fed009d3b33c42f4696657a0",
      "dimensions": {
        "width": 390,
        "height": 844
      },
      "kind": "search-result-or-enter-destination",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "query": "백엔드",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-search-20261116-mobile/observations.json"
      }
    },
    {
      "id": "R24-PNG-222",
      "order": 222,
      "path": "output/playwright/r24-search-20261116-mobile/q1-results.png",
      "sha256": "7bffeb745761c8fbbba83c2747d69fbdd66c6010b9242a10240357e3c3a8db50",
      "dimensions": {
        "width": 390,
        "height": 844
      },
      "kind": "search-result-or-enter-destination",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "query": "authentication",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-search-20261116-mobile/observations.json"
      }
    },
    {
      "id": "R24-PNG-223",
      "order": 223,
      "path": "output/playwright/r24-search-20261116-mobile/q1-destination.png",
      "sha256": "b50044e1046f410d5b503ab3eb9d0bfb25aa0d493cfece5abe505eea0618f5fd",
      "dimensions": {
        "width": 390,
        "height": 844
      },
      "kind": "search-result-or-enter-destination",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "query": "authentication",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-search-20261116-mobile/observations.json"
      }
    },
    {
      "id": "R24-PNG-224",
      "order": 224,
      "path": "output/playwright/r24-search-20261116-mobile/q2-results.png",
      "sha256": "23c2ffd98756c8f647d0fbde922a2f3fdd6764c41d36769342df452fa988356b",
      "dimensions": {
        "width": 390,
        "height": 844
      },
      "kind": "search-result-or-enter-destination",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "query": "SDD",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-search-20261116-mobile/observations.json"
      }
    },
    {
      "id": "R24-PNG-225",
      "order": 225,
      "path": "output/playwright/r24-search-20261116-mobile/q2-destination.png",
      "sha256": "b0b1aa385021cf3da1ea67e91e2703675f80d6e535902181c3e9fd7e9e9a25a7",
      "dimensions": {
        "width": 390,
        "height": 844
      },
      "kind": "search-result-or-enter-destination",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "query": "SDD",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-search-20261116-mobile/observations.json"
      }
    },
    {
      "id": "R24-PNG-226",
      "order": 226,
      "path": "output/playwright/r24-search-20261116-mobile/q3-results.png",
      "sha256": "ec1120d21943bcf29774148c4a7065f05ef77e8115f1aafe9d4e801426cdd757",
      "dimensions": {
        "width": 390,
        "height": 844
      },
      "kind": "search-result-or-enter-destination",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "query": "로그인은 됐는데 참가 신청이 거절됨",
      "route": "start-here/how-to-use-this-guide",
      "provenance": {
        "observations": "output/playwright/r24-search-20261116-mobile/observations.json"
      }
    }
  ]
}
```
<!-- m5-r24-request:data:end -->
