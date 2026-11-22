# R12 모임 캡스톤 — 고정 검토 요청

기준 commit ab08d77722ca432724db1b3f984d0cff939e202a, 입력 고정2026-11-15. 대상 원고 전체와 full_text_paths의 전체 텍스트·SVG/Mermaid·직접 근거, context_excerpts의 명시 범위를 읽습니다. 인접 장·브리프·용어집은 일관성 문맥이며 해당 행 전체 검토를 대신하지 않습니다. 발췌 밖을 읽었다고 주장하지 않습니다.

Controller·작성자·이전 대화와 분리된 fresh gpt-6-astra/high 저장 세션입니다. 프로세스 한정 공식 ChatGPT 구독 경로에서 실제 모델/effort, history0, readOnly/network false, 모든 도구·MCP 비활성과 사용0을 확인합니다. 같은 저장 ID와 실제 이력 복구로 후속 검토하며 R02 승계 예외는 적용하지 않습니다. 전역 설정/인증, API키, 추가 크레딧, 다른 과금은 금지합니다.

공통 계약 C01~C12·9항목18점·치명 항목과 한국어 여섯 절을 적용합니다. W-01~W-05의 요구·상태·주체/대상/행동 인가·동시성·데이터 오라클·응답 유실·배포와 격리 복원·추적 표를 대조합니다. 사례를 실제 구현 성공이나 제품 채택으로 확대하지 않습니다. 같은 실행의2026-11-15 출처 보충 다섯 묶음은 재조회하지 않고 유효 범위에서 재사용하며 새 RFC9110 §9.2.2와 not-confirmed 제품/계정 경계를 포함합니다. 원고/그림/완료 R01~R11을 이유 없이 재작성·재검토하지 않습니다.

PNG24개는 PBV-08의6상태×상단/그림 direct crop/전체 페이지 원본18개와 현재 추적 표의3폭 light×좌우6개입니다. 원고/SVG/Mermaid3개는PBV-08 입력바이트와동일하지만 과거 PNG는 당시 CSS/레이아웃의 역사이며 현재 모바일 표를 증명하지 않습니다. 현재 CSS는50rem 이하에만 셀 min-width8rem을 둡니다. 새 관측은 desktop/tablet에서 첫 행 높이1359.734375와 일부열폭34~49px, mobile행201.296875·최소128px를 보였습니다. 이것은 controller의 우려/관측이며 finding 우선순위와 처리 범위는 독립적으로 판단하세요. 실행exit0/errors0가 표 판독성 PASS를 뜻하지 않습니다.

과거 전체 페이지는 bounded Chrome 캡처의 lossless 행 연결이며 direct 그림 crop은 별도 같은 상태 캡처입니다. 긴 전체 페이지는 축소되면 배치만 확인하고 미세 글자 판독 성공으로 계산하지 마세요. 원본24개를localImage/detail original로 전달하며 ID별 관측·판독 한계를 기록합니다. 과거 pending/Claude blocked를소급PASS로바꾸지않습니다. 새 표6개는 일부스크롤위치만 보여 주며 전체 표/모든 중간열/키보드검증을 새로 수행한 것으로 주장하지 않습니다.

도구·쓰기·셸·웹·MCP·플러그인·스킬·위임 없이 응답만 반환하세요. 준비 검사기/테스트 코드의 C/I/M과 체크포인트 적합성은 원고 판정과 구분합니다. 개인 home 절대경로·전체 비공개 세션 ID를 출력하지 마세요. 부족 입력은 BLOCKED이고 준비를 원고 PASS/review/M5/ready/공개 승인으로 처리하지 않습니다. 최초 정상 결과는 수정 착수 전에 별도 커밋해야 합니다.

