# R03 입력 준비와 최초 검토 기록

2026-10-25 기준 commit은 `b5b3f245239b87fc1f10f14144c4b27bf2c52f00`입니다. 이 단위는 고정 입력·검사기·최초 결과의 보존이며 R03 원고 완료가 아닙니다. [최초 결과](r03-http-codex-review.md)는 원고 `NEEDS CHANGES` C0/I3/M4·15/18·치명0, 별도 준비 코드 `PASS` C0/I0/M1입니다. R03의 행렬 완료·원고 review 전이·M5 전체·ready·공개 승인은 아직 반영하지 않습니다.

## 범위와 증거

- [요청서](r03-http-request.md)와 [manifest](r03-http-input-manifest.json)는 텍스트8개·원본 PNG18개 및 관련 문맥17개를 고정합니다. 원고·SVG/Mermaid·기존 PNG·R01/R02 결과는 변경하지 않았습니다.
- [10월25일 출처 보충](../../../../research/public-beta-review-source-excerpts/r03-http-2026-10-25.md)은 RFC9110·Fetch·Mixed Content·Chrome Network의 해당 주장을 좁게 확인했습니다. 과거 10월15일 근거는 날짜를 바꾸지 않고 별도 입력으로 재사용했습니다.
- 최초 원고 검토와 별도 세션 저장 점검은 서로 다른 세션입니다. 점검에서는 실제 응답을 저장하고 프로세스 종료 뒤 같은 ID와 응답 이력을 복구했습니다. 원고 reviewer는 fresh history0·ephemeral false·실제 openai/gpt-6-astra/high·readOnly/network false·approval never·MCP15 disabled/tool0·ChatGPT 구독/no-extra-credits 조건으로 실행했습니다. 전역 인증·설정은 바꾸지 않았습니다.
- 원고 검토에는 실제 텍스트22청크(원문8파일과 준비 코드2파일) 및 localImage/original PNG18개를 전달했습니다. reviewer는 원문 완독과 이미지별 새 관측18행을 반환했습니다. 수신 payload에는 빈 text_elements가 추가되고 키 순서가 정규화되므로 이 두 직렬화 차이만 정규화해 대조했습니다. 정규화 전 직렬화 SHA 차이는 내용 변조가 아니며 실제 텍스트 재조립·이미지 순서/경로/상세 수준/바이트 SHA도 각각 일치했습니다.
- 실제 payload SHA는 `eafd7ebf5ea1801a9cc071646c29aa2f4527e5d25e9203e48c88891ed6dca545`, 원본 응답 SHA는 `a4868577653fdba9600dac9c892128094fda259eb1aff59a68e65c0bd8afa505`입니다. 응답 후 입력 불변성·금지 도구 미사용·완결 응답1개·stderr error0 감사를 errors0/exit0으로 확인했습니다. 원시 로그와 세션 식별자는 로컬 전용 원장에 보존합니다.

## 검증과 독립 준비 검토 재판정

초기 발췌 구성 오류로 용어집 segment mismatch1과 focused test1 실패가 발생했습니다. 원문과 정확히 맞춰 복원한 뒤 입력을 다시 고정했고, 실제 reviewer 호출 전 `node scripts/r03-review-inputs.mjs --local-evidence`는 errors0, `node --test tests/r03-review-inputs.test.mjs`는3/3·fail0, `npm run check:static`은183/183·fail0/content59/references206/SVG14/plan100·중복0·누락0으로 모두 exit0입니다. 입력 검사는 reviewComplete/releaseReady false를 유지합니다.

R03-PREP-M01은 수용·비차단 현행 유지입니다. 발췌 내부와 로컬 PNG/계보 실패 경로를 직접 지정하는 회귀 공백은 실제이며, 고정 manifest·개별 파일·발췌의 오류 누적 방어 자체를 깨지는 않습니다. 독립 reviewer의 준비 코드 PASS와 safe-to-checkpoint 의견을 따르되 원고 Important 해소와 혼합하지 않습니다. 후속 좁은 검사 개선 시 구체 오류 분기 테스트를 보강할 수 있습니다. 독립 reviewer는 테스트를 실행하지 않았으며 위 실행 결과는 controller가 직접 확인한 별도 증거입니다.

공개 원고·런타임·자산 입력이 불변이므로 `b5b3f24`의 유효 build·렌더를 재사용했습니다. 이번 준비 단위의 새 브라우저·build 실행으로 기록하지 않습니다. 추가 결과/보고서의 참조 검사는208문서/SVG14·exit0이고, exact staged9를 포함한 HEAD+index290파일은 작업 바이트와 모두 일치했습니다. 공개 안전 검사는 tracked/scanned290·forbidden0·finding0·exit0이며 staged diff-check도 통과했습니다. R03-I01~I03과 M01~M04의 재판정·최소 수정·같은 세션 재검토가 다음 작업입니다. R02 승계 예외는 적용하지 않습니다.
