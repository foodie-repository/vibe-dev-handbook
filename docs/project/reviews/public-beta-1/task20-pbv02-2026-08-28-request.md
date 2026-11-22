# Task20 PBV-02 독립 검토 요청 — 2026-08-28

이 문서는 시각 단위의 검토 입력 준비 기록입니다. Claude 호출·정상 검토·PASS 및 최종 M5 검토가 아닙니다.

- review_id: Task20-PBV-02; review_scope: visual-unit
- branch/HEAD: codex/public-beta-completion / eacf0264268f9b4dcf1dfa4e95399c7df3c5957c
- status: blocked; implementation_state: 기존 구현 보존·자동/시각 자체 검증 완료; required_review_state: 차단; release_ready: false
- block_reason: subscription_unverified; 마지막 확인은 [2026-08-28 preflight](claude-preflight-2026-08-28.md)이며 모델 호출0·실제 인자 not-run·실제 모델/컨텍스트/effort not-confirmed입니다.
- 요청 설정: claude-opus-4-8[1m] / 1M / high. 구독 포함 사용/구독 외 과금 비소비를 실제 조건 변화 후 입증하기 전에는 호출하지 않습니다. 유료·시험·fallback은 금지합니다.
- 고정 입력: [입력 manifest](review-inputs-2026-08-28.json)의 pbv02 행에 현재 전체 입력·개별/결합 SHA-256을 기록합니다. 이전49파일 해시와 변경 파일은 manifest의 input_revisions에 보존했습니다.

## 수용 기준과 실제 입력

[공통 계약](opus5-review-contract.md) C01~C12를 모두 적용 여부와 함께 확인하십시오. C01~C08은 두 소비 원고와 SVG/원본의 학습 질문·7단계/7연결·정정/복원 피드백·fixture/권리/실제 성공 비증명·용어·접근성·테마/판독성/잘림에 적용합니다. C09~C12는 draft/검토/공개 상태 분리·실패 증거·필수 검토/입력 해시/커밋/권한에 적용합니다. 이번은 그림 단위이므로 원고9항목 전체 점수나 M5 완료를 부여하지 않으며 M5 전체59개/R26 범위를 축소하지 않습니다.

SVG·Mermaid 전체와 두 소비 원고 전체, 실제 case brief/source-map/source-gap, Task20 원문 발췌, 시각 감사와 기존 PBVA-004, 구현 보고서, append-only manifest, 최종 전체 PNG12·그림crop12·상단viewport12를 읽으십시오. Codex가 “문제없음”이라고 요약한 말로 source/topology나 픽셀을 대체하지 마십시오. 현재 제품·계정·데이터 권리/재배포·실제 복구를 새로 확인한 주장은 없으며 기존 not-confirmed를 닫지 않았습니다. 과거 원고 검토가 이번 SVG의 독립 검토는 아닙니다.

## 실제 검증과 남은 경계

원래 미커밋 SVG/MMD 두 해시는 불변이고 focused42/XML0·fresh static65/65/build60/SVG14/built literal0입니다. 실제 headed Chrome152의 두 경로×3viewport×2theme12상태에서 HTTP/H1/draft/theme4/load/노드/화살표/marker/overflow/internal-scroll/console/pageerror/외부 요청 실패0을 확인했습니다. 원본 크기 그림12와 상단12를 자체 시각 확인했지만 이는 독립 검토 판정이 아닙니다.

실패 이력은 그대로 읽어야 합니다. 최초 배지/lazy helper 실패12와 local JS ERR_ABORTED1, sticky-header 직접crop, 16384px 반복 fullPage8은 성공 증거에 섞지 않았습니다. 최종 전체12 중 긴8은 실제 bounded32타일의24연결부 동일 픽셀로 결합했습니다. 실제 스크롤 화면과 비교한 관찰 좌표차-16px·최대 채널차1/255와 crop 보정은 manifest에 명시되어 있습니다. 원래 OCR H1 exact3/12·배지9/12는 보조일 뿐이고 완전 일치로 주장하지 않습니다. 긴 전체 PNG 축소본은 배치만 확인하며 글자 판독은 원본 crop을 사용합니다. 상단 목차 현재 항목의 즉시 reset 지연은 Task21 전체 내비게이션 검증에 남습니다.

최종 manifest는 cleanup 포함93 records·SHA-256 `78396738ec0f8a896fdfc9ecb4888c4f44cedfb8c9f92726007f909a6dbdffd6`입니다. 전용 Chrome은 종료했고 preview4341은 다음 독립 자산에 재사용합니다. 입력 변경 시 전후 해시/영향 검증을 갱신하며 미호출인 Claude PASS는 없습니다. PBV-02는 reflow/PBVA-004·현재 미해결 C0/I4에 남고 단위 커밋·Task20/M4/M5/ready·소유자 승인은 하지 않았습니다.

## 결과 계약

실제 내부 스크롤 이동은 별도 `scroll-interaction.jsonl`의12상태·24컨테이너(0→최대→복귀)에서 보충 확인했으며13-record SHA-256은 `508b65bedddd58ce89c986b8dc598c909b3bdfb031a276a95463eb19d316a9a8`입니다. source4개는 불변이고 기존 전체/그림 검사를 반복하지 않았습니다. 입력 manifest에는 이 실제 측정과 갱신된 감사/보고서의 전후 해시를 반영합니다.

Read-only와 공통 계약6절 finding 중심 출력을 따르십시오. 파일 수정·셸/Bash·Git·테스트·웹·MCP·플러그인·스킬·하위 에이전트를 금지합니다. 예정 결과 경로는 `task20-pbv02-2026-08-28-claude-review.md`이며 아직 존재하지 않습니다. 모든 Critical/Important를 실제 독립 검토·필요 수정·영향 재검증으로 해소한 뒤에만 이 단위를 닫고 선별 local commit합니다.
