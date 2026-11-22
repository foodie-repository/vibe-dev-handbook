---
title: "환경 변수와 설정"
description: "코드·설정·비밀과 build-time·runtime 경계를 분리하고 환경별 값을 검증·회전·복구하는 법을 익힙니다."
contentStatus: ready
reviewEvidence:
  - "conformance: docs/project/public-beta-content-audit.md"
  - "sources: research/source-map.md"
  - "automated: docs/project/reviews/public-beta-1/ready-promotion-qa.md#자동-검사"
  - "browser: docs/project/reviews/public-beta-1/ready-promotion-qa.md#브라우저-검사"
  - "owner: docs/project/reviews/public-beta-1/owner-approval.md"
  - "request: docs/project/reviews/public-beta-1/r22-deploy-config-request.md"
  - "independent: docs/project/reviews/public-beta-1/r22-deploy-config-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r22-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 코드·설정·환경 변수·비밀의 역할과 보안 경계를 구분한다
  - build-time·runtime과 local·preview·production의 설정 흐름을 설명한다
  - 필수값·형식·기본값·클라이언트 노출·회전과 복구를 직접 증거로 검증한다
sidebar:
  order: 2
---
## 왜 필요한가

로컬에서는 되지만 preview와 production에서 실패하는 원인의 상당수는 코드가 아니라 설정의 누락·형식·시점·권한 차이에 있습니다. 반대로 오류를 없애려고 모든 환경에 같은 값이나 조용한 기본값을 넣으면 테스트가 운영 데이터베이스에 연결되거나, 브라우저 bundle에 서버 비밀이 포함되거나, 오래된 키가 계속 유효한 더 큰 사고가 생길 수 있습니다.

`.env` 파일이 있거나 호스팅 화면에 값을 입력했다는 사실은 설정이 올바른 환경·시점·프로세스에 전달됐다는 증거가 아닙니다. 환경 변수라는 저장 위치도 암호화·접근 통제·회전·폐기를 자동으로 보장하지 않습니다. 필요한 것은 값 자체를 노출하지 않으면서 이름·소유자·적용 환경·주입 시점·검증 결과와 재발급 절차를 추적하는 계약입니다.

## 한 문장 정의

**설정(configuration)은 배포·환경에 따라 달라지는 동작 값을 코드와 분리한 계약이고, 환경 변수는 운영체제나 실행 플랫폼이 그 값을 프로세스에 전달하는 한 방법이며, 비밀(secret)은 노출되면 권한 악용이 가능한 자격 증명이라 별도 접근·회전·폐기 통제가 필요한 값입니다.**

환경 변수는 설정을 전달하는 수단이지 모든 설정의 유일한 형식도, 비밀 관리 제품도 아닙니다. 공개 API 기준 주소는 설정이지만 비밀이 아닐 수 있고, 데이터베이스 비밀번호는 설정에 사용되면서 동시에 비밀입니다.

## 공연 무대의 큐시트와 열쇠에 비유하기

코드는 여러 공연에서 반복하는 대본, 설정은 공연장마다 달라지는 시작 시각·입구·조명 큐, 환경 변수는 무대 감독이 실행 직전에 전달하는 값, 비밀은 제한된 사람만 가져야 하는 보관실 열쇠에 비유할 수 있습니다. 대본을 바꾸지 않고 장소별 값을 바꾸며, 어떤 열쇠를 어느 공연에 썼는지 관리해야 한다는 점이 비슷합니다.

### 비유가 깨지는 지점

디지털 값은 프로세스·child process·빌드 로그·오류·클라이언트 bundle·캐시와 아티팩트에 복제될 수 있습니다. 환경 변수 이름에 `SECRET`을 붙여도 접근이 자동 제한되지 않고, 저장 시 암호화돼도 실행 중 소비자에게 전달될 때는 평문으로 사용될 수 있습니다. build-time에 포함된 값은 나중에 서버 설정만 바꿔도 기존 정적 아티팩트에서 사라지지 않습니다.

## 코드·설정·비밀을 먼저 분류하세요

