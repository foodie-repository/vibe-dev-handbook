# Task20 PBV-09 독립 검토 요청 — 2026-08-28

이는 검토 입력 준비 기록이며 호출·PASS·최종 M5 검토가 아닙니다. review_id는 Task20-PBV-09, scope는 visual-unit, status는 blocked/subscription_unverified, implementation은 자동·시각 자체검증 완료, release_ready는 false입니다. branch `codex/public-beta-completion`·HEAD `eacf0264268f9b4dcf1dfa4e95399c7df3c5957c`이며 로컬 커밋은 하지 않았습니다.

현재 입력의 개별·결합 SHA-256과 파일 수는 manifest의 pbv09 행을 기준으로 확인합니다. manifest에 개별 해시와 결합 규칙을 명시했으며 파일 잠금이나 불변 복사본이 아닙니다. 실제 입력 변경 때만 영향 범위를 기록하고 새 해시로 검토합니다.

[공통 계약](opus5-review-contract.md)의 C01~C12와 실제 Task20 조항을 적용하십시오. 목표는 “신호 수집에서 안정화·복구·검증·학습까지 어떻게 순환하는가?”이며 7노드/7연결, 실제 복구 성공 비증명과 병행 가능 경계, 원고 alt·전후 문맥, title/desc·4marker·테마·모바일 판독·잘림·실패 증거를 검토합니다. PBVA-003을 포함하고 원래 PBVA-004 대상은 아닙니다. 단위 검토를 M5 R01~R25 공개59개/R26 전체 검토로 계산하지 않습니다.

[입력 manifest](review-inputs-2026-08-28.json)의 pbv09 unit에 실제 SVG/Mermaid 전체, PB-048 원고 전체, 해당 source-map/source-gap과 시각 감사, Task20 원문 조항, 구현보고서, manifest와 최종 full6/crop6/header6를 제공합니다. Codex 요약이나 자체 PASS 대신 실제 원문과 픽셀을 읽으십시오. full 축소본은 배치만 보여 주므로 판독성은 원본crop으로 확인하십시오.

집중182/XML/전체check exit0·tests65/build60/SVG14/literal0입니다. 실제 headedChrome152의6상태는 HTTP/H1/draft/theme4/16labels/topology/marker/overflow/실제scroll/console/pageerror/external 기준을 통과했습니다. 초기 helper URL 전역 실패2와 후속6/6, bounded20tile/14exactseam, direct-vs-full mobile2 픽셀 불일치, cleanup helper 실패와 최종 소유PID 부재를 원본 기록에서 확인하십시오. 모바일 글자를 키운 대신 그림이 약149px 길어졌습니다. 이 절충도 독립적으로 판단하십시오.

마지막 [preflight](claude-preflight-2026-08-28.md)에서는 Pro 로그인만 확인했고 정확한 `claude-opus-4-8[1m]`·1M·high의 구독 포함 및 추가 사용 비소비는 not-confirmed입니다. 모델 호출0, actual invocation not-run, observed settings not-confirmed입니다. 실제 조건 변화 후 비용·정확한 설정을 동시에 입증하기 전에는 재시도하지 않으며 유료·시험·fallback은 금지합니다.

Read-only·파일수정/셸/Git/테스트/웹/MCP/플러그인/스킬/하위에이전트 금지와 공통 계약의 finding 중심 결과 형식을 유지하십시오. 예정 결과는 `task20-pbv09-2026-08-28-claude-review.md`이며 아직 없습니다. Critical/Important의 실제 독립 검토·수정·영향재검증을 마치기 전에는 keep/finding resolved/완료/선별commit하지 않습니다.
