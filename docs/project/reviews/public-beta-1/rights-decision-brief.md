# RIGHTS-07/08 공개 베타 결정 브리프

확인일: 2026-08-30 · 범위: Task 25 권리 결정 입력 · 현재 판정: RIGHTS-07/08 `owner-cleared`, M7 기술 재확인 대기 · 법률 자문 아님 · push·배포·공개 URL 승인 아님

## 이 문서가 필요한 이유

이 브리프는 이미 검증한 [공개 안전 감사](release-safety-audit.md)와 [출처 지도](../../../../research/source-map.md)의 사실을 새로 해석하거나 권리 허가로 바꾸지 않고, 푸디님의 현재 결정과 결정 전 선택지·검증 계약을 한곳에 보존합니다. 아래 소유자 결정은 현행 검색 구성요소를 유지하는 프로젝트 공개 판단이며, 상류 provenance나 라이선스 해석을 독립적으로 확인된 사실로 바꾸지 않습니다.

프로젝트가 직접 작성·제작했다고 분류한 원고·학습 도표·EDU-FIXTURE의 경위와 제3자 구성요소에 관한 소유자 공개 판단은 [소유자 권리 확인 체크리스트](rights-owner-attestation-checklist.md)에 함께 기록했습니다. 소유자 판단은 아래 제3자 package·Pagefind의 과거 조사 경계를 소급해 독립 법률 확인으로 바꾸지 않습니다.

## 2026-08-30 소유자 결정

선택 경로: Pagefind와 현재 오픈소스 구성요소 유지.

푸디님은 프로젝트 소유자로서 Pagefind 검색 기능과 현재 사이트에 포함된 기존 오픈소스 구성요소를 제거하거나 교체하지 않고 그대로 유지하며, 이 구성요소들이 현재 공개를 막지 않는다고 판단했습니다. 따라서 RIGHTS-07/08의 권리 관련 미선택 상태는 `owner-cleared`로 재판정합니다.

- 외부 권리자 문의를 진행하지 않습니다.
- 유료·전문 법률 검토를 진행하지 않습니다.
- 추가 Rust 재현 빌드를 진행하지 않습니다.
- Pagefind나 핵심 구성요소의 제거·교체를 진행하지 않습니다.
- 아래 과거 조사에서 남긴 exact source·linked/generated 범위·라이선스 조건의 `not-confirmed`는 연구 경계로 보존하며, 소유자 판단을 독립 법률 확인으로 확대하지 않습니다.
- 현행 고지의 정확한 운반과 실제 release candidate의 배포 포함물·검색 기능은 M7 외부 쓰기 직전에 다시 확인합니다.
- 이 결정은 프로젝트 라이선스 변경, push·배포·공개 URL 생성 승인이 아니며 외부 쓰기는 푸디님의 별도 승인을 기다립니다.

## 현재 고정된 사실

- 고정 Pagefind Web Cargo.lock에는 프로젝트 1개와 외부 후보 21개가 있습니다. 외부 후보 21개 모두 전용 archive·evidence·보고서가 있고 archive SHA-256은 lock checksum과 일치합니다.
- Source manifest의 primary 역할은 direct 6, normal transitive 5, host/generated 7, optional/default-inactive 3입니다. `unicode-ident`는 primary normal 경로와 secondary host 경로를 모두 가지며, 이 분류는 실제 과거 feature resolution·host invocation·generated code·linked runtime·Rust std subset의 attestation이 아닙니다.
- 선언 권리 class는 dual MIT/Apache 17, BlueOak 1, GPL-3.0-only 1, MIT 1, dual+Unicode-3.0 1입니다. 현재 공개 고지에서 archive와 byte exact로 운반한 crate 원문은 minicbor 1개입니다.
- Pagefind의 고정 source와 lock은 `pagefind_microjson 0.1.4`를 직접 사용하고, 로컬 WASM에는 같은 공개 함수의 기능 연결이 관찰됩니다. 정확한 0.1.4 VCS commit은 공개 경로에서 확인되지 않았고 package 선언 `GPL-3.0-only`와 source 머리말의 v3-or-later 표현이 일치하지 않습니다. 이 관찰은 정확 build provenance나 법률적 결합 판정이 아닙니다.
- pagefind_stem/Snowball, unicode-ident/Unicode, dual-license 후보의 선택·운반, Rust std의 실제 linked/generated 범위가 남아 있습니다. Source lock 후보 전체를 실제 배포 runtime으로 승격하지 않습니다.
- Pagefind root의 MIT 표기와 minicbor 고지는 다른 crate의 선택·추가 조건·GPL 대응을 대신하지 않습니다. 고지 운반만으로 RIGHTS-07이나 RIGHTS-08을 해소하지 않습니다.

## 결정 순서

