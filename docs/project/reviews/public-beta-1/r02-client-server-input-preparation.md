# R02 `client-server` 로컬 검토 입력 준비

- 로컬 바이트 확인일: `2026-09-30`; 기준 HEAD: `438107029252e04d26f2bf0e02e236cf8408d385`; 대상 행: R02 `pending / input not-fixed`.
- 상태: 다섯 입력 범주의 후보·해시·부족 근거를 정리한 준비 문서입니다. 이 문서는 canonical review request, R02 `input-fixed`·`review-ready`, reviewer 호출·PASS, 원고의 `review` 또는 공개 가능 판정이 아닙니다.
- 미완료 조건: 아래 `not-confirmed` 출처의 정확한 공식 원문·현재 문서 상태를 실제로 확인하고, 필요한 발췌와 일반화 금지선을 고정한 뒤 전체 입력의 개별·결합 SHA-256을 새 요청서에서 다시 계산해야 합니다. 이번 SHA-256은 로컬 파일 바이트만 확인하며 외부 사실의 2026-09-30 확인일을 뜻하지 않습니다.

## 1. 다섯 범주의 로컬 입력

아래 경로는 저장소 루트 기준입니다. `전체`는 reviewer에게 전체 파일을 제공해야 한다는 뜻이며, `발췌`는 정확히 적은 절·행만 제공할 수 있다는 뜻입니다. 이 표의 해시는 준비 시점의 개별 파일 SHA-256이며 R02 요청서의 고정 입력 해시가 아닙니다. 긴 문맥 문서의 행 번호는 현재 바이트 기준이므로 요청서 작성 전에 재확인해야 합니다.

