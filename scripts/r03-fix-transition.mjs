import {createHash} from 'node:crypto';
import {r03PreCloseoutBytes} from './r03-closeout.mjs';
const sha=b=>createHash('sha256').update(b).digest('hex');
// Exact R03 finding patch. Preserves original review bytes; never a PASS decision.
export const r03FixTransitions=[
  {
    "path": "src/content/docs/03-full-stack/http-request-response.md",
    "before": "a5a4a1a962fa228b85d7586aa3a0256ef489a6b8c6f770de121b5850709dfdab",
    "after": "e4c13382187e9dffc19bf73486fd4d953f540e6a6b6f373dca9d6e5c7a7ea2a2",
    "replacements": [
      [
        "HTTP 자체는 전송 구간을 암호화하지 않습니다. 공개 환경에서는 HTTP 메시지를 TLS로 보호하는 **HTTPS**를 기본값으로 사용하고, 브라우저 주소와 Network 탭에서 실제 요청 URL이 `https://`인지 확인해야 합니다. 이 장의 `http://localhost` 예시는 자기 컴퓨터 안에서 동작을 확인하는 로컬 예시입니다.",
        "HTTP 자체는 전송 구간을 암호화하지 않습니다. 공개 환경에서는 전송 구간을 보호하는 전송 계층 보안(Transport Layer Security, TLS)을 HTTP에 적용한 **HTTPS**를 기본값으로 사용하고, 브라우저 주소와 Network 탭에서 실제 요청 URL이 `https://`인지 확인해야 합니다. 이 장의 `http://localhost` 예시는 자기 컴퓨터 안에서 동작을 확인하는 로컬 예시입니다."
      ],
      [
        "상태 코드는 결과의 큰 분류이고 본문은 세부 설명입니다. 둘 중 하나만 사용하면 클라이언트가 안정적으로 판단하기 어렵습니다. 모든 상황을 `200`으로 반환한 뒤 본문 안의 `success: false`만 보게 만들면 브라우저 코드, 모니터링과 프록시가 실패를 성공으로 오해할 수 있습니다.",
        "상태 코드는 결과의 큰 분류이고 본문은 세부 설명입니다. 본문이 있는 응답에서는 상태 코드와 본문을 함께 읽어야 합니다. `204 No Content`처럼 본문이 없는 응답에는 JSON 파싱이나 성공 본문을 요구하지 않고 상태 코드·필요한 헤더와 계약상 재조회로 결과를 확인합니다. 모든 상황을 `200`으로 반환한 뒤 본문 안의 `success: false`만 보게 만들면 브라우저 코드, 모니터링과 프록시가 실패를 성공으로 오해할 수 있습니다."
      ],
      [
        "| `5xx` | 서버가 정상적인 요청을 처리하지 못함 | `500` 내부 오류, `503` 일시적 사용 불가 |",
        "| `5xx` | 서버 측 처리 오류를 나타내는 범주 | `500` 내부 오류, `503` 일시적 사용 불가 |"
      ],
      [
        "`4xx`라고 해서 항상 사용자의 잘못이라는 뜻은 아닙니다. 프런트엔드가 잘못된 형식을 만들었거나 만료된 토큰을 보냈을 수도 있습니다. `5xx`도 원인을 자동으로 알려주지 않으므로 요청 식별자, 서버 로그와 관련 지표를 함께 봐야 합니다.",
        "HTTP 성공과 업무 완료는 구분해야 합니다. 오래 걸리는 작업은 접수 성공을 응답한 뒤에도 처리 중일 수 있으므로, 해당 상태 코드의 의미와 API 계약의 작업 상태·조회 결과를 함께 확인합니다. 접수됨·처리 중·업무 완료는 계약상 상태로 구분하고, 응답을 받지 못했다면 결과 불명으로 두어 처리 기록과 현재 상태를 확인합니다. 아래 모임 참가 예시는 참가를 확정한 뒤 성공 응답을 보내는 계약입니다.\n\n`4xx`라고 해서 항상 사용자의 잘못이라는 뜻은 아닙니다. 프런트엔드가 잘못된 형식을 만들었거나 만료된 토큰을 보냈을 수도 있습니다. `5xx`도 원인을 자동으로 알려주지 않으므로 요청 식별자, 서버 로그와 관련 지표를 함께 봐야 합니다."
      ],
      [
        "`POST /events/evt-42/registrations`는 인증된 현재 사용자의 참가 관계를 만드는 쓰기 요청입니다. 서버는 본문에서 `participant_id`를 받아 믿지 않고 인증된 주체를 사용하며, 같은 사용자의 활성 참가 중복, `event.status`, 현재 확정 인원과 `capacity`, 기대한 `event.version`을 신뢰할 수 있는 경계에서 함께 판단해야 합니다.",
        "`POST /events/evt-42/registrations`는 인증된 현재 사용자의 참가 관계를 만드는 쓰기 요청입니다. 서버는 본문에서 `participant_id`를 받아 믿지 않고 인증된 주체를 사용하며, 같은 사용자의 활성 참가 중복, `event.status`, 현재 확정 인원과 `capacity`를 신뢰할 수 있는 경계에서 함께 판단해야 합니다.\n\n이 예시는 조회 이후의 모임 변경을 감지하기 위해 참가 요청의 기대 버전을 검사하고, 참가 확정과 같은 트랜잭션에서 `event.version`도 1 증가시키는 API 설계를 선택했습니다. 다른 참가가 먼저 확정돼 버전이 바뀌었다면 예전 기대 버전의 요청은 충돌로 거절하고 최신 상태를 재조회합니다. 이는 HTTP나 모든 모임 앱의 필수 규칙이 아니므로 실제 계약이 없는 프로젝트에 버전 검사·증가를 임의로 추가하지 않습니다."
      ],
      [
        "| 조회·참가·취소 성공 | 해당 동작에 맞는 `2xx`, 예를 들어 `200`·`201`·`204` | 응답 본문과 권위 있는 참가 상태가 일치하는지 확인 |",
        "| 조회·참가·취소 성공 | 해당 동작에 맞는 `2xx`, 예를 들어 `200`·`201`·`204` | 본문이 있다면 함께 읽고, 본문 없는 `204`는 JSON 파싱 없이 상태·필요한 헤더와 계약상 재조회로 확인 |"
      ],
      [
        "다른 API가 같은 업무 상황을 다른 `4xx`에 매핑할 수도 있습니다. 중요한 것은 숫자 하나를 외우는 일이 아니라 인증 실패, 권한 거절, 입력 오류, 이미 참가함, 정원·마감, 버전 충돌과 서버 오류를 클라이언트가 안정적으로 구분하고 데이터가 바뀌지 않았음을 테스트할 수 있는 계약입니다.",
        "다른 API가 같은 업무 상황을 다른 `4xx`에 매핑할 수도 있습니다. 중요한 것은 숫자 하나를 외우는 일이 아니라 인증 실패, 권한 거절, 입력 오류, 이미 참가함, 정원·마감, 버전 충돌과 서버 오류를 클라이언트가 안정적으로 구분할 수 있는 계약입니다. 변경 전에 거절하도록 정한 인증·인가·입력·업무 규칙 위반에서는 그 요청으로 데이터가 바뀌지 않았음을 테스트합니다.\n\n서버 오류나 전달 실패는 상태 코드만으로 데이터 불변을 단정하지 않습니다. 저장 중 실패라면 계약한 전체 취소(rollback)가 실제로 이뤄졌는지 확인하고, 확정(commit) 뒤 전달 실패라면 이미 변경됐을 수 있으므로 권위 있는 현재 상태와 처리 기록을 대조합니다. 처리 단계를 확인하지 못했다면 결과 불명으로 두고 쓰기 요청을 바로 반복하지 않습니다."
      ],
      [
        "Network 탭에서는 요청 URL, 메서드, 상태 코드, 소요 시간, 요청·응답 헤더와 본문을 확인할 수 있습니다. 화면 오류를 재현한 직후 실패한 요청 하나를 고르고, 민감한 토큰과 개인정보를 복사하거나 공유하지 않은 채 다음을 봅니다.",
        "Network 탭에서는 요청 URL, 메서드, 상태 코드, 소요 시간, 요청·응답 헤더와 본문을 확인할 수 있습니다. 먼저 Network 패널을 열고 기록 중인지 확인한 뒤 화면 오류를 재현합니다. 기록된 실패 요청 하나를 고르고, 민감한 토큰과 개인정보를 복사하거나 공유하지 않은 채 다음을 봅니다."
      ],
      [
        "브라우저는 서버의 HTTP 처리와 별개로 보안 정책 때문에 요청을 보내지 않거나 받은 응답을 현재 페이지의 JavaScript에 공유하지 않을 수 있습니다. 교차 출처 리소스 공유(Cross-Origin Resource Sharing, CORS)는 서버가 다른 출처에 응답을 공유할 수 있음을 HTTP 헤더로 선택하는 규칙이지 인증·인가나 서버 간 요청 차단 장치가 아닙니다.",
        "브라우저는 서버의 HTTP 처리와 별개로 보안 정책 때문에 요청을 보내지 않거나 받은 응답을 현재 페이지의 JavaScript에 공유하지 않을 수 있습니다. 여기서 출처(origin)는 프로토콜·호스트·포트의 조합입니다. 같은 조합에서 경로만 달라지면 같은 출처이고, 프로토콜이나 포트가 바뀌면 같은 호스트라도 다른 출처입니다. 교차 출처 리소스 공유(Cross-Origin Resource Sharing, CORS)는 서버가 다른 출처에 응답을 공유할 수 있음을 HTTP 헤더로 선택하는 규칙이지 인증·인가나 서버 간 요청 차단 장치가 아닙니다."
      ],
      [
        "브라우저가 본 요청보다 먼저 `OPTIONS` 사전 요청(preflight request)을 보내는 경우에는 사전 요청 실패로 본 요청이 진행되지 않을 수 있습니다. 반대로 사전 요청이 필요 없는 교차 출처 요청은 서버에 도달해 처리됐지만 CORS 응답 헤더가 맞지 않아 JavaScript가 응답을 사용하지 못할 수 있습니다. 따라서 CORS 오류 뒤 쓰기 요청을 즉시 반복하지 말고 Network의 사전 요청·본 요청, Console의 정책 오류, 서버 로그와 권위 있는 현재 상태를 대조해야 합니다.",
        "브라우저가 본 요청보다 먼저 `OPTIONS` 사전 요청(preflight request)을 보내는 경우에는 사전 요청 실패로 본 요청이 진행되지 않을 수 있습니다. 사전 요청이 성공했더라도 본 요청의 응답이 CORS 공유 조건을 만족하지 않으면 JavaScript가 응답을 사용하지 못할 수 있습니다. 사전 요청이 필요 없는 교차 출처 요청도 서버에 도달해 처리됐지만 CORS 응답 헤더가 맞지 않아 JavaScript가 응답을 사용하지 못할 수 있습니다. 따라서 CORS 오류 뒤 쓰기 요청을 즉시 반복하지 말고 Network의 사전 요청·본 요청, Console의 정책 오류, 서버 로그와 권위 있는 현재 상태를 대조해야 합니다."
      ]
    ]
  },
  {
    "path": "CONTENT_MAP.md",
    "before": "8b6410686de4bb74ed02fd2b9f00f5e2a41c405e92708b183c7cac7035f26b47",
    "after": "131204af54bacc81c0edf1fb63daf2de3d5ff64c5290cf87df7785edb15e1329",
    "replacements": [
      [
        "| [HTTP 요청과 응답](src/content/docs/03-full-stack/http-request-response.md) | `draft` | 14,497 | `/03-full-stack/http-request-response/` |",
        "| [HTTP 요청과 응답](src/content/docs/03-full-stack/http-request-response.md) | `draft` | 15,556 | `/03-full-stack/http-request-response/` |"
      ]
    ]
  }
];
export function r03PreFixBytes(path,bytes){
 bytes=r03PreCloseoutBytes(path,bytes);
 const entry=r03FixTransitions.find(x=>x.path===path);if(!entry||sha(bytes)!==entry.after)return bytes;
 let text=bytes.toString();for(const [before,after] of [...entry.replacements].reverse()){if(text.split(after).length!==2)throw Error('R03 reversal is not unique');text=text.replace(after,before)}
 if(sha(text)!==entry.before)throw Error('R03 original bytes mismatch');return Buffer.from(text);
}
export function validateR03Current(read){
 const errors=[];for(const e of r03FixTransitions){try{if(sha(r03PreCloseoutBytes(e.path,read(e.path)))!==e.after)errors.push('R03 current patch mismatch: '+e.path)}catch{errors.push('R03 current patch missing: '+e.path)}}return errors;
}
