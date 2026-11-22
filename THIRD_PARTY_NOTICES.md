# 제3자 저작물·의존성 고지

이 문서는 현재 소스 저장소에 직접 포함한 자산과 별도로 설치하는 주요 의존성을 구분합니다. 프로젝트의 [CC BY 4.0·MIT 적용 정책](LICENSE_POLICY.md)은 원 권리자가 가진 저작권·상표권·데이터 이용 조건을 재허가하거나 대체하지 않습니다. 확인 기준일은 2026-08-28이며 법률 자문이나 전체 권리 감사 완료 확인서가 아닙니다.

## 소스에 직접 포함한 자료

| 범위 | 현재 확인한 포함 방식 | 권리·이용 경계 |
|---|---|---|
| `src/assets/diagrams/**/*.svg`, `src/assets/diagrams/source/**/*.mmd` | 프로젝트에서 직접 제작한 교육 도표와 원본 | 프로젝트 콘텐츠의 CC BY 4.0 적용; 외부 도표를 가져오는 경우 별도 출처·권한 확인 필요 |
| `public/favicon.svg` | 프로젝트에서 직접 작성한 사각형·선·원 도형 | 프로젝트 코드 자산의 MIT 적용; 외부 아이콘 팩을 포함한 것으로 분류하지 않음 |
| `src/styles/custom.css`의 폰트 이름 | Pretendard·Inter·운영체제 글꼴 이름을 CSS에 선언 | 현재 tracked 파일에 폰트 파일 없음; 이름 선언은 폰트 복제·재배포 허락이 아님 |
| 학습 본문·조사 문서의 제품명·상표·인용·출처 링크 | 개념 설명과 출처 표시에 사용 | 상표는 각 권리자에게 귀속; 인용과 연결된 원문은 프로젝트 라이선스 대상에서 제외하며 공식 제휴·보증을 뜻하지 않음 |
| 주가 대시보드 교육 예시 | `EDU-FIXTURE`로 표시한 가상 데이터 | 실제 시장 데이터 묶음을 배포하지 않음; 향후 실제 데이터는 원천·이용·재배포 조건을 별도로 확인 |
| `LICENSE-CONTENT`, `LICENSE-CODE` | 공식 CC BY 4.0 legal code와 MIT 문구 | 원문·고지 보존; Creative Commons의 라이선스 문구와 상표 경계는 원문 말미를 따름 |

현재 tracked 파일 목록에서는 외부 래스터 이미지·폰트 바이너리나 별도 제3자 코드 vendor 디렉터리를 확인하지 않았습니다. 이것은 모든 문장의 독창성, 과거 이력의 권리 또는 기여자의 동의까지 확인했다는 뜻이 아닙니다. 기존 인용·과거 검토 기록·새 공개 스냅샷의 권리 판정은 공개 전 감사에서 별도로 닫아야 합니다.

## 설치 의존성의 원 고지

아래는 `package-lock.json` 및 로컬 설치 패키지의 실제 메타데이터·고지 파일을 대조한 주요 항목입니다. 패키지 자체는 `node_modules/`에 설치되며 공개 소스 스냅샷에 포함하지 않습니다. 버전이 바뀌면 다시 확인합니다.

| 패키지 | 확인 버전·표시 라이선스 | 실제 확인한 고지와 한계 |
|---|---|---|
| `astro` | 7.1.6 · MIT | `node_modules/astro/LICENSE`: Copyright (c) 2021 Fred K. Schott. SvelteKit에서 유래한 부분의 2020 contributors 고지와 Vite에서 유래한 부분의 2019-present Yuxi (Evan) You and Vite contributors 고지도 포함됨 |
| `@astrojs/starlight` | 0.41.4 · MIT | `node_modules/@astrojs/starlight/LICENSE`: Copyright (c) 2023 Astro contributors |
| `pagefind` | 1.5.2 · MIT | `node_modules/pagefind/LICENSE/LICENSE`에 Copyright (c) Pagefind 고지; 함께 포함된 `LICENSE/LICENSE-vscode-ripgrep`의 Microsoft Corporation MIT 고지도 보존 대상 |
| `@pagefind/default-ui` | 1.5.2 · MIT | 2026-08-28 공식 v1.5.2 소스의 패키지 선언과 저장소 루트 LICENSE 전문(Copyright 2022 Pagefind)을 확인함. 설치된 패키지14파일에는 별도 LICENSE가 없으므로 아래 별도 배포 고지에 확인된 원문을 보존함 |

Astro·Starlight·Pagefind의 MIT 고지는 저작권과 허락 고지를 복사본 또는 상당 부분에 포함하도록 하며 무보증·책임 제한을 둡니다. 이 표의 요약이나 프로젝트 `LICENSE-CODE`의 저작권 한 줄로 원 패키지 고지를 대체하지 않습니다. 설치 원본의 전체 고지와 포함된 부분 저작물 고지를 함께 확인합니다.

