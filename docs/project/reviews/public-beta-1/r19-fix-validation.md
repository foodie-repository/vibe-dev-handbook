# R19 Fix Round 1 검증

최신 기록 확인(2026-11-16): [기록 한정 후속](r19-record-followup-review.md)은 PASS C0/I0/M0·준비 기록 Minor RESOLVED이며 원고/코드 판정은 Fix1에서 계승합니다. raw r19-fix-record-followup-events-1794759226988.jsonl·응답SHA f24fb6329890de6fd08b0255425b494cd7ecf3df7965e5faabcda28744636ae2·payload c142cf056746513f374feb11959544ef3a168b7e061883336c85b9be85477b7e·실행/사후 감사 exit0 errors0입니다. 해당 호출 전 새 refs388/SVG14·release585finding0·exact585차이0/staged18/unstaged0/diffcheck0과 정본 raw+LF 일치를 확인했습니다. 아래 수치·대기는 당시 증거로 보존하며 현재 남은 것은 최종 결과 저장 이후 안전/index·선별 커밋·controller closeout입니다. 원고/그림/검사 코드가 바뀌지 않아 기존371테스트/build60/88PNG는 재사용합니다.

후속 결과(2026-11-16): 같은 저장 reviewer의 [Fix1 원응답](r19-workflow-support-codex-rereview.md)은 원고·검사 코드 PASS C0/I0/M0·기존10ID RESOLVED·세 원고각18/18, 준비 기록 Minor1입니다. 원응답 SHA5292aeaab3e412372959f4038a63b0d5a6ea6060e08ba0ac0377180b13080cd8, payload c41b22195a251c6da6960307fc811c4bfb3bb292b9e39bccf2a6c84680c72c6b이며 실행·전달/사후 불변성 감사는 exit0·errors0입니다. 현재 staged17/unstaged0·공개 안전584finding0·exact584차이0·refs387/diffcheck0 사전 확인도 완료했습니다. 아래 대기는 전달 당시 기록으로 보존합니다. 세션 식별자 제거와 현재 상태 구분만 기록에 반영했으며 원고·CSS·88PNG·검사 코드는 불변이므로371테스트/빌드60/렌더 증거를 재사용합니다. 남은 것은 기록 Minor의 같은 reviewer 후속 확인·최종 안전/index·선별 커밋과 별도 controller closeout입니다.

기준 HEAD는 최초 원결과만 선행 보존한 6ee63535801333876317f47c922a559fea0d22c4입니다. 영향은 [재판정](r19-workflow-support-adjudication.md)의 원고 의미 9건과 자연어 5블록 표시, CONTENT_MAP 문자수·source-map 보충, 정확 5전이 및 R18 역사 연결 검사입니다. SVG·Mermaid·CSS·고정 출처 발췌·검토 요청·원래 입력 manifest·draft 상태는 유지합니다. 현재 후속 독립 판정 전이며 최초 NEEDS CHANGES를 소급 변경하지 않습니다.

## 새로 수행한 검증

- focused 17/17, fail0·skip0·exit0입니다. 정확 5전이의 수정 전후 SHA·유일 문맥 역변환, drift·rollback·missing 거부, 자연어 5블록의 논리 원문·의도적 개행 및 ASCII 흐름 불변, 사례 안전 계약을 확인했습니다. 이전 R18 기록은 정확 역변환 뒤 당시 바이트와 대조합니다.
- 필수 npm run check는 371/371, fail0·skip0·콘텐츠59·참조386·SVG14·계획100점·중복/누락0·빌드60·Pagefind60·빌드 출력60개 HTML 통과, exit0입니다. 로컬 r19-fix-check.log에 원로그를 보존합니다. site 미설정에 따른 기존 sitemap 경고1은 공개 URL 미설정 경계이며 브라우저 오류와 구분합니다. 이 보고서 추가 후 참조 수는 최종 검사에서 별도 기록합니다.
- 복구 후 두 렌더 실행은 각각 exit0이며 세 경로×1440×1000/390×844×light/dark 총12상태·88PNG입니다. HTTP200·H1하나·초안 배지·테마·보이는 상단 목차/scrollY0 정상, 전역 overflow·console warning/error·pageerror·외부 요청/실패는0입니다. 자연어 블록의 scrollWidth=clientWidth, DOM 논리 행과 copy 버튼 payload는 원문과 일치합니다. 실제 OS 클립보드 붙여넣기 검증은 하지 않았습니다.
- 대표6상태44PNG 중 긴 자연어 5블록·모바일 표 좌우/상하·참가/취소 설명·데스크톱 상단/블록 등14개를 실제 판독한 뒤 반대 테마6상태44PNG로 확장했습니다. 추가2개를 실제 읽어 controller16/88이며 reviewer의 전체88개 판독과 구분합니다. 표의 의도된 내부 스크롤은 유지하고70개 crop 그룹의 세로 범위 합집합과 요청/실제 가로 이동 차이 검사 errors0·exit0입니다.

## 실패 보존과 재사용

첫 수정 캡처는 중단 전 preview가 종료되어 localhost:4359 연결 거부로 exit1,0상태·0PNG였습니다. output/playwright/r19-fix-20261116-pilot의 complete:false·실패 단계와 r19-fix-render-pilot.log를 보존했습니다. 사이트/CSS를 고치지 않고 같은 빌드의 로컬 preview만 재시작한 뒤 별도 preview-restored 출력 경로에서 성공했습니다. 이 접속 실패는 사이트 결함이나 성공한 검증으로 세지 않습니다.

새 증거는 output/playwright/r19-fix-20261116-preview-restored-{pilot,remaining}/observations.json과 해당 원본 PNG에 연결됩니다. 새1024/320/200%·키보드·보조공학·전체 사이트 검증, 실제 DB/API/운영 쓰기/원격 설정 확인은 수행하지 않았습니다.

기존 전체 원문·110PNG 검토, 변경되지 않은 SVG/Mermaid/CSS, 2026-11-16 직접 출처 확인은 유효 범위에서 재사용하며 신규 전체 검토나 조사로 계산하지 않습니다. 입력 고정·검토 후 불변성·커밋 전 exact HEAD+index는 서로 다른 목적의 검사로 유지합니다.

## 남은 검증

현재 원래 고정 입력의 역사 복원 확인·공개 안전·정확 index 사전 감사, 같은 저장 reviewer의 실제 복구·구체 원응답 SHA 확인과 영향 범위 후속 판정, 사후 전달/입력 불변성 감사·정본 보존·최종 index·선별 커밋, 별도 controller closeout은 남습니다. R19·M5 전체·ready·공개 완료를 주장하지 않습니다.
