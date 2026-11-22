# RIGHTS-03/04 제3자 자산 결정 브리프

확인일: 2026-08-30 · 범위: Task 25의 배포 UI 코드·inline 아이콘·CSS SVG·제3자 고지 · 현재 판정: RIGHTS-03/04 `owner-cleared`, M7 기술 재확인 대기 · 법률 자문 아님 · push·배포·공개 URL 승인 아님

## 이 문서가 필요한 이유

이 브리프는 [공개 안전 감사](release-safety-audit.md)에서 확인한 배포 포함물·고지·기원 근거와 미확인 경계를 새 법률 결론으로 바꾸지 않고, 푸디님의 현재 결정과 결정 전 선택지·검증 계약을 함께 보존합니다. 아래 소유자 결정은 현행 구성요소를 유지하는 프로젝트 공개 판단이며, 상류 provenance나 법률 해석을 독립적으로 확인된 사실로 바꾸지 않습니다.

[RIGHTS-07/08 결정 브리프](rights-decision-brief.md)의 Pagefind GPL·Rust crate 문제와 이 문서의 UI 자산·고지 문제는 일부 배포 파일을 공유하지만 같은 finding이 아닙니다. Pagefind 유지 여부가 RIGHTS-07/08의 선결 결정인 것과 별개로, Starlight inline 아이콘과 CSS data SVG의 권리 경계는 Pagefind만 제거해도 전부 사라지지 않습니다.

## 2026-08-30 소유자 결정

선택 경로: 현행 아이콘·CSS/SVG·기존 오픈소스 구성요소 유지.

푸디님은 프로젝트 소유자로서 현재 사이트의 아이콘·CSS/SVG와 기타 기존 오픈소스 구성요소를 제거하거나 교체하지 않고 그대로 유지하며, 이 구성요소들이 현재 공개를 막지 않는다고 판단했습니다. 따라서 RIGHTS-03/04의 권리 관련 미선택 상태는 `owner-cleared`로 재판정합니다.

- 외부 권리자 문의를 진행하지 않습니다.
- 유료·전문 법률 검토를 진행하지 않습니다.
- 구성요소 제거·교체를 진행하지 않습니다.
- 아래 과거 조사에서 남긴 상류 기원·byte-exact 계보·권리 해석의 `not-confirmed`는 연구 경계로 보존하며, 소유자 판단을 독립 법률 확인으로 확대하지 않습니다.
- 현행 고지의 정확한 운반과 실제 release candidate의 배포 포함물은 M7 외부 쓰기 직전에 다시 확인합니다.
- 이 결정은 push·배포·공개 URL 생성 승인이 아니며 외부 쓰기는 푸디님의 별도 승인을 기다립니다.

## 현재 고정된 사실

- 생성 배포물에서 Starlight `Icons.ts`의 12개 이름과 일치하는 inline SVG 14개를 확인했습니다. 프로젝트가 직접 만든 favicon과 Starlight가 삽입한 아이콘을 구분하며, 아이콘 모양을 프로젝트 직접 제작 자산으로 재분류하지 않습니다.
- 유지관리자 기록은 최초 비로고 아이콘 세트의 Unicons 기원을 확인합니다. 최초 컴포넌트 직전 Unicons 4.0.8 원문은 MIT가 아니라 IconScout Simple License이고, 현재 `public/third-party-notices.txt`는 이 원문과 IconScout 귀속을 byte exact로 보존합니다.
- 최초 아이콘 컴포넌트에는 현재 이름 12개 중 11개가 있었고 `link-alt`의 현재 path는 고정 Unicons 4.0.8의 같은 이름 SVG와 정규화 뒤 일치합니다. 그러나 모양·이름·세트 기원만으로 모든 개별 파일의 byte-exact 계보, 각 수정 범위, 기여 권한과 조건 해석을 확정하지 않으며 이 범위는 `not-confirmed`입니다.
- 배포 CSS에서 CSS data SVG 15회와 원문 10개를 직접 package source에 연결했습니다. Expressive Code CSS08·09, Starlight CSS02~07, Pagefind CSS01·10은 각 저장소 도입 commit부터 고정 release까지의 byte 연속성 또는 source-to-distribution 연결을 확인했습니다.
- 위 CSS SVG의 저장소 내부 이력과 package MIT 원문은 확인했지만 각 형상의 더 이전 외부 원전 부재, 독립 창작, 충분한 기여 권한과 법적 소유자를 증명하지 않습니다. 좌표 유사성만으로 Starlight CSS SVG를 Unicons나 다른 세트에 귀속하지도 않습니다.
- `adequate-little-templates 1.0.2`는 Pagefind component UI의 직접 import·호출과 배포 parser/evaluator 코드, MIT 원문 운반을 확인해 해당 구성요소 범위만 부분 해소했습니다. 이 부분 해소는 아이콘·CSS SVG·다른 JS/WASM/Rust 포함물·전체 registry provenance나 RIGHTS-03/04 전체를 해소하지 않습니다.
- 공개 고지는 Astro·Starlight·Expressive Code·확인된 Vite helper·Pagefind root·Svelte·mark.js·bcp 계열·Night Owl·adequate-little-templates·Unicons 등 확인된 범위를 전달합니다. 고지 파일의 존재와 build byte 전달 검사는 누락 방어이지만 권리 체인·호환성·전체 포함물 감사를 대신하지 않습니다.

