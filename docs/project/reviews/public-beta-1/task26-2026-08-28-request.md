# CI 게이트 준비 — 독립 검토 대기 입력

review_id: task26-2026-08-28 · status: blocked/subscription_unverified · release_ready: false · actual_invocation: not-run

이 요청은 입력 준비이며 Claude 실행·독립 PASS·closeout·커밋 승인 증거가 아닙니다. branch codex/public-beta-completion, HEAD eacf0264268f9b4dcf1dfa4e95399c7df3c5957c를 유지합니다. [공통 계약](opus5-review-contract.md)의 C01~C12·권위 대응표·심각도·여섯 부분 출력 형식·읽기 전용 제한을 그대로 적용하고, 해당하지 않는 항목도 이유를 밝힙니다.

두 workflow의 실제 실행순서·권한·트리거·Node/Action/설치 경계와 npm ls 실패를 검토합니다. Step1 로컬 설정 점검이며 cleanRC·실제runner·M7성공을 판정하지 않습니다.

[단위 보고서](release-candidate.md)와 [입력 원장](review-inputs-2026-08-28.json)의 task26 실제 파일·개별/결합 해시를 사용합니다. 요약이 아니라 전체 대상 파일과 필요한 근거를 읽습니다. 입력 원장에 연결한 증거 manifest는 실제 파일을 생략하는 대체물이 아니며 필요한 원본을 제공받지 못하면 not-confirmed로 남깁니다. 변경 전 증거를 변경 후 상태에 소급하지 않습니다.

구독 기반 인증뿐 아니라 exact claude-opus-4-8[1m]/1M/high가 구독 포함 사용만 소비하고 API/기존크레딧/Extra usage 등 구독 외 과금을 사용하지 않는다는 새 입증 전에는 호출하지 않습니다. /opt/homebrew/bin/claude의 지정 인자만 허용하며 시험 호출·fallback·별칭·다른 계정·유료 경로·추가 비용 제안은 금지합니다. 파일 쓰기·셸/Git/테스트·웹·MCP/플러그인/스킬·하위 에이전트 권한을 주지 않습니다.

요청/실제호출/관찰모델·설정은 분리합니다. 미완료 QA·권리·승인 조건과 Critical/Important는 숨기지 않고 위치·근거·필요 수정·재확인 기준으로 보고합니다. 작업 단위 검토는 M5 R01~R25 공개59개와 R26·소유자/ready/공개 게이트를 대체하지 않습니다.
