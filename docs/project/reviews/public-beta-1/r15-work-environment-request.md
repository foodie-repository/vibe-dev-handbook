# R15 작업 환경 — 고정 검토 요청

기준 commit f0ab25a00444bd5a58bbafb59ec6b75adb332c2e, 입력 고정2026-11-15. 세 대상 원고 전체와 full_text_paths 전체, context_excerpts의 명시 범위를 실제 읽습니다. 브리프·용어집·R01 발췌는 일관성 문맥이며 그 행의 전체 재검토가 아닙니다.

Controller·작성자·이전 대화와 분리된 fresh gpt-6-astra/high 저장 세션입니다. 공식 ChatGPT 구독 경로·실제 모델/effort·history0·readOnly/network false·도구/MCP 비활성을 실행에서 확인하고 같은 저장 ID의 실제 이력 복구로 후속 검토합니다. R02 승계 예외·API 키·추가 크레딧·전역 설정/인증 변경은 허용하지 않습니다.

공통 계약 C01~C12·한국어 여섯 절·원고별9항목18점·치명 기준을 적용하며 묶음 평균으로 미달을 숨기지 않습니다. 파일/경로/CWD/루트/생성물/Git 경계, 셸/프로세스/PID/포트/종료/권한, 매니페스트/잠금/런타임/환경격리/재현성의 정확성과 쉬운 설명을 대조하세요. 세 원고에는 소유 그림·SVG·Mermaid가 없어 그림 자체 정합성은 해당 없지만 표·코드·프롬프트는 실제 이미지로 검토합니다.

새 R15 직접 근거와 같은 실행의 R08 Git 근거를 제공합니다. 현재 Python 문서 표제3.14.10과 과거3.14.7, npm v11의 미표시 패치 버전, Apple 짧은 URL의 목차 반환/정확한 본문 대안, Stop-Process의 권한 배너와 실제 읽힌 절, IANA 미표시 갱신일을 구분하세요. git check-ignore -v의 부정 패턴 예외와 첫 용어 정의는 판정 질문이며 controller가 finding으로 확정한 것은 아닙니다. 과거 날짜·접근 실패를 현재 성공으로 소급하지 않습니다. 본문 전체 복제나 실제 설치/종료/OS UI 검증은 하지 않았습니다.

세 경로×1440/390×light/dark12상태의 실제PNG162개를 localImage/detail original로 전달합니다. 대표1440light/390dark를 먼저 생성하고 controller가 긴 제목·네 열 표·긴 프롬프트/좌우 스크롤의20개를 직접 읽은 뒤 반대테마로 확장했습니다. controller 대표 판독을162개 완독으로 계산하지 않습니다. Reviewer는162개 모두 실제 이미지 입력으로 읽고 ID별 관측과 판독 한계를 남겨야 합니다. 상단·3열 이상 표·코드/프롬프트의 가로 겹침 구간을 포함하며2열 표는 DOM 폭만 확인합니다. 일부이웃문단은crop밖이므로 전체페이지완독증거가 아니며 원고텍스트는별도로완독합니다. 각상태HTTP200/H1하나/초안/theme정상·이미지요소0·전역overflow/errors0, 내부스크롤은해당캡처의실제위치로연결합니다. 키보드·스크린리더·1024·전체사이트는새확인하지않았습니다.

입력 준비는 원고PASS/review/M5/ready/공개승인이 아닙니다. 도구·쓰기·셸·웹·MCP·위임 없이 결과만 반환하세요. 준비 검사기/테스트의 C/I/M와 체크포인트 적합성은 원고 판정과 구분하세요. 개인home절대경로·전체비공개세션ID를 출력하지 마세요. 최초 정상 결과는 수정 전에 별도 커밋하고 전송 후 불변성 감사를 수행합니다.