| 범주 | 경로 | 읽기 범위·R02 쟁점 | SHA-256 |
|---|---|---|---|
| 1 계약 | `docs/project/reviews/public-beta-1/codex-review-contract.md` | 전체 1–94행; C01–C12, 입력·독립성·BLOCKED 조건 | `e0df0f1092868097207189175ee9d0ead5d7fc15aecf56dd0d2937b8f44fd946` |
| 1 템플릿 | `templates/public-beta-codex-review-request-template.md` | 전체 1–34행; 실제 요청서 작성 기준이며 이 파일 자체가 요청서는 아님 | `928ee8bf2b8f43f9a52f1b28dc46f434b13e5c2c7a1ab74e5f9074f2e4166186` |
| 1 행렬 | `docs/project/reviews/public-beta-1/review-matrix.md` | R02 행 16·147행의 배정·예정 경로, 기본 미실행 상태 44–70행, R01 open Minor·다음 단계 433–439행 | `afd017875d2d431c3fbf8c6f7b950ade909f5d9456dc5310686cde5175c6ebbb` |
| 1 계획 | `docs/superpowers/plans/2026-08-12-public-beta-master-plan.md` | R02 배정 1576–1585행, Step 2의 현행 Codex 프로필 1613–1624행, Step 3의 전체 입력·실행 조건 1656–1668행; 역사 전용 Claude 절은 현재 재개 조건이 아님 | `458a0f58dcb1e74068698feba70b752b276dac68f380583559ec9e3f02691ded` |
| 1 규칙 | `AGENTS.md`; `RULES.md` | 각각 임무·콘텐츠·검증·권한 기준 및 CASE/DURABLE/AUDIENCE/ANALOGY/EVIDENCE/SOURCE/TERM/VISUAL 해당 절; 요청서에서 절을 재고정 | `0ca72fc4091bffb1320b0243c11d2f449d86cb8aa8d5bbb16c5ee77ef33d091d`; `9c68b91038149c57a811b0f431012c6ffb96b3b5464600768c12095dac5914eb` |
| 2 대상 | `src/content/docs/03-full-stack/client-server-full-stack.md` | **전체 1–283행**: frontmatter·정의·비유·표·프롬프트·alt·링크·출처까지 생략 없음 | `f264f69e8b6de3708ef28c78666415189752954c96ccb6c011747d0fe7dc985e` |
| 3 보존 발췌 | `research/public-beta-review-source-excerpts/r01-software-system.md` | RFC9110/9111, OWASP AJAX·Authorization, Chrome Network·Sources, Astro on-demand, PostgreSQL18 transaction/isolation/constraints의 source object와 claim mapping. **2026-09-12 R01용 보존 발췌**이지 R02 전용 완전 근거는 아님 | `c63f3a30f393400827e3c702fefb578e1c036ab379be1dfd37b0b891bca20902` |
| 3 출처 지도 | `research/source-map.md` | PB-025 직접 행 276–283행, 설명 438행; 2026-08-04·08-13 기록과 적용 한계 | `e7dd71b588d92241e815d165f986fb81c1eb909ff991376877741d15ea52d22e` |
| 3 공백 원장 | `research/public-beta-source-gap-register.md` | PBSG-022 54행, Task13 판정 95–99행, PBCA-011 연결 165행. `confirmed`는 당시 판정 | `dac010a69ea463fb8dd3d835780367ec164b887417c441f46f7f3887c05929e7` |
| 4 게시 그림 | `src/assets/diagrams/full-stack-flow.svg` | 전체; title/desc, 다섯 책임, 요청·반환 선, 두 테마 marker | `557d9733646768fd262ee47c7234b08df0bc2d8f78ccf77c7c3f305edb9531f5` |
| 4 그림 원본 | `src/assets/diagrams/source/full-stack-flow.mmd` | 전체; SVG와 분기·방향·레이블 의미 대조 | `ab9a56c0a81adf9d2fd1fa5faf31bc4159da2c6033be873173586a5c0a1e4f1d` |
| 4 소비 PB-027 | `src/content/docs/03-full-stack/http-request-response.md` | 그림 앞·alt·뒤의 실제 문맥 50–54행; HTTP·재시도 연결은 해당 절로 추가 고정 필요 | `a5a4a1a962fa228b85d7586aa3a0256ef489a6b8c6f770de121b5850709dfdab` |
| 4 소비 PB-032 | `src/content/docs/05-frontend/browser-dom-rendering.md` | 그림 앞·alt·뒤의 실제 문맥 61–65행; 응답에서 화면 갱신까지의 한계 | `0f255ccafa28948290f8db309fd5e0b88565869acc83923e50ed860803d1d9d8` |
| 4 용어집 | `src/content/docs/reference/development-glossary.md` | `시스템과 코드` 39–87행, `웹과 풀스택` 88–123행, `데이터와 백엔드` 124–164행 | `728022ddc235e2196e60c52bc0dca8c07d0c4cd160dfdb5d4d196e5afe4b260d` |
| 4 모임 사례 | `src/content/docs/12-case-studies/first-full-stack-project.md` | 역할·흐름 56–97행, W-01 98–120행, W-03·W-04 147–198행, 요구→복구 227–240행 | `3d68c94a5f452721f9172a9cf127b118246fd95cd248ced505e13f0c5e274791` |
| 4 사례 계약 | `research/meeting-webapp-case-brief.md` | 상태·데이터 관계와 W-01/W-03/W-04 절; 교육용 계약, 실제 서비스 증거 아님 | `91606d788632435d1253bbe1c1ca35e148d7058af754a088712d05dd6c4ab917` |
| 4 Task20 렌더 | `output/playwright/task20-fullstack-evidence/manifest.jsonl` | accepted_state 18건과 manuscript_context_crop 18건, 수집·검토·cleanup 기록; 아래 원본 PNG 경로의 정본 연결 | `3a39561009cf67ae0d692102c97fc1f70ea6278a72b8f91642481a1744184a58` |
| 4 Task21 계보 | `docs/project/reviews/public-beta-1/site-qa-browser-manifest.json`; `docs/project/reviews/public-beta-1/site-qa.md` | 전자의 `page_evidence.visual_finals` 중 full-stack-flow 12건과 `pixel_adjudication`의 귀속·한계, 후자의 37–69행; Task20 1024px 상태를 Task21의 12건으로 대체하지 않음 | `80406096978829321c1d4d24345bcc69fe74055c0342b58d4dc4ba8bda769473`; `af60620bbe859ad602f2795c4f66c22a16c955335d1f8c2e29d1b8c1af18ffb6` |
| 5 콘텐츠 감사 | `docs/project/public-beta-content-audit.md` | PB-025 50행은 `conform/draft`; PBCA-011 132행은 PB-053의 다른 미해결 SOURCE finding | `d8a058833542cfc69ba6f079f5624edb6bebf83e4e5d9dfe926251228dc79d68` |
| 5 시각 감사 | `docs/project/public-beta-visual-audit.md` | PBV-06 23행, PBV-06A/B/C 65–67행, PBVA-002/003/004 81–83행; Task20 작업 단위 PASS의 범위 | `4dc0b46dbef32d69fc9b4b6442622cf762a65c165213e155f8fc9fd6cfa15f77` |
| 5 R01 open finding | `docs/project/reviews/public-beta-1/r01-software-system-adjudication.md` | R01-M01/M02의 open Minor와 R26 후속 경계 16–49행; R02의 finding으로 전가하지 않음 | `1e9f83f1663a189a4db41b8b08d89a9946244d3b431095cbbc40228ae9f3f3db` |

