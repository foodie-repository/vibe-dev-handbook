# R01 소프트웨어 시스템 M5 독립 검토 요청서

입력 고정일: 2026-09-12 · 기준 commit: `d164e974db1b1b88dd804009b458bcc0442c13f3` · 상태: 입력 고정, 실제 검토 미실행 · 공개 가능 판정: 아니요

## 요청 목적과 경계

이 요청서는 R01 대상 원고 전체와 공통 검토 계약, 공유 다이어그램의 게시 SVG·Mermaid 원본, 두 소비 문맥의 실제 렌더 PNG 12개, 2026-09-12에 직접 확인한 공식·1차 자료의 짧고 추적 가능한 발췌 파일을 직접 입력으로 고정하고, R01 판단에 필요한 정본 문맥만 정확한 발췌로 제공합니다. tracked 근거 파일은 출처별 공식 URL·제공자·관찰한 문서 버전 또는 상태·접근일·정확한 위치·공식 페이지 또는 출처당 합계25단어 이하 원문·claim-to-excerpt 연결·적용 주장·일반화 금지선·접근 결과를 함께 보존합니다. R01은 `input-fixed / confirmed / review_ready true`이지만 실제 검토·결과·재판정·재검토는 모두 `not-run`입니다.

`checked_at: 2026-09-12`는 공식 자료에 실제 접근한 날짜이지 발행일이 아닙니다. `unversioned current`는 그 접근 시점의 관찰이며 영구 상태가 아닙니다. IEEE HTML base/topics처럼 접근하지 못한 경로는 별도 `not-confirmed` 행으로 유지하고, 접근 가능한 SWEBOK PDF 범위와 합치지 않습니다. 기존 source-map의 2026-08-04·2026-08-13 기록은 수정하거나 갱신하지 않았습니다.

## 실행 조건

계획 프로필은 `gpt-6-astra`·reasoning effort `high`입니다. controller·작성자·이전 대화 이력과 분리된 fresh reviewer가 열거된 파일만 읽기 전용으로 사용하고, 파일·Git·셸·테스트·웹·MCP·플러그인·스킬·하위 에이전트·외부 상태를 사용하지 않습니다. reviewer는 결과를 응답으로만 반환하며 controller가 입력 완전성·해시·실제 모델/effort·권한·6절 형식을 확인하기 전에는 정본 결과로 저장하지 않습니다.

R01 입력은 고정됐지만 아직 reviewer를 실행하지 않았습니다. C05 tracked source-evidence 입력의 누락·해시·schema·confirmed claim-family 불일치, 그 밖의 입력 누락·미독, 기준 commit·개별/결합 SHA-256 불일치, 실제 모델/effort 미확인, 출력 중단 또는 권한 위반이 있으면 Critical·Important가 없더라도 `BLOCKED`입니다. 정상 결과도 소유자 승인·`ready`·RC·M6/M7·commit·push·배포·공개 URL을 승인하지 않습니다.

