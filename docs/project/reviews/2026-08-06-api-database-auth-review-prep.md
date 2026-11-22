# API·데이터베이스·인증 검토 준비 기록

## 목적과 현재 상태

이 문서는 공식 Build Track 네 번째 장인 `src/content/docs/04-backend-data/api-database-auth.md`의 자체 품질 점검과 독립 검토 요청 범위를 기록합니다. 원고는 사용자가 자신의 반도체 지표 보고서를 수정하는 한 요청을 API 계약·인증·인가·업무 규칙·트랜잭션·응답과 증거로 연결한 16,212자의 `review`입니다. 공개 원고, 7단계 SVG·Mermaid, 개발 용어집과 확인한 공식 출처 범위를 동기화한 뒤 작성 맥락을 공유하지 않은 Opus 5 Max 검토·Codex 재판정·지적 반영·자동 및 브라우저 검증을 완료했으며, 사람 기술·편집 검토와 실제 비개발자 독자 테스트는 아직 수행하지 않았습니다.

이 문서의 최초 자체 루브릭과 실행 계약은 검토 전 기록이었고, 아래 표는 재판정 항목을 반영한 원고를 다시 평가한 결과입니다. 실제 Claude 결과와 메타데이터는 `docs/project/reviews/2026-08-06-api-database-auth-opus5-review.md`, Codex 재판정은 `docs/project/reviews/2026-08-06-api-database-auth-opus5-adjudication.md`에 분리했습니다. P1과 필수 P2를 반영하고 실제 `request:` 경로·자동 검증·두 뷰포트 렌더링을 확인해 공개 문서에 `reviewEvidence`를 추가하고 `contentStatus: review`로 올렸습니다.

## 독립 검토와 재판정 결과 — 2026-08-06

Claude Code 2.1.223의 `claude-opus-5`를 `max` 추론 강도, 계획 모드, `Read` 전용 권한과 안전 모드로 실행했습니다. 종료 코드 0으로 P0 0건·P1 5건·P2 13건·독립 루브릭 15/18을 회수했고, 웹 검색·웹 가져오기·권한 거부는 모두 0건이었습니다. 검토 전후 17개 입력의 결합 SHA-256 `f065e286a9f4a52c2e1a0537782540782a7ef86218c9ec1629460b8a27b0deef`와 대상 원고 SHA-256 `75b98fc5696a7b82db816249750487f669bbc01cb1ca08dece6461368526b146`가 일치했습니다.

Codex는 실제 원고·용어집·브리프·출처 지도·다이어그램에 대조해 P1을 수용 4건·부분 수용 1건, P2를 수용 10건·부분 수용 2건·기각 1건으로 판정했습니다. 안전한 AI 계약과 허가받은 부정 테스트, 일반화된 인증 실패 응답, MAC과 API 호환성 설명, 응답 유실 다이어그램, 관찰 주체와 출처 URL 동기화를 반영했습니다. RFC 7519를 새로 확인하지 않았으므로 JWT 관계를 추가하지 않고 공개 원고의 표현을 이미 확인한 “서명된 토큰” 범위로 좁혔습니다. 독립 15/18은 반영 전 외부 판정이고, 아래 자체 18/18은 반영 후 원고의 작성자 재평가로 구분합니다.

## Opus 재판정 반영 결과

1. 테스트 계정·가짜 데이터·명시적 테스트 권한, 실제 토큰·세션 값·연결 문자열·개인정보 출력 금지와 운영 데이터·설정 변경 금지를 복사 가능한 AI 계약에 고정했습니다.
2. 외부 인증 실패 응답과 통제된 내부 로그를 분리하고, 계정 존재·실패 요소를 불필요하게 노출하지 않는 체크 항목을 추가했습니다.
3. backend·endpoint·MAC·`expectedVersion`·prepared statement와 parameterized query를 첫 등장에 풀고, API 호환성·내부 스키마와 외부 계약·쿠키 전달 경계·장의 비목표를 설명했습니다.
4. 직접 관찰할 수 있는 증거와 권한 있는 담당자에게 요청할 증거, 쿼리 실행 지점과 명령문·값 전달 방식, 브라우저별 `Network` 명칭 차이를 AI 계약과 인접 장 링크에 연결했습니다.
5. 게시 SVG·Mermaid·대체 텍스트에 형식·계약 오류와 `commit` 뒤 응답 전달 실패를 같은 문구로 반영했습니다.
6. PostgreSQL 문서를 버전 18 고정 URL로 통일하고 MDN을 RFC 9110보다 낮은 설명용 보조 자료로 공개 원고·브리프·출처 지도에 명시했습니다.

## 자체 품질 루브릭