R02 대상의 핵심 검토 지점은 역할/호스트 정의 28–38행, 그림·비증명 문장 55–76행, 모임 W-01/W-03/W-04의 단계별 직접 증거 78–95행, 권한·비밀 경계 97–112행, 원본/사본·캐시·재시도·충돌 114–140행, 정적 전달과 HTTPS 159–174행, 판단·실패·AI 요청·체크리스트 176–283행입니다. PB-027과 PB-032의 그림 문맥은 같은 SVG를 소비하지만 각각 HTTP와 브라우저 렌더링의 다른 학습 질문을 둡니다.

## 2. 기존 18개 렌더 상태의 재사용 위치

Task20 manifest의 `accepted_state`는 PB-025·027·032 각 6개로 총 **고유 18상태**입니다. 아래 표는 실제 그림의 원본 crop 한 장씩을 가리킵니다. 모든 crop의 정확한 경로는 `output/playwright/task20-fullstack-evidence/diagram-crops/{파일 키}-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-fullstack-direct.png`입니다. PB-025·027·032의 route는 각각 `/03-full-stack/client-server-full-stack/`, `/03-full-stack/http-request-response/`, `/05-frontend/browser-dom-rendering/`입니다. `desktop`=`1440×1000`, `tablet`=`1024×768`, `mobile`=`390×844`입니다. 경로 접두·파일 키·접미와 해시를 함께 사용해 실제 PNG를 열어야 하며 crop 해시만으로 화면 전체나 인접 산문을 판단할 수 없습니다.

| 소비 route ID | viewport | theme | 파일 키 | crop PNG SHA-256 |
|---|---|---|---|---|
| PB-025 | 1440×1000 | light | `pb-025-desktop-light` | `4401bc405b6b899283f111ba5f875194a1d6eccfb1bc40f8c08690a5b10251e7` |
| PB-025 | 1440×1000 | dark | `pb-025-desktop-dark` | `61afbca2f691f14ce2e7bdbe5373617cadbc592cd5f54d685dd273f3ae065d90` |
| PB-025 | 1024×768 | light | `pb-025-tablet-light` | `9b8318c7e5bf20f09ebcbf0af74f2453671748b1e4666f2afce036a10759fe07` |
| PB-025 | 1024×768 | dark | `pb-025-tablet-dark` | `3071ac752140b2be2bdd92abe58625fb22eca3cd578b2fa67971b8221be291cb` |
| PB-025 | 390×844 | light | `pb-025-mobile-light` | `11a0e0e4b1c26d3c25c4d8885b94396d204bf78e86f89020878208f855f23035` |
| PB-025 | 390×844 | dark | `pb-025-mobile-dark` | `d6e5d20c254260596bacdff2061bbb8b33bff137c70722dbe3fe39cbe31d189f` |
| PB-027 | 1440×1000 | light | `pb-027-desktop-light` | `d8a9d3b776d4cbeae21cf88953aacb328b2c9bcce760cc0add111b4140e29050` |
| PB-027 | 1440×1000 | dark | `pb-027-desktop-dark` | `d174b9ad395fbf8cfd142bf7eb836a1a8614be5a4c13011fb1210c2b229a55bb` |
| PB-027 | 1024×768 | light | `pb-027-tablet-light` | `a9e78ec792650117afd6d1c5561bb18aae2c00e5e110579d1d7ae568f5ce39db` |
| PB-027 | 1024×768 | dark | `pb-027-tablet-dark` | `21d292e2b1469c46f2a95450c44aaee15eceeb938d1357c2306e1dda974f0883` |
| PB-027 | 390×844 | light | `pb-027-mobile-light` | `a0b08e2c5060e1ac490713a4b83dc822b57c72df23de5ddec775ef7cb82210b2` |
| PB-027 | 390×844 | dark | `pb-027-mobile-dark` | `2860dbcfd20881bfb054b072b73b553fbf6f7110ff6ae6f0a9f3ae7be71192a4` |
| PB-032 | 1440×1000 | light | `pb-032-desktop-light` | `c27d7da51857d17b2c86de2617f64e566f9dc7d7c3e0f17a9b2a633d569e038c` |
| PB-032 | 1440×1000 | dark | `pb-032-desktop-dark` | `61afbca2f691f14ce2e7bdbe5373617cadbc592cd5f54d685dd273f3ae065d90` |
| PB-032 | 1024×768 | light | `pb-032-tablet-light` | `18e7ce6477abd39ebcd0a1798111862c238042741599a7601ff7a6eff6f2b6c2` |
| PB-032 | 1024×768 | dark | `pb-032-tablet-dark` | `f319be16d88525f356ef50e92d6b64fed76c00f9d6be25b753023d5834403bc0` |
| PB-032 | 390×844 | light | `pb-032-mobile-light` | `878d7d198d3b6970524b478dbfb0b670228e464ece1c8d70cb0b3db0451394bf` |
| PB-032 | 390×844 | dark | `pb-032-mobile-dark` | `e9e47927bb4331444abd889529ccc5e0588c6fe3d758c941700f203a2eb14b59` |

