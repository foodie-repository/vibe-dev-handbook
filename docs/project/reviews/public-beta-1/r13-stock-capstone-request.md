# R13 주가 대시보드 캡스톤 — 고정 검토 요청

기준 commit e9417c577883734d092951e7a01f22247e9819e5, 입력 고정2026-11-15. 대상 원고 전체와 full_text_paths의 전체 텍스트·SVG/Mermaid·직접 근거, context_excerpts의 명시 범위를 읽습니다. 인접 장·브리프·용어집은 일관성 문맥이며 해당 행 전체 검토를 대신하지 않습니다. 발췌 밖을 읽었다고 주장하지 않습니다.

Controller·작성자·이전 대화와 분리된 fresh gpt-6-astra/high 저장 세션입니다. 프로세스 한정 공식 ChatGPT 구독 경로에서 실제 모델/effort, history0, readOnly/network false, 모든 도구·MCP 비활성과 사용0을 확인합니다. 같은 저장 ID와 실제 이력 복구로 후속 검토하며 R02 승계 예외는 적용하지 않습니다. 전역 설정/인증, API키, 추가 크레딧, 다른 과금은 금지합니다.

공통 계약 C01~C12·9항목18점·치명 항목과 한국어 여섯 절을 적용합니다. D-01~D-05 요구·fixture·복합선택키·데이터 계약·품질/신선도·후보와게시버전·계보·재현성·권리·상태·테스트 오라클·Git/배포/복원을 대조합니다. 실제 시장·라이선스·달력·조정 산식은 not-confirmed이고 이 교육 사례는 구현 성공 증거가 아닙니다. 네 공식 원전의 관련 절만 새 확인했고 R05/R06/R08/R09/R10의 같은 실행 근거를 재사용합니다. 과거 날짜와 PBSG-019/026은 자동 해소하지 않습니다.

PNG48개는 공통 그림 두 소비 경로의12상태×상단/그림/전체36개와 현재 추적 표3폭×2테마×좌우12개입니다. 원고 대상/SVG/Mermaid는PBV-02 입력과동일하고 R01 소비 본문은동일하나 frontmatter의review전이만 달라 과거초안배지를현재상태로쓰지않습니다. 현재CSS는50rem이하 셀min-width8rem이며 과거전체표레이아웃을 현재모바일표증거로확대하지않습니다.

새 캡처는1440light/390dark 대표4개를 실제읽은뒤 나머지8개로확장했습니다. desktop 사용자행동열48.828125px·첫행780.515625px·표4920.046875px의세로한글자 우려가 있습니다. mobile은128pxmin·첫행253.953125px입니다. 관측은finding판정이아니며 실행exit0/오류0도판독성PASS가아닙니다. 좌우구간만촬영하여중간열전체/표전체/키보드성공증거로확대하지않습니다.

원본48개를localImage/detail original로전달합니다. ID별관측·판독한계를기록하세요. 과거 긴전체페이지는축소되므로배치만판독하고미세글자완독을주장하지마세요. 기존boundedcapture/실패기록은보존하고새로재생성하지않았습니다. R01의기존완료검토는불변범위재사용이며이행으로R01전체를재검토/승격하지않습니다.

도구·쓰기·셸·웹·MCP·플러그인·스킬·위임없이응답만반환하세요. 준비검사기/테스트코드의C/I/M·체크포인트적합성은원고판정과구분합니다. 개인home절대경로·비공개전체세션ID를출력하지마세요. 부족입력은BLOCKED이며준비를원고PASS/review/M5/ready/공개승인으로처리하지않습니다. 최초정상결과는수정착수전에별도커밋해야합니다.

