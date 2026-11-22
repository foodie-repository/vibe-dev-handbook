import {createHash} from 'node:crypto';
const sha=b=>createHash('sha256').update(b).digest('hex');
export const r24FixTransitions=[
  {
    "path": "CONTENT_MAP.md",
    "before": "bc57c65ef32bb85f46227311356a2a3da14dd2d5f88b64c1caa01b108001c18c",
    "after": "7f9bf2c5aacf96dd19821dd7225d5948d0ecdd50568997ca36b9b2fe5ba37ba2",
    "replacements": [
      [
        "|---|---:|---:|---|\n| [바이브 개발 핸드북](src/content/docs/index.md) | `draft` | 2,353 | `/` |\n\n",
        "|---|---:|---:|---|\n| [바이브 개발 핸드북](src/content/docs/index.md) | `draft` | 2,398 | `/` |\n\n"
      ],
      [
        "|---|---:|---:|---|\n| [이 가이드를 사용하는 법](src/content/docs/start-here/how-to-use-this-guide.md) | `draft` | 2,746 | `/start-here/how-to-use-this-guide/` |\n| [시작하기](src/content/docs/start-here/index.md) | `draft` | 960 | `/start-here/` |\n| [학습 경로](src/content/docs/start-here/learning-paths.md) | `draft` | 4,843 | `/start-here/learning-paths/` |\n| [왜 이 가이드가 필요한가](src/content/docs/start-here/why-this-guide.md) | `draft` | 1,879 | `/start-here/why-this-guide/` |\n",
        "|---|---:|---:|---|\n| [이 가이드를 사용하는 법](src/content/docs/start-here/how-to-use-this-guide.md) | `draft` | 3,000 | `/start-here/how-to-use-this-guide/` |\n| [시작하기](src/content/docs/start-here/index.md) | `draft` | 960 | `/start-here/` |\n| [학습 경로](src/content/docs/start-here/learning-paths.md) | `draft` | 4,918 | `/start-here/learning-paths/` |\n| [왜 이 가이드가 필요한가](src/content/docs/start-here/why-this-guide.md) | `draft` | 1,879 | `/start-here/why-this-guide/` |\n"
      ]
    ]
  },
  {
    "path": "src/content/docs/index.md",
    "before": "3a35231f260c6e8941417cd3a09bbce282c5d6eeefcff662948320e112007dcb",
    "after": "53af3211f121ab63c1b0a9dae01266093dd15977860dadef173ce2ecfa940fb8",
    "replacements": [
      [
        "\n지금 해결할 문제가 있는 분은 [이 가이드를 사용하는 법](start-here/how-to-use-this-guide/#필요한-내용만-찾기)에 따라 한국어 용어, 영문·약어, 문제 문장으로 검색하세요. 검색 결과 한 문장만 믿지 말고 관련 장의 정의·시스템 위치·판단 규칙과 검증 증거까지 확인해야 합니다.\n\n",
        "\n지금 해결할 문제가 있는 분은 [이 가이드를 사용하는 법](start-here/how-to-use-this-guide/#필요한-내용만-찾기)에 따라 한국어 용어나 영문·약어로 검색하세요. 문제 문장은 관련 결과를 찾지 못할 수 있으므로 핵심어로 줄이거나 분야별 인덱스를 이용합니다. 검색 결과 한 문장만 믿지 말고 관련 장의 정의·시스템 위치·판단 규칙과 검증 증거까지 확인해야 합니다.\n\n"
      ]
    ]
  },
  {
    "path": "src/content/docs/start-here/how-to-use-this-guide.md",
    "before": "01a6e9a63c6f0826ef2cf8d505df36b7b2400c566f59ff541c2fac9a99d30bb1",
    "after": "a46f606ce093c5eda3e9af139867a7ba47c07a7858a6471256906d15a2c9f0ba",
    "replacements": [
      [
        "2. 결과가 넓거나 없으면 `backend`, `authentication`, `API`, `SDD`처럼 **영문 또는 약어**로 다시 검색합니다.\n3. 용어가 아니라 상황이 문제라면 `로그인은 됐는데 참가 신청이 거절됨`처럼 **문제 문장**으로 검색합니다.\n4. [개발 용어집](../../reference/development-glossary/)과 [에이전트 출력 용어집](../../reference/agent-output-glossary/)에서 뜻, 비슷한 용어, 보장하지 않는 범위를 확인합니다.\n",
        "2. 결과가 넓거나 없으면 `backend`, `authentication`, `API`, `SDD`처럼 **영문 또는 약어**로 다시 검색합니다.\n3. 상황을 **문제 문장**으로 검색할 수도 있지만, 검색이 문장의 뜻을 해석해 관련 장을 찾는다고 보장하지는 않습니다. 예를 들어 `로그인은 됐는데 참가 신청이 거절됨`은 이 사용법의 예시만 찾을 수 있습니다. 결과가 없거나 예시만 나오면 `인증`, `인가`처럼 핵심어로 줄이세요. 또는 [API·데이터베이스·인증](../../04-backend-data/api-database-auth/)으로 직접 이동해 로그인 확인과 행동 권한, 모집 상태·정원 같은 업무 조건을 나누어 확인합니다.\n4. [개발 용어집](../../reference/development-glossary/)과 [에이전트 출력 용어집](../../reference/agent-output-glossary/)에서 뜻, 비슷한 용어, 보장하지 않는 범위를 확인합니다.\n"
      ],
      [
        "\n```text\n/status  현재 사실과 불확실성을 보고\n/goal    이번 작업의 목표와 비목표를 고정\n/plan    변경 파일, 수용 기준, 위험, 검증 명령을 제시\n/execute 승인된 한 단계만 변경\n/verify  테스트·빌드·로그와 수용 기준을 대조\n/review  구현 맥락을 보지 않은 관점으로 결함 탐색\n/update  결정, 진행 상태, 다음 작업을 저장소에 반영\n```\n\n",
        "\n- `/status`: 현재 사실과 불확실성을 보고합니다.\n- `/goal`: 이번 작업의 목표와 비목표를 고정합니다.\n- `/plan`: 변경 파일, 수용 기준, 위험, 검증 명령을 제시합니다.\n- `/execute`: 승인된 한 단계만 변경합니다.\n- `/verify`: 테스트·빌드·로그와 수용 기준을 대조합니다.\n- `/review`: 구현 맥락을 보지 않은 관점으로 결함을 탐색합니다.\n- `/update`: 결정, 진행 상태, 다음 작업을 저장소에 반영합니다.\n\n"
      ]
    ]
  },
  {
    "path": "src/content/docs/start-here/learning-paths.md",
    "before": "a86e9f8c1491c605ec48f553f892fd6e1a9c489f089b4717df22a7a15bc279c2",
    "after": "df97f27ff8179182a101ffdb66848a34cab64538b488756ca24c4df420ebc15d",
    "replacements": [
      [
        "\n사이트 검색에서 한국어 용어 → 영문·약어 → 문제 문장 순서로 범위를 넓힌 뒤, 다음 질문에 맞는 부의 인덱스로 이동하세요.\n\n",
        "\n사이트 검색에서 한국어 용어나 영문·약어를 찾아보세요. 문제 문장으로 검색해도 관련 장이 나오지 않거나 사용법의 예시만 나올 수 있습니다. 그때는 핵심어로 줄이거나 [사용법의 검색 안내](../how-to-use-this-guide/#필요한-내용만-찾기)를 따르고, 다음 질문에 맞는 부의 인덱스로 이동하세요.\n\n"
      ],
      [
        "\n[현재 도구 매핑](../../reference/current-tool-mapping/)은 페이지에 표시된 확인일과 공식 근거 범위 안에서만 읽는 교체 가능한 참고편입니다. Supabase·Vercel·Codex Sites 같은 현재 제품 예시는 영속적인 책임을 특정 시점의 기능과 비교할 때만 사용하며, Build Track의 핵심 정의나 13장 목록에 포함하지 않습니다.\n\n",
        "\n[현재 도구 매핑](../../reference/current-tool-mapping/)은 페이지에 표시된 확인일과 공식 근거 범위 안에서만 읽는 교체 가능한 참고편입니다. 날짜 있는 제품 예시는 영속적인 책임을 특정 시점의 기능과 비교할 때만 사용하며, Build Track의 핵심 정의나 13장 목록에 포함하지 않습니다.\n\n"
      ]
    ]
  },
  {
    "path": "src/components/PageTitle.astro",
    "before": "2a96e4947191900bc530e6272b06c083e6e1966dd3c0667589afb3e6393e239d",
    "after": "109f96ccf72750c627f7ffc8d88267556438c2f582268b7600945e707e8f8f29",
    "replacements": [
      [
        "    label: '검토용 초안',\n    description: '처음부터 끝까지 읽을 수 있지만 아직 독립 검토 전입니다.',\n  },\n",
        "    label: '검토용 초안',\n    description: '처음부터 끝까지 읽을 수 있지만 독립 검토 전이거나 재검토가 필요합니다.',\n  },\n"
      ],
      [
        "    label: '검토 중',\n    description: '자체 점검을 마치고 기술·편집·독자 검토를 요청한 문서입니다.',\n  },\n",
        "    label: '검토 중',\n    description: '자체 점검 뒤 고정된 입력으로 독립 검토를 진행 중인 문서입니다.',\n  },\n"
      ],
      [
        "    label: '출판 준비',\n    description: '기술·편집·독자 검토와 자동 검증을 통과한 문서입니다.',\n  },\n",
        "    label: '출판 준비',\n    description: '역할별 품질·출처, 독립 검토·재판정, 자동·브라우저 검증과 소유자 승인을 통과했습니다. 배포 완료를 뜻하지는 않습니다.',\n  },\n"
      ]
    ]
  },
  {
    "path": "research/public-beta-review-source-excerpts/r24-navigation-context-2026-11-16.md",
    "before": "da6e1cdfcc2592237902985a0f5ba2679431231d308005a59706eb913da7b16b",
    "after": "c454bca0c1c5be2688adf782d8169afc46c56b1d0071fb3a208e516cdf6a4e19",
    "replacements": [
      [
        "\n기준 e027ffc56864ad392bb664e29d19fc3539c9c8d3의 현재 저장소 원문을 직접 확인하는 입력입니다. 외부 제품 기능·버전·가격을 새로 확인한 근거가 아니며, 원고18개의 전체 입력을 이 발췌로 대체하지 않습니다. 각 원고의 실제 제목·설명·학습 목표·상태·절 제목과 첫 본문 문단을 추적합니다. 이하59문서는 인접 장 탐색 범위의 증거이고 전체59개 원고 심층 재검토가 아닙니다. 원문 경로·전체파일 SHA·정확한 줄 범위와 원문을 함께 고정하며 빠진 본문은 해당 원고 전체에 남습니다.\n\n",
        "\n기준 e027ffc56864ad392bb664e29d19fc3539c9c8d3의 저장소 원문을 직접 확인한 역사적 입력입니다. 외부 제품 기능·버전·가격을 새로 확인한 근거가 아니며, 원고18개의 전체 입력을 이 발췌로 대체하지 않습니다. 각 원고의 frontmatter(제목·설명·학습 목표·상태), 절 제목과 일부 도입 문장을 추적합니다. 첫 본문 문단을 모든 문서에서 포함하지는 않습니다. 이하59문서는 인접 장 탐색 범위의 증거이고 전체59개 원고 심층 재검토가 아닙니다. 원문 경로·당시 전체파일 SHA·정확한 줄 범위와 원문을 함께 고정하며 빠진 본문은 해당 원고 전체에 남습니다. R24 후속 변경은 정확한 전후 해시·diff로 별도 연결하고 아래의 최초 발췌를 소급 변경하지 않습니다.\n\n"
      ]
    ]
  }
];
export function r24PreFixBytes(path,bytes){const e=r24FixTransitions.find(x=>x.path===path);if(!e||sha(bytes)!==e.after)return bytes;let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R24 reversal not unique');text=text.replace(after,before)}if(sha(text)!==e.before)throw Error('R24 historical bytes mismatch');return Buffer.from(text);}
export function validateR24Current(read){const errors=[];for(const e of r24FixTransitions){try{if(sha(read(e.path))!==e.after)errors.push('R24 current patch mismatch: '+e.path)}catch{errors.push('R24 current patch missing: '+e.path)}}return errors;}
