# R05 브라우저·DOM·렌더링 — 고정 검토 요청

기준 commit a18ca3de49be706496725ed65b7188aab3fdfb0a, 입력 고정 2026-11-15. 대상 원고 전체와 아래 full_text_paths의 전체 텍스트·SVG/Mermaid·직접 근거, context_excerpts의 명시 범위만 읽습니다. 인접 두 장은 일관성 문맥이며 해당 행 검토를 대신하지 않습니다. 발췌 밖 원문을 읽었다고 주장하지 않습니다.

Controller·작성자·이전 대화와 분리된 fresh gpt-6-astra/high 저장 세션을 사용합니다. 공식 ChatGPT 구독 경로를 프로세스에서만 적용하고 전역 인증/설정·API키·추가 크레딧·다른 과금은 금지합니다. 최초 history0, 실제 모델/effort·readOnly/network false·도구 미사용을 확인하고 같은 저장 ID와 실제 이력 복구로 후속 검토합니다. R02 승계 예외는 적용하지 않습니다.

공통 계약 C01~C12, 9항목18점·치명 항목과 한국어 결과 여섯 절을 적용합니다. 핵심 질문은 HTML·현재 DOM·CSSOM·상태·앱 render·브라우저 렌더링·픽셀·사용자 과업의 증거 경계, 파싱과 렌더링의 비직렬성, 임시 DOM 편집, 지연 로딩과 실패, 기기 에뮬레이션과 실제 접근성 검증을 초보자가 구별할 수 있는가입니다. 현재 HTML lazy-loading 요소 범위가 과거보다 넓어 보이는 직접 근거도 제공합니다. 현재 원고의 예시가 배타적 단정인지 판단하고 버전 지원을 추정하지 마세요.

PNG18개는 R05 소비 경로의 과거 6상태×(viewport·다이어그램crop·인접문맥crop)입니다. 원고/SVG/MMD 3파일은 당시 입력과 바이트 동일합니다. 전체 페이지 이미지 6개를 전달한 것으로 계산하지 않습니다. PNG는 새로 캡처하거나 OCR로 대체하지 않고 localImage/detail:original로 실제 전달합니다. 모든 이미지 ID별 시각적 관측·판독 한계를 기록하세요. 과거 manifest의 pixel_review pending·Claude blocked는 당시 역사이며 현재 reviewer의 픽셀 검토를 대체하거나 현재 실행 blocker가 되지 않습니다. R01~R03의 기존 내용 검토는 반복하지 않습니다.

모든 도구·쓰기·셸·웹·MCP·플러그인·위임은 금지하고 응답만 반환하세요. 별도 제공한 준비 검사기/테스트는 원고 판정과 구분해 코드 C/I/M·체크포인트 적합성을 판단합니다. 입력 전 controller 해시 검사와 응답 후 감사는 별도 실행 증거입니다. 사실 확인 불가·입력 부족은 숨기지 않으며 준비 완료를 원고 PASS·review/ready·M5·공개 승인으로 계산하지 않습니다.

