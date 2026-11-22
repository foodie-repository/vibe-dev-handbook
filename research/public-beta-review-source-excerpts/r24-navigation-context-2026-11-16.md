# R24 내비게이션 직접 문맥 — 2026-11-16

기준 e027ffc56864ad392bb664e29d19fc3539c9c8d3의 저장소 원문을 직접 확인한 역사적 입력입니다. 외부 제품 기능·버전·가격을 새로 확인한 근거가 아니며, 원고18개의 전체 입력을 이 발췌로 대체하지 않습니다. 각 원고의 frontmatter(제목·설명·학습 목표·상태), 절 제목과 일부 도입 문장을 추적합니다. 첫 본문 문단을 모든 문서에서 포함하지는 않습니다. 이하59문서는 인접 장 탐색 범위의 증거이고 전체59개 원고 심층 재검토가 아닙니다. 원문 경로·당시 전체파일 SHA·정확한 줄 범위와 원문을 함께 고정하며 빠진 본문은 해당 원고 전체에 남습니다. R24 후속 변경은 정확한 전후 해시·diff로 별도 연결하고 아래의 최초 발췌를 소급 변경하지 않습니다.

홈·학습 경로·각 부 인덱스는 저장소의 교육 설계입니다. 13장 목록과 다음 이동·순서·페이지 상태는 실제 원문/로컬 출력으로 확인합니다. 제품 이름은 교체 가능한 참고편으로 이동하는 문맥일 뿐이며 제품 기능의 최신 확인으로 해석하지 않습니다. 기존 출처·Task21 실패와 한계는 역사로 보존하며, 키보드·보조기술·공개URL의 새 성공을 주장하지 않습니다.

## src/content/docs/01-mental-models/abstraction-and-tradeoffs.md

전체 파일 SHA-256: 39e01f64db9883c58de86b9fa22713fe092cab3e7e19a24cbbd65d1f42ea8126. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L16

```text
---
title: "추상화와 트레이드오프"
description: "복잡성을 숨기는 추상화의 장점과 비용, 설계 선택의 트레이드오프를 이해합니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r14-mental-support-request.md"
  - "independent: docs/project/reviews/public-beta-1/r14-mental-support-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r14-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 추상화가 숨기는 것과 드러내는 것을 구분한다
  - 설계 선택을 트레이드오프로 설명한다
sidebar:
  order: 4
---
```

### 원문 L17–L17

```text
## 왜 필요한가
```

### 원문 L23–L23

```text
## 한 문장 정의
```

### 원문 L29–L29

```text
## 초보자를 위한 한 가지 비유
```

### 원문 L35–L35

```text
## 추상화는 어디에 놓이는가
```

### 원문 L49–L49

```text
## 책임과 경계를 먼저 적는다
```

### 원문 L66–L66

```text
## 추상화에는 비용이 있다
```

### 원문 L83–L83

```text
## 추상화 누수는 실패가 아니라 진단 신호다
```

### 원문 L95–L95

```text
## 추상화가 너무 적을 때와 너무 많을 때
```

### 원문 L99–L99

```text
### 과소 추상화, 즉 추상화가 너무 적은 신호
```

### 원문 L108–L108

```text
### 추상화가 너무 많은 신호
```

### 원문 L118–L118

```text
## 가역성으로 선택을 비교한다
```

### 원문 L131–L131

```text
## 흔한 실패와 복구
```

### 원문 L133–L133

```text
### 기술 이름을 책임 대신 쓰기
```

### 원문 L137–L137

```text
### 추상화 누수를 예외로 숨기기
```

### 원문 L141–L141

```text
### 미래를 위한 계층을 먼저 만들기
```

### 원문 L145–L145

```text
### 추상화를 제거해 버리기
```

### 원문 L149–L149

```text
## AI 결과를 검토하는 프롬프트
```

### 원문 L168–L168

```text
## 확인 체크리스트
```

### 원문 L181–L181

```text
## 짧은 연습
```

### 원문 L193–L193

```text
## 관련 문서
```

### 원문 L200–L200

```text
## 출처와 적용 범위
```

### 원문 L207–L207

```text
## 기억할 문장
```

## src/content/docs/01-mental-models/developer-thinking.md

전체 파일 SHA-256: 6fa248d88d051549a677e35d6ab2a3ab0b97d3b5435b04678cb6dace73fe1184. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L17

```text
---
title: "개발자처럼 문제를 나누는 법"
description: "모호한 요청을 가정, 경계, 작은 작업, 검증 가능한 결과로 바꾸는 사고법을 익힙니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r14-mental-support-request.md"
  - "independent: docs/project/reviews/public-beta-1/r14-mental-support-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r14-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 사실과 가정을 분리한다
  - 큰 요청을 독립 검증 가능한 작업으로 나눈다
  - 디버깅을 가설 검증 과정으로 설명한다
sidebar:
  order: 3
---
```

### 원문 L18–L18

```text
## 왜 필요한가
```

### 원문 L26–L26

```text
## 한 문장 정의
```

### 원문 L32–L32

```text
## 탐정의 사건 수첩으로 이해하기
```

### 원문 L40–L40

```text
## 관찰 가능한 증상과 원인 해석을 분리한다
```

### 원문 L52–L52

```text
## 사실·가정·제약·가설·미확인·결정의 여섯 칸
```

### 원문 L67–L67

```text
## 하나의 실용 루프, 하나뿐인 절차는 아니다
```

### 원문 L77–L77

```text
## 좋은 가설은 반대 증거를 포함한다
```

### 원문 L95–L95

```text
## 가장 작은 안전한 실험을 고른다
```

### 원문 L115–L115

```text
## 작업 단위의 계약을 먼저 적는다
```

### 원문 L130–L130

```text
## 구현부터 시작하면 무엇을 잃는가
```

### 원문 L143–L143

```text
## 변경 전에 증거와 복구 지점을 보존한다
```

### 원문 L159–L159

```text
## 실험 결과를 피드백으로 바꾼다
```

### 원문 L171–L171

```text
## 중단 조건을 먼저 정한다
```

### 원문 L186–L186

```text
## 증거로 완료를 판정한다
```

### 원문 L202–L202

```text
## 두 사례에서 다음 행동이 달라지는 이유
```

### 원문 L217–L217

```text
## AI와 작업할 때
```

### 원문 L253–L253

```text
## 확인 체크리스트
```

### 원문 L272–L272

```text
## 짧은 연습
```

### 원문 L298–L298

```text
## 관련 문서
```

### 원문 L312–L312

```text
## 출처와 적용 범위
```

## src/content/docs/01-mental-models/index.md

전체 파일 SHA-256: 57fbb0299500f1c6daf0426d7bc3d6632851a555ba798067f0c0a37fb7c21a3a. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L12

```text
---
title: "1. 개발자 사고와 소프트웨어"
description: "코드보다 먼저 시스템, 경계, 가정, 트레이드오프를 보는 사고법을 익힙니다."
contentStatus: draft
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 1부의 핵심 학습 질문을 설명한다
  - 세 장의 책임 차이와 권장 순서를 고른다
sidebar:
  order: 1
---
```

### 원문 L13–L13

```text
소프트웨어 개발을 시작할 때 “어떤 코드를 쓸까?”보다 먼저 물어야 할 질문은 “무엇이 연결되어 있고, 어디에 책임을 두며, 무엇으로 맞다고 판단할까?”입니다. 이 부는 화면을 시스템으로 보는 관점, 모호한 문제를 나누는 사고 과정, 복잡성을 다루는 선택 기준을 차례로 연결합니다.
```

### 원문 L15–L15

```text
## 이 부가 답하는 질문
```

### 원문 L21–L21

```text
## 권장 순서
```

### 원문 L29–L29

```text
## 다음 이동
```

## src/content/docs/01-mental-models/software-is-a-system.md

전체 파일 SHA-256: f086dc056630893c03b2a8c1a98304063bf1053eef26b25da7b587ae038bbc3d. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L18

```text
---
title: "소프트웨어는 시스템입니다"
description: "소프트웨어를 화면이나 코드가 아니라 여섯 개의 시스템 렌즈로 이해합니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r01-software-system-request.md"
  - "independent: docs/project/reviews/public-beta-1/r01-software-system-codex-review.md"
  - "adjudication: docs/project/reviews/public-beta-1/r01-software-system-adjudication.md"
audience:
  - 바이브 코딩을 하는 비개발자
  - 데이터 분석가
learningObjectives:
  - 소프트웨어를 여섯 개의 시스템 렌즈로 설명한다
  - 화면 동작과 시스템 완성도를 구분한다
  - AI 작업 지시에 책임과 경계와 검증을 포함한다
sidebar:
  order: 2
---
```

### 원문 L19–L19

```text
## 먼저 결론
```

### 원문 L25–L25

```text
## 왜 필요한가
```

### 원문 L33–L33

```text
## 한 문장 정의
```

### 원문 L41–L41

```text
## 집으로 이해하기
```

### 원문 L54–L54

```text
### 비유가 맞는 지점
```

### 원문 L61–L61

```text
### 비유가 깨지는 지점
```

### 원문 L69–L69

```text
## 시스템을 보는 여섯 렌즈
```

### 원문 L84–L84

```text
### 1. 구성요소
```

### 원문 L94–L94

```text
### 2. 책임
```

### 원문 L102–L102

```text
### 3. 경계와 인터페이스
```

### 원문 L108–L108

```text
### 4. 상태
```

### 원문 L114–L114

```text
### 5. 흐름
```

### 원문 L120–L120

```text
### 6. 제약과 품질 속성
```

### 원문 L128–L128

```text
## 두 사례로 책임 차이 보기
```

### 원문 L142–L142

```text
### 보조 비교: 교육용 주가 fixture 대시보드
```

### 원문 L163–L163

```text
## 화면 동작과 시스템 완성도를 구분하기
```

### 원문 L177–L177

```text
## 실제 작업에서 보이는 시스템 증거
```

### 원문 L190–L190

```text
## 판단 규칙
```

### 원문 L202–L202

```text
## 흔한 오해와 실패
```

### 원문 L213–L213

```text
## AI와 작업할 때
```

### 원문 L254–L254

```text
## 확인 체크리스트
```

### 원문 L271–L271

```text
## 짧은 연습
```

### 원문 L288–L288

```text
## 관련 용어와 출처
```

## src/content/docs/02-work-environment/dependencies-package-managers-environments.md

전체 파일 SHA-256: 017796aa03a0ad2e37ac33bb8d847fe11fa351bfb7ca7249b105ac6597a2ebfe. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L17

```text
---
title: "의존성·패키지 관리자·환경"
description: "런타임, 의존성 선언, 잠금 파일, 환경 격리를 구분하고 재현 가능한 설치를 검증합니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r15-work-environment-request.md"
  - "independent: docs/project/reviews/public-beta-1/r15-work-environment-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r15-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 런타임·의존성·패키지 관리자·매니페스트·잠금 파일의 책임을 구분한다
  - 환경 격리와 버전 드리프트가 실행 결과에 미치는 영향을 설명한다
  - 설치 전에 승인을 받고 같은 입력으로 설치와 검증을 재현한다
sidebar:
  order: 4
---
```

### 원문 L18–L18

```text
## 왜 필요한가
```

### 원문 L24–L24

```text
## 한 문장 정의
```

### 원문 L39–L39

```text
## 비유: 조리법과 식재료 상자
```

### 원문 L47–L47

```text
## 시스템에서 어디에 놓이는가
```

### 원문 L61–L61

```text
## 매니페스트와 잠금 파일을 함께 읽는 법
```

### 원문 L72–L72

```text
## 환경 격리와 버전 드리프트
```

### 원문 L88–L88

```text
## 설치 전에 반드시 승인할 것
```

### 원문 L103–L103

```text
## 재현 가능한 검증 순서
```

### 원문 L107–L107

```text
### 1. 변경 전 기준을 보존한다
```

### 원문 L111–L111

```text
### 2. 승인된 최소 변경만 설치한다
```

### 원문 L115–L115

```text
### 3. 선언과 해결 결과를 함께 검토한다
```

### 원문 L119–L119

```text
### 4. 기능과 품질을 확인한다
```

### 원문 L123–L123

```text
### 5. 깨끗한 환경에서 다시 설치한다
```

### 원문 L127–L127

```text
### 6. 실행 환경 차이를 기록한다
```

### 원문 L131–L131

```text
## 실제 사례에서 판단이 달라지는 지점
```

### 원문 L137–L137

```text
## 흔한 오해와 실패, 복구
```

### 원문 L151–L151

```text
## AI에게 요청하고 검토하는 프롬프트
```

### 원문 L168–L168

```text
## 확인 체크리스트
```

### 원문 L184–L184

```text
## 짧은 연습
```

### 원문 L199–L199

```text
## 관련 용어와 출처
```

### 원문 L214–L214

```text
## 기억할 문장
```

## src/content/docs/02-work-environment/files-folders-paths.md

전체 파일 SHA-256: df9f467541e9628f9805a82490ab5c02f6bf45bb586b3938510df6596cec7cd8. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L21

```text
---
title: "파일·폴더·경로"
description: "같은 프로젝트를 Finder·터미널·Git·코딩 에이전트·웹사이트에서 혼동하지 않고, 수정할 원본과 생성물을 구분하는 법을 익힙니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r15-work-environment-request.md"
  - "independent: docs/project/reviews/public-beta-1/r15-work-environment-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r15-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
  - 파일 기반 분석 프로젝트를 운영하는 데이터 분석가
learningObjectives:
  - 파일·폴더·경로와 현재 작업 디렉터리의 관계를 설명한다
  - 절대 경로와 상대 경로가 어떤 기준에서 해석되는지 판정한다
  - 작업 공간·프로젝트 루트·저장소 루트가 같은지 실제 증거로 확인한다
  - 원본·생성물·캐시와 Git의 tracked·untracked·ignored 상태를 구분한다
  - 글롭과 경로 확장 뒤 파괴적 작업의 최종 대상을 안전하게 확인한다
  - AI가 잘못된 파일을 수정하지 않도록 경로와 검증 증거가 있는 작업 지시를 작성한다
sidebar:
  order: 2
---
```

### 원문 L22–L22

```text
## 먼저 결론
```

### 원문 L34–L34

```text
## 왜 필요한가
```

### 원문 L44–L44

```text
## 파일·폴더·경로는 무엇인가요
```

### 원문 L54–L54

```text
## 건물 주소에 비유하기
```

### 원문 L65–L65

```text
### 비유가 깨지는 지점
```

### 원문 L71–L71

```text
## 경계를 이루는 여섯 가지 위치
```

### 원문 L86–L86

```text
## 절대 경로와 상대 경로
```

### 원문 L90–L90

```text
### 절대 경로
```

### 원문 L100–L100

```text
### 상대 경로
```

### 원문 L114–L114

```text
### Windows에서는 접두사를 함께 봅니다
```

### 원문 L127–L127

```text
### 언제 무엇을 쓰나요
```

### 원문 L134–L134

```text
## 같은 프로젝트를 여섯 관점으로 보기
```

### 원문 L149–L149

```text
## 이 핸드북 저장소를 실제로 읽어 보기
```

### 원문 L179–L179

```text
## 원본·생성물·도구 생성 파일·개인 파일을 구분하기
```

### 원문 L196–L196

```text
## Git의 tracked·untracked·ignored는 파일의 역할이 아닙니다
```

### 원문 L206–L206

```text
## 개발자가 경로 문제를 좁히는 순서
```

### 원문 L210–L210

```text
### 1. 명령과 오류를 그대로 보존합니다
```

### 원문 L214–L214

```text
### 2. 현재 작업 디렉터리를 확인합니다
```

### 원문 L222–L222

```text
### 3. 대상의 실제 이름과 존재를 확인합니다
```

### 원문 L230–L230

```text
### 4. Git 저장소 루트를 확인합니다
```

### 원문 L238–L238

```text
### 5. 대상 경로를 기준 위치와 결합합니다
```

### 원문 L242–L242

```text
### 6. 파일의 책임과 생성 규칙을 찾습니다
```

### 원문 L246–L246

```text
### 7. Git 상태를 서로 다른 증거로 봅니다
```

### 원문 L258–L258

```text
### 8. 글롭과 파괴적 작업의 최종 대상을 확인합니다
```

### 원문 L274–L274

```text
### 9. 원본을 한 단위만 수정하고 같은 경로에서 검증합니다
```

### 원문 L278–L278

```text
## 자주 만나는 실패와 복구
```

### 원문 L296–L296

```text
## AI에게 경로가 있는 작업을 맡기는 법
```

### 원문 L317–L317

```text
## 판단 규칙
```

### 원문 L330–L330

```text
## 확인 체크리스트
```

### 원문 L347–L347

```text
## 짧은 연습
```

### 원문 L349–L349

```text
### 연습 1: 프로젝트 경계 지도 만들기
```

### 원문 L368–L368

```text
### 연습 2: 파일을 역할별로 분류하기
```

### 원문 L372–L372

```text
### 연습 3: 두 개의 `docs`를 설명하기
```

### 원문 L383–L383

```text
### 연습 4: AI 작업 계약 작성하기
```

### 원문 L400–L400

```text
## 관련 용어와 출처
```

## src/content/docs/02-work-environment/index.md

전체 파일 SHA-256: 204ab712629a07604e6d4256a7bc4cf6efc723a6fb8ea6593a1facccb6b64e16. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L12

```text
---
title: "2. 작업 환경"
description: "파일, 터미널, 프로세스, 포트, 의존성, 실행 환경을 이해합니다."
contentStatus: draft
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 개발 환경을 구성하는 기본 단위를 나열한다
  - 경로·실행·의존성 문제를 서로 다른 증거로 진단한다
sidebar:
  order: 1
---
```

### 원문 L13–L13

```text
AI가 코드를 올바르게 생성해도 다른 폴더에서 실행하거나 필요한 의존성이 없거나 포트가 이미 사용 중이면 결과가 달라집니다. 이 부는 “어느 파일인가”, “무엇이 실행 중인가”, “어떤 버전과 환경이 필요한가”를 서로 다른 질문으로 다룹니다.
```

### 원문 L15–L15

```text
## 이 부가 답하는 질문
```

### 원문 L21–L21

```text
## 권장 순서
```

### 원문 L29–L29

```text
## 다음 이동
```

## src/content/docs/02-work-environment/terminal-processes-ports.md

전체 파일 SHA-256: e4eabb8996442e78dae3dc9639fa3c009c88fbca7c90f516b626a33d5e92ab1a. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L18

```text
---
title: "터미널·프로세스·포트"
description: "터미널, 셸, 명령, 프로세스, PID, 포트와 종료 코드를 구분하고 활성 작업을 보존하며 포트 충돌을 안전하게 진단합니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r15-work-environment-request.md"
  - "independent: docs/project/reviews/public-beta-1/r15-work-environment-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r15-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 터미널·셸·명령·프로세스의 서로 다른 책임을 설명한다
  - PID·전경·배경·환경 변수·종료 코드를 실제 실행 흐름에 연결한다
  - 포트 충돌에서 수신 프로세스의 소유권과 활성 작업을 확인한다
  - 운영체제와 셸 차이를 고려해 프로세스를 안전하게 종료하고 결과를 검증한다
sidebar:
  order: 3
---
```

### 원문 L19–L19

```text
## 왜 필요한가
```

### 원문 L25–L25

```text
## 한 문장 정의
```

### 원문 L40–L40

```text
## 비유: 상담 창구와 담당자
```

### 원문 L48–L48

```text
## 명령이 실행되는 흐름
```

### 원문 L62–L62

```text
## 전경과 배경, 터미널 세션
```

### 원문 L79–L79

```text
## 환경 변수는 프로세스 실행 조건입니다
```

### 원문 L87–L87

```text
## 포트를 정확히 읽는 법
```

### 원문 L102–L102

```text
## 포트 충돌을 안전하게 진단하는 순서
```

### 원문 L104–L104

```text
### 1. 오류와 의도를 보존합니다
```

### 원문 L108–L108

```text
### 2. 기존 서버가 의도한 서버인지 먼저 확인합니다
```

### 원문 L112–L112

```text
### 3. 수신 소켓과 owning PID를 읽기 전용으로 찾습니다
```

### 원문 L125–L125

```text
### 4. PID의 정체와 소유권을 확인합니다
```

### 원문 L139–L139

```text
### 5. 종료 대신 재사용·다른 포트를 먼저 비교합니다
```

### 원문 L143–L143

