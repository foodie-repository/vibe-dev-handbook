# R09 빌드·배포·도메인·DNS — 고정 검토 요청

기준 commit a5c8d16de3f242a63d11370e14713f0b862708f5, 입력 고정 2026-11-15. 대상 원고 전체와 아래 full_text_paths의 전체 텍스트·SVG/Mermaid·직접 근거, context_excerpts의 명시 범위만 읽습니다. 인접 장·참고편·템플릿은 일관성 문맥이며 해당 행 검토를 대신하지 않습니다. 발췌 밖 원문을 읽었다고 주장하지 않습니다.

Controller·작성자·이전 대화와 분리된 fresh gpt-6-astra/high 저장 세션을 사용합니다. 공식 ChatGPT 구독 경로를 프로세스에서만 적용하고 전역 인증/설정·API키·추가 크레딧·다른 과금은 금지합니다. 최초 history0, 실제 모델/effort·readOnly/network false·도구 미사용을 확인하고 같은 저장 ID와 실제 이력 복구로 후속 검토합니다. R02 승계 예외는 적용하지 않습니다.

공통 계약 C01~C12, 9항목18점·치명 항목과 한국어 결과 여섯 절을 적용합니다. 핵심 질문은 소스·빌드 산출물·배포·호스팅·DNS·HTTPS·사용자 흐름의 서로 다른 책임과 성공 증거를 구분할 수 있는가입니다. RFC8499의 RFC9499 대체, cache/TTL·이름 조회와 서비스 연결, 정적 site/base·환경 변수의 적용 시점, 로컬 선언과 실제 원격 성공, 복구 한계를 확인하세요. 모임 W-05는 R12 사례 전체 원문과 비교하되 해당 행 검토를 대신하지 않습니다. 인접 제품 표의 과거 날짜를 현재 확인으로 재사용하지 마세요. 시각 감사의 DNS 점선 설명과 실제 D→U topology의 일치도 판단하세요.

PNG18개는 R09 소비 경로의 과거 6상태×(viewport·다이어그램crop·인접문맥crop)입니다. 원고/SVG/MMD 3파일은 당시 입력과 바이트 동일합니다. 전체 페이지 이미지 6개를 전달한 것으로 계산하지 않습니다. PNG는 새로 캡처하거나 OCR로 대체하지 않고 localImage/detail:original로 실제 전달합니다. 모든 이미지 ID별 시각적 관측·판독 한계를 기록하세요. 과거 manifest의 pixel_review pending·Claude blocked는 당시 역사이며 현재 reviewer의 픽셀 검토를 대체하거나 현재 실행 blocker가 되지 않습니다. R01~R08의 기존 내용 검토는 반복하지 않습니다.

모든 도구·쓰기·셸·웹·MCP·플러그인·위임은 금지하고 응답만 반환하세요. 별도 제공한 준비 검사기/테스트는 원고 판정과 구분해 코드 C/I/M·체크포인트 적합성을 판단합니다. 입력 전 controller 해시 검사와 응답 후 감사는 별도 실행 증거입니다. 사실 확인 불가·입력 부족은 숨기지 않으며 준비 완료를 원고 PASS·review/ready·M5·공개 승인으로 계산하지 않습니다.

