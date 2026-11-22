# R06 완료 정리 검증 입력

기준 commit `33e6c8b5e1c281fe1e35c8cba092bf8a65cf0151`에서 R06만 본문 불변 `draft → review`로 연결한 후보입니다. 원고·콘텐츠 지도·행렬·프로젝트 컨텍스트·로드맵·마스터 계획의 여섯 전이와 정본 증거8개 해시는 `scripts/r06-closeout.mjs`에 고정했습니다. 상태·역치환·pin의 변경은 독립 완료 검토 대상이며 아직 완료 커밋 전입니다.

fresh `npm run check`는 테스트225/225·fail0·skip0, 콘텐츠59·참조247/SVG14·계획100/중복0/누락0, build60/Pagefind60/built60·exit0입니다. 기존 sitemap `site` 미설정 경고1개는 유지됐으며 배포 구성은 변경하지 않았습니다. local R06 입력32/문맥11·과거 PNG18 검사와 M5 행렬은 errors0/exit0입니다. 여섯 완료 행·공개59개 draft53/review6/ready0, 정확한 본문 불변·이전 바이트 복원·rollback 및 정본 증거 누락/변조 거부를 테스트했습니다. 과거 R01~R05의 원고·그림 검토를 새로 수행하지 않았습니다.

보호 Edge headed localhost에서 1440×1000과390×844 light의 실제 review 배지를 관측했고 PNG2개를 직접 읽었습니다. 두 상태 모두 HTTP200·H1 1·review true·draft false·theme light·전역 overflow false·그림 decode 성공·console warning/error/pageerror/request failure/external0·종료코드0입니다. 모바일 lazy 이미지는 해당 위치로 이동해 decode한 뒤 상단으로 돌아와 기록했습니다. 배지의 줄바꿈과 문구·겹침 부재를 확인했으며 전체 반응형·테마·키보드 검증으로 확대하지 않습니다. DOM의 마지막 업데이트 표시는 두 폭에서 2026-11-15이고 datetime은2026-11-15T02:06:42.000Z였습니다. 이전 Fix1의8월 footer 캡처를 소급 수정하지 않으며 이번 현재 빌드 관측과 구분합니다.

로컬 로그는 진행 원장 폴더의 `r06-closeout-check.log`, 화면은 `output/playwright/r06-closeout-20261115/observations.json`과 `badge-1440.png`, `badge-390.png`입니다. 같은 저장 reviewer의 최초·Fix1 최종 응답을 실제 복구한 뒤 이번 완료 파일·전이·검사·PNG2개를 전달합니다. 완료 검토 결과·응답 후 감사·staged 검사·로컬 커밋은 별도 완료 판정 기록에 남깁니다. M5 전체·ready·RC·소유자 승인·외부 쓰기는 미완료입니다.
