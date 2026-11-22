# 이중 사례 전환 파일별 영향 감사

## 목적

승인된 이중 사례 체계로 전환할 때 어떤 파일이 그대로 남고, 어떤 파일이 이름만 바뀌며, 어떤 파일이 요구사항과 증거를 다시 설계해야 하는지 현재 저장소 기준으로 고정합니다. 이 문서는 구현 자체가 아니라 후속 계획이 사용하는 파일별 계약이며, 공개 원고·자산·조사 기록·과거 검토 기록은 이 감사에서 수정하지 않습니다.

## 기준선

- 기준 브랜치는 격리 작업 브랜치 `codex/dual-case-impact-audit`이고 기준 커밋은 `97af980`입니다. 이 커밋은 Task 1 뒤 승인된 계획 경로 정정만 포함하며 공개 콘텐츠 기준선은 바뀌지 않았습니다.
- 직접 표현 검색 `반도체|북마크|bookmark|기업 A|기업 B`로 확인한 공개 문서는 9개이며, 예상 목록과 실제 목록이 일치했습니다.
- 식별자와 링크 검색으로 `src/content/docs/08-quality/testing-strategy.md`, `src/content/docs/12-case-studies/index.md`, 실제 홈 `src/content/docs/index.md`를 추가했습니다. 존재하지 않는 `src/content/docs/index.mdx`는 판정 대상이 아닙니다.
- 자산은 SVG와 Mermaid 원본을 한 쌍으로 보며 `bookmark-architecture`, `api-database-auth-flow`, `analytics-dashboard-architecture` 세 쌍을 모두 포함합니다.
- Task 1이 식별자로 명시한 역사 검토 기록 14개뿐 아니라, `docs/project/reviews/2026-08-05-*.md`와 `docs/project/reviews/2026-08-06-*.md` 전체 29개를 다시 확인했습니다. 더 넓은 날짜 범위를 보존 경계로 삼아 인접 재판정 기록과 직접 연결되지 않은 당시 기록도 빠뜨리지 않습니다.
- 실제 주식 데이터 원천, 현재 제품 기능, 네트워크 조사와 새 의존성은 이 감사의 근거로 사용하지 않습니다. 주가 사례는 공식 원천 채택 전 교육용 fixture라는 경계를 유지합니다.

## 판정 규칙

- 변경 없음: 새 사례 체계와 모순되는 표현·링크·상태가 없고 적용 예를 추가할 학습 필요도 없습니다.
- 표면 편집: 이름이나 연결 문구만 바뀌며 요구사항·필드·권한·오라클·출처·결론이 유지됩니다.
- 실질 변경: 사용자 문제, 상태, 입력·출력, 권한, 데이터 의미, 실패, 테스트, 출처 또는 학습 흐름이 달라집니다.
- 역사적 증거 보존: 당시 원고를 검토한 기록이므로 내용은 바꾸지 않고 새 검토에서 이전 정본으로만 참조합니다.

## 공개 문서