```text
### 6. 소유 세션에서 정상 종료를 먼저 요청합니다
```

### 원문 L151–L151

```text
### 7. 종료 결과와 새 서버를 따로 검증합니다
```

### 원문 L155–L155

```text
## 종료 코드와 출력은 서로 다른 증거입니다
```

### 원문 L170–L170

```text
## 두 사례에서 판단이 달라지는 지점
```

### 원문 L176–L176

```text
## 흔한 오해와 실패, 복구
```

### 원문 L190–L190

```text
## AI에게 요청하고 검토하는 프롬프트
```

### 원문 L209–L209

```text
## 판단 규칙
```

### 원문 L223–L223

```text
## 확인 체크리스트
```

### 원문 L242–L242

```text
## 짧은 연습
```

### 원문 L261–L261

```text
## 관련 용어와 출처
```

### 원문 L276–L276

```text
## 기억할 문장
```

## src/content/docs/03-full-stack/client-server-full-stack.md

전체 파일 SHA-256: 38b6f61b9a981626245d26d75b5ded63b02b676d7e43442161953d8bc5f30282. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L17

```text
---
title: "클라이언트·서버·풀스택"
description: "사용자 행동이 프런트엔드, API, 백엔드, 데이터 저장소를 오가는 전체 흐름을 익힙니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r02-client-server-execution-request.md"
  - "independent: docs/project/reviews/public-beta-1/r02-client-server-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r02-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 클라이언트와 서버의 역할을 구분한다
  - 한 요청의 전체 흐름과 실패 경계를 추적한다
  - 프런트엔드 검증과 서버 검증의 차이를 설명한다
sidebar:
  order: 2
---
```

### 원문 L18–L18

```text
## 먼저 결론
```

### 원문 L24–L24

```text
## 왜 필요한가
```

### 원문 L30–L30

```text
## 한 문장 정의
```

### 원문 L44–L44

```text
## 식당으로 이해하기
```

### 원문 L48–L48

```text
### 비유가 맞는 지점
```

### 원문 L55–L55

```text
### 비유가 깨지는 지점
```

### 원문 L59–L59

```text
## 시스템에서의 위치
```

### 원문 L82–L82

```text
## 한 사용자 작업을 끝에서 끝까지 추적하기
```

### 원문 L103–L103

```text
## 프런트엔드와 백엔드는 책임으로 나눕니다
```

### 원문 L120–L120

```text
## 상태의 권위 있는 원본과 사본을 구분하세요
```

### 원문 L148–L148

```text
## 하나의 화면 증상에는 여러 실패 위치가 있습니다
```

### 원문 L165–L165

```text
## 풀스택은 항상 동적 서버를 뜻하지 않습니다
```

### 원문 L182–L182

```text
## 개발자가 사용하는 판단 규칙
```

### 원문 L192–L192

```text
## 흔한 실패와 복구 질문
```

### 원문 L194–L194

```text
### 화면과 서버 파일이 있으면 연결됐다고 생각합니다
```

### 원문 L198–L198

```text
### 프런트엔드 검증을 권한 통제로 착각합니다
```

### 원문 L202–L202

```text
### 모든 상태를 한곳의 진실로 부릅니다
```

### 원문 L206–L206

```text
### 하나의 성공 신호로 전체 완료를 주장합니다
```

### 원문 L210–L210

```text
### 풀스택이라는 이유로 모든 계층을 추가합니다
```

### 원문 L214–L214

```text
### 오류 메시지에 민감정보를 그대로 담습니다
```

### 원문 L218–L218

```text
## AI와 작업할 때
```

### 원문 L232–L232

```text
## 확인 체크리스트
```

### 원문 L249–L249

```text
## 짧은 연습
```

### 원문 L269–L269

```text
## 관련 용어와 출처
```

## src/content/docs/03-full-stack/frontend-backend-boundary.md

전체 파일 SHA-256: f50bf106d5b3ee45ceffff3fca06eb2edca27aa9b1193af8d396c96161b023cd. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L17

```text
---
title: "프런트엔드와 백엔드의 경계"
description: "화면과 서버 사이의 책임·신뢰 경계를 나누고 중요한 규칙의 최종 집행 위치와 증거를 판단합니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r16-data-support-request.md"
  - "independent: docs/project/reviews/public-beta-1/r16-data-support-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r16-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 표시·상호작용·클라이언트 상태와 서버의 권위·업무 규칙·비밀·데이터 책임을 구분한다
  - 사용자가 바꿀 수 있는 프런트엔드 검증을 서버의 최종 집행 증거로 사용할 수 없는 이유를 설명한다
  - 계약 중복과 경계 이동 신호를 찾아 실패·복구·검증 질문으로 바꾼다
sidebar:
  order: 4
---
```

### 원문 L18–L18

```text
## 먼저 결론
```

### 원문 L24–L24

```text
## 왜 필요한가
```

### 원문 L30–L30

```text
## 한 문장 정의
```

### 원문 L40–L40

```text
## 공연장 출입구로 이해하기
```

### 원문 L44–L44

```text
### 비유가 맞는 지점
```

### 원문 L51–L51

```text
### 비유가 깨지는 지점
```

### 원문 L55–L55

```text
## 시스템에서의 위치
```

### 원문 L72–L72

```text
## 책임을 네 질문으로 나누세요
```

### 원문 L83–L83

```text
## 검증은 왜 서버 측 신뢰 경계에서 끝나야 하나요
```

### 원문 L91–L91

```text
## 같은 규칙을 양쪽에 둘 때 계약을 공유하세요
```

### 원문 L104–L104

```text
## 경계를 옮겨야 하는 신호
```

### 원문 L117–L117

```text
## 대표 실패와 복구
```

### 원문 L119–L119

```text
### 화면에서만 권한을 막습니다
```

### 원문 L123–L123

```text
### 서버 전용 비밀을 프런트엔드 환경 변수에 넣습니다
```

### 원문 L127–L127

```text
### 양쪽 규칙이 서로 다릅니다
```

### 원문 L131–L131

```text
### 낙관적 화면을 확정 상태로 착각합니다
```

### 원문 L135–L135

```text
### 백엔드가 응답했으니 사용자 작업도 끝났다고 봅니다
```

### 원문 L139–L139

```text
### 경계를 너무 일찍 여러 서비스로 나눕니다
```

### 원문 L143–L143

```text
## AI와 작업할 때
```

### 원문 L158–L158

```text
## 확인 체크리스트
```

### 원문 L173–L173

```text
## 짧은 연습
```

### 원문 L192–L192

```text
## 관련 용어와 출처
```

## src/content/docs/03-full-stack/http-request-response.md

전체 파일 SHA-256: d90c0fe3dab7eba53c796c81491227edad717c8a1df890d9cd5c22d2c1e0b97c. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L18

```text
---
title: "HTTP 요청과 응답"
description: "웹에서 메서드, URL, 헤더, 본문, 상태 코드가 어떤 약속을 이루는지 이해합니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r03-http-request.md"
  - "independent: docs/project/reviews/public-beta-1/r03-http-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r03-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
  - 노트북 분석을 웹 대시보드로 확장하려는 데이터 분석가
learningObjectives:
  - HTTP 요청과 응답의 구성요소를 실제 사례에서 찾는다
  - 네트워크 실패, 브라우저 정책 차단, HTTP 오류, 업무 규칙 오류를 구분한다
  - 재시도 전에 멱등성과 중복 부작용을 확인한다
sidebar:
  order: 3
---
```

### 원문 L19–L19

```text
## 먼저 결론
```

### 원문 L23–L23

```text
## 왜 필요한가
```

### 원문 L29–L29

```text
## 한 문장 정의
```

### 원문 L37–L37

```text
## 택배 송장으로 이해하기
```

### 원문 L41–L41

```text
### 비유가 맞는 지점
```

### 원문 L48–L48

```text
### 비유가 깨지는 지점
```

### 원문 L52–L52

```text
## 시스템에서의 위치
```

### 원문 L74–L74

```text
## 요청을 읽는 네 가지 칸
```

### 원문 L85–L85

```text
### 자주 만나는 메서드
```

### 원문 L95–L95

```text
## 응답을 읽는 세 가지 칸
```

### 원문 L105–L105

```text
### 상태 코드 범주
```

### 원문 L119–L119

```text
## 예: 모임의 조회·참가·취소 계약
```

### 원문 L123–L123

```text
### 공개 모임 조회
```

### 원문 L144–L144

```text
### 자신의 참가 신청
```

### 원문 L169–L169

```text
### 자신의 참가 취소
```

### 원문 L186–L186

```text
### 성공·거절·실패를 구분하는 응답
```

### 원문 L215–L215

```text
## 실제 작업에서 보이는 신호
```

### 원문 L217–L217

```text
### 브라우저 개발자 도구
```

### 원문 L233–L233

```text
### 서버 로그와 추적
```

### 원문 L237–L237

```text
### 명령으로 확인할 때
```

### 원문 L247–L247

```text
## 네트워크 실패, HTTP 오류, 업무 오류 구분하기
```

### 원문 L259–L259

```text
## 재시도 전에 멱등성을 확인하기
```

### 원문 L277–L277

```text
## 판단 규칙
```

### 원문 L286–L286

```text
## 흔한 오해와 실패
```

### 원문 L296–L296

```text
## AI와 작업할 때
```

### 원문 L312–L312

```text
## 확인 체크리스트
```

### 원문 L326–L326

```text
## 짧은 연습
```

### 원문 L342–L342

```text
## 관련 용어와 출처
```

## src/content/docs/03-full-stack/index.md

전체 파일 SHA-256: 4e97bd446bb15ff6e1cdaaafd2fda4b221fb07f8b9c335ad8005fb9ee7517324. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L12

```text
---
title: "3. 풀스택 구조"
description: "사용자 화면에서 서버와 데이터 저장소까지 한 요청의 전체 경로를 이해합니다."
contentStatus: draft
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 풀스택 이해의 범위를 설명한다
  - 역할 지도·HTTP 계약·신뢰 경계의 차이를 구분한다
sidebar:
  order: 1
---
```

### 원문 L13–L13

```text
이 부에서는 사용자 행동이 화면에서 시작해 네트워크·서버·데이터로 이동하고 다시 사용자 결과로 돌아오는 경로를 봅니다. 모든 계층을 직접 구현하는 법보다, 각 계층이 맡은 책임과 실패 증거를 연결하는 것이 목표입니다.
```

### 원문 L15–L15

```text
## 이 부가 답하는 질문
```

### 원문 L21–L21

```text
## 권장 순서
```

### 원문 L29–L29

```text
## 다음 이동
```

## src/content/docs/04-backend-data/api-database-auth.md

전체 파일 SHA-256: 72e356c3156c4a00b7af5a2b5269726dabf2ca053d577f5fbc6a0b7b3ef2e935. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L20

```text
---
title: "API·데이터베이스·인증"
description: "모임 참가 요청을 따라 API 계약, 인증·인가, 업무 규칙과 트랜잭션의 책임과 증거를 구분합니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r04-api-data-auth-request.md"
  - "independent: docs/project/reviews/public-beta-1/r04-api-data-auth-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r04-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - API를 백엔드 전체나 URL 하나와 동일시하지 않고 구성요소 사이의 계약으로 설명한다
  - 데이터베이스의 영속 상태 관리 책임을 API 처리 책임과 구분한다
  - 인증과 인가를 자신의 참가 행동과 주최자 전용 행동에서 분리한다
  - 요청 식별부터 인증·인가·업무 규칙·영속 변경·응답까지의 논리적 책임 흐름을 그린다
  - 성공·인증 실패·권한 거절·중복·마감·정원 충돌·부분 실패의 증거를 구분한다
  - AI가 만든 백엔드를 계약·권한·동시성 테스트·데이터 상태·안전한 로그로 검토한다
sidebar:
  order: 2
---
```

### 원문 L22–L22

```text
## 먼저 결론
```

### 원문 L32–L32

```text
## 왜 이 구분이 필요한가
```

### 원문 L40–L40

```text
## 한 문장 정의
```

### 원문 L53–L53

```text
## 모임 접수대로 비유해 보기
```

### 원문 L55–L55

```text
### 비유가 맞는 지점
```

### 원문 L61–L61

```text
### 비유가 깨지는 지점
```

### 원문 L65–L65

```text
## 전체 시스템에서의 위치
```

### 원문 L75–L75

```text
## 모임 참가 요청을 끝까지 따라가기
```

### 원문 L79–L79

```text
### 1. 요청과 `eventId`를 식별합니다
```

### 원문 L85–L85

```text
### 2. API 계약을 확인합니다
```

### 원문 L130–L130

```text
### 3. 인증 상태로 요청 주체를 확인합니다
```

### 원문 L142–L142

```text
### 4. 이벤트·참가 관계를 조회하고 인가합니다
```

### 원문 L152–L152

```text
### 5. 중복·모집 상태·정원 업무 규칙을 검증합니다
```

### 원문 L162–L162

```text
### 6. `registrations`와 정원 판단을 트랜잭션으로 확정합니다
```

### 원문 L176–L176

```text
### 7. 확정된 결과를 응답하고 재조회·로그·동시성 테스트로 확인합니다
```

### 원문 L190–L190

```text
## 성공과 실패를 무엇으로 구분할까
```

### 원문 L211–L211

```text
## 판단 규칙
```

### 원문 L213–L213

```text
### 계약과 구현을 따로 확인합니다
```

### 원문 L217–L217

```text
### 권한은 주체·대상·행동으로 질문합니다
```

### 원문 L221–L221

```text
### 업무 규칙과 데이터 일관성을 분리합니다
```

### 원문 L225–L225

```text
### 사전 조회와 확정 경계를 구분합니다
```

### 원문 L229–L229

```text
### 성공은 서로 다른 증거를 연결해 판정합니다
```

### 원문 L233–L233

```text
### 재시도 전에 실제 상태와 중복 위험을 확인합니다
```

### 원문 L237–L237

```text
### 복구 오라클을 요청 전에 정합니다
```

### 원문 L241–L241

```text
## 흔한 오해와 실패
```

### 원문 L256–L256

```text
## AI와 작업할 때 사용할 계약
```

### 원문 L318–L318

```text
## 확인 체크리스트
```

### 원문 L320–L320

```text
### API 계약
```

### 원문 L329–L329

```text
### 인증과 인가
```

### 원문 L340–L340

```text
### 데이터와 실패
```

### 원문 L354–L354

```text
## 짧은 연습
```

### 원문 L356–L356

```text
### 연습 1: 책임 흐름 나누기
```

### 원문 L360–L360

```text
### 연습 2: 두 인가 규칙 분리하기
```

### 원문 L364–L364

```text
### 연습 3: 마지막 한 자리와 응답 유실 판단하기
```

### 원문 L368–L368

```text
## 관련 용어와 다음 장
```

### 원문 L379–L379

```text
## 확인한 공식 출처와 적용 범위
```

### 원문 L392–L392

```text
## 기억할 문장
```

## src/content/docs/04-backend-data/data-model-schema-migration.md

전체 파일 SHA-256: 2bbe29c1fa3aaca28dc83d89ab1146176e2230974867a36bc4cf36ec8f6d086f. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L18

```text
---
title: "데이터 모델·스키마·마이그레이션"
description: "업무 개념을 데이터 구조와 제약으로 옮기고, 이미 저장된 데이터를 안전하게 바꾸는 판단법을 배웁니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r16-data-support-request.md"
  - "independent: docs/project/reviews/public-beta-1/r16-data-support-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r16-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 개체·속성·관계와 키·제약으로 데이터 모델을 설명한다
  - 데이터 모델과 스키마, 마이그레이션을 구분한다
  - 확장·백필·검증·전환·정리 순서로 호환 가능한 변경을 계획한다
  - 롤백과 롤포워드의 조건을 구분하고 데이터 검증 증거를 요구한다
sidebar:
  order: 3
---
```

### 원문 L19–L19

```text
## 먼저 결론
```

### 원문 L25–L25

```text
## 왜 필요한가
```

### 원문 L31–L31

```text
## 쉬운 말에서 정식 용어로
```

### 원문 L45–L45

```text
## 비유: 좌석 배치도와 실제 좌석 교체
```

### 원문 L51–L51

```text
## 모임 참가 관계를 모델링하기
```

### 원문 L85–L85

```text
## 데이터 모델, 스키마, 화면을 같은 것으로 보지 않기
```

### 원문 L97–L97

```text
## 마이그레이션은 파일이 아니라 상태 전환입니다
```

### 원문 L103–L103

```text
### 예: `location_text`를 장소 유형과 상세로 나누기
```

### 원문 L120–L120

```text
## 백필을 별도 작업으로 다루기
```

### 원문 L137–L137

```text
## 호환성은 읽기와 쓰기를 나눠 확인하기
```

### 원문 L150–L150

```text
## 롤백과 롤포워드를 구분하기
```

### 원문 L165–L165

```text
## 데이터 검증은 행 수 하나로 끝나지 않습니다
```

### 원문 L181–L181

```text
## 흔한 오해와 실패
```

### 원문 L183–L183

```text
### “ORM이 있으니 스키마를 몰라도 됩니다”
```

### 원문 L187–L187

```text
### “새 열을 추가했으니 끝났습니다”
```

### 원문 L191–L191

```text
### “개발 환경에서 성공했으니 운영에서도 같습니다”
```

### 원문 L195–L195

```text
### “되돌리기 SQL만 있으면 안전합니다”
```

### 원문 L199–L199

```text
### “화면이 정상이라 데이터도 정상입니다”
```

### 원문 L203–L203

```text
## AI와 함께 변경 계획 만들기
```

### 원문 L222–L222

```text
## 확인 체크리스트
```

### 원문 L237–L237

```text
## 짧은 연습
```

### 원문 L249–L249

```text
## 관련 장과 출처
```

## src/content/docs/04-backend-data/index.md

전체 파일 SHA-256: 0bc3a4fea0222b36271fe92b4a83319d019619532cf87ef251fa5002f2b6973f. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L12

```text
---
title: "4. 백엔드와 데이터"
description: "API, 데이터베이스, 인증, 스키마, 마이그레이션, 상태와 비동기 처리를 이해합니다."
contentStatus: draft
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 백엔드와 데이터 계층의 주요 책임을 설명한다
  - 계약·영속 구조·임시 사본과 비동기 전달을 구분한다
sidebar:
  order: 1
---
```

### 원문 L13–L13

```text
백엔드는 단순히 데이터를 전달하는 중간층이 아닙니다. 요청 계약을 해석하고 신원과 권한을 확인하며 업무 규칙과 데이터 일관성을 집행합니다. 데이터 계층에서는 무엇을 영속적인 원본으로 둘지, 구조를 어떻게 바꿀지, 사본과 비동기 작업을 어떻게 다룰지도 결정해야 합니다.
```

### 원문 L15–L15

```text
## 이 부가 답하는 질문
```

### 원문 L21–L21

```text
## 권장 순서
```

### 원문 L29–L29

```text
## 다음 이동
```

## src/content/docs/04-backend-data/state-cache-queue.md

전체 파일 SHA-256: dd00a9865c2865a1852f5c60d2fdbb0100f655db2c505810d192ddfe88ee2e4f. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L18

```text
---
title: "상태·캐시·큐"
description: "권위 있는 상태와 파생 사본, 세션, 캐시, 이벤트와 비동기 작업을 구분하고 실패 뒤 원본을 확인하는 법을 배웁니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r16-data-support-request.md"
  - "independent: docs/project/reviews/public-beta-1/r16-data-support-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r16-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 권위 상태와 파생 상태, 세션, 캐시, 큐와 이벤트의 책임을 구분한다
  - 신선도와 최종적 일관성의 허용 범위를 판단한다
  - 중복·순서 변화·재전달·부분 실패를 고려한 재처리 계약을 설명한다
  - 장애 뒤 화면이나 메시지가 아니라 권위 있는 원본 상태를 재확인한다
sidebar:
  order: 4
---
```

### 원문 L19–L19

```text
## 먼저 결론
```

### 원문 L27–L27

```text
## 쉬운 말에서 정식 용어로
```

### 원문 L44–L44

```text
## 비유: 원장, 열람용 사본, 작업 바구니
```

### 원문 L50–L50

```text
## 모임 참가 흐름의 상태 지도
```

### 원문 L65–L65

```text
## 파생 상태와 신선도 계약
```

### 원문 L81–L81

```text
## 세션은 상태지만 업무 원장은 아닙니다
```

### 원문 L87–L87

