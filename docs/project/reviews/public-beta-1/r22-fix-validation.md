# R22 Fix1 검증

기준 HEAD892aa27263b618681ece7f4dd11a3f67e85532c0에서 최초 정상 결과를 보존한 뒤 F01~F09에만 대응했습니다. 영향은 한 원고의 의미·프롬프트 표시, CONTENT_MAP/source-map 정확3전이와 역사 입력 연결·검사·재판정입니다. 공개 상태draft/R22pending, CSS·그림·표·dotenv예시·외부상태는 유지합니다.

새 focused10/10·local52/9errors0입니다. 첫 전체403/403은 통과했지만 CONTENT_MAP의 본문 문자 수11880이 실제11881과 달라 content검사exit1·빌드미실행이었습니다. controller가 같은 실행 묶음에서 렌더를 먼저 시작한 오류로 이전 빌드의 schema 선택이 실패해 렌더exit1/completefalse가 남았습니다. 실패 로그와 output/playwright/r22-fix-20261116-pilot은 그대로 보존하며 유효 캡처에 합산하지 않습니다. 문자 수와 정확 전이를 고친 뒤 최종403/403fail0skip0/content59/refs418/SVG14/plan100·빌드60/Pagefind60·built60exit0을 확인한 후 새 built 접미 경로에서만 캡처했습니다. 사이트 URL 미설정 sitemap 경고는 기존 경계이며 공개 배포 성공을 뜻하지 않습니다.

유효 렌더는 한 경로×1440/390×light/dark 4상태64PNG입니다. 대표32개 중8개를 실제 읽은 뒤 나머지32개로 확장했고 이후 모바일light2개를 추가 판독했습니다(controller10/64). reviewer는64개 모두 실제 이미지로 받습니다. 두 렌더exit0·HTTP200/H1하나/초안/요청theme정상·전역overflow/consolewarning/error/pageerror/외부요청실패0, 56crop묶음 가로위치/세로합집합errors0·최종판정실제코드7경우PASS입니다. 네 상태 wrap의 원문/DOM/복사payload가 정확히 같으며 desktop client/scroll786/786·mobile356/356입니다. 실제 OS클립보드 버튼 조작·키보드·1024/320/200%·보조기술·실제.env/계정/비밀회전/원격조회를 실행하지 않았습니다.

재사용한 증거는 최초36PNG·원고전체 검토·공식4페이지 선언범위·불변 문맥/계약입니다. 현재403tests·새build와64PNG는 새 실행이며 준비 당시 R21build 재사용과 구분합니다. 수정은 NodeCLI 직접근거 없는 현재 문장을 좁혔으므로 추가 네트워크 조사를 하지 않았습니다. 이름/마스킹/가짜노출/가역인코딩, clientpublic/serverpublic/serversecret의 비교는 원고·직접근거·문맥 판단이며 실제 제품 실행 시험이 아닙니다.

남은 단계는 현재 선별 index·공개안전, 동일 저장 reviewer의 원응답SHA/history 복구·영향 재검토, 전달/불변성 감사와 실제 finding 해소 재판정·정본·최종index·로컬커밋·별도 controller closeout입니다. 후보 수정과 자동검사 성공을 독립 원고PASS/review/M5/ready/공개 승인으로 확대하지 않습니다.
