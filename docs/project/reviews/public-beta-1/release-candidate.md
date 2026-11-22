# Task26 로컬 릴리스 후보 게이트 준비

## 로컬 후보의 종료 조건

2026-11-23 증거 보고서의 독립 검토는 `PASS`(Critical 0, Important 0, Minor 0)였고 후보 근거를 `0d3cc31`에 보존했다. 아래의 「독립 검토 전」은 검토 대상이었던 당시 상태다. 콘텐츠·사이트 코드·workflow는 이 완료 정리에서 변경하지 않았다. 최종 보고서 커밋 자신을 가리키는 해시는 여기에 쓰지 않는다. 완료 커밋의 실제 HEAD·tree·경로 목록 해시와 사후 검증은 로컬 진행 원장의 M7 인계 기록을 기준으로 한다. M7 작업은 별도 승인이 있어야 한다.

## 2026-11-23 로컬 후보 검증 — 독립 검토 전

검사 대상은 소유자가 승인한 원고를 로컬에서 `ready`로 전환한 뒤의 커밋 `71b71c598a14e94508eb59c397261be1aa05594a`다. 이 커밋은 **검사한 콘텐츠의 기준점**이며, 이 보고서를 포함한 최종 RC나 공개 승인이 아니다. 아래 8월 기록은 당시 판정 그대로 보존한다.

| 확인 항목 | 결과와 적용 범위 |
| --- | --- |
| 원고 | [로컬 상태 전이 검증](ready-promotion-qa.md)의 승인본 대조를 재사용했다. 원고 59개 모두 `ready`이고 `review`는 0개이며, 승인본 대비 본문 변경은 없다. |
| Git 스냅샷 | 기준 커밋의 tree는 `a3e28ee8157456d0648584250fd4ba3c6ec36f5d`다. NUL로 구분한 경로 목록의 SHA-256은 `730c1bfa12a27419c1058cc08f614451cf4090044bd2f456ea6aae22900ed56e`다. 추적 파일 717개에 학습 SVG 14개, Mermaid 원본 14개, 테스트 파일 87개가 포함된다. 개발 이력, 다른 worktree, 로컬 진행 원장, 검증 화면과 빌드 출력은 이 tree에 들어 있지 않다. |
| 자동 검사 | Node 22.16.0·npm 10.9.2에서 기본·루트·프로젝트 하위 경로의 전체 검사가 각각 종료 코드 0이었다. 각 실행에서 테스트 439개가 통과했고 실패·제외는 없었다. 참조 검사 대상은 문서 466개와 학습 SVG 14개였다. 공개 안전 검사에서 추적 파일 717개를 검사해 발견 0건이었고, 생성물에 실린 고지 파일은 원본과 바이트가 같았다. |
| 빌드와 검색 색인 | 루트와 프로젝트 하위 경로 빌드에는 각각 HTML 60개가 있다. Pagefind의 한국어 색인 59개 URL을 두 빌드 각각에서 커밋의 원고 경로와 대조했다. 누락과 추가는 모두 0개다. HTML과 색인의 수가 하나 다른 이유는 검색 대상이 아닌 `404.html`이다. |
| 실제 로컬 브라우저 | 두 주소 구조에서 각각 1440×1000 밝은 테마와 390×844 어두운 테마를 확인했다. 대표 원고·배지·그림·favicon을 읽었고, `SDD` 검색 결과에서 Enter로 「PRD·두 종류의 SDD·TDD」에 도착했다(HTTP 200). 존재하지 않는 중첩 경로는 HTTP 404였고 홈 링크로 복귀했다(200). 네 상태의 최종 관측에서 예상된 404 이외 런타임·콘솔·통신 오류와 전역 가로 넘침은 없었다. 이는 localhost 결과이지 GitHub Pages 결과가 아니다. |

직접 의존성 Astro 7.1.6·Starlight 0.41.4는 잠금 파일과 일치했다. `npm ls --depth=0`은 종료 코드 0과 함께 보조 패키지 7개를 `extraneous`로 표시했다. 일곱 항목의 설치 버전과 설치 메타데이터의 무결성 값은 잠금 파일의 선택 의존성 항목과 일치했다. 새 runner에서의 설치를 검증한 것은 아니다. Actions 정의와 [공식 Pages workflow 안내](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)를 대조했으며, workflow 권한에 대해서는 변경되지 않은 Step 1의 독립 검토 결과를 재사용했다.

남은 게이트는 이번 후보에 대한 독립 검토, 필요한 수정과 재검토, 보고서 커밋 후 **최종** HEAD와 tree를 대상으로 하는 자동 검사다. 이 절은 M6 완료 또는 M7 승인이 아니다. 공개용 부모 없는 root commit은 만들지 않았다. M7 실행 직전에는 [공개 안전 감사](release-safety-audit.md)의 기술 고지와 배포 범위를 다시 확인해야 한다. 원격 CI, 실제 배포, 공개 URL은 미검증이다.

