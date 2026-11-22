# R17 Fix Round 1 — 영향 범위와 검증

## 최신 후속 검토·감사 결과

Fix1은 동일 저장 reviewer의 history1·최초 응답 복구·실제 gpt-6-astra/high/openai/readOnly/networkfalse/approvalnever·ChatGPT 구독/추가 크레딧 false·외부 도구15개 disabled 조건에서 텍스트17개30청크·실제PNG94개를 읽었습니다. 원응답 SHA는 `c6d20f1b681a24d5a42a8efb3e026503133b34f6e93258fd13f7edfad70805ce`, raw+LF 정본은 `27dcd3e25f1c1c4ef996381da11a892a4ee01ddac5da3b8830c1df4b6b5da0e0`입니다. Payload는 `beb9f434aa2e686ce510313828d817d084a077f5450de8c95eccd6547d5d7267`이며 전달·사후 불변성 감사 errors0/exit0, 실행 exit0입니다. 원고·시각·코드 PASS/7ID RESOLVED이지만 구체 최초 응답 SHA 미전달로 계약상 BLOCKED인 [원응답](r17-frontend-support-codex-rereview.md)을 보존합니다.

증거 한정 보충은 같은 세션의 history2와 최초·Fix1 원응답 해시를 실제 복구하고 구체 복원값·정본 관계만 2텍스트2청크로 전달했습니다. 원고·이미지를 다시 보내지 않았습니다. [현재 후속 PASS](r17-frontend-support-evidence-followup.md)의 원응답 SHA는 `66a824f6304a50d2c39aff6810f086d3add90093e372e9e15e4a5394e23ebee1`, payload는 `34b2d0476a2c2433276c732836165c71d9b0a58a5c31a7d5323cad5cc54bcef8`입니다. 같은 실행 경계와 두 실제 복원 해시, 입력 불변성·정확 전달을 사후 감사하여 errors0/exit0·실행exit0을 확인했습니다. 각18/18·치명0·C0/I0/M0·7ID RESOLVED를 승계하며 당시 BLOCKED를 소급 수정하지 않습니다. 비활성 code-mode host 경고는 설정한 도구 제한의 안내이며 도구 실행·MCP 오류·모델 재시도는 없었습니다.

후속 검토 전 선별16파일·tracked549·unstaged0·HEAD+index와 작업 파일 차이0·공개 안전 finding0/exit0, staged diff SHA `486cbe94b17a65d7eda55f055a72148bfb3465b789a708781425cc95d294290e`를 확인했습니다. 이 값은 후속 응답 저장 전 후보이며 최종 결과 파일까지 포함한 index로 확대하지 않습니다. 아래 대기 표시는 당시 후보의 역사이며, 최종 선별 커밋 전에는 결과 기록을 포함한 exact index를 별도 확인합니다.

## 범위·원판정 보존

기준 HEAD는 `053438f06cf9c9bd3dfc0da2ef3fa967b396ebe2`입니다. [최초 독립 응답](r17-frontend-support-codex-review.md)은 원고 수정 전에 별도 커밋했으며 NEEDS CHANGES C0/I3/M3·준비 기록 M1을 소급해서 바꾸지 않습니다. [재판정 후보](r17-frontend-support-adjudication.md)는 현재 수정과 후속 확인 범위를 나눕니다.

영향은 두 원고의 의미·용어·표와 자연어 fence 표시, 콘텐츠 지도 문자수·출처 보충, 정확4파일 전이 및 역사 입력 검사 연결입니다. 공통 CSS·그림·실제 코드·의존성·프레임워크·draft 상태는 변경하지 않았습니다. `text wrap`은 기존 기능이며 세 블록의 원문과 의도된 개행을 유지합니다. 오류·모임 취소의 설명은 교육용 계약이며 실제 API/DB 실행 결과가 아닙니다.

## 새 자동 검증

