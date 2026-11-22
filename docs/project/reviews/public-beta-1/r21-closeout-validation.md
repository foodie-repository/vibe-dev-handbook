# R21 controller closeout 검증

기준 HEAD e7dd8d5ca9a793a0d4a40e3130b394aa9daf6215의 clean 상태에서 시작했습니다. 영향은 두 원고 frontmatter·행렬·지도·계획·요약·출처·재판정·역사 검사 연결입니다. 두 원고의 본문과 CSS는 불변이며 별도 body SHA 대조로 확인했습니다. 후보는 R01~R21done·공개59개draft27/review32/ready0이고 M5전체·ready·공개 완료가 아닙니다.

정확9전이와8증거 pin을 scripts/r21-closeout.mjs에 연결했습니다. 최초 NEEDS CHANGES·Fix1 PASS 및 R08 국소 해소 역사와 현재 판정을 구분합니다. 원고 후속 검토를 controller 완료 검토로 대체하지 않습니다.

새 영향13/13·전체정적396/396pass/fail0/skip0·content59/refs412/SVG14/plan100·누락/중복0·build60/Pagefind60/built60은 exit0입니다. refs412는 이 검증 보고서 추가 전 값입니다. 생성기 첫 시도는 계획의 잘못된 카테고리 M3-WORKFLOW-QUALITY를 찾지 못해 exit1·패치 미적용이었고, 실제 M3-GIT-OPS로 정정 후 적용했습니다. 원고·사이트 실패로 세지 않습니다. R08의 당시 인접 draft 검사는 정확한 R21 전이를 되돌려 역사 바이트를 확인하며 검사를 삭제하지 않았습니다. 현행 행 경계와 문서 상태 수를 바꾸는 테스트 외 무관한 코드 정리는 하지 않았습니다.

새 메타데이터 렌더는 두 경로×1440/390 라이트4상태·배지/날짜8PNG입니다. 대표 브랜치4개 실제 판독 후 복구 장4개로 확장했고 controller가8개 모두 읽었습니다. 두 실행 exit0·HTTP200/H1하나/검토중 배지/light/전역overflow/errors 정상입니다. time datetime은2026-11-15T18:32:45.000Z이며 e7dd8d5의2026-11-16T03:32:45+09:00와 같습니다. 표시 날짜11월15일은 UTC 기준이며 아직 생성하지 않은 closeout 커밋 날짜로 고치지 않습니다.

최초46PNG와 Fix1의84PNG·두18/18·finding 해소·출처는 본문 불변 범위에서 재사용합니다. 이번8PNG를 새 전체 원고·다크 테마·키보드·보조 기술 검토로 세지 않습니다. 소비 그림이 없는 두 원고의 빈 imageLoaded 결과를 그림 판독 성공으로 표현하지 않습니다. closeout renderer도 최종 상태 검사 후에만 complete를 기록합니다. 이전 PM01 실패 바이트는 역사로 보존했습니다.

남은 확인은 최종 후보 공개 안전·정확 HEAD+index, 같은 저장 reviewer의 history2·최초/Fix1 응답 SHA 복구 후 독립 완료 검토, 응답 후 전달/불변성 감사·정본 보존·최종 선별 커밋입니다. 후보와 실제 완료를 구분하며 외부 쓰기는 없습니다.
