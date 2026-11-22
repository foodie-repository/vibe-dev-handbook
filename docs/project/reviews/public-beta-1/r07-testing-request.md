# R07 테스트 전략 — 고정 검토 요청

기준 commit b1be93934f042962042a9c5e766e57f3d3039627, 입력 고정 2026-11-15. 대상 원고 전체와 full_text_paths의 전체 텍스트 및 context_excerpts의 명시 범위를 읽습니다. 인접 장·용어집·사례 발췌는 일관성 문맥이며 해당 행 전체 검토를 대신하지 않습니다. 발췌 밖을 읽었다고 주장하지 않습니다.

Controller·작성자·이전 대화와 분리된 fresh gpt-6-astra/high 저장 세션을 사용합니다. 공식 ChatGPT 구독 경로를 해당 프로세스에만 적용하고 전역 인증/설정·API키·추가 크레딧·다른 과금은 금지합니다. 최초 history0, 실제 모델/effort·readOnly/network false·도구 미사용을 확인하고 같은 저장 ID와 실제 이력 복구로 후속 검토합니다. R02 승계 예외는 적용하지 않습니다.

공통 계약 C01~C12, 9항목18점·치명 항목과 한국어 결과 여섯 절을 적용합니다. 핵심 질문은 독자가 중요한 실패를 테스트 수준·대역·오라클·데이터·환경·실행 시점과 보완 증거에 연결하고 AI의 완료 주장을 판정할 수 있는가입니다. 단위/통합/계약/E2E/smoke/회귀, 정적·동적과 수동·자동, verification/validation, TDD와 전략, flaky/coverage/skip·실패 의미와 운영 권한을 구분하세요. 특정 러너나 과거 조직 수치를 보편 사실로 확대하지 않습니다.

현재 ISO 공개 안내에서는 원고가 귀속한 manual·automated, scripted·unscripted 열거를 확인하지 못했습니다. 이 근거 범위와 현재 원고 주장을 비교하고 부족하면 명시하세요. 표준 전문은 읽지 않았습니다. R06에서 해결한 사례 D-01~D-05 연결은 실제 고정 사례 발췌와 해시로 재사용하며 FR-014는 복합 교육 예시입니다. R06 자체 검토를 반복하거나 R13 사례 전체 완료로 확대하지 않습니다.

대상 원고에 이미지/SVG/Mermaid 소비가 없어 실제 PNG 전달은 0이며 그림 조건은 적용외입니다. 텍스트 흐름·표·코드/프롬프트는 원고 전체에 포함합니다. 새로운 픽셀·브라우저 검토를 수행했다고 주장하지 않으며 화면 변경 finding이 생기면 해당 범위를 실제 렌더 검증합니다.

모든 도구·쓰기·셸·웹·MCP·플러그인·위임을 금지하고 응답만 반환하세요. 별도 제공한 준비 검사기/테스트는 원고 판정과 구분해 코드 C/I/M·체크포인트 적합성을 판단합니다. 입력 전 controller 해시 검사와 응답 후 감사는 별도 실행 증거입니다. 부족 입력/미확인 사실은 숨기지 않습니다. 준비 완료는 원고 PASS·review/ready·M5·공개 승인이 아닙니다.