로컬 재계산에서는 manifest 60기록 중 accepted_state 18개가 18개 고유 `(route, viewport, theme)`를 차지했고, 경로·SHA·byte 길이·PNG signature·IHDR 크기를 가진 참조 210개에서 중복 경로를 합친 PNG **114개 전부 일치**했습니다. 이 114개에는 bounded tiles·top viewport·직접 SVG crop·조합 full PNG·문맥 crop이 포함됩니다. 같은 이미지 바이트의 crop 해시가 PB-025와 PB-032의 한 상태에서 일치하는 것은 상태 중복을 뜻하지 않습니다. manifest의 다섯 source hash(SVG·MMD·세 소비 원고)는 현재 로컬 바이트와 5/5 일치합니다. Task21 정본 계보에는 같은 자산의 시각 occurrence 12개(세 route×1440/390×light/dark)가 있으며 기록된 현재 SVG SHA는 위 SVG SHA와 일치합니다. Task21에는 이 자산의 1024×768 조합이 없으므로 Task20의 18상태로 유지합니다. 이 작업에서는 PNG 바이트·기록만 검사했으며 픽셀 판독이나 새 브라우저 실행을 하지 않았습니다.

## 3. 주장별 근거와 `not-confirmed` 입력

`research/public-beta-review-source-excerpts/r01-software-system.md`는 2026-09-12 접근 기록입니다. 아래 `직접`은 그 파일의 짧은 발췌와 원문 위치가 당시 해당 좁은 주장에 연결된다는 뜻이며, 2026-09-30 제품 현재성을 확인했다는 뜻이 아닙니다. `research/source-map.md`의 PB-025 확인일은 주로 2026-08-13, PBSG-022의 `confirmed`도 Task13 당시 판정입니다.

