# R04 최초 finding 재판정과 Fix Round 1

후속 확정: [같은 reviewer의 Fix Round1](r04-api-data-auth-codex-rereview.md)은 원고 PASS C0/I0/M2·18/18·치명0, 별도 변경 코드 PASS C0/I0/M0입니다. I01·I02·M01·M02·M03·M04·M06·M07은 RESOLVED이고 M05/R16·M08/R20은 DEFERRED / OPEN입니다. Controller도 이 구분을 채택하며 두 Minor를 완료 건수에서 지우지 않습니다. 응답 후14파일·18청크·실제PNG12·payload·동일 세션/최초 결과 복구·프로필/도구 제한·원본 입력 보존 감사는 errors0/exit0입니다. payload SHA256 `1ecf2e870968fec95a20466c3954184260a25316b514c16159b56364bf2a0639`, 실제 후속 응답 SHA256 `0a2582c7f0e899b4d4fe87f164528d515d3aba626c349782bb253fd7d76aa2ac`입니다. 아래는 후속에 제공한 후보 당시 기록이며 R04 행렬 closeout과 review 전이는 별도입니다.

2026-11-15 controller 후보입니다. [최초 독립 결과](r04-api-data-auth-codex-review.md)의 NEEDS CHANGES C0/I2/M8·16/18과 별도 준비 코드 PASS는 역사로 보존합니다. 다음 표의 수용은 후속 독립 검토의 RESOLVED 판정이 아니며, R04 done·원고 review·M5 완료로 승격하지 않습니다.

| ID | Controller 재판정 | 최소 변경 및 남은 경계 |
|---|---|---|
| R04-I01 | 수용 | rollback은 해당 트랜잭션의 미확정 변경만 취소한다고 정의하고, A의 정상 확정을 보존하면서 B의 부분 변경이 없어야 한다는 예와 실패 오라클을 추가했습니다. 데이터베이스 전체의 과거 상태 복원과 구분합니다. |
| R04-I02 | 수용 | 주최자의 마감·정원 변경과 참가가 같은 불변식을 지키도록 본문·AI 계약·체크리스트를 연결했습니다. 정원 축소 하한과 초기 10/9에서 축소·참가 경쟁의 허용 결과 9/9 또는 10/10을 명시하고, 별도 장애·재시도 한도 실패는 별도 계약으로 분리했습니다. 기존 W-04를 연결하며 특정 잠금 구현을 강제하지 않습니다. |
| R04-M01 | 수용 | SVG 4번 자기 호출의 반환 y를392→372로 옮겨 y384에서 시작하는 5번 레이블 마스크와 화살촉을 분리했습니다. 참가자·메시지·동시 시작 topology는 불변입니다. |
| R04-M02 | 수용 | SVG의 `제약으로 1건만 확정`을 `동시성 전략으로 1건 확정`으로 한정했습니다. 본문이 요구하는 실제 DB·격리·잠금·재시도 전략의 검증을 대체하지 않습니다. |
| R04-M03 | 수용 | SVG 10번에 A 자신의 확정과 전체 인원≤정원을 함께 표시하고, Mermaid에도 A 참가 confirmed와 확정 수를 명시했습니다. |
| R04-M04 | 수용 | RFC9110 §15.5.2의 기존 고정 근거에 맞춰 401의 WWW-Authenticate challenge 헤더 의무를 설명하고 체크리스트에 추가했습니다. |
| R04-M05 | 보류·R16 후속 | 인접 data-model-schema-migration의 host_user_id/participant_user_id와 반복 사례 host_id/participant_id 대응 설명은 R16 data-support에서 처리합니다. 실행 SQL의 필드 계약으로 오인하지 않아야 하며 해결로 표시하지 않습니다. 현재 R04 원고의 필드명은 기준 사례와 일치합니다. |
| R04-M06 | 수용 | 조사 브리프의 분할 이전 그림 계약을 역사라고 표시하고 현재 개요/상세 두 자산의 질문 분리 및 PBV-03/PBVA-001 계보를 연결했습니다. 옛 제목·분기 기록 자체는 보존했습니다. |
| R04-M07 | 수용 | 운영·개인 자격 증명 사용 금지와 승인된 격리 테스트 전용 자격 증명 사용을 구별했습니다. 테스트 자격 증명도 응답·로그에 출력하지 않습니다. |
| R04-M08 | 보류·R20 후속 | performance-security의 알림 서비스를 기본 구성처럼 제시한 문맥은 R20 quality-support에서 선택적 확장 예시로 구분해야 합니다. 이 문맥을 현재 모임의 구현 요구로 수용하지 않으며 해결로 표시하지 않습니다. |

## 고정 바이트와 영향 범위

수정 기준 커밋은 `b5d5a9fc8d113af08ea0526f3d78c4d9f9e7d2e2`입니다. 원고 before SHA256은 `bac33a82b7ce891010f5b2423e0ea1b03a7f5796ec86d33ad0e5d30ed6680224`, after는 `ce4d191006950c9eb1ea6d2e49edc6b55040f1c3b868b2afb259a063578046d3`입니다. CONTENT_MAP은 해당 원고 문자 수만21,946→23,323으로 동기화하고 draft를 유지합니다. title·desc·alt·개요 SVG/Mermaid와 최초 PNG18은 불변입니다.

`scripts/r04-fix-transition.mjs`는 원고·상세 SVG/Mermaid·브리프·지도와 이전 준비 커밋의 PROJECT_CONTEXT 문단에 대한 정확한 전후 SHA 및 치환을 고정합니다. 현재 바이트가 정확한 after일 때만 역사 입력으로 역치환하며, 현재 후보 검사는 rollback·알 수 없는 변조를 거부합니다. R03 closeout이 포함한 지도/PROJECT_CONTEXT 역사 바이트도 이 경계를 거칩니다. 원래 R04 요청·manifest·출처와 R01~R03 결과를 덮어쓰거나 소급 PASS로 변경하지 않습니다.

검증은 [Fix Round 1 검증 기록](r04-fix-validation.md)에 분리합니다. 후속에는 최초 결과가 복구된 같은 저장 세션에 수정 원고 전체·diff·정확한 SHA·재판정·검사 코드와 실제 새 PNG를 전달합니다. 원본 전체 검토를 반복하거나 R02 승계 예외를 적용하지 않습니다.
