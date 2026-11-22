# 공개 베타 Git 변경 조정 기록

## 목적과 범위

이 기록은 승인된 공개 베타 마스터 계획의 M0-03에서 `main`에만 있던 프롬프트 블록 하드랩 정규화 커밋을 현재 공개 원고의 의미를 보존해 조정한 근거입니다. 과거 원고를 병합하거나 `main`을 실행 branch로 바꾸지 않았고, 이 기록은 로컬 기준선·검증 범위를 말할 뿐 push·배포·공개 성공을 뜻하지 않습니다.

## 기준과 재현 명령

- 실행 branch와 worktree: `codex/public-beta-completion`, `.worktrees/public-beta-completion`
- 실행 기준 SHA: `ff8fec85cb2bde4411638ef4f846649f1a4797ad`
- `main`의 별도 커밋: `c362d9c5d3e4c14f84577b20d348b0bb023dfd4b` (`docs: normalize prompt block wrapping`)
- 해당 커밋의 부모: `1e06f700272b05411dd23e835a9756d230f50aef`
- `main`과 실행 branch의 merge base: `1e06f700272b05411dd23e835a9756d230f50aef`

다음 읽기 전용 명령으로 변경 범위와 충돌 경계를 재현합니다.

```bash
git show --stat --oneline c362d9c
git show --format=fuller --find-renames c362d9c -- AGENTS.md CONTENT_MAP.md src/content/docs/04-backend-data/api-database-auth.md src/content/docs/08-quality/testing-strategy.md src/content/docs/09-git-github/git-and-github.md src/content/docs/12-case-studies/analytics-dashboard-case-study.md
git merge-tree "$(git merge-base main codex/public-beta-completion)" main codex/public-beta-completion
```

`git merge-tree`는 `CONTENT_MAP.md`, `api-database-auth.md`, `git-and-github.md`, `analytics-dashboard-case-study.md`가 양쪽에서 변경됐음을 보였습니다. `testing-strategy.md`는 별도 충돌이 아니지만 같은 커밋의 하드랩 범위여서 현재 프롬프트 블록을 직접 확인했습니다.

## Hunk 판정과 적용

| 파일 | `c362d9c` hunk 판정 | 적용 또는 보존 | 이유 |
|---|---|---|---|
| `AGENTS.md` | `transplant-formatting` | Markdown·프롬프트 블록 한 줄 정책을 추가 | 현행 최상위 Markdown 규칙과 일치하며 사례·검토 증거를 바꾸지 않습니다. |
| `api-database-auth.md` | `preserve-current` / `obsolete` | 변경하지 않음 | 현행 모임 참가 계약은 이전 보고서 수정 예시를 대체했고, 해당 목록 항목과 실행 범위는 이미 한 줄입니다. API·인가·정원·트랜잭션·응답 유실 의미를 과거 문구로 되돌리지 않습니다. |
| `testing-strategy.md` | `transplant-formatting` | 읽기 전용 검토 지시의 자연어 하드랩만 제거 | 테스트·fixture·오라클·검토 증거·`review` 상태를 바꾸지 않습니다. |
| `git-and-github.md` | `transplant-formatting` | `git diff` 문장의 자연어 하드랩만 제거 | 현행 Git 권한·승인 경계와 모임 사례를 유지합니다. |
| `analytics-dashboard-case-study.md` | `transplant-formatting` | 현재 `EDU-FIXTURE`·D-01~D-05 지시의 자연어 하드랩만 제거 | 이전 기업 A·B·실제 데이터 표현과 `review` 상태를 복원하지 않고, 현행 fixture·비목표·오라클·`draft` 경계를 그대로 보존합니다. |
| `CONTENT_MAP.md` | `regenerate` | `npm run sync:content-map`으로 갱신 | `c362d9c`의 API·대시보드 문자 수와 `review` 표기는 과거 원고 상태이므로 수동 충돌 선택을 하지 않습니다. |

공개 원고의 수정은 `text` fence 안에서 같은 자연어 문장 또는 같은 목록 항목에 들어간 임의 하드랩만 합쳤고, `AGENTS.md`는 별도의 Markdown·프롬프트 블록 정책 이식입니다. 코드·명령·표·계층·빈 줄·의도적인 강제 줄바꿈은 바꾸지 않았습니다.

## 검증

| 명령 | 종료 코드 | 결과 |
|---|---:|---|
| `npm run sync:content-map` | 0 | 공개 Markdown/MDX 58개 검증 통과, `CONTENT_MAP.md` 변경 없음 |
| `rg -n "반도체|semiconductor|chip dashboard|wafer" src/content/docs src/assets/diagrams src/assets/diagrams/source` | 0 | `start-here/learning-paths.md`의 `공개 반도체 데이터` 1건만 반환; M1에서 판정할 계획상 알려진 잔존이며 이번 범위에서 바꾸지 않음 |
| `git diff --check` | 0 | 공백 오류 없음 |
| `npm run check:static` | 0 | Node 테스트 27개 통과, 공개 콘텐츠 58개, 참조 Markdown/MDX 147개, 학습 SVG 12개 검증 통과 |
| `ASTRO_TELEMETRY_DISABLED=1 npm run check` | 0 | 정적 검사와 Astro build, 59개 HTML, 일반 본문 리터럴 Markdown 0개 검증 통과; `site` 미설정 Sitemap 경고는 출력됐고 M6/M7 공개 전 게이트로 남음 |

## 로컬 의존성 설정

새 의존성은 설치하지 않았습니다. 검증 중 기존 `.worktrees/current-tool-mapping/node_modules`의 실제 디렉터리를 새 worktree의 `node_modules` 심볼릭 링크로 임시 재사용했습니다. 저장소의 `node_modules/` 무시 규칙은 심볼릭 링크 자체와 일치하지 않아 `git status`에 untracked로 보였으므로, 커밋 전 링크를 제거하고 의도한 tracked 변경만 남겼는지 확인합니다. `.gitignore`와 공용 `.git/info/exclude`는 바꾸지 않았습니다.
