# R04 API·데이터베이스·인증 — 고정 검토 요청

기준 commit 9cf3c2634a2aa1e5f14e734478409c239244a027, 입력 고정 2026-11-15. 대상 원고 전체, 열거한 전체 텍스트·SVG/Mermaid와 아래 지정 문맥·직접 출처 발췌를 읽습니다. 발췌 밖까지 읽었다고 주장하지 않습니다. 공개 입력은 R04 한 편이며 인접 장은 충돌 판단 문맥이지 해당 행의 완료 검토가 아닙니다.

검토자는 controller·작성자·이전 대화와 분리된 fresh gpt-6-astra/high 저장 세션입니다. 전역 설정·인증을 변경하지 않는 프로세스 한정 공식 ChatGPT 구독 경로를 사용하며 API키·추가 크레딧·다른 과금은 금지합니다. 최초 history0과 실제 프로필·읽기 전용·모든 도구 금지, 후속 같은 ID와 이력 복구를 확인합니다. R02 검토자 승계 예외는 적용하지 않습니다. 진단 세션은 실제 원고 reviewer가 아닙니다.

핵심 질문은 API 계약과 구현, 인증과 객체·행동 인가, 서명·MAC과 암호화, SQL 구조와 값, 미확정 변경과 복원, 정원 경쟁의 원자성·격리·고유성·유한 재시도, commit 뒤 응답 유실의 권위 상태·복구 오라클을 초보자가 구별하고 검증할 수 있는가입니다. C01~C12, 9항목18점과 치명 항목을 모두 적용합니다. 현재성은 새 직접 발췌의 실제 확인 범위와 기존 자료의 역사적 확인일을 구분하며 추정으로 빈칸을 채우지 않습니다.

원본 PNG18개는 Task20 Fix Round1의 6상태×(viewport1+도표crop2)입니다. crop은 당시 소비 이미지와 같은 크기의 임시 canvas에 한 번 그려 캡처한 증거이며 현재 브라우저 실행이나 전체 페이지 캡처가 아닙니다. 현재 SVG/MMD는 당시 commit과 바이트 동일합니다. original 상세 수준의 실제 localImage 입력을 순서·ID·경로·SHA와 연결합니다. 모든 이미지를 시각적으로 읽고 이미지별 관측과 판독 한계를 기록하세요. 경로·해시·OCR·이전 PASS는 실제 픽셀 검토를 대신하지 않습니다. 오래된 전체 화면의 원고가 현재 원고와 같다고 가정하지 마세요.

한국어 결과는 공통 계약의 여섯 절을 따릅니다. 파일·도구·웹·MCP·플러그인·셸·외부 상태·하위 에이전트 사용을 금지하고 응답만 반환하세요. 준비 코드가 별도 제공되면 원고 판정과 구분해 독립 준비 검토의 C/I/M 및 체크포인트 적합성을 판단하세요. 입력 전 SHA 비교는 controller의 실제 결과이고, 응답 후 불변성은 이후 감사할 조건이지 reviewer가 미리 PASS할 사실이 아닙니다. 모든 finding은 근거·위치·영향·최소 수정·재확인 기준을 적습니다.

이 요청은 입력 준비이며 원고 검토 완료·review/ready 전이·M5·소유자 공개 승인이 아닙니다. 별도 manifest는 자기참조를 피하려고 자신을 제외한 실제 입력을 순서대로 고정합니다.

