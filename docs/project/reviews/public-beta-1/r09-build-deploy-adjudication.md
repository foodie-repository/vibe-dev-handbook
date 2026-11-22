# R09 최초 결과와 controller 재판정

## 현재 판정 — Fix1과 기록 Minor 모두 해소

같은 저장 reviewer의 [Fix1 결과](r09-build-deploy-codex-rereview.md)는 기존 R09-I01/I02/A-I01/M01/M02/M03과 controller V01을 모두 RESOLVED로 판정했습니다. 현재 원고는 PASS C0/I0/M0·18/18·치명0, 코드·테스트도 PASS C0/I0/M0입니다. 최초 NEEDS CHANGES와 아래 수정 전 OPEN 표는 역사이며 소급 변경하지 않습니다. Fix1 기록 당시에는 대상 원고 draft와 controller closeout 미완료를 유지했습니다. 이후 상태 전이와 행 완료 판단은 r09-controller-closeout.md에 연결합니다.

신규 R09-CO-M01은 수용했습니다. 공개 기록의 전체 실행 세션 식별자만 범주형 설명으로 바꾸고 실제 복구 식별자는 로컬 진행 원장·raw에 보존합니다. 원고·그림·코드·최초 판정은 불변이며 [같은 reviewer의 기록 후속](r09-metadata-rereview.md)이 RESOLVED/PASS C0/I0/M0으로 확인했습니다. 공개 기록의 위치 링크6개 정규화는 Fix1 reviewer가 정확한 변환으로 수용했습니다.

기록 후속 raw는 로컬 r09-metadata-fix-events-1794719125969.jsonl, payload SHA1ede343dfa14e6611c44c6a49a6819a122979ada01c5ccea72dc3456b9387843, 응답 SHA06ee99feb901c5e4cab07477696dce445369a1d2742ea96ea323b1d9487b7f20입니다. 같은 저장 세션 history2와 최초·Fix1 응답 복구, 실제astra/high·읽기 전용·구독 경계를 확인했고4파일5청크PNG0의 전달·불변성 감사는 errors0/exit0입니다. 전체 원고·그림·테스트·빌드 재실행 없이 기록 변경만 확인했습니다. 기록 후속에서 남은 R09 finding은 C0/I0/M0입니다. 당시 draft와 closeout 미완료를 유지했으며 이후 review 전이는 r09-controller-closeout.md를 따릅니다.

Fix1 raw는 로컬 r09-fix-round-1-events-1794718657584.jsonl, payload SHA0c517e0da6efe663f0ba30fa7b461a7aa4b4c719c300fe6d4b65f8e0dc7627d6, 응답 SHAec9c32889eee034affbaa0c98f3cd47ec3cd839a4553b863c38d80f74a05b21a입니다. 실제 같은 세션·history1·원응답 복구·astra/high/readOnly/구독 경계를 확인했고21파일41청크/실제PNG9·사후감사errors0/exit0입니다. 전체255·wrap후집중10/build60·최종2테마검증은 재사용합니다. 응답 수신 후 새 원고·그림·빌드 검증을 반복하지 않았습니다.

## 최초 판정의 역사

2026-11-15 기준 최초 원고·감사 판정은 NEEDS CHANGES C0/I3/M3, 핵심 원고15/18·치명0입니다. 대상 원고 I2/M3와 시각 감사 I1을 구분하며 준비 검사기·테스트는 PASS C0/I0/M0·준비6파일 체크포인트 적합으로 판정됐습니다. 이 준비 PASS를 원고 PASS나 review·M5·ready·공개 승인으로 확대하지 않습니다. [최초 결과](r09-build-deploy-codex-review.md)는 아래 위치 링크 정규화 외 응답 내용을 그대로 보존합니다.

## 공개 기록의 위치 메타데이터 정규화

