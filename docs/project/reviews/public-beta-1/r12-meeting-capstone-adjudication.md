# R12 최초 검토 재판정과 Fix Round 1

준비6파일은d44d4dd38f773a754a6ab81a36d1e86282477b9c, 최초 검토 정본 한 파일은49f3c22ee73fbbd7e996ebd92861c3f5fc67e162에 원고 수정 전에 분리 커밋했습니다. [최초 결과](r12-meeting-capstone-codex-review.md)는 NEEDS CHANGES C0/I5/M3·15/18·치명0이고 준비코드만C0/I0/M0·체크포인트적합입니다. fresh저장gpt-6-astra/high·history0·읽기전용·도구미사용·공식ChatGPT구독/추가creditsfalse에서23파일37청크·실제PNG24를검토했고실행exit0·사후감사errors0/exit0입니다. 응답SHAe46587a2f12a0148ff079340213ff3ad3c7e5d7e35cddc606daed91a9733aca9·payload9e54d3c2ab52893910112e478142a2894611a4c35ea0d4ad880544ff193ef819, 정본/index/raw+LF동일과공개안전459finding0·diffcheck0을확인했습니다. 실제저장세션과raw는로컬원장에보존합니다.

| ID | 판정 | 최소 수정과 확인 |
|---|---|---|
| R12-I01 | 수용 | 10열 표의 모든 정보를 W별 제목과 항목 목록으로 바꿉니다. CSS·다른 표·사이트 디자인은 유지합니다. 세 폭·양테마에서 다섯 묶음 전체를 읽고 정보 누락·가로 넘침·키보드 순서를 확인합니다. 가로 표가 없어지므로 불필요한 전용 스크롤 위젯을 만들지 않습니다. |
| R12-I02 | 수용 | 교육용 GET 자기 참가 상태 계약을 정의하고 자기 관계/모임 상태/미신청·취소·확정과 조회 실패의 결과 불명, 타인 관계 차단을 원고·사례 브리프에 연결합니다. 구현 성공을 주장하지 않습니다. |
| R12-I03 | 수용 | 새 모임 open, 수동 closed, terminal cancelled, 재개 비목표를 명시합니다. 만석은 저장 상태가 아니라 정원 판정이며 모임 취소 때 참가 이력은 보존합니다. 자기 취소와 재참가 조건·유효 참가 여부를 구분합니다. |
| R12-I04 | 수용 | 연습의 외부 관측만으로 최종 상태를 단정하지 않게 하고, 통제 시험의 commit 후 응답 유실 조건에서는 서버 확정/실제 수신/전달 실패를 별도 오라클로 묻습니다. |
| R12-I05 | 수용 | 장벽만으로 교차 실행을 입증하지 않는 한계, 실제 DB·독립 연결의 경쟁 구간 통제/관측, 장애 없는 경쟁과 저장 중 실패·재시도 소진·응답 유실을 분리합니다. 해당 요청 부분 변경0과 타 요청 정상 확정 보존을 확인합니다. |
| R12-M01 | 수용 | 반복 자기 DELETE는 이미 취소 상태를 안전하게 반환하고 추가 상태/인원/취소 이력을 만들지 않는 정책을 명시합니다. 응답 동일성과 효과 멱등성을 구분합니다. |
| R12-M02 | 수용 | 첫 등장에 DB/Git commit, rollback, fixture, 불변식, 오라클과 시작 장벽을 짧게 풀이합니다. 긴 이론이나 새 용어집은 만들지 않습니다. |
| R12-M03 | 수용 | 교육용 비밀·실제 개인정보 금지와 승인된 보호 업무 데이터 백업, 별도 비밀·복호화 키 복구 체계를 구분합니다. |

모두 수정 후보이며 같은 저장 reviewer 후속 전에는 RESOLVED로 처리하지 않습니다. 원고·브리프·콘텐츠 지도·출처 연결의 정확 전후 해시를 고정하고 최초 원문/요청/manifest/PNG24/NEEDS CHANGES를 보존합니다. R12draft/pending·M5/ready/RC/소유자공개승인 미완료를 유지합니다. 외부 서비스·실제 앱·DB 실행·배포·새 제품 채택은 범위 밖입니다.

## Fix1 후속 판정과 controller 수용

위 표와 마지막 문단은 후속 검토 전의 재판정 기록입니다. 같은 저장 reviewer의 [Fix1 결과](r12-meeting-capstone-codex-rereview.md)는 PASS C0/I0/M0·18/18·치명0이며 준비 코드와 수정 체크포인트도 C0/I0/M0·적합입니다. I01~I05·M01~M03 각각을 RESOLVED로 판정했고 controller는 직접 diff·검증·전체30목록crop/6보조viewport와 일치함을 확인하여 전8건의 해소를 수용했습니다. 새 finding은 없습니다.

최초 응답SHA를 같은 세션 history1에서 복구하고 actual gpt-6-astra/high·readOnly/networkfalse·도구0·공식ChatGPT구독/추가creditsfalse를 확인했습니다. 원문17파일43청크·실제PNG36개의 전달 payload SHA는0d4fa3f702279b07a11ca8765066791718b88100afdff1062369cd7ab5ad9554이며, 응답SHA는c8ede32b4af3df4f620da60e2981ad1d600102ec02238970ab876285ef4e7cb3입니다. 응답raw+LF를 별도 정본으로 보존했고, 사후 청크 복원·이미지ID/순서/원본SHA·전송 전후 불변성·실제 프로필·세션 연속성 감사errors0/exit0와 실행exit0을 확인했습니다.

실패한 캡처 두 실행은exit1 그대로 보존하고30crop의 판독과 보충lazy/keyboard검사exit0만 각 범위에서 인정합니다. 최초 NEEDS CHANGES를 고치지 않으며 Fix1은819fc11에 선별 커밋했습니다. 이후 R12의 review 전이와 controller closeout은 r12-controller-closeout.md에 연결합니다. R01~R11 유효 결과와 다른 열린finding·M5/ready/RC/소유자/공개 경계는 유지합니다.
