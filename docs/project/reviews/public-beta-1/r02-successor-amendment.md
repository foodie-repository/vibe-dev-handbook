# R02 후속 reviewer 승계 개정 — 2026-10-25

소유자의 이번 명시 승인으로 R02에만 적용합니다. 최초 원고 reviewer의 임시 세션이 종료되어 동일 세션 후속 검토를 받을 수 없을 때, 새 독립 reviewer가 후속 검토 역할을 승계할 수 있습니다. [공통 계약](codex-review-contract.md) 6절의 같은 reviewer 조건만 이 경우에 한해 대체하며 다른 행·프로젝트 전체 규칙·품질 기준은 변경하지 않습니다. [이미지 전달 개정](r02-image-delivery-amendment.md), 최초 BLOCKED·C0/I0/M3·17/18, 실제 원문51청크·PNG18개 검토, [B01 RESOLVED 증거 검토](r02-b01-followup-review.md)는 역사 증거로 보존합니다.

## 필수 입력과 역할

승계 reviewer는 controller·작성자·이전 대화와 분리된 fresh 읽기 전용 gpt-6-astra/high 세션이어야 합니다. controller가 고정한 최초 검토 결과 전체, B01 해소 증거와 후속 판정 전체, 이 개정과 공통 계약, finding별 재판정, 수정 전후 diff·개별 SHA·입력 묶음 SHA, 변경 판단에 필요한 원고 문맥과 직접 근거를 실제로 읽습니다. 단순 파일 경로·요약·이전 PASS만 전달해서는 안 됩니다. controller는 입력 바이트와 전송 전후 불변성, 실제 프로필·fresh 상태·읽기 전용 제한을 기록합니다.

원래 검토에서 계승하는 내용과 새로 확인한 내용을 결과에서 명시적으로 분리합니다. 변경되지 않은 원고·PNG18개는 기존 검토를 재사용하며 새 reviewer가 다시 보았다고 주장하지 않습니다. 변경된 문단·용어·출처 링크와 영향 관계를 직접 검토하고, 문맥 부족이나 새 결함이면 이유와 필요한 추가 입력을 명시합니다. 이미지·alt·레이아웃·테마에 영향이 생기면 해당 시각 범위를 다시 확인하며, 부족한 입력을 형식적인 PASS로 대체하지 않습니다. 과거 출처 확인일을 현재로 갱신하지 않으며 새 현재성 주장이 필요할 때만 해당 공식 근거를 확인합니다.

## 결과와 완료 경계

결과는 공통 계약의 여섯 절을 유지하고 finding별 RESOLVED/NOT RESOLVED·새 finding·영향 범위 판단·계승한 점수와 새 평가·한계를 기록합니다. 원래 BLOCKED를 소급 수정하지 않으며 후속 결과를 별도 정본으로 저장합니다. 모든 finding의 controller 재판정과 필요한 검증·후속 독립 검토, 미해결 Critical/Important0 없이 R02를 닫지 않습니다. Minor는 해소 또는 근거 있는 비차단 유지로 명시합니다. 이번 승계 승인 자체는 검토 PASS·원고 review/ready·M5·소유자 공개 승인·RC·외부 쓰기를 뜻하지 않습니다.

기존 R02 한정 공식 ChatGPT 구독 경로를 유지합니다. API 키·별도 과금·추가 크레딧·다른 모델·전역 설정/인증 변경을 금지합니다. reviewer는 셸·Git·테스트·웹·MCP·플러그인·스킬·위임·파일 쓰기를 사용하지 않습니다. 지정 모델/effort·구독·권한 조건을 확인하지 못하면 모델 호출 전에 중단합니다. 이번 승인과 승계는 다른 행에 자동 적용되지 않습니다.

<!-- r02-successor-policy:start -->
```json
{
  "review_id": "R02",
  "trigger": "original-ephemeral-reviewer-ended",
  "profile": { "model": "gpt-6-astra", "effort": "high", "fresh": true, "read_only": true },
  "required_inputs": ["original-review-full", "b01-evidence-full", "b01-followup-full", "contract-and-amendments", "finding-adjudication", "before-after-diff-and-hashes", "affected-manuscript-context", "direct-source-evidence"],
  "preserve_original_verdict": "BLOCKED",
  "unchanged_scope": "reuse-with-explicit-attribution",
  "changed_scope": "actual-independent-review",
  "insufficient_input": "BLOCKED",
  "other_rows_affected": false,
  "automatic_closeout": false
}
```
<!-- r02-successor-policy:end -->
