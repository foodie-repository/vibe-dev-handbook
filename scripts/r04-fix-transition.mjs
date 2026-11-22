import {createHash} from 'node:crypto';
import {r04PreCloseoutBytes} from './r04-closeout.mjs';
const sha=b=>createHash('sha256').update(b).digest('hex');
// Exact R04 preparation/finding transitions; historical inputs remain unchanged.
export const r04FixTransitions=[
  {
    "path": "src/content/docs/04-backend-data/api-database-auth.md",
    "before": "bac33a82b7ce891010f5b2423e0ea1b03a7f5796ec86d33ad0e5d30ed6680224",
    "after": "ce4d191006950c9eb1ea6d2e49edc6b55040f1c3b868b2afb259a063578046d3",
    "replacements": [
      [
        "\n세션은 인증 사건과 이후 요청을 이어 주는 상태이고, 토큰은 그 상태나 접근 자격을 전달하는 수단이 될 수 있습니다. 세션 식별자나 토큰은 `Authorization` 헤더뿐 아니라 쿠키로 전송될 수도 있지만, 헤더나 쿠키가 존재한다는 사실 역시 자격 증명 검증과 대상별 인가가 끝났다는 증거는 아닙니다. 서버 저장 세션과 자체 포함 토큰 중 어느 하나가 모든 프로젝트의 정답은 아닙니다. 수명, 폐기, 탈취 대응, 저장 위치, 권한 변경 반영 방식과 운영 환경을 함께 설계해야 합니다. 토큰에 권한 관련 정보가 들어 있어도 현재 모임에 대한 최종 정책 집행을 자동으로 대신하지는 않습니다.\n",
        "\n`401` 응답에는 적용 가능한 인증 요구(challenge)를 담은 `WWW-Authenticate` 헤더가 필요합니다. 어떤 자격 증명을 제시해야 하는지 알려 주는 이 헤더가 선택한 인증 방식과 맞는지도 API 계약과 실제 응답에서 확인해야 합니다. 상태 코드와 오류 본문만으로 인증 실패 응답의 구성이 완전하다고 판단하지 않습니다.\n\n세션은 인증 사건과 이후 요청을 이어 주는 상태이고, 토큰은 그 상태나 접근 자격을 전달하는 수단이 될 수 있습니다. 세션 식별자나 토큰은 `Authorization` 헤더뿐 아니라 쿠키로 전송될 수도 있지만, 헤더나 쿠키가 존재한다는 사실 역시 자격 증명 검증과 대상별 인가가 끝났다는 증거는 아닙니다. 서버 저장 세션과 자체 포함 토큰 중 어느 하나가 모든 프로젝트의 정답은 아닙니다. 수명, 폐기, 탈취 대응, 저장 위치, 권한 변경 반영 방식과 운영 환경을 함께 설계해야 합니다. 토큰에 권한 관련 정보가 들어 있어도 현재 모임에 대한 최종 정책 집행을 자동으로 대신하지는 않습니다.\n"
      ],
      [
        "\n`commit`은 트랜잭션의 변경을 확정하는 동작이고, `rollback`은 아직 확정되지 않은 변경을 취소해 트랜잭션 시작 전의 일관된 상태로 되돌리는 동작입니다. `rollback`은 과거 백업을 복원하는 운영 절차와 같지 않습니다. 또한 하나의 HTTP 요청이 언제나 정확히 하나의 데이터베이스 트랜잭션과 일치하는 것도 아닙니다. 외부 서비스 호출, 비동기 작업, 여러 저장소가 포함되면 경계가 달라질 수 있습니다.\n\n",
        "\n`commit`은 트랜잭션의 변경을 확정하는 동작이고, 전체 `rollback`은 해당 트랜잭션이 만든 미확정 변경을 취소하는 동작입니다. 다른 트랜잭션이 정상적으로 확정한 변경까지 되돌리거나 데이터베이스 전체를 과거 상태로 복원하는 것은 아닙니다. 예를 들어 A의 참가가 확정된 뒤 B의 저장이 실패했다면 A의 참가를 유지하면서 B의 부분 변경이 남지 않는지 확인해야 합니다. `rollback`은 과거 백업을 복원하는 운영 절차와 같지 않습니다. 또한 하나의 HTTP 요청이 언제나 정확히 하나의 데이터베이스 트랜잭션과 일치하는 것도 아닙니다. 외부 서비스 호출, 비동기 작업, 여러 저장소가 포함되면 경계가 달라질 수 있습니다.\n\n"
      ],
      [
        "\n### 7. 확정된 결과를 응답하고 재조회·로그·동시성 테스트로 확인합니다\n",
        "\n같은 불변식에 영향을 주는 주최자의 마감·정원 변경도 참가 처리와 조정해야 합니다. 이 모임 사례에서는 새 정원이 같은 일관성 경계에서 확인한 현재 확정 인원 이상일 때만 정원 축소를 허용합니다. 정원 10명·확정 9명에서 9명으로 줄이는 요청과 새 참가 요청이 경쟁한다면, 축소가 먼저 확정되어 정원·인원이 `(9, 9)`가 되거나 참가가 먼저 확정되어 `(10, 10)`이 되는 결과를 구분해 검증합니다. 이 두 작업 외의 변경과 별도 장애가 없는 시험에서 두 요청을 모두 성공시켜 `(9, 10)`으로 만들면 안 됩니다. 충돌로 거절된 요청의 부분 변경이 없어야 하며, 저장 장애나 재시도 한도 도달은 별도의 실패 계약으로 확인합니다. 자세한 마감·정원 변경 계약은 [모임 웹앱의 W-04](../../12-case-studies/first-full-stack-project/#w-04-정원마감과-동시성)에서 이어집니다.\n\n### 7. 확정된 결과를 응답하고 재조회·로그·동시성 테스트로 확인합니다\n"
      ],
      [
        "| 마지막 한 자리의 두 동시 요청 | 성공 1건과 충돌·정원 마감 1건 | 같은 시작 장벽 테스트, 최종 `confirmed = capacity`, 활성 중복·부분 저장 0건 |\n| 트랜잭션 중 저장 실패 | `5xx` 계열의 안전한 오류 | 전체 `rollback`, 이벤트·참가 관계가 모두 이전 상태인지, 요청 상관 식별자로 연결된 내부 오류 |\n| 참가 또는 자기 취소 성공 | `2xx`와 확정된 안전한 필드 | 응답과 권한 있는 재조회, 참가 상태·활성 수·취소 이력 일치, 권한·동시성 테스트 |\n",
        "| 마지막 한 자리의 두 동시 요청 | 성공 1건과 충돌·정원 마감 1건 | 같은 시작 장벽 테스트, 최종 `confirmed = capacity`, 활성 중복·부분 저장 0건 |\n| 트랜잭션 중 저장 실패 | `5xx` 계열의 안전한 오류 | 실패한 트랜잭션의 전체 `rollback`, 그 요청에 귀속되는 부분 변경 0건·다른 정상 확정 변경 유지·전체 불변식 유지, 요청 상관 식별자로 연결된 내부 오류 |\n| 참가 또는 자기 취소 성공 | `2xx`와 확정된 안전한 필드 | 응답과 권한 있는 재조회, 참가 상태·활성 수·취소 이력 일치, 권한·동시성 테스트 |\n"
      ],
      [
        "8. 동시 요청 전략과 유한한 재시도 조건\n9. 토큰·세션·개인정보를 제외한 로그 필드\n",
        "8. 동시 요청 전략과 유한한 재시도 조건\n   - 주최자의 마감·정원 변경도 참가 처리와 같은 불변식을 지키도록 조정\n   - 새 정원은 같은 일관성 경계에서 확인한 확정 인원 이상일 때만 허용\n9. 토큰·세션·개인정보를 제외한 로그 필드\n"
      ],
      [
        "- 분리된 가상 계정과 가짜 모임 데이터만 사용\n- 실제 토큰·세션 값·연결 문자열·개인정보를 사용하거나 출력하지 않음\n- 운영 데이터와 운영 설정은 변경하지 않음\n",
        "- 분리된 가상 계정과 가짜 모임 데이터만 사용\n- 운영·개인용 자격 증명과 실제 개인정보를 사용하지 않음\n- 인증·데이터베이스 경계 시험에 필요하면 승인된 격리 환경의 테스트 전용 자격 증명만 사용\n- 테스트 전용 값도 토큰·세션 값·연결 문자열 등 비밀 원문을 출력·로그·보고서에 노출하지 않음\n- 운영 데이터와 운영 설정은 변경하지 않음\n"
      ],
      [
        "- 마지막 한 자리 동시 요청: 성공 1건, 안전한 실패 1건\n- 저장 중 실패와 전체 rollback\n- commit 뒤 응답 유실 후 재조회와 중복 0건\n",
        "- 마지막 한 자리 동시 요청: 성공 1건, 안전한 실패 1건\n- 주최자의 정원 축소와 참가 요청의 경쟁: 정원 10·확정 9에서 정원 9로 축소할 때 허용 최종 상태 (9, 9) 또는 (10, 10), 거절 요청의 부분 저장 0건\n- 주최자의 마감과 참가 요청의 경쟁: 확정 경계의 모집 상태에 따라 처리하고 마감 후 새 참가를 허용하지 않음\n- 저장 중 실패와 해당 트랜잭션의 전체 rollback: 다른 요청의 정상 확정 결과는 유지\n- commit 뒤 응답 유실 후 재조회와 중복 0건\n"
      ],
      [
        "- [ ] 외부 인증 실패 응답이 계정 존재나 실패 요소를 불필요하게 노출하지 않나요?\n\n",
        "- [ ] 외부 인증 실패 응답이 계정 존재나 실패 요소를 불필요하게 노출하지 않나요?\n- [ ] `401` 응답의 `WWW-Authenticate` 헤더에 선택한 인증 방식에 맞는 challenge가 있나요?\n\n"
      ],
      [
        "- [ ] 마지막 한 자리 동시 요청에서 성공 1건·안전한 실패 1건·`confirmed <= capacity`·부분 저장 0건을 확인했나요?\n- [ ] `commit` 뒤 응답 유실을 `rollback`으로 단정하지 않고 재조회·처리 기록으로 확인하나요?\n",
        "- [ ] 마지막 한 자리 동시 요청에서 성공 1건·안전한 실패 1건·`confirmed <= capacity`·부분 저장 0건을 확인했나요?\n- [ ] 주최자의 마감·정원 변경과 참가 요청도 조정하며, 정원 축소의 하한과 축소·참가 경쟁의 허용 최종 상태를 검증했나요?\n- [ ] 실패한 트랜잭션의 부분 변경은 없고 다른 요청의 정상 확정 결과는 유지되는지 구별했나요?\n- [ ] `commit` 뒤 응답 유실을 `rollback`으로 단정하지 않고 재조회·처리 기록으로 확인하나요?\n"
      ]
    ]
  },
  {
    "path": "src/assets/diagrams/api-database-auth-sequence.svg",
    "before": "c1b642f30672e304ea4e48d578848abf8ff725cc3581bc3ae9c55d7bdd1ca288",
    "after": "083dc1fc68112c63ca97288fec87910a284f2061bea466be83838d3f218bdded",
    "replacements": [
      [
        "<path class=\"message-line\" d=\"M412 284 H600\"/>\n<path class=\"message-line\" d=\"M612 348 H660 V392 H616\"/>\n<path class=\"message-line return-line commit-line\" d=\"M604 440 H412\"/>\n",
        "<path class=\"message-line\" d=\"M412 284 H600\"/>\n<path class=\"message-line\" d=\"M612 348 H660 V372 H616\"/>\n<path class=\"message-line return-line commit-line\" d=\"M604 440 H412\"/>\n"
      ],
      [
        "<g class=\"message\" data-unit=\"3\"><rect class=\"label-mask\" x=\"376\" y=\"232\" width=\"264\" height=\"48\" rx=\"4\"/><text class=\"message-label\" x=\"508\" y=\"254\" text-anchor=\"middle\">3. 확정 전 재검사</text><text class=\"message-detail\" x=\"508\" y=\"276\" text-anchor=\"middle\">중복·open·정원</text></g>\n<g class=\"message\" data-unit=\"4\"><rect class=\"label-mask\" x=\"400\" y=\"292\" width=\"280\" height=\"52\" rx=\"4\"/><text class=\"message-label\" x=\"540\" y=\"316\" text-anchor=\"middle\">4. 트랜잭션 확정 경계</text><text class=\"message-detail\" x=\"540\" y=\"338\" text-anchor=\"middle\">제약으로 1건만 확정</text></g>\n<g class=\"message\" data-unit=\"5\"><rect class=\"label-mask\" x=\"356\" y=\"384\" width=\"304\" height=\"48\" rx=\"4\"/><text class=\"message-label commit-text\" x=\"508\" y=\"406\" text-anchor=\"middle\">5. A만 commit·처리 기록</text><text class=\"message-detail commit-text\" x=\"508\" y=\"428\" text-anchor=\"middle\">B 변경 없음</text></g>\n",
        "<g class=\"message\" data-unit=\"3\"><rect class=\"label-mask\" x=\"376\" y=\"232\" width=\"264\" height=\"48\" rx=\"4\"/><text class=\"message-label\" x=\"508\" y=\"254\" text-anchor=\"middle\">3. 확정 전 재검사</text><text class=\"message-detail\" x=\"508\" y=\"276\" text-anchor=\"middle\">중복·open·정원</text></g>\n<g class=\"message\" data-unit=\"4\"><rect class=\"label-mask\" x=\"400\" y=\"292\" width=\"280\" height=\"52\" rx=\"4\"/><text class=\"message-label\" x=\"540\" y=\"316\" text-anchor=\"middle\">4. 트랜잭션 확정 경계</text><text class=\"message-detail\" x=\"540\" y=\"338\" text-anchor=\"middle\">동시성 전략으로 1건 확정</text></g>\n<g class=\"message\" data-unit=\"5\"><rect class=\"label-mask\" x=\"356\" y=\"384\" width=\"304\" height=\"48\" rx=\"4\"/><text class=\"message-label commit-text\" x=\"508\" y=\"406\" text-anchor=\"middle\">5. A만 commit·처리 기록</text><text class=\"message-detail commit-text\" x=\"508\" y=\"428\" text-anchor=\"middle\">B 변경 없음</text></g>\n"
      ],
      [
        "<g class=\"message\" data-unit=\"9\"><rect class=\"label-mask\" x=\"364\" y=\"660\" width=\"288\" height=\"52\" rx=\"4\"/><text class=\"message-label\" x=\"508\" y=\"684\" text-anchor=\"middle\">9. 참가·이벤트 조회</text><text class=\"message-detail\" x=\"508\" y=\"706\" text-anchor=\"middle\">처리 기록 함께 확인</text></g>\n<g class=\"message\" data-unit=\"10\"><rect class=\"label-mask\" x=\"348\" y=\"732\" width=\"320\" height=\"52\" rx=\"4\"/><text class=\"message-label commit-text\" x=\"508\" y=\"756\" text-anchor=\"middle\">10. confirmed≤capacity</text><text class=\"message-detail commit-text\" x=\"508\" y=\"778\" text-anchor=\"middle\">활성 중복·부분 저장 0</text></g>\n<g class=\"message\" data-unit=\"11\"><rect class=\"label-mask\" x=\"68\" y=\"804\" width=\"356\" height=\"52\" rx=\"4\"/><text class=\"message-label\" x=\"246\" y=\"828\" text-anchor=\"middle\">11. 이미 확정</text><text class=\"message-detail\" x=\"246\" y=\"850\" text-anchor=\"middle\">중복 생성 요청 불필요</text></g>\n",
        "<g class=\"message\" data-unit=\"9\"><rect class=\"label-mask\" x=\"364\" y=\"660\" width=\"288\" height=\"52\" rx=\"4\"/><text class=\"message-label\" x=\"508\" y=\"684\" text-anchor=\"middle\">9. 참가·이벤트 조회</text><text class=\"message-detail\" x=\"508\" y=\"706\" text-anchor=\"middle\">처리 기록 함께 확인</text></g>\n<g class=\"message\" data-unit=\"10\"><rect class=\"label-mask\" x=\"348\" y=\"732\" width=\"320\" height=\"52\" rx=\"4\"/><text class=\"message-label commit-text\" x=\"508\" y=\"756\" text-anchor=\"middle\">10. A 확정·인원≤정원</text><text class=\"message-detail commit-text\" x=\"508\" y=\"778\" text-anchor=\"middle\">활성 중복·부분 저장 0</text></g>\n<g class=\"message\" data-unit=\"11\"><rect class=\"label-mask\" x=\"68\" y=\"804\" width=\"356\" height=\"52\" rx=\"4\"/><text class=\"message-label\" x=\"246\" y=\"828\" text-anchor=\"middle\">11. 이미 확정</text><text class=\"message-detail\" x=\"246\" y=\"850\" text-anchor=\"middle\">중복 생성 요청 불필요</text></g>\n"
      ]
    ]
  },
  {
    "path": "src/assets/diagrams/source/api-database-auth-sequence.mmd",
    "before": "b25712d035b682f3da73af10da666747c6821da41c090937f1e682468fbe3b16",
    "after": "2f99e8c8b32a9303b1dd1777ec37b3e71cbe8d3eb9a6d14fbb7cb0d82f157f40",
    "replacements": [
      [
        "    S->>D: 9. 참가 상태·이벤트·처리 기록 조회\n    D-->>S: 10. A confirmed·count≤capacity·활성 중복 0·부분 저장 0\n    S-->>A: 11. 이미 확정 — 중복 요청하지 않음\n",
        "    S->>D: 9. 참가 상태·이벤트·처리 기록 조회\n    D-->>S: 10. A 참가 confirmed·확정 수≤정원·활성 중복 0·부분 저장 0\n    S-->>A: 11. 이미 확정 — 중복 요청하지 않음\n"
      ]
    ]
  },
  {
    "path": "research/meeting-api-database-auth-research-brief.md",
    "before": "57a8ff8e1b4ba282953c31a118f8a6d312952d1c917ee0f8c6a956889f9f96ab",
    "after": "dfc697f33a35ff1b1bcc83412378118702fb2cb9a6a8d4294f07b69586a82b6e",
    "replacements": [
      [
        "\n제목은 Mermaid와 SVG 모두 `모임 참가 요청의 API·인증·인가·데이터베이스 책임 흐름`으로 고정합니다.\n",
        "\n이 절은 Task20의 도표 분할 이전 계약을 보존한 역사 기록입니다. 현재는 `api-database-auth-flow.svg`·대응 Mermaid가 정상 책임 순서만, `api-database-auth-sequence.svg`·대응 Mermaid가 마지막 한 자리의 동시 요청과 commit 뒤 응답 유실 복구를 각각 설명합니다. 두 질문을 다시 합치거나 개요에 아래 모든 실패 분기를 넣으라는 현재 지시가 아닙니다. 채택 계보는 `docs/project/public-beta-visual-audit.md`의 PBV-03·PBVA-001과 R04 후속 검토 기록에서 확인합니다. 아래 기존 제목·분기 계약은 당시 내용 그대로 유지합니다.\n\n제목은 Mermaid와 SVG 모두 `모임 참가 요청의 API·인증·인가·데이터베이스 책임 흐름`으로 고정합니다.\n"
      ]
    ]
  },
  {
    "path": "CONTENT_MAP.md",
    "before": "73e8e3a9ef41ddb8cd88b6a4af4d392266afe969e7d0a5ad8593f86d930ad064",
    "after": "1ad48630c6576a6a6f944e39d1b4044eb43cf1278eb19fd17717095c573966ba",
    "replacements": [
      [
        "|---|---:|---:|---|\n| [API·데이터베이스·인증](src/content/docs/04-backend-data/api-database-auth.md) | `draft` | 21,946 | `/04-backend-data/api-database-auth/` |\n| [데이터 모델·스키마·마이그레이션](src/content/docs/04-backend-data/data-model-schema-migration.md) | `draft` | 12,844 | `/04-backend-data/data-model-schema-migration/` |\n",
        "|---|---:|---:|---|\n| [API·데이터베이스·인증](src/content/docs/04-backend-data/api-database-auth.md) | `draft` | 23,323 | `/04-backend-data/api-database-auth/` |\n| [데이터 모델·스키마·마이그레이션](src/content/docs/04-backend-data/data-model-schema-migration.md) | `draft` | 12,844 | `/04-backend-data/data-model-schema-migration/` |\n"
      ]
    ]
  },
  {
    "path": "PROJECT_CONTEXT.md",
    "before": "26a82ba0542ae7e1f07fe49d9eb7498b12c5c236bd62f92dc2e8c6ded4ac2bb9",
    "after": "738b3f449e09eb09097d0dff572053b7c37da090e713565cddef9e03036f8c3e",
    "replacements": [
      [
        "\n2026-10-25 R03 controller closeout: 최초 NEEDS CHANGES C0/I3/M4·15/18과 원문22청크·PNG18 검토를 보존하고, 같은 저장 reviewer의 Fix Round1 PASS C0/I0/M0·18/18 및 준비 코드 Minor1 해소를 연결했습니다. R01~R03은 done, R04~R26은 pending/not-fixed입니다. R03은 검토된 본문을 바꾸지 않고 metadata-only review로 전이하며 공개59개 draft56/review3/ready0입니다. M5 전체·R26·ready·소유자 공개 승인·RC·외부 쓰기는 미완료입니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단과 행별 표·JSON입니다. 다음은 R04의 입력 고정·같은 세션 후속 가능 조건 확인입니다. 상세 근거는 `docs/project/reviews/public-beta-1/r03-controller-closeout.md`입니다.\n",
        "\n2026-11-15 R04 입력 준비와 최초 실제 검토: 고정32입력·문맥13개·원문36청크·PNG18개의 전달과 응답 후 불변성 감사가 errors0이며, 준비 코드 독립 검토는 PASS C0/I0/M0입니다. 원고 판정은 별도로 NEEDS CHANGES C0/I2/M8·16/18이므로 R04 완료나 상태 승격을 하지 않습니다. R01~R03 done·공개59개 draft56/review3/ready0을 유지하며, 아래 R04 not-fixed 산문은 이전 체크포인트의 역사입니다. 현재 재개점은 finding 재판정·최소 수정·같은 저장 reviewer 후속 검토입니다. 상세는 `docs/project/reviews/public-beta-1/r04-input-preparation-report.md`입니다. 최신 사용자 지시가 과거 주간 사용량 임계·작업 수·현재 단위 중단 제한을 해제했으며 기존 목표를 계속 진행합니다. 구독 전용·별도 외부 쓰기 승인 경계는 유지합니다.\n\n2026-10-25 R03 controller closeout: 최초 NEEDS CHANGES C0/I3/M4·15/18과 원문22청크·PNG18 검토를 보존하고, 같은 저장 reviewer의 Fix Round1 PASS C0/I0/M0·18/18 및 준비 코드 Minor1 해소를 연결했습니다. R01~R03은 done, R04~R26은 pending/not-fixed입니다. R03은 검토된 본문을 바꾸지 않고 metadata-only review로 전이하며 공개59개 draft56/review3/ready0입니다. M5 전체·R26·ready·소유자 공개 승인·RC·외부 쓰기는 미완료입니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단과 행별 표·JSON입니다. 다음은 R04의 입력 고정·같은 세션 후속 가능 조건 확인입니다. 상세 근거는 `docs/project/reviews/public-beta-1/r03-controller-closeout.md`입니다.\n"
      ]
    ]
  }
];
export function r04PreFixBytes(path,bytes){
 bytes=r04PreCloseoutBytes(path,bytes);
 const e=r04FixTransitions.find(x=>x.path===path);if(!e||sha(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const [before,after] of [...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R04 reversal not unique');text=text.replace(after,before);}
 if(sha(text)!==e.before)throw Error('R04 historical bytes mismatch');return Buffer.from(text);
}
export function validateR04Current(read){
 const errors=[];for(const e of r04FixTransitions){try{if(sha(r04PreCloseoutBytes(e.path,read(e.path)))!==e.after)errors.push('R04 current patch mismatch: '+e.path);}catch{errors.push('R04 current patch missing: '+e.path);}}return errors;
}
