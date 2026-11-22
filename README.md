# 바이브 개발 핸드북

**비개발자가 AI와 함께 소프트웨어를 설계·검증·배포하기 위해 알아야 할 개발 지식을 체계적으로 설명하는 공개형 문서 프로젝트**입니다.

Claude Code나 Codex의 버튼과 명령만 나열하지 않습니다. 프런트엔드와 백엔드가 어떻게 연결되는지, 요구사항이 설계와 테스트로 어떻게 바뀌는지, Git이 왜 필요한지, 개발자가 어떤 기준으로 문제를 나누고 실패를 다루는지를 먼저 설명합니다. 그 위에 컨텍스트 엔지니어링, 스펙 주도 개발, 하네스 엔지니어링, 에이전트 루프를 배치합니다.

## 이 저장소가 제공하는 것

- 13개 학습 영역과 참고편으로 구성된 교육과정 지도
- 비개발자·데이터 분석가를 위한 핵심 장과 실습 사례
- 스냅샷, dry-run, fallback 등 AI 코딩 에이전트 출력 용어 사전
- PRD, 두 종류의 SDD, ADR, 테스트 계획, 에이전트 작업 브리프 템플릿
- Codex/Claude Code가 따라야 할 `AGENTS.md`, `CLAUDE.md`, 작업 규칙과 로드맵
- Astro Starlight 기반 문서 사이트와 GitHub Pages 자동 배포 설정
- 문서 메타데이터·미완성 표식·이미지 대체 텍스트와 내부 링크·SVG 접근성을 검사하는 검증기