| 파일 | 현재 상태 | 영향 등급 | 구체적 이유 | 새 상태 | 재검토 규칙 |
|---|---|---|---|---|---|
| `src/content/docs/12-case-studies/first-full-stack-project.md` | `draft` (`:4`), 북마크 서비스 문제·요구·비범위 `:3,16-40`, 다이어그램 소비 `:44` | 실질 변경 | 북마크의 사용자·저장 대상·기능·비범위를 모임 일정·주최자·참가자·참가·취소·정원·마감·동시성 계약으로 바꾸고 `bookmark-architecture` 쌍도 함께 바꿔야 합니다. | 기존 `draft` 유지 | 모임 웹앱 캡스톤을 독립적으로 완결한 뒤 새 자체 점검·자동 검사·렌더링 확인·독립 검토와 새 `request:` 증거로 `review` 승격을 다시 판단합니다. |
| `src/content/docs/12-case-studies/analytics-dashboard-case-study.md` | `review`와 기존 `reviewEvidence` (`:4-7`), 반도체 가상 대시보드 `:23`, 기업 A·B와 실제 원천 경계 `:35`, 선택 계약 `:68`, 다이어그램 소비 `:150` | 실질 변경 | 반도체 지표 비교를 주가 fixture로 바꾸면 원천·거래일·조정 상태·가격·거래량·품질·해석·안전 경계와 `analytics-dashboard-architecture` 쌍의 의미가 달라집니다. | 변경 시작 시 `review`→`draft`, 기존 `reviewEvidence` 제거 | 교육용 fixture 계약과 미확인 원천 경계를 먼저 고정하고 새 원고·자산·출처 적용 범위를 대상으로 독립 검토와 새 `request:` 증거를 만듭니다. |
| `src/content/docs/04-backend-data/api-database-auth.md` | `review`와 기존 `reviewEvidence` (`:4-7`), 반도체 보고서 수정 `:27`, 다이어그램 소비 `:62`, 보고서 ID·소유권·기간 계약 `:68-72` | 실질 변경 | 보고서 수정의 주체·대상·행동·필드를 모임 참가·취소의 사용자·모임·행동·정원·마감·중복·트랜잭션 계약으로 교체해야 합니다. | 변경 시작 시 `review`→`draft`, 기존 `reviewEvidence` 제거 | `api-database-auth-flow` SVG/Mermaid와 본문의 권한·오류·commit 뒤 응답 유실 오라클을 함께 검토하고 별도 독립 검토 기록으로 `review`를 다시 판단합니다. |
| `src/content/docs/01-mental-models/software-is-a-system.md` | `review`와 기존 `reviewEvidence` (`:4-7`), 반도체 대시보드 요청 `:26`, 분석 다이어그램 소비 `:127`, 사례 링크 `:274` | 실질 변경 | 도메인 명칭만이 아니라 시스템 렌즈에 묶인 데이터 원천·품질·갱신·공백·운영 질문과 적용 흐름이 새 기본 웹앱 또는 비교용 주가 사례에 맞게 달라집니다. | 변경 시작 시 `review`→`draft`, 새 독립 검토 필요 | 새 사례가 여섯 렌즈의 결론과 실패·운영 질문을 보존하는지 검토하고, 이전 증거가 아닌 새 원고 기준 `request:`와 자동 검증을 기록합니다. |
| `src/content/docs/03-full-stack/client-server-full-stack.md` | `review`와 기존 `reviewEvidence` (`:4-7`), 반도체 대시보드 실패 진단 `:25`, 기업·기간·지표 흐름 `:77,203`, 사례 링크 `:256` | 실질 변경 | 사용자 입력·서버 조회·데이터 공백·렌더링 실패의 구체 계약과 학습 흐름이 모임 조회·참가 또는 주가 fixture 비교로 바뀝니다. | 변경 시작 시 `review`→`draft`, 새 독립 검토 필요 | 클라이언트·서버 경계와 정적 전달/API 분기, 실패 위치를 새 사례에서 다시 추적하고 새 독립 검토와 검증 증거를 만듭니다. |
| `src/content/docs/03-full-stack/http-request-response.md` | `review`와 기존 `reviewEvidence` (`:4-7`), 반도체 지표 대시보드 예시 `:112-114`, 조회 API 검토 과제 `:222` | 실질 변경 | 업종·기간 조회 API의 메서드·경로·쿼리·응답·오류 계약을 모임 또는 주가 fixture 계약으로 바꾸므로 요청·응답의 입력과 출력이 달라집니다. | 변경 시작 시 `review`→`draft`, 새 독립 검토 필요 | 새 HTTP 계약의 정상·빈 결과·검증 오류·권한 오류 오라클을 확인하고 기존 교차 검토 증거를 재사용하지 않은 새 독립 검토를 수행합니다. |
| `src/content/docs/05-frontend/browser-dom-rendering.md` | `review`와 기존 `reviewEvidence` (`:4-7`), 응답 성공·차트 공백 진단 `:128-136`, AI 작업 지시 `:202-208` | 표면 편집 | Network의 `200`과 화면 성공을 구분하는 결론과 필드를 그대로 두고 사례 명칭과 연결 문구만 최소 교체할 수 있습니다. | 학습 결론·필드가 유지되는 최소 변경만 허용, 상태 유지 후보 | 구현 diff에서 입력·응답 필드·화면 상태·실패 위험·출처가 달라지면 즉시 실질 변경으로 재분류하고 `draft` 및 새 독립 검토를 적용합니다. |
| `src/content/docs/06-requirements-design/prd-sdd-tdd.md` | `review`와 기존 `reviewEvidence` (`:4-7`), `FR-014` 사례 연결 `:119`, 가상 반도체 대시보드 선언 `:224-231`, 두 캡스톤 링크 `:380-381` | 표면 편집 | 원천·기준 시점·갱신 상태를 요구사항에서 설계와 테스트로 추적하는 의미를 그대로 두고 사례명과 링크 문맥만 바꿀 수 있습니다. | 원천·최신성 요구의 의미가 유지되는 최소 변경만 허용, 상태 유지 후보 | `FR-014`, R-02/R-03, 오라클·출처·추적 결론 중 하나라도 달라지면 실질 변경으로 재분류하고 새 검토를 요구합니다. |
| `src/content/docs/08-quality/testing-strategy.md` | `review`와 기존 `reviewEvidence` (`:4-7`), `FR-014`와 R-02/R-03 연결 `:183-190`, 사례 링크 `:385` | 변경 없음 또는 링크 문맥 표면 편집 | 직접 사례 키워드는 없고 테스트 오라클의 의미는 현재 유지됩니다. 캡스톤 앵커나 설명 문구가 바뀔 때 링크 문맥만 맞출 가능성이 있습니다. | `FR-014`와 오라클 의미가 바뀌지 않으면 상태 유지 후보 | 링크·앵커 유효성과 요구사항별 실패 위험만 재확인하고, 오라클·fixture·출처 의미가 바뀌면 실질 변경 및 새 독립 검토로 전환합니다. |
| `src/content/docs/start-here/learning-paths.md` | `draft` (`:4`), 반도체 대시보드 Build Track `:32-40`, 현재 12개 장과 12번째 캡스톤 `:40-55` | 실질 변경 | 기본 반복 사례를 모임 웹앱으로 바꾸고 주가 분석을 독립 캡스톤으로 추가해 공식 Build Track의 역할·순서·학습 흐름을 12개에서 13개로 동기화해야 합니다. | 기존 `draft` 유지, Build Track 12→13 동기화 | 두 캡스톤 원고와 링크가 실제로 준비된 뒤 목록 수·순서·설명·앵커·Phase 1 집계를 검증하고 독립 경로 검토를 수행합니다. |
| `src/content/docs/12-case-studies/index.md` | `draft` (`:4`), 두 사례 설명과 링크 `:12-15` | 표면 편집 | 두 캡스톤의 이름과 역할을 새 체계에 맞춰 연결하되 요구사항이나 사례 본문을 이 인덱스에서 중복 정의하지 않습니다. | 기존 `draft` 유지 | 두 캡스톤의 실제 제목·경로·독립 완결 범위와 링크 유효성을 확인합니다. 인덱스가 새 학습 결론을 추가하면 실질 변경으로 재분류합니다. |
| `src/content/docs/index.md` | `draft` (`:7`), `12개 장으로 구성된 Build Track` 링크 문구 `:39-42` | 링크 문맥 표면 편집 | 홈은 Build Track 목록을 중복 정의하지 않지만 링크 문구가 현재 `12개 장`을 명시하므로 목표 13개 장과 맞지 않습니다. 실제 판정 대상은 승인된 `index.md`이며 `index.mdx`가 아닙니다. | 기존 `draft` 유지, `12개 장`→`13개 장` 링크 문구 동기화 | `learning-paths.md`의 13개 장 동기화 뒤 홈 링크 문구를 `13개 장`으로 바꾸고 대상 링크·앵커의 유효성을 확인하며 별도 목록은 추가하지 않습니다. |

