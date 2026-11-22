# R20 finding 재판정 — Fix Round 1 후보

최신 확정 판정: [Fix2 독립 후속](r20-fix2-followup-review.md)은 원고·코드·기록 PASS C0/I0/M0, 두 원고각18/18·치명0이며 R20-M03·R20-F1-M01을 RESOLVED로 판정했습니다. controller는 이를 수용합니다. 기존 I01·I02·M01·M02·P-M01과 R04-M08은 기존 해소를 승계하며 신규 해소로 중복 집계하지 않습니다. Fix2는 같은 저장 reviewer history2·최초/Fix1 구체 응답SHA 복구 뒤13텍스트20청크12실제PNG를 검토했고 completed/exit0·사후 전달/불변성 감사errors0/exit0입니다. raw 응답SHA256은bb31150c7afc0057e0d83d316234589bb8cdc48794912873a363c01d84d60436입니다. 아래 Fix1 후보와 미해소 상태는 당시 역사입니다. 준비·수정19파일은a10b115로 로컬 커밋했습니다. 본문 불변 R20done/review 전이와 controller closeout은 r20-controller-closeout.md로 연결하며 M5전체/ready/공개는 미완료입니다.

현재 후속 판정: [Fix1 원응답](r20-quality-support-codex-rereview.md)의 원고 PASS with Minor C0/I0/M1·디버깅17/18·성능18/18, 검사/캡처 코드 PASS C0/I0/M0와 별도 기록 Minor1을 수용합니다. I01·I02·M01·M02·P-M01은 RESOLVED이고 R04-M08의 RESOLVED를 유지합니다. M03은 체크리스트·제목에 남은 일반화 때문에 PARTIALLY RESOLVED/OPEN이며 이번 결함과 기존 정상·거절 테스트를 구분하는 두 문구만 추가 수정합니다. 새 R20-F1-M01은 검증 문서의42/42 집계 정정으로 처리하되 동일 reviewer 후속 확인 전에는 두 Minor를 RESOLVED로 쓰지 않습니다. 최초 판정과 아래 Fix1 당시 후보 상태는 역사로 유지합니다. Fix1 실행 completed/exit0·19텍스트33청크84실제PNG·전달/불변성 감사 errors0/exit0·raw 응답SHA256 d4b6afdfd2fa3dac1050cf0cb19ecc119bb0fe5afb2b1fa0e5f8d4a5c2bd2892이며, 원고draft·R20pending·공개 미완료를 유지합니다.

기준 commit은827a94cdd7e4c412370106b426e1f7cb554746ef입니다. [최초 원응답](r20-quality-support-codex-review.md)을 원고 수정 전에 이 커밋으로 단독 보존했습니다. 최초 원고 NEEDS CHANGES C0/I2/M3·디버깅15/18·성능16/18·치명0, 입력 검사 PASS C0/I0/M0와 캡처 코드 Minor1을 구분합니다. 실행은 정상 completed/exit0이며 원문34개63청크·실제PNG100개와 사후 감사 errors0/exit0을 확인했습니다. raw응답SHA256은308daea0a7b8576b4b5cb90a5859067c4d134ae8333469f2bb3a98df891b0e40, 원응답+LF 정본은e1d2a9ba15a7d3a23046f25c56b82e8880ed6ae7c1f660cca826734d35bb5dda입니다. 도구 비활성에 따른 Code Mode unavailable 경고는 의도된 fail-closed이고 도구 호출·실행 오류는 없었습니다.

| ID | Controller 판단 | 최소 변경과 재확인 범위 |
|---|---|---|
| R20-I01 | 수용 | 두 원고의 자연어6블록에 기존 `text wrap`을 적용합니다. AI 계약의 회귀 항목 한 줄 외 원문·논리적 개행은 유지하며 전역CSS·표 레이아웃은 변경하지 않습니다. 두 폭·양 테마에서 DOM/copy payload·가로 넘침과 세로 전체 픽셀을 확인합니다. |
| R20-I02 | 수용 | 결과 불명·새 쓰기 보류·인증된 자기 상태 조회·확인 상태 반영·재조회 실패의 불명 유지가 수정 전 실패/수정 후 성공의 직접 기준입니다. 현재 상태와 과거 요청 종결을 구분하고, 이미 유지되던 정원·활성 중복·부분 변경 조건은 별도 보호 증거로 둡니다. 실제DB 경쟁·대기 관측과 동일 조건 지연 비교를 설명하지만 앱 실행 성공은 주장하지 않습니다. |
| R20-M01 | 수용 | 과거08-13 확인을 유지하면서 Resource Timing의 현재09-01 CRD와 Chrome129 고정 미확인·현재UI 미실행을 공개 출처 절에 연결합니다. source-map은 과거 행을 바꾸지 않고 현재 보충을 추가합니다. |
| R20-M02 | 수용 | 두 원고에 p95의 표본·기간·95번째 백분위수와 비보장 범위를 짧게 정의하고, 디버깅 장에 스팬의 작업 구간·잠금 원인 비증명을 설명합니다. 용어집 전체나 무관한 원고는 변경하지 않습니다. |
| R20-M03 | 수용 | 회귀 현상과 검증 활동, 이번 결함 재현의 실패→성공과 기존 정상·거절 테스트의 통과 유지를 구분합니다. 아홉 칸과 본문·AI 계약에만 적용합니다. |
| R20-P-M01 | 수용 | 새 Fix 렌더 스크립트에서 requestedTheme을 관측 theme과 직접 비교하고 예정된 경로·폭·요청 테마의 누락/중복을 거절합니다. 실제 renderer predicate의 양방향 mismatch·누락·중복·추가 테스트를 실행합니다. 초기100PNG는 실제 테마 판독이 유효하므로 소급 무효화·전체 재캡처하지 않습니다. |

R04-M08은 이번 R20 최초 reviewer가 현재 전체 성능·보안 원고·사례 브리프·R04 최초와 후속 해소 기준·R10-M03 정확 전이를 직접 대조해 RESOLVED로 판정했고 controller도 수용합니다. 제품 알림을 기본 구성에서 제외하고 운영 경보와 구분한 기존 두 문단은 수정하지 않습니다. R04 당시 DEFERRED/OPEN·점수·건수와 R10의 국소 PASS는 역사로 보존하며 이번 현재 해소 연결을 별도로 남깁니다. R04-M05나 다른 행의 지적을 여기서 새로 판정하지 않습니다.

두 원고·CONTENT_MAP·source-map의 정확4전후 SHA와 치환은 `scripts/r20-fix-transition.mjs`가 고정합니다. 정확한 현재 바이트만 역사 입력으로 역치환하고 drift·rollback·누락은 거부합니다. R19 closeout의 역사 연결과 해당 테스트만 보완하며 최초 R20 요청·manifest·출처·원응답과 기존 PNG100개는 그대로 유지합니다. 원고는 draft, 행렬은 pending이고 현재 여섯 새 ID는 같은 저장 reviewer의 후속 확인 대기입니다. 준비 검사나 controller 수용을 RESOLVED·원고PASS·review·M5·ready·공개로 확대하지 않습니다.
