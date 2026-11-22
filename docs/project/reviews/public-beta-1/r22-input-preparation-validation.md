# R22 입력 준비 검증

기준 HEAD 6558918ca709e7f5024ccf45d5cafc4cc76ffdff clean 상태에서 시작했습니다. 영향은 공식 근거·고정 요청/manifest·검사 코드/테스트·기록이며 원고·frontmatter·CSS·제품 동작은 불변입니다. R01~R21 done, R22 pending, 공개59 draft27/review32/ready0을 유지합니다.

[직접 근거](../../../../research/public-beta-review-source-excerpts/r22-deploy-config-2026-11-16.md)는 공식4페이지 명시 절입니다. 8월 PBSG-005와 현재 확인을 구분하며 Node.js v26.12.0 반환 제목·CLI옵션 추출 누락·코드 중복, Astro 두 API, Vercel 새 배포 적용, OWASP 컨테이너 경계를 기록했습니다. 원전 전체·실제 .env/인증/비밀/제품계정/배포는 확인하지 않았습니다.

고정52항목(텍스트16/PNG36)·문맥9이며 manifest SHA12c3dab395e236d23ffb7ed911073c86cf137d69a81714ff507ea35894f70964·결합SHA58c56c624506bca4d5ec56cf09f384ebdf607044bede66a5a81a4ddc1194d280입니다. 최초 후보는 출처 상대링크·광고 이미지 참조10오류로 tests401 중399PASS/2FAIL·exit1이었으며 실패 로그/해시를 로컬 보존했습니다. 링크만 원전 절대 주소로 바꾸고 범위 밖 광고 이미지를 제외한 후 입력을 재고정했습니다. 이어 공개안전 검사 exit1/finding1은 공식 Astro 예시 비밀번호 할당 행이었습니다. 실제 비밀은 아니지만 검토에 불필요한 값이라 생략 사실을 표시하고 입력을 다시 고정했습니다. 이때 manifest SHA3180122b4ba1d1a6737a5d16745fccc2c1213eeea45c40e9519db7ce783bb1be·결합SHA1e4a43c13db8fda1deb689c9c7c0c13dfd67f02dcc79fa12e89fcbd072f1a10f는 이전 후보 역사로 보존합니다. staged diff 검사에서는 추출 코드의 줄끝 공백7개가 남아 이를 제거하고 다시 고정했습니다. 이 직전 후보 manifest f9b980330c71ae4ed97c33d757a243c7a3d10cdbfcd4291f0ee5490f36e2cf93·combined f963046f9a0552cb5d0e0aa7b9e1a39c6ad997a88494bc7efbe47afb0fae0fbb는 역사이며 당시 정적401PASS·공개안전633finding0과 별개로 diffcheck는 실패했습니다. 원고·PNG 재생성은 하지 않았습니다.

새 focused5/5·local52/9 errors0, 보완 후 전체정적401/401 fail0 skip0/content59/refs417/SVG14/plan100·exit0입니다. refs416은 최초 보완, refs417은 이 기록 포함 결과입니다. 공개 출력·설정·의존성 불변이므로 R21 closeout build60/Pagefind60/built60 exit0을 재사용하며 새 빌드로 세지 않습니다.

한 경로×1440/390×light/dark 4상태36PNG입니다. 대표18개 중8개를 실제 읽은 뒤 나머지18개로 확장했습니다. 두 렌더 exit0, HTTP200/H1하나/초안/요청theme정상·overflow/consolewarning/error/pageerror/외부요청실패0, 32crop 묶음의 가로 위치/세로합집합 오류0입니다. 현행 renderer는 최종검사 뒤 complete를 기록하며 실제 코드7성공/실패 경우를 별도로 확인했습니다. 그림 소비는 없으므로 빈 image 목록을 그림 판독으로 세지 않습니다. 모바일 표·코드는 좌우 구간으로 전달하며 긴 자연어 프롬프트 가로 스크롤은 reviewer 판정 대상으로 남깁니다. 키보드/1024/320/200%/보조기술/실제 비밀회전/전체사이트회귀 미실행입니다.

남은 검증은 선별 index·공개안전, fresh저장reviewer의 실제프로필/공식구독/읽기전용·전체원고/36실제PNG 독립 검토, 사후전달·불변성 감사, 최초정상결과의 수정 전 보존과 finding 재판정입니다. 준비PASS를 원고PASS/review/M5/ready/공개승인으로 확대하지 않습니다.
