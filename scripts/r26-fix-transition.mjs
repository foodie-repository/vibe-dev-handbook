import {createHash} from 'node:crypto';
import {r26PreCloseoutBytes} from './r26-closeout.mjs';
const hash = bytes => createHash('sha256').update(bytes).digest('hex');

// R26 Fix1: reconstruct prior rows' exact inputs only for the reviewed candidate.
const changes = [
  {
    "path": "CONTENT_MAP.md",
    "before": "7b04a87a626c0a39c5688d98493a04c43970ca194b70cc44550c9716c1a955d3",
    "after": "25a8299192c1e23de182f0207e4ef0697f76ce34021c969706f9985bd94e6599",
    "ranges": [
      {
        "i": 71,
        "n": 1,
        "prev": [
          "| [API·데이터베이스·인증](src/content/docs/04-backend-data/api-database-auth.md) | `review` | 23,323 | `/04-backend-data/api-database-auth/` |"
        ]
      },
      {
        "i": 126,
        "n": 1,
        "prev": [
          "| [환경 변수와 설정](src/content/docs/10-deployment-operations/environment-variables-config.md) | `review` | 11,881 | `/10-deployment-operations/environment-variables-config/` |"
        ]
      },
      {
        "i": 137,
        "n": 1,
        "prev": [
          "| [권한·샌드박스·worktree](src/content/docs/11-ai-native/permissions-sandbox-worktrees.md) | `review` | 13,131 | `/11-ai-native/permissions-sandbox-worktrees/` |"
        ]
      },
      {
        "i": 144,
        "n": 1,
        "prev": [
          "| [데이터 분석가의 대시보드 사례](src/content/docs/12-case-studies/analytics-dashboard-case-study.md) | `review` | 34,351 | `/12-case-studies/analytics-dashboard-case-study/` |"
        ]
      },
      {
        "i": 158,
        "n": 1,
        "prev": [
          "| [에이전트 출력 용어집](src/content/docs/reference/agent-output-glossary.md) | `review` | 11,003 | `/reference/agent-output-glossary/` |"
        ]
      },
      {
        "i": 162,
        "n": 2,
        "prev": [
          "| [용어·방법론·체크리스트](src/content/docs/reference/index.md) | `review` | 1,028 | `/reference/` |",
          "| [방법론 관계 지도](src/content/docs/reference/methodology-map.md) | `review` | 17,846 | `/reference/methodology-map/` |"
        ]
      },
      {
        "i": 169,
        "n": 1,
        "prev": [
          "| [이 가이드를 사용하는 법](src/content/docs/start-here/how-to-use-this-guide.md) | `review` | 3,000 | `/start-here/how-to-use-this-guide/` |"
        ]
      }
    ]
  },
  {
    "path": "docs/project/public-beta-content-audit.md",
    "before": "cdc463f4aafe16562ff591f7debe7ab015c686ed8b4c9e43e50d4c45fa593bc6",
    "after": "70d854d439ae779cedacf400ff0419aeb3fd1df7f94e71f34df98ba9ef9c4106",
    "ranges": [
      {
        "i": 2,
        "n": 2,
        "prev": []
      }
    ]
  },
  {
    "path": "docs/project/reviews/public-beta-1/review-matrix.md",
    "before": "4c69ec7fe687bf21d7d5e44960950963a04a2a340b377969d61ae00032b7f401",
    "after": "7f9253e4f19f7a6abbffcee7dbffb603ad7aa12505567152f035212ee9beae62",
    "ranges": [
      {
        "i": 42,
        "n": 1,
        "prev": [
          "2026-11-15 R05 controller closeout: 최초 NEEDS CHANGES C0/I2/M4·17/18과 원문23청크·PNG18 검토를 보존하고, 같은 저장 reviewer 후속 PASS C0/I0/M1·18/18 및 코드 PASS C0/I0/M0을 연결합니다. I2/M3은 RESOLVED이며 공유 그림 R05-M01은 ACCEPTED-CURRENT / OPEN으로 R26에 전달합니다. 인접 R17의 I02만 실제 해소했으며 R17 전체는 미완료·draft입니다. R01~R05 done, R06~R26 pending/not-fixed, 공개59개 draft54/review5/ready0입니다. R05 본문·그림은 유지하고 metadata-only review로 전이합니다. 아래 날짜별 산문은 역사이며 현재 정본은 이 문단·행별 표/JSON과 r05-controller-closeout.md입니다. R01/R04의 기존 열린 Minor와 M5 전체·ready·RC·소유자 승인·M6/M7 미완료 경계를 유지합니다. 다음은 R06이며 외부 쓰기는 하지 않습니다."
        ]
      },
      {
        "i": 373,
        "n": 1,
        "prev": [
          "      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r16-data-support-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r16-data-support-input-manifest.json\",\"source_checked_at\":\"2026-11-15\",\"combined_sha256\":\"79c1038651626c7d0eceb3dd20a4db7c36414d4432c3c454b664c76dbfb6c01c\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"BLOCKED\",\"rereview_state\":\"pass-important4-minor4-resolved\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"e88d80e5fda10338a645410b0dcc2fd014987f744f75586d647f31441636dac9\",\"current_target_sha256\":\"f50bf106d5b3ee45ceffff3fca06eb2edca27aa9b1193af8d396c96161b023cd\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r16-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r16-data-support-codex-rereview.md\",\"next_scope\":\"R17 pending; no M5/ready/public approval\",\"target_hashes\":[{\"path\":\"src/content/docs/03-full-stack/frontend-backend-boundary.md\",\"reviewed_sha256\":\"e88d80e5fda10338a645410b0dcc2fd014987f744f75586d647f31441636dac9\",\"current_sha256\":\"f50bf106d5b3ee45ceffff3fca06eb2edca27aa9b1193af8d396c96161b023cd\"},{\"path\":\"src/content/docs/04-backend-data/data-model-schema-migration.md\",\"reviewed_sha256\":\"9a2334cde915cdf6d8554b8bcfa9da3492791ae63df66933528227d6077e4aa0\",\"current_sha256\":\"2bbe29c1fa3aaca28dc83d89ab1146176e2230974867a36bc4cf36ec8f6d086f\"},{\"path\":\"src/content/docs/04-backend-data/state-cache-queue.md\",\"reviewed_sha256\":\"e1f1570362a645db9d812b1ba8c2fc11d760b707b4c918ce8252420e055ca030\",\"current_sha256\":\"dd00a9865c2865a1852f5c60d2fdbb0100f655db2c505810d192ddfe88ee2e4f\"}]}"
        ]
      }
    ]
  },
  {
    "path": "research/current-tool-mapping-research-brief.md",
    "before": "ce127c5b56e97aa1cbc6c192c5f93297b214e59d4f1ef170713b15632a77116b",
    "after": "2e6518d0391b94cc4d6823784d9a9beb7ad242e439bb4d92ff27b92405e29d88",
    "ranges": [
      {
        "i": 2,
        "n": 2,
        "prev": []
      }
    ]
  },
  {
    "path": "research/source-map.md",
    "before": "f8ba5e6b6e81ad0ea1a48db0b0f7403b6752967c5743fd6efeeef20965820872",
    "after": "992eb601f8ea3ff3c8381a836794c832153692fb9235565fa04ae0d4ba835a94",
    "ranges": [
      {
        "i": 2,
        "n": 4,
        "prev": []
      }
    ]
  },
  {
    "path": "src/content/docs/04-backend-data/api-database-auth.md",
    "before": "72e356c3156c4a00b7af5a2b5269726dabf2ca053d577f5fbc6a0b7b3ef2e935",
    "after": "9f11f724ab45a4bb6fd779324dee100a5103e7cd5167afa912ab04561be6882f",
    "ranges": [
      {
        "i": 106,
        "n": 8,
        "prev": [
          "업무 규칙:",
          "- 활성 참가 중복 없음",
          "- event.status = open",
          "- confirmed 수 < capacity"
        ]
      }
    ]
  },
  {
    "path": "src/content/docs/10-deployment-operations/environment-variables-config.md",
    "before": "68e09c8d1027060e47a2a3f88a158f43aa475a60451f9d0c412b62fe1a60cce8",
    "after": "24b23cb6ae0a2cdfdcf8e69f9a4ff80dbb8dccea7d0bf91370d28b2a6f1bb34b",
    "ranges": [
      {
        "i": 161,
        "n": 3,
        "prev": [
          "W-05 배포 전에는 값 자체가 아니라 schema, 환경별 key 목록, public/server 분류, secret owner·version, fake fixture와 build artifact 검사를 검토합니다. 별도 승인을 받은 뒤에만 실제 preview·production 값을 만들거나 변경하고, deployment ID·공개 조회·로그인·참가·중복 거절·자기 취소·정원 불변식으로 해당 환경을 확인합니다."
        ]
      }
    ]
  },
  {
    "path": "src/content/docs/11-ai-native/permissions-sandbox-worktrees.md",
    "before": "e3f1aefb39a8fdb748ff10208c1b8c5d84f323a953154484814c19539fc4c6f6",
    "after": "1ecd6f175210d466e67a9bab10c5b309948dcd28449644b62a7ba9fcb3642faa",
    "ranges": [
      {
        "i": 117,
        "n": 1,
        "prev": [
          "worktree의 local commit은 같은 repository history에 생긴 로컬 이력입니다. remote push, PR 생성, merge, deploy와 publication은 각각 별도 외부 효과와 승인입니다."
        ]
      }
    ]
  },
  {
    "path": "src/content/docs/12-case-studies/analytics-dashboard-case-study.md",
    "before": "4be57134aca3ace3b0d6e3400ddfefd515b7f04b42affa4c1e1c4ab71d0d9502",
    "after": "b92022a372822ffa44cf28d67f4decf85ed5e6f79bb85a657d71b4df890e1238",
    "ranges": [
      {
        "i": 169,
        "n": 2,
        "prev": []
      },
      {
        "i": 478,
        "n": 1,
        "prev": [
          "릴리스 후보는 검증한 아티팩트와 변경·정정 정보를 승인 대상으로 고정한 상태입니다. 실제 배포 권한을 받은 뒤에만 원격 CI 실행, 배포 아티팩트 버전, 공개 URL 응답과 사용자 흐름을 확인합니다. 이 교육 원고는 대시보드 구현·릴리스·배포를 수행하지 않았으므로 실제 공개 완료를 주장하지 않습니다."
        ]
      }
    ]
  },
  {
    "path": "src/content/docs/reference/agent-output-glossary.md",
    "before": "f5961f6cb90f0a279c8a4a22376849a040d886a8095ff4f5b3eac2781d66fb73",
    "after": "f482d9aa06fa8bd19d647b9fdc5bf9356b293bb7362b1727a6dd5fb6cdd239b2",
    "ranges": [
      {
        "i": 82,
        "n": 1,
        "prev": [
          "| **remote** | 로컬 Git이 이력을 주고받도록 등록한 다른 저장소입니다. | fetch·push는 네트워크를 쓰고, 잘못된 URL이나 대상은 외부 상태를 예상 밖으로 바꿀 수 있습니다. | 이름·URL·가져오기/보내기 대상과 권한이 맞나요? |"
        ]
      }
    ]
  },
  {
    "path": "src/content/docs/reference/index.md",
    "before": "8e5c317c35678632def94a26afda8849ba074aeef1a87d62a63e07808bcf3a0a",
    "after": "55478301281db6d86b20d745c133eb0cd09ff80a10769a57a17c230e96cf659b",
    "ranges": [
      {
        "i": 24,
        "n": 1,
        "prev": [
          "5. [날짜 있는 현재 도구 매핑](current-tool-mapping/) — 영속 책임과 특정 확인일의 제품 기능을 분리해 비교하고, 기능이 바뀌면 이 참고 자료만 다시 확인합니다."
        ]
      }
    ]
  },
  {
    "path": "src/content/docs/reference/methodology-map.md",
    "before": "26e314f9dcdbcfba74aacbe2aaf36dc9aca8cfcb49d706473ec1a9d541398f65",
    "after": "3546797ccd896fc249dfb9c2d2d1bffbcc0285ad5db5721b83610f395c82c866",
    "ranges": [
      {
        "i": 159,
        "n": 1,
        "prev": [
          "- **목적·대표 출력**: Product Goal·Product Backlog·Sprint Goal·Increment와 검토·회고를 통해 우선순위와 학습 주기를 운영합니다."
        ]
      }
    ]
  },
  {
    "path": "src/content/docs/start-here/how-to-use-this-guide.md",
    "before": "40c539f1d0f1d52b1f1c2626722ab9ca29204930b227d0699d788afc03b7fb7c",
    "after": "147f4050bc51eba5ed0cad5e851a4bc07daa43fe2e6f6724e1ddb114469bb52b",
    "ranges": [
      {
        "i": 93,
        "n": 1,
        "prev": [
          "| 원격 반영 | 원격 SHA, push·Pull Request·병합 결과 | 배포 자동화가 없다면 실제 배포 |"
        ]
      }
    ]
  }
];
export function r26PreFixBytes(path, bytes) {
  bytes = r26PreCloseoutBytes(path, bytes);
  const e = changes.find(c => c.path === path);
  if (!e || hash(bytes) !== e.after) return bytes;
  const lines = bytes.toString('utf8').split('\n');
  for (const {i, n, prev} of [...e.ranges].reverse()) lines.splice(i, n, ...prev);
  const original = Buffer.from(lines.join('\n'));
  if (hash(original) !== e.before) throw Error('R26 historical restoration mismatch: ' + path);
  return original;
}

export function validateR26Fix(read) {
  return changes.flatMap(e => {
    try {
      return hash(r26PreCloseoutBytes(e.path,read(e.path))) === e.after ? [] : ['R26 candidate drift: ' + e.path];
    } catch {
      return ['R26 candidate missing: ' + e.path];
    }
  });
}
