# 공개 베타 Claude 사전 확인·시도 기록 템플릿

이 양식은 호출 명령이 아니라 기록 계약입니다. [공통 계약](../docs/project/reviews/public-beta-1/opus5-review-contract.md) A/E절을 따릅니다. 비밀값·인증정보 내용을 읽거나 저장하지 않고 설정 존재·비민감 상태만 확인합니다. 계정 이메일·조직ID·토큰·session ID·정확한 비용·원시 auth 출력은 넣지 않습니다.

## 호출 전 확인

| 필드 | 기록 |
|---|---|
| attempt_id / review_id / scope | 기존 요청서의 실제ID·단위/M5 범위 |
| 확인 시각 / CLI 버전 / 바이너리 | 기록 필요; 실제 `/opt/homebrew/bin/claude`·버전·해결 경로 |
| requested_model / context / effort | `claude-opus-4-8[1m]` / `1M` / `high` |
| 인증 상태(비민감) | 구독 로그인 확인/미확인; 이것만으로 포함 사용 입증 불가 |
| API 키·인증 도우미·환경·게이트웨이·다른 제공자 | 필요한 설정의 존재 여부만; 값은 기록하지 않음 |
| Extra usage·기존 크레딧·추가 과금 경로 배제 | 입증/미입증·비민감 근거; 활성화되어도 사용 금지 |
| exact_model_context_subscription_only | 해당 모델·1M·high가 구독 포함 사용량만 소비한다는 실제 입증 또는 not-confirmed |
| permissions | safe-mode·Read만·설정 격리·빈 MCP·세션 비저장·금지 도구 확인 또는 미확인 |
| preflight_result / block_reason | 모든 조건 확인 또는 blocked/실제 원인 |
| input_manifest / combined_sha256_before | 요청서/입력 해시 |
| 다음 재개 조건 | 실제 reset 안내·동일 구독 인증 복구·포함 사용 입증 등 |

구독 로그인·CLI 경로·옵션이 있다는 사실은 해당 모델/1M의 포함 사용을 증명하지 않습니다. 별도 과금 가능성을 배제하지 못하면 시험 모델 호출도 하지 않고 `blocked`로 둡니다. API 종량제/크레딧·구독 외 기존 크레딧·Extra usage·추가 결제/자동 충전·유료 프록시/게이트웨이/제공자·한도 우회 계정/요금제 상향을 금지합니다. 비용 제한은 모델/1M·일정·계속 진행 목표보다 우선하며 유료 선택지를 묻지 않습니다. 인증정보 삭제·전역 설정 변경·`--bare`·다른 모델/effort/컨텍스트/계정 fallback도 하지 않습니다.

## 조건 충족 시에만 사용하는 인자 계약

아래는 자동 실행 지시가 아닙니다. 모든 사전 조건과 현재 CLI의 옵션 호환성을 확인한 뒤 실제 요청서에 맞춰 실행합니다. 임시 빈 MCP는 `{ "mcpServers": {} }`이고 커밋하지 않습니다. CLI 업그레이드/설치는 승인 범위 밖입니다.

```bash
/opt/homebrew/bin/claude -p --model 'claude-opus-4-8[1m]' --effort high --safe-mode --permission-mode plan --tools Read --allowedTools Read --disallowedTools Bash,Edit,Write,WebSearch,WebFetch,Task,Skill --setting-sources '' --strict-mcp-config --mcp-config /private/tmp/vibe-public-beta-empty-mcp.json --disable-slash-commands --no-session-persistence --output-format json "고정 요청서와 공통 계약의 입력만 Read로 검토하고 한국어 6절 결과를 출력하십시오. 파일·외부 상태를 바꾸지 마십시오."
```

셸 alias/프록시를 우회 실행 경로로 사용하지 않습니다. Read 외 셸/Bash·파일 수정·Git·테스트·웹·MCP·플러그인·스킬·하위 에이전트는 금지합니다. safe mode/빈 MCP/설정 격리는 권한 제한이며 별도 과금 경로를 증명하지 않습니다.

## 시도 결과

| 필드 | 기록 |
|---|---|
| actual_invocation | 실제 실행한 바이너리/인자 또는 not-run; 원하는 명령을 실행 사실처럼 쓰지 않음 |
| model_call_count / start / end / exit_code | 실제 값; 미호출은0/not-run/not-run/not-run |
| observed_model / context / effort | 결과·비민감 실행 메타데이터로 확인한 값 또는 not-confirmed |
| completion / failure_stage | 정상 완전 출력 / 사전 조건 차단 / 모델 전 실패 / 출력 도중 실패 |
| tools / permission / web_events | 실제 관찰 또는 not-run; 정책 위반 여부 |
| combined_sha256_after / input_unchanged | 기록 필요; 입력 변경 시 영향/무효화/재검토 연결 |
| result_path / valid_independent_evidence | 정상 완전 결과 경로/판정 또는 없음/false |
| status / block_reason / last_attempt / resume_condition | 요청서 상태 필드와 일치 |

요청 설정·실제 인자·실제 관찰 설정을 구분합니다. 종료코드0만으로 충분하지 않으며 구독 전용·정확한 실제 모델/컨텍스트/effort·입력 완독/불변·권한·완전한 결과를 모두 확인해야 합니다. 미확인/불일치·부분 응답·실패 결과는 PASS·`independent:`·M5·ready 증거로 사용하지 않습니다. 정상 검토라도 Critical/Important와 재판정·소유자/공개 게이트를 따로 확인합니다.

실패 뒤 같은 호출/가용성 조회를 반복하거나 예약/자동화를 만들지 않습니다. 실제 재개 조건과 구독 전용 조건을 다시 입증한 뒤 막힌 행 하나만 제한적으로 재시도하며, 같은 차단이면 기존 범위의 비의존 Codex 작업으로 돌아갑니다. 입력을 바꾸면 전후 해시·영향 행·이전 증거 무효화·재검토를 기록하고, 모든 독립 작업을 마치면 체크포인트와 필수 잔여 조건만 보고합니다.
