---
title: "권한·샌드박스·worktree"
description: "에이전트의 read·write·network·exec·외부 부작용을 최소 권한, 승인, 샌드박스, worktree와 복구 증거로 통제합니다."
contentStatus: ready
reviewEvidence:
  - "conformance: docs/project/public-beta-content-audit.md"
  - "sources: research/source-map.md"
  - "automated: docs/project/reviews/public-beta-1/ready-promotion-qa.md#자동-검사"
  - "browser: docs/project/reviews/public-beta-1/ready-promotion-qa.md#브라우저-검사"
  - "owner: docs/project/reviews/public-beta-1/owner-approval.md"
  - "request: docs/project/reviews/public-beta-1/r23-ai-support-request.md"
  - "independent: docs/project/reviews/public-beta-1/r23-ai-support-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r23-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - read·write·network·exec와 approval·sandbox의 서로 다른 보호 범위를 설명한다
  - worktree가 분리하는 Git 상태와 공유하는 저장소·외부 자원을 구분한다
  - 파괴적 작업·비밀·외부 효과를 최소 권한과 복구·부정 검증으로 통제한다
sidebar:
  order: 4
---

## 먼저 결론

에이전트 안전은 “허용”과 “금지” 두 칸으로 끝나지 않습니다. 무엇을 **읽고**, 어디에 **쓰며**, 어떤 프로그램을 **실행하고**, 어느 네트워크·계정·외부 시스템에 영향을 줄 수 있는지 따로 정해야 합니다. 그 위에 사람의 승인, 운영체제 또는 도구의 샌드박스, Git worktree, 비밀 관리와 복구 절차가 서로 다른 층으로 놓입니다.

최소 권한은 필요한 권한을 0으로 만드는 원칙이 아니라 현재 한 작업에 필요한 최소 자원과 행동만 주는 원칙입니다. 샌드박스는 피해 반경을 줄이지만 허용된 폴더 안의 삭제나 허용된 도메인으로의 유출을 자동으로 막지 않습니다. worktree는 Git 작업 상태를 분리하지만 database·port·cache·secret·remote service를 격리하지 않습니다.

## 한 문장 정의

**에이전트 실행 경계**는 주체·대상·행동·환경·시점별로 capability를 제한하고, 위험한 예외는 승인·격리·관찰·복구 증거를 갖춘 별도 결정으로 다루는 계약입니다.

## 비유와 비유의 한계

권한은 건물의 출입 카드, 샌드박스는 작업 가능한 방, worktree는 개인별 작업대에 비유할 수 있습니다. 출입 카드는 어느 문을 열 수 있는지, 방은 사고가 퍼질 범위, 작업대는 서로의 진행 중 부품이 섞이지 않게 하는 경계입니다.

그러나 소프트웨어에서는 작업대가 달라도 같은 창고와 외부 배송 시스템을 쓸 수 있습니다. 별도 worktree의 두 에이전트가 같은 database 행·port·cloud project를 바꿀 수 있고, 방 안에서 실행한 스크립트가 물려받은 토큰으로 외부 API를 호출할 수 있습니다. 승인 버튼도 명령의 대상·확장 결과·업무 의미가 맞다는 보증서가 아닙니다.

## capability·approval·sandbox를 구분합니다

- **capability**: 파일 읽기, 파일 쓰기, 명령 실행, network 요청, 외부 서비스 변경처럼 실제로 가능한 행동입니다.
- **approval**: 특정 capability를 이번 대상·목적·시점에 사용해도 된다는 사람 또는 정책의 결정입니다.
- **sandbox**: 허용된 행동이 넘어갈 수 없는 파일·network·process·system resource 경계를 기술적으로 집행하는 층입니다.
- **worktree**: 한 Git repository에 연결된 별도 working tree·index·HEAD로 진행 중 파일 상태를 분리하는 Git 기능입니다.

승인이 있어도 오타 난 경로나 잘못된 운영 계정이면 사고가 납니다. 샌드박스 안에서도 중요한 workspace 파일을 지울 수 있습니다. worktree가 깨끗해도 같은 remote branch에 push하거나 같은 database를 바꾸면 충돌합니다. 각 층이 막는 것과 막지 못하는 것을 함께 기록해야 합니다.

