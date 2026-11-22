---
title: "되돌리기·충돌·릴리스"
description: "Git의 복구 명령을 상태와 영향 범위에 맞게 구분하고 충돌과 릴리스를 안전하게 다룹니다."
contentStatus: ready
reviewEvidence:
  - "conformance: docs/project/public-beta-content-audit.md"
  - "sources: research/source-map.md"
  - "automated: docs/project/reviews/public-beta-1/ready-promotion-qa.md#자동-검사"
  - "browser: docs/project/reviews/public-beta-1/ready-promotion-qa.md#브라우저-검사"
  - "owner: docs/project/reviews/public-beta-1/owner-approval.md"
  - "request: docs/project/reviews/public-beta-1/r21-git-support-request.md"
  - "independent: docs/project/reviews/public-beta-1/r21-git-support-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r21-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - restore·revert·reset·rebase의 대상과 이력 영향을 구분한다
  - 충돌을 양쪽 의도의 통합과 회귀 검증 문제로 해결한다
  - 태그·버전·릴리스·배포와 운영 복구를 서로 다른 상태로 판정한다
sidebar:
  order: 4
---
## 왜 필요한가

“어제 상태로 되돌려 주세요”라는 요청은 위험할 정도로 모호합니다. 아직 커밋하지 않은 파일을 버릴지, stage만 취소할지, 로컬 커밋의 구성을 바꿀지, 이미 팀과 공유한 커밋의 효과를 새 이력으로 취소할지, 실제 배포와 데이터까지 복구할지에 따라 안전한 방법이 전혀 다릅니다.

Git 명령이 성공해도 외부 API 호출, 데이터베이스 변경, 배포된 아티팩트와 사용자에게 전달된 메시지는 자동으로 되돌아가지 않습니다. 복구의 첫 단계는 명령 선택이 아니라 현재 상태, 보존할 증거, 영향받은 사람과 시스템을 분류하는 일입니다.

## 한 문장 정의

**되돌리기는 보존할 상태와 이력을 정한 뒤 변경 효과를 취소하거나 새 기준으로 옮기는 작업이고, 충돌 해결은 서로 다른 변경 의도를 최종 요구에 맞게 통합하는 작업이며, 릴리스는 특정 버전과 아티팩트를 사용자에게 제공하기로 승인하고 추적하는 절차입니다.**

## 문서 편집 이력에 비유하기

작업 파일을 이전 내용으로 바꾸는 것은 아직 제출하지 않은 초안을 고치는 일, revert는 이미 배포된 공지의 오류를 새 정정 공지로 남기는 일, reset이나 rebase는 개인 초안의 제출 순서를 다시 구성하는 일에 비유할 수 있습니다. 충돌은 두 편집자가 같은 문단을 다른 의도로 바꿔 최종 문장을 함께 결정해야 하는 상황입니다.

### 비유가 깨지는 지점

Git은 커밋과 파일 이력을 관리하지만 이미 전송된 이메일, 결제, 데이터베이스 행, 캐시와 배포 환경을 직접 복구하지 않습니다. 커밋 ID는 부모와 내용에서 만들어지므로 rebase처럼 부모를 바꾸는 작업은 문장이 같아도 새 커밋을 만들 수 있습니다. 종이 문서와 달리 원격 복제본과 다른 사람의 브랜치가 있어 공유 이력을 다시 쓰면 협업자의 기준까지 어긋날 수 있습니다.

## 명령 전에 여섯 상태를 분류하세요

| 현재 상태 | 보존할 질문 | 일반적인 접근 방향 | 주의할 손실·외부 범위 |
|---|---|---|---|
| 미커밋 작업 트리 | 사용자 작업·untracked 파일을 남겨야 하나요? | diff·status를 보존한 뒤 필요한 경로만 restore 여부 판단 | restore 대상의 미커밋 내용은 사라질 수 있음 |
| staged 변경 | stage만 취소하고 파일 수정은 남길까요? | staged diff 확인 뒤 index만 복원 | 작업 트리까지 함께 바꾸지 않도록 범위 확인 |
| 로컬 전용 커밋 | commit 구성·순서를 고칠까요, 효과만 취소할까요? | 보호 참조·diff 뒤 reset/rebase 또는 새 commit 검토 | commit ID·branch tip·index·파일이 달라질 수 있음 |
| 이미 공유한 커밋 | 다른 사람이 기준으로 사용하나요? | 보통 revert나 새 수정 commit으로 이력을 보존 | 강제 push·rebase는 협업자의 이력과 링크를 깨뜨릴 수 있음 |
| 병합·릴리스 후보 | 어떤 tag·artifact·검증을 취소하나요? | 후보 폐기·새 버전·정정 release 결정 | tag와 GitHub Release, 배포는 별도 상태 |
| 이미 운영에 반영 | 사용자·데이터·외부 효과가 무엇인가요? | 배포 rollback/roll-forward와 데이터 복구 절차 | Git만으로 DB·메시지·결제·DNS를 복구할 수 없음 |

