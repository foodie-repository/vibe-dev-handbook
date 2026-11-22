# Git과 GitHub는 다릅니다 검토 준비 기록

## 목적과 현재 상태

이 문서는 공식 Build Track 여덟 번째 장인 `src/content/docs/09-git-github/git-and-github.md`의 자체 품질 점검과 독립 검토 요청 범위를 기록합니다. 원고는 Git과 GitHub의 제품 이름을 소개하는 데서 그치지 않고 작업 트리·스테이징·커밋·브랜치·원격과 GitHub 협업 계층을 구분하고, AI가 만든 변경을 status·diff·검증 결과와 대조하는 `draft`이지만 작성 맥락을 공유하지 않은 독립 기술·편집 검토와 비개발자 독자 테스트를 아직 통과하지 않았습니다.

2026-08-05 04:27 KST 현재 Claude Code의 주간 전체 사용량과 별개인 단기 사용 구간이 오전 7시 KST에 초기화되기 전입니다. 앞선 읽기 전용 요청은 모델 실행 전 API `429`로 종료되어 입력·출력 토큰과 검토 본문이 생성되지 않았으므로, 초기화 이후 아래 계약으로 이 장을 Opus 5 Max 독립 검토 대기열에 추가합니다. 계정 식별 정보는 기록하지 않으며, 이 준비 문서는 독립 검토 요청이나 완료를 증명하는 `reviewEvidence`가 아닙니다.

## 자체 품질 루브릭

| 항목 | 점수 | 근거와 남은 한계 |
|---|---:|---|
| 독자 문제 | 2 | AI의 “변경 없음”, “커밋 준비”, “GitHub에 저장” 보고를 받았지만 로컬·스테이징·원격·배포 상태를 구분하지 못하는 비개발자의 구체적인 상황에서 시작합니다. |
| 정확성 | 2 | Git과 GitHub, tracked·untracked·ignored, 작업 트리·스테이징·커밋·브랜치·HEAD·remote와 commit·push·PR·merge·deploy를 분리하고 Git 설정에 따른 pull 차이를 명시합니다. |
| 구조 | 2 | 파일 저장에서 스테이징·로컬 이력·원격 협업·병합·배포로 이어지는 상태 전이와 각 단계의 증거·승인 경계를 연결합니다. |
| 쉬운 설명 | 2 | 편집실 비유와 `No commits yet`·untracked 상태 예시를 정식 Git 용어, 실제 명령과 AI 검토 상황에 연결합니다. |
| 비유 한계 | 2 | Git이 날짜별 폴더 복사가 아니라 커밋 그래프와 이동하는 브랜치 참조를 관리하고 분산 저장소가 자체 이력을 가진다는 한계를 명시합니다. |
| 판단 기준 | 2 | 저장소 경계·현재 위치·status·세 종류의 diff·untracked 파일·검증 결과와 승인 단계로 커밋 후보를 판정하게 합니다. |
| 실패 모드 | 2 | Git·GitHub 혼용, add·diff·commit·push·pull·ignore 오해, AI 요약 과신과 상태 분류 없는 복구를 실제 빈틈과 예방 행동에 연결합니다. |
| 실전 연결 | 2 | 현재 저장소처럼 첫 커밋 전 untracked 상태를 해석하는 예, AI 읽기 전용 점검 지시, 최소 안전 루프, 체크리스트와 연습을 제공합니다. |
| 근거 | 1 | Pro Git 한국어판의 확인일과 Git 안정 개념 적용 범위는 추적되지만 GitHub의 Pull Request·Actions·보호 규칙 등 현재 서비스 기능을 직접 뒷받침하는 공식 자료는 이번 작업에서 새로 확인하지 않았습니다. |

합계는 18점 중 17점입니다. 자체 점검에서 치명 항목은 발견하지 못했지만, 이 점수는 독립 검토나 `ready` 판정을 대신하지 않습니다.

## 자체 점검에서 보완한 범위

