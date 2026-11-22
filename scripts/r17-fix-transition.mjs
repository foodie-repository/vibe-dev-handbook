import {r17PreCloseoutBytes} from './r17-closeout.mjs';
import {createHash} from 'node:crypto';
const sha=b=>createHash('sha256').update(b).digest('hex');
export const r17FixTransitions=[
  {
    "path": "CONTENT_MAP.md",
    "before": "4c4a3ae81ec1363a17557dd38bddf49f2febf71c3d558047734c17e91d8cd6f8",
    "after": "c66220af7a042efbbfa7180b5de88244079a3a904b6de9d88f05e5c0073fd7da",
    "replacements": [
      [
        "|---|---:|---:|---|\n| [접근성과 반응형 설계](src/content/docs/05-frontend/accessibility-responsive-design.md) | `draft` | 12,252 | `/05-frontend/accessibility-responsive-design/` |\n| [브라우저·DOM·렌더링](src/content/docs/05-frontend/browser-dom-rendering.md) | `review` | 15,578 | `/05-frontend/browser-dom-rendering/` |\n| [5. 프런트엔드](src/content/docs/05-frontend/index.md) | `draft` | 883 | `/05-frontend/` |\n| [UI 상태와 사용자 경험](src/content/docs/05-frontend/ui-state-and-ux.md) | `draft` | 13,248 | `/05-frontend/ui-state-and-ux/` |\n\n",
        "|---|---:|---:|---|\n| [접근성과 반응형 설계](src/content/docs/05-frontend/accessibility-responsive-design.md) | `draft` | 12,431 | `/05-frontend/accessibility-responsive-design/` |\n| [브라우저·DOM·렌더링](src/content/docs/05-frontend/browser-dom-rendering.md) | `review` | 15,578 | `/05-frontend/browser-dom-rendering/` |\n| [5. 프런트엔드](src/content/docs/05-frontend/index.md) | `draft` | 883 | `/05-frontend/` |\n| [UI 상태와 사용자 경험](src/content/docs/05-frontend/ui-state-and-ux.md) | `draft` | 14,362 | `/05-frontend/ui-state-and-ux/` |\n\n"
      ]
    ]
  },
  {
    "path": "research/source-map.md",
    "before": "cba375f7c9203880f7e506112cf4c572b11828a27c70f70e820ec1c2e201ddbf",
    "after": "e4e1ac679995fe5a89a5ecb04afd90c0c1c2d348652ab2b3c7b07cec6fdec4da",
    "replacements": [
      [
        "\n2026-11-15 R16 후속 판정: 아래 R16 현재 적용 보충의 검토 대기는 당시 고정 후보 상태입니다. 같은 저장 reviewer Fix1 PASS C0/I0/M0·세 원고각18/18·8개ID RESOLVED로 해소했고 review 전이는 R16 controller closeout에 연결합니다. 과거 출처·접근 실패·미확인 범위는 유지하며 M5전체/ready/공개 승인을 뜻하지 않습니다.\n",
        "\n2026-11-15 R17 현재 적용 보충: [프런트엔드 지원 직접 근거](public-beta-review-source-excerpts/r17-frontend-support-2026-11-15.md)의 WCAG 2.2 관련 성공 기준, 리플로·레이블·상태 메시지 해설, 이미지 튜토리얼·APG 대화상자와 RFC 9110 재시도 경계를 확인했습니다. 추출 누락과 보충 경로, 규범과 비규범 해설의 차이는 근거 파일에 보존합니다. 오류 응답과 업무 결과, 모임 취소와 보존된 참가 이력은 API·사례 계약과 구분해 설명합니다. 최초 R17 NEEDS CHANGES와 현재 수정 후 검토 대기를 구분하며 실제 보조 기술·DB·API 실행이나 WCAG 전체 적합·상태 승격·공개 승인을 주장하지 않습니다. 아래 과거 확인일과 실패 기록은 유지합니다.\n\n2026-11-15 R16 후속 판정: 아래 R16 현재 적용 보충의 검토 대기는 당시 고정 후보 상태입니다. 같은 저장 reviewer Fix1 PASS C0/I0/M0·세 원고각18/18·8개ID RESOLVED로 해소했고 review 전이는 R16 controller closeout에 연결합니다. 과거 출처·접근 실패·미확인 범위는 유지하며 M5전체/ready/공개 승인을 뜻하지 않습니다.\n"
      ]
    ]
  },
  {
    "path": "src/content/docs/05-frontend/accessibility-responsive-design.md",
    "before": "8e3aba3b43bffca4bf4a94f4108f6a07455fa0b37a36b80024ba74dbaa19571c",
    "after": "96c18123b4e5bd3ff13ed640dd4a6d390effbed6f01abbb603649f4f7c1e7cf3",
    "replacements": [
      [
        "\n로딩·빈 결과·성공·입력 오류·충돌·서버 오류·재시도를 화면 상태로 구분합니다. 상태가 바뀌면 보이는 문구뿐 아니라 필요할 때 보조 기술이 프로그램적으로 알 수 있게 전달합니다. 모든 변화를 즉시 크게 읽게 만들면 방해가 되므로 작업 결과와 다음 행동을 바꾸는 중요한 상태에 알림을 집중합니다.\n\n",
        "\n로딩·빈 결과·성공·입력 오류·충돌·서버 오류·재시도를 화면 상태로 구분합니다. WCAG의 상태 메시지는 문맥을 바꾸지 않고 작업의 결과·진행·대기·오류 등을 알려 주는 내용입니다. 해당 메시지는 포커스를 옮기지 않아도 보조 기술이 제시할 수 있도록 역할이나 속성으로 프로그램적으로 식별돼야 합니다. 검색 결과 목록 자체와 “검색 중”, “결과 0건” 같은 메시지는 구분합니다. 모든 DOM 변화를 알리거나 모든 메시지에 긴급 알림을 적용하라는 뜻은 아닙니다. 목적에 맞는 전달 방식과 실제 읽기 결과를 확인하고, 대화상자나 오류 요약으로 문맥·포커스를 바꾸는 경우에는 그 포커스 계약을 따로 검증합니다.\n\n"
      ],
      [
        "\n```text\n이 화면의 접근성과 반응형 설계를 읽기 전용으로 검토하라.\n",
        "\n```text wrap\n이 화면의 접근성과 반응형 설계를 읽기 전용으로 검토하라.\n"
      ]
    ]
  },
  {
    "path": "src/content/docs/05-frontend/ui-state-and-ux.md",
    "before": "e8e8f3134e4b5ea78f76e7b5fcfb45d46213c09a6c5495985c4999b516b02e56",
    "after": "357e478e8e7eaff7c1c4767e14b6c6eef85ae311c7b4c566d8fb315d061e3f60",
    "replacements": [
      [
        "\nAI에게 “로딩과 에러 처리를 넣어 주세요”라고 요청하면 spinner와 공통 오류 문구만 생기기 쉽습니다. 그러나 검색 결과가 0건인 정상 상태와 요청 실패가 같은 빈 화면으로 보이거나, 입력 오류와 정원 충돌이 모두 “다시 시도하세요”가 되거나, 중복 클릭이 같은 참가 요청을 여러 번 보내거나, 이전 응답이 최신 선택을 덮어쓸 수 있습니다. 사용자는 무엇을 고쳐야 하는지 알지 못하고 시스템은 실제 상태와 화면 상태가 어긋납니다.\n\n정상 경로만 데모하면 대표 fixture에서는 좋아 보일 수 있습니다. 실제 환경에서는 느린 응답, 여러 탭, 중복 행동, 권한 변경, 동시 사용자, 응답 유실과 오래된 캐시가 생깁니다. 상태 설계는 이런 실패를 없다고 가정하는 대신 각 경계가 어떤 사실을 보장하고 실패 뒤 무엇으로 복구할지 정합니다.\n\n",
        "\nAI에게 “로딩과 에러 처리를 넣어 주세요”라고 요청하면 진행 중임을 나타내는 회전 표시(spinner)와 공통 오류 문구만 생기기 쉽습니다. 그러나 검색 결과가 0건인 정상 상태와 요청 실패가 같은 빈 화면으로 보이거나, 입력 오류와 정원 충돌이 모두 “다시 시도하세요”가 되거나, 중복 클릭이 같은 참가 요청을 여러 번 보내거나, 이전 응답이 최신 선택을 덮어쓸 수 있습니다. 사용자는 무엇을 고쳐야 하는지 알지 못하고 시스템은 실제 상태와 화면 상태가 어긋납니다.\n\n정상 경로만 데모하면 미리 준비한 대표 시험 데이터·상태(fixture)에서는 좋아 보일 수 있습니다. 실제 환경에서는 느린 응답, 여러 탭, 중복 행동, 권한 변경, 동시 사용자, 응답 유실과 오래된 캐시가 생깁니다. 상태 설계는 이런 실패를 없다고 가정하는 대신 각 경계가 어떤 사실을 보장하고 실패 뒤 무엇으로 복구할지 정합니다.\n\n"
      ],
      [
        "\n```text\n서버에서 받은 현재 참가 가능 상태\n",
        "\n```text wrap\n서버에서 받은 현재 참가 가능 상태\n"
      ],
      [
        "| conflict | 요청 형식은 맞지만 현재 업무 상태와 충돌 | 최신 상태·충돌 이유 범주·다시 선택할 행동 | 재조회·대안 선택 | 최신 권위 상태와 거절 뒤 불변조건 |\n| error | 요청·처리·전달 중 실패가 확인됨 | 안전한 오류 범주·영향·유지된 입력·다음 행동 | 안전한 재시도·문의·다른 경로 | 오류 출처와 상태 미변경 또는 부분 영향 |\n| unknown | 서버 적용 여부를 알 수 없음 | 결과 불명임과 확인 중인 사실 | 권위 상태 조회, 중복 쓰기 보류 | 요청 식별자·현재 상태·이전 결과 대조 |\n",
        "| conflict | 요청 형식은 맞지만 현재 업무 상태와 충돌 | 최신 상태·충돌 이유 범주·다시 선택할 행동 | 재조회·대안 선택 | 최신 권위 상태와 거절 뒤 불변조건 |\n| error | 실패와 업무 결과·영향 범위가 계약과 근거로 확인됨 | 안전한 오류 범주·확인된 영향·유지된 입력·다음 행동 | 계약상 안전한 재시도·문의·다른 경로 | 오류 출처와 미적용·종결 등 확인된 업무 결과 |\n| unknown | 서버 적용 여부를 알 수 없음 | 결과 불명임과 확인 중인 사실 | 권위 상태 조회, 중복 쓰기 보류 | 요청 식별자·현재 상태·이전 결과 대조 |\n"
      ],
      [
        "\n`empty`는 오류가 아닙니다. “내 모임 없음”은 정상 조회 결과일 수 있고 다음에 “모임 만들기”를 안내할 수 있습니다. `validation`은 사용자가 고칠 입력을 가리키고, `conflict`는 같은 입력이라도 최신 업무 상태 때문에 더는 허용되지 않는 상황입니다. 모임 정원이 다른 참가자 때문에 찼다면 버튼을 반복하는 것보다 최신 상태와 대기·다른 모임 같은 선택을 보여 줘야 합니다.\n\n`error`와 `unknown`도 다릅니다. 서버가 명시적으로 거절했다면 결과를 알지만, 요청을 보낸 뒤 연결이 끊겼다면 서버가 적용했는지 알 수 없습니다. 결과 불명에서 “실패”라고 단정하고 같은 쓰기를 반복하면 중복 부작용이 생길 수 있습니다.\n\n",
        "\n`empty`는 오류가 아닙니다. “내 모임 없음”은 정상 조회 결과일 수 있고 다음에 “모임 만들기”를 안내할 수 있습니다. `validation`은 사용자가 고칠 입력을 가리키고, `conflict`는 같은 입력이라도 최신 업무 상태 때문에 더는 허용되지 않는 상황입니다. 모임 정원이 다른 참가자 때문에 찼다면 버튼을 반복하는 것보다 최신 상태와 다른 모임 같은 선택을 보여 줘야 합니다.\n\n`error`와 `unknown`도 다릅니다. 입력·권한·정원 거절이나 확인된 롤백처럼 계약상 변경 미적용과 요청의 종결을 확인했다면 그 결과를 표시할 수 있습니다. 그러나 오류 응답을 받았다는 사실만으로 업무 변경의 실패를 알 수는 없습니다. 데이터베이스 확정 뒤 응답 처리에서 오류가 나거나 중간 서버가 오류를 반환했다면 변경은 이미 적용됐을 수 있습니다. 적용 여부를 모르면 오류 응답이 있어도 `unknown`으로 두고 새 쓰기를 보류합니다. 결과 조회마저 실패하면 불명을 유지합니다. 부분 영향이 가능한 다른 업무는 그 범위와 복구 계약을 별도로 확인하며, 원자적으로 참가를 확정하는 이 모임 사례에 임의의 부분 적용을 가정하지 않습니다.\n\n"
      ],
      [
        "| eligible | 참가 클릭 | submitting | 버튼 진행 중, 중복 클릭 감소 | 요청 수신 전 | 취소 가능 범위 표시 |\n| submitting | 성공 응답+최신 상태 | confirmed | 참가 완료와 취소 행동 | 참가 관계·정원 확정 | 화면·권위 상태 대조 |\n| submitting | 입력 거절 | validation | 해당 입력과 이유 연결 | 변경 없음 | 입력 보존·수정 |\n| submitting | 정원·중복 충돌 | conflict | 최신 상태와 대안 | 거절·불변조건 유지 | 재조회·다른 행동 |\n| submitting | 명시적 서버 오류 | error | 영향·안전한 재시도 조건 | 미적용 또는 계약된 부분 영향 | 상태 조회 뒤 재시도 |\n| submitting | 연결 종료·응답 유실 | unknown | 결과 불명과 확인 중 표시 | 적용 여부 미확인 | 자신의 참가 상태 조회 |\n| unknown | 권위 상태에서 현재 참가 확인 | confirmed | 현재 참가 상태 표시 | 현재 참가 관계 확인; 특정 요청의 적용 여부는 별도 처리 결과로 판정 | 중복 쓰기 없음 |\n| unknown | 현재 미참가와 안전한 재시도 조건 확인 | eligible | 계약에 따라 다시 시도 가능 | 이전 요청의 종결·미적용 또는 안전한 멱등 재시도 조건 확인 | API 계약에 따른 요청 식별자 유지·발급 정책 |\n",
        "| eligible | 참가 클릭 | submitting | 버튼 진행 중, 중복 클릭 감소 | 요청 수신 전 | 취소 가능 범위 표시 |\n| submitting | 성공 응답+취소되지 않은 모임의 최신 참가 상태 | confirmed | 현재 참가 상태와 자기 취소 행동 | 모임 상태와 참가 관계·정원 확인 | 화면·권위 상태 대조 |\n| submitting | 입력 거절 | validation | 해당 입력과 이유 연결 | 변경 없음 | 입력 보존·수정 |\n| submitting | 정원·중복 충돌 | conflict | 최신 상태와 대안 | 거절·불변조건 유지 | 재조회·다른 행동 |\n| submitting | 계약상 미적용·종결이 확인된 오류 | error | 확인된 영향·안전한 재시도 조건 | 변경 미적용과 요청 종결 확인 | API 계약에 따라 재시도 조건 확인 |\n| submitting | 연결 종료·응답 유실 또는 적용 여부를 모르는 오류 응답 | unknown | 결과 불명과 확인 중 표시 | 적용 여부 미확인 | 자신의 참가 상태·요청 결과 조회 |\n| unknown | 취소되지 않은 모임의 현재 참가 확인 | confirmed | 현재 참가 상태 표시 | 모임 상태와 현재 참가 관계 확인; 특정 요청의 적용 여부는 별도 처리 결과로 판정 | 중복 쓰기 없음 |\n| submitting / unknown / confirmed | 권위 조회에서 모임 취소 확인 | event-cancelled | 모임 취소를 우선 안내하고 참가 기록은 이력으로 표시 | event.cancelled가 registration.confirmed보다 우선 | 새 참가 금지, 남은 confirmed의 자기 취소는 계약상 허용 |\n| unknown | 현재 미참가와 안전한 재시도 조건 확인 | eligible | 계약에 따라 다시 시도 가능 | 이전 요청의 종결·미적용 또는 안전한 멱등 재시도 조건 확인 | API 계약에 따른 요청 식별자 유지·발급 정책 |\n"
      ],
      [
        "\n상태 전이표는 코드 구현을 자동으로 증명하지 않습니다. 각 행의 이벤트를 재현하고 응답·현재 상태·DOM·픽셀·키보드 흐름과 데이터 오라클을 확인해야 합니다. 그래도 전이표가 있으면 “오류 처리” 같은 모호한 요청을 어떤 조건·결과·증거가 필요한지 바꿀 수 있습니다.\n",
        "\n현재 참가의 유효성은 모임 상태와 자신의 참가 관계를 함께 읽어 판정합니다. `open + confirmed`와 `closed + confirmed`는 현재 참가를 표시하지만, `closed`는 신규 참가를 막는 모집 마감이지 모임 취소가 아닙니다. `cancelled + confirmed`는 모임 취소와 보존된 참가 이력을, `cancelled + cancelled`는 모임 취소와 자신의 참가 취소를 구분해 표시합니다. 취소된 모임에서 남은 자신의 `confirmed`를 `cancelled`로 바꾸는 행동은 허용하되 재참가는 허용하지 않습니다. 모임 취소를 확인했다는 사실도 특정 이전 요청의 적용 여부를 대신 증명하지 않습니다.\n\n상태 전이표는 코드 구현을 자동으로 증명하지 않습니다. 각 행의 이벤트를 재현하고 응답·현재 상태·DOM·픽셀·키보드 흐름과 데이터 오라클을 확인해야 합니다. 그래도 전이표가 있으면 “오류 처리” 같은 모호한 요청을 어떤 조건·결과·증거가 필요한지 바꿀 수 있습니다.\n"
      ],
      [
        "\n로딩·성공·오류와 충돌은 색상과 애니메이션만으로 전달하지 않습니다. 현재 상태 이름, 영향을 받는 대상, 다음 행동을 텍스트로 보여 주고, 중요한 비동기 상태 변화는 필요할 때 보조 기술이 프로그램적으로 알 수 있게 합니다. 모든 작은 변화를 공격적으로 알리면 작업을 방해하므로 사용자의 판단과 다음 행동을 바꾸는 결과에 집중합니다.\n\n",
        "\n로딩·성공·오류와 충돌은 색상과 애니메이션만으로 전달하지 않습니다. 현재 상태 이름, 영향을 받는 대상, 다음 행동을 텍스트로 보여 줍니다. WCAG의 상태 메시지는 문맥을 바꾸지 않고 작업의 결과·진행·대기·오류 등을 알려 주는 내용이며, 해당 메시지는 포커스를 옮기지 않아도 보조 기술이 제시할 수 있도록 역할이나 속성으로 프로그램적으로 식별돼야 합니다. 검색 결과 목록 자체와 “검색 중”, “결과 0건” 같은 상태 메시지는 구분합니다. 모든 DOM 변화를 즉시 읽게 하거나 모든 메시지에 같은 강도의 알림을 붙이지 말고, 목적에 맞는 전달 방식과 실제 읽기 결과를 확인합니다. 대화상자나 오류 요약으로 문맥·포커스를 바꾸는 설계는 별도 포커스 계약으로 검증합니다.\n\n"
      ],
      [
        "\n```text\n이 기능의 UI 상태와 사용자 경험을 읽기 전용으로 검토하라.\n",
        "\n```text wrap\n이 기능의 UI 상태와 사용자 경험을 읽기 전용으로 검토하라.\n"
      ]
    ]
  }
];
export function r17PreFixBytes(path,bytes){
 bytes=r17PreCloseoutBytes(path,bytes);
 const e=r17FixTransitions.find(x=>x.path===path);if(!e||sha(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R17 reversal not unique');text=text.replace(after,before);}
 if(sha(text)!==e.before)throw Error('R17 historical bytes mismatch');return Buffer.from(text);
}
export function validateR17Current(read){const errors=[];for(const e of r17FixTransitions){try{if(sha(r17PreCloseoutBytes(e.path,read(e.path)))!==e.after)errors.push('R17 current patch mismatch: '+e.path)}catch{errors.push('R17 current patch missing: '+e.path)}}return errors;}
