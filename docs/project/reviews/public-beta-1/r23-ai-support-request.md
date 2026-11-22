# R23 AI 지원 3원고 — 고정 검토 요청

기준 commit 94a72692947c623e915db9c64222d19e13aa5b7f, 입력 고정 2026-11-16입니다. 대상3원고 전체 frontmatter·본문·표·프롬프트·alt·교차 링크, full_text_paths 전체와 context_excerpts 명시 범위를 실제 읽습니다. 인접 문맥은 비교용이며 다른 행 전체 재검토가 아닙니다.

Controller·작성자·이전 대화와 분리된 fresh gpt-6-astra/high 저장 세션을 사용합니다. 공식 ChatGPT 구독·실제 모델/effort·history0·readOnly/networkfalse·도구/MCP 비활성을 실행 확인하고 같은 저장 ID를 실제 복구해 후속 검토합니다. R02 승계 예외·API 키·추가 크레딧·전역 설정/인증 변경은 허용하지 않습니다.

공통 계약 C01~C12·한국어 여섯 절·각 원고9항목18점/치명 기준을 적용합니다. 주장/계획/변경/증거, 독립 검토/오탐 재판정/수용, context/spec/harness/loop의 책임과 성숙도, 최소권한/approval/sandbox/worktree/secret/external effect의 경계를 검토합니다. 실제 비밀·인증·외부 계정·파괴 명령은 읽거나 실행하지 않습니다.

2026-08-13/20의 source-map과PBSG-010/017/018은 역사로 유지하고 새 공식16페이지의 추적 가능한 명시 구간만 현재 근거로 사용합니다. Anthropic 정확한 게시일과 SpecKit/Codex current main 재확인은 not-confirmed입니다. 제품 모드 설명의 문서 간 차이와 명시 예외, 추출 손실을 숨기지 않습니다. 원전 전체·실제 제품 설정을 확인했다고 쓰지 않습니다.

context-harness-loop SVG/Mermaid와 단일 소비 문맥을 포함합니다. 3경로×1440/390×light/dark 12상태 원본PNG86개를 localImage/detail original로 전달하며 전부 시각 판독합니다. 표·프롬프트·그림의 내부 가로/세로 분할은 관측 JSON에 연결됩니다. 대표6상태43PNG 중11개 실제 판독 후 반대테마43개로 확장했습니다. 자연어 프롬프트의 가로 스크롤은 사이트의 reviewer 판정 대상이며 캡처 분할로 UX 결함이 해소됐다고 하지 않습니다. 키보드·1024/320/200%·보조기술·실제 계정/권한 시험은 미실행입니다. 원고/CSS/자산 출력 불변 R22 최종 build60을 재사용합니다.

준비는 원고 PASS/review/M5/ready/공개 승인이 아닙니다. 도구·쓰기·셸·웹·MCP·위임 없이 응답만 반환하세요. 준비 검사기/테스트/캡처 C/I/M는 원고와 별도 판정합니다. 개인home경로·비공개 전체 세션ID를 출력하지 마세요. 최초 정상 결과는 원고 수정 전 별도 커밋하고 전송 후 불변성 감사를 수행합니다.