| R02 원고 주장·위치 | 보존 발췌가 직접 뒷받침하는 범위 | 이번 준비에서 남는 입력 |
|---|---|---|
| client/server는 요청·응답 역할이고 프로그램·호스트와 등치하지 않음(28–36행) | RFC9110-HTTP-01 §3.4의 메시지 역할만 직접; 프로그램·호스트 다의성은 source-map의 과거 적용 서술 | `not-confirmed`: [RFC 9110 §3.4](https://www.rfc-editor.org/rfc/rfc9110.html#section-3.4)와 [MDN HTTP 개요](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)의 원문에서 역할·호스트 구분 문장을 정확히 고정하고 두 층을 혼동하지 않는 claim mapping 필요 |
| 신뢰 경계·서버 인가·브라우저 번들의 열람 가능성(87, 97–110, 192–194행) | OWASP-AJAX-01의 client logic/업무 규칙, OWASP-AUTHORIZATION-01의 기본 거부·매 요청 검사, CHROME-SOURCES-01의 로드된 리소스 관찰은 직접 | 2026-09-30 Chrome·OWASP 현행 페이지 상태는 `not-confirmed`; [AJAX](https://cheatsheetseries.owasp.org/cheatsheets/AJAX_Security_Cheat_Sheet.html) 해당 Client-Side 절, [Authorization](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) Deny by Default/Validate Every Request 절, [Chrome Sources](https://developer.chrome.com/docs/devtools/sources/) View files 절 재확인. 배포 자산 열람 가능성은 원본 저장소 전체 노출의 증거가 아님 |
| Network 요청·응답 관찰과 서버/데이터 성공 구분(80–93, 123–156행) | CHROME-NETWORK-01의 Network Log·HTTP headers/content, CHROME-SOURCES-01의 Page 탭은 당시 UI 관찰 범위에 직접 | Chrome의 [Network](https://developer.chrome.com/docs/devtools/network/) Log network activity/headers·content와 [Sources](https://developer.chrome.com/docs/devtools/sources/) View files의 현재 명칭·범위는 `not-confirmed`. 브라우저 기록으로 서버 내부 규칙·저장 성공을 입증하지 않음 |
| 정적/동적 공개 전달, HTTPS, 캐시 사본(95, 132–140, 159–174행) | ASTRO-ODR-01의 build-time 사전 렌더링/on-demand 예시와 RFC9111-CACHE-01 §4·4.2·5.2.2.2의 HTTP 응답 최신성·조건부 stale 재사용만 직접 | Astro [On-demand rendering](https://docs.astro.build/en/guides/on-demand-rendering/)의 2026-09-30 기본값·버전은 `not-confirmed`. HTTPS의 전송 보호 한계는 보존 R01 발췌에 없으므로 [RFC 9110 §4.2.2](https://www.rfc-editor.org/rfc/rfc9110.html#section-4.2.2)의 정확한 원문 필요. HTTP 캐시 규칙은 앱 상태 캐시·배포 CDN의 무효화 보장으로 확대하지 않음 |
| 응답 유실 뒤 재전송·멱등 키·중복 부작용(122–123, 236행) | 보존 R01 발췌에는 HTTP 메서드의 재시도/멱등성이나 애플리케이션 멱등 키의 원문 없음 | `not-confirmed`: [RFC 9110 §9.2.2](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2.2)의 멱등 메서드와 자동 재시도의 정확한 조건을 발췌. W-03 `POST`의 중복 방지는 별도의 실제 API 계약·처리 기록·고유성 테스트가 필요하며 HTTP의 멱등 메서드 규칙만으로 구현됐다고 단정하지 않음 |
| 원자적 참가 확정·마지막 자리 충돌·제약(87–88, 133–138행) | POSTGRES18-TRANSACTIONS-01의 all-or-nothing, ISOLATION-01의 PostgreSQL 18 기본 Read Committed/일부 재시도, CONSTRAINTS-01의 check Boolean 조건만 직접 | `not-confirmed`: 원고·source-map의 `/docs/current/` 세 URL이 2026-09-30에도 PostgreSQL 18로 연결되는지와 [18판 트랜잭션](https://www.postgresql.org/docs/18/tutorial-transactions.html)·[격리](https://www.postgresql.org/docs/18/transaction-iso.html)·[제약](https://www.postgresql.org/docs/18/ddl-constraints.html)의 해당 절을 대조. 활성 중복의 unique 제약과 `confirmed <= capacity`의 구체 트랜잭션·잠금/격리·동시 요청 결과는 보존 check-constraint 발췌가 직접 입증하지 않으므로 실제 선택 스키마/API 계약·동시성 테스트가 있어야 함 |

모임 사례의 W-01/W-03/W-04는 독자에게 판단 질문을 제공하는 교육용 계약입니다. PBSG-020의 제품별 구현·배포·복구 공백은 별도 `not-confirmed`로 유지되며 이 R02 준비 과정의 로컬 문서·PNG 확인으로 닫히지 않습니다. PB-025 감사의 `conform`과 PBV-06의 과거 작업 단위 PASS도 새 M5 독립 검토를 대신하지 않습니다. PBCA-011은 PB-053의 PBSG-019·026 잔여 공백 때문에 여전히 Important입니다. R01-M01/M02는 그 원고의 open Minor 두 건으로 R26 통합 입력에 남고 R02의 선행 실패나 해소로 계산하지 않습니다.

## 4. 후속 실행 조건

2026-09-30 사용자는 남은 M5 공식·1차 출처의 읽기 전용 네트워크 조사를 승인했습니다. 위 `not-confirmed`는 권한 미승인이 아니라 **아직 실제 원문·현재 상태를 확인하지 않은 사실 상태**입니다. 별도 조사 결과가 도착하면 원문 URL·정확한 절·접근일·문서 버전/상태·짧은 발췌·claim mapping·일반화 금지선을 R02 전용 근거로 고정하고, 누락 범위는 그대로 표시해야 합니다. 그 다음 다섯 범주의 입력 전체·개별/결합 SHA와 기준 SHA를 canonical 요청서에 재고정하고, fresh Codex reviewer의 읽기 전용 완독·실제 모델/effort·결과 정본 저장·controller 재판정 조건을 순서대로 확인합니다. 지정 프로필을 사용할 수 없거나 필수 입력이 빠지면 R02는 `pending` 또는 `BLOCKED`로 남습니다. 이 문서 자체의 작성은 행렬·원고·공개 상태를 전이시키지 않습니다.