| 항목 | 점수 | 근거와 남은 한계 |
|---|---:|---|
| 독자 문제 | 2 | 비개발자 데이터 분석가가 다중 사용자 대시보드에서 자신의 보고서만 안전하게 수정하고 AI의 완료 주장을 검증해야 하는 구체적인 상황에서 시작합니다. |
| 정확성 | 2 | API·endpoint·backend, 인증·인가, 세션·토큰·권한 정책, `Authorization` 헤더·쿠키와 인가 판단, JWS의 서명·MAC 보호와 JWE의 암호화·무결성 보호, 값·쿼리 구조, 내부 스키마·외부 계약, 트랜잭션·동시 충돌을 구분하고 제품·상태 코드 일반화 한계를 표시합니다. |
| 구조 | 2 | 요청과 대상 식별에서 API 계약·인증·대상과 관계 조회·인가·업무 검증·트랜잭션과 `commit`·응답과 증거로 이어지는 전체 시스템 흐름을 보여 줍니다. |
| 쉬운 설명 | 2 | 회사 안내 창구·출입 확인·권한 규칙·기록실 비유와 보고서 수정 사례를 정식 용어에 연결하고 backend·endpoint·MAC·`expectedVersion`·prepared statement를 첫 등장에 풉니다. |
| 비유 한계 | 2 | API는 모호한 말을 사람처럼 해석하지 않고 데이터베이스는 단순 서류함이 아니며 토큰 하나가 모든 권한을 완전히 담지 않는다는 깨지는 지점을 명시합니다. |
| 판단 기준 | 2 | 주체·대상·행동 권한 질문, 신뢰 경계, 계약과 실행 증거 분리, 재시도 전 상태 확인, Network·테스트·데이터·안전한 로그의 판정 기준이 있습니다. |
| 실패 모드 | 2 | 인증 실패·권한 거절·입력 오류·충돌·부분 실패·응답 유실을 가능한 HTTP 계약, 예방·rollback·재조회·부정 테스트에 연결합니다. |
| 실전 연결 | 2 | 안전한 실행 범위를 포함한 AI 작업 계약, 허가받은 사용자 A/B·경계값·충돌·저장 실패 테스트, 17개 확인 항목과 세 연습으로 자신의 프로젝트에 적용하게 합니다. |
| 근거 | 2 | 2026-08-06 직접 확인한 OpenAPI·NIST·IETF·OWASP·PostgreSQL·MDN 자료의 출처 유형·적용 범위·일반화 금지선이 연구 브리프와 출처 지도에 추적됩니다. |

합계는 18점 중 18점입니다. 자체 점검에서 보안·데이터 손실 위험 무시, 확인하지 않은 제품 동작 단정, AI 결과 무검증 신뢰, 저작권이 불명확한 자료 같은 치명 항목은 발견하지 못했습니다. 이 점수는 지적 반영 후 작성자의 자체 평가이므로 독립 검토나 사람 `technical:`·`editorial:`·`reader:` 증거를 대신하지 않습니다.

## 자체 점검에서 확인한 핵심 경계

1. OpenAPI 같은 명세는 계약 기술 수단이지만 실행 중인 구현의 준수나 권한 집행 증거가 아니라는 점을 실제 요청·응답과 권한 테스트에 연결했습니다.
2. 인증 뒤 권한 판단에 필요한 보고서와 소유·공유 관계를 확인하고, 주체·대상·행동별 인가를 우회할 수 없는 신뢰 경계에서 집행하게 했습니다.
3. 클라이언트 버튼 숨김과 서버 권한 검사, 입력·업무 규칙 검증과 인가를 분리했습니다.
4. `Authorization` 헤더는 자격 증명 전달 위치이고 자원별 인가 판단은 별도 책임이라는 점을 명시했습니다.
5. 세션과 토큰을 상태·자격 전달 수단으로 한정하고 JWS의 서명·MAC 기반 무결성 보호와 JWE의 암호화·무결성 보호를 구분했습니다.
6. 사용자 입력을 값으로 처리하고 쿼리 구조와 분리하되 prepared statement가 인가·입력 범위·업무 규칙을 대신하지 않는다고 설명했습니다.
7. 애플리케이션 검증과 데이터베이스 제약을 독립된 보완 계층으로 설명했습니다.
8. 보고서와 변경 이력의 트랜잭션·`commit`·`rollback`을 HTTP 요청·백업 복원과 구분했습니다.
9. 트랜잭션의 원자성과 동시 수정 충돌 정책을 분리하고 PostgreSQL 18의 직렬화 실패·재시도를 제품 예시로만 제한했습니다.
10. `401`·`403`·`404`·`400`·`409`·`5xx`를 가능한 API 계약 사례로 제시하고 상태 코드만으로 내부 원인을 확정하지 않게 했습니다.
11. 성공과 실패를 화면 하나가 아니라 요청·응답, 사용자 A/B 권한 테스트, 보고서·변경 이력 상태, 비밀을 제외한 요청 ID 로그로 연결했습니다.

