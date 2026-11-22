# R05 Fix Round1 검증 — 2026-11-15

## 응답 후 확인

같은 R05 저장 reviewer의 [Fix Round1](r05-browser-dom-codex-rereview.md)은 원고 PASS C0/I0/M1·18/18, 코드 PASS C0/I0/M0입니다. 같은 저장 세션의 최초 final 복구·history1·실제 gpt-6-astra/high/readOnly/networkfalse·도구 호출0을 확인했습니다. 응답 후 감사는 텍스트14파일/17청크·PNG10개와 payload·프로필·입력 불변성 errors0/exit0입니다. 원시 로그는 로컬 전용 `r05-fix-round-1-events-1794704441926.jsonl`, payload SHA는 `b0f097c6a9faaa2c5b6e601dd1d52032871f730fbd49f146a10f4a95d957c7e6`, 원 응답 SHA는 `796edc0a65d8afa3bf05f9dc53897ecaa5347faed2ee79dc0da365470679b81f`입니다. 정본에는 원 응답과 마지막 줄바꿈만 저장합니다. 아래는 후속 요청 당시의 검증 이력이며, 실행하지 않은 범위를 PASS로 확대하지 않습니다.

## 후속 요청 당시 검증 이력

대상은 R05 원고와 인접 R17 UI 상태 원고의 좁은 표·설명 수정, 문자 수 지도 및 정확한 역사 복원 검사입니다. 공유 SVG/Mermaid·원본 PNG·다른 공개 원고·현재성 확인 기록은 변경하지 않았습니다. 초기 독립 결과와 [재판정 후보](r05-browser-dom-adjudication.md)를 구분합니다.

- 첫 집중 검사는 10/11 통과, 실패1입니다. R04 closeout 테스트가 CONTENT_MAP의 R05 후속 변경을 아직 역치환하지 않아 실패했습니다. R05의 정확한 알려진 after만 이전 상태로 복원하도록 기존 검사의 대조를 연결한 뒤 전체 검사로 통과를 확인했습니다.
- `npm run check`: 테스트209/209·실패0·skip0, 콘텐츠59·참조231/SVG14·계획100/중복0/누락0, build60·Pagefind60·built HTML60/리터럴 Markdown0·고지 바이트 동일, exit0입니다. 기존 `site` 미설정 sitemap 경고는 유지하며 공개 URL을 설정하지 않았습니다.
- 로컬 고정 R05 입력27/문맥10·PNG/출처 계보 검사 errors0/exit0입니다. 이 검사는 최초 입력의 역사 복원과 현재 수정의 rollback 거절을 함께 검사하지만 원고 PASS를 대신하지 않습니다.
- 실제 localhost4359 preview와 보호 Edge/기존 Playwright로 두 경로를 1440×1000·390×844 light에서 확인했습니다. 4상태 HTTP200·H1 1개·초안 배지·light 값·수정 문구 존재·전역 overflow 없음, Console warning/error·pageerror·requestfailed·외부 요청0입니다.
- 변경 표의 내부 가로 스크롤은 스크립트로 실제 이동시켜 모바일 R05 282/282px, UI 상태410/410px 끝까지 도달했습니다. 이는 OS 키보드·터치 조작을 새로 완료했다는 뜻이 아닙니다. 데스크톱 두 표의 가로 초과는0입니다.
- 원본 캡처8개를 직접 읽었습니다. 모바일 UI 표 마지막 행이 viewport 아래로 이어져 그 마지막 두 행과 뒤 설명만 추가 캡처2개로 읽었습니다. 추가 관측 HTTP200·scroll410/410·오류0입니다. 좌우 스크롤 캡처의 화면 가장자리에서 다른 열 일부가 잘리는 것은 현재 가로 위치의 범위이며 열 전체 소실로 판정하지 않았습니다. 수정된 마지막 행과 unknown 유지 설명은 별도 하단 캡처에서 판독됐습니다.

관측 JSON과 PNG10개는 로컬 전용 `output/playwright/r05-fix-20261115/`에 보존합니다. 그림·색·레이아웃 구현을 바꾸지 않았으므로 기존 모든 테마·뷰포트 그림 검토와 전체 사이트 QA를 반복하지 않았습니다. 새 캡처는 변경 표·설명의 영향 범위이며 전체 사이트·접근성·다른 행의 독립 완료 증거가 아닙니다. 이 기록 이후 동일 저장 reviewer가 수정 원고·정확한 diff/해시·다른 소비 발췌·PNG10개를 확인해야 하며 응답 후 감사·선별 커밋은 아직 미완료입니다.
