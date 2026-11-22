# R12 Fix Round 1 검증

대상은 [finding 재판정](r12-meeting-capstone-adjudication.md)의 I01~I05·M01~M03입니다. 원고·사례 브리프·콘텐츠 지도·출처 지도만 의미를 변경하고 정확4개 전후 해시·역사 복원 검사를 연결했습니다. 최초 정본은 수정 전에49f3c22에 보존했습니다. 원고draft/R12pending이며 앱 구현·DB 시험·공개·ready 또는 M5 완료가 아닙니다.

## 자동 검사

- `node --test tests/r12-fix-transition.test.mjs tests/r12-review-inputs.test.mjs tests/r11-closeout.test.mjs`: 11/11·실패0·skip0·exit0.
- `npm run check`: 전체286/286·실패0·skip0, content59·references314·SVG14·plan100/누락0/중복0, build60·Pagefind60·built HTML60·본문 리터럴 Markdown0·고지 바이트 일치, exit0. 기존 sitemap site 미설정 warning1은 유지합니다.
- 정확4전이의 현재 해시·이전 바이트 복원·누락/변조/과거 롤백 거절과 R11/R12 입력 연계를 검사했습니다. 5묶음×9필드의 구조, 의미 경계, CSS와 SVG/MMD 불변을 확인했습니다. 원고 본문은18,254→22,404자이며 draft를 유지합니다.

## 변경 화면

기존localhost preview에서 보호된 headed Edge로1440×1000·1024×768·390×844와light/dark의6상태를 확인했습니다. 새 추적 구조 외의 CSS·그림은 변경하지 않았습니다. 전30개 추적 crop을 직접 열어 W01~05의 제목·9개 항목·마지막 복구 항목까지 읽었습니다. 폭788/692/358px에서 각 목록의 scrollWidth=clientWidth이고 전역overflow·산문 넘침0입니다. HTTP200·H1한개·검토용 초안·요청 테마, console warning/error·pageerror·외부 요청/실패0을 확인했습니다.

첫 캡처는 문서 아래쪽clip을 viewport로 제한한 실행 오류로exit1이며 유효한 최종 증거가 아닙니다. fullPage 기반 문서clip으로 보정한 두 번째 실행은30PNG를 생성했지만 지연 로딩 이미지를 아직 보지 않은 시점에 검사하여 loaded=false로exit1이었습니다. 이때 End 직후 scrollY=false도 관측되어 키보드 완료 근거로 쓰지 않았습니다. 실패를 소급PASS로 바꾸지 않습니다.

별도 좁은 보충 검사에서는 해당 이미지를 화면에 가져온 뒤complete/naturalWidth560/naturalHeight952를 기다려6상태 모두 로드를 확인했습니다. Tab으로 ‘콘텐츠로 이동’에 도달하고 Enter→PageDown으로 다섯 추적 제목이 순서대로 화면에 나타나는 것을 관측했습니다. desktop17/tablet26/mobile33회 관측, errors0·exit0입니다. 보충 viewport6PNG도 직접 열었으나 상단 빈 여백이 있는 이동 중 캡처이므로 전체 화면 배치의 무결성 근거로 확대하지 않습니다. 추적 내용의 최종 판독 근거는 보존한30개 전체 묶음crop입니다. 스크린리더·모든 링크·사이트 전체 회귀는 이번 범위가 아닙니다.

로컬 전용 증거: `output/playwright/r12-fix-20261115-complete/observations.json` 및30PNG, `output/playwright/r12-fix-20261115-keyboard/observations.json` 및6PNG, 진행 원장 아래 `r12-fix-check.log`와 실행 스크립트입니다. 이 파일들은 Git 전달 대상이 아니며 실제 입력 전달 시 각 경로·순서·SHA를 고정합니다. 원래24PNG와 전체 원문 검토는 변경되지 않은 범위만 재사용하고 표의 과거 판독 실패는 역사로 남깁니다.

## 남은 게이트

새 결과에 대한 같은 저장 reviewer 후속 판정과 controller 재판정, exact HEAD+index·공개 안전·선별 커밋이 남았습니다. 최초 NEEDS CHANGES를 수정하지 않으며 이 문서는 원고PASS·review 전이·완료 검토를 대신하지 않습니다.

## 후속 검토 완료 기록

앞 절은 검토 전달 당시 상태입니다. [같은 reviewer의 Fix1](r12-meeting-capstone-codex-rereview.md)은 원고PASS18/18·치명0·C0/I0/M0, 코드/체크포인트PASS이며 최초8건의 해소를 controller가 수용했습니다. 전달 전 관련11파일만staged·unstaged0, release463finding0·exact463불일치0·diffcheck0·patch0959205c0b00ed5e559120bbd8ed473f2295fefa7ffb649bd172f3a0c7e88992였습니다. 전달 후 원문17파일43청크/PNG36·payload·전후 불변성/프로필/세션복구 사후감사는errors0/exit0이고 실행exit0입니다. 결과 저장·재판정 이후의 최종 index/공개 안전 검사는 로컬 원장에 별도로 남기며, 본문·코드·그림이 변하지 않아 유효한286개 검사와 빌드를 반복하지 않습니다.
