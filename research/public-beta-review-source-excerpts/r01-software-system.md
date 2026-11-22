# R01 `software-system` 공식·1차 근거 입력

이 파일은 R01의 C05를 웹 없이 독립 대조하기 위한 짧은 근거 입력입니다. `checked_at`은 문서 발행일이 아니라 실제 접근일입니다. 원문을 대신하는 사본이나 장문 인용 모음이 아니며, 각 공식 페이지·출처에서 보존하는 원문 발췌의 합계는 25단어 이하로 제한합니다. 확인된 범위는 해당 출처와 버전에만 적용하고, 접근 실패 행은 다른 경로의 성공과 합쳐 `confirmed`로 해석하지 않습니다.

<!-- m5-r01-source-evidence:data:start -->
```json
{
  "schema_version": 1,
  "campaign": "public-beta-1-m5",
  "review_id": "R01",
  "artifact_id": "r01-software-system-official-source-evidence",
  "checked_at": "2026-09-12",
  "checked_at_meaning": "access-date-not-publication-date",
  "source_scope": "R01 C05 오프라인 대조 입력이며 공개 원고의 대체본이나 새로운 보편 주장 근거가 아닙니다.",
  "required_claim_families": [
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
  "coverage": {
    "required_claim_family_count": 10,
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
    "source_count": 18,
    "confirmed_sources": 16,
    "not_confirmed_sources": 2,
    "review_input_complete": true
  },
  "claim_mappings": [
    {
      "claim_family": "software-engineering-scope",
      "supported_claim": "SWEBOK V4.0a 목차에 요구사항·아키텍처·설계·구현·테스트·운영이 각각 이름 붙은 지식 영역으로 존재합니다.",
      "source_ids": ["SWEBOK-PDF-01"],
      "excerpt_ids": ["SWEBOK-PDF-01-E02", "SWEBOK-PDF-01-E03", "SWEBOK-PDF-01-E04", "SWEBOK-PDF-01-E05", "SWEBOK-PDF-01-E06", "SWEBOK-PDF-01-E07"],
      "support_boundary": "영역 이름의 공존만 확인하며 고정 순서·완전한 생명주기·이 장의 여섯 렌즈를 SWEBOK 표준으로 만들지 않습니다."
    },
    {
      "claim_family": "architecture-responsibility-interface",
      "supported_claim": "SEI ADD는 요소에 책임을 할당하고 인터페이스를 정의하며 요구사항을 제약으로 다루는 설계 관점을 포함합니다.",
      "source_ids": ["SEI-ADD-01"],
      "excerpt_ids": ["SEI-ADD-01-E01", "SEI-ADD-01-E02", "SEI-ADD-01-E03"],
      "support_boundary": "ADD의 해당 설계 단계만 확인하며 모든 팀의 필수 설계 순서로 일반화하지 않습니다."
    },
    {
      "claim_family": "software-system-and-component-boundaries",
      "supported_claim": "C4는 software system을 최상위 추상화로, component를 인터페이스 뒤의 기능 묶음이자 별도 배포 단위가 아닌 것으로 설명합니다.",
      "source_ids": ["C4-SYSTEM-01", "C4-COMPONENT-01"],
      "excerpt_ids": ["C4-SYSTEM-01-E01", "C4-COMPONENT-01-E01", "C4-COMPONENT-01-E02"],
      "support_boundary": "C4 용어에만 적용하며 다른 방법론의 system·component 경계를 고정하지 않습니다."
    },
    {
      "claim_family": "http-cache-freshness",
      "supported_claim": "RFC 9111은 freshness 계산과 stale 응답의 조건부 재사용 및 must-revalidate에서 성공적 검증 전 재사용 금지를 구분합니다.",
      "source_ids": ["RFC9111-CACHE-01"],
      "excerpt_ids": ["RFC9111-CACHE-01-E01", "RFC9111-CACHE-01-E02", "RFC9111-CACHE-01-E03", "RFC9111-CACHE-01-E04"],
      "support_boundary": "E03·E04는 must-revalidate 지시가 있는 응답의 조건이며 모든 stale 응답의 보편 금지로 확대하지 않습니다."
    },
    {
      "claim_family": "build-time-versus-request-time-rendering",
      "supported_claim": "Astro는 기본 빌드 시점 사전 렌더링과 서버 온디맨드 렌더링을 구분하고, 후자를 개인화·최신 데이터의 예로 설명합니다.",
      "source_ids": ["ASTRO-ODR-01"],
      "excerpt_ids": ["ASTRO-ODR-01-E01", "ASTRO-ODR-01-E02", "ASTRO-ODR-01-E03", "ASTRO-ODR-01-E04", "ASTRO-ODR-01-E05"],
      "support_boundary": "Astro의 2026-09-12 관찰 예시에만 적용하며 모든 프레임워크의 기본값이나 정적 전달의 충분 조건으로 일반화하지 않습니다."
    },
    {
      "claim_family": "browser-network-evidence",
      "supported_claim": "Chrome Network와 Firefox Network Monitor는 브라우저가 만든 네트워크·HTTP 요청과 해당 요청의 세부를 관찰하는 도구입니다.",
      "source_ids": ["CHROME-NETWORK-01", "FIREFOX-NETWORK-01"],
      "excerpt_ids": ["CHROME-NETWORK-01-E01", "CHROME-NETWORK-01-E02", "FIREFOX-NETWORK-01-E01", "FIREFOX-NETWORK-01-E02"],
      "support_boundary": "브라우저가 관찰한 요청 범위이며 서버 내부 상태·복구·다른 브라우저의 동작을 증명하지 않습니다."
    },
    {
      "claim_family": "client-server-authority-and-authorization",
      "supported_claim": "HTTP client/server 메시지 역할과 클라이언트 통제를 신뢰하지 않는 서버 측 업무·인가 검사 경계를 함께 확인합니다.",
      "source_ids": ["RFC9110-HTTP-01", "OWASP-AJAX-01", "OWASP-AUTHORIZATION-01"],
      "excerpt_ids": ["RFC9110-HTTP-01-E01", "OWASP-AJAX-01-E01", "OWASP-AJAX-01-E02", "OWASP-AUTHORIZATION-01-E01", "OWASP-AUTHORIZATION-01-E02"],
      "support_boundary": "역할과 보안 원칙만 확인하며 특정 서버 구현의 완전성을 보증하지 않습니다."
    },
    {
      "claim_family": "loaded-resource-evidence",
      "supported_claim": "Chrome Sources의 Page 탭은 페이지가 로드한 리소스를 관찰하는 한 경로입니다.",
      "source_ids": ["CHROME-SOURCES-01"],
      "excerpt_ids": ["CHROME-SOURCES-01-E01"],
      "support_boundary": "로드된 리소스 관찰이며 저장소 원본·서버 내부 파일·배포 완전성의 증거로 확대하지 않습니다."
    },
    {
      "claim_family": "postgresql-18-state-integrity-and-concurrency",
      "supported_claim": "PostgreSQL 18 문서는 트랜잭션 원자성, 기본 Read Committed와 재시도 경계, check constraint의 값 조건을 설명합니다.",
      "source_ids": ["POSTGRES18-TRANSACTIONS-01", "POSTGRES18-ISOLATION-01", "POSTGRES18-CONSTRAINTS-01"],
      "excerpt_ids": ["POSTGRES18-TRANSACTIONS-01-E01", "POSTGRES18-TRANSACTIONS-01-E02", "POSTGRES18-ISOLATION-01-E01", "POSTGRES18-ISOLATION-01-E02", "POSTGRES18-CONSTRAINTS-01-E01", "POSTGRES18-CONSTRAINTS-01-E02"],
      "support_boundary": "PostgreSQL 18에만 적용하며 모든 데이터베이스의 동시성·격리·재시도 보장으로 일반화하지 않습니다."
    },
    {
      "claim_family": "frontend-education-scope",
      "supported_claim": "MDN Curriculum은 프런트엔드 개발의 핵심 기술과 실천을 구조화한 교육 범위의 한 근거입니다.",
      "source_ids": ["MDN-CURRICULUM-01"],
      "excerpt_ids": ["MDN-CURRICULUM-01-E01", "MDN-CURRICULUM-01-E02"],
      "support_boundary": "MDN 교육 범위만 확인하며 이 장의 여섯 렌즈나 증거 구분을 MDN 공식 교육과정으로 만들지 않습니다."
    }
  ],
  "sources": [
    {
      "id": "SWEBOK-PDF-01",
      "official_url": "https://ieeecs-media.computer.org/media/education/swebok/swebok-v4.pdf",
      "provider": "IEEE Computer Society",
      "observed_document": "Guide to the Software Engineering Body of Knowledge",
      "observed_version_or_status": "SWEBOK Guide V4.0a; released August 2026; Version 4.0 approved October 2024",
      "checked_at": "2026-09-12",
      "access_outcome": "confirmed/application-pdf",
      "locator": "PDF cover p. i, extracted lines 0-6; Table of Contents pp. vi-xii, extracted lines 72-73, 125-126, 154-155, 202-203, 251-252, 364-365",
      "excerpts": [
        {
          "id": "SWEBOK-PDF-01-E01",
          "locator": "PDF cover p. i, extracted lines 0-6",
          "text": "Guide to the Software Engineering Body of Knowledge v4.0a",
          "word_count": 9
        },
        {
          "id": "SWEBOK-PDF-01-E02",
          "locator": "Table of Contents p. vi, extracted line 73",
          "text": "Software Requirements",
          "word_count": 2
        },
        {
          "id": "SWEBOK-PDF-01-E03",
          "locator": "Table of Contents p. vii, extracted line 126",
          "text": "Software Architecture",
          "word_count": 2
        },
        {
          "id": "SWEBOK-PDF-01-E04",
          "locator": "Table of Contents p. vii, extracted line 155",
          "text": "Software Design",
          "word_count": 2
        },
        {
          "id": "SWEBOK-PDF-01-E05",
          "locator": "Table of Contents p. viii, extracted line 203",
          "text": "Software Construction",
          "word_count": 2
        },
        {
          "id": "SWEBOK-PDF-01-E06",
          "locator": "Table of Contents p. ix, extracted line 252",
          "text": "Software Testing",
          "word_count": 2
        },
        {
          "id": "SWEBOK-PDF-01-E07",
          "locator": "Table of Contents p. xi, extracted line 365",
          "text": "Software Engineering Operations",
          "word_count": 3
        }
      ],
      "claim_scope": [
        "software-engineering-scope"
      ],
      "generalization_boundary": "SWEBOK의 지식 영역 범위만 확인하며 이 장의 여섯 렌즈를 IEEE 표준 분류나 고정 절차로 만들지 않습니다."
    },
    {
      "id": "SWEBOK-BASE-FAIL-01",
      "official_url": "https://www.computer.org/education/bodies-of-knowledge/software-engineering",
      "provider": "IEEE Computer Society",
      "observed_document": "SWEBOK official base page access attempt",
      "observed_version_or_status": "HTTP 403 Forbidden",
      "checked_at": "2026-09-12",
      "access_outcome": "not-confirmed/http-403",
      "locator": "HTTP response returned by the official URL during the access attempt",
      "excerpts": [],
      "claim_scope": [],
      "generalization_boundary": "이 HTML 경로의 본문은 확인하지 않았습니다. PDF 확인 범위를 이 페이지의 현재 문구나 상태 확인으로 확대하지 않습니다."
    },
    {
      "id": "SWEBOK-TOPICS-FAIL-01",
      "official_url": "https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics",
      "provider": "IEEE Computer Society",
      "observed_document": "SWEBOK Topics official page access attempt",
      "observed_version_or_status": "fetch failed; page body not retrieved",
      "checked_at": "2026-09-12",
      "access_outcome": "not-confirmed/fetch-failed",
      "locator": "official URL access attempt; no retrievable page body",
      "excerpts": [],
      "claim_scope": [],
      "generalization_boundary": "이 경로의 현재 본문과 세부 topics는 확인하지 않았습니다. 과거 편집 요약이나 PDF 목차를 이 페이지의 원문으로 재분류하지 않습니다."
    },
    {
      "id": "SEI-ADD-01",
      "official_url": "https://www.sei.cmu.edu/library/attribute-driven-design-method-collection/",
      "provider": "Carnegie Mellon University Software Engineering Institute",
      "observed_document": "Attribute-Driven Design Method Collection",
      "observed_version_or_status": "unversioned current collection page; includes a 2012-11-30 collection item",
      "checked_at": "2026-09-12",
      "access_outcome": "confirmed/html",
      "locator": "Description > Part 2: Documenting decomposition, page lines 39-43",
      "excerpts": [
        {
          "id": "SEI-ADD-01-E01",
          "locator": "Description > Part 2, item 1, line 40",
          "text": "Instantiate architectural elements and allocate responsibilities",
          "word_count": 6
        },
        {
          "id": "SEI-ADD-01-E02",
          "locator": "Description > Part 2, item 2, line 41",
          "text": "Define interfaces for instantiated elements",
          "word_count": 5
        },
        {
          "id": "SEI-ADD-01-E03",
          "locator": "Description > Part 2, item 3, line 42",
          "text": "Verify and refine requirements and make them constraints for instantiated elements.",
          "word_count": 11
        }
      ],
      "claim_scope": [
        "architecture-responsibility-interface"
      ],
      "generalization_boundary": "ADD의 설계 관점만 확인하며 이를 모든 팀의 필수 설계 순서나 이 장의 여섯 렌즈와 동일한 표준으로 간주하지 않습니다."
    },
    {
      "id": "C4-SYSTEM-01",
      "official_url": "https://c4model.com/abstractions/software-system",
      "provider": "C4 model",
      "observed_document": "Software system",
      "observed_version_or_status": "unversioned current page",
      "checked_at": "2026-09-12",
      "access_outcome": "confirmed/html",
      "locator": "Software system, first paragraph, page line 37",
      "excerpts": [
        {
          "id": "C4-SYSTEM-01-E01",
          "locator": "Software system, first paragraph, line 37",
          "text": "A software system is the highest level of abstraction and describes something that delivers value to its users",
          "word_count": 18
        }
      ],
      "claim_scope": [
        "software-system-and-component-boundaries"
      ],
      "generalization_boundary": "C4 모델의 최상위 추상화와 문맥적 경계 설명에만 적용하며 모든 조직의 시스템 경계를 팀·저장소·배포 단위로 고정하지 않습니다."
    },
    {
      "id": "C4-COMPONENT-01",
      "official_url": "https://c4model.com/abstractions/component",
      "provider": "C4 model",
      "observed_document": "Component",
      "observed_version_or_status": "unversioned current page",
      "checked_at": "2026-09-12",
      "access_outcome": "confirmed/html",
      "locator": "Component, opening paragraphs, page lines 37-38",
      "excerpts": [
        {
          "id": "C4-COMPONENT-01-E01",
          "locator": "Component, first paragraph, line 37",
          "text": "a component is a grouping of related functionality encapsulated behind a well-defined interface.",
          "word_count": 13
        },
        {
          "id": "C4-COMPONENT-01-E02",
          "locator": "Component, second paragraph, line 38",
          "text": "With the C4 model, components are not separately deployable units.",
          "word_count": 10
        }
      ],
      "claim_scope": [
        "software-system-and-component-boundaries"
      ],
      "generalization_boundary": "`component`의 C4 정의에만 적용하며 다른 방법론의 구성요소 정의나 모든 구성요소의 배포 가능성을 단정하지 않습니다."
    },
    {
      "id": "RFC9111-CACHE-01",
      "official_url": "https://www.rfc-editor.org/rfc/rfc9111.html",
      "provider": "RFC Editor / IETF",
      "observed_document": "RFC 9111: HTTP Caching",
      "observed_version_or_status": "June 2022; Internet Standards Track; STD 98",
      "checked_at": "2026-09-12",
      "access_outcome": "confirmed/html",
      "locator": "Section 4, extracted lines 311-315; Section 4.2, lines 351-353; Section 5.2.2.2 must-revalidate, line 579",
      "excerpts": [
        {
          "id": "RFC9111-CACHE-01-E01",
          "locator": "Section 4.2 Freshness, lines 351-353",
          "text": "response_is_fresh = (freshness_lifetime > current_age)",
          "word_count": 5
        },
        {
          "id": "RFC9111-CACHE-01-E02",
          "locator": "Section 4, stale reuse alternative, extracted line 314",
          "text": "allowed to be served stale",
          "word_count": 5
        },
        {
          "id": "RFC9111-CACHE-01-E03",
          "locator": "Section 5.2.2.2 must-revalidate, extracted line 579",
          "text": "MUST NOT reuse that response",
          "word_count": 5
        },
        {
          "id": "RFC9111-CACHE-01-E04",
          "locator": "Section 5.2.2.2 must-revalidate, extracted line 579",
          "text": "until it has been successfully validated",
          "word_count": 6
        }
      ],
      "claim_scope": [
        "http-cache-freshness"
      ],
      "generalization_boundary": "HTTP 캐시 응답의 freshness와 stale 재사용·검증 조건에만 적용하고, must-revalidate 조건을 모든 stale 응답이나 애플리케이션 캐시·CDN·브라우저 사본의 보편 정책으로 확대하지 않습니다."
    },
    {
      "id": "ASTRO-ODR-01",
      "official_url": "https://docs.astro.build/en/guides/on-demand-rendering/",
      "provider": "Astro",
      "observed_document": "On-demand rendering",
      "observed_version_or_status": "unversioned current documentation page",
      "checked_at": "2026-09-12",
      "access_outcome": "confirmed/html",
      "locator": "On-demand rendering introduction, extracted lines 318-319",
      "excerpts": [
        {
          "id": "ASTRO-ODR-01-E01",
          "locator": "On-demand rendering introduction, line 318, first sentence",
          "text": "By default",
          "word_count": 2
        },
        {
          "id": "ASTRO-ODR-01-E02",
          "locator": "On-demand rendering introduction, line 318, first sentence",
          "text": "pre-rendered at build time",
          "word_count": 4
        },
        {
          "id": "ASTRO-ODR-01-E03",
          "locator": "On-demand rendering introduction, line 318, second sentence",
          "text": "render some or all of your routes on demand by a server",
          "word_count": 12
        },
        {
          "id": "ASTRO-ODR-01-E04",
          "locator": "On-demand rendering introduction, line 319, first sentence",
          "text": "customized for each viewer",
          "word_count": 4
        },
        {
          "id": "ASTRO-ODR-01-E05",
          "locator": "On-demand rendering introduction, line 319, second sentence",
          "text": "freshly updated data",
          "word_count": 3
        }
      ],
      "claim_scope": [
        "build-time-versus-request-time-rendering"
      ],
      "generalization_boundary": "Astro의 현재 기본값과 선택 경로 예시에만 적용하며 모든 정적 사이트 프레임워크의 공통 동작이나 정적 전달의 충분 조건으로 일반화하지 않습니다."
    },
    {
      "id": "CHROME-NETWORK-01",
      "official_url": "https://developer.chrome.com/docs/devtools/network/",
      "provider": "Google Chrome for Developers",
      "observed_document": "Inspect network activity",
      "observed_version_or_status": "unversioned current Chrome DevTools documentation page",
      "checked_at": "2026-09-12",
      "access_outcome": "confirmed/html",
      "locator": "When to use the Network panel, lines 96-102; Log network activity, lines 127-142",
      "excerpts": [
        {
          "id": "CHROME-NETWORK-01-E01",
          "locator": "Log network activity, line 131",
          "text": "The Network panel logs all network activity in the Network Log.",
          "word_count": 11
        },
        {
          "id": "CHROME-NETWORK-01-E02",
          "locator": "When to use the Network panel, line 101",
          "text": "its HTTP headers, content, size",
          "word_count": 5
        }
      ],
      "claim_scope": [
        "browser-network-evidence"
      ],
      "generalization_boundary": "Chrome DevTools의 현재 패널 명칭과 관찰 범위만 확인하며 서버 내부 상태·복구 성공이나 다른 브라우저의 명칭·기능을 증명하지 않습니다."
    },
    {
      "id": "FIREFOX-NETWORK-01",
      "official_url": "https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/",
      "provider": "Mozilla Firefox Source Docs",
      "observed_document": "Network Monitor",
      "observed_version_or_status": "unversioned current Firefox Source Docs page",
      "checked_at": "2026-09-12",
      "access_outcome": "confirmed/html",
      "locator": "Network Monitor opening description, page lines 6-8",
      "excerpts": [
        {
          "id": "FIREFOX-NETWORK-01-E01",
          "locator": "Network Monitor opening description, line 8",
          "text": "The Network Monitor shows you all the HTTP requests Firefox makes",
          "word_count": 11
        },
        {
          "id": "FIREFOX-NETWORK-01-E02",
          "locator": "Network Monitor opening description, line 8",
          "text": "how long each request takes, and details of each request.",
          "word_count": 10
        }
      ],
      "claim_scope": [
        "browser-network-evidence"
      ],
      "generalization_boundary": "Firefox의 현재 `Network Monitor` 명칭과 HTTP 요청 관찰 범위만 확인하며 다른 브라우저나 서버 내부 증거로 확대하지 않습니다."
    },
    {
      "id": "RFC9110-HTTP-01",
      "official_url": "https://www.rfc-editor.org/rfc/rfc9110.html",
      "provider": "RFC Editor / IETF",
      "observed_document": "RFC 9110: HTTP Semantics",
      "observed_version_or_status": "June 2022; Internet Standards Track; STD 97",
      "checked_at": "2026-09-12",
      "access_outcome": "confirmed/html",
      "locator": "Section 3.4 Messages, page line 748",
      "excerpts": [
        {
          "id": "RFC9110-HTTP-01-E01",
          "locator": "Section 3.4 Messages, line 748",
          "text": "A client sends requests to a server in the form of a \"request\" message with a method and request target.",
          "word_count": 20
        }
      ],
      "claim_scope": [
        "client-server-authority-and-authorization"
      ],
      "generalization_boundary": "HTTP 메시지의 client/server 역할에만 적용하며 프로그램·호스트·조직 경계가 항상 일치한다고 가정하지 않습니다."
    },
    {
      "id": "OWASP-AJAX-01",
      "official_url": "https://cheatsheetseries.owasp.org/cheatsheets/AJAX_Security_Cheat_Sheet.html",
      "provider": "OWASP Cheat Sheet Series",
      "observed_document": "AJAX Security Cheat Sheet",
      "observed_version_or_status": "unversioned current page",
      "checked_at": "2026-09-12",
      "access_outcome": "confirmed/html",
      "locator": "Client-Side > Don't rely on client logic for security/business logic, page lines 302-308",
      "excerpts": [
        {
          "id": "OWASP-AJAX-01-E01",
          "locator": "Don't rely on client logic for security, line 304",
          "text": "Don't forget that the user controls the client-side logic.",
          "word_count": 9
        },
        {
          "id": "OWASP-AJAX-01-E02",
          "locator": "Don't rely on client business logic, line 308",
          "text": "important business rules are duplicated on the server side",
          "word_count": 9
        }
      ],
      "claim_scope": [
        "client-server-authority-and-authorization"
      ],
      "generalization_boundary": "브라우저 표시나 클라이언트 검사를 권위 있는 보안·업무 통제로 보지 않는 경계에만 적용하며 구체 서버 구현의 완전성을 보증하지 않습니다."
    },
    {
      "id": "OWASP-AUTHORIZATION-01",
      "official_url": "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html",
      "provider": "OWASP Cheat Sheet Series",
      "observed_document": "Authorization Cheat Sheet",
      "observed_version_or_status": "unversioned current page",
      "checked_at": "2026-09-12",
      "access_outcome": "confirmed/html",
      "locator": "Recommendations > Deny by Default and Validate the Permissions on Every Request, page lines 211-218",
      "excerpts": [
        {
          "id": "OWASP-AUTHORIZATION-01-E01",
          "locator": "Deny by Default, line 213",
          "text": "For security purposes an application should be configured to deny access by default.",
          "word_count": 13
        },
        {
          "id": "OWASP-AUTHORIZATION-01-E02",
          "locator": "Validate the Permissions on Every Request, line 218",
          "text": "Permission should be validated correctly on every request",
          "word_count": 8
        }
      ],
      "claim_scope": [
        "client-server-authority-and-authorization"
      ],
      "generalization_boundary": "인가의 기본 거부와 요청별 검사 원칙에만 적용하며 특정 프레임워크 설정이나 이 사례의 인가 구현 완료를 주장하지 않습니다."
    },
    {
      "id": "CHROME-SOURCES-01",
      "official_url": "https://developer.chrome.com/docs/devtools/sources/",
      "provider": "Google Chrome for Developers",
      "observed_document": "Sources panel overview",
      "observed_version_or_status": "unversioned current Chrome DevTools documentation page",
      "checked_at": "2026-09-12",
      "access_outcome": "confirmed/html",
      "locator": "View files, page lines 118-128",
      "excerpts": [
        {
          "id": "CHROME-SOURCES-01-E01",
          "locator": "View files, line 120",
          "text": "Click the Page tab to view all of the resources that the page has loaded.",
          "word_count": 15
        }
      ],
      "claim_scope": [
        "loaded-resource-evidence"
      ],
      "generalization_boundary": "Chrome가 로드한 리소스의 관찰 범위만 확인하며 저장소 원본·서버 내부 파일·배포 완전성을 모두 증명한다고 해석하지 않습니다."
    },
    {
      "id": "POSTGRES18-TRANSACTIONS-01",
      "official_url": "https://www.postgresql.org/docs/current/tutorial-transactions.html",
      "provider": "PostgreSQL Global Development Group",
      "observed_document": "PostgreSQL Documentation: Transactions",
      "observed_version_or_status": "current resolved to PostgreSQL 18, section 3.4",
      "checked_at": "2026-09-12",
      "access_outcome": "confirmed/html",
      "locator": "3.4 Transactions, page line 20",
      "excerpts": [
        {
          "id": "POSTGRES18-TRANSACTIONS-01-E01",
          "locator": "3.4 Transactions, line 20",
          "text": "it bundles multiple steps into a single, all-or-nothing operation.",
          "word_count": 9
        },
        {
          "id": "POSTGRES18-TRANSACTIONS-01-E02",
          "locator": "3.4 Transactions, line 20",
          "text": "none of the steps affect the database at all.",
          "word_count": 9
        }
      ],
      "claim_scope": [
        "postgresql-18-state-integrity-and-concurrency"
      ],
      "generalization_boundary": "PostgreSQL 18 트랜잭션 설명에만 적용하며 모든 데이터베이스의 동시성·격리·재시도 보장으로 일반화하지 않습니다."
    },
    {
      "id": "POSTGRES18-ISOLATION-01",
      "official_url": "https://www.postgresql.org/docs/current/transaction-iso.html",
      "provider": "PostgreSQL Global Development Group",
      "observed_document": "PostgreSQL Documentation: Transaction Isolation",
      "observed_version_or_status": "current resolved to PostgreSQL 18, section 13.2",
      "checked_at": "2026-09-12",
      "access_outcome": "confirmed/html",
      "locator": "13.2.1 Read Committed Isolation Level, lines 61-62; 13.2.2 Repeatable Read, line 94",
      "excerpts": [
        {
          "id": "POSTGRES18-ISOLATION-01-E01",
          "locator": "13.2.1 Read Committed Isolation Level, line 62",
          "text": "Read Committed is the default isolation level in PostgreSQL.",
          "word_count": 9
        },
        {
          "id": "POSTGRES18-ISOLATION-01-E02",
          "locator": "13.2.2 Repeatable Read Isolation Level, line 94",
          "text": "Applications using this level must be prepared to retry transactions due to serialization failures.",
          "word_count": 14
        }
      ],
      "claim_scope": [
        "postgresql-18-state-integrity-and-concurrency"
      ],
      "generalization_boundary": "PostgreSQL 18의 기본 격리와 특정 격리 수준의 재시도 경계에만 적용하며 모든 질의·데이터베이스에서 동일한 결과를 보장하지 않습니다."
    },
    {
      "id": "POSTGRES18-CONSTRAINTS-01",
      "official_url": "https://www.postgresql.org/docs/current/ddl-constraints.html",
      "provider": "PostgreSQL Global Development Group",
      "observed_document": "PostgreSQL Documentation: Constraints",
      "observed_version_or_status": "current resolved to PostgreSQL 18, section 5.5",
      "checked_at": "2026-09-12",
      "access_outcome": "confirmed/html",
      "locator": "5.5.1 Check Constraints, page lines 29-38",
      "excerpts": [
        {
          "id": "POSTGRES18-CONSTRAINTS-01-E01",
          "locator": "5.5.1 Check Constraints, line 31, first sentence",
          "text": "A check constraint is the most generic constraint type.",
          "word_count": 9
        },
        {
          "id": "POSTGRES18-CONSTRAINTS-01-E02",
          "locator": "5.5.1 Check Constraints, line 31, second sentence",
          "text": "must satisfy a Boolean (truth-value) expression.",
          "word_count": 6
        }
      ],
      "claim_scope": [
        "postgresql-18-state-integrity-and-concurrency"
      ],
      "generalization_boundary": "PostgreSQL 18의 제약 조건 범위에만 적용하며 모든 업무 규칙·교차 행 조건이나 다른 데이터베이스의 동작을 자동 보장하지 않습니다."
    },
    {
      "id": "MDN-CURRICULUM-01",
      "official_url": "https://developer.mozilla.org/en-US/curriculum/",
      "provider": "Mozilla Developer Network",
      "observed_document": "MDN Curriculum",
      "observed_version_or_status": "current page; last updated October 2025",
      "checked_at": "2026-09-12",
      "access_outcome": "confirmed/html",
      "locator": "MDN Curriculum introduction and metadata, page lines 172-178",
      "excerpts": [
        {
          "id": "MDN-CURRICULUM-01-E01",
          "locator": "MDN Curriculum introduction, line 176",
          "text": "The MDN Curriculum provides a structured summary of the essential skills and practices for being a successful front-end developer.",
          "word_count": 19
        },
        {
          "id": "MDN-CURRICULUM-01-E02",
          "locator": "MDN Curriculum metadata, line 178",
          "text": "Last updated: October 2025",
          "word_count": 4
        }
      ],
      "claim_scope": [
        "frontend-education-scope"
      ],
      "generalization_boundary": "MDN의 프런트엔드 교육 범위에만 적용하며 이 장의 증거 구분이나 여섯 렌즈를 MDN 공식 교육과정으로 만들지 않습니다."
    }
  ]
}
```
<!-- m5-r01-source-evidence:data:end -->

## 사용 경계

- reviewer는 각 발췌의 `official_url`, `locator`, `observed_version_or_status`, `claim_scope`, `generalization_boundary`를 한 묶음으로 읽습니다.
- 두 IEEE HTML 실패 행은 실패 사실만 보존합니다. `SWEBOK-PDF-01`의 확인 성공은 그 HTML 본문을 확인했다는 뜻이 아닙니다.
- `unversioned current`는 2026-09-12 접근 시점의 관찰이며 영구 상태나 발행 버전이 아닙니다.
- PostgreSQL 행은 모두 현재 URL이 실제로 표시한 PostgreSQL 18에만 적용합니다.
- 이 입력 고정은 실제 R01 검토·판정·재검토의 실행이나 PASS가 아닙니다.