RIGHTS-07의 Pagefind 유지 여부를 먼저 결정해야 합니다. RIGHTS-07의 Pagefind 유지 여부가 정해지기 전에는 RIGHTS-08의 대규모 고지 조립이나 재현 빌드를 시작하지 않습니다. Pagefind를 제거한다면 그 배포물과 build graph에서 실제로 사라진 범위를 새로 감사해야 하고, Pagefind를 유지한다면 허락·GPL 준수·정확 source/provenance 중 승인된 경로가 있어야 RIGHTS-08의 세부 고지 범위를 의미 있게 확정할 수 있기 때문입니다.

### 1단계: RIGHTS-07에서 선택할 경로

| 경로 | 의미 | 필요한 별도 승인·입력 | 이 경로만으로 남는 것 |
|---|---|---|---|
| 공개 보류 유지 | 현재 코드와 배포물을 바꾸지 않고 공개 베타를 계속 보류합니다. | 추가 승인은 필요 없지만 공개 완료 일정은 열어 둡니다. | RIGHTS-07/08·Task 25·M6·release candidate가 계속 open입니다. |
| 허락·예외와 정확 소스 | 권리자 또는 권한 있는 상류 주체에게 정확한 0.1.4 source/provenance와 배포 범위를 덮는 명시적 허락·exception을 확인합니다. | 외부 문의·응답 보존·필요한 전문 검토를 별도 승인해야 합니다. | 허락의 당사자·버전·artifact·기간·재배포 조건 밖은 계속 open입니다. |
| GPL 준수 경로 | Pagefind를 유지하면서 GPL v3·Corresponding Source·다른 linked module·프로젝트 라이선스 호환성을 전문 검토한 뒤 승인된 배포 구조를 구현합니다. | 전문 법률·라이선스 검토, 필요한 프로젝트 라이선스 변경, source 제공 구조가 각각 별도 결정입니다. | 전문 검토가 다루지 않은 artifact·버전·배포 방식과 RIGHTS-08은 남습니다. |
| Pagefind 제거·교체 | Pagefind와 관련 build/runtime 산출물을 제거하거나 승인된 검색 대안으로 교체합니다. | Pagefind 또는 핵심 패키지 변경, 새 의존성 도입 가능성, 검색·정보 구조 변화에 대한 별도 승인이 필요합니다. | 새 검색 구현의 권리·접근성·한국어 검색 품질·base path·브라우저 회귀가 새 게이트가 됩니다. |

### 운영상 권장 순서

법률 결론이 아니라 낭비를 줄이는 실행 순서로는 먼저 “공개 베타에 Pagefind 검색이 반드시 필요한가”를 결정하는 것이 적절합니다. 반드시 필요하면 허락·정확 source/provenance 확인과 전문 검토의 범위를 승인한 뒤 유지 경로를 검증하고, 필수가 아니면 제거·교체 범위와 검색 수용 기준을 승인하는 편이 RIGHTS-08의 불필요한 대규모 고지 작업을 줄입니다. 어떤 경로도 결정하지 않는 동안에는 공개 보류 유지를 기본 상태로 둡니다.

### 2단계: Pagefind를 유지할 때 RIGHTS-08에서 선택할 경로

| 경로 | 의미 | 필요한 별도 승인·입력 | 해소로 인정하지 않는 것 |
|---|---|---|---|
| 보수적 고지 패키지 | 확인한 archive와 source의 원 라이선스·Snowball·Unicode·Rust 공지를 후보별로 운반하고, primary/secondary/optional 역할과 실제 포함 미확인을 함께 표시합니다. | dual 식의 적용 방식과 고지 범위에 대한 전문 검토 또는 명시 결정이 필요합니다. | 후보 고지를 모두 싣는 것만으로 actual linked/generated 범위나 GPL 호환성이 증명되지는 않습니다. |
| 정확 Rust 재현 범위 좁히기 | 확인한 rustc nightly·Cargo.lock·고정 source를 사용해 feature closure, host/generated 단계, Rust std subset과 WASM 차이를 재현 가능한 범위에서 좁힙니다. | 고정 Rust toolchain·component 설치와 필요한 source 복원·빌드 실행을 별도 승인해야 합니다. | 산출물 hash가 다르거나 원 build 조건이 재현되지 않으면 실제 배포 provenance로 승격하지 않습니다. |
| 전문 artifact 범위 검토 | 현재 source graph·WASM producers·문자열·archive와 배포 구조를 전문 검토에 제공해 어떤 원문·조건을 실제로 운반할지 결정합니다. | 검토자·자료 전달 범위·비용·외부 업로드 여부를 각각 승인해야 합니다. | 검토 범위 밖 후보와 새 artifact는 계속 not-confirmed입니다. |