<!-- m5-r12-request:data:start -->
```json
{
  "schema_version": 1,
  "review_id": "R12",
  "baseline_commit": "ab08d77722ca432724db1b3f984d0cff939e202a",
  "target": "src/content/docs/12-case-studies/first-full-stack-project.md",
  "planned_profile": {
    "model": "gpt-6-astra",
    "reasoning_effort": "high"
  },
  "fresh": true,
  "persistent": true,
  "successor_exception": false,
  "full_text_paths": [
    "docs/project/reviews/public-beta-1/codex-review-contract.md",
    "src/content/docs/12-case-studies/first-full-stack-project.md",
    "src/assets/diagrams/meeting-webapp-architecture.svg",
    "src/assets/diagrams/source/meeting-webapp-architecture.mmd",
    "research/public-beta-review-source-excerpts/r12-meeting-capstone-2026-11-15.md",
    "research/public-beta-review-source-excerpts/r04-api-data-auth-2026-11-15.md",
    "research/public-beta-review-source-excerpts/r06-prd-sdd-tdd-2026-11-15.md",
    "research/public-beta-review-source-excerpts/r08-git-github-2026-11-15.md",
    "research/public-beta-review-source-excerpts/r09-build-deploy-2026-11-15.md",
    "research/public-beta-review-source-excerpts/r10-operations-2026-11-15.md",
    "research/meeting-webapp-case-brief.md",
    "src/content/docs/04-backend-data/api-database-auth.md",
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
      "sha256": "51fdaece051ca66c3f9168ba011e5a1ddf61eba9ce26f95aacf41811f7328067",
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
      "sha256": "c7a2ef5a34bc084bf4ab47c384b871ca97cd0337fa32114a17ec119ce4ce75e3",
      "segments": [
        {
          "start_line": 377,
          "end_line": 386,
          "text": "| `11-ai-native/working-with-coding-agents.md` | https://github.com/anthropics/cwc-long-running-agents | 2026-08-04 | 장시간 작업의 초기화·작업 선택·구현·검증·진행 상태·다음 세션 handoff와 반복 루프를 설계하는 사례 범위 |\n| `12-case-studies/first-full-stack-project.md` | https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics | 2026-08-06 | 모임 웹앱의 문제·요구·설계·구현·테스트·배포·운영 인수를 서로 다른 산출물과 증거로 추적하는 소프트웨어 생명주기 교육 범위 |\n| `12-case-studies/first-full-stack-project.md` | https://spec.openapis.org/oas/v3.2.0.html | 2026-08-06 | W-01~W-03의 operation별 입력·응답·보안 요구를 구현과 분리된 API 설명 계약으로 검토하는 범위 |\n| `12-case-studies/first-full-stack-project.md` | https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html, https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html, https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/ | 2026-08-06 | 인증과 인가, 매 요청의 주체·대상·행동 확인, 다른 주최자의 모임과 다른 참가자의 신청을 다루는 부정 테스트 범위 |\n| `12-case-studies/first-full-stack-project.md` | https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html | 2026-08-06 | 운영 로그에서 토큰·세션 식별자·연결 문자열과 실제 개인정보를 제외하고 안전한 작업·결과 증거를 남기는 범위 |\n| `12-case-studies/first-full-stack-project.md` | https://www.postgresql.org/docs/18/tutorial-transactions.html, https://www.postgresql.org/docs/18/transaction-iso.html, https://www.postgresql.org/docs/18/ddl-constraints.html | 2026-08-06 | 참가 중복·정원·상태 판정을 위한 트랜잭션 원자성, 격리·직렬화 충돌, 제약과 `commit`·`rollback` 책임을 설명하는 범위 |\n| `12-case-studies/first-full-stack-project.md` | https://developer.mozilla.org/en-US/docs/Web/HTTP, https://developer.mozilla.org/en-US/curriculum/ | 2026-08-06 | 공개 조회·참가·취소의 요청·응답과 로딩·정상·없음·취소·전달 실패를 브라우저 화면 증거와 구분하는 교육 범위 |\n| `12-case-studies/first-full-stack-project.md` | https://git-scm.com/book/ko/v2 | 2026-08-06 | 작업 트리·staged diff·로컬 `commit`·원격 공유를 구분하고 한 수직 기능 조각의 변경 이력과 되돌릴 지점을 남기는 범위 |\n| `12-case-studies/first-full-stack-project.md` | https://docs.astro.build/en/guides/deploy/github/ | 2026-08-06 | 소스 검증·정적 빌드·배포 작업·사이트 URL과 공개 확인을 서로 다른 단계와 증거로 구분하는 기존 Astro 배포 사례 범위 |\n| `12-case-studies/analytics-dashboard-case-study.md` | https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics | 2026-08-04 | 사용자 요구를 설계·데이터 경계·테스트·배포·운영 증거와 추적하는 소프트웨어 생명주기 교육 범위 |"
        },
        {
          "start_line": 456,
          "end_line": 458,
          "text": "- `10-deployment-operations/logs-monitoring-backup.md` (`PBSG-011`, `PBSG-012`, 2026-08-13 확인): Google SRE Book, NIST SP 800-61 Rev. 3, NIST SP 800-34 Rev. 1과 CISA StopRansomware Guide를 위 장별 적용 기록에 연결했습니다. 이 자료는 SLI·SLO·SLA·오류 예산·행동 가능한 알림의 조직 실무, 인시던트 탐지·대응·복구·학습, RPO·RTO와 분리 백업·복원 시험의 일반 교육 범위를 직접 뒷받침합니다. Google 사례를 업계 표준·법적 SLA로, 미국 연방·랜섬웨어 지침을 모든 조직의 의무 절차로, 일반 복구 지침을 특정 공급자·캡스톤·실제 데이터의 복원 성공으로 확대하지 않으며 실제 제품 선택 때 현재 공식 문서와 승인된 격리 복원 증거를 다시 확인합니다.\n- `12-case-studies/first-full-stack-project.md` (`PBSG-020`): 기존에 확인한 SWEBOK·OpenAPI·OWASP·PostgreSQL·MDN·Git·Astro 출처를 모임 웹앱의 교육용 책임·판단 질문에 연결했습니다. 2026-08-13 Task 8의 Supabase·Vercel·Codex Sites 자료는 선택 질문의 선택적·날짜 고정 예시일 뿐 제품 조합·계정·데이터베이스·런타임·배포 환경을 채택하지 않았습니다. 따라서 마지막 한 자리의 구체적인 잠금·격리 구현, 부분 고유성 표현, 배포 환경별 마이그레이션, 로그, 백업 보존·격리 복원 시험과 운영 보장의 PBSG-020은 현재 제품 중립 교육 범위 밖인 `not-confirmed`로 유지하며, 실제 승인된 구현·배포 증거가 생기기 전에는 닫지 않습니다. 이 장과 Task 18의 문서·로컬 브라우저 증거는 실제 서비스 구현·배포·복구 완료를 주장하지 않습니다.\n- `12-case-studies/analytics-dashboard-case-study.md` 2026-08-05 역사적 적용 기록 (역사 전용·비출판): 당시 반도체 비교 원고의 미확인 목록은 과거 적용 범위 재현용이며 현재 주가 원고의 직접 근거나 `reviewEvidence`로 재사용하지 않습니다. 현행 원고에서 채택한 공백만 아래 현재 적용 기록과 PBSG-003·PBSG-012·PBSG-019·PBSG-026으로 추적합니다."
        }
      ]
    },
    {
      "path": "research/public-beta-source-gap-register.md",
      "sha256": "eefe11c1c41b74d3e01fa11dd403426584c4bb18dddbe8c1ca3782e4d05025bd",
      "segments": [
        {
          "start_line": 53,
          "end_line": 55,
          "text": "| PBSG-019 | PB-053 `analytics-dashboard-case-study.md` | 실제 시장 데이터를 후속 채택할 때 상품·시세·조정 방식·거래일·시간대·원천 버전·이용 조건·재배포 권리를 함께 검증하는 계약 | critical | 2026-08-13 KRX 공식 거래 가이드·호가 공개 페이지에서 특정 거래 시간·단위·호가 공개 항목은 확인했으나 실제 제공자·데이터를 채택하지 않았고 전체 필드 정의·corporate action 조정·시간대·원천 버전·이용 약관·라이선스·수집/가공/재배포 허용 묶음은 직접 확인하지 못함 | 실제 원천 채택이 별도 승인될 때 해당 제공자·거래소의 현재 공식 계약 전체를 확인하고 Task 25 권리 감사·공개 직전에 재확인 | not-confirmed | Task 25; 실제 원천 채택 별도 승인 범위 | `EDU-FIXTURE`를 실제 시장 사실·투자 판단 근거로 쓰거나 KRX의 특정 공개 항목·조회 가능성을 수집·가공·재배포 허용으로 해석하지 않습니다. |\n| PBSG-020 | PB-054 `first-full-stack-project.md` | 선택한 데이터베이스·런타임·배포 환경에서 정원 동시성, 고유성, 마이그레이션, 로그, 백업·복원의 구체 구현과 운영 보장 | important | source-map의 확인된 OpenAPI·OWASP·PostgreSQL 범위와 2026-08-13 Task 8의 선택적 제품 예시가 있으나, Task 18은 제품 조합·계정·데이터베이스·런타임·배포 환경을 채택하거나 구현·시험하지 않음 | 실제 제품 조합과 구현 범위가 별도 승인되고 대상 제품·버전의 공식 문서와 동시성·마이그레이션·로그·격리 복원 실행 증거가 생길 때 재확인 | not-confirmed | Task 18 이후 별도 승인 범위 | 현재 제품 중립 교육 범위 밖입니다. PostgreSQL 또는 Supabase·Vercel·Codex Sites 예시를 채택·계정·실제 구현·운영 보장으로 확대하지 않으며 Task 18의 문서·로컬 브라우저 검증으로 닫지 않습니다. |\n| PBSG-021 | PB-021 `software-is-a-system.md` | component·responsibility·boundary의 세부 의미, 캐시 사본의 최신성, 정적 전달이 충분한 조건과 브라우저 개발자 도구의 현재 명칭 | important | 소프트웨어 아키텍처 표준·SWEBOK 세부 자료, HTTP 캐시 표준, 웹 플랫폼·브라우저의 공식 정적 전달 및 개발자 도구 문서 | 2026-08-13 확인; 브라우저·웹 플랫폼 문서 상태 또는 예시 도구 변경 시 재확인 | confirmed | Task 12 | 여섯 렌즈를 업계 표준 분류로 만들거나 한 브라우저의 도구 이름·캐시 표시·정적 전달 조건을 모든 브라우저와 시스템에 일반화하지 않습니다. |"
        },
        {
          "start_line": 72,
          "end_line": 74,
          "text": "| PBSG-018 | 직접 해소 claim 없음 | Task 7 fact pack의 제품·환경별 상태 분리 원칙만 재사용 가능 | Codex·Claude Code의 `plan mode`·`workspace-write`·`read-only` 권한 보장은 Supabase·Vercel·Sites 기능 문서로 확인할 수 없으므로 `not-confirmed` 유지 | Task 8이 자동 해소하지 않으며 Task 19에서 OpenAI·Anthropic 공식 제품 자료를 별도 확인 |\n| PBSG-020 | SUPA-DB-01, SUPA-AUTH-01, SUPA-AUTHZ-01, SUPA-API-01, SUPA-SERVER-01, SUPA-MIG-01, SUPA-OPS-01, SUPA-LOG-01, SUPA-KEY-01, VERCEL-RUNTIME-01, VERCEL-DEPLOY-01, VERCEL-DATA-01, SITES-ARTIFACT-01, SITES-VERSION-01, SITES-HOST-01, SITES-RUNTIME-01 | 후보 제품의 저장·Auth·RLS·API·함수·마이그레이션·백업·로그·키·runtime·hosting·version 책임과 Sites 입력 archive의 미게시 경계 | Task 18에서도 실제 모임 앱의 제품 조합·계정·배포 환경을 선택하지 않았고 정원 동시성·고유성·인가 부정 테스트·마이그레이션·로그·백업·복원을 구현하거나 시험하지 않았으므로 현재 제품 중립 교육 범위 밖의 `not-confirmed` 유지 | 실제 구현 선택과 별도 승인이 생길 때 제품 공식 자료와 동시성·복원 실행 증거를 새 범위에서 고정 |\n"
        },
        {
          "start_line": 82,
          "end_line": 87,
          "text": "|---|---|---|---|---|\n| Supabase | SUPA-DB-01, SUPA-AUTH-01, SUPA-AUTHZ-01, SUPA-API-01, SUPA-SERVER-01, SUPA-MIG-01, SUPA-OPS-01, SUPA-LOG-01, SUPA-KEY-01 | 9개 행이며 `limited`인 서버 함수와 데이터베이스 백업은 조건부 기능으로 표시 | PBSG-005, PBSG-012, PBSG-020 | 실제 비밀 운영·전체 데이터 복구·모임 앱 제품 선택·인가·동시성·복원 성공은 미검증 |\n| Vercel | VERCEL-BUILD-01, VERCEL-RUNTIME-01, VERCEL-ENV-01, VERCEL-DEPLOY-01, VERCEL-DOMAIN-01, VERCEL-LOG-01, VERCEL-ROLLBACK-01, VERCEL-DATA-01 | 8개 행이며 `limited`인 Functions와 외부 storage 연결은 조건부 기능으로 표시 | PBSG-004, PBSG-005, PBSG-012, PBSG-020 | CI·배포 승인·외부 데이터·실제 URL·데이터 복구는 미검증 |\n| Codex Sites | SITES-VERSION-01, SITES-HOST-01, SITES-RUNTIME-01, SITES-DOMAIN-01 | 공개 공식 URL이 직접 뒷받침하는 4개 행만 게시 | PBSG-005, PBSG-020 | beta·계정·workspace·지원 패턴 차이와 실제 배포는 미검증 |\n| Codex Sites 미게시 | SITES-ARTIFACT-01, SITES-ROLLBACK-01 | 정확한 입력 아티팩트 구성·운영 롤백 범위는 공개 공식 근거 부족으로 기능 표에서 제외하고 미게시 경계만 설명 | PBSG-012, PBSG-020 | Sites 기능은 미확인이고 기능 부재 판정도 아닙니다. Task 16의 PBSG-012 `confirmed`는 제품 중립 복구 원칙 판정이며 이 미게시 기능이나 실제 복원 성공을 확인하지 않습니다. |\n"
        },
        {
          "start_line": 129,
          "end_line": 131,
          "text": "- PBSG-026은 W3C PROV-O·DCAT 3, SLSA v1.2와 Reproducible Builds 정의가 provenance·version·checksum·output digest·build provenance·bit-for-bit 재현의 일부를 직접 지원합니다. 교육용 data contract·canonical schema·freshness·관측값 상태·검토 전환·manifest 전체는 이 핸드북의 운영 규칙을 포함하고 선택 도구·실행 증거가 없으므로 `not-confirmed`를 유지합니다.\n- PBSG-020은 PB-054가 제품 조합·계정·구현·배포를 채택하지 않은 제품 중립 교육 범위라서 `not-confirmed`를 유지합니다. 세 행의 미확인 상태를 문서·로컬 브라우저 검사로 닫지 않았고, PBCA-011도 PBSG-019·026이 남아 있어 유지합니다.\n- 현재 집계는 `confirmed` 20개, `not-confirmed` 6개로 변하지 않습니다. 미확인 위험 집계도 critical 1개·important 5개·normal 0개이며 PBSG-013·014·018·019·020·026만 `not-confirmed`입니다."
        },
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
          "start_line": 80,
          "end_line": 82,
          "text": "| PB-053 | `src/content/docs/12-case-studies/analytics-dashboard-case-study.md` | capstone | 교육용 데이터 대시보드를 원천·계약·화면·운영까지 어떻게 인수하는가? | fixture와 실제 원천, 데이터·화면·배포·복구 증거를 구분한다. | draft | conform | conform | conform | conform | conform | PBCA-011 | conform | conform | needs_edit | Task 18; Task 25 | Task 18에서 D-01~D-05 각각의 요구→행동→변환→인터페이스→권리→위험→오라클→Git→운영 증거→복구 추적과 `EDU-FIXTURE`·last-known-good 경계를 확정했습니다. analytics 그림의 390px 핵심·보조 레이블 판독성은 Task 20 `aa13701`과 실제 Chrome 12상태·Codex `PASS`로 교정됐지만, PBSG-019·026은 전체 주장 묶음이 직접 확인되지 않아 `not-confirmed`이고 PBCA-011을 유지합니다. |\n| PB-054 | `src/content/docs/12-case-studies/first-full-stack-project.md` | capstone | 모임 참가 웹앱을 요구에서 운영 인수까지 어떻게 추적하는가? | 화면·API·데이터·인증·테스트·Git·배포·운영을 연결한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 20 resolved | Task 18에서 W-01~W-05 각각의 요구→행동→상태→인터페이스→권한→위험→오라클→Git→운영 증거→복구 추적과 제품 미채택 경계를 확정했습니다. meeting 그림의 390px 핵심·보조 레이블 판독성은 Task 20 `75113a5`와 실제 Chrome 6상태·Codex `PASS`로 교정됐습니다. |\n| PB-055 | `src/content/docs/reference/agent-output-glossary.md` | reference | 에이전트 출력의 상태·권한·검증 용어는 무엇을 보장하는가? | 대상·시점·부작용·증거로 로그 용어를 해석한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 7; Task 8; Task 19 | 제품 중립 용어의 행동·상태·부작용·확인 질문은 보존하고, 2026-08-20 current-tool에 Codex·Claude Code의 `plan mode`·`workspace-write`·`read-only` 명칭·권한·sandbox 경계와 공식 URL·문서 상태·조건·일반화 금지선을 분리해 PBCA-008을 닫았습니다. |"
        },
        {
          "start_line": 101,
          "end_line": 103,
          "text": "- 양방향 추적: 시각 finding이 있는 영향 문서 15개의 `VISUAL` 셀은 PBVA ID를 역참조합니다. 공유 자산의 각 소비 문맥을 별도로 대조했으며 15개 occurrence의 감사 대응이 모두 추적되고 미배정 occurrence는 0개입니다.\n- 당시 파생 수치: Task 6은 기존 conform 문서 PB-028·PB-044·PB-046·PB-052·PB-054를 `needs_edit`로 바꿨습니다. Task 8의 새 current-tool 문서를 더하기 전 판정은 conform 17개·needs_edit 27개·needs_rewrite 14개이고, 전체 stable finding은 Critical 0개·Important 15개·Minor 1개였습니다. Task 5 Fix Round 1의 22·22·14와 0·10·1은 시각 픽셀 감사 전 역사적 기준선으로 보존합니다.\n- 수정 경계: Task 6은 공개 원고·SVG·Mermaid를 수정하지 않았습니다. PBVA-001~PBVA-005는 모두 Task 20의 변경·검증 기준에 배정됐고, M1-03 감사 완료는 실제 시각 결함 교정이나 M4 완료를 뜻하지 않습니다."
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
          "start_line": 25,
          "end_line": 32,
          "text": "| PBV-06 `full-stack-flow` | `src/assets/diagrams/full-stack-flow.svg` | `src/assets/diagrams/source/full-stack-flow.mmd` | PB-025 `client-server-full-stack.md`; PB-027 `http-request-response.md`; PB-032 `browser-dom-rendering.md` | 사용자 요청·응답이 프런트엔드·백엔드·저장소·외부 서비스 경계를 어떻게 오가는가? | 세로 왕복·백엔드 분기 | 5 | 8 | 요청·응답 2그룹 | 고유 title/desc와 세 원고의 앞 관찰문·뒤 비증명문·alt가 일치합니다. | `560×1172`, viewBox·width·height 일치 | 2026-08-28 실제Chrome18상태, mobile358×749px core17.9/detail12.79px 판독. 저장소와 선택적 외부 서비스가 백엔드 아래 분기합니다. | 명시light/dark marker2·실선 요청과 점선 반환·범례가 일치합니다. | replace | diagram-design | `6b4ac94`; Codex `PASS` C0/I0/M0; PBVA-002·003·004 자산 조건 충족; Claude pending |\n| PBV-07 `git-flow` | `src/assets/diagrams/git-flow.svg` | `src/assets/diagrams/source/git-flow.mmd` | PB-044 `git-and-github.md` | 어디까지 로컬 상태이며 어떤 명령이 원격으로 보내는가? | 세로 상태 전이 | 4 | 3 | 로컬3·원격1 경계 | 고유title/desc·기존alt·추가앞질문·기존7행동/비증명 계약 일치. | `480×864`, viewBox·width·height 일치 | 2026-08-28 Chrome6상태 mobile358×644px core20.88/sub·command17.9/note14.92px 판독. | 명시marker2·로컬실선묶음/원격점선·명령레이블 양테마 가시성 확인. | reflow | diagram-design | `1b26e10`; Codex `PASS` C0/I0/M0; PBVA-003·004 자산 조건 충족; Claude pending |\n| PBV-08 `meeting-webapp-architecture` | `src/assets/diagrams/meeting-webapp-architecture.svg` | `src/assets/diagrams/source/meeting-webapp-architecture.mmd` | PB-054 `first-full-stack-project.md` | 화면·애플리케이션·데이터·운영 증거의 책임과 신뢰 경계는 무엇인가? | 계층 아키텍처 | 5 | 6 | 애플리케이션 경계 1그룹 | 고유 title/desc/role/aria·alt, 앞 읽을 질문과 뒤 비증명 한계 두 문장을 명시했습니다. | `560×952`, viewBox·width·height 일치 | 2026-08-28 실제 Chrome6상태: 모바일358×609px core17.9/detail12.8px 판독. DB/운영 증거의 같은 층 분기와 왕복 방향을 구분했습니다. | explicit marker2·선·박스·글자가 테마별 가시색으로 전환됩니다. | reflow | diagram-design | `75113a5`; Codex `PASS` C0/I0/M0; PBVA-004 자산 조건 충족; Claude pending |\n| PBV-09 `operations-recovery-loop` | `src/assets/diagrams/operations-recovery-loop.svg` | `src/assets/diagrams/source/operations-recovery-loop.mmd` | PB-048 `logs-monitoring-backup.md` | 신호 수집에서 안정화·복구·검증·학습까지 어떻게 순환하는가? | 세로 단계+피드백 | 7 | 7 | 신호·학습 2그룹 | 고유 title·desc·role·aria, alt·7단계와 Fix Round 1의 병행 가능/비증명 원고가 일치합니다. | `560×1000`, viewBox·width·height 일치 | 2026-08-28 실제 Chrome6상태: 모바일358×639px, 핵심 약17.9px·보조 약12.8px를 원본 크기로 판독했습니다. 글자를 키워 이전보다 약149px 길어졌습니다. | explicit light/dark marker4와 주흐름·점선 피드백·박스·글자가 전환됩니다. | reflow | diagram-design | `cf193f6`; 최초 I1 뒤 Fix Round 1 same-reviewer `PASS` C0/I0/M0; PBVA-003 자산 조건 충족; Claude pending |\n| PBV-10 `prd-sdd-tdd` | `src/assets/diagrams/prd-sdd-tdd.svg` | `src/assets/diagrams/source/prd-sdd-tdd.mmd` | PB-036 `prd-sdd-tdd.md` | 문제·요구·설계·스펙·작업·구현·검증이 어떻게 추적 가능한 연결을 이루는가? | 분기·수렴+피드백 | 7 | 8 | 요구·증거 중심 | 2026-08-28 질문/정확alt 보완·기존뒤추적설명 보존·고유title/desc 일치. | `480×1280`, viewBox·width·height 일치 | Chrome6/6·358×954.7px·core20.88/detail17.9/note14.92·원본그림/상단 및 문맥/full배치 확인. | 명시marker4·실선7/점선1·실제양테마 방향 확인·focused277/XML/full/Chrome 통과. | replace | diagram-design | `9f10b20`; Codex `PASS` C0/I0/M0; PBVA-002·004 자산 조건 충족; Claude pending |\n| PBV-11 `software-lifecycle` | `src/assets/diagrams/software-lifecycle.svg` | `src/assets/diagrams/source/software-lifecycle.mmd` | PB-039 `software-development-lifecycle.md` | 문제 이해부터 운영 학습까지 어떤 증거와 피드백이 이어지는가? | 세로6묶음+좌우A/B귀환 | 6 | 7 | 검증·운영 2그룹 | 2026-08-28 앞질문/alt/뒤한계 보완·8단계와6묶음 대응·나머지원고 byte불변·title/desc 일치. | `480×1080`, viewBox·width·height 일치 | 실제Chrome6/6·358×805.5px·core20.88/detail17.9/note14.92, 원본그림/상단 및 문맥·full배치 확인. | 명시marker4·실선/점선/A/B·모든방향 확인, 최종243/XML/full/Chrome 통과. | reflow | diagram-design | `2a04764`; Codex `PASS` C0/I0/M0; PBVA-003·004·005 조건 충족; Claude pending |\n| PBV-12 `agent-feedback-loop` | `src/assets/diagrams/agent-feedback-loop.svg` | `src/assets/diagrams/source/agent-feedback-loop.mmd` | PB-052 `working-with-coding-agents.md` | 에이전트가 상태 확인부터 문맥 갱신까지 어떤 증거 루프로 작업하는가? | 세로 단계+피드백 | 7 | 7 | 리뷰·갱신 2그룹 | 고유 title·desc·role·aria와 원고의 질문지도/비증명 경계가 일치하며 원고는 불변입니다. | `560×1000`, viewBox·width·height 일치 | 2026-08-28 실제 Chrome6상태: 모바일358×639px core17.9/detail12.8px·하단 안내 판독. 보조 글자를 키워 이전보다 약149px 길어졌습니다. | explicit marker4·주 흐름·점선 피드백이 선과 같은 가시색으로 전환됩니다. | reflow | diagram-design | `2ccd9f4`; Codex `PASS` C0/I0/M0; PBVA-003 자산 조건 충족; Claude pending |\n| PBV-13 `architecture-decision-layers` | `src/assets/diagrams/architecture-decision-layers.svg` | `src/assets/diagrams/source/architecture-decision-layers.mmd` | PB-035 `architecture-and-frameworks.md` | 사용자 문제에서 책임·품질·구조·기술 선택·구현을 지나 검증 증거와 변경 조건까지 어떤 순서로 판단하는가? | 세로 단계 흐름 | 7 | 6 | 문제·증거 2그룹 | 고유 title/desc, alt와 그림 앞 읽기 질문·뒤 비증명 설명이 모두 있습니다. | `560×772`, viewBox·width·height 일치 | 358×494px에서 약 15px 핵심 레이블 7개와 화살표 방향을 확대 없이 읽을 수 있습니다. | 박스·글자·선과 explicit light/dark marker fill이 모두 테마에 맞게 전환됩니다. | keep | diagram-design; Archify 미사용(선형 7노드) | Task 21; Task 10 뒤 keep 유지 |"
        },
        {
          "start_line": 70,
          "end_line": 72,
          "text": "| PBV-07 | `/09-git-github/git-and-github/` | git-flow | 6상태·원본 화면 확인; marker·모바일 판독 결함 0; Codex PASS |\n| PBV-08 | `/12-case-studies/first-full-stack-project/` | meeting-webapp-architecture | 6상태·원본 화면 확인; 모바일 판독·overflow 결함 0; Codex PASS |\n| PBV-09 | `/10-deployment-operations/logs-monitoring-backup/` | operations-recovery-loop | 6상태·원본 화면과 Fix Round 1 문맥 확인; marker·비증명 경계 결함 0; same-reviewer PASS |"
        },
        {
          "start_line": 83,
          "end_line": 86,
          "text": "| PBVA-002 | Important (resolved) | PBV-04, PBV-05, PBV-06, PBV-10 | Task 6에서 관찰한 SVG·source·원고 topology 차이를 네 자산의 학습 질문에 맞춰 함께 교정했습니다. context의 책임 연결, deploy의 콘텐츠/이름 조회 분리, full-stack의 저장소/외부 서비스 독립 분기, PRD의 분기·수렴·대표 피드백이 현재 SVG·Mermaid·alt·앞뒤 설명에서 일치합니다. | 현재 의미 동기화를 유지하고 후속 변경 시 SVG·Mermaid·원고를 같은 단위에서 검증합니다. | Task 20 resolved | 네 자산별 focused semantic 검사와 실제 Chrome 36상태, 각각의 별도 Codex `PASS` C0/I0/M0, 전체 참조·빌드 검사와 합동 closeout 재검토를 통과했습니다. |\n| PBVA-003 | Important (resolved) | PBV-01, PBV-04, PBV-05, PBV-06, PBV-07, PBV-09, PBV-11, PBV-12 | 여덟 SVG의 marker fill을 주 흐름·반환·피드백 선 의미와 light/dark 테마에 맞는 명시적 변수·class로 연결했습니다. | 명시 marker와 참조 선의 동일 의미·가시색을 유지합니다. | Task 20 resolved | 여덟 자산의 실제 Chrome 60상태에서 화살촉 소실·대비 결함 0개를 원본 crop으로 확인했고, 자산별 Codex 최종 PASS와 합동 closeout 재검토가 C0/I0/M0였습니다. |\n| PBVA-004 | Important (resolved) | PBV-01, PBV-02, PBV-04, PBV-05, PBV-06, PBV-07, PBV-08, PBV-10, PBV-11 | 아홉 자산을 모바일 세로 재배치·관계 단순화·단계 묶음으로 교정해 실제 콘텐츠 폭 358px에서 핵심·보조 레이블과 관계를 기본 확대에서 읽을 수 있게 했습니다. | 현재 세로 레이아웃과 원고의 이동 세부·비증명 설명을 유지합니다. | Task 20 resolved | 아홉 자산의 실제 Chrome 72상태에서 핵심·보조 레이블 판독, 내부 겹침·잘림·전역 overflow 0개를 확인했고, 자산별 Codex 최종 PASS와 합동 closeout 재검토가 C0/I0/M0였습니다. |\n| PBVA-005 | Important (resolved) | PBV-11 | 그림 앞에 불확실성과 피드백을 읽는 질문을, 뒤에 선형 강제 절차가 아니며 운영·검증 증거가 앞 결정을 재검토하게 한다는 범위와 한계를 추가했습니다. | 질문·alt·6개 책임 묶음·대표 피드백 A/B·비증명 설명의 일치를 유지합니다. | Task 20 resolved | 원고·SVG·Mermaid 의미 검사, actual Chrome 6상태의 인접 문맥, 자산별 Codex PASS와 합동 closeout 재검토 C0/I0/M0를 확인했습니다. |"
        }
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "sha256": "d8b7d161a9ec2ae6314779cea9d816f6185b986ce151ff05c7280b6ebd0e453e",
      "segments": [
        {
          "start_line": 275,
          "end_line": 303,
          "text": "    },\n    {\n      \"id\": \"R11\",\n      \"slug\": \"coding-agents\",\n      \"method\": \"개별 심층\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/11-ai-native/working-with-coding-agents.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r11-coding-agents-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r11-coding-agents-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r11-coding-agents-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r11-coding-agents-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r11-coding-agents-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r11-coding-agents-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"b6c9b9ee54fb560076d813dfdcd8f9a39cce9b163df36b57e60c6461b231aa2b\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important2-minor2-and-procedure-important1-resolved\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"b4e9e6b2354bbe19faea189931823fdd682f2f9a657187d44cfadd5ca7a3b44c\",\"current_target_sha256\":\"ac63eb2a468416b43c57432ac4297e0af3c27edf6d694b86a40bca7131311711\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r11-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r11-coding-agents-codex-rereview.md\",\"next_scope\":\"R12 pending; no M5/ready/public approval\"}\n    },\n    {\n      \"id\": \"R12\",\n      \"slug\": \"meeting-capstone\",\n      \"method\": \"개별 심층\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/12-case-studies/first-full-stack-project.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r12-meeting-capstone-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r12-meeting-capstone-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r12-meeting-capstone-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r12-meeting-capstone-codex-rereview.md\"\n    },\n    {\n      \"id\": \"R13\",\n      \"slug\": \"stock-capstone\",\n      \"method\": \"개별 심층\",\n      \"implementation_state\": \"작성·구현 완료\","
        }
      ]
    }
  ],
  "render_provenance": {
    "manifest_path": "output/playwright/task20-meeting-evidence/manifest.jsonl",
    "manifest_sha256": "56647cce10937e581ac06b0665354629ff7667b5ac20993d7e73773aab2f02e9",
    "context_manifest_path": "output/playwright/r12-table-probe-20261115/observations.json",
    "context_manifest_sha256": "73a9b0d04c741695482fbd0e905224f7d5633ffabee52d7438231d8c3164fcf7",
    "input_files": [
      {
        "path": "src/assets/diagrams/meeting-webapp-architecture.svg",
        "sha256": "d82fe6acd7659e4466401d05545cc044d5a7975a3264439bde0842f0a7e23fae",
        "unchanged": true
      },
      {
        "path": "src/assets/diagrams/source/meeting-webapp-architecture.mmd",
        "sha256": "e867219713f8698d5169a518e6b1cb3f8dac8e4c4670b274ba657a06d05c2301",
        "unchanged": true
      },
      {
        "path": "src/content/docs/12-case-studies/first-full-stack-project.md",
        "sha256": "3d68c94a5f452721f9172a9cf127b118246fd95cd248ced505e13f0c5e274791",
        "unchanged": true
      }
    ],
    "states": [
      {
        "occurrence_id": "pb-054@1440x1000-light",
        "recorded_at": "2026-08-27T16:49:55.388Z",
        "route": "/12-case-studies/first-full-stack-project/",
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        },
        "theme": "light",
        "checks": {
          "http": true,
          "route": true,
          "h1": true,
          "draft": true,
          "real_chrome": true,
          "themes": true,
          "image": true,
          "identity": true,
          "topology": true,
          "markers": true,
          "labels": true,
          "overflow": true,
          "screenshots": true,
          "console": true,
          "page_errors": true,
          "request_failures": true,
          "external_requests": true
        },
        "verification_scope": "Capture and DOM/source checks only; pixels, tile seams, independent review and closeout remain pending",
        "pixel_review": "pending",
        "independent_review": "blocked: subscription_unverified",
        "crop_relationship": "same-state direct page.screenshot fullPage+SVG bounding clip; not extracted from the assembled full PNG and no pixel identity between separate captures is claimed"
      },
      {
        "occurrence_id": "pb-054@1440x1000-dark",
        "recorded_at": "2026-08-27T16:49:55.389Z",
        "route": "/12-case-studies/first-full-stack-project/",
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        },
        "theme": "dark",
        "checks": {
          "http": true,
          "route": true,
          "h1": true,
          "draft": true,
          "real_chrome": true,
          "themes": true,
          "image": true,
          "identity": true,
          "topology": true,
          "markers": true,
          "labels": true,
          "overflow": true,
          "screenshots": true,
          "console": true,
          "page_errors": true,
          "request_failures": true,
          "external_requests": true
        },
        "verification_scope": "Capture and DOM/source checks only; pixels, tile seams, independent review and closeout remain pending",
        "pixel_review": "pending",
        "independent_review": "blocked: subscription_unverified",
        "crop_relationship": "same-state direct page.screenshot fullPage+SVG bounding clip; not extracted from the assembled full PNG and no pixel identity between separate captures is claimed"
      },
      {
        "occurrence_id": "pb-054@1024x768-light",
        "recorded_at": "2026-08-27T16:49:55.389Z",
        "route": "/12-case-studies/first-full-stack-project/",
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        },
        "theme": "light",
        "checks": {
          "http": true,
          "route": true,
          "h1": true,
          "draft": true,
          "real_chrome": true,
          "themes": true,
          "image": true,
          "identity": true,
          "topology": true,
          "markers": true,
          "labels": true,
          "overflow": true,
          "screenshots": true,
          "console": true,
          "page_errors": true,
          "request_failures": true,
          "external_requests": true
        },
        "verification_scope": "Capture and DOM/source checks only; pixels, tile seams, independent review and closeout remain pending",
        "pixel_review": "pending",
        "independent_review": "blocked: subscription_unverified",
        "crop_relationship": "same-state direct page.screenshot fullPage+SVG bounding clip; not extracted from the assembled full PNG and no pixel identity between separate captures is claimed"
      },
      {
        "occurrence_id": "pb-054@1024x768-dark",
        "recorded_at": "2026-08-27T16:49:55.389Z",
        "route": "/12-case-studies/first-full-stack-project/",
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        },
        "theme": "dark",
        "checks": {
          "http": true,
          "route": true,
          "h1": true,
          "draft": true,
          "real_chrome": true,
          "themes": true,
          "image": true,
          "identity": true,
          "topology": true,
          "markers": true,
          "labels": true,
          "overflow": true,
          "screenshots": true,
          "console": true,
          "page_errors": true,
          "request_failures": true,
          "external_requests": true
        },
        "verification_scope": "Capture and DOM/source checks only; pixels, tile seams, independent review and closeout remain pending",
        "pixel_review": "pending",
        "independent_review": "blocked: subscription_unverified",
        "crop_relationship": "same-state direct page.screenshot fullPage+SVG bounding clip; not extracted from the assembled full PNG and no pixel identity between separate captures is claimed"
      },
      {
        "occurrence_id": "pb-054@390x844-light",
        "recorded_at": "2026-08-27T16:49:55.389Z",
        "route": "/12-case-studies/first-full-stack-project/",
        "viewport": {
          "id": "mobile",
          "width": 390,
          "height": 844
        },
        "theme": "light",
        "checks": {
          "http": true,
          "route": true,
          "h1": true,
          "draft": true,
          "real_chrome": true,
          "themes": true,
          "image": true,
          "identity": true,
          "topology": true,
          "markers": true,
          "labels": true,
          "overflow": true,
          "screenshots": true,
          "console": true,
          "page_errors": true,
          "request_failures": true,
          "external_requests": true
        },
        "verification_scope": "Capture and DOM/source checks only; pixels, tile seams, independent review and closeout remain pending",
        "pixel_review": "pending",
        "independent_review": "blocked: subscription_unverified",
        "crop_relationship": "same-state direct page.screenshot fullPage+SVG bounding clip; not extracted from the assembled full PNG and no pixel identity between separate captures is claimed"
      },
      {
        "occurrence_id": "pb-054@390x844-dark",
        "recorded_at": "2026-08-27T16:49:55.389Z",
        "route": "/12-case-studies/first-full-stack-project/",
        "viewport": {
          "id": "mobile",
          "width": 390,
          "height": 844
        },
        "theme": "dark",
        "checks": {
          "http": true,
          "route": true,
          "h1": true,
          "draft": true,
          "real_chrome": true,
          "themes": true,
          "image": true,
          "identity": true,
          "topology": true,
          "markers": true,
          "labels": true,
          "overflow": true,
          "screenshots": true,
          "console": true,
          "page_errors": true,
          "request_failures": true,
          "external_requests": true
        },
        "verification_scope": "Capture and DOM/source checks only; pixels, tile seams, independent review and closeout remain pending",
        "pixel_review": "pending",
        "independent_review": "blocked: subscription_unverified",
        "crop_relationship": "same-state direct page.screenshot fullPage+SVG bounding clip; not extracted from the assembled full PNG and no pixel identity between separate captures is claimed"
      }
    ]
  },
  "images": [
    {
      "id": "R12-PNG-01",
      "order": 1,
      "path": "output/playwright/task20-meeting-evidence/top-viewports/pb-054-desktop-light-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539.png",
      "sha256": "e2349e0903c92f691da4f3c6e64b70dc1e08ca83bd783437dfe29fca337adb24",
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
      "occurrence_id": "pb-054@1440x1000-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539",
        "occurrence_id": "pb-054@1440x1000-light",
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        },
        "theme": "light",
        "source_current_url": "http://127.0.0.1:4341/_astro/meeting-webapp-architecture.6QNHagj-_BPgDU.svg",
        "source_svg_sha256": "d82fe6acd7659e4466401d05545cc044d5a7975a3264439bde0842f0a7e23fae",
        "full_page": false,
        "scroll_reset": {
          "x": 0,
          "y": 0,
          "containers": [
            0,
            0
          ]
        },
        "decode_and_two_animation_frames": true
      }
    },
    {
      "id": "R12-PNG-02",
      "order": 2,
      "path": "output/playwright/task20-meeting-evidence/diagram-crops/pb-054-desktop-light-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-meeting-direct.png",
      "sha256": "29afb6ef4b9af59ec7ab5a911a259e27843ed9783e70f46d390c22d5ad60ea7e",
      "dimensions": {
        "width": 560,
        "height": 953
      },
      "kind": "diagram",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "occurrence_id": "pb-054@1440x1000-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539",
        "occurrence_id": "pb-054@1440x1000-light",
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        },
        "theme": "light",
        "source_current_url": "http://127.0.0.1:4341/_astro/meeting-webapp-architecture.6QNHagj-_BPgDU.svg",
        "source_svg_sha256": "d82fe6acd7659e4466401d05545cc044d5a7975a3264439bde0842f0a7e23fae",
        "full_page": true,
        "clip": {
          "x": 324,
          "y": 2682,
          "width": 560,
          "height": 953
        },
        "source_dom_box": {
          "x": 324,
          "y": 2682.359375,
          "width": 560,
          "height": 952
        },
        "final_crop_replacement": "Same-state fullPage plus explicit clip; parent must inspect original pixels, not a locator capture",
        "scroll_reset": {
          "x": 0,
          "y": 0,
          "containers": [
            0,
            0
          ]
        },
        "decode_and_two_animation_frames": true
      }
    },
    {
      "id": "R12-PNG-03",
      "order": 3,
      "path": "output/playwright/task20-meeting-evidence/accepted/pb-054-1440x1000-light-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-full.png",
      "sha256": "6a8d1b3e723a126874cd794f58730075b8a6c0c4e032cd2b7713087ef6b19023",
      "dimensions": {
        "width": 1440,
        "height": 20506
      },
      "kind": "full-page-overview",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "occurrence_id": "pb-054@1440x1000-light",
      "capture_method": "RGBA row concatenation of actual bounded Chrome PNGs",
      "provenance": {
        "method": "RGBA row concatenation of actual bounded Chrome PNGs",
        "tiles": [
          "output/playwright/task20-meeting-evidence/tiles/pb-054-desktop-light-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-tile-00.png",
          "output/playwright/task20-meeting-evidence/tiles/pb-054-desktop-light-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-tile-01.png",
          "output/playwright/task20-meeting-evidence/tiles/pb-054-desktop-light-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-tile-02.png"
        ],
        "seams": [
          {
            "y": 7936,
            "overlap": 64,
            "pixel_sha256": "9bc62de9443f1731be06675f943e281fa3bb17d8f1409f2fdaba67c8acc3c4a9"
          },
          {
            "y": 15872,
            "overlap": 64,
            "pixel_sha256": "0130a319664b7d7e0b8e7d9b3abc10a20f6cd6a0d821ded96797b79d5fa86e71"
          }
        ],
        "exact_source_pixel_match": true,
        "no_dom_change": true
      }
    },
    {
      "id": "R12-PNG-04",
      "order": 4,
      "path": "output/playwright/task20-meeting-evidence/top-viewports/pb-054-desktop-dark-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539.png",
      "sha256": "efe772726326e3c3d593904103324ec3b46c22dfcbec54177feef9989e22fffe",
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
      "occurrence_id": "pb-054@1440x1000-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539",
        "occurrence_id": "pb-054@1440x1000-dark",
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        },
        "theme": "dark",
        "source_current_url": "http://127.0.0.1:4341/_astro/meeting-webapp-architecture.6QNHagj-_BPgDU.svg",
        "source_svg_sha256": "d82fe6acd7659e4466401d05545cc044d5a7975a3264439bde0842f0a7e23fae",
        "full_page": false,
        "scroll_reset": {
          "x": 0,
          "y": 0,
          "containers": [
            0,
            0
          ]
        },
        "decode_and_two_animation_frames": true
      }
    },
    {
      "id": "R12-PNG-05",
      "order": 5,
      "path": "output/playwright/task20-meeting-evidence/diagram-crops/pb-054-desktop-dark-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-meeting-direct.png",
      "sha256": "590eb26096c6cf21f10da5673fa8b5d81c17eb32865abff4d2e3bf11e30e9f0e",
      "dimensions": {
        "width": 560,
        "height": 953
      },
      "kind": "diagram",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "occurrence_id": "pb-054@1440x1000-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539",
        "occurrence_id": "pb-054@1440x1000-dark",
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        },
        "theme": "dark",
        "source_current_url": "http://127.0.0.1:4341/_astro/meeting-webapp-architecture.6QNHagj-_BPgDU.svg",
        "source_svg_sha256": "d82fe6acd7659e4466401d05545cc044d5a7975a3264439bde0842f0a7e23fae",
        "full_page": true,
        "clip": {
          "x": 324,
          "y": 2682,
          "width": 560,
          "height": 953
        },
        "source_dom_box": {
          "x": 324,
          "y": 2682.359375,
          "width": 560,
          "height": 952
        },
        "final_crop_replacement": "Same-state fullPage plus explicit clip; parent must inspect original pixels, not a locator capture",
        "scroll_reset": {
          "x": 0,
          "y": 0,
          "containers": [
            0,
            0
          ]
        },
        "decode_and_two_animation_frames": true
      }
    },
    {
      "id": "R12-PNG-06",
      "order": 6,
      "path": "output/playwright/task20-meeting-evidence/accepted/pb-054-1440x1000-dark-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-full.png",
      "sha256": "04dd68491334047bc0191db6a6812aeb42a177c8afd6c29d0d82f8fa399fe4e2",
      "dimensions": {
        "width": 1440,
        "height": 20506
      },
      "kind": "full-page-overview",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "occurrence_id": "pb-054@1440x1000-dark",
      "capture_method": "RGBA row concatenation of actual bounded Chrome PNGs",
      "provenance": {
        "method": "RGBA row concatenation of actual bounded Chrome PNGs",
        "tiles": [
          "output/playwright/task20-meeting-evidence/tiles/pb-054-desktop-dark-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-tile-00.png",
          "output/playwright/task20-meeting-evidence/tiles/pb-054-desktop-dark-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-tile-01.png",
          "output/playwright/task20-meeting-evidence/tiles/pb-054-desktop-dark-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-tile-02.png"
        ],
        "seams": [
          {
            "y": 7936,
            "overlap": 64,
            "pixel_sha256": "ba4661ea7b5e001342a7169f0b23d2897f783ee6dafc4b9e8a8169a0e9be203b"
          },
          {
            "y": 15872,
            "overlap": 64,
            "pixel_sha256": "8849f086a7bd37d0f9ea703e68f126570e8cd7c4b3bd025201a60890afc064b6"
          }
        ],
        "exact_source_pixel_match": true,
        "no_dom_change": true
      }
    },
    {
      "id": "R12-PNG-07",
      "order": 7,
      "path": "output/playwright/task20-meeting-evidence/top-viewports/pb-054-tablet-light-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539.png",
      "sha256": "42962fe0e3607cbbdb22389fde215c44ddcb58ece74e450be69745ff4c0b9fbb",
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
      "occurrence_id": "pb-054@1024x768-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539",
        "occurrence_id": "pb-054@1024x768-light",
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        },
        "theme": "light",
        "source_current_url": "http://127.0.0.1:4341/_astro/meeting-webapp-architecture.6QNHagj-_BPgDU.svg",
        "source_svg_sha256": "d82fe6acd7659e4466401d05545cc044d5a7975a3264439bde0842f0a7e23fae",
        "full_page": false,
        "scroll_reset": {
          "x": 0,
          "y": 0,
          "containers": [
            0,
            0
          ]
        },
        "decode_and_two_animation_frames": true
      }
    },
    {
      "id": "R12-PNG-08",
      "order": 8,
      "path": "output/playwright/task20-meeting-evidence/diagram-crops/pb-054-tablet-light-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-meeting-direct.png",
      "sha256": "ea3cb0cadd2737177c7824a00ba95b5303d3b738ef7b53ad5a36a49678f8e903",
      "dimensions": {
        "width": 560,
        "height": 953
      },
      "kind": "diagram",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "light",
      "occurrence_id": "pb-054@1024x768-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539",
        "occurrence_id": "pb-054@1024x768-light",
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        },
        "theme": "light",
        "source_current_url": "http://127.0.0.1:4341/_astro/meeting-webapp-architecture.6QNHagj-_BPgDU.svg",
        "source_svg_sha256": "d82fe6acd7659e4466401d05545cc044d5a7975a3264439bde0842f0a7e23fae",
        "full_page": true,
        "clip": {
          "x": 316,
          "y": 2856,
          "width": 560,
          "height": 953
        },
        "source_dom_box": {
          "x": 316,
          "y": 2856.9375,
          "width": 560,
          "height": 952
        },
        "final_crop_replacement": "Same-state fullPage plus explicit clip; parent must inspect original pixels, not a locator capture",
        "scroll_reset": {
          "x": 0,
          "y": 0,
          "containers": [
            0,
            0
          ]
        },
        "decode_and_two_animation_frames": true
      }
    },
    {
      "id": "R12-PNG-09",
      "order": 9,
      "path": "output/playwright/task20-meeting-evidence/accepted/pb-054-1024x768-light-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-full.png",
      "sha256": "9bea9b69dac63e75d9b6cc99a76133000bbabc91f5c591028ddb1346c0b1dfae",
      "dimensions": {
        "width": 1024,
        "height": 21343
      },
      "kind": "full-page-overview",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "light",
      "occurrence_id": "pb-054@1024x768-light",
      "capture_method": "RGBA row concatenation of actual bounded Chrome PNGs",
      "provenance": {
        "method": "RGBA row concatenation of actual bounded Chrome PNGs",
        "tiles": [
          "output/playwright/task20-meeting-evidence/tiles/pb-054-tablet-light-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-tile-00.png",
          "output/playwright/task20-meeting-evidence/tiles/pb-054-tablet-light-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-tile-01.png",
          "output/playwright/task20-meeting-evidence/tiles/pb-054-tablet-light-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-tile-02.png"
        ],
        "seams": [
          {
            "y": 7936,
            "overlap": 64,
            "pixel_sha256": "7560896bcbd2df6b462506bc091924190d2ad67eee07f792302e9adafcd8e4a8"
          },
          {
            "y": 15872,
            "overlap": 64,
            "pixel_sha256": "265e6291166e2af58e62f5ad252c58828cd1747e25f234aed0b996c454dab185"
          }
        ],
        "exact_source_pixel_match": true,
        "no_dom_change": true
      }
    },
    {
      "id": "R12-PNG-10",
      "order": 10,
      "path": "output/playwright/task20-meeting-evidence/top-viewports/pb-054-tablet-dark-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539.png",
      "sha256": "30f57a0487fda3b6966b9b83deba812ed97393a6168a0d2089b24236b0342114",
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
      "occurrence_id": "pb-054@1024x768-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539",
        "occurrence_id": "pb-054@1024x768-dark",
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        },
        "theme": "dark",
        "source_current_url": "http://127.0.0.1:4341/_astro/meeting-webapp-architecture.6QNHagj-_BPgDU.svg",
        "source_svg_sha256": "d82fe6acd7659e4466401d05545cc044d5a7975a3264439bde0842f0a7e23fae",
        "full_page": false,
        "scroll_reset": {
          "x": 0,
          "y": 0,
          "containers": [
            0,
            0
          ]
        },
        "decode_and_two_animation_frames": true
      }
    },
    {
      "id": "R12-PNG-11",
      "order": 11,
      "path": "output/playwright/task20-meeting-evidence/diagram-crops/pb-054-tablet-dark-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-meeting-direct.png",
      "sha256": "ea4f884fad2f778e6078691c35434b151efcad95a067bb1cda65eadf4d2606f4",
      "dimensions": {
        "width": 560,
        "height": 953
      },
      "kind": "diagram",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "dark",
      "occurrence_id": "pb-054@1024x768-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539",
        "occurrence_id": "pb-054@1024x768-dark",
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        },
        "theme": "dark",
        "source_current_url": "http://127.0.0.1:4341/_astro/meeting-webapp-architecture.6QNHagj-_BPgDU.svg",
        "source_svg_sha256": "d82fe6acd7659e4466401d05545cc044d5a7975a3264439bde0842f0a7e23fae",
        "full_page": true,
        "clip": {
          "x": 316,
          "y": 2856,
          "width": 560,
          "height": 953
        },
        "source_dom_box": {
          "x": 316,
          "y": 2856.9375,
          "width": 560,
          "height": 952
        },
        "final_crop_replacement": "Same-state fullPage plus explicit clip; parent must inspect original pixels, not a locator capture",
        "scroll_reset": {
          "x": 0,
          "y": 0,
          "containers": [
            0,
            0
          ]
        },
        "decode_and_two_animation_frames": true
      }
    },
    {
      "id": "R12-PNG-12",
      "order": 12,
      "path": "output/playwright/task20-meeting-evidence/accepted/pb-054-1024x768-dark-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-full.png",
      "sha256": "35d826fbecf3441a4289ffa1951611285366f59b12eb2bfd65b6c892d5effc6a",
      "dimensions": {
        "width": 1024,
        "height": 21343
      },
      "kind": "full-page-overview",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "dark",
      "occurrence_id": "pb-054@1024x768-dark",
      "capture_method": "RGBA row concatenation of actual bounded Chrome PNGs",
      "provenance": {
        "method": "RGBA row concatenation of actual bounded Chrome PNGs",
        "tiles": [
          "output/playwright/task20-meeting-evidence/tiles/pb-054-tablet-dark-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-tile-00.png",
          "output/playwright/task20-meeting-evidence/tiles/pb-054-tablet-dark-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-tile-01.png",
          "output/playwright/task20-meeting-evidence/tiles/pb-054-tablet-dark-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-tile-02.png"
        ],
        "seams": [
          {
            "y": 7936,
            "overlap": 64,
            "pixel_sha256": "9f569ad7deac0ad755766600f5a6ce8e5bc6a01a3e6df6fe9d8d51aebc8baf2a"
          },
          {
            "y": 15872,
            "overlap": 64,
            "pixel_sha256": "273a5d396df31210901def46cb466e1fe9f2f6d34b410da2e64056205d818eae"
          }
        ],
        "exact_source_pixel_match": true,
        "no_dom_change": true
      }
    },
    {
      "id": "R12-PNG-13",
      "order": 13,
      "path": "output/playwright/task20-meeting-evidence/top-viewports/pb-054-mobile-light-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539.png",
      "sha256": "02aadcf48fd387d08141bf5eb2193fd3065fedad9b3376a615080d0d09f9d619",
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
      "occurrence_id": "pb-054@390x844-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539",
        "occurrence_id": "pb-054@390x844-light",
        "viewport": {
          "id": "mobile",
          "width": 390,
          "height": 844
        },
        "theme": "light",
        "source_current_url": "http://127.0.0.1:4341/_astro/meeting-webapp-architecture.6QNHagj-_BPgDU.svg",
        "source_svg_sha256": "d82fe6acd7659e4466401d05545cc044d5a7975a3264439bde0842f0a7e23fae",
        "full_page": false,
        "scroll_reset": {
          "x": 0,
          "y": 0,
          "containers": [
            0,
            0
          ]
        },
        "decode_and_two_animation_frames": true
      }
    },
    {
      "id": "R12-PNG-14",
      "order": 14,
      "path": "output/playwright/task20-meeting-evidence/diagram-crops/pb-054-mobile-light-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-meeting-direct.png",
      "sha256": "da98578d79b2885580116a7b29a665553275c298de80b585ae83a94845ab30ec",
      "dimensions": {
        "width": 358,
        "height": 610
      },
      "kind": "diagram",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "occurrence_id": "pb-054@390x844-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539",
        "occurrence_id": "pb-054@390x844-light",
        "viewport": {
          "id": "mobile",
          "width": 390,
          "height": 844
        },
        "theme": "light",
        "source_current_url": "http://127.0.0.1:4341/_astro/meeting-webapp-architecture.6QNHagj-_BPgDU.svg",
        "source_svg_sha256": "d82fe6acd7659e4466401d05545cc044d5a7975a3264439bde0842f0a7e23fae",
        "full_page": true,
        "clip": {
          "x": 16,
          "y": 3622,
          "width": 358,
          "height": 610
        },
        "source_dom_box": {
          "x": 16,
          "y": 3622.890625,
          "width": 358,
          "height": 608.59375
        },
        "final_crop_replacement": "Same-state fullPage plus explicit clip; parent must inspect original pixels, not a locator capture",
        "scroll_reset": {
          "x": 0,
          "y": 0,
          "containers": [
            0,
            0
          ]
        },
        "decode_and_two_animation_frames": true
      }
    },
    {
      "id": "R12-PNG-15",
      "order": 15,
      "path": "output/playwright/task20-meeting-evidence/accepted/pb-054-390x844-light-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-full.png",
      "sha256": "f05c1bfa333aa9282fc50e4def43c578b6a13495a5560156c03b4a35c4cbc27f",
      "dimensions": {
        "width": 390,
        "height": 26525
      },
      "kind": "full-page-overview",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "occurrence_id": "pb-054@390x844-light",
      "capture_method": "RGBA row concatenation of actual bounded Chrome PNGs",
      "provenance": {
        "method": "RGBA row concatenation of actual bounded Chrome PNGs",
        "tiles": [
          "output/playwright/task20-meeting-evidence/tiles/pb-054-mobile-light-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-tile-00.png",
          "output/playwright/task20-meeting-evidence/tiles/pb-054-mobile-light-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-tile-01.png",
          "output/playwright/task20-meeting-evidence/tiles/pb-054-mobile-light-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-tile-02.png",
          "output/playwright/task20-meeting-evidence/tiles/pb-054-mobile-light-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-tile-03.png"
        ],
        "seams": [
          {
            "y": 7936,
            "overlap": 64,
            "pixel_sha256": "469e8ae6a2ce51a9da948dc19deb78993df6b669b4755dbdcf1e4e6684fb5282"
          },
          {
            "y": 15872,
            "overlap": 64,
            "pixel_sha256": "130f527b482c6512585984158170a36f26bb5f80943bf151b3f656f81df86643"
          },
          {
            "y": 23808,
            "overlap": 64,
            "pixel_sha256": "542166089af85f3804e3d5d8fc602a7b7276398c475a0e81e9565ffb7eb775f8"
          }
        ],
        "exact_source_pixel_match": true,
        "no_dom_change": true
      }
    },
    {
      "id": "R12-PNG-16",
      "order": 16,
      "path": "output/playwright/task20-meeting-evidence/top-viewports/pb-054-mobile-dark-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539.png",
      "sha256": "7bf7020c6281339fa49a1041ad22817f8a9e47bd1b6e0bdeae12db0721667688",
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
      "occurrence_id": "pb-054@390x844-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539",
        "occurrence_id": "pb-054@390x844-dark",
        "viewport": {
          "id": "mobile",
          "width": 390,
          "height": 844
        },
        "theme": "dark",
        "source_current_url": "http://127.0.0.1:4341/_astro/meeting-webapp-architecture.6QNHagj-_BPgDU.svg",
        "source_svg_sha256": "d82fe6acd7659e4466401d05545cc044d5a7975a3264439bde0842f0a7e23fae",
        "full_page": false,
        "scroll_reset": {
          "x": 0,
          "y": 0,
          "containers": [
            0,
            0
          ]
        },
        "decode_and_two_animation_frames": true
      }
    },
    {
      "id": "R12-PNG-17",
      "order": 17,
      "path": "output/playwright/task20-meeting-evidence/diagram-crops/pb-054-mobile-dark-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-meeting-direct.png",
      "sha256": "89a93037bb33fa55e2741b9cf788ba34135e0003155bfb0a3ebcce614165fdcd",
      "dimensions": {
        "width": 358,
        "height": 610
      },
      "kind": "diagram",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "occurrence_id": "pb-054@390x844-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539",
        "occurrence_id": "pb-054@390x844-dark",
        "viewport": {
          "id": "mobile",
          "width": 390,
          "height": 844
        },
        "theme": "dark",
        "source_current_url": "http://127.0.0.1:4341/_astro/meeting-webapp-architecture.6QNHagj-_BPgDU.svg",
        "source_svg_sha256": "d82fe6acd7659e4466401d05545cc044d5a7975a3264439bde0842f0a7e23fae",
        "full_page": true,
        "clip": {
          "x": 16,
          "y": 3622,
          "width": 358,
          "height": 610
        },
        "source_dom_box": {
          "x": 16,
          "y": 3622.890625,
          "width": 358,
          "height": 608.59375
        },
        "final_crop_replacement": "Same-state fullPage plus explicit clip; parent must inspect original pixels, not a locator capture",
        "scroll_reset": {
          "x": 0,
          "y": 0,
          "containers": [
            0,
            0
          ]
        },
        "decode_and_two_animation_frames": true
      }
    },
    {
      "id": "R12-PNG-18",
      "order": 18,
      "path": "output/playwright/task20-meeting-evidence/accepted/pb-054-390x844-dark-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-full.png",
      "sha256": "d18069ea5881bb9b74b1afe2bddeefc876fd7dbc034b613bb9eec6e5bb1796ed",
      "dimensions": {
        "width": 390,
        "height": 26525
      },
      "kind": "full-page-overview",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "occurrence_id": "pb-054@390x844-dark",
      "capture_method": "RGBA row concatenation of actual bounded Chrome PNGs",
      "provenance": {
        "method": "RGBA row concatenation of actual bounded Chrome PNGs",
        "tiles": [
          "output/playwright/task20-meeting-evidence/tiles/pb-054-mobile-dark-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-tile-00.png",
          "output/playwright/task20-meeting-evidence/tiles/pb-054-mobile-dark-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-tile-01.png",
          "output/playwright/task20-meeting-evidence/tiles/pb-054-mobile-dark-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-tile-02.png",
          "output/playwright/task20-meeting-evidence/tiles/pb-054-mobile-dark-task20-pbv08-20260827164942730-8071c486-f273-40ab-a33e-937c2b9a5539-tile-03.png"
        ],
        "seams": [
          {
            "y": 7936,
            "overlap": 64,
            "pixel_sha256": "4adf3aa62c13422021b18a61fdd42ed3ec5f78572953f73856c3fdad03c9fe5f"
          },
          {
            "y": 15872,
            "overlap": 64,
            "pixel_sha256": "5e222735b33ce620f92176a77974867d537cc314f5d00ac8785c095b0822d516"
          },
          {
            "y": 23808,
            "overlap": 64,
            "pixel_sha256": "e4afb807348345d673a670bb1d52e7c05bc042dd335a37140dc5e48853a27bc6"
          }
        ],
        "exact_source_pixel_match": true,
        "no_dom_change": true
      }
    },
    {
      "id": "R12-PNG-19",
      "order": 19,
      "path": "output/playwright/r12-table-probe-20261115/table-1440-left.png",
      "sha256": "a9c3fa9820700b344d077b39e43e6dd054f7806547c0f7f309dbdf2bff2a402e",
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
      "occurrence_id": "r12-table-1440",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r12-table-probe-20261115/observations.json"
      }
    },
    {
      "id": "R12-PNG-20",
      "order": 20,
      "path": "output/playwright/r12-table-probe-20261115/table-1440-right.png",
      "sha256": "d8bcfb32851c55fc6751ca177b893593cb77bba18df42a1ca3bd8f2cd51d6821",
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
      "occurrence_id": "r12-table-1440",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r12-table-probe-20261115/observations.json"
      }
    },
    {
      "id": "R12-PNG-21",
      "order": 21,
      "path": "output/playwright/r12-table-probe-20261115/table-1024-left.png",
      "sha256": "393fc3ffa589413b26fb52bad2fecc313ba9cad147d18d8acff847d85f687f5b",
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
      "occurrence_id": "r12-table-1024",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r12-table-probe-20261115/observations.json"
      }
    },
    {
      "id": "R12-PNG-22",
      "order": 22,
      "path": "output/playwright/r12-table-probe-20261115/table-1024-right.png",
      "sha256": "28a177528a1680262e00c4fcacb437dda1b212b3800e1b36c15dbab0c94322a2",
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
      "occurrence_id": "r12-table-1024",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r12-table-probe-20261115/observations.json"
      }
    },
    {
      "id": "R12-PNG-23",
      "order": 23,
      "path": "output/playwright/r12-table-probe-20261115/table-390-left.png",
      "sha256": "61f422bf3e7a03719556973e4044982283caf8b6ddb5099acad2ceecd5c2c6c1",
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
      "occurrence_id": "r12-table-390",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r12-table-probe-20261115/observations.json"
      }
    },
    {
      "id": "R12-PNG-24",
      "order": 24,
      "path": "output/playwright/r12-table-probe-20261115/table-390-right.png",
      "sha256": "aeeba85bcf01fae90c640767fdf1afc5873e229577ae43017c0db8e4b9dc49ea",
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
      "occurrence_id": "r12-table-390",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r12-table-probe-20261115/observations.json"
      }
    }
  ]
}
```
<!-- m5-r12-request:data:end -->