표면 편집 후보는 실제 구현 diff에서 요구사항·필드·위험·출처가 바뀌면 즉시 실질 변경으로 재분류합니다. 이름 치환이 새 사용자 문제나 테스트 오라클을 숨기는 경우에도 같은 규칙을 적용합니다.

## 다이어그램

| 파일 | 현재 상태 | 영향 등급 | 구체적 이유 | 새 상태 | 재검토 규칙 |
|---|---|---|---|---|---|
| `src/assets/diagrams/bookmark-architecture.svg`와 `src/assets/diagrams/source/bookmark-architecture.mmd` | 북마크 서비스 제목·설명·상태가 SVG `:2-3,17`, Mermaid `:1-2`에 있고 `first-full-stack-project.md:44`가 소비함 | 실질 변경 | 모임 웹앱 구조로 이름과 의미를 함께 바꾸는 실질 변경입니다. 사용자·웹 화면·백엔드·DB라는 상자는 유지될 수 있어도 저장 상태와 역할·행동 계약이 달라집니다. | SVG와 Mermaid를 같은 커밋에서 모임 웹앱 구조로 동기화 | Mermaid 의미, SVG 텍스트·대체 설명, 본문 대체 텍스트와 렌더링을 함께 검토하고 한쪽만 바뀐 상태를 허용하지 않습니다. |
| `src/assets/diagrams/api-database-auth-flow.svg`와 `src/assets/diagrams/source/api-database-auth-flow.mmd` | 보고서 수정 책임 흐름이 SVG `:1-3,42,62,74,81-82`, Mermaid `:1-25`에 있고 `api-database-auth.md:62`가 소비함 | 실질 변경 | 보고서 수정 흐름을 모임 참가·취소의 주체·대상·행동·정원·트랜잭션 흐름으로 바꾸는 실질 변경입니다. | SVG와 Mermaid를 참가·취소 책임 흐름으로 동기화 | 인증·인가·정원/마감·중복·rollback·commit 뒤 응답 실패 분기와 본문 오라클을 새 독립 검토에서 함께 확인합니다. |
| `src/assets/diagrams/analytics-dashboard-architecture.svg`와 `src/assets/diagrams/source/analytics-dashboard-architecture.mmd` | 공개 원천·수집·품질·저장·전달·UI·운영 증거 흐름이 SVG `:2-3,34-41,74`, Mermaid `:1-12`에 있고 분석 캡스톤 `:150`과 시스템 장 `:127`이 소비함 | 실질 변경 후보 | 파일명은 유지하되 주가 fixture의 원천·거래일·조정 상태·가격·거래량 계약을 반영하는 실질 변경 후보입니다. | 교육용 fixture 계약을 반영한 새 SVG/Mermaid 쌍으로 교체하되 실제 원천 확정 표현은 금지 | 원천 미확인 경계, 거래일·시간대·조정 여부·가격·거래량 필드, 품질 상태, 대체 텍스트와 두 소비 문서의 의미를 함께 재검토합니다. |