| 범주 | 예시 | 저장·전달 원칙 | 직접 검증 |
|---|---|---|---|
| 고정 코드 값 | 참가 상태 전이 규칙, 허용된 enum | source와 테스트로 관리 | diff·단위 테스트 |
| 공개 설정 | 사이트 기준 URL, 공개 기능 표식 | 환경별 config로 관리하되 노출 가능하다고 봄 | schema·빌드 산출물·화면 |
| 서버 전용 설정 | 내부 timeout, worker 수 | 서버 실행 환경에 전달 | 시작 검증·안전한 상태 출력 |
| 비밀 | DB 자격 증명, 서명 키, 외부 API token | 비밀 관리 경계·최소 권한·회전·폐기 | 값이 아닌 존재·버전·권한·사용 결과 |
| 사용자·운영 데이터 | 참가 정보, 개인정보, 실제 운영 값 | 애플리케이션 데이터 저장소와 권한 규칙 | 권위 데이터 조회·감사 기록 |

사용자 데이터나 큰 JSON 문서를 환경 변수에 넣어 설정처럼 관리하지 않습니다. 값의 크기·구조·변경 주기와 소유권에 맞는 저장소를 선택하세요. 설정 이름·schema·소유자와 비밀 참조는 Git에 둘 수 있지만 실제 비밀값을 원고·예시·issue·로그·스크린샷·commit에 복사하지 않습니다.

## build-time과 runtime은 값이 사용되는 시점입니다

### build-time 설정

정적 사이트 생성기와 프런트엔드 bundler는 빌드할 때 설정 값을 HTML·JavaScript·CSS와 링크에 넣을 수 있습니다. build-time 값이 바뀌면 기존 아티팩트는 자동으로 바뀌지 않으므로 새 빌드·검증·배포가 필요합니다. 브라우저에 전달되는 결과는 사용자가 읽을 수 있어 비밀이 될 수 없습니다.

### runtime 설정

서버 프로세스는 시작하거나 요청을 처리할 때 실행 환경에서 값을 읽을 수 있습니다. 서버 전용 변수라도 로그·오류 응답·진단 endpoint·child process나 잘못된 권한으로 노출될 수 있으므로 최소 접근과 출력 제한이 필요합니다. 서버가 새 값을 언제 다시 읽는지는 런타임·플랫폼·프로세스 수명 주기에 따라 다릅니다.

### 둘을 이름만으로 추측하지 마세요

같은 플랫폼에서도 정적 build, server function과 edge runtime의 주입 시점이 다를 수 있습니다. 프레임워크의 `PUBLIC_` 같은 prefix는 해당 도구의 bundle 노출 규칙이지 업계 전체의 보안 표준이 아닙니다. 실제 source import 위치, build 결과, runtime 문서와 배포 버전을 함께 확인합니다.

## local·preview·production은 독립된 설정 대상입니다

| 환경 | 목적 | 사용하면 안 되는 것 | 필요한 증거 |
|---|---|---|---|
| local | 빠른 개발·격리 검증 | 운영 비밀·실제 개인정보를 편의상 복사 | 명백한 fake 값·local schema 결과 |
| preview | branch·PR 결과 검토 | production 데이터 쓰기 권한과 장기 자격 증명 | preview 대상·권한·deployment ID |
| production | 실제 사용자 서비스 | test endpoint·debug 출력·넓은 관리자 권한 | 승인된 값 버전·배포·smoke·관측 결과 |

모든 프로젝트가 세 환경을 가져야 하는 것은 아닙니다. 환경 수보다 값·권한·데이터·도메인·외부 서비스 차이를 명시하는 일이 중요합니다. preview가 존재한다는 사실만으로 production과 같다고 보지 말고, 의도적으로 다른 값과 실수로 빠진 값을 구분합니다.

## 설정 스키마를 실행 가능한 계약으로 만드세요

설정 스키마(schema)는 각 값의 필수 여부·형식·허용 범위를 정한 규칙입니다. 변수 이름만 나열하면 빈 문자열·잘못된 URL·허용 목록(enum)에 없는 값·숫자 범위를 놓칩니다. 가능한 경우 시작 또는 빌드 초기에 다음을 검증합니다.

- 이름과 의미
- 타입과 형식
- 필수·선택 여부
- 허용 값과 범위
- build-time·runtime
- client 공개·server 전용
- 적용 환경과 소유자
- 안전한 기본값 여부
- 민감도와 회전·재발급 절차

필수값이 없거나 형식이 잘못되면 어떤 이름과 조건이 문제인지 밝히되 실제 값을 출력하지 않고 초기에 명확하게 실패하도록 합니다(fail-fast). production 데이터 대상을 local 기본값으로 조용히 대체하거나, 인증 키가 없을 때 보안 기능을 끄는 기본값은 안전하지 않습니다.

