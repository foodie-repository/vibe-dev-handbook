# 현재 도구 매핑 조사 브리프

R26 식별자 정정: Vercel 로그 근거의 기준 ID는 `VERCEL-LOG-01`입니다. 8월 20일 표의 `VERCEL-LOGS-01`은 같은 URL과 주장의 별칭입니다. 8월 13일 반환과 8월 20일 재확인 실패는 각각 당시 상태이며, 이 정정은 제품 기능을 새로 확인한 기록이 아닙니다.

## 목적과 작업 경계

이 문서는 영속 개념을 특정 제품과 동일시하지 않은 채 현재 제품 예시를 읽기 전용 공식 자료로 검증하기 위해 만든 조사 계약입니다. Task 1에서 고정한 오프라인 질문·판정 계약과 Task 7에서 2026-08-13에 확인한 역사적 fact pack을 보존하고, Task 19 release candidate를 위해 2026-08-20에 다시 확인한 결과를 마지막 절에 추가했습니다. 현재 원고에는 마지막 절의 fresh check를 우선 적용합니다.

이 핸드북의 정본은 다음 네 층을 분리합니다. (1) 제품 이름 없이 설명하는 영속 개념, (2) 모임 참가 웹앱과 주가 데이터 대시보드에 적용하는 사례, (3) 공식 자료를 확인한 시점에만 쓰는 기준 도구 매핑, (4) 화면·설정·명령·요금·한도처럼 교체 가능한 실습·부록입니다. 따라서 이 브리프의 질문은 제품이 책임을 자동으로 수행한다는 뜻이 아니라, 해당 책임을 어느 경계에서 누가 맡는지 확인하기 위한 질문입니다.

Task 1은 네트워크 접근 없이 조사 계약만 만들었고, Task 7과 Task 19는 승인된 공식 문서와 허용된 공식 제품 자료만 읽기 전용으로 확인했습니다. 어떤 작업에서도 로그인, 계정·프로젝트·데이터베이스 생성, 설정 변경, 플러그인 설치, 배포와 외부 쓰기를 수행하지 않았으며 사용자의 계정이나 운영 환경을 증거로 삼지 않습니다.

## 제품 이름 없이 먼저 고정하는 책임 축

| 책임 | 독자가 먼저 이해할 질문 | 제품 예시에서 확인할 증거 |
|---|---|---|
| 관계형 데이터 저장 | 어떤 상태가 권위 있는 원본이며 스키마·제약·트랜잭션은 어디서 집행되는가 | 공식 데이터베이스 종류, 제약·트랜잭션 범위, 마이그레이션·복구 문서 |
| 인증 | 자격 증명과 세션이 어떻게 주체를 확인하는가 | 공식 인증 방식·세션 경계·비밀 취급 문서 |
| 인가 | 확인된 주체가 대상에 행동할 수 있는지 어디서 집행하는가 | 공식 정책 기능과 서버·데이터 경계, 기본 거절·테스트 한계 |
| 서버 실행과 API | 비밀·업무 규칙·입력 검증이 어느 런타임에서 실행되는가 | 공식 런타임·함수·API 배포 문서와 제한 |
| 빌드와 아티팩트 | 어떤 소스가 어떤 산출물로 변하며 환경별 설정은 어디서 주입되는가 | 공식 빌드·환경 변수·아티팩트 설명 |
| 호스팅과 공개 주소 | 누가 파일·서버를 제공하고 도메인·HTTPS를 연결하는가 | 공식 배포·도메인·HTTPS 문서 |
| 운영과 복구 | 로그·배포 이력·롤백·데이터 백업·복원 책임은 누구에게 있는가 | 공식 로그·배포 복구·데이터 백업 문서와 사용자가 맡는 책임 |

표의 책임은 모임 참가 웹앱에서 주체·대상·행동의 인가, 중복·정원·마감의 업무 규칙, 영속 상태와 트랜잭션, 배포 뒤의 복구 책임을 분리해 판단하게 합니다. 어떤 제품 예시도 화면 버튼, 클라이언트 코드, API 명세, 빌드 성공 또는 로그 하나만으로 이 책임 전체가 해결됐다는 증거가 되지 않습니다.

## 공통 조사·판정 계약

### 주장 기록 필드 정의

다음 YAML은 실제 claim 행이 아니라 후속 공식 조사에서 만들 기록의 필드 정의 예시입니다. 실제 claim 행을 만들 때는 `claim`과 `source_url`을 비워 두지 않으며, 확인하지 않은 기능을 임시 문장으로 채우지 않습니다.

```yaml
claim_record:
  claim_id:
    required: true
    meaning: 제품·책임별로 안정적으로 식별하는 ID
  product:
    required: true
    meaning: 조사한 제품명
  responsibility:
    required: true
    meaning: 이 브리프의 일곱 책임 축 중 하나
  claim:
    required: true
    meaning: 실제 공식 자료가 직접 뒷받침하는 한 문장 주장
  source_url:
    required: true
    meaning: 그 주장을 직접 뒷받침하는 공식 문서 URL
  checked_at:
    required: true
    example_value: 2026-08-07
    meaning: 실제 공식 자료를 조회한 날짜
  source_version_or_document_status:
    required: true
    example_form: documented-version | GA | Preview | current/unversioned
    meaning: 공식 자료에서 직접 확인한 제품 버전, 문서 버전 또는 문서 상태
  source_type:
    required: true
    allowed_values: [official-docs, official-product-material]
  status:
    required: true
    allowed_values: [confirmed, limited, not-confirmed]
  scope:
    required: true
    meaning: 이 핸드북에서 적용하는 범위
  do_not_generalize:
    required: true
    meaning: 이 주장으로 결론 내리면 안 되는 범위
```

`checked_at: 2026-08-07`은 이 필드 형식을 보여 주기 위한 계획의 예시 값일 뿐, Task 1에서 어떤 자료를 그 날짜에 조회했다는 기록이 아닙니다. `source_version_or_document_status`의 값 형태도 이 오프라인 계약의 예시일 뿐이며, 어떤 제품이나 문서가 현재 그 상태라는 주장이 아닙니다. Task 7의 실제 claim 행에는 실제 조회일을 기록하며, `claim`에는 질문이나 추측이 아닌 확인된 문장, `source_url`에는 검색 결과·홈페이지가 아닌 그 문장을 직접 뒷받침하는 공식 문서 URL을 기록합니다.

### 상태와 미게시 규칙

- `confirmed`: 공식 1차 자료가 주장과 적용 범위를 직접 뒷받침하고, 반례·사용자 책임·제한을 `scope`와 `do_not_generalize`에 함께 기록한 상태입니다.
- `limited`: 공식 자료가 일부 범위만 뒷받침하거나 전제·환경·제품 경계가 남아 있는 상태입니다. 그 한계를 빠뜨리면 안 되며, 교육 목적에 필요한 범위를 안전하게 설명할 수 있을 때만 제한된 예시로 사용합니다.
- `not-confirmed`: 공식 자료로 주장, 적용 범위 또는 필수 제한을 확인하지 못한 상태입니다. 기능을 추측해 보완하지 않으며 공개 원고 입력 목록에서 제외합니다.
- `fresh-check-failed`: 과거 성공 기록은 있지만 이번 release candidate 확인에서 공식 직접 URL을 열지 못한 상태입니다. 이번 날짜를 `checked_at`으로 기록하지 않고 마지막 성공일과 실패 시도일·오류를 분리하며, 검색 결과 요약이나 과거 기록을 현재 근거로 대체하지 않습니다.
- `source_version_or_document_status`는 모든 실제 claim 행에 필수입니다. 공식 조사에서는 자료가 직접 밝힌 제품 버전·문서 버전·GA·Preview·`current/unversioned` 등의 정확한 상태만 기록하며, 보이지 않는 상태를 추측해 채우지 않습니다.
- 공식 근거, 직접 URL, 실제 조회일, 공식 자료로 확인한 제품 버전 또는 문서 상태, 적용 범위, 일반화 금지선 중 하나라도 없으면 `not-confirmed`로 두고 `확인 불가로 미게시`합니다. 이 규칙은 기능이 존재하지 않는다는 판정이 아니라, 현재 핸드북이 그 기능을 사실로 말할 근거가 부족하다는 출판 판정입니다.
- 어떤 `confirmed` 또는 `limited` 기록도 업무 규칙, 대상별 인가, 비밀 관리, 동시성 시험, 데이터 복원 시험, 실제 사용자 흐름 검증을 제품이 자동으로 끝냈다는 뜻으로 일반화하지 않습니다.

