# 공개 베타 M5 Claude 사전 확인·시도 기록

이 파일은 Task 22의 append-only 시도 원장입니다. 요청 설정, 실제 호출, 관찰된 모델·컨텍스트·effort, 입력 전후 해시와 결과 유효성을 분리합니다. 비밀값·계정 이메일·조직 ID·토큰·session ID·정확한 비용·원시 인증 출력은 기록하지 않으며, 실패·미호출·부분 출력은 PASS나 M5 증거가 아닙니다.

## 현재 기록

2026-08-28의 구독 자격 사전 확인과 2026-09-05의 인증 사전 확인이 이 순서로 존재합니다. 최신 직접 차단 원인은 `auth`이지만, 로그인을 복구해도 정확한 Opus4.8·1M·`high`의 구독 포함 사용 및 구독 외 과금 비소비는 별도로 입증해야 합니다. 두 기록 모두 모델 호출은0건이며 R01~R26 중 어떤 행도 시도한 것으로 기록하지 않습니다.

<!-- m5-claude-attempt-log:data:start -->
```json
{
  "schema_version": 1,
  "campaign": "public-beta-1-m5",
  "records": [
    {
      "attempt_id": "preflight-2026-08-28",
      "attempt_kind": "preflight-only",
      "review_id": "M5-preflight",
      "scope": "Task22 실행 자격 확인이며 R01~R26 행 시도가 아님",
      "source": "docs/project/reviews/public-beta-1/claude-preflight-2026-08-28.md",
      "requested_model": "claude-opus-4-8[1m]",
      "requested_context": "1M",
      "requested_effort": "high",
      "actual_invocation": "not-run",
      "model_call_count": 0,
      "start": "not-run",
      "end": "not-run",
      "exit_code": "not-run",
      "observed_model": "not-confirmed",
      "observed_context": "not-confirmed",
      "observed_effort": "not-confirmed",
      "completion": "사전 조건 차단",
      "failure_stage": "subscription-only eligibility preflight",
      "tools": "not-run",
      "permission_events": "not-run",
      "web_events": "not-run",
      "status": "blocked",
      "block_reason": "subscription_unverified",
      "input_manifest": "not-fixed",
      "combined_sha256_before": "not-fixed",
      "combined_sha256_after": "not-run",
      "input_unchanged": "not-confirmed",
      "result_path": "없음",
      "valid_independent_evidence": false,
      "resume_condition": "정확한 모델·1M·high가 동일 구독의 포함 사용량만 소비하고 구독 외 과금 경로를 사용하지 않음을 비민감 방식으로 입증한 뒤, 선행 게이트를 닫은 행 하나의 입력만 고정합니다."
    },
    {
      "attempt_id": "preflight-2026-09-05",
      "attempt_kind": "preflight-only",
      "review_id": "M5-preflight",
      "scope": "Task22 Step2 비모델 인증 사전 확인이며 R01~R26 행 시도가 아님",
      "source": "docs/project/reviews/public-beta-1/claude-preflight-2026-09-05.md",
      "requested_model": "claude-opus-4-8[1m]",
      "requested_context": "1M",
      "requested_effort": "high",
      "actual_invocation": "not-run",
      "model_call_count": 0,
      "start": "not-run",
      "end": "not-run",
      "exit_code": "not-run",
      "observed_model": "not-confirmed",
      "observed_context": "not-confirmed",
      "observed_effort": "not-confirmed",
      "completion": "사전 조건 차단",
      "failure_stage": "authentication preflight",
      "tools": "not-run",
      "permission_events": "not-run",
      "web_events": "not-run",
      "status": "blocked",
      "block_reason": "auth",
      "input_manifest": "not-fixed",
      "combined_sha256_before": "not-fixed",
      "combined_sha256_after": "not-run",
      "input_unchanged": "not-confirmed",
      "result_path": "없음",
      "valid_independent_evidence": false,
      "resume_condition": "푸디님이 동일 구독 계정 로그인을 직접 복구한 뒤 정확한 Opus4.8·1M·high가 구독 포함 사용량만 소비하고 구독 외 과금 경로를 사용하지 않음을 비민감 방식으로 입증한 뒤 행 하나의 입력만 고정합니다."
    }
  ]
}
```
<!-- m5-claude-attempt-log:data:end -->

## 후속 기록 규칙

실제 조건 변화 뒤 사전 확인을 다시 수행하거나 행 하나를 실행할 때만 새 record를 아래에 추가하고 기존 record를 덮어쓰지 않습니다. [공통 계약](opus5-review-contract.md)과 [시도 기록 템플릿](../../../../templates/public-beta-claude-attempt-template.md)의 모든 필드를 채우며, 실제 호출이 없으면 `actual_invocation`·시각·종료 코드는 `not-run`, 실제 설정을 관찰하지 못했으면 `not-confirmed`로 둡니다. 같은 차단 상태에서는 가용성 폴링·예약·자동 재시도·시험 호출을 하지 않습니다.
