import { createHash } from 'node:crypto';
import { r02PreCloseoutBytes } from './r02-closeout.mjs';

// R02 Minor3 patch only. Historical validation is not a current review verdict.
// Both sides are fixed; unknown bytes fall through to the existing hash failure.
export const r02MinorTransitions = [
  {
    "path": "src/content/docs/03-full-stack/client-server-full-stack.md",
    "before": "f264f69e8b6de3708ef28c78666415189752954c96ccb6c011747d0fe7dc985e",
    "after": "33f7bb6416664603b9d78494ad072e0af9fb1b43806470a56c0def4b63721a70",
    "replacements": [
      [
        "API가 성공 응답을 보냈다는 사실만으로",
        "구성요소 사이의 입력·결과·오류에 관한 약속인 API를 통해 성공 응답을 받았다는 사실만으로"
      ],
      [
        "Build Track의 모임 참가 웹앱에서",
        "모임 참가 웹앱을 단계별로 만드는 학습 경로인 Build Track에서"
      ],
      [
        "| UI 상태, DOM, 화면과 접근성 구조 |",
        "| 사용자 화면(UI) 상태, 브라우저의 문서 구조(DOM), 화면과 접근성 구조 |"
      ],
      [
        "필요 신호가 생길 때 ADR로 추가 여부를 기록하세요.",
        "필요 신호가 생길 때 아키텍처 결정 기록(ADR)으로 추가 여부를 기록하세요."
      ],
      [
        "한 단계의 증거를 다음 단계의 성공으로 확대하지 마세요.",
        "트랜잭션으로 묶는 것만으로 동시 요청의 정원 초과가 자동 방지되지는 않습니다. 선택한 데이터베이스의 동시성 전략과 고유성 제약을 함께 설계하고, 마지막 한 자리를 두 요청이 동시에 시도하는 테스트로 확인해야 합니다.\n\n한 단계의 증거를 다음 단계의 성공으로 확대하지 마세요."
      ],
      [
        "https://www.postgresql.org/docs/current/tutorial-transactions.html",
        "https://www.postgresql.org/docs/18/tutorial-transactions.html"
      ],
      [
        "https://www.postgresql.org/docs/current/transaction-iso.html",
        "https://www.postgresql.org/docs/18/transaction-iso.html"
      ],
      [
        "https://www.postgresql.org/docs/current/ddl-constraints.html",
        "https://www.postgresql.org/docs/18/ddl-constraints.html"
      ]
    ]
  },
  {
    "path": "CONTENT_MAP.md",
    "before": "5a178adf169dcb5c878f1a2a36a6c8b542b36c965940181b6e1ea0cef5bdb5f2",
    "after": "ff40771c3b71fd4b19f381b97310d8de2466e889dc72015df8f28aa7d5cf5a25",
    "replacements": [
      [
        "| `draft` | 15,998 | `/03-full-stack/client-server-full-stack/` |",
        "| `draft` | 16,184 | `/03-full-stack/client-server-full-stack/` |"
      ]
    ]
  }
];

const hash = bytes => createHash('sha256').update(bytes).digest('hex');
export function r02HistoricalBytes(path, bytes) {
  bytes = r02PreCloseoutBytes(path, bytes);
  const transition = r02MinorTransitions.find(entry => entry.path === path);
  if (!transition || hash(bytes) !== transition.after) return bytes;
  let original = bytes.toString('utf8');
  for (const [before, after] of [...transition.replacements].reverse()) {
    if (original.split(after).length !== 2) throw new Error('R02 transition is not unique');
    original = original.replace(after, before);
  }
  const restored = Buffer.from(original);
  if (hash(restored) !== transition.before) throw new Error('R02 historical reconstruction hash mismatch');
  return restored;
}