1. Git을 분산 버전 관리 시스템, GitHub를 Git 저장소 위의 원격 호스팅·협업 서비스로 분리했습니다.
2. 저장소·작업 트리, tracked·untracked·ignored, 스테이징·커밋·브랜치·HEAD의 상태와 각 상태가 증명하지 못하는 범위를 설명했습니다.
3. `.gitignore`가 비밀 보관이나 이미 추적된 파일·과거 이력의 자동 삭제 기능이 아님을 명시했습니다.
4. 파일 저장·add·commit·push·Pull Request·merge·build·deploy를 별도 행동과 승인 단계로 나눴습니다.
5. 원격 이름 `origin`, 로컬 브랜치와 원격 추적 브랜치, fetch·pull·push의 네트워크·이력·외부 부작용 경계를 설명했습니다.
6. status, 기본 diff, staged diff와 HEAD 비교가 각각 보여주지 않는 untracked·staged·ignored 범위를 구분했습니다.
7. 첫 커밋 전 모든 파일이 untracked인 상태에서 기본 diff가 비어도 변경 없음이 아니라는 실제적인 예를 추가했습니다.
8. AI 작업에서 사용자 기존 변경을 보존하고 diff·검증·스테이징 후보·외부 공유 권한을 독립 확인하는 최소 안전 루프를 추가했습니다.
9. 비밀·개인정보·회사 데이터·대용량 데이터·생성물과 Git·백업·애플리케이션 데이터 복구의 경계를 명시했습니다.
10. 읽기 전용 AI 점검 계약, 완료 체크리스트와 상태·승인 분류 연습을 추가했습니다.

## 독립 검토 요청 계약

Claude Code는 다음 파일만 읽고 수정 없이 검토합니다.

- `AGENTS.md`
- `PROJECT_CONTEXT.md`
- `RULES.md`
- `docs/project/content-lifecycle.md`
- `docs/project/quality-rubric.md`
- `docs/project/editorial-guide.md`
- `research/source-map.md`
- `templates/chapter-template.md`
- `templates/agent-task-brief-template.md`
- `src/content/docs/09-git-github/git-and-github.md`
- `src/content/docs/09-git-github/branch-commit-pull-request.md`
- `src/content/docs/09-git-github/undo-merge-conflict-release.md`
- `src/content/docs/11-ai-native/permissions-sandbox-worktrees.md`
- `src/content/docs/11-ai-native/agent-review-and-verification.md`
- `src/content/docs/reference/checklists.md`
- `src/content/docs/reference/agent-output-glossary.md`
- `src/content/docs/12-case-studies/analytics-dashboard-case-study.md`

검토자는 다음 질문에 답해야 합니다.

1. Git과 GitHub를 분산 버전 관리 시스템과 원격 협업 서비스로 나눈 정의가 정확하며 중요한 예외가 빠지지 않았나요?
2. 저장소·작업 트리·스테이징·커밋·브랜치·HEAD의 관계와 “스냅샷” 설명이 Git의 실제 개념을 왜곡하나요?
3. tracked·untracked·ignored와 `.gitignore`의 경계, 비밀이 과거 이력에 남는다는 설명에 중요한 오류가 있나요?
4. 브랜치, 로컬 브랜치·원격 추적 브랜치, remote와 `origin` 설명이 비개발자에게 정확한 상태 모델을 주나요?
5. fetch·pull·push의 설명이 설정에 따른 merge·rebase 차이, 네트워크·로컬 상태·외부 부작용을 지나치게 단정하거나 누락하나요?
6. status, 기본 diff, staged diff와 HEAD 비교의 증명 범위와 untracked 파일 빈틈이 정확한가요?
7. commit·push·Pull Request·merge·build·deploy를 별도 승인 단계로 구분한 흐름이 Git과 GitHub의 실제 책임을 잘 보여주나요?
8. GitHub Pull Request·Actions·check·보호 규칙·release 설명이 현재 공식 자료 확인 범위를 넘어 특정 서비스 기능을 단정하나요?
9. 비밀·개인정보·회사 데이터·대용량 데이터, Git과 백업·애플리케이션 데이터 복구의 경계가 안전하고 충분한가요?
10. AI 최소 안전 루프와 읽기 전용 지시가 기존 사용자 변경을 보존하고 commit·push 권한을 실제로 분리하나요?
11. 첫 커밋 전 untracked 상태 예, 체크리스트와 연습이 비개발자의 상태 구분 능력을 관찰 가능하게 검증하나요?
12. 현재 출처가 직접 뒷받침하지 못하거나 추가 공식·1차 자료 확인이 필요한 주장은 무엇인가요?
13. 품질 루브릭 9개 항목을 0~2점으로 평가하고 치명 항목 여부를 판정해 주세요.

결과는 `P0 치명 오류`, `P1 review 전 필수`, `P2 개선 권장`, `잘된 점`, `루브릭 점수`, `추가 출처 확인 목록` 순으로 작성하고 각 지적에 대상 제목이나 짧은 대상 문구와 근거를 포함해야 합니다. 웹 검색, 파일 수정, Bash, 외부 플러그인과 하위 에이전트는 사용하지 않습니다.

## 승격 경계

Opus 검토 결과가 생성되면 Codex가 각 지적을 실제 원고와 프로젝트 규칙에 대조해 수용·부분 수용·기각으로 재판정합니다. AI 검토만으로 상태를 올리지 않으며, 사람 기술·편집 검토와 비개발자 독자 테스트를 완료하기 전에는 `draft`를 유지합니다.
