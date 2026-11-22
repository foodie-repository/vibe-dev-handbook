# R06 PRD·두 SDD·TDD — 고정 검토 요청

기준 commit 316e84760e5c3253538960de79d71a0a9a063298, 입력 고정 2026-11-15. 대상 원고 전체와 아래 full_text_paths의 전체 텍스트·SVG/Mermaid·직접 근거, context_excerpts의 명시 범위만 읽습니다. 인접 장·참고편·템플릿은 일관성 문맥이며 해당 행 검토를 대신하지 않습니다. 발췌 밖 원문을 읽었다고 주장하지 않습니다.

Controller·작성자·이전 대화와 분리된 fresh gpt-6-astra/high 저장 세션을 사용합니다. 공식 ChatGPT 구독 경로를 프로세스에서만 적용하고 전역 인증/설정·API키·추가 크레딧·다른 과금은 금지합니다. 최초 history0, 실제 모델/effort·readOnly/network false·도구 미사용을 확인하고 같은 저장 ID와 실제 이력 복구로 후속 검토합니다. R02 승계 예외는 적용하지 않습니다.

공통 계약 C01~C12, 9항목18점·치명 항목과 한국어 결과 여섯 절을 적용합니다. 핵심 질문은 PRD와 Software Design Description의 산출물, Spec-Driven Development의 접근, TDD의 구현 규율을 입력·출력·순서·실패·검증으로 구별할 수 있는가입니다. 요구·수용 기준·테스트·과정 증거와 실제 운영 성공, 설계 설명·ADR, 교육용 가상 대시보드 FR-014와 사례 R-02/R-03의 연결을 봅니다. 현재 Spec Kit 홈페이지는 Converge까지 다섯 단계를 핵심 흐름으로 표시합니다. 원고의 과거 날짜·네 연결 대표 사례 표현이 현재성 차이를 충분히 구분하는지 판단하세요. 표준 전문과 제품 실제 실행은 미확인입니다.

PNG18개는 R06 소비 경로의 과거 6상태×(viewport·다이어그램crop·인접문맥crop)입니다. 원고/SVG/MMD 3파일은 당시 입력과 바이트 동일합니다. 전체 페이지 이미지 6개를 전달한 것으로 계산하지 않습니다. PNG는 새로 캡처하거나 OCR로 대체하지 않고 localImage/detail:original로 실제 전달합니다. 모든 이미지 ID별 시각적 관측·판독 한계를 기록하세요. 과거 manifest의 pixel_review pending·Claude blocked는 당시 역사이며 현재 reviewer의 픽셀 검토를 대체하거나 현재 실행 blocker가 되지 않습니다. R01~R05의 기존 내용 검토는 반복하지 않습니다.

모든 도구·쓰기·셸·웹·MCP·플러그인·위임은 금지하고 응답만 반환하세요. 별도 제공한 준비 검사기/테스트는 원고 판정과 구분해 코드 C/I/M·체크포인트 적합성을 판단합니다. 입력 전 controller 해시 검사와 응답 후 감사는 별도 실행 증거입니다. 사실 확인 불가·입력 부족은 숨기지 않으며 준비 완료를 원고 PASS·review/ready·M5·공개 승인으로 계산하지 않습니다.

