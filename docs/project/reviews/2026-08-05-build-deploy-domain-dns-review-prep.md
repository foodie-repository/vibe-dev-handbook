# 빌드·배포·도메인·DNS 검토 준비 기록

## 목적과 현재 상태

이 문서는 공식 Build Track 아홉 번째 장인 `src/content/docs/10-deployment-operations/build-deploy-domain-dns.md`의 자체 품질 점검과 독립 검토 요청 범위를 기록합니다. 원고는 소스·검증·빌드·아티팩트·배포·호스팅·DNS·HTTPS·사용자 흐름·운영 인수를 서로 다른 책임과 증거로 연결하는 `draft`이지만 작성 맥락을 공유하지 않은 독립 기술·편집 검토와 비개발자 독자 테스트를 아직 통과하지 않았습니다.

2026-08-05 04:51 KST에 재로그인한 호스트 Claude Code 2.1.221에서 `claude.ai` 로그인과 Pro 구독을 개인정보 없이 확인하고, 아래 계약을 `claude-opus-5`, 추론 강도 `max`, 계획 모드와 `Read` 전용 권한으로 실행했습니다. 그러나 원고를 읽거나 검토 본문을 생성하기 전에 `You've hit your session limit · resets 7am (Asia/Seoul)`로 종료됐습니다. 인증은 정상이나 단기 사용 구간은 오전 7시 KST 전까지 닫혀 있으므로 초기화 이후 같은 계약으로 다시 요청합니다. 계정 식별 정보는 기록하지 않으며, 이 준비 문서는 독립 검토 결과나 완료를 증명하는 `reviewEvidence`가 아닙니다.

## 자체 품질 루브릭

| 항목 | 점수 | 근거와 남은 한계 |
|---|---:|---|
| 독자 문제 | 2 | AI의 “배포 완료” 보고가 로컬 빌드·업로드·DNS·실제 사용자 성공 중 무엇을 뜻하는지 판정하지 못하는 비개발자의 상황에서 시작합니다. |
| 정확성 | 2 | 소스·빌드·아티팩트·배포·호스팅·릴리스, URL·도메인·DNS·HTTPS, CI·두 의미의 CD와 정적·동적 배포 책임을 구분하고 공급자별 차이를 표시합니다. |
| 구조 | 2 | 소스에서 검증·아티팩트·환경·호스팅·이름·전송·사용자·운영으로 이어지는 경계와 피드백·복구를 하나의 흐름으로 연결합니다. |
| 쉬운 설명 | 2 | 책 제작·배송·주소 비유와 이 저장소의 Astro·GitHub Pages base path 사례를 정식 용어와 실제 실패 신호에 연결합니다. |
| 비유 한계 | 2 | 캐시로 사용자가 다른 상태를 보고 동적 서비스가 런타임·데이터·외부 상태를 함께 맞춰야 하며 HTTPS가 애플리케이션 안전 전체를 보장하지 않는 한계를 명시합니다. |
| 판단 기준 | 2 | 재현 가능한 빌드·아티팩트 출처·환경 차이·실제 URL·권위 있는 DNS·HTTPS·핵심 흐름·복구 증거로 완료 주장을 여섯 층에서 판정하게 합니다. |
| 실패 모드 | 2 | 로컬·빌드·배포·base path·DNS·TLS·API·캐시·롤백 증상을 계층별 관찰 지점과 복구 질문에 연결합니다. |
| 실전 연결 | 2 | 현재 저장소의 실제 설정과 미검증 원격 경계, AI 읽기 전용 지시, 배포 전후 체크리스트와 아홉 칸 연습을 제공합니다. |
| 근거 | 1 | Astro GitHub Pages와 MDN HTTP의 확인일·적용 범위는 추적되지만 DNS 레코드·resolver·TTL·TLS 인증서 세부를 직접 뒷받침하는 표준·공식 1차 자료를 이번 작업에서 새로 확인하지 않았습니다. |

합계는 18점 중 17점입니다. 자체 점검에서 치명 항목은 발견하지 못했지만, 이 점수는 독립 검토나 `ready` 판정을 대신하지 않습니다.

## 자체 점검에서 보완한 범위

1. 코드 완료·빌드 완료·배포 작업 완료·네트워크 연결·사용자 흐름·운영 인수를 서로 다른 완료 주장과 증거로 분리했습니다.
2. 빌드·아티팩트·배포·호스팅·릴리스의 역할과 도구마다 용어 경계가 달라질 수 있음을 명시했습니다.
3. 소스 커밋·잠금 파일·런타임·설정·아티팩트 식별자와 검증 결과를 연결하는 재현·출처 질문을 추가했습니다.
4. local·preview·staging·production 환경을 고정 필수 목록이 아니라 위험에 따라 선택하며 설정·권한·데이터 차이를 기록하도록 했습니다.
5. 정적 사이트의 빌드 시점 공개 설정과 서버의 실행 시점 비밀, 정적·동적 서비스의 배포·복구 책임을 구분했습니다.
6. 이 저장소의 Astro·GitHub Pages·`dist/`·`PUBLIC_SITE_URL`·`PUBLIC_BASE_PATH` 설정과 실제 원격 미검증 경계를 교육 사례로 연결했습니다.
7. URL의 scheme·host·path, 도메인·DNS·resolver·nameserver·record·TTL과 HTTPS가 이어지는 개념 흐름을 설명했습니다.
8. DNS 캐시 차이를 무조건 “전파 중”으로 처리하지 않고 권위 있는 응답·호스팅 등록·레코드·인증서 관찰값을 분리했습니다.
9. CI와 Continuous Delivery·Continuous Deployment를 구분하고 파이프라인의 자동 범위·승인·중지 조건을 확인하게 했습니다.
10. 증상별 실패 경계, 롤백과 수정 배포의 데이터·외부 부작용 경계, 읽기 전용 AI 점검 계약과 배포 전후 체크리스트를 추가했습니다.

