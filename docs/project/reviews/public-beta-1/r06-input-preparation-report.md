# R06 입력 준비와 최초 독립 검토 — 2026-11-15

기준 commit은 `316e84760e5c3253538960de79d71a0a9a063298`입니다. [최초 실제 원고 검토](r06-prd-sdd-tdd-codex-review.md)는 BLOCKED·내용상 NEEDS CHANGES C0/I1/M3·16/18·치명0이며, 별도 입력 보완 R06-E01이 있습니다. 준비 검사기·테스트의 독립 코드 검토는 PASS C0/I0/M0·코드 관점 safe-to-checkpoint 적합입니다. 이 체크포인트는 준비와 실패를 포함한 최초 결과의 보존이며 원고 완료·review/ready·M5·공개 승인이 아닙니다.

[요청서](r06-prd-sdd-tdd-request.md)와 [매니페스트](r06-prd-sdd-tdd-input-manifest.json)는 입력32개와 명시 문맥11개를 고정합니다. manifest SHA-256은 `1c330fd6930f170027c7295b42c862137652bcc588d50464c9f993038e5262a1`, 결합 SHA-256은 `a03038d69a14c6d74e9ad07332e51312eff6e4f5675b1130db4f719fe32b3fda`입니다. 공식 7개 출처의 관련 본문을 새로 확인했고 과거 source-map 날짜는 보존했습니다. 대상 원고·SVG·Mermaid의 과거 캡처 입력 SHA 일치를 근거로 6상태의 viewport·그림·인접 문맥 PNG18개를 재사용했으며 전체 페이지 이미지나 현재 CSS의 새 검증으로 계산하지 않습니다.

fresh 저장 reviewer의 실제 gpt-6-astra/high·openai·history0·ephemeral false·readOnly/network false·approval never와 MCP15개 비활성화를 확인했습니다. 기존 ChatGPT 구독과 추가 credits false 경로만 사용했으며 전역 설정·인증은 바꾸지 않았습니다. 원문16파일/28청크와 localImage/detail original PNG18개를 전달했고 reviewer는 전부 읽고 각 이미지별 관측·한계를 기록했습니다. 응답 후 실제 payload·텍스트 복원·이미지 대응·프로필·도구 미사용·전후 불변성 감사는 errors0/exit0입니다. payload SHA는 `491bc36d0a656cfd649c4d65edc976d8619a29d3a268beca4bbc8dcaa4e025db`, 원 응답 SHA는 `1b98be81d122a2c6f06e5abbd2e54c0dbbad14bb650cdc1fff4d7e777833618e`이며 정본에 종결 개행만 추가했습니다. 실제 세션 식별자와 원시 로그는 로컬 증거에 보존합니다.

필수 검증은 focused5/5·실패0, local 입력32/문맥11 errors0, 최종 `npm run check:static` 219/219·fail0·skip0·exit0, 콘텐츠59·참조241/SVG14·계획100/중복0/누락0입니다. 첫 static은 인용 JSON의 내부 코드 울타리 때문에 참조 오류2개와 테스트 실패2개였으며 첫 수정 뒤 참조 오류1개가 남았습니다. JSON 파싱 후 원문 의미가 같음을 확인하고 내부 울타리만 이스케이프한 뒤 통과했습니다. 초안 생성 구문 오류, 패치 출력 초과와 PATH 실패는 파일 반영 전 실패로 보존하며 성공에 포함하지 않습니다. 출력 불변이므로 기존 build60/Pagefind60/built60과 유효 렌더만 재사용했고 새 빌드로 기록하지 않습니다. 결과 저장 후 참조·공개 안전·exact HEAD+index·커밋 결과는 진행 원장에 기록합니다.

다음은 R06-E01의 사례 요구·수용 기준·테스트 직접 근거 보충과 I01의 임시 Green/최종 완료 경계, M01의 역사적 네 연결/현재 도구 흐름 구분, M02·M03의 분기·수렴 및 모바일 자연어 표현을 한 영향 범위로 처리하는 것입니다. 원고·방법론 지도 이외 무관한 개선과 그림 재제작은 하지 않습니다. 수정 전후 diff·해시와 필요한 실제 렌더를 같은 저장 reviewer에게 전달하고 기존 전체 검토·PNG18을 재사용합니다. 최초 BLOCKED를 소급 수정하지 않습니다.