기본값은 실패 영향이 작고 누구에게나 같은 의미일 때만 사용합니다. 예를 들어 개발 로그 수준의 보수적 기본값은 가능할 수 있지만 database target, tenant, 서명 키와 권한 모드는 명시적으로 요구하는 편이 안전합니다.

## 로딩 우선순위는 도구별 계약입니다

shell, 운영체제, test runner, `.env` loader, framework mode, hosting platform과 명령줄 override가 값을 결합할 수 있습니다. 어느 값이 이기는지는 도구와 버전에 따라 다르므로 “`.env.local`이 항상 최우선” 같은 보편 규칙을 만들지 않습니다.

Node.js의 환경 변수 문서는 `.env`에 공식적인 보편 사양이 없다고 밝히고 자체 이름·값 형식을 정의합니다. 이 형식으로 읽은 값은 숫자나 불리언처럼 보여도 문자열입니다. 실제 사용 버전의 형식과 로딩 규칙을 확인해야 합니다.

Astro에서도 API별로 경계가 다릅니다. `import.meta.env`는 Vite의 빌드 시점 치환과 `PUBLIC_` 접두사의 클라이언트 노출 규칙을 따릅니다. 반면 `astro:env`는 스키마의 `context`와 `access`로 구분합니다. `context: "client", access: "public"`인 `API_URL`은 `PUBLIC_` 없이도 공개될 수 있습니다. `context: "server", access: "public"`인 값은 서버 번들에 포함되지만, `context: "server", access: "secret"`인 값은 최종 번들에 포함되지 않고 서버에서 접근합니다. 후자도 애플리케이션이 응답이나 로그로 출력하면 노출되므로 코드 경계 검사는 필요합니다. SSR 실행 시점의 접근은 adapter에 따라 확인하며, `astro.config.mjs`나 별도 스크립트에서는 `astro:env`를 사용할 수 없어 `process.env` 등 해당 문맥의 접근 방식을 확인합니다.

Vercel은 Development·Preview·Production 등 적용 환경과 build·function 실행에서의 환경 변수를 설명하고, 값 변경은 기존 deployment가 아니라 새 deployment에 적용된다고 문서화합니다. 한 API나 제품의 동작을 다른 런타임·프레임워크·호스팅에 그대로 옮기지 않습니다.

우선순위를 검증할 때는 실제 값을 출력하지 않고 다음만 기록합니다.

- 실행 명령·mode·environment 이름
- 어떤 source 종류가 선택됐는지
- schema 통과·실패와 누락된 변수 이름
- 비밀 관리 시스템이 제공하고 출력 정책이 허용한 비민감 버전 식별자
- build/deployment ID와 재시작·재배포 여부

## 클라이언트 노출은 빌드 결과에서 확인하세요

브라우저가 받는 HTML·JavaScript·source map·network request와 공개 설정 endpoint의 값은 사용자가 볼 수 있습니다. 서버 전용 이름을 썼다는 의도만으로 안전하지 않으므로 build artifact와 실제 응답을 검사합니다.

```dotenv
# 교육용 가짜 예시입니다. 실제 자격 증명이 아닙니다.
PUBLIC_API_BASE_URL=https://api.example.invalid
SERVER_DATABASE_URL=postgresql://fake-user:fake-password@db.example.invalid/fake-db
SERVER_SIGNING_KEY=FAKE_NOT_A_REAL_SECRET
```

위 예시는 분류 연습용이며 실제 연결에 사용할 수 없습니다. 실제 프로젝트 문서에는 값 대신 `PUBLIC_API_BASE_URL=<public-url>`처럼 placeholder, 소유자와 설정 위치를 기록하세요. 해당 변수의 실제 비밀값이나 악용 가능한 파생값이 client bundle·HTML·network response·로그에 나타나면 이름이 서버 전용이어도 노출 사고입니다. 변수 이름만 발견한 것은 값의 전달 경로를 조사할 단서이며 비밀값 노출의 확정 증거는 아닙니다. 내부 이름 자체의 민감성도 별도로 분류합니다.

가짜 자료로 판정 기준을 확인하세요. 이름만 있는 경우는 조사 단서이고, 완전히 마스킹된 값은 그 출력에서 원문이 보이지 않는다는 증거일 뿐 다른 경로의 안전을 보장하지 않습니다. 실제 값을 흉내 낸 가짜 값이 출력되면 해당 출력 경로의 결함이며, 같은 가짜 값이 되돌릴 수 있게 인코딩되어 있어도 숨겨진 비밀로 보지 않습니다. 이 연습에는 실제 비밀을 사용하지 않습니다.