상태를 확인하기 전 파괴 가능성이 있는 명령을 실행하지 않습니다. 먼저 `git status`, 관련 diff, branch와 HEAD, 최근 이력, remote/upstream, 대상 commit을 읽고 필요한 경우 패치·보호 브랜치·독립 사본처럼 되돌아갈 기준을 만듭니다. 무엇을 보존하는지 모른 채 “백업 브랜치가 있으니 안전하다”고 말할 수도 없습니다. 보호 브랜치는 커밋된 이력을 가리킬 뿐, tracked 파일의 미커밋 수정·index의 별도 내용·untracked 파일·외부 상태를 보존하지 않습니다.

예를 들어 HEAD=A, index=B, 작업 파일=C이고 별도 untracked 파일이 있다면 A를 가리키는 참조만으로 B·C·새 파일을 복원할 수 없습니다. staged·unstaged·untracked 각각의 보존 위치와 복원 방법을 확인합니다. 패치도 어떤 기준 사이의 비교인지, 새 파일·바이너리 등 필요한 내용을 포함하는지 따로 확인하며 기본 diff 하나로 모든 상태를 보존했다고 판단하지 않습니다. 승인된 범위의 사본 등 필요한 수단을 선택하고 자동 stash나 사용자 변경 삭제로 보존을 대신하지 않습니다.

## restore·revert·reset·rebase를 구분하세요

### `git restore`: 작업 트리나 index의 파일 상태를 복원합니다

restore는 기본적으로 특정 파일의 작업 트리 내용을 index에서 복원합니다. `--staged`가 있으면 기본 source는 HEAD이며 복원 대상은 index입니다. `--source`로 원본을 명시하거나 옵션으로 작업 트리와 index를 함께 바꿀 수도 있습니다. 현재 브랜치가 가리키는 commit 자체를 이동하지는 않습니다. 대상 경로·원본·복원 위치를 정확히 확인하지 않으면 남겨야 할 미커밋 수정이 사라질 수 있고, source에 없는 tracked 경로는 삭제될 수도 있습니다.

실행 전에 다음을 확인합니다.

- 어떤 경로를 어떤 source에서 복원하나요?
- 작업 트리, index 또는 둘 중 무엇을 바꾸나요?
- diff나 untracked 파일에 보존할 내용이 있나요?
- 복원 후 같은 status·diff 질문으로 결과를 확인할 수 있나요?

### `git revert`: 기존 commit의 반대 변경을 새 commit으로 기록합니다

revert는 branch tip을 과거로 옮기는 대신 기본적으로 선택한 commit의 효과를 취소하는 새 commit을 만듭니다. `--no-commit`은 반대 변경을 index와 작업 트리에 적용하지만 자동으로 새 commit을 만들지 않습니다. 반대 변경 적용·새 commit 생성·원격 공유는 각각 별도 증거로 확인합니다. 이미 공유된 이력을 보존해야 할 때 일반적으로 검토하기 좋은 방법입니다. 다만 “정확히 과거 상태로 시간 이동”하는 것이 아니므로 이후 변경과 충돌하거나 반대 변경이 현재 요구에 맞지 않을 수 있습니다.

merge commit을 revert할 때는 어느 부모를 mainline으로 볼지 결정해야 하고, 그 결정은 이후 같은 변경을 다시 merge할 때의 동작에도 영향을 줄 수 있습니다. 맥락 없이 옵션을 추측하지 말고 원래 merge 의도와 현재 branch graph를 읽으세요.

### `git reset`: branch tip과 index·작업 트리의 기준을 바꿀 수 있습니다

reset은 형식과 mode에 따라 영향 범위가 다르며 단순한 “커밋 취소” 명령이 아닙니다. 아래 목록은 commit을 대상으로 하는 형식의 설명입니다. 경로를 지정하는 형식은 선택한 경로의 index만 바꾸고 HEAD와 작업 트리는 바꾸지 않으므로, stage만 해제하는 후보와 branch tip을 옮기는 후보를 구분해야 합니다.