보수적 고지와 재현 범위 좁히기는 함께 사용할 수 있지만 서로를 대체하지 않습니다. 고지 후보를 넓게 운반하는 것은 누락 위험을 낮출 수 있어도 정확한 권리 선택이나 source-to-artifact attestation은 아니며, 재현 빌드는 실제 artifact와 조건이 일치할 때만 범위를 좁히는 증거가 됩니다.

## 경로별 검증 계약

### 허락·예외 경로 검증

- 허락을 제공한 주체의 권한, 정확 package·버전·source commit·artifact·배포 방식·기간·재배포 조건을 문서로 확인합니다.
- 현재 `pagefind_microjson 0.1.4` archive·lock checksum·Pagefind 고정 commit과 허락 범위가 정확히 대응하는지 독립 대조합니다.
- 허락 문구를 일반적인 Pagefind 사용 허가나 다른 버전의 허가로 확대하지 않습니다.

### GPL 준수 경로 검증

- 전문 검토의 질문·대상 artifact·결론·가정·제외 범위를 보존합니다.
- 승인된 해석에 필요한 Corresponding Source, build/install script, license·notice, 제공 방식과 유효 기간을 실제 release candidate와 대조합니다.
- 프로젝트 라이선스나 공개 배포 구조가 바뀌면 별도 사용자 승인과 전체 관련 문서·release 검사·브라우저 검증을 다시 수행합니다.

### 제거·교체 경로 검증

- package/lock, build script, 생성 `pagefind` 디렉터리, JavaScript·CSS·WASM, 고지와 workflow에서 Pagefind 잔존을 검색하고 실제 build output까지 0건인지 확인합니다.
- 새 검색 또는 검색 제거가 59개 문서·13장 Build Track·한국어/영문/약어/오류 문장 검색, 키보드 접근성, root/subpath, 404·내비게이션에 미치는 영향을 자동 검사와 실제 headed Chrome으로 검증합니다.
- 새 의존성·프레임워크·정보 구조를 도입한다면 기존 승인 범위를 넘어가므로 구현 전에 별도 승인을 받습니다.

### 보수적 고지 경로 검증

- 각 고지 구획을 exact archive license/source notice와 SHA-256으로 대조하고 시작·끝 표식, 중복·누락, 정본과 build output의 byte 일치를 검사합니다.
- primary·secondary·optional 후보와 실제 linked/generated 미확인을 고지 설명에서 구분하고, Pagefind root MIT가 전이 권리를 대신한다고 쓰지 않습니다.
- 고지 추가 뒤 공개 안전 검사·정적 검사·build와 localhost의 `third-party-notices.txt` HTTP·content-type·byte를 확인하되, 고지 운반 PASS를 RIGHTS-07/08 PASS로 기록하지 않습니다.

### 재현 범위 경로 검증

- 정확 rustc full SHA·nightly manifest·target/component, Cargo.lock, source archive checksum, build script와 feature·환경·`--locked` 여부를 입력 manifest로 고정합니다.
- cargo metadata/tree, host build·macro/generated 단계, Rust std build subset, WASM producers와 최종 artifact hash를 기록합니다.
- 현재 배포 WASM과 byte exact하지 않으면 차이를 보존하고 actual build provenance로 주장하지 않으며, 설치·빌드로 기존 정본 artifact를 덮어쓰지 않습니다.

## 결정 전 확인 항목 기록

아래 항목은 소유자 결정 전 비교 질문의 역사 기록입니다. 현재 선택은 Pagefind와 현행 오픈소스 구성요소 유지이며, 외부 문의·유료 또는 전문 법률 검토·추가 Rust 재현 빌드·제거 또는 교체는 진행하지 않습니다.

1. 공개 베타에 Pagefind 검색을 유지할지, 제거·교체 검토가 가능한지를 비교했습니다.
2. Pagefind 유지 시 정확 0.1.4 source/provenance와 허락·exception을 위한 외부 문의 승인 여부를 검토했습니다.
3. GPL 준수·프로젝트 라이선스 호환성·실제 artifact 범위를 위한 전문 검토 승인 여부를 검토했습니다.
4. 전문 검토가 요구할 경우 고정 Rust toolchain/component 설치와 재현 빌드 범위를 승인할지 검토했습니다.
5. 결론 전에 후보 누락 위험을 줄이는 보수적 고지 패키지 설계만 먼저 허용할지 검토했습니다.

결정 전 기본 상태였던 공개 보류는 2026-08-30 소유자 결정으로 해소됐습니다. RIGHTS-07/08은 소유자 공개 판단 범위에서 `owner-cleared`이며, `not-confirmed` 연구 경계와 M7 외부 쓰기 직전 기술 고지·배포·검색 재확인은 남습니다. 이 결정 단위의 Fix Round 1 독립 검토는 Critical 0·Important 0·Minor 0으로 PASS했습니다. Task 25 closeout, M6, `ready`, Claude 검토, release candidate, 원격 검증, push·배포·공개 URL 생성은 아직 완료되지 않았습니다.
