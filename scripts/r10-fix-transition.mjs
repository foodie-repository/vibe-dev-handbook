import {createHash} from 'node:crypto';
import {r10PreCloseoutBytes} from './r10-closeout.mjs';
const sha=b=>createHash('sha256').update(b).digest('hex');
export const r10FixTransitions=[
  {
    "path": "src/content/docs/10-deployment-operations/logs-monitoring-backup.md",
    "before": "5a42d483e27c9c86c1345f46fa79e6666b4eaaad03e0949b5b97a5688bc76894",
    "after": "655f871ba666f13d2d4dc1f28423fabd42cb6e21fb414d943a52324766c272ac",
    "replacements": [
      [
        "\n## 운영은 발견에서 학습까지의 순환입니다\n\n![사용자와 시스템 신호에서 문제를 감지하고 안정화·복구·검증·학습으로 이어지는 운영 순환](../../../assets/diagrams/operations-recovery-loop.svg)\n\n운영 대응은 다음 순서로 흐릅니다.",
        "\n## 운영은 발견에서 학습까지의 순환입니다\n\n실선으로 이어지는 대응 단계와 학습에서 신호 수집으로 돌아가는 점선을 함께 보세요. 실제 대응의 고정된 실행 순서가 아니라 단계 사이의 책임과 피드백을 보여 줍니다.\n\n![사용자와 시스템 신호에서 문제를 감지하고 안정화·복구·검증·학습으로 이어지는 운영 순환](../../../assets/diagrams/operations-recovery-loop.svg)\n\n운영 대응은 다음 순서로 흐릅니다."
      ],
      [
        "\n`confirmed > capacity` 또는 정의된 인가 밖에서 다른 사용자의 참가 취소가 확인되면 다음 순서로 대응합니다.\n\n1. **가장 작은 범위로 안정화합니다.** 영향을 받은 가짜 `event_id=event-example-001`의 참가·취소처럼 위험한 쓰기를 가장 작은 안전한 범위에서 즉시 제한합니다. 전체 서비스를 내려야 하는지는 확인된 영향과 추가 확산 위험을 근거로 별도 판단합니다.\n2. **되돌릴 수 없는 데이터 변경 전에 증거를 보존합니다.** 최초 탐지 시각, 환경, 배포 버전, 안전한 `request_correlation_id`, 영향받은 기능과 결과를 기록하고 확인된 사실·미확인 범위·가설을 분리합니다.\n3. **원인과 복구 수단을 분기합니다.** 권위 있는 데이터 재조회와 변경 이력으로 데이터 손상인지, 인가 정책·구현 오류인지, 코드·설정·배포 문제인지 좁힌 뒤 데이터 복구·인가 수정·코드 또는 설정 수정 중 필요한 조치를 선택합니다. 불변식 위반만 보고 백업을 자동 복원하지 않습니다.\n4. **재개 전에 결과를 다시 확인합니다.** 불변식 쿼리로 `confirmed <= capacity`와 타인 취소 위반 0건을 확인하고, 별도 운영 승인을 받은 격리된 가상 시험 값으로 공개 조회·참가·자기 취소 smoke 흐름과 안전한 로그를 재확인한 뒤 제한을 해제합니다.\n\n## 이 저장소에서는 무엇을 관찰할 수 있나요",
        "\n`confirmed > capacity` 또는 정의된 인가 밖에서 다른 사용자의 참가 취소가 확인되면 다음 순서로 대응합니다.\n\n1. **가장 작은 범위로 안정화합니다.** 사전에 승인된 긴급 대응 권한과 런북 범위에서 담당자가 영향을 받은 가짜 `event_id=event-example-001`의 참가·취소처럼 위험한 쓰기를 가장 작은 안전한 범위로 제한합니다. 실행 권한이 없으면 지정 담당자에게 즉시 이관하며, 읽기 전용 AI 점검에 변경 권한이 생기는 것은 아닙니다. 전체 서비스를 내려야 하는지는 확인된 영향과 추가 확산 위험을 근거로 별도 판단합니다.\n2. **되돌릴 수 없는 데이터 변경 전에 증거를 보존합니다.** 최초 탐지 시각, 환경, 배포 버전, 안전한 `request_correlation_id`, 영향받은 기능과 결과를 기록하고 확인된 사실·미확인 범위·가설을 분리합니다.\n3. **원인과 복구 수단을 분기합니다.** 권위 있는 데이터 재조회와 변경 이력으로 데이터 손상인지, 인가 정책·구현 오류인지, 코드·설정·배포 문제인지 좁힌 뒤 데이터 복구·인가 수정·코드 또는 설정 수정 중 필요한 조치를 선택합니다. 불변식 위반만 보고 백업을 자동 복원하지 않습니다.\n4. **재개 전에 서로 다른 증거를 확인합니다.** 권위 데이터에서 현재 `confirmed <= capacity`, 활성 참가 중복 0건과 피해 정정 결과를 확인합니다. 이미 확인된 무권한 취소 사건의 이력은 보존하고, 당시 주체·권한·대상·변경 기록과 조치 이후 명시한 관찰 구간의 추가 위반 여부를 따로 봅니다. 현재 행 조회만으로 과거 인가를 증명하지 않습니다. 원인에 맞는 승인된 격리 회귀 시험에서 타인 취소의 거절·데이터 불변을 확인하고, 정원 경쟁 결함이면 같은 시작 장벽의 성공 1건·안전한 실패 1건·정원 불변식·부분 저장 0건을 재확인합니다. 그 뒤 승인된 가상 값으로 공개 조회·참가·자기 취소 smoke와 안전한 로그를 확인하고, 지정 담당자가 재개 권한·런북의 종료 기준에 따라 제한 해제를 결정합니다. 정상 smoke만으로 인가·동시성 회귀를 대신하지 않습니다.\n\n## 이 저장소에서는 무엇을 관찰할 수 있나요"
      ],
      [
        "\n여러 설정과 파일을 동시에 바꾸면 어떤 조치가 효과가 있었는지 잃습니다. 긴급 상황에서도 변경 단위를 작게 하고 실행자·시각·대상·예상 효과·되돌리기 방법을 남깁니다. 비밀과 개인정보를 상황 공유 문서에 복사하지 않습니다.\n\nNIST SP 800-61 Rev. 3은 2025년 4월 최종본으로, 인시던트 대응을 별도 순간 작업이 아니라 조직의 사이버보안 위험 관리 활동에 통합하고 탐지·대응·복구와 지속 개선을 연결합니다. 이 문서는 미국 연방 정보 시스템 중심의 사이버보안 지침이므로 모든 장애의 의무 절차나 조직 구조로 일반화하지 않고, 이 장에서는 사실·가설 분리, 영향 안정화, 복구 검증과 학습의 근거 범위로만 사용합니다.\n\n### 런북과 사후 검토",
        "\n여러 설정과 파일을 동시에 바꾸면 어떤 조치가 효과가 있었는지 잃습니다. 긴급 상황에서도 변경 단위를 작게 하고 실행자·시각·대상·예상 효과·되돌리기 방법을 남깁니다. 비밀과 개인정보를 상황 공유 문서에 복사하지 않습니다.\n\nNIST SP 800-61 Rev. 3은 2025년 4월 최종본으로, 인시던트 대응을 별도 순간 작업이 아니라 조직의 사이버보안 위험 관리 활동에 통합하고 탐지·대응·복구와 지속 개선을 연결합니다. 분야·규모와 관계없이 대부분의 조직이 활용하도록 작성된 사이버보안 인시던트 대응 지침입니다. 모든 일반 장애의 강제 절차나 자동 법적 의무로 일반화하지 않으며, 이 장에서는 사실·가설 분리, 영향 안정화, 복구 검증과 학습의 근거로 사용합니다.\n\n### 런북과 사후 검토"
      ],
      [
        "\n1. 소유 계정·권한과 도메인·인증서 관리 접근\n2. 애플리케이션 소스·잠금 파일·빌드와 인프라 설정\n3. 비밀 자체가 아닌 비밀 관리 위치·회전·재발급 절차\n4. 데이터베이스·객체 파일·검색 인덱스와 외부 시스템 상태\n5. 데이터 스키마·마이그레이션 버전과 애플리케이션 호환성\n6. 배포 아티팩트 또는 재현 가능한 빌드 입력\n7. 실제 사용자 흐름과 데이터 정확성을 확인할 검증 절차\n\n백업 범위에는 데이터뿐 아니라 복구에 필요한 메타데이터·설정·스키마와 권한이 포함될 수 있습니다. 반대로 비밀값을 편의를 위해 일반 백업이나 Git 저장소에 복사하면 새로운 유출 경계를 만듭니다. 비밀 관리 시스템이 사라졌을 때 회전하거나 다시 발급받는 절차를 설계합니다.\n\n## 복원 시험이 백업의 증거입니다",
        "\n1. 소유 계정·권한과 도메인·인증서 관리 접근\n2. 애플리케이션 소스·잠금 파일·빌드와 인프라 설정\n3. 비밀 관리 위치, 재발급 가능한 자격의 회전·폐기·사용 주체 전환 절차와 과거 암호문에 필요한 키·버전의 보호·복구 체계\n4. 데이터베이스·객체 파일·검색 인덱스와 외부 시스템 상태\n5. 데이터 스키마·마이그레이션 버전과 애플리케이션 호환성\n6. 배포 아티팩트 또는 재현 가능한 빌드 입력\n7. 실제 사용자 흐름과 데이터 정확성을 확인할 검증 절차\n\n백업 범위에는 데이터뿐 아니라 복구에 필요한 메타데이터·설정·스키마와 권한이 포함될 수 있습니다. 비밀값을 편의를 위해 일반 문서·무차별 백업·Git 저장소에 복사하지 않습니다. API 토큰처럼 재발급 가능한 접근 자격은 새 값으로 전환한 사용 주체의 동작과 이전 값의 폐기를 검증합니다.\n\n기존 백업의 암호문을 해독하는 키는 새 키 발급만으로 대체할 수 없습니다. 필요한 키·키 버전·복구 재료를 승인된 전용 보관·복구 체계에서 보호하고, 보존해야 할 이전 백업을 실제로 해독할 수 있는지 격리 시험합니다. 비밀 관리 서비스나 주 접근 계정을 잃는 상황도 복구 절차에 포함합니다. 관리형 키의 내보내기·복구 가능 여부는 제품·계정별 공식 조건과 시험으로 확인하며, 키를 임의로 추출하거나 일반 백업에 복사하라는 뜻은 아닙니다.\n\n## 복원 시험이 백업의 증거입니다"
      ],
      [
        "- [ ] 백업이 원본의 계정·권한·삭제·공격 경계에서 적절히 분리됩니다.\n- [ ] 암호화·접근 통제·보존·만료와 개인정보 삭제 정책을 확인했습니다.\n- [ ] 데이터·스키마·설정·권한과 외부 상태의 복구 순서를 정했습니다.\n- [ ] 비밀을 백업에 복사하는 대신 회전·재발급 절차가 있습니다.\n- [ ] 격리된 환경에서 최신 및 필요한 이전 시점의 복원을 시험했습니다.\n- [ ] 복구 뒤 핵심 사용자 흐름·권한·데이터 정확성을 확인했습니다.\n- [ ] 실제 복구 시점과 소요 시간이 RPO·RTO를 충족하는지 측정했습니다.",
        "- [ ] 백업이 원본의 계정·권한·삭제·공격 경계에서 적절히 분리됩니다.\n- [ ] 암호화·접근 통제·보존·만료와 개인정보 삭제 정책을 확인했습니다.\n- [ ] 데이터·스키마·설정·권한과 외부 상태의 복구 순서를 정했습니다.\n- [ ] 재발급 가능한 자격은 회전·사용 주체 전환·이전 값 폐기를 검증하며 일반 문서·Git·무차별 백업에 복사하지 않습니다.\n- [ ] 과거 암호문에 필요한 키·버전·복구 재료를 승인된 전용 체계에서 보호하고, 비밀 관리 서비스나 주 접근 계정 상실을 가정해 필요한 이전 백업의 해독 가능성을 시험합니다.\n- [ ] 격리된 환경에서 최신 및 필요한 이전 시점의 복원을 시험했습니다.\n- [ ] 복구 뒤 핵심 사용자 흐름·권한·데이터 정확성을 확인했습니다.\n- [ ] 실제 복구 시점과 소요 시간이 RPO·RTO를 충족하는지 측정했습니다."
      ],
      [
        "- [NIST SP 800-61 Rev. 3 최종본](https://csrc.nist.gov/pubs/sp/800/61/r3/final)\n- [NIST SP 800-34 Rev. 1 최종본](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final)\n- [CISA StopRansomware Guide](https://www.cisa.gov/resources-tools/resources/stopransomware-guide)\n\n2026-08-13에 Google SRE Book의 조직 실무 범위, 2025년 4월 최종 NIST SP 800-61 Rev. 3, 2010년 최종 NIST SP 800-34 Rev. 1과 CISA의 현재 랜섬웨어 대응 지침을 확인했습니다. 이 자료는 SLI·SLO·오류 예산·행동 가능한 알림, 인시던트 안정화·복구·학습, RPO·RTO와 분리 백업·복원 시험의 교육 범위만 뒷받침합니다. Google 조직 사례를 업계 표준이나 SLA로, 미국 연방·랜섬웨어 지침을 모든 조직의 의무 절차로, 계획과 백업 생성을 실제 복구 성공으로 확대하지 않습니다. 실제 계약·공급자·저장소·데이터베이스·배포 환경을 선택할 때는 해당 현재 공식 정책과 승인된 복원 증거를 다시 확인해야 합니다.",
        "- [NIST SP 800-61 Rev. 3 최종본](https://csrc.nist.gov/pubs/sp/800/61/r3/final)\n- [NIST SP 800-34 Rev. 1 최종본](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final)\n- [CISA StopRansomware Guide](https://www.cisa.gov/resources-tools/resources/stopransomware-guide)\n- [OWASP Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)\n\n2026-08-13에는 Google SRE Book, NIST SP 800-61 Rev. 3, SP 800-34 Rev. 1과 CISA 지침을 확인했습니다. 2026-11-15에는 이 장에 적용한 공식 본문을 다시 대조하고 적용 대상을 정정했습니다. SP 800-61r3는 대부분의 조직을 위한 사이버보안 인시던트 지침, SP 800-34r1은 미국 연방 정보 시스템의 비상 계획 지침, CISA 자료는 랜섬웨어 대응 지침입니다. Google의 조직 실무를 업계 표준이나 고객 SLA로, 이 지침들을 모든 장애의 법적 의무나 실제 복구 성공으로 확대하지 않습니다. OWASP의 같은 날 확인한 키 회전·보관 설명은 과거 백업 해독에 필요한 키의 보호 근거로 추가했으며 특정 제품의 키 복구 기능을 확인한 것은 아닙니다. 실제 계약·공급자·저장소·데이터베이스·배포 환경을 선택할 때는 해당 현재 공식 정책과 승인된 복원 증거를 다시 확인해야 합니다. 과거 적용 범위 설명은 출처 지도의 역사 기록과 R10 최초 검토에 보존합니다."
      ]
    ]
  },
  {
    "path": "CONTENT_MAP.md",
    "before": "c7b5eca1e4a79590e490b8c786599d2bb32e8072f16c9e02c841433bf73f75b4",
    "after": "864d6c58af6bc9ad755c2aa312b6356d0986feab452f7e4b0e47f3110c510486",
    "replacements": [
      [
        "|---|---:|---:|---|\n| [디버깅과 관측 가능성](src/content/docs/08-quality/debugging-observability.md) | `draft` | 10,461 | `/08-quality/debugging-observability/` |\n| [8. 품질과 안전](src/content/docs/08-quality/index.md) | `draft` | 827 | `/08-quality/` |\n| [성능과 보안](src/content/docs/08-quality/performance-security.md) | `draft` | 12,749 | `/08-quality/performance-security/` |\n| [테스트 전략](src/content/docs/08-quality/testing-strategy.md) | `review` | 18,834 | `/08-quality/testing-strategy/` |\n\n### 9. Git과 GitHub",
        "|---|---:|---:|---|\n| [디버깅과 관측 가능성](src/content/docs/08-quality/debugging-observability.md) | `draft` | 10,461 | `/08-quality/debugging-observability/` |\n| [8. 품질과 안전](src/content/docs/08-quality/index.md) | `draft` | 827 | `/08-quality/` |\n| [성능과 보안](src/content/docs/08-quality/performance-security.md) | `draft` | 12,805 | `/08-quality/performance-security/` |\n| [테스트 전략](src/content/docs/08-quality/testing-strategy.md) | `review` | 18,834 | `/08-quality/testing-strategy/` |\n\n### 9. Git과 GitHub"
      ],
      [
        "| [빌드·배포·도메인·DNS](src/content/docs/10-deployment-operations/build-deploy-domain-dns.md) | `review` | 18,070 | `/10-deployment-operations/build-deploy-domain-dns/` |\n| [환경 변수와 설정](src/content/docs/10-deployment-operations/environment-variables-config.md) | `draft` | 9,885 | `/10-deployment-operations/environment-variables-config/` |\n| [10. 배포와 운영](src/content/docs/10-deployment-operations/index.md) | `draft` | 897 | `/10-deployment-operations/` |\n| [로그·모니터링·백업](src/content/docs/10-deployment-operations/logs-monitoring-backup.md) | `draft` | 19,840 | `/10-deployment-operations/logs-monitoring-backup/` |\n\n### 11. AI 네이티브 개발",
        "| [빌드·배포·도메인·DNS](src/content/docs/10-deployment-operations/build-deploy-domain-dns.md) | `review` | 18,070 | `/10-deployment-operations/build-deploy-domain-dns/` |\n| [환경 변수와 설정](src/content/docs/10-deployment-operations/environment-variables-config.md) | `draft` | 9,885 | `/10-deployment-operations/environment-variables-config/` |\n| [10. 배포와 운영](src/content/docs/10-deployment-operations/index.md) | `draft` | 897 | `/10-deployment-operations/` |\n| [로그·모니터링·백업](src/content/docs/10-deployment-operations/logs-monitoring-backup.md) | `draft` | 21,027 | `/10-deployment-operations/logs-monitoring-backup/` |\n\n### 11. AI 네이티브 개발"
      ]
    ]
  },
  {
    "path": "research/source-map.md",
    "before": "239b9effb98ee279af319c4f884dd1743874ae3ca9df2cd1c9a941b39a174499",
    "after": "9e63fd76f65c11c565b00beb1945383059dc87c25a2c8c5a6a28dfdbe7554ffd",
    "replacements": [
      [
        "# 출처 지도\n\n2026-11-15 R09 현재 적용 보충: [빌드·배포 직접 근거](public-beta-review-source-excerpts/r09-build-deploy-2026-11-15.md)의 공식8URL 관련 본문을 확인했습니다. RFC8499는 RFC9499로 대체됐으며 현재 DNS 용어의 TTL·recursive resolver·authoritative server 범위는 후속 문서에 연결합니다. RFC1034·9110의 기본 이름/HTTPS 경계, Astro·GitHub Pages의 site/base·정적 artifact·workflow·환경 변수 범위를 확인했지만 실제 CI·배포·DNS·TLS·공개 URL 성공은 주장하지 않습니다. 아래8월13일 RFC8499 확인과 제품 표의 과거 날짜·실패는 역사로 유지합니다. Action 예제 버전 차이는 최신 릴리스·교체 필요의 근거로 쓰지 않으며 Vercel·Sites는 이번 현재 기능 확인 대상이 아닙니다. R09 수정과 감사 정정은 같은 저장 reviewer 후속 PASS C0/I0/M0으로 해소했습니다. review 전이는 R09 controller closeout에 연결하며 ready·공개 승인을 뜻하지 않습니다.\n\n2026-11-15 R08 현재 적용 보충: [Git·GitHub 직접 근거](public-beta-review-source-excerpts/r08-git-github-2026-11-15.md)의 공식 reference·Pro Git 세 본문·GitHub PR/Actions 확인을 Git 상태·비교·전송·협업 경계에 적용합니다. status의 untracked 표시 설정, 첫 커밋 전 HEAD 부재, diff HEAD의 순변화, pull의 버전·옵션·설정 차이를 구분하고 로컬 merge와 GitHub PR 병합 및 PR 생성과 push 증거를 분리합니다. 원고의 승인 절차는 Git 내장 조건이 아닌 핸드북 안전 정책입니다. 실제 계정·원격 명령·GitHub UI·배포 실행은 확인하지 않았으며 아래 과거 확인일은 역사로 유지합니다. 원고와 지정 인접 문맥의 수정은 같은 저장 R08 reviewer 후속 PASS C0/I0/M0로 해소했으며 R21 전체 검토를 대체하지 않습니다. review 전이는 R08 controller closeout에 연결하고 ready·공개 승인을 뜻하지 않습니다.",
        "# 출처 지도\n\n2026-11-15 R10 현재 적용 정정: [운영 직접 근거](public-beta-review-source-excerpts/r10-operations-2026-11-15.md)의 공식10URL 관련 본문을 확인했습니다. NIST SP 800-61r3는 분야·규모와 관계없이 대부분의 조직을 대상으로 하며, SP 800-34r1의 미국 연방 정보 시스템 범위와 CISA의 랜섬웨어 범위를 분리합니다. 아래2026-08-13의 “미국 연방 중심”·묶음 범위 설명은 당시 해석으로 보존하고 현재 적용은 이 정정을 따릅니다. 같은 날 확인한 [OWASP 키 회전·보관 근거](public-beta-review-source-excerpts/r10-operations-key-recovery-2026-11-15.md)는 재발급 가능한 접근 자격과 과거 암호문에 필요한 키·버전의 복구를 구분하는 데만 적용합니다. 특정 제품·실제 운영·알림·복원·권한 또는 법적 의무를 확인한 것은 아닙니다. R10 수정과 인접 R20의 국소 사례 정렬은 같은 저장 reviewer 후속 검토 전까지 해소 완료로 처리하지 않습니다.\n\n2026-11-15 R09 현재 적용 보충: [빌드·배포 직접 근거](public-beta-review-source-excerpts/r09-build-deploy-2026-11-15.md)의 공식8URL 관련 본문을 확인했습니다. RFC8499는 RFC9499로 대체됐으며 현재 DNS 용어의 TTL·recursive resolver·authoritative server 범위는 후속 문서에 연결합니다. RFC1034·9110의 기본 이름/HTTPS 경계, Astro·GitHub Pages의 site/base·정적 artifact·workflow·환경 변수 범위를 확인했지만 실제 CI·배포·DNS·TLS·공개 URL 성공은 주장하지 않습니다. 아래8월13일 RFC8499 확인과 제품 표의 과거 날짜·실패는 역사로 유지합니다. Action 예제 버전 차이는 최신 릴리스·교체 필요의 근거로 쓰지 않으며 Vercel·Sites는 이번 현재 기능 확인 대상이 아닙니다. R09 수정과 감사 정정은 같은 저장 reviewer 후속 PASS C0/I0/M0으로 해소했습니다. review 전이는 R09 controller closeout에 연결하며 ready·공개 승인을 뜻하지 않습니다.\n\n2026-11-15 R08 현재 적용 보충: [Git·GitHub 직접 근거](public-beta-review-source-excerpts/r08-git-github-2026-11-15.md)의 공식 reference·Pro Git 세 본문·GitHub PR/Actions 확인을 Git 상태·비교·전송·협업 경계에 적용합니다. status의 untracked 표시 설정, 첫 커밋 전 HEAD 부재, diff HEAD의 순변화, pull의 버전·옵션·설정 차이를 구분하고 로컬 merge와 GitHub PR 병합 및 PR 생성과 push 증거를 분리합니다. 원고의 승인 절차는 Git 내장 조건이 아닌 핸드북 안전 정책입니다. 실제 계정·원격 명령·GitHub UI·배포 실행은 확인하지 않았으며 아래 과거 확인일은 역사로 유지합니다. 원고와 지정 인접 문맥의 수정은 같은 저장 R08 reviewer 후속 PASS C0/I0/M0로 해소했으며 R21 전체 검토를 대체하지 않습니다. review 전이는 R08 controller closeout에 연결하고 ready·공개 승인을 뜻하지 않습니다."
      ]
    ]
  },
  {
    "path": "src/content/docs/08-quality/performance-security.md",
    "before": "1a04872010e7ca3d2d0d31a87917fd7dee330e6dc5bc7ecfc456359f5bd38b4d",
    "after": "3205765211050b45bf34af36fcf4942b12840a5189d356e83b4058adae106269",
    "replacements": [
      [
        "\n### 자산·위협·경계 확인\n\n보호 자산은 계정 신원, 참가 관계, 연락 정보, 모임 정원과 취소 권한, 서비스 가용성입니다. 브라우저↔서버, 서버↔데이터베이스, CI↔배포 환경, 외부 알림 서비스 경계를 그립니다. 가능한 위협은 다른 사용자의 참가 취소, 조작한 정원 값, 동시 요청으로 인한 초과 참가, 로그의 토큰 노출, 취약한 알림 의존성입니다.\n\n통제는 위협과 직접 연결합니다. 서버는 매 요청에서 현재 사용자와 대상 모임의 권한을 확인하고, 참가 입력의 형식·업무 상태를 검증하며, 데이터베이스 불변식과 트랜잭션으로 정원을 보호합니다. 알림 서비스 자격은 필요한 환경·행동으로 제한하고 브라우저나 로그에 전달하지 않습니다. 의존성 버전·출처와 업데이트 결과를 기록하며, 기능 제한·안전 버전 전환·잘못된 상태 판정과 복구 절차를 둡니다.\n\n### 완료 증거",
        "\n### 자산·위협·경계 확인\n\n보호 자산은 계정 신원, 참가 관계, 연락 정보, 모임 정원과 취소 권한, 서비스 가용성입니다. 브라우저↔서버, 서버↔데이터베이스, CI↔배포 환경의 경계를 그립니다. 가능한 위협은 다른 사용자의 참가 취소, 조작한 정원 값, 동시 요청으로 인한 초과 참가, 로그의 토큰 노출, 취약한 인증 의존성입니다. 참가자에게 보내는 제품 알림은 첫 프로젝트의 비목표이며, 담당자에게 장애를 알리는 운영 경보와 다릅니다.\n\n통제는 위협과 직접 연결합니다. 서버는 매 요청에서 현재 사용자와 대상 모임의 권한을 확인하고, 참가 입력의 형식·업무 상태를 검증하며, 데이터베이스 불변식과 트랜잭션으로 정원을 보호합니다. 서버의 데이터베이스 접근 자격은 필요한 환경·행동으로 제한하고 브라우저나 로그에 전달하지 않습니다. 의존성 버전·출처와 업데이트 결과를 기록하며, 기능 제한·안전 버전 전환·잘못된 상태 판정과 복구 절차를 둡니다.\n\n### 완료 증거"
      ]
    ]
  }
];
export function r10PreFixBytes(path,bytes){
 bytes=r10PreCloseoutBytes(path,bytes);
 const e=r10FixTransitions.find(x=>x.path===path);if(!e||sha(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R10 reversal not unique');text=text.replace(after,before);}
 if(sha(text)!==e.before)throw Error('R10 historical bytes mismatch');return Buffer.from(text);
}
export function validateR10Current(read){const errors=[];for(const e of r10FixTransitions){try{if(sha(r10PreCloseoutBytes(e.path,read(e.path)))!==e.after)errors.push('R10 current patch mismatch: '+e.path)}catch{errors.push('R10 current patch missing: '+e.path)}}return errors;}
