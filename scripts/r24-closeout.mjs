import {createHash} from 'node:crypto';
import {r25PreFixBytes} from './r25-fix-transition.mjs';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
export const r24Closeout={
  "changes": [
    {
      "path": "src/content/docs/index.md",
      "before": "53af3211f121ab63c1b0a9dae01266093dd15977860dadef173ce2ecfa940fb8",
      "after": "af2b371b4308292f4f855d22ac3e33f505598338f3f0ff4b67bc6b9b87ce65d2",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r24-navigation-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r24-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/start-here/index.md",
      "before": "2d401914f5c44f965c8508f0798e13be0152c3d674ed2afec63f424a4c602734",
      "after": "7d9a47e894061126de83fc4df53e01df19b3393ed8ed526b2d7ee7d5da84fa8a",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r24-navigation-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r24-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/start-here/how-to-use-this-guide.md",
      "before": "a46f606ce093c5eda3e9af139867a7ba47c07a7858a6471256906d15a2c9f0ba",
      "after": "40c539f1d0f1d52b1f1c2626722ab9ca29204930b227d0699d788afc03b7fb7c",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r24-navigation-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r24-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/start-here/learning-paths.md",
      "before": "df97f27ff8179182a101ffdb66848a34cab64538b488756ca24c4df420ebc15d",
      "after": "8ae3482139ced197a22552533ed527f1fe01b5cae49a42d7b0734e22d5787e74",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r24-navigation-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r24-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/start-here/why-this-guide.md",
      "before": "a84a02e11ef32b4a96f0078e2704d0edf19d693d72a82bdfddbbb8e60ea8b74d",
      "after": "c45c9c35a7cd37443b8955966e6df24da69f78750f764cc75a96399807320cef",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r24-navigation-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r24-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/01-mental-models/index.md",
      "before": "57fbb0299500f1c6daf0426d7bc3d6632851a555ba798067f0c0a37fb7c21a3a",
      "after": "1560f6ee1fb9c1b8462036649712d763a1097bb71befe61cc4afd2b31eaf6399",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r24-navigation-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r24-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/02-work-environment/index.md",
      "before": "204ab712629a07604e6d4256a7bc4cf6efc723a6fb8ea6593a1facccb6b64e16",
      "after": "1506eb8dd60c0442f5df810a07c71953b56e13b95c40dd042e164a1113bbaabf",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r24-navigation-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r24-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/03-full-stack/index.md",
      "before": "4e97bd446bb15ff6e1cdaaafd2fda4b221fb07f8b9c335ad8005fb9ee7517324",
      "after": "7e801b01d1e139c34f8b52612168d1c471830912d15a41f0bcb566461e1e4388",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r24-navigation-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r24-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/04-backend-data/index.md",
      "before": "0bc3a4fea0222b36271fe92b4a83319d019619532cf87ef251fa5002f2b6973f",
      "after": "94979407bed69dce08cf30aefed40362ae70a334fcfbb35b3d00ae26000e0aed",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r24-navigation-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r24-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/05-frontend/index.md",
      "before": "6ea93c86b312503105780d1158a94f45680c1ae6f8e602d2886ce0ab73ec4270",
      "after": "f1fc8b591c7052593cc293ad93e5065d19218eb0d2c08a5ee9ff3ff40a6d2701",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r24-navigation-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r24-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/06-requirements-design/index.md",
      "before": "16254ada745f93b17d598e22efd40aeaf7fd61ce8f3b3dc513b14aa96af1c798",
      "after": "0b09a9281b0735a906b7e578e2103e1360ef7baca85d98fac0c8e91ff5babe48",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r24-navigation-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r24-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/07-workflow-methods/index.md",
      "before": "f13724ccba91ce77bfda29624b1e08363476ff9e27754b8c3845597d18e3ba22",
      "after": "d2d878921c3035339d79c3612b715e2587a5c51e278a3c01a235d4ab094f6fa2",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r24-navigation-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r24-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/08-quality/index.md",
      "before": "92437132a14f03af95f0714afa335b5b6e2ffec2fc47d8c6b3e5a58ff2052ee6",
      "after": "bf776df0c65c10b528a46a62ead8751c099a81f13ebde020769364229f66e9e0",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r24-navigation-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r24-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/09-git-github/index.md",
      "before": "879d060baf6d7f35e45be1e2685b56389adcec6479908cc313579cd518e3cf4f",
      "after": "d31c2409ab4f0151330e61b2cda7c07acf9c21c823e91cccaf89ba571b5e9b37",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r24-navigation-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r24-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/10-deployment-operations/index.md",
      "before": "d8d4ec030ea396019d5596b01866675719abfc14b33cff73ca73240a989a795a",
      "after": "9d9857b8ca69593b2526013e688c4a4149d6cab51160e4301727510db948809c",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r24-navigation-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r24-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/11-ai-native/index.md",
      "before": "db188b1ac99de066b4e60c74da04a3b6c5dc541c9757398d446c99e8267690d2",
      "after": "69f9aa4418857a1fbe0fcc2e364599bb0fd71d17eebeb12f6383e8fb65c156aa",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r24-navigation-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r24-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/12-case-studies/index.md",
      "before": "e7c90e444e111f299270175976a5e4baded3f6007938bdf29cf54086fdb0a60c",
      "after": "467a69706d3088eb7cda2149ba0524ba170911fbd9fa6a0dbfd16d3c1521ae10",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r24-navigation-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r24-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "src/content/docs/reference/index.md",
      "before": "7eb4ac55dcf2eaadc30777c82d0360b22bc0fc41b08e586f9514efd91f1efc4f",
      "after": "8e5c317c35678632def94a26afda8849ba074aeef1a87d62a63e07808bcf3a0a",
      "replacements": [
        [
          "contentStatus: draft",
          "contentStatus: review\nreviewEvidence:\n  - \"request: docs/project/reviews/public-beta-1/r24-navigation-request.md\"\n  - \"independent: docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md\"\n  - \"adjudication: docs/project/reviews/public-beta-1/r24-controller-closeout.md\""
        ]
      ]
    },
    {
      "path": "CONTENT_MAP.md",
      "before": "7f9bf2c5aacf96dd19821dd7225d5948d0ecdd50568997ca36b9b2fe5ba37ba2",
      "after": "910b6e82e60cf8350d76fc755f47016118ce09cf0a8f155e714d2187dda5b2cb",
      "replacements": [
        [
          "- 상태: `draft` 23개, `seed` 0개, `review` 36개, `ready` 0개",
          "- 상태: `draft` 5개, `seed` 0개, `review` 54개, `ready` 0개"
        ],
        [
          "| [바이브 개발 핸드북](src/content/docs/index.md) | `draft` | 2,398 | `/` |",
          "| [바이브 개발 핸드북](src/content/docs/index.md) | `review` | 2,398 | `/` |"
        ],
        [
          "| [시작하기](src/content/docs/start-here/index.md) | `draft` | 960 | `/start-here/` |",
          "| [시작하기](src/content/docs/start-here/index.md) | `review` | 960 | `/start-here/` |"
        ],
        [
          "| [이 가이드를 사용하는 법](src/content/docs/start-here/how-to-use-this-guide.md) | `draft` | 3,000 | `/start-here/how-to-use-this-guide/` |",
          "| [이 가이드를 사용하는 법](src/content/docs/start-here/how-to-use-this-guide.md) | `review` | 3,000 | `/start-here/how-to-use-this-guide/` |"
        ],
        [
          "| [학습 경로](src/content/docs/start-here/learning-paths.md) | `draft` | 4,918 | `/start-here/learning-paths/` |",
          "| [학습 경로](src/content/docs/start-here/learning-paths.md) | `review` | 4,918 | `/start-here/learning-paths/` |"
        ],
        [
          "| [왜 이 가이드가 필요한가](src/content/docs/start-here/why-this-guide.md) | `draft` | 1,879 | `/start-here/why-this-guide/` |",
          "| [왜 이 가이드가 필요한가](src/content/docs/start-here/why-this-guide.md) | `review` | 1,879 | `/start-here/why-this-guide/` |"
        ],
        [
          "| [1. 개발자 사고와 소프트웨어](src/content/docs/01-mental-models/index.md) | `draft` | 814 | `/01-mental-models/` |",
          "| [1. 개발자 사고와 소프트웨어](src/content/docs/01-mental-models/index.md) | `review` | 814 | `/01-mental-models/` |"
        ],
        [
          "| [2. 작업 환경](src/content/docs/02-work-environment/index.md) | `draft` | 773 | `/02-work-environment/` |",
          "| [2. 작업 환경](src/content/docs/02-work-environment/index.md) | `review` | 773 | `/02-work-environment/` |"
        ],
        [
          "| [3. 풀스택 구조](src/content/docs/03-full-stack/index.md) | `draft` | 791 | `/03-full-stack/` |",
          "| [3. 풀스택 구조](src/content/docs/03-full-stack/index.md) | `review` | 791 | `/03-full-stack/` |"
        ],
        [
          "| [4. 백엔드와 데이터](src/content/docs/04-backend-data/index.md) | `draft` | 875 | `/04-backend-data/` |",
          "| [4. 백엔드와 데이터](src/content/docs/04-backend-data/index.md) | `review` | 875 | `/04-backend-data/` |"
        ],
        [
          "| [5. 프런트엔드](src/content/docs/05-frontend/index.md) | `draft` | 883 | `/05-frontend/` |",
          "| [5. 프런트엔드](src/content/docs/05-frontend/index.md) | `review` | 883 | `/05-frontend/` |"
        ],
        [
          "| [6. 요구사항과 설계](src/content/docs/06-requirements-design/index.md) | `draft` | 905 | `/06-requirements-design/` |",
          "| [6. 요구사항과 설계](src/content/docs/06-requirements-design/index.md) | `review` | 905 | `/06-requirements-design/` |"
        ],
        [
          "| [7. 개발 절차와 협업](src/content/docs/07-workflow-methods/index.md) | `draft` | 843 | `/07-workflow-methods/` |",
          "| [7. 개발 절차와 협업](src/content/docs/07-workflow-methods/index.md) | `review` | 843 | `/07-workflow-methods/` |"
        ],
        [
          "| [8. 품질과 안전](src/content/docs/08-quality/index.md) | `draft` | 827 | `/08-quality/` |",
          "| [8. 품질과 안전](src/content/docs/08-quality/index.md) | `review` | 827 | `/08-quality/` |"
        ],
        [
          "| [9. Git과 GitHub](src/content/docs/09-git-github/index.md) | `draft` | 879 | `/09-git-github/` |",
          "| [9. Git과 GitHub](src/content/docs/09-git-github/index.md) | `review` | 879 | `/09-git-github/` |"
        ],
        [
          "| [10. 배포와 운영](src/content/docs/10-deployment-operations/index.md) | `draft` | 897 | `/10-deployment-operations/` |",
          "| [10. 배포와 운영](src/content/docs/10-deployment-operations/index.md) | `review` | 897 | `/10-deployment-operations/` |"
        ],
        [
          "| [11. AI 네이티브 개발](src/content/docs/11-ai-native/index.md) | `draft` | 1,042 | `/11-ai-native/` |",
          "| [11. AI 네이티브 개발](src/content/docs/11-ai-native/index.md) | `review` | 1,042 | `/11-ai-native/` |"
        ],
        [
          "| [12. 사례와 캡스톤](src/content/docs/12-case-studies/index.md) | `draft` | 955 | `/12-case-studies/` |",
          "| [12. 사례와 캡스톤](src/content/docs/12-case-studies/index.md) | `review` | 955 | `/12-case-studies/` |"
        ],
        [
          "| [용어·방법론·체크리스트](src/content/docs/reference/index.md) | `draft` | 1,028 | `/reference/` |",
          "| [용어·방법론·체크리스트](src/content/docs/reference/index.md) | `review` | 1,028 | `/reference/` |"
        ]
      ]
    },
    {
      "path": "docs/project/reviews/public-beta-1/review-matrix.md",
      "before": "64f675aaafc2feac638dbd3162ce57311851787e2c8350e8ad7fefc49c4247ec",
      "after": "6ab1562dcfdded5fbc2da1125c1d9ecf8d4a4a7c171f126ff46b254cc7a77323",
      "replacements": [
        [
          "# 공개 베타 M5 독립 검토 행렬",
          "# 공개 베타 M5 독립 검토 행렬\n\n2026-11-16 R24 controller closeout: 최초 NEEDS CHANGES C0/I2/M4와 당시 점수·실패는 역사로 보존합니다. 같은 저장 reviewer Fix1 원고/공통 UI/준비 코드 PASS C0/I0/M0·6finding RESOLVED·치명0을 연결합니다. 사용법/필요한 이유18/18, 나머지16문서각16/16(비유 N/A)입니다. 본문 불변 metadata-only review 전이, R01~R24done·R25~R26pending, 공개59draft5/review54/ready0 후보이며 완료행24와review문서54를 구분합니다. 아래 날짜별 산문은 역사이며 정본은 이 문단·행별표/JSON과 r24-controller-closeout.md입니다. M5전체·ready·RC·소유자승인·M6/M7은 남고 다음은R25입니다. 외부 쓰기는 하지 않습니다."
        ],
        [
          "| R24 | `navigation` | 내비게이션 묶음 | 18 | 작성·구현 완료 | pending | 대기 | false |",
          "| R24 | `navigation` | 내비게이션 묶음 | 18 | 작성·구현 완료 | done | 통과 | false |"
        ],
        [
          "`row_defaults`는 아직 시작하지 않은 R24~R26의 기본 상태이며 R01~R23는 완료된 `review_state` 전체로 이를 대체합니다.",
          "`row_defaults`는 아직 시작하지 않은 R25~R26의 기본 상태이며 R01~R24는 완료된 `review_state` 전체로 이를 대체합니다."
        ],
        [
          "\"block_reason\": \"R24~R26 입력 고정 및 Codex 검토 미실행\"",
          "\"block_reason\": \"R25~R26 입력 고정 및 Codex 검토 미실행\""
        ],
        [
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md\"",
          "\"rereview_path\": \"docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md\",\n      \"review_state\": {\"status\":\"done\",\"required_review_state\":\"통과\",\"release_ready\":false,\"input_manifest_state\":\"input-fixed\",\"individual_sha256_state\":\"fixed\",\"execution_request_path\":\"docs/project/reviews/public-beta-1/r24-navigation-request.md\",\"execution_manifest_path\":\"docs/project/reviews/public-beta-1/r24-navigation-input-manifest.json\",\"source_checked_at\":\"2026-11-16\",\"combined_sha256\":\"33de24774c8319188aa54f47c5154c2c5ab8690cee8f49c1ae592d3333e315a0\",\"actual_invocation\":\"completed\",\"observed_model_context_effort\":\"gpt-6-astra/high; fresh initial/read-only; same persisted session resumed\",\"result_state\":\"pass-via-followup-original-needs-changes-preserved\",\"adjudication_state\":\"complete\",\"valid_independent_evidence\":true,\"open_findings\":{\"critical\":0,\"important\":0,\"minor\":0},\"historical_verdict\":\"NEEDS CHANGES\",\"rereview_state\":\"pass-important2-minor4-resolved-after-fix1\",\"deferred_findings\":[],\"reviewed_target_sha256\":\"53af3211f121ab63c1b0a9dae01266093dd15977860dadef173ce2ecfa940fb8\",\"current_target_sha256\":\"af2b371b4308292f4f855d22ac3e33f505598338f3f0ff4b67bc6b9b87ce65d2\",\"metadata_transition\":\"metadata-only-draft-to-review\",\"closeout_path\":\"docs/project/reviews/public-beta-1/r24-controller-closeout.md\",\"rereview_path\":\"docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md\",\"next_scope\":\"R25 pending; no M5/ready/public approval\",\"target_hashes\":[{\"path\":\"src/content/docs/index.md\",\"reviewed_sha256\":\"53af3211f121ab63c1b0a9dae01266093dd15977860dadef173ce2ecfa940fb8\",\"current_sha256\":\"af2b371b4308292f4f855d22ac3e33f505598338f3f0ff4b67bc6b9b87ce65d2\"},{\"path\":\"src/content/docs/start-here/index.md\",\"reviewed_sha256\":\"2d401914f5c44f965c8508f0798e13be0152c3d674ed2afec63f424a4c602734\",\"current_sha256\":\"7d9a47e894061126de83fc4df53e01df19b3393ed8ed526b2d7ee7d5da84fa8a\"},{\"path\":\"src/content/docs/start-here/how-to-use-this-guide.md\",\"reviewed_sha256\":\"a46f606ce093c5eda3e9af139867a7ba47c07a7858a6471256906d15a2c9f0ba\",\"current_sha256\":\"40c539f1d0f1d52b1f1c2626722ab9ca29204930b227d0699d788afc03b7fb7c\"},{\"path\":\"src/content/docs/start-here/learning-paths.md\",\"reviewed_sha256\":\"df97f27ff8179182a101ffdb66848a34cab64538b488756ca24c4df420ebc15d\",\"current_sha256\":\"8ae3482139ced197a22552533ed527f1fe01b5cae49a42d7b0734e22d5787e74\"},{\"path\":\"src/content/docs/start-here/why-this-guide.md\",\"reviewed_sha256\":\"a84a02e11ef32b4a96f0078e2704d0edf19d693d72a82bdfddbbb8e60ea8b74d\",\"current_sha256\":\"c45c9c35a7cd37443b8955966e6df24da69f78750f764cc75a96399807320cef\"},{\"path\":\"src/content/docs/01-mental-models/index.md\",\"reviewed_sha256\":\"57fbb0299500f1c6daf0426d7bc3d6632851a555ba798067f0c0a37fb7c21a3a\",\"current_sha256\":\"1560f6ee1fb9c1b8462036649712d763a1097bb71befe61cc4afd2b31eaf6399\"},{\"path\":\"src/content/docs/02-work-environment/index.md\",\"reviewed_sha256\":\"204ab712629a07604e6d4256a7bc4cf6efc723a6fb8ea6593a1facccb6b64e16\",\"current_sha256\":\"1506eb8dd60c0442f5df810a07c71953b56e13b95c40dd042e164a1113bbaabf\"},{\"path\":\"src/content/docs/03-full-stack/index.md\",\"reviewed_sha256\":\"4e97bd446bb15ff6e1cdaaafd2fda4b221fb07f8b9c335ad8005fb9ee7517324\",\"current_sha256\":\"7e801b01d1e139c34f8b52612168d1c471830912d15a41f0bcb566461e1e4388\"},{\"path\":\"src/content/docs/04-backend-data/index.md\",\"reviewed_sha256\":\"0bc3a4fea0222b36271fe92b4a83319d019619532cf87ef251fa5002f2b6973f\",\"current_sha256\":\"94979407bed69dce08cf30aefed40362ae70a334fcfbb35b3d00ae26000e0aed\"},{\"path\":\"src/content/docs/05-frontend/index.md\",\"reviewed_sha256\":\"6ea93c86b312503105780d1158a94f45680c1ae6f8e602d2886ce0ab73ec4270\",\"current_sha256\":\"f1fc8b591c7052593cc293ad93e5065d19218eb0d2c08a5ee9ff3ff40a6d2701\"},{\"path\":\"src/content/docs/06-requirements-design/index.md\",\"reviewed_sha256\":\"16254ada745f93b17d598e22efd40aeaf7fd61ce8f3b3dc513b14aa96af1c798\",\"current_sha256\":\"0b09a9281b0735a906b7e578e2103e1360ef7baca85d98fac0c8e91ff5babe48\"},{\"path\":\"src/content/docs/07-workflow-methods/index.md\",\"reviewed_sha256\":\"f13724ccba91ce77bfda29624b1e08363476ff9e27754b8c3845597d18e3ba22\",\"current_sha256\":\"d2d878921c3035339d79c3612b715e2587a5c51e278a3c01a235d4ab094f6fa2\"},{\"path\":\"src/content/docs/08-quality/index.md\",\"reviewed_sha256\":\"92437132a14f03af95f0714afa335b5b6e2ffec2fc47d8c6b3e5a58ff2052ee6\",\"current_sha256\":\"bf776df0c65c10b528a46a62ead8751c099a81f13ebde020769364229f66e9e0\"},{\"path\":\"src/content/docs/09-git-github/index.md\",\"reviewed_sha256\":\"879d060baf6d7f35e45be1e2685b56389adcec6479908cc313579cd518e3cf4f\",\"current_sha256\":\"d31c2409ab4f0151330e61b2cda7c07acf9c21c823e91cccaf89ba571b5e9b37\"},{\"path\":\"src/content/docs/10-deployment-operations/index.md\",\"reviewed_sha256\":\"d8d4ec030ea396019d5596b01866675719abfc14b33cff73ca73240a989a795a\",\"current_sha256\":\"9d9857b8ca69593b2526013e688c4a4149d6cab51160e4301727510db948809c\"},{\"path\":\"src/content/docs/11-ai-native/index.md\",\"reviewed_sha256\":\"db188b1ac99de066b4e60c74da04a3b6c5dc541c9757398d446c99e8267690d2\",\"current_sha256\":\"69f9aa4418857a1fbe0fcc2e364599bb0fd71d17eebeb12f6383e8fb65c156aa\"},{\"path\":\"src/content/docs/12-case-studies/index.md\",\"reviewed_sha256\":\"e7c90e444e111f299270175976a5e4baded3f6007938bdf29cf54086fdb0a60c\",\"current_sha256\":\"467a69706d3088eb7cda2149ba0524ba170911fbd9fa6a0dbfd16d3c1521ae10\"},{\"path\":\"src/content/docs/reference/index.md\",\"reviewed_sha256\":\"7eb4ac55dcf2eaadc30777c82d0360b22bc0fc41b08e586f9514efd91f1efc4f\",\"current_sha256\":\"8e5c317c35678632def94a26afda8849ba074aeef1a87d62a63e07808bcf3a0a\"}]}"
        ]
      ]
    },
    {
      "path": "PROJECT_CONTEXT.md",
      "before": "1fd0badfd76daa4da0835b03a1c779c5e2c4158203f2de87345e3094ff37417d",
      "after": "68f4d012c1036ec2c97ad604e09f5f8cde3c1d9c78949937615cd3474e27127c",
      "replacements": [
        [
          "# 프로젝트 컨텍스트",
          "# 프로젝트 컨텍스트\n\n2026-11-16 R24 controller closeout: 최초 NEEDS CHANGES C0/I2/M4와 당시 점수·실패는 역사로 보존합니다. 같은 저장 reviewer Fix1 원고/공통 UI/준비 코드 PASS C0/I0/M0·6finding RESOLVED·치명0을 연결합니다. 사용법/필요한 이유18/18, 나머지16문서각16/16(비유 N/A)입니다. 본문 불변 metadata-only review 전이, R01~R24done·R25~R26pending, 공개59draft5/review54/ready0 후보이며 완료행24와review문서54를 구분합니다. 아래 날짜별 산문은 역사이며 정본은 이 문단·행별표/JSON과 r24-controller-closeout.md입니다. M5전체·ready·RC·소유자승인·M6/M7은 남고 다음은R25입니다. 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r24-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "ROADMAP.md",
      "before": "225d8ca60314bd4c7078a2bb2b72a89df1594801025262dae8f885925454454c",
      "after": "a2a487957541e4189294a0c7bd4b1951d4d9181bc2b2bd3cb9aa4a66db2fd520",
      "replacements": [
        [
          "# 로드맵",
          "# 로드맵\n\n2026-11-16 R24 controller closeout: 최초 NEEDS CHANGES C0/I2/M4와 당시 점수·실패는 역사로 보존합니다. 같은 저장 reviewer Fix1 원고/공통 UI/준비 코드 PASS C0/I0/M0·6finding RESOLVED·치명0을 연결합니다. 사용법/필요한 이유18/18, 나머지16문서각16/16(비유 N/A)입니다. 본문 불변 metadata-only review 전이, R01~R24done·R25~R26pending, 공개59draft5/review54/ready0 후보이며 완료행24와review문서54를 구분합니다. 아래 날짜별 산문은 역사이며 정본은 이 문단·행별표/JSON과 r24-controller-closeout.md입니다. M5전체·ready·RC·소유자승인·M6/M7은 남고 다음은R25입니다. 외부 쓰기는 하지 않습니다. 상세: `docs/project/reviews/public-beta-1/r24-controller-closeout.md`."
        ]
      ]
    },
    {
      "path": "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md",
      "before": "150ab96e6383242b42f4cef02808a38cd41f0f6aeb1cdfd39665d3cd10f584e2",
      "after": "c51886cd409246467a7d8614be3c5dea5645ebf16e84067bcc3faf7d087c998d",
      "replacements": [
        [
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R23 완료, R24~R26 검토 및 통합 미완료 |",
          "| M5-02 | Codex 두 겹 독립 검토·controller 재판정·수정 | 7.0 | pending | 0.0 | Task 22; R01~R24 완료, R25~R26 검토 및 통합 미완료 |"
        ],
        [
          "| `src/content/docs/index.md` | draft | M3-NAV |",
          "| `src/content/docs/index.md` | review | M3-NAV |"
        ],
        [
          "| `src/content/docs/start-here/index.md` | draft | M3-NAV |",
          "| `src/content/docs/start-here/index.md` | review | M3-NAV |"
        ],
        [
          "| `src/content/docs/start-here/how-to-use-this-guide.md` | draft | M3-NAV |",
          "| `src/content/docs/start-here/how-to-use-this-guide.md` | review | M3-NAV |"
        ],
        [
          "| `src/content/docs/start-here/learning-paths.md` | draft | M3-NAV |",
          "| `src/content/docs/start-here/learning-paths.md` | review | M3-NAV |"
        ],
        [
          "| `src/content/docs/start-here/why-this-guide.md` | draft | M3-NAV |",
          "| `src/content/docs/start-here/why-this-guide.md` | review | M3-NAV |"
        ],
        [
          "| `src/content/docs/01-mental-models/index.md` | draft | M3-NAV |",
          "| `src/content/docs/01-mental-models/index.md` | review | M3-NAV |"
        ],
        [
          "| `src/content/docs/02-work-environment/index.md` | draft | M3-NAV |",
          "| `src/content/docs/02-work-environment/index.md` | review | M3-NAV |"
        ],
        [
          "| `src/content/docs/03-full-stack/index.md` | draft | M3-NAV |",
          "| `src/content/docs/03-full-stack/index.md` | review | M3-NAV |"
        ],
        [
          "| `src/content/docs/04-backend-data/index.md` | draft | M3-NAV |",
          "| `src/content/docs/04-backend-data/index.md` | review | M3-NAV |"
        ],
        [
          "| `src/content/docs/05-frontend/index.md` | draft | M3-NAV |",
          "| `src/content/docs/05-frontend/index.md` | review | M3-NAV |"
        ],
        [
          "| `src/content/docs/06-requirements-design/index.md` | draft | M3-NAV |",
          "| `src/content/docs/06-requirements-design/index.md` | review | M3-NAV |"
        ],
        [
          "| `src/content/docs/07-workflow-methods/index.md` | draft | M3-NAV |",
          "| `src/content/docs/07-workflow-methods/index.md` | review | M3-NAV |"
        ],
        [
          "| `src/content/docs/08-quality/index.md` | draft | M3-NAV |",
          "| `src/content/docs/08-quality/index.md` | review | M3-NAV |"
        ],
        [
          "| `src/content/docs/09-git-github/index.md` | draft | M3-NAV |",
          "| `src/content/docs/09-git-github/index.md` | review | M3-NAV |"
        ],
        [
          "| `src/content/docs/10-deployment-operations/index.md` | draft | M3-NAV |",
          "| `src/content/docs/10-deployment-operations/index.md` | review | M3-NAV |"
        ],
        [
          "| `src/content/docs/11-ai-native/index.md` | draft | M3-NAV |",
          "| `src/content/docs/11-ai-native/index.md` | review | M3-NAV |"
        ],
        [
          "| `src/content/docs/12-case-studies/index.md` | draft | M3-NAV |",
          "| `src/content/docs/12-case-studies/index.md` | review | M3-NAV |"
        ],
        [
          "| `src/content/docs/reference/index.md` | draft | M3-NAV |",
          "| `src/content/docs/reference/index.md` | review | M3-NAV |"
        ],
        [
          "| - [ ] | R24 `navigation` |",
          "| - [x] | R24 `navigation` |"
        ]
      ]
    },
    {
      "path": "research/source-map.md",
      "before": "8fb691e92e07e52c3393811831b6a609986b7dd6b3b0e22423d2b99039ad2aa9",
      "after": "d7a4336d9208691a23bb2903e238d1cdebedd1a235b2d7734d3d88d902a224e1",
      "replacements": [
        [
          "# 출처 지도",
          "# 출처 지도\n\n2026-11-16 R24 후속 판정: 저장소 제목/학습목표/헤딩/일부 도입 문장의 직접 문맥과 최초18원고 전체 검토를 구분합니다. 같은 저장 reviewer Fix1 PASS C0/I0/M0·6finding RESOLVED를 연결하며 외부 현재성 확인일을 갱신하지 않습니다. metadata review 전이는 R24 controller closeout으로 연결하고 M5전체/ready/공개 승인이 아닙니다."
        ]
      ]
    }
  ],
  "state": {
    "status": "done",
    "required_review_state": "통과",
    "release_ready": false,
    "input_manifest_state": "input-fixed",
    "individual_sha256_state": "fixed",
    "execution_request_path": "docs/project/reviews/public-beta-1/r24-navigation-request.md",
    "execution_manifest_path": "docs/project/reviews/public-beta-1/r24-navigation-input-manifest.json",
    "source_checked_at": "2026-11-16",
    "combined_sha256": "33de24774c8319188aa54f47c5154c2c5ab8690cee8f49c1ae592d3333e315a0",
    "actual_invocation": "completed",
    "observed_model_context_effort": "gpt-6-astra/high; fresh initial/read-only; same persisted session resumed",
    "result_state": "pass-via-followup-original-needs-changes-preserved",
    "adjudication_state": "complete",
    "valid_independent_evidence": true,
    "open_findings": {
      "critical": 0,
      "important": 0,
      "minor": 0
    },
    "historical_verdict": "NEEDS CHANGES",
    "rereview_state": "pass-important2-minor4-resolved-after-fix1",
    "deferred_findings": [],
    "reviewed_target_sha256": "53af3211f121ab63c1b0a9dae01266093dd15977860dadef173ce2ecfa940fb8",
    "current_target_sha256": "af2b371b4308292f4f855d22ac3e33f505598338f3f0ff4b67bc6b9b87ce65d2",
    "metadata_transition": "metadata-only-draft-to-review",
    "closeout_path": "docs/project/reviews/public-beta-1/r24-controller-closeout.md",
    "rereview_path": "docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md",
    "next_scope": "R25 pending; no M5/ready/public approval",
    "target_hashes": [
      {
        "path": "src/content/docs/index.md",
        "reviewed_sha256": "53af3211f121ab63c1b0a9dae01266093dd15977860dadef173ce2ecfa940fb8",
        "current_sha256": "af2b371b4308292f4f855d22ac3e33f505598338f3f0ff4b67bc6b9b87ce65d2"
      },
      {
        "path": "src/content/docs/start-here/index.md",
        "reviewed_sha256": "2d401914f5c44f965c8508f0798e13be0152c3d674ed2afec63f424a4c602734",
        "current_sha256": "7d9a47e894061126de83fc4df53e01df19b3393ed8ed526b2d7ee7d5da84fa8a"
      },
      {
        "path": "src/content/docs/start-here/how-to-use-this-guide.md",
        "reviewed_sha256": "a46f606ce093c5eda3e9af139867a7ba47c07a7858a6471256906d15a2c9f0ba",
        "current_sha256": "40c539f1d0f1d52b1f1c2626722ab9ca29204930b227d0699d788afc03b7fb7c"
      },
      {
        "path": "src/content/docs/start-here/learning-paths.md",
        "reviewed_sha256": "df97f27ff8179182a101ffdb66848a34cab64538b488756ca24c4df420ebc15d",
        "current_sha256": "8ae3482139ced197a22552533ed527f1fe01b5cae49a42d7b0734e22d5787e74"
      },
      {
        "path": "src/content/docs/start-here/why-this-guide.md",
        "reviewed_sha256": "a84a02e11ef32b4a96f0078e2704d0edf19d693d72a82bdfddbbb8e60ea8b74d",
        "current_sha256": "c45c9c35a7cd37443b8955966e6df24da69f78750f764cc75a96399807320cef"
      },
      {
        "path": "src/content/docs/01-mental-models/index.md",
        "reviewed_sha256": "57fbb0299500f1c6daf0426d7bc3d6632851a555ba798067f0c0a37fb7c21a3a",
        "current_sha256": "1560f6ee1fb9c1b8462036649712d763a1097bb71befe61cc4afd2b31eaf6399"
      },
      {
        "path": "src/content/docs/02-work-environment/index.md",
        "reviewed_sha256": "204ab712629a07604e6d4256a7bc4cf6efc723a6fb8ea6593a1facccb6b64e16",
        "current_sha256": "1506eb8dd60c0442f5df810a07c71953b56e13b95c40dd042e164a1113bbaabf"
      },
      {
        "path": "src/content/docs/03-full-stack/index.md",
        "reviewed_sha256": "4e97bd446bb15ff6e1cdaaafd2fda4b221fb07f8b9c335ad8005fb9ee7517324",
        "current_sha256": "7e801b01d1e139c34f8b52612168d1c471830912d15a41f0bcb566461e1e4388"
      },
      {
        "path": "src/content/docs/04-backend-data/index.md",
        "reviewed_sha256": "0bc3a4fea0222b36271fe92b4a83319d019619532cf87ef251fa5002f2b6973f",
        "current_sha256": "94979407bed69dce08cf30aefed40362ae70a334fcfbb35b3d00ae26000e0aed"
      },
      {
        "path": "src/content/docs/05-frontend/index.md",
        "reviewed_sha256": "6ea93c86b312503105780d1158a94f45680c1ae6f8e602d2886ce0ab73ec4270",
        "current_sha256": "f1fc8b591c7052593cc293ad93e5065d19218eb0d2c08a5ee9ff3ff40a6d2701"
      },
      {
        "path": "src/content/docs/06-requirements-design/index.md",
        "reviewed_sha256": "16254ada745f93b17d598e22efd40aeaf7fd61ce8f3b3dc513b14aa96af1c798",
        "current_sha256": "0b09a9281b0735a906b7e578e2103e1360ef7baca85d98fac0c8e91ff5babe48"
      },
      {
        "path": "src/content/docs/07-workflow-methods/index.md",
        "reviewed_sha256": "f13724ccba91ce77bfda29624b1e08363476ff9e27754b8c3845597d18e3ba22",
        "current_sha256": "d2d878921c3035339d79c3612b715e2587a5c51e278a3c01a235d4ab094f6fa2"
      },
      {
        "path": "src/content/docs/08-quality/index.md",
        "reviewed_sha256": "92437132a14f03af95f0714afa335b5b6e2ffec2fc47d8c6b3e5a58ff2052ee6",
        "current_sha256": "bf776df0c65c10b528a46a62ead8751c099a81f13ebde020769364229f66e9e0"
      },
      {
        "path": "src/content/docs/09-git-github/index.md",
        "reviewed_sha256": "879d060baf6d7f35e45be1e2685b56389adcec6479908cc313579cd518e3cf4f",
        "current_sha256": "d31c2409ab4f0151330e61b2cda7c07acf9c21c823e91cccaf89ba571b5e9b37"
      },
      {
        "path": "src/content/docs/10-deployment-operations/index.md",
        "reviewed_sha256": "d8d4ec030ea396019d5596b01866675719abfc14b33cff73ca73240a989a795a",
        "current_sha256": "9d9857b8ca69593b2526013e688c4a4149d6cab51160e4301727510db948809c"
      },
      {
        "path": "src/content/docs/11-ai-native/index.md",
        "reviewed_sha256": "db188b1ac99de066b4e60c74da04a3b6c5dc541c9757398d446c99e8267690d2",
        "current_sha256": "69f9aa4418857a1fbe0fcc2e364599bb0fd71d17eebeb12f6383e8fb65c156aa"
      },
      {
        "path": "src/content/docs/12-case-studies/index.md",
        "reviewed_sha256": "e7c90e444e111f299270175976a5e4baded3f6007938bdf29cf54086fdb0a60c",
        "current_sha256": "467a69706d3088eb7cda2149ba0524ba170911fbd9fa6a0dbfd16d3c1521ae10"
      },
      {
        "path": "src/content/docs/reference/index.md",
        "reviewed_sha256": "7eb4ac55dcf2eaadc30777c82d0360b22bc0fc41b08e586f9514efd91f1efc4f",
        "current_sha256": "8e5c317c35678632def94a26afda8849ba074aeef1a87d62a63e07808bcf3a0a"
      }
    ]
  },
  "evidence": [
    {
      "path": "docs/project/reviews/public-beta-1/r24-controller-closeout.md",
      "sha256": "bb102ca1575f569bd14f360c80866aefd04184c4622a04819292e82ae6a515bf"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r24-navigation-request.md",
      "sha256": "8c2eb4dc7d558c00b2c9639affe380dfac0b39626e523635f71f645fa4d87c3a"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r24-navigation-input-manifest.json",
      "sha256": "d91392e73411b7d3680b67fd579f9efd6c7bb9240df2e560e159d2e6d7704607"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r24-navigation-codex-review.md",
      "sha256": "1d321416fbebcf83961e3d5f7716a24164c606782db07985a857f1be1a67458b"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r24-navigation-adjudication.md",
      "sha256": "78efb157dd899412f82faa02e66d6fcd0b28e74cb06bf1205c42727749b8e394"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r24-navigation-codex-rereview.md",
      "sha256": "8ffc3d83cabe9bd27574cf40815adfc7c60e6fb4cebd5dcba8dd8cf52d3a5013"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r24-fix-validation.md",
      "sha256": "8d2b85967cdc546b3cc7f599f1f92b5854898fc6817771eb97b79e3fcd669464"
    },
    {
      "path": "docs/project/reviews/public-beta-1/r24-input-preparation-validation.md",
      "sha256": "b7fb9903b392edada81426366e61e3ca6eea395d23e6a0bcdfe43ec416c0e7ff"
    }
  ]
};
const hash=b=>createHash('sha256').update(b).digest('hex');
export function r24PreCloseoutBytes(path,bytes){
 bytes=r25PreFixBytes(path,bytes);
 const e=r24Closeout.changes.find(e=>e.path===path);if(!e||hash(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R24 closeout reversal not unique');text=text.replace(after,before)}
 if(hash(text)!==e.before)throw Error('R24 pre-closeout hash mismatch');return Buffer.from(text);
}
export function validateR24Closeout(root,{read:load=p=>readFileSync(resolve(root,p))}={}){
 const read=p=>r25PreFixBytes(p,load(p));
 const errors=[];const required=[...r24Closeout.changes.filter(e=>!['PROJECT_CONTEXT.md','ROADMAP.md'].includes(e.path)).map(e=>({path:e.path,sha256:e.after})),...r24Closeout.evidence];
 for(const e of required){try{if(hash(read(e.path))!==e.sha256)errors.push('R24 closeout pinned file mismatch: '+e.path)}catch{errors.push('R24 closeout missing file: '+e.path)}}return errors;
}
