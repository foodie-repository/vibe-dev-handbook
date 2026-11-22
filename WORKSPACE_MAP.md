# 워크스페이스 지도

| 경로 | 책임 | 여기에 두지 않는 것 |
|---|---|---|
| `src/content/docs/` | 공개 사이트에 렌더링되는 학습 문서 | 조사 중 메모, 내부 작업 로그 |
| `src/assets/diagrams/` | 빌드 과정에서 처리되는 SVG와 Mermaid 원본 | 외부 저작권이 불명확한 이미지 |
| `research/` | 출처, 비교 조사, 용어 성숙도, 교육과정 커버리지 | 출판용 최종 문장 |
| `templates/` | 장, PRD, 설계 명세, ADR, 테스트 계획, 사람 기술·편집·비개발자 독자 검토 템플릿 | 특정 사례의 완성 문서와 실제 검토 결과 |
| `docs/project/` | 정보 구조, 편집 지침, 품질 기준, 배포 결정 | 공개 학습 본문 |
| `docs/adr/` | 장기 영향을 주는 아키텍처 결정 기록 | 일회성 작업 메모 |
| `docs/superpowers/specs/` | 합의된 설계 명세 | 구현 세부 체크리스트 |
| `docs/superpowers/plans/` | Codex가 단계별로 실행할 구현 계획 | 프로젝트 목적 재논의 |
| `scripts/` | 콘텐츠 및 빌드 보조 자동화 | 핵심 학습 콘텐츠 |
| `tests/` | 자동화 동작의 회귀 테스트 | 수동 검토 체크리스트 |
| `.github/workflows/` | CI와 GitHub Pages 배포 | 로컬 전용 비밀 설정 |

## 단일 진실 공급원

- 프로젝트 목적과 현재 결정: `PROJECT_CONTEXT.md`
- 단계별 우선순위: `ROADMAP.md`
- 에이전트 행동 규칙: `AGENTS.md`
- 콘텐츠 정보 구조: `docs/project/information-architecture.md`
- 콘텐츠 상태와 승격 기준: `docs/project/content-lifecycle.md`
- 출처와 최신성: `research/source-map.md`
- 장기 기술 결정: `docs/adr/`