검사에는 다음이 포함될 수 있습니다.

- source에서 client import와 server import 경계
- build output의 변수명·실제 비밀 패턴·source map
- 브라우저 network 요청·응답·console
- 오류 페이지와 관측 로그의 마스킹
- 배포 전후 비밀 version과 실제 consumer

문자열 검색 하나가 모든 인코딩·파생값·런타임 응답을 보장하지 않으므로 코드 경계와 실제 실행 증거를 함께 봅니다.

## 비밀의 생성부터 폐기까지 관리하세요

비밀 관리는 “어디에 저장했는가”로 끝나지 않습니다. 값을 사용하는 프로세스·서비스를 소비 주체(consumer)라고 하며, 자격의 효력을 없애는 작업을 폐기(revoke)라고 합니다. 소비 주체의 전환과 이전 자격의 폐기를 함께 확인해야 합니다.

1. **생성**: 필요한 강도와 목적·환경별로 별도 자격 증명을 만듭니다.
2. **저장**: 최소 권한이 적용된 관리 경계에 두고 source·일반 문서·로그에 복사하지 않습니다.
3. **전달**: 필요한 consumer와 시점에만 전달하고 출력·상속 범위를 줄입니다.
4. **사용**: 목적·환경·권한을 제한하고 접근과 실패를 안전하게 관찰합니다.
5. **회전**: 새 값을 발급하고 consumer를 전환한 뒤 검증합니다.
6. **폐기**: 이전 값과 불필요한 권한을 revoke하고 재사용을 막습니다.
7. **사고 대응**: 노출 범위·로그·이력을 보존하고 즉시 revoke·재발급·consumer 재배포·부정 사용을 조사합니다.

회전은 새 값을 만드는 일만 뜻하지 않습니다. 이전 값이 더 이상 인증되지 않고 모든 consumer가 새 값으로 정상 동작하는지 확인해야 합니다. 빌드에 포함된 비밀이 노출됐다면 환경 변수만 바꾸는 것으로 끝나지 않고 기존 아티팩트·캐시·배포·Git 이력·로그의 노출 범위를 조사합니다.

## 개발 사례: 모임 참가 웹앱

### 공개 설정과 서버 비밀을 나눈다면

| 이름 예시 | 분류·시점 | 환경별 원칙 | 실패·검증 계약 |
|---|---|---|---|
| `PUBLIC_SITE_URL` | 공개·build-time | local/preview/production 주소를 명시 | URL schema·생성 링크·실제 대상 확인 |
| `PUBLIC_API_BASE_URL` | 공개·build-time 또는 client runtime | 실제 승인한 API 환경만 연결 | browser request host·artifact 검사 |
| `SERVER_DATABASE_URL` | 비밀·server runtime | 환경별 별도 DB와 최소 권한 | 값 비출력·연결 대상 ID·격리된 query |
| `SERVER_SESSION_SIGNING_KEY` | 비밀·server runtime | 환경별 별도 version·회전 절차 | 새 session·이전 key 폐기·인가 회귀 |
| `REGISTRATION_LIMIT_MODE` | server 설정·runtime | 허용 enum과 production 명시 | unknown 값 fail-fast·정원 불변식 |
| `LOG_LEVEL` | server 설정·runtime | production의 민감 출력 금지 | schema·실제 log field·비밀 마스킹 |

W-05 배포 전에는 값 자체가 아니라 schema, 환경별 key 목록, public/server 분류, secret owner·version, fake fixture와 build artifact 검사를 검토합니다. 실제 preview·production 설정값은 대상 환경의 설정 변경을 승인받은 경우에만 만들거나 바꿉니다. 조회만 허용됐다면 배포 식별자와 공개 조회 결과처럼 읽을 수 있는 증거만 확인합니다.

설정 변경 승인은 참가 데이터를 써도 된다는 뜻이 아닙니다. 해당 환경에서 참가·취소 시험까지 별도로 승인받았다면 전용 가상 계정과 모임, 허용한 작업, 시험 뒤 정리 방법을 먼저 정합니다. 그 범위에서 로그인·참가·중복 거절·자기 취소 뒤의 정원을 확인합니다. 실제 사용자나 다른 모임에 영향이 나타나면 즉시 중단하고, 승인한 절차로 시험 데이터를 정리합니다. 대상을 격리할 수 없거나 승인·중지·정리 조건이 없으면 쓰기 시험은 하지 않고 미검증으로 남깁니다.

