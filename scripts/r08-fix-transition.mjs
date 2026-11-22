import {createHash} from 'node:crypto';
import {r08PreCloseoutBytes} from './r08-closeout.mjs';
const sha=b=>createHash('sha256').update(b).digest('hex');
export const r08FixTransitions=[
  {
    "path": "src/content/docs/09-git-github/git-and-github.md",
    "before": "7e67a4536e5661fee12e082b69f2eeb13302bb85c8c9def1e70ac8e5ef6b5cad",
    "after": "791bf69c68c9a34d2868a35f67b4272694c47b4e81043a32d308c04dafad730d",
    "replacements": [
      [
        "3. `git commit`은 스테이징된 상태를 로컬 이력에 기록합니다.\n4. `git push`는 로컬 커밋과 브랜치 정보를 원격으로 보냅니다.\n5. Pull Request는 원격의 작업 브랜치를 기준 브랜치와 비교해 검토를 요청합니다.\n6. merge는 승인된 변경 이력을 기준 브랜치에 통합합니다.\n7. build와 deploy는 해당 소스에서 산출물을 만들고 대상 환경에 전달합니다.\n\n앞 단계가 끝났다고 다음 단계가 자동으로 증명되지는 않습니다. 커밋됐지만 push되지 않을 수 있고, push됐지만 Pull Request가 없을 수 있으며, PR이 승인됐지만 병합되지 않았을 수 있습니다. 병합됐어도 배포되지 않았거나, 배포됐어도 실제 사용자 흐름이 실패할 수 있습니다.",
        "3. `git commit`은 스테이징된 상태를 로컬 이력에 기록합니다.\n4. `git push`는 로컬 커밋과 브랜치 정보를 원격으로 보냅니다.\n5. Pull Request는 원격의 작업 브랜치를 기준 브랜치와 비교해 검토를 요청합니다.\n6. merge는 변경 이력을 기준 브랜치에 통합합니다. 로컬 `git merge`는 로컬 상태를 바꾸고, GitHub의 PR 병합은 원격 기준 브랜치를 바꿉니다.\n7. build와 deploy는 해당 소스에서 산출물을 만들고 대상 환경에 전달합니다.\n\n앞 단계가 끝났다고 다음 단계가 자동으로 증명되지는 않습니다. 커밋됐지만 push되지 않을 수 있고, push됐지만 Pull Request가 없을 수 있으며, PR이 승인됐지만 병합되지 않았을 수 있습니다. 병합됐어도 배포되지 않았거나, 배포됐어도 실제 사용자 흐름이 실패할 수 있습니다."
      ],
      [
        "로컬 `main`과 `origin/main`은 같은 이름처럼 보여도 다른 참조입니다. `origin/main`은 마지막으로 원격과 통신했을 때 로컬 Git이 알고 있던 원격 브랜치 상태를 나타내므로 오래됐을 수 있습니다.\n\n- `git fetch`: 원격의 새 이력과 참조 정보를 가져오지만 일반적으로 현재 작업 트리에 자동 병합하지는 않습니다. 네트워크와 원격 접근 권한이 필요하고 로컬의 원격 추적 상태는 바뀝니다.\n- `git pull`: 보통 fetch한 뒤 현재 설정에 따라 merge 또는 rebase로 현재 브랜치에 통합합니다. 작업 파일과 이력이 달라지고 충돌할 수 있으므로 단순한 “새로고침”으로 취급하지 않습니다.\n- `git push`: 로컬의 커밋과 참조를 원격에 보냅니다. 공유 이력, CI, 알림 또는 배포 자동화를 촉발할 수 있으므로 별도 승인 경계로 둡니다.\n\nGitHub 웹 화면이 최신이라고 해서 로컬 작업 트리가 최신인 것은 아니고, 로컬 `git status`가 깨끗하다고 해서 원격과 같은 상태라는 뜻도 아닙니다.\n\n## `status`와 `diff`가 각각 보여주는 증거\n\n### `git status --short --branch`\n\n현재 브랜치, upstream과의 차이, tracked 파일의 변경, 스테이징 여부와 untracked 파일을 요약합니다. 작업 시작과 종료에서 기본 지도로 사용합니다.\n\n`working tree clean`은 Git이 현재 기준에서 커밋되지 않은 tracked·untracked 변경을 보고하지 않는다는 뜻입니다. ignore된 파일, 원격의 최신 상태, 테스트 성공과 운영 상태까지 증명하지는 않습니다.",
        "로컬 `main`과 `origin/main`은 같은 이름처럼 보여도 다른 참조입니다. `origin/main`은 마지막으로 원격과 통신했을 때 로컬 Git이 알고 있던 원격 브랜치 상태를 나타내므로 오래됐을 수 있습니다.\n\n- `git fetch`: 원격의 새 이력과 참조 정보를 가져오지만 일반적으로 현재 작업 트리에 자동 병합하지는 않습니다. 네트워크와 원격 접근 권한이 필요하고 로컬의 원격 추적 상태는 바뀝니다.\n- `git pull`: fetch한 뒤 설치 버전·옵션·설정에 따라 fast-forward만 허용하거나 merge·rebase·squash 방식으로 변경을 반영합니다. 이력이 갈라졌을 때 통합을 거절할 수도 있고, squash는 결과를 준비하되 그 자체로 새 커밋을 만들지는 않습니다. 작업 파일과 이력이 달라질 수 있으므로 현재 버전과 설정을 확인하며 단순한 “새로고침”으로 취급하지 않습니다.\n- `git push`: 로컬의 커밋과 참조를 원격에 보냅니다. 공유 이력, CI, 알림 또는 배포 자동화를 촉발할 수 있으므로 별도 승인 경계로 둡니다.\n\nGitHub 웹 화면이 최신이라고 해서 로컬 작업 트리가 최신인 것은 아니고, 로컬 `git status`가 깨끗하다고 해서 원격과 같은 상태라는 뜻도 아닙니다.\n\n## `status`와 `diff`가 각각 보여주는 증거\n\n### `git status --short --branch --untracked-files=all`\n\n현재 브랜치, upstream과의 차이, tracked 파일의 변경, 스테이징 여부와 untracked 파일을 요약합니다. 안전 점검에서는 `--untracked-files=all`을 명시해 새 디렉터리 내부의 파일도 열거합니다. 기본 status는 설정에 따라 untracked 파일을 숨기거나 디렉터리로 묶을 수 있습니다. 이 옵션도 ignored 파일을 포함하지 않으므로 무시 규칙과 필요한 제외 파일은 별도로 확인합니다.\n\n`working tree clean`은 Git이 현재 기준에서 커밋되지 않은 tracked·untracked 변경을 보고하지 않는다는 뜻입니다. ignore된 파일, 원격의 최신 상태, 테스트 성공과 운영 상태까지 증명하지는 않습니다."
      ],
      [
        "\n### `git diff --staged`\n\n스테이징 영역과 현재 커밋을 비교해 다음 커밋에 들어갈 tracked 변경을 보여줍니다. 커밋 직전 가장 직접적인 내용 증거이지만 스테이징되지 않은 수정과 untracked 파일은 별도로 남아 있을 수 있습니다.\n\n### `git diff HEAD`\n\n현재 커밋과 tracked 작업 상태의 차이를 넓게 확인할 수 있습니다. 스테이징된 변경과 스테이징되지 않은 변경을 함께 보지만 untracked 파일 내용은 여전히 자동으로 포함하지 않습니다.\n\n세 diff는 이름이 비슷하지만 비교 기준이 다릅니다.",
        "\n### `git diff --staged`\n\n스테이징 영역과 현재 커밋을 비교해 다음 커밋에 들어갈 tracked 변경을 보여줍니다. 첫 커밋 전처럼 비교할 HEAD 커밋이 없으면 스테이징한 내용 전체를 보여줍니다. 커밋 직전 가장 직접적인 내용 증거이지만 스테이징되지 않은 수정과 untracked 파일은 별도로 남아 있을 수 있습니다.\n\n### `git diff HEAD`\n\n현재 커밋인 HEAD와 최종 tracked 작업 트리 사이의 순변화를 보여줍니다. staged·unstaged 변경을 각각 나열한 합집합이 아닙니다. HEAD의 내용 A를 B로 바꿔 스테이징한 뒤 작업 파일만 A로 돌려놓으면 `git diff HEAD`는 비어도 index에는 B가 남습니다. 따라서 `git diff --staged`와 기본 diff를 별도로 읽어야 합니다. untracked 파일 내용은 자동으로 포함하지 않으며 첫 커밋 전에는 HEAD 커밋이 없어 이 명령이 실패합니다.\n\n세 diff는 이름이 비슷하지만 비교 기준이 다릅니다."
      ],
      [
        "|---|---|---|---|\n| `git diff` | 작업 트리 ↔ 스테이징 영역 | 아직 스테이징하지 않은 tracked 변경은 무엇인가요? | 이미 스테이징된 변경, untracked 파일 내용 |\n| `git diff --staged` | 스테이징 영역 ↔ `HEAD` | 다음 커밋에 들어갈 tracked 변경은 무엇인가요? | 스테이징하지 않은 변경, untracked 파일 내용 |\n| `git diff HEAD` | 작업 트리의 tracked 상태 ↔ `HEAD` | 현재 커밋 이후 tracked 변경 전체는 무엇인가요? | untracked 파일 내용, 원격의 최신 상태 |\n\n따라서 `git status --short --branch`로 전체 상태 지도를 먼저 보고 세 비교 중 필요한 것을 고릅니다. 명령 이름을 외우기보다 “어느 두 상태를 비교하는가?”를 말할 수 있어야 빈 출력을 변경 없음으로 잘못 해석하지 않습니다.\n\n### 이력과 위치를 보는 읽기 명령",
        "|---|---|---|---|\n| `git diff` | 작업 트리 ↔ 스테이징 영역 | 아직 스테이징하지 않은 tracked 변경은 무엇인가요? | 이미 스테이징된 변경, untracked 파일 내용 |\n| `git diff --staged` | 스테이징 영역 ↔ `HEAD` | 다음 커밋에 들어갈 tracked 변경은 무엇인가요? | 스테이징하지 않은 변경, untracked 파일 내용 |\n| `git diff HEAD` | 작업 트리의 tracked 상태 ↔ `HEAD` | HEAD와 최종 작업 파일 사이의 순변화는 무엇인가요? | 서로 상쇄된 staged·unstaged의 별도 상태, untracked 파일 내용, 원격의 최신 상태 |\n\n따라서 `git status --short --branch --untracked-files=all`로 표시 범위를 명시한 상태 지도를 먼저 보고 세 비교 중 필요한 것을 고릅니다. 첫 커밋 전에는 status·새 파일 내용·`git diff --staged`를 사용하고 `git diff HEAD`를 정상 비교로 기대하지 않습니다. 명령 이름을 외우기보다 “어느 두 상태를 비교하는가?”를 말할 수 있어야 빈 출력을 변경 없음으로 잘못 해석하지 않습니다.\n\n### 이력과 위치를 보는 읽기 명령"
      ],
      [
        "- **예상 변경:** 참가 서비스, 활성 참가를 보호하는 데이터 제약, 정상 참가와 중복 신청 테스트, 관련 문서입니다.\n- **검토:** `git status`로 전체 변경 지도를 보고, unstaged diff인 `git diff`와 staged diff인 `git diff --staged`를 각각 읽어 요구 밖의 파일·삭제·설정 변경이 없는지 확인합니다. 테스트에는 실제 계정·개인정보·비밀·운영 데이터가 아니라 가상임을 명시한 fixture만 사용하고, 비밀이나 개인 설정이 커밋 후보에 섞이지 않았는지도 확인합니다.\n- **커밋:** 첫 참가 성공, 중복 신청의 안전한 거절과 데이터 불변이라는 수용 기준 및 관련 테스트를 통과한 파일만 로컬 commit으로 기록합니다.\n- **별도 승인:** push, Pull Request, merge와 배포는 로컬 commit 이후 원격 이력·협업자·운영 환경을 바꾸는 서로 다른 외부 상태 변경이므로 각각 승인과 직접 증거가 필요합니다.\n\n예를 들어 참가 서비스와 테스트 변경 옆에 요구와 무관한 UI 포맷 변경이 보인다면 모두 한꺼번에 스테이징하지 않습니다. `git status`로 관련 경로를 나누고 `git diff`에서 변경 조각별 목적을 확인한 뒤, 독립적으로 검증하고 되돌릴 수 있는 참가 서비스·데이터 제약·테스트·문서만 경로나 변경 조각 단위로 스테이징합니다. 한 파일 안에서 관련 변경과 UI 포맷 변경을 안전하게 나눌 수 없다면 파일 전체를 커밋 후보로 넣지 말고, 보존할 사용자 작업과 분리 방법을 먼저 확인합니다. 스테이징 뒤에는 `git diff --staged`에 UI 포맷 변경이 없고 `git status`가 의도적으로 남겨 둔 unstaged 변경을 정확히 보여 주는지 다시 확인합니다.\n\n실패를 복구할 때는 명령보다 먼저 “어떤 작업과 상태를 반드시 보존해야 하나요?”라고 묻습니다.\n\n| 현재 상태 | 먼저 확인할 보존 질문 | 복구 판단 |",
        "- **예상 변경:** 참가 서비스, 활성 참가를 보호하는 데이터 제약, 정상 참가와 중복 신청 테스트, 관련 문서입니다.\n- **검토:** `git status`로 전체 변경 지도를 보고, unstaged diff인 `git diff`와 staged diff인 `git diff --staged`를 각각 읽어 요구 밖의 파일·삭제·설정 변경이 없는지 확인합니다. 테스트에는 실제 계정·개인정보·비밀·운영 데이터가 아니라 가상임을 명시한 fixture만 사용하고, 비밀이나 개인 설정이 커밋 후보에 섞이지 않았는지도 확인합니다.\n- **커밋:** 첫 참가 성공, 중복 신청의 안전한 거절과 데이터 불변이라는 수용 기준 및 관련 테스트를 통과한 파일만 로컬 commit으로 기록합니다.\n- **별도 승인:** push, Pull Request 생성, GitHub에서의 PR 병합과 배포는 원격 이력·협업자·운영 환경을 바꾸는 서로 다른 외부 상태 변경이므로 각각 승인과 직접 증거가 필요합니다. 로컬 `git merge`는 로컬 브랜치·index·작업 트리를 바꿀 수 있는 별도 로컬 변경이며 그 승인 범위를 확인합니다.\n\n예를 들어 참가 서비스와 테스트 변경 옆에 요구와 무관한 UI 포맷 변경이 보인다면 모두 한꺼번에 스테이징하지 않습니다. `git status`로 관련 경로를 나누고 `git diff`에서 변경 조각별 목적을 확인한 뒤, 독립적으로 검증하고 되돌릴 수 있는 참가 서비스·데이터 제약·테스트·문서만 경로나 변경 조각 단위로 스테이징합니다. 한 파일 안에서 관련 변경과 UI 포맷 변경을 안전하게 나눌 수 없다면 파일 전체를 커밋 후보로 넣지 말고, 보존할 사용자 작업과 분리 방법을 먼저 확인합니다. 스테이징 뒤에는 `git diff --staged`에 UI 포맷 변경이 없고 `git status`가 의도적으로 남겨 둔 unstaged 변경을 정확히 보여 주는지 다시 확인합니다.\n\n부분 스테이징 뒤에는 테스트한 작업 트리와 커밋할 스냅샷이 다를 수 있습니다. 예를 들어 테스트는 통과했어도 필요한 데이터 제약을 index에서 제외했다면 그 결과는 후보의 성공 증거가 아닙니다. 제외한 변경의 의존성과 영향을 확인하고, 필요하면 사용자 작업을 그대로 보존한 별도 환경에서 후보 스냅샷을 검증합니다.\n\n실패를 복구할 때는 명령보다 먼저 “어떤 작업과 상태를 반드시 보존해야 하나요?”라고 묻습니다.\n\n| 현재 상태 | 먼저 확인할 보존 질문 | 복구 판단 |"
      ],
      [
        "\n## AI 변경을 검토하는 최소 안전 루프\n\n1. **시작 상태 확인**: 저장소 최상위, 현재 브랜치, `git status`와 기존 사용자 변경을 확인합니다.\n2. **목표와 경계 고정**: 수정할 파일, 건드리지 않을 파일, 새 의존성·네트워크·데이터·Git 권한을 정합니다.\n3. **작은 변경 수행**: 한 번에 독립적으로 검토하고 되돌릴 수 있는 목표 하나만 맡깁니다.\n4. **실제 파일 검토**: `git status`로 새 파일·삭제·이름 변경을 보고, diff와 untracked 파일 내용을 요구와 대조합니다.\n5. **검증 실행**: 변경 위험에 맞는 테스트·정적 검사·빌드·브라우저·데이터 검증의 정확한 명령과 결과를 확인합니다.\n6. **스테이징 후보 선택**: 경로와 변경 조각을 명시적으로 고르고 생성물·비밀·개인 설정·대용량 데이터가 없는지 봅니다.\n7. **스테이징 diff 재검토**: `git diff --staged`가 한 목적과 검증 증거로 설명되는지 확인합니다.\n8. **로컬 커밋 승인**: 메시지와 범위를 사람이 승인한 뒤에만 커밋합니다.\n9. **외부 공유 별도 승인**: push, Pull Request, merge와 deploy는 각각 외부 상태와 다른 사람에게 영향을 주는 별도 단계로 승인합니다.\n\n테스트가 통과해도 diff를 읽어야 하고, diff가 의도대로 보여도 테스트·빌드·실제 화면이 필요할 수 있습니다. 서로 다른 증거가 서로의 빈틈을 보완합니다.",
        "\n## AI 변경을 검토하는 최소 안전 루프\n\n1. **시작 상태 확인**: 저장소 최상위, 현재 브랜치, `git status --short --branch --untracked-files=all`과 기존 사용자 변경을 확인합니다. ignored 파일은 별도입니다.\n2. **목표와 경계 고정**: 수정할 파일, 건드리지 않을 파일, 새 의존성·네트워크·데이터·Git 권한을 정합니다.\n3. **작은 변경 수행**: 한 번에 독립적으로 검토하고 되돌릴 수 있는 목표 하나만 맡깁니다.\n4. **실제 파일 검토**: untracked 전체 표시를 명시한 status로 새 파일·삭제·이름 변경을 보고, diff와 untracked 파일 내용을 요구와 대조합니다.\n5. **검증 실행**: 변경 위험에 맞는 테스트·정적 검사·빌드·브라우저·데이터 검증의 정확한 명령과 결과를 확인합니다.\n6. **스테이징 후보 선택**: 경로와 변경 조각을 명시적으로 고르고 생성물·비밀·개인 설정·대용량 데이터가 없는지 봅니다.\n7. **스테이징 diff와 검증 대상 재검토**: `git diff --staged`가 한 목적과 검증 증거로 설명되는지 확인합니다. 일부 조각만 스테이징했거나 검증 이후 변경됐다면, 테스트한 작업 트리와 후보 스냅샷의 차이·의존성을 확인합니다. 제외한 코드나 설정 때문에만 통과했을 가능성이 있으면 기존 결과를 후보의 성공 증거로 쓰지 않고, 기존 사용자 작업을 보존한 별도 환경에서 필요한 후보 검증을 수행합니다. 자동 stash나 변경 삭제로 상태를 맞추지 않습니다.\n8. **로컬 커밋 승인**: 메시지와 범위가 사용자의 승인 또는 명시적인 상시 승인 정책 안에 있는지 확인한 뒤 커밋합니다.\n9. **외부 공유 별도 승인**: push, Pull Request 생성, GitHub에서의 PR 병합과 deploy는 각각 외부 상태와 다른 사람에게 영향을 주는 별도 단계로 승인합니다.\n\n이 승인 절차는 Git 명령의 내장 조건이 아니라 핸드북의 작업 안전 정책입니다. 이미 승인된 범위와 상시 정책은 따르되 로컬 변경 승인을 원격 쓰기 승인으로 확대하지 않습니다.\n\n테스트가 통과해도 diff를 읽어야 하고, diff가 의도대로 보여도 테스트·빌드·실제 화면이 필요할 수 있습니다. 서로 다른 증거가 서로의 빈틈을 보완합니다."
      ],
      [
        "\n### pull을 무해한 새로고침으로 사용합니다\n\n설정에 따라 merge 또는 rebase가 실행돼 작업 이력이 달라지고 충돌할 수 있습니다. 시작 상태와 로컬 변경을 확인하고 fetch와 통합을 구분하세요.\n\n### `.gitignore`를 비밀 삭제 기능으로 봅니다",
        "\n### pull을 무해한 새로고침으로 사용합니다\n\n버전·옵션·설정에 따라 fast-forward만 허용하거나 merge·rebase·squash 방식으로 반영하며 통합을 거절할 수도 있습니다. 시작 상태와 로컬 변경을 확인하고 fetch와 통합을 구분하세요.\n\n### `.gitignore`를 비밀 삭제 기능으로 봅니다"
      ],
      [
        "- [ ] 삭제·이름 변경·파일 모드·바이너리·대용량 파일을 별도로 점검했습니다.\n- [ ] 생성물·개인 설정·비밀·개인정보·회사 데이터가 커밋 후보에서 제외됐습니다.\n- [ ] 커밋 후보가 한 가지 목적과 수용 기준으로 설명됩니다.\n- [ ] 테스트·빌드·브라우저·데이터 검증 결과가 현재 diff와 연결됩니다.\n- [ ] 로컬 커밋과 push·PR·merge·deploy의 권한을 별도로 확인했습니다.\n- [ ] 원격 이름, 대상 브랜치와 원격 추적 상태의 최신성을 확인했습니다.\n- [ ] 실패 시 보존할 작업과 복구 경로를 정했으며 파괴적 명령을 추측으로 실행하지 않습니다.",
        "- [ ] 삭제·이름 변경·파일 모드·바이너리·대용량 파일을 별도로 점검했습니다.\n- [ ] 생성물·개인 설정·비밀·개인정보·회사 데이터가 커밋 후보에서 제외됐습니다.\n- [ ] 커밋 후보가 한 가지 목적과 수용 기준으로 설명됩니다.\n- [ ] 테스트·빌드·브라우저·데이터 검증 결과가 현재 커밋 후보 스냅샷과 연결됩니다. 부분 스테이징이나 검증 이후 변경이 있으면 작업 트리와 후보의 차이·의존성을 확인하고 필요한 재검증을 했습니다.\n- [ ] 로컬 커밋과 push·PR·merge·deploy의 권한을 별도로 확인했습니다.\n- [ ] 원격 이름, 대상 브랜치와 원격 추적 상태의 최신성을 확인했습니다.\n- [ ] 실패 시 보존할 작업과 복구 경로를 정했으며 파괴적 명령을 추측으로 실행하지 않습니다."
      ]
    ]
  },
  {
    "path": "src/content/docs/09-git-github/branch-commit-pull-request.md",
    "before": "ff2d1faaedd2ab412ade431d662fac6471a9b78e6ed29fcf373a27346993733b",
    "after": "fdf94f67c24f57c23857cb132618301ee91a2d205bd8a8a5bff10d4014512bea",
    "replacements": [
      [
        "- 롤아웃·중지·되돌리기 또는 수정 배포 조건\n- 리뷰어가 집중해서 볼 질문\n\nPR을 열었다는 사실은 push 권한과 원격 쓰기가 실제로 수행됐다는 뜻입니다. 로컬 변경 요청만 받았다면 설명 초안까지만 만들 수 있고, 승인 없이 push·PR 생성·리뷰 요청·병합으로 넓히지 않습니다.\n\n## 작은 브랜치와 PR은 사용자 결과로 나누세요",
        "- 롤아웃·중지·되돌리기 또는 수정 배포 조건\n- 리뷰어가 집중해서 볼 질문\n\nPR 생성은 GitHub의 협업 상태를 바꾸는 외부 쓰기입니다. 이미 존재하는 원격 브랜치에서도 PR을 만들 수 있으므로 PR 생성자가 push를 수행했다는 증거는 아니며, fork PR을 제안할 수 있다고 대상 저장소의 코드 push 권한이 있다는 뜻도 아닙니다. push 수행 여부·원격 브랜치 상태·권한은 별도 증거로 확인합니다. 로컬 변경 요청만 받았다면 설명 초안까지만 만들 수 있고, 승인 없이 push·PR 생성·리뷰 요청·GitHub PR 병합으로 넓히지 않습니다.\n\n## 작은 브랜치와 PR은 사용자 결과로 나누세요"
      ],
      [
        "- [되돌리기·충돌·릴리스](../undo-merge-conflict-release/)\n- [코드 리뷰와 CI/CD](../../07-workflow-methods/code-review-ci-cd/)\n- [점진적 전달과 작업 분해](../../07-workflow-methods/incremental-delivery/)\n- [모임 예약 웹앱: 요구에서 운영까지](../../12-case-studies/first-full-stack-project/)\n- [Git branch 공식 문서](https://git-scm.com/docs/git-branch.html)\n- [Git pull 공식 문서](https://git-scm.com/docs/git-pull)\n- [GitHub Pull Request 만들기](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests)",
        "- [되돌리기·충돌·릴리스](../undo-merge-conflict-release/)\n- [코드 리뷰와 CI/CD](../../07-workflow-methods/code-review-ci-cd/)\n- [점진적 전달과 작업 분해](../../07-workflow-methods/incremental-delivery/)\n- [모임 참가 웹앱](../../12-case-studies/first-full-stack-project/)\n- [Git branch 공식 문서](https://git-scm.com/docs/git-branch.html)\n- [Git pull 공식 문서](https://git-scm.com/docs/git-pull)\n- [GitHub Pull Request 만들기](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests)"
      ]
    ]
  },
  {
    "path": "src/content/docs/09-git-github/undo-merge-conflict-release.md",
    "before": "2ae4f8a8e980424214dadcfd3d6182c7ec8b049cf42e6dcfe2ce1f256356d09b",
    "after": "f349e1b0a7aac63598a550c494a1724c6ce8e11cf571b777d829fbca65d149e5",
    "replacements": [
      [
        "\n- 동일 `(event_id, participant_id)`의 활성 참가가 한 건 이하인가요?\n- `confirmed <= capacity`가 유지되나요?\n- 다른 사용자의 참가·취소·대기 상태가 손상되지 않았나요?\n- 이미 발송한 알림이나 외부 요청을 취소·정정해야 하나요?\n- 어떤 배포 버전과 스키마가 현재 데이터와 호환되나요?\n\n증거를 보존하고 추가 쓰기를 제한한 뒤 코드 수정·설정 변경·데이터 정정·이전 아티팩트 중 필요한 복구를 선택합니다. 데이터 정정은 권한과 감사 기록이 있는 별도 절차로 실행하고, 격리된 가상 계정으로 참가·중복 거절·자기 취소와 권위 데이터 재조회를 확인한 뒤 재개합니다. 이 원고는 실제 서비스·데이터·배포 복구를 수행했다는 기록이 아니라 복구 판단 계약입니다.",
        "\n- 동일 `(event_id, participant_id)`의 활성 참가가 한 건 이하인가요?\n- `confirmed <= capacity`가 유지되나요?\n- 다른 사용자의 참가·취소 상태인 `confirmed`·`cancelled`가 손상되지 않았나요?\n- 응답을 받지 못한 참가·취소 요청의 실제 처리 결과를 권위 데이터에서 재조회했나요?\n- 어떤 배포 버전과 스키마가 현재 데이터와 호환되나요?\n\n증거를 보존하고 추가 쓰기를 제한한 뒤 코드 수정·설정 변경·데이터 정정·이전 아티팩트 중 필요한 복구를 선택합니다. 데이터 정정은 권한과 감사 기록이 있는 별도 절차로 실행하고, 격리된 가상 계정으로 참가·중복 거절·자기 취소와 권위 데이터 재조회를 확인한 뒤 재개합니다. 이 원고는 실제 서비스·데이터·배포 복구를 수행했다는 기록이 아니라 복구 판단 계약입니다."
      ]
    ]
  },
  {
    "path": "CONTENT_MAP.md",
    "before": "f98c6b94f1df1a089361fbea2ae6755517918630554e80b50d35e3981f94b1fb",
    "after": "7bcae6316df2a36bdb8a5e552d0d55c9878b37450193181c5ba812345518a9d5",
    "replacements": [
      [
        "\n| 문서 | 상태 | 본문 문자 수 | 공개 경로 |\n|---|---:|---:|---|\n| [브랜치·커밋·Pull Request](src/content/docs/09-git-github/branch-commit-pull-request.md) | `draft` | 8,596 | `/09-git-github/branch-commit-pull-request/` |\n| [Git과 GitHub는 다릅니다](src/content/docs/09-git-github/git-and-github.md) | `draft` | 15,109 | `/09-git-github/git-and-github/` |\n| [9. Git과 GitHub](src/content/docs/09-git-github/index.md) | `draft` | 879 | `/09-git-github/` |\n| [되돌리기·충돌·릴리스](src/content/docs/09-git-github/undo-merge-conflict-release.md) | `draft` | 9,244 | `/09-git-github/undo-merge-conflict-release/` |\n\n### 10. 배포와 운영",
        "\n| 문서 | 상태 | 본문 문자 수 | 공개 경로 |\n|---|---:|---:|---|\n| [브랜치·커밋·Pull Request](src/content/docs/09-git-github/branch-commit-pull-request.md) | `draft` | 8,738 | `/09-git-github/branch-commit-pull-request/` |\n| [Git과 GitHub는 다릅니다](src/content/docs/09-git-github/git-and-github.md) | `draft` | 16,550 | `/09-git-github/git-and-github/` |\n| [9. Git과 GitHub](src/content/docs/09-git-github/index.md) | `draft` | 879 | `/09-git-github/` |\n| [되돌리기·충돌·릴리스](src/content/docs/09-git-github/undo-merge-conflict-release.md) | `draft` | 9,281 | `/09-git-github/undo-merge-conflict-release/` |\n\n### 10. 배포와 운영"
      ]
    ]
  },
  {
    "path": "research/source-map.md",
    "before": "84ed7ebc633280539ecdddf2be9ed7e4a3d70d603c85fdb92125ebf3b43a1099",
    "after": "a0b728e876d70510fb0201b0136fb8be0cb2fbf966ca56d5bc4d775c6d2adb48",
    "replacements": [
      [
        "# 출처 지도\n\n2026-11-15 R07 현재 적용 보충: [새 직접 근거](public-beta-review-source-excerpts/r07-testing-2026-11-15.md)와 [finding 재판정](../docs/project/reviews/public-beta-1/r07-testing-adjudication.md)을 기준으로 테스트 전략의 ISO 귀속을 일반 개념·조직·관리·동적 테스트 및 ISO/IEC 20246 정적 리뷰 연결로 좁혔습니다. manual/automated·scripted/unscripted의 공개 안내 열거는 현재 not-confirmed이며 원고의 해당 귀속을 제거했습니다. 아래 2026-08-13의 edition·stage·열거 확인 기록은 당시 역사로 보존하며 현재 재확인으로 승격하지 않습니다. 분류 자체의 부정이나 유료 표준 전체 미수록 판정은 아닙니다.\n\n추적 구조 기준일: 2026-08-12",
        "# 출처 지도\n\n2026-11-15 R08 현재 적용 보충: [Git·GitHub 직접 근거](public-beta-review-source-excerpts/r08-git-github-2026-11-15.md)의 공식 reference·Pro Git 세 본문·GitHub PR/Actions 확인을 Git 상태·비교·전송·협업 경계에 적용합니다. status의 untracked 표시 설정, 첫 커밋 전 HEAD 부재, diff HEAD의 순변화, pull의 버전·옵션·설정 차이를 구분하고 로컬 merge와 GitHub PR 병합 및 PR 생성과 push 증거를 분리합니다. 원고의 승인 절차는 Git 내장 조건이 아닌 핸드북 안전 정책입니다. 실제 계정·원격 명령·GitHub UI·배포 실행은 확인하지 않았으며 아래 과거 확인일은 역사로 유지합니다. 원고와 인접 문맥의 수정은 같은 R08 reviewer 후속 검토 대기이고 R21 전체 검토를 대체하지 않습니다.\n\n2026-11-15 R07 현재 적용 보충: [새 직접 근거](public-beta-review-source-excerpts/r07-testing-2026-11-15.md)와 [finding 재판정](../docs/project/reviews/public-beta-1/r07-testing-adjudication.md)을 기준으로 테스트 전략의 ISO 귀속을 일반 개념·조직·관리·동적 테스트 및 ISO/IEC 20246 정적 리뷰 연결로 좁혔습니다. manual/automated·scripted/unscripted의 공개 안내 열거는 현재 not-confirmed이며 원고의 해당 귀속을 제거했습니다. 아래 2026-08-13의 edition·stage·열거 확인 기록은 당시 역사로 보존하며 현재 재확인으로 승격하지 않습니다. 분류 자체의 부정이나 유료 표준 전체 미수록 판정은 아닙니다.\n\n추적 구조 기준일: 2026-08-12"
      ]
    ]
  }
];
export function r08PreFixBytes(path,bytes){
 bytes=r08PreCloseoutBytes(path,bytes);
 const e=r08FixTransitions.find(x=>x.path===path);if(!e||sha(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R08 reversal not unique');text=text.replace(after,before);}
 if(sha(text)!==e.before)throw Error('R08 historical bytes mismatch');return Buffer.from(text);
}
export function validateR08Current(read){const errors=[];for(const e of r08FixTransitions){try{if(sha(r08PreCloseoutBytes(e.path,read(e.path)))!==e.after)errors.push('R08 current patch mismatch: '+e.path)}catch{errors.push('R08 current patch missing: '+e.path)}}return errors;}
