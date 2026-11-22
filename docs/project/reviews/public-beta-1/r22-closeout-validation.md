# R22 controller closeout 검증

기준 HEADdd7bf74a00ddd7180bce347e81f771201dbe0571 clean에서 시작했습니다. 영향은 한 원고의 contentStatus/reviewEvidence와 행렬·계획·상태·출처/재판정 연결, 정확8전이/8증거pin·역사역변환·현재완료행 검사입니다. 본문·표·프롬프트·CSS·그림은 불변이며 본문해시 대조를 통과했습니다. 후보는 R01~R22done, 공개59draft26/review33/ready0, R23~R26pending/not-fixed입니다.

생성기에서 남은행block_reason 쌍이 동일한 값을 가리키는 것을 대조 중 발견해 R23으로 바로잡고 정확해시를 갱신했습니다. 첫 focused13 중11pass2fail은 검사기의 구 row default 기대값이 원인이었습니다. 기대값을 고친 뒤 focused6 중5pass1fail과 전체406 중405pass1fail은 새 테스트가 R22 대신 R21행을 변조하는 오류였고 빌드는 미실행입니다. 테스트 인덱스만 바로잡아 focused3/3과 최종406/406fail0skip0/content59/refs422/SVG14/plan100/build60/Pagefind60/built60exit0을 확인했습니다. 실패 로그는 보존하며 refs422는 이 검증 기록 추가 전 수치입니다.

새 metadata 렌더는 한 경로 light 1440/390 두 상태4PNG입니다. 대표desktop2개를 실제 읽고 mobile2개로 확장해4개 모두 판독했습니다. 두렌더exit0·HTTP200/H1하나/검토중배지/light/overflow없음/consolewarning/error/pageerror/외부요청실패0·datetime2026-11-15T19:30:51.000Z를 확인했습니다. 이는 dd7bf74의 KST2026-11-16T04:30:51+09:00와 같은 시각이며 미래closeout커밋이 아닙니다. 소비 그림이 없어 empty imageLoadedtrue를 그림 판독 증거로 세지 않습니다. 관측 요약의 괄호 오타exit1은 읽기 명령만 수정해exit0이며 렌더를 반복하지 않았습니다.

재사용한 증거는 최초36PNG·Fix164PNG의 전체/영향판독, 공식4페이지의 명시범위·실패경계, F01~F09해소·18/18·치명0입니다. 새4PNG는 metadata 배지·날짜만 확인하며 dark/원고전체를 새로 검토한 것으로 세지 않습니다. 키보드/1024/320/200%/보조기술·전체사이트회귀·실제.env/계정/회전/원격접근은 추가하지 않았습니다.

남은 단계는 선별index·공개안전·같은저장reviewer의최초/Fix1SHA 실제복구·독립controller완료검토·사후감사·정본·최종index·로컬커밋입니다. 후보 상태를 실제완료로 세지 않으며 M5전체/ready/RC/소유자승인/공개·push·배포는 미완료입니다.
