# 라이선스 적용 정책

이 저장소의 직접 작성한 교육 콘텐츠에는 **Creative Commons Attribution 4.0 International(CC BY 4.0)**을, 사이트 코드·설정·자동화에는 **MIT License**를 적용합니다. 같은 파일을 두 라이선스 중 하나로 자유롭게 고르는 방식이 아니라 아래 경로에 따라 적용 범위를 나눕니다. 제3자 저작물과 프로젝트가 허락할 권리가 없는 자료는 이 허락에 포함되지 않습니다.

공식 원문 확인일은 2026-08-28입니다. 이 문서는 프로젝트의 적용 범위와 재사용 안내이며 법률 자문이 아닙니다. 실제 조건은 [콘텐츠 라이선스 원문](LICENSE-CONTENT)과 [코드 라이선스 원문](LICENSE-CODE)을 따릅니다. 라이선스 파일 작성은 권리 감사·독립 검토·소유자 승인·공개 베타 출시 완료를 뜻하지 않습니다.

## 경로별 적용 범위

아래 표는 현재 저장소 파일의 분류입니다. `**`는 해당 디렉터리 아래 파일 전체를 뜻하며, 파일 안에 별도로 표시한 제3자 자료는 항상 제외합니다. 새 종류의 파일이나 외부 자료를 추가할 때는 경로·출처·권한을 먼저 확인하고 이 표와 [제3자 고지](THIRD_PARTY_NOTICES.md)를 함께 갱신합니다.

| 경로 | 적용 | 범위와 이유 |
|---|---|---|
| `src/content/docs/**` | CC BY 4.0 | 직접 작성한 학습 본문·표·가상 예시·교육용 코드/명령 블록과 frontmatter를 포함한 문서 전체 |
| `src/assets/diagrams/**/*.svg` | CC BY 4.0 | 직접 제작한 교육용 다이어그램 |
| `src/assets/diagrams/source/**/*.mmd` | CC BY 4.0 | 교육용 다이어그램의 Mermaid 원본 |
| `src/components/**` | MIT | 사이트 컴포넌트와 그 안의 문구 |
| `src/styles/**` | MIT | 사이트 스타일; 선언된 폰트 이름의 권리까지 허락하지 않음 |
| `public/favicon.svg` | MIT | 사이트 인터페이스용으로 직접 작성한 도형 아이콘 |
| `public/third-party-notices.txt` | 원 고지 유지 | 확인된 제3자 저작권·라이선스 전문을 배포물에 전달하는 고지. 직접 작성한 안내는 CC BY 4.0이며 인용한 원 고지의 조건을 대체하지 않음 |
| `astro.config.mjs` | MIT | 사이트 빌드·검색·배포 설정 |
| `src/content.config.ts` | MIT | 콘텐츠 스키마 코드 |
| `tsconfig.json` | MIT | TypeScript 설정 |
| `package.json` | MIT | 이 프로젝트의 패키지 설정; 의존성 자체는 제외 |
| `package-lock.json` | MIT | 이 프로젝트의 의존성 고정 정보; 열거된 패키지의 원 라이선스는 유지 |
| `.editorconfig` | MIT | 편집기 설정 |
| `.gitignore` | MIT | Git 제외 설정 |
| `.nvmrc` | MIT | 개발 런타임 설정 |
| `.github/workflows/**` | MIT | CI·배포 자동화 코드; 참조하는 외부 Action의 권리는 제외 |
| `.github/ISSUE_TEMPLATE/content-error.yml` | MIT | GitHub가 해석하는 콘텐츠 오류 입력 설정과 안내 문구 |
| `.github/ISSUE_TEMPLATE/technical-accuracy.yml` | MIT | 기술 정확도 입력 설정과 안내 문구 |
| `.github/ISSUE_TEMPLATE/accessibility.yml` | MIT | 접근성 입력 설정과 안내 문구 |
| `.github/ISSUE_TEMPLATE/config.yml` | MIT | Issue 선택 화면 설정 |
| `.github/pull_request_template.md` | CC BY 4.0 | 사람이 작성하는 변경·검증 안내 양식 |
| `scripts/**` | MIT | 콘텐츠·링크·계획·빌드 검증 코드 |
| `tests/**` | MIT | 테스트 코드와 프로젝트가 직접 작성한 테스트 fixture |
| `docs/project/**` | CC BY 4.0 | 편집·품질·검토 정책과 기록; 외부 발췌와 비공개 자료는 제외 |
| `docs/adr/**` | CC BY 4.0 | 아키텍처 결정 설명 |
| `docs/superpowers/specs/**` | CC BY 4.0 | 프로젝트 요구사항·설계 설명 |
| `docs/superpowers/plans/**` | CC BY 4.0 | 프로젝트 실행 계획과 설명용 명령 블록 |
| `research/**` | CC BY 4.0 | 직접 작성한 조사·해석·출처 지도; 연결된 원문과 인용은 제외 |

