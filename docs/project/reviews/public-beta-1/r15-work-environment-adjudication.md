# R15 controller finding 재판정

최초 결과는 NEEDS CHANGES C0/I3/M4입니다. 원고는 I2/M4(의존성17/18·경로16/18·터미널16/18·치명0), 준비 코드는 PASS C0/I0/M0이며 별도 캡처 Important1을 합산합니다. 최초 정상 응답 정본 한 파일을04e03db74612211d8d7273b51fa8de94c775d177로 원고 수정 전에 커밋했습니다. 준비6파일은 캡처 지적이 남아 있어 staged 상태로 보존했으며 완료 커밋하지 않았습니다. 최초 응답 SHA c49ab27ed764f9bad87fef918053e2f076d0a8fb6c0fa77ac35f50285a25a37b, raw+LF 정본 SHA aa00fe4dc07cc1e7091abb1b73f971fd364283dc8c06d3fe80fe23d4b2c63e4b입니다. 과거 판정을 소급 변경하지 않습니다.

최초 실행은 공식 ChatGPT 구독·추가 credits false, actual gpt-6-astra/high/openai·fresh history0·ephemeralfalse·readOnly/networkfalse·approvalnever·도구/MCP 사용0입니다. 텍스트22개48청크·실제PNG162개 전달, 모델 실행exit0·사후 전달/불변성 감사errors0/exit0을 확인했습니다. 원문·해시·이미지·실패 기록은 기존 로컬 원장에 보존합니다.

| ID | controller 재판정 | 최소 대응과 후속 기준 |
|---|---|---|
| R15-I01 Important | 수용. check-ignore verbose 출력은 제외 판정 자체가 아닙니다. | 일반 제외와 ! 부정 패턴의 재포함, tracked 기본 생략, 조회 오류와 정상 무일치를 구분합니다. |
| R15-I02 Important | 수용. Stop-Process는 정상 저장·정리 요청을 보장하지 않습니다. | 애플리케이션/서비스 정상 종료와 OS 수준 종료를 분리하고 확인/Force 옵션도 저장 보장이 아님을 명시합니다. |
| R15-M01 Minor | 수용. 첫 등장 용어 설명이 부족합니다. | diff·CI·UNC·owning PID·작업 제어·PPID·fixture의 첫 설명만 보완합니다. |
| R15-M02 Minor | 수용. 고정 버전처럼 보이는 부동 링크와 실제 본문을 반환하지 않는 Apple 주소입니다. | Python 링크 표시는3.14, 당시3.14.7과 현재3.14.10을 분리하고 실제 Apple 명령 본문으로 연결합니다. 미확인 패치 버전·갱신일·문서 전체 접근은 추정하지 않습니다. |
| R15-M03 Minor | 수용. 상위 경로 권한 거부는 최종 파일 존재를 입증하지 않습니다. | 실패 표와 판단 규칙에서 권한 경계와 존재 미확인을 구분합니다. |
| R15-M04 Minor | 수용. 포트 결과의 첫 PID는 대상 listener가 아닐 수 있습니다. | 로컬 주소·State Listen·OwningProcess를 대조하고 조회와 종료 승인을 분리합니다. |
| R15-P-I01 Important | 수용. 모바일 연습표2개의 머리글이 캡처에서 잘렸습니다. | 원본162개는 보존하고 표13/14×두테마×좌우8개만 안전한 뷰포트 위치에서 보충했습니다. 사이트/CSS 수정이 아니며 같은 reviewer의 실제 이미지 판독과 해소 판정이 필요합니다. |

영향은 세 원고의 국소 의미·용어·표 셀·링크와 CONTENT_MAP 문자 수, source-map 현재 적용 기록, 원본 복원/현재 바이트 검사입니다. 정확5파일의 전후 SHA와 치환은 scripts/r15-fix-transition.mjs에 고정합니다. 최초 요청·manifest·직접 근거·원결과·CSS·그림·인접 원고는 불변입니다. 새 회귀/필수 정적 검사·빌드와 변경 영역 렌더, 같은 저장 reviewer 후속 검토, 사후 불변성 감사와 최종 exact HEAD+index를 구분합니다. 최초 전체 원고·이미지 검토의 불변 범위와 같은 실행 직접 근거는 재사용하며 새 전체 검토로 계산하지 않습니다.

같은 저장 reviewer의 Fix1은 PASS C0/I0/M0·세 원고 각각18/18·치명0이며 준비·수정 코드와 시각 증거도 범위 내 PASS입니다. 일곱 ID 모두 RESOLVED로 확인했고 controller도 원문·diff·직접 근거와 대조하여 수용했습니다. 실제 history1/최초 응답 SHA 복구 후23텍스트70청크·실제PNG56개를 전달했고 모델 실행exit0·사후 전달/입력 불변성 감사errors0/exit0입니다. 응답 SHA fd137da1b9d177a68f13b37c34b6ce359e4233be1ad7221d54db05bb8434ab9d이며 r15-work-environment-codex-rereview.md에 raw+LF를 보존합니다. 실패 이미지4개와 P-I01 보충8개의 제한도 reviewer가 실제 판독해 구분했습니다. 준비·수정 체크포인트는3c5b69c로 선별 커밋했습니다. R15 closeout·review 전이는 r15-controller-closeout.md에 연결하며 M5전체·ready·공개 승인은 미완료입니다.
