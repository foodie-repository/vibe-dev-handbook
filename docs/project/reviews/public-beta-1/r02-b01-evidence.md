# R02-B01 실행 증거 연결 — 2026-10-25

## 범위와 재사용

[최초 독립 검토](r02-client-server-codex-review.md)의 BLOCKED는 그대로 보존합니다. 이번 단위는 종료된 임시 reviewer를 재접속하지 않고, 별도 fresh 증거 검토자에게 기존 실행 증거를 연결하는 작업입니다. 실제 원문51청크·PNG18개 완독은 최초 reviewer의 성과로만 인정하며 새 증거 검토자의 원고·이미지 재검토로 계산하지 않습니다. 원고·그림·출처·실행 요청·매니페스트는 불변입니다. 의미 수정이 없으므로 공통 계약의 의미 변경 후 같은 reviewer 재검토를 대체하지 않습니다.

## 재확인 방법과 한계

고정 원시 로그의 SHA를 중단 보고서와 먼저 대조했습니다. 그 로그의 controller-preflight/controller-final delivery, 실제 userMessage 수신 payload, 원고8파일51청크·PNG18개·보충·개정을 현재 바이트와 대조했습니다. 수신 텍스트의 빈 text_elements 필드만 제거한 payload SHA가 전송 SHA와 일치하며, 각 이미지 앞의 ID/순서/경로/SHA/치수와 실제 localImage original 입력이 정확히 대응합니다. 기존 입력 생성기의 개별 및 framed combined 해시 검증도 통과했습니다. 실행 종료 시 자동 postDeliveryIntegrity 네 항목 true와 프로필·fresh history·도구 제한·구독 경로 기록이 연결됩니다. 아래 결과는 재현 검사 exit0·실패0입니다.

이 자료는 controller가 보존한 로컬 실행 로그의 검증이며 서버 서명이나 독립적인 결제 감사가 아닙니다. 10월23일 당시 실행·출처 확인을 10월25일 새 원고 검토나 현재 제품 사실로 갱신하지 않습니다. 과거 runtime의 stdout 수신 이벤트와 검사 결과를 증거로 삼고, 이번 단계에서 새로운 PNG 판독·브라우저 검증·전체 원고 검토를 반복하지 않았습니다. 재현 도구와 원시 로그는 기존 로컬 진행 원장 디렉터리에 보존하며 공개 저장소에는 비민감 결과만 남깁니다.

