# Task25 공개 안전 감사 체크포인트

확인일: 2026-08-30 · Task25 dedicated closeout PASS(C0/I0/M0) · 상태: `implementation verified / Claude review pending` · push·배포·공개 URL 승인 아님

## 2026-08-30 소유자 권리 판정과 현행 구성요소 유지 결정

푸디님은 프로젝트 소유자로서 핸드북의 원고·표·도표·교육용 예시 데이터·직접 제작 자산에 공개를 막을 저작권·비공개 정보·제3자 권리 문제가 없고, Pagefind·아이콘·CSS/SVG·기타 기존 오픈소스 구성요소도 제거하거나 교체하지 않고 그대로 유지해 공개하는 데 문제가 없다고 확인했습니다. 17개 질문의 답변과 예외 없음 기록은 [소유자 권리 확인 체크리스트](rights-owner-attestation-checklist.md)에 보존합니다.

| Finding | 2026-08-30 현재 판정 | 남은 경계 |
|---|---|---|
| RIGHTS-01 | `owner-confirmed` — 원고·표·템플릿·인용 경위에 보고된 예외 없음 | 새 원고·출처·기여자 변경 시 재확인 |
| RIGHTS-02 | `owner-confirmed` — 직접 제작 학습 도표·자산에 보고된 예외 없음 | 새 자산·외부 시각 자료 도입 시 재확인 |
| RIGHTS-03 | `owner-cleared` — 현행 제3자 UI 포함물 유지 | M7 외부 쓰기 직전 실제 release candidate의 포함물·고지 재확인 |
| RIGHTS-04 | `owner-cleared` — 현행 아이콘·CSS/SVG·고지 유지 | M7 외부 쓰기 직전 고지 byte·배포 운반 재확인 |
| RIGHTS-05 | `owner-confirmed` — EDU-FIXTURE·비공개 정보 경위에 보고된 예외 없음 | 실제 데이터나 외부 데이터 도입 시 별도 권리 확인 |
| RIGHTS-06 | `owner-confirmed` — 제품 식별·제휴 오인 방지와 남은 게이트 인지 | 내용·표시·공개 범위 변경 시 재확인 |
| RIGHTS-07 | `owner-cleared` — Pagefind 검색 기능과 현행 오픈소스 구성요소 유지 | M7 외부 쓰기 직전 실제 배포 범위·기술 고지·검색 기능 재확인 |
| RIGHTS-08 | `owner-cleared` — 현행 crate·generated 구성요소 유지 | M7 외부 쓰기 직전 실제 release candidate에 운반되는 기술 고지 재확인 |

이 판정은 프로젝트 소유자의 공개 판단입니다. 아래 과거 `open` 기록은 당시 조사와 결정 전 상태의 역사적 사실로 보존하고 소급해 삭제하거나 `verified`로 다시 쓰지 않습니다. Source·archive·linked/generated·기여 경위에 남긴 `not-confirmed` 역시 연구 한계로 유지하며, 이번 소유자 확인을 독립적으로 확인된 법률 결론이나 상류 provenance 증명으로 확대하지 않습니다.

외부 권리자 문의, 유료·전문 법률 검토, 추가 권리 조사·Rust 재현 빌드, 구성요소 제거·교체는 현재 진행하지 않습니다. 기술적 고지·배포 확인은 M7 외부 쓰기 직전에 실제 release candidate를 대상으로 다시 수행합니다. 이 소유자 결정은 권리 관련 미선택 상태를 해소했고, 최초 독립 검토의 Important 1건은 현재 결정과 충돌하던 역사 질문의 제목·시제를 고쳐 해소했으며 Fix Round 1은 Critical 0·Important 0·Minor 0으로 PASS했습니다. M6 전체·`ready`·Claude 검토·release candidate·원격 검증·push·배포·공개 URL 생성은 별도 게이트이며 푸디님의 별도 승인 전에는 외부 쓰기를 수행하지 않습니다.

## 2026-08-30 Task25 dedicated closeout

Exact HEAD `c6a2ffabc0628e5d48810b21e0a1c0dd1bd1087d`·tree `2357166fffd520dd105819e669a29c7432c5d4fc`에서 closeout 계약 10/10, 공개 안전 focused 38/38, 전체 정적 122/122, 콘텐츠 59, 참조 163+학습 SVG 14, 계획 100점·공개 문서 59개·중복 0·누락 0, 공개 안전 tracked/scanned 227·forbidden 0·binary 0·finding 0을 확인했습니다. 첫 closeout 계약의 9/10 실패는 현재 판정 표 아래의 역사 `open` 문장까지 현재 미판정으로 오인한 하네스 범위 오류였고, 표만 파싱하도록 고친 계약은 10/10·실패 0·exit 0입니다.

첫 전체 check는 exact 사본의 `node_modules` 심볼릭 링크가 Astro/Vite compile metadata 경로를 원 worktree와 임시 경로로 이중 해석해 정적 검사 뒤 build exit 1이었습니다. 후보 코드나 원고는 바꾸지 않고 같은 설치본을 실제 디렉터리로 복사한 exact 사본에서 build를 fresh 재실행해 HTML 60·최적화 SVG 14·Pagefind HTML 60을 생성했고, built-output 검사는 일반 본문 리터럴 Markdown 0·정본/빌드 고지 byte 동일로 exit 0입니다. 화면 입력이 바뀌지 않아 브라우저 검증은 반복하지 않았습니다.

독립 패키지 검토는 공개 안전 검사기·38개 회귀·고지 운반·RIGHTS-01~08 현재 판정·과거 `open`/`not-confirmed` 역사·새 root snapshot 전략을 대조해 Critical 0·Important 0·Minor 0 `PASS`, Task 25 단독 close 가능으로 판정했습니다. 이에 Task 25는 `done / implementation verified / Claude review pending`으로 닫습니다. 이 closeout은 M6 전체, M5·`ready`, 최종 release/publication 소유자 승인, canonical RC, 원격 CI, 새 공개 root snapshot, push·배포·공개 URL 완료가 아니며 M7 외부 쓰기 직전에 실제 canonical RC의 고지 byte·배포 운반·Pagefind 검색 포함물을 다시 확인합니다.

## 고정 crate 원문 후속: Important 미해결 2건

승인된 읽기 전용 조사에서 source-lock 후보21개의 선언과39개 고지 파일, 소스 내부 추가 고지와 Rust 원문을 확인했습니다. 이는21개 모두 실제 WASM에 포함됐다는 목록이나 독립 검토가 아닙니다. 기존 RIGHTS-01~06을 유지하고 아래 자체 조사 finding을 추가합니다.