<!-- m5-r13-request:data:start -->
```json
{
  "schema_version": 1,
  "review_id": "R13",
  "baseline_commit": "e9417c577883734d092951e7a01f22247e9819e5",
  "target": "src/content/docs/12-case-studies/analytics-dashboard-case-study.md",
  "planned_profile": {
    "model": "gpt-6-astra",
    "reasoning_effort": "high"
  },
  "fresh": true,
  "persistent": true,
  "successor_exception": false,
  "full_text_paths": [
    "docs/project/reviews/public-beta-1/codex-review-contract.md",
    "src/content/docs/12-case-studies/analytics-dashboard-case-study.md",
    "src/assets/diagrams/analytics-dashboard-architecture.svg",
    "src/assets/diagrams/source/analytics-dashboard-architecture.mmd",
    "research/public-beta-review-source-excerpts/r13-stock-capstone-2026-11-15.md",
    "research/public-beta-review-source-excerpts/r05-browser-dom-2026-11-15.md",
    "research/public-beta-review-source-excerpts/r06-prd-sdd-tdd-2026-11-15.md",
    "research/public-beta-review-source-excerpts/r08-git-github-2026-11-15.md",
    "research/public-beta-review-source-excerpts/r09-build-deploy-2026-11-15.md",
    "research/public-beta-review-source-excerpts/r10-operations-2026-11-15.md",
    "research/stock-dashboard-case-brief.md",
    "src/content/docs/01-mental-models/software-is-a-system.md",
    "src/content/docs/11-ai-native/working-with-coding-agents.md",
    "src/content/docs/10-deployment-operations/logs-monitoring-backup.md",
    "src/content/docs/reference/development-glossary.md",
    "src/styles/custom.css",
    "templates/agent-task-brief-template.md"
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
      "sha256": "1c3a4688e92eb95e9c03f9144b3c1ccc5258b2a4827e30dd0639fc680706aac6",
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
      "sha256": "a189c448ac40e9f316f0dd20c97ef7c5babc73bf859dc83d28afe24da35f75fa",
      "segments": [
        {
          "start_line": 387,
          "end_line": 395,
          "text": "| `12-case-studies/first-full-stack-project.md` | https://docs.astro.build/en/guides/deploy/github/ | 2026-08-06 | 소스 검증·정적 빌드·배포 작업·사이트 URL과 공개 확인을 서로 다른 단계와 증거로 구분하는 기존 Astro 배포 사례 범위 |\n| `12-case-studies/analytics-dashboard-case-study.md` | https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics | 2026-08-04 | 사용자 요구를 설계·데이터 경계·테스트·배포·운영 증거와 추적하는 소프트웨어 생명주기 교육 범위 |\n| `12-case-studies/analytics-dashboard-case-study.md` | https://developer.mozilla.org/en-US/curriculum/ | 2026-08-04 | 필터·표·상태·브라우저 렌더링과 반응형 사용자 인터페이스를 검증하는 웹 교육 범위 |\n| `12-case-studies/analytics-dashboard-case-study.md` | https://www.w3.org/WAI/fundamentals/accessibility-intro/ | 2026-08-04 | 차트의 표·텍스트 대안, 키보드 조작과 색상 외 상태 표현을 사람의 사용 가능성으로 확인하는 접근성 범위 |\n| `12-case-studies/analytics-dashboard-case-study.md` | https://www.w3.org/TR/WCAG22/ | 2026-08-13, W3C Recommendation 12 December 2024 | 차트·표·상태 계약의 비텍스트 대안, 정보·관계, 키보드, 색상 외 정보, 이름·역할·값과 상태 메시지 규범 범위. 현재 원고·fixture의 접근성 계약을 실제 구현·전체 WCAG 적합 완료로 확대하지 않음 |\n| `12-case-studies/analytics-dashboard-case-study.md` | https://git-scm.com/book/ko/v2 | 2026-08-04 | 코드·계약·작은 fixture·버전 기록의 로컬 변경 이력과 원격 공유 상태를 구분하는 범위 |\n| `12-case-studies/analytics-dashboard-case-study.md` | https://docs.astro.build/en/guides/deploy/github/ | 2026-08-04 | 정적 데이터와 사이트 아티팩트의 GitHub Pages 배포 구조, site·base path와 실제 공개 확인 범위 |\n| `12-case-studies/analytics-dashboard-case-study.md` | 저장소 내부 `research/stock-dashboard-case-brief.md`의 `EDU-FIXTURE` | 2026-08-10 | 교육용 가상 주가·거래량 fixture의 행·전달·신선도·검토 대기·접근성 계약. 실제 시장·상품·시세·조정 방식·거래일·시간대·이용 조건·재배포 범위는 확인하지 않았으므로 실제 데이터 주장에 사용하지 않음 |\n"
        },
        {
          "start_line": 459,
          "end_line": 462,
          "text": "- `12-case-studies/first-full-stack-project.md` (`PBSG-020`): 기존에 확인한 SWEBOK·OpenAPI·OWASP·PostgreSQL·MDN·Git·Astro 출처를 모임 웹앱의 교육용 책임·판단 질문에 연결했습니다. 2026-08-13 Task 8의 Supabase·Vercel·Codex Sites 자료는 선택 질문의 선택적·날짜 고정 예시일 뿐 제품 조합·계정·데이터베이스·런타임·배포 환경을 채택하지 않았습니다. 따라서 마지막 한 자리의 구체적인 잠금·격리 구현, 부분 고유성 표현, 배포 환경별 마이그레이션, 로그, 백업 보존·격리 복원 시험과 운영 보장의 PBSG-020은 현재 제품 중립 교육 범위 밖인 `not-confirmed`로 유지하며, 실제 승인된 구현·배포 증거가 생기기 전에는 닫지 않습니다. 이 장과 Task 18의 문서·로컬 브라우저 증거는 실제 서비스 구현·배포·복구 완료를 주장하지 않습니다.\n- `12-case-studies/analytics-dashboard-case-study.md` 2026-08-05 역사적 적용 기록 (역사 전용·비출판): 당시 반도체 비교 원고의 미확인 목록은 과거 적용 범위 재현용이며 현재 주가 원고의 직접 근거나 `reviewEvidence`로 재사용하지 않습니다. 현행 원고에서 채택한 공백만 아래 현재 적용 기록과 PBSG-003·PBSG-012·PBSG-019·PBSG-026으로 추적합니다.\n- `12-case-studies/analytics-dashboard-case-study.md` 2026-08-10 현재 적용 기록 (`PBSG-026`, 실제 시장·권리 `PBSG-019`, 접근성 세부 `PBSG-003`, 복구 세부 `PBSG-012`): 현재 값은 저장소 내부 `EDU-FIXTURE`뿐입니다. Data contract·canonical schema·lineage·freshness·checksum·상태·검토 전환·빌드 manifest의 교육용 의미는 PBSG-026, 실제 시장·이용 조건·재배포 권리는 PBSG-019로 분리했습니다. Task 14에서 접근성, Task 16에서 제품 중립 복구 원칙을 확인했지만 실제 데이터·권리·배포·복구 완료는 주장하지 않습니다. Task 18·25에서 제품을 선택하면 해당 저장소·데이터베이스·산출물의 현재 공식 문서와 승인된 격리 복원 증거를 다시 확인합니다.\n"
        }
      ]
    },
    {
      "path": "research/public-beta-source-gap-register.md",
      "sha256": "eefe11c1c41b74d3e01fa11dd403426584c4bb18dddbe8c1ca3782e4d05025bd",
      "segments": [
        {
          "start_line": 52,
          "end_line": 54,
          "text": "| PBSG-018 | PB-055 `agent-output-glossary.md` | `plan mode`, `workspace-write`, `read-only`와 Claude Code·Codex의 권한·승인·실행 상태 용어 | important | 2026-08-20 직접 확인: OpenAI Codex의 current permissions·approvals·sandbox·environment modes·worktree 문서와 Anthropic Claude Code의 current permissions·permission modes·sandbox 문서. Codex의 정확한 current `plan mode` label과 Claude Code의 정확한 `workspace-write`·`read-only` mode label은 not-confirmed 경계로 분리함 | 제품 정책·플랜·버전·호스트·실행 환경이 변경되거나 실제 mode·sandbox·worktree를 적용할 때 재확인 | confirmed | Task 7; Task 8; Task 19 | 한 제품·플랜·샌드박스의 상태 이름을 다른 제품의 동일 보장이나 파일·네트워크·외부 쓰기 차단의 보편 증거로 해석하지 않습니다. `confirmed`는 제품별 직접 근거와 명칭 부정 경계를 함께 기록한 좁은 조사 계약이며 실제 계정 설정이나 실행 성공을 뜻하지 않습니다. |\n| PBSG-019 | PB-053 `analytics-dashboard-case-study.md` | 실제 시장 데이터를 후속 채택할 때 상품·시세·조정 방식·거래일·시간대·원천 버전·이용 조건·재배포 권리를 함께 검증하는 계약 | critical | 2026-08-13 KRX 공식 거래 가이드·호가 공개 페이지에서 특정 거래 시간·단위·호가 공개 항목은 확인했으나 실제 제공자·데이터를 채택하지 않았고 전체 필드 정의·corporate action 조정·시간대·원천 버전·이용 약관·라이선스·수집/가공/재배포 허용 묶음은 직접 확인하지 못함 | 실제 원천 채택이 별도 승인될 때 해당 제공자·거래소의 현재 공식 계약 전체를 확인하고 Task 25 권리 감사·공개 직전에 재확인 | not-confirmed | Task 25; 실제 원천 채택 별도 승인 범위 | `EDU-FIXTURE`를 실제 시장 사실·투자 판단 근거로 쓰거나 KRX의 특정 공개 항목·조회 가능성을 수집·가공·재배포 허용으로 해석하지 않습니다. |\n| PBSG-020 | PB-054 `first-full-stack-project.md` | 선택한 데이터베이스·런타임·배포 환경에서 정원 동시성, 고유성, 마이그레이션, 로그, 백업·복원의 구체 구현과 운영 보장 | important | source-map의 확인된 OpenAPI·OWASP·PostgreSQL 범위와 2026-08-13 Task 8의 선택적 제품 예시가 있으나, Task 18은 제품 조합·계정·데이터베이스·런타임·배포 환경을 채택하거나 구현·시험하지 않음 | 실제 제품 조합과 구현 범위가 별도 승인되고 대상 제품·버전의 공식 문서와 동시성·마이그레이션·로그·격리 복원 실행 증거가 생길 때 재확인 | not-confirmed | Task 18 이후 별도 승인 범위 | 현재 제품 중립 교육 범위 밖입니다. PostgreSQL 또는 Supabase·Vercel·Codex Sites 예시를 채택·계정·실제 구현·운영 보장으로 확대하지 않으며 Task 18의 문서·로컬 브라우저 검증으로 닫지 않습니다. |"
        },
        {
          "start_line": 59,
          "end_line": 61,
          "text": "| PBSG-025 | PB-036 `prd-sdd-tdd.md` | PRD의 구성, Software Design Description과 ADR의 경계, 요구사항·수용 기준·테스트 케이스의 구분, TDD Red·Green·Refactor와 과정 증거 | important | 2026-08-13 확인: ISO/IEC/IEEE 29148:2018 요구공학, inactive-reserved IEEE 1016-2009 SDD, Nygard ADR 원형, GitHub Spec Kit 현재 공식 문서, Martin Fowler TDD 방법론 설명 | 29148 개정본 발행·1016 상태·Spec Kit 흐름·인용 방법론 자료 변경 시와 조직별 PRD·설계·테스트 절차를 실제 채택할 때 재확인 | confirmed | Task 14 | PRD·설계 설명·ADR·Spec-Driven Development·테스트 케이스를 같은 문서 종류로 묶거나 현재 제품 흐름을 보편 SDD 표준으로, 테스트 보유·사후 추가를 TDD 수행이나 모든 위험의 충분한 검증으로 일반화하지 않습니다. |\n| PBSG-026 | PB-053 `analytics-dashboard-case-study.md` | 교육용 데이터 계약·canonical schema·lineage·freshness·checksum·관측값 상태·검토 전환·재현 가능한 빌드 manifest의 의미와 증거 | important | 2026-08-13 W3C PROV-O·DCAT 3, SLSA v1.2 Build Requirements, Reproducible Builds 정의가 provenance·derivation, catalog version·checksum, output digest·build provenance와 bit-for-bit 재현의 좁은 의미를 직접 지원함; 교육용 data contract·canonical schema·freshness·관측값 상태·검토 전환·manifest 전체는 핸드북 운영 계약을 포함하며 선택 도구·실행 증거도 없음 | 실제 데이터 계약·도구·빌드 방식을 별도 채택할 때 남은 개념의 공식 자료와 도구 버전 문서, 같은 입력·환경·명령의 실행 증거를 재확인 | not-confirmed | Task 18 이후 별도 승인 범위 | 확인된 일부 개념을 이 fixture의 업계 표준 스키마·값 정확성·최신성·권리·SLSA 준수·실제 재현 보장으로 확대하지 않으며 실제 시장 사실·권리는 PBSG-019와 분리합니다. |\n"
        },
        {
          "start_line": 63,
          "end_line": 65,
          "text": "\n2026-08-13의 Supabase·Vercel·Codex Sites fact pack은 제품별 좁은 기능 예시를 직접 확인했지만 이 레지스터의 더 넓은 표준·보안·조직 사례·실제 캡스톤 보장을 닫지는 않았습니다. Task 7 단독 판정 당시에는 PBSG-001~PBSG-026의 기존 ID·행·위험·상태·목표 작업을 바꾸지 않아 26개 모두 `not-confirmed`, 위험 집계 critical 2개·important 23개·normal 1개였습니다. 이후 상태는 아래 목표 Task의 전환 기록을 정본으로 봅니다.\n"
        },
        {
          "start_line": 87,
          "end_line": 89,
          "text": "\nTask 8 매핑 종료 당시에도 PBSG-001~PBSG-026의 ID·9열·위험·상태·목표 작업은 변하지 않아 26개 모두 `not-confirmed`, 위험 집계 critical 2개·important 23개·normal 1개였습니다. 이는 역사적 Task 8 판정이며, 이후 상태는 아래 목표 Task의 전환 기록을 정본으로 봅니다. PBSG-017의 조직 사례와 PBSG-018의 코딩 에이전트 권한 용어는 이 제품 페이지로 해소하지 않았습니다.\n"
        },
        {
          "start_line": 127,
          "end_line": 131,
          "text": "\n- PBSG-019는 KRX 공식 거래 가이드·호가 공개 페이지의 특정 거래 시간·단위·공개 필드만 직접 확인했습니다. 실제 원천을 채택하지 않았고 조정·시간대·원천 버전·이용 약관·라이선스·재배포 권리 전체 계약이 없으므로 `not-confirmed`를 유지합니다.\n- PBSG-026은 W3C PROV-O·DCAT 3, SLSA v1.2와 Reproducible Builds 정의가 provenance·version·checksum·output digest·build provenance·bit-for-bit 재현의 일부를 직접 지원합니다. 교육용 data contract·canonical schema·freshness·관측값 상태·검토 전환·manifest 전체는 이 핸드북의 운영 규칙을 포함하고 선택 도구·실행 증거가 없으므로 `not-confirmed`를 유지합니다.\n- PBSG-020은 PB-054가 제품 조합·계정·구현·배포를 채택하지 않은 제품 중립 교육 범위라서 `not-confirmed`를 유지합니다. 세 행의 미확인 상태를 문서·로컬 브라우저 검사로 닫지 않았고, PBCA-011도 PBSG-019·026이 남아 있어 유지합니다.\n- 현재 집계는 `confirmed` 20개, `not-confirmed` 6개로 변하지 않습니다. 미확인 위험 집계도 critical 1개·important 5개·normal 0개이며 PBSG-013·014·018·019·020·026만 `not-confirmed`입니다."
        },
        {
          "start_line": 135,
          "end_line": 137,
          "text": "- PBSG-013은 기존 source-map의 공식·1차 웹·데이터·Git·품질·운영·보안 적용 기록을 중앙 용어집 전체와 다시 대조하고, 2026-08-14 ISO/IEC/IEEE 12207:2026 Published Edition 2와 IEEE 1016-2009 Inactive-Reserved 상태를 직접 재확인해 `confirmed`로 전환했습니다. PB-057은 뜻이 자주 섞이는 핵심 용어를 한글·영문·약어·정의·관련 용어·흔한 오해·핵심 장으로 연결하고, 두 SDD·PRD·TDD, framework·library·runtime·platform, fallback·rollback·restore·recovery를 서로 다른 범주와 보장 범위로 구분합니다.\n- 현재 중간 집계는 `confirmed` 21개, `not-confirmed` 5개입니다. 미확인 위험 집계는 critical 1개·important 4개·normal 0개이며 PBSG-014·018·019·020·026만 `not-confirmed`입니다. PBSG-014·018은 각 참고편과 제품별 현재 매핑을 실제로 적용한 뒤 별도 판정하며, PBSG-019·020·026은 Task 19의 문서·로컬 검증으로 닫지 않습니다.\n"
        },
        {
          "start_line": 140,
          "end_line": 142,
          "text": "- PBSG-018은 OpenAI Codex의 current permissions·approvals·sandbox·environment modes·worktree 문서와 Anthropic Claude Code의 current permissions·permission modes·sandbox 문서를 2026-08-14에 직접 확인해 `confirmed`로 전환했습니다. PB-055는 제품 중립 용어를 행동·상태, 가능한 부작용, 확인 질문으로 설명하고 `plan mode`·`workspace-write`·`read-only`를 제품·버전·호스트별 정책 이름으로 제한합니다. sandbox·worktree·dry-run·snapshot·fallback·rollback·diff·patch·fixture·smoke test·artifact를 무해·복구 가능·검증 완료의 보장으로 확대하지 않습니다.\n- 현재 중간 집계는 `confirmed` 22개, `not-confirmed` 4개입니다. 미확인 위험 집계는 critical 1개·important 3개·normal 0개이며 PBSG-014·019·020·026만 `not-confirmed`입니다. PBCA-008은 날짜 있는 current-tool 제품별 권한 매핑이 아직 없으므로 유지하고, PBSG-019·020·026은 Task 19의 문서·로컬 검증으로 닫지 않습니다.\n"
        },
        {
          "start_line": 166,
          "end_line": 170,
          "text": "| PBCA-010 | PBSG-015, PBSG-016 | Task 15 |\n| PBCA-011 | PBSG-003, PBSG-012, PBSG-019, PBSG-022, PBSG-023, PBSG-024, PBSG-025, PBSG-026 | Task 13; Task 14; Task 16; Task 18; Task 25 |\n\nPBCA-001은 출처 공백이 아니라 폐기 사례 잔존 finding이므로 위 의미 감사와 Task 9에 연결합니다. PBSG-019는 실제 시장 데이터·권리, PBSG-026은 현재 교육용 데이터 개념의 출처 공백으로 서로 분리합니다. PBSG-020은 모임 캡스톤에서 실제 제품 세부를 채택할 경우 닫아야 하는 선제 공백입니다. Task 11은 탐색·내비게이션 정렬 작업이라 이번 SOURCE 주장 묶음의 목표 작업으로 배정하지 않습니다.\n"
        }
      ]
    },
    {
      "path": "docs/project/public-beta-content-audit.md",
      "sha256": "5b9bbec64eca339ee0b0a3c82be50c262120d6fe493c57e7963f79dc9215a608",
      "segments": [
        {
          "start_line": 60,
          "end_line": 62,
          "text": "| PB-033 | `src/content/docs/05-frontend/ui-state-and-ux.md` | core | UI 상태와 사용자 경험을 어떤 상태 기계로 설계하는가? | 정상·실패·결과 불명 전이를 권위 상태·복구 오라클과 함께 설계한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 14 | loading·empty·success·validation·conflict·error·unknown·retry, 서버 권위 상태, 낙관적 UI, 중복 행동, 오래된 응답과 복구 오라클을 두 사례·상태 전이표·직접 증거로 확장하고 PBSG-003을 닫았습니다. |\n| PB-034 | `src/content/docs/06-requirements-design/adr-and-tradeoffs.md` | core | 중요한 설계 결정을 왜 어떻게 기록하는가? | 맥락·대안·결정·결과·가정·증거와 재검토 조건을 쓴다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 14 | ADR 원형과 42010의 범위를 분리하고 맥락·결정·대안·결과·가정·증거·재검토 신호, 회의록·영원한 진리 금지선, 두 사례와 템플릿을 확장해 PB-031·033·PB-053의 접근성 계약과 함께 PBSG-003을 닫았습니다. |\n| PB-035 | `src/content/docs/06-requirements-design/architecture-and-frameworks.md` | core | 아키텍처·기술 스택·프레임워크를 어떻게 구분하는가? | 품질 속성과 제약으로 구조·도구 선택을 설명한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 10; Task 14 | Task 10의 결정 수준·일곱 구조 질문·품질과 제약·도구 범주·두 사례 가설·과설계·증거 계약과 PBV-13 `keep`을 보존했습니다. Task 14에서 ISO/IEC/IEEE 42010:2022의 architecture description 범위와 방법·제품 비보장 경계를 추가해 PBSG-007을 닫았으며 제품별 제어·지원·배포는 실제 후보 채택 때 다시 확인합니다. |"
        },
        {
          "start_line": 79,
          "end_line": 81,
          "text": "| PB-052 | `src/content/docs/11-ai-native/working-with-coding-agents.md` | core | 코딩 에이전트에 어떤 작업 계약과 검증을 주어야 하는가? | 목표·비목표·권한·수용 기준·증거·handoff를 운영한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 17; Task 20 resolved | 원고의 요청·권한·검증·리뷰·현재 제품 경계는 유지합니다. agent 루프의 주 흐름·피드백 marker는 Task 20 `2ccd9f4`와 실제 Chrome 6상태·Codex `PASS`로 교정됐습니다. |\n| PB-053 | `src/content/docs/12-case-studies/analytics-dashboard-case-study.md` | capstone | 교육용 데이터 대시보드를 원천·계약·화면·운영까지 어떻게 인수하는가? | fixture와 실제 원천, 데이터·화면·배포·복구 증거를 구분한다. | draft | conform | conform | conform | conform | conform | PBCA-011 | conform | conform | needs_edit | Task 18; Task 25 | Task 18에서 D-01~D-05 각각의 요구→행동→변환→인터페이스→권리→위험→오라클→Git→운영 증거→복구 추적과 `EDU-FIXTURE`·last-known-good 경계를 확정했습니다. analytics 그림의 390px 핵심·보조 레이블 판독성은 Task 20 `aa13701`과 실제 Chrome 12상태·Codex `PASS`로 교정됐지만, PBSG-019·026은 전체 주장 묶음이 직접 확인되지 않아 `not-confirmed`이고 PBCA-011을 유지합니다. |\n| PB-054 | `src/content/docs/12-case-studies/first-full-stack-project.md` | capstone | 모임 참가 웹앱을 요구에서 운영 인수까지 어떻게 추적하는가? | 화면·API·데이터·인증·테스트·Git·배포·운영을 연결한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 20 resolved | Task 18에서 W-01~W-05 각각의 요구→행동→상태→인터페이스→권한→위험→오라클→Git→운영 증거→복구 추적과 제품 미채택 경계를 확정했습니다. meeting 그림의 390px 핵심·보조 레이블 판독성은 Task 20 `75113a5`와 실제 Chrome 6상태·Codex `PASS`로 교정됐습니다. |"
        },
        {
          "start_line": 133,
          "end_line": 135,
          "text": "| PBCA-010 | Important (resolved) | SOURCE | PB-042 | Task 5 당시 테스트 전략 장은 넓은 SWEBOK 교육 범위에만 연결돼 static testing, verification·validation, 오라클·대역·fixture, flaky test와 coverage 등 세부의 직접 근거가 부족했습니다. | Task 15에서 PBSG-015·016을 ISO/IEC/IEEE 29119-1:2022와 공식 시리즈 안내, SWEBOK V4.0a, Fowler·Google의 1차 실무 자료로 확인하고 적용 범위·일반화 금지선을 source map과 원고에 연결했습니다. | Task 5; Task 15 resolved | 원고의 static·dynamic, manual·automated, 테스트 수준·목적·초점, 피라미드·coverage·도구별 재확인 경계를 PBSG-015·016과 대조하고 참조 검증 및 새 독립 검토에서 확인합니다. |\n| PBCA-011 | Important | SOURCE | PB-053 | Task 13에서 PB-025의 PBSG-022와 PB-027의 PBSG-023을, Task 14에서 PB-032의 PBSG-024와 PB-036의 PBSG-025를, Task 16에서 공통 복구 원칙의 PBSG-012를 직접 공식·1차 자료로 닫았습니다. Task 18은 PBSG-019의 실제 시장·권리 전체 계약과 PBSG-026의 교육용 계약 전체를 직접 확인하지 못해 두 공백을 유지했습니다. | 실제 원천·권리 또는 데이터 도구·빌드 방식을 별도 승인해 채택할 때 해당 공식 자료와 실행 증거로 PBSG-019·026을 다시 판정하고, 제품별 복원 범위도 현재 문서와 격리 복원 증거로 확인합니다. | Task 5; Task 13; Task 14; Task 16; Task 18; Task 25; 별도 채택 승인 범위 | PBSG-012 confirmed의 제품 중립 범위, PBSG-019·026의 `not-confirmed` 근거·재확인 조건과 PB-053의 금지선을 대조하고 `npm run validate:references`와 독립 검토를 통과합니다. |\n"
        }
      ]
    },
    {
      "path": "docs/project/public-beta-visual-audit.md",
      "sha256": "fa8fb01ec74718c80f81e5c016f212a7629c61f218591cc742551f144dfd98e4",
      "segments": [
        {
          "start_line": 20,
          "end_line": 26,
          "text": "| PBV-01 `learning-map` | `src/assets/diagrams/learning-map.svg` | `src/assets/diagrams/source/learning-map.mmd` | PB-001 `index.md` | 시스템 사고부터 AI 네이티브까지 어떤 순서로 배우는가? | 세로 권장 단계 흐름 | 7 | 6 | 같은 위계 1그룹 | 고유 title/desc·alt·앞 질문/뒤 강제 선행·숙련 비증명 범위 일치. | `480×960`, viewBox·width·height 일치 | 2026-08-28 실제Chrome6상태, mobile358×716px core20.88/detail17.9/note14.92px 판독·잘림0. 이전보다 약600px 길어진 절충. | 명시light/dark marker2와 선이 일치하고 번호·실선 범례를 유지합니다. | reflow | diagram-design | `e43d112`; Codex `PASS` C0/I0/M0; PBVA-003·004 자산 조건 충족; Claude pending |\n| PBV-02 `analytics-dashboard-architecture` | `src/assets/diagrams/analytics-dashboard-architecture.svg` | `src/assets/diagrams/source/analytics-dashboard-architecture.mmd` | PB-021 `software-is-a-system.md`; PB-053 `analytics-dashboard-case-study.md` | fixture/승인 원천이 품질·저장·전달·UI·운영 증거로 어떻게 이어지는가? | 세로 단계+피드백 | 7 | 7 | 품질·UI 2그룹 | 고유 title·desc·role·aria, 기존 두 alt와 앞뒤 원고의 책임·한계는 불변입니다. | `560×1108`, viewBox·width·height 일치 | 2026-08-28 실제 Chrome12상태: 모바일358×708px, 핵심 약14.7px·보조 약11.5px를 원본 크기로 판독했습니다. | explicit light/dark marker4와 주 흐름·점선 피드백·박스·글자가 전환됩니다. | reflow | diagram-design | `aa13701`; Codex `PASS` C0/I0/M0; PBVA-004 자산 조건 충족; Claude pending |\n| PBV-03 `api-database-auth-flow`; `api-database-auth-sequence` | `src/assets/diagrams/api-database-auth-flow.svg`; `src/assets/diagrams/api-database-auth-sequence.svg` | `src/assets/diagrams/source/api-database-auth-flow.mmd`; `src/assets/diagrams/source/api-database-auth-sequence.mmd` | PB-028 `api-database-auth.md` | 개요: 정상 참가 요청의 책임은 어떤 순서인가? 상세: 마지막 한 자리 동시 요청과 commit 뒤 응답 유실을 어떻게 안전하게 재확인하는가? | 세로 단계 흐름; 4-lifeline sequence+parallel frame | 개요 7; 상세 4 lifeline·12정보 단위(11 message+병렬 frame) | 개요 6; 상세 11 message | 개요 정상 책임 1그룹; 상세 동시성·복구 2그룹 | 두 SVG에 고유 title·desc가 있고 두 alt와 앞뒤 설명은 서로 다른 질문·비증명 범위를 설명합니다. | 개요 `560×772`; 상세 `688×960`, viewBox·width·height 일치 | 358×494px 개요 핵심 글자 약 14px, 358×500px 상세 핵심 약 12px·보조 약 10px로 확대 없이 읽을 수 있습니다. | 두 SVG의 선·글자와 explicit light/dark marker fill이 테마에 맞게 전환되며 병렬 시작은 frame·레이블, 유실은 점선·`×`로도 구분됩니다. | keep | diagram-design; Archify 미사용(상세는 4 lifeline sequence, Node.js v26) | Task 20 PBVA-001 resolved; Fix1 `1d19c15`; same-reviewer PASS C0/I0/M0 |\n| PBV-04 `context-harness-loop` | `src/assets/diagrams/context-harness-loop.svg` | `src/assets/diagrams/source/context-harness-loop.mmd` | PB-050 `context-spec-harness-loop.md` | 의도·스펙·컨텍스트·하네스·루프·증거·문맥 갱신은 어떤 책임 관계인가? | 혼합 관계 흐름 | 7 | 6 | 컨텍스트/하네스 수렴 | 고유title/desc·원고 질문/alt/뒤 책임과 한계 설명 일치·원고 불변. | `480×1160`, viewBox·width·height 일치 | Chrome6/6·358×865.2px·core20.88/detail17.9/note14.92·그림/상단/문맥/full배치 확인. | 명시marker2·실제양테마6연결·focused178/XML/full/Chrome 통과. | replace | diagram-design | `750a8e3`; Codex `PASS` C0/I0/M0; PBVA-002·003·004 자산 조건 충족; Claude pending |\n| PBV-05 `deploy-flow` | `src/assets/diagrams/deploy-flow.svg` | `src/assets/diagrams/source/deploy-flow.mmd` | PB-046 `build-deploy-domain-dns.md` | 소스·빌드·아티팩트·호스팅·이름 연결·사용자의 책임은 무엇인가? | 콘텐츠 흐름과 이름 조회 분리 | 6 | 5 | 아티팩트·사용자 2그룹 | 고유title/desc·alt·앞질문/뒤실제성공비증명 계약 일치. | `560×1008`, viewBox·width·height 일치 | 2026-08-28 실제Chrome6상태, mobile358×644px core17.9/detail15.34/note12.79px 판독. 세로약534px 증가 절충. | 콘텐츠 실선4·조회 점선1·marker4의 양테마 가시색이 일치합니다. | reflow | diagram-design | `9fe4bb7`; Codex `PASS` C0/I0/M0; PBVA-002·003·004 자산 조건 충족; Claude pending |\n| PBV-06 `full-stack-flow` | `src/assets/diagrams/full-stack-flow.svg` | `src/assets/diagrams/source/full-stack-flow.mmd` | PB-025 `client-server-full-stack.md`; PB-027 `http-request-response.md`; PB-032 `browser-dom-rendering.md` | 사용자 요청·응답이 프런트엔드·백엔드·저장소·외부 서비스 경계를 어떻게 오가는가? | 세로 왕복·백엔드 분기 | 5 | 8 | 요청·응답 2그룹 | 고유 title/desc와 세 원고의 앞 관찰문·뒤 비증명문·alt가 일치합니다. | `560×1172`, viewBox·width·height 일치 | 2026-08-28 실제Chrome18상태, mobile358×749px core17.9/detail12.79px 판독. 저장소와 선택적 외부 서비스가 백엔드 아래 분기합니다. | 명시light/dark marker2·실선 요청과 점선 반환·범례가 일치합니다. | replace | diagram-design | `6b4ac94`; Codex `PASS` C0/I0/M0; PBVA-002·003·004 자산 조건 충족; Claude pending |\n| PBV-07 `git-flow` | `src/assets/diagrams/git-flow.svg` | `src/assets/diagrams/source/git-flow.mmd` | PB-044 `git-and-github.md` | 어디까지 로컬 상태이며 어떤 명령이 원격으로 보내는가? | 세로 상태 전이 | 4 | 3 | 로컬3·원격1 경계 | 고유title/desc·기존alt·추가앞질문·기존7행동/비증명 계약 일치. | `480×864`, viewBox·width·height 일치 | 2026-08-28 Chrome6상태 mobile358×644px core20.88/sub·command17.9/note14.92px 판독. | 명시marker2·로컬실선묶음/원격점선·명령레이블 양테마 가시성 확인. | reflow | diagram-design | `1b26e10`; Codex `PASS` C0/I0/M0; PBVA-003·004 자산 조건 충족; Claude pending |"
        },
        {
          "start_line": 28,
          "end_line": 30,
          "text": "| PBV-09 `operations-recovery-loop` | `src/assets/diagrams/operations-recovery-loop.svg` | `src/assets/diagrams/source/operations-recovery-loop.mmd` | PB-048 `logs-monitoring-backup.md` | 신호 수집에서 안정화·복구·검증·학습까지 어떻게 순환하는가? | 세로 단계+피드백 | 7 | 7 | 신호·학습 2그룹 | 고유 title·desc·role·aria, alt·7단계와 Fix Round 1의 병행 가능/비증명 원고가 일치합니다. | `560×1000`, viewBox·width·height 일치 | 2026-08-28 실제 Chrome6상태: 모바일358×639px, 핵심 약17.9px·보조 약12.8px를 원본 크기로 판독했습니다. 글자를 키워 이전보다 약149px 길어졌습니다. | explicit light/dark marker4와 주흐름·점선 피드백·박스·글자가 전환됩니다. | reflow | diagram-design | `cf193f6`; 최초 I1 뒤 Fix Round 1 same-reviewer `PASS` C0/I0/M0; PBVA-003 자산 조건 충족; Claude pending |\n| PBV-10 `prd-sdd-tdd` | `src/assets/diagrams/prd-sdd-tdd.svg` | `src/assets/diagrams/source/prd-sdd-tdd.mmd` | PB-036 `prd-sdd-tdd.md` | 문제·요구·설계·스펙·작업·구현·검증이 어떻게 추적 가능한 연결을 이루는가? | 분기·수렴+피드백 | 7 | 8 | 요구·증거 중심 | 2026-08-28 질문/정확alt 보완·기존뒤추적설명 보존·고유title/desc 일치. | `480×1280`, viewBox·width·height 일치 | Chrome6/6·358×954.7px·core20.88/detail17.9/note14.92·원본그림/상단 및 문맥/full배치 확인. | 명시marker4·실선7/점선1·실제양테마 방향 확인·focused277/XML/full/Chrome 통과. | replace | diagram-design | `9f10b20`; Codex `PASS` C0/I0/M0; PBVA-002·004 자산 조건 충족; Claude pending |\n| PBV-11 `software-lifecycle` | `src/assets/diagrams/software-lifecycle.svg` | `src/assets/diagrams/source/software-lifecycle.mmd` | PB-039 `software-development-lifecycle.md` | 문제 이해부터 운영 학습까지 어떤 증거와 피드백이 이어지는가? | 세로6묶음+좌우A/B귀환 | 6 | 7 | 검증·운영 2그룹 | 2026-08-28 앞질문/alt/뒤한계 보완·8단계와6묶음 대응·나머지원고 byte불변·title/desc 일치. | `480×1080`, viewBox·width·height 일치 | 실제Chrome6/6·358×805.5px·core20.88/detail17.9/note14.92, 원본그림/상단 및 문맥·full배치 확인. | 명시marker4·실선/점선/A/B·모든방향 확인, 최종243/XML/full/Chrome 통과. | reflow | diagram-design | `2a04764`; Codex `PASS` C0/I0/M0; PBVA-003·004·005 조건 충족; Claude pending |"
        },
        {
          "start_line": 54,
          "end_line": 56,
          "text": "- Task 20 PBV-03 Fix Round 1 추가 증거: fresh build는 HTML 60개·학습 SVG 14개를 다시 생성했고, actual headed Google Chrome 151의 같은 6상태에서 HTTP 200·H1·draft 배지·정확한 theme·두 SVG load·alt·고유 title/desc·explicit marker·전역 overflow 0·내부 scroll 실패 0·console warning/error 0·page error 0·외부 요청 0을 재확인했습니다. 상세 SVG는 상태마다 분리된 lifeline 4개·병렬 frame 1개·메시지 11개를 포함한 정보 단위 12개·`트랜잭션 확정 경계` 1개로 MMD의 `par/and/end`와 의미가 일치했습니다. 새 PNG 6개와 같은 레코드의 overview/detail crop 12개는 각각 SHA-256·크기·바이트를 가지며 원본 18개를 열어 동시 시작 경계·레이블·화살촉·잘림·겹침·대비 결함 0을 확인했습니다. OCR 보조 검사는 6상태 모두 배지 문구와 상세 `capacity` 토큰을 읽었고, append-only manifest는 기존 실패와 초기 증거를 덮지 않은 123 records입니다. Chrome·preview PID와 4340 listener를 정리했습니다. Fix Round 1 `1d19c15`는 같은 독립 리뷰어가 이전 I1을 `RESOLVED`로 확인하고 `PASS C0/I0/M0`로 판정해 PBVA-001 해결 근거가 됐습니다.\n- Task 20 후속 11개 자산 증거: 실제 headed Google Chrome 152에서 1440×1000·1024×768·390×844와 light/dark를 조합해 PBV-02 12상태, PBV-06 18상태, 나머지 9개 자산 각 6상태, 합계 84개 최종 상태를 검증했습니다. 상태별 HTTP·H1·draft 배지·요청/실효 테마·대상 SVG·alt·고유 title/desc·marker·전역 overflow·제한된 내부 scroll·console warning/error·page error·외부 요청과 전체 화면·원본 다이어그램·상단·인접 문맥 이미지를 보존했습니다. 개별 검토 시점에는 515개 고정 입력이 모두 일치했습니다. closeout 후보 감사 문서 갱신 뒤에는 이 공유 경로의 기대 해시 차이만 11개이고 나머지 504개 입력은 일치하며, 과거 입력을 소급 재기준화하지 않습니다. 각 자산은 별도 Codex 검토에서 최종 `PASS` C0/I0/M0였습니다.\n- Task 20 전체 자동 게이트: 2026-08-30 현재 Node.js 22.16.0·npm 10.9.2에서 콘텐츠 지도 sync 변경 없음, 테스트 115/115, 공개 문서 59개, 참조 178개 Markdown/MDX+학습 SVG 14개, 계획 100점·공개 59개·중복 0개·누락 0개, 빌드 HTML 60개·최적화 SVG 14개·Pagefind HTML 60개, built-output 리터럴 Markdown 0개·고지 바이트 동일, tracked 안전 검사 210개·finding 0개, `git diff --check`를 통과했습니다. `site` 미설정 sitemap 안내 1건은 기존 비차단 경고이며 Task 20의 자산 결함이 아닙니다."
        },
        {
          "start_line": 61,
          "end_line": 64,
          "text": "| PBV-01 | `/` | learning-map | 3 viewport×2 theme 6상태·원본 화면 확인; marker·모바일 판독·overflow 결함 0; Codex PASS |\n| PBV-02A | `/01-mental-models/software-is-a-system/` | analytics-dashboard-architecture | 3 viewport×2 theme 6상태·원본 화면 확인; 모바일 판독·overflow 결함 0; Codex PASS |\n| PBV-02B | `/12-case-studies/analytics-dashboard-case-study/` | analytics-dashboard-architecture | 3 viewport×2 theme 6상태·원본 화면 확인; 모바일 판독·overflow 결함 0; Codex PASS |\n| PBV-03 | `/04-backend-data/api-database-auth/` | api-database-auth-flow; api-database-auth-sequence | 초기 `NEEDS CHANGES C0/I1/M0`; Fix Round 1 `1d19c15`은 개요 7노드·6화살표, 상세 4 lifeline·12정보 단위와 명시적 병렬 frame·트랜잭션 확정 경계를 fresh 6상태·원본 18개·cleanup으로 재검증했고 같은 리뷰어가 `RESOLVED — PASS C0/I0/M0` 판정 |"
        },
        {
          "start_line": 82,
          "end_line": 89,
          "text": "| PBVA-001 | Important (resolved) | PBV-03 | 첫 분할은 정상 책임과 상세 질문을 나눴지만 참가자 A·B를 한 lifeline에 두고 두 요청을 위아래로 배치해 순차 실행처럼 가르쳤으며 트랜잭션 확정 경계도 명시하지 않아 `NEEDS CHANGES C0/I1/M0`였습니다. Fix Round 1 `1d19c15`은 A·B를 분리하고 Mermaid `par/and/end`와 SVG 병렬 frame을 맞추며 기존 4번 단위를 `트랜잭션 확정 경계`로 바꿨고, 같은 리뷰어가 이전 I1 `RESOLVED`와 `PASS C0/I0/M0`를 확인했습니다. | 두 질문 비중복, 개요 7노드·12화살표 이하, 상세 12정보 단위 이하, A·B 분리·명시적 병렬 문법·트랜잭션 확정 경계와 제품 중립 복구 경계를 유지합니다. | Task 20 resolved | SVG·Mermaid·alt·앞뒤 설명의 의미, 1440×1000·1024×768·390×844 light/dark 6상태의 lifeline 4개·병렬 frame·확정 경계·핵심 레이블·title·desc·marker·overflow·console·원본 crop을 확인했고 동일 리뷰어가 Fix Round 1을 `RESOLVED — PASS C0/I0/M0`로 판정했습니다. |\n| PBVA-002 | Important (resolved) | PBV-04, PBV-05, PBV-06, PBV-10 | Task 6에서 관찰한 SVG·source·원고 topology 차이를 네 자산의 학습 질문에 맞춰 함께 교정했습니다. context의 책임 연결, deploy의 콘텐츠/이름 조회 분리, full-stack의 저장소/외부 서비스 독립 분기, PRD의 분기·수렴·대표 피드백이 현재 SVG·Mermaid·alt·앞뒤 설명에서 일치합니다. | 현재 의미 동기화를 유지하고 후속 변경 시 SVG·Mermaid·원고를 같은 단위에서 검증합니다. | Task 20 resolved | 네 자산별 focused semantic 검사와 실제 Chrome 36상태, 각각의 별도 Codex `PASS` C0/I0/M0, 전체 참조·빌드 검사와 합동 closeout 재검토를 통과했습니다. |\n| PBVA-003 | Important (resolved) | PBV-01, PBV-04, PBV-05, PBV-06, PBV-07, PBV-09, PBV-11, PBV-12 | 여덟 SVG의 marker fill을 주 흐름·반환·피드백 선 의미와 light/dark 테마에 맞는 명시적 변수·class로 연결했습니다. | 명시 marker와 참조 선의 동일 의미·가시색을 유지합니다. | Task 20 resolved | 여덟 자산의 실제 Chrome 60상태에서 화살촉 소실·대비 결함 0개를 원본 crop으로 확인했고, 자산별 Codex 최종 PASS와 합동 closeout 재검토가 C0/I0/M0였습니다. |\n| PBVA-004 | Important (resolved) | PBV-01, PBV-02, PBV-04, PBV-05, PBV-06, PBV-07, PBV-08, PBV-10, PBV-11 | 아홉 자산을 모바일 세로 재배치·관계 단순화·단계 묶음으로 교정해 실제 콘텐츠 폭 358px에서 핵심·보조 레이블과 관계를 기본 확대에서 읽을 수 있게 했습니다. | 현재 세로 레이아웃과 원고의 이동 세부·비증명 설명을 유지합니다. | Task 20 resolved | 아홉 자산의 실제 Chrome 72상태에서 핵심·보조 레이블 판독, 내부 겹침·잘림·전역 overflow 0개를 확인했고, 자산별 Codex 최종 PASS와 합동 closeout 재검토가 C0/I0/M0였습니다. |\n| PBVA-005 | Important (resolved) | PBV-11 | 그림 앞에 불확실성과 피드백을 읽는 질문을, 뒤에 선형 강제 절차가 아니며 운영·검증 증거가 앞 결정을 재검토하게 한다는 범위와 한계를 추가했습니다. | 질문·alt·6개 책임 묶음·대표 피드백 A/B·비증명 설명의 일치를 유지합니다. | Task 20 resolved | 원고·SVG·Mermaid 의미 검사, actual Chrome 6상태의 인접 문맥, 자산별 Codex PASS와 합동 closeout 재검토 C0/I0/M0를 확인했습니다. |\n\nFinding register에는 역사적으로 Critical 0개·Important 5개를 기록했습니다. PBVA-001은 PBV-03 Fix Round 1과 same-reviewer PASS로, PBVA-002~005는 후속 11개 자산 단위의 구현·실제 Chrome 84상태·개별 Codex 최종 PASS·현재 전체 자동 게이트·Task 20 합동 closeout Fix Round 1 재검토 `PASS` C0/I0/M0로 해결됐습니다. 현재 미해결 수는 Critical 0개·Important 0개입니다.\n"
        }
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "sha256": "67402debeeb45579307aafd8d00e02327ab3ee97053e3196fe66a441a4983f38",
      "segments": [
        {
          "start_line": 289,
          "end_line": 317,
          "text": "    },\n    {\n      \"id\": \"R12\",\n      \"slug\": \"meeting-capstone\",\n      \"method\": \"개별 심층\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/12-case-studies/first-full-stack-project.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r12-meeting-capstone-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r12-meeting-capstone-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r12-meeting-capstone-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r12-meeting-capstone-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r12-meeting-capstone-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r12-meeting-capstone-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"85ee15e06ea70e971cc5894eccceb2af70bd5190c72ebe26279042caf8090d27\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important5-minor3-resolved\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"6be7f002018c341ad0bfae9e08623a7953154f233e57517ec5ecf59157d721c0\",\"current_target_sha256\":\"c492b1be6c3f7f85287de61c32c3e0f959c98c48e7959a8ced35b9e3c01c4851\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r12-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r12-meeting-capstone-codex-rereview.md\",\"next_scope\":\"R13 pending; no M5/ready/public approval\"}\n    },\n    {\n      \"id\": \"R13\",\n      \"slug\": \"stock-capstone\",\n      \"method\": \"개별 심층\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/12-case-studies/analytics-dashboard-case-study.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r13-stock-capstone-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r13-stock-capstone-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r13-stock-capstone-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r13-stock-capstone-codex-rereview.md\"\n    },\n    {\n      \"id\": \"R14\",\n      \"slug\": \"mental-support\",\n      \"method\": \"소묶음\",\n      \"implementation_state\": \"작성·구현 완료\","
        }
      ]
    }
  ],
  "render_provenance": {
    "manifest_path": "output/playwright/task20-analytics-evidence/manifest.jsonl",
    "manifest_sha256": "78396738ec0f8a896fdfc9ecb4888c4f44cedfb8c9f92726007f909a6dbdffd6",
    "context_manifest_path": "output/playwright/r13-table-pilot-20261115/observations.json",
    "context_manifest_sha256": "6242244045e9c69a10ada2a475534ed36b9114c8c5a61be420472f25aa8c73ff",
    "additional_context_manifests": [
      {
        "path": "output/playwright/r13-table-remaining-20261115/observations.json",
        "sha256": "e511998402edabfb7b8101a11032eaa6a57034428cce126ae6df16045ebf8938"
      }
    ],
    "input_files": [
      {
        "path": "src/assets/diagrams/analytics-dashboard-architecture.svg",
        "sha256": "0627d5671fdd25b07fac3c54e65f7bee9ef24c384dd45e8741bd64469590e143",
        "current_sha256": "0627d5671fdd25b07fac3c54e65f7bee9ef24c384dd45e8741bd64469590e143",
        "unchanged": true,
        "scope": "original bytes unchanged"
      },
      {
        "path": "src/assets/diagrams/source/analytics-dashboard-architecture.mmd",
        "sha256": "c43970fb0dc454261cd04c7fd276f68c83ab550d37a265dcb931a44ca5932f3a",
        "current_sha256": "c43970fb0dc454261cd04c7fd276f68c83ab550d37a265dcb931a44ca5932f3a",
        "unchanged": true,
        "scope": "original bytes unchanged"
      },
      {
        "path": "src/content/docs/01-mental-models/software-is-a-system.md",
        "sha256": "d9569195713fd0db9201af1d18c141ab4a9836eca3980bc4905b2b46374aea2e",
        "current_sha256": "f086dc056630893c03b2a8c1a98304063bf1053eef26b25da7b587ae038bbc3d",
        "unchanged": false,
        "scope": "R01 body unchanged, frontmatter review transition only; historical badge not current proof"
      },
      {
        "path": "src/content/docs/12-case-studies/analytics-dashboard-case-study.md",
        "sha256": "3813b385f1f32ce278c4b320a53065ce834e2afd1d2271a51d6af6acc03498dd",
        "current_sha256": "3813b385f1f32ce278c4b320a53065ce834e2afd1d2271a51d6af6acc03498dd",
        "unchanged": true,
        "scope": "original bytes unchanged"
      }
    ],
    "states": [
      {
        "occurrence_id": "pb-021@1440x1000-light",
        "route": "/01-mental-models/software-is-a-system/",
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        },
        "theme": "light",
        "pixel_review": "pending",
        "independent_review": "blocked: subscription_unverified"
      },
      {
        "occurrence_id": "pb-021@1440x1000-dark",
        "route": "/01-mental-models/software-is-a-system/",
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        },
        "theme": "dark",
        "pixel_review": "pending",
        "independent_review": "blocked: subscription_unverified"
      },
      {
        "occurrence_id": "pb-021@1024x768-light",
        "route": "/01-mental-models/software-is-a-system/",
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        },
        "theme": "light",
        "pixel_review": "pending",
        "independent_review": "blocked: subscription_unverified"
      },
      {
        "occurrence_id": "pb-021@1024x768-dark",
        "route": "/01-mental-models/software-is-a-system/",
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        },
        "theme": "dark",
        "pixel_review": "pending",
        "independent_review": "blocked: subscription_unverified"
      },
      {
        "occurrence_id": "pb-021@390x844-light",
        "route": "/01-mental-models/software-is-a-system/",
        "viewport": {
          "id": "mobile",
          "width": 390,
          "height": 844
        },
        "theme": "light",
        "pixel_review": "pending",
        "independent_review": "blocked: subscription_unverified"
      },
      {
        "occurrence_id": "pb-021@390x844-dark",
        "route": "/01-mental-models/software-is-a-system/",
        "viewport": {
          "id": "mobile",
          "width": 390,
          "height": 844
        },
        "theme": "dark",
        "pixel_review": "pending",
        "independent_review": "blocked: subscription_unverified"
      },
      {
        "occurrence_id": "pb-053@1440x1000-light",
        "route": "/12-case-studies/analytics-dashboard-case-study/",
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        },
        "theme": "light",
        "pixel_review": "pending",
        "independent_review": "blocked: subscription_unverified"
      },
      {
        "occurrence_id": "pb-053@1440x1000-dark",
        "route": "/12-case-studies/analytics-dashboard-case-study/",
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        },
        "theme": "dark",
        "pixel_review": "pending",
        "independent_review": "blocked: subscription_unverified"
      },
      {
        "occurrence_id": "pb-053@1024x768-light",
        "route": "/12-case-studies/analytics-dashboard-case-study/",
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        },
        "theme": "light",
        "pixel_review": "pending",
        "independent_review": "blocked: subscription_unverified"
      },
      {
        "occurrence_id": "pb-053@1024x768-dark",
        "route": "/12-case-studies/analytics-dashboard-case-study/",
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        },
        "theme": "dark",
        "pixel_review": "pending",
        "independent_review": "blocked: subscription_unverified"
      },
      {
        "occurrence_id": "pb-053@390x844-light",
        "route": "/12-case-studies/analytics-dashboard-case-study/",
        "viewport": {
          "id": "mobile",
          "width": 390,
          "height": 844
        },
        "theme": "light",
        "pixel_review": "pending",
        "independent_review": "blocked: subscription_unverified"
      },
      {
        "occurrence_id": "pb-053@390x844-dark",
        "route": "/12-case-studies/analytics-dashboard-case-study/",
        "viewport": {
          "id": "mobile",
          "width": 390,
          "height": 844
        },
        "theme": "dark",
        "pixel_review": "pending",
        "independent_review": "blocked: subscription_unverified"
      }
    ]
  },
  "images": [
    {
      "id": "R13-PNG-01",
      "order": 1,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-021-desktop-light-task20-pbv02-20260827155719257-59c60b91893d68-top-viewport.png",
      "sha256": "21d5d5131d867e44d840b3b007883808546fdf1a293d19c371811f225ccf525c",
      "dimensions": {
        "width": 1440,
        "height": 1000
      },
      "kind": "viewport",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "occurrence_id": "pb-021@1440x1000-light",
      "capture_method": "lossless same-record full-PNG crop",
      "provenance": {
        "method": "lossless same-record full-PNG crop",
        "source_full_png": "output/playwright/task20-analytics-evidence/screenshots/pb-021-desktop-light-task20-pbv02-20260827155719257-59c60b91893d68.png",
        "source_full_sha256": "ec77e3cfbaf69db5583e4c8cd9f4e9a1944a812b3af78a4650ff4974630ee5e8",
        "source_rectangle_px": {
          "left": 0,
          "top": 0,
          "width": 1440,
          "height": 1000
        },
        "pixel_match": true,
        "role": "H1 and draft badge at original viewport"
      }
    },
    {
      "id": "R13-PNG-02",
      "order": 2,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-021-desktop-light-task20-pbv02-20260827155719257-59c60b91893d68-diagram.png",
      "sha256": "c260a7a70fffc8c41320c2bb524713b675eb7d4ef19d71a216a89bfb61ff50ed",
      "dimensions": {
        "width": 560,
        "height": 1109
      },
      "kind": "diagram",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "occurrence_id": "pb-021@1440x1000-light",
      "capture_method": "lossless same-record full-PNG crop",
      "provenance": {
        "method": "lossless same-record full-PNG crop",
        "source_full_png": "output/playwright/task20-analytics-evidence/screenshots/pb-021-desktop-light-task20-pbv02-20260827155719257-59c60b91893d68.png",
        "source_full_sha256": "ec77e3cfbaf69db5583e4c8cd9f4e9a1944a812b3af78a4650ff4974630ee5e8",
        "source_rectangle_px": {
          "left": 324,
          "top": 5884,
          "width": 560,
          "height": 1109
        },
        "pixel_match": true,
        "role": "diagram without locator-scroll sticky overlay"
      }
    },
    {
      "id": "R13-PNG-03",
      "order": 3,
      "path": "output/playwright/task20-analytics-evidence/screenshots/pb-021-desktop-light-task20-pbv02-20260827155719257-59c60b91893d68.png",
      "sha256": "ec77e3cfbaf69db5583e4c8cd9f4e9a1944a812b3af78a4650ff4974630ee5e8",
      "dimensions": {
        "width": 1440,
        "height": 13208
      },
      "kind": "full-page-overview",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "occurrence_id": "pb-021@1440x1000-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "full_page": true,
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        }
      }
    },
    {
      "id": "R13-PNG-04",
      "order": 4,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-021-desktop-dark-task20-pbv02-20260827155431806-ca3bf04e72a678-top-viewport.png",
      "sha256": "97e9601999d8922b0ebd6fb6e448aab208219c8da98ce304e4a8cdd636ad8e49",
      "dimensions": {
        "width": 1440,
        "height": 1000
      },
      "kind": "viewport",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "occurrence_id": "pb-021@1440x1000-dark",
      "capture_method": "lossless same-record full-PNG crop",
      "provenance": {
        "method": "lossless same-record full-PNG crop",
        "source_full_png": "output/playwright/task20-analytics-evidence/screenshots/pb-021-desktop-dark-task20-pbv02-20260827155431806-ca3bf04e72a678.png",
        "source_full_sha256": "6d584694c03f440f2a272698f8a4a4951e29f8c997687c5a37bcd7ff1a5810ac",
        "source_rectangle_px": {
          "left": 0,
          "top": 0,
          "width": 1440,
          "height": 1000
        },
        "pixel_match": true,
        "role": "H1 and draft badge at original viewport"
      }
    },
    {
      "id": "R13-PNG-05",
      "order": 5,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-021-desktop-dark-task20-pbv02-20260827155431806-ca3bf04e72a678-diagram.png",
      "sha256": "0a961b9e3e30b54836bf2032f136b408ea283512c0738399febc25cfb43dc9c8",
      "dimensions": {
        "width": 560,
        "height": 1109
      },
      "kind": "diagram",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "occurrence_id": "pb-021@1440x1000-dark",
      "capture_method": "lossless same-record full-PNG crop",
      "provenance": {
        "method": "lossless same-record full-PNG crop",
        "source_full_png": "output/playwright/task20-analytics-evidence/screenshots/pb-021-desktop-dark-task20-pbv02-20260827155431806-ca3bf04e72a678.png",
        "source_full_sha256": "6d584694c03f440f2a272698f8a4a4951e29f8c997687c5a37bcd7ff1a5810ac",
        "source_rectangle_px": {
          "left": 324,
          "top": 5884,
          "width": 560,
          "height": 1109
        },
        "pixel_match": true,
        "role": "diagram without locator-scroll sticky overlay"
      }
    },
    {
      "id": "R13-PNG-06",
      "order": 6,
      "path": "output/playwright/task20-analytics-evidence/screenshots/pb-021-desktop-dark-task20-pbv02-20260827155431806-ca3bf04e72a678.png",
      "sha256": "6d584694c03f440f2a272698f8a4a4951e29f8c997687c5a37bcd7ff1a5810ac",
      "dimensions": {
        "width": 1440,
        "height": 13208
      },
      "kind": "full-page-overview",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "occurrence_id": "pb-021@1440x1000-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "full_page": true,
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        }
      }
    },
    {
      "id": "R13-PNG-07",
      "order": 7,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-021-tablet-light-task20-pbv02-20260827155431806-ca3bf04e72a678-top-viewport.png",
      "sha256": "689d8205419c2d4e5df56f0c64c0245bf137d9146d052c945c6ab6100e91cd40",
      "dimensions": {
        "width": 1024,
        "height": 768
      },
      "kind": "viewport",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "light",
      "occurrence_id": "pb-021@1024x768-light",
      "capture_method": "lossless same-record full-PNG crop",
      "provenance": {
        "method": "lossless same-record full-PNG crop",
        "source_full_png": "output/playwright/task20-analytics-evidence/screenshots/pb-021-tablet-light-task20-pbv02-20260827155431806-ca3bf04e72a678.png",
        "source_full_sha256": "5c85398654c411b915300de61b2bff529fac298f5355c550e0f6b372e6a79c1d",
        "source_rectangle_px": {
          "left": 0,
          "top": 0,
          "width": 1024,
          "height": 768
        },
        "pixel_match": true,
        "role": "H1 and draft badge at original viewport"
      }
    },
    {
      "id": "R13-PNG-08",
      "order": 8,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-021-tablet-light-task20-pbv02-20260827155431806-ca3bf04e72a678-diagram.png",
      "sha256": "c260a7a70fffc8c41320c2bb524713b675eb7d4ef19d71a216a89bfb61ff50ed",
      "dimensions": {
        "width": 560,
        "height": 1109
      },
      "kind": "diagram",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "light",
      "occurrence_id": "pb-021@1024x768-light",
      "capture_method": "lossless same-record full-PNG crop",
      "provenance": {
        "method": "lossless same-record full-PNG crop",
        "source_full_png": "output/playwright/task20-analytics-evidence/screenshots/pb-021-tablet-light-task20-pbv02-20260827155431806-ca3bf04e72a678.png",
        "source_full_sha256": "5c85398654c411b915300de61b2bff529fac298f5355c550e0f6b372e6a79c1d",
        "source_rectangle_px": {
          "left": 316,
          "top": 6204,
          "width": 560,
          "height": 1109
        },
        "pixel_match": true,
        "role": "diagram without locator-scroll sticky overlay"
      }
    },
    {
      "id": "R13-PNG-09",
      "order": 9,
      "path": "output/playwright/task20-analytics-evidence/screenshots/pb-021-tablet-light-task20-pbv02-20260827155431806-ca3bf04e72a678.png",
      "sha256": "5c85398654c411b915300de61b2bff529fac298f5355c550e0f6b372e6a79c1d",
      "dimensions": {
        "width": 1024,
        "height": 14039
      },
      "kind": "full-page-overview",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "light",
      "occurrence_id": "pb-021@1024x768-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "full_page": true,
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        }
      }
    },
    {
      "id": "R13-PNG-10",
      "order": 10,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-021-tablet-dark-task20-pbv02-20260827155431806-ca3bf04e72a678-top-viewport.png",
      "sha256": "54028cfca7f2ecd53d740ecae0270846e7afc813edd558af59fb0b428009cf6e",
      "dimensions": {
        "width": 1024,
        "height": 768
      },
      "kind": "viewport",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "dark",
      "occurrence_id": "pb-021@1024x768-dark",
      "capture_method": "lossless same-record full-PNG crop",
      "provenance": {
        "method": "lossless same-record full-PNG crop",
        "source_full_png": "output/playwright/task20-analytics-evidence/screenshots/pb-021-tablet-dark-task20-pbv02-20260827155431806-ca3bf04e72a678.png",
        "source_full_sha256": "f90397861c1c0413b8688c98e9858fa915bce990cf98350dc498acf535de5aa8",
        "source_rectangle_px": {
          "left": 0,
          "top": 0,
          "width": 1024,
          "height": 768
        },
        "pixel_match": true,
        "role": "H1 and draft badge at original viewport"
      }
    },
    {
      "id": "R13-PNG-11",
      "order": 11,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-021-tablet-dark-task20-pbv02-20260827155431806-ca3bf04e72a678-diagram.png",
      "sha256": "74793fcc6c93962f05868fd5e8b4a8fc9abcfb753b6bdedce5b4070e1022f308",
      "dimensions": {
        "width": 560,
        "height": 1109
      },
      "kind": "diagram",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "dark",
      "occurrence_id": "pb-021@1024x768-dark",
      "capture_method": "lossless same-record full-PNG crop",
      "provenance": {
        "method": "lossless same-record full-PNG crop",
        "source_full_png": "output/playwright/task20-analytics-evidence/screenshots/pb-021-tablet-dark-task20-pbv02-20260827155431806-ca3bf04e72a678.png",
        "source_full_sha256": "f90397861c1c0413b8688c98e9858fa915bce990cf98350dc498acf535de5aa8",
        "source_rectangle_px": {
          "left": 316,
          "top": 6204,
          "width": 560,
          "height": 1109
        },
        "pixel_match": true,
        "role": "diagram without locator-scroll sticky overlay"
      }
    },
    {
      "id": "R13-PNG-12",
      "order": 12,
      "path": "output/playwright/task20-analytics-evidence/screenshots/pb-021-tablet-dark-task20-pbv02-20260827155431806-ca3bf04e72a678.png",
      "sha256": "f90397861c1c0413b8688c98e9858fa915bce990cf98350dc498acf535de5aa8",
      "dimensions": {
        "width": 1024,
        "height": 14039
      },
      "kind": "full-page-overview",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "dark",
      "occurrence_id": "pb-021@1024x768-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "full_page": true,
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        }
      }
    },
    {
      "id": "R13-PNG-13",
      "order": 13,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-021-390x844-light-bounded-1787846823654-top-viewport.png",
      "sha256": "52279a2bf2eda278f9dc99ad3d546d619f5dc203d526a28b02cfbcb9dbc50712",
      "dimensions": {
        "width": 390,
        "height": 844
      },
      "kind": "viewport",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "occurrence_id": "pb-021@390x844-light",
      "capture_method": "lossless same-record bounded-full crop",
      "provenance": {
        "method": "lossless same-record bounded-full crop",
        "source_full_png": "output/playwright/task20-analytics-evidence/final-crops/pb-021-390x844-light-bounded-1787846823654-full.png",
        "source_full_sha256": "275a644b042eed195b29f2c6d4bf82297078ea8d6dc7917d48962e9d5eb5d37f",
        "pixel_match": true
      }
    },
    {
      "id": "R13-PNG-14",
      "order": 14,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-021-390x844-light-bounded-1787846823654-diagram-calibrated.png",
      "sha256": "370a6abcf76e021fc6e143f3c374b12f584d5f226e0a34a24eec82a59a365dee",
      "dimensions": {
        "width": 358,
        "height": 709
      },
      "kind": "diagram",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "occurrence_id": "pb-021@390x844-light",
      "capture_method": "lossless bounded full-PNG crop with observed capture-coordinate correction",
      "provenance": {
        "method": "lossless bounded full-PNG crop with observed capture-coordinate correction",
        "source_full_png": "output/playwright/task20-analytics-evidence/final-crops/pb-021-390x844-light-bounded-1787846823654-full.png",
        "source_full_sha256": "275a644b042eed195b29f2c6d4bf82297078ea8d6dc7917d48962e9d5eb5d37f",
        "source_rectangle_px": {
          "left": 16,
          "top": 9135,
          "width": 358,
          "height": 709
        },
        "pixel_match": true
      }
    },
    {
      "id": "R13-PNG-15",
      "order": 15,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-021-390x844-light-bounded-1787846823654-full.png",
      "sha256": "275a644b042eed195b29f2c6d4bf82297078ea8d6dc7917d48962e9d5eb5d37f",
      "dimensions": {
        "width": 390,
        "height": 19598
      },
      "kind": "full-page-overview",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "occurrence_id": "pb-021@390x844-light",
      "capture_method": "lossless assembly of bounded actual Chrome page screenshots",
      "provenance": {
        "method": "lossless assembly of bounded actual Chrome page screenshots",
        "tiles": [
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-021-390x844-light-bounded-1787846823654-tile-0.png",
            "bytes": 1032065,
            "sha256": "73319f4c70c0e63cd91cc95a69a13a72f7d68c96b4aee4e13ee4646adfc152f7",
            "clip": {
              "x": 0,
              "y": 0,
              "width": 390,
              "height": 8000
            }
          },
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-021-390x844-light-bounded-1787846823654-tile-7936.png",
            "bytes": 959997,
            "sha256": "7c5cbed9cbb95294869c02fdae04c5fcd978241bb9d99a9d12002db31c4e68f5",
            "clip": {
              "x": 0,
              "y": 7936,
              "width": 390,
              "height": 8000
            }
          },
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-021-390x844-light-bounded-1787846823654-tile-15872.png",
            "bytes": 410226,
            "sha256": "08e4782a12334ff55a68c5e110d4de2db758e643391459bb42805a240a73c951",
            "clip": {
              "x": 0,
              "y": 15872,
              "width": 390,
              "height": 3726
            }
          }
        ],
        "seams": [
          {
            "document_y": 7936,
            "overlap": 64,
            "pixel_sha256": "866917cc3922c451513ee484dc5af04c4e33fa0dc3ad8ca21b3d942ad215f48c"
          },
          {
            "document_y": 15872,
            "overlap": 64,
            "pixel_sha256": "f82e7a9fd08a282923d144d4122c04cd046ab2e7fe27ebdedc50dd8977ce1faf"
          }
        ],
        "viewport": {
          "width": 390,
          "height": 844
        },
        "no_dom_style_change": true
      }
    },
    {
      "id": "R13-PNG-16",
      "order": 16,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-021-390x844-dark-bounded-1787846823654-top-viewport.png",
      "sha256": "2a7be8a9f14e7f11647ed726aaeb73a714325ece78c86b4386e899d8680c160e",
      "dimensions": {
        "width": 390,
        "height": 844
      },
      "kind": "viewport",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "occurrence_id": "pb-021@390x844-dark",
      "capture_method": "lossless same-record bounded-full crop",
      "provenance": {
        "method": "lossless same-record bounded-full crop",
        "source_full_png": "output/playwright/task20-analytics-evidence/final-crops/pb-021-390x844-dark-bounded-1787846823654-full.png",
        "source_full_sha256": "a4fb582195ca4779312176ed1cc2e4e4285fe9d16aced28e2e6cf33e19338c93",
        "pixel_match": true
      }
    },
    {
      "id": "R13-PNG-17",
      "order": 17,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-021-390x844-dark-bounded-1787846823654-diagram-calibrated.png",
      "sha256": "3cfa726e159a6391a4f544b1c4393ed8597560816e01203856d2f6e4237cbb8a",
      "dimensions": {
        "width": 358,
        "height": 709
      },
      "kind": "diagram",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "occurrence_id": "pb-021@390x844-dark",
      "capture_method": "lossless bounded full-PNG crop with observed capture-coordinate correction",
      "provenance": {
        "method": "lossless bounded full-PNG crop with observed capture-coordinate correction",
        "source_full_png": "output/playwright/task20-analytics-evidence/final-crops/pb-021-390x844-dark-bounded-1787846823654-full.png",
        "source_full_sha256": "a4fb582195ca4779312176ed1cc2e4e4285fe9d16aced28e2e6cf33e19338c93",
        "source_rectangle_px": {
          "left": 16,
          "top": 9135,
          "width": 358,
          "height": 709
        },
        "pixel_match": true
      }
    },
    {
      "id": "R13-PNG-18",
      "order": 18,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-021-390x844-dark-bounded-1787846823654-full.png",
      "sha256": "a4fb582195ca4779312176ed1cc2e4e4285fe9d16aced28e2e6cf33e19338c93",
      "dimensions": {
        "width": 390,
        "height": 19598
      },
      "kind": "full-page-overview",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "occurrence_id": "pb-021@390x844-dark",
      "capture_method": "lossless assembly of bounded actual Chrome page screenshots",
      "provenance": {
        "method": "lossless assembly of bounded actual Chrome page screenshots",
        "tiles": [
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-021-390x844-dark-bounded-1787846823654-tile-0.png",
            "bytes": 1010409,
            "sha256": "f8cfc25ed79b8c0620d827a823bbbfd5ed7d897ae5098cc24a84b067a6ea4f01",
            "clip": {
              "x": 0,
              "y": 0,
              "width": 390,
              "height": 8000
            }
          },
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-021-390x844-dark-bounded-1787846823654-tile-7936.png",
            "bytes": 941824,
            "sha256": "0d23f55c5bd9d75a6494da6c7dc8e086834c37c948e85606a72840874fba9719",
            "clip": {
              "x": 0,
              "y": 7936,
              "width": 390,
              "height": 8000
            }
          },
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-021-390x844-dark-bounded-1787846823654-tile-15872.png",
            "bytes": 403000,
            "sha256": "10d29167fa80fcfbdd1dff16f00e2a64ed5d6e317776e91f0bee870021c1051c",
            "clip": {
              "x": 0,
              "y": 15872,
              "width": 390,
              "height": 3726
            }
          }
        ],
        "seams": [
          {
            "document_y": 7936,
            "overlap": 64,
            "pixel_sha256": "61373777cd45504992ee80f1208d50d57df666d16fc5eec6810217a6d70b524e"
          },
          {
            "document_y": 15872,
            "overlap": 64,
            "pixel_sha256": "09ddbd988d1fa3976c22f82a573d962a7380e92891e6731bf4557a8fdb216b18"
          }
        ],
        "viewport": {
          "width": 390,
          "height": 844
        },
        "no_dom_style_change": true
      }
    },
    {
      "id": "R13-PNG-19",
      "order": 19,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-053-1440x1000-light-bounded-1787846823654-top-viewport.png",
      "sha256": "f1c75d2670948d18b862c94b65129a2a6403467adb61711aa81698721e2b403c",
      "dimensions": {
        "width": 1440,
        "height": 1000
      },
      "kind": "viewport",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "occurrence_id": "pb-053@1440x1000-light",
      "capture_method": "lossless same-record bounded-full crop",
      "provenance": {
        "method": "lossless same-record bounded-full crop",
        "source_full_png": "output/playwright/task20-analytics-evidence/final-crops/pb-053-1440x1000-light-bounded-1787846823654-full.png",
        "source_full_sha256": "87e73ac447399d2bb93b5eb05878eb605f33c8443142532c98dcca9cbfdc479c",
        "pixel_match": true
      }
    },
    {
      "id": "R13-PNG-20",
      "order": 20,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-053-1440x1000-light-bounded-1787846823654-diagram-calibrated.png",
      "sha256": "c1e751bb6e4850089522b8d3eabc57e2f4297fe1535ec52bb90c90fe8a20ee91",
      "dimensions": {
        "width": 560,
        "height": 1109
      },
      "kind": "diagram",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "occurrence_id": "pb-053@1440x1000-light",
      "capture_method": "lossless bounded full-PNG crop with observed capture-coordinate correction",
      "provenance": {
        "method": "lossless bounded full-PNG crop with observed capture-coordinate correction",
        "source_full_png": "output/playwright/task20-analytics-evidence/final-crops/pb-053-1440x1000-light-bounded-1787846823654-full.png",
        "source_full_sha256": "87e73ac447399d2bb93b5eb05878eb605f33c8443142532c98dcca9cbfdc479c",
        "source_rectangle_px": {
          "left": 324,
          "top": 8420,
          "width": 560,
          "height": 1109
        },
        "pixel_match": true
      }
    },
    {
      "id": "R13-PNG-21",
      "order": 21,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-053-1440x1000-light-bounded-1787846823654-full.png",
      "sha256": "87e73ac447399d2bb93b5eb05878eb605f33c8443142532c98dcca9cbfdc479c",
      "dimensions": {
        "width": 1440,
        "height": 27909
      },
      "kind": "full-page-overview",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "occurrence_id": "pb-053@1440x1000-light",
      "capture_method": "lossless assembly of bounded actual Chrome page screenshots",
      "provenance": {
        "method": "lossless assembly of bounded actual Chrome page screenshots",
        "tiles": [
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-1440x1000-light-bounded-1787846823654-tile-0.png",
            "bytes": 1178311,
            "sha256": "28cb9695cbb208ee43ed1833f850eea66800c14c295c80ea402e50d9b718e3e8",
            "clip": {
              "x": 0,
              "y": 0,
              "width": 1440,
              "height": 8000
            }
          },
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-1440x1000-light-bounded-1787846823654-tile-7936.png",
            "bytes": 1551516,
            "sha256": "04c27edf1b9e67315c2dff55b254fb1fcaa307ce3702e814f6fe8bd1138c08ea",
            "clip": {
              "x": 0,
              "y": 7936,
              "width": 1440,
              "height": 8000
            }
          },
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-1440x1000-light-bounded-1787846823654-tile-15872.png",
            "bytes": 1411455,
            "sha256": "ab22efec57eb6e76735388ece7363f15572137cfe847614495cea7cffafd140b",
            "clip": {
              "x": 0,
              "y": 15872,
              "width": 1440,
              "height": 8000
            }
          },
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-1440x1000-light-bounded-1787846823654-tile-23808.png",
            "bytes": 775635,
            "sha256": "c4f109f6cdcca9bee24b86a6fac583dbaf083fd6f2d2885f865053f8e7a29bc6",
            "clip": {
              "x": 0,
              "y": 23808,
              "width": 1440,
              "height": 4101
            }
          }
        ],
        "seams": [
          {
            "document_y": 7936,
            "overlap": 64,
            "pixel_sha256": "40ff8781482a024bc1f93910711fc1e022e2b73b255764fe04f71de056c8c6a9"
          },
          {
            "document_y": 15872,
            "overlap": 64,
            "pixel_sha256": "8f17448bb50261fb3d9d104322e43fa056d37d0893db504ac8d93edfe4b75013"
          },
          {
            "document_y": 23808,
            "overlap": 64,
            "pixel_sha256": "48ec140dc616a95a329112df77072fc950169542d766bfafaa4be868c62a5c3d"
          }
        ],
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "no_dom_style_change": true
      }
    },
    {
      "id": "R13-PNG-22",
      "order": 22,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-053-1440x1000-dark-bounded-1787846823654-top-viewport.png",
      "sha256": "07b79dfc9c139e7ef0a3bd81dd00e66670b570a0c44cba89672d98292c5a28ac",
      "dimensions": {
        "width": 1440,
        "height": 1000
      },
      "kind": "viewport",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "occurrence_id": "pb-053@1440x1000-dark",
      "capture_method": "lossless same-record bounded-full crop",
      "provenance": {
        "method": "lossless same-record bounded-full crop",
        "source_full_png": "output/playwright/task20-analytics-evidence/final-crops/pb-053-1440x1000-dark-bounded-1787846823654-full.png",
        "source_full_sha256": "620476804c9a5db427643ca88dbcb947bab5973b9bd86734599165f5e29d0ba6",
        "pixel_match": true
      }
    },
    {
      "id": "R13-PNG-23",
      "order": 23,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-053-1440x1000-dark-bounded-1787846823654-diagram-calibrated.png",
      "sha256": "0c24fc0b38785641aac398f007ca4c28440c6792139a66d81b06af06003aa3f6",
      "dimensions": {
        "width": 560,
        "height": 1109
      },
      "kind": "diagram",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "occurrence_id": "pb-053@1440x1000-dark",
      "capture_method": "lossless bounded full-PNG crop with observed capture-coordinate correction",
      "provenance": {
        "method": "lossless bounded full-PNG crop with observed capture-coordinate correction",
        "source_full_png": "output/playwright/task20-analytics-evidence/final-crops/pb-053-1440x1000-dark-bounded-1787846823654-full.png",
        "source_full_sha256": "620476804c9a5db427643ca88dbcb947bab5973b9bd86734599165f5e29d0ba6",
        "source_rectangle_px": {
          "left": 324,
          "top": 8420,
          "width": 560,
          "height": 1109
        },
        "pixel_match": true
      }
    },
    {
      "id": "R13-PNG-24",
      "order": 24,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-053-1440x1000-dark-bounded-1787846823654-full.png",
      "sha256": "620476804c9a5db427643ca88dbcb947bab5973b9bd86734599165f5e29d0ba6",
      "dimensions": {
        "width": 1440,
        "height": 27909
      },
      "kind": "full-page-overview",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "occurrence_id": "pb-053@1440x1000-dark",
      "capture_method": "lossless assembly of bounded actual Chrome page screenshots",
      "provenance": {
        "method": "lossless assembly of bounded actual Chrome page screenshots",
        "tiles": [
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-1440x1000-dark-bounded-1787846823654-tile-0.png",
            "bytes": 1190340,
            "sha256": "52dbeb972eb0f50d4828686b500c5957e845fae3a61e2dc62d79ce81c2c926ba",
            "clip": {
              "x": 0,
              "y": 0,
              "width": 1440,
              "height": 8000
            }
          },
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-1440x1000-dark-bounded-1787846823654-tile-7936.png",
            "bytes": 1560836,
            "sha256": "b26fb5a5e89cd0c63811d2e5e63cb40c14aac700690ab1c841c172a5e7dad3f1",
            "clip": {
              "x": 0,
              "y": 7936,
              "width": 1440,
              "height": 8000
            }
          },
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-1440x1000-dark-bounded-1787846823654-tile-15872.png",
            "bytes": 1421830,
            "sha256": "7f9a26b6aa4480fad9fd475106d9858eab1b832705f6dee4b1b39962cc2da87b",
            "clip": {
              "x": 0,
              "y": 15872,
              "width": 1440,
              "height": 8000
            }
          },
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-1440x1000-dark-bounded-1787846823654-tile-23808.png",
            "bytes": 781192,
            "sha256": "65c8eaba5dbe3617a9368daf61abf58cd5b9a70f67ebdd88318f8224f7fa4a87",
            "clip": {
              "x": 0,
              "y": 23808,
              "width": 1440,
              "height": 4101
            }
          }
        ],
        "seams": [
          {
            "document_y": 7936,
            "overlap": 64,
            "pixel_sha256": "a20c6331e27ecab222340c8a0aeb435139c9eb50c27b55a87928ce0fbc6e024b"
          },
          {
            "document_y": 15872,
            "overlap": 64,
            "pixel_sha256": "187e51cbbd559ec71cc3836f6b031302458b3a401552b9f491452de3709e8e10"
          },
          {
            "document_y": 23808,
            "overlap": 64,
            "pixel_sha256": "9f9308b29b0bf21ab515f966858ba7c048fac8ce7ce38727ea2cbefdb6cce3f0"
          }
        ],
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "no_dom_style_change": true
      }
    },
    {
      "id": "R13-PNG-25",
      "order": 25,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-053-1024x768-light-bounded-1787846823654-top-viewport.png",
      "sha256": "673fdcdcb0c5681c5b4d9356fffed69612cbb793976b4b5f0cecdf7bb20732ab",
      "dimensions": {
        "width": 1024,
        "height": 768
      },
      "kind": "viewport",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "light",
      "occurrence_id": "pb-053@1024x768-light",
      "capture_method": "lossless same-record bounded-full crop",
      "provenance": {
        "method": "lossless same-record bounded-full crop",
        "source_full_png": "output/playwright/task20-analytics-evidence/final-crops/pb-053-1024x768-light-bounded-1787846823654-full.png",
        "source_full_sha256": "632861c87b7d1bf05c13605f24d589ae95dc371924ce79b41e8de539fc9f1d67",
        "pixel_match": true
      }
    },
    {
      "id": "R13-PNG-26",
      "order": 26,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-053-1024x768-light-bounded-1787846823654-diagram-calibrated.png",
      "sha256": "c1e751bb6e4850089522b8d3eabc57e2f4297fe1535ec52bb90c90fe8a20ee91",
      "dimensions": {
        "width": 560,
        "height": 1109
      },
      "kind": "diagram",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "light",
      "occurrence_id": "pb-053@1024x768-light",
      "capture_method": "lossless bounded full-PNG crop with observed capture-coordinate correction",
      "provenance": {
        "method": "lossless bounded full-PNG crop with observed capture-coordinate correction",
        "source_full_png": "output/playwright/task20-analytics-evidence/final-crops/pb-053-1024x768-light-bounded-1787846823654-full.png",
        "source_full_sha256": "632861c87b7d1bf05c13605f24d589ae95dc371924ce79b41e8de539fc9f1d67",
        "source_rectangle_px": {
          "left": 316,
          "top": 8594,
          "width": 560,
          "height": 1109
        },
        "pixel_match": true
      }
    },
    {
      "id": "R13-PNG-27",
      "order": 27,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-053-1024x768-light-bounded-1787846823654-full.png",
      "sha256": "632861c87b7d1bf05c13605f24d589ae95dc371924ce79b41e8de539fc9f1d67",
      "dimensions": {
        "width": 1024,
        "height": 28969
      },
      "kind": "full-page-overview",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "light",
      "occurrence_id": "pb-053@1024x768-light",
      "capture_method": "lossless assembly of bounded actual Chrome page screenshots",
      "provenance": {
        "method": "lossless assembly of bounded actual Chrome page screenshots",
        "tiles": [
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-1024x768-light-bounded-1787846823654-tile-0.png",
            "bytes": 990749,
            "sha256": "5e8c7ad6a95408d7b0497628f4710006f6dd1775a0f84ec1e8b1f7674f424784",
            "clip": {
              "x": 0,
              "y": 0,
              "width": 1024,
              "height": 8000
            }
          },
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-1024x768-light-bounded-1787846823654-tile-7936.png",
            "bytes": 1448340,
            "sha256": "b6cd7dcb025e51269abb8f0a33b0b28212f01417617f7438905fee9411fb2ed9",
            "clip": {
              "x": 0,
              "y": 7936,
              "width": 1024,
              "height": 8000
            }
          },
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-1024x768-light-bounded-1787846823654-tile-15872.png",
            "bytes": 1327902,
            "sha256": "6cb4368859e730888d0510602adf17a989c006fa104087a7f70578e4922b6f04",
            "clip": {
              "x": 0,
              "y": 15872,
              "width": 1024,
              "height": 8000
            }
          },
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-1024x768-light-bounded-1787846823654-tile-23808.png",
            "bytes": 878601,
            "sha256": "0f660457383f65c0197f7be93ac8b940c4159f817ffb587798c91248763b6172",
            "clip": {
              "x": 0,
              "y": 23808,
              "width": 1024,
              "height": 5161
            }
          }
        ],
        "seams": [
          {
            "document_y": 7936,
            "overlap": 64,
            "pixel_sha256": "54f2fb177b13068c5a68accdf1d5ae238d2209ce08bfb5c994b2724c060568f7"
          },
          {
            "document_y": 15872,
            "overlap": 64,
            "pixel_sha256": "e5b2f2de51410410c9012d30da282911fcb4e71e640f80fbdbe8e6803820230c"
          },
          {
            "document_y": 23808,
            "overlap": 64,
            "pixel_sha256": "c814855bead61d2cdbaef6c0f759e5008f5100cc17938325b95303f66a62f3e7"
          }
        ],
        "viewport": {
          "width": 1024,
          "height": 768
        },
        "no_dom_style_change": true
      }
    },
    {
      "id": "R13-PNG-28",
      "order": 28,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-053-1024x768-dark-bounded-1787846823654-top-viewport.png",
      "sha256": "1d11cf63d8fcb59170595de1e15b2d66467772ec8bf7737800bfa5ae599aae52",
      "dimensions": {
        "width": 1024,
        "height": 768
      },
      "kind": "viewport",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "dark",
      "occurrence_id": "pb-053@1024x768-dark",
      "capture_method": "lossless same-record bounded-full crop",
      "provenance": {
        "method": "lossless same-record bounded-full crop",
        "source_full_png": "output/playwright/task20-analytics-evidence/final-crops/pb-053-1024x768-dark-bounded-1787846823654-full.png",
        "source_full_sha256": "833b03cc9783ae2b088f804a518f0409c8d87e9330b4f23eff3aaa2ccbe240a2",
        "pixel_match": true
      }
    },
    {
      "id": "R13-PNG-29",
      "order": 29,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-053-1024x768-dark-bounded-1787846823654-diagram-calibrated.png",
      "sha256": "8087f6c8463877fb4cc0f7f86142a14b99679e272b85398e75221c75ad85aa0b",
      "dimensions": {
        "width": 560,
        "height": 1109
      },
      "kind": "diagram",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "dark",
      "occurrence_id": "pb-053@1024x768-dark",
      "capture_method": "lossless bounded full-PNG crop with observed capture-coordinate correction",
      "provenance": {
        "method": "lossless bounded full-PNG crop with observed capture-coordinate correction",
        "source_full_png": "output/playwright/task20-analytics-evidence/final-crops/pb-053-1024x768-dark-bounded-1787846823654-full.png",
        "source_full_sha256": "833b03cc9783ae2b088f804a518f0409c8d87e9330b4f23eff3aaa2ccbe240a2",
        "source_rectangle_px": {
          "left": 316,
          "top": 8594,
          "width": 560,
          "height": 1109
        },
        "pixel_match": true
      }
    },
    {
      "id": "R13-PNG-30",
      "order": 30,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-053-1024x768-dark-bounded-1787846823654-full.png",
      "sha256": "833b03cc9783ae2b088f804a518f0409c8d87e9330b4f23eff3aaa2ccbe240a2",
      "dimensions": {
        "width": 1024,
        "height": 28969
      },
      "kind": "full-page-overview",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "dark",
      "occurrence_id": "pb-053@1024x768-dark",
      "capture_method": "lossless assembly of bounded actual Chrome page screenshots",
      "provenance": {
        "method": "lossless assembly of bounded actual Chrome page screenshots",
        "tiles": [
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-1024x768-dark-bounded-1787846823654-tile-0.png",
            "bytes": 1004463,
            "sha256": "acb07fa4ca972dbe4df343612c8d768782db3d154ce551eb612ca7a224683751",
            "clip": {
              "x": 0,
              "y": 0,
              "width": 1024,
              "height": 8000
            }
          },
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-1024x768-dark-bounded-1787846823654-tile-7936.png",
            "bytes": 1460865,
            "sha256": "b979be7f1d199dd3e73672ff4dfdd9b47fe2eb28edaf72eb857d1acad05cba3e",
            "clip": {
              "x": 0,
              "y": 7936,
              "width": 1024,
              "height": 8000
            }
          },
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-1024x768-dark-bounded-1787846823654-tile-15872.png",
            "bytes": 1341591,
            "sha256": "2c92480876fd1817436753043d90fdb206aafc0973cfc19ded37950aa4b3ca6e",
            "clip": {
              "x": 0,
              "y": 15872,
              "width": 1024,
              "height": 8000
            }
          },
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-1024x768-dark-bounded-1787846823654-tile-23808.png",
            "bytes": 888069,
            "sha256": "e4ccc2340a2439bb7b4889b56dfab230870b171c2669623c57d8b17e0ca71a8e",
            "clip": {
              "x": 0,
              "y": 23808,
              "width": 1024,
              "height": 5161
            }
          }
        ],
        "seams": [
          {
            "document_y": 7936,
            "overlap": 64,
            "pixel_sha256": "6db7254e5db380b58de39baa9eb57a457f400ddeff12f7fc7c36941eacfac7cc"
          },
          {
            "document_y": 15872,
            "overlap": 64,
            "pixel_sha256": "73c275c4c0ea074c967f65697dfca13771133b12533871b6c444aa9214a17508"
          },
          {
            "document_y": 23808,
            "overlap": 64,
            "pixel_sha256": "7bd9993ae8c585ace9d47a2d5932218c4754b963745707f29abfbaebb0ec0e67"
          }
        ],
        "viewport": {
          "width": 1024,
          "height": 768
        },
        "no_dom_style_change": true
      }
    },
    {
      "id": "R13-PNG-31",
      "order": 31,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-053-390x844-light-bounded-1787846823654-top-viewport.png",
      "sha256": "4b191ed1bf62a461659abeca7ffa6961b6cac6fe00ca5edc0a22436f5d4bcc47",
      "dimensions": {
        "width": 390,
        "height": 844
      },
      "kind": "viewport",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "occurrence_id": "pb-053@390x844-light",
      "capture_method": "lossless same-record bounded-full crop",
      "provenance": {
        "method": "lossless same-record bounded-full crop",
        "source_full_png": "output/playwright/task20-analytics-evidence/final-crops/pb-053-390x844-light-bounded-1787846823654-full.png",
        "source_full_sha256": "8f03d9811a21aeb969acf5f8ddb7e87b73dd23632d04ea2a2fa192cf59dfb0df",
        "pixel_match": true
      }
    },
    {
      "id": "R13-PNG-32",
      "order": 32,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-053-390x844-light-bounded-1787846823654-diagram-calibrated.png",
      "sha256": "1f98b1c596412436bf362f67e10fd47b197b65fd6a03f86308d0b3be14506bd5",
      "dimensions": {
        "width": 358,
        "height": 709
      },
      "kind": "diagram",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "occurrence_id": "pb-053@390x844-light",
      "capture_method": "lossless bounded full-PNG crop with observed capture-coordinate correction",
      "provenance": {
        "method": "lossless bounded full-PNG crop with observed capture-coordinate correction",
        "source_full_png": "output/playwright/task20-analytics-evidence/final-crops/pb-053-390x844-light-bounded-1787846823654-full.png",
        "source_full_sha256": "8f03d9811a21aeb969acf5f8ddb7e87b73dd23632d04ea2a2fa192cf59dfb0df",
        "source_rectangle_px": {
          "left": 16,
          "top": 10189,
          "width": 358,
          "height": 709
        },
        "pixel_match": true
      }
    },
    {
      "id": "R13-PNG-33",
      "order": 33,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-053-390x844-light-bounded-1787846823654-full.png",
      "sha256": "8f03d9811a21aeb969acf5f8ddb7e87b73dd23632d04ea2a2fa192cf59dfb0df",
      "dimensions": {
        "width": 390,
        "height": 39678
      },
      "kind": "full-page-overview",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "occurrence_id": "pb-053@390x844-light",
      "capture_method": "lossless assembly of bounded actual Chrome page screenshots",
      "provenance": {
        "method": "lossless assembly of bounded actual Chrome page screenshots",
        "tiles": [
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-390x844-light-bounded-1787846823654-tile-0.png",
            "bytes": 702657,
            "sha256": "bfae10ba4d03c0ca8ffec68ec8fc3235bbf8b75f9f24c16f803247116907e04a",
            "clip": {
              "x": 0,
              "y": 0,
              "width": 390,
              "height": 8000
            }
          },
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-390x844-light-bounded-1787846823654-tile-7936.png",
            "bytes": 780156,
            "sha256": "2be0372e9efb73c9f02e52771fb45f263952fbccddbd3c0aa4d44e54c313d07e",
            "clip": {
              "x": 0,
              "y": 7936,
              "width": 390,
              "height": 8000
            }
          },
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-390x844-light-bounded-1787846823654-tile-15872.png",
            "bytes": 976929,
            "sha256": "bf3aed8cb9f25c5322791836f32be259bf95fac368c420449ebd3c8ba221c061",
            "clip": {
              "x": 0,
              "y": 15872,
              "width": 390,
              "height": 8000
            }
          },
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-390x844-light-bounded-1787846823654-tile-23808.png",
            "bytes": 853347,
            "sha256": "5b2a516f03e639bb64aa1cb156636e9aa9191802641b83b839de67bbd19ca738",
            "clip": {
              "x": 0,
              "y": 23808,
              "width": 390,
              "height": 8000
            }
          },
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-390x844-light-bounded-1787846823654-tile-31744.png",
            "bytes": 885486,
            "sha256": "40088fd151e1db6964827cb23ec28cb535c8f5f32eba969cadabaea9c51bc7ca",
            "clip": {
              "x": 0,
              "y": 31744,
              "width": 390,
              "height": 7934
            }
          }
        ],
        "seams": [
          {
            "document_y": 7936,
            "overlap": 64,
            "pixel_sha256": "a7b7eec6c382e53e73328b460771387a48dad6e8bf4c23e1e27a7c6c835548c3"
          },
          {
            "document_y": 15872,
            "overlap": 64,
            "pixel_sha256": "719e9e823561b829a10bf074e8e2d727fe8a56f1650a3c1c8a2a98d67c62e86f"
          },
          {
            "document_y": 23808,
            "overlap": 64,
            "pixel_sha256": "d2a8a40c8240b3edfeb53bf771333e60be302101338a30a84cd6825e14f754e3"
          },
          {
            "document_y": 31744,
            "overlap": 64,
            "pixel_sha256": "57d406469b9a882fed091a17a371b13cb55b60b722bc38d3b9570fbdfb4238f6"
          }
        ],
        "viewport": {
          "width": 390,
          "height": 844
        },
        "no_dom_style_change": true
      }
    },
    {
      "id": "R13-PNG-34",
      "order": 34,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-053-390x844-dark-bounded-1787846823654-top-viewport.png",
      "sha256": "3a60ade8f06faef8f2abfda9bc84b8c39179092ab83d9ebf6aa393aad8b4c4c6",
      "dimensions": {
        "width": 390,
        "height": 844
      },
      "kind": "viewport",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "occurrence_id": "pb-053@390x844-dark",
      "capture_method": "lossless same-record bounded-full crop",
      "provenance": {
        "method": "lossless same-record bounded-full crop",
        "source_full_png": "output/playwright/task20-analytics-evidence/final-crops/pb-053-390x844-dark-bounded-1787846823654-full.png",
        "source_full_sha256": "4192c6f903dc141527a59de69dc2ef87d649b22a992897fbd6a4d1568b42a9a9",
        "pixel_match": true
      }
    },
    {
      "id": "R13-PNG-35",
      "order": 35,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-053-390x844-dark-bounded-1787846823654-diagram-calibrated.png",
      "sha256": "abd52134e6f2e6acf1853c590e75c70eb2751656666356d2be904ec0778c827f",
      "dimensions": {
        "width": 358,
        "height": 709
      },
      "kind": "diagram",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "occurrence_id": "pb-053@390x844-dark",
      "capture_method": "lossless bounded full-PNG crop with observed capture-coordinate correction",
      "provenance": {
        "method": "lossless bounded full-PNG crop with observed capture-coordinate correction",
        "source_full_png": "output/playwright/task20-analytics-evidence/final-crops/pb-053-390x844-dark-bounded-1787846823654-full.png",
        "source_full_sha256": "4192c6f903dc141527a59de69dc2ef87d649b22a992897fbd6a4d1568b42a9a9",
        "source_rectangle_px": {
          "left": 16,
          "top": 10189,
          "width": 358,
          "height": 709
        },
        "pixel_match": true
      }
    },
    {
      "id": "R13-PNG-36",
      "order": 36,
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-053-390x844-dark-bounded-1787846823654-full.png",
      "sha256": "4192c6f903dc141527a59de69dc2ef87d649b22a992897fbd6a4d1568b42a9a9",
      "dimensions": {
        "width": 390,
        "height": 39678
      },
      "kind": "full-page-overview",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "occurrence_id": "pb-053@390x844-dark",
      "capture_method": "lossless assembly of bounded actual Chrome page screenshots",
      "provenance": {
        "method": "lossless assembly of bounded actual Chrome page screenshots",
        "tiles": [
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-390x844-dark-bounded-1787846823654-tile-0.png",
            "bytes": 715603,
            "sha256": "bf7df4fb15ab1009c35edc0e88a91fa321dc3798e4411073a1cc2e709736a8cc",
            "clip": {
              "x": 0,
              "y": 0,
              "width": 390,
              "height": 8000
            }
          },
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-390x844-dark-bounded-1787846823654-tile-7936.png",
            "bytes": 790183,
            "sha256": "bd169719f9e962e169267037645f48c2bfcc177354b1a0c29218f368015c853f",
            "clip": {
              "x": 0,
              "y": 7936,
              "width": 390,
              "height": 8000
            }
          },
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-390x844-dark-bounded-1787846823654-tile-15872.png",
            "bytes": 990950,
            "sha256": "5620bf735f7b80f1b87b225157b905d3ff032f8a25e3c001d8de1995bf5a00b1",
            "clip": {
              "x": 0,
              "y": 15872,
              "width": 390,
              "height": 8000
            }
          },
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-390x844-dark-bounded-1787846823654-tile-23808.png",
            "bytes": 866507,
            "sha256": "6916d303bd88ccd8d97f0325110da9ac22ec048344497f58cbb5cda8bf5c6751",
            "clip": {
              "x": 0,
              "y": 23808,
              "width": 390,
              "height": 8000
            }
          },
          {
            "path": "output/playwright/task20-analytics-evidence/screenshots/pb-053-390x844-dark-bounded-1787846823654-tile-31744.png",
            "bytes": 898172,
            "sha256": "ebb4535cb95a6c9db7fa7b3b8b8b407f7a7efd70e230c7a7a6b92906dbb7881f",
            "clip": {
              "x": 0,
              "y": 31744,
              "width": 390,
              "height": 7934
            }
          }
        ],
        "seams": [
          {
            "document_y": 7936,
            "overlap": 64,
            "pixel_sha256": "24d07de1e6eacdcd968dca8ad6273ad9f6d35ddd8668738c44e3c4133beb2229"
          },
          {
            "document_y": 15872,
            "overlap": 64,
            "pixel_sha256": "cd79ab97b64c7d8a73dbeed5d42266ed0d20d5873217797079b7ed9e369a0641"
          },
          {
            "document_y": 23808,
            "overlap": 64,
            "pixel_sha256": "0bb5be1fe86fd04775fb752cb97d2e29b0ef677ba1f0349992bbdf15fa680c17"
          },
          {
            "document_y": 31744,
            "overlap": 64,
            "pixel_sha256": "d55c0b039428b232a2c9c2512f205009056055b95337058e3d98bf20dd976563"
          }
        ],
        "viewport": {
          "width": 390,
          "height": 844
        },
        "no_dom_style_change": true
      }
    },
    {
      "id": "R13-PNG-37",
      "order": 37,
      "path": "output/playwright/r13-table-pilot-20261115/table-1440-light-left.png",
      "sha256": "1d3b7e67c1219986f396aa367b9c63c51fb33e2573bc56b772bb62c7bad0cd8b",
      "dimensions": {
        "width": 1440,
        "height": 1000
      },
      "kind": "current-table-probe",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "occurrence_id": "r13-table-1440-light",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r13-table-pilot-20261115/observations.json"
      }
    },
    {
      "id": "R13-PNG-38",
      "order": 38,
      "path": "output/playwright/r13-table-pilot-20261115/table-1440-light-right.png",
      "sha256": "dcc82af651311222396678e1a79e875a59239d941919dd8efe0b0265b10e5cb1",
      "dimensions": {
        "width": 1440,
        "height": 1000
      },
      "kind": "current-table-probe",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "occurrence_id": "r13-table-1440-light",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r13-table-pilot-20261115/observations.json"
      }
    },
    {
      "id": "R13-PNG-39",
      "order": 39,
      "path": "output/playwright/r13-table-pilot-20261115/table-390-dark-left.png",
      "sha256": "8ac0fe6cb2743670578d2d06864c2174d63af6ad4c4ab6ebf94ae58f5301ff2a",
      "dimensions": {
        "width": 390,
        "height": 844
      },
      "kind": "current-table-probe",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "occurrence_id": "r13-table-390-dark",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r13-table-pilot-20261115/observations.json"
      }
    },
    {
      "id": "R13-PNG-40",
      "order": 40,
      "path": "output/playwright/r13-table-pilot-20261115/table-390-dark-right.png",
      "sha256": "ca5081ef09b3636a9a7af372ca30690012ab6eff553132ac4c5cd378877dc0fa",
      "dimensions": {
        "width": 390,
        "height": 844
      },
      "kind": "current-table-probe",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "occurrence_id": "r13-table-390-dark",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r13-table-pilot-20261115/observations.json"
      }
    },
    {
      "id": "R13-PNG-41",
      "order": 41,
      "path": "output/playwright/r13-table-remaining-20261115/table-1440-dark-left.png",
      "sha256": "7e1471b2c6e3ed2b30ef665599ef6480a5b255e299a939cb4186110bdd8d4e68",
      "dimensions": {
        "width": 1440,
        "height": 1000
      },
      "kind": "current-table-probe",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "occurrence_id": "r13-table-1440-dark",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r13-table-pilot-20261115/observations.json"
      }
    },
    {
      "id": "R13-PNG-42",
      "order": 42,
      "path": "output/playwright/r13-table-remaining-20261115/table-1440-dark-right.png",
      "sha256": "760671bbc5868676d0a9269914e47c8f8b75ed7765f6805d7004f10fe5e78cd4",
      "dimensions": {
        "width": 1440,
        "height": 1000
      },
      "kind": "current-table-probe",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "occurrence_id": "r13-table-1440-dark",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r13-table-pilot-20261115/observations.json"
      }
    },
    {
      "id": "R13-PNG-43",
      "order": 43,
      "path": "output/playwright/r13-table-remaining-20261115/table-1024-light-left.png",
      "sha256": "73ff183ddbf18cd292994a54d854e48e266d381546e5582ab6ab75c6054d4899",
      "dimensions": {
        "width": 1024,
        "height": 768
      },
      "kind": "current-table-probe",
      "viewport": {
        "width": 1024,
        "height": 768
      },
      "theme": "light",
      "occurrence_id": "r13-table-1024-light",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r13-table-pilot-20261115/observations.json"
      }
    },
    {
      "id": "R13-PNG-44",
      "order": 44,
      "path": "output/playwright/r13-table-remaining-20261115/table-1024-light-right.png",
      "sha256": "620734c1806c1872d77019f5b01f02ed9c1aeca60addde66acbf3d656fdab069",
      "dimensions": {
        "width": 1024,
        "height": 768
      },
      "kind": "current-table-probe",
      "viewport": {
        "width": 1024,
        "height": 768
      },
      "theme": "light",
      "occurrence_id": "r13-table-1024-light",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r13-table-pilot-20261115/observations.json"
      }
    },
    {
      "id": "R13-PNG-45",
      "order": 45,
      "path": "output/playwright/r13-table-remaining-20261115/table-1024-dark-left.png",
      "sha256": "1dd54a2bce62e0454addf21ba79f3cf79c40e52999487d4a09c01ea32d49cd94",
      "dimensions": {
        "width": 1024,
        "height": 768
      },
      "kind": "current-table-probe",
      "viewport": {
        "width": 1024,
        "height": 768
      },
      "theme": "dark",
      "occurrence_id": "r13-table-1024-dark",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r13-table-pilot-20261115/observations.json"
      }
    },
    {
      "id": "R13-PNG-46",
      "order": 46,
      "path": "output/playwright/r13-table-remaining-20261115/table-1024-dark-right.png",
      "sha256": "a02e83612c8af1bb01cf684a9c96141cd438426ca44833dab754242cd9433735",
      "dimensions": {
        "width": 1024,
        "height": 768
      },
      "kind": "current-table-probe",
      "viewport": {
        "width": 1024,
        "height": 768
      },
      "theme": "dark",
      "occurrence_id": "r13-table-1024-dark",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r13-table-pilot-20261115/observations.json"
      }
    },
    {
      "id": "R13-PNG-47",
      "order": 47,
      "path": "output/playwright/r13-table-remaining-20261115/table-390-light-left.png",
      "sha256": "9ad68f40c61a9eeef6166ea5b3a583c65fb68cf52807a43f9ee2fcb6266b52ed",
      "dimensions": {
        "width": 390,
        "height": 844
      },
      "kind": "current-table-probe",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "occurrence_id": "r13-table-390-light",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r13-table-pilot-20261115/observations.json"
      }
    },
    {
      "id": "R13-PNG-48",
      "order": 48,
      "path": "output/playwright/r13-table-remaining-20261115/table-390-light-right.png",
      "sha256": "5c639b9b87b1c51f7b7556d01d879b1603a6f52f2ccd5080767e7954d24de404",
      "dimensions": {
        "width": 390,
        "height": 844
      },
      "kind": "current-table-probe",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "occurrence_id": "r13-table-390-light",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r13-table-pilot-20261115/observations.json"
      }
    }
  ]
}
```
<!-- m5-r13-request:data:end -->
