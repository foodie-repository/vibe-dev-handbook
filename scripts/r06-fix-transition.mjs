import {createHash} from 'node:crypto';
import {r06PreCloseoutBytes} from './r06-closeout.mjs';
const sha=b=>createHash('sha256').update(b).digest('hex');
export const r06FixTransitions=[
  {
    "path": "src/content/docs/06-requirements-design/prd-sdd-tdd.md",
    "before": "54195934c6010ede04b732f3f5b4a986696ac3ea812b930000aed6b8c2617520",
    "after": "7ad9962b380f3a16a3edb238626c4067c39bb2e86a04dfa3d6bce10a2e24a687",
    "replacements": [
      [
        "| Spec-Driven Development | 검토 가능한 스펙·저장소 문맥·권한·검증 계약 | plan·tasks·구현 diff·단계별 검토 기록 | 현재 Spec Kit 핵심 사례에서는 Spec → Plan → Tasks → Implement이며 필요하면 앞 산출물로 되돌아감 | 틀린 스펙을 정교하게 구현하거나 도구 흐름을 보편 표준으로 봄 |",
        "| Spec-Driven Development | 검토 가능한 스펙·저장소 문맥·권한·검증 계약 | plan·tasks·구현 diff·단계별 검토 기록 | 이 장은 2026-08-13에 확인한 Spec Kit 사례의 Spec → Plan → Tasks → Implement 연결을 설명하며 필요하면 앞 산출물로 되돌아감 | 틀린 스펙을 정교하게 구현하거나 도구 흐름을 보편 표준으로 봄 |"
      ],
      [
        "```text\n사용자 문제와 목표\n→ PRD의 요구와 수용 기준\n→ Software Design Description의 책임·경계·데이터·품질 결정\n→ Spec-Driven Development의 검토 가능한 스펙·계획·작업\n→ 구현 작업 안의 TDD 반복과 다른 테스트\n→ 빌드·통합·배포·운영 증거\n→ 학습 결과를 요구와 설계에 다시 반영\n```",
        "1. 사용자 문제와 목표를 PRD의 요구와 수용 기준으로 연결합니다.\n2. 요구는 두 갈래로 이어집니다. Software Design Description은 책임·경계·데이터·품질 결정을 설명하고, 기능 스펙은 구현할 행동과 확인 조건을 구체화합니다.\n3. 설계 설명과 기능 스펙은 계획·작업 분해에서 만나며, 구현 작업 안에서는 TDD 반복과 다른 테스트를 적용합니다.\n4. 테스트·빌드·리뷰와 필요한 배포·운영 증거를 요구에 연결하고, 배운 사실을 요구·설계·스펙에 다시 반영합니다."
      ],
      [
        "이 `FR-014`는 원천 표시와 최신성 판단을 한 흐름으로 설명하기 위한 복합 교육 예시입니다. [데이터 분석가의 대시보드 사례](../../12-case-studies/analytics-dashboard-case-study/)에서는 같은 학습 범위를 원천·단위의 `R-02`와 최신성·갱신 상태의 `R-03`으로 나눠 추적합니다.",
        "이 `FR-014`는 원천 표시와 최신성 판단을 한 흐름으로 설명하기 위한 복합 교육 예시이며 사례의 요구사항 ID가 아닙니다. [데이터 분석가의 대시보드 사례](../../12-case-studies/analytics-dashboard-case-study/)에 적용할 때는 `D-01`의 가상 원천 표시, `D-02`의 거래일·단위·가격 기준, `D-03`의 버전·기준 시점, `D-04`의 오래됨과 이유 표시, `D-05`의 갱신 실패·마지막 정상 버전 보존을 나눠 추적합니다. 실제 시장 데이터의 최신성이나 원천 정확성을 검증한 예시는 아닙니다."
      ],
      [
        "2. **Green**: 현재 실패를 통과시키는 데 필요한 최소한의 구현을 작성하고 관련 테스트가 통과하는지 확인합니다. 한 입력만 하드코딩하거나 합의된 품질 조건을 무시하는 것은 최소 구현이 아닙니다.",
        "2. **Green**: 현재 실패를 통과시키는 데 필요한 가장 단순한 구현을 작성하고 관련 테스트가 통과하는지 확인합니다. 한 예에만 맞춘 임시 구현에서 시작할 수 있지만 이를 요구 전체의 충족으로 보고하지 않습니다. 다음 사례와 경계 테스트를 추가하는 반복에서 필요한 일반화를 확인하고, 합의된 품질 조건도 계속 지켜야 합니다."
      ],
      [
        "저장소의 `templates/`에는 PRD, Software Design Description, Spec-Driven Development 작업 명세와 에이전트 작업 브리프 템플릿이 있습니다. ISO/IEC/IEEE 29148:2018은 현재 발행본이지만 개정 예정이고, IEEE 1016-2009는 inactive-reserved이며, Spec Kit는 2026-08-13 현재 제품 문서입니다. 출처의 확인일·상태·적용 범위와 일반화 금지선은 `research/source-map.md`에서 관리합니다.",
        "저장소의 `templates/`에는 PRD, Software Design Description, Spec-Driven Development 작업 명세와 에이전트 작업 브리프 템플릿이 있습니다. ISO/IEC/IEEE 29148:2018은 현재 발행본이지만 개정 예정이고, IEEE 1016-2009는 inactive-reserved이며, 이 장의 Spec Kit 네 연결 설명은 2026-08-13에 확인한 제품 사례를 바탕으로 합니다. 2026-11-15에 다시 확인한 [공식 홈페이지](https://github.github.com/spec-kit/)는 `Specify → Plan → Tasks → Implement → Converge`를 핵심 흐름으로 표시합니다. 이 장의 교육용 네 연결과 현재 도구의 전체 흐름을 구분하고, 적용 전 공식 문서를 확인하세요. 과거 출처의 확인일·상태·적용 범위는 `research/source-map.md`에 보존하고 이번 현재성 보충은 별도 검토 출처 기록에 남깁니다."
      ]
    ]
  },
  {
    "path": "src/content/docs/08-quality/testing-strategy.md",
    "before": "1a7932c46739510aae738a5375c81a5bd1d830bc7d0cf4fb15090114f5493671",
    "after": "fba16a123e78896fab76cd10a1f2eaf057b5893007fc11504238e73766b69e47",
    "replacements": [
      [
        "요구사항 `FR-014`를 “사용자는 지표의 정의·원천·기준 시점과 갱신 상태를 확인하고, 오래된 데이터에는 경고를 볼 수 있다”라고 해보겠습니다. 이 요구는 [대시보드 사례의 R-02 설명 가능성과 R-03 불확실성 표시](../../12-case-studies/analytics-dashboard-case-study/#테스트는-요구사항별-실패-위험을-겨냥합니다)에 대응합니다.",
        "요구사항 `FR-014`를 “사용자는 지표의 정의·원천·기준 시점과 갱신 상태를 확인하고, 오래된 데이터에는 경고를 볼 수 있다”라는 복합 교육 예시로 두겠습니다. 이는 사례의 요구사항 ID가 아닙니다. [현재 대시보드 사례의 요구별 테스트](../../12-case-studies/analytics-dashboard-case-study/#테스트는-요구사항별-실패-위험을-겨냥합니다)와 연결할 때는 `D-01`의 가상 원천 표시, `D-02`의 거래일·단위·가격 기준, `D-03`의 버전·기준 시점, `D-04`의 오래됨과 이유 표시, `D-05`의 갱신 실패·마지막 정상 버전 보존을 각각 확인합니다. 실제 시장 데이터의 최신성이나 원천 정확성을 검증한 것으로 확대하지 않습니다."
      ]
    ]
  },
  {
    "path": "src/content/docs/reference/methodology-map.md",
    "before": "74299370625b5c51e1bf136b00f567b2a44e306069fa3ef4d5d204bf9974bcf0",
    "after": "79bfb8db36b353c6665a5fc2d7e1d73b36d24498da3992cfc3b0cb41ba7a0446",
    "replacements": [
      [
        "- **관계·순서·중첩**: 현재 GitHub Spec Kit 사례의 핵심 흐름은 `Spec → Plan → Tasks → Implement`이지만 필요하면 앞 산출물로 돌아갑니다. PRD·Software Design Description을 입력으로 쓰거나 작은 변경에서는 한 브리프 안에 필요한 부분을 합칠 수 있습니다. AI 개발의 스펙 책임과 같은 축을 설명합니다.\n- **성숙도·출처 상태**: 2026-08-13 확인한 현재 GitHub Spec Kit의 제품·조직 사례이며 하나의 국제 표준이나 고정된 `SDD` 약어가 아닙니다.",
        "- **관계·순서·중첩**: 중심 장은 2026-08-13에 확인한 GitHub Spec Kit 사례의 `Spec → Plan → Tasks → Implement` 네 연결을 설명하며 필요하면 앞 산출물로 돌아갑니다. 2026-11-15에 확인한 [공식 홈페이지](https://github.github.com/spec-kit/)는 구현 뒤 `Converge`까지 핵심 흐름에 포함하므로 교육용 네 연결을 현재 도구의 전체 흐름으로 보지 않습니다. PRD·Software Design Description을 입력으로 쓰거나 작은 변경에서는 한 브리프 안에 필요한 부분을 합칠 수 있습니다. AI 개발의 스펙 책임과 같은 축을 설명합니다.\n- **성숙도·출처 상태**: GitHub Spec Kit의 날짜가 있는 제품·조직 사례이며 하나의 국제 표준이나 고정된 `SDD` 약어가 아닙니다. 과거 확인 기록과 이번 현재성 보충을 구분합니다."
      ]
    ]
  },
  {
    "path": "CONTENT_MAP.md",
    "before": "a6b42aef2fdec104483fecac88cbfda5b1c84be49ec8cc993f5f0ef5a7eeaca5",
    "after": "947fcb991d2d2f3eee291b1a26ce81fdcfb5d672b9c8c8357487ac908348b12b",
    "replacements": [
      [
        "| [PRD·두 종류의 SDD·TDD](src/content/docs/06-requirements-design/prd-sdd-tdd.md) | `draft` | 18,635 | `/06-requirements-design/prd-sdd-tdd/` |",
        "| [PRD·두 종류의 SDD·TDD](src/content/docs/06-requirements-design/prd-sdd-tdd.md) | `draft` | 19,154 | `/06-requirements-design/prd-sdd-tdd/` |"
      ],
      [
        "| [테스트 전략](src/content/docs/08-quality/testing-strategy.md) | `draft` | 18,147 | `/08-quality/testing-strategy/` |",
        "| [테스트 전략](src/content/docs/08-quality/testing-strategy.md) | `draft` | 18,317 | `/08-quality/testing-strategy/` |"
      ],
      [
        "| [방법론 관계 지도](src/content/docs/reference/methodology-map.md) | `draft` | 17,533 | `/reference/methodology-map/` |",
        "| [방법론 관계 지도](src/content/docs/reference/methodology-map.md) | `draft` | 17,699 | `/reference/methodology-map/` |"
      ]
    ]
  }
];
export function r06PreFixBytes(path,bytes){
 bytes=r06PreCloseoutBytes(path,bytes);
 const e=r06FixTransitions.find(x=>x.path===path);if(!e||sha(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R06 reversal not unique');text=text.replace(after,before);}
 if(sha(text)!==e.before)throw Error('R06 historical bytes mismatch');return Buffer.from(text);
}
export function validateR06Current(read){const errors=[];for(const e of r06FixTransitions){try{if(sha(r06PreCloseoutBytes(e.path,read(e.path)))!==e.after)errors.push('R06 current patch mismatch: '+e.path)}catch{errors.push('R06 current patch missing: '+e.path)}}return errors;}
