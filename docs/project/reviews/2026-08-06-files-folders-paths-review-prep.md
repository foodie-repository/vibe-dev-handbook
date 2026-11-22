# 파일·폴더·경로 검토 준비 기록

## 목적과 현재 상태

이 문서는 `src/content/docs/02-work-environment/files-folders-paths.md`를 기준 장으로 삼기 위해 수행한 자체 품질 점검, 공식 자료 확인 범위와 Claude Code Opus 5 Max 독립 검토 요청 계약·결과·후속 검증을 기록합니다. 검토를 시작할 때 원고는 `draft`였고, 독립 검토 지적의 재판정·최소 반영·자동 검사·렌더링 확인을 마친 뒤 `review`로 올렸습니다.

2026-08-06 기준 POSIX.1-2024의 용어 정의·경로명 해석·셸 틸드 확장, Microsoft의 Win32 파일 경로·Windows와 WSL 대소문자, Git의 status·ignore, Starlight의 프로젝트 구조 공식 자료를 직접 확인해 원고와 `research/source-map.md`에 적용 범위와 확인일을 기록했습니다. 공식 출처 보강 작업은 `bbc31b1`에 별도 커밋했고 `npm run check:static`, `ASTRO_TELEMETRY_DISABLED=1 npm run build`, 콘텐츠 지도 동기화와 멱등성 검사를 통과했습니다.

Claude Code 2.1.222는 호스트 인증 저장소 기준으로 로그인 상태를 확인했습니다. 계정 이메일과 조직 식별자는 이 기록과 검토 결과에 남기지 않습니다.

## 자체 품질 루브릭

| 항목 | 점수 | 근거와 남은 한계 |
|---|---:|---|
| 독자 문제 | 2 | 같은 이름의 `docs/`를 혼동하거나 생성물인 `dist/`를 수정하는 비개발자의 구체적인 문제에서 시작합니다. |
| 정확성 | 2 | 파일·디렉터리·경로·CWD·프로젝트·저장소·작업 공간, 원본·생성물과 Git 상태를 서로 다른 축으로 구분하고 운영체제·도구별 예외를 한정합니다. |
| 구조 | 2 | 정의와 비유에서 경계 지도, 실제 저장소, 파일 역할, Git 상태, 진단·복구, AI 작업 계약, 판단 규칙과 연습으로 이어집니다. |
| 쉬운 설명 | 2 | 주소 비유, 실제 저장소 트리, 비교표와 단계별 진단으로 정식 용어를 비개발자의 행동에 연결합니다. |
| 비유 한계 | 2 | 심볼릭 링크·권한·대소문자·도구별 기준과 파일 역할은 주소 비유가 설명하지 못한다고 명시합니다. |
| 판단 기준 | 2 | CWD·저장소 루트·전체 경로·원본·Git 상태·빌드와 화면을 서로 대신할 수 없는 증거로 확인하게 합니다. |
| 실패 모드 | 2 | 잘못된 원본, 생성물 덮어쓰기, 개인 절대 경로, untracked·ignored·staged, 권한·대소문자·링크·URL 혼동과 복구를 다룹니다. |
| 실전 연결 | 2 | 현재 저장소 사례, 안전한 명령, AI 지시 계약, 체크리스트와 세 연습으로 학습 목표를 수행하게 합니다. |
| 근거 | 2 | POSIX·Microsoft·Git·Starlight 공식 자료와 저장소 내부 규칙·스크립트에 확인일과 적용 범위를 연결했습니다. |

합계는 18점 중 18점이고 자체 점검의 치명 항목은 0건입니다. 이 점수는 독립 AI 검토나 사람 기술·편집 검토, 실제 비개발자 독자 테스트를 대신하지 않습니다.

## 독립 검토 요청 계약

Claude Code는 다음 파일만 `Read`로 읽고 파일·Git·외부 상태를 수정하지 않습니다.

1. `AGENTS.md`
2. `PROJECT_CONTEXT.md`
3. `RULES.md`
4. `WORKSPACE_MAP.md`
5. `docs/project/editorial-guide.md`
6. `docs/project/content-lifecycle.md`
7. `docs/project/quality-rubric.md`
8. `research/source-map.md`
9. `src/content/docs/02-work-environment/files-folders-paths.md`
10. `src/content/docs/reference/development-glossary.md`
11. `src/content/docs/09-git-github/git-and-github.md`
12. `src/content/docs/11-ai-native/working-with-coding-agents.md`
13. `.gitignore`
14. `package.json`
15. `astro.config.mjs`
16. `src/content.config.ts`
17. `scripts/validate-content.mjs`

검토자는 다음 질문에 답해야 합니다.

