# 공개 베타 Codex 독립 검토 요청서 템플릿

이 요청서는 [Codex 독립 검토 계약](../docs/project/reviews/public-beta-1/codex-review-contract.md)을 M5 R01~R26의 fresh Codex reviewer에게 적용할 때만 사용합니다. controller·작성자·이전 대화 이력을 전달하지 않으며 reviewer는 Read-only로 고정 입력만 읽고 결과를 응답으로만 반환합니다. R01~R25에는 개별 reviewer 독립성 override를 넣지 않고 R26만 R01~R25 reviewer들과 분리된 fresh Codex reviewer를 적용합니다.

## 요청 메타데이터와 고정 입력

| 항목 | 반드시 기록할 값 |
|---|---|
| review_id / slug / 기준 SHA | 실제 행 ID, 기준 commit, 수용 기준·비목표·의존관계·재검토 대상 finding |
| planned / actual model and reasoning effort | R01~R25 gpt-6-astra/high, R26 gpt-6-astra/xhigh 및 실제 값 |
| 고정 입력·개별 SHA-256·결합 SHA-256 | 아래 다섯 입력 범주의 전체 경로와 값 |
| 권한·컨텍스트 | Read-only, fresh context, 이전 대화 없음, 파일·Git·셸·테스트·웹·MCP·플러그인·스킬·하위 에이전트 금지 |
| R26 추가 입력 | R01~R25 결과·재판정·재검토, 콘텐츠 감사·source gap·시각 감사·CONTENT_MAP.md |

1. 이 계약, 해당 행, 실제 쟁점에 필요한 명세/계획 조항만 제공합니다.
2. 대상 원고 전체(frontmatter·본문·코드/프롬프트·표·alt·교차 링크)를 제공합니다.
3. 주장 판단에 필요한 실제 공식·1차 출처 원문 또는 추적 가능한 출처 발췌, URL·확인일·적용 범위, source-map/source-gap 행을 제공합니다. 발췌에는 원문 위치·누락 범위·필요한 예외를 남깁니다.
4. 관련 중심 장·인접 문맥·용어집 정의, 소비 SVG·Mermaid 원본·alt·실제 렌더 증거와 공통 자산의 모든 소비 문맥·접근성·테마·뷰포트 한계를 제공합니다.
5. 관련 콘텐츠/출처/시각 감사 행, 미해결 finding·재판정·diff·검증 결과와 적용외 기준의 예외 추적을 제공합니다.

## reviewer 지시

1. 모든 고정 입력을 실제로 끝까지 읽고, 미독·누락·해시 불일치·범위 외 참조가 있으면 BLOCKED로 종료합니다.
2. C01~C12를 전부 적용하고, CASE/DURABLE/AUDIENCE/ANALOGY/EVIDENCE/SOURCE/TERM/VISUAL·폐기 사례·PRD/Software Design Description/Spec-Driven Development/TDD 구분·방법론 성숙도·시각 접근성 기준을 해당 역할에 맞게 확인합니다.
3. Critical/Important/Minor finding마다 안정 ID, 파일 위치, 최소 인용, 근거, 영향, 최소 수정, 재확인 기준을 한국어로 기록합니다.
4. 9항목 0~2점/18점 만점, 핵심 장 18점 중15점 이상, 치명 항목0 금지 기준을 적용합니다. 인덱스/참고편과 정책/시각 작업 단위에는 역할별 근거와 원고 점수표 적용외 이유를 명시합니다.
5. PASS는 입력 완독·불변, 실제 모델/effort 기록, 필수 기준 적합, Critical 0·Important 0, 치명 항목0 없음, 필요한 점수 기준 충족일 때만 사용합니다.
6. 소유자 승인, ready, RC, M6/M7, commit·push·배포·공개 URL을 승인하거나 실행하지 않습니다.

## 결과 형식과 controller 저장

다음 여섯 절을 이 순서로 포함한 한국어 응답만 반환합니다: 검토 범위와 실제 읽은 입력, 판정과 건수, 위치별 finding, 9항목 루브릭과 치명 항목, 미확인 사실·남은 위험·검토 한계, 재확인 기준. 네 번째 절에는 항목별 점수/근거·합계·치명 항목·적용외 이유를 모두 적습니다. 출력 상한이나 중간 종료가 있으면 불완전으로 기록하고 PASS를 사용하지 않습니다.

reviewer는 결과 파일을 쓰지 않습니다. controller가 입력 완전성·SHA-256·실제 모델/effort·읽기 전용 권한·응답 형식을 확인한 뒤에만 그 응답을 행렬의 정본 *-codex-review.md 또는 *-codex-rereview.md 경로에 저장합니다. 요청서와 저장 전 응답은 실행·PASS·M5 완료 증거가 아닙니다.