## 2026-08-30 Step 1 기록

확인일: 2026-08-30 · 상태: Step1 Fix Round 1 `implementation verified / Claude review pending`, RC 미생성

브랜치 `codex/public-beta-completion`, 기준 HEAD `b4d0c56f80efbe9aee3a405a1be4ff10ce21ca4f`에서 이어갑니다. 여러 독립 단위의 변경이 작업 트리에 남아 있으므로 이 HEAD나 현재 작업 파일을 canonical RC tree로 지정하지 않았습니다. Task 26 Step1은 두 workflow와 이 보고서·공식 출처·상태 기록의 정확한 hunk만 별도 index로 고정해 검토합니다.

CI와 deploy의 설치 단계는 lockfile 기반 npm ci만 실행하도록 맞췄으며 npm run check 뒤 npm run validate:release를 연결했습니다. release 검사가 성공해야 artifact 업로드로 이어집니다. 기존 main push/수동 deploy 트리거, github-pages environment, Actions 버전은 유지했습니다. CI와 deploy workflow 기본 권한은 `contents: read`이고, 실제 deploy job만 `contents: read`·`pages: write`·`id-token: write`를 갖습니다. 새 원격 실행·권한 확대·배포는 하지 않았습니다.

실제 설정을 파싱하는 focused 테스트는 과거 `validate:release` 부재 RED(exit1)와 구현 뒤 GREEN을 보존합니다. 현재 기준에서는 Node.js22.16.0/npm10.9.2로 두 workflow 순서·권한·트리거·기존 `package-manager-cache: false`·build 의존관계·업로드 전 검사와 user-site/project-site 가상 환경값 분기2개를 fresh GREEN(exit0)으로 다시 확인했습니다. 최초 독립 Codex 검토는 workflow 전역의 Pages/OIDC write 권한이 build job에도 상속되는 I-01을 `NEEDS CHANGES` C0/I1/M0으로 판정했습니다. job별 유효 권한 단언을 먼저 추가해 RED(exit1)를 재현하고, workflow 기본은 `contents: read`만 유지하면서 deploy job에만 세 권한을 둔 뒤 GREEN(exit0)으로 전환했습니다. 같은 리뷰어의 Fix Round 1 재검토는 I-01을 `RESOLVED`하고 `PASS` C0/I0/M0·safe-to-commit Yes로 판정했습니다. checkout·setup-node·upload-pages-artifact·deploy-pages와 Pages workflow 계약은 2026-08-30 공식 자료를 새로 열어 [출처 지도](../../../../research/source-map.md)에 갱신했습니다. 실제 repository 이름은 아직 승인받지 않았으므로 fixture 성공을 실제 공개 대상의 성공으로 확대하지 않습니다.

과거 Node22.16.0/npm10.9.2 로컬 전체 check의108테스트·59문서·171참조문서+14SVG·계획100점/59개/중복0/누락0·HTML60·Pagefind60·본문리터럴0과 release scanner tracked206개/finding0은 당시 구현 회귀 증거로만 보존합니다. 현재 exact `HEAD + index` 격리 스냅샷의 fresh 결과는 focused workflow 계약2개·base-path fixture2개, 정적110/110·콘텐츠59·참조160+SVG14·계획100/59/0/0, 공개 안전 tracked/scanned223·forbidden0·binary0·finding0, cached diff-check 모두 exit0입니다. 별도 현재 작업 트리 호환성 검사는 정적116/116·콘텐츠59·참조178+SVG14·계획100/59/0/0과 공개 안전 tracked/scanned222·finding0으로 exit0이지만 다른 미커밋 단위를 포함하므로 exact index 판정을 대신하지 않습니다. 화면·런타임 콘텐츠는 바뀌지 않아 브라우저 회귀는 반복하지 않았고, clean canonical RC 전체 게이트도 아직 아닙니다.

정확한 lockfile로 복원된 현재 로컬 환경에서 Node22.16.0/npm10.9.2의 `npm ls --depth=0 --json`은 Astro7.1.6·Starlight0.41.4 직접 의존성을 확인하고 exit0이지만 플랫폼 보조 패키지7개를 extraneous로 보고합니다. 이를 clean canonical RC의 의존성 일치 PASS로 확대하지 않으며, 원격 runner나 새 설치로 우회하지 않고 Task26 Step2에서 정확한 lockfile·플랫폼 설치 계약과 함께 판정합니다.

아직 수행하지 않은 항목: clean RC·ready59·유효 M5/소유자 승인, 최종 root/subpath RC 브라우저 행렬, canonical commit/tree·tracked목록 고정, RC 커밋 및 후속 검증, 공개 snapshot root commit, 원격·Pages·공개 URL·태그/Release. Task21의 로컬 root/handbook 경로 증거를 최종 RC 결과로 소급 사용하지 않습니다. 모든 외부 쓰기는 M7 실행 직전 별도 승인 전까지 금지합니다.
