# R15 Fix1 검증 기록

기준04e03db의 최초 결과 선행 커밋 이후 세 원고와 파생 문자 수·출처 적용 기록만 수정했습니다. 준비6파일은 별도 시각 Important가 남아 staged로 보존했습니다. 정확5파일 원본 복원·현재 바이트·누락/변조/rollback 거부 및 R14 역사 연결을 검사하며 원고 상태는 draft입니다.

새 집중 검사는 최초15개 중13pass/2fail·exit1입니다. R14 현재 해시를 새 CONTENT_MAP 변경의 역복원 없이 비교한 테스트와 R15 테스트가 실제 산문의 “로컬 주소와 State” 대신 LocalAddress 문자열을 찾은 문제가 원인이었습니다. 역사 역복원 비교와 정확 산문 기대값만 보완한 후 필수 전체 npm run check는322/322·fail0·skip0, 콘텐츠59·참조344/SVG14·계획100/59/중복0/누락0, build60·Pagefind60·built60/일반 본문 리터럴0/고지바이트동일로exit0입니다. 실행94037의 시작 출력은 도구 이력, 완료 출력과 exit0은 로컬 r15-fix-check.log에 보존합니다. sitemap의 site 미지정 경고는 기존 로컬 미배포 경계입니다.

보호 headed Edge에서 세 경로×1440/390×light/dark12상태의 수정 표 셀·ignore/포트 선택/종료/출처 문단만44PNG로 관측했습니다. 위험 대표6PNG를 실제 판독한 뒤 반대테마로 확장했습니다. HTTP200/H1하나/검토용 초안/테마일치·전역overflow/산문넘침/consolewarning·error/pageerror/requestfailed0, 내부 스크롤은 요청값과 실제값이 일치하며 두 실행exit0입니다. 44개를 모두 읽은 결과 데스크톱 출처4개는 페이지 하단 스크롤 제한으로 다른 구간을 찍었으므로 해당 주장 증거로 불수용했습니다. 실패 이미지는 보존하고 실제 경계로 그4개만 보충해exit0·모두 실제 판독했습니다. 사이트/CSS는 변경하지 않았습니다. 따라서 새48개 중 유효 변경 영역44개와 실패4개를 구분하며 경계 밖 문단의 완독을 주장하지 않습니다.

R15-P-I01은 원본 이미지59/60/61/62/140/141/142/143에 대응하는 연습표13/14×390×양테마×좌우8개를 별도 보충했습니다. HTTP200/H1하나/전역overflow/오류0·실제스크롤일치·exit0이고8개 모두 실제 판독했습니다. 원본 전체파일은 수정됐으나 해당 두 표와 CSS의 바이트 불변을 별도 대조하여 수정 전 생성한 이8개를 재사용합니다. 원본162개와8개 실패 경계는 그대로 보존하며 나머지154개를 새로 만들지 않았습니다. 원고 전체·변경 없는 그림/표/코드·직접 근거는 최초 reviewer의 실제 전체 검토를 재사용합니다. 새1024/키보드/스크린리더/전체사이트 검증이나 실제 패키지 설치·프로세스 종료 시험은 하지 않았습니다.

검토 전 후보는staged17/unstaged0·release515finding0·exact515차이0/diffcheck0, patch8fa69bba52701e61221bc33b68bbe5d40ad08b9182e1ea2fab2da721e98a18f8입니다. 같은 저장 reviewer의 history1/최초 응답 SHA 복구·actualastra/high/readOnly/공식 ChatGPT 구독 creditsfalse를 확인하고23텍스트70청크·실제PNG56개를 전달했습니다. 후속 PASS C0/I0/M0·세 원고각18/18·준비/수정 코드와 시각 범위PASS·일곱ID RESOLVED를 수신했고, 모델실행exit0·사후 전달/입력 불변성 감사errors0/exit0입니다. 응답SHA fd137da1b9d177a68f13b37c34b6ce359e4233be1ad7221d54db05bb8434ab9d·payloada96f37618d79d692d17ddc5fa668f4b5fc05755d10845b6c10791aee3fd908a5입니다. 결과·재판정 기록 추가 뒤 최종 exact HEAD+index·공개 안전·참조 검사만 새로 수행하며 유효322테스트/build60/시각 증거는 재사용합니다. 원래 NEEDS CHANGES는 불변이고 R15 controller closeout·review 전이·M5전체·ready·공개는 별도 미완료입니다.
