# Claude 구독 전용 실행 사전 확인 — 2026-08-28

## 판정과 경계

- 대상: 2026-08-28 운영 정책 개정 단위와 후속 PBV-02 독립 검토의 실행 자격 확인. M5 R01~R26 검토를 실행하거나 완료한 기록이 아닙니다.
- 상태: `blocked`, `block_reason: subscription_unverified` — 정확한 모델·1M 호출의 구독 전용 실행 자격 미확인.
- 마지막 확인: 2026-08-28, 로컬 비민감 설정 존재 검사와 실제 Claude Code `auth status`만 수행했습니다. 모델 호출·시험 프롬프트·검토 응답은 0건입니다.
- 구독 계정 로그인과 Pro 종류는 확인했으나, 정확한 Opus 4.8·1M·high 호출의 구독 포함 사용량 보장, 추가 사용량/기존 크레딧 비소비, 현재 모델·컨텍스트 이용 자격은 `not-confirmed`입니다. 로그인 성공을 과금 경로의 증명으로 대체하지 않습니다.
- 재개 조건: 계정 식별자·비밀값 없이 해당 모델·1M·high의 현재 구독 포함 이용 자격과 구독 외 사용 경로 비활성/비소비를 확인할 수 있는 근거가 있어야 합니다. 같은 상태를 반복 조회하지 않고 실제 조건 변화 뒤 한정 확인합니다. 유료 전환·다른 모델/컨텍스트/effort·다른 계정·제공자·시험 호출은 대안으로 사용하지 않습니다.
- 공개 가능 상태: 아닙니다. 정책 작성·자체 검사와 PBV-02 자동·브라우저 검증은 Claude 독립 검토 및 M5·소유자 승인과 별도입니다. 2026-08-30 이후 구현·필수 검증·별도 Codex 작업 검토를 통과하고 안전하게 분리되는 단위는 `implementation verified / Claude review pending` 로컬 체크포인트 커밋으로 보존할 수 있지만, 이 사전 확인의 `blocked/subscription_unverified` 판정과 M5·`ready`·공개 게이트는 바뀌지 않습니다.

## 실제 확인 결과

| 확인 | 결과 | 증명하지 않는 범위 |
|---|---|---|
| 실행 파일 | `/opt/homebrew/bin/claude` → `/opt/homebrew/lib/node_modules/@anthropic-ai/claude-code/bin/claude.exe` | 별칭·프록시 우회 없이 파일 경로를 확인한 것이며 모델 사용이나 과금 자격을 증명하지 않습니다. |
| 버전·도움말 | `--version`: `2.1.247 (Claude Code)`, exit 0. `--help`, `auth status --help`: exit 0 | 설치·업데이트·모델 호출을 하지 않았습니다. |
| 현재 프로세스 환경 | `ANTHROPIC_API_KEY`, `ANTHROPIC_AUTH_TOKEN`, `ANTHROPIC_BASE_URL`, `CLAUDE_CODE_OAUTH_TOKEN`, `CLAUDE_CODE_USE_BEDROCK`, `CLAUDE_CODE_USE_VERTEX`, `CLAUDE_CODE_USE_FOUNDRY`, `HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `CLAUDE_CONFIG_DIR`의 존재 여부가 모두 false | 확인한 키에 한정합니다. 값은 출력하지 않았으며 모든 OS/계정 과금 경로의 부재를 주장하지 않습니다. |
| 로컬 설정 존재 검사 | 사용자 `settings.json`과 root checkout의 `settings.local.json`은 존재하고 검사한 `apiKeyHelper`·환경 위험 키는 없음. managed settings 및 worktree 두 설정 파일은 없음 | 사용자 설정의 hooks·plugins는 존재하므로 실행 때 별도 차단해야 합니다. 설정 내용·비밀값은 기록하지 않았고 전역 설정·인증정보를 변경하지 않았습니다. |
| 제한된 환경 인증 조회 | `--safe-mode --setting-sources '' auth status --json`: exit 1, `loggedIn=false`, `authMethod=none`, `apiProvider=firstParty`, `subscriptionType=null` | macOS 접근 제한의 영향을 배제할 수 없어 계정 전체의 로그아웃으로 단정하지 않았습니다. |
| 승인된 호스트 인증 조회 | 같은 비모델 명령을 한 번 실행: exit 0, `loggedIn=true`, `apiProvider=firstParty`, `subscriptionType=pro` | 인증 방식 값은 안전 출력 필터가 인식하지 못해 생략했습니다. 계정 식별자·토큰·조직·세션 등 나머지 필드와 원시 응답은 출력·저장하지 않았습니다. 구독 전용 실행은 여전히 미확인입니다. |
| 실행 제한 지원 | 도움말에서 `--safe-mode`, `--tools`, `--setting-sources`, `--strict-mcp-config`, `--disable-slash-commands` 지원 확인 | 플래그 지원은 실제 검토 세션의 권한 준수 증거가 아닙니다. `--bare`는 API 키/도우미 경로이므로 사용하지 않습니다. |

환경·설정 검사에서는 존재 여부만 투영했으며 credential 파일이나 Keychain 내용을 직접 열람·덤프하지 않았습니다. 원시 인증 응답은 비민감 허용 필드만 메모리 내에서 선별하고 저장하지 않았습니다. 최초 출력 필터 스크립트의 괄호 오류로 한 번 exit 1이 났으나 CLI 호출 이전 문법 오류였고, 수정 뒤 위 두 비모델 상태 조회만 실행했습니다.

## 요청과 실제 실행의 분리

| 구분 | 값 |
|---|---|
| 원하는 모델·컨텍스트·effort | `claude-opus-4-8[1m]` · `1M` · `high` |
| 예정 모델 인자 | `--model 'claude-opus-4-8[1m]' --effort high` — 조건부 템플릿일 뿐 실행되지 않음 |
| 실제 모델 호출 인자 | 없음 |
| 실제 확인된 모델·컨텍스트·effort | 모두 `not-confirmed` |
| 정상 독립 검토 본문·판정 | 없음; PASS 인정 불가 |
| 외부 제품/계정 근거 갱신 | 없음; 2026-08-14/20의 기능 확인일을 현재 확인일로 바꾸지 않음 |

관련 계약은 [공통 검토 계약](opus5-review-contract.md), [시도 기록 템플릿](../../../../templates/public-beta-claude-attempt-template.md)을 따릅니다. 입력 파일과 SHA-256 묶음은 각 단위가 안정된 시점의 별도 검토 입력 manifest에 고정합니다. 본 사전 확인은 아직 고정하지 않은 원고나 변경 후 파일에 대한 검토 증거가 아닙니다.
