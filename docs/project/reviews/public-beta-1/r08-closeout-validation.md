# R08 완료 정리 검증

2026-11-15 기준 수정 commit `162c2900ca16a700fe261ca2d87e5f12c3372628`에서 본문·그림을 유지하고 review metadata, 행렬·계획 인벤토리·출처 후속 상태와 정확한7전이·정본8개 pin을 연결했습니다. 최초 원고 검토와 Fix1 검증·PNG 판독은 변경 없는 범위에서 재사용합니다.

첫 `npm run check`는 248개 중242 pass/6 fail·exit1입니다. R03~R06 테스트의 다음 대기 행 기대값, 현재 인벤토리의 draft52/review7 및 R08 수정 테스트의 draft 기대값이 이전 상태였으므로 R08 전이와 일치하도록 해당 기대값만 갱신했습니다. 원고·역사 해시를 실패에 맞춰 바꾸지 않았습니다. 잘못된 변수명을 지정한 첫 단일 patch는 적용되지 않았고 실제 body 변수를 확인해 수정했습니다.

최종 `npm run check`는 248/248 pass·fail0·skip0, content59·참조270개 Markdown/MDX·SVG14·계획100점/중복0/누락0, build60·Pagefind60·산출물HTML60/일반본문 리터럴Markdown0·exit0입니다. 최초 실패 로그와 최종 로그는 로컬 진행 원장 폴더의 `r08-closeout-check.log`, `r08-closeout-check-final.log`에 각각 보존합니다. sitemap site 미설정 등 기존 빌드 경고는 실제 공개 URL 검증 성공으로 해석하지 않습니다.

보호 Edge headed·localhost에서 1440×1000/390×844 라이트 두 상태의 새 배지를 확인했습니다. HTTP200·H1한개·review배지true·draftfalse·theme light·전역overflowfalse·이미지1개 decode완료·console warning/error/pageerror/외부요청/요청실패0이며 프로세스 exit0입니다. 실제 PNG2에서 제목·검토 중 배지가 읽히고 겹침·수평 잘림이 없음을 직접 확인했습니다. DOM 갱신일은 2026-11-15T03:58:59.000Z이며 하단 날짜의 픽셀 판독으로 주장하지 않습니다. 이미지 decode를 위한 절 이동 뒤 상단으로 돌아온 캡처이므로 목차 강조는 마지막 방문 절을 나타낼 수 있습니다. 다크·전체 본문·키보드·그림 전체 재검증이 아니라 metadata 전이의 영향 범위입니다. 증거는 로컬 `output/playwright/r08-closeout-20261115/observations.json`과 `badge-1440.png`·`badge-390.png`입니다.

같은 저장 reviewer의 완료 검토·사후 감사·최종 공개 안전과 exact HEAD+index는 별도 결과로 연결하며, 이 자동·렌더 결과만으로 M5·ready·RC·공개 승인을 주장하지 않습니다.