## 권한을 열 개의 질문으로 나눕니다

| 경계 | 확인할 질문 | 대표 위험 | 직접 검증 |
|---|---|---|---|
| read | 어느 repository·directory·file·database row를 읽나요? | 비밀·개인정보·다른 프로젝트 유출 | 허용·거절 경로와 로그·출력의 민감값 검사 |
| write | 어느 기존 파일·새 파일·data를 바꾸나요? | 사용자 변경 덮어쓰기·범위 밖 수정 | `status`, 전체·staged diff, 변경 전후 data |
| network | 어떤 host·protocol·request가 허용되나요? | prompt injection·다운로드·정보 반출 | allowlist·실제 request log·예상 밖 host 0건 |
| exec | 어떤 binary·script·subprocess를 어느 cwd에서 실행하나요? | shell expansion·hook·installer·child process | 최종 argv·cwd·exit code·child effect |
| approval | 누가 어떤 정확한 대상과 효과를 언제 허용했나요? | 모호한 영구 승인·approval fatigue | 승인 기록·대상·만료·예외 범위 |
| sandbox | 파일·network·process 중 무엇을 OS 또는 도구가 집행하나요? | 실패 시 다른 실행 방식으로 전환(fallback)·격리 밖 실행 예외(escape hatch)·허용 경로 내부 피해 | 허용·차단을 확인하는 작은 시험(probe)과 fallback 설정 |
| worktree | 어떤 repository·branch·HEAD·index가 이 폴더에 연결됐나요? | 다른 작업 혼입·공유 ref·공용 외부 자원 충돌 | `git worktree list`, root·branch·HEAD·status |
| destructive | 삭제·overwrite·reset·migration의 정확한 대상은 무엇인가요? | 복구 불가·범위 확장·부분 성공 | 대상 해석·preview·backup·rollback rehearsal |
| secrets | 어떤 token·key·credential이 process와 child에 보이나요? | source·log·artifact·network 유출 | 최소 scope·환경 정리·secret scan·rotation 기록 |
| external effect | push·PR·message·deploy·DNS·결제·운영 변경 중 무엇인가요? | 로컬 성공을 외부 완료로 오해·실사용 영향 | 공급자 상태·식별자·실제 응답·승인·복구 |

“network read-only”도 부작용 0을 뜻하지 않을 수 있습니다. 요청이 외부 로그를 만들거나 rate limit을 소비하고, 인증된 `GET`이 민감 데이터를 가져올 수 있습니다. 로컬 commit 자체는 Git 이력의 변경이지만 연결된 hook이 외부 호출을 한다면 그 호출은 별도 외부 효과입니다. 다른 로컬 명령도 package script, socket 또는 물려받은 cloud credential을 통해 외부 효과를 만들 수 있습니다. 명령 이름보다 실제 데이터 흐름과 효과를 봅니다.

## 최소 권한을 작업 단위로 설계합니다

NIST의 least privilege 정의는 사용자 또는 사용자를 대신하는 프로세스에 맡은 작업 수행에 필요한 최소 자원과 인가만 부여하는 원칙을 설명합니다. 에이전트에는 다음 순서로 적용할 수 있습니다.

1. **목표와 비목표를 고정합니다.** 무엇을 하지 않는지 없으면 최소 범위를 계산할 수 없습니다.
2. **정확한 대상을 해석합니다.** repository root, 허용 파일, fixture, host, account, environment를 실제 값으로 확인합니다.
3. **진단과 변경을 나눕니다.** 원인 확인에는 read·비파괴 exec만, 구현에는 지정 write만 제공합니다.
4. **외부 효과를 별도 승인합니다.** network access와 remote write, commit과 push, build와 deploy를 합치지 않습니다.
5. **짧은 수명과 좁은 scope를 씁니다.** 필요할 때만 credential·예외를 주고 작업 뒤 회수합니다.
6. **허용과 거절을 함께 시험합니다.** 정상 경로만 성공하면 권한 경계가 집행됐는지 알 수 없습니다.