## 조사와 출처

| 파일 | 현재 상태 | 영향 등급 | 구체적 이유 | 새 상태 | 재검토 규칙 |
|---|---|---|---|---|---|
| `research/api-database-auth-research-brief.md` | 2026-08-06 반도체 분석가의 보고서 수정 정본을 뒷받침하는 조사 기록이며 사례가 `:45-52,110-116`에 고정됨 | 역사적 증거 보존 | 2026-08-06 반도체 보고서 정본을 뒷받침한 조사 기록으로 보존하고 새 모임 사례 브리프를 별도 생성합니다. | 기존 파일은 내용·날짜·판정을 그대로 보존 | 새 모임 사례의 주체·대상·행동·권한·정원·트랜잭션 주장은 별도 브리프와 새 출처 적용 범위로 검토하며 이 파일을 새 증거로 재사용하지 않습니다. |
| `research/source-map.md` | 현재 대시보드 적용 출처 `:68-72`와 실제 반도체 원천·세부 데이터 계약의 미확인 범위 `:94`를 기록함 | 실질 변경 | 현재 공개 원고를 따라 새 적용 기록과 미확인 범위를 추가해야 하며 기존 출처가 주가 fixture의 모든 필드·권리·이용 조건을 증명한다고 확대할 수 없습니다. | 기존 적용 기록은 보존하고 새 모임·주가 fixture 적용 행과 미확인 경계를 추가 | 공식·1차 자료를 실제로 확인한 날짜·적용 범위·일반화 금지선을 기록하기 전 실제 주가 원천·재배포 권리·현재 제품 기능을 확정하지 않습니다. |
| `CONTENT_MAP.md` | 사례·캡스톤의 현재 상태·문자 수·경로가 `:141-147`, 홈 항목이 `:149` 이후에 있는 파생 콘텐츠 지도 | 표면 편집 | 공개 원고의 제목·상태·문자 수가 실제로 바뀐 뒤에만 생성 결과를 동기화해야 하며 이 감사 기준선에서는 원고보다 먼저 바꾸지 않습니다. | 후속 공개 원고 변경 뒤 생성 절차로 동기화 | 생성 명령과 정적 검사 결과를 확인하고 손으로 만든 상태 수치나 아직 시작하지 않은 전환 상태를 선반영하지 않습니다. |

