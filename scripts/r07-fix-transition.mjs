import {createHash} from 'node:crypto';
import {r07PreCloseoutBytes} from './r07-closeout.mjs';
const sha=b=>createHash('sha256').update(b).digest('hex');
export const r07FixTransitions=[
  {
    "path": "src/content/docs/08-quality/testing-strategy.md",
    "before": "fba16a123e78896fab76cd10a1f2eaf057b5893007fc11504238e73766b69e47",
    "after": "67625c79c44769baebd7ad2136107488af3f8f3ff729ebecfabfad812defbed4",
    "replacements": [
      [
        "\n**수동 테스트(manual testing)와 자동 테스트(automated testing)**: 주로 누가 또는 무엇이 절차를 수행하고 판정하는지를 나타내는 다른 축입니다. 사람이 정한 절차를 직접 실행할 수도 있고, 탐색하며 예상하지 못한 문제를 찾을 수도 있습니다. 자동 검사는 빠르고 반복 가능하지만 오라클과 환경이 잘못되면 같은 오류를 빠르게 반복합니다. 수동 테스트도 실행 범위·fixture·기대 결과·관찰·판정 기록이 없으면 재현 가능한 증거가 되기 어렵습니다.\n\nISO/IEC/IEEE 29119 시리즈는 공개 안내에서 동적 테스트의 조직·관리·수준과 manual·automated, scripted·unscripted testing을 다루고, 정적 리뷰는 ISO/IEC 20246과 연결합니다. SWEBOK V4.0a도 코드를 실행하지 않는 static techniques와 실행 기반 테스트를 구분합니다. 이 표준 체계를 모든 팀의 유일한 분류로 강제하지 말고, 실제 산출물·실행 경계·수행 방식·오라클을 기록합니다.\n\n## 비유로 이해하기: 출국 전 여러 검문",
        "\n**수동 테스트(manual testing)와 자동 테스트(automated testing)**: 주로 누가 또는 무엇이 절차를 수행하고 판정하는지를 나타내는 다른 축입니다. 사람이 정한 절차를 직접 실행할 수도 있고, 탐색하며 예상하지 못한 문제를 찾을 수도 있습니다. 자동 검사는 빠르고 반복 가능하지만 오라클과 환경이 잘못되면 같은 오류를 빠르게 반복합니다. 수동 테스트도 실행 범위·fixture·기대 결과·관찰·판정 기록이 없으면 재현 가능한 증거가 되기 어렵습니다.\n\nISO/IEC/IEEE 29119 시리즈의 공개 안내는 조직·관리·동적 테스트 과정과 일반 개념을 설명하고, 정적 리뷰는 ISO/IEC 20246과 연결합니다. 위의 수동·자동 구분은 수행 방식에 대한 교육적 설명이며, 이번에 확인한 공개 안내의 명시적 열거로 귀속하지 않습니다. SWEBOK V4.0a도 코드를 실행하지 않는 static techniques와 실행 기반 테스트를 구분합니다. 이 표준 체계를 모든 팀의 유일한 분류로 강제하지 말고, 실제 산출물·실행 경계·수행 방식·오라클을 기록합니다.\n\n## 비유로 이해하기: 출국 전 여러 검문"
      ],
      [
        "\n## 대역과 테스트 데이터의 경계\n\n**테스트 대역(test double)**: 실제 외부 서비스 대신 사용하는 mock, stub, fake 같은 대체 구성요소입니다. 빠르고 재현 가능한 테스트를 만드는 데 유용하지만 실제 서비스가 아니라 우리가 예상한 계약을 흉내 냅니다. 예상 자체가 틀리거나 실제 제공자가 바뀌면 모든 대역 테스트가 통과해도 연동은 실패할 수 있습니다.\n\n**테스트 fixture**: 테스트를 같은 조건에서 재현하기 위해 미리 준비하는 작은 데이터·파일·상태와 환경입니다. 대역은 구성요소를 대신하고 fixture는 실행 조건을 준비한다는 차이가 있습니다.",
        "\n## 대역과 테스트 데이터의 경계\n\n**테스트 대역(test double)**: 실제 구성요소 대신 사용하는 mock, stub, fake 같은 대체 구성요소입니다. 빠르고 재현 가능한 테스트를 만드는 데 유용하지만 실제 서비스가 아니라 우리가 예상한 계약을 흉내 냅니다. 예상 자체가 틀리거나 실제 제공자가 바뀌면 모든 대역 테스트가 통과해도 연동은 실패할 수 있습니다.\n\n**테스트 fixture**: 테스트를 같은 조건에서 재현하기 위해 미리 준비하는 작은 데이터·파일·상태와 환경입니다. 대역은 구성요소를 대신하고 fixture는 실행 조건을 준비한다는 차이가 있습니다."
      ],
      [
        "\n단위·통합·계약·종단 간은 실행 경계와 초점, 정적 테스팅은 비실행 산출물 검사, 수동·자동은 수행 방식이라는 서로 다른 축입니다. 피라미드 그림에 모두 억지로 층으로 넣지 말고, 위험마다 가장 작은 충분한 증거와 실제 경계·사람 판단의 보완 증거를 배치합니다.\n\n## 커버리지는 실행 흔적이지 실제 성공 증거가 아닙니다\n\n**테스트 커버리지(test coverage)**: 정한 코드 요소·분기·요구·조건 중 테스트가 다룬 정도를 보여 주는 측정입니다. 높은 코드 커버리지는 어떤 줄이나 분기가 실행됐음을 보여 줄 수 있지만 기대값이 맞는지, 중요한 업무 위험을 주장으로 확인했는지, 실제 사용자가 목적을 달성했는지는 혼자 증명하지 못합니다.",
        "\n단위·통합·계약·종단 간은 실행 경계와 초점, 정적 테스팅은 비실행 산출물 검사, 수동·자동은 수행 방식이라는 서로 다른 축입니다. 피라미드 그림에 모두 억지로 층으로 넣지 말고, 위험마다 가장 작은 충분한 증거와 실제 경계·사람 판단의 보완 증거를 배치합니다.\n\n## 커버리지는 다룬 범위의 측정이지 실제 성공의 단독 증거가 아닙니다\n\n**테스트 커버리지(test coverage)**: 정한 코드 요소·분기·요구·조건 중 테스트가 다룬 정도를 보여 주는 측정입니다. 높은 코드 커버리지는 어떤 줄이나 분기가 실행됐음을 보여 줄 수 있지만 기대값이 맞는지, 중요한 업무 위험을 주장으로 확인했는지, 실제 사용자가 목적을 달성했는지는 혼자 증명하지 못합니다."
      ],
      [
        "권한·비용·부작용이 허용하는 범위에서는 검토자가 현재 작업 트리에서 같은 명령을 독립적으로 다시 실행합니다. 운영 환경처럼 재실행 권한이 없거나 비용과 부작용이 큰 경우에는 임의로 실행하지 말고, 승인된 실행 기록·대상·시점과 남은 한계를 확인합니다.\n\n1. **정확한 명령**: 실제로 어떤 명령과 옵션을 실행했나요?\n2. **실행 위치와 환경**: 어느 저장소·브랜치·런타임·설정에서 실행했나요?\n3. **범위**: 전체 테스트인가요, 특정 파일이나 필터만 실행했나요?\n4. **종료 코드와 수량**: [종료 코드(exit code)](../../reference/agent-output-glossary/)는 명령이 끝나며 돌려주는 숫자입니다. 보통 0은 해당 명령이 정의한 성공일 뿐 제품 전체 성공은 아닙니다. 종료 코드와 통과·실패·건너뜀 수는 각각 무엇인가요?\n5. **테스트 쪽 변경**: 테스트 코드, 기대값, 스냅샷, 건너뛰기 표시, 필터와 테스트 실행 설정이 함께 바뀌었나요? 바뀌었다면 검증을 강화했나요, 실패를 숨겼나요?\n6. **변경과의 연결**: 수정한 요구와 코드 경로를 어떤 테스트가 직접 확인하나요?\n7. **실패 이유 확인**: 새 회귀 테스트는 수정 전 기대한 이유로 실패했나요?\n8. **보완 증거**: 빌드, 실제 브라우저, 데이터베이스, 배포 환경과 수동 검토 중 무엇이 더 필요한가요?\n9. **미실행 구분**: 실행하지 않음, 환경 때문에 실행 불가, 실행 후 실패와 성공을 분리했나요?",
        "권한·비용·부작용이 허용하는 범위에서는 검토자가 현재 작업 트리에서 같은 명령을 독립적으로 다시 실행합니다. 운영 환경처럼 재실행 권한이 없거나 비용과 부작용이 큰 경우에는 임의로 실행하지 말고, 승인된 실행 기록·대상·시점과 남은 한계를 확인합니다.\n\n1. **정확한 명령**: 실제로 어떤 명령과 옵션을 실행했나요?\n2. **실행 위치·상태와 시점**: 어느 저장소·브랜치·commit에서 실행했나요? 그때의 미커밋 변경 상태와 실행 시점, 런타임·설정은 무엇인가요? 결과가 빌드 산출물이나 데이터에 의존한다면 해당 아티팩트·데이터 버전도 식별합니다.\n3. **범위**: 전체 테스트인가요, 특정 파일이나 필터만 실행했나요?\n4. **종료 코드와 수량**: [종료 코드(exit code)](../../reference/agent-output-glossary/)는 명령이 끝나며 돌려주는 숫자입니다. 보통 0은 해당 명령이 정의한 성공일 뿐 제품 전체 성공은 아닙니다. 종료 코드와 통과·실패·건너뜀 수는 각각 무엇인가요?\n5. **테스트 쪽 변경**: 테스트 코드, 기대값, 스냅샷, 건너뛰기 표시, 필터와 테스트 실행 설정이 함께 바뀌었나요? 바뀌었다면 검증을 강화했나요, 실패를 숨겼나요?\n6. **변경과의 연결**: 수정한 요구와 코드 경로를 어떤 테스트가 직접 확인하나요? 실행 후 제품 코드·테스트·기대값·설정·데이터가 달라졌다면 이전 성공을 현재 상태의 성공으로 옮기지 않고 변경 영향에 맞게 다시 확인합니다. 같은 브랜치라는 사실만으로 같은 상태를 실행했다고 볼 수 없습니다.\n7. **실패 이유 확인**: 새 회귀 테스트는 수정 전 기대한 이유로 실패했나요?\n8. **보완 증거**: 빌드, 실제 브라우저, 데이터베이스, 배포 환경과 수동 검토 중 무엇이 더 필요한가요?\n9. **미실행 구분**: 실행하지 않음, 환경 때문에 실행 불가, 실행 후 실패와 성공을 분리했나요?"
      ],
      [
        "\n### 읽기 전용 검토 지시 예\n\n```text\n요구사항, 변경 diff, 테스트와 설정, 최근 검증 출력을 읽어라.\n수정 없이 다음을 검토하라.\n- 요구마다 직접 확인하는 테스트\n- 필요한 보완 증거와 미확인 위험\n- 명령, 위치, 범위와 종료 코드\n- 통과·실패·건너뜀 수\n- 테스트·기대값·스냅샷·설정 변경\n- 대역과 fixture가 대신한 실제 경계",
        "\n### 읽기 전용 검토 지시 예\n\n```text wrap\n요구사항, 변경 diff, 테스트와 설정, 최근 검증 출력을 읽어라.\n수정 없이 다음을 검토하라.\n- 요구마다 직접 확인하는 테스트\n- 필요한 보완 증거와 미확인 위험\n- 명령, 위치, 범위와 종료 코드\n- 실행 당시 commit·미커밋 diff 상태·시점, 필요한 아티팩트·데이터 버전\n- 실행 이후 변경과 기존 성공 증거의 유효 범위\n- 통과·실패·건너뜀 수\n- 테스트·기대값·스냅샷·설정 변경\n- 대역과 fixture가 대신한 실제 경계"
      ],
      [
        "- [ ] 대역·fixture·샌드박스로 대체한 실제 경계와 남은 빈틈을 기록했습니다.\n- [ ] 기능 테스트가 대신하지 못하는 접근성·보안·성능·복구·데이터 품질 위험을 확인했습니다.\n- [ ] 정확한 명령, 위치, 환경, 범위, 종료 코드와 테스트 수를 확인했습니다.\n- [ ] 테스트·기대값·스냅샷·건너뛰기·필터·실행 설정의 변경이 실패를 숨기지 않는지 확인했습니다.\n- [ ] skipped·미실행·실행 불가·실패·성공을 구분했습니다.\n- [ ] 권한·비용·부작용이 허용되는 범위에서 현재 작업 트리의 명령을 독립적으로 다시 실행했습니다.",
        "- [ ] 대역·fixture·샌드박스로 대체한 실제 경계와 남은 빈틈을 기록했습니다.\n- [ ] 기능 테스트가 대신하지 못하는 접근성·보안·성능·복구·데이터 품질 위험을 확인했습니다.\n- [ ] 정확한 명령, 위치, 환경, 범위, 종료 코드와 테스트 수를 확인했습니다.\n- [ ] 실행 당시 commit·미커밋 diff 상태·시점과 필요한 아티팩트·데이터 버전을 기록하고, 실행 이후 변경에 맞는 재검증 여부를 확인했습니다.\n- [ ] 테스트·기대값·스냅샷·건너뛰기·필터·실행 설정의 변경이 실패를 숨기지 않는지 확인했습니다.\n- [ ] skipped·미실행·실행 불가·실패·성공을 구분했습니다.\n- [ ] 권한·비용·부작용이 허용되는 범위에서 현재 작업 트리의 명령을 독립적으로 다시 실행했습니다."
      ],
      [
        "- [ ] 빌드와 실제 브라우저 또는 대상 환경 확인을 테스트 통과와 별도 증거로 남겼습니다.\n- [ ] 운영 데이터와 비밀정보가 테스트 데이터·로그·스냅샷에 포함되지 않았습니다.\n- [ ] 테스트 대상 환경·데이터베이스·계정이 전용 테스트 대상인지 확인했고 운영 연결에서 파괴적 테스트나 자동 정리를 실행하지 않았습니다.\n- [ ] 운영 smoke test는 사전 승인된 범위와 권한 안에서 실데이터 변경·외부 메시지 부작용 없이 수행했습니다.\n- [ ] 남은 위험, 사람 판단, 배포 중지와 복구 조건이 드러납니다.\n\n## 짧은 연습",
        "- [ ] 빌드와 실제 브라우저 또는 대상 환경 확인을 테스트 통과와 별도 증거로 남겼습니다.\n- [ ] 운영 데이터와 비밀정보가 테스트 데이터·로그·스냅샷에 포함되지 않았습니다.\n- [ ] 테스트 대상 환경·데이터베이스·계정이 전용 테스트 대상인지 확인했고 운영 연결에서 파괴적 테스트나 자동 정리를 실행하지 않았습니다.\n- [ ] 운영 smoke test는 읽기 전용 수행을 기본으로 확인했습니다. 변경이 있었다면 사전 승인 범위·전용 대상·중지 조건·정리 결과를 기록했고, 미실행이나 적용외라면 그 상태와 이유를 구분했습니다.\n- [ ] 남은 위험, 사람 판단, 배포 중지와 복구 조건이 드러납니다.\n\n## 짧은 연습"
      ],
      [
        "\n## 출처와 적용 범위\n\n- [ISO/IEC/IEEE 29119-1:2022](https://www.iso.org/standard/81291.html)은 2026-08-13 현재 Edition 2, Published, stage 60.60으로 확인했고, [ISO JTC 1/SC 7의 29119 시리즈 안내](https://committee.iso.org/sites/jtc1sc7/home/projects/flagship-standards/isoiecieee-29119-series.html)는 일반 개념·조직·관리·동적 테스트 수준과 manual·automated·scripted·unscripted testing, 별도 ISO/IEC 20246 정적 리뷰의 공개 범위를 확인하는 데 사용했습니다. 유료 표준 본문 전체를 열람했다고 주장하지 않으며 이 분류를 모든 조직의 유일한 용어·프로세스로 확대하지 않습니다.\n- [IEEE Computer Society SWEBOK 리소스](https://www.computer.org/education/bodies-of-knowledge/software-engineering/resources/)와 [SWEBOK V4.0a PDF](https://ieeecs-media.computer.org/media/education/swebok/swebok-v4.pdf)는 2025-09-25 update를 2026-08-13에 직접 확인해 unit·integration·system·acceptance 수준, 오라클·자동화·coverage criteria, 코드를 실행하지 않는 static techniques와 동적 테스트의 구분 범위에 사용했습니다. 이 수준을 중요도 순서·모든 팀의 파일 구조로, coverage를 테스트 효과·사용자 성공의 단독 증거로 확대하지 않습니다.\n- [Martin Fowler 사이트의 Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)은 2026-08-13 현재 Ham Vocke의 1차 실무 설명에서 빠르고 격리된 작은 테스트를 넓게 두고 느리고 넓은 테스트를 선택적으로 배치하는 방향을 확인하는 데 사용했습니다. 고정 비율·정확한 층 수·특정 도구를 보편 규칙으로 사용하지 않고 위험과 피드백 비용을 배분하는 판단 모델로만 적용합니다.\n- [Google Testing Blog의 Flaky Tests](https://testing.googleblog.com/2016/05/flaky-tests-at-google-and-how-we.html)와 [Measuring Coverage](https://testing.googleblog.com/2014/07/measuring-coverage-at-google.html)는 각각 2016-05-27과 2014-07-14의 Google 조직 사례를 2026-08-13에 확인해 같은 코드에서 성공·실패가 바뀌는 신호 문제와 coverage를 미시험 영역 탐색에 쓰는 범위에 사용했습니다. Google의 규모·수치·재실행 정책을 다른 조직의 기준으로 사용하거나 coverage 목표를 정확성·회귀 부재의 증거로 확대하지 않습니다.",
        "\n## 출처와 적용 범위\n\n- [ISO/IEC/IEEE 29119-1:2022](https://www.iso.org/standard/81291.html)의 Edition 2·Published·stage 60.60은 2026-08-13의 확인 기록입니다. 2026-11-15에는 공개 페이지의 2022판·일반 개념 안내와 [ISO JTC 1/SC 7 시리즈 안내](https://committee.iso.org/sites/jtc1sc7/home/projects/flagship-standards/isoiecieee-29119-series.html)의 조직·관리·동적 테스트 과정 및 ISO/IEC 20246 정적 리뷰 연결을 다시 확인했습니다. 현재 공개 안내에서 manual·automated·scripted·unscripted 열거는 확인하지 못해 그 귀속은 사용하지 않습니다. 이 부재를 표준 전체에 해당 분류가 없다는 뜻으로 해석하지 않으며, 유료 표준 전문이나 과거 edition·stage를 새로 확인했다고 주장하지 않습니다.\n- [IEEE Computer Society SWEBOK 리소스](https://www.computer.org/education/bodies-of-knowledge/software-engineering/resources/)와 [SWEBOK V4.0a PDF](https://ieeecs-media.computer.org/media/education/swebok/swebok-v4.pdf)는 2025-09-25 update를 2026-08-13에 직접 확인해 unit·integration·system·acceptance 수준, 오라클·자동화·coverage criteria, 코드를 실행하지 않는 static techniques와 동적 테스트의 구분 범위에 사용했습니다. 이 수준을 중요도 순서·모든 팀의 파일 구조로, coverage를 테스트 효과·사용자 성공의 단독 증거로 확대하지 않습니다.\n- [Martin Fowler 사이트의 Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)은 2026-08-13 현재 Ham Vocke의 1차 실무 설명에서 빠르고 격리된 작은 테스트를 넓게 두고 느리고 넓은 테스트를 선택적으로 배치하는 방향을 확인하는 데 사용했습니다. 고정 비율·정확한 층 수·특정 도구를 보편 규칙으로 사용하지 않고 위험과 피드백 비용을 배분하는 판단 모델로만 적용합니다.\n- [Google Testing Blog의 Flaky Tests](https://testing.googleblog.com/2016/05/flaky-tests-at-google-and-how-we.html)와 [Measuring Coverage](https://testing.googleblog.com/2014/07/measuring-coverage-at-google.html)는 각각 2016-05-27과 2014-07-14의 Google 조직 사례를 2026-08-13에 확인해 같은 코드에서 성공·실패가 바뀌는 신호 문제와 coverage를 미시험 영역 탐색에 쓰는 범위에 사용했습니다. Google의 규모·수치·재실행 정책을 다른 조직의 기준으로 사용하거나 coverage 목표를 정확성·회귀 부재의 증거로 확대하지 않습니다."
      ]
    ]
  },
  {
    "path": "CONTENT_MAP.md",
    "before": "fcbd29a41594dd8e7b957bf736d340f64a4184768a5701cc66c6dda24ad3ea96",
    "after": "973dcba740e6ad52bbd3ba0f1cb5cd0dc1404546611688f84b4a4f1fe9d4801e",
    "replacements": [
      [
        "| [디버깅과 관측 가능성](src/content/docs/08-quality/debugging-observability.md) | `draft` | 10,461 | `/08-quality/debugging-observability/` |\n| [8. 품질과 안전](src/content/docs/08-quality/index.md) | `draft` | 827 | `/08-quality/` |\n| [성능과 보안](src/content/docs/08-quality/performance-security.md) | `draft` | 12,749 | `/08-quality/performance-security/` |\n| [테스트 전략](src/content/docs/08-quality/testing-strategy.md) | `draft` | 18,317 | `/08-quality/testing-strategy/` |\n\n### 9. Git과 GitHub",
        "| [디버깅과 관측 가능성](src/content/docs/08-quality/debugging-observability.md) | `draft` | 10,461 | `/08-quality/debugging-observability/` |\n| [8. 품질과 안전](src/content/docs/08-quality/index.md) | `draft` | 827 | `/08-quality/` |\n| [성능과 보안](src/content/docs/08-quality/performance-security.md) | `draft` | 12,749 | `/08-quality/performance-security/` |\n| [테스트 전략](src/content/docs/08-quality/testing-strategy.md) | `draft` | 18,834 | `/08-quality/testing-strategy/` |\n\n### 9. Git과 GitHub"
      ]
    ]
  },
  {
    "path": "research/source-map.md",
    "before": "eac96a6cf0c8df6106e49184e9824083f2100c49c484c5a0295008f66969146f",
    "after": "84ed7ebc633280539ecdddf2be9ed7e4a3d70d603c85fdb92125ebf3b43a1099",
    "replacements": [
      [
        "# 출처 지도\n\n추적 구조 기준일: 2026-08-12\n\n## 2026-08-28 Task25 고정 crate·Rust 원문 확인",
        "# 출처 지도\n\n2026-11-15 R07 현재 적용 보충: [새 직접 근거](public-beta-review-source-excerpts/r07-testing-2026-11-15.md)와 [finding 재판정](../docs/project/reviews/public-beta-1/r07-testing-adjudication.md)을 기준으로 테스트 전략의 ISO 귀속을 일반 개념·조직·관리·동적 테스트 및 ISO/IEC 20246 정적 리뷰 연결로 좁혔습니다. manual/automated·scripted/unscripted의 공개 안내 열거는 현재 not-confirmed이며 원고의 해당 귀속을 제거했습니다. 아래 2026-08-13의 edition·stage·열거 확인 기록은 당시 역사로 보존하며 현재 재확인으로 승격하지 않습니다. 분류 자체의 부정이나 유료 표준 전체 미수록 판정은 아닙니다.\n\n추적 구조 기준일: 2026-08-12\n\n## 2026-08-28 Task25 고정 crate·Rust 원문 확인"
      ]
    ]
  },
  {
    "path": "research/public-beta-source-gap-register.md",
    "before": "dac010a69ea463fb8dd3d835780367ec164b887417c441f46f7f3887c05929e7",
    "after": "bc0d1567b3d082345973efd30f8c8ba7f75c0984837b4b33fe20cc73ba036f7c",
    "replacements": [
      [
        "# 공개 베타 출처 공백 레지스터\n\n## 기록 계약\n\n- 기준일: Task 5 공백 감사 2026-08-12, Task 8 게시 crosswalk 2026-08-13",
        "# 공개 베타 출처 공백 레지스터\n\n2026-11-15 R07/PBSG-015 좁은 재판정: 아래 과거 confirmed 기록은 보존합니다. [현재 직접 근거](public-beta-review-source-excerpts/r07-testing-2026-11-15.md)에서 ISO 일반 개념·조직·관리·동적 테스트와 정적 리뷰 연결은 확인했지만 manual/automated·scripted/unscripted 열거의 공개 페이지 귀속은 not-confirmed입니다. 테스트 전략 본문·출처 절에서 그 귀속을 제거하고 교육적 수행 방식 구분은 유지했습니다. [R07-I01 재판정](../docs/project/reviews/public-beta-1/r07-testing-adjudication.md)에 연결하며 같은 reviewer의 해소 판정 전까지 현재 수정은 미검토 후보입니다. PBSG-016과 무관한 공백의 판정은 바꾸지 않습니다.\n\n## 기록 계약\n\n- 기준일: Task 5 공백 감사 2026-08-12, Task 8 게시 crosswalk 2026-08-13"
      ]
    ]
  },
  {
    "path": "docs/project/public-beta-content-audit.md",
    "before": "d8a058833542cfc69ba6f079f5624edb6bebf83e4e5d9dfe926251228dc79d68",
    "after": "47a74a2470f56324a3d219593413b8acff679768b3a6be01a6ca93a1e8f2f70a",
    "replacements": [
      [
        "# 공개 베타 콘텐츠 포트폴리오 감사\n\n## 감사 기준\n\n- 기준일: 2026-08-13",
        "# 공개 베타 콘텐츠 포트폴리오 감사\n\n2026-11-15 R07/PB-042·PBCA-010 현재 적용 보충: Task15의 기존 conformance·해소 기록은 역사로 보존합니다. R07-I01에서 현재 ISO 공개 근거에 없는 manual/automated·scripted/unscripted 귀속을 확인해 원고·출처 절을 확인 가능한 범위로 좁혔고, [현재 출처와 한계](../../research/public-beta-review-source-excerpts/r07-testing-2026-11-15.md) 및 [재판정](reviews/public-beta-1/r07-testing-adjudication.md)에 연결합니다. 이 수정은 아직 후속 독립 검토 전이며 기존 conform만으로 R07 전체 PASS·review/ready를 주장하지 않습니다. 다른 감사 행·역사적 수치는 유지합니다.\n\n## 감사 기준\n\n- 기준일: 2026-08-13"
      ]
    ]
  }
];
export function r07PreFixBytes(path,bytes){
 bytes=r07PreCloseoutBytes(path,bytes);
 const e=r07FixTransitions.find(x=>x.path===path);if(!e||sha(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R07 reversal not unique');text=text.replace(after,before);}
 if(sha(text)!==e.before)throw Error('R07 historical bytes mismatch');return Buffer.from(text);
}
export function validateR07Current(read){const errors=[];for(const e of r07FixTransitions){try{if(sha(r07PreCloseoutBytes(e.path,read(e.path)))!==e.after)errors.push('R07 current patch mismatch: '+e.path)}catch{errors.push('R07 current patch missing: '+e.path)}}return errors;}
