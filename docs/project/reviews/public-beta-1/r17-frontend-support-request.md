# R17 프런트엔드 지원 — 고정 검토 요청

기준 commit dd7dfd9c69b61eeaf610251e9fc5baa07ab1350e, 입력 고정2026-11-15. 두 대상 원고의 frontmatter부터 끝까지와 full_text_paths 전체, context_excerpts의 명시 범위를 실제 읽습니다. R05 원고/최초/후속/재판정/정확전이는 R05-I02의 실제 국소 수정과 해소 연결 문맥이며 완료된 R05 전체를 새 검토하는 것이 아닙니다. R17 전체원고는 이번 fresh reviewer가 새로 검토해야 합니다.

Controller·작성자·이전 대화와 분리된 fresh gpt-6-astra/high 저장 세션입니다. 공식 ChatGPT 구독·실제 모델/effort·history0·readOnly/networkfalse·도구/MCP 비활성을 실행에서 확인하고 같은 저장 ID를 실제 복구해 후속 검토합니다. R02승계예외·API키·추가크레딧·전역설정/인증 변경은 허용하지 않습니다.

공통 계약 C01~C12·한국어 여섯절·각원고9항목18점/치명기준을 적용하며 묶음 평균으로 미달을 숨기지 않습니다. 의미구조/네이티브/ARIA·키보드/포커스·접근가능이름/레이블·색상/대비·대체정보·200%텍스트확대와320CSS픽셀리플로/2차원예외·상태메시지/오류·증거층을 대조합니다. UI상태/전이/서버권위/현재상태와개별요청결과/낙관적표시/중복·멱등·unknown·복구오라클을 두사례와 대조합니다. R05-I02 해소는 유지되는지 확인하되 새로운 결함을 제한하지 않습니다.

새 직접근거는 W3C 규범/비규범/튜토리얼/APG·RFC9110 관련절을 추적합니다. 제품·보조기술·법률·실제DB/API 구현성공으로 확대하지 않습니다. R05 역사·출처 과거날짜는 보존하고 이번새확인범위를 구분합니다. 두원고는 소유SVG/Mermaid/이미지가 없으나 표·프롬프트의 실제 시각 판독은 필수입니다.

두경로×1440/390×light/dark8상태의 실제PNG104개를 localImage/detail original로 전달합니다. 대표1440light/390dark4상태52개 중 controller22개(제목4·긴표12·프롬프트6)를 실제읽은 뒤 반대테마4상태52개로 확장하고 추가4개를읽었습니다. controller26개판독을104개전체판독으로 계산하지 않습니다. Reviewer는104개를 모두 실제입력으로 읽고 ID별관측/한계를 남겨야 합니다. 표/프롬프트는 화면안으로 이동한 viewport clip이고 세로중첩·가로스크롤값·문서좌표를 기록해 R16의 화면밖캡처문제를 재사용하지 않았습니다. 각HTTP200/H1하나/초안/theme/overflow/errors정상이며 원고전체텍스트는 별도완독합니다. 1024·키보드·200%/320·스크린리더·DB/API는 이번새실행범위가 아니며 원고내용과 사이트적합성검증을 구분합니다.

입력준비는 원고PASS/review/M5/ready/공개승인이 아닙니다. 도구·쓰기·셸·웹·MCP·위임 없이 응답만 반환하세요. 준비검사기/테스트의 C/I/M와 체크포인트적합성은 원고판정과 별도입니다. 개인home절대경로·전체비공개세션ID를 출력하지 마세요. 최초정상결과는 수정전별도커밋하고 전송후불변성감사를 수행합니다.

