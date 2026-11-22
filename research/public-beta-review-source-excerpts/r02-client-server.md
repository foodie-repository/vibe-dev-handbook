# R02 `client-server` 공식·1차 근거 관찰

이 파일은 2026-09-30에 controller가 읽은 공식 자료의 짧은 인용과 적용 경계를 보존합니다. `checked_at`은 발행일이 아니라 확인일입니다. 자료 확인은 원고의 주장 대조를 돕지만, 교육용 모임 앱의 실제 구현이나 R02 검토 완료를 증명하지 않습니다. RFC 9110의 웹 열람 성공과 별개로 Tavily 추출 두 경로는 실패했습니다.

<!-- m5-r02-source-evidence:data:start -->
```json
{
  "schema_version": 1,
  "review_id": "R02",
  "checked_at_meaning": "access-date-not-publication-date",
  "source_scope": "2026-09-30 controller의 공식·1차 자료 읽기 전용 관찰. R02 canonical 입력 해시 고정이나 reviewer PASS가 아닙니다.",
  "sources": [
    {
      "id": "RFC9110-HTTP",
      "url": "https://www.rfc-editor.org/rfc/rfc9110.html",
      "status": "confirmed",
      "version": "RFC 9110 / STD 97, June 2022",
      "locator": "§3.3 connections/clients/servers; §3.4 messages; §4.2.2 https; §9.2.2 idempotent methods",
      "quotes": ["a program that establishes a connection", "a program that accepts connections", "confidentiality and integrity protection", "SHOULD NOT automatically retry"],
      "quote_word_count": 19,
      "claim": "client/server는 특정 연결에서의 프로그램 역할이며 같은 프로그램도 연결별로 다른 역할을 합니다. HTTPS는 해당 서버의 신원과 HTTP 통신의 기밀성·무결성 보호를 다룹니다. 비멱등 요청의 자동 재시도는 실제 멱등 의미를 알거나 최초 요청이 적용되지 않았음을 알 때의 예외를 구분합니다.",
      "boundary": "전송 보호는 업무상 인가·저장 성공 증명이 아닙니다. HTTP 멱등 의미를 W-03 POST의 멱등 키 저장·중복 부작용 방지 구현으로 확대하지 않습니다. 응답이 같아야 멱등인 것도 아닙니다.",
      "access": "web open/find 성공; Tavily HTML 및 txt 추출은 각각 404 page not found 실패. 도구별 실패는 보존하며 실패 경로가 성공한 것으로 변경하지 않음.",
      "checked_at": "2026-09-30"
    },
    {
      "id": "RFC9111-CACHE",
      "url": "https://www.rfc-editor.org/rfc/rfc9111.html",
      "status": "confirmed",
      "version": "RFC 9111, June 2022",
      "locator": "§4.2 freshness; §4.2.4 serving stale; §5.2.2.2 must-revalidate",
      "quotes": ["freshness_lifetime > current_age", "unless it is disconnected or doing so is explicitly permitted", "until it has been successfully validated by the origin"],
      "quote_word_count": 22,
      "claim": "HTTP 저장 응답은 freshness lifetime과 current age를 비교합니다. stale은 명시적 금지 지시가 없고 연결 단절 또는 명시적 허용 조건일 때 제한적으로 재사용할 수 있습니다. must-revalidate는 stale 뒤 origin의 성공적 검증을 요구하며 단절 때도 오래된 응답으로 대체하지 않습니다.",
      "boundary": "HTTP 응답 캐시만의 규칙입니다. 앱 메모리 상태·DB 원본·모든 CDN의 무효화 성공을 입증하지 않습니다.",
      "access": "web open/find 성공",
      "checked_at": "2026-09-30"
    },
    {
      "id": "OWASP-FRONTEND",
      "url": "https://cheatsheetseries.owasp.org/cheatsheets/Web_Frontend_Security_Cheat_Sheet.html",
      "requested_url": "https://cheatsheetseries.owasp.org/cheatsheets/AJAX_Security_Cheat_Sheet.html",
      "status": "confirmed",
      "version": "2026-09-30 unversioned 현행 페이지 관찰",
      "locator": "Introduction (prior AJAX title); Client-side security / Don't rely on client logic for security / Don't rely on client logic for business rules / Never transmit secrets to the client",
      "quotes": ["the user controls the client-side logic", "important business rules are duplicated on the server side", "Never transmit secrets to the client"],
      "quote_word_count": 21,
      "claim": "사용자가 바꿀 수 있는 클라이언트 로직은 안전성 근거가 아니며 중요한 업무 규칙을 서버에서 다시 검사해야 합니다. 클라이언트에 전달한 비밀은 사용자가 열람할 수 있습니다.",
      "boundary": "원고의 과거 AJAX 출처명을 실패로 삭제하지 않습니다. 옛 URL은 redirect 안내 페이지이며 링크0을 따라 새 공식 제목·본문을 확인했습니다. 실제 앱에 규칙이 구현되었다는 증거는 아닙니다.",
      "access": "web 옛 URL redirect 안내→공식 링크 클릭 성공, 새 URL web 및 Tavily 성공",
      "checked_at": "2026-09-30"
    },
    {
      "id": "OWASP-AUTHORIZATION",
      "url": "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html",
      "status": "confirmed",
      "version": "2026-09-30 unversioned 현행 페이지 관찰",
      "locator": "Deny by Default; Validate the Permissions on Every Request; Verify Authorization Checks are Performed in the Right Location",
      "quotes": ["deny access by default", "Permission should be validated correctly on every request", "Developers must never rely on client-side access control checks."],
      "quote_word_count": 21,
      "claim": "기본 거부와 매 요청의 권한 검사를 적용하며 최종 인가를 클라이언트 검사에 의존하지 않습니다. 서버·게이트웨이·서버리스 함수가 신뢰 경계 안의 검사 위치일 수 있습니다.",
      "boundary": "단순 로그인 표시·버튼 숨김은 객체·기능별 허가 증거가 아닙니다. 구체 앱 권한 정책과 시험이 따로 필요합니다.",
      "access": "web 및 Tavily 성공",
      "checked_at": "2026-09-30"
    },
    {
      "id": "CHROME-NETWORK",
      "url": "https://developer.chrome.com/docs/devtools/network/",
      "status": "confirmed",
      "version": "2026-09-30 현행 DevTools 문서 관찰; 설치 Chrome UI 버전 검증 아님",
      "locator": "Inspect a resource's details / headers / content; Search network headers and responses",
      "quotes": ["Use this tab to inspect HTTP headers.", "Click the Response tab to view the HTML source code."],
      "quote_word_count": 17,
      "claim": "Network의 Headers와 Response에서 요청/응답에 관한 관찰 가능한 자료를 확인합니다.",
      "boundary": "브라우저에서 관찰한 응답만으로 서버 내부 인가·DB commit·업무 불변식 성공을 증명하지 못한다는 부분은 관찰 범위에 대한 controller의 추론입니다. 다른 브라우저의 동일 UI를 보장하지 않습니다.",
      "access": "web 및 Tavily 성공",
      "checked_at": "2026-09-30"
    },
    {
      "id": "CHROME-SOURCES",
      "url": "https://developer.chrome.com/docs/devtools/sources/",
      "status": "confirmed",
      "version": "2026-09-30 현행 DevTools 문서 관찰; 설치 Chrome UI 버전 검증 아님",
      "locator": "View files",
      "quotes": ["Click the Page tab to view all of the resources that the page has loaded."],
      "quote_word_count": 15,
      "claim": "Sources Page 탭은 페이지가 불러온 리소스를 보여 줍니다.",
      "boundary": "배포된 자원 관찰이 원본 저장소 전체나 서버 소스의 공개를 의미하지 않습니다. source map 유무와 별개로 보이지 않는 원본까지 확인했다고 주장하지 않습니다.",
      "access": "Tavily 성공",
      "checked_at": "2026-09-30"
    },
    {
      "id": "ASTRO-ODR",
      "url": "https://docs.astro.build/en/guides/on-demand-rendering/",
      "status": "confirmed",
      "version": "2026-09-30 unversioned 현행 가이드; 저장소 잠금 버전 실행 결과 아님",
      "locator": "On-demand rendering 도입부와 per-visit examples",
      "quotes": ["By default", "pre-rendered at build time as static pages", "generated per visit", "customized for each viewer", "without requiring a full-site rebuild"],
      "quote_word_count": 21,
      "claim": "기본은 빌드 시점 페이지·route·endpoint 사전 렌더링이며 선택한 일부 또는 전체 route는 요청 시점 서버 렌더링이 가능합니다. 요청 시점 렌더링은 사용자별 정보와 최신 데이터에 대한 예시를 제공합니다.",
      "boundary": "Astro만의 문서 예시이며 모든 프레임워크 기본값으로 확대하지 않습니다. 실제 어댑터·호스팅·설치 버전 설정 성공을 입증하지 않습니다.",
      "access": "web 및 Tavily 성공",
      "checked_at": "2026-09-30"
    },
    {
      "id": "POSTGRES18-TRANSACTIONS",
      "url": "https://www.postgresql.org/docs/18/tutorial-transactions.html",
      "current_url": "https://www.postgresql.org/docs/current/tutorial-transactions.html",
      "status": "confirmed",
      "version": "PostgreSQL 18; 2026-09-30 current URL의 제목도18을 표시",
      "locator": "§3.4 Transactions 도입부 및 transaction visibility",
      "quotes": ["The essential point of a transaction is that it bundles multiple steps into a single, all-or-nothing operation."],
      "quote_word_count": 17,
      "claim": "트랜잭션은 여러 단계를 한 원자적 작업으로 묶으며 미완료 중간 변경을 다른 동시 트랜잭션에 노출하지 않습니다.",
      "boundary": "원자성만으로 마지막 자리 경합·활성 중복 방지가 자동 해결되지는 않습니다. 앱 스키마·격리·잠금·제약·재시도를 별도로 선택하고 검증해야 합니다.",
      "access": "current web 제목18 확인; /18/ Tavily 성공",
      "checked_at": "2026-09-30"
    },
    {
      "id": "POSTGRES18-ISOLATION",
      "url": "https://www.postgresql.org/docs/18/transaction-iso.html",
      "current_url": "https://www.postgresql.org/docs/current/transaction-iso.html",
      "status": "confirmed",
      "version": "PostgreSQL 18; 2026-09-30 current=18; 개발 문서19는 별도",
      "locator": "§13.2.1 Read Committed; §13.2.3 Serializable",
      "quotes": ["Read Committed is the default isolation level in PostgreSQL.", "not sufficient for all cases", "must be prepared to retry transactions due to serialization failures"],
      "quote_word_count": 24,
      "claim": "18의 기본 Read Committed는 문장 시작 시점의 snapshot이며 한 트랜잭션의 연속 SELECT가 서로 다른 확정 상태를 볼 수 있습니다. 복잡한 동시 업무 규칙에 항상 충분하지 않고 Serializable도 serialization failure 재시도를 준비해야 합니다.",
      "boundary": "모든 데이터베이스 기본값·정원 불변식 성공으로 확대하지 않습니다. 단순 transaction 감싸기만으로 capacity 보장을 단정하지 않습니다.",
      "access": "current web 제목18 확인; /18/ Tavily 성공",
      "checked_at": "2026-09-30"
    },
    {
      "id": "POSTGRES18-CONSTRAINTS",
      "url": "https://www.postgresql.org/docs/18/ddl-constraints.html",
      "current_url": "https://www.postgresql.org/docs/current/ddl-constraints.html",
      "status": "confirmed",
      "version": "PostgreSQL 18; 2026-09-30 current URL 제목18",
      "locator": "§5.5.1 Check Constraints; §5.5.3 Unique Constraints",
      "quotes": ["does not support CHECK constraints that reference table data other than the new or updated row", "creating a unique partial index"],
      "quote_word_count": 21,
      "claim": "CHECK는 다른 행의 데이터까지 참조하는 제약을 지원하지 않으며, 일부 행만의 고유성 제한은 일반 UNIQUE 제약 대신 partial unique index로 표현할 수 있습니다.",
      "boundary": "이 source는 구체 모임 스키마·활성 상태 정의·API 재시도 key·동시 요청 결과를 제공하지 않습니다. 이들 실제 구현은 not-confirmed이며 교육용 판단 계약과 분리합니다.",
      "access": "current web 제목18 확인; /18/ Tavily 성공",
      "checked_at": "2026-09-30"
    },
    {
      "id": "SWEBOK-TOPICS",
      "url": "https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics",
      "status": "confirmed",
      "version": "페이지가 명시한 SWEBOK V4.0 목차; V4.0a PDF와 동일하다고 추정하지 않음",
      "locator": "Chapters1~6 headings",
      "quotes": ["Software Requirements Fundamentals", "Software Architecture", "Software Design", "Software Construction", "Software Testing Fundamentals", "Software Engineering Operations"],
      "quote_word_count": 15,
      "claim": "요구사항·아키텍처·설계·구현·테스트·운영이 별도 지식 영역으로 포함됩니다.",
      "boundary": "목차 범위의 확인이며 handbook의 풀스택 정의나 고정 개발 순서를 SWEBOK의 표준 정의로 확대하지 않습니다. R01 09-12 HTML 접근 실패는 당시 사실로 보존합니다.",
      "access": "Tavily 공식 topics 본문 추출 성공",
      "checked_at": "2026-09-30"
    },
    {
      "id": "MDN-HTTP-OVERVIEW",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview",
      "status": "confirmed",
      "version": "2026-09-30 MDN 현행 개요; RFC를 대신하는 규범 표준 아님",
      "locator": "Components of HTTP-based systems / The web server",
      "quotes": ["A server is not necessarily a single machine", "several server software instances can be hosted on the same machine."],
      "quote_word_count": 19,
      "claim": "서버 소프트웨어와 물리 기계의 일대일 관계를 가정하지 않습니다.",
      "boundary": "RFC의 연결별 프로그램 역할을 보충하는 교육용 공식 문서이며 모든 서버 배포 형태를 한 구조로 고정하지 않습니다.",
      "access": "Tavily 성공",
      "checked_at": "2026-09-30"
    }
  ],
  "access_failures": [
    {
      "source_id": "RFC9110-HTTP",
      "tool": "Tavily HTML extraction",
      "url": "https://www.rfc-editor.org/rfc/rfc9110.html",
      "outcome": "404 page not found",
      "attempted_at": "2026-09-30"
    },
    {
      "source_id": "RFC9110-HTTP",
      "tool": "Tavily txt extraction",
      "url": "https://www.rfc-editor.org/rfc/rfc9110.txt",
      "outcome": "404 page not found",
      "attempted_at": "2026-09-30"
    }
  ]
}
```
<!-- m5-r02-source-evidence:data:end -->

## 사용 경계

이 자료는 [클라이언트·서버·풀스택 원고](../../src/content/docs/03-full-stack/client-server-full-stack.md)의 역할, 전송, 저장 상태와 검증 증거를 좁게 대조할 때 사용합니다. `source-map.md`의 과거 확인일과 R01의 접근 실패 기록은 그대로 두며, R02의 요청서·결합 해시와 독립 reviewer 판정은 후속 단계에서 따로 고정합니다.
