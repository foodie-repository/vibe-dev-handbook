import {r19PreCloseoutBytes} from './r19-closeout.mjs';
import {createHash} from 'node:crypto';
const sha=b=>createHash('sha256').update(b).digest('hex');
export const r19FixTransitions=[
  {
    "path": "CONTENT_MAP.md",
    "before": "5a709ee2194326260f237a2733c8bb973aa4dbac7dd64fa8649981a13526b819",
    "after": "af668d35fe44d67be57a52baeb81465e8ba68933fa333eb30222b95e3ed1af1d",
    "replacements": [
      [
        "|---|---:|---:|---|\n| [코드 리뷰와 CI/CD](src/content/docs/07-workflow-methods/code-review-ci-cd.md) | `draft` | 8,688 | `/07-workflow-methods/code-review-ci-cd/` |\n| [점진적 전달과 작업 분해](src/content/docs/07-workflow-methods/incremental-delivery.md) | `draft` | 8,814 | `/07-workflow-methods/incremental-delivery/` |\n| [7. 개발 절차와 협업](src/content/docs/07-workflow-methods/index.md) | `draft` | 843 | `/07-workflow-methods/` |\n| [소프트웨어 개발 생명주기](src/content/docs/07-workflow-methods/software-development-lifecycle.md) | `draft` | 9,942 | `/07-workflow-methods/software-development-lifecycle/` |\n\n",
        "|---|---:|---:|---|\n| [코드 리뷰와 CI/CD](src/content/docs/07-workflow-methods/code-review-ci-cd.md) | `draft` | 9,079 | `/07-workflow-methods/code-review-ci-cd/` |\n| [점진적 전달과 작업 분해](src/content/docs/07-workflow-methods/incremental-delivery.md) | `draft` | 9,547 | `/07-workflow-methods/incremental-delivery/` |\n| [7. 개발 절차와 협업](src/content/docs/07-workflow-methods/index.md) | `draft` | 843 | `/07-workflow-methods/` |\n| [소프트웨어 개발 생명주기](src/content/docs/07-workflow-methods/software-development-lifecycle.md) | `draft` | 10,168 | `/07-workflow-methods/software-development-lifecycle/` |\n\n"
      ]
    ]
  },
  {
    "path": "research/source-map.md",
    "before": "50ff4cbad9ae2258b48c2e6bf421f4814dd229c24585ced228436a8f6e0975c9",
    "after": "0149fd1f5a61ac9b3e4d4a76c53b2bb4e0c9e02c20cbe130b763efaebcdb227b",
    "replacements": [
      [
        "\n2026-11-15 R18 후속 판정: 아래 R18 현재 적용 보충의 검토 대기는 당시 고정 후보 상태입니다. 같은 저장 reviewer Fix1의 원고/코드 PASS C0/I0/M0·두 원고각18/18·6개ID RESOLVED로 해소했고 review 전이는 R18 controller closeout에 연결합니다. 과거 출처·접근 실패·미확인 범위는 유지하며 M5전체/ready/공개 승인을 뜻하지 않습니다.\n",
        "\n2026-11-16 R19 현재 적용 보충: PB-037·038·039의 Google 코드 리뷰/Small CLs·Fowler CI·Hodgson Feature Toggles·Agile 원칙·ISO12207·NIST SSDF1.1·GitHub 보호 브랜치/배포 환경을 [R19 직접 근거](public-beta-review-source-excerpts/r19-workflow-support-2026-11-16.md)의 명시 범위에서 새 확인했습니다. Hodgson 글의2016발행과2017갱신, GitHub의skipped/neutral·플랜/역할/bypass를 구분하며 ISO는 공개 소개·메타데이터만 확인했습니다. 과거 확인 기록과 미독 범위는 보존합니다. 최초 R19 NEEDS CHANGES C0/I5/M5에 대한 좁은 수정 후보이며 같은 저장 reviewer의 후속 판정 전입니다. 실제 원격 설정·DB/API·운영 시험·M5전체·ready·공개 성공을 주장하지 않습니다.\n\n2026-11-15 R18 후속 판정: 아래 R18 현재 적용 보충의 검토 대기는 당시 고정 후보 상태입니다. 같은 저장 reviewer Fix1의 원고/코드 PASS C0/I0/M0·두 원고각18/18·6개ID RESOLVED로 해소했고 review 전이는 R18 controller closeout에 연결합니다. 과거 출처·접근 실패·미확인 범위는 유지하며 M5전체/ready/공개 승인을 뜻하지 않습니다.\n"
      ]
    ]
  },
  {
    "path": "src/content/docs/07-workflow-methods/code-review-ci-cd.md",
    "before": "961ec7c9263440d6982b69672df91ed80135b195490434d52a8666be36f3425c",
    "after": "e6a2742051596b5cd54d86d7626491110ac3dcc88cf2fcab72b9607d620d190a",
    "replacements": [
      [
        "\n초록 체크는 **그 커밋이 그 환경에서 그 검사를 통과했다**는 좁은 증거입니다. 실행되지 않은 테스트, 실제 사용자 목적, 운영 데이터 마이그레이션, 접근성 전체, 배포 결과까지 증명하지 않습니다.\n\n",
        "\n실제 실행 수·대상·환경·로그를 확인한 검사 통과는 그 범위의 좁은 증거입니다. 서비스의 초록 표시나 병합 허용만으로 실제 검사 실행을 단정하지 않습니다. GitHub에서는 `skipped`나 `neutral`도 필수 상태 검사 조건을 충족할 수 있으므로, 실행 0건·건너뜀·조건식을 로그와 함께 확인해야 합니다. 실행되지 않은 테스트, 실제 사용자 목적, 운영 데이터 마이그레이션, 접근성 전체, 배포 결과까지 증명하지 않습니다.\n\n"
      ],
      [
        "\nCI는 정적 검사, 단위 테스트, 실제 데이터베이스 경계를 포함한 통합 테스트, 빌드를 실행합니다. 동시 요청 테스트가 실패하면 병합은 멈춥니다. 테스트를 삭제해 초록색으로 만드는 대신 실패한 불변식과 재현 조건을 수정하고 같은 커밋 기준으로 다시 확인합니다.\n\n",
        "\nCI는 정적 검사, 단위 테스트, 실제 데이터베이스 경계를 포함한 통합 테스트, 빌드를 실행합니다. 동시 요청 테스트가 실패하면 병합은 멈춥니다. 테스트를 삭제해 초록색으로 만드는 대신 원래 실패한 커밋·환경·재현 조건을 보존합니다. 결함을 수정한 뒤에는 새 커밋 또는 미커밋 diff까지 포함한 정확한 작업 트리 상태를 기록하고 같은 불변식과 오라클로 다시 확인합니다.\n\n"
      ],
      [
        "\n운영 반영 뒤 정상 참가, 중복 거절, 정원 마감, 자기 취소를 실제 환경에서 확인하고 오류율과 데이터 불변식을 관찰합니다. 오류가 증가하면 사용자 영향부터 줄입니다. 이전 아티팩트로 돌리는 롤백이 새 스키마와 호환되지 않으면, 호환 수정으로 롤포워드하거나 기능 플래그를 꺼야 할 수 있습니다. “배포 작업 성공”은 이 확인 전까지 사용자 성공의 증거가 아닙니다.\n\n",
        "\n운영 반영 뒤에는 승인된 범위의 안전한 읽기 확인을 우선합니다. 정상 참가·중복 거절·정원 마감·자기 취소의 쓰기 시험은 별도로 승인된 전용 모임·계정·가상 데이터에서 영향 범위·중지 기준·정리 절차를 정한 경우에만 수행합니다. 배포 승인이나 읽기 권한이 쓰기 시험 권한을 뜻하지 않으며, 조건이 없으면 해당 흐름은 미검증으로 남깁니다. 정원 경쟁이나 장애 주입을 일반 사용자의 운영 데이터에서 시험하지 않습니다.\n\n허용된 확인 범위에서 오류율과 데이터 불변식을 관찰하고 오류가 증가하면 사용자 영향부터 줄입니다. 이전 아티팩트로 돌리는 롤백이 새 스키마와 호환되지 않으면, 호환 수정으로 롤포워드하거나 기능 플래그를 꺼야 할 수 있습니다. “배포 작업 성공”은 이 확인 전까지 사용자 성공의 증거가 아닙니다.\n\n"
      ],
      [
        "\n```text\n이 변경의 코드 리뷰·CI·전달·배포 게이트를 설계해 주세요.\n",
        "\n```text wrap\n이 변경의 코드 리뷰·CI·전달·배포 게이트를 설계해 주세요.\n"
      ]
    ]
  },
  {
    "path": "src/content/docs/07-workflow-methods/incremental-delivery.md",
    "before": "e767cb72008ce8bb24ed28282b44aef92c314a138e3294ca7a66795142482e71",
    "after": "f93b5f63b72ace83a15670aae56c3f25d156ebef01259c68b2c3e652c850d035",
    "replacements": [
      [
        "\n```text\n조각: 모집 중인 모임에 한 번 참가하기\n",
        "\n```text wrap\n조각: 모집 중인 모임에 한 번 참가하기\n"
      ],
      [
        "\n### 조각 2. 인증한 사용자의 참가 신청\n\n- 결과: 모집 중이고 정원이 남은 모임에 참가합니다.\n- 수용: 정상·미인증·중복·정원 마감·동시 요청을 판정합니다.\n- 피드백: 거절 이유와 결과 불명 복구가 이해되는지 봅니다.\n- 복구: 신규 참가 경로를 플래그로 끌 수 있지만 이미 확정된 참가 관계는 삭제하지 않습니다.\n\n### 조각 3. 자신의 참가 상태 조회\n\n- 결과: 응답을 잃어도 현재 참가 여부를 다시 확인합니다.\n- 수용: 사용자·모임별 권위 상태와 마지막 처리 결과를 구분합니다.\n- 피드백: 재시도 전에 상태 조회가 중복 행동을 줄이는지 봅니다.\n",
        "\n### 조각 2. 참가 신청과 최소 결과 확인\n\n- 결과: 인증한 사용자가 모집 중이고 정원이 남은 모임에 참가하며, 응답을 잃어도 자신의 관계와 모임 상태를 확인할 최소 조회 경로를 함께 제공합니다.\n- 수용: 정상·미인증·중복·정원 마감·동시 요청과 응답 유실·조회 실패를 구분합니다. 조회 실패나 이전 요청의 종결·안전한 재시도 조건을 판정할 수 없는 경우에는 `결과 불명`을 유지하고 새 쓰기를 보류합니다. 현재 참가 상태만으로 특정 요청의 처리 결과를 단정하지 않습니다.\n- 피드백: 거절 이유와 결과 불명 복구가 이해되는지 봅니다.\n- 복구: 신규 참가 경로를 플래그로 끌 수 있지만 이미 확정된 참가 관계는 삭제하지 않습니다.\n- 통합·공개 조건: 최소 자기 조회와 요청 결과·재시도 계약, 중복·정원 경쟁 판정, 오류·거절·불명 신호와 중지 담당자를 이 조각에서 확인합니다. 빠진 조건이 있으면 독립 수용·공개 완료로 세지 않으며, 조각 3이나 5가 나중에 보완할 것이라고 가정하지 않습니다.\n\n### 조각 3. 자신의 참가 상태 조회 경험 확장\n\n- 결과: 조각 2에서 검증한 최소 자기 조회를 재사용해 사용자가 필요할 때 현재 참가 상태와 확인 중인 상태를 더 쉽게 찾게 합니다. 최초 복구 경로를 여기까지 미루는 것이 아닙니다.\n- 수용: 사용자·모임별 권위 상태와 이전 요청의 처리 결과를 구분하고, 새 화면에서도 안전한 재시도 조건을 확인하기 전에는 새 쓰기를 보류합니다.\n- 피드백: 재시도 전에 상태 조회가 중복 행동을 줄이는지 봅니다.\n"
      ],
      [
        "\n- 결과: 참가자가 자신의 참가만 취소합니다.\n- 수용: 다른 사람의 참가 취소 금지, 이미 취소된 요청의 안전한 판정, 정원 회복을 확인합니다.\n- 피드백: 취소 뒤 목록·상세·내 상태가 일관되게 보이는지 봅니다.\n- 복구: 취소를 되돌리는 업무 규칙이 없다면 코드 롤백으로 삭제된 관계를 자동 복원하지 않습니다.\n\n### 조각 5. 운영 신호와 제한 공개\n\n- 결과: 내부 사용자에게 먼저 공개하고 참가 성공률·거절 사유·오류를 관찰합니다.\n- 수용: 플래그 대상, 신호의 분자·분모, 중단 기준, 담당자와 만료를 기록합니다.\n",
        "\n- 결과: 참가자가 자신의 `confirmed` 관계를 `cancelled`로 바꾸며 행과 이력을 보존합니다.\n- 수용: 타인 취소를 거절하고, 반복 자기 취소는 현재 `cancelled`를 반환하되 추가 인원 감소나 취소 이력을 만들지 않는지 확인합니다. 재참가는 모임이 `open`이고 정원 여유와 활성 고유성 조건을 만족할 때만 허용합니다.\n- 피드백: 취소 뒤 목록·상세·내 상태가 일관되게 보이는지 봅니다.\n- 복구: 코드 롤백만으로 취소 상태를 다시 `confirmed`로 만들지 않습니다. 보존된 상태·이력을 기준으로 허용된 재참가 업무 조건을 다시 판정합니다.\n\n### 조각 5. 공개 범위 확대와 운영 인수\n\n- 결과: 각 앞선 조각의 기본 관측·중지·복구 조건을 재사용하고, 승인된 내부 집단에서 공개 범위를 단계적으로 넓혀 참가 성공률·거절 사유·오류를 관찰합니다. 기본 안전장치를 처음 도입하는 조각이 아닙니다.\n- 수용: 플래그 대상, 신호의 분자·분모, 중단 기준, 담당자와 만료를 기록합니다.\n"
      ],
      [
        "\n```text\n다음 큰 기능을 독립적으로 수용 가능한 수직 조각으로 나눠 주세요.\n",
        "\n```text wrap\n다음 큰 기능을 독립적으로 수용 가능한 수직 조각으로 나눠 주세요.\n"
      ],
      [
        "\n“사용자가 모임에 참가하고 취소하며 알림을 받는다”를 세 개 이상 수직 조각으로 나누세요. 각 조각에 한 문장 결과, 네 종류의 수용 기준, 실제 경계 테스트, 공개 방식, 피드백, 롤백 또는 롤포워드 경로를 씁니다. 그다음 `데이터베이스부터 전부 만들기`와 `파일 다섯 개씩 나누기`가 왜 가짜 점진성인지 반례를 하나씩 적어 보세요.\n\n",
        "\n“사용자가 공개 모임을 조회하고 참가하며 자신의 상태를 확인하거나 취소한다”를 세 개 이상 수직 조각으로 나누세요. 각 조각에 한 문장 결과, 네 종류의 수용 기준, 실제 경계 테스트, 공개 방식, 피드백, 롤백 또는 롤포워드 경로를 씁니다. 참가 쓰기의 최소 결과 확인을 후속 조각에 미루지 마세요. 그다음 `데이터베이스부터 전부 만들기`와 `파일 다섯 개씩 나누기`가 왜 가짜 점진성인지 반례를 하나씩 적어 보세요.\n\n"
      ],
      [
        "- [Agile Manifesto 원칙](https://agilemanifesto.org/principles)은 가치 있는 소프트웨어를 이르고 빈번하게 전달하고, 작동하는 소프트웨어를 진행의 주요 척도로 삼으며, 정기적으로 방식을 조정하는 피드백 방향을 뒷받침합니다. 이 원문이 특정 스프린트 길이, 티켓 크기 또는 이 장의 수직 조각 양식을 정한다고 확대하지 않습니다.\n- [Martin Fowler 사이트의 Feature Toggles](https://martinfowler.com/articles/feature-toggles.html)는 Pete Hodgson이 2017년에 공개한 실무 설명으로 코드 배포와 기능 공개의 분리, 켜짐·꺼짐 시험, 오래된 플래그의 복잡성을 설명하는 데 사용했습니다. 모든 기능과 데이터 변경이 플래그 하나로 안전해진다고 일반화하지 않습니다.\n- [Google Engineering Practices의 Small CLs](https://google.github.io/eng-practices/review/developer/small-cls.html)는 작은 변경이 검토·되돌리기·결함 발견에 주는 조직 사례를 보조합니다. 특정 줄 수나 파일 수를 수직 조각의 보편 기준으로 사용하지 않습니다.\n",
        "- [Agile Manifesto 원칙](https://agilemanifesto.org/principles)은 가치 있는 소프트웨어를 이르고 빈번하게 전달하고, 작동하는 소프트웨어를 진행의 주요 척도로 삼으며, 정기적으로 방식을 조정하는 피드백 방향을 뒷받침합니다. 이 원문이 특정 스프린트 길이, 티켓 크기 또는 이 장의 수직 조각 양식을 정한다고 확대하지 않습니다.\n- [Martin Fowler 사이트의 Feature Toggles](https://martinfowler.com/articles/feature-toggles.html)는 Pete Hodgson이 2016년에 공개하고 2017년에 갱신한 실무 설명으로 코드 배포와 기능 공개의 분리, 켜짐·꺼짐 시험, 오래된 플래그의 복잡성을 설명하는 데 사용했습니다. 모든 기능과 데이터 변경이 플래그 하나로 안전해진다고 일반화하지 않습니다.\n- [Google Engineering Practices의 Small CLs](https://google.github.io/eng-practices/review/developer/small-cls.html)는 작은 변경이 검토·되돌리기·결함 발견에 주는 조직 사례를 보조합니다. 특정 줄 수나 파일 수를 수직 조각의 보편 기준으로 사용하지 않습니다.\n"
      ]
    ]
  },
  {
    "path": "src/content/docs/07-workflow-methods/software-development-lifecycle.md",
    "before": "308c504db784905d390324fbad3c08f53bd71ba67a1dc8fb82bd8c56946b7bc9",
    "after": "3a26d37d1a2458088c5b73923f01b6926c04ea60c8c8b593fa702f4f9c754f2b",
    "replacements": [
      [
        "| 구현(implementation) | 설계를 검토 가능한 실행 결과로 어떻게 만들 것인가? | 코드, 설정, 마이그레이션, 테스트, 아티팩트 | 작은 변경의 diff와 로컬·자동 검증, 추적 가능한 커밋 | 설계 가정이 코드·제품 제약과 맞지 않음 |\n| 검증(verification) | 정한 요구·계약·위험을 어떤 증거로 판정하는가? | 테스트 결과, 리뷰, 빌드, 접근성·보안·사용 확인 | 대상·환경·범위·결과와 미검증 범위를 재현 가능 | 요구 누락, 오라클 오류, 회귀, 사용자 목적 불일치 |\n| 배포(deployment) | 검증한 결과를 어느 환경에 어떻게 안전하게 활성화하는가? | 배포 이력, 환경 설정, 아티팩트·버전, 승인 | 대상 환경에서 상태·스모크·중단 조건·복구 경로 확인 | 환경 차이, 마이그레이션 실패, 보호 게이트 실패 |\n",
        "| 구현(implementation) | 설계를 검토 가능한 실행 결과로 어떻게 만들 것인가? | 코드, 설정, 마이그레이션, 테스트, 아티팩트 | 작은 변경의 diff와 로컬·자동 검증, 추적 가능한 커밋 | 설계 가정이 코드·제품 제약과 맞지 않음 |\n| 검증(verification·validation) | 정한 요구·계약·위험과 실제 사용 목적을 어떤 증거로 판정하는가? | 테스트 결과, 리뷰, 빌드, 접근성·보안·사용 확인 | 대상·환경·범위·결과와 미검증 범위를 재현 가능 | 요구 누락, 오라클 오류, 회귀, 사용자 목적 불일치 |\n| 배포(deployment) | 검증한 결과를 어느 환경에 어떻게 안전하게 활성화하는가? | 배포 이력, 환경 설정, 아티팩트·버전, 승인 | 대상 환경에서 상태·스모크·중단 조건·복구 경로 확인 | 환경 차이, 마이그레이션 실패, 보호 게이트 실패 |\n"
      ],
      [
        "\n```text\n요구: 인증한 사용자는 모집 중이고 정원이 남은 모임에 한 번 참가할 수 있다.\n",
        "\n```text wrap\n요구: 인증한 사용자는 모집 중이고 정원이 남은 모임에 한 번 참가할 수 있다.\n"
      ],
      [
        "\n검증 결과에는 다음이 연결돼야 합니다.\n",
        "\n이 장의 검증 단계는 정한 명세·계약에 맞는지를 확인하는 verification과 실제 사용 목적을 충족하는지를 확인하는 validation을 포괄하는 편집상 묶음입니다. 둘은 판정 대상의 차이이며 자동화와 사람의 역할로 나누는 구분이 아닙니다.\n\n검증 결과에는 다음이 연결돼야 합니다.\n"
      ],
      [
        "\n```text\n이 작업을 발견 → 요구사항 → 설계 → 구현 → 검증 → 배포 → 운영 → 학습의 생명주기 지도로 정리해 주세요.\n",
        "\n```text wrap\n이 작업을 발견 → 요구사항 → 설계 → 구현 → 검증 → 배포 → 운영 → 학습의 생명주기 지도로 정리해 주세요.\n"
      ],
      [
        "- [ ] 문서·코드·테스트·화면 존재를 실행·수용 증거와 구분했나요?\n- [ ] 배포한 아티팩트가 검증한 커밋과 같은가요?\n- [ ] 운영에서 사용자 흐름·데이터·서비스·복구를 확인했나요?\n",
        "- [ ] 문서·코드·테스트·화면 존재를 실행·수용 증거와 구분했나요?\n- [ ] 아티팩트가 검증한 소스 커밋·빌드 설정·의존성에서 생성됐나요?\n- [ ] 검증한 아티팩트와 실제 배포한 아티팩트의 식별자·체크섬이 일치하나요?\n- [ ] 운영에서 사용자 흐름·데이터·서비스·복구를 확인했나요?\n"
      ]
    ]
  }
];
export function r19PreFixBytes(path,bytes){
 bytes=r19PreCloseoutBytes(path,bytes);
 const e=r19FixTransitions.find(x=>x.path===path);if(!e||sha(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R19 reversal not unique');text=text.replace(after,before);}
 if(sha(text)!==e.before)throw Error('R19 historical bytes mismatch');return Buffer.from(text);
}
export function validateR19Current(read){const errors=[];for(const e of r19FixTransitions){try{if(sha(r19PreCloseoutBytes(e.path,read(e.path)))!==e.after)errors.push('R19 current patch mismatch: '+e.path)}catch{errors.push('R19 current patch missing: '+e.path)}}return errors;}