권한을 넓히면 에이전트가 더 정확해지는 것이 아니라 가능한 행동과 피해 범위가 커집니다. 반복 승인에 지쳤다고 영구 full access를 주기 전에 작업을 더 작게 나누고 자주 쓰는 비파괴 명령만 좁게 정책화합니다.

## 샌드박스는 격리 범위를 직접 확인합니다

샌드박스는 프로그램이 접근할 수 있는 파일·network·process·system resource를 제한하는 실행 환경입니다. Apple의 현재 macOS App Sandbox 문서는 kernel-level access control로 파일·network 등 자원 접근을 필요한 entitlement에 제한해 성공한 공격의 피해를 줄이는 제품 사례를 설명합니다. 공격 자체를 예방하거나 모든 샌드박스가 같은 기술을 쓴다는 뜻은 아닙니다.

현재 코딩 에이전트 제품도 파일과 network 경계를 서로 다르게 구성합니다. 2026년 8월 13일 확인한 OpenAI 자료는 Codex의 sandbox·network 제한과 승인 뒤 확장 가능성을, current openai/codex 저장소 템플릿은 `workspace-write`가 현재 cwd·writable roots 쓰기와 별도 network 상태를 가진다는 좁은 범위를 보여 줍니다. Anthropic의 현재 문서는 Claude Code의 tool permission과 Bash child process의 OS-level filesystem·network sandbox가 보완 관계이며 built-in file tool·computer use·fallback·escape hatch는 다른 경계를 가진다고 명시합니다.

이 제품 설명은 날짜와 환경에 따라 바뀝니다. `read-only`, `workspace-write`, `plan mode`, auto-allow 같은 이름을 다른 제품·버전·host의 동일 보장으로 옮기지 않습니다. 구체 기능은 [현재 도구 매핑](../../reference/current-tool-mapping/)과 공식 문서를 실행 시점에 다시 확인하고, 용어 자체는 [에이전트 출력 용어집](../../reference/agent-output-glossary/)에서 대상·시점·부작용·증거로 해석합니다.

### 샌드박스 검증 질문

- sandbox 시작 실패가 hard failure인가요, 경고 뒤 unsandboxed fallback인가요?
- read와 write 경로는 각각 어디까지이며 symlink·temporary directory·writable root는 어떻게 처리되나요?
- network는 전면 차단·도메인 allowlist·proxy 중 무엇이며 DNS·redirect·TLS·socket은 어디서 집행되나요?
- shell의 child process, package script, Git hook, MCP, browser, desktop computer use도 같은 경계를 상속하나요?
- 환경 변수·SSH agent·cloud credential·local socket이 process에 노출되나요?
- sandbox 밖 실행을 허용하는 escape hatch와 승인 주체가 있나요?

문서만 읽고 끝내지 말고 비민감 fixture에서 허용 경로 쓰기 성공, 범위 밖 쓰기 거절, 예상 밖 host 차단을 시험합니다. 실패가 sandbox 때문인지 application 오류인지 구분하고, 차단 시험이 실제 민감 경로나 운영 host에 접근하도록 만들지 않습니다.

## Git worktree가 분리하는 것과 공유하는 것

Git 공식 문서에서 repository는 main worktree 하나와 linked worktree 여러 개를 가질 수 있고, linked worktree는 `HEAD`·`index` 같은 per-worktree 파일을 제외한 repository 요소를 공유합니다. 일반적으로 이미 다른 worktree에 checkout된 branch를 새 worktree에 다시 checkout하려 하면 Git이 거절하며, `--force`는 이 안전 경계를 의도적으로 넘는 선택입니다.

worktree가 분리하는 범위:

- 작업 폴더의 tracked·untracked 파일
- per-worktree `HEAD`와 index
- 서로 다른 branch의 진행 중 diff
- worktree별 의존성·build output을 둘 수 있는 경로

worktree가 자동으로 분리하지 않는 범위:

- repository의 공용 object·refs와 일부 config
- remote repository·PR·release·deployment
- database·queue·cache·port·process·browser profile
- 환경 변수·credential·cloud account·external API
- 같은 이름의 fixture·temporary file·output directory가 workspace 밖에 있을 때의 충돌