```text
## 큐는 언제 필요한가
```

### 원문 L102–L102

```text
## 이벤트와 큐 메시지를 현재 상태로 오해하지 않기
```

### 원문 L112–L112

```text
## 중복과 재전달을 정상 가능성으로 다루기
```

### 원문 L129–L129

```text
## 순서는 업무 버전으로 검증하기
```

### 원문 L135–L135

```text
## 재처리는 원본 확인에서 시작하기
```

### 원문 L152–L152

```text
## 데이터베이스와 큐 사이의 부분 실패
```

### 원문 L158–L158

```text
## 최종적 일관성을 허용할 곳과 허용하지 않을 곳
```

### 원문 L171–L171

```text
## 장애 때 확인할 증거
```

### 원문 L184–L184

```text
## 교육용 주가 fixture는 별도 사례입니다
```

### 원문 L192–L192

```text
## 흔한 오해와 실패
```

### 원문 L194–L194

```text
### “캐시는 빠른 데이터베이스입니다”
```

### 원문 L198–L198

```text
### “큐를 넣으면 요청이 안전해집니다”
```

### 원문 L202–L202

```text
### “메시지는 한 번만 처리됩니다”
```

### 원문 L206–L206

```text
### “이벤트가 왔으니 현재도 그 상태입니다”
```

### 원문 L210–L210

```text
### “eventual consistency면 기다리면 됩니다”
```

### 원문 L214–L214

```text
## AI와 함께 상태 책임 검토하기
```

### 원문 L232–L232

```text
## 확인 체크리스트
```

### 원문 L250–L250

```text
## 짧은 연습
```

### 원문 L262–L262

```text
## 관련 장과 출처
```

## src/content/docs/05-frontend/accessibility-responsive-design.md

전체 파일 SHA-256: f771876d195f11c237b1b548bec3d26056f6d1bf1e98b84df81fc0f91e97ef21. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L18

```text
---
title: "접근성과 반응형 설계"
description: "의미 구조·키보드·포커스·이름·대비·대체 텍스트와 확대·리플로를 실제 사용자 흐름으로 검증합니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r17-frontend-support-request.md"
  - "independent: docs/project/reviews/public-beta-1/r17-frontend-support-evidence-followup.md"
  - "adjudication: docs/project/reviews/public-beta-1/r17-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 접근성과 반응형 설계의 목적과 겹치는 지점을 구분한다
  - 의미 구조·키보드·포커스·접근 가능한 이름·대비·대체 텍스트의 책임을 설명한다
  - 화면 폭 축소와 브라우저 확대에서 정보·기능이 보존되는지 검증한다
  - 자동 검사 결과와 실제 사용자 흐름의 증거를 구분한다
sidebar:
  order: 4
---
```

### 원문 L19–L19

```text
## 먼저 결론
```

### 원문 L25–L25

```text
## 왜 필요한가
```

### 원문 L31–L31

```text
## 한 문장 정의
```

### 원문 L41–L41

```text
## 건물의 출입구로 이해하기
```

### 원문 L45–L45

```text
### 비유가 맞는 지점
```

### 원문 L52–L52

```text
### 비유가 깨지는 지점
```

### 원문 L56–L56

```text
## 시스템에서의 위치
```

### 원문 L73–L73

```text
## 접근성의 여덟 가지 기본 질문
```

### 원문 L75–L75

```text
### 1. 의미 구조가 화면 모양 없이도 남나요
```

### 원문 L81–L81

```text
### 2. 키보드만으로 핵심 흐름을 완료하나요
```

### 원문 L87–L87

```text
### 3. 포커스의 현재 위치와 이동 이유가 보이나요
```

### 원문 L93–L93

```text
### 4. 보이는 레이블과 접근 가능한 이름이 맞나요
```

### 원문 L99–L99

```text
### 5. 색상 없이도 상태와 행동을 구분하나요
```

### 원문 L105–L105

```text
### 6. 비텍스트 콘텐츠의 목적을 다른 방식으로 얻나요
```

### 원문 L111–L111

```text
### 7. 확대와 좁은 뷰포트에서 정보·기능이 보존되나요
```

### 원문 L117–L117

```text
### 8. 동적 상태가 보이고 읽히며 복구 가능한가요
```

### 원문 L123–L123

```text
## 두 사례로 확인하기
```

### 원문 L125–L125

```text
### 모임 참가 웹앱
```

### 원문 L131–L131

```text
### 교육용 주가 대시보드
```

### 원문 L137–L137

```text
## 자동 검사와 실제 검증을 분리하세요
```

### 원문 L150–L150

```text
## 대표 실패와 복구
```

### 원문 L152–L152

```text
### 모든 것을 ARIA로 고칩니다
```

### 원문 L156–L156

```text
### 포커스 표시를 디자인 때문에 지웁니다
```

### 원문 L160–L160

```text
### 모바일에서 내용을 숨기기만 합니다
```

### 원문 L164–L164

```text
### 화면 폭만 줄여 반응형을 통과시킵니다
```

### 원문 L168–L168

```text
### 차트에 대체 텍스트 한 줄만 붙입니다
```

### 원문 L172–L172

```text
### 오류는 보이지만 다음 행동이 없습니다
```

### 원문 L176–L176

```text
## AI와 작업할 때
```

### 원문 L191–L191

```text
## 확인 체크리스트
```

### 원문 L208–L208

```text
## 짧은 연습
```

### 원문 L226–L226

```text
## 관련 용어와 출처
```

## src/content/docs/05-frontend/browser-dom-rendering.md

전체 파일 SHA-256: 4d914c5e17c05a3683faa48bbe657ba7f655eb6a4595199bfeb09dc2fa37bfe9. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L19

```text
---
title: "브라우저·DOM·렌더링"
description: "URL 탐색에서 네트워크·파싱·DOM·CSSOM·렌더링·이벤트와 상태까지 이어지는 증거 경계를 구분합니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r05-browser-dom-request.md"
  - "independent: docs/project/reviews/public-beta-1/r05-browser-dom-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r05-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
  - 노트북 분석을 웹 대시보드로 확장하려는 데이터 분석가
learningObjectives:
  - HTML, CSS, JavaScript, DOM과 렌더링의 역할을 구분한다
  - URL 탐색에서 네트워크·파싱·DOM·CSSOM·렌더링·이벤트와 상태로 이어지는 개념 흐름을 설명한다
  - View Source, Network, 현재 DOM, 계산된 스타일과 픽셀이 증명하는 사실을 구분한다
  - 지연 로딩과 렌더링 실패를 요청·상태·DOM·스타일·화면 증거로 좁힌다
sidebar:
  order: 2
---
```

### 원문 L20–L20

```text
## 먼저 결론
```

### 원문 L26–L26

```text
## 왜 필요한가
```

### 원문 L32–L32

```text
## 한 문장 정의
```

### 원문 L48–L48

```text
## 무대 공연으로 이해하기
```

### 원문 L52–L52

```text
### 비유가 맞는 지점
```

### 원문 L59–L59

```text
### 비유가 깨지는 지점
```

### 원문 L63–L63

```text
## 시스템에서의 위치
```

### 원문 L100–L100

```text
## 처음 받은 HTML과 현재 DOM은 다를 수 있습니다
```

### 원문 L104–L104

```text
### View Source, Network, 현재 DOM과 픽셀을 구분하세요
```

### 원문 L128–L128

```text
## 화면은 상태가 바뀔 때 다시 만들어집니다
```

### 원문 L144–L144

```text
### 다시 렌더링된다는 말의 범위
```

### 원문 L150–L150

```text
## 예: 응답은 성공했는데 차트가 비어 있습니다
```

### 원문 L166–L166

```text
## 지연 로딩과 렌더링 실패를 구분하세요
```

### 원문 L181–L181

```text
## 개발자 도구는 서로 다른 증거를 보여줍니다
```

### 원문 L199–L199

```text
## 증상에서 다음 증거로 이동하기
```

### 원문 L213–L213

```text
## 판단 규칙
```

### 원문 L224–L224

```text
## 흔한 오해와 실패
```

### 원문 L235–L235

```text
## AI와 작업할 때
```

### 원문 L250–L250

```text
## 확인 체크리스트
```

### 원문 L265–L265

```text
## 짧은 연습
```

### 원문 L280–L280

```text
## 관련 용어와 출처
```

## src/content/docs/05-frontend/index.md

전체 파일 SHA-256: 6ea93c86b312503105780d1158a94f45680c1ae6f8e602d2886ce0ab73ec4270. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L12

```text
---
title: "5. 프런트엔드"
description: "브라우저 렌더링, UI 상태, 사용자 경험, 접근성, 반응형 설계를 이해합니다."
contentStatus: draft
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 프런트엔드를 상호작용과 상태 관리의 계층으로 설명한다
  - 렌더링·UI 상태·접근성과 반응형의 질문을 구분한다
sidebar:
  order: 1
---
```

### 원문 L13–L13

```text
프런트엔드는 서버 결과를 화면 구조와 상호작용으로 바꾸고, 로딩·빈 결과·오류·성공·권한 없음 같은 상태를 사용자에게 전달합니다. 이 부는 브라우저가 화면을 만드는 과정, 사용자가 경험하는 상태 전이, 다양한 능력과 화면에서 사용할 수 있는 조건을 서로 다른 질문으로 다룹니다.
```

### 원문 L15–L15

```text
## 이 부가 답하는 질문
```

### 원문 L21–L21

```text
## 권장 순서
```

### 원문 L29–L29

```text
## 다음 이동
```

## src/content/docs/05-frontend/ui-state-and-ux.md

전체 파일 SHA-256: 32e0a610adf75d6b9f4942c2cf8fb94980948ce346950e934660fcb57c2db5ad. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L18

```text
---
title: "UI 상태와 사용자 경험"
description: "로딩·빈 결과·성공·검증 오류·충돌·오류·재시도를 권위 상태와 복구 증거까지 포함해 설계합니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r17-frontend-support-request.md"
  - "independent: docs/project/reviews/public-beta-1/r17-frontend-support-evidence-followup.md"
  - "adjudication: docs/project/reviews/public-beta-1/r17-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - UI 상태와 상태 전이를 사용자 행동·서버 결과·권위 상태로 설명한다
  - loading·empty·success·validation·conflict·error·retry 상태를 구분한다
  - 낙관적 UI와 확정 상태, 중복 행동과 멱등 계약을 구분한다
  - 응답 유실·충돌·재시도 뒤 복구 오라클과 사용자 완료 증거를 정한다
sidebar:
  order: 3
---
```

### 원문 L19–L19

```text
## 먼저 결론
```

### 원문 L25–L25

```text
## 왜 필요한가
```

### 원문 L31–L31

```text
## 한 문장 정의
```

### 원문 L41–L41

```text
## 택배 조회로 이해하기
```

### 원문 L45–L45

```text
### 비유가 맞는 지점
```

### 원문 L52–L52

```text
### 비유가 깨지는 지점
```

### 원문 L56–L56

```text
## 시스템에서의 위치
```

### 원문 L73–L73

```text
## 최소 상태를 정상·실패·불명으로 나누세요
```

### 원문 L91–L91

```text
## 서버 권위 상태와 화면 사본을 구분하세요
```

### 원문 L104–L104

```text
## 낙관적 UI는 확정 표시가 아닙니다
```

### 원문 L117–L117

```text
## 중복 행동과 재시도를 별도로 설계하세요
```

### 원문 L130–L130

```text
## 복구 오라클을 먼저 정하세요
```

### 원문 L145–L145

```text
## 상태 전이를 표로 쓰세요
```

### 원문 L167–L167

```text
## 접근 가능한 상태 피드백
```

### 원문 L173–L173

```text
## 두 사례의 상태 계약
```

### 원문 L175–L175

```text
### 모임 참가 웹앱
```

### 원문 L183–L183

```text
### 교육용 주가 대시보드
```

### 원문 L193–L193

```text
## 대표 실패와 복구
```

### 원문 L195–L195

```text
### 로딩이 끝나지 않습니다
```

### 원문 L199–L199

```text
### 빈 결과와 오류가 같은 화면입니다
```

### 원문 L203–L203

```text
### 오래된 응답이 최신 선택을 덮습니다
```

### 원문 L207–L207

```text
### 낙관적 성공이 서버 거절 뒤 남습니다
```

### 원문 L211–L211

```text
### 결과 불명에서 무조건 재시도합니다
```

### 원문 L215–L215

```text
### 오류 메시지가 내부 정보만 보여 줍니다
```

### 원문 L219–L219

```text
## AI와 작업할 때
```

### 원문 L235–L235

```text
## 확인 체크리스트
```

### 원문 L251–L251

```text
## 짧은 연습
```

### 원문 L263–L263

```text
## 관련 용어와 출처
```

## src/content/docs/06-requirements-design/adr-and-tradeoffs.md

전체 파일 SHA-256: a3b14ed20f674eb88379a33c0866ee3dadb3ce7d86cc88f748e5e49928885e06. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L18

```text
---
title: "ADR과 트레이드오프 기록"
description: "중요한 설계 결정을 맥락·대안·결과·가정·증거·재검토 조건과 함께 남깁니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r18-design-support-request.md"
  - "independent: docs/project/reviews/public-beta-1/r18-design-support-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r18-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - ADR의 목적과 회의록·전체 설계 문서의 차이를 설명한다
  - 맥락·결정·대안·결과·가정·증거를 한 결정 기록으로 작성한다
  - 결정 당시 사실과 추정, 긍정·부정·중립 결과를 구분한다
  - 재검토 신호와 대체 기록으로 결정의 수명을 관리한다
sidebar:
  order: 4
---
```

### 원문 L19–L19

```text
## 먼저 결론
```

### 원문 L25–L25

```text
## 왜 필요한가
```

### 원문 L31–L31

```text
## 한 문장 정의
```

### 원문 L41–L41

```text
## 항해 일지로 이해하기
```

### 원문 L45–L45

```text
### 비유가 맞는 지점
```

### 원문 L52–L52

```text
### 비유가 깨지는 지점
```

### 원문 L56–L56

```text
## 시스템에서의 위치
```

### 원문 L74–L74

```text
## ADR의 핵심 필드
```

### 원문 L90–L90

```text
## 맥락에는 결론이 아니라 힘을 적으세요
```

### 원문 L102–L102

```text
## 결정은 범위와 비범위를 포함하세요
```

### 원문 L108–L108

```text
## 대안은 같은 질문으로 비교하세요
```

### 원문 L123–L123

```text
## 결과는 장점과 단점보다 넓습니다
```

### 원문 L135–L135

```text
## 가정과 증거를 분리하세요
```

### 원문 L149–L149

```text
## 재검토 조건을 관찰 가능하게 쓰세요
```

### 원문 L163–L163

```text
## 상태와 역사 기록을 관리하세요
```

### 원문 L169–L169

```text
## ADR은 회의록도 영원한 진리도 아닙니다
```

### 원문 L180–L180

```text
## 두 사례의 ADR 후보
```

### 원문 L182–L182

```text
### 모임 참가 웹앱: 한 트랜잭션 경계에서 정원과 중복을 관리
```

### 원문 L193–L193

```text
### 교육용 주가 대시보드: 첫 범위는 버전이 있는 정적 전달
```

### 원문 L205–L205

```text
## 최소 ADR 템플릿
```

### 원문 L210–L210

```text
## 상태
```

### 원문 L216–L216

```text
## 맥락
```

### 원문 L222–L222

```text
## 결정
```

### 원문 L225–L225

```text
## 검토한 대안
```

### 원문 L229–L229

```text
## 결과
```

### 원문 L234–L234

```text
## 가정과 증거
```

### 원문 L239–L239

```text
## 재검토 조건
```

### 원문 L245–L245

```text
## AI와 작업할 때
```

### 원문 L262–L262

```text
## 확인 체크리스트
```

### 원문 L279–L279

```text
## 짧은 연습
```

### 원문 L293–L293

```text
## 관련 용어와 출처
```

## src/content/docs/06-requirements-design/architecture-and-frameworks.md

전체 파일 SHA-256: 72798fd19f5e063a31f0ff56cb4ee8ecb59d49a67304a3a869a996ed420310d0. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L18

```text
---
title: "아키텍처와 프레임워크"
description: "사용자 문제와 품질 조건에서 구조를 결정하고, 그 구조를 실현할 프레임워크와 런타임을 고르는 순서를 익힙니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r18-design-support-request.md"
  - "independent: docs/project/reviews/public-beta-1/r18-design-support-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r18-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 아키텍처·상세 설계·구현·기술 스택을 결정 수준으로 구분한다
  - 책임·경계·상태·품질 속성으로 구조 대안을 비교한다
  - 프레임워크와 런타임을 팀·배포·유지 조건에 맞춰 검토한다
  - 과설계를 발견하고 AI에게 근거와 변경 조건을 요구한다
sidebar:
  order: 3
---
```

### 원문 L19–L19

```text
## 왜 필요한가
```

### 원문 L25–L25

```text
## 한 문장 정의
```

### 원문 L33–L33

```text
## 도시 계획과 건축 공법에 비유하면
```

### 원문 L37–L37

```text
### 비유가 맞는 지점
```

### 원문 L43–L43

```text
### 비유의 한계
```

### 원문 L47–L47

```text
## 결정 수준을 구분합니다
```

### 원문 L60–L60

```text
## 구조를 묻는 일곱 가지 질문
```

### 원문 L78–L78

```text
## 품질 속성과 제약으로 대안을 비교합니다
```

### 원문 L99–L99

```text
## 프레임워크·라이브러리·런타임·플랫폼·도구
```

### 원문 L113–L113

```text
## 선택 절차: 이름보다 질문이 먼저입니다
```

### 원문 L125–L125

```text
## 모임 참가 웹앱: 단순 모놀리스부터 검증합니다
```

### 원문 L142–L142

```text
## 주가 데이터 대시보드: 정적 전달부터 검증합니다
```

### 원문 L157–L157

```text
## 실패와 과설계 신호
```

### 원문 L169–L169

```text
## AI에게 읽기 전용 아키텍처 검토를 요청합니다
```

### 원문 L188–L188

```text
## 확인 체크리스트
```

### 원문 L203–L203

```text
## 짧은 연습
```

### 원문 L216–L216

```text
## 관련 장과 출처
```

## src/content/docs/06-requirements-design/index.md

전체 파일 SHA-256: 16254ada745f93b17d598e22efd40aeaf7fd61ce8f3b3dc513b14aa96af1c798. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L12

```text
---
title: "6. 요구사항과 설계"
description: "아이디어를 요구사항, 설계 선택, 작업, 테스트 증거로 바꾸는 방법을 익힙니다."
contentStatus: draft
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 요구사항과 설계 문서의 역할을 구분한다
  - 요구·구조 선택·결정 기록의 순서와 책임을 설명한다
sidebar:
  order: 1
---
```

### 원문 L13–L13

```text
아이디어를 곧바로 코드로 옮기면 해결할 문제, 구조 선택, 구현 규율, 검증 기준이 한데 섞입니다. 이 부는 요구를 정의하는 산출물과 개발 접근, 구조와 기술 선택, 중요한 결정을 남기는 기록을 구분합니다.
```

### 원문 L15–L15

```text
## 이 부가 답하는 질문
```

### 원문 L21–L21

```text
## 권장 순서
```

### 원문 L29–L29

```text
## 다음 이동
```

## src/content/docs/06-requirements-design/prd-sdd-tdd.md

전체 파일 SHA-256: 5b0c91327e30d694d5025e0f6b378f88406f616bce284e5c3a74b8e2fe67207d. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L18

```text
---
title: "PRD·두 종류의 SDD·TDD"
description: "제품 요구, 설계 설명, 스펙 주도 개발, 테스트 주도 개발을 서로 다른 범주로 정확히 구분합니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-request.md"
  - "independent: docs/project/reviews/public-beta-1/r06-prd-sdd-tdd-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r06-controller-closeout.md"
audience:
  - PRD와 TDD 용어를 들어본 비개발자
  - AI로 프로젝트를 진행하는 데이터 분석가와 PM
learningObjectives:
  - PRD와 설계 설명과 Spec-Driven Development와 TDD를 구분한다
  - 두 종류의 SDD를 혼용하지 않는다
  - 변경 위험에 맞는 문서와 검증 수준을 선택한다
sidebar:
  order: 2
---
```

### 원문 L19–L19

```text
## 먼저 결론
```

### 원문 L28–L28

```text
## 왜 필요한가
```