## 실행한 독립 검토 계약

Claude Code의 `claude-opus-5`, effort `max`를 계획 모드와 `Read` 전용 권한으로 실행했습니다. 검토자는 아래 파일만 읽고 파일 수정, Bash, 웹 검색·웹 가져오기, 외부 플러그인과 하위 에이전트를 사용하지 않았습니다. 모델 식별자·CLI 버전·종료 코드·웹 및 권한 이벤트·검토 전후 입력 SHA-256은 실제 실행 기록에 따로 남겼습니다.

- `AGENTS.md`
- `PROJECT_CONTEXT.md`
- `RULES.md`
- `docs/project/content-lifecycle.md`
- `docs/project/quality-rubric.md`
- `docs/project/editorial-guide.md`
- `research/source-map.md`
- `research/api-database-auth-research-brief.md`
- `src/content/docs/04-backend-data/api-database-auth.md`
- `src/content/docs/03-full-stack/http-request-response.md`
- `src/content/docs/03-full-stack/client-server-full-stack.md`
- `src/content/docs/04-backend-data/data-model-schema-migration.md`
- `src/content/docs/08-quality/performance-security.md`
- `src/content/docs/10-deployment-operations/logs-monitoring-backup.md`
- `src/content/docs/reference/development-glossary.md`
- `src/assets/diagrams/api-database-auth-flow.svg`
- `src/assets/diagrams/source/api-database-auth-flow.mmd`

### 우선순위 정의

- **P0 치명 오류**: 다른 사용자의 데이터 접근, 자격 증명 노출, 부분 저장과 데이터 손실을 유도하거나 핵심 개념을 거꾸로 설명해 독자가 위험한 결정을 할 수 있는 문제입니다.
- **P1 review 전 필수**: 핵심 정의·예외·흐름·출처 적용·다이어그램·연습이 부정확하거나 빠져 학습 목표를 독립적으로 재구성할 수 없는 문제입니다.
- **P2 개선 권장**: 핵심 안전성은 유지되지만 표현·순서·비유·교차 링크·연습의 명료성이나 효율을 높일 수 있는 문제입니다.

### 검토 질문

1. API를 전체 계약과 기능 경계로, endpoint를 구체적 접근 지점으로, backend를 더 넓은 실행 책임으로 구분한 설명이 정확하고 비개발자가 재구성할 수 있나요?
2. OpenAPI 명세와 실제 런타임 준수 증거를 구분하고 계약의 입력·성공·오류·권한·호환성 조건을 과장 없이 설명했나요?
3. 인증과 인가, `Authorization` 헤더와 인가 판단, 세션·토큰과 권한 정책을 구분했으며 주체·대상·행동별 검사가 우회할 수 없는 경계에 있다는 점이 명확한가요?
4. 사용자 A/B 보고서 ID 부정 테스트와 클라이언트 버튼 숨김의 한계가 객체·기능별 권한 누락 위험을 실제로 찾을 수 있게 하나요?
5. JWS 서명·MAC 기반 무결성 보호와 JWE 암호화·무결성 보호를 구분한 설명이 JWT 전체를 특정 형식이나 권고로 일반화하지 않나요?
6. 사용자 입력 값과 쿼리 구조의 분리, prepared statement의 역할과 한계, 애플리케이션 검증과 데이터베이스 제약의 관계가 정확한가요?
7. 트랜잭션·`commit`·`rollback`, HTTP 요청, 백업 복원과 동시 수정 충돌 정책의 경계를 정확히 설명하고 PostgreSQL 제품 동작을 보편 규칙으로 확대하지 않나요?
8. `401`·`403`·`404`·`400`·`409`·`5xx`를 가능한 계약 사례로 한정하고 상태 코드만으로 내부 원인을 확정하지 않게 했나요?
9. Network 탭·로그·테스트·데이터 상태를 연결하는 증거 절차가 실제로 관찰 가능하며 토큰·세션·비밀번호·연결 문자열·키·민감 개인정보 노출을 막나요?
10. 회사 건물 비유의 맞는 지점과 깨지는 지점, 7단계 SVG·Mermaid와 이미지 대체 텍스트가 같은 논리 흐름을 전달하나요?
11. 2026-08-06 확인 출처 12개 ID가 공개 원고의 핵심 주장 11개를 직접 뒷받침하며, 표준·미국 연방 지침·실무 지침·제품 문서·설명 자료의 효력과 적용 한계가 섞이지 않았나요?
12. AI 작업 계약, 15개 확인 항목과 세 연습으로 비개발자가 정상·인증 실패·권한 거절·입력 오류·충돌·부분 실패의 책임과 증거를 새로운 프로젝트에 적용할 수 있나요?
13. 품질 루브릭 9개 항목을 0~2점으로 독립 평가하고 치명 항목 여부와 자체 18/18에 대한 반론을 제시해 주세요.