<!-- m5-r15-request:data:start -->
```json
{
  "schema_version": 1,
  "review_id": "R15",
  "baseline_commit": "f0ab25a00444bd5a58bbafb59ec6b75adb332c2e",
  "targets": [
    "src/content/docs/02-work-environment/dependencies-package-managers-environments.md",
    "src/content/docs/02-work-environment/files-folders-paths.md",
    "src/content/docs/02-work-environment/terminal-processes-ports.md"
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
    "src/content/docs/02-work-environment/dependencies-package-managers-environments.md",
    "src/content/docs/02-work-environment/files-folders-paths.md",
    "src/content/docs/02-work-environment/terminal-processes-ports.md",
    "research/public-beta-review-source-excerpts/r15-work-environment-2026-11-15.md",
    "research/public-beta-review-source-excerpts/r08-git-github-2026-11-15.md",
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
      "sha256": "f270d3109d4d1557dea69d33ae0c68231bcba06af2855b1faac3e2672999e988",
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
      "sha256": "860ab0ca893cba157736045650e6a7978b72a08a0431232017235393ef8e2fa2",
      "segments": [
        {
          "start_line": 233,
          "end_line": 242,
          "text": "| PB-021 소프트웨어 시스템 | https://developer.chrome.com/docs/devtools/network/, https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/ | 2026-08-13 직접 확인; Chrome과 Firefox의 현재 공식 개발자 도구 문서, 페이지 버전 미표시 | Chrome DevTools `Network` 패널과 Firefox 개발자 도구 `Network Monitor`의 현재 명칭 및 HTTP 요청 관찰 범위 | 한 브라우저의 명칭·위치·표시·기능을 다른 브라우저나 버전의 공통 규칙으로 확대하지 않음 |\n| PB-022 의존성·패키지 관리자·환경 | https://nodejs.org/en/about, https://docs.npmjs.com/about-npm | 2026-08-13 직접 확인; Node.js와 npm의 현재 공식 소개, 페이지 버전 미표시 | Node.js의 JavaScript 런타임 책임과 npm CLI의 패키지·의존성 버전 관리 책임을 구분하는 범위 | Node.js와 npm의 결합을 모든 언어·런타임·패키지 생태계의 동일 구조로 확대하지 않음 |\n| PB-022 의존성·패키지 관리자·환경 | https://docs.npmjs.com/cli/v11/configuring-npm/package-json, https://docs.npmjs.com/cli/v11/configuring-npm/package-lock-json, https://docs.npmjs.com/cli/v11/commands/npm-ci | 2026-08-13 직접 확인; npm CLI 11.19.0 Legacy 공식 문서 | `package.json`의 의존성 선언, `package-lock.json`의 해결된 의존성 트리와 설치 재현성, `npm ci`의 기존 잠금 파일 요구·불일치 오류·기존 `node_modules` 제거·선언 파일 비갱신 범위 | npm v11 문서의 파일명·설치·삭제·오류·쓰기 규칙을 다른 패키지 관리자나 다른 버전의 실행 증거로 확대하지 않음 |\n| PB-022 의존성·패키지 관리자·환경 | https://docs.python.org/3.14/library/venv.html | 2026-08-13 직접 확인; Python 3.14.7 표준 라이브러리 공식 문서 | 기반 Python 위의 격리된 패키지 환경과 재생성 가능한 비이식 환경이라는 범위 | `venv`를 운영체제·비밀·네트워크·외부 서비스 전체 격리나 npm과 같은 매니페스트·잠금 체계로 확대하지 않음 |\n| PB-023 글롭·경로명 확장 재확인 시도 | https://pubs.opengroup.org/onlinepubs/9799919799/utilities/V3_chap02.html, https://www.gnu.org/software/bash/manual/html_node/Filename-Expansion.html, https://www.gnu.org/software/bash/manual/html_node/Pattern-Matching.html | 2026-08-13 부분 확인; POSIX.1-2024와 GNU Bash Reference Manual의 공식 검색 색인에서 관련 절과 `*`·`?`·대괄호 패턴 설명을 확인했지만 본문 열기는 각각 HTTP 403과 timeout으로 실패 | 새 직접 적용 없음; 원고는 글롭을 셸·도구별 패턴이라는 좁은 안전 경계로만 설명하고 기존 2026-08-06 POSIX 경로·셸 출처를 유지 | 검색 색인 일부나 실패한 본문을 새로 직접 확인한 근거로 쓰지 않고, 일치 실패·숨김 파일·재귀·인용 동작을 보편 규칙으로 확대하지 않음 |\n| PB-024 터미널·프로세스·실행 상태 | https://pubs.opengroup.org/onlinepubs/9799919799/utilities/V3_chap02.html, https://pubs.opengroup.org/onlinepubs/9799919799/basedefs/V1_chap03.html | 2026-08-13 직접 확인; POSIX.1-2024 Issue 8, IEEE Std 1003.1-2024 공식 공개 문서 | 셸의 명령 해석·실행·대기·실행 환경·종료 상태와 전경·배경 작업, process·PID·process lifetime·process group·parent process·PPID의 정의 범위 | POSIX 셸의 job control·신호·종료 상태를 모든 운영체제·셸의 동일 구문이나 동작으로 확대하지 않고, PID·PPID 한 항목을 프로세스 소유권·안전한 종료 증거로 사용하지 않음 |\n| PB-024 터미널·프로세스·포트 | https://support.apple.com/guide/terminal/execute-commands-and-run-tools-apdb66b5242/mac, https://www.rfc-editor.org/info/rfc6335, https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml | 2026-08-13 직접 확인; Apple macOS Tahoe 26 Terminal User Guide, RFC 6335/BCP 165(2011-08), IANA Service Name and Transport Protocol Port Number Registry(2026-08-11 갱신) | Terminal의 대화형 명령·셸 사용과 Control-C가 신호를 보내 대부분의 명령을 종료하는 범위, 전송 프로토콜 안에서 세션·서비스를 구분하는 포트 번호와 공식 레지스트리 범위 | Control-C를 모든 프로그램의 정상 종료 보장으로, 등록 포트나 포트 번호를 실제 애플리케이션 정체·소유권·안전성·정상 동작 증거로 확대하지 않음 |\n| PB-024 Windows 포트 조회·프로세스 종료 | https://learn.microsoft.com/en-us/powershell/module/nettcpip/get-nettcpconnection?view=windowsserver2025-ps, https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/stop-process?view=powershell-7.5 | 2026-08-13 직접 확인; Windows Server 2025 PowerShell과 PowerShell 7.5 공식 문서 | TCP 연결의 로컬 주소·포트·상태·OwningProcess 조회와 이름·PID·프로세스 객체 기반 로컬 프로세스 종료, `-Confirm`·`-WhatIf` 및 의존 프로세스 영향 주의 범위 | Windows PowerShell의 속성·매개변수·권한·종료 동작을 다른 운영체제·셸·버전으로 확대하지 않고, 조회된 PID만으로 종료 허가나 사용자 영향 없음이 증명됐다고 간주하지 않음 |\n| PB-024 POSIX `ps`·`kill` 재확인 시도 | https://pubs.opengroup.org/onlinepubs/9799919799/utilities/ps.html, https://pubs.opengroup.org/onlinepubs/9799919799/utilities/kill.html | 2026-08-13 본문 접근 실패; HTTP 403 | 새 직접 적용 없음; 원고는 특정 `ps`·`kill` 구문을 제시하지 않고 위에서 직접 확인한 POSIX Shell Command Language·Definitions와 운영체제별 공식 도구 문서 범위만 적용 | 열리지 않은 본문이나 과거 판본의 검색 결과를 현행 명령 동작의 갱신 근거로 사용하지 않음 |\n"
        },
        {
          "start_line": 276,
          "end_line": 294,
          "text": "| `01-mental-models/software-is-a-system.md` | 저장소 내부 `research/meeting-webapp-case-brief.md`, `research/stock-dashboard-case-brief.md` | 2026-08-10 | 모임 참가의 역할·참가 관계·모집 상태·정원·권한·동시성과 교육용 주가 fixture의 원천/변환 버전·거래일·가격 기준·값/신선도 상태·재현성·갱신 복구 책임을 비교하는 범위. 실제 시장·상품·시세·추천·거래·실시간 데이터 주장의 근거로 사용하지 않음 |\n| `02-work-environment/dependencies-package-managers-environments.md` | https://nodejs.org/en/about, https://docs.npmjs.com/about-npm | 2026-08-13 | 런타임과 패키지 관리자의 서로 다른 책임을 보여 주는 Node.js·npm 생태계 예. 모든 언어의 공통 도구 구성을 뜻하지 않음 |\n| `02-work-environment/dependencies-package-managers-environments.md` | https://docs.npmjs.com/cli/v11/configuring-npm/package-json, https://docs.npmjs.com/cli/v11/configuring-npm/package-lock-json, https://docs.npmjs.com/cli/v11/commands/npm-ci | 2026-08-13 | npm CLI 11.19.0 Legacy에서 매니페스트 선언·해결된 잠금 트리·clean install 입력과 쓰기 경계를 구분하는 범위. 다른 패키지 관리자와 버전에 일반화하지 않음 |\n| `02-work-environment/dependencies-package-managers-environments.md` | https://docs.python.org/3.14/library/venv.html | 2026-08-13 | Python 3.14.7의 프로젝트별 패키지 격리, 재생성 가능성과 비이식성. 완전한 보안·운영 환경 격리로 일반화하지 않음 |\n| `02-work-environment/files-folders-paths.md` | 저장소 내부 `WORKSPACE_MAP.md`, `.gitignore`, `scripts/validate-content.mjs` | 2026-08-06 | 공개 원고·내부 문서·조사·생성 아티팩트의 실제 책임, Git 제외 범위와 콘텐츠 지도 동기화 방식 |\n| `02-work-environment/files-folders-paths.md` | https://pubs.opengroup.org/onlinepubs/9799919799/basedefs/V1_chap03.html | 2026-08-06 | POSIX.1-2024의 파일명·경로명·절대 경로·현재 작업 디렉터리 용어 범위 |\n| `02-work-environment/files-folders-paths.md` | https://pubs.opengroup.org/onlinepubs/9799919799/basedefs/V1_chap04.html#tag_04_16 | 2026-08-06 | POSIX 경로명 해석에서 절대·상대 기준, `.`·`..`, 심볼릭 링크와 동일 대상의 여러 경로 가능성 |\n| `02-work-environment/files-folders-paths.md` | https://pubs.opengroup.org/onlinepubs/9799919799/utilities/V3_chap02.html#tag_19_06_01 | 2026-08-06 | POSIX 셸의 틸드 확장과 `~`를 처리하는 해석 단계 |\n| `02-work-environment/files-folders-paths.md` | https://pubs.opengroup.org/onlinepubs/9799919799/utilities/V3_chap02.html, https://www.gnu.org/software/bash/manual/html_node/Filename-Expansion.html, https://www.gnu.org/software/bash/manual/html_node/Pattern-Matching.html | 2026-08-13 부분 확인·본문 접근 실패 | 공식 검색 색인에서 글롭의 대표 패턴 문자와 경로명 확장 절을 확인한 범위만 반영하고, 본문 직접 확인 실패를 위 Task 12 행에 보존함. 셸·도구별 일치 실패·숨김 파일·재귀·인용 동작은 확인된 보편 규칙으로 발행하지 않음 |\n| `02-work-environment/files-folders-paths.md` | https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file | 2026-08-06 | Win32 파일 API의 드라이브·UNC·완전한 경로·상대 경로 접두사와 파일명 규칙 |\n| `02-work-environment/files-folders-paths.md` | https://learn.microsoft.com/en-us/windows/wsl/case-sensitivity | 2026-08-06 | Windows의 일반적인 대소문자 동작과 NTFS 디렉터리·WSL에 따른 예외 |\n| `02-work-environment/files-folders-paths.md` | https://git-scm.com/docs/git-status, https://git-scm.com/docs/gitignore, https://git-scm.com/docs/git-check-ignore, https://git-scm.com/book/ko/v2 | 2026-08-06 | Git 작업 트리와 tracked·untracked·ignored, status·diff·staging이 보여 주는 상태, ignore 규칙과 판정 명령의 범위 |\n| `02-work-environment/files-folders-paths.md` | https://starlight.astro.build/guides/project-structure/ | 2026-08-06 | Starlight 콘텐츠 디렉터리의 Markdown이 공개 페이지로 빌드되는 프로젝트 구조 범위 |\n| `02-work-environment/files-folders-paths.md` | https://docs.astro.build/en/reference/configuration-reference/ | 2026-08-06 | Astro의 프로젝트 루트 상대 설정, `base`, 기본 `outDir`인 `dist/`, 기본 `cacheDir`인 `node_modules/.astro` 범위 |\n| `02-work-environment/files-folders-paths.md` | https://support.apple.com/en-au/guide/mac-help/mchlp2304/mac | 2026-08-06 | Finder의 파일 확장자 표시가 전체·개별 파일 설정에 따라 달라지는 범위 |\n| `02-work-environment/terminal-processes-ports.md` | https://pubs.opengroup.org/onlinepubs/9799919799/utilities/V3_chap02.html, https://pubs.opengroup.org/onlinepubs/9799919799/basedefs/V1_chap03.html | 2026-08-13 | 셸의 명령 해석·실행 환경·대기·종료 상태와 전경/배경 작업, process·PID·process group·PPID 정의. POSIX 구문을 모든 OS·셸에 일반화하거나 PID·PPID만으로 소유권·종료 허가를 판단하지 않음 |\n| `02-work-environment/terminal-processes-ports.md` | https://support.apple.com/guide/terminal/execute-commands-and-run-tools-apdb66b5242/mac, https://www.rfc-editor.org/info/rfc6335, https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml | 2026-08-13 | macOS Terminal의 명령·셸·Control-C 범위와 전송 프로토콜의 서비스 접근 대상을 구분하는 포트 범위. Control-C를 보편적인 정상 종료 보장으로, 포트 하나를 세션 전체·애플리케이션 정체·안전성 증거로 사용하지 않음 |\n| `02-work-environment/terminal-processes-ports.md` | https://learn.microsoft.com/en-us/powershell/module/nettcpip/get-nettcpconnection?view=windowsserver2025-ps, https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/stop-process?view=powershell-7.5 | 2026-08-13 | Windows PowerShell의 TCP 주소·포트·상태·OwningProcess 조회와 로컬 프로세스 종료·확인·영향 주의 범위. Windows 도구 구문을 다른 OS·셸로 확대하거나 조회된 PID를 종료 허가로 간주하지 않음 |\n| `03-full-stack/client-server-full-stack.md` | https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics | 2026-08-04 | 요구사항에서 설계·구현·테스트·운영까지 사용자 흐름의 책임과 증거를 연결하는 교육 범위 |"
        },
        {
          "start_line": 454,
          "end_line": 456,
          "text": "\n- `02-work-environment/files-folders-paths.md` (핵심 주장 확인됨, 제품별 잔여는 비출판): POSIX·Windows·Git·Astro·Starlight와 Finder 확장자 표시의 공개 핵심 범위는 위 장별 적용 기록의 직접 출처로 확인했습니다. 파일 시스템·Git 설정별 대소문자 전용 이름 변경의 노출 방식, 점으로 시작하는 이름의 탐색기별 기본 가시성, 동기화 폴더의 제품별 동작은 현재 원고의 보편 주장으로 발행하지 않는 선택·제품별 후보이며, 후속 채택 전에는 공식 자료를 확인하고 별도 gap으로 등록합니다.\n- `03-full-stack/client-server-full-stack.md` (`PBSG-022`, 2026-08-13 확인): RFC 9110·9111, OWASP AJAX·Authorization Cheat Sheet, Chrome DevTools Sources, Astro on-demand rendering, PostgreSQL 18의 트랜잭션·격리·제약을 위 장별 적용 기록에 연결했습니다. 이 자료는 client·server 역할, 브라우저에 전달된 배포 자산의 관찰 가능성, client-side 검증의 보안적 한계, HTTP 캐시 최신성, 정적·요청 시점 렌더링의 한 공식 예시, 인가·동시성·데이터 재조회 증거 범위를 직접 뒷받침합니다. 낙관적 UI·충돌·캐시 무효화의 단일 구현법이나 Astro·PostgreSQL의 제품 동작을 보편화하지 않으며, 2026-08-05 역사 검토는 현재 `draft`의 `reviewEvidence`로 재사용하지 않습니다."
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
          "start_line": 48,
          "end_line": 52,
          "text": "| PB-021 | `src/content/docs/01-mental-models/software-is-a-system.md` | core | 소프트웨어를 화면이 아닌 시스템으로 어떻게 보는가? | 구성요소·책임·경계·상태·흐름·품질로 설명한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 12; Task 20 resolved | 여섯 렌즈의 편집 틀 경계, 두 사례의 상태 변경/읽기·변환 책임, 네 성공 관점, HTTP 캐시·정적 전달·브라우저 도구의 직접 근거를 보강했습니다. analytics 그림의 390px 핵심·보조 레이블 판독성은 Task 20 `aa13701`과 실제 Chrome 12상태·Codex `PASS`로 교정됐습니다. |\n| PB-022 | `src/content/docs/02-work-environment/dependencies-package-managers-environments.md` | core | 의존성·패키지 관리자·잠금 파일·환경은 어떻게 다른가? | 설치 재현성과 환경 차이를 설명한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 12 | 런타임·의존성·패키지 관리자·매니페스트·잠금 파일·환경 격리·버전 드리프트, 비유 한계, 설치 승인, 생태계 차이, 실패 복구와 재현 검증을 보강하고 PBSG-001의 세 원고 전체 주장 묶음을 공식·1차 출처로 확인해 SOURCE를 닫았습니다. |\n| PB-023 | `src/content/docs/02-work-environment/files-folders-paths.md` | core | 파일·폴더·경로·프로젝트 경계를 어떻게 안전하게 구분하는가? | 경로 기준과 원본·생성물·비밀·Git 상태를 판별한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 12 | 전체 파일을 재감사해 기존 정의·경계·사례·복구·출처를 보존하고, 글롭·변수·명령 치환 뒤 최종 대상과 루트·심볼릭 링크·복구 가능성을 확인하는 파괴적 작업 안전 계약을 보강했습니다. 의미 변경에 따라 과거 검토 파일은 보존하되 현재 `reviewEvidence`를 제거하고 새 검토 전까지 draft로 내렸습니다. |\n| PB-024 | `src/content/docs/02-work-environment/terminal-processes-ports.md` | core | 터미널·명령·프로세스·포트는 어떻게 연결되는가? | 실행 위치와 프로세스·포트 실패를 구분한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 12 | 터미널·셸·명령·프로세스·PID·포트·환경 변수·전경/배경·종료 코드, 포트 충돌 진단·소유권 확인·활성 세션 보존·정상 종료·OS/셸 차이·`PPID=1` 금지선, 사례·실패 복구·AI 검토·체크리스트·연습을 공식·1차 출처와 함께 보강했습니다. |\n| PB-025 | `src/content/docs/03-full-stack/client-server-full-stack.md` | core | 사용자 행동이 클라이언트·서버·데이터를 어떻게 통과하는가? | 풀스택 책임과 요청 흐름을 추적한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 13; Task 20 resolved | Task 13에서 RFC·OWASP·Chrome·Astro·PostgreSQL 18로 PBSG-022를 닫았습니다. 모임 사례·실패 경계는 유지하며 full-stack 그림의 외부 서비스 topology·marker·390px 판독성은 Task 20 `6b4ac94`와 실제 Chrome 18상태·Codex `PASS`로 교정됐습니다. |"
        }
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "sha256": "31d8c4f5d0f70bb6ce2bb7755c7070777d8f5791682e36b9d949f584a5d55988",
      "segments": [
        {
          "start_line": 317,
          "end_line": 345,
          "text": "    },\n    {\n      \"id\": \"R14\",\n      \"slug\": \"mental-support\",\n      \"method\": \"소묶음\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/01-mental-models/abstraction-and-tradeoffs.md\", \"src/content/docs/01-mental-models/developer-thinking.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r14-mental-support-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r14-mental-support-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r14-mental-support-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r14-mental-support-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r14-mental-support-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r14-mental-support-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"32deccb055227898c87e76d7be27cc5face250fe6aaa50ab749a3631e8e2b6d6\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important1-minor2-resolved\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"09f891345a431a3ed684292e554597b743d872c4591cac5cde425e67b8a41dc2\",\"current_target_sha256\":\"39e01f64db9883c58de86b9fa22713fe092cab3e7e19a24cbbd65d1f42ea8126\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r14-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r14-mental-support-codex-rereview.md\",\"next_scope\":\"R15 pending; no M5/ready/public approval\",\"target_hashes\":[{\"path\":\"src/content/docs/01-mental-models/abstraction-and-tradeoffs.md\",\"reviewed_sha256\":\"09f891345a431a3ed684292e554597b743d872c4591cac5cde425e67b8a41dc2\",\"current_sha256\":\"39e01f64db9883c58de86b9fa22713fe092cab3e7e19a24cbbd65d1f42ea8126\"},{\"path\":\"src/content/docs/01-mental-models/developer-thinking.md\",\"reviewed_sha256\":\"1d012eb30e5cbcec3da87d2ab128bd363dbbd69b1d7b4bb980ad491bdc02a977\",\"current_sha256\":\"6fa248d88d051549a677e35d6ab2a3ab0b97d3b5435b04678cb6dace73fe1184\"}]}\n    },\n    {\n      \"id\": \"R15\",\n      \"slug\": \"work-environment\",\n      \"method\": \"소묶음\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/02-work-environment/dependencies-package-managers-environments.md\", \"src/content/docs/02-work-environment/files-folders-paths.md\", \"src/content/docs/02-work-environment/terminal-processes-ports.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r15-work-environment-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r15-work-environment-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r15-work-environment-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r15-work-environment-codex-rereview.md\"\n    },\n    {\n      \"id\": \"R16\",\n      \"slug\": \"data-support\",\n      \"method\": \"소묶음\",\n      \"implementation_state\": \"작성·구현 완료\","
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
    "manifest_path": "output/playwright/r15-inputs-20261115-pilot/observations.json",
    "manifest_sha256": "2bc3fcb2aefa656a544fc2c276ec224b8523b938aba089f35194f77dfdfa56ab",
    "additional_context_manifests": [
      {
        "path": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "sha256": "6b9e938bd7fe8c9cfcfc2875076f999cff9148a354723325c6062ffc03ff252f"
      }
    ],
    "input_files": [
      {
        "path": "src/content/docs/02-work-environment/dependencies-package-managers-environments.md",
        "sha256": "b92260cfe6b9ac455314689644600f6c4bb8f5efc7bfe89560c8cec9a9e569a1"
      },
      {
        "path": "src/content/docs/02-work-environment/files-folders-paths.md",
        "sha256": "dbe74fe4bced9d603629051081882627d8082bc225585323f4723cbf482b1227"
      },
      {
        "path": "src/content/docs/02-work-environment/terminal-processes-ports.md",
        "sha256": "f7d31d8190f962b886f21eb9854cb9d042520fc37fdef71d14dfb6f6550b125f"
      },
      {
        "path": "src/styles/custom.css",
        "sha256": "2236f2a8a9b30515cb641d48de7089d15590834766ada3f60de9f649ef36c137"
      }
    ],
    "states": [
      {
        "route": "dependencies-package-managers-environments",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "title": "의존성·패키지 관리자·환경",
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
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 8
          },
          {
            "index": 2,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 7
          }
        ],
        "images": 0,
        "errors": [],
        "image_count": 6
      },
      {
        "route": "dependencies-package-managers-environments",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "title": "의존성·패키지 관리자·환경",
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "tables": [
          {
            "index": 0,
            "cols": 4,
            "client": 358,
            "scroll": 526,
            "rows": 7
          },
          {
            "index": 1,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 8
          },
          {
            "index": 2,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 7
          }
        ],
        "images": 0,
        "errors": [],
        "image_count": 10
      },
      {
        "route": "files-folders-paths",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "title": "파일·폴더·경로",
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
            "cols": 3,
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
            "rows": 7
          },
          {
            "index": 4,
            "cols": 4,
            "client": 788,
            "scroll": 788,
            "rows": 5
          },
          {
            "index": 5,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 12
          },
          {
            "index": 6,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 5
          },
          {
            "index": 7,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 4
          },
          {
            "index": 8,
            "cols": 2,
            "client": 788,
            "scroll": 788,
            "rows": 9
          }
        ],
        "images": 0,
        "errors": [],
        "image_count": 17
      },
      {
        "route": "files-folders-paths",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "title": "파일·폴더·경로",
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
            "cols": 3,
            "client": 358,
            "scroll": 720,
            "rows": 4
          },
          {
            "index": 2,
            "cols": 3,
            "client": 358,
            "scroll": 521,
            "rows": 5
          },
          {
            "index": 3,
            "cols": 3,
            "client": 358,
            "scroll": 465,
            "rows": 7
          },
          {
            "index": 4,
            "cols": 4,
            "client": 358,
            "scroll": 685,
            "rows": 5
          },
          {
            "index": 5,
            "cols": 3,
            "client": 358,
            "scroll": 433,
            "rows": 12
          },
          {
            "index": 6,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 5
          },
          {
            "index": 7,
            "cols": 3,
            "client": 358,
            "scroll": 419,
            "rows": 4
          },
          {
            "index": 8,
            "cols": 2,
            "client": 358,
            "scroll": 358,
            "rows": 9
          }
        ],
        "images": 0,
        "errors": [],
        "image_count": 29
      },
      {
        "route": "terminal-processes-ports",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "title": "터미널·프로세스·포트",
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "tables": [
          {
            "index": 0,
            "cols": 4,
            "client": 788,
            "scroll": 788,
            "rows": 9
          },
          {
            "index": 1,
            "cols": 2,
            "client": 788,
            "scroll": 788,
            "rows": 7
          },
          {
            "index": 2,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 10
          },
          {
            "index": 3,
            "cols": 3,
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
        "route": "terminal-processes-ports",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "title": "터미널·프로세스·포트",
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "tables": [
          {
            "index": 0,
            "cols": 4,
            "client": 358,
            "scroll": 512,
            "rows": 9
          },
          {
            "index": 1,
            "cols": 2,
            "client": 358,
            "scroll": 358,
            "rows": 7
          },
          {
            "index": 2,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 10
          },
          {
            "index": 3,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 7
          }
        ],
        "images": 0,
        "errors": [],
        "image_count": 12
      },
      {
        "route": "dependencies-package-managers-environments",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "title": "의존성·패키지 관리자·환경",
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
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 8
          },
          {
            "index": 2,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 7
          }
        ],
        "images": 0,
        "errors": [],
        "image_count": 6
      },
      {
        "route": "dependencies-package-managers-environments",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "title": "의존성·패키지 관리자·환경",
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "tables": [
          {
            "index": 0,
            "cols": 4,
            "client": 358,
            "scroll": 526,
            "rows": 7
          },
          {
            "index": 1,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 8
          },
          {
            "index": 2,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 7
          }
        ],
        "images": 0,
        "errors": [],
        "image_count": 10
      },
      {
        "route": "files-folders-paths",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "title": "파일·폴더·경로",
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
            "cols": 3,
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
            "rows": 7
          },
          {
            "index": 4,
            "cols": 4,
            "client": 788,
            "scroll": 788,
            "rows": 5
          },
          {
            "index": 5,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 12
          },
          {
            "index": 6,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 5
          },
          {
            "index": 7,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 4
          },
          {
            "index": 8,
            "cols": 2,
            "client": 788,
            "scroll": 788,
            "rows": 9
          }
        ],
        "images": 0,
        "errors": [],
        "image_count": 17
      },
      {
        "route": "files-folders-paths",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "title": "파일·폴더·경로",
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
            "cols": 3,
            "client": 358,
            "scroll": 720,
            "rows": 4
          },
          {
            "index": 2,
            "cols": 3,
            "client": 358,
            "scroll": 521,
            "rows": 5
          },
          {
            "index": 3,
            "cols": 3,
            "client": 358,
            "scroll": 465,
            "rows": 7
          },
          {
            "index": 4,
            "cols": 4,
            "client": 358,
            "scroll": 685,
            "rows": 5
          },
          {
            "index": 5,
            "cols": 3,
            "client": 358,
            "scroll": 433,
            "rows": 12
          },
          {
            "index": 6,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 5
          },
          {
            "index": 7,
            "cols": 3,
            "client": 358,
            "scroll": 419,
            "rows": 4
          },
          {
            "index": 8,
            "cols": 2,
            "client": 358,
            "scroll": 358,
            "rows": 9
          }
        ],
        "images": 0,
        "errors": [],
        "image_count": 29
      },
      {
        "route": "terminal-processes-ports",
        "viewport": {
          "width": 1440,
          "height": 1000
        },
        "http": 200,
        "h1": 1,
        "title": "터미널·프로세스·포트",
        "badge": "검토용 초안",
        "theme": "dark",
        "overflow": false,
        "tables": [
          {
            "index": 0,
            "cols": 4,
            "client": 788,
            "scroll": 788,
            "rows": 9
          },
          {
            "index": 1,
            "cols": 2,
            "client": 788,
            "scroll": 788,
            "rows": 7
          },
          {
            "index": 2,
            "cols": 3,
            "client": 788,
            "scroll": 788,
            "rows": 10
          },
          {
            "index": 3,
            "cols": 3,
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
        "route": "terminal-processes-ports",
        "viewport": {
          "width": 390,
          "height": 844
        },
        "http": 200,
        "h1": 1,
        "title": "터미널·프로세스·포트",
        "badge": "검토용 초안",
        "theme": "light",
        "overflow": false,
        "tables": [
          {
            "index": 0,
            "cols": 4,
            "client": 358,
            "scroll": 512,
            "rows": 9
          },
          {
            "index": 1,
            "cols": 2,
            "client": 358,
            "scroll": 358,
            "rows": 7
          },
          {
            "index": 2,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 10
          },
          {
            "index": 3,
            "cols": 3,
            "client": 358,
            "scroll": 384,
            "rows": 7
          }
        ],
        "images": 0,
        "errors": [],
        "image_count": 12
      }
    ]
  },
  "images": [
    {
      "id": "R15-PNG-01",
      "order": 1,
      "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-1440-light-top.png",
      "sha256": "e026762b8f492a24e95e571ef8942b0ec7cf203aa02634cfe2ab4e6da02929cc",
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
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R15-PNG-02",
      "order": 2,
      "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-1440-light-table0-part0.png",
      "sha256": "9a994f3d5c28359cfeaec76ba15f3b1e42c95bd3b3d8383e3002c1554864bd98",
      "dimensions": {
        "width": 796,
        "height": 667
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-1440-light-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 725.328125,
            "width": 796,
            "height": 667.234375
          }
        }
      }
    },
    {
      "id": "R15-PNG-03",
      "order": 3,
      "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-1440-light-table1-part0.png",
      "sha256": "8d13b21a091f416902635b28d8ea94cf2d2d2fb02af57538bde977851dcd29b9",
      "dimensions": {
        "width": 796,
        "height": 579
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-1440-light-table1-part0.png",
          "index": 1,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 5406.34375,
            "width": 796,
            "height": 578.921875
          }
        }
      }
    },
    {
      "id": "R15-PNG-04",
      "order": 4,
      "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-1440-light-pre2-part0.png",
      "sha256": "76012c48737a6fd4975b84e87e5c1a72ffd25dfcbc187860957b11a33d6e788e",
      "dimensions": {
        "width": 796,
        "height": 335
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-1440-light-pre2-part0.png",
          "index": 2,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 6147.765625,
            "width": 796,
            "height": 335
          }
        }
      }
    },
    {
      "id": "R15-PNG-05",
      "order": 5,
      "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-1440-light-pre2-part1.png",
      "sha256": "b2c4189268f89981bbf80cee19c3043785812531ac75a53e9ce4c6ffbddbe73e",
      "dimensions": {
        "width": 796,
        "height": 335
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-1440-light-pre2-part1.png",
          "index": 2,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 110,
          "actualScroll": 110,
          "clip": {
            "x": 320,
            "y": 6147.765625,
            "width": 796,
            "height": 335
          }
        }
      }
    },
    {
      "id": "R15-PNG-06",
      "order": 6,
      "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-1440-light-table3-part0.png",
      "sha256": "47f56ece02ef461f22cb45135f774f28a05a360761cae74c264c49574efcc2ae",
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
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-1440-light-table3-part0.png",
          "index": 3,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 7183.765625,
            "width": 796,
            "height": 351.296875
          }
        }
      }
    },
    {
      "id": "R15-PNG-07",
      "order": 7,
      "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-390-dark-top.png",
      "sha256": "d07b34cf1de35fdd5d0f8931df2e1d784227d7f22ba10413bd8656999d3be6c9",
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
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R15-PNG-08",
      "order": 8,
      "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-390-dark-table0-part0.png",
      "sha256": "7149af943e51ca7f3a608c909c4d738df5c24a76ecca7a657de131569d41ee4e",
      "dimensions": {
        "width": 366,
        "height": 983
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-390-dark-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 1018.46875,
            "width": 366,
            "height": 983.171875
          }
        }
      }
    },
    {
      "id": "R15-PNG-09",
      "order": 9,
      "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-390-dark-table0-part1.png",
      "sha256": "a0f897627931931f5ef145ffb029093ac3e531e3fbaa4c738210b0e0aa517059",
      "dimensions": {
        "width": 366,
        "height": 983
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-390-dark-table0-part1.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 168,
          "actualScroll": 168,
          "clip": {
            "x": 12,
            "y": 1018.46875,
            "width": 366,
            "height": 983.171875
          }
        }
      }
    },
    {
      "id": "R15-PNG-10",
      "order": 10,
      "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-390-dark-table1-part0.png",
      "sha256": "afc8b9cee2db6ff6d0db152e468def5bb5e80a51535531f1e6224c1614619993",
      "dimensions": {
        "width": 366,
        "height": 1053
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-390-dark-table1-part0.png",
          "index": 1,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 7779.1875,
            "width": 366,
            "height": 1052.828125
          }
        }
      }
    },
    {
      "id": "R15-PNG-11",
      "order": 11,
      "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-390-dark-table1-part1.png",
      "sha256": "2cc2aa0291abafedd769e20d3d7b612ff5dd6811e75b2ce4a0cef31c9c90debf",
      "dimensions": {
        "width": 366,
        "height": 1053
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-390-dark-table1-part1.png",
          "index": 1,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "clip": {
            "x": 12,
            "y": 7779.1875,
            "width": 366,
            "height": 1052.828125
          }
        }
      }
    },
    {
      "id": "R15-PNG-12",
      "order": 12,
      "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-390-dark-pre2-part0.png",
      "sha256": "a195f7186f976a6a24bf80f38ba551ee9e9d9c35b94325566c13249b2e6da845",
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
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-390-dark-pre2-part0.png",
          "index": 2,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 9097.109375,
            "width": 366,
            "height": 335
          }
        }
      }
    },
    {
      "id": "R15-PNG-13",
      "order": 13,
      "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-390-dark-pre2-part1.png",
      "sha256": "ab7b7b6237aafcf9f5c4ae1cca87f617d501450f4e9866b233917ad144945107",
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
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-390-dark-pre2-part1.png",
          "index": 2,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 356,
          "actualScroll": 356,
          "clip": {
            "x": 12,
            "y": 9097.109375,
            "width": 366,
            "height": 335
          }
        }
      }
    },
    {
      "id": "R15-PNG-14",
      "order": 14,
      "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-390-dark-pre2-part2.png",
      "sha256": "1f5e3d320771edbe7e48e43871a1820ac736d5f151ec201f9a6a5aac8a9e4428",
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
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-390-dark-pre2-part2.png",
          "index": 2,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 540,
          "actualScroll": 540,
          "clip": {
            "x": 12,
            "y": 9097.109375,
            "width": 366,
            "height": 335
          }
        }
      }
    },
    {
      "id": "R15-PNG-15",
      "order": 15,
      "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-390-dark-table3-part0.png",
      "sha256": "c9ae21f3a0de7629f6370c7dfa878b1548c4881ad38313b641df42474d436cf0",
      "dimensions": {
        "width": 366,
        "height": 615
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-390-dark-table3-part0.png",
          "index": 3,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 10492.703125,
            "width": 366,
            "height": 614.578125
          }
        }
      }
    },
    {
      "id": "R15-PNG-16",
      "order": 16,
      "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-390-dark-table3-part1.png",
      "sha256": "43628517b3f7ce77d38357d84fd00258fda71732a1b588ea62e8ebab39f08ea4",
      "dimensions": {
        "width": 366,
        "height": 615
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/dependencies-package-managers-environments-390-dark-table3-part1.png",
          "index": 3,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "clip": {
            "x": 12,
            "y": 10492.703125,
            "width": 366,
            "height": 614.578125
          }
        }
      }
    },
    {
      "id": "R15-PNG-17",
      "order": 17,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-top.png",
      "sha256": "d518737c14ae6d34f8974849d92a94e97345ea8fb5823be81467566a06e6b09b",
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
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R15-PNG-18",
      "order": 18,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-table0-part0.png",
      "sha256": "41bdd8ce874b21dcaf6625d1fb722393127ee6dc86aa7596bf94a2b2d16afff4",
      "dimensions": {
        "width": 796,
        "height": 588
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 2499.125,
            "width": 796,
            "height": 588.25
          }
        }
      }
    },
    {
      "id": "R15-PNG-19",
      "order": 19,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-pre1-part0.png",
      "sha256": "fb6ae412a178469278ac5a1db8e8bff417ab645fc587a17ef52bfdeda4a6ad46",
      "dimensions": {
        "width": 796,
        "height": 99
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-pre1-part0.png",
          "index": 1,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 3444.171875,
            "width": 796,
            "height": 98.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-20",
      "order": 20,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-table2-part0.png",
      "sha256": "9528e5e549115cd0a0655cc67283d1e420268b07a34a50add278e55e4ce7dbba",
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
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-table2-part0.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 3760.96875,
            "width": 796,
            "height": 326.625
          }
        }
      }
    },
    {
      "id": "R15-PNG-21",
      "order": 21,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-table3-part0.png",
      "sha256": "ec62e27b404fa7e55f405b1310617c2d46c59e4557b44bf11cda11b78c931121",
      "dimensions": {
        "width": 796,
        "height": 344
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-table3-part0.png",
          "index": 3,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 4377.890625,
            "width": 796,
            "height": 343.625
          }
        }
      }
    },
    {
      "id": "R15-PNG-22",
      "order": 22,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-table4-part0.png",
      "sha256": "bc5ba12220a54edffee48d755f13aec91cdb68e3ab3896dfb72aea3e3667ed92",
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
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-table4-part0.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 5230.3125,
            "width": 796,
            "height": 456.609375
          }
        }
      }
    },
    {
      "id": "R15-PNG-23",
      "order": 23,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-pre5-part0.png",
      "sha256": "a5a5da2c2c2c19f0efd345e3a818f6d506ef5c07d894a0a8adeeb04a750c6aad",
      "dimensions": {
        "width": 796,
        "height": 540
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-pre5-part0.png",
          "index": 5,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 5921.421875,
            "width": 796,
            "height": 539.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-24",
      "order": 24,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-table6-part0.png",
      "sha256": "9aac03503d4d1cfadee1df4ce0379f5cee35fc15e577c0521e2ace51ead8f7f8",
      "dimensions": {
        "width": 796,
        "height": 581
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-table6-part0.png",
          "index": 6,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 6795.421875,
            "width": 796,
            "height": 580.578125
          }
        }
      }
    },
    {
      "id": "R15-PNG-25",
      "order": 25,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-pre7-part0.png",
      "sha256": "ab89db050f7d0c60fc81742cc786e46d63c049f0a62ddc09d76fa15c72f92ea1",
      "dimensions": {
        "width": 796,
        "height": 98
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-pre7-part0.png",
          "index": 7,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 8517.359375,
            "width": 796,
            "height": 97.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-26",
      "order": 26,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-pre8-part0.png",
      "sha256": "219a6d0a27e004336de2751cf1bf7a1d0b6f42473f84b5a685d1c9daebeb7573",
      "dimensions": {
        "width": 796,
        "height": 98
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-pre8-part0.png",
          "index": 8,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 8766.921875,
            "width": 796,
            "height": 97.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-27",
      "order": 27,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-pre9-part0.png",
      "sha256": "4b08da112baca668c6e10367c18d2f9a1a43c430e7b0b0363b32af04428894d1",
      "dimensions": {
        "width": 796,
        "height": 98
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-pre9-part0.png",
          "index": 9,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 9044.484375,
            "width": 796,
            "height": 97.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-28",
      "order": 28,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-pre10-part0.png",
      "sha256": "1620f3dfb043e41ff93e2301a4dcb3d6298983d201596eaa2ac6786536d9655c",
      "dimensions": {
        "width": 796,
        "height": 196
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-pre10-part0.png",
          "index": 10,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 9594.640625,
            "width": 796,
            "height": 195.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-29",
      "order": 29,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-table11-part0.png",
      "sha256": "af5c22c7b85f5c7d2f8b3775be6f4ff3698f68dfc3fe944b46ea2f0cae6f1dd6",
      "dimensions": {
        "width": 796,
        "height": 884
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-table11-part0.png",
          "index": 11,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 10717.234375,
            "width": 796,
            "height": 883.875
          }
        }
      }
    },
    {
      "id": "R15-PNG-30",
      "order": 30,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-pre12-part0.png",
      "sha256": "1cd73a565ababec204800c309a3d037d60033411c87b9a075b1ec231b9ad1c49",
      "dimensions": {
        "width": 796,
        "height": 335
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-pre12-part0.png",
          "index": 12,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 11779.609375,
            "width": 796,
            "height": 335
          }
        }
      }
    },
    {
      "id": "R15-PNG-31",
      "order": 31,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-pre12-part1.png",
      "sha256": "8b321a7a3f7d8724bf1d84d5aefd3c0c4fa2523d752dd0d2a62c2f160e36b32e",
      "dimensions": {
        "width": 796,
        "height": 335
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-pre12-part1.png",
          "index": 12,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 103,
          "actualScroll": 103,
          "clip": {
            "x": 320,
            "y": 11779.609375,
            "width": 796,
            "height": 335
          }
        }
      }
    },
    {
      "id": "R15-PNG-32",
      "order": 32,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-table13-part0.png",
      "sha256": "15fb06c29dbb9238709a20251c1d93dacce2fc91c8f972f51bde943b4b396517",
      "dimensions": {
        "width": 796,
        "height": 265
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-table13-part0.png",
          "index": 13,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 13592.90625,
            "width": 796,
            "height": 264.640625
          }
        }
      }
    },
    {
      "id": "R15-PNG-33",
      "order": 33,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-table14-part0.png",
      "sha256": "5d937545f0450b8b7a59b095a841fc4af71a2ca1a71fff2f1bd63643bdf5ea6d",
      "dimensions": {
        "width": 796,
        "height": 221
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-1440-light-table14-part0.png",
          "index": 14,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 13897.546875,
            "width": 796,
            "height": 221.3125
          }
        }
      }
    },
    {
      "id": "R15-PNG-34",
      "order": 34,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-top.png",
      "sha256": "08b43d92c7662e55ea97ee0ca059dbf4ad25b6b5d860e529206f2a5f5873b22e",
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
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R15-PNG-35",
      "order": 35,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table0-part0.png",
      "sha256": "e1290b0ee4b8130486caf7f3f50c948f8aa95c48de59959821c2ace966278719",
      "dimensions": {
        "width": 366,
        "height": 1246
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 3730.953125,
            "width": 366,
            "height": 1246.453125
          }
        }
      }
    },
    {
      "id": "R15-PNG-36",
      "order": 36,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table0-part1.png",
      "sha256": "31e4fe0a416cb27a559aa9f69e63158d5e0142229d870b1a1888caf632c05452",
      "dimensions": {
        "width": 366,
        "height": 1246
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table0-part1.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "clip": {
            "x": 12,
            "y": 3730.953125,
            "width": 366,
            "height": 1246.453125
          }
        }
      }
    },
    {
      "id": "R15-PNG-37",
      "order": 37,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-pre1-part0.png",
      "sha256": "668ddc9d79650a2719531adbb5271e1ed61f7529c547a559b749b63b6e82504e",
      "dimensions": {
        "width": 366,
        "height": 115
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-pre1-part0.png",
          "index": 1,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 5472.5,
            "width": 366,
            "height": 114.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-38",
      "order": 38,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-pre1-part1.png",
      "sha256": "a6a5f792e78128c55d223c6002610f26ee21928f9219b4605c25c0ce73625bc2",
      "dimensions": {
        "width": 366,
        "height": 115
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-pre1-part1.png",
          "index": 1,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 154,
          "actualScroll": 154,
          "clip": {
            "x": 12,
            "y": 5472.5,
            "width": 366,
            "height": 114.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-39",
      "order": 39,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table2-part0.png",
      "sha256": "71f5e1176f680c45ec9c8355f2b9da46ecd8c18915c07d0984d69750bd5cc242",
      "dimensions": {
        "width": 366,
        "height": 300
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table2-part0.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 5903.796875,
            "width": 366,
            "height": 300.296875
          }
        }
      }
    },
    {
      "id": "R15-PNG-40",
      "order": 40,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table2-part1.png",
      "sha256": "ffff37497deac55c56d58ead05d039618eae7ce8f4f93530d5aeea4ae3acc677",
      "dimensions": {
        "width": 366,
        "height": 300
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table2-part1.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 358,
          "actualScroll": 358,
          "clip": {
            "x": 12,
            "y": 5903.796875,
            "width": 366,
            "height": 300.296875
          }
        }
      }
    },
    {
      "id": "R15-PNG-41",
      "order": 41,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table2-part2.png",
      "sha256": "b3100a1fba029118fd36f4dadcba59a10c7fed760f656c94b8759060e7db36ad",
      "dimensions": {
        "width": 366,
        "height": 300
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table2-part2.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 362,
          "actualScroll": 362,
          "clip": {
            "x": 12,
            "y": 5903.796875,
            "width": 366,
            "height": 300.296875
          }
        }
      }
    },
    {
      "id": "R15-PNG-42",
      "order": 42,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table3-part0.png",
      "sha256": "308f63054a4777bed3a42e3654cb9bdeafe03dff03687bb825a14241176f3849",
      "dimensions": {
        "width": 366,
        "height": 554
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table3-part0.png",
          "index": 3,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 6733.6875,
            "width": 366,
            "height": 554.25
          }
        }
      }
    },
    {
      "id": "R15-PNG-43",
      "order": 43,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table3-part1.png",
      "sha256": "10e7ad114a28995e5065ef467c241541ca4bbf40cb907f43f0bedaa7c6eda75f",
      "dimensions": {
        "width": 366,
        "height": 554
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table3-part1.png",
          "index": 3,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 163,
          "actualScroll": 163,
          "clip": {
            "x": 12,
            "y": 6733.6875,
            "width": 366,
            "height": 554.25
          }
        }
      }
    },
    {
      "id": "R15-PNG-44",
      "order": 44,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table4-part0.png",
      "sha256": "ea15c001f88b81f1c7fb6de7973183f883d003de66f3dd4a89c8a2ce644f8e39",
      "dimensions": {
        "width": 366,
        "height": 746
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table4-part0.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 8193.828125,
            "width": 366,
            "height": 746.21875
          }
        }
      }
    },
    {
      "id": "R15-PNG-45",
      "order": 45,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table4-part1.png",
      "sha256": "b02d173d2eb1eb3afca62b0930f77eb2a5d59508995ca1e1dc5f462dcc67ba07",
      "dimensions": {
        "width": 366,
        "height": 746
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table4-part1.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 107,
          "actualScroll": 107,
          "clip": {
            "x": 12,
            "y": 8193.828125,
            "width": 366,
            "height": 746.21875
          }
        }
      }
    },
    {
      "id": "R15-PNG-46",
      "order": 46,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-pre5-part0.png",
      "sha256": "dfa5d608641d030cc8991b6ebf46868570a882e01478737a060e3abc1d059ee8",
      "dimensions": {
        "width": 366,
        "height": 556
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-pre5-part0.png",
          "index": 5,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 9361.140625,
            "width": 366,
            "height": 555.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-47",
      "order": 47,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-pre5-part1.png",
      "sha256": "b5d09f6fc9143c82af5d64e28a69e8e7473bc40d208818dfe9486e0a6bb23700",
      "dimensions": {
        "width": 366,
        "height": 556
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-pre5-part1.png",
          "index": 5,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 257,
          "actualScroll": 257,
          "clip": {
            "x": 12,
            "y": 9361.140625,
            "width": 366,
            "height": 555.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-48",
      "order": 48,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table6-part0.png",
      "sha256": "9477e3f149fcae4c72faa30ad896f6e036276efef8b5cf396abff7309b0868f6",
      "dimensions": {
        "width": 366,
        "height": 607
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table6-part0.png",
          "index": 6,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 10493.734375,
            "width": 366,
            "height": 606.90625
          }
        }
      }
    },
    {
      "id": "R15-PNG-49",
      "order": 49,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table6-part1.png",
      "sha256": "61e3a2ee396efa571f0ac70ffda549edf3e7157608f07d7e87749a23538228d5",
      "dimensions": {
        "width": 366,
        "height": 607
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table6-part1.png",
          "index": 6,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 327,
          "actualScroll": 327,
          "clip": {
            "x": 12,
            "y": 10493.734375,
            "width": 366,
            "height": 606.90625
          }
        }
      }
    },
    {
      "id": "R15-PNG-50",
      "order": 50,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-pre7-part0.png",
      "sha256": "963244df5678a13372e157bcad3268d094e497c79662d9949623dc87a16a04df",
      "dimensions": {
        "width": 366,
        "height": 98
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-pre7-part0.png",
          "index": 7,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 12889.78125,
            "width": 366,
            "height": 97.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-51",
      "order": 51,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-pre8-part0.png",
      "sha256": "00d90046dca31c5e69b48ba9eeca120b6ed31f1e05c7ab7d1dc3bc68f3aed62f",
      "dimensions": {
        "width": 366,
        "height": 98
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-pre8-part0.png",
          "index": 8,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 13182.640625,
            "width": 366,
            "height": 97.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-52",
      "order": 52,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-pre9-part0.png",
      "sha256": "dca9e9b96e41cb58a98ad06045ec029c45bbedb03e7ecd0a36fd85204a227e23",
      "dimensions": {
        "width": 366,
        "height": 98
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-pre9-part0.png",
          "index": 9,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 13502.703125,
            "width": 366,
            "height": 97.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-53",
      "order": 53,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-pre10-part0.png",
      "sha256": "db61ff2ec33949cb8f4d4981cd8e99ae3db368e694813ef953865c9e17d15999",
      "dimensions": {
        "width": 366,
        "height": 196
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-pre10-part0.png",
          "index": 10,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 14238.75,
            "width": 366,
            "height": 195.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-54",
      "order": 54,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table11-part0.png",
      "sha256": "de9498a00d1220c1a206af306e0f57849136dcaf7b4617d78ea0fbaa0b1606b1",
      "dimensions": {
        "width": 366,
        "height": 1516
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table11-part0.png",
          "index": 11,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 16047.734375,
            "width": 366,
            "height": 1515.75
          }
        }
      }
    },
    {
      "id": "R15-PNG-55",
      "order": 55,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table11-part1.png",
      "sha256": "cc1add494576745552bc30da57739f21d2b6b90932eb63d6e706a46bd3380f99",
      "dimensions": {
        "width": 366,
        "height": 1516
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table11-part1.png",
          "index": 11,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 75,
          "actualScroll": 75,
          "clip": {
            "x": 12,
            "y": 16047.734375,
            "width": 366,
            "height": 1515.75
          }
        }
      }
    },
    {
      "id": "R15-PNG-56",
      "order": 56,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-pre12-part0.png",
      "sha256": "2ca8a7a82657015cddf2916cf92dec989e46376df4196edc14eba589bd0b69fb",
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
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-pre12-part0.png",
          "index": 12,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 17844.578125,
            "width": 366,
            "height": 335
          }
        }
      }
    },
    {
      "id": "R15-PNG-57",
      "order": 57,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-pre12-part1.png",
      "sha256": "cd2f6dcca8fd686fad34ee1c260982048f1275caa089d6d5a8d15b091757711a",
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
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-pre12-part1.png",
          "index": 12,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 356,
          "actualScroll": 356,
          "clip": {
            "x": 12,
            "y": 17844.578125,
            "width": 366,
            "height": 335
          }
        }
      }
    },
    {
      "id": "R15-PNG-58",
      "order": 58,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-pre12-part2.png",
      "sha256": "8a6cb791717c7d91e1c31dca44817250fa5ea3e7c6e533ededbc1d8e03ddf2b5",
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
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-pre12-part2.png",
          "index": 12,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 533,
          "actualScroll": 533,
          "clip": {
            "x": 12,
            "y": 17844.578125,
            "width": 366,
            "height": 335
          }
        }
      }
    },
    {
      "id": "R15-PNG-59",
      "order": 59,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table13-part0.png",
      "sha256": "e7b60f6e36f272fad23e24e0c4694fa3cf5a2c6cee7847990d990a3bd8636c8e",
      "dimensions": {
        "width": 366,
        "height": 396
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table13-part0.png",
          "index": 13,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 20639.265625,
            "width": 366,
            "height": 396.28125
          }
        }
      }
    },
    {
      "id": "R15-PNG-60",
      "order": 60,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table13-part1.png",
      "sha256": "83aad6031289e134e5eb40df1383a34dc46758330a61b1d5fcb8ba359395ec34",
      "dimensions": {
        "width": 366,
        "height": 396
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table13-part1.png",
          "index": 13,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "clip": {
            "x": 12,
            "y": 20639.265625,
            "width": 366,
            "height": 396.28125
          }
        }
      }
    },
    {
      "id": "R15-PNG-61",
      "order": 61,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table14-part0.png",
      "sha256": "04782ef860d81cbd35debeb88028163f08f68748bbbfa6f68a4d988bc026389d",
      "dimensions": {
        "width": 366,
        "height": 379
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table14-part0.png",
          "index": 14,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 21131.546875,
            "width": 366,
            "height": 379.28125
          }
        }
      }
    },
    {
      "id": "R15-PNG-62",
      "order": 62,
      "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table14-part1.png",
      "sha256": "6a857ac826bcb92a23f328262bf3afe09585bbe10445a0840ca0ee3ae7cf2b0f",
      "dimensions": {
        "width": 366,
        "height": 379
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/files-folders-paths-390-dark-table14-part1.png",
          "index": 14,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 61,
          "actualScroll": 61,
          "clip": {
            "x": 12,
            "y": 21131.546875,
            "width": 366,
            "height": 379.28125
          }
        }
      }
    },
    {
      "id": "R15-PNG-63",
      "order": 63,
      "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-1440-light-top.png",
      "sha256": "98e98c253850be754b5a8b29d2584b97219c512eb6c158a1f7b057708c0e9900",
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
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R15-PNG-64",
      "order": 64,
      "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-1440-light-table0-part0.png",
      "sha256": "0daa6b9d5d367cf08ea354cc4e8fbd76c3d3dfc2d9beb63a3455c39cb0efd232",
      "dimensions": {
        "width": 796,
        "height": 728
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-1440-light-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 681.328125,
            "width": 796,
            "height": 727.5625
          }
        }
      }
    },
    {
      "id": "R15-PNG-65",
      "order": 65,
      "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-1440-light-pre2-part0.png",
      "sha256": "0d941153d997a760740a437da7fc52e4e668e67ea5653881bb36d860ab75fa4c",
      "dimensions": {
        "width": 796,
        "height": 122
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-1440-light-pre2-part0.png",
          "index": 2,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 4492.34375,
            "width": 796,
            "height": 122
          }
        }
      }
    },
    {
      "id": "R15-PNG-66",
      "order": 66,
      "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-1440-light-table3-part0.png",
      "sha256": "01d28bdc60ed4aad7aa93c889b0b64d791d90540ff01ce18d96b4a08740ef984",
      "dimensions": {
        "width": 796,
        "height": 718
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-1440-light-table3-part0.png",
          "index": 3,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 6751.03125,
            "width": 796,
            "height": 718.234375
          }
        }
      }
    },
    {
      "id": "R15-PNG-67",
      "order": 67,
      "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-1440-light-pre4-part0.png",
      "sha256": "f875168a6d849920522c7435f1d0fe990b11895203d8bb4ffef2d29bf7583f8e",
      "dimensions": {
        "width": 796,
        "height": 384
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-1440-light-pre4-part0.png",
          "index": 4,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 7531.765625,
            "width": 796,
            "height": 384
          }
        }
      }
    },
    {
      "id": "R15-PNG-68",
      "order": 68,
      "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-1440-light-pre4-part1.png",
      "sha256": "911df727d675f2b8c04151f78aa74c4570144d17cb70748f69fa425b05e5b788",
      "dimensions": {
        "width": 796,
        "height": 384
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-1440-light-pre4-part1.png",
          "index": 4,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 35,
          "actualScroll": 35,
          "clip": {
            "x": 320,
            "y": 7531.765625,
            "width": 796,
            "height": 384
          }
        }
      }
    },
    {
      "id": "R15-PNG-69",
      "order": 69,
      "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-1440-light-table5-part0.png",
      "sha256": "57b62b1e6dc0b60dc9ebcea010d230270f2d8fc96841eb17c98f02034a91cd24",
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
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-1440-light-table5-part0.png",
          "index": 5,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 9287.265625,
            "width": 796,
            "height": 351.296875
          }
        }
      }
    },
    {
      "id": "R15-PNG-70",
      "order": 70,
      "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-390-dark-top.png",
      "sha256": "83c356d70ab63648136b0470a477b3699bb12da572b0b7ec303717926ce5d6c6",
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
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R15-PNG-71",
      "order": 71,
      "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-390-dark-table0-part0.png",
      "sha256": "178161afbeb42f24e43708656f289d94b053b1a000ab75609592d1edd4938aec",
      "dimensions": {
        "width": 366,
        "height": 1122
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-390-dark-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 932.46875,
            "width": 366,
            "height": 1122.484375
          }
        }
      }
    },
    {
      "id": "R15-PNG-72",
      "order": 72,
      "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-390-dark-table0-part1.png",
      "sha256": "b1f949f6e517daf237e7d940d2161f6b27e4b641862f442f1e0aa4eb59697703",
      "dimensions": {
        "width": 366,
        "height": 1122
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-390-dark-table0-part1.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 154,
          "actualScroll": 154,
          "clip": {
            "x": 12,
            "y": 932.46875,
            "width": 366,
            "height": 1122.484375
          }
        }
      }
    },
    {
      "id": "R15-PNG-73",
      "order": 73,
      "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-390-dark-pre2-part0.png",
      "sha256": "1e415fdd231a56128253ae0de5968a5541266fbee986d57220ff8d72b775ebf9",
      "dimensions": {
        "width": 366,
        "height": 138
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-390-dark-pre2-part0.png",
          "index": 2,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 6808.6875,
            "width": 366,
            "height": 138
          }
        }
      }
    },
    {
      "id": "R15-PNG-74",
      "order": 74,
      "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-390-dark-pre2-part1.png",
      "sha256": "62ae07a1e65ae89565174e1a4a6e5472f5097868727823b694dfa1126a8ed37f",
      "dimensions": {
        "width": 366,
        "height": 138
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-390-dark-pre2-part1.png",
          "index": 2,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 11,
          "actualScroll": 11,
          "clip": {
            "x": 12,
            "y": 6808.6875,
            "width": 366,
            "height": 138
          }
        }
      }
    },
    {
      "id": "R15-PNG-75",
      "order": 75,
      "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-390-dark-table3-part0.png",
      "sha256": "2cd0cd9acdaeb8a2acb172ae7a0c46b987eb2a4094b102d8b0dc67c7b7d04133",
      "dimensions": {
        "width": 366,
        "height": 1218
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-390-dark-table3-part0.png",
          "index": 3,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 10229.546875,
            "width": 366,
            "height": 1218.46875
          }
        }
      }
    },
    {
      "id": "R15-PNG-76",
      "order": 76,
      "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-390-dark-table3-part1.png",
      "sha256": "bd2527ff6e0e9106dff664e6706ea2a1c00deaad920b93f690d89f7f449588cc",
      "dimensions": {
        "width": 366,
        "height": 1218
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-390-dark-table3-part1.png",
          "index": 3,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "clip": {
            "x": 12,
            "y": 10229.546875,
            "width": 366,
            "height": 1218.46875
          }
        }
      }
    },
    {
      "id": "R15-PNG-77",
      "order": 77,
      "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-390-dark-pre4-part0.png",
      "sha256": "e85367f2655b8a960b00bad6464b990864f7699b5b1e7b46997106716c673a33",
      "dimensions": {
        "width": 366,
        "height": 384
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-390-dark-pre4-part0.png",
          "index": 4,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 11529.109375,
            "width": 366,
            "height": 384
          }
        }
      }
    },
    {
      "id": "R15-PNG-78",
      "order": 78,
      "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-390-dark-pre4-part1.png",
      "sha256": "fa6c644eb35849a54adb92ed34259fbb447c3748eb9dfbb56259e1cfc98c02a2",
      "dimensions": {
        "width": 366,
        "height": 384
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-390-dark-pre4-part1.png",
          "index": 4,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 356,
          "actualScroll": 356,
          "clip": {
            "x": 12,
            "y": 11529.109375,
            "width": 366,
            "height": 384
          }
        }
      }
    },
    {
      "id": "R15-PNG-79",
      "order": 79,
      "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-390-dark-pre4-part2.png",
      "sha256": "959ffddb9dad810e37ae8c753deb2889539cb115c3704c17416e77ecc1049854",
      "dimensions": {
        "width": 366,
        "height": 384
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-390-dark-pre4-part2.png",
          "index": 4,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 465,
          "actualScroll": 465,
          "clip": {
            "x": 12,
            "y": 11529.109375,
            "width": 366,
            "height": 384
          }
        }
      }
    },
    {
      "id": "R15-PNG-80",
      "order": 80,
      "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-390-dark-table5-part0.png",
      "sha256": "cce2f41603aa14ab6ca091d858c5514cf8836bb1c33399c6f969751edf06452b",
      "dimensions": {
        "width": 366,
        "height": 694
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-390-dark-table5-part0.png",
          "index": 5,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 14048,
            "width": 366,
            "height": 693.5625
          }
        }
      }
    },
    {
      "id": "R15-PNG-81",
      "order": 81,
      "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-390-dark-table5-part1.png",
      "sha256": "3de259be139bdcaec4c919b62c3b051079bb25c56f04b5790f56450d39bbbe7b",
      "dimensions": {
        "width": 366,
        "height": 694
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-pilot/terminal-processes-ports-390-dark-table5-part1.png",
          "index": 5,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "clip": {
            "x": 12,
            "y": 14048,
            "width": 366,
            "height": 693.5625
          }
        }
      }
    },
    {
      "id": "R15-PNG-82",
      "order": 82,
      "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-1440-dark-top.png",
      "sha256": "5a430ffd20110793d232472daf9d976f06c443e96e0f4fae4d6f7cea49f33f4d",
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
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R15-PNG-83",
      "order": 83,
      "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-1440-dark-table0-part0.png",
      "sha256": "59fa3b727201deda090a003f86f661195eecf05b9b54be31e1cf7ede1c82b8ab",
      "dimensions": {
        "width": 796,
        "height": 667
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-1440-dark-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 725.328125,
            "width": 796,
            "height": 667.234375
          }
        }
      }
    },
    {
      "id": "R15-PNG-84",
      "order": 84,
      "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-1440-dark-table1-part0.png",
      "sha256": "f0176e035e1ce773ab863fa331ac0c64ae691f86e94874457a0b69c9e01cb148",
      "dimensions": {
        "width": 796,
        "height": 579
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-1440-dark-table1-part0.png",
          "index": 1,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 5406.34375,
            "width": 796,
            "height": 578.921875
          }
        }
      }
    },
    {
      "id": "R15-PNG-85",
      "order": 85,
      "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-1440-dark-pre2-part0.png",
      "sha256": "be48a7cfabb2ba0e62b5319afe2a74f91bf972ad64a741b548a01fbc33915eb2",
      "dimensions": {
        "width": 796,
        "height": 335
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-1440-dark-pre2-part0.png",
          "index": 2,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 6147.765625,
            "width": 796,
            "height": 335
          }
        }
      }
    },
    {
      "id": "R15-PNG-86",
      "order": 86,
      "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-1440-dark-pre2-part1.png",
      "sha256": "32702496ea208cde950a06af91816dc2db73a320786800052d47f90023bf7001",
      "dimensions": {
        "width": 796,
        "height": 335
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-1440-dark-pre2-part1.png",
          "index": 2,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 110,
          "actualScroll": 110,
          "clip": {
            "x": 320,
            "y": 6147.765625,
            "width": 796,
            "height": 335
          }
        }
      }
    },
    {
      "id": "R15-PNG-87",
      "order": 87,
      "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-1440-dark-table3-part0.png",
      "sha256": "c6f750353e8f4aec19268245250af7467d8e09551d30776362460d4cd3a32b3b",
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
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-1440-dark-table3-part0.png",
          "index": 3,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 7183.765625,
            "width": 796,
            "height": 351.296875
          }
        }
      }
    },
    {
      "id": "R15-PNG-88",
      "order": 88,
      "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-390-light-top.png",
      "sha256": "535f0a743cf752b2a4877047482b3da7039e4cbe01913d85f79a050d9ef3e45d",
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
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R15-PNG-89",
      "order": 89,
      "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-390-light-table0-part0.png",
      "sha256": "df0cd9124b31064d42c63679d157ef39e8a906b9ac015cff4bbe5fdf510f30cb",
      "dimensions": {
        "width": 366,
        "height": 983
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-390-light-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 1018.46875,
            "width": 366,
            "height": 983.171875
          }
        }
      }
    },
    {
      "id": "R15-PNG-90",
      "order": 90,
      "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-390-light-table0-part1.png",
      "sha256": "ba36f0d6122c976da4ce20736f5919cd77fdea87fafec2e5b665fe2d20aec352",
      "dimensions": {
        "width": 366,
        "height": 983
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-390-light-table0-part1.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 168,
          "actualScroll": 168,
          "clip": {
            "x": 12,
            "y": 1018.46875,
            "width": 366,
            "height": 983.171875
          }
        }
      }
    },
    {
      "id": "R15-PNG-91",
      "order": 91,
      "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-390-light-table1-part0.png",
      "sha256": "4c417f8af3824eb66f20668c9ea5cb574733efb72da8e260141ce11f7f49f3a4",
      "dimensions": {
        "width": 366,
        "height": 1053
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-390-light-table1-part0.png",
          "index": 1,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 7779.1875,
            "width": 366,
            "height": 1052.828125
          }
        }
      }
    },
    {
      "id": "R15-PNG-92",
      "order": 92,
      "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-390-light-table1-part1.png",
      "sha256": "b5c881611dcb25cab7286a77597a67508332682d0712a094d506368747d3aa3c",
      "dimensions": {
        "width": 366,
        "height": 1053
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-390-light-table1-part1.png",
          "index": 1,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "clip": {
            "x": 12,
            "y": 7779.1875,
            "width": 366,
            "height": 1052.828125
          }
        }
      }
    },
    {
      "id": "R15-PNG-93",
      "order": 93,
      "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-390-light-pre2-part0.png",
      "sha256": "994196201aae5649afbc9660f4f4bde0e60f2b9c6af930e263626291ea97a77e",
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
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-390-light-pre2-part0.png",
          "index": 2,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 9097.109375,
            "width": 366,
            "height": 335
          }
        }
      }
    },
    {
      "id": "R15-PNG-94",
      "order": 94,
      "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-390-light-pre2-part1.png",
      "sha256": "918817902a4bb10b8e091c6346a2bef3b607331b286b944b7491683019354bb3",
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
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-390-light-pre2-part1.png",
          "index": 2,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 356,
          "actualScroll": 356,
          "clip": {
            "x": 12,
            "y": 9097.109375,
            "width": 366,
            "height": 335
          }
        }
      }
    },
    {
      "id": "R15-PNG-95",
      "order": 95,
      "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-390-light-pre2-part2.png",
      "sha256": "c3dfa2d4e578be44a704e68528a1bf048b7e7e7ddf7f33ad7bf782151a68ccca",
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
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-390-light-pre2-part2.png",
          "index": 2,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 540,
          "actualScroll": 540,
          "clip": {
            "x": 12,
            "y": 9097.109375,
            "width": 366,
            "height": 335
          }
        }
      }
    },
    {
      "id": "R15-PNG-96",
      "order": 96,
      "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-390-light-table3-part0.png",
      "sha256": "99bd3db48594e0db10d9bd55f737330a1232052c2d0493fe190f5034ee97b87a",
      "dimensions": {
        "width": 366,
        "height": 615
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-390-light-table3-part0.png",
          "index": 3,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 10492.703125,
            "width": 366,
            "height": 614.578125
          }
        }
      }
    },
    {
      "id": "R15-PNG-97",
      "order": 97,
      "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-390-light-table3-part1.png",
      "sha256": "1afb2d619e439f90e4bdaae25d05bd325951f648e793340372df925411eb5ae6",
      "dimensions": {
        "width": 366,
        "height": 615
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "dependencies-package-managers-environments",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/dependencies-package-managers-environments-390-light-table3-part1.png",
          "index": 3,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "clip": {
            "x": 12,
            "y": 10492.703125,
            "width": 366,
            "height": 614.578125
          }
        }
      }
    },
    {
      "id": "R15-PNG-98",
      "order": 98,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-top.png",
      "sha256": "33a35b7582566ddb3802cc7f5baa8569540796136ab033ddcf3c441d316dcc84",
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
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R15-PNG-99",
      "order": 99,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-table0-part0.png",
      "sha256": "bf6352f4ca960037c091d602a9d70366fa5f475c538d3bd7c879d05dca8ec3b7",
      "dimensions": {
        "width": 796,
        "height": 588
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 2499.125,
            "width": 796,
            "height": 588.25
          }
        }
      }
    },
    {
      "id": "R15-PNG-100",
      "order": 100,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-pre1-part0.png",
      "sha256": "a4564050cc4112258f66807ea3eb0d5c19eef51bd9d098c2f2fdbee439548be8",
      "dimensions": {
        "width": 796,
        "height": 99
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-pre1-part0.png",
          "index": 1,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 3444.171875,
            "width": 796,
            "height": 98.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-101",
      "order": 101,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-table2-part0.png",
      "sha256": "a5188b99933122d1fe2a06f97bb07c8bf02448ca7618703c82f1c5fb423fdbe0",
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
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-table2-part0.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 3760.96875,
            "width": 796,
            "height": 326.625
          }
        }
      }
    },
    {
      "id": "R15-PNG-102",
      "order": 102,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-table3-part0.png",
      "sha256": "5a8039f2c663ec97c646215e280aeb6c79f69b19304c98d71989886984e6be29",
      "dimensions": {
        "width": 796,
        "height": 344
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-table3-part0.png",
          "index": 3,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 4377.890625,
            "width": 796,
            "height": 343.625
          }
        }
      }
    },
    {
      "id": "R15-PNG-103",
      "order": 103,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-table4-part0.png",
      "sha256": "5e1aebb27e2b15acac744ce61f3c2238ad535e3f5dbd0f1617d34c00831b5d48",
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
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-table4-part0.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 5230.3125,
            "width": 796,
            "height": 456.609375
          }
        }
      }
    },
    {
      "id": "R15-PNG-104",
      "order": 104,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-pre5-part0.png",
      "sha256": "2db87718a46d10b57fb26ebcd5269f5420f8e9d8f2567d1c5bce33ba252a8acd",
      "dimensions": {
        "width": 796,
        "height": 540
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-pre5-part0.png",
          "index": 5,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 5921.421875,
            "width": 796,
            "height": 539.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-105",
      "order": 105,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-table6-part0.png",
      "sha256": "9cc92ce5e6c302f0da2600160fbc1ebce985b4204f9dc184342066c0e38b2c3c",
      "dimensions": {
        "width": 796,
        "height": 581
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-table6-part0.png",
          "index": 6,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 6795.421875,
            "width": 796,
            "height": 580.578125
          }
        }
      }
    },
    {
      "id": "R15-PNG-106",
      "order": 106,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-pre7-part0.png",
      "sha256": "b09f9efead961a10d7496bd66bbe2384d818ec3447ba820d641f430dd49d7eb7",
      "dimensions": {
        "width": 796,
        "height": 98
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-pre7-part0.png",
          "index": 7,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 8517.359375,
            "width": 796,
            "height": 97.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-107",
      "order": 107,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-pre8-part0.png",
      "sha256": "e27f11c50edf4fdb82a89403c55fae0f94f17b9f771207d8546334d551bcfdec",
      "dimensions": {
        "width": 796,
        "height": 98
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-pre8-part0.png",
          "index": 8,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 8766.921875,
            "width": 796,
            "height": 97.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-108",
      "order": 108,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-pre9-part0.png",
      "sha256": "3fe70f975f09120be57a0f8b372022287ef0def5b7ff0e293c773cf36c3964c5",
      "dimensions": {
        "width": 796,
        "height": 98
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-pre9-part0.png",
          "index": 9,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 9044.484375,
            "width": 796,
            "height": 97.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-109",
      "order": 109,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-pre10-part0.png",
      "sha256": "c8d2048c2fc56c277d2e85190b09cb26eb3ff6d55b153faa66d3f25da76d9d4d",
      "dimensions": {
        "width": 796,
        "height": 196
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-pre10-part0.png",
          "index": 10,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 9594.640625,
            "width": 796,
            "height": 195.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-110",
      "order": 110,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-table11-part0.png",
      "sha256": "6cf1a57b2f2dbc8bfe6b718071bfe2f049f8e443e8f03f4d5a69be3f97591070",
      "dimensions": {
        "width": 796,
        "height": 884
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-table11-part0.png",
          "index": 11,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 10717.234375,
            "width": 796,
            "height": 883.875
          }
        }
      }
    },
    {
      "id": "R15-PNG-111",
      "order": 111,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-pre12-part0.png",
      "sha256": "9e636e5c93b20f4d28f0ac0286448227bbd4b41fcf73f77af64d64048644efb9",
      "dimensions": {
        "width": 796,
        "height": 335
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-pre12-part0.png",
          "index": 12,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 11779.609375,
            "width": 796,
            "height": 335
          }
        }
      }
    },
    {
      "id": "R15-PNG-112",
      "order": 112,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-pre12-part1.png",
      "sha256": "0d0f420e9566fbe4953176c576ec50eec11018086860f0f3c47ba524238d8d67",
      "dimensions": {
        "width": 796,
        "height": 335
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-pre12-part1.png",
          "index": 12,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 103,
          "actualScroll": 103,
          "clip": {
            "x": 320,
            "y": 11779.609375,
            "width": 796,
            "height": 335
          }
        }
      }
    },
    {
      "id": "R15-PNG-113",
      "order": 113,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-table13-part0.png",
      "sha256": "fd874f4bc27a24100425fbc3f990d69aa1b9a7381791fd2606fd41a8e603a891",
      "dimensions": {
        "width": 796,
        "height": 265
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-table13-part0.png",
          "index": 13,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 13592.90625,
            "width": 796,
            "height": 264.640625
          }
        }
      }
    },
    {
      "id": "R15-PNG-114",
      "order": 114,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-table14-part0.png",
      "sha256": "75cd04aa7f85b4f3604ea044e64afb3ff36fa0ba5743fec8b568e6000d333305",
      "dimensions": {
        "width": 796,
        "height": 221
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-1440-dark-table14-part0.png",
          "index": 14,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 13897.546875,
            "width": 796,
            "height": 221.3125
          }
        }
      }
    },
    {
      "id": "R15-PNG-115",
      "order": 115,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-top.png",
      "sha256": "a45def180c6e1b6278fecc61a138b8b8f256a13cd8ab9c5ae0469fd85c1e0da1",
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
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R15-PNG-116",
      "order": 116,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table0-part0.png",
      "sha256": "227b8355f10ea274af9ac2b623c970c98babce0bd19b468ca3dc920922bd3f44",
      "dimensions": {
        "width": 366,
        "height": 1246
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 3730.953125,
            "width": 366,
            "height": 1246.453125
          }
        }
      }
    },
    {
      "id": "R15-PNG-117",
      "order": 117,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table0-part1.png",
      "sha256": "0be1c83d5dd40486c929044c3e24545ee93a75259fa17438b3711479d71b3222",
      "dimensions": {
        "width": 366,
        "height": 1246
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table0-part1.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "clip": {
            "x": 12,
            "y": 3730.953125,
            "width": 366,
            "height": 1246.453125
          }
        }
      }
    },
    {
      "id": "R15-PNG-118",
      "order": 118,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-pre1-part0.png",
      "sha256": "78416538581bcddf9e61ada09a7a4fa7f3c4d89eba73d6cc012bc59a601a8da0",
      "dimensions": {
        "width": 366,
        "height": 115
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-pre1-part0.png",
          "index": 1,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 5472.5,
            "width": 366,
            "height": 114.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-119",
      "order": 119,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-pre1-part1.png",
      "sha256": "e8fa730de8c056081124ccfa68f776fc61ff9ff769d812a1eccb4b8bb785ad48",
      "dimensions": {
        "width": 366,
        "height": 115
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-pre1-part1.png",
          "index": 1,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 154,
          "actualScroll": 154,
          "clip": {
            "x": 12,
            "y": 5472.5,
            "width": 366,
            "height": 114.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-120",
      "order": 120,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table2-part0.png",
      "sha256": "596631dd8475b7193e79fba48c79e7368ec6e4f64539eb092d2a6c41cbaa6b76",
      "dimensions": {
        "width": 366,
        "height": 300
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table2-part0.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 5903.796875,
            "width": 366,
            "height": 300.296875
          }
        }
      }
    },
    {
      "id": "R15-PNG-121",
      "order": 121,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table2-part1.png",
      "sha256": "4ea87d14efd975eaefa7bd0be2332d7bf57d8a9e573891f0b106551e7e6746d3",
      "dimensions": {
        "width": 366,
        "height": 300
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table2-part1.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 358,
          "actualScroll": 358,
          "clip": {
            "x": 12,
            "y": 5903.796875,
            "width": 366,
            "height": 300.296875
          }
        }
      }
    },
    {
      "id": "R15-PNG-122",
      "order": 122,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table2-part2.png",
      "sha256": "ffc11cad773758b60ac432ac4620b0747b659be6fe7930301582eaf28b543172",
      "dimensions": {
        "width": 366,
        "height": 300
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table2-part2.png",
          "index": 2,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 362,
          "actualScroll": 362,
          "clip": {
            "x": 12,
            "y": 5903.796875,
            "width": 366,
            "height": 300.296875
          }
        }
      }
    },
    {
      "id": "R15-PNG-123",
      "order": 123,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table3-part0.png",
      "sha256": "ae640bbf22f9e698520ff4d68a369bf0649f77b8f2d0e67a3f04e9175fd732e5",
      "dimensions": {
        "width": 366,
        "height": 554
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table3-part0.png",
          "index": 3,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 6733.6875,
            "width": 366,
            "height": 554.25
          }
        }
      }
    },
    {
      "id": "R15-PNG-124",
      "order": 124,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table3-part1.png",
      "sha256": "38a0a3897afdaec2a53706c6d6d2dbacee46582ee79523d4a5db196b96468e51",
      "dimensions": {
        "width": 366,
        "height": 554
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table3-part1.png",
          "index": 3,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 163,
          "actualScroll": 163,
          "clip": {
            "x": 12,
            "y": 6733.6875,
            "width": 366,
            "height": 554.25
          }
        }
      }
    },
    {
      "id": "R15-PNG-125",
      "order": 125,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table4-part0.png",
      "sha256": "c8a183918ad2cfc993e818de151a509af189113fb7982b43f3901e22a1123e91",
      "dimensions": {
        "width": 366,
        "height": 746
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table4-part0.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 8193.828125,
            "width": 366,
            "height": 746.21875
          }
        }
      }
    },
    {
      "id": "R15-PNG-126",
      "order": 126,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table4-part1.png",
      "sha256": "36c83f2aca3c15d98a6ae4f68f57eb849137a3f6f981d92e9d7de990a548d29f",
      "dimensions": {
        "width": 366,
        "height": 746
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table4-part1.png",
          "index": 4,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 107,
          "actualScroll": 107,
          "clip": {
            "x": 12,
            "y": 8193.828125,
            "width": 366,
            "height": 746.21875
          }
        }
      }
    },
    {
      "id": "R15-PNG-127",
      "order": 127,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-pre5-part0.png",
      "sha256": "e771b107bc5ca88a35aca7b08caeddac8f7fd4ae032c2c84413c9c4d38097fa7",
      "dimensions": {
        "width": 366,
        "height": 556
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-pre5-part0.png",
          "index": 5,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 9361.140625,
            "width": 366,
            "height": 555.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-128",
      "order": 128,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-pre5-part1.png",
      "sha256": "3f8f251882cc6c8f9fa7dec5347861c317ac4715335d5b1f0616428cac8e35e7",
      "dimensions": {
        "width": 366,
        "height": 556
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-pre5-part1.png",
          "index": 5,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 257,
          "actualScroll": 257,
          "clip": {
            "x": 12,
            "y": 9361.140625,
            "width": 366,
            "height": 555.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-129",
      "order": 129,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table6-part0.png",
      "sha256": "071328bc41db7d0683d95f7f1c360dc055c76a4dd49682c43abc0fee0ec8deb0",
      "dimensions": {
        "width": 366,
        "height": 607
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table6-part0.png",
          "index": 6,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 10493.734375,
            "width": 366,
            "height": 606.90625
          }
        }
      }
    },
    {
      "id": "R15-PNG-130",
      "order": 130,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table6-part1.png",
      "sha256": "b408719383aaf959479861c0aa563275a8824b6ff6ca6b8fbfbb4270b6242a0e",
      "dimensions": {
        "width": 366,
        "height": 607
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table6-part1.png",
          "index": 6,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 327,
          "actualScroll": 327,
          "clip": {
            "x": 12,
            "y": 10493.734375,
            "width": 366,
            "height": 606.90625
          }
        }
      }
    },
    {
      "id": "R15-PNG-131",
      "order": 131,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-pre7-part0.png",
      "sha256": "65de56310ae967348a159b77c00e42a8a470f8f882e2bbd572d8b33ff7de0d40",
      "dimensions": {
        "width": 366,
        "height": 98
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-pre7-part0.png",
          "index": 7,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 12889.78125,
            "width": 366,
            "height": 97.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-132",
      "order": 132,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-pre8-part0.png",
      "sha256": "36a0f90986d90468d06a0ba4511ecec1da6e538faa05164b35503c719a738c79",
      "dimensions": {
        "width": 366,
        "height": 98
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-pre8-part0.png",
          "index": 8,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 13182.640625,
            "width": 366,
            "height": 97.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-133",
      "order": 133,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-pre9-part0.png",
      "sha256": "767091060d774db2b846ae3747d55fe0c5186bb24db9f59663730332edab4317",
      "dimensions": {
        "width": 366,
        "height": 98
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-pre9-part0.png",
          "index": 9,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 13502.703125,
            "width": 366,
            "height": 97.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-134",
      "order": 134,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-pre10-part0.png",
      "sha256": "fb7d9e26dde7c3175275218fc17f0a7472d0cbd590cadb4df45535c3257c1691",
      "dimensions": {
        "width": 366,
        "height": 196
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-pre10-part0.png",
          "index": 10,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 14238.75,
            "width": 366,
            "height": 195.5
          }
        }
      }
    },
    {
      "id": "R15-PNG-135",
      "order": 135,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table11-part0.png",
      "sha256": "a840260eb9d258bb1763bd07f37460ab43515acbf89d11dcde15d37dd847d831",
      "dimensions": {
        "width": 366,
        "height": 1516
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table11-part0.png",
          "index": 11,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 16047.734375,
            "width": 366,
            "height": 1515.75
          }
        }
      }
    },
    {
      "id": "R15-PNG-136",
      "order": 136,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table11-part1.png",
      "sha256": "b043019fdd6a85ea15a9224f123286abd42f97e10e33ad0d25908404098bbaee",
      "dimensions": {
        "width": 366,
        "height": 1516
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table11-part1.png",
          "index": 11,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 75,
          "actualScroll": 75,
          "clip": {
            "x": 12,
            "y": 16047.734375,
            "width": 366,
            "height": 1515.75
          }
        }
      }
    },
    {
      "id": "R15-PNG-137",
      "order": 137,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-pre12-part0.png",
      "sha256": "f5c8d287e9d0d221d8d13a5362f90363461eea50701ff8caf1a646f392315281",
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
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-pre12-part0.png",
          "index": 12,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 17844.578125,
            "width": 366,
            "height": 335
          }
        }
      }
    },
    {
      "id": "R15-PNG-138",
      "order": 138,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-pre12-part1.png",
      "sha256": "2911c50f2fa5a7c3cdd798d532462fae6945e5a1de562dc14db81d91d9d76775",
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
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-pre12-part1.png",
          "index": 12,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 356,
          "actualScroll": 356,
          "clip": {
            "x": 12,
            "y": 17844.578125,
            "width": 366,
            "height": 335
          }
        }
      }
    },
    {
      "id": "R15-PNG-139",
      "order": 139,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-pre12-part2.png",
      "sha256": "6fcba1ca3f4a15e9e03eb5c0626fcef487dc0f277f55ea942328d3d06ea670fa",
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
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-pre12-part2.png",
          "index": 12,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 533,
          "actualScroll": 533,
          "clip": {
            "x": 12,
            "y": 17844.578125,
            "width": 366,
            "height": 335
          }
        }
      }
    },
    {
      "id": "R15-PNG-140",
      "order": 140,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table13-part0.png",
      "sha256": "96f3f5070faa342f499761930338189fe129cd28c77953c6d180ce326ccba6e6",
      "dimensions": {
        "width": 366,
        "height": 396
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table13-part0.png",
          "index": 13,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 20639.265625,
            "width": 366,
            "height": 396.28125
          }
        }
      }
    },
    {
      "id": "R15-PNG-141",
      "order": 141,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table13-part1.png",
      "sha256": "610b43d1ee390492e6bacbc708b3ca5ff433633bad63e5ba20acad3c804380f9",
      "dimensions": {
        "width": 366,
        "height": 396
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table13-part1.png",
          "index": 13,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "clip": {
            "x": 12,
            "y": 20639.265625,
            "width": 366,
            "height": 396.28125
          }
        }
      }
    },
    {
      "id": "R15-PNG-142",
      "order": 142,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table14-part0.png",
      "sha256": "37aebb6507d4272d8548e981b1322550eee6479a8c1f562ac2f0e94f7105f973",
      "dimensions": {
        "width": 366,
        "height": 379
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table14-part0.png",
          "index": 14,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 21131.546875,
            "width": 366,
            "height": 379.28125
          }
        }
      }
    },
    {
      "id": "R15-PNG-143",
      "order": 143,
      "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table14-part1.png",
      "sha256": "9d4b1d4cf1f62ae3e37d284a6819b3c2d5e2a87e3efd943f432c637fd5daf4bb",
      "dimensions": {
        "width": 366,
        "height": 379
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "files-folders-paths",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/files-folders-paths-390-light-table14-part1.png",
          "index": 14,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 61,
          "actualScroll": 61,
          "clip": {
            "x": 12,
            "y": 21131.546875,
            "width": 366,
            "height": 379.28125
          }
        }
      }
    },
    {
      "id": "R15-PNG-144",
      "order": 144,
      "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-1440-dark-top.png",
      "sha256": "b47799752ed873ef96921849e340a040a880f5fdabcc5e3174c0fc3260a13778",
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
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R15-PNG-145",
      "order": 145,
      "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-1440-dark-table0-part0.png",
      "sha256": "245bd87ee52f091062099e6925266e450aa47a1924f7430d007d0adbc7ca69c1",
      "dimensions": {
        "width": 796,
        "height": 728
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-1440-dark-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 681.328125,
            "width": 796,
            "height": 727.5625
          }
        }
      }
    },
    {
      "id": "R15-PNG-146",
      "order": 146,
      "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-1440-dark-pre2-part0.png",
      "sha256": "55b99484b7730bfb5a120239f76ef3c64db591b372a83a058880553358001dbe",
      "dimensions": {
        "width": 796,
        "height": 122
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-1440-dark-pre2-part0.png",
          "index": 2,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 4492.34375,
            "width": 796,
            "height": 122
          }
        }
      }
    },
    {
      "id": "R15-PNG-147",
      "order": 147,
      "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-1440-dark-table3-part0.png",
      "sha256": "1cadf8e81b92d8c7b79e8b342b462cc0ee943851033d5bcfa0fcd090ce0aac00",
      "dimensions": {
        "width": 796,
        "height": 718
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-1440-dark-table3-part0.png",
          "index": 3,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 6751.03125,
            "width": 796,
            "height": 718.234375
          }
        }
      }
    },
    {
      "id": "R15-PNG-148",
      "order": 148,
      "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-1440-dark-pre4-part0.png",
      "sha256": "edb41b7b08b9b67caacf75a4dc6ce5c0f6fd3c0ee3b4149e3dcba2f9d1d60491",
      "dimensions": {
        "width": 796,
        "height": 384
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-1440-dark-pre4-part0.png",
          "index": 4,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 7531.765625,
            "width": 796,
            "height": 384
          }
        }
      }
    },
    {
      "id": "R15-PNG-149",
      "order": 149,
      "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-1440-dark-pre4-part1.png",
      "sha256": "b3a7f63db0813428332ba7dfd2e4f9bcc91cf20559ee74cf2f089713592a4f6b",
      "dimensions": {
        "width": 796,
        "height": 384
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-1440-dark-pre4-part1.png",
          "index": 4,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 35,
          "actualScroll": 35,
          "clip": {
            "x": 320,
            "y": 7531.765625,
            "width": 796,
            "height": 384
          }
        }
      }
    },
    {
      "id": "R15-PNG-150",
      "order": 150,
      "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-1440-dark-table5-part0.png",
      "sha256": "8a3692f3ff2507c13a28e82d779b212ed62ffc756f469c3f39ce4445b79953d3",
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
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-1440-dark-table5-part0.png",
          "index": 5,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 320,
            "y": 9287.265625,
            "width": 796,
            "height": 351.296875
          }
        }
      }
    },
    {
      "id": "R15-PNG-151",
      "order": 151,
      "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-390-light-top.png",
      "sha256": "81dfe967fd42b1e5f6dcc314e072a675de1bd5c845f661ac665719f9ea8204e3",
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
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R15-PNG-152",
      "order": 152,
      "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-390-light-table0-part0.png",
      "sha256": "37087e45888fa08acc138abaeaf1da7c39385d34e27bc2e240949a7c48ef0f95",
      "dimensions": {
        "width": 366,
        "height": 1122
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-390-light-table0-part0.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 932.46875,
            "width": 366,
            "height": 1122.484375
          }
        }
      }
    },
    {
      "id": "R15-PNG-153",
      "order": 153,
      "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-390-light-table0-part1.png",
      "sha256": "68fe18f3ac9ce6acb5de74cd23f7c141d7ea623339d1df74c99bd1613d5b3e7c",
      "dimensions": {
        "width": 366,
        "height": 1122
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-390-light-table0-part1.png",
          "index": 0,
          "tag": "TABLE",
          "columns": 4,
          "requestedScroll": 154,
          "actualScroll": 154,
          "clip": {
            "x": 12,
            "y": 932.46875,
            "width": 366,
            "height": 1122.484375
          }
        }
      }
    },
    {
      "id": "R15-PNG-154",
      "order": 154,
      "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-390-light-pre2-part0.png",
      "sha256": "fdd625b7ec365f78c212c95e9440d9246491b22078806e3b455f1dba4667be06",
      "dimensions": {
        "width": 366,
        "height": 138
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-390-light-pre2-part0.png",
          "index": 2,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 6808.6875,
            "width": 366,
            "height": 138
          }
        }
      }
    },
    {
      "id": "R15-PNG-155",
      "order": 155,
      "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-390-light-pre2-part1.png",
      "sha256": "efd31743dec633e779dddde899fe11074900fcaffead82efd948f4686936b449",
      "dimensions": {
        "width": 366,
        "height": 138
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-390-light-pre2-part1.png",
          "index": 2,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 11,
          "actualScroll": 11,
          "clip": {
            "x": 12,
            "y": 6808.6875,
            "width": 366,
            "height": 138
          }
        }
      }
    },
    {
      "id": "R15-PNG-156",
      "order": 156,
      "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-390-light-table3-part0.png",
      "sha256": "e3d70aba785940111c0848176681015b54eb9df88edeefb60bfe7bbd7383c604",
      "dimensions": {
        "width": 366,
        "height": 1218
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-390-light-table3-part0.png",
          "index": 3,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 10229.546875,
            "width": 366,
            "height": 1218.46875
          }
        }
      }
    },
    {
      "id": "R15-PNG-157",
      "order": 157,
      "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-390-light-table3-part1.png",
      "sha256": "fe2b198c3445596126afd626c67b34e0ec1bed4a1907c753a992032773f24c30",
      "dimensions": {
        "width": 366,
        "height": 1218
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-390-light-table3-part1.png",
          "index": 3,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "clip": {
            "x": 12,
            "y": 10229.546875,
            "width": 366,
            "height": 1218.46875
          }
        }
      }
    },
    {
      "id": "R15-PNG-158",
      "order": 158,
      "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-390-light-pre4-part0.png",
      "sha256": "ab04bb771a0475de6907fd275cf02672d77f4c8fa998756a219eff2678c5e5e1",
      "dimensions": {
        "width": 366,
        "height": 384
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-390-light-pre4-part0.png",
          "index": 4,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 11529.109375,
            "width": 366,
            "height": 384
          }
        }
      }
    },
    {
      "id": "R15-PNG-159",
      "order": 159,
      "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-390-light-pre4-part1.png",
      "sha256": "2f2c761f772e4d4c838f848a4452b6709d4f5aee9bde6bfe779f3971d5827de9",
      "dimensions": {
        "width": 366,
        "height": 384
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-390-light-pre4-part1.png",
          "index": 4,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 356,
          "actualScroll": 356,
          "clip": {
            "x": 12,
            "y": 11529.109375,
            "width": 366,
            "height": 384
          }
        }
      }
    },
    {
      "id": "R15-PNG-160",
      "order": 160,
      "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-390-light-pre4-part2.png",
      "sha256": "fa14f27ee411800a7f35da58e66404aa360e545e65be70e0ac5058fdabe19ecc",
      "dimensions": {
        "width": 366,
        "height": 384
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-390-light-pre4-part2.png",
          "index": 4,
          "tag": "PRE",
          "columns": 0,
          "requestedScroll": 465,
          "actualScroll": 465,
          "clip": {
            "x": 12,
            "y": 11529.109375,
            "width": 366,
            "height": 384
          }
        }
      }
    },
    {
      "id": "R15-PNG-161",
      "order": 161,
      "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-390-light-table5-part0.png",
      "sha256": "76a903a376240e822a7f86e50bfce6d7ce5ac69b3c5ad205150e09550cc5cb81",
      "dimensions": {
        "width": 366,
        "height": 694
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-390-light-table5-part0.png",
          "index": 5,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 0,
          "actualScroll": 0,
          "clip": {
            "x": 12,
            "y": 14048,
            "width": 366,
            "height": 693.5625
          }
        }
      }
    },
    {
      "id": "R15-PNG-162",
      "order": 162,
      "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-390-light-table5-part1.png",
      "sha256": "5fcf03b91ef0d594e736bdb820cf5d8811dcd3e2121d3cdaf954ced73621c75e",
      "dimensions": {
        "width": 366,
        "height": 694
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "terminal-processes-ports",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r15-inputs-20261115-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r15-inputs-20261115-remaining/terminal-processes-ports-390-light-table5-part1.png",
          "index": 5,
          "tag": "TABLE",
          "columns": 3,
          "requestedScroll": 26,
          "actualScroll": 26,
          "clip": {
            "x": 12,
            "y": 14048,
            "width": 366,
            "height": 693.5625
          }
        }
      }
    }
  ]
}
```
<!-- m5-r15-request:data:end -->