### 공식 조사에서 요구할 증거 형식

각 조사 질문은 공식 제품 문서 또는 제품 소유 공식 자료의 직접 URL, 실제 조회일, 공식 자료에서 직접 확인한 제품 버전·문서 버전 또는 문서 상태, 해당 문서가 직접 말하는 범위, 한계 또는 반례, 핸드북에 쓸 수 있는 좁은 문장, `do_not_generalize`를 한 묶음으로 남깁니다. 문서 제목·검색 결과·가격표·화면 관찰만으로는 충분하지 않으며, 제품 UI의 위치, 요금과 무료 한도는 첫 참고 페이지의 학습 목표가 아닙니다.

## Supabase 검증 질문

| 책임 축 | 검증 질문 | 필요한 공식 근거 | 반례 또는 제한을 확인할 질문 | 미게시 조건 |
|---|---|---|---|---|
| 관계형 데이터 저장 | Supabase가 Postgres를 제공하는지와, 스키마·제약·트랜잭션의 책임 경계를 공식 자료가 어디까지 설명하는가 | 데이터베이스 종류, 제약·트랜잭션 범위, 데이터 모델 또는 SQL 경계의 공식 문서 | 관리형 데이터베이스라는 설명만으로 애플리케이션 업무 규칙·동시성 전략·복구 시험까지 자동 완료된다고 볼 수 있는가 | Postgres 여부 또는 해당 책임 범위를 직접 확인하지 못하면 `확인 불가로 미게시` |
| 인증 | Auth와 세션이 요청 주체 확인에서 맡는 범위와 비밀 취급 경계는 무엇인가 | 인증 방식, 세션 경계, 키·비밀 취급의 공식 문서 | 세션 또는 토큰의 존재가 대상별 인가·토큰 폐기·모든 보안 요구를 보장하는가 | Auth·세션 경계를 직접 확인하지 못하면 `확인 불가로 미게시` |
| 인가 | 데이터 접근 정책이 어떤 서버·데이터 경계에서 평가되며 기본 거절과 테스트 한계는 무엇인가 | 정책 기능, 데이터 접근 경계, 정책 검증 또는 테스트의 공식 문서 | 정책 기능의 존재만으로 주체·대상·행동별 권한과 우회 경로가 모두 안전한가 | 정책의 집행 경계와 제한을 함께 확인하지 못하면 `확인 불가로 미게시` |
| 서버 실행과 API | API 또는 서버 실행 기능이 있는지, 비밀·업무 규칙·입력 검증을 어느 런타임에서 맡길 수 있는지와 제한은 무엇인가 | API 또는 함수·런타임·배포 경계의 공식 문서 | 자동 생성 또는 제공 API가 모든 업무 규칙·입력 검증·권한 검증을 대체하는가 | 기능과 제한을 직접 확인하지 못하면 `확인 불가로 미게시` |
| 빌드와 아티팩트 | 스키마 변경과 마이그레이션은 어떤 단위로 추적하며, 애플리케이션 빌드와 무엇이 구분되는가 | 마이그레이션, 로컬·배포 변경 절차, 관련 복구 문서 | 마이그레이션 기록이 데이터 호환성·백업·복원 성공을 자동 보장하는가 | 마이그레이션 범위 또는 복구와의 차이를 확인하지 못하면 `확인 불가로 미게시` |
| 호스팅과 공개 주소 | 공개 API 또는 프로젝트 주소가 있다면 그 주소의 제공·도메인·HTTPS 책임은 어디까지인가 | 주소 제공, 도메인 또는 HTTPS 관련 공식 문서 | 데이터·인증 서비스의 주소가 웹 프런트엔드 전체 호스팅과 같은 책임인가 | 주소 제공 범위와 호스팅 경계를 직접 확인하지 못하면 `확인 불가로 미게시` |
| 운영과 복구 | 백업·복원과 로그는 무엇을 보여 주며 사용자가 계속 맡아야 할 운영 책임은 무엇인가 | 백업·복원, 로그, 운영 제한의 공식 문서 | 백업 기능 설명만으로 복원 시험, 애플리케이션 배포 롤백, 데이터 손실 범위가 해결되는가 | 백업·복원 또는 로그의 범위와 사용자 책임을 확인하지 못하면 `확인 불가로 미게시` |
| 인증·인가·서버 경계 | 클라이언트 공개 키와 서버 비밀의 구분은 무엇이며 무엇을 브라우저에 두면 안 되는가 | 키 유형·노출 범위·비밀 취급의 공식 문서 | 공개 키를 쓸 수 있다는 설명이 서버 비밀, 권한 우회, 데이터 접근 정책의 안전성을 보장하는가 | 키와 비밀의 경계를 직접 확인하지 못하면 `확인 불가로 미게시` |

## Vercel 검증 질문