따라서 “worktree가 다르다”는 말만으로 병렬 쓰기를 허용하지 않습니다. 각 작업에 branch·허용 파일뿐 아니라 port, database schema 또는 fixture ID, output path, browser session, remote write owner를 지정합니다. 같은 파일·data·external resource를 바꾸는 작업은 한 writer로 직렬화하고 통합자가 전체 회귀를 다시 실행합니다.

### worktree 시작과 종료 증거

시작할 때 repository root·worktree path·branch·HEAD·tracked/untracked 상태를 확인합니다. 끝날 때 전체 diff·staged diff·local commit·남은 untracked 파일과 active process를 확인합니다. Git은 clean worktree만 기본 제거하며 강제 제거는 미추적·수정 파일을 잃을 수 있습니다. 수동으로 폴더를 삭제하거나 옮기기보다 `git worktree remove`·`move`·`repair`의 현재 공식 동작과 clean 상태를 확인합니다.

worktree에서 커밋하거나 로컬 브랜치를 병합하면 같은 저장소의 로컬 이력이 바뀝니다. 로컬 작업의 승인이 원격 push, PR 생성, 원격 PR 병합, 배포나 공개까지 허용하지는 않습니다. 로컬 병합 때 실행되는 hook이 외부 서비스를 호출한다면 그 효과도 별도로 확인합니다.

## 파괴적 작업은 대상·preview·복구 순서로 다룹니다

삭제·overwrite·history rewrite·migration·권한 변경 전에는 다음을 지킵니다.

1. 현재 cwd·repository root·최종 absolute target을 읽기 전용으로 확인합니다.
2. unresolved variable·glob·command substitution·symlink가 대상을 넓히는지 확인합니다.
3. 도구가 문서화한 비변경 조회·preview로 대상 목록을 확인합니다. Interactive mode는 실제 삭제·적용도 할 수 있으므로 목록 조회까지만 허용하고 실행 선택 전에 멈춥니다. 조회와 적용을 안전하게 구분할 수 없다면 승인 전 확인 수단으로 사용하지 않습니다.
4. 복구 가능한 이동·새 파일·revert를 우선하고 backup·restore 절차와 소유자를 확인합니다.
5. 사용자 변경·미추적 파일·다른 worktree·운영 data가 포함되면 중단합니다.
6. 정확한 대상과 효과를 승인받고 한 단위만 실행합니다.
7. 종료 코드뿐 아니라 남은 파일·data·외부 상태와 복구 가능성을 재검증합니다.

`dry-run`은 보편 안전 모드가 아닙니다. 예를 들어 Git의 current `git clean --dry-run` 문서는 파일을 제거하지 않고 해당 명령이 제거할 대상을 보여 주는 범위만 보장합니다. 이 사실을 다른 도구의 dry-run이 network request·temporary file·hook·external effect를 모두 막는다는 주장으로 확대하지 않습니다. preview 출력도 glob·ignore·권한·race 때문에 실제 실행 시점과 달라질 수 있으므로 target과 상태를 다시 확인합니다.

## 비밀과 외부 효과는 파일 권한 밖의 문제입니다

비밀은 소스에 쓰지 않는 것만으로 충분하지 않습니다. parent process의 환경 변수와 credential helper가 child process에 상속될 수 있고, 에러 로그·test snapshot·build artifact·browser bundle·screen capture·AI 대화에 남을 수 있습니다.

- 명백한 가짜 fixture를 사용하고 실제 token·개인정보를 prompt와 test에 넣지 않습니다.
- 필요한 credential만 짧은 수명·최소 scope로 주고 production과 test 계정을 분리합니다.
- 명령 전체 출력보다 비밀 없는 필드명·status·식별 범위를 기록합니다.
- diff·log·artifact·browser source와 ignored evidence도 secret scan 범위에 넣습니다.
- 노출이 의심되면 출력을 숨기는 것으로 끝내지 않고 credential을 회수·회전하고 접근 기록과 외부 효과를 조사합니다.

network access를 허용해도 remote write가 승인된 것은 아닙니다. 공식 문서 읽기, package download, Git fetch, push, 메시지 전송, database write, deploy, DNS 변경, 결제는 서로 다른 효과입니다. 가능하면 read-only credential과 domain allowlist를 쓰고, write API는 대상 account·project·branch·environment·idempotency·rollback을 별도 승인합니다.

