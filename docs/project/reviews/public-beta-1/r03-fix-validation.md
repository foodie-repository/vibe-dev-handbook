# R03 Fix Round 1 검증 기록

2026-10-25, 기준 1593e9a 이후의 R03 finding 수정 후보입니다. 원고 상태는 draft이며 아래 검증은 원고 독립 재검토와 다릅니다.

## 자동 검증

- targeted 회귀6/6·fail0·skip0·exit0입니다. 현재 후보의 정확한 전후 SHA/역치환, 원고·지도 rollback/변조 거부, 발췌 내부 mismatch, PNG 누락/변조/결합 해시, 렌더 계보 실패 분기를 확인했습니다.
- 최초 전체 검사는 R02의 지도 full-file 기대 SHA1건이 새 R03 문자 수를 거부해185/186·exit1이었습니다. 알려진 R03 전이만 역치환하는 기대값 연결 뒤 npm run check는 exit0, 전체186개 회귀·정적 검사·build60페이지/Pagefind60·built-output60 HTML/리터럴 Markdown0·고지 byte 일치입니다. 기존 sitemap site 미설정 warning1은 그대로이며 공개 URL 성공이 아닙니다.
- 이전 원고/manifest/요청/출처/공통 그림/과거 PNG·R01/R02 검토는 보존했습니다. 초기 manifest를 재작성하지 않고 검증된 변경만 과거 입력 바이트로 복원합니다.

## 실제 로컬 렌더

동일 설치 Playwright와 보호 Edge 실행 파일·disable-gpu·headless를 사용해 localhost4357의 HTTP 원고 한 경로만 관측했습니다. CLI의 open 이후 Session closed가 두 번 발생해 run-code 관측은 미실행으로 남겼습니다. CLI 방식은 중단하고 같은 라이브러리/브라우저/보호 실행 파일/관측 코드를 단일 프로세스에서 실행했습니다. 새 패키지나 다른 브라우저로 전환하지 않았으며 새 macOS 충돌 기록은 없었습니다.

1440×1000, 390×844 light 두 상태에서 HTTP200·H1 1개·제목/검토용 초안·theme light·그림 loaded/alt true·새 핵심 문구6개 존재·전역 overflow false를 확인했습니다. console warning/error·pageerror·requestfailed·외부 요청은 모두0입니다. 실제 UA는 Edge156이며 CLI의 browser-type chrome 출력만으로 Chrome 실행이라고 기록하지 않습니다.

controller는 아래 PNG10개를 모두 열어 변경한 성공/실패/CORS/버전 문단의 글자·줄바꿈과 표를 읽었습니다. 데스크톱 표는 내부 스크롤이 없고 모바일 표는 overflow-x auto입니다. 오른쪽이 가려진 최초 모바일 표를 전역 잘림으로 간주하지 않고 해당 상태 코드 표만 추가 관측해 scrollLeft26/max26의 끝 도달과 오른쪽 열 판독을 확인했습니다. 모바일 성공/업무 완료 문단도 별도 화면에서 읽었습니다. 코드 블록의 기존 가로 스크롤은 유지합니다.

CSS·테마·공통 SVG가 바뀌지 않았으므로 dark/전체 사이트/원래18PNG를 다시 생성하지 않았습니다. 이 기록은 두 폭의 light 및 해당 문단 범위이지 전체 접근성·실기기·공개 URL 검증이 아닙니다.

```json
[
  {
    "path": "output/playwright/r03-fix-20261025/1440-cors.png",
    "sha256": "8c431c20ee9de8ca072670ad7e71df3477edd0c46b3eaf9451dbe8deec422214"
  },
  {
    "path": "output/playwright/r03-fix-20261025/1440-failure.png",
    "sha256": "9044ed09b0d92b1a706f5f22dbc6e2fd711b0c9110d4626c5472694c41a53704"
  },
  {
    "path": "output/playwright/r03-fix-20261025/1440-status.png",
    "sha256": "2521c3dac927c39a6f2eda9477fde476479c4120542498e1f80edbf8adc20084"
  },
  {
    "path": "output/playwright/r03-fix-20261025/1440-version.png",
    "sha256": "65db4c8141343e4c0cfdc5f8735946fd2a2ebeb402a3029e6e84c7c28e0d7167"
  },
  {
    "path": "output/playwright/r03-fix-20261025/390-acceptance.png",
    "sha256": "ada6c87d4a780464176cfe93efb403cbc2c06b31da4177d97bae933280b97d9f"
  },
  {
    "path": "output/playwright/r03-fix-20261025/390-cors.png",
    "sha256": "9aecf69e683bd6a4cd5762f0c6253d0ba4ab139fb404a44cade17a78bf6252ed"
  },
  {
    "path": "output/playwright/r03-fix-20261025/390-failure.png",
    "sha256": "c96b3cf9be58247036b1c2fbe8ac6e5af077547c8b0b4d770c31c468a684c2d7"
  },
  {
    "path": "output/playwright/r03-fix-20261025/390-status-right.png",
    "sha256": "5de3f50290fbc8b473d05a4e2abc86f51614c7f58181a85735bd0a63e6d25055"
  },
  {
    "path": "output/playwright/r03-fix-20261025/390-status.png",
    "sha256": "879f23a464b53d5e409e89de04895559e34355f3f44216e153440f1498f145ba"
  },
  {
    "path": "output/playwright/r03-fix-20261025/390-version.png",
    "sha256": "e0a1b975bc303305b34ea492c20a59924a7d094d130200621fe92bb1f0704162"
  }
]
```

원시 관측은 로컬 전용 output/playwright/r03-fix-20261025/observations.json 및 mobile-scroll.json에 보존합니다. 후속 reviewer에는 같은 저장 세션 이력을 복구한 뒤 변경 diff·원문·검사 코드·이 기록과 필요한 대표 실제 이미지를 전달하며, 이미 검토한 불변18PNG의 전체 재검토를 요구하지 않습니다.
