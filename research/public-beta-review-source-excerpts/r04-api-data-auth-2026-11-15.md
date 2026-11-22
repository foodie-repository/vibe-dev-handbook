# R04 API·데이터베이스·인증 직접 근거 — 2026-11-15

확인일은 접근일이며 발행일이 아닙니다. 이 자료는 R04의 아래 주장에 필요한 공식 원문의 좁은 발췌와 재서술입니다. 기존 source-map·조사 브리프의 8월 확인일을 소급 변경하지 않습니다. 제품의 최신 버전이라고 주장하지 않고 명시된 버전의 의미만 적용합니다. 실제 모임 서비스의 구현·보안·동시성 성공을 입증하는 자료가 아닙니다. 각 절 밖의 구현 세부는 새로 확인했다고 주장하지 않습니다.

## OAS — 명세와 구현의 경계

- URL: https://spec.openapis.org/oas/v3.2.0.html
- 위치: Operation Object의 requestBody·responses·security, Security Requirement Object. 고정 버전 3.2.0.
- 짧은 원문: “The request body applicable for this operation.”, “A declaration of which security mechanisms can be used for this operation.”
- 적용: operation은 요청 본문·가능한 응답·보안 방식 선언을 포함합니다. security 배열의 대안과 하나의 요구 객체 안의 복수 방식 결합을 구분합니다. 이는 기술 형식이며 실제 서버의 객체별 인가나 정원 제약 집행을 증명하지 않습니다.

## NIST-ID — 인증 이후 세션의 연속성

- URL: https://pages.nist.gov/800-63-4/ 및 https://pages.nist.gov/800-63-4/sp800-63b.html
- 위치: Revision 4 안내, SP 800-63B의 Session Management와 Session secret 정의.
- 짧은 원문: “The continuity of authenticated sessions SHALL be based on the possession of a session secret”.
- 적용: 인증 시 발급한 세션 비밀을 소유하는 것으로 인증 세션의 연속성을 연결하며 브라우저 쿠키·모바일 앱 등의 전달·보관 형태를 구분합니다. 안내 페이지는 2025년 7월 최종 Revision 4 발행을 설명하지만 일부 연결 안내에 draft 표현이 남아 있습니다. 연방 지침을 모든 서비스의 법적 의무나 특정 세션 설계의 보편 정답으로 확대하지 않습니다.

## OWASP-AUTHN — 실패 응답의 정보 노출

- URL: https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html
- 위치: Authentication and Error Messages, Authentication Responses, Error Codes and URLs.
- 짧은 원문: “An application should respond (both HTTP and HTML) in a generic manner.”
- 적용: 잘못된 자격 증명·존재하지 않는 계정·잠김 여부를 인증 오류에서 불필요하게 구별하면 계정 열거 위험이 있습니다. 화면 문구만 같아도 HTTP 코드·URL이 다르면 노출될 수 있습니다. 지침 자체도 사용자 경험과 애플리케이션 위험에 따른 판단을 설명하므로 모든 오류를 무조건 같은 응답으로 만들라는 뜻은 아닙니다.

## OWASP-AUTHZ / API1 — 주체·대상·행동

- URL: https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html
- 위치: Deny by Default, Validate the Permissions on Every Request.
- 짧은 원문: “Permission should be validated correctly on every request”.
- 적용: 기본 거절과 요청별 권한 검증을 적용하며 프레임워크 기본값에만 의존하지 않습니다. 버튼 숨김이나 로그인 여부로 대상별 허용 판단을 대체하지 않습니다.
- URL: https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/
- 위치: Is the API Vulnerable?, How To Prevent. 2023 판의 객체 수준 인가 항목이며 최신 판 전체를 확인한 주장이 아닙니다.
- 짧은 원문: “permissions to perform the requested action on the requested object”.
- 적용: 클라이언트의 객체 식별자를 사용하는 함수는 해당 주체가 그 객체에 그 행동을 할 수 있는지 검사합니다. 현재 사용자 ID와 전달 ID 비교만으로 모든 객체 인가 문제가 해결되는 것은 아닙니다. 객체별 인가와 접근해서는 안 되는 기능에 대한 인가를 구별합니다.

## OWASP-SESSION — 인증·세션·인가의 연결

- URL: https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html
- 위치: 세션 ID와 인증·접근 통제 연결 설명, Reauthentication After Risk Events, Session Expiration.
- 짧은 원문: “The session ID or token binds the user authentication credentials”.
- 적용: 세션 식별자·토큰이 인증과 이후 HTTP 트래픽을 연결하지만 세 모듈의 안전한 결합은 별도 구현 책임입니다. 고위험 사건 뒤 재인증과 만료를 고려합니다. 이 발췌로 모든 쿠키 속성·폐기 구현·보관 방식이 검증되었다고 주장하지 않습니다.

## OWASP-SQL — 쿼리 구조와 데이터 값

- URL: https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html
- 위치: Introduction, Prepared Statements (with Parameterized Queries).
- 짧은 원문: “Define the SQL structure separately from its data values”.
- 적용: 데이터 값을 바인딩하고 쿼리 구조는 별도로 정합니다. 준비 전에 비신뢰 문자열을 쿼리에 합치면 보호가 무효화됩니다. 동적 구조에는 애플리케이션이 소유한 고정 선택과 최소 권한이 필요하며, 매개변수화 자체가 객체 인가·업무 규칙을 판단하지는 않습니다.

## OWASP-LOGGING — 로그에서 제외할 값