### 원문 L36–L36

```text
## 네 개념의 범주부터 구분하세요
```

### 원문 L60–L60

```text
### 입력·출력·순서·실패로 다시 구분하기
```

### 원문 L71–L71

```text
## 한 장의 관계도
```

### 원문 L84–L84

```text
## 집을 만드는 과정으로 이해하기
```

### 원문 L88–L88

```text
### 비유가 맞는 지점
```

### 원문 L95–L95

```text
### 비유가 깨지는 지점
```

### 원문 L99–L99

```text
## 1. PRD: 제품의 문제와 성공을 정합니다
```

### 원문 L115–L115

```text
### 요구사항과 수용 기준을 구분하세요
```

### 원문 L134–L134

```text
### 기술 제약은 무조건 빼는 것이 아닙니다
```

### 원문 L138–L138

```text
### 좋은 PRD의 판정 기준
```

### 원문 L142–L142

```text
## 2. Software Design Description: 시스템이 어떻게 나뉘는지 설명합니다
```

### 원문 L161–L161

```text
### 설계 설명은 프레임워크 목록이 아닙니다
```

### 원문 L165–L165

```text
### 모든 세부 결정을 한 문서에 넣지 마세요
```

### 원문 L169–L169

```text
## 3. Spec-Driven Development: 스펙에서 구현으로 내려가는 흐름입니다
```

### 원문 L182–L182

```text
### 각 단계에는 종료 질문이 필요합니다
```

### 원문 L191–L191

```text
### 오해하지 말아야 할 점
```

### 원문 L197–L197

```text
## 4. TDD: 테스트가 설계 피드백을 앞당깁니다
```

### 원문 L209–L209

```text
### 대시보드 규칙에 적용하는 예
```

### 원문 L231–L231

```text
### TDD가 모든 테스트를 대신하지는 않습니다
```

### 원문 L239–L239

```text
## 네 개념을 하나의 대시보드 요구에 연결하기
```

### 원문 L274–L274

```text
## 수용 기준과 테스트를 같은 것으로 보지 마세요
```

### 원문 L287–L287

```text
## 흔한 실패
```

### 원문 L289–L289

```text
### SDD가 어느 뜻인지 쓰지 않습니다
```

### 원문 L293–L293

```text
### 문서 이름과 양식부터 채웁니다
```

### 원문 L297–L297

```text
### PRD에서 구현을 근거 없이 고정합니다
```

### 원문 L301–L301

```text
### 설계 없이 파일 작업만 나눕니다
```

### 원문 L305–L305

```text
### 수용 기준이 관찰 불가능합니다
```

### 원문 L309–L309

```text
### 구현 뒤 테스트를 붙이고 TDD라고 부릅니다
```

### 원문 L313–L313

```text
### 테스트가 구현 세부를 그대로 복사합니다
```

### 원문 L317–L317

```text
### 구현이 바뀌었는데 스펙을 갱신하지 않습니다
```

### 원문 L321–L321

```text
### 모든 작업에 같은 절차를 강제합니다
```

### 원문 L325–L325

```text
## 규모에 맞게 사용하세요
```

### 원문 L337–L337

```text
## AI와 작업할 때
```

### 원문 L354–L354

```text
## 확인 체크리스트
```

### 원문 L369–L369

```text
## 짧은 연습
```

### 원문 L390–L390

```text
## 관련 용어·템플릿과 출처
```

## src/content/docs/07-workflow-methods/code-review-ci-cd.md

전체 파일 SHA-256: 3d020021cfe50ddda9c219360b20361bac82b99b47e4135dbe4c6d1dbf0e25f4. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L17

```text
---
title: "코드 리뷰와 CI/CD"
description: "사람의 검토, 자동 통합 검증, 전달과 배포 승인을 서로 다른 게이트와 증거로 구분합니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r19-workflow-support-request.md"
  - "independent: docs/project/reviews/public-beta-1/r19-record-followup-review.md"
  - "adjudication: docs/project/reviews/public-beta-1/r19-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 코드 리뷰와 승인, CI, 지속적 전달, 지속적 배포의 책임을 구분한다
  - 실패한 검사와 우회가 있을 때 필요한 판단과 증거를 설명한다
  - 변경부터 운영 확인까지 게이트별 입력·판정·복구 경로를 설계한다
sidebar:
  order: 4
---
```

### 원문 L18–L18

```text
## 왜 필요한가
```

### 원문 L24–L24

```text
## 한 문장 정의
```

### 원문 L38–L38

```text
## 공항 보안 검색대 비유와 한계
```

### 원문 L44–L44

```text
## 전체 시스템에서의 위치
```

### 원문 L63–L63

```text
## 코드 리뷰와 승인은 같은 말이 아닙니다
```

### 원문 L77–L77

```text
## CI는 초록 체크를 만드는 서비스가 아닙니다
```

### 원문 L92–L92

```text
## 지속적 전달과 지속적 배포를 구분합니다
```

### 원문 L103–L103

```text
## 실패한 검사와 우회는 새로운 위험 기록입니다
```

### 원문 L118–L118

```text
## 반복 사례: 모임 참가 변경을 전달하기
```

### 원문 L122–L122

```text
### 1. 변경과 리뷰
```

### 원문 L126–L126

```text
### 2. CI와 병합 게이트
```

### 원문 L130–L130

```text
### 3. 전달과 배포 승인
```

### 원문 L134–L134

```text
### 4. 운영 확인과 복구
```

### 원문 L140–L140

```text
## 판단 규칙
```

### 원문 L142–L142

```text
### 규칙 1. 게이트마다 한 문장의 질문을 붙입니다
```

### 원문 L146–L146

```text
### 규칙 2. 증거를 대상 커밋과 아티팩트에 연결합니다
```

### 원문 L150–L150

```text
### 규칙 3. 자동화와 사람 판단의 빈틈을 서로 채웁니다
```

### 원문 L154–L154

```text
### 규칙 4. 보호 규칙보다 우회 경로를 먼저 감사합니다
```

### 원문 L158–L158

```text
### 규칙 5. 배포 성공 뒤 사용자 결과를 확인합니다
```

### 원문 L162–L162

```text
## 흔한 오해와 실패
```

### 원문 L172–L172

```text
## AI와 작업할 때의 요청 계약
```

### 원문 L194–L194

```text
## 확인 체크리스트
```

### 원문 L207–L207

```text
## 짧은 연습
```

### 원문 L211–L211

```text
## 관련 용어
```

### 원문 L220–L220

```text
## 출처와 적용 범위
```

### 원문 L226–L226

```text
## 기억할 문장
```

## src/content/docs/07-workflow-methods/incremental-delivery.md

전체 파일 SHA-256: 65f76f635bcec37285abb42b171734ca6899526418ba2113e836824685ae9be5. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L17

```text
---
title: "점진적 전달과 작업 분해"
description: "큰 기능을 사용자 결과가 보이는 수직 조각으로 나누고 수용·피드백·복구 증거를 연결합니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r19-workflow-support-request.md"
  - "independent: docs/project/reviews/public-beta-1/r19-record-followup-review.md"
  - "adjudication: docs/project/reviews/public-beta-1/r19-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 수직 조각과 기술 계층별 작업 목록을 구분한다
  - 각 조각의 수용 기준·피드백·공개 조건·복구 경로를 설계한다
  - 작은 파일 수가 아닌 위험과 관찰 가능한 결과로 작업 크기를 판단한다
sidebar:
  order: 3
---
```

### 원문 L18–L18

```text
## 왜 필요한가
```

### 원문 L24–L24

```text
## 한 문장 정의
```

### 원문 L28–L28

```text
## 샌드위치 한입 비유와 한계
```

### 원문 L34–L34

```text
## 수평 분할과 수직 조각을 구분합니다
```

### 원문 L45–L45

```text
## 좋은 수직 조각의 다섯 조건
```

### 원문 L47–L47

```text
### 1. 관찰 가능한 한 결과가 있습니다
```

### 원문 L51–L51

```text
### 2. 독립적인 수용 기준이 있습니다
```

### 원문 L64–L64

```text
### 3. 필요한 경계를 끝까지 연결합니다
```

### 원문 L68–L68

```text
### 4. 안전하게 통합하거나 비활성화할 수 있습니다
```

### 원문 L72–L72

```text
### 5. 실패 뒤 선택할 경로가 있습니다
```

### 원문 L76–L76

```text
## 수용 기준은 조각의 경계선입니다
```

### 원문 L87–L87

```text
## feature flag는 배포와 공개를 분리합니다
```

### 원문 L102–L102

```text
## 피드백은 다음 조각을 바꾸기 위한 입력입니다
```

### 원문 L115–L115

```text
## 반복 사례: 모임 참가 기능을 다섯 조각으로 나누기
```

### 원문 L117–L117

```text
### 조각 1. 공개 모임 목록과 상세 조회
```

### 원문 L124–L124

```text
### 조각 2. 참가 신청과 최소 결과 확인
```

### 원문 L132–L132

```text
### 조각 3. 자신의 참가 상태 조회 경험 확장
```

### 원문 L139–L139

```text
### 조각 4. 자기 참가 취소
```

### 원문 L146–L146

```text
### 조각 5. 공개 범위 확대와 운영 인수
```

### 원문 L155–L155

```text
## 롤백과 롤포워드를 조각마다 판단합니다
```

### 원문 L169–L169

```text
## 가짜 점진성을 찾는 질문
```

### 원문 L171–L171

```text
### 파일 수로만 자른 작업
```

### 원문 L175–L175

```text
### 마지막까지 통합하지 않는 작업
```

### 원문 L179–L179

```text
### 기능 이름만 더 작게 바꾼 작업
```

### 원문 L183–L183

```text
### 배포 불가능한 중간 상태
```

### 원문 L187–L187

```text
## 판단 규칙
```

### 원문 L196–L196

```text
## 흔한 오해와 실패
```

### 원문 L205–L205

```text
## AI와 작업할 때의 요청 계약
```

### 원문 L228–L228

```text
## 확인 체크리스트
```

### 원문 L241–L241

```text
## 짧은 연습
```

### 원문 L245–L245

```text
## 관련 용어
```

### 원문 L254–L254

```text
## 출처와 적용 범위
```

### 원문 L260–L260

```text
## 기억할 문장
```

## src/content/docs/07-workflow-methods/index.md

전체 파일 SHA-256: f13724ccba91ce77bfda29624b1e08363476ff9e27754b8c3845597d18e3ba22. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L12

```text
---
title: "7. 개발 절차와 협업"
description: "소프트웨어 생명주기, 점진적 전달, 코드 리뷰와 CI/CD를 이해합니다."
contentStatus: draft
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 개발 절차를 피드백 시스템으로 설명한다
  - 생명주기·작업 분해·검토와 자동 게이트의 책임을 구분한다
sidebar:
  order: 1
---
```

### 원문 L13–L13

```text
좋은 개발 절차는 문서를 많이 만드는 관료제가 아니라, 잘못된 가정을 일찍 발견하고 변경을 작게 유지하며 다음 사람이 맥락을 이어받게 하는 피드백 시스템입니다. 이 부는 전체 생명주기, 한 번에 전달할 변경 단위, 사람과 자동화가 확인하는 게이트를 차례로 봅니다.
```

### 원문 L15–L15

```text
## 이 부가 답하는 질문
```

### 원문 L21–L21

```text
## 권장 순서
```

### 원문 L29–L29

```text
## 다음 이동
```

## src/content/docs/07-workflow-methods/software-development-lifecycle.md

전체 파일 SHA-256: 2939fcdcf0ef802f66d78c3c1903fb5a16f1a8008c618f51f7c444a26dc36381. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L17

```text
---
title: "소프트웨어 개발 생명주기"
description: "발견부터 운영 학습까지 이어지는 단계와 증거, 피드백과 되돌아가기를 이해합니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r19-workflow-support-request.md"
  - "independent: docs/project/reviews/public-beta-1/r19-record-followup-review.md"
  - "adjudication: docs/project/reviews/public-beta-1/r19-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 발견·요구사항·설계·구현·검증·배포·운영·학습의 서로 다른 질문을 설명한다
  - 문서·코드·화면의 존재와 단계 완료 증거를 구분한다
  - 위험과 새 증거에 따라 이전 단계로 돌아가는 피드백 경로를 설계한다
sidebar:
  order: 2
---
```

### 원문 L19–L19

```text
아래 여섯 묶음에서 각 단계가 줄이는 불확실성은 무엇이고, 검증·운영의 증거는 어느 앞선 결정을 다시 살펴보게 하나요?
```

### 원문 L25–L25

```text
## 왜 필요한가
```

### 원문 L31–L31

```text
## 한 문장 정의
```

### 원문 L37–L37

```text
## 항해 비유와 한계
```

### 원문 L43–L43

```text
## 여덟 단계는 서로 다른 불확실성을 줄입니다
```

### 원문 L58–L58

```text
## 1. 발견: 해결책 전에 문제를 확인합니다
```

### 원문 L71–L71

```text
## 2. 요구사항: 목표를 판정 가능한 결과로 바꿉니다
```

### 원문 L88–L88

```text
## 3. 설계: 책임과 실패를 구현 전에 배치합니다
```

### 원문 L102–L102

```text
## 4. 구현: 작은 변경으로 결정을 실행합니다
```

### 원문 L110–L110

```text
## 5. 검증: 요구·설계·사용 목적을 서로 다른 증거로 봅니다
```

### 원문 L127–L127

```text
## 6. 배포: 검증한 결과를 대상 환경에 활성화합니다
```

### 원문 L143–L143

```text
## 7. 운영: 실제 환경에서 사용자 결과와 복구를 책임집니다
```

### 원문 L151–L151

```text
## 8. 학습: 운영 증거를 이전 결정에 반영합니다
```

### 원문 L159–L159

```text
## 피드백과 되돌아가기는 예외가 아니라 정상 흐름입니다
```

### 원문 L179–L179

```text
## 워터폴과 애자일을 단순 대립시키지 않습니다
```

### 원문 L185–L185

```text
## 위험이 큰 곳에는 더 분명한 게이트가 필요합니다
```

### 원문 L198–L198

```text
## 흔한 오해와 실패
```

### 원문 L209–L209

```text
## AI와 작업할 때의 요청 계약
```

### 원문 L228–L228

```text
## 확인 체크리스트
```

### 원문 L242–L242

```text
## 짧은 연습
```

### 원문 L246–L246

```text
## 관련 용어
```

### 원문 L256–L256

```text
## 출처와 적용 범위
```

### 원문 L262–L262

```text
## 기억할 문장
```

## src/content/docs/08-quality/debugging-observability.md

전체 파일 SHA-256: edc46880d09b9bb0288ff76e8dd58f13eab67ade82a16d35530d17f55d90b0f6. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L17

```text
---
title: "디버깅과 관측 가능성"
description: "증상에서 재현·가설·실험·원인·수정·회귀 증거로 좁히고 안전한 관측 신호를 설계합니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r20-quality-support-request.md"
  - "independent: docs/project/reviews/public-beta-1/r20-fix2-followup-review.md"
  - "adjudication: docs/project/reviews/public-beta-1/r20-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 증상과 원인, 관찰과 가설을 구분해 디버깅 루프를 수행한다
  - 로그·지표·트레이스·모니터링·관측 가능성의 역할과 한계를 설명한다
  - 민감정보를 남기지 않는 진단 증거와 수정·회귀·운영 확인 계약을 설계한다
sidebar:
  order: 3
---
```

### 원문 L18–L18

```text
## 왜 필요한가
```

### 원문 L24–L24

```text
## 한 문장 정의
```

### 원문 L28–L28

```text
## 탐정 비유와 한계
```

### 원문 L34–L34

```text
## 디버깅의 아홉 칸
```

### 원문 L50–L50

```text
## 1. 증상과 기대를 분리합니다
```

### 원문 L62–L62

```text
## 2. 재현 조건을 최소화합니다
```

### 원문 L75–L75

```text
## 3. 관찰과 해석을 두 열로 나눕니다
```

### 원문 L88–L88

```text
## 4. 반증 가능한 가설을 세웁니다
```

### 원문 L105–L105

```text
## 5. 한 번에 한 가설을 구분합니다
```

### 원문 L117–L117

```text
## 무작위 수정은 금지합니다
```

### 원문 L129–L129

```text
## 6. 원인, 가까운 원인과 기여 조건을 구분합니다
```

### 원문 L140–L140

```text
## 7. 수정과 완화와 복구를 분리합니다
```

### 원문 L151–L151

```text
## 8. 이번 결함의 회귀 증거는 수정 전 실패와 수정 후 성공을 연결합니다
```

### 원문 L164–L164

```text
## 로그·지표·트레이스는 서로 다른 질문에 답합니다
```

### 원문 L166–L166

```text
### 로그(log): 이 사건에 무슨 일이 있었는가?
```

### 원문 L172–L172

```text
### 지표(metric): 얼마나 자주, 얼마나 오래, 얼마나 크게 일어나는가?
```

### 원문 L178–L178

```text
### 트레이스(trace): 한 요청이 어디를 거쳐 시간을 썼는가?
```

### 원문 L182–L182

```text
### 세 신호를 연결하는 질문
```

### 원문 L193–L193

```text
## 모니터링과 관측 가능성을 구분합니다
```

### 원문 L201–L201

```text
## 개인정보와 비밀을 남기지 않는 관측 설계
```

### 원문 L221–L221

```text
## 반복 사례: 참가 버튼의 결과 불명 문제
```

### 원문 L223–L223

```text
### 증상과 재현
```

### 원문 L227–L227

```text
### 관찰
```

### 원문 L234–L234

```text
### 가설과 구분 실험
```

### 원문 L238–L238

```text
### 원인·수정·회귀
```

### 원문 L254–L254

```text
## AI와 작업할 때의 요청 계약
```

### 원문 L273–L273

```text
## 확인 체크리스트
```

### 원문 L288–L288

```text
## 짧은 연습
```

### 원문 L292–L292

```text
## 관련 용어
```

### 원문 L300–L300

```text
## 출처와 적용 범위
```

### 원문 L306–L306

```text
## 기억할 문장
```

## src/content/docs/08-quality/index.md

전체 파일 SHA-256: 92437132a14f03af95f0714afa335b5b6e2ffec2fc47d8c6b3e5a58ff2052ee6. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L12

```text
---
title: "8. 품질과 안전"
description: "테스트, 디버깅, 관측 가능성, 성능, 보안의 기본 판단을 익힙니다."
contentStatus: draft
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 품질을 여러 증거와 설계 속성의 조합으로 설명한다
  - 테스트·진단·성능과 보안의 서로 다른 질문을 구분한다
sidebar:
  order: 1
---
```

### 원문 L13–L13

```text
품질은 “테스트가 통과했다”는 한 문장으로 끝나지 않습니다. 요구한 기능이 맞는지, 실패 원인을 좁힐 신호가 있는지, 필요한 속도로 동작하는지, 사용자와 데이터를 보호하는지를 서로 다른 위험과 증거로 다뤄야 합니다.
```

### 원문 L15–L15

```text
## 이 부가 답하는 질문
```

### 원문 L21–L21

```text
## 권장 순서
```

### 원문 L29–L29

```text
## 다음 이동
```

## src/content/docs/08-quality/performance-security.md

전체 파일 SHA-256: 3a4cf7084e72f2224cf38b0af9c4d4056bf0a0ae4d5442d7a6b1afe06dbcdedf. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L17

```text
---
title: "성능과 보안"
description: "측정 가능한 성능 예산과 위협 모델로 사용자 영향과 보안 위험을 우선순위화합니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r20-quality-support-request.md"
  - "independent: docs/project/reviews/public-beta-1/r20-fix2-followup-review.md"
  - "adjudication: docs/project/reviews/public-beta-1/r20-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 사용자 결과와 환경을 포함한 성능 예산을 세우고 측정으로 병목을 찾는다
  - 자산·위협·신뢰 경계를 식별하고 최소 권한·입력 검증·비밀·의존성 통제를 연결한다
  - 성능과 보안의 위험을 증거·영향·복구 가능성으로 우선순위화한다
sidebar:
  order: 4
---
```

### 원문 L18–L18

```text
## 왜 필요한가
```

### 원문 L24–L24

```text
## 한 문장 정의
```

### 원문 L28–L28

```text
## 여행 시간표와 박물관 비유, 그리고 한계
```

### 원문 L34–L34

```text
## 두 품질을 하나의 판단 흐름으로 봅니다
```

### 원문 L46–L46

