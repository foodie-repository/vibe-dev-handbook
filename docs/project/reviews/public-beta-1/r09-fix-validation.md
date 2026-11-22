# R09 Fix1 검증 기록

2026-11-15, 기준HEAD a5c8d16de3f242a63d11370e14713f0b862708f5입니다. 입력 준비6파일의 독립 PASS 뒤 결과의 위치 링크가 공개 안전 검사에 걸려 준비 커밋을 보류했습니다. 최초 원응답과 그림은 보존하고 [재판정](r09-build-deploy-adjudication.md)의6건만 좁게 수정했습니다. 준비·최초 결과·Fix1은 아직 미커밋이며 같은 저장 reviewer의 후속 PASS 전에는 원고 상태를 승격하지 않습니다.

## 변경과 보존

대상 원고에서 RFC9499 연결·8499 대체 역사, 배포 쓰기/읽기 접근/미실행의 구분, 기존 빌드 읽기와 새 빌드 실행의 구분, 일치하는 project-name 자산 경로, authoritative nameserver의 zone 역할, 제품 표의 과거 확인·실패 안내를 수정했습니다. source-map과 시각 감사에는 현재 보충·정정만 앞에 추가하여 과거 문장을 보존했습니다. 정확4파일 전후 해시·역치환으로 최초 입력을 재현하고 이후 현재 파일 rollback·drift는 거절합니다. R08 이하의 유효 역사 검사에는 R09의 이 정확한 전이만 정규화합니다. CONTENT_MAP은 본문 문자 수만 갱신합니다.

SVG·Mermaid·원본PNG18·사이트 설정·workflow·의존성·인접 원고는 불변입니다. 공개 원고는 draft이고 R09 완료 정리·R10 이후·M5전체·ready·공개 승인은 미완료입니다. 읽기 검증 허용에 관한 교육 문장을 이 저장소의 네트워크·공개 URL 접근 승인으로 사용하지 않았습니다.

## 자동 검증

- 준비 local errors0·집중5/5와 전체253/253 fail0skip0/exit0을 보존합니다. 준비 EOF 빈 줄 오류와 재고정은 준비 보고서에 별도 기록했습니다.
- Fix1 집중10/10 fail0skip0·전체255/255 fail0skip0·content59·참조279/SVG14·plan100/중복0/누락0, build60·Pagefind60·built60 모두 exit0입니다. 로그는 로컬 r09-fix-focused.log와 r09-fix-check.log입니다.
- 첫 렌더에서 수정한 프롬프트의 긴 문장이 가로 스크롤 안에 가려지는 controller 관측 V01을 확인했습니다. 해당 text fence에 wrap만 적용하여 산문 원문·복사 텍스트의 임의 개행은 추가하지 않았습니다. 이후 focused10/10 fail0skip0, build60/Pagefind60/built60 exit0을 r09-wrap-focused.log와 r09-wrap-build.log에 보존했습니다. 변경 없는 전체255개는 반복하지 않았습니다.
- 기본 site 값이 없는 로컬 빌드의 기존 sitemap warning1은 남아 있으며 실제 공개 site 설정 검증으로 계산하지 않습니다.
- 공개 안전 첫 결과404파일/finding6/exit1은 위치 메타데이터 문제입니다. 원응답을 보존하고6개 링크만 정규화했으며 정확 변환·나머지 내용 일치·잔존 개인 홈 경로0은 별도 로컬 감사 exit0입니다. 최종 공개 안전·exact index 결과는 후속 입력의 별도 증거에 연결합니다.

## 실제 렌더와 한계

보호Edge의 headed 실행으로 localhost preview의390×844에서 바뀐 문맥6곳을 확인했습니다. light/dark를 나눠 각 문맥의 HTTP200·H1한개·draft·요청 테마·전역overflow없음·console warning/error/pageerror/외부요청실패0을 기록했고 스크립트 exit0입니다. Controller가 실제PNG6개를 읽어 프롬프트 V01을 발견했으므로 이 첫 실행을 시각적 무결함 PASS로 계산하지 않습니다. 표와 기존 URL 코드의 내부 가로 스크롤은 이 전체 페이지 회귀의 대상이 아니며 표 전체를 픽셀로 읽었다고 주장하지 않습니다. 일부 crop의 제목·다음 문단 잘림은 crop 경계이며 페이지 잘림과 구분합니다.

wrap 수정 후 프롬프트 light/dark2상태는 HTTP/H1/draft/theme/전역overflow/errors 통과, 내부 clientWidth356/scrollWidth356, 복사 원문 일치, exit0입니다. 최종 viewport2개와 prompt crop2개를 실제 읽어 긴 문장·목록·끝 경고까지 판독했습니다. output/playwright/r09-fix-20261115의 기존 정상 문맥5개와 r09-final-20261115의 최종4개를 후속 reviewer에게 실제 이미지로 전달합니다. 첫 permission.png는 실패 관측으로 보존하고 최종 증거에 포함하지 않습니다.

새 PNG9개는 수정 영향 범위만 보여주며 전체 페이지·세 viewport×양테마 전수·키보드·검색 검증을 대체하지 않습니다. 원본 그림18개 검토는 SVG/Mermaid 불변 범위에서 재사용하되 수정 후 원고까지 과거 캡처 입력과 같은 해시라고 주장하지 않습니다. 같은 저장 reviewer의6건/V01/공개 메타데이터 정규화·코드 후속 판정과 응답 후 감사는 대기입니다.
