# R18 설계 지원 — 고정 검토 요청

기준 commit b020253520f288a4fac6ba110aaaec1f26410a97, 입력 고정 2026-11-15입니다. 두 대상 원고의 frontmatter부터 끝까지와 full_text_paths 전체, context_excerpts의 명시 범위를 실제 읽습니다. R06의 완료된 PRD·두 SDD·TDD 원고와 직접 근거는 경계 비교에 재사용하며 R06 전체 검토를 반복하지 않습니다.

Controller·작성자·이전 대화와 분리된 fresh gpt-6-astra/high 저장 세션입니다. 공식 ChatGPT 구독·실제 모델/effort·history0·readOnly/networkfalse·도구/MCP 비활성을 실행에서 확인하고 같은 저장 ID를 실제 복구해 후속 검토합니다. R02 승계 예외·API 키·추가 크레딧·전역 설정/인증 변경은 허용하지 않습니다.

공통 계약 C01~C12·한국어 여섯 절·각 원고9항목18점/치명 기준을 적용합니다. ADR 원형과 교육 확장, 맥락·결정·대안·결과·가정/사실·근거·재검토·superseded 이력, 회의록/사후 정당화/영원한 진리와의 경계를 확인합니다. 아키텍처/AD/상세설계/구현/스택, 책임·경계·권위 상태·품질 속성·트레이드오프·가역성, 실용적 기술 범주와 생태계 예외, 두 사례의 가설과 실제 검증 경계를 대조합니다. 오류를 찾기 위한 검토이지 문체 취향으로 무관하게 재작성하는 작업이 아닙니다.

Nygard·ISO 소개·SEI 도서 소개·MDN 관련 절은 새 확인했고 SWEBOK는 같은 실행의 R06 관련 확인을 재사용합니다. conceptual model은 세 허용 읽기 경로가 실패해 이번 not-confirmed이며 과거 성공 기록은 역사입니다. 표준 전문·실제 제품 지원·DB/API 성공으로 확대하지 마세요. SVG/Mermaid/alt와 실제 그림의7단계·6화살표·title/desc·light/dark marker·모바일 판독·본문의 비증명 설명을 대조합니다. 소비 문맥은 이 아키텍처 원고 한 곳입니다.

두 경로×1440/390×light/dark8상태의 images 목록 전체를 localImage/detail original로 전달합니다. 실제 이미지의 ID별 관측과 판독 한계를 남기며 표·프롬프트의 가로/세로 스크롤 분할을 원문 텍스트 완독과 별도로 확인합니다. 초기 지연 로딩 decode 대기 실패의27PNG는 보존하되 미완료 관측 묶음을 검토 성공으로 세지 않습니다. 보완 캡처는 그림을 화면에 진입시킨 뒤 제한 시간 안에 decode하며 새 경로에 보존합니다. 대표 상태의 실제 판독 후 반대 테마로 확장합니다. controller의 표본 판독과 reviewer의 전체 판독은 구분합니다. 상세 판독 수와 검증 수치는 별도 검증 보고서·원로그를 우선합니다.

입력 준비는 원고 PASS/review/M5/ready/공개 승인이 아닙니다. 도구·쓰기·셸·웹·MCP·위임 없이 응답만 반환하세요. 준비 검사기/테스트의 C/I/M와 체크포인트 적합성은 원고 판정과 별도입니다. 개인 home 절대경로·전체 비공개 세션 ID를 출력하지 마세요. 최초 정상 결과는 수정 전 별도 커밋하고 전송 후 불변성 감사를 수행합니다.

