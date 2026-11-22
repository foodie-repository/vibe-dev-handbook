# R21 Git 지원 원고 — 공식 직접 근거 보충

확인일은 2026-11-16(KST)입니다. 대상은 PB-043·PB-045이며 2026-08-13의 조사 기록을 현재 확인으로 소급 변경하지 않습니다. 공식 페이지 16개를 읽기 전용으로 추출했으며 실패 응답은 없었습니다. 아래 명시한 절만 실제 읽었고 전체 Git 매뉴얼을 완독했다고 주장하지 않습니다. Git 명령·GitHub 계정 권한·PR 생성·병합·릴리스·운영 복구를 실행하지 않았습니다. 출처의 기능 설명과 이 핸드북의 승인 정책은 구분합니다.

| ID | 공식 원전 | 실제 읽은 범위와 원고 적용 판단 | 확인 한계 |
|---|---|---|---|
| R21-S01 | [Git branch](https://git-scm.com/docs/git-branch.html) | DESCRIPTION과 track/no-track/upstream 옵션. 브랜치는 참조이며 생성 자체는 체크아웃이 아닙니다. upstream 설정은 status·branch -v·pull의 비교·통합 대상에 관여합니다. remote-tracking 참조의 삭제와 원격 브랜치 삭제는 다릅니다. | 나머지 옵션·전체 설정은 미독입니다. origin이라는 이름을 필수값으로 단정하지 않습니다. |
| R21-S02 | [Git pull](https://git-scm.com/docs/git-pull) | DESCRIPTION과 첫 통합 옵션. 먼저 fetch한 뒤 현재 브랜치에 통합하며 fast-forward 제한·merge·rebase·squash·거절 가능성을 설정과 옵션에 맞춰 구분합니다. | 현재 문서의 기본값을 과거·모든 Git 버전에 일반화하지 않습니다. 실제 저장소에서 pull하지 않았습니다. |
| R21-S03 | [Git restore](https://git-scm.com/docs/git-restore) | DESCRIPTION, source·worktree·staged·ours/theirs·conflict 관련 옵션. 기본 복원 위치와 source가 다르며 index와 작업 트리를 구분합니다. source에 없는 tracked 경로가 삭제될 수 있습니다. rebase에서 ours/theirs 의미 해석에 주의합니다. | 복원 대상·옵션을 모른 채 안전 명령으로 권하지 않습니다. 전체 예시는 미독입니다. |
| R21-S04 | [Git revert](https://git-scm.com/docs/git-revert) | DESCRIPTION·OPTIONS·sequencer·예시·discussion. 기존 변경을 반대로 적용하는 새 커밋이 기본이며 no-commit은 자동 커밋하지 않습니다. merge revert의 mainline 선택과 향후 merge 영향, 중단 절차가 있습니다. | clean 상태 요구의 기본 경계와 no-commit 예외를 구분합니다. 데이터·배포 복구를 보장하지 않습니다. |
| R21-S05 | [Git reset](https://git-scm.com/docs/git-reset) | DESCRIPTION 전체. commit 형식은 HEAD와 모드별 index·작업 트리를 바꿉니다. 경로 지정 형식은 index만 변경하고 HEAD나 작업 트리를 바꾸지 않습니다. hard는 untracked 경로도 덮어쓸 수 있습니다. | soft·mixed·hard를 동일시하지 않습니다. 전체 예시는 미독이며 실제 프로젝트에 reset하지 않았습니다. |
| R21-S06 | [Git rebase](https://git-scm.com/docs/git-rebase) | DESCRIPTION과 upstream rebase 복구 절의 소개·관계도. 다른 부모 위에 변경을 재생하며 새 이력·충돌·continue/abort/skip과 공유 이력의 파급을 구분합니다. ORIG_HEAD가 항상 보존된다고 보장하지 않습니다. | 상세 easy/hard 복구 알고리즘과 전체 옵션은 미독입니다. reflog를 만능 복구나 외부 상태 복구로 보지 않습니다. |
| R21-S07 | [Git tag](https://git-scm.com/docs/git-tag.html) | DESCRIPTION·주요 옵션·On Re-tagging 전체와 automatic following 도입부. lightweight/annotated 구분, 공유 후 재태깅이 기존 사용자의 태그를 자동 갱신하지 않는 경계를 확인했습니다. | 자동 태그 전달 전체 규칙은 미독입니다. tag·버전명·배포 성공은 서로 다릅니다. |
| R21-S08 | [GitHub PR 생성 안내](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests) | 전체 페이지를 읽었습니다. 현재는 여러 작성 안내로 연결하는 분류 페이지이므로 실제 생성 조건은 S12·S13으로 보충합니다. | 분류 링크만 읽었다는 사실로 실제 절차 확인을 대신하지 않습니다. |
| R21-S09 | [GitHub PR review](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) | 반환된 현재 reference/pull-request-reviews 본문 전체. comment·approve·request changes와 리뷰 권한·필수 리뷰·CODEOWNERS 조건을 확인했습니다. | 승인 표시 자체가 모든 병합 조건 충족이나 배포를 뜻하지 않습니다. 실제 저장소 정책은 미확인입니다. |
| R21-S10 | [GitHub PR 병합](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/merging-a-pull-request) | 전체 본문. draft 제한·권한·필수 검사·리뷰·기준 최신화·merge queue 조건과 merge/squash/rebase 방식의 차이를 확인했습니다. | 실제 계정 UI·CLI 명령은 실행하지 않았습니다. 규칙 설정별 차이를 보편 규칙으로 확대하지 않습니다. |
| R21-S11 | [GitHub Release 관리](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) | 전체 본문. 쓰기 권한, 태그·설명·첨부 자산, draft/publish와 immutable release가 활성화된 경우의 제약을 확인했습니다. | 실제 릴리스 생성·게시·배포는 하지 않았습니다. 모든 저장소가 immutable이라고 단정하지 않습니다. |
| R21-S12 | [PR 생성 상세](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request) | 전체 본문. head/base 선택과 기존 브랜치의 변경 제안, 생성 접근 조건과 후속 head 커밋 반영을 확인했습니다. | PR URL은 생성자가 이번에 push했다는 증거나 대상 저장소 push 권한 증거가 아닙니다. UI·CLI 실행은 하지 않았습니다. |
| R21-S13 | [fork에서 PR 생성](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request-from-a-fork) | 전체 본문. fork 쓰기 권한, upstream base와 fork compare, maintainer 편집 허용 및 workflow 관련 위험을 확인했습니다. | fork PR 가능성을 대상 저장소 코드 쓰기 권한으로 해석하지 않습니다. 실제 권한 시험은 하지 않았습니다. |
| R21-S14 | [Protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches) | About branch protection rules·설정 목록·Require pull request reviews 절까지. 관리자 우회 설정, branch rule/ruleset 차이, 변경 후 stale 승인 처리와 마지막 push에 대한 별도 승인 대안을 확인했습니다. | Require status checks 이후 상세·강제 push/삭제 상세 절은 미독입니다. 실제 저장소 적용 상태는 미확인입니다. |
| R21-S15 | [Git fetch](https://git-scm.com/docs/git-fetch) | DESCRIPTION과 OPTIONS 도입부. 필요한 객체와 참조를 가져오며 remote-tracking 참조·FETCH_HEAD를 갱신합니다. | 이후 refspec 전체 규칙은 미독입니다. fetch의 참조 갱신은 현재 작업 브랜치 통합이나 실시간 원격 감시가 아닙니다. |
| R21-S16 | [Git 명령 구분](https://git-scm.com/docs/git) | Reset, restore and revert 절 전체. revert의 새 커밋, restore의 작업 트리/index 복원, reset의 branch 이동과 index 전용 형식을 구분했습니다. | 이 절 외의 전체 Git 명령 참조는 미독입니다. 안전 판단은 구체적인 형식·보존 대상과 함께 합니다. |

## 재사용과 현재 검토의 구분

R08 최초 검토·재판정·같은 저장 reviewer의 Fix1 결과와 정확한 전이 코드는 R08-XI01·XM01·XM02의 국소 해소 계보로 재사용합니다. PR 생성과 push의 분리, 모임 사례의 confirmed/cancelled 및 비목표, 사례 링크명을 다시 연결하되 이를 R21 두 원고 전체 검토 완료로 계산하지 않습니다. 완료된 R08 원고와 모임 사례는 용어·권한·실패 경계 문맥으로 제공하며 전체 재검토를 요청하지 않습니다.

이번 보충은 출처와 검토 입력에만 영향을 줍니다. 원고 의미·표·코드·CSS·상태는 아직 변경하지 않았습니다. 기존 R20 최종 빌드는 공개 입력이 변하지 않은 범위에서 재사용하고, 새 R21 화면은 현재 두 원고의 독립 시각 검토 입력으로 생성합니다. 실제 복구 명령이나 원격 쓰기의 성공 증거는 없습니다.
