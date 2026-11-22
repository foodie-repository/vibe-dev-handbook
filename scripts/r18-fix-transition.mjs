import {r18PreCloseoutBytes} from './r18-closeout.mjs';
import {createHash} from 'node:crypto';
const sha=b=>createHash('sha256').update(b).digest('hex');
export const r18FixTransitions=[
  {
    "path": "CONTENT_MAP.md",
    "before": "ef190425678b5ae4cfd30135a630fae4b4407769a2e7b3b93b068dec2b71755d",
    "after": "7924389a50266dfc0a43a7d6ee09c4a2ec9c068fe1acada279c232b453b052d4",
    "replacements": [
      [
        "|---|---:|---:|---|\n| [ADR과 트레이드오프 기록](src/content/docs/06-requirements-design/adr-and-tradeoffs.md) | `draft` | 11,599 | `/06-requirements-design/adr-and-tradeoffs/` |\n| [아키텍처와 프레임워크](src/content/docs/06-requirements-design/architecture-and-frameworks.md) | `draft` | 12,136 | `/06-requirements-design/architecture-and-frameworks/` |\n| [6. 요구사항과 설계](src/content/docs/06-requirements-design/index.md) | `draft` | 905 | `/06-requirements-design/` |\n",
        "|---|---:|---:|---|\n| [ADR과 트레이드오프 기록](src/content/docs/06-requirements-design/adr-and-tradeoffs.md) | `draft` | 12,603 | `/06-requirements-design/adr-and-tradeoffs/` |\n| [아키텍처와 프레임워크](src/content/docs/06-requirements-design/architecture-and-frameworks.md) | `draft` | 12,293 | `/06-requirements-design/architecture-and-frameworks/` |\n| [6. 요구사항과 설계](src/content/docs/06-requirements-design/index.md) | `draft` | 905 | `/06-requirements-design/` |\n"
      ]
    ]
  },
  {
    "path": "research/source-map.md",
    "before": "d0f9581672ef33c6ca29c2d008cb2aa21907900cfc29e0f78dc9acbcdf9aeaae",
    "after": "a2b28a0f07deffd94e49ad5e0a22d6c85f754e6b51e3fcf3794739a65d464e3f",
    "replacements": [
      [
        "\n2026-11-15 R17 후속 판정: 아래 R17 현재 적용 보충의 검토 대기는 당시 고정 후보 상태입니다. 같은 저장 reviewer의 Fix1과 증거 한정 후속 PASS C0/I0/M0·두 원고각18/18·7개ID RESOLVED로 해소했고 review 전이는 R17 controller closeout에 연결합니다. 과거 출처·접근 실패·미확인 범위는 유지하며 M5전체/ready/공개 승인을 뜻하지 않습니다.\n",
        "\n2026-11-15 R18 현재 적용 보충: [설계 지원 직접 근거](public-beta-review-source-excerpts/r18-design-support-2026-11-15.md)의 Nygard 원형·ISO 공개 소개·SEI 도서 소개·MDN 관련 절을 새 확인하고 같은 실행 R06의 SWEBOK 확인 범위를 재사용했습니다. conceptual model은 세 허용 읽기 경로의 실패로 이번 not-confirmed이며 과거 confirmed 기록을 소급 수정하지 않습니다. 두 공개 원고의 귀속 범위를 현재 확인 가능한 근거로 한정했고, ADR의 비교 후보는 같은 필수 조건을 만족할 구성안과 사전 탈락안을 구분했습니다. 최초 R18 NEEDS CHANGES와 현재 수정 후 검토 대기를 구분하며 실제 제품·DB/API 실행·상태 승격·공개 승인을 주장하지 않습니다.\n\n2026-11-15 R17 후속 판정: 아래 R17 현재 적용 보충의 검토 대기는 당시 고정 후보 상태입니다. 같은 저장 reviewer의 Fix1과 증거 한정 후속 PASS C0/I0/M0·두 원고각18/18·7개ID RESOLVED로 해소했고 review 전이는 R17 controller closeout에 연결합니다. 과거 출처·접근 실패·미확인 범위는 유지하며 M5전체/ready/공개 승인을 뜻하지 않습니다.\n"
      ]
    ]
  },
  {
    "path": "src/content/docs/06-requirements-design/adr-and-tradeoffs.md",
    "before": "501beeade9f87e6c2d06bf87fe208186902b4585f47b5a6f1157714c058f57d3",
    "after": "6ae2dead43ae59b3b048260cc1964eddada76e8fa8547b9e9302d73850f41178",
    "replacements": [
      [
        "\n대안을 나열할 때는 모두 같은 요구·품질·제약 축으로 비교합니다. 정적 전달, 요청 시점 서버 렌더링, 별도 데이터 API를 비교한다면 다음을 같은 표에서 봅니다.\n\n| 비교 축 | 정적 전달 | 요청 시점 서버 처리 | 별도 데이터 API |\n|---|---|---|---|\n| 현재 사용자 행동 | 읽기 전용·공통 데이터에 단순 | 사용자별·요청별 계산 가능 | 화면과 데이터 계약 독립 가능 |\n| 신선도 | 빌드·발행 주기에 의존 | 요청 시점 원본 조회 가능 | API 갱신·캐시 계약 필요 |\n| 권한·비밀 | 공개 가능한 자산만 | 서버 비밀·인가 경계 가능 | 별도 인증·인가·CORS·운영 책임 가능 |\n| 실패·복구 | 이전 정상 자산 유지가 비교적 단순 | 런타임·원본 장애가 요청에 영향 | 부분 실패·버전·재시도 경계 증가 |\n| 운영 비용 | 작은 범위에서 낮을 수 있음 | 런타임 관측·확장 필요 | 별도 배포·호환·관측 필요 |\n| 변경 신호 | 개인화·짧은 신선도·비공개 데이터 | 요청 부하·비용·장애 영향 | 독립 소유·배포·확장 요구 |\n\n",
        "\n대안을 나열할 때는 모두 같은 요구·품질·제약 축으로 비교합니다. 예를 들어 공개된 동일 버전의 검증 데이터셋을 로그인 없이 읽고, 실패하면 마지막 정상 버전을 보여 주는 대시보드를 비교한다고 가정합니다. 다음 세 열은 서로 다른 구성안입니다. A는 화면과 데이터 파일을 함께 정적으로 발행하고, B는 한 서버 애플리케이션이 검증된 데이터셋을 읽어 요청마다 화면을 만들며, C는 정적 화면과 별도로 배포한 읽기 전용 데이터 API를 조합합니다. 렌더링 위치와 API 유무 자체는 서로 배타적인 축이 아니며, API가 있다는 사실만으로 별도 서비스나 배포 단위를 뜻하지 않습니다.\n\n| 비교 축 | A: 정적 화면·데이터 파일 | B: 한 서버의 화면 렌더링 | C: 정적 화면·별도 읽기 API |\n|---|---|---|---|\n| 현재 사용자 행동 | 공통 버전의 표·차트를 읽음 | 같은 버전의 표·차트를 서버가 구성 | 같은 버전의 데이터를 API로 받아 표시 |\n| 신선도 | 검증·빌드·발행 주기에 의존 | 검증 데이터셋 교체 주기에 의존 | 검증 데이터셋 교체·캐시 계약에 의존 |\n| 권한·비밀 | 공개 가능한 자산만 포함 | 서버 비밀은 응답에서 제외 | 공개 읽기 범위와 응답 필드를 제한하고 다른 출처 요청이면 CORS도 검토 |\n| 실패·복구 | 실패 후보 미게시·이전 자산 복원 검증 | 같은 게시 게이트와 마지막 정상 버전 외에 서버 장애 대응 필요 | 같은 게시 게이트·정상 버전 외에 API 장애·화면과 데이터 버전 불일치 대응 필요 |\n| 운영 비용 | 정적 발행·복구 경로 관리 | 런타임 관측·복구 경로 추가 | 이 구성에서는 화면/API의 별도 배포·호환·관측 추가 |\n| 변경 신호 | 현재 발행 주기로 승인된 신선도 요구를 충족하지 못함 | 측정된 요청 부하·비용·장애 영향이 수용 범위를 넘음 | 실제 독립 소유·배포 이점보다 호환·운영 비용이 커짐 |\n\n"
      ],
      [
        "- 결정: 첫 범위의 사용자·모임·참가 관계는 한 관계형 데이터베이스의 일관된 트랜잭션·제약 경계에서 관리합니다.\n- 대안: 화면 비활성화만 사용, 여러 서비스에 즉시 분리, 한 저장소 안의 모듈 경계를 비교합니다.\n- 결과: 서버·데이터 경계의 동시성 검증이 필요하고, 물리적 서비스 분리는 미룹니다.\n",
        "- 결정: 첫 범위의 사용자·모임·참가 관계는 한 관계형 데이터베이스의 일관된 트랜잭션·제약 경계에서 관리합니다.\n- 대안: A는 한 애플리케이션 안의 참가 모듈이 모임·참가 데이터를 한 트랜잭션 경계에서 관리하고, B는 별도 배포하는 참가 서비스가 그 데이터를 독점 소유하며 API를 통해 처리하도록 설계합니다. 두 후보 모두 인증된 주체 확인·인가·정원·활성 중복 조건을 충족해야 하며, 같은 경쟁 요청과 실패·복구 시험으로 비교합니다. 코드 모듈 분리와 서비스의 별도 배포는 다른 결정입니다.\n- 사전 탈락안: 화면 비활성화만으로는 서버의 동시 요청과 중복을 통제할 수 없으므로 필수 조건을 충족한 경쟁 후보로 세지 않습니다. A와 B 어느 쪽도 한 DB나 트랜잭션을 사용한다는 말만으로 동시성 보장이 완성되지는 않습니다.\n- 결과: 서버·데이터 경계의 동시성 검증이 필요하고, 물리적 서비스 분리는 미룹니다.\n"
      ],
      [
        "- 결정: 검증된 데이터셋과 화면을 정적 자산으로 함께 전달하고 버전·신선도·마지막 정상 버전을 표시합니다.\n- 대안: 요청 시점 서버 처리, 별도 데이터 API, 노트북 파일 직접 공유를 비교합니다.\n- 결과: 운영 표면은 작지만 갱신은 발행 주기와 연결되고 개인화·짧은 신선도 요구에는 맞지 않습니다.\n",
        "- 결정: 검증된 데이터셋과 화면을 정적 자산으로 함께 전달하고 버전·신선도·마지막 정상 버전을 표시합니다.\n- 대안: 위 표의 A·B·C를 동일한 공개 읽기·버전 일치·신선도·실패 복구 조건으로 비교합니다. 노트북 공유는 계산 검토용 보조 자료일 수 있지만 브라우저에서 같은 표·차트를 제공한다는 조건을 충족하지 않으면 동등한 공개 구성안으로 세지 않습니다.\n- 결과: 운영 표면은 작지만 갱신은 발행 주기와 연결되고 개인화·짧은 신선도 요구에는 맞지 않습니다.\n"
      ],
      [
        "\n```text\n# ADR-NNN: 짧은 결정 제목\n",
        "\n```text wrap\n# ADR-NNN: 짧은 결정 제목\n"
      ],
      [
        "proposed / accepted / rejected / deprecated / superseded by ADR-NNN\n\n",
        "proposed / accepted / rejected / deprecated / superseded by ADR-NNN\n- 결정·승인 주체(프로젝트 규칙에 따름, 미승인이면 미정):\n- 결정·승인 날짜(미승인이면 미정):\n- 관련 승인·대체 기록 링크(없으면 없음):\n\n"
      ],
      [
        "\n```text\n현재 저장소의 아키텍처적으로 중요한 결정 후보 하나를 읽기 전용으로 검토하라.\n",
        "\n```text wrap\n현재 저장소의 아키텍처적으로 중요한 결정 후보 하나를 읽기 전용으로 검토하라.\n"
      ],
      [
        "- [ISO/IEC/IEEE 42010:2022](https://www.iso.org/standard/74393.html): 아키텍처와 아키텍처 설명을 구분하고 설명 구조·관계를 다루는 현행 국제 표준의 공식 범위\n- [ISO/IEC/IEEE 42010 conceptual model](https://www.iso-architecture.org/ieee-1471/cm/): 이해관계자·관심사·관점·결정·근거와 선택하지 않은 대안 관계를 설명하는 표준 작업 그룹의 보조 자료\n\n",
        "- [ISO/IEC/IEEE 42010:2022](https://www.iso.org/standard/74393.html): 아키텍처와 아키텍처 설명을 구분하고 설명 구조·관계를 다루는 현행 국제 표준의 공식 범위\n- [ISO/IEC/IEEE 42010 conceptual model](https://www.iso-architecture.org/ieee-1471/cm/): 2026-08-13 확인 기록이 있는 보조 자료입니다. 2026-11-15 재확인은 접근 실패로 미확인(not-confirmed)이며, 이번에는 세부 관계를 뒷받침하는 새 직접 근거로 사용하지 않습니다.\n\n"
      ],
      [
        "\n출처의 확인일·문서 상태·적용 범위와 일반화 금지선은 저장소의 `research/source-map.md`에서 관리합니다. PBSG-003은 접근성·UI 상태·ADR과 대시보드의 접근 가능한 정보 계약 전체를 직접 자료에 대조한 뒤 `confirmed`로 전환했습니다.\n",
        "\n출처의 확인일·문서 상태·적용 범위와 일반화 금지선은 저장소의 `research/source-map.md`에서 관리합니다. PBSG-003의 `confirmed` 전환은 당시 직접 자료 대조의 기록이며 모든 연결 페이지의 현재 접근 성공을 뜻하지 않습니다. 이번에는 Nygard 원형과 ISO 공개 소개의 범위를 확인했고, conceptual model의 과거 기록과 이번 접근 실패는 구분했습니다.\n"
      ]
    ]
  },
  {
    "path": "src/content/docs/06-requirements-design/architecture-and-frameworks.md",
    "before": "007eac79925b1ad3d77e72c8a24fa347f92e8120d851e0478fbb29751a202d83",
    "after": "10c841738885363c3a7ba978c4e043ad2f69d6abdff690851f3345ce5128eb64",
    "replacements": [
      [
        "\nISO/IEC/IEEE 42010:2022는 시스템·소프트웨어·엔터프라이즈의 **architecture description**에 관한 요구를 다루고, 표준 작업 그룹의 conceptual model은 이해관계자의 관심사, 관점과 뷰, 아키텍처 결정·근거의 관계를 설명합니다. 이는 이 장이 구조를 제품 목록이 아니라 관심사·결정·이유로 읽는 경계를 뒷받침하지만, 특정 개발 방법·표기법·도구나 이 장의 일곱 단계 절차를 국제 표준으로 지정하지는 않습니다. 아키텍처 설명이 존재한다는 사실도 현재 구현·품질·배포 성공의 증거는 아닙니다.\n\n",
        "\n2026-11-15에 확인한 ISO/IEC/IEEE 42010:2022 공개 소개는 시스템·소프트웨어·엔터프라이즈 등의 아키텍처 설명(architecture description)에 관한 요구를 다루며, 아키텍처 자체와 이를 표현한 설명을 구분합니다. 특정 개발 방법·표기법·도구나 기록 매체를 지정하지 않으므로 이 장의 일곱 단계 절차도 국제 표준의 의무 절차가 아닙니다. 아키텍처 설명이 존재한다는 사실은 현재 구현·품질·배포 성공의 증거가 아닙니다. 별도 conceptual model의 과거 확인과 이번 재확인 실패는 아래 출처에서 구분하며, 그 세부 관계를 이번에 다시 확인한 것으로 설명하지 않습니다.\n\n"
      ],
      [
        "\n```text\nPROJECT_CONTEXT, 요구사항, 현재 디렉터리·설정·데이터·테스트·배포 파일을 먼저 읽어라.\n",
        "\n```text wrap\nPROJECT_CONTEXT, 요구사항, 현재 디렉터리·설정·데이터·테스트·배포 파일을 먼저 읽어라.\n"
      ],
      [
        "- CMU Software Engineering Institute의 [Software Architecture in Practice, 4th Edition](https://www.sei.cmu.edu/library/software-architecture-in-practice-fourth-edition/) 공식 소개는 아키텍처가 생명주기와 기술·프로젝트·비즈니스 맥락에 영향을 주고받으며 여러 품질 속성을 다루는 범위를 뒷받침합니다.\n- [ISO/IEC/IEEE 42010:2022](https://www.iso.org/standard/74393.html) 공식 범위와 표준 작업 그룹의 [conceptual model](https://www.iso-architecture.org/ieee-1471/cm/)은 아키텍처와 architecture description의 경계, 이해관계자·관심사·관점·뷰·결정·근거의 관계를 뒷받침합니다. 특정 방법·표기법·도구를 이 장의 보편 절차로 확대하지 않습니다.\n- IEEE Computer Society의 [SWEBOK 세부 주제](https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics)는 요구사항·설계·구현·테스트·운영을 연결해 학습하는 범위에 사용했습니다. 이 URL은 2026-08-04 기존 직접 확인 기록을 사용하며 2026-08-13 새 확인은 HTTP 403으로 실패했습니다.\n",
        "- CMU Software Engineering Institute의 [Software Architecture in Practice, 4th Edition](https://www.sei.cmu.edu/library/software-architecture-in-practice-fourth-edition/) 공식 소개는 아키텍처가 생명주기와 기술·프로젝트·비즈니스 맥락에 영향을 주고받으며 여러 품질 속성을 다루는 범위를 뒷받침합니다.\n- [ISO/IEC/IEEE 42010:2022](https://www.iso.org/standard/74393.html) 공개 소개는 아키텍처와 architecture description의 경계 및 방법·도구 비강제 범위를 2026-11-15에 확인했습니다. 표준 전문을 읽은 것은 아닙니다. 표준 작업 그룹의 [conceptual model](https://www.iso-architecture.org/ieee-1471/cm/)은 2026-08-13 확인 기록이 있는 보조 자료이나 이번 재확인은 접근 실패로 미확인(not-confirmed)입니다. 세부 관계를 뒷받침하는 새 직접 근거로 사용하지 않으며, 과거 확인 기록도 현재 성공으로 바꾸지 않습니다.\n- IEEE Computer Society의 [SWEBOK 세부 주제](https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics)는 요구사항·설계·구현·테스트·운영을 연결해 학습하는 범위에 사용했습니다. 이 URL은 2026-08-04 기존 직접 확인 기록을 사용하며 2026-08-13 새 확인은 HTTP 403으로 실패했습니다.\n"
      ]
    ]
  }
];
export function r18PreFixBytes(path,bytes){
 bytes=r18PreCloseoutBytes(path,bytes);
 const e=r18FixTransitions.find(x=>x.path===path);if(!e||sha(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R18 reversal not unique');text=text.replace(after,before);}
 if(sha(text)!==e.before)throw Error('R18 historical bytes mismatch');return Buffer.from(text);
}
export function validateR18Current(read){const errors=[];for(const e of r18FixTransitions){try{if(sha(r18PreCloseoutBytes(e.path,read(e.path)))!==e.after)errors.push('R18 current patch mismatch: '+e.path)}catch{errors.push('R18 current patch missing: '+e.path)}}return errors;}
