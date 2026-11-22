# R11 코딩 에이전트 — 현재 확인 근거 보충

확인일은 2026-11-15입니다. R11 대상은 `working-with-coding-agents.md` 전체이며, 아래 자료는 개념·권한·작업 루프의 직접 근거입니다. 과거 source-map의 2026-08 확인일과 PBSG-017은 당시 기록으로 보존합니다. 현재 제품의 모든 기능·계정·모델 성능을 확인했다는 뜻이 아닙니다. 공식 본문의 관련 절을 읽고 필요한 범위만 한국어로 요약했으며 원문 전체를 복제하지 않습니다.

## R11-S01 — 샌드박스와 승인 정책

[Codex Agent approvals & security](https://developers.openai.com/codex/agent-approvals-security)의 Sandbox and approvals, Network access, 권한 조합 설명과 [Sandboxing](https://developers.openai.com/codex/sandboxing)의 Configure defaults를 확인했습니다. 샌드박스는 파일·네트워크 등의 기술적 실행 경계이고, 승인 정책은 예외 요청을 언제 처리할지 정하는 별도 축입니다. 자동 승인이 가능하더라도 샌드박스 자체가 사라지는 것은 아닙니다. `never`는 승인 질문을 하지 않는다는 뜻이지 모든 작업이 허용된다는 뜻이 아닙니다.

명령 실행에 적용되는 네트워크 경계와 웹 검색·앱·MCP·브라우저·모델 인증 연결은 구분해야 합니다. 읽기 전용이라는 표현만으로 모든 도구 호출이 금지됐다고 추정하지 않습니다. 두 페이지의 read-only 요약은 명령 실행 설명의 상세 수준이 다르므로 이 보충으로 모든 환경에서 동일한 명령 허용을 단정하지 않습니다. R11 reviewer의 도구 전면 금지는 별도 검토 계약과 실제 실행 증거로 확인합니다. 전역 설정·인증·권한은 변경하지 않았으며, 특정 제품 설정이나 `/plan` 명령의 현재 지원 여부를 이 자료로 확인하지 않았습니다.

## R11-S02 — 저장소 문맥과 증거 기반 루프

[OpenAI Harness engineering](https://openai.com/index/harness-engineering/)의 게시일 표시는 2026-02-11입니다. We made repository knowledge the system of record, Agent legibility is the goal 및 검토·작업 루프와 자율성 한계 부분을 확인했습니다. 지침 하나에 모든 내용을 넣기보다 짧은 진입점에서 구조화된 저장소 문서와 실행 계획으로 연결하는 조직 사례입니다. 계획·진행·결정·검증 정보를 버전 관리하고, 반복 검토에서 사람과 에이전트의 피드백을 증거에 연결합니다.

저장소 밖 지식을 에이전트가 자동으로 알고 있다고 가정하지 않는다는 점을 뒷받침합니다. 특정 조직의 사람 검토 생략이나 높은 자율성은 해당 환경에 투자한 결과이며 이 핸드북의 권한·독립 검토·수용 기준을 대체하지 않습니다. 글의 개발량·생산성 수치나 사례 모델을 현재 제품 성능의 보장으로 재사용하지 않습니다.

## R11-S03 — 장기 작업의 재개와 검증

[Anthropic Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)의 초기화/코딩 역할, incremental progress, testing 및 future work를 확인했습니다. 작은 기능 단위, 진행 기록과 Git 이력, 재개 시 현재 상태 파악, 실제 사용자 흐름 검증을 연결한 실험 사례입니다. 한 번에 전체 구현을 시도하거나 충분한 증거 없이 완료를 선언하는 실패를 다룹니다. 단위 테스트나 HTTP 응답만으로 사용자 기능 검증을 대신하지 않습니다.

추출된 페이지의 Published 표시는 비어 있어 현재 확인으로 게시일을 보충하지 않았습니다. source-map의 과거 게시일 기록과 구분합니다. 예전 브라우저 도구의 모달 처리 한계나 특정 모델의 동작을 현재 기능으로 단정하지 않으며, 모든 작업에서 강제 세션 초기화·커밋·다중 에이전트가 최선이라는 근거로 사용하지 않습니다.

## R11-S04 — 작성과 평가의 분리 및 문맥 전략의 조건

[Anthropic Harness design for long-running apps](https://www.anthropic.com/engineering/harness-design-long-running-apps)의 context resets, self-evaluation, full-stack 실험과 evaluator 관련 부분을 확인했습니다. 자기 평가가 관대해지는 문제를 별도 평가 역할과 명시적 기준으로 줄이는 사례입니다. 분리는 편향을 완전히 없애는 보장이 아닙니다. 문맥 초기화는 조정·토큰·시간 비용이 있고, 다른 모델 실험에서는 초기화를 제거하고 긴 세션과 압축을 사용했습니다.

따라서 새 세션·압축·계속 작업의 선택은 작업과 실행 조건에 따라 판단해야 합니다. 계획/작성/평가 역할의 구현을 모든 프로젝트의 강제 구조로 일반화하지 않습니다. Published 추출 값이 비어 있으므로 과거 게시일 기록을 현재 페이지에서 다시 확인했다고 하지 않습니다. 실제 구독·모델·도구 동작은 이 글의 사례가 아닌 실행 전후 증거로 확인합니다.

## R11-S05 — 장기 에이전트 공개 예제의 적용 한계

[anthropics/cwc-long-running-agents README](https://github.com/anthropics/cwc-long-running-agents)의 개요, harness 공통 원칙, 평가·인수인계 설명을 확인했습니다. Code with Claude 2026 데모 예제이며 유지보수·기여 수락을 하지 않는다는 고지가 있습니다. 그대로 운영에 투입할 완제품으로 소개하지 않습니다.

실패를 기본값으로 두고 증거를 요구하는 평가, 작성자 문맥과 분리한 평가 입력, 진행 파일과 Git을 통한 인수인계가 예시에 포함됩니다. 평가 역할의 도구 범위를 제한하는 것은 쓰기 방지의 한 요소이지 결과의 정확성을 자동 보장하지 않습니다. 저장소를 설치·복제·실행하거나 API 키를 사용하지 않았습니다. README 이외의 전체 소스·라이선스·실행 성공은 이번 확인 범위가 아닙니다.

## 재사용 및 확인 경계

공식·1차 URL 6개의 관련 본문을 읽었고 접근 실패는 없었습니다. 긴 추출 결과의 탐색 메뉴·중복 코드·빈 날짜 표시는 근거로 채택하지 않았습니다. 제품 설정의 전체 규격, `/plan`의 개별 제품 지원, 실서비스 성능·비용·계정 권한은 not-confirmed입니다. 원고의 영속적인 작업 원칙과 특정 제품 기능을 분리해 판정하며, 확인되지 않은 기능이 필수 주장이라면 reviewer가 해당 범위를 지적하도록 합니다. 기존 PBV-12 원고/SVG/Mermaid와 실제 이미지 증거는 변경하지 않습니다.