## 역사적 검토 증거

Task 1에서 직접 식별한 14개 외에도 영향을 받는 문서와 직접 연결된 기록 8개와 그 밖의 당시 검토 기록 7개가 더 있어 총 29개입니다. 아래 파일은 모두 당시 원고의 역사적 증거이므로 개별 파일을 소급 수정하지 않고 새 원고의 `reviewEvidence`로 재사용하지 않습니다.

| 파일 | 현재 상태 | 영향 등급 | 구체적 이유 | 새 상태 | 재검토 규칙 |
|---|---|---|---|---|---|
| `docs/project/reviews/2026-08-05-analytics-dashboard-case-study-opus5-review.md` | 반도체 분석 캡스톤 독립 검토 결과 | 역사적 증거 보존 | 현재 `analytics-dashboard-case-study.md`의 기존 `request:`가 가리키는 당시 원고 검토입니다. | 파일 그대로 보존 | 주가 fixture 원고에는 새 독립 검토 파일과 새 `request:`를 만들며 재사용하지 않습니다. |
| `docs/project/reviews/2026-08-05-analytics-dashboard-case-study-review-prep.md` | 반도체 분석 캡스톤 검토 준비 기록 | 역사적 증거 보존 | 당시 반도체 시나리오·`review` 상태와 입력 파일 범위를 기록합니다(`:5-9,76-98`). | 파일 그대로 보존 | 새 원고의 준비 문서는 별도로 만들고 이 기록의 판정·입력 지문을 새 증거로 사용하지 않습니다. |
| `docs/project/reviews/2026-08-05-browser-dom-rendering-opus5-adjudication.md` | 브라우저·DOM 원고 재판정 기록 | 역사적 증거 보존 | 현재 표면 편집 후보 원고의 당시 지적 수용·기각 근거를 보존해야 합니다. | 파일 그대로 보존 | 실제 diff가 표면 편집 범위를 넘으면 새 재판정 기록을 만듭니다. |
| `docs/project/reviews/2026-08-05-browser-dom-rendering-opus5-review.md` | 브라우저·DOM 원고 독립 검토 결과 | 역사적 증거 보존 | 현재 `browser-dom-rendering.md`의 기존 `request:`가 가리키는 당시 원고 검토입니다. | 파일 그대로 보존 | 최소 명칭 편집의 상태 유지 판단에 참고만 하고 새 내용의 검토 증거로 재사용하지 않습니다. |
| `docs/project/reviews/2026-08-05-browser-dom-rendering-review-prep.md` | 브라우저·DOM 원고 검토 준비 기록 | 역사적 증거 보존 | 당시 입력·범위·검토 요청을 기록한 준비 자료입니다. | 파일 그대로 보존 | 새 검토가 필요하면 변경 후 원고 기준 준비 파일을 별도로 만듭니다. |
| `docs/project/reviews/2026-08-05-build-deploy-domain-dns-review-prep.md` | 빌드·배포·도메인·DNS 원고 검토 준비 기록 | 역사적 증거 보존 | 사례 전환 직접 대상은 아니지만 승인된 2026-08-05 역사 기록 범위에 속합니다. | 파일 그대로 보존 | 이중 사례 전환의 새 증거로 재사용하지 않으며 해당 원고 변경 시 별도 검토를 수행합니다. |
| `docs/project/reviews/2026-08-05-build-track-review-status-audit.md` | 당시 Build Track 상태 감사 | 역사적 증거 보존 | 당시 목록·상태 수를 보여 주는 시점 기록이며 목표 13개 장 상태로 소급 고치면 역사성이 깨집니다. | 파일 그대로 보존 | 새 13개 장 상태 감사는 별도 날짜의 새 파일로 작성합니다. |
| `docs/project/reviews/2026-08-05-client-server-full-stack-opus5-adjudication.md` | 클라이언트·서버 원고 재판정 기록 | 역사적 증거 보존 | 실질 변경 대상 원고의 당시 지적 처리 근거입니다. | 파일 그대로 보존 | 새 사례 원고의 지적은 새 재판정 기록에서 다룹니다. |
| `docs/project/reviews/2026-08-05-client-server-full-stack-opus5-review.md` | 클라이언트·서버 원고 독립 검토 결과 | 역사적 증거 보존 | 현재 `client-server-full-stack.md`의 기존 `request:`가 가리키는 당시 원고 검토입니다. | 파일 그대로 보존 | 새 사례 원고에는 새 독립 검토와 새 `request:`가 필요합니다. |
| `docs/project/reviews/2026-08-05-client-server-full-stack-review-prep.md` | 클라이언트·서버 원고 검토 준비 기록 | 역사적 증거 보존 | 반도체 대시보드 흐름을 포함한 당시 입력과 범위를 보존합니다. | 파일 그대로 보존 | 새 사용자·입력·실패 흐름을 반영한 별도 준비 기록을 만듭니다. |
| `docs/project/reviews/2026-08-05-git-and-github-review-prep.md` | Git·GitHub 원고 검토 준비 기록 | 역사적 증거 보존 | Task 1 식별자 그래프에 포함된 당시 검토 준비 기록이며 사례 전환 전 정본의 문맥을 가집니다. | 파일 그대로 보존 | 새 사례 전환의 `reviewEvidence`로 재사용하지 않습니다. |
| `docs/project/reviews/2026-08-05-logs-monitoring-backup-review-prep.md` | 로그·모니터링·백업 원고 검토 준비 기록 | 역사적 증거 보존 | 사례 전환 직접 대상은 아니지만 승인된 2026-08-05 역사 기록 범위에 속합니다. | 파일 그대로 보존 | 해당 원고를 새 사례에 맞춰 바꿀 때 별도 검토 기록을 만듭니다. |
| `docs/project/reviews/2026-08-05-opus5-cross-review.md` | 여러 원고의 교차 독립 검토 결과 | 역사적 증거 보존 | 현재 `http-request-response.md`의 기존 `request:`가 가리키며 반도체 예시 전환 전 원고를 검토했습니다. | 파일 그대로 보존 | 실질 변경된 HTTP 원고에는 범위가 명확한 새 독립 검토를 만들고 이 교차 검토를 재사용하지 않습니다. |
| `docs/project/reviews/2026-08-05-prd-sdd-tdd-opus5-adjudication.md` | PRD·SDD·TDD 원고 재판정 기록 | 역사적 증거 보존 | 표면 편집 후보 원고의 당시 지적 처리 근거입니다. | 파일 그대로 보존 | 요구·오라클·출처 의미가 바뀌면 새 재판정 기록을 만듭니다. |
| `docs/project/reviews/2026-08-05-prd-sdd-tdd-opus5-review.md` | PRD·SDD·TDD 원고 독립 검토 결과 | 역사적 증거 보존 | 현재 `prd-sdd-tdd.md`의 기존 `request:`가 가리키는 당시 원고 검토입니다. | 파일 그대로 보존 | 최소 링크 편집의 참고만 허용하며 새 내용의 검토 증거로 재사용하지 않습니다. |
| `docs/project/reviews/2026-08-05-prd-sdd-tdd-review-prep.md` | PRD·SDD·TDD 원고 검토 준비 기록 | 역사적 증거 보존 | 당시 사례 연결과 입력 범위를 기록합니다. | 파일 그대로 보존 | 새 검토가 필요하면 변경된 요구 추적 범위로 별도 준비 기록을 만듭니다. |
| `docs/project/reviews/2026-08-05-software-is-a-system-opus5-adjudication.md` | 시스템 사고 원고 재판정 기록 | 역사적 증거 보존 | 실질 변경 대상 원고의 당시 지적 처리 근거입니다. | 파일 그대로 보존 | 새 사례의 시스템 렌즈 판정은 새 기록에서 수행합니다. |
| `docs/project/reviews/2026-08-05-software-is-a-system-opus5-review.md` | 시스템 사고 원고 독립 검토 결과 | 역사적 증거 보존 | 현재 `software-is-a-system.md`의 기존 `request:`가 가리키는 당시 원고 검토입니다. | 파일 그대로 보존 | 실질 변경 원고에는 새 독립 검토와 새 `request:`가 필요합니다. |
| `docs/project/reviews/2026-08-05-software-is-a-system-review-prep.md` | 시스템 사고 원고 검토 준비 기록 | 역사적 증거 보존 | 반도체 대시보드의 여섯 렌즈 적용을 포함한 당시 범위를 보존합니다. | 파일 그대로 보존 | 새 기본·보조 사례 역할을 반영한 별도 준비 기록을 만듭니다. |
| `docs/project/reviews/2026-08-05-testing-strategy-review-prep.md` | 테스트 전략 원고의 첫 검토 준비 기록 | 역사적 증거 보존 | `FR-014`와 사례 오라클 연결 전후의 당시 검토 문맥을 보존합니다. | 파일 그대로 보존 | 링크 문맥만 바뀌면 참고만 하고 오라클이 바뀌면 새 검토 기록을 만듭니다. |
| `docs/project/reviews/2026-08-05-working-with-coding-agents-review-prep.md` | 코딩 에이전트 원고 검토 준비 기록 | 역사적 증거 보존 | 사례 전환 직접 대상은 아니지만 승인된 2026-08-05 역사 기록 범위에 속합니다. | 파일 그대로 보존 | 이중 사례 전환의 새 증거로 재사용하지 않습니다. |
| `docs/project/reviews/2026-08-06-api-database-auth-opus5-adjudication.md` | API·DB·인증 원고 재판정 기록 | 역사적 증거 보존 | 보고서 수정 계약을 검토한 당시 지적 처리 근거입니다. | 파일 그대로 보존 | 모임 참가·취소 계약의 지적은 새 재판정 기록에서 다룹니다. |
| `docs/project/reviews/2026-08-06-api-database-auth-opus5-review.md` | API·DB·인증 원고 독립 검토 결과 | 역사적 증거 보존 | 현재 `api-database-auth.md`의 기존 `request:`가 가리키는 당시 원고 검토입니다. | 파일 그대로 보존 | 새 모임 원고에는 새 독립 검토와 새 `request:`가 필요합니다. |
| `docs/project/reviews/2026-08-06-api-database-auth-review-prep.md` | API·DB·인증 원고 검토 준비 기록 | 역사적 증거 보존 | 반도체 보고서 수정과 SVG/Mermaid 입력을 기록합니다(`:5-7,73-74`). | 파일 그대로 보존 | 모임 참가·취소 원고와 새 다이어그램을 대상으로 별도 준비 기록을 만듭니다. |
| `docs/project/reviews/2026-08-06-files-folders-paths-opus5-adjudication.md` | 파일·폴더·경로 원고 재판정 기록 | 역사적 증거 보존 | 사례 전환 직접 대상은 아니지만 승인된 2026-08-06 역사 기록 범위에 속합니다. | 파일 그대로 보존 | 해당 원고 변경 시 별도 재판정 기록을 만듭니다. |
| `docs/project/reviews/2026-08-06-files-folders-paths-opus5-review.md` | 파일·폴더·경로 원고 독립 검토 결과 | 역사적 증거 보존 | 당시 기준 장의 독립 검토 결과로 현재 사례 전환의 새 증거가 아닙니다. | 파일 그대로 보존 | 이중 사례 전환의 `reviewEvidence`로 재사용하지 않습니다. |
| `docs/project/reviews/2026-08-06-files-folders-paths-review-prep.md` | 파일·폴더·경로 원고 검토 준비 기록 | 역사적 증거 보존 | 당시 기준 장의 입력·범위를 기록합니다. | 파일 그대로 보존 | 새 검토가 필요할 때 별도 준비 파일을 만듭니다. |
| `docs/project/reviews/2026-08-06-testing-strategy-opus5-adjudication.md` | 테스트 전략 원고 재판정 기록 | 역사적 증거 보존 | 현재 `testing-strategy.md`의 오라클과 사례 링크를 포함한 당시 지적 처리 근거입니다. | 파일 그대로 보존 | `FR-014`나 테스트 오라클이 바뀔 때 새 재판정 기록을 만듭니다. |
| `docs/project/reviews/2026-08-06-testing-strategy-opus5-review.md` | 테스트 전략 원고 독립 검토 결과 | 역사적 증거 보존 | 현재 `testing-strategy.md`의 기존 `request:`가 가리키는 당시 원고 검토입니다. | 파일 그대로 보존 | 링크 문맥 유지 여부의 참고만 허용하며 새 내용의 검토 증거로 재사용하지 않습니다. |