이 핸드북 저장소에는 실제 모임 서버·데이터베이스·운영 비밀이 없습니다. 따라서 위 표는 설정 계약이며 계정·키·production deployment를 만들거나 검증했다는 증거가 아닙니다.

## AI의 설정 보고를 검토하는 읽기 전용 지시

```text wrap
허용된 로컬 파일 목록과 이미 제공된 비식별 검증 증거 안에서만 설정 관련 소스, 스키마, 기존 빌드 결과와 배포 선언을 읽기 전용으로 점검하라.
별도 승인 없는 실제 .env, 인증 저장소, 비밀값, 개인정보, 운영 로그 접근과 원격 조회를 하지 마라.
기존 증거를 읽는 것과 새 명령 실행은 다르다. 빌드, 테스트, 설정 조회 명령은 별도 승인된 범위가 아니면 실행하지 마라.
접근 범위 밖이거나 증거가 없는 항목은 추정하지 말고 미검증으로 보고하라.
실제 값을 출력하거나 파일·환경·외부 서비스를 변경하지 마라.

각 변수 이름에 대해 다음만 표로 작성하라.
- 의미와 소유자(owner)
- 설정으로 사용되는 목적과 역할
- 별도 축으로 공개 가능 여부, 서버 전용 여부, 자격 비밀 여부
- 빌드 시점 또는 실행 시점; 여러 단계에서 쓰면 소비 단계별로 구분
- 클라이언트 공개 또는 서버 전용 경계와 해당 API의 근거
- local, preview, production 적용 여부
- 필수/선택 여부, 타입, 허용 범위, 안전한 기본값과 생략 허용 여부
- 값을 읽는 출처와 적용 우선순위(precedence)의 공식 근거
- 누락·오류·회전·폐기·노출 시 대응
- 실제로 확인한 schema, artifact, deployment 증거와 미검증 범위

환경 변수라는 이유로 암호화·격리·회전을 가정하지 마라.
한 도구의 prefix·precedence·재배포 동작을 다른 도구에 일반화하지 마라.
비밀·token·connection string·개인 경로·개인정보를 출력하지 마라.
비밀값의 길이, 해시, 일부 문자열이나 fingerprint를 임의로 계산하거나 출력하지 마라. 승인된 이름, 존재 여부, 비밀값으로 계산하지 않은 비민감 버전 식별자만 허용된 정책 안에서 보고하라.
```

## 흔한 오해와 실패

### `.env` 파일이 있으면 재현 가능하다고 봅니다

누가 어떤 mode에서 어떤 loader로 읽는지와 schema가 없으면 다른 환경에서 달라질 수 있습니다. 이름·형식·우선순위·실행 증거를 확인하세요.

### 환경 변수면 비밀이 안전하다고 봅니다

프로세스·로그·child process·bundle과 권한 경계로 노출될 수 있습니다. 저장·전달·사용·회전·폐기를 따로 설계하세요.

### `PUBLIC_`을 붙이지 않으면 브라우저에 절대 안 간다고 봅니다

prefix는 프레임워크 규칙 중 하나일 뿐 코드가 값을 응답·HTML·로그로 내보낼 수 있습니다. artifact와 실제 network 응답을 확인하세요.

### 누락된 production 값을 local 기본값으로 대체합니다

잘못된 DB·API·tenant로 조용히 연결될 수 있습니다. 중요한 대상·권한·비밀은 fail-fast로 명시하세요.

### 설정 화면을 바꾸면 기존 배포도 즉시 바뀐다고 봅니다

build-time 값과 플랫폼 deployment model에 따라 새 build·deployment·process restart가 필요합니다. 실제 deployment ID와 실행 값을 다시 검증하세요.

### 회전을 새 key 발급으로 끝냅니다

이전 key가 남고 일부 consumer만 새 값을 쓰면 노출과 장애가 계속됩니다. 전환·검증·revoke·감사를 끝까지 확인하세요.

### 디버깅을 위해 값을 그대로 출력합니다

로그·CI·채팅·스크린샷에 비밀이 복제됩니다. 기본 진단 출력은 승인된 이름·존재 여부와 비밀 관리 시스템의 비민감 버전 식별자로 제한하세요. 비밀의 길이·해시·일부 문자열도 추측이나 후보 대조에 쓰일 수 있으므로 임의로 계산하거나 출력하지 않습니다. 파생 식별자(fingerprint)는 생성 방식과 공개 범위를 검토한 진단 정책이 따로 있을 때만 허용합니다. 예를 들어 비밀에서 계산하지 않은 교육용 버전 ID `fake-secret-version-02`로 소비 주체의 전환 여부를 기록할 수 있습니다.