```text
## 성능: 먼저 사용자 결과와 예산을 정합니다
```

### 원문 L48–L48

```text
### 성능 예산은 합격선을 기록한 프로젝트 계약입니다
```

### 원문 L63–L63

```text
### 기준선 없이는 개선을 말할 수 없습니다
```

### 원문 L78–L78

```text
### 병목은 추측이 아니라 프로필에서 찾습니다
```

### 원문 L91–L91

```text
### 변경 전후 비교의 최소 계약
```

### 원문 L104–L104

```text
## 보안: 자산에서 시작해 위협과 경계를 그립니다
```

### 원문 L106–L106

```text
### 자산·위협·신뢰 경계를 먼저 식별합니다
```

### 원문 L125–L125

```text
## 핵심 보안 통제와 한계
```

### 원문 L127–L127

```text
### 최소 권한
```

### 원문 L133–L133

```text
### 입력 검증
```

### 원문 L144–L144

```text
### 비밀 관리
```

### 원문 L156–L156

```text
### 의존성 위험
```

### 원문 L168–L168

```text
## 위험과 개선을 우선순위화합니다
```

### 원문 L183–L183

```text
## 반복 사례: 모임 참가 흐름
```

### 원문 L187–L187

```text
### 성능 계약과 병목 확인
```

### 원문 L193–L193

```text
### 자산·위협·경계 확인
```

### 원문 L199–L199

```text
### 완료 증거
```

### 원문 L210–L210

```text
## 흔한 실패와 교정
```

### 원문 L222–L222

```text
## AI와 작업할 때의 요청 계약
```

### 원문 L242–L242

```text
## 확인 체크리스트
```

### 원문 L258–L258

```text
## 짧은 연습
```

### 원문 L262–L262

```text
## 관련 용어
```

### 원문 L272–L272

```text
## 출처와 적용 범위
```

### 원문 L282–L282

```text
## 기억할 문장
```

## src/content/docs/08-quality/testing-strategy.md

전체 파일 SHA-256: b5ac2191970ab30a261a1c530eb6eae050895bb17499ff0c6ca5388fbea5bbc9. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L19

```text
---
title: "테스트 전략"
description: "중요한 실패 위험을 테스트와 리뷰·빌드·화면·운영 증거로 나누고 AI의 완료 주장을 검증합니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r07-testing-request.md"
  - "independent: docs/project/reviews/public-beta-1/r07-testing-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r07-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
  - 데이터 분석가
learningObjectives:
  - 단위·통합·계약·종단 간·smoke test가 각각 증명하는 범위와 빈틈을 설명한다
  - 요구사항의 위험을 가장 작은 충분한 테스트와 보완 증거에 연결한다
  - TDD와 테스트 전략, 테스트와 검토·빌드·운영 확인을 구분한다
  - AI가 보고한 검증 명령·범위·결과를 실제 증거로 판정한다
sidebar:
  order: 2
---
```

### 원문 L20–L20

```text
## 먼저 결론
```

### 원문 L26–L26

```text
## 왜 필요한가
```

### 원문 L39–L39

```text
## 한 문장 정의
```

### 원문 L47–L47

```text
### verification과 validation을 구분하세요
```

### 원문 L56–L56

```text
### 정적·동적, 수동·자동을 한 축으로 섞지 마세요
```

### 원문 L64–L64

```text
## 비유로 이해하기: 출국 전 여러 검문
```

### 원문 L75–L75

```text
### 비유가 깨지는 지점
```

### 원문 L79–L79

```text
## 요구에서 증거까지의 위치
```

### 원문 L97–L97

```text
## 테스트 수준은 실행 경계로 구분하세요
```

### 원문 L103–L103

```text
### 단위 테스트
```

### 원문 L109–L109

```text
### 통합 테스트
```

### 원문 L115–L115

```text
### 계약 테스트
```

### 원문 L121–L121

```text
### 종단 간 테스트
```

### 원문 L127–L127

```text
### smoke test
```

### 원문 L133–L133

```text
## 동적 테스트를 보완하는 증거도 필요합니다
```

### 원문 L147–L147

```text
## 테스트 전략을 위험에서 설계하는 법
```

### 원문 L160–L160

```text
### 가장 낮은 수준이 아니라 가장 작은 충분한 수준을 고르세요
```

### 원문 L166–L166

```text
## 기대 결과는 어디서 오나요: 테스트 오라클
```

### 원문 L174–L174

```text
## 대역과 테스트 데이터의 경계
```

### 원문 L187–L187

```text
## 불안정한 테스트를 성공으로 취급하지 마세요
```

### 원문 L193–L193

```text
## 공개 데이터 대시보드에 적용하기
```

### 원문 L197–L197

```text
### 먼저 위험을 적습니다
```

### 원문 L206–L206

```text
### 위험을 증거에 연결합니다
```

### 원문 L226–L226

```text
## TDD와 테스트 전략은 같은 것이 아닙니다
```

### 원문 L234–L234

```text
## 테스트 피라미드는 위험과 피드백 비용의 배분 모델입니다
```

### 원문 L242–L242

```text
## 커버리지는 다룬 범위의 측정이지 실제 성공의 단독 증거가 아닙니다
```

### 원문 L248–L248

```text
## AI의 “테스트 통과” 보고를 검증하는 법
```

### 원문 L266–L266

```text
### 읽기 전용 검토 지시 예
```

### 원문 L292–L292

```text
## 흔한 실패와 복구
```

### 원문 L294–L294

```text
### 테스트 수나 커버리지 숫자를 목표로 삼습니다
```

### 원문 L298–L298

```text
### 구현 세부를 그대로 고정합니다
```

### 원문 L302–L302

```text
### 대역만 통과시키고 실제 경계를 확인하지 않습니다
```

### 원문 L306–L306

```text
### 새 테스트가 처음부터 통과합니다
```

### 원문 L310–L310

```text
### 실패한 테스트를 무조건 제품 결함으로 봅니다
```

### 원문 L314–L314

```text
### 건너뜀과 미실행을 성공에 포함합니다
```

### 원문 L318–L318

```text
### 운영 데이터를 테스트에 복사합니다
```

### 원문 L322–L322

```text
### 불안정한 테스트를 재실행으로 숨깁니다
```

### 원문 L326–L326

```text
### 모든 위험을 자동화하려고 합니다
```

### 원문 L330–L330

```text
## 변경 크기에 맞춘 최소 검증
```

### 원문 L332–L332

```text
### 낮은 위험: 책임 영향이 작은 문구와 내부 링크
```

### 원문 L340–L340

```text
### 중간 위험: 계산 규칙과 화면 상태
```

### 원문 L347–L347

```text
### 높은 위험: 권한·데이터 변경·결제·마이그레이션
```

### 원문 L358–L358

```text
## 완료 판단 체크리스트
```

### 원문 L380–L380

```text
## 짧은 연습
```

### 원문 L395–L395

```text
## 관련 용어
```

### 원문 L408–L408

```text
## 출처와 적용 범위
```

## src/content/docs/09-git-github/branch-commit-pull-request.md

전체 파일 SHA-256: 5d76d3aff4a4e330e5f87fc901666e084016bee5a2466038e29f7176f3664c09. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L17

```text
---
title: "브랜치·커밋·Pull Request"
description: "변경을 독립 작업선에 격리하고 의미 있는 커밋으로 구성해 검토 요청하는 법을 익힙니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r21-git-support-request.md"
  - "independent: docs/project/reviews/public-beta-1/r21-git-support-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r21-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 브랜치·커밋·원격 추적·Pull Request·리뷰·병합의 상태를 구분한다
  - 독립적으로 검증할 수 있는 작은 작업 단위를 설계한다
  - 최신화·충돌·승인과 외부 쓰기의 증거 경계를 판정한다
sidebar:
  order: 3
---
```

### 원문 L18–L18

```text
## 왜 필요한가
```

### 원문 L24–L24

```text
## 한 문장 정의
```

### 원문 L28–L28

```text
## 공사 구역과 검수 요청에 비유하기
```

### 원문 L32–L32

```text
### 비유가 깨지는 지점
```

### 원문 L36–L36

```text
## 시스템에서 여섯 상태를 분리하세요
```

### 원문 L49–L49

```text
## 브랜치에는 목표와 기준점을 함께 기록하세요
```

### 원문 L61–L61

```text
## upstream과 remote-tracking branch는 같은 브랜치가 아닙니다
```

### 원문 L77–L77

```text
## 커밋은 독립 검토 가능한 의미 단위입니다
```

### 원문 L101–L101

```text
## Pull Request는 검토 계약입니다
```

### 원문 L117–L117

```text
## 작은 브랜치와 PR은 사용자 결과로 나누세요
```

### 원문 L123–L123

```text
## 기준 브랜치와 최신화할 때의 판단
```

### 원문 L137–L137

```text
## 개발 사례: 모임 참가 웹앱
```

### 원문 L139–L139

```text
### 중복 참가 방지를 하나의 검토 단위로 만든다면
```

### 원문 L154–L154

```text
## AI와 함께 작업하는 안전 순서
```

### 원문 L166–L166

```text
## 흔한 오해와 실패
```

### 원문 L168–L168

```text
### 브랜치를 만들면 변경이 안전하게 격리됐다고 봅니다
```

### 원문 L172–L172

```text
### `origin/main`을 실시간 원격 상태라고 봅니다
```

### 원문 L176–L176

```text
### 작은 PR을 파일 수로만 판단합니다
```

### 원문 L180–L180

```text
### “update”, “fix” 같은 메시지만 남깁니다
```

### 원문 L184–L184

```text
### PR 설명이 AI의 긴 요약이면 충분하다고 봅니다
```

### 원문 L188–L188

```text
### 승인 표시를 병합 가능성 전체로 봅니다
```

### 원문 L192–L192

```text
### 승인 전에 AI가 push·PR·병합합니다
```

### 원문 L196–L196

```text
### 충돌을 한쪽 버전 선택으로 끝냅니다
```

### 원문 L200–L200

```text
## 확인 체크리스트
```

### 원문 L213–L213

```text
## 짧은 연습
```

### 원문 L217–L217

```text
## 관련 용어와 출처
```

## src/content/docs/09-git-github/git-and-github.md

전체 파일 SHA-256: e9a859657dc626c9ee734231c8a2ba59e666887ed764cb0b0b888001f57118c1. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L19

```text
---
title: "Git과 GitHub는 다릅니다"
description: "로컬 변경 상태와 원격 협업 서비스를 구분하고 AI가 만든 diff를 안전하게 검토합니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r08-git-github-request.md"
  - "independent: docs/project/reviews/public-beta-1/r08-git-github-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r08-controller-closeout.md"
audience:
  - Git을 처음 사용하는 비개발자
  - AI 코딩 도구로 저장소를 수정하는 데이터 분석가
learningObjectives:
  - Git과 GitHub가 각각 관리하는 대상과 실패 경계를 설명한다
  - 작업 트리·스테이징·커밋·브랜치·원격 상태를 실제 증거로 구분한다
  - commit·push·Pull Request·merge·deploy가 서로 다른 승인 단계임을 설명한다
  - AI가 만든 변경을 status·diff·검증 결과와 대조해 커밋 후보를 판정한다
sidebar:
  order: 2
---
```

### 원문 L20–L20

```text
## 먼저 결론
```

### 원문 L28–L28

```text
## 왜 필요한가
```

### 원문 L42–L42

```text
## 한 문장 정의
```

### 원문 L48–L48

```text
## 편집실에 비유하기
```

### 원문 L62–L62

```text
### 비유가 깨지는 지점
```

### 원문 L68–L68

```text
## Git이 관리하는 주요 상태
```

### 원문 L70–L70

```text
### 저장소와 작업 트리
```

### 원문 L78–L78

```text
### 추적됨·추적되지 않음·무시됨
```

### 원문 L86–L86

```text
### 스테이징 영역
```

### 원문 L92–L92

```text
### 커밋·브랜치·HEAD
```

### 원문 L100–L100

```text
## 작업 트리에서 GitHub까지의 흐름
```

### 원문 L118–L118

```text
## GitHub가 추가하는 협업 계층
```

### 원문 L131–L131

```text
## 로컬 브랜치와 원격 상태를 구분하세요
```

### 원문 L143–L143

```text
## `status`와 `diff`가 각각 보여주는 증거
```

### 원문 L145–L145

```text
### `git status --short --branch --untracked-files=all`
```

### 원문 L151–L151

```text
### `git diff`
```

### 원문 L157–L157

```text
### `git diff --staged`
```

### 원문 L161–L161

```text
### `git diff HEAD`
```

### 원문 L175–L175

```text
### 이력과 위치를 보는 읽기 명령
```

### 원문 L183–L183

```text
## “변경 없음”과 “커밋 준비 완료”를 혼동하지 마세요
```

### 원문 L188–L188

```text
## No commits yet on main
```

### 원문 L198–L198

```text
## 커밋은 저장 버튼보다 검토 가능한 변경 단위입니다
```

### 원문 L210–L210

```text
## 개발 사례: 모임 참가 웹앱
```

### 원문 L212–L212

```text
### W-03 참가·중복 신청 방지의 Git 안전 경계
```

### 원문 L237–L237

```text
## AI 변경을 검토하는 최소 안전 루프
```

### 원문 L253–L253

```text
### 읽기 전용 점검 지시 예
```

### 원문 L284–L284

```text
## 저장소에 넣지 말아야 할 것
```

### 원문 L297–L297

```text
## Git과 백업을 같은 것으로 보지 마세요
```

### 원문 L303–L303

```text
## 흔한 오해와 실패
```

### 원문 L305–L305

```text
### Git과 GitHub를 같은 제품으로 봅니다
```

### 원문 L309–L309

```text
### `git add`를 업로드로 이해합니다
```

### 원문 L313–L313

```text
### `git diff`가 비면 변경이 없다고 결론 냅니다
```

### 원문 L317–L317

```text
### 커밋이 테스트와 백업을 보장한다고 생각합니다
```

### 원문 L321–L321

```text
### push를 저장 버튼처럼 승인합니다
```

### 원문 L325–L325

```text
### pull을 무해한 새로고침으로 사용합니다
```

### 원문 L329–L329

```text
### `.gitignore`를 비밀 삭제 기능으로 봅니다
```

### 원문 L333–L333

```text
### AI 요약만 읽고 실제 diff를 건너뜁니다
```

### 원문 L337–L337

```text
### 복구 명령을 상태 분류 없이 실행합니다
```

### 원문 L341–L341

```text
## 확인 체크리스트
```

### 원문 L356–L356

```text
## 짧은 연습
```

### 원문 L376–L376

```text
## 관련 용어와 출처
```

## src/content/docs/09-git-github/index.md

전체 파일 SHA-256: 879d060baf6d7f35e45be1e2685b56389adcec6479908cc313579cd518e3cf4f. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L12

```text
---
title: "9. Git과 GitHub"
description: "변경 이력, 브랜치, 커밋, Pull Request, 충돌, 되돌리기, 릴리스를 이해합니다."
contentStatus: draft
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - Git을 변경 관리와 협업의 기반으로 설명한다
  - 로컬 변경·검토 요청·원격 협업·릴리스 상태를 구분한다
sidebar:
  order: 1
---
```

### 원문 L13–L13

```text
Git을 단순 백업 도구로 보면 커밋의 의미와 브랜치의 목적을 놓칩니다. 이 부는 로컬 변경 이력, 독립 작업과 검토 요청, 충돌 해결·되돌리기·릴리스를 서로 다른 책임과 상태로 안내합니다.
```

### 원문 L15–L15

```text
## 이 부가 답하는 질문
```

### 원문 L21–L21

```text
## 권장 순서
```

### 원문 L29–L29

```text
## 다음 이동
```

## src/content/docs/09-git-github/undo-merge-conflict-release.md

전체 파일 SHA-256: 3c39c8d3728e6a46c6ff88138e63eae8da1122ed48bea605e984d892d6132d30. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L17

```text
---
title: "되돌리기·충돌·릴리스"
description: "Git의 복구 명령을 상태와 영향 범위에 맞게 구분하고 충돌과 릴리스를 안전하게 다룹니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r21-git-support-request.md"
  - "independent: docs/project/reviews/public-beta-1/r21-git-support-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r21-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - restore·revert·reset·rebase의 대상과 이력 영향을 구분한다
  - 충돌을 양쪽 의도의 통합과 회귀 검증 문제로 해결한다
  - 태그·버전·릴리스·배포와 운영 복구를 서로 다른 상태로 판정한다
sidebar:
  order: 4
---
```

### 원문 L18–L18

```text
## 왜 필요한가
```

### 원문 L24–L24

```text
## 한 문장 정의
```

### 원문 L28–L28

```text
## 문서 편집 이력에 비유하기
```

### 원문 L32–L32

```text
### 비유가 깨지는 지점
```

### 원문 L36–L36

```text
## 명령 전에 여섯 상태를 분류하세요
```

### 원문 L51–L51

```text
## restore·revert·reset·rebase를 구분하세요
```

### 원문 L53–L53

```text
### `git restore`: 작업 트리나 index의 파일 상태를 복원합니다
```

### 원문 L64–L64

```text
### `git revert`: 기존 commit의 반대 변경을 새 commit으로 기록합니다
```

### 원문 L70–L70

```text
### `git reset`: branch tip과 index·작업 트리의 기준을 바꿀 수 있습니다
```

### 원문 L80–L80

```text
### `git rebase`: commit을 새 부모 위에 다시 만듭니다
```

### 원문 L86–L86

```text
## 파괴 가능성이 있는 작업의 안전 계약
```

### 원문 L98–L98

```text
## 병합 충돌은 의도 통합 문제입니다
```

### 원문 L114–L114

```text
## 태그·버전·릴리스·배포를 분리하세요
```

### 원문 L125–L125

```text
## 개발 사례: 모임 참가 웹앱
```

### 원문 L127–L127

```text
### 중복 참가 방지 변경에서 결함이 발견됐다면
```

### 원문 L141–L141

```text
## AI의 되돌리기 제안을 검토하는 읽기 전용 지시
```

### 원문 L161–L161

```text
## 흔한 오해와 실패
```

### 원문 L163–L163

```text
### restore를 안전한 undo 버튼으로 봅니다
```

### 원문 L167–L167

```text
### revert가 과거 상태로 정확히 이동한다고 봅니다
```

### 원문 L171–L171

```text
### reset mode를 복사해 실행합니다
```

### 원문 L175–L175

```text
### 공유 branch를 rebase하고 강제 push합니다
```

### 원문 L179–L179

```text
### 충돌 표시가 사라지면 해결됐다고 봅니다
```

### 원문 L183–L183

```text
### tag를 만들면 release와 배포가 끝났다고 봅니다
```

### 원문 L187–L187

```text
### Git으로 운영 데이터를 복구하려 합니다
```

### 원문 L191–L191

```text
## 확인 체크리스트
```

### 원문 L204–L204

```text
## 짧은 연습
```

### 원문 L214–L214

```text
## 관련 용어와 출처
```

## src/content/docs/10-deployment-operations/build-deploy-domain-dns.md

전체 파일 SHA-256: 157c675aa181f355939e29963f62d9c246129ea800261256f004f5ce9195d28c. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L18

```text
---
title: "빌드·배포·도메인·DNS"
description: "소스가 검증된 아티팩트가 되어 실제 사용자 주소로 전달되는 책임과 증거를 연결합니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r09-build-deploy-request.md"
  - "independent: docs/project/reviews/public-beta-1/r09-build-deploy-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r09-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 소스·빌드·아티팩트·배포·호스팅·릴리스의 책임과 증거를 구분한다
  - URL·도메인·DNS·HTTPS가 사용자를 호스팅 환경에 연결하는 흐름을 설명한다
  - 로컬 성공·빌드 성공·배포 작업 성공·실제 사용자 성공을 별도로 판정한다
  - 정적 사이트와 서버 런타임의 배포·설정·복구 책임 차이를 설명한다
sidebar:
  order: 3
---
```

### 원문 L19–L19

```text
## 먼저 결론
```

### 원문 L37–L37

```text
## 왜 필요한가
```

### 원문 L51–L51

```text
## 핵심 용어를 먼저 구분하세요
```

### 원문 L65–L65

```text
## 택배와 주소 체계에 비유하기
```

### 원문 L80–L80

```text
### 비유가 깨지는 지점
```

### 원문 L84–L84

```text
## 소스에서 사용자까지의 시스템 흐름
```

### 원문 L105–L105

