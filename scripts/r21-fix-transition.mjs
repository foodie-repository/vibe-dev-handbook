import {r21PreCloseoutBytes} from './r21-closeout.mjs';
import {createHash} from 'node:crypto';
const sha=b=>createHash('sha256').update(b).digest('hex');
export const r21FixTransitions=[
  {
    "path": "CONTENT_MAP.md",
    "before": "1d0d601caa9375a259950489c8221104d8efa3c4cb5ffed64996c12b1a00e0e1",
    "after": "8183a92cf92fbad4aaf3c19d249232b40efe7a6ec1673f939b46494608f4dfb6",
    "replacements": [
      [
        "|---|---:|---:|---|\n| [브랜치·커밋·Pull Request](src/content/docs/09-git-github/branch-commit-pull-request.md) | `draft` | 8,738 | `/09-git-github/branch-commit-pull-request/` |\n| [Git과 GitHub는 다릅니다](src/content/docs/09-git-github/git-and-github.md) | `review` | 16,550 | `/09-git-github/git-and-github/` |\n| [9. Git과 GitHub](src/content/docs/09-git-github/index.md) | `draft` | 879 | `/09-git-github/` |\n| [되돌리기·충돌·릴리스](src/content/docs/09-git-github/undo-merge-conflict-release.md) | `draft` | 9,281 | `/09-git-github/undo-merge-conflict-release/` |\n\n",
        "|---|---:|---:|---|\n| [브랜치·커밋·Pull Request](src/content/docs/09-git-github/branch-commit-pull-request.md) | `draft` | 9,556 | `/09-git-github/branch-commit-pull-request/` |\n| [Git과 GitHub는 다릅니다](src/content/docs/09-git-github/git-and-github.md) | `review` | 16,550 | `/09-git-github/git-and-github/` |\n| [9. Git과 GitHub](src/content/docs/09-git-github/index.md) | `draft` | 879 | `/09-git-github/` |\n| [되돌리기·충돌·릴리스](src/content/docs/09-git-github/undo-merge-conflict-release.md) | `draft` | 10,288 | `/09-git-github/undo-merge-conflict-release/` |\n\n"
      ]
    ]
  },
  {
    "path": "research/source-map.md",
    "before": "3b4ec3a738cce9717f9858c24d3f5b91f34874b7990248ac55c6dd5f9010d70c",
    "after": "0edba96840dbc66161902b57098a49ad2b2cfe12c0fb628c36250472bedd19bc",
    "replacements": [
      [
        "\n2026-11-16 R20 후속 판정: 아래 R20 현재 적용 보충의 검토 대기는 당시 고정 후보 상태입니다. 같은 저장 reviewer Fix2의 원고/코드/기록 PASS C0/I0/M0·두 원고각18/18·M03/F1-M01 RESOLVED와 앞선 I2/M01/M02/P-M01 해소를 연결했고 review 전이는 R20 controller closeout에 연결합니다. 과거 출처·접근 실패·미확인 범위는 유지하며 M5전체/ready/공개 승인을 뜻하지 않습니다.\n",
        "\nR21의 2026-11-16 보충 확인은 [Git 지원 직접 근거](public-beta-review-source-excerpts/r21-git-support-2026-11-16.md)에 기록했습니다. PB-043·PB-045의 Git 명령 형식·복원 source·미추적 손실·PR 권한·태그/릴리스 경계를 공식16페이지의 명시 범위로 재확인했습니다. 아래 2026-08-13 기록은 당시 역사로 유지하며, 실제 Git 복구·GitHub 권한·공개 작업을 실행한 증거로 확대하지 않습니다.\n\n2026-11-16 R20 후속 판정: 아래 R20 현재 적용 보충의 검토 대기는 당시 고정 후보 상태입니다. 같은 저장 reviewer Fix2의 원고/코드/기록 PASS C0/I0/M0·두 원고각18/18·M03/F1-M01 RESOLVED와 앞선 I2/M01/M02/P-M01 해소를 연결했고 review 전이는 R20 controller closeout에 연결합니다. 과거 출처·접근 실패·미확인 범위는 유지하며 M5전체/ready/공개 승인을 뜻하지 않습니다.\n"
      ]
    ]
  },
  {
    "path": "src/content/docs/09-git-github/branch-commit-pull-request.md",
    "before": "fdf94f67c24f57c23857cb132618301ee91a2d205bd8a8a5bff10d4014512bea",
    "after": "1f43c51daf027432e2f36e5680361a02fbff9262d93a6123391dcaf8df39ea91",
    "replacements": [
      [
        "```bash\ngit status --short --branch\ngit branch --show-current\n",
        "```bash\ngit status --short --branch --untracked-files=all\ngit branch --show-current\n"
      ],
      [
        "\n커밋 전에는 전체 상태, unstaged diff, staged diff를 서로 다른 관찰값으로 읽습니다. untracked 파일은 일반 `git diff`에 나타나지 않을 수 있으므로 status와 파일 내용을 함께 확인합니다.\n\n```bash\ngit status --short\ngit diff\n",
        "\n커밋 전에는 전체 상태, unstaged diff, staged diff를 서로 다른 관찰값으로 읽습니다. untracked 파일은 일반 `git diff`에 나타나지 않을 수 있으므로 status와 파일 내용을 함께 확인합니다. 안전 점검에서는 `--untracked-files=all`을 명시합니다. 기본 status는 설정에 따라 새 파일을 숨기거나 디렉터리로 묶을 수 있으며, 이 옵션도 ignored 파일까지 보여 주지는 않습니다. 필요한 ignored 파일은 승인된 범위에서 별도로 확인합니다.\n\n```bash\ngit status --short --untracked-files=all\ngit diff\n"
      ],
      [
        "\n기존 사용자 변경이 함께 있다면 경로나 변경 조각 단위로 stage 후보를 나누고, 안전하게 분리할 수 없는 파일은 커밋 후보에 넣지 않습니다. stage 뒤에는 staged diff와 의도적으로 남긴 unstaged·untracked 상태를 다시 확인합니다.\n\n",
        "\n첫 커밋 전에는 비교할 HEAD 커밋이 없어 `git diff HEAD`가 실패합니다. 이때는 status·새 파일 내용·`git diff --staged`로 후보를 확인하며 기준 부재를 변경 없음으로 해석하지 않습니다.\n\n기존 사용자 변경이 함께 있다면 경로나 변경 조각 단위로 stage 후보를 나누고, 안전하게 분리할 수 없는 파일은 커밋 후보에 넣지 않습니다. stage 뒤에는 staged diff와 의도적으로 남긴 unstaged·untracked 상태를 다시 확인합니다. 일부만 stage하거나 검증 뒤 수정했다면 커밋 후보인 index 스냅샷이 검증한 작업 트리와 다를 수 있습니다. 제외한 코드·설정·데이터 제약에 검증 결과가 의존하는지 대조하고, 필요하면 사용자 변경을 보존한 별도 환경에서 후보 스냅샷에 필요한 검증을 수행합니다. 작업 트리에만 있는 제약을 검증했다는 이유로 index의 후보도 성공했다고 보고하지 않습니다. 이를 위해 자동 stash나 사용자 변경 삭제를 하지 않습니다.\n\n"
      ],
      [
        "4. 전체·unstaged·staged·untracked 상태를 직접 대조합니다.\n5. 관련 파일만 로컬 커밋 후보로 선택하고 커밋 메시지에 의도를 남깁니다.\n6. push·PR·리뷰 요청·병합·배포는 각각 별도 승인과 직접 증거로 판정합니다.\n7. 리뷰 의견은 요구·코드·검증과 대조해 수용·부분 수용·기각한 뒤 재검증합니다.\n\n## 흔한 오해와 실패\n",
        "4. 전체·unstaged·staged·untracked 상태를 직접 대조합니다.\n5. 관련 변경만 로컬 커밋 후보로 선택하고 검증한 상태와 후보의 차이·의존성을 확인합니다. 필요한 후보 검증 뒤 커밋 메시지에 의도를 남깁니다.\n6. 로컬 merge는 로컬 상태를, push·PR 생성·리뷰 요청·GitHub PR 병합·배포는 각각의 원격·외부 상태를 바꿉니다. 대상과 권한 및 직접 증거를 따로 판정합니다.\n7. 리뷰 의견은 요구·코드·검증과 대조해 수용·부분 수용·기각한 뒤 재검증합니다.\n\n승인 절차는 Git 명령의 내장 조건이 아니라 핸드북의 작업 안전 정책입니다. 명시적인 승인이나 상시 정책이 이미 있으면 그 범위에서 따르며, 로컬 통합 허용을 원격 쓰기 허용으로 확대하지 않습니다. 승인 범위를 벗어나는 행동만 별도로 확인합니다.\n\n## 흔한 오해와 실패\n"
      ],
      [
        "- [ ] 전체·unstaged·staged diff와 untracked 파일을 각각 확인했습니다.\n- [ ] 검증한 파일만 로컬 커밋 후보로 선택했습니다.\n- [ ] PR에 범위·비목표·실행 증거·미검증 범위·위험·복구 조건이 있습니다.\n",
        "- [ ] 전체·unstaged·staged diff와 untracked 파일을 각각 확인했습니다.\n- [ ] 커밋 후보 스냅샷과 검증한 상태의 차이·의존성을 확인하고 필요한 후보 검증을 수행했습니다.\n- [ ] PR에 범위·비목표·실행 증거·미검증 범위·위험·복구 조건이 있습니다.\n"
      ]
    ]
  },
  {
    "path": "src/content/docs/09-git-github/undo-merge-conflict-release.md",
    "before": "f349e1b0a7aac63598a550c494a1724c6ce8e11cf571b777d829fbca65d149e5",
    "after": "ce34e4193f54120f7851809e51c7f8b3d27b6a7cffc6c461bacfe61c0a70c4dc",
    "replacements": [
      [
        "\n상태를 확인하기 전 파괴 가능성이 있는 명령을 실행하지 않습니다. 먼저 `git status`, 관련 diff, branch와 HEAD, 최근 이력, remote/upstream, 대상 commit을 읽고 필요한 경우 패치·보호 브랜치·독립 사본처럼 되돌아갈 기준을 만듭니다. 무엇을 보존하는지 모른 채 “백업 브랜치가 있으니 안전하다”고 말할 수도 없습니다. untracked 파일과 외부 상태는 브랜치가 보호하지 않기 때문입니다.\n\n",
        "\n상태를 확인하기 전 파괴 가능성이 있는 명령을 실행하지 않습니다. 먼저 `git status`, 관련 diff, branch와 HEAD, 최근 이력, remote/upstream, 대상 commit을 읽고 필요한 경우 패치·보호 브랜치·독립 사본처럼 되돌아갈 기준을 만듭니다. 무엇을 보존하는지 모른 채 “백업 브랜치가 있으니 안전하다”고 말할 수도 없습니다. 보호 브랜치는 커밋된 이력을 가리킬 뿐, tracked 파일의 미커밋 수정·index의 별도 내용·untracked 파일·외부 상태를 보존하지 않습니다.\n\n예를 들어 HEAD=A, index=B, 작업 파일=C이고 별도 untracked 파일이 있다면 A를 가리키는 참조만으로 B·C·새 파일을 복원할 수 없습니다. staged·unstaged·untracked 각각의 보존 위치와 복원 방법을 확인합니다. 패치도 어떤 기준 사이의 비교인지, 새 파일·바이너리 등 필요한 내용을 포함하는지 따로 확인하며 기본 diff 하나로 모든 상태를 보존했다고 판단하지 않습니다. 승인된 범위의 사본 등 필요한 수단을 선택하고 자동 stash나 사용자 변경 삭제로 보존을 대신하지 않습니다.\n\n"
      ],
      [
        "\nrestore는 기본적으로 특정 파일의 작업 트리 내용을 index 같은 원본에서 복원하며 옵션에 따라 index도 바꿀 수 있습니다. 현재 브랜치가 가리키는 commit 자체를 이동하지는 않습니다. 대상 경로·원본·`--staged` 여부를 정확히 확인하지 않으면 남겨야 할 미커밋 수정이 사라질 수 있습니다.\n\n",
        "\nrestore는 기본적으로 특정 파일의 작업 트리 내용을 index에서 복원합니다. `--staged`가 있으면 기본 source는 HEAD이며 복원 대상은 index입니다. `--source`로 원본을 명시하거나 옵션으로 작업 트리와 index를 함께 바꿀 수도 있습니다. 현재 브랜치가 가리키는 commit 자체를 이동하지는 않습니다. 대상 경로·원본·복원 위치를 정확히 확인하지 않으면 남겨야 할 미커밋 수정이 사라질 수 있고, source에 없는 tracked 경로는 삭제될 수도 있습니다.\n\n"
      ],
      [
        "\nrevert는 branch tip을 과거로 옮기는 대신 선택한 commit의 효과를 취소하는 새 commit을 만듭니다. 이미 공유된 이력을 보존해야 할 때 일반적으로 검토하기 좋은 방법입니다. 다만 “정확히 과거 상태로 시간 이동”하는 것이 아니므로 이후 변경과 충돌하거나 반대 변경이 현재 요구에 맞지 않을 수 있습니다.\n\n",
        "\nrevert는 branch tip을 과거로 옮기는 대신 기본적으로 선택한 commit의 효과를 취소하는 새 commit을 만듭니다. `--no-commit`은 반대 변경을 index와 작업 트리에 적용하지만 자동으로 새 commit을 만들지 않습니다. 반대 변경 적용·새 commit 생성·원격 공유는 각각 별도 증거로 확인합니다. 이미 공유된 이력을 보존해야 할 때 일반적으로 검토하기 좋은 방법입니다. 다만 “정확히 과거 상태로 시간 이동”하는 것이 아니므로 이후 변경과 충돌하거나 반대 변경이 현재 요구에 맞지 않을 수 있습니다.\n\n"
      ],
      [
        "\nreset은 선택한 mode에 따라 현재 branch가 가리키는 commit, index와 작업 트리를 서로 다른 범위로 바꿉니다. 단순한 “커밋 취소” 명령이 아닙니다.\n\n",
        "\nreset은 형식과 mode에 따라 영향 범위가 다르며 단순한 “커밋 취소” 명령이 아닙니다. 아래 목록은 commit을 대상으로 하는 형식의 설명입니다. 경로를 지정하는 형식은 선택한 경로의 index만 바꾸고 HEAD와 작업 트리는 바꾸지 않으므로, stage만 해제하는 후보와 branch tip을 옮기는 후보를 구분해야 합니다.\n\n"
      ],
      [
        "- 기본 mixed reset: branch tip과 index를 바꾸되 작업 트리 수정을 남길 수 있습니다.\n- `--hard`: branch tip·index·작업 트리를 대상에 맞추며 추적 파일의 로컬 변경을 잃을 수 있습니다.\n\n",
        "- 기본 mixed reset: branch tip과 index를 바꾸되 작업 트리 수정을 남길 수 있습니다.\n- `--hard`: branch tip·index·작업 트리를 대상에 맞추며 추적 파일의 로컬 변경을 잃을 수 있습니다. 대상 tracked 파일을 배치하는 데 방해되는 untracked 파일·디렉터리도 제거될 수 있습니다. 모든 untracked 파일을 일괄 삭제한다는 뜻은 아닙니다.\n\n"
      ],
      [
        "2. **상태 분류**: 미커밋·staged·로컬 전용·공유·운영 상태를 구분합니다.\n3. **보존**: 필요한 diff, patch, commit ID, 로그와 외부 영향 증거를 안전한 위치에 남깁니다.\n4. **예측**: branch tip·index·working tree·remote·운영 상태가 어떻게 바뀔지 적습니다.\n",
        "2. **상태 분류**: 미커밋·staged·로컬 전용·공유·운영 상태를 구분합니다.\n3. **보존**: 필요한 diff, patch, commit ID, 로그와 외부 영향 증거를 안전한 위치에 남깁니다. staged·unstaged·untracked별로 포함된 내용과 복원 방법을 확인하며 보호 참조만으로 미커밋 상태까지 보존했다고 판단하지 않습니다.\n4. **예측**: branch tip·index·working tree·remote·운영 상태가 어떻게 바뀔지 적습니다.\n"
      ],
      [
        "6. 해결 결과 전체 diff와 새 commit graph를 다시 읽습니다.\n7. 원격 공유나 병합은 별도 승인 뒤 수행합니다.\n\n",
        "6. 해결 결과 전체 diff와 새 commit graph를 다시 읽습니다.\n7. 로컬 병합과 원격 공유·GitHub PR 병합의 상태 변화 및 권한을 구분합니다. 핸드북의 안전 정책에 따라 기존 명시적 승인·상시 정책의 범위 안에서 수행하고 그 밖의 행동은 별도로 확인합니다. 이는 Git의 내장 승인 조건이 아니며 로컬 병합 허용이 원격 쓰기 허용을 뜻하지 않습니다.\n\n"
      ],
      [
        "\n```text\n파일과 외부 상태를 변경하지 말고 현재 복구 범위를 분류하라.\n",
        "\n```text wrap\n파일과 외부 상태를 변경하지 말고 현재 복구 범위를 분류하라.\n"
      ],
      [
        "\nmode마다 branch tip·index·working tree 영향이 다르고 `--hard`는 추적 파일의 로컬 변경을 잃을 수 있습니다. 전후 상태 표와 보호 기준 없이는 실행하지 마세요.\n\n",
        "\ncommit 형식의 mode와 index만 바꾸는 경로 지정 형식을 먼저 구분하세요. `--hard`는 추적 파일의 로컬 변경뿐 아니라 대상 파일 배치를 방해하는 미추적 파일·디렉터리도 잃게 할 수 있습니다. 전후 상태 표와 보호 기준 없이는 실행하지 마세요.\n\n"
      ]
    ]
  }
];
export function r21PreFixBytes(path,bytes){bytes=r21PreCloseoutBytes(path,bytes);const e=r21FixTransitions.find(x=>x.path===path);if(!e||sha(bytes)!==e.after)return bytes;let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R21 reversal not unique');text=text.replace(after,before)}if(sha(text)!==e.before)throw Error('R21 historical bytes mismatch');return Buffer.from(text);}
export function validateR21Current(read){const errors=[];for(const e of r21FixTransitions){try{if(sha(r21PreCloseoutBytes(e.path,read(e.path)))!==e.after)errors.push('R21 current patch mismatch: '+e.path)}catch{errors.push('R21 current patch missing: '+e.path)}}return errors;}