첫 결과 저장 후 공개 안전 검사는 개인 홈 경로가 들어간 위치 링크6개를 발견하여 exit1/finding6이었고 커밋하지 않았습니다. 로컬 raw 원응답은 불변으로 보존하고 공유 정본의 링크6개만 저장소 상대 경로로 바꿨습니다. 감사 파일 링크의 원래 행번호40은 로컬 원응답에 남아 있으며 finding의 인용·내용·심각도·판정·관측은 바꾸지 않았습니다. 원응답 SHAe47de9cc0aaefba5fd891b77c4dcefc94c1021e547d64fcfb46a982f3bff2f44, 정규화된 정본 파일 SHA3d4424c8733c5261a5bac6a2ec56caea3f2d4a7a49c361537f20de3a0a2fd88c입니다. 로컬 r09-location-normalization-evidence.json은 정확히6개 링크 변환과 나머지 본문 일치·개인 홈 경로 잔존0을 exit0으로 확인했습니다. 같은 reviewer의 후속 확인에도 이 대응을 전달하며 원문과 정본의 SHA가 같다고 주장하지 않습니다.

## 실제 실행과 전달 감사

기준 HEAD a5c8d16de3f242a63d11370e14713f0b862708f5, fresh로 시작한 동일 저장 reviewer이며 실제 이력을 복구했습니다. 최초history0·ephemeralfalse, 실제gpt-6-astra/high·openai·readOnly/networkfalse·approvalnever입니다. 공식 ChatGPT 구독 경로와 추가creditsfalse를 실행 전에 확인했고 전역 설정·인증 변경, API키 경로·외부 쓰기·도구 사용·위임은 없었습니다. 같은 저장 세션을 후속에 사용하며 R02 승계 예외를 적용하지 않습니다.

고정 텍스트18개와 보충5개를36청크로, 원본PNG18개를 localImage/detail original로 실제 전달했습니다. raw는 로컬 원장의 r09-actual-review-events-1794717273504.jsonl, payload SHA79a061b6aae23f6d5d86778e1eac7d90f25c70d734ba7d043a7931f3f46e56ae, 최종 응답 SHAe47de9cc0aaefba5fd891b77c4dcefc94c1021e547d64fcfb46a982f3bff2f44입니다. controller가 응답 후 실제 userMessage의 전체 텍스트 복원·이미지 순서/경로/해시·프로필·도구 미사용·고정 입력 불변성·completed를 감사하여 errors0/exit0을 확인했습니다. reviewer의 이미지별 실제 관측은 최초 결과에 있고 전송 감사와 별개입니다. 원본PNG·raw는 로컬 전용이며 커밋만으로 전달되지 않습니다.

## finding 재판정 — 수정 전 OPEN

| ID | 판정 | 근거와 최소 수정 | 상태 |
|---|---|---|---|
| R09-I01 | 수용 | 현재 DNS 용어 기준 RFC9499와8499 대체 관계를 원고·source-map에 연결하고8월13일 역사는 보존합니다. | OPEN |
| R09-I02 | 수용 | 배포·설정 쓰기 승인과 기존 환경의 읽기 검증 허용을 분리합니다. 읽기 전용 지시에서는 기존 빌드 결과 확인과 새 빌드 실행도 구분합니다. | OPEN |
| R09-A-I01 | 수용 | 과거 시각 감사 문장은 보존하고 현재 정정으로 실선 S→B→A→H→U, 점선 D→U를 명시합니다. 올바른 SVG/Mermaid는 바꾸지 않습니다. | OPEN |
| R09-M01 | 수용 | 예시 URL의 /project-name/과 자산 경로를 일치시킵니다. 실제 site/base 설정은 유지합니다. | OPEN |
| R09-M02 | 수용 | 항목을 authoritative nameserver로 정확히 한정하고 zone 역할을 설명합니다. | OPEN |
| R09-M03 | 수용 | 제품 매핑의 확인일·재확인 실패·명칭·적용 한계를 참고하도록 안내합니다. 새 제품 조사·확인일 갱신·confirmed 승격은 하지 않습니다. | OPEN |

입력 준비253/253·집중5/5·localerrors0·기존build60재사용·release402finding0·exactHEAD+index402차이0의 범위는 [준비 보고서](r09-input-preparation-report.md)에 연결합니다. 원고 수정·영향 범위 자동/실제 렌더 검증·같은 reviewer 후속 판정·controller closeout은 아직 미완료입니다. 기존 그림18개 검토와 변경 없는 범위는 재사용합니다. R10 이후·M5 전체·ready·공개 승인·push·배포는 완료하지 않았습니다.
