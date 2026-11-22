# R18 Fix Round 1 검증

후속 결과(2026-11-15): 같은 저장 reviewer의 [원고·수정 코드 PASS](r18-design-support-codex-rereview.md) C0/I0/M0·6ID RESOLVED·두18/18과 사후 감사 errors0/exit0을 확인했습니다. raw r18-fix-round-1-events-1794753857140.jsonl, payload c56bfdec32961afcb4b4d80d7b52b0ef42ee488f9f58304d4d09d1bc89b37404, 원응답 e7e54db80a5e02bd832825b50bc697aa6a073ea4e97f6b4f0e6470311cf58aa6입니다. 아래 남은 절차 표시는 전달 당시 기록이며 결과 정본 저장 뒤 최종 index·선별 커밋과 별도 controller closeout을 진행합니다. 원고·CSS에 추가 변경이 없어358테스트·빌드60·64시각 증거를 반복하지 않습니다.

기준 HEAD294aa7ff7ed3708915d21a6cab87dbbee0af892c에는 최초 정상 원결과만 별도 보존됐습니다. 영향은 두 원고의 대안·출처 귀속·승인 추적과 자연어 표시, CONTENT_MAP 문자수·source-map 보충, 정확4전이와 R17 역사 연결 검사입니다. SVG/Mermaid·CSS·실제 코드·상태는 유지했습니다. [재판정](r18-design-support-adjudication.md)의6개 ID는 후속 독립 검토 대기입니다.

## 새 검사

- focused12/12·fail0skip0·local original input122/9 errors0입니다. 필수 npm run check는358/358·fail0skip0·content59·refs375·SVG14·plan100·중복/누락0·build60/Pagefind60/built60 exit0입니다. 전체 원로그는 로컬 r18-fix-check.log입니다. sitemap의 site 미설정 경고1은 기존 공개 URL 미설정 경계입니다. 이 보고서·재판정 추가 뒤 참조 수는 별도 최종 기록으로 구분합니다.
- 최초 content-map 동기화는 영문 병기를 포함한 굵은 용어 뒤 조사 검사1건으로 실패했습니다. 해당 강조만 제거한 뒤 콘텐츠59개 통과·지도 갱신을 확인했습니다.
- 정확4전이는 수정 전후 해시·유일한 문맥 diff로 역변환하며 rollback·drift·missing 회귀를 통과했습니다. R17 완료 기록은 R18의 정확 역변환 뒤 대조하므로 과거 내용을 소급 수정하지 않습니다.

## 실제 렌더와 캡처 보완

첫 수정 렌더는3상태28PNG를 생성한 뒤 모바일에서 숨겨진 데스크톱 목차까지 #_top을 요구하여 exit1이었습니다. ADR의 DOM 빈 줄 표현을 두 번 합치는 검사 오류도 기록됐습니다. 복사 payload는 그때도 원문과 일치했으며 사이트 결함으로 판단하지 않았습니다. 원 이미지·관측 JSON·complete:false와 실패 단계를 보존했습니다.

보완 렌더는 화면에 보이는 목차만 상단 준비 조건으로 확인하고, DOM의 빈 줄 placeholder를 빈 논리 행으로 해석합니다. 동일 원고·빌드·CSS의 기존3상태28PNG는 재사용하고 누락된 모바일4PNG만 새로 만들었습니다. 대표32이미지 중10개를 실제 읽은 뒤 나머지4상태32개로 확장했고 추가2개를 판독했습니다. controller12/64 판독과 reviewer가 수행할64/64를 구분합니다.

두 보완 실행은 exit0이며 총8상태64이미지입니다. HTTP200·H1하나·초안·테마·전역 overflow0·console warning/error/pageerror/외부 요청 실패0, 보이는 상단 목차 개요·scrollY0을 확인했습니다. 세 wrap블록의 scrollWidth=clientWidth, DOM 논리 행과 copy 버튼 payload가 원문과 일치합니다. 실제 OS 클립보드 붙여넣기는 하지 않았습니다.46개 crop 그룹의 세로 합집합/가로 이동 차이는0이며 새320/200%·키보드·보조기술 적합성은 주장하지 않습니다.

P-M02의 제한된 의도적 실패 시험은 두 번째 상태 시작에서 exit1을 냈습니다. 첫 상태와 PNG1개가 남고 completedStates1·complete:false·실패 단계start·정확 오류 메시지가 보존됨을 별도 assertion exit0으로 확인했습니다. 이 PNG는 원고 시각64개에 넣지 않습니다.

## 재사용과 남은 검증

원래 전체 원고·102PNG와 변경 없는 그림4상태·직접 근거의 유효 범위는 재사용합니다. 초기27PNG·첫 수정28PNG의 실패/부분 성공 계보를 보존하며 이전 판정을 PASS로 바꾸지 않습니다. 새 렌더 증거는 output/playwright/r18-fix-20261115-corrected-{pilot,remaining}의 관측과 이미지 경로에 연결됩니다. 기존28PNG 재사용의 priorErrors는 보완 관측에도 명시합니다.

같은 저장 reviewer의 실제 복구·구체 원응답 SHA 확인, 변경 영향 범위 독립 후속 판정, 응답 후 전달/입력 불변성 감사, 결과 정본·최종 exact HEAD+index·선별 커밋, 별도 controller closeout은 남습니다. 현재 원고 draft·R18 미완료·M5/ready/공개 미완료입니다.