## 결정 순서

명시적인 비-MIT 조건과 세트 기원 근거가 있는 Starlight inline 아이콘 경로를 먼저 결정합니다. 그다음 CSS SVG를 Expressive Code·Starlight·Pagefind source family별로 유지·확인·교체할 범위를 결정합니다. 아이콘만 교체해 CSS SVG가 자동으로 해소되거나, CSS SVG를 유지한다고 Unicons 아이콘 조건이 자동으로 충족되는 것으로 기록하지 않습니다.

### 선택할 경로

| 경로 | 의미 | 필요한 별도 승인·입력 | 이 경로만으로 남는 것 |
|---|---|---|---|
| 공개 보류 유지 | 현재 코드·자산·고지를 바꾸지 않고 공개 베타를 보류합니다. | 추가 승인은 필요 없지만 공개 완료 일정은 열어 둡니다. | RIGHTS-03/04·Task 25·M6·release candidate가 계속 open입니다. |
| 전문 검토 후 유지 | 현재 inline 아이콘·CSS SVG와 고지를 유지할 수 있는지, IconScout 조건·package MIT·프로젝트 CC BY 4.0/MIT 표시·배포 형태를 전문 검토합니다. | 검토자·질문·자료 전달 범위·비용·외부 업로드 여부를 각각 승인해야 합니다. | 검토 범위 밖 파일·버전·배포 방식·기여 권리와 다른 RIGHTS finding은 남습니다. |
| 권리자 확인·허락 | Starlight·IconScout 또는 권한 있는 상류 주체에게 정확한 아이콘·수정·배포·귀속 범위를 확인하거나 필요한 허락을 받습니다. | 외부 문의·응답 보존·필요한 전문 검토를 별도 승인해야 합니다. | 응답 주체의 권한과 답변 범위 밖 아이콘·CSS SVG·버전은 계속 open입니다. |
| 직접 제작 자산으로 교체 | 문제가 남는 inline 아이콘 또는 CSS SVG를 프로젝트가 직접 설계하고 소유자 경위를 확인할 수 있는 자산으로 교체합니다. | 교체 범위·시각 설계·Starlight/Pagefind override 방식과 필요한 패키지·정보 구조 영향은 구현 전에 별도 승인해야 합니다. | 교체하지 않은 source family, 새 자산의 제작·기여 권리, 접근성·테마·브라우저 회귀가 새 게이트가 됩니다. |

### 운영상 권장 순서

법률 결론이 아니라 재작업을 줄이는 순서로는 먼저 공통 내비게이션에 반복되는 Starlight inline 아이콘을 유지할지 결정하는 편이 적절합니다. 유지가 필수라면 전문 검토 또는 권리자 확인의 정확한 질문 범위를 승인하고, 필수가 아니라면 직접 제작 대체 자산의 최소 목록과 override 가능성을 별도 설계합니다. 그 결과와 무관하게 CSS SVG 10개 원문은 source family별로 다시 결정합니다.

이 문단과 위 표는 소유자 결정 전 비교 기준을 보존합니다. 현재 선택 경로는 현행 구성요소 유지이며, 전문 검토·권리자 확인·교체는 진행하지 않습니다. 한 source family의 과거 근거를 다른 family에서 독립적으로 확인된 권리로 일반화하지 않습니다.

## 경로별 검증 계약

### 유지 경로 검증