```json
{
  "checkedAt": "2026-10-25",
  "scope": "R02-B01 historical evidence linkage, not new manuscript or visual review",
  "logSha256": "5adb1b70f54206271ec99917ff4d66b5abe314e0b600cba40dd01df5ac379cfb",
  "resultTextSha256": "a8b427166bbd6ca4b5640c3a32e397170eab2ccf393c2f4295b583a8d9683d35",
  "profile": {
    "model": "gpt-6-astra",
    "provider": "openai",
    "effort": "high",
    "approval": "never",
    "sandbox": {
      "type": "readOnly",
      "networkAccess": false
    }
  },
  "historyTurns": 0,
  "auth": {
    "type": "chatgpt",
    "planType": "prolite",
    "hasCredits": false,
    "unlimited": false,
    "endpoint": "https://chatgpt.com"
  },
  "mcpDisabled": 15,
  "toolCalls": 0,
  "inputFiles": 26,
  "textChunks": 51,
  "textInputItems": 19,
  "actualImageItems": 18,
  "originalImagesUnchanged": true,
  "receivedPayloadReconstructedSha256": "95934cabbff16549ebc2d4f46c47a27f39458812e49f26fd3d02c2ad401ff1c9",
  "payloadComparison": "match after removing only empty text_elements transport fields",
  "baseCombined": "acf16f2062b5ac6101f3f7a6556d5ce17ca19b61e7f0deaa56f6a62df44faa8c",
  "amendmentSha256": "027508d6d1c1558c724e499e1282acf50742a38563ee9f48e5e3041f7308749d",
  "supplementSha256": "ab9967047d6f0e11bd1d7a70818a57e100b9bb627ba99ac44776f4c1a5169c75",
  "imageMappingSha256": "0f8d1168ae602a4247b37eb4b21565e5c47084918ab1dbe3b04be2256bd5556a",
  "imageMapping": [
    {
      "id": "R02-PNG-01",
      "order": 1,
      "path": "output/playwright/task20-fullstack-evidence/diagram-crops/pb-025-desktop-light-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-fullstack-direct.png",
      "sha256": "4401bc405b6b899283f111ba5f875194a1d6eccfb1bc40f8c08690a5b10251e7",
      "width": 560,
      "height": 1173,
      "detail": "original"
    },
    {
      "id": "R02-PNG-02",
      "order": 2,
      "path": "output/playwright/task20-fullstack-evidence/diagram-crops/pb-025-desktop-dark-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-fullstack-direct.png",
      "sha256": "61afbca2f691f14ce2e7bdbe5373617cadbc592cd5f54d685dd273f3ae065d90",
      "width": 560,
      "height": 1173,
      "detail": "original"
    },
    {
      "id": "R02-PNG-03",
      "order": 3,
      "path": "output/playwright/task20-fullstack-evidence/diagram-crops/pb-025-tablet-light-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-fullstack-direct.png",
      "sha256": "9b8318c7e5bf20f09ebcbf0af74f2453671748b1e4666f2afce036a10759fe07",
      "width": 560,
      "height": 1173,
      "detail": "original"
    },
    {
      "id": "R02-PNG-04",
      "order": 4,
      "path": "output/playwright/task20-fullstack-evidence/diagram-crops/pb-025-tablet-dark-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-fullstack-direct.png",
      "sha256": "3071ac752140b2be2bdd92abe58625fb22eca3cd578b2fa67971b8221be291cb",
      "width": 560,
      "height": 1173,
      "detail": "original"
    },
    {
      "id": "R02-PNG-05",
      "order": 5,
      "path": "output/playwright/task20-fullstack-evidence/diagram-crops/pb-025-mobile-light-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-fullstack-direct.png",
      "sha256": "11a0e0e4b1c26d3c25c4d8885b94396d204bf78e86f89020878208f855f23035",
      "width": 358,
      "height": 751,
      "detail": "original"
    },
    {
      "id": "R02-PNG-06",
      "order": 6,
      "path": "output/playwright/task20-fullstack-evidence/diagram-crops/pb-025-mobile-dark-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-fullstack-direct.png",
      "sha256": "d6e5d20c254260596bacdff2061bbb8b33bff137c70722dbe3fe39cbe31d189f",
      "width": 358,
      "height": 751,
      "detail": "original"
    },
    {
      "id": "R02-PNG-07",
      "order": 7,
      "path": "output/playwright/task20-fullstack-evidence/diagram-crops/pb-027-desktop-light-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-fullstack-direct.png",
      "sha256": "d8a9d3b776d4cbeae21cf88953aacb328b2c9bcce760cc0add111b4140e29050",
      "width": 560,
      "height": 1173,
      "detail": "original"
    },
    {
      "id": "R02-PNG-08",
      "order": 8,
      "path": "output/playwright/task20-fullstack-evidence/diagram-crops/pb-027-desktop-dark-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-fullstack-direct.png",
      "sha256": "d174b9ad395fbf8cfd142bf7eb836a1a8614be5a4c13011fb1210c2b229a55bb",
      "width": 560,
      "height": 1173,
      "detail": "original"
    },
    {
      "id": "R02-PNG-09",
      "order": 9,
      "path": "output/playwright/task20-fullstack-evidence/diagram-crops/pb-027-tablet-light-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-fullstack-direct.png",
      "sha256": "a9e78ec792650117afd6d1c5561bb18aae2c00e5e110579d1d7ae568f5ce39db",
      "width": 560,
      "height": 1173,
      "detail": "original"
    },
    {
      "id": "R02-PNG-10",
      "order": 10,
      "path": "output/playwright/task20-fullstack-evidence/diagram-crops/pb-027-tablet-dark-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-fullstack-direct.png",
      "sha256": "21d292e2b1469c46f2a95450c44aaee15eceeb938d1357c2306e1dda974f0883",
      "width": 560,
      "height": 1173,
      "detail": "original"
    },
    {
      "id": "R02-PNG-11",
      "order": 11,
      "path": "output/playwright/task20-fullstack-evidence/diagram-crops/pb-027-mobile-light-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-fullstack-direct.png",
      "sha256": "a0b08e2c5060e1ac490713a4b83dc822b57c72df23de5ddec775ef7cb82210b2",
      "width": 358,
      "height": 751,
      "detail": "original"
    },
    {
      "id": "R02-PNG-12",
      "order": 12,
      "path": "output/playwright/task20-fullstack-evidence/diagram-crops/pb-027-mobile-dark-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-fullstack-direct.png",
      "sha256": "2860dbcfd20881bfb054b072b73b553fbf6f7110ff6ae6f0a9f3ae7be71192a4",
      "width": 358,
      "height": 751,
      "detail": "original"
    },
    {
      "id": "R02-PNG-13",
      "order": 13,
      "path": "output/playwright/task20-fullstack-evidence/diagram-crops/pb-032-desktop-light-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-fullstack-direct.png",
      "sha256": "c27d7da51857d17b2c86de2617f64e566f9dc7d7c3e0f17a9b2a633d569e038c",
      "width": 560,
      "height": 1173,
      "detail": "original"
    },
    {
      "id": "R02-PNG-14",
      "order": 14,
      "path": "output/playwright/task20-fullstack-evidence/diagram-crops/pb-032-desktop-dark-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-fullstack-direct.png",
      "sha256": "61afbca2f691f14ce2e7bdbe5373617cadbc592cd5f54d685dd273f3ae065d90",
      "width": 560,
      "height": 1173,
      "detail": "original"
    },
    {
      "id": "R02-PNG-15",
      "order": 15,
      "path": "output/playwright/task20-fullstack-evidence/diagram-crops/pb-032-tablet-light-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-fullstack-direct.png",
      "sha256": "18e7ce6477abd39ebcd0a1798111862c238042741599a7601ff7a6eff6f2b6c2",
      "width": 560,
      "height": 1173,
      "detail": "original"
    },
    {
      "id": "R02-PNG-16",
      "order": 16,
      "path": "output/playwright/task20-fullstack-evidence/diagram-crops/pb-032-tablet-dark-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-fullstack-direct.png",
      "sha256": "f319be16d88525f356ef50e92d6b64fed76c00f9d6be25b753023d5834403bc0",
      "width": 560,
      "height": 1173,
      "detail": "original"
    },
    {
      "id": "R02-PNG-17",
      "order": 17,
      "path": "output/playwright/task20-fullstack-evidence/diagram-crops/pb-032-mobile-light-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-fullstack-direct.png",
      "sha256": "878d7d198d3b6970524b478dbfb0b670228e464ece1c8d70cb0b3db0451394bf",
      "width": 358,
      "height": 750,
      "detail": "original"
    },
    {
      "id": "R02-PNG-18",
      "order": 18,
      "path": "output/playwright/task20-fullstack-evidence/diagram-crops/pb-032-mobile-dark-task20-pbv06-20260827171151038-1aa7798e-6bc9-4691-a088-3f6696f7293f-fullstack-direct.png",
      "sha256": "e9e47927bb4331444abd889529ccc5e0588c6fe3d758c941700f203a2eb14b59",
      "width": 358,
      "height": 750,
      "detail": "original"
    }
  ],
  "historicalPostDeliveryIntegrity": {
    "imageMapping": true,
    "amendment": true,
    "frozenTextAndSupplement": true,
    "payload": true
  },
  "currentFrozenInputsComparison": "match",
  "reviewerVisualObservationRows": 18,
  "reviewerOriginalVerdict": "BLOCKED",
  "checksFailed": 0,
  "limits": [
    "Controller-local log is not a server-signed attestation.",
    "Original reviewer visually read images; this evidence audit does not repeat image review.",
    "Source dates remain historical; no new present-day content claim."
  ]
}
```

## 후속 확인의 수용 기준

증거 검토자는 공통 계약·이미지 개정·최초 응답 전체·이 증거 및 검사 코드·기존 실행기 전체를 읽고 B01을 RESOLVED/NOT RESOLVED로 판정합니다. 새 검토는 원래 reviewer와 다른 fresh 세션임을 명시하고, 내용 점수·Minor3·최초 BLOCKED를 소급 변경하지 않습니다. Critical/Important0과 좁은 증거 연결의 PASS를 R02 완료와 구분하며 Minor 재판정·필요한 같은 reviewer 후속 검토·최종 상태 반영은 별도입니다.
