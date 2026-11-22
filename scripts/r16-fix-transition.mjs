import {r16PreCloseoutBytes} from './r16-closeout.mjs';
import {createHash} from 'node:crypto';
const sha=b=>createHash('sha256').update(b).digest('hex');
export const r16FixTransitions=[
  {
    "path": "CONTENT_MAP.md",
    "before": "2decc3fee01960c173c417b1455bc5a730cc97f88943c34e3db4eb010c0f0f5d",
    "after": "cf7be07c35b75cfd0f542bdc0ae00c52fb175ab00c64e16862de7e6dc9cc1ab8",
    "replacements": [
      [
        "| [프런트엔드와 백엔드의 경계](src/content/docs/03-full-stack/frontend-backend-boundary.md) | `draft` | 9,955 | `/03-full-stack/frontend-backend-boundary/` |\n",
        "| [프런트엔드와 백엔드의 경계](src/content/docs/03-full-stack/frontend-backend-boundary.md) | `draft` | 9,999 | `/03-full-stack/frontend-backend-boundary/` |\n"
      ],
      [
        "| [데이터 모델·스키마·마이그레이션](src/content/docs/04-backend-data/data-model-schema-migration.md) | `draft` | 12,844 | `/04-backend-data/data-model-schema-migration/` |\n",
        "| [데이터 모델·스키마·마이그레이션](src/content/docs/04-backend-data/data-model-schema-migration.md) | `draft` | 13,691 | `/04-backend-data/data-model-schema-migration/` |\n"
      ],
      [
        "| [상태·캐시·큐](src/content/docs/04-backend-data/state-cache-queue.md) | `draft` | 13,408 | `/04-backend-data/state-cache-queue/` |\n",
        "| [상태·캐시·큐](src/content/docs/04-backend-data/state-cache-queue.md) | `draft` | 14,503 | `/04-backend-data/state-cache-queue/` |\n"
      ]
    ]
  },
  {
    "path": "research/source-map.md",
    "before": "46cdc5dcbee86ba8f471f29980c3ecfcddfc9d9ba29fb77750c8babc58e474a0",
    "after": "f2128d676e4a24cb757034c4ef7da8c01a24a6a457cbfbdd053bfcee0340101c",
    "replacements": [
      [
        "",
        "2026-11-15 R16 현재 적용 보충: [백엔드 지원 직접 근거](public-beta-review-source-excerpts/r16-data-support-2026-11-15.md)의 RFC9110·9111, OWASP 현재 반환 문서, Chrome Sources, PostgreSQL18 구조·제약·변경, Parallel Change·CI·Evolutionary Database Design, RabbitMQ 관련 절을 확인했습니다. 같은 실행 R04 권한·세션·트랜잭션 근거는 명시 범위에서 재사용합니다. OWASP 기존 AJAX 주소의 반환 제목은 Web Frontend Security이며 HTTP 리다이렉트 헤더는 미확인입니다. RabbitMQ 첫 추출에서 누락된 순서 예외 목록은 같은 공식 URL의 다른 추출로 보충했습니다. 백필 중 쓰기 보호·전환 수렴, 후보 품질과 시간에 따른 신선도, 재조회 이후 경쟁과 외부 부작용의 경계는 해당 원고의 교육용 검증 계약으로 구분합니다. 아래 과거 확인일·실패·PBSG-002 이력은 보존하고 실제 DB/큐/운영 성공은 not-confirmed입니다. 최초 R16 BLOCKED와 현재 수정 후 독립 검토 대기를 구분하며 상태 승격이나 공개 승인을 주장하지 않습니다.\n\n"
      ]
    ]
  },
  {
    "path": "src/content/docs/03-full-stack/frontend-backend-boundary.md",
    "before": "f643244a2f173566f431a2259266d4cc6ff216dcfdfef1fedafe9aff6185c28d",
    "after": "e88d80e5fda10338a645410b0dcc2fd014987f744f75586d647f31441636dac9",
    "replacements": [
      [
        "- [OWASP AJAX Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AJAX_Security_Cheat_Sheet.html): 사용자가 제어할 수 있는 client-side logic과 중요 규칙의 server-side 재검증 범위\n",
        "- [OWASP Web Frontend Security Cheat Sheet — 기존 AJAX 주소](https://cheatsheetseries.owasp.org/cheatsheets/AJAX_Security_Cheat_Sheet.html): 2026-11-15에 반환된 제목이며, 사용자가 제어할 수 있는 client-side logic과 중요 규칙의 server-side 재검증 범위\n"
      ],
      [
        "출처의 확인일, 적용 범위와 제품 일반화 금지선은 저장소의 `research/source-map.md`에서 관리합니다. PBSG-002는 이 장뿐 아니라 데이터 모델·마이그레이션과 상태·캐시·큐의 전체 주장 묶음을 함께 대조한 뒤 전환합니다.\n",
        "출처의 확인일, 적용 범위와 제품 일반화 금지선은 저장소의 `research/source-map.md`에서 관리합니다. 이 장과 데이터 모델·마이그레이션, 상태·캐시·큐의 근거를 함께 관리하되 각 표준·제품이 직접 뒷받침하는 범위는 구분합니다.\n"
      ]
    ]
  },
  {
    "path": "src/content/docs/04-backend-data/data-model-schema-migration.md",
    "before": "566f35486de2d8309c037d356d4a3966ffcaa2f83211b8e23187869184ee9435",
    "after": "9a2334cde915cdf6d8554b8bcfa9da3492791ae63df66933528227d6077e4aa0",
    "replacements": [
      [
        "",
        "이 장의 `host_user_id`는 기준 사례와 API 장의 `host_id`, `participant_user_id`는 `participant_id`와 같은 역할을 가리킵니다. 뒤의 고유성 설명과 공동 주최자 표도 이 대응을 사용합니다. 사용자를 참조한다는 뜻을 드러낸 예시 이름이며, 실제 데이터베이스 열을 바꾸거나 새 식별자를 추가하라는 지시가 아닙니다.\n\n"
      ],
      [
        "1. **확장:** 기존 열을 지우지 않고 새 열을 nullable 상태로 추가합니다. 이 단계의 스키마는 구버전 코드가 여전히 `location_text`를 읽고 새 코드가 새 열을 기록할 수 있는지 검토해야 합니다.\n2. **백필:** 기존 행을 명시한 변환 규칙에 따라 새 열로 채웁니다. 해석할 수 없는 값은 임의로 추측하지 않고 별도 실패 집합으로 남깁니다.\n3. **검증:** 전체 행 수, 값 분포, 미분류 행, 허용되지 않은 조합, 표본과 사용자 흐름을 대조합니다. 원본 열과 변환 결과를 연결할 수 있어야 합니다.\n4. **전환:** 읽기 경로가 새 열을 권위 값으로 사용하도록 바꾸고, 전환 동안 이중 쓰기가 있다면 불일치 관찰과 종료 조건을 둡니다.\n",
        "1. **확장:** 기존 열을 지우지 않고 새 열을 nullable 상태로 추가합니다. 구버전·신버전 코드와 배치·관리 도구의 모든 쓰기 경로를 먼저 식별합니다. 백필 전에 호환 코드, 변경을 반영하는 동기화 경로 또는 통제된 쓰기 중지 중 선택한 보호가 유효해야 합니다. 새 열만 기록한 값을 구버전도 읽을 수 있는지 확인하지 못하면 그 쓰기나 구버전 복귀를 허용하지 않습니다.\n2. **백필:** 기존 행을 명시한 변환 규칙에 따라 새 열로 채웁니다. 읽은 행의 버전과 쓰기 시점의 버전을 함께 검사하는 조건부 갱신 등으로, 그 사이 들어온 최신 쓰기를 덮지 않게 합니다. 충돌 행은 최신 원본으로 다시 처리하고 해석할 수 없는 값은 추측하지 않고 별도 실패 집합으로 남깁니다.\n3. **검증:** 전체 행 수, 값 분포, 미분류 행, 허용되지 않은 조합, 표본과 사용자 흐름을 대조합니다. 원본 열과 변환 결과를 연결하고 백필 이후의 새 쓰기도 대조 범위에 포함합니다. 한 번의 성공 결과 뒤에도 쓰기 보호와 불일치 관찰을 유지합니다.\n4. **전환:** 전환 직전까지의 새 쓰기가 새 표현에 반영되고 미해결 충돌·불일치가 없다는 수렴 조건을 통과한 뒤에만 새 열을 읽기 권위로 사용합니다. 그 조건을 전환 순간까지 유지할 수 없으면 중지합니다. 공존하는 쓰기 경로의 보호는 의존이 사라졌다는 증거가 있을 때 해제합니다.\n"
      ],
      [
        "",
        "예를 들어 백필이 `회의실 A`를 읽은 뒤 사용자가 `회의실 B`로 수정했다면, 늦은 백필은 A로 덮지 않고 충돌로 남겨 B를 기준으로 다시 처리해야 합니다. 검증 뒤 전환 전에 구버전 쓰기가 들어오면 새 표현에 반영됐는지 다시 대조하며, 따라잡지 못했다면 전환하지 않습니다. 새 코드가 옛 표현으로 되돌릴 수 없는 값을 기록했다면 단순히 구버전으로 복귀해서도 안 됩니다. 먼저 쓰기 제한과 정보 보존·변환 가능성을 확인하고, 불가능하면 롤포워드 후보를 검토합니다.\n\n"
      ],
      [
        "",
        "- 백필 전 모든 쓰기 경로의 보호, 최신 쓰기를 덮지 않는 조건, 전환 직전 수렴 조건과 구버전 복귀 가능성을 명시한다.\n"
      ]
    ]
  },
  {
    "path": "src/content/docs/04-backend-data/state-cache-queue.md",
    "before": "f18323794003ce912c2e241a89818aad3d69f357e7884433fca87e49cc9f8b92",
    "after": "e1f1570362a645db9d812b1ba8c2fc11d760b707b4c918ce8252420e055ca030",
    "replacements": [
      [
        "",
        "재조회는 필요하지만, 조회 직후 상태가 바뀌는 경쟁까지 없애지는 않습니다. 데이터베이스 안의 상태·버전 판정과 결과 갱신은 조건부 갱신이나 적절한 트랜잭션 전략으로 함께 보호해야 합니다. 조회와 무조건 갱신을 분리하면 그 사이 저장된 최신 결과를 덮을 수 있습니다. 외부 알림은 이 데이터베이스 경계 밖이므로 발송을 허용하는 기준 시점과 이후 취소 처리까지 별도 계약이 필요합니다.\n\n"
      ],
      [
        "",
        "RabbitMQ에서 생산자 확인(publisher confirm)은 브로커가 제품 계약에 따라 메시지를 수락·보관하는 책임을 맡았다는 경계입니다. 소비자 확인(consumer acknowledgement)은 소비자가 전달받은 메시지를 처리했다고 브로커에 알리는 별도 경계입니다. 생산자 확인을 받았어도 소비자는 아직 실행하지 않았을 수 있고, 업무를 마친 뒤 소비자 확인만 유실될 수도 있습니다. 어느 확인도 임의의 외부 알림을 자동으로 정확히 한 번 성공시키지는 않습니다.\n\n"
      ],
      [
        "3. 데이터베이스에서 현재 모임과 참가 관계를 권한 있는 경로로 재조회합니다.\n4. 참가가 취소됐거나 모임이 취소됐다면 오래된 “확정 알림”을 보내지 않고 `superseded`처럼 명시한 결과로 끝냅니다.\n5. 여전히 처리 대상이면 외부 부작용의 기존 결과와 중복 방지 계약을 확인한 뒤 남은 단계를 실행합니다.\n",
        "3. 데이터베이스에서 현재 모임과 참가 관계를 권한 있는 경로로 재조회하고, 상태·버전 판정과 발송 결정 기록을 함께 보호합니다.\n4. 발송 결정 전에 참가나 모임의 취소가 확정됐다면 오래된 “확정 알림”을 보내지 않고 `superseded`처럼 명시한 결과로 끝냅니다.\n5. 발송 결정 이후 취소와 외부 전송이 경쟁하면, 결정 시점의 상태를 기준으로 발송할지 가능한 취소·보상 경로를 적용할지 미리 정한 계약으로 판단합니다. 기존 외부 결과·중복 방지·결과 불명 처리도 확인합니다. 재조회 한 번으로 전송 시점의 상태나 취소 후 발송 금지까지 보장했다고 하지 않습니다.\n"
      ],
      [
        "",
        "재조회 전에 취소가 확정된 경우, 재조회 뒤 외부 전송 전에 취소가 확정된 경우, 버전 비교 뒤 다른 작업의 최신 결과가 먼저 저장된 경우를 따로 시험합니다. 첫 경우에는 발송을 막고, 두 번째는 정한 발송 시점·취소 계약과 남는 한계를 확인하며, 세 번째는 조건부 갱신 실패 등으로 최신 결과를 보존해야 합니다. 외부 호출 동안 데이터베이스 잠금을 유지하는 방식을 모든 서비스의 해법으로 삼지 않습니다.\n\n"
      ],
      [
        "이 fixture에서는 `current_published_dataset_version`이 화면에 제공하기로 선택한 데이터셋 버전이고 표·차트·요약은 그 같은 버전에서 파생됩니다. 갱신 후보가 `blocked`이면 마지막 정상 버전을 유지할 수 있지만 `freshness_status=stale`과 지연 사유를 함께 표시해야 합니다. 마지막 정상 사본을 보여 준다는 사실은 최신 실제 시장 값이라는 뜻이 아닙니다.\n",
        "이 fixture에서는 `current_published_dataset_version`이 화면에 제공하기로 선택한 데이터셋 버전이고 표·차트·요약은 그 같은 버전에서 파생됩니다. 갱신 후보가 `blocked`이면 공개 버전을 마지막 정상 버전으로 유지하고 후보 상태와 지연 사유를 별도로 표시합니다. `freshness_status`는 후보 품질이 아니라 기준 시점과 기대 갱신 시각인 `expected_refresh_at`으로 판단합니다. 같은 차단 후보라도 기대 시각 전에는 `current`, 기대 시각 이상인데 승인된 갱신을 제공하지 못했다면 `stale`, 필요한 시각 정보가 없으면 `unknown`입니다. 각 신선도 판단의 이유도 표시하며 마지막 정상 사본이 최신 실제 시장 값이라는 뜻으로 확대하지 않습니다.\n"
      ],
      [
        "4. 늦은 `registration.confirmed` 이벤트가 취소 뒤 도착해도 잘못된 알림이나 상태 덮어쓰기를 하지 않는 오라클을 만듭니다.\n",
        "4. 늦은 `registration.confirmed` 이벤트의 재조회 전 취소, 재조회 후 전송 전 취소, 버전 비교 후 최신 결과 저장을 나눠 오라클을 만듭니다. 발송 결정 시점의 계약과 외부 전송 취소의 한계를 밝히고 최신 상태를 덮지 않는 조건을 적습니다.\n"
      ]
    ]
  }
];
export function r16PreFixBytes(path,bytes){
 bytes=r16PreCloseoutBytes(path,bytes);
 const e=r16FixTransitions.find(x=>x.path===path);if(!e||sha(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R16 reversal not unique');text=text.replace(after,before);}
 if(sha(text)!==e.before)throw Error('R16 historical bytes mismatch');return Buffer.from(text);
}
export function validateR16Current(read){const errors=[];for(const e of r16FixTransitions){try{if(sha(r16PreCloseoutBytes(e.path,read(e.path)))!==e.after)errors.push('R16 current patch mismatch: '+e.path)}catch{errors.push('R16 current patch missing: '+e.path)}}return errors;}