<!-- m5-r09-request:data:start -->
```json
{
  "schema_version": 1,
  "review_id": "R09",
  "baseline_commit": "a5c8d16de3f242a63d11370e14713f0b862708f5",
  "target": "src/content/docs/10-deployment-operations/build-deploy-domain-dns.md",
  "planned_profile": {
    "model": "gpt-6-astra",
    "reasoning_effort": "high"
  },
  "fresh": true,
  "persistent": true,
  "successor_exception": false,
  "full_text_paths": [
    "docs/project/reviews/public-beta-1/codex-review-contract.md",
    "src/content/docs/10-deployment-operations/build-deploy-domain-dns.md",
    "src/assets/diagrams/deploy-flow.svg",
    "src/assets/diagrams/source/deploy-flow.mmd",
    "research/public-beta-review-source-excerpts/r09-build-deploy-2026-11-15.md",
    "src/content/docs/10-deployment-operations/environment-variables-config.md",
    "src/content/docs/10-deployment-operations/logs-monitoring-backup.md",
    "src/content/docs/07-workflow-methods/code-review-ci-cd.md",
    "src/content/docs/reference/development-glossary.md",
    "src/content/docs/reference/agent-output-glossary.md",
    "research/meeting-webapp-case-brief.md",
    "src/content/docs/12-case-studies/first-full-stack-project.md",
    "astro.config.mjs",
    ".github/workflows/deploy.yml",
    "package.json",
    ".nvmrc",
    "docs/adr/0001-use-starlight-and-github-pages.md"
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
      "sha256": "2fc85322397d2bfc915e55dd380064bb3afd56b5905e804bc7de3547dabf74ef",
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
      "sha256": "6bd6c75395229ece85e8a720d48018ffeb2a303e828c988723eea5440fa89c1f",
      "segments": [
        {
          "start_line": 359,
          "end_line": 364,
          "text": "| `09-git-github/undo-merge-conflict-release.md` | https://git-scm.com/docs/git-tag.html, https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository | 2026-08-13, Git 공식 reference와 GitHub Docs 현재 공식 문서 | lightweight·annotated tag와 공유 tag 변경 주의, tag를 선택해 notes·binary files와 묶는 현재 GitHub Release 기능의 범위. tag·version·release·artifact·deployment를 같은 완료 상태로 보거나 GitHub 기능을 Git 자체·다른 호스팅 제품의 보편 절차로 확대하지 않음 |\n| `10-deployment-operations/build-deploy-domain-dns.md` | https://docs.astro.build/en/guides/deploy/github/ | 2026-08-04 | Astro 정적 빌드 결과의 GitHub Pages 배포 구조, 사이트 URL과 프로젝트 base path 설정 범위 |\n| `10-deployment-operations/build-deploy-domain-dns.md` | https://developer.mozilla.org/en-US/docs/Web/HTTP | 2026-08-04 | 사용자 URL에서 HTTPS 연결 뒤 HTTP 요청·응답으로 이어지는 전송 경계와 실제 응답 확인 범위 |\n| `10-deployment-operations/build-deploy-domain-dns.md` | https://www.rfc-editor.org/rfc/rfc1034.html, https://www.rfc-editor.org/info/rfc8499/ | 2026-08-13, RFC 1034 DNS 기본 개념과 RFC 8499 DNS 용어 문서 | 분산 이름 공간·resolver·authoritative name server·zone·resource record·cache와 query-response DNS 용어 범위. 1987년 RFC의 예시 값·구현 세부를 현재 공급자 설정으로 사용하거나 한 resolver 응답을 전체 인터넷의 즉시 상태로 확대하지 않음 |\n| `10-deployment-operations/build-deploy-domain-dns.md` | https://www.rfc-editor.org/info/rfc9110/, https://docs.astro.build/en/guides/deploy/github/ | 2026-08-13, IETF Standards Track RFC 9110과 Astro 현재 공식 가이드 | HTTPS URI의 host·service identity·기밀성·무결성 경계와 Astro 정적 build·GitHub Pages workflow·`site`·`base` 설정 범위. HTTPS를 애플리케이션 인가·데이터 정확성 보장으로, 로컬 build·workflow 존재를 실제 CI·배포·공개 URL 성공으로 확대하지 않음 |\n| `10-deployment-operations/environment-variables-config.md` | https://nodejs.org/api/environment_variables.html, https://docs.astro.build/en/guides/environment-variables/ | 2026-08-13, Node.js v26.5.1 현재 문서의 DotEnv Stability 2 Stable과 Astro 현재 공식 가이드 | 환경 변수·`.env` 파일의 이름·문자열 값과 Astro의 build-time·runtime 및 `PUBLIC_` 클라이언트 노출 경계 범위. Node.js의 `.env` 규격과 Astro의 로딩·노출 규칙을 다른 런타임·프레임워크의 보편 우선순위로 확대하지 않음 |"
        }
      ]
    },
    {
      "path": "research/public-beta-source-gap-register.md",
      "sha256": "eefe11c1c41b74d3e01fa11dd403426584c4bb18dddbe8c1ca3782e4d05025bd",
      "segments": [
        {
          "start_line": 38,
          "end_line": 40,
          "text": "| PBSG-004 | PB-037 `code-review-ci-cd.md`; PB-038 `incremental-delivery.md`; PB-041 `performance-security.md` | 사람 리뷰·CI·전달·배포 게이트, 작은 수직 조각, 성능 병목·위협·권한·비밀의 위험 기반 검증 | important | 2026-08-13 확인: Google Engineering Practices, Fowler CI·feature toggles, Agile Manifesto 원칙, GitHub 보호 브랜치·배포 환경, NIST SSDF 1.1·least privilege, OWASP threat modeling·input validation·secrets·logging, W3C User Timing·Resource Timing 초안과 Chrome·web.dev 성능 자료 | CI·호스팅 제품·보안 지침·웹 성능 표준 상태 변경 시와 다른 제품·임계값·위협 모델을 실제 채택할 때 재확인 | confirmed | Task 15 | 회사 관행·제품 설정·예시 성능 수치·보안 체크리스트를 모든 팀의 성공 공식으로 일반화하지 않고, 자동 검사 통과·보호 규칙 이름·보안 통제 존재를 사람 승인·사용자 성공·위험 제거 완료로 확대하지 않습니다. |\n| PBSG-005 | PB-047 `environment-variables-config.md` | 설정·환경 변수·비밀의 분리, 로딩 우선순위, 노출 방지·회전·복구 | important | 2026-08-13 확인: Node.js v26.5.1 환경 변수·DotEnv 공식 문서, Astro 현재 환경 변수 가이드, Vercel 현재 환경 변수 제품 문서, OWASP Secrets Management Cheat Sheet | 런타임·프레임워크·호스팅 제품·비밀 관리 지침이 바뀌거나 실제 배포 대상을 선택할 때 해당 버전·설정·권한을 재확인 | confirmed | Task 16 | 환경 변수라는 저장 위치만으로 비밀이 암호화·격리·회전된다고 단정하거나 Node.js·Astro·Vercel 한 제품의 로딩·노출·환경 범위를 다른 런타임·프레임워크·호스팅 환경에 적용하지 않습니다. |\n| PBSG-006 | PB-020 `developer-thinking.md` | 모호한 문제를 사실·가정·실패·증거로 분해하고 재현·가설·최소 변경·검증으로 좁히는 개발자 사고 절차 | normal | 소프트웨어공학의 문제 해결·디버깅·실험 설계를 다루는 표준 본문 또는 1차 교육·연구 자료 | 2026-08-13 확인; 인용한 문서 상태나 적용 범위 변경 시 재확인 | confirmed | Task 12 | 한 문제 해결 순서를 모든 장애·조직·도메인에 맞는 유일한 개발 절차로 제시하지 않습니다. |"
        },
        {
          "start_line": 53,
          "end_line": 55,
          "text": "| PBSG-019 | PB-053 `analytics-dashboard-case-study.md` | 실제 시장 데이터를 후속 채택할 때 상품·시세·조정 방식·거래일·시간대·원천 버전·이용 조건·재배포 권리를 함께 검증하는 계약 | critical | 2026-08-13 KRX 공식 거래 가이드·호가 공개 페이지에서 특정 거래 시간·단위·호가 공개 항목은 확인했으나 실제 제공자·데이터를 채택하지 않았고 전체 필드 정의·corporate action 조정·시간대·원천 버전·이용 약관·라이선스·수집/가공/재배포 허용 묶음은 직접 확인하지 못함 | 실제 원천 채택이 별도 승인될 때 해당 제공자·거래소의 현재 공식 계약 전체를 확인하고 Task 25 권리 감사·공개 직전에 재확인 | not-confirmed | Task 25; 실제 원천 채택 별도 승인 범위 | `EDU-FIXTURE`를 실제 시장 사실·투자 판단 근거로 쓰거나 KRX의 특정 공개 항목·조회 가능성을 수집·가공·재배포 허용으로 해석하지 않습니다. |\n| PBSG-020 | PB-054 `first-full-stack-project.md` | 선택한 데이터베이스·런타임·배포 환경에서 정원 동시성, 고유성, 마이그레이션, 로그, 백업·복원의 구체 구현과 운영 보장 | important | source-map의 확인된 OpenAPI·OWASP·PostgreSQL 범위와 2026-08-13 Task 8의 선택적 제품 예시가 있으나, Task 18은 제품 조합·계정·데이터베이스·런타임·배포 환경을 채택하거나 구현·시험하지 않음 | 실제 제품 조합과 구현 범위가 별도 승인되고 대상 제품·버전의 공식 문서와 동시성·마이그레이션·로그·격리 복원 실행 증거가 생길 때 재확인 | not-confirmed | Task 18 이후 별도 승인 범위 | 현재 제품 중립 교육 범위 밖입니다. PostgreSQL 또는 Supabase·Vercel·Codex Sites 예시를 채택·계정·실제 구현·운영 보장으로 확대하지 않으며 Task 18의 문서·로컬 브라우저 검증으로 닫지 않습니다. |\n| PBSG-021 | PB-021 `software-is-a-system.md` | component·responsibility·boundary의 세부 의미, 캐시 사본의 최신성, 정적 전달이 충분한 조건과 브라우저 개발자 도구의 현재 명칭 | important | 소프트웨어 아키텍처 표준·SWEBOK 세부 자료, HTTP 캐시 표준, 웹 플랫폼·브라우저의 공식 정적 전달 및 개발자 도구 문서 | 2026-08-13 확인; 브라우저·웹 플랫폼 문서 상태 또는 예시 도구 변경 시 재확인 | confirmed | Task 12 | 여섯 렌즈를 업계 표준 분류로 만들거나 한 브라우저의 도구 이름·캐시 표시·정적 전달 조건을 모든 브라우저와 시스템에 일반화하지 않습니다. |"
        },
        {
          "start_line": 68,
          "end_line": 70,
          "text": "| PBSG-004 | VERCEL-BUILD-01, VERCEL-DEPLOY-01, VERCEL-LOG-01, VERCEL-ROLLBACK-01 | Vercel의 build·deployment URL·build/runtime log·routing-layer rollback | 2026-08-13 Task 15에서 CI·사람 리뷰·작은 수직 조각·위협·성능·보안의 제품 중립 공식·1차 자료를 추가 확인해 `confirmed`; Vercel 행은 여전히 제품별 build·deployment·routing 범위로만 사용 | 실제 Vercel 설정을 채택하면 GitHub·Vercel의 현재 플랜·보호·승인·복구 경계를 다시 확인 |\n| PBSG-005 | SUPA-KEY-01, VERCEL-ENV-01, SITES-RUNTIME-01 | 세 제품의 공개 키·서버 비밀·배포별 환경 설정이라는 제품 경계 | 2026-08-13 Task 16에서 Node.js·Astro·Vercel·OWASP 직접 근거로 config·환경 변수·비밀, 로딩·노출·회전·유출 복구의 제품 중립 경계를 확인해 `confirmed`; 세 제품 행은 각각의 좁은 공개 기능 범위로만 사용 | 실제 배포 대상을 채택하면 해당 런타임·프레임워크·호스팅의 현재 precedence·권한·회전 절차를 재확인 |\n| PBSG-012 | SUPA-OPS-01, VERCEL-ROLLBACK-01, SITES-ROLLBACK-01 | Supabase DB backup이 Storage 객체를 제외한다는 범위, Vercel routing rollback, Sites rollback의 미확인 경계 | 2026-08-13 Task 16에서 NIST·CISA 직접 지침으로 RPO·RTO·격리 백업·복원 시험·인시던트의 제품 중립 경계를 확인해 `confirmed`; 실제 데이터·산출물 복구 성공과 Sites rollback 기능은 확인하지 않음 | Task 18·25에서 실제 저장소·데이터베이스·산출물 저장소를 선택하면 해당 공식 문서와 승인된 격리 복원 증거를 별도 확보 |"
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
          "start_line": 159,
          "end_line": 161,
          "text": "|---|---|---|\n| PBCA-003 | PBSG-001, PBSG-002, PBSG-003, PBSG-004, PBSG-005 | Task 12; Task 13; Task 14; Task 15; Task 16 |\n| PBCA-004 | PBSG-007, PBSG-008, PBSG-009, PBSG-010 | Task 10; Task 14; Task 15; Task 16; Task 17 |"
        },
        {
          "start_line": 168,
          "end_line": 170,
          "text": "\nPBCA-001은 출처 공백이 아니라 폐기 사례 잔존 finding이므로 위 의미 감사와 Task 9에 연결합니다. PBSG-019는 실제 시장 데이터·권리, PBSG-026은 현재 교육용 데이터 개념의 출처 공백으로 서로 분리합니다. PBSG-020은 모임 캡스톤에서 실제 제품 세부를 채택할 경우 닫아야 하는 선제 공백입니다. Task 11은 탐색·내비게이션 정렬 작업이라 이번 SOURCE 주장 묶음의 목표 작업으로 배정하지 않습니다.\n"
        }
      ]
    },
    {
      "path": "src/content/docs/reference/current-tool-mapping.md",
      "sha256": "c0cf7e7561b1b6f5bbfe0ac659ee72d93d8cce24004f57c26172cd85245d5922",
      "segments": [
        {
          "start_line": 1,
          "end_line": 14,
          "text": "---\ntitle: \"현재 도구 매핑: Supabase·Vercel·ChatGPT Sites\"\ndescription: \"오래가는 개발 책임과 2026-08-20에 다시 확인한 제품 동작을 분리해 읽는 참고 페이지입니다.\"\ncontentStatus: draft\naudience:\n  - 바이브 코딩을 하는 비개발자\nlearningObjectives:\n  - 제품 이름이 바뀌어도 남는 데이터·권한·실행·배포·복구 책임을 설명한다\n  - 확인일·문서 상태·확인 실패를 보고 현재 제품 예시의 유효 범위를 판단한다\n  - 직접 근거, 사용자 결정, 일반화 금지선을 구분한다\nsidebar:\n  order: 6\n---\n"
        },
        {
          "start_line": 60,
          "end_line": 95,
          "text": "| SUPA-API-01 · confirmed | 서버 실행과 API | 데이터베이스 스키마에서 Data REST API가 자동 생성되며 브라우저 직접 접근 구조와 별도 API 서버 구조에 사용할 수 있습니다. | 입력 검증·업무 규칙·인가·API 호환성 책임을 둘 경계 | [Data API 개요](https://supabase.com/docs/guides/api) · checked_at 2026-08-20 · 공식 현재 비버전 문서 | 자동 생성 API가 업무 규칙·입력 검증·권한·버전 호환성을 모두 대신하지 않습니다. |\n| SUPA-SERVER-01 · limited | 서버 실행과 API | Edge Functions는 Deno 호환 TypeScript 서버 함수이고 짧고 멱등적인 작업에 맞으며, 무거운 장시간 작업은 별도 워커 경계가 필요합니다. | 짧은 요청 작업과 큐·워커로 분리할 작업, 실패·재시도 계약 | [Edge Functions](https://supabase.com/docs/guides/functions) · checked_at 2026-08-20 · 공식 현재 비버전 문서 | 함수 지원을 범용 장기 실행 서버·큐·워커·모든 백엔드 운영 책임으로 확대하지 않습니다. |\n| SUPA-MIG-01 · confirmed | 빌드와 아티팩트 | SQL 파일로 스키마 변경을 추적하며, 원격에서 직접 바꾼 변경은 로컬 마이그레이션 이력에 자동 반영되지 않습니다. | 변경 검토·적용 순서·하위 호환성·실패 복구와 실제 원격 상태 대조 | [데이터베이스 마이그레이션](https://supabase.com/docs/guides/deployment/database-migrations) · checked_at 2026-08-20 · 공식 현재 비버전 문서 | 마이그레이션 파일이 적용 성공·데이터 호환성·백업·복원을 자동 증명하지 않습니다. |\n| SUPA-OPS-01 · limited | 운영과 복구 | 플랜별 데이터베이스 백업 조건이 다르며 데이터베이스 백업에 Storage API의 파일 객체는 포함되지 않습니다. | 플랜 확인, 보존·격리·RPO·RTO, Storage 객체 백업과 실제 복원 시험 | [데이터베이스 백업](https://supabase.com/docs/guides/platform/backups) · checked_at 2026-08-20 · 공식 현재 비버전 문서 | 백업 기능을 전체 데이터 복구·복원 시험·배포 롤백 성공으로 간주하지 않습니다. |\n| SUPA-LOG-01 · limited | 운영과 복구 | 서비스별 로그를 조회할 수 있고, 로그 보존 기간과 백엔드는 플랜과 프로젝트 생성 시점 등 조건에 따라 달라질 수 있습니다. | 개인정보·비밀 제외, 요청 상관관계, 보존 조건과 복구 오라클 | [로그](https://supabase.com/docs/guides/monitoring-and-debugging/logs) · checked_at 2026-08-20 · 공식 현재 비버전 문서 | 로그 한 줄이 권위 상태·근본 원인·모든 사용자 영향·복구 성공을 단독 증명하지 않습니다. |\n| SUPA-KEY-01 · confirmed | 인증과 인가 | publishable key는 공개 애플리케이션에 사용할 수 있지만 secret key는 백엔드 전용이고 RLS를 우회합니다. 문서는 legacy key의 단계적 대체 조건도 설명합니다. | 최소 권한·비밀 저장·회전·유출 대응과 프로젝트의 실제 key 상태 | [API 키](https://supabase.com/docs/guides/getting-started/api-keys) · checked_at 2026-08-20 · 공식 현재 비버전 문서 | 공개 키 사용 가능성이 RLS 정확성·서버 비밀 보호·브라우저 데이터 접근 안전을 보장하지 않습니다. |\n\n## Vercel: 이번 확인에서 닫지 못한 현재 주장\n\nVercel 공식 문서의 여덟 URL은 2026-08-20 직접 열기에서 모두 `HTTP 400 Unsupported content-type: text/markdown`으로 실패했습니다. 검색 결과 요약과 제3자 문서는 직접 근거로 사용하지 않았습니다. 따라서 2026-08-13은 **마지막 성공 확인일**이라는 역사만 남기고, 당시 제품 설명을 2026-08-20 현재 동작으로 갱신하거나 재게시하지 않습니다.\n\n| 주장 ID·상태 | 영속 책임 | 이번 확인 결과 | 마지막 성공 확인 | 공식 URL | 일반화 금지선 |\n|---|---|---|---|---|---|\n| VERCEL-BUILD-01 · fresh-check-failed | 빌드와 아티팩트 | 2026-08-20 직접 열기 실패, 현재 주장 not-confirmed | 2026-08-13 | [Builds](https://vercel.com/docs/builds) | 과거 확인을 현재 빌드 동작·아티팩트 형식·배포 성공의 증거로 쓰지 않습니다. |\n| VERCEL-RUNTIME-01 · fresh-check-failed | 서버 실행과 API | 2026-08-20 직접 열기 실패, 현재 주장 not-confirmed | 2026-08-13 | [Functions](https://vercel.com/docs/functions) | 과거 확인을 현재 런타임·지역·실행 제한 또는 범용 백엔드 보장으로 쓰지 않습니다. |\n| VERCEL-ENV-01 · fresh-check-failed | 빌드와 아티팩트 | 2026-08-20 직접 열기 실패, 현재 주장 not-confirmed | 2026-08-13 | [환경 변수](https://vercel.com/docs/environment-variables) | 과거 확인을 현재 환경별 적용·비밀 보호·기존 배포 반영의 증거로 쓰지 않습니다. |\n| VERCEL-DEPLOY-01 · fresh-check-failed | 호스팅과 공개 주소 | 2026-08-20 직접 열기 실패, 현재 주장 not-confirmed | 2026-08-13 | [Deployments](https://vercel.com/docs/deployments) | 과거 확인을 현재 URL 생성·Git 연동·실제 배포 또는 공개 성공의 증거로 쓰지 않습니다. |\n| VERCEL-DOMAIN-01 · fresh-check-failed | 호스팅과 공개 주소 | 2026-08-20 직접 열기 실패, 현재 주장 not-confirmed | 2026-08-13 | [SSL과 도메인](https://vercel.com/docs/domains/working-with-ssl) | 과거 확인을 현재 DNS·인증서·HTTPS 성공의 증거로 쓰지 않습니다. |\n| VERCEL-LOGS-01 · fresh-check-failed | 운영과 복구 | 2026-08-20 직접 열기 실패, 현재 주장 not-confirmed | 2026-08-13 | [Logs](https://vercel.com/docs/logs) | 과거 확인을 현재 로그 종류·보존·권위 상태 또는 복구 성공의 증거로 쓰지 않습니다. |\n| VERCEL-ROLLBACK-01 · fresh-check-failed | 운영과 복구 | 2026-08-20 직접 열기 실패, 현재 주장 not-confirmed | 2026-08-13 | [Production Rollback](https://vercel.com/docs/deployments/rollback-production-deployment) | 과거 확인을 현재 코드 라우팅·데이터·스키마·환경·외부 상태의 복구 보장으로 쓰지 않습니다. |\n| VERCEL-DATA-01 · fresh-check-failed | 관계형 데이터 저장 | 2026-08-20 직접 열기 실패, 현재 주장 not-confirmed | 2026-08-13 | [Marketplace Storage](https://vercel.com/docs/marketplace-storage) | 과거 확인을 현재 공급자 연결·자격 증명 주입·데이터베이스 내장의 증거로 쓰지 않습니다. |\n\n이 실패는 기능 부재 판정도, 기존 설명이 틀렸다는 판정도 아닙니다. release candidate에서 최신 공식 근거를 닫지 못했다는 증거 경계입니다. 사용자는 Vercel을 선택하기 전에 해당 공식 문서를 접근 가능한 환경에서 다시 열고 플랜·계정·프로젝트 조건을 확인해야 합니다.\n\n## ChatGPT Sites: public beta에서 직접 확인한 예시와 미확인 경계\n\n공식 제품명은 현재 **Sites – ChatGPT**이며 public beta입니다. 공식 안내는 Plus·Pro·Business·Enterprise·Edu와 단계적 rollout, 플랜별 사용량, workspace 관리 같은 조건을 둡니다. 아래 기능을 이 저장소가 실제로 사용할 수 있다는 뜻은 아니며, 계정 접근·프로젝트 생성·설정 변경·배포·공개 URL 확인은 수행하지 않았습니다.\n\n| 주장 ID·상태 | 영속 책임 | 날짜가 붙은 제품 동작 또는 미확인 경계 | 사용자 결정 | 직접 근거 | 일반화 금지선 |\n|---|---|---|---|---|---|\n| SITES-VERSION-01 · limited | 빌드와 아티팩트 | 저장한 version과 배포가 분리되며 로컬 소스 프로젝트에서는 저장된 version에 Git commit을 연결합니다. | 기준 commit·의존성·빌드 명령·검증 결과와 실제 배포 승인 | [Sites 개발자 문서](https://learn.chatgpt.com/docs/sites) · checked_at 2026-08-20 · 공식 현재 비버전 public beta 문서 | Git commit 연결이 재현 가능한 빌드·의존성 고정·소스 검토·마이그레이션 안전을 증명하지 않습니다. |\n| SITES-ARTIFACT-01 · not-confirmed | 빌드와 아티팩트 | 공식 공개 문서는 호환되는 deployment artifact를 언급하지만 정확한 입력 아카이브의 파일 구성·매니페스트·포함·제외 규칙을 닫지 않습니다. | 실제 입력 계약을 별도 공식 근거로 확인하기 전 게시하지 않기 | [Sites 개발자 문서](https://learn.chatgpt.com/docs/sites) · checked_at 2026-08-20 · 공식 현재 비버전 public beta 문서 | 문서의 artifact 언급을 정확한 아카이브 계약이나 재현 가능한 빌드 보장으로 확대하지 않습니다. |\n| SITES-HOST-01 · limited | 호스팅과 공개 주소 | 배포마다 production URL이 생기며 version 저장, 배포, 방문자 공유 범위는 서로 다른 결정입니다. | 공개 대상·공유 범위·개인정보 검토·실제 방문자 흐름과 공개 승인 | [Sites 개발자 문서](https://learn.chatgpt.com/docs/sites), [Sites 도움말](https://help.openai.com/en/articles/20001339-creating-and-managing-chatgpt-sites) · checked_at 2026-08-20 · 개발자 문서는 현재 비버전 public beta, 도움말은 페이지에 `Updated: 4 days ago` 표시 | URL 생성 설명을 이 저장소의 배포·공개 주소·올바른 접근 설정·사용자 흐름 성공으로 바꾸지 않습니다. |\n| SITES-RUNTIME-01 · limited | 서버 실행과 API | 지원되는 웹 구조와 D1 관계형 데이터·R2 객체 저장을 제공하지만 지원되지 않는 framework·network·database·background service·hosting pattern이 있습니다. | framework 적합성, 데이터·비밀·네트워크·장시간 작업과 대체 실행 환경 | [Sites 개발자 문서](https://learn.chatgpt.com/docs/sites) · checked_at 2026-08-20 · 공식 현재 비버전 public beta 문서 | Sites를 임의 서버 런타임·사설망·외부 데이터베이스·워커·모든 프레임워크의 범용 환경으로 등치하지 않습니다. |\n| SITES-DOMAIN-01 · limited | 호스팅과 공개 주소 | custom domain은 계정·workspace 조건을 따르며 사용자가 소유한 도메인의 DNS를 바꿀 수 있어야 합니다. 공식 도움말은 launch 시 Enterprise에서는 custom domain을 사용할 수 없다고 설명합니다. | 실제 제공 여부, 도메인 소유·DNS·HTTPS와 공개 응답 검증 | [Sites 개발자 문서](https://learn.chatgpt.com/docs/sites), [Sites 도움말](https://help.openai.com/en/articles/20001339-creating-and-managing-chatgpt-sites) · checked_at 2026-08-20 · 공식 current public beta 안내 | custom domain이 모든 플랜·지역·workspace에서 제공되거나 연결과 HTTPS가 자동 완료된다고 보지 않습니다. |\n| SITES-ROLLBACK-01 · not-confirmed | 운영과 복구 | 저장된 version을 나열·검사하고 선택해 배포할 수 있다는 설명은 있지만, 이름 붙은 이전 production rollback·restore와 데이터·환경·외부 상태의 복구 보장은 공개 근거로 닫히지 않았습니다. | 코드·데이터·환경·비밀·외부 서비스별 복구 계약과 실제 복원 시험 | [Sites 개발자 문서](https://learn.chatgpt.com/docs/sites), [Sites 도움말](https://help.openai.com/en/articles/20001339-creating-and-managing-chatgpt-sites) · checked_at 2026-08-20 · 공식 current public beta 안내 | version 재배포 가능성을 운영 롤백·삭제 복구·전체 상태 복원 성공으로 확대하지 않습니다. 도움말은 삭제한 Site를 복원할 수 없다고 설명합니다. |"
        },
        {
          "start_line": 154,
          "end_line": 159,
          "text": "- **Supabase:** 9개 주장 URL을 2026-08-20 직접 열었습니다. 모두 공식 현재 비버전 문서이며 페이지 버전은 표시되지 않았습니다. 기능별 플랜·프로젝트 생성 시점·key 전환 조건은 각 행에 남겼습니다.\n- **Vercel:** 8개 공식 URL을 2026-08-20 직접 열지 못했습니다. 오류는 모두 `HTTP 400 Unsupported content-type: text/markdown`이었고, 2026-08-13은 마지막 성공 확인 역사일 뿐 현재 확인일이 아닙니다.\n- **ChatGPT Sites:** 개발자 문서와 도움말을 2026-08-20 직접 열었습니다. 개발자 문서는 현재 비버전 public beta, 도움말은 페이지에 `Updated: 4 days ago`라고 표시됐습니다. 이 상대 표시를 임의의 절대 갱신일로 바꾸지 않습니다.\n- **Codex와 Claude Code:** 위 표의 공식 문서를 2026-08-20 직접 열었습니다. 제품별 명칭·지원 OS·profile·fallback·계정 조건을 다른 제품이나 모든 실행 환경으로 확대하지 않습니다.\n\n이번 확인은 읽기 전용 공식 문서 대조입니다. 계정 접근, 제품 채택, 프로젝트 생성, 설정 변경, 구현, 배포, 공개 URL 확인, rollback·restore 실행은 하지 않았습니다. 조사 계약과 주장별 세부 범위는 저장소의 `research/current-tool-mapping-research-brief.md`와 `research/source-map.md`에서 관리합니다."
        }
      ]
    },
    {
      "path": "docs/project/public-beta-content-audit.md",
      "sha256": "5b9bbec64eca339ee0b0a3c82be50c262120d6fe493c57e7963f79dc9215a608",
      "segments": [
        {
          "start_line": 72,
          "end_line": 74,
          "text": "| PB-045 | `src/content/docs/09-git-github/undo-merge-conflict-release.md` | core | 변경 취소·충돌 해결·릴리스를 어떻게 안전하게 다루는가? | 되돌리기 범위와 공유 이력·릴리스 증거를 판단한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 5; Task 16 | 미커밋·staged·로컬 전용·공유·릴리스·운영 상태를 먼저 분류하고 restore·revert·reset·rebase의 손실 경계, 충돌 의도 통합, tag·version·release·deploy와 모임 복구 불변식을 Git·GitHub 공식 문서에 연결해 PBSG-009를 닫았습니다. |\n| PB-046 | `src/content/docs/10-deployment-operations/build-deploy-domain-dns.md` | core | 소스가 공개 서비스가 되기까지 어떤 단계와 증거가 필요한가? | build·release·deploy·hosting·domain·DNS를 구분한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 16; Task 20 resolved | source commit→artifact→deployment→DNS·HTTPS→사용자→운영의 식별자와 직접 증거, 정적·동적 책임과 local·CI·deployed 경계를 DNS·HTTP 표준 및 Astro 공식 가이드에 연결했습니다. deploy 그림 topology·marker·390px 판독성은 Task 20 `9fe4bb7`과 실제 Chrome 6상태·Codex `PASS`로 교정됐습니다. |\n| PB-047 | `src/content/docs/10-deployment-operations/environment-variables-config.md` | core | 환경 변수·설정·비밀을 어떻게 분리하고 검증하는가? | 환경별 설정과 비밀 노출·회전 위험을 판단한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 5; Task 16 | config·환경 변수·secret, build-time·runtime, local·preview·production 경계를 분리하고 필수값·타입·범위·기본값·fail-fast 검증, client 노출 검사, 회전·폐기·유출 복구를 Node.js·Astro·Vercel·OWASP 직접 근거와 명백한 가짜 예시에 연결해 PBSG-005를 닫았습니다. 실제 제품 설정·비밀·계정·배포 성공은 주장하지 않습니다. |"
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
      "sha256": "4dc0b46dbef32d69fc9b4b6442622cf762a65c165213e155f8fc9fd6cfa15f77",
      "segments": [
        {
          "start_line": 17,
          "end_line": 30,
          "text": "|---|---|---|---|---|---|---:|---:|---|---|---|---|---|---|---|---|\n| PBV-01 `learning-map` | `src/assets/diagrams/learning-map.svg` | `src/assets/diagrams/source/learning-map.mmd` | PB-001 `index.md` | 시스템 사고부터 AI 네이티브까지 어떤 순서로 배우는가? | 세로 권장 단계 흐름 | 7 | 6 | 같은 위계 1그룹 | 고유 title/desc·alt·앞 질문/뒤 강제 선행·숙련 비증명 범위 일치. | `480×960`, viewBox·width·height 일치 | 2026-08-28 실제Chrome6상태, mobile358×716px core20.88/detail17.9/note14.92px 판독·잘림0. 이전보다 약600px 길어진 절충. | 명시light/dark marker2와 선이 일치하고 번호·실선 범례를 유지합니다. | reflow | diagram-design | `e43d112`; Codex `PASS` C0/I0/M0; PBVA-003·004 자산 조건 충족; Claude pending |\n| PBV-02 `analytics-dashboard-architecture` | `src/assets/diagrams/analytics-dashboard-architecture.svg` | `src/assets/diagrams/source/analytics-dashboard-architecture.mmd` | PB-021 `software-is-a-system.md`; PB-053 `analytics-dashboard-case-study.md` | fixture/승인 원천이 품질·저장·전달·UI·운영 증거로 어떻게 이어지는가? | 세로 단계+피드백 | 7 | 7 | 품질·UI 2그룹 | 고유 title·desc·role·aria, 기존 두 alt와 앞뒤 원고의 책임·한계는 불변입니다. | `560×1108`, viewBox·width·height 일치 | 2026-08-28 실제 Chrome12상태: 모바일358×708px, 핵심 약14.7px·보조 약11.5px를 원본 크기로 판독했습니다. | explicit light/dark marker4와 주 흐름·점선 피드백·박스·글자가 전환됩니다. | reflow | diagram-design | `aa13701`; Codex `PASS` C0/I0/M0; PBVA-004 자산 조건 충족; Claude pending |\n| PBV-03 `api-database-auth-flow`; `api-database-auth-sequence` | `src/assets/diagrams/api-database-auth-flow.svg`; `src/assets/diagrams/api-database-auth-sequence.svg` | `src/assets/diagrams/source/api-database-auth-flow.mmd`; `src/assets/diagrams/source/api-database-auth-sequence.mmd` | PB-028 `api-database-auth.md` | 개요: 정상 참가 요청의 책임은 어떤 순서인가? 상세: 마지막 한 자리 동시 요청과 commit 뒤 응답 유실을 어떻게 안전하게 재확인하는가? | 세로 단계 흐름; 4-lifeline sequence+parallel frame | 개요 7; 상세 4 lifeline·12정보 단위(11 message+병렬 frame) | 개요 6; 상세 11 message | 개요 정상 책임 1그룹; 상세 동시성·복구 2그룹 | 두 SVG에 고유 title·desc가 있고 두 alt와 앞뒤 설명은 서로 다른 질문·비증명 범위를 설명합니다. | 개요 `560×772`; 상세 `688×960`, viewBox·width·height 일치 | 358×494px 개요 핵심 글자 약 14px, 358×500px 상세 핵심 약 12px·보조 약 10px로 확대 없이 읽을 수 있습니다. | 두 SVG의 선·글자와 explicit light/dark marker fill이 테마에 맞게 전환되며 병렬 시작은 frame·레이블, 유실은 점선·`×`로도 구분됩니다. | keep | diagram-design; Archify 미사용(상세는 4 lifeline sequence, Node.js v26) | Task 20 PBVA-001 resolved; Fix1 `1d19c15`; same-reviewer PASS C0/I0/M0 |\n| PBV-04 `context-harness-loop` | `src/assets/diagrams/context-harness-loop.svg` | `src/assets/diagrams/source/context-harness-loop.mmd` | PB-050 `context-spec-harness-loop.md` | 의도·스펙·컨텍스트·하네스·루프·증거·문맥 갱신은 어떤 책임 관계인가? | 혼합 관계 흐름 | 7 | 6 | 컨텍스트/하네스 수렴 | 고유title/desc·원고 질문/alt/뒤 책임과 한계 설명 일치·원고 불변. | `480×1160`, viewBox·width·height 일치 | Chrome6/6·358×865.2px·core20.88/detail17.9/note14.92·그림/상단/문맥/full배치 확인. | 명시marker2·실제양테마6연결·focused178/XML/full/Chrome 통과. | replace | diagram-design | `750a8e3`; Codex `PASS` C0/I0/M0; PBVA-002·003·004 자산 조건 충족; Claude pending |\n| PBV-05 `deploy-flow` | `src/assets/diagrams/deploy-flow.svg` | `src/assets/diagrams/source/deploy-flow.mmd` | PB-046 `build-deploy-domain-dns.md` | 소스·빌드·아티팩트·호스팅·이름 연결·사용자의 책임은 무엇인가? | 콘텐츠 흐름과 이름 조회 분리 | 6 | 5 | 아티팩트·사용자 2그룹 | 고유title/desc·alt·앞질문/뒤실제성공비증명 계약 일치. | `560×1008`, viewBox·width·height 일치 | 2026-08-28 실제Chrome6상태, mobile358×644px core17.9/detail15.34/note12.79px 판독. 세로약534px 증가 절충. | 콘텐츠 실선4·조회 점선1·marker4의 양테마 가시색이 일치합니다. | reflow | diagram-design | `9fe4bb7`; Codex `PASS` C0/I0/M0; PBVA-002·003·004 자산 조건 충족; Claude pending |\n| PBV-06 `full-stack-flow` | `src/assets/diagrams/full-stack-flow.svg` | `src/assets/diagrams/source/full-stack-flow.mmd` | PB-025 `client-server-full-stack.md`; PB-027 `http-request-response.md`; PB-032 `browser-dom-rendering.md` | 사용자 요청·응답이 프런트엔드·백엔드·저장소·외부 서비스 경계를 어떻게 오가는가? | 세로 왕복·백엔드 분기 | 5 | 8 | 요청·응답 2그룹 | 고유 title/desc와 세 원고의 앞 관찰문·뒤 비증명문·alt가 일치합니다. | `560×1172`, viewBox·width·height 일치 | 2026-08-28 실제Chrome18상태, mobile358×749px core17.9/detail12.79px 판독. 저장소와 선택적 외부 서비스가 백엔드 아래 분기합니다. | 명시light/dark marker2·실선 요청과 점선 반환·범례가 일치합니다. | replace | diagram-design | `6b4ac94`; Codex `PASS` C0/I0/M0; PBVA-002·003·004 자산 조건 충족; Claude pending |\n| PBV-07 `git-flow` | `src/assets/diagrams/git-flow.svg` | `src/assets/diagrams/source/git-flow.mmd` | PB-044 `git-and-github.md` | 어디까지 로컬 상태이며 어떤 명령이 원격으로 보내는가? | 세로 상태 전이 | 4 | 3 | 로컬3·원격1 경계 | 고유title/desc·기존alt·추가앞질문·기존7행동/비증명 계약 일치. | `480×864`, viewBox·width·height 일치 | 2026-08-28 Chrome6상태 mobile358×644px core20.88/sub·command17.9/note14.92px 판독. | 명시marker2·로컬실선묶음/원격점선·명령레이블 양테마 가시성 확인. | reflow | diagram-design | `1b26e10`; Codex `PASS` C0/I0/M0; PBVA-003·004 자산 조건 충족; Claude pending |\n| PBV-08 `meeting-webapp-architecture` | `src/assets/diagrams/meeting-webapp-architecture.svg` | `src/assets/diagrams/source/meeting-webapp-architecture.mmd` | PB-054 `first-full-stack-project.md` | 화면·애플리케이션·데이터·운영 증거의 책임과 신뢰 경계는 무엇인가? | 계층 아키텍처 | 5 | 6 | 애플리케이션 경계 1그룹 | 고유 title/desc/role/aria·alt, 앞 읽을 질문과 뒤 비증명 한계 두 문장을 명시했습니다. | `560×952`, viewBox·width·height 일치 | 2026-08-28 실제 Chrome6상태: 모바일358×609px core17.9/detail12.8px 판독. DB/운영 증거의 같은 층 분기와 왕복 방향을 구분했습니다. | explicit marker2·선·박스·글자가 테마별 가시색으로 전환됩니다. | reflow | diagram-design | `75113a5`; Codex `PASS` C0/I0/M0; PBVA-004 자산 조건 충족; Claude pending |\n| PBV-09 `operations-recovery-loop` | `src/assets/diagrams/operations-recovery-loop.svg` | `src/assets/diagrams/source/operations-recovery-loop.mmd` | PB-048 `logs-monitoring-backup.md` | 신호 수집에서 안정화·복구·검증·학습까지 어떻게 순환하는가? | 세로 단계+피드백 | 7 | 7 | 신호·학습 2그룹 | 고유 title·desc·role·aria, alt·7단계와 Fix Round 1의 병행 가능/비증명 원고가 일치합니다. | `560×1000`, viewBox·width·height 일치 | 2026-08-28 실제 Chrome6상태: 모바일358×639px, 핵심 약17.9px·보조 약12.8px를 원본 크기로 판독했습니다. 글자를 키워 이전보다 약149px 길어졌습니다. | explicit light/dark marker4와 주흐름·점선 피드백·박스·글자가 전환됩니다. | reflow | diagram-design | `cf193f6`; 최초 I1 뒤 Fix Round 1 same-reviewer `PASS` C0/I0/M0; PBVA-003 자산 조건 충족; Claude pending |\n| PBV-10 `prd-sdd-tdd` | `src/assets/diagrams/prd-sdd-tdd.svg` | `src/assets/diagrams/source/prd-sdd-tdd.mmd` | PB-036 `prd-sdd-tdd.md` | 문제·요구·설계·스펙·작업·구현·검증이 어떻게 추적 가능한 연결을 이루는가? | 분기·수렴+피드백 | 7 | 8 | 요구·증거 중심 | 2026-08-28 질문/정확alt 보완·기존뒤추적설명 보존·고유title/desc 일치. | `480×1280`, viewBox·width·height 일치 | Chrome6/6·358×954.7px·core20.88/detail17.9/note14.92·원본그림/상단 및 문맥/full배치 확인. | 명시marker4·실선7/점선1·실제양테마 방향 확인·focused277/XML/full/Chrome 통과. | replace | diagram-design | `9f10b20`; Codex `PASS` C0/I0/M0; PBVA-002·004 자산 조건 충족; Claude pending |\n| PBV-11 `software-lifecycle` | `src/assets/diagrams/software-lifecycle.svg` | `src/assets/diagrams/source/software-lifecycle.mmd` | PB-039 `software-development-lifecycle.md` | 문제 이해부터 운영 학습까지 어떤 증거와 피드백이 이어지는가? | 세로6묶음+좌우A/B귀환 | 6 | 7 | 검증·운영 2그룹 | 2026-08-28 앞질문/alt/뒤한계 보완·8단계와6묶음 대응·나머지원고 byte불변·title/desc 일치. | `480×1080`, viewBox·width·height 일치 | 실제Chrome6/6·358×805.5px·core20.88/detail17.9/note14.92, 원본그림/상단 및 문맥·full배치 확인. | 명시marker4·실선/점선/A/B·모든방향 확인, 최종243/XML/full/Chrome 통과. | reflow | diagram-design | `2a04764`; Codex `PASS` C0/I0/M0; PBVA-003·004·005 조건 충족; Claude pending |\n| PBV-12 `agent-feedback-loop` | `src/assets/diagrams/agent-feedback-loop.svg` | `src/assets/diagrams/source/agent-feedback-loop.mmd` | PB-052 `working-with-coding-agents.md` | 에이전트가 상태 확인부터 문맥 갱신까지 어떤 증거 루프로 작업하는가? | 세로 단계+피드백 | 7 | 7 | 리뷰·갱신 2그룹 | 고유 title·desc·role·aria와 원고의 질문지도/비증명 경계가 일치하며 원고는 불변입니다. | `560×1000`, viewBox·width·height 일치 | 2026-08-28 실제 Chrome6상태: 모바일358×639px core17.9/detail12.8px·하단 안내 판독. 보조 글자를 키워 이전보다 약149px 길어졌습니다. | explicit marker4·주 흐름·점선 피드백이 선과 같은 가시색으로 전환됩니다. | reflow | diagram-design | `2ccd9f4`; Codex `PASS` C0/I0/M0; PBVA-003 자산 조건 충족; Claude pending |\n| PBV-13 `architecture-decision-layers` | `src/assets/diagrams/architecture-decision-layers.svg` | `src/assets/diagrams/source/architecture-decision-layers.mmd` | PB-035 `architecture-and-frameworks.md` | 사용자 문제에서 책임·품질·구조·기술 선택·구현을 지나 검증 증거와 변경 조건까지 어떤 순서로 판단하는가? | 세로 단계 흐름 | 7 | 6 | 문제·증거 2그룹 | 고유 title/desc, alt와 그림 앞 읽기 질문·뒤 비증명 설명이 모두 있습니다. | `560×772`, viewBox·width·height 일치 | 358×494px에서 약 15px 핵심 레이블 7개와 화살표 방향을 확대 없이 읽을 수 있습니다. | 박스·글자·선과 explicit light/dark marker fill이 모두 테마에 맞게 전환됩니다. | keep | diagram-design; Archify 미사용(선형 7노드) | Task 21; Task 10 뒤 keep 유지 |"
        },
        {
          "start_line": 39,
          "end_line": 41,
          "text": "- PBV-04 context: SVG와 Mermaid 모두 `의도→스펙`, `컨텍스트·하네스→실행 루프→검증 증거→문맥 갱신`의 6개 책임 관계로 맞췄고, 이것이 고정 실행 순서·완전한 topology·실제 성공 증명이 아니라는 원고 계약을 보존했습니다.\n- PBV-05 deploy: 콘텐츠 흐름 `소스→빌드→아티팩트→호스팅→사용자`와 점선 이름 조회 `사용자→DNS→호스팅`을 분리해 SVG·Mermaid·원고를 맞췄습니다. 도메인·DNS 연결이 배포·HTTPS·실제 성공을 자동 증명하지 않는다는 한계를 유지합니다.\n- PBV-06 full-stack: 저장소와 선택적 외부 서비스를 백엔드 아래의 독립 분기로 두고 요청·응답 방향을 SVG·Mermaid·세 소비 원고에서 일치시켰습니다. 그림은 전체 제품 topology나 성공 증거가 아닙니다."
        },
        {
          "start_line": 63,
          "end_line": 65,
          "text": "| PBV-04 | `/11-ai-native/context-spec-harness-loop/` | context-harness-loop | 6상태·원본 화면 확인; topology·marker·모바일 판독 결함 0; Codex PASS |\n| PBV-05 | `/10-deployment-operations/build-deploy-domain-dns/` | deploy-flow | 6상태·원본 화면 확인; source·marker·모바일 판독 결함 0; Codex PASS |\n| PBV-06A | `/03-full-stack/client-server-full-stack/` | full-stack-flow | 6상태·원본 화면 확인; topology·marker·모바일 판독 결함 0; Codex PASS |"
        },
        {
          "start_line": 80,
          "end_line": 84,
          "text": "| PBVA-001 | Important (resolved) | PBV-03 | 첫 분할은 정상 책임과 상세 질문을 나눴지만 참가자 A·B를 한 lifeline에 두고 두 요청을 위아래로 배치해 순차 실행처럼 가르쳤으며 트랜잭션 확정 경계도 명시하지 않아 `NEEDS CHANGES C0/I1/M0`였습니다. Fix Round 1 `1d19c15`은 A·B를 분리하고 Mermaid `par/and/end`와 SVG 병렬 frame을 맞추며 기존 4번 단위를 `트랜잭션 확정 경계`로 바꿨고, 같은 리뷰어가 이전 I1 `RESOLVED`와 `PASS C0/I0/M0`를 확인했습니다. | 두 질문 비중복, 개요 7노드·12화살표 이하, 상세 12정보 단위 이하, A·B 분리·명시적 병렬 문법·트랜잭션 확정 경계와 제품 중립 복구 경계를 유지합니다. | Task 20 resolved | SVG·Mermaid·alt·앞뒤 설명의 의미, 1440×1000·1024×768·390×844 light/dark 6상태의 lifeline 4개·병렬 frame·확정 경계·핵심 레이블·title·desc·marker·overflow·console·원본 crop을 확인했고 동일 리뷰어가 Fix Round 1을 `RESOLVED — PASS C0/I0/M0`로 판정했습니다. |\n| PBVA-002 | Important (resolved) | PBV-04, PBV-05, PBV-06, PBV-10 | Task 6에서 관찰한 SVG·source·원고 topology 차이를 네 자산의 학습 질문에 맞춰 함께 교정했습니다. context의 책임 연결, deploy의 콘텐츠/이름 조회 분리, full-stack의 저장소/외부 서비스 독립 분기, PRD의 분기·수렴·대표 피드백이 현재 SVG·Mermaid·alt·앞뒤 설명에서 일치합니다. | 현재 의미 동기화를 유지하고 후속 변경 시 SVG·Mermaid·원고를 같은 단위에서 검증합니다. | Task 20 resolved | 네 자산별 focused semantic 검사와 실제 Chrome 36상태, 각각의 별도 Codex `PASS` C0/I0/M0, 전체 참조·빌드 검사와 합동 closeout 재검토를 통과했습니다. |\n| PBVA-003 | Important (resolved) | PBV-01, PBV-04, PBV-05, PBV-06, PBV-07, PBV-09, PBV-11, PBV-12 | 여덟 SVG의 marker fill을 주 흐름·반환·피드백 선 의미와 light/dark 테마에 맞는 명시적 변수·class로 연결했습니다. | 명시 marker와 참조 선의 동일 의미·가시색을 유지합니다. | Task 20 resolved | 여덟 자산의 실제 Chrome 60상태에서 화살촉 소실·대비 결함 0개를 원본 crop으로 확인했고, 자산별 Codex 최종 PASS와 합동 closeout 재검토가 C0/I0/M0였습니다. |\n| PBVA-004 | Important (resolved) | PBV-01, PBV-02, PBV-04, PBV-05, PBV-06, PBV-07, PBV-08, PBV-10, PBV-11 | 아홉 자산을 모바일 세로 재배치·관계 단순화·단계 묶음으로 교정해 실제 콘텐츠 폭 358px에서 핵심·보조 레이블과 관계를 기본 확대에서 읽을 수 있게 했습니다. | 현재 세로 레이아웃과 원고의 이동 세부·비증명 설명을 유지합니다. | Task 20 resolved | 아홉 자산의 실제 Chrome 72상태에서 핵심·보조 레이블 판독, 내부 겹침·잘림·전역 overflow 0개를 확인했고, 자산별 Codex 최종 PASS와 합동 closeout 재검토가 C0/I0/M0였습니다. |\n| PBVA-005 | Important (resolved) | PBV-11 | 그림 앞에 불확실성과 피드백을 읽는 질문을, 뒤에 선형 강제 절차가 아니며 운영·검증 증거가 앞 결정을 재검토하게 한다는 범위와 한계를 추가했습니다. | 질문·alt·6개 책임 묶음·대표 피드백 A/B·비증명 설명의 일치를 유지합니다. | Task 20 resolved | 원고·SVG·Mermaid 의미 검사, actual Chrome 6상태의 인접 문맥, 자산별 Codex PASS와 합동 closeout 재검토 C0/I0/M0를 확인했습니다. |"
        }
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "sha256": "7f6bb729c6f5f9f5dc3b569066c2419896ebcde36c4ff10d597bdd7c6ff40051",
      "segments": [
        {
          "start_line": 233,
          "end_line": 261,
          "text": "    },\n    {\n      \"id\": \"R08\",\n      \"slug\": \"git-github\",\n      \"method\": \"개별 심층\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/09-git-github/git-and-github.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r08-git-github-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r08-git-github-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r08-git-github-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r08-git-github-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r08-git-github-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r08-git-github-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"8fd0387be743ef54b9b6c1ad24ae4a407347bda50223a5b14cc9948c3fdb4151\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-target-important3-minor3-and-R21-context-important1-minor2-resolved\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"791bf69c68c9a34d2868a35f67b4272694c47b4e81043a32d308c04dafad730d\",\"current_target_sha256\":\"e9a859657dc626c9ee734231c8a2ba59e666887ed764cb0b0b888001f57118c1\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r08-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r08-git-github-codex-rereview.md\",\"next_scope\":\"R09 pending; R21 full review pending; no M5/ready/public approval\"}\n    },\n    {\n      \"id\": \"R09\",\n      \"slug\": \"build-deploy\",\n      \"method\": \"개별 심층\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/10-deployment-operations/build-deploy-domain-dns.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r09-build-deploy-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r09-build-deploy-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r09-build-deploy-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r09-build-deploy-codex-rereview.md\"\n    },\n    {\n      \"id\": \"R10\",\n      \"slug\": \"operations\",\n      \"method\": \"개별 심층\",\n      \"implementation_state\": \"작성·구현 완료\","
        }
      ]
    }
  ],
  "render_provenance": {
    "manifest_path": "output/playwright/task20-deploy-evidence/manifest.jsonl",
    "manifest_sha256": "773c1b2fa5aba6eeb5107d0cabb08546507140d57359e1f5f21ade304fb157d7",
    "input_files": [
      {
        "path": "src/assets/diagrams/deploy-flow.svg",
        "sha256": "be3798c0984fed38d4262bdc6b3d86b1b4800d5564e4d47394f25a3f9133d726",
        "unchanged": true
      },
      {
        "path": "src/assets/diagrams/source/deploy-flow.mmd",
        "sha256": "4ad88f9765658cd4d3814760479997215c2fe9e6bf0c426a9942858aeddc78dc",
        "unchanged": true
      },
      {
        "path": "src/content/docs/10-deployment-operations/build-deploy-domain-dns.md",
        "sha256": "deee3e29011300ab35ac4107c08b7f45a1e8d8375dcce3af6184496ac12f7f84",
        "unchanged": true
      }
    ],
    "states": [
      {
        "occurrence_id": "pb-046@1440x1000-light",
        "recorded_at": "2026-08-27T17:24:46.205Z",
        "route": "/10-deployment-operations/build-deploy-domain-dns/",
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
        "occurrence_id": "pb-046@1440x1000-dark",
        "recorded_at": "2026-08-27T17:24:46.205Z",
        "route": "/10-deployment-operations/build-deploy-domain-dns/",
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
        "occurrence_id": "pb-046@1024x768-light",
        "recorded_at": "2026-08-27T17:24:46.205Z",
        "route": "/10-deployment-operations/build-deploy-domain-dns/",
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
        "occurrence_id": "pb-046@1024x768-dark",
        "recorded_at": "2026-08-27T17:24:46.205Z",
        "route": "/10-deployment-operations/build-deploy-domain-dns/",
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
        "occurrence_id": "pb-046@390x844-light",
        "recorded_at": "2026-08-27T17:24:46.205Z",
        "route": "/10-deployment-operations/build-deploy-domain-dns/",
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
        "occurrence_id": "pb-046@390x844-dark",
        "recorded_at": "2026-08-27T17:24:46.205Z",
        "route": "/10-deployment-operations/build-deploy-domain-dns/",
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
      "id": "R09-PNG-01",
      "order": 1,
      "path": "output/playwright/task20-deploy-evidence/top-viewports/pb-046-desktop-light-task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207.png",
      "sha256": "6a01eeb24b2d3b92eb3ceeb508c492af4e4f3dd170122e63f501482355e26d76",
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
      "occurrence_id": "pb-046@1440x1000-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207",
        "occurrence_id": "pb-046@1440x1000-light",
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        },
        "theme": "light",
        "source_current_url": "http://127.0.0.1:4341/_astro/deploy-flow.D1nXpYVs_24se06.svg",
        "source_svg_sha256": "be3798c0984fed38d4262bdc6b3d86b1b4800d5564e4d47394f25a3f9133d726",
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
      "id": "R09-PNG-02",
      "order": 2,
      "path": "output/playwright/task20-deploy-evidence/diagram-crops/pb-046-desktop-light-task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207-deploy-direct.png",
      "sha256": "1c1b2c01735bea778ce376cc2b7062b8c9c815d4c4e437316684653d848566f4",
      "dimensions": {
        "width": 560,
        "height": 1009
      },
      "kind": "diagram",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "occurrence_id": "pb-046@1440x1000-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207",
        "occurrence_id": "pb-046@1440x1000-light",
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        },
        "theme": "light",
        "source_current_url": "http://127.0.0.1:4341/_astro/deploy-flow.D1nXpYVs_24se06.svg",
        "source_svg_sha256": "be3798c0984fed38d4262bdc6b3d86b1b4800d5564e4d47394f25a3f9133d726",
        "full_page": true,
        "clip": {
          "x": 324,
          "y": 2601,
          "width": 560,
          "height": 1009
        },
        "source_dom_box": {
          "x": 324,
          "y": 2601.625,
          "width": 560,
          "height": 1008
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
      "id": "R09-PNG-03",
      "order": 3,
      "path": "output/playwright/task20-deploy-evidence/accepted/pb-046-1440x1000-light-task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207-context.png",
      "sha256": "aeb3e49ba7fa8d98bb4660da598c15b7822145e607f6bbded3e95cd1419a8807",
      "dimensions": {
        "width": 1440,
        "height": 1849
      },
      "kind": "diagram-context",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "occurrence_id": "pb-046@1440x1000-light",
      "capture_method": "unresized crop of same-state accepted full PNG; verifies only diagram-adjacent prose",
      "provenance": {
        "source_full_png": "output/playwright/task20-deploy-evidence/accepted/pb-046-1440x1000-light-task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207-full.png",
        "source_full_sha256": "ad838f099595a2f9c76353dcfac22717f7bd7017330612830da35a4e63dd2ec1",
        "source_rectangle_px": {
          "left": 0,
          "top": 2421,
          "width": 1440,
          "height": 1849
        }
      }
    },
    {
      "id": "R09-PNG-04",
      "order": 4,
      "path": "output/playwright/task20-deploy-evidence/top-viewports/pb-046-desktop-dark-task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207.png",
      "sha256": "ba14a40dfd8ddf4ff9402d0441ef398fb89f135e46e4bbba52df0662ed902257",
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
      "occurrence_id": "pb-046@1440x1000-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207",
        "occurrence_id": "pb-046@1440x1000-dark",
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        },
        "theme": "dark",
        "source_current_url": "http://127.0.0.1:4341/_astro/deploy-flow.D1nXpYVs_24se06.svg",
        "source_svg_sha256": "be3798c0984fed38d4262bdc6b3d86b1b4800d5564e4d47394f25a3f9133d726",
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
      "id": "R09-PNG-05",
      "order": 5,
      "path": "output/playwright/task20-deploy-evidence/diagram-crops/pb-046-desktop-dark-task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207-deploy-direct.png",
      "sha256": "ee14fb6521f6d15610cc660d7e04d7fd56d243403efe5ac9a4bf4c96fdbee3b6",
      "dimensions": {
        "width": 560,
        "height": 1009
      },
      "kind": "diagram",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "occurrence_id": "pb-046@1440x1000-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207",
        "occurrence_id": "pb-046@1440x1000-dark",
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        },
        "theme": "dark",
        "source_current_url": "http://127.0.0.1:4341/_astro/deploy-flow.D1nXpYVs_24se06.svg",
        "source_svg_sha256": "be3798c0984fed38d4262bdc6b3d86b1b4800d5564e4d47394f25a3f9133d726",
        "full_page": true,
        "clip": {
          "x": 324,
          "y": 2601,
          "width": 560,
          "height": 1009
        },
        "source_dom_box": {
          "x": 324,
          "y": 2601.625,
          "width": 560,
          "height": 1008
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
      "id": "R09-PNG-06",
      "order": 6,
      "path": "output/playwright/task20-deploy-evidence/accepted/pb-046-1440x1000-dark-task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207-context.png",
      "sha256": "e1aa740bb093712f9bb17a6f0a2fdba6b7872ea037a3c0d1b36c1185cdd7b26b",
      "dimensions": {
        "width": 1440,
        "height": 1849
      },
      "kind": "diagram-context",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "occurrence_id": "pb-046@1440x1000-dark",
      "capture_method": "unresized crop of same-state accepted full PNG; verifies only diagram-adjacent prose",
      "provenance": {
        "source_full_png": "output/playwright/task20-deploy-evidence/accepted/pb-046-1440x1000-dark-task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207-full.png",
        "source_full_sha256": "919e4f524084bda3898a49a1722d99318bd2fe06071b6f597e9acfdf43826c62",
        "source_rectangle_px": {
          "left": 0,
          "top": 2421,
          "width": 1440,
          "height": 1849
        }
      }
    },
    {
      "id": "R09-PNG-07",
      "order": 7,
      "path": "output/playwright/task20-deploy-evidence/top-viewports/pb-046-tablet-light-task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207.png",
      "sha256": "05e39b4718003a7a829f950505c2c4c7999e6bc3f9b390dd540b8d95c1dfac31",
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
      "occurrence_id": "pb-046@1024x768-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207",
        "occurrence_id": "pb-046@1024x768-light",
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        },
        "theme": "light",
        "source_current_url": "http://127.0.0.1:4341/_astro/deploy-flow.D1nXpYVs_24se06.svg",
        "source_svg_sha256": "be3798c0984fed38d4262bdc6b3d86b1b4800d5564e4d47394f25a3f9133d726",
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
      "id": "R09-PNG-08",
      "order": 8,
      "path": "output/playwright/task20-deploy-evidence/diagram-crops/pb-046-tablet-light-task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207-deploy-direct.png",
      "sha256": "aace5a9d367505c3083e8c1f3441fab806f29cfc092eed105a40c393a547f02e",
      "dimensions": {
        "width": 560,
        "height": 1009
      },
      "kind": "diagram",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "light",
      "occurrence_id": "pb-046@1024x768-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207",
        "occurrence_id": "pb-046@1024x768-light",
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        },
        "theme": "light",
        "source_current_url": "http://127.0.0.1:4341/_astro/deploy-flow.D1nXpYVs_24se06.svg",
        "source_svg_sha256": "be3798c0984fed38d4262bdc6b3d86b1b4800d5564e4d47394f25a3f9133d726",
        "full_page": true,
        "clip": {
          "x": 316,
          "y": 2754,
          "width": 560,
          "height": 1009
        },
        "source_dom_box": {
          "x": 316,
          "y": 2754.703125,
          "width": 560,
          "height": 1008
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
      "id": "R09-PNG-09",
      "order": 9,
      "path": "output/playwright/task20-deploy-evidence/accepted/pb-046-1024x768-light-task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207-context.png",
      "sha256": "89d54147d82b4dc6880bd901feffc7748da03268b8b5c11f075b1368880f5010",
      "dimensions": {
        "width": 1024,
        "height": 1849
      },
      "kind": "diagram-context",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "light",
      "occurrence_id": "pb-046@1024x768-light",
      "capture_method": "unresized crop of same-state accepted full PNG; verifies only diagram-adjacent prose",
      "provenance": {
        "source_full_png": "output/playwright/task20-deploy-evidence/accepted/pb-046-1024x768-light-task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207-full.png",
        "source_full_sha256": "b90f1fdfdc4503cdb3bb6d4e7842ecf0b3d5408d50ccdce55d237d8b7311bb63",
        "source_rectangle_px": {
          "left": 0,
          "top": 2574,
          "width": 1024,
          "height": 1849
        }
      }
    },
    {
      "id": "R09-PNG-10",
      "order": 10,
      "path": "output/playwright/task20-deploy-evidence/top-viewports/pb-046-tablet-dark-task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207.png",
      "sha256": "716f5495b80fa7e723a2e2bdee5f3f3e0cbb18c2497e5068515e07305279dab8",
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
      "occurrence_id": "pb-046@1024x768-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207",
        "occurrence_id": "pb-046@1024x768-dark",
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        },
        "theme": "dark",
        "source_current_url": "http://127.0.0.1:4341/_astro/deploy-flow.D1nXpYVs_24se06.svg",
        "source_svg_sha256": "be3798c0984fed38d4262bdc6b3d86b1b4800d5564e4d47394f25a3f9133d726",
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
      "id": "R09-PNG-11",
      "order": 11,
      "path": "output/playwright/task20-deploy-evidence/diagram-crops/pb-046-tablet-dark-task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207-deploy-direct.png",
      "sha256": "bafedf3f0b4531b3103aac1c41b252ffdf09ea7332192d42bcea657d6a46caed",
      "dimensions": {
        "width": 560,
        "height": 1009
      },
      "kind": "diagram",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "dark",
      "occurrence_id": "pb-046@1024x768-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207",
        "occurrence_id": "pb-046@1024x768-dark",
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        },
        "theme": "dark",
        "source_current_url": "http://127.0.0.1:4341/_astro/deploy-flow.D1nXpYVs_24se06.svg",
        "source_svg_sha256": "be3798c0984fed38d4262bdc6b3d86b1b4800d5564e4d47394f25a3f9133d726",
        "full_page": true,
        "clip": {
          "x": 316,
          "y": 2754,
          "width": 560,
          "height": 1009
        },
        "source_dom_box": {
          "x": 316,
          "y": 2754.703125,
          "width": 560,
          "height": 1008
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
      "id": "R09-PNG-12",
      "order": 12,
      "path": "output/playwright/task20-deploy-evidence/accepted/pb-046-1024x768-dark-task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207-context.png",
      "sha256": "e3cf17ad3296285804ab764c8d3ed9882b88c4e138afbe1433f7e8d01e5003ba",
      "dimensions": {
        "width": 1024,
        "height": 1849
      },
      "kind": "diagram-context",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "dark",
      "occurrence_id": "pb-046@1024x768-dark",
      "capture_method": "unresized crop of same-state accepted full PNG; verifies only diagram-adjacent prose",
      "provenance": {
        "source_full_png": "output/playwright/task20-deploy-evidence/accepted/pb-046-1024x768-dark-task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207-full.png",
        "source_full_sha256": "e374b7bb8ff204bd36904dffe078bace1df2cd9eb10deba02da9261079b47828",
        "source_rectangle_px": {
          "left": 0,
          "top": 2574,
          "width": 1024,
          "height": 1849
        }
      }
    },
    {
      "id": "R09-PNG-13",
      "order": 13,
      "path": "output/playwright/task20-deploy-evidence/top-viewports/pb-046-mobile-light-task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207.png",
      "sha256": "11799c43c14702003aa95d3ba46d7accbdf60dd0ed6b0a3fc960fc82515e2d42",
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
      "occurrence_id": "pb-046@390x844-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207",
        "occurrence_id": "pb-046@390x844-light",
        "viewport": {
          "id": "mobile",
          "width": 390,
          "height": 844
        },
        "theme": "light",
        "source_current_url": "http://127.0.0.1:4341/_astro/deploy-flow.D1nXpYVs_24se06.svg",
        "source_svg_sha256": "be3798c0984fed38d4262bdc6b3d86b1b4800d5564e4d47394f25a3f9133d726",
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
      "id": "R09-PNG-14",
      "order": 14,
      "path": "output/playwright/task20-deploy-evidence/diagram-crops/pb-046-mobile-light-task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207-deploy-direct.png",
      "sha256": "d227703a4479f3d301dff4f146d2d1e6bf19e0723304ab8cc194f9cbadec3d3b",
      "dimensions": {
        "width": 358,
        "height": 645
      },
      "kind": "diagram",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "occurrence_id": "pb-046@390x844-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207",
        "occurrence_id": "pb-046@390x844-light",
        "viewport": {
          "id": "mobile",
          "width": 390,
          "height": 844
        },
        "theme": "light",
        "source_current_url": "http://127.0.0.1:4341/_astro/deploy-flow.D1nXpYVs_24se06.svg",
        "source_svg_sha256": "be3798c0984fed38d4262bdc6b3d86b1b4800d5564e4d47394f25a3f9133d726",
        "full_page": true,
        "clip": {
          "x": 16,
          "y": 3693,
          "width": 358,
          "height": 645
        },
        "source_dom_box": {
          "x": 16,
          "y": 3693.453125,
          "width": 358,
          "height": 644.390625
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
      "id": "R09-PNG-15",
      "order": 15,
      "path": "output/playwright/task20-deploy-evidence/accepted/pb-046-390x844-light-task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207-context.png",
      "sha256": "9285ee388329c68d4944b07c7161a7a9405fbd56abe535479b88c69c33fe4951",
      "dimensions": {
        "width": 390,
        "height": 1485
      },
      "kind": "diagram-context",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "occurrence_id": "pb-046@390x844-light",
      "capture_method": "unresized crop of same-state accepted full PNG; verifies only diagram-adjacent prose",
      "provenance": {
        "source_full_png": "output/playwright/task20-deploy-evidence/accepted/pb-046-390x844-light-task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207-full.png",
        "source_full_sha256": "0a0daecb641566bddc989ea37180c3c4a8a26bf57b6ef02394f20fc886b4e391",
        "source_rectangle_px": {
          "left": 0,
          "top": 3513,
          "width": 390,
          "height": 1485
        }
      }
    },
    {
      "id": "R09-PNG-16",
      "order": 16,
      "path": "output/playwright/task20-deploy-evidence/top-viewports/pb-046-mobile-dark-task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207.png",
      "sha256": "b3b76b98d3a42059546d3b66aae8d1b2f6fad40ad8ea41a525063b5fd4536f3d",
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
      "occurrence_id": "pb-046@390x844-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207",
        "occurrence_id": "pb-046@390x844-dark",
        "viewport": {
          "id": "mobile",
          "width": 390,
          "height": 844
        },
        "theme": "dark",
        "source_current_url": "http://127.0.0.1:4341/_astro/deploy-flow.D1nXpYVs_24se06.svg",
        "source_svg_sha256": "be3798c0984fed38d4262bdc6b3d86b1b4800d5564e4d47394f25a3f9133d726",
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
      "id": "R09-PNG-17",
      "order": 17,
      "path": "output/playwright/task20-deploy-evidence/diagram-crops/pb-046-mobile-dark-task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207-deploy-direct.png",
      "sha256": "665ebb5391ffd396584b59d4fca256b48f2e51e8995002b38238bec3c3770ce5",
      "dimensions": {
        "width": 358,
        "height": 645
      },
      "kind": "diagram",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "occurrence_id": "pb-046@390x844-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207",
        "occurrence_id": "pb-046@390x844-dark",
        "viewport": {
          "id": "mobile",
          "width": 390,
          "height": 844
        },
        "theme": "dark",
        "source_current_url": "http://127.0.0.1:4341/_astro/deploy-flow.D1nXpYVs_24se06.svg",
        "source_svg_sha256": "be3798c0984fed38d4262bdc6b3d86b1b4800d5564e4d47394f25a3f9133d726",
        "full_page": true,
        "clip": {
          "x": 16,
          "y": 3693,
          "width": 358,
          "height": 645
        },
        "source_dom_box": {
          "x": 16,
          "y": 3693.453125,
          "width": 358,
          "height": 644.390625
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
      "id": "R09-PNG-18",
      "order": 18,
      "path": "output/playwright/task20-deploy-evidence/accepted/pb-046-390x844-dark-task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207-context.png",
      "sha256": "6855f48f4bb885690701572b7d16545ae8c02bed6b8710b581541f086060b005",
      "dimensions": {
        "width": 390,
        "height": 1485
      },
      "kind": "diagram-context",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "occurrence_id": "pb-046@390x844-dark",
      "capture_method": "unresized crop of same-state accepted full PNG; verifies only diagram-adjacent prose",
      "provenance": {
        "source_full_png": "output/playwright/task20-deploy-evidence/accepted/pb-046-390x844-dark-task20-pbv05-20260827172434007-68a64277-279d-4735-ae03-5b3a80797207-full.png",
        "source_full_sha256": "c8bce138769db6e06b53ee524be1e84859be7aa60442ecc3b896eac7a1f06b98",
        "source_rectangle_px": {
          "left": 0,
          "top": 3513,
          "width": 390,
          "height": 1485
        }
      }
    }
  ]
}
```
<!-- m5-r09-request:data:end -->