| ID·상태 | 직접 확인한 근거 | 해소 기준 |
|---|---|---|
| RIGHTS-07 · Important/open | [pagefind_microjson0.1.4 Cargo 원본](https://docs.rs/crate/pagefind_microjson/0.1.4/source/Cargo.toml.orig)·정규화본은 GPL-3.0-only, LICENCE는 GPL v3이며 [src/lib.rs](https://docs.rs/crate/pagefind_microjson/0.1.4/source/src/lib.rs) 주석은 v3 또는 이후 버전으로 불일치. [고정 Pagefind WASM 소스](https://github.com/Pagefind/pagefind/blob/bf17396721be637cc67c8ed7ead1dc7b8ac43d96/pagefind_web/src/lib.rs)의 JSONValue import·parse 사용과 실제 WASM의 set_ranking_weights export를 확인 | 실제 바이너리/소스·별도 권리/버전 범위와 배포 대상의 조건, 필요한 고지·대응 소스 제공 경로를 해소하거나 별도로 승인된 대안을 확인. 단순 MIT 고지 추가로 닫지 않으며 프로젝트 전체가 자동 GPL이라고도 단정하지 않음 |
| RIGHTS-08 · Important/open | minicbor2.2.1은 BlueOak-1.0.0, unicode-ident1.0.24는 (MIT OR Apache-2.0) AND Unicode-3.0. pagefind_stem1.0.0 src/lib.rs에는 package MIT 외 Snowball3조건 고지가 존재. Rust COPYRIGHT는 파일별 예외와 COPYRIGHT-library.html의 별도 범위를 설명 | 실제 linked/generated 범위와 원 고지·표준 라이브러리 부분 조건을 확인한 뒤 필요한 고지만 승인된 배포 방식에 반영·검증. source-lock 후보 전체를 runtime으로 승격하지 않음 |

crate-license-sources70파일과 task-25-crate-license-report.md/evidence.json에 URL·본문·지문·확인/실패 경계를 보존합니다. crates.io API403은 승인된 재시도도 실패했고 registry checksum은 미확인입니다. microjson의 선언된 upstream/vcs 연결과 Rust 짧은 SHA의 git-commit API는404였으며 성공한 고정 raw source 조회로 대체 판정하지 않습니다. Docs.rs 표시 원문을 추출했으며 registry archive byte 증명이 아닙니다. source copy69개는 기록한 최종 LF 추가 외 동일, minicbor LICENSE의 마지막 빈 줄1개 정규화는 별도 기록했습니다. 공개 고지·패키지·프로젝트 라이선스·원고·자산·dist는 변경하지 않았습니다. 필요한 대응이 정해지기 전 Task25·권리/RC/ready·공개를 닫지 않습니다. 최종 문서 검사·입력 지문은 ignored resume-checkpoint-2026-08-28-crates.json으로 이어갑니다.

## 2026-08-30 RIGHTS-07 소스-산출물 연결 후속: Important/open 유지

고정 Pagefind의 `pagefind_web/Cargo.toml`·Cargo.lock은 `pagefind_microjson 0.1.4`를 직접 의존성·checksum으로 고정하고, `src/lib.rs`의 `set_ranking_weights`는 `JSONValue::parse`와 접근자를 실제 호출합니다. 로컬 배포 `wasm.unknown.pagefind`는 gzip 해제 뒤 `pagefind_dcd`12bytes와 유효 WebAssembly로 구성되며 같은 `set_ranking_weights` 함수 export를 포함합니다. 이는 소스-산출물 기능 연결을 강화하지만 binary attestation·정확 build source·microjson 함수 바이트 재현은 아닙니다. 바이너리 문자열에는 `minicbor-2.2.1`·`wasm-bindgen-0.2.117` 경로만 남고 microjson 이름은 남지 않습니다.

이전 기록의 “upstream/vcs 연결404”는 선언 upstream 저장소 자체와 정확 VCS SHA를 구분해 교정합니다. `rspencer01/microjson` 공개 저장소는 접근 가능하고 현재 master도 Cargo `GPL-3.0-only`·GPL v3 전문·소스 v3-or-later 표기를 유지하지만, 0.1.4가 선언한 commit `51e27c165e26c7125666403b796fb5d8564a8be5`의 commit/API/raw 경로는 계속404이며 공개 head3개·tag0개에서 정확 lineage를 확인하지 못했습니다. 현재 master를 0.1.4 source나 별도 허락으로 대체하지 않습니다.

[Pagefind changelog](https://github.com/Pagefind/pagefind/blob/bf17396721be637cc67c8ed7ead1dc7b8ac43d96/CHANGELOG.md)와 [issue #421](https://github.com/Pagefind/pagefind/issues/421)은 git dependency를 registry crate로 바꾼 사실만 확인하며 추가 허락을 제시하지 않습니다. 검토한 고정 Cargo.toml·Cargo.lock·lib.rs·Pagefind root MIT·changelog·issue에서 microjson용 linking exception을 확인하지 못했습니다. [GNU GPL v3 section6](https://www.gnu.org/licenses/gpl-3.0.html)와 [FSF FAQ](https://www.gnu.org/licenses/gpl-faq.html)는 object code의 대응 소스와 GPL 라이브러리 결합·웹 전달에 관한 준수 참고지만, 이 프로젝트의 파생저작물·aggregate 범위를 확정하는 법률 자문으로 사용하지 않습니다.

따라서 RIGHTS-07은 `Important/open`입니다. 해소하려면 권리자의 명시적 허락·exception과 정확 source/provenance를 확인하거나, GPL v3·complete corresponding source·다른 linked module 및 프로젝트 라이선스 호환성을 전문 검토한 승인된 배포 경로를 구현하거나, 별도 승인된 Pagefind 제거·교체 대안을 선택해야 합니다. `public/third-party-notices.txt`에 GPL 전문만 추가하는 것으로 닫지 않으며 이번 단위에서는 프로젝트 라이선스·핵심 패키지·runtime·dist·고지를 바꾸지 않습니다.

## 2026-08-30 RIGHTS-08 linked/generated 범위 후속: Important/open 유지

고정 Pagefind의 `metadata.rs`·`index.rs`·`filter_index.rs`는 `minicbor::Decoder`를 실제 decode 경로에서 사용하고, 로컬 `wasm.unknown.pagefind` 문자열에는 정확한 `minicbor-2.2.1/src/decode/decoder.rs` registry 경로가 남습니다. 이는 BlueOak-1.0.0 구성요소의 source-to-artifact 연결을 강화하며, 원 라이선스가 요구하는 text 또는 공식 링크의 배포 운반 후보를 확인합니다. 다만 upstream binary attestation·정확 함수 바이트 재현이나 다른 RIGHTS finding의 해소는 아닙니다.

배포 `dist/pagefind`에는 generic `wasm.unknown.pagefind` 한 개만 있고 언어별 WASM은 없습니다. [Pagefind build script](https://github.com/Pagefind/pagefind/blob/bf17396721be637cc67c8ed7ead1dc7b8ac43d96/pagefind_web/local_build.sh)는 generic을 feature 없이 먼저 만들고 언어별 파일만 feature를 켭니다. `pagefind_web/search.rs`는 `Stemmer::try_create_default`를 호출합니다. crate 1.0.0 manifest에는 language feature만 있고 default feature가 없으며, `.cargo_vcs_info.json`이 `dirty: true`로 가리키는 [선언 VCS base](https://github.com/Pagefind/pagefind/blob/eb1a6711c45c78d9b536fad167650a79f9a97a5c/pagefind_stem/src/snowball/algorithms/mod.rs)에서도 모든 알고리즘 모듈·반환 경로가 language feature 조건이고 feature가 없으면 `None`입니다. 이 commit을 crate 1.0.0의 byte-exact source로 대체하지 않습니다. 실제 WASM 문자열에도 pagefind_stem·Snowball·알고리즘 오류 문구는 없습니다. 따라서 언어별 Snowball 알고리즘의 generic 배포 포함을 source lock만으로 주장하지 않으며, wrapper 일부의 LTO 뒤 byte 귀속·고지 적용 범위는 계속 not-confirmed입니다.

`unicode-ident 1.0.24`는 고정 lock에서 `proc-macro2`·`syn`뿐 아니라 `wasm-bindgen-shared 0.2.117`의 정상 의존성으로도 연결되며, shared의 identifier source는 두 XID 함수를 직접 호출합니다. Pagefind runtime source의 직접 import는 없습니다. source 의존·macro 실행·생성 glue를 원 crate 코드·Unicode data의 WASM 재배포로 등치하지 않으며 artifact-level copy 범위를 확인하기 전에는 Unicode-3.0 고지를 source-lock 전체에서 runtime 고지로 승격하지 않습니다.

WASM producers의 `rustc 1.97.0-nightly (bf4fbfb7a 2026-04-11)`은 [full commit](https://github.com/rust-lang/rust/commit/bf4fbfb7a18d74e7cd8eef93af7329c58fbb5344)과 2026-04-12 공식 nightly manifest의 같은 버전·full SHA로 연결했습니다. 2026-04-11 manifest는 아직 다른 `1.96.0-nightly`이므로 compiler commit 날짜와 channel 배포일을 분리합니다. 공식 2026-04-12 rust-src와 wasm32 rust-std archive hash를 manifest 값과 일치시켰고 rust-std 패키지는 root COPYRIGHT·MIT·Apache 세 파일만 운반하며 보존본과 byte가 같습니다. Rust COPYRIGHT가 가리키는 library subset 상세 `COPYRIGHT-library.html`은 해당 두 archive에 없고, 실제 build script도 날짜 pin·`--locked`가 없어 producers만으로 사용 rust-src·feature closure를 attest하지 않습니다.

따라서 RIGHTS-08은 `Important/open`입니다. 다음 구현 후보는 확인된 minicbor Blue Oak 원문 또는 공식 링크를 기존 고지 운반 계약에 추가하고 byte 검증하는 좁은 단위입니다. pagefind_stem/Snowball·unicode-ident·Rust std는 위 linked/generated 경계를 더 확인하거나 전문 검토한 보수적 고지 집합을 승인하기 전까지 resolved 처리하지 않습니다. 이번 단위에서는 `public/third-party-notices.txt`·프로젝트 라이선스·패키지·runtime·dist를 바꾸지 않습니다.

## 2026-08-30 minicbor Blue Oak 고지 운반: 부분 구현, RIGHTS-08 open 유지

확인된 `minicbor 2.2.1`의 Blue Oak Model License 1.0.0 전문과 공식 원문·라이선스 링크를 `public/third-party-notices.txt`의 Pagefind 구획 뒤에 추가했습니다. 구획 안 원문 SHA-256 `8a1af140fdfbf5afd3df27f7e662f989c5b963a300020dfafce42033cae9e004`는 보존한 원문과 일치하며, 새 회귀는 시작·끝 표식 각각 1회, 정확 원문 hash, 공식 링크, `RIGHTS-08 전체 해소가 아닙니다` 경계를 확인합니다. 구현 전 시작 표식 부재로 focused 0/2 RED를 확인했고 구현 뒤 2/2, 전체 static 118/118, 콘텐츠 59, 참조 178+SVG14, 계획 100/59/0/0, build HTML/Pagefind 60, built notice byte 동일, 공개 안전 finding 0으로 통과했습니다.

정본과 빌드 고지는 각각 SHA-256 `b1044f8dd91534b839d6735101e117da935e2cc9743f8fa854a3a22c0e4e1fbd`로 같습니다. 이 부분 구현은 minicbor 고지 운반만 보강하며 pagefind_stem/Snowball·unicode-ident·Rust std의 linked/generated 범위, RIGHTS-07, RIGHTS-08 전체, 프로젝트 라이선스 호환성, Task25 closeout을 해소하지 않습니다. 원고·런타임 코드·Pagefind 패키지·시각 자산은 바꾸지 않았고 화면 입력이 불변이므로 Chrome 검증은 반복하지 않았습니다.

## 2026-08-30 RIGHTS-01 구체 기록 분류 후보: 해당 위치 해소, 전체 open 유지

`debugging-observability.md`의 staging 시각·테스트 계정·화면 결과가 들어간 진단 기록은 실제 사건처럼 읽힐 수 있었지만, 주변 문맥만으로는 저장소 내부 가상 사례인지 명시되지 않았습니다. 코드 블록 앞을 `다음 가상 예시처럼`으로 좁게 고쳐 실제 서비스·계정·사건 관찰을 주장하지 않는 교육용 입력임을 명확히 했습니다. 이 한 위치의 표시 후보만 해소하며 외부 장문·표·도표 전수 원전 대조, 기여 권리, 다른 RIGHTS finding과 RIGHTS-01 전체는 계속 open입니다.

## 현재 파일 검사와 좁은 교정

`scripts/validate-public-release.mjs`는 git ls-files -z의 tracked 파일만 순차 검사하고 값 대신 파일·규칙·행만 출력합니다. 비밀 패턴·개인 home 경로·불필요한 실행 메타데이터를 제한적으로 탐지하며 가상 예시는 매치별로 허용합니다. 민감 파일명·symlink·비정상 파일을 따라 읽지 않고 차단하고 binary는 건너뜀으로 보고합니다. 알려지지 않은 비밀·개인정보·binary 내부·검사 중 적대적 파일 교체·권리 판단을 완전히 보증하는 검사는 아닙니다.

최초 모듈 부재 RED, 경계 테스트 RED/GREEN, 실제 오탐 교정 후37/37 GREEN을 거쳤습니다. 최종 Node22 전체108테스트에도 포함돼 통과했습니다. CLI 실패는 finding1/root조회2로 구분하고 실제 값이 출력되지 않는 경계를 테스트했습니다.

첫 tracked206개 검사에서는21건(exit1)이 나왔습니다. 실제18건은 역사 검토 문서7개의 세션 ID9개·정확 비용9개였고 각각 redacted-session-id/redacted-execution-cost 표식으로만 치환했습니다. 나머지3개는 공식 ISO URL 안의 Users 경로2개와 검색 정규식1개를 home 경로로 오인한 것이므로 원문을 바꾸지 않고 검사기에 실패 테스트를 추가했습니다. 파일별사전SHA·정확행·예상건수·다른줄불변 확인 뒤 기계 치환했으며 모델·effort·exit·입력해시·finding 본문은 보존했습니다.

변경 후 tracked206개·text206개·binary0·finding0으로 exit0이고 Node22.16.0/npm10.9.2 최종 validate:release도 같은 결과입니다. 당시 신규 untracked27개를 별도 검사해 검토 입력 원장의 개인 절대 경로1건을 추가 발견했습니다. 원 요청 본문 전체는 ignored 작업 입력 사본으로 보존하고 공개 입력 원장에서는 개인 home 경로 대신 이 상대 경로와 원본·사본의 해시 및 마지막 LF 차이를 기록합니다. 이후 Task21/24/25/26 기록까지 포함한 신규35개를 별도 예정파일 검사로 확인해 text35·finding0, 입력16단위 해시 불일치0, exit0을 확인했습니다. 신규 파일은 tracked CLI 범위가 아니므로 두 결과를 분리합니다. 검사 뒤 원장 문구·해시 변경은 마지막 체크포인트 검사로 다시 확인하며 stage는 하지 않습니다.

## Git 이력과 공개 snapshot

값을 출력하지 않는 스트리밍 이력 검사에서 로컬 전체 ref의157개 commit, 고유 author email1개·GitHub noreply1개·그 외0개를 확인했습니다. 원문 이메일은 보고하지 않습니다. 역사 patch의 단순 패턴 등장 수는 home8·임시경로9·session표시10·cost표시10·Anthropic/GitHub token prefix각1·private-key header1입니다. 테스트 예시·계획 문구도 포함하므로 이 숫자를 실제 유효한 비밀의 개수로 해석하지 않습니다.

전체 개발 이력은 로컬에 보존하며 기존 commit을 rewrite/reset/delete하지 않았습니다. M6에서 clean canonical RC가 검증되고 M7 외부 대상·저자 승인을 받은 뒤 그 tree와 같은 새 root snapshot만 공개한다는 기존 전략을 유지합니다. root commit·공개 branch·push는 아직 만들거나 실행하지 않았습니다. 현재 준비 파일이나 이전 HEAD를 승인된 RC tree로 지정하지 않습니다.

## 권리·배포물 경계

권리 자체 감사는 공개59원고의 위험 후보, 편집 가능한 SVG14/MMD14와 favicon, EDU-FIXTURE·제품 식별·제3자 제외·의존성 고지를 대조했습니다. 직접 읽은 범위·원고별 지문과 미대조 경계는 ignored task-25-rights-inventory.md에 기록합니다. 외부원문과의 표현/표/도표 전수대조·기여자 권리·이용 허락은 기계검색이나 파일 구조로 증명하지 않습니다.

최초 직접 열람 범위는42원고 전문·17원고 발췌였습니다. 후속으로 기존 작성 담당 Codex가 나머지17개에서 이전341행을 제외한4,875행을 읽어 총5,216행의 범위를 완성했습니다. 기존42개 전문 기록과 합친 누적 수동 열람은59원고 전문이며, 부모가 범위 누락·중복0행과 원고59개 현행 해시 일치를 확인했습니다. 이는 외부 원전 전수 대조나 독립 검토가 아닙니다. 별도 ignored task-25-rights-remaining-17-report.md에는 정확한 구간·EOF·SHA와 원전 미대조 경계를 남겼으며 기존 인벤토리는 수정하지 않았습니다.

data-model-schema-migration의 Parallel Change 교육용 재구성은 원전 비교 후보, debugging-observability의 구체 로그는 가상 예시 표시 확인 후보로 남겼습니다. 추가 R17-C01은 adr-and-tradeoffs의 원형 기반 필드·표·템플릿 대조 후보입니다. 해당 ADR 원고에는 원전 출처와 핸드북 확장 필드 구분이 있으므로 출처 누락·침해로 판정하지 않습니다. 기존 RIGHTS-01~06과 후보는 모두 미종결이며 복제·침해·실제 자료 사용을 확정하거나 후보만을 이유로 원고를 변경하지 않았습니다.

고지 전달 후속 전의 생성 dist171파일에는 별도 LICENSE/NOTICE 파일이나 프로젝트 CC BY 링크가 없고 pagefind-highlight.js에는 mark.js의 짧은 저작권·MIT 링크 고지1개가 있었습니다. 따라서 고지가 전혀 없다고 하지 않으며, 이 관찰은 아래 별도 고지 파일을 추가하기 전 기준선입니다.

2026-08-28 사용자 후속 승인에 따라 CloudCannon/pagefind의 공식 라이선스·소스만 읽기 전용으로 조회했습니다. 현재 Pagefind/pagefind로 연결되는 같은 저장소이며 v1.5.2 commit `bf17396721be637cc67c8ed7ead1dc7b8ac43d96`의 루트 MIT 전문과 default-ui의 MIT 선언을 확인했습니다. 설치된 default-ui1.5.2와 원본 package.json은 version만 다르고 release workflow는 버전 치환 뒤 build/pack을 정의합니다. workflow의 checkout은 main이므로 이 소스 열람을 실제 배포 실행·registry provenance·빌드 재현 증거로 확대하지 않습니다. Node wrapper의 Pagefind/Microsoft 고지 두 파일은 설치본과 원문 SHA가 각각 일치합니다. [출처 지도](../../../../research/source-map.md)의 해당 확인과 ignored task-25-pagefind-source-report.md에 원문6개·수집 경계·지문을 기록했습니다.

RIGHTS-04 중 공식 MIT 원문 미확인 부분은 이번 근거로 해소했습니다. 설치 default-ui14파일에 별도 LICENSE가 없는 관찰은 그대로이며, 배포본별 포함물·고지 운반 검증은 남아 RIGHTS-04 전체와 RIGHTS-03은 미종결입니다. 실제 dist171파일의 고지 파일명 부재를 재확인했고 배포물은 변경하지 않았습니다. 이 확인은 다른 전이 의존성·mark.js의 원전 대조나 RIGHTS-01/02/05/06, 필수 Claude·소유자 승인까지 닫지 않습니다.

같은 날 다음 승인 범위에서는 dist171파일의 JavaScript13·CSS6·HTML60·압축 WASM1과 나머지 파일을 로컬 설치 소스·공식 v1.5.2 소스에 대조했습니다. Starlight inline script와12개 이름의 icon path, Astro prefetch, Vite8.2.0 preload helper, Expressive Code0.44.1 JS/CSS, Pagefind UI·Svelte4 표식·bcp 계열 코드·mark.js8.11.1 고지를 확인했습니다. Svelte4.2.20·bcp-472.1.0·is-*2.0.1은 공식 source lock의 버전 근거이며 번들 자체의 완전한 patch 버전·재현 빌드 증명과 구분합니다. Night Owl dark/light JSONC의 Sarah Drasner MIT 전문도 확인했습니다. 원본 해시·구간·포함 수준은 ignored task-25-distribution-inventory-report.md와 evidence.json에 보존합니다.

`public/third-party-notices.txt`는 확인된 원 고지를 전문으로 전달하는 부분 집합입니다. Astro의 SvelteKit·Vite 유래 부분 고지, Starlight·Expressive Code·실제 Vite helper core, Pagefind root·Svelte·mark.js·bcp 계열·Night Owl 원문을 유지하며 wrapper/Microsoft를 브라우저 포함물로 선언하지 않습니다. `validate:built`의 원본 존재·비어 있지 않음·빌드본 byte 일치 검사는 전달 실패를 막는 기능이며 전체 권리 PASS가 아닙니다. 원문 추출·출력 구간·지문은 ignored task-25-notice-transport-evidence.json에 기록합니다.

남은 배포물 경계는 WASM의 실제 linked crate/feature·고지 연쇄, HTML 아이콘과 CSS data SVG의 최초 원전·권리, adequate-little-templates의 실제 링크 구간, registry provenance입니다. adequate1.0.2의 공식 원 고지는 확보했지만 포함이 확정된 항목으로 승격하지 않았습니다. 이번 고지 집합이나 설치 lock의 라이선스 문자열만으로 이러한 경계를 해소하지 않으며 RIGHTS-03/04 전체·RIGHTS-01/02/05/06·필수 검토·공개 승인은 여전히 대기입니다.

standalone default UI CSS의 byte 차이는 후속 로컬 대조로 설명했습니다. 설치16,069bytes와 배포14,482bytes는 PostCSS 구조의 상위72개 노드가 대응하며 raw/comment 외 차이는31개였습니다. 이미 보존한 공식 build.js는 vendor에만 minify:true를 지정합니다. 설치된 esbuild0.28.1로 CSS 한 파일을 메모리에서 압축한 결과가 실제 배포본과14,482bytes 전체·SHA e113b816110ed07b017613e901addfe635350f2a5b84990aa76c91a74b158084까지 일치하고 warning0/exit0이었습니다. 실제 상류 실행·전체 번들·registry 출처 증명이 아니며 dist·고지는 변경하지 않았습니다. ignored task-25-css-minification-report.md와 evidence.json에31개 차이·정확 명령 조건·한계를 보존하고 최종 문서 검증은 resume-checkpoint-2026-08-28-css.json으로 연결합니다.

같은 날 원전 연결 후속에서는 Pagefind 루트 workspace가 pagefind_web을 제외한다는 사실을 확인하고 별도 pagefind_web/Cargo.lock의22개 package block(프로젝트1·외부21)을 보존했습니다. 이는 source resolution 후보이지 전부 실제 WASM에 포함됐다는 뜻이 아닙니다. 바이너리를 실행하지 않고 producers section을 읽어 rustc 1.97.0-nightly (bf4fbfb7a 2026-04-11), walrus0.26.1, wasm-bindgen0.2.117 (fb403cfef)을 관찰했으며 마지막 버전은 별도 lock과 일치합니다. nightly 날짜·--locked가 고정되지 않은 source build script와 workflow만으로 정확한 실제 build/feature·Rust std·crate 고지 연쇄를 확정하지 않습니다.

CSS data SVG15회·원문10개는 모두 직접 소스와 연결했습니다. 고정 Pagefind commit의 component CSS41,830bytes는 dist 파일 전체와 같고 default Svelte16,473bytes는 설치본과 같습니다. Starlight 최적화·link 통합 commit2개도 확인했지만 최초 원작자·이전 라이선스는 밝히지 않습니다. 모양 유사성이나 패키지 MIT 표기만으로 아이콘 권리를 확정하지 않았고 원 고지 집합·원고·그림·CSS·dist는 변경하지 않았습니다. ignored task-25-wasm-input-report.md, task-25-icon-origin-report.md와 각 evidence.json·distribution-followup-sources에 새 원문8개·수집 실패/성공·지문을 보존합니다. 이 후속의 최종 문서 검사·입력 해시는 resume-checkpoint-2026-08-28-origin.json에서 확인하며 기존 빌드·브라우저 증거와 구분합니다.

부모의 새 통합 검증은 Node22 `npm run check` exit0·115/115테스트·콘텐츠59·참조178+SVG14·계획100/59/0/0·HTML/Pagefind60입니다. 원문15구간은9개 고지 구획에서 byte 일치하고 기존 dist171개는 전부 불변이며 고지1개만 추가됐습니다. 고지18,360bytes·SHA bf847cf82a424cad890e1d9caf9a11038026b7ea9a538515678cae691504c2d9는 실제 localhost4350 preview의 HTTP200/text/plain 응답과도 일치합니다. 최초 sandbox listen/connect EPERM은 승인 후 성공과 분리하고 전용 preview는 종료했습니다. 기존 화면 관련 bytes가 모두 불변이므로 Chrome은 반복하지 않았고 고지 전달에 관한 신규 결과만 기록합니다. 원출력과 최종 안전/입력 해시 확인은 ignored distribution-fullcheck-log.json 및 resume-checkpoint-2026-08-28-distribution.json에 연결합니다.

실제 시장 데이터 원천·재배포 권리는 채택하지 않았습니다. 교육용 fixture를 실제 시장 데이터로 바꾸는 작업은 이번 범위가 아니며 권리 확인을 통과했다고 표시하지 않습니다. 이 미채택 경계와 배포물 권리 미확인을 분리합니다.

## 재개 조건

역사7파일·검사기·테스트·이번 보고서·정확한 로컬 증거를 독립 입력 단위로 유지합니다. Claude는 구독 전용 exact 모델/1M/high 조건 미입증으로 blocked이며 호출0입니다. 필요한 공식 고지 확인·기여/인용 권리 판정, 유효 독립 검토와 소유자/M6 승인이 끝나기 전 Task25 전체 PASS·커밋·ready·공개를 하지 않습니다. 새 변경은 예정파일 스캔과 입력 해시를 갱신해야 하며 이력·스냅샷·현재 파일의 검사를 서로 대체하지 않습니다.

## 2026-08-30 RIGHTS-01 Parallel Change 원전 대조 후보: 해당 위치 no-change, 전체 open 유지

`data-model-schema-migration.md`의 마이그레이션 문단을 공식 원전과 다시 대조했습니다. 원고는 Parallel Change의 expand·migrate·contract 구조와 데이터베이스 필드를 새로 만들고 구·신 필드에 함께 쓰고 기존 데이터를 복사한 뒤 새 필드로 읽기를 전환하고 옛 필드를 제거하는 예시를 출처로 명시합니다. 여기에 이 핸드북 사례의 backfill·validate·switch 단계와 검증·중지 조건을 입문자용 판단 절차로 결합하고, 그 조건이 모든 제품의 명령 묶음이나 무중단 보장이 아니라는 일반화 금지선도 같은 문단에 둡니다. 해당 구간에는 원전의 장문·표·도표·구체 SQL이나 Grid 예시를 재현하지 않으므로 이 한 위치는 원고 변경 없이 no-change로 판정합니다.

이 판정은 저장소 자체 감사이며 법률 자문·권리 허가가 아닙니다. 이 후보 위치만 좁게 대조했으며 외부 장문·표·도표 전수 원전 대조, 기여 권리, 다른 후보와 RIGHTS-01 전체는 계속 open입니다. 최초 후보 기록은 역사적 사실로 유지하고 이번 후속 판정과 구분합니다.

## 2026-08-30 RIGHTS-01 R17-C01 ADR 원형 후보: 해당 위치 해소, 전체 open 유지

`adr-and-tradeoffs.md`의 원형 설명·필드 표·최소 템플릿을 Michael Nygard의 공식 글과 다시 대조했습니다. 원전은 한 개의 아키텍처적으로 중요한 결정, 제목·맥락·결정·상태·결과, `proposed`·`accepted`·`deprecated`·`superseded`, 뒤집힌 기록 보존을 제시합니다. 원고는 이 핵심을 저자와 원문에 명시적으로 귀속하고, 대안·가정·증거·재검토 조건과 각 질문·좋은 증거·피할 내용을 핸드북의 확장 필드로 구분합니다. 최소 템플릿도 원전의 예시 제목·프로젝트 경로·문장·사례를 복제하지 않고 모임·대시보드 사례에 맞춘 독자적 질문 구조로 확장합니다.

원전 HTML은 이 글을 CC0 1.0에 연결하고 가능한 범위에서 글의 저작권·인접권을 포기한다고 명시합니다. Creative Commons의 CC0 설명은 허락 없이 복제·수정·배포할 수 있는 범위를 설명하지만 특허·상표·개인 권리, 보증 부재와 지지 암시 금지 경계를 함께 둡니다. 원고의 저자·원문 링크는 자발적으로 유지하며 프로젝트 전체 라이선스나 다른 자료의 권리로 확대하지 않습니다. 이 근거와 표현 대조로 R17-C01 위치는 원고·공개 고지 변경 없이 해소하되, 이는 저장소 자체 감사이지 법률 자문이 아니며 외부 원전 전수 대조·기여 권리·다른 후보와 RIGHTS-01 전체는 계속 open입니다. 최초 후보 기록은 역사적 사실로 보존합니다.

## 2026-08-30 adequate-little-templates 번들 연결·고지 운반: 부분 구현, RIGHTS-03/04 open 유지

공식 npm `adequate-little-templates 1.0.2` tarball의 SHA-1 `50773b3b7b1e6bde038455562d38a9aea96f8803`과 SHA-512 integrity가 보존한 metadata 및 고정 Pagefind component lock과 일치했습니다. 고정 Pagefind v1.5.2 소스는 searchbox·results에서 `compile`을 직접 import·호출하고 component index에서 `registerFunction`을 import하며, minify된 로컬 배포 `pagefind-component-ui.js`에는 tarball 원본의 고유 오류 문자열과 truthy·함수 집합·expression 평가·escape·node render·template parse 코드가 연속해서 남습니다. 이는 이 라이브러리의 실제 component UI 포함을 확인하지만 Pagefind 전체의 재현 빌드·서명된 provenance나 다른 후보 의존성의 포함을 증명하지 않습니다. npm metadata의 signature는 별도로 검증하지 않았습니다.

tarball과 고정 Git 원문의 MIT 전문은 SHA-256 `497af9803b5f4c55e5f81ce326d39b1bd1a6681b520c62a2414f68d706bfb604`로 같으며 `public/third-party-notices.txt`에 byte exact로 추가했습니다. 시작·끝 표식 한 번, 원문 hash, 고정 tarball·Git 링크와 `RIGHTS-03/04 전체 해소가 아닙니다` 경계를 새 회귀로 검증합니다. 이 추가는 adequate 한 구성요소의 실제 링크 구간과 고지 운반만 해소하며 아이콘·CSS SVG의 이전 출처, 다른 JS/WASM/Rust 포함물·고지, 배포본 전체 provenance, RIGHTS-03/04 전체, 프로젝트 라이선스와 Task25 closeout은 계속 open입니다. 원고·런타임 코드·Pagefind 패키지는 바꾸지 않았습니다.

## 2026-08-30 Starlight 비로고 아이콘 Unicons 기원·고지 운반: 부분 구현, RIGHTS-03/04 open 유지

[Starlight discussion #967](https://github.com/withastro/starlight/discussions/967)에서 최초 아이콘 컴포넌트 작성자이자 유지관리자인 delucis는 2023-07-20 당시 비로고 아이콘이 Unicons 세트에서 왔다고 직접 밝혔습니다. [최초 Starbook Icon 컴포넌트 commit](https://github.com/withastro/starlight/commit/2ee1e7d19b7afa5b258382ee6c4d1084ccb66056)은 2023-04-20 생성됐고 현재 배포에서 확인한 이름 12개 중 `link-alt`를 제외한 11개를 이미 포함합니다. `link-alt`의 현재 path는 고정 Unicons 4.0.8의 같은 이름 SVG와 정규화 뒤 일치하지만, 모양 일치만으로 개별 파일의 복제 시점·수정 계보를 확정하지 않습니다. `information`을 포함한 개별 icon path 전부의 byte-exact 원전 연결은 계속 not-confirmed입니다.

최초 컴포넌트 직전 Unicons의 최신 commit은 [4.0.8 release `691ff29fd130557a2ce7d991cef24bcd6644ad44`](https://github.com/Iconscout/unicons/tree/691ff29fd130557a2ce7d991cef24bcd6644ad44)이며, 이 commit의 `LICENSE`는 MIT가 아니라 IconScout Simple License입니다. 고정 원문 2,073 bytes·SHA-256 `9068e666d32dd0f5fbf5ffa62d7340875bd274e9077f463c642d6cfba94d9acd`를 `public/third-party-notices.txt`에 byte exact로 보존하고 원 제작자 IconScout·고정 원문·기원 기록을 표시했습니다. 새 회귀는 시작·끝 표식 각각 1회, 원문 hash, 고정 license·discussion·최초 commit 링크와 `RIGHTS-03/04 전체 해소가 아닙니다` 경계를 검증합니다.

원문은 같은 조건의 적용, 별도 자산 재판매·재게시 제한, 편집 자산을 업로드·게시할 때 원 제작자와 원 링크 표시 문구를 포함합니다. 이번 고지·귀속은 확인된 원문 전달을 보강할 뿐, 조건의 법적 해석·프로젝트 MIT/CC BY 4.0과의 호환성·현재 아이콘별 수정 범위·모든 CSS SVG 기원·배포 전체 provenance를 확정하지 않습니다. Starlight 패키지 MIT를 Unicons 원 아이콘에 확대하지 않으며 프로젝트 라이선스·아이콘·패키지·런타임 코드는 바꾸지 않았습니다. 따라서 RIGHTS-03/04 전체와 Task25 closeout은 계속 open입니다.

## 2026-08-30 Expressive Code CSS SVG 저장소 도입 이력: 근거 보강, RIGHTS-03/04 open 유지

공식 annotated tag `@expressive-code/plugin-frames@0.44.1`이 가리키는 commit `e0f1321544cf4a60bd07633499c5aaae300f8308`의 `styles.ts`와 설치 `dist/index.js`는 서로 다른 source·compiled 파일이므로 전체 byte identity를 주장하지 않습니다. 두 파일에서 기본 SVG 문자열만 연결하면 코드 복사 CSS08은 237 bytes·SHA-256 `d872c86d53b7d09752794d7a6307f667580d80c3cda569fa83969fb72270039d`, 터미널 점 CSS09는 191 bytes·SHA-256 `28b9f02e987c63cf4fefbe040d004fbddc4b22590fe41ac1a5d6f41471b3d706`으로 각각 byte exact입니다. 고정 core 0.44.1의 `createInlineSvgUrl` 인코딩을 적용한 URI도 배포 CSS의 각 1회 hash와 일치합니다.

CSS08 형상은 [2023-06-23 복사 버튼 commit](https://github.com/expressive-code/expressive-code/commit/af207b0e2f42114445d53c0e5d0ad854a46d461f)에 추가됐고 현재 검정 mask용 직렬화는 [2023-09-19 CSS 변수 commit](https://github.com/expressive-code/expressive-code/commit/bfed62ae31ba746b60031b29043cb1197ee1f0bc)에 처음 나타났습니다. CSS09 형상은 [2023-04-04 스타일 설정 commit](https://github.com/expressive-code/expressive-code/commit/632c0fca2e31bde9d9496d1a8e697e52fa69a614)에 색 속성과 함께 추가됐고 현재 무색 mask용 직렬화는 [2023-07-31 색상 변수 commit](https://github.com/expressive-code/expressive-code/commit/6da5008915cb25a006ae1d6e4ae2363c307d5eb8)에 처음 나타났습니다. 두 현재 문자열은 [2025-04-12 사용자 지정 기본값 commit](https://github.com/expressive-code/expressive-code/commit/380bfcc1a6ddaffcfdb72a86480e72d400091b19)에서 형상 변경 없이 설정 기본값으로 이동한 뒤 0.44.1 tag까지 유지됐습니다.

각 역사 시점과 tag의 root LICENSE는 설치 고지와 같은 1,072 bytes·SHA-256 `4c81807ac60ec0314f5e65727c13039d1210020e063142cede98f4f67a4785fb`의 MIT 원문입니다. 이 기록은 저장소 내부 형상·직렬화 이력을 좁히지만 독립 창작·이전 외부 원전 부재·충분한 기여 권한·법적 저작자/소유권을 증명하지 않습니다. 공개 고지·패키지·런타임·원고·프로젝트 라이선스를 바꾸지 않았고 더 이전 원전과 권한은 `not-confirmed`, RIGHTS-03/04 전체·Task25 closeout·M6·ready·release candidate·공개 상태는 계속 open입니다.

## 2026-08-30 Starlight CSS SVG 저장소 도입 이력: 근거 보강, RIGHTS-03/04 open 유지

공식 annotated tag `@astrojs/starlight@0.41.4`가 가리키는 commit `ab2792bd38fb90ecbaf54d9956ed6834628a2718`의 Search.astro, TableOfContentsList.astro, markdown.css는 설치된 0.41.4 대응 파일과 각각 byte exact입니다. 기존 배포 인벤토리의 CSS02~CSS07 URI hash를 tag 원문에서 다시 찾고 Git 이력을 추적한 결과, 검색 지우기 CSS02는 [2023-05-01 디자인 반영 commit](https://github.com/withastro/starlight/commit/e5a2e09b8bfe56fa9a70c8bfc2b177bd3904aa8f), 검색 문서·두 트리 선 CSS03~05는 [2023-09-14 하위 검색 결과 commit](https://github.com/withastro/starlight/commit/2a58e1aa068d01833a0ab9e74e4b46cccaee1775), 모바일 TOC 체크 CSS06은 [2023-05-15 현재 항목 강조 commit](https://github.com/withastro/starlight/commit/e96d9a7628c5c04fe34dbc65ddd6fabdc0667a6d), summary 화살표 CSS07은 [2024-05-17 details/summary 스타일 commit](https://github.com/withastro/starlight/commit/1a9ab50d458d6274994ffe66a23fe7a30681337a)에서 각각 추가됐습니다. 여섯 URI는 해당 도입 commit부터 0.41.4 tag까지 byte exact입니다.

각 도입 commit의 root LICENSE 첫 줄은 MIT License입니다. CSS02의 rename 전 원문은 저장소 링크 차이로 후속 원문과 hash가 다르고, 나머지 도입 commit과 0.41.4 tag의 root LICENSE는 byte exact입니다. 이 기록은 Starlight 저장소 내부 배포 이력을 좁히지만, commit 표시 이름을 법적 저작자·소유자로 판정하거나 각 SVG가 독립 창작인지 더 이른 외부 저작물에서 유래했는지, 기여 권한이 충분했는지를 증명하지 않습니다. 좌표 유사성이나 최적화 가능성으로 CSS02~07을 Unicons 또는 다른 아이콘 세트에 귀속하지 않았습니다.

따라서 이번 단위는 CSS02~07의 `직접 패키지 소스만 확인` 상태를 `정확한 repo 도입 commit과 0.41.4까지의 byte 연속성 확인`으로 좁혀 개선하지만, 더 이전 원전·권한은 계속 `not-confirmed`입니다. 공개 고지·패키지·런타임·원고·프로젝트 라이선스를 바꾸지 않았고 RIGHTS-03/04 전체·Task25 closeout·M6·ready·release candidate·공개 상태는 그대로 open입니다.

## 2026-08-30 Pagefind CSS SVG 저장소 도입 이력: 근거 보강, RIGHTS-03/04 open 유지

공식 annotated tag `v1.5.2`가 가리키는 commit `bf17396721be637cc67c8ed7ead1dc7b8ac43d96`의 default `ui.svelte`는 설치 `@pagefind/default-ui` 및 보존 원문과 byte exact이고, component CSS는 보존 원문 및 로컬 배포 `pagefind-component-ui.css`와 byte exact입니다. 기존 인벤토리의 검색 돋보기 CSS01 654 bytes·SHA-256 `1178da3c3ed9e9c4636bf945cf359ee70b914e5068c0420eb4bf5dc843a1ea7d`와 component 화살표 CSS10 181 bytes·SHA-256 `8222c1f20dab2f376d9b3236579157047e283fc3ddab90d49dcd0451c2926219`를 tag 원문과 배포본에서 다시 연결했습니다. 이는 exact source-to-distribution 연결이며 재현 빌드·registry 서명·패키지 provenance 증명이 아닙니다.

CSS01의 현재 URI는 [2022-06-29 UI Iteration commit](https://github.com/Pagefind/pagefind/commit/7f132ae7ab97c73d51adf00297f9c4aaa1e87db6)에 1회 처음 나타나고 다음 날 2회로 늘었습니다. [2023-02-07 default 경로 이동 commit](https://github.com/Pagefind/pagefind/commit/fec07970f3e09bbbdefd692c782c4e13b905e17e)은 같은 두 URI를 유지했고, [2026-01-11 component UI commit](https://github.com/Pagefind/pagefind/commit/9ca4427cf373759d3ba061017133134ea0eb588f)은 CSS01을 한 번 재사용하면서 CSS10을 처음 추가했습니다. 두 URI는 각 도입 시점부터 v1.5.2 tag 및 현재 빌드까지 byte exact입니다.

CSS01 도입 당시 루트 `LICENSE`는 없었지만 저장소의 `wrappers/node/LICENSE/LICENSE`는 Pagefind·CloudCannon과 MIT 전문을 이미 포함했습니다. [루트 LICENSE 추가 commit](https://github.com/Pagefind/pagefind/commit/6afe7caef29e44d0b397a88fde73a7a9eb69b42d)은 2022-07-09이며 CloudCannon 명의 MIT 원문입니다. [2025-08-27 publishing 변경 commit](https://github.com/Pagefind/pagefind/commit/70fc639129171ec3dd58f487ea663f9ba858d028)부터 Pagefind 명의 MIT 원문이 되어 CSS10 도입과 v1.5.2 tag에 유지됐습니다. 설치된 두 package에는 root-level 일반 `LICENSE` 파일이 없지만, `pagefind/LICENSE/`에는 공식 wrapper 원문과 byte exact인 Pagefind MIT와 vscode-ripgrep MIT 고지 파일이 있고 `@pagefind/default-ui`에는 별도 LICENSE 파일이 없습니다.

이 기록은 Pagefind 저장소 내부 도입·배포 조건을 좁히지만 독립 창작·이전 외부 원전 부재·충분한 기여 권한·법적 저작자/소유권을 증명하지 않습니다. 첫 blobless 조회의 DNS 실패가 만든 빈 값 해시는 폐기하고 고정 commit을 승인된 공식 경계에서 다시 읽었습니다. 공개 고지·패키지·런타임·원고·프로젝트 라이선스를 바꾸지 않았고 더 이전 원전·권한은 `not-confirmed`, RIGHTS-03/04 전체·Task25 closeout·M6·ready·release candidate·공개 상태는 계속 open입니다.

아이콘·CSS SVG를 공개 보류·전문 검토 후 유지·권리자 확인·직접 제작 자산 교체 중 어느 경로로 다룰지와 각 검증 계약은 [RIGHTS-03/04 제3자 자산 결정 브리프](rights-asset-decision-brief.md)에 모았습니다. 이 연결은 어느 경로의 선택·권리 허가·전문 결론·자산 교체·프로젝트 라이선스 변경도 뜻하지 않습니다.

## 2026-08-30 pagefind_stem 1.0.0 archive·feature 후속: RIGHTS-08 Important/open 유지

공식 static crates.io의 `pagefind_stem 1.0.0` archive 91,050 bytes·SHA-256 `8dfa810b158f3ac364e5acd43ca4a6020a6e729d40c15ce1bed1d911237a52e5`는 고정 Pagefind Web Cargo.lock checksum과 정확히 일치합니다. 44개 파일의 Cargo.toml·Cargo.toml.orig·src/lib.rs는 이전 Docs.rs 보존본과 byte exact이고 `.cargo_vcs_info.json`만 보존 과정의 최종 LF 한 개가 더 있습니다. 따라서 이 crate의 registry archive byte 미확인은 해소하지만 checksum 일치를 registry 서명·publisher 신원·재현 빌드로 확대하지 않습니다. 이전 crates.io API 403은 metadata/signature 실패 이력으로 유지합니다.

archive에는 독립 LICENSE/NOTICE 파일이 없고 `src/lib.rs` 안에 rust-stemmers 유래 API의 MIT 전문과 Snowball 3조건 고지가 함께 있습니다. package의 MIT label만으로 후자를 덮지 않습니다. archive에는 34개 알고리즘 source가 모두 있지만 default feature는 없고, 34개 module과 34개 `get_algorithm` 반환 분기는 정확히 같은 feature 조건이며 no-feature 경로는 `None`입니다. Pagefind는 33개 언어 코드를 고유 feature 31개에 연결하고 generic WASM은 feature 없이 먼저 build하며, 현재 배포에는 `wasm.unknown.pagefind` 한 개만 있습니다.

이 exact source 근거는 언어별 알고리즘을 generic binary 포함으로 승격하지 않을 경계를 강화하지만 source archive 전체와 최적화된 binary linked code를 같다고 하지 않습니다. `.cargo_vcs_info.json`의 `dirty: true` 때문에 선언 base commit도 crate와 byte exact라고 하지 않습니다. 로컬에는 cargo·rustc가 없어 offline compile 시도는 command-not-found exit 127이었고 toolchain을 설치하지 않았습니다. wrapper의 LTO 뒤 byte와 rust-stemmers/Snowball binary 고지 적용 범위는 계속 `not-confirmed`입니다. 공개 고지·패키지·runtime·원고·프로젝트 라이선스·dist는 바꾸지 않으며 RIGHTS-08·Task25·M6·ready·RC·공개 상태는 계속 open입니다.

## 2026-08-30 unicode-ident 1.0.24 archive·artifact 후속: RIGHTS-08 Important/open 유지

공식 static crates.io의 `unicode-ident 1.0.24` archive 49,298 bytes·SHA-256 `e6e4313cd5fcd3dad5cafa179702e2b244f760991f45397d14d4ebf38247da75`는 고정 Pagefind Web Cargo.lock checksum과 정확히 일치합니다. 26개 파일·추출 합계 336,823 bytes이고 manifest SHA-256은 `7ff4584b176f12c9b6c83457ec8409eedc92e6f35991fb622835c2ad948e6918`입니다. 이전 Docs.rs 보존본의 Cargo.toml.orig과 Apache·MIT·Unicode 전문은 archive와 byte exact입니다. 이 확인은 registry archive byte 미확인만 해소하며 checksum을 registry 서명·publisher 신원·재현 빌드로 확대하지 않습니다.

license 식은 `(MIT OR Apache-2.0) AND Unicode-3.0`이고 archive의 `src/tables.rs`는 Unicode 17.0.0 UCD.zip에서 생성됐음을 기록합니다. MIT·Apache 중 선택과 무관하게 Unicode 조건을 선택 사항으로 바꾸지 않습니다. 함께 받은 공식 `wasm-bindgen-shared 0.2.117` archive 10,541 bytes·SHA-256 `39129a682a6d2d841b6c429d0c51e5cb0ed1a03829d8b3d1e69a011e62cb3d3b`도 lock checksum과 일치하고, 정상 의존성인 `unicode-ident`의 XID start·continue 함수를 source에서 직접 호출합니다. 따라서 이전의 proc-macro 지원 경로 전용이라는 축약은 폐기합니다.

배포 `wasm.unknown.pagefind`는 outer gzip을 푼 뒤 12-byte `pagefind_dcd` prefix와 140,524-byte WASM으로 분리됩니다. WASM에서 crate 이름·17.0.0 리터럴과 generated TRIE_START·TRIE_CONTINUE·LEAF의 exact 전체 또는 시작·중간·끝 64/128/256/가능한 512-byte 창을 찾지 못했습니다. 이 음성 scan은 exact source-table copy 부재만 좁히며 compiler 변환·부분 사용·생성 glue·다른 표현의 material을 배제하지 않습니다. 실제 linked/generated 범위와 Unicode 고지 적용은 계속 `not-confirmed`입니다. 첫 파서는 prefix 제거와 gunzip 순서를 반대로 적용해 `Z_DATA_ERROR`로 실패했고 헤더 확인 뒤 교정했습니다. cargo·rustc·wasm-tools·wasm-objdump를 설치하지 않았으며 공개 고지·패키지·runtime·원고·프로젝트 라이선스·dist는 바꾸지 않았습니다. RIGHTS-08·Task25·M6·ready·RC·공개 상태는 계속 open입니다.

## 2026-08-30 pagefind_microjson 0.1.4 archive 후속: RIGHTS-07 Important/open 유지

공식 static crates.io의 `pagefind_microjson 0.1.4` archive 3,874,300 bytes·SHA-256 `8f97aa64cde14e78d6274c473f36cec98d401f0b583282055e953d2df907e210`은 고정 Pagefind Web Cargo.lock checksum과 정확히 일치합니다. archive는 13개 파일·추출 합계 26,323,683 bytes이고 manifest SHA-256은 `791483a46993188e6fd8ad55da094348982cd3740b3452efdcc48655145db605`입니다. Cargo.toml·Cargo.toml.orig·LICENCE는 이전 Docs.rs 보존본과 byte exact입니다. 이전 rendered `src/lib.rs` 보존본은 8,856 bytes·232행으로 archive의 29,730 bytes·779행보다 불완전하고 4,481-byte 공통 prefix 뒤부터 byte exact가 아니었습니다. 이 exact archive는 registry bytes와 전체 source를 고정하지만 checksum을 registry 서명·publisher 신원·재현 빌드로 확대하지 않습니다.

manifest는 `GPL-3.0-only`, 32,473-byte LICENCE는 GNU GPL Version 3 전문, source header는 GPL version 3 또는 이후 버전이라고 적습니다. 이 불일치를 그대로 보존하고 어느 하나를 임의로 우선하거나 법률 결론으로 바꾸지 않습니다. `.cargo_vcs_info.json`의 선언 SHA `51e27c165e26c7125666403b796fb5d8564a8be5`는 이전 공식 조회에서 commit·raw source가 404였으며 exact archive가 있어도 publisher 신원·권리 provenance·GPL 버전 선택을 해결하지 않습니다.

고정 Pagefind는 이 crate를 직접 의존·import하고 `set_ranking_weights`에서 `JSONValue::parse(weights)`를 호출합니다. 배포 WASM에는 `set_ranking_weights` export 문자열이 offset 963에 있지만 crate 이름과 source 오류 문자열8개는 없습니다. 이는 source 사용 경로와 배포 기능을 연결하지만 최적화된 function bytes의 crate 귀속·binary provenance·complete corresponding source 범위를 attest하지 않습니다. cargo·rustc·wasm-tools·wasm-objdump를 설치하지 않았으며 GPL 전문 하나만 추가해 닫지 않습니다. 공개 고지·대응 소스 전달 경로·패키지·runtime·원고·프로젝트 라이선스·dist·Pagefind는 바꾸지 않았고 RIGHTS-07·Task25·M6·ready·RC·공개 상태는 계속 open입니다.

## 2026-08-30 write-json 0.1.4 archive·artifact 후속: RIGHTS-08 Important/open 유지

공식 static crates.io의 `write-json 0.1.4` archive 7,024 bytes·SHA-256 `23f6174b2566cc4a74f95e1367ec343e7fa80c93cc8087f5c4a3d6a1088b2118`은 고정 Pagefind Web Cargo.lock checksum과 정확히 일치합니다. 9개 파일·추출 합계 20,427 bytes이고 manifest SHA-256은 `27ef8ec48b285501a3d9bcdb0d7f631957fbf2c1b117dc4138cf882b6dc94b6b`입니다. 이전 Docs.rs 보존본의 Cargo.toml.orig·MIT·Apache 원문은 archive와 byte exact입니다. 이 확인은 archive bytes를 고정하지만 checksum을 registry 서명·publisher 신원·재현 빌드로 확대하지 않습니다.

Archive `.cargo_vcs_info.json`의 선언 SHA `21160349b6e511bee31fe570a905aef667ea1390`에 있는 공식 raw `src/lib.rs` 5,503 bytes·231행은 archive source와 byte exact입니다. Manifest 권리 식은 `MIT OR Apache-2.0`이며 이번 단위에서 선택지를 정하거나 기존 공개 고지를 변경하지 않습니다. 고정 Pagefind Web은 write-json을 직접 의존하고 `write_json::array` 3회·`write_json::object` 2회를 호출합니다.

배포 WASM에는 관련 공개 기능 문자열 `filters`·`request_all_filter_indexes`·`request_filter_indexes`·`search`가 있고 source의 hex escape literal `0123456789ABCDEF`가 offset 126,159에 있지만 crate 이름은 없습니다. 현재 보존한 Task25 crate/Pagefind source 검색에서 이 literal은 write-json archive source만 일치했으나, 이를 독점적 출처·function byte 귀속·whole-crate 포함·binary provenance로 확대하지 않습니다. cargo·rustc·wasm-tools·wasm-objdump를 설치하지 않았으며 공개 고지·패키지·runtime·원고·프로젝트 라이선스·dist·Pagefind는 바꾸지 않았습니다. 실제 linked 범위와 필요한 고지 선택·운반은 계속 `not-confirmed`이고 RIGHTS-08·Task25·M6·ready·RC·공개 상태는 open입니다.

## 2026-08-30 minicbor 2.2.1 archive·고지 byte Fix Round 1: RIGHTS-08 Important/open 유지

공식 static crates.io의 `minicbor 2.2.1` archive 36,187 bytes·SHA-256 `e70eae6d4f18f7d76877fe7b13f0bc21f7c2b7239d2041c338335f7b388d0dd7`은 고정 Pagefind Web Cargo.lock checksum과 정확히 일치합니다. 22개 파일·추출 합계 199,974 bytes이고 manifest SHA-256은 `fdadb90585f292c668a0a3eb4d5f7a558d70d9aca3b2dd8fff2c751b423b94cd`입니다. Cargo.toml.orig은 이전 보존본과 byte exact이며 checksum을 registry 서명·publisher 신원·재현 빌드로 확대하지 않습니다.

Archive는 VCS SHA `b22bf310922e79da6ecac1ec0f0a3a4419962222`의 `minicbor` 하위 경로를 선언합니다. 해당 하위 LICENSE raw는 줄바꿈 없는 13-byte `../LICENSE.md` symlink target이고, root LICENSE 1,553 bytes·SHA-256 `79860758b46e85f70a1762c21a8fff4f2d220d89f9bdca096e12aed15b9951c5`와 `minicbor/src/decode/decoder.rs` 40,828 bytes는 각각 archive와 byte exact입니다. 권리 식은 `BlueOak-1.0.0`입니다.

최초 Docs.rs 추출·고지 운반의 1,552-byte `8a1af140…e004` 결과는 역사로 보존합니다. Exact archive와 앞 1,552 bytes가 같고 마지막 LF 한 바이트만 archive에 더 있어, 회귀 기대 hash를 먼저 archive 값으로 바꾼 focused RED 1/2·exit1 뒤 기존 minicbor 고지 끝 표식 앞에 LF 한 바이트를 추가했습니다. Fix Round 결과는 1,553 bytes·`79860758…51c5`, focused GREEN 2/2·exit0입니다. 이전 Pagefind direct decode·WASM source-path 연결을 binary attestation·function bytes·모든 feature·권리 완료로 확대하지 않습니다. 이 수정은 Blue Oak 원문 운반의 byte 정확성만 교정하며 package·runtime 코드·원고·프로젝트 라이선스·dist·Pagefind는 바꾸지 않았고 다른 RIGHTS-08 구성요소·Task25·M6·ready·RC·공개 상태는 open입니다.

## 2026-08-30 bit-set 0.10.0 archive·source-to-artifact 후속: RIGHTS-08 Important/open 유지

공식 static crates.io의 `bit-set 0.10.0` archive 20,439 bytes·SHA-256 `09ec2f926cc3060f09db9ebc5b52823d85268d24bb917e472c0c4bea35780a7d`는 고정 Pagefind Web Cargo.lock checksum과 정확히 일치합니다. 13개 파일·추출 합계 85,730 bytes이고 manifest SHA-256은 `b21a5bb05d4055c4009deae7c86850fc6361f334b374ee07409ac7684f01cc5c`입니다. 이전 Docs.rs 보존본의 Cargo.toml.orig과 Apache·MIT 전문은 archive와 byte exact입니다. 이 확인은 registry archive byte 미확인만 해소하며 checksum을 registry 서명·publisher 신원·재현 빌드로 확대하지 않습니다.

Archive가 선언한 VCS commit `2a569e1a5bffaee2c2974bcf070ef4e8ee85550b`의 공식 raw `src/lib.rs` 52,738 bytes·1,859행은 archive source와 byte exact입니다. 권리 식은 `Apache-2.0 OR MIT`이고 정상 하위 의존성은 default feature를 끈 `bit-vec 0.9.1`입니다. 이번 단위는 라이선스 선택지를 정하거나 bit-set·bit-vec 고지를 공개 파일에 추가하지 않습니다.

고정 Pagefind source의 `search.rs`와 `filter.rs`는 `bit_set::BitSet`을 직접 import하고 검색·필터 결과 집합에서 생성·삽입·반복·교집합·합집합을 사용하며 필터 경로는 대칭차·FromIterator도 사용합니다. 로컬 배포 WASM에는 `bit-set`·`bit_set`·`bit-set-0.10.0/src/lib.rs` marker가 없습니다. 이 음성 marker는 최적화 결과에서 crate 이름과 source 경로가 없다는 관찰일 뿐 compiler 변환·LTO 뒤 exact 함수 byte, whole-crate 포함이나 bit-vec 실제 linked subset 부재를 증명하지 않습니다. 고정 source graph와 artifact byte의 관계, 필요한 고지 선택·운반은 계속 `not-confirmed`입니다. 공개 고지·패키지·runtime·원고·프로젝트 라이선스·dist는 바꾸지 않았고 RIGHTS-08·Task25·M6·ready·release candidate·공개 상태는 계속 open입니다.

## 2026-08-30 wasm-bindgen 0.2.117 archive·producer 후속: RIGHTS-08 Important/open 유지

공식 static crates.io의 `wasm-bindgen 0.2.117` archive 61,596 bytes·SHA-256 `0551fc1bb415591e3372d0bc4780db7e587d84e2a7e79da121051c5c4b89d0b0`는 고정 Pagefind Web Cargo.lock checksum과 정확히 일치합니다. 25개 파일·추출 합계 258,663 bytes이고 manifest SHA-256은 `dce99d50725a4ebd5c7836e6d0b65ace1db3cf59ca2e697680d5371c5186cc16`입니다. 이전 Docs.rs 보존본의 Cargo.toml.orig과 Apache·MIT 전문은 archive와 byte exact이며 checksum을 registry 서명·publisher 신원·재현 빌드로 확대하지 않습니다.

Archive가 선언한 VCS commit `fb403cfef5041fbe320eb8423003bda49ca33125`의 공식 raw `src/lib.rs`와 `src/externref.rs`는 archive source와 각각 byte exact입니다. 권리 식은 `MIT OR Apache-2.0`이고 고정 lock graph에는 cfg-if·once_cell·rustversion·wasm-bindgen-macro·wasm-bindgen-shared가 있습니다. 이 중 build dependency와 proc-macro chain을 최적화된 runtime 함수 목록으로 바꾸지 않으며, 이번 단위는 라이선스 선택지를 정하거나 wasm-bindgen family 고지를 공개 파일에 추가하지 않습니다.

고정 Pagefind는 wasm-bindgen을 직접 의존·import하고 속성 13개로 외부 선언과 공개 함수를 연결합니다. 배포 WASM은 이 공개 함수 11개와 generated export 5개를 포함하고 producers에 `wasm-bindgen 0.2.117 (fb403cfef)`를 기록하며 `wasm-bindgen-0.2.117/src/externref.rs` 상대 경로 suffix를 포함합니다. 이는 구성요소와 artifact 연결을 직접 강화하지만 producers를 서명된 attestation으로, source marker를 exact function byte·전체 source correspondence·feature closure·macro/shared/build-time/Rust std/generated glue·권리 완료로 확대하지 않습니다. 공개 고지·패키지·runtime·원고·프로젝트 라이선스·dist는 바꾸지 않았고 필요한 고지 선택·운반과 RIGHTS-08·Task25·M6·ready·release candidate·공개 상태는 계속 open입니다.

## 2026-08-30 bit-vec 0.9.1 archive·source graph 후속: RIGHTS-08 Important/open 유지

공식 static crates.io의 `bit-vec 0.9.1` archive 29,177 bytes·SHA-256 `b71798fca2c1fe1086445a7258a4bc81e6e49dcd24c8d0dd9a1e57395b603f51`는 고정 Pagefind Web Cargo.lock checksum과 정확히 일치합니다. 14개 파일·추출 합계 145,642 bytes이고 manifest SHA-256은 `020a3cf760ffa79cd3626774d35dff7fd522cc90a740fa13bb9fd4bd8c6aeee8`입니다. 이전 Docs.rs 보존본의 Cargo.toml.orig과 Apache·MIT 전문은 archive와 byte exact이며 checksum을 registry 서명·publisher 신원·재현 빌드로 확대하지 않습니다.

Archive가 선언한 VCS commit `2fb0305422ff7fd915a107b91209abbff9fce50f`의 공식 raw `src/lib.rs` 106,514 bytes·3,571행은 archive source와 byte exact입니다. 권리 식은 `Apache-2.0 OR MIT`입니다. 고정 `bit-set 0.10.0` manifest는 bit-vec을 `default-features = false`로 직접 의존하고 source는 `BitVec`·`Blocks`를 import해 생성·storage·blocks·grow 등에 사용하며, 고정 Pagefind lock은 `bit-set → bit-vec` edge를 보존합니다. borsh·serde·miniserde·nanoserde의 optional 선언과 serde lock package 존재를 실제 artifact의 active feature·linked subset으로 바꾸지 않습니다.

로컬 배포 WASM에는 `bit-vec`·`bit_vec`·source 경로와 구별 가능한 panic 문자열이 없습니다. 이 음성 marker는 최적화 결과의 문자열 부재일 뿐 compiler 변환·LTO 뒤 exact function byte, 전체 crate 포함 여부, optional feature 활성화, panic path 제거, actual build provenance를 증명하지 않습니다. 이번 단위는 라이선스 선택지를 정하거나 bit-vec 고지를 공개 파일에 추가하지 않았고, 필요한 고지 선택·운반과 실제 linked 범위는 계속 `not-confirmed`입니다. 공개 고지·패키지·runtime·원고·프로젝트 라이선스·dist는 바꾸지 않았으며 RIGHTS-08·Task25·M6·ready·release candidate·공개 상태는 계속 open입니다.

## 2026-08-30 wasm-bindgen-shared 0.2.117 archive·dependency 후속: RIGHTS-08 Important/open 유지

공식 static crates.io의 `wasm-bindgen-shared 0.2.117` archive 10,541 bytes·SHA-256 `39129a682a6d2d841b6c429d0c51e5cb0ed1a03829d8b3d1e69a011e62cb3d3b`는 고정 Pagefind Web Cargo.lock checksum과 정확히 일치합니다. 11개 파일·추출 합계 30,442 bytes이고 manifest SHA-256은 `3ba1c2197af998e52820d55f213c6b9cc42e956e44506d073ce4ae2602526e68`입니다. 이전 Docs.rs 보존본의 Cargo.toml.orig과 Apache·MIT 전문은 archive와 byte exact이며 checksum을 registry 서명·publisher 신원·재현 빌드로 확대하지 않습니다.

Archive가 선언한 VCS commit `fb403cfef5041fbe320eb8423003bda49ca33125`의 `crates/shared` 공식 raw `build.rs`와 `src` 네 파일은 archive와 모두 byte exact입니다. 권리 식은 `MIT OR Apache-2.0`이고 manifest는 `links = "wasm_bindgen"`과 정상 `unicode-ident` 의존을 선언하며 identifier source는 XID 함수 두 개를 직접 호출합니다. 고정 lock에서 `wasm-bindgen`과 `wasm-bindgen-macro-support`가 shared에, shared가 unicode-ident에 연결되지만 이 source/lock graph를 macro·schema·version coordination에서 actual runtime/generated linked subset으로 확대하지 않습니다.

로컬 배포 WASM producers에는 같은 family revision의 `wasm-bindgen 0.2.117 (fb403cfef)`가 있으나 `wasm-bindgen-shared`·shared source 경로·schema version/hash marker는 없습니다. Producers는 shared code 포함의 서명된 attestation이 아니며, 이 음성 marker도 exact function byte·macro 생성물 귀속·Unicode table 포함·전체 feature/runtime 범위·actual build provenance를 증명하지 않습니다. 이번 단위는 라이선스 선택지를 정하거나 shared 고지를 공개 파일에 추가하지 않았고 필요한 고지 선택·운반과 generated/runtime 범위는 계속 `not-confirmed`입니다. 공개 고지·패키지·runtime·원고·프로젝트 라이선스·dist는 바꾸지 않았으며 RIGHTS-08·Task25·M6·ready·release candidate·공개 상태는 계속 open입니다.

## 2026-08-30 cfg-if 1.0.4 archive·macro 후속: RIGHTS-08 Important/open 유지

공식 static crates.io의 `cfg-if 1.0.4` archive 9,360 bytes·SHA-256 `9330f8b2ff13f34540b44e946ef35111825727b38d33286ef986142615121801`는 고정 Pagefind Web Cargo.lock checksum과 정확히 일치합니다. 14개 파일·추출 합계 25,721 bytes이고 manifest SHA-256은 `9f1232f66ae91526b45f4c7d321b38afab3545f884aa25d57300f4f8d5533e23`입니다. 이전 Docs.rs 보존본의 Cargo.toml.orig과 Apache·MIT 전문은 archive와 byte exact이며 checksum을 registry 서명·publisher 신원·재현 빌드로 확대하지 않습니다.

Archive가 선언한 VCS commit `3510ca6abea34cbbc702509a4e50ea9709925eda`의 공식 raw `src/lib.rs` 6,368 bytes·212행은 archive source와 byte exact입니다. 권리 식은 `MIT OR Apache-2.0`입니다. 고정 `wasm-bindgen 0.2.117`은 cfg-if를 정상 의존하고 source 5개 파일에서 macro를 6회 호출해 `enable-interning` feature와 debug/std/wasm target을 분기합니다. Pagefind는 wasm-bindgen을 feature override 없이 의존하고 parent manifest default는 std이지만 source 설정을 actual build feature set·exact expanded token·optimized byte로 확대하지 않습니다.

로컬 배포 WASM producers에는 parent `wasm-bindgen 0.2.117 (fb403cfef)`가 있으나 cfg-if crate·source·feature·runtime branch의 구별 가능한 문자열 marker는 없습니다. Declarative macro 관계에서 이 음성 marker는 crate 부재 증거가 아니며 parent producer도 cfg-if expansion의 서명된 provenance·선택 branch의 exact function byte·전체 feature resolution·dead-code 제거·actual build source를 증명하지 않습니다. 이번 단위는 라이선스 선택지를 정하거나 cfg-if 고지를 공개 파일에 추가하지 않았고 필요한 고지 선택·운반과 macro/generated/runtime 범위는 계속 `not-confirmed`입니다. 공개 고지·패키지·runtime·원고·프로젝트 라이선스·dist는 바꾸지 않았으며 RIGHTS-08·Task25·M6·ready·release candidate·공개 상태는 계속 open입니다.

## 2026-08-30 once_cell 1.21.4 archive·runtime source graph 후속: RIGHTS-08 Important/open 유지

공식 static crates.io의 `once_cell 1.21.4` archive 35,010 bytes·SHA-256 `9f7c3e4beb33f85d45ae3e3a1792185706c8e16d043238c593331cc7cd313b50`는 고정 Pagefind Web Cargo.lock checksum과 정확히 일치합니다. 29개 파일·추출 합계 151,142 bytes이고 manifest SHA-256은 `e6b87013293c6521879b039d03b7e869697625b6297375f07a9cbd9460f8a5c3`입니다. 이전 Docs.rs 보존본의 Cargo.toml.orig과 Apache·MIT 전문은 archive와 byte exact이며 checksum을 registry 서명·publisher 신원·재현 빌드로 확대하지 않습니다.

Archive가 선언한 VCS commit `80fe900b21f6d76c1a2ed74d3343e8a3a88c46d0`의 공식 raw `src/lib.rs` 47,322 bytes·1,422행은 archive source와 byte exact이고 권리 식은 `MIT OR Apache-2.0`입니다. 고정 `wasm-bindgen 0.2.117`은 `default-features = false`로 once_cell을 정상 의존하고 runtime source에서 `unsync::Lazy`를 import해 `LazyCell`로 감싸며 `Lazy::new`와 `Lazy::force`를 직접 사용합니다. Pagefind는 parent wasm-bindgen을 feature override 없이 의존하지만 이 source/lock graph를 actual feature resolution·macro expansion·최종 linked function byte로 확대하지 않습니다.

로컬 배포 WASM producers에는 parent `wasm-bindgen 0.2.117 (fb403cfef)`가 있으나 once_cell crate·source path·Lazy type·poison 문자열 marker는 없습니다. Compiler 최적화와 generic instantiation을 거치는 관계에서 이 음성 marker는 once_cell code 부재 증거가 아니며 parent producer도 once_cell source 포함의 서명된 provenance·exact function byte·선택 feature·thread-local branch·dead-code 제거·actual build source를 증명하지 않습니다. 이번 단위는 라이선스 선택지를 정하거나 once_cell 고지를 공개 파일에 추가하지 않았고 필요한 고지 선택·운반과 feature/generated/runtime 범위는 계속 `not-confirmed`입니다. 공개 고지·패키지·runtime·원고·프로젝트 라이선스·dist는 바꾸지 않았으며 RIGHTS-08·Task25·M6·ready·release candidate·공개 상태는 계속 open입니다.

## 2026-08-30 bumpalo 3.20.2 archive·proc-macro source graph 후속: RIGHTS-08 Important/open 유지

공식 static crates.io의 `bumpalo 3.20.2` archive 97,696 bytes·SHA-256 `5d20789868f4b01b2f2caec9f5c4e0213b41e3e5702a50157d699ae31ced2fcb`는 고정 Pagefind Web Cargo.lock checksum과 정확히 일치합니다. 19개 파일·추출 합계 422,038 bytes이고 manifest SHA-256은 `9cde61c1f78b7137ab4320666271c0b319b653a60a9941a9127113e3069b195f`입니다. 이전 Docs.rs 보존본의 Cargo.toml.orig과 Apache·MIT 전문은 archive와 byte exact이며 checksum을 registry 서명·publisher 신원·재현 빌드로 확대하지 않습니다.

Archive가 선언한 VCS commit `1aad072f93d8a4cf5885446ead554927c7c94f9c`의 공식 raw `src/lib.rs` 97,564 bytes·2,650행은 archive source와 byte exact이고 권리 식은 `MIT OR Apache-2.0`입니다. 고정 `wasm-bindgen-macro-support 0.2.117` 공식 archive도 lock checksum exact이며 선언 VCS의 Cargo.toml과 `src/encode.rs`가 archive와 byte exact입니다. Macro-support는 bumpalo를 정상 의존하고 `Interner`에서 `Bump::new()`와 `alloc_str`을 직접 사용하며 Pagefind source의 wasm-bindgen attribute는 13개이지만, 이 source/lock graph를 actual build invocation·expanded token·생성물별 bumpalo code 귀속으로 확대하지 않습니다.

로컬 배포 WASM producers에는 parent `wasm-bindgen 0.2.117 (fb403cfef)`가 있으나 bumpalo·macro-support·source path·alloc_str·parent error 문자열 marker는 없습니다. Proc-macro 지원 code의 build-host 사용 가능성을 보여 주는 source graph에서 이 음성 marker는 사용 부재 증거가 아니며, 반대로 parent producer도 bumpalo가 runtime WASM에 linked됐다는 attestation이 아닙니다. 이번 단위는 라이선스 선택지를 정하거나 bumpalo 고지를 공개 파일에 추가하지 않았고 exact build invocation·host binary·expanded token·generated/runtime 범위와 필요한 고지 선택·운반은 계속 `not-confirmed`입니다. 공개 고지·패키지·runtime·원고·프로젝트 라이선스·dist는 바꾸지 않았으며 RIGHTS-08·Task25·M6·ready·release candidate·공개 상태는 계속 open입니다.

## 2026-08-30 wasm-bindgen-macro 0.2.117 archive·wrapper source graph 후속: RIGHTS-08 Important/open 유지

공식 static crates.io의 `wasm-bindgen-macro 0.2.117` archive 9,279 bytes·SHA-256 `7fbdf9a35adf44786aecd5ff89b4563a90325f9da0923236f6104e603c7e86be`는 고정 Pagefind Web Cargo.lock checksum과 정확히 일치합니다. 9개 파일·추출 합계 25,852 bytes이고 manifest SHA-256은 `e34151f83383ee8da455d1fc295225cc959302aa60aeb23ce8ddfb9dbbe172bf`입니다. 이전 Docs.rs 보존본의 Cargo.toml.orig과 Apache·MIT 전문은 archive와 byte exact이며 checksum을 registry 서명·publisher 신원·재현 빌드로 확대하지 않습니다.

Archive가 선언한 VCS commit `fb403cfef5041fbe320eb8423003bda49ca33125`의 `crates/macro` 공식 raw Cargo.toml과 `src/lib.rs`는 archive와 byte exact입니다. Wrapper source는 2,712 bytes·75행이고 권리 식은 `MIT OR Apache-2.0`이며 proc-macro crate로 quote와 exact macro-support를 정상 의존합니다. Proc-macro 진입점 네 개가 macro-support 확장 함수 네 개와 연결되고 오류 경로의 `quote!`도 네 번이며 Pagefind source에는 wasm-bindgen attribute 13개가 있지만, 이 source/lock graph를 actual build invocation·진입점별 호출 횟수·expanded token·generated code 귀속으로 확대하지 않습니다.

로컬 배포 WASM producers에는 parent `wasm-bindgen 0.2.117 (fb403cfef)`가 있으나 macro wrapper·source path·진입점·debug marker 문자열은 없습니다. Proc-macro의 build-host 실행 성격에서 이 음성 marker는 macro 미사용 증거가 아니며 parent producer도 wrapper 실행·expanded token·generated byte의 서명된 provenance가 아닙니다. 이번 단위는 라이선스 선택지를 정하거나 macro 고지를 공개 파일에 추가하지 않았고 actual host invocation·feature·expanded/generated/runtime 범위와 필요한 고지 선택·운반은 계속 `not-confirmed`입니다. 공개 고지·패키지·runtime·원고·프로젝트 라이선스·dist는 바꾸지 않았으며 RIGHTS-08·Task25·M6·ready·release candidate·공개 상태는 계속 open입니다.

## 2026-08-30 rustversion 1.0.22 archive·build-host source graph 후속: RIGHTS-08 Important/open 유지

공식 static crates.io의 `rustversion 1.0.22` archive 21,096 bytes·SHA-256 `b39cdef0fa800fc44525c84ccb54a029961a8215f9619753635a9c0d2538d46d`는 고정 Pagefind Web Cargo.lock checksum과 정확히 일치합니다. 39개 파일·추출 합계 74,770 bytes이고 manifest SHA-256은 `a690451fbe3fd12452a58172173f24adec1e7217feac7f3e68c1c0f89fe95318`입니다. 이전 보존본의 Cargo.toml.orig과 Apache·MIT 전문은 archive와 byte exact이며 checksum을 registry 서명·publisher 신원·재현 빌드로 확대하지 않습니다.

Archive가 선언한 VCS commit `9e86f839b6a34a7d9398f243d88bf400b7fa1f7c`의 공식 raw Cargo.toml·`src/lib.rs`·`build/build.rs`·`build/rustc.rs`는 archive와 byte exact입니다. 권리 식은 `MIT OR Apache-2.0`이고 자체 build script와 proc-macro 진입점 10개를 가집니다. 고정 wasm-bindgen은 이를 build dependency `rustversion-compat`로 사용하고 build.rs에서 host compiler 조건을 위한 `rustversion::cfg!`를 두 번 호출하지만, source/lock graph를 actual host invocation·rustc 값·조건 평가 결과·target feature·generated cfg·runtime linked code로 확대하지 않습니다.

로컬 배포 WASM producers에는 parent `wasm-bindgen 0.2.117 (fb403cfef)`가 있으나 rustversion·alias·`version.expr`·build-script marker 문자열은 없습니다. Build-host proc-macro와 build script 성격에서 이 음성 marker는 사용 부재 증거가 아니며 parent producer도 host 실행·조건 결과·generated byte의 서명된 provenance가 아닙니다. 이번 단위는 라이선스 선택지를 정하거나 rustversion 고지를 공개 파일에 추가하지 않았고 actual host build·generated/runtime 범위와 필요한 고지 선택·운반은 계속 `not-confirmed`입니다. 공개 고지·패키지·runtime·원고·프로젝트 라이선스·dist는 바꾸지 않았으며 RIGHTS-08·Task25·M6·ready·release candidate·공개 상태는 계속 open입니다.

## 2026-08-30 proc-macro2 1.0.106 archive·proc-macro source graph 후속: RIGHTS-08 Important/open 유지

공식 static crates.io의 `proc-macro2 1.0.106` archive 59,765 bytes·SHA-256 `8fd00f0bb2e90d81d1044c2b32617f68fcb9fa3bb7640c23e9c748e53fb30934`는 고정 Pagefind Web Cargo.lock checksum과 정확히 일치합니다. 33개 파일·추출 합계 270,852 bytes이고 manifest SHA-256은 `4a766597b8f72790d459052e3db9c9be128a19737ed17f5c66c82e125f46cd85`입니다. 이전 보존본의 Cargo.toml.orig과 Apache·MIT 전문은 archive와 byte exact이며 checksum을 registry 서명·publisher 신원·재현 빌드로 확대하지 않습니다.

Archive가 선언한 VCS commit `58ab776b95a4c2865554badbb6629c50971a9118`의 공식 raw Cargo.toml·build.rs·`src/lib.rs`·`src/fallback.rs`는 archive와 byte exact입니다. 권리 식은 `MIT OR Apache-2.0`이고 기본 `proc-macro` feature·normal unicode-ident 의존·compiler build probe와 fallback XID 호출 두 개를 가집니다. 고정 wasm-bindgen-macro-support는 proc-macro2를 정상 직접 의존하고 source 7개 파일에서 `proc_macro2`를 30회 참조하며 quote·syn의 lock graph도 연결되지만, 이를 actual build cfg·probe 결과·fallback/wrapper 선택·token stream·expanded/generated/runtime code로 확대하지 않습니다.

로컬 배포 WASM producers에는 parent `wasm-bindgen 0.2.117 (fb403cfef)`가 있으나 proc-macro2·source path·build cfg·fallback marker 문자열은 없습니다. Host proc-macro 지원 code 성격에서 이 음성 marker는 사용 부재 증거가 아니며 parent producer도 host 실행·token 결과·generated byte의 서명된 provenance가 아닙니다. 이번 단위는 라이선스 선택지를 정하거나 proc-macro2 고지를 공개 파일에 추가하지 않았고 actual host build·expanded/generated/runtime 범위와 필요한 고지 선택·운반은 계속 `not-confirmed`입니다. 공개 고지·패키지·runtime·원고·프로젝트 라이선스·dist는 바꾸지 않았으며 RIGHTS-08·Task25·M6·ready·release candidate·공개 상태는 계속 open입니다.

## 2026-08-30 quote 1.0.45 archive·token source graph 후속: RIGHTS-08 Important/open 유지

공식 static crates.io의 `quote 1.0.45` archive 31,564 bytes·SHA-256 `41f2619966050689382d2b44f664f4bc593e129785a36d6ee376ddf37259b924`는 고정 Pagefind Web Cargo.lock checksum과 정확히 일치합니다. 35개 파일·추출 합계 138,068 bytes이고 manifest SHA-256은 `8de7580f260256f1c23280c7cd2c1491d6e477df59c513cec9bd89ec5bc0c4c7`입니다. 이전 보존본의 Cargo.toml.orig과 Apache·MIT 전문은 archive와 byte exact이며 checksum을 registry 서명·publisher 신원·재현 빌드로 확대하지 않습니다.

Archive가 선언한 VCS commit `842ffde933fdd76cd1681a288bed136d8b95a97a`의 공식 raw Cargo.toml·build.rs·`src/lib.rs`·`src/runtime.rs`는 archive와 byte exact입니다. 권리 식은 `MIT OR Apache-2.0`이고 default `proc-macro` feature를 proc-macro2에 전달하며 build script는 host rustc minor version으로 diagnostic namespace cfg를 정합니다. 고정 macro-support source에는 경계가 분리된 `quote!` 호출 203개·`quote_spanned!` 호출 5개·`quote::` path 47개가 있고 wrapper의 quote 오류 경로는 4개지만, 이를 actual host feature·cfg·macro 호출 횟수·token stream·expanded/generated/runtime code로 확대하지 않습니다.

첫 evidence harness는 `parse_quote!`의 suffix를 `quote!`로 합친 기대값 때문에 exit1이었고 성공으로 세지 않았습니다. 단어 경계를 적용해 quote 호출과 별개의 syn `parse_quote!` 82개를 분리한 fresh harness는 24/24·실패0·exit0입니다. 로컬 배포 WASM producers에는 parent `wasm-bindgen 0.2.117 (fb403cfef)`가 있으나 quote·token helper·build cfg marker 문자열은 없습니다. Host token 생성 code 성격에서 이 음성 marker는 사용 부재 증거가 아니며 parent producer도 quote 실행·token 결과·generated byte의 서명된 provenance가 아닙니다. 라이선스 선택·고지 운반·actual host/token/expanded/generated/runtime 범위는 계속 `not-confirmed`이고 RIGHTS-08·Task25·M6·ready·release candidate·공개 상태는 open입니다.

## 2026-08-30 syn 2.0.117 archive·parser source graph 후속: RIGHTS-08 Important/open 유지

공식 static crates.io의 `syn 2.0.117` archive 306,011 bytes·SHA-256 `e665b8803e7b1d2a727f4023456bbbbe74da67099c585258af0ad9c5013b9b99`는 고정 Pagefind Web Cargo.lock checksum과 정확히 일치합니다. 105개 파일·추출 합계 2,293,470 bytes이고 manifest SHA-256은 `a5a4dbe39f45f4140c238782fc6f3818db7708a0314d4b6a48dc6b0bc1de0558`입니다. 기존 보존본의 Cargo.toml.orig과 Apache·MIT 전문은 archive와 byte exact이며 checksum을 registry 서명·publisher 신원·재현 빌드로 확대하지 않습니다.

Archive가 선언한 VCS commit `7bcb37cdb3399977658c8b52d2441d37e42e48f2`의 공식 raw Cargo.toml·lib·parse·parse_quote·ident source는 archive와 byte exact입니다. 권리 식은 `MIT OR Apache-2.0`이고 default derive·parsing·printing·clone-impls·proc-macro에 고정 macro-support가 visit·visit-mut·full·extra-traits를 추가 요청합니다. Macro-support의 src Rust 파일 8개 모두 syn 표기를 가지며 source-text의 명시적 `syn::` path는 557개, 경계가 분리된 `parse_quote!` 표기는 82개입니다. 이를 actual compile subset·API 호출·macro entry·parsed token·expanded/generated/runtime code로 확대하지 않습니다.

첫 evidence harness는 내부 parse_quote helper의 lib `pub use`를 잘못 기대하고 public free `syn::parse2`를 정의 파일인 lib가 아닌 parse.rs의 잘못된 signature에서 찾아 exit1이었으며 성공으로 세지 않았습니다. 교정본은 parse_quote module gate·두 공개 macro·내부 helper와 lib의 public free parse2·Parser::parse2 위임·parse.rs trait method를 구분하며 fresh harness는 25/25·실패0·exit0입니다. 로컬 배포 WASM producers에는 parent `wasm-bindgen 0.2.117 (fb403cfef)`가 있으나 syn parser·source·Unicode marker 문자열은 없습니다. Host parser code 성격에서 이 음성 marker는 사용 부재 증거가 아니며 parent producer도 host macro 실행·parsed token·generated byte의 서명된 provenance가 아닙니다. 라이선스 선택·고지 운반·actual host/parser/expanded/generated/runtime 범위는 계속 `not-confirmed`이고 RIGHTS-08·Task25·M6·ready·release candidate·공개 상태는 open입니다.

## 2026-08-30 serde_core 1.0.228 archive·optional feature graph 후속: RIGHTS-08 Important/open 유지

공식 static crates.io의 `serde_core 1.0.228` archive 63,111 bytes·SHA-256 `41d385c7d4ca58e59fc732af25c3983b67ac852c1a25000afe1175de458b67ad`는 고정 Pagefind Web Cargo.lock checksum과 정확히 일치합니다. 27개 파일·추출 합계 392,880 bytes이고 manifest SHA-256은 `be0ab2fcfd7e74d6ab3d1ffe912fbd8be3b28a70bafda89bd3a98c9c4e57ed2b`입니다. 기존 보존본의 Cargo.toml.orig과 Apache·MIT 전문은 archive와 byte exact이며 checksum을 registry 서명·publisher 신원·재현 빌드로 확대하지 않습니다.

Archive가 선언한 VCS commit `a866b336f14aa57a07f0d0be9f8762746e64ecb4`의 `serde_core` 하위 공식 raw Cargo.toml·build·lib·crate_root source는 archive와 byte exact입니다. 권리 식은 `MIT OR Apache-2.0`이고 crate는 trait-only·no-derive 경계를 명시하며 default std·result와 활성화할 수 없는 `cfg(any())` serde_derive lockstep 의존을 가집니다. Build script의 patch-version private module·host rustc/target cfg를 actual 생성 파일·compiler 값·cfg 결과로 확대하지 않습니다.

고정 Pagefind Cargo·src Rust 7개·local_build에는 serde 표기가 없고 direct bit-set의 default std는 bit-vec/std만 활성화합니다. Bit-set serde는 별도 optional feature이고 bit-vec std의 `serde?/std`는 이미 활성화된 optional dependency에만 전달하는 weak syntax이므로 확인한 default source manifest graph에는 serde 활성화 edge가 없습니다. Lock의 optional package 후보 존재를 active feature·linked code로 확대하지 않으며 actual 과거 build feature·cfg·runtime subset도 source graph만으로 확정하지 않습니다. Fresh evidence harness는 25/25·실패0·exit0입니다. 배포 WASM의 serde_core·derive·trait marker 음성 결과도 독립적인 부재 증거나 provenance가 아니므로 라이선스 선택·고지 운반·actual feature/linked/runtime 범위는 `not-confirmed`, RIGHTS-08·Task25·M6·ready·release candidate·공개 상태는 open입니다.

## 2026-08-30 serde 1.0.228 archive·facade optional feature graph 후속: RIGHTS-08 Important/open 유지

공식 static crates.io의 `serde 1.0.228` archive 83,652 bytes·SHA-256 `9a8e94ea7f378bd32cbbd37198a4a91436180c5bb472411e48b5ec2e2124ae9e`는 고정 Pagefind Web Cargo.lock checksum과 정확히 일치합니다. 33개 파일·추출 합계 561,551 bytes이고 manifest SHA-256은 `9530ad71ebe74e5f4d75b069b822cf57fcf25a4165c555faff9c8bd2bc307769`입니다. 기존 보존본의 Cargo.toml.orig과 Apache·MIT 전문은 archive와 byte exact이며 checksum을 registry 서명·publisher 신원·재현 빌드로 확대하지 않습니다.

Archive가 선언한 VCS commit `a866b336f14aa57a07f0d0be9f8762746e64ecb4`의 `serde` 하위 공식 raw Cargo.toml·build·lib source는 archive와 byte exact입니다. 권리 식은 `MIT OR Apache-2.0`이고 facade는 exact serde_core의 default feature를 끄고 result를 요청하여 trait을 재노출하며 default std와 별도 optional derive를 제공합니다. Build script의 patch-version private module·host rustc cfg source 계약을 actual 생성 파일·compiler 값·cfg 결과로 확대하지 않습니다.

고정 Pagefind Cargo·src Rust 7개·local_build에는 serde 표기가 없고 direct bit-set의 default std는 bit-vec/std만 활성화합니다. Bit-set serde와 bit-vec serde는 별도 optional이며 bit-vec의 optional dependency는 facade에 derive·alloc을 요청하고 weak `serde?/std`는 이미 활성화된 경우에만 std를 전달합니다. Lock의 serde·serde_core·serde_derive 후보 존재를 actual feature resolution·derive 실행·generated code·linked/runtime subset으로 확대하지 않습니다. Fresh evidence harness는 24/24·실패0·exit0입니다. 배포 WASM의 serde·core·derive·trait/private marker 음성 결과와 parent producer도 독립적인 부재 증거나 provenance가 아니므로 라이선스 선택·고지 운반·actual feature/cfg/generated/linked/runtime 범위는 `not-confirmed`, RIGHTS-08·Task25·M6·ready·release candidate·공개 상태는 open입니다.

## 2026-08-30 serde_derive 1.0.228 archive·optional host macro graph 후속: RIGHTS-08 Important/open 유지

공식 static crates.io의 `serde_derive 1.0.228` archive 59,605 bytes·SHA-256 `d540f220d3187173da220f885ab66608367b6574e925011a9353e4badda91d79`는 고정 Pagefind Web Cargo.lock checksum과 정확히 일치합니다. 36개 파일·추출 합계 333,321 bytes이고 manifest SHA-256은 `d5dc9e2055725fac4eb2e4e96dab12e13a3fcbce8b5dd12dda041b647695de58`입니다. 기존 보존본의 Cargo.toml.orig과 Apache·MIT 전문은 archive와 byte exact이며 checksum을 registry 서명·publisher 신원·재현 빌드로 확대하지 않습니다.

Archive가 선언한 VCS commit `a866b336f14aa57a07f0d0be9f8762746e64ecb4`의 `serde_derive` 하위 공식 raw Cargo.toml·lib source는 archive와 byte exact입니다. 권리 식은 `MIT OR Apache-2.0`이고 default feature가 빈 proc-macro crate이며 proc-macro2·quote·syn의 host graph에 연결됩니다. Serialize·Deserialize 진입점 두 개가 parse_macro_input 후 ser/de expansion으로 연결되고 src Rust 28파일 중 proc_macro2/quote/syn 표기 파일은 19/20/21개이지만, 이 source 표면을 actual host invocation·macro 횟수·parsed token·expanded/generated code로 확대하지 않습니다.

Serde facade의 derive와 bit-vec의 serde/derive 경로는 모두 optional이고 Pagefind→bit-set→bit-vec의 default source graph은 이 경로를 활성화하지 않습니다. Lock의 serde_derive→proc-macro2/quote/syn 후보를 actual feature resolution·host macro 실행·generated code·linked/runtime subset으로 확대하지 않습니다. 첫 harness는 WASM의 `add_synthetic_filter` 안 `syn`을 crate marker로 오인해 exit1이었고 성공으로 세지 않았습니다. 구체적 source marker로 좁힌 fresh harness는 22/22·실패0·exit0입니다. 음성 marker와 parent producer도 host macro 미사용·generated byte 미포함·provenance의 독립 증거가 아니므로 라이선스 선택·고지 운반·actual feature/host/expanded/generated/linked/runtime 범위는 `not-confirmed`, RIGHTS-08·Task25·M6·ready·release candidate·공개 상태는 open입니다.

## 2026-08-30 wasm-bindgen-macro-support 0.2.117 archive·host expansion graph 후속: RIGHTS-08 Important/open 유지

공식 static crates.io의 `wasm-bindgen-macro-support 0.2.117` archive 64,391 bytes·SHA-256 `dca9693ef2bab6d4e6707234500350d8dad079eb508dca05530c85dc3a529ff2`는 고정 Pagefind Web Cargo.lock checksum과 정확히 일치합니다. 14개 파일·추출 합계 304,762 bytes이고 manifest SHA-256은 `b965ef616b12e6364e36a8491420cde4fdd5e8b8176f88f1c65c96c78d2d7372`입니다. 기존 보존본의 Cargo.toml.orig과 Apache·MIT 전문은 archive와 byte exact이며 checksum을 registry 서명·publisher 신원·재현 빌드로 확대하지 않습니다.

Archive가 선언한 VCS commit `fb403cfef5041fbe320eb8423003bda49ca33125`의 `crates/macro-support` 하위 공식 raw Cargo.toml·lib·parser·codegen·encode source는 archive와 byte exact입니다. 권리 식은 `MIT OR Apache-2.0`이고 wrapper가 네 public expansion entry를 호출하며 host graph는 bumpalo·proc-macro2·quote·syn·exact wasm-bindgen-shared에 연결됩니다. Src Rust 8파일 모두 syn 표기를 가지며 명시적 `syn::` path 557개·`parse_quote!` 82개, 선택 source의 `quote!` 203개·`quote_spanned!` 5개·`quote::` path 47개, 선택 7파일의 proc_macro2 표기 30개, encode의 `bumpalo::Bump` 완전 수식 사용 2개를 actual host feature·entry invocation·parsed token·expanded/generated code로 확대하지 않습니다.

첫 evidence harness는 완전 수식 `bumpalo::Bump`를 import 형태로 잘못 기대해 exit1이었고 성공으로 세지 않았습니다. 실제 source 계약으로 좁힌 fresh harness는 27/27·실패0·exit0입니다. 배포 WASM에는 parent `wasm-bindgen 0.2.117 (fb403cfef)` producer가 있으나 macro-support·구체적 expansion/parser/token/bumpalo source marker는 없습니다. Host expansion code의 음성 marker와 parent producer는 사용 부재·generated byte 미포함·provenance를 독립 증명하지 않으므로 라이선스 선택·고지 운반·actual host/parsed/expanded/generated/runtime 범위는 `not-confirmed`, RIGHTS-08·Task25·M6·ready·release candidate·공개 상태는 open입니다.

## 2026-08-30 고정 Rust crate 21개 권리 결정 입력 행렬: archive 추적 완료, RIGHTS-07/08 open 유지

고정 Pagefind Web Cargo.lock의 프로젝트 1개와 외부 후보 21개를 다시 분리했습니다. 외부 21개 모두 전용 archive·evidence JSON·보고서가 있고 archive SHA-256은 lock checksum과 exact입니다. Primary source manifest 역할은 직접 dependency 6개, normal transitive 후보 5개, build-host/generated 경계 후보 7개, default source graph에서 optional 비활성 후보 3개로 나뉩니다. `unicode-ident`는 wasm-bindgen-shared의 normal 경로와 proc-macro2의 host 경로를 모두 가지므로 primary normal·secondary host/generated로 보존합니다. 이 분류는 actual 과거 feature resolution·host invocation·expanded/generated code·linked runtime·Rust std subset의 attestation이 아닙니다.

선언 권리 class는 dual MIT/Apache 17개, BlueOak 1개, GPL-3.0-only 1개, MIT 1개, dual+Unicode-3.0 1개입니다. 현재 공개 고지에서 archive와 byte exact 운반을 확인한 crate 원문은 minicbor 1개이고, 이를 나머지 20개나 RIGHTS-08 전체의 해소로 확대하지 않습니다. Pagefind root MIT도 전이 crate의 license 선택·추가 고지·generated material·GPL 대응을 대신하지 않습니다.

RIGHTS-07은 pagefind_microjson의 GPL 버전 불일치·complete corresponding source/호환성·허락 또는 Pagefind 제거/교체 결정이 필요합니다. RIGHTS-08은 pagefind_stem의 source 내부 Snowball 고지, unicode-ident의 결합 Unicode 조건, dual 후보의 선택·운반, Rust std 범위를 해소해야 합니다. 보수적 고지 패키지, 승인된 정확 Rust 재현 범위 좁히기, 핵심 검색 구성 변경은 각각 사용자 결정이 필요한 별도 경로이며 이번 집계에서 프로젝트 라이선스·Pagefind·고지·runtime·dist를 바꾸지 않았습니다. Fresh 집계 harness는 12/12·실패0·exit0이고 Task25·M6·ready·release candidate·공개 상태는 open입니다.

결정 순서·선택지·별도 승인·경로별 검증 방법은 [RIGHTS-07/08 결정 브리프](rights-decision-brief.md)에 모았습니다. 이 연결은 어느 경로의 선택·권리 허가·프로젝트 라이선스 변경·고지 구현·Pagefind 변경도 뜻하지 않습니다.

프로젝트가 직접 작성·제작했다고 분류한 원고·학습 도표·EDU-FIXTURE의 경위와 소유자만 확인할 수 있는 예외는 [소유자 권리 확인 체크리스트](rights-owner-attestation-checklist.md)에 분리했습니다. 답변 전에는 RIGHTS-01/02/05/06을 해소하지 않으며 제3자 권리·고지 문제도 이 확인으로 대체하지 않습니다.