## 진단 계약과 변경 계약을 분리합니다

모임 W-03의 “중복 참가” 문제를 예로 들면 진단은 다음처럼 시작할 수 있습니다.

```text wrap
현재 repository·branch·HEAD·dirty 상태와 W-03 요구, 참가 API·schema·test만 읽어라.
파일·database·fixture·외부 상태를 바꾸지 말고 중복 가능 경로와 현재 증거를 보고하라.
네트워크·새 패키지·commit·push·deploy는 금지다.
확인한 파일·명령과 미검증 가정을 분리하고, 변경이 필요하면 먼저 가장 작은 계획을 제안하라.
```

진단에서 원인이 확인되고 변경이 승인되면 별도 계약으로 좁힙니다.

```text wrap
이번 변경은 W-03 활성 참가 중복 방지 한 단위다.
허용 파일은 참가 처리·schema migration·해당 integration test와 명시적 가상 fixture뿐이다.
실제 사용자·운영 database·remote service·network·새 의존성·push·deploy는 범위 밖이다.
격리된 실제 database에서 같은 participant의 독립 요청·연결로 경쟁 구간을 통제하거나 관측하고, 사전 조회만 하는 결함 구현을 시험이 검출하는지 확인하라.
성공·거절 결과와 최종 활성 행 1건·부분 저장 0건, 미인증·타인 취소 거절을 대조하라. 경쟁 구간을 입증하지 못하면 오탐으로 닫지 말고 현재 시험에서 미재현·동시성 검증 미완료로 보고하라.
변경 전 상태·migration rollback·실패 시 중단 조건을 기록하고, diff·test 명령·실행 수·종료 코드·최종 data를 보고하라.
```

이것은 교육용 책임 계약입니다. 이 저장소에 실제 모임 서비스·database·migration이 있거나 시험을 수행했다는 뜻이 아닙니다. 구체 동시성·고유성·rollback은 선택한 database·runtime·배포 환경의 현재 공식 문서와 격리된 실행 증거로 확인해야 합니다.

## 흔한 실패와 복구

### 범위 밖 경로를 잘못 해석함

명령을 중단하고 cwd·root·absolute target·symlink·glob 결과를 다시 확인합니다. 이미 썼다면 더 수정하지 않고 diff·file metadata·backup에서 영향을 특정한 뒤 사용자 변경을 보존하는 복구를 선택합니다.

### sandbox가 시작되지 않았는데 계속 실행함

현재 실행이 fallback인지 확인하고 process를 중단합니다. sandbox unavailable을 hard failure로 만들 수 있는지 검토하고, 불가하면 별도 container·비민감 fixture·read-only 진단 같은 더 강한 외부 격리 없이 권한을 넓히지 않습니다.

### worktree는 달라도 같은 외부 자원을 바꿈

두 writer를 멈추고 database·port·cache·remote branch·deployment의 실제 owner와 변경 순서를 확인합니다. 권위 상태를 재조회하고 partial effect를 복구한 뒤 고유 resource namespace 또는 한 writer로 재시작합니다.

### 응답 실패를 rollback으로 오해함

network 오류 뒤 같은 write를 무조건 반복하지 않습니다. request ID·idempotency key·권위 있는 data·공급자 상태를 재조회해 commit 여부를 확인하고, 중복 방지 계약에 따라 재시도하거나 사람이 조정합니다.

### 비밀이 출력이나 artifact에 노출됨

출력을 단순 삭제하기 전에 credential을 회수·회전하고 접근 로그·remote effect를 조사합니다. 추적 이력·artifact·ignored evidence·공유 대화의 노출 범위를 확인하고 안전 담당 절차로 복구합니다.

### 승인 피로로 넓은 영구 예외를 줌

예외를 회수하고 반복 작업을 더 작은 비파괴 prefix·정확한 경로·짧은 만료로 재설계합니다. 파괴·비밀·운영·remote write는 빈도가 높아도 별도 승인과 사람 판단을 유지합니다.

## 수용 증거

