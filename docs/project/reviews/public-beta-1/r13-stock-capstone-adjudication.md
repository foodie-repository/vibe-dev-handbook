# R13 최초 finding 재판정 — Fix Round 1 후보

## Fix Round 1 최종 재판정

같은 저장 reviewer가 [별도 후속 정본](r13-stock-capstone-fix-round-1.md)에서 R13-I01~I04·M01~M02·P-M01을 각각 RESOLVED로 판정했습니다. controller는 변경 원문·전후 해시·실제 이미지·검사 범위와 대응을 대조해 모두 수용합니다. 현재 미해결 C0/I0/M0, 원고 18/18·치명0·검사 코드와 체크포인트 PASS입니다. 아래 표는 검토 전 후보 상태의 역사이며 최초 NEEDS CHANGES와 함께 보존합니다. Fix1은 09c3a49에 선별 커밋했습니다. 이후 R13의 review 전이와 controller closeout은 r13-controller-closeout.md에 연결합니다.

실행 exit0, 같은 세션 history1/최초 응답 SHA 복구, 실제 astra/high·readOnly/networkfalse·공식 ChatGPT 구독/추가 creditsfalse·도구0을 확인했습니다. 응답 SHA는 `94a48c8f9af48a552838ea69ac4c45e05d81a868ee2939dce4b6197c11b02134`, payload SHA는 `4342373f8c7e776e624bf065a0caf6190bc651cc25f627cb9378c8b097f64fce`입니다. 사후 감사에서 텍스트19파일48청크·원본 PNG50개의 전달 순서/해시·원문 복원·전후 불변성·실행 프로필을 확인했고 errors0·exit0입니다. 새50PNG 감사와 최초66항목/문맥9 검사를 구분했습니다. 원응답의 일본어 한 문장은 번역하거나 정본을 고치지 않고 원문 그대로 보존하며, 내용은 해시 재계산/역변환을 reviewer가 실행하지 않았다는 한계로 해석합니다.

최초 원고 검토는 NEEDS CHANGES C0/I4/M2·15/18·치명0이며 준비 코드 C0/I0/M0, 준비 자료 Minor1을 별도로 보존합니다. 준비 커밋 deb134d 뒤 최초 원응답은 f531429에서 원고 수정 전에 단독 커밋했습니다. 응답 SHA는 e60ca686dd50a1c8cb3e295921a25b61ffcd5352d0220a22a3bc22e1d8d24fcc, 정본 파일(raw+LF) SHA는340588c0dda151d9faaf5274fb0fbfa86e8d11b4bc514fee0b2d9c636336faae입니다. 실제23파일40청크·PNG48 전달과 응답 후 불변성 감사는 errors0·실행exit0이며 최초 판정을 소급 변경하지 않습니다.

| finding | 재판정과 최소 수정 | 현재 상태 |
|---|---|---|
| R13-I01 | 수용. 공개 추적 표만 D-01~D-05 요구별 소제목과 아홉 필드 목록으로 바꾸고 세부 내용을 유지합니다. 전역 CSS·다른 표·그림은 변경하지 않습니다. | 구현 후 새6상태 전 항목 판독·후속 검토 필요 |
| R13-I02 | 수용. 행 value_status, 묶음 refresh_candidate_status, 공개 버전 선택을 분리합니다. 기본6행은 지정 결측/경고를 포함한 warning 후보이며 계약 검사 후 전달 승인합니다. 행의 사유는 보존하고 수치만 제외합니다. 타입/키/미승인 변경 등 전체 차단은 별도 오라클입니다. final_value_status는 묶음 검토 판정이며 행 미해결을 우회하지 못합니다. | 원고·브리프 수정 후보, 독립 해소 미확정 |
| R13-I03 | 수용. D-05 오라클에서 자동 stale 결합을 제거하고 기대 전/이상/판정정보 없음에 current/stale/unknown을 구분합니다. 같은 차단 후보에서도 공개 digest는 그대로입니다. | 수정 후보, 독립 해소 미확정 |
| R13-I04 | 수용. 기본14필드·6행을 바꾸지 않고 타입·null·단위·열거/조합·고유성 범위를 좁게 고정합니다. 추가 실패 입력은 파생 시험으로만 사용합니다. 실제 시장 규칙·일반 스키마·새 패키지는 도입하지 않습니다. | 수정 후보, 독립 해소 미확정 |
| R13-M01 | 수용. 기존 missing_reason 헤더는 유지하고 경고/차단/검토 사유까지 담는 사례 한계를 명시합니다. late_source와 stale은 별도입니다. | 수정 후보, 독립 해소 미확정 |
| R13-M02 | 수용. 공식4개 URL을 공개 출처에 연결하고 새 확인을 source-map의 별도 항목으로 남깁니다. 과거 확인일·PBSG-019/026·실제 구현/권리 미확인 경계는 유지합니다. | 수정 후보, 독립 해소 미확정 |
| R13-P-M01 | 수용. 고정 최초 요청·manifest는 수정하지 않고 아래 정정 관계를 후속 입력으로 제공합니다. 이미지 자체·ID·SHA·순서는 불변입니다. | 정정 후 같은 reviewer 확인 필요 |

## 관측 포인터 정정

최초 요청의 PNG-41~48에 있는 pilot 관측 포인터는 잘못됐습니다. 올바른 파일은 `output/playwright/r13-table-remaining-20261115/observations.json`이며 최초 요청의 additional_context_manifests에 이미 SHA가 고정돼 있습니다. PNG-37~40은 pilot 관측 파일이 맞습니다.

| 이미지 ID | 해당 remaining 상태·캡처 |
|---|---|
| R13-PNG-41 / 42 | 1440×1000 dark, left / right |
| R13-PNG-43 / 44 | 1024×768 light, left / right |
| R13-PNG-45 / 46 | 1024×768 dark, left / right |
| R13-PNG-47 / 48 | 390×844 light, left / right |

후속 검사는 이미지 경로가 해당 상태의 paths에 포함되고 폭·테마·해시가 고정 목록과 같은지 대조합니다. 바이트 불변 검사가 의미상 올바른 포인터를 자동 보장한다고 주장하지 않습니다.

영향은 원고 의미·추적 표 레이아웃·사례 계약·출처 링크·CONTENT_MAP과 역사 입력 전이 검사입니다. 그림/CSS/기본CSV·과거 결과는 불변입니다. 기존48이미지 전체 검토는 불변 그림·문맥에 재사용하고, 새 본문·표에는 새 빌드와 대표 먼저의6상태 직접 판독을 수행합니다. 후속 입력은 같은 저장 reviewer의 실제 원응답 복구, 변경 diff·전후SHA·필요 문맥·검증 결과·새이미지에 한정합니다. 현재 해소 PASS·review·M5·ready·공개 승인은 주장하지 않습니다.
