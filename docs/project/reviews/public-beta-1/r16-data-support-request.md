# R16 백엔드 지원 — 고정 검토 요청

기준 commit 7008805f175e6f932d16544833e4c4bef2d6963e, 입력 고정2026-11-15. 세 대상 원고 전체와 full_text_paths 전체, context_excerpts의 명시 범위를 실제 읽습니다. 브리프·용어집·R01 발췌와 R04 원고/검토 이력은 일관성과 이월 finding 문맥이며 완료 행 전체의 새 재검토가 아닙니다.

Controller·작성자·이전 대화와 분리된 fresh gpt-6-astra/high 저장 세션입니다. 공식 ChatGPT 구독 경로·실제 모델/effort·history0·readOnly/network false·도구/MCP 비활성을 실행에서 확인하고 같은 저장 ID의 실제 이력 복구로 후속 검토합니다. R02 승계 예외·API 키·추가 크레딧·전역 설정/인증 변경은 허용하지 않습니다.

공통 계약 C01~C12·한국어 여섯 절·원고별9항목18점·치명 기준을 적용하며 묶음 평균으로 미달을 숨기지 않습니다. 신뢰 경계/서버 집행, 모델·스키마·키·제약·동시성, 호환 가능한 마이그레이션/백필/실행 중 쓰기/복구, 권위 상태·세션·캐시·큐·재전달/멱등/순서/부분 실패를 대조하세요. R04-M05의 host_id/participant_id와 host_user_id/participant_user_id 대응은 아직 이월된 질문이며 해소 여부를 직접 판정하세요. 모든 기타 새 결함도 제한 없이 보고합니다. 세 원고에는 소유 그림·SVG·Mermaid가 없지만 표·코드·프롬프트의 실제 이미지 검토는 필수입니다.

새 R16 직접 근거와 같은 실행의 R04 권한·세션·트랜잭션 근거를 제공합니다. OWASP 기존 AJAX URL의 반환 제목 변경과 RabbitMQ 첫 추출의 누락된 목록을 다른 도구로 보충한 범위를 구분합니다. 과거 날짜·실패를 현재 성공으로 소급하지 않습니다. 원고의 SQL·DB/큐·운영 마이그레이션은 실행하지 않았습니다.

세 경로×1440/390×light/dark12상태의 실제PNG142개를 localImage/detail original로 전달합니다. 대표1440light/390dark를 먼저 생성하고 controller가 긴 제목6개·SQL3개·긴 표6개·프롬프트5개인20개를 실제 읽은 뒤 반대테마로 확장했습니다. 이후4개를 추가 판독했습니다. controller 대표24개 판독을142개 완독으로 계산하지 않습니다. Reviewer는142개 모두 실제 이미지 입력으로 읽고 ID별 관측과 판독 한계를 남겨야 합니다. 상단은 viewport, 표/코드는 locator.screenshot으로 경계를 캡처하며 가로스크롤 구간을 연결합니다. 원고 전체 텍스트는 별도로 완독합니다. 각상태 HTTP200/H1하나/초안/theme정상·이미지요소0·전역overflow/errors0, 내부스크롤 요청/실제값 차이0입니다. 키보드·스크린리더·1024·전체사이트는 새 확인하지 않았습니다.

입력 준비는 원고PASS/review/M5/ready/공개승인이 아닙니다. 도구·쓰기·셸·웹·MCP·위임 없이 결과만 반환하세요. 준비 검사기/테스트의 C/I/M와 체크포인트 적합성은 원고 판정과 구분하세요. 개인home절대경로·전체비공개세션ID를 출력하지 마세요. 최초 정상 결과는 수정 전에 별도 커밋하고 전송 후 불변성 감사를 수행합니다.