- `--soft`: branch tip을 옮기고 변경을 staged 상태로 남길 수 있습니다.
- 기본 mixed reset: branch tip과 index를 바꾸되 작업 트리 수정을 남길 수 있습니다.
- `--hard`: branch tip·index·작업 트리를 대상에 맞추며 추적 파일의 로컬 변경을 잃을 수 있습니다. 대상 tracked 파일을 배치하는 데 방해되는 untracked 파일·디렉터리도 제거될 수 있습니다. 모든 untracked 파일을 일괄 삭제한다는 뜻은 아닙니다.

mode 이름을 암기해 바로 실행하지 말고 현재 HEAD·대상 commit·예상 branch tip·index·working tree의 전후 상태를 표로 적으세요. 공유 이력에서 branch를 과거로 옮기고 강제 push하면 다른 사람의 기반을 다시 쓰는 외부 영향이 생깁니다.

### `git rebase`: commit을 새 부모 위에 다시 만듭니다

rebase는 한 branch의 commit을 다른 기준 위에 순서대로 다시 적용해 새 commit ID를 만듭니다. 로컬 전용 작업을 정리하거나 최신 기준에 맞추는 데 유용하지만, 단순한 파일 이동이나 동기화가 아닙니다.

이미 공유한 commit을 rebase하고 강제 push하면 review 링크, commit 참조와 협업자의 branch가 어긋날 수 있습니다. 팀 정책과 공유 여부를 확인하고, 중단·계속·취소 경로와 원래 branch tip을 보존한 뒤 실행합니다. conflict 해결 뒤에는 각 새 commit과 최종 전체 diff를 모두 확인합니다.

## 파괴 가능성이 있는 작업의 안전 계약

1. **대상 고정**: 저장소·worktree·branch·HEAD·대상 commit과 경로를 확인합니다.
2. **상태 분류**: 미커밋·staged·로컬 전용·공유·운영 상태를 구분합니다.
3. **보존**: 필요한 diff, patch, commit ID, 로그와 외부 영향 증거를 안전한 위치에 남깁니다. staged·unstaged·untracked별로 포함된 내용과 복원 방법을 확인하며 보호 참조만으로 미커밋 상태까지 보존했다고 판단하지 않습니다.
4. **예측**: branch tip·index·working tree·remote·운영 상태가 어떻게 바뀔지 적습니다.
5. **최소 범위 실행**: 한 경로나 한 commit처럼 판정 가능한 가장 작은 범위로 실행합니다.
6. **직접 검증**: status·diff·log·테스트·데이터·사용자 흐름을 영향 범위에 맞게 다시 확인합니다.
7. **중지 조건**: 예상과 다르면 다음 명령을 연속 실행하지 않고 보존한 기준으로 돌아갑니다.

“백업했다”는 말 대신 무엇이 어디에 보존됐고 어떻게 복원할지 적습니다. reflog나 도구의 복구 기능이 있을 수 있어도 보존 기간·설정·대상 객체를 확인하지 않고 안전망으로 가정하지 않습니다.

## 병합 충돌은 의도 통합 문제입니다

충돌은 Git이 같은 영역에 적용되는 서로 다른 변경을 자동으로 결정하지 못했다는 신호입니다. `ours`나 `theirs` 한쪽을 통째로 선택하거나 충돌 표시만 지우면 문법은 정상이어도 한쪽 요구·테스트·보안 제약이 사라질 수 있습니다.

안전한 해결 순서는 다음과 같습니다.

1. 어떤 merge·rebase·cherry-pick 중에 충돌했는지와 중단·취소 경로를 확인합니다.
2. base와 양쪽 branch의 요구·commit·diff·테스트를 읽습니다.
3. 최종 사용자 동작과 데이터·권한 불변식을 먼저 적습니다.
4. 파일별로 양쪽 의도를 통합하고 충돌 표시·중복·의도치 않은 삭제를 검사합니다.
5. 관련 단위·통합·브라우저·데이터 검증과 주변 회귀를 실행합니다.
6. 해결 결과 전체 diff와 새 commit graph를 다시 읽습니다.
7. 로컬 병합과 원격 공유·GitHub PR 병합의 상태 변화 및 권한을 구분합니다. 핸드북의 안전 정책에 따라 기존 명시적 승인·상시 정책의 범위 안에서 수행하고 그 밖의 행동은 별도로 확인합니다. 이는 Git의 내장 승인 조건이 아니며 로컬 병합 허용이 원격 쓰기 허용을 뜻하지 않습니다.

AI에게 충돌 해결을 맡길 때도 양쪽 branch의 목적과 수용 기준을 제공하고, 선택 이유와 버린 대안을 설명하게 합니다. “conflict resolved” 출력은 기능 보존 증거가 아닙니다.

## 태그·버전·릴리스·배포를 분리하세요

