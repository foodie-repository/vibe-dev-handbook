import {createHash} from "node:crypto";
import {r05PreCloseoutBytes} from "./r05-closeout.mjs";
const sha=b=>createHash("sha256").update(b).digest("hex");
export const r05FixTransitions=[
  {
    "path": "src/content/docs/05-frontend/browser-dom-rendering.md",
    "before": "0f255ccafa28948290f8db309fd5e0b88565869acc83923e50ed860803d1d9d8",
    "after": "8880963d63d3ecad3bed53976a070e102ec8daece775dc1e86acaf4e5dcc7e43",
    "replacements": [
      [
        "한 사용자 행동이 반드시 HTTP 요청을 만드는 것은 아닙니다. 펼침 메뉴처럼 브라우저 안의 상태만 바꿀 수도 있고, 데이터를 조회하거나 저장할 때는 서버와 요청·응답을 주고받을 수도 있습니다. 반대로 링크 이동이나 새로고침처럼 새 문서를 받으면 같은 문서의 부분 갱신이 아니라 초기 표시 흐름을 다시 거칩니다. HTML Standard는 HTML 입력을 토큰화하고 트리를 구성해 DOM `Document`를 만드는 규칙을 정의하지만 언제 화면을 렌더할지는 그 파싱 절에서 정하지 않습니다. DOM Standard는 노드 트리와 이벤트 모델을, CSSOM은 스타일 관련 상태에 접근·조작하는 API와 파싱·직렬화 규칙을 다룹니다. 따라서 `DOM을 만든 다음 CSSOM을 완성하고 마지막에 한 번 그린다`는 고정 직렬 구현으로 이해하면 안 됩니다.",
        "한 사용자 행동이 반드시 HTTP 요청을 만드는 것은 아닙니다. 펼침 메뉴처럼 브라우저 안의 상태만 바꿀 수도 있고, 데이터를 조회하거나 저장할 때는 서버와 요청·응답을 주고받을 수도 있습니다. 반대로 링크 이동이나 새로고침처럼 새 문서를 받으면 같은 문서의 부분 갱신이 아니라 초기 표시 흐름을 다시 거칩니다. HTML Standard는 HTML 입력을 토큰화하고 트리를 구성해 DOM `Document`를 만드는 규칙을 정의하지만 언제 화면을 렌더할지는 그 파싱 절에서 정하지 않습니다. DOM Standard는 노드 트리와 이벤트 모델을, CSS 객체 모델(CSS Object Model, CSSOM)은 스타일 관련 상태에 접근·조작하는 API와 파싱·직렬화 규칙을 다룹니다. 따라서 `DOM을 만든 다음 CSSOM을 완성하고 마지막에 한 번 그린다`는 고정 직렬 구현으로 이해하면 안 됩니다."
      ],
      [
        "| Computed style과 layout 값 | 선택 요소에 최종 계산된 CSS 값과 실제 상자 크기 | 사용자의 전체 과업과 접근성 구조가 성공했는지 |",
        "| Computed style과 layout 값 | Computed 패널의 해석된 CSS 값(resolved values)과 별도로 확인한 레이아웃·상자 크기 | 사용자의 전체 과업과 접근성 구조가 성공했는지 |"
      ],
      [
        "사용자가 교육용 주가 fixture를 조회했고 Network 탭에서 `200` 응답과 데이터 배열을 확인했다고 가정해 보겠습니다. 이 증거는 서버가 해당 요청에 응답했다는 뜻이지만 화면 성공까지 증명하지는 않습니다.",
        "사용자가 테스트용으로 준비한 교육용 가상 주가 자료(fixture)를 조회했고 Network 탭에서 `200` 응답과 데이터 배열을 확인했다고 가정해 보겠습니다. 이 증거는 서버가 해당 요청에 응답했다는 뜻이지만 화면 성공까지 증명하지는 않습니다."
      ],
      [
        "| DOM 존재, 렌더링 실패 | 필요한 노드는 존재 | 숨김·0 크기·화면 밖·겹침 | 보이지 않거나 잘림 | Computed style, 상자 크기, overflow, 실제 픽셀 |",
        "| DOM 존재, 렌더링 실패 | 관련 요청·응답은 별도로 확인하며 노드 존재는 판단할 수 없음 | 필요한 노드가 존재하지만 스타일·배치를 더 확인해야 함 | 보이지 않거나 잘림 | Computed style, 상자 크기, 숨김·화면 밖·겹침·overflow, 실제 픽셀 |"
      ],
      [
        "가능하면 개발자 도구를 먼저 열고 오류를 재현한 뒤 여러 탭의 증거를 함께 봅니다. 한 탭만 보고 원인을 단정하지 않습니다. 예를 들어 Network에서 API 요청이 성공했는데 Console에 데이터 변환 오류가 있다면 서버를 다시 만드는 것보다 프런트엔드의 응답 처리부터 확인해야 합니다. 반대로 Console에 오류가 없어도 요청 자체가 만들어지지 않았다면 클릭 이벤트와 조건 분기를 살펴봐야 합니다.",
        "가능하면 개발자 도구를 먼저 열고 오류를 재현한 뒤 여러 탭의 증거를 함께 봅니다. Network 기록이 비어 있다는 이유만으로 요청이 없었다고 단정하지 않습니다. 기록을 시작하기 전에 발생한 요청은 빠질 수 있으므로, 개발자 도구를 연 뒤 안전한 테스트 범위에서 같은 행동을 재현하고 기록을 확인합니다. 한 탭만 보고 원인을 단정하지 않습니다. 예를 들어 Network에서 API 요청이 성공했는데 Console에 데이터 변환 오류가 있다면 서버를 다시 만드는 것보다 프런트엔드의 응답 처리부터 확인해야 합니다. 반대로 Console에 오류가 없어도 요청 자체가 만들어지지 않았다면 클릭 이벤트와 조건 분기를 살펴봐야 합니다."
      ]
    ]
  },
  {
    "path": "src/content/docs/05-frontend/ui-state-and-ux.md",
    "before": "bc3e7ff832ba0accd22924d96c2ac611a3b594321a08d34f08c3823466350fc6",
    "after": "e8e8f3134e4b5ea78f76e7b5fcfb45d46213c09a6c5495985c4999b516b02e56",
    "replacements": [
      [
        "| unknown | 권위 상태에서 참가 확인 | confirmed | 확정 결과 표시 | 이전 요청 적용 확인 | 중복 쓰기 없음 |\n| unknown | 미참가 확인+재시도 허용 | eligible | 다시 시도 가능 | 이전 요청 미적용 확인 | 새 요청 식별자 정책 |",
        "| unknown | 권위 상태에서 현재 참가 확인 | confirmed | 현재 참가 상태 표시 | 현재 참가 관계 확인; 특정 요청의 적용 여부는 별도 처리 결과로 판정 | 중복 쓰기 없음 |\n| unknown | 현재 미참가와 안전한 재시도 조건 확인 | eligible | 계약에 따라 다시 시도 가능 | 이전 요청의 종결·미적용 또는 안전한 멱등 재시도 조건 확인 | API 계약에 따른 요청 식별자 유지·발급 정책 |\n\n현재 참가 여부는 조회한 시점의 상태이지 특정 이전 요청의 처리 결과와 같지 않습니다. 이전 요청이 뒤늦게 확정되거나 다른 탭에서 참가·취소했을 수 있으므로, 요청 식별자와 연결된 처리 결과 또는 API가 보장하는 멱등·중복 방지 계약으로 재시도 조건을 확인합니다. 이 근거를 조회하지 못하거나 안전성을 판정할 수 없으면 `unknown`을 유지하고 새 쓰기를 보류합니다."
      ]
    ]
  },
  {
    "path": "CONTENT_MAP.md",
    "before": "7d8ef3316830e5ad7aa86eb78d7ed6d99e80aaec0a3b3f8ff142c76238c0cd09",
    "after": "2722d63b7106c8addfa3ef521959744eba1260fdccd6b9a218ac252b446661d5",
    "replacements": [
      [
        "| [브라우저·DOM·렌더링](src/content/docs/05-frontend/browser-dom-rendering.md) | `draft` | 15,327 | `/05-frontend/browser-dom-rendering/` |",
        "| [브라우저·DOM·렌더링](src/content/docs/05-frontend/browser-dom-rendering.md) | `draft` | 15,578 | `/05-frontend/browser-dom-rendering/` |"
      ],
      [
        "| [UI 상태와 사용자 경험](src/content/docs/05-frontend/ui-state-and-ux.md) | `draft` | 12,953 | `/05-frontend/ui-state-and-ux/` |",
        "| [UI 상태와 사용자 경험](src/content/docs/05-frontend/ui-state-and-ux.md) | `draft` | 13,248 | `/05-frontend/ui-state-and-ux/` |"
      ]
    ]
  }
];
export function r05PreFixBytes(path,bytes){
 bytes=r05PreCloseoutBytes(path,bytes);
 const e=r05FixTransitions.find(x=>x.path===path);if(!e||sha(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error("R05 reversal not unique");text=text.replace(after,before);}
 if(sha(text)!==e.before)throw Error("R05 historical bytes mismatch");return Buffer.from(text);
}
export function validateR05Current(read){const errors=[];for(const e of r05FixTransitions){try{if(sha(r05PreCloseoutBytes(e.path,read(e.path)))!==e.after)errors.push("R05 current patch mismatch: "+e.path)}catch{errors.push("R05 current patch missing: "+e.path)}}return errors;}