## 상태 영향

- 공개 문서 12개의 현재 상태는 `review` 8개, `draft` 4개입니다. 이 감사만으로 frontmatter를 바꾸지 않습니다.
- 실질 변경은 7개입니다. 현재 `review`인 `analytics-dashboard-case-study.md`, `api-database-auth.md`, `software-is-a-system.md`, `client-server-full-stack.md`, `http-request-response.md` 5개는 각 파일의 실질 변경을 시작하는 커밋에서만 `draft`로 바꾸고 기존 `reviewEvidence`를 제거합니다. 현재 `draft`인 `first-full-stack-project.md`와 `learning-paths.md`는 `draft`를 유지합니다.
- 표면 편집은 `browser-dom-rendering.md`, `prd-sdd-tdd.md`, `12-case-studies/index.md`, `index.md` 4개입니다. 앞의 두 `review` 문서는 최소 diff와 학습 결론 보존이 실제로 확인될 때만 상태 유지 후보이며, 사례 인덱스와 홈은 `draft`를 유지합니다. 홈은 `12개 장`→`13개 장` 링크 문구와 대상 링크를 함께 확인합니다.
- `testing-strategy.md` 1개는 `FR-014`와 테스트 오라클이 유지되면 조건부 변경 없음 또는 링크 문맥 표면 편집이고 `review` 유지 후보입니다. 확정된 변경 없음 문서는 0개입니다.
- 기존 `review` 문서를 일괄 강등하지 않습니다. 실질 변경된 새 원고는 과거 `request:`와 자동 검증을 승계하지 않고 새 독립 검토를 거쳐야 합니다.
- 역사적 검토 기록 29개와 기존 API 조사 브리프에는 공개 콘텐츠 상태를 부여하거나 새 상태로 승격하지 않습니다. 당시 정본의 증거로 그대로 보존합니다.

