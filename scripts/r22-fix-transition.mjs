import {r22PreCloseoutBytes} from './r22-closeout.mjs';
import {createHash} from 'node:crypto';
const sha=b=>createHash('sha256').update(b).digest('hex');
export const r22FixTransitions=[
  {
    "path": "CONTENT_MAP.md",
    "before": "876688646cf188d45fcf74b7b21fd20ce12a8b23da2acb4e268f3295322da3a1",
    "after": "ae7387a2fd44e47948af2fe566faab8302f1dfeb86cce0d17ee7862c32405e23",
    "replacements": [
      [
        "| [빌드·배포·도메인·DNS](src/content/docs/10-deployment-operations/build-deploy-domain-dns.md) | `review` | 18,070 | `/10-deployment-operations/build-deploy-domain-dns/` |\n| [환경 변수와 설정](src/content/docs/10-deployment-operations/environment-variables-config.md) | `draft` | 9,885 | `/10-deployment-operations/environment-variables-config/` |\n| [10. 배포와 운영](src/content/docs/10-deployment-operations/index.md) | `draft` | 897 | `/10-deployment-operations/` |\n",
        "| [빌드·배포·도메인·DNS](src/content/docs/10-deployment-operations/build-deploy-domain-dns.md) | `review` | 18,070 | `/10-deployment-operations/build-deploy-domain-dns/` |\n| [환경 변수와 설정](src/content/docs/10-deployment-operations/environment-variables-config.md) | `draft` | 11,881 | `/10-deployment-operations/environment-variables-config/` |\n| [10. 배포와 운영](src/content/docs/10-deployment-operations/index.md) | `draft` | 897 | `/10-deployment-operations/` |\n"
      ]
    ]
  },
  {
    "path": "research/source-map.md",
    "before": "cda305d49f5e510b812623b4e7cdadde3ff518e720ddd5779118e76d4d4ce534",
    "after": "2b7780f1eecb5e6d133bdc740fe93642af7e2edd4e49e441a30deba48d44f780",
    "replacements": [
      [
        "\n2026-11-16 R21 후속 판정: 공식16페이지의 명시 범위와 정확한 수정에 대해 같은 저장 reviewer Fix1 PASS C0/I0/M0·두18/18을 연결합니다. 원고10건과 현행PM01은 해소됐으며 review 전이는 R21 controller closeout으로 연결합니다. 과거 출처·실패·미확인 범위는 유지하고 M5전체/ready/공개 승인을 뜻하지 않습니다.\n",
        "\n2026-11-16 R22 현재 적용 보충: PB-047 설정·비밀 원고의 [공식4페이지 직접 근거](public-beta-review-source-excerpts/r22-deploy-config-2026-11-16.md)를 명시 절 범위에서 확인했습니다. Node.js v26.12.0의 자체 .env 형식·문자열 처리만 현재 설명에 쓰고 추출 누락 CLI옵션 주장은 좁혔습니다. Astro 두 API/번들 경계, Vercel 새deployment, OWASP 최소권한·수명주기·컨테이너·사고대응을 구분합니다. 8월 기록·추출 누락·실패 이력은 유지합니다. 최초 R22 NEEDS CHANGES C0/I7/M2·13/18·치명1에 대한 좁은 수정 후보이며 같은 저장 reviewer 후속 확인 전입니다. 실제 .env/인증/비밀/계정/배포·M5/ready/공개 성공을 주장하지 않습니다.\n\n2026-11-16 R21 후속 판정: 공식16페이지의 명시 범위와 정확한 수정에 대해 같은 저장 reviewer Fix1 PASS C0/I0/M0·두18/18을 연결합니다. 원고10건과 현행PM01은 해소됐으며 review 전이는 R21 controller closeout으로 연결합니다. 과거 출처·실패·미확인 범위는 유지하고 M5전체/ready/공개 승인을 뜻하지 않습니다.\n"
      ]
    ]
  },
  {
    "path": "src/content/docs/10-deployment-operations/environment-variables-config.md",
    "before": "5b66ae59710b87f39c1ebdee38a6f86046117ca53194911b85c1fbdc020c6971",
    "after": "9b03c982a1d22707565c0508c045c25c4abac12c7d8f7a4bd77ebaea37ec375f",
    "replacements": [
      [
        "\n## 설정 schema를 실행 가능한 계약으로 만드세요\n\n변수 이름만 문서에 나열하면 빈 문자열·잘못된 URL·오타 난 enum·숫자 범위를 놓칩니다. 가능한 경우 시작 또는 빌드 초기에 다음을 검증합니다.\n\n",
        "\n## 설정 스키마를 실행 가능한 계약으로 만드세요\n\n설정 스키마(schema)는 각 값의 필수 여부·형식·허용 범위를 정한 규칙입니다. 변수 이름만 나열하면 빈 문자열·잘못된 URL·허용 목록(enum)에 없는 값·숫자 범위를 놓칩니다. 가능한 경우 시작 또는 빌드 초기에 다음을 검증합니다.\n\n"
      ],
      [
        "\n필수값이 없거나 형식이 잘못되면 어떤 이름과 조건이 문제인지 밝히되 실제 값을 출력하지 않고 명확하게 실패합니다. production 데이터 대상을 local 기본값으로 조용히 대체하거나, 인증 키가 없을 때 보안 기능을 끄는 기본값은 안전하지 않습니다.\n\n",
        "\n필수값이 없거나 형식이 잘못되면 어떤 이름과 조건이 문제인지 밝히되 실제 값을 출력하지 않고 초기에 명확하게 실패하도록 합니다(fail-fast). production 데이터 대상을 local 기본값으로 조용히 대체하거나, 인증 키가 없을 때 보안 기능을 끄는 기본값은 안전하지 않습니다.\n\n"
      ],
      [
        "\nNode.js는 현재 자체 `.env` 형식과 `--env-file` 같은 기능을 문서화하지만 `.env`에 공식적인 보편 사양이 없다고 명시합니다. Astro는 Vite 기반 build-time 치환, client의 `PUBLIC_` prefix와 `astro:env` schema를 제공하며 SSR runtime 접근은 adapter마다 달라질 수 있습니다. Vercel은 Development·Preview·Production 대상과 build·function 실행에서의 환경 변수를 설명하고, 값 변경은 기존 deployment가 아니라 새 deployment에 적용된다고 문서화합니다. 이 동작을 다른 런타임·프레임워크·호스팅에 그대로 옮기지 않습니다.\n\n",
        "\nNode.js의 환경 변수 문서는 `.env`에 공식적인 보편 사양이 없다고 밝히고 자체 이름·값 형식을 정의합니다. 이 형식으로 읽은 값은 숫자나 불리언처럼 보여도 문자열입니다. 실제 사용 버전의 형식과 로딩 규칙을 확인해야 합니다.\n\nAstro에서도 API별로 경계가 다릅니다. `import.meta.env`는 Vite의 빌드 시점 치환과 `PUBLIC_` 접두사의 클라이언트 노출 규칙을 따릅니다. 반면 `astro:env`는 스키마의 `context`와 `access`로 구분합니다. `context: \"client\", access: \"public\"`인 `API_URL`은 `PUBLIC_` 없이도 공개될 수 있습니다. `context: \"server\", access: \"public\"`인 값은 서버 번들에 포함되지만, `context: \"server\", access: \"secret\"`인 값은 최종 번들에 포함되지 않고 서버에서 접근합니다. 후자도 애플리케이션이 응답이나 로그로 출력하면 노출되므로 코드 경계 검사는 필요합니다. SSR 실행 시점의 접근은 adapter에 따라 확인하며, `astro.config.mjs`나 별도 스크립트에서는 `astro:env`를 사용할 수 없어 `process.env` 등 해당 문맥의 접근 방식을 확인합니다.\n\nVercel은 Development·Preview·Production 등 적용 환경과 build·function 실행에서의 환경 변수를 설명하고, 값 변경은 기존 deployment가 아니라 새 deployment에 적용된다고 문서화합니다. 한 API나 제품의 동작을 다른 런타임·프레임워크·호스팅에 그대로 옮기지 않습니다.\n\n"
      ],
      [
        "- schema 통과·실패와 누락된 변수 이름\n- 비밀값이 아닌 fingerprint 또는 secret version ID\n- build/deployment ID와 재시작·재배포 여부\n",
        "- schema 통과·실패와 누락된 변수 이름\n- 비밀 관리 시스템이 제공하고 출력 정책이 허용한 비민감 버전 식별자\n- build/deployment ID와 재시작·재배포 여부\n"
      ],
      [
        "\n위 예시는 분류 연습용이며 실제 연결에 사용할 수 없습니다. 실제 프로젝트 문서에는 값 대신 `PUBLIC_API_BASE_URL=<public-url>`처럼 placeholder, 소유자와 설정 위치를 기록하세요. `SERVER_DATABASE_URL`이나 `SERVER_SIGNING_KEY`가 client bundle·HTML·network response·로그에 나타나면 이름이 서버 전용이어도 노출 사고입니다.\n\n",
        "\n위 예시는 분류 연습용이며 실제 연결에 사용할 수 없습니다. 실제 프로젝트 문서에는 값 대신 `PUBLIC_API_BASE_URL=<public-url>`처럼 placeholder, 소유자와 설정 위치를 기록하세요. 해당 변수의 실제 비밀값이나 악용 가능한 파생값이 client bundle·HTML·network response·로그에 나타나면 이름이 서버 전용이어도 노출 사고입니다. 변수 이름만 발견한 것은 값의 전달 경로를 조사할 단서이며 비밀값 노출의 확정 증거는 아닙니다. 내부 이름 자체의 민감성도 별도로 분류합니다.\n\n가짜 자료로 판정 기준을 확인하세요. 이름만 있는 경우는 조사 단서이고, 완전히 마스킹된 값은 그 출력에서 원문이 보이지 않는다는 증거일 뿐 다른 경로의 안전을 보장하지 않습니다. 실제 값을 흉내 낸 가짜 값이 출력되면 해당 출력 경로의 결함이며, 같은 가짜 값이 되돌릴 수 있게 인코딩되어 있어도 숨겨진 비밀로 보지 않습니다. 이 연습에는 실제 비밀을 사용하지 않습니다.\n\n"
      ],
      [
        "\n비밀 관리는 “어디에 저장했는가”로 끝나지 않습니다.\n\n",
        "\n비밀 관리는 “어디에 저장했는가”로 끝나지 않습니다. 값을 사용하는 프로세스·서비스를 소비 주체(consumer)라고 하며, 자격의 효력을 없애는 작업을 폐기(revoke)라고 합니다. 소비 주체의 전환과 이전 자격의 폐기를 함께 확인해야 합니다.\n\n"
      ],
      [
        "\n```text\n설정 관련 source, schema, build와 deployment 선언을 읽기 전용으로 점검하라.\n실제 값을 출력하거나 파일·환경·외부 서비스를 변경하지 마라.\n",
        "\n```text wrap\n허용된 로컬 파일 목록과 이미 제공된 비식별 검증 증거 안에서만 설정 관련 소스, 스키마, 기존 빌드 결과와 배포 선언을 읽기 전용으로 점검하라.\n별도 승인 없는 실제 .env, 인증 저장소, 비밀값, 개인정보, 운영 로그 접근과 원격 조회를 하지 마라.\n기존 증거를 읽는 것과 새 명령 실행은 다르다. 빌드, 테스트, 설정 조회 명령은 별도 승인된 범위가 아니면 실행하지 마라.\n접근 범위 밖이거나 증거가 없는 항목은 추정하지 말고 미검증으로 보고하라.\n실제 값을 출력하거나 파일·환경·외부 서비스를 변경하지 마라.\n"
      ],
      [
        "각 변수 이름에 대해 다음만 표로 작성하라.\n- 의미와 owner\n- config 또는 secret\n- build-time 또는 runtime\n- client 공개 또는 server 전용\n- local, preview, production 적용 여부\n- required/optional, type, allowed range, safe default 여부\n- loading source와 precedence의 공식 근거\n- 누락·오류·회전·폐기·노출 시 대응\n",
        "각 변수 이름에 대해 다음만 표로 작성하라.\n- 의미와 소유자(owner)\n- 설정으로 사용되는 목적과 역할\n- 별도 축으로 공개 가능 여부, 서버 전용 여부, 자격 비밀 여부\n- 빌드 시점 또는 실행 시점; 여러 단계에서 쓰면 소비 단계별로 구분\n- 클라이언트 공개 또는 서버 전용 경계와 해당 API의 근거\n- local, preview, production 적용 여부\n- 필수/선택 여부, 타입, 허용 범위, 안전한 기본값과 생략 허용 여부\n- 값을 읽는 출처와 적용 우선순위(precedence)의 공식 근거\n- 누락·오류·회전·폐기·노출 시 대응\n"
      ],
      [
        "비밀·token·connection string·개인 경로·개인정보를 출력하지 마라.\n```\n",
        "비밀·token·connection string·개인 경로·개인정보를 출력하지 마라.\n비밀값의 길이, 해시, 일부 문자열이나 fingerprint를 임의로 계산하거나 출력하지 마라. 승인된 이름, 존재 여부, 비밀값으로 계산하지 않은 비민감 버전 식별자만 허용된 정책 안에서 보고하라.\n```\n"
      ],
      [
        "\n로그·CI·채팅·스크린샷에 비밀이 복제됩니다. 이름·존재 여부·길이·version·안전한 fingerprint만 사용하세요.\n\n",
        "\n로그·CI·채팅·스크린샷에 비밀이 복제됩니다. 기본 진단 출력은 승인된 이름·존재 여부와 비밀 관리 시스템의 비민감 버전 식별자로 제한하세요. 비밀의 길이·해시·일부 문자열도 추측이나 후보 대조에 쓰일 수 있으므로 임의로 계산하거나 출력하지 않습니다. 파생 식별자(fingerprint)는 생성 방식과 공개 범위를 검토한 진단 정책이 따로 있을 때만 허용합니다. 예를 들어 비밀에서 계산하지 않은 교육용 버전 ID `fake-secret-version-02`로 소비 주체의 전환 여부를 기록할 수 있습니다.\n\n"
      ],
      [
        "- [ ] 코드·공개 설정·서버 설정·비밀·사용자 데이터를 분류했습니다.\n- [ ] 각 값의 build-time·runtime과 client·server 경계를 기록했습니다.\n",
        "- [ ] 코드·공개 설정·서버 설정·비밀·사용자 데이터를 분류했습니다.\n- [ ] 설정의 역할과 민감도를 별도로 기록하고, 변수 이름 발견과 실제 비밀값 노출을 구분했습니다.\n- [ ] 각 값의 build-time·runtime과 client·server 경계를 기록했습니다.\n"
      ],
      [
        "- [ ] 설정 존재·build 성공·deployment·사용자 흐름을 별도 증거로 보고합니다.\n\n",
        "- [ ] 설정 존재·build 성공·deployment·사용자 흐름을 별도 증거로 보고합니다.\n- [ ] 허용된 읽기 범위와 명령·원격 조회 승인을 구분하며, 비밀의 길이·해시를 임의로 출력하지 않습니다.\n\n"
      ],
      [
        "\n자신의 프로젝트 변수 이름만 가져와 고정 코드·공개 build 설정·서버 runtime 설정·비밀·사용자 데이터로 분류하세요. 실제 값은 적지 말고 각 행에 환경, required 여부, schema, loading source, consumer, 실패 조건, 회전 owner와 검증 증거를 채우세요. 그다음 “기본값이 없어도 되는 값”과 “없으면 즉시 실패해야 하는 값”을 근거와 함께 나누세요.\n\n",
        "\n공개해도 되는 자신의 프로젝트 변수 이름만 가져와 코드·설정·사용자 데이터의 역할과 민감도를 별도 열로 분류하세요. 실제 값은 적지 말고 각 행에 환경, 필수 여부, 스키마, 값을 읽는 출처, 소비 주체, 실패 조건, 회전 소유자와 검증 증거를 채우세요. 그다음 “값이 생략되면 안전한 기본값을 사용할 수 있는 설정”, “명시적 값이 없으면 실패해야 하는 설정”, “선택 사항이라 값 자체가 없어도 되는 설정”을 근거와 함께 구분하세요. 로그 수준, DB 대상, 선택 기능을 이 기준에 대조하되 한 프로젝트의 결정을 보편 규칙으로 가정하지 마세요.\n\n"
      ],
      [
        "2026-08-13에 Node.js v26 현재 문서의 Stable dotenv 기능과 비보편 `.env` 형식, Astro 현재 문서의 build-time 치환·`PUBLIC_`·schema·adapter별 runtime 차이, Vercel 현재 제품 문서의 environment 대상·build/function·새 deployment 적용, OWASP의 secret rotation·revocation·expiration 지침을 확인했습니다. 각 문서는 해당 런타임·프레임워크·호스팅·보안 지침 범위에만 적용하며 한 제품의 prefix·precedence·저장 보호를 모든 환경의 보편 보장으로 확대하지 않습니다.\n",
        "2026-08-13에 Node.js v26 현재 문서의 Stable dotenv 기능과 비보편 `.env` 형식, Astro 현재 문서의 build-time 치환·`PUBLIC_`·schema·adapter별 runtime 차이, Vercel 현재 제품 문서의 environment 대상·build/function·새 deployment 적용, OWASP의 secret rotation·revocation·expiration 지침을 확인했습니다. 각 문서는 해당 런타임·프레임워크·호스팅·보안 지침 범위에만 적용하며 한 제품의 prefix·precedence·저장 보호를 모든 환경의 보편 보장으로 확대하지 않습니다.\n\n2026-11-16에는 위 공식 문서의 관련 절을 다시 확인했습니다. Node.js 반환 문서 제목은 v26.12.0이며 이번 확인은 자체 `.env` 형식·문자열 처리에 한정합니다. 추출에서 빠진 CLI 옵션의 현재 동작은 이번 근거로 단정하지 않습니다. Astro의 두 API와 서버 공개/비밀 변수의 번들 경계, Vercel의 새 deployment 적용, OWASP의 최소 권한·수명주기·컨테이너 주입·사고 대응 범위를 확인했으며 실제 계정·비밀값·배포 성공은 확인하지 않았습니다. 앞의 8월 기록은 당시 확인 이력으로 유지합니다.\n"
      ]
    ]
  }
];
export function r22PreFixBytes(path,bytes){bytes=r22PreCloseoutBytes(path,bytes);const e=r22FixTransitions.find(x=>x.path===path);if(!e||sha(bytes)!==e.after)return bytes;let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R22 reversal not unique');text=text.replace(after,before)}if(sha(text)!==e.before)throw Error('R22 historical bytes mismatch');return Buffer.from(text);}
export function validateR22Current(read){const errors=[];for(const e of r22FixTransitions){try{if(sha(r22PreCloseoutBytes(e.path,read(e.path)))!==e.after)errors.push('R22 current patch mismatch: '+e.path)}catch{errors.push('R22 current patch missing: '+e.path)}}return errors;}