<!-- m5-r04-request:data:start -->
```json
{
  "schema_version": 1,
  "review_id": "R04",
  "baseline_commit": "9cf3c2634a2aa1e5f14e734478409c239244a027",
  "target": "src/content/docs/04-backend-data/api-database-auth.md",
  "planned_profile": {
    "model": "gpt-6-astra",
    "reasoning_effort": "high"
  },
  "fresh": true,
  "persistent": true,
  "successor_exception": false,
  "full_text_paths": [
    "docs/project/reviews/public-beta-1/codex-review-contract.md",
    "src/content/docs/04-backend-data/api-database-auth.md",
    "src/assets/diagrams/api-database-auth-flow.svg",
    "src/assets/diagrams/source/api-database-auth-flow.mmd",
    "src/assets/diagrams/api-database-auth-sequence.svg",
    "src/assets/diagrams/source/api-database-auth-sequence.mmd",
    "research/public-beta-review-source-excerpts/r04-api-data-auth-2026-11-15.md",
    "research/meeting-api-database-auth-research-brief.md",
    "research/meeting-webapp-case-brief.md",
    "src/content/docs/03-full-stack/client-server-full-stack.md",
    "src/content/docs/03-full-stack/http-request-response.md",
    "src/content/docs/04-backend-data/data-model-schema-migration.md",
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
      "sha256": "d1a4029e6b3755b96ee54ddcfc26e0ae79dcc2bab69a1bc3ae62b8799e66fec4",
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
          "start_line": 278,
          "end_line": 287,
          "text": "| `03-full-stack/client-server-full-stack.md` | 저장소 내부 `research/meeting-webapp-case-brief.md` | 2026-08-10 | W-01 공개 모임 상세 조회, W-03 참가·취소와 W-04 권한·중복·모집 상태·정원·동시 요청 계약을 사용자 흐름과 상태 원본·사본 판단에 적용하는 범위. 특정 제품의 구현 방법이나 실제 서비스 동작의 근거로 사용하지 않음 |\n| `03-full-stack/client-server-full-stack.md` | https://www.rfc-editor.org/rfc/rfc9110.html, https://www.rfc-editor.org/rfc/rfc9111.html | 2026-08-13 | IETF Standards Track RFC 9110의 client·server 요청·응답 역할과 HTTPS 의미, RFC 9111의 저장 응답 재사용·최신성·재검증 범위. HTTP 캐시 규칙을 애플리케이션 상태 캐시의 보편 구현법으로 확대하지 않음 |\n| `03-full-stack/client-server-full-stack.md` | https://cheatsheetseries.owasp.org/cheatsheets/AJAX_Security_Cheat_Sheet.html, https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html | 2026-08-13 | OWASP Cheat Sheet Series 현행 페이지에서 사용자가 제어할 수 있는 client-side logic과 중요 업무 규칙의 server-side 재검증, 매 요청의 객체·기능 권한 확인 범위. 화면 제어를 인가 증거로 사용하지 않음 |\n| `03-full-stack/client-server-full-stack.md` | https://developer.chrome.com/docs/devtools/sources | 2026-08-13 | Chrome DevTools 공식 Sources 패널이 페이지가 불러온 문서·스타일·스크립트·이미지와 배포된 코드를 열람하는 범위. 한 브라우저의 패널 이름을 모든 브라우저의 UI로 일반화하지 않으며 열람 가능성이 원본 저장소 전체의 공개를 뜻하지 않음 |\n| `03-full-stack/client-server-full-stack.md` | https://docs.astro.build/en/guides/on-demand-rendering/ | 2026-08-13 | Astro 현행 공식 문서의 기본 정적 사전 렌더링과 route별·전체 요청 시점 서버 렌더링 구분. Astro 설정을 다른 프레임워크의 기본값이나 정적 전달의 보편적 충분 조건으로 확대하지 않음 |\n| `03-full-stack/client-server-full-stack.md` | https://www.postgresql.org/docs/current/tutorial-transactions.html, https://www.postgresql.org/docs/current/transaction-iso.html, https://www.postgresql.org/docs/current/ddl-constraints.html | 2026-08-13, PostgreSQL 18 current | PostgreSQL 18의 all-or-nothing 트랜잭션, 동시 접근에서의 격리 수준·직렬화 이상, 데이터 제약 범위를 모임 참가의 원자성·정원·중복 검증 예시로 사용. 특정 격리 수준·잠금·제약 표현을 다른 데이터베이스의 기본 보장으로 확대하지 않음 |\n| `03-full-stack/frontend-backend-boundary.md` | https://www.rfc-editor.org/rfc/rfc9110.html | 2026-08-13, IETF Standards Track RFC 9110 | client가 method·target·fields·content가 있는 request를 보내고 server가 status·fields·content가 있는 response를 보내는 역할 범위. 프런트엔드·백엔드 책임을 HTTP 역할과 완전히 같은 뜻으로 확대하지 않음 |\n| `03-full-stack/frontend-backend-boundary.md` | https://cheatsheetseries.owasp.org/cheatsheets/AJAX_Security_Cheat_Sheet.html, https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html | 2026-08-13 | OWASP 현행 공식 Cheat Sheet의 사용자 통제 client-side logic, 중요 업무 규칙의 server-side 재검증, deny by default, 매 요청의 객체·기능 권한 확인 범위. 특정 프레임워크의 구현이나 실제 모임 서비스의 인가 성공으로 확대하지 않음 |\n| `03-full-stack/frontend-backend-boundary.md` | https://developer.chrome.com/docs/devtools/sources | 2026-08-13 | Chrome DevTools 공식 Sources 패널에서 페이지가 불러온 문서·스타일·스크립트·이미지와 deployed code를 확인하는 범위. 브라우저에 전달된 자산을 비밀 은닉 경계로 보지 않되 원본 저장소 전체가 공개된다는 뜻으로 확대하지 않음 |\n| `03-full-stack/frontend-backend-boundary.md` | 저장소 내부 `research/meeting-webapp-case-brief.md` | 2026-08-10 | W-01 공개 조회, W-02 주최자 소유권, W-03 자신의 참가·취소, W-04 인증·인가·중복·모집 상태·정원·동시 요청을 프런트엔드 안내와 서버·데이터 최종 집행 경계에 적용하는 교육용 범위. 실제 API·데이터베이스·배포 성공 근거로 사용하지 않음 |"
        },
        {
          "start_line": 292,
          "end_line": 311,
          "text": "| `03-full-stack/http-request-response.md` | https://www.w3.org/TR/mixed-content/ | 2026-08-13, W3C Candidate Recommendation Draft 23 February 2023 | HTTPS 제한 문맥의 HTTP 자원 중 upgradeable content의 HTTPS 자동 업그레이드와 실패 시 차단, script 같은 blockable request의 network error 범위. 모든 자원·브라우저 버전이 같은 UI나 세부 동작을 보인다고 확대하지 않음 |\n| `03-full-stack/http-request-response.md` | https://developer.chrome.com/docs/devtools/network/ | 2026-08-13 | Chrome DevTools 공식 Network 패널에서 요청·응답·headers·payload·timing을 관찰하는 현재 제품 범위. Chrome 도구 이름·표시를 다른 브라우저의 보편 UI로 확대하지 않음 |\n| `04-backend-data/api-database-auth.md` | https://spec.openapis.org/oas/v3.2.0.html | 2026-08-06 | OpenAPI 3.2.0의 operation별 parameter·request body·response·security requirement와 API 설명 형식, 명세와 런타임 준수 증거의 구분 |\n| `04-backend-data/api-database-auth.md` | https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html | 2026-08-06 | authentication 정의, 일반화된 인증 실패 응답과 재인증 판단을 위한 OWASP 실무 지침 범위 |\n| `04-backend-data/api-database-auth.md` | https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html | 2026-08-06 | 최소 권한·deny by default·매 요청 권한 확인과 권한 테스트를 위한 OWASP 실무 지침 범위 |\n| `04-backend-data/api-database-auth.md` | https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html | 2026-08-06 | 세션 ID와 서버 측 의미·업무 로직, 세션 수명·보호 경계를 구분하는 OWASP 실무 지침 범위 |\n| `04-backend-data/api-database-auth.md` | https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html | 2026-08-06 | 문자열 결합 위험과 prepared statement·parameterized query로 쿼리 구조와 입력 값을 분리하는 OWASP 실무 지침 범위 |\n| `04-backend-data/api-database-auth.md` | https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html | 2026-08-06 | 세션 식별자·접근 토큰·비밀번호·연결 문자열·키·민감 개인정보를 로그에 직접 기록하지 않는 실무 지침 범위 |\n| `04-backend-data/api-database-auth.md` | https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/, https://owasp.org/API-Security/editions/2023/en/0xa5-broken-function-level-authorization/ | 2026-08-06 | OWASP API Security Top 10 2023의 객체 ID가 있는 endpoint별 권한 검사와 기능별 권한 통제 위험 범위 |\n| `04-backend-data/api-database-auth.md` | https://pages.nist.gov/800-63-4/, https://pages.nist.gov/800-63-4/sp800-63b.html, https://pages.nist.gov/800-63-4/sp800-63b/session/ | 2026-08-06 | NIST SP 800-63 Revision 4의 authentication·authenticator·session, 세션 secret·쿠키·access token·재인증 용어와 미국 연방 디지털 신원 적용 범위 |\n| `04-backend-data/api-database-auth.md` | https://www.rfc-editor.org/rfc/rfc7515.html, https://datatracker.ietf.org/doc/html/rfc7516 | 2026-08-06 | JWS의 서명·MAC 기반 무결성 보호와 JWE의 기밀성·무결성 보호를 구분하는 IETF 규범 명세 범위 |\n| `04-backend-data/api-database-auth.md` | https://www.rfc-editor.org/rfc/rfc9110.html | 2026-08-06 | `Authorization` 자격 증명 헤더와 `401`·`403`의 규범적 의미, 애플리케이션의 자원별 권한 정책과의 경계 |\n| `04-backend-data/api-database-auth.md` | https://www.postgresql.org/docs/18/tutorial-transactions.html, https://www.postgresql.org/docs/18/transaction-iso.html, https://www.postgresql.org/docs/18/ddl-constraints.html, https://www.postgresql.org/docs/18/libpq-exec.html | 2026-08-06 | PostgreSQL 18의 트랜잭션 원자성·commit·rollback, 격리와 직렬화 재시도, 제약 조건, 명령문과 매개변수 분리 동작 범위 |\n| `04-backend-data/api-database-auth.md` | https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Authentication, https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/401, https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/403 | 2026-08-06 | HTTP 인증 challenge·credential 흐름과 `401`·`403`을 비개발자용 설명에 연결하는 보조 범위, 규범 의미는 RFC 9110 우선 |\n| `04-backend-data/api-database-auth.md` | 저장소 내부 `research/meeting-api-database-auth-research-brief.md`, `research/meeting-webapp-case-brief.md` | 2026-08-10 | 기존 OpenAPI·OWASP·NIST·IETF·PostgreSQL 18·MDN 출처 ID의 확인 범위를 W-02 주최자 소유권, W-03 자신의 참가·취소, W-04 중복·모집 상태·정원·동시 요청·트랜잭션과 commit 뒤 응답 유실 판단에 적용하는 범위. 새 제품 출처가 필요하지 않으며 특정 제품의 구현 방법이나 실제 서비스 동작의 근거로 사용하지 않음 |\n| `04-backend-data/data-model-schema-migration.md` | https://www.postgresql.org/docs/18/ddl-basics.html, https://www.postgresql.org/docs/18/ddl-constraints.html | 2026-08-13, PostgreSQL 18 current | PostgreSQL 18의 테이블·열·타입과 NOT NULL·CHECK·UNIQUE·PRIMARY KEY·FOREIGN KEY 제약을 개체·속성·관계·키·불변식의 관계형 스키마 예시에 적용. 관계형 구조 하나를 모든 데이터 모델의 유일한 표현으로, 제약을 업무 인가·정원 동시성 전체의 보장으로 확대하지 않음 |\n| `04-backend-data/data-model-schema-migration.md` | https://www.postgresql.org/docs/18/ddl-alter.html | 2026-08-13, PostgreSQL 18 current | PostgreSQL 18의 열·제약 추가·변경·삭제와 명령별 제품 동작을 기존 구조를 단계적으로 바꾸는 예시에 적용. 특정 DDL의 잠금·재작성·실행 시간을 측정 없이 단정하거나 다른 데이터베이스의 동작으로 일반화하지 않음 |\n| `04-backend-data/data-model-schema-migration.md` | https://www.postgresql.org/docs/18/tutorial-transactions.html, https://www.postgresql.org/docs/18/transaction-iso.html | 2026-08-13, PostgreSQL 18 current | PostgreSQL 18의 원자적 트랜잭션·commit·rollback과 동시 트랜잭션 격리·재시도 범위를 마이그레이션 단계와 사용자 쓰기 공존 위험에 적용. 트랜잭션 `ROLLBACK`을 이미 확정된 운영 마이그레이션 전체의 무손실 복구와 같은 뜻으로 확대하지 않음 |\n| `04-backend-data/data-model-schema-migration.md` | https://martinfowler.com/bliki/ParallelChange.html | 2026-08-13 확인, Danilo Sato, 2014-05-13 | Parallel Change가 하위 호환되지 않는 인터페이스 변경을 expand·migrate·contract 세 단계로 나누고, expand에서 구·신 인터페이스를 함께 지원하며, 사용처를 점진적으로 옮긴 뒤 옛 계약을 제거하는 범위. 이를 모든 스키마 변경의 유일한 절차나 특정 데이터베이스의 무중단 보장으로 확대하지 않음 |\n| `04-backend-data/data-model-schema-migration.md` | https://martinfowler.com/articles/continuousIntegration.html | 2026-08-13 확인, Martin Fowler, 현행 개정본 2024-01-18 | 데이터베이스 필드 변경의 Parallel Change 예시에서 새 필드 추가, 구·신 필드 이중 쓰기, 기존 데이터 복사, 새 필드 읽기, 옛 필드 제거를 가역적인 작은 단계로 나누는 범위. 이 예시가 모든 데이터 변환의 값 검증·성능·잠금·외부 부작용 복구를 자동 보장한다고 확대하지 않음 |"
        },
        {
          "start_line": 314,
          "end_line": 318,
          "text": "| `04-backend-data/state-cache-queue.md` | https://www.rfc-editor.org/rfc/rfc9111.html | 2026-08-13, RFC 9111 HTTP Caching, Internet Standard STD 98 (June 2022) | HTTP 캐시 응답의 현재 나이·최신성 수명·fresh/stale·재검증 범위를 파생 응답의 신선도 판단에 적용. HTTP 캐시 규칙을 애플리케이션 메모리 캐시·데이터베이스 읽기 사본·모든 CDN의 내부 정책으로 확대하지 않음 |\n| `04-backend-data/state-cache-queue.md` | https://www.rabbitmq.com/docs/reliability, https://www.rabbitmq.com/docs/queues | 2026-08-13, RabbitMQ 공식 현행 문서의 판본 비고정 URL | 연결·채널 실패, consumer acknowledgement 전 미확인 전달의 requeue/redelivery 가능성, 생산자·소비자 확인과 복구, 큐 순서가 여러 요인의 영향을 받는 제품 범위를 중복·재전달·순서·재처리 판단에 적용. RabbitMQ의 보장을 모든 메시징 제품이나 외부 부작용의 exactly-once 완료로 일반화하지 않음 |\n| `04-backend-data/state-cache-queue.md` | https://www.postgresql.org/docs/18/tutorial-transactions.html, https://www.postgresql.org/docs/18/transaction-iso.html, https://www.postgresql.org/docs/18/ddl-constraints.html | 2026-08-13, PostgreSQL 18 current | PostgreSQL 18의 commit된 트랜잭션·동시 접근 격리·제약 범위를 모임 참가 데이터의 권위 상태와 불변식 재조회 예시에 적용. PostgreSQL 데이터베이스와 외부 메시지 발행을 하나의 자동 원자 트랜잭션으로 간주하거나 다른 데이터베이스의 보장으로 확대하지 않음 |\n| `04-backend-data/state-cache-queue.md` | 저장소 내부 `research/meeting-webapp-case-brief.md`, `research/stock-dashboard-case-brief.md` | 2026-08-10 | 모임 웹앱의 `events`·`registrations` 권위 상태·정원·중복·동시 요청과 첫 범위의 알림 비목표, 교육용 `EDU-FIXTURE`의 공개 버전·값 상태·신선도·마지막 정상 버전을 서로 분리한 사례에 적용. 큐를 첫 캡스톤의 필수 구조로 추가하거나 fixture를 실제 시장·시세·투자·권리의 근거로 사용하지 않음 |\n| `05-frontend/browser-dom-rendering.md` | https://developer.mozilla.org/en-US/curriculum/ | 2026-08-04 | HTML·CSS·JavaScript의 책임, DOM과 브라우저 렌더링, 개발자 도구와 프런트엔드 검증 범위 |"
        },
        {
          "start_line": 368,
          "end_line": 374,
          "text": "| `12-case-studies/first-full-stack-project.md` | https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics | 2026-08-06 | 모임 웹앱의 문제·요구·설계·구현·테스트·배포·운영 인수를 서로 다른 산출물과 증거로 추적하는 소프트웨어 생명주기 교육 범위 |\n| `12-case-studies/first-full-stack-project.md` | https://spec.openapis.org/oas/v3.2.0.html | 2026-08-06 | W-01~W-03의 operation별 입력·응답·보안 요구를 구현과 분리된 API 설명 계약으로 검토하는 범위 |\n| `12-case-studies/first-full-stack-project.md` | https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html, https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html, https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/ | 2026-08-06 | 인증과 인가, 매 요청의 주체·대상·행동 확인, 다른 주최자의 모임과 다른 참가자의 신청을 다루는 부정 테스트 범위 |\n| `12-case-studies/first-full-stack-project.md` | https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html | 2026-08-06 | 운영 로그에서 토큰·세션 식별자·연결 문자열과 실제 개인정보를 제외하고 안전한 작업·결과 증거를 남기는 범위 |\n| `12-case-studies/first-full-stack-project.md` | https://www.postgresql.org/docs/18/tutorial-transactions.html, https://www.postgresql.org/docs/18/transaction-iso.html, https://www.postgresql.org/docs/18/ddl-constraints.html | 2026-08-06 | 참가 중복·정원·상태 판정을 위한 트랜잭션 원자성, 격리·직렬화 충돌, 제약과 `commit`·`rollback` 책임을 설명하는 범위 |\n| `12-case-studies/first-full-stack-project.md` | https://developer.mozilla.org/en-US/docs/Web/HTTP, https://developer.mozilla.org/en-US/curriculum/ | 2026-08-06 | 공개 조회·참가·취소의 요청·응답과 로딩·정상·없음·취소·전달 실패를 브라우저 화면 증거와 구분하는 교육 범위 |\n| `12-case-studies/first-full-stack-project.md` | https://git-scm.com/book/ko/v2 | 2026-08-06 | 작업 트리·staged diff·로컬 `commit`·원격 공유를 구분하고 한 수직 기능 조각의 변경 이력과 되돌릴 지점을 남기는 범위 |"
        },
        {
          "start_line": 396,
          "end_line": 400,
          "text": "| `08-quality/debugging-observability.md` | https://sre.google/sre-book/effective-troubleshooting/ | 2026-08-13 직접 확인; Google SRE Book Chapter 12, Chris Jones, 온라인 판권 표시 2017 | 문제 보고·관측·시스템 지식에서 가설을 만들고 통제된 시험으로 반증하며 영향 완화·증거 보존·재현·수정·재발 방지를 연결하는 운영 신뢰성 문맥 | 한 장의 이상화된 흐름을 모든 장애의 유일한 순서로 확대하지 않고 운영 위험·권한·사용자 영향에 따라 안정화를 먼저 할 수 있음을 유지 |\n| `08-quality/debugging-observability.md` | https://opentelemetry.io/docs/concepts/signals/, https://opentelemetry.io/docs/concepts/observability-primer/ | 2026-08-13 직접 확인; OpenTelemetry current unversioned documentation, signals 페이지 표시 갱신 2026-03-10, primer 표시 갱신 2026-04-23 | trace·metric·log 신호의 서로 다른 관찰 범위와 telemetry를 통해 시스템 상태를 이해하는 observability 개념 | 세 신호를 수집했다는 사실을 완전한 계측·근본 원인 규명·복구 성공으로 확대하지 않고 OpenTelemetry 도구 구성을 모든 관측성의 필수 구현으로 사용하지 않음 |\n| `08-quality/debugging-observability.md`; `08-quality/performance-security.md` | https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html | 2026-08-13 직접 확인; OWASP Cheat Sheet Series current guidance, 페이지 판본·절대 갱신일 미표시 | 로그의 보안·운영 목적과 토큰·비밀번호·연결 문자열·암호화 키·민감 개인정보를 직접 기록하지 않는 범위 | 법률·조직·시스템별 보존 정책을 한 체크리스트로 대체하거나 로그 보유를 원인·권위 상태의 단독 증거로 확대하지 않음 |\n| `08-quality/performance-security.md` | https://developer.chrome.com/docs/devtools/performance, https://developer.chrome.com/docs/devtools/performance/overview, https://www.w3.org/TR/user-timing/, https://www.w3.org/TR/resource-timing/ | 2026-08-13 직접 확인; Chrome current documentation, User Timing Candidate Recommendation Draft 2026-03-11, Resource Timing Candidate Recommendation Draft 2026-04-20 | 실제 프로필에서 병목을 찾는 Chrome 제품 사례와 애플리케이션·자원 시간 측정을 위한 W3C 초안 인터페이스 범위 | Chrome 129 기반 UI와 웹 성능 API를 모든 런타임의 프로파일러로 확대하지 않고 Candidate Recommendation Draft를 W3C Recommendation이나 보편 성능 임계값으로 표현하지 않음 |\n| `08-quality/performance-security.md` | https://web.dev/articles/your-first-performance-budget | 2026-08-13 직접 확인; web.dev 공식 Google 교육 글, 2018 공개, current article as displayed | 사용자 목적·환경에 맞춘 시간·자원량·규칙 기반 performance budget을 세우고 실제 측정에 따라 조정하는 교육 범위 | 글의 예시 수치·기기·네트워크를 현재 제품이나 모든 사이트의 합격 기준으로 사용하지 않음 |"
        },
        {
          "start_line": 438,
          "end_line": 442,
          "text": "- `03-full-stack/client-server-full-stack.md` (`PBSG-022`, 2026-08-13 확인): RFC 9110·9111, OWASP AJAX·Authorization Cheat Sheet, Chrome DevTools Sources, Astro on-demand rendering, PostgreSQL 18의 트랜잭션·격리·제약을 위 장별 적용 기록에 연결했습니다. 이 자료는 client·server 역할, 브라우저에 전달된 배포 자산의 관찰 가능성, client-side 검증의 보안적 한계, HTTP 캐시 최신성, 정적·요청 시점 렌더링의 한 공식 예시, 인가·동시성·데이터 재조회 증거 범위를 직접 뒷받침합니다. 낙관적 UI·충돌·캐시 무효화의 단일 구현법이나 Astro·PostgreSQL의 제품 동작을 보편화하지 않으며, 2026-08-05 역사 검토는 현재 `draft`의 `reviewEvidence`로 재사용하지 않습니다.\n- `03-full-stack/http-request-response.md` (`PBSG-023`, 2026-08-13 확인): RFC 9110, WHATWG Fetch CORS protocol, W3C Mixed Content Candidate Recommendation Draft와 Chrome DevTools Network 문서를 위 장별 적용 기록에 연결했습니다. CORS는 response sharing의 opt-in이며 preflight 여부에 따라 본 요청 도달 여부가 달라질 수 있고, mixed content는 자원 종류에 따라 자동 업그레이드 또는 차단될 수 있다는 범위를 직접 반영했습니다. CORS를 인증·인가·서버 간 차단으로, 브라우저가 응답을 쓰지 못한 상태를 서버 미처리로, Chrome UI를 모든 브라우저 동작으로 확대하지 않습니다. 구체 상태 코드·오류 코드·`Idempotency-Key`·재조회 endpoint는 각 API 계약에서 확인하며 2026-08-05 역사 검토는 현재 `draft`의 증거로 재사용하지 않습니다.\n- `04-backend-data/api-database-auth.md` (현재 주장 확인됨, 제품별 잔여는 비출판): 모임 참가 장의 열 가지 공개 주장과 W-02·W-03·W-04 계약은 위 장별 적용 기록의 OpenAPI·NIST·IETF·OWASP·PostgreSQL·MDN 직접 출처에 연결했습니다. 특정 동시성 기법·제품 동작은 현재 원고의 보편 주장으로 발행하지 않으며 실제 제품 세부를 캡스톤에 채택할 때 PBSG-020 또는 새 gap으로 등록합니다. 과거 조사·검토 지문은 역사 증거이고 새 독립 검토 전에는 `review`로 재승격하지 않습니다.\n- `03-full-stack/frontend-backend-boundary.md`, `04-backend-data/data-model-schema-migration.md`, `04-backend-data/state-cache-queue.md` (`PBSG-002`, 2026-08-13 확인): RFC 9110·9111, OWASP AJAX·Authorization, Chrome Sources, PostgreSQL 18의 테이블·제약·DDL 변경·트랜잭션·격리, RabbitMQ reliability·queue, Parallel Change와 Continuous Integration·Evolutionary Database Design의 1차 패턴 자료를 위 장별 적용 기록에 연결했습니다. PostgreSQL은 관계형 구조·제약·ALTER·트랜잭션·격리의 제품 동작만, Parallel Change는 expand·migrate·contract와 구·신 계약 공존·점진 전환만, Continuous Integration의 데이터베이스 필드 예시는 새 필드·이중 쓰기·기존 데이터 복사·새 읽기·옛 필드 제거만, Evolutionary Database Design은 스키마·데이터·접근 코드 변경·마이그레이션 테스트·복수 애플리케이션 버전의 하위 호환 스키마만 직접 뒷받침합니다. 이 묶음을 다른 데이터베이스·큐의 동작, 모든 변환의 정확성, 무중단·무손실 복구, 외부 부작용의 정확히 한 번 완료로 일반화하거나 cache·queue·outbox를 첫 모임 캡스톤의 필수 구조로 만들지 않으며, 실제 서비스·데이터베이스·메시지 처리 성공을 주장하지 않습니다.\n- `05-frontend/browser-dom-rendering.md` (`PBSG-024`, 2026-08-13 확인): WHATWG HTML·DOM, CSSWG CSSOM Editor's Draft, Chrome DevTools Network·DOM·CSS·Rendering과 W3C WCAG 2.2를 위 장별 적용 기록에 연결했습니다. URL·네트워크·HTML 파싱·DOM·스타일·렌더링 기회·이벤트와 상태의 개념 흐름, View Source·응답 원문·live DOM·Computed 값·픽셀의 증거 차이, `img`·`iframe` 지연 로딩과 접근성 경계를 직접 뒷받침합니다. 이를 모든 엔진의 내부 직렬 파이프라인·스레드·최적화, 모든 라이브러리의 lazy loading, 임시 DOM 편집의 소스 변경, 한 Chrome·기기 확인의 호환성·WCAG 완료로 일반화하지 않습니다."
        },
        {
          "start_line": 445,
          "end_line": 449,
          "text": "- `08-quality/testing-strategy.md` (`PBSG-015`, `PBSG-016`, 2026-08-13 확인): ISO/IEC/IEEE 29119-1:2022와 공식 시리즈 안내, IEEE Computer Society SWEBOK V4.0a, Fowler 사이트의 Practical Test Pyramid, Google Testing Blog의 flaky test·coverage 조직 사례를 위 장별 적용 기록에 연결했습니다. 이 자료는 static·dynamic, manual·automated, 테스트 수준·목적·초점의 서로 다른 축, 오라클·자동화·coverage criteria, 빠르고 격리된 작은 테스트와 느리고 넓은 테스트의 피드백 방향, flaky 신호와 coverage의 탐색 용도를 직접 뒷받침합니다. 유료 ISO 표준 본문 전체를 열람했다고 주장하지 않고 한 분류·피라미드 비율·회사 수치·재실행 정책·coverage·도구 성공 표시를 모든 팀의 프로세스나 사용자 성공 증거로 확대하지 않습니다. 특정 테스트 러너의 예상 실패·건너뜀·필터 0건·종료 코드는 실제 도구·버전을 선택할 때 공식 문서와 출력으로 재확인하며, 2026-08-05~06 검토 파일은 의미 변경 전 역사 증거로 보존하고 현재 `draft`의 `reviewEvidence`로 재사용하지 않습니다.\n- `10-deployment-operations/logs-monitoring-backup.md` (`PBSG-011`, `PBSG-012`, 2026-08-13 확인): Google SRE Book, NIST SP 800-61 Rev. 3, NIST SP 800-34 Rev. 1과 CISA StopRansomware Guide를 위 장별 적용 기록에 연결했습니다. 이 자료는 SLI·SLO·SLA·오류 예산·행동 가능한 알림의 조직 실무, 인시던트 탐지·대응·복구·학습, RPO·RTO와 분리 백업·복원 시험의 일반 교육 범위를 직접 뒷받침합니다. Google 사례를 업계 표준·법적 SLA로, 미국 연방·랜섬웨어 지침을 모든 조직의 의무 절차로, 일반 복구 지침을 특정 공급자·캡스톤·실제 데이터의 복원 성공으로 확대하지 않으며 실제 제품 선택 때 현재 공식 문서와 승인된 격리 복원 증거를 다시 확인합니다.\n- `12-case-studies/first-full-stack-project.md` (`PBSG-020`): 기존에 확인한 SWEBOK·OpenAPI·OWASP·PostgreSQL·MDN·Git·Astro 출처를 모임 웹앱의 교육용 책임·판단 질문에 연결했습니다. 2026-08-13 Task 8의 Supabase·Vercel·Codex Sites 자료는 선택 질문의 선택적·날짜 고정 예시일 뿐 제품 조합·계정·데이터베이스·런타임·배포 환경을 채택하지 않았습니다. 따라서 마지막 한 자리의 구체적인 잠금·격리 구현, 부분 고유성 표현, 배포 환경별 마이그레이션, 로그, 백업 보존·격리 복원 시험과 운영 보장의 PBSG-020은 현재 제품 중립 교육 범위 밖인 `not-confirmed`로 유지하며, 실제 승인된 구현·배포 증거가 생기기 전에는 닫지 않습니다. 이 장과 Task 18의 문서·로컬 브라우저 증거는 실제 서비스 구현·배포·복구 완료를 주장하지 않습니다.\n- `12-case-studies/analytics-dashboard-case-study.md` 2026-08-05 역사적 적용 기록 (역사 전용·비출판): 당시 반도체 비교 원고의 미확인 목록은 과거 적용 범위 재현용이며 현재 주가 원고의 직접 근거나 `reviewEvidence`로 재사용하지 않습니다. 현행 원고에서 채택한 공백만 아래 현재 적용 기록과 PBSG-003·PBSG-012·PBSG-019·PBSG-026으로 추적합니다.\n- `12-case-studies/analytics-dashboard-case-study.md` 2026-08-10 현재 적용 기록 (`PBSG-026`, 실제 시장·권리 `PBSG-019`, 접근성 세부 `PBSG-003`, 복구 세부 `PBSG-012`): 현재 값은 저장소 내부 `EDU-FIXTURE`뿐입니다. Data contract·canonical schema·lineage·freshness·checksum·상태·검토 전환·빌드 manifest의 교육용 의미는 PBSG-026, 실제 시장·이용 조건·재배포 권리는 PBSG-019로 분리했습니다. Task 14에서 접근성, Task 16에서 제품 중립 복구 원칙을 확인했지만 실제 데이터·권리·배포·복구 완료는 주장하지 않습니다. Task 18·25에서 제품을 선택하면 해당 저장소·데이터베이스·산출물의 현재 공식 문서와 승인된 격리 복원 증거를 다시 확인합니다."
        }
      ]
    },
    {
      "path": "research/public-beta-source-gap-register.md",
      "sha256": "dac010a69ea463fb8dd3d835780367ec164b887417c441f46f7f3887c05929e7",
      "segments": [
        {
          "start_line": 51,
          "end_line": 53,
          "text": "| PBSG-019 | PB-053 `analytics-dashboard-case-study.md` | 실제 시장 데이터를 후속 채택할 때 상품·시세·조정 방식·거래일·시간대·원천 버전·이용 조건·재배포 권리를 함께 검증하는 계약 | critical | 2026-08-13 KRX 공식 거래 가이드·호가 공개 페이지에서 특정 거래 시간·단위·호가 공개 항목은 확인했으나 실제 제공자·데이터를 채택하지 않았고 전체 필드 정의·corporate action 조정·시간대·원천 버전·이용 약관·라이선스·수집/가공/재배포 허용 묶음은 직접 확인하지 못함 | 실제 원천 채택이 별도 승인될 때 해당 제공자·거래소의 현재 공식 계약 전체를 확인하고 Task 25 권리 감사·공개 직전에 재확인 | not-confirmed | Task 25; 실제 원천 채택 별도 승인 범위 | `EDU-FIXTURE`를 실제 시장 사실·투자 판단 근거로 쓰거나 KRX의 특정 공개 항목·조회 가능성을 수집·가공·재배포 허용으로 해석하지 않습니다. |\n| PBSG-020 | PB-054 `first-full-stack-project.md` | 선택한 데이터베이스·런타임·배포 환경에서 정원 동시성, 고유성, 마이그레이션, 로그, 백업·복원의 구체 구현과 운영 보장 | important | source-map의 확인된 OpenAPI·OWASP·PostgreSQL 범위와 2026-08-13 Task 8의 선택적 제품 예시가 있으나, Task 18은 제품 조합·계정·데이터베이스·런타임·배포 환경을 채택하거나 구현·시험하지 않음 | 실제 제품 조합과 구현 범위가 별도 승인되고 대상 제품·버전의 공식 문서와 동시성·마이그레이션·로그·격리 복원 실행 증거가 생길 때 재확인 | not-confirmed | Task 18 이후 별도 승인 범위 | 현재 제품 중립 교육 범위 밖입니다. PostgreSQL 또는 Supabase·Vercel·Codex Sites 예시를 채택·계정·실제 구현·운영 보장으로 확대하지 않으며 Task 18의 문서·로컬 브라우저 검증으로 닫지 않습니다. |\n| PBSG-021 | PB-021 `software-is-a-system.md` | component·responsibility·boundary의 세부 의미, 캐시 사본의 최신성, 정적 전달이 충분한 조건과 브라우저 개발자 도구의 현재 명칭 | important | 소프트웨어 아키텍처 표준·SWEBOK 세부 자료, HTTP 캐시 표준, 웹 플랫폼·브라우저의 공식 정적 전달 및 개발자 도구 문서 | 2026-08-13 확인; 브라우저·웹 플랫폼 문서 상태 또는 예시 도구 변경 시 재확인 | confirmed | Task 12 | 여섯 렌즈를 업계 표준 분류로 만들거나 한 브라우저의 도구 이름·캐시 표시·정적 전달 조건을 모든 브라우저와 시스템에 일반화하지 않습니다. |"
        },
        {
          "start_line": 70,
          "end_line": 72,
          "text": "| PBSG-018 | 직접 해소 claim 없음 | Task 7 fact pack의 제품·환경별 상태 분리 원칙만 재사용 가능 | Codex·Claude Code의 `plan mode`·`workspace-write`·`read-only` 권한 보장은 Supabase·Vercel·Sites 기능 문서로 확인할 수 없으므로 `not-confirmed` 유지 | Task 8이 자동 해소하지 않으며 Task 19에서 OpenAI·Anthropic 공식 제품 자료를 별도 확인 |\n| PBSG-020 | SUPA-DB-01, SUPA-AUTH-01, SUPA-AUTHZ-01, SUPA-API-01, SUPA-SERVER-01, SUPA-MIG-01, SUPA-OPS-01, SUPA-LOG-01, SUPA-KEY-01, VERCEL-RUNTIME-01, VERCEL-DEPLOY-01, VERCEL-DATA-01, SITES-ARTIFACT-01, SITES-VERSION-01, SITES-HOST-01, SITES-RUNTIME-01 | 후보 제품의 저장·Auth·RLS·API·함수·마이그레이션·백업·로그·키·runtime·hosting·version 책임과 Sites 입력 archive의 미게시 경계 | Task 18에서도 실제 모임 앱의 제품 조합·계정·배포 환경을 선택하지 않았고 정원 동시성·고유성·인가 부정 테스트·마이그레이션·로그·백업·복원을 구현하거나 시험하지 않았으므로 현재 제품 중립 교육 범위 밖의 `not-confirmed` 유지 | 실제 구현 선택과 별도 승인이 생길 때 제품 공식 자료와 동시성·복원 실행 증거를 새 범위에서 고정 |\n"
        },
        {
          "start_line": 80,
          "end_line": 85,
          "text": "|---|---|---|---|---|\n| Supabase | SUPA-DB-01, SUPA-AUTH-01, SUPA-AUTHZ-01, SUPA-API-01, SUPA-SERVER-01, SUPA-MIG-01, SUPA-OPS-01, SUPA-LOG-01, SUPA-KEY-01 | 9개 행이며 `limited`인 서버 함수와 데이터베이스 백업은 조건부 기능으로 표시 | PBSG-005, PBSG-012, PBSG-020 | 실제 비밀 운영·전체 데이터 복구·모임 앱 제품 선택·인가·동시성·복원 성공은 미검증 |\n| Vercel | VERCEL-BUILD-01, VERCEL-RUNTIME-01, VERCEL-ENV-01, VERCEL-DEPLOY-01, VERCEL-DOMAIN-01, VERCEL-LOG-01, VERCEL-ROLLBACK-01, VERCEL-DATA-01 | 8개 행이며 `limited`인 Functions와 외부 storage 연결은 조건부 기능으로 표시 | PBSG-004, PBSG-005, PBSG-012, PBSG-020 | CI·배포 승인·외부 데이터·실제 URL·데이터 복구는 미검증 |\n| Codex Sites | SITES-VERSION-01, SITES-HOST-01, SITES-RUNTIME-01, SITES-DOMAIN-01 | 공개 공식 URL이 직접 뒷받침하는 4개 행만 게시 | PBSG-005, PBSG-020 | beta·계정·workspace·지원 패턴 차이와 실제 배포는 미검증 |\n| Codex Sites 미게시 | SITES-ARTIFACT-01, SITES-ROLLBACK-01 | 정확한 입력 아티팩트 구성·운영 롤백 범위는 공개 공식 근거 부족으로 기능 표에서 제외하고 미게시 경계만 설명 | PBSG-012, PBSG-020 | Sites 기능은 미확인이고 기능 부재 판정도 아닙니다. Task 16의 PBSG-012 `confirmed`는 제품 중립 복구 원칙 판정이며 이 미게시 기능이나 실제 복원 성공을 확인하지 않습니다. |\n"
        },
        {
          "start_line": 127,
          "end_line": 129,
          "text": "- PBSG-026은 W3C PROV-O·DCAT 3, SLSA v1.2와 Reproducible Builds 정의가 provenance·version·checksum·output digest·build provenance·bit-for-bit 재현의 일부를 직접 지원합니다. 교육용 data contract·canonical schema·freshness·관측값 상태·검토 전환·manifest 전체는 이 핸드북의 운영 규칙을 포함하고 선택 도구·실행 증거가 없으므로 `not-confirmed`를 유지합니다.\n- PBSG-020은 PB-054가 제품 조합·계정·구현·배포를 채택하지 않은 제품 중립 교육 범위라서 `not-confirmed`를 유지합니다. 세 행의 미확인 상태를 문서·로컬 브라우저 검사로 닫지 않았고, PBCA-011도 PBSG-019·026이 남아 있어 유지합니다.\n- 현재 집계는 `confirmed` 20개, `not-confirmed` 6개로 변하지 않습니다. 미확인 위험 집계도 critical 1개·important 5개·normal 0개이며 PBSG-013·014·018·019·020·026만 `not-confirmed`입니다."
        },
        {
          "start_line": 166,
          "end_line": 168,
          "text": "\nPBCA-001은 출처 공백이 아니라 폐기 사례 잔존 finding이므로 위 의미 감사와 Task 9에 연결합니다. PBSG-019는 실제 시장 데이터·권리, PBSG-026은 현재 교육용 데이터 개념의 출처 공백으로 서로 분리합니다. PBSG-020은 모임 캡스톤에서 실제 제품 세부를 채택할 경우 닫아야 하는 선제 공백입니다. Task 11은 탐색·내비게이션 정렬 작업이라 이번 SOURCE 주장 묶음의 목표 작업으로 배정하지 않습니다.\n"
        }
      ]
    },
    {
      "path": "docs/project/public-beta-content-audit.md",
      "sha256": "d8a058833542cfc69ba6f079f5624edb6bebf83e4e5d9dfe926251228dc79d68",
      "segments": [
        {
          "start_line": 52,
          "end_line": 54,
          "text": "| PB-027 | `src/content/docs/03-full-stack/http-request-response.md` | core | HTTP 요청과 응답의 성공·실패를 어떻게 읽는가? | 메서드·상태 코드·본문·브라우저 정책을 함께 진단한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 13; Task 20 resolved | Task 13에서 RFC·WHATWG Fetch·W3C Mixed Content·Chrome으로 PBSG-023을 닫고 preflight·response sharing·자동 업그레이드·차단과 서버 처리 증거를 구분했습니다. full-stack 그림의 외부 서비스 topology·marker·390px 판독성은 Task 20 `6b4ac94`와 실제 Chrome 18상태·Codex `PASS`로 교정됐습니다. |\n| PB-028 | `src/content/docs/04-backend-data/api-database-auth.md` | core | API·데이터베이스·인증·인가는 어떤 책임을 맡는가? | 요청 처리·영속 상태·신원·권한을 분리해 검증한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 13; Task 20 resolved | Task 13에서 commit 뒤 응답 유실의 복구 오라클·데이터 불변식과 날짜 있는 현재 도구 참고편의 분리를 명시했습니다. 관계·트랜잭션·권한 실패·공식 출처 범위는 유지하며 API 그림 분할·동시 요청·390px 판독성은 Task 20 Fix Round 1 `1d19c15`과 실제 Chrome 6상태·same-reviewer `PASS`로 교정됐습니다. |\n| PB-029 | `src/content/docs/04-backend-data/data-model-schema-migration.md` | core | 데이터 모델·스키마·마이그레이션은 어떻게 연결되는가? | 구조 변경과 기존 데이터 보존을 판단한다. | draft | conform | conform | conform | conform | conform | conform | conform | conform | conform | Task 13 | 개체·속성·관계·키·제약에서 단계적 확장·백필·검증·전환·정리, 호환성 조합, 롤백·롤포워드, 데이터 검증 증거까지 모임 참가 관계로 확장했습니다. PostgreSQL 제품 동작과 Parallel Change·Continuous Integration·Evolutionary Database Design의 단계별 직접 지원 범위를 분리해 PB-026·PB-030과 함께 PBSG-002를 닫았습니다. |"
        },
        {
          "start_line": 99,
          "end_line": 101,
          "text": "- 양방향 추적: 시각 finding이 있는 영향 문서 15개의 `VISUAL` 셀은 PBVA ID를 역참조합니다. 공유 자산의 각 소비 문맥을 별도로 대조했으며 15개 occurrence의 감사 대응이 모두 추적되고 미배정 occurrence는 0개입니다.\n- 당시 파생 수치: Task 6은 기존 conform 문서 PB-028·PB-044·PB-046·PB-052·PB-054를 `needs_edit`로 바꿨습니다. Task 8의 새 current-tool 문서를 더하기 전 판정은 conform 17개·needs_edit 27개·needs_rewrite 14개이고, 전체 stable finding은 Critical 0개·Important 15개·Minor 1개였습니다. Task 5 Fix Round 1의 22·22·14와 0·10·1은 시각 픽셀 감사 전 역사적 기준선으로 보존합니다.\n- 수정 경계: Task 6은 공개 원고·SVG·Mermaid를 수정하지 않았습니다. PBVA-001~PBVA-005는 모두 Task 20의 변경·검증 기준에 배정됐고, M1-03 감사 완료는 실제 시각 결함 교정이나 M4 완료를 뜻하지 않습니다."
        }
      ]
    },
    {
      "path": "docs/project/public-beta-visual-audit.md",
      "sha256": "4dc0b46dbef32d69fc9b4b6442622cf762a65c165213e155f8fc9fd6cfa15f77",
      "segments": [
        {
          "start_line": 6,
          "end_line": 12,
          "text": "- 기준 커밋: `750a8e3bbe77a67cf2480d8608aa891aa00c5de5`\n- 범위: 게시 SVG 14개, 대응 Mermaid 원본 14개, 공개 원고의 소비 occurrence 17개, Task 6의 서로 다른 시각 캡처 60개, Task 10 PBV-13 상태 4개, Task 20 PBV-03 Fix Round 1 상태 6개와 후속 11개 자산 단위 상태 84개, Task 21의 현재 입력 전체 시각 occurrence 68개\n- 정본: 공개 페이지가 소비하는 정적 SVG가 현재 게시 정본입니다. Mermaid는 편집 가능한 source일 뿐이며 의미가 어긋난 행은 두 표현을 그대로 병존시키지 않고 Task 20에서 원고의 학습 질문을 기준으로 정적 SVG 하나를 다시 정본화합니다.\n- 판정 기준: `diagram-design`의 최대 9노드·12화살표 복잡도 예산, 한 그림 한 질문, 최대 두 초점, 색 외의 레이블·선 의미, 기본 확대에서의 핵심 레이블, 고유 `title`·`desc`·본문 `alt`, light/dark marker 대비를 적용했습니다.\n- Archify 경계: Task 6 당시에는 Node.js 22.16.0 호환성을 확인하지 못해 Archify를 실행하지 않았습니다. 이후 Task 20 전체 검증은 저장소 권장 Node.js 22.16.0·npm 10.9.2에서 통과했지만, PBV-03은 4-lifeline sequence이고 나머지 자산도 8~12노드 자동 라우팅이 필요한 복잡 구조가 아니어서 Archify를 설치·업그레이드·실행하지 않았습니다. PBV-13과 Task 20 자산은 계획대로 `diagram-design`으로 교정했으며 현재 Archify 조건에 맞는 후보는 0개입니다.\n- 변경 경계: Task 6은 자산을 수정하지 않고 감사 기준선과 캡처만 남겼습니다. Task 10은 PBV-13 한 쌍과 소비 원고를 추가했고, Task 20은 PBV-03 분할·Fix Round 1과 후속 11개 자산을 각각 독립 단위로 구현·검증·별도 Codex 검토·로컬 커밋했습니다. 후속 11개 단위는 개별 검토 당시 고정한 감사 문서 해시 `12d1a0c6…fbde`를 포함해 515개 입력이 모두 일치했습니다. 이 closeout 후보가 공유 감사 문서를 갱신한 뒤 현재 재해시는 누락 0개·불일치 11개이며, 11개 모두 이 감사 문서 한 경로의 예상된 계보 변경이고 나머지 자산·원고·증거 504개는 일치합니다. 각 `output/playwright/task20-*-evidence/` manifest는 실패 시도·최종 상태·원본 화면·cleanup을 보존합니다. Claude 검토는 `blocked/subscription_unverified`이며 호출 0·PASS 없음이고 M5·`ready`·소유자 승인·release·push·deploy·공개와 분리합니다.\n"
        },
        {
          "start_line": 19,
          "end_line": 21,
          "text": "| PBV-02 `analytics-dashboard-architecture` | `src/assets/diagrams/analytics-dashboard-architecture.svg` | `src/assets/diagrams/source/analytics-dashboard-architecture.mmd` | PB-021 `software-is-a-system.md`; PB-053 `analytics-dashboard-case-study.md` | fixture/승인 원천이 품질·저장·전달·UI·운영 증거로 어떻게 이어지는가? | 세로 단계+피드백 | 7 | 7 | 품질·UI 2그룹 | 고유 title·desc·role·aria, 기존 두 alt와 앞뒤 원고의 책임·한계는 불변입니다. | `560×1108`, viewBox·width·height 일치 | 2026-08-28 실제 Chrome12상태: 모바일358×708px, 핵심 약14.7px·보조 약11.5px를 원본 크기로 판독했습니다. | explicit light/dark marker4와 주 흐름·점선 피드백·박스·글자가 전환됩니다. | reflow | diagram-design | `aa13701`; Codex `PASS` C0/I0/M0; PBVA-004 자산 조건 충족; Claude pending |\n| PBV-03 `api-database-auth-flow`; `api-database-auth-sequence` | `src/assets/diagrams/api-database-auth-flow.svg`; `src/assets/diagrams/api-database-auth-sequence.svg` | `src/assets/diagrams/source/api-database-auth-flow.mmd`; `src/assets/diagrams/source/api-database-auth-sequence.mmd` | PB-028 `api-database-auth.md` | 개요: 정상 참가 요청의 책임은 어떤 순서인가? 상세: 마지막 한 자리 동시 요청과 commit 뒤 응답 유실을 어떻게 안전하게 재확인하는가? | 세로 단계 흐름; 4-lifeline sequence+parallel frame | 개요 7; 상세 4 lifeline·12정보 단위(11 message+병렬 frame) | 개요 6; 상세 11 message | 개요 정상 책임 1그룹; 상세 동시성·복구 2그룹 | 두 SVG에 고유 title·desc가 있고 두 alt와 앞뒤 설명은 서로 다른 질문·비증명 범위를 설명합니다. | 개요 `560×772`; 상세 `688×960`, viewBox·width·height 일치 | 358×494px 개요 핵심 글자 약 14px, 358×500px 상세 핵심 약 12px·보조 약 10px로 확대 없이 읽을 수 있습니다. | 두 SVG의 선·글자와 explicit light/dark marker fill이 테마에 맞게 전환되며 병렬 시작은 frame·레이블, 유실은 점선·`×`로도 구분됩니다. | keep | diagram-design; Archify 미사용(상세는 4 lifeline sequence, Node.js v26) | Task 20 PBVA-001 resolved; Fix1 `1d19c15`; same-reviewer PASS C0/I0/M0 |\n| PBV-04 `context-harness-loop` | `src/assets/diagrams/context-harness-loop.svg` | `src/assets/diagrams/source/context-harness-loop.mmd` | PB-050 `context-spec-harness-loop.md` | 의도·스펙·컨텍스트·하네스·루프·증거·문맥 갱신은 어떤 책임 관계인가? | 혼합 관계 흐름 | 7 | 6 | 컨텍스트/하네스 수렴 | 고유title/desc·원고 질문/alt/뒤 책임과 한계 설명 일치·원고 불변. | `480×1160`, viewBox·width·height 일치 | Chrome6/6·358×865.2px·core20.88/detail17.9/note14.92·그림/상단/문맥/full배치 확인. | 명시marker2·실제양테마6연결·focused178/XML/full/Chrome 통과. | replace | diagram-design | `750a8e3`; Codex `PASS` C0/I0/M0; PBVA-002·003·004 자산 조건 충족; Claude pending |"
        },
        {
          "start_line": 32,
          "end_line": 34,
          "text": "\n최종 처분은 `keep` 2개·`reflow` 8개·`replace` 3개입니다. PBV-03의 분할·Fix Round 1과 후속 11개 자산 단위는 각각 별도 Codex 검토에서 최종 `PASS` C0/I0/M0였고, PBV-13은 근거 있는 keep입니다. Task 20 합동 closeout은 최초 `NEEDS CHANGES` C0/I1/M0의 입력 계보 문구를 Fix Round 1으로 교정한 뒤 같은 리뷰어가 `PASS` C0/I0/M0·I01 `RESOLVED`로 재검토했습니다. PBVA-001~005의 자산별·패키지 수용 기준을 모두 충족해 현재 미해결 시각 finding은 Critical 0개·Important 0개입니다. 이 판정은 Task 20의 구현 체크포인트에만 적용되며 Claude 검토·M5·`ready`·소유자 승인·release·push·deploy·공개를 뜻하지 않습니다.\n"
        },
        {
          "start_line": 50,
          "end_line": 53,
          "text": "- Task 10 추가 증거: fresh build는 HTML 60개·학습 SVG 13개를 생성했고, `output/playwright/task10-architecture-evidence/manifest.jsonl`은 20 records에 첫 정적 링크 실패·preview EPERM·브라우저 스크립트와 backlink locator 실패를 숨기지 않고 보존했습니다. 최종 소비 상태는 1440×1000·390×844 light/dark 4개로, 요청 테마·`prefers-color-scheme`·HTML `data-theme`·effective color scheme이 모두 일치했습니다. 네 상태 모두 H1·draft 배지·alt·7노드·6화살표·7라벨·명시적 두 marker fill·전역 overflow 0·console warning/error 0·page error 0이었고 PNG 4개를 원본 크기로 열어 자산 내부 잘림·겹침·화살촉 소실 0과 모바일 판독성을 확인했습니다. 새 역링크 네 곳은 실제 click 뒤 목표 H1을 확인했으며 Chrome·preview·4330 listener를 모두 정리했습니다. 이 증거는 PBV-13과 인접 본문만 다루며 Task 21의 전체 사이트 회귀를 대신하지 않습니다.\n- Task 20 PBV-03 초기 구현 증거: fresh build는 HTML 60개·학습 SVG 14개를 생성했습니다. actual headed Google Chrome 151에서 PB-028의 1440×1000·1024×768·390×844 light/dark 6개 상태가 HTTP 200·H1·draft 배지·정확한 theme·두 SVG load·서로 다른 alt·고유 title/desc·explicit marker·전역 overflow 0·내부 scroll 실패 0·console warning/error 0·page error 0·외부 요청 0을 통과했습니다. PNG 6개와 같은 레코드의 overview/detail crop 12개는 SHA-256·크기·바이트를 가지며 원본 18개에서 잘림·겹침·대비 결함 0을 확인했습니다. 그러나 독립 리뷰는 결합된 A·B lifeline과 순차 배치가 동시 요청 문법을 가르치지 못하고 트랜잭션 확정 경계도 명시하지 않았다는 I1을 열어 `NEEDS CHANGES C0/I1/M0`로 판정했습니다. 초기 픽셀 증거는 보존하지만 PBVA-001 해결 근거로 사용하지 않았습니다.\n- Task 20 PBV-03 Fix Round 1 추가 증거: fresh build는 HTML 60개·학습 SVG 14개를 다시 생성했고, actual headed Google Chrome 151의 같은 6상태에서 HTTP 200·H1·draft 배지·정확한 theme·두 SVG load·alt·고유 title/desc·explicit marker·전역 overflow 0·내부 scroll 실패 0·console warning/error 0·page error 0·외부 요청 0을 재확인했습니다. 상세 SVG는 상태마다 분리된 lifeline 4개·병렬 frame 1개·메시지 11개를 포함한 정보 단위 12개·`트랜잭션 확정 경계` 1개로 MMD의 `par/and/end`와 의미가 일치했습니다. 새 PNG 6개와 같은 레코드의 overview/detail crop 12개는 각각 SHA-256·크기·바이트를 가지며 원본 18개를 열어 동시 시작 경계·레이블·화살촉·잘림·겹침·대비 결함 0을 확인했습니다. OCR 보조 검사는 6상태 모두 배지 문구와 상세 `capacity` 토큰을 읽었고, append-only manifest는 기존 실패와 초기 증거를 덮지 않은 123 records입니다. Chrome·preview PID와 4340 listener를 정리했습니다. Fix Round 1 `1d19c15`는 같은 독립 리뷰어가 이전 I1을 `RESOLVED`로 확인하고 `PASS C0/I0/M0`로 판정해 PBVA-001 해결 근거가 됐습니다.\n- Task 20 후속 11개 자산 증거: 실제 headed Google Chrome 152에서 1440×1000·1024×768·390×844와 light/dark를 조합해 PBV-02 12상태, PBV-06 18상태, 나머지 9개 자산 각 6상태, 합계 84개 최종 상태를 검증했습니다. 상태별 HTTP·H1·draft 배지·요청/실효 테마·대상 SVG·alt·고유 title/desc·marker·전역 overflow·제한된 내부 scroll·console warning/error·page error·외부 요청과 전체 화면·원본 다이어그램·상단·인접 문맥 이미지를 보존했습니다. 개별 검토 시점에는 515개 고정 입력이 모두 일치했습니다. closeout 후보 감사 문서 갱신 뒤에는 이 공유 경로의 기대 해시 차이만 11개이고 나머지 504개 입력은 일치하며, 과거 입력을 소급 재기준화하지 않습니다. 각 자산은 별도 Codex 검토에서 최종 `PASS` C0/I0/M0였습니다."
        },
        {
          "start_line": 61,
          "end_line": 63,
          "text": "| PBV-02B | `/12-case-studies/analytics-dashboard-case-study/` | analytics-dashboard-architecture | 3 viewport×2 theme 6상태·원본 화면 확인; 모바일 판독·overflow 결함 0; Codex PASS |\n| PBV-03 | `/04-backend-data/api-database-auth/` | api-database-auth-flow; api-database-auth-sequence | 초기 `NEEDS CHANGES C0/I1/M0`; Fix Round 1 `1d19c15`은 개요 7노드·6화살표, 상세 4 lifeline·12정보 단위와 명시적 병렬 frame·트랜잭션 확정 경계를 fresh 6상태·원본 18개·cleanup으로 재검증했고 같은 리뷰어가 `RESOLVED — PASS C0/I0/M0` 판정 |\n| PBV-04 | `/11-ai-native/context-spec-harness-loop/` | context-harness-loop | 6상태·원본 화면 확인; topology·marker·모바일 판독 결함 0; Codex PASS |"
        },
        {
          "start_line": 79,
          "end_line": 81,
          "text": "|---|---|---|---|---|---|---|\n| PBVA-001 | Important (resolved) | PBV-03 | 첫 분할은 정상 책임과 상세 질문을 나눴지만 참가자 A·B를 한 lifeline에 두고 두 요청을 위아래로 배치해 순차 실행처럼 가르쳤으며 트랜잭션 확정 경계도 명시하지 않아 `NEEDS CHANGES C0/I1/M0`였습니다. Fix Round 1 `1d19c15`은 A·B를 분리하고 Mermaid `par/and/end`와 SVG 병렬 frame을 맞추며 기존 4번 단위를 `트랜잭션 확정 경계`로 바꿨고, 같은 리뷰어가 이전 I1 `RESOLVED`와 `PASS C0/I0/M0`를 확인했습니다. | 두 질문 비중복, 개요 7노드·12화살표 이하, 상세 12정보 단위 이하, A·B 분리·명시적 병렬 문법·트랜잭션 확정 경계와 제품 중립 복구 경계를 유지합니다. | Task 20 resolved | SVG·Mermaid·alt·앞뒤 설명의 의미, 1440×1000·1024×768·390×844 light/dark 6상태의 lifeline 4개·병렬 frame·확정 경계·핵심 레이블·title·desc·marker·overflow·console·원본 crop을 확인했고 동일 리뷰어가 Fix Round 1을 `RESOLVED — PASS C0/I0/M0`로 판정했습니다. |\n| PBVA-002 | Important (resolved) | PBV-04, PBV-05, PBV-06, PBV-10 | Task 6에서 관찰한 SVG·source·원고 topology 차이를 네 자산의 학습 질문에 맞춰 함께 교정했습니다. context의 책임 연결, deploy의 콘텐츠/이름 조회 분리, full-stack의 저장소/외부 서비스 독립 분기, PRD의 분기·수렴·대표 피드백이 현재 SVG·Mermaid·alt·앞뒤 설명에서 일치합니다. | 현재 의미 동기화를 유지하고 후속 변경 시 SVG·Mermaid·원고를 같은 단위에서 검증합니다. | Task 20 resolved | 네 자산별 focused semantic 검사와 실제 Chrome 36상태, 각각의 별도 Codex `PASS` C0/I0/M0, 전체 참조·빌드 검사와 합동 closeout 재검토를 통과했습니다. |"
        },
        {
          "start_line": 85,
          "end_line": 87,
          "text": "\nFinding register에는 역사적으로 Critical 0개·Important 5개를 기록했습니다. PBVA-001은 PBV-03 Fix Round 1과 same-reviewer PASS로, PBVA-002~005는 후속 11개 자산 단위의 구현·실제 Chrome 84상태·개별 Codex 최종 PASS·현재 전체 자동 게이트·Task 20 합동 closeout Fix Round 1 재검토 `PASS` C0/I0/M0로 해결됐습니다. 현재 미해결 수는 Critical 0개·Important 0개입니다.\n"
        },
        {
          "start_line": 90,
          "end_line": 92,
          "text": "- M1-03은 역사적 자산 감사와 finding 배정을 완료한 상태를 유지합니다.\n- M4-01·M4-02는 14개 게시 SVG·14개 Mermaid, 17개 소비 occurrence, PBV-03 분할·Fix Round 1, PBV-13 keep, 후속 11개 자산별 구현·검증·Codex PASS와 PBVA-001~005 해소, Task 20 합동 closeout Fix Round 1 재검토 `PASS` C0/I0/M0를 근거로 `done`입니다.\n- Task 21의 검색·내비게이션·404·접근성·반응형·전체 사이트 회귀, 특히 키보드 테마 2상태 `not-confirmed`는 Task 20 closeout과 분리합니다. Task 20 PASS는 M4-03~05, M5, `ready`, owner, RC, release, push, deploy, publication, public URL을 완료하지 않습니다."
        }
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "sha256": "11b579926200b1dc587a71654260d6940ffba281aeaf9f9452931a389823b9b6",
      "segments": [
        {
          "start_line": 163,
          "end_line": 191,
          "text": "    },\n    {\n      \"id\": \"R03\",\n      \"slug\": \"http\",\n      \"method\": \"개별 심층\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/03-full-stack/http-request-response.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r03-http-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r03-http-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r03-http-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r03-http-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r03-http-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r03-http-input-manifest.json\",\"source_checked_at\":\"2026-10-25\",\"combined_sha256\":\"6865f321010966ae7fae4821f2d801616e696d0901d6edf4b1ea5566d3ddee2c\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important3-minor4-prep-minor1-resolved\",\"reviewed_target_sha256\":\"e4c13382187e9dffc19bf73486fd4d953f540e6a6b6f373dca9d6e5c7a7ea2a2\",\"current_target_sha256\":\"d90c0fe3dab7eba53c796c81491227edad717c8a1df890d9cd5c22d2c1e0b97c\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r03-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r03-http-codex-rereview.md\",\"next_scope\":\"R04 pending; no M5/ready/public approval\"}\n    },\n    {\n      \"id\": \"R04\",\n      \"slug\": \"api-data-auth\",\n      \"method\": \"개별 심층\",\n      \"implementation_state\": \"작성·구현 완료\",\n      \"inputs\": [\"src/content/docs/04-backend-data/api-database-auth.md\"],\n      \"request_path\": \"docs/project/reviews/public-beta-1/r04-api-data-auth-request.md\",\n      \"result_path\": \"docs/project/reviews/public-beta-1/r04-api-data-auth-codex-review.md\",\n      \"adjudication_path\": \"docs/project/reviews/public-beta-1/r04-api-data-auth-adjudication.md\",\n      \"rereview_path\": \"docs/project/reviews/public-beta-1/r04-api-data-auth-codex-rereview.md\"\n    },\n    {\n      \"id\": \"R05\",\n      \"slug\": \"browser-dom\",\n      \"method\": \"개별 심층\",\n      \"implementation_state\": \"작성·구현 완료\","
        }
      ]
    },
    {
      "path": "src/content/docs/12-case-studies/first-full-stack-project.md",
      "sha256": "3d68c94a5f452721f9172a9cf127b118246fd95cd248ced505e13f0c5e274791",
      "segments": [
        {
          "start_line": 60,
          "end_line": 64,
          "text": "| 비로그인 방문자 | 공개 모임 한 건 조회 | 공개 가능한 필드인지, 존재하지 않음·취소됨·전달 실패를 구분하는지 |\n| 참가자 | 자신의 참가 신청과 취소 | 인증된 주체가 요청 대상과 같은지, 활성 참가가 중복되지 않는지 |\n| 주최자 | 자신이 만든 모임 생성·수정·취소·마감, 참가 현황 조회 | 현재 주체가 해당 `event_id`의 `host_id`와 일치하는지 |\n\n**인증(authentication)**: “요청한 사람이 누구인가”를 확인하는 절차입니다. **인가(authorization)**: “확인된 이 사람이 이 대상에 이 행동을 해도 되는가”를 판단하는 절차입니다. 로그인 성공은 다른 사람의 모임을 수정하거나 다른 사람의 참가를 취소할 권한까지 주지 않습니다."
        },
        {
          "start_line": 87,
          "end_line": 98,
          "text": "|---|---|---|\n| `users` | `id` | 한 사용자는 여러 모임을 주최하고 여러 모임에 참가할 수 있음 |\n| `events` | `id`, `host_id`, `status`, `capacity`, `version` | `users`와 `1:N`, `status`는 `open`, `closed`, `cancelled`, `version`은 동시 수정 감지용 정수 |\n| `registrations` | `event_id`, `participant_id`, `status` | `users`와 `events`를 잇는 `N:M` 관계, `status`는 `confirmed`, `cancelled`, 동일 `(event_id, participant_id)`의 활성 참가는 중복 불가 |\n\n`open`은 참가를 받을 수 있는 모집 상태, `closed`는 주최자가 모집을 마쳤거나 정원 정책상 더 받지 않는 상태, `cancelled`는 모임 자체가 취소된 상태입니다. `confirmed` 참가만 현재 확정 인원으로 세고 `cancelled` 참가를 정원에 포함하지 않습니다.\n\n애플리케이션 검사는 이해하기 쉬운 오류를 빨리 돌려주는 데 유용하지만 동시 요청 사이에서 규칙을 보존하는 최종 장치가 아닙니다. 허용 상태·양수 정원·활성 참가 고유성처럼 데이터 자체가 항상 지켜야 할 규칙은 가능한 데이터베이스 제약으로 보호하고, 여러 읽기와 쓰기가 하나의 결정이어야 하는 정원 판정은 트랜잭션으로 묶습니다.\n\n이 사례에서 성공은 네 층으로 나눠 판정합니다. **화면 성공**은 사용자가 로딩·완료·거절·결과 불명을 구분하고 다음 행동을 찾는 상태, **업무 성공**은 방문자·참가자·주최자의 허용된 행동이 계약대로 끝난 상태, **데이터 불변식 성공**은 활성 중복 0건·`confirmed <= capacity`·소유권 밖 변경 0건이 권위 있는 데이터에서 유지된 상태, **운영 성공**은 배포 버전과 안전한 신호를 확인하고 백업에서 격리 복원한 뒤 핵심 흐름을 다시 검증한 상태입니다. 한 층의 증거를 다른 층의 성공으로 확대하지 않습니다.\n\n## W-01 공개 조회"
        },
        {
          "start_line": 121,
          "end_line": 131,
          "text": "## W-02 주최자 생성과 소유권\n\n두 번째 조각은 `POST /events`, `PATCH /events/:eventId`와 주최자 전용 `GET /events/:eventId/registrations`입니다. 생성 요청의 `host_id`는 사용자가 보낸 본문을 믿어 정하지 않고 서버가 현재 인증된 주체에서 결정합니다.\n\n### 수용 기준\n\n- 인증된 사용자만 모임을 생성하며 저장된 `host_id`는 현재 인증 주체와 같습니다.\n- 주최자는 자신이 만든 모임만 수정·취소·마감할 수 있고, 서버는 매 요청에서 현재 주체와 대상 모임의 `host_id`를 비교합니다.\n- 주최자 전용 `GET /events/:eventId/registrations`는 참가 데이터를 반환하기 전에 현재 주체와 대상 모임의 `host_id`를 비교하고, 소유 주최자에게만 해당 `event_id`의 `participant_id`와 `registration.status`를 반환합니다.\n- 수정 요청은 기대한 `event.version`을 보내고 현재 버전과 다르면 덮어쓰기 대신 안전한 충돌 응답을 받습니다.\n"
        },
        {
          "start_line": 133,
          "end_line": 137,
          "text": "\n- 미인증 요청이 모임을 생성하거나 수정합니다.\n- 클라이언트가 보낸 `host_id`를 그대로 저장해 다른 사용자를 주최자로 가장합니다.\n- 로그인했다는 사실만 확인하고 다른 사용자의 `event_id`를 수정·취소·마감합니다.\n- 다른 주최자나 일반 참가자의 참가 현황 조회를 거절하지 않고 참가 데이터를 반환합니다."
        },
        {
          "start_line": 140,
          "end_line": 161,
          "text": "### 직접 증거\n\n- 인증 통합 테스트는 미인증 생성이 거절되고 인증된 생성의 `host_id`가 서버의 현재 주체에서 결정되는지 확인합니다.\n- 인가 부정 테스트는 가상 사용자 `user-host-002`가 `user-host-001` 소유의 `event-example-001`을 `PATCH`할 때 거절되고 데이터가 바뀌지 않는지 확인합니다.\n- 참가 현황 인가 통합 테스트는 소유 주최자의 조회 성공, 비소유 주최자와 일반 참가자의 조회 거절, 거절 응답에 참가 식별자·상태 등 참가 데이터가 포함되지 않음을 확인합니다.\n- 데이터 조회는 저장된 `host_id`, `status`, `version`을 보여 주며, 감사 가능한 안전한 로그는 원문 토큰이나 개인정보 없이 요청 상관 식별자·행동·결과를 남깁니다.\n\n## W-03 참가와 취소\n\n세 번째 조각은 `POST /events/:eventId/registrations`와 `DELETE /events/:eventId/registrations/me`입니다. 참가와 취소의 `participant_id`도 요청 본문이 아니라 현재 인증된 주체에서 결정합니다.\n\n### 수용 기준\n\n- 인증된 참가자는 모집 중인 모임에 자신의 참가를 신청하고 자신의 활성 참가만 취소할 수 있습니다.\n- 동일 `(event_id, participant_id)`에는 `confirmed` 활성 신청이 하나만 존재하며 재시도나 빠른 두 번 누르기가 중복 행을 만들지 않습니다.\n- 취소 성공 뒤 해당 참가 상태는 `cancelled`이고 현재 확정 참가 수에서 제외됩니다.\n\n### 실패 상태\n\n- 미인증 사용자의 참가·취소를 받거나 본문에 넣은 다른 `participant_id`로 작업합니다.\n- 같은 사용자의 활성 참가를 두 건 이상 만들거나 이미 취소된 참가를 성공처럼 다시 취소합니다.\n- 다른 사용자의 참가를 URL이나 본문 식별자만 바꿔 취소합니다."
        },
        {
          "start_line": 165,
          "end_line": 189,
          "text": "\n- API 통합 테스트는 정상 참가·자기 취소, 미인증, 중복 신청과 타인 참가 취소의 거절을 분리해 확인합니다.\n- 데이터베이스 제약 테스트는 애플리케이션의 사전 중복 검사와 별개로 동일 활성 `(event_id, participant_id)` 중복 저장이 거절되는지 확인합니다.\n- `commit` 뒤 응답 실패 시험은 클라이언트가 오류를 받은 뒤 현재 참가 상태를 재조회했을 때 이미 `confirmed`인 결과를 복구하고, 재시도가 두 번째 활성 행을 만들지 않는지 확인합니다. 응답 실패는 곧 `rollback`이라는 뜻이 아니며 권위 있는 데이터 상태로 판단해야 합니다.\n\n## W-04 정원·마감과 동시성\n\n네 번째 조각은 참가 요청의 `event.status = open`, 현재 `confirmed` 참가 수, `capacity`, 동일 사용자의 활성 참가 여부와 정원 수정 요청의 새 `capacity`를 신뢰할 수 있는 애플리케이션·데이터 경계의 같은 트랜잭션에서 판정하는 규칙입니다. 주최자의 마감·취소·정원 수정과 참가 요청이 충돌할 수 있으므로 구현은 데이터베이스가 제공하는 잠금, 격리 또는 직렬화 재시도 같은 수단 중 선택한 전략과 실패 응답을 명시해야 합니다.\n\n### 수용 기준\n\n- `open`인 모임만 새 참가를 확정하고 `closed`나 `cancelled`이면 저장하지 않습니다.\n- `confirmed` 수가 `capacity`보다 작을 때만 참가를 확정하며 트랜잭션이 끝난 뒤 확정 수는 정원을 넘지 않습니다.\n- 주최자가 정원을 줄이는 `PATCH /events/:eventId`는 새 `capacity`가 같은 트랜잭션에서 확인한 현재 `confirmed` 수 이상일 때만 저장하고, 더 작으면 기존 정원을 바꾸지 않은 채 거절합니다.\n- 마지막 한 자리에 서로 다른 두 참가 요청이 동시에 도착하면 정확히 한 요청의 참가 행만 `commit`되어 확정되고, 다른 요청은 활성 참가 행을 만들지 않은 채 안전한 충돌·정원 마감 응답을 받습니다.\n- 정원 축소 `PATCH`와 참가 `POST`가 동시에 도착해 둘 다 성공할 수 없으면 최소 한 작업은 기존 정원이나 참가 상태를 부분 변경하지 않은 채 안전하게 거절되고, 모든 완료 순서에서 `confirmed <= capacity`를 유지합니다.\n- 중복 여부, 상태와 정원 판정부터 참가 저장까지 하나의 트랜잭션이며 중간 실패는 전체 `rollback`으로 끝납니다.\n\n### 실패 상태\n\n- 화면에 표시한 남은 자리나 트랜잭션 밖의 사전 조회만 믿고 두 요청을 모두 저장합니다.\n- 애플리케이션의 `현재 인원 < capacity` 검사만으로 충분하다고 보고 데이터베이스 제약·트랜잭션·동시성 전략을 생략합니다.\n- 정원 축소 전에 트랜잭션 밖에서 세어 둔 `confirmed`만 믿고 새 `capacity`를 저장해, 동시 참가 요청과 함께 완료된 뒤 `confirmed > capacity`가 됩니다.\n- 주최자가 모집을 마감한 직후 늦게 도착한 참가 요청을 이전 `open` 화면 때문에 승인합니다.\n- 직렬화 충돌이나 잠금 실패를 무한 재시도하거나 내부 오류 상세를 사용자에게 노출합니다."
        },
        {
          "start_line": 191,
          "end_line": 199,
          "text": "### 직접 증거\n\n- 마지막 한 자리 동시 요청 시험은 `capacity = 10`, 기존 `confirmed = 9`인 가상 모임에서 서로 다른 두 요청을 같은 시작 장벽에서 보내고 성공 1건·안전한 충돌 또는 마감 1건을 오라클로 삼습니다.\n- 시험 뒤 데이터 조회는 `confirmed = 10`, 활성 중복 0건, 부분 저장 0건을 보여야 하며 응답 도착 순서나 특정 참가자의 승리를 오라클로 삼지 않습니다.\n- 정원 축소·참가 동시 시험은 `capacity = 10`, 기존 `confirmed = 9`인 가상 모임에서 `capacity`를 9로 줄이는 `PATCH`와 새 참가 `POST`를 같은 시작 장벽에서 보냅니다. 둘 중 정확히 하나만 `commit`되고 다른 하나는 안전하게 거절되며, 최종 오라클은 `capacity = 9, confirmed = 9` 또는 `capacity = 10, confirmed = 10`과 부분 저장 0건입니다.\n- 이 동시 시험은 모든 반복에서 `confirmed <= capacity`를 확인하고, 응답 도착 순서·`PATCH`와 `POST` 중 특정 작업의 승리·구체적인 잠금 기법을 오라클로 삼지 않습니다.\n- 상태 전환 통합 테스트는 `closed`·`cancelled`와 `event.version` 충돌에서 참가나 수정이 저장되지 않는지 확인하고, 트랜잭션 로그와 오류 매핑은 재시도 가능 충돌과 최종 업무 거절을 구분합니다.\n\n## W-05 배포와 운영 인수"
        },
        {
          "start_line": 231,
          "end_line": 238,
          "text": "| 요구 | 사용자 행동 | 상태 전이·데이터 변환 | 인터페이스 | 인증·인가·권리 | 실패 위험 | 테스트 오라클 | Git 작업 단위 | 배포·운영 증거 | 복구 |\n|---|---|---|---|---|---|---|---|---|---|\n| W-01 공개 조회 | 방문자가 공개 링크로 모임 상세를 엽니다. | 권위 있는 `events` 행을 공개 허용 필드와 현재 `confirmed` 수로 변환해 읽기 전용 화면 상태를 만듭니다. | `GET /events/:eventId`와 로딩·정상·없음·취소·전달 실패 UI | 인증은 요구하지 않되 참가자 식별자와 비공개 필드는 공개 응답 권리 밖으로 둡니다. | 없는 모임·취소·전달 실패를 같은 빈 화면으로 합치거나 이전 참가 버튼을 남깁니다. | 상태별 계약·UI 테스트와 브라우저에서 응답·DOM·접근 가능한 문구가 일치하고 쓰기 0건입니다. | 공개 조회 계약·서비스·상태 UI·fixture·테스트만 한 diff와 로컬 `commit`에 묶습니다. | 입력 `commit`·아티팩트·배포 버전과 실제 URL의 HTTP 응답·H1·상태별 smoke를 연결합니다. | 이전 검증 아티팩트로 되돌린 뒤 공개 조회와 공개 필드 범위를 다시 확인하고, 데이터 행은 조회 실패만으로 삭제하지 않습니다. |\n| W-02 주최자 생성·소유권 | 인증된 주최자가 모임을 만들고 자신의 모임만 수정·취소·마감하거나 참가 현황을 봅니다. | 생성 시 현재 주체로 `host_id`를 정하고, 수정 시 `event.version`과 상태를 원자적으로 갱신하며 거절 시 기존 행을 보존합니다. | `POST /events`, `PATCH /events/:eventId`, 주최자 전용 `GET /events/:eventId/registrations` | authentication으로 주체를 확인하고 authorization으로 현재 주체와 `events.host_id`의 소유권을 매 요청 집행합니다. | 본문의 가짜 `host_id`, 비소유 수정, 참가 현황 노출, 오래된 버전 덮어쓰기가 생깁니다. | 주최자 A/B 부정 테스트에서 비소유 요청은 거절·데이터 불변·참가 정보 0필드이고, 소유 요청만 기대한 버전을 만듭니다. | 인증 주체 매핑·소유권 정책·버전 계약·인가 부정 테스트를 한 수직 diff로 커밋합니다. | 배포 환경의 인증 설정·마이그레이션 버전과 가상 계정의 소유/비소유 smoke, 비밀 없는 인가 결과 로그를 연결합니다. | 의심 배포를 중지하고 권위 행과 감사 가능한 결과를 재조회하며, 호환되는 이전 아티팩트 또는 수정 배포 뒤 소유권 부정 흐름을 재검증합니다. |\n| W-03 참가·자기 취소 | 인증된 참가자가 자신의 참가를 신청하거나 취소하고 결과를 다시 확인합니다. | 인증 주체로 `participant_id`를 정해 활성 `(event_id, participant_id)`를 한 건만 `confirmed`로 만들거나 이력을 `cancelled`로 전환합니다. | `POST /events/:eventId/registrations`, `DELETE /events/:eventId/registrations/me`, 권한 있는 현재 참가 재조회 | 참가자는 자신의 관계만 바꿀 수 있고 다른 참가자의 식별자를 보내도 권한을 얻지 못합니다. | 중복 클릭·재시도·타인 취소 또는 `commit` 뒤 응답 유실을 실패로 오판해 중복 생성을 시도합니다. | 정상·미인증·중복·타인 취소와 응답 유실을 분리하고, 최종 활성 중복 0건·자기 상태·확정 수·취소 이력이 계약과 같습니다. | 참가·자기 취소 계약, 활성 고유성 제약, 서비스·UI 결과 불명 상태와 해당 테스트만 함께 커밋합니다. | 가상 계정 smoke의 요청·응답·권위 상태, 중복·인가 결과 분포와 요청 상관 식별자를 같은 배포 버전에 연결합니다. | 응답 유실 때 즉시 재전송하지 않고 권위 상태와 처리 기록을 재조회하며, 장애 뒤 고유성·확정 수·자기 취소 흐름을 다시 확인합니다. |\n| W-04 정원·마감·동시성 | 참가자는 마지막 자리를 요청하고 주최자는 모집 상태나 정원을 바꿉니다. | `event.status`, `capacity`, 현재 `confirmed`, 활성 중복과 정원 축소 조건을 한 트랜잭션에서 판정해 한 결과만 `commit`하고 중간 실패는 전체 `rollback`합니다. | 참가 `POST`와 주최자 `PATCH`의 충돌·마감·재시도 가능 오류 계약 | 참가와 주최자 주체·소유권을 각각 확인한 뒤에도 정원 불변식은 애플리케이션·데이터 경계에서 최종 집행합니다. | 트랜잭션 밖 사본을 믿어 정원 초과, 부분 저장, 무한 재시도나 내부 잠금 정보 노출이 생깁니다. | 같은 시작 장벽에서 마지막 자리 두 요청은 성공 1·안전한 실패 1·`confirmed = capacity`이고, 정원 축소 경쟁의 두 허용 최종 상태 모두 부분 저장 0건입니다. | 선택한 동시성 전략·트랜잭션 경계·오류 매핑·결정적 경쟁 테스트를 하나의 독립 커밋으로 묶습니다. | 대상 데이터베이스·버전의 실제 전략, 마이그레이션 결과, 충돌/오류 지표와 승인된 가상 동시 smoke를 배포 식별자에 연결합니다. | 경쟁 오류가 반복되면 쓰기나 배포를 안정화하고 권위 불변식을 재조회하며, 유한 재시도 또는 수정 배포 뒤 같은 장벽 시험으로 복구를 판정합니다. |\n| W-05 배포·운영 인수 | 운영자가 검증된 버전을 배치하고 신호·백업·복원·공개 흐름을 인수합니다. | 소스 `commit`을 아티팩트·스키마·환경·배포 버전에 연결하고, 백업을 격리 대상에 복원해 데이터와 서비스 상태를 재구성합니다. | 빌드·배포·마이그레이션 계약, 공개 URL, 로그·지표·알림, 백업·복원 런북 | 배포·로그·백업 권한을 최소화하고 비밀·토큰·개인정보를 소스·브라우저·로그·일반 백업에 넣지 않습니다. | 로컬 build·배포 작업·사용자 성공을 합치거나, 잘못된 DB·비밀 노출·복원하지 못하는 백업·호환되지 않는 코드 롤백이 생깁니다. | 빌드 manifest와 smoke, 비밀 검사, 격리 복원에서 스키마·관계·수량·권한을 확인하고 복구 뒤 조회·참가·취소가 다시 성공합니다. | 환경 키 이름·마이그레이션·관측·런북 변경을 구현과 검토 가능한 단위로 나누고 각 커밋의 입력·되돌림을 기록합니다. | 입력 커밋·잠금 파일·아티팩트 ID·대상 환경·실제 URL·안전한 신호·백업 ID·복원 시간과 담당자를 한 인수 기록에 연결합니다. | 영향 기준에서 배포/쓰기를 중지하고 호환되는 아티팩트·설정·데이터를 복원한 뒤 권한·불변식·핵심 공개 흐름을 재검증하며 남은 부작용을 기록합니다. |\n"
        },
        {
          "start_line": 247,
          "end_line": 254,
          "text": "이번 작업은 W-04 마지막 한 자리 동시 참가 규칙만 다룬다.\n결제·알림·대기 명단·프레임워크 교체·새 패키지·배포는 범위 밖이다.\nevent.status = open, confirmed 수, capacity와 활성 중복 여부를 같은 트랜잭션에서 판정하라.\n애플리케이션 사전 검사와 데이터베이스 제약·트랜잭션의 책임을 구분하라.\ncapacity 10, confirmed 9인 명시적 가상 fixture에서 서로 다른 두 요청을 동시에 시작하는 실패 테스트를 먼저 확인하라.\n오라클은 성공 1건, 안전한 충돌 또는 마감 1건, 최종 confirmed 10, 활성 중복 0건이다.\n허용된 테스트 fixture 밖의 사용자 데이터와 비밀에 접근하지 말고 외부 쓰기를 하지 마라.\n완료 보고에는 변경 파일, diff, 실행 명령·종료 코드·테스트 수, 수용 기준별 직접 증거와 남은 위험을 포함하라."
        },
        {
          "start_line": 262,
          "end_line": 268,
          "text": "- [ ] 방문자·참가자·주최자의 작업과 인증·인가 책임을 구분했나요?\n- [ ] UI 표시가 서버·데이터베이스의 권한 집행을 대신하지 않는다고 확인했나요?\n- [ ] `event.status`, `registration.status`, `capacity`, `version`과 사용자·모임·참가 관계를 정의했나요?\n- [ ] W-01~W-05 각각에 수용 기준, 실패 상태와 직접 증거가 있나요?\n- [ ] 활성 참가 중복을 데이터베이스 제약으로 보호하고 정원 판정을 같은 트랜잭션에 묶었나요?\n- [ ] 마지막 한 자리 동시 요청에서 성공 1건과 안전한 실패 1건을 직접 검증했나요?\n- [ ] `commit` 뒤 응답 실패를 `rollback`으로 단정하지 않고 재조회·중복 방지로 복구하나요?"
        },
        {
          "start_line": 274,
          "end_line": 282,
          "text": "## 짧은 연습\n\n가상 모임 `event-example-001`의 정원이 3명이고 현재 `confirmed` 참가가 2명이라고 가정합니다. 참가자 A와 B가 거의 동시에 참가를 눌렀고, A의 브라우저는 응답을 받지 못했으며 B는 정원 마감 응답을 받았습니다.\n\n1. 화면, 애플리케이션, 데이터베이스와 운영 증거가 각각 확인할 질문을 한 줄씩 적습니다.\n2. “A의 신청은 실패했다”를 바로 결론 내릴 수 없는 이유와 재조회할 상태를 적습니다.\n3. 최종 `confirmed` 수, 성공·실패 응답 수, 활성 중복 수로 테스트 오라클을 작성합니다.\n4. 이 연습에서 인증 테스트와 인가 테스트를 각각 하나씩 분리해 적습니다.\n5. 공개 smoke 확인과 격리 복원 시험이 서로 대신할 수 없는 이유를 적습니다."
        },
        {
          "start_line": 289,
          "end_line": 293,
          "text": "- [클라이언트·서버·풀스택](../../03-full-stack/client-server-full-stack/)은 참가 버튼에서 화면·요청·서버 판단·데이터·응답으로 이어지는 책임 축과 사용자 완료를 구분하는 데 연결됩니다.\n- [HTTP 요청과 응답](../../03-full-stack/http-request-response/)은 공개 `GET`, 생성·참가 `POST`, 수정 `PATCH`, 자기 취소 `DELETE`의 의도·응답·재시도 차이를 검토하는 데 사용합니다.\n- [API·데이터베이스·인증](../../04-backend-data/api-database-auth/)은 API 계약, 인증과 인가, 애플리케이션 검사, 데이터베이스 제약·트랜잭션과 `commit` 뒤 응답 실패를 더 깊게 설명합니다.\n- [브라우저·DOM·렌더링](../../05-frontend/browser-dom-rendering/)은 로딩·정상·없음·취소·충돌·전달 실패가 서버 상태에서 접근 가능한 화면 증거로 바뀌는 과정을 확인하게 합니다.\n- [PRD·두 종류의 SDD·TDD](../../06-requirements-design/prd-sdd-tdd/)는 W-01~W-05를 문제·요구·설계·작업·테스트로 추적하되 문서 종류와 개발 규율을 섞지 않는 기준을 제공합니다."
        },
        {
          "start_line": 298,
          "end_line": 301,
          "text": "- [AI 코딩 에이전트와 일하는 법](../../11-ai-native/working-with-coding-agents/)은 범위·권한·수용 기준·검증 명령·보고 형식을 갖춘 작업 계약과 한 조각씩 통합하는 절차를 제공합니다.\n\n이 장은 특정 서비스의 실제 동작을 주장하는 구현 안내가 아닙니다. 요구사항·설계·테스트·운영 분류는 SWEBOK, API 설명 형식은 OpenAPI, 인증·인가와 안전한 로깅은 OWASP, 트랜잭션·격리·제약은 PostgreSQL, HTTP와 웹 화면 범위는 MDN, 변경 이력은 Pro Git, 빌드·배포 단계는 Astro 공식 자료의 기존 확인 범위에 연결하며 구체적인 출처 URL·확인일·일반화 금지선은 저장소의 `research/source-map.md`에서 관리합니다.\n"
        }
      ]
    },
    {
      "path": "src/content/docs/08-quality/performance-security.md",
      "sha256": "1a04872010e7ca3d2d0d31a87917fd7dee330e6dc5bc7ecfc456359f5bd38b4d",
      "segments": [
        {
          "start_line": 14,
          "end_line": 18,
          "text": "## 왜 필요한가\n\n“빠르게 만들어 주세요”와 “안전하게 만들어 주세요”는 좋은 의도지만 합격 여부를 판정할 수 없는 요청입니다. AI는 캐시를 추가하거나 패키지를 바꾸고, 인증 화면이나 입력 검사 코드를 만들 수 있습니다. 그러나 어떤 사용자에게 무엇이 얼마나 빨라야 하는지, 무엇을 누구에게서 보호해야 하는지 정하지 않으면 복잡성만 늘고 실제 위험은 남습니다.\n\n성능과 보안은 마지막에 한 번 검사하는 부가 기능이 아닙니다. 요구 단계에서 사용자 결과와 보호할 자산을 정하고, 설계에서 예산과 신뢰 경계를 배치하며, 구현·검증·배포·운영에서 실제 증거로 계속 확인하는 품질 책임입니다."
        },
        {
          "start_line": 34,
          "end_line": 39,
          "text": "| 무엇을 지키는가? | 사용자가 완료해야 할 핵심 행동과 기다림 한도 | 개인정보·권한·업무 상태·가용성 같은 자산 | 요구·데이터 분류·사용자 영향 |\n| 어디에서 위험이 생기는가? | 느린 경로, 자원 포화, 직렬 대기 | 진입점, 신뢰 경계, 과도한 권한, 제3자 의존성 | 흐름·프로필·위협 모델 |\n| 어느 기준을 넘으면 실패인가? | 사용자 구간·환경·분위수·자원 예산 | 허용하지 않을 행동·노출·변조와 위험 수용 기준 | 수용 기준·성능 예산·보안 요구 |\n| 무엇을 바꿀 것인가? | 측정된 병목을 줄이는 가장 작은 변경 | 우선 위협을 줄이는 예방·탐지·복구 통제 | 선택 이유·대안·부작용·복구 경로 |\n| 효과를 어떻게 아는가? | 같은 조건의 변경 전후 측정과 회귀 | 통제 시험·거절 경로·감사 증거·대응 훈련 | 실행 결과와 대상 버전·환경 |\n"
        },
        {
          "start_line": 107,
          "end_line": 116,
          "text": "위협 모델은 그림 한 장이 아니라 다음 질문과 결정 기록입니다.\n\n1. 무엇을 만들고 어디까지가 범위인가?\n2. 중요한 자산과 주체는 누구인가?\n3. 데이터와 제어가 어느 구성요소·외부 의존성·신뢰 경계를 통과하는가?\n4. 오용·권한 상승·노출·변조·거부·공급망 실패가 어디에서 가능한가?\n5. 영향·발생 가능성·노출 범위·탐지와 복구 난이도로 무엇을 먼저 줄일 것인가?\n6. 예방·탐지·대응·복구 통제가 실제로 작동함을 무엇으로 시험할 것인가?\n7. 어떤 잔여 위험을 누가 언제까지 수용하거나 다시 검토하는가?\n"
        },
        {
          "start_line": 134,
          "end_line": 144,
          "text": "- 실패 계약: 안전한 오류 응답, 부작용 없음, 필요한 최소 진단 기록\n\n클라이언트 검증은 빠른 피드백에는 유용하지만 사용자가 바꿀 수 있으므로 서버의 권한·업무 검증을 대신하지 않습니다. 입력 검증도 인가, 출력 인코딩, 안전한 쿼리 구성과 같은 다른 통제를 자동으로 대신하지 않습니다.\n\n### 비밀 관리\n\n**비밀(secret)**: 유출되면 시스템·데이터·외부 서비스에 권한을 줄 수 있는 비밀번호·개인 키·접근 토큰·연결 자격 같은 값입니다. 비밀 관리는 저장 위치 하나가 아니라 생성·배포·사용·회전·폐기·감사·유출 대응의 수명주기입니다.\n\n- 소스·예시·로그·오류·스크린샷에 실제 비밀을 넣지 않습니다.\n- 필요한 서비스와 환경에만 최소 범위·짧은 수명의 자격을 전달합니다.\n- 비밀 값을 출력하지 않고 사용·실패·회전 사건을 감사할 수 있게 합니다."
        },
        {
          "start_line": 170,
          "end_line": 175,
          "text": "| 피해 범위 | 한 요청·계정·환경에 제한되는가, 전체 데이터·서비스로 퍼지는가? |\n| 탐지와 복구 | 얼마나 빨리 알고 안전 상태로 돌아갈 수 있으며 데이터·외부 부작용은 남는가? |\n| 증거 신뢰도 | 실제 측정·프로필·재현·통제 시험인가, 추측·도구 경고·문서 존재뿐인가? |\n| 변경 비용과 부작용 | 구현·운영 비용과 정확성·접근성·성능·보안의 새로운 위험은 무엇인가? |\n\n심각한 비밀 노출이나 무단 권한 상승처럼 영향이 큰 문제는 성능 개선보다 먼저 공개·접근을 제한하고 자격을 폐기해야 할 수 있습니다. 다만 “보안은 항상 최우선”처럼 맥락 없는 문구 대신 실제 자산·영향·노출·복구 증거로 긴급성과 행동을 설명합니다."
        },
        {
          "start_line": 187,
          "end_line": 193,
          "text": "### 자산·위협·경계 확인\n\n보호 자산은 계정 신원, 참가 관계, 연락 정보, 모임 정원과 취소 권한, 서비스 가용성입니다. 브라우저↔서버, 서버↔데이터베이스, CI↔배포 환경, 외부 알림 서비스 경계를 그립니다. 가능한 위협은 다른 사용자의 참가 취소, 조작한 정원 값, 동시 요청으로 인한 초과 참가, 로그의 토큰 노출, 취약한 알림 의존성입니다.\n\n통제는 위협과 직접 연결합니다. 서버는 매 요청에서 현재 사용자와 대상 모임의 권한을 확인하고, 참가 입력의 형식·업무 상태를 검증하며, 데이터베이스 불변식과 트랜잭션으로 정원을 보호합니다. 알림 서비스 자격은 필요한 환경·행동으로 제한하고 브라우저나 로그에 전달하지 않습니다. 의존성 버전·출처와 업데이트 결과를 기록하며, 기능 제한·안전 버전 전환·잘못된 상태 판정과 복구 절차를 둡니다.\n\n### 완료 증거"
        },
        {
          "start_line": 196,
          "end_line": 200,
          "text": "- 정상·정원 마감·중복·동시 요청·무권한 취소의 테스트 결과\n- 브라우저 요청을 조작해도 서버와 데이터 계층이 거절하고 불변식을 지킨 증거\n- 비밀 없는 로그와 안전한 상관 식별자, 탐지 경보의 시험 결과\n- 대상 빌드·환경에서 참가·취소 사용자 흐름과 권위 데이터 재조회\n- 기능 제한·자격 폐기·이전 안전 버전·데이터 정정 절차의 연습 결과"
        },
        {
          "start_line": 209,
          "end_line": 213,
          "text": "| 한 기기·한 번의 최고 수치로 “빠르다”고 선언함 | 사용자 구간·분포·실패·환경 차이를 숨김 | 조건·표본·분위수·실패와 미확인 범위를 함께 기록함 |\n| 보안 도구 경고 0건을 안전 완료로 선언함 | 도구 범위 밖 위협·설정·업무 권한이 남음 | 자산·경계·위협과 통제 시험·잔여 위험을 대조함 |\n| 프런트 검증이나 숨긴 버튼을 인가로 사용함 | 요청을 직접 조작하면 우회할 수 있음 | 신뢰 가능한 경계에서 매 요청 권한과 업무 규칙을 집행함 |\n| 관리자 키를 여러 환경·서비스에서 공유함 | 한 유출의 피해 범위와 회전 비용이 커짐 | 역할·환경·기간별 최소 권한과 회수·재발급 경로를 둠 |\n| 의존성을 무조건 최신으로 일괄 갱신함 | 취약점은 줄어도 호환성·공급망·복구 위험이 생김 | 대상 위험을 확인하고 작은 diff·테스트·배포·rollback 증거를 남김 |"
        },
        {
          "start_line": 244,
          "end_line": 248,
          "text": "- [ ] 사용자·서비스·에이전트가 필요한 최소 권한만 필요한 기간에 가지나요?\n- [ ] 신뢰 경계의 형식·업무 의미·권한을 신뢰 가능한 쪽에서 다시 검증하나요?\n- [ ] 실제 비밀이 소스·브라우저·로그·오류·fixture에 없고 회전·폐기 경로가 있나요?\n- [ ] 직접·전이 의존성의 버전·출처·권고·업데이트·rollback을 확인했나요?\n- [ ] 예방·탐지·대응·복구 통제를 대상 버전에서 시험했나요?"
        },
        {
          "start_line": 271,
          "end_line": 276,
          "text": "- [OWASP Threat Modeling Project](https://owasp.org/www-project-threat-modeling/)와 [Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)는 2026-08-13 현재 Maintained Project와 실무 지침에서 자산·범위·의존성·신뢰 경계·위협·완화·검증·우선순위 흐름을 확인하는 데 사용했습니다. OWASP가 단일 필수 방법을 정하거나 위협 모델 문서 하나가 현재 구현의 안전을 보장한다고 확대하지 않습니다.\n- [NIST SP 800-218 SSDF 1.1](https://csrc.nist.gov/pubs/sp/800/218/final)은 2022-02 Final로 확인해 보안 실무를 SDLC 전체에 통합하고 위험 기반으로 코드 검토·자동/수동 분석·실행 시험·제3자 구성요소 평가·취약점 대응을 선택하는 범위에 사용했습니다. NIST 권고를 모든 조직의 법적 의무, 특정 도구 목록, 완전한 보안 보장으로 확대하지 않으며 2025년에 공개된 1.2 초안을 현재 Final로 사용하지 않습니다.\n- [NIST Glossary의 least privilege](https://csrc.nist.gov/glossary/term/least_privilege)는 2026-08-13 현재 기능 수행에 필요한 최소 권한만 부여하는 원칙의 정의 범위에 사용했습니다. 이 원칙만으로 인증·인가·감사·자격 증명 보호가 완료된다고 확대하지 않습니다.\n- [OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)와 [Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)는 2026-08-13 현재 문법·의미 검증과 비밀의 생성·회전·폐기·노출 대응 수명주기 범위에 사용했습니다. 입력 검증을 인가·출력 인코딩·안전한 쿼리의 대체물로, 환경 변수를 자동 암호화·회전하는 비밀 저장소로 일반화하지 않습니다.\n\n## 기억할 문장"
        }
      ]
    },
    {
      "path": "src/content/docs/10-deployment-operations/logs-monitoring-backup.md",
      "sha256": "5a42d483e27c9c86c1345f46fa79e6666b4eaaad03e0949b5b97a5688bc76894",
      "segments": [
        {
          "start_line": 103,
          "end_line": 107,
          "text": "- 서비스·환경·배포 버전\n- 이벤트 이름과 결과\n- 요청·작업·트레이스 상관 식별자\n- 관련 기능과 안전하게 축약한 오류 종류\n- 처리 시간과 재시도 횟수"
        },
        {
          "start_line": 111,
          "end_line": 115,
          "text": "### 로그에 남기지 말아야 할 것\n\n비밀번호, API 키, 세션 쿠키, 인증 토큰, 전체 `Authorization` 헤더와 복구 코드 같은 비밀은 로그에 남기지 않습니다. 개인정보와 원본 요청·응답 본문도 목적·접근 권한·보존 기간을 정하지 않은 채 수집하지 않습니다. 오류 분석에 식별자가 필요하면 최소 범위와 가명화·마스킹 정책을 정하고, 누가 조회했는지 감사할 수 있어야 합니다.\n\n로그가 많을수록 항상 좋은 것은 아닙니다. 비용과 검색 지연이 커지고 중요한 사건이 묻히며 민감정보 노출 면적이 넓어집니다. 어떤 질문에 답하려는지, 어느 기간이 필요한지, 누가 볼 수 있는지부터 정합니다."
        },
        {
          "start_line": 214,
          "end_line": 218,
          "text": "중복, 모집 마감, 정원 가득 참, 미인증 요청의 거절과 인가 거절은 단일 요청만 보면 의도된 업무 규칙 또는 보안 거절일 수 있으므로 자동으로 인시던트가 되지는 않습니다. 그렇다고 모든 인가 거절을 정상으로 분류해서도 안 됩니다. 결과 비율이 평소보다 급증했는지, 정상 성공을 서버 오류나 권한 거절로 잘못 분류했는지, 권한 있는 사용자의 자기 참가 취소가 거절됐는지처럼 요청 문맥·분포·변화를 함께 확인해야 합니다.\n\n안전한 구조화 로그는 예를 들어 가짜 `event_id=event-example-001`, `request_correlation_id=request-example-7f2c`, 환경, 배포 버전, 작업 종류와 결과 코드만 연결합니다. 이름·이메일·세션·토큰·전체 인증 헤더·원본 요청 본문·그 밖의 개인정보나 비밀은 넣지 않습니다. 상관 식별자는 참가 요청, 데이터베이스 처리와 응답을 연결하는 데 쓰되 그 자체에 사용자 정보를 담지 않습니다.\n\n`confirmed > capacity` 또는 정의된 인가 밖에서 다른 사용자의 참가 취소가 확인되면 다음 순서로 대응합니다."
        },
        {
          "start_line": 257,
          "end_line": 261,
          "text": "7. 시간 순서, 결정 근거, 효과가 없던 조치와 후속 작업을 기록합니다.\n\n여러 설정과 파일을 동시에 바꾸면 어떤 조치가 효과가 있었는지 잃습니다. 긴급 상황에서도 변경 단위를 작게 하고 실행자·시각·대상·예상 효과·되돌리기 방법을 남깁니다. 비밀과 개인정보를 상황 공유 문서에 복사하지 않습니다.\n\nNIST SP 800-61 Rev. 3은 2025년 4월 최종본으로, 인시던트 대응을 별도 순간 작업이 아니라 조직의 사이버보안 위험 관리 활동에 통합하고 탐지·대응·복구와 지속 개선을 연결합니다. 이 문서는 미국 연방 정보 시스템 중심의 사이버보안 지침이므로 모든 장애의 의무 절차나 조직 구조로 일반화하지 않고, 이 장에서는 사실·가설 분리, 영향 안정화, 복구 검증과 학습의 근거 범위로만 사용합니다."
        },
        {
          "start_line": 355,
          "end_line": 359,
          "text": "- 복구 뒤 사용자·데이터 확인\n\n비밀과 개인정보를 출력하지 마라.\n성공 로그만으로 다음 단계를 추정하지 마라.\n설정·알림·백업·운영 데이터를 변경하지 마라."
        },
        {
          "start_line": 371,
          "end_line": 375,
          "text": "### 로그를 많이 남기면 관측 가능성이 생긴다고 생각합니다\n\n질문·상관 식별자·버전·환경이 연결되지 않은 로그는 사건을 재구성하기 어렵습니다. 필요한 문맥을 구조화하고 보존·접근·비용을 관리하세요.\n\n### 오류 전체를 호출 알림으로 만듭니다"
        },
        {
          "start_line": 379,
          "end_line": 383,
          "text": "### 비밀과 원본 요청을 로그에 복사합니다\n\n진단 편의가 새로운 보안·개인정보 사고가 될 수 있습니다. 수집 전에 목적과 최소 필드, 마스킹·접근·보존 정책을 정하세요.\n\n### 복제나 동기화를 백업이라고 부릅니다"
        },
        {
          "start_line": 409,
          "end_line": 414,
          "text": "- [ ] 핵심 사용자 흐름과 실패의 사업 영향을 정의했습니다.\n- [ ] 각 흐름에 사용자 결과와 시스템 원인을 보여 줄 신호가 있습니다.\n- [ ] 로그에 환경·버전·시간과 안전한 상관 식별자가 연결됩니다.\n- [ ] 비밀·개인정보·원본 본문의 수집·마스킹·접근·보존 정책이 있습니다.\n- [ ] 평균뿐 아니라 중요한 지연 분포와 데이터 최신성을 봅니다.\n- [ ] 그래프의 빈 값과 수집 중단을 정상 상태와 구분할 수 있습니다."
        },
        {
          "start_line": 422,
          "end_line": 426,
          "text": "- [ ] 자산별 RPO·RTO와 그 사업 근거를 정했습니다.\n- [ ] 백업이 원본의 계정·권한·삭제·공격 경계에서 적절히 분리됩니다.\n- [ ] 암호화·접근 통제·보존·만료와 개인정보 삭제 정책을 확인했습니다.\n- [ ] 데이터·스키마·설정·권한과 외부 상태의 복구 순서를 정했습니다.\n- [ ] 비밀을 백업에 복사하는 대신 회전·재발급 절차가 있습니다."
        }
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/site-qa.md",
      "sha256": "af60620bbe859ad602f2795c4f66c22a16c955335d1f8c2e29d1b8c1af18ffb6",
      "segments": [
        {
          "start_line": 2,
          "end_line": 4,
          "text": "\n확인일: 2026-08-28 · 부분 증거 재검증일 및 closeout일: 2026-09-05 · 상태: Task21 로컬 사이트 QA closeout PASS·M4-03~05 완료·포인터 없는 모바일 OS 전체 Tab 경로 미확인·M5 Claude 필수 독립 검토 대기 · 공개 가능 판정: 아니요\n"
        },
        {
          "start_line": 23,
          "end_line": 28,
          "text": "- HTTP·H1·초안 배지·main·깨진 이미지·전역overflow·제한된 내부 스크롤·console·pageerror·외부 요청, 첫 화면과 다이어그램·표 관찰 이미지를 보존합니다. 실패 시도와 부분 수집은 숨기지 않습니다.\n- 검색12개 고유어(승인된 Task21의8개와 Task8의5개 중 Supabase 중복1개), 검색 결과의 실제 키보드 진입과 돌아오기, 소비 문맥 링크3개, 사이드바, 키보드 초점, 기본404 복구를 두 폭에서 확인합니다. 검색어를 다시 입력해야 복구되는 경우 자동 문맥 보존이라고 하지 않습니다.\n- 하위 base path 빌드는 별도 출력 폴더로 분리해 내부 링크·favicon·CSS·SVG 경로를 확인합니다. 기본404가 복구 가능하면 새404페이지를 만들지 않습니다.\n\n수집기 구현자의 합성 수용·실패 테스트13개와 문법 검사가 통과했습니다. 수정 전 기준선은150개 페이지 상태·68개 시각 조합을150회 시도·실패0·누락0으로 수집했고 전체 manifest 검증 exit0을 확인했습니다. 입력 snapshot은 `c3759dc496193dab1146c3d5548da8cc9f0575125f23023725c1d0dfb14f877a`입니다. 68개 다이어그램 원본 crop의 핵심·보조 레이블과 화살표·양테마 marker도 직접 확인했습니다. 이후 실제 결함 수정으로 CSS·원문·콘텐츠 지도·빌드가 바뀌었으므로 이 snapshot은 수정 전 증거로 보존하며 현재 입력의 최종 검증으로 재사용하지 않습니다. 검색·키보드·404와 수정 후 행렬은 진행 중이고 Critical/Important 해소를 주장하지 않습니다.\n"
        },
        {
          "start_line": 36,
          "end_line": 42,
          "text": "\n## 최종 로컬 관찰과 남은 게이트\n\n정본은 [사이트 QA 증거 manifest](site-qa-browser-manifest.json)입니다. 수정 후 `fe4bd387ce2fbc6972b17555f2f49de5217345b7e0009e7e6b767f05f905e8e2` 입력 snapshot의 전체150페이지 상태·68시각 조합은 DOM/HTTP/테마/런타임 자동 검사에서 실패0·누락0이며 full manifest 검사 exit0입니다. 원래 기준선150시도도 보존해 전체300시도를 추적합니다. DOM 수집 통과는 픽셀·상호작용·독립 검토 전체 PASS가 아닙니다.\n\n68개 새 그림 crop과 기존 crop을 RGBA로 비교해30개는 완전히 같았고38개는 달랐습니다. 기존68개 직접 관찰과 별도로 변경38개를 모두 다시 보았습니다. 이때 API 상세 시퀀스의 모바일 양테마2개 crop에 actor 박스 상단 잘림을 발견해 최종 그림 증거에서 제외했습니다. 원본 SVG와 페이지는 바꾸지 않고 해당2상태만 새 viewport로 관찰했습니다. 그림의 전후 DOM box가 같은 상태에서 viewport PNG로부터358×500px을 무손실 추출한 crop2개와 실제390×844화면2개를 직접 확인해 상단 actor4개·11단계·실선/점선·commit/응답 유실 표시가 보존됨을 확인했습니다. 원래 실패 crop은 삭제하지 않았으며 `sequence-viewport-supplement.jsonl`로 연결합니다. 보충의 badge selector는 빈 배열이므로 배지 재검증 증거가 아니며 배지 근거는 원래150행렬에 한정합니다.\n"
        },
        {
          "start_line": 44,
          "end_line": 64,
          "text": "\n상호작용41시도의 마지막36개 중34개가 통과하고 키보드 테마2개가 실패했습니다. 검색12개×2폭24개, 소비 문맥 링크3개×2폭6개, 사이드바17목적지씩 두 폭, 기본404 두 폭에서 홈 브랜드 링크로 HTTP200 복구를 확인했습니다. 검색은 결과 Tab/Enter 진입과 수동 재검색 재사용을 확인했지만 자동 검색어 복원을 주장하지 않습니다. 과거 실패7건을 유지하며 새404페이지는 만들지 않았습니다. 검색 결과 초점2장·키보드 skip/theme/body 초점6장·404화면2장을 직접 확인했습니다.\n\n`QA-KEYBOARD-001`: Tab 초점·검색 열기·본문 진입은 확인됐지만 키보드로 native select 값을 dark로 바꾸지 못했습니다. 실제 OS UI 진단도 Chrome 식별자 중복 뒤 정확한 앱 경로에서 -10005 timeoutReached로 실패했습니다. `native-keyboard-boundary.md`에 진단 한계와 재개 조건을 남겼으며 사이트 자체 결함으로 확정하거나 설정·권한을 우회하지 않았습니다. 실제 UI 접근 또는 사용자 수동 검증이라는 새 조건이 필요합니다. 이 항목과 필수 Claude 검토가 남아 Task21·M4 전체 PASS는 아닙니다.\n\n새 Task24 조사 원문이 ignored `.superpowers`에 들어온 뒤 Node22 최종 검사 첫 시도는 참조 검사의 조사 원문 앵커 오류로106/107통과·exit1, 빌드 미실행이었습니다. 같은 실패를 새 테스트로 재현한 뒤 비공개 조사 디렉터리만 제외했고 집중2/2·최종108/108테스트, 콘텐츠59, 참조171 Markdown/MDX+SVG14, 계획100점·59문서·중복0·누락0, HTML60·Pagefind60·리터럴0으로 전체check exit0입니다. 참조 수 감소는 원고 삭제가 아니라 조사 디렉터리 제외 때문입니다. Node22.16.0/npm10.9.2의 실제 명령·로그는 ignored `final-node22-gates-a2.json`과 연결 파일에 보존합니다. 빌드 전후 dist171개 파일의 경로·bytes SHA가 모두 같아 사이트 행렬은 다시 실행하지 않았습니다.\n\n2026-08-30 부분 증거 계보 재검증에서 shape 계약12/12는 통과했지만 최초 전체 verifier는 과거 final-gates의 dist 지문과 이후 정상 빌드가 교체한 현재 ignored `dist/`를 같은 상태로 요구해 exit1이었습니다. 회귀 snapshot 이후 바뀐 비-dist 입력은 `CONTENT_MAP.md`, basepath 교정 원고, 가상 진단 표기 원고, 운영 도표 원고, 모바일 표 CSS의 고유5개이며 각각 `16ca9e6`·`bbc7dc8`·`cf193f6`·`3d397b9`과 연결된 좁은 검증 이력이 있습니다. 현재 snapshot 전체를 8월28일 브라우저 행렬과 동일하다고 재표시하지 않습니다. mutable current input/dist drift를 불변 캡처·raw·PNG·실패 계보와 분리하는 회귀 테스트는 수정 전12/13·exit1에서 수정 후13/13·exit0이 되었고, 최신 키보드 경계 지문을 반영한 정본 verifier는 `valid_partial_lineage`·errors0입니다. 진단상 두 snapshot의 input record530개 중 current drift140·missing10, final-gates dist171개 중 drift66·missing5이며 중복 snapshot과 ignored build 산출물을 포함하는 수치라 현재 사이트 결함 수가 아닙니다. Node22.16.0의 fresh build는 HTML60·학습 SVG14·Pagefind HTML60으로 exit0이었지만 브라우저·키보드를 반복하지 않았고, 이 보정은 Task21·M4 PASS가 아니라 역사 증거 검증 가능성만 복구합니다.\n\npreview·Chrome은 최초 수집 후 종료하고 위 두 실패 crop 보충 때만 다시 실행했습니다. 최종 close와 정확한 preview PID 종료를 기록하며 사용자 Chrome에는 조작하지 않습니다. `.gitignore`에는 두 정확한 basepath 증거 디렉터리만 추가했고 산출물은 삭제하지 않았습니다.\n\n2026-08-30 Codex 독립 검토의 최초 판정은 manifest 데이터·실패 원장·tracked 후보 공개 안전에는 문제가 없지만 helper가 `gates.task21`, `gates.ready`, `gates.commit` 직접 승격을 막지 못한다는 Important1건으로 `NEEDS CHANGES` C0/I1/M0이었습니다. 세 승격을 각각 변조하는 계약 테스트를 먼저 추가해13/14·exit1의 RED를 확인하고, 정확한 부분 상태만 허용하도록 한 조건을 추가한 뒤14/14·exit0과 direct verifier `valid_partial_lineage`·errors0을 확인했습니다. 같은 리뷰어의 Fix Round1은 세 변조 거절을 직접 재현하고 I-01 `RESOLVED`, `PASS` C0/I0/M0, 정확한 tracked 후보3파일의 partial-evidence checkpoint stage 가능으로 판정했습니다. 이 부분 증거 체크포인트는 Task21·M4·native keyboard theme·Claude 검토·`ready`·소유자 승인·RC·push·배포·공개 상태를 완료하거나 허가하지 않습니다.\n\n2026-08-30 native select 비교 후속에서는 HEAD `ee39f42`의 새 Node22 build와 headed Chrome152를 사용했습니다. 데스크톱에서 실제 Tab 네 번으로 사이트 테마 select에 도달했지만 `ArrowUp`은 keydown/keyup만 만들고 값·`input`·`change`를 바꾸지 않았으며, 같은 Chrome의 최소 native select에서도 단일 `ArrowUp`과 `Space → ArrowUp → Enter`가 똑같이 실패했습니다. 따라서 사이트별 결함을 뒷받침하지 않아 코드를 수정하지 않았고 focus-visible screenshot과 비교 JSON을 새 키보드 경계에 보존했습니다. `native_keyboard_theme`는 계속 `unverified`, Task21은 `partial`이며 실제 Chrome native UI 입력 또는 사용자 수동 확인 전에는 M4 PASS가 아닙니다.\n\n2026-08-30 실제 OS 입력 후속에서는 HEAD `9fba98b`의 localhost preview를 macOS26.4.1·Chrome151 게스트 창으로 열었습니다. 중복 bundle ID와 `/Applications/Google Chrome.app`의 기존 `-10005 timeoutReached`는 실패 이력으로 유지하되, 실제 실행 가능한 AppTranslocation 경로를 정확히 지정하자 접근성 트리와 OS 키 입력을 사용할 수 있었습니다. 페이지 로드 뒤 포인터 없이 `Tab` 네 번으로 콘텐츠 건너뛰기 → 사이트 브랜드 → 검색 → 테마 select에 도달했고, native 메뉴에서 `Up`·`Return`으로 `자동 → 밝은 테마 → 어두운 테마`를 확정했습니다. 자동 모드 자체가 macOS dark 선호를 따르므로 화면 변화와 값 변화를 혼동하지 않도록 `어두운 테마 → 밝은 테마 → 어두운 테마`를 같은 키보드 경로로 왕복했고, AX select 값과 페이지 색상이 함께 바뀌며 초점 윤곽이 유지됨을 확인했습니다. `native-keyboard-verification.json`과 1024×768 전체 Chrome 창 screenshot4개를 fingerprinted source로 추가했으며 이 크기를 웹페이지 viewport라고 표시하지 않습니다. Guest 창은 `noWindowsAvailable`, preview 포트4327은 listener0으로 정리했습니다. 이에 `native_keyboard_theme`은 실제 OS-level 입력 범위에서 `verified`로 전환하지만, 과거 Playwright 실패7건은 그대로 남고 Task21·M4 전체 PASS는 정본 전체 검증·독립 패키지 검토·상태 문맥 closeout 전까지 올리지 않습니다.\n\n2026-09-05 모바일 메뉴 키보드 후속에서는 HEAD `1ea9e53`의 localhost preview와 ego lite 1.2.3 전용 Task Space를 사용했습니다. CDP로 확인한 정확한 390×844 화면에서 포인터 입력 없이 콘텐츠 건너뛰기 → 사이트 브랜드 → 검색 → 메뉴까지 Tab으로 이동한 뒤 Enter로 모바일 사이드바를 열었고, 메뉴 내부에서 73회의 Tab 뒤 테마 `SELECT`에 도달했습니다. 선택 요소는 116×48px로 보이고 초점 윤곽이 있으며 값은 `자동`이었습니다. 당시 문서 테마가 dark였던 것은 macOS 선호를 따른 자동 모드이므로 명시적인 어두운 테마 선택으로 판정하지 않습니다. `ArrowUp`, `ArrowUp → ArrowUp → Enter`, `Space → ArrowUp → Enter`에서는 값이 모두 `auto`로 유지되어 모바일 메뉴의 네이티브 값 변경은 `not-confirmed`로 남깁니다. ego-browser 캡처는 timeout이었고, 별도로 보이는 ego lite 앱 창은 CDP가 보고한 모바일 반응형 상태와 달리 데스크톱 레이아웃이라 같은 상태의 화면 증거로 연결하지 않았습니다. 후속 직접 CDP 캡처 시도도 390×844 로드는 확인했지만 문서 포커스를 재현하지 못해 캡처 호출 전에 중단했습니다. 이 좁은 후속은 기존 전체 사이트 HTTP·자산·console·pageerror·overflow·검색·시각 행렬을 다시 실행하지 않았으며, `mobile_menu_native_theme`과 Task21·M4는 각각 `not-confirmed`, `partial`로 유지합니다.\n\n같은 staged 두 파일과 ignored 근거·계약 도구를 읽기 전용으로 대조한 Codex 독립 검토는 `PASS`, Critical 0·Important 0·Minor 0이었습니다. 리뷰어는 이 경계 기록의 좁은 로컬 체크포인트 커밋만 수용하고, 모바일 네이티브 값 변경과 동일 상태 화면이 미확인이라는 이유로 Task21 closeout과 M4 PASS는 모두 불가하다고 판정했습니다.\n"
        },
        {
          "start_line": 66,
          "end_line": 70,
          "text": "\n이 모바일 네이티브 증거 단위의 Codex 독립 재검토는 두 원본 JPEG를 포함한 source 14~17, staged 두 파일, 계약 도구를 대조해 `PASS`, Critical 0·Important 0·Minor 0으로 판정했습니다. 리뷰어는 `mobile_menu_native_theme: verified`와 좁은 로컬 체크포인트 커밋만 수용했으며, 포인터 없는 단일 OS end-to-end 흐름은 `not-confirmed`이고 Task21 closeout과 M4 PASS는 승인하지 않았습니다.\n\n이후 누적 Task21 패키지 전체를 별도로 독립 검토했습니다. 리뷰어는 수정 후150페이지 상태·68시각 조합, 검색·내비게이션·404, 표와 base path, 데스크톱 전체 OS 키보드 경로, 모바일의 상관된 두 키보드 구간, current-input drift 고유5경로의 후속 검증, 실패·보충 계보를 대조해 `PASS`, Critical 0·Important 0·Minor 0으로 판정했습니다. 마스터 계획은 하나의 연속된 모바일 OS 입력 실행만을 유일한 수용 근거로 요구하지 않으므로 포인터 없는 단일 모바일 end-to-end 미확인은 차단 finding이 아니지만 이 한계는 계속 `not-confirmed`로 보존합니다. 이 판정을 근거로 Task21과 M4-03~05를 닫되, 이 closeout은 M5 Claude, 공개59개의 `ready`, 소유자 공개 승인, M6-03, RC, push, 원격 CI, 배포, 공개 URL, 태그, 릴리스 완료를 뜻하지 않습니다.\n"
        }
      ]
    }
  ],
  "render_provenance": {
    "manifest_path": "output/playwright/task20-api-split-evidence/manifest.jsonl",
    "manifest_sha256": "d1d6172a82748fbd7ea397da16f8ab59fe6fe49567ca944a056f68acdffe783c",
    "attempt": 8,
    "asset_lineage": [
      {
        "path": "src/assets/diagrams/api-database-auth-flow.svg",
        "sha256": "101172be6d1eafec459d644223b3a949a7947845096fa8dbe943c5e11070bb91",
        "render_basis_commit": "1d19c15",
        "unchanged": true
      },
      {
        "path": "src/assets/diagrams/source/api-database-auth-flow.mmd",
        "sha256": "a18108afa04e5c828143dd5435c576634463299e0ee82a79a268bd4989a6323e",
        "render_basis_commit": "1d19c15",
        "unchanged": true
      },
      {
        "path": "src/assets/diagrams/api-database-auth-sequence.svg",
        "sha256": "c1b642f30672e304ea4e48d578848abf8ff725cc3581bc3ae9c55d7bdd1ca288",
        "render_basis_commit": "1d19c15",
        "unchanged": true
      },
      {
        "path": "src/assets/diagrams/source/api-database-auth-sequence.mmd",
        "sha256": "b25712d035b682f3da73af10da666747c6821da41c090937f1e682468fbe3b16",
        "render_basis_commit": "1d19c15",
        "unchanged": true
      }
    ],
    "states": [
      {
        "record_type": "pbv03_browser_state",
        "occurrence_id": "PB-028@1440x1000-light",
        "attempt": 8,
        "attempt_status": "success",
        "final": true,
        "route": "/04-backend-data/api-database-auth/",
        "expected_h1": "API·데이터베이스·인증",
        "expected_status_badge": "검토용 초안",
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        },
        "http_status": 200,
        "source_path": "/04-backend-data/api-database-auth/",
        "requested_theme": "light",
        "observed_prefers_color_scheme": "light",
        "observed_html_data_theme": "light",
        "observed_effective_color_scheme": "light",
        "browser_user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36",
        "browser_vendor": "Google Inc.",
        "main_exists": true,
        "h1_count": 1,
        "h1_text": "API·데이터베이스·인증",
        "h1_rect": {
          "left": 324,
          "top": 104,
          "right": 1112,
          "bottom": 184.640625,
          "width": 788,
          "height": 80.640625
        },
        "status_badge_count": 1,
        "status_badge_text": "검토용 초안",
        "status_badge_rect": {
          "left": 324,
          "top": 196.640625,
          "right": 710.96875,
          "bottom": 231.828125,
          "width": 386.96875,
          "height": 35.1875
        },
        "global_overflow_px": {
          "document": 0,
          "body": 0
        },
        "internal_scroll_checks": [
          {
            "tag": "pre",
            "exceeds_viewport": false,
            "internal_scroll_available": false,
            "accepted": true
          },
          {
            "tag": "table",
            "exceeds_viewport": false,
            "internal_scroll_available": false,
            "accepted": true
          },
          {
            "tag": "pre",
            "exceeds_viewport": false,
            "internal_scroll_available": false,
            "accepted": true
          }
        ],
        "internal_scroll_failure_count": 0,
        "window_scroll_y": 0,
        "document_scroll_left": 0,
        "post_capture_scroll": {
          "window_scroll_y": 0,
          "document_scroll_left": 0
        },
        "diagrams": [
          {
            "id": "PBV-03-overview",
            "file": "api-database-auth-flow.svg",
            "alt_prefix": "정상적인 모임 참가 요청이",
            "kind": "overview",
            "core_font_px": 22,
            "detail_font_px": null,
            "expected_units": 7,
            "expected_markers": 2,
            "source": "/_astro/api-database-auth-flow.BZ77g4uM_Z2oxR7m.svg",
            "current_source": "http://127.0.0.1:4340/_astro/api-database-auth-flow.BZ77g4uM_Z2oxR7m.svg",
            "alt": "정상적인 모임 참가 요청이 요청·eventId 식별, API 계약 확인, 인증·요청 주체 확인, 대상 관계·행동 인가, 중복·모집·정원 확인, 트랜잭션·commit, 확정 결과 응답의 일곱 책임을 차례로 통과합니다.",
            "alt_ok": true,
            "rendered_box": {
              "x": 324,
              "y": 2525.90625,
              "width": 560,
              "height": 772
            },
            "render_scale": 1,
            "estimated_core_font_px": 22,
            "estimated_detail_font_px": null,
            "source_inspection": {
              "role": "img",
              "aria_labelledby": "api-database-auth-flow-title api-database-auth-flow-desc",
              "title_id": "api-database-auth-flow-title",
              "title_text": "모임 참가 요청의 정상 책임 순서",
              "desc_id": "api-database-auth-flow-desc",
              "desc_text": "정상적인 모임 참가 요청이 요청과 eventId 식별, API 계약 확인, 인증과 요청 주체 확인, 대상 관계와 행동 인가, 중복과 모집 상태와 정원 확인, 트랜잭션과 commit, 확정 결과 응답의 일곱 책임을 차례로 통과하는 논리적 개요입니다. 실패 분기와 동시 요청 복구는 별도의 상세 시퀀스에서 다룹니다.",
              "view_box": [
                0,
                0,
                560,
                772
              ],
              "marker_count": 2,
              "current_color_count": 0,
              "information_unit_count": 7,
              "arrow_path_count": 6,
              "lifeline_count": null,
              "parallel_frame_count": null,
              "actor_labels": [],
              "transaction_boundary_count": null
            }
          },
          {
            "id": "PBV-03-detail",
            "file": "api-database-auth-sequence.svg",
            "alt_prefix": "분리된 lifeline의 참가자 A와 B가",
            "kind": "detail",
            "core_font_px": 24,
            "detail_font_px": 20,
            "expected_units": 12,
            "expected_markers": 4,
            "expected_lifelines": 4,
            "expected_parallel_frames": 1,
            "source": "/_astro/api-database-auth-sequence.DvEcyxfU_MBgOK.svg",
            "current_source": "http://127.0.0.1:4340/_astro/api-database-auth-sequence.DvEcyxfU_MBgOK.svg",
            "alt": "분리된 lifeline의 참가자 A와 B가 마지막 한 자리에 동시에 요청하면 참가 서비스와 데이터베이스가 중복·모집 상태·정원을 트랜잭션 확정 경계에서 다시 검사해 A 한 건만 commit하고 B는 변경 없이 거절합니다. A의 성공 응답이 commit 뒤 유실되면 생성 요청을 즉시 반복하지 않고 권한 있는 현재 참가 상태·이벤트·처리 기록을 재조회해 confirmed가 capacity 이하이고 활성 중복과 부분 저장이 없음을 확인합니다.",
            "alt_ok": true,
            "rendered_box": {
              "x": 324,
              "y": 8149.484375,
              "width": 688,
              "height": 960
            },
            "render_scale": 1,
            "estimated_core_font_px": 24,
            "estimated_detail_font_px": 20,
            "source_inspection": {
              "role": "img",
              "aria_labelledby": "api-database-auth-sequence-title api-database-auth-sequence-desc",
              "title_id": "api-database-auth-sequence-title",
              "title_text": "마지막 한 자리 동시 요청과 commit 뒤 응답 유실 복구",
              "desc_id": "api-database-auth-sequence-desc",
              "desc_text": "참가자 A와 B가 분리된 lifeline에서 마지막 한 자리에 동시에 요청하면 참가 서비스와 데이터베이스가 중복, 모집 상태, 정원을 트랜잭션 확정 경계에서 다시 검사해 A 한 건만 commit하고 B는 변경 없이 거절합니다. A의 성공 응답이 commit 뒤 유실되면 생성 요청을 즉시 반복하지 않고 권한 있는 현재 상태, 이벤트, 처리 기록을 재조회해 이미 확정된 결과와 confirmed가 capacity 이하이고 활성 중복과 부분 저장이 없다는 불변식을 확인합니다.",
              "view_box": [
                0,
                0,
                688,
                960
              ],
              "marker_count": 4,
              "current_color_count": 0,
              "information_unit_count": 12,
              "arrow_path_count": 11,
              "lifeline_count": 4,
              "parallel_frame_count": 1,
              "actor_labels": [
                "참가자 A",
                "참가자 B",
                "참가 서비스",
                "데이터베이스"
              ],
              "transaction_boundary_count": 1
            }
          }
        ],
        "console_warnings_errors": [],
        "pageerrors": [],
        "blocked_external_requests": [],
        "pixel_capture_provenance": {
          "capture_nonce": "task20-pbv03-20260819203903565-577f11c34b5648",
          "capture_started_at": "2026-08-19T20:39:04.826Z",
          "capture_completed_at": "2026-08-19T20:39:05.052Z",
          "write_mode": "direct unique Playwright screenshots; no copy or reuse",
          "screenshot_path": "output/playwright/task20-api-split-evidence/screenshots/pb-028-desktop-light-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648.png",
          "screenshot_sha256": "4ec5302c6f5b130320a69d009e3e9671cf9cc3210122e5e2e7630c715498a6de",
          "screenshot_dimensions": {
            "width": 1440,
            "height": 1000
          },
          "screenshot_bytes": 361079,
          "screenshot_pixel_stats": {
            "width": 1440,
            "height": 1000,
            "pixel_count": 1440000,
            "non_background_pixel_count": 171027,
            "dark_pixel_count": 68185,
            "chromatic_pixel_count": 22880,
            "pixel_evidence_nonempty": true
          },
          "h1_crop": {
            "crop_path": "output/playwright/task20-api-split-evidence/pixel-crops/pb-028-desktop-light-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-h1.png",
            "crop_sha256": "93a78b3bee2b492d1416ad3640e47a0c81e6e087a334508f9cf2d2f33ad61e65",
            "crop_dimensions": {
              "width": 788,
              "height": 81
            },
            "crop_bytes": 10147,
            "pixel_stats": {
              "width": 788,
              "height": 81,
              "pixel_count": 63828,
              "non_background_pixel_count": 12997,
              "dark_pixel_count": 11024,
              "chromatic_pixel_count": 0,
              "pixel_evidence_nonempty": true
            }
          },
          "status_crop": {
            "crop_path": "output/playwright/task20-api-split-evidence/pixel-crops/pb-028-desktop-light-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-status.png",
            "crop_sha256": "262591e414bd6b413aeab9a0d8ff6a66fc7c70f0a268847c8cd2c32eafe79b4a",
            "crop_dimensions": {
              "width": 387,
              "height": 36
            },
            "crop_bytes": 5686,
            "pixel_stats": {
              "width": 387,
              "height": 36,
              "pixel_count": 13932,
              "non_background_pixel_count": 13521,
              "dark_pixel_count": 1612,
              "chromatic_pixel_count": 13521,
              "pixel_evidence_nonempty": true
            }
          },
          "diagram_crops": [
            {
              "diagram_id": "PBV-03-overview",
              "crop_path": "output/playwright/task20-api-split-evidence/diagram-crops/pb-028-desktop-light-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-overview.png",
              "crop_sha256": "8dd920134a771a896db5bea404482538ba890ea6f2e96315d9eef8b13f11ea54",
              "crop_dimensions": {
                "width": 560,
                "height": 772
              },
              "crop_bytes": 36818,
              "pixel_stats": {
                "width": 560,
                "height": 772,
                "pixel_count": 432320,
                "non_background_pixel_count": 84011,
                "dark_pixel_count": 24177,
                "chromatic_pixel_count": 23366,
                "pixel_evidence_nonempty": true
              },
              "alt": "정상적인 모임 참가 요청이 요청·eventId 식별, API 계약 확인, 인증·요청 주체 확인, 대상 관계·행동 인가, 중복·모집·정원 확인, 트랜잭션·commit, 확정 결과 응답의 일곱 책임을 차례로 통과합니다.",
              "source_dom_box_at_scroll_zero": {
                "x": 324,
                "y": 2525.90625,
                "width": 560,
                "height": 772
              },
              "capture_method": "loaded consumer image drawn once to a same-size top-layer canvas, cropped, and immediately removed; source theme and consumer scale preserved, sticky UI excluded"
            },
            {
              "diagram_id": "PBV-03-detail",
              "crop_path": "output/playwright/task20-api-split-evidence/diagram-crops/pb-028-desktop-light-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-detail.png",
              "crop_sha256": "c0599843dc6e5bad11b16c2c5fc9c9d4701f9cebbff8a5ad9251dec52272262a",
              "crop_dimensions": {
                "width": 688,
                "height": 960
              },
              "crop_bytes": 83811,
              "pixel_stats": {
                "width": 688,
                "height": 960,
                "pixel_count": 660480,
                "non_background_pixel_count": 56694,
                "dark_pixel_count": 34074,
                "chromatic_pixel_count": 39896,
                "pixel_evidence_nonempty": true
              },
              "alt": "분리된 lifeline의 참가자 A와 B가 마지막 한 자리에 동시에 요청하면 참가 서비스와 데이터베이스가 중복·모집 상태·정원을 트랜잭션 확정 경계에서 다시 검사해 A 한 건만 commit하고 B는 변경 없이 거절합니다. A의 성공 응답이 commit 뒤 유실되면 생성 요청을 즉시 반복하지 않고 권한 있는 현재 참가 상태·이벤트·처리 기록을 재조회해 confirmed가 capacity 이하이고 활성 중복과 부분 저장이 없음을 확인합니다.",
              "source_dom_box_at_scroll_zero": {
                "x": 324,
                "y": 8149.484375,
                "width": 688,
                "height": 960
              },
              "capture_method": "loaded consumer image drawn once to a same-size top-layer canvas, cropped, and immediately removed; source theme and consumer scale preserved, sticky UI excluded"
            }
          ]
        },
        "failure_reasons": []
      },
      {
        "record_type": "pbv03_browser_state",
        "occurrence_id": "PB-028@1440x1000-dark",
        "attempt": 8,
        "attempt_status": "success",
        "final": true,
        "route": "/04-backend-data/api-database-auth/",
        "expected_h1": "API·데이터베이스·인증",
        "expected_status_badge": "검토용 초안",
        "viewport": {
          "id": "desktop",
          "width": 1440,
          "height": 1000
        },
        "http_status": 200,
        "source_path": "/04-backend-data/api-database-auth/",
        "requested_theme": "dark",
        "observed_prefers_color_scheme": "dark",
        "observed_html_data_theme": "dark",
        "observed_effective_color_scheme": "dark",
        "browser_user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36",
        "browser_vendor": "Google Inc.",
        "main_exists": true,
        "h1_count": 1,
        "h1_text": "API·데이터베이스·인증",
        "h1_rect": {
          "left": 324,
          "top": 104,
          "right": 1112,
          "bottom": 184.640625,
          "width": 788,
          "height": 80.640625
        },
        "status_badge_count": 1,
        "status_badge_text": "검토용 초안",
        "status_badge_rect": {
          "left": 324,
          "top": 196.640625,
          "right": 710.96875,
          "bottom": 231.828125,
          "width": 386.96875,
          "height": 35.1875
        },
        "global_overflow_px": {
          "document": 0,
          "body": 0
        },
        "internal_scroll_checks": [
          {
            "tag": "pre",
            "exceeds_viewport": false,
            "internal_scroll_available": false,
            "accepted": true
          },
          {
            "tag": "table",
            "exceeds_viewport": false,
            "internal_scroll_available": false,
            "accepted": true
          },
          {
            "tag": "pre",
            "exceeds_viewport": false,
            "internal_scroll_available": false,
            "accepted": true
          }
        ],
        "internal_scroll_failure_count": 0,
        "window_scroll_y": 0,
        "document_scroll_left": 0,
        "post_capture_scroll": {
          "window_scroll_y": 0,
          "document_scroll_left": 0
        },
        "diagrams": [
          {
            "id": "PBV-03-overview",
            "file": "api-database-auth-flow.svg",
            "alt_prefix": "정상적인 모임 참가 요청이",
            "kind": "overview",
            "core_font_px": 22,
            "detail_font_px": null,
            "expected_units": 7,
            "expected_markers": 2,
            "source": "/_astro/api-database-auth-flow.BZ77g4uM_Z2oxR7m.svg",
            "current_source": "http://127.0.0.1:4340/_astro/api-database-auth-flow.BZ77g4uM_Z2oxR7m.svg",
            "alt": "정상적인 모임 참가 요청이 요청·eventId 식별, API 계약 확인, 인증·요청 주체 확인, 대상 관계·행동 인가, 중복·모집·정원 확인, 트랜잭션·commit, 확정 결과 응답의 일곱 책임을 차례로 통과합니다.",
            "alt_ok": true,
            "rendered_box": {
              "x": 324,
              "y": 2525.90625,
              "width": 560,
              "height": 772
            },
            "render_scale": 1,
            "estimated_core_font_px": 22,
            "estimated_detail_font_px": null,
            "source_inspection": {
              "role": "img",
              "aria_labelledby": "api-database-auth-flow-title api-database-auth-flow-desc",
              "title_id": "api-database-auth-flow-title",
              "title_text": "모임 참가 요청의 정상 책임 순서",
              "desc_id": "api-database-auth-flow-desc",
              "desc_text": "정상적인 모임 참가 요청이 요청과 eventId 식별, API 계약 확인, 인증과 요청 주체 확인, 대상 관계와 행동 인가, 중복과 모집 상태와 정원 확인, 트랜잭션과 commit, 확정 결과 응답의 일곱 책임을 차례로 통과하는 논리적 개요입니다. 실패 분기와 동시 요청 복구는 별도의 상세 시퀀스에서 다룹니다.",
              "view_box": [
                0,
                0,
                560,
                772
              ],
              "marker_count": 2,
              "current_color_count": 0,
              "information_unit_count": 7,
              "arrow_path_count": 6,
              "lifeline_count": null,
              "parallel_frame_count": null,
              "actor_labels": [],
              "transaction_boundary_count": null
            }
          },
          {
            "id": "PBV-03-detail",
            "file": "api-database-auth-sequence.svg",
            "alt_prefix": "분리된 lifeline의 참가자 A와 B가",
            "kind": "detail",
            "core_font_px": 24,
            "detail_font_px": 20,
            "expected_units": 12,
            "expected_markers": 4,
            "expected_lifelines": 4,
            "expected_parallel_frames": 1,
            "source": "/_astro/api-database-auth-sequence.DvEcyxfU_MBgOK.svg",
            "current_source": "http://127.0.0.1:4340/_astro/api-database-auth-sequence.DvEcyxfU_MBgOK.svg",
            "alt": "분리된 lifeline의 참가자 A와 B가 마지막 한 자리에 동시에 요청하면 참가 서비스와 데이터베이스가 중복·모집 상태·정원을 트랜잭션 확정 경계에서 다시 검사해 A 한 건만 commit하고 B는 변경 없이 거절합니다. A의 성공 응답이 commit 뒤 유실되면 생성 요청을 즉시 반복하지 않고 권한 있는 현재 참가 상태·이벤트·처리 기록을 재조회해 confirmed가 capacity 이하이고 활성 중복과 부분 저장이 없음을 확인합니다.",
            "alt_ok": true,
            "rendered_box": {
              "x": 324,
              "y": 8149.484375,
              "width": 688,
              "height": 960
            },
            "render_scale": 1,
            "estimated_core_font_px": 24,
            "estimated_detail_font_px": 20,
            "source_inspection": {
              "role": "img",
              "aria_labelledby": "api-database-auth-sequence-title api-database-auth-sequence-desc",
              "title_id": "api-database-auth-sequence-title",
              "title_text": "마지막 한 자리 동시 요청과 commit 뒤 응답 유실 복구",
              "desc_id": "api-database-auth-sequence-desc",
              "desc_text": "참가자 A와 B가 분리된 lifeline에서 마지막 한 자리에 동시에 요청하면 참가 서비스와 데이터베이스가 중복, 모집 상태, 정원을 트랜잭션 확정 경계에서 다시 검사해 A 한 건만 commit하고 B는 변경 없이 거절합니다. A의 성공 응답이 commit 뒤 유실되면 생성 요청을 즉시 반복하지 않고 권한 있는 현재 상태, 이벤트, 처리 기록을 재조회해 이미 확정된 결과와 confirmed가 capacity 이하이고 활성 중복과 부분 저장이 없다는 불변식을 확인합니다.",
              "view_box": [
                0,
                0,
                688,
                960
              ],
              "marker_count": 4,
              "current_color_count": 0,
              "information_unit_count": 12,
              "arrow_path_count": 11,
              "lifeline_count": 4,
              "parallel_frame_count": 1,
              "actor_labels": [
                "참가자 A",
                "참가자 B",
                "참가 서비스",
                "데이터베이스"
              ],
              "transaction_boundary_count": 1
            }
          }
        ],
        "console_warnings_errors": [],
        "pageerrors": [],
        "blocked_external_requests": [],
        "pixel_capture_provenance": {
          "capture_nonce": "task20-pbv03-20260819203903565-577f11c34b5648",
          "capture_started_at": "2026-08-19T20:39:06.226Z",
          "capture_completed_at": "2026-08-19T20:39:06.433Z",
          "write_mode": "direct unique Playwright screenshots; no copy or reuse",
          "screenshot_path": "output/playwright/task20-api-split-evidence/screenshots/pb-028-desktop-dark-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648.png",
          "screenshot_sha256": "386a1e571d3c1c0c0b656dc10535f9cf6a7826371ad5271d16fb13f857ab6e96",
          "screenshot_dimensions": {
            "width": 1440,
            "height": 1000
          },
          "screenshot_bytes": 359112,
          "screenshot_pixel_stats": {
            "width": 1440,
            "height": 1000,
            "pixel_count": 1440000,
            "non_background_pixel_count": 1426048,
            "dark_pixel_count": 1367440,
            "chromatic_pixel_count": 22585,
            "pixel_evidence_nonempty": true
          },
          "h1_crop": {
            "crop_path": "output/playwright/task20-api-split-evidence/pixel-crops/pb-028-desktop-dark-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-h1.png",
            "crop_sha256": "89386d64d5fa9bd67997a3c11e9bcae39fd36db8b720419332f91c587b91c4af",
            "crop_dimensions": {
              "width": 788,
              "height": 81
            },
            "crop_bytes": 10150,
            "pixel_stats": {
              "width": 788,
              "height": 81,
              "pixel_count": 63828,
              "non_background_pixel_count": 54068,
              "dark_pixel_count": 52385,
              "chromatic_pixel_count": 0,
              "pixel_evidence_nonempty": true
            }
          },
          "status_crop": {
            "crop_path": "output/playwright/task20-api-split-evidence/pixel-crops/pb-028-desktop-dark-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-status.png",
            "crop_sha256": "bd19e2fae46f1c9aea38e72303fdcb020c17fdf1467763e3de0bb5eb2cb5da2c",
            "crop_dimensions": {
              "width": 387,
              "height": 36
            },
            "crop_bytes": 5625,
            "pixel_stats": {
              "width": 387,
              "height": 36,
              "pixel_count": 13932,
              "non_background_pixel_count": 13932,
              "dark_pixel_count": 11902,
              "chromatic_pixel_count": 13513,
              "pixel_evidence_nonempty": true
            }
          },
          "diagram_crops": [
            {
              "diagram_id": "PBV-03-overview",
              "crop_path": "output/playwright/task20-api-split-evidence/diagram-crops/pb-028-desktop-dark-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-overview.png",
              "crop_sha256": "5d94edf8a640a68233d8aa4278fdd56842ad29c977cde287511cc9230cb0558c",
              "crop_dimensions": {
                "width": 560,
                "height": 772
              },
              "crop_bytes": 37509,
              "pixel_stats": {
                "width": 560,
                "height": 772,
                "pixel_count": 432320,
                "non_background_pixel_count": 425516,
                "dark_pixel_count": 406066,
                "chromatic_pixel_count": 197719,
                "pixel_evidence_nonempty": true
              },
              "alt": "정상적인 모임 참가 요청이 요청·eventId 식별, API 계약 확인, 인증·요청 주체 확인, 대상 관계·행동 인가, 중복·모집·정원 확인, 트랜잭션·commit, 확정 결과 응답의 일곱 책임을 차례로 통과합니다.",
              "source_dom_box_at_scroll_zero": {
                "x": 324,
                "y": 2525.90625,
                "width": 560,
                "height": 772
              },
              "capture_method": "loaded consumer image drawn once to a same-size top-layer canvas, cropped, and immediately removed; source theme and consumer scale preserved, sticky UI excluded"
            },
            {
              "diagram_id": "PBV-03-detail",
              "crop_path": "output/playwright/task20-api-split-evidence/diagram-crops/pb-028-desktop-dark-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-detail.png",
              "crop_sha256": "d395394498dcae3db9759cf9dff8c17a53903cb07e6944488be8841bc2e8edc3",
              "crop_dimensions": {
                "width": 688,
                "height": 960
              },
              "crop_bytes": 85555,
              "pixel_stats": {
                "width": 688,
                "height": 960,
                "pixel_count": 660480,
                "non_background_pixel_count": 649546,
                "dark_pixel_count": 617327,
                "chromatic_pixel_count": 158534,
                "pixel_evidence_nonempty": true
              },
              "alt": "분리된 lifeline의 참가자 A와 B가 마지막 한 자리에 동시에 요청하면 참가 서비스와 데이터베이스가 중복·모집 상태·정원을 트랜잭션 확정 경계에서 다시 검사해 A 한 건만 commit하고 B는 변경 없이 거절합니다. A의 성공 응답이 commit 뒤 유실되면 생성 요청을 즉시 반복하지 않고 권한 있는 현재 참가 상태·이벤트·처리 기록을 재조회해 confirmed가 capacity 이하이고 활성 중복과 부분 저장이 없음을 확인합니다.",
              "source_dom_box_at_scroll_zero": {
                "x": 324,
                "y": 8149.484375,
                "width": 688,
                "height": 960
              },
              "capture_method": "loaded consumer image drawn once to a same-size top-layer canvas, cropped, and immediately removed; source theme and consumer scale preserved, sticky UI excluded"
            }
          ]
        },
        "failure_reasons": []
      },
      {
        "record_type": "pbv03_browser_state",
        "occurrence_id": "PB-028@1024x768-light",
        "attempt": 8,
        "attempt_status": "success",
        "final": true,
        "route": "/04-backend-data/api-database-auth/",
        "expected_h1": "API·데이터베이스·인증",
        "expected_status_badge": "검토용 초안",
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        },
        "http_status": 200,
        "source_path": "/04-backend-data/api-database-auth/",
        "requested_theme": "light",
        "observed_prefers_color_scheme": "light",
        "observed_html_data_theme": "light",
        "observed_effective_color_scheme": "light",
        "browser_user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36",
        "browser_vendor": "Google Inc.",
        "main_exists": true,
        "h1_count": 1,
        "h1_text": "API·데이터베이스·인증",
        "h1_rect": {
          "left": 316,
          "top": 152,
          "right": 1008,
          "bottom": 225.71875,
          "width": 692,
          "height": 73.71875
        },
        "status_badge_count": 1,
        "status_badge_text": "검토용 초안",
        "status_badge_rect": {
          "left": 316,
          "top": 237.71875,
          "right": 702.96875,
          "bottom": 272.90625,
          "width": 386.96875,
          "height": 35.1875
        },
        "global_overflow_px": {
          "document": 0,
          "body": 0
        },
        "internal_scroll_checks": [
          {
            "tag": "pre",
            "exceeds_viewport": false,
            "internal_scroll_available": false,
            "accepted": true
          },
          {
            "tag": "table",
            "exceeds_viewport": false,
            "internal_scroll_available": false,
            "accepted": true
          },
          {
            "tag": "pre",
            "exceeds_viewport": false,
            "internal_scroll_available": false,
            "accepted": true
          }
        ],
        "internal_scroll_failure_count": 0,
        "window_scroll_y": 0,
        "document_scroll_left": 0,
        "post_capture_scroll": {
          "window_scroll_y": 0,
          "document_scroll_left": 0
        },
        "diagrams": [
          {
            "id": "PBV-03-overview",
            "file": "api-database-auth-flow.svg",
            "alt_prefix": "정상적인 모임 참가 요청이",
            "kind": "overview",
            "core_font_px": 22,
            "detail_font_px": null,
            "expected_units": 7,
            "expected_markers": 2,
            "source": "/_astro/api-database-auth-flow.BZ77g4uM_Z2oxR7m.svg",
            "current_source": "http://127.0.0.1:4340/_astro/api-database-auth-flow.BZ77g4uM_Z2oxR7m.svg",
            "alt": "정상적인 모임 참가 요청이 요청·eventId 식별, API 계약 확인, 인증·요청 주체 확인, 대상 관계·행동 인가, 중복·모집·정원 확인, 트랜잭션·commit, 확정 결과 응답의 일곱 책임을 차례로 통과합니다.",
            "alt_ok": true,
            "rendered_box": {
              "x": 316,
              "y": 2762.984375,
              "width": 560,
              "height": 772
            },
            "render_scale": 1,
            "estimated_core_font_px": 22,
            "estimated_detail_font_px": null,
            "source_inspection": {
              "role": "img",
              "aria_labelledby": "api-database-auth-flow-title api-database-auth-flow-desc",
              "title_id": "api-database-auth-flow-title",
              "title_text": "모임 참가 요청의 정상 책임 순서",
              "desc_id": "api-database-auth-flow-desc",
              "desc_text": "정상적인 모임 참가 요청이 요청과 eventId 식별, API 계약 확인, 인증과 요청 주체 확인, 대상 관계와 행동 인가, 중복과 모집 상태와 정원 확인, 트랜잭션과 commit, 확정 결과 응답의 일곱 책임을 차례로 통과하는 논리적 개요입니다. 실패 분기와 동시 요청 복구는 별도의 상세 시퀀스에서 다룹니다.",
              "view_box": [
                0,
                0,
                560,
                772
              ],
              "marker_count": 2,
              "current_color_count": 0,
              "information_unit_count": 7,
              "arrow_path_count": 6,
              "lifeline_count": null,
              "parallel_frame_count": null,
              "actor_labels": [],
              "transaction_boundary_count": null
            }
          },
          {
            "id": "PBV-03-detail",
            "file": "api-database-auth-sequence.svg",
            "alt_prefix": "분리된 lifeline의 참가자 A와 B가",
            "kind": "detail",
            "core_font_px": 24,
            "detail_font_px": 20,
            "expected_units": 12,
            "expected_markers": 4,
            "expected_lifelines": 4,
            "expected_parallel_frames": 1,
            "source": "/_astro/api-database-auth-sequence.DvEcyxfU_MBgOK.svg",
            "current_source": "http://127.0.0.1:4340/_astro/api-database-auth-sequence.DvEcyxfU_MBgOK.svg",
            "alt": "분리된 lifeline의 참가자 A와 B가 마지막 한 자리에 동시에 요청하면 참가 서비스와 데이터베이스가 중복·모집 상태·정원을 트랜잭션 확정 경계에서 다시 검사해 A 한 건만 commit하고 B는 변경 없이 거절합니다. A의 성공 응답이 commit 뒤 유실되면 생성 요청을 즉시 반복하지 않고 권한 있는 현재 참가 상태·이벤트·처리 기록을 재조회해 confirmed가 capacity 이하이고 활성 중복과 부분 저장이 없음을 확인합니다.",
            "alt_ok": true,
            "rendered_box": {
              "x": 316,
              "y": 8708.15625,
              "width": 688,
              "height": 960
            },
            "render_scale": 1,
            "estimated_core_font_px": 24,
            "estimated_detail_font_px": 20,
            "source_inspection": {
              "role": "img",
              "aria_labelledby": "api-database-auth-sequence-title api-database-auth-sequence-desc",
              "title_id": "api-database-auth-sequence-title",
              "title_text": "마지막 한 자리 동시 요청과 commit 뒤 응답 유실 복구",
              "desc_id": "api-database-auth-sequence-desc",
              "desc_text": "참가자 A와 B가 분리된 lifeline에서 마지막 한 자리에 동시에 요청하면 참가 서비스와 데이터베이스가 중복, 모집 상태, 정원을 트랜잭션 확정 경계에서 다시 검사해 A 한 건만 commit하고 B는 변경 없이 거절합니다. A의 성공 응답이 commit 뒤 유실되면 생성 요청을 즉시 반복하지 않고 권한 있는 현재 상태, 이벤트, 처리 기록을 재조회해 이미 확정된 결과와 confirmed가 capacity 이하이고 활성 중복과 부분 저장이 없다는 불변식을 확인합니다.",
              "view_box": [
                0,
                0,
                688,
                960
              ],
              "marker_count": 4,
              "current_color_count": 0,
              "information_unit_count": 12,
              "arrow_path_count": 11,
              "lifeline_count": 4,
              "parallel_frame_count": 1,
              "actor_labels": [
                "참가자 A",
                "참가자 B",
                "참가 서비스",
                "데이터베이스"
              ],
              "transaction_boundary_count": 1
            }
          }
        ],
        "console_warnings_errors": [],
        "pageerrors": [],
        "blocked_external_requests": [],
        "pixel_capture_provenance": {
          "capture_nonce": "task20-pbv03-20260819203903565-577f11c34b5648",
          "capture_started_at": "2026-08-19T20:39:07.676Z",
          "capture_completed_at": "2026-08-19T20:39:07.868Z",
          "write_mode": "direct unique Playwright screenshots; no copy or reuse",
          "screenshot_path": "output/playwright/task20-api-split-evidence/screenshots/pb-028-tablet-light-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648.png",
          "screenshot_sha256": "6399c67bd9e6093532c1c72a333cbd14dc51ef7703fac9e255c47e55a0975a85",
          "screenshot_dimensions": {
            "width": 1024,
            "height": 768
          },
          "screenshot_bytes": 185110,
          "screenshot_pixel_stats": {
            "width": 1024,
            "height": 768,
            "pixel_count": 786432,
            "non_background_pixel_count": 104604,
            "dark_pixel_count": 44293,
            "chromatic_pixel_count": 22261,
            "pixel_evidence_nonempty": true
          },
          "h1_crop": {
            "crop_path": "output/playwright/task20-api-split-evidence/pixel-crops/pb-028-tablet-light-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-h1.png",
            "crop_sha256": "0a61a32bea66ba4db043dede6262c570bf67911083a54e607483ba7638faec07",
            "crop_dimensions": {
              "width": 692,
              "height": 74
            },
            "crop_bytes": 9250,
            "pixel_stats": {
              "width": 692,
              "height": 74,
              "pixel_count": 51208,
              "non_background_pixel_count": 11018,
              "dark_pixel_count": 9228,
              "chromatic_pixel_count": 0,
              "pixel_evidence_nonempty": true
            }
          },
          "status_crop": {
            "crop_path": "output/playwright/task20-api-split-evidence/pixel-crops/pb-028-tablet-light-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-status.png",
            "crop_sha256": "8c953281581f4cf8148e7dbf41f138334f0d05f81f581fb0e65fc346827e477d",
            "crop_dimensions": {
              "width": 387,
              "height": 36
            },
            "crop_bytes": 5678,
            "pixel_stats": {
              "width": 387,
              "height": 36,
              "pixel_count": 13932,
              "non_background_pixel_count": 13521,
              "dark_pixel_count": 1612,
              "chromatic_pixel_count": 13521,
              "pixel_evidence_nonempty": true
            }
          },
          "diagram_crops": [
            {
              "diagram_id": "PBV-03-overview",
              "crop_path": "output/playwright/task20-api-split-evidence/diagram-crops/pb-028-tablet-light-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-overview.png",
              "crop_sha256": "8dd920134a771a896db5bea404482538ba890ea6f2e96315d9eef8b13f11ea54",
              "crop_dimensions": {
                "width": 560,
                "height": 772
              },
              "crop_bytes": 36818,
              "pixel_stats": {
                "width": 560,
                "height": 772,
                "pixel_count": 432320,
                "non_background_pixel_count": 84011,
                "dark_pixel_count": 24177,
                "chromatic_pixel_count": 23366,
                "pixel_evidence_nonempty": true
              },
              "alt": "정상적인 모임 참가 요청이 요청·eventId 식별, API 계약 확인, 인증·요청 주체 확인, 대상 관계·행동 인가, 중복·모집·정원 확인, 트랜잭션·commit, 확정 결과 응답의 일곱 책임을 차례로 통과합니다.",
              "source_dom_box_at_scroll_zero": {
                "x": 316,
                "y": 2762.984375,
                "width": 560,
                "height": 772
              },
              "capture_method": "loaded consumer image drawn once to a same-size top-layer canvas, cropped, and immediately removed; source theme and consumer scale preserved, sticky UI excluded"
            },
            {
              "diagram_id": "PBV-03-detail",
              "crop_path": "output/playwright/task20-api-split-evidence/diagram-crops/pb-028-tablet-light-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-detail.png",
              "crop_sha256": "c0599843dc6e5bad11b16c2c5fc9c9d4701f9cebbff8a5ad9251dec52272262a",
              "crop_dimensions": {
                "width": 688,
                "height": 960
              },
              "crop_bytes": 83811,
              "pixel_stats": {
                "width": 688,
                "height": 960,
                "pixel_count": 660480,
                "non_background_pixel_count": 56694,
                "dark_pixel_count": 34074,
                "chromatic_pixel_count": 39896,
                "pixel_evidence_nonempty": true
              },
              "alt": "분리된 lifeline의 참가자 A와 B가 마지막 한 자리에 동시에 요청하면 참가 서비스와 데이터베이스가 중복·모집 상태·정원을 트랜잭션 확정 경계에서 다시 검사해 A 한 건만 commit하고 B는 변경 없이 거절합니다. A의 성공 응답이 commit 뒤 유실되면 생성 요청을 즉시 반복하지 않고 권한 있는 현재 참가 상태·이벤트·처리 기록을 재조회해 confirmed가 capacity 이하이고 활성 중복과 부분 저장이 없음을 확인합니다.",
              "source_dom_box_at_scroll_zero": {
                "x": 316,
                "y": 8708.15625,
                "width": 688,
                "height": 960
              },
              "capture_method": "loaded consumer image drawn once to a same-size top-layer canvas, cropped, and immediately removed; source theme and consumer scale preserved, sticky UI excluded"
            }
          ]
        },
        "failure_reasons": []
      },
      {
        "record_type": "pbv03_browser_state",
        "occurrence_id": "PB-028@1024x768-dark",
        "attempt": 8,
        "attempt_status": "success",
        "final": true,
        "route": "/04-backend-data/api-database-auth/",
        "expected_h1": "API·데이터베이스·인증",
        "expected_status_badge": "검토용 초안",
        "viewport": {
          "id": "tablet",
          "width": 1024,
          "height": 768
        },
        "http_status": 200,
        "source_path": "/04-backend-data/api-database-auth/",
        "requested_theme": "dark",
        "observed_prefers_color_scheme": "dark",
        "observed_html_data_theme": "dark",
        "observed_effective_color_scheme": "dark",
        "browser_user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36",
        "browser_vendor": "Google Inc.",
        "main_exists": true,
        "h1_count": 1,
        "h1_text": "API·데이터베이스·인증",
        "h1_rect": {
          "left": 316,
          "top": 152,
          "right": 1008,
          "bottom": 225.71875,
          "width": 692,
          "height": 73.71875
        },
        "status_badge_count": 1,
        "status_badge_text": "검토용 초안",
        "status_badge_rect": {
          "left": 316,
          "top": 237.71875,
          "right": 702.96875,
          "bottom": 272.90625,
          "width": 386.96875,
          "height": 35.1875
        },
        "global_overflow_px": {
          "document": 0,
          "body": 0
        },
        "internal_scroll_checks": [
          {
            "tag": "pre",
            "exceeds_viewport": false,
            "internal_scroll_available": false,
            "accepted": true
          },
          {
            "tag": "table",
            "exceeds_viewport": false,
            "internal_scroll_available": false,
            "accepted": true
          },
          {
            "tag": "pre",
            "exceeds_viewport": false,
            "internal_scroll_available": false,
            "accepted": true
          }
        ],
        "internal_scroll_failure_count": 0,
        "window_scroll_y": 0,
        "document_scroll_left": 0,
        "post_capture_scroll": {
          "window_scroll_y": 0,
          "document_scroll_left": 0
        },
        "diagrams": [
          {
            "id": "PBV-03-overview",
            "file": "api-database-auth-flow.svg",
            "alt_prefix": "정상적인 모임 참가 요청이",
            "kind": "overview",
            "core_font_px": 22,
            "detail_font_px": null,
            "expected_units": 7,
            "expected_markers": 2,
            "source": "/_astro/api-database-auth-flow.BZ77g4uM_Z2oxR7m.svg",
            "current_source": "http://127.0.0.1:4340/_astro/api-database-auth-flow.BZ77g4uM_Z2oxR7m.svg",
            "alt": "정상적인 모임 참가 요청이 요청·eventId 식별, API 계약 확인, 인증·요청 주체 확인, 대상 관계·행동 인가, 중복·모집·정원 확인, 트랜잭션·commit, 확정 결과 응답의 일곱 책임을 차례로 통과합니다.",
            "alt_ok": true,
            "rendered_box": {
              "x": 316,
              "y": 2762.984375,
              "width": 560,
              "height": 772
            },
            "render_scale": 1,
            "estimated_core_font_px": 22,
            "estimated_detail_font_px": null,
            "source_inspection": {
              "role": "img",
              "aria_labelledby": "api-database-auth-flow-title api-database-auth-flow-desc",
              "title_id": "api-database-auth-flow-title",
              "title_text": "모임 참가 요청의 정상 책임 순서",
              "desc_id": "api-database-auth-flow-desc",
              "desc_text": "정상적인 모임 참가 요청이 요청과 eventId 식별, API 계약 확인, 인증과 요청 주체 확인, 대상 관계와 행동 인가, 중복과 모집 상태와 정원 확인, 트랜잭션과 commit, 확정 결과 응답의 일곱 책임을 차례로 통과하는 논리적 개요입니다. 실패 분기와 동시 요청 복구는 별도의 상세 시퀀스에서 다룹니다.",
              "view_box": [
                0,
                0,
                560,
                772
              ],
              "marker_count": 2,
              "current_color_count": 0,
              "information_unit_count": 7,
              "arrow_path_count": 6,
              "lifeline_count": null,
              "parallel_frame_count": null,
              "actor_labels": [],
              "transaction_boundary_count": null
            }
          },
          {
            "id": "PBV-03-detail",
            "file": "api-database-auth-sequence.svg",
            "alt_prefix": "분리된 lifeline의 참가자 A와 B가",
            "kind": "detail",
            "core_font_px": 24,
            "detail_font_px": 20,
            "expected_units": 12,
            "expected_markers": 4,
            "expected_lifelines": 4,
            "expected_parallel_frames": 1,
            "source": "/_astro/api-database-auth-sequence.DvEcyxfU_MBgOK.svg",
            "current_source": "http://127.0.0.1:4340/_astro/api-database-auth-sequence.DvEcyxfU_MBgOK.svg",
            "alt": "분리된 lifeline의 참가자 A와 B가 마지막 한 자리에 동시에 요청하면 참가 서비스와 데이터베이스가 중복·모집 상태·정원을 트랜잭션 확정 경계에서 다시 검사해 A 한 건만 commit하고 B는 변경 없이 거절합니다. A의 성공 응답이 commit 뒤 유실되면 생성 요청을 즉시 반복하지 않고 권한 있는 현재 참가 상태·이벤트·처리 기록을 재조회해 confirmed가 capacity 이하이고 활성 중복과 부분 저장이 없음을 확인합니다.",
            "alt_ok": true,
            "rendered_box": {
              "x": 316,
              "y": 8708.15625,
              "width": 688,
              "height": 960
            },
            "render_scale": 1,
            "estimated_core_font_px": 24,
            "estimated_detail_font_px": 20,
            "source_inspection": {
              "role": "img",
              "aria_labelledby": "api-database-auth-sequence-title api-database-auth-sequence-desc",
              "title_id": "api-database-auth-sequence-title",
              "title_text": "마지막 한 자리 동시 요청과 commit 뒤 응답 유실 복구",
              "desc_id": "api-database-auth-sequence-desc",
              "desc_text": "참가자 A와 B가 분리된 lifeline에서 마지막 한 자리에 동시에 요청하면 참가 서비스와 데이터베이스가 중복, 모집 상태, 정원을 트랜잭션 확정 경계에서 다시 검사해 A 한 건만 commit하고 B는 변경 없이 거절합니다. A의 성공 응답이 commit 뒤 유실되면 생성 요청을 즉시 반복하지 않고 권한 있는 현재 상태, 이벤트, 처리 기록을 재조회해 이미 확정된 결과와 confirmed가 capacity 이하이고 활성 중복과 부분 저장이 없다는 불변식을 확인합니다.",
              "view_box": [
                0,
                0,
                688,
                960
              ],
              "marker_count": 4,
              "current_color_count": 0,
              "information_unit_count": 12,
              "arrow_path_count": 11,
              "lifeline_count": 4,
              "parallel_frame_count": 1,
              "actor_labels": [
                "참가자 A",
                "참가자 B",
                "참가 서비스",
                "데이터베이스"
              ],
              "transaction_boundary_count": 1
            }
          }
        ],
        "console_warnings_errors": [],
        "pageerrors": [],
        "blocked_external_requests": [],
        "pixel_capture_provenance": {
          "capture_nonce": "task20-pbv03-20260819203903565-577f11c34b5648",
          "capture_started_at": "2026-08-19T20:39:09.093Z",
          "capture_completed_at": "2026-08-19T20:39:09.284Z",
          "write_mode": "direct unique Playwright screenshots; no copy or reuse",
          "screenshot_path": "output/playwright/task20-api-split-evidence/screenshots/pb-028-tablet-dark-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648.png",
          "screenshot_sha256": "e8a7fdad8c0ec445fbcfd949c824bfc319806808d9eabb5f068e6570819d13fb",
          "screenshot_dimensions": {
            "width": 1024,
            "height": 768
          },
          "screenshot_bytes": 183211,
          "screenshot_pixel_stats": {
            "width": 1024,
            "height": 768,
            "pixel_count": 786432,
            "non_background_pixel_count": 776709,
            "dark_pixel_count": 736856,
            "chromatic_pixel_count": 22185,
            "pixel_evidence_nonempty": true
          },
          "h1_crop": {
            "crop_path": "output/playwright/task20-api-split-evidence/pixel-crops/pb-028-tablet-dark-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-h1.png",
            "crop_sha256": "7071c5366916a788da3715d8ea05992a71736c290ca079d420502b65cbdbe78e",
            "crop_dimensions": {
              "width": 692,
              "height": 74
            },
            "crop_bytes": 9245,
            "pixel_stats": {
              "width": 692,
              "height": 74,
              "pixel_count": 51208,
              "non_background_pixel_count": 43342,
              "dark_pixel_count": 41658,
              "chromatic_pixel_count": 0,
              "pixel_evidence_nonempty": true
            }
          },
          "status_crop": {
            "crop_path": "output/playwright/task20-api-split-evidence/pixel-crops/pb-028-tablet-dark-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-status.png",
            "crop_sha256": "d4525aec6c93b1ff62e33f3c631c8166a1fbf9e25beb6cf1be76c929dd50c614",
            "crop_dimensions": {
              "width": 387,
              "height": 36
            },
            "crop_bytes": 5626,
            "pixel_stats": {
              "width": 387,
              "height": 36,
              "pixel_count": 13932,
              "non_background_pixel_count": 13932,
              "dark_pixel_count": 11902,
              "chromatic_pixel_count": 13513,
              "pixel_evidence_nonempty": true
            }
          },
          "diagram_crops": [
            {
              "diagram_id": "PBV-03-overview",
              "crop_path": "output/playwright/task20-api-split-evidence/diagram-crops/pb-028-tablet-dark-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-overview.png",
              "crop_sha256": "5d94edf8a640a68233d8aa4278fdd56842ad29c977cde287511cc9230cb0558c",
              "crop_dimensions": {
                "width": 560,
                "height": 772
              },
              "crop_bytes": 37509,
              "pixel_stats": {
                "width": 560,
                "height": 772,
                "pixel_count": 432320,
                "non_background_pixel_count": 425516,
                "dark_pixel_count": 406066,
                "chromatic_pixel_count": 197719,
                "pixel_evidence_nonempty": true
              },
              "alt": "정상적인 모임 참가 요청이 요청·eventId 식별, API 계약 확인, 인증·요청 주체 확인, 대상 관계·행동 인가, 중복·모집·정원 확인, 트랜잭션·commit, 확정 결과 응답의 일곱 책임을 차례로 통과합니다.",
              "source_dom_box_at_scroll_zero": {
                "x": 316,
                "y": 2762.984375,
                "width": 560,
                "height": 772
              },
              "capture_method": "loaded consumer image drawn once to a same-size top-layer canvas, cropped, and immediately removed; source theme and consumer scale preserved, sticky UI excluded"
            },
            {
              "diagram_id": "PBV-03-detail",
              "crop_path": "output/playwright/task20-api-split-evidence/diagram-crops/pb-028-tablet-dark-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-detail.png",
              "crop_sha256": "d395394498dcae3db9759cf9dff8c17a53903cb07e6944488be8841bc2e8edc3",
              "crop_dimensions": {
                "width": 688,
                "height": 960
              },
              "crop_bytes": 85555,
              "pixel_stats": {
                "width": 688,
                "height": 960,
                "pixel_count": 660480,
                "non_background_pixel_count": 649546,
                "dark_pixel_count": 617327,
                "chromatic_pixel_count": 158534,
                "pixel_evidence_nonempty": true
              },
              "alt": "분리된 lifeline의 참가자 A와 B가 마지막 한 자리에 동시에 요청하면 참가 서비스와 데이터베이스가 중복·모집 상태·정원을 트랜잭션 확정 경계에서 다시 검사해 A 한 건만 commit하고 B는 변경 없이 거절합니다. A의 성공 응답이 commit 뒤 유실되면 생성 요청을 즉시 반복하지 않고 권한 있는 현재 참가 상태·이벤트·처리 기록을 재조회해 confirmed가 capacity 이하이고 활성 중복과 부분 저장이 없음을 확인합니다.",
              "source_dom_box_at_scroll_zero": {
                "x": 316,
                "y": 8708.15625,
                "width": 688,
                "height": 960
              },
              "capture_method": "loaded consumer image drawn once to a same-size top-layer canvas, cropped, and immediately removed; source theme and consumer scale preserved, sticky UI excluded"
            }
          ]
        },
        "failure_reasons": []
      },
      {
        "record_type": "pbv03_browser_state",
        "occurrence_id": "PB-028@390x844-light",
        "attempt": 8,
        "attempt_status": "success",
        "final": true,
        "route": "/04-backend-data/api-database-auth/",
        "expected_h1": "API·데이터베이스·인증",
        "expected_status_badge": "검토용 초안",
        "viewport": {
          "id": "mobile",
          "width": 390,
          "height": 844
        },
        "http_status": 200,
        "source_path": "/04-backend-data/api-database-auth/",
        "requested_theme": "light",
        "observed_prefers_color_scheme": "light",
        "observed_html_data_theme": "light",
        "observed_effective_color_scheme": "light",
        "browser_user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36",
        "browser_vendor": "Google Inc.",
        "main_exists": true,
        "h1_count": 1,
        "h1_text": "API·데이터베이스·인증",
        "h1_rect": {
          "left": 16,
          "top": 144,
          "right": 374,
          "bottom": 186,
          "width": 358,
          "height": 42
        },
        "status_badge_count": 1,
        "status_badge_text": "검토용 초안",
        "status_badge_rect": {
          "left": 16,
          "top": 198,
          "right": 374,
          "bottom": 254.375,
          "width": 358,
          "height": 56.375
        },
        "global_overflow_px": {
          "document": 0,
          "body": 0
        },
        "internal_scroll_checks": [
          {
            "tag": "pre",
            "exceeds_viewport": false,
            "internal_scroll_available": true,
            "accepted": true
          },
          {
            "tag": "table",
            "exceeds_viewport": false,
            "internal_scroll_available": false,
            "accepted": true
          },
          {
            "tag": "pre",
            "exceeds_viewport": false,
            "internal_scroll_available": true,
            "accepted": true
          }
        ],
        "internal_scroll_failure_count": 0,
        "window_scroll_y": 0,
        "document_scroll_left": 0,
        "post_capture_scroll": {
          "window_scroll_y": 0,
          "document_scroll_left": 0
        },
        "diagrams": [
          {
            "id": "PBV-03-overview",
            "file": "api-database-auth-flow.svg",
            "alt_prefix": "정상적인 모임 참가 요청이",
            "kind": "overview",
            "core_font_px": 22,
            "detail_font_px": null,
            "expected_units": 7,
            "expected_markers": 2,
            "source": "/_astro/api-database-auth-flow.BZ77g4uM_Z2oxR7m.svg",
            "current_source": "http://127.0.0.1:4340/_astro/api-database-auth-flow.BZ77g4uM_Z2oxR7m.svg",
            "alt": "정상적인 모임 참가 요청이 요청·eventId 식별, API 계약 확인, 인증·요청 주체 확인, 대상 관계·행동 인가, 중복·모집·정원 확인, 트랜잭션·commit, 확정 결과 응답의 일곱 책임을 차례로 통과합니다.",
            "alt_ok": true,
            "rendered_box": {
              "x": 16,
              "y": 3912.9375,
              "width": 358,
              "height": 493.515625
            },
            "render_scale": 0.6392857142857142,
            "estimated_core_font_px": 14.064285714285713,
            "estimated_detail_font_px": null,
            "source_inspection": {
              "role": "img",
              "aria_labelledby": "api-database-auth-flow-title api-database-auth-flow-desc",
              "title_id": "api-database-auth-flow-title",
              "title_text": "모임 참가 요청의 정상 책임 순서",
              "desc_id": "api-database-auth-flow-desc",
              "desc_text": "정상적인 모임 참가 요청이 요청과 eventId 식별, API 계약 확인, 인증과 요청 주체 확인, 대상 관계와 행동 인가, 중복과 모집 상태와 정원 확인, 트랜잭션과 commit, 확정 결과 응답의 일곱 책임을 차례로 통과하는 논리적 개요입니다. 실패 분기와 동시 요청 복구는 별도의 상세 시퀀스에서 다룹니다.",
              "view_box": [
                0,
                0,
                560,
                772
              ],
              "marker_count": 2,
              "current_color_count": 0,
              "information_unit_count": 7,
              "arrow_path_count": 6,
              "lifeline_count": null,
              "parallel_frame_count": null,
              "actor_labels": [],
              "transaction_boundary_count": null
            }
          },
          {
            "id": "PBV-03-detail",
            "file": "api-database-auth-sequence.svg",
            "alt_prefix": "분리된 lifeline의 참가자 A와 B가",
            "kind": "detail",
            "core_font_px": 24,
            "detail_font_px": 20,
            "expected_units": 12,
            "expected_markers": 4,
            "expected_lifelines": 4,
            "expected_parallel_frames": 1,
            "source": "/_astro/api-database-auth-sequence.DvEcyxfU_MBgOK.svg",
            "current_source": "http://127.0.0.1:4340/_astro/api-database-auth-sequence.DvEcyxfU_MBgOK.svg",
            "alt": "분리된 lifeline의 참가자 A와 B가 마지막 한 자리에 동시에 요청하면 참가 서비스와 데이터베이스가 중복·모집 상태·정원을 트랜잭션 확정 경계에서 다시 검사해 A 한 건만 commit하고 B는 변경 없이 거절합니다. A의 성공 응답이 commit 뒤 유실되면 생성 요청을 즉시 반복하지 않고 권한 있는 현재 참가 상태·이벤트·처리 기록을 재조회해 confirmed가 capacity 이하이고 활성 중복과 부분 저장이 없음을 확인합니다.",
            "alt_ok": true,
            "rendered_box": {
              "x": 16,
              "y": 12310.109375,
              "width": 358,
              "height": 499.53125
            },
            "render_scale": 0.5203488372093024,
            "estimated_core_font_px": 12.488372093023257,
            "estimated_detail_font_px": 10.406976744186046,
            "source_inspection": {
              "role": "img",
              "aria_labelledby": "api-database-auth-sequence-title api-database-auth-sequence-desc",
              "title_id": "api-database-auth-sequence-title",
              "title_text": "마지막 한 자리 동시 요청과 commit 뒤 응답 유실 복구",
              "desc_id": "api-database-auth-sequence-desc",
              "desc_text": "참가자 A와 B가 분리된 lifeline에서 마지막 한 자리에 동시에 요청하면 참가 서비스와 데이터베이스가 중복, 모집 상태, 정원을 트랜잭션 확정 경계에서 다시 검사해 A 한 건만 commit하고 B는 변경 없이 거절합니다. A의 성공 응답이 commit 뒤 유실되면 생성 요청을 즉시 반복하지 않고 권한 있는 현재 상태, 이벤트, 처리 기록을 재조회해 이미 확정된 결과와 confirmed가 capacity 이하이고 활성 중복과 부분 저장이 없다는 불변식을 확인합니다.",
              "view_box": [
                0,
                0,
                688,
                960
              ],
              "marker_count": 4,
              "current_color_count": 0,
              "information_unit_count": 12,
              "arrow_path_count": 11,
              "lifeline_count": 4,
              "parallel_frame_count": 1,
              "actor_labels": [
                "참가자 A",
                "참가자 B",
                "참가 서비스",
                "데이터베이스"
              ],
              "transaction_boundary_count": 1
            }
          }
        ],
        "console_warnings_errors": [],
        "pageerrors": [],
        "blocked_external_requests": [],
        "pixel_capture_provenance": {
          "capture_nonce": "task20-pbv03-20260819203903565-577f11c34b5648",
          "capture_started_at": "2026-08-19T20:39:10.459Z",
          "capture_completed_at": "2026-08-19T20:39:10.634Z",
          "write_mode": "direct unique Playwright screenshots; no copy or reuse",
          "screenshot_path": "output/playwright/task20-api-split-evidence/screenshots/pb-028-mobile-light-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648.png",
          "screenshot_sha256": "aa50a3439363cb5477498e110e0482329696d69665dab93e364a65298d2e22a9",
          "screenshot_dimensions": {
            "width": 390,
            "height": 844
          },
          "screenshot_bytes": 101772,
          "screenshot_pixel_stats": {
            "width": 390,
            "height": 844,
            "pixel_count": 329160,
            "non_background_pixel_count": 63434,
            "dark_pixel_count": 19836,
            "chromatic_pixel_count": 21647,
            "pixel_evidence_nonempty": true
          },
          "h1_crop": {
            "crop_path": "output/playwright/task20-api-split-evidence/pixel-crops/pb-028-mobile-light-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-h1.png",
            "crop_sha256": "562fe436804b9d9c6c044b9e404995be9599e7c773a55f1bcf1c973020bf46f7",
            "crop_dimensions": {
              "width": 358,
              "height": 42
            },
            "crop_bytes": 5349,
            "pixel_stats": {
              "width": 358,
              "height": 42,
              "pixel_count": 15036,
              "non_background_pixel_count": 3926,
              "dark_pixel_count": 2968,
              "chromatic_pixel_count": 0,
              "pixel_evidence_nonempty": true
            }
          },
          "status_crop": {
            "crop_path": "output/playwright/task20-api-split-evidence/pixel-crops/pb-028-mobile-light-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-status.png",
            "crop_sha256": "b729e7a18583bffb2108a130b53646b2a9276aa507447862fe2b5d0c7cf031b8",
            "crop_dimensions": {
              "width": 358,
              "height": 57
            },
            "crop_bytes": 5964,
            "pixel_stats": {
              "width": 358,
              "height": 57,
              "pixel_count": 20406,
              "non_background_pixel_count": 20024,
              "dark_pixel_count": 1606,
              "chromatic_pixel_count": 20024,
              "pixel_evidence_nonempty": true
            }
          },
          "diagram_crops": [
            {
              "diagram_id": "PBV-03-overview",
              "crop_path": "output/playwright/task20-api-split-evidence/diagram-crops/pb-028-mobile-light-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-overview.png",
              "crop_sha256": "25906c02e5999acec9026ee7f86cc415d47967d47a0ebd2098e84cedbe022c6e",
              "crop_dimensions": {
                "width": 358,
                "height": 494
              },
              "crop_bytes": 23657,
              "pixel_stats": {
                "width": 358,
                "height": 494,
                "pixel_count": 176852,
                "non_background_pixel_count": 38177,
                "dark_pixel_count": 7713,
                "chromatic_pixel_count": 9568,
                "pixel_evidence_nonempty": true
              },
              "alt": "정상적인 모임 참가 요청이 요청·eventId 식별, API 계약 확인, 인증·요청 주체 확인, 대상 관계·행동 인가, 중복·모집·정원 확인, 트랜잭션·commit, 확정 결과 응답의 일곱 책임을 차례로 통과합니다.",
              "source_dom_box_at_scroll_zero": {
                "x": 16,
                "y": 3912.9375,
                "width": 358,
                "height": 493.515625
              },
              "capture_method": "loaded consumer image drawn once to a same-size top-layer canvas, cropped, and immediately removed; source theme and consumer scale preserved, sticky UI excluded"
            },
            {
              "diagram_id": "PBV-03-detail",
              "crop_path": "output/playwright/task20-api-split-evidence/diagram-crops/pb-028-mobile-light-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-detail.png",
              "crop_sha256": "5eaf468c77ae174620ef6c39e2af2a759535bce612f494bbbb1f98492d1bbac8",
              "crop_dimensions": {
                "width": 358,
                "height": 500
              },
              "crop_bytes": 44843,
              "pixel_stats": {
                "width": 358,
                "height": 500,
                "pixel_count": 179000,
                "non_background_pixel_count": 19865,
                "dark_pixel_count": 7994,
                "chromatic_pixel_count": 10848,
                "pixel_evidence_nonempty": true
              },
              "alt": "분리된 lifeline의 참가자 A와 B가 마지막 한 자리에 동시에 요청하면 참가 서비스와 데이터베이스가 중복·모집 상태·정원을 트랜잭션 확정 경계에서 다시 검사해 A 한 건만 commit하고 B는 변경 없이 거절합니다. A의 성공 응답이 commit 뒤 유실되면 생성 요청을 즉시 반복하지 않고 권한 있는 현재 참가 상태·이벤트·처리 기록을 재조회해 confirmed가 capacity 이하이고 활성 중복과 부분 저장이 없음을 확인합니다.",
              "source_dom_box_at_scroll_zero": {
                "x": 16,
                "y": 12310.109375,
                "width": 358,
                "height": 499.53125
              },
              "capture_method": "loaded consumer image drawn once to a same-size top-layer canvas, cropped, and immediately removed; source theme and consumer scale preserved, sticky UI excluded"
            }
          ]
        },
        "failure_reasons": []
      },
      {
        "record_type": "pbv03_browser_state",
        "occurrence_id": "PB-028@390x844-dark",
        "attempt": 8,
        "attempt_status": "success",
        "final": true,
        "route": "/04-backend-data/api-database-auth/",
        "expected_h1": "API·데이터베이스·인증",
        "expected_status_badge": "검토용 초안",
        "viewport": {
          "id": "mobile",
          "width": 390,
          "height": 844
        },
        "http_status": 200,
        "source_path": "/04-backend-data/api-database-auth/",
        "requested_theme": "dark",
        "observed_prefers_color_scheme": "dark",
        "observed_html_data_theme": "dark",
        "observed_effective_color_scheme": "dark",
        "browser_user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36",
        "browser_vendor": "Google Inc.",
        "main_exists": true,
        "h1_count": 1,
        "h1_text": "API·데이터베이스·인증",
        "h1_rect": {
          "left": 16,
          "top": 144,
          "right": 374,
          "bottom": 186,
          "width": 358,
          "height": 42
        },
        "status_badge_count": 1,
        "status_badge_text": "검토용 초안",
        "status_badge_rect": {
          "left": 16,
          "top": 198,
          "right": 374,
          "bottom": 254.375,
          "width": 358,
          "height": 56.375
        },
        "global_overflow_px": {
          "document": 0,
          "body": 0
        },
        "internal_scroll_checks": [
          {
            "tag": "pre",
            "exceeds_viewport": false,
            "internal_scroll_available": true,
            "accepted": true
          },
          {
            "tag": "table",
            "exceeds_viewport": false,
            "internal_scroll_available": false,
            "accepted": true
          },
          {
            "tag": "pre",
            "exceeds_viewport": false,
            "internal_scroll_available": true,
            "accepted": true
          }
        ],
        "internal_scroll_failure_count": 0,
        "window_scroll_y": 0,
        "document_scroll_left": 0,
        "post_capture_scroll": {
          "window_scroll_y": 0,
          "document_scroll_left": 0
        },
        "diagrams": [
          {
            "id": "PBV-03-overview",
            "file": "api-database-auth-flow.svg",
            "alt_prefix": "정상적인 모임 참가 요청이",
            "kind": "overview",
            "core_font_px": 22,
            "detail_font_px": null,
            "expected_units": 7,
            "expected_markers": 2,
            "source": "/_astro/api-database-auth-flow.BZ77g4uM_Z2oxR7m.svg",
            "current_source": "http://127.0.0.1:4340/_astro/api-database-auth-flow.BZ77g4uM_Z2oxR7m.svg",
            "alt": "정상적인 모임 참가 요청이 요청·eventId 식별, API 계약 확인, 인증·요청 주체 확인, 대상 관계·행동 인가, 중복·모집·정원 확인, 트랜잭션·commit, 확정 결과 응답의 일곱 책임을 차례로 통과합니다.",
            "alt_ok": true,
            "rendered_box": {
              "x": 16,
              "y": 3912.9375,
              "width": 358,
              "height": 493.515625
            },
            "render_scale": 0.6392857142857142,
            "estimated_core_font_px": 14.064285714285713,
            "estimated_detail_font_px": null,
            "source_inspection": {
              "role": "img",
              "aria_labelledby": "api-database-auth-flow-title api-database-auth-flow-desc",
              "title_id": "api-database-auth-flow-title",
              "title_text": "모임 참가 요청의 정상 책임 순서",
              "desc_id": "api-database-auth-flow-desc",
              "desc_text": "정상적인 모임 참가 요청이 요청과 eventId 식별, API 계약 확인, 인증과 요청 주체 확인, 대상 관계와 행동 인가, 중복과 모집 상태와 정원 확인, 트랜잭션과 commit, 확정 결과 응답의 일곱 책임을 차례로 통과하는 논리적 개요입니다. 실패 분기와 동시 요청 복구는 별도의 상세 시퀀스에서 다룹니다.",
              "view_box": [
                0,
                0,
                560,
                772
              ],
              "marker_count": 2,
              "current_color_count": 0,
              "information_unit_count": 7,
              "arrow_path_count": 6,
              "lifeline_count": null,
              "parallel_frame_count": null,
              "actor_labels": [],
              "transaction_boundary_count": null
            }
          },
          {
            "id": "PBV-03-detail",
            "file": "api-database-auth-sequence.svg",
            "alt_prefix": "분리된 lifeline의 참가자 A와 B가",
            "kind": "detail",
            "core_font_px": 24,
            "detail_font_px": 20,
            "expected_units": 12,
            "expected_markers": 4,
            "expected_lifelines": 4,
            "expected_parallel_frames": 1,
            "source": "/_astro/api-database-auth-sequence.DvEcyxfU_MBgOK.svg",
            "current_source": "http://127.0.0.1:4340/_astro/api-database-auth-sequence.DvEcyxfU_MBgOK.svg",
            "alt": "분리된 lifeline의 참가자 A와 B가 마지막 한 자리에 동시에 요청하면 참가 서비스와 데이터베이스가 중복·모집 상태·정원을 트랜잭션 확정 경계에서 다시 검사해 A 한 건만 commit하고 B는 변경 없이 거절합니다. A의 성공 응답이 commit 뒤 유실되면 생성 요청을 즉시 반복하지 않고 권한 있는 현재 참가 상태·이벤트·처리 기록을 재조회해 confirmed가 capacity 이하이고 활성 중복과 부분 저장이 없음을 확인합니다.",
            "alt_ok": true,
            "rendered_box": {
              "x": 16,
              "y": 12310.109375,
              "width": 358,
              "height": 499.53125
            },
            "render_scale": 0.5203488372093024,
            "estimated_core_font_px": 12.488372093023257,
            "estimated_detail_font_px": 10.406976744186046,
            "source_inspection": {
              "role": "img",
              "aria_labelledby": "api-database-auth-sequence-title api-database-auth-sequence-desc",
              "title_id": "api-database-auth-sequence-title",
              "title_text": "마지막 한 자리 동시 요청과 commit 뒤 응답 유실 복구",
              "desc_id": "api-database-auth-sequence-desc",
              "desc_text": "참가자 A와 B가 분리된 lifeline에서 마지막 한 자리에 동시에 요청하면 참가 서비스와 데이터베이스가 중복, 모집 상태, 정원을 트랜잭션 확정 경계에서 다시 검사해 A 한 건만 commit하고 B는 변경 없이 거절합니다. A의 성공 응답이 commit 뒤 유실되면 생성 요청을 즉시 반복하지 않고 권한 있는 현재 상태, 이벤트, 처리 기록을 재조회해 이미 확정된 결과와 confirmed가 capacity 이하이고 활성 중복과 부분 저장이 없다는 불변식을 확인합니다.",
              "view_box": [
                0,
                0,
                688,
                960
              ],
              "marker_count": 4,
              "current_color_count": 0,
              "information_unit_count": 12,
              "arrow_path_count": 11,
              "lifeline_count": 4,
              "parallel_frame_count": 1,
              "actor_labels": [
                "참가자 A",
                "참가자 B",
                "참가 서비스",
                "데이터베이스"
              ],
              "transaction_boundary_count": 1
            }
          }
        ],
        "console_warnings_errors": [],
        "pageerrors": [],
        "blocked_external_requests": [],
        "pixel_capture_provenance": {
          "capture_nonce": "task20-pbv03-20260819203903565-577f11c34b5648",
          "capture_started_at": "2026-08-19T20:39:11.793Z",
          "capture_completed_at": "2026-08-19T20:39:11.969Z",
          "write_mode": "direct unique Playwright screenshots; no copy or reuse",
          "screenshot_path": "output/playwright/task20-api-split-evidence/screenshots/pb-028-mobile-dark-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648.png",
          "screenshot_sha256": "9f709804fd9cd47efef4d146df388014f24de4bcc2a8af7aa0c0965fb1713519",
          "screenshot_dimensions": {
            "width": 390,
            "height": 844
          },
          "screenshot_bytes": 99616,
          "screenshot_pixel_stats": {
            "width": 390,
            "height": 844,
            "pixel_count": 329160,
            "non_background_pixel_count": 325639,
            "dark_pixel_count": 305688,
            "chromatic_pixel_count": 21249,
            "pixel_evidence_nonempty": true
          },
          "h1_crop": {
            "crop_path": "output/playwright/task20-api-split-evidence/pixel-crops/pb-028-mobile-dark-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-h1.png",
            "crop_sha256": "61d5eadcd297fa01da341bd70421330787c405e32fa57b440a4ada17f53d7179",
            "crop_dimensions": {
              "width": 358,
              "height": 42
            },
            "crop_bytes": 5352,
            "pixel_stats": {
              "width": 358,
              "height": 42,
              "pixel_count": 15036,
              "non_background_pixel_count": 12801,
              "dark_pixel_count": 11914,
              "chromatic_pixel_count": 0,
              "pixel_evidence_nonempty": true
            }
          },
          "status_crop": {
            "crop_path": "output/playwright/task20-api-split-evidence/pixel-crops/pb-028-mobile-dark-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-status.png",
            "crop_sha256": "4241bee587b5b3fcc8b8f3e811cdd50f09e390f06327e4f4cddc2cb258161384",
            "crop_dimensions": {
              "width": 358,
              "height": 57
            },
            "crop_bytes": 5951,
            "pixel_stats": {
              "width": 358,
              "height": 57,
              "pixel_count": 20406,
              "non_background_pixel_count": 20406,
              "dark_pixel_count": 18391,
              "chromatic_pixel_count": 20016,
              "pixel_evidence_nonempty": true
            }
          },
          "diagram_crops": [
            {
              "diagram_id": "PBV-03-overview",
              "crop_path": "output/playwright/task20-api-split-evidence/diagram-crops/pb-028-mobile-dark-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-overview.png",
              "crop_sha256": "a9e73c43a0bfa0273c3ac21a59dc1b4c2472a895010a1cbd226d38f4fc7041bb",
              "crop_dimensions": {
                "width": 358,
                "height": 494
              },
              "crop_bytes": 23812,
              "pixel_stats": {
                "width": 358,
                "height": 494,
                "pixel_count": 176852,
                "non_background_pixel_count": 174565,
                "dark_pixel_count": 166587,
                "chromatic_pixel_count": 80717,
                "pixel_evidence_nonempty": true
              },
              "alt": "정상적인 모임 참가 요청이 요청·eventId 식별, API 계약 확인, 인증·요청 주체 확인, 대상 관계·행동 인가, 중복·모집·정원 확인, 트랜잭션·commit, 확정 결과 응답의 일곱 책임을 차례로 통과합니다.",
              "source_dom_box_at_scroll_zero": {
                "x": 16,
                "y": 3912.9375,
                "width": 358,
                "height": 493.515625
              },
              "capture_method": "loaded consumer image drawn once to a same-size top-layer canvas, cropped, and immediately removed; source theme and consumer scale preserved, sticky UI excluded"
            },
            {
              "diagram_id": "PBV-03-detail",
              "crop_path": "output/playwright/task20-api-split-evidence/diagram-crops/pb-028-mobile-dark-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-detail.png",
              "crop_sha256": "dc53d3ad9d395f61bdb0cf83d847ae8edbbb17e669ddeea1ffecd9f539a5399d",
              "crop_dimensions": {
                "width": 358,
                "height": 500
              },
              "crop_bytes": 46373,
              "pixel_stats": {
                "width": 358,
                "height": 500,
                "pixel_count": 179000,
                "non_background_pixel_count": 176725,
                "dark_pixel_count": 167085,
                "chromatic_pixel_count": 41158,
                "pixel_evidence_nonempty": true
              },
              "alt": "분리된 lifeline의 참가자 A와 B가 마지막 한 자리에 동시에 요청하면 참가 서비스와 데이터베이스가 중복·모집 상태·정원을 트랜잭션 확정 경계에서 다시 검사해 A 한 건만 commit하고 B는 변경 없이 거절합니다. A의 성공 응답이 commit 뒤 유실되면 생성 요청을 즉시 반복하지 않고 권한 있는 현재 참가 상태·이벤트·처리 기록을 재조회해 confirmed가 capacity 이하이고 활성 중복과 부분 저장이 없음을 확인합니다.",
              "source_dom_box_at_scroll_zero": {
                "x": 16,
                "y": 12310.109375,
                "width": 358,
                "height": 499.53125
              },
              "capture_method": "loaded consumer image drawn once to a same-size top-layer canvas, cropped, and immediately removed; source theme and consumer scale preserved, sticky UI excluded"
            }
          ]
        },
        "failure_reasons": []
      }
    ]
  },
  "images": [
    {
      "id": "R04-PNG-01",
      "order": 1,
      "path": "output/playwright/task20-api-split-evidence/screenshots/pb-028-desktop-light-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648.png",
      "sha256": "4ec5302c6f5b130320a69d009e3e9671cf9cc3210122e5e2e7630c715498a6de",
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
      "capture_method": "original viewport screenshot",
      "occurrence_id": "PB-028@1440x1000-light"
    },
    {
      "id": "R04-PNG-02",
      "order": 2,
      "path": "output/playwright/task20-api-split-evidence/diagram-crops/pb-028-desktop-light-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-overview.png",
      "sha256": "8dd920134a771a896db5bea404482538ba890ea6f2e96315d9eef8b13f11ea54",
      "dimensions": {
        "width": 560,
        "height": 772
      },
      "kind": "PBV-03-overview",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "capture_method": "loaded consumer image drawn once to a same-size top-layer canvas, cropped, and immediately removed; source theme and consumer scale preserved, sticky UI excluded",
      "occurrence_id": "PB-028@1440x1000-light"
    },
    {
      "id": "R04-PNG-03",
      "order": 3,
      "path": "output/playwright/task20-api-split-evidence/diagram-crops/pb-028-desktop-light-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-detail.png",
      "sha256": "c0599843dc6e5bad11b16c2c5fc9c9d4701f9cebbff8a5ad9251dec52272262a",
      "dimensions": {
        "width": 688,
        "height": 960
      },
      "kind": "PBV-03-detail",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "light",
      "capture_method": "loaded consumer image drawn once to a same-size top-layer canvas, cropped, and immediately removed; source theme and consumer scale preserved, sticky UI excluded",
      "occurrence_id": "PB-028@1440x1000-light"
    },
    {
      "id": "R04-PNG-04",
      "order": 4,
      "path": "output/playwright/task20-api-split-evidence/screenshots/pb-028-desktop-dark-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648.png",
      "sha256": "386a1e571d3c1c0c0b656dc10535f9cf6a7826371ad5271d16fb13f857ab6e96",
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
      "capture_method": "original viewport screenshot",
      "occurrence_id": "PB-028@1440x1000-dark"
    },
    {
      "id": "R04-PNG-05",
      "order": 5,
      "path": "output/playwright/task20-api-split-evidence/diagram-crops/pb-028-desktop-dark-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-overview.png",
      "sha256": "5d94edf8a640a68233d8aa4278fdd56842ad29c977cde287511cc9230cb0558c",
      "dimensions": {
        "width": 560,
        "height": 772
      },
      "kind": "PBV-03-overview",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "capture_method": "loaded consumer image drawn once to a same-size top-layer canvas, cropped, and immediately removed; source theme and consumer scale preserved, sticky UI excluded",
      "occurrence_id": "PB-028@1440x1000-dark"
    },
    {
      "id": "R04-PNG-06",
      "order": 6,
      "path": "output/playwright/task20-api-split-evidence/diagram-crops/pb-028-desktop-dark-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-detail.png",
      "sha256": "d395394498dcae3db9759cf9dff8c17a53903cb07e6944488be8841bc2e8edc3",
      "dimensions": {
        "width": 688,
        "height": 960
      },
      "kind": "PBV-03-detail",
      "viewport": {
        "id": "desktop",
        "width": 1440,
        "height": 1000
      },
      "theme": "dark",
      "capture_method": "loaded consumer image drawn once to a same-size top-layer canvas, cropped, and immediately removed; source theme and consumer scale preserved, sticky UI excluded",
      "occurrence_id": "PB-028@1440x1000-dark"
    },
    {
      "id": "R04-PNG-07",
      "order": 7,
      "path": "output/playwright/task20-api-split-evidence/screenshots/pb-028-tablet-light-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648.png",
      "sha256": "6399c67bd9e6093532c1c72a333cbd14dc51ef7703fac9e255c47e55a0975a85",
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
      "capture_method": "original viewport screenshot",
      "occurrence_id": "PB-028@1024x768-light"
    },
    {
      "id": "R04-PNG-08",
      "order": 8,
      "path": "output/playwright/task20-api-split-evidence/diagram-crops/pb-028-tablet-light-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-overview.png",
      "sha256": "8dd920134a771a896db5bea404482538ba890ea6f2e96315d9eef8b13f11ea54",
      "dimensions": {
        "width": 560,
        "height": 772
      },
      "kind": "PBV-03-overview",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "light",
      "capture_method": "loaded consumer image drawn once to a same-size top-layer canvas, cropped, and immediately removed; source theme and consumer scale preserved, sticky UI excluded",
      "occurrence_id": "PB-028@1024x768-light"
    },
    {
      "id": "R04-PNG-09",
      "order": 9,
      "path": "output/playwright/task20-api-split-evidence/diagram-crops/pb-028-tablet-light-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-detail.png",
      "sha256": "c0599843dc6e5bad11b16c2c5fc9c9d4701f9cebbff8a5ad9251dec52272262a",
      "dimensions": {
        "width": 688,
        "height": 960
      },
      "kind": "PBV-03-detail",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "light",
      "capture_method": "loaded consumer image drawn once to a same-size top-layer canvas, cropped, and immediately removed; source theme and consumer scale preserved, sticky UI excluded",
      "occurrence_id": "PB-028@1024x768-light"
    },
    {
      "id": "R04-PNG-10",
      "order": 10,
      "path": "output/playwright/task20-api-split-evidence/screenshots/pb-028-tablet-dark-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648.png",
      "sha256": "e8a7fdad8c0ec445fbcfd949c824bfc319806808d9eabb5f068e6570819d13fb",
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
      "capture_method": "original viewport screenshot",
      "occurrence_id": "PB-028@1024x768-dark"
    },
    {
      "id": "R04-PNG-11",
      "order": 11,
      "path": "output/playwright/task20-api-split-evidence/diagram-crops/pb-028-tablet-dark-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-overview.png",
      "sha256": "5d94edf8a640a68233d8aa4278fdd56842ad29c977cde287511cc9230cb0558c",
      "dimensions": {
        "width": 560,
        "height": 772
      },
      "kind": "PBV-03-overview",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "dark",
      "capture_method": "loaded consumer image drawn once to a same-size top-layer canvas, cropped, and immediately removed; source theme and consumer scale preserved, sticky UI excluded",
      "occurrence_id": "PB-028@1024x768-dark"
    },
    {
      "id": "R04-PNG-12",
      "order": 12,
      "path": "output/playwright/task20-api-split-evidence/diagram-crops/pb-028-tablet-dark-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-detail.png",
      "sha256": "d395394498dcae3db9759cf9dff8c17a53903cb07e6944488be8841bc2e8edc3",
      "dimensions": {
        "width": 688,
        "height": 960
      },
      "kind": "PBV-03-detail",
      "viewport": {
        "id": "tablet",
        "width": 1024,
        "height": 768
      },
      "theme": "dark",
      "capture_method": "loaded consumer image drawn once to a same-size top-layer canvas, cropped, and immediately removed; source theme and consumer scale preserved, sticky UI excluded",
      "occurrence_id": "PB-028@1024x768-dark"
    },
    {
      "id": "R04-PNG-13",
      "order": 13,
      "path": "output/playwright/task20-api-split-evidence/screenshots/pb-028-mobile-light-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648.png",
      "sha256": "aa50a3439363cb5477498e110e0482329696d69665dab93e364a65298d2e22a9",
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
      "capture_method": "original viewport screenshot",
      "occurrence_id": "PB-028@390x844-light"
    },
    {
      "id": "R04-PNG-14",
      "order": 14,
      "path": "output/playwright/task20-api-split-evidence/diagram-crops/pb-028-mobile-light-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-overview.png",
      "sha256": "25906c02e5999acec9026ee7f86cc415d47967d47a0ebd2098e84cedbe022c6e",
      "dimensions": {
        "width": 358,
        "height": 494
      },
      "kind": "PBV-03-overview",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "capture_method": "loaded consumer image drawn once to a same-size top-layer canvas, cropped, and immediately removed; source theme and consumer scale preserved, sticky UI excluded",
      "occurrence_id": "PB-028@390x844-light"
    },
    {
      "id": "R04-PNG-15",
      "order": 15,
      "path": "output/playwright/task20-api-split-evidence/diagram-crops/pb-028-mobile-light-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-detail.png",
      "sha256": "5eaf468c77ae174620ef6c39e2af2a759535bce612f494bbbb1f98492d1bbac8",
      "dimensions": {
        "width": 358,
        "height": 500
      },
      "kind": "PBV-03-detail",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "light",
      "capture_method": "loaded consumer image drawn once to a same-size top-layer canvas, cropped, and immediately removed; source theme and consumer scale preserved, sticky UI excluded",
      "occurrence_id": "PB-028@390x844-light"
    },
    {
      "id": "R04-PNG-16",
      "order": 16,
      "path": "output/playwright/task20-api-split-evidence/screenshots/pb-028-mobile-dark-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648.png",
      "sha256": "9f709804fd9cd47efef4d146df388014f24de4bcc2a8af7aa0c0965fb1713519",
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
      "capture_method": "original viewport screenshot",
      "occurrence_id": "PB-028@390x844-dark"
    },
    {
      "id": "R04-PNG-17",
      "order": 17,
      "path": "output/playwright/task20-api-split-evidence/diagram-crops/pb-028-mobile-dark-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-overview.png",
      "sha256": "a9e73c43a0bfa0273c3ac21a59dc1b4c2472a895010a1cbd226d38f4fc7041bb",
      "dimensions": {
        "width": 358,
        "height": 494
      },
      "kind": "PBV-03-overview",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "capture_method": "loaded consumer image drawn once to a same-size top-layer canvas, cropped, and immediately removed; source theme and consumer scale preserved, sticky UI excluded",
      "occurrence_id": "PB-028@390x844-dark"
    },
    {
      "id": "R04-PNG-18",
      "order": 18,
      "path": "output/playwright/task20-api-split-evidence/diagram-crops/pb-028-mobile-dark-attempt-8-task20-pbv03-20260819203903565-577f11c34b5648-detail.png",
      "sha256": "dc53d3ad9d395f61bdb0cf83d847ae8edbbb17e669ddeea1ffecd9f539a5399d",
      "dimensions": {
        "width": 358,
        "height": 500
      },
      "kind": "PBV-03-detail",
      "viewport": {
        "id": "mobile",
        "width": 390,
        "height": 844
      },
      "theme": "dark",
      "capture_method": "loaded consumer image drawn once to a same-size top-layer canvas, cropped, and immediately removed; source theme and consumer scale preserved, sticky UI excluded",
      "occurrence_id": "PB-028@390x844-dark"
    }
  ]
}
```
<!-- m5-r04-request:data:end -->