- 집중 테스트: `node --test tests/r17-review-inputs.test.mjs tests/r17-fix-transition.test.mjs tests/r16-closeout.test.mjs` — 12/12, 실패0·skip0, exit0.
- 필수 `npm run check:static` — 346/346, 실패0·skip0; 콘텐츠59·참조364·학습SVG14·계획100점, exit0. 원로그는 로컬 원장의 `r17-fix-check.log`입니다.
- `npm run build` — 60페이지·Pagefind60, exit0. 기존 `site` 미설정 sitemap 경고1은 유지하며 배포 성공을 뜻하지 않습니다.
- `npm run validate:built` — 60 HTML, 일반 본문 리터럴 Markdown0·고지 동일, exit0. 권리 최종 승인으로 확대하지 않습니다.
- 기록 두 문서를 추가한 뒤 `npm run validate:references` — 참조366·학습SVG14, exit0. 최초 refs362·후속 관측363·Fix1 정적 검사364와 시점을 구분합니다. `git diff --check`도 exit0입니다.
- 정확 전이 생성 첫 시도는 반복된 wrap 문자열의 비유일성 때문에 실패했고 전이 파일을 만들지 않았습니다. 문맥1줄을 포함한 정확 역변환으로 보완한 뒤 위 테스트를 실행했습니다. 이후 동일 성공 검증을 이유 없이 반복하지 않았습니다.

## 실제 렌더와 증거 재사용

기존 보호 Edge·localhost preview에서 두 렌더 실행 모두 exit0입니다. `output/playwright/r17-fix-20261115-pilot/observations.json`은 4상태·35PNG, `remaining/observations.json`은 12상태·59PNG로 총16상태·94PNG입니다. 두 원고 각각 1440·390 폭의 light/dark, 320 CSS 픽셀 폭 light/dark, 1440 폭에서 별도 200% 글자 확대 light/dark를 확인했습니다. 200%는 main과 하위 요소의 계산된 글자 크기를 각각 두 배로 만든 재현 조건이며 네이티브 브라우저 확대나 보조 기술 시험이 아닙니다.

HTTP200·H1하나·초안 배지·테마·페이지 overflow·console warning/error·pageerror·외부 요청 실패를 관측했고 오류0입니다. 변경된 자연어 블록의 scrollWidth와 clientWidth는 같으며 DOM 텍스트·복사 버튼 payload가 원본 각 줄과 일치했습니다. 실제 클립보드 권한·붙여넣기 동작을 새로 시험했다는 뜻은 아닙니다. 표 내부 가로 스크롤은 유지하고 좌우·상하 분할로 내용을 전달합니다. 78개 crop의 세로 범위 합집합·요청/실제 가로 이동 차이 검사도 오류0·exit0이며 이 기하 검사가 이미지 판독을 대체하지 않습니다.

Controller는 확장 전에 대표11개(프롬프트·흐름·표·제목·오류 문맥)를 실제로 읽었고, 이후 320px·200% 확대7개를 추가로 읽었습니다. 94개 전체를 controller가 완독했다고 하지 않습니다. 같은 저장 reviewer에게는 94개 실제 PNG 모두와 식별자·경로·SHA·순서를 전달하여 변경 영향 범위를 검토받습니다. 최초 전체 원고·직접 근거·104개 실제 PNG 검토는 불변 범위에서 재사용하며 새 실행으로 계산하지 않습니다.

## R17-P-M01: 시점이 다른 참조 검사 구분

최초 고정 준비 기록과 `r17-input-check.log`의 refs362는 당시 실행 결과입니다. 검증 문서를 추가한 뒤의 refs363은 controller의 별도 도구 출력과 로컬 진행 원장에 남은 후속 관측이며, 그 전체 raw 로그를 최초 reviewer에게 보낸 것처럼 주장하지 않습니다. 당시 instruction에서 refs363을 기록하면서 그 별도 근거를 연결하지 않은 문제를 인정합니다. 과거 로그·입력·응답은 그대로 두고 이번 Fix1에서는 원로그 refs364와 문서 추가 이후의 참조 검사 결과를 각각 별도 기록합니다. 최신 수치로 과거 결과를 덮거나 모든 수치가 같은 시점이라고 하지 않습니다.

## 남은 절차

후속 요청 전 참조·공개 안전·정확 HEAD+index와 선별 범위를 확인합니다. 같은 저장 reviewer의 실제 원응답 복구·실행 프로필·구독·읽기 전용 조건 확인, 독립 후속 판정과 전달/사후 불변성 감사, 결과 보존·재판정·최종 exact index·선별 커밋은 대기입니다. Controller closeout과 review 전이는 별도 단위이며 M5 전체·ready·공개 완료가 아닙니다.