## 후속 계획 입력

1. 모임 웹앱 작업은 `first-full-stack-project.md`와 `bookmark-architecture` SVG/Mermaid 쌍을 한 의미 단위로 다루고 기존 `draft`를 유지합니다.
2. 주가 분석 작업은 `analytics-dashboard-case-study.md`, `analytics-dashboard-architecture` SVG/Mermaid 쌍, 새 조사 브리프와 `research/source-map.md`의 새 적용 기록을 묶되 공식 원천 채택 전 교육용 fixture만 사용합니다.
3. 반복 사례 전환은 실질 변경 5개 `review` 원고를 작은 독립 단위로 나누고, 각 단위가 시작될 때만 `draft` 전환·기존 `reviewEvidence` 제거·새 독립 검토를 적용합니다.
4. 표면 편집 후보는 구현 diff에서 요구사항·필드·권한·위험·오라클·출처·결론이 유지되는지 먼저 대조하고 하나라도 달라지면 실질 변경으로 재분류합니다.
5. 학습 경로 동기화는 두 캡스톤이 준비된 뒤 `learning-paths.md`의 12→13장, 사례 인덱스, 홈 `index.md`의 `12개 장`→`13개 장` 링크 문구·대상 링크, `CONTENT_MAP.md` 파생 결과를 순서대로 확인합니다.
6. `research/api-database-auth-research-brief.md`와 2026-08-05·06 역사 검토 기록 29개는 수정하거나 새 증거로 재사용하지 않고, 새 조사·검토 파일을 별도 생성합니다.
7. 각 후속 커밋은 공개 원고와 대응 SVG/Mermaid·출처·상태의 의미를 함께 검증하되 네트워크·새 의존성·실제 주식 데이터·현재 제품 기능 주장은 별도 승인 전 도입하지 않습니다.
