# R07 완료 정리 검증 입력

기준 commit은 `59f6c6e0c3faf7cfde6d374aab928f8616a15e3a`입니다. 본문 불변 draft → review와 관련 여덟 상태 전이를 `scripts/r07-closeout.mjs`에 고정했습니다. 최초 NEEDS CHANGES 및 Fix1 PASS는 별도 증거로 보존하며 ISO 공개 열거의 not-confirmed를 해소했다고 주장하지 않습니다.

최초 전체 검사는 237개 중 230개 성공·7개 실패였습니다. 기존 R07 대기 기대값과 새 완료 문서를 복사하지 않는 fixture만 수정한 후 `npm run check` 로그는 237/237·fail0·skip0, 콘텐츠59·참조259/SVG14·계획100/중복0/누락0, build60/Pagefind60/built60을 확인합니다. 연쇄 명령이 마지막 산출물 검사까지 실행된 증거로 앞 단계 성공을 확인했습니다. 세션 복구 후 원 프로세스의 종료 코드를 회수하지 못해 전체 종료코드를 별도로 꾸미지 않았으며, 마지막 `validate-built-output.mjs`만 좁게 재실행하여 종료코드0·HTML60·리터럴 Markdown0·고지 바이트 일치를 확인했습니다. 기존 sitemap site 미설정 경고는 유지됩니다. 완료 전이의 역치환·rollback/drift 거부와 본문 불변 테스트도 포함되어 있습니다.

첫 검사 실패로 빌드가 실행되지 않은 시점의 배지 관측은 이전 draft 출력 두 상태를 읽어 실패했습니다. 이 결과는 `output/playwright/r07-closeout-20261115/`에 보존합니다. 새 빌드 후 보호 Edge headed localhost에서 1440×1000 및390×844 light를 확인한 최종 결과는 두 상태 모두 HTTP200·H1 1·review true·draft false·theme light·전역 overflow false·그림0·console warning/error/pageerror/request failure/external0이며 종료코드0입니다. 최종 PNG2개를 직접 읽어 검토 중 배지의 문구·줄바꿈·겹침 부재를 확인했습니다. DOM 마지막 업데이트는2026-11-15, datetime은2026-11-15T03:00:58.000Z입니다. footer 픽셀 판독이나 전체 반응형·키보드 회귀를 수행한 것으로 확대하지 않습니다.

최종 자동 로그는 진행 원장 폴더의 `r07-closeout-check-final.log`, 최종 화면은 `output/playwright/r07-closeout-final-20261115/observations.json` 및 `badge-1440.png`, `badge-390.png`입니다. 기존 Fix1의234개 테스트·본문 영향 영역 PNG10과 실제 원고 검토는 유효한 범위에서 재사용합니다. 같은 저장 reviewer의 원 응답과 Fix1 응답을 복구하여 완료 파일·전이·검사·실제 PNG2개를 전달할 예정이며, 완료 검토·사후 감사·선별 staged 검사·커밋은 아직 별도 단계입니다. R08 이후·M5 전체·ready·RC·공개 승인은 미완료입니다.
