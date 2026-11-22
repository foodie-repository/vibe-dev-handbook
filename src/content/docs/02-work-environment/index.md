---
title: "2. 작업 환경"
description: "파일, 터미널, 프로세스, 포트, 의존성, 실행 환경을 이해합니다."
contentStatus: ready
reviewEvidence:
  - "conformance: docs/project/public-beta-content-audit.md"
  - "sources: research/source-map.md"
  - "automated: docs/project/reviews/public-beta-1/ready-promotion-qa.md#자동-검사"
  - "browser: docs/project/reviews/public-beta-1/ready-promotion-qa.md#브라우저-검사"
  - "owner: docs/project/reviews/public-beta-1/owner-approval.md"
  - "request: docs/project/reviews/public-beta-1/r24-navigation-request.md"
  - "independent: docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r24-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 개발 환경을 구성하는 기본 단위를 나열한다
  - 경로·실행·의존성 문제를 서로 다른 증거로 진단한다
sidebar:
  order: 1
---
AI가 코드를 올바르게 생성해도 다른 폴더에서 실행하거나 필요한 의존성이 없거나 포트가 이미 사용 중이면 결과가 달라집니다. 이 부는 “어느 파일인가”, “무엇이 실행 중인가”, “어떤 버전과 환경이 필요한가”를 서로 다른 질문으로 다룹니다.

## 이 부가 답하는 질문

- 수정할 원본과 생성물은 어디에 있고, 현재 작업 디렉터리는 어디인가요?
- 명령이 시작한 프로세스는 무엇이며 어떤 포트를 사용하나요?
- 실행에 필요한 패키지·잠금 파일·격리 환경과 버전은 무엇인가요?

## 권장 순서

1. [파일·폴더·경로](files-folders-paths/) — Finder·터미널·Git·에이전트가 가리키는 위치와 원본·생성물을 구분합니다.
2. [터미널·프로세스·포트](terminal-processes-ports/) — 명령 입력과 실행 중인 프로세스, 포트 충돌과 종료 상태를 구분합니다.
3. [의존성·패키지 관리자·환경](dependencies-package-managers-environments/) — 필요한 패키지와 버전, manifest·lockfile·격리 환경이 재현성에 맡는 책임을 살펴봅니다.

경로 확인은 **대상**, 프로세스·포트 확인은 **현재 실행 상태**, 의존성·환경 확인은 **재현 조건**의 증거입니다. 하나가 정상이라고 나머지도 정상인 것은 아닙니다.

## 다음 이동

로컬 실행 환경을 구분했다면 [3. 풀스택 구조](../03-full-stack/)에서 사용자 행동이 브라우저·네트워크·서버·데이터를 통과하는 흐름을 따라가세요.
