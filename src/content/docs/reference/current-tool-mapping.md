---
title: "현재 도구 매핑"
description: "오래가는 개발 책임과 2026-08-20에 다시 확인한 제품 동작을 분리해 읽는 참고 페이지입니다."
contentStatus: ready
reviewEvidence:
  - "conformance: docs/project/public-beta-content-audit.md"
  - "sources: research/source-map.md"
  - "automated: docs/project/reviews/public-beta-1/ready-promotion-qa.md#자동-검사"
  - "browser: docs/project/reviews/public-beta-1/ready-promotion-qa.md#브라우저-검사"
  - "owner: docs/project/reviews/public-beta-1/owner-approval.md"
  - "request: docs/project/reviews/public-beta-1/r25-reference-request.md"
  - "independent: docs/project/reviews/public-beta-1/r25-reference-codex-rereview.md"
  - "adjudication: docs/project/reviews/public-beta-1/r25-controller-closeout.md"
audience:
  - 바이브 코딩을 하는 비개발자
learningObjectives:
  - 제품 이름이 바뀌어도 남는 데이터·권한·실행·배포·복구 책임을 설명한다
  - 확인일·문서 상태·확인 실패를 보고 현재 제품 예시의 유효 범위를 판단한다
  - 직접 근거, 사용자 결정, 일반화 금지선을 구분한다
sidebar:
  order: 6
---

## 이 페이지 사용법

이 페이지는 Supabase·Vercel·ChatGPT Sites의 조작 순서를 가르치는 사용 설명서가 아닙니다. 먼저 제품 이름 없이 데이터 저장·권한·실행·빌드·호스팅·복구 책임을 정하고, 그다음 공식 문서에서 직접 확인한 제품 동작을 날짜가 붙은 현재 예시로 연결합니다.

표는 왼쪽에서 오른쪽으로 읽으세요. **영속 책임**은 도구가 바뀌어도 남는 질문이고, **날짜가 붙은 제품 동작**은 공식 문서가 직접 뒷받침한 좁은 범위입니다. **사용자 결정**은 제품을 골라도 사라지지 않는 설계·검증·운영 책임이며, **일반화 금지선**은 확인한 기능 하나로 결론 내리면 안 되는 범위입니다.

제품 동작은 다음 세 상태로 구분합니다.

- **confirmed**: 표시한 날짜에 공식 문서를 직접 열어 주장 범위를 확인했습니다.
- **limited**: 직접 확인했지만 플랜·계정·workspace·runtime·지역·beta 상태 같은 조건이 남습니다.
- **not-confirmed** 또는 **fresh-check-failed**: 공개 공식 근거가 정확한 주장을 닫지 못했거나 이번 확인에서 공식 페이지를 열지 못했습니다. 기능이 없다는 뜻으로 바꾸지 않습니다.

처음 만나는 용어는 다음처럼 읽으면 됩니다.

- **Auth(authentication, 인증)**: 로그인·세션·토큰 등을 이용해 “요청한 주체가 누구인가”를 확인하는 책임입니다.
- **authorization(인가)**: 인증된 주체가 특정 대상에 특정 행동을 해도 되는지 판단하는 책임입니다. 로그인 성공만으로 인가가 끝나지는 않습니다.
- **RLS(Row Level Security, 행 수준 보안)**: 데이터베이스의 각 행을 누가 읽거나 바꿀 수 있는지 정책으로 통제하는 방식입니다. 기능이 있다는 사실과 정책이 올바르다는 사실은 다릅니다.
- **server runtime(서버 런타임)**: 요청을 받을 때 서버 코드를 실행하는 환경입니다. 서버 런타임이 있다고 데이터베이스·인증·백업까지 자동으로 생기지는 않습니다.
- **build artifact(빌드 아티팩트)**: 소스와 설정을 빌드해 만든 배포 대상 결과물입니다. 아티팩트가 만들어졌다는 사실은 실제 공개 주소와 사용자 흐름이 성공했다는 증거가 아닙니다.

제품 기능은 계정·플랜·지역·프로젝트 조건과 문서 변경에 따라 달라질 수 있습니다. 실제 선택이나 release candidate 검토에서는 이 페이지의 확인일만 믿지 말고 연결된 공식 문서를 다시 확인하세요.

## 도구가 바뀌어도 남는 영속 책임

