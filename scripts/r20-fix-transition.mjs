import {r20PreCloseoutBytes} from './r20-closeout.mjs';
import {createHash} from 'node:crypto';
const sha=b=>createHash('sha256').update(b).digest('hex');
export const r20FixTransitions=[
  {
    "path": "CONTENT_MAP.md",
    "before": "bc572fded6dce546325aee53f557b3fd945e5987c5f5e9b8f15f6626b170a7b8",
    "after": "a4281934deaa665a6ff23ceffc51840abd531675d079ce74eea08ad6a16e5c78",
    "replacements": [
      [
        "|---|---:|---:|---|\n| [디버깅과 관측 가능성](src/content/docs/08-quality/debugging-observability.md) | `draft` | 10,461 | `/08-quality/debugging-observability/` |\n| [8. 품질과 안전](src/content/docs/08-quality/index.md) | `draft` | 827 | `/08-quality/` |\n| [성능과 보안](src/content/docs/08-quality/performance-security.md) | `draft` | 12,805 | `/08-quality/performance-security/` |\n| [테스트 전략](src/content/docs/08-quality/testing-strategy.md) | `review` | 18,834 | `/08-quality/testing-strategy/` |\n",
        "|---|---:|---:|---|\n| [디버깅과 관측 가능성](src/content/docs/08-quality/debugging-observability.md) | `draft` | 11,710 | `/08-quality/debugging-observability/` |\n| [8. 품질과 안전](src/content/docs/08-quality/index.md) | `draft` | 827 | `/08-quality/` |\n| [성능과 보안](src/content/docs/08-quality/performance-security.md) | `draft` | 13,198 | `/08-quality/performance-security/` |\n| [테스트 전략](src/content/docs/08-quality/testing-strategy.md) | `review` | 18,834 | `/08-quality/testing-strategy/` |\n"
      ]
    ]
  },
  {
    "path": "research/source-map.md",
    "before": "427ec24d3822f757fb05cae5bd05772ed994ecc517eae6e2d72ae6c5b38cf74b",
    "after": "8b77133b3870030fd2da46fe7b99d834b333461b57e33686c29d236502186f1c",
    "replacements": [
      [
        "\n2026-11-16 R19 후속 판정: 아래 R19 현재 적용 보충의 검토 대기는 당시 고정 후보 상태입니다. 같은 저장 reviewer Fix1의 원고/코드 PASS·세 원고각18/18·기존10개ID RESOLVED와 기록 후속 PASS C0/I0/M0·기록Minor1 RESOLVED로 해소했고 review 전이는 R19 controller closeout에 연결합니다. 과거 출처·접근 실패·미확인 범위는 유지하며 M5전체/ready/공개 승인을 뜻하지 않습니다.\n",
        "\n2026-11-16 R20 현재 적용 보충: PB-040·041의 진단·관측·성능·보안 근거를 [R20 직접 근거](public-beta-review-source-excerpts/r20-quality-support-2026-11-16.md)의 명시 범위에서 새로 확인했습니다. SSDF1.1 랜딩은 같은 날 R19의 확인만 재사용하고 PW.4·PW.7·PW.8·RV.1~RV.3는 공식 PDF 텍스트를 새로 읽었습니다. Resource Timing 현재2026-09-01 CRD와 과거2026-04-20 확인을 구분하며 Chrome129 고정은 이번 추출에서 확인하지 못했습니다. 과거 출처 행·판정은 보존합니다. R04-M08은 R20 최초 reviewer가 현재 문맥과 R10-M03의 국소 변경을 대조해 해소 기준 충족을 확인했으나 R20의 새 Important2·Minor3 및 캡처 Minor1은 좁은 수정·후속 검토 중입니다. 원고 review·M5·ready·실제 API/DB/운영·공개 성공을 주장하지 않습니다.\n\n2026-11-16 R19 후속 판정: 아래 R19 현재 적용 보충의 검토 대기는 당시 고정 후보 상태입니다. 같은 저장 reviewer Fix1의 원고/코드 PASS·세 원고각18/18·기존10개ID RESOLVED와 기록 후속 PASS C0/I0/M0·기록Minor1 RESOLVED로 해소했고 review 전이는 R19 controller closeout에 연결합니다. 과거 출처·접근 실패·미확인 범위는 유지하며 M5전체/ready/공개 승인을 뜻하지 않습니다.\n"
      ]
    ]
  },
  {
    "path": "src/content/docs/08-quality/debugging-observability.md",
    "before": "95714492d662619e73fff21a359ba4d53ed6009c7fa8f06ff07b96c60132bb3b",
    "after": "c384bb5c15d3778426b73e509cf81867276461ddba888967ed2e37e6b2e047fe",
    "replacements": [
      [
        "| 수정(fix) | 원인을 제거하며 새 위험을 최소화하는 변경은 무엇인가? | 좁은 diff, 설계 이유, 복구 경로 | 증상만 숨기거나 오류를 무시함 |\n| 회귀(regression) | 같은 결함이 돌아오지 않고 주변 동작도 유지되는가? | 실패 전·성공 후 테스트, 운영 확인 | 테스트가 수정 전에도 통과함 |\n\n",
        "| 수정(fix) | 원인을 제거하며 새 위험을 최소화하는 변경은 무엇인가? | 좁은 diff, 설계 이유, 복구 경로 | 증상만 숨기거나 오류를 무시함 |\n| 회귀 검증(regression testing) | 같은 결함이 돌아오지 않고 주변 동작도 유지되는가? | 이번 결함 재현의 실패→성공, 기존 정상·거절 테스트의 통과 유지, 운영 확인 | 이번 결함 재현 테스트가 수정 전에도 통과함 |\n\n"
      ],
      [
        "\n```text\n증상: 2026-08-13 14:02 KST, staging의 참가 버튼을 한 번 눌렀는데 10초 뒤 화면이 `결과를 확인할 수 없음`으로 바뀌었다.\n",
        "\n```text wrap\n증상: 2026-08-13 14:02 KST, staging의 참가 버튼을 한 번 눌렀는데 10초 뒤 화면이 `결과를 확인할 수 없음`으로 바뀌었다.\n"
      ],
      [
        "\n오른쪽 문장은 가능하지만 추가 증거가 필요합니다. 예를 들어 서버 로그가 다른 환경의 것일 수 있고, 같은 요청 ID의 생성·전파가 틀렸을 수 있습니다. 데이터 행도 현재 사용자·모임과 일치하는 권위 상태인지 확인해야 합니다.\n",
        "\np95는 정한 표본·기간에서 측정값의 약 95%가 그 값 이하에 놓이는 95번째 백분위수입니다. 평균이나 최댓값이 아니며 개별 요청의 지연을 보장하지 않습니다. 집계 구간·표본 수·계산 방식을 함께 기록해야 비교할 수 있습니다.\n\n오른쪽 문장은 가능하지만 추가 증거가 필요합니다. 예를 들어 서버 로그가 다른 환경의 것일 수 있고, 같은 요청 ID의 생성·전파가 틀렸을 수 있습니다. 데이터 행도 현재 사용자·모임과 일치하는 권위 상태인지 확인해야 합니다.\n"
      ],
      [
        "\n```text\n가설 A: 참가 트랜잭션은 성공했지만 응답 직렬화 뒤 네트워크가 끊겼다.\n",
        "\n```text wrap\n가설 A: 참가 트랜잭션은 성공했지만 응답 직렬화 뒤 네트워크가 끊겼다.\n"
      ],
      [
        "\n## 8. 회귀 증거는 수정 전 실패와 수정 후 성공을 연결합니다\n\n좋은 회귀 테스트는 수정 전 대상 버전에서 실제로 실패하고, 수정 후 같은 조건에서 성공하며, 주변의 정상·거절 경로도 유지합니다.\n\n",
        "\n## 8. 이번 결함의 회귀 증거는 수정 전 실패와 수정 후 성공을 연결합니다\n\n회귀는 변경으로 이전 동작이 깨지는 현상이며, 회귀 검증은 이를 찾아내는 활동입니다. 이번 결함을 재현·보호하려고 추가하는 테스트는 수정 전 대상 버전에서 의도한 이유로 실패하고 수정 후 같은 조건에서 성공해야 합니다. 주변의 정상·거절 동작을 보호하는 기존 회귀 테스트는 수정 전후 모두 통과하는 것이 정상입니다.\n\n"
      ],
      [
        "\n테스트가 수정 전에도 통과했다면 결함을 보호하지 못합니다. 새 테스트가 지나치게 넓고 flaky하면 장기적으로 실패 신호를 무시하게 만들 수 있습니다.\n\n",
        "\n이번 결함을 검출하려는 테스트가 수정 전에도 통과했다면 그 결함을 보호한다는 근거가 되지 못합니다. 기존 회귀 테스트의 통과는 주변 동작이 유지된다는 별도의 증거입니다. 새 테스트가 지나치게 넓고 flaky하면 장기적으로 실패 신호를 무시하게 만들 수 있습니다.\n\n"
      ],
      [
        "\n트레이스는 한 요청이나 작업이 여러 구성요소를 통과한 span과 시간을 연결합니다. 분산 경계의 병목과 오류 위치를 찾는 데 유용하지만 샘플링, 누락된 계측, 잘못된 컨텍스트 전파 때문에 모든 요청과 내부 상태를 대표하지 않을 수 있습니다.\n\n",
        "\n트레이스는 한 요청이나 작업이 여러 구성요소를 통과한 작업 구간과 시간을 연결합니다. 이때 이름·시작·종료 등으로 기록하는 한 작업 구간을 스팬(span)이라고 합니다. 데이터베이스 스팬의 전체 시간에는 쿼리 실행과 여러 대기가 섞일 수 있어 그 시간만으로 잠금 대기를 확정하지 않습니다. 분산 경계의 병목과 오류 위치를 찾는 데 유용하지만 샘플링, 누락된 계측, 잘못된 컨텍스트 전파 때문에 모든 요청과 내부 상태를 대표하지 않을 수 있습니다.\n\n"
      ],
      [
        "\n```text\n지표: 참가 요청 지연이 언제부터 어느 환경·버전에서 증가했는가?\n",
        "\n```text wrap\n지표: 참가 요청 지연이 언제부터 어느 환경·버전에서 증가했는가?\n"
      ],
      [
        "\n경쟁 요청에서만 데이터베이스 대기가 시간 제한을 넘고 파서 테스트는 통과했다면 A를 지지합니다. 수정은 무조건 시간 제한을 늘리는 것이 아니라 잠금과 정원 판정 경계를 검토하고, 결과 불명 뒤 상태 재조회가 실제로 동작하게 만드는 것입니다. 수정 전 동시 요청 회귀 테스트가 실패하고 수정 후 정확히 한 명만 확정되는지, 운영 신호에서 지연과 결과 불명 비율이 회복되는지 확인합니다.\n\n",
        "\n경쟁 요청에서만 데이터베이스 대기가 시간 제한을 넘고 파서 테스트는 통과했다면 A를 지지합니다. 실제 DB의 경쟁 구간과 대기 종류를 별도 계측해 대조해야 하며, 요청을 거의 동시에 시작했거나 스팬이 길었다는 사실만으로 잠금 원인을 확정하지 않습니다. 수정은 무조건 시간 제한을 늘리는 것이 아니라 잠금과 정원 판정 경계를 검토하고, 결과 불명 뒤 안전하게 현재 상태를 확인하는 경로를 마련하는 것입니다.\n\n이번 결함을 직접 검출하는 테스트와 이미 유지되던 데이터 조건을 나눕니다. 승인된 격리 환경의 가상 데이터에서 경쟁·응답 지연 또는 유실 조건을 통제하고 다음을 판정합니다.\n\n- 시간 초과 뒤 결과 불명을 표시하고, 처리 중일 수 있는 이전 요청이 안전하게 종결됐는지 확인하기 전에는 새로운 참가 쓰기를 보류합니다.\n- 인증된 사용자가 자신의 현재 참가 상태를 재조회할 수 있고, 확인된 상태를 화면에 반영합니다. 현재 상태만으로 특정 과거 요청의 처리 결과나 종결을 단정하지 않습니다.\n- 재조회가 실패하면 결과 불명을 유지합니다. 정해진 시간 안에 반드시 결과를 알 수 있다고 보장하거나 실패를 미참가로 바꿔 새 쓰기를 허용하지 않습니다.\n- 수정 전에는 위 확인 경로가 없어 해당 테스트가 의도한 이유로 실패하고, 수정 후에는 같은 조건에서 확인 경로와 실패 시 불명 유지가 통과해야 합니다.\n- 별도 장애 없는 정원 경쟁에서는 한 명 확정·다른 한 명 정원 마감, 활성 중복과 부분 변경이 없음을 확인합니다. 이 데이터 조건은 수정 전에도 지켜졌으므로 이번 결과 불명 결함의 해소를 단독으로 증명하지 않습니다.\n\n지연 개선도 목표라면 같은 fixture·실제 경쟁 조건·환경·측정 구간에서 요청 지연의 분포·p95와 실패 수를 전후 비교합니다. 운영 신호의 지연·결과 불명 비율 회복은 별도 관찰이며 격리 테스트를 대신하지 않습니다.\n\n"
      ],
      [
        "\n```text\n아직 코드를 수정하지 마세요.\n",
        "\n```text wrap\n아직 코드를 수정하지 마세요.\n"
      ],
      [
        "6. 완화 / 원인 수정 / 데이터·서비스 복구 / 재발 방지를 구분하세요.\n7. 수정 전 실패하고 수정 후 성공할 회귀 증거와 운영 확인을 설계하세요.\n8. 원인을 확정할 수 없으면 신뢰 수준·반례·미확인 범위를 남기세요.\n",
        "6. 완화 / 원인 수정 / 데이터·서비스 복구 / 재발 방지를 구분하세요.\n7. 이번 결함 재현 테스트의 수정 전 실패·수정 후 성공, 기존 회귀 테스트의 통과 유지, 운영 확인을 구분해 설계하세요.\n8. 원인을 확정할 수 없으면 신뢰 수준·반례·미확인 범위를 남기세요.\n"
      ],
      [
        "- [ ] 완화·수정·복구·예방의 상태를 구분했나요?\n- [ ] 회귀 테스트가 수정 전 실패하고 수정 후 성공하나요?\n- [ ] 로그·지표·트레이스와 권위 상태를 대상 버전에 연결했나요?\n",
        "- [ ] 완화·수정·복구·예방의 상태를 구분했나요?\n- [ ] 이번 결함 재현 테스트는 수정 전 실패하고 수정 후 성공하며, 기존 정상·거절 회귀 테스트는 전후 모두 통과하나요?\n- [ ] 로그·지표·트레이스와 권위 상태를 대상 버전에 연결했나요?\n"
      ]
    ]
  },
  {
    "path": "src/content/docs/08-quality/performance-security.md",
    "before": "3205765211050b45bf34af36fcf4942b12840a5189d356e83b4058adae106269",
    "after": "ea04fef29f4338a592328ad784713a59431d5f96a910f19d1157465ad105a324",
    "replacements": [
      [
        "\n예산 수치는 모든 사이트에 통하는 표준 정답이 아닙니다. 사용자 목적·기기·네트워크·사업 제약과 현재 기준선을 보고 프로젝트가 정하고, 실제 사용 증거와 요구 변화에 따라 기록을 남겨 조정합니다. 다른 글의 예시 수치를 그대로 복사하면 현재 사용자의 허용 가능한 기다림을 증명하지 못합니다.\n",
        "\np95는 정한 표본·기간에서 측정값의 약 95%가 그 값 이하에 놓이는 95번째 백분위수입니다. 평균이나 최댓값이 아니며 모든 개별 요청이 그 한도 안에 끝난다는 보장도 아닙니다. 표본 수·집계 구간·계산 방식을 함께 기록합니다.\n\n예산 수치는 모든 사이트에 통하는 표준 정답이 아닙니다. 사용자 목적·기기·네트워크·사업 제약과 현재 기준선을 보고 프로젝트가 정하고, 실제 사용 증거와 요구 변화에 따라 기록을 남겨 조정합니다. 다른 글의 예시 수치를 그대로 복사하면 현재 사용자의 허용 가능한 기다림을 증명하지 못합니다.\n"
      ],
      [
        "\n```text\n대상 결과: 모임 목록에서 상세 화면의 제목과 참가 가능 상태 확인\n",
        "\n```text wrap\n대상 결과: 모임 목록에서 상세 화면의 제목과 참가 가능 상태 확인\n"
      ],
      [
        "\n```text\n아직 최적화나 보안 수정을 하지 마세요.\n",
        "\n```text wrap\n아직 최적화나 보안 수정을 하지 마세요.\n"
      ],
      [
        "\n- [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance/)와 [Performance panel overview](https://developer.chrome.com/docs/devtools/performance/overview)는 2026-08-13 현재 Chrome의 웹 런타임 프로필과 제품 UI 범위에 사용했습니다. 문서의 Chrome 129 기반 화면·도구 이름을 다른 브라우저·버전·서버·데이터베이스의 공통 인터페이스로 확대하지 않습니다.\n- [W3C User Timing](https://www.w3.org/TR/user-timing/)은 2026-03-11 Candidate Recommendation Draft, [Resource Timing](https://www.w3.org/TR/resource-timing/)은 2026-04-20 Candidate Recommendation Draft로 확인했습니다. 웹 애플리케이션 구간과 자원 요청 시간을 계측하는 인터페이스 범위에만 사용하며 W3C Recommendation, 모든 런타임의 프로파일러, 보편 성능 임계값으로 표현하지 않습니다.\n- [web.dev의 Your First Performance Budget](https://web.dev/articles/your-first-performance-budget)은 2018년 공개된 Google 교육 글을 2026-08-13 현재 확인해 사용자 목적·환경에 맞춘 시간·자원량·규칙 기반 예산의 교육 범위에 사용했습니다. 글의 예시 수치·기기·네트워크를 모든 사이트의 합격 기준으로 사용하지 않습니다.\n",
        "\n- [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance/)와 [Performance panel overview](https://developer.chrome.com/docs/devtools/performance/overview)는 2026-08-13 현재 Chrome의 웹 런타임 프로필과 제품 UI 범위에 사용했습니다. 이 과거 확인과 별도로 2026-11-16에 두 문서의 프로필 기록·병목 분석·측정 조건 설명을 다시 읽었습니다. 이번 본문 추출에서는 Chrome 129 고정을 확인하지 못했으며 실제 현재 UI를 실행 확인하지 않았습니다. Chrome 제품의 화면·도구 이름을 다른 브라우저·버전·서버·데이터베이스의 공통 인터페이스로 확대하지 않습니다.\n- [W3C User Timing](https://www.w3.org/TR/user-timing/)은 2026-03-11 Candidate Recommendation Draft, [Resource Timing](https://www.w3.org/TR/resource-timing/)은 2026-08-13 당시 2026-04-20 Candidate Recommendation Draft로 확인했습니다. 2026-11-16에 현재 링크를 다시 읽은 결과 User Timing은 2026-03-11, Resource Timing은 2026-09-01 Candidate Recommendation Draft로 표시됩니다. 웹 애플리케이션 구간과 자원 요청 시간을 계측하는 인터페이스 범위에만 사용하며 W3C Recommendation, 모든 런타임의 프로파일러, 보편 성능 임계값으로 표현하지 않습니다.\n- [web.dev의 Your First Performance Budget](https://web.dev/articles/your-first-performance-budget)은 2018년 공개된 Google 교육 글을 2026-08-13 현재 확인해 사용자 목적·환경에 맞춘 시간·자원량·규칙 기반 예산의 교육 범위에 사용했습니다. 글의 예시 수치·기기·네트워크를 모든 사이트의 합격 기준으로 사용하지 않습니다.\n"
      ]
    ]
  }
];
export function r20PreFixBytes(path,bytes){bytes=r20PreCloseoutBytes(path,bytes);const e=r20FixTransitions.find(x=>x.path===path);if(!e||sha(bytes)!==e.after)return bytes;let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R20 reversal not unique');text=text.replace(after,before)}if(sha(text)!==e.before)throw Error('R20 historical bytes mismatch');return Buffer.from(text);}
export function validateR20Current(read){const errors=[];for(const e of r20FixTransitions){try{if(sha(r20PreCloseoutBytes(e.path,read(e.path)))!==e.after)errors.push('R20 current patch mismatch: '+e.path)}catch{errors.push('R20 current patch missing: '+e.path)}}return errors;}