```text
### 증거는 같은 버전을 다음 경계로 넘겨야 합니다
```

### 원문 L118–L118

```text
## 빌드가 실제로 하는 일
```

### 원문 L130–L130

```text
### 재현 가능한 빌드의 질문
```

### 원문 L141–L141

```text
## 아티팩트를 배포 단위로 고정하세요
```

### 원문 L158–L158

```text
## 환경은 주소만 다른 복사본이 아닙니다
```

### 원문 L171–L171

```text
## 빌드 시점 설정과 실행 시점 설정
```

### 원문 L179–L179

```text
## 정적 사이트와 동적 서비스의 배포 책임
```

### 원문 L181–L181

```text
### 정적 사이트
```

### 원문 L192–L192

```text
### 동적 서비스
```

### 원문 L209–L209

```text
## 개발 사례: 모임 참가 웹앱
```

### 원문 L211–L211

```text
### 모임 참가 웹앱을 공개한다면
```

### 원문 L228–L228

```text
## 이 저장소의 GitHub Pages 사례
```

### 원문 L250–L250

```text
## URL·도메인·DNS를 구분하세요
```

### 원문 L266–L266

```text
## DNS 요청의 개념 흐름
```

### 원문 L280–L280

```text
### 자주 보는 DNS 개념
```

### 원문 L290–L290

```text
## “DNS 전파”를 기다리기만 하면 안 됩니다
```

### 원문 L305–L305

```text
## HTTPS는 DNS 다음의 별도 경계입니다
```

### 원문 L311–L311

```text
## CI와 CD를 구분하세요
```

### 원문 L322–L322

```text
### 배포 파이프라인의 증거
```

### 원문 L335–L335

```text
## 완료를 여섯 층으로 나누세요
```

### 원문 L348–L348

```text
## 증상으로 실패 경계를 좁히기
```

### 원문 L350–L350

```text
### 로컬에서는 되지만 빌드가 실패합니다
```

### 원문 L354–L354

```text
### 빌드는 되지만 배포 작업이 실패합니다
```

### 원문 L358–L358

```text
### 배포는 성공했지만 페이지나 자산이 404입니다
```

### 원문 L362–L362

```text
### 도메인이 열리지 않습니다
```

### 원문 L366–L366

```text
### HTTPS 경고가 납니다
```

### 원문 L370–L370

```text
### 화면은 열리지만 핵심 기능이 실패합니다
```

### 원문 L374–L374

```text
### 일부 사용자만 이전 화면을 봅니다
```

### 원문 L378–L378

```text
## 롤백과 수정 배포의 경계
```

### 원문 L392–L392

```text
## AI의 배포 보고를 검증하는 읽기 전용 지시
```

### 원문 L423–L423

```text
## 흔한 오해와 실패
```

### 원문 L425–L425

```text
### 로컬 개발 서버를 배포라고 부릅니다
```

### 원문 L429–L429

```text
### 빌드 성공을 사용자 성공으로 확대합니다
```

### 원문 L433–L433

```text
### 배포 단계에서 소스를 다시 빌드합니다
```

### 원문 L437–L437

```text
### 프런트엔드 빌드에 비밀을 넣습니다
```

### 원문 L441–L441

```text
### DNS 문제를 모두 전파 시간으로 설명합니다
```

### 원문 L445–L445

```text
### 도메인과 URL을 같은 것으로 봅니다
```

### 원문 L449–L449

```text
### HTTPS가 애플리케이션을 안전하게 만든다고 생각합니다
```

### 원문 L453–L453

```text
### `main` 병합을 곧 운영 릴리스로 봅니다
```

### 원문 L457–L457

```text
### 롤백을 “이전 커밋으로 이동”으로만 봅니다
```

### 원문 L461–L461

```text
## 배포 전 체크리스트
```

### 원문 L474–L474

```text
## 배포 후 체크리스트
```

### 원문 L486–L486

```text
## 짧은 연습
```

### 원문 L504–L504

```text
## 관련 용어와 출처
```

## src/content/docs/10-deployment-operations/environment-variables-config.md

전체 파일 SHA-256: 68e09c8d1027060e47a2a3f88a158f43aa475a60451f9d0c412b62fe1a60cce8. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L17

```text
---
title: "환경 변수와 설정"
description: "코드·설정·비밀과 build-time·runtime 경계를 분리하고 환경별 값을 검증·회전·복구하는 법을 익힙니다."
contentStatus: review
reviewEvidence:
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
```

### 원문 L18–L18

```text
## 왜 필요한가
```

### 원문 L24–L24

```text
## 한 문장 정의
```

### 원문 L30–L30

```text
## 공연 무대의 큐시트와 열쇠에 비유하기
```

### 원문 L34–L34

```text
### 비유가 깨지는 지점
```

### 원문 L38–L38

```text
## 코드·설정·비밀을 먼저 분류하세요
```

### 원문 L50–L50

```text
## build-time과 runtime은 값이 사용되는 시점입니다
```

### 원문 L52–L52

```text
### build-time 설정
```

### 원문 L56–L56

```text
### runtime 설정
```

### 원문 L60–L60

```text
### 둘을 이름만으로 추측하지 마세요
```

### 원문 L64–L64

```text
## local·preview·production은 독립된 설정 대상입니다
```

### 원문 L74–L74

```text
## 설정 스키마를 실행 가능한 계약으로 만드세요
```

### 원문 L92–L92

```text
## 로딩 우선순위는 도구별 계약입니다
```

### 원문 L110–L110

```text
## 클라이언트 노출은 빌드 결과에서 확인하세요
```

### 원문 L135–L135

```text
## 비밀의 생성부터 폐기까지 관리하세요
```

### 원문 L149–L149

```text
## 개발 사례: 모임 참가 웹앱
```

### 원문 L151–L151

```text
### 공개 설정과 서버 비밀을 나눈다면
```

### 원문 L166–L166

```text
## AI의 설정 보고를 검토하는 읽기 전용 지시
```

### 원문 L193–L193

```text
## 흔한 오해와 실패
```

### 원문 L195–L195

```text
### `.env` 파일이 있으면 재현 가능하다고 봅니다
```

### 원문 L199–L199

```text
### 환경 변수면 비밀이 안전하다고 봅니다
```

### 원문 L203–L203

```text
### `PUBLIC_`을 붙이지 않으면 브라우저에 절대 안 간다고 봅니다
```

### 원문 L207–L207

```text
### 누락된 production 값을 local 기본값으로 대체합니다
```

### 원문 L211–L211

```text
### 설정 화면을 바꾸면 기존 배포도 즉시 바뀐다고 봅니다
```

### 원문 L215–L215

```text
### 회전을 새 key 발급으로 끝냅니다
```

### 원문 L219–L219

```text
### 디버깅을 위해 값을 그대로 출력합니다
```

### 원문 L223–L223

```text
## 확인 체크리스트
```

### 원문 L238–L238

```text
## 짧은 연습
```

### 원문 L242–L242

```text
## 관련 용어와 출처
```

## src/content/docs/10-deployment-operations/index.md

전체 파일 SHA-256: d8d4ec030ea396019d5596b01866675719abfc14b33cff73ca73240a989a795a. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L12

```text
---
title: "10. 배포와 운영"
description: "환경 변수, 설정, 빌드, 배포, 도메인, DNS, 로그, 모니터링, 백업을 이해합니다."
contentStatus: draft
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 배포와 운영을 여러 책임의 연결로 설명한다
  - 설정·전달·공개·관측·복구 증거를 구분한다
sidebar:
  order: 1
---
```

### 원문 L13–L13

```text
로컬에서 동작한 프로그램을 사용자 환경에 안전하게 전달하려면 설정과 비밀정보, 빌드 산출물, 배포 대상, 도메인 연결, 운영 신호와 복구 가능성을 각각 확인해야 합니다. 이 부는 “내 컴퓨터에서 된다”와 “사용자가 안전하게 쓸 수 있다” 사이의 책임을 나눕니다.
```

### 원문 L15–L15

```text
## 이 부가 답하는 질문
```

### 원문 L21–L21

```text
## 권장 순서
```

### 원문 L29–L29

```text
## 다음 이동
```

## src/content/docs/10-deployment-operations/logs-monitoring-backup.md

전체 파일 SHA-256: 17aa3d355ad4432d1fda08fade29284442bdb6f07bcb6340721df0bae9437975. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L18

```text
---
title: "로그·모니터링·백업"
description: "배포 후 사용자 영향을 발견하고 대응하며 데이터와 서비스를 복구할 수 있는 최소 운영 책임을 연결합니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r10-operations-request.md"
  - "independent: docs/project/reviews/public-beta-1/r10-operations-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r10-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 로그·지표·트레이스·모니터링·알림의 역할과 한계를 구분한다
  - 사용자 흐름에서 측정할 신호와 행동 가능한 알림을 정한다
  - 백업·복제·버전 관리·복원과 RPO·RTO를 구분한다
  - 장애 대응과 운영 인수인계에 필요한 소유자·절차·검증 증거를 설명한다
sidebar:
  order: 4
---
```

### 원문 L19–L19

```text
## 먼저 결론
```

### 원문 L36–L36

```text
## 왜 필요한가
```

### 원문 L50–L50

```text
## 핵심 용어를 먼저 구분하세요
```

### 원문 L67–L67

```text
## 가게 운영 장부와 비상벨에 비유하기
```

### 원문 L79–L79

```text
### 비유가 깨지는 지점
```

### 원문 L83–L83

```text
## 운영은 발견에서 학습까지의 순환입니다
```

### 원문 L103–L103

```text
## 로그는 사건을 설명할 만큼 구조화하세요
```

### 원문 L117–L117

```text
### 로그에 남기지 말아야 할 것
```

### 원문 L123–L123

```text
## 지표는 사용자 결과와 시스템 원인을 함께 보세요
```

### 원문 L136–L136

```text
## 트레이스는 한 작업의 경로를 연결합니다
```

### 원문 L142–L142

```text
## 내부 건강과 실제 사용자 흐름을 분리하세요
```

### 원문 L153–L153

```text
## SLI·SLO·SLA는 측정·목표·약속입니다
```

### 원문 L165–L165

```text
## 대시보드는 질문마다 설계하세요
```

### 원문 L177–L177

```text
## 알림은 사람이 행동할 수 있어야 합니다
```

### 원문 L194–L194

```text
## 개발 사례: 모임 참가 웹앱
```

### 원문 L196–L196

```text
### 모집 중인 모임의 운영 신호
```

### 원문 L208–L208

```text
### 운영 증거의 불변식
```

### 원문 L231–L231

```text
## 이 저장소에서는 무엇을 관찰할 수 있나요
```

### 원문 L246–L246

```text
## 인시던트 대응은 사용자 피해부터 줄입니다
```

### 원문 L269–L269

```text
### 런북과 사후 검토
```

### 원문 L275–L275

```text
## 백업·동기화·복제·버전 관리는 같은 것이 아닙니다
```

### 원문 L285–L285

```text
## RPO와 RTO는 목표이지 보장 결과가 아닙니다
```

### 원문 L296–L296

```text
## 백업 계획은 복원 질문에서 시작하세요
```

### 원문 L312–L312

```text
## 복원 시험이 백업의 증거입니다
```

### 원문 L329–L329

```text
## 정적 사이트와 데이터 서비스의 복구는 다릅니다
```

### 원문 L331–L331

```text
### 정적 사이트
```

### 원문 L335–L335

```text
### 데이터가 있는 동적 서비스
```

### 원문 L341–L341

```text
## AI의 운영 준비 보고를 검증하는 읽기 전용 지시
```

### 원문 L373–L373

```text
## 흔한 오해와 실패
```

### 원문 L375–L375

```text
### 대시보드가 초록색이면 사용자가 성공한다고 생각합니다
```

### 원문 L379–L379

```text
### 로그를 많이 남기면 관측 가능성이 생긴다고 생각합니다
```

### 원문 L383–L383

```text
### 오류 전체를 호출 알림으로 만듭니다
```

### 원문 L387–L387

```text
### 비밀과 원본 요청을 로그에 복사합니다
```

### 원문 L391–L391

```text
### 복제나 동기화를 백업이라고 부릅니다
```

### 원문 L395–L395

```text
### 백업 작업 성공을 복구 성공으로 봅니다
```

### 원문 L399–L399

```text
### RPO·RTO를 도구 기본값으로 정합니다
```

### 원문 L403–L403

```text
### 원인 규명 전에는 아무 조치도 하지 않습니다
```

### 원문 L407–L407

```text
### 복원 시험을 운영 환경에서 바로 실행합니다
```

### 원문 L411–L411

```text
### AI에게 “모니터링과 백업을 알아서 설정하라”고 합니다
```

### 원문 L415–L415

```text
## 운영 신호 체크리스트
```

### 원문 L427–L427

```text
## 백업·복구 체크리스트
```

### 원문 L441–L441

```text
## 인시던트·인수인계 체크리스트
```

### 원문 L452–L452

```text
## 짧은 연습
```

### 원문 L470–L470

```text
## 관련 용어와 출처
```

## src/content/docs/11-ai-native/agent-review-and-verification.md

전체 파일 SHA-256: b362a31b7397b97b7f4652bf0b6c9e5ffd696d7f8c9e4c634711b3400d992741. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L17

```text
---
title: "에이전트 결과 리뷰와 검증"
description: "AI가 만든 주장·계획·변경·증거를 분리하고 독립 검토와 재판정으로 수용 여부를 결정합니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r23-ai-support-request.md"
  - "independent: docs/project/reviews/public-beta-1/r23-ai-support-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r23-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 에이전트의 주장·계획·변경·검증 증거를 구분한다
  - 요구·diff·test·data·browser·security·human judgment를 위험에 맞게 대조한다
  - 독립 검토 의견을 재현·기각·재검증한 뒤 수용 여부를 판정한다
sidebar:
  order: 5
---
```

### 원문 L19–L19

```text
## 먼저 결론
```

### 원문 L25–L25

```text
## 한 문장 정의
```

### 원문 L29–L29

```text
## 비유와 비유의 한계
```

### 원문 L35–L35

```text
## 먼저 네 종류를 분리합니다
```

### 원문 L46–L46

```text
## 독립 검토는 무엇을 분리하나요?
```

### 원문 L56–L56

```text
## 리뷰의 다섯 층
```

### 원문 L58–L58

```text
### 1. 요구사항 적합성
```

### 원문 L65–L65

```text
### 2. 설계 적합성
```

### 원문 L72–L72

```text
### 3. 구현과 diff
```

### 원문 L79–L79

```text
### 4. 검증 증거
```

### 원문 L86–L86

```text
### 5. 운영 위험
```

### 원문 L93–L93

```text
## 위험마다 증거층이 다릅니다
```

### 원문 L109–L109

```text
## 한 작업을 검토하는 순서
```

### 원문 L121–L121

```text
## 리뷰 에이전트 브리프 예시
```

### 원문 L135–L135

```text
## finding은 다시 판정해야 합니다
```

### 원문 L147–L147

```text
## 오탐·기각·재검증 예시
```

### 원문 L160–L160

```text
## 리뷰와 검증의 흔한 실패·복구
```

### 원문 L162–L162

```text
### 구현 대화를 그대로 넘겨 확증 편향을 공유함
```

### 원문 L166–L166

```text
### 성공 로그가 있지만 대상이 0건임
```

### 원문 L170–L170

```text
### 스냅샷 기반 검토의 함정
```

### 원문 L174–L174

```text
### reviewer PASS를 인간 승인으로 바꿈
```

### 원문 L178–L178

```text
### 검증 과정이 상태를 바꿈
```

### 원문 L182–L182

```text
## 완료와 수용은 같은 말이 아닙니다
```

### 원문 L198–L198

```text
## 수용 체크리스트
```

### 원문 L211–L211

```text
## 짧은 연습
```

### 원문 L221–L221

```text
## 관련 장과 출처
```

## src/content/docs/11-ai-native/context-spec-harness-loop.md

전체 파일 SHA-256: b0b441d1bde4ac968d75561523834bee6f36cd22384cedf83aab6018f6b1e725. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L18

```text
---
title: "컨텍스트·스펙·하네스·루프"
description: "AI 개발의 네 책임을 입력·목표·환경·평가로 구분하고 성숙도와 현재 조직 사례의 범위를 판정합니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r23-ai-support-request.md"
  - "independent: docs/project/reviews/public-beta-1/r23-ai-support-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r23-controller-closeout.md"
audience:
  - AI 개발 유행어를 체계적으로 이해하려는 비개발자
  - 에이전트 프로젝트를 설계하는 데이터 분석가
learningObjectives:
  - 컨텍스트·스펙·하네스·루프의 입력·출력과 실패를 구분한다
  - 저장소·권한·도구·관측·평가·회귀를 하나의 증거 순환으로 연결한다
  - 신생 실무 표현과 날짜 있는 조직 사례를 표준·제품 보장과 구분한다
sidebar:
  order: 3
---
```

### 원문 L20–L20

```text
## 먼저 결론
```

### 원문 L26–L26

```text
## 한 문장씩 정의
```

### 원문 L35–L35

```text
## 비유와 비유의 한계
```

### 원문 L41–L41

```text
## 성숙도를 어떻게 읽어야 하나요?
```

### 원문 L54–L54

```text
## 1. 컨텍스트: 지금 무엇을 사실로 보게 할 것인가
```

### 원문 L68–L68

```text
### 컨텍스트 실패와 복구
```

### 원문 L74–L74

```text
## 2. 스펙: 무엇을 만들고 무엇으로 수용할 것인가
```

### 원문 L88–L88

```text
### 스펙 실패와 복구
```

### 원문 L92–L92

```text
## 3. 하네스: 어떤 행동과 피드백을 가능하게 할 것인가
```

### 원문 L106–L106

```text
### 하네스 실패와 복구
```

### 원문 L110–L110

```text
## 4. 루프: 언제 반복하고 멈추며 넘길 것인가
```

### 원문 L125–L125

```text
### 루프 실패와 복구
```

### 원문 L129–L129

```text
## 네 책임의 관계를 읽는 법
```

### 원문 L144–L144

```text
## 관찰·평가·회귀를 분리합니다
```

### 원문 L154–L154

```text
## 모임 W-03에 적용해 보기
```

### 원문 L167–L167

```text
## 도입 순서보다 먼저 할 최소 계약
```

### 원문 L178–L178

```text
## 확인 체크리스트
```

### 원문 L190–L190

```text
## 짧은 연습
```

### 원문 L200–L200

```text
## 관련 장과 공식 자료
```

## src/content/docs/11-ai-native/index.md

전체 파일 SHA-256: db188b1ac99de066b4e60c74da04a3b6c5dc541c9757398d446c99e8267690d2. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L12

```text
---
title: "11. AI 네이티브 개발"
description: "코딩 에이전트, 컨텍스트, 스펙, 하네스, 실행 루프, 권한과 검증을 기존 개발 원리 위에서 이해합니다."
contentStatus: draft
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - AI 네이티브 개발을 기존 소프트웨어공학과 연결해 설명한다
  - 지시·환경·권한·검증의 책임과 승인 경계를 구분한다
sidebar:
  order: 1
---
```

### 원문 L13–L13

```text
에이전트가 여러 파일을 읽고 도구를 실행하면서 개발의 병목은 타이핑에서 **의도·환경·제약·피드백을 설계하는 일**로 이동합니다. 그렇다고 요구사항, 아키텍처, Git, 테스트, 운영이 사라지는 것은 아닙니다. 이 부는 일을 맡기는 계약, 에이전트가 읽고 실행하는 환경, 허용된 부작용, 결과를 믿을 근거를 차례로 연결합니다.
```

### 원문 L15–L15

```text
## 이 부가 답하는 질문
```

### 원문 L21–L21

```text
## 권장 순서
```

### 원문 L30–L30

```text
## 다음 이동
```

## src/content/docs/11-ai-native/permissions-sandbox-worktrees.md

전체 파일 SHA-256: e3f1aefb39a8fdb748ff10208c1b8c5d84f323a953154484814c19539fc4c6f6. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L17

```text
---
title: "권한·샌드박스·worktree"
description: "에이전트의 read·write·network·exec·외부 부작용을 최소 권한, 승인, 샌드박스, worktree와 복구 증거로 통제합니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r23-ai-support-request.md"
  - "independent: docs/project/reviews/public-beta-1/r23-ai-support-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r23-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - read·write·network·exec와 approval·sandbox의 서로 다른 보호 범위를 설명한다
  - worktree가 분리하는 Git 상태와 공유하는 저장소·외부 자원을 구분한다
  - 파괴적 작업·비밀·외부 효과를 최소 권한과 복구·부정 검증으로 통제한다
sidebar:
  order: 4
---
```

