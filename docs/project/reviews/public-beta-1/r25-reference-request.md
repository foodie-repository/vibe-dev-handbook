# R25 참고편 5개 독립 원고 검토 요청

다섯 대상의 전체 원문(메타데이터·용어·표·체크리스트·예시·링크 포함)과 아래 입력을 읽고 공통 계약 C01~C12, 한국어 여섯 절 및 문서별 9항목 루브릭을 적용하세요. 정의의 양방향 일치, 두 SDD와 TDD의 구분, 검색과 링크, 체크리스트의 실제 증거·승인 경계, 날짜별 제품 기능과 미확인 범위가 핵심입니다. 원래 정의를 바꾸지 않는 참고편 역할을 존중하고 적용외 항목의 사유를 명시하세요. 링크·수치만으로 실제 읽기를 대신하지 마세요.

현재성: 2026-11-22에 제품 공식 URL 26개, 방법론·표준 7개의 검색형 본문 발췌를 받았습니다. 추출된 구간만 근거이며 전체 페이지·계정 기능 실행·가격 검증이나 모든 주장 확인이 아닙니다. 과거 실패와 현재 근거를 구분하고 현재 발췌로 지지되지 않는 내용은 미확인으로 판정하세요. 다른 역사 입력의 날짜를 올리지 않습니다.

화면: 참고편 5경로 × 데스크톱·모바일 × light·dark 20상태의 원본 66장(상단 및 명시 절 표본)과 R24 검색의 불변 범위 14장을 실제 이미지 입력으로 제공합니다. 화면 전체 본문 또는 스크롤 가운데 모든 열을 캡처한 증거가 아닙니다. 새 검색·OS 키보드·제품 실계정·사이트 전체 회귀로 확대하지 마세요. 사이트에서 사용하는 새 R25 도표는 없습니다.

독립성: fresh 저장 세션, gpt-6-astra/high, 공식 구독·읽기 전용·네트워크와 도구 없음. 수정·위임·외부 쓰기 없이 응답만 반환하고, 이후 재검토는 동일 세션에서만 수행합니다. 원고와 준비/검증 증거의 결함을 분리하고 식별자별 범위·관측·한계를 남기세요. R26/M5/ready/소유자 승인/공개는 범위 밖입니다.