<!-- m5-r07-request:data:start -->
```json
{
  "schema_version": 1,
  "review_id": "R07",
  "baseline_commit": "b1be93934f042962042a9c5e766e57f3d3039627",
  "target": "src/content/docs/08-quality/testing-strategy.md",
  "planned_profile": {
    "model": "gpt-6-astra",
    "reasoning_effort": "high"
  },
  "fresh": true,
  "persistent": true,
  "successor_exception": false,
  "full_text_paths": [
    "docs/project/reviews/public-beta-1/codex-review-contract.md",
    "src/content/docs/08-quality/testing-strategy.md",
    "research/public-beta-review-source-excerpts/r07-testing-2026-11-15.md",
    "src/content/docs/06-requirements-design/prd-sdd-tdd.md",
    "src/content/docs/reference/development-glossary.md",
    "src/content/docs/reference/agent-output-glossary.md",
    "src/content/docs/11-ai-native/agent-review-and-verification.md",
    "docs/project/reviews/public-beta-1/r06-case-context.json"
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
      "sha256": "6574d9ffdd49ed45a68b8db5e31e37e42a4e0d42565b66aaa4dd7a1c019f9366",
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
      "sha256": "eac96a6cf0c8df6106e49184e9824083f2100c49c484c5a0295008f66969146f",
      "segments": [
        {
          "start_line": 346,
          "end_line": 348,
          "text": "| `06-requirements-design/prd-sdd-tdd.md` | 저장소 내부 `research/stock-dashboard-case-brief.md`의 `EDU-FIXTURE` | 2026-08-10 | 교육용 주가 데이터 대시보드라는 표면 사례 문맥만 연결하며 `FR-014`의 원천·기준 시점·갱신 상태 요구와 추적 오라클을 바꾸거나 실제 시장 사실을 주장하는 근거로 사용하지 않음 |\n| `08-quality/testing-strategy.md` | https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics | 2026-08-04 | 소프트웨어 테스트를 요구사항·설계·품질·운영과 연결하고 테스트 수준·기법·검증 활동을 위험 기반 증거로 구분하는 교육 범위 |\n| `09-git-github/git-and-github.md` | https://git-scm.com/book/ko/v2 | 2026-08-04 | 분산 버전 관리, 작업 트리·스테이징·커밋·브랜치·원격, status·diff와 fetch·pull·push의 안정된 개념 범위 |"
        },
        {
          "start_line": 403,
          "end_line": 408,
          "text": "| `08-quality/performance-security.md` | https://csrc.nist.gov/glossary/term/least_privilege, https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html, https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html | 2026-08-13 직접 확인; NIST CSRC current glossary와 OWASP current cheat sheets | 기능 수행에 필요한 최소 권한, 신뢰하지 않는 입력의 구문·의미 검증, 비밀의 중앙 관리·최소 노출·회전·감사 범위 | 최소 권한을 권한 0으로, 입력 검증을 인가·출력 인코딩 전체로, 특정 비밀 저장 제품을 모든 환경의 안전 보장으로 확대하지 않음 |\n| `08-quality/testing-strategy.md` | https://www.iso.org/standard/81291.html, https://committee.iso.org/sites/jtc1sc7/home/projects/flagship-standards/isoiecieee-29119-series.html | 2026-08-13 직접 확인; ISO/IEC/IEEE 29119-1:2022 Edition 2 Published stage 60.60과 ISO JTC 1/SC 7 공식 series 안내 | 소프트웨어 테스트 일반 개념, 조직·관리·dynamic test 수준, manual·automated·scripted·unscripted testing과 static testing을 별도 ISO/IEC 20246 reviews로 다루는 표준 체계 범위 | 한 표준 분류를 모든 조직의 유일한 용어·테스트 전략으로 확대하거나 static testing과 동적 실행을 같은 증거로 취급하지 않음 |\n| `08-quality/testing-strategy.md` | https://www.computer.org/education/bodies-of-knowledge/software-engineering/resources/, https://ieeecs-media.computer.org/media/education/swebok/swebok-v4.pdf | 2026-08-13 직접 확인; IEEE Computer Society SWEBOK V4.0a, 2025-09-25 update | unit·integration·system·acceptance 수준, oracle·자동화·coverage criteria, 코드 실행 없이 산출물을 보는 static techniques와 동적 테스트의 구분 범위 | 네 수준을 중요도 순서나 모든 팀의 파일 구조로, coverage를 테스트 효과·사용자 성공의 단독 증거로 확대하지 않음 |\n| `08-quality/testing-strategy.md` | https://martinfowler.com/articles/practical-test-pyramid.html | 2026-08-13 직접 확인; Ham Vocke의 1차 실무 설명, Martin Fowler 사이트 current article as displayed | 빠르고 격리된 작은 테스트를 넓게 두고 느리고 넓은 범위 테스트를 선택적으로 배치하는 test pyramid의 방향과 계층 명칭이 팀마다 달라질 수 있는 범위 | 고정 비율·정확한 계층 수·특정 도구를 보편 규칙으로 만들거나 피라미드만으로 실제 위험 배분이 적절하다고 단정하지 않음 |\n| `08-quality/testing-strategy.md` | https://testing.googleblog.com/2016/05/flaky-tests-at-google-and-how-we.html, https://testing.googleblog.com/2014/07/measuring-coverage-at-google.html | 2026-08-13 직접 확인; Google Testing Blog의 2016-05-27 flaky test와 2014-07-14 coverage 조직 사례 | 같은 코드에서 성공·실패가 바뀌는 flaky test가 신호를 약화하는 문제와 coverage를 미시험 영역 탐색에 쓰되 품질 보장으로 보지 않는 사례 범위 | Google의 수치·재실행 정책·규모를 다른 조직의 기준으로 사용하거나 coverage 목표 하나를 실제 정확성·회귀 부재로 확대하지 않음 |\n"
        },
        {
          "start_line": 444,
          "end_line": 446,
          "text": "- `06-requirements-design/prd-sdd-tdd.md` (`PBSG-025`, 2026-08-13 확인): ISO/IEC/IEEE 29148:2018의 요구공학 과정·정보 항목, inactive-reserved IEEE 1016-2009의 Software Design Description 역사적 정의·비방법론 경계, GitHub Spec Kit 현재 `Spec → Plan → Tasks → Implement`와 선택 품질 게이트, Fowler의 테스트 목록·테스트 우선·기능 코드·리팩터링 설명을 위 장별 적용 기록에 연결했습니다. 요구공학 표준을 이 핸드북 PRD 양식으로, inactive 표준을 현재 의무 형식으로, 현재 제품 흐름을 보편 SDD 표준으로, 테스트 보유·사후 추가를 TDD 수행으로 확대하지 않습니다. 2026-08-05 검토 파일은 의미 변경 전 역사 증거로 보존하며 현재 `draft`의 `reviewEvidence`로 재사용하지 않습니다.\n- `08-quality/testing-strategy.md` (`PBSG-015`, `PBSG-016`, 2026-08-13 확인): ISO/IEC/IEEE 29119-1:2022와 공식 시리즈 안내, IEEE Computer Society SWEBOK V4.0a, Fowler 사이트의 Practical Test Pyramid, Google Testing Blog의 flaky test·coverage 조직 사례를 위 장별 적용 기록에 연결했습니다. 이 자료는 static·dynamic, manual·automated, 테스트 수준·목적·초점의 서로 다른 축, 오라클·자동화·coverage criteria, 빠르고 격리된 작은 테스트와 느리고 넓은 테스트의 피드백 방향, flaky 신호와 coverage의 탐색 용도를 직접 뒷받침합니다. 유료 ISO 표준 본문 전체를 열람했다고 주장하지 않고 한 분류·피라미드 비율·회사 수치·재실행 정책·coverage·도구 성공 표시를 모든 팀의 프로세스나 사용자 성공 증거로 확대하지 않습니다. 특정 테스트 러너의 예상 실패·건너뜀·필터 0건·종료 코드는 실제 도구·버전을 선택할 때 공식 문서와 출력으로 재확인하며, 2026-08-05~06 검토 파일은 의미 변경 전 역사 증거로 보존하고 현재 `draft`의 `reviewEvidence`로 재사용하지 않습니다.\n- `10-deployment-operations/logs-monitoring-backup.md` (`PBSG-011`, `PBSG-012`, 2026-08-13 확인): Google SRE Book, NIST SP 800-61 Rev. 3, NIST SP 800-34 Rev. 1과 CISA StopRansomware Guide를 위 장별 적용 기록에 연결했습니다. 이 자료는 SLI·SLO·SLA·오류 예산·행동 가능한 알림의 조직 실무, 인시던트 탐지·대응·복구·학습, RPO·RTO와 분리 백업·복원 시험의 일반 교육 범위를 직접 뒷받침합니다. Google 사례를 업계 표준·법적 SLA로, 미국 연방·랜섬웨어 지침을 모든 조직의 의무 절차로, 일반 복구 지침을 특정 공급자·캡스톤·실제 데이터의 복원 성공으로 확대하지 않으며 실제 제품 선택 때 현재 공식 문서와 승인된 격리 복원 증거를 다시 확인합니다."
        }
      ]
    },
    {
      "path": "research/public-beta-source-gap-register.md",
      "sha256": "dac010a69ea463fb8dd3d835780367ec164b887417c441f46f7f3887c05929e7",
      "segments": [
        {
          "start_line": 46,
          "end_line": 49,
          "text": "| PBSG-014 | PB-058 `methodology-map.md` | PRD·두 SDD·TDD·BDD·ADR·SDLC·Agile·Scrum·Kanban·DevOps·CI·continuous delivery·continuous deployment·GitFlow·trunk-based 개발과 context·spec·harness·loop의 범주와 관계 | important | 2026-08-20 Task 19가 기존 ISO/IEC/IEEE 29148·1016·42010·12207, GitHub Spec Kit, Fowler TDD·CI, Agile Manifesto, Nygard ADR, OpenAI·Anthropic의 2026-08-13~14 직접 확인 기록을 재사용함. BDD·Scrum·Kanban·DevOps·GitFlow·trunk-based development의 직접 원형·공식 source cluster는 없고 추가 네트워크는 실행하지 않음 | 누락된 여섯 묶음의 원형·현행 공식 자료를 직접 확인할 때와 기존 표준·조직 자료 상태 변경 시 재확인 | not-confirmed | Task 19 | 서로 다른 문서·개발 규율·결정 기록·팀 운영·통합/전달·브랜치 방식·AI 책임을 하나의 문서 템플릿·순차 절차·성숙도 사다리로 묶지 않습니다. |\n| PBSG-015 | PB-042 `testing-strategy.md` | verification·validation, static testing과 동적 테스트, 테스트 수준·목적·초점의 구분 | important | 2026-08-13 확인: ISO/IEC/IEEE 29119-1:2022 Edition 2와 ISO JTC 1/SC 7 시리즈 안내, IEEE Computer Society SWEBOK V4.0a | 테스트 표준·SWEBOK 판본 변경 시와 조직이 구체 테스트 분류·프로세스를 채택할 때 재확인 | confirmed | Task 15 | 한 분류 체계를 모든 조직·도구의 유일한 테스트 분류로 제시하거나 static·dynamic, manual·automated, 수준·목적·초점의 서로 다른 축을 한 계층으로 일반화하지 않습니다. |\n| PBSG-016 | PB-042 `testing-strategy.md` | 테스트 오라클·대역·fixture·flaky test·격리·피라미드·smoke test·coverage와 예상 실패·0개 실행의 도구별 판정 | important | 2026-08-13 확인: SWEBOK V4.0a, Fowler 사이트의 Practical Test Pyramid, Google Testing Blog의 flaky test·coverage 조직 사례 | 테스트 자료 상태 변경 시와 실제 테스트 러너·버전을 선택해 예상 실패·건너뜀·필터 0건·종료 코드 의미를 적용할 때 해당 공식 문서로 재확인 | confirmed | Task 15 | 특정 피라미드 비율·재시도 정책·coverage 수치나 한 도구의 성공 표시를 품질·사용자 성공·테스트 실행의 보편 증거로 일반화하지 않습니다. |\n| PBSG-017 | PB-050 `context-spec-harness-loop.md` | GitHub Spec Kit·OpenAI·Anthropic의 현재 조직 사례와 컨텍스트·하네스·루프 등 신생 실무 표현의 문서 상태·적용 범위 | important | 2026-08-13 확인: GitHub Spec Kit 공식 site·current main 저장소, OpenAI Harness Engineering 2026-02-11, Anthropic context 2025-09-29·long-running harness 2025-11-26·harness design 2026-03-24 조직 자료 | 분기, 공식 site·저장소·조직 자료 상태 변경 시와 구체 도구·조직 절차를 채택할 때 재확인 | confirmed | Task 7; Task 8; Task 17 | 회사별 사례나 신생 표현을 합의된 표준·보편 성숙도 모델·제품 기능 보장으로 일반화하지 않습니다. |"
        },
        {
          "start_line": 113,
          "end_line": 115,
          "text": "- PBSG-008은 ISO/IEC/IEEE 12207:2026, Google SRE Book Effective Troubleshooting, OpenTelemetry signals·observability primer와 OWASP Logging Cheat Sheet를 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. PB-039·040은 생명주기 지도를 표준의 고정 순서로, 세 관측 신호 수집을 원인 규명·복구 성공으로 사용하지 않으며 개인정보·비밀 없는 관측 경계를 유지합니다.\n- PBSG-015·016은 ISO/IEC/IEEE 29119-1:2022와 공식 시리즈 안내, SWEBOK V4.0a, Fowler 사이트의 Practical Test Pyramid, Google Testing Blog의 flaky test·coverage 조직 사례를 2026-08-13에 직접 확인해 `confirmed`로 전환했습니다. PB-042는 static·dynamic, manual·automated, 테스트 수준·목적·초점을 다른 축으로 구분하고 피라미드·coverage·도구 성공 표시를 실제 위험 배분·오라클·사용자 성공의 대리 증거로 사용하지 않습니다. 특정 테스트 러너의 예상 실패·건너뜀·필터 0건·종료 코드 의미는 채택한 도구·버전의 공식 문서와 출력으로 다시 확인합니다.\n- 현재 집계는 `confirmed` 14개, `not-confirmed` 12개입니다. 미확인 위험 집계는 critical 2개·important 10개·normal 0개이며, 확인된 PBSG-001·002·003·004·006·007·008·015·016·021·022·023·024·025의 위험은 미확인 집계에서 제외합니다."
        },
        {
          "start_line": 163,
          "end_line": 165,
          "text": "| PBCA-008 | PBSG-018 | Task 7; Task 8; Task 19 |\n| PBCA-010 | PBSG-015, PBSG-016 | Task 15 |\n| PBCA-011 | PBSG-003, PBSG-012, PBSG-019, PBSG-022, PBSG-023, PBSG-024, PBSG-025, PBSG-026 | Task 13; Task 14; Task 16; Task 18; Task 25 |"
        }
      ]
    },
    {
      "path": "docs/project/public-beta-content-audit.md",
      "sha256": "d8a058833542cfc69ba6f079f5624edb6bebf83e4e5d9dfe926251228dc79d68",
      "segments": [
        {
          "start_line": 66,
          "end_line": 68,
          "text": "| PB-041 | `src/content/docs/08-quality/performance-security.md` | core | 성능과 보안을 어떤 위험과 측정으로 다루는가? | 병목·위협·권한·비밀을 증거로 점검한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 5; Task 15 | 성능 예산·기준선·프로필·병목과 자산·위협·신뢰 경계·최소 권한·입력 검증·비밀·의존성 위험을 영향·복구·증거에 연결하고 PBSG-004의 공식·1차 근거를 적용했습니다. |\n| PB-042 | `src/content/docs/08-quality/testing-strategy.md` | core | 위험에 맞는 테스트와 보완 증거를 어떻게 고르는가? | 단위·통합·계약·E2E·운영·사람 검증을 배치한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 5; Task 15 | 전체 파일을 다시 감사해 static·dynamic, manual·automated, 테스트 수준·목적·초점을 구분하고 피라미드를 위험·피드백 비용 배분으로, coverage를 실제 성공의 대리 증거가 아닌 탐색 신호로 보강했습니다. PBSG-015·016을 직접 공식·1차 자료로 확인했으며 의미 변경 전 검토 파일은 보존하되 현재 reviewEvidence는 재사용하지 않습니다. |\n| PB-043 | `src/content/docs/09-git-github/branch-commit-pull-request.md` | core | 브랜치·커밋·Pull Request는 어떤 검토 경계를 만드는가? | 로컬 변경·이력·원격 제안을 구분한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 5; Task 16 | branch·commit·upstream·remote-tracking·push·PR·review·merge를 별도 상태와 증거로 구분하고, 작은 수직 변경·최신화·충돌·승인·모임 W-03 사례를 Git·GitHub 공식 문서와 연결했습니다. PBSG-009의 revert·reset·rebase·release 범위는 PB-045 완료 전까지 열어 둡니다. |"
        },
        {
          "start_line": 130,
          "end_line": 132,
          "text": "| PBCA-009 | Minor (resolved) | AUDIENCE, EVIDENCE | PB-056 | Task 19에서 실전 체크리스트의 모든 주요 구간을 대표 core 장과 연결하고 실제 증거·승인·실패·거절·복구·재검증 질문을 적용했습니다. | 체크 표시와 완료 수가 원문 학습, 정확한 명령, 브라우저·데이터·운영 검증, 사람·소유자 승인을 대신하지 않는 경계를 유지합니다. | Task 19 resolved | 주요 구간 8개의 core 링크, 모든 체크 항목의 `증거:` 요구, 단계·승인·복구 용어 경계를 집중 검사하고 `npm run validate:references`를 통과합니다. |\n| PBCA-010 | Important (resolved) | SOURCE | PB-042 | Task 5 당시 테스트 전략 장은 넓은 SWEBOK 교육 범위에만 연결돼 static testing, verification·validation, 오라클·대역·fixture, flaky test와 coverage 등 세부의 직접 근거가 부족했습니다. | Task 15에서 PBSG-015·016을 ISO/IEC/IEEE 29119-1:2022와 공식 시리즈 안내, SWEBOK V4.0a, Fowler·Google의 1차 실무 자료로 확인하고 적용 범위·일반화 금지선을 source map과 원고에 연결했습니다. | Task 5; Task 15 resolved | 원고의 static·dynamic, manual·automated, 테스트 수준·목적·초점, 피라미드·coverage·도구별 재확인 경계를 PBSG-015·016과 대조하고 참조 검증 및 새 독립 검토에서 확인합니다. |\n| PBCA-011 | Important | SOURCE | PB-053 | Task 13에서 PB-025의 PBSG-022와 PB-027의 PBSG-023을, Task 14에서 PB-032의 PBSG-024와 PB-036의 PBSG-025를, Task 16에서 공통 복구 원칙의 PBSG-012를 직접 공식·1차 자료로 닫았습니다. Task 18은 PBSG-019의 실제 시장·권리 전체 계약과 PBSG-026의 교육용 계약 전체를 직접 확인하지 못해 두 공백을 유지했습니다. | 실제 원천·권리 또는 데이터 도구·빌드 방식을 별도 승인해 채택할 때 해당 공식 자료와 실행 증거로 PBSG-019·026을 다시 판정하고, 제품별 복원 범위도 현재 문서와 격리 복원 증거로 확인합니다. | Task 5; Task 13; Task 14; Task 16; Task 18; Task 25; 별도 채택 승인 범위 | PBSG-012 confirmed의 제품 중립 범위, PBSG-019·026의 `not-confirmed` 근거·재확인 조건과 PB-053의 금지선을 대조하고 `npm run validate:references`와 독립 검토를 통과합니다. |"
        },
        {
          "start_line": 136,
          "end_line": 138,
          "text": "- Task 5 당시 Seed 13개는 모두 한 질문과 학습 목표가 분명하고 다른 문서와 단순 중복되지 않아 `remove`나 `merge`를 제안하지 않았습니다. 이후 목표 작업에서 역할을 유지해 확장하며, 아직 남은 공통 부족은 PBCA-003으로 해당 M3 작업과 Task 5에 연결합니다.\n- Task 5 당시 Review 4개는 상태 이름을 근거로 자동 통과시키지 않았습니다. `files-folders-paths`, `browser-dom-rendering`, `prd-sdd-tdd`는 후속 의미 변경으로 현재 draft이며 과거 검토 파일을 현재 증거로 재사용하지 않습니다. Task 14에서 뒤 두 원고의 PBSG-024·025 출처 공백을 닫았지만 각 시각 finding은 Task 20에 남습니다. Task 15에서는 `testing-strategy` 전체 파일을 다시 감사하고 PBSG-015·016과 PBCA-010을 해결했지만 의미가 바뀌어 현재 `reviewEvidence`를 제거하고 draft로 내렸습니다. 이는 lifecycle의 사람 승인과 `ready` 전환 또는 Task 22의 새 독립 검토가 끝났다는 뜻이 아닙니다.\n"
        },
        {
          "start_line": 140,
          "end_line": 142,
          "text": "\n- Task 5와 Fix Round 1은 PBCA-001의 폐기 사례 의미 잔존과 PBCA-003~PBCA-008·PBCA-010·PBCA-011의 source gap을 PBSG-001~PBSG-026으로 등록했습니다. 모든 행은 `not-confirmed`이며 실제 공식·1차 자료 조사와 원고 수정은 각 목표 작업에서 수행합니다.\n- Task 6은 당시 공개 원고가 참조한 12개 다이어그램의 실제 픽셀을 15개 occurrence·시각 캡처 60개에서 판정하고 PBVA-001~PBVA-005를 Task 20에 배정했습니다. Task 10은 PBV-13 한 쌍과 occurrence 하나를 추가해 현재 13쌍·16 occurrence이며, 새 자산의 4상태 manifest는 보존했지만 기존 자산을 포함한 전체 상태별 DOM·console·theme 수치는 Task 21에서 다시 검증합니다."
        }
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "sha256": "1332cb3fb2ed3f43694c5ddb9017f19961ca69e0f82b20324c6224af59055626",
      "segments": [
        {
          "start_line": 205,
          "end_line": 233,
          "text": "    },\n    {\n      \"id\": \"R06\",\n      \"slug\": \"prd-sdd-tdd\",\n      \"method\": \"개별 심층\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/06-requirements-design/prd-sdd-tdd.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"a03038d69a14c6d74e9ad07332e51312eff6e4f5675b1130db4f719fe32b3fda\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-blocked-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"BLOCKED\",\"rereview_state\":\"pass-i01-minor3-e01-confirmed-important-all-resolved\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"7ad9962b380f3a16a3edb238626c4067c39bb2e86a04dfa3d6bce10a2e24a687\",\"current_target_sha256\":\"5b0c91327e30d694d5025e0f6b378f88406f616bce284e5c3a74b8e2fe67207d\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r06-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-codex-rereview.md\",\"next_scope\":\"R07 pending; no M5/ready/public approval\"}\n    },\n    {\n      \"id\": \"R07\",\n      \"slug\": \"testing\",\n      \"method\": \"개별 심층\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/08-quality/testing-strategy.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r07-testing-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r07-testing-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r07-testing-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r07-testing-codex-rereview.md\"\n    },\n    {\n      \"id\": \"R08\",\n      \"slug\": \"git-github\",\n      \"method\": \"개별 심층\",\n      \"implementation_state\": \"작성·구현 완료\","
        }
      ]
    },
    {
      "path": "src/content/docs/08-quality/debugging-observability.md",
      "sha256": "95714492d662619e73fff21a359ba4d53ed6009c7fa8f06ff07b96c60132bb3b",
      "segments": [
        {
          "start_line": 2,
          "end_line": 4,
          "text": "title: \"디버깅과 관측 가능성\"\ndescription: \"증상에서 재현·가설·실험·원인·수정·회귀 증거로 좁히고 안전한 관측 신호를 설계합니다.\"\ncontentStatus: draft"
        },
        {
          "start_line": 15,
          "end_line": 17,
          "text": "\n오류가 보이면 가장 빠른 행동은 코드를 바꾸는 것처럼 느껴집니다. AI도 오류 메시지를 보고 여러 “가능한 수정”을 즉시 제안합니다. 하지만 재현과 가설 없이 여러 파일을 바꾸면 증상이 우연히 사라져도 어느 변경이 왜 효과가 있었는지 알 수 없습니다. 캐시·재시작·데이터 변화가 문제를 숨겼을 수도 있고, 실제 원인은 남아 다음 환경에서 다시 나타날 수 있습니다.\n"
        },
        {
          "start_line": 21,
          "end_line": 23,
          "text": "\n디버깅은 증상을 재현하고 관찰에서 가설을 세워 통제된 실험으로 원인을 좁힌 뒤 수정·회귀 증거로 확인하는 활동이고, 관측 가능성(observability)은 로그·지표·트레이스 같은 외부 신호로 시스템의 내부 상태와 실패 원인을 추론할 수 있게 하는 능력입니다.\n"
        },
        {
          "start_line": 27,
          "end_line": 29,
          "text": "\n이 비유는 **증거 없이 결론을 내리지 않고 경쟁 가설을 줄인다**는 점에서만 맞습니다. 소프트웨어 실험은 시스템 상태를 바꾸고 이후 결과에 영향을 줄 수 있으며, 운영 장애에서는 사용자·데이터 손상을 먼저 멈춰야 합니다. 또 복잡한 장애에는 단일 “범인”이 아니라 여러 조건의 결합이 있을 수 있습니다. 따라서 이 비유로 반드시 하나의 근본 원인을 찾거나 운영 환경에서 위험한 재현을 강행해서는 안 됩니다.\n"
        },
        {
          "start_line": 35,
          "end_line": 37,
          "text": "| 기대(expected) | 어떤 계약과 기준상 무엇이 일어나야 하나? | 요구·수용 기준·이전 정상 결과 | 현재 구현 출력을 기대값으로 복사함 |\n| 재현(reproduction) | 어떤 입력·환경·버전에서 반복되는가? | 최소 절차, 데이터·설정, 성공/실패 빈도 | 환경과 대상 버전을 모름 |\n| 관찰(observation) | 추측을 섞지 않은 사실은 무엇인가? | 로그·상태·diff·지표·트레이스 | “아마 DB 문제”처럼 해석이 섞임 |"
        },
        {
          "start_line": 39,
          "end_line": 43,
          "text": "| 실험(experiment) | 어느 가설을 구분할 가장 작은 확인은 무엇인가? | 명령·입력·변경·예상 결과·부작용 | 여러 변수를 동시에 바꿈 |\n| 원인(cause) | 어떤 조건이 증상을 만드는 데 필요했나? | 재현·제거·반례와 신뢰 수준 | 상관관계 하나만 있음 |\n| 수정(fix) | 원인을 제거하며 새 위험을 최소화하는 변경은 무엇인가? | 좁은 diff, 설계 이유, 복구 경로 | 증상만 숨기거나 오류를 무시함 |\n| 회귀(regression) | 같은 결함이 돌아오지 않고 주변 동작도 유지되는가? | 실패 전·성공 후 테스트, 운영 확인 | 테스트가 수정 전에도 통과함 |\n"
        },
        {
          "start_line": 52,
          "end_line": 54,
          "text": "기대: 요청이 확정되면 참가 상태를 보여 주고, 응답을 잃으면 현재 상태를 다시 조회할 수 있어야 한다.\n영향: 테스트 계정 1개에서 재현했으며 다른 사용자와 production 영향은 아직 확인하지 않았다.\n\u0060\u0060\u0060"
        },
        {
          "start_line": 57,
          "end_line": 64,
          "text": "\n## 2. 재현 조건을 최소화합니다\n\n재현 기록에는 대상 버전·환경·입력·선행 상태·행동·결과가 있어야 합니다.\n\n- 커밋·아티팩트·배포 환경과 런타임 버전\n- 테스트 계정의 권한과 비밀이 아닌 안전한 식별자\n- 모임 상태·정원·현재 참가 여부 같은 선행 데이터"
        },
        {
          "start_line": 68,
          "end_line": 70,
          "text": "\n운영 데이터로 재현하면 실제 사용자에게 부작용을 줄 수 있습니다. 비운영 환경과 비식별 fixture를 우선하고, 운영에서 확인해야 한다면 읽기 전용 관찰·권한·중단 조건·증거 보존을 먼저 정합니다.\n"
        },
        {
          "start_line": 90,
          "end_line": 95,
          "text": "가설 B: 정원 잠금 대기로 서버가 클라이언트 시간 제한을 넘겼다.\n예측: 실패 구간의 trace에서 데이터베이스 대기 시간이 길고, 경쟁 요청이 없는 fixture에서는 재현되지 않는다.\n\n가설 C: 브라우저 코드가 성공 응답을 잘못 파싱했다.\n예측: Network 응답은 계약에 맞지만 console에 파싱 오류가 있고, 같은 응답 fixture의 단위 테스트가 실패한다.\n\u0060\u0060\u0060"
        },
        {
          "start_line": 116,
          "end_line": 118,
          "text": "- 실패 로그를 없애거나 예외를 삼켜 화면만 정상처럼 보이게 하기\n- 테스트를 삭제·완화하거나 통과할 때까지 재실행하기\n- 관련 없어 보이는 패키지를 최신 버전으로 일괄 갱신하기"
        },
        {
          "start_line": 128,
          "end_line": 133,
          "text": "- **기여 조건**: 실패 가능성이나 영향을 키운 설계·운영 조건\n- **탐지 공백**: 더 일찍 발견하지 못한 테스트·관측·경보의 빈틈\n- **복구 공백**: 영향을 줄이거나 안전 상태로 돌아가는 데 막힌 조건\n\n상관관계만으로 인과를 확정하지 않습니다. 배포 시각과 오류 증가가 같아도 트래픽·외부 서비스·데이터 변화가 공통 원인일 수 있습니다. 원인을 재현하기 위험하거나 불가능하면 “확정” 대신 가능한 원인과 신뢰 수준, 반례와 미확인 범위를 기록합니다.\n"
        },
        {
          "start_line": 140,
          "end_line": 142,
          "text": "| 복구(recovery) | 서비스·데이터를 필요한 상태로 되돌림 | 잘못 생성된 중복 판정·정정, 안전 버전 활성화 |\n| 예방(prevention) | 같은 종류의 결함 가능성과 탐지 시간을 줄임 | 계약 테스트, 불변식 검사, 경보·runbook 보강 |\n"
        },
        {
          "start_line": 146,
          "end_line": 157,
          "text": "\n좋은 회귀 테스트는 수정 전 대상 버전에서 실제로 실패하고, 수정 후 같은 조건에서 성공하며, 주변의 정상·거절 경로도 유지합니다.\n\n- 최소 재현을 자동화할 수 있나요?\n- 테스트 오라클이 요구·계약·권위 데이터에서 왔나요?\n- 테스트가 현재 구현 출력을 그대로 복사하지 않았나요?\n- 간헐 실패라면 반복·격리·시간·동시성 조건을 기록했나요?\n- 실제 경계의 결함을 대역 테스트 하나로만 덮지 않았나요?\n- 운영에서 같은 사용자 결과와 신호가 회복됐나요?\n\n테스트가 수정 전에도 통과했다면 결함을 보호하지 못합니다. 새 테스트가 지나치게 넓고 flaky하면 장기적으로 실패 신호를 무시하게 만들 수 있습니다.\n"
        },
        {
          "start_line": 216,
          "end_line": 220,
          "text": "\n### 증상과 재현\n\nstaging의 특정 커밋에서 정원 1자리가 남은 모임에 두 테스트 사용자가 거의 동시에 참가하면 한 브라우저가 결과 불명을 표시합니다. 정상 기대는 한 명만 확정되고 다른 한 명은 정원 마감을 받으며, 응답 손실 뒤에는 상태를 재조회하는 것입니다.\n"
        },
        {
          "start_line": 229,
          "end_line": 231,
          "text": "\n가설 A는 동시성 잠금 대기가 클라이언트 시간 제한을 넘겼다는 것입니다. 같은 fixture에서 경쟁 요청 유무만 바꾸고 trace의 데이터베이스 대기와 응답 시각을 비교합니다. 가설 B는 브라우저 파싱 오류이며 저장한 계약 응답 fixture로 파서 테스트를 실행합니다.\n"
        },
        {
          "start_line": 233,
          "end_line": 235,
          "text": "\n경쟁 요청에서만 데이터베이스 대기가 시간 제한을 넘고 파서 테스트는 통과했다면 A를 지지합니다. 수정은 무조건 시간 제한을 늘리는 것이 아니라 잠금과 정원 판정 경계를 검토하고, 결과 불명 뒤 상태 재조회가 실제로 동작하게 만드는 것입니다. 수정 전 동시 요청 회귀 테스트가 실패하고 수정 후 정확히 한 명만 확정되는지, 운영 신호에서 지연과 결과 불명 비율이 회복되는지 확인합니다.\n"
        },
        {
          "start_line": 243,
          "end_line": 245,
          "text": "1. 증상 / 기대 / 영향 범위 / 대상 버전·환경을 분리하세요.\n2. 개인정보·비밀을 출력하지 않는 최소 재현 절차를 제시하세요.\n3. 로그·지표·트레이스·권위 상태·최근 diff에서 관찰 사실만 표로 만드세요."
        },
        {
          "start_line": 251,
          "end_line": 253,
          "text": "\n여러 파일·설정·의존성을 동시에 바꾸거나, 오류를 숨기거나, 테스트가 통과할 때까지 재실행하지 마세요. 각 제안이 어떤 가설을 줄이는지 설명하세요.\n\u0060\u0060\u0060"
        },
        {
          "start_line": 260,
          "end_line": 262,
          "text": "- [ ] 대상 커밋·아티팩트·환경·입력·선행 상태를 기록했나요?\n- [ ] 개인정보·비밀 없는 최소 재현을 만들었나요?\n- [ ] 관찰 사실과 해석을 두 열로 나눴나요?"
        },
        {
          "start_line": 266,
          "end_line": 268,
          "text": "- [ ] 완화·수정·복구·예방의 상태를 구분했나요?\n- [ ] 회귀 테스트가 수정 전 실패하고 수정 후 성공하나요?\n- [ ] 로그·지표·트레이스와 권위 상태를 대상 버전에 연결했나요?"
        },
        {
          "start_line": 273,
          "end_line": 275,
          "text": "\n최근 오류 하나를 `증상 / 기대 / 재현 / 관찰 / 가설 / 실험 / 원인 / 수정 / 회귀` 아홉 칸으로 다시 정리하세요. 관찰과 해석을 각각 다른 색으로 표시하고, 로그·지표·트레이스 중 현재 없는 신호 하나를 골라 어떤 최소 필드가 진단 시간을 줄이는지 쓰세요. 마지막으로 그 필드가 개인정보나 비밀을 노출하지 않는지도 검토하세요.\n"
        },
        {
          "start_line": 279,
          "end_line": 281,
          "text": "- [개발자처럼 생각하기](../../01-mental-models/developer-thinking/)\n- [테스트 전략](../testing-strategy/)\n- [로그·모니터링·백업](../../10-deployment-operations/logs-monitoring-backup/)"
        },
        {
          "start_line": 285,
          "end_line": 287,
          "text": "\n- [Google SRE Book의 Effective Troubleshooting](https://sre.google/sre-book/effective-troubleshooting/)은 관찰과 시스템 지식에서 반복 가설을 만들고 통제된 시험으로 반박하며, 재현·영향 완화·증거 보존·수정·재발 방지를 연결하는 운영 신뢰성 문맥에 사용했습니다. 이 장의 이상화된 절차를 모든 장애의 고정 순서나 단일 원인 보장으로 확대하지 않습니다.\n- [OpenTelemetry Signals](https://opentelemetry.io/docs/concepts/signals/)와 [Observability Primer](https://opentelemetry.io/docs/concepts/observability-primer/)는 2026-08-13 현재 trace·metric·log의 서로 다른 신호 범위와 telemetry로 상태를 이해하는 관측 가능성 개념을 확인하는 데 사용했습니다. OpenTelemetry 구현을 모든 조직의 필수 도구로, 세 신호 수집을 완전한 계측·원인 규명으로 일반화하지 않습니다."
        }
      ]
    },
    {
      "path": "src/content/docs/08-quality/performance-security.md",
      "sha256": "1a04872010e7ca3d2d0d31a87917fd7dee330e6dc5bc7ecfc456359f5bd38b4d",
      "segments": [
        {
          "start_line": 8,
          "end_line": 10,
          "text": "  - 사용자 결과와 환경을 포함한 성능 예산을 세우고 측정으로 병목을 찾는다\n  - 자산·위협·신뢰 경계를 식별하고 최소 권한·입력 검증·비밀·의존성 통제를 연결한다\n  - 성능과 보안의 위험을 증거·영향·복구 가능성으로 우선순위화한다"
        },
        {
          "start_line": 17,
          "end_line": 19,
          "text": "\n성능과 보안은 마지막에 한 번 검사하는 부가 기능이 아닙니다. 요구 단계에서 사용자 결과와 보호할 자산을 정하고, 설계에서 예산과 신뢰 경계를 배치하며, 구현·검증·배포·운영에서 실제 증거로 계속 확인하는 품질 책임입니다.\n"
        },
        {
          "start_line": 25,
          "end_line": 27,
          "text": "\n성능 예산은 여행에서 “몇 시까지 도착하고 환승은 몇 번 이하로 한다”는 시간표와 비슷합니다. 총 소요 시간뿐 아니라 어느 구간에서 지연됐는지 알아야 병목을 고를 수 있습니다. 보안은 박물관이 작품이라는 자산, 출입구라는 경계, 도난·훼손이라는 위협을 식별하고 전시실마다 필요한 출입 권한·감지·복구 절차를 두는 일과 비슷합니다.\n"
        },
        {
          "start_line": 33,
          "end_line": 36,
          "text": "|---|---|---|---|\n| 무엇을 지키는가? | 사용자가 완료해야 할 핵심 행동과 기다림 한도 | 개인정보·권한·업무 상태·가용성 같은 자산 | 요구·데이터 분류·사용자 영향 |\n| 어디에서 위험이 생기는가? | 느린 경로, 자원 포화, 직렬 대기 | 진입점, 신뢰 경계, 과도한 권한, 제3자 의존성 | 흐름·프로필·위협 모델 |\n| 어느 기준을 넘으면 실패인가? | 사용자 구간·환경·분위수·자원 예산 | 허용하지 않을 행동·노출·변조와 위험 수용 기준 | 수용 기준·성능 예산·보안 요구 |"
        },
        {
          "start_line": 39,
          "end_line": 41,
          "text": "\n성능 최적화가 보안을 약화할 수도 있습니다. 권한 확인을 생략한 캐시, 민감한 응답의 과도한 사본, 검사 없이 재사용한 결과가 예입니다. 반대로 모든 요청에 비용이 큰 검사를 중복 적용하면 사용자가 기다리거나 시스템이 포화될 수 있습니다. 둘 중 하나를 포기하는 대신 실제 위험과 병목을 측정해 경계와 예산을 함께 설계합니다.\n"
        },
        {
          "start_line": 92,
          "end_line": 97,
          "text": "- 다른 사용자 구간, 빈 캐시·찬 시작, 데이터 증가에서의 결과\n- 정확성·최신성·접근성·보안·운영 복잡성에 생긴 부작용\n- 성능 회귀 검사와 예산 초과 시 중단·복구 경로\n\n특정 테스트에서 개선됐다는 증거를 모든 사용자·지역·부하의 보장으로 확대하지 않습니다. 측정 불확실성과 확인하지 않은 범위를 함께 남깁니다.\n"
        },
        {
          "start_line": 101,
          "end_line": 106,
          "text": "\n- **자산(asset)**: 공격·실수로 노출·변조·삭제·중단됐을 때 보호할 가치가 있는 데이터·권한·기능·서비스입니다.\n- **위협(threat)**: 어떤 주체나 사건이 자산의 기밀성·무결성·가용성 또는 정당한 사용을 해칠 수 있는 가능성입니다. 취약점 하나와 같은 뜻이 아닙니다.\n- **진입점(entry point)**: 브라우저 요청, 업로드 파일, 관리자 도구, 외부 webhook, CI 입력처럼 데이터나 제어가 들어오는 위치입니다.\n- **신뢰 경계(trust boundary)**: 서로 다른 신뢰 수준이나 권한 주체 사이에서 값과 제어가 오가는 경계입니다. 경계를 넘은 값은 신뢰 가능한 쪽에서 다시 검증합니다.\n"
        },
        {
          "start_line": 111,
          "end_line": 113,
          "text": "3. 데이터와 제어가 어느 구성요소·외부 의존성·신뢰 경계를 통과하는가?\n4. 오용·권한 상승·노출·변조·거부·공급망 실패가 어디에서 가능한가?\n5. 영향·발생 가능성·노출 범위·탐지와 복구 난이도로 무엇을 먼저 줄일 것인가?"
        },
        {
          "start_line": 120,
          "end_line": 126,
          "text": "\n### 최소 권한\n\n**최소 권한(least privilege)**: 사용자·서비스·에이전트·프로세스에 맡은 작업에 필요한 최소 권한만 필요한 기간 동안 부여하는 원칙입니다. 읽기 작업에 관리자 쓰기 권한을 주지 않고, 배포 주체와 운영 데이터 변경 주체를 분리하며, 임시 권한에는 만료와 회수 경로를 둡니다.\n\n역할 이름이 `viewer`라는 사실은 최소 권한 증거가 아닙니다. 실제 허용·거절 정책, 자원 범위, 기본 거절, 매 요청 집행, 권한 변경·회수와 우회 경로를 시험해야 합니다. 최소 권한만으로 훔친 자격 증명·취약한 코드·잘못된 업무 규칙이 없어지는 것도 아닙니다.\n"
        },
        {
          "start_line": 135,
          "end_line": 137,
          "text": "\n클라이언트 검증은 빠른 피드백에는 유용하지만 사용자가 바꿀 수 있으므로 서버의 권한·업무 검증을 대신하지 않습니다. 입력 검증도 인가, 출력 인코딩, 안전한 쿼리 구성과 같은 다른 통제를 자동으로 대신하지 않습니다.\n"
        },
        {
          "start_line": 139,
          "end_line": 141,
          "text": "\n**비밀(secret)**: 유출되면 시스템·데이터·외부 서비스에 권한을 줄 수 있는 비밀번호·개인 키·접근 토큰·연결 자격 같은 값입니다. 비밀 관리는 저장 위치 하나가 아니라 생성·배포·사용·회전·폐기·감사·유출 대응의 수명주기입니다.\n"
        },
        {
          "start_line": 151,
          "end_line": 161,
          "text": "\n의존성은 직접 작성하지 않은 코드·빌드·배포 경로를 시스템에 들입니다. 위험은 알려진 취약점뿐 아니라 악성 변경, 출처 위조, 유지 중단, 전이 의존성, 호환성 파손, 과도한 권한과 업데이트 실패를 포함합니다.\n\n1. 실제 직접·전이 의존성, 버전·출처·잠금 상태를 식별합니다.\n2. 필요하지 않은 의존성과 실행 권한을 줄입니다.\n3. 공식 보안 권고와 생태계의 검증 가능한 취약점 정보를 대상 버전에 대조합니다.\n4. 업데이트 diff·빌드·테스트·라이선스·동작 변경을 검토합니다.\n5. 배포 후 탐지 신호와 문제가 생길 때 되돌릴 버전·데이터 호환 경로를 준비합니다.\n\n“최신 버전”이나 “스캐너 0건”은 안전 보장이 아닙니다. 데이터베이스가 알지 못하는 취약점, 잘못된 설정, 자체 코드와 업무 권한, 아직 공개되지 않은 문제는 남을 수 있습니다. 반대로 스캐너 경고 하나만으로 실제 노출과 우선순위를 확정하지 않고 사용 경로·권한·영향을 확인합니다.\n"
        },
        {
          "start_line": 168,
          "end_line": 170,
          "text": "| 사용자·자산 영향 | 얼마나 많은 사용자가 어떤 목적을 못 이루거나 어떤 자산이 노출·변조·중단되는가? |\n| 발생 가능성과 노출 | 현재 경로·트래픽·권한·입력에서 얼마나 쉽게 반복되거나 악용되는가? |\n| 피해 범위 | 한 요청·계정·환경에 제한되는가, 전체 데이터·서비스로 퍼지는가? |"
        },
        {
          "start_line": 172,
          "end_line": 176,
          "text": "| 증거 신뢰도 | 실제 측정·프로필·재현·통제 시험인가, 추측·도구 경고·문서 존재뿐인가? |\n| 변경 비용과 부작용 | 구현·운영 비용과 정확성·접근성·성능·보안의 새로운 위험은 무엇인가? |\n\n심각한 비밀 노출이나 무단 권한 상승처럼 영향이 큰 문제는 성능 개선보다 먼저 공개·접근을 제한하고 자격을 폐기해야 할 수 있습니다. 다만 “보안은 항상 최우선”처럼 맥락 없는 문구 대신 실제 자산·영향·노출·복구 증거로 긴급성과 행동을 설명합니다.\n"
        },
        {
          "start_line": 182,
          "end_line": 184,
          "text": "\n목표는 참가자가 모임 상세에서 정원 상태를 확인하고 참가 결과를 알 수 있는 것입니다. 팀은 지정한 staging 빌드, 테스트 기기·네트워크, 200개 모임 fixture에서 클릭부터 확정·거절 상태 표시까지의 p95 예산을 정하고, 실패 수·DB 시간·전송량을 함께 기록합니다.\n"
        },
        {
          "start_line": 188,
          "end_line": 192,
          "text": "\n보호 자산은 계정 신원, 참가 관계, 연락 정보, 모임 정원과 취소 권한, 서비스 가용성입니다. 브라우저↔서버, 서버↔데이터베이스, CI↔배포 환경, 외부 알림 서비스 경계를 그립니다. 가능한 위협은 다른 사용자의 참가 취소, 조작한 정원 값, 동시 요청으로 인한 초과 참가, 로그의 토큰 노출, 취약한 알림 의존성입니다.\n\n통제는 위협과 직접 연결합니다. 서버는 매 요청에서 현재 사용자와 대상 모임의 권한을 확인하고, 참가 입력의 형식·업무 상태를 검증하며, 데이터베이스 불변식과 트랜잭션으로 정원을 보호합니다. 알림 서비스 자격은 필요한 환경·행동으로 제한하고 브라우저나 로그에 전달하지 않습니다. 의존성 버전·출처와 업데이트 결과를 기록하며, 기능 제한·안전 버전 전환·잘못된 상태 판정과 복구 절차를 둡니다.\n"
        },
        {
          "start_line": 195,
          "end_line": 197,
          "text": "- 지정한 조건에서 변경 전후 성능 분포와 예산 판정\n- 정상·정원 마감·중복·동시 요청·무권한 취소의 테스트 결과\n- 브라우저 요청을 조작해도 서버와 데이터 계층이 거절하고 불변식을 지킨 증거"
        },
        {
          "start_line": 201,
          "end_line": 203,
          "text": "\n화면이 빨라 보이고 정상 참가 한 건이 성공한 것만으로 성능 예산·무권한 경로·동시성·복구가 모두 통과한 것은 아닙니다.\n"
        },
        {
          "start_line": 207,
          "end_line": 215,
          "text": "|---|---|---|\n| 측정 없이 캐시·비동기화·재작성을 먼저 함 | 실제 병목을 못 줄이고 최신성·권한 위험을 추가함 | 기준선과 프로필로 병목 가설을 세우고 한 요인씩 비교함 |\n| 한 기기·한 번의 최고 수치로 “빠르다”고 선언함 | 사용자 구간·분포·실패·환경 차이를 숨김 | 조건·표본·분위수·실패와 미확인 범위를 함께 기록함 |\n| 보안 도구 경고 0건을 안전 완료로 선언함 | 도구 범위 밖 위협·설정·업무 권한이 남음 | 자산·경계·위협과 통제 시험·잔여 위험을 대조함 |\n| 프런트 검증이나 숨긴 버튼을 인가로 사용함 | 요청을 직접 조작하면 우회할 수 있음 | 신뢰 가능한 경계에서 매 요청 권한과 업무 규칙을 집행함 |\n| 관리자 키를 여러 환경·서비스에서 공유함 | 한 유출의 피해 범위와 회전 비용이 커짐 | 역할·환경·기간별 최소 권한과 회수·재발급 경로를 둠 |\n| 의존성을 무조건 최신으로 일괄 갱신함 | 취약점은 줄어도 호환성·공급망·복구 위험이 생김 | 대상 위험을 확인하고 작은 diff·테스트·배포·rollback 증거를 남김 |\n| 통제 문서와 체크 표시를 실행 증거로 사용함 | 현재 코드·설정·권한·복구가 문서와 다를 수 있음 | 대상 버전에서 허용·거절·탐지·복구 경로를 실제 시험함 |\n"
        },
        {
          "start_line": 224,
          "end_line": 232,
          "text": "4. 자산·주체·진입점·데이터 흐름·신뢰 경계·위협을 표로 만드세요.\n5. 최소 권한·입력 검증·비밀 수명주기·직접/전이 의존성 위험을 각 위협과 연결하세요.\n6. 사용자·자산 영향, 발생 가능성, 피해 범위, 탐지·복구 난이도, 증거 신뢰도로 우선순위를 설명하세요.\n7. 한 번에 한 요인만 바꾸는 최소 변경, 부작용, 중단 조건과 복구 경로를 제시하세요.\n8. 같은 조건의 변경 전후 측정, 허용·거절·오용 테스트, 배포 후 사용자 결과와 권위 상태 증거를 설계하세요.\n9. 확인하지 못한 환경·위협·도구 범위와 잔여 위험을 명시하세요.\n\n실제 비밀·개인정보를 읽거나 출력하지 말고, 새 패키지 설치·네트워크·권한 확대·배포는 별도 승인 없이는 실행하지 마세요. “빠르다”, “안전하다”, “모든 취약점을 해결했다”는 포괄 결론을 쓰지 마세요.\n\u0060\u0060\u0060"
        },
        {
          "start_line": 243,
          "end_line": 246,
          "text": "- [ ] 위협을 영향·가능성·피해 범위·탐지·복구로 우선순위화했나요?\n- [ ] 사용자·서비스·에이전트가 필요한 최소 권한만 필요한 기간에 가지나요?\n- [ ] 신뢰 경계의 형식·업무 의미·권한을 신뢰 가능한 쪽에서 다시 검증하나요?\n- [ ] 실제 비밀이 소스·브라우저·로그·오류·fixture에 없고 회전·폐기 경로가 있나요?"
        },
        {
          "start_line": 261,
          "end_line": 265,
          "text": "- [디버깅과 관측 가능성](../debugging-observability/)\n- [테스트 전략](../testing-strategy/)\n- [환경 변수와 설정](../../10-deployment-operations/environment-variables-config/)\n- [AI 작업의 권한·샌드박스·워크트리](../../11-ai-native/permissions-sandbox-worktrees/)\n"
        },
        {
          "start_line": 272,
          "end_line": 274,
          "text": "- [NIST SP 800-218 SSDF 1.1](https://csrc.nist.gov/pubs/sp/800/218/final)은 2022-02 Final로 확인해 보안 실무를 SDLC 전체에 통합하고 위험 기반으로 코드 검토·자동/수동 분석·실행 시험·제3자 구성요소 평가·취약점 대응을 선택하는 범위에 사용했습니다. NIST 권고를 모든 조직의 법적 의무, 특정 도구 목록, 완전한 보안 보장으로 확대하지 않으며 2025년에 공개된 1.2 초안을 현재 Final로 사용하지 않습니다.\n- [NIST Glossary의 least privilege](https://csrc.nist.gov/glossary/term/least_privilege)는 2026-08-13 현재 기능 수행에 필요한 최소 권한만 부여하는 원칙의 정의 범위에 사용했습니다. 이 원칙만으로 인증·인가·감사·자격 증명 보호가 완료된다고 확대하지 않습니다.\n- [OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)와 [Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)는 2026-08-13 현재 문법·의미 검증과 비밀의 생성·회전·폐기·노출 대응 수명주기 범위에 사용했습니다. 입력 검증을 인가·출력 인코딩·안전한 쿼리의 대체물로, 환경 변수를 자동 암호화·회전하는 비밀 저장소로 일반화하지 않습니다."
        }
      ]
    }
  ],
  "visual_applicability": {
    "images": 0,
    "reason": "대상 원고에는 Markdown/HTML 이미지나 SVG/Mermaid 소비가 없습니다. 텍스트 흐름 블록은 원고 전체에 포함하며 기존 사이트 QA는 재사용하되 새 픽셀 검토로 주장하지 않습니다."
  },
  "images": []
}
```
<!-- m5-r07-request:data:end -->