### 원문 L19–L19

```text
## 먼저 결론
```

### 원문 L25–L25

```text
## 한 문장 정의
```

### 원문 L29–L29

```text
## 비유와 비유의 한계
```

### 원문 L35–L35

```text
## capability·approval·sandbox를 구분합니다
```

### 원문 L44–L44

```text
## 권한을 열 개의 질문으로 나눕니다
```

### 원문 L61–L61

```text
## 최소 권한을 작업 단위로 설계합니다
```

### 원문 L74–L74

```text
## 샌드박스는 격리 범위를 직접 확인합니다
```

### 원문 L82–L82

```text
### 샌드박스 검증 질문
```

### 원문 L93–L93

```text
## Git worktree가 분리하는 것과 공유하는 것
```

### 원문 L114–L114

```text
### worktree 시작과 종료 증거
```

### 원문 L120–L120

```text
## 파괴적 작업은 대상·preview·복구 순서로 다룹니다
```

### 원문 L134–L134

```text
## 비밀과 외부 효과는 파일 권한 밖의 문제입니다
```

### 원문 L146–L146

```text
## 진단 계약과 변경 계약을 분리합니다
```

### 원문 L170–L170

```text
## 흔한 실패와 복구
```

### 원문 L172–L172

```text
### 범위 밖 경로를 잘못 해석함
```

### 원문 L176–L176

```text
### sandbox가 시작되지 않았는데 계속 실행함
```

### 원문 L180–L180

```text
### worktree는 달라도 같은 외부 자원을 바꿈
```

### 원문 L184–L184

```text
### 응답 실패를 rollback으로 오해함
```

### 원문 L188–L188

```text
### 비밀이 출력이나 artifact에 노출됨
```

### 원문 L192–L192

```text
### 승인 피로로 넓은 영구 예외를 줌
```

### 원문 L196–L196

```text
## 수용 증거
```

### 원문 L210–L210

```text
## 확인 체크리스트
```

### 원문 L223–L223

```text
## 짧은 연습
```

### 원문 L233–L233

```text
## 관련 장과 공식 자료
```

## src/content/docs/11-ai-native/working-with-coding-agents.md

전체 파일 SHA-256: ac63eb2a468416b43c57432ac4297e0af3c27edf6d694b86a40bca7131311711. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L19

```text
---
title: "AI 코딩 에이전트와 일하는 법"
description: "코딩 에이전트에게 목표·범위·권한·수용 기준을 주고 변경과 검증 증거를 안전하게 인수하는 방법을 익힙니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r11-coding-agents-request.md"
  - "independent: docs/project/reviews/public-beta-1/r11-coding-agents-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r11-controller-closeout.md"
audience:
  - Claude Code 또는 Codex를 사용하는 비개발자
  - AI 코딩 프로젝트를 운영하는 데이터 분석가
learningObjectives:
  - 답변·진단·변경·외부 실행 요청의 권한 경계를 구분한다
  - 목표·비목표·범위·수용 기준·검증이 있는 작업 계약을 작성한다
  - 에이전트의 상태 메시지와 완료 보고를 실제 저장소·명령·화면 증거로 재판정한다
  - 세션·인수인계·병렬 작업에서 상태와 통합 책임을 보존한다
sidebar:
  order: 2
---
```

### 원문 L20–L20

```text
## 먼저 결론
```

### 원문 L36–L36

```text
## 왜 필요한가
```

### 원문 L50–L50

```text
## 코딩 에이전트란 무엇인가요
```

### 원문 L62–L62

```text
## 공동 작업실의 외부 작업자에 비유하기
```

### 원문 L77–L77

```text
### 비유가 깨지는 지점
```

### 원문 L81–L81

```text
## 요청 동사는 권한을 뜻합니다
```

### 원문 L85–L85

```text
### 답변·설명
```

### 원문 L89–L89

```text
### 검토·상태 보고
```

### 원문 L93–L93

```text
### 진단
```

### 원문 L97–L97

```text
### 변경·구현
```

### 원문 L101–L101

```text
### 외부 실행·공개
```

### 원문 L109–L109

```text
## 증거 기반 작업 루프
```

### 원문 L115–L115

```text
### 1. 상태 확인
```

### 원문 L119–L119

```text
### 2. 목표와 비목표 고정
```

### 원문 L123–L123

```text
### 3. 작은 계획
```

### 원문 L127–L127

```text
### 4. 한 단위 변경
```

### 원문 L131–L131

```text
### 5. 자동·실제 검증
```

### 원문 L135–L135

```text
### 6. 독립 리뷰
```

### 원문 L139–L139

```text
### 7. 문맥·인수인계 갱신
```

### 원문 L145–L145

```text
## 시작 전에 확인할 기준 상태
```

### 원문 L160–L160

```text
## 작업 브리프의 여덟 요소
```

### 원문 L162–L162

```text
### 1. 현재 상태와 근거
```

### 원문 L166–L166

```text
### 2. 목표
```

### 원문 L170–L170

```text
### 3. 비목표
```

### 원문 L174–L174

```text
### 4. 수정 범위
```

### 원문 L178–L178

```text
### 5. 권한과 제약
```

### 원문 L182–L182

```text
### 6. 수용 기준
```

### 원문 L186–L186

```text
### 7. 검증과 증거
```

### 원문 L190–L190

```text
### 8. 보고와 인수인계
```

### 원문 L196–L196

```text
## 개발 사례: 모임 참가 웹앱
```

### 원문 L200–L200

```text
### 빈 상세 화면은 읽기 전용으로 먼저 진단하기
```

### 원문 L223–L223

```text
### W-03 중복 참가 방지를 한 수직 조각으로 고정하기
```

### 원문 L264–L264

```text
### 완료 주장을 별도 증거로 인수하기
```

### 원문 L282–L282

```text
## 계획은 실행 결과가 아닙니다
```

### 원문 L297–L297

```text
## 가장 작은 독립 작업으로 나누세요
```

### 원문 L309–L309

```text
## 증거의 강도를 구분하세요
```

### 원문 L322–L322

```text
## 테스트 보고를 다시 판정하는 법
```

### 원문 L337–L337

```text
## 에이전트 상태 메시지를 읽는 법
```

### 원문 L355–L355

```text
## 종료 코드와 출력도 증거 범위가 있습니다
```

### 원문 L366–L366

```text
## 권한은 피해 반경에 맞춰 단계화하세요
```

### 원문 L368–L368

```text
### 기본적으로 허용하기 쉬운 범위
```

### 원문 L375–L375

```text
### 작업마다 확인할 범위
```

### 원문 L384–L384

```text
### 별도 보안·사업 승인이 필요한 범위
```

### 원문 L396–L396

```text
## 이 저장소의 작업 하네스를 읽어 보세요
```

### 원문 L414–L414

```text
## 세션과 컨텍스트를 파일로 이어 가세요
```

### 원문 L435–L435

```text
## 병렬 에이전트는 소유권과 통합이 먼저입니다
```

### 원문 L450–L450

```text
## 읽기 전용 상태 점검 요청 예시
```

### 원문 L471–L471

```text
## 구현 요청 예시
```

### 원문 L495–L495

```text
## 완료 보고의 표준 형식
```

### 원문 L511–L511

```text
## 흔한 오해와 실패
```

### 원문 L513–L513

```text
### “잘 만들어 줘”가 목표라고 생각합니다
```

### 원문 L517–L517

```text
### 분석 요청 뒤 파일이 바뀌어도 괜찮다고 생각합니다
```

### 원문 L521–L521

```text
### 계획이 구체적이면 이미 검증됐다고 생각합니다
```

### 원문 L525–L525

```text
### 테스트 한 개 통과로 기능 전체를 완료합니다
```

### 원문 L529–L529

```text
### `git diff`가 비면 변경이 없다고 생각합니다
```

### 원문 L533–L533

```text
### fallback을 정상 성공처럼 숨깁니다
```

### 원문 L537–L537

```text
### timeout 뒤 같은 작업을 바로 재실행합니다
```

### 원문 L541–L541

```text
### 같은 세션의 자체 리뷰를 독립 검토라고 부릅니다
```

### 원문 L545–L545

```text
### 리뷰 finding을 모두 적용하거나 `PASS`를 곧바로 수용으로 읽습니다
```

### 원문 L549–L549

```text
### 진행 업데이트를 완료 보고로 읽습니다
```

### 원문 L553–L553

```text
### 컨텍스트가 길수록 정확하다고 생각합니다
```

### 원문 L557–L557

```text
### 여러 에이전트가 동의하면 맞다고 생각합니다
```

### 원문 L561–L561

```text
### commit·push·배포·공개를 하나의 마무리 단계로 묶습니다
```

### 원문 L565–L565

```text
## 작업 전 체크리스트
```

### 원문 L578–L578

```text
## 작업 인수 체크리스트
```

### 원문 L593–L593

```text
## 짧은 연습
```

### 원문 L611–L611

```text
## 관련 용어와 출처
```

## src/content/docs/12-case-studies/analytics-dashboard-case-study.md

전체 파일 SHA-256: 4be57134aca3ace3b0d6e3400ddfefd515b7f04b42affa4c1e1c4ab71d0d9502. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L18

```text
---
title: "데이터 분석가의 주가 대시보드 사례"
description: "교육용 가상 주가·거래량 데이터를 원천과 권리, 데이터 계약, 품질, 화면, 검증, 배포와 운영 인수까지 연결합니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r13-stock-capstone-request.md"
  - "independent: docs/project/reviews/public-beta-1/r13-stock-capstone-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r13-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 데이터 분석가
  - 공개 데이터로 분석 제품을 만들려는 비개발자
learningObjectives:
  - 실제 원천과 교육용 fixture, 분석 결과와 투자 판단을 구분한다
  - 거래일·가격 기준·단위·값 상태·버전이 있는 데이터 계약을 설명한다
  - 데이터 품질과 화면 동작 성공을 서로 다른 증거로 검증한다
  - 정적 전달과 읽기 전용 API를 데이터 규모·최신성·권리·운영 책임으로 선택한다
  - 갱신 실패·정정·철회·복원과 공개 사용자 흐름을 연결한다
---
```

### 원문 L19–L19

```text
## 먼저 결론
```

### 원문 L37–L37

```text
## 사용자 요구와 비목표
```

### 원문 L48–L48

```text
## 왜 이 사례가 필요한가
```

### 원문 L66–L66

```text
## 분석 노트북은 개인 실험 노트에 가깝습니다
```

### 원문 L77–L77

```text
## 교육용 시나리오와 경계
```

### 원문 L102–L102

```text
## D-01~D-05 요구에서 복구까지 추적합니다
```

### 원문 L106–L106

```text
### D-01 fixture 표시 추적
```

### 원문 L118–L118

```text
### D-02 선택과 문맥 추적
```

### 원문 L130–L130

```text
### D-03 재현성 추적
```

### 원문 L142–L142

```text
### D-04 상태 구분 추적
```

### 원문 L154–L154

```text
### D-05 갱신 실패 추적
```

### 원문 L168–L168

```text
## 전체 구조를 한 번에 봅니다
```

### 원문 L184–L184

```text
## 데이터 계약은 숫자와 문맥을 함께 약속합니다
```

### 원문 L190–L190

```text
### fixture 행 계약
```

### 원문 L207–L207

```text
### 값 상태와 행동
```

### 원문 L218–L218

```text
### 이 fixture에서 검사할 타입과 조합
```

### 원문 L235–L235

```text
## 재현성은 입력에서 화면까지 이어집니다
```

### 원문 L245–L245

```text
## 전달·배포 메타데이터는 행과 별도 계약입니다
```

### 원문 L257–L257

```text
### 행 상태와 후보 게시 판정을 분리합니다
```

### 원문 L267–L267

```text
## 신선도는 값 품질과 다른 차원입니다
```

### 원문 L281–L281

```text
## 검토 대기는 증거가 완전해야 끝납니다
```

### 원문 L293–L293

```text
## 품질 게이트는 다음 행동을 결정합니다
```

### 원문 L308–L308

```text
## 정적 파일과 읽기 전용 API 중 무엇을 선택할까요
```

### 원문 L314–L314

```text
### 정적 전달이 맞는 현재 신호
```

### 원문 L323–L323

```text
### 읽기 전용 API를 검토할 전환 신호
```

### 원문 L334–L334

```text
## 사용자 행동에서 데이터까지 추적합니다
```

### 원문 L347–L347

```text
## 화면은 정상 결과보다 상태 설계가 먼저입니다
```

### 원문 L349–L349

```text
### 초기와 로딩
```

### 원문 L355–L355

```text
### 정상 fixture
```

### 원문 L362–L362

```text
### 결측·경고·차단
```

### 원문 L369–L369

```text
### 오래된 공개 버전
```

### 원문 L375–L375

```text
### 파일 로드와 렌더링 실패
```

### 원문 L381–L381

```text
### 정정과 철회
```

### 원문 L387–L387

```text
## 변화는 관찰과 질문으로만 설명합니다
```

### 원문 L393–L393

```text
## 접근성은 전달 계약입니다
```

### 원문 L407–L407

```text
## 테스트는 요구사항별 실패 위험을 겨냥합니다
```

### 원문 L424–L424

```text
### 계약·데이터 검사
```

### 원문 L432–L432

```text
### 재현성·전달 검사
```

### 원문 L439–L439

```text
### 브라우저·사용자 검사
```

### 원문 L448–L448

```text
## 변경 전과 변경 후의 증거를 분리합니다
```

### 원문 L454–L454

```text
## Git에는 재현에 필요한 경계를 남깁니다
```

### 원문 L471–L471

```text
## 빌드·릴리스·배포 증거를 구분합니다
```

### 원문 L479–L479

```text
## 운영 인수는 갱신·정정·복원을 연결합니다
```

### 원문 L481–L481

```text
### 관찰할 신호
```

### 원문 L489–L489

```text
### 갱신과 게시 규칙
```

### 원문 L496–L496

```text
### 정정과 철회 규칙
```

### 원문 L502–L502

```text
### 복원 시험 순서
```

### 원문 L515–L515

```text
## AI 코딩 에이전트에는 작은 계약 단위로 맡깁니다
```

### 원문 L517–L517

```text
### 작업 1: 계약과 fixture
```

### 원문 L523–L523

```text
### 작업 2: 품질과 게시 판정
```

### 원문 L529–L529

```text
### 작업 3: 전달 계약
```

### 원문 L535–L535

```text
### 작업 4: 한 사용자 흐름
```

### 원문 L541–L541

```text
### 작업 5: 인수 증거
```

### 원문 L549–L549

```text
## 읽기 전용 상태 점검 요청 예시
```

### 원문 L565–L565

```text
## 한 수직 조각 구현 요청 예시
```

### 원문 L586–L586

```text
## 흔한 실패와 복구
```

### 원문 L588–L588

```text
### fixture를 실제 종목처럼 설명합니다
```

### 원문 L592–L592

```text
### 조정되지 않은 값을 조정주가라고 부릅니다
```

### 원문 L596–L596

```text
### 거래일 공백을 자동으로 채웁니다
```

### 원문 L600–L600

```text
### 값 0·결측·비적용을 같은 빈 칸으로 처리합니다
```

### 원문 L604–L604

```text
### `warning`과 `stale`을 합칩니다
```

### 원문 L608–L608

```text
### 차단 후보를 최신 값으로 게시합니다
```

### 원문 L612–L612

```text
### 표와 차트가 값을 따로 계산합니다
```

### 원문 L616–L616

```text
### 지수와 주식 값을 한 축에서 직접 비교합니다
```

### 원문 L620–L620

```text
### 정적 파일을 선택했으니 운영이 없다고 생각합니다
```

### 원문 L624–L624

```text
### 로컬 빌드를 공개 배포라고 부릅니다
```

### 원문 L628–L628

```text
### AI가 변화 원인과 투자 결론을 생성합니다
```

### 원문 L632–L632

```text
### 백업 파일만 보고 복구 완료라고 합니다
```

### 원문 L636–L636

```text
## 작업 전 체크리스트
```

### 원문 L651–L651

```text
## 공개 전 인수 체크리스트
```

### 원문 L667–L667

```text
## 짧은 연습
```

### 원문 L681–L681

```text
## 관련 장과 출처
```

## src/content/docs/12-case-studies/first-full-stack-project.md

전체 파일 SHA-256: c492b1be6c3f7f85287de61c32c3e0f959c98c48e7959a8ced35b9e3c01c4851. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L18

```text
---
title: "첫 풀스택 프로젝트: 모임 참가 웹앱"
description: "모임 생성·공개 조회·참가·취소·정원·마감 흐름으로 요구사항, 아키텍처, 권한, 테스트, Git, 배포와 운영을 연결합니다."
contentStatus: review
reviewEvidence:
  - "request: docs/project/reviews/public-beta-1/r12-meeting-capstone-request.md"
  - "independent: docs/project/reviews/public-beta-1/r12-meeting-capstone-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r12-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 모임 웹앱을 사용자 역할·상태·경계·흐름으로 설계한다
  - 공개 조회부터 권한과 동시성이 있는 쓰기까지 수직 기능 조각으로 나눈다
  - 요구사항별 실패 위험을 테스트·화면·데이터·운영 증거에 연결한다
  - 프레임워크와 제품을 아키텍처 책임과 동일시하지 않는다
sidebar:
  order: 2
---
```

### 원문 L20–L20

```text
## 먼저 결론
```

### 원문 L28–L28

```text
## 왜 이 사례인가
```

### 원문 L32–L32

```text
### 비유로 이해하기
```

### 원문 L36–L36

```text
### 비유가 깨지는 지점
```

### 원문 L40–L40

```text
## 문제와 비목표
```

### 원문 L60–L60

```text
## 역할과 사용자 작업
```

### 원문 L72–L72

```text
## 시스템 지도
```

### 원문 L86–L86

```text
## 상태와 데이터 관계
```

### 원문 L106–L106

```text
## W-01 공개 조회
```

### 원문 L110–L110

```text
### 수용 기준
```

### 원문 L116–L116

```text
### 실패 상태
```

### 원문 L123–L123

```text
### 직접 증거
```

### 원문 L129–L129

```text
## W-02 주최자 생성과 소유권
```

### 원문 L133–L133

```text
### 수용 기준
```

### 원문 L140–L140

```text
### 실패 상태
```

### 원문 L148–L148

```text
### 직접 증거
```

### 원문 L155–L155

```text
## W-03 참가와 취소
```

### 원문 L161–L161

```text
### 수용 기준
```

### 원문 L168–L168

```text
### 실패 상태
```

### 원문 L175–L175

```text
### 직접 증거
```

### 원문 L183–L183

```text
## W-04 정원·마감과 동시성
```

### 원문 L187–L187

```text
### 수용 기준
```

### 원문 L196–L196

```text
### 실패 상태
```

### 원문 L204–L204

```text
### 직접 증거
```

### 원문 L216–L216

```text
## W-05 배포와 운영 인수
```

### 원문 L220–L220

```text
### 수용 기준
```

### 원문 L229–L229

```text
### 실패 상태
```

### 원문 L237–L237

```text
### 직접 증거
```

### 원문 L244–L244

```text
## W-01~W-05 요구에서 복구까지 추적
```

### 원문 L248–L248

```text
### W-01 공개 조회 추적
```

### 원문 L260–L260

```text
### W-02 주최자 생성·소유권 추적
```

### 원문 L272–L272

```text
### W-03 참가·자기 취소 추적
```

### 원문 L284–L284

```text
### W-04 정원·마감·동시성 추적
```

### 원문 L296–L296

```text
### W-05 배포·운영 인수 추적
```

### 원문 L310–L310

```text
## AI 작업 계약
```

### 원문 L329–L329

```text
## 완료 체크리스트
```

### 원문 L344–L344

```text
## 짧은 연습
```

### 원문 L356–L356

```text
## 관련 장과 출처
```

## src/content/docs/12-case-studies/index.md

전체 파일 SHA-256: e7c90e444e111f299270175976a5e4baded3f6007938bdf29cf54086fdb0a60c. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L12