- URL: https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html
- 위치: Data to exclude와 기록할 인증·인가·애플리케이션 오류 항목.
- 짧은 원문: “Access tokens”, “Authentication passwords”, “Database connection strings”, “Encryption keys and other primary secrets”.
- 적용: 세션 식별자·접근 토큰·비밀번호·연결 문자열·키·민감 개인정보를 원문 그대로 로그에 남기지 않습니다. 로그의 접근 권한·민감도·관할 조건을 고려하며 안전한 상관 식별자로 사건을 연결합니다. 로그만으로 데이터 확정이나 테스트 성공을 입증하지 않습니다.

## IETF-HTTP-AUTH — 401·403·404

- URL: https://www.rfc-editor.org/rfc/rfc9110
- 위치: §11.6.1, §15.5.2, §15.5.4. 번호가 고정된 HTTP Semantics 표준.
- 짧은 원문: “lacks valid authentication credentials”, “MUST send a WWW-Authenticate header field”, “MAY instead respond with a status code of 404”.
- 적용: 401은 대상 자원에 유효한 인증 자격 증명이 부족하며 적용 가능한 challenge를 포함한 WWW-Authenticate를 요구합니다. 403은 이해했지만 수행을 거절한 요청이고 자격 증명 외 이유도 가능합니다. 금지된 자원의 존재를 숨길 때 404를 쓸 수 있습니다. 코드만으로 내부 업무 상태를 확정하지 않습니다.

## IETF-JWS / JWE — 무결성과 비밀성

- URL: https://www.rfc-editor.org/rfc/rfc7515
- 위치: Abstract. Standards Track, May 2015.
- 짧은 원문: “content secured with digital signatures or Message Authentication Codes (MACs)”.
- 적용: JWS의 서명·MAC 보호와 JWE의 암호화 기능을 구분합니다. 서명되었다는 사실만으로 내용을 비밀로 만들지는 않습니다. 알고리즘 선택·키 검증·무서명 형식 수용 여부를 이 발췌로 검증했다고 주장하지 않습니다.
- URL: https://www.rfc-editor.org/rfc/rfc7516
- 위치: §1 Introduction, §2 Terminology. Standards Track, May 2015.
- 짧은 원문: “encrypt and provide integrity protection for an arbitrary sequence of octets”.
- 적용: JWE는 암호화와 무결성 보호를 제공하는 구조입니다. 실제 형식과 알고리즘·키 관리 확인 없이 특정 토큰이 안전하다고 판정하지 않습니다.

## PG-TX — PostgreSQL 18의 트랜잭션과 격리

- URL: https://www.postgresql.org/docs/18/tutorial-transactions.html
- 위치: §3.4 Transactions의 BEGIN·COMMIT·ROLLBACK과 savepoint 설명.
- 짧은 원문: “all our updates so far will be canceled”.
- 적용: 전체 트랜잭션 rollback과 savepoint까지의 부분 rollback을 구분합니다. 미확정 변경을 취소하는 것은 백업 복원이나 다른 트랜잭션의 확정 결과를 되돌리는 일이 아닙니다.
- URL: https://www.postgresql.org/docs/18/transaction-iso.html
- 위치: Repeatable Read, Serializable Isolation Level.
- 짧은 원문: “must be prepared to retry transactions due to serialization failures”.
- 적용: PostgreSQL 18의 해당 격리 수준에서는 직렬화 실패 후 트랜잭션 재시도를 준비해야 합니다. 직렬화 가능한 확정 결과를 보장하는 것과 요청이 항상 성공하는 것은 다르며, 서비스의 유한 재시도·실패 처리는 별도 계약입니다. 다른 데이터베이스에 그대로 일반화하지 않습니다.

## PG-CONSTRAINT / LIBPQ — 제약과 값 전달

- URL: https://www.postgresql.org/docs/18/ddl-constraints.html
- 위치: §5.5 Check Constraints의 Note, Unique Constraints.
- 짧은 원문: “a unique partial index”, “does not support CHECK constraints that reference table data other than the new or updated row”.
- 적용: 일부 행만의 고유성은 부분 고유 인덱스로 표현할 수 있지만 단순 CHECK로 다른 행 전체를 참조하는 지속적 정원 보장을 구현한다고 가정하면 안 됩니다. 여러 행에 걸친 정원 규칙은 적합한 제약·격리·잠금·조건부 변경 전략을 검증해야 합니다.
- URL: https://www.postgresql.org/docs/18/libpq-exec.html
- 위치: §32.3 PQexecParams, PQexecPrepared.
- 짧은 원문: “parameter values can be separated from the command string”.
- 적용: libpq는 명령 문자열과 매개변수 값을 분리해 전달할 수 있습니다. 이 제품 API의 세부를 모든 ORM의 동작으로 확대하거나, 값 분리만으로 업무 범위·인가가 보장된다고 설명하지 않습니다.

## 접근 실패와 재사용 경계

Tavily의 RFC 7515·7516 검색 관련 발췌는 목차만 반환해 주장 근거로 채택하지 않았습니다. Exa 본문에서 JWS Abstract와 JWE §1·§2를 좁게 보충했습니다. OWASP API 프로젝트 소개만으로 API1 세부를 확인했다고 하지 않고 2023의 해당 항목을 직접 읽었습니다. MDN 보조 자료와 현재 도구 매핑의 과거 제품 확인일은 이번에 갱신하지 않았으며, 규범적 HTTP 의미는 위 RFC를 우선합니다. 전체 알고리즘·모든 구현·현재 설치 제품의 동작은 이 출처 확인 범위 밖입니다.
