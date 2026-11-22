# R16 백엔드 지원 — 직접 근거와 현재성

확인일은 2026-11-15입니다. 세 원고의 검토를 위한 관련 절만 읽었으며 서비스·DB·큐를 설치하거나 실행하지 않았습니다. 아래는 직접 인용이 아닌 요약이고, 오래된 확인일이나 실패 기록을 소급 갱신하지 않습니다.

## HTTP 역할과 브라우저 신뢰 경계

- [RFC 9110 §3.3–3.4](https://www.rfc-editor.org/rfc/rfc9110.txt): 연결에서 요청을 보내는 역할과 응답하는 역할을 구분하며 같은 프로그램이 서로 다른 연결에서 두 역할을 할 수 있습니다. 이것만으로 프런트엔드·백엔드의 조직적 경계나 보안 구현이 정해지는 것은 아닙니다.
- [OWASP 기존 AJAX 주소](https://cheatsheetseries.owasp.org/cheatsheets/AJAX_Security_Cheat_Sheet.html): 이번 추출 결과의 제목은 Web Frontend Security Cheat Sheet입니다. 클라이언트 로직·업무 규칙을 보안의 권위로 신뢰하지 말고 중요한 규칙은 서버에서 확인하라는 절, 클라이언트로 보낸 비밀은 사용자가 읽거나 바꿀 수 있다는 절을 읽었습니다. 원래 제목을 현재 제목으로 간주하지 않으며 HTTP 리다이렉트 헤더까지 확인한 것은 아닙니다.
- [Chrome Sources](https://developer.chrome.com/docs/devtools/sources): 로드된 자원을 확인하고 편집·디버깅할 수 있습니다. CSS와 JS 편집의 반영 방식 및 재로드 뒤 보존 조건은 다릅니다. 원고의 브라우저 전달 정보 관찰을 뒷받침하며 현재 설치된 Chrome의 실제 조작 성공을 뜻하지 않습니다.
- 같은 실행의 [R04 직접 근거](r04-api-data-auth-2026-11-15.md)에서 OWASP Authorization의 기본 거절·매 요청 권한 확인, API1의 대상별 권한 검사, 세션과 업무 상태 구분을 재사용합니다. R04 원고 판정의 자동 재사용이나 R16 전체 검토 완료는 아닙니다.

## PostgreSQL 18 데이터 구조와 변경

- [Table Basics](https://www.postgresql.org/docs/18/ddl-basics.html): 열의 자료형은 허용 값과 연산 의미를 제한하며 CREATE TABLE은 이름·열·자료형을 선언합니다.
- [Constraints §5.5.2–5.5.5](https://www.postgresql.org/docs/18/ddl-constraints.html): NOT NULL은 null을 금지하고 복합 UNIQUE는 조합의 중복을 제한합니다. 기본 null 비교에는 예외가 있으므로 비어 있지 않아야 하는 관계 키는 별도 조건이 필요합니다. 기본키는 유일성과 비null을 요구하고 외래키는 참조 관계를 제한합니다. UNIQUE 전체 행 제한과 일부 행에 적용하는 부분 유일 인덱스는 구분합니다.
- 같은 실행의 R04 근거에서 CHECK의 다른 행·테이블 검사 한계와 트랜잭션·격리·재시도 범위를 재사용합니다. 단일 capacity 양수 조건이나 행 단위 CHECK만으로 동시 참가 정원을 보장하지 않습니다.
- [Modifying Tables §5.7](https://www.postgresql.org/docs/18/ddl-alter.html): 기본값 없는 새 열은 기존 행에서 null이 되고 새 제약을 추가하려면 기존 값도 제약을 만족해야 합니다. 기본값 변경은 기존 행을 바꾸지 않으며 열 제거는 그 값을 잃게 합니다. 휘발성 기본값·형 변환·종속 제약에 따라 작업량과 실패 조건이 달라집니다. 운영 마이그레이션의 무중단·잠금 시간이나 복구 성공은 이 설명만으로 확인되지 않습니다.

## 마이그레이션과 호환성

- [Parallel Change](https://martinfowler.com/bliki/ParallelChange.html): 확장·소비자 전환·구 구조 제거를 나누고 전환 중 두 인터페이스를 지원합니다. 제거 단계를 끝내지 않으면 복잡성이 남습니다. 원고의 확장·이관·검증·전환·정리 단계는 교육용 구체화이며 모든 시스템에 같은 순서를 기계적으로 적용하는 보장은 아닙니다.
- [Continuous Integration의 데이터베이스 절](https://martinfowler.com/articles/continuousIntegration.html): 스키마와 데이터의 작은 변경을 버전 관리하는 마이그레이션으로 만들고 애플리케이션 변경과 함께 시험하는 접근입니다. 글 전체를 R16 근거로 읽었다고 주장하지 않습니다.
- [Evolutionary Database Design](https://martinfowler.com/articles/evodb.html)의 All database changes are migrations, Transition phase, Multiple versions 절: 변경 식별·적용 이력·순서와 기존 접근 방식의 과도기 지원, 동시에 살아 있는 앱 버전과 DB의 호환성이 필요합니다. 데이터 정합성·백필 중 새 쓰기·롤백 가능성은 해당 구현에서 별도로 검증해야 합니다.

## HTTP 캐시와 RabbitMQ의 적용 경계

- [RFC 9111 §4.2–4.3.1](https://www.rfc-editor.org/rfc/rfc9111.txt): freshness는 나이와 수명에 따른 HTTP 캐시 재사용 조건입니다. stale 제공은 명시 금지 지시를 어길 수 없고 허용 조건이 필요합니다. 재검증은 조건부 요청으로 저장 응답의 메타데이터를 갱신하거나 응답을 교체합니다. 이것은 화면 자동 갱신, 앱 캐시의 최신 DB 값, 업무 승인 안전을 보장하지 않습니다.
- [RabbitMQ Reliability Guide](https://www.rabbitmq.com/docs/reliability): 생산자 확인과 소비자 확인의 책임은 다르며 확인 유실·연결 장애 뒤 재전송/재전달로 중복이 발생할 수 있습니다. 소비자 멱등 처리, 처리 불가 메시지의 거절·재큐잉·보류 정책과 관측이 필요합니다. 메시지 확인은 임의 외부 부작용의 정확히 한 번 성공을 보장하지 않습니다.
- [RabbitMQ Queues](https://www.rabbitmq.com/docs/queues)의 Message ordering·Durability: 단일 채널의 발행 순서와 여러 채널의 섞임, 우선순위·재전달·여러 소비자의 관측 순서를 구분합니다. durable 큐와 persistent 메시지 조건을 함께 봐야 합니다. 첫 Tavily 추출에서 순서 예외 목록이 빠져 같은 URL의 Exa 본문으로 해당 목록을 보충했습니다. 제품의 모든 버전·프로토콜·구성에 동일한 보장을 일반화하지 않습니다.

## 이월 finding과 미확인 범위

R04-M05는 이 문서 생성만으로 해소되지 않습니다. R04의 host_id/participant_id와 R16 예시 host_user_id/participant_user_id의 역할 대응 및 복사 가능한 실행 계약으로 오인할 위험을 R16 최초 reviewer가 판단해야 합니다. 최초 결과·재판정·후속 결과를 함께 입력하며 과거 판정은 보존합니다.

이번 확인은 공식·1차 자료의 읽기 전용 접근입니다. DB/큐 런타임, 실제 동시성·마이그레이션·알림 전달, 운영 복구, 외부 서비스 배포는 not-confirmed입니다. 본문·그림·CSS는 아직 수정하지 않았습니다.