```text
---
title: "12. 사례와 캡스톤"
description: "요구사항부터 운영까지 앞의 개념을 하나의 실제 프로젝트 흐름으로 연결합니다."
contentStatus: draft
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 개별 개발 개념을 프로젝트 생명주기로 연결한다
  - 일반 개발과 데이터 분석 사례의 계약·증거 책임을 비교한다
sidebar:
  order: 1
---
```

### 원문 L13–L13

```text
개별 용어를 이해해도 프로젝트에서는 동시에 여러 결정을 내려야 합니다. 이 부는 일반 개발과 데이터 분석의 서로 다른 책임을 두 캡스톤으로 연결합니다. 두 사례 모두 요구·설계·구현·검증·운영을 다루지만, 무엇을 바꾸고 어떤 증거로 성공을 판단하는지가 다릅니다.
```

### 원문 L15–L15

```text
## 이 부가 답하는 질문
```

### 원문 L21–L21

```text
## 권장 순서
```

### 원문 L28–L28

```text
## 다음 이동
```

## src/content/docs/index.md

전체 파일 SHA-256: 3a35231f260c6e8941417cd3a09bbce282c5d6eeefcff662948320e112007dcb. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L18

```text
---
title: "바이브 개발 핸드북"
description: "비개발자가 AI와 함께 소프트웨어를 설계하고 검증하고 배포하는 데 필요한 개발 기본기를 익힙니다."
head:
  - tag: title
    content: "바이브 개발 핸드북"
contentStatus: draft
audience:
  - 바이브 코딩을 시작한 비개발자
  - 데이터 분석가
  - 업무 도메인 전문가
learningObjectives:
  - 이 핸드북의 목적과 비목표를 설명한다
  - 순차 학습과 검색 기반 학습 중 자신에게 맞는 출발점을 선택한다
  - AI의 완료 주장을 증거로 검증해야 하는 이유를 설명한다
sidebar:
  order: 1
---
```

### 원문 L19–L19

```text
바이브 코딩은 자연어로 소프트웨어를 만드는 진입 장벽을 크게 낮췄습니다. 그러나 **입력 장벽이 낮아진 것과 결과를 책임질 수 있게 된 것은 별개의 문제**입니다. 화면이 그럴듯하게 보여도 데이터가 잘못 저장되거나 권한 검사가 빠질 수 있고, 테스트가 실제 요구를 확인하지 못하거나 배포 뒤 되돌릴 방법이 없을 수 있습니다.
```

### 원문 L27–L27

```text
## 두 가지 출발점
```

### 원문 L33–L33

```text
## 전체 학습 지도
```

### 원문 L43–L43

```text
## 세 가지 학습 경로
```

### 원문 L45–L45

```text
### 빠른 지도
```

### 원문 L49–L49

```text
### Build Track
```

### 원문 L53–L53

```text
### Deep Track
```

### 원문 L57–L57

```text
## 이 핸드북이 약속하지 않는 것
```

### 원문 L61–L61

```text
## 완료 상태를 구분하세요
```

## src/content/docs/reference/agent-output-glossary.md

전체 파일 SHA-256: 5bb3e26016e3a9e2fef51561be22a585aad1874fdc3cfd88f6962d136f79380e. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L14

```text
---
title: "에이전트 출력 용어집"
description: "Codex와 Claude Code 등 코딩 에이전트가 작업 중 출력하는 용어를 문맥과 주의점까지 설명합니다."
contentStatus: draft
audience:
  - 에이전트 로그의 개발 용어가 낯선 비개발자
  - Codex와 Claude Code 사용자
learningObjectives:
  - 에이전트 출력 용어의 대상과 보장 범위를 확인한다
  - dry-run과 fallback과 snapshot의 한계를 설명한다
  - 복구와 권한 관련 용어를 안전하게 구분한다
sidebar:
  order: 2
---
```

### 원문 L15–L15

```text
같은 단어도 도구에 따라 범위가 다릅니다. 이 용어집은 특정 제품의 버튼 이름보다 오래 유지되는 뜻을 먼저 설명합니다. 각 행에서 **무슨 행동·상태인지, 어떤 부작용이 가능한지, 무엇을 증거로 확인할지**를 함께 읽으세요.
```

### 원문 L19–L19

```text
## 작업 상태와 도구
```

### 원문 L28–L28

```text
## 변경과 상태
```

### 원문 L45–L45

```text
## 실행 전 예측과 대안
```

### 원문 L56–L56

```text
## 실패와 복구
```

### 원문 L69–L69

```text
## 실행 환경과 권한
```

### 원문 L85–L85

```text
## 검증과 산출물
```

### 원문 L104–L104

```text
## 오류와 관측
```

### 원문 L115–L115

```text
## 컨텍스트와 장시간 작업
```

### 원문 L128–L128

```text
## 빠른 해석 공식
```

## src/content/docs/reference/checklists.md

전체 파일 SHA-256: dfee0c52c86045d3944c221594d90a1f955490bed3f7553ec51536bcaa991431. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L13

```text
---
title: "실전 체크리스트"
description: "작업 시작부터 진단·변경·검토·커밋·배포·운영·복구까지 실제 성공 증거와 승인 경계를 확인하는 점검표입니다."
contentStatus: draft
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 작업 단계별 성공·실패·미검증 상태를 실제 증거로 판정한다
  - 로컬 검사와 빌드, 커밋, 원격 공유, 배포, 공개, 운영, 백업과 복구를 구분한다
  - 외부 영향이 있는 행동의 승인과 실패 뒤 재검증 조건을 기록한다
sidebar:
  order: 5
---
```

### 원문 L14–L14

```text
## 이 체크리스트를 사용하는 법
```

### 원문 L27–L27

```text
## 1. 작업 시작
```

### 원문 L46–L46

```text
## 2. 진단
```

### 원문 L61–L61

```text
## 3. 변경과 로컬 검증
```

### 원문 L79–L79

```text
## 4. 검토와 수용
```

### 원문 L95–L95

```text
## 5. 커밋과 원격 협업
```

### 원문 L112–L112

```text
## 6. 배포와 공개
```

### 원문 L130–L130

```text
## 7. 운영과 감시
```

### 원문 L146–L146

```text
## 8. 복구와 재검증
```

## src/content/docs/reference/current-tool-mapping.md

전체 파일 SHA-256: c0cf7e7561b1b6f5bbfe0ac659ee72d93d8cce24004f57c26172cd85245d5922. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L13

```text
---
title: "현재 도구 매핑: Supabase·Vercel·ChatGPT Sites"
description: "오래가는 개발 책임과 2026-08-20에 다시 확인한 제품 동작을 분리해 읽는 참고 페이지입니다."
contentStatus: draft
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 제품 이름이 바뀌어도 남는 데이터·권한·실행·배포·복구 책임을 설명한다
  - 확인일·문서 상태·확인 실패를 보고 현재 제품 예시의 유효 범위를 판단한다
  - 직접 근거, 사용자 결정, 일반화 금지선을 구분한다
sidebar:
  order: 6
---
```

### 원문 L15–L15

```text
## 이 페이지 사용법
```

### 원문 L37–L37

```text
## 도구가 바뀌어도 남는 영속 책임
```

### 원문 L51–L51

```text
## Supabase: 2026-08-20에 직접 확인한 예시
```

### 원문 L67–L67

```text
## Vercel: 이번 확인에서 닫지 못한 현재 주장
```

### 원문 L84–L84

```text
## ChatGPT Sites: public beta에서 직접 확인한 예시와 미확인 경계
```

### 원문 L97–L97

```text
## 에이전트 권한·샌드박스·모드: 같은 이름처럼 섞지 않기
```

### 원문 L112–L112

```text
## 모임 웹앱에 대응해 보기
```

### 원문 L129–L129

```text
## 도구 교체 판단
```

### 원문 L141–L141

```text
## 검증 체크리스트
```

### 원문 L152–L152

```text
## 확인 기록과 적용 경계
```

## src/content/docs/reference/development-glossary.md

전체 파일 SHA-256: 728022ddc235e2196e60c52bc0dca8c07d0c4cd160dfdb5d4d196e5afe4b260d. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L13

```text
---
title: "개발 용어집"
description: "풀스택 개발의 기본 용어를 한글·영문·약어·관련 개념·오해·핵심 장과 함께 정리합니다."
contentStatus: draft
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 기본 개발 용어를 계층별로 구분한다
  - 용어를 시스템 관계와 검증 증거로 이해한다
  - 같은 약어와 비슷한 복구 용어의 범위를 구분한다
sidebar:
  order: 3
---
```

### 원문 L14–L14

```text
## 먼저 이렇게 찾으세요
```

### 원문 L39–L39

```text
## 시스템과 코드
```

### 원문 L88–L88

```text
## 웹과 풀스택
```

### 원문 L124–L124

```text
## 데이터와 백엔드
```

### 원문 L165–L165

```text
## 개발과 운영
```

### 원문 L227–L227

```text
## 품질과 변경 관리
```

### 원문 L267–L267

```text
## 출처와 적용 범위
```

### 원문 L280–L280

```text
## 용어 학습 규칙
```

## src/content/docs/reference/index.md

전체 파일 SHA-256: 7eb4ac55dcf2eaadc30777c82d0360b22bc0fc41b08e586f9514efd91f1efc4f. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L12

```text
---
title: "용어·방법론·체크리스트"
description: "개발과 AI 에이전트 작업에서 자주 만나는 용어와 실전 점검표를 빠르게 찾습니다."
contentStatus: draft
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 참고편의 용도를 설명한다
  - 정의·로그 해석·관계·점검·현재 도구 매핑의 책임을 구분한다
sidebar:
  order: 1
---
```

### 원문 L13–L13

```text
이 참고편은 공식 Build Track의 순서를 다시 나열하는 곳이 아니라, 작업 중 생긴 질문에서 필요한 정의·관계·점검 기준을 검색해 다시 본문으로 돌아가는 곳입니다. 검색 결과의 제목과 설명을 보고 아래 자료의 역할을 구분해 사용하세요.
```

### 원문 L15–L15

```text
## 무엇을 찾을 때 어디로 가나요?
```

### 원문 L27–L27

```text
## 다음 이동
```

## src/content/docs/reference/methodology-map.md

전체 파일 SHA-256: 79bfb8db36b353c6665a5fc2d7e1d73b36d24498da3992cfc3b0cb41ba7a0446. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L14

```text
---
title: "방법론 관계 지도"
description: "문서 산출물, 개발 규율, 결정 기록, 팀·흐름·운영 방식, AI 개발 실무 표현의 목적과 중첩을 구분합니다."
contentStatus: draft
audience:
  - 바이브 코딩을 하는 비개발자
  - 개발 방식과 산출물 이름을 선택해야 하는 PM과 데이터 분석가
learningObjectives:
  - 문서 산출물과 개발·테스트 규율과 팀 운영 방식을 구분한다
  - 선후 관계와 중첩을 읽되 하나의 만능 절차로 합치지 않는다
  - 용어의 성숙도와 출처 상태에 맞는 일반화 금지선을 설명한다
sidebar:
  order: 4
---
```

### 원문 L16–L16

```text
## 먼저 결론
```

### 원문 L22–L22

```text
## 다섯 범주를 먼저 분리하세요
```

### 원문 L34–L34

```text
## 관계를 읽는 세 가지 축
```

### 원문 L36–L36

```text
### 산출물과 활동을 구분합니다
```

### 원문 L40–L40

```text
### 포함 관계와 선택 관계를 구분합니다
```

### 원문 L46–L46

```text
### 겹침과 피드백을 허용합니다
```

### 원문 L50–L50

```text
## 하나의 만능 선형 절차가 아닙니다
```

### 원문 L71–L71

```text
## 1. 문서 산출물과 스펙 접근
```

### 원문 L73–L73

```text
### PRD(Product Requirements Document)
```

### 원문 L83–L83

```text
### Software Design Description
```

### 원문 L91–L91

```text
### Spec-Driven Development
```

### 원문 L101–L101

```text
## 2. 구현·테스트·협업 규율
```

### 원문 L103–L103

```text
### TDD(Test-Driven Development)
```

### 원문 L111–L111

```text
### BDD(Behavior-Driven Development)
```

### 원문 L121–L121

```text
## 3. 결정 기록
```

### 원문 L123–L123

```text
### ADR(Architecture Decision Record)
```

### 원문 L133–L133

```text
## 4. 생명주기·팀·흐름·운영 방식
```

### 원문 L135–L135

```text
### SDLC(Software Development Life Cycle)
```

### 원문 L145–L145

```text
### Agile
```

### 원문 L153–L153

```text
### Scrum
```

### 원문 L161–L161

```text
### Kanban
```

### 원문 L169–L169

```text
### DevOps
```

### 원문 L177–L177

```text
### CI(Continuous Integration)
```

### 원문 L185–L185

```text
### Continuous Delivery(지속적 전달)
```

### 원문 L193–L193

```text
### Continuous Deployment(지속적 배포)
```

### 원문 L203–L203

```text
### GitFlow
```

### 원문 L211–L211

```text
### Trunk-based development
```

### 원문 L219–L219

```text
## 5. 컨텍스트·스펙·하네스·루프
```

### 원문 L223–L223

```text
### Context engineering
```

### 원문 L231–L231

```text
### Spec-driven development의 스펙 책임
```

### 원문 L239–L239

```text
### Harness engineering
```

### 원문 L247–L247

```text
### Loop engineering
```

### 원문 L255–L255

```text
## 프로젝트에 맞는 최소 조합을 고르세요
```

### 원문 L257–L257

```text
### 작은 개인 프로토타입
```

### 원문 L264–L264

```text
### 외부 사용자가 있는 작은 서비스
```

### 원문 L271–L271

```text
### 데이터·보안·금전 위험이 큰 서비스
```

### 원문 L280–L280

```text
## 선택 전 확인 질문
```

### 원문 L293–L293

```text
## 짧은 연습
```

### 원문 L307–L307

```text
## 관련 장과 출처 경계
```

## src/content/docs/start-here/how-to-use-this-guide.md

전체 파일 SHA-256: 01a6e9a63c6f0826ef2cf8d505df36b7b2400c566f59ff541c2fac9a99d30bb1. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L13

```text
---
title: "이 가이드를 사용하는 법"
description: "읽기, 프로젝트 적용, AI 세션 운영을 연결하는 방법을 안내합니다."
contentStatus: draft
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 학습 내용을 자신의 프로젝트 문맥으로 옮긴다
  - AI 작업을 작은 검증 루프로 운영한다
  - 순차 학습과 검색 기반 선택 학습을 상황에 맞게 사용한다
sidebar:
  order: 4
---
```

### 원문 L14–L14

```text
처음부터 전체 흐름을 쌓는 방법과 지금 막힌 문제부터 찾는 방법은 같은 목적을 향하는 두 출발점입니다. 어느 쪽을 선택해도 한 문장 정의, 시스템에서의 위치, 판단 규칙과 검증 증거까지 확인해야 하며, 필요하면 언제든 다른 방법으로 전환할 수 있습니다.
```

### 원문 L16–L16

```text
## 처음부터 따라가기
```

### 원문 L26–L26

```text
## 필요한 내용만 찾기
```

### 원문 L38–L38

```text
## 용어보다 관계를 그리세요
```

### 원문 L49–L49

```text
## 비유의 한계를 확인하세요
```

### 원문 L53–L53

```text
## 자신의 프로젝트 지도를 함께 만드세요
```

### 원문 L66–L66

```text
## AI에게 한 번에 전부 맡기지 마세요
```

### 원문 L82–L82

```text
## 완료 상태를 섞지 마세요
```

### 원문 L98–L98

```text
## 위험이 큰 영역은 전문가 경계를 세우세요
```

## src/content/docs/start-here/index.md

전체 파일 SHA-256: 2d401914f5c44f965c8508f0798e13be0152c3d674ed2afec63f424a4c602734. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L12

```text
---
title: "시작하기"
description: "핸드북의 목적, 학습 경로, 읽는 방법을 확인합니다."
contentStatus: draft
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 핸드북의 학습 성공 기준을 설명한다
  - 순차 학습과 검색 기반 학습 중 첫 이동을 정한다
sidebar:
  order: 1
---
```

### 원문 L13–L13

```text
이 핸드북은 프로그래밍 언어 문법서나 특정 AI 도구의 사용 설명서가 아닙니다. **AI와 함께 개발할 때 필요한 소프트웨어공학의 최소 공통 기반**을 비개발자의 언어로 다시 구성합니다.
```

### 원문 L15–L15

```text
## 어떤 문서부터 읽을까요?
```

### 원문 L23–L23

```text
## 학습의 성공 기준
```

### 원문 L36–L36

```text
## 다음 이동
```

## src/content/docs/start-here/learning-paths.md

전체 파일 SHA-256: a86e9f8c1491c605ec48f553f892fd6e1a9c489f089b4717df22a7a15bc279c2. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L13

```text
---
title: "학습 경로"
description: "시간과 목적에 따라 빠른 지도, Build Track, Deep Track을 선택합니다."
contentStatus: draft
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 세 학습 경로의 차이를 설명한다
  - 자신의 목표에 맞는 경로를 고른다
  - 순차 학습과 검색 기반 학습을 상황에 맞게 전환한다
sidebar:
  order: 3
---
```

### 원문 L14–L14

```text
이 핸드북은 처음부터 순서대로 따라가도 되고, 지금 막힌 문제에 필요한 내용부터 찾아봐도 됩니다. 두 방법은 우열이 있는 단계가 아니라 서로 다른 출발점이며, [이 가이드를 사용하는 법](../how-to-use-this-guide/)에서 각각의 학습 흐름을 안내합니다.
```

### 원문 L16–L16

```text
## 빠른 지도: 전체 지형부터
```

### 원문 L33–L33

```text
## 검색 기반 경로: 지금 막힌 문제부터
```

### 원문 L49–L49

```text
## Build Track: 작은 서비스를 끝까지
```

### 원문 L77–L77

```text
## Deep Track: 트레이드오프를 설명하기
```

### 원문 L88–L88

```text
## 권장 학습 리듬
```

## src/content/docs/start-here/why-this-guide.md

전체 파일 SHA-256: a84a02e11ef32b4a96f0078e2704d0edf19d693d72a82bdfddbbb8e60ea8b74d. 아래 명시 구간 외의 본문·표·코드·그림은 이 발췌에 포함하지 않습니다.

### 원문 L1–L14

```text
---
title: "왜 이 가이드가 필요한가"
description: "AI가 코드를 생성해도 개발 기본기가 여전히 필요한 이유를 설명합니다."
contentStatus: draft
audience:
  - 바이브 코딩을 하는 비개발자
  - 프로젝트를 기획하는 데이터 분석가와 PM
learningObjectives:
  - 화면 동작과 운영 가능한 소프트웨어의 차이를 설명한다
  - AI가 모호한 요구를 추측할 때 생기는 위험을 설명한다
  - 개발 기본기가 AI 시대에도 필요한 이유를 말한다
sidebar:
  order: 2
---
```

### 원문 L15–L15

```text
AI 코딩 도구는 구현 속도를 높입니다. 그러나 **문제 정의, 경계 설정, 품질 판단, 위험 수용, 운영 책임**까지 자동으로 사라지게 하지는 않습니다.
```

### 원문 L17–L17

```text
## “작동한다”는 말은 하나가 아닙니다
```

### 원문 L30–L30

```text
## AI는 빈칸을 합리적으로 추측합니다
```

### 원문 L40–L40

```text
## 비유: AI는 매우 빠른 협업자입니다
```

### 원문 L44–L44

```text
### 비유가 깨지는 지점
```

### 원문 L48–L48

```text
## 이 가이드가 다루는 공백
```

### 원문 L59–L59

```text
## 이 가이드가 약속하는 것
```

### 원문 L63–L63

```text
## 이 가이드가 대신하지 않는 것
```

### 원문 L67–L67

```text
## 목표는 개발자 역할을 흉내내는 것이 아닙니다
```

## 화면·검색 증거의 적용 범위

R23 완료 빌드60은 현재 공개 입력과 동일한 범위에서 재사용합니다. R24의 새72페이지상태(18경로·2너비·2테마)와 검색/이동 관측은 실제 생성/완료 후 별도 manifest로 고정하며 이 문서만으로 실행 완료를 선언하지 않습니다. Task21의 native키보드 기록은 당시의 관측이며 모바일 단일 OS Tab 전체흐름 not-confirmed를 새로 PASS로 바꾸지 않습니다. 새 시각 증거는 원본 localImage로 전달하고 텍스트 경로/해시가 이미지 판독을 대신하지 않습니다.
