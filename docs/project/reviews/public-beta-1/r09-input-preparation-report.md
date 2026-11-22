# R09 입력 준비 및 검증

기준 commit은 a5c8d16de3f242a63d11370e14713f0b862708f5입니다. 배포 원고·SVG/Mermaid·공식 근거·인접 원고·용어집·모임 사례·실제 로컬 선언을 고정했습니다. 공식8개 URL의 관련 본문과 RFC8499→9499 대체를 확인했으며 추출 한계·제품 예시 버전 차이는 직접 근거 문서에 구분했습니다. 과거 확인일·원고·그림은 수정하지 않았습니다. R12 사례와 인접 장·제품 매핑은 R09 문맥이며 해당 행 전체 검토의 완료가 아닙니다. source-gap에는 PB046 전용 행이 없어 관련 환경·사례 PBSG005/020만 문맥으로 전달하고 새 확인으로 닫지 않습니다.

고정 manifest36항목(텍스트18+PNG18), 별도 문맥10개, manifest SHA 3720eef573f58dddfb9e79e1207dbbb2b653cb03f903fdcb07616326d28bf67f, 결합 SHA 64b2b4611db3e03591fb3f74ba80a659a574c97601b483b4afbccc9312508218입니다. local 검사 errors0/exit0, focused5/5 fail0skip0, check:static253/253 fail0skip0·content59·refs276/SVG14·plan100/중복0/누락0·exit0입니다. 공개 출력·설정·의존성은 불변이므로 유효한 R08 build60/Pagefind60/built60을 재사용하고 빌드·브라우저 회귀를 반복하지 않았습니다.

PBV05의 원고/SVG/MMD3개는 현재 바이트와 같으며6상태×viewport/그림crop/인접문맥crop=원본PNG18개를 재사용합니다. Controller가 실제18개를 읽었고 source→build→artifact→hosting→user의 실선4개와 DNS→user의 이름 조회 결과 점선1개,6노드, light/dark·desktop/tablet/mobile의 핵심/보조 문구를 확인했습니다. 모바일 문맥 crop의 위아래 일부 잘림은 crop 범위이며 전체 페이지 검토 증거가 아닙니다. 과거 시각 감사의 다른 방향 설명도 reviewer 판단 대상으로 전달합니다. 실제 fresh reviewer는18개 모두 localImage/detail original 입력을 읽고 관측·한계를 기록해야 합니다.

준비 중 ADR 경로를 잘못 추정한 초안은 파일 생성 전에 실제 docs/adr/0001-use-starlight-and-github-pages.md로 교정했습니다. 첫 생성 출력은 길이 제한으로 잘려 적용하지 않았고 완전한 출력만 적용했습니다. 기존 파일·증거를 덮어쓰지 않았습니다. 준비 코드 독립 검토·실제 원고 판정·응답 후 감사는 미완료이며 입력 고정을 R09 PASS·review·M5·ready·공개 승인으로 계산하지 않습니다.

첫 staged diff 검사에서 근거 파일 끝의 추가 빈 줄1개를 발견했습니다. 실제 reviewer 실행 전에 이 빈 줄만 제거하고 영향받은 manifest·검사기 pin·이 보고서의 SHA를 재고정했습니다. 원고·이미지는 불변이며 집중5/5 fail0skip0·local errors0/exit0으로 재확인했고 전체253개와 빌드는 반복하지 않았습니다.