Pagefind 공식 확인은 [v1.5.2 릴리스](https://github.com/Pagefind/pagefind/releases/tag/v1.5.2)가 가리키는 commit `bf17396721be637cc67c8ed7ead1dc7b8ac43d96`의 [루트 LICENSE](https://github.com/Pagefind/pagefind/blob/bf17396721be637cc67c8ed7ead1dc7b8ac43d96/LICENSE)와 [default-ui package.json](https://github.com/Pagefind/pagefind/blob/bf17396721be637cc67c8ed7ead1dc7b8ac43d96/pagefind_ui/default/package.json)을 기준으로 합니다. 승인된 옛 CloudCannon/pagefind 주소는 현재 같은 Pagefind/pagefind 저장소로 연결됩니다. 원본 package.json과 설치본은 version 값만 다르고, 같은 commit의 release workflow에는 배포 버전을 지정한 뒤 패키징하는 절차가 있습니다. 이는 설치 패키지 전체의 빌드 재현·공급망 증명은 아닙니다.

Node wrapper의 `Copyright (c) Pagefind` 및 Microsoft 고지 두 파일은 같은 commit의 원문과 설치본이 byte 단위로 일치합니다. 이 고지와 저장소 루트의 `Copyright 2022 Pagefind`는 서로 다른 원문이므로 하나로 치환하지 않습니다. wrapper에 Microsoft 고지가 있다는 사실만으로 해당 코드가 브라우저 배포물에도 포함됐다고 단정하지 않습니다.

잠금 파일에는 MIT 외에도 Apache-2.0, ISC, BSD 계열, MPL-2.0, LGPL-3.0-or-later 등 여러 라이선스와 복합 표현이 있습니다. 따라서 “모든 의존성이 MIT”라고 판단하지 않습니다. 패키지 메타데이터의 라이선스 표시는 실제 배포물에 어떤 코드가 들어갔는지나 모든 의무를 충족했는지를 증명하지 않습니다. 외부 GitHub Action도 각 배포본의 원 조건을 유지하며, workflow에서 참조한다는 이유로 프로젝트 MIT로 재허가하지 않습니다.

## 생성 사이트를 배포하기 전 남은 확인

2026-08-28 고정 crate 원문 후속에서 pagefind_microjson0.1.4의 GPL 선언과 소스 주석의 버전 범위 불일치, minicbor의 BlueOak·unicode-ident의 Unicode 추가 조건·pagefind_stem 소스 내부 Snowball 고지를 확인했습니다. 실제 WASM과의 정확한 연결·배포 조건 및 필요한 고지/대응 소스 제공은 미해결입니다. [안전 감사의 RIGHTS-07/08](docs/project/reviews/public-beta-1/release-safety-audit.md)에 Important/open으로 기록하며, Pagefind 루트 MIT나 아래 부분 고지 파일로 이 조건을 대체하지 않습니다. 프로젝트 전체에 GPL이 자동 적용된다고 단정하거나 라이선스를 임의 변경하지 않았습니다.

확인된 원 고지는 [`public/third-party-notices.txt`](public/third-party-notices.txt)에 전문으로 보존합니다. Astro의 정적 파일 복사로 생성 사이트 루트의 `third-party-notices.txt`에 전달하며 `npm run validate:built`는 원본의 존재·비어 있지 않음·빌드본과의 byte 일치를 검사합니다. 이는 확인된 텍스트의 전달 검사이지 모든 구성요소의 권리 조건이 충족됐다는 판정이 아닙니다. 실제 파일별 포함 근거와 원 고지 추출 범위·SHA는 [안전 감사](docs/project/reviews/public-beta-1/release-safety-audit.md)에서 이어지는 로컬 증거에 기록합니다.

`dist/`를 소스 스냅샷에서 제외하더라도 실제 사이트에 전달하는 JavaScript·CSS·WebAssembly·검색 UI·아이콘 등은 별도로 재배포되는 자료입니다. 최종 빌드에서 포함되는 패키지와 원 고지를 대조하고, 각 라이선스에 필요한 고지·라이선스 전문·소스 제공 등 조건이 있다면 그 배포 방식에 맞게 충족해야 합니다. 빌드에만 쓰인 의존성과 브라우저에 전달되는 구성요소를 구분하며, 이 문서 작성만으로 생성 사이트의 고지 의무를 완료했다고 주장하지 않습니다.

2026-08-28 후속에서 CSS 안의 SVG15회는 직접 소스와 연결했고 고정 Pagefind commit의 component CSS는 배포본 전체와 일치했습니다. 별도 pagefind_web/Cargo.lock의22개 항목과 실제 WASM의 제작 도구 메타데이터도 보존했습니다. 직접 소스 일치는 최초 저작자·이전 라이선스 증명이 아니며 잠금 목록과 제작 도구 이름도 실제 포함 코드 전체를 증명하지 않습니다. 이 근거만으로 고지 파일에 미확인 항목을 추가하지 않았습니다.

공개 전에는 Pagefind WASM과 전이 의존성의 정확한 포함 범위·남은 원 고지, inline 및 CSS 아이콘의 이전 출처·권리, 제3자 발췌·기여 권리와 공개 스냅샷 감사를 확인해야 합니다. 현재 고지 파일은 확인된 항목의 부분 집합이며 RIGHTS-03/04 전체를 닫지 않습니다. 새 제3자 자산은 경로·원 권리자·원문 URL·라이선스·확인일·수정 여부를 기록하고 허용 범위가 불명확하면 포함하지 않습니다.