어떤 제품 조합을 선택해도 다음 질문은 남습니다.

1. **관계형 데이터 저장**: 어떤 상태가 권위 있는 원본이며 스키마·제약·트랜잭션·동시성 규칙을 어디서 집행할까요?
2. **인증과 인가**: 자격 증명과 세션을 어떻게 검증하고, 주체·대상·행동별 허용과 기본 거절을 어느 신뢰 경계에서 집행할까요?
3. **서버 실행과 API**: 비밀·입력 검증·업무 규칙을 어디서 실행하고 어떤 요청·응답 계약으로 노출할까요?
4. **빌드와 아티팩트**: 어떤 소스·의존성·설정이 어떤 배포 결과가 되었는지 어떻게 추적할까요?
5. **호스팅과 공개 주소**: 누가 파일과 서버 응답을 제공하고 도메인·DNS·HTTPS·공개 범위를 어떻게 확인할까요?
6. **권한과 실행 격리**: 에이전트가 무엇을 읽고 쓸 수 있으며, 언제 사람의 승인을 받고, 어떤 경계 밖으로 나갈 수 없게 할까요?
7. **운영과 복구**: 어떤 로그와 배포 이력을 보고, 무엇을 백업하며, 어느 단위로 되돌리고 실제 복원을 어떻게 시험할까요?

제품은 이 책임을 수행하는 수단 일부를 제공할 수 있지만 요구사항·정책·데이터 모델·테스트 오라클·복구 목표를 대신 결정하지 않습니다. 따라서 아래 표에서 “지원한다”는 말은 “우리 시스템에서 안전하게 완성됐다”는 뜻이 아닙니다.

## Supabase: 2026-08-20에 직접 확인한 예시

Supabase를 데이터 저장·인증·서버 실행·운영 책임의 예시로 읽으세요. 8월 20일에 확인한 행과 11월 22일에 다시 확인한 로그 행은 각각 표시된 날짜의 공식 비버전 문서에만 근거합니다.