```json
{
  "review_id": "R25",
  "baseline_commit": "c1201f18e457e351d0aeee7db9c83ebc7b18f3f2",
  "targets": [
    "src/content/docs/reference/development-glossary.md",
    "src/content/docs/reference/agent-output-glossary.md",
    "src/content/docs/reference/methodology-map.md",
    "src/content/docs/reference/checklists.md",
    "src/content/docs/reference/current-tool-mapping.md"
  ],
  "full_text_paths": [
    "docs/project/reviews/public-beta-1/codex-review-contract.md",
    "src/content/docs/reference/development-glossary.md",
    "src/content/docs/reference/agent-output-glossary.md",
    "src/content/docs/reference/methodology-map.md",
    "src/content/docs/reference/checklists.md",
    "src/content/docs/reference/current-tool-mapping.md",
    "src/content/docs/reference/index.md",
    "src/content/docs/06-requirements-design/prd-sdd-tdd.md",
    "src/content/docs/04-backend-data/api-database-auth.md",
    "src/content/docs/11-ai-native/working-with-coding-agents.md",
    "src/content/docs/11-ai-native/context-spec-harness-loop.md",
    "src/content/docs/10-deployment-operations/logs-monitoring-backup.md",
    "research/public-beta-review-source-excerpts/r06-prd-sdd-tdd-2026-11-15.md",
    "research/public-beta-review-source-excerpts/r09-build-deploy-2026-11-15.md",
    ".superpowers/sdd/2026-08-12-public-beta-master-plan/r25-source-extracts.json",
    ".superpowers/sdd/2026-08-12-public-beta-master-plan/r25-methodology-extracts.json",
    "docs/project/reviews/public-beta-1/r24-navigation-adjudication.md",
    "docs/project/reviews/public-beta-1/r24-controller-closeout.md",
    "output/playwright/r25-20261122-pilot/observations.json",
    "output/playwright/r25-20261122-remaining/observations.json",
    "output/playwright/r24-search-20261116-desktop/observations.json",
    "output/playwright/r24-search-20261116-mobile/observations.json"
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
      "sha256": "c51886cd409246467a7d8614be3c5dea5645ebf16e84067bcc3faf7d087c998d",
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
      "sha256": "d7a4336d9208691a23bb2903e238d1cdebedd1a235b2d7734d3d88d902a224e1",
      "segments": [
        {
          "start_line": 142,
          "end_line": 199,
          "text": "## 2026-08-14 Task 19 개발 용어집 출처 묶음\n\nTask 19는 `development-glossary.md`의 190여 개 항목을 하나의 표준 용어집으로 소급 선언하지 않고, 실제 정의를 웹·데이터·Git·품질·운영·보안 책임 묶음으로 나눠 기존 직접 출처와 다시 대조했습니다. 아래 표에서 `재사용`은 이미 이 문서의 장별 적용 기록에 URL·확인일·상태·적용 범위·일반화 금지선이 있는 공식·1차 자료를 뜻합니다. 2026-08-14에 다시 연 ISO 12207과 IEEE 1016만 오늘의 새 현재성 확인으로 기록하며, 나머지 자료를 같은 날 재확인했다고 확대하지 않습니다.\n\n| 정의 묶음 | 공식·1차 출처와 확인 상태 | 직접 적용 범위 | 일반화 금지선 |\n|---|---|---|---|\n| 생명주기·요구·설계 | https://www.iso.org/standard/90219.html 2026-08-14 직접 확인, ISO/IEC/IEEE 12207:2026 Published Edition 2; https://www.iso.org/standard/72089.html 2026-08-13 직접 확인, ISO/IEC/IEEE 29148:2018 Published·to be revised; https://standards.ieee.org/ieee/1016/4502/ 2026-08-14 직접 확인, IEEE 1016-2009 Inactive-Reserved; 기존 42010 적용 기록 재사용 | SDLC의 병행·반복·재귀·점진 적용, 요구·설계 산출물, architecture description과 결정·근거의 범위 | 이 용어집의 단계·한국어 번역·PRD 형식·별도 SDD 파일을 표준이 강제한다고 확대하지 않음 |\n| 웹 | 기존 RFC 9110·9111, WHATWG HTML·DOM·Fetch, CSSWG, W3C WCAG 적용 기록 재사용 | HTTP 요청·응답·메서드 성질·캐시, 문서·DOM·스타일·브라우저 정책·접근성의 서로 다른 계층 | HTTP의 safe·idempotent, CORS, DOM과 한 브라우저 도구 동작을 인증·인가·모든 엔진 내부 구현으로 확대하지 않음 |\n| 데이터 | 기존 PostgreSQL 18 트랜잭션·격리·제약과 W3C PROV-O·DCAT 적용 기록 재사용 | transaction·commit·transaction rollback, 관계·제약·동시성, provenance·version·checksum의 직접 범위 | PostgreSQL 동작을 모든 데이터베이스로, schema·checksum·lineage를 값 정확성·권리·복구 성공으로 확대하지 않음 |\n| Git | 기존 Git 공식 reference·Pro Git 적용 기록 재사용 | repository·working tree·index·diff·commit·branch·worktree·restore·revert·reset·rebase의 Git 범위 | Git 상태와 복구를 배포·데이터·외부 부작용 상태나 별도 보안 격리로 확대하지 않음 |\n| 품질 | 기존 ISO/IEC/IEEE 29119-1:2022·SWEBOK V4.0a·Fowler·Google Testing 적용 기록 재사용 | static·dynamic, manual·automated, test level·oracle·double·fixture·flaky test·coverage의 구분 | 테스트 피라미드·coverage·초록 표시를 모든 위험·사용자 목적·운영 성공의 충분한 증거로 확대하지 않음 |\n| 운영·보안 | 기존 Google SRE Book, NIST least privilege·SP 800-61 Rev. 3·SP 800-34 Rev. 1, CISA, OWASP 적용 기록 재사용 | log·metric·trace·monitoring, SLI·SLO·SLA, incident·backup·restore·recovery·RPO·RTO, 최소 권한·입력 검증·비밀 수명주기 | 조직 실무와 미국 연방·보안 지침을 모든 조직의 고정 절차·법적 의무·실제 복원 성공으로 확대하지 않음 |\n\n이 교차 대조로 PBSG-013의 전체 주장 묶음은 `confirmed`로 전환할 수 있습니다. 용어집의 빠른 표는 한글·영문·약어·정의·관련 용어·흔한 오해·핵심 장을 함께 제공하지만 모든 생태계의 엄격한 분류나 유일한 번역이 아니며, 범주별 세부 보장은 각 핵심 장과 위 직접 출처 범위에서 다시 확인합니다.\n\n## 2026-08-20 Task 19 방법론 관계 지도 출처 경계\n\nTask 19는 `methodology-map.md`를 문서 산출물·구현/테스트 규율·결정 기록·생명주기/팀/흐름/운영·AI 개발 책임의 다섯 범주로 다시 구성했습니다. 아래 `재사용`은 2026-08-13~14에 이미 직접 확인해 이 문서에 URL·문서 상태·적용 범위·일반화 금지선을 기록한 자료를 뜻하며, 2026-08-20에 같은 URL을 새로 확인했다는 뜻이 아닙니다. BDD·Scrum·Kanban·DevOps·GitFlow·trunk-based development의 원형·공식 자료는 현재 source map에 없고 추가 네트워크도 실행하지 않았으므로 PBSG-014 전체를 `confirmed`로 올리지 않습니다.\n\n| 방법론 묶음 | 기존 공식·1차 출처와 확인 상태 | 직접 적용 범위 | 일반화 금지선 |\n|---|---|---|---|\n| PRD·Software Design Description·Spec-Driven Development·TDD | ISO/IEC/IEEE 29148:2018, IEEE 1016-2009 Inactive-Reserved, GitHub Spec Kit current 사례, Fowler TDD의 기존 2026-08-13 확인 기록 재사용 | 제품 요구 산출물, 설계 설명 산출물, 스펙을 계획·작업·구현으로 잇는 접근, 테스트 우선 구현 규율의 범주·입력·출력·피드백 구분 | 네 개를 같은 문서 종류·고정 선행 순서·현재 도구의 보편 표준으로 묶거나 사후 테스트를 TDD 수행으로 확대하지 않음 |\n| ADR·SDLC·Agile·CI·continuous delivery·continuous deployment | Nygard ADR 원형, ISO/IEC/IEEE 42010:2022, ISO/IEC/IEEE 12207:2026, Agile Manifesto 원칙, Fowler CI의 기존 2026-08-13~14 확인 기록 재사용 | 중요한 한 결정의 기록, 병행·반복 가능한 전체 생명주기, 가치·피드백 원칙, 통합·배포 가능 상태·자동 운영 반영의 서로 다른 책임 | ADR 양식·생명주기 단계·스프린트·브랜치·배포 빈도를 모든 조직의 의무나 성숙도 사다리로 확대하지 않음 |\n| context·spec·harness·loop | GitHub Spec Kit, OpenAI Harness Engineering, Anthropic context·long-running harness 조직 사례의 기존 2026-08-13 확인 기록 재사용 | AI 작업의 정보 선택·수용 목표·행동/검증 환경·평가/중단/인계 책임과 신생 표현의 문서 상태 | 회사 사례를 합의된 표준·보편 성숙도 모델·제품 기능 보장이나 선형 네 단계로 확대하지 않음 |\n| BDD·Scrum·Kanban·DevOps·GitFlow·trunk-based development | 직접 확인 기록 없음; 2026-08-20 추가 네트워크 미실행 | 페이지에서 주된 목적·대표 출력·다른 축과의 관계·미확인 상태를 독자에게 공개하는 범위만 적용 | 익숙한 정의·검색 요약·도구 이름을 원형·현행 공식 정의로 승격하거나 PBSG-014 전체가 확인됐다고 주장하지 않음 |\n\n따라서 `methodology-map.md`는 각 개념의 범주·목적/출력·관계/중첩·성숙도/출처 상태·일반화 금지선을 명시하고, 확인되지 않은 여섯 묶음을 페이지 끝에서 공개합니다. PBSG-014와 PBCA-007은 이 여섯 묶음의 직접 공식·1차 source cluster가 실제 확인되기 전까지 유지합니다.\n\n## 2026-08-13 현재 도구 fact pack 직접 출처\n\n이 절의 URL만 2026-08-13에 Task 7의 승인된 읽기 전용 범위에서 직접 열어 내용을 대조했습니다. 이 절을 추가한 사실은 위 기준표나 아래 장별 적용 기록에 이미 있던 다른 URL을 같은 날 재확인했다는 뜻이 아니며, 기존 행의 과거 확인일·버전·적용 범위는 그대로 유지합니다. 검색 결과나 제품 홈페이지 요약은 근거로 쓰지 않았고, 아래 직접 문서가 실제로 뒷받침하지 않는 범위를 같은 URL에 억지로 귀속하지 않았습니다.\n\nSupabase는 공식 스킬 지침에 따라 changelog를 먼저 확인했습니다. changelog에서 확인한 제거 예정 API·self-hosted 경로 차이·Data API 노출 기본값 변화·legacy key 전환은 현재성 경계를 좁히는 데만 사용했고, 개별 게시 후보 주장은 각 기능의 직접 문서로 다시 확인했습니다. Vercel 문서의 `last_updated`는 페이지 frontmatter에 표시된 값을 기록했으며, Supabase와 Codex Sites 페이지에 절대 날짜나 버전이 보이지 않으면 관찰하지 못한 값을 만들지 않았습니다.\n\n| 제품 | 직접 출처 | 확인일 | 문서 상태 | 직접 적용 범위 | 일반화·게시 경계 |\n|---|---|---|---|---|---|\n| Supabase | https://supabase.com/changelog.md | 2026-08-13 | current changelog as displayed | breaking change·deprecation·self-hosted 차이 선확인 | 개별 기능 주장이나 모임 앱 제품 선택의 근거가 아니라 조사 경계로만 사용 |\n| Supabase | https://supabase.com/docs/guides/database/overview | 2026-08-13 | current unversioned documentation as displayed; page version not shown | SUPA-DB-01, 프로젝트별 Postgres와 제품 기능의 데이터베이스 기반 | 스키마·트랜잭션·동시성·복원 시험 자동 완료로 확대 금지 |\n| Supabase | https://supabase.com/docs/guides/auth | 2026-08-13 | current unversioned documentation as displayed; page version not shown | SUPA-AUTH-01, Auth·JWT와 RLS 결합 경계 | 인증을 대상별 인가·모든 보안 요구로 확대 금지 |\n| Supabase | https://supabase.com/docs/guides/api/securing-your-api | 2026-08-13 | current unversioned documentation as displayed; page version not shown | SUPA-AUTHZ-01, privileges와 RLS의 서로 다른 통제 범위 | 정책 존재를 올바른 기본 거절·우회 차단·부정 테스트로 확대 금지 |\n| Supabase | https://supabase.com/docs/guides/api | 2026-08-13 | current unversioned documentation as displayed; page version not shown | SUPA-API-01, 스키마에서 생성되는 Data REST API와 2·3계층 사용 | 자동 API를 업무 규칙·입력 검증·API 버전 호환성 전체로 확대 금지 |\n| Supabase | https://supabase.com/docs/guides/functions | 2026-08-13 | current unversioned documentation as displayed; page version not shown | SUPA-SERVER-01, Deno 호환 TypeScript Edge Functions와 작업 형태 제한 | 범용 장기 실행 서버·워커·큐로 확대 금지 |\n| Supabase | https://supabase.com/docs/guides/deployment/database-migrations | 2026-08-13 | current unversioned documentation as displayed; page version not shown | SUPA-MIG-01, SQL 마이그레이션과 원격 적용 상태 차이 | 파일 이력을 적용·호환성·복원 성공으로 확대 금지 |\n| Supabase | https://supabase.com/docs/guides/platform/backups | 2026-08-13 | current unversioned documentation as displayed; page version not shown | SUPA-OPS-01, 데이터베이스 백업과 Storage API 객체 제외 범위 | 백업 기능을 복원 시험·RPO·RTO·전체 데이터 복구로 확대 금지 |\n| Supabase | https://supabase.com/docs/guides/platform/logs | 2026-08-13 | current unversioned documentation as displayed; page version not shown; documented logging-backend transition applies differently to older projects | SUPA-LOG-01, 서비스별 로그 소스 | 로그를 권위 상태·근본 원인·복구 성공으로 확대 금지 |\n| Supabase | https://supabase.com/docs/guides/api/api-keys | 2026-08-13 | current unversioned documentation as displayed; legacy-key transition documented | SUPA-KEY-01, publishable key와 secret key·RLS 우회 경계 | 공개 키 사용 가능성을 정책·비밀·회전 안전 보장으로 확대 금지 |\n| Vercel | https://vercel.com/docs/builds | 2026-08-13 | current documentation; last_updated: 2026-06-16 | VERCEL-BUILD-01, 소스·build·output·deployment 경계 | build 성공을 공개·사용자 흐름 성공으로 확대 금지 |\n| Vercel | https://vercel.com/docs/functions | 2026-08-13 | current documentation; last_updated: 2026-07-15 | VERCEL-RUNTIME-01, 요청 단위 server-side Functions | 데이터베이스·인증·장기 상태·모든 서버 운영 책임으로 확대 금지 |\n| Vercel | https://vercel.com/docs/environment-variables | 2026-08-13 | current documentation; last_updated: 2026-06-16 | VERCEL-ENV-01, 환경별 build·function 설정과 새 배포 적용 | 저장 위치만으로 비밀 노출·회전·권한 문제가 해결된다고 보지 않음 |\n| Vercel | https://vercel.com/docs/deployments | 2026-08-13 | current documentation; last_updated: 2026-06-17 | VERCEL-DEPLOY-01, 성공한 build 결과·고유 URL·Git 연동 배포 | 배포 이력을 외부 상태·데이터 마이그레이션 성공으로 확대 금지 |\n| Vercel | https://vercel.com/docs/domains/working-with-ssl | 2026-08-13 | current documentation; last_updated: 2026-06-08 | VERCEL-DOMAIN-01, 도메인 추가 뒤 DNS 검증과 인증서 생성 | 도메인 추가를 DNS·HTTPS·애플리케이션 응답 성공으로 확대 금지 |\n| Vercel | https://vercel.com/docs/logs | 2026-08-13 | current documentation; last_updated: 2026-06-16 | VERCEL-LOG-01, build logs와 runtime logs | 로그를 데이터 상태·모든 사용자 영향·원인·복구의 단독 증거로 확대 금지 |\n| Vercel | https://vercel.com/docs/deployments/rollback-production-deployment | 2026-08-13 | current documentation; last_updated: 2026-05-28 | VERCEL-ROLLBACK-01, routing-layer production rollback | 데이터·스키마·환경 변수·외부 서비스 rollback으로 확대 금지 |\n| Vercel | https://vercel.com/docs/marketplace-storage | 2026-08-13 | current documentation; last_updated: 2026-07-29 | VERCEL-DATA-01, 별도 storage provider 연결과 환경 변수 주입 | Vercel hosting을 관계형 DB·Auth·백업의 일반 제공으로 등치 금지 |\n| Codex Sites | 설치된 공식 로컬 제품 자료 `sites:sites-hosting@0.1.34`, `SKILL.md` 47~50행, SHA-256 `e1cd0842e1426204dbfc856e7bd7f364ee671fe6df78c6458c9a4d5e49b496e3` | 2026-08-13 | installed official local product material; exact input archive composition has no directly supporting public URL and is not a publication source | SITES-ARTIFACT-01, `dist/`·hosting metadata·migrations를 stage·validate해 archive로 만드는 로컬 packaging 경계 | 공개 원고의 인용 근거로 쓰지 않고 정확한 archive 구성을 직접 뒷받침하는 공개 공식 URL이 확인될 때까지 `not-confirmed`·미게시 유지 |\n| Codex Sites | https://developers.openai.com/codex/sites | 2026-08-13 | public beta; redirects to current unversioned `learn.chatgpt.com/docs/sites`; page version and absolute update date not shown | SITES-VERSION-01·SITES-HOST-01·SITES-RUNTIME-01과 SITES-ARTIFACT-01·SITES-ROLLBACK-01의 확인 불가 경계 | 호환 아티팩트·저장 version 설명을 정확한 archive 구성·source review·reproducible build·rollback·data recovery 전체로 확대 금지 |\n| Codex Sites | https://help.openai.com/en/articles/20001339-creating-and-managing-chatgpt-sites | 2026-08-13 | public beta; current unversioned Help Center article as displayed; absolute update date and page version not shown | SITES-DOMAIN-01, 소유 도메인과 DNS 변경 책임 | plan·region·workspace별 가용성이나 DNS·HTTPS 성공을 보편 기능으로 확대 금지 |\n"
        },
        {
          "start_line": 215,
          "end_line": 244,
          "text": "## 2026-08-13 AI 네이티브 개발 직접 출처\n\nTask 17은 PBSG-010·PBSG-017의 완전한 주장 묶음에 필요한 공식 문서·기관 자료·1차 저장소만 읽기 전용으로 확인했습니다. 이 표의 현재 제품 동작은 각 문서가 표시한 좁은 범위이고, 제품별 `read-only`·`workspace-write`·`plan mode` 같은 상태 이름을 보편 보장으로 옮기지 않습니다. 직접 URL 묶음의 첫 열기는 빈 응답이어서 근거로 사용하지 않았고, GitHub Spec Kit releases 화면은 일부 항목과 로딩 오류가 함께 보여 최신 판본 판정에서 제외했습니다. HTTP 403은 없었습니다.\n\n| 대상 | 직접 출처 | 확인일과 문서 상태 | 직접 적용 범위 | 일반화 금지선 |\n|---|---|---|---|---|\n| 최소 권한 | https://csrc.nist.gov/glossary/term/least_privilege | 2026-08-13 직접 확인; NIST CSRC current glossary, 정의별 원전은 CNSSI 4009-2015·NIST SP 800-12 Rev. 1·SP 800-53 Rev. 5·SP 800-171r3 | 사용자와 대리 프로세스에 맡은 작업 수행에 필요한 최소 자원·인가만 부여하는 원칙 | 최소 권한을 권한 0이나 작업 정확성·부작용 부재의 보장으로 확대하지 않음 |\n| OS 샌드박스 | https://developer.apple.com/documentation/xcode/configuring-the-macos-app-sandbox | 2026-08-13 직접 확인; Apple current developer documentation, page version·absolute update date not shown | macOS App Sandbox가 kernel-level access control로 파일·네트워크 등 접근을 필요한 권한으로 제한하고 공격 자체보다 성공한 공격의 피해 범위를 줄이는 제품 사례 | macOS App Sandbox의 동작을 모든 OS·컨테이너·에이전트 샌드박스의 동일 구현이나 공격 방지 보장으로 확대하지 않음 |\n| Codex 권한·샌드박스 | https://openai.com/index/introducing-upgrades-to-codex/, https://github.com/openai/codex/blob/main/codex-rs/prompts/templates/permissions/sandbox_mode/workspace_write.md | 2026-08-13 직접 확인; OpenAI 2025-06-03 제품 발표와 openai/codex current main 1차 저장소 템플릿 | 기본 sandbox·network 제한, 승인 뒤 full access·web/MCP 확장 가능성, current `workspace-write`가 cwd·writable roots 쓰기와 별도 network flag를 갖는 제품 범위 | sandbox·network-disabled·`workspace-write`를 모든 Codex 실행·버전·호스트의 동일 보장이나 허용된 경로 안 부작용·prompt injection·정보 유출 부재로 확대하지 않음 |\n| Claude Code 권한·샌드박스 | https://code.claude.com/docs/en/permissions, https://code.claude.com/docs/en/sandboxing | 2026-08-13 직접 확인; current unversioned Claude Code documentation as displayed, sandbox support·fallback·escape hatch·security limitations 포함 | 도구 권한과 Bash 자식 프로세스의 OS-level 파일·network sandbox가 서로 보완되고, built-in file tools·computer use는 다른 경계를 가지며, sandbox unavailable fallback과 unsandboxed escape hatch를 설정할 수 있는 현재 제품 범위 | Claude Code의 `Read`·`Edit` deny, auto-allow, sandbox mode를 다른 도구의 같은 이름이나 모든 subprocess·built-in tool·desktop action의 보편 격리로 확대하지 않음 |\n| Git worktree | https://git-scm.com/docs/git-worktree.html | 2026-08-13 직접 확인; current Git documentation, 페이지가 표시한 latest documentation | 한 repository에 main·linked working tree를 두고 여러 branch를 동시에 checkout하며, linked worktree가 `HEAD`·`index` 같은 per-worktree 파일을 제외한 repository 요소를 공유하고 clean 여부·lock·prune·repair 상태를 확인하는 범위 | worktree를 별도 clone·보안 경계·프로세스·포트·database·cache·secret·remote·외부 서비스의 자동 격리로 확대하지 않음 |\n| Git dry-run 사례 | https://git-scm.com/docs/git-clean.html | 2026-08-13 직접 확인; Git 2.45.0에서 마지막 변경되고 2.55.0까지 변경 없음으로 표시된 current manual | `git clean --dry-run`이 파일을 제거하지 않고 수행할 대상을 보여 주는 해당 명령의 범위 | 이 한 옵션을 모든 도구의 dry-run이 파일·network·temp·hook·external side effect를 전부 막는다는 보장으로 확대하지 않음 |\n| 독립 평가·재판정 | https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents, https://github.com/anthropics/cwc-long-running-agents | 2026-08-13 직접 확인; Anthropic 2026-01-09 engineering article과 Code with Claude 2026 event demo 1차 저장소, 후자는 not maintained·not accepting contributions 명시 | code·model·human grader의 강점·약점 결합, model grader의 비결정성과 사람 교정 필요, 깨끗한 환경·여러 trial·transcript 재검토, fresh-context read-only evaluator를 쓰는 예시 | 별도 모델·fresh context·PASS를 통계적 독립성·정확성·보안성·인간 승인이나 모든 위험의 충분한 검증으로 확대하지 않음 |\n| GitHub Spec Kit | https://github.github.com/spec-kit/, https://github.com/github/spec-kit | 2026-08-13 직접 확인; official site last updated 2026-07-16, current main repository, site는 specification-driven development toolkit로 표시 | 현재 GitHub 프로젝트의 spec-driven workflow·문서·템플릿·통합 도구 사례와 스펙을 실행 가능한 산출물로 이어 가는 조직 사례 | 현재 toolkit 흐름·명령·확장 생태계를 Software Design Description 표준, 보편 SDD 정의, 유일한 개발 순서나 구현 성공 보장으로 확대하지 않음 |\n| OpenAI 하네스 사례 | https://openai.com/index/harness-engineering/ | 2026-08-13 직접 확인; OpenAI engineering article published 2026-02-11, internal beta 조직 사례 | 저장소 지식·경계·CI·관측·review feedback을 에이전트가 읽고 집행할 수 있게 만들고 작은 구성요소·self/local/cloud review 반복으로 작업하는 사례 | OpenAI 내부 한 팀의 규모·생산성·용어·구조를 모든 조직의 표준·성숙도 단계나 Codex의 보편 성능 보장으로 확대하지 않음 |\n| Anthropic 컨텍스트 사례 | https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents | 2026-08-13 직접 확인; Anthropic Applied AI team article published 2025-09-29 | context를 유한한 자원으로 보고 instructions·tools·MCP·external data·message history를 선택·유지하며 모호함과 과잉 지시를 피하는 조직 실무 | context engineering을 합의된 표준 정의·단일 최적 구성·정확성 보장으로 확대하지 않음 |\n| Anthropic 장시간 하네스 사례 | https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents, https://www.anthropic.com/engineering/harness-design-long-running-apps | 2026-08-13 직접 확인; Anthropic articles published 2025-11-26 and 2026-03-24 | 긴 작업을 작은 단위로 나누고 명시적 진척·상태·handoff artifact를 남기며 planner·generator·evaluator와 검증 가능한 기준을 조합한 실험 사례 | 특정 agent 수·세션 구조·장시간 자율 실행을 보편 최적 구조나 사람 승인·실사용 검증 대체물로 확대하지 않음 |\n\n## 2026-08-14 코딩 에이전트 권한·상태 용어 직접 출처\n\nTask 19는 PBSG-018의 제품 정책 용어 묶음만 OpenAI와 Anthropic의 현재 공식 문서에서 읽기 전용으로 다시 확인했습니다. 아래 상태 이름은 각 제품·호스트·버전의 현재 정책 표현이며, 용어집의 제품 중립 정의나 다른 에이전트의 같은 이름으로 옮겨 쓸 수 없습니다.\n\n| 대상 | 직접 출처 | 확인일과 문서 상태 | 직접 적용 범위 | 일반화 금지선 |\n|---|---|---|---|---|\n| Codex 권한·승인 | https://learn.chatgpt.com/docs/permissions, https://learn.chatgpt.com/docs/agent-approvals-security | 2026-08-14 직접 확인; OpenAI current unversioned Codex documentation as displayed | 호스트가 권한 정책을 집행하고 에이전트의 행동 제안과 승인 결정을 분리하는 현재 제품 범위 | 에이전트의 요청·설명이나 한 번의 승인을 실제 실행·성공·다른 명령과 경로의 승인으로 확대하지 않음 |\n| Codex sandbox·mode | https://learn.chatgpt.com/docs/sandboxing, https://learn.chatgpt.com/docs/environments/modes | 2026-08-14 직접 확인; OpenAI current unversioned Codex documentation as displayed | 현재 문서의 `read-only`·`workspace-write`·`danger-full-access` 실행 경계, workspace 쓰기와 network access·approval policy를 별도 설정으로 구분하는 제품 범위 | 상태 이름을 모든 Codex host·버전의 동일 파일·프로세스·network 보장이나 허용된 경로 안 부작용 부재로 확대하지 않음 |\n| Codex worktree | https://learn.chatgpt.com/docs/environments/git-worktrees | 2026-08-14 직접 확인; OpenAI current unversioned Codex documentation as displayed | 작업을 별도 Git worktree로 격리하는 현재 제품 워크플로와 저장소 상태 범위 | worktree를 database·port·cache·secret·remote·external service의 보안 격리나 자동 정리·병합 완료로 확대하지 않음 |\n| Claude Code 권한·mode | https://code.claude.com/docs/en/permissions, https://code.claude.com/docs/en/permission-modes | 2026-08-14 직접 확인; Anthropic current unversioned Claude Code documentation as displayed | 도구 권한 규칙과 현재 built-in permission modes, `plan` mode의 조사·계획 중심 제한을 설명하는 제품 범위 | mode 이름을 다른 제품의 동일 보장, 구현·검증 완료, 모든 파일·명령·외부 부작용 차단으로 확대하지 않음 |\n| Claude Code sandbox | https://code.claude.com/docs/en/sandboxing | 2026-08-14 직접 확인; Anthropic current unversioned Claude Code documentation as displayed, sandbox availability·fallback·escape hatch·security limitations 포함 | Bash 명령과 자식 프로세스의 OS-level filesystem·network 격리, tool permission과의 보완 관계, 지원 불가 시 fallback과 unsandboxed escape hatch가 있는 현재 제품 범위 | Bash sandbox를 built-in file tools·computer use·모든 subprocess의 보편 격리나 공격·정보 유출·허용 범위 안 파괴 방지로 확대하지 않음 |\n"
        },
        {
          "start_line": 465,
          "end_line": 481,
          "text": "## 2026-08-20 Task 19 현재 도구 release candidate 직접 출처\n\nTask 19는 `reference/current-tool-mapping.md`의 날짜 민감 주장을 공식 직접 URL에서 다시 확인했습니다. 검색 결과 요약과 제3자 문서는 직접 근거로 쓰지 않았고, 공식 페이지를 열지 못한 경우 과거 성공일과 이번 실패 시도일을 분리했습니다. 로그인·account access·제품 채택·project 생성·설정 변경·구현·deploy·public URL·rollback·restore는 수행하지 않았습니다.\n\n| 대상 | 직접 출처 | 확인일과 문서 상태 | 직접 적용 범위 | 일반화 금지선 |\n|---|---|---|---|---|\n| Supabase 데이터·Auth·RLS·API | https://supabase.com/docs/guides/database/overview, https://supabase.com/docs/guides/auth, https://supabase.com/docs/guides/api/securing-your-api, https://supabase.com/docs/guides/api | 2026-08-20 직접 확인; official current unversioned documentation, page version not shown | Postgres, Auth·JWT, privileges·RLS, schema 기반 Data REST API의 현재 제품 범위와 사용자 설계 책임 | 제품 기능을 schema·인가·업무 규칙·동시성·복원 성공으로 확대하지 않음 |\n| Supabase Functions·migration | https://supabase.com/docs/guides/functions, https://supabase.com/docs/guides/deployment/database-migrations | 2026-08-20 직접 확인; official current unversioned documentation, page version not shown | Deno 호환 TypeScript 함수와 장시간 작업 경계, SQL migration과 원격 직접 변경의 이력 불일치 위험 | 함수·migration을 범용 장기 실행·원격 적용·호환성·복구 성공으로 확대하지 않음 |\n| Supabase backup·logs·keys | https://supabase.com/docs/guides/platform/backups, https://supabase.com/docs/guides/monitoring-and-debugging/logs, https://supabase.com/docs/guides/getting-started/api-keys | 2026-08-20 직접 확인; official current unversioned documentation, page version not shown | 플랜별 DB backup·PITR와 Storage 객체 제외, 플랜·프로젝트 시점별 log 조건, publishable·secret·legacy key 경계 | backup·log·key 제공을 전체 상태 복구·근본 원인·RLS 정확성·비밀 보호 완료로 확대하지 않음 |\n| Vercel 8개 current claim | https://vercel.com/docs/builds, https://vercel.com/docs/functions, https://vercel.com/docs/environment-variables, https://vercel.com/docs/deployments, https://vercel.com/docs/domains/working-with-ssl, https://vercel.com/docs/logs, https://vercel.com/docs/deployments/rollback-production-deployment, https://vercel.com/docs/marketplace-storage | 2026-08-20 직접 열기 모두 `HTTP 400 Unsupported content-type: text/markdown`; fresh-check-failed, current claim not-confirmed; last successful check 2026-08-13; 검색 결과 요약 미사용 | 이번 release candidate에서 현재 공식 근거를 닫지 못했다는 실패 기록과 재확인 책임 | 실패를 기능 부재로 바꾸거나 2026-08-13 기록을 현재 제품 동작·실제 배포·복구 성공으로 확대하지 않음 |\n| ChatGPT Sites version·artifact·host·runtime | https://learn.chatgpt.com/docs/sites, https://help.openai.com/en/articles/20001339-creating-and-managing-chatgpt-sites | 2026-08-20 직접 확인; Sites – ChatGPT public beta, developer docs current unversioned and absolute update date not shown, Help Center displays `Updated: 4 days ago` | version 저장·배포·Git commit 연결, production URL·sharing, 지원 runtime·D1·R2·unsupported pattern; exact archive composition은 not-confirmed | public beta 설명을 actual account access·implementation·deploy·public URL 또는 exact artifact contract로 확대하지 않음 |\n| ChatGPT Sites domain·rollback 경계 | https://learn.chatgpt.com/docs/sites, https://help.openai.com/en/articles/20001339-creating-and-managing-chatgpt-sites | 2026-08-20 직접 확인; public beta, plan·workspace·rollout 조건, Enterprise custom domain launch 제한, deleted Site cannot restore | 사용자 소유 domain·DNS 책임과 saved version 선택 배포; named production rollback·restore와 데이터·환경·외부 상태 복구는 not-confirmed | custom domain을 모든 계정의 기능으로, version 배포를 rollback·삭제 복구·전체 상태 restore로 확대하지 않음 |\n| Codex permission·approval·sandbox | https://learn.chatgpt.com/docs/permissions, https://learn.chatgpt.com/docs/agent-approvals-security, https://learn.chatgpt.com/docs/sandboxing | 2026-08-20 직접 확인; OpenAI official current unversioned documentation | permission profile, approval과 sandbox의 분리, 기존 `workspace-write`·`read-only`, beta `:workspace`·`:read-only`, 기본 network 경계 | profile과 기존 sandbox setting을 합성하거나 파일 경계를 무승인·network·정보 유출 부재로 확대하지 않음 |\n| Codex plan label·environment modes·worktree | https://learn.chatgpt.com/docs/agent-approvals-security, https://learn.chatgpt.com/docs/environments/modes, https://learn.chatgpt.com/docs/environments/git-worktrees | 2026-08-20 직접 확인; OpenAI official current unversioned documentation; exact `plan mode` current product label not-confirmed | 변경 없는 planning에 `read-only`를 쓰는 현재 안내, Local·Worktree·Cloud environment location, Git worktree 제품 흐름 | Claude `plan`이나 UI 명칭을 Codex permission contract로, worktree를 보안·외부 상태 격리로 확대하지 않음 |\n| Claude Code permission modes | https://code.claude.com/docs/en/permissions, https://code.claude.com/docs/en/permission-modes | 2026-08-20 직접 확인; Anthropic official current unversioned documentation | current mode 목록과 `plan`의 pre-change exploration 목적; 일반 session의 plan 승인 전 edit 차단, auto mode available + `useAutoModeDuringPlan`에서 classifier-approved command 실행, 그 외 read-only set 밖 command의 사용자 승인, `bypassPermissions`가 mode cycle에 있을 때 edit block 비보장과 attempted file edit·shell command의 무prompt 실행 가능성; version·host·plan·auto availability·setting·bypass cycle·allow/ask/deny·sandbox를 별도 확인 | `plan`을 절대적인 no-edit·read-only·부작용 부재·OS 격리 또는 Codex 제품 mode로 확대하지 않음 |\n| Claude Code sandbox·Codex 명칭 경계 | https://code.claude.com/docs/en/sandboxing, https://code.claude.com/docs/en/permission-modes | 2026-08-20 직접 확인; Anthropic official current unversioned documentation; macOS·Linux·WSL2, fallback·escape hatch·built-in tool 조건 | Bash와 자식 process의 OS-level filesystem·network sandbox; exact `workspace-write`·`read-only` Claude mode name은 not-confirmed | sandbox를 모든 tool·host·secret의 완전 격리로, Codex 명칭을 Claude의 동일 계약으로 확대하지 않음 |\n"
        }
      ]
    },
    {
      "path": "research/public-beta-source-gap-register.md",
      "sha256": "eefe11c1c41b74d3e01fa11dd403426584c4bb18dddbe8c1ca3782e4d05025bd",
      "segments": [
        {
          "start_line": 133,
          "end_line": 158,
          "text": "## Task 19 참고편 전환 기록\n\n- PBSG-013은 기존 source-map의 공식·1차 웹·데이터·Git·품질·운영·보안 적용 기록을 중앙 용어집 전체와 다시 대조하고, 2026-08-14 ISO/IEC/IEEE 12207:2026 Published Edition 2와 IEEE 1016-2009 Inactive-Reserved 상태를 직접 재확인해 `confirmed`로 전환했습니다. PB-057은 뜻이 자주 섞이는 핵심 용어를 한글·영문·약어·정의·관련 용어·흔한 오해·핵심 장으로 연결하고, 두 SDD·PRD·TDD, framework·library·runtime·platform, fallback·rollback·restore·recovery를 서로 다른 범주와 보장 범위로 구분합니다.\n- 현재 중간 집계는 `confirmed` 21개, `not-confirmed` 5개입니다. 미확인 위험 집계는 critical 1개·important 4개·normal 0개이며 PBSG-014·018·019·020·026만 `not-confirmed`입니다. PBSG-014·018은 각 참고편과 제품별 현재 매핑을 실제로 적용한 뒤 별도 판정하며, PBSG-019·020·026은 Task 19의 문서·로컬 검증으로 닫지 않습니다.\n\n## Task 19 에이전트 출력 용어집 판정\n\n- PBSG-018은 OpenAI Codex의 current permissions·approvals·sandbox·environment modes·worktree 문서와 Anthropic Claude Code의 current permissions·permission modes·sandbox 문서를 2026-08-14에 직접 확인해 `confirmed`로 전환했습니다. PB-055는 제품 중립 용어를 행동·상태, 가능한 부작용, 확인 질문으로 설명하고 `plan mode`·`workspace-write`·`read-only`를 제품·버전·호스트별 정책 이름으로 제한합니다. sandbox·worktree·dry-run·snapshot·fallback·rollback·diff·patch·fixture·smoke test·artifact를 무해·복구 가능·검증 완료의 보장으로 확대하지 않습니다.\n- 현재 중간 집계는 `confirmed` 22개, `not-confirmed` 4개입니다. 미확인 위험 집계는 critical 1개·important 3개·normal 0개이며 PBSG-014·019·020·026만 `not-confirmed`입니다. PBCA-008은 날짜 있는 current-tool 제품별 권한 매핑이 아직 없으므로 유지하고, PBSG-019·020·026은 Task 19의 문서·로컬 검증으로 닫지 않습니다.\n\n## Task 19 방법론 관계 지도 판정\n\n- PB-058은 PRD·Software Design Description·Spec-Driven Development, TDD·BDD, ADR, SDLC·Agile·Scrum·Kanban·DevOps·CI·continuous delivery·continuous deployment·GitFlow·trunk-based development, context·spec·harness·loop를 다섯 범주로 나누고 각 개념의 목적·출력·관계·중첩·성숙도·출처 상태·일반화 금지선을 명시했습니다. 관련 core 장에는 양방향 참고 링크를 추가했으며 공개 상태는 `draft`를 유지합니다.\n- PBSG-014는 기존 직접 출처가 있는 PRD·두 SDD·TDD·ADR·SDLC·Agile·CI·전달/배포·AI 실무 표현과, 직접 원형·공식 source cluster가 없는 BDD·Scrum·Kanban·DevOps·GitFlow·trunk-based development를 분리했습니다. 2026-08-20 추가 네트워크를 실행하지 않았으므로 전체 cluster는 `not-confirmed`이고 PBCA-007도 유지합니다.\n- 현재 중간 집계는 `confirmed` 22개, `not-confirmed` 4개입니다. 미확인 위험 집계는 critical 1개·important 3개·normal 0개이며 PBSG-014·019·020·026만 `not-confirmed`입니다. 문서 보강과 로컬 검증을 누락된 직접 출처 확인으로 확대하지 않습니다.\n\n### Task 19 현재 도구 reference release candidate 판정\n\n- Supabase 9개 current claim과 ChatGPT Sites public beta 6개 경계, Codex·Claude Code의 permission·approval·sandbox·mode 공식 문서를 2026-08-20에 직접 다시 확인했습니다. Sites의 정확한 artifact archive 계약과 named production rollback·restore는 계속 `not-confirmed`입니다.\n- Vercel 공식 문서 8개 URL은 2026-08-20 직접 열기에서 모두 `HTTP 400 Unsupported content-type: text/markdown`으로 실패했습니다. 검색 결과 요약을 대체 근거로 쓰지 않고 2026-08-13을 last successful check 역사로만 보존했으며, Vercel current claim은 `fresh-check-failed`·`not-confirmed` 경계로 공개 reference에 표시했습니다.\n- PBSG-018은 제품별 current label의 직접 근거와 부정 경계가 `reference/current-tool-mapping.md`에 연결되어 `confirmed`를 유지합니다. Codex의 `workspace-write`·`read-only`, Claude Code의 `plan`, 각 sandbox 경계를 확인했지만 Codex의 정확한 current `plan mode` 제품 label과 Claude Code의 정확한 `workspace-write`·`read-only` 제품 mode label은 확인된 동의어로 만들지 않았습니다.\n- 현재 집계는 `confirmed` 22개, `not-confirmed` 4개로 변하지 않습니다. 미확인 위험 집계는 critical 1개·important 3개·normal 0개이며 PBSG-014·019·020·026만 `not-confirmed`입니다. PBCA-007·PBCA-011은 유지하고, 제품 기능·문서 확인을 실제 채택·account access·구현·deploy·public URL·restore 성공으로 확대하지 않습니다.\n\n## Finding 양방향 연결\n\n| 감사 finding | 대응 Gap ID | 목표 작업 |"
        }
      ]
    },
    {
      "path": "docs/project/public-beta-content-audit.md",
      "sha256": "5b9bbec64eca339ee0b0a3c82be50c262120d6fe493c57e7963f79dc9215a608",
      "segments": [
        {
          "start_line": 82,
          "end_line": 86,
          "text": "| PB-055 | `src/content/docs/reference/agent-output-glossary.md` | reference | 에이전트 출력의 상태·권한·검증 용어는 무엇을 보장하는가? | 대상·시점·부작용·증거로 로그 용어를 해석한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 7; Task 8; Task 19 | 제품 중립 용어의 행동·상태·부작용·확인 질문은 보존하고, 2026-08-20 current-tool에 Codex·Claude Code의 `plan mode`·`workspace-write`·`read-only` 명칭·권한·sandbox 경계와 공식 URL·문서 상태·조건·일반화 금지선을 분리해 PBCA-008을 닫았습니다. |\n| PB-056 | `src/content/docs/reference/checklists.md` | reference | 작업 시작부터 복구까지 무엇을 어떤 증거와 승인으로 확인해야 하는가? | 단계별 성공·실패·미검증 상태와 외부 영향 경계를 실제 증거로 판정한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 19 | 작업 시작·진단·변경·검토·커밋·배포·운영·복구 구간을 대표 core 장과 연결하고, 모든 항목에 실제 증거를 요구하며 체크 수가 원문·명령·브라우저·데이터·운영 증거·사람 승인을 대신하지 않는 경계를 명시했습니다. |\n| PB-057 | `src/content/docs/reference/development-glossary.md` | reference | 기본 개발 용어를 시스템 관계와 보장 범위로 어떻게 구분하는가? | 웹·데이터·운영·품질 용어를 관계 중심으로 찾는다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 5; Task 19 | 핵심 장과 충돌하지 않는 정의를 유지하면서 한글·영문·약어·관련 용어·오해·핵심 장을 연결하고, PBSG-013의 범주별 공식·1차 출처와 두 SDD·기술 역할·복구 용어의 경계를 적용했습니다. |\n| PB-058 | `src/content/docs/reference/methodology-map.md` | reference | 문서·방법론·운영 관행은 어떤 범주인가? | PRD·두 SDD·TDD·BDD·ADR·SDLC·팀·흐름·운영·AI 실무 표현의 목적과 중첩을 구분한다. | draft | conform | conform | conform | conform | conform | PBCA-007 | conform | conform | needs_edit | Task 5; Task 19 | 다섯 범주와 각 개념의 목적·출력·관계·중첩·성숙도·금지선을 전체 파일에 적용하고 core 장 양방향 링크를 연결했습니다. 기존 직접 근거가 있는 묶음과 BDD·Scrum·Kanban·DevOps·GitFlow·trunk-based source 공백을 공개해 PBSG-014와 PBCA-007을 유지합니다. |\n| PB-059 | `src/content/docs/reference/current-tool-mapping.md` | current-tool | 현재 제품 기능을 오래가는 책임과 어떻게 분리해 읽는가? | 영속 책임·확인일·문서 상태·사용자 결정·일반화 금지선으로 Supabase·Vercel·ChatGPT Sites와 에이전트 제품 용어를 판정한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 8; Task 19 M3-REF; Task 22 R25; Task 25 | 2026-08-20 Supabase·Sites·Codex·Claude Code 공식 직접 근거를 적용하고 제품별 조건과 부정 경계를 분리했습니다. Vercel 8개 current claim은 직접 열기 실패를 표시해 2026-08-13을 last successful check 역사로만 보존했으며 `SITES-ARTIFACT-01`·`SITES-ROLLBACK-01`도 `not-confirmed`로 유지했습니다. 제품 채택·account access·구현·deploy·public URL·restore 성공은 주장하지 않습니다. |"
        }
      ]
    }
  ],
  "images": [
    {
      "id": "R25-PNG-001",
      "path": "output/playwright/r25-20261122-pilot/current-tool-mapping-1440-light-top.png",
      "sha256": "5a2e6d48b2fd322bc6a696fcc0e6046d2b2a3cdf7744363f9af568645cf82199",
      "width": 1440,
      "height": 1000,
      "state": "current-tool-mapping#1440#light",
      "observations": "output/playwright/r25-20261122-pilot/observations.json"
    },
    {
      "id": "R25-PNG-002",
      "path": "output/playwright/r25-20261122-pilot/current-tool-mapping-1440-light-section0-start.png",
      "sha256": "e959d94720575223f614552a7897ef580fe6926bfff162f0fa2ddf6d39249b58",
      "width": 1440,
      "height": 1000,
      "state": "current-tool-mapping#1440#light",
      "observations": "output/playwright/r25-20261122-pilot/observations.json"
    },
    {
      "id": "R25-PNG-003",
      "path": "output/playwright/r25-20261122-pilot/current-tool-mapping-1440-light-section1-start.png",
      "sha256": "06e17d5b530281507c78fa63969b4cf28dc7d6bd2cb7eedf7f6c8a239817c75d",
      "width": 1440,
      "height": 1000,
      "state": "current-tool-mapping#1440#light",
      "observations": "output/playwright/r25-20261122-pilot/observations.json"
    },
    {
      "id": "R25-PNG-004",
      "path": "output/playwright/r25-20261122-pilot/current-tool-mapping-1440-light-section2-start.png",
      "sha256": "4510c26f7b1421bf2851c57e69c1513e3a755fc882a8535a46cca43e7ffc3437",
      "width": 1440,
      "height": 1000,
      "state": "current-tool-mapping#1440#light",
      "observations": "output/playwright/r25-20261122-pilot/observations.json"
    },
    {
      "id": "R25-PNG-005",
      "path": "output/playwright/r25-20261122-pilot/current-tool-mapping-390-dark-top.png",
      "sha256": "48cd75ef571e9d9dd9b194d24e88e66e4b5df5b86d676ba4bc2c9dbb58d65f1c",
      "width": 390,
      "height": 844,
      "state": "current-tool-mapping#390#dark",
      "observations": "output/playwright/r25-20261122-pilot/observations.json"
    },
    {
      "id": "R25-PNG-006",
      "path": "output/playwright/r25-20261122-pilot/current-tool-mapping-390-dark-section0-start.png",
      "sha256": "2f870829d44036c98f137293bd3f21c251388228f5aa0a31773060f81932e893",
      "width": 390,
      "height": 844,
      "state": "current-tool-mapping#390#dark",
      "observations": "output/playwright/r25-20261122-pilot/observations.json"
    },
    {
      "id": "R25-PNG-007",
      "path": "output/playwright/r25-20261122-pilot/current-tool-mapping-390-dark-section0-end.png",
      "sha256": "e59c75d068335fdc81a1796ff2aef6f8ca0d95971db27d63e125c4f732a32050",
      "width": 390,
      "height": 844,
      "state": "current-tool-mapping#390#dark",
      "observations": "output/playwright/r25-20261122-pilot/observations.json"
    },
    {
      "id": "R25-PNG-008",
      "path": "output/playwright/r25-20261122-pilot/current-tool-mapping-390-dark-section1-start.png",
      "sha256": "0f8a4c685ac0a4dc518d15e6282f66421f502d7bcb3d9ca6c600d24494f3f2d6",
      "width": 390,
      "height": 844,
      "state": "current-tool-mapping#390#dark",
      "observations": "output/playwright/r25-20261122-pilot/observations.json"
    },
    {
      "id": "R25-PNG-009",
      "path": "output/playwright/r25-20261122-pilot/current-tool-mapping-390-dark-section1-end.png",
      "sha256": "fc5ca4dc01a4016e968c6ff674fbd83ddf1405d63e8b93e1a927b82f44d42000",
      "width": 390,
      "height": 844,
      "state": "current-tool-mapping#390#dark",
      "observations": "output/playwright/r25-20261122-pilot/observations.json"
    },
    {
      "id": "R25-PNG-010",
      "path": "output/playwright/r25-20261122-pilot/current-tool-mapping-390-dark-section2-start.png",
      "sha256": "53382cb89b5e6d408db8397367af27e98dcebf33e71dbab3501b24013dfd3653",
      "width": 390,
      "height": 844,
      "state": "current-tool-mapping#390#dark",
      "observations": "output/playwright/r25-20261122-pilot/observations.json"
    },
    {
      "id": "R25-PNG-011",
      "path": "output/playwright/r25-20261122-pilot/current-tool-mapping-390-dark-section2-end.png",
      "sha256": "7017cf3668f853b4a609acabf8187db4cdb83c8153dce762baa12d6224d72abd",
      "width": 390,
      "height": 844,
      "state": "current-tool-mapping#390#dark",
      "observations": "output/playwright/r25-20261122-pilot/observations.json"
    },
    {
      "id": "R25-PNG-012",
      "path": "output/playwright/r25-20261122-remaining/current-tool-mapping-1440-dark-top.png",
      "sha256": "f984d27637bdf81e9380ece1893ddace6f0e75cfb8ce7dc099d34190c1ccd3c9",
      "width": 1440,
      "height": 1000,
      "state": "current-tool-mapping#1440#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-013",
      "path": "output/playwright/r25-20261122-remaining/current-tool-mapping-1440-dark-section0-start.png",
      "sha256": "1692d80ce4cfe8b2b9bbd6b4814b1c4b4e8fcc14a3fb2cd0f88f89cf2aaa39b7",
      "width": 1440,
      "height": 1000,
      "state": "current-tool-mapping#1440#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-014",
      "path": "output/playwright/r25-20261122-remaining/current-tool-mapping-1440-dark-section1-start.png",
      "sha256": "f7682bc9d1d74e35e6bfd611164052a575c5e76d71e8cfafe85605ae346faed6",
      "width": 1440,
      "height": 1000,
      "state": "current-tool-mapping#1440#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-015",
      "path": "output/playwright/r25-20261122-remaining/current-tool-mapping-1440-dark-section2-start.png",
      "sha256": "ced921119955a56a66cc2d73a245aa4ed32dc1f0f1817aab0a59af9cee055052",
      "width": 1440,
      "height": 1000,
      "state": "current-tool-mapping#1440#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-016",
      "path": "output/playwright/r25-20261122-remaining/current-tool-mapping-390-light-top.png",
      "sha256": "4a98c29703284cda4836d1cddfc2440558192aa58a2bd46bc01d5a75fa77c3b3",
      "width": 390,
      "height": 844,
      "state": "current-tool-mapping#390#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-017",
      "path": "output/playwright/r25-20261122-remaining/current-tool-mapping-390-light-section0-start.png",
      "sha256": "e091a364faf3800526694e249cf556e88e7bdb3d06bd877e356fa0851715fad4",
      "width": 390,
      "height": 844,
      "state": "current-tool-mapping#390#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-018",
      "path": "output/playwright/r25-20261122-remaining/current-tool-mapping-390-light-section0-end.png",
      "sha256": "ad5516f93c3210b00e41d7df55b696dc9bfc53205a890c6c4f562848d1e0e60e",
      "width": 390,
      "height": 844,
      "state": "current-tool-mapping#390#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-019",
      "path": "output/playwright/r25-20261122-remaining/current-tool-mapping-390-light-section1-start.png",
      "sha256": "3d650b7a078a8aac6c3fafe5946a9849d75754cb810a70ca9ae9c3e7e8ef7b2b",
      "width": 390,
      "height": 844,
      "state": "current-tool-mapping#390#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-020",
      "path": "output/playwright/r25-20261122-remaining/current-tool-mapping-390-light-section1-end.png",
      "sha256": "3b8d6d37c6ba2edf9f2c6fad7059dd806b0a3fd927754d768ec4196dd44ce53c",
      "width": 390,
      "height": 844,
      "state": "current-tool-mapping#390#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-021",
      "path": "output/playwright/r25-20261122-remaining/current-tool-mapping-390-light-section2-start.png",
      "sha256": "e479195673cb86aa912701470b5c4753e1709669a043fcdec95c21bd06d823ac",
      "width": 390,
      "height": 844,
      "state": "current-tool-mapping#390#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-022",
      "path": "output/playwright/r25-20261122-remaining/current-tool-mapping-390-light-section2-end.png",
      "sha256": "b830bbbe62520d173f4dbb56c87ec859b51a9d08e929b5394349d8dd364778b8",
      "width": 390,
      "height": 844,
      "state": "current-tool-mapping#390#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-023",
      "path": "output/playwright/r25-20261122-remaining/development-glossary-1440-light-top.png",
      "sha256": "de24b23842f931e88a01c06c82a6766809d47ea4b15313b9a6544cc036026af5",
      "width": 1440,
      "height": 1000,
      "state": "development-glossary#1440#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-024",
      "path": "output/playwright/r25-20261122-remaining/development-glossary-1440-light-section0-start.png",
      "sha256": "a7e3b790c9cd39f0d40e9e8b3b14e2da026bcc757d7bebd247429deba5a55e62",
      "width": 1440,
      "height": 1000,
      "state": "development-glossary#1440#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-025",
      "path": "output/playwright/r25-20261122-remaining/development-glossary-390-dark-top.png",
      "sha256": "91fbe3b39e662214014e6d1ea9b7529974378e5a282ffd21f5bbf5b94d19e05a",
      "width": 390,
      "height": 844,
      "state": "development-glossary#390#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-026",
      "path": "output/playwright/r25-20261122-remaining/development-glossary-390-dark-section0-start.png",
      "sha256": "7d223a97ee78004fcf1aedfa710daf7ae28c07059aea844e1f1d908fc676992a",
      "width": 390,
      "height": 844,
      "state": "development-glossary#390#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-027",
      "path": "output/playwright/r25-20261122-remaining/development-glossary-1440-dark-top.png",
      "sha256": "3fff886369a9475ce30a9a30df1db4e97d9bb8645ec312667e5003a6ee782e0f",
      "width": 1440,
      "height": 1000,
      "state": "development-glossary#1440#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-028",
      "path": "output/playwright/r25-20261122-remaining/development-glossary-1440-dark-section0-start.png",
      "sha256": "9e48bfcf30d418763b8681ba047755f9c17a9d85e71f011ceac68ed4c59a7e18",
      "width": 1440,
      "height": 1000,
      "state": "development-glossary#1440#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-029",
      "path": "output/playwright/r25-20261122-remaining/development-glossary-390-light-top.png",
      "sha256": "acab3f383e43b56a98365674e3c6491e7bd766df09f9d582f6233aaffb6d12f2",
      "width": 390,
      "height": 844,
      "state": "development-glossary#390#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-030",
      "path": "output/playwright/r25-20261122-remaining/development-glossary-390-light-section0-start.png",
      "sha256": "edbc623f3c26b1b8f75595e0d8de99735fe5181137c65817938d68db3ee3d619",
      "width": 390,
      "height": 844,
      "state": "development-glossary#390#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-031",
      "path": "output/playwright/r25-20261122-remaining/agent-output-glossary-1440-light-top.png",
      "sha256": "9a609e6728fdd6c2d745d87f56cb1cdd2507c6d60c1dcd22d9e7dffa652c8573",
      "width": 1440,
      "height": 1000,
      "state": "agent-output-glossary#1440#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-032",
      "path": "output/playwright/r25-20261122-remaining/agent-output-glossary-1440-light-section0-start.png",
      "sha256": "25fbc1157264a5b60d6003408ee4328d07a8391125b464ea2a49382c830f3feb",
      "width": 1440,
      "height": 1000,
      "state": "agent-output-glossary#1440#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-033",
      "path": "output/playwright/r25-20261122-remaining/agent-output-glossary-390-dark-top.png",
      "sha256": "037d7c30d74b912838a4428ee3bbab329094b1d8721fcf4d00c3f8fcd24ca29e",
      "width": 390,
      "height": 844,
      "state": "agent-output-glossary#390#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-034",
      "path": "output/playwright/r25-20261122-remaining/agent-output-glossary-390-dark-section0-start.png",
      "sha256": "57930cef2eb4bffae59ee54b872dd32c51817e88a5418007b94cdc10c9bbe645",
      "width": 390,
      "height": 844,
      "state": "agent-output-glossary#390#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-035",
      "path": "output/playwright/r25-20261122-remaining/agent-output-glossary-390-dark-section0-end.png",
      "sha256": "216cb170ea7543d6abf473f28a2441dbc66bd971e914decb8596318296862e79",
      "width": 390,
      "height": 844,
      "state": "agent-output-glossary#390#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-036",
      "path": "output/playwright/r25-20261122-remaining/agent-output-glossary-1440-dark-top.png",
      "sha256": "4b3b9104ba2b9576900e0921f5003a08e4ee0c304a56d6697751ff8bd376b6ab",
      "width": 1440,
      "height": 1000,
      "state": "agent-output-glossary#1440#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-037",
      "path": "output/playwright/r25-20261122-remaining/agent-output-glossary-1440-dark-section0-start.png",
      "sha256": "c5ef5a31001d0847501b75f1295fa2d42b5c5a1e62a53e086748d9217ef81b6b",
      "width": 1440,
      "height": 1000,
      "state": "agent-output-glossary#1440#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-038",
      "path": "output/playwright/r25-20261122-remaining/agent-output-glossary-390-light-top.png",
      "sha256": "5d643452e4645702cf294925d5dcf4d39be8fb7c7f1420c021d45f86ba961734",
      "width": 390,
      "height": 844,
      "state": "agent-output-glossary#390#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-039",
      "path": "output/playwright/r25-20261122-remaining/agent-output-glossary-390-light-section0-start.png",
      "sha256": "71241f378b76bd3f6c3e1fd53199c52e1fa6aeb0924ecbde2a42f66283df0f56",
      "width": 390,
      "height": 844,
      "state": "agent-output-glossary#390#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-040",
      "path": "output/playwright/r25-20261122-remaining/agent-output-glossary-390-light-section0-end.png",
      "sha256": "039db64c20802d643f67a5721f6ae173f799e9e53531d1d429668546fb227e18",
      "width": 390,
      "height": 844,
      "state": "agent-output-glossary#390#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-041",
      "path": "output/playwright/r25-20261122-remaining/methodology-map-1440-light-top.png",
      "sha256": "399010b31966b7c345eda1d217743fb8a85a5149def562460a96e1439f85a1ee",
      "width": 1440,
      "height": 1000,
      "state": "methodology-map#1440#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-042",
      "path": "output/playwright/r25-20261122-remaining/methodology-map-1440-light-section0-start.png",
      "sha256": "b2a353d868056d1083688f60eb408cc9c1c3555ae7916a78c22f32d5201cf6f1",
      "width": 1440,
      "height": 1000,
      "state": "methodology-map#1440#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-043",
      "path": "output/playwright/r25-20261122-remaining/methodology-map-1440-light-section1-start.png",
      "sha256": "480816244322f97208de41c5b24b4c5fc011e01c986f34b297d8c2690b5cbaf4",
      "width": 1440,
      "height": 1000,
      "state": "methodology-map#1440#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-044",
      "path": "output/playwright/r25-20261122-remaining/methodology-map-390-dark-top.png",
      "sha256": "a694109506d84caf78d04e922b561e7797226ffe4d1bced8cde9404e36b80ee1",
      "width": 390,
      "height": 844,
      "state": "methodology-map#390#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-045",
      "path": "output/playwright/r25-20261122-remaining/methodology-map-390-dark-section0-start.png",
      "sha256": "4aed805f61294672eb0b03fb6b31e1566c1d0508a55b62776af602ea2217f57c",
      "width": 390,
      "height": 844,
      "state": "methodology-map#390#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-046",
      "path": "output/playwright/r25-20261122-remaining/methodology-map-390-dark-section0-end.png",
      "sha256": "6681bde624c69b59cb156415f5298aa5d66845a73eb40c55233d61ac14123df4",
      "width": 390,
      "height": 844,
      "state": "methodology-map#390#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-047",
      "path": "output/playwright/r25-20261122-remaining/methodology-map-390-dark-section1-start.png",
      "sha256": "1e4a0c085490409ccfadf846f37889c4e7d39c25cb741f93010ea332deefe735",
      "width": 390,
      "height": 844,
      "state": "methodology-map#390#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-048",
      "path": "output/playwright/r25-20261122-remaining/methodology-map-390-dark-section1-end.png",
      "sha256": "3671c18b0326fd00d01113125063de1a0bb47c3efea3ce84b682960d823019ae",
      "width": 390,
      "height": 844,
      "state": "methodology-map#390#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-049",
      "path": "output/playwright/r25-20261122-remaining/methodology-map-1440-dark-top.png",
      "sha256": "4b75ed20d62a16888e021acacfc8f78551eaf823f8eab9bc2d3173d0c0fb6fa0",
      "width": 1440,
      "height": 1000,
      "state": "methodology-map#1440#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-050",
      "path": "output/playwright/r25-20261122-remaining/methodology-map-1440-dark-section0-start.png",
      "sha256": "9a93cbf87e07b77646b7fe7cb9889c9b77c2bd9e3a1c11bd50753e362117a8a3",
      "width": 1440,
      "height": 1000,
      "state": "methodology-map#1440#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-051",
      "path": "output/playwright/r25-20261122-remaining/methodology-map-1440-dark-section1-start.png",
      "sha256": "a74193a0c8af20178ab130bf87c277326775cb9ae8e36dfaec078236e0dd225a",
      "width": 1440,
      "height": 1000,
      "state": "methodology-map#1440#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-052",
      "path": "output/playwright/r25-20261122-remaining/methodology-map-390-light-top.png",
      "sha256": "f8ff58bf4e3ea6b1e351ed4e5b916fa93e3fa817069b3b00459bb1845cb17eba",
      "width": 390,
      "height": 844,
      "state": "methodology-map#390#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-053",
      "path": "output/playwright/r25-20261122-remaining/methodology-map-390-light-section0-start.png",
      "sha256": "9ced51af647a218bbfe9e7dfeffac60ea9df453b0de418efabf6d60b0450e0fa",
      "width": 390,
      "height": 844,
      "state": "methodology-map#390#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-054",
      "path": "output/playwright/r25-20261122-remaining/methodology-map-390-light-section0-end.png",
      "sha256": "84c67cfa119024b157614a35eb2726165147099a331564211f9b249c40c14841",
      "width": 390,
      "height": 844,
      "state": "methodology-map#390#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-055",
      "path": "output/playwright/r25-20261122-remaining/methodology-map-390-light-section1-start.png",
      "sha256": "09418e63ea77271c7941bd595c379a97ad10ca270de17616c6f45439322b2460",
      "width": 390,
      "height": 844,
      "state": "methodology-map#390#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-056",
      "path": "output/playwright/r25-20261122-remaining/methodology-map-390-light-section1-end.png",
      "sha256": "15e06eab91021c36100e2246049190125a55d98fb8b0399911f81210cfe3981a",
      "width": 390,
      "height": 844,
      "state": "methodology-map#390#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-057",
      "path": "output/playwright/r25-20261122-remaining/checklists-1440-light-top.png",
      "sha256": "f170837c41d31f1fbc0b422646aeaca209c9f97ef575ccae66a6315192fe933a",
      "width": 1440,
      "height": 1000,
      "state": "checklists#1440#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-058",
      "path": "output/playwright/r25-20261122-remaining/checklists-1440-light-section0-start.png",
      "sha256": "9103651c8d6e1bbbad54b28030d539fff4cdfadab925720331c9eea6a0c31094",
      "width": 1440,
      "height": 1000,
      "state": "checklists#1440#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-059",
      "path": "output/playwright/r25-20261122-remaining/checklists-390-dark-top.png",
      "sha256": "b62876b023d65572b65b78f495bdc0ccde5c4572f9ab68ae4534c4169e4c2e7f",
      "width": 390,
      "height": 844,
      "state": "checklists#390#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-060",
      "path": "output/playwright/r25-20261122-remaining/checklists-390-dark-section0-start.png",
      "sha256": "d2c6d1b407755aa24ee14741bdd56f4d2c5627cac2b00c8e7a282a7591d65054",
      "width": 390,
      "height": 844,
      "state": "checklists#390#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-061",
      "path": "output/playwright/r25-20261122-remaining/checklists-390-dark-section0-end.png",
      "sha256": "341783b7ec00dfa97688894f6075cce1f3b43a797ada844a1d21a84371701429",
      "width": 390,
      "height": 844,
      "state": "checklists#390#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-062",
      "path": "output/playwright/r25-20261122-remaining/checklists-1440-dark-top.png",
      "sha256": "f8ad10ee4c89b3f8447fb32b03aea1f1103b02b34d4d0dad3959128a2ec0aced",
      "width": 1440,
      "height": 1000,
      "state": "checklists#1440#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-063",
      "path": "output/playwright/r25-20261122-remaining/checklists-1440-dark-section0-start.png",
      "sha256": "b9a5569f7828c7aa0a7e1bd996368e2810c2e2c99da1c0bcc95a2e0ec6e9efe5",
      "width": 1440,
      "height": 1000,
      "state": "checklists#1440#dark",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-064",
      "path": "output/playwright/r25-20261122-remaining/checklists-390-light-top.png",
      "sha256": "e4dd03548cff5400215e6f3ac4ea87de7acff6fd06cbbc0032ed009306e6fd95",
      "width": 390,
      "height": 844,
      "state": "checklists#390#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-065",
      "path": "output/playwright/r25-20261122-remaining/checklists-390-light-section0-start.png",
      "sha256": "ee0ba8b969f85abc3ff06a746490c8f7cbbab89799e9b7bba8d9d03a5ed18a17",
      "width": 390,
      "height": 844,
      "state": "checklists#390#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-066",
      "path": "output/playwright/r25-20261122-remaining/checklists-390-light-section0-end.png",
      "sha256": "f44e4190cecf9d945111692037a81e82b689ec67ed230695430814dd71f7658b",
      "width": 390,
      "height": 844,
      "state": "checklists#390#light",
      "observations": "output/playwright/r25-20261122-remaining/observations.json"
    },
    {
      "id": "R25-PNG-067",
      "path": "output/playwright/r24-search-20261116-desktop/q0-results.png",
      "sha256": "a0075ccb11b3d1d1ed10db2db0cee11242c722c85eda224613785ce8a83c30ab",
      "width": 1440,
      "height": 1000,
      "historical": "R24 search; not a fresh R25 search",
      "query": "백엔드",
      "observations": "output/playwright/r24-search-20261116-desktop/observations.json"
    },
    {
      "id": "R25-PNG-068",
      "path": "output/playwright/r24-search-20261116-desktop/q0-destination.png",
      "sha256": "54e0fb592b00b4cf8beb9fe43e5d75ee0657cfe8aa2e85bde5d272916b97d003",
      "width": 1440,
      "height": 1000,
      "historical": "R24 search; not a fresh R25 search",
      "query": "백엔드",
      "observations": "output/playwright/r24-search-20261116-desktop/observations.json"
    },
    {
      "id": "R25-PNG-069",
      "path": "output/playwright/r24-search-20261116-desktop/q1-results.png",
      "sha256": "0fd319bc6ece4a3b0a47bd1b5d9446c2999b490f79894607e04fbede4a1ba37b",
      "width": 1440,
      "height": 1000,
      "historical": "R24 search; not a fresh R25 search",
      "query": "authentication",
      "observations": "output/playwright/r24-search-20261116-desktop/observations.json"
    },
    {
      "id": "R25-PNG-070",
      "path": "output/playwright/r24-search-20261116-desktop/q1-destination.png",
      "sha256": "523531c37663f2e8dc17e0baac4c280d1196d0b4fe11fe4fa92fafea987830a8",
      "width": 1440,
      "height": 1000,
      "historical": "R24 search; not a fresh R25 search",
      "query": "authentication",
      "observations": "output/playwright/r24-search-20261116-desktop/observations.json"
    },
    {
      "id": "R25-PNG-071",
      "path": "output/playwright/r24-search-20261116-desktop/q2-results.png",
      "sha256": "8d3eb8b0581d4978839516cf2c7a09c6780e78e31aab289358c60577f1faec49",
      "width": 1440,
      "height": 1000,
      "historical": "R24 search; not a fresh R25 search",
      "query": "SDD",
      "observations": "output/playwright/r24-search-20261116-desktop/observations.json"
    },
    {
      "id": "R25-PNG-072",
      "path": "output/playwright/r24-search-20261116-desktop/q2-destination.png",
      "sha256": "641ca2599b6989fe5b6867732b8fdde8dbcb5e3c3445c02c9ed33c55f407b1a4",
      "width": 1440,
      "height": 1000,
      "historical": "R24 search; not a fresh R25 search",
      "query": "SDD",
      "observations": "output/playwright/r24-search-20261116-desktop/observations.json"
    },
    {
      "id": "R25-PNG-073",
      "path": "output/playwright/r24-search-20261116-desktop/q3-results.png",
      "sha256": "1be6c851b73a7decad128334e00a6e160cbd0a8e991adc6b7ca999038398ce70",
      "width": 1440,
      "height": 1000,
      "historical": "R24 search; not a fresh R25 search",
      "query": "로그인은 됐는데 참가 신청이 거절됨",
      "observations": "output/playwright/r24-search-20261116-desktop/observations.json"
    },
    {
      "id": "R25-PNG-074",
      "path": "output/playwright/r24-search-20261116-mobile/q0-results.png",
      "sha256": "ae764316796665198a59af1cda881754c3223bdfb6dd4af868a33ade6e539c6b",
      "width": 390,
      "height": 844,
      "historical": "R24 search; not a fresh R25 search",
      "query": "백엔드",
      "observations": "output/playwright/r24-search-20261116-mobile/observations.json"
    },
    {
      "id": "R25-PNG-075",
      "path": "output/playwright/r24-search-20261116-mobile/q0-destination.png",
      "sha256": "12fd047f1bd026731d280aac85e586a23bd5f033fed009d3b33c42f4696657a0",
      "width": 390,
      "height": 844,
      "historical": "R24 search; not a fresh R25 search",
      "query": "백엔드",
      "observations": "output/playwright/r24-search-20261116-mobile/observations.json"
    },
    {
      "id": "R25-PNG-076",
      "path": "output/playwright/r24-search-20261116-mobile/q1-results.png",
      "sha256": "7bffeb745761c8fbbba83c2747d69fbdd66c6010b9242a10240357e3c3a8db50",
      "width": 390,
      "height": 844,
      "historical": "R24 search; not a fresh R25 search",
      "query": "authentication",
      "observations": "output/playwright/r24-search-20261116-mobile/observations.json"
    },
    {
      "id": "R25-PNG-077",
      "path": "output/playwright/r24-search-20261116-mobile/q1-destination.png",
      "sha256": "b50044e1046f410d5b503ab3eb9d0bfb25aa0d493cfece5abe505eea0618f5fd",
      "width": 390,
      "height": 844,
      "historical": "R24 search; not a fresh R25 search",
      "query": "authentication",
      "observations": "output/playwright/r24-search-20261116-mobile/observations.json"
    },
    {
      "id": "R25-PNG-078",
      "path": "output/playwright/r24-search-20261116-mobile/q2-results.png",
      "sha256": "23c2ffd98756c8f647d0fbde922a2f3fdd6764c41d36769342df452fa988356b",
      "width": 390,
      "height": 844,
      "historical": "R24 search; not a fresh R25 search",
      "query": "SDD",
      "observations": "output/playwright/r24-search-20261116-mobile/observations.json"
    },
    {
      "id": "R25-PNG-079",
      "path": "output/playwright/r24-search-20261116-mobile/q2-destination.png",
      "sha256": "b0b1aa385021cf3da1ea67e91e2703675f80d6e535902181c3e9fd7e9e9a25a7",
      "width": 390,
      "height": 844,
      "historical": "R24 search; not a fresh R25 search",
      "query": "SDD",
      "observations": "output/playwright/r24-search-20261116-mobile/observations.json"
    },
    {
      "id": "R25-PNG-080",
      "path": "output/playwright/r24-search-20261116-mobile/q3-results.png",
      "sha256": "ec1120d21943bcf29774148c4a7065f05ef77e8115f1aafe9d4e801426cdd757",
      "width": 390,
      "height": 844,
      "historical": "R24 search; not a fresh R25 search",
      "query": "로그인은 됐는데 참가 신청이 거절됨",
      "observations": "output/playwright/r24-search-20261116-mobile/observations.json"
    }
  ]
}
```
