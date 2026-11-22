# R14 Fix1 검증 기록

기준1f2d1d5c7ae2b58e833bf77c6effe8e262233da7에서 두 원고의 R14-I01/M01/M02와 CONTENT_MAP 문자 수만 수정했습니다. 최초 결과와 준비 파일은 앞서 별도 커밋했고 원고는 draft입니다. 정확3파일의 전후 SHA/치환·역복원/변조/누락/rollback 거부와 기존R13역사해시 연결을 검사합니다. CSS·그림·브리프·원본 요청/manifest/출처는 불변입니다.

새 회귀의 최초 실행은7pass1fail로, 새 테스트가 실제 contentStatus 대신 status 필드를 찾은 문제였습니다. 테스트의 필드명만 고친 뒤8/8입니다. 첫 전체static은310/310pass지만 CONTENT_MAP 본문 문자 수2개오류로exit1·빌드미실행입니다. 정확2개값8135/13199로 갱신하고 역사 연결을 보완한 뒤 집중11/11fail0skip0·전체static310/310fail0skip0/content59/refs334/SVG14/plan100exit0입니다. 새 build60/Pagefind60exit0, 별도 built60HTML/리터럴Markdown0/고지바이트동일exit0입니다. 배포site설정미지정으로sitemap생성생략 경고는 기존로컬미배포경계이며 사이트배포성공으로 쓰지 않습니다. 재판정기록추가후 참조335도exit0입니다.

시각 영향 영역은 첫fixture설명2곳·관련링크·요청증거설명/가설표/한계문단입니다. 보호headedEdge로1440light/390dark 대표13PNG를 생성·직접판독한뒤 반대테마13PNG로 확장했고26개를 모두 읽었습니다. 두 실행exit0·두경로×두폭×두테마8상태HTTP200/H1하나/초안/theme일치·그림요소0·전역overflow/산문넘침/consolewarning·error/pageerror/외부요청·실패0입니다. 가설표desktop788/788px·mobile358/512px에서 좌우0/154px구간을 연결해 모두 읽었습니다. 부분이미지의 이웃문단경계밖은 완독으로 세지 않습니다.

원본58PNG 중 바뀌지 않은 표/프롬프트 등과 최초 원고 전체 검토·직접 출처는 같은 입력·CSS와 diff를 근거로 재사용합니다. 새26PNG는 그중 변경된영역만 대체하는 후속증거이지 원본58개를 소급교체하지 않습니다. 키보드/1024/스크린리더/전체사이트를 새검증했다고 하지 않습니다.

검토 전 선별후보는staged10/unstaged0·release498finding0·exact498차이0·diffcheck0, patchcfac06db11450a4952bb7b8408f0c8c2cc07f3feb1eb48edc71eec695d2aa8e5입니다. 같은 저장reviewer history1/최초응답SHA 복구 후17파일23청크·실제PNG26에서 PASS C0/I0/M0·두원고18/18·치명0·코드PASS를 받았고 실행exit0/사후감사errors0/exit0입니다. 원문 정본과 재판정 추가로 달라진 최종 후보는 커밋 직전 별도 index·공개안전·참조 검사 대상입니다. full310/build60/26PNG의 불변 성공은 재실행하지 않고 재사용합니다. R14 controller closeout·review전이와 M5전체/ready/RC/소유자/공개는 미완료이며 외부쓰기/과금전환없음입니다.
