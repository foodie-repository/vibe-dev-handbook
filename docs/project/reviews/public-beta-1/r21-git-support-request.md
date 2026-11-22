# R21 Git 지원 — 고정 검토 요청

기준 commit 5cbab7be30985c3acd097130f8b86f7f00ccbc69, 입력 고정 2026-11-16입니다. 대상 두 원고의 frontmatter부터 마지막 문장까지, full_text_paths 전체와 context_excerpts 명시 범위를 실제 읽습니다. 완료된 인접 원고는 문맥 비교용이며 해당 행의 전체 재검토가 아닙니다.

Controller·작성자·이전 대화와 분리된 fresh gpt-6-astra/high 저장 세션을 사용합니다. 공식 ChatGPT 구독·실제 모델/effort·history0·readOnly/networkfalse·도구/MCP 비활성을 실행에서 확인하고 같은 저장 ID를 실제 복구해 후속 검토합니다. R02 승계 예외·API 키·추가 크레딧·전역 설정/인증 변경은 허용하지 않습니다.

공통 계약 C01~C12·한국어 여섯 절·각 원고9항목18점/치명 기준을 적용합니다. 브랜치·커밋·upstream·remote-tracking·PR·리뷰·병합·tag·release·deploy의 서로 다른 상태와 증거, 작은 수직 변경, 기준 최신화·충돌 통합·승인 정책을 검토합니다. restore/revert/reset/rebase의 형식과 옵션별 손실·공유 이력 경계, Git 복구와 운영 데이터·외부 효과의 차이, 참가·취소·정원 사례의 불변식을 판단합니다. 명령을 실행하거나 원격 상태를 바꾸지 않습니다.

R08의 최초 결과·재판정·Fix1 결과와 정확한 전이 코드를 읽어 R08-XI01/XM01/XM02의 국소 해소 계보를 재사용하세요. 이번 R21 전체 검토와 점수는 별도로 판정합니다. 이전 NEEDS CHANGES·당시 OPEN 기록은 역사로 보존하며 현재 해소 결과와 구분합니다. 완료된 R08·사례 전체를 이유 없이 재검토하지 않습니다.

새 직접 근거는 2026-11-16 공식16페이지의 명시 범위입니다. GitHub PR 생성 루트는 분류 페이지이므로 상세 생성·fork 안내로 보충했습니다. 실제 저장소의 권한·정책·CLI 실행을 확인한 것은 아닙니다. 현재 문서의 동작을 모든 버전·설정의 기본값으로 일반화하지 않습니다. 원전별 미독 범위를 유지합니다.

대상 두 원고에는 SVG/Mermaid 소비가 없습니다. 두 경로×1440/390×light/dark 총8상태의 원본 PNG46개를 localImage/detail original로 전달합니다. 모든 이미지의 관측·판독 범위·한계를 기록하세요. 텍스트/OCR/경로/해시만으로 이미지 판독을 대체하지 않습니다. 대표1440light/390dark 4상태23PNG 중14개를 controller가 실제 읽은 뒤 반대테마4상태23개로 확장했습니다. 표의 좌우·상하 겹침 분할과 긴 자연어 프롬프트 가로 스크롤을 구분하며 후자는 미해소 판정 대상입니다. 키보드·1024/320/200%·보조기술·실제 Git 복구·GitHub UI는 미실행입니다. 공개 출력 불변 R20 최종 build60은 재사용합니다.

준비는 원고 PASS/review/M5/ready/공개 승인이 아닙니다. 도구·쓰기·셸·웹·MCP·위임 없이 응답만 반환하세요. 준비 검사기/테스트/캡처의 C/I/M와 체크포인트 적합성은 원고 판정과 별도입니다. 개인 home 절대경로·비공개 전체 세션 ID를 출력하지 마세요. 최초 정상 결과는 원고 수정 전 별도 커밋하고 전송 후 불변성 감사를 수행합니다.