- **태그(tag)**: 특정 Git 객체에 붙인 이름입니다. annotated tag는 작성자·시각·메시지와 선택적 서명을 담을 수 있고, lightweight tag는 단순 참조입니다.
- **버전(version)**: 사용자와 도구가 변경·호환성·지원 범위를 식별하기 위한 규칙입니다. 태그 이름과 같게 운영할 수 있지만 그 자체로 검증이나 배포를 뜻하지 않습니다.
- **릴리스(release)**: 특정 버전의 변경 기록·아티팩트·지원 정보를 사용자에게 제공하기로 한 제품·운영 결정입니다.
- **배포(deploy)**: 선택한 아티팩트를 대상 환경에서 서비스 가능하게 만드는 실행입니다.

GitHub Release는 tag를 선택하고 release notes와 binary files를 묶어 공개할 수 있는 현재 GitHub 기능입니다. Git 자체의 tag와 같은 객체도 아니고, 다른 호스팅 서비스나 조직의 릴리스 절차 전체를 정의하지 않습니다. draft release, published release, deployment와 실제 사용자 확인을 서로 다른 상태로 기록하세요.

공유된 tag를 같은 이름의 다른 commit으로 강제로 옮기면 이미 받은 사람은 자동으로 같은 값을 보지 않습니다. 실수를 숨기기보다 정정된 새 버전·tag와 안내를 만드는 편이 추적하기 쉬운지 검토합니다.

## 개발 사례: 모임 참가 웹앱

### 중복 참가 방지 변경에서 결함이 발견됐다면

W-03 변경이 아직 로컬 파일에만 있으면 참가 서비스·제약·테스트의 diff를 보존한 뒤 잘못된 경로만 복원할 수 있습니다. 로컬 커밋 구성만 잘못됐다면 보호 참조를 만든 뒤 reset이나 rebase의 예상 결과를 검토할 수 있습니다. 이미 공유·병합됐다면 commit을 지우기보다 새 수정 commit이나 revert로 공개 이력을 보존하는 편이 일반적으로 안전합니다.

하지만 운영에서 한 사용자에게 활성 참가가 두 건 생겼다면 Git 이력 복구만으로 부족합니다. 다음 불변식과 외부 효과를 별도로 확인합니다.

- 동일 `(event_id, participant_id)`의 활성 참가가 한 건 이하인가요?
- `confirmed <= capacity`가 유지되나요?
- 다른 사용자의 참가·취소 상태인 `confirmed`·`cancelled`가 손상되지 않았나요?
- 응답을 받지 못한 참가·취소 요청의 실제 처리 결과를 권위 데이터에서 재조회했나요?
- 어떤 배포 버전과 스키마가 현재 데이터와 호환되나요?

증거를 보존하고 추가 쓰기를 제한한 뒤 코드 수정·설정 변경·데이터 정정·이전 아티팩트 중 필요한 복구를 선택합니다. 데이터 정정은 권한과 감사 기록이 있는 별도 절차로 실행하고, 격리된 가상 계정으로 참가·중복 거절·자기 취소와 권위 데이터 재조회를 확인한 뒤 재개합니다. 이 원고는 실제 서비스·데이터·배포 복구를 수행했다는 기록이 아니라 복구 판단 계약입니다.

## AI의 되돌리기 제안을 검토하는 읽기 전용 지시

```text wrap
파일과 외부 상태를 변경하지 말고 현재 복구 범위를 분류하라.

저장소·worktree·branch·HEAD·upstream·작업 트리와 최근 이력을 확인하라.
미커밋, staged, 로컬 전용 commit, 공유 commit, tag·release, 배포·데이터·외부 효과를 구분하라.

restore, revert, reset, rebase 또는 새 수정 commit 후보마다 다음을 표로 작성하라.
- branch tip, index, working tree, remote와 운영 상태의 예상 변화
- 보존할 사용자 작업·이력·데이터·증거
- 손실·공유 이력·외부 부작용 위험
- 실행 전 보호 수단과 중지 조건
- 실행 후 status·diff·log·테스트·데이터·사용자 흐름 검증

명령을 실행하거나 파일·원격·릴리스·배포·데이터를 수정하지 마라.
보존 대상을 모르면 파괴 가능한 명령을 추천하지 마라.
Git 성공을 운영 복구 성공으로 확대하지 마라.
```

## 흔한 오해와 실패

### restore를 안전한 undo 버튼으로 봅니다

작업 트리의 미커밋 내용을 덮을 수 있습니다. 대상 경로·source·index 여부와 보존할 diff를 먼저 확인하세요.

### revert가 과거 상태로 정확히 이동한다고 봅니다

