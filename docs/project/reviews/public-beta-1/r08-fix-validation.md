# R08 Fix1 영향 범위 검증

기준 commit `e25a9d1fc699e1bc68bcf24050e83ee5a835bdba`에서 Git 원고와 인접 R21 두 장의 지적9건만 좁게 수정했습니다. SVG·Mermaid·최초 request/manifest·원본PNG18은 불변입니다. CONTENT_MAP 문자 수와 source-map의 현재 적용 보충을 함께 반영하고, 정확5개 전이의 before/after 해시와 유일한 역치환으로 최초 고정 입력을 복원합니다. 현재 바이트·rollback·drift는 별도 검사하며 R07 완료 입력도 정확 R08 전이를 복원한 뒤 역사 검사를 합니다. 이전 검토를 소급 PASS로 바꾸지 않습니다.

집중 검사 첫11개 중10개 성공·1개 실패는 R07의 역사 after 해시를 새 CONTENT_MAP에 직접 비교한 fixture 때문이었습니다. R08의 정확한 전이를 복원한 뒤 비교하도록 교정했습니다. 이후 `npm run check`는245/245·fail0·skip0·content59·refs267/SVG14·plan100/중복0/누락0·build60/Pagefind60/built60·exit0입니다. sitemap site 미설정 경고는 기존 로컬 비배포 경계로 남습니다. 최종 산출물 HTML60의 리터럴 Markdown0·고지 파일 바이트 일치를 확인했습니다.

가상 Git 저장소 테스트는 실제 프로젝트·원격·전역 설정을 변경하지 않습니다. 명령별 `-c`로 untracked 표시를 숨긴 상태에서도 명시적 전체 옵션은 새 파일을 열거함, 첫 커밋 전 diff HEAD는 실패하지만 staged 비교는 가능함, A→B 스테이징→작업 파일 A 복귀 시 diff HEAD는 비어도 staged diff는 남음을 확인했습니다. 작업 트리의 보조 설정은 true이지만 index에는 false인 반례로 작업 트리 검사 통과를 후보 증거로 전용할 수 없음을 확인했습니다. 고유 임시 폴더의 합성 파일을 사용했고 사용자 파일·stash·원격은 건드리지 않았습니다.

보호 Edge headed localhost에서390×844의 변경 문맥10곳을 light/dark로 나눠 확인했습니다. 각 관측은 HTTP200·H1 1·draft true·요청/실제 theme 일치·전역 overflow false·console warning/error/pageerror/request failure/external0·종료코드0입니다. `output/playwright/r08-fix-20261115/observations.json`에 경로·제목·crop 범위를 기록했고 PNG10개를 직접 읽었습니다. 두 테마를 모든 절의 조합으로 전수검증한 것은 아닙니다. 긴 crop은390×844 레이아웃에서 해당 절을 세로로 캡처한 것이며 전체 페이지나 더 큰 viewport 검증으로 계산하지 않습니다. 일부 crop 경계의 다음 제목 일부와 표의 오른쪽은 화면 밖입니다.

변경된 diff 표는 내부 가로 스크롤을 따로 확인했습니다. 표 client358/scroll514, scrollLeft0→156, 전역 overflow false·오류0·exit0이며 `table-observations.json`과 `diff-table-right.png`를 보존했습니다. 추가 PNG도 실제 판독해 오른쪽 열의 상쇄된 staged/unstaged 한계를 확인했습니다. 이는 프로그램 방식의 내부 스크롤 확인으로 키보드·스크린리더 전수 검증이 아닙니다. 새 실제PNG 총11개를 같은 저장 reviewer에 전달하고, 바뀌지 않은 원본PNG18의 그림 판독만 재사용합니다. 이전8월 footer는 당시 commit 표시로 관측하며 현재 날짜 확인 증거로 바꾸지 않습니다.

새 자동 로그는 진행 원장 폴더의 `r08-fix-focused.log`와 `r08-fix-check.log`입니다. 최종 참조·공개 안전·exact HEAD+index 및 같은 저장 세션의 후속 판정·사후 감사는 별도 기록합니다. R08 원고 PASS·review·R21 전체·M5·ready·공개 승인으로 아직 승격하지 않습니다.
