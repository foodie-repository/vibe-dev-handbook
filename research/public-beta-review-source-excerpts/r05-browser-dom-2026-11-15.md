# R05 브라우저·DOM·렌더링 — 현재성 보충 근거

확인일은 2026-11-15입니다. 기존 source-map의 2026-08-04·13 기록을 소급 갱신하지 않습니다. 아래는 승인된 공식·1차 URL의 Tavily 본문 추출에서 실제 읽은 관련 부분만 요약한 것으로, 전체 표준 완독·특정 브라우저 구현·실제 UI 조작을 주장하지 않습니다. 접근 실패는 없었으며 도구의 관련 부분 추출이므로 발췌 밖 주장은 미확인입니다. 각 짧은 인용과 요약은 reviewer에게 직접 근거를 제공하기 위한 것이며 원고 판정 자체가 아닙니다.

| 출처와 읽은 부분 | 직접 근거와 적용 범위 | 일반화 금지·남은 판단 |
|---|---|---|
| [HTML parsing](https://html.spec.whatwg.org/multipage/parsing.html), 13.2.1 | “The output is a `Document` object.” 입력을 토큰화와 트리 구성으로 처리하며, 파싱 중 스크립트에 의해 재진입할 수 있습니다. | 모든 엔진의 내부 스레드나 고정 직렬 렌더 순서를 증명하지 않습니다. |
| [HTML event loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops), task sources·rendering opportunity | “The rendering task source”는 렌더링 갱신용입니다. 사용자 상호작용·네트워크·탐색의 task source와 렌더링 기회를 구분합니다. | task와 프레임을 일대일로 고정하거나 렌더링 빈도를 보장하지 않습니다. |
| [DOM Standard](https://dom.spec.whatwg.org/), node tree·events | “Each such document is represented as a node tree.” 트리와 이벤트 전파를 정의합니다. | 현재 DOM을 응답 원문·픽셀·보조 기술 결과와 동일시하지 않습니다. |
| [CSSOM](https://drafts.csswg.org/cssom/), Abstract·Status | “CSSOM defines APIs”에 CSS 파싱·직렬화 등이 포함됩니다. 현재 공개 본문은 변경 가능한 editors’ draft라고 명시합니다. | Recommendation·모든 렌더 엔진 내부 표현으로 확대하지 않으며 별도 발행일을 추정하지 않습니다. |
| [Chrome Network](https://developer.chrome.com/docs/devtools/network/), Log network activity·Response·Initiator | “DevTools only logs network activity while it's open”이라고 설명합니다. 응답 본문·상태·헤더·요청 계기·시간은 서로 다른 관측 항목입니다. | Network 성공으로 DOM·상태·사용자 과업 성공을 증명하지 않습니다. |
| [Chrome DOM](https://developer.chrome.com/docs/devtools/dom/), HTML versus DOM·DOM 변경 | “The page's HTML is now different than its DOM.” 스크립트의 노드 제거·추가 예시로 구분합니다. | 이번 추출에 소스 저장 기능의 전체 계약은 포함되지 않았습니다. 임시 편집을 항상 영구 저장으로 간주할 수 없습니다. |
| [HTML lazy loading attributes](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#lazy-loading-attributes), lazy/eager·will lazy load | 현재 본문은 `img`, `audio`, `video`, `iframe`을 열거합니다. `lazy`는 조건이 충족될 때까지 자원 가져오기를 미루고, 누락·잘못된 값은 Eager입니다. 스크립트가 비활성화된 경우 will lazy load는 false입니다. | 기존 원고가 `img`·`iframe`을 예로 제한한 것인지 전체 지원 요소를 단정한 것인지 reviewer가 판단해야 합니다. 표준 열거를 개별 브라우저의 지원 보장으로 확대하지 않습니다. |
| [Chrome CSS issues](https://developer.chrome.com/docs/devtools/css/issues), Styles·Computed | “resolved CSS values”를 Computed에서 보여 주며 상속·cascade·계산값을 구분합니다. | 계산값 하나가 전체 화면의 판독성·과업·접근성을 증명하지 않습니다. |
| [Chrome Rendering](https://developer.chrome.com/docs/devtools/rendering), Overview | repaint·layout shift 관측과 CSS media 기능 등의 에뮬레이션을 설명합니다. | 개발자 도구 에뮬레이션을 실제 기기의 모든 입력·성능·호환성 검사로 계산하지 않습니다. |
| [MDN Curriculum](https://developer.mozilla.org/en-US/curriculum/), Core·Extensions | HTML·CSS·JavaScript와 접근성·성능·보안·테스트·프레임워크를 구분해 다룹니다. | 교육 범위 참고이며 규범 표준이나 특정 제품의 성능 증명이 아닙니다. |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/), 키보드 함정·포커스 관련 발췌 | 키보드로 진입한 요소에서 빠져나올 수 있어야 한다는 기준과 포커스 가림·모양의 개별 등급 기준을 구분합니다. | 전체 성공 기준이나 사이트 적합성을 이번 발췌로 검사하지 않았습니다. AAA 기준을 A/AA 필수 조건으로 혼용하지 않습니다. |
| [WAI 접근성 소개](https://www.w3.org/WAI/fundamentals/accessibility-intro/), Keyboard·Alternative text·Evaluating | “no tool alone can determine”이라고 한계를 명시합니다. 키보드·동등한 대체 텍스트·전문적 사람 평가를 함께 다룹니다. | 단일 자동 검사·화면·DOM 관측은 전체 접근성 적합 판정이 아닙니다. |

도구 응답 식별자는 `c99781f9-baec-4c36-95ac-ff79ece71adf`, `f22bc114-efb0-490b-9956-0131dc6afcd7`, `f41d4e9c-1f9a-4052-b71d-03115b928a05`입니다. HTML lazy-loading의 현재 요소 범위는 과거 확인과 구별해 이번 검토 입력에 포함하며, 확인하지 않은 도구 버전·새 브라우저 실행은 기록하지 않습니다. 기존 원고·그림·과거 PNG는 이 근거 준비 단계에서 수정하지 않습니다.