<!-- m5-r23-request:data:start -->
```json
{
  "schema_version": 1,
  "review_id": "R23",
  "baseline_commit": "94a72692947c623e915db9c64222d19e13aa5b7f",
  "targets": [
    "src/content/docs/11-ai-native/agent-review-and-verification.md",
    "src/content/docs/11-ai-native/context-spec-harness-loop.md",
    "src/content/docs/11-ai-native/permissions-sandbox-worktrees.md"
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
    "src/content/docs/11-ai-native/agent-review-and-verification.md",
    "src/content/docs/11-ai-native/context-spec-harness-loop.md",
    "src/content/docs/11-ai-native/permissions-sandbox-worktrees.md",
    "research/public-beta-review-source-excerpts/r23-ai-support-2026-11-16.md",
    "research/meeting-webapp-case-brief.md",
    "src/content/docs/reference/development-glossary.md",
    "src/content/docs/reference/agent-output-glossary.md",
    "src/content/docs/reference/methodology-map.md",
    "src/content/docs/reference/current-tool-mapping.md",
    "src/content/docs/11-ai-native/working-with-coding-agents.md",
    "src/content/docs/08-quality/testing-strategy.md",
    "src/content/docs/12-case-studies/first-full-stack-project.md",
    "src/assets/diagrams/context-harness-loop.svg",
    "src/assets/diagrams/source/context-harness-loop.mmd",
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
      "sha256": "ecb44d53c9e9333697c0cdb64db362122d9215aedec373c1fb5f2693259150d3",
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
      "sha256": "8e3912c1bdf3e663f1d6d98663220d42bf067b3220fdc97791ac2b49fc65b5cb",
      "segments": [
        {
          "start_line": 209,
          "end_line": 238,
          "text": "## 2026-08-13 AI 네이티브 개발 직접 출처\n\nTask 17은 PBSG-010·PBSG-017의 완전한 주장 묶음에 필요한 공식 문서·기관 자료·1차 저장소만 읽기 전용으로 확인했습니다. 이 표의 현재 제품 동작은 각 문서가 표시한 좁은 범위이고, 제품별 `read-only`·`workspace-write`·`plan mode` 같은 상태 이름을 보편 보장으로 옮기지 않습니다. 직접 URL 묶음의 첫 열기는 빈 응답이어서 근거로 사용하지 않았고, GitHub Spec Kit releases 화면은 일부 항목과 로딩 오류가 함께 보여 최신 판본 판정에서 제외했습니다. HTTP 403은 없었습니다.\n\n| 대상 | 직접 출처 | 확인일과 문서 상태 | 직접 적용 범위 | 일반화 금지선 |\n|---|---|---|---|---|\n| 최소 권한 | https://csrc.nist.gov/glossary/term/least_privilege | 2026-08-13 직접 확인; NIST CSRC current glossary, 정의별 원전은 CNSSI 4009-2015·NIST SP 800-12 Rev. 1·SP 800-53 Rev. 5·SP 800-171r3 | 사용자와 대리 프로세스에 맡은 작업 수행에 필요한 최소 자원·인가만 부여하는 원칙 | 최소 권한을 권한 0이나 작업 정확성·부작용 부재의 보장으로 확대하지 않음 |\n| OS 샌드박스 | https://developer.apple.com/documentation/xcode/configuring-the-macos-app-sandbox | 2026-08-13 직접 확인; Apple current developer documentation, page version·absolute update date not shown | macOS App Sandbox가 kernel-level access control로 파일·네트워크 등 접근을 필요한 권한으로 제한하고 공격 자체보다 성공한 공격의 피해 범위를 줄이는 제품 사례 | macOS App Sandbox의 동작을 모든 OS·컨테이너·에이전트 샌드박스의 동일 구현이나 공격 방지 보장으로 확대하지 않음 |\n| Codex 권한·샌드박스 | https://openai.com/index/introducing-upgrades-to-codex/, https://github.com/openai/codex/blob/main/codex-rs/prompts/templates/permissions/sandbox_mode/workspace_write.md | 2026-08-13 직접 확인; OpenAI 2025-06-03 제품 발표와 openai/codex current main 1차 저장소 템플릿 | 기본 sandbox·network 제한, 승인 뒤 full access·web/MCP 확장 가능성, current `workspace-write`가 cwd·writable roots 쓰기와 별도 network flag를 갖는 제품 범위 | sandbox·network-disabled·`workspace-write`를 모든 Codex 실행·버전·호스트의 동일 보장이나 허용된 경로 안 부작용·prompt injection·정보 유출 부재로 확대하지 않음 |\n| Claude Code 권한·샌드박스 | https://code.claude.com/docs/en/permissions, https://code.claude.com/docs/en/sandboxing | 2026-08-13 직접 확인; current unversioned Claude Code documentation as displayed, sandbox support·fallback·escape hatch·security limitations 포함 | 도구 권한과 Bash 자식 프로세스의 OS-level 파일·network sandbox가 서로 보완되고, built-in file tools·computer use는 다른 경계를 가지며, sandbox unavailable fallback과 unsandboxed escape hatch를 설정할 수 있는 현재 제품 범위 | Claude Code의 `Read`·`Edit` deny, auto-allow, sandbox mode를 다른 도구의 같은 이름이나 모든 subprocess·built-in tool·desktop action의 보편 격리로 확대하지 않음 |\n| Git worktree | https://git-scm.com/docs/git-worktree.html | 2026-08-13 직접 확인; current Git documentation, 페이지가 표시한 latest documentation | 한 repository에 main·linked working tree를 두고 여러 branch를 동시에 checkout하며, linked worktree가 `HEAD`·`index` 같은 per-worktree 파일을 제외한 repository 요소를 공유하고 clean 여부·lock·prune·repair 상태를 확인하는 범위 | worktree를 별도 clone·보안 경계·프로세스·포트·database·cache·secret·remote·외부 서비스의 자동 격리로 확대하지 않음 |\n| Git dry-run 사례 | https://git-scm.com/docs/git-clean.html | 2026-08-13 직접 확인; Git 2.45.0에서 마지막 변경되고 2.55.0까지 변경 없음으로 표시된 current manual | `git clean --dry-run`이 파일을 제거하지 않고 수행할 대상을 보여 주는 해당 명령의 범위 | 이 한 옵션을 모든 도구의 dry-run이 파일·network·temp·hook·external side effect를 전부 막는다는 보장으로 확대하지 않음 |\n| 독립 평가·재판정 | https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents, https://github.com/anthropics/cwc-long-running-agents | 2026-08-13 직접 확인; Anthropic 2026-01-09 engineering article과 Code with Claude 2026 event demo 1차 저장소, 후자는 not maintained·not accepting contributions 명시 | code·model·human grader의 강점·약점 결합, model grader의 비결정성과 사람 교정 필요, 깨끗한 환경·여러 trial·transcript 재검토, fresh-context read-only evaluator를 쓰는 예시 | 별도 모델·fresh context·PASS를 통계적 독립성·정확성·보안성·인간 승인이나 모든 위험의 충분한 검증으로 확대하지 않음 |\n| GitHub Spec Kit | https://github.github.com/spec-kit/, https://github.com/github/spec-kit | 2026-08-13 직접 확인; official site last updated 2026-07-16, current main repository, site는 specification-driven development toolkit로 표시 | 현재 GitHub 프로젝트의 spec-driven workflow·문서·템플릿·통합 도구 사례와 스펙을 실행 가능한 산출물로 이어 가는 조직 사례 | 현재 toolkit 흐름·명령·확장 생태계를 Software Design Description 표준, 보편 SDD 정의, 유일한 개발 순서나 구현 성공 보장으로 확대하지 않음 |\n| OpenAI 하네스 사례 | https://openai.com/index/harness-engineering/ | 2026-08-13 직접 확인; OpenAI engineering article published 2026-02-11, internal beta 조직 사례 | 저장소 지식·경계·CI·관측·review feedback을 에이전트가 읽고 집행할 수 있게 만들고 작은 구성요소·self/local/cloud review 반복으로 작업하는 사례 | OpenAI 내부 한 팀의 규모·생산성·용어·구조를 모든 조직의 표준·성숙도 단계나 Codex의 보편 성능 보장으로 확대하지 않음 |\n| Anthropic 컨텍스트 사례 | https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents | 2026-08-13 직접 확인; Anthropic Applied AI team article published 2025-09-29 | context를 유한한 자원으로 보고 instructions·tools·MCP·external data·message history를 선택·유지하며 모호함과 과잉 지시를 피하는 조직 실무 | context engineering을 합의된 표준 정의·단일 최적 구성·정확성 보장으로 확대하지 않음 |\n| Anthropic 장시간 하네스 사례 | https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents, https://www.anthropic.com/engineering/harness-design-long-running-apps | 2026-08-13 직접 확인; Anthropic articles published 2025-11-26 and 2026-03-24 | 긴 작업을 작은 단위로 나누고 명시적 진척·상태·handoff artifact를 남기며 planner·generator·evaluator와 검증 가능한 기준을 조합한 실험 사례 | 특정 agent 수·세션 구조·장시간 자율 실행을 보편 최적 구조나 사람 승인·실사용 검증 대체물로 확대하지 않음 |\n\n## 2026-08-14 코딩 에이전트 권한·상태 용어 직접 출처\n\nTask 19는 PBSG-018의 제품 정책 용어 묶음만 OpenAI와 Anthropic의 현재 공식 문서에서 읽기 전용으로 다시 확인했습니다. 아래 상태 이름은 각 제품·호스트·버전의 현재 정책 표현이며, 용어집의 제품 중립 정의나 다른 에이전트의 같은 이름으로 옮겨 쓸 수 없습니다.\n\n| 대상 | 직접 출처 | 확인일과 문서 상태 | 직접 적용 범위 | 일반화 금지선 |\n|---|---|---|---|---|\n| Codex 권한·승인 | https://learn.chatgpt.com/docs/permissions, https://learn.chatgpt.com/docs/agent-approvals-security | 2026-08-14 직접 확인; OpenAI current unversioned Codex documentation as displayed | 호스트가 권한 정책을 집행하고 에이전트의 행동 제안과 승인 결정을 분리하는 현재 제품 범위 | 에이전트의 요청·설명이나 한 번의 승인을 실제 실행·성공·다른 명령과 경로의 승인으로 확대하지 않음 |\n| Codex sandbox·mode | https://learn.chatgpt.com/docs/sandboxing, https://learn.chatgpt.com/docs/environments/modes | 2026-08-14 직접 확인; OpenAI current unversioned Codex documentation as displayed | 현재 문서의 `read-only`·`workspace-write`·`danger-full-access` 실행 경계, workspace 쓰기와 network access·approval policy를 별도 설정으로 구분하는 제품 범위 | 상태 이름을 모든 Codex host·버전의 동일 파일·프로세스·network 보장이나 허용된 경로 안 부작용 부재로 확대하지 않음 |\n| Codex worktree | https://learn.chatgpt.com/docs/environments/git-worktrees | 2026-08-14 직접 확인; OpenAI current unversioned Codex documentation as displayed | 작업을 별도 Git worktree로 격리하는 현재 제품 워크플로와 저장소 상태 범위 | worktree를 database·port·cache·secret·remote·external service의 보안 격리나 자동 정리·병합 완료로 확대하지 않음 |\n| Claude Code 권한·mode | https://code.claude.com/docs/en/permissions, https://code.claude.com/docs/en/permission-modes | 2026-08-14 직접 확인; Anthropic current unversioned Claude Code documentation as displayed | 도구 권한 규칙과 현재 built-in permission modes, `plan` mode의 조사·계획 중심 제한을 설명하는 제품 범위 | mode 이름을 다른 제품의 동일 보장, 구현·검증 완료, 모든 파일·명령·외부 부작용 차단으로 확대하지 않음 |\n| Claude Code sandbox | https://code.claude.com/docs/en/sandboxing | 2026-08-14 직접 확인; Anthropic current unversioned Claude Code documentation as displayed, sandbox availability·fallback·escape hatch·security limitations 포함 | Bash 명령과 자식 프로세스의 OS-level filesystem·network 격리, tool permission과의 보완 관계, 지원 불가 시 fallback과 unsandboxed escape hatch가 있는 현재 제품 범위 | Bash sandbox를 built-in file tools·computer use·모든 subprocess의 보편 격리나 공격·정보 유출·허용 범위 안 파괴 방지로 확대하지 않음 |\n"
        }
      ]
    },
    {
      "path": "research/public-beta-source-gap-register.md",
      "sha256": "eefe11c1c41b74d3e01fa11dd403426584c4bb18dddbe8c1ca3782e4d05025bd",
      "segments": [
        {
          "start_line": 43,
          "end_line": 45,
          "text": "| PBSG-009 | PB-043 `branch-commit-pull-request.md`; PB-045 `undo-merge-conflict-release.md` | branch·commit·PR·merge·revert·reset·rebase·release의 공유 이력 경계와 안전한 복구 | important | 2026-08-13 확인: Git branch·pull·restore·revert·reset·rebase·tag 공식 reference와 GitHub PR·review·merge·release 공식 문서 | Git 또는 호스팅 제품의 관련 동작·문서 상태가 바뀌거나 실제 저장소의 ruleset·권한·merge·release 방법을 적용할 때 재확인 | confirmed | Task 16 | 로컬 미공유 이력과 원격 공유 이력을 같은 복구 절차로 다루거나 GitHub의 PR·Release 동작을 Git 자체·다른 호스팅 제품의 규칙으로 단정하지 않습니다. Git 이력 복구를 배포·데이터·외부 효과 복구로 확대하지 않습니다. |\n| PBSG-010 | PB-049 `agent-review-and-verification.md`; PB-051 `permissions-sandbox-worktrees.md` | 독립 AI 검토의 증거 한계와 권한·샌드박스·worktree·dry-run의 보호 범위 및 우회 가능성 | important | 2026-08-13 확인: NIST least privilege, Apple macOS App Sandbox, Git worktree·clean, OpenAI Codex 공식 제품 자료·current primary repository, Anthropic evals·Claude Code permissions·sandbox와 fresh-context evaluator 예시 저장소 | Git·운영체제·에이전트 제품 정책·실행 환경이 바뀌거나 실제 sandbox·권한·review harness를 적용할 때 재확인 | confirmed | Task 17 | 읽기 전용·샌드박스·dry-run 표시를 부작용 불가능 또는 검토 독립성·정확성 보장으로 일반화하지 않습니다. |\n| PBSG-011 | PB-048 `logs-monitoring-backup.md` | SLI·SLO·SLA의 서로 다른 측정·목표·약속 범위와 오류 예산을 운영 판단에 쓰는 조건 | important | 2026-08-13 확인: Google SRE Book의 Service Level Objectives와 Monitoring Distributed Systems 공개 조직 실무 자료 | Google 자료 상태가 바뀌거나 실제 SLI·SLO·SLA·오류 예산·알림 정책과 계약을 채택할 때 조직·공급자·계약의 현재 정의를 재확인 | confirmed | Task 16 | Google 조직의 SLI 산식·SLO 목표·오류 예산·알림 관행을 업계 표준으로, 내부 목표를 고객과의 법적 SLA로 일반화하지 않습니다. |"
        },
        {
          "start_line": 50,
          "end_line": 53,
          "text": "| PBSG-016 | PB-042 `testing-strategy.md` | 테스트 오라클·대역·fixture·flaky test·격리·피라미드·smoke test·coverage와 예상 실패·0개 실행의 도구별 판정 | important | 2026-08-13 확인: SWEBOK V4.0a, Fowler 사이트의 Practical Test Pyramid, Google Testing Blog의 flaky test·coverage 조직 사례 | 테스트 자료 상태 변경 시와 실제 테스트 러너·버전을 선택해 예상 실패·건너뜀·필터 0건·종료 코드 의미를 적용할 때 해당 공식 문서로 재확인 | confirmed | Task 15 | 특정 피라미드 비율·재시도 정책·coverage 수치나 한 도구의 성공 표시를 품질·사용자 성공·테스트 실행의 보편 증거로 일반화하지 않습니다. |\n| PBSG-017 | PB-050 `context-spec-harness-loop.md` | GitHub Spec Kit·OpenAI·Anthropic의 현재 조직 사례와 컨텍스트·하네스·루프 등 신생 실무 표현의 문서 상태·적용 범위 | important | 2026-08-13 확인: GitHub Spec Kit 공식 site·current main 저장소, OpenAI Harness Engineering 2026-02-11, Anthropic context 2025-09-29·long-running harness 2025-11-26·harness design 2026-03-24 조직 자료 | 분기, 공식 site·저장소·조직 자료 상태 변경 시와 구체 도구·조직 절차를 채택할 때 재확인 | confirmed | Task 7; Task 8; Task 17 | 회사별 사례나 신생 표현을 합의된 표준·보편 성숙도 모델·제품 기능 보장으로 일반화하지 않습니다. |\n| PBSG-018 | PB-055 `agent-output-glossary.md` | `plan mode`, `workspace-write`, `read-only`와 Claude Code·Codex의 권한·승인·실행 상태 용어 | important | 2026-08-20 직접 확인: OpenAI Codex의 current permissions·approvals·sandbox·environment modes·worktree 문서와 Anthropic Claude Code의 current permissions·permission modes·sandbox 문서. Codex의 정확한 current `plan mode` label과 Claude Code의 정확한 `workspace-write`·`read-only` mode label은 not-confirmed 경계로 분리함 | 제품 정책·플랜·버전·호스트·실행 환경이 변경되거나 실제 mode·sandbox·worktree를 적용할 때 재확인 | confirmed | Task 7; Task 8; Task 19 | 한 제품·플랜·샌드박스의 상태 이름을 다른 제품의 동일 보장이나 파일·네트워크·외부 쓰기 차단의 보편 증거로 해석하지 않습니다. `confirmed`는 제품별 직접 근거와 명칭 부정 경계를 함께 기록한 좁은 조사 계약이며 실제 계정 설정이나 실행 성공을 뜻하지 않습니다. |\n| PBSG-019 | PB-053 `analytics-dashboard-case-study.md` | 실제 시장 데이터를 후속 채택할 때 상품·시세·조정 방식·거래일·시간대·원천 버전·이용 조건·재배포 권리를 함께 검증하는 계약 | critical | 2026-08-13 KRX 공식 거래 가이드·호가 공개 페이지에서 특정 거래 시간·단위·호가 공개 항목은 확인했으나 실제 제공자·데이터를 채택하지 않았고 전체 필드 정의·corporate action 조정·시간대·원천 버전·이용 약관·라이선스·수집/가공/재배포 허용 묶음은 직접 확인하지 못함 | 실제 원천 채택이 별도 승인될 때 해당 제공자·거래소의 현재 공식 계약 전체를 확인하고 Task 25 권리 감사·공개 직전에 재확인 | not-confirmed | Task 25; 실제 원천 채택 별도 승인 범위 | `EDU-FIXTURE`를 실제 시장 사실·투자 판단 근거로 쓰거나 KRX의 특정 공개 항목·조회 가능성을 수집·가공·재배포 허용으로 해석하지 않습니다. |"
        },
        {
          "start_line": 70,
          "end_line": 73,
          "text": "| PBSG-012 | SUPA-OPS-01, VERCEL-ROLLBACK-01, SITES-ROLLBACK-01 | Supabase DB backup이 Storage 객체를 제외한다는 범위, Vercel routing rollback, Sites rollback의 미확인 경계 | 2026-08-13 Task 16에서 NIST·CISA 직접 지침으로 RPO·RTO·격리 백업·복원 시험·인시던트의 제품 중립 경계를 확인해 `confirmed`; 실제 데이터·산출물 복구 성공과 Sites rollback 기능은 확인하지 않음 | Task 18·25에서 실제 저장소·데이터베이스·산출물 저장소를 선택하면 해당 공식 문서와 승인된 격리 복원 증거를 별도 확보 |\n| PBSG-017 | 직접 해소 claim 없음 | Task 7 fact pack의 제품 기능 출판 계약과 `checked_at`·문서 상태 형식만 재사용 가능 | GitHub Spec Kit·OpenAI·Anthropic 조직 사례와 context·harness·loop 표현의 문서 상태·성숙도는 이번 세 제품 기능 조사 범위가 아니므로 `not-confirmed` 유지 | Task 8이 자동 해소하지 않으며 Task 17과 해당 공식 원문 조사 필요 |\n| PBSG-018 | 직접 해소 claim 없음 | Task 7 fact pack의 제품·환경별 상태 분리 원칙만 재사용 가능 | Codex·Claude Code의 `plan mode`·`workspace-write`·`read-only` 권한 보장은 Supabase·Vercel·Sites 기능 문서로 확인할 수 없으므로 `not-confirmed` 유지 | Task 8이 자동 해소하지 않으며 Task 19에서 OpenAI·Anthropic 공식 제품 자료를 별도 확인 |\n| PBSG-020 | SUPA-DB-01, SUPA-AUTH-01, SUPA-AUTHZ-01, SUPA-API-01, SUPA-SERVER-01, SUPA-MIG-01, SUPA-OPS-01, SUPA-LOG-01, SUPA-KEY-01, VERCEL-RUNTIME-01, VERCEL-DEPLOY-01, VERCEL-DATA-01, SITES-ARTIFACT-01, SITES-VERSION-01, SITES-HOST-01, SITES-RUNTIME-01 | 후보 제품의 저장·Auth·RLS·API·함수·마이그레이션·백업·로그·키·runtime·hosting·version 책임과 Sites 입력 archive의 미게시 경계 | Task 18에서도 실제 모임 앱의 제품 조합·계정·배포 환경을 선택하지 않았고 정원 동시성·고유성·인가 부정 테스트·마이그레이션·로그·백업·복원을 구현하거나 시험하지 않았으므로 현재 제품 중립 교육 범위 밖의 `not-confirmed` 유지 | 실제 구현 선택과 별도 승인이 생길 때 제품 공식 자료와 동시성·복원 실행 증거를 새 범위에서 고정 |"
        },
        {
          "start_line": 87,
          "end_line": 89,
          "text": "\nTask 8 매핑 종료 당시에도 PBSG-001~PBSG-026의 ID·9열·위험·상태·목표 작업은 변하지 않아 26개 모두 `not-confirmed`, 위험 집계 critical 2개·important 23개·normal 1개였습니다. 이는 역사적 Task 8 판정이며, 이후 상태는 아래 목표 Task의 전환 기록을 정본으로 봅니다. PBSG-017의 조직 사례와 PBSG-018의 코딩 에이전트 권한 용어는 이 제품 페이지로 해소하지 않았습니다.\n"
        },
        {
          "start_line": 120,
          "end_line": 124,
          "text": "\n- PBSG-017은 GitHub Spec Kit 공식 site·current main 저장소, OpenAI의 2026-02-11 Harness Engineering 조직 사례, Anthropic의 2025-09-29 context engineering과 2025-11-26·2026-03-24 long-running harness 조직 사례를 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. PB-050은 네 표현을 정보·목표·환경·반복 평가의 지속 책임으로 구분하고, 각 현재 사례의 발표일·문서 상태·직접 적용·일반화 금지선과 입력 품질·도구 경계·관찰·평가·회귀·실패 복구를 연결합니다. 신생 표현을 합의된 표준·보편 성숙도 모델·제품 기능 보장으로 사용하지 않습니다.\n- PBSG-010은 NIST least privilege, Apple의 kernel-level macOS App Sandbox, Git worktree·`clean --dry-run`, OpenAI Codex의 current sandbox·network·approval·workspace-write 경계, Anthropic의 permissions·Bash sandbox·fallback·escape hatch·eval 한계와 fresh-context evaluator 예시를 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. PB-049는 독립 리뷰를 역할·컨텍스트·권한으로 분리하되 model grader·fresh context·PASS를 정확성·인간 승인으로 확대하지 않고, PB-051은 read·write·network·exec·approval·sandbox·worktree·destructive·secrets·external effects와 허용·거절·복구 증거를 제품별 금지선과 연결합니다.\n- PBSG-018은 Task 19 소유이며 이번 제품 용어 조사·상태 전환 대상이 아닙니다. `read-only`·`workspace-write`·`plan mode` 같은 제품 상태 이름을 보편 보장으로 옮기지 않았습니다.\n- 현재 집계는 `confirmed` 20개, `not-confirmed` 6개입니다. 미확인 위험 집계는 critical 1개·important 5개·normal 0개이며, PBSG-013·014·018·019·020·026만 `not-confirmed`입니다."
        },
        {
          "start_line": 139,
          "end_line": 141,
          "text": "\n- PBSG-018은 OpenAI Codex의 current permissions·approvals·sandbox·environment modes·worktree 문서와 Anthropic Claude Code의 current permissions·permission modes·sandbox 문서를 2026-08-14에 직접 확인해 `confirmed`로 전환했습니다. PB-055는 제품 중립 용어를 행동·상태, 가능한 부작용, 확인 질문으로 설명하고 `plan mode`·`workspace-write`·`read-only`를 제품·버전·호스트별 정책 이름으로 제한합니다. sandbox·worktree·dry-run·snapshot·fallback·rollback·diff·patch·fixture·smoke test·artifact를 무해·복구 가능·검증 완료의 보장으로 확대하지 않습니다.\n- 현재 중간 집계는 `confirmed` 22개, `not-confirmed` 4개입니다. 미확인 위험 집계는 critical 1개·important 3개·normal 0개이며 PBSG-014·019·020·026만 `not-confirmed`입니다. PBCA-008은 날짜 있는 current-tool 제품별 권한 매핑이 아직 없으므로 유지하고, PBSG-019·020·026은 Task 19의 문서·로컬 검증으로 닫지 않습니다."
        },
        {
          "start_line": 152,
          "end_line": 154,
          "text": "- Vercel 공식 문서 8개 URL은 2026-08-20 직접 열기에서 모두 `HTTP 400 Unsupported content-type: text/markdown`으로 실패했습니다. 검색 결과 요약을 대체 근거로 쓰지 않고 2026-08-13을 last successful check 역사로만 보존했으며, Vercel current claim은 `fresh-check-failed`·`not-confirmed` 경계로 공개 reference에 표시했습니다.\n- PBSG-018은 제품별 current label의 직접 근거와 부정 경계가 `reference/current-tool-mapping.md`에 연결되어 `confirmed`를 유지합니다. Codex의 `workspace-write`·`read-only`, Claude Code의 `plan`, 각 sandbox 경계를 확인했지만 Codex의 정확한 current `plan mode` 제품 label과 Claude Code의 정확한 `workspace-write`·`read-only` 제품 mode label은 확인된 동의어로 만들지 않았습니다.\n- 현재 집계는 `confirmed` 22개, `not-confirmed` 4개로 변하지 않습니다. 미확인 위험 집계는 critical 1개·important 3개·normal 0개이며 PBSG-014·019·020·026만 `not-confirmed`입니다. PBCA-007·PBCA-011은 유지하고, 제품 기능·문서 확인을 실제 채택·account access·구현·deploy·public URL·restore 성공으로 확대하지 않습니다."
        },
        {
          "start_line": 160,
          "end_line": 166,
          "text": "| PBCA-003 | PBSG-001, PBSG-002, PBSG-003, PBSG-004, PBSG-005 | Task 12; Task 13; Task 14; Task 15; Task 16 |\n| PBCA-004 | PBSG-007, PBSG-008, PBSG-009, PBSG-010 | Task 10; Task 14; Task 15; Task 16; Task 17 |\n| PBCA-005 | PBSG-017 | Task 7; Task 8; Task 17 |\n| PBCA-006 | PBSG-011, PBSG-012 | Task 16; Task 25 |\n| PBCA-007 | PBSG-013, PBSG-014 | Task 19 |\n| PBCA-008 | PBSG-018 | Task 7; Task 8; Task 19 |\n| PBCA-010 | PBSG-015, PBSG-016 | Task 15 |"
        }
      ]
    },
    {
      "path": "docs/project/public-beta-content-audit.md",
      "sha256": "5b9bbec64eca339ee0b0a3c82be50c262120d6fe493c57e7963f79dc9215a608",
      "segments": [
        {
          "start_line": 75,
          "end_line": 79,
          "text": "| PB-048 | `src/content/docs/10-deployment-operations/logs-monitoring-backup.md` | core | 운영 신호·알림·백업·복구를 사용자 결과와 어떻게 연결하는가? | 로그·지표·트레이스·SLI/SLO·RPO/RTO를 구분해 운영 인수한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 5; Task 16; Task 20 resolved | monitoring·observability, SLI·SLO·SLA·오류 예산, 행동 가능한 alert, incident·runbook, backup·restore·recovery·RPO·RTO와 운영 증거 불변식을 Google SRE·NIST·CISA 직접 근거로 최종 정렬해 PBSG-011·012와 PBCA-006을 닫았습니다. 실제 관측·백업·복원·계정·배포 성공은 주장하지 않으며 운영 루프의 marker는 Task 20 `cf193f6` Fix Round 1과 실제 Chrome 6상태·same-reviewer `PASS`로 교정됐습니다. |\n| PB-049 | `src/content/docs/11-ai-native/agent-review-and-verification.md` | core | 에이전트 결과를 어떤 증거와 독립 관점으로 검토하는가? | 주장·diff·테스트·빌드·미검증 범위를 재판정한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 5; Task 17 | claims·plan·change·evidence, 독립 검토의 역할·컨텍스트·권한과 비보장선, 위험별 evidence, finding 재판정, W-03 오탐·기각·재검증과 사람 수용 경계를 PBSG-010 직접 근거에 연결해 PBCA-004를 닫았습니다. |\n| PB-050 | `src/content/docs/11-ai-native/context-spec-harness-loop.md` | core | 컨텍스트·스펙·하네스·루프는 어떻게 연결되는가? | 정보·목표·환경·반복 평가의 책임을 구분한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 7; Task 8; Task 17; Task 20 resolved | 네 표현을 정보·목표·환경·반복 평가의 지속 책임으로 구분하고 입력 품질·도구 경계·관찰·평가·회귀·실패 복구, W-03 적용과 날짜 있는 현재 조직 사례의 금지선을 연결해 PBSG-017·PBCA-005를 닫았습니다. 그림의 topology·marker·390px 판독성은 Task 20 `750a8e3`과 실제 Chrome 6상태·Codex `PASS`로 교정됐습니다. |\n| PB-051 | `src/content/docs/11-ai-native/permissions-sandbox-worktrees.md` | core | 권한·샌드박스·worktree의 보호 범위와 빈틈은 무엇인가? | 파일·네트워크·Git·프로세스 권한과 격리 한계를 판단한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 5; Task 17 | read·write·network·exec·approval·sandbox·worktree·destructive·secrets·external effects, 진단/변경 W-03 계약, 제품별 차이·허용/거절 검증·실패 복구와 PBSG-010 직접 근거를 연결해 PBCA-004를 닫았습니다. |\n| PB-052 | `src/content/docs/11-ai-native/working-with-coding-agents.md` | core | 코딩 에이전트에 어떤 작업 계약과 검증을 주어야 하는가? | 목표·비목표·권한·수용 기준·증거·handoff를 운영한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 17; Task 20 resolved | 원고의 요청·권한·검증·리뷰·현재 제품 경계는 유지합니다. agent 루프의 주 흐름·피드백 marker는 Task 20 `2ccd9f4`와 실제 Chrome 6상태·Codex `PASS`로 교정됐습니다. |"
        },
        {
          "start_line": 126,
          "end_line": 129,
          "text": "| PBCA-003 | Important (resolved) | ANALOGY, EVIDENCE, SOURCE | PB-047 | Tasks 12~15에서 PBSG-001~004를 닫았고, Task 16에서 마지막 seed인 PB-047을 full manuscript로 확장해 환경별 설정·비밀의 실패 복구·수용 증거와 PBSG-005의 공식·1차 근거를 적용했습니다. | PB-047의 config·환경 변수·secret, build-time·runtime, local·preview·production 구분과 client 노출·회전·유출 복구 계약을 유지합니다. | Task 5; Task 15; Task 16 resolved | PBSG-005가 `confirmed`이고 PB-047의 ANALOGY·EVIDENCE·SOURCE 셀이 `conform`인지 대조한 뒤 `npm run validate:content`, `npm run validate:references`와 독립 리뷰로 확인합니다. |\n| PBCA-004 | Important (resolved) | EVIDENCE, SOURCE | PB-049, PB-051 | Tasks 10·14·15·16에서 PBSG-007·008·009를 닫았고 Task 17에서 마지막 두 core 원고의 반복 사례·증거 계약·실패 복구와 PBSG-010의 공식·1차 근거를 보강했습니다. | PB-049의 독립 review·finding 재판정·W-03 오탐 검증과 PB-051의 권한 매트릭스·진단/변경 계약·허용/거절·복구 증거를 유지합니다. | Task 5; Task 10; Task 14; Task 15; Task 16; Task 17 resolved | 두 영향 문서의 EVIDENCE·SOURCE가 `conform`이고 PBSG-010이 `confirmed`이며 review PASS·sandbox·worktree·dry-run을 정확성·부작용 부재로 확대하지 않는지 참조 검증과 독립 검토에서 확인합니다. |\n| PBCA-005 | Important (resolved) | DURABLE, SOURCE | PB-050 | Task 5 당시 지속 개념 core 장 안에 현재 조직 사례와 신생 용어가 공식 URL만으로 섞여 있었고, Task 17에서 네 책임의 목적·성숙도·입력·도구·관찰·평가·회귀·실패 복구를 분리했습니다. | GitHub Spec Kit·OpenAI·Anthropic의 발표일·문서 상태·직접 적용·일반화 금지선과 재확인 조건을 PBSG-017·source map·PB-050에 연결했습니다. | Task 7; Task 8; Task 17 resolved | PBSG-017이 `confirmed`이고 PB-050 DURABLE·SOURCE가 `conform`이며 회사별 사례를 표준·보편 성숙도·제품 보장으로 확대하지 않는지 참조 검증과 독립 검토에서 확인합니다. |\n| PBCA-006 | Important (resolved) | SOURCE | PB-048 | Task 5에서 RPO·RTO, SLI·SLO·SLA와 백업·복구 보안 세부의 직접 근거 공백을 확인했고, Task 16에서 PBSG-011·PBSG-012를 공식·1차 자료로 닫았습니다. | Google SRE의 조직 실무, NIST SP 800-61 Rev. 3·SP 800-34 Rev. 1과 CISA 랜섬웨어 지침의 날짜·상태·범위·일반화 금지선을 PB-048과 source map에 연결했습니다. | Task 5; Task 16 resolved | PBSG-011·012가 `confirmed`이고 PB-048 SOURCE가 `conform`인지 대조한 뒤 `npm run validate:references`와 독립 내용 검토로 확인합니다. |"
        }
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "sha256": "e7c41d4d4bda37bb742094920a4eb654a4b060c3684237f5c2e6a38f73bbecf8",
      "segments": [
        {
          "start_line": 429,
          "end_line": 457,
          "text": "    },\n    {\n      \"id\": \"R22\",\n      \"slug\": \"deploy-config\",\n      \"method\": \"개별 안전\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/10-deployment-operations/environment-variables-config.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r22-deploy-config-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r22-deploy-config-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r22-deploy-config-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r22-deploy-config-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r22-deploy-config-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r22-deploy-config-input-manifest.json\",\"source_checked_at\":\"2026-11-16\",\"combined_sha256\":\"58c56c624506bca4d5ec56cf09f384ebdf607044bede66a5a81a4ddc1194d280\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important7-minor2-fatal1-resolved-after-fix1\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"9b03c982a1d22707565c0508c045c25c4abac12c7d8f7a4bd77ebaea37ec375f\",\"current_target_sha256\":\"68e09c8d1027060e47a2a3f88a158f43aa475a60451f9d0c412b62fe1a60cce8\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r22-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r22-deploy-config-codex-rereview.md\",\"next_scope\":\"R23 pending; no M5/ready/public approval\",\"target_hashes\":[{\"path\":\"src/content/docs/10-deployment-operations/environment-variables-config.md\",\"reviewed_sha256\":\"9b03c982a1d22707565c0508c045c25c4abac12c7d8f7a4bd77ebaea37ec375f\",\"current_sha256\":\"68e09c8d1027060e47a2a3f88a158f43aa475a60451f9d0c412b62fe1a60cce8\"}]}\n    },\n    {\n      \"id\": \"R23\",\n      \"slug\": \"ai-support\",\n      \"method\": \"소묶음\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/11-ai-native/agent-review-and-verification.md\", \"src/content/docs/11-ai-native/context-spec-harness-loop.md\", \"src/content/docs/11-ai-native/permissions-sandbox-worktrees.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r23-ai-support-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r23-ai-support-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r23-ai-support-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r23-ai-support-codex-rereview.md\"\n    },\n    {\n      \"id\": \"R24\",\n      \"slug\": \"navigation\",\n      \"method\": \"내비게이션 묶음\",\n      \"implementation_state\": \"작성·구현 완료\","
        }
      ]
    },
    {
      "path": "docs/project/public-beta-visual-audit.md",
      "sha256": "fa8fb01ec74718c80f81e5c016f212a7629c61f218591cc742551f144dfd98e4",
      "segments": [
        {
          "start_line": 22,
          "end_line": 24,
          "text": "| PBV-03 `api-database-auth-flow`; `api-database-auth-sequence` | `src/assets/diagrams/api-database-auth-flow.svg`; `src/assets/diagrams/api-database-auth-sequence.svg` | `src/assets/diagrams/source/api-database-auth-flow.mmd`; `src/assets/diagrams/source/api-database-auth-sequence.mmd` | PB-028 `api-database-auth.md` | 개요: 정상 참가 요청의 책임은 어떤 순서인가? 상세: 마지막 한 자리 동시 요청과 commit 뒤 응답 유실을 어떻게 안전하게 재확인하는가? | 세로 단계 흐름; 4-lifeline sequence+parallel frame | 개요 7; 상세 4 lifeline·12정보 단위(11 message+병렬 frame) | 개요 6; 상세 11 message | 개요 정상 책임 1그룹; 상세 동시성·복구 2그룹 | 두 SVG에 고유 title·desc가 있고 두 alt와 앞뒤 설명은 서로 다른 질문·비증명 범위를 설명합니다. | 개요 `560×772`; 상세 `688×960`, viewBox·width·height 일치 | 358×494px 개요 핵심 글자 약 14px, 358×500px 상세 핵심 약 12px·보조 약 10px로 확대 없이 읽을 수 있습니다. | 두 SVG의 선·글자와 explicit light/dark marker fill이 테마에 맞게 전환되며 병렬 시작은 frame·레이블, 유실은 점선·`×`로도 구분됩니다. | keep | diagram-design; Archify 미사용(상세는 4 lifeline sequence, Node.js v26) | Task 20 PBVA-001 resolved; Fix1 `1d19c15`; same-reviewer PASS C0/I0/M0 |\n| PBV-04 `context-harness-loop` | `src/assets/diagrams/context-harness-loop.svg` | `src/assets/diagrams/source/context-harness-loop.mmd` | PB-050 `context-spec-harness-loop.md` | 의도·스펙·컨텍스트·하네스·루프·증거·문맥 갱신은 어떤 책임 관계인가? | 혼합 관계 흐름 | 7 | 6 | 컨텍스트/하네스 수렴 | 고유title/desc·원고 질문/alt/뒤 책임과 한계 설명 일치·원고 불변. | `480×1160`, viewBox·width·height 일치 | Chrome6/6·358×865.2px·core20.88/detail17.9/note14.92·그림/상단/문맥/full배치 확인. | 명시marker2·실제양테마6연결·focused178/XML/full/Chrome 통과. | replace | diagram-design | `750a8e3`; Codex `PASS` C0/I0/M0; PBVA-002·003·004 자산 조건 충족; Claude pending |\n| PBV-05 `deploy-flow` | `src/assets/diagrams/deploy-flow.svg` | `src/assets/diagrams/source/deploy-flow.mmd` | PB-046 `build-deploy-domain-dns.md` | 소스·빌드·아티팩트·호스팅·이름 연결·사용자의 책임은 무엇인가? | 콘텐츠 흐름과 이름 조회 분리 | 6 | 5 | 아티팩트·사용자 2그룹 | 고유title/desc·alt·앞질문/뒤실제성공비증명 계약 일치. | `560×1008`, viewBox·width·height 일치 | 2026-08-28 실제Chrome6상태, mobile358×644px core17.9/detail15.34/note12.79px 판독. 세로약534px 증가 절충. | 콘텐츠 실선4·조회 점선1·marker4의 양테마 가시색이 일치합니다. | reflow | diagram-design | `9fe4bb7`; Codex `PASS` C0/I0/M0; PBVA-002·003·004 자산 조건 충족; Claude pending |"
        },
        {
          "start_line": 40,
          "end_line": 42,
          "text": "\n- PBV-04 context: SVG와 Mermaid 모두 `의도→스펙`, `컨텍스트·하네스→실행 루프→검증 증거→문맥 갱신`의 6개 책임 관계로 맞췄고, 이것이 고정 실행 순서·완전한 topology·실제 성공 증명이 아니라는 원고 계약을 보존했습니다.\n- PBV-05 deploy: 콘텐츠 흐름 `소스→빌드→아티팩트→호스팅→사용자`와 점선 이름 조회 `사용자→DNS→호스팅`을 분리해 SVG·Mermaid·원고를 맞췄습니다. 도메인·DNS 연결이 배포·HTTPS·실제 성공을 자동 증명하지 않는다는 한계를 유지합니다."
        },
        {
          "start_line": 64,
          "end_line": 66,
          "text": "| PBV-03 | `/04-backend-data/api-database-auth/` | api-database-auth-flow; api-database-auth-sequence | 초기 `NEEDS CHANGES C0/I1/M0`; Fix Round 1 `1d19c15`은 개요 7노드·6화살표, 상세 4 lifeline·12정보 단위와 명시적 병렬 frame·트랜잭션 확정 경계를 fresh 6상태·원본 18개·cleanup으로 재검증했고 같은 리뷰어가 `RESOLVED — PASS C0/I0/M0` 판정 |\n| PBV-04 | `/11-ai-native/context-spec-harness-loop/` | context-harness-loop | 6상태·원본 화면 확인; topology·marker·모바일 판독 결함 0; Codex PASS |\n| PBV-05 | `/10-deployment-operations/build-deploy-domain-dns/` | deploy-flow | 6상태·원본 화면 확인; source·marker·모바일 판독 결함 0; Codex PASS |"
        },
        {
          "start_line": 82,
          "end_line": 86,
          "text": "| PBVA-001 | Important (resolved) | PBV-03 | 첫 분할은 정상 책임과 상세 질문을 나눴지만 참가자 A·B를 한 lifeline에 두고 두 요청을 위아래로 배치해 순차 실행처럼 가르쳤으며 트랜잭션 확정 경계도 명시하지 않아 `NEEDS CHANGES C0/I1/M0`였습니다. Fix Round 1 `1d19c15`은 A·B를 분리하고 Mermaid `par/and/end`와 SVG 병렬 frame을 맞추며 기존 4번 단위를 `트랜잭션 확정 경계`로 바꿨고, 같은 리뷰어가 이전 I1 `RESOLVED`와 `PASS C0/I0/M0`를 확인했습니다. | 두 질문 비중복, 개요 7노드·12화살표 이하, 상세 12정보 단위 이하, A·B 분리·명시적 병렬 문법·트랜잭션 확정 경계와 제품 중립 복구 경계를 유지합니다. | Task 20 resolved | SVG·Mermaid·alt·앞뒤 설명의 의미, 1440×1000·1024×768·390×844 light/dark 6상태의 lifeline 4개·병렬 frame·확정 경계·핵심 레이블·title·desc·marker·overflow·console·원본 crop을 확인했고 동일 리뷰어가 Fix Round 1을 `RESOLVED — PASS C0/I0/M0`로 판정했습니다. |\n| PBVA-002 | Important (resolved) | PBV-04, PBV-05, PBV-06, PBV-10 | Task 6에서 관찰한 SVG·source·원고 topology 차이를 네 자산의 학습 질문에 맞춰 함께 교정했습니다. context의 책임 연결, deploy의 콘텐츠/이름 조회 분리, full-stack의 저장소/외부 서비스 독립 분기, PRD의 분기·수렴·대표 피드백이 현재 SVG·Mermaid·alt·앞뒤 설명에서 일치합니다. | 현재 의미 동기화를 유지하고 후속 변경 시 SVG·Mermaid·원고를 같은 단위에서 검증합니다. | Task 20 resolved | 네 자산별 focused semantic 검사와 실제 Chrome 36상태, 각각의 별도 Codex `PASS` C0/I0/M0, 전체 참조·빌드 검사와 합동 closeout 재검토를 통과했습니다. |\n| PBVA-003 | Important (resolved) | PBV-01, PBV-04, PBV-05, PBV-06, PBV-07, PBV-09, PBV-11, PBV-12 | 여덟 SVG의 marker fill을 주 흐름·반환·피드백 선 의미와 light/dark 테마에 맞는 명시적 변수·class로 연결했습니다. | 명시 marker와 참조 선의 동일 의미·가시색을 유지합니다. | Task 20 resolved | 여덟 자산의 실제 Chrome 60상태에서 화살촉 소실·대비 결함 0개를 원본 crop으로 확인했고, 자산별 Codex 최종 PASS와 합동 closeout 재검토가 C0/I0/M0였습니다. |\n| PBVA-004 | Important (resolved) | PBV-01, PBV-02, PBV-04, PBV-05, PBV-06, PBV-07, PBV-08, PBV-10, PBV-11 | 아홉 자산을 모바일 세로 재배치·관계 단순화·단계 묶음으로 교정해 실제 콘텐츠 폭 358px에서 핵심·보조 레이블과 관계를 기본 확대에서 읽을 수 있게 했습니다. | 현재 세로 레이아웃과 원고의 이동 세부·비증명 설명을 유지합니다. | Task 20 resolved | 아홉 자산의 실제 Chrome 72상태에서 핵심·보조 레이블 판독, 내부 겹침·잘림·전역 overflow 0개를 확인했고, 자산별 Codex 최종 PASS와 합동 closeout 재검토가 C0/I0/M0였습니다. |\n| PBVA-005 | Important (resolved) | PBV-11 | 그림 앞에 불확실성과 피드백을 읽는 질문을, 뒤에 선형 강제 절차가 아니며 운영·검증 증거가 앞 결정을 재검토하게 한다는 범위와 한계를 추가했습니다. | 질문·alt·6개 책임 묶음·대표 피드백 A/B·비증명 설명의 일치를 유지합니다. | Task 20 resolved | 원고·SVG·Mermaid 의미 검사, actual Chrome 6상태의 인접 문맥, 자산별 Codex PASS와 합동 closeout 재검토 C0/I0/M0를 확인했습니다. |"
        }
      ]
    }
  ],
  "render_provenance": {
    "manifest_path": "output/playwright/r23-inputs-20261116-pilot/observations.json",
    "manifest_sha256": "ff7023b31a3aded61d4786a8df82c9ca58ff78818b5b8f5b690d07401b4d51dd",
    "additional_context_manifests": [
      {
        "path": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "sha256": "982fc0ef465233cfa75c4cc8de36d9337166ceab3ffb46f6848d3f2a3a37bb36"
      }
    ],
    "input_files": [
      {
        "path": "src/content/docs/11-ai-native/agent-review-and-verification.md",
        "sha256": "0a6124bc334145f40fb8c5e9fea1b96d3c32be58ca76eccbd0af3e7ed7128f97"
      },
      {
        "path": "src/content/docs/11-ai-native/context-spec-harness-loop.md",
        "sha256": "0bf8de8c606e29643276fe496157b86fc5e0abc8f06c97f7fd2546e850713f7c"
      },
      {
        "path": "src/content/docs/11-ai-native/permissions-sandbox-worktrees.md",
        "sha256": "dbcbf109c26c3ffa33ea76306d6c1aa0098c40758b1cf890a071101971f0ad54"
      },
      {
        "path": "src/styles/custom.css",
        "sha256": "2236f2a8a9b30515cb641d48de7089d15590834766ada3f60de9f649ef36c137"
      }
    ],
    "states": [
      {
        "route": "11-ai-native/agent-review-and-verification",
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
        "route": "11-ai-native/agent-review-and-verification",
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
        "image_count": 7
      },
      {
        "route": "11-ai-native/context-spec-harness-loop",
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
            "src": "/_astro/context-harness-loop.CBWO8D74_dt69L.svg",
            "alt": "사용자 의도와 스펙, 컨텍스트와 하네스가 실행 루프에 입력되고 검증 증거와 문맥 갱신이 다음 판단을 개선하는 책임 지도. 그림은 모든 가능한 연결이나 고정된 선형 순서를 뜻하지 않습니다.",
            "loaded": true
          }
        ],
        "errors": [],
        "image_count": 6
      },
      {
        "route": "11-ai-native/context-spec-harness-loop",
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
            "src": "/_astro/context-harness-loop.CBWO8D74_dt69L.svg",
            "alt": "사용자 의도와 스펙, 컨텍스트와 하네스가 실행 루프에 입력되고 검증 증거와 문맥 갱신이 다음 판단을 개선하는 책임 지도. 그림은 모든 가능한 연결이나 고정된 선형 순서를 뜻하지 않습니다.",
            "loaded": true
          }
        ],
        "errors": [],
        "image_count": 8
      },
      {
        "route": "11-ai-native/permissions-sandbox-worktrees",
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
        "image_count": 6
      },
      {
        "route": "11-ai-native/permissions-sandbox-worktrees",
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
        "image_count": 12
      },
      {
        "route": "11-ai-native/agent-review-and-verification",
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
        "route": "11-ai-native/agent-review-and-verification",
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
        "image_count": 7
      },
      {
        "route": "11-ai-native/context-spec-harness-loop",
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
            "src": "/_astro/context-harness-loop.CBWO8D74_dt69L.svg",
            "alt": "사용자 의도와 스펙, 컨텍스트와 하네스가 실행 루프에 입력되고 검증 증거와 문맥 갱신이 다음 판단을 개선하는 책임 지도. 그림은 모든 가능한 연결이나 고정된 선형 순서를 뜻하지 않습니다.",
            "loaded": true
          }
        ],
        "errors": [],
        "image_count": 6
      },
      {
        "route": "11-ai-native/context-spec-harness-loop",
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
            "src": "/_astro/context-harness-loop.CBWO8D74_dt69L.svg",
            "alt": "사용자 의도와 스펙, 컨텍스트와 하네스가 실행 루프에 입력되고 검증 증거와 문맥 갱신이 다음 판단을 개선하는 책임 지도. 그림은 모든 가능한 연결이나 고정된 선형 순서를 뜻하지 않습니다.",
            "loaded": true
          }
        ],
        "errors": [],
        "image_count": 8
      },
      {
        "route": "11-ai-native/permissions-sandbox-worktrees",
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
        "image_count": 6
      },
      {
        "route": "11-ai-native/permissions-sandbox-worktrees",
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
        "image_count": 12
      }
    ]
  },
  "images": [
    {
      "id": "R23-PNG-01",
      "order": 1,
      "path": "output/playwright/r23-inputs-20261116-pilot/agent-review-and-verification-1440-light-top.png",
      "sha256": "45fc96b86c7033d976d743ba52d6e7027dcb4268e4ad15803dc2e9cc9636555c",
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
      "route": "11-ai-native/agent-review-and-verification",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R23-PNG-02",
      "order": 2,
      "path": "output/playwright/r23-inputs-20261116-pilot/agent-review-and-verification-1440-light-item0-x0-y0.png",
      "sha256": "117100bb9eb9de0a68578528eafa02fde264fdb750642c1a15dbbd54e33af0a9",
      "dimensions": {
        "width": 788,
        "height": 216
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "11-ai-native/agent-review-and-verification",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/agent-review-and-verification-1440-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 928,
          "documentRange": [
            1038.328125,
            1254.96875
          ],
          "targetRange": [
            1038.328125,
            1254.96875
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
      "id": "R23-PNG-03",
      "order": 3,
      "path": "output/playwright/r23-inputs-20261116-pilot/agent-review-and-verification-1440-light-item1-x0-y0.png",
      "sha256": "7ea956aa648bd20128c979ad2b21a8b89ba4185c79eb57027dd87dd7c0d1a3f4",
      "dimensions": {
        "width": 788,
        "height": 346
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "11-ai-native/agent-review-and-verification",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/agent-review-and-verification-1440-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2904,
          "documentRange": [
            3014.453125,
            3361.078125
          ],
          "targetRange": [
            3014.453125,
            3361.078125
          ],
          "clip": {
            "x": 324,
            "y": 110.453125,
            "width": 788,
            "height": 346.625
          }
        }
      }
    },
    {
      "id": "R23-PNG-04",
      "order": 4,
      "path": "output/playwright/r23-inputs-20261116-pilot/agent-review-and-verification-1440-light-item2-x0-y0.png",
      "sha256": "b64095d9efe39b5f5f0f9a1f8d4f15f72c1cda80ad6603945b801cbad69d4d46",
      "dimensions": {
        "width": 788,
        "height": 197
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "11-ai-native/agent-review-and-verification",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/agent-review-and-verification-1440-light-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3856,
          "documentRange": [
            3966.078125,
            4163.578125
          ],
          "targetRange": [
            3966.078125,
            4163.578125
          ],
          "clip": {
            "x": 324,
            "y": 110.078125,
            "width": 788,
            "height": 197.5
          }
        }
      }
    },
    {
      "id": "R23-PNG-05",
      "order": 5,
      "path": "output/playwright/r23-inputs-20261116-pilot/agent-review-and-verification-390-dark-top.png",
      "sha256": "1c4ed282cd0665b66cf4500fe24fb73b40aaa78f0178b9f3d7796d061f012657",
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
      "route": "11-ai-native/agent-review-and-verification",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R23-PNG-06",
      "order": 6,
      "path": "output/playwright/r23-inputs-20261116-pilot/agent-review-and-verification-390-dark-item0-x0-y0.png",
      "sha256": "24a232f3ae5deb288887ecf294242aa62d934974d79f05f9ab409b0c605e1a6c",
      "dimensions": {
        "width": 358,
        "height": 453
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native/agent-review-and-verification",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/agent-review-and-verification-390-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1231,
          "documentRange": [
            1341.0625,
            1794.65625
          ],
          "targetRange": [
            1341.0625,
            1794.65625
          ],
          "clip": {
            "x": 16,
            "y": 110.0625,
            "width": 358,
            "height": 453.59375
          }
        }
      }
    },
    {
      "id": "R23-PNG-07",
      "order": 7,
      "path": "output/playwright/r23-inputs-20261116-pilot/agent-review-and-verification-390-dark-item0-x1-y0.png",
      "sha256": "c94762710ebe3eee33c35366eb1c0557b6c49d916f5960f23699c296b5fda97b",
      "dimensions": {
        "width": 358,
        "height": 453
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native/agent-review-and-verification",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/agent-review-and-verification-390-dark-item0-x1-y0.png",
          "label": "item0",
          "requestedScrollLeft": 44,
          "actualScrollLeft": 44,
          "pageScrollY": 1231,
          "documentRange": [
            1341.0625,
            1794.65625
          ],
          "targetRange": [
            1341.0625,
            1794.65625
          ],
          "clip": {
            "x": 16,
            "y": 110.0625,
            "width": 358,
            "height": 453.59375
          }
        }
      }
    },
    {
      "id": "R23-PNG-08",
      "order": 8,
      "path": "output/playwright/r23-inputs-20261116-pilot/agent-review-and-verification-390-dark-item1-x0-y0.png",
      "sha256": "3843a892d3d9ab70d0c4ed5785638ff7e0a94ecb2104e0b5f88d9ea0598a1419",
      "dimensions": {
        "width": 358,
        "height": 662
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native/agent-review-and-verification",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/agent-review-and-verification-390-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 4238,
          "documentRange": [
            4348.328125,
            5010.890625
          ],
          "targetRange": [
            4348.328125,
            5010.890625
          ],
          "clip": {
            "x": 16,
            "y": 110.328125,
            "width": 358,
            "height": 662.5625
          }
        }
      }
    },
    {
      "id": "R23-PNG-09",
      "order": 9,
      "path": "output/playwright/r23-inputs-20261116-pilot/agent-review-and-verification-390-dark-item1-x1-y0.png",
      "sha256": "40bce7ce389ca7676443e69a74ff1f266c6cd904c157d21543907672cdf018b7",
      "dimensions": {
        "width": 358,
        "height": 662
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native/agent-review-and-verification",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/agent-review-and-verification-390-dark-item1-x1-y0.png",
          "label": "item1",
          "requestedScrollLeft": 26,
          "actualScrollLeft": 26,
          "pageScrollY": 4238,
          "documentRange": [
            4348.328125,
            5010.890625
          ],
          "targetRange": [
            4348.328125,
            5010.890625
          ],
          "clip": {
            "x": 16,
            "y": 110.328125,
            "width": 358,
            "height": 662.5625
          }
        }
      }
    },
    {
      "id": "R23-PNG-10",
      "order": 10,
      "path": "output/playwright/r23-inputs-20261116-pilot/agent-review-and-verification-390-dark-item2-x0-y0.png",
      "sha256": "bafbcd1f0f2b189b254e686db4040793e6001df098834e7e63a67d11bd5a2c7e",
      "dimensions": {
        "width": 358,
        "height": 213
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native/agent-review-and-verification",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/agent-review-and-verification-390-dark-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 5949,
          "documentRange": [
            6059.484375,
            6272.984375
          ],
          "targetRange": [
            6059.484375,
            6272.984375
          ],
          "clip": {
            "x": 16,
            "y": 110.484375,
            "width": 358,
            "height": 213.5
          }
        }
      }
    },
    {
      "id": "R23-PNG-11",
      "order": 11,
      "path": "output/playwright/r23-inputs-20261116-pilot/agent-review-and-verification-390-dark-item2-x1-y0.png",
      "sha256": "c780f5a87aa5d724d891b92a0b36e28341677049c446a56b49246c6dbef43429",
      "dimensions": {
        "width": 358,
        "height": 213
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native/agent-review-and-verification",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/agent-review-and-verification-390-dark-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 202,
          "actualScrollLeft": 202,
          "pageScrollY": 5949,
          "documentRange": [
            6059.484375,
            6272.984375
          ],
          "targetRange": [
            6059.484375,
            6272.984375
          ],
          "clip": {
            "x": 16,
            "y": 110.484375,
            "width": 358,
            "height": 213.5
          }
        }
      }
    },
    {
      "id": "R23-PNG-12",
      "order": 12,
      "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-1440-light-top.png",
      "sha256": "ccba412a46c8fc5b12a697aaad2600d2c7d4aac8302f406ed3080e79ff7f2f7c",
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
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R23-PNG-13",
      "order": 13,
      "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-1440-light-item0-x0-y0.png",
      "sha256": "3ca21ed5d19c316c22b3bdf507dfb785f7c3613eb73dbb6c170519718f39e269",
      "dimensions": {
        "width": 788,
        "height": 321
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-1440-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1308,
          "documentRange": [
            1418.328125,
            1740.28125
          ],
          "targetRange": [
            1418.328125,
            1740.28125
          ],
          "clip": {
            "x": 324,
            "y": 110.328125,
            "width": 788,
            "height": 321.953125
          }
        }
      }
    },
    {
      "id": "R23-PNG-14",
      "order": 14,
      "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-1440-light-item1-x0-y0.png",
      "sha256": "8c464b872e20c7a97d93f339737afbfb2b0c644e6b526f41311920604cfead20",
      "dimensions": {
        "width": 480,
        "height": 880
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-1440-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 4700,
          "documentRange": [
            4810,
            5690
          ],
          "targetRange": [
            4809.96875,
            5969.96875
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
      "id": "R23-PNG-15",
      "order": 15,
      "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-1440-light-item1-x0-y1.png",
      "sha256": "213c590eb006b7f2281a095c3d5f8389a32799a949d8eb47246281046ffc81ea",
      "dimensions": {
        "width": 480,
        "height": 329
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-1440-light-item1-x0-y1.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 5530,
          "documentRange": [
            5640,
            5969.96875
          ],
          "targetRange": [
            4809.96875,
            5969.96875
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 480,
            "height": 329.96875
          }
        }
      }
    },
    {
      "id": "R23-PNG-16",
      "order": 16,
      "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-1440-light-item2-x0-y0.png",
      "sha256": "c2a7f1de9a1bc032fe42593e552ca0f1f232145663f193954c144478f073f045",
      "dimensions": {
        "width": 788,
        "height": 173
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-1440-light-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 6274,
          "documentRange": [
            6384.46875,
            6557.78125
          ],
          "targetRange": [
            6384.46875,
            6557.78125
          ],
          "clip": {
            "x": 324,
            "y": 110.46875,
            "width": 788,
            "height": 173.3125
          }
        }
      }
    },
    {
      "id": "R23-PNG-17",
      "order": 17,
      "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-1440-light-item3-x0-y0.png",
      "sha256": "9288ddd19273636ddd5537359448bf2736c0f848ad2937e0208caccf99df4ed7",
      "dimensions": {
        "width": 788,
        "height": 216
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-1440-light-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 6730,
          "documentRange": [
            6840.28125,
            7056.921875
          ],
          "targetRange": [
            6840.28125,
            7056.921875
          ],
          "clip": {
            "x": 324,
            "y": 110.28125,
            "width": 788,
            "height": 216.640625
          }
        }
      }
    },
    {
      "id": "R23-PNG-18",
      "order": 18,
      "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-390-dark-top.png",
      "sha256": "2860f421a99abaeecfbb3b1e55bfbdc8b9bccf0258bceefb830ef181067be5f8",
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
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R23-PNG-19",
      "order": 19,
      "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-390-dark-item0-x0-y0.png",
      "sha256": "dd9dcb9289f4a344e1813b2f258e1cc1a0b14487d26d3a3538f81f9566c5e30b",
      "dimensions": {
        "width": 358,
        "height": 453
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-390-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1968,
          "documentRange": [
            2078,
            2531.453125
          ],
          "targetRange": [
            2077.859375,
            2531.453125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 453.453125
          }
        }
      }
    },
    {
      "id": "R23-PNG-20",
      "order": 20,
      "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-390-dark-item0-x1-y0.png",
      "sha256": "80eac5c94ee8ccbd17a6569ba83c3d3df597e004661a7bf1663ada550a96f943",
      "dimensions": {
        "width": 358,
        "height": 453
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-390-dark-item0-x1-y0.png",
          "label": "item0",
          "requestedScrollLeft": 112,
          "actualScrollLeft": 112,
          "pageScrollY": 1968,
          "documentRange": [
            2078,
            2531.453125
          ],
          "targetRange": [
            2077.859375,
            2531.453125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 453.453125
          }
        }
      }
    },
    {
      "id": "R23-PNG-21",
      "order": 21,
      "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-390-dark-item1-x0-y0.png",
      "sha256": "6bb0d0a6cc03d07e59b751b2c10df9b9d09f87be8603551a8544196b8b6f0d33",
      "dimensions": {
        "width": 358,
        "height": 723
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-390-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 6699,
          "documentRange": [
            6809.3125,
            7533
          ],
          "targetRange": [
            6809.3125,
            7674.46875
          ],
          "clip": {
            "x": 16,
            "y": 110.3125,
            "width": 358,
            "height": 723.6875
          }
        }
      }
    },
    {
      "id": "R23-PNG-22",
      "order": 22,
      "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-390-dark-item1-x0-y1.png",
      "sha256": "cd8ea966b7ed16ee9a47bf78c6f3d5290477bb40b87c492db9b459c6b187314a",
      "dimensions": {
        "width": 358,
        "height": 191
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-390-dark-item1-x0-y1.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 7373,
          "documentRange": [
            7483,
            7674.46875
          ],
          "targetRange": [
            6809.3125,
            7674.46875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 191.46875
          }
        }
      }
    },
    {
      "id": "R23-PNG-23",
      "order": 23,
      "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-390-dark-item2-x0-y0.png",
      "sha256": "03da733989f3af539aa12d0881577a3ea8a9c0e01495e08a3aab7d4c613ea270",
      "dimensions": {
        "width": 358,
        "height": 331
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-390-dark-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 8187,
          "documentRange": [
            8297,
            8628.046875
          ],
          "targetRange": [
            8296.765625,
            8628.046875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 331.046875
          }
        }
      }
    },
    {
      "id": "R23-PNG-24",
      "order": 24,
      "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-390-dark-item2-x1-y0.png",
      "sha256": "6fcb93b266eedbf1d85e7f94a816c4f8d5236cd1f80b35b5b586417cf2102090",
      "dimensions": {
        "width": 358,
        "height": 331
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-390-dark-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 28,
          "actualScrollLeft": 28,
          "pageScrollY": 8187,
          "documentRange": [
            8297,
            8628.046875
          ],
          "targetRange": [
            8296.765625,
            8628.046875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 331.046875
          }
        }
      }
    },
    {
      "id": "R23-PNG-25",
      "order": 25,
      "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-390-dark-item3-x0-y0.png",
      "sha256": "e9382a353dfb062a2c096e6f4de1dd5b6a8f05e79fd3f35b74826c39fc39dd03",
      "dimensions": {
        "width": 358,
        "height": 427
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/context-spec-harness-loop-390-dark-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 8924,
          "documentRange": [
            9034.34375,
            9461.609375
          ],
          "targetRange": [
            9034.34375,
            9461.609375
          ],
          "clip": {
            "x": 16,
            "y": 110.34375,
            "width": 358,
            "height": 427.265625
          }
        }
      }
    },
    {
      "id": "R23-PNG-26",
      "order": 26,
      "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-1440-light-top.png",
      "sha256": "cd548a0d8773b81360b5991f65fe5f823588dda9a530b672ca3cd74a1abbea69",
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
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R23-PNG-27",
      "order": 27,
      "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-1440-light-item0-x0-y0.png",
      "sha256": "8a035f70a1bf8665ef669729f483dc9294508412e0f1d4fc311de65441729d54",
      "dimensions": {
        "width": 788,
        "height": 818
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-1440-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1347,
          "documentRange": [
            1457,
            2275.703125
          ],
          "targetRange": [
            1456.828125,
            2275.703125
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 818.703125
          }
        }
      }
    },
    {
      "id": "R23-PNG-28",
      "order": 28,
      "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-1440-light-item0-x1-y0.png",
      "sha256": "1f93d0bc9eacb9f08312497564b2625f3dac7ab09ee25e49b631570e1db7e3d6",
      "dimensions": {
        "width": 788,
        "height": 818
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-1440-light-item0-x1-y0.png",
          "label": "item0",
          "requestedScrollLeft": 7,
          "actualScrollLeft": 7,
          "pageScrollY": 1347,
          "documentRange": [
            1457,
            2275.703125
          ],
          "targetRange": [
            1456.828125,
            2275.703125
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 818.703125
          }
        }
      }
    },
    {
      "id": "R23-PNG-29",
      "order": 29,
      "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-1440-light-item1-x0-y0.png",
      "sha256": "81bb04790673183373507cc2dec5e07a5578d8155cb8ac6588e1ad3e9256b614",
      "dimensions": {
        "width": 788,
        "height": 124
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-1440-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 5749,
          "documentRange": [
            5859.296875,
            5983.296875
          ],
          "targetRange": [
            5859.296875,
            5983.296875
          ],
          "clip": {
            "x": 324,
            "y": 110.296875,
            "width": 788,
            "height": 124
          }
        }
      }
    },
    {
      "id": "R23-PNG-30",
      "order": 30,
      "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-1440-light-item2-x0-y0.png",
      "sha256": "bc4350c7b02c3e944f2286468f060ddf823a832d509de1989294d192289e8140",
      "dimensions": {
        "width": 788,
        "height": 164
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-1440-light-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 5933,
          "documentRange": [
            6043.296875,
            6207.796875
          ],
          "targetRange": [
            6043.296875,
            6207.796875
          ],
          "clip": {
            "x": 324,
            "y": 110.296875,
            "width": 788,
            "height": 164.5
          }
        }
      }
    },
    {
      "id": "R23-PNG-31",
      "order": 31,
      "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-1440-light-item2-x1-y0.png",
      "sha256": "3638d14ae213be1854ac37dfb32b99a3535ccae6bbb389e8e249e51bbd88c8c9",
      "dimensions": {
        "width": 788,
        "height": 164
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-1440-light-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 67,
          "actualScrollLeft": 67,
          "pageScrollY": 5933,
          "documentRange": [
            6043.296875,
            6207.796875
          ],
          "targetRange": [
            6043.296875,
            6207.796875
          ],
          "clip": {
            "x": 324,
            "y": 110.296875,
            "width": 788,
            "height": 164.5
          }
        }
      }
    },
    {
      "id": "R23-PNG-32",
      "order": 32,
      "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-390-dark-top.png",
      "sha256": "665ced3b5e77ed10757e6f413906fdf32031b3403f522cda55d24477779842b3",
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
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R23-PNG-33",
      "order": 33,
      "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-390-dark-item0-x0-y0.png",
      "sha256": "e2708dfc2f252a63c228d9b64782e5f5e6cf44f5735b5743df7f1b31073debf2",
      "dimensions": {
        "width": 358,
        "height": 724
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-390-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1983,
          "documentRange": [
            2093,
            2817
          ],
          "targetRange": [
            2092.953125,
            2911.828125
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
      "id": "R23-PNG-34",
      "order": 34,
      "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-390-dark-item0-x0-y1.png",
      "sha256": "5a020b5dc1346ab40dfcb4af02c4111df2c8e6c780bd76b1f07d030818b9f1dc",
      "dimensions": {
        "width": 358,
        "height": 144
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-390-dark-item0-x0-y1.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2657,
          "documentRange": [
            2767,
            2911.828125
          ],
          "targetRange": [
            2092.953125,
            2911.828125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 144.828125
          }
        }
      }
    },
    {
      "id": "R23-PNG-35",
      "order": 35,
      "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-390-dark-item0-x1-y0.png",
      "sha256": "0b6d7d0cc5ae480030ffbc9dbc256cf193e7649767c2a5cfffabce20ab6c4a26",
      "dimensions": {
        "width": 358,
        "height": 724
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-390-dark-item0-x1-y0.png",
          "label": "item0",
          "requestedScrollLeft": 358,
          "actualScrollLeft": 358,
          "pageScrollY": 1983,
          "documentRange": [
            2093,
            2817
          ],
          "targetRange": [
            2092.953125,
            2911.828125
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
      "id": "R23-PNG-36",
      "order": 36,
      "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-390-dark-item0-x1-y1.png",
      "sha256": "a2c1e132ac550d067d9b66abaf6a9df0df7d773a1c20e8d0044a42f7c89883e2",
      "dimensions": {
        "width": 358,
        "height": 144
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-390-dark-item0-x1-y1.png",
          "label": "item0",
          "requestedScrollLeft": 358,
          "actualScrollLeft": 358,
          "pageScrollY": 2657,
          "documentRange": [
            2767,
            2911.828125
          ],
          "targetRange": [
            2092.953125,
            2911.828125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 144.828125
          }
        }
      }
    },
    {
      "id": "R23-PNG-37",
      "order": 37,
      "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-390-dark-item0-x2-y0.png",
      "sha256": "cca55f7ed48eb642ddd3b60d95f5630e5313d573038997fe3dd6b60ce47edea7",
      "dimensions": {
        "width": 358,
        "height": 724
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-390-dark-item0-x2-y0.png",
          "label": "item0",
          "requestedScrollLeft": 474,
          "actualScrollLeft": 474,
          "pageScrollY": 1983,
          "documentRange": [
            2093,
            2817
          ],
          "targetRange": [
            2092.953125,
            2911.828125
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
      "id": "R23-PNG-38",
      "order": 38,
      "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-390-dark-item0-x2-y1.png",
      "sha256": "c035b41df10ee782097add56e71178d584bf06aa9f50df54030e16acbfea31c6",
      "dimensions": {
        "width": 358,
        "height": 144
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-390-dark-item0-x2-y1.png",
          "label": "item0",
          "requestedScrollLeft": 474,
          "actualScrollLeft": 474,
          "pageScrollY": 2657,
          "documentRange": [
            2767,
            2911.828125
          ],
          "targetRange": [
            2092.953125,
            2911.828125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 144.828125
          }
        }
      }
    },
    {
      "id": "R23-PNG-39",
      "order": 39,
      "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-390-dark-item1-x0-y0.png",
      "sha256": "76f27f4f22056d860904ffcf3c6c7c1bd1431d88fecc130398417af474085823",
      "dimensions": {
        "width": 358,
        "height": 139
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-390-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 8794,
          "documentRange": [
            8904,
            9043.984375
          ],
          "targetRange": [
            8903.984375,
            9043.984375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 139.984375
          }
        }
      }
    },
    {
      "id": "R23-PNG-40",
      "order": 40,
      "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-390-dark-item1-x1-y0.png",
      "sha256": "50eb7dfd2dd923834b7539e67a19de002c59b00f2ac6348a245290fb6194586e",
      "dimensions": {
        "width": 358,
        "height": 139
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-390-dark-item1-x1-y0.png",
          "label": "item1",
          "requestedScrollLeft": 337,
          "actualScrollLeft": 337,
          "pageScrollY": 8794,
          "documentRange": [
            8904,
            9043.984375
          ],
          "targetRange": [
            8903.984375,
            9043.984375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 139.984375
          }
        }
      }
    },
    {
      "id": "R23-PNG-41",
      "order": 41,
      "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-390-dark-item2-x0-y0.png",
      "sha256": "d6cc7e2f37990fb70ad087a6342dcd2c544d988fe6a293b4aeea2df1515492b3",
      "dimensions": {
        "width": 358,
        "height": 164
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-390-dark-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 9022,
          "documentRange": [
            9132,
            9296.484375
          ],
          "targetRange": [
            9131.984375,
            9296.484375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 164.484375
          }
        }
      }
    },
    {
      "id": "R23-PNG-42",
      "order": 42,
      "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-390-dark-item2-x1-y0.png",
      "sha256": "6a430c040bf3dd57e8743d0ff7873b1d73b449856b32c1820b9d008a3d43aeb4",
      "dimensions": {
        "width": 358,
        "height": 164
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-390-dark-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 356,
          "actualScrollLeft": 356,
          "pageScrollY": 9022,
          "documentRange": [
            9132,
            9296.484375
          ],
          "targetRange": [
            9131.984375,
            9296.484375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 164.484375
          }
        }
      }
    },
    {
      "id": "R23-PNG-43",
      "order": 43,
      "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-390-dark-item2-x2-y0.png",
      "sha256": "fd12dfae4e15b80469161c082e9a89dc3db1a6c887bd942423464c2dd04314d5",
      "dimensions": {
        "width": 358,
        "height": 164
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-pilot/permissions-sandbox-worktrees-390-dark-item2-x2-y0.png",
          "label": "item2",
          "requestedScrollLeft": 497,
          "actualScrollLeft": 497,
          "pageScrollY": 9022,
          "documentRange": [
            9132,
            9296.484375
          ],
          "targetRange": [
            9131.984375,
            9296.484375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 164.484375
          }
        }
      }
    },
    {
      "id": "R23-PNG-44",
      "order": 44,
      "path": "output/playwright/r23-inputs-20261116-remaining/agent-review-and-verification-1440-dark-top.png",
      "sha256": "8351bb563b9190144a2aa0871277267e95a1720cde6ebe04860a55e2ae704b4e",
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
      "route": "11-ai-native/agent-review-and-verification",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R23-PNG-45",
      "order": 45,
      "path": "output/playwright/r23-inputs-20261116-remaining/agent-review-and-verification-1440-dark-item0-x0-y0.png",
      "sha256": "151b484728cf30ef57d5fa5572c26d279eb1ce2525cae7c78ddfa0ad237dfd92",
      "dimensions": {
        "width": 788,
        "height": 216
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "11-ai-native/agent-review-and-verification",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/agent-review-and-verification-1440-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 928,
          "documentRange": [
            1038.328125,
            1254.96875
          ],
          "targetRange": [
            1038.328125,
            1254.96875
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
      "id": "R23-PNG-46",
      "order": 46,
      "path": "output/playwright/r23-inputs-20261116-remaining/agent-review-and-verification-1440-dark-item1-x0-y0.png",
      "sha256": "9d52f78d3b7681ffee6d311070dd8aeebb53a64a7ace71e52d884c520f9c7988",
      "dimensions": {
        "width": 788,
        "height": 346
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "11-ai-native/agent-review-and-verification",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/agent-review-and-verification-1440-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2904,
          "documentRange": [
            3014.453125,
            3361.078125
          ],
          "targetRange": [
            3014.453125,
            3361.078125
          ],
          "clip": {
            "x": 324,
            "y": 110.453125,
            "width": 788,
            "height": 346.625
          }
        }
      }
    },
    {
      "id": "R23-PNG-47",
      "order": 47,
      "path": "output/playwright/r23-inputs-20261116-remaining/agent-review-and-verification-1440-dark-item2-x0-y0.png",
      "sha256": "1f62630a09d7111426464faa064869ae4ce78b6e0f5e2ebfc2a513a9e39722aa",
      "dimensions": {
        "width": 788,
        "height": 197
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "11-ai-native/agent-review-and-verification",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/agent-review-and-verification-1440-dark-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3856,
          "documentRange": [
            3966.078125,
            4163.578125
          ],
          "targetRange": [
            3966.078125,
            4163.578125
          ],
          "clip": {
            "x": 324,
            "y": 110.078125,
            "width": 788,
            "height": 197.5
          }
        }
      }
    },
    {
      "id": "R23-PNG-48",
      "order": 48,
      "path": "output/playwright/r23-inputs-20261116-remaining/agent-review-and-verification-390-light-top.png",
      "sha256": "68bf052ba15a3b93f5213d938e346913f111b53a822f96407a2377ea6f347495",
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
      "route": "11-ai-native/agent-review-and-verification",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R23-PNG-49",
      "order": 49,
      "path": "output/playwright/r23-inputs-20261116-remaining/agent-review-and-verification-390-light-item0-x0-y0.png",
      "sha256": "80331c9fb1a04abd642dbb12ccce105ed7beac3a96276f6ebcbf68a5dd17a163",
      "dimensions": {
        "width": 358,
        "height": 453
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native/agent-review-and-verification",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/agent-review-and-verification-390-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1231,
          "documentRange": [
            1341.0625,
            1794.65625
          ],
          "targetRange": [
            1341.0625,
            1794.65625
          ],
          "clip": {
            "x": 16,
            "y": 110.0625,
            "width": 358,
            "height": 453.59375
          }
        }
      }
    },
    {
      "id": "R23-PNG-50",
      "order": 50,
      "path": "output/playwright/r23-inputs-20261116-remaining/agent-review-and-verification-390-light-item0-x1-y0.png",
      "sha256": "29523f635854d3390d2094497da532cfdc65cca8d806a0ad73d55c889e26933a",
      "dimensions": {
        "width": 358,
        "height": 453
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native/agent-review-and-verification",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/agent-review-and-verification-390-light-item0-x1-y0.png",
          "label": "item0",
          "requestedScrollLeft": 44,
          "actualScrollLeft": 44,
          "pageScrollY": 1231,
          "documentRange": [
            1341.0625,
            1794.65625
          ],
          "targetRange": [
            1341.0625,
            1794.65625
          ],
          "clip": {
            "x": 16,
            "y": 110.0625,
            "width": 358,
            "height": 453.59375
          }
        }
      }
    },
    {
      "id": "R23-PNG-51",
      "order": 51,
      "path": "output/playwright/r23-inputs-20261116-remaining/agent-review-and-verification-390-light-item1-x0-y0.png",
      "sha256": "28f28468faf88fe04cb5ec4cc10e35e1ca9a8091a4ef22d7ea40c19437150cee",
      "dimensions": {
        "width": 358,
        "height": 662
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native/agent-review-and-verification",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/agent-review-and-verification-390-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 4238,
          "documentRange": [
            4348.328125,
            5010.890625
          ],
          "targetRange": [
            4348.328125,
            5010.890625
          ],
          "clip": {
            "x": 16,
            "y": 110.328125,
            "width": 358,
            "height": 662.5625
          }
        }
      }
    },
    {
      "id": "R23-PNG-52",
      "order": 52,
      "path": "output/playwright/r23-inputs-20261116-remaining/agent-review-and-verification-390-light-item1-x1-y0.png",
      "sha256": "b19cfdf02022dd8603b7f7a289611af551d8efa9ee5c94feac72518ccb2ad087",
      "dimensions": {
        "width": 358,
        "height": 662
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native/agent-review-and-verification",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/agent-review-and-verification-390-light-item1-x1-y0.png",
          "label": "item1",
          "requestedScrollLeft": 26,
          "actualScrollLeft": 26,
          "pageScrollY": 4238,
          "documentRange": [
            4348.328125,
            5010.890625
          ],
          "targetRange": [
            4348.328125,
            5010.890625
          ],
          "clip": {
            "x": 16,
            "y": 110.328125,
            "width": 358,
            "height": 662.5625
          }
        }
      }
    },
    {
      "id": "R23-PNG-53",
      "order": 53,
      "path": "output/playwright/r23-inputs-20261116-remaining/agent-review-and-verification-390-light-item2-x0-y0.png",
      "sha256": "8233ad0600ef74b63394f93b3945d428a61702af9538f17d1eb49874de1aa22b",
      "dimensions": {
        "width": 358,
        "height": 213
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native/agent-review-and-verification",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/agent-review-and-verification-390-light-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 5949,
          "documentRange": [
            6059.484375,
            6272.984375
          ],
          "targetRange": [
            6059.484375,
            6272.984375
          ],
          "clip": {
            "x": 16,
            "y": 110.484375,
            "width": 358,
            "height": 213.5
          }
        }
      }
    },
    {
      "id": "R23-PNG-54",
      "order": 54,
      "path": "output/playwright/r23-inputs-20261116-remaining/agent-review-and-verification-390-light-item2-x1-y0.png",
      "sha256": "1195f57335dcfb1484eab01f350cf11ecbdbbe0eeb5a0d041fe57b8e6cec3252",
      "dimensions": {
        "width": 358,
        "height": 213
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native/agent-review-and-verification",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/agent-review-and-verification-390-light-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 202,
          "actualScrollLeft": 202,
          "pageScrollY": 5949,
          "documentRange": [
            6059.484375,
            6272.984375
          ],
          "targetRange": [
            6059.484375,
            6272.984375
          ],
          "clip": {
            "x": 16,
            "y": 110.484375,
            "width": 358,
            "height": 213.5
          }
        }
      }
    },
    {
      "id": "R23-PNG-55",
      "order": 55,
      "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-1440-dark-top.png",
      "sha256": "44d9717863b027eedad79ca57022f4cc8e7f22c46f076b7ba2ee9989b8e88b7d",
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
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R23-PNG-56",
      "order": 56,
      "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-1440-dark-item0-x0-y0.png",
      "sha256": "a9c51a01fcbfa28f5dda69081eb7adbf5bb5e574964bb4b113d2c961a4bc7341",
      "dimensions": {
        "width": 788,
        "height": 321
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-1440-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1308,
          "documentRange": [
            1418.328125,
            1740.28125
          ],
          "targetRange": [
            1418.328125,
            1740.28125
          ],
          "clip": {
            "x": 324,
            "y": 110.328125,
            "width": 788,
            "height": 321.953125
          }
        }
      }
    },
    {
      "id": "R23-PNG-57",
      "order": 57,
      "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-1440-dark-item1-x0-y0.png",
      "sha256": "05e1e7fc64d26a0be14fa1d8150c68d1d88c1391261840146b60b1acc90a2907",
      "dimensions": {
        "width": 480,
        "height": 880
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-1440-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 4700,
          "documentRange": [
            4810,
            5690
          ],
          "targetRange": [
            4809.96875,
            5969.96875
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
      "id": "R23-PNG-58",
      "order": 58,
      "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-1440-dark-item1-x0-y1.png",
      "sha256": "03f66fac4e6af1b71786192f3bed6e3e59479758e53848194cee18271df0a903",
      "dimensions": {
        "width": 480,
        "height": 329
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-1440-dark-item1-x0-y1.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 5530,
          "documentRange": [
            5640,
            5969.96875
          ],
          "targetRange": [
            4809.96875,
            5969.96875
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 480,
            "height": 329.96875
          }
        }
      }
    },
    {
      "id": "R23-PNG-59",
      "order": 59,
      "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-1440-dark-item2-x0-y0.png",
      "sha256": "53234a98eaaa5ffce20cc768a385c24e8a1fb1463f453c0509ba4e43640c51d0",
      "dimensions": {
        "width": 788,
        "height": 173
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-1440-dark-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 6274,
          "documentRange": [
            6384.46875,
            6557.78125
          ],
          "targetRange": [
            6384.46875,
            6557.78125
          ],
          "clip": {
            "x": 324,
            "y": 110.46875,
            "width": 788,
            "height": 173.3125
          }
        }
      }
    },
    {
      "id": "R23-PNG-60",
      "order": 60,
      "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-1440-dark-item3-x0-y0.png",
      "sha256": "eb3bd33965680c7fbe93b8cb61852c9225713cd3fa9e8e76be23d2590a8719d7",
      "dimensions": {
        "width": 788,
        "height": 216
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-1440-dark-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 6730,
          "documentRange": [
            6840.28125,
            7056.921875
          ],
          "targetRange": [
            6840.28125,
            7056.921875
          ],
          "clip": {
            "x": 324,
            "y": 110.28125,
            "width": 788,
            "height": 216.640625
          }
        }
      }
    },
    {
      "id": "R23-PNG-61",
      "order": 61,
      "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-390-light-top.png",
      "sha256": "ab3ef450b67ac599d126c9d88088c212fe9e378890e991ec5c23f39bdf6212b1",
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
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R23-PNG-62",
      "order": 62,
      "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-390-light-item0-x0-y0.png",
      "sha256": "78fd0a68112fed5bd71df7541b8faa158a8787bcd2719b5533edf3c680843a07",
      "dimensions": {
        "width": 358,
        "height": 453
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-390-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1968,
          "documentRange": [
            2078,
            2531.453125
          ],
          "targetRange": [
            2077.859375,
            2531.453125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 453.453125
          }
        }
      }
    },
    {
      "id": "R23-PNG-63",
      "order": 63,
      "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-390-light-item0-x1-y0.png",
      "sha256": "e056996fe613ac9adf5c239e25bafc8aaa883d070f2dc203fb05b5c60ce3cb46",
      "dimensions": {
        "width": 358,
        "height": 453
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-390-light-item0-x1-y0.png",
          "label": "item0",
          "requestedScrollLeft": 112,
          "actualScrollLeft": 112,
          "pageScrollY": 1968,
          "documentRange": [
            2078,
            2531.453125
          ],
          "targetRange": [
            2077.859375,
            2531.453125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 453.453125
          }
        }
      }
    },
    {
      "id": "R23-PNG-64",
      "order": 64,
      "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-390-light-item1-x0-y0.png",
      "sha256": "bfe490e3893cff5db46e2af90158920efde5f8ff0a22ccae243730b0c450d14c",
      "dimensions": {
        "width": 358,
        "height": 723
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-390-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 6699,
          "documentRange": [
            6809.3125,
            7533
          ],
          "targetRange": [
            6809.3125,
            7674.46875
          ],
          "clip": {
            "x": 16,
            "y": 110.3125,
            "width": 358,
            "height": 723.6875
          }
        }
      }
    },
    {
      "id": "R23-PNG-65",
      "order": 65,
      "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-390-light-item1-x0-y1.png",
      "sha256": "81d28e83828ee7d6e247ab0584fae46296f677337953384c090aaac115247278",
      "dimensions": {
        "width": 358,
        "height": 191
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-390-light-item1-x0-y1.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 7373,
          "documentRange": [
            7483,
            7674.46875
          ],
          "targetRange": [
            6809.3125,
            7674.46875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 191.46875
          }
        }
      }
    },
    {
      "id": "R23-PNG-66",
      "order": 66,
      "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-390-light-item2-x0-y0.png",
      "sha256": "07be015dd1bd5a22d617808414681ba40e9df8b4b0bd4a076263cd87e53dabe9",
      "dimensions": {
        "width": 358,
        "height": 331
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-390-light-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 8187,
          "documentRange": [
            8297,
            8628.046875
          ],
          "targetRange": [
            8296.765625,
            8628.046875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 331.046875
          }
        }
      }
    },
    {
      "id": "R23-PNG-67",
      "order": 67,
      "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-390-light-item2-x1-y0.png",
      "sha256": "9624d784919049df2d6bf19302a88812dd47b6c5a7cfbd1b5278ae96d072af20",
      "dimensions": {
        "width": 358,
        "height": 331
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-390-light-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 28,
          "actualScrollLeft": 28,
          "pageScrollY": 8187,
          "documentRange": [
            8297,
            8628.046875
          ],
          "targetRange": [
            8296.765625,
            8628.046875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 331.046875
          }
        }
      }
    },
    {
      "id": "R23-PNG-68",
      "order": 68,
      "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-390-light-item3-x0-y0.png",
      "sha256": "579fb09b88b9145865089131ecc4e2aff53151332c1f5b8537a14b07b2b9d09c",
      "dimensions": {
        "width": 358,
        "height": 427
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native/context-spec-harness-loop",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/context-spec-harness-loop-390-light-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 8924,
          "documentRange": [
            9034.34375,
            9461.609375
          ],
          "targetRange": [
            9034.34375,
            9461.609375
          ],
          "clip": {
            "x": 16,
            "y": 110.34375,
            "width": 358,
            "height": 427.265625
          }
        }
      }
    },
    {
      "id": "R23-PNG-69",
      "order": 69,
      "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-1440-dark-top.png",
      "sha256": "d7b585f022b1dd32fef515494c94a5af71b8d0768c079044b9ce3a8cdebe3db2",
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
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R23-PNG-70",
      "order": 70,
      "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-1440-dark-item0-x0-y0.png",
      "sha256": "2f127b7130f2e819e37e98c1633a6f58d43ebba8d0857923852c46eb878dee87",
      "dimensions": {
        "width": 788,
        "height": 818
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-1440-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1347,
          "documentRange": [
            1457,
            2275.703125
          ],
          "targetRange": [
            1456.828125,
            2275.703125
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 818.703125
          }
        }
      }
    },
    {
      "id": "R23-PNG-71",
      "order": 71,
      "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-1440-dark-item0-x1-y0.png",
      "sha256": "ef6f53bb2ebef1e534291efa15b26d57b5a7d5ff326f5da3679c4fb9c19a3ae1",
      "dimensions": {
        "width": 788,
        "height": 818
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-1440-dark-item0-x1-y0.png",
          "label": "item0",
          "requestedScrollLeft": 7,
          "actualScrollLeft": 7,
          "pageScrollY": 1347,
          "documentRange": [
            1457,
            2275.703125
          ],
          "targetRange": [
            1456.828125,
            2275.703125
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 818.703125
          }
        }
      }
    },
    {
      "id": "R23-PNG-72",
      "order": 72,
      "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-1440-dark-item1-x0-y0.png",
      "sha256": "880a899e1898087c9038531f484a8e1eb9ddb504a168166ebf17ac96ea92f182",
      "dimensions": {
        "width": 788,
        "height": 124
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-1440-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 5749,
          "documentRange": [
            5859.296875,
            5983.296875
          ],
          "targetRange": [
            5859.296875,
            5983.296875
          ],
          "clip": {
            "x": 324,
            "y": 110.296875,
            "width": 788,
            "height": 124
          }
        }
      }
    },
    {
      "id": "R23-PNG-73",
      "order": 73,
      "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-1440-dark-item2-x0-y0.png",
      "sha256": "aa29530fccb6e92606eef03d119fe82e9adbc7953dcef0c9f2614d0db4945719",
      "dimensions": {
        "width": 788,
        "height": 164
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-1440-dark-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 5933,
          "documentRange": [
            6043.296875,
            6207.796875
          ],
          "targetRange": [
            6043.296875,
            6207.796875
          ],
          "clip": {
            "x": 324,
            "y": 110.296875,
            "width": 788,
            "height": 164.5
          }
        }
      }
    },
    {
      "id": "R23-PNG-74",
      "order": 74,
      "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-1440-dark-item2-x1-y0.png",
      "sha256": "36807b598f51b592f910da71b46ef26b17294e51ffd509677e7b4807c51840e0",
      "dimensions": {
        "width": 788,
        "height": 164
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-1440-dark-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 67,
          "actualScrollLeft": 67,
          "pageScrollY": 5933,
          "documentRange": [
            6043.296875,
            6207.796875
          ],
          "targetRange": [
            6043.296875,
            6207.796875
          ],
          "clip": {
            "x": 324,
            "y": 110.296875,
            "width": 788,
            "height": 164.5
          }
        }
      }
    },
    {
      "id": "R23-PNG-75",
      "order": 75,
      "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-390-light-top.png",
      "sha256": "99408fa66bc94938f7d1a1aa6aa6e0de6c25d888d9049b96e50127c727f6f3ed",
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
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R23-PNG-76",
      "order": 76,
      "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-390-light-item0-x0-y0.png",
      "sha256": "218617a89ffeff0030228ba875ca7cc61658245fd6644df1e32a4b26077376fa",
      "dimensions": {
        "width": 358,
        "height": 724
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-390-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1983,
          "documentRange": [
            2093,
            2817
          ],
          "targetRange": [
            2092.953125,
            2911.828125
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
      "id": "R23-PNG-77",
      "order": 77,
      "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-390-light-item0-x0-y1.png",
      "sha256": "958807081592b02f6f60ebbf9799f22bcbee09d0187f4fdd8b766e4b9155e8ed",
      "dimensions": {
        "width": 358,
        "height": 144
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-390-light-item0-x0-y1.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2657,
          "documentRange": [
            2767,
            2911.828125
          ],
          "targetRange": [
            2092.953125,
            2911.828125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 144.828125
          }
        }
      }
    },
    {
      "id": "R23-PNG-78",
      "order": 78,
      "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-390-light-item0-x1-y0.png",
      "sha256": "fe78e9dc266c947968df4a1bcb245d70879d40b8e1eea6d9deb5155e740b058d",
      "dimensions": {
        "width": 358,
        "height": 724
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-390-light-item0-x1-y0.png",
          "label": "item0",
          "requestedScrollLeft": 358,
          "actualScrollLeft": 358,
          "pageScrollY": 1983,
          "documentRange": [
            2093,
            2817
          ],
          "targetRange": [
            2092.953125,
            2911.828125
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
      "id": "R23-PNG-79",
      "order": 79,
      "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-390-light-item0-x1-y1.png",
      "sha256": "2dd25428eff0c06cf9aed32aebd55ef63485a5b4bde0290726fefeaf23c4e1e1",
      "dimensions": {
        "width": 358,
        "height": 144
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-390-light-item0-x1-y1.png",
          "label": "item0",
          "requestedScrollLeft": 358,
          "actualScrollLeft": 358,
          "pageScrollY": 2657,
          "documentRange": [
            2767,
            2911.828125
          ],
          "targetRange": [
            2092.953125,
            2911.828125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 144.828125
          }
        }
      }
    },
    {
      "id": "R23-PNG-80",
      "order": 80,
      "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-390-light-item0-x2-y0.png",
      "sha256": "9637772d47c01c5516c91be7aabfd12f3d0355965db5f6276d4daa6c11d59182",
      "dimensions": {
        "width": 358,
        "height": 724
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-390-light-item0-x2-y0.png",
          "label": "item0",
          "requestedScrollLeft": 474,
          "actualScrollLeft": 474,
          "pageScrollY": 1983,
          "documentRange": [
            2093,
            2817
          ],
          "targetRange": [
            2092.953125,
            2911.828125
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
      "id": "R23-PNG-81",
      "order": 81,
      "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-390-light-item0-x2-y1.png",
      "sha256": "45bf37f6e5a563d81677ebfffe6281cda9fdc5bd29aaf7c98fec47ae7ea293b1",
      "dimensions": {
        "width": 358,
        "height": 144
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-390-light-item0-x2-y1.png",
          "label": "item0",
          "requestedScrollLeft": 474,
          "actualScrollLeft": 474,
          "pageScrollY": 2657,
          "documentRange": [
            2767,
            2911.828125
          ],
          "targetRange": [
            2092.953125,
            2911.828125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 144.828125
          }
        }
      }
    },
    {
      "id": "R23-PNG-82",
      "order": 82,
      "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-390-light-item1-x0-y0.png",
      "sha256": "6e6c2a15aed56de357349194ceabca46b3c383876211f9c14aec9c59284d84cb",
      "dimensions": {
        "width": 358,
        "height": 139
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-390-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 8794,
          "documentRange": [
            8904,
            9043.984375
          ],
          "targetRange": [
            8903.984375,
            9043.984375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 139.984375
          }
        }
      }
    },
    {
      "id": "R23-PNG-83",
      "order": 83,
      "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-390-light-item1-x1-y0.png",
      "sha256": "7ef473ef3e60b1cbd0b4d77f27405a9a7578c5cfd28406ed6d66a2873fc12b4c",
      "dimensions": {
        "width": 358,
        "height": 139
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-390-light-item1-x1-y0.png",
          "label": "item1",
          "requestedScrollLeft": 337,
          "actualScrollLeft": 337,
          "pageScrollY": 8794,
          "documentRange": [
            8904,
            9043.984375
          ],
          "targetRange": [
            8903.984375,
            9043.984375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 139.984375
          }
        }
      }
    },
    {
      "id": "R23-PNG-84",
      "order": 84,
      "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-390-light-item2-x0-y0.png",
      "sha256": "68a55a5b001cb6c913b29a9b538b349e945bf4babeb395e7d37772cbb494e7cf",
      "dimensions": {
        "width": 358,
        "height": 164
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-390-light-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 9022,
          "documentRange": [
            9132,
            9296.484375
          ],
          "targetRange": [
            9131.984375,
            9296.484375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 164.484375
          }
        }
      }
    },
    {
      "id": "R23-PNG-85",
      "order": 85,
      "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-390-light-item2-x1-y0.png",
      "sha256": "fda18550ad1dde1123ad234766b705cd16e90b318ea4ed5e654f7912fbe9aec0",
      "dimensions": {
        "width": 358,
        "height": 164
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-390-light-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 356,
          "actualScrollLeft": 356,
          "pageScrollY": 9022,
          "documentRange": [
            9132,
            9296.484375
          ],
          "targetRange": [
            9131.984375,
            9296.484375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 164.484375
          }
        }
      }
    },
    {
      "id": "R23-PNG-86",
      "order": 86,
      "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-390-light-item2-x2-y0.png",
      "sha256": "1d5f32cb3a0b43f756affeda82c54ab685d60961cfd35c2059ae7a43f601151b",
      "dimensions": {
        "width": 358,
        "height": 164
      },
      "kind": "table-prompt-or-diagram-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "11-ai-native/permissions-sandbox-worktrees",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r23-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r23-inputs-20261116-remaining/permissions-sandbox-worktrees-390-light-item2-x2-y0.png",
          "label": "item2",
          "requestedScrollLeft": 497,
          "actualScrollLeft": 497,
          "pageScrollY": 9022,
          "documentRange": [
            9132,
            9296.484375
          ],
          "targetRange": [
            9131.984375,
            9296.484375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 164.484375
          }
        }
      }
    }
  ]
}
```
<!-- m5-r23-request:data:end -->
