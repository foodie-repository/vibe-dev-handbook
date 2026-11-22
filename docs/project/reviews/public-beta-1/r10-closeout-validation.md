# R10 완료 전이 검증

완료 검토 후: 같은 저장 reviewer의 `r10-closeout-review.md`는 완료 전이와 코드 각각 PASS C0/I0/M0, 원고18/18 계승을 확인했습니다. `r10-closeout-adjudication.md`에 새 finding0과 한계를 연결했습니다. 응답 후 전달·프로필·입력/PNG 불변성 감사 errors0/exit0, 실행 프로세스 exit0이며 결과 기록만 추가했습니다. 아래의 검토 대기 문장은 입력 시점 기록이고 유효한268개 검사·빌드·6PNG를 다시 실행하지 않았습니다.

기준 HEAD는 a98218c19f8074f5f19524b90f4bfb4582143ff7입니다. 본문·SVG/Mermaid는 수정 기준과 동일하며, 원고 frontmatter와 행렬·콘텐츠 지도·계획·프로젝트 요약·현재 출처/재판정 표현의8개 정확 전이 및 정본8개 pin을 확인합니다. 현재파일 검사는 PROJECT_CONTEXT/ROADMAP을 제외한6개와 정본8개를 보호하고, 전이 회귀에서는8개 모두를 검사합니다. 기존 R01~R09 증거의 바이트는 정확한 R10 전이·Fix1 역치환으로 복원하고 그 밖의 변조·롤백·누락은 거절합니다.

첫 `npm run check`는268개 중265성공/3실패·exit1이었습니다. R02 테스트용 복사본이 새 R10 완료 문서를 복사하지 않아 발생했고, 기존 fixture의 명시 문서 목록에 한 경로만 추가했습니다. 최종 `npm run check`는268/268·실패0·건너뜀0·공개59·참조295/SVG14·계획100·build60/Pagefind60/built60/literal0·exit0입니다. 로그는 로컬 원장의 `r10-closeout-check.log`와 `r10-closeout-check-final.log`에 각각 보존합니다. 기존 sitemap/site 경고를 공개 URL 성공으로 해석하지 않습니다.

실제 localhost preview에서 보호된 headed Edge로 운영·인접 보안 원고의1440×1000/390×844 light4상태를 확인하고 운영 배지2개·두 원고 하단 날짜4개의 PNG6개를 직접 읽었습니다. `output/playwright/r10-closeout-20261115/observations.json`과 PNG를 보존합니다. 모두 HTTP200/H1 1개/이미지 decode/전역 overflow없음/오류0이고 운영은 검토 중, 인접 원고는 검토용 초안입니다. 첫 렌더 스크립트는 인접 배지의 예상 문구를 잘못 `초안`으로 지정해 exit1이었으나 실제 출력은 기존 PageTitle.astro의 `검토용 초안`과 일치합니다. 캡처나 사이트를 다시 만들지 않고 저장된 관측·PNG 헤더를 올바른 문구로 재판정한 `reassessment.json`은 errors0/exit0입니다. 원 렌더 exit1을 성공으로 바꾸지 않습니다.

astro.config.mjs의 lastUpdated true, 설치된 Starlight의 utils/routing/data.ts 및 utils/git.ts에서 frontmatter 날짜가 없을 때 해당 원고의 최신 Git commit 시간을 사용함을 읽었습니다. LastUpdated.astro는 이를 UTC 기준 날짜로 표시합니다. 수정 commit의2026-11-15T06:07:26Z와 관측 time datetime이 두 원고에서 일치하며, 실제6PNG의 배지·해당 하단에서2026.11.15를 읽었습니다. 따라서 Fix1 미커밋 시점의8월29일 표시는 역사로 남기고 현재 날짜는 수정 commit에서 생성됐음을 확인합니다. 날짜를 강제로 덮어쓰거나 특정 출처의 확인일을 새 날짜로 바꾸지 않았습니다.

동일 reviewer의 전체 원고·원본18PNG·Fix1 실제44PNG 검토는 재사용합니다. 이번6PNG는 배지와 날짜만 확인하는 범위이고 전체 사이트·다크/태블릿 재회귀·키보드·실제 운영·외부 출처 재조사를 수행했다는 뜻은 아닙니다. 완료 검토에서는 원래 NEEDS CHANGES·후속6건 RESOLVED·R01~R10 done/draft49/review10/ready0와 R20 전체/R11~R26/M5/RC/공개 미완료 경계를 확인해야 합니다.