| 책임 축 | 검증 질문 | 필요한 공식 근거 | 반례 또는 제한을 확인할 질문 | 미게시 조건 |
|---|---|---|---|---|
| 서버 실행과 API | 정적 전달과 서버 런타임이 각각 어떤 요청을 처리할 수 있는지와 제한은 무엇인가 | 정적·서버 런타임, 함수 또는 요청 처리 범위의 공식 문서 | 서버 런타임 지원이 장기 상태 저장, 인증·인가, 모든 백엔드 운영 책임을 대신하는가 | 정적·서버 런타임의 범위와 제한을 직접 확인하지 못하면 `확인 불가로 미게시` |
| 빌드와 아티팩트 | 어떤 소스가 어떤 빌드·아티팩트 단위로 변하며, 배포와의 경계는 무엇인가 | 빌드, 아티팩트 또는 배포 입력의 공식 문서 | 빌드 성공이 실제 공개 URL·환경 설정·사용자 흐름 성공을 증명하는가 | 빌드와 배포의 책임 차이를 직접 확인하지 못하면 `확인 불가로 미게시` |
| 빌드와 아티팩트 | 환경 변수는 빌드 시점과 실행 시점 중 어디에서 쓰이며, 공개 값과 비밀의 경계는 무엇인가 | 환경 변수, 런타임 설정, 비밀 취급의 공식 문서 | 환경 변수 설정만으로 브라우저 노출 방지와 비밀 회전·접근 통제가 완료되는가 | 환경 변수의 주입 시점과 노출 경계를 확인하지 못하면 `확인 불가로 미게시` |
| 운영과 복구 | 배포 이력은 무엇을 식별하고, 어떤 단위의 변경을 되짚을 수 있는가 | 배포 이력, 버전 또는 관찰 자료의 공식 문서 | 이력의 존재가 데이터 마이그레이션·외부 상태·사용자 데이터의 복구까지 보장하는가 | 배포 이력의 범위와 외부 상태 한계를 확인하지 못하면 `확인 불가로 미게시` |
| 호스팅과 공개 주소 | 도메인·HTTPS 연결은 어떤 호스팅 책임에서 제공되며 사용자가 검증할 경계는 무엇인가 | 도메인, HTTPS, 공개 주소의 공식 문서 | 도메인 연결 성공이 DNS·인증서·애플리케이션 응답·권한 흐름 전체의 성공을 보장하는가 | 도메인·HTTPS 책임과 실제 사용자 검증의 차이를 확인하지 못하면 `확인 불가로 미게시` |
| 운영과 복구 | 로그가 어느 실행·배포 범위를 보여 주며 비밀과 개인정보를 어떻게 다뤄야 하는가 | 로그 또는 관찰 기능의 공식 문서 | 로그가 데이터 상태, 모든 사용자 영향, 원인 또는 복구 성공을 단독으로 증명하는가 | 로그의 범위와 안전한 로그 한계를 확인하지 못하면 `확인 불가로 미게시` |
| 운영과 복구 | 롤백은 어떤 배포 또는 아티팩트 단위에서 가능한지와 데이터·외부 서비스의 남은 책임은 무엇인가 | 롤백 또는 이전 배포 복구의 공식 문서 | 코드 또는 정적 아티팩트 롤백이 데이터 스키마·외부 상태·비밀 변경도 되돌리는가 | 롤백 범위와 데이터 책임의 분리를 확인하지 못하면 `확인 불가로 미게시` |
| 관계형 데이터 저장·인증 | Vercel의 책임이 데이터베이스와 인증 자체를 제공하는 것인지, 아니면 별도 상태 저장소·인증 경계가 남는지 무엇을 공식 자료로 확인할 것인가 | 데이터베이스 연동 또는 플랫폼 책임 범위의 공식 문서 | 배포 플랫폼을 데이터베이스·인증·백업의 일반 정의 또는 자동 제공으로 등치할 수 있는가 | 데이터베이스 책임이 별도인지에 관한 직접 근거가 없으면 `확인 불가로 미게시` |

## Codex Sites 검증 질문

| 책임 축 | 검증 질문 | 필요한 공식 근거 | 반례 또는 제한을 확인할 질문 | 미게시 조건 |
|---|---|---|---|---|
| 빌드와 아티팩트 | 어떤 입력 아티팩트를 받아 어떤 빌드 또는 버전 단위로 다루는가 | 입력 아티팩트, 빌드 또는 버전 단위의 제품 소유 공식 자료 | 입력을 받거나 버전을 만든다는 설명이 소스 검증·재현 가능한 빌드·의존성 관리 전체를 보장하는가 | 입력 아티팩트와 빌드·버전 경계를 직접 확인하지 못하면 `확인 불가로 미게시` |
| 호스팅과 공개 주소 | 호스팅과 공개 URL은 어떤 배포 상태에서 제공되며, 공개·공유·비공개의 경계는 무엇인가 | 호스팅, 배포, 공개 URL 또는 접근 수준의 제품 소유 공식 자료 | URL이 있다는 사실이 사용자의 공개 승인, 도메인 연결, 실제 사용자 흐름 성공을 뜻하는가 | 호스팅·공개 URL의 범위와 접근 경계를 확인하지 못하면 `확인 불가로 미게시` |
| 서버 실행과 API | 환경·서버 실행 지원의 범위와 지원하지 않거나 확인할 수 없는 경계는 무엇인가 | 런타임, 환경 또는 서버 실행의 제품 소유 공식 자료 | 사이트 호스팅을 범용 서버 런타임·API·데이터베이스·인증으로 등치할 수 있는가 | 환경·서버 실행 지원 경계를 직접 확인하지 못하면 `확인 불가로 미게시` |
| 운영과 복구 | 롤백과 관찰 증거가 어떤 버전·배포·사용자 영향 범위를 보여 주는가 | 버전, 배포 상태, 롤백 또는 관찰의 제품 소유 공식 자료 | 버전 관리 또는 배포 상태가 데이터 복원·장애 원인 규명·사용자 영향 확인 전체를 대신하는가 | 롤백·관찰 증거의 범위와 제한을 확인하지 못하면 `확인 불가로 미게시` |
| 호스팅과 공개 주소 | GitHub Pages·Vercel과 같은 책임과 다른 책임을 어떤 공식 근거로 구분할 것인가 | 각 제품의 호스팅·입력·런타임·도메인·복구 범위를 직접 설명하는 공식 자료 | 같은 “사이트 게시” 표현만으로 빌드 주체, 런타임, 도메인, 환경 변수, 롤백 단위가 같다고 볼 수 있는가 | 차이를 직접 비교할 수 있는 근거가 없으면 제품 간 동일시 문장을 `확인 불가로 미게시` |
| 관계형 데이터 저장·인증·인가 | 데이터 저장, 인증, 인가의 책임을 Codex Sites에 귀속할 근거가 있는지, 없으면 어떤 별도 경계가 남는가 | 제품 책임 범위와 외부 서비스 경계의 제품 소유 공식 자료 | 사이트 게시 도구를 데이터베이스·인증·인가의 제공 또는 안전성 보장으로 볼 수 있는가 | 별도 경계를 직접 확인하지 못하면 관련 기능 연결을 `확인 불가로 미게시` |

## 조사 결과를 공개 원고로 옮기는 기준

1. 제품별 질문을 실제 공식 자료로 확인한 뒤에만 claim 행을 추가합니다. Task 1의 표는 주장 목록이 아니라 확인 순서를 고정한 질문 목록이고, Task 7 fact pack이 그 계약을 실제 값으로 채웁니다.
2. 공개 원고에는 `confirmed`와 교육 범위가 분명한 `limited`만 사용합니다. `not-confirmed`와 `확인 불가로 미게시` 항목은 제품 기능을 추측해 채우지 않고, 필요하면 미게시 사유만 조사 기록에 남깁니다.
3. 공개 문장은 영속 책임을 먼저 설명하고 제품을 교체 가능한 현재 예시로만 연결합니다. `데이터베이스 = Supabase`, `배포 = Vercel`, `호스팅 = Codex Sites` 같은 등치 문장과 “모든 프로젝트의 정답”, “자동으로 안전” 같은 일반화는 쓰지 않습니다.
4. 제품별 문장에는 실제 `checked_at`, 직접 `source_url`, 공식 자료로 확인한 `source_version_or_document_status`, `scope`, `do_not_generalize`가 모두 있어야 합니다. 하나라도 빠지면 `not-confirmed`와 `확인 불가로 미게시`이며, 실제 공식 조사와 같은 작업에서 `research/source-map.md`도 갱신합니다.
5. 이 계약은 로컬 문서 검증과 로컬 커밋을 제품·계정·프로젝트·배포의 검증으로 바꾸지 않습니다. 실제 배포, DNS·HTTPS, 운영 데이터, 사용자 흐름, 로그, 백업·복원은 각각 권한이 있는 환경과 별도의 증거가 필요합니다.

## 2026-08-13 공식 fact pack

### 조사 실행 경계

