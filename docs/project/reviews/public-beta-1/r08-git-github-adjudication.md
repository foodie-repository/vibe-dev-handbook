# R08 최초 검토 재판정

## 현재 판정: Fix1 해소

2026-11-15 같은 저장 reviewer의 [Fix1 후속 검토](r08-git-github-codex-rereview.md)는 PASS C0/I0/M0·18/18·치명0이며 코드도 C0/I0/M0입니다. controller는 R08-I01~I03·M01~M03의 6건과 R21 소유 문맥 XI01·XM01~XM02의 3건을 모두 RESOLVED로 재판정합니다. R21 전체 검토는 여전히 미완료입니다. 아래 후보·OPEN 표는 후속 검토 전 역사이며 최초 NEEDS CHANGES를 소급 변경하지 않습니다.

동일 저장 세션의 history1과 최초 응답 복구, 실제 gpt-6-astra/high·읽기 전용·도구 미사용, 18파일39청크·실제PNG11의 전달 및 응답 후 불변성 감사는 errors0·exit0입니다. 후속 payload SHA는 `3bf1b88b40bce151d16e6dcdc1dfc933588d94802065a9a44482a5d549dd6c95`, 응답 SHA는 `3b234d95d965544dc253e843ac51428c03f3f7e8a8af582ba4efad0b44c2b305`입니다. 검토된 12파일 후보의 checkpoint 적합 판정을 수용하며 이 결과 기록을 추가한 최종 index는 별도로 확인합니다. Fix1 결과 기록 당시에는 원고 draft와 R08 controller closeout 미완료를 유지했습니다. 이후 메타데이터 전이와 행 완료 판단은 `r08-controller-closeout.md`를 따르며 M5 전체·ready·공개 승인은 미완료입니다.

## 최초 후보와 재판정 역사

Fix1 후보: 아래9건을 수용한 최소 수정을 Git 원고와 인접2장에 적용했습니다. I01은 명시적 untracked 전체 표시와 설정/ignored 한계, I02는 로컬 merge와 원격 PR 병합 및 상시 승인 정책, I03은 후보 스냅샷과 검증한 작업 트리의 차이·의존성·비파괴 재검증을 연결했습니다. M01~03은 pull 방식·거절, unborn HEAD, 순변화 반례를 보완했고 XI01/XM01/XM02는 PR 증거·사례 비목표·링크명을 정렬했습니다. 정확한5파일의 수정 전후 해시·역치환은 `scripts/r08-fix-transition.mjs`에 고정했습니다. 자동245/245·build60·새 문맥PNG11의 검증을 통과했지만 아래 최초 OPEN은 같은 reviewer의 실제 후속 판정 전까지 해소 완료로 바꾸지 않습니다. R21 전체 검토와 원고 상태 전이는 남습니다.

[최초 실제 검토](r08-git-github-codex-review.md)는 NEEDS CHANGES입니다. 대상 원고 C0/I3/M3·16/18·치명0, 인접 문맥 C0/I1/M2로 합계 C0/I4/M5이며 준비 코드 C0/I0/M0·준비6파일 체크포인트 적합은 별도 판단입니다. 최초 fresh 저장 gpt-6-astra/high·history0·읽기 전용·도구 미사용, 텍스트18파일/29청크와 원본PNG18의 실제 관찰이 확인됐습니다. 응답 후 전달·프로필·입력 불변성 감사는 errors0/exit0입니다. 원 응답 SHA는 `58068fb31282e6249126e2f0abcad4a60696adea9646bf3a13b1e654caf73377`, payload SHA는 `9e39602557517df22730e6f0155e39d4f5b7174ab9716c2678c8e7c1d196ec6b`입니다.

| ID | controller 재판정 | 필요한 최소 조치 | 현재 상태 |
|---|---|---|---|
| R08-I01 | 수용 | 명시적 untracked 전체 열거와 ignored·설정 한계 | OPEN |
| R08-I02 | 수용 | 로컬 merge와 GitHub PR 병합, 명령 동작과 승인 정책 분리 | OPEN |
| R08-I03 | 수용 | 검증한 작업 상태와 부분 스테이징 후보의 차이·의존성·재검증 연결 | OPEN |
| R08-M01 | 수용 | pull의 ff-only·merge·rebase·squash·거절과 버전/설정 경계 | OPEN |
| R08-M02 | 수용 | 첫 커밋 전 HEAD 부재와 staged 비교 대안 | OPEN |
| R08-M03 | 수용 | diff HEAD의 순변화와 staged/unstaged 상쇄 반례 | OPEN |
| R08-XI01 | 수용, 소유 행 R21 | PR 생성과 push 수행·권한 증거를 분리 | OPEN |
| R08-XM01 | 수용, 소유 행 R21 | 모임 사례의 비목표 대기·알림 제거 또는 명시적 분리 | OPEN |
| R08-XM02 | 수용, 소유 행 R21 | 사례 링크명을 모임 참가 웹앱으로 정렬 | OPEN |

R21의 두 인접 장은 위 국소 문맥만 수정·같은 R08 reviewer 재확인 범위에 포함합니다. 이는 R21 전체 심층 검토를 대신하지 않으며 R12 사례·R26 통합도 미완료입니다. 원고·그림·상태는 최초 결과 기록 시 불변입니다. 그림의 실제18개 판독은 새 결함 없이 완료됐지만 변경되는 본문 문맥의 화면 증거로 자동 전용하지 않습니다. 수정 전후 diff·해시, 반례의 비민감 로컬 검증, 필요한 렌더와 같은 저장 세션의 실제 복구 후 판정이 다음 단계입니다. 미해결 Important를 점수로 상쇄하거나 원고를 review/ready로 승격하지 않습니다.
