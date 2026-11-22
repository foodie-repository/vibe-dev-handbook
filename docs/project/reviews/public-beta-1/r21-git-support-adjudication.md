# R21 최초 검토 재판정

## 현재 판정: Fix1 해소

같은 저장 reviewer의 [Fix1 후속 검토](r21-git-support-codex-rereview.md)는 원고·코드·기록 PASS C0/I0/M0, 두 원고 각각18/18·치명0입니다. controller는 원고 I01~I06·M01~M04의 고유10건과 현행 영향 renderer의 PM01을 모두 RESOLVED로 재판정합니다. R08-XI01/XM01/XM02 국소 해소도 유지하며 최초 NEEDS CHANGES와 아래 대기 표는 역사로 보존합니다.

같은 세션 history1·최초 응답 SHA 실제 복구, 텍스트19파일29청크와 실제PNG84 전달, 지정 프로필·공식 구독·읽기 전용·도구 미사용과 사후 불변성 감사 errors0/exit0을 확인했습니다. payload SHA는4e9dfefe1900662c596d17472be6173beb8ef1ca46d31fe4b81ff0e17afcdad8, 응답 SHA는329ea7b5bb3e8141094fb52a5e1afef461c0ec9e89d401a99948c6b7aa817373입니다. 검토된11파일 후보의 적합 판정을 수용하며 결과 추가 후의 최종 index는 별도로 확인합니다. 수정12파일은 e7dd8d5로 로컬 커밋했습니다. 본문 불변 R21done/review 전이와 controller closeout은 r21-controller-closeout.md로 연결하며 M5전체/ready/공개는 미완료입니다.

## 현재 상태: Fix1 후보, 후속 판정 대기

[최초 정상 검토](r21-git-support-codex-review.md)는 NEEDS CHANGES C0/I6/M4·두 원고 각각16/18·치명0입니다. 캡처 코드 PM01 Minor1은 원고 건수와 별도입니다. 준비 검사기·테스트 C0/I0/M0와 준비6파일 체크포인트 적합 판정을 원고 PASS로 확대하지 않습니다. 준비6파일은0500448, 최초 응답 원문은 원고 수정 전에f00df27로 각각 커밋했습니다.

fresh 저장 reviewer의 실제 gpt-6-astra/high·공식 ChatGPT 구독/추가creditsfalse·history0·readOnly/networkfalse와 텍스트27파일44청크·실제PNG46 전달을 확인했습니다. 실행 exit0, 사후 전달·프로필·입력 불변성 감사 errors0입니다. payload SHA는30f7854af91169c2933b48739250ce4212b268c94488123833be4121ca53bf83, 원 응답 SHA는35c35e2aaf523ff80f18b32902dc1110a14a7d0bd5e80bc594b1a2d031e8b91b, raw+LF=file=index SHA는1580931224cd68c8793b7ffcc9607c918ce2aedaa41e676f18dd6e900eb05b5c입니다.

| ID | 재판정·최소 반영 | 현재 상태 |
|---|---|---|
| I01 | 수용. 부분 스테이징 후보와 검증한 작업 트리의 차이·의존성, 필요한 별도 환경 검증을 설명·AI 순서·체크리스트에 연결 | 수정 후보, 재검토 대기 |
| I02 | 수용. 두 status 명령의 untracked 전체 표시, 설정·ignored 한계 | 수정 후보, 재검토 대기 |
| I03 | 수용. reset의 commit 형식과 index 전용 경로 형식 구분 | 수정 후보, 재검토 대기 |
| I04 | 수용. hard reset을 방해하는 untracked 경로의 손실 조건, 전체 일괄 삭제와 구분 | 수정 후보, 재검토 대기 |
| I05 | 수용. 보호 참조의 커밋 한계, HEAD/index/작업 파일/새 파일별 보존과 패치 범위 | 수정 후보, 재검토 대기 |
| I06 | 수용. 자연어 프롬프트 한 블록만 text wrap, 내용·의미상 개행·전역 CSS 유지 | 수정 후보, 재검토 대기 |
| M01 | 수용. 첫 커밋 전 HEAD 부재와 status·새 파일·staged 대안 | 수정 후보, 재검토 대기 |
| M02 | 수용. 두 원고의 로컬/원격 병합과 핸드북 승인 정책·기존 승인 범위 구분 | 수정 후보, 재검토 대기 |
| M03 | 수용. restore 기본 source와 staged/명시 source·삭제 경계 | 수정 후보, 재검토 대기 |
| M04 | 수용. revert 기본 자동 커밋과 no-commit 예외·상태별 증거 | 수정 후보, 재검토 대기 |
| PM01 | 수용. 최초 renderer와 로그는 역사로 보존하고 이번 영향 renderer에서는 최종 검사 뒤에만 complete 기록. 실제 최종 판정 코드에 성공·누락·중복·HTTP·테마·overflow·오류 입력을 대조 | 좁은 로직 검사 통과, 재검토 대기 |

R08-XI01/XM01/XM02는 최초 R21 reviewer가 국소 RESOLVED 유지로 판정했습니다. 최초 R08 결과와 국소 Fix1을 소급 변경하지 않으며 이번 새 I01/I02를 R08의 해소 취소로 기록하지 않습니다.

변경 영향은 두 원고의 안전 의미·명령 예·프롬프트 표시와 콘텐츠 지도·출처 연결, 정확 전후 전이 및 관련 검사입니다. CSS·그림·사례 데이터·외부 상태는 불변입니다. 최초46PNG·전체 원고 검토·명시 범위의 공식 출처는 불변 영역에 재사용하며 변경 영역만 새 렌더·같은 저장 reviewer 후속 검토에 전달합니다. 실제 Git reset/restore/revert나 운영 복구는 실행하지 않습니다. R08의 비민감 합성 반례 검증은 입력이 같은 범위에서 재사용하며 새 명령 성공으로 표현하지 않습니다.

정확4파일 전이와 이전 해시는 scripts/r21-fix-transition.mjs에 기록했습니다. 현재 후보가 알려진 after 해시일 때만 역사 입력을 복원하며 임의 drift를 이전 성공으로 인정하지 않습니다. 원고는 draft·행은 pending이고 후속 결과·controller closeout·M5/ready/공개는 아직 완료되지 않았습니다.