결과는 `P0 치명 오류`, `P1 review 전 필수`, `P2 개선 권장`, `잘된 점`, `루브릭 점수`, `추가 출처 확인 목록` 순서로 작성하고 각 지적에는 대상 제목이나 짧은 대상 문구, 문제의 근거, 독자에게 생기는 위험과 최소 수정 방향을 포함해야 합니다. 지적이 없으면 각 구역에 `없음`이라고 명시합니다.

## 실행 전 입력 지문

2026-08-06 KST에 위 17개 파일을 나열된 순서로 `shasum -a 256`한 출력의 결합 SHA-256은 `f065e286a9f4a52c2e1a0537782540782a7ef86218c9ec1629460b8a27b0deef`입니다.

| 입력 파일 | SHA-256 |
|---|---|
| `AGENTS.md` | `99df8a3c8197a64e75dc02752bfe9b048cbcc7a5b383fa6c35132c166eac56d4` |
| `PROJECT_CONTEXT.md` | `64e0529f731702ad6e98d66dc219770a65c76db6b259313b9e82d26675cc4c9d` |
| `RULES.md` | `9c68b91038149c57a811b0f431012c6ffb96b3b5464600768c12095dac5914eb` |
| `docs/project/content-lifecycle.md` | `bd91e539584a57e43064f07c0f06563633556a946d0eba6216d2fe34800dbe0c` |
| `docs/project/quality-rubric.md` | `3a6c67c53d6439b4df50b13cb2ead409b1d6a32748e28564f52408e09e735e88` |
| `docs/project/editorial-guide.md` | `b4280254baa025bc24c62767766f1a4813f6d3a867eaefeef1b2cb906c401f17` |
| `research/source-map.md` | `99c516d95808e9f8f89973b89a69004bd705d8b672375e48d571702363968540` |
| `research/api-database-auth-research-brief.md` | `b56defd2d63814bee92c724ab072683af99d3418d50c3aff04dcb775863cc2c6` |
| `src/content/docs/04-backend-data/api-database-auth.md` | `75b98fc5696a7b82db816249750487f669bbc01cb1ca08dece6461368526b146` |
| `src/content/docs/03-full-stack/http-request-response.md` | `24a7e5c488c096393af08816f8082c2b075128491c4a1c3f636b59b3d32d0bb5` |
| `src/content/docs/03-full-stack/client-server-full-stack.md` | `a09166c5e6c51a41cc4b393acac4172c70968a78516e7eae9514b6d6a9ae7bba` |
| `src/content/docs/04-backend-data/data-model-schema-migration.md` | `efc44571b3415420af83cb3b8d48bffd1dc2fae5009f93ec397987f1f9fc5ecf` |
| `src/content/docs/08-quality/performance-security.md` | `217d3db41e5c40a8478f3e678c45efdea2a1aadd1296c0a5e913c537ccf475a5` |
| `src/content/docs/10-deployment-operations/logs-monitoring-backup.md` | `7a3720d93d0a9881f9e5709e61fbe55318218a833a879f9afb21e98e6a315ce6` |
| `src/content/docs/reference/development-glossary.md` | `fb094157e05898cfd13849231563c7166aa757749cedc63eb5cafb24f0c0c249` |
| `src/assets/diagrams/api-database-auth-flow.svg` | `422298c8719ea6217e89f206bbbc4c02186ed706ce743c18b0724222eed15b6a` |
| `src/assets/diagrams/source/api-database-auth-flow.mmd` | `1315d335aeed2d6b946c5d6a4f98807e917f1d2006f5ae1f71274f0f4d66a636` |

실제 검토를 시작하기 직전과 종료 직후 같은 방식으로 다시 계산했으며 결합 지문과 대상 원고 지문이 모두 일치했습니다. 따라서 결과는 표에 기록한 현재 원고 버전의 독립 검토 증거로 사용할 수 있습니다.

## 승격 경계

Opus 정상 결과와 입력 불변, Codex 재판정·지적 반영·실제 `request:` 기록·`npm run check`·1440×1000 및 390×844 브라우저 검증을 갖춰 공개 원고를 `review`로 올렸습니다. 이는 독립 검토가 시작됐다는 뜻일 뿐 출판 준비 완료가 아닙니다. AI 독립 검토와 자동 검증은 사람 기술·편집 검토와 실제 비개발자 독자 테스트를 대신하지 않으므로 사람 `technical:`·`editorial:`·`reader:` 증거 전에는 `ready`로 올리지 않습니다.
