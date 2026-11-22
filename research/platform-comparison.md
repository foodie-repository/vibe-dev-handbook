# 문서 사이트 플랫폼 비교

확인일: 2026-08-04

## 결론

초기 버전은 Astro Starlight가 가장 적합합니다. 콘텐츠 중심 정적 사이트의 단순성을 유지하면서 Markdown/MDX, 기본 검색, 한국어 UI, 향후 컴포넌트 확장 경로를 함께 확보합니다.

| 기준 | Astro Starlight | Material for MkDocs | Docusaurus | 일반 웹앱 |
|---|---|---|---|---|
| Markdown 중심 집필 | 매우 적합 | 매우 적합 | 적합 | 별도 설계 필요 |
| 기본 문서 UX·검색 | 강함 | 강함 | 강함 | 직접 구현 |
| 한국어·다국어 | 내장 지원 | 플러그인·설정 | 내장 지원 | 직접 구현 |
| 인터랙티브 확장 | Astro/MDX로 유연 | 제한적 | React로 강함 | 가장 강함 |
| 초기 운영 복잡성 | 낮음 | 낮음 | 중간 | 높음 |
| Node 생태계 연결 | 강함 | Python 생태계 | 강함 | 선택에 따라 다름 |
| 이 프로젝트 적합도 | 권장 | 좋은 대안 | 기능 과다 가능 | 현재는 과설계 |

## 선택 근거

Starlight는 `src/content/docs/`의 Markdown·MDX를 페이지로 만들고, Pagefind 기반 전체 텍스트 검색을 기본 제공합니다. 루트 로케일을 한국어로 설정할 수 있으며, Astro 정적 빌드는 GitHub Pages에 Actions로 배포할 수 있습니다.

Material for MkDocs는 비개발자 집필 흐름과 성숙한 테마 측면에서 매우 강합니다. 다만 이 프로젝트는 향후 의사결정 시뮬레이션이나 작은 인터랙티브 컴포넌트를 붙일 가능성이 있어 Astro의 확장 경로를 더 높게 평가했습니다.

Docusaurus는 React 생태계와 문서 버전 관리가 강하지만, 버전 관리는 운영 복잡성을 증가시키며 이 프로젝트의 초기 요구가 아닙니다.

## 공식 출처

- Starlight project structure: https://starlight.astro.build/guides/project-structure/
- Starlight site search: https://starlight.astro.build/ko/guides/site-search/
- Starlight configuration: https://starlight.astro.build/ko/reference/configuration/
- Astro GitHub Pages deployment: https://docs.astro.build/en/guides/deploy/github/
- Material for MkDocs: https://squidfunk.github.io/mkdocs-material/
- Docusaurus versioning: https://docusaurus.io/docs/versioning
