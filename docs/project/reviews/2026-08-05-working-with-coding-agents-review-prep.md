# AI 코딩 에이전트와 일하는 법 검토 준비 기록

## 목적과 현재 상태

이 문서는 공식 Build Track 열한 번째 장인 `src/content/docs/11-ai-native/working-with-coding-agents.md`의 자체 품질 점검과 독립 검토 요청 범위를 기록합니다. 원고는 비개발자가 코딩 에이전트의 요청 유형·작업 계약·권한·증거·상태 메시지·세션·병렬 작업과 완료 보고를 판정하는 `draft`이지만 작성 맥락을 공유하지 않은 독립 기술·편집 검토와 비개발자 독자 테스트를 아직 통과하지 않았습니다.

2026-08-05 현재 호스트 Claude Code 로그인과 Pro 구독은 확인됐지만 `claude-opus-5`, 추론 강도 `max` 요청은 원고 읽기 전에 오전 7시 KST 재설정 세션 한도로 종료됩니다. 한도 초기화 이후 아래 계약으로 이 장을 읽기 전용 독립 검토 대기열에 추가합니다. 계정 식별 정보는 기록하지 않으며, 이 준비 문서는 독립 검토 요청이나 완료를 증명하는 `reviewEvidence`가 아닙니다.

## 자체 품질 루브릭

| 항목 | 점수 | 근거와 남은 한계 |
|---|---:|---|
| 독자 문제 | 2 | “해줘” 요청에서 에이전트가 목표·권한·완료를 추측하고 비개발자가 중간 상태와 실제 증거를 구분하지 못하는 구체적인 상황에서 시작합니다. |
| 정확성 | 2 | 모델·도구·하네스, 답변·진단·변경·외부 실행, 계획·구현·검증, tracked·untracked, 증거 층, 세션·병렬 작업과 Git·배포 게이트를 역할과 한계로 구분합니다. |
| 구조 | 2 | 기준 상태에서 목표·비목표·계획·한 단위 변경·검증·독립 리뷰·handoff로 돌아오는 루프를 작업 브리프·권한·출력 해석·완료 인수에 연결합니다. |
| 쉬운 설명 | 2 | 공동 작업실의 외부 작업자·안전 수칙·열쇠·검사대·인계 기록 비유와 실제 저장소 하네스 사례를 정식 용어에 연결합니다. |
| 비유 한계 | 2 | 에이전트의 제한된 컨텍스트·압축·대규모 명령 피해·그럴듯한 설명과 실행의 차이를 명시합니다. |
| 판단 기준 | 2 | 요청 동사·피해 반경·여덟 요소 작업 계약·증거 여섯 층·명령 수량·권한 단계·수용 기준별 직접 증거로 행동과 완료를 판정하게 합니다. |
| 실패 모드 | 2 | 모호한 목표·분석 뒤 수정·계획 오인·좁은 테스트·untracked 누락·fallback·timeout 재시도·자체 리뷰·컨텍스트·병렬 동의·Git/배포 혼용을 예방·복구와 연결합니다. |
| 실전 연결 | 2 | 실제 `AGENTS.md`·컨텍스트·로드맵·작업 브리프·검증 명령, 읽기 전용·구현 요청 예시, 작업 전·인수 체크리스트와 재작성 연습을 제공합니다. |
| 근거 | 2 | OpenAI Harness Engineering과 Anthropic 장시간 에이전트 하네스의 공식 공개 사례에 확인일·적용 범위를 연결하고, 특정 조직 사례를 단일 표준이나 현재 제품 기능으로 일반화하지 않습니다. |

합계는 18점 중 18점입니다. 자체 점검에서 치명 항목은 발견하지 못했지만, 이 점수는 독립 검토나 `ready` 판정을 대신하지 않습니다.

## 자체 점검에서 보완한 범위

1. 코딩 에이전트를 모델·도구·하네스 세 층의 작업 시스템으로 정의하고 제품별 기능 차이를 표시했습니다.
2. 공동 작업실 외부 작업자 비유에 제한된 컨텍스트·압축·대규모 명령·설명과 실행 오인의 한계를 추가했습니다.
3. 답변·검토·진단·변경·외부 실행 요청이 허용하는 행동 범위를 구분했습니다.
4. 기존 원형 루프를 모바일에서도 읽을 수 있는 세로형 상태·목표·계획·변경·검증·독립 리뷰·handoff SVG와 Mermaid로 개선했습니다.
5. dirty·untracked·ignored·최초 커밋 전 상태와 실행 환경을 포함한 변경 전 기준 상태 확인을 추가했습니다.
6. 현재 근거·목표·비목표·범위·권한·수용 기준·검증·보고의 여덟 요소 작업 계약으로 내부 템플릿을 동기화했습니다.
7. 계획과 실행, 가장 작은 독립 작업과 정적 읽기부터 사람 검토까지 증거의 여섯 층을 구분했습니다.
8. 테스트 명령·환경·종료 코드·통과·실패·건너뜀과 수정 전 실패를 읽는 절차를 추가했습니다.
9. snapshot·checkpoint·dry-run·fallback·retry·timeout·blocked·compaction·handoff와 status·tool call·exit code·stdout·stderr 용어를 실제 판단 질문에 연결했습니다.
10. 권한을 로컬 기본·작업별 승인·별도 보안 승인으로 나누고 현재 저장소의 실제 하네스와 원격 미검증 경계를 사례로 연결했습니다.
11. 세션 분리·파일 기반 handoff와 병렬 에이전트의 쓰기 소유권·공유 자원·통합 책임·재검증을 추가했습니다.
12. 읽기 전용 상태 점검·한 단위 구현 요청, 완료 보고, 작업 전·인수 체크리스트와 작업 계약 재작성 연습을 추가했습니다.