<!-- m5-r18-request:data:start -->
```json
{
  "schema_version": 1,
  "review_id": "R18",
  "baseline_commit": "b020253520f288a4fac6ba110aaaec1f26410a97",
  "targets": [
    "src/content/docs/06-requirements-design/adr-and-tradeoffs.md",
    "src/content/docs/06-requirements-design/architecture-and-frameworks.md"
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
    "src/content/docs/06-requirements-design/adr-and-tradeoffs.md",
    "src/content/docs/06-requirements-design/architecture-and-frameworks.md",
    "research/public-beta-review-source-excerpts/r18-design-support-2026-11-15.md",
    "research/public-beta-review-source-excerpts/r06-prd-sdd-tdd-2026-11-15.md",
    "research/architecture-framework-research-brief.md",
    "research/meeting-webapp-case-brief.md",
    "research/stock-dashboard-case-brief.md",
    "src/content/docs/reference/development-glossary.md",
    "src/content/docs/06-requirements-design/prd-sdd-tdd.md",
    "src/assets/diagrams/architecture-decision-layers.svg",
    "src/assets/diagrams/source/architecture-decision-layers.mmd",
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
      "sha256": "95e2e792cfb411b38c76b1c0331ad42cff753290a5c69cff2ddd8d7e8b1e92ff",
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
      "sha256": "d0f9581672ef33c6ca29c2d008cb2aa21907900cfc29e0f78dc9acbcdf9aeaae",
      "segments": [
        {
          "start_line": 362,
          "end_line": 371,
          "text": "| `05-frontend/ui-state-and-ux.md` | 저장소 내부 `research/meeting-webapp-case-brief.md`, `research/stock-dashboard-case-brief.md` | 2026-08-10 | 모임 참가·자기 취소의 인증·중복·모집 상태·정원·동시 요청과 교육용 대시보드의 값 상태·신선도·현재 공개·마지막 정상 버전을 UI 상태·권위 상태·복구 오라클로 구분하는 범위. 실제 API·시장 데이터·배포 성공으로 사용하지 않음 |\n| `06-requirements-design/adr-and-tradeoffs.md` | https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions | 2026-08-13, Michael Nygard 원형 1차 기록 | 한 개의 architecturally significant decision, title·status·context·decision·consequences, `proposed`·`accepted`·`deprecated`·`superseded`와 과거 기록 보존 범위. 모든 조직의 유일한 양식으로 확대하지 않으며 alternatives·assumptions·evidence·revisit trigger는 이 핸드북의 명시적 확장 필드 |\n| `06-requirements-design/adr-and-tradeoffs.md` | https://www.iso.org/standard/74393.html, https://www.iso-architecture.org/ieee-1471/cm/ | 2026-08-13, ISO/IEC/IEEE 42010:2022 공식 abstract와 표준 작업 그룹 conceptual model | 아키텍처와 architecture description의 구분, 이해관계자·관심사·관점, architecture decision·rationale와 선택하지 않은 대안 관계의 범위. ISO 42010이 특정 ADR 템플릿·방법·도구를 강제한다고 확대하지 않음 |\n| `06-requirements-design/adr-and-tradeoffs.md` | 저장소 내부 `research/meeting-webapp-case-brief.md`, `research/stock-dashboard-case-brief.md`, `research/architecture-framework-research-brief.md` | 2026-08-10~13 | 모임의 한 관계형 데이터 경계와 서비스 분리 신호, 교육용 대시보드의 정적 전달·API 전환 신호, Task 10의 결정 수준·품질·도구 범주를 ADR 사례로 적용하는 범위. 실제 제품 선택·구현·배포 승인으로 사용하지 않음 |\n| `06-requirements-design/architecture-and-frameworks.md` | https://www.sei.cmu.edu/library/software-architecture-in-practice-fourth-edition/ | 2026-08-13 | 아키텍처와 생명주기·맥락·품질 속성의 관계, 구조를 품질·변경·배포 판단과 연결하는 범위 |\n| `06-requirements-design/architecture-and-frameworks.md` | https://www.iso.org/standard/74393.html, https://www.iso-architecture.org/ieee-1471/cm/ | 2026-08-13, ISO/IEC/IEEE 42010:2022 공식 abstract와 표준 작업 그룹 conceptual model | architecture description의 표준 범위와 이해관계자·관심사·관점·뷰·architecture decision·rationale의 관계. 특정 개발 방법·표기법·도구, 이 원고의 일곱 단계, 현재 구현·품질·배포 성공을 표준이 보장한다고 확대하지 않음 |\n| `06-requirements-design/architecture-and-frameworks.md` | https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics | 2026-08-04 기존 확인 기록; 2026-08-13 새 확인 HTTP 403 | 요구사항·설계·구현·테스트·운영의 구분과 연결 범위. 2026-08-13 재확인으로 표현하지 않음 |\n| `06-requirements-design/architecture-and-frameworks.md` | https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/Introduction | 2026-08-13 | 웹 프런트엔드의 프레임워크·라이브러리 관계와 도입 전 문제·대안·유지 가능성 질문. 모든 생태계의 엄격한 분류로 사용하지 않음 |\n| `06-requirements-design/architecture-and-frameworks.md` | 저장소 내부 `research/architecture-framework-research-brief.md`, `research/meeting-webapp-case-brief.md`, `research/stock-dashboard-case-brief.md` | 2026-08-13 | 제품 중립 결정 수준·구조 질문·AI 검토 계약과 두 사례의 가역적 시작 가설·변경 신호. 실제 제품 동작·배포·시장 데이터·권리의 근거로 사용하지 않음 |\n| `06-requirements-design/prd-sdd-tdd.md` | https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics | 2026-08-04 | 요구사항·설계·구현·테스트·운영을 서로 다른 지식 영역으로 구분하고 추적하는 교육 범위 |"
        },
        {
          "start_line": 472,
          "end_line": 474,
          "text": "- `05-frontend/browser-dom-rendering.md` (`PBSG-024`, 2026-08-13 확인): WHATWG HTML·DOM, CSSWG CSSOM Editor's Draft, Chrome DevTools Network·DOM·CSS·Rendering과 W3C WCAG 2.2를 위 장별 적용 기록에 연결했습니다. URL·네트워크·HTML 파싱·DOM·스타일·렌더링 기회·이벤트와 상태의 개념 흐름, View Source·응답 원문·live DOM·Computed 값·픽셀의 증거 차이, `img`·`iframe` 지연 로딩과 접근성 경계를 직접 뒷받침합니다. 이를 모든 엔진의 내부 직렬 파이프라인·스레드·최적화, 모든 라이브러리의 lazy loading, 임시 DOM 편집의 소스 변경, 한 Chrome·기기 확인의 호환성·WCAG 완료로 일반화하지 않습니다.\n- `06-requirements-design/architecture-and-frameworks.md` (`PBSG-007`, 2026-08-13 확인): ISO/IEC/IEEE 42010:2022 공식 범위와 표준 작업 그룹 conceptual model, CMU SEI 4판 소개, 기존 SWEBOK 확인, MDN 웹 프레임워크 문서를 위 장별 적용 기록에 연결했습니다. 표준 범위는 architecture description과 이해관계자·관심사·관점·뷰·결정·근거의 관계를, SEI는 아키텍처의 생명주기·맥락·품질 속성을, 기존 SWEBOK는 요구사항·설계·구현·테스트·운영의 연결과 구분을, MDN은 웹 프런트엔드에서 프레임워크·라이브러리를 검토하는 실용 질문을 뒷받침합니다. 프레임워크·라이브러리·런타임·플랫폼·도구 구분은 생태계별 용례가 겹치는 편집 기준이고, 일곱 단계는 이 핸드북의 판단 절차이며, 두 사례는 저장소 범위의 가역적 시작 가설입니다. 이를 특정 방법·제품 선택·현재 구현·품질·배포 성공으로 확대하지 않고 후보의 제어·지원·배포 범위는 채택 때 공식 문서와 실행 증거로 다시 확인합니다.\n- `06-requirements-design/prd-sdd-tdd.md` (`PBSG-025`, 2026-08-13 확인): ISO/IEC/IEEE 29148:2018의 요구공학 과정·정보 항목, inactive-reserved IEEE 1016-2009의 Software Design Description 역사적 정의·비방법론 경계, GitHub Spec Kit 현재 `Spec → Plan → Tasks → Implement`와 선택 품질 게이트, Fowler의 테스트 목록·테스트 우선·기능 코드·리팩터링 설명을 위 장별 적용 기록에 연결했습니다. 요구공학 표준을 이 핸드북 PRD 양식으로, inactive 표준을 현재 의무 형식으로, 현재 제품 흐름을 보편 SDD 표준으로, 테스트 보유·사후 추가를 TDD 수행으로 확대하지 않습니다. 2026-08-05 검토 파일은 의미 변경 전 역사 증거로 보존하며 현재 `draft`의 `reviewEvidence`로 재사용하지 않습니다."
        },
        {
          "start_line": 515,
          "end_line": 517,
          "text": "\n`adr-and-tradeoffs.md`는 원전의 핵심 다섯 필드와 상태 보존을 저자·원문에 귀속하고, 대안·가정·증거·재검토 조건과 질문·증거·금지 예시를 핸드북의 확장으로 구분합니다. 원전의 예시 제목·프로젝트 경로·문장·사례를 복제하지 않으며 자발적 출처 링크를 유지합니다. 따라서 R17-C01 위치는 원고·고지 변경 없이 해소하되, 이 자체 감사는 법률 자문이 아니며 RIGHTS-01 전체를 닫지 않습니다.\n"
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
          "start_line": 40,
          "end_line": 42,
          "text": "| PBSG-006 | PB-020 `developer-thinking.md` | 모호한 문제를 사실·가정·실패·증거로 분해하고 재현·가설·최소 변경·검증으로 좁히는 개발자 사고 절차 | normal | 소프트웨어공학의 문제 해결·디버깅·실험 설계를 다루는 표준 본문 또는 1차 교육·연구 자료 | 2026-08-13 확인; 인용한 문서 상태나 적용 범위 변경 시 재확인 | confirmed | Task 12 | 한 문제 해결 순서를 모든 장애·조직·도메인에 맞는 유일한 개발 절차로 제시하지 않습니다. |\n| PBSG-007 | PB-035 `architecture-and-frameworks.md` | 아키텍처·기술 스택·프레임워크·라이브러리·런타임·플랫폼의 구분과 품질 속성·제약 기반 선택 | important | 2026-08-13 확인: ISO/IEC/IEEE 42010:2022 공식 범위와 conceptual model, CMU SEI 4판 소개, 2026-08-04 SWEBOK 기존 직접 확인, 2026-08-13 MDN 웹 프레임워크 자료 | 표준·자료 상태 변경 시와 예시 프레임워크·런타임·플랫폼을 실제 후보로 채택할 때 해당 제품의 공식 제어·지원·배포 범위를 재확인 | confirmed | Task 10; Task 14 | architecture description·품질 관계와 이 원고의 편집상 도구 구분·일곱 단계·사례 가설을 하나의 표준으로 합치거나 특정 프레임워크 구성을 아키텍처 자체·모든 웹앱의 기본 정답·현재 구현 성공으로 일반화하지 않습니다. |\n| PBSG-008 | PB-039 `software-development-lifecycle.md`; PB-040 `debugging-observability.md` | 생명주기 단계별 종료 증거와 피드백, 재현·가설·로그·지표·트레이스로 원인을 좁히는 절차 | important | 2026-08-13 확인: ISO/IEC/IEEE 12207:2026, NIST SSDF 1.1, Agile Manifesto 원칙, Google SRE Book Effective Troubleshooting, OpenTelemetry signals·observability primer, OWASP Logging Cheat Sheet | 생명주기·보안·관측 지침의 문서 상태 변경 시와 특정 SDLC 모델·관측 제품·인시던트 절차를 실제 채택할 때 재확인 | confirmed | Task 15 | 이 원고의 단계 지도를 표준의 고정 순서로, 문서·화면·배포 표시를 단계 완료로, 세 신호의 수집을 관측 완성·근본 원인·복구 성공으로 일반화하지 않습니다. |"
        },
        {
          "start_line": 106,
          "end_line": 109,
          "text": "- PBSG-024는 WHATWG HTML의 parsing·event loop·`img`·`iframe` lazy loading, WHATWG DOM, CSSWG CSSOM Editor's Draft, Chrome DevTools Network·DOM·CSS·Rendering과 W3C WCAG 2.2를 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. 원고는 URL·네트워크·HTML 파싱·DOM·스타일·렌더링 기회·이벤트·상태를 진단용 개념 흐름으로 한정하고, View Source·Network·live DOM·Computed 값·픽셀을 서로 다른 증거로 구분합니다. 이를 모든 엔진의 직렬 내부 구현, 모든 lazy loading, 임시 DOM 편집의 소스 변경, 한 Chrome·기기의 호환성·접근성 완료로 확대하지 않습니다.\n- PBSG-003은 W3C WCAG 2.2와 비규범 Understanding·WAI Images 자료, RFC 9110, Nygard의 ADR 원형, ISO/IEC/IEEE 42010:2022 공식 범위와 conceptual model을 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. PB-031·033·034의 전체 주장과 PB-053의 기존 차트·표·상태 접근성 계약을 함께 대조했으며, 자동 검사·특정 화면·차트 대체 텍스트를 전체 적합으로, HTTP 의미를 애플리케이션의 모든 중복·복구로, ADR 양식을 영구 진리나 유일한 템플릿으로 확대하지 않습니다.\n- PBSG-007은 ISO/IEC/IEEE 42010:2022 공식 범위와 conceptual model, CMU SEI 4판 소개, 기존 SWEBOK 확인 기록, MDN 웹 프레임워크 자료를 원고 전체에 대조해 `confirmed`로 전환했습니다. architecture description·이해관계자·관심사·관점·뷰·결정·근거와 품질 관계가 닫는 주장, 생태계별 용례가 겹치는 핸드북의 실용 도구 구분, 이 핸드북의 일곱 단계와 두 사례 가설을 분리했으며 특정 방법·제품·현재 구현·배포 성공으로 확대하지 않습니다.\n- PBSG-025는 ISO/IEC/IEEE 29148:2018, inactive-reserved IEEE 1016-2009, Nygard ADR 원형, GitHub Spec Kit 현재 문서, Fowler의 TDD 설명을 원고 전체에 대조해 `confirmed`로 전환했습니다. PRD·Software Design Description 산출물, Spec-Driven Development 접근, TDD 구현 규율의 입력·출력·순서·실패를 분리하고 표준·제품·방법론의 상태와 비보장선을 기록했으며, 사후 테스트를 TDD로 승격하지 않습니다."
        },
        {
          "start_line": 159,
          "end_line": 162,
          "text": "|---|---|---|\n| PBCA-003 | PBSG-001, PBSG-002, PBSG-003, PBSG-004, PBSG-005 | Task 12; Task 13; Task 14; Task 15; Task 16 |\n| PBCA-004 | PBSG-007, PBSG-008, PBSG-009, PBSG-010 | Task 10; Task 14; Task 15; Task 16; Task 17 |\n| PBCA-005 | PBSG-017 | Task 7; Task 8; Task 17 |"
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
          "start_line": 60,
          "end_line": 63,
          "text": "| PB-033 | `src/content/docs/05-frontend/ui-state-and-ux.md` | core | UI 상태와 사용자 경험을 어떤 상태 기계로 설계하는가? | 정상·실패·결과 불명 전이를 권위 상태·복구 오라클과 함께 설계한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 14 | loading·empty·success·validation·conflict·error·unknown·retry, 서버 권위 상태, 낙관적 UI, 중복 행동, 오래된 응답과 복구 오라클을 두 사례·상태 전이표·직접 증거로 확장하고 PBSG-003을 닫았습니다. |\n| PB-034 | `src/content/docs/06-requirements-design/adr-and-tradeoffs.md` | core | 중요한 설계 결정을 왜 어떻게 기록하는가? | 맥락·대안·결정·결과·가정·증거와 재검토 조건을 쓴다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 14 | ADR 원형과 42010의 범위를 분리하고 맥락·결정·대안·결과·가정·증거·재검토 신호, 회의록·영원한 진리 금지선, 두 사례와 템플릿을 확장해 PB-031·033·PB-053의 접근성 계약과 함께 PBSG-003을 닫았습니다. |\n| PB-035 | `src/content/docs/06-requirements-design/architecture-and-frameworks.md` | core | 아키텍처·기술 스택·프레임워크를 어떻게 구분하는가? | 품질 속성과 제약으로 구조·도구 선택을 설명한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 10; Task 14 | Task 10의 결정 수준·일곱 구조 질문·품질과 제약·도구 범주·두 사례 가설·과설계·증거 계약과 PBV-13 `keep`을 보존했습니다. Task 14에서 ISO/IEC/IEEE 42010:2022의 architecture description 범위와 방법·제품 비보장 경계를 추가해 PBSG-007을 닫았으며 제품별 제어·지원·배포는 실제 후보 채택 때 다시 확인합니다. |\n| PB-036 | `src/content/docs/06-requirements-design/prd-sdd-tdd.md` | core | PRD·두 SDD·TDD는 어떤 범주이며 어떻게 연결되는가? | 요구 문서·설계 문서·개발 접근·구현 규율을 입력·출력·순서·실패로 구분한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 5; Task 14; Task 20 resolved | 29148의 현재·개정 예정 상태, inactive-reserved 1016, Spec Kit 현재 흐름, Fowler TDD를 직접 연결해 PBSG-025를 닫았습니다. 의미 변경으로 과거 검토 파일은 보존하되 현재 `reviewEvidence`를 제거했으며, PRD 그림의 topology·390px 판독성은 Task 20 `9f10b20`과 실제 Chrome 6상태·Codex `PASS`로 교정됐습니다. |"
        },
        {
          "start_line": 114,
          "end_line": 119,
          "text": "\n- 원고·증거: PB-035는 아키텍처·상세 설계·구현·기술 스택의 결정 수준, 구성요소·책임·경계·인터페이스·상태·데이터·배치, 품질 속성·제약·실패 영향·가역성, 프레임워크·라이브러리·런타임·플랫폼·도구의 실용 구분, 모임·주가 사례, 실패·복구·과설계, 읽기 전용 AI 검토, 체크리스트와 연습을 포함한 `draft`로 확장됐습니다. EVIDENCE는 `conform`으로 재판정했으며 자동·브라우저 증거는 `reviewEvidence`나 `ready` 승격으로 사용하지 않았습니다.\n- 출처 경계: CMU SEI 4판 소개·기존 2026-08-04 SWEBOK 확인 기록·2026-08-13 MDN 웹 프레임워크 문서를 `research/source-map.md`에 적용 범위와 일반화 금지선으로 연결했습니다. 2026-08-13 SWEBOK 새 확인은 HTTP 403으로 실패했고, 제품별 제어·지원·배포 범위도 후보 채택 때 다시 확인해야 합니다. 허용 파일 밖 `research/public-beta-source-gap-register.md`의 PBSG-007 `not-confirmed`는 변경하지 않아 PB-035의 SOURCE 셀은 PBCA-004를 유지합니다.\n- 시각 판정: PBV-13은 노드 7개·화살표 6개·초점 2개인 세로 흐름이고 SVG·MMD의 라벨·순서·topology가 같습니다. `560×772` 자산은 390px 소비 문맥에서 358×494px로 표시돼 핵심 레이블을 읽을 수 있었고, 명시적 light/dark marker와 4상태 manifest·PNG에서 잘림·겹침·전역 overflow·console·page error가 없어 `keep`입니다. Archify는 선형 7노드라 사용하지 않았습니다.\n- 현재 파생 수치: PB-035는 `needs_rewrite`에서 `needs_edit`로 이동해 현재 판정은 conform 19개·needs_edit 27개·needs_rewrite 13개입니다. PBCA-004는 PB-035의 SOURCE와 다른 일곱 core 원고의 EVIDENCE·SOURCE에 남아 있어 현재 finding은 Critical 0개·Important 13개·Minor 1개로 변하지 않습니다.\n"
        },
        {
          "start_line": 146,
          "end_line": 148,
          "text": "- Task 9는 PBCA-001과 PBCA-002를 실제로 해결해 공개 폐기 사례를 0건으로 만들고 공식 13장 Build Track과 순차·검색 기반 탐색 경로를 정렬했습니다. 두 finding의 역사 기록은 register에 남기되 현재 미해결 수에는 포함하지 않으며, 남은 PBCA·PBVA finding은 기존 목표 Task에서 계속 추적합니다.\n- Task 10은 PB-035의 EVIDENCE를 해결하고 PBV-13을 `keep`으로 추가했지만 PBSG-007 권위 상태는 바꾸지 않았습니다. 따라서 PBCA-004는 현재 여덟 문서에 남되 PB-035는 SOURCE 하나, 나머지 일곱 문서는 EVIDENCE·SOURCE 두 규칙이 남은 것으로 추적합니다.\n"
        }
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "sha256": "1c6e40bc5725e7cd39047137cae309f55e5c8ea1694be36bdf24557a056da753",
      "segments": [
        {
          "start_line": 359,
          "end_line": 387,
          "text": "    },\n    {\n      \"id\": \"R17\",\n      \"slug\": \"frontend-support\",\n      \"method\": \"소묶음\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/05-frontend/accessibility-responsive-design.md\", \"src/content/docs/05-frontend/ui-state-and-ux.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r17-frontend-support-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r17-frontend-support-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r17-frontend-support-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r17-frontend-support-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r17-frontend-support-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r17-frontend-support-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"8b756d33e1e58834a78a24cf546357897d92503bf9f5f9dc9c70dbbdf04d7d1d\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important3-minor4-resolved-after-evidence-supplement\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"96c18123b4e5bd3ff13ed640dd4a6d390effbed6f01abbb603649f4f7c1e7cf3\",\"current_target_sha256\":\"f771876d195f11c237b1b548bec3d26056f6d1bf1e98b84df81fc0f91e97ef21\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r17-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r17-frontend-support-codex-rereview.md\",\"next_scope\":\"R18 pending; no M5/ready/public approval\",\"target_hashes\":[{\"path\":\"src/content/docs/05-frontend/accessibility-responsive-design.md\",\"reviewed_sha256\":\"96c18123b4e5bd3ff13ed640dd4a6d390effbed6f01abbb603649f4f7c1e7cf3\",\"current_sha256\":\"f771876d195f11c237b1b548bec3d26056f6d1bf1e98b84df81fc0f91e97ef21\"},{\"path\":\"src/content/docs/05-frontend/ui-state-and-ux.md\",\"reviewed_sha256\":\"357e478e8e7eaff7c1c4767e14b6c6eef85ae311c7b4c566d8fb315d061e3f60\",\"current_sha256\":\"32e0a610adf75d6b9f4942c2cf8fb94980948ce346950e934660fcb57c2db5ad\"}],\"evidence_followup_path\":\"docs/project/reviews/public-beta-1/r17-frontend-support-evidence-followup.md\"}\n    },\n    {\n      \"id\": \"R18\",\n      \"slug\": \"design-support\",\n      \"method\": \"소묶음\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/06-requirements-design/adr-and-tradeoffs.md\", \"src/content/docs/06-requirements-design/architecture-and-frameworks.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r18-design-support-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r18-design-support-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r18-design-support-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r18-design-support-codex-rereview.md\"\n    },\n    {\n      \"id\": \"R19\",\n      \"slug\": \"workflow-support\",\n      \"method\": \"소묶음\",\n      \"implementation_state\": \"작성·구현 완료\","
        }
      ]
    },
    {
      "path": "docs/project/public-beta-visual-audit.md",
      "sha256": "fa8fb01ec74718c80f81e5c016f212a7629c61f218591cc742551f144dfd98e4",
      "segments": [
        {
          "start_line": 8,
          "end_line": 14,
          "text": "- 기준 커밋: `750a8e3bbe77a67cf2480d8608aa891aa00c5de5`\n- 범위: 게시 SVG 14개, 대응 Mermaid 원본 14개, 공개 원고의 소비 occurrence 17개, Task 6의 서로 다른 시각 캡처 60개, Task 10 PBV-13 상태 4개, Task 20 PBV-03 Fix Round 1 상태 6개와 후속 11개 자산 단위 상태 84개, Task 21의 현재 입력 전체 시각 occurrence 68개\n- 정본: 공개 페이지가 소비하는 정적 SVG가 현재 게시 정본입니다. Mermaid는 편집 가능한 source일 뿐이며 의미가 어긋난 행은 두 표현을 그대로 병존시키지 않고 Task 20에서 원고의 학습 질문을 기준으로 정적 SVG 하나를 다시 정본화합니다.\n- 판정 기준: `diagram-design`의 최대 9노드·12화살표 복잡도 예산, 한 그림 한 질문, 최대 두 초점, 색 외의 레이블·선 의미, 기본 확대에서의 핵심 레이블, 고유 `title`·`desc`·본문 `alt`, light/dark marker 대비를 적용했습니다.\n- Archify 경계: Task 6 당시에는 Node.js 22.16.0 호환성을 확인하지 못해 Archify를 실행하지 않았습니다. 이후 Task 20 전체 검증은 저장소 권장 Node.js 22.16.0·npm 10.9.2에서 통과했지만, PBV-03은 4-lifeline sequence이고 나머지 자산도 8~12노드 자동 라우팅이 필요한 복잡 구조가 아니어서 Archify를 설치·업그레이드·실행하지 않았습니다. PBV-13과 Task 20 자산은 계획대로 `diagram-design`으로 교정했으며 현재 Archify 조건에 맞는 후보는 0개입니다.\n- 변경 경계: Task 6은 자산을 수정하지 않고 감사 기준선과 캡처만 남겼습니다. Task 10은 PBV-13 한 쌍과 소비 원고를 추가했고, Task 20은 PBV-03 분할·Fix Round 1과 후속 11개 자산을 각각 독립 단위로 구현·검증·별도 Codex 검토·로컬 커밋했습니다. 후속 11개 단위는 개별 검토 당시 고정한 감사 문서 해시 `12d1a0c6…fbde`를 포함해 515개 입력이 모두 일치했습니다. 이 closeout 후보가 공유 감사 문서를 갱신한 뒤 현재 재해시는 누락 0개·불일치 11개이며, 11개 모두 이 감사 문서 한 경로의 예상된 계보 변경이고 나머지 자산·원고·증거 504개는 일치합니다. 각 `output/playwright/task20-*-evidence/` manifest는 실패 시도·최종 상태·원본 화면·cleanup을 보존합니다. Claude 검토는 `blocked/subscription_unverified`이며 호출 0·PASS 없음이고 M5·`ready`·소유자 승인·release·push·deploy·공개와 분리합니다.\n"
        },
        {
          "start_line": 31,
          "end_line": 36,
          "text": "| PBV-12 `agent-feedback-loop` | `src/assets/diagrams/agent-feedback-loop.svg` | `src/assets/diagrams/source/agent-feedback-loop.mmd` | PB-052 `working-with-coding-agents.md` | 에이전트가 상태 확인부터 문맥 갱신까지 어떤 증거 루프로 작업하는가? | 세로 단계+피드백 | 7 | 7 | 리뷰·갱신 2그룹 | 고유 title·desc·role·aria와 원고의 질문지도/비증명 경계가 일치하며 원고는 불변입니다. | `560×1000`, viewBox·width·height 일치 | 2026-08-28 실제 Chrome6상태: 모바일358×639px core17.9/detail12.8px·하단 안내 판독. 보조 글자를 키워 이전보다 약149px 길어졌습니다. | explicit marker4·주 흐름·점선 피드백이 선과 같은 가시색으로 전환됩니다. | reflow | diagram-design | `2ccd9f4`; Codex `PASS` C0/I0/M0; PBVA-003 자산 조건 충족; Claude pending |\n| PBV-13 `architecture-decision-layers` | `src/assets/diagrams/architecture-decision-layers.svg` | `src/assets/diagrams/source/architecture-decision-layers.mmd` | PB-035 `architecture-and-frameworks.md` | 사용자 문제에서 책임·품질·구조·기술 선택·구현을 지나 검증 증거와 변경 조건까지 어떤 순서로 판단하는가? | 세로 단계 흐름 | 7 | 6 | 문제·증거 2그룹 | 고유 title/desc, alt와 그림 앞 읽기 질문·뒤 비증명 설명이 모두 있습니다. | `560×772`, viewBox·width·height 일치 | 358×494px에서 약 15px 핵심 레이블 7개와 화살표 방향을 확대 없이 읽을 수 있습니다. | 박스·글자·선과 explicit light/dark marker fill이 모두 테마에 맞게 전환됩니다. | keep | diagram-design; Archify 미사용(선형 7노드) | Task 21; Task 10 뒤 keep 유지 |\n<!-- PUBLIC_BETA_VISUAL_AUDIT_END -->\n\n최종 처분은 `keep` 2개·`reflow` 8개·`replace` 3개입니다. PBV-03의 분할·Fix Round 1과 후속 11개 자산 단위는 각각 별도 Codex 검토에서 최종 `PASS` C0/I0/M0였고, PBV-13은 근거 있는 keep입니다. Task 20 합동 closeout은 최초 `NEEDS CHANGES` C0/I1/M0의 입력 계보 문구를 Fix Round 1으로 교정한 뒤 같은 리뷰어가 `PASS` C0/I0/M0·I01 `RESOLVED`로 재검토했습니다. PBVA-001~005의 자산별·패키지 수용 기준을 모두 충족해 현재 미해결 시각 finding은 Critical 0개·Important 0개입니다. 이 판정은 Task 20의 구현 체크포인트에만 적용되며 Claude 검토·M5·`ready`·소유자 승인·release·push·deploy·공개를 뜻하지 않습니다.\n"
        },
        {
          "start_line": 51,
          "end_line": 53,
          "text": "- 증거 경계: 실행 당시 60개 조합에서 H1 1개, `content-status` 배지 1개, 대상 자산·비어 있지 않은 alt, 문서·body 전역 overflow 0, console error/warning 0, page error 0을 관찰했고 자산 내부 잘림·겹침과 dark 픽셀을 확인했습니다. 다만 이 DOM·console·theme 수치를 상태별로 담은 manifest/log가 없으므로 독립 재현 증거로 인정하지 않습니다. 보존 PNG는 자산 존재·레이아웃·가독성·marker·light/dark 픽셀 판정만 뒷받침하며, Task 21에서 각 상태의 URL·뷰포트·테마·H1·배지·자산·alt·overflow·console·page error·스크린샷 경로를 상태별 manifest로 다시 기록합니다.\n- Task 10 추가 증거: fresh build는 HTML 60개·학습 SVG 13개를 생성했고, `output/playwright/task10-architecture-evidence/manifest.jsonl`은 20 records에 첫 정적 링크 실패·preview EPERM·브라우저 스크립트와 backlink locator 실패를 숨기지 않고 보존했습니다. 최종 소비 상태는 1440×1000·390×844 light/dark 4개로, 요청 테마·`prefers-color-scheme`·HTML `data-theme`·effective color scheme이 모두 일치했습니다. 네 상태 모두 H1·draft 배지·alt·7노드·6화살표·7라벨·명시적 두 marker fill·전역 overflow 0·console warning/error 0·page error 0이었고 PNG 4개를 원본 크기로 열어 자산 내부 잘림·겹침·화살촉 소실 0과 모바일 판독성을 확인했습니다. 새 역링크 네 곳은 실제 click 뒤 목표 H1을 확인했으며 Chrome·preview·4330 listener를 모두 정리했습니다. 이 증거는 PBV-13과 인접 본문만 다루며 Task 21의 전체 사이트 회귀를 대신하지 않습니다.\n- Task 20 PBV-03 초기 구현 증거: fresh build는 HTML 60개·학습 SVG 14개를 생성했습니다. actual headed Google Chrome 151에서 PB-028의 1440×1000·1024×768·390×844 light/dark 6개 상태가 HTTP 200·H1·draft 배지·정확한 theme·두 SVG load·서로 다른 alt·고유 title/desc·explicit marker·전역 overflow 0·내부 scroll 실패 0·console warning/error 0·page error 0·외부 요청 0을 통과했습니다. PNG 6개와 같은 레코드의 overview/detail crop 12개는 SHA-256·크기·바이트를 가지며 원본 18개에서 잘림·겹침·대비 결함 0을 확인했습니다. 그러나 독립 리뷰는 결합된 A·B lifeline과 순차 배치가 동시 요청 문법을 가르치지 못하고 트랜잭션 확정 경계도 명시하지 않았다는 I1을 열어 `NEEDS CHANGES C0/I1/M0`로 판정했습니다. 초기 픽셀 증거는 보존하지만 PBVA-001 해결 근거로 사용하지 않았습니다."
        },
        {
          "start_line": 75,
          "end_line": 77,
          "text": "| PBV-12 | `/11-ai-native/working-with-coding-agents/` | agent-feedback-loop | 6상태·원본 화면 확인; marker·모바일 판독 결함 0; Codex PASS |\n| PBV-13 | `/06-requirements-design/architecture-and-frameworks/` | architecture-decision-layers | 상태별 manifest·캡처 4개 확인; 7노드·6화살표·모바일 판독·명시적 dark marker·앞뒤 설명 합격 |\n"
        },
        {
          "start_line": 92,
          "end_line": 94,
          "text": "- M1-03은 역사적 자산 감사와 finding 배정을 완료한 상태를 유지합니다.\n- M4-01·M4-02는 14개 게시 SVG·14개 Mermaid, 17개 소비 occurrence, PBV-03 분할·Fix Round 1, PBV-13 keep, 후속 11개 자산별 구현·검증·Codex PASS와 PBVA-001~005 해소, Task 20 합동 closeout Fix Round 1 재검토 `PASS` C0/I0/M0를 근거로 `done`입니다.\n- Task 21의 검색·내비게이션·404·접근성·반응형·전체 사이트 회귀, 특히 키보드 테마 2상태 `not-confirmed`는 Task 20 closeout과 분리합니다. Task 20 PASS는 M4-03~05, M5, `ready`, owner, RC, release, push, deploy, publication, public URL을 완료하지 않습니다."
        }
      ]
    }
  ],
  "render_provenance": {
    "manifest_path": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
    "manifest_sha256": "841cadb045ec2f6104732ae52340fd09191e9039194beff6f5962ea825aae5d8",
    "additional_context_manifests": [
      {
        "path": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "sha256": "d13b2a76c22db4e686063a9458cbf18ff7940404d13b424001299b9e2c3e2ebf"
      }
    ],
    "input_files": [
      {
        "path": "src/content/docs/06-requirements-design/adr-and-tradeoffs.md",
        "sha256": "501beeade9f87e6c2d06bf87fe208186902b4585f47b5a6f1157714c058f57d3"
      },
      {
        "path": "src/content/docs/06-requirements-design/architecture-and-frameworks.md",
        "sha256": "007eac79925b1ad3d77e72c8a24fa347f92e8120d851e0478fbb29751a202d83"
      },
      {
        "path": "src/styles/custom.css",
        "sha256": "2236f2a8a9b30515cb641d48de7089d15590834766ada3f60de9f649ef36c137"
      }
    ],
    "states": [
      {
        "route": "06-requirements-design/adr-and-tradeoffs",
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
        "image_count": 8
      },
      {
        "route": "06-requirements-design/adr-and-tradeoffs",
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
        "image_count": 19
      },
      {
        "route": "06-requirements-design/architecture-and-frameworks",
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
            "src": "/_astro/architecture-decision-layers.-gF1VM2w_Z2oxR7m.svg",
            "alt": "사용자 문제와 제약에서 책임·경계·상태, 품질 속성과 트레이드오프, 아키텍처 결정, 프레임워크·런타임 선택, 구현·배포, 검증 증거와 변경 조건으로 내려가는 일곱 단계 판단 흐름",
            "loaded": true
          }
        ],
        "errors": [],
        "image_count": 7
      },
      {
        "route": "06-requirements-design/architecture-and-frameworks",
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
            "src": "/_astro/architecture-decision-layers.-gF1VM2w_Z2oxR7m.svg",
            "alt": "사용자 문제와 제약에서 책임·경계·상태, 품질 속성과 트레이드오프, 아키텍처 결정, 프레임워크·런타임 선택, 구현·배포, 검증 증거와 변경 조건으로 내려가는 일곱 단계 판단 흐름",
            "loaded": true
          }
        ],
        "errors": [],
        "image_count": 17
      },
      {
        "route": "06-requirements-design/adr-and-tradeoffs",
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
        "image_count": 8
      },
      {
        "route": "06-requirements-design/adr-and-tradeoffs",
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
        "image_count": 19
      },
      {
        "route": "06-requirements-design/architecture-and-frameworks",
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
            "src": "/_astro/architecture-decision-layers.-gF1VM2w_Z2oxR7m.svg",
            "alt": "사용자 문제와 제약에서 책임·경계·상태, 품질 속성과 트레이드오프, 아키텍처 결정, 프레임워크·런타임 선택, 구현·배포, 검증 증거와 변경 조건으로 내려가는 일곱 단계 판단 흐름",
            "loaded": true
          }
        ],
        "errors": [],
        "image_count": 7
      },
      {
        "route": "06-requirements-design/architecture-and-frameworks",
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
            "src": "/_astro/architecture-decision-layers.-gF1VM2w_Z2oxR7m.svg",
            "alt": "사용자 문제와 제약에서 책임·경계·상태, 품질 속성과 트레이드오프, 아키텍처 결정, 프레임워크·런타임 선택, 구현·배포, 검증 증거와 변경 조건으로 내려가는 일곱 단계 판단 흐름",
            "loaded": true
          }
        ],
        "errors": [],
        "image_count": 17
      }
    ]
  },
  "images": [
    {
      "id": "R18-PNG-01",
      "order": 1,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-1440-light-top.png",
      "sha256": "354807c836417037674746a3b53bea06f1e82736b65f5ac6b64c2e175194127b",
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
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R18-PNG-02",
      "order": 2,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-1440-light-item0-x0-y0.png",
      "sha256": "73825666be0150115d241febb08bd13269108e4c0a0197a577bbb6e65b12cf1a",
      "dimensions": {
        "width": 788,
        "height": 197
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-1440-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1931,
          "documentRange": [
            2041.421875,
            2238.921875
          ],
          "targetRange": [
            2041.421875,
            2238.921875
          ],
          "clip": {
            "x": 324,
            "y": 110.421875,
            "width": 788,
            "height": 197.5
          }
        }
      }
    },
    {
      "id": "R18-PNG-03",
      "order": 3,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-1440-light-item1-x0-y0.png",
      "sha256": "668f11f4921b8997653a67447254fc6a0eb17a4b7e39128cd77785261c4d50af",
      "dimensions": {
        "width": 788,
        "height": 591
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-1440-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2439,
          "documentRange": [
            2549.421875,
            3140.671875
          ],
          "targetRange": [
            2549.421875,
            3140.671875
          ],
          "clip": {
            "x": 324,
            "y": 110.421875,
            "width": 788,
            "height": 591.25
          }
        }
      }
    },
    {
      "id": "R18-PNG-04",
      "order": 4,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-1440-light-item2-x0-y0.png",
      "sha256": "2a9e0aa2cfab35cc00180415f4b8e07fd9660bbe6807453acb65e5ad4cf3d6df",
      "dimensions": {
        "width": 788,
        "height": 382
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-1440-light-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3990,
          "documentRange": [
            4100.171875,
            4482.453125
          ],
          "targetRange": [
            4100.171875,
            4482.453125
          ],
          "clip": {
            "x": 324,
            "y": 110.171875,
            "width": 788,
            "height": 382.28125
          }
        }
      }
    },
    {
      "id": "R18-PNG-05",
      "order": 5,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-1440-light-item3-x0-y0.png",
      "sha256": "5ad875754d42ef2862bfcda9206470bfafc5f30495b993e3be682ba51170132e",
      "dimensions": {
        "width": 788,
        "height": 382
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-1440-light-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 6161,
          "documentRange": [
            6271,
            6653.234375
          ],
          "targetRange": [
            6270.953125,
            6653.234375
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 382.234375
          }
        }
      }
    },
    {
      "id": "R18-PNG-06",
      "order": 6,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-1440-light-item4-x0-y0.png",
      "sha256": "a107986b8cb24a82728c5e4bd7c286319936ba3caba092f145cf4763ff1e6ff9",
      "dimensions": {
        "width": 788,
        "height": 761
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-1440-light-item4-x0-y0.png",
          "label": "item4",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 7421,
          "documentRange": [
            7531.328125,
            8292.328125
          ],
          "targetRange": [
            7531.328125,
            8292.328125
          ],
          "clip": {
            "x": 324,
            "y": 110.328125,
            "width": 788,
            "height": 761
          }
        }
      }
    },
    {
      "id": "R18-PNG-07",
      "order": 7,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-1440-light-item5-x0-y0.png",
      "sha256": "4989a9ce5e318e784c2e2bb47d0e7b849bc8251616c418368e72f1e8323023ff",
      "dimensions": {
        "width": 788,
        "height": 221
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-1440-light-item5-x0-y0.png",
          "label": "item5",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 8409,
          "documentRange": [
            8519,
            8740.828125
          ],
          "targetRange": [
            8518.828125,
            8740.828125
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 221.828125
          }
        }
      }
    },
    {
      "id": "R18-PNG-08",
      "order": 8,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-1440-light-item6-x0-y0.png",
      "sha256": "b8b24a74c40880235ecfac08751413bd81eb04537ffe93dcbcc83aeefea8d4bf",
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
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-1440-light-item6-x0-y0.png",
          "label": "item6",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 9440,
          "documentRange": [
            9550,
            9809.796875
          ],
          "targetRange": [
            9549.828125,
            9809.796875
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 259.796875
          }
        }
      }
    },
    {
      "id": "R18-PNG-09",
      "order": 9,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-top.png",
      "sha256": "98f261ba3b7edeb31a7f110fa32e18ff6b5ffdfd6537eff47f4b94d3f87b00b1",
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
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R18-PNG-10",
      "order": 10,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item0-x0-y0.png",
      "sha256": "9563fc47bae88087ceb74a95eec4cce19b14eebd0eff20e967a1f3ddef836907",
      "dimensions": {
        "width": 358,
        "height": 197
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2933,
          "documentRange": [
            3043,
            3240.453125
          ],
          "targetRange": [
            3042.953125,
            3240.453125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 197.453125
          }
        }
      }
    },
    {
      "id": "R18-PNG-11",
      "order": 11,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item1-x0-y0.png",
      "sha256": "c76bb6c6bb1d27ba2df4de4d5b8c608e6cf69a0c9fa2b86a137fb0042c336e91",
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
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3649,
          "documentRange": [
            3759,
            4483
          ],
          "targetRange": [
            3758.75,
            4639.609375
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
      "id": "R18-PNG-12",
      "order": 12,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item1-x0-y1.png",
      "sha256": "6a66a63a67c51f1c6e785e0b46102ff1e7d07edfb2149a351f190200f05b94c2",
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
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item1-x0-y1.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 4323,
          "documentRange": [
            4433,
            4639.609375
          ],
          "targetRange": [
            3758.75,
            4639.609375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 206.609375
          }
        }
      }
    },
    {
      "id": "R18-PNG-13",
      "order": 13,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item1-x1-y0.png",
      "sha256": "076a82cc359ed2a79959a781a6ca83e16705c9d227cf9041682ad909dc50f567",
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
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item1-x1-y0.png",
          "label": "item1",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 3649,
          "documentRange": [
            3759,
            4483
          ],
          "targetRange": [
            3758.75,
            4639.609375
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
      "id": "R18-PNG-14",
      "order": 14,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item1-x1-y1.png",
      "sha256": "a281f8ee1f581a8f77ccfe5c82133d210e60aba88b61e38d888fabc06ebc5901",
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
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item1-x1-y1.png",
          "label": "item1",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 4323,
          "documentRange": [
            4433,
            4639.609375
          ],
          "targetRange": [
            3758.75,
            4639.609375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 206.609375
          }
        }
      }
    },
    {
      "id": "R18-PNG-15",
      "order": 15,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item2-x0-y0.png",
      "sha256": "811a2a87ca5828a44050a864e0d1cc3f1b10789ab65a08ea7929fe7c2b454779",
      "dimensions": {
        "width": 358,
        "height": 566
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 6049,
          "documentRange": [
            6159,
            6725.46875
          ],
          "targetRange": [
            6158.890625,
            6725.46875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 566.46875
          }
        }
      }
    },
    {
      "id": "R18-PNG-16",
      "order": 16,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item2-x1-y0.png",
      "sha256": "f451650f77dbc56233b1f20ad38fd9a8e8ecab9aedb2816fb9d9d259e0375532",
      "dimensions": {
        "width": 358,
        "height": 566
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 6049,
          "documentRange": [
            6159,
            6725.46875
          ],
          "targetRange": [
            6158.890625,
            6725.46875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 566.46875
          }
        }
      }
    },
    {
      "id": "R18-PNG-17",
      "order": 17,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item3-x0-y0.png",
      "sha256": "ab5f45b76629751d1bda5d9a7c270d13d901dfb67e20b5c791ff59c6f77c647e",
      "dimensions": {
        "width": 358,
        "height": 592
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 9414,
          "documentRange": [
            9524.140625,
            10117.046875
          ],
          "targetRange": [
            9524.140625,
            10117.046875
          ],
          "clip": {
            "x": 16,
            "y": 110.140625,
            "width": 358,
            "height": 592.90625
          }
        }
      }
    },
    {
      "id": "R18-PNG-18",
      "order": 18,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item3-x1-y0.png",
      "sha256": "fb827d372667ca70cff4012469aad807344d6a588e985ae14d1be045a35384f4",
      "dimensions": {
        "width": 358,
        "height": 592
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item3-x1-y0.png",
          "label": "item3",
          "requestedScrollLeft": 26,
          "actualScrollLeft": 26,
          "pageScrollY": 9414,
          "documentRange": [
            9524.140625,
            10117.046875
          ],
          "targetRange": [
            9524.140625,
            10117.046875
          ],
          "clip": {
            "x": 16,
            "y": 110.140625,
            "width": 358,
            "height": 592.90625
          }
        }
      }
    },
    {
      "id": "R18-PNG-19",
      "order": 19,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item4-x0-y0.png",
      "sha256": "1c2ca13a22f91c9d2e230fd4cef6ba041b176f508e3715b468eb3acc1f22e7ee",
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
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item4-x0-y0.png",
          "label": "item4",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 11451,
          "documentRange": [
            11561,
            12285
          ],
          "targetRange": [
            11560.828125,
            12337.828125
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
      "id": "R18-PNG-20",
      "order": 20,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item4-x0-y1.png",
      "sha256": "ddf8ddb830dae71e773f74c8469b5f7902aac9ac2e2d490b7d5e9151d7d5e6b5",
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
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item4-x0-y1.png",
          "label": "item4",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 12125,
          "documentRange": [
            12235,
            12337.828125
          ],
          "targetRange": [
            11560.828125,
            12337.828125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 102.828125
          }
        }
      }
    },
    {
      "id": "R18-PNG-21",
      "order": 21,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item4-x1-y0.png",
      "sha256": "8e9d7f0a3d97c4634372ae2c999a351546339678506fb245e488809c79305194",
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
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item4-x1-y0.png",
          "label": "item4",
          "requestedScrollLeft": 240,
          "actualScrollLeft": 240,
          "pageScrollY": 11451,
          "documentRange": [
            11561,
            12285
          ],
          "targetRange": [
            11560.828125,
            12337.828125
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
      "id": "R18-PNG-22",
      "order": 22,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item4-x1-y1.png",
      "sha256": "20cd1fe3c1e2399f8101b10811511ada97574f2125278459c3f7a7dceb2d5dbd",
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
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item4-x1-y1.png",
          "label": "item4",
          "requestedScrollLeft": 240,
          "actualScrollLeft": 240,
          "pageScrollY": 12125,
          "documentRange": [
            12235,
            12337.828125
          ],
          "targetRange": [
            11560.828125,
            12337.828125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 102.828125
          }
        }
      }
    },
    {
      "id": "R18-PNG-23",
      "order": 23,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item5-x0-y0.png",
      "sha256": "4a0e0bd98f89004ea264d501eabcc96d4bb1298fe8bf51e15a8ec6f81264a348",
      "dimensions": {
        "width": 358,
        "height": 238
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item5-x0-y0.png",
          "label": "item5",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 12522,
          "documentRange": [
            12632.125,
            12870.125
          ],
          "targetRange": [
            12632.125,
            12870.125
          ],
          "clip": {
            "x": 16,
            "y": 110.125,
            "width": 358,
            "height": 238
          }
        }
      }
    },
    {
      "id": "R18-PNG-24",
      "order": 24,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item5-x1-y0.png",
      "sha256": "55d69953e4776a90243dc3cb3d507425c30a95fb3ab143640bdc765ec7abdaf9",
      "dimensions": {
        "width": 358,
        "height": 238
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item5-x1-y0.png",
          "label": "item5",
          "requestedScrollLeft": 356,
          "actualScrollLeft": 356,
          "pageScrollY": 12522,
          "documentRange": [
            12632.125,
            12870.125
          ],
          "targetRange": [
            12632.125,
            12870.125
          ],
          "clip": {
            "x": 16,
            "y": 110.125,
            "width": 358,
            "height": 238
          }
        }
      }
    },
    {
      "id": "R18-PNG-25",
      "order": 25,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item5-x2-y0.png",
      "sha256": "a286f23cbfd65cfa489b4c40af1b630d2d3fcf525501317ad7e4f84a823f6ad4",
      "dimensions": {
        "width": 358,
        "height": 238
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item5-x2-y0.png",
          "label": "item5",
          "requestedScrollLeft": 388,
          "actualScrollLeft": 388,
          "pageScrollY": 12522,
          "documentRange": [
            12632.125,
            12870.125
          ],
          "targetRange": [
            12632.125,
            12870.125
          ],
          "clip": {
            "x": 16,
            "y": 110.125,
            "width": 358,
            "height": 238
          }
        }
      }
    },
    {
      "id": "R18-PNG-26",
      "order": 26,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item6-x0-y0.png",
      "sha256": "da3f7a962af50cf62cc59390e4f735ce63fb6d210ccd27e539d45883c2bb928a",
      "dimensions": {
        "width": 358,
        "height": 286
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item6-x0-y0.png",
          "label": "item6",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 14013,
          "documentRange": [
            14123,
            14409.015625
          ],
          "targetRange": [
            14122.71875,
            14409.015625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 286.015625
          }
        }
      }
    },
    {
      "id": "R18-PNG-27",
      "order": 27,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item6-x1-y0.png",
      "sha256": "6757bcb82722dd70ee67f2bdae00040cda8cd9a2f69f1071dbb5c343dd73f84b",
      "dimensions": {
        "width": 358,
        "height": 286
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/adr-and-tradeoffs-390-dark-item6-x1-y0.png",
          "label": "item6",
          "requestedScrollLeft": 282,
          "actualScrollLeft": 282,
          "pageScrollY": 14013,
          "documentRange": [
            14123,
            14409.015625
          ],
          "targetRange": [
            14122.71875,
            14409.015625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 286.015625
          }
        }
      }
    },
    {
      "id": "R18-PNG-28",
      "order": 28,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-1440-light-top.png",
      "sha256": "491f127759b58f1821b8d98e606ab2ab86338fd6c72709afdc92b9c70e4e731f",
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
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R18-PNG-29",
      "order": 29,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-1440-light-item0-x0-y0.png",
      "sha256": "2d1b9ac941b595e15a862ef05272e390962c9c62a00ccd334a5c8a165e17a45d",
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
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-1440-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1577,
          "documentRange": [
            1687,
            2008.875
          ],
          "targetRange": [
            1686.921875,
            2008.875
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 321.875
          }
        }
      }
    },
    {
      "id": "R18-PNG-30",
      "order": 30,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-1440-light-item1-x0-y0.png",
      "sha256": "522a87783c7a580cedaab0a4e27300177cb0947d85fc53e24a399964931dc352",
      "dimensions": {
        "width": 560,
        "height": 772
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-1440-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2181,
          "documentRange": [
            2291.375,
            3063.375
          ],
          "targetRange": [
            2291.375,
            3063.375
          ],
          "clip": {
            "x": 324,
            "y": 110.375,
            "width": 560,
            "height": 772
          }
        }
      }
    },
    {
      "id": "R18-PNG-31",
      "order": 31,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-1440-light-item2-x0-y0.png",
      "sha256": "48547e240ce1b36b194abaf93d89643c4f84f11d8337e904f6110a31097b623c",
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
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-1440-light-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3572,
          "documentRange": [
            3682,
            4073.484375
          ],
          "targetRange": [
            3681.875,
            4073.484375
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 391.484375
          }
        }
      }
    },
    {
      "id": "R18-PNG-32",
      "order": 32,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-1440-light-item3-x0-y0.png",
      "sha256": "283dc8e19178f10cec4e687d353fb57577d1d3b8335510988df03f3498bef24a",
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
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-1440-light-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 4402,
          "documentRange": [
            4512,
            4903.59375
          ],
          "targetRange": [
            4511.984375,
            4903.59375
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 391.59375
          }
        }
      }
    },
    {
      "id": "R18-PNG-33",
      "order": 33,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-1440-light-item4-x0-y0.png",
      "sha256": "d7c1713a8a072688ada3cf5a4e040f6cbe5f8baa96b9f3a4fa12a404b4c01812",
      "dimensions": {
        "width": 788,
        "height": 287
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-1440-light-item4-x0-y0.png",
          "label": "item4",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 7474,
          "documentRange": [
            7584.09375,
            7871.09375
          ],
          "targetRange": [
            7584.09375,
            7871.09375
          ],
          "clip": {
            "x": 324,
            "y": 110.09375,
            "width": 788,
            "height": 287
          }
        }
      }
    },
    {
      "id": "R18-PNG-34",
      "order": 34,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-1440-light-item4-x1-y0.png",
      "sha256": "5e2d9c5cb84e3f4486cfd2a1fe4f362427bfe74b58cdfffe60f24bfa1c790642",
      "dimensions": {
        "width": 788,
        "height": 287
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-1440-light-item4-x1-y0.png",
          "label": "item4",
          "requestedScrollLeft": 42,
          "actualScrollLeft": 42,
          "pageScrollY": 7474,
          "documentRange": [
            7584.09375,
            7871.09375
          ],
          "targetRange": [
            7584.09375,
            7871.09375
          ],
          "clip": {
            "x": 324,
            "y": 110.09375,
            "width": 788,
            "height": 287
          }
        }
      }
    },
    {
      "id": "R18-PNG-35",
      "order": 35,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-top.png",
      "sha256": "a1e137400a7ab38ef6b3e276b5965d3bb9d5cdd4af5d29ec9161b5476e8cf30e",
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
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R18-PNG-36",
      "order": 36,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item0-x0-y0.png",
      "sha256": "a83c77cbaed157ab69202e9646b07977b6f78e29f033db0603ffdf21ac6355ee",
      "dimensions": {
        "width": 358,
        "height": 716
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2419,
          "documentRange": [
            2529.453125,
            3246.328125
          ],
          "targetRange": [
            2529.453125,
            3246.328125
          ],
          "clip": {
            "x": 16,
            "y": 110.453125,
            "width": 358,
            "height": 716.875
          }
        }
      }
    },
    {
      "id": "R18-PNG-37",
      "order": 37,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item0-x0-y1.png",
      "sha256": "ae8f4f1025882b003cba9b46102dce223d1b291651388859ff42f13d7c9d2850",
      "dimensions": {
        "width": 358,
        "height": 43
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item0-x0-y1.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3093,
          "documentRange": [
            3203,
            3246.328125
          ],
          "targetRange": [
            2529.453125,
            3246.328125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 43.328125
          }
        }
      }
    },
    {
      "id": "R18-PNG-38",
      "order": 38,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item0-x1-y0.png",
      "sha256": "2ed7ed8f4a9b12238e26a702e178cbeca3bb52b04f0cea227b7b429967e4fafe",
      "dimensions": {
        "width": 358,
        "height": 716
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item0-x1-y0.png",
          "label": "item0",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 2419,
          "documentRange": [
            2529.453125,
            3246.328125
          ],
          "targetRange": [
            2529.453125,
            3246.328125
          ],
          "clip": {
            "x": 16,
            "y": 110.453125,
            "width": 358,
            "height": 716.875
          }
        }
      }
    },
    {
      "id": "R18-PNG-39",
      "order": 39,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item0-x1-y1.png",
      "sha256": "92c9b23d666571e6007d9b84a6c9af07c1035c1fbb6f71b7cfff96d578d71173",
      "dimensions": {
        "width": 358,
        "height": 43
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item0-x1-y1.png",
          "label": "item0",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 3093,
          "documentRange": [
            3203,
            3246.328125
          ],
          "targetRange": [
            2529.453125,
            3246.328125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 43.328125
          }
        }
      }
    },
    {
      "id": "R18-PNG-40",
      "order": 40,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item1-x0-y0.png",
      "sha256": "3fa367dc7c05bd8e2db115ccb8733dab4209da6afb7711669a538dfed244f3ee",
      "dimensions": {
        "width": 358,
        "height": 493
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3487,
          "documentRange": [
            3597,
            4090.140625
          ],
          "targetRange": [
            3596.625,
            4090.140625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 493.140625
          }
        }
      }
    },
    {
      "id": "R18-PNG-41",
      "order": 41,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item2-x0-y0.png",
      "sha256": "01f0fbed1c3477170abce526f07b07911d6e3ff93c626fb95f15278658913350",
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
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 5093,
          "documentRange": [
            5203.234375,
            5927
          ],
          "targetRange": [
            5203.234375,
            6147.734375
          ],
          "clip": {
            "x": 16,
            "y": 110.234375,
            "width": 358,
            "height": 723.765625
          }
        }
      }
    },
    {
      "id": "R18-PNG-42",
      "order": 42,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item2-x0-y1.png",
      "sha256": "9cc93a164a7d648451231a5bb1a4570b3dc005e5e0ebb96e01415287ea9d8117",
      "dimensions": {
        "width": 358,
        "height": 270
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item2-x0-y1.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 5767,
          "documentRange": [
            5877,
            6147.734375
          ],
          "targetRange": [
            5203.234375,
            6147.734375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 270.734375
          }
        }
      }
    },
    {
      "id": "R18-PNG-43",
      "order": 43,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item2-x1-y0.png",
      "sha256": "60517a66de246e6fcee8c1506df20e5591f0baa497554493b85bdb74ff4139f4",
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
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 26,
          "actualScrollLeft": 26,
          "pageScrollY": 5093,
          "documentRange": [
            5203.234375,
            5927
          ],
          "targetRange": [
            5203.234375,
            6147.734375
          ],
          "clip": {
            "x": 16,
            "y": 110.234375,
            "width": 358,
            "height": 723.765625
          }
        }
      }
    },
    {
      "id": "R18-PNG-44",
      "order": 44,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item2-x1-y1.png",
      "sha256": "05debe57a71b0f095c5285e994a70fbbf1f69408e9b70a1acf2e20ee3ee5a339",
      "dimensions": {
        "width": 358,
        "height": 270
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item2-x1-y1.png",
          "label": "item2",
          "requestedScrollLeft": 26,
          "actualScrollLeft": 26,
          "pageScrollY": 5767,
          "documentRange": [
            5877,
            6147.734375
          ],
          "targetRange": [
            5203.234375,
            6147.734375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 270.734375
          }
        }
      }
    },
    {
      "id": "R18-PNG-45",
      "order": 45,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item3-x0-y0.png",
      "sha256": "81d354058c4cefd44add1425fe4d8b853bc089e758d4a18600ef68c77a20c9e2",
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
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 6775,
          "documentRange": [
            6885,
            7609
          ],
          "targetRange": [
            6884.828125,
            7750.34375
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
      "id": "R18-PNG-46",
      "order": 46,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item3-x0-y1.png",
      "sha256": "ba364c5b41fad1ad415e3d6a0ddd03bc4572fd3a9911cd82a42c085cc7214c8a",
      "dimensions": {
        "width": 358,
        "height": 191
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item3-x0-y1.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 7449,
          "documentRange": [
            7559,
            7750.34375
          ],
          "targetRange": [
            6884.828125,
            7750.34375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 191.34375
          }
        }
      }
    },
    {
      "id": "R18-PNG-47",
      "order": 47,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item3-x1-y0.png",
      "sha256": "e8c191758df33f48af7a18aceb12ae7aa400960fa870efb1997c1c36236bf55c",
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
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item3-x1-y0.png",
          "label": "item3",
          "requestedScrollLeft": 26,
          "actualScrollLeft": 26,
          "pageScrollY": 6775,
          "documentRange": [
            6885,
            7609
          ],
          "targetRange": [
            6884.828125,
            7750.34375
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
      "id": "R18-PNG-48",
      "order": 48,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item3-x1-y1.png",
      "sha256": "f047eb5e7e84915616046ac7ce64d7c0188e864cb696aa31a1c8c997b38cd72a",
      "dimensions": {
        "width": 358,
        "height": 191
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item3-x1-y1.png",
          "label": "item3",
          "requestedScrollLeft": 26,
          "actualScrollLeft": 26,
          "pageScrollY": 7449,
          "documentRange": [
            7559,
            7750.34375
          ],
          "targetRange": [
            6884.828125,
            7750.34375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 191.34375
          }
        }
      }
    },
    {
      "id": "R18-PNG-49",
      "order": 49,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item4-x0-y0.png",
      "sha256": "0ad878179271d907f95b168d1f80a0a520df9089d5b61932f97ff5495dafefa2",
      "dimensions": {
        "width": 358,
        "height": 287
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item4-x0-y0.png",
          "label": "item4",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 12059,
          "documentRange": [
            12169.015625,
            12456.015625
          ],
          "targetRange": [
            12169.015625,
            12456.015625
          ],
          "clip": {
            "x": 16,
            "y": 110.015625,
            "width": 358,
            "height": 287
          }
        }
      }
    },
    {
      "id": "R18-PNG-50",
      "order": 50,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item4-x1-y0.png",
      "sha256": "d9a0ad8df0159b0220ddbbb9db18ccfb7791bd386c9abbcfc2faca8c0b359bf6",
      "dimensions": {
        "width": 358,
        "height": 287
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item4-x1-y0.png",
          "label": "item4",
          "requestedScrollLeft": 356,
          "actualScrollLeft": 356,
          "pageScrollY": 12059,
          "documentRange": [
            12169.015625,
            12456.015625
          ],
          "targetRange": [
            12169.015625,
            12456.015625
          ],
          "clip": {
            "x": 16,
            "y": 110.015625,
            "width": 358,
            "height": 287
          }
        }
      }
    },
    {
      "id": "R18-PNG-51",
      "order": 51,
      "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item4-x2-y0.png",
      "sha256": "8d4e598f7427f04a06a53a3dc0541b0a30a5f839c0f9ba29306b1f33aea3253e",
      "dimensions": {
        "width": 358,
        "height": 287
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-pilot/architecture-and-frameworks-390-dark-item4-x2-y0.png",
          "label": "item4",
          "requestedScrollLeft": 472,
          "actualScrollLeft": 472,
          "pageScrollY": 12059,
          "documentRange": [
            12169.015625,
            12456.015625
          ],
          "targetRange": [
            12169.015625,
            12456.015625
          ],
          "clip": {
            "x": 16,
            "y": 110.015625,
            "width": 358,
            "height": 287
          }
        }
      }
    },
    {
      "id": "R18-PNG-52",
      "order": 52,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-1440-dark-top.png",
      "sha256": "cfdf97e0ad10d49db5524969d6bb25c9f39ad1ff69eea5e3d6d4be91ea8db8d5",
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
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R18-PNG-53",
      "order": 53,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-1440-dark-item0-x0-y0.png",
      "sha256": "e927377d97c9a931c114ccd4061cfe053470d6967cad1c7534e122aecaeefdab",
      "dimensions": {
        "width": 788,
        "height": 197
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-1440-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1931,
          "documentRange": [
            2041.421875,
            2238.921875
          ],
          "targetRange": [
            2041.421875,
            2238.921875
          ],
          "clip": {
            "x": 324,
            "y": 110.421875,
            "width": 788,
            "height": 197.5
          }
        }
      }
    },
    {
      "id": "R18-PNG-54",
      "order": 54,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-1440-dark-item1-x0-y0.png",
      "sha256": "bcddfe70de5c00a2536103f406fb95e1f445a7f6170b2480aecc13775543e302",
      "dimensions": {
        "width": 788,
        "height": 591
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-1440-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2439,
          "documentRange": [
            2549.421875,
            3140.671875
          ],
          "targetRange": [
            2549.421875,
            3140.671875
          ],
          "clip": {
            "x": 324,
            "y": 110.421875,
            "width": 788,
            "height": 591.25
          }
        }
      }
    },
    {
      "id": "R18-PNG-55",
      "order": 55,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-1440-dark-item2-x0-y0.png",
      "sha256": "27a3ec44b9bf62db1b26cb96a6af2ffbef6a0039155cba4b5f6c6e3ecbe3df43",
      "dimensions": {
        "width": 788,
        "height": 382
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-1440-dark-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3990,
          "documentRange": [
            4100.171875,
            4482.453125
          ],
          "targetRange": [
            4100.171875,
            4482.453125
          ],
          "clip": {
            "x": 324,
            "y": 110.171875,
            "width": 788,
            "height": 382.28125
          }
        }
      }
    },
    {
      "id": "R18-PNG-56",
      "order": 56,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-1440-dark-item3-x0-y0.png",
      "sha256": "3326e74171da7b51fa85abf1e34515461f393af44dd9ebf43402c7e0353c77b9",
      "dimensions": {
        "width": 788,
        "height": 382
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-1440-dark-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 6161,
          "documentRange": [
            6271,
            6653.234375
          ],
          "targetRange": [
            6270.953125,
            6653.234375
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 382.234375
          }
        }
      }
    },
    {
      "id": "R18-PNG-57",
      "order": 57,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-1440-dark-item4-x0-y0.png",
      "sha256": "cb2b8b93f993d0d37276fc9c4440fa43a1ce0146e1e6b4271e6570f800663986",
      "dimensions": {
        "width": 788,
        "height": 761
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-1440-dark-item4-x0-y0.png",
          "label": "item4",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 7421,
          "documentRange": [
            7531.328125,
            8292.328125
          ],
          "targetRange": [
            7531.328125,
            8292.328125
          ],
          "clip": {
            "x": 324,
            "y": 110.328125,
            "width": 788,
            "height": 761
          }
        }
      }
    },
    {
      "id": "R18-PNG-58",
      "order": 58,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-1440-dark-item5-x0-y0.png",
      "sha256": "fedb381dc6f1fefee59df04868b88f304fd7e6a211f49d1b5b5005052e028d40",
      "dimensions": {
        "width": 788,
        "height": 221
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-1440-dark-item5-x0-y0.png",
          "label": "item5",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 8409,
          "documentRange": [
            8519,
            8740.828125
          ],
          "targetRange": [
            8518.828125,
            8740.828125
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 221.828125
          }
        }
      }
    },
    {
      "id": "R18-PNG-59",
      "order": 59,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-1440-dark-item6-x0-y0.png",
      "sha256": "4464ae1086259b1496a14495fbdceeb43320ffd4c94927ba69ce1cc12dd5f359",
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
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-1440-dark-item6-x0-y0.png",
          "label": "item6",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 9440,
          "documentRange": [
            9550,
            9809.796875
          ],
          "targetRange": [
            9549.828125,
            9809.796875
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 259.796875
          }
        }
      }
    },
    {
      "id": "R18-PNG-60",
      "order": 60,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-top.png",
      "sha256": "7860df586f9f07754554ebeeed3ac017342b128a7a9696f7b219888c6d96d318",
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
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R18-PNG-61",
      "order": 61,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item0-x0-y0.png",
      "sha256": "6981ba8e017bb060689f494ebcfdc8d5a068b5393ae4f54116cde5cd4a6e7a30",
      "dimensions": {
        "width": 358,
        "height": 197
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2933,
          "documentRange": [
            3043,
            3240.453125
          ],
          "targetRange": [
            3042.953125,
            3240.453125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 197.453125
          }
        }
      }
    },
    {
      "id": "R18-PNG-62",
      "order": 62,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item1-x0-y0.png",
      "sha256": "085635bf00812579e9677f1e0dcb3cc43bce74b759e45160d1f36490eaa3b0f0",
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
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3649,
          "documentRange": [
            3759,
            4483
          ],
          "targetRange": [
            3758.75,
            4639.609375
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
      "id": "R18-PNG-63",
      "order": 63,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item1-x0-y1.png",
      "sha256": "29abc1349d27fcfb0b1c1dae5278bd522904b569177d2641ebd6539576be81fd",
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
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item1-x0-y1.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 4323,
          "documentRange": [
            4433,
            4639.609375
          ],
          "targetRange": [
            3758.75,
            4639.609375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 206.609375
          }
        }
      }
    },
    {
      "id": "R18-PNG-64",
      "order": 64,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item1-x1-y0.png",
      "sha256": "019371ab01039a7531b8c0cf001e8cee5645ea5717fdeddea4c372b91636b54e",
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
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item1-x1-y0.png",
          "label": "item1",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 3649,
          "documentRange": [
            3759,
            4483
          ],
          "targetRange": [
            3758.75,
            4639.609375
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
      "id": "R18-PNG-65",
      "order": 65,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item1-x1-y1.png",
      "sha256": "c4cb0ebe375804ac2fcb200aac1694cbed9bcbffe092f9304f613f7f011332af",
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
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item1-x1-y1.png",
          "label": "item1",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 4323,
          "documentRange": [
            4433,
            4639.609375
          ],
          "targetRange": [
            3758.75,
            4639.609375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 206.609375
          }
        }
      }
    },
    {
      "id": "R18-PNG-66",
      "order": 66,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item2-x0-y0.png",
      "sha256": "fdb03ddb21d4fac9fbd50cfbc3e839b2d05023ee026998f255497ece92dd2e0f",
      "dimensions": {
        "width": 358,
        "height": 566
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 6049,
          "documentRange": [
            6159,
            6725.46875
          ],
          "targetRange": [
            6158.890625,
            6725.46875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 566.46875
          }
        }
      }
    },
    {
      "id": "R18-PNG-67",
      "order": 67,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item2-x1-y0.png",
      "sha256": "f8b1281f5027b4ebcb37beb7675f4130681f3da6898fb7d90ae832ce8c88e36e",
      "dimensions": {
        "width": 358,
        "height": 566
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 6049,
          "documentRange": [
            6159,
            6725.46875
          ],
          "targetRange": [
            6158.890625,
            6725.46875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 566.46875
          }
        }
      }
    },
    {
      "id": "R18-PNG-68",
      "order": 68,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item3-x0-y0.png",
      "sha256": "ed08e8e8567f1bdcf42db8bae914b23d8951cb2d672ff974fe5763bdea0b8f82",
      "dimensions": {
        "width": 358,
        "height": 592
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 9414,
          "documentRange": [
            9524.140625,
            10117.046875
          ],
          "targetRange": [
            9524.140625,
            10117.046875
          ],
          "clip": {
            "x": 16,
            "y": 110.140625,
            "width": 358,
            "height": 592.90625
          }
        }
      }
    },
    {
      "id": "R18-PNG-69",
      "order": 69,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item3-x1-y0.png",
      "sha256": "fb8f7a9dbae3232891d01f8c11fb42fac9f1ee318cb46cf5090bf2de57126a98",
      "dimensions": {
        "width": 358,
        "height": 592
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item3-x1-y0.png",
          "label": "item3",
          "requestedScrollLeft": 26,
          "actualScrollLeft": 26,
          "pageScrollY": 9414,
          "documentRange": [
            9524.140625,
            10117.046875
          ],
          "targetRange": [
            9524.140625,
            10117.046875
          ],
          "clip": {
            "x": 16,
            "y": 110.140625,
            "width": 358,
            "height": 592.90625
          }
        }
      }
    },
    {
      "id": "R18-PNG-70",
      "order": 70,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item4-x0-y0.png",
      "sha256": "ee21d50ab9024f12ab6c0ec2bc79964a4f361e08de839536f647cfb10016c134",
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
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item4-x0-y0.png",
          "label": "item4",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 11451,
          "documentRange": [
            11561,
            12285
          ],
          "targetRange": [
            11560.828125,
            12337.828125
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
      "id": "R18-PNG-71",
      "order": 71,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item4-x0-y1.png",
      "sha256": "5b89e5e85843b94a01a8be5bdc763989d6f4c099dd6752ff02addc2c42729941",
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
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item4-x0-y1.png",
          "label": "item4",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 12125,
          "documentRange": [
            12235,
            12337.828125
          ],
          "targetRange": [
            11560.828125,
            12337.828125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 102.828125
          }
        }
      }
    },
    {
      "id": "R18-PNG-72",
      "order": 72,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item4-x1-y0.png",
      "sha256": "3dd2f7a7dad14465af648379b9e48dc745b57aa858db47287c113c93c067bbb1",
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
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item4-x1-y0.png",
          "label": "item4",
          "requestedScrollLeft": 240,
          "actualScrollLeft": 240,
          "pageScrollY": 11451,
          "documentRange": [
            11561,
            12285
          ],
          "targetRange": [
            11560.828125,
            12337.828125
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
      "id": "R18-PNG-73",
      "order": 73,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item4-x1-y1.png",
      "sha256": "043d367b4384f041df6afc146f85e400f5dd08c4b91d89fb0e7683dc72d7cc05",
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
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item4-x1-y1.png",
          "label": "item4",
          "requestedScrollLeft": 240,
          "actualScrollLeft": 240,
          "pageScrollY": 12125,
          "documentRange": [
            12235,
            12337.828125
          ],
          "targetRange": [
            11560.828125,
            12337.828125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 102.828125
          }
        }
      }
    },
    {
      "id": "R18-PNG-74",
      "order": 74,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item5-x0-y0.png",
      "sha256": "4e44c4d10c470ecc811571aa2d1a51e2985cec059d965c70e5b8d3ce02a8fc24",
      "dimensions": {
        "width": 358,
        "height": 238
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item5-x0-y0.png",
          "label": "item5",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 12522,
          "documentRange": [
            12632.125,
            12870.125
          ],
          "targetRange": [
            12632.125,
            12870.125
          ],
          "clip": {
            "x": 16,
            "y": 110.125,
            "width": 358,
            "height": 238
          }
        }
      }
    },
    {
      "id": "R18-PNG-75",
      "order": 75,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item5-x1-y0.png",
      "sha256": "2d304be29847396679b52e5f9d4d7df1776668a943dd12eb3228d574d62f99e6",
      "dimensions": {
        "width": 358,
        "height": 238
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item5-x1-y0.png",
          "label": "item5",
          "requestedScrollLeft": 356,
          "actualScrollLeft": 356,
          "pageScrollY": 12522,
          "documentRange": [
            12632.125,
            12870.125
          ],
          "targetRange": [
            12632.125,
            12870.125
          ],
          "clip": {
            "x": 16,
            "y": 110.125,
            "width": 358,
            "height": 238
          }
        }
      }
    },
    {
      "id": "R18-PNG-76",
      "order": 76,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item5-x2-y0.png",
      "sha256": "49e666fabbd5eb86cea886b0b2a4bf23d450d442c37b264a3d02761b264a17dc",
      "dimensions": {
        "width": 358,
        "height": 238
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item5-x2-y0.png",
          "label": "item5",
          "requestedScrollLeft": 388,
          "actualScrollLeft": 388,
          "pageScrollY": 12522,
          "documentRange": [
            12632.125,
            12870.125
          ],
          "targetRange": [
            12632.125,
            12870.125
          ],
          "clip": {
            "x": 16,
            "y": 110.125,
            "width": 358,
            "height": 238
          }
        }
      }
    },
    {
      "id": "R18-PNG-77",
      "order": 77,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item6-x0-y0.png",
      "sha256": "2941f6bfad070847f92ced953f71e4bb778178637cb1b38ac65f531e8604f11c",
      "dimensions": {
        "width": 358,
        "height": 286
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item6-x0-y0.png",
          "label": "item6",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 14013,
          "documentRange": [
            14123,
            14409.015625
          ],
          "targetRange": [
            14122.71875,
            14409.015625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 286.015625
          }
        }
      }
    },
    {
      "id": "R18-PNG-78",
      "order": 78,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item6-x1-y0.png",
      "sha256": "5bd682629512fa635717775a1f069b0d8ea321aabc9addedbccc4281fdc31454",
      "dimensions": {
        "width": 358,
        "height": 286
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "06-requirements-design/adr-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/adr-and-tradeoffs-390-light-item6-x1-y0.png",
          "label": "item6",
          "requestedScrollLeft": 282,
          "actualScrollLeft": 282,
          "pageScrollY": 14013,
          "documentRange": [
            14123,
            14409.015625
          ],
          "targetRange": [
            14122.71875,
            14409.015625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 286.015625
          }
        }
      }
    },
    {
      "id": "R18-PNG-79",
      "order": 79,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-1440-dark-top.png",
      "sha256": "20c04a1bacf8ffa7144afc5fc758d0565e443022aacf9d6e2f6fb08420d86aec",
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
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R18-PNG-80",
      "order": 80,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-1440-dark-item0-x0-y0.png",
      "sha256": "5e8b2140b994023438203cd67b34e003decf4b9512de195d464c2ea32c6eab21",
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
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-1440-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1577,
          "documentRange": [
            1687,
            2008.875
          ],
          "targetRange": [
            1686.921875,
            2008.875
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 321.875
          }
        }
      }
    },
    {
      "id": "R18-PNG-81",
      "order": 81,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-1440-dark-item1-x0-y0.png",
      "sha256": "294981bd69b0400dddf10ff67bdd1549d6abe7e76609aaafe3ead26922c6839f",
      "dimensions": {
        "width": 560,
        "height": 772
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-1440-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2181,
          "documentRange": [
            2291.375,
            3063.375
          ],
          "targetRange": [
            2291.375,
            3063.375
          ],
          "clip": {
            "x": 324,
            "y": 110.375,
            "width": 560,
            "height": 772
          }
        }
      }
    },
    {
      "id": "R18-PNG-82",
      "order": 82,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-1440-dark-item2-x0-y0.png",
      "sha256": "4c43d5479ff64e44c6af98a7eaf58bc377dbcb6d65d19a86e29dbd55eb316855",
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
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-1440-dark-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3572,
          "documentRange": [
            3682,
            4073.484375
          ],
          "targetRange": [
            3681.875,
            4073.484375
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 391.484375
          }
        }
      }
    },
    {
      "id": "R18-PNG-83",
      "order": 83,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-1440-dark-item3-x0-y0.png",
      "sha256": "a50316d008edaeaa21480b3723d886aefb4fdf2d2b5818e0b525f5a1223dc2d0",
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
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-1440-dark-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 4402,
          "documentRange": [
            4512,
            4903.59375
          ],
          "targetRange": [
            4511.984375,
            4903.59375
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 391.59375
          }
        }
      }
    },
    {
      "id": "R18-PNG-84",
      "order": 84,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-1440-dark-item4-x0-y0.png",
      "sha256": "bae1582f1338f4a35c48837fe762146d720a5085c445acc01a7acca4a9870a60",
      "dimensions": {
        "width": 788,
        "height": 287
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-1440-dark-item4-x0-y0.png",
          "label": "item4",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 7474,
          "documentRange": [
            7584.09375,
            7871.09375
          ],
          "targetRange": [
            7584.09375,
            7871.09375
          ],
          "clip": {
            "x": 324,
            "y": 110.09375,
            "width": 788,
            "height": 287
          }
        }
      }
    },
    {
      "id": "R18-PNG-85",
      "order": 85,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-1440-dark-item4-x1-y0.png",
      "sha256": "5b40f5cbd69ec4b8c80e56a0832c6ba441e139691e79d0fa7ddf5be3e7be588d",
      "dimensions": {
        "width": 788,
        "height": 287
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-1440-dark-item4-x1-y0.png",
          "label": "item4",
          "requestedScrollLeft": 42,
          "actualScrollLeft": 42,
          "pageScrollY": 7474,
          "documentRange": [
            7584.09375,
            7871.09375
          ],
          "targetRange": [
            7584.09375,
            7871.09375
          ],
          "clip": {
            "x": 324,
            "y": 110.09375,
            "width": 788,
            "height": 287
          }
        }
      }
    },
    {
      "id": "R18-PNG-86",
      "order": 86,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-top.png",
      "sha256": "5026002953d988d606d28141e0824ab813a20507373963a9ab7046ca063741df",
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
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R18-PNG-87",
      "order": 87,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item0-x0-y0.png",
      "sha256": "1668ec5111eba9058cd9750b505cc9c8cbf3f45d62fdb75947827f6460c59b95",
      "dimensions": {
        "width": 358,
        "height": 716
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2419,
          "documentRange": [
            2529.453125,
            3246.328125
          ],
          "targetRange": [
            2529.453125,
            3246.328125
          ],
          "clip": {
            "x": 16,
            "y": 110.453125,
            "width": 358,
            "height": 716.875
          }
        }
      }
    },
    {
      "id": "R18-PNG-88",
      "order": 88,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item0-x0-y1.png",
      "sha256": "ed57d628f7bdbc4c4ca409fc14a6f58854affde53104002b1e6fb5dcaa5ae6e9",
      "dimensions": {
        "width": 358,
        "height": 43
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item0-x0-y1.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3093,
          "documentRange": [
            3203,
            3246.328125
          ],
          "targetRange": [
            2529.453125,
            3246.328125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 43.328125
          }
        }
      }
    },
    {
      "id": "R18-PNG-89",
      "order": 89,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item0-x1-y0.png",
      "sha256": "09e983f94700e597231b9d5d5420ea5e62a7aab7294d17335443ec196b71017c",
      "dimensions": {
        "width": 358,
        "height": 716
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item0-x1-y0.png",
          "label": "item0",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 2419,
          "documentRange": [
            2529.453125,
            3246.328125
          ],
          "targetRange": [
            2529.453125,
            3246.328125
          ],
          "clip": {
            "x": 16,
            "y": 110.453125,
            "width": 358,
            "height": 716.875
          }
        }
      }
    },
    {
      "id": "R18-PNG-90",
      "order": 90,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item0-x1-y1.png",
      "sha256": "2b12708602ff98b87c05794bb3cf9a5d6ed1da5b6527d39cd20117f9d2799186",
      "dimensions": {
        "width": 358,
        "height": 43
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item0-x1-y1.png",
          "label": "item0",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 3093,
          "documentRange": [
            3203,
            3246.328125
          ],
          "targetRange": [
            2529.453125,
            3246.328125
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 43.328125
          }
        }
      }
    },
    {
      "id": "R18-PNG-91",
      "order": 91,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item1-x0-y0.png",
      "sha256": "2b354db30e547f4d5eebda7ec47ee68d7be3c48e90a346ab7428e218ba8a26c2",
      "dimensions": {
        "width": 358,
        "height": 493
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3487,
          "documentRange": [
            3597,
            4090.140625
          ],
          "targetRange": [
            3596.625,
            4090.140625
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 493.140625
          }
        }
      }
    },
    {
      "id": "R18-PNG-92",
      "order": 92,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item2-x0-y0.png",
      "sha256": "8ac8830608cd0cfc4568e78db0d20ce017d4f26b989376fc4a9d3c6e8ec56370",
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
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 5093,
          "documentRange": [
            5203.234375,
            5927
          ],
          "targetRange": [
            5203.234375,
            6147.734375
          ],
          "clip": {
            "x": 16,
            "y": 110.234375,
            "width": 358,
            "height": 723.765625
          }
        }
      }
    },
    {
      "id": "R18-PNG-93",
      "order": 93,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item2-x0-y1.png",
      "sha256": "92f64a09e9495071cf7b4dc1029a755ab5c582764e695aa48f5ff3ede1f7f515",
      "dimensions": {
        "width": 358,
        "height": 270
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item2-x0-y1.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 5767,
          "documentRange": [
            5877,
            6147.734375
          ],
          "targetRange": [
            5203.234375,
            6147.734375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 270.734375
          }
        }
      }
    },
    {
      "id": "R18-PNG-94",
      "order": 94,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item2-x1-y0.png",
      "sha256": "f9c2b488d270d1f1585effdf400b5ebe2c59b43ffa912ea8f22cba7b6c123086",
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
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item2-x1-y0.png",
          "label": "item2",
          "requestedScrollLeft": 26,
          "actualScrollLeft": 26,
          "pageScrollY": 5093,
          "documentRange": [
            5203.234375,
            5927
          ],
          "targetRange": [
            5203.234375,
            6147.734375
          ],
          "clip": {
            "x": 16,
            "y": 110.234375,
            "width": 358,
            "height": 723.765625
          }
        }
      }
    },
    {
      "id": "R18-PNG-95",
      "order": 95,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item2-x1-y1.png",
      "sha256": "fdc79c8102ecb984f670ce0b8e5687399eee17614da102a1c9cb0e15e3105366",
      "dimensions": {
        "width": 358,
        "height": 270
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item2-x1-y1.png",
          "label": "item2",
          "requestedScrollLeft": 26,
          "actualScrollLeft": 26,
          "pageScrollY": 5767,
          "documentRange": [
            5877,
            6147.734375
          ],
          "targetRange": [
            5203.234375,
            6147.734375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 270.734375
          }
        }
      }
    },
    {
      "id": "R18-PNG-96",
      "order": 96,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item3-x0-y0.png",
      "sha256": "e0b8b9ea9337bfa1bee94807454a62461f32e864269933e862db44c12206d169",
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
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 6775,
          "documentRange": [
            6885,
            7609
          ],
          "targetRange": [
            6884.828125,
            7750.34375
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
      "id": "R18-PNG-97",
      "order": 97,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item3-x0-y1.png",
      "sha256": "bbe2eb114ac57d4dec4a38724e4d93f8cceeeac27271d3ae6942e3af4a8035a8",
      "dimensions": {
        "width": 358,
        "height": 191
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item3-x0-y1.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 7449,
          "documentRange": [
            7559,
            7750.34375
          ],
          "targetRange": [
            6884.828125,
            7750.34375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 191.34375
          }
        }
      }
    },
    {
      "id": "R18-PNG-98",
      "order": 98,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item3-x1-y0.png",
      "sha256": "f30cfb16975c2651f7d1d1454e1227faa0155ae3538ca90a0371b232bdfbaa3c",
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
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item3-x1-y0.png",
          "label": "item3",
          "requestedScrollLeft": 26,
          "actualScrollLeft": 26,
          "pageScrollY": 6775,
          "documentRange": [
            6885,
            7609
          ],
          "targetRange": [
            6884.828125,
            7750.34375
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
      "id": "R18-PNG-99",
      "order": 99,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item3-x1-y1.png",
      "sha256": "422afa4bd3381eb34f1b006013b7fc49da58a5ba8e01e9035f4a5b2a74339506",
      "dimensions": {
        "width": 358,
        "height": 191
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item3-x1-y1.png",
          "label": "item3",
          "requestedScrollLeft": 26,
          "actualScrollLeft": 26,
          "pageScrollY": 7449,
          "documentRange": [
            7559,
            7750.34375
          ],
          "targetRange": [
            6884.828125,
            7750.34375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 191.34375
          }
        }
      }
    },
    {
      "id": "R18-PNG-100",
      "order": 100,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item4-x0-y0.png",
      "sha256": "087904d3c46b60111d4596ac5254b8e54e8f9e4235e71938e7f1b7dfec8f90b8",
      "dimensions": {
        "width": 358,
        "height": 287
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item4-x0-y0.png",
          "label": "item4",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 12059,
          "documentRange": [
            12169.015625,
            12456.015625
          ],
          "targetRange": [
            12169.015625,
            12456.015625
          ],
          "clip": {
            "x": 16,
            "y": 110.015625,
            "width": 358,
            "height": 287
          }
        }
      }
    },
    {
      "id": "R18-PNG-101",
      "order": 101,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item4-x1-y0.png",
      "sha256": "9e1564aee85b0db47becb882a17c870e1077bbf722a1135b7f2d99375e975962",
      "dimensions": {
        "width": 358,
        "height": 287
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item4-x1-y0.png",
          "label": "item4",
          "requestedScrollLeft": 356,
          "actualScrollLeft": 356,
          "pageScrollY": 12059,
          "documentRange": [
            12169.015625,
            12456.015625
          ],
          "targetRange": [
            12169.015625,
            12456.015625
          ],
          "clip": {
            "x": 16,
            "y": 110.015625,
            "width": 358,
            "height": 287
          }
        }
      }
    },
    {
      "id": "R18-PNG-102",
      "order": 102,
      "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item4-x2-y0.png",
      "sha256": "4607983c93c971a22b0ecb275d74d5d9643fa3c6aa2c22a9fc9ee4271d10cf21",
      "dimensions": {
        "width": 358,
        "height": 287
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "06-requirements-design/architecture-and-frameworks",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r18-inputs-20261115-corrected-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r18-inputs-20261115-corrected-remaining/architecture-and-frameworks-390-light-item4-x2-y0.png",
          "label": "item4",
          "requestedScrollLeft": 472,
          "actualScrollLeft": 472,
          "pageScrollY": 12059,
          "documentRange": [
            12169.015625,
            12456.015625
          ],
          "targetRange": [
            12169.015625,
            12456.015625
          ],
          "clip": {
            "x": 16,
            "y": 110.015625,
            "width": 358,
            "height": 287
          }
        }
      }
    }
  ]
}
```
<!-- m5-r18-request:data:end -->
