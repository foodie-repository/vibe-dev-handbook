# R13 Fix Round 1 검증

기준은 최초 결과를 단독 보존한 `f531429`입니다. 최초 원고 판정 NEEDS CHANGES C0/I4/M2·15/18과 준비 메타데이터 Minor 1은 역사로 유지하며, 수정 후 독립 판정은 아직 대기입니다. 원고는 draft이며 실제 대시보드 구현·운영·공개 검증이 아닙니다.

## 영향과 재사용

원고 의미·표/목록 레이아웃·데이터 계약·검사 코드와 기록이 바뀝니다. CSV 14필드 6행, CSS, SVG/Mermaid는 불변입니다. 원고/브리프/CONTENT_MAP/source-map의 정확한 네 파일 전후 SHA와 역변환은 `scripts/r13-fix-transition.mjs`에 있습니다. 최초 전체 원고·직접 근거·PNG 48개 검토는 불변 범위에서 재사용하며 새 전체 원고/그림 검토로 기록하지 않습니다. 최초 준비 요청과 이미지 식별자·해시는 변경하지 않았고 포인터 정정만 adjudication에 분리했습니다.

## 새 자동 검증

- 최초 focused 13/13 성공 뒤 전체 검사는 299개 중 297 성공·2 실패(exit 1)였습니다. R06/R07 테스트가 역사 사례 SHA를 현재 수정본과 직접 비교한 실패이며 당시 빌드는 실행하지 않았습니다.
- 두 역사 테스트를 정확한 R13 역변환 후 당시 바이트와 비교하도록 연결한 뒤 영향 테스트 11/11, `npm run check:static` 299/299·실패 0·skip 0, content 59·references 324·SVG 14·plan 100이 exit 0입니다.
- `npm run build`는 HTML 60·Pagefind 60, built 검사 60·본문 리터럴 Markdown 0·고지 파일 바이트 동일로 exit 0입니다. 기존 site 미설정 sitemap warning은 남아 있으며 권리 완료 증거가 아닙니다.
- 실행 로그는 로컬 진행 폴더의 `r13-fix-check.log`와 `r13-fix-check-round2.log`에 분리 보존했습니다. 이후 캡처 도구의 경계만 바뀌었으므로 이 성공 검사를 반복하지 않습니다.

## 새 실행·시각 확인

기존 localhost preview와 보호된 headed Edge로 1440×1000·1024×768·390×844 각각 light/dark를 확인했습니다. 첫 대표 1440 light/390 dark 캡처는 실행 exit 0이었지만 실제 픽셀에서 제목 윗부분이 잘려 시각 증거로 수용하지 않았습니다. 이 실패 이미지는 `output/playwright/r13-fix-20261115-pilot/`에 보존했습니다. 원고나 스타일을 바꾸지 않고 캡처 상단 여백만 보정했습니다.

보정 대표 17 PNG를 실제 판독한 뒤 나머지 네 상태 33 PNG로 확장했습니다. 최종 50 PNG(각 상태 추적 5·계약 1·후보 1·신선도 1, 모바일 계약 표 오른쪽 끝 추가 2)는 모두 controller가 열어 읽었습니다. `output/playwright/r13-fix-20261115-pilot-v2/observations.json`과 `output/playwright/r13-fix-20261115-remaining-v2/observations.json`이 경로·clip·상태를 연결합니다. 두 실행 모두 exit 0입니다.

여섯 상태의 HTTP 200·H1 1·검토용 초안·요청 테마·그림 로드 정상, 전역 overflow·산문 넘침·console warning/error·pageerror·실패/외부 요청은 0입니다. 다섯 추적 목록은 각각 9항목이고 clientWidth=scrollWidth 788/692/358로 내부 가로 스크롤이 없습니다. 제목과 핵심/보조 문구가 읽히며 캡처 아래 다음 절 일부가 보이는 여백은 해당 절의 검토 완료로 확장하지 않습니다.

Tab으로 콘텐츠 건너뛰기에 초점을 둔 뒤 Enter·PageDown으로 다섯 추적 제목에 모두 도달했습니다. 이는 해당 목록의 키보드 읽기 경로 확인이며 전체 링크·스크린리더 회귀가 아닙니다. 모바일 계약 표는 client 358/scroll 362로 4px 내부 스크롤이 있어 좌우 실제 이미지로 보충했고, 다른 기존 표의 내부 스크롤은 관찰만 보존했습니다. 표의 키보드 가로 이동을 새로 검증했다고 주장하지 않습니다.

## 남은 게이트

후속 결과: 같은 저장 reviewer의 Fix1 PASS C0/I0/M0·18/18·치명0·7 finding RESOLVED를 별도 정본에 보존했습니다. 실행과 사후 전달/불변성 감사는 모두 exit0·errors0이며 19파일48청크/PNG50을 확인했습니다. 검토 전 refs325·release480finding0·exact480차이0/staged13/unstaged0/diffcheck0을 확인했습니다. 이후 결과 기록 추가는 원고·브리프·코드·픽셀을 바꾸지 않으므로 유효한 full299/build60/6상태 렌더는 재사용하고 최종 참조·공개 안전·선별 index만 새로 확인합니다. 아래 문단은 검토 전 대기 상태의 역사입니다.

관련 기록 추가 후 참조·공개 안전·exact HEAD + index 대조, 같은 저장 reviewer의 최초 응답 SHA/history 복구와 변경 영향 후속 검토, 전달 후 불변성 감사, finding 재판정과 선별 커밋이 남아 있습니다. 원고 전체·이미지 불변 범위를 다시 검토하거나 R13 closeout·M5·ready·공개 완료로 승격하지 않습니다.