<!-- m5-r05-request:data:start -->
```json
{
  "schema_version": 1,
  "review_id": "R05",
  "baseline_commit": "a18ca3de49be706496725ed65b7188aab3fdfb0a",
  "target": "src/content/docs/05-frontend/browser-dom-rendering.md",
  "planned_profile": {
    "model": "gpt-6-astra",
    "reasoning_effort": "high"
  },
  "fresh": true,
  "persistent": true,
  "successor_exception": false,
  "full_text_paths": [
    "docs/project/reviews/public-beta-1/codex-review-contract.md",
    "src/content/docs/05-frontend/browser-dom-rendering.md",
    "src/assets/diagrams/full-stack-flow.svg",
    "src/assets/diagrams/source/full-stack-flow.mmd",
    "research/public-beta-review-source-excerpts/r05-browser-dom-2026-11-15.md",
    "src/content/docs/05-frontend/ui-state-and-ux.md",
    "src/content/docs/05-frontend/accessibility-responsive-design.md",
    "src/content/docs/reference/development-glossary.md"
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
      "sha256": "d85406400845a7ea61eff30d6a1e5d5fcb224c7106a72d761b9c01f391794f49",
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
          "text": "# AGENTS.md\n\n이 파일은 Codex를 포함한 코딩 에이전트가 이 저장소에서 작업할 때 따라야 할 최상위 운영 지침입니다.\n\n## 1. 임무\n\n이 저장소의 목적은 비개발자가 개발자 흉내를 내게 하는 것이 아니라, **소프트웨어 시스템을 이해하고 AI가 만든 결과를 질문·검토·검증·운영할 수 있게 만드는 것**입니다.\n\n대상 독자는 다음과 같습니다.\n\n- Claude Code, Codex 등으로 바이브 코딩을 하는 비개발자\n- 데이터 분석가, PM, 디자이너, 도메인 전문가\n- 코드를 직접 많이 쓰지는 않지만 개발 의사결정에 참여하는 사람\n\n## 2. 작업 시작 순서\n\n항상 다음 파일을 먼저 읽습니다.\n\n1. `PROJECT_CONTEXT.md`\n2. `ROADMAP.md`\n3. `RULES.md`\n4. `WORKSPACE_MAP.md`\n5. 관련 `docs/project/`, `research/`, 대상 콘텐츠\n\n그다음 한국어로 다음을 보고합니다.\n\n- 현재 상태와 확인한 사실\n- 이번 작업의 목표와 비목표\n- 수정할 파일과 이유\n- 수용 기준\n- 검증 명령\n- 불확실성 또는 결정이 필요한 지점\n\n## 3. 표준 작업 루프\n\n`상태 확인 → 목표 고정 → 작은 계획 → 한 단계 구현 → 자동 검증 → 독립 검토 → 문맥 갱신`\n\n한 번에 큰 장 전체나 여러 하위 시스템을 수정하지 않습니다. 리뷰어가 한 작업만 독립적으로 승인하거나 거절할 수 있는 크기로 나눕니다.\n\n수용 기준과 필수 검증을 통과한 독립 작업 단위는 관련 파일만 선별해 커밋합니다. 커밋 전에는 staged diff와 작업 트리를 확인하고, 기존의 무관한 변경·검증 실패·미완성 작업을 포함하지 않습니다. 작업 단위를 안전하게 분리할 수 없거나 사용자 결정이 남아 있으면 커밋하지 않고 상태를 보고합니다.\n\n## 4. 권한과 안전\n\n다음 행동은 사용자 승인 전에 수행하지 않습니다.\n\n- 새 패키지 설치 또는 네트워크 접근\n- 대량 파일 이동·삭제·이름 변경\n- 배포 구조, 프레임워크, 정보 구조 변경\n- `git push`, 원격 브랜치 생성, 배포와 그 밖의 외부 쓰기\n- 비밀정보, 개인정보, 회사 내부 데이터 접근 또는 저장\n\n로컬 `git commit`은 3절의 작업 단위 자동 커밋 규칙을 따릅니다. 자동 커밋은 푸시나 배포 승인을 뜻하지 않습니다.\n\n`.env`, 토큰, API 키, 인증서, 사용자 데이터는 커밋하지 않습니다. 예시는 반드시 가짜 값임을 분명히 표시합니다. 파괴적 명령 대신 dry-run, diff, 백업 또는 되돌리기 경로를 먼저 제시합니다.\n\n## 5. 콘텐츠 원칙\n\n### 쉬운 설명은 정확성을 희생하지 않습니다\n\n- 전문용어를 숨기지 말고 먼저 쉬운 말로 정의한 뒤 정식 용어를 연결합니다.\n- 비유를 사용하면 반드시 **비유가 맞는 지점과 깨지는 지점**을 함께 설명합니다.\n- 코드 문법보다 구조, 관계, 흐름, 결정 기준, 실패 방식, 검증법을 우선합니다.\n- “AI에게 해달라고 하면 된다”는 식의 설명을 금지합니다.\n\n### 장의 기본 구조\n\n1. 왜 필요한가\n2. 한 문장 정의\n3. 비유와 비유의 한계\n4. 시스템에서의 위치\n5. 실제 작업에서 보이는 신호와 용어\n6. 판단 규칙\n7. 흔한 오해와 실패\n8. 확인 체크리스트\n9. 짧은 연습\n10. 관련 용어와 출처\n\n### 용어 정책\n\n- 같은 약어에 여러 뜻이 있으면 첫 등장부터 구분합니다.\n- 특히 SDD는 `Software Design Description`과 `Spec-Driven Development`를 혼용하지 않습니다.\n- PRD, 설계 명세, 테스트 계획, TDD를 모두 “문서 종류”로 묶지 않습니다. TDD는 테스트를 먼저 작성하는 개발 규율입니다.\n- 컨텍스트 엔지니어링, 하네스 엔지니어링, 루프 엔지니어링은 성숙도와 사용 맥락을 표시합니다.\n\n### Markdown과 프롬프트 블록\n\n- 일반 산문 문단과 프롬프트 블록 안의 자연어 문장은 표시 폭을 맞추기 위해 임의로 줄바꿈하지 않습니다.\n- 프롬프트 블록의 같은 목록 항목은 한 줄로 유지합니다. 빈 줄과 목록 계층은 의미상 구획이므로 보존합니다.\n- 코드, 셸 명령, 명령 출력, 표, 디렉터리 트리, 흐름도·수식, URL과 의도적인 강제 줄바꿈은 재정렬하지 않습니다.\n- 기존 문서에서는 실제로 수정하는 프롬프트 블록에만 적용합니다. 이 규칙만을 이유로 관련 없는 문서 전체를 reflow하지 않습니다.\n\n## 6. 근거와 최신성\n\n- 표준, 제품 기능, 프레임워크 설정은 공식 문서 또는 1차 자료를 우선합니다.\n- 날짜에 따라 달라질 수 있는 내용은 작업 시점에 다시 확인합니다.\n- 조사 근거는 `research/source-map.md`에 출처, 확인일, 적용 범위를 남깁니다.\n- 마케팅 문구와 업계 합의된 개념을 구분합니다.\n- 한 출처의 표현을 그대로 베끼지 않고, 독자에게 필요한 구조로 재해석합니다.\n\n## 7. 기술 구조 규칙\n\n- 공개 콘텐츠는 `src/content/docs/`에만 둡니다.\n- 조사 메모는 `research/`, 편집 정책은 `docs/project/`, 템플릿은 `templates/`에 둡니다.\n- 파일명은 영문 kebab-case, 본문과 작업 보고는 한국어를 기본으로 합니다.\n- 한 파일은 한 질문 또는 한 학습 목표 집합만 담당합니다.\n- 사이트 기능보다 콘텐츠 품질을 우선합니다. 실제 요구 없이 CMS, 데이터베이스, 인증, 프런트엔드 프레임워크를 추가하지 않습니다.\n- 아키텍처 결정이 바뀌면 ADR과 `PROJECT_CONTEXT.md`를 함께 갱신합니다.\n\n## 8. 품질 게이트\n\n파일 수정 후 최소한 다음을 실행합니다.\n\n```bash\nnpm run check:static\n```\n\n의존성이 설치되어 있으면 다음도 실행합니다.\n\n```bash\nnpm run build\n```\n\n완료라고 보고하기 전에 실제 명령의 종료 코드와 오류 수를 확인합니다. 빌드를 실행하지 못했다면 이유를 명시하고 성공했다고 표현하지 않습니다.\n\n## 9. 완료 정의\n\n작업은 다음 조건을 모두 충족해야 완료입니다.\n\n- 목표와 비목표가 지켜짐\n- 수용 기준을 각 항목별로 확인함\n- 새 용어가 용어집 또는 관련 문서와 일치함\n- 링크, 그림 대체 텍스트, 메타데이터 검증을 통과함\n- 변경 이유와 검증 결과를 한국어로 보고함\n- 다음 세션이 이어받을 수 있도록 `PROJECT_CONTEXT.md`, `ROADMAP.md`, `CHANGELOG.md` 중 필요한 파일을 갱신함"
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
      "sha256": "eac96a6cf0c8df6106e49184e9824083f2100c49c484c5a0295008f66969146f",
      "segments": [
        {
          "start_line": 317,
          "end_line": 325,
          "text": "| `04-backend-data/state-cache-queue.md` | 저장소 내부 `research/meeting-webapp-case-brief.md`, `research/stock-dashboard-case-brief.md` | 2026-08-10 | 모임 웹앱의 `events`·`registrations` 권위 상태·정원·중복·동시 요청과 첫 범위의 알림 비목표, 교육용 `EDU-FIXTURE`의 공개 버전·값 상태·신선도·마지막 정상 버전을 서로 분리한 사례에 적용. 큐를 첫 캡스톤의 필수 구조로 추가하거나 fixture를 실제 시장·시세·투자·권리의 근거로 사용하지 않음 |\n| `05-frontend/browser-dom-rendering.md` | https://developer.mozilla.org/en-US/curriculum/ | 2026-08-04 | HTML·CSS·JavaScript의 책임, DOM과 브라우저 렌더링, 개발자 도구와 프런트엔드 검증 범위 |\n| `05-frontend/browser-dom-rendering.md` | https://www.w3.org/WAI/fundamentals/accessibility-intro/ | 2026-08-04 | 화면의 시각적 결과와 의미 구조·키보드·보조 기술 검증을 구분하는 접근성 경계 |\n| `05-frontend/browser-dom-rendering.md` | https://html.spec.whatwg.org/multipage/parsing.html, https://html.spec.whatwg.org/multipage/webappapis.html#event-loops, https://html.spec.whatwg.org/multipage/urls-and-fetching.html#lazy-loading-attributes | 2026-08-13, WHATWG HTML Living Standard | HTML 입력의 tokenization·tree construction과 DOM `Document`, event loop·task·rendering opportunity, `img`·`iframe` lazy loading 속성의 표준 범위. 모든 엔진의 내부 파이프라인·스레드·최적화나 모든 프레임워크의 lazy loading으로 확대하지 않음 |\n| `05-frontend/browser-dom-rendering.md` | https://dom.spec.whatwg.org/ | 2026-08-13, WHATWG DOM Living Standard | 노드 트리와 이벤트의 플랫폼 중립 모델. 서버 응답 HTML·live DOM·접근성 트리·픽셀을 같은 증거로 취급하지 않음 |\n| `05-frontend/browser-dom-rendering.md` | https://drafts.csswg.org/cssom/ | 2026-08-13, CSSWG Editor's Draft 10 June 2026 | CSS 관련 상태의 파싱·직렬화·접근·조작 API 범위. 변경 가능한 Editor's Draft를 W3C Recommendation이나 브라우저 내부 렌더링 구현 전체로 확대하지 않음 |\n| `05-frontend/browser-dom-rendering.md` | https://developer.chrome.com/docs/devtools/network/, https://developer.chrome.com/docs/devtools/dom/, https://developer.chrome.com/docs/devtools/css/issues, https://developer.chrome.com/docs/devtools/rendering | 2026-08-13, Chrome 공식 문서 | Network의 요청·응답·initiator·timing, Elements의 live DOM 임시 편집, Styles와 Computed 값, Rendering 관찰 기능의 Chrome 범위. 임시 편집을 소스·배포 변경으로, 한 Chrome 확인을 전체 브라우저·기기 호환으로 일반화하지 않음 |\n| `05-frontend/browser-dom-rendering.md` | https://www.w3.org/TR/WCAG22/ | 2026-08-13, W3C Recommendation 12 December 2024 | 의미·관계, 키보드, 확대·리플로, 이름·역할·값 등 픽셀 이외의 사용자 결과를 검증하는 접근성 규범 범위. DOM·화면 존재나 한 자동 검사를 전체 WCAG 적합으로 사용하지 않음 |\n| `05-frontend/accessibility-responsive-design.md` | https://www.w3.org/TR/WCAG22/ | 2026-08-13, W3C Recommendation 12 December 2024 | 비텍스트 콘텐츠, 정보·관계, 키보드, 포커스, 확대, 리플로, 대비, 색상 외 정보, 레이블과 이름, 이름·역할·값, 상태 메시지를 포함한 웹 콘텐츠 성공 기준의 규범 범위. 한 자동 검사·화면 폭·브라우저·보조 기술 조합을 전체 적합으로 확대하지 않음 |"
        },
        {
          "start_line": 328,
          "end_line": 330,
          "text": "| `05-frontend/accessibility-responsive-design.md` | 저장소 내부 `research/meeting-webapp-case-brief.md`, `research/stock-dashboard-case-brief.md` | 2026-08-10 | 모임 참가·자기 취소의 로딩·성공·충돌·결과 불명과 교육용 대시보드의 상태 텍스트·색상 단독 금지·표와 차트의 동등한 핵심 정보·키보드·상태 전달 계약에 적용하는 범위. 실제 서비스·시장 데이터·접근성 적합 완료로 사용하지 않음 |\n| `05-frontend/browser-dom-rendering.md` | 저장소 내부 `research/stock-dashboard-case-brief.md`의 `EDU-FIXTURE` | 2026-08-10 | 교육용 주가 fixture 조회를 응답 성공과 화면 성공의 증거 경계를 설명하는 표면 사례 문맥으로만 사용하며 실제 시장·상품·시세·원천·권리의 근거로 사용하지 않음 |\n| `05-frontend/ui-state-and-ux.md` | https://www.rfc-editor.org/rfc/rfc9110.html | 2026-08-13, IETF Standards Track RFC 9110 | safe·idempotent method와 통신 실패 뒤 자동 재시도 주의의 규범 범위. 모든 `POST`의 중복 방지·업무 요청 식별자·낙관적 UI·복구 오라클을 RFC가 자동으로 정한다고 확대하지 않음 |"
        },
        {
          "start_line": 441,
          "end_line": 443,
          "text": "- `03-full-stack/frontend-backend-boundary.md`, `04-backend-data/data-model-schema-migration.md`, `04-backend-data/state-cache-queue.md` (`PBSG-002`, 2026-08-13 확인): RFC 9110·9111, OWASP AJAX·Authorization, Chrome Sources, PostgreSQL 18의 테이블·제약·DDL 변경·트랜잭션·격리, RabbitMQ reliability·queue, Parallel Change와 Continuous Integration·Evolutionary Database Design의 1차 패턴 자료를 위 장별 적용 기록에 연결했습니다. PostgreSQL은 관계형 구조·제약·ALTER·트랜잭션·격리의 제품 동작만, Parallel Change는 expand·migrate·contract와 구·신 계약 공존·점진 전환만, Continuous Integration의 데이터베이스 필드 예시는 새 필드·이중 쓰기·기존 데이터 복사·새 읽기·옛 필드 제거만, Evolutionary Database Design은 스키마·데이터·접근 코드 변경·마이그레이션 테스트·복수 애플리케이션 버전의 하위 호환 스키마만 직접 뒷받침합니다. 이 묶음을 다른 데이터베이스·큐의 동작, 모든 변환의 정확성, 무중단·무손실 복구, 외부 부작용의 정확히 한 번 완료로 일반화하거나 cache·queue·outbox를 첫 모임 캡스톤의 필수 구조로 만들지 않으며, 실제 서비스·데이터베이스·메시지 처리 성공을 주장하지 않습니다.\n- `05-frontend/browser-dom-rendering.md` (`PBSG-024`, 2026-08-13 확인): WHATWG HTML·DOM, CSSWG CSSOM Editor's Draft, Chrome DevTools Network·DOM·CSS·Rendering과 W3C WCAG 2.2를 위 장별 적용 기록에 연결했습니다. URL·네트워크·HTML 파싱·DOM·스타일·렌더링 기회·이벤트와 상태의 개념 흐름, View Source·응답 원문·live DOM·Computed 값·픽셀의 증거 차이, `img`·`iframe` 지연 로딩과 접근성 경계를 직접 뒷받침합니다. 이를 모든 엔진의 내부 직렬 파이프라인·스레드·최적화, 모든 라이브러리의 lazy loading, 임시 DOM 편집의 소스 변경, 한 Chrome·기기 확인의 호환성·WCAG 완료로 일반화하지 않습니다.\n- `06-requirements-design/architecture-and-frameworks.md` (`PBSG-007`, 2026-08-13 확인): ISO/IEC/IEEE 42010:2022 공식 범위와 표준 작업 그룹 conceptual model, CMU SEI 4판 소개, 기존 SWEBOK 확인, MDN 웹 프레임워크 문서를 위 장별 적용 기록에 연결했습니다. 표준 범위는 architecture description과 이해관계자·관심사·관점·뷰·결정·근거의 관계를, SEI는 아키텍처의 생명주기·맥락·품질 속성을, 기존 SWEBOK는 요구사항·설계·구현·테스트·운영의 연결과 구분을, MDN은 웹 프런트엔드에서 프레임워크·라이브러리를 검토하는 실용 질문을 뒷받침합니다. 프레임워크·라이브러리·런타임·플랫폼·도구 구분은 생태계별 용례가 겹치는 편집 기준이고, 일곱 단계는 이 핸드북의 판단 절차이며, 두 사례는 저장소 범위의 가역적 시작 가설입니다. 이를 특정 방법·제품 선택·현재 구현·품질·배포 성공으로 확대하지 않고 후보의 제어·지원·배포 범위는 채택 때 공식 문서와 실행 증거로 다시 확인합니다."
        }
      ]
    },
    {
      "path": "research/public-beta-source-gap-register.md",
      "sha256": "dac010a69ea463fb8dd3d835780367ec164b887417c441f46f7f3887c05929e7",
      "segments": [
        {
          "start_line": 55,
          "end_line": 57,
          "text": "| PBSG-023 | PB-027 `http-request-response.md` | CORS와 혼합 콘텐츠의 직접 동작, 브라우저가 응답 사용을 제한하는 정책 경계와 서버 처리 성공의 구분 | important | Fetch·CORS·Mixed Content의 W3C 또는 WHATWG 규범 자료와 MDN·브라우저 공식 구현 문서 | 2026-08-13 확인; WHATWG Fetch·W3C Mixed Content 문서 상태 또는 브라우저 정책 예시가 바뀌면 재확인 | confirmed | Task 13 | CORS를 인증·인가나 서버 간 요청 차단으로 설명하거나 HTTP 성공 응답을 브라우저 화면에서 사용할 수 있다는 보장으로 일반화하지 않습니다. |\n| PBSG-024 | PB-032 `browser-dom-rendering.md` | DOM 구성과 렌더링 단계, 개발자 도구의 기록·임시 DOM 편집, 브라우저·기기 차이, WCAG 세부 성공 기준 | important | 2026-08-13 확인: WHATWG HTML parsing·event loop·lazy loading과 DOM, CSSWG CSSOM Editor's Draft, Chrome DevTools Network·DOM·CSS·Rendering, W3C WCAG 2.2 | 브라우저·Chrome 도구·WCAG·웹 표준 상태 변경 시, 또는 특정 엔진·프레임워크 동작을 채택할 때 재확인 | confirmed | Task 14 | 단순화한 흐름을 모든 엔진의 내부 직렬 파이프라인·스레드·최적화로, CSSOM Editor's Draft를 Recommendation으로, `img`·`iframe` 규칙을 모든 lazy loading으로, 임시 DOM 편집을 소스 수정으로, 한 브라우저·기기 확인을 호환성·접근성 완료로 확대하지 않습니다. |\n| PBSG-025 | PB-036 `prd-sdd-tdd.md` | PRD의 구성, Software Design Description과 ADR의 경계, 요구사항·수용 기준·테스트 케이스의 구분, TDD Red·Green·Refactor와 과정 증거 | important | 2026-08-13 확인: ISO/IEC/IEEE 29148:2018 요구공학, inactive-reserved IEEE 1016-2009 SDD, Nygard ADR 원형, GitHub Spec Kit 현재 공식 문서, Martin Fowler TDD 방법론 설명 | 29148 개정본 발행·1016 상태·Spec Kit 흐름·인용 방법론 자료 변경 시와 조직별 PRD·설계·테스트 절차를 실제 채택할 때 재확인 | confirmed | Task 14 | PRD·설계 설명·ADR·Spec-Driven Development·테스트 케이스를 같은 문서 종류로 묶거나 현재 제품 흐름을 보편 SDD 표준으로, 테스트 보유·사후 추가를 TDD 수행이나 모든 위험의 충분한 검증으로 일반화하지 않습니다. |"
        },
        {
          "start_line": 103,
          "end_line": 105,
          "text": "\n- PBSG-024는 WHATWG HTML의 parsing·event loop·`img`·`iframe` lazy loading, WHATWG DOM, CSSWG CSSOM Editor's Draft, Chrome DevTools Network·DOM·CSS·Rendering과 W3C WCAG 2.2를 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. 원고는 URL·네트워크·HTML 파싱·DOM·스타일·렌더링 기회·이벤트·상태를 진단용 개념 흐름으로 한정하고, View Source·Network·live DOM·Computed 값·픽셀을 서로 다른 증거로 구분합니다. 이를 모든 엔진의 직렬 내부 구현, 모든 lazy loading, 임시 DOM 편집의 소스 변경, 한 Chrome·기기의 호환성·접근성 완료로 확대하지 않습니다.\n- PBSG-003은 W3C WCAG 2.2와 비규범 Understanding·WAI Images 자료, RFC 9110, Nygard의 ADR 원형, ISO/IEC/IEEE 42010:2022 공식 범위와 conceptual model을 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. PB-031·033·034의 전체 주장과 PB-053의 기존 차트·표·상태 접근성 계약을 함께 대조했으며, 자동 검사·특정 화면·차트 대체 텍스트를 전체 적합으로, HTTP 의미를 애플리케이션의 모든 중복·복구로, ADR 양식을 영구 진리나 유일한 템플릿으로 확대하지 않습니다."
        },
        {
          "start_line": 164,
          "end_line": 166,
          "text": "| PBCA-010 | PBSG-015, PBSG-016 | Task 15 |\n| PBCA-011 | PBSG-003, PBSG-012, PBSG-019, PBSG-022, PBSG-023, PBSG-024, PBSG-025, PBSG-026 | Task 13; Task 14; Task 16; Task 18; Task 25 |\n"
        }
      ]
    },
    {
      "path": "docs/project/public-beta-content-audit.md",
      "sha256": "d8a058833542cfc69ba6f079f5624edb6bebf83e4e5d9dfe926251228dc79d68",
      "segments": [
        {
          "start_line": 56,
          "end_line": 58,
          "text": "| PB-031 | `src/content/docs/05-frontend/accessibility-responsive-design.md` | core | 접근성과 반응형 설계는 어떻게 다르고 무엇을 확인하는가? | 의미·키보드·포커스·이름·대비·대체 텍스트·확대·리플로를 실제 흐름으로 검증한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 14 | 의미 구조부터 키보드·포커스·접근 가능한 이름·대비·색상 외 상태·대체 정보·확대·리플로·동적 복구와 자동·DOM·화면·보조 기술·서버 증거의 경계를 확장했습니다. PB-033·034와 대시보드 접근성 계약까지 직접 대조해 PBSG-003을 닫았습니다. |\n| PB-032 | `src/content/docs/05-frontend/browser-dom-rendering.md` | core | 브라우저가 응답을 DOM과 화면으로 어떻게 바꾸는가? | URL·네트워크·파싱·DOM·스타일·렌더링·상태 실패를 증거 표면으로 구분한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 14; Task 20 resolved | WHATWG·CSSWG·Chrome·WCAG 직접 자료로 PBSG-024를 닫고 URL부터 이벤트·상태까지의 개념 흐름, View Source·Network·live DOM·Computed·픽셀, 지연 로딩·렌더 실패를 구분했습니다. 의미 변경 때문에 과거 검토 파일은 보존하되 현재 증거로 재사용하지 않습니다. full-stack 그림의 topology·marker·390px 판독성은 Task 20 `6b4ac94`와 실제 Chrome 18상태·Codex `PASS`로 교정됐습니다. |\n| PB-033 | `src/content/docs/05-frontend/ui-state-and-ux.md` | core | UI 상태와 사용자 경험을 어떤 상태 기계로 설계하는가? | 정상·실패·결과 불명 전이를 권위 상태·복구 오라클과 함께 설계한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 14 | loading·empty·success·validation·conflict·error·unknown·retry, 서버 권위 상태, 낙관적 UI, 중복 행동, 오래된 응답과 복구 오라클을 두 사례·상태 전이표·직접 증거로 확장하고 PBSG-003을 닫았습니다. |"
        },
        {
          "start_line": 131,
          "end_line": 133,
          "text": "| PBCA-010 | Important (resolved) | SOURCE | PB-042 | Task 5 당시 테스트 전략 장은 넓은 SWEBOK 교육 범위에만 연결돼 static testing, verification·validation, 오라클·대역·fixture, flaky test와 coverage 등 세부의 직접 근거가 부족했습니다. | Task 15에서 PBSG-015·016을 ISO/IEC/IEEE 29119-1:2022와 공식 시리즈 안내, SWEBOK V4.0a, Fowler·Google의 1차 실무 자료로 확인하고 적용 범위·일반화 금지선을 source map과 원고에 연결했습니다. | Task 5; Task 15 resolved | 원고의 static·dynamic, manual·automated, 테스트 수준·목적·초점, 피라미드·coverage·도구별 재확인 경계를 PBSG-015·016과 대조하고 참조 검증 및 새 독립 검토에서 확인합니다. |\n| PBCA-011 | Important | SOURCE | PB-053 | Task 13에서 PB-025의 PBSG-022와 PB-027의 PBSG-023을, Task 14에서 PB-032의 PBSG-024와 PB-036의 PBSG-025를, Task 16에서 공통 복구 원칙의 PBSG-012를 직접 공식·1차 자료로 닫았습니다. Task 18은 PBSG-019의 실제 시장·권리 전체 계약과 PBSG-026의 교육용 계약 전체를 직접 확인하지 못해 두 공백을 유지했습니다. | 실제 원천·권리 또는 데이터 도구·빌드 방식을 별도 승인해 채택할 때 해당 공식 자료와 실행 증거로 PBSG-019·026을 다시 판정하고, 제품별 복원 범위도 현재 문서와 격리 복원 증거로 확인합니다. | Task 5; Task 13; Task 14; Task 16; Task 18; Task 25; 별도 채택 승인 범위 | PBSG-012 confirmed의 제품 중립 범위, PBSG-019·026의 `not-confirmed` 근거·재확인 조건과 PB-053의 금지선을 대조하고 `npm run validate:references`와 독립 검토를 통과합니다. |\n"
        }
      ]
    },
    {
      "path": "docs/project/public-beta-visual-audit.md",
      "sha256": "4dc0b46dbef32d69fc9b4b6442622cf762a65c165213e155f8fc9fd6cfa15f77",
      "segments": [
        {
          "start_line": 17,
          "end_line": 30,
          "text": "|---|---|---|---|---|---|---:|---:|---|---|---|---|---|---|---|---|\n| PBV-01 `learning-map` | `src/assets/diagrams/learning-map.svg` | `src/assets/diagrams/source/learning-map.mmd` | PB-001 `index.md` | 시스템 사고부터 AI 네이티브까지 어떤 순서로 배우는가? | 세로 권장 단계 흐름 | 7 | 6 | 같은 위계 1그룹 | 고유 title/desc·alt·앞 질문/뒤 강제 선행·숙련 비증명 범위 일치. | `480×960`, viewBox·width·height 일치 | 2026-08-28 실제Chrome6상태, mobile358×716px core20.88/detail17.9/note14.92px 판독·잘림0. 이전보다 약600px 길어진 절충. | 명시light/dark marker2와 선이 일치하고 번호·실선 범례를 유지합니다. | reflow | diagram-design | `e43d112`; Codex `PASS` C0/I0/M0; PBVA-003·004 자산 조건 충족; Claude pending |\n| PBV-02 `analytics-dashboard-architecture` | `src/assets/diagrams/analytics-dashboard-architecture.svg` | `src/assets/diagrams/source/analytics-dashboard-architecture.mmd` | PB-021 `software-is-a-system.md`; PB-053 `analytics-dashboard-case-study.md` | fixture/승인 원천이 품질·저장·전달·UI·운영 증거로 어떻게 이어지는가? | 세로 단계+피드백 | 7 | 7 | 품질·UI 2그룹 | 고유 title·desc·role·aria, 기존 두 alt와 앞뒤 원고의 책임·한계는 불변입니다. | `560×1108`, viewBox·width·height 일치 | 2026-08-28 실제 Chrome12상태: 모바일358×708px, 핵심 약14.7px·보조 약11.5px를 원본 크기로 판독했습니다. | explicit light/dark marker4와 주 흐름·점선 피드백·박스·글자가 전환됩니다. | reflow | diagram-design | `aa13701`; Codex `PASS` C0/I0/M0; PBVA-004 자산 조건 충족; Claude pending |\n| PBV-03 `api-database-auth-flow`; `api-database-auth-sequence` | `src/assets/diagrams/api-database-auth-flow.svg`; `src/assets/diagrams/api-database-auth-sequence.svg` | `src/assets/diagrams/source/api-database-auth-flow.mmd`; `src/assets/diagrams/source/api-database-auth-sequence.mmd` | PB-028 `api-database-auth.md` | 개요: 정상 참가 요청의 책임은 어떤 순서인가? 상세: 마지막 한 자리 동시 요청과 commit 뒤 응답 유실을 어떻게 안전하게 재확인하는가? | 세로 단계 흐름; 4-lifeline sequence+parallel frame | 개요 7; 상세 4 lifeline·12정보 단위(11 message+병렬 frame) | 개요 6; 상세 11 message | 개요 정상 책임 1그룹; 상세 동시성·복구 2그룹 | 두 SVG에 고유 title·desc가 있고 두 alt와 앞뒤 설명은 서로 다른 질문·비증명 범위를 설명합니다. | 개요 `560×772`; 상세 `688×960`, viewBox·width·height 일치 | 358×494px 개요 핵심 글자 약 14px, 358×500px 상세 핵심 약 12px·보조 약 10px로 확대 없이 읽을 수 있습니다. | 두 SVG의 선·글자와 explicit light/dark marker fill이 테마에 맞게 전환되며 병렬 시작은 frame·레이블, 유실은 점선·`×`로도 구분됩니다. | keep | diagram-design; Archify 미사용(상세는 4 lifeline sequence, Node.js v26) | Task 20 PBVA-001 resolved; Fix1 `1d19c15`; same-reviewer PASS C0/I0/M0 |\n| PBV-04 `context-harness-loop` | `src/assets/diagrams/context-harness-loop.svg` | `src/assets/diagrams/source/context-harness-loop.mmd` | PB-050 `context-spec-harness-loop.md` | 의도·스펙·컨텍스트·하네스·루프·증거·문맥 갱신은 어떤 책임 관계인가? | 혼합 관계 흐름 | 7 | 6 | 컨텍스트/하네스 수렴 | 고유title/desc·원고 질문/alt/뒤 책임과 한계 설명 일치·원고 불변. | `480×1160`, viewBox·width·height 일치 | Chrome6/6·358×865.2px·core20.88/detail17.9/note14.92·그림/상단/문맥/full배치 확인. | 명시marker2·실제양테마6연결·focused178/XML/full/Chrome 통과. | replace | diagram-design | `750a8e3`; Codex `PASS` C0/I0/M0; PBVA-002·003·004 자산 조건 충족; Claude pending |\n| PBV-05 `deploy-flow` | `src/assets/diagrams/deploy-flow.svg` | `src/assets/diagrams/source/deploy-flow.mmd` | PB-046 `build-deploy-domain-dns.md` | 소스·빌드·아티팩트·호스팅·이름 연결·사용자의 책임은 무엇인가? | 콘텐츠 흐름과 이름 조회 분리 | 6 | 5 | 아티팩트·사용자 2그룹 | 고유title/desc·alt·앞질문/뒤실제성공비증명 계약 일치. | `560×1008`, viewBox·width·height 일치 | 2026-08-28 실제Chrome6상태, mobile358×644px core17.9/detail15.34/note12.79px 판독. 세로약534px 증가 절충. | 콘텐츠 실선4·조회 점선1·marker4의 양테마 가시색이 일치합니다. | reflow | diagram-design | `9fe4bb7`; Codex `PASS` C0/I0/M0; PBVA-002·003·004 자산 조건 충족; Claude pending |\n| PBV-06 `full-stack-flow` | `src/assets/diagrams/full-stack-flow.svg` | `src/assets/diagrams/source/full-stack-flow.mmd` | PB-025 `client-server-full-stack.md`; PB-027 `http-request-response.md`; PB-032 `browser-dom-rendering.md` | 사용자 요청·응답이 프런트엔드·백엔드·저장소·외부 서비스 경계를 어떻게 오가는가? | 세로 왕복·백엔드 분기 | 5 | 8 | 요청·응답 2그룹 | 고유 title/desc와 세 원고의 앞 관찰문·뒤 비증명문·alt가 일치합니다. | `560×1172`, viewBox·width·height 일치 | 2026-08-28 실제Chrome18상태, mobile358×749px core17.9/detail12.79px 판독. 저장소와 선택적 외부 서비스가 백엔드 아래 분기합니다. | 명시light/dark marker2·실선 요청과 점선 반환·범례가 일치합니다. | replace | diagram-design | `6b4ac94`; Codex `PASS` C0/I0/M0; PBVA-002·003·004 자산 조건 충족; Claude pending |\n| PBV-07 `git-flow` | `src/assets/diagrams/git-flow.svg` | `src/assets/diagrams/source/git-flow.mmd` | PB-044 `git-and-github.md` | 어디까지 로컬 상태이며 어떤 명령이 원격으로 보내는가? | 세로 상태 전이 | 4 | 3 | 로컬3·원격1 경계 | 고유title/desc·기존alt·추가앞질문·기존7행동/비증명 계약 일치. | `480×864`, viewBox·width·height 일치 | 2026-08-28 Chrome6상태 mobile358×644px core20.88/sub·command17.9/note14.92px 판독. | 명시marker2·로컬실선묶음/원격점선·명령레이블 양테마 가시성 확인. | reflow | diagram-design | `1b26e10`; Codex `PASS` C0/I0/M0; PBVA-003·004 자산 조건 충족; Claude pending |\n| PBV-08 `meeting-webapp-architecture` | `src/assets/diagrams/meeting-webapp-architecture.svg` | `src/assets/diagrams/source/meeting-webapp-architecture.mmd` | PB-054 `first-full-stack-project.md` | 화면·애플리케이션·데이터·운영 증거의 책임과 신뢰 경계는 무엇인가? | 계층 아키텍처 | 5 | 6 | 애플리케이션 경계 1그룹 | 고유 title/desc/role/aria·alt, 앞 읽을 질문과 뒤 비증명 한계 두 문장을 명시했습니다. | `560×952`, viewBox·width·height 일치 | 2026-08-28 실제 Chrome6상태: 모바일358×609px core17.9/detail12.8px 판독. DB/운영 증거의 같은 층 분기와 왕복 방향을 구분했습니다. | explicit marker2·선·박스·글자가 테마별 가시색으로 전환됩니다. | reflow | diagram-design | `75113a5`; Codex `PASS` C0/I0/M0; PBVA-004 자산 조건 충족; Claude pending |\n| PBV-09 `operations-recovery-loop` | `src/assets/diagrams/operations-recovery-loop.svg` | `src/assets/diagrams/source/operations-recovery-loop.mmd` | PB-048 `logs-monitoring-backup.md` | 신호 수집에서 안정화·복구·검증·학습까지 어떻게 순환하는가? | 세로 단계+피드백 | 7 | 7 | 신호·학습 2그룹 | 고유 title·desc·role·aria, alt·7단계와 Fix Round 1의 병행 가능/비증명 원고가 일치합니다. | `560×1000`, viewBox·width·height 일치 | 2026-08-28 실제 Chrome6상태: 모바일358×639px, 핵심 약17.9px·보조 약12.8px를 원본 크기로 판독했습니다. 글자를 키워 이전보다 약149px 길어졌습니다. | explicit light/dark marker4와 주흐름·점선 피드백·박스·글자가 전환됩니다. | reflow | diagram-design | `cf193f6`; 최초 I1 뒤 Fix Round 1 same-reviewer `PASS` C0/I0/M0; PBVA-003 자산 조건 충족; Claude pending |\n| PBV-10 `prd-sdd-tdd` | `src/assets/diagrams/prd-sdd-tdd.svg` | `src/assets/diagrams/source/prd-sdd-tdd.mmd` | PB-036 `prd-sdd-tdd.md` | 문제·요구·설계·스펙·작업·구현·검증이 어떻게 추적 가능한 연결을 이루는가? | 분기·수렴+피드백 | 7 | 8 | 요구·증거 중심 | 2026-08-28 질문/정확alt 보완·기존뒤추적설명 보존·고유title/desc 일치. | `480×1280`, viewBox·width·height 일치 | Chrome6/6·358×954.7px·core20.88/detail17.9/note14.92·원본그림/상단 및 문맥/full배치 확인. | 명시marker4·실선7/점선1·실제양테마 방향 확인·focused277/XML/full/Chrome 통과. | replace | diagram-design | `9f10b20`; Codex `PASS` C0/I0/M0; PBVA-002·004 자산 조건 충족; Claude pending |\n| PBV-11 `software-lifecycle` | `src/assets/diagrams/software-lifecycle.svg` | `src/assets/diagrams/source/software-lifecycle.mmd` | PB-039 `software-development-lifecycle.md` | 문제 이해부터 운영 학습까지 어떤 증거와 피드백이 이어지는가? | 세로6묶음+좌우A/B귀환 | 6 | 7 | 검증·운영 2그룹 | 2026-08-28 앞질문/alt/뒤한계 보완·8단계와6묶음 대응·나머지원고 byte불변·title/desc 일치. | `480×1080`, viewBox·width·height 일치 | 실제Chrome6/6·358×805.5px·core20.88/detail17.9/note14.92, 원본그림/상단 및 문맥·full배치 확인. | 명시marker4·실선/점선/A/B·모든방향 확인, 최종243/XML/full/Chrome 통과. | reflow | diagram-design | `2a04764`; Codex `PASS` C0/I0/M0; PBVA-003·004·005 조건 충족; Claude pending |\n| PBV-12 `agent-feedback-loop` | `src/assets/diagrams/agent-feedback-loop.svg` | `src/assets/diagrams/source/agent-feedback-loop.mmd` | PB-052 `working-with-coding-agents.md` | 에이전트가 상태 확인부터 문맥 갱신까지 어떤 증거 루프로 작업하는가? | 세로 단계+피드백 | 7 | 7 | 리뷰·갱신 2그룹 | 고유 title·desc·role·aria와 원고의 질문지도/비증명 경계가 일치하며 원고는 불변입니다. | `560×1000`, viewBox·width·height 일치 | 2026-08-28 실제 Chrome6상태: 모바일358×639px core17.9/detail12.8px·하단 안내 판독. 보조 글자를 키워 이전보다 약149px 길어졌습니다. | explicit marker4·주 흐름·점선 피드백이 선과 같은 가시색으로 전환됩니다. | reflow | diagram-design | `2ccd9f4`; Codex `PASS` C0/I0/M0; PBVA-003 자산 조건 충족; Claude pending |\n| PBV-13 `architecture-decision-layers` | `src/assets/diagrams/architecture-decision-layers.svg` | `src/assets/diagrams/source/architecture-decision-layers.mmd` | PB-035 `architecture-and-frameworks.md` | 사용자 문제에서 책임·품질·구조·기술 선택·구현을 지나 검증 증거와 변경 조건까지 어떤 순서로 판단하는가? | 세로 단계 흐름 | 7 | 6 | 문제·증거 2그룹 | 고유 title/desc, alt와 그림 앞 읽기 질문·뒤 비증명 설명이 모두 있습니다. | `560×772`, viewBox·width·height 일치 | 358×494px에서 약 15px 핵심 레이블 7개와 화살표 방향을 확대 없이 읽을 수 있습니다. | 박스·글자·선과 explicit light/dark marker fill이 모두 테마에 맞게 전환됩니다. | keep | diagram-design; Archify 미사용(선형 7노드) | Task 21; Task 10 뒤 keep 유지 |"
        },
        {
          "start_line": 40,
          "end_line": 42,
          "text": "- PBV-05 deploy: 콘텐츠 흐름 `소스→빌드→아티팩트→호스팅→사용자`와 점선 이름 조회 `사용자→DNS→호스팅`을 분리해 SVG·Mermaid·원고를 맞췄습니다. 도메인·DNS 연결이 배포·HTTPS·실제 성공을 자동 증명하지 않는다는 한계를 유지합니다.\n- PBV-06 full-stack: 저장소와 선택적 외부 서비스를 백엔드 아래의 독립 분기로 두고 요청·응답 방향을 SVG·Mermaid·세 소비 원고에서 일치시켰습니다. 그림은 전체 제품 topology나 성공 증거가 아닙니다.\n- PBV-10 PRD: 문제·요구에서 설계와 스펙이 분기하고 작업 계획으로 수렴해 구현·검증으로 이어지는 7개 노드·8개 관계를 SVG·Mermaid·원고에 맞췄습니다. 두 SDD와 TDD의 서로 다른 범주와 대표 재검토 화살표의 한계를 보존했습니다."
        },
        {
          "start_line": 52,
          "end_line": 54,
          "text": "- Task 20 PBV-03 Fix Round 1 추가 증거: fresh build는 HTML 60개·학습 SVG 14개를 다시 생성했고, actual headed Google Chrome 151의 같은 6상태에서 HTTP 200·H1·draft 배지·정확한 theme·두 SVG load·alt·고유 title/desc·explicit marker·전역 overflow 0·내부 scroll 실패 0·console warning/error 0·page error 0·외부 요청 0을 재확인했습니다. 상세 SVG는 상태마다 분리된 lifeline 4개·병렬 frame 1개·메시지 11개를 포함한 정보 단위 12개·`트랜잭션 확정 경계` 1개로 MMD의 `par/and/end`와 의미가 일치했습니다. 새 PNG 6개와 같은 레코드의 overview/detail crop 12개는 각각 SHA-256·크기·바이트를 가지며 원본 18개를 열어 동시 시작 경계·레이블·화살촉·잘림·겹침·대비 결함 0을 확인했습니다. OCR 보조 검사는 6상태 모두 배지 문구와 상세 `capacity` 토큰을 읽었고, append-only manifest는 기존 실패와 초기 증거를 덮지 않은 123 records입니다. Chrome·preview PID와 4340 listener를 정리했습니다. Fix Round 1 `1d19c15`는 같은 독립 리뷰어가 이전 I1을 `RESOLVED`로 확인하고 `PASS C0/I0/M0`로 판정해 PBVA-001 해결 근거가 됐습니다.\n- Task 20 후속 11개 자산 증거: 실제 headed Google Chrome 152에서 1440×1000·1024×768·390×844와 light/dark를 조합해 PBV-02 12상태, PBV-06 18상태, 나머지 9개 자산 각 6상태, 합계 84개 최종 상태를 검증했습니다. 상태별 HTTP·H1·draft 배지·요청/실효 테마·대상 SVG·alt·고유 title/desc·marker·전역 overflow·제한된 내부 scroll·console warning/error·page error·외부 요청과 전체 화면·원본 다이어그램·상단·인접 문맥 이미지를 보존했습니다. 개별 검토 시점에는 515개 고정 입력이 모두 일치했습니다. closeout 후보 감사 문서 갱신 뒤에는 이 공유 경로의 기대 해시 차이만 11개이고 나머지 504개 입력은 일치하며, 과거 입력을 소급 재기준화하지 않습니다. 각 자산은 별도 Codex 검토에서 최종 `PASS` C0/I0/M0였습니다.\n- Task 20 전체 자동 게이트: 2026-08-30 현재 Node.js 22.16.0·npm 10.9.2에서 콘텐츠 지도 sync 변경 없음, 테스트 115/115, 공개 문서 59개, 참조 178개 Markdown/MDX+학습 SVG 14개, 계획 100점·공개 59개·중복 0개·누락 0개, 빌드 HTML 60개·최적화 SVG 14개·Pagefind HTML 60개, built-output 리터럴 Markdown 0개·고지 바이트 동일, tracked 안전 검사 210개·finding 0개, `git diff --check`를 통과했습니다. `site` 미설정 sitemap 안내 1건은 기존 비차단 경고이며 Task 20의 자산 결함이 아닙니다."
        },
        {
          "start_line": 64,
          "end_line": 68,
          "text": "| PBV-05 | `/10-deployment-operations/build-deploy-domain-dns/` | deploy-flow | 6상태·원본 화면 확인; source·marker·모바일 판독 결함 0; Codex PASS |\n| PBV-06A | `/03-full-stack/client-server-full-stack/` | full-stack-flow | 6상태·원본 화면 확인; topology·marker·모바일 판독 결함 0; Codex PASS |\n| PBV-06B | `/03-full-stack/http-request-response/` | full-stack-flow | 6상태·원본 화면 확인; topology·marker·모바일 판독 결함 0; Codex PASS |\n| PBV-06C | `/05-frontend/browser-dom-rendering/` | full-stack-flow | 6상태·원본 화면 확인; topology·marker·모바일 판독 결함 0; Codex PASS |\n| PBV-07 | `/09-git-github/git-and-github/` | git-flow | 6상태·원본 화면 확인; marker·모바일 판독 결함 0; Codex PASS |"
        },
        {
          "start_line": 80,
          "end_line": 87,
          "text": "| PBVA-001 | Important (resolved) | PBV-03 | 첫 분할은 정상 책임과 상세 질문을 나눴지만 참가자 A·B를 한 lifeline에 두고 두 요청을 위아래로 배치해 순차 실행처럼 가르쳤으며 트랜잭션 확정 경계도 명시하지 않아 `NEEDS CHANGES C0/I1/M0`였습니다. Fix Round 1 `1d19c15`은 A·B를 분리하고 Mermaid `par/and/end`와 SVG 병렬 frame을 맞추며 기존 4번 단위를 `트랜잭션 확정 경계`로 바꿨고, 같은 리뷰어가 이전 I1 `RESOLVED`와 `PASS C0/I0/M0`를 확인했습니다. | 두 질문 비중복, 개요 7노드·12화살표 이하, 상세 12정보 단위 이하, A·B 분리·명시적 병렬 문법·트랜잭션 확정 경계와 제품 중립 복구 경계를 유지합니다. | Task 20 resolved | SVG·Mermaid·alt·앞뒤 설명의 의미, 1440×1000·1024×768·390×844 light/dark 6상태의 lifeline 4개·병렬 frame·확정 경계·핵심 레이블·title·desc·marker·overflow·console·원본 crop을 확인했고 동일 리뷰어가 Fix Round 1을 `RESOLVED — PASS C0/I0/M0`로 판정했습니다. |\n| PBVA-002 | Important (resolved) | PBV-04, PBV-05, PBV-06, PBV-10 | Task 6에서 관찰한 SVG·source·원고 topology 차이를 네 자산의 학습 질문에 맞춰 함께 교정했습니다. context의 책임 연결, deploy의 콘텐츠/이름 조회 분리, full-stack의 저장소/외부 서비스 독립 분기, PRD의 분기·수렴·대표 피드백이 현재 SVG·Mermaid·alt·앞뒤 설명에서 일치합니다. | 현재 의미 동기화를 유지하고 후속 변경 시 SVG·Mermaid·원고를 같은 단위에서 검증합니다. | Task 20 resolved | 네 자산별 focused semantic 검사와 실제 Chrome 36상태, 각각의 별도 Codex `PASS` C0/I0/M0, 전체 참조·빌드 검사와 합동 closeout 재검토를 통과했습니다. |\n| PBVA-003 | Important (resolved) | PBV-01, PBV-04, PBV-05, PBV-06, PBV-07, PBV-09, PBV-11, PBV-12 | 여덟 SVG의 marker fill을 주 흐름·반환·피드백 선 의미와 light/dark 테마에 맞는 명시적 변수·class로 연결했습니다. | 명시 marker와 참조 선의 동일 의미·가시색을 유지합니다. | Task 20 resolved | 여덟 자산의 실제 Chrome 60상태에서 화살촉 소실·대비 결함 0개를 원본 crop으로 확인했고, 자산별 Codex 최종 PASS와 합동 closeout 재검토가 C0/I0/M0였습니다. |\n| PBVA-004 | Important (resolved) | PBV-01, PBV-02, PBV-04, PBV-05, PBV-06, PBV-07, PBV-08, PBV-10, PBV-11 | 아홉 자산을 모바일 세로 재배치·관계 단순화·단계 묶음으로 교정해 실제 콘텐츠 폭 358px에서 핵심·보조 레이블과 관계를 기본 확대에서 읽을 수 있게 했습니다. | 현재 세로 레이아웃과 원고의 이동 세부·비증명 설명을 유지합니다. | Task 20 resolved | 아홉 자산의 실제 Chrome 72상태에서 핵심·보조 레이블 판독, 내부 겹침·잘림·전역 overflow 0개를 확인했고, 자산별 Codex 최종 PASS와 합동 closeout 재검토가 C0/I0/M0였습니다. |\n| PBVA-005 | Important (resolved) | PBV-11 | 그림 앞에 불확실성과 피드백을 읽는 질문을, 뒤에 선형 강제 절차가 아니며 운영·검증 증거가 앞 결정을 재검토하게 한다는 범위와 한계를 추가했습니다. | 질문·alt·6개 책임 묶음·대표 피드백 A/B·비증명 설명의 일치를 유지합니다. | Task 20 resolved | 원고·SVG·Mermaid 의미 검사, actual Chrome 6상태의 인접 문맥, 자산별 Codex PASS와 합동 closeout 재검토 C0/I0/M0를 확인했습니다. |\n\nFinding register에는 역사적으로 Critical 0개·Important 5개를 기록했습니다. PBVA-001은 PBV-03 Fix Round 1과 same-reviewer PASS로, PBVA-002~005는 후속 11개 자산 단위의 구현·실제 Chrome 84상태·개별 Codex 최종 PASS·현재 전체 자동 게이트·Task 20 합동 closeout Fix Round 1 재검토 `PASS` C0/I0/M0로 해결됐습니다. 현재 미해결 수는 Critical 0개·Important 0개입니다.\n"
        }
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "sha256": "a1e266eb12b8e3e502de0cf1f5a9a37927bc2b4fd8667a3b629e82b41c475930",
      "segments": [
        {
          "start_line": 177,
          "end_line": 205,
          "text": "    },\n    {\n      \"id\": \"R04\",\n      \"slug\": \"api-data-auth\",\n      \"method\": \"개별 심층\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/04-backend-data/api-database-auth.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r04-api-data-auth-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r04-api-data-auth-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r04-api-data-auth-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r04-api-data-auth-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r04-api-data-auth-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r04-api-data-auth-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"6b1438f6f35d29511ce43e0e5b80bcf0e9a29813f35b481472d5159f7096d69b\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":2},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important2-minor6-resolved-minor2-deferred\",\"deferred_findings\":[{\"id\":\"R04-M05\",\"owner\":\"R16\",\"state\":\"open\"},{\"id\":\"R04-M08\",\"owner\":\"R20\",\"state\":\"open\"}],\"reviewed_target_sha256\":\"ce4d191006950c9eb1ea6d2e49edc6b55040f1c3b868b2afb259a063578046d3\",\"current_target_sha256\":\"72e356c3156c4a00b7af5a2b5269726dabf2ca053d577f5fbc6a0b7b3ef2e935\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r04-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r04-api-data-auth-codex-rereview.md\",\"next_scope\":\"R05 pending; no M5/ready/public approval\"}\n    },\n    {\n      \"id\": \"R05\",\n      \"slug\": \"browser-dom\",\n      \"method\": \"개별 심층\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/05-frontend/browser-dom-rendering.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r05-browser-dom-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r05-browser-dom-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r05-browser-dom-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r05-browser-dom-codex-rereview.md\"\n    },\n    {\n      \"id\": \"R06\",\n      \"slug\": \"prd-sdd-tdd\",\n      \"method\": \"개별 심층\",\n      \"implementation_state\": \"작성·구현 완료\","
        }
      ]
    },
    {
      "path": "research/stock-dashboard-case-brief.md",
      "sha256": "05efbb5cb9347631cc0c90f114040e04389a3111534966ec014f45b3a4bbb40c",
      "segments": [
        {
          "start_line": 10,
          "end_line": 12,
          "text": "\n아래 CSV의 모든 식별자, 시장명, 날짜, 가격, 거래량, 버전 및 상태는 교육용 가상 데이터입니다. IDX-X·STK-A·STK-B는 실제 지수나 종목을 가리키지 않고, `EDU-FIXTURE`는 실제 데이터 제공자나 원천을 뜻하지 않습니다. 이 표는 원천 사실, 현재 가격, 투자 판단 또는 데이터 권리의 증거가 아닙니다.\n"
        },
        {
          "start_line": 14,
          "end_line": 21,
          "text": "instrument_id,instrument_type,market,trading_date,value_type,value,unit,volume,price_basis,source_id,source_version,transform_version,value_status,missing_reason\nIDX-X,index,MARKET-X,2026-01-05,close,2500,point,,not_applicable,EDU-FIXTURE,v1,tf-v1,valid,\nSTK-A,stock,MARKET-X,2026-01-05,close,10000,KRW,1000000,unadjusted,EDU-FIXTURE,v1,tf-v1,valid,\nSTK-B,stock,MARKET-X,2026-01-05,close,20000,KRW,700000,unadjusted,EDU-FIXTURE,v1,tf-v1,warning,late_source\nIDX-X,index,MARKET-X,2026-01-06,close,2510,point,,not_applicable,EDU-FIXTURE,v1,tf-v1,valid,\nSTK-A,stock,MARKET-X,2026-01-06,close,10100,KRW,1100000,unadjusted,EDU-FIXTURE,v1,tf-v1,valid,\nSTK-B,stock,MARKET-X,2026-01-06,close,,KRW,,unadjusted,EDU-FIXTURE,v1,tf-v1,blocked,source_missing\n```"
        },
        {
          "start_line": 26,
          "end_line": 34,
          "text": "\n- `instrument_id`, `instrument_type`, `market`: 분석 대상의 가상 식별자·종류·시장입니다. 표와 차트의 선택 조건은 복합 키 `(instrument_id, instrument_type, market)`의 세 필드를 같은 값으로 적용하며 `instrument_id`만으로 합치지 않습니다.\n- `trading_date`, `value_type`, `value`, `unit`, `volume`: 값의 거래일, 값 종류, 수치, 단위, 거래량입니다. 날짜는 fixture에서 같은 가상 시장의 거래일로 설정한 값이며 실제 시장 달력·발표 시각·시간대를 뜻하지 않습니다. 통화와 단위가 다른 값을 같은 척도라고 가정하지 않습니다.\n- `price_basis`: 가격이 어떤 기준으로 표현됐는지 나타냅니다. `unadjusted`와 다른 가격 기준은 서로 바꿔 쓰거나 혼합 비교하지 않으며, 지수 행에는 `not_applicable`을 명시합니다.\n- `source_id`, `source_version`, `transform_version`: 값이 이 교육용 fixture에서 왔고 어떤 원천·변환 버전으로 재현되는지 추적하는 식별자입니다. 현재 값은 모두 `EDU-FIXTURE`, `v1`, `tf-v1`이지만 실제 원천의 존재를 뜻하지 않습니다.\n- `value_status`, `missing_reason`: 값 자체의 표시 가능성과 빈 값의 이유를 분리합니다. `valid`는 계약 검사를 통과한 값, `warning`은 이유를 함께 보여 주어야 하는 값, `blocked`는 정상 값으로 게시하지 않는 값, `review_required`는 사람 확인 전 게시하지 않는 값을 뜻합니다.\n\n`value = 0`은 관측된 수치로서 빈 값과 다릅니다. 빈 `value`는 값이 없다는 뜻이며 `missing_reason`으로 이유를 표시합니다. 예를 들어 STK-B의 2026-01-06 행은 `blocked`와 `source_missing`이므로 표·차트·요약의 정상 수치로 사용하지 않습니다. 지수 행의 빈 `volume`은 거래량이 0이라는 뜻이 아니라 해당 계약에서 비적용임을 `instrument_type: index`와 `price_basis: not_applicable`로 함께 해석합니다.\n"
        },
        {
          "start_line": 38,
          "end_line": 41,
          "text": "\n- `dataset_version`: 동일한 fixture와 변환 결과 묶음을 식별하는 불변 버전입니다. 표·차트·요약은 하나의 `dataset_version`을 함께 사용합니다.\n- `current_published_dataset_version`: 지금 사용자에게 전달하는 데이터셋의 버전입니다. 화면의 표·차트·요약·상태 설명은 모두 이 버전을 가리켜야 합니다.\n- `last_normal_dataset_version`: 마지막으로 정상 전달을 승인한 데이터셋의 버전입니다. 갱신 후보가 `blocked` 또는 `review_required`이면 `current_published_dataset_version`을 새 후보로 바꾸지 않고 이 버전을 유지해 표시합니다."
        },
        {
          "start_line": 74,
          "end_line": 80,
          "text": "\n후속 표·차트·테스트는 선택 결과, 값, 단위, 거래일, 가격 기준, 값 상태, 신선도 상태와 각 사유를 색상만으로 전달하지 않습니다. 각 상태는 화면에서 읽을 수 있는 텍스트로 나타내고, 색상은 보조 신호로만 사용합니다.\n\n표와 차트는 같은 선택 결과를 사용하며, 한쪽만 보아도 대상·값·단위·거래일·가격 기준·값 상태·신선도 상태라는 핵심 정보를 확인할 수 있어야 합니다. 차트가 모든 행을 텍스트로 반복할 필요는 없지만, 차트의 핵심 값·상태·사유는 동등한 표 또는 텍스트 요약으로 접근할 수 있어야 합니다.\n\n선택 변경, 갱신 후보 차단, 검토 대기, 지연 또는 오래됨처럼 사용자의 판단을 바꾸는 상태 변화는 보조 기술이 읽을 수 있도록 프로그램적으로 전달해야 합니다. 기간·상품 선택과 표·차트의 동등한 정보 접근은 키보드만으로도 가능해야 하며, 키보드 초점의 현재 위치와 다음 동작을 확인할 수 있어야 합니다.\n"
        },
        {
          "start_line": 84,
          "end_line": 87,
          "text": "- D-02: 사용자는 기간과 상품을 선택하고 가격 기준·단위·거래일·값 상태를 함께 확인합니다.\n- D-03: 같은 fixture와 transform_version으로 같은 표·차트·요약을 재현합니다.\n- D-04: 표와 차트는 같은 선택 결과를 사용하며 값 0·결측·경고·차단·오래됨을 구분합니다.\n- D-05: 갱신 실패 시 차단된 후보를 게시하지 않고 마지막 정상 dataset_version과 지연 이유를 표시합니다."
        },
        {
          "start_line": 93,
          "end_line": 98,
          "text": "|---|---|---|---|---|---|---|---|---|---|\n| D-01 | 첫 화면에서 fixture임을 확인 | `EDU-FIXTURE`를 가상 데이터 상태·출처 미채택 설명으로 변환 | 제목·상태·출처 패널 | 공개 읽기만 허용, 실제 원천·재배포·투자 판단 권리 없음 | 실제 종목·시세·권리 데이터처럼 오인 | 첫 viewport fixture 문구와 실제 종목·현재 시세·추천 0건 | fixture 표시·출처·부정 문구 테스트 | commit·artifact·URL 배지 smoke, 외부 시장 요청 0건 | 오표시 배포 중지/이전 artifact 뒤 표시 재검증 |\n| D-02 | 상품·기간과 거래일·단위·가격 기준 확인 | 복합 키 세 필드+기간으로 한 표시 모델 생성 | 선택·표·차트·요약 | 쓰기·계정 없음, 정적 전달은 재배포 허가가 아님 | 다른 시장/종류·point/KRW·시간대·가격 기준 혼합 | 키 충돌 fixture 분리와 모든 표현의 행·단위·상태 일치 | 선택 책임·표시 모델·필터·충돌 테스트 | manifest와 desktop/mobile 선택 smoke | last-known-good 조합 뒤 충돌 fixture 재실행 |\n| D-03 | 버전·lineage로 같은 결과 재확인 | 입력→변환→판정→산출물을 버전·checksum·시점에 연결 | 출처 패널·manifest·전달 파일 | 비밀·권리 미확인 원문을 저장·산출물에 넣지 않음 | checksum을 의미·정확성·권리 증거로 오판 | 같은 입력/환경/명령의 지정 산출물 바이트·행·정렬 일치 | schema·변환·manifest·재현 명령/테스트 | source/lock/env/command/digest/smoke 연결 | 불일치 격리 후 정상 manifest 재구성·재검증 |\n| D-04 | 0·결측·경고·차단·오래됨을 색상 없이 구분 | 상태를 공유 모델의 점·셀·요약·알림으로 변환 | 동등한 표+차트·상태/오류 UI | 공개 fixture만 전달, 검토 역할은 자동 게시 권한 아님 | 표/차트 불일치·색상 의존·상태 혼합 | 데이터/상태 동등성, 키보드 문구, 차트 실패 때 표 유지 | 공유 모델·표/차트·상태·접근성 테스트 | 1440/390 light/dark smoke·오류·내부 스크롤 | 표/텍스트 fallback 유지 뒤 상태별 재실행 |\n| D-05 | 차단 후보와 마지막 정상·지연 이유 확인 | 허용 후보만 공개 전환, 나머지는 last-known-good 보존 | 상태/버전 패널·게시 게이트·runbook | 최소 게시/복원 권한, 실제 후보는 권리 승인 전 미게시 | 차단·권리 불명 후보 게시, 데이터/사이트 복구 불일치 | 실패 후보에서 공개 digest 불변, 허용 후보만 manifest+smoke 통과 | 상태 머신·게이트·LKG manifest·runbook | 후보/현재/LKG·판정·URL·격리 복원 연결 | 게시 중지 후 호환 데이터+사이트 복원·전체 smoke |"
        },
        {
          "start_line": 101,
          "end_line": 103,
          "text": "\n같은 fixture와 `transform_version`은 같은 선택 조건에서 같은 표·차트·요약을 만들어야 합니다. 표와 차트는 각각 계산한 결과를 맞춰 보는 관계가 아니라 동일한 선택 결과를 공유해야 하며, `value_status`와 `missing_reason`도 각 결과에 같은 의미로 전달해야 합니다.\n"
        },
        {
          "start_line": 109,
          "end_line": 111,
          "text": "\n후속 조사 작업은 명시적 승인 뒤 공식 1차 자료만 사용해 사실과 적용 범위를 검증하고, 조사 근거를 `research/source-map.md`에 기록해야 합니다. 그 전까지 원고·다이어그램·테스트는 이 파일의 가상 fixture를 사용하며, 실제 시장이나 투자 성과에 관한 결론을 만들어서는 안 됩니다.\n"
        },
        {
          "start_line": 118,
          "end_line": 120,
          "text": "- `warning`과 `stale`이 서로 다른 차원임을 확인하고, `review_required`에서 최종 상태로 전환하는 데 필요한 검토 증거와 재검토 조건을 확인할 수 있습니다.\n- 상태 텍스트, 색상 단독 금지, 표·차트의 동등한 핵심 정보, 프로그램적 상태 전달, 키보드 접근이라는 최소 접근성 계약을 확인할 수 있습니다.\n- D-01~D-05와 비목표를 문서에서 그대로 확인할 수 있습니다."
        }
      ]
    }
  ],
  "render_provenance": {
    "manifest_path": "output/playwright/task20-fullstack-evidence/manifest.jsonl",
    "manifest_sha256": "3a39561009cf67ae0d692102c97fc1f70ea6278a72b8f91642481a1744184a58",
    "input_files": [
      {
        "path": "src/assets/diagrams/full-stack-flow.svg",
        "sha256": "557d9733646768fd262ee47c7234b08df0bc2d8f78ccf77c7c3f305edb9531f5",
        "unchanged": true
      },
      {
        "path": "src/assets/diagrams/source/full-stack-flow.mmd",
        "sha256": "ab9a56c0a81adf9d2fd1fa5faf31bc4159da2c6033be873173586a5c0a1e4f1d",
        "unchanged": true
      },
      {
        "path": "src/content/docs/05-frontend/browser-dom-rendering.md",
        "sha256": "0f255ccafa28948290f8db309fd5e0b88565869acc83923e50ed860803d1d9d8",
        "unchanged": true
      }
    ],
    "states": [
      {
        "occurrence_id": "pb-032@1440x1000-light",
        "recorded_at": "2026-08-27T17:12:23.031Z",
        "route": "/05-frontend/browser-dom-rendering/",
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
        "occurrence_id": "pb-032@1440x1000-dark",
        "recorded_at": "2026-08-27T17:12:23.031Z",
        "route": "/05-frontend/browser-dom-rendering/",
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
        "occurrence_id": "pb-032@1024x768-light",
        "recorded_at": "2026-08-27T17:12:23.031Z",
        "route": "/05-frontend/browser-dom-rendering/",
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
        "occurrence_id": "pb-032@1024x768-dark",
        "recorded_at": "2026-08-27T17:12:23.032Z",
        "route": "/05-frontend/browser-dom-rendering/",
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
        "occurrence_id": "pb-032@390x844-light",
        "recorded_at": "2026-08-27T17:12:23.032Z",
        "route": "/05-frontend/browser-dom-rendering/",
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
        "occurrence_id": "pb-032@390x844-dark",
        "recorded_at": "2026-08-27T17:12:23.032Z",
        "route": "/05-frontend/browser-dom-rendering/",
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
      "id": "R05-PNG-01",
      "order": 1,
      "path": "output/playwright/task20-fullstack-evidence/top-viewports/pb-032-desktop-light-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f.png",
      "sha256": "17af730006a037063c90f6a22f7ff9fd2c486f3263db5c723e69ed3dcad5b53c",
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
      "occurrence_id": "pb-032@1440x1000-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f",
        "occurrence_id": "pb-032@1440x1000-light",
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        },
        "theme": "light",
        "source_current_url": "http://127.0.0.1:4341/_astro/full-stack-flow.CAO1pi7q_Z1XTME3.svg",
        "source_svg_sha256": "557d9733646768fd262ee47c7234b08df0bc2d8f78ccf77c7c3f305edb9531f5",
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
      "id": "R05-PNG-02",
      "order": 2,
      "path": "output/playwright/task20-fullstack-evidence/diagram-crops/pb-032-desktop-light-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-fullstack-direct.png",
      "sha256": "c27d7da51857d17b2c86de2617f64e566f9dc7d7c3e0f17a9b2a633d569e038c",
      "dimensions": {
        "width": 560,
        "height": 1173
      },
      "kind": "diagram",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "occurrence_id": "pb-032@1440x1000-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f",
        "occurrence_id": "pb-032@1440x1000-light",
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        },
        "theme": "light",
        "source_current_url": "http://127.0.0.1:4341/_astro/full-stack-flow.CAO1pi7q_Z1XTME3.svg",
        "source_svg_sha256": "557d9733646768fd262ee47c7234b08df0bc2d8f78ccf77c7c3f305edb9531f5",
        "full_page": true,
        "clip": {
          "x": 324,
          "y": 2233,
          "width": 560,
          "height": 1173
        },
        "source_dom_box": {
          "x": 324,
          "y": 2233.390625,
          "width": 560,
          "height": 1172
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
      "id": "R05-PNG-03",
      "order": 3,
      "path": "output/playwright/task20-fullstack-evidence/accepted/pb-032-1440x1000-light-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-context.png",
      "sha256": "b31501032c873352501f609fdc014387b4a3ee3139c6c390962479fa52a71417",
      "dimensions": {
        "width": 1440,
        "height": 2013
      },
      "kind": "diagram-context",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "occurrence_id": "pb-032@1440x1000-light",
      "capture_method": "unresized crop of same-state accepted full PNG; verifies only diagram-adjacent prose",
      "provenance": {
        "source_full_png": "output/playwright/task20-fullstack-evidence/accepted/pb-032-1440x1000-light-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-full.png",
        "source_full_sha256": "3f0f38d6afc583b303db0a90b4b9658c83056f2d35e9f80e15c43613a90fe5d3",
        "source_rectangle_px": {
          "left": 0,
          "top": 2053,
          "width": 1440,
          "height": 2013
        }
      }
    },
    {
      "id": "R05-PNG-04",
      "order": 4,
      "path": "output/playwright/task20-fullstack-evidence/top-viewports/pb-032-desktop-dark-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f.png",
      "sha256": "91664b0ffc86f722c1ed3ede7a49265ea7f6e3a3829974128879fc7facbba7a4",
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
      "occurrence_id": "pb-032@1440x1000-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f",
        "occurrence_id": "pb-032@1440x1000-dark",
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        },
        "theme": "dark",
        "source_current_url": "http://127.0.0.1:4341/_astro/full-stack-flow.CAO1pi7q_Z1XTME3.svg",
        "source_svg_sha256": "557d9733646768fd262ee47c7234b08df0bc2d8f78ccf77c7c3f305edb9531f5",
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
      "id": "R05-PNG-05",
      "order": 5,
      "path": "output/playwright/task20-fullstack-evidence/diagram-crops/pb-032-desktop-dark-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-fullstack-direct.png",
      "sha256": "61afbca2f691f14ce2e7bdbe5373617cadbc592cd5f54d685dd273f3ae065d90",
      "dimensions": {
        "width": 560,
        "height": 1173
      },
      "kind": "diagram",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "occurrence_id": "pb-032@1440x1000-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f",
        "occurrence_id": "pb-032@1440x1000-dark",
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        },
        "theme": "dark",
        "source_current_url": "http://127.0.0.1:4341/_astro/full-stack-flow.CAO1pi7q_Z1XTME3.svg",
        "source_svg_sha256": "557d9733646768fd262ee47c7234b08df0bc2d8f78ccf77c7c3f305edb9531f5",
        "full_page": true,
        "clip": {
          "x": 324,
          "y": 2233,
          "width": 560,
          "height": 1173
        },
        "source_dom_box": {
          "x": 324,
          "y": 2233.390625,
          "width": 560,
          "height": 1172
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
      "id": "R05-PNG-06",
      "order": 6,
      "path": "output/playwright/task20-fullstack-evidence/accepted/pb-032-1440x1000-dark-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-context.png",
      "sha256": "efef812a9f3d4ca8d7962d7f689755a9a3d2a55261a7e16dd199f96285f5e52d",
      "dimensions": {
        "width": 1440,
        "height": 2013
      },
      "kind": "diagram-context",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "occurrence_id": "pb-032@1440x1000-dark",
      "capture_method": "unresized crop of same-state accepted full PNG; verifies only diagram-adjacent prose",
      "provenance": {
        "source_full_png": "output/playwright/task20-fullstack-evidence/accepted/pb-032-1440x1000-dark-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-full.png",
        "source_full_sha256": "f107478dc27164b1dc0e23f1f11157f94a897ccf3078f6df7a160c9665ab0e0b",
        "source_rectangle_px": {
          "left": 0,
          "top": 2053,
          "width": 1440,
          "height": 2013
        }
      }
    },
    {
      "id": "R05-PNG-07",
      "order": 7,
      "path": "output/playwright/task20-fullstack-evidence/top-viewports/pb-032-tablet-light-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f.png",
      "sha256": "c8949d0a4820492dd0c0951a6ac1f73993eabd15ac9bc228a4d534086866fcfe",
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
      "occurrence_id": "pb-032@1024x768-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f",
        "occurrence_id": "pb-032@1024x768-light",
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        },
        "theme": "light",
        "source_current_url": "http://127.0.0.1:4341/_astro/full-stack-flow.CAO1pi7q_Z1XTME3.svg",
        "source_svg_sha256": "557d9733646768fd262ee47c7234b08df0bc2d8f78ccf77c7c3f305edb9531f5",
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
      "id": "R05-PNG-08",
      "order": 8,
      "path": "output/playwright/task20-fullstack-evidence/diagram-crops/pb-032-tablet-light-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-fullstack-direct.png",
      "sha256": "18e7ce6477abd39ebcd0a1798111862c238042741599a7601ff7a6eff6f2b6c2",
      "dimensions": {
        "width": 560,
        "height": 1173
      },
      "kind": "diagram",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "light",
      "occurrence_id": "pb-032@1024x768-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f",
        "occurrence_id": "pb-032@1024x768-light",
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        },
        "theme": "light",
        "source_current_url": "http://127.0.0.1:4341/_astro/full-stack-flow.CAO1pi7q_Z1XTME3.svg",
        "source_svg_sha256": "557d9733646768fd262ee47c7234b08df0bc2d8f78ccf77c7c3f305edb9531f5",
        "full_page": true,
        "clip": {
          "x": 316,
          "y": 2495,
          "width": 560,
          "height": 1173
        },
        "source_dom_box": {
          "x": 316,
          "y": 2495.125,
          "width": 560,
          "height": 1172
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
      "id": "R05-PNG-09",
      "order": 9,
      "path": "output/playwright/task20-fullstack-evidence/accepted/pb-032-1024x768-light-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-context.png",
      "sha256": "ec34994695f6618c038f1f4f7d2e84f0d966b67acbfe56dfc164903fefe1c000",
      "dimensions": {
        "width": 1024,
        "height": 2013
      },
      "kind": "diagram-context",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "light",
      "occurrence_id": "pb-032@1024x768-light",
      "capture_method": "unresized crop of same-state accepted full PNG; verifies only diagram-adjacent prose",
      "provenance": {
        "source_full_png": "output/playwright/task20-fullstack-evidence/accepted/pb-032-1024x768-light-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-full.png",
        "source_full_sha256": "9649fc93ffa135853d9a4c711d9a4de0b66e8f3912ae7ccaa28f822568d5a13e",
        "source_rectangle_px": {
          "left": 0,
          "top": 2315,
          "width": 1024,
          "height": 2013
        }
      }
    },
    {
      "id": "R05-PNG-10",
      "order": 10,
      "path": "output/playwright/task20-fullstack-evidence/top-viewports/pb-032-tablet-dark-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f.png",
      "sha256": "3cc7bf9978dab34f660dbcdc7c6c1c65a57a6a801e69c22b0ee20c0b648825f9",
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
      "occurrence_id": "pb-032@1024x768-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f",
        "occurrence_id": "pb-032@1024x768-dark",
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        },
        "theme": "dark",
        "source_current_url": "http://127.0.0.1:4341/_astro/full-stack-flow.CAO1pi7q_Z1XTME3.svg",
        "source_svg_sha256": "557d9733646768fd262ee47c7234b08df0bc2d8f78ccf77c7c3f305edb9531f5",
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
      "id": "R05-PNG-11",
      "order": 11,
      "path": "output/playwright/task20-fullstack-evidence/diagram-crops/pb-032-tablet-dark-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-fullstack-direct.png",
      "sha256": "f319be16d88525f356ef50e92d6b64fed76c00f9d6be25b753023d5834403bc0",
      "dimensions": {
        "width": 560,
        "height": 1173
      },
      "kind": "diagram",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "dark",
      "occurrence_id": "pb-032@1024x768-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f",
        "occurrence_id": "pb-032@1024x768-dark",
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        },
        "theme": "dark",
        "source_current_url": "http://127.0.0.1:4341/_astro/full-stack-flow.CAO1pi7q_Z1XTME3.svg",
        "source_svg_sha256": "557d9733646768fd262ee47c7234b08df0bc2d8f78ccf77c7c3f305edb9531f5",
        "full_page": true,
        "clip": {
          "x": 316,
          "y": 2495,
          "width": 560,
          "height": 1173
        },
        "source_dom_box": {
          "x": 316,
          "y": 2495.125,
          "width": 560,
          "height": 1172
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
      "id": "R05-PNG-12",
      "order": 12,
      "path": "output/playwright/task20-fullstack-evidence/accepted/pb-032-1024x768-dark-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-context.png",
      "sha256": "5800c0ddf3d10f380c2c784c1db699cbc445a9c47eca646de90ad5764dea7aed",
      "dimensions": {
        "width": 1024,
        "height": 2013
      },
      "kind": "diagram-context",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "dark",
      "occurrence_id": "pb-032@1024x768-dark",
      "capture_method": "unresized crop of same-state accepted full PNG; verifies only diagram-adjacent prose",
      "provenance": {
        "source_full_png": "output/playwright/task20-fullstack-evidence/accepted/pb-032-1024x768-dark-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-full.png",
        "source_full_sha256": "11ef5d9b4bf6431a133b7062913f4bc3e9272e6446b48eb52ec54b4e37872f56",
        "source_rectangle_px": {
          "left": 0,
          "top": 2315,
          "width": 1024,
          "height": 2013
        }
      }
    },
    {
      "id": "R05-PNG-13",
      "order": 13,
      "path": "output/playwright/task20-fullstack-evidence/top-viewports/pb-032-mobile-light-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f.png",
      "sha256": "6f2b2ddbb9137cdc3561ff7a3aca929d85c005e26ac4dccc4944ce0af7045ac2",
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
      "occurrence_id": "pb-032@390x844-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f",
        "occurrence_id": "pb-032@390x844-light",
        "viewport": {
          "id": "mobile",
          "width": 390,
          "height": 844
        },
        "theme": "light",
        "source_current_url": "http://127.0.0.1:4341/_astro/full-stack-flow.CAO1pi7q_Z1XTME3.svg",
        "source_svg_sha256": "557d9733646768fd262ee47c7234b08df0bc2d8f78ccf77c7c3f305edb9531f5",
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
      "id": "R05-PNG-14",
      "order": 14,
      "path": "output/playwright/task20-fullstack-evidence/diagram-crops/pb-032-mobile-light-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-fullstack-direct.png",
      "sha256": "878d7d198d3b6970524b478dbfb0b670228e464ece1c8d70cb0b3db0451394bf",
      "dimensions": {
        "width": 358,
        "height": 750
      },
      "kind": "diagram",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "occurrence_id": "pb-032@390x844-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f",
        "occurrence_id": "pb-032@390x844-light",
        "viewport": {
          "id": "mobile",
          "width": 390,
          "height": 844
        },
        "theme": "light",
        "source_current_url": "http://127.0.0.1:4341/_astro/full-stack-flow.CAO1pi7q_Z1XTME3.svg",
        "source_svg_sha256": "557d9733646768fd262ee47c7234b08df0bc2d8f78ccf77c7c3f305edb9531f5",
        "full_page": true,
        "clip": {
          "x": 16,
          "y": 3370,
          "width": 358,
          "height": 750
        },
        "source_dom_box": {
          "x": 16,
          "y": 3370.53125,
          "width": 358,
          "height": 749.234375
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
      "id": "R05-PNG-15",
      "order": 15,
      "path": "output/playwright/task20-fullstack-evidence/accepted/pb-032-390x844-light-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-context.png",
      "sha256": "6fd966f6214d5bbb181f7c2c67dbb9f5fb5a71a35720a21e260711ef0af34b0f",
      "dimensions": {
        "width": 390,
        "height": 1590
      },
      "kind": "diagram-context",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "occurrence_id": "pb-032@390x844-light",
      "capture_method": "unresized crop of same-state accepted full PNG; verifies only diagram-adjacent prose",
      "provenance": {
        "source_full_png": "output/playwright/task20-fullstack-evidence/accepted/pb-032-390x844-light-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-full.png",
        "source_full_sha256": "b7167822971caf488ab242f734e7cc09a1330ca6557258ccc384f61d83b8da8c",
        "source_rectangle_px": {
          "left": 0,
          "top": 3190,
          "width": 390,
          "height": 1590
        }
      }
    },
    {
      "id": "R05-PNG-16",
      "order": 16,
      "path": "output/playwright/task20-fullstack-evidence/top-viewports/pb-032-mobile-dark-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f.png",
      "sha256": "2495570801ac536608cd0e4848bb6e243260eaa047e12b1275f047fe0bc1d7bb",
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
      "occurrence_id": "pb-032@390x844-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f",
        "occurrence_id": "pb-032@390x844-dark",
        "viewport": {
          "id": "mobile",
          "width": 390,
          "height": 844
        },
        "theme": "dark",
        "source_current_url": "http://127.0.0.1:4341/_astro/full-stack-flow.CAO1pi7q_Z1XTME3.svg",
        "source_svg_sha256": "557d9733646768fd262ee47c7234b08df0bc2d8f78ccf77c7c3f305edb9531f5",
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
      "id": "R05-PNG-17",
      "order": 17,
      "path": "output/playwright/task20-fullstack-evidence/diagram-crops/pb-032-mobile-dark-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-fullstack-direct.png",
      "sha256": "e9e47927bb4331444abd889529ccc5e0588c6fe3d758c941700f203a2eb14b59",
      "dimensions": {
        "width": 358,
        "height": 750
      },
      "kind": "diagram",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "occurrence_id": "pb-032@390x844-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f",
        "occurrence_id": "pb-032@390x844-dark",
        "viewport": {
          "id": "mobile",
          "width": 390,
          "height": 844
        },
        "theme": "dark",
        "source_current_url": "http://127.0.0.1:4341/_astro/full-stack-flow.CAO1pi7q_Z1XTME3.svg",
        "source_svg_sha256": "557d9733646768fd262ee47c7234b08df0bc2d8f78ccf77c7c3f305edb9531f5",
        "full_page": true,
        "clip": {
          "x": 16,
          "y": 3370,
          "width": 358,
          "height": 750
        },
        "source_dom_box": {
          "x": 16,
          "y": 3370.53125,
          "width": 358,
          "height": 749.234375
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
      "id": "R05-PNG-18",
      "order": 18,
      "path": "output/playwright/task20-fullstack-evidence/accepted/pb-032-390x844-dark-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-context.png",
      "sha256": "61ae021f15318c277699b502f82501fee1f38b928fe7d146aa4178a77cde672b",
      "dimensions": {
        "width": 390,
        "height": 1590
      },
      "kind": "diagram-context",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "occurrence_id": "pb-032@390x844-dark",
      "capture_method": "unresized crop of same-state accepted full PNG; verifies only diagram-adjacent prose",
      "provenance": {
        "source_full_png": "output/playwright/task20-fullstack-evidence/accepted/pb-032-390x844-dark-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-full.png",
        "source_full_sha256": "018c8e2e93f6e47efbeb8d48040e9d83f52fb99c93d13f9e4726de9011bad91b",
        "source_rectangle_px": {
          "left": 0,
          "top": 3190,
          "width": 390,
          "height": 1590
        }
      }
    }
  ]
}
```
<!-- m5-r05-request:data:end -->