## 독립 검토 요청 계약

Claude Code는 다음 파일만 읽고 수정 없이 검토합니다.

- `AGENTS.md`
- `PROJECT_CONTEXT.md`
- `RULES.md`
- `docs/project/content-lifecycle.md`
- `docs/project/quality-rubric.md`
- `docs/project/editorial-guide.md`
- `research/source-map.md`
- `templates/chapter-template.md`
- `templates/agent-task-brief-template.md`
- `src/content/docs/10-deployment-operations/build-deploy-domain-dns.md`
- `src/content/docs/10-deployment-operations/environment-variables-config.md`
- `src/content/docs/10-deployment-operations/logs-monitoring-backup.md`
- `src/content/docs/09-git-github/git-and-github.md`
- `src/content/docs/08-quality/testing-strategy.md`
- `src/content/docs/03-full-stack/http-request-response.md`
- `src/content/docs/05-frontend/browser-dom-rendering.md`
- `src/content/docs/reference/checklists.md`
- `src/content/docs/reference/development-glossary.md`
- `docs/adr/0001-use-starlight-and-github-pages.md`
- `astro.config.mjs`
- `.github/workflows/ci.yml`
- `.github/workflows/deploy.yml`
- `VERIFICATION_REPORT.md`

검토자는 다음 질문에 답해야 합니다.

1. 소스·빌드·아티팩트·배포·호스팅·릴리스의 정의와 관계가 정확하며 도구별 용어 차이를 충분히 표시하나요?
2. 재현 가능한 빌드와 검증한 아티팩트 승격 설명이 정적 빌드 시점 설정과 환경별 별도 아티팩트의 예외를 정확히 다루나요?
3. local·preview·staging·production 환경 설명이 작은 프로젝트에 과한 구조를 강제하거나 운영과의 차이를 축소하나요?
4. 정적 사이트와 동적 서비스의 빌드·설정·비밀·데이터·관측·복구 책임 경계가 정확한가요?
5. 이 저장소의 Astro·GitHub Pages·base path 사례가 실제 설정과 일치하고 원격 미검증 범위를 정직하게 표시하나요?
6. URL·도메인·DNS·resolver·권위 있는 nameserver·record·TTL의 설명에 중요한 기술 오류나 과도한 단순화가 있나요?
7. A·AAAA·CNAME, 루트·하위 도메인과 공급자별 지침의 경계를 안전하게 설명하나요?
8. DNS 다음의 HTTPS 인증서·호스트 확인과 애플리케이션 인증·인가의 분리가 정확한가요?
9. CI, Continuous Delivery와 Continuous Deployment의 구분과 파이프라인 자동화·승인·중지 조건이 실제 문맥 차이를 잘 보여주나요?
10. 완료를 여섯 층으로 나눈 표와 증상별 진단이 빌드 로그·배포 상태·DNS·사용자 흐름·운영 증거를 과장 없이 구분하나요?
11. 롤백·roll-forward 설명이 동적 데이터 스키마·외부 부작용과 정적 아티팩트의 복구 차이를 정확히 다루나요?
12. AI 읽기 전용 지시, 배포 전후 체크리스트와 연습이 비개발자의 완료 판정 능력을 관찰 가능하게 검증하나요?
13. 현재 출처가 직접 뒷받침하지 못하거나 추가 공식·표준 1차 자료 확인이 필요한 주장은 무엇인가요?
14. 품질 루브릭 9개 항목을 0~2점으로 평가하고 치명 항목 여부를 판정해 주세요.

결과는 `P0 치명 오류`, `P1 review 전 필수`, `P2 개선 권장`, `잘된 점`, `루브릭 점수`, `추가 출처 확인 목록` 순으로 작성하고 각 지적에 대상 제목이나 짧은 대상 문구와 근거를 포함해야 합니다. 웹 검색, 파일 수정, Bash, 외부 플러그인과 하위 에이전트는 사용하지 않습니다.

## 승격 경계

Opus 검토 결과가 생성되면 Codex가 각 지적을 실제 원고와 프로젝트 규칙에 대조해 수용·부분 수용·기각으로 재판정합니다. AI 검토만으로 상태를 올리지 않으며, 사람 기술·편집 검토와 비개발자 독자 테스트를 완료하기 전에는 `draft`를 유지합니다.