Supabase 조사는 설치된 공식 스킬의 지침에 따라 `https://supabase.com/changelog.md`를 먼저 읽고 현재 breaking change·deprecation 경계를 확인한 뒤 직접 문서 URL을 대조했습니다. 이 확인은 제거 예정인 관리 API, self-hosted 경로 차이, Data API 노출 기본값 변화와 legacy API key 전환을 현재의 보편 동작처럼 쓰지 않기 위한 경계이며, changelog 항목 자체를 모임 앱의 제품 선택 근거로 사용하지 않습니다.

Codex Sites는 설치된 `sites:sites-hosting` 공식 로컬 자료를 먼저 읽은 뒤 공개 원고에서 인용할 수 있는 직접 URL이 필요한 주장만 OpenAI 공식 개발자 문서와 Help Center에서 다시 확인했습니다. 가격·무료 한도·일시적인 UI 위치는 기록하지 않았고, 공식 문서에 없는 이전 배포 롤백은 `not-confirmed`로 유지했습니다.

아래 23개 claim은 제품 책임을 영속 개념의 교체 가능한 현재 예시로 연결하기 위한 사실 팩입니다. `confirmed` 17개·`limited` 4개만 Task 8의 공개 원고 입력 후보이고 `not-confirmed` 2개는 미게시합니다. Codex Sites의 입력 archive 구성은 설치된 공식 로컬 제품 자료에서는 확인되지만 같은 내용을 직접 뒷받침하는 공개 공식 URL이 없어 별도 `not-confirmed` claim으로 분리했습니다. 이 집계는 공식 문서의 직접 뒷받침 여부일 뿐 실제 계정·프로젝트·배포·데이터베이스나 캡스톤 동작의 검증 결과가 아닙니다.

### Supabase

```yaml
fact_pack:
  - claim_id: SUPA-DB-01
    product: Supabase
    responsibility: 관계형 데이터 저장
    claim: "Supabase 프로젝트에는 전체 Postgres 데이터베이스가 제공되며 Auth·Storage·Realtime·Edge Functions도 그 데이터베이스를 기반으로 사용합니다."
    source_url: "https://supabase.com/docs/guides/database/overview"
    checked_at: 2026-08-13
    source_version_or_document_status: "current unversioned documentation as displayed; page version not shown"
    source_type: official-docs
    status: confirmed
    scope: "관계형 권위 원본과 관리형 데이터베이스 역할을 설명하는 현재 제품 예시"
    do_not_generalize: "Postgres 제공이 애플리케이션 스키마·제약·트랜잭션·동시성 전략·복원 시험을 자동 완성한다는 뜻이 아닙니다."
  - claim_id: SUPA-AUTH-01
    product: Supabase
    responsibility: 인증
    claim: "Supabase Auth는 사용자 인증을 제공하고 JWT를 사용하며, 데이터 접근 인가는 RLS 정책과 결합해 구성합니다."
    source_url: "https://supabase.com/docs/guides/auth"
    checked_at: 2026-08-13
    source_version_or_document_status: "current unversioned documentation as displayed; page version not shown"
    source_type: official-docs
    status: confirmed
    scope: "사용자 신원 확인과 데이터 접근 정책을 서로 다른 책임으로 설명하는 현재 제품 예시"
    do_not_generalize: "로그인 세션이나 JWT의 존재만으로 대상별 인가·토큰 폐기·모든 보안 요구가 충족되었다고 판단하지 않습니다."
  - claim_id: SUPA-AUTHZ-01
    product: Supabase
    responsibility: 인가
    claim: "Supabase Data API에서는 테이블·열 같은 객체에 도달할 수 있는지는 privileges가, 도달한 테이블에서 어떤 행을 다룰 수 있는지는 RLS 정책이 통제합니다."
    source_url: "https://supabase.com/docs/guides/api/securing-your-api"
    checked_at: 2026-08-13
    source_version_or_document_status: "current unversioned documentation as displayed; page version not shown"
    source_type: official-docs
    status: confirmed
    scope: "공개 스키마의 객체 접근과 행 접근을 함께 설계해야 하는 데이터 경계 예시"
    do_not_generalize: "RLS 기능의 존재만으로 올바른 정책·기본 거절·우회 경로·주체·대상·행동별 부정 테스트가 자동 보장되지는 않습니다."
  - claim_id: SUPA-API-01
    product: Supabase
    responsibility: 서버 실행과 API
    claim: "Supabase Data REST API는 데이터베이스 스키마에서 자동 생성되며 브라우저가 직접 쓰는 2계층 구조나 별도 API 서버를 둔 3계층 구조에 사용할 수 있습니다."
    source_url: "https://supabase.com/docs/guides/api"
    checked_at: 2026-08-13
    source_version_or_document_status: "current unversioned documentation as displayed; page version not shown"
    source_type: official-docs
    status: confirmed
    scope: "스키마와 API 경계 및 클라이언트 직접 접근과 자체 서버 경로의 차이를 설명하는 예시"
    do_not_generalize: "자동 생성 API가 입력 검증·업무 규칙·인가 정책·버전 호환성·애플리케이션 서버 책임을 모두 대신하지 않습니다."
  - claim_id: SUPA-SERVER-01
    product: Supabase
    responsibility: 서버 실행과 API
    claim: "Supabase Edge Functions는 Deno 호환 TypeScript 서버 함수이며 짧고 멱등적인 작업에 맞고 무거운 장시간 작업은 별도 워커로 옮기도록 공식 문서가 경계를 둡니다."
    source_url: "https://supabase.com/docs/guides/functions"
    checked_at: 2026-08-13
    source_version_or_document_status: "current unversioned documentation as displayed; page version not shown"
    source_type: official-docs
    status: limited
    scope: "비밀과 서버 규칙을 실행할 수 있는 현재 함수 런타임의 좁은 역할과 작업 형태 제한"
    do_not_generalize: "Edge Functions 지원을 범용 장기 실행 서버·큐·데이터베이스·인증·모든 백엔드 운영 책임으로 확대하지 않습니다."
  - claim_id: SUPA-MIG-01
    product: Supabase
    responsibility: 빌드와 아티팩트
    claim: "Supabase의 데이터베이스 마이그레이션은 SQL 파일로 스키마 변경을 시간순으로 추적하며, 원격 데이터베이스를 직접 바꾼 변경은 로컬 마이그레이션 이력에 자동으로 들어오지 않습니다."
    source_url: "https://supabase.com/docs/guides/deployment/database-migrations"
    checked_at: 2026-08-13
    source_version_or_document_status: "current unversioned documentation as displayed; page version not shown"
    source_type: official-docs
    status: confirmed
    scope: "버전 관리된 스키마 변경 파일과 실제 적용된 원격 상태를 분리하는 예시"
    do_not_generalize: "마이그레이션 파일의 존재가 적용 성공·데이터 호환성·다운 마이그레이션·백업·복원 성공을 자동 증명하지 않습니다."
  - claim_id: SUPA-OPS-01
    product: Supabase
    responsibility: 운영과 복구
    claim: "Supabase의 데이터베이스 백업은 데이터베이스를 대상으로 하며 Storage API에 저장된 파일 객체는 포함하지 않습니다."
    source_url: "https://supabase.com/docs/guides/platform/backups"
    checked_at: 2026-08-13
    source_version_or_document_status: "current unversioned documentation as displayed; page version not shown"
    source_type: official-docs
    status: limited
    scope: "데이터베이스 백업과 객체 저장소 백업 범위를 분리해야 하는 현재 제품 예시"
    do_not_generalize: "백업 기능 설명을 실제 복원 시험·RPO·RTO·보존·격리·Storage 객체 복구·애플리케이션 배포 롤백 성공으로 간주하지 않습니다."
  - claim_id: SUPA-LOG-01
    product: Supabase
    responsibility: 운영과 복구
    claim: "Supabase Logs Explorer는 Auth·Edge·Functions·Postgres·Realtime·Storage 등 서비스별 로그 소스를 구분해 조회하게 합니다."
    source_url: "https://supabase.com/docs/guides/platform/logs"
    checked_at: 2026-08-13
    source_version_or_document_status: "current unversioned documentation as displayed; page version not shown; logging backend can differ for projects created before the documented 2026 change"
    source_type: official-docs
    status: confirmed
    scope: "어느 서비스의 관찰 기록인지 먼저 구분하는 운영 예시"
    do_not_generalize: "로그 한 줄이나 특정 로그 저장 백엔드가 데이터의 권위 상태·근본 원인·모든 사용자 영향·복구 성공을 단독으로 증명하지 않습니다."
  - claim_id: SUPA-KEY-01
    product: Supabase
    responsibility: 인가
    claim: "Supabase의 publishable key는 공개 애플리케이션 구성 요소에 둘 수 있지만 secret key는 백엔드 전용이며 RLS를 우회하므로 브라우저에 노출하면 안 됩니다."
    source_url: "https://supabase.com/docs/guides/api/api-keys"
    checked_at: 2026-08-13
    source_version_or_document_status: "current unversioned documentation as displayed; page version not shown; legacy anon and service_role keys are documented as transitioning to publishable and secret keys"
    source_type: official-docs
    status: confirmed
    scope: "클라이언트 공개 식별자와 서버 비밀·권한 우회 자격 증명을 구분하는 현재 제품 예시"
    do_not_generalize: "공개 키 사용 가능성이 RLS 정책의 정확성·서버 비밀 보호·키 회전·브라우저 데이터 접근 안전을 자동 보장하지 않습니다."
```

