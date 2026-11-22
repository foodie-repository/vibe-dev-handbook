# Claude 구독 전용 실행 사전 확인 — 2026-09-05

## 판정과 경계

- 대상: Task 22 Step 2의 비모델 인증 사전 확인입니다. M5 R01~R26 검토를 실행하거나 완료한 기록이 아닙니다.
- 상태: `blocked`, `block_reason: auth` — 승인된 호스트와 제한된 환경의 비민감 인증 상태 조회 모두 `loggedIn=false`였으므로, 현재 직접 차단 원인은 인증입니다.
- 후속 경계: 로그인을 복구해도 정확한 Opus4.8·1M·`high`의 구독 포함 사용과 구독 외 과금 비소비는 입증되지 않습니다. 따라서 `subscription_unverified` 경계를 유지합니다.
- 모델 프롬프트, 시험 호출, R01~R26 검토, 로그인·설정 변경, 설치·업데이트, 네트워크 조사, 외부 쓰기는 실행하지 않았습니다. 모델 호출은 0건입니다.

## 비민감 관찰 결과

| 확인 | 결과 | 증명하지 않는 범위 |
|---|---|---|
| 실행 파일 | `/opt/homebrew/bin/claude`는 같은 공식 설치 경로의 `claude.exe`를 가리킵니다. 버전은 `2.1.252`, mtime은 `2026-09-02T01:07:02+0900`, 실행 파일 SHA-256은 `b661c6a094fcc32656bf7c0071c5b45bf900b34d4f0a1ab3d78fd59aeba2c2c7`입니다. | 설치 경로·버전·파일 식별은 모델 사용 또는 과금 자격을 증명하지 않습니다. |
| 비모델 도움말 | `--version`, `--help`, `auth status --help`만 실행했습니다. 새 도움말에는 Extra usage 활성 여부나 특정 모델·1M의 구독 포함 자격을 비민감하게 입증하는 옵션이 없습니다. | 도움말의 옵션 부재는 계정 전체의 사용량·과금 경로를 증명하지 않습니다. |
| 검사한 환경 변수 이름 | `ANTHROPIC_API_KEY`, `ANTHROPIC_AUTH_TOKEN`, `ANTHROPIC_BASE_URL`, `CLAUDE_CODE_OAUTH_TOKEN`, `CLAUDE_CODE_USE_BEDROCK`, `CLAUDE_CODE_USE_VERTEX`, `CLAUDE_CODE_USE_FOUNDRY`, `HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `CLAUDE_CONFIG_DIR`은 모두 존재하지 않았습니다. | 값은 읽거나 출력하지 않았습니다. 이 이름 목록만으로 모든 인증·과금 경로의 부재를 주장하지 않습니다. |
| 제한된 환경의 인증 상태 | 필터된 `auth status --json`은 `loggedIn=false`, `apiProvider=firstParty`였고 구독 유형 필드는 없었습니다. | 샌드박스 제약 때문에 계정 전체 상태의 근거로 사용하지 않습니다. |
| 승인된 호스트의 인증 상태 | 원시 응답을 저장·출력하지 않고 키 이름과 허용된 값만 투영한 한 번의 `auth status --json`도 `loggedIn=false`, `apiProvider=firstParty`였고 `subscriptionType` 필드는 없었습니다. 필터는 `analyticsDisabled`, `apiProvider`, `authMethod`, `loggedIn`, `projectsDirectory`만 보았고, `authMethod`·`projectsDirectory`와 그 밖의 원시 값은 출력하거나 저장하지 않았습니다. 파이프라인은 `pipefail` 기준 exit 1이었습니다. | 계정 이메일, 조직 ID, 토큰, session ID, 프로젝트 디렉터리 값, 원시 인증 응답, 정확한 비용을 기록하지 않았습니다. 인증 복구 뒤의 구독 포함 사용 자격도 증명하지 않습니다. |

## 요청과 실제 실행의 분리

| 구분 | 값 |
|---|---|
| 원하는 모델·컨텍스트·effort | `claude-opus-4-8[1m]` · `1M` · `high` |
| 실제 모델 호출 인자·프롬프트 | 없음 |
| 실제 확인된 모델·컨텍스트·effort | 모두 `not-confirmed` |
| 입력 manifest·결과·독립 증거 | 각각 `not-fixed` · `not-run` · `false` |
| R01~R26 행 상태 | 모두 `pending`·`차단`·`release_ready=false`, 입력 `not-fixed`, 호출·결과 `not-run`, 설정 `not-confirmed`, findings `not-assessed` |

## 재개 조건

푸디님이 동일 구독 계정의 로그인을 직접 복구한 뒤, 계정 식별정보나 비밀값 없이 정확한 Opus4.8·1M·`high`가 구독 포함 사용량만 소비하고 구독 외 과금 경로를 사용하지 않는다는 점을 비민감 방식으로 입증해야 합니다. 자동 로그인, 다른 계정·모델·effort·제공자, API 키·크레딧·Extra usage, 시험 호출은 대안이 아닙니다. 조건이 바뀌지 않으면 사전 확인이나 시험 호출을 반복하지 않습니다.
