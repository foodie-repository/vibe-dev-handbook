import {r14PreCloseoutBytes} from './r14-closeout.mjs';
import {createHash} from 'node:crypto';
const sha=b=>createHash('sha256').update(b).digest('hex');
export const r14FixTransitions=[
  {
    "path": "src/content/docs/01-mental-models/abstraction-and-tradeoffs.md",
    "before": "8a64b3cb56ebcd7686a7c7f620a0ab1ae0d33264215ad01e24c0ac725e05a607",
    "after": "09f891345a431a3ed684292e554597b743d872c4591cac5cde425e67b8a41dc2",
    "replacements": [
      [
        "예를 들어 교육용 주가 fixture를 읽어 변환한 정적 페이지는 값이 정해진 학습 자료를 반복 재현하는 데 단순하고 유리할 수 있습니다. 반면 모임 참가처럼 여러 사용자가 상태를 바꾸고 정원·권한을 즉시 판정해야 하는 기능을 같은 정적 파일 추상화에 억지로 넣으면 책임을 감출 뿐 해결하지 못합니다. 전자는 입력 버전과 변환 결과의 재현성이 핵심이고, 후자는 권위 있는 현재 상태와 동시 변경 규칙이 핵심입니다. 이 비교는 실제 시장 데이터의 정확성이나 이용 권리를 주장하지 않으며, 저장소의 `EDU-FIXTURE` 교육 범위에만 해당합니다.",
        "예를 들어 같은 결과를 반복 확인하려고 미리 정해 둔 교육용 가상 데이터 묶음(fixture)을 읽어 변환한 정적 페이지는 값이 정해진 학습 자료를 반복 재현하는 데 단순하고 유리할 수 있습니다. 이 주가 사례에서 fixture는 고정된 데이터 묶음을 가리킵니다. 반면 모임 참가처럼 여러 사용자가 상태를 바꾸고 정원·권한을 즉시 판정해야 하는 기능을 같은 정적 파일 추상화에 억지로 넣으면 책임을 감출 뿐 해결하지 못합니다. 전자는 입력 버전과 변환 결과의 재현성이 핵심이고, 후자는 권위 있는 현재 상태와 동시 변경 규칙이 핵심입니다. 이 비교는 실제 시장 데이터의 정확성이나 이용 권리를 주장하지 않으며, 저장소의 `EDU-FIXTURE` 교육 범위에만 해당합니다."
      ],
      [
        "- [개발자는 무엇을 다르게 보는가](../developer-thinking/)",
        "- [개발자처럼 문제를 나누는 법](../developer-thinking/)"
      ]
    ]
  },
  {
    "path": "src/content/docs/01-mental-models/developer-thinking.md",
    "before": "b4a0a15829610cff3a3ab82592290f0c720d59c395d7ddee99860245267f30a9",
    "after": "1d012eb30e5cbcec3da87d2ab128bd363dbbd69b1d7b4bb980ad491bdc02a977",
    "replacements": [
      [
        "“주가 차트가 비어 있습니다”라는 말도 마찬가지입니다. 선택 기간에 교육용 fixture 행이 없는 정상 빈 결과인지, 품질 규칙이 값을 차단했는지, 변환 결과와 화면 필터가 어긋났는지, 전달 파일을 읽지 못했는지를 먼저 구분해야 합니다. 차트 선을 억지로 이어 보이게 만들면 데이터 의미 문제를 화면 수정으로 숨길 수 있습니다.",
        "“주가 차트가 비어 있습니다”라는 말도 마찬가지입니다. 이 사례의 fixture는 같은 결과를 반복 확인하려고 미리 정해 둔 교육용 가상 데이터 묶음입니다. 선택 기간에 이 데이터의 행이 없는 정상 빈 결과인지, 품질 규칙이 값을 차단했는지, 변환 결과와 화면 필터가 어긋났는지, 전달 파일을 읽지 못했는지를 먼저 구분해야 합니다. 차트 선을 억지로 이어 보이게 만들면 데이터 의미 문제를 화면 수정으로 숨길 수 있습니다."
      ],
      [
        "모임 참가 요청 뒤 실패 문구가 보인 상황을 예로 들면 다음처럼 후보를 나눌 수 있습니다.",
        "모임 참가 요청 뒤 실패 문구가 보인 상황을 예로 들면 다음처럼 후보를 나눌 수 있습니다. 현재 참가 관계와 모임 상태를 읽는 목적은 안전한 다음 행동을 고르는 것이고, 이번 요청의 처리 결과를 밝히는 목적과는 다릅니다. 표의 처리 기록은 요청을 구분하는 식별 정보와 시각 등으로 바로 그 요청에 연결할 수 있는 기존 기록을 뜻합니다. 같은 사용자의 현재 상태나 비슷한 시각의 기록만으로 같은 요청이라고 단정하지 않습니다."
      ],
      [
        "| 요청이 애플리케이션 경계에 도달하지 않음 | 기존 요청 기록에서 같은 가상 입력과 시각을 확인 | 일치하는 서버 처리 기록이 없고 브라우저 전달 실패가 확인됨 | 서버가 같은 요청을 받아 처리한 기록이 있음 |\n| 모집 상태·정원·권한 규칙이 거절함 | 응답 종류와 거절 뒤 참가 상태를 확인 | 명시적인 업무 오류와 변경되지 않은 참가 관계 | 성공 처리 기록이나 확정된 참가 관계가 있음 |\n| 참가 상태는 확정됐지만 응답 또는 화면 갱신만 실패함 | 요청을 다시 보내지 않고 권위 상태를 재조회 | 같은 사용자의 참가 관계가 이미 확정됨 | 참가 관계가 없고 서버 처리도 확정되지 않음 |",
        "| 요청이 애플리케이션 경계에 도달하지 않음 | 같은 요청의 기존 전달·수신 기록을 대조 | 해당 처리 기록이 없고 브라우저 전달 실패가 확인됨. 기록 누락 가능성은 남음 | 서버가 바로 그 요청을 받아 처리한 기록이 있음 |\n| 모집 상태·정원·중복·권한 규칙이 거절함 | 같은 요청의 응답과 처리 기록을 대조 | 해당 요청을 거절한 업무 오류·처리 결과가 있음. 기존 참가 관계는 남을 수 있음 | 바로 그 요청의 성공 확정을 보여 주는 처리 기록이 있음 |\n| 이번 요청은 확정됐지만 응답 또는 화면 갱신만 실패함 | 재전송 없이 같은 요청의 확정·전달 기록과 현재 참가 관계·모임 상태를 각각 확인 | 해당 요청의 성공 확정 기록과 그 뒤 응답 전달 또는 화면 갱신의 실패 증거가 있음 | 같은 요청이 확정되지 않고 거절됐음을 보여 주는 처리 기록이 있음 |"
      ],
      [
        "요청 기록이 없다는 사실이 “요청이 오지 않았다”를 완전히 증명하지는 않습니다. 기록 수집 자체가 누락됐을 수 있기 때문입니다. 따라서 “가설과 일치한다”와 “원인이 확정됐다”를 구분하고, 중요한 결정에는 서로 다른 경계의 증거를 더합니다.",
        "이미 참가한 사용자의 중복 요청이 거절된 경우와 이번 요청이 확정된 뒤 응답만 유실된 경우 모두 현재 참가 관계는 `confirmed`로 보일 수 있습니다. 반대로 이후 별도 취소가 있었다면 현재 관계가 없거나 취소 상태라고 해서 앞선 확정을 부정할 수 없습니다. 자기 상태를 조회할 때에는 모임 상태도 함께 읽고, 취소된 모임에 보존된 참가 이력을 현재 유효한 참가로 해석하지 않습니다.\n\n요청 기록이 없다는 사실이 “요청이 오지 않았다”를 완전히 증명하지는 않습니다. 기록 수집 자체가 누락됐을 수 있기 때문입니다. 요청별 연결 증거가 없거나 조회가 실패했거나 관찰 사이에 다른 상태 변경이 있었다면 원인은 아직 판별 불가로 남깁니다. 현재 상태 조회는 POST 재전송 허가가 아닙니다. 따라서 “가설과 일치한다”와 “원인이 확정됐다”를 구분하고, 중요한 결정에는 서로 다른 경계의 증거를 더합니다."
      ]
    ]
  },
  {
    "path": "CONTENT_MAP.md",
    "before": "0079567455bd8d7187876ac529cf1a25cfa27c7e9d0652fdd03f3f139e5959e0",
    "after": "bb2e7a7ffc6445c983fc5323b0db7bc23edde20aa9a7c5de07058fe8c744fa20",
    "replacements": [
      [
        "| [추상화와 트레이드오프](src/content/docs/01-mental-models/abstraction-and-tradeoffs.md) | `draft` | 8,066 | `/01-mental-models/abstraction-and-tradeoffs/` |\n| [개발자처럼 문제를 나누는 법](src/content/docs/01-mental-models/developer-thinking.md) | `draft` | 12,552 | `/01-mental-models/developer-thinking/` |",
        "| [추상화와 트레이드오프](src/content/docs/01-mental-models/abstraction-and-tradeoffs.md) | `draft` | 8,135 | `/01-mental-models/abstraction-and-tradeoffs/` |\n| [개발자처럼 문제를 나누는 법](src/content/docs/01-mental-models/developer-thinking.md) | `draft` | 13,199 | `/01-mental-models/developer-thinking/` |"
      ]
    ]
  }
];
export function r14PreFixBytes(path,bytes){
 bytes=r14PreCloseoutBytes(path,bytes);
 const e=r14FixTransitions.find(x=>x.path===path);if(!e||sha(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R14 reversal not unique');text=text.replace(after,before);}
 if(sha(text)!==e.before)throw Error('R14 historical bytes mismatch');return Buffer.from(text);
}
export function validateR14Current(read){const errors=[];for(const e of r14FixTransitions){try{if(sha(r14PreCloseoutBytes(e.path,read(e.path)))!==e.after)errors.push('R14 current patch mismatch: '+e.path)}catch{errors.push('R14 current patch missing: '+e.path)}}return errors;}