| 주장 ID·상태 | 영속 책임 | 날짜가 붙은 제품 동작 | 사용자 결정 | 직접 근거 | 일반화 금지선 |
|---|---|---|---|---|---|
| SUPA-DB-01 · confirmed | 관계형 데이터 저장 | 프로젝트에 Postgres 데이터베이스가 제공되고 Auth·Storage·Realtime·Edge Functions도 이 데이터베이스를 기반으로 사용합니다. | 스키마, 고유성, 정원 트랜잭션, 동시성 전략과 복원 시험 | [데이터베이스 개요](https://supabase.com/docs/guides/database/overview) · checked_at 2026-08-20 · 공식 현재 비버전 문서 | Postgres 제공이 스키마·제약·트랜잭션·복원 시험을 자동 완성하지 않습니다. |
| SUPA-AUTH-01 · confirmed | 인증과 인가 | Auth가 사용자 인증과 JWT 사용을 지원하고 데이터 접근 인가는 RLS 정책과 결합해 구성합니다. | 세션 수명·폐기·탈취 대응과 대상별 권한 정책 | [Auth 개요](https://supabase.com/docs/guides/auth) · checked_at 2026-08-20 · 공식 현재 비버전 문서 | 인증 세션이나 JWT가 대상별 인가와 모든 보안 요구를 자동 충족하지 않습니다. |
| SUPA-AUTHZ-01 · confirmed | 인증과 인가 | Data API에서 객체 접근은 privileges가, 도달한 테이블의 행 접근은 RLS 정책이 통제합니다. | 기본 거절, 주체·대상·행동별 정책, 우회 경로와 부정 테스트 | [Data API 보안](https://supabase.com/docs/guides/api/securing-your-api) · checked_at 2026-08-20 · 공식 현재 비버전 문서 | RLS 기능의 존재가 올바른 정책과 안전한 우회 차단을 보장하지 않습니다. |
| SUPA-API-01 · confirmed | 서버 실행과 API | 데이터베이스 스키마에서 Data REST API가 자동 생성되며 브라우저 직접 접근 구조와 별도 API 서버 구조에 사용할 수 있습니다. | 입력 검증·업무 규칙·인가·API 호환성 책임을 둘 경계 | [Data API 개요](https://supabase.com/docs/guides/api) · checked_at 2026-08-20 · 공식 현재 비버전 문서 | 자동 생성 API가 업무 규칙·입력 검증·권한·버전 호환성을 모두 대신하지 않습니다. |
| SUPA-SERVER-01 · limited | 서버 실행과 API | Edge Functions는 Deno 호환 TypeScript 서버 함수이고 짧고 멱등적인 작업에 맞으며, 무거운 장시간 작업은 별도 워커 경계가 필요합니다. | 짧은 요청 작업과 큐·워커로 분리할 작업, 실패·재시도 계약 | [Edge Functions](https://supabase.com/docs/guides/functions) · checked_at 2026-08-20 · 공식 현재 비버전 문서 | 함수 지원을 범용 장기 실행 서버·큐·워커·모든 백엔드 운영 책임으로 확대하지 않습니다. |
| SUPA-MIG-01 · confirmed | 빌드와 아티팩트 | SQL 파일로 스키마 변경을 추적하며, 원격에서 직접 바꾼 변경은 로컬 마이그레이션 이력에 자동 반영되지 않습니다. | 변경 검토·적용 순서·하위 호환성·실패 복구와 실제 원격 상태 대조 | [데이터베이스 마이그레이션](https://supabase.com/docs/guides/deployment/database-migrations) · checked_at 2026-08-20 · 공식 현재 비버전 문서 | 마이그레이션 파일이 적용 성공·데이터 호환성·백업·복원을 자동 증명하지 않습니다. |
| SUPA-OPS-01 · limited | 운영과 복구 | 플랜별 데이터베이스 백업 조건이 다르며 데이터베이스 백업에 Storage API의 파일 객체는 포함되지 않습니다. | 플랜 확인, 보존·격리·RPO·RTO, Storage 객체 백업과 실제 복원 시험 | [데이터베이스 백업](https://supabase.com/docs/guides/platform/backups) · checked_at 2026-08-20 · 공식 현재 비버전 문서 | 백업 기능을 전체 데이터 복구·복원 시험·배포 롤백 성공으로 간주하지 않습니다. |
| SUPA-LOG-01 · limited | 운영과 복구 | 서비스별 이벤트를 조회하고 유형·시간 범위로 좁힐 수 있습니다. 프로젝트 생성 시점에 따른 백엔드 차이와 플랜별 보존 기간은 8월 기록이며 이번 본문에서는 확인하지 못했습니다. | 개인정보·비밀 제외, 요청 상관관계, 보존 조건과 복구 오라클 | [로그](https://supabase.com/docs/guides/monitoring-and-debugging/logs) · 이벤트 조회 checked_at 2026-11-22 · 백엔드·보존 기간 not-confirmed · 공식 현재 비버전 문서 | 로그 한 줄이 권위 상태·근본 원인·모든 사용자 영향·복구 성공을 단독 증명하지 않습니다. |
| SUPA-KEY-01 · confirmed | 인증과 인가 | publishable key는 공개 애플리케이션에 사용할 수 있지만 secret key는 백엔드 전용이고 RLS를 우회합니다. 문서는 legacy key의 단계적 대체 조건도 설명합니다. | 최소 권한·비밀 저장·회전·유출 대응과 프로젝트의 실제 key 상태 | [API 키](https://supabase.com/docs/guides/getting-started/api-keys) · checked_at 2026-08-20 · 공식 현재 비버전 문서 | 공개 키 사용 가능성이 RLS 정확성·서버 비밀 보호·브라우저 데이터 접근 안전을 보장하지 않습니다. |

## Vercel: 2026-08-20에 확인하지 못한 주장

Vercel 공식 문서의 여덟 URL은 2026-08-20 직접 열기에서 모두 `HTTP 400 Unsupported content-type: text/markdown`으로 실패했습니다. 검색 결과 요약과 제3자 문서는 직접 근거로 사용하지 않았습니다. 따라서 2026-08-13은 **마지막 성공 확인일**이라는 역사만 남기고, 당시 제품 설명을 2026-08-20 현재 동작으로 갱신하거나 재게시하지 않습니다.

| 주장 ID·상태 | 영속 책임 | 이번 확인 결과 | 마지막 성공 확인 | 공식 URL | 일반화 금지선 |
|---|---|---|---|---|---|
| VERCEL-BUILD-01 · fresh-check-failed | 빌드와 아티팩트 | 2026-08-20 직접 열기 실패, 현재 주장 not-confirmed | 2026-08-13 | [Builds](https://vercel.com/docs/builds) | 과거 확인을 현재 빌드 동작·아티팩트 형식·배포 성공의 증거로 쓰지 않습니다. |
| VERCEL-RUNTIME-01 · fresh-check-failed | 서버 실행과 API | 2026-08-20 직접 열기 실패, 현재 주장 not-confirmed | 2026-08-13 | [Functions](https://vercel.com/docs/functions) | 과거 확인을 현재 런타임·지역·실행 제한 또는 범용 백엔드 보장으로 쓰지 않습니다. |
| VERCEL-ENV-01 · fresh-check-failed | 빌드와 아티팩트 | 2026-08-20 직접 열기 실패, 현재 주장 not-confirmed | 2026-08-13 | [환경 변수](https://vercel.com/docs/environment-variables) | 과거 확인을 현재 환경별 적용·비밀 보호·기존 배포 반영의 증거로 쓰지 않습니다. |
| VERCEL-DEPLOY-01 · fresh-check-failed | 호스팅과 공개 주소 | 2026-08-20 직접 열기 실패, 현재 주장 not-confirmed | 2026-08-13 | [Deployments](https://vercel.com/docs/deployments) | 과거 확인을 현재 URL 생성·Git 연동·실제 배포 또는 공개 성공의 증거로 쓰지 않습니다. |
| VERCEL-DOMAIN-01 · fresh-check-failed | 호스팅과 공개 주소 | 2026-08-20 직접 열기 실패, 현재 주장 not-confirmed | 2026-08-13 | [SSL과 도메인](https://vercel.com/docs/domains/working-with-ssl) | 과거 확인을 현재 DNS·인증서·HTTPS 성공의 증거로 쓰지 않습니다. |
| VERCEL-LOGS-01 · fresh-check-failed | 운영과 복구 | 2026-08-20 직접 열기 실패, 현재 주장 not-confirmed | 2026-08-13 | [Logs](https://vercel.com/docs/logs) | 과거 확인을 현재 로그 종류·보존·권위 상태 또는 복구 성공의 증거로 쓰지 않습니다. |
| VERCEL-ROLLBACK-01 · fresh-check-failed | 운영과 복구 | 2026-08-20 직접 열기 실패, 현재 주장 not-confirmed | 2026-08-13 | [Production Rollback](https://vercel.com/docs/deployments/rollback-production-deployment) | 과거 확인을 현재 코드 라우팅·데이터·스키마·환경·외부 상태의 복구 보장으로 쓰지 않습니다. |
| VERCEL-DATA-01 · fresh-check-failed | 관계형 데이터 저장 | 2026-08-20 직접 열기 실패, 현재 주장 not-confirmed | 2026-08-13 | [Marketplace Storage](https://vercel.com/docs/marketplace-storage) | 과거 확인을 현재 공급자 연결·자격 증명 주입·데이터베이스 내장의 증거로 쓰지 않습니다. |

이 실패는 기능 부재 판정도, 기존 설명이 틀렸다는 판정도 아닙니다. release candidate에서 최신 공식 근거를 닫지 못했다는 증거 경계입니다. 사용자는 Vercel을 선택하기 전에 해당 공식 문서를 접근 가능한 환경에서 다시 열고 플랜·계정·프로젝트 조건을 확인해야 합니다.

## ChatGPT Sites: public beta에서 직접 확인한 예시와 미확인 경계

2026-08-20의 공식 안내는 **Sites – ChatGPT**를 public beta로 소개하고 플랜별 제공과 단계적 적용 조건을 설명했습니다. 아래 표는 당시 기록과 2026-11-22에 다시 확인한 범위를 구분합니다. 이 저장소의 계정 접근·설정 변경·배포·공개 URL을 검증한 것은 아닙니다.

| 주장 ID·상태 | 영속 책임 | 날짜가 붙은 제품 동작 또는 미확인 경계 | 사용자 결정 | 직접 근거 | 일반화 금지선 |
|---|---|---|---|---|---|
| SITES-VERSION-01 · limited | 빌드와 아티팩트 | 2026-08-20에는 저장 버전과 배포를 구분하고 로컬 소스의 Git 커밋 연결을 확인했습니다. 2026-11-22에 읽은 문서에서는 그 연결 규칙을 다시 확인하지 못했습니다(not-confirmed). | 기준 commit·의존성·빌드 명령·검증 결과와 실제 배포 승인 | [Sites 개발자 문서](https://learn.chatgpt.com/docs/sites) · checked_at 2026-08-20 · 공식 현재 비버전 public beta 문서 | Git commit 연결이 재현 가능한 빌드·의존성 고정·소스 검토·마이그레이션 안전을 증명하지 않습니다. |
| SITES-ARTIFACT-01 · not-confirmed | 빌드와 아티팩트 | 공식 공개 문서는 호환되는 deployment artifact를 언급하지만 정확한 입력 아카이브의 파일 구성·매니페스트·포함·제외 규칙을 닫지 않습니다. | 실제 입력 계약을 별도 공식 근거로 확인하기 전 게시하지 않기 | [Sites 개발자 문서](https://learn.chatgpt.com/docs/sites) · checked_at 2026-08-20 · 공식 현재 비버전 public beta 문서 | 문서의 artifact 언급을 정확한 아카이브 계약이나 재현 가능한 빌드 보장으로 확대하지 않습니다. |
| SITES-HOST-01 · limited | 호스팅과 공개 주소 | 배포마다 production URL이 생기며 version 저장, 배포, 방문자 공유 범위는 서로 다른 결정입니다. | 공개 대상·공유 범위·개인정보 검토·실제 방문자 흐름과 공개 승인 | [Sites 개발자 문서](https://learn.chatgpt.com/docs/sites), [Sites 도움말](https://help.openai.com/en/articles/20001339-creating-and-managing-chatgpt-sites) · checked_at 2026-08-20 · 개발자 문서는 현재 비버전 public beta, 도움말은 페이지에 `Updated: 4 days ago` 표시 | URL 생성 설명을 이 저장소의 배포·공개 주소·올바른 접근 설정·사용자 흐름 성공으로 바꾸지 않습니다. |
| SITES-RUNTIME-01 · limited | 서버 실행과 API | 지원되는 웹 구조와 D1 관계형 데이터·R2 객체 저장을 제공하지만 지원되지 않는 framework·network·database·background service·hosting pattern이 있습니다. | framework 적합성, 데이터·비밀·네트워크·장시간 작업과 대체 실행 환경 | [Sites 개발자 문서](https://learn.chatgpt.com/docs/sites) · checked_at 2026-08-20 · 공식 현재 비버전 public beta 문서 | Sites를 임의 서버 런타임·사설망·외부 데이터베이스·워커·모든 프레임워크의 범용 환경으로 등치하지 않습니다. |
| SITES-DOMAIN-01 · limited | 호스팅과 공개 주소 | 사용 가능한 환경에서는 소유한 도메인과 DNS 변경 권한이 필요합니다. 8월 공개 당시의 Enterprise 제한이 현재에도 적용되는지는 확인하지 못했습니다(not-confirmed). | 실제 제공 여부, 도메인 소유·DNS·HTTPS와 공개 응답 검증 | [Sites 도움말: Use a custom domain](https://help.openai.com/en/articles/20001339-creating-and-managing-chatgpt-sites) · 소유권·DNS 조건 checked_at 2026-11-22 | custom domain이 모든 플랜·지역·workspace에서 제공되거나 연결과 HTTPS가 자동 완료된다고 보지 않습니다. |
| SITES-ROLLBACK-01 · not-confirmed | 운영과 복구 | 저장된 version을 나열·검사하고 선택해 배포할 수 있다는 설명은 있지만, 이름 붙은 이전 production rollback·restore와 데이터·환경·외부 상태의 복구 보장은 공개 근거로 닫히지 않았습니다. | 코드·데이터·환경·비밀·외부 서비스별 복구 계약과 실제 복원 시험 | [Sites 개발자 문서](https://learn.chatgpt.com/docs/sites), [Sites 도움말](https://help.openai.com/en/articles/20001339-creating-and-managing-chatgpt-sites) · checked_at 2026-08-20 · 공식 current public beta 안내 | version 재배포 가능성을 운영 롤백·삭제 복구·전체 상태 복원 성공으로 확대하지 않습니다. 2026-11-22 도움말은 이전 버전 복원이 코드에만 적용되고 데이터베이스와 업로드 파일은 복원하지 않으며, 삭제한 Site 자체는 복원할 수 없다고 설명합니다. 이 설명만으로 저장 버전의 현재 재배포 절차까지 확인되지는 않습니다. |

## 에이전트 권한·샌드박스·모드: 같은 이름처럼 섞지 않기

영속 개념은 제품 이름과 분리합니다. **권한**은 행동을 허용할지 묻는 규칙, **승인**은 경계를 넘는 행동에 사람의 결정을 요구하는 절차, **샌드박스**는 실행이 도달할 수 있는 파일·네트워크 범위를 제한하는 격리, **모드**는 한 제품이 권한과 승인 기본값을 묶어 붙인 이름입니다. 같은 단어가 보여도 두 제품에서 같은 보안 경계를 뜻한다고 가정하면 안 됩니다.

| 제품별 용어·상태 | 각 행에 표시된 날짜의 공식 문서에서 확인한 뜻 | 조건과 사용자 결정 | 직접 근거 | 일반화 금지선 |
|---|---|---|---|---|
| CODEX-WORKSPACE-WRITE-01 · Codex `workspace-write` · confirmed, legacy setting name | CLI/IDE의 기본 예시에서 현재 작업 공간 안 쓰기를 허용하고 네트워크를 기본 차단하는 sandbox 설정 이름입니다. 승인 정책과 별도 축입니다. | beta permission profile을 쓰는지 기존 `sandbox_mode`를 쓰는지 확인하고, 쓰기 root·네트워크·승인 정책을 따로 검토합니다. | [Permissions](https://learn.chatgpt.com/docs/permissions), [Agent approvals and security](https://learn.chatgpt.com/docs/agent-approvals-security), [Sandboxing](https://learn.chatgpt.com/docs/sandboxing) · checked_at 2026-08-20 · 공식 현재 비버전 문서 | beta profile `:workspace`와 기존 `workspace-write`를 동시에 구성하거나, 작업 공간 쓰기를 전체 시스템 쓰기·무승인·무제한 네트워크로 일반화하지 않습니다. |
| CODEX-READ-ONLY-01 · Codex `read-only` · confirmed | 읽기만 허용하는 sandbox/preset이며 문서는 변경 없이 채팅하거나 계획할 때 선택할 수 있다고 설명합니다. beta profile 이름은 `:read-only`입니다. | 읽을 수 있는 범위와 명령·네트워크·승인 정책을 실제 설정에서 확인합니다. | [Permissions](https://learn.chatgpt.com/docs/permissions), [Agent approvals and security](https://learn.chatgpt.com/docs/agent-approvals-security) · checked_at 2026-08-20 · 공식 현재 비버전 문서 | read-only를 비밀 접근 차단·네트워크 차단·명령 무해성 또는 Claude Code의 제품 모드 이름으로 일반화하지 않습니다. |
| CODEX-PLAN-MODE-LABEL-01 · Codex `plan mode` · not-confirmed as current official product label | 이번에 연 공식 제품 문서에서는 정확한 `plan mode` 명칭을 현재 모드로 확인하지 못했습니다. 변경 없이 계획할 때 `read-only`를 쓰라는 설명만 직접 확인했습니다. | UI·클라이언트별 실제 표시와 권한을 그 환경에서 다시 확인합니다. | [Agent approvals and security](https://learn.chatgpt.com/docs/agent-approvals-security), [Environment modes](https://learn.chatgpt.com/docs/environments/modes) · checked_at 2026-08-20 · 공식 현재 비버전 문서 | 다른 제품의 `plan` 또는 UI에서 본 명칭을 Codex의 현재 공식 권한·샌드박스 계약으로 바꾸지 않습니다. |
| CLAUDE-PLAN-01 · Claude Code `plan` · confirmed | 변경 전에 조사하고 계획을 제안하는 모드입니다. 공식 문서는 비대화형 실행과 특정 권한이 허용된 대화형 터미널을 구분합니다. 후자의 경우에는 계획 중에도 파일 변경이나 셸 명령 시도가 일반적인 계획 모드처럼 차단된다고 가정할 수 없습니다. 명시적 확인 규칙 등 별도 제한도 남습니다. | 실행 환경이 대화형인지, 실제 권한 설정·확인 규칙·별도 샌드박스가 무엇인지 각각 확인합니다. | [Permission modes: Plan mode](https://code.claude.com/docs/en/permission-modes) · checked_at 2026-11-22 · 공식 비버전 문서 | `plan`을 절대적인 no-edit·read-only·무승인 실행 불가·부작용 부재 또는 OS sandbox로 일반화하지 않습니다. Codex의 제품 모드와도 같은 이름의 보장으로 옮기지 않습니다. |
| CLAUDE-SANDBOX-01 · Claude Code sandbox · limited | Bash 명령과 그 자식 프로세스의 파일·네트워크 접근을 OS 수준에서 제한합니다. macOS·Linux·WSL2 조건, 사용 불가 시 fallback 설정, unsandboxed escape hatch, 내장 파일 도구와의 경계가 있습니다. | 지원 OS, 허용 경로·도메인, fallback·escape hatch·permission rule을 실제 설정에서 확인합니다. | [Sandboxing](https://code.claude.com/docs/en/sandboxing) · checked_at 2026-08-20 · 공식 현재 비버전 문서 | Bash sandbox를 모든 도구·호스트·비밀·내장 파일 도구의 완전한 격리로 일반화하지 않습니다. |
| CLAUDE-LABELS-01 · Claude Code의 `workspace-write`·`read-only` 제품 모드 이름 · not-confirmed | 현재 permission mode 목록은 `default`, `acceptEdits`, `plan`, `auto`, `dontAsk`, `bypassPermissions`입니다. 정확한 `workspace-write`와 `read-only` 모드 이름은 확인되지 않았습니다. | 비슷해 보이는 동작은 실제 permission mode와 sandbox 설정으로 각각 확인합니다. | [Permission modes](https://code.claude.com/docs/en/permission-modes), [Sandboxing](https://code.claude.com/docs/en/sandboxing) · checked_at 2026-08-20 · 공식 현재 비버전 문서 | Codex 용어를 Claude Code의 공식 모드 이름으로 옮기거나, 작업 디렉터리 쓰기 허용을 `workspace-write`라는 동일 계약으로 부르지 않습니다. |

`workspace-write`, `read-only`, `plan mode`를 영속 개념처럼 외우지 마세요. 먼저 읽기·쓰기·실행·네트워크·승인·격리라는 책임을 말한 뒤, 선택한 제품과 날짜에 맞는 설정 이름을 붙여야 합니다. 에이전트 산출물의 공유 용어는 [에이전트 산출물 용어집](../agent-output-glossary/)에서, 권한과 샌드박스의 구조는 [권한·샌드박스·worktree](../../11-ai-native/permissions-sandbox-worktrees/)에서 이어서 볼 수 있습니다.

## 모임 웹앱에 대응해 보기

모임 참가 웹앱의 아키텍처 결정은 먼저 제품 없이 적습니다. `events`와 `registrations`의 권위 상태·정원 불변식, Auth와 참가자·주최자 인가, 마지막 한 자리의 트랜잭션, 비밀을 다루는 서버 실행, 빌드·호스팅·DNS·HTTPS, 에이전트 권한, 로그·백업·복원 시험이 필요한 책임입니다.

그다음에만 현재 제품 후보를 매핑합니다. 예를 들어 Supabase의 Postgres·Auth·RLS·API·Functions를 데이터와 서버 경계 후보로 검토하거나, 지원 조건이 맞는 별도 웹 경험에 ChatGPT Sites의 version·runtime·production URL 경계를 검토할 수 있습니다. Vercel은 이번 fresh check가 실패했으므로 2026-08-20 현재 후보 기능을 이 페이지에서 확정하지 않습니다. 이것은 가능한 질문 지도이지 이 캡스톤이 실제로 제품을 선택했다는 설계가 아닙니다.

다음은 제품 기능의 존재만으로 증명되지 않습니다.

- 마지막 한 자리에서 정확히 한 요청만 확정되는지
- 참가자는 자신의 신청만 바꾸고 주최자는 자기 모임만 관리하는지
- 활성 참가 중복과 `confirmed <= capacity`가 모든 동시 완료 순서에서 유지되는지
- 마이그레이션과 환경 설정이 실제 대상에 올바르게 적용됐는지
- 로그에 비밀이 없고 백업에서 실제 복원이 되는지
- 배포된 공개 URL에서 승인된 사용자 흐름이 끝까지 성공하는지

이 항목은 선택한 아키텍처와 구현을 테스트·권위 있는 데이터 재조회·브라우저·운영 증거로 따로 검증해야 합니다.

## 도구 교체 판단

제품을 고르거나 바꿀 때 기능 개수부터 비교하지 말고 다음 순서로 판단하세요.

1. **책임을 고정합니다.** 데이터 원본·인증·인가·서버 실행·아티팩트·주소·권한·복구 중 무엇이 필요한지 씁니다.
2. **경계를 비교합니다.** 제품이 직접 맡는 범위, 외부 공급자와 연결하는 범위, 사용자가 계속 운영할 범위를 나눕니다.
3. **조건을 확인합니다.** 계정·플랜·지역·beta 상태·framework·runtime·network·database 제약을 현재 공식 문서에서 확인합니다.
4. **이동 비용을 확인합니다.** 데이터와 스키마, Auth 사용자, 환경 변수·비밀, 도메인, 로그·백업, 배포 아티팩트를 어떻게 내보내고 복구할지 묻습니다.
5. **증거를 다시 설계합니다.** 기존 테스트·로그·브라우저 확인·복원 시험이 새 경계에서도 같은 책임을 검증하는지 확인합니다.

도구 교체가 쉬운 구조는 제품 이름이 없는 구조가 아니라, 제품에 위임한 책임과 남은 책임, 데이터·계약·복구 경계가 기록된 구조입니다.

## 검증 체크리스트

- [ ] 제품 이름을 지워도 데이터·권한·실행·배포·복구 책임을 설명할 수 있나요?
- [ ] 각 기능의 확인일·공식 직접 링크·문서 상태·적용 범위를 확인했나요?
- [ ] `confirmed`·`limited`·`not-confirmed`·`fresh-check-failed`를 구분했나요?
- [ ] 공식 페이지를 열지 못한 주장을 과거 확인이나 검색 결과 요약으로 현재화하지 않았나요?
- [ ] Auth와 authorization, 공개 키와 서버 비밀, 제품별 모드와 영속 권한 개념을 구분했나요?
- [ ] 빌드 성공·배포 URL·실제 사용자 흐름·데이터 성공·복구 성공을 서로 다른 증거로 확인하나요?
- [ ] 제품 기능을 모임 앱의 동시성·인가·마이그레이션·백업·복원 성공으로 확대하지 않았나요?
- [ ] release candidate 시점에 공식 문서를 다시 읽고 달라진 범위를 갱신할 담당과 절차가 있나요?

## 확인 기록과 적용 경계

- **Supabase:** 9개 주장 URL을 2026-08-20 직접 열었습니다. 로그 행에만 11월 22일 근거를 별도로 표시했으며, 나머지 행의 확인일은 바꾸지 않았습니다.
- **Vercel:** 2026-08-20에는 공식 URL 8개 모두 본문 형식 오류로 열리지 않았습니다. 2026-11-22에는 같은 URL에서 본문 발췌를 받았습니다. 앞 표의 실패는 8월 기록이며, 발췌가 반환됐다는 사실만으로 개별 기능·플랜·프로젝트 동작을 다시 판정하지 않았습니다.
- **ChatGPT Sites:** 개발자 문서와 도움말을 2026-08-20 직접 열었습니다. 개발자 문서는 현재 비버전 public beta, 도움말은 페이지에 `Updated: 4 days ago`라고 표시됐습니다. 이 상대 표시를 임의의 절대 갱신일로 바꾸지 않습니다.
- **Codex와 Claude Code:** 위 표의 공식 문서를 2026-08-20 직접 열었습니다. 제품별 명칭·지원 OS·profile·fallback·계정 조건을 다른 제품이나 모든 실행 환경으로 확대하지 않습니다.

이번 확인은 읽기 전용 공식 문서 대조입니다. 계정 접근, 제품 채택, 프로젝트 생성, 설정 변경, 구현, 배포, 공개 URL 확인, rollback·restore 실행은 하지 않았습니다. 조사 계약과 주장별 세부 범위는 저장소의 `research/current-tool-mapping-research-brief.md`와 `research/source-map.md`에서 관리합니다.

**기억할 문장:** 도구는 책임을 수행하는 날짜 붙은 수단이고, 아키텍처는 그 책임과 경계를 나눈 결정이며, 완료는 실제 시스템의 증거로 판정합니다.
