# R16 최초 finding 재판정과 Fix Round 1

후속 확정: [같은 reviewer의 Fix1](r16-data-support-codex-rereview.md)은 PASS C0/I0/M0·세 원고각18/18·치명0, 준비/수정 코드와 시각 증거 PASS이며8개ID가 모두RESOLVED입니다. Controller도 이 판정을 수용합니다. R04-M05는 R16에서 해소된 것으로 연결하되 R04 당시 DEFERRED 기록은 역사로 보존합니다. 실제 history1·최초 응답SHA 복구·astra/high/readOnly·공식 ChatGPT 구독/creditsfalse를 확인했고16텍스트25청크·64실제PNG·payload33b9a461da05dbf903c30be32bb51c6914d4cfbd1d55afc4312fef04d7d13c94·응답SHA46fe3abd1c7d19fd014f03bac1ed7a53308f58737dc78e53f563edfc4aba02b6·모델exit0/사후감사errors0exit0입니다. 아래는후속에제공한후보당시기록이며준비·수정단위는3e85df5로커밋했습니다. R16done/review전이는r16-controller-closeout.md에연결하며M5전체/ready/공개승인은미완료입니다.

2026-11-15 controller 후보입니다. [최초 독립 결과](r16-data-support-codex-review.md)의 BLOCKED C0/I4/M4, 내용 I3/M4·18/16/16점, 시각 증거 I1, 준비 코드 PASS C0/I0/M0을 역사로 보존합니다. 최초 응답은 원고 수정 전에4261942a62b1a0fba9716979e4eff155f3e16a3b로 별도 커밋했습니다. 아래 수용·수정은 같은 reviewer의 후속 RESOLVED 판정이나 R16 완료가 아닙니다.

| ID | Controller 재판정 | 좁은 변경과 확인 기준 |
|---|---|---|
| R16-I01 | 수용 | 다섯 단계에 백필 전 모든 쓰기 경로의 보호, 버전 조건부 갱신, 전환 순간까지 새 쓰기를 포함한 수렴 조건을 연결했습니다. A를 읽은 뒤 B로 수정, 검증 뒤 구버전 쓰기, 새 형식 기록 뒤 구버전 복귀를 별도로 설명합니다. 특정 DB·이중 쓰기 구현을 강제하지 않습니다. |
| R16-I02 | 수용 | 차단 후보와 공개 버전 신선도를 분리하고 기대 시각 전 current, 기대 시각 이상이며 승인 갱신 없음 stale, 시각 정보 없음 unknown으로 명시했습니다. 기존 fixture 바이트·실제 시장 금지선은 유지합니다. |
| R16-I03 | 수용 | 재조회가 이후 경쟁을 제거하지 않음을 명시하고 DB 안의 판정·갱신 보호와 외부 발송 결정/취소/중복/결과 불명 계약을 분리했습니다. 세 순서 반례와 연습 오라클을 맞췄습니다. |
| R04-M05 | 수용·R16에서 처리 | SQL 앞에 host_user_id↔host_id, participant_user_id↔participant_id의 역할 대응을 추가했습니다. SQL·고유성·공동 주최 표의 기존 이름은 유지하고 실제 DB 이름 변경 지시가 아님을 밝혔습니다. R04 역사 DEFERRED 기록은 고치지 않습니다. |
| R16-M02 | 수용 | 공개 링크에 현재 반환 제목과 기존 AJAX 주소의 관계를 표시했습니다. 확인하지 않은 리다이렉트 헤더를 주장하지 않습니다. |
| R16-M03 | 수용 | 이미 confirmed인 내부 공백의 미래형 전환 문구를 세 장의 근거·적용 한계를 함께 관리한다는 안내로 바꿨습니다. |
| R16-M04 | 수용 | 생산자 확인과 소비자 확인의 책임 및 두 확인이 외부 부작용의 정확히 한 번 성공을 보장하지 않는다는 경계를 정의했습니다. |
| R16-E01 | 수용·캡처만 보충 | 원본142PNG와 문제4개를 보존하고 같은390px 양 테마의 표를 좌우·상하8개 구간으로 보충했습니다. 운영 행의 마지막 문장과 하단이 실제 보입니다. 표/CSS를 바꾸지 않고 스크롤로 화면 안에 넣어 확인했으므로 현재 증거에서는 캡처 한계로 판단합니다. 후속 reviewer의 직접 판정은 대기입니다. |

## 입력과 변경 경계

세 원고·CONTENT_MAP·출처 지도의 정확5전이는 scripts/r16-fix-transition.mjs의 before/after SHA와 치환 목록에 고정합니다. 정확한 현재 바이트만 역사 입력으로 역치환하며 rollback·누락·알 수 없는 변경은 거부합니다. R15 완료 검사와 역사 테스트도 이 정확한 경계만 거칩니다. 최초 요청·manifest·출처 보충·결과와 이전 행의 판정은 소급 수정하지 않습니다.

원래 응답 SHA는c9f51ede08505bdc620adb929394fde224ef9a7b3eccd5b708f97e1819a07f2b, raw+LF=file=index SHA는d153405b8227a6b95a085b0c491804bea5cfd6e13de9cad859665d7fa53498c7입니다. 최초 전달/불변성 감사 errors0·exit0,26텍스트55청크·142실제PNG·payload064617b59efe5ce72179f75b57a6bc74467c6127a25122323454d7363ba42d92를 확인했습니다. 초기 결과 추출 명령은 final만 찾다가 final_answer를 놓쳐 exit1이었으며, 계약상 두 형식을 허용하는 감사와 정확한 원응답 추출로 확인했습니다. 모델 실패나 재호출이 아니며 실패 조회도 보존합니다.

[검증 기록](r16-fix-validation.md)의 새 자동·렌더 증거와 기존 불변 근거를 구분합니다. 후속에는 실제 복구된 같은 reviewer에게 수정 원문·정확diff/SHA·재판정·코드·새64PNG를 전달하고 원래 전체 입력을 반복 검토하지 않습니다. R16 done·review·M5·ready·공개 승인으로 승격하지 않습니다.
