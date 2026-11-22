# R08 입력 준비 및 검증

기준 commit은 `76a1e371ff1134a5de176b76c6912424fecd2798`입니다. R08 Git과 GitHub의 원고·SVG·Mermaid·공식 근거·인접 장·용어집·모임 사례 원문을 고정했습니다. 모임 사례의 전체 검토 소유 행은 R12이며 여기서는 W-03/W-04와 안전 경계 문맥만 R08 판단에 적용합니다. 공식 자료12개 URL의 관련 본문을 확인했고 현재 status의 표시 설정과 pull의 통합 방식·버전 차이를 검토 질문으로 남겼습니다. 과거 날짜를 현재 확인으로 소급 갱신하지 않았습니다.

고정 manifest는31항목(텍스트13+PNG18), 별도 문맥9개입니다. manifest SHA는 `ae350f445b25eae14867b3b97bff8dbbd47841344fe378089d1bc32b88e9ebab`, 결합 SHA는 `8fd0387be743ef54b9b6c1ad24ae4a407347bda50223a5b14cc9948c3fdb4151`입니다. `r08-review-inputs.mjs --local-evidence`는 errors0/exit0이며 고정 원문·발췌·PNG 헤더/해시·과거 렌더 manifest를 검사했습니다. 집중5/5·fail0skip0, `npm run check:static`은242/242·fail0skip0·content59·refs264/SVG14·plan100/중복0/누락0·exit0입니다. 공개 원고·그림·사이트 기능은 불변이므로 유효한 R07 build60·산출물 검사를 재사용하고 새 전체 빌드를 반복하지 않았습니다.

원고·SVG·Mermaid 세 파일은 과거 Task20 PBV-07 렌더 입력과 바이트가 같으며6상태×viewport/그림crop/문맥crop의 실제 원본PNG18개를 재사용합니다. controller는18개를 직접 읽었으며 로컬3노드·원격1노드, add/commit/push의 방향, 로컬/원격 경계, PR·CI와 하단 주의 문구가 일관됨을 확인했습니다. 모바일 문맥crop의 위아래 끝에는 인접 제목이 잘리며 이는 crop 한계이지 전체 페이지 판독 증거가 아닙니다. 현재 화면을 새로 캡처하거나 전체 페이지18개를 검토했다고 주장하지 않습니다. fresh reviewer에는 실제18이미지를 localImage/detail:original로 전달하고 이미지별 관측과 한계를 요구합니다.

준비 중 사례 경로·소유 행을 잘못 추정한 생성기 초안은 입력 생성 전에 실제 행렬의 R12/first-full-stack-project로 교정했습니다. 첫 출력은 도구 길이 제한으로 잘려 적용하지 않았고 완전한 출력만 적용했습니다. 이 실패는 원고·기존 증거를 변경하지 않았습니다. 준비 검사기와 테스트의 독립 검토 및 실제 원고 판정·응답 후 감사는 아직 미완료입니다. 준비 완료만으로 R08 PASS·review·M5·ready·공개 승인으로 처리하지 않습니다.
