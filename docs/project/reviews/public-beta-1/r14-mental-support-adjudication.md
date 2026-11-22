# R14 controller finding 재판정

최초 결과는 NEEDS CHANGES C0/I1/M2·추상화17/18·문제분해16/18·치명0입니다. 공통 Minor는 고유 ID 기준 한 번만 세며 준비 코드는 C0/I0/M0 적합입니다. 고정 입력 준비6파일을3f04377, 최초 정상 응답 정본 한 파일을1f2d1d5c7ae2b58e833bf77c6effe8e262233da7로 원고 수정 전에 별도 커밋했습니다. 최초 응답 SHA d9c68da481f16c92c0e60d187235ec508ec9fbef0ef8a982b25f9447a6c9711f, raw+LF 정본 SHA69a60f94e42df010237d84fdaacdfad04447a3171d6e1d788a560893d55602ad입니다. 원래 판정은 소급 변경하지 않습니다.

실행은 공식 ChatGPT 구독·추가 credits false, actual gpt-6-astra/high/openai·fresh history0·ephemeralfalse·readOnly/networkfalse·approvalnever·도구/MCP 사용0입니다. 전체16텍스트/33청크·실제PNG58 전달과 사후바이트 불변성 감사는 errors0/exit0, 모델실행exit0입니다. 응답 생성 중 너무 이른 감사는 incomplete log/exit1로 끝났고 완성 로그 수신 후에만 성공으로 판단했습니다. 고정 입력·원응답·실패 로그·이미지는 로컬 원장과 실행 로그에 보존했습니다.

| ID | controller 재판정 | 최소 수정 및 후속 기준 |
|---|---|---|
| R14-I01 Important | 수용. 현재 confirmed 관계는 기존 참가자의 중복 거절과 이번 요청의 확정/응답 유실 양쪽에서 나타날 수 있으므로 특정 요청의 원인 판별 증거가 아닙니다. | 같은 요청에 연결된 기존 처리 기록과 현재 관계·모임 상태 조회 목적을 분리합니다. 중복 거절·응답 유실·후속 취소·조회 실패/연결 부족을 구분하고 취소된 모임의 보존 이력과 POST 재전송 금지 경계를 명시합니다. 같은 reviewer가 세 경우와 미확인 경계를 다시 판단해야 합니다. |
| R14-M01 Minor | 수용. 각 장의 첫 fixture 사용에 쉬운 설명이 빠졌습니다. | 두 장 첫 등장만 교육용 고정 가상 데이터 묶음으로 정의하며 실제 시세/권리 주장이나 넓은 테스트 환경의 정의로 확대하지 않습니다. |
| R14-M02 Minor | 수용. 관련 링크의 표시 제목이 실제 대상 장 제목과 다릅니다. | 목적지를 유지하고 표시 문구만 개발자처럼 문제를 나누는 법으로 맞춥니다. |

영향은 두 원고의 국소 의미·표·첫 설명·링크와 CONTENT_MAP의 본문 문자 수, 고정 원본 복원/현재 바이트 검사의 연결입니다. CSS·기존 그림·인접 장·브리프·원본 출처·최초 요청/manifest/결과는 불변입니다. 정확3파일의 전후 SHA·치환은 scripts/r14-fix-transition.mjs에 고정하고 역변환은 원본 입력 검증만을 위해 사용합니다. 원본 파일 자체를 다시 쓰거나 새 본문을 원본으로 간주하지 않습니다.

새 검증은 회귀·필수 정적 검사/빌드·변경된 영역의1440/390light/dark 렌더·같은저장reviewer 복구 후 영향 검토·사후감사·커밋직전exact HEAD+index입니다. 기존58PNG/전체 원고 독립 검토 중 불변 영역과 직접 출처의 같은 실행 확인은 재사용합니다. 준비 보고서의332는 최초static로그,333은 보고서추가후 별도참조검사이고 혼합하지 않습니다. R10 NIST/CISA를 언급한 출처 기록은 최초reviewer에게 전체전달하지 않았으므로 이번판단근거로 세지 않으며 실제 사용한 근거는 Google SRE 관련 절입니다.

같은 저장 reviewer의 Fix1 후속 판정은 PASS C0/I0/M0·두 원고 각각18/18·치명0, 지원 코드 C0/I0/M0입니다. R14-I01·M01·M02 모두 RESOLVED로 확인했고 controller도 현재 원문·diff·근거에 대조하여 수용했습니다. 실제 history1/최초 응답 SHA 복구, 텍스트17파일23청크·실제PNG26 전달, 모델 실행exit0·사후 전달/불변성 감사errors0/exit0을 확인한 뒤 r14-mental-support-codex-rereview.md에 원문을 보존했습니다. 최초 NEEDS CHANGES 기록은 불변입니다. Fix1은 069db0b에 선별 커밋했습니다. R14의 review 전이와 controller closeout은 r14-controller-closeout.md에 연결하며 이후 행·M5전체·ready·RC·소유자 승인·공개는 미완료입니다.