- 전문 검토 질문에 정확한 배포 파일, Starlight 0.41.4·Unicons 4.0.8 시점·Expressive Code 0.44.1·Pagefind 1.5.2, 현행 고지와 프로젝트 라이선스 적용표를 포함합니다.
- 검토 결론의 가정·제외 범위·적용 버전·배포 형태·필요 귀속·동일 조건·재배포 제한을 보존하고 실제 release candidate와 대조합니다.
- package MIT 표기를 더 이른 외부 원전이나 Unicons 원문에 확대하지 않고, 고지 운반 PASS를 권리 체인 PASS로 기록하지 않습니다.
- retained asset 목록과 build 안의 실제 path·hash·occurrence를 다시 고정하고 독립 검토가 Critical·Important 0인지 확인합니다.

### 권리자 확인 경로 검증

- 응답 주체가 해당 파일·세트·수정·배포 조건을 확인할 권한이 있는지, 정확한 파일·버전·commit·파생 범위와 프로젝트의 공개 저장소·Pages 배포를 다루는지 확인합니다.
- 일반적인 “패키지를 사용할 수 있다”는 답변을 모든 개별 아이콘·CSS SVG의 기여 권리나 다른 버전의 허락으로 확대하지 않습니다.
- 허락·clarification 원문은 외부 문의 승인을 받은 뒤 보존 위치와 공개 가능한 요약을 분리하고, 개인정보나 계정 메타데이터를 저장소에 복제하지 않습니다.
- 필요한 귀속·링크·동일 조건·notice 변경을 실제 정본과 build output에서 byte·HTTP·표시 범위로 재검증합니다.

### 교체 경로 검증

- 교체 대상의 source family·이름·정확 path와 old asset hash를 먼저 고정하고, 원 package·생성 CSS·HTML·build output에서 해당 path·hash가 0건인지 확인합니다.
- 새 SVG 또는 CSS 형상의 편집 가능한 원본·title/desc 또는 접근 가능한 이름·light/dark marker·테마 대비·390px와 desktop 판독성을 자산별로 검증합니다.
- 실제 headed Chrome에서 관련 내비게이션·검색·TOC·복사 버튼·details 상태를 desktop/mobile과 light/dark로 확인하고 console·pageerror·overflow·잘림·키보드 접근성 실패를 기록합니다.
- 기존 고지는 해당 구성요소가 다른 코드·스타일에 남지 않았음을 확인하기 전 제거하지 않으며, notice 삭제 자체도 원문·build byte·공개 안전 검사를 통과해야 합니다.
- 새 자산 제작·기여 경위는 [소유자 권리 확인 체크리스트](rights-owner-attestation-checklist.md)의 RIGHTS-02 답변과 다시 대조하고 독립 검토가 Critical·Important 0이어야 합니다.

## 결정 전 확인 항목 기록

1. Starlight/Unicons 기원의 inline 아이콘을 공개 베타에 유지해야 하는지, 직접 제작 자산으로 교체할 수 있는지 결정해야 합니다.
2. 유지한다면 IconScout 조건·현재 수정·배포·귀속·프로젝트 라이선스 표시를 다루는 전문 검토를 승인할지 결정해야 합니다.
3. 별도로 Starlight·IconScout 또는 권한 있는 상류 주체에 정확한 권리·허락 범위를 묻는 외부 문의를 승인할지 결정해야 합니다.
4. Expressive Code·Starlight·Pagefind의 CSS SVG를 package source·MIT 근거와 전문 검토 아래 유지할지, source family별 교체 검토를 승인할지 결정해야 합니다.
5. 교체를 선택하면 구현 전에 대상 목록, override 방식, 시각·접근성 수용 기준과 package/정보 구조 변경 허용 범위를 승인해야 합니다.

결정 전 기본 상태였던 공개 보류는 2026-08-30 소유자 결정으로 해소됐습니다. RIGHTS-03/04는 소유자 공개 판단 범위에서 `owner-cleared`이며, `not-confirmed` 연구 경계와 M7 외부 쓰기 직전 기술 고지·배포 재확인은 남습니다. 이 결정 단위의 Fix Round 1 독립 검토는 Critical 0·Important 0·Minor 0으로 PASS했습니다. Task 25 closeout, M6, `ready`, Claude 검토, release candidate, 원격 검증, push·배포·공개 URL 생성은 아직 완료되지 않았습니다.