프로젝트 운영 문서와 사람용 템플릿은 다음과 같이 분류합니다. 명령 예시나 frontmatter가 들어 있어도 설명과 입력 양식이 중심인 Markdown 파일은 전체를 CC BY 4.0으로 분류합니다. 실행 가능한 별도 스크립트로 분리해 제공할 때는 그 새 파일의 적용 범위를 명시합니다.

| 정확한 경로 | 적용 | 역할 |
|---|---|---|
| `README.md` | CC BY 4.0 | 프로젝트·학습·실행 안내 |
| `CONTRIBUTING.md` | CC BY 4.0 | 기여 절차 |
| `SECURITY.md` | CC BY 4.0 | 보안·비공개 제보 안내 |
| `LICENSE_POLICY.md` | CC BY 4.0 | 프로젝트가 작성한 적용 정책 |
| `THIRD_PARTY_NOTICES.md` | CC BY 4.0 | 프로젝트가 작성한 고지 설명; 인용한 원 고지는 원 조건 유지 |
| `AGENTS.md` | CC BY 4.0 | 에이전트 운영 지침 |
| `CLAUDE.md` | CC BY 4.0 | 에이전트 운영 안내 |
| `RULES.md` | CC BY 4.0 | 핵심 작업 규칙 |
| `FIRST_RUN.md` | CC BY 4.0 | 첫 실행 안내 |
| `PROJECT_CONTEXT.md` | CC BY 4.0 | 목적·결정·상태 기록 |
| `PROJECT_MANIFEST.json` | CC BY 4.0 | 프로젝트와 콘텐츠 상태를 설명하는 구조화 정보 |
| `ROADMAP.md` | CC BY 4.0 | 단계별 목표와 상태 |
| `CONTENT_MAP.md` | CC BY 4.0 | 학습 문서 지도와 상태 |
| `WORKSPACE_MAP.md` | CC BY 4.0 | 폴더 책임 안내 |
| `CHANGELOG.md` | CC BY 4.0 | 변경 기록 |
| `VERIFICATION_REPORT.md` | CC BY 4.0 | 검증 결과와 한계 |
| `templates/chapter-template.md` | CC BY 4.0 | 장 집필 양식 |
| `templates/glossary-entry-template.md` | CC BY 4.0 | 용어 설명 양식 |
| `templates/prd-template.md` | CC BY 4.0 | 제품 요구사항 양식 |
| `templates/software-design-description-template.md` | CC BY 4.0 | 소프트웨어 설계 기술 양식 |
| `templates/spec-driven-development-template.md` | CC BY 4.0 | 스펙 주도 개발 작업 양식 |
| `templates/adr-template.md` | CC BY 4.0 | 아키텍처 결정 기록 양식 |
| `templates/test-plan-template.md` | CC BY 4.0 | 테스트 계획 양식 |
| `templates/agent-task-brief-template.md` | CC BY 4.0 | 사람이 작성하는 에이전트 작업 계약 |
| `templates/human-technical-review-template.md` | CC BY 4.0 | 사람 기술 검토 양식 |
| `templates/editorial-review-template.md` | CC BY 4.0 | 사람 편집 검토 양식 |
| `templates/non-developer-reader-test-template.md` | CC BY 4.0 | 실제 독자 테스트 양식 |
| `templates/public-beta-review-request-template.md` | CC BY 4.0 | 공개 베타 검토 요청 양식 |
| `templates/public-beta-claude-attempt-template.md` | CC BY 4.0 | 검토 사전 확인·시도 기록 양식 |

`LICENSE-CONTENT`는 Creative Commons의 공식 라이선스 문구이며, 본문 말미에 명시된 CC0 Public Domain Dedication과 별도의 상표 사용 경계를 유지합니다. `LICENSE-CODE`는 MIT 허락·고지·면책 문구를 그대로 보존한 프로젝트 코드 라이선스입니다. 두 원문을 교육 원고로 분류하거나 고쳐 쓰지 않습니다.