1. 비개발자가 파일·디렉터리·경로, CWD·프로젝트 루트·저장소 루트·작업 공간을 같은 개념으로 오해하게 만드는 문장이 있나요?
2. 절대·상대 경로, `.`·`..`·`~`, 심볼릭 링크와 Windows 접두사·대소문자 설명이 POSIX·Win32·셸·파일 시스템의 적용 범위를 과도하게 일반화하나요?
3. 원본·생성물·캐시·개인 파일의 역할과 tracked·untracked·ignored·staged라는 Git 상태가 정확히 분리됐나요?
4. Finder·터미널·Git·에이전트·빌드·브라우저 증거 중 하나를 다른 성공의 증거로 잘못 확대하나요?
5. 주소 비유가 맞는 지점과 깨지는 지점이 충분하고, 쉬운 설명이 기술적 정확성을 희생하지 않나요?
6. 진단 순서와 명령이 안전하며, 새 파일·staged 변경·ignored 파일·권한·작업 공간 밖 경로를 빠뜨리지 않나요?
7. AI 작업 계약, 체크리스트와 연습이 다섯 학습 목표를 실제로 판정할 수 있나요?
8. 출처 지도의 적용 범위와 원고의 출처 문단이 각 주장을 직접 뒷받침하며, 확인하지 않은 범위를 완료로 주장하나요?
9. 품질 루브릭 9개 항목을 각각 0~2점으로 평가하고 치명 항목 5개를 각각 판정해 주세요.

결과는 `검토 범위와 전제`, `P0 치명 오류`, `P1 review 전 필수`, `P2 개선 권장`, `잘된 점`, `루브릭 점수`, `치명 항목 판정`, `추가 공식 출처 확인 목록`, `현재 콘텐츠 상태 권고` 순으로 작성하고 각 지적에는 고유 ID, 대상 제목이나 문장, 독자 위험과 최소 수정 방향을 포함해야 합니다. P1·P2는 합계 24건 이하, 전체 결과는 18,000자 이하로 제한합니다. 웹 검색·웹 가져오기·Bash·파일 수정·외부 플러그인·스킬·하위 에이전트는 사용하지 않습니다.

## 독립 검토 결과

Claude Code 2.1.222의 `claude-opus-5`를 `max` 추론 강도, 계획 모드, `Read` 전용 권한으로 실행했습니다. 종료 코드 0과 정상 결과를 확인했고 P0 1건·P1 11건·P2 10건·독립 루브릭 15/18을 회수했습니다. 웹 검색·웹 가져오기·권한 거부는 모두 0건이었고, 검토 전후 17개 입력 파일의 결합 SHA-256 `bbd2d8f75bfa3423c75097b41bf3dee56738d8ac1c24a2f665ddfb42ec079654`와 대상 원고 SHA-256 `135cd738b6fdf1e69001451cd0bd12c3e69d09669b2c24a3abadd30aa810553a`가 일치했습니다. 실행 메타데이터와 결과 전문은 `docs/project/reviews/2026-08-06-files-folders-paths-opus5-review.md`에 보존했습니다.

P0는 원고의 기술 오류가 아니라 공식 출처를 확인한 뒤에도 `PROJECT_CONTEXT.md`가 이전 상태를 유지한 인수인계 모순이었습니다. Codex는 실제 저장소와 공식 자료에 대조해 P0 수용 1건, P1 수용 9건·부분 수용 1건·기각 1건, P2 수용 8건·부분 수용 1건·보류 1건으로 재판정했습니다. 세부 근거와 각 항목의 반영·기각·보류 이유는 `docs/project/reviews/2026-08-06-files-folders-paths-opus5-adjudication.md`에 기록했습니다.

## 반영과 검증 결과

원고에는 tracked·staged·ignored 정의와 `git check-ignore -v`, 파일 실재·정확한 이름·심볼릭 링크 최종 대상 진단, POSIX 계열 셸 범위, Finder 표시 설정과 Windows 경로 접두사, Astro base path와 생성 절차, 상대 경로 계산·AI 작업 계약 연습을 보완했습니다. `working-with-coding-agents.md`의 최초 커밋 전 사례도 현재 저장소 상태처럼 읽히지 않게 고쳤고, POSIX·Microsoft·Git·Starlight·Astro·Apple 공식 자료의 확인 범위를 `research/source-map.md`와 동기화했습니다.

최종 원고는 본문 19,075자이며 H1 1개·H2 18개·H3 17개·표 9개·체크 항목 12개·코드 블록 7개입니다. `ASTRO_TELEMETRY_DISABLED=1 npm run check`에서 Node 테스트 26개, 공개 콘텐츠 58개, 참조 문서 122개, 학습 SVG 11개와 정적 페이지·생성 HTML 59개를 통과했습니다. 1440×1000과 390×844 최종 `review` 렌더링에서 `검토 중` 배지, 페이지·본문 가로 넘침 없음과 콘솔 오류·경고 0건을 확인했고, 모바일에서는 넓은 표 4개만 요소 내부에서 스크롤됩니다.

## 승격 경계

Opus 결과는 독립 AI 검토이므로 사람 `technical:`·`editorial:`·`reader:` 증거가 아닙니다. Codex 재판정·필수 수정·공식 출처 확인·자동 검사와 브라우저 검증을 갖췄으므로 원고는 `review`로 올리되, 이는 “검토 중”이라는 뜻입니다. 사람 기술·편집 검토와 실제 비개발자 독자 테스트가 각각 완료되기 전에는 `ready`로 올리지 않습니다. Git 대소문자 전용 이름 변경과 제품별 숨김 파일 세부는 후속 조사 대기이며, 브랜드 시각 토큰이나 독자 피드백이 필요성을 입증하기 전에는 다이어그램을 추가하지 않습니다.