<!-- m5-r17-request:data:start -->
```json
{
  "schema_version": 1,
  "review_id": "R17",
  "baseline_commit": "dd7dfd9c69b61eeaf610251e9fc5baa07ab1350e",
  "targets": [
    "src/content/docs/05-frontend/accessibility-responsive-design.md",
    "src/content/docs/05-frontend/ui-state-and-ux.md"
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
    "src/content/docs/05-frontend/accessibility-responsive-design.md",
    "src/content/docs/05-frontend/ui-state-and-ux.md",
    "research/public-beta-review-source-excerpts/r17-frontend-support-2026-11-15.md",
    "docs/project/reviews/public-beta-1/r05-browser-dom-codex-review.md",
    "docs/project/reviews/public-beta-1/r05-browser-dom-adjudication.md",
    "docs/project/reviews/public-beta-1/r05-browser-dom-codex-rereview.md",
    "scripts/r05-fix-transition.mjs",
    "src/content/docs/05-frontend/browser-dom-rendering.md",
    "research/meeting-webapp-case-brief.md",
    "research/stock-dashboard-case-brief.md",
    "src/content/docs/reference/development-glossary.md",
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
      "sha256": "8ef79bd722a043940b211c7cb1071955a90da79fd4f83078d73e3a39e72e2590",
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
      "sha256": "cba375f7c9203880f7e506112cf4c572b11828a27c70f70e820ec1c2e201ddbf",
      "segments": [
        {
          "start_line": 350,
          "end_line": 359,
          "text": "| `05-frontend/browser-dom-rendering.md` | https://www.w3.org/TR/WCAG22/ | 2026-08-13, W3C Recommendation 12 December 2024 | 의미·관계, 키보드, 확대·리플로, 이름·역할·값 등 픽셀 이외의 사용자 결과를 검증하는 접근성 규범 범위. DOM·화면 존재나 한 자동 검사를 전체 WCAG 적합으로 사용하지 않음 |\n| `05-frontend/accessibility-responsive-design.md` | https://www.w3.org/TR/WCAG22/ | 2026-08-13, W3C Recommendation 12 December 2024 | 비텍스트 콘텐츠, 정보·관계, 키보드, 포커스, 확대, 리플로, 대비, 색상 외 정보, 레이블과 이름, 이름·역할·값, 상태 메시지를 포함한 웹 콘텐츠 성공 기준의 규범 범위. 한 자동 검사·화면 폭·브라우저·보조 기술 조합을 전체 적합으로 확대하지 않음 |\n| `05-frontend/accessibility-responsive-design.md` | https://www.w3.org/WAI/WCAG22/Understanding/reflow.html, https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html | 2026-08-13, W3C WCAG 2.2 Understanding 비규범 해설 | 320 CSS 픽셀 상당의 리플로, 2차원 배치가 필요한 부분의 예외와 페이지 나머지 범위, 보이는 레이블과 접근 가능한 이름을 맞추는 이유의 해설 범위. Understanding 문서를 규범 성공 기준 자체나 모든 사용자 필요의 완료 증거로 사용하지 않음 |\n| `05-frontend/accessibility-responsive-design.md` | https://www.w3.org/WAI/tutorials/images/ | 2026-08-13, W3C WAI 교육 자료 | 정보·기능·장식 등 이미지 목적에 따라 텍스트 대안을 선택하는 교육 범위. 이미지 대체 텍스트를 차트의 동등한 표·키보드 필터·동적 상태 전달이나 전체 접근성 완료로 확대하지 않음 |\n| `05-frontend/accessibility-responsive-design.md` | 저장소 내부 `research/meeting-webapp-case-brief.md`, `research/stock-dashboard-case-brief.md` | 2026-08-10 | 모임 참가·자기 취소의 로딩·성공·충돌·결과 불명과 교육용 대시보드의 상태 텍스트·색상 단독 금지·표와 차트의 동등한 핵심 정보·키보드·상태 전달 계약에 적용하는 범위. 실제 서비스·시장 데이터·접근성 적합 완료로 사용하지 않음 |\n| `05-frontend/browser-dom-rendering.md` | 저장소 내부 `research/stock-dashboard-case-brief.md`의 `EDU-FIXTURE` | 2026-08-10 | 교육용 주가 fixture 조회를 응답 성공과 화면 성공의 증거 경계를 설명하는 표면 사례 문맥으로만 사용하며 실제 시장·상품·시세·원천·권리의 근거로 사용하지 않음 |\n| `05-frontend/ui-state-and-ux.md` | https://www.rfc-editor.org/rfc/rfc9110.html | 2026-08-13, IETF Standards Track RFC 9110 | safe·idempotent method와 통신 실패 뒤 자동 재시도 주의의 규범 범위. 모든 `POST`의 중복 방지·업무 요청 식별자·낙관적 UI·복구 오라클을 RFC가 자동으로 정한다고 확대하지 않음 |\n| `05-frontend/ui-state-and-ux.md` | https://www.w3.org/TR/WCAG22/, https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html | 2026-08-13, W3C Recommendation과 비규범 Understanding 해설 | 오류 식별·제안, 이름·역할·값, 상태 메시지와 포커스를 옮기지 않은 비동기 결과 전달의 접근성 범위. WCAG를 서버 권위·동시성·데이터 정확성 또는 모든 상태 알림의 구현법으로 확대하지 않음 |\n| `05-frontend/ui-state-and-ux.md` | 저장소 내부 `research/meeting-webapp-case-brief.md`, `research/stock-dashboard-case-brief.md` | 2026-08-10 | 모임 참가·자기 취소의 인증·중복·모집 상태·정원·동시 요청과 교육용 대시보드의 값 상태·신선도·현재 공개·마지막 정상 버전을 UI 상태·권위 상태·복구 오라클로 구분하는 범위. 실제 API·시장 데이터·배포 성공으로 사용하지 않음 |\n| `06-requirements-design/adr-and-tradeoffs.md` | https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions | 2026-08-13, Michael Nygard 원형 1차 기록 | 한 개의 architecturally significant decision, title·status·context·decision·consequences, `proposed`·`accepted`·`deprecated`·`superseded`와 과거 기록 보존 범위. 모든 조직의 유일한 양식으로 확대하지 않으며 alternatives·assumptions·evidence·revisit trigger는 이 핸드북의 명시적 확장 필드 |"
        }
      ]
    },
    {
      "path": "research/public-beta-source-gap-register.md",
      "sha256": "eefe11c1c41b74d3e01fa11dd403426584c4bb18dddbe8c1ca3782e4d05025bd",
      "segments": [
        {
          "start_line": 36,
          "end_line": 38,
          "text": "| PBSG-002 | PB-026 `frontend-backend-boundary.md`; PB-029 `data-model-schema-migration.md`; PB-030 `state-cache-queue.md` | 클라이언트와 서버의 신뢰 경계, 스키마 변경과 데이터 보존, 권위 원본·캐시·큐의 일관성 및 재시도 | important | RFC 9110·9111, OWASP AJAX·Authorization, Chrome DevTools, PostgreSQL 18의 테이블·제약·ALTER·트랜잭션·격리, RabbitMQ 공식 reliability·queue, Parallel Change·Continuous Integration·Evolutionary Database Design의 1차 패턴 자료 | 2026-08-13 확인; 웹 표준·데이터베이스·메시징 제품 또는 버전과 적용 구성이 바뀌면 재확인 | confirmed | Task 13 | 화면 검증을 보안 통제로 간주하거나 PostgreSQL·RabbitMQ 한 제품의 동작과 단계적 마이그레이션 패턴을 다른 데이터베이스·큐의 무중단·무손실·정확히 한 번 보장으로 단정하지 않습니다. |\n| PBSG-003 | PB-031 `accessibility-responsive-design.md`; PB-033 `ui-state-and-ux.md`; PB-034 `adr-and-tradeoffs.md`; PB-053 `analytics-dashboard-case-study.md` | 접근성·반응형 설계의 판단 기준, UI 상태와 오류 복구, ADR의 맥락·대안·결과·재검토 조건, 대시보드 차트·표·상태의 접근 가능한 대안 | important | 2026-08-13 확인: W3C WCAG 2.2 Recommendation과 비규범 Understanding·WAI Images 교육 자료, RFC 9110, Nygard ADR 원형, ISO/IEC/IEEE 42010:2022 공식 범위와 conceptual model | WCAG·HTTP·ADR 적용 범위 변경 시, 제품별 보조 기술·API·데이터·아키텍처 결정을 실제 채택할 때 재확인 | confirmed | Task 14; Task 18 | 일부 자동 검사·차트 대체 텍스트·특정 화면 폭을 접근성·반응형 적합 완료로, HTTP 멱등성을 모든 업무 재시도·복구로, ADR 원형과 핸드북 확장 필드를 모든 제품의 유일한 기준으로 확대하지 않습니다. |\n| PBSG-004 | PB-037 `code-review-ci-cd.md`; PB-038 `incremental-delivery.md`; PB-041 `performance-security.md` | 사람 리뷰·CI·전달·배포 게이트, 작은 수직 조각, 성능 병목·위협·권한·비밀의 위험 기반 검증 | important | 2026-08-13 확인: Google Engineering Practices, Fowler CI·feature toggles, Agile Manifesto 원칙, GitHub 보호 브랜치·배포 환경, NIST SSDF 1.1·least privilege, OWASP threat modeling·input validation·secrets·logging, W3C User Timing·Resource Timing 초안과 Chrome·web.dev 성능 자료 | CI·호스팅 제품·보안 지침·웹 성능 표준 상태 변경 시와 다른 제품·임계값·위협 모델을 실제 채택할 때 재확인 | confirmed | Task 15 | 회사 관행·제품 설정·예시 성능 수치·보안 체크리스트를 모든 팀의 성공 공식으로 일반화하지 않고, 자동 검사 통과·보호 규칙 이름·보안 통제 존재를 사람 승인·사용자 성공·위험 제거 완료로 확대하지 않습니다. |"
        },
        {
          "start_line": 106,
          "end_line": 108,
          "text": "- PBSG-024는 WHATWG HTML의 parsing·event loop·`img`·`iframe` lazy loading, WHATWG DOM, CSSWG CSSOM Editor's Draft, Chrome DevTools Network·DOM·CSS·Rendering과 W3C WCAG 2.2를 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. 원고는 URL·네트워크·HTML 파싱·DOM·스타일·렌더링 기회·이벤트·상태를 진단용 개념 흐름으로 한정하고, View Source·Network·live DOM·Computed 값·픽셀을 서로 다른 증거로 구분합니다. 이를 모든 엔진의 직렬 내부 구현, 모든 lazy loading, 임시 DOM 편집의 소스 변경, 한 Chrome·기기의 호환성·접근성 완료로 확대하지 않습니다.\n- PBSG-003은 W3C WCAG 2.2와 비규범 Understanding·WAI Images 자료, RFC 9110, Nygard의 ADR 원형, ISO/IEC/IEEE 42010:2022 공식 범위와 conceptual model을 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. PB-031·033·034의 전체 주장과 PB-053의 기존 차트·표·상태 접근성 계약을 함께 대조했으며, 자동 검사·특정 화면·차트 대체 텍스트를 전체 적합으로, HTTP 의미를 애플리케이션의 모든 중복·복구로, ADR 양식을 영구 진리나 유일한 템플릿으로 확대하지 않습니다.\n- PBSG-007은 ISO/IEC/IEEE 42010:2022 공식 범위와 conceptual model, CMU SEI 4판 소개, 기존 SWEBOK 확인 기록, MDN 웹 프레임워크 자료를 원고 전체에 대조해 `confirmed`로 전환했습니다. architecture description·이해관계자·관심사·관점·뷰·결정·근거와 품질 관계가 닫는 주장, 생태계별 용례가 겹치는 핸드북의 실용 도구 구분, 이 핸드북의 일곱 단계와 두 사례 가설을 분리했으며 특정 방법·제품·현재 구현·배포 성공으로 확대하지 않습니다."
        },
        {
          "start_line": 159,
          "end_line": 161,
          "text": "|---|---|---|\n| PBCA-003 | PBSG-001, PBSG-002, PBSG-003, PBSG-004, PBSG-005 | Task 12; Task 13; Task 14; Task 15; Task 16 |\n| PBCA-004 | PBSG-007, PBSG-008, PBSG-009, PBSG-010 | Task 10; Task 14; Task 15; Task 16; Task 17 |"
        },
        {
          "start_line": 166,
          "end_line": 168,
          "text": "| PBCA-010 | PBSG-015, PBSG-016 | Task 15 |\n| PBCA-011 | PBSG-003, PBSG-012, PBSG-019, PBSG-022, PBSG-023, PBSG-024, PBSG-025, PBSG-026 | Task 13; Task 14; Task 16; Task 18; Task 25 |\n"
        }
      ]
    },
    {
      "path": "docs/project/public-beta-content-audit.md",
      "sha256": "5b9bbec64eca339ee0b0a3c82be50c262120d6fe493c57e7963f79dc9215a608",
      "segments": [
        {
          "start_line": 57,
          "end_line": 62,
          "text": "| PB-030 | `src/content/docs/04-backend-data/state-cache-queue.md` | core | 상태·캐시·큐를 언제 어디에 두는가? | 권위 원본·임시 사본·비동기 전달을 구분한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 13 | 권위 상태·파생 상태·세션·캐시·큐·이벤트의 책임, 신선도·중복·순서·재처리·최종적 일관성과 장애 뒤 원본 재확인을 모임 사례로 확장했습니다. 첫 캡스톤의 큐 비목표와 교육용 주가 fixture를 분리하고 PBSG-002를 공식 근거로 닫았습니다. |\n| PB-031 | `src/content/docs/05-frontend/accessibility-responsive-design.md` | core | 접근성과 반응형 설계는 어떻게 다르고 무엇을 확인하는가? | 의미·키보드·포커스·이름·대비·대체 텍스트·확대·리플로를 실제 흐름으로 검증한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 14 | 의미 구조부터 키보드·포커스·접근 가능한 이름·대비·색상 외 상태·대체 정보·확대·리플로·동적 복구와 자동·DOM·화면·보조 기술·서버 증거의 경계를 확장했습니다. PB-033·034와 대시보드 접근성 계약까지 직접 대조해 PBSG-003을 닫았습니다. |\n| PB-032 | `src/content/docs/05-frontend/browser-dom-rendering.md` | core | 브라우저가 응답을 DOM과 화면으로 어떻게 바꾸는가? | URL·네트워크·파싱·DOM·스타일·렌더링·상태 실패를 증거 표면으로 구분한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 14; Task 20 resolved | WHATWG·CSSWG·Chrome·WCAG 직접 자료로 PBSG-024를 닫고 URL부터 이벤트·상태까지의 개념 흐름, View Source·Network·live DOM·Computed·픽셀, 지연 로딩·렌더 실패를 구분했습니다. 의미 변경 때문에 과거 검토 파일은 보존하되 현재 증거로 재사용하지 않습니다. full-stack 그림의 topology·marker·390px 판독성은 Task 20 `6b4ac94`와 실제 Chrome 18상태·Codex `PASS`로 교정됐습니다. |\n| PB-033 | `src/content/docs/05-frontend/ui-state-and-ux.md` | core | UI 상태와 사용자 경험을 어떤 상태 기계로 설계하는가? | 정상·실패·결과 불명 전이를 권위 상태·복구 오라클과 함께 설계한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 14 | loading·empty·success·validation·conflict·error·unknown·retry, 서버 권위 상태, 낙관적 UI, 중복 행동, 오래된 응답과 복구 오라클을 두 사례·상태 전이표·직접 증거로 확장하고 PBSG-003을 닫았습니다. |\n| PB-034 | `src/content/docs/06-requirements-design/adr-and-tradeoffs.md` | core | 중요한 설계 결정을 왜 어떻게 기록하는가? | 맥락·대안·결정·결과·가정·증거와 재검토 조건을 쓴다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 14 | ADR 원형과 42010의 범위를 분리하고 맥락·결정·대안·결과·가정·증거·재검토 신호, 회의록·영원한 진리 금지선, 두 사례와 템플릿을 확장해 PB-031·033·PB-053의 접근성 계약과 함께 PBSG-003을 닫았습니다. |\n| PB-035 | `src/content/docs/06-requirements-design/architecture-and-frameworks.md` | core | 아키텍처·기술 스택·프레임워크를 어떻게 구분하는가? | 품질 속성과 제약으로 구조·도구 선택을 설명한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 10; Task 14 | Task 10의 결정 수준·일곱 구조 질문·품질과 제약·도구 범주·두 사례 가설·과설계·증거 계약과 PBV-13 `keep`을 보존했습니다. Task 14에서 ISO/IEC/IEEE 42010:2022의 architecture description 범위와 방법·제품 비보장 경계를 추가해 PBSG-007을 닫았으며 제품별 제어·지원·배포는 실제 후보 채택 때 다시 확인합니다. |"
        }
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "sha256": "56db4b69415a02851cf7362f7ee795d1517765c3f70d2447d960d647c3e4e7d4",
      "segments": [
        {
          "start_line": 345,
          "end_line": 373,
          "text": "    },\n    {\n      \"id\": \"R16\",\n      \"slug\": \"data-support\",\n      \"method\": \"소묶음\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/03-full-stack/frontend-backend-boundary.md\", \"src/content/docs/04-backend-data/data-model-schema-migration.md\", \"src/content/docs/04-backend-data/state-cache-queue.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r16-data-support-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r16-data-support-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r16-data-support-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r16-data-support-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r16-data-support-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r16-data-support-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"79c1038651626c7d0eceb3dd20a4db7c36414d4432c3c454b664c76dbfb6c01c\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"BLOCKED\",\"rereview_state\":\"pass-important4-minor4-resolved\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"e88d80e5fda10338a645410b0dcc2fd014987f744f75586d647f31441636dac9\",\"current_target_sha256\":\"f50bf106d5b3ee45ceffff3fca06eb2edca27aa9b1193af8d396c96161b023cd\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r16-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r16-data-support-codex-rereview.md\",\"next_scope\":\"R17 pending; no M5/ready/public approval\",\"target_hashes\":[{\"path\":\"src/content/docs/03-full-stack/frontend-backend-boundary.md\",\"reviewed_sha256\":\"e88d80e5fda10338a645410b0dcc2fd014987f744f75586d647f31441636dac9\",\"current_sha256\":\"f50bf106d5b3ee45ceffff3fca06eb2edca27aa9b1193af8d396c96161b023cd\"},{\"path\":\"src/content/docs/04-backend-data/data-model-schema-migration.md\",\"reviewed_sha256\":\"9a2334cde915cdf6d8554b8bcfa9da3492791ae63df66933528227d6077e4aa0\",\"current_sha256\":\"2bbe29c1fa3aaca28dc83d89ab1146176e2230974867a36bc4cf36ec8f6d086f\"},{\"path\":\"src/content/docs/04-backend-data/state-cache-queue.md\",\"reviewed_sha256\":\"e1f1570362a645db9d812b1ba8c2fc11d760b707b4c918ce8252420e055ca030\",\"current_sha256\":\"dd00a9865c2865a1852f5c60d2fdbb0100f655db2c505810d192ddfe88ee2e4f\"}]}\n    },\n    {\n      \"id\": \"R17\",\n      \"slug\": \"frontend-support\",\n      \"method\": \"소묶음\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/05-frontend/accessibility-responsive-design.md\", \"src/content/docs/05-frontend/ui-state-and-ux.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r17-frontend-support-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r17-frontend-support-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r17-frontend-support-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r17-frontend-support-codex-rereview.md\"\n    },\n    {\n      \"id\": \"R18\",\n      \"slug\": \"design-support\",\n      \"method\": \"소묶음\",\n      \"implementation_state\": \"작성·구현 완료\","
        }
      ]
    },
    {
      "path": "src/content/docs/01-mental-models/software-is-a-system.md",
      "sha256": "f086dc056630893c03b2a8c1a98304063bf1053eef26b25da7b587ae038bbc3d",
      "segments": [
        {
          "start_line": 17,
          "end_line": 27,
          "text": "  order: 2\n---\n## 먼저 결론\n\n소프트웨어는 눈앞의 화면이나 코드 파일 하나가 아니라, 여러 구성요소가 책임과 약속을 나누어 입력을 처리하고 상태를 바꾸며 결과를 내는 시스템입니다. 화면이 그럴듯하거나 코드가 많이 생성됐다는 사실만으로 데이터, 권한, 실패, 배포와 복구까지 작동한다고 판단할 수 없습니다.\n\n비개발자가 모든 코드를 읽을 필요는 없지만 **구성요소, 책임, 경계와 인터페이스, 상태, 흐름, 제약과 품질 속성**이라는 여섯 렌즈로 시스템을 질문할 수 있어야 합니다. 이 지도가 있어야 AI가 만든 결과에서 무엇이 구현됐고 무엇이 비어 있는지 확인할 수 있습니다.\n\n## 왜 필요한가\n\nAI에게 “모임 참가 웹앱을 만들어 주세요”라고 요청하면 모임 정보와 참가 버튼이 있는 화면을 빠르게 받을 수 있습니다. 하지만 누가 모임을 바꿀 수 있는지, 같은 사람이 두 번 참가하지 않는지, 마지막 한 자리에 두 요청이 겹쳐도 정원을 넘지 않는지, 응답이 끊겼을 때 확정된 참가 상태를 어떻게 확인하고 복구하는지는 별개의 문제입니다."
        },
        {
          "start_line": 29,
          "end_line": 37,
          "text": "사용자가 참가 버튼을 눌러 성공 문구를 봤다는 것은 한 경로의 화면을 확인한 증거일 뿐입니다. 권위 있는 참가 관계가 저장됐는지, 정원과 모집 상태가 일관적인지, 권한 우회가 거절되는지, 배포 뒤 장애에서 안전한 상태로 돌아오는지는 알 수 없습니다. 시스템 관점이 없으면 이런 빈칸을 “AI가 알아서 처리했겠지”라고 넘기기 쉽습니다.\n\n시스템 관점은 복잡한 아키텍처를 먼저 설계하라는 뜻도 아닙니다. 지금 필요한 구성요소와 경계를 가장 단순한 형태로 정하고, 중요한 실패를 어디에서 발견하고 복구할지 확인하자는 뜻입니다.\n\n## 한 문장 정의\n\n**소프트웨어는 여러 구성요소가 정해진 책임과 인터페이스로 연결되어 입력을 처리하고 상태를 바꾸며 결과를 내는 시스템입니다.**\n\n코드는 그 시스템을 표현하는 핵심 재료이지만 전부는 아닙니다. 실행 환경, 설정, 데이터 구조, 외부 서비스, 배포 산출물, 로그, 테스트와 운영 절차도 실제 동작과 복구 가능성에 영향을 줍니다."
        },
        {
          "start_line": 39,
          "end_line": 43,
          "text": "사람과 조직의 업무 절차도 시스템의 성공에 영향을 주지만, 소프트웨어 경계를 어디까지 잡을지는 질문에 따라 달라집니다. 예를 들어 “대시보드 요청이 어떻게 처리되는가”를 볼 때는 사용자 행동을 입력으로 놓을 수 있고, “잘못된 지표가 공개됐을 때 누가 승인하고 정정하는가”를 볼 때는 사람의 검토 절차까지 시스템 경계에 포함해야 합니다.\n\n## 집으로 이해하기\n\n집을 지을 때 예쁜 거실 사진만 보고 수도, 전기, 출입, 구조 안전과 유지보수를 생략하지는 않습니다. 소프트웨어도 화면이라는 한 공간만 보는 대신 다음 관계를 함께 볼 수 있습니다."
        },
        {
          "start_line": 61,
          "end_line": 65,
          "text": "### 비유가 깨지는 지점\n\n소프트웨어 경계는 물리적 벽보다 쉽게 바뀌고 복제됩니다. 같은 코드가 여러 서버에서 실행되고, 한 데이터가 브라우저·캐시·데이터베이스에 서로 다른 시점의 사본으로 존재할 수 있습니다. 외부 API나 클라우드 서비스처럼 소유하지 않은 구성요소도 시스템 동작에 영향을 줍니다.\n\n집에는 보통 하나의 물리적 위치가 있지만 소프트웨어의 요청과 상태는 여러 실행 환경과 네트워크를 오갑니다. 그래서 구조를 눈으로 추측하지 않고 다이어그램, 인터페이스 계약, 설정, 테스트, 로그와 실제 실행 결과로 확인해야 합니다."
        },
        {
          "start_line": 67,
          "end_line": 71,
          "text": "집에는 완공 시점이 있지만 소프트웨어는 변경과 배포 뒤에도 계속 달라집니다. 이전에 통과한 테스트나 화면 확인을 영구 증거로 보지 않고 변경할 때마다 필요한 증거를 다시 만들어야 합니다.\n\n## 시스템을 보는 여섯 렌즈\n\n여섯 렌즈는 이 책이 초보자의 누락을 줄이기 위해 묶은 편집상 검토 틀이며, 업계 표준이나 정답 아키텍처를 고르는 공식이 아닙니다."
        },
        {
          "start_line": 126,
          "end_line": 130,
          "text": "모든 품질을 동시에 최대화할 수는 없습니다. 실시간 갱신은 최신성을 높일 수 있지만 비용과 장애 지점을 늘릴 수 있고, 기능을 한 서비스에 모으면 초기 운영은 단순할 수 있지만 일부 변경 영향은 커질 수 있습니다. 현재 독자 문제와 위험에 맞는 우선순위를 기록하고, 나중에 조건이 달라지면 결정을 다시 검토합니다.\n\n## 두 사례로 책임 차이 보기\n\n같은 여섯 렌즈를 사용해도 시스템이 바꾸고 지켜야 하는 상태에 따라 핵심 책임은 달라집니다. 모임 참가 웹앱은 여러 사용자가 권한이 필요한 쓰기를 요청하므로 참가 관계·모집 상태·정원을 일관되게 바꾸는 책임이 중심입니다. 교육용 주가 fixture 대시보드는 원천을 읽고 정규화·변환한 분석 결과를 제공하므로 값이 어느 계약과 버전에서 왔고 어떤 거래일·단위·가격 기준·품질 상태를 가지는지 추적하고 같은 입력을 재현하는 책임이 중심입니다."
        },
        {
          "start_line": 161,
          "end_line": 165,
          "text": "차트가 보인다는 사실은 UI 렌더링을 확인한 증거입니다. 값의 계약, 갱신 상태, 품질 검사, 장애 발견과 복구까지 완료됐다는 증거는 아닙니다. 반대로 모든 구성요소를 별도 서버로 나눌 필요도 없습니다. 개인별 응답, 서버 측 쓰기와 요청 시점의 실시간 데이터가 필요 없고, 승인된 데이터 스냅샷의 갱신 주기·재빌드·배포·실패 시 마지막 정상 버전 조건이 요구사항을 충족한다면 작은 읽기 전용 대시보드는 검증된 정적 데이터와 정적 사이트만으로 요구사항을 만족할 수 있습니다. Astro가 기본적으로 페이지를 빌드 시점에 미리 렌더링하고 요청 시점의 개인화나 최신 데이터가 필요한 경로에 온디맨드 렌더링을 선택하게 하는 것은 한 구현 예일 뿐, 모든 프레임워크의 공통 규칙은 아닙니다. 중요한 것은 도구 수가 아니라 책임과 증거가 빠지지 않는 것입니다.\n\n## 화면 동작과 시스템 완성도를 구분하기\n\n다음 구분은 공식 성숙도 모델이 아니라 완료 주장을 검토하기 위한 간단한 관점입니다."
        },
        {
          "start_line": 175,
          "end_line": 181,
          "text": "“작동한다”는 말은 어떤 범위의 증거인지 함께 적어야 합니다. `로컬 빌드·미리보기 통과`, `대표 요청 성공`, `주요 실패 테스트 통과`, `공개 URL 확인`, `복구 연습 완료`는 서로 다른 주장을 증명합니다.\n\n## 실제 작업에서 보이는 시스템 증거\n\n시스템은 아키텍처 다이어그램에만 존재하지 않습니다. 저장소와 실행 환경의 여러 흔적을 함께 봅니다.\n\n- **파일과 폴더**: 책임이 어디에 배치됐는지 보여주지만 실제 실행과 소유 관계를 완전히 증명하지는 않습니다."
        },
        {
          "start_line": 188,
          "end_line": 192,
          "text": "한 증거를 전체 시스템의 증거로 확대하지 않는 것이 핵심입니다. 파일이 있다는 것, 테스트가 통과했다는 것, 화면이 보인다는 것은 각각 중요한 사실이지만 증명 범위가 다릅니다.\n\n## 판단 규칙\n\n1. 프레임워크 이름을 고르기 전에 사용자, 입력, 결과, 권위 있는 상태와 가장 위험한 실패를 적습니다."
        },
        {
          "start_line": 200,
          "end_line": 204,
          "text": "9. 완료 주장은 구성요소와 경계별 증거로 나누고, 확인하지 않은 범위는 미확인으로 남깁니다.\n\n## 흔한 오해와 실패\n\n- **화면이 제품의 전부라고 생각함**: 데이터·권한·배포·운영 실패가 숨습니다. 사용자 행동을 원천과 저장·복구까지 추적합니다."
        },
        {
          "start_line": 211,
          "end_line": 215,
          "text": "- **복잡한 구조가 더 전문적이라고 생각함**: 필요하지 않은 서비스와 도구가 실패 경계와 운영 비용을 늘립니다. 현재 요구를 만족하는 가장 단순한 구조에서 시작합니다.\n\n## AI와 작업할 때\n\n모호한 지시는 AI가 빈 경계를 임의로 채우게 합니다."
        },
        {
          "start_line": 252,
          "end_line": 256,
          "text": "이 지시는 AI에게 큰 아키텍처를 발명하라는 요청이 아닙니다. 현재 상태를 여섯 렌즈로 관찰하고, 구현 전에 책임과 증거의 빈칸을 드러내라는 요청입니다. 결과를 받은 뒤에는 AI가 언급한 파일, 설정, 테스트와 실행 결과를 직접 확인합니다.\n\n## 확인 체크리스트\n\n- [ ] 이 시스템의 사용자와 해결하려는 문제가 한 문장으로 정해져 있나요?"
        },
        {
          "start_line": 269,
          "end_line": 273,
          "text": "- [ ] AI 작업 지시에 범위·권한·산출물·검증 방법과 금지 범위를 포함했나요?\n\n## 짧은 연습\n\n이 장의 모임 참가 웹앱 또는 자신이 만들고 싶은 프로젝트 하나를 골라 다음 표를 채우세요. 각 칸에는 기술 이름보다 책임과 증거를 먼저 적습니다. 모임 사례를 고르면 참가 관계·정원·권한 가운데 무엇이 권위 있는 상태인지 포함합니다."
        },
        {
          "start_line": 286,
          "end_line": 290,
          "text": "그다음 `아직 모르는 것` 한 칸을 골라 AI에게 보낼 읽기 전용 지시를 다섯 줄 안으로 작성하세요. 읽을 범위, 허용·금지 권한, 받을 산출물, 검증 방법과 미확인 보고 방식을 포함합니다.\n\n## 관련 용어와 출처\n\n- [개발 용어집](../../reference/development-glossary/) — software, component, responsibility, boundary, trust boundary, interface, state, source of truth, flow, constraint, quality attribute, architecture"
        }
      ]
    }
  ],
  "render_provenance": {
    "manifest_path": "output/playwright/r17-inputs-20261115-pilot/observations.json",
    "manifest_sha256": "a22b7124511f28eedc9ae873666b15e706f494c3c95334b724be6ac670d2913d",
    "additional_context_manifests": [
      {
        "path": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "sha256": "a5778427b4b747d1f6f4ea9878706a854217b8f6c6a9412e5876583195f53442"
      }
    ],
    "input_files": [
      {
        "path": "src/content/docs/05-frontend/accessibility-responsive-design.md",
        "sha256": "8e3aba3b43bffca4bf4a94f4108f6a07455fa0b37a36b80024ba74dbaa19571c"
      },
      {
        "path": "src/content/docs/05-frontend/ui-state-and-ux.md",
        "sha256": "e8e8f3134e4b5ea78f76e7b5fcfb45d46213c09a6c5495985c4999b516b02e56"
      },
      {
        "path": "src/styles/custom.css",
        "sha256": "2236f2a8a9b30515cb641d48de7089d15590834766ada3f60de9f649ef36c137"
      }
    ],
    "states": [
      {
        "route": "05-frontend/accessibility-responsive-design",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "errors": [],
        "image_count": 6
      },
      {
        "route": "05-frontend/accessibility-responsive-design",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "errors": [],
        "image_count": 13
      },
      {
        "route": "05-frontend/ui-state-and-ux",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "errors": [],
        "image_count": 9
      },
      {
        "route": "05-frontend/ui-state-and-ux",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "errors": [],
        "image_count": 24
      },
      {
        "route": "05-frontend/accessibility-responsive-design",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "errors": [],
        "image_count": 6
      },
      {
        "route": "05-frontend/accessibility-responsive-design",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "errors": [],
        "image_count": 13
      },
      {
        "route": "05-frontend/ui-state-and-ux",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "errors": [],
        "image_count": 9
      },
      {
        "route": "05-frontend/ui-state-and-ux",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "errors": [],
        "image_count": 24
      }
    ]
  },
  "images": [
    {
      "id": "R17-PNG-01",
      "order": 1,
      "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-1440-light-top.png",
      "sha256": "bfde3bc6b9887f9f675cc60b23519d8f9240e8e4434e8be1ea49182ef0595681",
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
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R17-PNG-02",
      "order": 2,
      "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-1440-light-item0-x0-y0.png",
      "sha256": "a85fe99321dcbc9922a1a1ccefc7d73100a7591f1e6840ed24e8d6fd110dd0d4",
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
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-1440-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2015,
          "documentRange": [
            2125.421875,
            2347.421875
          ],
          "targetRange": [
            2125.421875,
            2347.421875
          ],
          "clip": {
            "x": 324,
            "y": 110.421875,
            "width": 788,
            "height": 222
          }
        }
      }
    },
    {
      "id": "R17-PNG-03",
      "order": 3,
      "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-1440-light-item1-x0-y0.png",
      "sha256": "f8eb8d3a4c4b1f142a45de9026da7a957ffd0b1011f078473deb1211cf7ed853",
      "dimensions": {
        "width": 788,
        "height": 461
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-1440-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 5449,
          "documentRange": [
            5559,
            6020.15625
          ],
          "targetRange": [
            5558.890625,
            6020.15625
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 461.15625
          }
        }
      }
    },
    {
      "id": "R17-PNG-04",
      "order": 4,
      "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-1440-light-item2-x0-y0.png",
      "sha256": "38d0d7412cea9359dccae9c8d2bf9b1910452e275af3cb36125653fef7d7d225",
      "dimensions": {
        "width": 788,
        "height": 189
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-1440-light-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 7273,
          "documentRange": [
            7383.4375,
            7572.4375
          ],
          "targetRange": [
            7383.4375,
            7572.4375
          ],
          "clip": {
            "x": 324,
            "y": 110.4375,
            "width": 788,
            "height": 189
          }
        }
      }
    },
    {
      "id": "R17-PNG-05",
      "order": 5,
      "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-1440-light-item2-x1-y0.png",
      "sha256": "a969ccff054e208a80555ea1f3ee80fe62002a9227f00d83c000a4b736fba293",
      "dimensions": {
        "width": 788,
        "height": 189
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-1440-light-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 563,
          "actualScrollLeft": 563,
          "pageScrollY": 7273,
          "documentRange": [
            7383.4375,
            7572.4375
          ],
          "targetRange": [
            7383.4375,
            7572.4375
          ],
          "clip": {
            "x": 324,
            "y": 110.4375,
            "width": 788,
            "height": 189
          }
        }
      }
    },
    {
      "id": "R17-PNG-06",
      "order": 6,
      "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-1440-light-item3-x0-y0.png",
      "sha256": "542a4d2048933bf51e021fb227bc4cdaa8fa9f4c55673296434ab874531e51be",
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
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-1440-light-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 8299,
          "documentRange": [
            8409.4375,
            8669.40625
          ],
          "targetRange": [
            8409.4375,
            8669.40625
          ],
          "clip": {
            "x": 324,
            "y": 110.4375,
            "width": 788,
            "height": 259.96875
          }
        }
      }
    },
    {
      "id": "R17-PNG-07",
      "order": 7,
      "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-390-dark-top.png",
      "sha256": "e15443fa3e89f49a222068d26695f6eac569501ab066fe6eabfab205736bdd43",
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
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R17-PNG-08",
      "order": 8,
      "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-390-dark-item0-x0-y0.png",
      "sha256": "db03e8d7736d571369b7edd2931b0321d79339fa6c3b5a5d8924aa05999d350a",
      "dimensions": {
        "width": 358,
        "height": 221
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-390-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3087,
          "documentRange": [
            3197,
            3418.953125
          ],
          "targetRange": [
            3196.953125,
            3418.953125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 221.953125
          }
        }
      }
    },
    {
      "id": "R17-PNG-09",
      "order": 9,
      "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-390-dark-item1-x0-y0.png",
      "sha256": "dab993a4c0f0a058d7b5dfa1569a176e5e8766bdc6e2d177da694a7c88fecceb",
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
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-390-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 8612,
          "documentRange": [
            8722,
            9446
          ],
          "targetRange": [
            8721.78125,
            9498.984375
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
      "id": "R17-PNG-10",
      "order": 10,
      "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-390-dark-item1-x0-y1.png",
      "sha256": "9d80488e4c3e5fec6e548d3cee05bb0aef47845975e7c6542b2567048d214f52",
      "dimensions": {
        "width": 358,
        "height": 102
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-390-dark-item1-x0-y1.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 9286,
          "documentRange": [
            9396,
            9498.984375
          ],
          "targetRange": [
            8721.78125,
            9498.984375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 102.984375
          }
        }
      }
    },
    {
      "id": "R17-PNG-11",
      "order": 11,
      "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-390-dark-item1-x1-y0.png",
      "sha256": "b88dbc5bf1a0099250a11da4bcde89d85fc8ae26637ab0314a448fb7490e5d5c",
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
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-390-dark-item1-x1-y0.png",
          "label": "item1",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 8612,
          "documentRange": [
            8722,
            9446
          ],
          "targetRange": [
            8721.78125,
            9498.984375
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
      "id": "R17-PNG-12",
      "order": 12,
      "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-390-dark-item1-x1-y1.png",
      "sha256": "b7d9967360310b5cb14a797fabbe93aa0eb4d34f7e9f43b56e3ac2a228c4cbd0",
      "dimensions": {
        "width": 358,
        "height": 102
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-390-dark-item1-x1-y1.png",
          "label": "item1",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 9286,
          "documentRange": [
            9396,
            9498.984375
          ],
          "targetRange": [
            8721.78125,
            9498.984375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 102.984375
          }
        }
      }
    },
    {
      "id": "R17-PNG-13",
      "order": 13,
      "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-390-dark-item2-x0-y0.png",
      "sha256": "8ecdf936de43e7bdc1e41c2ef8535f52314724218f809d640bfa60d84dc07e18",
      "dimensions": {
        "width": 358,
        "height": 188
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-390-dark-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 11238,
          "documentRange": [
            11348,
            11536.546875
          ],
          "targetRange": [
            11347.546875,
            11536.546875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 188.546875
          }
        }
      }
    },
    {
      "id": "R17-PNG-14",
      "order": 14,
      "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-390-dark-item2-x1-y0.png",
      "sha256": "245c0daa586f88a2e1ad6414efdb2e7444d342a0e13c1cfb22097a320a323506",
      "dimensions": {
        "width": 358,
        "height": 188
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-390-dark-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 356,
          "actualScrollLeft": 356,
          "pageScrollY": 11238,
          "documentRange": [
            11348,
            11536.546875
          ],
          "targetRange": [
            11347.546875,
            11536.546875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 188.546875
          }
        }
      }
    },
    {
      "id": "R17-PNG-15",
      "order": 15,
      "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-390-dark-item2-x2-y0.png",
      "sha256": "14e061b78448a2e842e8519b3134a872e63787b8ee6721b85de30ba80baebc17",
      "dimensions": {
        "width": 358,
        "height": 188
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-390-dark-item2-x2-y0.png",
          "label": "item2",
          "requestedScrollLeft": 712,
          "actualScrollLeft": 712,
          "pageScrollY": 11238,
          "documentRange": [
            11348,
            11536.546875
          ],
          "targetRange": [
            11347.546875,
            11536.546875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 188.546875
          }
        }
      }
    },
    {
      "id": "R17-PNG-16",
      "order": 16,
      "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-390-dark-item2-x3-y0.png",
      "sha256": "ee2d5f9ea894153b098d84aeb5cfb096a5796b96bbfadac18193bb8044fef80d",
      "dimensions": {
        "width": 358,
        "height": 188
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-390-dark-item2-x3-y0.png",
          "label": "item2",
          "requestedScrollLeft": 993,
          "actualScrollLeft": 993,
          "pageScrollY": 11238,
          "documentRange": [
            11348,
            11536.546875
          ],
          "targetRange": [
            11347.546875,
            11536.546875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 188.546875
          }
        }
      }
    },
    {
      "id": "R17-PNG-17",
      "order": 17,
      "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-390-dark-item3-x0-y0.png",
      "sha256": "283e3bad29ea43e155940dc30771e3767409343fa03189744a3c41d2662704b1",
      "dimensions": {
        "width": 358,
        "height": 312
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-390-dark-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 12763,
          "documentRange": [
            12873.140625,
            13185.765625
          ],
          "targetRange": [
            12873.140625,
            13185.765625
          ],
          "clip": {
            "x": 16,
            "y": 110.140625,
            "width": 358,
            "height": 312.625
          }
        }
      }
    },
    {
      "id": "R17-PNG-18",
      "order": 18,
      "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-390-dark-item3-x1-y0.png",
      "sha256": "3da36d0982dd4fc272ff240405e58a77da7ac7c95407edef36b8c41359672c23",
      "dimensions": {
        "width": 358,
        "height": 312
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-390-dark-item3-x1-y0.png",
          "label": "item3",
          "requestedScrollLeft": 358,
          "actualScrollLeft": 358,
          "pageScrollY": 12763,
          "documentRange": [
            12873.140625,
            13185.765625
          ],
          "targetRange": [
            12873.140625,
            13185.765625
          ],
          "clip": {
            "x": 16,
            "y": 110.140625,
            "width": 358,
            "height": 312.625
          }
        }
      }
    },
    {
      "id": "R17-PNG-19",
      "order": 19,
      "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-390-dark-item3-x2-y0.png",
      "sha256": "2f1543eb9bba04b3b378328e0e85ea2788aec2f22812d3fefbafbf2cf181ed8a",
      "dimensions": {
        "width": 358,
        "height": 312
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/accessibility-responsive-design-390-dark-item3-x2-y0.png",
          "label": "item3",
          "requestedScrollLeft": 538,
          "actualScrollLeft": 538,
          "pageScrollY": 12763,
          "documentRange": [
            12873.140625,
            13185.765625
          ],
          "targetRange": [
            12873.140625,
            13185.765625
          ],
          "clip": {
            "x": 16,
            "y": 110.140625,
            "width": 358,
            "height": 312.625
          }
        }
      }
    },
    {
      "id": "R17-PNG-20",
      "order": 20,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-1440-light-top.png",
      "sha256": "f1d029feb3f0dd3cc7a1902920d00c370bde0fd34c1106b14b1ea8f0c563627d",
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
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R17-PNG-21",
      "order": 21,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-1440-light-item0-x0-y0.png",
      "sha256": "801405e812173e110061eced9de4f8f189b169c32cd5d0e64ea15f6705bb33d1",
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
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-1440-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2015,
          "documentRange": [
            2125.421875,
            2347.421875
          ],
          "targetRange": [
            2125.421875,
            2347.421875
          ],
          "clip": {
            "x": 324,
            "y": 110.421875,
            "width": 788,
            "height": 222
          }
        }
      }
    },
    {
      "id": "R17-PNG-22",
      "order": 22,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-1440-light-item1-x0-y0.png",
      "sha256": "2b0813ea8e80b28e04183a44c132037ebe8d80aa331e8813068cb7291660769b",
      "dimensions": {
        "width": 788,
        "height": 670
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-1440-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2448,
          "documentRange": [
            2558,
            3228.15625
          ],
          "targetRange": [
            2557.921875,
            3228.15625
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 670.15625
          }
        }
      }
    },
    {
      "id": "R17-PNG-23",
      "order": 23,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-1440-light-item2-x0-y0.png",
      "sha256": "0e36c916d274ddf83b37c955d1eb80e2f034d7f0da0c8b1ada163cd6b28ee02b",
      "dimensions": {
        "width": 788,
        "height": 321
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-1440-light-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3529,
          "documentRange": [
            3639,
            3960.609375
          ],
          "targetRange": [
            3638.65625,
            3960.609375
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 321.609375
          }
        }
      }
    },
    {
      "id": "R17-PNG-24",
      "order": 24,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-1440-light-item3-x0-y0.png",
      "sha256": "069906d8b34e9e7fa4c8894530407e42f29f13473424f50affb0c2db1c8088c9",
      "dimensions": {
        "width": 788,
        "height": 321
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-1440-light-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 4796,
          "documentRange": [
            4906,
            5227.5625
          ],
          "targetRange": [
            4905.609375,
            5227.5625
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 321.5625
          }
        }
      }
    },
    {
      "id": "R17-PNG-25",
      "order": 25,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-1440-light-item4-x0-y0.png",
      "sha256": "4b1d4315e757a66ef948fcbdc8c19df6223fecc9ba50e7091e73844b349d994f",
      "dimensions": {
        "width": 788,
        "height": 679
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-1440-light-item4-x0-y0.png",
          "label": "item4",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 5815,
          "documentRange": [
            5925,
            6604.125
          ],
          "targetRange": [
            5924.5625,
            6604.125
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 679.125
          }
        }
      }
    },
    {
      "id": "R17-PNG-26",
      "order": 26,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-1440-light-item5-x0-y0.png",
      "sha256": "daa5eab798bfe2b9a21dcce8096b4830c91ca6e4925d7a7c10b546485cfd8c60",
      "dimensions": {
        "width": 788,
        "height": 213
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-1440-light-item5-x0-y0.png",
          "label": "item5",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 8808,
          "documentRange": [
            8918,
            9131
          ],
          "targetRange": [
            8917.5,
            9131
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 213
          }
        }
      }
    },
    {
      "id": "R17-PNG-27",
      "order": 27,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-1440-light-item5-x1-y0.png",
      "sha256": "7a02791b23d90216cd0d2872483423eb901232c6723badda8136b4e06cf83577",
      "dimensions": {
        "width": 788,
        "height": 213
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-1440-light-item5-x1-y0.png",
          "label": "item5",
          "requestedScrollLeft": 298,
          "actualScrollLeft": 298,
          "pageScrollY": 8808,
          "documentRange": [
            8918,
            9131
          ],
          "targetRange": [
            8917.5,
            9131
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 213
          }
        }
      }
    },
    {
      "id": "R17-PNG-28",
      "order": 28,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-1440-light-item6-x0-y0.png",
      "sha256": "87a89409756498b1b257d33d16c04b9b4e52050547075e6d4ff3528584e176df",
      "dimensions": {
        "width": 788,
        "height": 94
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-1440-light-item6-x0-y0.png",
          "label": "item6",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 9770,
          "documentRange": [
            9880,
            9974.328125
          ],
          "targetRange": [
            9880,
            9974.328125
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 94.328125
          }
        }
      }
    },
    {
      "id": "R17-PNG-29",
      "order": 29,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-top.png",
      "sha256": "0f6299bdd57fe8f5fa38de355c5f563fafc952bcba14d70f230c645ff2742016",
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
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R17-PNG-30",
      "order": 30,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item0-x0-y0.png",
      "sha256": "5dff58171bb060eb9537e8d0082dd558c3d754dbdfa57e467f70d7101d4253ec",
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
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2835,
          "documentRange": [
            2945,
            3182.953125
          ],
          "targetRange": [
            2944.953125,
            3182.953125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 237.953125
          }
        }
      }
    },
    {
      "id": "R17-PNG-31",
      "order": 31,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item0-x1-y0.png",
      "sha256": "22af0b7a083876fdedadcfa4082b6daef1f8d0fb1d4f859c86860aad4097877a",
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
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item0-x1-y0.png",
          "label": "item0",
          "requestedScrollLeft": 256,
          "actualScrollLeft": 256,
          "pageScrollY": 2835,
          "documentRange": [
            2945,
            3182.953125
          ],
          "targetRange": [
            2944.953125,
            3182.953125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 237.953125
          }
        }
      }
    },
    {
      "id": "R17-PNG-32",
      "order": 32,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item1-x0-y0.png",
      "sha256": "af743a8833fb0dda3f7916724264e996f2323d5370660fe46d27795cab88c22a",
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
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3414,
          "documentRange": [
            3524.046875,
            4248
          ],
          "targetRange": [
            3524.046875,
            4404.90625
          ],
          "clip": {
            "x": 16,
            "y": 110.046875,
            "width": 358,
            "height": 723.953125
          }
        }
      }
    },
    {
      "id": "R17-PNG-33",
      "order": 33,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item1-x0-y1.png",
      "sha256": "eba3867be83ee2460d7a86a9c9e51ef770877fe14a3d64962905377656265ae5",
      "dimensions": {
        "width": 358,
        "height": 206
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item1-x0-y1.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 4088,
          "documentRange": [
            4198,
            4404.90625
          ],
          "targetRange": [
            3524.046875,
            4404.90625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 206.90625
          }
        }
      }
    },
    {
      "id": "R17-PNG-34",
      "order": 34,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item1-x1-y0.png",
      "sha256": "6490e24944271bb73656078df3dd9fd8e82587800879f3b413a62ec9ec8af50d",
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
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item1-x1-y0.png",
          "label": "item1",
          "requestedScrollLeft": 282,
          "actualScrollLeft": 282,
          "pageScrollY": 3414,
          "documentRange": [
            3524.046875,
            4248
          ],
          "targetRange": [
            3524.046875,
            4404.90625
          ],
          "clip": {
            "x": 16,
            "y": 110.046875,
            "width": 358,
            "height": 723.953125
          }
        }
      }
    },
    {
      "id": "R17-PNG-35",
      "order": 35,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item1-x1-y1.png",
      "sha256": "964150374dbec788b5bdd6a39d244d59e130516439c20ef31222b5a3b95d39ed",
      "dimensions": {
        "width": 358,
        "height": 206
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item1-x1-y1.png",
          "label": "item1",
          "requestedScrollLeft": 282,
          "actualScrollLeft": 282,
          "pageScrollY": 4088,
          "documentRange": [
            4198,
            4404.90625
          ],
          "targetRange": [
            3524.046875,
            4404.90625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 206.90625
          }
        }
      }
    },
    {
      "id": "R17-PNG-36",
      "order": 36,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item2-x0-y0.png",
      "sha256": "a8c37a1113128973fc51656fd86c4ab6e9b4eb5d61433f96bbc1769badac662b",
      "dimensions": {
        "width": 358,
        "height": 453
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 4976,
          "documentRange": [
            5086,
            5539.59375
          ],
          "targetRange": [
            5086,
            5539.59375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 453.59375
          }
        }
      }
    },
    {
      "id": "R17-PNG-37",
      "order": 37,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item2-x1-y0.png",
      "sha256": "f5f4d3dfb9e3da521995a3dec3626a1baabe8b78d85d5d79a6b1a66dc7f1ba98",
      "dimensions": {
        "width": 358,
        "height": 453
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 4976,
          "documentRange": [
            5086,
            5539.59375
          ],
          "targetRange": [
            5086,
            5539.59375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 453.59375
          }
        }
      }
    },
    {
      "id": "R17-PNG-38",
      "order": 38,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item3-x0-y0.png",
      "sha256": "7bea6151c67e5ffee41d57829957cc8ae52333db0ec9f1ffcd0bb3c1187d401a",
      "dimensions": {
        "width": 358,
        "height": 453
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 7000,
          "documentRange": [
            7110,
            7563.375
          ],
          "targetRange": [
            7109.78125,
            7563.375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 453.375
          }
        }
      }
    },
    {
      "id": "R17-PNG-39",
      "order": 39,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item3-x1-y0.png",
      "sha256": "8aee058e711b4cecc7480cc96149004879996b6fd41def3b209f488d9bc5de63",
      "dimensions": {
        "width": 358,
        "height": 453
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item3-x1-y0.png",
          "label": "item3",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 7000,
          "documentRange": [
            7110,
            7563.375
          ],
          "targetRange": [
            7109.78125,
            7563.375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 453.375
          }
        }
      }
    },
    {
      "id": "R17-PNG-40",
      "order": 40,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item4-x0-y0.png",
      "sha256": "9c9fc308dce1a283498e53bab7e9932b7390cc8a35bcf436496c2cdf2f2985d8",
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
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item4-x0-y0.png",
          "label": "item4",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 8398,
          "documentRange": [
            8508,
            9232
          ],
          "targetRange": [
            8507.96875,
            9266.515625
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
      "id": "R17-PNG-41",
      "order": 41,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item4-x0-y1.png",
      "sha256": "e802fc3904650a1bbd3a6277712f08f059316f57399db732b939717d6a11687c",
      "dimensions": {
        "width": 358,
        "height": 84
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item4-x0-y1.png",
          "label": "item4",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 9072,
          "documentRange": [
            9182,
            9266.515625
          ],
          "targetRange": [
            8507.96875,
            9266.515625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 84.515625
          }
        }
      }
    },
    {
      "id": "R17-PNG-42",
      "order": 42,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item4-x1-y0.png",
      "sha256": "cdfc52ed8e0e5abb4199966bd256e55c734bae22a0da79ff0cf813b65ab975ef",
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
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item4-x1-y0.png",
          "label": "item4",
          "requestedScrollLeft": 358,
          "actualScrollLeft": 358,
          "pageScrollY": 8398,
          "documentRange": [
            8508,
            9232
          ],
          "targetRange": [
            8507.96875,
            9266.515625
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
      "id": "R17-PNG-43",
      "order": 43,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item4-x1-y1.png",
      "sha256": "d65b9d026dcf985a8b352419c55a0b492bc73c5fe9b94efe47b66daea259a031",
      "dimensions": {
        "width": 358,
        "height": 84
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item4-x1-y1.png",
          "label": "item4",
          "requestedScrollLeft": 358,
          "actualScrollLeft": 358,
          "pageScrollY": 9072,
          "documentRange": [
            9182,
            9266.515625
          ],
          "targetRange": [
            8507.96875,
            9266.515625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 84.515625
          }
        }
      }
    },
    {
      "id": "R17-PNG-44",
      "order": 44,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item4-x2-y0.png",
      "sha256": "6c876e5e5f6e55d679fc0bb4cea7b27d906ae2149c689f18eb9a17fe4f280523",
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
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item4-x2-y0.png",
          "label": "item4",
          "requestedScrollLeft": 410,
          "actualScrollLeft": 410,
          "pageScrollY": 8398,
          "documentRange": [
            8508,
            9232
          ],
          "targetRange": [
            8507.96875,
            9266.515625
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
      "id": "R17-PNG-45",
      "order": 45,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item4-x2-y1.png",
      "sha256": "42f221450a0fe72d8757ccd8ddaee47df913315b583af222f4d9165562e19af3",
      "dimensions": {
        "width": 358,
        "height": 84
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item4-x2-y1.png",
          "label": "item4",
          "requestedScrollLeft": 410,
          "actualScrollLeft": 410,
          "pageScrollY": 9072,
          "documentRange": [
            9182,
            9266.515625
          ],
          "targetRange": [
            8507.96875,
            9266.515625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 84.515625
          }
        }
      }
    },
    {
      "id": "R17-PNG-46",
      "order": 46,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item5-x0-y0.png",
      "sha256": "d6b095dd30e829003f4d1a2bc8045fa170d18ebd73361ac86c2e4a1f08339006",
      "dimensions": {
        "width": 358,
        "height": 213
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item5-x0-y0.png",
          "label": "item5",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 12630,
          "documentRange": [
            12740.46875,
            12953.96875
          ],
          "targetRange": [
            12740.46875,
            12953.96875
          ],
          "clip": {
            "x": 16,
            "y": 110.46875,
            "width": 358,
            "height": 213.5
          }
        }
      }
    },
    {
      "id": "R17-PNG-47",
      "order": 47,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item5-x1-y0.png",
      "sha256": "e384727fdf0e0ad3ae9ac8c3cbff7c4445c557a20cb0c1a261d01c9a742bc623",
      "dimensions": {
        "width": 358,
        "height": 213
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item5-x1-y0.png",
          "label": "item5",
          "requestedScrollLeft": 356,
          "actualScrollLeft": 356,
          "pageScrollY": 12630,
          "documentRange": [
            12740.46875,
            12953.96875
          ],
          "targetRange": [
            12740.46875,
            12953.96875
          ],
          "clip": {
            "x": 16,
            "y": 110.46875,
            "width": 358,
            "height": 213.5
          }
        }
      }
    },
    {
      "id": "R17-PNG-48",
      "order": 48,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item5-x2-y0.png",
      "sha256": "dfe0e2ca3166daf70ba148c40fd86a256bf51898ad1e92887baaf693c984cb3a",
      "dimensions": {
        "width": 358,
        "height": 213
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item5-x2-y0.png",
          "label": "item5",
          "requestedScrollLeft": 712,
          "actualScrollLeft": 712,
          "pageScrollY": 12630,
          "documentRange": [
            12740.46875,
            12953.96875
          ],
          "targetRange": [
            12740.46875,
            12953.96875
          ],
          "clip": {
            "x": 16,
            "y": 110.46875,
            "width": 358,
            "height": 213.5
          }
        }
      }
    },
    {
      "id": "R17-PNG-49",
      "order": 49,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item5-x3-y0.png",
      "sha256": "d9fc92b67476b5984826a7de4c2556862aa13dd3f201a12d7d462ef8258b17f1",
      "dimensions": {
        "width": 358,
        "height": 213
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item5-x3-y0.png",
          "label": "item5",
          "requestedScrollLeft": 728,
          "actualScrollLeft": 728,
          "pageScrollY": 12630,
          "documentRange": [
            12740.46875,
            12953.96875
          ],
          "targetRange": [
            12740.46875,
            12953.96875
          ],
          "clip": {
            "x": 16,
            "y": 110.46875,
            "width": 358,
            "height": 213.5
          }
        }
      }
    },
    {
      "id": "R17-PNG-50",
      "order": 50,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item6-x0-y0.png",
      "sha256": "457b15019cd6197bacbffae086e5afe5648ffdf626cb29371f44a577ce84986f",
      "dimensions": {
        "width": 358,
        "height": 93
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item6-x0-y0.png",
          "label": "item6",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 14093,
          "documentRange": [
            14203,
            14296.890625
          ],
          "targetRange": [
            14202.5625,
            14296.890625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 93.890625
          }
        }
      }
    },
    {
      "id": "R17-PNG-51",
      "order": 51,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item6-x1-y0.png",
      "sha256": "2f73b6ff56d1d50951d9a1447ea08b42525bb24fd429a80e4da3b43e0136981d",
      "dimensions": {
        "width": 358,
        "height": 93
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item6-x1-y0.png",
          "label": "item6",
          "requestedScrollLeft": 358,
          "actualScrollLeft": 358,
          "pageScrollY": 14093,
          "documentRange": [
            14203,
            14296.890625
          ],
          "targetRange": [
            14202.5625,
            14296.890625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 93.890625
          }
        }
      }
    },
    {
      "id": "R17-PNG-52",
      "order": 52,
      "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item6-x2-y0.png",
      "sha256": "0ca9ae4fd8de4de2522995355954c76c6fed6cec47e32533e6e1140208587602",
      "dimensions": {
        "width": 358,
        "height": 93
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-pilot/ui-state-and-ux-390-dark-item6-x2-y0.png",
          "label": "item6",
          "requestedScrollLeft": 538,
          "actualScrollLeft": 538,
          "pageScrollY": 14093,
          "documentRange": [
            14203,
            14296.890625
          ],
          "targetRange": [
            14202.5625,
            14296.890625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 93.890625
          }
        }
      }
    },
    {
      "id": "R17-PNG-53",
      "order": 53,
      "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-1440-dark-top.png",
      "sha256": "a47acde191723856953403acf1ac1aae4b2de7252485dd06b19baabc565ef5fd",
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
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R17-PNG-54",
      "order": 54,
      "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-1440-dark-item0-x0-y0.png",
      "sha256": "7b43f8eeab4d01478aaed05007ec5f87386db533c03e57710cca3160258e5b74",
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
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-1440-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2015,
          "documentRange": [
            2125.421875,
            2347.421875
          ],
          "targetRange": [
            2125.421875,
            2347.421875
          ],
          "clip": {
            "x": 324,
            "y": 110.421875,
            "width": 788,
            "height": 222
          }
        }
      }
    },
    {
      "id": "R17-PNG-55",
      "order": 55,
      "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-1440-dark-item1-x0-y0.png",
      "sha256": "3de3fc965a3cd0bf1a800dee98ce6103de8a6a2cade3487b8c15be21034baf24",
      "dimensions": {
        "width": 788,
        "height": 461
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-1440-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 5449,
          "documentRange": [
            5559,
            6020.15625
          ],
          "targetRange": [
            5558.890625,
            6020.15625
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 461.15625
          }
        }
      }
    },
    {
      "id": "R17-PNG-56",
      "order": 56,
      "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-1440-dark-item2-x0-y0.png",
      "sha256": "55ab8e01ceafb32143f27821a59b4c5d2a1950c7de748708170d743f4b496c2a",
      "dimensions": {
        "width": 788,
        "height": 189
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-1440-dark-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 7273,
          "documentRange": [
            7383.4375,
            7572.4375
          ],
          "targetRange": [
            7383.4375,
            7572.4375
          ],
          "clip": {
            "x": 324,
            "y": 110.4375,
            "width": 788,
            "height": 189
          }
        }
      }
    },
    {
      "id": "R17-PNG-57",
      "order": 57,
      "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-1440-dark-item2-x1-y0.png",
      "sha256": "8665682d0f948cab650f72ffe6a76af82120e0814e686004a3465bfc7509b653",
      "dimensions": {
        "width": 788,
        "height": 189
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-1440-dark-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 563,
          "actualScrollLeft": 563,
          "pageScrollY": 7273,
          "documentRange": [
            7383.4375,
            7572.4375
          ],
          "targetRange": [
            7383.4375,
            7572.4375
          ],
          "clip": {
            "x": 324,
            "y": 110.4375,
            "width": 788,
            "height": 189
          }
        }
      }
    },
    {
      "id": "R17-PNG-58",
      "order": 58,
      "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-1440-dark-item3-x0-y0.png",
      "sha256": "387c129592b147bf2c0181b641aabf6cee8f36c160daefc3202bf6846088e457",
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
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-1440-dark-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 8299,
          "documentRange": [
            8409.4375,
            8669.40625
          ],
          "targetRange": [
            8409.4375,
            8669.40625
          ],
          "clip": {
            "x": 324,
            "y": 110.4375,
            "width": 788,
            "height": 259.96875
          }
        }
      }
    },
    {
      "id": "R17-PNG-59",
      "order": 59,
      "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-390-light-top.png",
      "sha256": "f3ed3e08f6a4c51858888244c0efcab6faebbe37cc6f3440b4cb8000fb7f00b2",
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
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R17-PNG-60",
      "order": 60,
      "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-390-light-item0-x0-y0.png",
      "sha256": "5687824878b713be48de18cc3677134b83760e2115dc9b734b0ff9076f35cc93",
      "dimensions": {
        "width": 358,
        "height": 221
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-390-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3087,
          "documentRange": [
            3197,
            3418.953125
          ],
          "targetRange": [
            3196.953125,
            3418.953125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 221.953125
          }
        }
      }
    },
    {
      "id": "R17-PNG-61",
      "order": 61,
      "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-390-light-item1-x0-y0.png",
      "sha256": "7a02f09b82a0d1e9a70927194c9521254514ef67b87d6de38490924689bbf96e",
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
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-390-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 8612,
          "documentRange": [
            8722,
            9446
          ],
          "targetRange": [
            8721.78125,
            9498.984375
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
      "id": "R17-PNG-62",
      "order": 62,
      "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-390-light-item1-x0-y1.png",
      "sha256": "a728d0a3c9bb6f0aacc5addd6d2f6f020f0b6548a90e4b17716cf2e6d04f5499",
      "dimensions": {
        "width": 358,
        "height": 102
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-390-light-item1-x0-y1.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 9286,
          "documentRange": [
            9396,
            9498.984375
          ],
          "targetRange": [
            8721.78125,
            9498.984375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 102.984375
          }
        }
      }
    },
    {
      "id": "R17-PNG-63",
      "order": 63,
      "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-390-light-item1-x1-y0.png",
      "sha256": "0b87edaa18da5f543b06839c5a16e184806f40c7bfd77357c89fb8c905cd1e77",
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
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-390-light-item1-x1-y0.png",
          "label": "item1",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 8612,
          "documentRange": [
            8722,
            9446
          ],
          "targetRange": [
            8721.78125,
            9498.984375
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
      "id": "R17-PNG-64",
      "order": 64,
      "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-390-light-item1-x1-y1.png",
      "sha256": "0f9a9e13119d45d7abed914579859b1a91cfb8419d2208229ba3ecb7af846c52",
      "dimensions": {
        "width": 358,
        "height": 102
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-390-light-item1-x1-y1.png",
          "label": "item1",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 9286,
          "documentRange": [
            9396,
            9498.984375
          ],
          "targetRange": [
            8721.78125,
            9498.984375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 102.984375
          }
        }
      }
    },
    {
      "id": "R17-PNG-65",
      "order": 65,
      "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-390-light-item2-x0-y0.png",
      "sha256": "43b7aaac797c324e669d6a3f206ad4e1484608b68348311fad22cb1810dcaef3",
      "dimensions": {
        "width": 358,
        "height": 188
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-390-light-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 11238,
          "documentRange": [
            11348,
            11536.546875
          ],
          "targetRange": [
            11347.546875,
            11536.546875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 188.546875
          }
        }
      }
    },
    {
      "id": "R17-PNG-66",
      "order": 66,
      "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-390-light-item2-x1-y0.png",
      "sha256": "9935efb48d53de8748b3cc11cf0b5d018ecb82aabf90a221d72912feba41855b",
      "dimensions": {
        "width": 358,
        "height": 188
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-390-light-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 356,
          "actualScrollLeft": 356,
          "pageScrollY": 11238,
          "documentRange": [
            11348,
            11536.546875
          ],
          "targetRange": [
            11347.546875,
            11536.546875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 188.546875
          }
        }
      }
    },
    {
      "id": "R17-PNG-67",
      "order": 67,
      "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-390-light-item2-x2-y0.png",
      "sha256": "7e70ac7c8eba855ea3e07d824f2030cd004ef76064a9f4f7ee3ada5700bb9255",
      "dimensions": {
        "width": 358,
        "height": 188
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-390-light-item2-x2-y0.png",
          "label": "item2",
          "requestedScrollLeft": 712,
          "actualScrollLeft": 712,
          "pageScrollY": 11238,
          "documentRange": [
            11348,
            11536.546875
          ],
          "targetRange": [
            11347.546875,
            11536.546875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 188.546875
          }
        }
      }
    },
    {
      "id": "R17-PNG-68",
      "order": 68,
      "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-390-light-item2-x3-y0.png",
      "sha256": "a55e04a5bf60462f769b3dfeb3ebbde2516b55732d8a030a274c674aaf712bc9",
      "dimensions": {
        "width": 358,
        "height": 188
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-390-light-item2-x3-y0.png",
          "label": "item2",
          "requestedScrollLeft": 993,
          "actualScrollLeft": 993,
          "pageScrollY": 11238,
          "documentRange": [
            11348,
            11536.546875
          ],
          "targetRange": [
            11347.546875,
            11536.546875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 188.546875
          }
        }
      }
    },
    {
      "id": "R17-PNG-69",
      "order": 69,
      "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-390-light-item3-x0-y0.png",
      "sha256": "fba8a9fda82d5be3a89246a6d05ce05136c3ce4b5175fe28d43026ceff9521a3",
      "dimensions": {
        "width": 358,
        "height": 312
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-390-light-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 12763,
          "documentRange": [
            12873.140625,
            13185.765625
          ],
          "targetRange": [
            12873.140625,
            13185.765625
          ],
          "clip": {
            "x": 16,
            "y": 110.140625,
            "width": 358,
            "height": 312.625
          }
        }
      }
    },
    {
      "id": "R17-PNG-70",
      "order": 70,
      "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-390-light-item3-x1-y0.png",
      "sha256": "0cd24fed7dd9f710154848c08b09a8cbef6deeb62ccb7ede2e1f77e232c3706b",
      "dimensions": {
        "width": 358,
        "height": 312
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-390-light-item3-x1-y0.png",
          "label": "item3",
          "requestedScrollLeft": 358,
          "actualScrollLeft": 358,
          "pageScrollY": 12763,
          "documentRange": [
            12873.140625,
            13185.765625
          ],
          "targetRange": [
            12873.140625,
            13185.765625
          ],
          "clip": {
            "x": 16,
            "y": 110.140625,
            "width": 358,
            "height": 312.625
          }
        }
      }
    },
    {
      "id": "R17-PNG-71",
      "order": 71,
      "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-390-light-item3-x2-y0.png",
      "sha256": "ddfa32a6a53ff721abc275f6af898ae79c3c4eeeecf5b9bdacbf4346a0ae271d",
      "dimensions": {
        "width": 358,
        "height": 312
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/accessibility-responsive-design",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/accessibility-responsive-design-390-light-item3-x2-y0.png",
          "label": "item3",
          "requestedScrollLeft": 538,
          "actualScrollLeft": 538,
          "pageScrollY": 12763,
          "documentRange": [
            12873.140625,
            13185.765625
          ],
          "targetRange": [
            12873.140625,
            13185.765625
          ],
          "clip": {
            "x": 16,
            "y": 110.140625,
            "width": 358,
            "height": 312.625
          }
        }
      }
    },
    {
      "id": "R17-PNG-72",
      "order": 72,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-1440-dark-top.png",
      "sha256": "3f49fd0297b5f107babeef7f2ba5c543cbb3019631851dc84121f049ec7968b4",
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
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R17-PNG-73",
      "order": 73,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-1440-dark-item0-x0-y0.png",
      "sha256": "68954503361c1da1cca75a400f18d77d84236b2cfa55ca34f8f0ef0dde95289c",
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
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-1440-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2015,
          "documentRange": [
            2125.421875,
            2347.421875
          ],
          "targetRange": [
            2125.421875,
            2347.421875
          ],
          "clip": {
            "x": 324,
            "y": 110.421875,
            "width": 788,
            "height": 222
          }
        }
      }
    },
    {
      "id": "R17-PNG-74",
      "order": 74,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-1440-dark-item1-x0-y0.png",
      "sha256": "8ef1a0f2fbc599fa050a3739766c7db32368c9abad3c6e96eb86da0b87682a74",
      "dimensions": {
        "width": 788,
        "height": 670
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-1440-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2448,
          "documentRange": [
            2558,
            3228.15625
          ],
          "targetRange": [
            2557.921875,
            3228.15625
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 670.15625
          }
        }
      }
    },
    {
      "id": "R17-PNG-75",
      "order": 75,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-1440-dark-item2-x0-y0.png",
      "sha256": "1f101764f216a6aae33bf385ddadf17dd0769a8306a82f04c83a03b6e47d07ef",
      "dimensions": {
        "width": 788,
        "height": 321
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-1440-dark-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3529,
          "documentRange": [
            3639,
            3960.609375
          ],
          "targetRange": [
            3638.65625,
            3960.609375
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 321.609375
          }
        }
      }
    },
    {
      "id": "R17-PNG-76",
      "order": 76,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-1440-dark-item3-x0-y0.png",
      "sha256": "4fc1a54e0ac6e5cfdba8cba8eab0ba3ae8a3823fb0b72d653ce3207f472d3ede",
      "dimensions": {
        "width": 788,
        "height": 321
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-1440-dark-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 4796,
          "documentRange": [
            4906,
            5227.5625
          ],
          "targetRange": [
            4905.609375,
            5227.5625
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 321.5625
          }
        }
      }
    },
    {
      "id": "R17-PNG-77",
      "order": 77,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-1440-dark-item4-x0-y0.png",
      "sha256": "a0a0c6ddbca29e69029717e3947117c4bbc9631cbeabd11d64e8e1d3d03eb4b8",
      "dimensions": {
        "width": 788,
        "height": 679
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-1440-dark-item4-x0-y0.png",
          "label": "item4",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 5815,
          "documentRange": [
            5925,
            6604.125
          ],
          "targetRange": [
            5924.5625,
            6604.125
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 679.125
          }
        }
      }
    },
    {
      "id": "R17-PNG-78",
      "order": 78,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-1440-dark-item5-x0-y0.png",
      "sha256": "b91f1b911b94eafc39dbede72cef9bb55ea811184c21d1555a0c65f899eeb410",
      "dimensions": {
        "width": 788,
        "height": 213
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-1440-dark-item5-x0-y0.png",
          "label": "item5",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 8808,
          "documentRange": [
            8918,
            9131
          ],
          "targetRange": [
            8917.5,
            9131
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 213
          }
        }
      }
    },
    {
      "id": "R17-PNG-79",
      "order": 79,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-1440-dark-item5-x1-y0.png",
      "sha256": "1930fd629d6ad0a2dfa45902ce76d8748a9099a822ea9ed7337494ec8a21db7e",
      "dimensions": {
        "width": 788,
        "height": 213
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-1440-dark-item5-x1-y0.png",
          "label": "item5",
          "requestedScrollLeft": 298,
          "actualScrollLeft": 298,
          "pageScrollY": 8808,
          "documentRange": [
            8918,
            9131
          ],
          "targetRange": [
            8917.5,
            9131
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 213
          }
        }
      }
    },
    {
      "id": "R17-PNG-80",
      "order": 80,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-1440-dark-item6-x0-y0.png",
      "sha256": "d94927a6d088787fa03ae015002d293d08186f96bc38a630faadb52b77060029",
      "dimensions": {
        "width": 788,
        "height": 94
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-1440-dark-item6-x0-y0.png",
          "label": "item6",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 9770,
          "documentRange": [
            9880,
            9974.328125
          ],
          "targetRange": [
            9880,
            9974.328125
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 94.328125
          }
        }
      }
    },
    {
      "id": "R17-PNG-81",
      "order": 81,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-top.png",
      "sha256": "f35f0ae2bcb23e21be6f3fc583e7626039923172b2e41b8057fb1f05d3c40b9c",
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
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R17-PNG-82",
      "order": 82,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item0-x0-y0.png",
      "sha256": "9e7af055a2de07f12a9980daff29cdc1c9042f087b30ff043d7fc40fca515fec",
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
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2835,
          "documentRange": [
            2945,
            3182.953125
          ],
          "targetRange": [
            2944.953125,
            3182.953125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 237.953125
          }
        }
      }
    },
    {
      "id": "R17-PNG-83",
      "order": 83,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item0-x1-y0.png",
      "sha256": "60942ca938bb7580bd70f5312d080b8512be1d23fb1f1432b10a7ac2b3bb7c87",
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
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item0-x1-y0.png",
          "label": "item0",
          "requestedScrollLeft": 256,
          "actualScrollLeft": 256,
          "pageScrollY": 2835,
          "documentRange": [
            2945,
            3182.953125
          ],
          "targetRange": [
            2944.953125,
            3182.953125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 237.953125
          }
        }
      }
    },
    {
      "id": "R17-PNG-84",
      "order": 84,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item1-x0-y0.png",
      "sha256": "f71c5601cc0ede61a2c1336629f87e8646f9e6620b5df236e007ddf244d14ff3",
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
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3414,
          "documentRange": [
            3524.046875,
            4248
          ],
          "targetRange": [
            3524.046875,
            4404.90625
          ],
          "clip": {
            "x": 16,
            "y": 110.046875,
            "width": 358,
            "height": 723.953125
          }
        }
      }
    },
    {
      "id": "R17-PNG-85",
      "order": 85,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item1-x0-y1.png",
      "sha256": "ea1768ed1c32cd73b5005949ac5c3a8ba3ae5abf8aa452c6e4cd4a7a3ced608b",
      "dimensions": {
        "width": 358,
        "height": 206
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item1-x0-y1.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 4088,
          "documentRange": [
            4198,
            4404.90625
          ],
          "targetRange": [
            3524.046875,
            4404.90625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 206.90625
          }
        }
      }
    },
    {
      "id": "R17-PNG-86",
      "order": 86,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item1-x1-y0.png",
      "sha256": "182f66a6144ae82c5b84bb4b12619f69cc6b5b72b91e30477c8478d9e413a567",
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
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item1-x1-y0.png",
          "label": "item1",
          "requestedScrollLeft": 282,
          "actualScrollLeft": 282,
          "pageScrollY": 3414,
          "documentRange": [
            3524.046875,
            4248
          ],
          "targetRange": [
            3524.046875,
            4404.90625
          ],
          "clip": {
            "x": 16,
            "y": 110.046875,
            "width": 358,
            "height": 723.953125
          }
        }
      }
    },
    {
      "id": "R17-PNG-87",
      "order": 87,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item1-x1-y1.png",
      "sha256": "dbf6d0bd0fc119643ec10daa142c2bda5562be8497ee479f58859323e20b0536",
      "dimensions": {
        "width": 358,
        "height": 206
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item1-x1-y1.png",
          "label": "item1",
          "requestedScrollLeft": 282,
          "actualScrollLeft": 282,
          "pageScrollY": 4088,
          "documentRange": [
            4198,
            4404.90625
          ],
          "targetRange": [
            3524.046875,
            4404.90625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 206.90625
          }
        }
      }
    },
    {
      "id": "R17-PNG-88",
      "order": 88,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item2-x0-y0.png",
      "sha256": "65c70b921354e3fd6f5b1f923408a99113c844ebaafff3887e6e230e22a8d9cc",
      "dimensions": {
        "width": 358,
        "height": 453
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 4976,
          "documentRange": [
            5086,
            5539.59375
          ],
          "targetRange": [
            5086,
            5539.59375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 453.59375
          }
        }
      }
    },
    {
      "id": "R17-PNG-89",
      "order": 89,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item2-x1-y0.png",
      "sha256": "b031c5d16a3d8ce25161bea23ad1059d2cb51c505236b3ecc3793a0ed14e3e96",
      "dimensions": {
        "width": 358,
        "height": 453
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 4976,
          "documentRange": [
            5086,
            5539.59375
          ],
          "targetRange": [
            5086,
            5539.59375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 453.59375
          }
        }
      }
    },
    {
      "id": "R17-PNG-90",
      "order": 90,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item3-x0-y0.png",
      "sha256": "daa35de62a90d25eab485ed8cc0827ced8c5428a414b495f8e451e2dcafbbbde",
      "dimensions": {
        "width": 358,
        "height": 453
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 7000,
          "documentRange": [
            7110,
            7563.375
          ],
          "targetRange": [
            7109.78125,
            7563.375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 453.375
          }
        }
      }
    },
    {
      "id": "R17-PNG-91",
      "order": 91,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item3-x1-y0.png",
      "sha256": "0cdc7ca4e9eeaa2152b0ad49953cb102426ff6c71009aec045f4553e6905c927",
      "dimensions": {
        "width": 358,
        "height": 453
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item3-x1-y0.png",
          "label": "item3",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 7000,
          "documentRange": [
            7110,
            7563.375
          ],
          "targetRange": [
            7109.78125,
            7563.375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 453.375
          }
        }
      }
    },
    {
      "id": "R17-PNG-92",
      "order": 92,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item4-x0-y0.png",
      "sha256": "207b888b5c092a79104a85b66ec940452c296bd38672db8bffde6336bd8b497b",
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
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item4-x0-y0.png",
          "label": "item4",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 8398,
          "documentRange": [
            8508,
            9232
          ],
          "targetRange": [
            8507.96875,
            9266.515625
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
      "id": "R17-PNG-93",
      "order": 93,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item4-x0-y1.png",
      "sha256": "2eb36cf1127b67fae0cceb1a634ad8cca8f994e9091f76e322569f5237ccdaac",
      "dimensions": {
        "width": 358,
        "height": 84
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item4-x0-y1.png",
          "label": "item4",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 9072,
          "documentRange": [
            9182,
            9266.515625
          ],
          "targetRange": [
            8507.96875,
            9266.515625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 84.515625
          }
        }
      }
    },
    {
      "id": "R17-PNG-94",
      "order": 94,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item4-x1-y0.png",
      "sha256": "2d59f1b761d0132750feb30688cfa98886f20a9f24cfcd1d74aab5a367ea330b",
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
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item4-x1-y0.png",
          "label": "item4",
          "requestedScrollLeft": 358,
          "actualScrollLeft": 358,
          "pageScrollY": 8398,
          "documentRange": [
            8508,
            9232
          ],
          "targetRange": [
            8507.96875,
            9266.515625
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
      "id": "R17-PNG-95",
      "order": 95,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item4-x1-y1.png",
      "sha256": "96db9436862129b54dba792146e789ca81e985469e1968eb858a810542515141",
      "dimensions": {
        "width": 358,
        "height": 84
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item4-x1-y1.png",
          "label": "item4",
          "requestedScrollLeft": 358,
          "actualScrollLeft": 358,
          "pageScrollY": 9072,
          "documentRange": [
            9182,
            9266.515625
          ],
          "targetRange": [
            8507.96875,
            9266.515625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 84.515625
          }
        }
      }
    },
    {
      "id": "R17-PNG-96",
      "order": 96,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item4-x2-y0.png",
      "sha256": "ccd8ab6a166802b3007a3119ce61ca2b547a33831bfd868393a78527d6cee291",
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
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item4-x2-y0.png",
          "label": "item4",
          "requestedScrollLeft": 410,
          "actualScrollLeft": 410,
          "pageScrollY": 8398,
          "documentRange": [
            8508,
            9232
          ],
          "targetRange": [
            8507.96875,
            9266.515625
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
      "id": "R17-PNG-97",
      "order": 97,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item4-x2-y1.png",
      "sha256": "1e282f03726d76332c6ed5aa1339870d16d2cc1b3af8ce31e1f99bceeffe06c1",
      "dimensions": {
        "width": 358,
        "height": 84
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item4-x2-y1.png",
          "label": "item4",
          "requestedScrollLeft": 410,
          "actualScrollLeft": 410,
          "pageScrollY": 9072,
          "documentRange": [
            9182,
            9266.515625
          ],
          "targetRange": [
            8507.96875,
            9266.515625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 84.515625
          }
        }
      }
    },
    {
      "id": "R17-PNG-98",
      "order": 98,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item5-x0-y0.png",
      "sha256": "7f7a01f42aea050dada93e191429c4dc1ca8f91fecfd7fbd521e6385385214b6",
      "dimensions": {
        "width": 358,
        "height": 213
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item5-x0-y0.png",
          "label": "item5",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 12630,
          "documentRange": [
            12740.46875,
            12953.96875
          ],
          "targetRange": [
            12740.46875,
            12953.96875
          ],
          "clip": {
            "x": 16,
            "y": 110.46875,
            "width": 358,
            "height": 213.5
          }
        }
      }
    },
    {
      "id": "R17-PNG-99",
      "order": 99,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item5-x1-y0.png",
      "sha256": "20ce6ffd3595fad3e6b10cad92eb7c4f35db7b723b33981683af205caba65eb6",
      "dimensions": {
        "width": 358,
        "height": 213
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item5-x1-y0.png",
          "label": "item5",
          "requestedScrollLeft": 356,
          "actualScrollLeft": 356,
          "pageScrollY": 12630,
          "documentRange": [
            12740.46875,
            12953.96875
          ],
          "targetRange": [
            12740.46875,
            12953.96875
          ],
          "clip": {
            "x": 16,
            "y": 110.46875,
            "width": 358,
            "height": 213.5
          }
        }
      }
    },
    {
      "id": "R17-PNG-100",
      "order": 100,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item5-x2-y0.png",
      "sha256": "e38a48e0ceba473a4a144a415df46c169abc9577b87e61219ea43f2a971ff57b",
      "dimensions": {
        "width": 358,
        "height": 213
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item5-x2-y0.png",
          "label": "item5",
          "requestedScrollLeft": 712,
          "actualScrollLeft": 712,
          "pageScrollY": 12630,
          "documentRange": [
            12740.46875,
            12953.96875
          ],
          "targetRange": [
            12740.46875,
            12953.96875
          ],
          "clip": {
            "x": 16,
            "y": 110.46875,
            "width": 358,
            "height": 213.5
          }
        }
      }
    },
    {
      "id": "R17-PNG-101",
      "order": 101,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item5-x3-y0.png",
      "sha256": "870a627736e13c71421119b290a49fb95ecbce5195e4fba12c44f17a3eafcf8c",
      "dimensions": {
        "width": 358,
        "height": 213
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item5-x3-y0.png",
          "label": "item5",
          "requestedScrollLeft": 728,
          "actualScrollLeft": 728,
          "pageScrollY": 12630,
          "documentRange": [
            12740.46875,
            12953.96875
          ],
          "targetRange": [
            12740.46875,
            12953.96875
          ],
          "clip": {
            "x": 16,
            "y": 110.46875,
            "width": 358,
            "height": 213.5
          }
        }
      }
    },
    {
      "id": "R17-PNG-102",
      "order": 102,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item6-x0-y0.png",
      "sha256": "99c31a900d2a0e83b3ad59998e4cb9f22beddd6c2949fbb0389965c049b7e829",
      "dimensions": {
        "width": 358,
        "height": 93
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item6-x0-y0.png",
          "label": "item6",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 14093,
          "documentRange": [
            14203,
            14296.890625
          ],
          "targetRange": [
            14202.5625,
            14296.890625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 93.890625
          }
        }
      }
    },
    {
      "id": "R17-PNG-103",
      "order": 103,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item6-x1-y0.png",
      "sha256": "d88df98e4c62879bf6b7fb1de5bd9387db554f90a28a3026e6d3049b9954983f",
      "dimensions": {
        "width": 358,
        "height": 93
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item6-x1-y0.png",
          "label": "item6",
          "requestedScrollLeft": 358,
          "actualScrollLeft": 358,
          "pageScrollY": 14093,
          "documentRange": [
            14203,
            14296.890625
          ],
          "targetRange": [
            14202.5625,
            14296.890625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 93.890625
          }
        }
      }
    },
    {
      "id": "R17-PNG-104",
      "order": 104,
      "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item6-x2-y0.png",
      "sha256": "3cbdc8d529872440c13962b222c3860c4543743d75283da954aa1fe7291a4473",
      "dimensions": {
        "width": 358,
        "height": 93
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "05-frontend/ui-state-and-ux",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r17-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r17-inputs-20261115-remaining/ui-state-and-ux-390-light-item6-x2-y0.png",
          "label": "item6",
          "requestedScrollLeft": 538,
          "actualScrollLeft": 538,
          "pageScrollY": 14093,
          "documentRange": [
            14203,
            14296.890625
          ],
          "targetRange": [
            14202.5625,
            14296.890625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 93.890625
          }
        }
      }
    }
  ]
}
```
<!-- m5-r17-request:data:end -->