### Vercel

```yaml
fact_pack:
  - claim_id: VERCEL-BUILD-01
    product: Vercel
    responsibility: 빌드와 아티팩트
    claim: "Vercel의 build 단계는 소스를 컴파일·번들·최적화해 정적 파일·함수·기타 배포 산출물을 만들며, 별도 build가 필요 없는 정적 사이트는 파일을 그대로 배포할 수 있습니다."
    source_url: "https://vercel.com/docs/builds"
    checked_at: 2026-08-13
    source_version_or_document_status: "current documentation; last_updated: 2026-06-16"
    source_type: official-docs
    status: confirmed
    scope: "소스·빌드 단계·배포 산출물을 분리하는 현재 호스팅 예시"
    do_not_generalize: "빌드 성공을 공개 URL·환경 설정·실제 사용자 흐름·외부 데이터 연결의 성공으로 바꾸지 않습니다."
  - claim_id: VERCEL-RUNTIME-01
    product: Vercel
    responsibility: 서버 실행과 API
    claim: "Vercel Functions는 서버를 직접 관리하지 않고 요청에 따라 실행하는 서버 측 코드를 제공하며 런타임과 실행 지역을 구성할 수 있습니다."
    source_url: "https://vercel.com/docs/functions"
    checked_at: 2026-08-13
    source_version_or_document_status: "current documentation; last_updated: 2026-07-15"
    source_type: official-docs
    status: limited
    scope: "정적 호스팅과 요청 단위 서버 실행을 구분하는 현재 제품 예시"
    do_not_generalize: "함수 지원이 장기 상태 저장·관계형 데이터베이스·인증·인가·백업·모든 서버 운영 책임을 자동 제공한다는 뜻이 아닙니다."
  - claim_id: VERCEL-ENV-01
    product: Vercel
    responsibility: 빌드와 아티팩트
    claim: "Vercel 환경 변수는 환경별로 구성되어 빌드 단계나 Function 실행에서 쓰이며 값을 바꿔도 기존 배포에는 적용되지 않고 새 배포가 필요합니다."
    source_url: "https://vercel.com/docs/environment-variables"
    checked_at: 2026-08-13
    source_version_or_document_status: "current documentation; last_updated: 2026-06-16"
    source_type: official-docs
    status: confirmed
    scope: "설정 주입 시점과 배포 버전의 관계를 설명하는 현재 제품 예시"
    do_not_generalize: "환경 변수에 넣었다는 사실만으로 브라우저 노출 방지·최소 권한·회전·감사·복구가 완료되었다고 판단하지 않습니다."
  - claim_id: VERCEL-DEPLOY-01
    product: Vercel
    responsibility: 호스팅과 공개 주소
    claim: "Vercel 배포는 성공한 빌드의 결과이며 배포마다 고유 URL을 만들고, 지원되는 Git provider 연결에서는 commit이나 pull request가 새 배포를 촉발할 수 있습니다."
    source_url: "https://vercel.com/docs/deployments"
    checked_at: 2026-08-13
    source_version_or_document_status: "current documentation; last_updated: 2026-06-17"
    source_type: official-docs
    status: confirmed
    scope: "소스 이력과 배포 후보·Preview·Production 주소를 연결하는 현재 제품 예시"
    do_not_generalize: "고유 URL이나 배포 이력이 실제 공개 승인·사용자 흐름·외부 데이터 상태·데이터 마이그레이션 성공을 증명하지 않습니다."
  - claim_id: VERCEL-DOMAIN-01
    product: Vercel
    responsibility: 호스팅과 공개 주소
    claim: "Vercel은 프로젝트에 추가된 도메인마다 인증서 생성을 시도하지만 DNS 레코드가 설정·전파되어 인증서 검증 요청이 성공해야 HTTPS가 동작합니다."
    source_url: "https://vercel.com/docs/domains/working-with-ssl"
    checked_at: 2026-08-13
    source_version_or_document_status: "current documentation; last_updated: 2026-06-08"
    source_type: official-docs
    status: confirmed
    scope: "도메인 연결·DNS 검증·TLS 인증서·HTTPS의 순서를 설명하는 현재 제품 예시"
    do_not_generalize: "도메인을 추가했다는 사실만으로 DNS 전파·인증서 발급·애플리케이션 응답·인가 흐름·모든 브라우저 확인이 성공했다고 보지 않습니다."
  - claim_id: VERCEL-LOG-01
    product: Vercel
    responsibility: 운영과 복구
    claim: "Vercel은 배포 빌드 진행을 보여 주는 build logs와 배포된 코드 실행을 조회하는 runtime logs를 구분합니다."
    source_url: "https://vercel.com/docs/logs"
    checked_at: 2026-08-13
    source_version_or_document_status: "current documentation; last_updated: 2026-06-16"
    source_type: official-docs
    status: confirmed
    scope: "빌드 실패 증거와 실행 중 요청 증거를 구분하는 현재 운영 예시"
    do_not_generalize: "로그가 데이터의 권위 상태·모든 사용자 영향·근본 원인·복구 성공을 단독으로 증명한다고 해석하지 않습니다."
  - claim_id: VERCEL-ROLLBACK-01
    product: Vercel
    responsibility: 운영과 복구
    claim: "Vercel production rollback은 다시 빌드하지 않고 production traffic을 지정한 이전 deployment로 돌리는 routing-layer 작업입니다."
    source_url: "https://vercel.com/docs/deployments/rollback-production-deployment"
    checked_at: 2026-08-13
    source_version_or_document_status: "current documentation; last_updated: 2026-05-28"
    source_type: official-docs
    status: confirmed
    scope: "배포 라우팅을 이전 코드·아티팩트 버전으로 되돌리는 현재 복구 예시"
    do_not_generalize: "배포 라우팅 롤백이 데이터베이스 스키마·사용자 데이터·환경 변수·외부 서비스·비밀 변경까지 되돌린다고 보지 않습니다."
  - claim_id: VERCEL-DATA-01
    product: Vercel
    responsibility: 관계형 데이터 저장
    claim: "Vercel Marketplace storage는 별도 storage provider의 데이터베이스나 저장소를 프로젝트에 연결하고 자격 증명을 환경 변수로 주입합니다."
    source_url: "https://vercel.com/docs/marketplace-storage"
    checked_at: 2026-08-13
    source_version_or_document_status: "current documentation; last_updated: 2026-07-29"
    source_type: official-docs
    status: limited
    scope: "호스팅 배포와 외부 데이터 저장소 연결의 책임을 분리하는 현재 제품 예시"
    do_not_generalize: "Vercel 배포가 관계형 데이터베이스·인증·인가·백업을 일반적으로 내장하거나 연결된 공급자의 운영 보장을 대신한다고 판단하지 않습니다."
```