## 독립 검토 요청 계약

Claude Code는 다음 파일만 읽고 수정 없이 검토합니다.

- `AGENTS.md`
- `PROJECT_CONTEXT.md`
- `ROADMAP.md`
- `RULES.md`
- `WORKSPACE_MAP.md`
- `docs/project/content-lifecycle.md`
- `docs/project/quality-rubric.md`
- `docs/project/editorial-guide.md`
- `research/source-map.md`
- `templates/chapter-template.md`
- `templates/agent-task-brief-template.md`
- `src/content/docs/11-ai-native/working-with-coding-agents.md`
- `src/content/docs/11-ai-native/context-spec-harness-loop.md`
- `src/content/docs/11-ai-native/permissions-sandbox-worktrees.md`
- `src/content/docs/11-ai-native/agent-review-and-verification.md`
- `src/content/docs/reference/agent-output-glossary.md`
- `src/content/docs/09-git-github/git-and-github.md`
- `src/content/docs/08-quality/testing-strategy.md`
- `src/content/docs/10-deployment-operations/build-deploy-domain-dns.md`
- `src/content/docs/10-deployment-operations/logs-monitoring-backup.md`
- `src/assets/diagrams/agent-feedback-loop.svg`
- `src/assets/diagrams/source/agent-feedback-loop.mmd`
- `package.json`
- `VERIFICATION_REPORT.md`

검토자는 다음 질문에 답해야 합니다.

1. 코딩 에이전트를 모델·도구·하네스 세 층으로 설명한 정의가 제품별 차이를 과장 없이 보여주나요?
2. 공동 작업실 외부 작업자 비유가 비개발자에게 도움이 되며 컨텍스트·압축·대규모 명령·설명과 실행 차이의 한계를 충분히 다루나요?
3. 답변·검토·진단·변경·외부 실행의 권한 경계가 실제 사용 의도를 안전하게 해석하되 과도하게 경직되지 않았나요?
4. 상태·목표·계획·변경·검증·독립 리뷰·handoff 루프가 각 단계의 입력·출력·실패와 되돌아갈 조건을 정확히 설명하나요?
5. dirty·untracked·ignored·최초 커밋 전 저장소와 실행 환경을 포함한 기준 상태 확인이 Git의 실제 증거 범위와 맞나요?
6. 여덟 요소 작업 브리프와 내부 템플릿이 목표·비목표·권한·수용 기준·검증·인수인계를 충분히 고정하나요?
7. 계획과 실행, 가장 작은 독립 작업의 정의가 큰 목표를 불필요하게 축소하거나 과한 절차를 강요하지 않나요?
8. 정적 읽기·자동 검사·빌드·실제 런타임·외부 운영·사람 검토의 증거 층과 테스트 보고 재판정이 완료 과장을 막나요?
9. snapshot·dry-run·fallback·retry·timeout·blocked·compaction·handoff와 exit code·stdout·stderr·skipped 설명에 중요한 오류나 도구 종속적 단정이 있나요?
10. 로컬 기본·작업별 승인·별도 보안 승인의 권한 분류와 승인 범위 확인이 실제 피해 반경을 안전하게 다루나요?
11. 이 저장소의 `AGENTS.md`·컨텍스트·로드맵·검증·원격 미검증 사례가 실제 파일·현재 상태와 일치하나요?
12. 세션 분리·파일 기반 handoff가 컨텍스트 압축과 변하기 쉬운 외부 상태를 정직하게 다루나요?
13. 병렬 에이전트의 독립 범위·쓰기 소유권·공유 자원·통합 책임·재검증과 “다수 동의는 독립 증거가 아니다”라는 설명이 정확한가요?
14. 읽기 전용·구현 요청 예시, 완료 보고와 두 체크리스트가 비개발자의 위임·중간 관찰·완료 인수 능력을 관찰 가능하게 검증하나요?
15. OpenAI·Anthropic 사례의 적용 범위가 원고 주장을 직접 뒷받침하는지, 품질 루브릭 9개 항목을 0~2점으로 평가하고 치명 항목과 추가 출처 확인 목록을 판정해 주세요.

결과는 `P0 치명 오류`, `P1 review 전 필수`, `P2 개선 권장`, `잘된 점`, `루브릭 점수`, `추가 출처 확인 목록` 순으로 작성하고 각 지적에 대상 제목이나 짧은 대상 문구와 근거를 포함해야 합니다. 웹 검색, 파일 수정, Bash, 외부 플러그인과 하위 에이전트는 사용하지 않습니다.

## 승격 경계

Opus 검토 결과가 생성되면 Codex가 각 지적을 실제 원고와 프로젝트 규칙에 대조해 수용·부분 수용·기각으로 재판정합니다. AI 검토만으로 상태를 올리지 않으며, 사람 기술·편집 검토와 비개발자 독자 테스트를 완료하기 전에는 `draft`를 유지합니다.