<!-- m5-r16-request:data:start -->
```json
{
  "schema_version": 1,
  "review_id": "R16",
  "baseline_commit": "7008805f175e6f932d16544833e4c4bef2d6963e",
  "targets": [
    "src/content/docs/03-full-stack/frontend-backend-boundary.md",
    "src/content/docs/04-backend-data/data-model-schema-migration.md",
    "src/content/docs/04-backend-data/state-cache-queue.md"
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
    "src/content/docs/03-full-stack/frontend-backend-boundary.md",
    "src/content/docs/04-backend-data/data-model-schema-migration.md",
    "src/content/docs/04-backend-data/state-cache-queue.md",
    "research/public-beta-review-source-excerpts/r16-data-support-2026-11-15.md",
    "research/public-beta-review-source-excerpts/r04-api-data-auth-2026-11-15.md",
    "docs/project/reviews/public-beta-1/r04-api-data-auth-codex-review.md",
    "docs/project/reviews/public-beta-1/r04-api-data-auth-adjudication.md",
    "docs/project/reviews/public-beta-1/r04-api-data-auth-codex-rereview.md",
    "src/content/docs/04-backend-data/api-database-auth.md",
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
      "sha256": "352a05983e2dacfc0907c32d4795373173b8708f34bb2b745cb3d3efa2e37b10",
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
      "sha256": "46cdc5dcbee86ba8f471f29980c3ecfcddfc9d9ba29fb77750c8babc58e474a0",
      "segments": [
        {
          "start_line": 305,
          "end_line": 310,
          "text": "| `03-full-stack/client-server-full-stack.md` | https://www.postgresql.org/docs/current/tutorial-transactions.html, https://www.postgresql.org/docs/current/transaction-iso.html, https://www.postgresql.org/docs/current/ddl-constraints.html | 2026-08-13, PostgreSQL 18 current | PostgreSQL 18의 all-or-nothing 트랜잭션, 동시 접근에서의 격리 수준·직렬화 이상, 데이터 제약 범위를 모임 참가의 원자성·정원·중복 검증 예시로 사용. 특정 격리 수준·잠금·제약 표현을 다른 데이터베이스의 기본 보장으로 확대하지 않음 |\n| `03-full-stack/frontend-backend-boundary.md` | https://www.rfc-editor.org/rfc/rfc9110.html | 2026-08-13, IETF Standards Track RFC 9110 | client가 method·target·fields·content가 있는 request를 보내고 server가 status·fields·content가 있는 response를 보내는 역할 범위. 프런트엔드·백엔드 책임을 HTTP 역할과 완전히 같은 뜻으로 확대하지 않음 |\n| `03-full-stack/frontend-backend-boundary.md` | https://cheatsheetseries.owasp.org/cheatsheets/AJAX_Security_Cheat_Sheet.html, https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html | 2026-08-13 | OWASP 현행 공식 Cheat Sheet의 사용자 통제 client-side logic, 중요 업무 규칙의 server-side 재검증, deny by default, 매 요청의 객체·기능 권한 확인 범위. 특정 프레임워크의 구현이나 실제 모임 서비스의 인가 성공으로 확대하지 않음 |\n| `03-full-stack/frontend-backend-boundary.md` | https://developer.chrome.com/docs/devtools/sources | 2026-08-13 | Chrome DevTools 공식 Sources 패널에서 페이지가 불러온 문서·스타일·스크립트·이미지와 deployed code를 확인하는 범위. 브라우저에 전달된 자산을 비밀 은닉 경계로 보지 않되 원본 저장소 전체가 공개된다는 뜻으로 확대하지 않음 |\n| `03-full-stack/frontend-backend-boundary.md` | 저장소 내부 `research/meeting-webapp-case-brief.md` | 2026-08-10 | W-01 공개 조회, W-02 주최자 소유권, W-03 자신의 참가·취소, W-04 인증·인가·중복·모집 상태·정원·동시 요청을 프런트엔드 안내와 서버·데이터 최종 집행 경계에 적용하는 교육용 범위. 실제 API·데이터베이스·배포 성공 근거로 사용하지 않음 |\n| `03-full-stack/http-request-response.md` | https://developer.mozilla.org/en-US/docs/Web/HTTP | 2026-08-04 | 요청·응답 구성, HTTP와 HTTPS의 기본 경계, 메서드의 안전성과 멱등성, 상태 코드 범주와 재시도 설명 |"
        },
        {
          "start_line": 328,
          "end_line": 340,
          "text": "| `04-backend-data/api-database-auth.md` | 저장소 내부 `research/meeting-api-database-auth-research-brief.md`, `research/meeting-webapp-case-brief.md` | 2026-08-10 | 기존 OpenAPI·OWASP·NIST·IETF·PostgreSQL 18·MDN 출처 ID의 확인 범위를 W-02 주최자 소유권, W-03 자신의 참가·취소, W-04 중복·모집 상태·정원·동시 요청·트랜잭션과 commit 뒤 응답 유실 판단에 적용하는 범위. 새 제품 출처가 필요하지 않으며 특정 제품의 구현 방법이나 실제 서비스 동작의 근거로 사용하지 않음 |\n| `04-backend-data/data-model-schema-migration.md` | https://www.postgresql.org/docs/18/ddl-basics.html, https://www.postgresql.org/docs/18/ddl-constraints.html | 2026-08-13, PostgreSQL 18 current | PostgreSQL 18의 테이블·열·타입과 NOT NULL·CHECK·UNIQUE·PRIMARY KEY·FOREIGN KEY 제약을 개체·속성·관계·키·불변식의 관계형 스키마 예시에 적용. 관계형 구조 하나를 모든 데이터 모델의 유일한 표현으로, 제약을 업무 인가·정원 동시성 전체의 보장으로 확대하지 않음 |\n| `04-backend-data/data-model-schema-migration.md` | https://www.postgresql.org/docs/18/ddl-alter.html | 2026-08-13, PostgreSQL 18 current | PostgreSQL 18의 열·제약 추가·변경·삭제와 명령별 제품 동작을 기존 구조를 단계적으로 바꾸는 예시에 적용. 특정 DDL의 잠금·재작성·실행 시간을 측정 없이 단정하거나 다른 데이터베이스의 동작으로 일반화하지 않음 |\n| `04-backend-data/data-model-schema-migration.md` | https://www.postgresql.org/docs/18/tutorial-transactions.html, https://www.postgresql.org/docs/18/transaction-iso.html | 2026-08-13, PostgreSQL 18 current | PostgreSQL 18의 원자적 트랜잭션·commit·rollback과 동시 트랜잭션 격리·재시도 범위를 마이그레이션 단계와 사용자 쓰기 공존 위험에 적용. 트랜잭션 `ROLLBACK`을 이미 확정된 운영 마이그레이션 전체의 무손실 복구와 같은 뜻으로 확대하지 않음 |\n| `04-backend-data/data-model-schema-migration.md` | https://martinfowler.com/bliki/ParallelChange.html | 2026-08-13 확인, Danilo Sato, 2014-05-13 | Parallel Change가 하위 호환되지 않는 인터페이스 변경을 expand·migrate·contract 세 단계로 나누고, expand에서 구·신 인터페이스를 함께 지원하며, 사용처를 점진적으로 옮긴 뒤 옛 계약을 제거하는 범위. 이를 모든 스키마 변경의 유일한 절차나 특정 데이터베이스의 무중단 보장으로 확대하지 않음 |\n| `04-backend-data/data-model-schema-migration.md` | https://martinfowler.com/articles/continuousIntegration.html | 2026-08-13 확인, Martin Fowler, 현행 개정본 2024-01-18 | 데이터베이스 필드 변경의 Parallel Change 예시에서 새 필드 추가, 구·신 필드 이중 쓰기, 기존 데이터 복사, 새 필드 읽기, 옛 필드 제거를 가역적인 작은 단계로 나누는 범위. 이 예시가 모든 데이터 변환의 값 검증·성능·잠금·외부 부작용 복구를 자동 보장한다고 확대하지 않음 |\n| `04-backend-data/data-model-schema-migration.md` | https://martinfowler.com/articles/evodb.html | 2026-08-13 확인, Pramod Sadalage·Martin Fowler, 2016-05 | Evolutionary Database Design의 스키마·데이터·데이터 접근 코드 변경 결합, 대표 데이터로 마이그레이션 테스트, 구·신 데이터베이스 버전을 함께 읽는 접근 코드, rolling deployment에서 복수 애플리케이션 버전과 하위 호환 스키마를 지원하는 범위. 특정 제품·데이터 규모·조직에서 같은 결과나 무손실 롤백을 보장한다고 확대하지 않음 |\n| `04-backend-data/data-model-schema-migration.md` | 저장소 내부 `research/meeting-webapp-case-brief.md` | 2026-08-10 | W-01 모임, W-02 주최자, W-03 참가 관계와 W-04 중복·모집 상태·정원·동시 요청 불변식을 개체·관계·키·제약·마이그레이션 검증의 교육용 사례에 적용. 실제 서비스·데이터베이스 적용·백필·복구 성공의 근거로 사용하지 않음 |\n| `04-backend-data/state-cache-queue.md` | https://www.rfc-editor.org/rfc/rfc9111.html | 2026-08-13, RFC 9111 HTTP Caching, Internet Standard STD 98 (June 2022) | HTTP 캐시 응답의 현재 나이·최신성 수명·fresh/stale·재검증 범위를 파생 응답의 신선도 판단에 적용. HTTP 캐시 규칙을 애플리케이션 메모리 캐시·데이터베이스 읽기 사본·모든 CDN의 내부 정책으로 확대하지 않음 |\n| `04-backend-data/state-cache-queue.md` | https://www.rabbitmq.com/docs/reliability, https://www.rabbitmq.com/docs/queues | 2026-08-13, RabbitMQ 공식 현행 문서의 판본 비고정 URL | 연결·채널 실패, consumer acknowledgement 전 미확인 전달의 requeue/redelivery 가능성, 생산자·소비자 확인과 복구, 큐 순서가 여러 요인의 영향을 받는 제품 범위를 중복·재전달·순서·재처리 판단에 적용. RabbitMQ의 보장을 모든 메시징 제품이나 외부 부작용의 exactly-once 완료로 일반화하지 않음 |\n| `04-backend-data/state-cache-queue.md` | https://www.postgresql.org/docs/18/tutorial-transactions.html, https://www.postgresql.org/docs/18/transaction-iso.html, https://www.postgresql.org/docs/18/ddl-constraints.html | 2026-08-13, PostgreSQL 18 current | PostgreSQL 18의 commit된 트랜잭션·동시 접근 격리·제약 범위를 모임 참가 데이터의 권위 상태와 불변식 재조회 예시에 적용. PostgreSQL 데이터베이스와 외부 메시지 발행을 하나의 자동 원자 트랜잭션으로 간주하거나 다른 데이터베이스의 보장으로 확대하지 않음 |\n| `04-backend-data/state-cache-queue.md` | 저장소 내부 `research/meeting-webapp-case-brief.md`, `research/stock-dashboard-case-brief.md` | 2026-08-10 | 모임 웹앱의 `events`·`registrations` 권위 상태·정원·중복·동시 요청과 첫 범위의 알림 비목표, 교육용 `EDU-FIXTURE`의 공개 버전·값 상태·신선도·마지막 정상 버전을 서로 분리한 사례에 적용. 큐를 첫 캡스톤의 필수 구조로 추가하거나 fixture를 실제 시장·시세·투자·권리의 근거로 사용하지 않음 |\n| `05-frontend/browser-dom-rendering.md` | https://developer.mozilla.org/en-US/curriculum/ | 2026-08-04 | HTML·CSS·JavaScript의 책임, DOM과 브라우저 렌더링, 개발자 도구와 프런트엔드 검증 범위 |"
        },
        {
          "start_line": 462,
          "end_line": 464,
          "text": "- `04-backend-data/api-database-auth.md` (현재 주장 확인됨, 제품별 잔여는 비출판): 모임 참가 장의 열 가지 공개 주장과 W-02·W-03·W-04 계약은 위 장별 적용 기록의 OpenAPI·NIST·IETF·OWASP·PostgreSQL·MDN 직접 출처에 연결했습니다. 특정 동시성 기법·제품 동작은 현재 원고의 보편 주장으로 발행하지 않으며 실제 제품 세부를 캡스톤에 채택할 때 PBSG-020 또는 새 gap으로 등록합니다. 과거 조사·검토 지문은 역사 증거이고 새 독립 검토 전에는 `review`로 재승격하지 않습니다.\n- `03-full-stack/frontend-backend-boundary.md`, `04-backend-data/data-model-schema-migration.md`, `04-backend-data/state-cache-queue.md` (`PBSG-002`, 2026-08-13 확인): RFC 9110·9111, OWASP AJAX·Authorization, Chrome Sources, PostgreSQL 18의 테이블·제약·DDL 변경·트랜잭션·격리, RabbitMQ reliability·queue, Parallel Change와 Continuous Integration·Evolutionary Database Design의 1차 패턴 자료를 위 장별 적용 기록에 연결했습니다. PostgreSQL은 관계형 구조·제약·ALTER·트랜잭션·격리의 제품 동작만, Parallel Change는 expand·migrate·contract와 구·신 계약 공존·점진 전환만, Continuous Integration의 데이터베이스 필드 예시는 새 필드·이중 쓰기·기존 데이터 복사·새 읽기·옛 필드 제거만, Evolutionary Database Design은 스키마·데이터·접근 코드 변경·마이그레이션 테스트·복수 애플리케이션 버전의 하위 호환 스키마만 직접 뒷받침합니다. 이 묶음을 다른 데이터베이스·큐의 동작, 모든 변환의 정확성, 무중단·무손실 복구, 외부 부작용의 정확히 한 번 완료로 일반화하거나 cache·queue·outbox를 첫 모임 캡스톤의 필수 구조로 만들지 않으며, 실제 서비스·데이터베이스·메시지 처리 성공을 주장하지 않습니다.\n- `05-frontend/browser-dom-rendering.md` (`PBSG-024`, 2026-08-13 확인): WHATWG HTML·DOM, CSSWG CSSOM Editor's Draft, Chrome DevTools Network·DOM·CSS·Rendering과 W3C WCAG 2.2를 위 장별 적용 기록에 연결했습니다. URL·네트워크·HTML 파싱·DOM·스타일·렌더링 기회·이벤트와 상태의 개념 흐름, View Source·응답 원문·live DOM·Computed 값·픽셀의 증거 차이, `img`·`iframe` 지연 로딩과 접근성 경계를 직접 뒷받침합니다. 이를 모든 엔진의 내부 직렬 파이프라인·스레드·최적화, 모든 라이브러리의 lazy loading, 임시 DOM 편집의 소스 변경, 한 Chrome·기기 확인의 호환성·WCAG 완료로 일반화하지 않습니다."
        },
        {
          "start_line": 498,
          "end_line": 500,
          "text": "\n현재 원고는 위 출처와 핸드북의 사례별 판단 절차를 한 문단에서 구분하며 원전의 장문·표·도표·구체 예시를 재현하지 않습니다. 따라서 `data-model-schema-migration.md`의 이 후보 위치는 no-change로 판정하되, 이 자체 감사는 법률 자문·권리 허가가 아니며 RIGHTS-01 전체를 닫지 않습니다.\n"
        }
      ]
    },
    {
      "path": "research/public-beta-source-gap-register.md",
      "sha256": "eefe11c1c41b74d3e01fa11dd403426584c4bb18dddbe8c1ca3782e4d05025bd",
      "segments": [
        {
          "start_line": 35,
          "end_line": 37,
          "text": "| PBSG-001 | PB-019 `abstraction-and-tradeoffs.md`; PB-022 `dependencies-package-managers-environments.md`; PB-024 `terminal-processes-ports.md` | 추상화의 비용, 의존성·패키지 관리자·잠금 파일·실행 환경의 책임, 터미널·프로세스·포트의 관계와 안전한 진단 | important | source-map의 확인된 소프트웨어공학 범위에 더해 언어 런타임·대표 패키지 관리자·운영체제·인터넷 표준의 공식 개념 및 진단 문서 | 2026-08-13 확인; 선택한 런타임·패키지 관리자·운영체제·셸·도구 버전 또는 표준 상태가 바뀌면 재확인 | confirmed | Task 12 | 한 생태계의 잠금·설치·포트 진단 동작을 모든 언어·운영체제·셸의 보편 규칙으로 확대하지 않습니다. |\n| PBSG-002 | PB-026 `frontend-backend-boundary.md`; PB-029 `data-model-schema-migration.md`; PB-030 `state-cache-queue.md` | 클라이언트와 서버의 신뢰 경계, 스키마 변경과 데이터 보존, 권위 원본·캐시·큐의 일관성 및 재시도 | important | RFC 9110·9111, OWASP AJAX·Authorization, Chrome DevTools, PostgreSQL 18의 테이블·제약·ALTER·트랜잭션·격리, RabbitMQ 공식 reliability·queue, Parallel Change·Continuous Integration·Evolutionary Database Design의 1차 패턴 자료 | 2026-08-13 확인; 웹 표준·데이터베이스·메시징 제품 또는 버전과 적용 구성이 바뀌면 재확인 | confirmed | Task 13 | 화면 검증을 보안 통제로 간주하거나 PostgreSQL·RabbitMQ 한 제품의 동작과 단계적 마이그레이션 패턴을 다른 데이터베이스·큐의 무중단·무손실·정확히 한 번 보장으로 단정하지 않습니다. |\n| PBSG-003 | PB-031 `accessibility-responsive-design.md`; PB-033 `ui-state-and-ux.md`; PB-034 `adr-and-tradeoffs.md`; PB-053 `analytics-dashboard-case-study.md` | 접근성·반응형 설계의 판단 기준, UI 상태와 오류 복구, ADR의 맥락·대안·결과·재검토 조건, 대시보드 차트·표·상태의 접근 가능한 대안 | important | 2026-08-13 확인: W3C WCAG 2.2 Recommendation과 비규범 Understanding·WAI Images 교육 자료, RFC 9110, Nygard ADR 원형, ISO/IEC/IEEE 42010:2022 공식 범위와 conceptual model | WCAG·HTTP·ADR 적용 범위 변경 시, 제품별 보조 기술·API·데이터·아키텍처 결정을 실제 채택할 때 재확인 | confirmed | Task 14; Task 18 | 일부 자동 검사·차트 대체 텍스트·특정 화면 폭을 접근성·반응형 적합 완료로, HTTP 멱등성을 모든 업무 재시도·복구로, ADR 원형과 핸드북 확장 필드를 모든 제품의 유일한 기준으로 확대하지 않습니다. |"
        },
        {
          "start_line": 100,
          "end_line": 102,
          "text": "- PBSG-023은 RFC 9110, WHATWG Fetch의 CORS protocol, W3C Mixed Content Candidate Recommendation Draft와 Chrome DevTools Network를 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. 원고는 preflight 실패와 본 요청 뒤 response sharing 실패를 구분하고, mixed content의 자원별 자동 업그레이드·차단 범위를 유지하며, CORS를 인증·인가·서버 간 차단이나 서버 미처리의 보편 증거로 사용하지 않습니다.\n- PBSG-002는 RFC 9110·9111, OWASP AJAX·Authorization, Chrome DevTools, PostgreSQL 18의 테이블·제약·ALTER·트랜잭션·격리, RabbitMQ reliability·queue와 Parallel Change·Continuous Integration·Evolutionary Database Design의 1차 패턴 자료를 2026-08-13에 직접 확인해 `confirmed`를 유지합니다. PostgreSQL은 관계형 구조·제품 동작만, Parallel Change는 expand·migrate·contract와 구·신 계약 공존만, Continuous Integration의 데이터베이스 필드 예시는 새 필드·이중 쓰기·기존 데이터 복사·새 읽기·옛 필드 제거만, Evolutionary Database Design은 스키마·데이터·접근 코드 변경·마이그레이션 테스트·복수 애플리케이션 버전의 하위 호환 스키마만 지원합니다. PB-026·029·030은 이 직접 범위를 각각 연결하며, 이를 다른 데이터베이스·큐의 무중단·무손실·정확히 한 번 완료나 실제 서비스 성공으로 일반화하지 않습니다.\n- 현재 집계는 `confirmed` 6개, `not-confirmed` 20개입니다. 미확인 위험 집계는 critical 2개·important 18개·normal 0개이며, 확인된 PBSG-001·002·006·021·022·023의 위험은 미확인 집계에서 제외합니다."
        },
        {
          "start_line": 159,
          "end_line": 161,
          "text": "|---|---|---|\n| PBCA-003 | PBSG-001, PBSG-002, PBSG-003, PBSG-004, PBSG-005 | Task 12; Task 13; Task 14; Task 15; Task 16 |\n| PBCA-004 | PBSG-007, PBSG-008, PBSG-009, PBSG-010 | Task 10; Task 14; Task 15; Task 16; Task 17 |"
        }
      ]
    },
    {
      "path": "docs/project/public-beta-content-audit.md",
      "sha256": "5b9bbec64eca339ee0b0a3c82be50c262120d6fe493c57e7963f79dc9215a608",
      "segments": [
        {
          "start_line": 52,
          "end_line": 58,
          "text": "| PB-025 | `src/content/docs/03-full-stack/client-server-full-stack.md` | core | 사용자 행동이 클라이언트·서버·데이터를 어떻게 통과하는가? | 풀스택 책임과 요청 흐름을 추적한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 13; Task 20 resolved | Task 13에서 RFC·OWASP·Chrome·Astro·PostgreSQL 18로 PBSG-022를 닫았습니다. 모임 사례·실패 경계는 유지하며 full-stack 그림의 외부 서비스 topology·marker·390px 판독성은 Task 20 `6b4ac94`와 실제 Chrome 18상태·Codex `PASS`로 교정됐습니다. |\n| PB-026 | `src/content/docs/03-full-stack/frontend-backend-boundary.md` | core | 프런트엔드와 백엔드의 책임·신뢰 경계는 어디인가? | 화면 검증과 서버 집행을 구분한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 13 | 표시·상호작용·클라이언트 상태와 서버 권위·업무 규칙·비밀·데이터 책임, 우회·동시 요청·응답 유실, 계약 중복·경계 이동 신호와 증거를 확장하고 PB-029·PB-030과 함께 PBSG-002의 공식 근거 묶음을 닫았습니다. |\n| PB-027 | `src/content/docs/03-full-stack/http-request-response.md` | core | HTTP 요청과 응답의 성공·실패를 어떻게 읽는가? | 메서드·상태 코드·본문·브라우저 정책을 함께 진단한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 13; Task 20 resolved | Task 13에서 RFC·WHATWG Fetch·W3C Mixed Content·Chrome으로 PBSG-023을 닫고 preflight·response sharing·자동 업그레이드·차단과 서버 처리 증거를 구분했습니다. full-stack 그림의 외부 서비스 topology·marker·390px 판독성은 Task 20 `6b4ac94`와 실제 Chrome 18상태·Codex `PASS`로 교정됐습니다. |\n| PB-028 | `src/content/docs/04-backend-data/api-database-auth.md` | core | API·데이터베이스·인증·인가는 어떤 책임을 맡는가? | 요청 처리·영속 상태·신원·권한을 분리해 검증한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 13; Task 20 resolved | Task 13에서 commit 뒤 응답 유실의 복구 오라클·데이터 불변식과 날짜 있는 현재 도구 참고편의 분리를 명시했습니다. 관계·트랜잭션·권한 실패·공식 출처 범위는 유지하며 API 그림 분할·동시 요청·390px 판독성은 Task 20 Fix Round 1 `1d19c15`과 실제 Chrome 6상태·same-reviewer `PASS`로 교정됐습니다. |\n| PB-029 | `src/content/docs/04-backend-data/data-model-schema-migration.md` | core | 데이터 모델·스키마·마이그레이션은 어떻게 연결되는가? | 구조 변경과 기존 데이터 보존을 판단한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 13 | 개체·속성·관계·키·제약에서 단계적 확장·백필·검증·전환·정리, 호환성 조합, 롤백·롤포워드, 데이터 검증 증거까지 모임 참가 관계로 확장했습니다. PostgreSQL 제품 동작과 Parallel Change·Continuous Integration·Evolutionary Database Design의 단계별 직접 지원 범위를 분리해 PB-026·PB-030과 함께 PBSG-002를 닫았습니다. |\n| PB-030 | `src/content/docs/04-backend-data/state-cache-queue.md` | core | 상태·캐시·큐를 언제 어디에 두는가? | 권위 원본·임시 사본·비동기 전달을 구분한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 13 | 권위 상태·파생 상태·세션·캐시·큐·이벤트의 책임, 신선도·중복·순서·재처리·최종적 일관성과 장애 뒤 원본 재확인을 모임 사례로 확장했습니다. 첫 캡스톤의 큐 비목표와 교육용 주가 fixture를 분리하고 PBSG-002를 공식 근거로 닫았습니다. |\n| PB-031 | `src/content/docs/05-frontend/accessibility-responsive-design.md` | core | 접근성과 반응형 설계는 어떻게 다르고 무엇을 확인하는가? | 의미·키보드·포커스·이름·대비·대체 텍스트·확대·리플로를 실제 흐름으로 검증한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 14 | 의미 구조부터 키보드·포커스·접근 가능한 이름·대비·색상 외 상태·대체 정보·확대·리플로·동적 복구와 자동·DOM·화면·보조 기술·서버 증거의 경계를 확장했습니다. PB-033·034와 대시보드 접근성 계약까지 직접 대조해 PBSG-003을 닫았습니다. |"
        }
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "sha256": "85b3f86531cbb1a763cc845364464335bcc664780dafa50ad4175825452255bc",
      "segments": [
        {
          "start_line": 331,
          "end_line": 359,
          "text": "    },\n    {\n      \"id\": \"R15\",\n      \"slug\": \"work-environment\",\n      \"method\": \"소묶음\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/02-work-environment/dependencies-package-managers-environments.md\", \"src/content/docs/02-work-environment/files-folders-paths.md\", \"src/content/docs/02-work-environment/terminal-processes-ports.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r15-work-environment-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r15-work-environment-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r15-work-environment-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r15-work-environment-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r15-work-environment-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r15-work-environment-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"603aef88db3219bd2177fcaebb5b9c272a65cf4d72eacb6d7518be319f74bddf\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important3-minor4-resolved\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"37fee9dd01ec240e3031675608cad065ec84c4ec51b52f2c33a40189eae02698\",\"current_target_sha256\":\"017796aa03a0ad2e37ac33bb8d847fe11fa351bfb7ca7249b105ac6597a2ebfe\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r15-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r15-work-environment-codex-rereview.md\",\"next_scope\":\"R16 pending; no M5/ready/public approval\",\"target_hashes\":[{\"path\":\"src/content/docs/02-work-environment/dependencies-package-managers-environments.md\",\"reviewed_sha256\":\"37fee9dd01ec240e3031675608cad065ec84c4ec51b52f2c33a40189eae02698\",\"current_sha256\":\"017796aa03a0ad2e37ac33bb8d847fe11fa351bfb7ca7249b105ac6597a2ebfe\"},{\"path\":\"src/content/docs/02-work-environment/files-folders-paths.md\",\"reviewed_sha256\":\"079ef0db8f988358f5963215466bddf5aba4789c4132c608b7c42b41cf90c44a\",\"current_sha256\":\"df9f467541e9628f9805a82490ab5c02f6bf45bb586b3938510df6596cec7cd8\"},{\"path\":\"src/content/docs/02-work-environment/terminal-processes-ports.md\",\"reviewed_sha256\":\"c34ec8f9634faa8156b8766d4c815dfab3958a775acba61e94de97c6204af444\",\"current_sha256\":\"e4eabb8996442e78dae3dc9639fa3c009c88fbca7c90f516b626a33d5e92ab1a\"}]}\n    },\n    {\n      \"id\": \"R16\",\n      \"slug\": \"data-support\",\n      \"method\": \"소묶음\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/03-full-stack/frontend-backend-boundary.md\", \"src/content/docs/04-backend-data/data-model-schema-migration.md\", \"src/content/docs/04-backend-data/state-cache-queue.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r16-data-support-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r16-data-support-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r16-data-support-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r16-data-support-codex-rereview.md\"\n    },\n    {\n      \"id\": \"R17\",\n      \"slug\": \"frontend-support\",\n      \"method\": \"소묶음\",\n      \"implementation_state\": \"작성·구현 완료\","
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
    "manifest_path": "output/playwright/r16-inputs-20261115-pilot/observations.json",
    "manifest_sha256": "d678937a75b90dffda7c58999af8937e82076265bb62a1c6463c794e7079bc5d",
    "additional_context_manifests": [
      {
        "path": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "sha256": "f258054759f78063e7b3271818350285cfffdd415af9a959173ae14c007205ff"
      }
    ],
    "input_files": [
      {
        "path": "src/content/docs/03-full-stack/frontend-backend-boundary.md",
        "sha256": "f643244a2f173566f431a2259266d4cc6ff216dcfdfef1fedafe9aff6185c28d"
      },
      {
        "path": "src/content/docs/04-backend-data/data-model-schema-migration.md",
        "sha256": "566f35486de2d8309c037d356d4a3966ffcaa2f83211b8e23187869184ee9435"
      },
      {
        "path": "src/content/docs/04-backend-data/state-cache-queue.md",
        "sha256": "f18323794003ce912c2e241a89818aad3d69f357e7884433fca87e49cc9f8b92"
      },
      {
        "path": "src/styles/custom.css",
        "sha256": "2236f2a8a9b30515cb641d48de7089d15590834766ada3f60de9f649ef36c137"
      }
    ],
    "states": [
      {
        "route": "03-full-stack/frontend-backend-boundary",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "title": "프런트엔드와 백엔드의 경계",
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "tables": [
          {
            "index": 0,
            "cols": 4,
            "client": 788,
            "scroll": 788,
            "rows": 5
          },
          {
            "index": 1,
            "cols": 4,
            "client": 788,
            "scroll": 788,
            "rows": 5
          },
          {
            "index": 2,
            "cols": 5,
            "client": 788,
            "scroll": 788,
            "rows": 7
          }
        ],
        "images": 0,
        "errors": [],
        "image_count": 7
      },
      {
        "route": "03-full-stack/frontend-backend-boundary",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "title": "프런트엔드와 백엔드의 경계",
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "tables": [
          {
            "index": 0,
            "cols": 4,
            "client": 358,
            "scroll": 520,
            "rows": 5
          },
          {
            "index": 1,
            "cols": 4,
            "client": 358,
            "scroll": 512,
            "rows": 5
          },
          {
            "index": 2,
            "cols": 5,
            "client": 358,
            "scroll": 640,
            "rows": 7
          }
        ],
        "images": 0,
        "errors": [],
        "image_count": 13
      },
      {
        "route": "04-backend-data/data-model-schema-migration",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "title": "데이터 모델·스키마·마이그레이션",
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "tables": [
          {
            "index": 0,
            "cols": 4,
            "client": 788,
            "scroll": 788,
            "rows": 6
          },
          {
            "index": 1,
            "cols": 4,
            "client": 788,
            "scroll": 788,
            "rows": 4
          },
          {
            "index": 2,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 5
          },
          {
            "index": 3,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 5
          },
          {
            "index": 4,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 8
          }
        ],
        "images": 0,
        "errors": [],
        "image_count": 10
      },
      {
        "route": "04-backend-data/data-model-schema-migration",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "title": "데이터 모델·스키마·마이그레이션",
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "tables": [
          {
            "index": 0,
            "cols": 4,
            "client": 358,
            "scroll": 545,
            "rows": 6
          },
          {
            "index": 1,
            "cols": 4,
            "client": 358,
            "scroll": 514,
            "rows": 4
          },
          {
            "index": 2,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 5
          },
          {
            "index": 3,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 5
          },
          {
            "index": 4,
            "cols": 3,
            "client": 358,
            "scroll": 386,
            "rows": 8
          }
        ],
        "images": 0,
        "errors": [],
        "image_count": 18
      },
      {
        "route": "04-backend-data/state-cache-queue",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "title": "상태·캐시·큐",
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "tables": [
          {
            "index": 0,
            "cols": 4,
            "client": 788,
            "scroll": 788,
            "rows": 7
          },
          {
            "index": 1,
            "cols": 4,
            "client": 788,
            "scroll": 788,
            "rows": 7
          },
          {
            "index": 2,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 6
          },
          {
            "index": 3,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 5
          },
          {
            "index": 4,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 5
          },
          {
            "index": 5,
            "cols": 4,
            "client": 788,
            "scroll": 788,
            "rows": 7
          }
        ],
        "images": 0,
        "errors": [],
        "image_count": 8
      },
      {
        "route": "04-backend-data/state-cache-queue",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "title": "상태·캐시·큐",
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "tables": [
          {
            "index": 0,
            "cols": 4,
            "client": 358,
            "scroll": 600,
            "rows": 7
          },
          {
            "index": 1,
            "cols": 4,
            "client": 358,
            "scroll": 534,
            "rows": 7
          },
          {
            "index": 2,
            "cols": 3,
            "client": 358,
            "scroll": 417,
            "rows": 6
          },
          {
            "index": 3,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 5
          },
          {
            "index": 4,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 5
          },
          {
            "index": 5,
            "cols": 4,
            "client": 358,
            "scroll": 512,
            "rows": 7
          }
        ],
        "images": 0,
        "errors": [],
        "image_count": 15
      },
      {
        "route": "03-full-stack/frontend-backend-boundary",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "title": "프런트엔드와 백엔드의 경계",
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "tables": [
          {
            "index": 0,
            "cols": 4,
            "client": 788,
            "scroll": 788,
            "rows": 5
          },
          {
            "index": 1,
            "cols": 4,
            "client": 788,
            "scroll": 788,
            "rows": 5
          },
          {
            "index": 2,
            "cols": 5,
            "client": 788,
            "scroll": 788,
            "rows": 7
          }
        ],
        "images": 0,
        "errors": [],
        "image_count": 7
      },
      {
        "route": "03-full-stack/frontend-backend-boundary",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "title": "프런트엔드와 백엔드의 경계",
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "tables": [
          {
            "index": 0,
            "cols": 4,
            "client": 358,
            "scroll": 520,
            "rows": 5
          },
          {
            "index": 1,
            "cols": 4,
            "client": 358,
            "scroll": 512,
            "rows": 5
          },
          {
            "index": 2,
            "cols": 5,
            "client": 358,
            "scroll": 640,
            "rows": 7
          }
        ],
        "images": 0,
        "errors": [],
        "image_count": 13
      },
      {
        "route": "04-backend-data/data-model-schema-migration",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "title": "데이터 모델·스키마·마이그레이션",
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "tables": [
          {
            "index": 0,
            "cols": 4,
            "client": 788,
            "scroll": 788,
            "rows": 6
          },
          {
            "index": 1,
            "cols": 4,
            "client": 788,
            "scroll": 788,
            "rows": 4
          },
          {
            "index": 2,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 5
          },
          {
            "index": 3,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 5
          },
          {
            "index": 4,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 8
          }
        ],
        "images": 0,
        "errors": [],
        "image_count": 10
      },
      {
        "route": "04-backend-data/data-model-schema-migration",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "title": "데이터 모델·스키마·마이그레이션",
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "tables": [
          {
            "index": 0,
            "cols": 4,
            "client": 358,
            "scroll": 545,
            "rows": 6
          },
          {
            "index": 1,
            "cols": 4,
            "client": 358,
            "scroll": 514,
            "rows": 4
          },
          {
            "index": 2,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 5
          },
          {
            "index": 3,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 5
          },
          {
            "index": 4,
            "cols": 3,
            "client": 358,
            "scroll": 386,
            "rows": 8
          }
        ],
        "images": 0,
        "errors": [],
        "image_count": 18
      },
      {
        "route": "04-backend-data/state-cache-queue",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "title": "상태·캐시·큐",
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "tables": [
          {
            "index": 0,
            "cols": 4,
            "client": 788,
            "scroll": 788,
            "rows": 7
          },
          {
            "index": 1,
            "cols": 4,
            "client": 788,
            "scroll": 788,
            "rows": 7
          },
          {
            "index": 2,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 6
          },
          {
            "index": 3,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 5
          },
          {
            "index": 4,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 5
          },
          {
            "index": 5,
            "cols": 4,
            "client": 788,
            "scroll": 788,
            "rows": 7
          }
        ],
        "images": 0,
        "errors": [],
        "image_count": 8
      },
      {
        "route": "04-backend-data/state-cache-queue",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "title": "상태·캐시·큐",
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "tables": [
          {
            "index": 0,
            "cols": 4,
            "client": 358,
            "scroll": 600,
            "rows": 7
          },
          {
            "index": 1,
            "cols": 4,
            "client": 358,
            "scroll": 534,
            "rows": 7
          },
          {
            "index": 2,
            "cols": 3,
            "client": 358,
            "scroll": 417,
            "rows": 6
          },
          {
            "index": 3,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 5
          },
          {
            "index": 4,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 5
          },
          {
            "index": 5,
            "cols": 4,
            "client": 358,
            "scroll": 512,
            "rows": 7
          }
        ],
        "images": 0,
        "errors": [],
        "image_count": 15
      }
    ]
  },
  "images": [
    {
      "id": "R16-PNG-01",
      "order": 1,
      "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-1440-light-top.png",
      "sha256": "64aa02074f9988105d4115b04823e3aa7bb576037e32c9e49b33ebfd4e5566a1",
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
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R16-PNG-02",
      "order": 2,
      "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-1440-light-pre0-part0.png",
      "sha256": "28652a8a2b45380740cf6ba669bd61361a48c95bd3948196223b7d58fc27ef9c",
      "dimensions": {
        "width": 788,
        "height": 223
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-1440-light-pre0-part0.png",
          "index": 0,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 433.421875,
            "width": 788,
            "height": 222,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-03",
      "order": 3,
      "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-1440-light-table1-part0.png",
      "sha256": "d1415b920e2266f4e4cbc9195c49c50bea5d2e08c2beee16ee7a3776500909cd",
      "dimensions": {
        "width": 788,
        "height": 455
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-1440-light-table1-part0.png",
          "index": 1,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 545.921875,
            "width": 788,
            "height": 453.59375,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-04",
      "order": 4,
      "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-1440-light-table2-part0.png",
      "sha256": "15f0c1c0858b347d3692586ff05fa46113abfb97f8789f15cd1a04971526c6fa",
      "dimensions": {
        "width": 788,
        "height": 323
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-1440-light-table2-part0.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 383.515625,
            "width": 788,
            "height": 321.953125,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-05",
      "order": 5,
      "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-1440-light-pre3-part0.png",
      "sha256": "24e9c1b218e65d86f75d74dd67e2357b69e8781d8b53258dca8be6076b749c80",
      "dimensions": {
        "width": 788,
        "height": 190
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-1440-light-pre3-part0.png",
          "index": 3,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 457.25,
            "width": 788,
            "height": 189,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-06",
      "order": 6,
      "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-1440-light-pre3-part1.png",
      "sha256": "848b95ee1066c2281de111b10c62f681ba3dfbcff730cebb13bfc44293543d42",
      "dimensions": {
        "width": 788,
        "height": 190
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-1440-light-pre3-part1.png",
          "index": 3,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 347,
          "actualScroll": 347,
          "bounds": {
            "x": 324,
            "y": 457.25,
            "width": 788,
            "height": 189,
            "scrollLeft": 347
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-07",
      "order": 7,
      "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-1440-light-table4-part0.png",
      "sha256": "a4a5ea569387b74027e4fc797a264162bd38795f371fc0d70bd1269f4997c348",
      "dimensions": {
        "width": 788,
        "height": 304
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-1440-light-table4-part0.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 5,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 392.25,
            "width": 788,
            "height": 303.296875,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-08",
      "order": 8,
      "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-390-dark-top.png",
      "sha256": "28f1f906238dfbbdabf5989cc52d248c34574cccd63a4b2e244abc3b1e6932f9",
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
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R16-PNG-09",
      "order": 9,
      "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-390-dark-pre0-part0.png",
      "sha256": "41aaf3cb4d014eaf1b0b242e0f78fe95a22eb7588a84e89b05edf397e5d971fb",
      "dimensions": {
        "width": 358,
        "height": 239
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-390-dark-pre0-part0.png",
          "index": 0,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 374.953125,
            "width": 358,
            "height": 238,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-10",
      "order": 10,
      "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-390-dark-pre0-part1.png",
      "sha256": "07b2819c083ab64ab5864854eec7da59856a511fe26979dfe51a8507ff108692",
      "dimensions": {
        "width": 358,
        "height": 239
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-390-dark-pre0-part1.png",
          "index": 0,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 181,
          "actualScroll": 181,
          "bounds": {
            "x": 16,
            "y": 374.953125,
            "width": 358,
            "height": 238,
            "scrollLeft": 181
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-11",
      "order": 11,
      "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-390-dark-table1-part0.png",
      "sha256": "f5a49d6918aba13316bb6e68ddc9358852e09ce99d5cc3ce0272b964f58a20ac",
      "dimensions": {
        "width": 358,
        "height": 665
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-390-dark-table1-part0.png",
          "index": 1,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 154.25,
            "width": 358,
            "height": 664.21875,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-12",
      "order": 12,
      "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-390-dark-table1-part1.png",
      "sha256": "d89a5bd866142683311eec38ac30963a6db8b48087dcf8d759a2bd289cc70ef9",
      "dimensions": {
        "width": 358,
        "height": 665
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-390-dark-table1-part1.png",
          "index": 1,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 162,
          "actualScroll": 162,
          "bounds": {
            "x": 16,
            "y": 154.25,
            "width": 358,
            "height": 664.21875,
            "scrollLeft": 162
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-13",
      "order": 13,
      "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-390-dark-table2-part0.png",
      "sha256": "41f540af5ad0fde2986e38bfb9c36d3bfe55316f93975a4b62196d8d4222a27c",
      "dimensions": {
        "width": 358,
        "height": 481
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-390-dark-table2-part0.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 245.65625,
            "width": 358,
            "height": 479.921875,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-14",
      "order": 14,
      "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-390-dark-table2-part1.png",
      "sha256": "efd8d3ecd228933c2ca14224c309a74536e1d846fabc1fbaa5ab44f32b97d0bb",
      "dimensions": {
        "width": 358,
        "height": 481
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-390-dark-table2-part1.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 154,
          "actualScroll": 154,
          "bounds": {
            "x": 16,
            "y": 245.65625,
            "width": 358,
            "height": 479.921875,
            "scrollLeft": 154
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-15",
      "order": 15,
      "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-390-dark-pre3-part0.png",
      "sha256": "3ec4f817a56e09f818a3adc54bdfa913d8fceab4baeb9abfe0eb89fe1dba75a5",
      "dimensions": {
        "width": 358,
        "height": 190
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-390-dark-pre3-part0.png",
          "index": 3,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 399.4375,
            "width": 358,
            "height": 189,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-16",
      "order": 16,
      "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-390-dark-pre3-part1.png",
      "sha256": "79bdeb1cd2553efcdcbf7734b7b363ea3b871adfdd548d03ae6419341f1040c5",
      "dimensions": {
        "width": 358,
        "height": 190
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-390-dark-pre3-part1.png",
          "index": 3,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 356,
          "actualScroll": 356,
          "bounds": {
            "x": 16,
            "y": 399.4375,
            "width": 358,
            "height": 189,
            "scrollLeft": 356
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-17",
      "order": 17,
      "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-390-dark-pre3-part2.png",
      "sha256": "238167e517444c2cae74b95ef4977786de24ee2665ac03d395842c07d638dae2",
      "dimensions": {
        "width": 358,
        "height": 190
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-390-dark-pre3-part2.png",
          "index": 3,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 712,
          "actualScroll": 712,
          "bounds": {
            "x": 16,
            "y": 399.4375,
            "width": 358,
            "height": 189,
            "scrollLeft": 712
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-18",
      "order": 18,
      "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-390-dark-pre3-part3.png",
      "sha256": "bad6e77b4504e969c868c4bedfa13b8a238028b8469ed47c8bf907a8a07d2bcc",
      "dimensions": {
        "width": 358,
        "height": 190
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-390-dark-pre3-part3.png",
          "index": 3,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 777,
          "actualScroll": 777,
          "bounds": {
            "x": 16,
            "y": 399.4375,
            "width": 358,
            "height": 189,
            "scrollLeft": 777
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-19",
      "order": 19,
      "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-390-dark-table4-part0.png",
      "sha256": "01d1bc77f6397a5ad2d3032d525611f7484b01eae5b6d56fc30a4a741b0ef814",
      "dimensions": {
        "width": 358,
        "height": 356
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-390-dark-table4-part0.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 5,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 308.03125,
            "width": 358,
            "height": 355.953125,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-20",
      "order": 20,
      "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-390-dark-table4-part1.png",
      "sha256": "8707d77aaa108d4f29d48a7eeb96380fd79e6d23ec51d6716c821c32c126331a",
      "dimensions": {
        "width": 358,
        "height": 356
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/frontend-backend-boundary-390-dark-table4-part1.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 5,
          "requestedScroll": 282,
          "actualScroll": 282,
          "bounds": {
            "x": 16,
            "y": 308.03125,
            "width": 358,
            "height": 355.953125,
            "scrollLeft": 282
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-21",
      "order": 21,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-1440-light-top.png",
      "sha256": "a501659a6a20509859c31de266e30971eed77b3086d87c3f84c3d014bc89fefa",
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
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R16-PNG-22",
      "order": 22,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-1440-light-table0-part0.png",
      "sha256": "14546c571b1796a4d0d35a4bdbe26b327dab3660c501bccd473b4623376fdbe9",
      "dimensions": {
        "width": 788,
        "height": 393
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-1440-light-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 348.46875,
            "width": 788,
            "height": 391.609375,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-23",
      "order": 23,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-1440-light-pre1-part0.png",
      "sha256": "2d12cb56d16fc9bae5de5068847383968ae5e72c2557429572016582324edc8c",
      "dimensions": {
        "width": 788,
        "height": 541
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-1440-light-pre1-part0.png",
          "index": 1,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 274.078125,
            "width": 788,
            "height": 540.5,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-24",
      "order": 24,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-1440-light-table2-part0.png",
      "sha256": "2f9c03477ec638182552ae055d04405247dd9513f8166fd751cf89ab201e4077",
      "dimensions": {
        "width": 788,
        "height": 253
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-1440-light-table2-part0.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 418.078125,
            "width": 788,
            "height": 252.296875,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-25",
      "order": 25,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-1440-light-pre3-part0.png",
      "sha256": "143a29dd4a7a8bc5159b4eac8cf0ad66e7d3db92acb1ae6b13bb7a7248c2352b",
      "dimensions": {
        "width": 788,
        "height": 76
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-1440-light-pre3-part0.png",
          "index": 3,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 506.171875,
            "width": 788,
            "height": 75,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-26",
      "order": 26,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-1440-light-table4-part0.png",
      "sha256": "455c3f6866c7e7ee0437ddadf0a3cef3b51758e07556896ed29b3d286c677d65",
      "dimensions": {
        "width": 788,
        "height": 323
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-1440-light-table4-part0.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 383.171875,
            "width": 788,
            "height": 321.953125,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-27",
      "order": 27,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-1440-light-table5-part0.png",
      "sha256": "98605c6205692515e4383775bfc2f40c2b8da6821f1eb338e201c690d0d4ef93",
      "dimensions": {
        "width": 788,
        "height": 323
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-1440-light-table5-part0.png",
          "index": 5,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 382.625,
            "width": 788,
            "height": 321.953125,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-28",
      "order": 28,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-1440-light-table6-part0.png",
      "sha256": "796d10511f6ee7015e99169dfa9b1cf994ec8bc4ade1c52c79565800def35c75",
      "dimensions": {
        "width": 788,
        "height": 347
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-1440-light-table6-part0.png",
          "index": 6,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 653.078125,
            "width": 788,
            "height": 346.625,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-29",
      "order": 29,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-1440-light-pre7-part0.png",
      "sha256": "1bf3ac3aa583e9c998a2cd4e1bad4c8359ce94f4ac46ff78d52d5861c853cab4",
      "dimensions": {
        "width": 788,
        "height": 264
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-1440-light-pre7-part0.png",
          "index": 7,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 420.6875,
            "width": 788,
            "height": 262.5,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-30",
      "order": 30,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-1440-light-pre7-part1.png",
      "sha256": "ad8ac5f7ae8fb09a4b10823feaae0f3a72665ea7fae1373978697e0c86e1db85",
      "dimensions": {
        "width": 788,
        "height": 264
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-1440-light-pre7-part1.png",
          "index": 7,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 45,
          "actualScroll": 45,
          "bounds": {
            "x": 324,
            "y": 420.6875,
            "width": 788,
            "height": 262.5,
            "scrollLeft": 45
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-31",
      "order": 31,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-top.png",
      "sha256": "06f6227efa8eaeba01821cb49f0d37c07523bf53548a2df5a06cecda540bc1b7",
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
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R16-PNG-32",
      "order": 32,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-table0-part0.png",
      "sha256": "1a92e098a97f6a2c018fb2e068c38c564b559eb91b74e019e17ec121db0620a4",
      "dimensions": {
        "width": 358,
        "height": 577
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 197.765625,
            "width": 358,
            "height": 575.90625,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-33",
      "order": 33,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-table0-part1.png",
      "sha256": "477336527e92347ffc5415faae0cd851fad5118400e6e50d704c9b193631769e",
      "dimensions": {
        "width": 358,
        "height": 577
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-table0-part1.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 187,
          "actualScroll": 187,
          "bounds": {
            "x": 16,
            "y": 197.765625,
            "width": 358,
            "height": 575.90625,
            "scrollLeft": 187
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-34",
      "order": 34,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-pre1-part0.png",
      "sha256": "f32d4489458c5ae488cac668787bbd09d94c8c26097c2342a214c518a3326394",
      "dimensions": {
        "width": 358,
        "height": 557
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-pre1-part0.png",
          "index": 1,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 216.0625,
            "width": 358,
            "height": 556.5,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-35",
      "order": 35,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-pre1-part1.png",
      "sha256": "cb97134d856a8af2ae09ad907e274a5ff11979cbf9df56d99145fd6649fbff69",
      "dimensions": {
        "width": 358,
        "height": 557
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-pre1-part1.png",
          "index": 1,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 291,
          "actualScroll": 291,
          "bounds": {
            "x": 16,
            "y": 216.0625,
            "width": 358,
            "height": 556.5,
            "scrollLeft": 291
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-36",
      "order": 36,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-table2-part0.png",
      "sha256": "5c7bfc5ed6a6d2b7398e3c8eecbc175fd5d7c2c6efda261f1cb1ed916ee42748",
      "dimensions": {
        "width": 358,
        "height": 438
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-table2-part0.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 267.65625,
            "width": 358,
            "height": 436.59375,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-37",
      "order": 37,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-table2-part1.png",
      "sha256": "3c3f925d0aa0661e66ff69d6f80040202e89b0d0dba11fc2cb66cbbf30a44cf5",
      "dimensions": {
        "width": 358,
        "height": 438
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-table2-part1.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 156,
          "actualScroll": 156,
          "bounds": {
            "x": 16,
            "y": 267.65625,
            "width": 358,
            "height": 436.59375,
            "scrollLeft": 156
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-38",
      "order": 38,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-pre3-part0.png",
      "sha256": "1be7d84549379f57b80cd469d84897aa1e91e913459fb72c7ca65130bad65174",
      "dimensions": {
        "width": 358,
        "height": 92
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-pre3-part0.png",
          "index": 3,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 448.9375,
            "width": 358,
            "height": 91,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-39",
      "order": 39,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-pre3-part1.png",
      "sha256": "0d532e83ce51051abeecda97e37206103a723778cef96c0d4ba1fcfec2b5a07a",
      "dimensions": {
        "width": 358,
        "height": 92
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-pre3-part1.png",
          "index": 3,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 121,
          "actualScroll": 121,
          "bounds": {
            "x": 16,
            "y": 448.9375,
            "width": 358,
            "height": 91,
            "scrollLeft": 121
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-40",
      "order": 40,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-table4-part0.png",
      "sha256": "54307ff1134886957410fbbeedb3f89f546e018eddff2e2675fbc8c2c4fd6bac",
      "dimensions": {
        "width": 358,
        "height": 428
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-table4-part0.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 272.328125,
            "width": 358,
            "height": 427.265625,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-41",
      "order": 41,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-table4-part1.png",
      "sha256": "0a888a1681f442acfad8ecac87ab5c98532a3d6b3b06992a0be2d5c1e081a232",
      "dimensions": {
        "width": 358,
        "height": 428
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-table4-part1.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "bounds": {
            "x": 16,
            "y": 272.328125,
            "width": 358,
            "height": 427.265625,
            "scrollLeft": 26
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-42",
      "order": 42,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-table5-part0.png",
      "sha256": "07f587b6f824d7a430765064e160f6098930648586f52e80070f7242d0ea6e0b",
      "dimensions": {
        "width": 358,
        "height": 481
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-table5-part0.png",
          "index": 5,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 245.890625,
            "width": 358,
            "height": 479.921875,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-43",
      "order": 43,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-table5-part1.png",
      "sha256": "9f4fc7bb172ddb35329fa4ae49136a7503f3032d6338a3698ca0c93dfe7ee490",
      "dimensions": {
        "width": 358,
        "height": 481
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-table5-part1.png",
          "index": 5,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "bounds": {
            "x": 16,
            "y": 245.890625,
            "width": 358,
            "height": 479.921875,
            "scrollLeft": 26
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-44",
      "order": 44,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-table6-part0.png",
      "sha256": "81c3792b74266683c073609453005c2ab3419a3c2ce33d0c5eaccce89f552591",
      "dimensions": {
        "width": 358,
        "height": 769
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-table6-part0.png",
          "index": 6,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 101.90625,
            "width": 358,
            "height": 767.875,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-45",
      "order": 45,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-table6-part1.png",
      "sha256": "7b0f03218a7f6154e12a80530f136ef779df0e1d9157cb82091e3460b23a95df",
      "dimensions": {
        "width": 358,
        "height": 769
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-table6-part1.png",
          "index": 6,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 28,
          "actualScroll": 28,
          "bounds": {
            "x": 16,
            "y": 101.90625,
            "width": 358,
            "height": 767.875,
            "scrollLeft": 28
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-46",
      "order": 46,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-pre7-part0.png",
      "sha256": "59ceaa838034fbff7f6d2bf9105ad8609d583ee77de3c79463f7dea50afc20e9",
      "dimensions": {
        "width": 358,
        "height": 264
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-pre7-part0.png",
          "index": 7,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 362.546875,
            "width": 358,
            "height": 262.5,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-47",
      "order": 47,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-pre7-part1.png",
      "sha256": "4572edac99a9bdfa23cd58d36b622108a59200c82708a1747abffc3f54543706",
      "dimensions": {
        "width": 358,
        "height": 264
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-pre7-part1.png",
          "index": 7,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 356,
          "actualScroll": 356,
          "bounds": {
            "x": 16,
            "y": 362.546875,
            "width": 358,
            "height": 262.5,
            "scrollLeft": 356
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-48",
      "order": 48,
      "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-pre7-part2.png",
      "sha256": "849353289e613e94e08b5f8efbad631a86e5fa36371bb02cdd9d82042a670446",
      "dimensions": {
        "width": 358,
        "height": 264
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/data-model-schema-migration-390-dark-pre7-part2.png",
          "index": 7,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 475,
          "actualScroll": 475,
          "bounds": {
            "x": 16,
            "y": 362.546875,
            "width": 358,
            "height": 262.5,
            "scrollLeft": 475
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-49",
      "order": 49,
      "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-1440-light-top.png",
      "sha256": "2580a90f34fdc812c350aea83c024fe4a875996305f4d51ebc4dc3400b81d6f1",
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
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R16-PNG-50",
      "order": 50,
      "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-1440-light-table0-part0.png",
      "sha256": "9f7f87cbc027a055da3d334780040ce9344169bcfd621f1a842ba921a3d2afd9",
      "dimensions": {
        "width": 788,
        "height": 462
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-1440-light-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 538.328125,
            "width": 788,
            "height": 461.265625,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-51",
      "order": 51,
      "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-1440-light-table1-part0.png",
      "sha256": "f317faf24c2a66d1eafe9c3a0007289d0cdd81f36e7d9d5ee9e35537c8f81606",
      "dimensions": {
        "width": 788,
        "height": 462
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-1440-light-table1-part0.png",
          "index": 1,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 313.59375,
            "width": 788,
            "height": 461.265625,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-52",
      "order": 52,
      "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-1440-light-table2-part0.png",
      "sha256": "eb96e16bda3eb0a15ec335f9cafd036b9730414c72323310c40bf17064f567a1",
      "dimensions": {
        "width": 788,
        "height": 261
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-1440-light-table2-part0.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 414.359375,
            "width": 788,
            "height": 259.96875,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-53",
      "order": 53,
      "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-1440-light-table3-part0.png",
      "sha256": "c566f3fbcdc7081b7f3f5359be53cb427593e09f2ec7df5708e0045462d69be1",
      "dimensions": {
        "width": 788,
        "height": 323
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-1440-light-table3-part0.png",
          "index": 3,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 383.328125,
            "width": 788,
            "height": 321.953125,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-54",
      "order": 54,
      "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-1440-light-table4-part0.png",
      "sha256": "e12b4566e4d8ed24cd98277db19b287b704c7f7614ec19d7d08b3cdcd3d1701a",
      "dimensions": {
        "width": 788,
        "height": 217
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-1440-light-table4-part0.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 435.28125,
            "width": 788,
            "height": 216.640625,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-55",
      "order": 55,
      "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-1440-light-table5-part0.png",
      "sha256": "6d6bff941830a7506796a7827fc7d8d51dbb31b9ba6b9ce75acab46d53e8a61a",
      "dimensions": {
        "width": 788,
        "height": 462
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-1440-light-table5-part0.png",
          "index": 5,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 538.421875,
            "width": 788,
            "height": 461.265625,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-56",
      "order": 56,
      "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-1440-light-pre6-part0.png",
      "sha256": "292c21073cdea1b8e1f252444c641dc0ed772f9d4b77cf7806e9c615979c05d9",
      "dimensions": {
        "width": 788,
        "height": 296
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-1440-light-pre6-part0.png",
          "index": 6,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 396.171875,
            "width": 788,
            "height": 295.5,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-57",
      "order": 57,
      "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-top.png",
      "sha256": "2415b6a4e9ab2bf181dfbc2995434e7d7545552be5a62ecd551b5cdced977968",
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
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R16-PNG-58",
      "order": 58,
      "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-table0-part0.png",
      "sha256": "14b295ed8a2006e38d431e0d11e872f79757239bf7bab0402c0d994fbf305f59",
      "dimensions": {
        "width": 358,
        "height": 620
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 176.46875,
            "width": 358,
            "height": 619.234375,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-59",
      "order": 59,
      "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-table0-part1.png",
      "sha256": "46f107f08b31beafbab2a67034212bad193b73f2859046500fabccdef7c28c35",
      "dimensions": {
        "width": 358,
        "height": 620
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-table0-part1.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 242,
          "actualScroll": 242,
          "bounds": {
            "x": 16,
            "y": 176.46875,
            "width": 358,
            "height": 619.234375,
            "scrollLeft": 242
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-60",
      "order": 60,
      "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-table1-part0.png",
      "sha256": "ec02121ef5158a8770f11644ef13a74e9802d0a60520809fe4f6342db1fdd573",
      "dimensions": {
        "width": 358,
        "height": 646
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-table1-part0.png",
          "index": 1,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 163.09375,
            "width": 358,
            "height": 645.5625,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-61",
      "order": 61,
      "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-table1-part1.png",
      "sha256": "38e7be4e402bb16fd4d5f11b4d015f136845fcfeebf1ef78723914f92ddbfbb1",
      "dimensions": {
        "width": 358,
        "height": 646
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-table1-part1.png",
          "index": 1,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 176,
          "actualScroll": 176,
          "bounds": {
            "x": 16,
            "y": 163.09375,
            "width": 358,
            "height": 645.5625,
            "scrollLeft": 176
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-62",
      "order": 62,
      "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-table2-part0.png",
      "sha256": "d8309598db6acbafa542d502e9f2a5d41f029a90e26a6585b90806c250f849cb",
      "dimensions": {
        "width": 358,
        "height": 472
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-table2-part0.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 250.953125,
            "width": 358,
            "height": 470.59375,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-63",
      "order": 63,
      "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-table2-part1.png",
      "sha256": "e435abc2df78bd56b1765e5a5b68a21e5b9b4e1a964a9e04a315e0b53c3b8bfb",
      "dimensions": {
        "width": 358,
        "height": 472
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-table2-part1.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 59,
          "actualScroll": 59,
          "bounds": {
            "x": 16,
            "y": 250.953125,
            "width": 358,
            "height": 470.59375,
            "scrollLeft": 59
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-64",
      "order": 64,
      "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-table3-part0.png",
      "sha256": "c28ce13eb314a452e7ea7efa8b03f5f08182dbbc548a9b8270f35752e4702015",
      "dimensions": {
        "width": 358,
        "height": 481
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-table3-part0.png",
          "index": 3,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 246.125,
            "width": 358,
            "height": 479.921875,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-65",
      "order": 65,
      "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-table3-part1.png",
      "sha256": "9ea69c479468195e3257c557ed0c8339146950f2125cffaebd6591aadf97a751",
      "dimensions": {
        "width": 358,
        "height": 481
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-table3-part1.png",
          "index": 3,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "bounds": {
            "x": 16,
            "y": 246.125,
            "width": 358,
            "height": 479.921875,
            "scrollLeft": 26
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-66",
      "order": 66,
      "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-table4-part0.png",
      "sha256": "5de065da40f0a7c60e211ef9bf732c66281bf20e53c0c27d4cb8d55453f03241",
      "dimensions": {
        "width": 358,
        "height": 428
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-table4-part0.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 272.421875,
            "width": 358,
            "height": 427.265625,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-67",
      "order": 67,
      "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-table4-part1.png",
      "sha256": "a48be8419f11adf0a001f14cd88bf9a4b4c620f675acb06adb91741692c2b28b",
      "dimensions": {
        "width": 358,
        "height": 428
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-table4-part1.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "bounds": {
            "x": 16,
            "y": 272.421875,
            "width": 358,
            "height": 427.265625,
            "scrollLeft": 26
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-68",
      "order": 68,
      "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-table5-part0.png",
      "sha256": "704aad384d4cceda24225cd709d2c07cbca159082dfb0af76425bec21a71d2a7",
      "dimensions": {
        "width": 358,
        "height": 673
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-table5-part0.png",
          "index": 5,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 149.984375,
            "width": 358,
            "height": 671.890625,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-69",
      "order": 69,
      "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-table5-part1.png",
      "sha256": "83592c76a871cc6587ad94c57421b611d2845effa5e7ef669b94f2f86b562079",
      "dimensions": {
        "width": 358,
        "height": 673
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-table5-part1.png",
          "index": 5,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 154,
          "actualScroll": 154,
          "bounds": {
            "x": 16,
            "y": 149.984375,
            "width": 358,
            "height": 671.890625,
            "scrollLeft": 154
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-70",
      "order": 70,
      "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-pre6-part0.png",
      "sha256": "5bdaf618b3b3e3807723527fa68578be93e32cf4b9d0477cc23b1a9a061dd9e6",
      "dimensions": {
        "width": 358,
        "height": 313
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-pre6-part0.png",
          "index": 6,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 337.9375,
            "width": 358,
            "height": 311.5,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-71",
      "order": 71,
      "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-pre6-part1.png",
      "sha256": "66f9f0af74ba5766a26030a0a3a284d3ba2951bf004991ad52887d17b78ac04e",
      "dimensions": {
        "width": 358,
        "height": 313
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-pilot/state-cache-queue-390-dark-pre6-part1.png",
          "index": 6,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 303,
          "actualScroll": 303,
          "bounds": {
            "x": 16,
            "y": 337.9375,
            "width": 358,
            "height": 311.5,
            "scrollLeft": 303
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-72",
      "order": 72,
      "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-1440-dark-top.png",
      "sha256": "8056e171e4bd9d2783dc8348a76bb4331b7af5227abb27109f09db0dc8854800",
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
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R16-PNG-73",
      "order": 73,
      "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-1440-dark-pre0-part0.png",
      "sha256": "2425f47a8bbc3c82da49a83861e5c4188f84987aee1bc097a3a5f79a566f18a4",
      "dimensions": {
        "width": 788,
        "height": 223
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-1440-dark-pre0-part0.png",
          "index": 0,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 433.421875,
            "width": 788,
            "height": 222,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-74",
      "order": 74,
      "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-1440-dark-table1-part0.png",
      "sha256": "0beab1cd3c0d5c8ff5d6882547b821b7159c6151b923023b076f3a71992690a3",
      "dimensions": {
        "width": 788,
        "height": 455
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-1440-dark-table1-part0.png",
          "index": 1,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 545.921875,
            "width": 788,
            "height": 453.59375,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-75",
      "order": 75,
      "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-1440-dark-table2-part0.png",
      "sha256": "bfd56169c7528e82c8910611b456ce93e2d6a55bb8289a365f982ccb4d04ebd5",
      "dimensions": {
        "width": 788,
        "height": 323
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-1440-dark-table2-part0.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 383.515625,
            "width": 788,
            "height": 321.953125,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-76",
      "order": 76,
      "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-1440-dark-pre3-part0.png",
      "sha256": "f213580767081316a5cb94e3cea390a2abeced21c6a81b9001670e1691e62667",
      "dimensions": {
        "width": 788,
        "height": 190
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-1440-dark-pre3-part0.png",
          "index": 3,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 457.25,
            "width": 788,
            "height": 189,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-77",
      "order": 77,
      "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-1440-dark-pre3-part1.png",
      "sha256": "b0e79ab42b26c5648b7bab3695560aa0bc3bb2bccf348642c43619d4c33c1341",
      "dimensions": {
        "width": 788,
        "height": 190
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-1440-dark-pre3-part1.png",
          "index": 3,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 347,
          "actualScroll": 347,
          "bounds": {
            "x": 324,
            "y": 457.25,
            "width": 788,
            "height": 189,
            "scrollLeft": 347
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-78",
      "order": 78,
      "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-1440-dark-table4-part0.png",
      "sha256": "606bf2c29d4d118fc9a1a8f00d1b493916edb9db8b7847509c1f6d9e96ac9b91",
      "dimensions": {
        "width": 788,
        "height": 304
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-1440-dark-table4-part0.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 5,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 392.25,
            "width": 788,
            "height": 303.296875,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-79",
      "order": 79,
      "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-390-light-top.png",
      "sha256": "9ba99e9d59ee60960617f2f23dce801564c4b6a89737c61a4326f904ab8fe6a0",
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
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R16-PNG-80",
      "order": 80,
      "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-390-light-pre0-part0.png",
      "sha256": "1ca1eae250c867e6c796992219f89ea1e99fe178c2836a557b25150e1b1bdad9",
      "dimensions": {
        "width": 358,
        "height": 239
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-390-light-pre0-part0.png",
          "index": 0,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 374.953125,
            "width": 358,
            "height": 238,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-81",
      "order": 81,
      "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-390-light-pre0-part1.png",
      "sha256": "c2e11931de5baee63cd1a132fd933e593ded7c8b76bb304d80baeb89eaf6931d",
      "dimensions": {
        "width": 358,
        "height": 239
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-390-light-pre0-part1.png",
          "index": 0,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 181,
          "actualScroll": 181,
          "bounds": {
            "x": 16,
            "y": 374.953125,
            "width": 358,
            "height": 238,
            "scrollLeft": 181
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-82",
      "order": 82,
      "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-390-light-table1-part0.png",
      "sha256": "db550b1a9a4aede1705d98d225cff6052e2deca260f53333d9bc1cc68076488e",
      "dimensions": {
        "width": 358,
        "height": 665
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-390-light-table1-part0.png",
          "index": 1,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 154.25,
            "width": 358,
            "height": 664.21875,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-83",
      "order": 83,
      "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-390-light-table1-part1.png",
      "sha256": "54a93771a6f9c4078c5d09f86317b8fa07e7b23645781d4878ac09e850c2c623",
      "dimensions": {
        "width": 358,
        "height": 665
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-390-light-table1-part1.png",
          "index": 1,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 162,
          "actualScroll": 162,
          "bounds": {
            "x": 16,
            "y": 154.25,
            "width": 358,
            "height": 664.21875,
            "scrollLeft": 162
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-84",
      "order": 84,
      "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-390-light-table2-part0.png",
      "sha256": "4ecd1181c82b9950e0dd91af4a8a7b8414ee197c36389def589d27651fa8eb6d",
      "dimensions": {
        "width": 358,
        "height": 481
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-390-light-table2-part0.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 245.65625,
            "width": 358,
            "height": 479.921875,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-85",
      "order": 85,
      "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-390-light-table2-part1.png",
      "sha256": "8e3ff7dd48eab23c24150f1ec413d4b28179c8469711f348e2645c133cdf8380",
      "dimensions": {
        "width": 358,
        "height": 481
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-390-light-table2-part1.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 154,
          "actualScroll": 154,
          "bounds": {
            "x": 16,
            "y": 245.65625,
            "width": 358,
            "height": 479.921875,
            "scrollLeft": 154
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-86",
      "order": 86,
      "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-390-light-pre3-part0.png",
      "sha256": "7d5bafb89bfd7b1917bb707993753371fe564aab55e39a60c5f246393c5e2ede",
      "dimensions": {
        "width": 358,
        "height": 190
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-390-light-pre3-part0.png",
          "index": 3,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 399.4375,
            "width": 358,
            "height": 189,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-87",
      "order": 87,
      "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-390-light-pre3-part1.png",
      "sha256": "0c490c73cb0c5c2def35cc20afe682beee544448582a8b2908cb7975b83aa020",
      "dimensions": {
        "width": 358,
        "height": 190
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-390-light-pre3-part1.png",
          "index": 3,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 356,
          "actualScroll": 356,
          "bounds": {
            "x": 16,
            "y": 399.4375,
            "width": 358,
            "height": 189,
            "scrollLeft": 356
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-88",
      "order": 88,
      "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-390-light-pre3-part2.png",
      "sha256": "3419509dbbffe064186c716e447d4ba881adcc313d9059bd4ecfddd9e104a254",
      "dimensions": {
        "width": 358,
        "height": 190
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-390-light-pre3-part2.png",
          "index": 3,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 712,
          "actualScroll": 712,
          "bounds": {
            "x": 16,
            "y": 399.4375,
            "width": 358,
            "height": 189,
            "scrollLeft": 712
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-89",
      "order": 89,
      "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-390-light-pre3-part3.png",
      "sha256": "57ad0667a7cfd299189520f8f41dd119069be3b2aa109004de153f7e838aeeca",
      "dimensions": {
        "width": 358,
        "height": 190
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-390-light-pre3-part3.png",
          "index": 3,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 777,
          "actualScroll": 777,
          "bounds": {
            "x": 16,
            "y": 399.4375,
            "width": 358,
            "height": 189,
            "scrollLeft": 777
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-90",
      "order": 90,
      "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-390-light-table4-part0.png",
      "sha256": "ee8e10fab2eec80152eba236137e15c17ac88fcfcce7aead8405d3b0c97e03f3",
      "dimensions": {
        "width": 358,
        "height": 356
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-390-light-table4-part0.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 5,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 308.03125,
            "width": 358,
            "height": 355.953125,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-91",
      "order": 91,
      "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-390-light-table4-part1.png",
      "sha256": "699c0e9f8eae11f4799ebe4afc2059b13845cfca881631d2872e1731f1e2f3ab",
      "dimensions": {
        "width": 358,
        "height": 356
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "03-full-stack/frontend-backend-boundary",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/frontend-backend-boundary-390-light-table4-part1.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 5,
          "requestedScroll": 282,
          "actualScroll": 282,
          "bounds": {
            "x": 16,
            "y": 308.03125,
            "width": 358,
            "height": 355.953125,
            "scrollLeft": 282
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-92",
      "order": 92,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-1440-dark-top.png",
      "sha256": "5754a63c356522295df2af326a85b8a251cf0032f9c4d191802b18ed84118aa2",
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
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R16-PNG-93",
      "order": 93,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-1440-dark-table0-part0.png",
      "sha256": "ce04393a1eca8ca55d8327675bb413d594cec9a9e37fd455639d33e25aafc5b5",
      "dimensions": {
        "width": 788,
        "height": 393
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-1440-dark-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 348.46875,
            "width": 788,
            "height": 391.609375,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-94",
      "order": 94,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-1440-dark-pre1-part0.png",
      "sha256": "29563f2009800345980532bf22ef4deb8281eb7e41df3943ab589c8c55605ceb",
      "dimensions": {
        "width": 788,
        "height": 541
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-1440-dark-pre1-part0.png",
          "index": 1,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 274.078125,
            "width": 788,
            "height": 540.5,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-95",
      "order": 95,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-1440-dark-table2-part0.png",
      "sha256": "1e738ac9350e20583aa88c6f7e36e193d04dde72bb80f7286a15453534ae19d8",
      "dimensions": {
        "width": 788,
        "height": 253
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-1440-dark-table2-part0.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 418.078125,
            "width": 788,
            "height": 252.296875,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-96",
      "order": 96,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-1440-dark-pre3-part0.png",
      "sha256": "c11c4c2b085d2fbefdf477b2d1de2176f429024cc60a40889978c5b46530dc69",
      "dimensions": {
        "width": 788,
        "height": 76
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-1440-dark-pre3-part0.png",
          "index": 3,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 506.171875,
            "width": 788,
            "height": 75,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-97",
      "order": 97,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-1440-dark-table4-part0.png",
      "sha256": "b1186bca242a6e4ec01629510b9498ec071444fbfb5f74efc1ea536e67f9ad8f",
      "dimensions": {
        "width": 788,
        "height": 323
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-1440-dark-table4-part0.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 383.171875,
            "width": 788,
            "height": 321.953125,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-98",
      "order": 98,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-1440-dark-table5-part0.png",
      "sha256": "012dc888ab38bb669e7d155f180c4c843d4a4669aa3ab99ee740559f51803fc5",
      "dimensions": {
        "width": 788,
        "height": 323
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-1440-dark-table5-part0.png",
          "index": 5,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 382.625,
            "width": 788,
            "height": 321.953125,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-99",
      "order": 99,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-1440-dark-table6-part0.png",
      "sha256": "d77b67eea543d5d0d79084c6cfc2ac649cb8a1b4642eaf497bc1930646ae0ae9",
      "dimensions": {
        "width": 788,
        "height": 347
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-1440-dark-table6-part0.png",
          "index": 6,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 653.078125,
            "width": 788,
            "height": 346.625,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-100",
      "order": 100,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-1440-dark-pre7-part0.png",
      "sha256": "e2dc5b01a1200776dc60d31c45b191bbb41baa8fc6ba429bb2bff4c634edd09b",
      "dimensions": {
        "width": 788,
        "height": 264
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-1440-dark-pre7-part0.png",
          "index": 7,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 420.6875,
            "width": 788,
            "height": 262.5,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-101",
      "order": 101,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-1440-dark-pre7-part1.png",
      "sha256": "f317eb1247f97a73dec3d65665e69c115ae749227776267b3526505d7a85cfad",
      "dimensions": {
        "width": 788,
        "height": 264
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-1440-dark-pre7-part1.png",
          "index": 7,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 45,
          "actualScroll": 45,
          "bounds": {
            "x": 324,
            "y": 420.6875,
            "width": 788,
            "height": 262.5,
            "scrollLeft": 45
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-102",
      "order": 102,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-top.png",
      "sha256": "515ce168e2690a3e3d1e40a55f8a8957400e4c7f2a6c2c5d28fb0c2734432e50",
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
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R16-PNG-103",
      "order": 103,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-table0-part0.png",
      "sha256": "e06cc607b28d3fad7468992c6a0152ee0dc3d916a2e01898b7d3aa22351522ed",
      "dimensions": {
        "width": 358,
        "height": 577
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 197.765625,
            "width": 358,
            "height": 575.90625,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-104",
      "order": 104,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-table0-part1.png",
      "sha256": "475c80a06c255a7539e3d37941307cf9d5308394c558bfd116eed6763e048be5",
      "dimensions": {
        "width": 358,
        "height": 577
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-table0-part1.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 187,
          "actualScroll": 187,
          "bounds": {
            "x": 16,
            "y": 197.765625,
            "width": 358,
            "height": 575.90625,
            "scrollLeft": 187
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-105",
      "order": 105,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-pre1-part0.png",
      "sha256": "6d4d4f20f0a3cd65eeb141573617dbfb56e8846fb8fd6a3423b8228033af913b",
      "dimensions": {
        "width": 358,
        "height": 557
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-pre1-part0.png",
          "index": 1,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 216.0625,
            "width": 358,
            "height": 556.5,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-106",
      "order": 106,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-pre1-part1.png",
      "sha256": "7596be59ef557fcf7da48bbf40ee4e68731b7c2c2ba298e4472900e6ded9273f",
      "dimensions": {
        "width": 358,
        "height": 557
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-pre1-part1.png",
          "index": 1,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 291,
          "actualScroll": 291,
          "bounds": {
            "x": 16,
            "y": 216.0625,
            "width": 358,
            "height": 556.5,
            "scrollLeft": 291
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-107",
      "order": 107,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-table2-part0.png",
      "sha256": "792bb00ceef37b2bc2d620483ba85b382ac54a2e9245f793256de48433c507f4",
      "dimensions": {
        "width": 358,
        "height": 438
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-table2-part0.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 267.65625,
            "width": 358,
            "height": 436.59375,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-108",
      "order": 108,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-table2-part1.png",
      "sha256": "701212f7d9d814455c072a419d90ac33cc1b242eef9386eb3b7bcfe1a39a55ad",
      "dimensions": {
        "width": 358,
        "height": 438
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-table2-part1.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 156,
          "actualScroll": 156,
          "bounds": {
            "x": 16,
            "y": 267.65625,
            "width": 358,
            "height": 436.59375,
            "scrollLeft": 156
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-109",
      "order": 109,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-pre3-part0.png",
      "sha256": "0f680b14d248dcafa07b81ffa2f042440d342bd7f82d9e4bc1c6cd173bbfbd1b",
      "dimensions": {
        "width": 358,
        "height": 92
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-pre3-part0.png",
          "index": 3,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 448.9375,
            "width": 358,
            "height": 91,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-110",
      "order": 110,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-pre3-part1.png",
      "sha256": "84f2f23dc6ee0ab36abdb9dc49faa2a35ee87b851adb6090af2002899e0dfad2",
      "dimensions": {
        "width": 358,
        "height": 92
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-pre3-part1.png",
          "index": 3,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 121,
          "actualScroll": 121,
          "bounds": {
            "x": 16,
            "y": 448.9375,
            "width": 358,
            "height": 91,
            "scrollLeft": 121
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-111",
      "order": 111,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-table4-part0.png",
      "sha256": "95c74d8149dca9b9023c62cf18034f0b7a29a6dcafbe672473c90dfe03a5c4b9",
      "dimensions": {
        "width": 358,
        "height": 428
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-table4-part0.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 272.328125,
            "width": 358,
            "height": 427.265625,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-112",
      "order": 112,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-table4-part1.png",
      "sha256": "cd7122880c968a6595c42a41c6d4aedddea2596ae97a73da4e5b06d37294a22e",
      "dimensions": {
        "width": 358,
        "height": 428
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-table4-part1.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "bounds": {
            "x": 16,
            "y": 272.328125,
            "width": 358,
            "height": 427.265625,
            "scrollLeft": 26
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-113",
      "order": 113,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-table5-part0.png",
      "sha256": "4a0991c65382f01aec27a7adcc54d3b5268c8e9efc9cf171dc6b9232d8e8fa0f",
      "dimensions": {
        "width": 358,
        "height": 481
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-table5-part0.png",
          "index": 5,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 245.890625,
            "width": 358,
            "height": 479.921875,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-114",
      "order": 114,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-table5-part1.png",
      "sha256": "ae3675b0b86381d7003174201b6148d8f13ab835fd400ac49a173ae9051e4fee",
      "dimensions": {
        "width": 358,
        "height": 481
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-table5-part1.png",
          "index": 5,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "bounds": {
            "x": 16,
            "y": 245.890625,
            "width": 358,
            "height": 479.921875,
            "scrollLeft": 26
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-115",
      "order": 115,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-table6-part0.png",
      "sha256": "946ea305e756cb3cefaa52d1628fe643b452237a3a893a3bb27f5cfbb52fb5a8",
      "dimensions": {
        "width": 358,
        "height": 769
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-table6-part0.png",
          "index": 6,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 101.90625,
            "width": 358,
            "height": 767.875,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-116",
      "order": 116,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-table6-part1.png",
      "sha256": "d4a4fa2422c08fbdc24afe662bdb018ef6ead1a8d6ea4a45aab81f9c2d08d6f7",
      "dimensions": {
        "width": 358,
        "height": 769
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-table6-part1.png",
          "index": 6,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 28,
          "actualScroll": 28,
          "bounds": {
            "x": 16,
            "y": 101.90625,
            "width": 358,
            "height": 767.875,
            "scrollLeft": 28
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-117",
      "order": 117,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-pre7-part0.png",
      "sha256": "9aec4a861e6be322fd81d82bd83506d6865ef47304dc3606528e2dfc7bed94fc",
      "dimensions": {
        "width": 358,
        "height": 264
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-pre7-part0.png",
          "index": 7,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 362.546875,
            "width": 358,
            "height": 262.5,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-118",
      "order": 118,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-pre7-part1.png",
      "sha256": "4371dd9d6afac080b513165f297884e57437bfac93780fb5708edb3dda8db86a",
      "dimensions": {
        "width": 358,
        "height": 264
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-pre7-part1.png",
          "index": 7,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 356,
          "actualScroll": 356,
          "bounds": {
            "x": 16,
            "y": 362.546875,
            "width": 358,
            "height": 262.5,
            "scrollLeft": 356
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-119",
      "order": 119,
      "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-pre7-part2.png",
      "sha256": "8e537210a886d71688379d905026202c753a8fdf73883840cec851225fd6818f",
      "dimensions": {
        "width": 358,
        "height": 264
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/data-model-schema-migration",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/data-model-schema-migration-390-light-pre7-part2.png",
          "index": 7,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 475,
          "actualScroll": 475,
          "bounds": {
            "x": 16,
            "y": 362.546875,
            "width": 358,
            "height": 262.5,
            "scrollLeft": 475
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-120",
      "order": 120,
      "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-1440-dark-top.png",
      "sha256": "c2af080792b28dd2eb52f4ac80cd4afc76ffb03b2e04edf2e2445c5f57a8621e",
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
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R16-PNG-121",
      "order": 121,
      "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-1440-dark-table0-part0.png",
      "sha256": "aa622cdd459336354ae1a749ee0abf55f9f59ca97337c454a61c637471bce4ed",
      "dimensions": {
        "width": 788,
        "height": 462
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-1440-dark-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 538.328125,
            "width": 788,
            "height": 461.265625,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-122",
      "order": 122,
      "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-1440-dark-table1-part0.png",
      "sha256": "294addf7b6ba244a56508fc25a4f5da490e71611b16d7c0aab4a429c92b4c54b",
      "dimensions": {
        "width": 788,
        "height": 462
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-1440-dark-table1-part0.png",
          "index": 1,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 313.59375,
            "width": 788,
            "height": 461.265625,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-123",
      "order": 123,
      "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-1440-dark-table2-part0.png",
      "sha256": "da78c5ee8968a5911b99bb6ed223624921b3b92f9b4c6705e85df9a348ffdde7",
      "dimensions": {
        "width": 788,
        "height": 261
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-1440-dark-table2-part0.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 414.359375,
            "width": 788,
            "height": 259.96875,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-124",
      "order": 124,
      "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-1440-dark-table3-part0.png",
      "sha256": "e6591dd67031f6da93d8ad8d807c4620a603dee9fb3f78ef1b02e37d66a20fa0",
      "dimensions": {
        "width": 788,
        "height": 323
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-1440-dark-table3-part0.png",
          "index": 3,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 383.328125,
            "width": 788,
            "height": 321.953125,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-125",
      "order": 125,
      "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-1440-dark-table4-part0.png",
      "sha256": "68fee03e8a4aec2395f5f032edbcffd9c068478fd03bda8d001b701220107144",
      "dimensions": {
        "width": 788,
        "height": 217
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-1440-dark-table4-part0.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 435.28125,
            "width": 788,
            "height": 216.640625,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-126",
      "order": 126,
      "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-1440-dark-table5-part0.png",
      "sha256": "ce7b9651ca032fa745c9dbf5214f3f5510e6663283e30ac379084816fdf17277",
      "dimensions": {
        "width": 788,
        "height": 462
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-1440-dark-table5-part0.png",
          "index": 5,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 538.421875,
            "width": 788,
            "height": 461.265625,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-127",
      "order": 127,
      "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-1440-dark-pre6-part0.png",
      "sha256": "ecc4bd64677024a725f5d8e92be48ad34d8091ce0f10c585aa4993ce572d39c7",
      "dimensions": {
        "width": 788,
        "height": 296
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-1440-dark-pre6-part0.png",
          "index": 6,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 324,
            "y": 396.171875,
            "width": 788,
            "height": 295.5,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-128",
      "order": 128,
      "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-top.png",
      "sha256": "ba9317ade31ed43288df8ee610c54a61edfe39f899d9f3ba710ab485b47682d7",
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
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R16-PNG-129",
      "order": 129,
      "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-table0-part0.png",
      "sha256": "65178e1fcbc46bbbdf40e2d31c59570880531acaea5925f167db960fb286b913",
      "dimensions": {
        "width": 358,
        "height": 620
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 176.46875,
            "width": 358,
            "height": 619.234375,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-130",
      "order": 130,
      "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-table0-part1.png",
      "sha256": "7241e57382a4e5098c6aa5f410db08e0954978f0b0360a3bdd6d263a7e93896e",
      "dimensions": {
        "width": 358,
        "height": 620
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-table0-part1.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 242,
          "actualScroll": 242,
          "bounds": {
            "x": 16,
            "y": 176.46875,
            "width": 358,
            "height": 619.234375,
            "scrollLeft": 242
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-131",
      "order": 131,
      "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-table1-part0.png",
      "sha256": "02a129825fc9b3b26689588bf85b32c808a96a3ac856a3bb1a892d6a10b78f48",
      "dimensions": {
        "width": 358,
        "height": 646
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-table1-part0.png",
          "index": 1,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 163.09375,
            "width": 358,
            "height": 645.5625,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-132",
      "order": 132,
      "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-table1-part1.png",
      "sha256": "55c265ecf55d2c66b99c3370f6dbbd8959c3221ce2e2bbab8336e1b5e6afb816",
      "dimensions": {
        "width": 358,
        "height": 646
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-table1-part1.png",
          "index": 1,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 176,
          "actualScroll": 176,
          "bounds": {
            "x": 16,
            "y": 163.09375,
            "width": 358,
            "height": 645.5625,
            "scrollLeft": 176
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-133",
      "order": 133,
      "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-table2-part0.png",
      "sha256": "6f767614f2316a5cda7832cd44229c56fd681dfc3b3f7e474331e7a79419f9aa",
      "dimensions": {
        "width": 358,
        "height": 472
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-table2-part0.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 250.953125,
            "width": 358,
            "height": 470.59375,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-134",
      "order": 134,
      "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-table2-part1.png",
      "sha256": "d0168e93157867ea4373c8ff4797b2c7968d99691b773ce430237363d00d8ab1",
      "dimensions": {
        "width": 358,
        "height": 472
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-table2-part1.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 59,
          "actualScroll": 59,
          "bounds": {
            "x": 16,
            "y": 250.953125,
            "width": 358,
            "height": 470.59375,
            "scrollLeft": 59
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-135",
      "order": 135,
      "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-table3-part0.png",
      "sha256": "44fcbf6ae996d6ec47b3884f834038a40b6c8407580f51b847fec5467c659641",
      "dimensions": {
        "width": 358,
        "height": 481
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-table3-part0.png",
          "index": 3,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 246.125,
            "width": 358,
            "height": 479.921875,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-136",
      "order": 136,
      "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-table3-part1.png",
      "sha256": "0ca51d404dd8847aa7dfc9fc5b9ed5927cadfecae6b7f39caf83a5b18d985fc3",
      "dimensions": {
        "width": 358,
        "height": 481
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-table3-part1.png",
          "index": 3,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "bounds": {
            "x": 16,
            "y": 246.125,
            "width": 358,
            "height": 479.921875,
            "scrollLeft": 26
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-137",
      "order": 137,
      "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-table4-part0.png",
      "sha256": "1471d8c3990410d17eb8ddb4d1332d0df21f283f797775f1def96a96d56ee5d1",
      "dimensions": {
        "width": 358,
        "height": 428
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-table4-part0.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 272.421875,
            "width": 358,
            "height": 427.265625,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-138",
      "order": 138,
      "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-table4-part1.png",
      "sha256": "41296f5549078e47cd623e8cfc424dda977d6d0c8721ae41bc9eee4254daba70",
      "dimensions": {
        "width": 358,
        "height": 428
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-table4-part1.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "bounds": {
            "x": 16,
            "y": 272.421875,
            "width": 358,
            "height": 427.265625,
            "scrollLeft": 26
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-139",
      "order": 139,
      "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-table5-part0.png",
      "sha256": "64f67204b927b1d7544c65caa18f7bdb3061e36c8aa1825fe7da2675ced4d219",
      "dimensions": {
        "width": 358,
        "height": 673
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-table5-part0.png",
          "index": 5,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 149.984375,
            "width": 358,
            "height": 671.890625,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-140",
      "order": 140,
      "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-table5-part1.png",
      "sha256": "46c1dd645d87e8ca659a5f8ec13c9caa269a198b585cb0288c7b949148237d9e",
      "dimensions": {
        "width": 358,
        "height": 673
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-table5-part1.png",
          "index": 5,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 154,
          "actualScroll": 154,
          "bounds": {
            "x": 16,
            "y": 149.984375,
            "width": 358,
            "height": 671.890625,
            "scrollLeft": 154
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-141",
      "order": 141,
      "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-pre6-part0.png",
      "sha256": "ede5140a9976e2a4efd495f820461240034826e595f9a9a7d9b7f1563a4fa55f",
      "dimensions": {
        "width": 358,
        "height": 313
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-pre6-part0.png",
          "index": 6,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "bounds": {
            "x": 16,
            "y": 337.9375,
            "width": 358,
            "height": 311.5,
            "scrollLeft": 0
          },
          "method": "locator.screenshot"
        }
      }
    },
    {
      "id": "R16-PNG-142",
      "order": 142,
      "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-pre6-part1.png",
      "sha256": "14e5a879182d4c5594482ac90c3f4ba2d7684f525fccb8c3fd6db6805e261fc3",
      "dimensions": {
        "width": 358,
        "height": 313
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "04-backend-data/state-cache-queue",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r16-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r16-inputs-20261115-remaining/state-cache-queue-390-light-pre6-part1.png",
          "index": 6,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 303,
          "actualScroll": 303,
          "bounds": {
            "x": 16,
            "y": 337.9375,
            "width": 358,
            "height": 311.5,
            "scrollLeft": 303
          },
          "method": "locator.screenshot"
        }
      }
    }
  ]
}
```
<!-- m5-r16-request:data:end -->