### Codex Sites

```yaml
fact_pack:
  - claim_id: SITES-VERSION-01
    product: Codex Sites
    responsibility: 빌드와 아티팩트
    claim: "Codex Sites는 version 저장과 version 배포를 두 단계로 나누며, 로컬 소스 프로젝트에서는 빌드에 사용한 Git commit을 저장된 version과 연결합니다."
    source_url: "https://developers.openai.com/codex/sites"
    checked_at: 2026-08-13
    source_version_or_document_status: "public beta; current unversioned documentation as displayed; page version and absolute update date not shown"
    source_type: official-docs
    status: confirmed
    scope: "검토 가능한 배포 후보와 실제 배포를 분리하고 입력 소스 버전을 식별하는 현재 제품 예시"
    do_not_generalize: "Git commit 연결이 의존성 고정·재현 가능한 빌드·소스 검토·마이그레이션 안전·검토 통과를 자동 증명하지 않습니다."
  - claim_id: SITES-ARTIFACT-01
    product: Codex Sites
    responsibility: 빌드와 아티팩트
    claim: "공개 Codex Sites 개발자 문서는 기존 프로젝트가 호환 배포 아티팩트를 만들어야 한다고 설명하지만, 설치된 공식 `sites:sites-hosting@0.1.34` 로컬 제품 자료가 명시하는 `dist/`·hosting metadata·migrations를 stage·validate해 archive로 만드는 정확한 입력 구성은 공개 직접 URL에서 확인되지 않았습니다."
    source_url: "https://developers.openai.com/codex/sites"
    checked_at: 2026-08-13
    source_version_or_document_status: "public beta; current unversioned documentation as displayed; installed official local product material sites:sites-hosting@0.1.34, SKILL.md lines 47-50, SHA-256 e1cd0842e1426204dbfc856e7bd7f364ee671fe6df78c6458c9a4d5e49b496e3; exact archive composition not documented at the public URL"
    source_type: official-product-material
    status: not-confirmed
    scope: "입력 archive 경계를 로컬 조사 기록으로만 보존하고, 정확한 구성을 뒷받침하는 공개 공식 URL이 확인될 때까지 Task 8 공개 원고 입력에서 제외"
    do_not_generalize: "로컬 packaging 절차를 공개 제품 계약·모든 프로젝트의 고정 입력 형식·소스 검증·재현 가능한 빌드·의존성 고정·마이그레이션 안전·배포 성공·런타임 동작·데이터 복구 보장으로 확대하지 않습니다."
  - claim_id: SITES-HOST-01
    product: Codex Sites
    responsibility: 호스팅과 공개 주소
    claim: "Codex Sites는 저장된 version을 배포하면 production URL을 보고하며, URL 배포와 누가 방문할 수 있는지를 정하는 공유 범위는 별도 단계입니다."
    source_url: "https://developers.openai.com/codex/sites"
    checked_at: 2026-08-13
    source_version_or_document_status: "public beta; current unversioned documentation as displayed; page version and absolute update date not shown"
    source_type: official-docs
    status: confirmed
    scope: "호스팅·production URL·owner/workspace/public 접근 수준을 구분하는 현재 제품 예시"
    do_not_generalize: "production URL 생성이 공개 승인·올바른 접근 설정·실제 방문자 흐름·개인정보 검토·외부 공개 성공을 자동 의미하지 않습니다."
  - claim_id: SITES-RUNTIME-01
    product: Codex Sites
    responsibility: 서버 실행과 API
    claim: "Codex Sites는 지원되는 Sites runtime에서 웹 경험을 호스팅하고 hosted environment variables와 secrets를 설정할 수 있지만 일부 framework·private network·database·background service·hosting pattern은 지원되지 않습니다."
    source_url: "https://developers.openai.com/codex/sites"
    checked_at: 2026-08-13
    source_version_or_document_status: "public beta; current unversioned documentation as displayed; page version and absolute update date not shown"
    source_type: official-docs
    status: confirmed
    scope: "호스팅 런타임·서버 설정과 지원 범위가 계정·프로젝트 조건에 묶인 현재 제품 예시"
    do_not_generalize: "Sites 호스팅을 임의의 서버 런타임·사설망·데이터베이스·백그라운드 워커·모든 프레임워크의 범용 배포 환경으로 등치하지 않습니다."
  - claim_id: SITES-DOMAIN-01
    product: Codex Sites
    responsibility: 호스팅과 공개 주소
    claim: "Codex Sites에서 custom domain을 사용할 수 있는 경우에도 Sites가 도메인을 등록해 주지 않으므로 사용자가 이미 소유한 도메인의 DNS 레코드를 바꿀 수 있어야 합니다."
    source_url: "https://help.openai.com/en/articles/20001339-creating-and-managing-chatgpt-sites"
    checked_at: 2026-08-13
    source_version_or_document_status: "public beta; current unversioned Help Center article as displayed; absolute update date and page version not shown"
    source_type: official-product-material
    status: confirmed
    scope: "제품이 제공하는 연결 안내와 사용자가 맡는 도메인 소유·DNS 변경 책임을 분리하는 현재 예시"
    do_not_generalize: "custom domain이 모든 플랜·지역·workspace에 제공되거나 DNS 설정·HTTPS·실제 응답 검증이 자동 완료된다고 보지 않습니다."
  - claim_id: SITES-ROLLBACK-01
    product: Codex Sites
    responsibility: 운영과 복구
    claim: "검토한 Codex Sites 공식 자료에서는 저장된 version을 목록·검사하고 선택한 version을 배포하는 경계는 확인되지만 이전 production deployment로 되돌리는 별도 rollback 기능과 복구 범위는 확인되지 않았습니다."
    source_url: "https://developers.openai.com/codex/sites"
    checked_at: 2026-08-13
    source_version_or_document_status: "public beta; current official documentation reviewed; rollback behavior not documented"
    source_type: official-docs
    status: not-confirmed
    scope: "확인 불가로 미게시하며 Task 8의 제품 기능 목록에 넣지 않음"
    do_not_generalize: "공식 문서에서 확인하지 못했다는 기록을 rollback이 존재하지 않는다는 제품 판정으로 바꾸거나 version 저장을 데이터·환경·배포 복구로 간주하지 않습니다."
```

### 공개 원고 입력 경계

