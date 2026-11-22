# R10 최초 검토 재판정과 Fix Round 1

## 현재 판정 — Fix1 해소와 controller closeout 연결

같은 저장 reviewer의 [후속 검토](r10-operations-codex-rereview.md)는 PASS C0/I0/M0·18/18·치명0이며 코드도 PASS C0/I0/M0·선별 체크포인트 적합입니다. I01·I02·I03·M01·M02·M03 모두 RESOLVED로 재판정합니다. 원고2개와 코드·근거의 고정19파일44청크, 실제 PNG44개를 읽었으며 history1·최초 응답 복구·실제 astra/high·읽기 전용·도구 없음·공식 ChatGPT 구독/creditsfalse를 확인했습니다. 응답 SHA는fac688d51e3778f29471ff493bac88e5ddd421ca6eb4eaa39e880be7b3151794, payload는a8a08084ac0c1e79aa5cd699f80ff33facb21601e991c243786dbf86951b17bd입니다. 응답 뒤 전달·파일/PNG 불변성·실행 조건 감사는 errors0/exit0이고 원본 결과를 마지막 LF만 더해 보존했습니다.

후속 검토는 아래 최초 수용 판단과 실제 변경의 의미·해시·렌더를 대조했고 추가 finding은 없습니다. 모바일 표는 내부 스크롤이 있는 것으로 판단하며 전체 폭 동시 표시는 주장하지 않습니다. 8월29일로 표시된 하단 업데이트 날짜는 현재 수정일의 증거가 아니며 최종 커밋 후 날짜 생성 근거와 하단만 좁게 확인합니다. R20 두 문단의 국소 해소와 R20 전체/R12 미완료를 구분합니다. Fix1 당시 R10 원고 draft·행렬pending을 유지했고, 이후 review 전이와 R10 완료 판단은 r10-controller-closeout.md에 연결합니다. 최초 NEEDS CHANGES와 다음의 수정 전·후속 대기 문장은 당시 기록입니다.

## 최초 수용과 수정 후보 기록

기준 입력 commit은6341d7d9555f0102329461e9310e69048a2bd733이며 [최초 실제 원고 검토](r10-operations-codex-review.md)의 NEEDS CHANGES C0/I3/M3·15/18·치명0을 보존합니다. 준비 코드는 별도로 PASS C0/I0/M0을 받아6파일만 이 commit에 보존했습니다. 원고 통과나 review 전이는 아직 아닙니다.

Fresh 저장 gpt-6-astra/high·history0·읽기 전용·도구 미사용·공식 ChatGPT 구독/추가creditsfalse를 확인한 뒤25파일38청크·실제PNG18을 전달했습니다. 응답 뒤 전달/프로필/입력 불변성 감사는 errors0/exit0입니다. 원 응답 SHA는9e67e3defe0f881cfaca383d3c94b5f7757c99033cd7ee9aa26f247a2bde8336, payload는8337dd83161c28239ccf558ef9fcd9c65381f0c3e64a86adf5a8b7f65397a789이며 정본은 원 응답에 마지막 줄바꿈만 추가했습니다. 복구용 실제 세션ID와 raw는 로컬 전용 원장에 보존합니다.

| ID | Controller 판단 | 최소 반영 범위와 재확인 기준 |
|---|---|---|
| R10-I01 | 수용 | 재발급 가능한 접근 자격과 과거 암호문에 필요한 키·버전·복구 재료를 본문3곳/체크리스트에서 구분합니다. 일반 문서·Git·무차별 백업 금지를 유지하고 승인된 전용 체계·계정 상실·격리 해독 시험을 연결합니다. 새 OWASP 직접 근거로 대조하며 제품별 기능은 단정하지 않습니다. |
| R10-I02 | 수용 | 61r3의 대부분 조직 대상, 34r1의 미국 연방 시스템 범위, CISA의 랜섬웨어 범위를 분리합니다. source-map의 과거 행은 보존하고 현재 정정 문단을 추가합니다. 원고의 과거 확인일과 현재 확인일도 구분합니다. |
| R10-I03 | 수용 | 현재 정원·활성 중복·피해 정정, 보존된 과거 인가 사고와 명시 관찰 구간의 추가 위반, 원인별 인가 부정/동시성 회귀, 승인된 smoke·재개 결정을 구분합니다. 과거 사고0건이나 정상smoke만으로 재개하지 않습니다. |
| R10-M01 | 수용 | 최소 제한을 사전 승인된 담당자·런북 권한에 연결하고 권한 없으면 이관합니다. 읽기 전용 AI에 변경 권한을 부여하지 않습니다. |
| R10-M02 | 수용 | 그림 앞 실선 단계와7→1점선 관찰 안내 한 문장 묶음을 추가하되 직렬 의무가 아님을 유지합니다. SVG/Mermaid는 불변입니다. |
| R10-M03 | 수용 | 인접 performance-security의 두 문단만 현재 인증·DB·배포 경계로 정렬하고 제품 사용자 알림과 운영 경보를 구분합니다. R20 전체와 R12 전체 검토는 여전히 미완료입니다. |

현재 여섯 finding은 수정 후보이며 같은 reviewer 후속 판정 전에는 RESOLVED로 처리하지 않습니다. 원고2개·CONTENT_MAP·source-map의 정확한 전후 해시/치환은 scripts/r10-fix-transition.mjs에 연결합니다. 새 [키 복구 근거](../../../../research/public-beta-review-source-excerpts/r10-operations-key-recovery-2026-11-15.md)는 최초 고정 근거를 덮어쓰지 않습니다. 필요한 자동 검사·변경 문맥의6상태 렌더·직접 PNG 판독·같은 저장 세션의 이력 복구와 후속 검토가 남았습니다. 기존 전체 원고/그림 검토는 변경 없는 범위에서 재사용하고 R10 draft·행렬pending·M5/ready/RC/공개 미완료를 유지합니다.