## 콘텐츠를 재사용하실 때

CC BY 4.0은 조건을 지키는 범위에서 복제·공유·번역·수정과 상업적 이용을 허용합니다. 자료를 공유할 때는 제공된 저작자와 저작권 고지, 라이선스 고지, 무보증 고지와 가능한 원문 링크를 보존하고, CC BY 4.0 원문 또는 링크를 함께 제공합니다. 수정했다면 수정 사실과 제공된 이전 수정 표시도 유지합니다. 표시 방법은 매체와 이용 맥락에 맞게 합리적으로 정할 수 있습니다. 라이선스가 허용한 이용을 막는 추가 조건이나 기술적 제한을 붙이지 않으며, 저작자나 프로젝트가 재사용물을 공식 승인한 것처럼 표현하지 않습니다.

프로젝트 저작자 표시는 `Vibe Dev Handbook contributors`를 사용하고, 개별 문서에 별도로 제공된 저작자·권리 고지도 보존합니다. 예를 들어 “바이브 개발 핸드북 — Vibe Dev Handbook contributors, CC BY 4.0. 원문: 이용한 문서의 실제 URL 또는 파일 경로. 변경: 설명 축약 및 번역. 원 자료는 보증 없이 제공됩니다.”처럼 출처·변경·라이선스 링크를 함께 안내할 수 있습니다. 이 예시는 원문의 모든 조건을 대신하지 않으며, 존재하지 않는 공개 URL을 만들어 적지 않습니다.

CC BY 4.0은 특허·상표권이나 제3자의 개인정보·초상권 등 필요한 모든 권리를 허락하는 라이선스가 아닙니다. 법이 별도로 허용하는 이용은 이 라이선스의 허락이 필요하지 않을 수 있습니다. 권리 있는 범위의 이용 허락과 콘텐츠의 정확성·안전성 보장은 다릅니다.

## 코드를 재사용하실 때

MIT 적용 코드의 복사본 또는 상당 부분을 재배포할 때는 `LICENSE-CODE`의 저작권 고지와 허락 고지를 포함합니다. 무보증·책임 제한 문구도 원문과 함께 보존합니다. 프로젝트 MIT 라이선스는 의존성·외부 Action·별도 제3자 저작물의 라이선스를 대체하지 않습니다.

## 제3자 자료와 공개 경계

인용문, 상표·제품명, 외부 이미지·아이콘·폰트·데이터와 설치 패키지는 원 권리자의 조건을 따릅니다. 링크를 달았다는 이유만으로 복제·번역·재배포 권리를 얻는 것은 아닙니다. 실제 포함 범위와 미확인 항목은 [제3자 고지](THIRD_PARTY_NOTICES.md)에서 확인합니다. 기존 기여자의 권리·동의, 원고의 인용과 공개 스냅샷·이력 감사는 별도 공개 준비 게이트로 확인하며, 이 문서만으로 권리 검토를 끝냈다고 판단하지 않습니다.

`node_modules/`, `dist/`, 로컬 증거·캐시와 저장소 밖 도구는 공개 소스 스냅샷의 라이선스 대상으로 끌어오지 않습니다. 단, 생성 사이트에 실제 포함하여 배포하는 제3자 코드·자산에는 별도의 재배포 고지 의무가 생길 수 있습니다. 소스 저장소에서 제외했다는 사실만으로 배포물의 의무가 사라지지는 않습니다.

## 공식 근거

- [Creative Commons CC BY 4.0 legal code](https://creativecommons.org/licenses/by/4.0/legalcode.txt): `LICENSE-CONTENT` 원문, 허락 범위·출처 표시·권리 제외·무보증 조건 확인, 2026-08-28.
- [Creative Commons CC BY 4.0 deed](https://creativecommons.org/licenses/by/4.0/deed.en): 사람이 읽기 쉬운 요약이며 legal code를 대신하지 않음, 2026-08-28.
- [Open Source Initiative MIT License](https://opensource.org/license/mit): `LICENSE-CODE`의 허락·고지·면책 조건 확인, 2026-08-28.
- [출처 지도](research/source-map.md): 프로젝트의 확인 범위와 후속 조사 기록.
