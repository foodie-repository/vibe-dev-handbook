# R14 문제 분해·추상화 — 고정 검토 요청

기준 commit 79d776c3ea4f9de0ad41063d484f4403a5510925, 입력 고정2026-11-15. 두 대상 원고 전체와 full_text_paths 전체, context_excerpts의 명시 범위를 실제 읽습니다. 브리프·용어집·R01 발췌는 일관성 문맥이며 해당 행의 전체 재검토가 아닙니다.

Controller·작성자·이전 대화와 분리된 fresh gpt-6-astra/high 저장 세션입니다. 공식 ChatGPT 구독 경로와 실제 모델/effort·history0·readOnly/network false·도구/MCP 비활성을 실행에서 확인하며 같은 저장 ID의 이력 복구로 후속 검토합니다. R02 승계 예외·API 키·추가 크레딧·전역 설정/인증 변경은 허용하지 않습니다.

공통 계약 C01~C12·한국어 여섯 절·9항목18점·치명 기준을 원고별로 적용하고 묶음 평균으로 미달을 숨기지 않습니다. 사실/가정/제약/가설/미확인/결정, 안전한 반증 실험과 권한, 증거/완료 한계, 추상화 목적/경계/비용/누수/가역성, 모임과 고정 fixture 사례의 책임 차이를 대조하세요. 두 원고에는 소유 그림·SVG·Mermaid가 없어 C07 그림 정합성은 해당 없음이지만 표·프롬프트 판독성은 실제 이미지로 검토합니다.

2026-11-15 SEI2·C4 2·Google SRE1의 관련 본문만 새 확인했습니다. 같은 실행의 SWEBOK 공식 주제 목록은 R06 출처 기록에서 재사용하며 전문·전체 방법론을 읽었다고 하지 않습니다. 과거 확인일·ACM 본문 접근 실패는 보존하고 현재 확인으로 바꾸지 않습니다. C4의 추가 수준은 실제 필요와 정의가 있으면 가능하므로 일률 금지로 해석하지 않습니다.

현재 두 경로×1440/390×light/dark=8상태의 PNG58개를 localImage/detail original로 전달합니다. 대표1440light/390dark 29개를 실제 읽고 나머지29개로 확장했으며 controller는58개를 모두 읽었습니다. 상단·3열 이상 표·프롬프트의 내부 가로 스크롤 겹침 구간을 포함하며 각 ID의 관측과 한계를 기록하세요. 2열 표는 DOM 폭만 확인했고 별도 픽셀 완독이나 전체 사이트/키보드/1024 검증이라고 확대하지 않습니다. 각 상태 HTTP200/H1하나/초안/theme정상·이미지요소0·전역overflow/errors0, 모바일3열384/358·4열512/358·프롬프트 내부스크롤을 보존합니다. 조각의 좌우 잘림은 다른 겹침 구간으로 읽으며 경계 밖 이웃 문단은 완독 증거가 아닙니다.

이 입력 준비는 원고 PASS/review/M5/ready/공개 승인이 아닙니다. 도구·쓰기·셸·웹·MCP·위임 없이 결과만 반환하세요. 준비 검사기/테스트 C/I/M·체크포인트 적합성은 원고 판정과 구분합니다. 개인home절대경로·전체비공개세션ID를 출력하지 마세요. 최초 정상 결과는 수정 전에 별도 커밋하고 사후 입력 불변성 확인을 수행합니다.

