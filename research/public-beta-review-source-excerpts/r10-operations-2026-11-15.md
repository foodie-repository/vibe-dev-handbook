# R10 운영 원고의 공식 근거 보충

확인일은2026-11-15이며 기존2026-08-13 조사·원고 확인일은 소급 갱신하지 않습니다. 아래는 실제 공식 본문의 지정 절을 확인한 추적 가능한 발췌와 해석입니다. 원문 전체·PDF의 모든 표·페이지·각주를 완독했다는 주장은 하지 않습니다. 직접 인용은 출처별25단어 이하이고 제품 설정·계정·실제 복원 성공은 확인하지 않았습니다. 별도 유료 API·설치·운영 데이터 접근·외부 쓰기는 하지 않았습니다.

## R10-S01 — SLI·SLO·SLA·오류 예산

공식 [Google SRE Book, Service Level Objectives](https://sre.google/sre-book/service-level-objectives/)의 Indicators, Objectives, Agreements, Indicators/Objectives in Practice 관련 본문을 확인했습니다. 짧은 직접 발췌: “a carefully defined quantitative measure of some aspect of the level of service that is provided.”

SLI는 서비스 수준의 정량 지표, SLO는 그 지표의 목표값 또는 범위이며 SLA는 목표 미달의 명시적인 결과가 연결된 합의입니다. 지표의 시간 구간·집계·사용자 관심 대상과 proxy의 차이를 정해야 합니다. 오류 예산은 목표 미달을 허용할 범위를 운영 판단에 쓰는 접근이며 제품·사업·자원 조건에 맞춰야 합니다. 이 책의 Google 사례와 예시 수치·제품명은 현재 공급자 SLA나 모든 조직의 유일한 정의가 아닙니다. 적용 원고 범위는 SLI/SLO/SLA·오류 예산·99.9% 산식의 전제입니다.

## R10-S02 — 모니터링과 행동 가능한 알림

공식 [Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/)의 Definitions, Symptoms Versus Causes, The Four Golden Signals, As Simple as Possible, No Simpler 및 결론을 확인했습니다. 직접 발췌: “urgent, actionable, and actively or imminently user-visible”.

외부 사용자 행동을 보는 black-box와 내부 신호를 보는 white-box를 구분합니다. 지연·트래픽·오류·포화와 평균이 숨기는 분포를 함께 보고, 호출 알림은 사용자 영향·긴급성·대응 가능성·중복과 연결합니다. 내부 원인 후보를 사용자 장애와 동일시하거나 행동할 수 없는 알림을 계속 보내는 문제를 경계합니다. 조직 실무 자료이지 알림 제품의 기본 임계값이나 보편 강제 절차는 아닙니다.

## R10-S03 — 인시던트 대응과 적용 대상

[NIST SP 800-61 Rev. 3 발행 페이지](https://csrc.nist.gov/pubs/sp/800/61/r3/final)는2025-04 최종본·Rev.2 대체를 표시합니다. 연결된 [공식 PDF](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r3.pdf)의 Audience, §2 생명주기, §3 Community Profile과 RC.RP-03~06 관련 본문을 확인했습니다. 직접 발췌: “This publication is intended for use by most organizations, regardless of sector, size, or other factors.”

CSF2.0의 위험 관리 활동 전반에 대응을 통합하며 탐지·대응·복구와 준비·지속 개선을 연결합니다. 교훈은 복구가 끝날 때까지 기다리지 않고 공유할 수 있습니다. 복원 자산의 손상·침해 여부를 사용 전에 확인하고, 복원 뒤 시스템 무결성·서비스·정상 운영을 확인한 후 종료 기준과 문서를 연결합니다. 본문의 “미국 연방 정보 시스템 중심”이라는 범위 설명은 Audience의 광범위한 적용 대상과 구분해 reviewer가 판단해야 합니다. 이 문서는 사이버보안 인시던트 지침이지 모든 일반 장애에 대한 자동 법적 의무나 구현 완료 증거는 아닙니다.

## R10-S04 — RPO·RTO와 복구 검증

[NIST SP 800-34 Rev. 1 발행 페이지](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final)는2010-05 발행·2010-11-11 갱신 최종본을 표시합니다. [공식 PDF](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf) §3.2 사업 영향 분석의 RTO/RPO 정의(본문17쪽)와 복구·재구성·검증 관련 절을 확인했습니다. 직접 발췌: “RPO is not considered as part of MTD.”

RTO는 자원 중단이 다른 자원·업무·허용 중단시간에 수용 불가능한 영향을 주기 전까지의 한계이며, RPO는 중단 이전에 복구할 데이터 시점과 허용 손실에 관한 목표입니다. 재처리 시간까지 포함한 업무의 허용 중단과 시스템 복구 목표를 구분합니다. 사업 영향·자원 우선순위와 복구 전략·시험을 연결하며 문서화된 수치만으로 달성을 보장하지 않습니다. 미국 연방 정보 시스템 지침의 예시 수치·분류를 모든 서비스에 그대로 적용하지 않습니다. 이 PDF의 레이아웃·모든 부록·현재 계약은 검증 범위 밖입니다.

## R10-S05 — 분리 백업과 시험

[CISA StopRansomware Guide 페이지](https://www.cisa.gov/resources-tools/resources/stopransomware-guide)에서 연결한 [공식 PDF](https://www.cisa.gov/sites/default/files/2025-03/StopRansomware-Guide%20508.pdf)의 변경 기록과 Part1 General Best Practices의 백업 항목을 확인했습니다. PDF 변경 기록은3.0/2023-10이며 URL의2025-03을 새 개정일로 간주하지 않습니다. 발행 페이지의 Revision Date 빈 표시는 임의로 채우지 않습니다. 직접 발췌: “Maintain offline, encrypted backups of critical data, and regularly test the availability and integrity of backups in a disaster recovery scenario”.

랜섬웨어가 접근 가능한 백업까지 삭제·암호화할 수 있어 오프라인 보호, 암호화, 정기적인 가용성·무결성 및 백업 절차 시험을 권고합니다. 재구축 이미지·소스·설정과 플랫폼 호환성도 고려합니다. 이는 랜섬웨어 대응 범위이고 특정 제품의 격리·보존·복구 성공을 확인한 것이 아닙니다.

## R10-S06 — 안전한 로그

공식 [OWASP Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)의 Event attributes, Data to exclude, Event collection을 확인했습니다. 직접 발췌: “The application logs must record” 및 “when, where, who and what”.

시간·환경·버전·사건·결과와 상관 문맥을 선택하되 인증 비밀번호·토큰·키·세션 식별자와 민감정보를 그대로 기록하지 않는 경계가 필요합니다. 제거·마스킹·가명화 등은 목적·권한·보존과 연결하며 모든 개인정보를 수집하라는 지침이 아닙니다. 신뢰 경계 밖 이벤트 데이터는 검증·안전한 처리도 필요합니다. 예시 로그의 최소 필드와 비밀 출력 금지, 읽기 전용 점검 범위에 적용합니다. 실제 법적 적합성 판단이나 운영 로그 수집은 수행하지 않았습니다.

## R10-S07 — 트레이스의 문맥

공식 [OpenTelemetry Traces](https://opentelemetry.io/docs/concepts/signals/traces/)의 도입부, Spans, Span Context와 Span Links를 확인했습니다. 직접 발췌: “This is what allows tracing to represent an end-to-end view of any system.”

트레이스는 서로 다른 프로세스·서비스의 작업을 문맥·상관·계층으로 연결합니다. span은 작업 구간을 나타내고 trace/span 식별자와 링크가 경로 연결에 사용됩니다. 추출된 JSON 예시에는 중복 조각이 있어 실행 가능한 예제로 사용하지 않았습니다. 이 자료는 개념 문맥만 뒷받침하며 특정 계측의 완전성·샘플링 설정·사용자 화면 정확성·실제 복구를 증명하지 않습니다.

## 확인 경계

공식10개 URL의 관련 본문을 읽었습니다. 첫 묶음의 긴 도구 출력이 잘려 Google 두 본문은 다시 추출해 필요한 절만 읽었고, NIST/CISA는 발행 페이지와 연결 PDF를 구분했습니다. 접근 실패는 없었지만 PDF 전체 시각 검토와 운영 시스템 확인은 수행하지 않았습니다. 과거 날짜·원문·그림을 바꾸지 않고 이 보충을 고정 검토 입력으로 제공합니다. NIST 적용 대상의 차이는 실제 reviewer의 finding 판정 전에 임의 해소 처리하지 않습니다.