**공개 베타 1 배포 대상:** [핸드북 사이트](https://foodie-repository.github.io/vibe-dev-handbook/) · [GitHub 저장소](https://github.com/foodie-repository/vibe-dev-handbook). 이 스냅샷은 `0.1.0-beta.1`의 배포 입력입니다. 원고 59개는 소유자 승인과 로컬 검증을 거쳐 모두 `ready`가 됐습니다. 제목 아래의 ‘출판 준비’는 [원고 검토 상태](docs/project/content-lifecycle.md)이며, 이 표시만으로 원격 배포 성공을 뜻하지 않습니다. 로컬 근거는 [검증 기록](VERIFICATION_REPORT.md)에 있습니다.

## 누구를 위한 자료인가요?

Claude Code·Codex로 작업하는 비개발자, 데이터 분석가, PM, 디자이너와 도메인 전문가를 위한 자료입니다. 직접 코드를 많이 쓰는 법보다 시스템의 구조를 설명하고, AI가 만든 결과의 근거·실패·권한·운영 책임을 질문하는 데 집중합니다.

- 처음부터 읽으실 때는 [공식 13장 Build Track](src/content/docs/start-here/learning-paths.md)을 따라갑니다. 핵심 개념 11장 뒤에 [모임 참가 웹앱](src/content/docs/12-case-studies/first-full-stack-project.md)과 [교육용 주가 대시보드](src/content/docs/12-case-studies/analytics-dashboard-case-study.md) 두 캡스톤을 연결합니다.
- 필요한 개념만 찾으실 때는 사이트 검색, [개발 용어집](src/content/docs/reference/development-glossary.md), [에이전트 출력 용어집](src/content/docs/reference/agent-output-glossary.md)과 장 사이 링크를 이용합니다. 검색창에 한국어 개념, 영문 용어 또는 `API`·`SDD` 같은 약어를 입력하고 결과 문맥을 확인합니다.
- 제품별 기능은 [현재 도구 참고편](src/content/docs/reference/current-tool-mapping.md)의 확인일·적용 범위·미확인 항목과 함께 읽습니다. 특정 제품을 개발 개념 자체와 같은 것으로 보지 않습니다.

## 빠른 시작

```bash
npm ci
npm run dev
```

`.nvmrc`와 `package.json`의 Node.js 조건을 먼저 확인하고, 새 의존성 설치·네트워크 접근이 필요한 환경에서는 승인을 받은 뒤 실행합니다. 브라우저에서 터미널에 표시된 로컬 주소를 열어 문서를 확인합니다. 전체 검증은 다음과 같습니다.

```bash
npm run check
```

`npm run check:static`은 테스트·콘텐츠·내부 참조·계획 검사를, `npm run check`는 여기에 프로덕션 빌드와 빌드 산출물 검사를 더해 실행합니다. 실제 검색은 개발 서버 화면만으로 판단하지 말고 프로덕션 빌드에 생성된 Pagefind 인덱스로 확인합니다.

```bash
npm run build
npm run preview
```

로컬 미리보기 주소에서 검색 결과를 열고 본문까지 이동하는지 확인합니다. 이 절차는 로컬 검색 검증이며 원격 CI·GitHub Pages 배포·실제 공개 URL의 검색 성공을 대신하지 않습니다.

공개 학습 문서의 상태나 본문을 수정했다면 전체 검증 전에 콘텐츠 지도의 상태·본문 문자 수·집계를 동기화합니다. 이 명령은 기존 문서 제목·행 순서·공개 경로를 보존하며, 문서가 지도에서 누락되거나 중복되면 쓰지 않고 실패합니다.

```bash
npm run sync:content-map
```

저장소의 `package-lock.json`을 기준으로 CI와 로컬에서 `npm ci`를 사용합니다. 의존성을 의도적으로 변경할 때만 `npm install`로 잠금 파일을 갱신하고 diff를 검토합니다.

## Codex에서 이어서 작업하기

1. 저장소를 복제하거나 이 폴더를 압축 해제합니다.
2. 압축본에 Git 이력이 없다면 터미널에서 폴더로 이동해 `git init`을 실행합니다.
3. `npm ci`로 잠금 파일과 같은 의존성을 설치합니다.
4. Codex에서 프로젝트 폴더를 엽니다.
5. 먼저 `AGENTS.md`, `PROJECT_CONTEXT.md`, `ROADMAP.md`, 설계 문서와 구현 계획을 읽게 합니다.

권장 첫 지시문:

```text
이 저장소의 AGENTS.md와 PROJECT_CONTEXT.md, ROADMAP.md, RULES.md, WORKSPACE_MAP.md를 먼저 읽고, docs/superpowers/specs/2026-08-12-public-beta-completion-design.md와 docs/superpowers/plans/2026-08-12-public-beta-master-plan.md에서 현재 작업의 범위와 선행 조건을 확인해 주세요.

실제 checkout·branch·HEAD와 기존 미커밋 변경, 확인된 사실과 미완료 게이트를 한국어로 보고해 주세요. 기존 계획 안에서 다음 작은 독립 작업 하나를 제안하되 아직 파일을 수정하지 말고, 목표·비목표·대상 파일·수용 기준·검증 명령·리스크를 정리해 주세요. 새 의존성 설치, 네트워크 접근, 커밋·푸시·배포는 이 진단 요청에 포함되지 않습니다. 필수 독립 검토가 막혀 있으면 구독 전용 검토 계약을 우회하지 말고, 구현·검토 대기·공개 가능 상태를 구분해 주세요.
```

## 구조

전체 공개 목차와 상태는 [`CONTENT_MAP.md`](CONTENT_MAP.md), 폴더별 책임은 [`WORKSPACE_MAP.md`](WORKSPACE_MAP.md)를 보세요.

```text
src/content/docs/       공개 사이트에 게시되는 학습 문서
src/assets/diagrams/    시각 자료와 Mermaid 원본
research/               출처 지도, 교육과정 커버리지, 용어 위험 분석
templates/              집필·설계·검증 템플릿
docs/project/           편집 원칙과 프로젝트 의사결정
docs/superpowers/       설계 명세와 Codex 실행 계획
scripts/ + tests/       콘텐츠 품질 검증 자동화
.github/workflows/      CI와 GitHub Pages 배포
```

## 배포 전략

첫 공개 버전은 **Astro Starlight + GitHub Pages**를 기본으로 합니다. 문서가 중심인 초기 단계에서 서버 운영을 피하고, Markdown·검색·반응형 내비게이션·다국어 확장성을 확보하기 위한 선택입니다. 퀴즈, 사용자 계정, 학습 이력 저장처럼 서버 상태가 필요한 기능이 실제 요구사항이 되면 별도 웹 애플리케이션이나 백엔드를 분리합니다.

## 라이선스

직접 작성한 원고·교육용 다이어그램·사람용 교육 템플릿에는 [CC BY 4.0](LICENSE-CONTENT), 사이트 코드·설정·검증 스크립트에는 [MIT](LICENSE-CODE)를 적용합니다. 파일에 따라 적용하는 라이선스가 다르므로 [정확한 경로별 적용표](LICENSE_POLICY.md)를 먼저 확인해 주세요. 콘텐츠는 출처·라이선스·수정 사실 등 원문 조건을 지키면 상업적으로도 재사용할 수 있습니다. 제3자 인용·상표·데이터·의존성은 재허가하지 않으며 [제3자 고지와 남은 확인 사항](THIRD_PARTY_NOTICES.md)을 따릅니다.

## 알려진 한계와 피드백

- 모든 공개 원고는 현재 검토용 초안입니다. 필수 독립 검토, 소유자 승인, 전체 접근성·권리·보안 감사와 실제 공개 URL 검증을 마치기 전에는 검증된 출판본으로 보지 않습니다.
- 두 캡스톤은 설계·검증 사고를 위한 교육 사례이며 운영 중인 웹앱이나 투자 서비스가 아닙니다. 주가 예시는 실제 시장 데이터가 아닌 가상 fixture이며 투자 조언이나 수익 보장이 아닙니다.
- 로컬 검사와 특정 브라우저에서의 확인만으로 모든 기기·보조 기술·원격 배포 환경을 검증했다고 말하지 않습니다. 제품 기능·요금제·정책은 문서의 확인일 뒤 달라질 수 있습니다.
- 공개 저장소가 개설되고 양식이 적용되면 Issues에서 콘텐츠 오류·기술 정확도·접근성 양식을 선택해 주세요. 현재는 공개 피드백 URL을 제시하지 않으며, 작업 방식은 [기여 가이드](CONTRIBUTING.md)를 따릅니다.
- 보안 취약점이나 비밀정보는 공개 Issue·PR·첨부물에 올리지 마세요. [보안 정책](SECURITY.md)의 비공개 제보 경계를 먼저 확인해 주세요.