안전 통제는 설정 파일 존재가 아니라 허용·거절·복구 결과로 확인합니다.

- permission matrix: 주체·대상·행동·환경·승인 주체와 만료
- sandbox: 비민감 허용 probe 성공, 범위 밖 file·host probe 거절, fallback·escape hatch 상태
- worktree: list·root·branch·HEAD·status, 외부 resource namespace와 writer owner
- destructive action: 해석된 target·preview·backup/restore·실제 후 상태
- secrets: 실제 값 없는 config key, diff·log·artifact scan, rotation·revocation 기록
- external effect: remote object ID·account·project·environment·request result·rollback과 공개 사용자 확인
- handoff: 실행하지 않은 검증, 남은 권한·active process·temporary state와 정리 결과

하나의 PASS로 모든 층을 닫지 않습니다. 파일 sandbox 통과는 network·MCP·desktop action을 증명하지 않고, local Git clean은 remote·database·deployment 상태를 증명하지 않습니다.

## 확인 체크리스트

- [ ] read·write·network·exec·external effect를 서로 다른 capability로 적었나요?
- [ ] 정확한 repository·path·branch·HEAD·account·environment를 확인했나요?
- [ ] 진단 계약과 변경 계약, local commit과 push·deploy·publication을 분리했나요?
- [ ] approval의 대상·효과·시점·만료와 승인 주체가 명확한가요?
- [ ] sandbox의 file·network·process 범위와 fallback·escape hatch를 실제로 확인했나요?
- [ ] worktree 밖의 database·port·cache·credential·remote writer를 분리했나요?
- [ ] 파괴적 작업의 target expansion·preview 범위·backup·rollback을 확인했나요?
- [ ] 비밀이 source·log·artifact·browser·evidence에 남지 않는지 검사했나요?
- [ ] 허용 경로뿐 아니라 범위 밖 read/write/network가 거절되는지 시험했나요?
- [ ] 실패 뒤 권위 상태를 재조회하고 partial external effect를 복구했나요?

## 짧은 연습

에이전트가 “테스트를 위해 운영과 같은 database에 fixture를 넣고, 새 package를 설치하며, 끝나면 `dry-run`으로 정리하겠다”고 제안했다고 가정합니다.

1. read·write·network·exec·secret·external effect를 분리해 적습니다.
2. 운영과 같은 database 대신 필요한 최소 격리와 가상 fixture를 설계합니다.
3. package install과 cleanup 도구의 실제 문서에서 확인할 부작용을 적습니다.
4. worktree가 이 작업에서 분리하지 못하는 자원을 적습니다.
5. 중단 조건, rollback, 권위 상태 재조회와 거절 시험을 적습니다.

## 관련 장과 공식 자료

- [에이전트 결과 리뷰와 검증](../agent-review-and-verification/)은 읽기 전용 독립 검토와 finding 재판정의 증거 범위를 설명합니다.
- [AI 코딩 에이전트와 일하는 법](../working-with-coding-agents/)은 권한·수용 기준·검증·승인을 한 작업 계약에 넣는 방법을 연결합니다.
- [Git과 GitHub는 다릅니다](../../09-git-github/git-and-github/)는 working tree·index·local commit·remote push를 구분합니다.
- NIST least privilege: https://csrc.nist.gov/glossary/term/least_privilege
- Apple macOS App Sandbox: https://developer.apple.com/documentation/xcode/configuring-the-macos-app-sandbox
- Git worktree: https://git-scm.com/docs/git-worktree.html
- Git clean: https://git-scm.com/docs/git-clean.html
- OpenAI Codex security boundary 사례: https://openai.com/index/introducing-upgrades-to-codex/
- Anthropic Claude Code permissions: https://code.claude.com/docs/en/permissions
- Anthropic Claude Code sandboxing: https://code.claude.com/docs/en/sandboxing

위 제품·도구 자료는 2026년 8월 13일 확인한 문서 상태의 좁은 범위입니다. 출처별 직접 적용·실패 응답·일반화 금지선은 저장소의 `research/source-map.md`에서 관리하며, 현재 제품 상태 이름을 보편 안전 보장으로 사용하지 않습니다.
