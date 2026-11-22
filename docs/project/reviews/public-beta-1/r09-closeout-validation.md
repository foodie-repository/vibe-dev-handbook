# R09 완료 정리 검증

2026-11-15 기준 수정 commit `39aea3b3f83e2c0dbca8602f96ea0a145ade891f`에서 원고 본문·그림을 유지하고 review metadata, 행렬·계획 인벤토리·출처와 시각 감사 후속 상태의 정확한9전이·정본9개 pin을 연결했습니다. 최초 원고·PNG18 및 Fix1·기록 후속 결과는 유효한 범위에서 재사용합니다.

첫 `npm run check`는258개 중254 pass/4 fail·skip0·exit1입니다. 공통 행렬 테스트의 다음 대기 행과 완료 행 기대값이 이전 R08 상태였으므로 R09 완료/R10 대기로 해당 기대값만 교정했습니다. 원고·역사 해시를 실패에 맞춰 바꾸지 않았습니다. 패치 생성 출력 잘림과 겹치는 문맥으로 거절된 패치는 적용하지 않았고 작은 패치로 적용했습니다.

최종 `npm run check` 로그는258/258 pass·fail0·skip0, content59·참조283개 Markdown/MDX·SVG14·계획100점/중복0/누락0, build60·Pagefind60·산출물HTML60/일반본문 리터럴Markdown0을 보여 줍니다. 원 프로세스의 종료 코드 응답은 컨텍스트 전환 뒤 회수되지 않았으므로 전체 명령 exit0을 별도로 확정하지 않습니다. 마지막 산출물 검사만 좁게 다시 실행하여 exit0과 HTML60·오류0을 확인했습니다. 전체 테스트·빌드를 다시 실행하지 않았습니다. 최초/최종 로그는 로컬 진행 원장 폴더의 `r09-closeout-check.log`, `r09-closeout-check-final.log`에 보존하며 기존 sitemap site 미설정 경고를 공개 URL 검증 성공으로 해석하지 않습니다.

보호 Edge headed·localhost에서1440×1000/390×844 라이트 두 상태의 배지를 관측했습니다. 두 상태 모두 HTTP200·H1한개·review배지true·draftfalse·theme light·전역overflowfalse·이미지1개 decode완료·console warning/error/pageerror/외부요청/요청실패0입니다. 실제 PNG2를 읽어 제목·검토 중 배지의 판독성과 겹침·수평 잘림 없음을 확인했습니다. DOM 갱신일은2026-11-15T05:09:40.000Z이며 하단 날짜의 픽셀 판독으로 주장하지 않습니다. 원 렌더 프로세스 종료 코드 응답 역시 회수하지 못했고, 완료 로그·관측 JSON·새 PNG와 코드의 실패 조건을 대조한 결과입니다. 새 렌더를 반복하지 않았습니다. 이미지 decode 후 상단으로 돌아온 캡처이므로 목차 강조는 마지막 방문 절을 나타낼 수 있습니다. 다크·전체 본문·키보드·그림 전체 재검증이 아니라 metadata 전이의 영향 범위입니다. 로컬 증거는 `output/playwright/r09-closeout-20261115/observations.json`과 `badge-1440.png`·`badge-390.png`입니다.

같은 저장 reviewer의 완료 검토·사후 감사·최종 공개 안전과 exact HEAD+index는 별도 결과로 연결합니다. 이 자동·렌더 결과만으로 M5·ready·RC·공개 승인을 주장하지 않습니다.