<!-- m5-r06-request:data:start -->
```json
{
  "schema_version": 1,
  "review_id": "R06",
  "baseline_commit": "316e84760e5c3253538960de79d71a0a9a063298",
  "target": "src/content/docs/06-requirements-design/prd-sdd-tdd.md",
  "planned_profile": {
    "model": "gpt-6-astra",
    "reasoning_effort": "high"
  },
  "fresh": true,
  "persistent": true,
  "successor_exception": false,
  "full_text_paths": [
    "docs/project/reviews/public-beta-1/codex-review-contract.md",
    "src/content/docs/06-requirements-design/prd-sdd-tdd.md",
    "src/assets/diagrams/prd-sdd-tdd.svg",
    "src/assets/diagrams/source/prd-sdd-tdd.mmd",
    "research/public-beta-review-source-excerpts/r06-prd-sdd-tdd-2026-11-15.md",
    "src/content/docs/08-quality/testing-strategy.md",
    "src/content/docs/06-requirements-design/adr-and-tradeoffs.md",
    "src/content/docs/reference/development-glossary.md",
    "src/content/docs/reference/methodology-map.md",
    "templates/prd-template.md",
    "templates/software-design-description-template.md",
    "templates/spec-driven-development-template.md",
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
      "sha256": "8d6721d1fdcdf33466b011d8ca80f4cbd189cb7c5f8286d7b35a87e6a94ab567",
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
          "start_line": 340,
          "end_line": 347,
          "text": "| `06-requirements-design/architecture-and-frameworks.md` | 저장소 내부 `research/architecture-framework-research-brief.md`, `research/meeting-webapp-case-brief.md`, `research/stock-dashboard-case-brief.md` | 2026-08-13 | 제품 중립 결정 수준·구조 질문·AI 검토 계약과 두 사례의 가역적 시작 가설·변경 신호. 실제 제품 동작·배포·시장 데이터·권리의 근거로 사용하지 않음 |\n| `06-requirements-design/prd-sdd-tdd.md` | https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics | 2026-08-04 | 요구사항·설계·구현·테스트·운영을 서로 다른 지식 영역으로 구분하고 추적하는 교육 범위 |\n| `06-requirements-design/prd-sdd-tdd.md` | https://www.iso.org/standard/72089.html | 2026-08-13, ISO/IEC/IEEE 29148:2018 Published·2024 confirmed·현재 `to be revised`, 후속 DIS under development | 요구공학 과정과 요구 관련 정보 항목이 생명주기 전체에 적용되는 범위. 이 핸드북의 PRD 이름·구성·성공 지표 양식을 표준 요구로, 개발 중 DIS를 현재 발행본으로 확대하지 않음 |\n| `06-requirements-design/prd-sdd-tdd.md` | https://standards.ieee.org/ieee/1016/4502/ | 2026-08-13, IEEE 1016-2009 `Inactive-Reserved Standard` | Software Design Description이 설계 정보 기록·이해관계자 소통을 위한 표현이고 특정 설계 방법론·언어를 강제하지 않는 역사적 범위. 현재 모든 프로젝트의 의무 형식으로 확대하지 않음 |\n| `06-requirements-design/prd-sdd-tdd.md` | https://github.github.com/spec-kit/, https://github.github.com/spec-kit/reference/agentic-sdd.html | 2026-08-13, 공식 홈페이지 2026-07-16 갱신과 현재 명령 참조 | 핵심 `Spec → Plan → Tasks → Implement`, `/speckit.specify`와 선택 품질 게이트·converge의 현재 제품 흐름. Spec-Driven Development 전체의 보편 표준·고정 약어·모든 팀의 필수 순서로 확대하지 않음 |\n| `06-requirements-design/prd-sdd-tdd.md` | https://martinfowler.com/bliki/TestDrivenDevelopment.html | 2026-08-13 확인, Martin Fowler 2023-12-11 갱신 방법론 설명 | 테스트 목록에서 다음 동작을 골라 테스트 작성·통과할 기능 코드·리팩터링을 반복하는 TDD와 인터페이스 우선 설계 피드백 범위. 사후 테스트 추가·전체 테스트 전략·모든 위험의 충분 증거로 확대하지 않음 |\n| `06-requirements-design/prd-sdd-tdd.md` | 저장소 내부 `research/stock-dashboard-case-brief.md`의 `EDU-FIXTURE` | 2026-08-10 | 교육용 주가 데이터 대시보드라는 표면 사례 문맥만 연결하며 `FR-014`의 원천·기준 시점·갱신 상태 요구와 추적 오라클을 바꾸거나 실제 시장 사실을 주장하는 근거로 사용하지 않음 |\n| `08-quality/testing-strategy.md` | https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics | 2026-08-04 | 소프트웨어 테스트를 요구사항·설계·품질·운영과 연결하고 테스트 수준·기법·검증 활동을 위험 기반 증거로 구분하는 교육 범위 |"
        },
        {
          "start_line": 443,
          "end_line": 445,
          "text": "- `06-requirements-design/architecture-and-frameworks.md` (`PBSG-007`, 2026-08-13 확인): ISO/IEC/IEEE 42010:2022 공식 범위와 표준 작업 그룹 conceptual model, CMU SEI 4판 소개, 기존 SWEBOK 확인, MDN 웹 프레임워크 문서를 위 장별 적용 기록에 연결했습니다. 표준 범위는 architecture description과 이해관계자·관심사·관점·뷰·결정·근거의 관계를, SEI는 아키텍처의 생명주기·맥락·품질 속성을, 기존 SWEBOK는 요구사항·설계·구현·테스트·운영의 연결과 구분을, MDN은 웹 프런트엔드에서 프레임워크·라이브러리를 검토하는 실용 질문을 뒷받침합니다. 프레임워크·라이브러리·런타임·플랫폼·도구 구분은 생태계별 용례가 겹치는 편집 기준이고, 일곱 단계는 이 핸드북의 판단 절차이며, 두 사례는 저장소 범위의 가역적 시작 가설입니다. 이를 특정 방법·제품 선택·현재 구현·품질·배포 성공으로 확대하지 않고 후보의 제어·지원·배포 범위는 채택 때 공식 문서와 실행 증거로 다시 확인합니다.\n- `06-requirements-design/prd-sdd-tdd.md` (`PBSG-025`, 2026-08-13 확인): ISO/IEC/IEEE 29148:2018의 요구공학 과정·정보 항목, inactive-reserved IEEE 1016-2009의 Software Design Description 역사적 정의·비방법론 경계, GitHub Spec Kit 현재 `Spec → Plan → Tasks → Implement`와 선택 품질 게이트, Fowler의 테스트 목록·테스트 우선·기능 코드·리팩터링 설명을 위 장별 적용 기록에 연결했습니다. 요구공학 표준을 이 핸드북 PRD 양식으로, inactive 표준을 현재 의무 형식으로, 현재 제품 흐름을 보편 SDD 표준으로, 테스트 보유·사후 추가를 TDD 수행으로 확대하지 않습니다. 2026-08-05 검토 파일은 의미 변경 전 역사 증거로 보존하며 현재 `draft`의 `reviewEvidence`로 재사용하지 않습니다.\n- `08-quality/testing-strategy.md` (`PBSG-015`, `PBSG-016`, 2026-08-13 확인): ISO/IEC/IEEE 29119-1:2022와 공식 시리즈 안내, IEEE Computer Society SWEBOK V4.0a, Fowler 사이트의 Practical Test Pyramid, Google Testing Blog의 flaky test·coverage 조직 사례를 위 장별 적용 기록에 연결했습니다. 이 자료는 static·dynamic, manual·automated, 테스트 수준·목적·초점의 서로 다른 축, 오라클·자동화·coverage criteria, 빠르고 격리된 작은 테스트와 느리고 넓은 테스트의 피드백 방향, flaky 신호와 coverage의 탐색 용도를 직접 뒷받침합니다. 유료 ISO 표준 본문 전체를 열람했다고 주장하지 않고 한 분류·피라미드 비율·회사 수치·재실행 정책·coverage·도구 성공 표시를 모든 팀의 프로세스나 사용자 성공 증거로 확대하지 않습니다. 특정 테스트 러너의 예상 실패·건너뜀·필터 0건·종료 코드는 실제 도구·버전을 선택할 때 공식 문서와 출력으로 재확인하며, 2026-08-05~06 검토 파일은 의미 변경 전 역사 증거로 보존하고 현재 `draft`의 `reviewEvidence`로 재사용하지 않습니다."
        }
      ]
    },
    {
      "path": "research/public-beta-source-gap-register.md",
      "sha256": "dac010a69ea463fb8dd3d835780367ec164b887417c441f46f7f3887c05929e7",
      "segments": [
        {
          "start_line": 56,
          "end_line": 58,
          "text": "| PBSG-024 | PB-032 `browser-dom-rendering.md` | DOM 구성과 렌더링 단계, 개발자 도구의 기록·임시 DOM 편집, 브라우저·기기 차이, WCAG 세부 성공 기준 | important | 2026-08-13 확인: WHATWG HTML parsing·event loop·lazy loading과 DOM, CSSWG CSSOM Editor's Draft, Chrome DevTools Network·DOM·CSS·Rendering, W3C WCAG 2.2 | 브라우저·Chrome 도구·WCAG·웹 표준 상태 변경 시, 또는 특정 엔진·프레임워크 동작을 채택할 때 재확인 | confirmed | Task 14 | 단순화한 흐름을 모든 엔진의 내부 직렬 파이프라인·스레드·최적화로, CSSOM Editor's Draft를 Recommendation으로, `img`·`iframe` 규칙을 모든 lazy loading으로, 임시 DOM 편집을 소스 수정으로, 한 브라우저·기기 확인을 호환성·접근성 완료로 확대하지 않습니다. |\n| PBSG-025 | PB-036 `prd-sdd-tdd.md` | PRD의 구성, Software Design Description과 ADR의 경계, 요구사항·수용 기준·테스트 케이스의 구분, TDD Red·Green·Refactor와 과정 증거 | important | 2026-08-13 확인: ISO/IEC/IEEE 29148:2018 요구공학, inactive-reserved IEEE 1016-2009 SDD, Nygard ADR 원형, GitHub Spec Kit 현재 공식 문서, Martin Fowler TDD 방법론 설명 | 29148 개정본 발행·1016 상태·Spec Kit 흐름·인용 방법론 자료 변경 시와 조직별 PRD·설계·테스트 절차를 실제 채택할 때 재확인 | confirmed | Task 14 | PRD·설계 설명·ADR·Spec-Driven Development·테스트 케이스를 같은 문서 종류로 묶거나 현재 제품 흐름을 보편 SDD 표준으로, 테스트 보유·사후 추가를 TDD 수행이나 모든 위험의 충분한 검증으로 일반화하지 않습니다. |\n| PBSG-026 | PB-053 `analytics-dashboard-case-study.md` | 교육용 데이터 계약·canonical schema·lineage·freshness·checksum·관측값 상태·검토 전환·재현 가능한 빌드 manifest의 의미와 증거 | important | 2026-08-13 W3C PROV-O·DCAT 3, SLSA v1.2 Build Requirements, Reproducible Builds 정의가 provenance·derivation, catalog version·checksum, output digest·build provenance와 bit-for-bit 재현의 좁은 의미를 직접 지원함; 교육용 data contract·canonical schema·freshness·관측값 상태·검토 전환·manifest 전체는 핸드북 운영 계약을 포함하며 선택 도구·실행 증거도 없음 | 실제 데이터 계약·도구·빌드 방식을 별도 채택할 때 남은 개념의 공식 자료와 도구 버전 문서, 같은 입력·환경·명령의 실행 증거를 재확인 | not-confirmed | Task 18 이후 별도 승인 범위 | 확인된 일부 개념을 이 fixture의 업계 표준 스키마·값 정확성·최신성·권리·SLSA 준수·실제 재현 보장으로 확대하지 않으며 실제 시장 사실·권리는 PBSG-019와 분리합니다. |"
        },
        {
          "start_line": 106,
          "end_line": 108,
          "text": "- PBSG-007은 ISO/IEC/IEEE 42010:2022 공식 범위와 conceptual model, CMU SEI 4판 소개, 기존 SWEBOK 확인 기록, MDN 웹 프레임워크 자료를 원고 전체에 대조해 `confirmed`로 전환했습니다. architecture description·이해관계자·관심사·관점·뷰·결정·근거와 품질 관계가 닫는 주장, 생태계별 용례가 겹치는 핸드북의 실용 도구 구분, 이 핸드북의 일곱 단계와 두 사례 가설을 분리했으며 특정 방법·제품·현재 구현·배포 성공으로 확대하지 않습니다.\n- PBSG-025는 ISO/IEC/IEEE 29148:2018, inactive-reserved IEEE 1016-2009, Nygard ADR 원형, GitHub Spec Kit 현재 문서, Fowler의 TDD 설명을 원고 전체에 대조해 `confirmed`로 전환했습니다. PRD·Software Design Description 산출물, Spec-Driven Development 접근, TDD 구현 규율의 입력·출력·순서·실패를 분리하고 표준·제품·방법론의 상태와 비보장선을 기록했으며, 사후 테스트를 TDD로 승격하지 않습니다.\n- 현재 집계는 `confirmed` 10개, `not-confirmed` 16개입니다. 미확인 위험 집계는 critical 2개·important 14개·normal 0개이며, 확인된 PBSG-001·002·003·006·007·021·022·023·024·025의 위험은 미확인 집계에서 제외합니다."
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
          "start_line": 60,
          "end_line": 62,
          "text": "| PB-035 | `src/content/docs/06-requirements-design/architecture-and-frameworks.md` | core | 아키텍처·기술 스택·프레임워크를 어떻게 구분하는가? | 품질 속성과 제약으로 구조·도구 선택을 설명한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 10; Task 14 | Task 10의 결정 수준·일곱 구조 질문·품질과 제약·도구 범주·두 사례 가설·과설계·증거 계약과 PBV-13 `keep`을 보존했습니다. Task 14에서 ISO/IEC/IEEE 42010:2022의 architecture description 범위와 방법·제품 비보장 경계를 추가해 PBSG-007을 닫았으며 제품별 제어·지원·배포는 실제 후보 채택 때 다시 확인합니다. |\n| PB-036 | `src/content/docs/06-requirements-design/prd-sdd-tdd.md` | core | PRD·두 SDD·TDD는 어떤 범주이며 어떻게 연결되는가? | 요구 문서·설계 문서·개발 접근·구현 규율을 입력·출력·순서·실패로 구분한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 5; Task 14; Task 20 resolved | 29148의 현재·개정 예정 상태, inactive-reserved 1016, Spec Kit 현재 흐름, Fowler TDD를 직접 연결해 PBSG-025를 닫았습니다. 의미 변경으로 과거 검토 파일은 보존하되 현재 `reviewEvidence`를 제거했으며, PRD 그림의 topology·390px 판독성은 Task 20 `9f10b20`과 실제 Chrome 6상태·Codex `PASS`로 교정됐습니다. |\n| PB-037 | `src/content/docs/07-workflow-methods/code-review-ci-cd.md` | core | 코드 리뷰·CI·CD는 어떤 서로 다른 게이트인가? | 사람 검토·자동 통합·전달·배포 증거를 구분한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 5; Task 15 | 코드 리뷰와 승인, CI와 자동 검사 서비스, 지속적 전달과 지속적 배포를 구분하고 실패 검사·보호 규칙·우회·배포 승인·커밋과 아티팩트·운영 증거·복구를 반복 사례와 직접 출처로 연결해 PBSG-004의 전달 게이트 범위를 닫았습니다. |"
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
          "start_line": 41,
          "end_line": 43,
          "text": "- PBV-06 full-stack: 저장소와 선택적 외부 서비스를 백엔드 아래의 독립 분기로 두고 요청·응답 방향을 SVG·Mermaid·세 소비 원고에서 일치시켰습니다. 그림은 전체 제품 topology나 성공 증거가 아닙니다.\n- PBV-10 PRD: 문제·요구에서 설계와 스펙이 분기하고 작업 계획으로 수렴해 구현·검증으로 이어지는 7개 노드·8개 관계를 SVG·Mermaid·원고에 맞췄습니다. 두 SDD와 TDD의 서로 다른 범주와 대표 재검토 화살표의 한계를 보존했습니다.\n"
        },
        {
          "start_line": 70,
          "end_line": 72,
          "text": "| PBV-09 | `/10-deployment-operations/logs-monitoring-backup/` | operations-recovery-loop | 6상태·원본 화면과 Fix Round 1 문맥 확인; marker·비증명 경계 결함 0; same-reviewer PASS |\n| PBV-10 | `/06-requirements-design/prd-sdd-tdd/` | prd-sdd-tdd | 6상태·원본 화면 확인; topology·모바일 판독 결함 0; Codex PASS |\n| PBV-11 | `/07-workflow-methods/software-development-lifecycle/` | software-lifecycle | 6상태·원본 화면 확인; marker·모바일 판독·앞뒤 설명 결함 0; Codex PASS |"
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
      "sha256": "1d5a2fd29e3c262d9801ac3aa68320ff412faa6ce15dd8d032477f2a2524d316",
      "segments": [
        {
          "start_line": 191,
          "end_line": 219,
          "text": "    },\n    {\n      \"id\": \"R05\",\n      \"slug\": \"browser-dom\",\n      \"method\": \"개별 심층\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/05-frontend/browser-dom-rendering.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r05-browser-dom-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r05-browser-dom-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r05-browser-dom-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r05-browser-dom-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r05-browser-dom-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r05-browser-dom-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"21bae99956c6de10afdbfbba22cb3f91b88fe4c9c5f6737dc27ab26daea4c9a4\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":1},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important2-minor3-resolved-minor1-accepted-current-open\",\"deferred_findings\":[{\"id\":\"R05-M01\",\"owner\":\"R26\",\"state\":\"open\"}],\"reviewed_target_sha256\":\"8880963d63d3ecad3bed53976a070e102ec8daece775dc1e86acaf4e5dcc7e43\",\"current_target_sha256\":\"4d914c5e17c05a3683faa48bbe657ba7f655eb6a4595199bfeb09dc2fa37bfe9\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r05-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r05-browser-dom-codex-rereview.md\",\"next_scope\":\"R06 pending; no M5/ready/public approval\"}\n    },\n    {\n      \"id\": \"R06\",\n      \"slug\": \"prd-sdd-tdd\",\n      \"method\": \"개별 심층\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/06-requirements-design/prd-sdd-tdd.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-codex-rereview.md\"\n    },\n    {\n      \"id\": \"R07\",\n      \"slug\": \"testing\",\n      \"method\": \"개별 심층\",\n      \"implementation_state\": \"작성·구현 완료\","
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
          "text": "instrument_id,instrument_type,market,trading_date,value_type,value,unit,volume,price_basis,source_id,source_version,transform_version,value_status,missing_reason\nIDX-X,index,MARKET-X,2026-01-05,close,2500,point,,not_applicable,EDU-FIXTURE,v1,tf-v1,valid,\nSTK-A,stock,MARKET-X,2026-01-05,close,10000,KRW,1000000,unadjusted,EDU-FIXTURE,v1,tf-v1,valid,\nSTK-B,stock,MARKET-X,2026-01-05,close,20000,KRW,700000,unadjusted,EDU-FIXTURE,v1,tf-v1,warning,late_source\nIDX-X,index,MARKET-X,2026-01-06,close,2510,point,,not_applicable,EDU-FIXTURE,v1,tf-v1,valid,\nSTK-A,stock,MARKET-X,2026-01-06,close,10100,KRW,1100000,unadjusted,EDU-FIXTURE,v1,tf-v1,valid,\nSTK-B,stock,MARKET-X,2026-01-06,close,,KRW,,unadjusted,EDU-FIXTURE,v1,tf-v1,blocked,source_missing\n\u0060\u0060\u0060"
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
    },
    {
      "path": "src/content/docs/12-case-studies/analytics-dashboard-case-study.md",
      "sha256": "3813b385f1f32ce278c4b320a53065ce834e2afd1d2271a51d6af6acc03498dd",
      "segments": [
        {
          "start_line": 2,
          "end_line": 4,
          "text": "title: \"데이터 분석가의 주가 대시보드 사례\"\ndescription: \"교육용 가상 주가·거래량 데이터를 원천과 권리, 데이터 계약, 품질, 화면, 검증, 배포와 운영 인수까지 연결합니다.\"\ncontentStatus: draft"
        },
        {
          "start_line": 8,
          "end_line": 10,
          "text": "learningObjectives:\n  - 실제 원천과 교육용 fixture, 분석 결과와 투자 판단을 구분한다\n  - 거래일·가격 기준·단위·값 상태·버전이 있는 데이터 계약을 설명한다"
        },
        {
          "start_line": 18,
          "end_line": 20,
          "text": "\n이 장은 실제 주가나 시장 데이터를 사용하지 않습니다. `IDX-X`, `STK-A`, `STK-B`는 실제 지수·종목·상품이 아니고, 아래의 시장명·날짜·가격·거래량·상태와 `EDU-FIXTURE`도 모두 교육용 가상 값입니다. `EDU-FIXTURE`는 실제 제공자나 원천을 뜻하지 않으며, 이 값으로 현재 시세·수익률·시장 일정·권리·투자 결론을 주장할 수 없습니다.\n"
        },
        {
          "start_line": 34,
          "end_line": 36,
          "text": "\n- **D-01**: 사용자는 IDX-X·STK-A·STK-B가 실제 종목이 아닌 교육용 fixture임을 첫 화면에서 확인합니다.\n- **D-02**: 사용자는 기간과 상품을 선택하고 가격 기준·단위·거래일·값 상태를 함께 확인합니다."
        },
        {
          "start_line": 41,
          "end_line": 43,
          "text": "\n첫 화면의 fixture 표시는 작은 면책 문구로 숨기지 않습니다. 제목 또는 데이터 상태 영역에서 “교육용 가상 데이터”를 읽을 수 있어야 하고, 출처 패널은 `EDU-FIXTURE`가 실제 원천이 아니라는 설명과 `source_version`, `transform_version`, `dataset_version`을 함께 보여 줍니다.\n"
        },
        {
          "start_line": 72,
          "end_line": 74,
          "text": "\n## 교육용 시나리오와 경계\n"
        },
        {
          "start_line": 103,
          "end_line": 105,
          "text": "|---|---|---|---|---|---|---|---|---|---|\n| D-01 fixture 표시 | 사용자가 첫 화면과 출처 패널에서 교육용 가상 데이터임을 확인합니다. | 모든 행의 `source_id: EDU-FIXTURE`와 가상 식별자를 화면의 fixture 상태·원천 미채택 설명으로 변환합니다. | 제목·데이터 상태·출처 패널의 텍스트와 접근 가능한 이름 | 공개 읽기에 인증은 없지만 실제 원천의 수집·가공·재배포 권리는 부여되지 않았고 실제 투자 판단 사용도 금지합니다. | 가짜 값이 실제 종목·현재 시세·권리 확보 데이터로 보이거나 면책 문구가 화면 밖에 숨습니다. | 첫 viewport와 출처 패널에서 fixture 문구·버전·실제 원천 미채택을 읽고, 실제 종목명·티커·현재 시세·추천 문구가 0건입니다. | fixture 상수·표시 컴포넌트·출처 설명·부정 문구 테스트만 한 diff와 로컬 `commit`에 묶습니다. | 입력 `commit`·아티팩트·배포 버전·실제 URL의 fixture 배지와 출처 smoke를 연결하고 외부 시장 요청 0건을 확인합니다. | 오표시 배포를 중지하거나 이전 검증 아티팩트로 되돌린 뒤 fixture 문구·원천 미채택·외부 요청 부재를 다시 확인합니다. |\n| D-02 선택과 문맥 | 사용자가 가상 상품과 기간을 선택하고 값의 거래일·단위·가격 기준·상태를 함께 읽습니다. | 복합 키 `(instrument_id, instrument_type, market)` 세 필드와 기간을 한 번 적용하고 `trading_date`·`unit`·`price_basis`·상태가 붙은 표시 모델을 만듭니다. | 키보드·포인터 선택, 표·차트·요약·문맥 텍스트 | 공개 fixture만 읽으며 쓰기·계정 권한은 없고, 정적 전달은 실제 데이터 재배포 허가를 뜻하지 않습니다. | `instrument_id`만으로 다른 종류·시장을 합치거나 point와 KRW, 거래일과 실제 시간대, 조정·비조정 값을 혼합합니다. | 세 필드 중 하나가 다른 fixture에서 선택 결과가 분리되고, 표·차트·요약의 행·정렬·단위·가격 기준·거래일·상태가 정확히 같습니다. | 복합 선택 책임·표시 모델·필터 UI·단위/가격 문맥과 키 충돌 fixture·테스트를 한 수직 커밋으로 묶습니다. | 배포 manifest의 데이터·변환·사이트 버전과 desktop/mobile 선택 smoke, 표·차트 동일 결과를 같은 아티팩트에 연결합니다. | 잘못 합친 후보를 게시하지 않고 마지막 정상 데이터·사이트 조합으로 복원한 뒤 충돌 fixture와 사용자 선택 흐름을 재실행합니다. |"
        },
        {
          "start_line": 113,
          "end_line": 115,
          "text": "\n!\u005b교육용 가상 fixture 또는 승인된 공식 원천의 정의·시간대·이용 조건을 확인한 뒤 상품 ID·거래일·시장·통화·가격 기준을 정규화하고, 품질 게이트·분석 저장소·버전이 있는 전달 계약·대시보드 UI를 거쳐 fixture 표시·갱신 감지·정정·복원 증거로 이어지는 일곱 단계 흐름](../../../assets/diagrams/analytics-dashboard-architecture.svg)\n"
        },
        {
          "start_line": 117,
          "end_line": 119,
          "text": "\n1. **원천·권리**: 지금은 `EDU-FIXTURE`라는 교육용 가상 원천임을 표시합니다. 실제 원천으로 바꾸려면 공식 정의·시간대·이용 조건·재배포 범위를 먼저 승인합니다.\n2. **수집·정규화**: 상품 ID·거래일·시장·통화·가격 기준·원천 버전을 보존하고 내부 기준 스키마로 맞춥니다."
        },
        {
          "start_line": 142,
          "end_line": 144,
          "text": "| `price_basis` | 현재 값이 어떤 가격 기준으로 표시됐는지 알려 주는 필드입니다. `unadjusted`와 지수의 `not_applicable`을 구분합니다. |\n| `source_id`, `source_version` | 교육용 fixture와 그 입력 버전을 식별합니다. 실제 제공자·원천 또는 이용 권리를 뜻하지 않습니다. |\n| `transform_version` | 같은 입력을 같은 선택 결과로 만드는 변환 규칙 버전입니다. |"
        },
        {
          "start_line": 250,
          "end_line": 252,
          "text": "\n1. 사용자는 첫 화면에서 교육용 fixture 표시와 현재 공개·마지막 정상 `dataset_version`을 확인합니다.\n2. 사용자는 상품과 fixture 기간을 키보드 또는 포인터로 선택하며, 상품 선택 항목은 표시 이름과 별개로 `(instrument_id, instrument_type, market)` 세 값을 함께 보관합니다."
        },
        {
          "start_line": 321,
          "end_line": 323,
          "text": "\n## 테스트는 요구사항별 실패 위험을 겨냥합니다\n"
        },
        {
          "start_line": 481,
          "end_line": 483,
          "text": "\u0060\u0060\u0060text\n교육용 fixture의 상품·기간 선택 흐름만 구현하라.\n"
        },
        {
          "start_line": 503,
          "end_line": 505,
          "text": "\n가상 식별자·시장명·날짜·가격을 실제 사실로 오해하게 만듭니다. 첫 화면과 출처 패널에서 교육용 가상 값임을 표시하고 실제 원천 채택 전에는 시장·시세 주장을 하지 않습니다.\n"
        },
        {
          "start_line": 553,
          "end_line": 555,
          "text": "- [ ] CSV 헤더와 여섯 행이 fixture 계약과 정확히 같습니다.\n- [ ] 모든 식별자·시장·날짜·값이 교육용 가상 데이터임을 표시했습니다.\n- [ ] 거래일·단위·가격 기준·거래량·값 상태·결측 사유를 구분했습니다."
        },
        {
          "start_line": 609,
          "end_line": 611,
          "text": "- [개발 용어집](../../reference/development-glossary/): 이 사례의 개발·데이터·운영 용어\n- [SWEBOK](https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics): 요구사항·설계·테스트·운영과 품질을 연결하는 소프트웨어공학 교육 범위\n- [MDN Curriculum](https://developer.mozilla.org/en-US/curriculum/): 웹 사용자 인터페이스·브라우저·접근성 교육 범위"
        },
        {
          "start_line": 615,
          "end_line": 617,
          "text": "\n이 출처들과 2026-08-13에 확인한 W3C PROV-O·DCAT 3, SLSA v1.2, Reproducible Builds 정의는 provenance·derivation, catalog metadata의 version·checksum, build provenance·digest, 재현 가능한 빌드의 좁은 의미를 뒷받침합니다. 그러나 현재 사용한 값은 저장소의 `EDU-FIXTURE`뿐이며 실제 시장·상품·시세·조정 방식·거래일·시간대·이용 조건·라이선스·재배포 범위는 확인하거나 채택하지 않았습니다. 교육용 data contract·canonical schema·freshness·관측값 상태·검토 전환·build manifest·smoke test·runbook·격리 복원의 전체 묶음은 단일 표준이 아니라 이 핸드북의 운영 계약을 포함하므로 PBSG-026을 `not-confirmed`로 유지합니다. 실제 원천과 구현을 선택하는 별도 승인 작업에서는 공식 1차 자료를 확인하고 출처 지도에 확인일·적용 범위·한계를 남겨야 합니다.\n"
        }
      ]
    }
  ],
  "render_provenance": {
    "manifest_path": "output/playwright/task20-prd-evidence/manifest.jsonl",
    "manifest_sha256": "643af4d540ebcc2f367f01da294d77f06caf91c9335b98584e58a6ace29f4317",
    "input_files": [
      {
        "path": "src/assets/diagrams/prd-sdd-tdd.svg",
        "sha256": "f5a832df82192f336ac41f64f9ece4a780843457d8ca81336ca198e38826c846",
        "unchanged": true
      },
      {
        "path": "src/assets/diagrams/source/prd-sdd-tdd.mmd",
        "sha256": "87edc50d99848c2fc7645e4e1e3e4bc5b76804ebaa7a9386d7b05cc177988109",
        "unchanged": true
      },
      {
        "path": "src/content/docs/06-requirements-design/prd-sdd-tdd.md",
        "sha256": "54195934c6010ede04b732f3f5b4a986696ac3ea812b930000aed6b8c2617520",
        "unchanged": true
      }
    ],
    "states": [
      {
        "occurrence_id": "pb-036@1440x1000-light",
        "recorded_at": "2026-08-27T17:48:46.872Z",
        "route": "/06-requirements-design/prd-sdd-tdd/",
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
          "manuscript_context": true,
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
        "occurrence_id": "pb-036@1440x1000-dark",
        "recorded_at": "2026-08-27T17:48:46.872Z",
        "route": "/06-requirements-design/prd-sdd-tdd/",
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
          "manuscript_context": true,
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
        "occurrence_id": "pb-036@1024x768-light",
        "recorded_at": "2026-08-27T17:48:46.872Z",
        "route": "/06-requirements-design/prd-sdd-tdd/",
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
          "manuscript_context": true,
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
        "occurrence_id": "pb-036@1024x768-dark",
        "recorded_at": "2026-08-27T17:48:46.873Z",
        "route": "/06-requirements-design/prd-sdd-tdd/",
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
          "manuscript_context": true,
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
        "occurrence_id": "pb-036@390x844-light",
        "recorded_at": "2026-08-27T17:48:46.873Z",
        "route": "/06-requirements-design/prd-sdd-tdd/",
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
          "manuscript_context": true,
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
        "occurrence_id": "pb-036@390x844-dark",
        "recorded_at": "2026-08-27T17:48:46.873Z",
        "route": "/06-requirements-design/prd-sdd-tdd/",
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
          "manuscript_context": true,
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
      "id": "R06-PNG-01",
      "order": 1,
      "path": "output/playwright/task20-prd-evidence/top-viewports/pb-036-desktop-light-task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5.png",
      "sha256": "40c3063a8fe7488c48198179baec23deb72ac99785df27086460aeabb28f6b80",
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
      "occurrence_id": "pb-036@1440x1000-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5",
        "occurrence_id": "pb-036@1440x1000-light",
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        },
        "theme": "light",
        "source_current_url": "http://127.0.0.1:4341/_astro/prd-sdd-tdd.BSX7y85q_Z1UK1In.svg",
        "source_svg_sha256": "f5a832df82192f336ac41f64f9ece4a780843457d8ca81336ca198e38826c846",
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
      "id": "R06-PNG-02",
      "order": 2,
      "path": "output/playwright/task20-prd-evidence/diagram-crops/pb-036-desktop-light-task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5-prd-direct.png",
      "sha256": "3e6ca85dfca4a2379b4168983e5fea8c3d062054f6d17b54242d821f192c05b5",
      "dimensions": {
        "width": 480,
        "height": 1281
      },
      "kind": "diagram",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "occurrence_id": "pb-036@1440x1000-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5",
        "occurrence_id": "pb-036@1440x1000-light",
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        },
        "theme": "light",
        "source_current_url": "http://127.0.0.1:4341/_astro/prd-sdd-tdd.BSX7y85q_Z1UK1In.svg",
        "source_svg_sha256": "f5a832df82192f336ac41f64f9ece4a780843457d8ca81336ca198e38826c846",
        "full_page": true,
        "clip": {
          "x": 324,
          "y": 2851,
          "width": 480,
          "height": 1281
        },
        "source_dom_box": {
          "x": 324,
          "y": 2851.53125,
          "width": 480,
          "height": 1280
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
      "id": "R06-PNG-03",
      "order": 3,
      "path": "output/playwright/task20-prd-evidence/accepted/pb-036-1440x1000-light-task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5-context.png",
      "sha256": "e1a45b7b826fbfbd21f264ca805e31d7955c05bbc72344d6c60a9d2b04a1c3cc",
      "dimensions": {
        "width": 1440,
        "height": 2121
      },
      "kind": "diagram-context",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "occurrence_id": "pb-036@1440x1000-light",
      "capture_method": "unresized crop of same-state accepted full PNG; verifies only diagram-adjacent prose",
      "provenance": {
        "source_full_png": "output/playwright/task20-prd-evidence/accepted/pb-036-1440x1000-light-task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5-full.png",
        "source_full_sha256": "0368863ae1f0b250fb1ffa788cbc8deb5b5e4ba1c8e5510a42103c214a935dd5",
        "source_rectangle_px": {
          "left": 0,
          "top": 2671,
          "width": 1440,
          "height": 2121
        }
      }
    },
    {
      "id": "R06-PNG-04",
      "order": 4,
      "path": "output/playwright/task20-prd-evidence/top-viewports/pb-036-desktop-dark-task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5.png",
      "sha256": "7eb0c2b8c7e273f748468e11a326ed5863959877d04910940fe45342c58e46f9",
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
      "occurrence_id": "pb-036@1440x1000-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5",
        "occurrence_id": "pb-036@1440x1000-dark",
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        },
        "theme": "dark",
        "source_current_url": "http://127.0.0.1:4341/_astro/prd-sdd-tdd.BSX7y85q_Z1UK1In.svg",
        "source_svg_sha256": "f5a832df82192f336ac41f64f9ece4a780843457d8ca81336ca198e38826c846",
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
      "id": "R06-PNG-05",
      "order": 5,
      "path": "output/playwright/task20-prd-evidence/diagram-crops/pb-036-desktop-dark-task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5-prd-direct.png",
      "sha256": "52b1eb151ace5e6dce5d0417f17d28d813c1347ff99a76985761dd5f2413ffb4",
      "dimensions": {
        "width": 480,
        "height": 1281
      },
      "kind": "diagram",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "occurrence_id": "pb-036@1440x1000-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5",
        "occurrence_id": "pb-036@1440x1000-dark",
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        },
        "theme": "dark",
        "source_current_url": "http://127.0.0.1:4341/_astro/prd-sdd-tdd.BSX7y85q_Z1UK1In.svg",
        "source_svg_sha256": "f5a832df82192f336ac41f64f9ece4a780843457d8ca81336ca198e38826c846",
        "full_page": true,
        "clip": {
          "x": 324,
          "y": 2851,
          "width": 480,
          "height": 1281
        },
        "source_dom_box": {
          "x": 324,
          "y": 2851.53125,
          "width": 480,
          "height": 1280
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
      "id": "R06-PNG-06",
      "order": 6,
      "path": "output/playwright/task20-prd-evidence/accepted/pb-036-1440x1000-dark-task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5-context.png",
      "sha256": "66726eaa654e034dfef857371a13f45aa0b9593e290b644fecc66edc27392aef",
      "dimensions": {
        "width": 1440,
        "height": 2121
      },
      "kind": "diagram-context",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "occurrence_id": "pb-036@1440x1000-dark",
      "capture_method": "unresized crop of same-state accepted full PNG; verifies only diagram-adjacent prose",
      "provenance": {
        "source_full_png": "output/playwright/task20-prd-evidence/accepted/pb-036-1440x1000-dark-task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5-full.png",
        "source_full_sha256": "c5268f76a097350eb7721e40b26b3e0e495f26652fd4d09726d7511e80b283b9",
        "source_rectangle_px": {
          "left": 0,
          "top": 2671,
          "width": 1440,
          "height": 2121
        }
      }
    },
    {
      "id": "R06-PNG-07",
      "order": 7,
      "path": "output/playwright/task20-prd-evidence/top-viewports/pb-036-tablet-light-task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5.png",
      "sha256": "69fbabb5f1b99c430c1c4f8fb1ad3b442fa8d4a9f4f03b7318bd0c7534b50a73",
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
      "occurrence_id": "pb-036@1024x768-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5",
        "occurrence_id": "pb-036@1024x768-light",
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        },
        "theme": "light",
        "source_current_url": "http://127.0.0.1:4341/_astro/prd-sdd-tdd.BSX7y85q_Z1UK1In.svg",
        "source_svg_sha256": "f5a832df82192f336ac41f64f9ece4a780843457d8ca81336ca198e38826c846",
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
      "id": "R06-PNG-08",
      "order": 8,
      "path": "output/playwright/task20-prd-evidence/diagram-crops/pb-036-tablet-light-task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5-prd-direct.png",
      "sha256": "369a2a17b712f458e88ac0c8c5b329dffc7419d1ccd43edf9374e8afa0f18e11",
      "dimensions": {
        "width": 480,
        "height": 1281
      },
      "kind": "diagram",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "light",
      "occurrence_id": "pb-036@1024x768-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5",
        "occurrence_id": "pb-036@1024x768-light",
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        },
        "theme": "light",
        "source_current_url": "http://127.0.0.1:4341/_astro/prd-sdd-tdd.BSX7y85q_Z1UK1In.svg",
        "source_svg_sha256": "f5a832df82192f336ac41f64f9ece4a780843457d8ca81336ca198e38826c846",
        "full_page": true,
        "clip": {
          "x": 316,
          "y": 3076,
          "width": 480,
          "height": 1281
        },
        "source_dom_box": {
          "x": 316,
          "y": 3076.90625,
          "width": 480,
          "height": 1280
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
      "id": "R06-PNG-09",
      "order": 9,
      "path": "output/playwright/task20-prd-evidence/accepted/pb-036-1024x768-light-task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5-context.png",
      "sha256": "35b8f5a8614765a4ffc42d486f1e789a655e2acf84a81b89a8306f25b798209c",
      "dimensions": {
        "width": 1024,
        "height": 2121
      },
      "kind": "diagram-context",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "light",
      "occurrence_id": "pb-036@1024x768-light",
      "capture_method": "unresized crop of same-state accepted full PNG; verifies only diagram-adjacent prose",
      "provenance": {
        "source_full_png": "output/playwright/task20-prd-evidence/accepted/pb-036-1024x768-light-task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5-full.png",
        "source_full_sha256": "535f71ddcc56d7c88082051224634e0a903ba1a6952400b793253f7d7590fd01",
        "source_rectangle_px": {
          "left": 0,
          "top": 2896,
          "width": 1024,
          "height": 2121
        }
      }
    },
    {
      "id": "R06-PNG-10",
      "order": 10,
      "path": "output/playwright/task20-prd-evidence/top-viewports/pb-036-tablet-dark-task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5.png",
      "sha256": "c24843a599b3706917621750be4a64c6df6f1dcd7d75449eebbe91762b620dd8",
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
      "occurrence_id": "pb-036@1024x768-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5",
        "occurrence_id": "pb-036@1024x768-dark",
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        },
        "theme": "dark",
        "source_current_url": "http://127.0.0.1:4341/_astro/prd-sdd-tdd.BSX7y85q_Z1UK1In.svg",
        "source_svg_sha256": "f5a832df82192f336ac41f64f9ece4a780843457d8ca81336ca198e38826c846",
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
      "id": "R06-PNG-11",
      "order": 11,
      "path": "output/playwright/task20-prd-evidence/diagram-crops/pb-036-tablet-dark-task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5-prd-direct.png",
      "sha256": "5a4ce8dd5bca259511c6c5245c7e5b7bc26f7f0ced2b2bdd2ba06069e2939128",
      "dimensions": {
        "width": 480,
        "height": 1281
      },
      "kind": "diagram",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "dark",
      "occurrence_id": "pb-036@1024x768-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5",
        "occurrence_id": "pb-036@1024x768-dark",
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        },
        "theme": "dark",
        "source_current_url": "http://127.0.0.1:4341/_astro/prd-sdd-tdd.BSX7y85q_Z1UK1In.svg",
        "source_svg_sha256": "f5a832df82192f336ac41f64f9ece4a780843457d8ca81336ca198e38826c846",
        "full_page": true,
        "clip": {
          "x": 316,
          "y": 3076,
          "width": 480,
          "height": 1281
        },
        "source_dom_box": {
          "x": 316,
          "y": 3076.90625,
          "width": 480,
          "height": 1280
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
      "id": "R06-PNG-12",
      "order": 12,
      "path": "output/playwright/task20-prd-evidence/accepted/pb-036-1024x768-dark-task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5-context.png",
      "sha256": "40fbf81bf2213dbc3f479c3917b2e7c20487cff6c31a6bcaf65995873e055009",
      "dimensions": {
        "width": 1024,
        "height": 2121
      },
      "kind": "diagram-context",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "dark",
      "occurrence_id": "pb-036@1024x768-dark",
      "capture_method": "unresized crop of same-state accepted full PNG; verifies only diagram-adjacent prose",
      "provenance": {
        "source_full_png": "output/playwright/task20-prd-evidence/accepted/pb-036-1024x768-dark-task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5-full.png",
        "source_full_sha256": "27aaf4e6b9835054b26943bceed757bff07e21af8827f1f35754a94b07caf0ab",
        "source_rectangle_px": {
          "left": 0,
          "top": 2896,
          "width": 1024,
          "height": 2121
        }
      }
    },
    {
      "id": "R06-PNG-13",
      "order": 13,
      "path": "output/playwright/task20-prd-evidence/top-viewports/pb-036-mobile-light-task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5.png",
      "sha256": "19dcf7b44366c3871b99da14ff6e9dc0423f5c395fff6c78a213bc587b8099f5",
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
      "occurrence_id": "pb-036@390x844-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5",
        "occurrence_id": "pb-036@390x844-light",
        "viewport": {
          "id": "mobile",
          "width": 390,
          "height": 844
        },
        "theme": "light",
        "source_current_url": "http://127.0.0.1:4341/_astro/prd-sdd-tdd.BSX7y85q_Z1UK1In.svg",
        "source_svg_sha256": "f5a832df82192f336ac41f64f9ece4a780843457d8ca81336ca198e38826c846",
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
      "id": "R06-PNG-14",
      "order": 14,
      "path": "output/playwright/task20-prd-evidence/diagram-crops/pb-036-mobile-light-task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5-prd-direct.png",
      "sha256": "aea9b5cd409f42b718910853be694a2f338d4f85378d4da9d903290a7a362749",
      "dimensions": {
        "width": 358,
        "height": 956
      },
      "kind": "diagram",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "occurrence_id": "pb-036@390x844-light",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5",
        "occurrence_id": "pb-036@390x844-light",
        "viewport": {
          "id": "mobile",
          "width": 390,
          "height": 844
        },
        "theme": "light",
        "source_current_url": "http://127.0.0.1:4341/_astro/prd-sdd-tdd.BSX7y85q_Z1UK1In.svg",
        "source_svg_sha256": "f5a832df82192f336ac41f64f9ece4a780843457d8ca81336ca198e38826c846",
        "full_page": true,
        "clip": {
          "x": 16,
          "y": 5550,
          "width": 358,
          "height": 956
        },
        "source_dom_box": {
          "x": 16,
          "y": 5550.703125,
          "width": 358,
          "height": 954.65625
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
      "id": "R06-PNG-15",
      "order": 15,
      "path": "output/playwright/task20-prd-evidence/accepted/pb-036-390x844-light-task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5-context.png",
      "sha256": "4d003f60e19332b91d54b0cc69cccc7218e4be642db1a2a98475b5a71d375435",
      "dimensions": {
        "width": 390,
        "height": 1796
      },
      "kind": "diagram-context",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "occurrence_id": "pb-036@390x844-light",
      "capture_method": "unresized crop of same-state accepted full PNG; verifies only diagram-adjacent prose",
      "provenance": {
        "source_full_png": "output/playwright/task20-prd-evidence/accepted/pb-036-390x844-light-task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5-full.png",
        "source_full_sha256": "ba592bca49010e801d28ac0e45afb9a142031fab2881c035f6bd04802dd1d664",
        "source_rectangle_px": {
          "left": 0,
          "top": 5370,
          "width": 390,
          "height": 1796
        }
      }
    },
    {
      "id": "R06-PNG-16",
      "order": 16,
      "path": "output/playwright/task20-prd-evidence/top-viewports/pb-036-mobile-dark-task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5.png",
      "sha256": "941ce0ae35fc92da264c85ab5fafbbd6812584b66247ce2cc52f8c90b6c036df",
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
      "occurrence_id": "pb-036@390x844-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5",
        "occurrence_id": "pb-036@390x844-dark",
        "viewport": {
          "id": "mobile",
          "width": 390,
          "height": 844
        },
        "theme": "dark",
        "source_current_url": "http://127.0.0.1:4341/_astro/prd-sdd-tdd.BSX7y85q_Z1UK1In.svg",
        "source_svg_sha256": "f5a832df82192f336ac41f64f9ece4a780843457d8ca81336ca198e38826c846",
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
      "id": "R06-PNG-17",
      "order": 17,
      "path": "output/playwright/task20-prd-evidence/diagram-crops/pb-036-mobile-dark-task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5-prd-direct.png",
      "sha256": "994258128d36635c778a028c19b722e75958675c209a1b77e4ba2a2a3d177b93",
      "dimensions": {
        "width": 358,
        "height": 956
      },
      "kind": "diagram",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "occurrence_id": "pb-036@390x844-dark",
      "capture_method": "page.screenshot",
      "provenance": {
        "method": "page.screenshot",
        "scale": "css",
        "capture_nonce": "task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5",
        "occurrence_id": "pb-036@390x844-dark",
        "viewport": {
          "id": "mobile",
          "width": 390,
          "height": 844
        },
        "theme": "dark",
        "source_current_url": "http://127.0.0.1:4341/_astro/prd-sdd-tdd.BSX7y85q_Z1UK1In.svg",
        "source_svg_sha256": "f5a832df82192f336ac41f64f9ece4a780843457d8ca81336ca198e38826c846",
        "full_page": true,
        "clip": {
          "x": 16,
          "y": 5550,
          "width": 358,
          "height": 956
        },
        "source_dom_box": {
          "x": 16,
          "y": 5550.703125,
          "width": 358,
          "height": 954.65625
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
      "id": "R06-PNG-18",
      "order": 18,
      "path": "output/playwright/task20-prd-evidence/accepted/pb-036-390x844-dark-task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5-context.png",
      "sha256": "842e3c149ba8c5637fe5c65950b278ab6a8a916aca72c3001d7e60a0cc13d7c4",
      "dimensions": {
        "width": 390,
        "height": 1796
      },
      "kind": "diagram-context",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "occurrence_id": "pb-036@390x844-dark",
      "capture_method": "unresized crop of same-state accepted full PNG; verifies only diagram-adjacent prose",
      "provenance": {
        "source_full_png": "output/playwright/task20-prd-evidence/accepted/pb-036-390x844-dark-task20-pbv10-20260827174833694-f43afa8a-a62b-4f9e-a6c0-a224739347a5-full.png",
        "source_full_sha256": "3bb31531f5491a2c3e7a7977f3f8388a92a7cc9d873f2a456c2d27cd1b059f1f",
        "source_rectangle_px": {
          "left": 0,
          "top": 5370,
          "width": 390,
          "height": 1796
        }
      }
    }
  ]
}
```
<!-- m5-r06-request:data:end -->