<!-- m5-r21-request:data:start -->
```json
{
  "schema_version": 1,
  "review_id": "R21",
  "baseline_commit": "5cbab7be30985c3acd097130f8b86f7f00ccbc69",
  "targets": [
    "src/content/docs/09-git-github/branch-commit-pull-request.md",
    "src/content/docs/09-git-github/undo-merge-conflict-release.md"
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
    "src/content/docs/09-git-github/branch-commit-pull-request.md",
    "src/content/docs/09-git-github/undo-merge-conflict-release.md",
    "research/public-beta-review-source-excerpts/r21-git-support-2026-11-16.md",
    "research/meeting-webapp-case-brief.md",
    "src/content/docs/reference/development-glossary.md",
    "src/content/docs/09-git-github/git-and-github.md",
    "src/content/docs/10-deployment-operations/build-deploy-domain-dns.md",
    "src/content/docs/11-ai-native/permissions-sandbox-worktrees.md",
    "docs/project/reviews/public-beta-1/r08-git-github-codex-review.md",
    "docs/project/reviews/public-beta-1/r08-git-github-adjudication.md",
    "docs/project/reviews/public-beta-1/r08-git-github-codex-rereview.md",
    "scripts/r08-fix-transition.mjs",
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
      "sha256": "f057373b70a25e28e38c5811dd833c4214b1c26d0698e56092808424c3f3bd94",
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
      "sha256": "3b4ec3a738cce9717f9858c24d3f5b91f34874b7990248ac55c6dd5f9010d70c",
      "segments": [
        {
          "start_line": 393,
          "end_line": 398,
          "text": "| `09-git-github/git-and-github.md` | 저장소 내부 `research/meeting-webapp-case-brief.md` | 2026-08-10 | W-03 자신의 참가·취소와 W-04 중복·모집 상태·정원·동시 요청 불변식을 Git 변경 단위·검증·보존·승인 경계의 교육용 사례로 적용하는 범위. 실제 제품 구현·데이터 상태·커밋·push·배포 성공의 근거로 사용하지 않음 |\n| `09-git-github/branch-commit-pull-request.md` | https://git-scm.com/docs/git-branch.html, https://git-scm.com/docs/git-pull | 2026-08-13, Git 공식 reference 현재 문서 | branch의 upstream 설정과 remote-tracking 참조, pull이 fetch 뒤 설정된 방식으로 현재 브랜치에 통합하는 범위. `origin`을 필수 remote 이름·remote-tracking branch를 실시간 원격 상태·pull을 모든 저장소에서 같은 merge 방식으로 일반화하지 않음 |\n| `09-git-github/branch-commit-pull-request.md` | https://docs.github.com/en/pull-requests/how-tos/create-pull-requests, https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews, https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/merging-a-pull-request | 2026-08-13, GitHub Docs 현재 공식 문서 | Pull Request의 head·base 변경 제안, comment·approve·request changes review와 저장소 ruleset·branch protection·권한에 따른 병합 조건의 현재 GitHub 범위. Git 자체·다른 호스팅 제품의 기능이나 승인·병합·배포 성공으로 확대하지 않음 |\n| `09-git-github/undo-merge-conflict-release.md` | https://git-scm.com/docs/git, https://git-scm.com/docs/git-restore, https://git-scm.com/docs/git-revert, https://git-scm.com/docs/git-reset, https://git-scm.com/docs/git-rebase | 2026-08-13, Git 공식 reference 현재 문서 | restore의 working tree·index 복원, revert의 새 반대 commit, reset의 branch tip·index·working tree mode, rebase의 새 부모 위 commit 재생성과 충돌·중단 범위. 실제 상태·옵션·버전 확인 없이 안전 명령으로 일반화하거나 Git 이력 복구를 배포·데이터·외부 효과 복구로 확대하지 않음 |\n| `09-git-github/undo-merge-conflict-release.md` | https://git-scm.com/docs/git-tag.html, https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository | 2026-08-13, Git 공식 reference와 GitHub Docs 현재 공식 문서 | lightweight·annotated tag와 공유 tag 변경 주의, tag를 선택해 notes·binary files와 묶는 현재 GitHub Release 기능의 범위. tag·version·release·artifact·deployment를 같은 완료 상태로 보거나 GitHub 기능을 Git 자체·다른 호스팅 제품의 보편 절차로 확대하지 않음 |\n| `10-deployment-operations/build-deploy-domain-dns.md` | https://docs.astro.build/en/guides/deploy/github/ | 2026-08-04 | Astro 정적 빌드 결과의 GitHub Pages 배포 구조, 사이트 URL과 프로젝트 base path 설정 범위 |"
        }
      ]
    },
    {
      "path": "research/public-beta-source-gap-register.md",
      "sha256": "eefe11c1c41b74d3e01fa11dd403426584c4bb18dddbe8c1ca3782e4d05025bd",
      "segments": [
        {
          "start_line": 42,
          "end_line": 44,
          "text": "| PBSG-008 | PB-039 `software-development-lifecycle.md`; PB-040 `debugging-observability.md` | 생명주기 단계별 종료 증거와 피드백, 재현·가설·로그·지표·트레이스로 원인을 좁히는 절차 | important | 2026-08-13 확인: ISO/IEC/IEEE 12207:2026, NIST SSDF 1.1, Agile Manifesto 원칙, Google SRE Book Effective Troubleshooting, OpenTelemetry signals·observability primer, OWASP Logging Cheat Sheet | 생명주기·보안·관측 지침의 문서 상태 변경 시와 특정 SDLC 모델·관측 제품·인시던트 절차를 실제 채택할 때 재확인 | confirmed | Task 15 | 이 원고의 단계 지도를 표준의 고정 순서로, 문서·화면·배포 표시를 단계 완료로, 세 신호의 수집을 관측 완성·근본 원인·복구 성공으로 일반화하지 않습니다. |\n| PBSG-009 | PB-043 `branch-commit-pull-request.md`; PB-045 `undo-merge-conflict-release.md` | branch·commit·PR·merge·revert·reset·rebase·release의 공유 이력 경계와 안전한 복구 | important | 2026-08-13 확인: Git branch·pull·restore·revert·reset·rebase·tag 공식 reference와 GitHub PR·review·merge·release 공식 문서 | Git 또는 호스팅 제품의 관련 동작·문서 상태가 바뀌거나 실제 저장소의 ruleset·권한·merge·release 방법을 적용할 때 재확인 | confirmed | Task 16 | 로컬 미공유 이력과 원격 공유 이력을 같은 복구 절차로 다루거나 GitHub의 PR·Release 동작을 Git 자체·다른 호스팅 제품의 규칙으로 단정하지 않습니다. Git 이력 복구를 배포·데이터·외부 효과 복구로 확대하지 않습니다. |\n| PBSG-010 | PB-049 `agent-review-and-verification.md`; PB-051 `permissions-sandbox-worktrees.md` | 독립 AI 검토의 증거 한계와 권한·샌드박스·worktree·dry-run의 보호 범위 및 우회 가능성 | important | 2026-08-13 확인: NIST least privilege, Apple macOS App Sandbox, Git worktree·clean, OpenAI Codex 공식 제품 자료·current primary repository, Anthropic evals·Claude Code permissions·sandbox와 fresh-context evaluator 예시 저장소 | Git·운영체제·에이전트 제품 정책·실행 환경이 바뀌거나 실제 sandbox·권한·review harness를 적용할 때 재확인 | confirmed | Task 17 | 읽기 전용·샌드박스·dry-run 표시를 부작용 불가능 또는 검토 독립성·정확성 보장으로 일반화하지 않습니다. |"
        },
        {
          "start_line": 160,
          "end_line": 162,
          "text": "| PBCA-003 | PBSG-001, PBSG-002, PBSG-003, PBSG-004, PBSG-005 | Task 12; Task 13; Task 14; Task 15; Task 16 |\n| PBCA-004 | PBSG-007, PBSG-008, PBSG-009, PBSG-010 | Task 10; Task 14; Task 15; Task 16; Task 17 |\n| PBCA-005 | PBSG-017 | Task 7; Task 8; Task 17 |"
        }
      ]
    },
    {
      "path": "docs/project/public-beta-content-audit.md",
      "sha256": "5b9bbec64eca339ee0b0a3c82be50c262120d6fe493c57e7963f79dc9215a608",
      "segments": [
        {
          "start_line": 69,
          "end_line": 73,
          "text": "| PB-042 | `src/content/docs/08-quality/testing-strategy.md` | core | 위험에 맞는 테스트와 보완 증거를 어떻게 고르는가? | 단위·통합·계약·E2E·운영·사람 검증을 배치한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 5; Task 15 | 전체 파일을 다시 감사해 static·dynamic, manual·automated, 테스트 수준·목적·초점을 구분하고 피라미드를 위험·피드백 비용 배분으로, coverage를 실제 성공의 대리 증거가 아닌 탐색 신호로 보강했습니다. PBSG-015·016을 직접 공식·1차 자료로 확인했으며 의미 변경 전 검토 파일은 보존하되 현재 reviewEvidence는 재사용하지 않습니다. |\n| PB-043 | `src/content/docs/09-git-github/branch-commit-pull-request.md` | core | 브랜치·커밋·Pull Request는 어떤 검토 경계를 만드는가? | 로컬 변경·이력·원격 제안을 구분한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 5; Task 16 | branch·commit·upstream·remote-tracking·push·PR·review·merge를 별도 상태와 증거로 구분하고, 작은 수직 변경·최신화·충돌·승인·모임 W-03 사례를 Git·GitHub 공식 문서와 연결했습니다. PBSG-009의 revert·reset·rebase·release 범위는 PB-045 완료 전까지 열어 둡니다. |\n| PB-044 | `src/content/docs/09-git-github/git-and-github.md` | core | Git과 GitHub, commit과 push는 어떻게 다른가? | 로컬 상태·이력·원격 협업·배포를 증거로 구분한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 16; Task 20 resolved | 작업 트리·index·commit, status와 세 diff의 비교 기준, local·remote와 fetch·pull·push, 사용자 변경 보존, commit·push·PR·merge·deploy 승인 경계를 모임 W-03 사례와 Git·GitHub 공식 문서로 최종 정렬했습니다. Git 그림의 marker와 390px 보조 레이블 판독성은 Task 20 `1b26e10`과 실제 Chrome 6상태·Codex `PASS`로 교정됐습니다. |\n| PB-045 | `src/content/docs/09-git-github/undo-merge-conflict-release.md` | core | 변경 취소·충돌 해결·릴리스를 어떻게 안전하게 다루는가? | 되돌리기 범위와 공유 이력·릴리스 증거를 판단한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 5; Task 16 | 미커밋·staged·로컬 전용·공유·릴리스·운영 상태를 먼저 분류하고 restore·revert·reset·rebase의 손실 경계, 충돌 의도 통합, tag·version·release·deploy와 모임 복구 불변식을 Git·GitHub 공식 문서에 연결해 PBSG-009를 닫았습니다. |\n| PB-046 | `src/content/docs/10-deployment-operations/build-deploy-domain-dns.md` | core | 소스가 공개 서비스가 되기까지 어떤 단계와 증거가 필요한가? | build·release·deploy·hosting·domain·DNS를 구분한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 16; Task 20 resolved | source commit→artifact→deployment→DNS·HTTPS→사용자→운영의 식별자와 직접 증거, 정적·동적 책임과 local·CI·deployed 경계를 DNS·HTTP 표준 및 Astro 공식 가이드에 연결했습니다. deploy 그림 topology·marker·390px 판독성은 Task 20 `9fe4bb7`과 실제 Chrome 6상태·Codex `PASS`로 교정됐습니다. |"
        }
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "sha256": "487bbedc2e70d8d308a450f709b161bec4e30da25465a4db345c6c82994b786e",
      "segments": [
        {
          "start_line": 401,
          "end_line": 429,
          "text": "    },\n    {\n      \"id\": \"R20\",\n      \"slug\": \"quality-support\",\n      \"method\": \"소묶음\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/08-quality/debugging-observability.md\", \"src/content/docs/08-quality/performance-security.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r20-quality-support-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r20-quality-support-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r20-quality-support-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r20-quality-support-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r20-quality-support-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r20-quality-support-input-manifest.json\",\"source_checked_at\":\"2026-11-16\",\"combined_sha256\":\"a8aa006a7590172fee04a8876c668183f6ec8ad8fe2a1615952dcd3572d44073\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important2-minor5-resolved-after-fix2\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"c384bb5c15d3778426b73e509cf81867276461ddba888967ed2e37e6b2e047fe\",\"current_target_sha256\":\"edc46880d09b9bb0288ff76e8dd58f13eab67ade82a16d35530d17f55d90b0f6\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r20-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r20-quality-support-codex-rereview.md\",\"next_scope\":\"R21 pending; no M5/ready/public approval\",\"target_hashes\":[{\"path\":\"src/content/docs/08-quality/debugging-observability.md\",\"reviewed_sha256\":\"c384bb5c15d3778426b73e509cf81867276461ddba888967ed2e37e6b2e047fe\",\"current_sha256\":\"edc46880d09b9bb0288ff76e8dd58f13eab67ade82a16d35530d17f55d90b0f6\"},{\"path\":\"src/content/docs/08-quality/performance-security.md\",\"reviewed_sha256\":\"ea04fef29f4338a592328ad784713a59431d5f96a910f19d1157465ad105a324\",\"current_sha256\":\"3a4cf7084e72f2224cf38b0af9c4d4056bf0a0ae4d5442d7a6b1afe06dbcdedf\"}],\"evidence_followup_path\":\"docs/project/reviews/public-beta-1/r20-fix2-followup-review.md\",\"inherited_resolution\":{\"id\":\"R04-M08\",\"state\":\"resolved\",\"historical_state\":\"R04 deferred/open preserved\",\"evidence_path\":\"docs/project/reviews/public-beta-1/r20-quality-support-codex-review.md\"}}\n    },\n    {\n      \"id\": \"R21\",\n      \"slug\": \"git-support\",\n      \"method\": \"소묶음\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/09-git-github/branch-commit-pull-request.md\", \"src/content/docs/09-git-github/undo-merge-conflict-release.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r21-git-support-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r21-git-support-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r21-git-support-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r21-git-support-codex-rereview.md\"\n    },\n    {\n      \"id\": \"R22\",\n      \"slug\": \"deploy-config\",\n      \"method\": \"개별 안전\",\n      \"implementation_state\": \"작성·구현 완료\","
        }
      ]
    },
    {
      "path": "docs/project/public-beta-visual-audit.md",
      "sha256": "fa8fb01ec74718c80f81e5c016f212a7629c61f218591cc742551f144dfd98e4",
      "segments": [
        {
          "start_line": 5,
          "end_line": 10,
          "text": "## 감사 계약\n\n- 기준일: 2026-08-30\n- 기준 커밋: `750a8e3bbe77a67cf2480d8608aa891aa00c5de5`\n- 범위: 게시 SVG 14개, 대응 Mermaid 원본 14개, 공개 원고의 소비 occurrence 17개, Task 6의 서로 다른 시각 캡처 60개, Task 10 PBV-13 상태 4개, Task 20 PBV-03 Fix Round 1 상태 6개와 후속 11개 자산 단위 상태 84개, Task 21의 현재 입력 전체 시각 occurrence 68개\n- 정본: 공개 페이지가 소비하는 정적 SVG가 현재 게시 정본입니다. Mermaid는 편집 가능한 source일 뿐이며 의미가 어긋난 행은 두 표현을 그대로 병존시키지 않고 Task 20에서 원고의 학습 질문을 기준으로 정적 SVG 하나를 다시 정본화합니다."
        }
      ]
    }
  ],
  "render_provenance": {
    "manifest_path": "output/playwright/r21-inputs-20261116-pilot/observations.json",
    "manifest_sha256": "12515a0eb3bf72a27ad8b8bb22c443b74355e9125ff9f1aa4972b5f6131755d6",
    "additional_context_manifests": [
      {
        "path": "output/playwright/r21-inputs-20261116-remaining/observations.json",
        "sha256": "0e9f63d7c6611ef1906ae2d4820b8be331d087b6c2190645adf50563d9ae4c04"
      }
    ],
    "input_files": [
      {
        "path": "src/content/docs/09-git-github/branch-commit-pull-request.md",
        "sha256": "fdf94f67c24f57c23857cb132618301ee91a2d205bd8a8a5bff10d4014512bea"
      },
      {
        "path": "src/content/docs/09-git-github/undo-merge-conflict-release.md",
        "sha256": "f349e1b0a7aac63598a550c494a1724c6ce8e11cf571b777d829fbca65d149e5"
      },
      {
        "path": "src/styles/custom.css",
        "sha256": "2236f2a8a9b30515cb641d48de7089d15590834766ada3f60de9f649ef36c137"
      }
    ],
    "states": [
      {
        "route": "09-git-github/branch-commit-pull-request",
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
        "image_count": 5
      },
      {
        "route": "09-git-github/branch-commit-pull-request",
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
        "route": "09-git-github/undo-merge-conflict-release",
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
        "route": "09-git-github/undo-merge-conflict-release",
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
        "route": "09-git-github/branch-commit-pull-request",
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
        "image_count": 5
      },
      {
        "route": "09-git-github/branch-commit-pull-request",
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
        "route": "09-git-github/undo-merge-conflict-release",
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
        "route": "09-git-github/undo-merge-conflict-release",
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
      }
    ]
  },
  "images": [
    {
      "id": "R21-PNG-01",
      "order": 1,
      "path": "output/playwright/r21-inputs-20261116-pilot/branch-commit-pull-request-1440-light-top.png",
      "sha256": "80582ee3f5f6219a73d6841706e65ecab3875b6ecaf42c5c1b24ce3f002258f7",
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
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R21-PNG-02",
      "order": 2,
      "path": "output/playwright/r21-inputs-20261116-pilot/branch-commit-pull-request-1440-light-item0-x0-y0.png",
      "sha256": "2638e1ac88d2dbe0edde36de4d7c8e375b3d6e96e1c3d27579f27b2a53aa48a5",
      "dimensions": {
        "width": 788,
        "height": 460
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-pilot/branch-commit-pull-request-1440-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1035,
          "documentRange": [
            1145,
            1605.890625
          ],
          "targetRange": [
            1144.625,
            1605.890625
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 460.890625
          }
        }
      }
    },
    {
      "id": "R21-PNG-03",
      "order": 3,
      "path": "output/playwright/r21-inputs-20261116-pilot/branch-commit-pull-request-1440-light-item1-x0-y0.png",
      "sha256": "a5a50530f9e5864f02d0cd483262f9078b490a04ffecb222bf5fbcb6732822c9",
      "dimensions": {
        "width": 788,
        "height": 147
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-pilot/branch-commit-pull-request-1440-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2365,
          "documentRange": [
            2475,
            2622.15625
          ],
          "targetRange": [
            2474.65625,
            2622.15625
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 147.15625
          }
        }
      }
    },
    {
      "id": "R21-PNG-04",
      "order": 4,
      "path": "output/playwright/r21-inputs-20261116-pilot/branch-commit-pull-request-1440-light-item2-x0-y0.png",
      "sha256": "037627a075fc49dd892e1bd301151d78ce0f0e48c8a9a12346ac6ed856d27107",
      "dimensions": {
        "width": 788,
        "height": 123
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-pilot/branch-commit-pull-request-1440-light-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3140,
          "documentRange": [
            3250.421875,
            3373.421875
          ],
          "targetRange": [
            3250.421875,
            3373.421875
          ],
          "clip": {
            "x": 324,
            "y": 110.421875,
            "width": 788,
            "height": 123
          }
        }
      }
    },
    {
      "id": "R21-PNG-05",
      "order": 5,
      "path": "output/playwright/r21-inputs-20261116-pilot/branch-commit-pull-request-1440-light-item3-x0-y0.png",
      "sha256": "eb0549dc3502295d988ffad3691d4268e9f3fb4b22b24e851e74dd4875b1f3c7",
      "dimensions": {
        "width": 788,
        "height": 303
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-pilot/branch-commit-pull-request-1440-light-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 4932,
          "documentRange": [
            5042.21875,
            5345.515625
          ],
          "targetRange": [
            5042.21875,
            5345.515625
          ],
          "clip": {
            "x": 324,
            "y": 110.21875,
            "width": 788,
            "height": 303.296875
          }
        }
      }
    },
    {
      "id": "R21-PNG-06",
      "order": 6,
      "path": "output/playwright/r21-inputs-20261116-pilot/branch-commit-pull-request-390-dark-top.png",
      "sha256": "5fd66889e3cb4390b3f7d8f71a16e2966324859a001af6432c44efda30cf220d",
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
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R21-PNG-07",
      "order": 7,
      "path": "output/playwright/r21-inputs-20261116-pilot/branch-commit-pull-request-390-dark-item0-x0-y0.png",
      "sha256": "3d66ab8d22fb0b23e8a6bd2f94beaa51468d1f2a3bfc793f0d3ec9faecae0468",
      "dimensions": {
        "width": 358,
        "height": 671
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-pilot/branch-commit-pull-request-390-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1491,
          "documentRange": [
            1601.453125,
            2273.34375
          ],
          "targetRange": [
            1601.453125,
            2273.34375
          ],
          "clip": {
            "x": 16,
            "y": 110.453125,
            "width": 358,
            "height": 671.890625
          }
        }
      }
    },
    {
      "id": "R21-PNG-08",
      "order": 8,
      "path": "output/playwright/r21-inputs-20261116-pilot/branch-commit-pull-request-390-dark-item0-x1-y0.png",
      "sha256": "f041f0466cfdb548b0d5eb35052decc03689f0de8295f245df31d1bf6b6b2eab",
      "dimensions": {
        "width": 358,
        "height": 671
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-pilot/branch-commit-pull-request-390-dark-item0-x1-y0.png",
          "label": "item0",
          "requestedScrollLeft": 190,
          "actualScrollLeft": 190,
          "pageScrollY": 1491,
          "documentRange": [
            1601.453125,
            2273.34375
          ],
          "targetRange": [
            1601.453125,
            2273.34375
          ],
          "clip": {
            "x": 16,
            "y": 110.453125,
            "width": 358,
            "height": 671.890625
          }
        }
      }
    },
    {
      "id": "R21-PNG-09",
      "order": 9,
      "path": "output/playwright/r21-inputs-20261116-pilot/branch-commit-pull-request-390-dark-item1-x0-y0.png",
      "sha256": "8da557fabd370ff237f2e5ebc56cf35f6fbfbd0c8293455e38a47f2cd4c9b6e2",
      "dimensions": {
        "width": 358,
        "height": 163
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-pilot/branch-commit-pull-request-390-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3454,
          "documentRange": [
            3564.09375,
            3727.59375
          ],
          "targetRange": [
            3564.09375,
            3727.59375
          ],
          "clip": {
            "x": 16,
            "y": 110.09375,
            "width": 358,
            "height": 163.5
          }
        }
      }
    },
    {
      "id": "R21-PNG-10",
      "order": 10,
      "path": "output/playwright/r21-inputs-20261116-pilot/branch-commit-pull-request-390-dark-item1-x1-y0.png",
      "sha256": "31564fe915bc5886314de077d0446e89225c5fa987156d2ec1dedbf0464a4681",
      "dimensions": {
        "width": 358,
        "height": 163
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-pilot/branch-commit-pull-request-390-dark-item1-x1-y0.png",
          "label": "item1",
          "requestedScrollLeft": 30,
          "actualScrollLeft": 30,
          "pageScrollY": 3454,
          "documentRange": [
            3564.09375,
            3727.59375
          ],
          "targetRange": [
            3564.09375,
            3727.59375
          ],
          "clip": {
            "x": 16,
            "y": 110.09375,
            "width": 358,
            "height": 163.5
          }
        }
      }
    },
    {
      "id": "R21-PNG-11",
      "order": 11,
      "path": "output/playwright/r21-inputs-20261116-pilot/branch-commit-pull-request-390-dark-item2-x0-y0.png",
      "sha256": "20c2e364b7813c685606c5fc1faee574f1fcf2da73cbbb3ca1e2ee925eacd470",
      "dimensions": {
        "width": 358,
        "height": 123
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-pilot/branch-commit-pull-request-390-dark-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 4516,
          "documentRange": [
            4626.453125,
            4749.453125
          ],
          "targetRange": [
            4626.453125,
            4749.453125
          ],
          "clip": {
            "x": 16,
            "y": 110.453125,
            "width": 358,
            "height": 123
          }
        }
      }
    },
    {
      "id": "R21-PNG-12",
      "order": 12,
      "path": "output/playwright/r21-inputs-20261116-pilot/branch-commit-pull-request-390-dark-item3-x0-y0.png",
      "sha256": "bf01e61b87a3a74ea92cab4d663dfa41775c6a36882730321db82ac46adeea2b",
      "dimensions": {
        "width": 358,
        "height": 513
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-pilot/branch-commit-pull-request-390-dark-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 7015,
          "documentRange": [
            7125,
            7638.546875
          ],
          "targetRange": [
            7124.625,
            7638.546875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 513.546875
          }
        }
      }
    },
    {
      "id": "R21-PNG-13",
      "order": 13,
      "path": "output/playwright/r21-inputs-20261116-pilot/branch-commit-pull-request-390-dark-item3-x1-y0.png",
      "sha256": "e115263e502cf04239f44736951d3e5e4be733e14db42be515e98d5c4acd5f4c",
      "dimensions": {
        "width": 358,
        "height": 513
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-pilot/branch-commit-pull-request-390-dark-item3-x1-y0.png",
          "label": "item3",
          "requestedScrollLeft": 90,
          "actualScrollLeft": 90,
          "pageScrollY": 7015,
          "documentRange": [
            7125,
            7638.546875
          ],
          "targetRange": [
            7124.625,
            7638.546875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 513.546875
          }
        }
      }
    },
    {
      "id": "R21-PNG-14",
      "order": 14,
      "path": "output/playwright/r21-inputs-20261116-pilot/undo-merge-conflict-release-1440-light-top.png",
      "sha256": "d12e16db68a11b8dc7675d5feaf1245cda5705fb20bb92fcb8f23e7b774c95de",
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
      "route": "09-git-github/undo-merge-conflict-release",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R21-PNG-15",
      "order": 15,
      "path": "output/playwright/r21-inputs-20261116-pilot/undo-merge-conflict-release-1440-light-item0-x0-y0.png",
      "sha256": "70b0f256b433f15c1e047894e7c2f6ee65d22b095540fd7b485ee5b1ec90990b",
      "dimensions": {
        "width": 788,
        "height": 460
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "route": "09-git-github/undo-merge-conflict-release",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-pilot/undo-merge-conflict-release-1440-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1063,
          "documentRange": [
            1173,
            1633.890625
          ],
          "targetRange": [
            1172.625,
            1633.890625
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 460.890625
          }
        }
      }
    },
    {
      "id": "R21-PNG-16",
      "order": 16,
      "path": "output/playwright/r21-inputs-20261116-pilot/undo-merge-conflict-release-1440-light-item1-x0-y0.png",
      "sha256": "ec313c353753b36d40443cd1d47afc6d4b43ae80a57de70915fe23a421425b7e",
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
      "route": "09-git-github/undo-merge-conflict-release",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-pilot/undo-merge-conflict-release-1440-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 5065,
          "documentRange": [
            5175,
            5568.46875
          ],
          "targetRange": [
            5174.96875,
            5568.46875
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 393.46875
          }
        }
      }
    },
    {
      "id": "R21-PNG-17",
      "order": 17,
      "path": "output/playwright/r21-inputs-20261116-pilot/undo-merge-conflict-release-390-dark-top.png",
      "sha256": "d31163e15729cedf75b9c7d348bbec0dd9781ab7c9de5a806e47b0cacea7bee4",
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
      "route": "09-git-github/undo-merge-conflict-release",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-pilot/observations.json",
        "capture": null
      }
    },
    {
      "id": "R21-PNG-18",
      "order": 18,
      "path": "output/playwright/r21-inputs-20261116-pilot/undo-merge-conflict-release-390-dark-item0-x0-y0.png",
      "sha256": "3d9a3494ce080ddf9f4ca6e1184b95662cb455b04e4e5fd9ab1dc9aae974449d",
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
      "route": "09-git-github/undo-merge-conflict-release",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-pilot/undo-merge-conflict-release-390-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1443,
          "documentRange": [
            1553,
            2277
          ],
          "targetRange": [
            1552.65625,
            2408.84375
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
      "id": "R21-PNG-19",
      "order": 19,
      "path": "output/playwright/r21-inputs-20261116-pilot/undo-merge-conflict-release-390-dark-item0-x0-y1.png",
      "sha256": "e4fe2fabc619ce7c73aae863da6b881c2205ce4163fd51c9ff8f3294b4365fa4",
      "dimensions": {
        "width": 358,
        "height": 181
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "09-git-github/undo-merge-conflict-release",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-pilot/undo-merge-conflict-release-390-dark-item0-x0-y1.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2117,
          "documentRange": [
            2227,
            2408.84375
          ],
          "targetRange": [
            1552.65625,
            2408.84375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 181.84375
          }
        }
      }
    },
    {
      "id": "R21-PNG-20",
      "order": 20,
      "path": "output/playwright/r21-inputs-20261116-pilot/undo-merge-conflict-release-390-dark-item0-x1-y0.png",
      "sha256": "fcd89a6b183a875805c21d1f4dd26f75d5f26b7421efa3f3621bc96117f4bc5c",
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
      "route": "09-git-github/undo-merge-conflict-release",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-pilot/undo-merge-conflict-release-390-dark-item0-x1-y0.png",
          "label": "item0",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 1443,
          "documentRange": [
            1553,
            2277
          ],
          "targetRange": [
            1552.65625,
            2408.84375
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
      "id": "R21-PNG-21",
      "order": 21,
      "path": "output/playwright/r21-inputs-20261116-pilot/undo-merge-conflict-release-390-dark-item0-x1-y1.png",
      "sha256": "99184cdae436ea89b283621a2a12c24d2cdb836c22e2683bcb945b35963f127d",
      "dimensions": {
        "width": 358,
        "height": 181
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "09-git-github/undo-merge-conflict-release",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-pilot/undo-merge-conflict-release-390-dark-item0-x1-y1.png",
          "label": "item0",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 2117,
          "documentRange": [
            2227,
            2408.84375
          ],
          "targetRange": [
            1552.65625,
            2408.84375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 181.84375
          }
        }
      }
    },
    {
      "id": "R21-PNG-22",
      "order": 22,
      "path": "output/playwright/r21-inputs-20261116-pilot/undo-merge-conflict-release-390-dark-item1-x0-y0.png",
      "sha256": "4666e579cee9b6dd7faf85279adc2a0decd1302ac8a734acc79bc1445ce3f1a5",
      "dimensions": {
        "width": 358,
        "height": 409
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "09-git-github/undo-merge-conflict-release",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-pilot/undo-merge-conflict-release-390-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 7984,
          "documentRange": [
            8094.171875,
            8503.671875
          ],
          "targetRange": [
            8094.171875,
            8503.671875
          ],
          "clip": {
            "x": 16,
            "y": 110.171875,
            "width": 358,
            "height": 409.5
          }
        }
      }
    },
    {
      "id": "R21-PNG-23",
      "order": 23,
      "path": "output/playwright/r21-inputs-20261116-pilot/undo-merge-conflict-release-390-dark-item1-x1-y0.png",
      "sha256": "d40bacc720ed0d46e1a5b09973e302ad9488adc753100a6e47434302bf8ed8a9",
      "dimensions": {
        "width": 358,
        "height": 409
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "route": "09-git-github/undo-merge-conflict-release",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-pilot/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-pilot/undo-merge-conflict-release-390-dark-item1-x1-y0.png",
          "label": "item1",
          "requestedScrollLeft": 350,
          "actualScrollLeft": 350,
          "pageScrollY": 7984,
          "documentRange": [
            8094.171875,
            8503.671875
          ],
          "targetRange": [
            8094.171875,
            8503.671875
          ],
          "clip": {
            "x": 16,
            "y": 110.171875,
            "width": 358,
            "height": 409.5
          }
        }
      }
    },
    {
      "id": "R21-PNG-24",
      "order": 24,
      "path": "output/playwright/r21-inputs-20261116-remaining/branch-commit-pull-request-1440-dark-top.png",
      "sha256": "32d1d8f1d1ffe2c5365a0577c615b924091b02e9c7fcd47c156e20e3c39f17f9",
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
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R21-PNG-25",
      "order": 25,
      "path": "output/playwright/r21-inputs-20261116-remaining/branch-commit-pull-request-1440-dark-item0-x0-y0.png",
      "sha256": "285901b9d8fb75562b9369aa4f56d1aa789debc99e6cf6228573cb522b60c61d",
      "dimensions": {
        "width": 788,
        "height": 460
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-remaining/branch-commit-pull-request-1440-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1035,
          "documentRange": [
            1145,
            1605.890625
          ],
          "targetRange": [
            1144.625,
            1605.890625
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 460.890625
          }
        }
      }
    },
    {
      "id": "R21-PNG-26",
      "order": 26,
      "path": "output/playwright/r21-inputs-20261116-remaining/branch-commit-pull-request-1440-dark-item1-x0-y0.png",
      "sha256": "1f10ca7848ce39dba116b9db4962df5d3aa2877749df10e019d000e7e1e25bef",
      "dimensions": {
        "width": 788,
        "height": 147
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-remaining/branch-commit-pull-request-1440-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2365,
          "documentRange": [
            2475,
            2622.15625
          ],
          "targetRange": [
            2474.65625,
            2622.15625
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 147.15625
          }
        }
      }
    },
    {
      "id": "R21-PNG-27",
      "order": 27,
      "path": "output/playwright/r21-inputs-20261116-remaining/branch-commit-pull-request-1440-dark-item2-x0-y0.png",
      "sha256": "bbe478288366899f4c24b804c5b83b6f6c95cabb5fd3a30ad243ceaa6e46ef95",
      "dimensions": {
        "width": 788,
        "height": 123
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-remaining/branch-commit-pull-request-1440-dark-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3140,
          "documentRange": [
            3250.421875,
            3373.421875
          ],
          "targetRange": [
            3250.421875,
            3373.421875
          ],
          "clip": {
            "x": 324,
            "y": 110.421875,
            "width": 788,
            "height": 123
          }
        }
      }
    },
    {
      "id": "R21-PNG-28",
      "order": 28,
      "path": "output/playwright/r21-inputs-20261116-remaining/branch-commit-pull-request-1440-dark-item3-x0-y0.png",
      "sha256": "745ea94e7c0d36140588a6ab0ab01c44d3e2f2b2bac5127421752877835a5874",
      "dimensions": {
        "width": 788,
        "height": 303
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-remaining/branch-commit-pull-request-1440-dark-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 4932,
          "documentRange": [
            5042.21875,
            5345.515625
          ],
          "targetRange": [
            5042.21875,
            5345.515625
          ],
          "clip": {
            "x": 324,
            "y": 110.21875,
            "width": 788,
            "height": 303.296875
          }
        }
      }
    },
    {
      "id": "R21-PNG-29",
      "order": 29,
      "path": "output/playwright/r21-inputs-20261116-remaining/branch-commit-pull-request-390-light-top.png",
      "sha256": "3b5d92eeb590378f79dd68de9a6d9a2f27f161d6fd4213724f1357f0642513a9",
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
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R21-PNG-30",
      "order": 30,
      "path": "output/playwright/r21-inputs-20261116-remaining/branch-commit-pull-request-390-light-item0-x0-y0.png",
      "sha256": "f77c0304fb323240e3e387e914a6760a76a593225c1cc8857a2425a3887c9a16",
      "dimensions": {
        "width": 358,
        "height": 671
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-remaining/branch-commit-pull-request-390-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1491,
          "documentRange": [
            1601.453125,
            2273.34375
          ],
          "targetRange": [
            1601.453125,
            2273.34375
          ],
          "clip": {
            "x": 16,
            "y": 110.453125,
            "width": 358,
            "height": 671.890625
          }
        }
      }
    },
    {
      "id": "R21-PNG-31",
      "order": 31,
      "path": "output/playwright/r21-inputs-20261116-remaining/branch-commit-pull-request-390-light-item0-x1-y0.png",
      "sha256": "f4a686a494f2409a79dcf28544c7d176594ee93ed107f7d8d5fe7fa758d667c3",
      "dimensions": {
        "width": 358,
        "height": 671
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-remaining/branch-commit-pull-request-390-light-item0-x1-y0.png",
          "label": "item0",
          "requestedScrollLeft": 190,
          "actualScrollLeft": 190,
          "pageScrollY": 1491,
          "documentRange": [
            1601.453125,
            2273.34375
          ],
          "targetRange": [
            1601.453125,
            2273.34375
          ],
          "clip": {
            "x": 16,
            "y": 110.453125,
            "width": 358,
            "height": 671.890625
          }
        }
      }
    },
    {
      "id": "R21-PNG-32",
      "order": 32,
      "path": "output/playwright/r21-inputs-20261116-remaining/branch-commit-pull-request-390-light-item1-x0-y0.png",
      "sha256": "fc28047a35e3b3003bfb758bbec979af08b5a7f0e5e58e6fd0a797e6bceebfbd",
      "dimensions": {
        "width": 358,
        "height": 163
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-remaining/branch-commit-pull-request-390-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 3454,
          "documentRange": [
            3564.09375,
            3727.59375
          ],
          "targetRange": [
            3564.09375,
            3727.59375
          ],
          "clip": {
            "x": 16,
            "y": 110.09375,
            "width": 358,
            "height": 163.5
          }
        }
      }
    },
    {
      "id": "R21-PNG-33",
      "order": 33,
      "path": "output/playwright/r21-inputs-20261116-remaining/branch-commit-pull-request-390-light-item1-x1-y0.png",
      "sha256": "ad38e68f1ed0788c086b9adc3c101eb7cd1793ddffbd5c71c999d63ce00b87aa",
      "dimensions": {
        "width": 358,
        "height": 163
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-remaining/branch-commit-pull-request-390-light-item1-x1-y0.png",
          "label": "item1",
          "requestedScrollLeft": 30,
          "actualScrollLeft": 30,
          "pageScrollY": 3454,
          "documentRange": [
            3564.09375,
            3727.59375
          ],
          "targetRange": [
            3564.09375,
            3727.59375
          ],
          "clip": {
            "x": 16,
            "y": 110.09375,
            "width": 358,
            "height": 163.5
          }
        }
      }
    },
    {
      "id": "R21-PNG-34",
      "order": 34,
      "path": "output/playwright/r21-inputs-20261116-remaining/branch-commit-pull-request-390-light-item2-x0-y0.png",
      "sha256": "709537645ca84e9fa66412e7d2f50b35445185411467432bf7907f91cce394a3",
      "dimensions": {
        "width": 358,
        "height": 123
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-remaining/branch-commit-pull-request-390-light-item2-x0-y0.png",
          "label": "item2",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 4516,
          "documentRange": [
            4626.453125,
            4749.453125
          ],
          "targetRange": [
            4626.453125,
            4749.453125
          ],
          "clip": {
            "x": 16,
            "y": 110.453125,
            "width": 358,
            "height": 123
          }
        }
      }
    },
    {
      "id": "R21-PNG-35",
      "order": 35,
      "path": "output/playwright/r21-inputs-20261116-remaining/branch-commit-pull-request-390-light-item3-x0-y0.png",
      "sha256": "9b233a5b03b4ae066ed77411361ce2772be9c75a770f44c78472485734df9a40",
      "dimensions": {
        "width": 358,
        "height": 513
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-remaining/branch-commit-pull-request-390-light-item3-x0-y0.png",
          "label": "item3",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 7015,
          "documentRange": [
            7125,
            7638.546875
          ],
          "targetRange": [
            7124.625,
            7638.546875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 513.546875
          }
        }
      }
    },
    {
      "id": "R21-PNG-36",
      "order": 36,
      "path": "output/playwright/r21-inputs-20261116-remaining/branch-commit-pull-request-390-light-item3-x1-y0.png",
      "sha256": "4c067da3e3d9a1223d45ed2a0e2a7897826ae92a5403eefff361eaa284338314",
      "dimensions": {
        "width": 358,
        "height": 513
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "09-git-github/branch-commit-pull-request",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-remaining/branch-commit-pull-request-390-light-item3-x1-y0.png",
          "label": "item3",
          "requestedScrollLeft": 90,
          "actualScrollLeft": 90,
          "pageScrollY": 7015,
          "documentRange": [
            7125,
            7638.546875
          ],
          "targetRange": [
            7124.625,
            7638.546875
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 513.546875
          }
        }
      }
    },
    {
      "id": "R21-PNG-37",
      "order": 37,
      "path": "output/playwright/r21-inputs-20261116-remaining/undo-merge-conflict-release-1440-dark-top.png",
      "sha256": "c1ecc4fab71f9a04e8484c8e0bd376e5d8305ba9bee2beef78d5032e2c7c2ca1",
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
      "route": "09-git-github/undo-merge-conflict-release",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R21-PNG-38",
      "order": 38,
      "path": "output/playwright/r21-inputs-20261116-remaining/undo-merge-conflict-release-1440-dark-item0-x0-y0.png",
      "sha256": "3f694ea9eda227517256915d2a73ebec5ae9384127a44dac54455df5df13f8e7",
      "dimensions": {
        "width": 788,
        "height": 460
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "route": "09-git-github/undo-merge-conflict-release",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-remaining/undo-merge-conflict-release-1440-dark-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1063,
          "documentRange": [
            1173,
            1633.890625
          ],
          "targetRange": [
            1172.625,
            1633.890625
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 460.890625
          }
        }
      }
    },
    {
      "id": "R21-PNG-39",
      "order": 39,
      "path": "output/playwright/r21-inputs-20261116-remaining/undo-merge-conflict-release-1440-dark-item1-x0-y0.png",
      "sha256": "006b947316372e29e64286b29b4e51e9683906850e6a5c384a5a26e51a97a1b3",
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
      "route": "09-git-github/undo-merge-conflict-release",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-remaining/undo-merge-conflict-release-1440-dark-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 5065,
          "documentRange": [
            5175,
            5568.46875
          ],
          "targetRange": [
            5174.96875,
            5568.46875
          ],
          "clip": {
            "x": 324,
            "y": 110,
            "width": 788,
            "height": 393.46875
          }
        }
      }
    },
    {
      "id": "R21-PNG-40",
      "order": 40,
      "path": "output/playwright/r21-inputs-20261116-remaining/undo-merge-conflict-release-390-light-top.png",
      "sha256": "c4fd29b700c7348e7b32abb7b009841c2c701e8b7ee836992b801cff0dcc03ce",
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
      "route": "09-git-github/undo-merge-conflict-release",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-remaining/observations.json",
        "capture": null
      }
    },
    {
      "id": "R21-PNG-41",
      "order": 41,
      "path": "output/playwright/r21-inputs-20261116-remaining/undo-merge-conflict-release-390-light-item0-x0-y0.png",
      "sha256": "ef7bcd8bd62876763eeb4ef9531312ba0a92d593fc2b97a5b4a3bc08ea340fc2",
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
      "route": "09-git-github/undo-merge-conflict-release",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-remaining/undo-merge-conflict-release-390-light-item0-x0-y0.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 1443,
          "documentRange": [
            1553,
            2277
          ],
          "targetRange": [
            1552.65625,
            2408.84375
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
      "id": "R21-PNG-42",
      "order": 42,
      "path": "output/playwright/r21-inputs-20261116-remaining/undo-merge-conflict-release-390-light-item0-x0-y1.png",
      "sha256": "4bfa31710b5e1df5c44d673b289805085c41857049a43e9e527a6dec6ff5e4ff",
      "dimensions": {
        "width": 358,
        "height": 181
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "09-git-github/undo-merge-conflict-release",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-remaining/undo-merge-conflict-release-390-light-item0-x0-y1.png",
          "label": "item0",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 2117,
          "documentRange": [
            2227,
            2408.84375
          ],
          "targetRange": [
            1552.65625,
            2408.84375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 181.84375
          }
        }
      }
    },
    {
      "id": "R21-PNG-43",
      "order": 43,
      "path": "output/playwright/r21-inputs-20261116-remaining/undo-merge-conflict-release-390-light-item0-x1-y0.png",
      "sha256": "60a23fe6c588d87103e8b2116032c46e09b527a24434c215cc90cc943afa6daa",
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
      "route": "09-git-github/undo-merge-conflict-release",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-remaining/undo-merge-conflict-release-390-light-item0-x1-y0.png",
          "label": "item0",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 1443,
          "documentRange": [
            1553,
            2277
          ],
          "targetRange": [
            1552.65625,
            2408.84375
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
      "id": "R21-PNG-44",
      "order": 44,
      "path": "output/playwright/r21-inputs-20261116-remaining/undo-merge-conflict-release-390-light-item0-x1-y1.png",
      "sha256": "a9fad533447437794c3d14b7709870f1d2e4b93fec9ae403f429adac9340e886",
      "dimensions": {
        "width": 358,
        "height": 181
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "09-git-github/undo-merge-conflict-release",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-remaining/undo-merge-conflict-release-390-light-item0-x1-y1.png",
          "label": "item0",
          "requestedScrollLeft": 154,
          "actualScrollLeft": 154,
          "pageScrollY": 2117,
          "documentRange": [
            2227,
            2408.84375
          ],
          "targetRange": [
            1552.65625,
            2408.84375
          ],
          "clip": {
            "x": 16,
            "y": 110,
            "width": 358,
            "height": 181.84375
          }
        }
      }
    },
    {
      "id": "R21-PNG-45",
      "order": 45,
      "path": "output/playwright/r21-inputs-20261116-remaining/undo-merge-conflict-release-390-light-item1-x0-y0.png",
      "sha256": "018b75ea576bb0103d3224703b12522d0447f977aa3b223dd95418f532961fd3",
      "dimensions": {
        "width": 358,
        "height": 409
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "09-git-github/undo-merge-conflict-release",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-remaining/undo-merge-conflict-release-390-light-item1-x0-y0.png",
          "label": "item1",
          "requestedScrollLeft": 0,
          "actualScrollLeft": 0,
          "pageScrollY": 7984,
          "documentRange": [
            8094.171875,
            8503.671875
          ],
          "targetRange": [
            8094.171875,
            8503.671875
          ],
          "clip": {
            "x": 16,
            "y": 110.171875,
            "width": 358,
            "height": 409.5
          }
        }
      }
    },
    {
      "id": "R21-PNG-46",
      "order": 46,
      "path": "output/playwright/r21-inputs-20261116-remaining/undo-merge-conflict-release-390-light-item1-x1-y0.png",
      "sha256": "74ef822d100b8b1e55a131b3d8f80e73239b0395658bb7d9da5ef77c4bf8c51d",
      "dimensions": {
        "width": 358,
        "height": 409
      },
      "kind": "table-or-prompt-scroll-segment",
      "viewport": {
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "route": "09-git-github/undo-merge-conflict-release",
      "provenance": {
        "method": "headed protected Edge page.screenshot",
        "observations": "output/playwright/r21-inputs-20261116-remaining/observations.json",
        "capture": {
          "path": "output/playwright/r21-inputs-20261116-remaining/undo-merge-conflict-release-390-light-item1-x1-y0.png",
          "label": "item1",
          "requestedScrollLeft": 350,
          "actualScrollLeft": 350,
          "pageScrollY": 7984,
          "documentRange": [
            8094.171875,
            8503.671875
          ],
          "targetRange": [
            8094.171875,
            8503.671875
          ],
          "clip": {
            "x": 16,
            "y": 110.171875,
            "width": 358,
            "height": 409.5
          }
        }
      }
    }
  ]
}
```
<!-- m5-r21-request:data:end -->