- Task 8은 먼저 데이터 저장·인증·인가·서버 실행·빌드·호스팅·운영·복구라는 영속 책임을 설명한 뒤 위 `confirmed`와 범위가 좁은 `limited`만 날짜 있는 현재 예시로 연결합니다.
- Supabase·Vercel·Codex Sites 가운데 어느 하나도 모든 책임을 자동으로 끝내는 기본 정답으로 제시하지 않습니다. 제품 조합은 아키텍처 결정의 결과이지 영속 개념의 정의가 아닙니다.
- 이 fact pack은 모임 참가 웹앱의 정원 동시성·고유성·마이그레이션·복원 성공이나 제품 선택을 증명하지 않습니다. 실제 구현 결정과 검증은 PBSG-020과 Task 18에서 별도로 닫습니다.
- 이 fact pack은 GitHub Spec Kit·OpenAI·Anthropic의 조직 사례와 신생 실무 표현을 다루는 PBSG-017, `plan mode`·`workspace-write`·`read-only`를 다루는 PBSG-018을 자동 해소하지 않습니다.
- Sites의 정확한 입력 archive 구성과 rollback처럼 `not-confirmed`인 주장은 이를 직접 뒷받침하는 공개 공식 근거가 추가로 확인될 때까지 공개 원고 입력 목록에서 제외합니다.

## 2026-08-20 release candidate fresh check

### 확인 방법과 합계

공식 직접 URL만 열었고 검색 결과 요약과 제3자 문서는 직접 근거로 사용하지 않았습니다. OpenAI 제품은 OpenAI 공식 도메인, Claude Code는 Anthropic 공식 문서, Supabase와 Vercel은 각 회사 공식 문서만 사용했습니다. Supabase 9개, ChatGPT Sites 6개, Codex·Claude Code 제품별 권한·sandbox·mode 6개 기록은 공식 페이지를 직접 열어 확인했습니다. Vercel 8개 기록은 공식 URL이 모두 `HTTP 400 Unsupported content-type: text/markdown`으로 열리지 않아 `fresh-check-failed`로 남겼습니다.

성공한 문서는 `checked_at: 2026-08-20`으로 기록했습니다. 실패한 Vercel 문서에는 2026-08-20을 성공 확인일로 넣지 않고 `attempted_at`과 `last_successful_check`를 분리했습니다. 공식 문서에 버전 번호나 절대 갱신일이 보이지 않으면 `current/unversioned`라고 적었고, ChatGPT Sites 도움말의 `Updated: 4 days ago`는 임의의 절대 날짜로 환산하지 않았습니다.

### Supabase fresh records

모든 행의 source type은 `official-docs`, checked_at은 `2026-08-20`, 문서 상태는 `current/unversioned; page version not shown`입니다.

| claim_id·status | exact source_url | claim scope와 조건 | do_not_generalize |
|---|---|---|---|
| SUPA-DB-01 · confirmed | https://supabase.com/docs/guides/database/overview | 프로젝트 Postgres와 이를 기반으로 연결되는 제품 기능의 현재 개요; 별도 PITR는 플랜 조건 | 데이터 모델·제약·트랜잭션·복원 성공으로 확대하지 않음 |
| SUPA-AUTH-01 · confirmed | https://supabase.com/docs/guides/auth | Auth·JWT와 RLS 결합 경계 | 인증 성공을 대상별 인가·세션 안전 전체로 확대하지 않음 |
| SUPA-AUTHZ-01 · confirmed | https://supabase.com/docs/guides/api/securing-your-api | Data API의 privileges와 RLS 역할; 기존 자동 grant 변경 안내 포함 | RLS 존재를 올바른 정책·우회 차단으로 확대하지 않음 |
| SUPA-API-01 · confirmed | https://supabase.com/docs/guides/api | 데이터베이스 스키마에서 생성되는 Data REST API와 2-tier·3-tier 선택 | 자동 API를 업무 규칙·입력 검증·권한·호환성 완성으로 확대하지 않음 |
| SUPA-SERVER-01 · limited | https://supabase.com/docs/guides/functions | Deno 호환 TypeScript 함수; 짧고 멱등적인 작업과 장시간 background worker 경계 | 범용 장기 실행 서버·큐·모든 백엔드 책임으로 확대하지 않음 |
| SUPA-MIG-01 · confirmed | https://supabase.com/docs/guides/deployment/database-migrations | SQL migration 이력과 원격 직접 변경의 불일치 위험; 팀 작업 조건 | 파일 존재를 원격 적용·호환성·복구 성공으로 확대하지 않음 |
| SUPA-OPS-01 · limited | https://supabase.com/docs/guides/platform/backups | Pro·Team·Enterprise 백업, Free export, PITR 조건; Storage 객체 제외 | 데이터베이스 백업을 전체 데이터·Storage·배포 복구로 확대하지 않음 |
| SUPA-LOG-01 · limited | https://supabase.com/docs/guides/monitoring-and-debugging/logs | 서비스별 로그; 플랜별 보존과 2026-06 이후 기본 ClickHouse·일부 기존 프로젝트 BigQuery 조건 | 로그를 권위 상태·근본 원인·복구 성공으로 확대하지 않음 |
| SUPA-KEY-01 · confirmed | https://supabase.com/docs/guides/getting-started/api-keys | publishable·secret key 경계와 legacy key 전환; secret key는 RLS 우회 | 공개 key 허용을 RLS 정확성·비밀 보호·브라우저 안전으로 확대하지 않음 |

### Vercel fresh-check-failed records

모든 행의 source type은 `official-docs`, attempted_at은 `2026-08-20`, last_successful_check는 `2026-08-13`, fresh check result는 `HTTP 400 Unsupported content-type: text/markdown`, 현재 status는 `fresh-check-failed; current claim not-confirmed`입니다. 검색 결과 요약은 직접 근거로 쓰지 않았습니다.

| claim_id | exact source_url | 보존하는 scope | do_not_generalize |
|---|---|---|---|
| VERCEL-BUILD-01 | https://vercel.com/docs/builds | 빌드와 아티팩트 책임을 재확인해야 할 URL | 2026-08-13 기록을 현재 빌드 동작·아티팩트·배포 성공으로 확대하지 않음 |
| VERCEL-RUNTIME-01 | https://vercel.com/docs/functions | 서버 실행과 API 책임을 재확인해야 할 URL | 과거 기록을 현재 runtime·region·limit 또는 범용 백엔드로 확대하지 않음 |
| VERCEL-ENV-01 | https://vercel.com/docs/environment-variables | 환경별 설정과 비밀 책임을 재확인해야 할 URL | 과거 기록을 현재 적용·보호·기존 배포 반영의 증거로 확대하지 않음 |
| VERCEL-DEPLOY-01 | https://vercel.com/docs/deployments | 배포와 주소 책임을 재확인해야 할 URL | 과거 기록을 현재 URL 생성·Git 연동·실제 배포·공개 성공으로 확대하지 않음 |
| VERCEL-DOMAIN-01 | https://vercel.com/docs/domains/working-with-ssl | DNS·인증서·HTTPS 책임을 재확인해야 할 URL | 과거 기록을 현재 DNS·인증서·HTTPS 성공으로 확대하지 않음 |
| VERCEL-LOGS-01 | https://vercel.com/docs/logs | 관측과 로그 책임을 재확인해야 할 URL | 과거 기록을 현재 로그 종류·보존·권위 상태·복구 성공으로 확대하지 않음 |
| VERCEL-ROLLBACK-01 | https://vercel.com/docs/deployments/rollback-production-deployment | 코드 배포와 전체 상태 복구 경계를 재확인해야 할 URL | 과거 기록을 현재 routing·데이터·환경·외부 상태 복구로 확대하지 않음 |
| VERCEL-DATA-01 | https://vercel.com/docs/marketplace-storage | 외부 storage provider 연결 책임을 재확인해야 할 URL | 과거 기록을 현재 provider 연결·credential 주입·DB 내장으로 확대하지 않음 |