<!-- m5-r01-review-request:data:start -->
```json
{
  "schema_version": 1,
  "campaign": "public-beta-1-m5",
  "review_id": "R01",
  "slug": "software-system",
  "baseline_commit": "d164e974db1b1b88dd804009b458bcc0442c13f3",
  "request_path": "docs/project/reviews/public-beta-1/r01-software-system-request.md",
  "contract": {
    "path": "docs/project/reviews/public-beta-1/codex-review-contract.md",
    "version": "2026-09-05-two-layer-codex"
  },
  "planned_profile": {
    "model": "gpt-6-astra",
    "reasoning_effort": "high"
  },
  "reviewer_conditions": {
    "context": "fresh",
    "independence": "controller·작성자·이전 대화 이력과 분리된 fresh Codex reviewer",
    "access": "read-only-fixed-inputs",
    "response": "response-only",
    "prohibited": [
      "파일 수정",
      "Git",
      "셸/Bash",
      "테스트 실행",
      "웹·네트워크",
      "MCP",
      "플러그인",
      "스킬",
      "하위 에이전트",
      "외부 상태 변경"
    ]
  },
  "target_questions": [
    "비개발자가 화면을 구성요소·책임·경계·상태·흐름·품질이 연결된 소프트웨어 시스템으로 이해할 수 있는가?",
    "프로그램·소프트웨어·시스템·아키텍처·구성요소를 혼동하지 않고 여섯 렌즈의 편집 틀과 일반화 금지선을 설명하는가?",
    "모임 웹앱과 교육용 주가 fixture 사례가 서로 다른 상태·책임·권리 경계를 유지하면서 같은 시스템 사고를 가르치는가?",
    "analytics-dashboard-architecture의 SVG·Mermaid·두 소비 문맥·alt·시각 증거가 같은 의미와 한계를 유지하는가?",
    "실패 위치와 화면·네트워크·서버·데이터·운영 증거를 분리하고 AI 작업 요청과 검증 행동으로 연결하는가?"
  ],
  "non_goals": [
    "원고·도표·근거 파일 수정 또는 전면 재작성",
    "새 네트워크 조사나 기록된 확인일 갱신",
    "실제 시장 데이터·제품·도구의 현재 상태 추정",
    "실제 R01 결과 파일·재판정 파일·행렬 완료 상태 작성",
    "M5·ready·소유자 승인·RC·M6/M7·commit·push·배포·공개 URL 승인"
  ],
  "contract_application": {
    "clauses": [
      "C01",
      "C02",
      "C03",
      "C04",
      "C05",
      "C06",
      "C07",
      "C08",
      "C09",
      "C10",
      "C11",
      "C12"
    ],
    "rubric": {
      "items": 9,
      "maximum": 18,
      "pass_minimum": 15
    },
    "fatal_zero_required": true,
    "finding_severities": [
      "Critical",
      "Important",
      "Minor"
    ],
    "output_sections": [
      "검토 범위와 실제 읽은 입력",
      "판정과 건수",
      "위치별 finding",
      "9항목 루브릭과 치명 항목",
      "미확인 사실·남은 위험·검토 한계",
      "재확인 기준"
    ],
    "blocked_when": [
      "C05 tracked source-evidence 입력 누락·해시·schema·confirmed claim-family 불일치",
      "입력 누락·미독",
      "개별 또는 결합 SHA-256 불일치",
      "기준 SHA 불일치",
      "실제 모델·reasoning effort 미확인",
      "읽기 전용·response-only 위반",
      "출력 상한 또는 중간 종료"
    ]
  },
  "direct_inputs": [
    {
      "id": "review-contract",
      "role": "검토 계약 전체",
      "path": "docs/project/reviews/public-beta-1/codex-review-contract.md",
      "sha256": "e0df0f1092868097207189175ee9d0ead5d7fc15aecf56dd0d2937b8f44fd946",
      "read_mode": "full"
    },
    {
      "id": "target-manuscript",
      "role": "대상 원고 전체",
      "path": "src/content/docs/01-mental-models/software-is-a-system.md",
      "sha256": "d9569195713fd0db9201af1d18c141ab4a9836eca3980bc4905b2b46374aea2e",
      "read_mode": "full"
    },
    {
      "id": "consumed-svg",
      "role": "두 공개 문맥이 소비하는 게시 SVG 전체",
      "path": "src/assets/diagrams/analytics-dashboard-architecture.svg",
      "sha256": "0627d5671fdd25b07fac3c54e65f7bee9ef24c384dd45e8741bd64469590e143",
      "read_mode": "full"
    },
    {
      "id": "mermaid-source",
      "role": "게시 SVG의 편집 원본 전체",
      "path": "src/assets/diagrams/source/analytics-dashboard-architecture.mmd",
      "sha256": "c43970fb0dc454261cd04c7fd276f68c83ab550d37a265dcb931a44ca5932f3a",
      "read_mode": "full"
    },
    {
      "id": "official-source-evidence",
      "role": "2026-09-12 공식·1차 근거의 짧은 원문 발췌·위치·claim-to-excerpt 연결·적용 범위·실패 경계 전체",
      "path": "research/public-beta-review-source-excerpts/r01-software-system.md",
      "sha256": "c63f3a30f393400827e3c702fefb578e1c036ab379be1dfd37b0b891bca20902",
      "read_mode": "full"
    },
    {
      "id": "render-pb021-1440-light",
      "role": "PB-021 1440×1000 light 실제 다이어그램 crop",
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-021-desktop-light-task20-pbv02-20260827155719257-59c60b91893d68-diagram.png",
      "sha256": "c260a7a70fffc8c41320c2bb524713b675eb7d4ef19d71a216a89bfb61ff50ed",
      "read_mode": "binary-full",
      "evidence_scope": { "consumer_id": "PB-021", "route": "/01-mental-models/software-is-a-system/", "viewport": "1440x1000", "theme": "light", "kind": "actual-diagram-crop" }
    },
    {
      "id": "render-pb021-1440-dark",
      "role": "PB-021 1440×1000 dark 실제 다이어그램 crop",
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-021-desktop-dark-task20-pbv02-20260827155431806-ca3bf04e72a678-diagram.png",
      "sha256": "0a961b9e3e30b54836bf2032f136b408ea283512c0738399febc25cfb43dc9c8",
      "read_mode": "binary-full",
      "evidence_scope": { "consumer_id": "PB-021", "route": "/01-mental-models/software-is-a-system/", "viewport": "1440x1000", "theme": "dark", "kind": "actual-diagram-crop" }
    },
    {
      "id": "render-pb021-1024-light",
      "role": "PB-021 1024×768 light 실제 다이어그램 crop",
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-021-tablet-light-task20-pbv02-20260827155431806-ca3bf04e72a678-diagram.png",
      "sha256": "c260a7a70fffc8c41320c2bb524713b675eb7d4ef19d71a216a89bfb61ff50ed",
      "read_mode": "binary-full",
      "evidence_scope": { "consumer_id": "PB-021", "route": "/01-mental-models/software-is-a-system/", "viewport": "1024x768", "theme": "light", "kind": "actual-diagram-crop" }
    },
    {
      "id": "render-pb021-1024-dark",
      "role": "PB-021 1024×768 dark 실제 다이어그램 crop",
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-021-tablet-dark-task20-pbv02-20260827155431806-ca3bf04e72a678-diagram.png",
      "sha256": "74793fcc6c93962f05868fd5e8b4a8fc9abcfb753b6bdedce5b4070e1022f308",
      "read_mode": "binary-full",
      "evidence_scope": { "consumer_id": "PB-021", "route": "/01-mental-models/software-is-a-system/", "viewport": "1024x768", "theme": "dark", "kind": "actual-diagram-crop" }
    },
    {
      "id": "render-pb021-390-light",
      "role": "PB-021 390×844 light 실제 다이어그램 crop",
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-021-390x844-light-bounded-1787846823654-diagram-calibrated.png",
      "sha256": "370a6abcf76e021fc6e143f3c374b12f584d5f226e0a34a24eec82a59a365dee",
      "read_mode": "binary-full",
      "evidence_scope": { "consumer_id": "PB-021", "route": "/01-mental-models/software-is-a-system/", "viewport": "390x844", "theme": "light", "kind": "actual-diagram-crop" }
    },
    {
      "id": "render-pb021-390-dark",
      "role": "PB-021 390×844 dark 실제 다이어그램 crop",
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-021-390x844-dark-bounded-1787846823654-diagram-calibrated.png",
      "sha256": "3cfa726e159a6391a4f544b1c4393ed8597560816e01203856d2f6e4237cbb8a",
      "read_mode": "binary-full",
      "evidence_scope": { "consumer_id": "PB-021", "route": "/01-mental-models/software-is-a-system/", "viewport": "390x844", "theme": "dark", "kind": "actual-diagram-crop" }
    },
    {
      "id": "render-pb053-1440-light",
      "role": "PB-053 1440×1000 light 실제 다이어그램 crop",
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-053-1440x1000-light-bounded-1787846823654-diagram-calibrated.png",
      "sha256": "c1e751bb6e4850089522b8d3eabc57e2f4297fe1535ec52bb90c90fe8a20ee91",
      "read_mode": "binary-full",
      "evidence_scope": { "consumer_id": "PB-053", "route": "/12-case-studies/analytics-dashboard-case-study/", "viewport": "1440x1000", "theme": "light", "kind": "actual-diagram-crop" }
    },
    {
      "id": "render-pb053-1440-dark",
      "role": "PB-053 1440×1000 dark 실제 다이어그램 crop",
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-053-1440x1000-dark-bounded-1787846823654-diagram-calibrated.png",
      "sha256": "0c24fc0b38785641aac398f007ca4c28440c6792139a66d81b06af06003aa3f6",
      "read_mode": "binary-full",
      "evidence_scope": { "consumer_id": "PB-053", "route": "/12-case-studies/analytics-dashboard-case-study/", "viewport": "1440x1000", "theme": "dark", "kind": "actual-diagram-crop" }
    },
    {
      "id": "render-pb053-1024-light",
      "role": "PB-053 1024×768 light 실제 다이어그램 crop",
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-053-1024x768-light-bounded-1787846823654-diagram-calibrated.png",
      "sha256": "c1e751bb6e4850089522b8d3eabc57e2f4297fe1535ec52bb90c90fe8a20ee91",
      "read_mode": "binary-full",
      "evidence_scope": { "consumer_id": "PB-053", "route": "/12-case-studies/analytics-dashboard-case-study/", "viewport": "1024x768", "theme": "light", "kind": "actual-diagram-crop" }
    },
    {
      "id": "render-pb053-1024-dark",
      "role": "PB-053 1024×768 dark 실제 다이어그램 crop",
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-053-1024x768-dark-bounded-1787846823654-diagram-calibrated.png",
      "sha256": "8087f6c8463877fb4cc0f7f86142a14b99679e272b85398e75221c75ad85aa0b",
      "read_mode": "binary-full",
      "evidence_scope": { "consumer_id": "PB-053", "route": "/12-case-studies/analytics-dashboard-case-study/", "viewport": "1024x768", "theme": "dark", "kind": "actual-diagram-crop" }
    },
    {
      "id": "render-pb053-390-light",
      "role": "PB-053 390×844 light 실제 다이어그램 crop",
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-053-390x844-light-bounded-1787846823654-diagram-calibrated.png",
      "sha256": "1f98b1c596412436bf362f67e10fd47b197b65fd6a03f86308d0b3be14506bd5",
      "read_mode": "binary-full",
      "evidence_scope": { "consumer_id": "PB-053", "route": "/12-case-studies/analytics-dashboard-case-study/", "viewport": "390x844", "theme": "light", "kind": "actual-diagram-crop" }
    },
    {
      "id": "render-pb053-390-dark",
      "role": "PB-053 390×844 dark 실제 다이어그램 crop",
      "path": "output/playwright/task20-analytics-evidence/final-crops/pb-053-390x844-dark-bounded-1787846823654-diagram-calibrated.png",
      "sha256": "abd52134e6f2e6acf1853c590e75c70eb2751656666356d2be904ec0778c827f",
      "read_mode": "binary-full",
      "evidence_scope": { "consumer_id": "PB-053", "route": "/12-case-studies/analytics-dashboard-case-study/", "viewport": "390x844", "theme": "dark", "kind": "actual-diagram-crop" }
    }
  ],
  "context_excerpts": [
    {
      "id": "completion-spec",
      "role": "최상위 목표·핵심 장·M5 계약",
      "path": "docs/superpowers/specs/2026-08-12-public-beta-completion-design.md",
      "sha256": "7012b0ed9e0a7c4279358a51e9e4b7062f6456f33dee8d0570051718d6d9dbfa",
      "segments": [
        {
          "label": "목표·독자·비목표",
          "start_line": 15,
          "end_line": 53,
          "text": "## 2. 최상위 목표\n\n비개발자 바이브 코더가 소프트웨어의 구조·용어·개발 절차·개발자의 사고법을 이해하고, AI가 만든 결과를 질문·검토·검증·운영할 수 있도록 돕는 한국어 핸드북을 완성하여 공개 GitHub 저장소와 GitHub Pages에서 공개 베타로 배포하고 실제 공개 URL까지 검증합니다.\n\n완료 범위에는 다음이 포함됩니다.\n\n- 역할별 전체 공개 원고 완성\n- 기존 원고를 포함한 콘텐츠 규칙 전수 감사\n- 모임 참가 웹앱과 주가 데이터 분석 대시보드 사례의 일관된 적용\n- 초보자가 관계·흐름·상태를 이해하는 데 필요한 시각 자료\n- 검색·학습 경로·용어집·교차 링크\n- 자동 검증·빌드·브라우저 검증\n- Codex 두 겹 독립 검토와 지적 재판정(10.2절)\n- 프로젝트 소유자 최종 승인\n- 공개 GitHub 저장소와 GitHub Issues 피드백 경로\n- GitHub Pages 공개 배포와 비로그인 환경의 실제 URL 검증\n- `v0.1.0-beta.1` 릴리스 기록\n\n## 3. 독자와 교육 목표\n\n주요 독자는 Claude Code·Codex 등으로 바이브 코딩을 하는 비개발자, 데이터 분석가, PM, 디자이너와 도메인 전문가입니다. 코드를 많이 작성하는 법보다 다음 능력을 먼저 기릅니다.\n\n- 화면을 하나의 결과가 아니라 여러 책임이 연결된 소프트웨어 시스템으로 봅니다.\n- 프런트엔드·백엔드·API·데이터베이스·인증·배포·운영의 위치와 관계를 설명합니다.\n- 요구사항·설계·작업 계획·테스트·검토를 서로 다른 산출물과 활동으로 구분합니다.\n- Git 상태, diff, 로그, HTTP 응답, 권위 있는 데이터 재조회와 브라우저 화면을 서로 다른 증거로 사용합니다.\n- AI에게 모호하게 일을 넘기지 않고 목표·비목표·권한·실패 조건·수용 기준·검증 방법을 전달합니다.\n- 특정 도구가 바뀌어도 유지되는 구조·원리·판단법을 익힙니다.\n\n## 4. 비목표\n\n공개 베타의 필수 범위에 다음은 포함하지 않습니다.\n\n- 종이책 출판을 전제로 한 전문 교정·교열\n- 여러 명의 외부 기술 검토자와 대규모 독자 연구\n- 실제 비개발자 참여자를 모집한 사용성 실험\n- 맞춤 도메인\n- 사용자 계정과 학습 진도 저장\n- 서버·데이터베이스·CMS를 사용하는 별도 핸드북 애플리케이션"
        },
        {
          "label": "M5 완료 범위",
          "start_line": 173,
          "end_line": 180,
          "text": "### M5 — 독립 검토와 모든 공개 문서 `ready` 승격\n\n- 10.2절의 Codex 두 겹 독립성 조건을 충족할 때 독립 검토를 실행합니다. M5의 R01~R25는 공개 문서 59개 전체, R26은 분리된 통합 검토이며 표본·작업 단위 검토로 대체하지 않습니다.\n- controller가 Codex finding을 현재 원고·공식 근거·프로젝트 규칙에 대조해 재판정합니다.\n- Critical·Important 지적을 수정하고 필요한 범위를 재검토합니다.\n- 자동·브라우저·시각 자료 검증을 완료합니다.\n- 프로젝트 소유자가 고정된 검토 묶음과 기준 SHA를 승인합니다.\n- 실제 공개되는 모든 문서를 `ready`로 승격합니다."
        },
        {
          "label": "핵심 개념 장 완료 기준",
          "start_line": 282,
          "end_line": 290,
          "text": "### 9.1 핵심 개념 장\n\n- 독자 질문과 한 문장 정의가 명확합니다.\n- 쉬운 설명과 정식 용어를 연결합니다.\n- 비유를 쓰면 맞는 지점과 깨지는 지점을 설명합니다.\n- 시스템 내 위치와 다른 구성요소의 관계를 보여 줍니다.\n- 판단 기준·금지 신호·대표 실패·복구·검증 증거가 있습니다.\n- 실제 AI 작업 요청과 결과 검토에 연결합니다.\n- 해당 행의 Codex 독립 심층 검토를 통과합니다."
        },
        {
          "label": "Codex 두 겹 계약과 대기 경계",
          "start_line": 338,
          "end_line": 356,
          "text": "### 10.2 Codex 두 겹 독립 검토 계약\n\n2026-09-05 사용자 결정은 공개 베타 1 M5 캠페인에 한해 과거 2026-08-28 Claude 운영 개정의 미래 완료 기준을 대체합니다. 과거 Claude 계약·사전 확인·요청·시도·결과 파일은 역사로 보존하며, `blocked`·`not-run`·모델 호출0은 유효 Claude 결과나 PASS가 아닙니다. 이는 Claude 일반 사용이나 다른 캠페인의 과거 기록을 변경하지 않습니다.\n\n- R01~R25는 controller·작성자·이전 대화 이력과 분리된 fresh Codex reviewer가 고정 입력 전체를 읽기 전용으로 검토합니다. R26은 R01~R25 reviewer들과 분리된 fresh Codex reviewer가 공개 문서59개 전체, 행별 결과·재판정·재검토, 감사·source gap을 통합 검토합니다.\n- 계획 기본 프로필은 R01~R25 `gpt-6-astra`/`high`, R26 `gpt-6-astra`/`xhigh`입니다. 실제 실행의 모델·reasoning effort를 결과에 기록하며 지정 프로필을 사용할 수 없으면 자동 fallback하지 않고 계약 개정 전까지 해당 행을 보류합니다.\n- `Read`로 열거된 고정 입력만 허용합니다. reviewer는 파일·Git·테스트·웹·MCP·플러그인·스킬·외부 상태를 바꾸지 않습니다.\n- 입력별·결합 SHA-256, 실제 완독 여부, 실제 모델·reasoning effort, 결과·finding·재판정·재검토를 분리해 기록합니다. 입력 부족·해시 불일치·미완독·미확인 모델/effort·실패/부분 결과는 PASS 증거가 아닙니다.\n- 작성·자체 점검·관련 자동 검증을 마친 안정된 원고부터 기존 검토 단위·의존관계를 유지해 위험이 큰 항목을 우선합니다. 핵심·캡스톤·보안·데이터·배포는 개별 또는 기존 소묶음으로, 인덱스·참고편은 기존 의미 묶음으로 검토하고 R26 통합 검토를 유지합니다.\n- [Codex 독립 검토 계약](../../project/reviews/public-beta-1/codex-review-contract.md)의 C01~C12와 해당 행의 요청서를 제공합니다. 대상 원고 전체(메타데이터·코드/프롬프트·alt 포함), 필요한 실제 출처 원문·인접 문맥·용어·그림/원본·미해결 finding을 고정 입력으로 제공합니다. controller 요약·자체 PASS가 원문을 대체하지 않습니다.\n- 검토 전후 입력 해시를 비교합니다. reviewer는 결과를 응답으로만 반환하고 controller가 입력 완전성·해시·실제 모델/effort·읽기 전용 권한·응답 형식을 확인한 뒤 행렬의 Codex 결과 정본 경로에 저장합니다. 결과는 위치·심각도·근거·최소 수정·재확인 기준 중심으로 받고 불필요한 원문 재출력·전면 재작성을 요청하지 않습니다. 계약 경량화로 필수 기준을 줄이거나 작업 단위 검토를 최종 M5 검토로 계산하지 않습니다.\n\n### 10.2.1 검토 대기와 개발 진행\n\n검토 원장은 기존 `pending`·`in_progress`·`blocked`·`done` 상태를 사용하고 대상·대기 사유·입력 파일/해시·마지막 실행·다음 재개 조건을 기록합니다. 현재 대기 사유는 R01~R26 입력 고정 및 Codex 검토 미실행이며, 지정 모델/effort를 사용할 수 없을 때만 실제 원인을 기록합니다. 구현 상태, 필수 검토 상태, 공개 가능 여부는 별도 필드로 관리하며 `blocked`가 전체 목표 중단이나 완료를 뜻하지 않습니다.\n\n검토가 막혀도 결과에 의존하지 않는 기존 목표 안의 작성·수정·근거 정리·자동 검사·로컬 시각 검증은 계속합니다. 고정 입력을 변경해야 하면 변경 전후 SHA-256과 영향 행을 기록하고 이전 증거를 해당 새 입력의 근거로 무효화한 뒤 필요한 범위만 재검토합니다. 영향 없는 유효 증거는 유지합니다. 필수 검토·미해결 Critical/Important·소유자 승인이 남아 있으면 M5 완료·`ready`·공개 가능으로 표시하지 않습니다.\n\n독립 로컬 작업 단위가 수용 기준, 자동 검증, 필요한 실제 브라우저 또는 출력물 검증, 작성자와 분리된 Codex 작업 검토에서 Critical·Important 0개를 충족하고 다른 미완료 변경과 안전하게 분리되면 관련 파일만 선별해 로컬 체크포인트 커밋할 수 있습니다. 이 커밋은 M5 독립 검토·`ready`·소유자 승인·release candidate·push·배포·공개 가능을 뜻하지 않습니다. 이후 Codex finding이나 입력 변경이 생기면 기존 커밋을 덮어쓰지 않고 영향 파일의 좁은 수정 커밋과 필요한 재검토를 추가합니다."
        }
      ],
      "omitted_scope": "M0~M4·M6~M7의 R01 판단과 직접 관련 없는 상세, 라이선스·배포 구현 상세를 생략합니다.",
      "generalization_boundary": "이 발췌는 R01의 독자·콘텐츠·검토 계약만 고정하며 전체 공개 베타 완료나 외부 쓰기 승인을 뜻하지 않습니다."
    },
    {
      "id": "master-plan",
      "role": "Task22 R01 배정·입력·실행 절차",
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "sha256": "62715ae64199d5f11f8ff62891c71b99402f22bf8e9fbd004cdc20d7626d96dc",
      "segments": [
        {
          "label": "현재 Codex 계약 개정과 다음 실행",
          "start_line": 11,
          "end_line": 15,
          "text": "## 2026-09-05 Task22 Codex 검토 계약 개정\n\n푸디님의 명시 결정에 따라 기존 Task22와 M5의 **앞으로의** 완료 기준은 Claude 구독 전용 검토가 아니라 Codex 두 겹 독립 검토입니다. R01~R25는 controller·작성자·이전 대화 이력과 분리된 fresh Codex reviewer, R26은 R01~R25 reviewer들과 분리된 fresh Codex reviewer가 수행합니다. 기본 프로필은 R01~R25 `gpt-6-astra`/`high`, R26 `gpt-6-astra`/`xhigh`이며 사용 불가 시 자동 fallback하지 않습니다. 과거 Claude 계약·시도·사전 확인은 `waived_by_owner`, 모델 호출0, 유효 결과 없음의 역사 기록으로 보존하고 Claude PASS로 해석하지 않습니다. R01~R26 완료 뒤에도 public59 `draft`/ready0, 소유자 승인, 동일 RC SHA, M6/M7는 별도 게이트입니다.\n\n상태 closeout 기준은 DEC-PB-009와 계약 개정 커밋 `c9e83a9`, Fix Round 2 독립 재검토 `PASS` C0/I0/M0입니다. M5-01의 기존 완료 점수는 그대로 두고 이 계약 증거를 추가하며, M5-02~04·R01~R26·public59·점수81.5·감사·source gap·M6-03·M7은 승격하지 않습니다. 다음 실행은 R01 입력과 결합 해시를 고정한 뒤 계획된 fresh Codex reviewer 검토를 시작하는 것입니다."
        },
        {
          "label": "R01 배정",
          "start_line": 1576,
          "end_line": 1584,
          "text": "#### 고정 리뷰 단위\n\n아래 R01~R25는 공개 콘텐츠 59개를 정확히 한 번씩 배정합니다. R26은 R01~R25 전체를 확장해 같은 공개 문서59개와 행별 결과·재판정·재검토, 감사·source gap·시각 감사·`CONTENT_MAP.md`를 통합 검토하며 문서 분모에 중복 계산하지 않습니다.\n\n`docs/project/reviews/public-beta-1/`은 여러 날에 걸친 공개 베타 1 검토 캠페인의 안정적인 경로입니다. 파일 이름의 고정 ID와 별도로 각 기록 본문에 실제 시작·종료 날짜와 시간, 실행 기준 SHA를 남기므로 계획 작성일을 실제 실행일처럼 복제하지 않습니다.\n\n| 체크 | ID·slug | 입력 공개 원고 | 방식 | 결과 파일 | 재판정 파일 |\n|---|---|---|---|---|---|\n| - [ ] | R01 `software-system` | `01-mental-models/software-is-a-system.md` | 개별 심층 | `public-beta-1/r01-software-system-codex-review.md` | `public-beta-1/r01-software-system-adjudication.md` |"
        },
        {
          "label": "Step1 완료와 Step2 프로필",
          "start_line": 1613,
          "end_line": 1624,
          "text": "**Step 1: 공통 계약과 행렬을 고정합니다.**\n\n- [x] 역사 전용 `opus5-review-contract.md`의 실질 기준을 [Codex 검토 계약](../../project/reviews/public-beta-1/codex-review-contract.md)의 C01~C12와 권위 조항 대응표, 9항목 루브릭/치명 항목, 심각도·6절 출력·권한·입력/증거 유효성 기준으로 보존·이식했음을 확인합니다.\n- [x] 요청 템플릿으로 각 ID의 검토 종류(작업 단위 또는 M5)·기준 commit·입력별/결합 SHA-256·status·block_reason·마지막 사전 확인/실행·재개 조건·결과/재판정/재검토·남은 finding을 기록합니다. 구현 상태·필수 검토 상태·공개 가능 여부는 별도 필드입니다.\n- [x] R01~R25는 공통 계약 C01~C12의 정확한59경로와 대조해 중복0·누락0을 유지하고, R26은 R01~R25 전체를 확장해 같은 공개59개를 정확히 한 번 통합하도록 고정합니다. `*-codex-review.md`와 `*-codex-rereview.md` 경로를 사용하며 실제 모델과 reasoning effort는 실행 메타데이터로 판정합니다.\n- [x] `claude-attempt-log.md`는 시도 템플릿으로 정상/실패/미호출을 구분하고 요청 모델/1M/high·실제 인자·결과의 실제 설정·구독 전용 입증/차단·CLI·시각·종료 코드/실패 단계·reset 안내·입력 해시를 기록합니다. 비밀/계정 식별정보/세션ID/정확한 비용은 기록하지 않습니다.\n- [x] 과거 입력 불변·당시 계약상 유효한 완료 검토는 모델 변경만으로 반복하지 않습니다. 과거 `max` 등 M5 계약에 맞지 않는 기록과 작업 단위 검토를 새 M5 행의 증거로 바꾸지 않습니다.\n- [x] 계약/행렬 단위도 필수 자동 검증과 작성자와 분리된 Codex 작업 검토에서 미해결 Critical·Important 0건을 확인하고 다른 미완료 변경과 안전하게 분리한 뒤에만 관련 파일을 `implementation verified / M5 Codex review pending` 체크포인트로 선별 커밋합니다. 과거 Claude 검토가 막힌 기록은 이 조건을 충족한 로컬 단위의 커밋을 금지하지 않지만, Codex R01~R26·M5·`ready`·소유자·M7 게이트는 완료하지 않습니다.\n\n**Step 2: 행별 입력·독립성·Codex 실행 프로필을 고정합니다.**\n\n이 2026-09-05 개정 뒤의 실행은 Claude CLI·인증·구독·preflight를 호출하거나 재개 조건으로 쓰지 않습니다. 과거 Step2의 Claude 사전 확인은 역사 기록을 설명할 뿐 미래 절차가 아닙니다. 각 R01~R25는 controller·작성자·이전 대화 이력과 분리된 fresh Codex reviewer, R26은 R01~R25 reviewer들과 분리된 fresh Codex reviewer에게 배정합니다. R01~R25는 `gpt-6-astra`/`high`, R26은 `gpt-6-astra`/`xhigh`를 계획 기본값으로 요청하고, 실제 모델·reasoning effort를 결과에 기록합니다. 지정 프로필이 없으면 자동 fallback하지 않고 해당 행을 pending으로 둡니다."
        },
        {
          "label": "Step3 입력·결과 조건",
          "start_line": 1656,
          "end_line": 1663,
          "text": "**Step 3: 안정된 원고의 전체 입력을 fresh Codex reviewer가 읽기 전용으로 검토합니다.**\n\n각 행에는 공통 계약/권위 대응표, 대상 본문 전체(frontmatter·코드/프롬프트·표·alt 포함), 필요한 실제 출처 원문/source-map/source-gap·인접 장/용어집·SVG/원본/실제 렌더·미해결 finding을 제공합니다. 전체 명세/계획 등 긴 문서를 매번 반복하지 않고 쟁점의 원조항만 추가합니다. Codex 요약/자체 PASS가 본문이나 필요한 근거를 대신하지 않으며 열거하지 않은 파일은 임의 탐색하지 않습니다. R26도 해당 대상 본문 전체와 실제 R01~R25 결과/재판정을 대조합니다.\n\n각 reviewer에게 새 `public-beta-codex-review-request-template.md`, 행렬의 고정 입력·개별/결합 SHA-256, C01~C12를 제공합니다. reviewer는 실제 입력 전체를 Read-only로 완독하고, 완독 여부·부족 입력·실제 모델/effort·결과·finding을 응답으로만 반환합니다. controller가 입력 완전성·해시·권한·응답 형식을 확인한 뒤에만 `*-codex-review.md` 정본 경로에 저장합니다. 입력·해시·완독·모델/effort가 하나라도 미확인이면 `BLOCKED`이며 PASS가 아닙니다.\n\n- [ ] R01~R25 reviewer가 controller·작성자·이전 대화 이력과 분리됐는지, R26 reviewer가 R01~R25 reviewer들과 분리됐는지 요청서와 결과에 기록합니다.\n- [ ] 결과가 실제 모델/effort, 입력 완독/불변, C01~C12, Critical/Important/Minor와 위치·근거·최소 수정·재확인 기준을 포함할 때만 정상 독립 검토로 인정합니다."
        }
      ],
      "omitted_scope": "다른 Task와 R02~R26의 개별 배정표·과거 Claude 실행 절차·M6~M7 세부를 생략합니다.",
      "generalization_boundary": "R01 입력 고정은 R01 실제 검토·결과·재판정·완료 또는 다른 행의 입력 고정을 뜻하지 않습니다."
    },
    {
      "id": "repository-rules",
      "role": "프로젝트 핵심 규칙 전체",
      "path": "RULES.md",
      "sha256": "9c68b91038149c57a811b0f431012c6ffb96b3b5464600768c12095dac5914eb",
      "segments": [
        {
          "label": "핵심 규칙",
          "start_line": 1,
          "end_line": 12,
          "text": "# 프로젝트 핵심 규칙\n\n1. 기본기를 유행어보다 먼저 설명합니다.\n2. 독자에게 코드를 외우게 하기보다 시스템의 구조와 흐름을 보게 합니다.\n3. 비유에는 항상 적용 범위와 한계를 적습니다.\n4. 같은 약어의 여러 뜻을 섞지 않습니다.\n5. 요구사항, 설계, 구현, 테스트, 배포, 운영을 하나의 생명주기로 연결합니다.\n6. 작은 변경, 자동 검증, 되돌릴 수 있는 작업을 기본값으로 삼습니다.\n7. 공식·1차 출처를 우선하고 최신성이 필요한 사실은 다시 확인합니다.\n8. 회사 데이터, 개인정보, 비밀정보를 예제나 저장소에 넣지 않습니다.\n9. 새 도구는 실제 독자 문제를 해결할 때만 추가합니다.\n10. 검증하지 못한 결과를 완료됐다고 표현하지 않습니다."
        }
      ],
      "omitted_scope": "없음. 파일 전체입니다.",
      "generalization_boundary": "규칙은 판단 기준이며 개별 주장이나 실행 결과를 대신하는 증거가 아닙니다."
    },
    {
      "id": "content-map-pb-021",
      "role": "공개 경로·현재 상태",
      "path": "CONTENT_MAP.md",
      "sha256": "9272b9d290ba49c25fdd8358b9c2e2fa32aebd19d97e8dcad4f5a015664fbbed",
      "segments": [
        {
          "label": "PB-021 콘텐츠 지도 행",
          "start_line": 48,
          "end_line": 48,
          "text": "| [소프트웨어는 시스템입니다](src/content/docs/01-mental-models/software-is-a-system.md) | `draft` | 15,550 | `/01-mental-models/software-is-a-system/` |"
        }
      ],
      "omitted_scope": "PB-021 이외 공개 문서 행을 생략합니다.",
      "generalization_boundary": "draft·글자 수·경로만 증명하며 내용 적합성이나 ready를 증명하지 않습니다."
    },
    {
      "id": "content-audit-pb-021",
      "role": "현재 콘텐츠 감사 판정",
      "path": "docs/project/public-beta-content-audit.md",
      "sha256": "d8a058833542cfc69ba6f079f5624edb6bebf83e4e5d9dfe926251228dc79d68",
      "segments": [
        {
          "label": "PB-021 감사 행",
          "start_line": 46,
          "end_line": 46,
          "text": "| PB-021 | `src/content/docs/01-mental-models/software-is-a-system.md` | core | 소프트웨어를 화면이 아닌 시스템으로 어떻게 보는가? | 구성요소·책임·경계·상태·흐름·품질로 설명한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 12; Task 20 resolved | 여섯 렌즈의 편집 틀 경계, 두 사례의 상태 변경/읽기·변환 책임, 네 성공 관점, HTTP 캐시·정적 전달·브라우저 도구의 직접 근거를 보강했습니다. analytics 그림의 390px 핵심·보조 레이블 판독성은 Task 20 `aa13701`과 실제 Chrome 12상태·Codex `PASS`로 교정됐습니다. |"
        }
      ],
      "omitted_scope": "PB-021 이외 감사 행과 전체 집계를 생략합니다.",
      "generalization_boundary": "Task12·Task20의 감사 이력을 고정하며 새 R01 독립 검토를 대신하지 않습니다."
    },
    {
      "id": "source-gap-pbsg-021",
      "role": "R01 출처 gap 상태와 일반화 금지선",
      "path": "research/public-beta-source-gap-register.md",
      "sha256": "dac010a69ea463fb8dd3d835780367ec164b887417c441f46f7f3887c05929e7",
      "segments": [
        {
          "label": "PBSG-021",
          "start_line": 53,
          "end_line": 53,
          "text": "| PBSG-021 | PB-021 `software-is-a-system.md` | component·responsibility·boundary의 세부 의미, 캐시 사본의 최신성, 정적 전달이 충분한 조건과 브라우저 개발자 도구의 현재 명칭 | important | 소프트웨어 아키텍처 표준·SWEBOK 세부 자료, HTTP 캐시 표준, 웹 플랫폼·브라우저의 공식 정적 전달 및 개발자 도구 문서 | 2026-08-13 확인; 브라우저·웹 플랫폼 문서 상태 또는 예시 도구 변경 시 재확인 | confirmed | Task 12 | 여섯 렌즈를 업계 표준 분류로 만들거나 한 브라우저의 도구 이름·캐시 표시·정적 전달 조건을 모든 브라우저와 시스템에 일반화하지 않습니다. |"
        }
      ],
      "omitted_scope": "PBSG-021 이외 source gap 행을 생략합니다.",
      "generalization_boundary": "2026-08-13 당시 확인 범위입니다. 확인일을 현재로 갱신하거나 현재 제품 상태로 일반화하지 않습니다."
    },
    {
      "id": "source-map-pb-021",
      "role": "PB-021 직접 근거와 장별 출처",
      "path": "research/source-map.md",
      "sha256": "e7dd71b588d92241e815d165f986fb81c1eb909ff991376877741d15ea52d22e",
      "segments": [
        {
          "label": "PB-021 직접 근거",
          "start_line": 212,
          "end_line": 215,
          "text": "| PB-021 소프트웨어 시스템 | https://www.sei.cmu.edu/library/attribute-driven-design-method-collection, https://c4model.com/abstractions/component, https://c4model.com/abstractions/software-system | 2026-08-13 직접 확인; CMU SEI 공식 collection과 C4 모델 공식 사이트의 현재 공개 설명, 페이지 버전 미표시 | 요구·제약에서 요소에 책임을 할당하고 인터페이스를 정의하는 설계 관점, C4 모델 안의 component 정의와 시스템 경계의 맥락 의존성 | 이 책의 여섯 렌즈나 C4 용어를 업계 표준 분류로 확대하지 않고 component·system 경계가 방법·조직·질문에 따라 달라질 수 있음을 유지 |\n| PB-021 소프트웨어 시스템 | https://www.rfc-editor.org/info/rfc9111 | 2026-08-13 직접 확인; RFC 9111, HTTP Caching, Internet Standard STD 98, 2022-06 | HTTP 캐시 응답의 현재 나이·최신성 수명·fresh/stale 및 오래된 응답 처리 조건 | HTTP 캐시 규칙을 애플리케이션 캐시·CDN·브라우저 내부 사본 전체의 보편 동작으로 확대하지 않음 |\n| PB-021 소프트웨어 시스템 | https://docs.astro.build/en/guides/on-demand-rendering/ | 2026-08-13 직접 확인; Astro 현재 공식 unversioned guide, 페이지 버전 미표시 | 기본 빌드 시점 사전 렌더링과 개인화·최신 데이터가 필요한 경로의 요청 시점 렌더링을 구분하는 Astro 구현 예 | Astro의 선택과 기본값을 모든 프레임워크의 정적 전달 충분 조건으로 확대하지 않음 |\n| PB-021 소프트웨어 시스템 | https://developer.chrome.com/docs/devtools/network/, https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/ | 2026-08-13 직접 확인; Chrome과 Firefox의 현재 공식 개발자 도구 문서, 페이지 버전 미표시 | Chrome DevTools `Network` 패널과 Firefox 개발자 도구 `Network Monitor`의 현재 명칭 및 HTTP 요청 관찰 범위 | 한 브라우저의 명칭·위치·표시·기능을 다른 브라우저나 버전의 공통 규칙으로 확대하지 않음 |"
        },
        {
          "label": "장별 출처와 두 사례 연결",
          "start_line": 251,
          "end_line": 258,
          "text": "| `01-mental-models/software-is-a-system.md` | https://www.computer.org/education/bodies-of-knowledge/software-engineering | 2026-08-04 | 소프트웨어를 요구사항·설계·구현·테스트·운영과 품질을 잇는 시스템으로 보는 교육 범위 |\n| `01-mental-models/software-is-a-system.md` | https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics | 2026-08-04 | 책임·경계·상태·흐름·품질·검증 렌즈가 세부 소프트웨어공학 주제를 연결하는 범위 |\n| `01-mental-models/software-is-a-system.md` | https://developer.mozilla.org/en-US/curriculum/ | 2026-08-04 | 웹 프런트엔드에서 브라우저 상태·네트워크 기록·사용자 화면을 서로 다른 관찰 증거로 구분하는 교육 범위 |\n| `01-mental-models/software-is-a-system.md` | https://www.sei.cmu.edu/library/attribute-driven-design-method-collection, https://c4model.com/abstractions/component, https://c4model.com/abstractions/software-system | 2026-08-13 | 요소별 책임·인터페이스 설계 관점과 C4 모델의 특정 component·software system 정의. 여섯 렌즈나 C4를 업계 표준 분류로 일반화하지 않음 |\n| `01-mental-models/software-is-a-system.md` | https://www.rfc-editor.org/info/rfc9111 | 2026-08-13 | HTTP 캐시의 fresh/stale·현재 나이·최신성 수명·오래된 응답 조건. 애플리케이션·CDN·브라우저 사본 전체의 보편 규칙으로 일반화하지 않음 |\n| `01-mental-models/software-is-a-system.md` | https://docs.astro.build/en/guides/on-demand-rendering/ | 2026-08-13 | 빌드 시점 사전 렌더링과 요청 시점 렌더링을 구분하는 Astro 구현 예. 모든 정적 프레임워크의 공통 동작이나 충분 조건으로 일반화하지 않음 |\n| `01-mental-models/software-is-a-system.md` | https://developer.chrome.com/docs/devtools/network/, https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/ | 2026-08-13 | Chrome `Network` 패널과 Firefox `Network Monitor`의 현재 공식 명칭과 요청 관찰 범위. 브라우저·버전별 차이를 유지 |\n| `01-mental-models/software-is-a-system.md` | 저장소 내부 `research/meeting-webapp-case-brief.md`, `research/stock-dashboard-case-brief.md` | 2026-08-10 | 모임 참가의 역할·참가 관계·모집 상태·정원·권한·동시성과 교육용 주가 fixture의 원천/변환 버전·거래일·가격 기준·값/신선도 상태·재현성·갱신 복구 책임을 비교하는 범위. 실제 시장·상품·시세·추천·거래·실시간 데이터 주장의 근거로 사용하지 않음 |"
        }
      ],
      "omitted_scope": "PB-021과 해당 원고에 직접 연결되지 않은 출처 행을 생략합니다.",
      "generalization_boundary": "기록된 확인일·버전·적용 범위만 사용합니다. URL의 현재 접근 성공이나 최신성을 새로 확인한 것으로 취급하지 않습니다."
    },
    {
      "id": "visual-audit-pbv-02",
      "role": "공유 다이어그램 정본·두 소비 문맥·12상태 판정",
      "path": "docs/project/public-beta-visual-audit.md",
      "sha256": "4dc0b46dbef32d69fc9b4b6442622cf762a65c165213e155f8fc9fd6cfa15f77",
      "segments": [
        {
          "label": "PBV-02 자산 행",
          "start_line": 15,
          "end_line": 19,
          "text": "<!-- PUBLIC_BETA_VISUAL_AUDIT_START -->\n| Asset ID | SVG | source | 소비 문서 | 학습 질문 | 문법 | 노드 | 화살표 | 초점 | title/desc/alt | 현재 크기 | 모바일 | dark | 판정 | 도구 | 목표 작업 |\n|---|---|---|---|---|---|---:|---:|---|---|---|---|---|---|---|---|\n| PBV-01 `learning-map` | `src/assets/diagrams/learning-map.svg` | `src/assets/diagrams/source/learning-map.mmd` | PB-001 `index.md` | 시스템 사고부터 AI 네이티브까지 어떤 순서로 배우는가? | 세로 권장 단계 흐름 | 7 | 6 | 같은 위계 1그룹 | 고유 title/desc·alt·앞 질문/뒤 강제 선행·숙련 비증명 범위 일치. | `480×960`, viewBox·width·height 일치 | 2026-08-28 실제Chrome6상태, mobile358×716px core20.88/detail17.9/note14.92px 판독·잘림0. 이전보다 약600px 길어진 절충. | 명시light/dark marker2와 선이 일치하고 번호·실선 범례를 유지합니다. | reflow | diagram-design | `e43d112`; Codex `PASS` C0/I0/M0; PBVA-003·004 자산 조건 충족; Claude pending |\n| PBV-02 `analytics-dashboard-architecture` | `src/assets/diagrams/analytics-dashboard-architecture.svg` | `src/assets/diagrams/source/analytics-dashboard-architecture.mmd` | PB-021 `software-is-a-system.md`; PB-053 `analytics-dashboard-case-study.md` | fixture/승인 원천이 품질·저장·전달·UI·운영 증거로 어떻게 이어지는가? | 세로 단계+피드백 | 7 | 7 | 품질·UI 2그룹 | 고유 title·desc·role·aria, 기존 두 alt와 앞뒤 원고의 책임·한계는 불변입니다. | `560×1108`, viewBox·width·height 일치 | 2026-08-28 실제 Chrome12상태: 모바일358×708px, 핵심 약14.7px·보조 약11.5px를 원본 크기로 판독했습니다. | explicit light/dark marker4와 주 흐름·점선 피드백·박스·글자가 전환됩니다. | reflow | diagram-design | `aa13701`; Codex `PASS` C0/I0/M0; PBVA-004 자산 조건 충족; Claude pending |"
        },
        {
          "label": "후속 자산 검증과 반복 경계",
          "start_line": 53,
          "end_line": 55,
          "text": "- Task 20 후속 11개 자산 증거: 실제 headed Google Chrome 152에서 1440×1000·1024×768·390×844와 light/dark를 조합해 PBV-02 12상태, PBV-06 18상태, 나머지 9개 자산 각 6상태, 합계 84개 최종 상태를 검증했습니다. 상태별 HTTP·H1·draft 배지·요청/실효 테마·대상 SVG·alt·고유 title/desc·marker·전역 overflow·제한된 내부 scroll·console warning/error·page error·외부 요청과 전체 화면·원본 다이어그램·상단·인접 문맥 이미지를 보존했습니다. 개별 검토 시점에는 515개 고정 입력이 모두 일치했습니다. closeout 후보 감사 문서 갱신 뒤에는 이 공유 경로의 기대 해시 차이만 11개이고 나머지 504개 입력은 일치하며, 과거 입력을 소급 재기준화하지 않습니다. 각 자산은 별도 Codex 검토에서 최종 `PASS` C0/I0/M0였습니다.\n- Task 20 전체 자동 게이트: 2026-08-30 현재 Node.js 22.16.0·npm 10.9.2에서 콘텐츠 지도 sync 변경 없음, 테스트 115/115, 공개 문서 59개, 참조 178개 Markdown/MDX+학습 SVG 14개, 계획 100점·공개 59개·중복 0개·누락 0개, 빌드 HTML 60개·최적화 SVG 14개·Pagefind HTML 60개, built-output 리터럴 Markdown 0개·고지 바이트 동일, tracked 안전 검사 210개·finding 0개, `git diff --check`를 통과했습니다. `site` 미설정 sitemap 안내 1건은 기존 비차단 경고이며 Task 20의 자산 결함이 아닙니다.\n- 브라우저 반복 경계: 자산과 소비 원고의 바이트는 각 84상태 검증 뒤 바뀌지 않았고, 후속 Task 21의 현재 입력 전체 68개 시각 occurrence도 DOM·HTTP·테마·런타임 실패 0·누락 0이며 자산별 input hash를 보존합니다. Task 21의 모바일 표 CSS는 외부 SVG 원본·marker·그림 앞뒤 일반 산문을 바꾸지 않으며, 개별 리뷰는 전체 페이지 pixel identity 대신 원본 다이어그램·상단·인접 문맥 근거로 범위를 제한했습니다. 따라서 이유 없는 동일 Chrome 검증은 반복하지 않았고 Task 21 키보드 테마 2상태 `not-confirmed`를 Task 20 PASS로 확대하지 않습니다."
        },
        {
          "label": "PBV-02A와 PBV-02B",
          "start_line": 57,
          "end_line": 61,
          "text": "| 검사 ID | 소비 페이지 | 자산 | 시각 캡처 판정 |\n|---|---|---|---|\n| PBV-01 | `/` | learning-map | 3 viewport×2 theme 6상태·원본 화면 확인; marker·모바일 판독·overflow 결함 0; Codex PASS |\n| PBV-02A | `/01-mental-models/software-is-a-system/` | analytics-dashboard-architecture | 3 viewport×2 theme 6상태·원본 화면 확인; 모바일 판독·overflow 결함 0; Codex PASS |\n| PBV-02B | `/12-case-studies/analytics-dashboard-case-study/` | analytics-dashboard-architecture | 3 viewport×2 theme 6상태·원본 화면 확인; 모바일 판독·overflow 결함 0; Codex PASS |"
        }
      ],
      "omitted_scope": "PBV-02와 공통 증거 경계를 제외한 다른 자산 행을 생략합니다.",
      "generalization_boundary": "Task20 시각 검토 PASS는 R01 본문·M5·ready·공개 승인이 아니며 과거 Claude pending 문구는 당시 이력입니다."
    },
    {
      "id": "site-qa-r01",
      "role": "현재 로컬 사이트·시각 증거와 한계",
      "path": "docs/project/reviews/public-beta-1/site-qa.md",
      "sha256": "af60620bbe859ad602f2795c4f66c22a16c955335d1f8c2e29d1b8c1af18ffb6",
      "segments": [
        {
          "label": "최종 로컬 관찰과 증거 경계",
          "start_line": 37,
          "end_line": 49,
          "text": "## 최종 로컬 관찰과 남은 게이트\n\n정본은 [사이트 QA 증거 manifest](site-qa-browser-manifest.json)입니다. 수정 후 `fe4bd387ce2fbc6972b17555f2f49de5217345b7e0009e7e6b767f05f905e8e2` 입력 snapshot의 전체150페이지 상태·68시각 조합은 DOM/HTTP/테마/런타임 자동 검사에서 실패0·누락0이며 full manifest 검사 exit0입니다. 원래 기준선150시도도 보존해 전체300시도를 추적합니다. DOM 수집 통과는 픽셀·상호작용·독립 검토 전체 PASS가 아닙니다.\n\n68개 새 그림 crop과 기존 crop을 RGBA로 비교해30개는 완전히 같았고38개는 달랐습니다. 기존68개 직접 관찰과 별도로 변경38개를 모두 다시 보았습니다. 이때 API 상세 시퀀스의 모바일 양테마2개 crop에 actor 박스 상단 잘림을 발견해 최종 그림 증거에서 제외했습니다. 원본 SVG와 페이지는 바꾸지 않고 해당2상태만 새 viewport로 관찰했습니다. 그림의 전후 DOM box가 같은 상태에서 viewport PNG로부터358×500px을 무손실 추출한 crop2개와 실제390×844화면2개를 직접 확인해 상단 actor4개·11단계·실선/점선·commit/응답 유실 표시가 보존됨을 확인했습니다. 원래 실패 crop은 삭제하지 않았으며 `sequence-viewport-supplement.jsonl`로 연결합니다. 보충의 badge selector는 빈 배열이므로 배지 재검증 증거가 아니며 배지 근거는 원래150행렬에 한정합니다.\n\n모바일 표 수정은 대표3경로×2폭×2테마12개가 통과했습니다. `developer-thinking`·`abstraction-and-tradeoffs`·`current-tool-mapping`의 모바일 내부 이동 범위는 각각26·154·507px이고 데스크톱은0입니다. 모바일 좌우·데스크톱 왼쪽 원본 총18장으로 짧은 레이블의 낱글자 줄바꿈 개선과 내부 스크롤 경계를 확인했습니다. 일부 열이 화면 밖에 있는 것은 내부 스크롤 구조이며 모든 표의 모든 행·셀을 육안으로 읽었다는 주장은 하지 않습니다.\n\n상호작용41시도의 마지막36개 중34개가 통과하고 키보드 테마2개가 실패했습니다. 검색12개×2폭24개, 소비 문맥 링크3개×2폭6개, 사이드바17목적지씩 두 폭, 기본404 두 폭에서 홈 브랜드 링크로 HTTP200 복구를 확인했습니다. 검색은 결과 Tab/Enter 진입과 수동 재검색 재사용을 확인했지만 자동 검색어 복원을 주장하지 않습니다. 과거 실패7건을 유지하며 새404페이지는 만들지 않았습니다. 검색 결과 초점2장·키보드 skip/theme/body 초점6장·404화면2장을 직접 확인했습니다.\n\n`QA-KEYBOARD-001`: Tab 초점·검색 열기·본문 진입은 확인됐지만 키보드로 native select 값을 dark로 바꾸지 못했습니다. 실제 OS UI 진단도 Chrome 식별자 중복 뒤 정확한 앱 경로에서 -10005 timeoutReached로 실패했습니다. `native-keyboard-boundary.md`에 진단 한계와 재개 조건을 남겼으며 사이트 자체 결함으로 확정하거나 설정·권한을 우회하지 않았습니다. 실제 UI 접근 또는 사용자 수동 검증이라는 새 조건이 필요합니다. 이 항목과 필수 Claude 검토가 남아 Task21·M4 전체 PASS는 아닙니다.\n\n새 Task24 조사 원문이 ignored `.superpowers`에 들어온 뒤 Node22 최종 검사 첫 시도는 참조 검사의 조사 원문 앵커 오류로106/107통과·exit1, 빌드 미실행이었습니다. 같은 실패를 새 테스트로 재현한 뒤 비공개 조사 디렉터리만 제외했고 집중2/2·최종108/108테스트, 콘텐츠59, 참조171 Markdown/MDX+SVG14, 계획100점·59문서·중복0·누락0, HTML60·Pagefind60·리터럴0으로 전체check exit0입니다. 참조 수 감소는 원고 삭제가 아니라 조사 디렉터리 제외 때문입니다. Node22.16.0/npm10.9.2의 실제 명령·로그는 ignored `final-node22-gates-a2.json`과 연결 파일에 보존합니다. 빌드 전후 dist171개 파일의 경로·bytes SHA가 모두 같아 사이트 행렬은 다시 실행하지 않았습니다."
        },
        {
          "label": "Task21 패키지 독립 판정",
          "start_line": 69,
          "end_line": 69,
          "text": "이후 누적 Task21 패키지 전체를 별도로 독립 검토했습니다. 리뷰어는 수정 후150페이지 상태·68시각 조합, 검색·내비게이션·404, 표와 base path, 데스크톱 전체 OS 키보드 경로, 모바일의 상관된 두 키보드 구간, current-input drift 고유5경로의 후속 검증, 실패·보충 계보를 대조해 `PASS`, Critical 0·Important 0·Minor 0으로 판정했습니다. 마스터 계획은 하나의 연속된 모바일 OS 입력 실행만을 유일한 수용 근거로 요구하지 않으므로 포인터 없는 단일 모바일 end-to-end 미확인은 차단 finding이 아니지만 이 한계는 계속 `not-confirmed`로 보존합니다. 이 판정을 근거로 Task21과 M4-03~05를 닫되, 이 closeout은 M5 Claude, 공개59개의 `ready`, 소유자 공개 승인, M6-03, RC, push, 원격 CI, 배포, 공개 URL, 태그, 릴리스 완료를 뜻하지 않습니다."
        }
      ],
      "omitted_scope": "R01 공유 그림 판단과 직접 관련 없는 검색·표·키보드 세부 실행 이력을 생략합니다.",
      "generalization_boundary": "이 기록의 당시 Claude 표현은 역사입니다. 로컬 QA와 Task21 PASS는 R01 M5 검토·ready·원격·공개 성공을 뜻하지 않습니다."
    },
    {
      "id": "browser-manifest-r01",
      "role": "R01 공유 SVG의 원본 crop과 픽셀 판정 귀속",
      "path": "docs/project/reviews/public-beta-1/site-qa-browser-manifest.json",
      "sha256": "80406096978829321c1d4d24345bcc69fe74055c0342b58d4dc4ba8bda769473",
      "segments": [
        {
          "label": "pixel_adjudication과 R01 네 시각 source",
          "start_line": 16462,
          "end_line": 16519,
          "text": "  \"pixel_adjudication\": {\n    \"status\": \"parent_reports_68_current_visuals_covered_not_independent_approval\",\n    \"source\": \"Parent follow-up message; not an integrator visual judgment\",\n    \"excluded_original_crops\": [\n      {\n        \"occurrence_id\": \"/04-backend-data/api-database-auth/#asset-2@390x844-light\",\n        \"automated_capture_status\": \"success\",\n        \"pixel_acceptance\": \"rejected\",\n        \"reason\": \"Parent observed actor-box top clipped at PNG y=0 in original direct crop\",\n        \"original_png\": \"output/playwright/task21-site-qa-evidence/task21-20260827184258346-5e225b2d-1f15-490c-91b5-60f0b237edc5-032-asset-2.png\",\n        \"supplemental_evidence\": \"sequence-viewport-light-c0cf6dca-0248-4ea0-bd9d-50f8d7fad868\"\n      },\n      {\n        \"occurrence_id\": \"/04-backend-data/api-database-auth/#asset-2@390x844-dark\",\n        \"automated_capture_status\": \"success\",\n        \"pixel_acceptance\": \"rejected\",\n        \"reason\": \"Parent observed actor-box top clipped at PNG y=0 in original direct crop\",\n        \"original_png\": \"output/playwright/task21-site-qa-evidence/task21-20260827184258346-5e225b2d-1f15-490c-91b5-60f0b237edc5-033-asset-2.png\",\n        \"supplemental_evidence\": \"sequence-viewport-dark-00120d3a-db60-485a-a93c-a722eee07fbe\"\n      }\n    ],\n    \"current_visual_sources\": [\n      {\n        \"occurrence_id\": \"/01-mental-models/software-is-a-system/#asset-1@1440x1000-light\",\n        \"png\": \"output/playwright/task21-site-qa-evidence/task21-20260827184258346-5e225b2d-1f15-490c-91b5-60f0b237edc5-006-asset-1.png\",\n        \"png_sha256\": \"d76e15f9a0c4b81f54989efc07585cf0f98359b81a9de6c85753b5b9b14c5243\",\n        \"source_svg_sha256\": \"0627d5671fdd25b07fac3c54e65f7bee9ef24c384dd45e8741bd64469590e143\",\n        \"evidence_kind\": \"original_direct_svg_crop\",\n        \"parent_observation_basis\": \"exact RGBA match to parent-inspected baseline\",\n        \"acceptance_attribution\": \"parent reported; not integrator pixel judgment\"\n      },\n      {\n        \"occurrence_id\": \"/01-mental-models/software-is-a-system/#asset-1@1440x1000-dark\",\n        \"png\": \"output/playwright/task21-site-qa-evidence/task21-20260827184258346-5e225b2d-1f15-490c-91b5-60f0b237edc5-007-asset-1.png\",\n        \"png_sha256\": \"20b44e9b865d1022d5a664ee64d7a2d39528824e9c5f663a88f56fc4a9933b2e\",\n        \"source_svg_sha256\": \"0627d5671fdd25b07fac3c54e65f7bee9ef24c384dd45e8741bd64469590e143\",\n        \"evidence_kind\": \"original_direct_svg_crop\",\n        \"parent_observation_basis\": \"exact RGBA match to parent-inspected baseline\",\n        \"acceptance_attribution\": \"parent reported; not integrator pixel judgment\"\n      },\n      {\n        \"occurrence_id\": \"/01-mental-models/software-is-a-system/#asset-1@390x844-light\",\n        \"png\": \"output/playwright/task21-site-qa-evidence/task21-20260827184258346-5e225b2d-1f15-490c-91b5-60f0b237edc5-008-asset-1.png\",\n        \"png_sha256\": \"aed6a20c31317cf412dbb710866b5266343ca135ff9dc487bb01f7a4fca2567c\",\n        \"source_svg_sha256\": \"0627d5671fdd25b07fac3c54e65f7bee9ef24c384dd45e8741bd64469590e143\",\n        \"evidence_kind\": \"original_direct_svg_crop\",\n        \"parent_observation_basis\": \"parent directly inspected changed regression crop\",\n        \"acceptance_attribution\": \"parent reported; not integrator pixel judgment\"\n      },\n      {\n        \"occurrence_id\": \"/01-mental-models/software-is-a-system/#asset-1@390x844-dark\",\n        \"png\": \"output/playwright/task21-site-qa-evidence/task21-20260827184258346-5e225b2d-1f15-490c-91b5-60f0b237edc5-009-asset-1.png\",\n        \"png_sha256\": \"f5ee5796d6a0ac630caa4b27148c68114ae38cb6439694ac6c21490125789f98\",\n        \"source_svg_sha256\": \"0627d5671fdd25b07fac3c54e65f7bee9ef24c384dd45e8741bd64469590e143\",\n        \"evidence_kind\": \"original_direct_svg_crop\",\n        \"parent_observation_basis\": \"parent directly inspected changed regression crop\",\n        \"acceptance_attribution\": \"parent reported; not integrator pixel judgment\"\n      },"
        }
      ],
      "omitted_scope": "R01의 analytics-dashboard-architecture 네 상태를 제외한 manifest의 다른 시도·상태·자산을 생략합니다.",
      "generalization_boundary": "parent 관찰 귀속과 integrator 비판정 한계를 유지합니다. 이 발췌는 전체 manifest 재검증이나 현재 브라우저 재실행을 뜻하지 않습니다."
    },
    {
      "id": "pbv02-checkpoint-report",
      "role": "PBV-02 actual Chrome 12상태와 증거 경계",
      "path": ".superpowers/sdd/2026-08-12-public-beta-master-plan/task-20-pbv-02-report.md",
      "sha256": "af9b5f7d22aba13da09dec2b599ac22b54e20f63a02bc957dbbc3efdd0bd64ed",
      "segments": [
        {
          "label": "actual Chrome 12상태와 scroll 보충",
          "start_line": 48,
          "end_line": 52,
          "text": "## 2026-08-28 PBV-02 검증 재개 — 독립 검토 차단\n\n기존 SVG/Mermaid SHA-256을 보존한 채 focused42/XML0, fresh 정책 static65/65·build60·SVG14·validate:built60을 확인했습니다. 새 승인을 받은 localhost4341·headed Chrome152에서 PB-021/PB-053×1440×1000·1024×768·390×844×light/dark 최종12상태의 HTTP/H1/draft/theme4/image/topology/marker/overflow/internal-scroll/console/pageerror/request 실패0을 확인했습니다. 전체 PNG12·그림crop12·상단viewport12를 보존하고 원본 크기 레이블·화살촉·잘림/겹침 결함0을 자체 확인했습니다. 16384px 반복이 있던 긴 fullPage8은 최종 증거에서 제외하고 bounded32타일/동일 픽셀 연결부24곳으로 교체했습니다. 실제 스크롤과의 관찰 좌표차-16px·최대 채널차1/255, sticky-header locator crop 제외, OCR H1 exact3/12·배지9/12 보조 한계를 기록합니다. ignored `output/playwright/task20-analytics-evidence/manifest.jsonl`의92 records·SHA-256 `a867d4ccffbbee6f686efaf9f99a82f5bb00da7de452777a5ea417c179c74461`은 실패·교정·선택·자체 픽셀 확인을 append-only 보존합니다. 이는 Codex 자체 검증이며 Claude 독립 검토가 아닙니다. 구독 전용 실행 자격 미확인으로 `blocked/subscription_unverified`, PBV-02는 reflow·PBVA-004에 남고 keep2/reflow8/split0/replace3·현재 미해결 C0/I4·Task20/M4/M5/ready 상태는 올리지 않습니다. PBV-02 커밋은 없습니다.\n\n2026-08-28 추가 항목 검증: 기존12상태는 내부 overflow 컨테이너 존재/처리를 확인했으므로 실제 scroll 이동만 별도 보충했습니다. `node output/playwright/task20-analytics-evidence/verify-scroll-interaction.mjs` exit0, 두 경로×3viewport×2theme12상태·총24개 컨테이너의 0→최대→복귀 PASS·외부요청0입니다. `scroll-interaction.jsonl`13records SHA-256 `508b65bedddd58ce89c986b8dc598c909b3bdfb031a276a95463eb19d316a9a8`에 source4파일 해시와 측정을 남겼습니다. 기존 그림·원고 해시는 불변이며 full/기존crop/전체검사는 반복하지 않았습니다. PBV02 주manifest93 SHA-256 `78396738ec0f8a896fdfc9ecb4888c4f44cedfb8c9f92726007f909a6dbdffd6` 및 전용Chrome 종료는 그대로입니다. 이 입력 추가와 감사 PBV09 행 변경은 미호출 검토 입력 해시를 갱신하며 Claude PASS를 소급 생성하지 않습니다."
        }
      ],
      "omitted_scope": "초기 preview 차단과 구현 상세를 생략하고 실제 재개 검증·증거 경계만 고정합니다.",
      "generalization_boundary": "2026-08-28 로컬 검증 이력이며 현재 브라우저 재실행, R01 독립 검토 또는 공식 근거 확인을 뜻하지 않습니다."
    },
    {
      "id": "pbv02-historical-input-manifest",
      "role": "PBV-02 두 소비 문맥의 actual PNG 경로·해시와 역사 상태",
      "path": "docs/project/reviews/public-beta-1/review-inputs-2026-08-28.json",
      "sha256": "6ac52ada9821212f951b08944a1152d3ebb9d25c03f6e32f7b6abcac2127ec05",
      "segments": [
        {
          "label": "PB-021 actual crop 경로와 해시",
          "start_line": 147,
          "end_line": 197,
          "text": "        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-021-390x844-dark-bounded-1787846823654-diagram-calibrated.png\",\n          \"sha256\": \"3cfa726e159a6391a4f544b1c4393ed8597560816e01203856d2f6e4237cbb8a\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-021-390x844-dark-bounded-1787846823654-full.png\",\n          \"sha256\": \"a4fb582195ca4779312176ed1cc2e4e4285fe9d16aced28e2e6cf33e19338c93\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-021-390x844-dark-bounded-1787846823654-top-viewport.png\",\n          \"sha256\": \"2a7be8a9f14e7f11647ed726aaeb73a714325ece78c86b4386e899d8680c160e\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-021-390x844-light-bounded-1787846823654-diagram-calibrated.png\",\n          \"sha256\": \"370a6abcf76e021fc6e143f3c374b12f584d5f226e0a34a24eec82a59a365dee\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-021-390x844-light-bounded-1787846823654-full.png\",\n          \"sha256\": \"275a644b042eed195b29f2c6d4bf82297078ea8d6dc7917d48962e9d5eb5d37f\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-021-390x844-light-bounded-1787846823654-top-viewport.png\",\n          \"sha256\": \"52279a2bf2eda278f9dc99ad3d546d619f5dc203d526a28b02cfbcb9dbc50712\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-021-desktop-dark-task20-pbv02-20260827155431806-ca3bf04e72a678-diagram.png\",\n          \"sha256\": \"0a961b9e3e30b54836bf2032f136b408ea283512c0738399febc25cfb43dc9c8\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-021-desktop-dark-task20-pbv02-20260827155431806-ca3bf04e72a678-top-viewport.png\",\n          \"sha256\": \"97e9601999d8922b0ebd6fb6e448aab208219c8da98ce304e4a8cdd636ad8e49\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-021-desktop-light-task20-pbv02-20260827155719257-59c60b91893d68-diagram.png\",\n          \"sha256\": \"c260a7a70fffc8c41320c2bb524713b675eb7d4ef19d71a216a89bfb61ff50ed\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-021-desktop-light-task20-pbv02-20260827155719257-59c60b91893d68-top-viewport.png\",\n          \"sha256\": \"21d5d5131d867e44d840b3b007883808546fdf1a293d19c371811f225ccf525c\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-021-tablet-dark-task20-pbv02-20260827155431806-ca3bf04e72a678-diagram.png\",\n          \"sha256\": \"74793fcc6c93962f05868fd5e8b4a8fc9abcfb753b6bdedce5b4070e1022f308\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-021-tablet-dark-task20-pbv02-20260827155431806-ca3bf04e72a678-top-viewport.png\",\n          \"sha256\": \"54028cfca7f2ecd53d740ecae0270846e7afc813edd558af59fb0b428009cf6e\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-021-tablet-light-task20-pbv02-20260827155431806-ca3bf04e72a678-diagram.png\",\n          \"sha256\": \"c260a7a70fffc8c41320c2bb524713b675eb7d4ef19d71a216a89bfb61ff50ed\""
        },
        {
          "label": "PB-053 actual crop 경로와 해시",
          "start_line": 203,
          "end_line": 265,
          "text": "        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-053-1024x768-dark-bounded-1787846823654-diagram-calibrated.png\",\n          \"sha256\": \"8087f6c8463877fb4cc0f7f86142a14b99679e272b85398e75221c75ad85aa0b\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-053-1024x768-dark-bounded-1787846823654-full.png\",\n          \"sha256\": \"833b03cc9783ae2b088f804a518f0409c8d87e9330b4f23eff3aaa2ccbe240a2\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-053-1024x768-dark-bounded-1787846823654-top-viewport.png\",\n          \"sha256\": \"1d11cf63d8fcb59170595de1e15b2d66467772ec8bf7737800bfa5ae599aae52\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-053-1024x768-light-bounded-1787846823654-diagram-calibrated.png\",\n          \"sha256\": \"c1e751bb6e4850089522b8d3eabc57e2f4297fe1535ec52bb90c90fe8a20ee91\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-053-1024x768-light-bounded-1787846823654-full.png\",\n          \"sha256\": \"632861c87b7d1bf05c13605f24d589ae95dc371924ce79b41e8de539fc9f1d67\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-053-1024x768-light-bounded-1787846823654-top-viewport.png\",\n          \"sha256\": \"673fdcdcb0c5681c5b4d9356fffed69612cbb793976b4b5f0cecdf7bb20732ab\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-053-1440x1000-dark-bounded-1787846823654-diagram-calibrated.png\",\n          \"sha256\": \"0c24fc0b38785641aac398f007ca4c28440c6792139a66d81b06af06003aa3f6\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-053-1440x1000-dark-bounded-1787846823654-full.png\",\n          \"sha256\": \"620476804c9a5db427643ca88dbcb947bab5973b9bd86734599165f5e29d0ba6\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-053-1440x1000-dark-bounded-1787846823654-top-viewport.png\",\n          \"sha256\": \"07b79dfc9c139e7ef0a3bd81dd00e66670b570a0c44cba89672d98292c5a28ac\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-053-1440x1000-light-bounded-1787846823654-diagram-calibrated.png\",\n          \"sha256\": \"c1e751bb6e4850089522b8d3eabc57e2f4297fe1535ec52bb90c90fe8a20ee91\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-053-1440x1000-light-bounded-1787846823654-full.png\",\n          \"sha256\": \"87e73ac447399d2bb93b5eb05878eb605f33c8443142532c98dcca9cbfdc479c\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-053-1440x1000-light-bounded-1787846823654-top-viewport.png\",\n          \"sha256\": \"f1c75d2670948d18b862c94b65129a2a6403467adb61711aa81698721e2b403c\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-053-390x844-dark-bounded-1787846823654-diagram-calibrated.png\",\n          \"sha256\": \"abd52134e6f2e6acf1853c590e75c70eb2751656666356d2be904ec0778c827f\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-053-390x844-dark-bounded-1787846823654-full.png\",\n          \"sha256\": \"4192c6f903dc141527a59de69dc2ef87d649b22a992897fbd6a4d1568b42a9a9\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-053-390x844-dark-bounded-1787846823654-top-viewport.png\",\n          \"sha256\": \"3a60ade8f06faef8f2abfda9bc84b8c39179092ab83d9ebf6aa393aad8b4c4c6\"\n        },\n        {\n          \"path\": \"output/playwright/task20-analytics-evidence/final-crops/pb-053-390x844-light-bounded-1787846823654-diagram-calibrated.png\",\n          \"sha256\": \"1f98b1c596412436bf362f67e10fd47b197b65fd6a03f86308d0b3be14506bd5\""
        },
        {
          "label": "시각 source와 역사 상태 경계",
          "start_line": 311,
          "end_line": 338,
          "text": "        {\n          \"path\": \"src/assets/diagrams/analytics-dashboard-architecture.svg\",\n          \"sha256\": \"0627d5671fdd25b07fac3c54e65f7bee9ef24c384dd45e8741bd64469590e143\"\n        },\n        {\n          \"path\": \"src/assets/diagrams/source/analytics-dashboard-architecture.mmd\",\n          \"sha256\": \"c43970fb0dc454261cd04c7fd276f68c83ab550d37a265dcb931a44ca5932f3a\"\n        },\n        {\n          \"path\": \"src/content/docs/01-mental-models/software-is-a-system.md\",\n          \"sha256\": \"d9569195713fd0db9201af1d18c141ab4a9836eca3980bc4905b2b46374aea2e\"\n        },\n        {\n          \"path\": \"src/content/docs/12-case-studies/analytics-dashboard-case-study.md\",\n          \"sha256\": \"3813b385f1f32ce278c4b320a53065ce834e2afd1d2271a51d6af6acc03498dd\"\n        },\n        {\n          \"path\": \"src/styles/custom.css\",\n          \"sha256\": \"2236f2a8a9b30515cb641d48de7089d15590834766ada3f60de9f649ef36c137\"\n        }\n      ],\n      \"combined_sha256\": \"60f9c8892f70df13813447a8bb2e0e8d22dd1f7bc9d8c48a85d10271febb382e\",\n      \"review_scope\": \"visual-unit\",\n      \"review_id\": \"Task20-PBV-02\",\n      \"status\": \"blocked\",\n      \"block_reason\": \"subscription_unverified\",\n      \"valid_independent_evidence\": false,\n      \"evidence_impact\": \"Task20 original full captures remain historical layout evidence. Task21 table CSS changed layout; current SVG pixels and immutable source hashes are linked in site-qa and its manifest. Use the exact consumer states and original images, not all-book summaries. Tablet CSS remains unaffected. No Claude PASS was created or invalidated.\""
        }
      ],
      "omitted_scope": "PBV-02의 보고서 링크, full·top viewport·manifest·scroll 파일과 다른 검토 unit을 생략합니다.",
      "generalization_boundary": "이 역사 입력은 PNG 경로·해시·두 소비 문맥을 추적하지만 유효 Claude PASS, 현재 브라우저 재실행 또는 R01 공식 출처 원문을 제공하지 않습니다."
    },
    {
      "id": "development-glossary-system",
      "role": "시스템·웹·상태 관련 용어 정본",
      "path": "src/content/docs/reference/development-glossary.md",
      "sha256": "728022ddc235e2196e60c52bc0dca8c07d0c4cd160dfdb5d4d196e5afe4b260d",
      "segments": [
        {
          "label": "시스템과 코드 핵심 용어",
          "start_line": 39,
          "end_line": 75,
          "text": "## 시스템과 코드\n\n| 용어 | 정의 |\n|---|---|\n| **software** | 컴퓨터가 수행할 명령뿐 아니라 설정, 데이터 구조, 문서, 운영 절차를 포함한 실행 시스템입니다. |\n| **file** | 이름을 가진 데이터 단위입니다. 이름과 확장자만으로 원본·생성물·비밀 여부를 판단할 수 없으므로 상위 경로와 관리 규칙을 함께 확인합니다. |\n| **directory / folder** | 파일과 다른 디렉터리의 이름을 묶어 계층을 만드는 공간입니다. 그래픽 화면에서는 보통 폴더라고 부릅니다. |\n| **path** | 파일이나 디렉터리의 위치를 이름의 순서로 표현한 값입니다. 경로가 존재해도 파일의 역할·권한·Git 상태까지 보장하지는 않습니다. |\n| **glob / pathname pattern** | `*`, `?`, `[...]` 같은 패턴을 파일명 후보와 맞춰 하나 이상의 경로를 선택하는 표현입니다. 정규 표현식과 같지 않으며 일치 실패·숨김 파일·재귀·인용 동작은 셸·도구·설정마다 확인해야 합니다. 삭제·이동·덮어쓰기 전에는 확장된 최종 대상 목록과 경계를 먼저 검증합니다. |\n| **absolute path** | 파일 시스템 경로 계층의 시작점부터 대상을 표시한 경로입니다. 한 컴퓨터에서는 대상을 분명히 식별하지만 개인 설치 위치가 달라지면 재사용하기 어렵습니다. |\n| **relative path** | 현재 작업 디렉터리나 도구가 정한 기준 위치에서 대상을 표시한 경로입니다. 기준 위치가 없으면 같은 문자열도 다른 대상을 가리킬 수 있습니다. |\n| **current working directory(CWD)** | 실행 중인 셸이나 프로세스가 상대 경로를 해석할 때 사용하는 현재 디렉터리입니다. 설정 파일의 상대 경로는 다른 기준을 사용할 수 있습니다. |\n| **project root** | 한 프로젝트의 설정·명령·소스 구조를 해석하는 기준 디렉터리입니다. Git 저장소 루트와 같을 수도 있고 하위에 있을 수도 있습니다. |\n| **repository root** | Git이 현재 작업 트리의 최상위로 인식하는 디렉터리입니다. 작업 공간이나 프로젝트 루트와 같은지는 실제 Git 명령으로 확인해야 합니다. |\n| **workspace** | 편집기나 코딩 에이전트가 이번 작업에서 열고 접근하도록 정한 범위입니다. 제품과 설정에 따라 하나의 저장소, 여러 저장소 또는 저장소 일부일 수 있습니다. |\n| **generated file** | 다른 원본과 도구에서 다시 만들 수 있도록 생성된 파일입니다. Git 추적 여부와 무관하며 직접 수정하기 전에 원본·생성 명령·보존 필요성을 확인합니다. |\n| **source code** | 사람이 읽고 수정하는 프로그램 원본입니다. |\n| **abstraction** | 특정 목적에 필요한 속성과 동작을 드러내고 그 판단에 불필요한 구현 세부를 경계 뒤로 숨기는 설계입니다. 숨긴 세부가 없어지는 것은 아니며 외부 동작에 영향을 주면 다시 확인해야 합니다. |\n| **abstraction leak** | 경계 뒤에 숨긴 성능·네트워크·데이터·실행 환경 같은 내부 특성이 외부 동작이나 사용자의 판단에 영향을 주는 상황입니다. 모든 내부를 공개하기보다 판정에 필요한 신호와 오류 계약을 보강합니다. |\n| **trade-off** | 한 이점을 얻는 대신 생기는 비용과 제약을 함께 받아들이는 선택입니다. 장단점 나열이 아니라 현재 제약·우선순위·재검토 신호와 함께 기록합니다. |\n| **component** | 시스템 안에서 한 책임을 중심으로 구분해 생각할 수 있는 부분입니다. 반드시 별도 서버나 프로세스일 필요는 없습니다. |\n| **responsibility** | 구성요소가 맡고 보장해야 하는 일과 실패 처리 범위입니다. |\n| **boundary** | 책임, 신뢰, 소유권 또는 실행 환경이 달라지는 경계입니다. 경계를 넘는 값은 검증이 필요합니다. |\n| **trust boundary** | 서로 다른 신뢰 수준이나 권한 주체 사이에서 데이터와 제어가 오가는 경계입니다. 브라우저와 서버 사이처럼 사용자가 값을 바꿀 수 있는 경계에서는 신원·권한·입력과 중요한 업무 규칙을 신뢰 가능한 쪽에서 다시 검증합니다. |\n| **interface** | 구성요소가 경계를 넘어 입력·출력·오류를 주고받는 약속입니다. API뿐 아니라 함수, 파일과 데이터 스키마도 인터페이스가 될 수 있습니다. |\n| **source of truth** | 특정 상태의 최종 값을 결정하고 충돌을 해결하는 권위 있는 원본입니다. 시스템 전체에 하나만 있어야 한다는 뜻이 아니라 상태 종류마다 책임 위치가 다를 수 있습니다. |\n| **runtime** | 코드를 실제로 해석·실행하고 프로세스·파일·네트워크 같은 시스템 기능에 접근하게 하는 엔진과 환경입니다. 지원 언어·버전·권한과 배포 환경의 호환 범위를 확인해야 합니다. |\n| **library** | 애플리케이션이 필요할 때 호출해 사용하는 재사용 코드 묶음입니다. 실제 호출 주도권과 교체 경계는 생태계·패키지마다 확인해야 합니다. |\n| **framework** | 애플리케이션의 반복 골격과 기본 제어 흐름을 제공하고 정해진 진입점·수명 주기에서 사용자의 코드를 호출할 수 있는 기술입니다. 라이브러리와의 구분은 생태계마다 겹치므로 이름보다 실제 제어 관계와 벗어날 때의 비용을 확인합니다. |\n| **platform** | 애플리케이션을 만들고 실행·배포·운영할 기반 기능과 제한을 제공하는 환경입니다. 하나의 플랫폼이 런타임·호스팅·데이터·도구 역할을 함께 제공할 수 있으므로 실제 책임 범위를 확인해야 합니다. |\n| **development tool** | 편집·검사·빌드·테스트·배포·관측 같은 개발 작업을 돕는 수단입니다. 도구의 실행 성공이 애플리케이션의 정확성·배포·사용자 성공을 자동으로 증명하지는 않습니다. |\n| **SDLC(Software Development Life Cycle)** | 문제 발견부터 요구사항·설계·구현·검증·배포·운영·학습까지 소프트웨어를 만들고 유지하는 전체 생명주기입니다. 단계 이름과 순서는 조직마다 다르며 새 증거에 따라 이전 결정을 반복해서 수정합니다. |\n| **architecture** | 중요한 품질과 제약을 만족하도록 구성요소의 책임·경계·관계·상태·데이터·배치를 정한 구조적 결정입니다. 그림이나 제품 목록이 아니라 결정 이유·대안·검증 증거·변경 조건과 함께 설명해야 합니다. |\n| **detailed design** | 아키텍처가 정한 경계 안에서 모듈·API·스키마·상태 전이·오류 처리·알고리즘을 구현 가능한 수준으로 구체화한 설계입니다. 모든 상세 선택이 아키텍처 결정인 것은 아닙니다. |\n| **implementation** | 설계를 실제 코드·설정·마이그레이션·테스트와 빌드 아티팩트로 실현하는 활동과 결과입니다. 구현 완료가 사용자 목적이나 운영 성공까지 자동으로 증명하지는 않습니다. |\n| **technology stack / tech stack** | 시스템을 구현·실행·배포하는 데 선택한 언어·프레임워크·라이브러리·런타임·플랫폼·도구의 이름과 버전 묶음입니다. 책임 배치와 선택 이유가 없으면 아키텍처 설명을 대신하지 못합니다. |\n| **quality attribute** | 기능의 종류가 아니라 시스템이 얼마나 빠르고 안전하고 접근 가능하며 변경·복구하기 쉬워야 하는지를 나타내는 품질 조건입니다. |"
        },
        {
          "label": "웹 역할 용어",
          "start_line": 92,
          "end_line": 100,
          "text": "| **frontend** | 사용자의 입력과 화면, 브라우저 상태, 상호작용을 담당하는 계층입니다. |\n| **backend** | 신뢰할 수 있는 업무 규칙, 권한, 데이터 처리, 외부 연동을 담당하는 서버 계층입니다. |\n| **full-stack** | 사용자 화면부터 서버·데이터·배포와 운영까지 연결된 전체 범위입니다. 모든 기술을 한 사람이 깊게 안다는 뜻으로 제한하지 않습니다. |\n| **client** | 한 상호작용에서 다른 구성요소에 기능이나 데이터를 요청해 서비스를 사용하는 역할을 맡은 프로그램입니다. 브라우저·모바일 앱·명령줄 도구가 대표적이며, 백엔드 프로그램도 외부 API를 호출할 때는 그 API의 클라이언트가 됩니다. |\n| **server** | 한 상호작용에서 요청을 받아 규칙을 실행하고 데이터 또는 결과를 응답하는 역할을 맡은 프로그램입니다. 원격 또는 로컬에서 실행될 수 있고, 일상적으로는 그 프로그램이 실행되는 호스트나 환경까지 서버라고 부르므로 문맥을 확인해야 합니다. |\n| **API** | 구성요소가 어떤 입력을 받고 어떤 결과·오류를 돌려주며 어떤 권한 조건을 요구하는지 정할 수 있는 인터페이스 계약입니다. API 설명이나 명세가 있다는 사실만으로 실행 중인 구현의 준수를 증명하지는 않습니다. |\n| **endpoint** | API의 기능에 구체적인 메서드와 경로 등으로 접근하는 지점입니다. endpoint 하나가 API 전체나 백엔드 전체를 뜻하지는 않습니다. |\n| **HTTP** | 웹에서 요청과 응답을 교환하는 프로토콜입니다. |\n| **HTTPS** | HTTP 메시지를 전송 계층 보안(Transport Layer Security, TLS)으로 보호해 전송 중 도청과 변조 위험을 줄이는 통신 방식입니다. HTTPS를 쓴다는 사실만으로 서버의 권한·입력 검증이 자동으로 안전해지는 것은 아닙니다. |"
        },
        {
          "label": "흐름과 복구 오라클",
          "start_line": 120,
          "end_line": 122,
          "text": "| **optimistic UI** | 서버 확정을 기다리기 전에 성공을 예상해 화면을 먼저 바꾸고 이후 실제 결과와 조정하는 표현 전략입니다. 빠른 피드백을 줄 수 있지만 권위 상태·인가·동시성·중복 방지를 보장하지 않으므로 pending·confirmed·rejected·unknown과 복구 경로를 구분해야 합니다. |\n| **recovery oracle** | 결과가 불명확하거나 충돌한 뒤 현재 사실과 이전 작업의 처리 여부를 판정하는 근거와 조회 방법입니다. 화면 문구나 재시도 자체가 아니라 주체·대상·요청과 권위 상태를 연결해야 합니다. |\n| **flow** | 사용자 행동, 데이터, 제어 또는 작업이 경계를 지나 입력에서 결과로 이어지는 경로입니다. 사용자 요청, 일정 기반 작업, 배포와 복구처럼 시작 조건과 발생 시점이 다른 흐름을 구분합니다. |"
        },
        {
          "label": "데이터·권위 상태 용어",
          "start_line": 128,
          "end_line": 138,
          "text": "| **database** | 프로세스가 끝난 뒤에도 남아야 하는 상태를 구조와 무결성 규칙 아래 저장·조회·변경하고 동시 접근을 관리하는 시스템입니다. API의 요청 처리나 업무 권한 판단과 같은 책임은 아닙니다. |\n| **schema** | 데이터 필드, 타입, 관계, 제약을 정의한 구조입니다. |\n| **prepared statement / parameterized query** | 데이터 명령의 구조와 입력 값을 분리해 값이 명령 일부로 해석될 위험을 줄이는 실행 방식입니다. 구체적인 API는 데이터베이스·드라이버마다 확인해야 하며 인가·입력 범위·업무 규칙 검증을 대신하지 않습니다. |\n| **data contract** | 데이터를 만드는 쪽과 사용하는 쪽이 필드·타입·의미·단위·시간·품질·변경·오류를 주고받는 약속입니다. 스키마 파일만 뜻하지 않으며 계약 준수가 원천 값의 정확성을 자동 보장하지는 않습니다. |\n| **canonical schema** | 서로 다른 원천을 한 시스템 안에서 일관되게 변환·검증·전달하기 위해 선택한 내부 기준 스키마입니다. 모든 원천에 보편적인 정답이 아니며 의미 차이를 억지로 없애서는 안 됩니다. |\n| **data lineage** | 값이 어느 원천과 버전에서 들어와 어떤 변환·검증·산출물을 거쳐 사용자 결과에 도달했는지 추적하는 연결입니다. |\n| **data freshness** | 데이터가 사용자 목적과 원천 발표 주기에 비춰 얼마나 최근 상태인지를 나타내는 품질입니다. 원천 발표·수집·변환·배포 시점을 구분해 판단해야 합니다. |\n| **checksum** | 파일이나 데이터의 바이트 내용에서 계산한 비교용 값입니다. 전송·보존 중 내용 변화 탐지에 유용하지만 데이터의 의미·정확성·신뢰성을 증명하지는 않습니다. |\n| **data model** | 업무 세계의 개체와 관계와 규칙을 데이터로 표현한 모델입니다. |\n| **authoritative state** | 참가 여부·정원 승인·게시 버전처럼 특정 판단에서 기준으로 선택한 상태입니다. 모든 질문에 하나의 저장소가 항상 권위 있는 것은 아니므로 결정별 원본과 재조회 경로를 지정해야 합니다. |\n| **derived state** | 권위 상태를 계산·변환·복제해 만든 값입니다. 원본에서 다시 만들 수 있어야 하며, 원본과 같은 시점의 값을 항상 보장하지는 않습니다. |"
        }
      ],
      "omitted_scope": "R01 판단과 직접 관련 없는 작업 환경·Git·배포·AI 용어를 생략합니다.",
      "generalization_boundary": "용어 정의는 대상 원고와의 일치 판단에만 사용하며 제품별 구현 보장으로 확대하지 않습니다."
    },
    {
      "id": "adjacent-client-server",
      "role": "인접 장의 원본·사본·증거·정적 전달 경계",
      "path": "src/content/docs/03-full-stack/client-server-full-stack.md",
      "sha256": "f264f69e8b6de3708ef28c78666415189752954c96ccb6c011747d0fe7dc985e",
      "segments": [
        {
          "label": "상태 원본과 사본",
          "start_line": 114,
          "end_line": 140,
          "text": "## 상태의 권위 있는 원본과 사본을 구분하세요\n\n화면에 보이는 값, 서버가 기억하는 값과 데이터베이스에 저장된 값이 항상 동시에 같지는 않습니다. **권위 있는 원본(source of truth)**: 특정 상태의 최종 값을 결정하고 충돌을 해결하는 위치이며, 시스템 전체에 하나만 있다는 뜻이 아니라 상태 종류마다 다를 수 있습니다. 각 상태의 원본과 사본의 갱신 규칙을 정해야 새로고침, 여러 탭, 여러 사용자와 서버 재시작을 예측할 수 있습니다.\n\n| 상태 예 | 주된 위치 | 확인 질문 |\n|---|---|---|\n| 현재 보고 있는 `eventId` | URL과 브라우저 상태 | 새로고침·공유 링크에서 같은 모임을 가리키는가? |\n| 서버에서 받은 공개 모임 정보 | 브라우저 상태와 캐시 | 행사 안내 사본과 동적으로 바뀌는 모집 상태를 구분하는가? |\n| 로그인 상태 | 브라우저가 가진 식별 정보와 서버의 검증 체계 | 만료·로그아웃·탈취 시 어떻게 거절하는가? |\n| 확정된 참가 관계 | 데이터베이스 같은 영속 저장소의 `registrations` | 누가 자신의 참가를 바꿀 수 있고 활성 중복을 어떻게 막는가? |\n| `event.status`, `capacity`, 현재 확정 수 | 신뢰 가능한 애플리케이션·데이터 경계 | 참가 확정과 정원·마감 판단을 같은 일관성 경계에서 수행하는가? |\n| 남은 자리·참가 여부 표시 | 클라이언트·서버·중간 캐시의 사본 | 원본이 바뀌면 언제 무효화하고 언제 재조회하는가? |\n| 진행 중인 참가 요청 | 브라우저 UI 상태와 서버 처리 기록 | 전송 중·확정·거절·응답 유실을 어떻게 구분하는가? |\n\nUI가 먼저 바뀐 뒤 서버 요청이 실패하면 화면을 되돌리거나 실패 상태를 표시해야 할 수 있습니다. 서버 변경은 성공했지만 응답이 끊기면 클라이언트는 실패처럼 보더라도 실제 저장 상태를 다시 확인해야 합니다. 쓰기 요청을 다시 보내기 전에는 같은 변경이 이미 반영됐는지와 중복 저장·결제·알림 위험을 확인하고, 필요한 경우 멱등 키·고유 제약·처리 기록 같은 보호 장치를 둡니다. 자세한 판단은 [HTTP 요청과 응답의 재시도 전에 멱등성을 확인하기](../http-request-response/#재시도-전에-멱등성을-확인하기)에서 이어집니다.\n\n모임 흐름의 대표 충돌을 상태 원본과 사본에 연결하면 다음과 같습니다.\n\n| 상황 | 원본과 사본의 문제 | 직접 확인할 증거와 복구 판단 |\n|---|---|---|\n| 늦은 응답 | 이전 참가·취소 요청의 응답이 현재 UI 상태보다 늦게 도착해 최신 결과를 덮을 수 있음 | 브라우저 Network의 요청 시작·완료 순서와 데이터 재조회를 비교하고 현재 요청과 맞지 않는 응답은 화면에 반영하지 않음 |\n| 중복 클릭 | 버튼 비활성화는 브라우저 사본의 중복 의도만 줄이며 두 요청이 서버에 도달할 수 있음 | Network에서 실제 요청 수를 확인하고 서버의 활성 참가 중복 거절과 데이터 재조회에서 활성 중복 0건을 확인함 |\n| 취소 뒤 재참가 | 화면은 `cancelled`로 바뀌었지만 서버나 캐시에 이전 `confirmed` 사본이 남을 수 있음 | 현재 `registration.status`를 재조회하고 취소와 재참가 순서·고유성 계약에 따라 새 확정 여부를 판단함 |\n| 마지막 한 자리 충돌 | 두 브라우저가 모두 남은 한 자리 사본을 보아도 확정 경계의 권위 있는 정원 상태는 요청 사이에 바뀔 수 있음 | 동시 요청 뒤 데이터 재조회에서 정확히 한 건만 확정되고 `confirmed <= capacity`이며 다른 요청은 안전하게 거절됐는지 확인함 |\n| 캐시된 정원 표시 | 정적 파일·중간 캐시·브라우저 캐시의 남은 자리 사본이 권위 있는 모집 상태보다 오래될 수 있음 | 응답 시점과 캐시 정책을 확인하고 참가 결정은 서버가 최신 `event.status`·`capacity`·확정 수를 다시 판단하게 함 |\n\n동시에 바뀐 값의 충돌을 조용히 덮어쓸지, 오래된 버전의 변경을 거절할지, 사용자에게 비교·병합을 요청할지는 서로 다른 결과를 만듭니다. 하나를 보편적인 정답으로 가정하지 말고 데이터 손실 비용과 사용자 작업에 맞춰 선택하고 그 규칙을 증거로 남겨야 합니다."
        },
        {
          "label": "실패 위치·정적 전달·판단 규칙",
          "start_line": 142,
          "end_line": 184,
          "text": "## 하나의 화면 증상에는 여러 실패 위치가 있습니다\n\n참가 버튼을 눌렀지만 완료 여부를 알 수 없다는 같은 증상도 원인은 다를 수 있습니다.\n\n| 위치 | 대표 실패 | 확인 증거 | 다음 판단 |\n|---|---|---|---|\n| 사용자 입력 | 로그인하지 않은 상태, 이미 참가한 사용자의 중복 의도 | 현재 로그인·참가 안내와 버튼 상태 | 요청 전 안내가 충분한가? |\n| 클라이언트 상태 | 로딩 상태 고착, 중복 클릭, 취소 뒤 재참가 순서 혼동, 늦게 도착한 이전 응답 반영 | UI 상태·DOM·요청 시작과 완료 순서 | 현재 행동과 표시 조건이 같은가? 최신 요청을 구분하는가? |\n| 브라우저·네트워크 | 요청 미생성, 연결 실패, 브라우저 정책 차단 | Console과 Network | 서버에 도달했는가? |\n| API 계약 | 경로·메서드·필드·형식 불일치 | 실제 요청과 응답 | 양쪽이 같은 계약 버전을 쓰는가? |\n| 서버 규칙 | 인증·인가·중복·마감·정원 거절 | 상태 코드, 안전하게 정리된 서버 로그 | 의도된 거절인가 결함인가? |\n| 데이터 | `registrations` 확정·취소 상태 불일치, 정원 초과, 활성 중복 | 처리 뒤 데이터 재조회와 제약·동시성 테스트 | 응답과 무관하게 실제 권위 상태는 무엇인가? |\n| 외부 서비스 | 시간 초과, 한도, 응답 형식 변경 | 외부 호출 상태와 실패 기록 | 재시도가 안전하고 필요한가? |\n| 렌더링 | 응답 해석·상태 분기·참가 상태 표현 실패 | 응답 본문, UI 상태, DOM과 화면 | 응답은 왔지만 현재 확정 상태 표현에 실패했는가? |\n\n브라우저 Console에 오류가 없다는 사실만으로 서버와 데이터가 정상이라고 결론 내리지 마세요. 반대로 서버 로그에 오류가 없다고 화면까지 성공했다고 결론 내리지 마세요. 관찰 지점마다 보이는 범위가 다르므로 대표 사용자 작업을 따라 증거를 연결해야 합니다.\n\n## 풀스택은 항상 동적 서버를 뜻하지 않습니다\n\n작은 모임 안내에서 요구사항이 변하지 않는 행사 소개·준비물·장소를 공개 읽기로 제공하는 것뿐이라면 정적 HTML·JavaScript와 빌드 시 만든 공개 데이터 파일로 충분할 수 있습니다. 이 경우에도 공개 범위 확인, 빌드, 호스팅의 파일 응답, HTTPS·캐시·접근 설정, 브라우저 상태와 운영 확인까지 전체 전달 흐름은 존재합니다. 요청 시점의 업무 서버가 없더라도 공개 사본 준비 책임은 빌드·배치 시점에 수행될 수 있습니다.\n\n정적 행사 안내의 갱신은 새 산출물과 새 배포로 이루어지며 원본·배포 버전·중간 캐시·브라우저 캐시가 잠시 다른 값을 가질 수 있습니다. 따라서 갱신 완료는 빌드 성공만이 아니라 실제 배포 버전, 응답 헤더와 사용자가 받은 사본 시점까지 확인해야 합니다. 브라우저에 전달되는 정적 파일과 번들은 누구나 열람할 수 있는 공개 범위로 보고 비밀 키·내부 규칙·비공개 참가 행을 넣지 않습니다. 남은 자리·자신의 참가 상태·마감처럼 쓰기 결정을 좌우하는 값은 이 사본과 분리하고 참가 요청 때 신뢰 가능한 서버·데이터 경계에서 다시 판단합니다.\n\n다음 신호가 생길 때 동적 백엔드를 검토할 수 있습니다.\n\n- 사용자별 권한이나 비공개 데이터가 있습니다.\n- 브라우저에 둘 수 없는 비밀 키로 외부 서비스를 호출해야 합니다.\n- 데이터가 커서 사용자 조건에 따라 서버에서 조회하거나 계산해야 합니다.\n- 필요한 최신성을 빌드·배포 주기로 감당할 수 없습니다.\n- 사용자가 만든 상태를 여러 기기와 세션에 걸쳐 저장해야 합니다.\n- 변경 요청의 동시성, 감사 기록과 사용량 제어가 필요합니다.\n\n학습을 위해 서버를 억지로 추가하면 운영 책임만 늘어날 수 있습니다. 반대로 실제 권한과 비밀정보 책임이 있는데 정적 화면만으로 감추려 해도 안전하지 않습니다. 아키텍처는 “풀스택처럼 보이는가?”가 아니라 현재 요구사항과 실패 비용으로 결정합니다.\n\n## 개발자가 사용하는 판단 규칙\n\n1. **사용자 작업에서 시작합니다.** 페이지나 파일 목록보다 사용자가 끝내야 하는 행동과 성공 상태를 먼저 씁니다.\n2. **대표 흐름 하나를 끝까지 그립니다.** 사용자 입력부터 데이터와 화면 결과까지 단계마다 책임, 입력, 출력과 오류를 적습니다.\n3. **경계마다 계약을 찾습니다.** HTTP API뿐 아니라 URL 상태, 데이터 스키마, 파일 형식과 외부 서비스 응답도 계약입니다.\n4. **중요 상태의 권위를 지정합니다.** 원본 위치, 사본, 갱신·만료·충돌 규칙이 없으면 화면과 서버가 쉽게 어긋납니다.\n5. **신뢰 경계(trust boundary)에서 다시 검증합니다.** 클라이언트가 보낸 신원·권한·가격·소유권과 중요한 입력을 그대로 믿지 않고, 서버가 받는 외부 API 응답과 원천 파일도 신뢰 수준과 계약에 맞게 확인합니다.\n6. **성공 증거의 범위를 제한합니다.** 화면, 요청, 서버, 데이터와 운영 증거를 서로 대신 사용하지 않습니다.\n7. **가장 단순한 충분한 구조를 선택합니다.** 정적 전달이 요구사항을 만족하면 서버를 추가하지 않고, 서버 책임이 실제로 생기면 숨기지 않습니다."
        },
        {
          "label": "관련 용어와 출처 경계",
          "start_line": 263,
          "end_line": 283,
          "text": "## 관련 용어와 출처\n\n- [소프트웨어는 시스템입니다](../../01-mental-models/software-is-a-system/)\n- [HTTP 요청과 응답](../http-request-response/)\n- [프런트엔드와 백엔드의 경계](../frontend-backend-boundary/): 이 장은 전체 사용자 흐름을, 인접 장은 화면과 서버 사이의 책임·신뢰 경계를 더 좁게 다룹니다.\n- [브라우저·DOM·렌더링](../../05-frontend/browser-dom-rendering/)\n- [API·데이터베이스·인증](../../04-backend-data/api-database-auth/)\n- [첫 풀스택 프로젝트: 모임 참가 웹앱](../../12-case-studies/first-full-stack-project/)\n- [개발 용어집의 웹과 풀스택](../../reference/development-glossary/#웹과-풀스택)\n- [개발 용어집의 시스템과 코드](../../reference/development-glossary/#시스템과-코드)\n- [SWEBOK 소프트웨어공학 지식체계](https://www.computer.org/education/bodies-of-knowledge/software-engineering)\n- [RFC 9110 HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html): client와 server의 요청·응답 역할, 메시지와 HTTPS의 규범 범위\n- [RFC 9111 HTTP Caching](https://www.rfc-editor.org/rfc/rfc9111.html): 저장 응답의 재사용·최신성·검증 범위\n- [OWASP AJAX Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AJAX_Security_Cheat_Sheet.html)와 [Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html): 사용자가 바꿀 수 있는 클라이언트 로직과 서버의 매 요청 권한 확인 경계\n- [Chrome DevTools Sources panel](https://developer.chrome.com/docs/devtools/sources): 브라우저가 불러온 배포 자산을 사용자가 확인할 수 있는 범위\n- [Astro On-demand rendering](https://docs.astro.build/en/guides/on-demand-rendering/): 정적 사전 렌더링과 요청 시점 서버 렌더링을 구분하는 한 프레임워크의 공식 예시\n- [PostgreSQL 18 트랜잭션](https://www.postgresql.org/docs/current/tutorial-transactions.html), [트랜잭션 격리](https://www.postgresql.org/docs/current/transaction-iso.html), [제약 조건](https://www.postgresql.org/docs/current/ddl-constraints.html): 원자성·동시 접근·데이터 무결성을 확인하는 선택 데이터베이스의 구체 예시\n\nRFC와 공식 보안·브라우저·프레임워크·데이터베이스 문서는 이 장의 역할, 신뢰 경계, 배포 자산 노출, HTTP 캐시, 정적·요청 시점 렌더링, 트랜잭션·격리·제약의 판단 범위를 직접 뒷받침합니다. 다만 Astro와 PostgreSQL은 각각 한 프레임워크와 한 데이터베이스의 예시이므로 그 설정·격리 동작을 다른 제품의 기본값으로 확대하지 않습니다. 낙관적 화면 변경의 되돌림 방식, 캐시 무효화 시점과 충돌 해결 전략도 요구사항·제품·데이터 손실 비용에 따라 달라지므로 이 장은 보편 구현법이 아니라 원본·사본·증거를 분리하는 판단 계약만 제시합니다.\n\n출처의 확인일, 적용 범위와 후속 조사 대기는 저장소의 `research/source-map.md`에서 관리합니다."
        }
      ],
      "omitted_scope": "인접 장의 전체 도입·연습·AI 요청 예시를 생략합니다.",
      "generalization_boundary": "인접 장을 R01 원고 대신 읽은 것으로 계산하지 않으며 Astro·PostgreSQL 예시를 보편 구현법으로 확대하지 않습니다."
    },
    {
      "id": "shared-diagram-case-study",
      "role": "analytics 사례의 공유 도표 문맥과 역링크",
      "path": "src/content/docs/12-case-studies/analytics-dashboard-case-study.md",
      "sha256": "3813b385f1f32ce278c4b320a53065ce834e2afd1d2271a51d6af6acc03498dd",
      "segments": [
        {
          "label": "공유 다이어그램과 일곱 책임",
          "start_line": 112,
          "end_line": 126,
          "text": "## 전체 구조를 한 번에 봅니다\n\n![교육용 가상 fixture 또는 승인된 공식 원천의 정의·시간대·이용 조건을 확인한 뒤 상품 ID·거래일·시장·통화·가격 기준을 정규화하고, 품질 게이트·분석 저장소·버전이 있는 전달 계약·대시보드 UI를 거쳐 fixture 표시·갱신 감지·정정·복원 증거로 이어지는 일곱 단계 흐름](../../../assets/diagrams/analytics-dashboard-architecture.svg)\n\n이 일곱 단계가 각각 별도 서버라는 뜻은 아닙니다. 작은 fixture와 정적 사이트 안에서도 책임은 나뉩니다. 반대로 한 빌드에 모두 넣어도 원천 권리, 데이터 변환, 브라우저 전달과 공개 운영의 증거 경계가 사라지지는 않습니다.\n\n1. **원천·권리**: 지금은 `EDU-FIXTURE`라는 교육용 가상 원천임을 표시합니다. 실제 원천으로 바꾸려면 공식 정의·시간대·이용 조건·재배포 범위를 먼저 승인합니다.\n2. **수집·정규화**: 상품 ID·거래일·시장·통화·가격 기준·원천 버전을 보존하고 내부 기준 스키마로 맞춥니다.\n3. **품질 게이트**: 중복·결측·단위·거래일·조정 상태를 검사하고 게시 가능 상태와 근거를 판정합니다.\n4. **분석 저장소**: 가격·거래량·값 상태·lineage와 불변 `dataset_version`을 함께 보존합니다.\n5. **전달 계약**: 정적 파일 또는 읽기 전용 API가 버전·호환성·오류를 어떻게 전달할지 정합니다.\n6. **대시보드 UI**: 상품·기간·표·차트·단위·기준 시점·품질과 신선도 상태를 사용자에게 보여 줍니다.\n7. **사용자·운영 증거**: fixture 표시, 갱신 감지, 정정·복원 절차와 공개 사용자 흐름을 확인합니다.\n\n사용자 화면에서 문제가 발견되면 원인이 있는 단계로 돌아갑니다. 선이 끊겼다고 CSS로 점을 이어서는 안 되고, 값이 오래됐다고 품질 상태를 바꿔서도 안 됩니다. 화면 성공은 데이터 의미·권리·게시 판단·복구 성공을 증명하지 않습니다."
        },
        {
          "label": "R01 역링크와 관련 장",
          "start_line": 595,
          "end_line": 610,
          "text": "## 관련 장과 출처\n\n- [소프트웨어는 시스템입니다](../../01-mental-models/software-is-a-system/): 구성요소·책임·경계·상태·흐름과 품질을 보는 여섯 렌즈\n- [클라이언트·서버·풀스택](../../03-full-stack/client-server-full-stack/): 사용자 행동에서 화면·전달·데이터 책임까지의 흐름\n- [HTTP 요청과 응답](../../03-full-stack/http-request-response/): 읽기 전용 API를 선택했을 때의 요청·응답과 실패 경계\n- [API·데이터베이스·인증](../../04-backend-data/api-database-auth/): 사용자 상태·권한·쓰기 책임이 생길 때 추가되는 경계\n- [브라우저·DOM·렌더링](../../05-frontend/browser-dom-rendering/): 데이터가 UI 상태와 접근 가능한 화면으로 바뀌는 과정\n- [PRD·두 종류의 SDD·TDD](../../06-requirements-design/prd-sdd-tdd/): 요구·설계·작업·테스트 규율과 추적성\n- [ADR과 트레이드오프 기록](../../06-requirements-design/adr-and-tradeoffs/): 정적 전달 결정과 API 전환 조건을 기록하는 방법\n- [테스트 전략](../../08-quality/testing-strategy/): 실패 위험에 맞는 자동·브라우저·운영·사람 증거\n- [Git과 GitHub는 다릅니다](../../09-git-github/git-and-github/): 코드·계약·fixture·버전의 안전한 변경 경계\n- [빌드·배포·도메인·DNS](../../10-deployment-operations/build-deploy-domain-dns/): 로컬 아티팩트와 실제 공개 서비스의 증거 차이\n- [로그·모니터링·백업](../../10-deployment-operations/logs-monitoring-backup/): freshness·알림·정정·복원과 운영 인수\n- [AI 코딩 에이전트와 일하는 법](../../11-ai-native/working-with-coding-agents/): 수직 조각의 권한·수용 기준·검증·handoff\n- [개발 용어집](../../reference/development-glossary/): 이 사례의 개발·데이터·운영 용어\n- [SWEBOK](https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics): 요구사항·설계·테스트·운영과 품질을 연결하는 소프트웨어공학 교육 범위"
        }
      ],
      "omitted_scope": "fixture 스키마·테스트·운영 절차의 상세 본문을 생략합니다.",
      "generalization_boundary": "공유 그림은 실제 서버 topology·실제 데이터 권리·시장 사실·배포 성공을 증명하지 않습니다."
    },
    {
      "id": "meeting-case-brief",
      "role": "일반 개발 사례의 역할·상태·책임·성공 층",
      "path": "research/meeting-webapp-case-brief.md",
      "sha256": "91606d788632435d1253bbe1c1ca35e148d7058af754a088712d05dd6c4ab917",
      "segments": [
        {
          "label": "독자 문제부터 완료 판정 층",
          "start_line": 3,
          "end_line": 38,
          "text": "## 독자 문제\n\n주최자와 참가자의 행동이 화면·API·데이터·권한·운영 책임을 어떻게 통과하는지 설명합니다.\n\n## 역할\n\n- 비로그인 방문자: 공개 모임 조회\n- 참가자: 자신의 참가 신청·취소\n- 주최자: 자신이 만든 모임 생성·수정·취소·마감과 참가 현황 조회\n\n## 상태 모델\n\n- event.status: open | closed | cancelled\n- registration.status: confirmed | cancelled\n- event.version: 동시 수정 감지용 정수\n\n## 데이터 관계\n\n- users 1:N events via events.host_id\n- users N:M events via registrations\n- registrations(event_id, participant_id)는 활성 참가 기준 중복을 허용하지 않음\n\n## 수직 조각\n\n- W-01 GET /events/:eventId 공개 조회\n- W-02 POST /events와 PATCH /events/:eventId 주최자 소유권, 주최자 전용 GET /events/:eventId/registrations는 현재 주체와 events.host_id가 일치할 때만 해당 event_id의 participant_id·registration.status를 반환\n- W-03 POST /events/:eventId/registrations와 DELETE /events/:eventId/registrations/me\n- W-04 capacity·status·중복·동시 요청을 하나의 트랜잭션에서 판정\n- W-05 비밀·환경·로그·백업·복원·공개 흐름 인수\n\n## 완료 판정 층\n\n- 화면 성공: 사용자가 로딩·완료·거절·결과 불명을 구분하고 다음 행동을 찾습니다.\n- 업무 성공: 방문자·참가자·주최자의 허용된 행동이 계약대로 끝납니다.\n- 데이터 불변식 성공: 활성 중복 0건, `confirmed <= capacity`, 소유권 밖 변경 0건을 권위 데이터에서 확인합니다.\n- 운영 성공: 배포 버전과 안전한 신호를 확인하고 격리 복원 뒤 핵심 흐름을 다시 검증합니다."
        },
        {
          "label": "비목표",
          "start_line": 50,
          "end_line": 52,
          "text": "## 비목표\n\n결제, 환불, 채팅, 댓글, 알림, 지도, 캘린더, 반복 모임, 대기 명단, 추천, 공개 검색, 파일 업로드, 운영자 신고 시스템을 포함하지 않습니다."
        }
      ],
      "omitted_scope": "요구별 W-01~W-05 추적표를 생략합니다.",
      "generalization_boundary": "이 사례는 모임 웹앱 교육 경계이며 결제·채팅·알림 등 비목표나 다른 제품 동작으로 확대하지 않습니다."
    },
    {
      "id": "stock-case-brief",
      "role": "분석 사례 fixture·안전·실제 원천 금지선",
      "path": "research/stock-dashboard-case-brief.md",
      "sha256": "05efbb5cb9347631cc0c90f114040e04389a3111534966ec014f45b3a4bbb40c",
      "segments": [
        {
          "label": "목적·안전 경계·fixture",
          "start_line": 3,
          "end_line": 23,
          "text": "## 목적과 범위\n\n이 문서는 주가 데이터 분석 대시보드 캡스톤을 원고·다이어그램·테스트 오라클로 확장하기 전에 공유할 교육용 가상 데이터 계약입니다. 이 계약은 화면의 숫자를 투자 판단으로 바꾸지 않고, 데이터 정의·품질 상태·재현성·갱신 실패의 책임을 학습하기 위한 최소 기준입니다.\n\n이 단계의 목표는 IDX-X·STK-A·STK-B fixture와 그 해석 규칙을 고정하는 것이며, 실제 데이터 원천 조사, 원천 채택, 공개 원고 수정, 화면 구현, 배포는 비목표입니다. `research/source-map.md`에 실제 원천을 추가하거나 그 이용 조건·재배포 범위·조정 방식·거래일·시간대를 주장하려면 별도의 네트워크 접근 및 조사 승인이 필요합니다.\n\n## 안전 경계와 fixture\n\n아래 CSV의 모든 식별자, 시장명, 날짜, 가격, 거래량, 버전 및 상태는 교육용 가상 데이터입니다. IDX-X·STK-A·STK-B는 실제 지수나 종목을 가리키지 않고, `EDU-FIXTURE`는 실제 데이터 제공자나 원천을 뜻하지 않습니다. 이 표는 원천 사실, 현재 가격, 투자 판단 또는 데이터 권리의 증거가 아닙니다.\n\n```csv\ninstrument_id,instrument_type,market,trading_date,value_type,value,unit,volume,price_basis,source_id,source_version,transform_version,value_status,missing_reason\nIDX-X,index,MARKET-X,2026-01-05,close,2500,point,,not_applicable,EDU-FIXTURE,v1,tf-v1,valid,\nSTK-A,stock,MARKET-X,2026-01-05,close,10000,KRW,1000000,unadjusted,EDU-FIXTURE,v1,tf-v1,valid,\nSTK-B,stock,MARKET-X,2026-01-05,close,20000,KRW,700000,unadjusted,EDU-FIXTURE,v1,tf-v1,warning,late_source\nIDX-X,index,MARKET-X,2026-01-06,close,2510,point,,not_applicable,EDU-FIXTURE,v1,tf-v1,valid,\nSTK-A,stock,MARKET-X,2026-01-06,close,10100,KRW,1100000,unadjusted,EDU-FIXTURE,v1,tf-v1,valid,\nSTK-B,stock,MARKET-X,2026-01-06,close,,KRW,,unadjusted,EDU-FIXTURE,v1,tf-v1,blocked,source_missing\n```\n\n위 fixture의 모든 값과 식별자는 교육용 가상 데이터이며, 실제 데이터처럼 표시하거나 실제 원천·시세·권리·성과에 대한 주장으로 사용하지 않습니다. 실제 원천을 쓰는 후속 작업은 공식 정의, 조정 방식, 거래일·시간대, 이용 조건, 재배포 허용 범위를 확인하고 확인일·적용 범위·한계를 출처 지도에 남기는 별도 승인 작업입니다."
        },
        {
          "label": "요구·전달 규칙·공식 원천 금지선",
          "start_line": 81,
          "end_line": 110,
          "text": "## 사용자 요구와 비목표\n\n- D-01: 사용자는 IDX-X·STK-A·STK-B가 실제 종목이 아닌 교육용 fixture임을 첫 화면에서 확인합니다.\n- D-02: 사용자는 기간과 상품을 선택하고 가격 기준·단위·거래일·값 상태를 함께 확인합니다.\n- D-03: 같은 fixture와 transform_version으로 같은 표·차트·요약을 재현합니다.\n- D-04: 표와 차트는 같은 선택 결과를 사용하며 값 0·결측·경고·차단·오래됨을 구분합니다.\n- D-05: 갱신 실패 시 차단된 후보를 게시하지 않고 마지막 정상 dataset_version과 지연 이유를 표시합니다.\n- 비목표: 실제 투자 결론, 추천, 수익률 우열, 실시간 시세, 주문, 개인 포트폴리오를 다루지 않습니다.\n\n## D-01~D-05 추적 지원 원장\n\n| 요구 | 사용자 행동 | 상태 전이·변환 | 인터페이스 | 인증·인가·권리 | 위험 | 오라클 | Git 단위 | 배포·운영 증거 | 복구 |\n|---|---|---|---|---|---|---|---|---|---|\n| D-01 | 첫 화면에서 fixture임을 확인 | `EDU-FIXTURE`를 가상 데이터 상태·출처 미채택 설명으로 변환 | 제목·상태·출처 패널 | 공개 읽기만 허용, 실제 원천·재배포·투자 판단 권리 없음 | 실제 종목·시세·권리 데이터처럼 오인 | 첫 viewport fixture 문구와 실제 종목·현재 시세·추천 0건 | fixture 표시·출처·부정 문구 테스트 | commit·artifact·URL 배지 smoke, 외부 시장 요청 0건 | 오표시 배포 중지/이전 artifact 뒤 표시 재검증 |\n| D-02 | 상품·기간과 거래일·단위·가격 기준 확인 | 복합 키 세 필드+기간으로 한 표시 모델 생성 | 선택·표·차트·요약 | 쓰기·계정 없음, 정적 전달은 재배포 허가가 아님 | 다른 시장/종류·point/KRW·시간대·가격 기준 혼합 | 키 충돌 fixture 분리와 모든 표현의 행·단위·상태 일치 | 선택 책임·표시 모델·필터·충돌 테스트 | manifest와 desktop/mobile 선택 smoke | last-known-good 조합 뒤 충돌 fixture 재실행 |\n| D-03 | 버전·lineage로 같은 결과 재확인 | 입력→변환→판정→산출물을 버전·checksum·시점에 연결 | 출처 패널·manifest·전달 파일 | 비밀·권리 미확인 원문을 저장·산출물에 넣지 않음 | checksum을 의미·정확성·권리 증거로 오판 | 같은 입력/환경/명령의 지정 산출물 바이트·행·정렬 일치 | schema·변환·manifest·재현 명령/테스트 | source/lock/env/command/digest/smoke 연결 | 불일치 격리 후 정상 manifest 재구성·재검증 |\n| D-04 | 0·결측·경고·차단·오래됨을 색상 없이 구분 | 상태를 공유 모델의 점·셀·요약·알림으로 변환 | 동등한 표+차트·상태/오류 UI | 공개 fixture만 전달, 검토 역할은 자동 게시 권한 아님 | 표/차트 불일치·색상 의존·상태 혼합 | 데이터/상태 동등성, 키보드 문구, 차트 실패 때 표 유지 | 공유 모델·표/차트·상태·접근성 테스트 | 1440/390 light/dark smoke·오류·내부 스크롤 | 표/텍스트 fallback 유지 뒤 상태별 재실행 |\n| D-05 | 차단 후보와 마지막 정상·지연 이유 확인 | 허용 후보만 공개 전환, 나머지는 last-known-good 보존 | 상태/버전 패널·게시 게이트·runbook | 최소 게시/복원 권한, 실제 후보는 권리 승인 전 미게시 | 차단·권리 불명 후보 게시, 데이터/사이트 복구 불일치 | 실패 후보에서 공개 digest 불변, 허용 후보만 manifest+smoke 통과 | 상태 머신·게이트·LKG manifest·runbook | 후보/현재/LKG·판정·URL·격리 복원 연결 | 게시 중지 후 호환 데이터+사이트 복원·전체 smoke |\n\n## 전달·재현성·갱신 규칙\n\n같은 fixture와 `transform_version`은 같은 선택 조건에서 같은 표·차트·요약을 만들어야 합니다. 표와 차트는 각각 계산한 결과를 맞춰 보는 관계가 아니라 동일한 선택 결과를 공유해야 하며, `value_status`와 `missing_reason`도 각 결과에 같은 의미로 전달해야 합니다.\n\n`warning`은 이유를 숨긴 정상 결과가 아니므로 경고 사유를 함께 표시합니다. `blocked`와 `review_required`는 후보 값으로 보관할 수 있지만 일반 사용자에게 정상 수치로 게시하지 않습니다. 갱신이 실패하면 별도 전달·배포 메타데이터의 `last_normal_dataset_version`을 유지하고, `current_published_dataset_version`, 새 후보 상태, 지연 사유와 신선도 상태를 함께 표시합니다. 이 규칙은 마지막 정상 결과가 새 실패 결과로 덮어써지는 일을 막지만, 이전 결과가 최신이라는 뜻은 아닙니다.\n\n## 공식 원천 조사 금지선\n\n이 브리프는 fixture 계약만 정의하며 실제 원천, 제공자, 거래소, 라이선스, 재배포 허용, 가격 조정, 거래일 또는 시간대의 사실을 확인하거나 암시하지 않습니다. 네트워크 접근, 새 의존성, 비밀정보, 개인 데이터, 계좌 또는 주문 데이터는 이 계약의 범위 밖입니다.\n\n후속 조사 작업은 명시적 승인 뒤 공식 1차 자료만 사용해 사실과 적용 범위를 검증하고, 조사 근거를 `research/source-map.md`에 기록해야 합니다. 그 전까지 원고·다이어그램·테스트는 이 파일의 가상 fixture를 사용하며, 실제 시장이나 투자 성과에 관한 결론을 만들어서는 안 됩니다."
        }
      ],
      "omitted_scope": "고정 CSV 전체 행과 세부 수용 기준을 생략합니다.",
      "generalization_boundary": "교육용 가상 fixture만 다룹니다. 실제 시장·원천·시세·권리·투자 판단을 확인하거나 암시하지 않습니다."
    }
  ],
  "combined_sha256_rule": {
    "name": "sha256-framed-bytes-v1",
    "algorithm": "SHA-256",
    "order": [
      "요청서 자체",
      "direct_inputs 배열 순서"
    ],
    "framing": "UTF-8 'sha256-framed-bytes-v1\\n' 뒤에 각 파일마다 UTF-8 'path-bytes:<경로 바이트 수>\\n', 경로 바이트, UTF-8 '\\ncontent-bytes:<내용 바이트 수>\\n', 원시 파일 바이트, UTF-8 '\\n'을 순서대로 연결합니다.",
    "self_reference_boundary": "요청서 자체에는 요청서 SHA-256과 결합 SHA-256을 쓰지 않고 review-matrix R01 review_state에만 기록합니다."
  },
  "official_source_evidence": {
    "state": "input-fixed",
    "confirmation": "confirmed",
    "review_ready": true,
    "artifact_path": "research/public-beta-review-source-excerpts/r01-software-system.md",
    "checked_at": "2026-09-12",
    "checked_at_meaning": "access-date-not-publication-date",
    "claim_mapping_state": "exact",
    "claim_mapping_family_count": 10,
    "confirmed_claim_families": [
      "software-engineering-scope",
      "architecture-responsibility-interface",
      "software-system-and-component-boundaries",
      "http-cache-freshness",
      "build-time-versus-request-time-rendering",
      "browser-network-evidence",
      "client-server-authority-and-authorization",
      "loaded-resource-evidence",
      "postgresql-18-state-integrity-and-concurrency",
      "frontend-education-scope"
    ],
    "not_confirmed_boundaries": [
      "SWEBOK-BASE-FAIL-01",
      "SWEBOK-TOPICS-FAIL-01"
    ],
    "freshness_boundary": "2026-09-12 접근 결과만 고정하며 source-map의 과거 확인일을 갱신하거나 실패한 IEEE HTML 본문을 확인된 것으로 재분류하지 않습니다."
  },
  "source_freshness_boundary": "2026-09-12는 이 tracked 발췌 파일의 접근일이며 문서 발행일이 아닙니다. `unversioned current`는 그날 관찰한 상태일 뿐 영구 상태가 아니며, source-map의 2026-08-04·2026-08-13 기록은 수정하거나 갱신하지 않습니다.",
  "execution_state": {
    "review": "not-run",
    "actual_invocation": "not-run",
    "observed_model": "not-confirmed",
    "observed_reasoning_effort": "not-confirmed",
    "result": "not-run",
    "adjudication": "not-run",
    "rereview": "not-run",
    "valid_independent_evidence": false,
    "open_findings": {
      "critical": "not-assessed",
      "important": "not-assessed",
      "minor": "not-assessed"
    },
    "release_ready": false
  }
}
```
<!-- m5-r01-review-request:data:end -->

## reviewer 반환 형식

응답은 다음 여섯 절을 정확한 순서로 포함합니다: `검토 범위와 실제 읽은 입력`, `판정과 건수`, `위치별 finding`, `9항목 루브릭과 치명 항목`, `미확인 사실·남은 위험·검토 한계`, `재확인 기준`. 각 finding은 안정 ID, 파일 위치와 최소 인용, 심각도, 근거, 영향, 최소 수정, 재확인 기준을 포함합니다. 입력 전체 완독·불변과 계획된 실제 모델/effort가 확인되고 Critical 0·Important 0·치명 항목0·15/18 이상일 때만 PASS를 사용할 수 있습니다.
