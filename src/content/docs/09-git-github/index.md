---
title: "9. Git과 GitHub"
description: "변경 이력, 브랜치, 커밋, Pull Request, 충돌, 되돌리기, 릴리스를 이해합니다."
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
  - Git을 변경 관리와 협업의 기반으로 설명한다
  - 로컬 변경·검토 요청·원격 협업·릴리스 상태를 구분한다
sidebar:
  order: 1
---
Git을 단순 백업 도구로 보면 커밋의 의미와 브랜치의 목적을 놓칩니다. 이 부는 로컬 변경 이력, 독립 작업과 검토 요청, 충돌 해결·되돌리기·릴리스를 서로 다른 책임과 상태로 안내합니다.

## 이 부가 답하는 질문

- Git의 작업 트리·스테이징·커밋과 GitHub의 원격 협업 기능은 어떻게 다른가요?
- 브랜치·커밋·Pull Request는 변경을 어떤 단위로 격리하고 설명하고 검토하게 하나요?
- 잘못된 변경과 충돌을 어떻게 복구하며, 릴리스는 어떤 추가 증거와 승인을 요구하나요?

## 권장 순서

1. [Git과 GitHub는 다릅니다](git-and-github/) — 로컬 저장소의 변경 상태와 원격 호스팅·협업 상태를 구분합니다.
2. [브랜치·커밋·Pull Request](branch-commit-pull-request/) — 독립 작업을 나누고 의도와 검증 근거를 남겨 검토를 요청하는 흐름을 봅니다.
3. [되돌리기·충돌·릴리스](undo-merge-conflict-release/) — 이력을 보존하며 복구하고, 합쳐진 변경을 배포 가능한 버전으로 판단하는 조건을 확인합니다.

첫 장은 **로컬과 원격의 책임**, 둘째 장은 **변경과 검토의 단위**, 셋째 장은 **복구와 릴리스 판단**을 다룹니다. 파일 수정·자동 검사·로컬 커밋·push·Pull Request·merge·배포·공개 URL 확인은 같은 완료 상태가 아닙니다.

## 다음 이동

검토된 변경을 사용자 환경에 전달하고 운영하는 증거는 [10. 배포와 운영](../10-deployment-operations/)에서 이어집니다. AI 에이전트에게 Git 권한을 맡길 때의 경계가 필요하면 [11. AI 네이티브 개발](../11-ai-native/)로 이동하세요.
