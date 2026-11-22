# R04 Fix Round 1 검증 기록

후속 수신 뒤 현재 상태: 같은 저장 reviewer의 [실제 후속 결과](r04-api-data-auth-codex-rereview.md)는 원고 PASS C0/I0/M2·18/18, 변경 코드 PASS C0/I0/M0입니다. 후속에 전달한14파일·18청크·PNG12와 payload를 실제 이벤트 입력에서 복원·대조했고 응답 후 불변성 감사 errors0/exit0을 확인했습니다. 남은 Minor2는 R16·R20으로 이관하되 미해결로 유지합니다. 다음은 최종 staged 범위·공개 안전·exact HEAD+index 확인과 좁은 수정 체크포인트이며 R04 상태 전이는 별도입니다. 아래는 후속 검토에 제공된 당시 기록을 보존합니다.

2026-11-15 수정 후보에 대한 controller 관측입니다. 실제 원고 후속 검토 결과와 별개이며 아직 R04 closeout은 아닙니다.

## 자동 검증

- 수정 직후 기존 고정 입력 검사9개 중5개 실패를 확인했습니다. 알려진 전후 바이트 역치환 연결 뒤 같은 targeted9/9·실패0·skip0·exit0을 확인했습니다.
- 새 전이·도표 회귀3개를 포함한 `npm run check`는198/198·실패0·exit0입니다. content59, references219/SVG14, 계획100점·중복0·누락0, build60/Pagefind60, built60·본문 리터럴 Markdown0·고지 바이트 일치입니다. 기존 sitemap site 미설정 경고는 남아 있으며 공개 배포 검증을 뜻하지 않습니다.
- 직전 실행은 종료 결과를 복구하지 못해 PASS로 계산하지 않았습니다. 한 번의 재확인 결과를 로컬 `r04-fix-check.log`에 보존했습니다. 이후 순수 보고서 추가로 참조 수가 늘 수 있으며 사이트 출력 불변이면 빌드를 반복하지 않습니다.
- 새 회귀는 정확한6개 전이의 과거 바이트 복원·rollback/변조 거부, 자기 호출 화살촉과 다음 마스크의 분리, 메시지11·lifeline4·parallel1 및 수정 레이블의 SVG/Mermaid 대응을 검사합니다.

## 실제 렌더

보호 실행 파일 `codex-chart-edge`와 기존 Playwright, `--disable-gpu`로 localhost4358의 `/04-backend-data/api-database-auth/`만 관측했습니다. 1440×1000·1024×768·390×844 각각 light/dark의6상태이며 새 패키지·공개 URL·외부 요청을 사용하지 않았습니다.

6/6상태에서 HTTP200·H1하나·초안 배지·기대한 테마·두 이미지 decode/alt·수정 문구를 확인했고, 전역 overflow·console warning/error·pageerror·요청 실패·외부 요청은0입니다. 원시 관측은 로컬 `output/playwright/r04-fix-20261115/observations.json`, 각 상태의 full/viewport/detail PNG18개가 같은 폴더에 있습니다. 이는 기존 최초 PNG18을 교체하지 않는 추가 증거입니다.

Controller는 상세 crop6개와 대표 소비 화면1440light/1024dark/390light를 실제로 열어 읽었습니다. 자기 호출 반환 화살표가5번 마스크 위에서 보이고,4번 동시성 전략과10번 A 확정·전체 인원 레이블이 light/dark에서 판독됩니다. 모바일 상세는 약358×500으로 축소되므로 보조 레이블이 작다는 한계는 유지합니다. 1024에서는 상세가 세로 viewport보다 길어 문서 스크롤이 필요하지만 가로 잘림은 관측되지 않았습니다. 전체 화면 PNG는 보존용이며 전 문서의 새 시각 검토를 했다고 주장하지 않습니다.

같은 reviewer가 실제 새 이미지 입력과 영향 문맥을 판독하는 후속 검토, 전송 후 입력 불변성 감사, 관련 상태 기록 및 선별 커밋이 남습니다. R01~R03 전체 검토·무변경 개요 그림·전체 사이트 회귀는 반복하지 않았습니다.
