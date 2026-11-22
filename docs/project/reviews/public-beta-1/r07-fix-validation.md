# R07 Fix1 검증 — 후속 검토 입력

후속 결과: 같은 저장 reviewer가 [PASS C0/I0/M0·18/18](r07-testing-codex-rereview.md), 코드 C0/I0/M0, 정확한 후보20경로의 checkpoint 적합성을 확인했습니다. 응답 후 감사는 errors0/exit0이며 최초 이력1과 원 응답의 실제 복구, 19파일52청크/actual PNG10, 도구 미사용과 전후 불변성을 확인했습니다. 아래는 전달 당시 검증 기록입니다. 이번 결과 정본과 판정 연결만 추가하며 생산 입력·검사 코드는 불변이므로234개 검사와 build60·렌더는 반복하지 않습니다. 추가 결과 기록을 포함한 최종 참조·공개 안전·exact index 검사는 진행 원장에 남깁니다. draft·R07 controller closeout 미완료는 유지합니다.

기준 HEAD `b1be93934f042962042a9c5e766e57f3d3039627`, 브랜치 `codex/public-beta-completion`에서 R07 준비·최초 결과·지적5건과 실제 렌더에서 발견한 V01만 다룹니다. [재판정](r07-testing-adjudication.md)은 아직 해소 판정 전 후보입니다. 최초 NEEDS CHANGES C0/I2/M3·15/18과 준비 C0/I0/M0·checkpoint 보류를 보존합니다.

## 자동 검사

- 최초 입력 준비: `npm run check:static`, exit0·231/231·fail0·skip0. R07 준비 테스트5개 포함·전부 통과, local9입력/10문맥 errors0. 당시 빌드는 출력 불변으로 재사용했습니다.
- 최초 Fix 집중 검사: 15개 중14통과·1실패. 새 금지 표현 회귀가 미확인 경계 문장까지 오탐해 과거의 단정 표현만 잡도록 교정했습니다.
- 첫 전체 Fix 검사: 234개 중233통과·1실패, exit1. R01의 임의 appendix 테스트가 R07에서 앞에 추가한 고정 출처 보충을 복원하기 전에 줄 위치를 검사했습니다. 해당 테스트에서 정확한 R07 역치환을 먼저 적용했으며 현재 변조·rollback 거부 테스트는 유지했습니다.
- 교정 후 `npm run check`: exit0·234/234·fail0·skip0, build60/Pagefind60/built60. 이후 실제 모바일 프롬프트 내부 스크롤을 확인해 단일 fence에 wrap을 추가했습니다.
- 최종 wrap 반영 후 `npm run check`: exit0·234/234·fail0·skip0, content59·계획100/중복0/누락0, build60/Pagefind60/built60·일반 본문 리터럴 Markdown0·고지 바이트 동일. 이 실행의 R07 준비5+수정3 테스트는 8/8 통과입니다. 빌드의 site 미설정 sitemap 경고는 로컬 비배포 설정에 따른 기존 경계이며 배포 성공으로 계산하지 않습니다.
- `node scripts/r07-review-inputs.mjs`와 `git diff --check`: exit0·errors0. 정확한 5파일 전후/역치환·현재 drift/rollback 거부, 기존 R06 연결, 사례 직접 SHA를 검사합니다. 최종 입력/출력 SHA와 staged 범위는 로컬 전달 manifest 및 exact index 감사에 고정합니다.

## 실제 출력

보호 Edge와 기존 localhost preview에서 390×844 light 및1440×844 dark로 변경 영역을 확인했습니다. 첫 2상태 검사는 모바일 프롬프트 scrollWidth611/clientWidth356 때문에 exit1·실패1이며 숨기지 않습니다. ISO·대역·보고 항목·체크리스트·출처의 나머지 영역은 가로 넘침과 console/pageerror/request 오류가 없었고 실제 PNG를 읽었습니다. 프롬프트만 설치된 렌더러의 기존 wrap으로 수정했습니다. 렌더 실행기 구문 오류1은 브라우저 실행 전 교정했고 이미지 성공으로 계산하지 않습니다.

최종 좁은 재검증은 exit0·2상태/실패0입니다. 모바일 프롬프트356/356·데스크톱786/786, 내부/전역 가로 넘침0, HTTP200·단일 H1·draft·지정 theme 일치, console warning/error·pageerror·requestfailed·외부 요청0입니다. 복사 버튼 data-code가 Markdown 원문과 정확히 같은지 두 폭에서 검사했고 불일치 시 실패하도록 했습니다. API를 통한 클립보드 내용 변경이나 실제 사용자 키보드 테스트는 하지 않았습니다.

controller는 최초 정상 영역의 PNG6개와 최종 prompt crop2개·smoke·coverage 화면2개를 직접 판독했습니다. 후속 reviewer에게 이 10개를 actual localImage/original로 전달하며 최초 실패한 prompt 이미지는 성공 증거에서 제외합니다. 관측 JSON에는 첫 실패와 최종 성공이 별도로 있습니다. 이는 변경 영역의 출력 확인이며 전체 페이지·전체 사이트·6개 viewport/theme 조합 또는 기존 Task21 키보드 검증을 새로 수행한 결과가 아닙니다.

## 검토·커밋 경계

원문·고정 입력·최초 결과는 보존하며 변경된 한 원고·생성 지도·근거 보충3·검사 연결/회귀·관련 결과 기록만 후보로 선별합니다. 실행 증거와 exact staged diff를 같은 저장 reviewer에게 전달해 I01/I02/M01~03/V01 및 준비 체크포인트 보류 해소를 각각 확인받습니다. 독립 판정과 응답 후 감사 전에는 완료·커밋·review 전이를 주장하지 않습니다. 다른 행·의존성·인증·전역 설정·외부 쓰기·과금 경로는 변경하지 않았습니다.