## 확인 체크리스트

- [ ] 코드·공개 설정·서버 설정·비밀·사용자 데이터를 분류했습니다.
- [ ] 설정의 역할과 민감도를 별도로 기록하고, 변수 이름 발견과 실제 비밀값 노출을 구분했습니다.
- [ ] 각 값의 build-time·runtime과 client·server 경계를 기록했습니다.
- [ ] local·preview·production의 값·권한·데이터·도메인 차이를 설명할 수 있습니다.
- [ ] required/optional·type·format·range·safe default를 schema로 검증합니다.
- [ ] 중요한 누락·오류가 값 노출 없이 명확하게 실패합니다.
- [ ] precedence를 대상 도구·버전의 공식 문서와 실제 실행으로 확인했습니다.
- [ ] client bundle·HTML·network·source map·로그에 서버 비밀이 없는지 확인했습니다.
- [ ] 비밀의 owner·consumer·version·회전·revoke·사고 대응이 있습니다.
- [ ] 예시가 명백한 fake 또는 placeholder이고 실제 연결에 사용할 수 없습니다.
- [ ] 설정 존재·build 성공·deployment·사용자 흐름을 별도 증거로 보고합니다.
- [ ] 허용된 읽기 범위와 명령·원격 조회 승인을 구분하며, 비밀의 길이·해시를 임의로 출력하지 않습니다.

## 짧은 연습

공개해도 되는 자신의 프로젝트 변수 이름만 가져와 코드·설정·사용자 데이터의 역할과 민감도를 별도 열로 분류하세요. 실제 값은 적지 말고 각 행에 환경, 필수 여부, 스키마, 값을 읽는 출처, 소비 주체, 실패 조건, 회전 소유자와 검증 증거를 채우세요. 그다음 “값이 생략되면 안전한 기본값을 사용할 수 있는 설정”, “명시적 값이 없으면 실패해야 하는 설정”, “선택 사항이라 값 자체가 없어도 되는 설정”을 근거와 함께 구분하세요. 로그 수준, DB 대상, 선택 기능을 이 기준에 대조하되 한 프로젝트의 결정을 보편 규칙으로 가정하지 마세요.

## 관련 용어와 출처

- [빌드·배포·도메인·DNS](../build-deploy-domain-dns/)
- [로그·모니터링·백업](../logs-monitoring-backup/)
- [성능과 보안](../../08-quality/performance-security/)
- [개발 용어집](../../reference/development-glossary/)
- [현재 도구 매핑](../../reference/current-tool-mapping/)
- [Node.js 환경 변수 공식 문서](https://nodejs.org/api/environment_variables.html)
- [Astro 환경 변수 공식 가이드](https://docs.astro.build/en/guides/environment-variables/)
- [Vercel 환경 변수 공식 문서](https://vercel.com/docs/environment-variables)
- [OWASP Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)

2026-08-13에 Node.js v26 현재 문서의 Stable dotenv 기능과 비보편 `.env` 형식, Astro 현재 문서의 build-time 치환·`PUBLIC_`·schema·adapter별 runtime 차이, Vercel 현재 제품 문서의 environment 대상·build/function·새 deployment 적용, OWASP의 secret rotation·revocation·expiration 지침을 확인했습니다. 각 문서는 해당 런타임·프레임워크·호스팅·보안 지침 범위에만 적용하며 한 제품의 prefix·precedence·저장 보호를 모든 환경의 보편 보장으로 확대하지 않습니다.

2026-11-16에는 위 공식 문서의 관련 절을 다시 확인했습니다. Node.js 반환 문서 제목은 v26.12.0이며 이번 확인은 자체 `.env` 형식·문자열 처리에 한정합니다. 추출에서 빠진 CLI 옵션의 현재 동작은 이번 근거로 단정하지 않습니다. Astro의 두 API와 서버 공개/비밀 변수의 번들 경계, Vercel의 새 deployment 적용, OWASP의 최소 권한·수명주기·컨테이너 주입·사고 대응 범위를 확인했으며 실제 계정·비밀값·배포 성공은 확인하지 않았습니다. 앞의 8월 기록은 당시 확인 이력으로 유지합니다.
