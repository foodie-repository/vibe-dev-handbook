# R04 입력 준비와 최초 독립 검토 — 2026-11-15

이 체크포인트는 검증된 입력 준비와 최초 실제 검토 기록을 보존합니다. 준비 코드 검토는 PASS C0/I0/M0이고 원고 검토는 별도로 NEEDS CHANGES C0/I2/M8·16/18입니다. R04 done, 원고 review/ready, M5 완료 또는 공개 승인이 아닙니다. 완료 행은 R01~R03이며 공개59개 draft56/review3/ready0을 유지합니다.

## 입력과 실행

- 기준 commit: `9cf3c2634a2aa1e5f14e734478409c239244a027`.
- 요청: [r04-api-data-auth-request.md](r04-api-data-auth-request.md). 전체 원고·관련 전체 텍스트·SVG/Mermaid·직접 근거, 지정 문맥13개와 원본 PNG18개의 역할·한계를 고정했습니다.
- manifest: [r04-api-data-auth-input-manifest.json](r04-api-data-auth-input-manifest.json), SHA `301d7d3a2429d8a1e06e295907aedd6d068c90b9bbff91ad1fc82987ec2dd6d4`, 결합 SHA `6b1438f6f35d29511ce43e0e5b80bcf0e9a29813f35b481472d5159f7096d69b`.
- 실제 전달: 텍스트16파일·36청크와 PNG18개를 `localImage/detail:original` 입력으로 전달했습니다. 준비 검사기와 테스트는 보충 manifest로 별도 고정했습니다. payload SHA `fb6797cc074293976b533e5a15edb5b1f5f228b1a9b39ccc6d42acf26af2f2e4`.
- 실제 프로필: `gpt-6-astra/high`, provider `openai`, fresh history0, `ephemeral:false`, `readOnly/networkAccess:false`, approval never. MCP15개 disabled·도구0이며 실제 검토에 view_image 도구도 비활성화했습니다. 원본 이미지 입력을 직접 판독했으며 경로나 OCR로 대체하지 않았습니다.
- 프로세스 한정 공식 ChatGPT 구독 경로와 기존 로그인, 추가 credits false를 확인했습니다. API키·유료 API·전역 설정·인증 변경은 없습니다. 주간 잔여 사용량은 최신 사용자 지시에 따라 작업 선택·중단 조건으로 사용하지 않았습니다.
- CLI0.166.0의 별도 진단 세션에서 실제 짧은 응답 후 다른 프로세스가 같은 저장 ID와 history1을 복구했습니다. 진단은 원고 reviewer로 재사용하지 않았습니다. R04 최초 reviewer의 후속 실제 재개는 수정 검토 단계에서 별도로 확인해야 합니다. R02 승계 예외는 적용하지 않습니다.

## 관측한 검증

| 검증 | 결과 |
|---|---|
| 입력32개·문맥13개·PNG/렌더 계보 local evidence | errors0, exit0 |
| `node --test tests/r04-review-inputs.test.mjs` | 5/5, fail0, skip0, exit0 |
| `npm run check:static` | 195/195, fail0, skip0; 콘텐츠59·참조217·SVG14·계획100/중복0/누락0, exit0 |
| `npm run build` | 60페이지·Pagefind60·SVG14, exit0. 기존 site 미설정 sitemap 경고 유지 |
| `node scripts/validate-built-output.mjs` | HTML60·리터럴 Markdown0·고지 바이트 동일, exit0 |
| 실제 전송·프로필·응답 후 불변성 감사 | 16파일·36청크·PNG18·payload 일치, 도구 위반0, errors0, exit0 |
| 별도 준비 코드 독립 검토 | PASS C0/I0/M0. 실제 테스트·staged 범위는 controller 책임으로 분리 |

원고·그림은 이 단위에서 수정하지 않았습니다. Task20 Fix Round1 당시 자산4파일과 현재 SVG/MMD의 바이트 일치를 확인하고 기존 PNG를 재사용했습니다. 새로운 브라우저 실행을 했다고 주장하지 않습니다. 실제 reviewer의 PNG18 판독은 과거 DOM·캡처 기록과 구별해 [최초 결과](r04-api-data-auth-codex-review.md)에 이미지별로 보존했습니다. 이번에 발견한 자기 호출 화살표 가림은 과거 결함0 관측을 소급 편집하지 않고 R04-M01로 별도 기록합니다.

## 최초 결과와 남은 일

원래 응답 SHA는 `bd7cddfcf647c8e0df97c978fb915f9078630d9a53c9e54d0d08a9938ee493e3`이며 정본은 원 응답에 파일 종결 개행만 붙였습니다. Important2건은 rollback의 취소 범위와 주최자 정원 변경의 경쟁 조건입니다. Minor8건은 도표3건, 401 challenge, 인접 SQL 필드명, 역사 브리프의 그림 계약, 테스트 전용 자격 증명 경계, 인접 보안 장의 비목표 알림 문맥입니다. 다음 단위에서 현재 근거와 대조해 재판정하고 영향 범위만 수정·실제 렌더·같은 reviewer 후속 확인을 수행합니다. 인접 장의 전체 독립 검토를 대신하지 않습니다.

로컬 원시 로그·세션 식별자·진단 스크립트와 PNG는 기존 ignored 진행 원장에서 연결합니다. 커밋으로 이동되는 증거와 로컬 전용 증거를 구별하며 전체 사이트 QA·소유자 최종 승인·push·배포·공개 URL은 수행하지 않았습니다.