### ChatGPT Sites fresh records

개발자 문서의 공식 제품명은 `Sites – ChatGPT`, 상태는 `public beta; current/unversioned; page version and absolute update date not shown`입니다. 도움말은 현재 public beta 안내이며 페이지에 `Updated: 4 days ago`라고 표시됐습니다. 모든 행의 checked_at은 `2026-08-20`, source type은 `official-docs` 또는 `official-product-material`입니다.

| claim_id·status | exact source_url | claim scope와 조건 | do_not_generalize |
|---|---|---|---|
| SITES-VERSION-01 · limited | https://learn.chatgpt.com/docs/sites | version 저장과 배포 분리, 로컬 소스의 Git commit 연결; public beta·account·workspace 조건 | commit 연결을 재현 빌드·검토·마이그레이션·배포 성공으로 확대하지 않음 |
| SITES-ARTIFACT-01 · not-confirmed | https://learn.chatgpt.com/docs/sites | 호환 deployment artifact 언급만 확인; 정확한 archive 파일·manifest·포함·제외 계약은 미확인 | artifact 언급을 정확한 입력 archive 계약으로 확대하지 않음 |
| SITES-HOST-01 · limited | https://learn.chatgpt.com/docs/sites ; https://help.openai.com/en/articles/20001339-creating-and-managing-chatgpt-sites | every deployment production URL, version 저장·배포·공유 분리; public beta·plan·rollout·workspace 조건 | 제품 설명을 실제 account access·deploy·public URL·방문자 흐름 성공으로 확대하지 않음 |
| SITES-RUNTIME-01 · limited | https://learn.chatgpt.com/docs/sites | 지원 웹 구조, D1 관계형 데이터, R2 객체 저장과 unsupported pattern; public beta 조건 | 임의 framework·network·DB·background service를 지원하는 범용 runtime으로 확대하지 않음 |
| SITES-DOMAIN-01 · limited | https://learn.chatgpt.com/docs/sites ; https://help.openai.com/en/articles/20001339-creating-and-managing-chatgpt-sites | 사용자 소유 도메인·DNS 책임; plan·workspace 조건, launch 시 Enterprise unavailable | 모든 account·plan·region에서 제공되거나 DNS·HTTPS 연결이 완료됐다고 확대하지 않음 |
| SITES-ROLLBACK-01 · not-confirmed | https://learn.chatgpt.com/docs/sites ; https://help.openai.com/en/articles/20001339-creating-and-managing-chatgpt-sites | 저장 version의 목록·검사·선택 배포는 확인; named production rollback·restore와 데이터·환경·외부 상태 복구는 미확인, 삭제 Site는 복원 불가 | version 재배포를 rollback·삭제 복구·전체 상태 restore 성공으로 확대하지 않음 |

### Codex·Claude Code 권한, sandbox, mode fresh records

아래 기록은 제품별 현재 명칭을 공유 영속 개념과 분리합니다. 성공한 문서의 checked_at은 `2026-08-20`, source type은 `official-docs`, 문서 상태는 `current/unversioned; page version not shown`입니다.

| claim_id·status | exact source_url | claim scope와 조건 | do_not_generalize |
|---|---|---|---|
| CODEX-WORKSPACE-WRITE-01 · confirmed | https://learn.chatgpt.com/docs/permissions ; https://learn.chatgpt.com/docs/agent-approvals-security ; https://learn.chatgpt.com/docs/sandboxing | 기존 `sandbox_mode`의 `workspace-write`; CLI/IDE 기본 예시, 네트워크 기본 차단, 승인과 별도; beta profile `:workspace`와 기존 설정은 합성하지 않음 | 작업 공간 쓰기를 전체 시스템 쓰기·무승인·네트워크 허용 또는 Claude mode로 확대하지 않음 |
| CODEX-READ-ONLY-01 · confirmed | https://learn.chatgpt.com/docs/permissions ; https://learn.chatgpt.com/docs/agent-approvals-security | sandbox/preset `read-only`, beta profile `:read-only`; 변경 없이 채팅·계획할 때의 현재 문서 예시 | 비밀·네트워크·명령 전체 안전 또는 Claude 제품 모드 이름으로 확대하지 않음 |
| CODEX-PLAN-MODE-LABEL-01 · not-confirmed | https://learn.chatgpt.com/docs/agent-approvals-security ; https://learn.chatgpt.com/docs/environments/modes | 연 공식 제품 문서에서 정확한 `plan mode` 현재 명칭은 미확인; 환경 modes 페이지는 Local·Worktree·Cloud를 설명 | Claude `plan`이나 UI 명칭을 Codex 공식 permission/sandbox 계약으로 확대하지 않음 |
| CLAUDE-PLAN-01 · confirmed | https://code.claude.com/docs/en/permissions ; https://code.claude.com/docs/en/permission-modes | permission mode `plan`의 목적은 pre-change exploration; 일반 session은 plan 승인 전 source edit 차단, auto mode available + `useAutoModeDuringPlan`이면 classifier-approved shell command 실행, 그 외 read-only set 밖 명령은 사용자 승인, `bypassPermissions`가 mode cycle에 있으면 edit block이 적용되지 않을 수 있고 시도된 file edit·shell command가 prompt 없이 실행될 수 있음; 실제 version·host·plan·auto availability·setting·bypass cycle·allow/ask/deny·sandbox를 별도 확인 | 절대적인 no-edit·read-only·부작용 부재·OS 격리 또는 Codex mode로 확대하지 않음 |
| CLAUDE-SANDBOX-01 · limited | https://code.claude.com/docs/en/sandboxing | Bash와 자식 process의 OS-level filesystem/network 격리; macOS·Linux·WSL2, fallback·escape hatch·built-in file tool 경계 | 모든 tool·host·secret의 완전 격리로 확대하지 않음 |
| CLAUDE-LABELS-01 · not-confirmed | https://code.claude.com/docs/en/permission-modes ; https://code.claude.com/docs/en/sandboxing | current mode list는 default·acceptEdits·plan·auto·dontAsk·bypassPermissions; 정확한 `workspace-write`·`read-only` 제품 모드 이름은 미확인 | Codex 용어 또는 working-directory write 동작을 Claude의 같은 이름 계약으로 확대하지 않음 |

### 출판과 실행 경계

PBCA-008에 필요한 공식 evidence cluster는 제품별 용어가 다르다는 부정 경계까지 직접 확인됐습니다. 따라서 공개 원고는 영속 권한·승인·sandbox·mode를 먼저 설명하고, Codex와 Claude Code의 날짜 붙은 제품 명칭을 별도 표로 연결할 수 있습니다. PBSG-018의 `confirmed`는 이 제품·문서·날짜 범위에서만 유지하며 제품 간 동의어 판정이나 실제 계정 설정 증거로 확대하지 않습니다.

PBSG-014·PBSG-019·PBSG-020·PBSG-026과 PBCA-007·PBCA-011은 이 조사로 해소되지 않습니다. SITES-ARTIFACT-01·SITES-ROLLBACK-01과 이번에 열지 못한 모든 Vercel 현재 주장은 계속 미확인 경계입니다. 이 fresh check는 제품 채택, account access, 구현, deploy, public URL, rollback 또는 restore 성공의 증거가 아닙니다.