반대 변경을 새 commit으로 적용하므로 이후 변경과 충돌할 수 있습니다. 현재 요구와 최종 diff를 다시 검증하세요.

### reset mode를 복사해 실행합니다

commit 형식의 mode와 index만 바꾸는 경로 지정 형식을 먼저 구분하세요. `--hard`는 추적 파일의 로컬 변경뿐 아니라 대상 파일 배치를 방해하는 미추적 파일·디렉터리도 잃게 할 수 있습니다. 전후 상태 표와 보호 기준 없이는 실행하지 마세요.

### 공유 branch를 rebase하고 강제 push합니다

다른 사람의 commit 기반과 review 링크가 깨질 수 있습니다. 공유 여부·팀 정책·대안과 원래 tip 복구 경로를 먼저 확인하세요.

### 충돌 표시가 사라지면 해결됐다고 봅니다

양쪽 요구나 테스트가 사라졌을 수 있습니다. 최종 사용자 동작·데이터·권한 불변식과 전체 diff를 확인하세요.

### tag를 만들면 release와 배포가 끝났다고 봅니다

tag, release record, artifact, deployment, 공개 URL과 사용자 흐름은 각각 별도 증거가 필요합니다.

### Git으로 운영 데이터를 복구하려 합니다

코드는 돌아가도 데이터·외부 메시지·결제·DNS는 남을 수 있습니다. 자산별 복구 수단과 권위 상태를 사용하세요.

## 확인 체크리스트

- [ ] 저장소·worktree·branch·HEAD·대상 commit과 경로를 확인했습니다.
- [ ] 미커밋·staged·로컬 전용·공유·릴리스·운영 상태를 분리했습니다.
- [ ] 보존할 사용자 작업·untracked 파일·commit·외부 증거가 있습니다.
- [ ] restore·revert·reset·rebase의 branch tip·index·working tree 영향을 설명할 수 있습니다.
- [ ] 공유 이력 재작성 여부와 영향을 받는 협업자를 확인했습니다.
- [ ] 충돌 양쪽 요구와 버린 대안을 기록하고 회귀를 검증했습니다.
- [ ] tag·version·release·artifact·deploy를 별도 상태로 보고합니다.
- [ ] Git 밖 데이터·권한·외부 효과의 복구 절차와 승인자가 있습니다.
- [ ] 실행 전 중지·rollback 경로와 실행 후 직접 검증이 있습니다.
- [ ] 실제로 실행하지 않은 복구·배포·사용자 확인을 성공으로 쓰지 않습니다.

## 짧은 연습

다음 세 상황에서 보존할 상태, 후보 명령 또는 절차, 예상 branch tip·index·working tree 변화, 실행 후 증거를 표로 작성하세요.

1. 아직 커밋하지 않은 개인 파일 수정에서 한 경로만 잘못 바뀐 경우
2. 로컬에서만 만든 마지막 두 커밋의 순서와 구성을 고치려는 경우
3. 팀에 공유·병합되고 운영 데이터까지 바꾼 커밋에서 결함이 발견된 경우

세 번째 답이 Git 명령 하나로 끝난다면 데이터·외부 효과·배포·사용자 검증이 빠졌는지 다시 확인하세요.

## 관련 용어와 출처

- [브랜치·커밋·Pull Request](../branch-commit-pull-request/)
- [Git과 GitHub는 다릅니다](../git-and-github/)
- [빌드·배포·도메인·DNS](../../10-deployment-operations/build-deploy-domain-dns/)
- [로그·모니터링·백업](../../10-deployment-operations/logs-monitoring-backup/)
- [Git reset·restore·revert 구분](https://git-scm.com/docs/git)
- [Git restore 공식 문서](https://git-scm.com/docs/git-restore)
- [Git revert 공식 문서](https://git-scm.com/docs/git-revert)
- [Git reset 공식 문서](https://git-scm.com/docs/git-reset)
- [Git rebase 공식 문서](https://git-scm.com/docs/git-rebase)
- [Git tag 공식 문서](https://git-scm.com/docs/git-tag.html)
- [GitHub Release 관리 공식 문서](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository)

Git과 GitHub의 공식 문서를 2026-08-13에 확인했습니다. Git 문서는 명령이 바꾸는 branch·index·working tree·commit과 tag 범위를, GitHub 문서는 현재 Release 제품 기능의 범위를 뒷받침합니다. 명령의 안전성은 실제 상태·옵션·Git 버전·팀 정책에 따라 다시 판정하며, GitHub Release를 Git 자체나 다른 호스팅 제품의 보편 규칙·실제 배포 성공으로 확대하지 않습니다.
