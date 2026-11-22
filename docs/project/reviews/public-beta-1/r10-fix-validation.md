# R10 Fix Round 1 검증

후속 결과: 같은 저장 reviewer의 `r10-operations-codex-rereview.md`에서 지정6건 RESOLVED·PASS C0/I0/M0·18/18·코드PASS를 확인했습니다. 전달 후 무결성 감사 errors0/exit0, 실행 프로세스 종료 코드0입니다. 아래의 검토 대기 표현은 검증 입력 고정 당시 기록입니다. 기록 추가 후 참조293/SVG14·공개 안전427/finding0·exact HEAD+index427차이0/staged13/unstaged0/diffcheck0을 후속 입력으로 전달했으며, 결과 정본 저장 이후의 최종 index는 로컬 진행 원장에 별도로 남깁니다. 원고·그림·코드는 후속 검토 이후 바꾸지 않았고 기존265개 검사와 렌더 증거를 재사용합니다.

2026-11-15, 기준 HEAD `6341d7d9555f0102329461e9310e69048a2bd733`입니다. [재판정](r10-operations-adjudication.md)의 I01~03/M01~03만 반영한 후보이며 최초 NEEDS CHANGES 기록과 고정 원고·PNG18의 역사는 유지합니다. 아직 후속 독립 검토와 controller closeout 전입니다.

## 자동 검사

- 집중 회귀 10/10, 실패0·건너뜀0입니다. 정확4파일의 전후 치환·해시, R09 역사 입력 복원과 R10 고정 입력·현재 변경 검사를 확인했습니다.
- `npm run check` 전체 종료 코드0: 테스트265/265·실패0·건너뜀0, 공개 원고59, 내부 참조292/SVG14, 계획100, 빌드60페이지·Pagefind60페이지·생성 HTML60페이지/literal escape0입니다. 로그는 로컬 진행 원장의 `r10-fix-check.log`에 있습니다. 기존 sitemap의 site 설정 경고는 공개 URL 확인이나 배포 성공이 아닙니다.
- `git diff --check` 종료 코드0입니다. 코드·검사·입력 변경에 필요한 검증만 실행했고 유효한 이전 원고 전체 검토와 원본 PNG18은 다시 만들지 않았습니다.

## 실제 변경 구간 렌더

기존 localhost preview4359와 보호된 headed Edge를 사용했습니다. 1440×1000, 1024×768, 390×844 × light/dark의6상태에서 운영 원고의 그림 안내·사고 대응·NIST 대상·키 복구·체크리스트·출처와 인접 보안 원고의 두 문단을 캡처했습니다. 총42개 PNG와 관측 JSON을 `output/playwright/r10-fix-20261115/`에 보존했습니다. 실행 종료 코드0,42개 모두 HTTP200/H1 1개/draft배지/요청 테마 일치/이미지 decode/전역 overflow없음이며 console warning/error·pageerror·요청 실패·외부 요청 관측0입니다. Controller가42개를 실제로 열어 본문·그림·색 대비·줄바꿈을 읽었습니다.

첫 모바일 adjacent 캡처2개는 제목 윗부분이 일부 잘렸습니다. 원고 결함으로 단정하지 않고 캡처 시작점을 제목과 wrapper의 최소 좌표로 좁게 보정한 `adjacent-complete-390-light/dark.png`를 추가해 전체 제목과 두 문단을 직접 읽었습니다. 기존 실패성 캡처는 삭제하거나 덮어쓰지 않았습니다. 모바일 운영 증거 표는 client358/scroll384px, overflow-x auto였고 실제 scrollLeft0→26으로 오른쪽 끝을 확인했습니다. `incident-table-right-390-light/dark.png`는 기존 왼쪽 위치와 함께 전 열을 확인하는 보충이며 한 장에 전체 열이 동시에 보인다고 주장하지 않습니다. 보충4개도 HTTP200·전역 overflow없음·오류0·종료 코드0이고 모두 직접 판독했습니다. 보충 관측은 같은 폴더의 `mobile-supplement.json`입니다.

후속 reviewer에는 최초42개 중 불완전한 adjacent 모바일2개를 완전한2개로 대체하고 표 오른쪽2개를 더한 실제 PNG44개를 전달합니다. 원본42개와 보충4개의 관측 기록은 모두 보존합니다. 본문 변경 구간만 확인했으며 전체 사이트·키보드 회귀나 실제 운영 계정·알림·키 관리·복원 시험을 수행했다는 뜻은 아닙니다. SVG/Mermaid는 변경하지 않았고 R20 인접 두 문단의 정렬은 R20 전체 검토를 대체하지 않습니다.

## 다음 게이트

최종 정본 저장 시 기본 `git diff --cached --check`는 reviewer가 넣은 finding 제목6곳의 Markdown 강제 줄바꿈(줄 끝 공백2개)만 보고하며 exit2였습니다. 원 응답과 의도된 구조 보존을 위해 해당6줄을 제거하거나 바꾸지 않았습니다. 정본의 원 응답+LF 일치와 정확6개·공백2개의 강제 줄바꿈만 존재함을 별도로 확인하고, 나머지 파일에는 기본 diff 검사를 적용합니다. 이 정본 한 파일에만 명령별 `core.whitespace=-blank-at-eol`로 나머지 공백 오류를 검사하며 전역·저장소 설정은 변경하지 않습니다. 이 한정 허용을 기본 검사 exit0으로 바꾸어 기록하지 않습니다.

원고2개는 draft, 행렬 R10은 pending을 유지합니다. 동일 저장 reviewer의 최초 응답 복구·공식 ChatGPT 구독/추가 과금 없음·실제 astra/high·읽기 전용·도구 없음 확인 후, 변경 원문·직접 근거·전후 diff/해시·검사 결과와 실제 PNG44개에 대한 후속 판정이 필요합니다. 공개 안전 및 exact HEAD+index 결과는 후속 검토 입력의 별도 증거로 고정하고 검토 후 최종 선별 커밋 전에 필요한 결과 기록만 확인합니다.
