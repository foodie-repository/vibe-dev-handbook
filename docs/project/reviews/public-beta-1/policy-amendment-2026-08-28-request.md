# 운영 개정 독립 검토 요청 — 2026-08-28

이 문서는 요청 준비 기록이며 Claude 호출·정상 검토·PASS가 아닙니다. 실제 대상은 기존 정책 개정 단위이고 M5 R01~R26이 아닙니다.

2026-08-30 운영 조정: 이 요청의 Claude 검토는 계속 `blocked/subscription_unverified`이며 M5·`ready`·공개 근거가 아닙니다. 다만 정책 단위가 필수 자동 검증, 작성자와 분리된 Codex 작업 검토의 미해결 Critical·Important 0건, 안전 분리를 충족하면 Claude 차단만을 이유로 로컬 체크포인트 커밋을 금지하지 않습니다. 이 문서의 2026-08-28 커밋 보류 표현은 당시 상태로만 읽습니다.

- review_id: policy-amendment-2026-08-28; review_scope: policy-unit
- branch/HEAD: codex/public-beta-completion / eacf0264268f9b4dcf1dfa4e95399c7df3c5957c
- status: blocked; implementation_state: 작성·자체 검증 완료; required_review_state: 차단; release_ready: false
- block_reason: subscription_unverified; 마지막 비모델 확인: [2026-08-28 preflight](claude-preflight-2026-08-28.md)
- 요청: claude-opus-4-8[1m] / 1M / high; 실제 모델 인자: not-run; 모델 호출0; 실제 관찰 설정: not-confirmed
- 고정 입력: [입력 manifest](review-inputs-2026-08-28.json)의 policy 행에 현재 전체 입력·개별/결합 SHA-256을 기록합니다. 이후 자체 검증·체크포인트 변경에 따른 전후 해시는 input_revisions에 보존하며 미호출 Claude PASS를 만들지 않습니다.
- 재개: 실제 조건 변화와 정확한 모델·1M·high의 구독 포함 사용/구독 외 과금 비소비가 입증되어야 합니다. 시험·유료·모델/effort/컨텍스트 fallback은 금지합니다.

## 검토 범위와 수용 기준

[공통 계약](opus5-review-contract.md) C01~C12를 모두 대조합니다. 정책 개정이 대상이므로 원고9항목 점수를 부여하는 대신 기존 점수·루브릭·원고59개/R26·소유자·release 게이트를 그대로 보존했는지 확인합니다. API/기존 크레딧/Extra usage/추가결제/프록시/계정·요금제 우회 및 시험 호출 금지, 정확한 요청과 실제 설정 구분, Read-only 제한, 비용 조건 최우선, 실패/차단/해시/재개 규칙이 모순 없이 연결되어야 합니다. 공통 C01~C12와 권위 원문 사이에 누락이 없어야 하며 실제 원고·관련 근거 전체를 Codex 요약으로 바꾸지 않아야 합니다. R01~R25 exact59·중복0·누락0/R26과 과거 유효 증거·역사 파일명·Codex 모델/effort·기존 목표를 유지해야 합니다. 로컬 체크포인트의 Codex 작업 검토·안전 분리 조건과 M5/ready의 Claude·소유자 게이트를 혼용하면 안 됩니다.

정책 자체가 변경 대상이므로 이번에는 전체 명세·계획을 입력합니다. 후속 개별 원고 검토에서 이 두 문서를 이유 없이 반복 입력하지 않습니다. manifest에 지정한 사용자 요청 원문과 변경 파일 전체·실제 preflight·구현 보고서를 읽고 자체 PASS를 결론으로 채택하지 마십시오. VERIFICATION_REPORT의 PBV-02 부분은 별도 시각 단위의 상태 경계이며 이번 정책 검토로 그 그림의 독립 검토를 완료하지 않습니다.

## 증거와 한계

정책 focused59경로/기준매핑, static65/65·content59·references200+SVG14·plan100/59/0/0, build60/Pagefind60, built literal0, diff-check0. full 검사 뒤 ROADMAP 한 문장 명료화는 targeted assert/diff-check만 수행했고 공개 렌더 입력은 바뀌지 않았습니다. 기존 sitemap warning1/404 notice, Pro 로그인만 확인되고 정확한 포함 사용은 미확인이라는 경계를 보존합니다. 실제 Claude 판정은 없으므로 이전 PASS 무효화 대상도 없습니다. 앞으로 manifest 입력이 바뀌면 전후 해시와 영향 범위를 먼저 기록해야 합니다.

## 결과 계약

허용된 실행 자격을 모두 확인한 뒤에만 공통 계약의6절 finding 중심 결과를 요청합니다. Read 외 파일 수정·셸/Bash·Git·테스트·웹·MCP·플러그인·스킬·하위 에이전트를 금지합니다. 예정 결과 경로는 `policy-amendment-2026-08-28-claude-review.md`이며 현재 존재하지 않습니다. 정상 Claude 결과가 없으므로 M5·ready·공개 승인으로 계산하지 않습니다. 로컬 체크포인트 커밋 가능 여부는 별도 Codex 작업 검토의 Critical·Important 해소, 필수 검증, 안전 분리로만 판정합니다.