<!-- m5-r14-request:data:start -->
```json
{
  "schema_version": 1,
  "review_id": "R14",
  "baseline_commit": "79d776c3ea4f9de0ad41063d484f4403a5510925",
  "targets": [
    "src/content/docs/01-mental-models/abstraction-and-tradeoffs.md",
    "src/content/docs/01-mental-models/developer-thinking.md"
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
    "src/content/docs/01-mental-models/abstraction-and-tradeoffs.md",
    "src/content/docs/01-mental-models/developer-thinking.md",
    "research/public-beta-review-source-excerpts/r14-mental-support-2026-11-15.md",
    "research/public-beta-review-source-excerpts/r06-prd-sdd-tdd-2026-11-15.md",
    "research/meeting-webapp-case-brief.md",
    "research/stock-dashboard-case-brief.md",
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
      "sha256": "72118ce1f53122dd046a91a3de6f6b91b5f31ee43809a2dbf0bd278963a87075",
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
      "sha256": "99fc13dcdb156ab503cab88f3b43d17bd863bf5f4c4b12de19fab40a3aa6ac60",
      "segments": [
        {
          "start_line": 221,
          "end_line": 228,
          "text": "|---|---|---|---|---|\n| PB-019 추상화와 트레이드오프 | https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics | 2026-08-13 직접 확인; IEEE Computer Society의 현재 공개 SWEBOK 주제 목록, 페이지에 판본 번호 미표시 | 설계의 추상화·캡슐화, 모델링·프로토타이핑, 경험적 방법을 서로 관련된 소프트웨어공학 학습 주제로 다루는 범위 | PB-019의 계층 표·판단 순서나 C4 수준을 업계 표준으로 확대하지 않음 |\n| PB-019 추상화와 트레이드오프 | https://www.sei.cmu.edu/blog/building-quality-software-4-engineering-centric-techniques, https://www.sei.cmu.edu/blog/managing-architectural-risk-during-agile-development | 2026-08-13 직접 확인; CMU SEI 공식 기관 글, 별도 표준 상태 없음 | 목적과 관련 없는 세부를 덜어 내는 모델·정보 은닉의 복잡성 관리와, 분석에 필요한 조건까지 제거한 추상화의 위험 범위 | 두 기관 글을 모든 설계의 유일한 절차·완전한 비용 모델로 확대하지 않음 |\n| PB-019 추상화와 트레이드오프 | https://c4model.com/abstractions, https://c4model.com/abstractions/faq | 2026-08-13 직접 확인; C4 모델 공식 사이트의 현재 공개 설명, 페이지 버전 미표시 | 명시적으로 정의한 여러 추상화 수준과 임의 수준 추가가 만드는 혼선을 보여 주는 모델 사례 | C4 수준을 모든 조직·시스템의 필수 계층이나 업계 표준으로 확대하지 않음 |\n| PB-019 추상화와 트레이드오프 | https://dl.acm.org/doi/10.1145/361598.361623 | 2026-08-13 본문 접근 실패; HTTP 403, 검색 메타데이터만 확인 | 직접 적용 없음 | 열리지 않은 본문이나 검색 요약을 확인된 근거로 사용하지 않음 |\n| PB-020 개발자 사고 | https://sre.google/sre-book/effective-troubleshooting/ | 2026-08-13 직접 확인; Google SRE Book Chapter 12, Chris Jones, 온라인 판권 표시 2017, 페이지 버전 번호 미표시 | 관찰과 시스템 지식에서 반복 가설·검사를 만들고, 재현·범위 축소·영향 완화·증거 보존·시험 결과 기록으로 문제를 좁히는 운영 신뢰성 문맥 | 한 장의 문제 해결 방법을 모든 개발·장애·조직의 유일한 순서로 확대하지 않고 안전·권한·도메인에 따라 순서가 달라질 수 있음을 유지 |\n| PB-020 개발자 사고 | https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics | 2026-08-13 직접 확인; IEEE Computer Society의 현재 공개 SWEBOK 주제 목록, 페이지에 판본 번호 미표시 | 소프트웨어공학 과정·설계·경험적 방법·실험 기법·측정·근본 원인 분석을 연결하는 넓은 교육 범위 | PB-020의 여섯 칸·작은 실험·중단 조건을 SWEBOK 표준 절차로 확대하지 않음 |\n| PB-021 소프트웨어 시스템 | https://www.sei.cmu.edu/library/attribute-driven-design-method-collection, https://c4model.com/abstractions/component, https://c4model.com/abstractions/software-system | 2026-08-13 직접 확인; CMU SEI 공식 collection과 C4 모델 공식 사이트의 현재 공개 설명, 페이지 버전 미표시 | 요구·제약에서 요소에 책임을 할당하고 인터페이스를 정의하는 설계 관점, C4 모델 안의 component 정의와 시스템 경계의 맥락 의존성 | 이 책의 여섯 렌즈나 C4 용어를 업계 표준 분류로 확대하지 않고 component·system 경계가 방법·조직·질문에 따라 달라질 수 있음을 유지 |"
        },
        {
          "start_line": 262,
          "end_line": 267,
          "text": "|---|---|---|---|\n| `01-mental-models/abstraction-and-tradeoffs.md` | https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics, https://www.sei.cmu.edu/blog/building-quality-software-4-engineering-centric-techniques, https://www.sei.cmu.edu/blog/managing-architectural-risk-during-agile-development | 2026-08-13 | 목적에 필요한 세부를 남기고 불필요한 세부를 숨기는 추상화, 정보 은닉을 통한 복잡성 관리, 분석에 필요한 조건을 제거했을 때의 위험 범위. 이 장의 판단 순서를 표준으로 사용하지 않음 |\n| `01-mental-models/abstraction-and-tradeoffs.md` | https://c4model.com/abstractions, https://c4model.com/abstractions/faq | 2026-08-13 | 명시적으로 정의한 여러 추상화 수준과 수준을 임의로 늘릴 때의 혼선을 보여 주는 한 모델의 범위. C4 수준을 모든 시스템의 필수 계층으로 일반화하지 않음 |\n| `01-mental-models/developer-thinking.md` | https://sre.google/sre-book/effective-troubleshooting/ | 2026-08-13 | 관찰 사실·가설·확인/반대 증거·재현·범위 축소·통제된 변경·영향 완화·증거 보존을 연결하는 운영 신뢰성 교육 범위. 모든 문제의 유일한 절차로 사용하지 않음 |\n| `01-mental-models/developer-thinking.md` | https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics | 2026-08-13 | 경험적 방법·실험 기법·측정·근본 원인 분석을 소프트웨어공학의 넓은 학습 범위에 배치하는 근거. 이 장의 편집 절차를 표준으로 사용하지 않음 |\n| `01-mental-models/software-is-a-system.md` | https://www.computer.org/education/bodies-of-knowledge/software-engineering | 2026-08-04 | 소프트웨어를 요구사항·설계·구현·테스트·운영과 품질을 잇는 시스템으로 보는 교육 범위 |"
        }
      ]
    },
    {
      "path": "research/public-beta-source-gap-register.md",
      "sha256": "eefe11c1c41b74d3e01fa11dd403426584c4bb18dddbe8c1ca3782e4d05025bd",
      "segments": [
        {
          "start_line": 34,
          "end_line": 36,
          "text": "|---|---|---|---|---|---|---|---|---|\n| PBSG-001 | PB-019 `abstraction-and-tradeoffs.md`; PB-022 `dependencies-package-managers-environments.md`; PB-024 `terminal-processes-ports.md` | 추상화의 비용, 의존성·패키지 관리자·잠금 파일·실행 환경의 책임, 터미널·프로세스·포트의 관계와 안전한 진단 | important | source-map의 확인된 소프트웨어공학 범위에 더해 언어 런타임·대표 패키지 관리자·운영체제·인터넷 표준의 공식 개념 및 진단 문서 | 2026-08-13 확인; 선택한 런타임·패키지 관리자·운영체제·셸·도구 버전 또는 표준 상태가 바뀌면 재확인 | confirmed | Task 12 | 한 생태계의 잠금·설치·포트 진단 동작을 모든 언어·운영체제·셸의 보편 규칙으로 확대하지 않습니다. |\n| PBSG-002 | PB-026 `frontend-backend-boundary.md`; PB-029 `data-model-schema-migration.md`; PB-030 `state-cache-queue.md` | 클라이언트와 서버의 신뢰 경계, 스키마 변경과 데이터 보존, 권위 원본·캐시·큐의 일관성 및 재시도 | important | RFC 9110·9111, OWASP AJAX·Authorization, Chrome DevTools, PostgreSQL 18의 테이블·제약·ALTER·트랜잭션·격리, RabbitMQ 공식 reliability·queue, Parallel Change·Continuous Integration·Evolutionary Database Design의 1차 패턴 자료 | 2026-08-13 확인; 웹 표준·데이터베이스·메시징 제품 또는 버전과 적용 구성이 바뀌면 재확인 | confirmed | Task 13 | 화면 검증을 보안 통제로 간주하거나 PostgreSQL·RabbitMQ 한 제품의 동작과 단계적 마이그레이션 패턴을 다른 데이터베이스·큐의 무중단·무손실·정확히 한 번 보장으로 단정하지 않습니다. |"
        },
        {
          "start_line": 39,
          "end_line": 41,
          "text": "| PBSG-005 | PB-047 `environment-variables-config.md` | 설정·환경 변수·비밀의 분리, 로딩 우선순위, 노출 방지·회전·복구 | important | 2026-08-13 확인: Node.js v26.5.1 환경 변수·DotEnv 공식 문서, Astro 현재 환경 변수 가이드, Vercel 현재 환경 변수 제품 문서, OWASP Secrets Management Cheat Sheet | 런타임·프레임워크·호스팅 제품·비밀 관리 지침이 바뀌거나 실제 배포 대상을 선택할 때 해당 버전·설정·권한을 재확인 | confirmed | Task 16 | 환경 변수라는 저장 위치만으로 비밀이 암호화·격리·회전된다고 단정하거나 Node.js·Astro·Vercel 한 제품의 로딩·노출·환경 범위를 다른 런타임·프레임워크·호스팅 환경에 적용하지 않습니다. |\n| PBSG-006 | PB-020 `developer-thinking.md` | 모호한 문제를 사실·가정·실패·증거로 분해하고 재현·가설·최소 변경·검증으로 좁히는 개발자 사고 절차 | normal | 소프트웨어공학의 문제 해결·디버깅·실험 설계를 다루는 표준 본문 또는 1차 교육·연구 자료 | 2026-08-13 확인; 인용한 문서 상태나 적용 범위 변경 시 재확인 | confirmed | Task 12 | 한 문제 해결 순서를 모든 장애·조직·도메인에 맞는 유일한 개발 절차로 제시하지 않습니다. |\n| PBSG-007 | PB-035 `architecture-and-frameworks.md` | 아키텍처·기술 스택·프레임워크·라이브러리·런타임·플랫폼의 구분과 품질 속성·제약 기반 선택 | important | 2026-08-13 확인: ISO/IEC/IEEE 42010:2022 공식 범위와 conceptual model, CMU SEI 4판 소개, 2026-08-04 SWEBOK 기존 직접 확인, 2026-08-13 MDN 웹 프레임워크 자료 | 표준·자료 상태 변경 시와 예시 프레임워크·런타임·플랫폼을 실제 후보로 채택할 때 해당 제품의 공식 제어·지원·배포 범위를 재확인 | confirmed | Task 10; Task 14 | architecture description·품질 관계와 이 원고의 편집상 도구 구분·일곱 단계·사례 가설을 하나의 표준으로 합치거나 특정 프레임워크 구성을 아키텍처 자체·모든 웹앱의 기본 정답·현재 구현 성공으로 일반화하지 않습니다. |"
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
          "start_line": 91,
          "end_line": 96,
          "text": "\n- PBSG-001은 SWEBOK·SEI·C4의 추상화와 정보 은닉 범위, Node.js·npm CLI 11.19.0 Legacy·Python 3.14.7의 런타임·의존성·매니페스트·잠금 파일·격리 환경 범위, POSIX.1-2024 Issue 8·Apple macOS Tahoe 26 Terminal·RFC 6335/BCP 165·IANA 레지스트리·Windows Server 2025 PowerShell·PowerShell 7.5의 셸·프로세스·PID·포트·조회·종료 범위를 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. 각 원고는 C4 계층, npm 설치 규칙, Python `venv`, POSIX job control, Apple Control-C, IANA 포트 등록, Windows 조회·종료 도구를 해당 모델·생태계·운영체제·표준의 범위로 한정하며, 접근에 실패한 ACM Parnas 본문과 현행 POSIX `ps`·`kill` 본문은 갱신 근거로 사용하지 않습니다.\n- PBSG-006은 Google SRE Book의 관찰·가설·검사·재현·범위 축소·영향 완화·증거 보존 범위와 SWEBOK의 넓은 소프트웨어공학 교육 범위를 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. PB-020은 이 흐름을 하나뿐인 절차로 제시하지 않고 안전·권한·도메인에 따라 순서와 깊이가 달라질 수 있다는 금지선을 본문과 source map에 함께 유지합니다.\n- PBSG-021은 SEI·C4의 책임·인터페이스·구성요소·시스템 경계, RFC 9111의 HTTP 캐시 최신성, Astro의 정적/요청 시점 렌더링 예시, Chrome·Firefox의 현재 개발자 도구 명칭을 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. 여섯 렌즈는 편집 틀로, RFC·제품 문서는 각 표준·제품 범위로 한정합니다.\n- 현재 집계는 `confirmed` 3개, `not-confirmed` 23개입니다. 미확인 위험 집계는 critical 2개·important 21개·normal 0개이며, 확인된 PBSG-001·006·021의 위험은 미확인 집계에서 제외합니다.\n"
        },
        {
          "start_line": 101,
          "end_line": 103,
          "text": "- PBSG-002는 RFC 9110·9111, OWASP AJAX·Authorization, Chrome DevTools, PostgreSQL 18의 테이블·제약·ALTER·트랜잭션·격리, RabbitMQ reliability·queue와 Parallel Change·Continuous Integration·Evolutionary Database Design의 1차 패턴 자료를 2026-08-13에 직접 확인해 `confirmed`를 유지합니다. PostgreSQL은 관계형 구조·제품 동작만, Parallel Change는 expand·migrate·contract와 구·신 계약 공존만, Continuous Integration의 데이터베이스 필드 예시는 새 필드·이중 쓰기·기존 데이터 복사·새 읽기·옛 필드 제거만, Evolutionary Database Design은 스키마·데이터·접근 코드 변경·마이그레이션 테스트·복수 애플리케이션 버전의 하위 호환 스키마만 지원합니다. PB-026·029·030은 이 직접 범위를 각각 연결하며, 이를 다른 데이터베이스·큐의 무중단·무손실·정확히 한 번 완료나 실제 서비스 성공으로 일반화하지 않습니다.\n- 현재 집계는 `confirmed` 6개, `not-confirmed` 20개입니다. 미확인 위험 집계는 critical 2개·important 18개·normal 0개이며, 확인된 PBSG-001·002·006·021·022·023의 위험은 미확인 집계에서 제외합니다.\n"
        },
        {
          "start_line": 109,
          "end_line": 111,
          "text": "- PBSG-025는 ISO/IEC/IEEE 29148:2018, inactive-reserved IEEE 1016-2009, Nygard ADR 원형, GitHub Spec Kit 현재 문서, Fowler의 TDD 설명을 원고 전체에 대조해 `confirmed`로 전환했습니다. PRD·Software Design Description 산출물, Spec-Driven Development 접근, TDD 구현 규율의 입력·출력·순서·실패를 분리하고 표준·제품·방법론의 상태와 비보장선을 기록했으며, 사후 테스트를 TDD로 승격하지 않습니다.\n- 현재 집계는 `confirmed` 10개, `not-confirmed` 16개입니다. 미확인 위험 집계는 critical 2개·important 14개·normal 0개이며, 확인된 PBSG-001·002·003·006·007·021·022·023·024·025의 위험은 미확인 집계에서 제외합니다.\n"
        },
        {
          "start_line": 116,
          "end_line": 118,
          "text": "- PBSG-015·016은 ISO/IEC/IEEE 29119-1:2022와 공식 시리즈 안내, SWEBOK V4.0a, Fowler 사이트의 Practical Test Pyramid, Google Testing Blog의 flaky test·coverage 조직 사례를 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. PB-042는 static·dynamic, manual·automated, 테스트 수준·목적·초점을 다른 축으로 구분하고 피라미드·coverage·도구 성공 표시를 실제 위험 배분·오라클·사용자 성공의 대리 증거로 사용하지 않습니다. 특정 테스트 러너의 예상 실패·건너뜀·필터 0건·종료 코드 의미는 채택한 도구·버전의 공식 문서와 출력으로 다시 확인합니다.\n- 현재 집계는 `confirmed` 14개, `not-confirmed` 12개입니다. 미확인 위험 집계는 critical 2개·important 10개·normal 0개이며, 확인된 PBSG-001·002·003·004·006·007·008·015·016·021·022·023·024·025의 위험은 미확인 집계에서 제외합니다.\n"
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
          "start_line": 45,
          "end_line": 48,
          "text": "| PB-018 | `src/content/docs/reference/index.md` | navigation | 낯선 용어와 점검 기준을 어디서 찾는가? | 참고 문서들의 용도를 구분한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 11 | 두 용어집·방법론 지도·체크리스트·날짜 있는 현재 도구 매핑의 서로 다른 용도와 다의어 주의가 명확하므로 유지합니다. |\n| PB-019 | `src/content/docs/01-mental-models/abstraction-and-tradeoffs.md` | core | 추상화가 무엇을 숨기고 어떤 비용을 만드는가? | 추상화 경계와 선택 비용을 설명한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 12 | 정확한 정의·비유 한계·계층·책임·비용·누수·과소/과잉 추상화·가역성·실패 복구·AI 검토를 보강하고 PBSG-001의 세 원고 전체 주장 묶음을 공식·1차 출처로 확인해 SOURCE를 닫았습니다. |\n| PB-020 | `src/content/docs/01-mental-models/developer-thinking.md` | core | 모호한 요청을 어떻게 검증 가능한 작은 문제로 나누는가? | 사실·가정·실패·증거로 작업을 분해한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 12 | 관찰 가능한 증상과 해석, 사실·가정·제약·가설·작은 실험·피드백, 보존·복구·중단 조건·증거 기반 완료를 하나뿐인 절차로 일반화하지 않고 직접 근거와 함께 설명합니다. |\n| PB-021 | `src/content/docs/01-mental-models/software-is-a-system.md` | core | 소프트웨어를 화면이 아닌 시스템으로 어떻게 보는가? | 구성요소·책임·경계·상태·흐름·품질로 설명한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 12; Task 20 resolved | 여섯 렌즈의 편집 틀 경계, 두 사례의 상태 변경/읽기·변환 책임, 네 성공 관점, HTTP 캐시·정적 전달·브라우저 도구의 직접 근거를 보강했습니다. analytics 그림의 390px 핵심·보조 레이블 판독성은 Task 20 `aa13701`과 실제 Chrome 12상태·Codex `PASS`로 교정됐습니다. |"
        }
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "sha256": "cba5a21ec8703adb49f4449a3b5fe018a44a0969e75c3bc9f8e01c5812c85cba",
      "segments": [
        {
          "start_line": 303,
          "end_line": 331,
          "text": "    },\n    {\n      \"id\": \"R13\",\n      \"slug\": \"stock-capstone\",\n      \"method\": \"개별 심층\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/12-case-studies/analytics-dashboard-case-study.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r13-stock-capstone-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r13-stock-capstone-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r13-stock-capstone-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r13-stock-capstone-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r13-stock-capstone-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r13-stock-capstone-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"1f9bf1bf61bd0fea2e00c8ff98a1d2216c3c86d587460e7ca7c11a0ec7eae346\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important4-minor2-preparation-minor1-resolved\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"08a927dacc3ff0fa662ff87728316485b7cd4749bbb8931a83de301d50b1e1d5\",\"current_target_sha256\":\"4be57134aca3ace3b0d6e3400ddfefd515b7f04b42affa4c1e1c4ab71d0d9502\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r13-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r13-stock-capstone-codex-rereview.md\",\"next_scope\":\"R14 pending; no M5/ready/public approval\"}\n    },\n    {\n      \"id\": \"R14\",\n      \"slug\": \"mental-support\",\n      \"method\": \"소묶음\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/01-mental-models/abstraction-and-tradeoffs.md\", \"src/content/docs/01-mental-models/developer-thinking.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r14-mental-support-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r14-mental-support-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r14-mental-support-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r14-mental-support-codex-rereview.md\"\n    },\n    {\n      \"id\": \"R15\",\n      \"slug\": \"work-environment\",\n      \"method\": \"소묶음\",\n      \"implementation_state\": \"작성·구현 완료\","
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
    "manifest_path": "output/playwright/r14-inputs-20261115-pilot/observations.json",
    "manifest_sha256": "f862fadadac2f23bb00cbb848b3e4c1bd1bb68c47646f1714722639146a1479a",
    "additional_context_manifests": [
      {
        "path": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "sha256": "fe31c4b9d87be77551abca86285751533c4d3d0565447a0d94dac9b9a9ff7a72"
      }
    ],
    "input_files": [
      {
        "path": "src/content/docs/01-mental-models/abstraction-and-tradeoffs.md",
        "sha256": "8a64b3cb56ebcd7686a7c7f620a0ab1ae0d33264215ad01e24c0ac725e05a607"
      },
      {
        "path": "src/content/docs/01-mental-models/developer-thinking.md",
        "sha256": "b4a0a15829610cff3a3ab82592290f0c720d59c395d7ddee99860245267f30a9"
      },
      {
        "path": "src/styles/custom.css",
        "sha256": "2236f2a8a9b30515cb641d48de7089d15590834766ada3f60de9f649ef36c137"
      }
    ],
    "states": [
      {
        "route": "abstraction-and-tradeoffs",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "title": "추상화와 트레이드오프",
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
            "cols": 2,
            "client": 788,
            "scroll": 788,
            "rows": 9
          },
          {
            "index": 2,
            "cols": 2,
            "client": 788,
            "scroll": 788,
            "rows": 7
          },
          {
            "index": 3,
            "cols": 2,
            "client": 788,
            "scroll": 788,
            "rows": 5
          }
        ],
        "images": 0,
        "paths": [
          "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-1440-light-top.png",
          "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-1440-light-table0-part0.png",
          "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-1440-light-pre4-part0.png"
        ],
        "captures": [
          {
            "path": "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-1440-light-table0-part0.png",
            "index": 0,
            "tag": "TABLE",
            "columns": 4,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 320,
              "y": 1214.328125,
              "width": 796,
              "height": 439.609375
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-1440-light-pre4-part0.png",
            "index": 4,
            "tag": "PRE",
            "columns": 0,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 320,
              "y": 5575.609375,
              "width": 796,
              "height": 319
            }
          }
        ],
        "errors": []
      },
      {
        "route": "abstraction-and-tradeoffs",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "title": "추상화와 트레이드오프",
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "tables": [
          {
            "index": 0,
            "cols": 4,
            "client": 358,
            "scroll": 512,
            "rows": 6
          },
          {
            "index": 1,
            "cols": 2,
            "client": 358,
            "scroll": 358,
            "rows": 9
          },
          {
            "index": 2,
            "cols": 2,
            "client": 358,
            "scroll": 358,
            "rows": 7
          },
          {
            "index": 3,
            "cols": 2,
            "client": 358,
            "scroll": 358,
            "rows": 5
          }
        ],
        "images": 0,
        "paths": [
          "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-390-dark-top.png",
          "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-390-dark-table0-part0.png",
          "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-390-dark-table0-part1.png",
          "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-390-dark-pre4-part0.png",
          "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-390-dark-pre4-part1.png"
        ],
        "captures": [
          {
            "path": "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-390-dark-table0-part0.png",
            "index": 0,
            "tag": "TABLE",
            "columns": 4,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 12,
              "y": 1713.0625,
              "width": 366,
              "height": 623.90625
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-390-dark-table0-part1.png",
            "index": 0,
            "tag": "TABLE",
            "columns": 4,
            "requestedScroll": 154,
            "actualScroll": 154,
            "clip": {
              "x": 12,
              "y": 1713.0625,
              "width": 366,
              "height": 623.90625
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-390-dark-pre4-part0.png",
            "index": 4,
            "tag": "PRE",
            "columns": 0,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 12,
              "y": 8243.359375,
              "width": 366,
              "height": 335
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-390-dark-pre4-part1.png",
            "index": 4,
            "tag": "PRE",
            "columns": 0,
            "requestedScroll": 255,
            "actualScroll": 255,
            "clip": {
              "x": 12,
              "y": 8243.359375,
              "width": 366,
              "height": 335
            }
          }
        ],
        "errors": []
      },
      {
        "route": "developer-thinking",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "title": "개발자처럼 문제를 나누는 법",
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "tables": [
          {
            "index": 0,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 7
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
            "rows": 4
          },
          {
            "index": 3,
            "cols": 2,
            "client": 788,
            "scroll": 788,
            "rows": 9
          },
          {
            "index": 4,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 6
          },
          {
            "index": 5,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 7
          },
          {
            "index": 6,
            "cols": 2,
            "client": 788,
            "scroll": 788,
            "rows": 13
          }
        ],
        "images": 0,
        "paths": [
          "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-top.png",
          "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-table0-part0.png",
          "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-table1-part0.png",
          "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-table2-part0.png",
          "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-table4-part0.png",
          "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-table5-part0.png",
          "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-pre6-part0.png"
        ],
        "captures": [
          {
            "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-table0-part0.png",
            "index": 0,
            "tag": "TABLE",
            "columns": 3,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 320,
              "y": 1896.828125,
              "width": 796,
              "height": 351.296875
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-table1-part0.png",
            "index": 1,
            "tag": "TABLE",
            "columns": 4,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 320,
              "y": 2981.125,
              "width": 796,
              "height": 300.296875
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-table2-part0.png",
            "index": 2,
            "tag": "TABLE",
            "columns": 3,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 320,
              "y": 3487.921875,
              "width": 796,
              "height": 326.625
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-table4-part0.png",
            "index": 4,
            "tag": "TABLE",
            "columns": 3,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 320,
              "y": 6807.5,
              "width": 796,
              "height": 307.96875
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-table5-part0.png",
            "index": 5,
            "tag": "TABLE",
            "columns": 3,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 320,
              "y": 7393.96875,
              "width": 796,
              "height": 456.609375
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-pre6-part0.png",
            "index": 6,
            "tag": "PRE",
            "columns": 0,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 320,
              "y": 8113.078125,
              "width": 796,
              "height": 735.5
            }
          }
        ],
        "errors": []
      },
      {
        "route": "developer-thinking",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "title": "개발자처럼 문제를 나누는 법",
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "tables": [
          {
            "index": 0,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 7
          },
          {
            "index": 1,
            "cols": 4,
            "client": 358,
            "scroll": 512,
            "rows": 4
          },
          {
            "index": 2,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 4
          },
          {
            "index": 3,
            "cols": 2,
            "client": 358,
            "scroll": 358,
            "rows": 9
          },
          {
            "index": 4,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 6
          },
          {
            "index": 5,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 7
          },
          {
            "index": 6,
            "cols": 2,
            "client": 358,
            "scroll": 358,
            "rows": 13
          }
        ],
        "images": 0,
        "paths": [
          "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-top.png",
          "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table0-part0.png",
          "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table0-part1.png",
          "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table1-part0.png",
          "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table1-part1.png",
          "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table2-part0.png",
          "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table2-part1.png",
          "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table4-part0.png",
          "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table4-part1.png",
          "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table5-part0.png",
          "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table5-part1.png",
          "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-pre6-part0.png",
          "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-pre6-part1.png",
          "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-pre6-part2.png"
        ],
        "captures": [
          {
            "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table0-part0.png",
            "index": 0,
            "tag": "TABLE",
            "columns": 3,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 12,
              "y": 2889.75,
              "width": 366,
              "height": 772.546875
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table0-part1.png",
            "index": 0,
            "tag": "TABLE",
            "columns": 3,
            "requestedScroll": 26,
            "actualScroll": 26,
            "clip": {
              "x": 12,
              "y": 2889.75,
              "width": 366,
              "height": 772.546875
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table1-part0.png",
            "index": 1,
            "tag": "TABLE",
            "columns": 4,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 12,
              "y": 4880.484375,
              "width": 366,
              "height": 458.265625
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table1-part1.png",
            "index": 1,
            "tag": "TABLE",
            "columns": 4,
            "requestedScroll": 154,
            "actualScroll": 154,
            "clip": {
              "x": 12,
              "y": 4880.484375,
              "width": 366,
              "height": 458.265625
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table2-part0.png",
            "index": 2,
            "tag": "TABLE",
            "columns": 3,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 12,
              "y": 5703.84375,
              "width": 366,
              "height": 484.59375
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table2-part1.png",
            "index": 2,
            "tag": "TABLE",
            "columns": 3,
            "requestedScroll": 26,
            "actualScroll": 26,
            "clip": {
              "x": 12,
              "y": 5703.84375,
              "width": 366,
              "height": 484.59375
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table4-part0.png",
            "index": 4,
            "tag": "TABLE",
            "columns": 3,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 12,
              "y": 10721.984375,
              "width": 366,
              "height": 729.21875
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table4-part1.png",
            "index": 4,
            "tag": "TABLE",
            "columns": 3,
            "requestedScroll": 26,
            "actualScroll": 26,
            "clip": {
              "x": 12,
              "y": 10721.984375,
              "width": 366,
              "height": 729.21875
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table5-part0.png",
            "index": 5,
            "tag": "TABLE",
            "columns": 3,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 12,
              "y": 11916.296875,
              "width": 366,
              "height": 798.875
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table5-part1.png",
            "index": 5,
            "tag": "TABLE",
            "columns": 3,
            "requestedScroll": 26,
            "actualScroll": 26,
            "clip": {
              "x": 12,
              "y": 11916.296875,
              "width": 366,
              "height": 798.875
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-pre6-part0.png",
            "index": 6,
            "tag": "PRE",
            "columns": 0,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 12,
              "y": 13129.46875,
              "width": 366,
              "height": 751.5
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-pre6-part1.png",
            "index": 6,
            "tag": "PRE",
            "columns": 0,
            "requestedScroll": 356,
            "actualScroll": 356,
            "clip": {
              "x": 12,
              "y": 13129.46875,
              "width": 366,
              "height": 751.5
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-pre6-part2.png",
            "index": 6,
            "tag": "PRE",
            "columns": 0,
            "requestedScroll": 413,
            "actualScroll": 413,
            "clip": {
              "x": 12,
              "y": 13129.46875,
              "width": 366,
              "height": 751.5
            }
          }
        ],
        "errors": []
      },
      {
        "route": "abstraction-and-tradeoffs",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "title": "추상화와 트레이드오프",
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
            "cols": 2,
            "client": 788,
            "scroll": 788,
            "rows": 9
          },
          {
            "index": 2,
            "cols": 2,
            "client": 788,
            "scroll": 788,
            "rows": 7
          },
          {
            "index": 3,
            "cols": 2,
            "client": 788,
            "scroll": 788,
            "rows": 5
          }
        ],
        "images": 0,
        "paths": [
          "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-1440-dark-top.png",
          "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-1440-dark-table0-part0.png",
          "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-1440-dark-pre4-part0.png"
        ],
        "captures": [
          {
            "path": "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-1440-dark-table0-part0.png",
            "index": 0,
            "tag": "TABLE",
            "columns": 4,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 320,
              "y": 1214.328125,
              "width": 796,
              "height": 439.609375
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-1440-dark-pre4-part0.png",
            "index": 4,
            "tag": "PRE",
            "columns": 0,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 320,
              "y": 5575.609375,
              "width": 796,
              "height": 319
            }
          }
        ],
        "errors": []
      },
      {
        "route": "abstraction-and-tradeoffs",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "title": "추상화와 트레이드오프",
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "tables": [
          {
            "index": 0,
            "cols": 4,
            "client": 358,
            "scroll": 512,
            "rows": 6
          },
          {
            "index": 1,
            "cols": 2,
            "client": 358,
            "scroll": 358,
            "rows": 9
          },
          {
            "index": 2,
            "cols": 2,
            "client": 358,
            "scroll": 358,
            "rows": 7
          },
          {
            "index": 3,
            "cols": 2,
            "client": 358,
            "scroll": 358,
            "rows": 5
          }
        ],
        "images": 0,
        "paths": [
          "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-390-light-top.png",
          "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-390-light-table0-part0.png",
          "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-390-light-table0-part1.png",
          "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-390-light-pre4-part0.png",
          "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-390-light-pre4-part1.png"
        ],
        "captures": [
          {
            "path": "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-390-light-table0-part0.png",
            "index": 0,
            "tag": "TABLE",
            "columns": 4,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 12,
              "y": 1713.0625,
              "width": 366,
              "height": 623.90625
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-390-light-table0-part1.png",
            "index": 0,
            "tag": "TABLE",
            "columns": 4,
            "requestedScroll": 154,
            "actualScroll": 154,
            "clip": {
              "x": 12,
              "y": 1713.0625,
              "width": 366,
              "height": 623.90625
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-390-light-pre4-part0.png",
            "index": 4,
            "tag": "PRE",
            "columns": 0,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 12,
              "y": 8243.359375,
              "width": 366,
              "height": 335
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-390-light-pre4-part1.png",
            "index": 4,
            "tag": "PRE",
            "columns": 0,
            "requestedScroll": 255,
            "actualScroll": 255,
            "clip": {
              "x": 12,
              "y": 8243.359375,
              "width": 366,
              "height": 335
            }
          }
        ],
        "errors": []
      },
      {
        "route": "developer-thinking",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "title": "개발자처럼 문제를 나누는 법",
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "tables": [
          {
            "index": 0,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 7
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
            "rows": 4
          },
          {
            "index": 3,
            "cols": 2,
            "client": 788,
            "scroll": 788,
            "rows": 9
          },
          {
            "index": 4,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 6
          },
          {
            "index": 5,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 7
          },
          {
            "index": 6,
            "cols": 2,
            "client": 788,
            "scroll": 788,
            "rows": 13
          }
        ],
        "images": 0,
        "paths": [
          "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-top.png",
          "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-table0-part0.png",
          "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-table1-part0.png",
          "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-table2-part0.png",
          "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-table4-part0.png",
          "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-table5-part0.png",
          "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-pre6-part0.png"
        ],
        "captures": [
          {
            "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-table0-part0.png",
            "index": 0,
            "tag": "TABLE",
            "columns": 3,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 320,
              "y": 1896.828125,
              "width": 796,
              "height": 351.296875
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-table1-part0.png",
            "index": 1,
            "tag": "TABLE",
            "columns": 4,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 320,
              "y": 2981.125,
              "width": 796,
              "height": 300.296875
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-table2-part0.png",
            "index": 2,
            "tag": "TABLE",
            "columns": 3,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 320,
              "y": 3487.921875,
              "width": 796,
              "height": 326.625
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-table4-part0.png",
            "index": 4,
            "tag": "TABLE",
            "columns": 3,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 320,
              "y": 6807.5,
              "width": 796,
              "height": 307.96875
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-table5-part0.png",
            "index": 5,
            "tag": "TABLE",
            "columns": 3,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 320,
              "y": 7393.96875,
              "width": 796,
              "height": 456.609375
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-pre6-part0.png",
            "index": 6,
            "tag": "PRE",
            "columns": 0,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 320,
              "y": 8113.078125,
              "width": 796,
              "height": 735.5
            }
          }
        ],
        "errors": []
      },
      {
        "route": "developer-thinking",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "title": "개발자처럼 문제를 나누는 법",
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "tables": [
          {
            "index": 0,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 7
          },
          {
            "index": 1,
            "cols": 4,
            "client": 358,
            "scroll": 512,
            "rows": 4
          },
          {
            "index": 2,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 4
          },
          {
            "index": 3,
            "cols": 2,
            "client": 358,
            "scroll": 358,
            "rows": 9
          },
          {
            "index": 4,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 6
          },
          {
            "index": 5,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 7
          },
          {
            "index": 6,
            "cols": 2,
            "client": 358,
            "scroll": 358,
            "rows": 13
          }
        ],
        "images": 0,
        "paths": [
          "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-top.png",
          "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table0-part0.png",
          "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table0-part1.png",
          "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table1-part0.png",
          "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table1-part1.png",
          "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table2-part0.png",
          "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table2-part1.png",
          "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table4-part0.png",
          "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table4-part1.png",
          "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table5-part0.png",
          "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table5-part1.png",
          "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-pre6-part0.png",
          "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-pre6-part1.png",
          "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-pre6-part2.png"
        ],
        "captures": [
          {
            "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table0-part0.png",
            "index": 0,
            "tag": "TABLE",
            "columns": 3,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 12,
              "y": 2889.75,
              "width": 366,
              "height": 772.546875
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table0-part1.png",
            "index": 0,
            "tag": "TABLE",
            "columns": 3,
            "requestedScroll": 26,
            "actualScroll": 26,
            "clip": {
              "x": 12,
              "y": 2889.75,
              "width": 366,
              "height": 772.546875
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table1-part0.png",
            "index": 1,
            "tag": "TABLE",
            "columns": 4,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 12,
              "y": 4880.484375,
              "width": 366,
              "height": 458.265625
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table1-part1.png",
            "index": 1,
            "tag": "TABLE",
            "columns": 4,
            "requestedScroll": 154,
            "actualScroll": 154,
            "clip": {
              "x": 12,
              "y": 4880.484375,
              "width": 366,
              "height": 458.265625
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table2-part0.png",
            "index": 2,
            "tag": "TABLE",
            "columns": 3,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 12,
              "y": 5703.84375,
              "width": 366,
              "height": 484.59375
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table2-part1.png",
            "index": 2,
            "tag": "TABLE",
            "columns": 3,
            "requestedScroll": 26,
            "actualScroll": 26,
            "clip": {
              "x": 12,
              "y": 5703.84375,
              "width": 366,
              "height": 484.59375
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table4-part0.png",
            "index": 4,
            "tag": "TABLE",
            "columns": 3,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 12,
              "y": 10721.984375,
              "width": 366,
              "height": 729.21875
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table4-part1.png",
            "index": 4,
            "tag": "TABLE",
            "columns": 3,
            "requestedScroll": 26,
            "actualScroll": 26,
            "clip": {
              "x": 12,
              "y": 10721.984375,
              "width": 366,
              "height": 729.21875
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table5-part0.png",
            "index": 5,
            "tag": "TABLE",
            "columns": 3,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 12,
              "y": 11916.296875,
              "width": 366,
              "height": 798.875
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table5-part1.png",
            "index": 5,
            "tag": "TABLE",
            "columns": 3,
            "requestedScroll": 26,
            "actualScroll": 26,
            "clip": {
              "x": 12,
              "y": 11916.296875,
              "width": 366,
              "height": 798.875
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-pre6-part0.png",
            "index": 6,
            "tag": "PRE",
            "columns": 0,
            "requestedScroll": 0,
            "actualScroll": 0,
            "clip": {
              "x": 12,
              "y": 13129.46875,
              "width": 366,
              "height": 751.5
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-pre6-part1.png",
            "index": 6,
            "tag": "PRE",
            "columns": 0,
            "requestedScroll": 356,
            "actualScroll": 356,
            "clip": {
              "x": 12,
              "y": 13129.46875,
              "width": 366,
              "height": 751.5
            }
          },
          {
            "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-pre6-part2.png",
            "index": 6,
            "tag": "PRE",
            "columns": 0,
            "requestedScroll": 413,
            "actualScroll": 413,
            "clip": {
              "x": 12,
              "y": 13129.46875,
              "width": 366,
              "height": 751.5
            }
          }
        ],
        "errors": []
      }
    ]
  },
  "images": [
    {
      "id": "R14-PNG-01",
      "order": 1,
      "path": "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-1440-light-top.png",
      "sha256": "a2629448295725aee983f53432e6ad5f7adcdf0398ccdb16a611c5b28ee121fb",
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
      "route": "abstraction-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R14-PNG-02",
      "order": 2,
      "path": "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-1440-light-table0-part0.png",
      "sha256": "c4f05f0d7f0837004286bb356f456c967a3a1c703cf2a6e420e68a6f8ae2f1de",
      "dimensions": {
        "width": 796,
        "height": 440
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "abstraction-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-1440-light-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 1214.328125,
            "width": 796,
            "height": 439.609375
          }
        }
      }
    },
    {
      "id": "R14-PNG-03",
      "order": 3,
      "path": "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-1440-light-pre4-part0.png",
      "sha256": "477a89393a2e0c3953385148ff1f14b71029c7776147f2a5ab82ba2e848e2f04",
      "dimensions": {
        "width": 796,
        "height": 319
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "abstraction-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-1440-light-pre4-part0.png",
          "index": 4,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 5575.609375,
            "width": 796,
            "height": 319
          }
        }
      }
    },
    {
      "id": "R14-PNG-04",
      "order": 4,
      "path": "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-390-dark-top.png",
      "sha256": "9416e303c10ee4154c8d4581bd64cb9d22aba4c032cc6e9918ecabb82c06bc01",
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
      "route": "abstraction-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R14-PNG-05",
      "order": 5,
      "path": "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-390-dark-table0-part0.png",
      "sha256": "aa7196012f7c39b7b4245e0dabcc058e0fac21447b60440d41cabc7c6560f32c",
      "dimensions": {
        "width": 366,
        "height": 624
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "abstraction-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-390-dark-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 1713.0625,
            "width": 366,
            "height": 623.90625
          }
        }
      }
    },
    {
      "id": "R14-PNG-06",
      "order": 6,
      "path": "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-390-dark-table0-part1.png",
      "sha256": "f12e6b28c53275a3c60284d8b519841ae701a445ae4f669a6879832f664c33fc",
      "dimensions": {
        "width": 366,
        "height": 624
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "abstraction-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-390-dark-table0-part1.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 154,
          "actualScroll": 154,
          "clip": {
            "x": 12,
            "y": 1713.0625,
            "width": 366,
            "height": 623.90625
          }
        }
      }
    },
    {
      "id": "R14-PNG-07",
      "order": 7,
      "path": "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-390-dark-pre4-part0.png",
      "sha256": "f922ebf4b76a79aadd963747b9baeba0849efb104fceb153e9a06723cd4256ad",
      "dimensions": {
        "width": 366,
        "height": 335
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "abstraction-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-390-dark-pre4-part0.png",
          "index": 4,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 8243.359375,
            "width": 366,
            "height": 335
          }
        }
      }
    },
    {
      "id": "R14-PNG-08",
      "order": 8,
      "path": "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-390-dark-pre4-part1.png",
      "sha256": "33becf42f5ed7b82be2970f5ae609dd872caf3dc9ddde5865786e97984a9bb02",
      "dimensions": {
        "width": 366,
        "height": 335
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "abstraction-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-pilot/abstraction-and-tradeoffs-390-dark-pre4-part1.png",
          "index": 4,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 255,
          "actualScroll": 255,
          "clip": {
            "x": 12,
            "y": 8243.359375,
            "width": 366,
            "height": 335
          }
        }
      }
    },
    {
      "id": "R14-PNG-09",
      "order": 9,
      "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-top.png",
      "sha256": "cc784c156ff7e57b97441423fd4cf043beaa972c6353c5b272717bece6fb2095",
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
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R14-PNG-10",
      "order": 10,
      "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-table0-part0.png",
      "sha256": "937c1c7e1d33ee9b30e77d12d079185d19b5a5c73649f27e715a4eaa47ff477e",
      "dimensions": {
        "width": 796,
        "height": 351
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 1896.828125,
            "width": 796,
            "height": 351.296875
          }
        }
      }
    },
    {
      "id": "R14-PNG-11",
      "order": 11,
      "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-table1-part0.png",
      "sha256": "d3937e0bf471f666ac1861f7f6263e9591694a7eb0f181dd14a43172f33c5be7",
      "dimensions": {
        "width": 796,
        "height": 300
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-table1-part0.png",
          "index": 1,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 2981.125,
            "width": 796,
            "height": 300.296875
          }
        }
      }
    },
    {
      "id": "R14-PNG-12",
      "order": 12,
      "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-table2-part0.png",
      "sha256": "e97c5c142f857f421fcdf7143949dbebdbb2fdce8dd16a33870d374f66fa261a",
      "dimensions": {
        "width": 796,
        "height": 327
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-table2-part0.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 3487.921875,
            "width": 796,
            "height": 326.625
          }
        }
      }
    },
    {
      "id": "R14-PNG-13",
      "order": 13,
      "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-table4-part0.png",
      "sha256": "5ae60f9e063bddbc3984cd6eeba2a08b7d33f89b053be1ed51ca0acbbd8ef3ce",
      "dimensions": {
        "width": 796,
        "height": 308
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-table4-part0.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 6807.5,
            "width": 796,
            "height": 307.96875
          }
        }
      }
    },
    {
      "id": "R14-PNG-14",
      "order": 14,
      "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-table5-part0.png",
      "sha256": "545a186e51cef5ff38201884ece54ff03ee41a06f0f079d311d800be6290d9d5",
      "dimensions": {
        "width": 796,
        "height": 457
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-table5-part0.png",
          "index": 5,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 7393.96875,
            "width": 796,
            "height": 456.609375
          }
        }
      }
    },
    {
      "id": "R14-PNG-15",
      "order": 15,
      "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-pre6-part0.png",
      "sha256": "99cf13a404cb8763e0c1517b09d76c9264e176979d2e2cc4b291082aa5a92d48",
      "dimensions": {
        "width": 796,
        "height": 736
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-1440-light-pre6-part0.png",
          "index": 6,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 8113.078125,
            "width": 796,
            "height": 735.5
          }
        }
      }
    },
    {
      "id": "R14-PNG-16",
      "order": 16,
      "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-top.png",
      "sha256": "57b8fe7f1497c4f78b51b9c5fc130d53784dee474fb7d0b249a742ae0c8312ae",
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
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R14-PNG-17",
      "order": 17,
      "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table0-part0.png",
      "sha256": "cfa5d59e513b2d06a9906931821d016fd16a8b72db37fbf511adf20a998def9a",
      "dimensions": {
        "width": 366,
        "height": 773
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 2889.75,
            "width": 366,
            "height": 772.546875
          }
        }
      }
    },
    {
      "id": "R14-PNG-18",
      "order": 18,
      "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table0-part1.png",
      "sha256": "1b1cb690764f07a9c687976a2eb366eab006b8ab8e1a438c79ede902f7b90a56",
      "dimensions": {
        "width": 366,
        "height": 773
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table0-part1.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "clip": {
            "x": 12,
            "y": 2889.75,
            "width": 366,
            "height": 772.546875
          }
        }
      }
    },
    {
      "id": "R14-PNG-19",
      "order": 19,
      "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table1-part0.png",
      "sha256": "fcb544da69b22765d7c216be85215ed2fefd9f52b3587a04d189c00c12580b10",
      "dimensions": {
        "width": 366,
        "height": 458
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table1-part0.png",
          "index": 1,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 4880.484375,
            "width": 366,
            "height": 458.265625
          }
        }
      }
    },
    {
      "id": "R14-PNG-20",
      "order": 20,
      "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table1-part1.png",
      "sha256": "a65592523816ddf9c9e7064e0a9069b6b3d9f83b38236b6cd0b69d40bb0c8f9e",
      "dimensions": {
        "width": 366,
        "height": 458
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table1-part1.png",
          "index": 1,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 154,
          "actualScroll": 154,
          "clip": {
            "x": 12,
            "y": 4880.484375,
            "width": 366,
            "height": 458.265625
          }
        }
      }
    },
    {
      "id": "R14-PNG-21",
      "order": 21,
      "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table2-part0.png",
      "sha256": "e7f5d0ed6fa93524b88715ec7d5c02cc3e0bdcc9882931d493a375dd707e50d4",
      "dimensions": {
        "width": 366,
        "height": 485
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table2-part0.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 5703.84375,
            "width": 366,
            "height": 484.59375
          }
        }
      }
    },
    {
      "id": "R14-PNG-22",
      "order": 22,
      "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table2-part1.png",
      "sha256": "5cf635e70711012304972048852bf9b515e1c1d37bef110d64883e9ab0c1e021",
      "dimensions": {
        "width": 366,
        "height": 485
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table2-part1.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "clip": {
            "x": 12,
            "y": 5703.84375,
            "width": 366,
            "height": 484.59375
          }
        }
      }
    },
    {
      "id": "R14-PNG-23",
      "order": 23,
      "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table4-part0.png",
      "sha256": "8eaee6775550d61b14529955afa95e8a0c85d60faf90fc96cac1af6bb4d6195a",
      "dimensions": {
        "width": 366,
        "height": 729
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table4-part0.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 10721.984375,
            "width": 366,
            "height": 729.21875
          }
        }
      }
    },
    {
      "id": "R14-PNG-24",
      "order": 24,
      "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table4-part1.png",
      "sha256": "16a5f5057ca971f52e7c190c3ef216640de824e49c01609c925ba6ed288ee48f",
      "dimensions": {
        "width": 366,
        "height": 729
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table4-part1.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "clip": {
            "x": 12,
            "y": 10721.984375,
            "width": 366,
            "height": 729.21875
          }
        }
      }
    },
    {
      "id": "R14-PNG-25",
      "order": 25,
      "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table5-part0.png",
      "sha256": "d3b9d96cb04be9508ba8274947b801b19af0b3aac98cb58d87e64d19b90ee9e5",
      "dimensions": {
        "width": 366,
        "height": 799
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table5-part0.png",
          "index": 5,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 11916.296875,
            "width": 366,
            "height": 798.875
          }
        }
      }
    },
    {
      "id": "R14-PNG-26",
      "order": 26,
      "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table5-part1.png",
      "sha256": "c328b4071bd3b2275d616f1e57a9d494a54e69c779b134dc8cfa08e461f7980c",
      "dimensions": {
        "width": 366,
        "height": 799
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-table5-part1.png",
          "index": 5,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "clip": {
            "x": 12,
            "y": 11916.296875,
            "width": 366,
            "height": 798.875
          }
        }
      }
    },
    {
      "id": "R14-PNG-27",
      "order": 27,
      "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-pre6-part0.png",
      "sha256": "96ac00d0db3e97b9618e582b5250ead39d05af194bed53ad79b37d25daa8a13b",
      "dimensions": {
        "width": 366,
        "height": 752
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-pre6-part0.png",
          "index": 6,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 13129.46875,
            "width": 366,
            "height": 751.5
          }
        }
      }
    },
    {
      "id": "R14-PNG-28",
      "order": 28,
      "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-pre6-part1.png",
      "sha256": "79d5c62b1384427883ec5789b7d58f0cbe6eed30d1b55133d0fd1383b6214290",
      "dimensions": {
        "width": 366,
        "height": 752
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-pre6-part1.png",
          "index": 6,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 356,
          "actualScroll": 356,
          "clip": {
            "x": 12,
            "y": 13129.46875,
            "width": 366,
            "height": 751.5
          }
        }
      }
    },
    {
      "id": "R14-PNG-29",
      "order": 29,
      "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-pre6-part2.png",
      "sha256": "0644d7fafce0a2efa87cfe24ef428b5c2f8114281ec7689f71c7b3aab4d1ba32",
      "dimensions": {
        "width": 366,
        "height": 752
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-pilot/developer-thinking-390-dark-pre6-part2.png",
          "index": 6,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 413,
          "actualScroll": 413,
          "clip": {
            "x": 12,
            "y": 13129.46875,
            "width": 366,
            "height": 751.5
          }
        }
      }
    },
    {
      "id": "R14-PNG-30",
      "order": 30,
      "path": "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-1440-dark-top.png",
      "sha256": "b71ed6f3eea9646eaa11718f35b790772f3cc9d6fc402450a86d09bda50a949b",
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
      "route": "abstraction-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R14-PNG-31",
      "order": 31,
      "path": "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-1440-dark-table0-part0.png",
      "sha256": "1c31fff1a08b49dfbf982aefbfb6abe39eb068c62aacb710e8110926ddabc775",
      "dimensions": {
        "width": 796,
        "height": 440
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "abstraction-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-1440-dark-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 1214.328125,
            "width": 796,
            "height": 439.609375
          }
        }
      }
    },
    {
      "id": "R14-PNG-32",
      "order": 32,
      "path": "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-1440-dark-pre4-part0.png",
      "sha256": "48cf63ffc56bfde9ceab8f5187e04efb4686f14b0e9505252b4ce6a5c56fcd5b",
      "dimensions": {
        "width": 796,
        "height": 319
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "abstraction-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-1440-dark-pre4-part0.png",
          "index": 4,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 5575.609375,
            "width": 796,
            "height": 319
          }
        }
      }
    },
    {
      "id": "R14-PNG-33",
      "order": 33,
      "path": "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-390-light-top.png",
      "sha256": "4aa3e4c7490ee38f3d0a71ad49caa10a02069c2f18c33fcfe22937974062bf1b",
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
      "route": "abstraction-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R14-PNG-34",
      "order": 34,
      "path": "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-390-light-table0-part0.png",
      "sha256": "85b7864abdfe3b82e7e355c3c3ac2aead7b6e4bae8df05c3a7a96da5a86136c3",
      "dimensions": {
        "width": 366,
        "height": 624
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "abstraction-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-390-light-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 1713.0625,
            "width": 366,
            "height": 623.90625
          }
        }
      }
    },
    {
      "id": "R14-PNG-35",
      "order": 35,
      "path": "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-390-light-table0-part1.png",
      "sha256": "389155784ef24df3d34306bb7f0751fbb0e71bc4ca6ee03fc90c12b45a49a5b8",
      "dimensions": {
        "width": 366,
        "height": 624
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "abstraction-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-390-light-table0-part1.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 154,
          "actualScroll": 154,
          "clip": {
            "x": 12,
            "y": 1713.0625,
            "width": 366,
            "height": 623.90625
          }
        }
      }
    },
    {
      "id": "R14-PNG-36",
      "order": 36,
      "path": "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-390-light-pre4-part0.png",
      "sha256": "e94671e4f9d91cf17344ab32a4b1d776ea3924e7af41b7e856729e85c00d6f36",
      "dimensions": {
        "width": 366,
        "height": 335
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "abstraction-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-390-light-pre4-part0.png",
          "index": 4,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 8243.359375,
            "width": 366,
            "height": 335
          }
        }
      }
    },
    {
      "id": "R14-PNG-37",
      "order": 37,
      "path": "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-390-light-pre4-part1.png",
      "sha256": "8bcf119621523e102fbd03f5ee9fa16f99f38caff78186c8532b3868d285714b",
      "dimensions": {
        "width": 366,
        "height": 335
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "abstraction-and-tradeoffs",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-remaining/abstraction-and-tradeoffs-390-light-pre4-part1.png",
          "index": 4,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 255,
          "actualScroll": 255,
          "clip": {
            "x": 12,
            "y": 8243.359375,
            "width": 366,
            "height": 335
          }
        }
      }
    },
    {
      "id": "R14-PNG-38",
      "order": 38,
      "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-top.png",
      "sha256": "3fd7f7e91945d9bc27e48a8174410c1d663f5db61834f6ae213243591c6fadb5",
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
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R14-PNG-39",
      "order": 39,
      "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-table0-part0.png",
      "sha256": "8589bd4b44458134185563c331e3e0c5ad035b35295506be3887726527b6d610",
      "dimensions": {
        "width": 796,
        "height": 351
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 1896.828125,
            "width": 796,
            "height": 351.296875
          }
        }
      }
    },
    {
      "id": "R14-PNG-40",
      "order": 40,
      "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-table1-part0.png",
      "sha256": "5dc6b7e17a98374baf230e1001517556ed670f9b21a86fda2f5a629593306427",
      "dimensions": {
        "width": 796,
        "height": 300
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-table1-part0.png",
          "index": 1,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 2981.125,
            "width": 796,
            "height": 300.296875
          }
        }
      }
    },
    {
      "id": "R14-PNG-41",
      "order": 41,
      "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-table2-part0.png",
      "sha256": "3226c526dde542efd9ec19095f70fb799ad27cb6bdecb66c333b68ee681b573f",
      "dimensions": {
        "width": 796,
        "height": 327
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-table2-part0.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 3487.921875,
            "width": 796,
            "height": 326.625
          }
        }
      }
    },
    {
      "id": "R14-PNG-42",
      "order": 42,
      "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-table4-part0.png",
      "sha256": "45d1f7ad424c65cfdfb4bf5159dd27e6acb80db73b560fa33e575ee7db49e10f",
      "dimensions": {
        "width": 796,
        "height": 308
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-table4-part0.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 6807.5,
            "width": 796,
            "height": 307.96875
          }
        }
      }
    },
    {
      "id": "R14-PNG-43",
      "order": 43,
      "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-table5-part0.png",
      "sha256": "19cd6b51b33cdfaf5e2c3a2c1a111a2a806b36e669725911fae191e5e75e7fa8",
      "dimensions": {
        "width": 796,
        "height": 457
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-table5-part0.png",
          "index": 5,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 7393.96875,
            "width": 796,
            "height": 456.609375
          }
        }
      }
    },
    {
      "id": "R14-PNG-44",
      "order": 44,
      "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-pre6-part0.png",
      "sha256": "dc089f4a1f2da3095ddeb55171e0a19abaf5ce6bfb3bbb4455c5cdb59c0052e8",
      "dimensions": {
        "width": 796,
        "height": 736
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-1440-dark-pre6-part0.png",
          "index": 6,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 8113.078125,
            "width": 796,
            "height": 735.5
          }
        }
      }
    },
    {
      "id": "R14-PNG-45",
      "order": 45,
      "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-top.png",
      "sha256": "88742a78e06bffa23cbd6b06fc4c34b3b264b23a2ba0af753070e0bad39e99b8",
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
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R14-PNG-46",
      "order": 46,
      "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table0-part0.png",
      "sha256": "28e142bd0f2135286164a0501d74c649e1365c15beffac44c28a7406a0f9954d",
      "dimensions": {
        "width": 366,
        "height": 773
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 2889.75,
            "width": 366,
            "height": 772.546875
          }
        }
      }
    },
    {
      "id": "R14-PNG-47",
      "order": 47,
      "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table0-part1.png",
      "sha256": "cfd0e0d21319d17afe3c604b57ea1ea9924fa58861aa6ced5d3859c30603baec",
      "dimensions": {
        "width": 366,
        "height": 773
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table0-part1.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "clip": {
            "x": 12,
            "y": 2889.75,
            "width": 366,
            "height": 772.546875
          }
        }
      }
    },
    {
      "id": "R14-PNG-48",
      "order": 48,
      "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table1-part0.png",
      "sha256": "64db8509fd03a50c896b046854e7717a6fe210e36b7a7bf8e0d475a512678f7f",
      "dimensions": {
        "width": 366,
        "height": 458
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table1-part0.png",
          "index": 1,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 4880.484375,
            "width": 366,
            "height": 458.265625
          }
        }
      }
    },
    {
      "id": "R14-PNG-49",
      "order": 49,
      "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table1-part1.png",
      "sha256": "7b78a804a2a5f0d43b4e01f9433dc46006405b2b6a94625810a71bb93424cf93",
      "dimensions": {
        "width": 366,
        "height": 458
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table1-part1.png",
          "index": 1,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 154,
          "actualScroll": 154,
          "clip": {
            "x": 12,
            "y": 4880.484375,
            "width": 366,
            "height": 458.265625
          }
        }
      }
    },
    {
      "id": "R14-PNG-50",
      "order": 50,
      "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table2-part0.png",
      "sha256": "10f6a0cd2a39e9657d8d213bc6100ab5d67eb023a8c515f09042a4e87936d141",
      "dimensions": {
        "width": 366,
        "height": 485
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table2-part0.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 5703.84375,
            "width": 366,
            "height": 484.59375
          }
        }
      }
    },
    {
      "id": "R14-PNG-51",
      "order": 51,
      "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table2-part1.png",
      "sha256": "ee1c5113549fb2a48ed3102574b877065edafce56eaa99f6c0b6c58c93376d0f",
      "dimensions": {
        "width": 366,
        "height": 485
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table2-part1.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "clip": {
            "x": 12,
            "y": 5703.84375,
            "width": 366,
            "height": 484.59375
          }
        }
      }
    },
    {
      "id": "R14-PNG-52",
      "order": 52,
      "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table4-part0.png",
      "sha256": "2f333e2dc8545bcdc6271189bdd959c253083726bab755e322c4d56bf98f6ad3",
      "dimensions": {
        "width": 366,
        "height": 729
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table4-part0.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 10721.984375,
            "width": 366,
            "height": 729.21875
          }
        }
      }
    },
    {
      "id": "R14-PNG-53",
      "order": 53,
      "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table4-part1.png",
      "sha256": "2b6d6ded9de9c1751076e0fc16503664254cb031ca855292179e87f9cf9ec894",
      "dimensions": {
        "width": 366,
        "height": 729
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table4-part1.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "clip": {
            "x": 12,
            "y": 10721.984375,
            "width": 366,
            "height": 729.21875
          }
        }
      }
    },
    {
      "id": "R14-PNG-54",
      "order": 54,
      "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table5-part0.png",
      "sha256": "d6065d98a86227233579e98ef91a34f63da7ff5c08a59a21ba718fd0cb9da183",
      "dimensions": {
        "width": 366,
        "height": 799
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table5-part0.png",
          "index": 5,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 11916.296875,
            "width": 366,
            "height": 798.875
          }
        }
      }
    },
    {
      "id": "R14-PNG-55",
      "order": 55,
      "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table5-part1.png",
      "sha256": "849524f71344dfdc751adab6dda8301498ed4fc1fee4a71644a3dfd23f99a47f",
      "dimensions": {
        "width": 366,
        "height": 799
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-table5-part1.png",
          "index": 5,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "clip": {
            "x": 12,
            "y": 11916.296875,
            "width": 366,
            "height": 798.875
          }
        }
      }
    },
    {
      "id": "R14-PNG-56",
      "order": 56,
      "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-pre6-part0.png",
      "sha256": "d453a40ed9b9c56e5f3f8ab25c0f9e230fe2b4e1bd708d6d3f1694184e27b9ba",
      "dimensions": {
        "width": 366,
        "height": 752
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-pre6-part0.png",
          "index": 6,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 13129.46875,
            "width": 366,
            "height": 751.5
          }
        }
      }
    },
    {
      "id": "R14-PNG-57",
      "order": 57,
      "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-pre6-part1.png",
      "sha256": "001d04540c41d81cda761edab5f7d4acd2d5d88f4087026390682d6004005610",
      "dimensions": {
        "width": 366,
        "height": 752
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-pre6-part1.png",
          "index": 6,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 356,
          "actualScroll": 356,
          "clip": {
            "x": 12,
            "y": 13129.46875,
            "width": 366,
            "height": 751.5
          }
        }
      }
    },
    {
      "id": "R14-PNG-58",
      "order": 58,
      "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-pre6-part2.png",
      "sha256": "3272e88d97e4df9d1fce0dd7d1c70bdc73fe4154203328ef3d4cc36bf40d5a4a",
      "dimensions": {
        "width": 366,
        "height": 752
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "developer-thinking",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r14-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r14-inputs-20261115-remaining/developer-thinking-390-light-pre6-part2.png",
          "index": 6,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 413,
          "actualScroll": 413,
          "clip": {
            "x": 12,
            "y": 13129.46875,
            "width": 366,
            "height": 751.5
          }
        }
      }
    }
  ]
}
```
<!-- m5-r14-request:data:end -->
