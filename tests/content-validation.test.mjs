import assert from 'node:assert/strict';
import test from 'node:test';

import {
  parseFrontmatter,
  updateContentMapInventory,
  validateContentMapInventory,
  validateContentText,
  validateReviewEvidencePaths,
} from '../scripts/content-validation.mjs';

const REQUIRED_READY_EVIDENCE = [
  'independent: docs/project/reviews/independent.md#summary',
  'adjudication: docs/project/reviews/adjudication.md#summary',
  'conformance: docs/project/reviews/conformance.md#summary',
  'sources: docs/project/reviews/sources.md#summary',
  'automated: npm run check, 2026-08-12',
  'browser: docs/project/reviews/browser.md#summary',
  'owner: docs/project/reviews/owner.md#approval',
];

const READY_EVIDENCE_REMOVAL_CASES = [
  {
    prefix: 'independent:',
    error: "ready.md: ready 문서는 reviewEvidence에 'independent:' 증거가 필요합니다.",
  },
  {
    prefix: 'adjudication:',
    error: "ready.md: ready 문서는 reviewEvidence에 'adjudication:' 증거가 필요합니다.",
  },
  {
    prefix: 'conformance:',
    error: "ready.md: ready 문서는 reviewEvidence에 'conformance:' 증거가 필요합니다.",
  },
  {
    prefix: 'sources:',
    error: "ready.md: ready 문서는 reviewEvidence에 'sources:' 증거가 필요합니다.",
  },
  {
    prefix: 'automated:',
    error: "ready.md: ready 문서는 reviewEvidence에 'automated:' 증거가 필요합니다.",
  },
  {
    prefix: 'browser:',
    error: "ready.md: ready 문서는 reviewEvidence에 'browser:' 증거가 필요합니다.",
  },
  {
    prefix: 'owner:',
    error: "ready.md: ready 문서는 reviewEvidence에 'owner:' 증거가 필요합니다.",
  },
];

const LONG_READY_BODY = '이 문서는 핵심 개념과 판단 기준, 대표 실패 모드, 확인 방법을 연결해 독자가 실제 작업에서 검증할 수 있도록 설명합니다. '.repeat(12);

function readyDocument({ reviewEvidence = REQUIRED_READY_EVIDENCE, body = LONG_READY_BODY } = {}) {
  return `---
title: 출판 준비 장
description: 출판 준비 상태의 증거 계약을 확인합니다.
contentStatus: ready
audience: [비개발자]
learningObjectives: [출판 준비 상태의 증거를 확인한다]
reviewEvidence:
${reviewEvidence.map((item) => `  - "${item}"`).join('\n')}
---

${body}
`;
}

test('parseFrontmatter는 스칼라와 목록형 메타데이터를 읽는다', () => {
  const source = `---
title: 개발은 시스템을 만드는 일입니다
description: 코드가 아니라 시스템 관점에서 개발을 이해합니다.
contentStatus: draft
audience:
  - 비개발자
  - 데이터 분석가
learningObjectives:
  - 소프트웨어를 구성요소와 관계로 설명한다
  - 입력과 출력의 흐름을 추적한다
---

# 본문
`;

  const result = parseFrontmatter(source);

  assert.equal(result.data.title, '개발은 시스템을 만드는 일입니다');
  assert.deepEqual(result.data.audience, ['비개발자', '데이터 분석가']);
  assert.deepEqual(result.data.learningObjectives, [
    '소프트웨어를 구성요소와 관계로 설명한다',
    '입력과 출력의 흐름을 추적한다',
  ]);
  assert.match(result.body, /# 본문/);
});

test('필수 메타데이터와 학습 목표가 있으면 유효하다', () => {
  const source = `---
title: Git과 GitHub는 다릅니다
description: Git의 버전 관리와 GitHub의 협업 역할을 구분합니다.
contentStatus: seed
audience: [비개발자, 데이터 분석가]
learningObjectives: [Git과 GitHub의 차이를 설명한다]
---

## 핵심 개념

Git은 변경 이력 관리 도구이고 GitHub는 저장소 협업 서비스입니다.
`;

  assert.deepEqual(validateContentText(source, 'sample.md'), []);
});

test('필수 메타데이터가 빠지면 구체적인 오류를 반환한다', () => {
  const source = `---
title: 제목만 있는 문서
contentStatus: unknown
---

TODO: 나중에 작성
`;

  const errors = validateContentText(source, 'broken.md');

  assert.ok(errors.some((error) => error.includes('description')));
  assert.ok(errors.some((error) => error.includes('audience')));
  assert.ok(errors.some((error) => error.includes('learningObjectives')));
  assert.ok(errors.some((error) => error.includes('contentStatus')));
  assert.ok(errors.some((error) => error.includes('TODO')));
});

test('대체 텍스트가 없는 이미지는 접근성 오류로 처리한다', () => {
  const source = `---
title: 요청과 응답 흐름
description: 브라우저와 서버 사이의 요청 및 응답 흐름을 살펴봅니다.
contentStatus: draft
audience: [비개발자]
learningObjectives: [요청과 응답을 구분한다]
---

![](../../../assets/diagrams/request-response.svg)
`;

  const errors = validateContentText(source, 'image.md');
  assert.ok(errors.some((error) => error.includes('대체 텍스트')));
});

test('본문 H1은 Starlight 페이지 제목과 중복되므로 오류로 처리한다', () => {
  const source = `---
title: 요청과 응답
description: 본문 제목 계층을 확인합니다.
contentStatus: draft
audience: [비개발자]
learningObjectives: [페이지 제목과 본문 제목을 구분한다]
---

# 요청과 응답

## 먼저 결론

본문은 두 번째 수준 제목부터 시작합니다.
`;

  const errors = validateContentText(source, 'duplicate-heading.md');
  assert.ok(errors.some((error) => error.includes('본문 최상위 제목')));
});

test('코드 블록 안의 H1 모양 주석은 본문 제목으로 오인하지 않는다', () => {
  const source = `---
title: 셸 명령 예시
description: 코드 블록 안의 주석을 안전하게 검증합니다.
contentStatus: draft
audience: [비개발자]
learningObjectives: [코드 주석과 문서 제목을 구분한다]
---

## 명령 예시

\`\`\`bash
# 이 줄은 셸 주석입니다
printf 'ok\\n'
\`\`\`
`;

  assert.deepEqual(validateContentText(source, 'shell-example.md'), []);
});

test('영문 병기 굵은 용어 뒤의 한국어 조사는 렌더링 오류로 처리한다', () => {
  const source = `---
title: 클라이언트와 서버
description: 굵은 용어의 Markdown 렌더링을 확인합니다.
contentStatus: draft
audience: [비개발자]
learningObjectives: [클라이언트와 서버를 구분한다]
---

## 한 문장 정의

**클라이언트(client)**는 서버에 요청을 보내는 역할입니다.
`;

  const errors = validateContentText(source, 'bold-korean-particle.md');
  assert.ok(errors.some((error) => error.includes('굵은 용어 뒤의 한국어 조사')));
});

test('코드 블록 안의 영문 병기 굵은 용어 예시는 렌더링 오류로 오인하지 않는다', () => {
  const source = `---
title: Markdown 예시
description: 코드 블록 안의 Markdown 원문을 안전하게 검증합니다.
contentStatus: draft
audience: [비개발자]
learningObjectives: [본문과 코드 예시를 구분한다]
---

## 원문 예시

\`\`\`md
**클라이언트(client)**는 서버에 요청을 보냅니다.
\`\`\`
`;

  assert.deepEqual(validateContentText(source, 'markdown-example.md'), []);
});

test('영문 병기가 굵은 구절 중간에 있으면 한국어 조사를 렌더링 오류로 오인하지 않는다', () => {
  const source = `---
title: 요청과 응답
description: 굵은 구절 안의 영문 병기와 한국어 조사를 구분합니다.
contentStatus: draft
audience: [비개발자]
learningObjectives: [요청과 응답의 교환을 설명한다]
---

## 먼저 결론

웹의 동작은 **요청(request)을 보내고 응답(response)을 받는 교환**으로 이어집니다.
`;

  assert.deepEqual(validateContentText(source, 'bold-phrase.md'), []);
});

test('콘텐츠 지도는 실제 문서의 누락·상태·본문 문자 수를 검증한다', () => {
  const contentMap = `| [첫 장](src/content/docs/first.md) | \`seed\` | 99 | \`/first/\` |\n`;
  const documents = [
    { path: 'src/content/docs/first.md', status: 'draft', bodyLength: 42 },
    { path: 'src/content/docs/second.md', status: 'seed', bodyLength: 10 },
  ];

  const errors = validateContentMapInventory(contentMap, documents);

  assert.ok(errors.some((error) => error.includes("상태는 'draft'")));
  assert.ok(errors.some((error) => error.includes('42자여야')));
  assert.ok(errors.some((error) => error.includes('second.md') && error.includes('없습니다')));
});

test('콘텐츠 지도 갱신은 표 구조를 보존하고 상태·본문 문자 수·집계를 동기화한다', () => {
  const contentMap = `# 콘텐츠 지도

- 총 문서: **1개**
- 상태: \`seed\` 1개

| 문서 | 상태 | 본문 문자 수 | 공개 경로 |
|---|---:|---:|---|
| [첫 장](src/content/docs/first.md) | \`seed\` | 99 | \`/first/\` |
| [둘째 장](src/content/docs/second.md) | \`draft\` | 10 | \`/second/\` |
`;
  const documents = [
    { path: 'src/content/docs/first.md', status: 'draft', bodyLength: 1234 },
    { path: 'src/content/docs/second.md', status: 'review', bodyLength: 42 },
  ];

  const updated = updateContentMapInventory(contentMap, documents);

  assert.match(updated, /- 총 문서: \*\*2개\*\*/);
  assert.match(updated, /- 상태: `draft` 1개, `seed` 0개, `review` 1개, `ready` 0개/);
  assert.match(updated, /\[첫 장\]\(src\/content\/docs\/first\.md\) \| `draft` \| 1,234 \| `\/first\/`/);
  assert.match(updated, /\[둘째 장\]\(src\/content\/docs\/second\.md\) \| `review` \| 42 \| `\/second\/`/);
});

test('review 문서는 독립 검토 요청 증거가 필요하다', () => {
  const source = `---
title: 검토할 장
description: 독립 검토 요청 증거를 확인합니다.
contentStatus: review
audience: [비개발자]
learningObjectives: [검토 상태의 의미를 설명한다]
---

## 본문

처음부터 끝까지 읽을 수 있는 검토용 본문입니다.
`;

  const errors = validateContentText(source, 'review.md');
  assert.ok(errors.some((error) => error.includes("'request:'")));
});

for (const { prefix, error } of READY_EVIDENCE_REMOVAL_CASES) {
  test(`ready 문서에서 ${prefix} 증거를 제거하면 그 접두사 누락 오류를 반환한다`, () => {
    const errors = validateContentText(
      readyDocument({
        reviewEvidence: REQUIRED_READY_EVIDENCE.filter((item) => !item.startsWith(prefix)),
      }),
      'ready.md',
    );

    assert.deepEqual(errors, [error]);
  });
}

test('다이어그램을 참조하는 ready 문서는 visual 증거가 필요하다', () => {
  const errors = validateContentText(
    readyDocument({
      body: `${LONG_READY_BODY}\n\n![요청과 응답 흐름](../../../assets/diagrams/request-response.svg)`,
    }),
    'src/content/docs/03-full-stack/request-response.md',
  );

  assert.deepEqual(errors, [
    "src/content/docs/03-full-stack/request-response.md: ready 문서는 reviewEvidence에 'visual:' 증거가 필요합니다.",
  ]);
});

test('참조형 로컬 학습 다이어그램을 참조하는 ready 문서는 visual 증거가 필요하다', () => {
  const errors = validateContentText(
    readyDocument({
      body: `${LONG_READY_BODY}\n\n![요청과 응답 흐름][full-stack-flow]\n\n[full-stack-flow]: ../../../assets/diagrams/full-stack-flow.svg`,
    }),
    'src/content/docs/03-full-stack/request-response.md',
  );

  assert.deepEqual(errors, [
    "src/content/docs/03-full-stack/request-response.md: ready 문서는 reviewEvidence에 'visual:' 증거가 필요합니다.",
  ]);
});

test('angle-bracket 목적지의 로컬 학습 다이어그램을 참조하는 ready 문서는 visual 증거가 필요하다', () => {
  const errors = validateContentText(
    readyDocument({
      body: `${LONG_READY_BODY}\n\n![요청과 응답 흐름](<../../../assets/diagrams/full-stack-flow.svg>)`,
    }),
    'src/content/docs/03-full-stack/request-response.md',
  );

  assert.deepEqual(errors, [
    "src/content/docs/03-full-stack/request-response.md: ready 문서는 reviewEvidence에 'visual:' 증거가 필요합니다.",
  ]);
});

test('angle-bracket 목적지의 참조형 로컬 학습 다이어그램을 참조하는 ready 문서는 visual 증거가 필요하다', () => {
  const errors = validateContentText(
    readyDocument({
      body: `${LONG_READY_BODY}\n\n![요청과 응답 흐름][full-stack-flow]\n\n[full-stack-flow]: <../../../assets/diagrams/full-stack-flow.svg>`,
    }),
    'src/content/docs/03-full-stack/request-response.md',
  );

  assert.deepEqual(errors, [
    "src/content/docs/03-full-stack/request-response.md: ready 문서는 reviewEvidence에 'visual:' 증거가 필요합니다.",
  ]);
});

test('코드 fence 안의 참조형 로컬 학습 다이어그램 예시는 visual 증거를 요구하지 않는다', () => {
  assert.deepEqual(
    validateContentText(
      readyDocument({
        body: `${LONG_READY_BODY}\n\n\`\`\`md\n![요청과 응답 흐름][full-stack-flow]\n\n[full-stack-flow]: <../../../assets/diagrams/full-stack-flow.svg>\n\`\`\``,
      }),
      'src/content/docs/03-full-stack/request-response.md',
    ),
    [],
  );
});

test('다이어그램이 없는 ready 문서는 visual 증거 없이 통과한다', () => {
  assert.deepEqual(validateContentText(readyDocument(), 'ready.md'), []);
});

test('짧은 공개 index는 다른 ready 증거가 완전하면 500자 미만이어도 통과한다', () => {
  const shortIndexBody = '이 인덱스는 하위 장으로 가는 짧은 길잡이입니다. 자세한 설명은 각 장에서 다룹니다.';

  assert.deepEqual(
    validateContentText(
      readyDocument({ body: shortIndexBody }),
      'src/content/docs/03-full-stack/index.md',
    ),
    [],
  );
});

test('일반 ready 장에는 500자 최소 길이 방어선을 유지한다', () => {
  const errors = validateContentText(
    readyDocument({ body: '이 문서는 아직 너무 짧습니다.' }),
    'src/content/docs/03-full-stack/request-response.md',
  );

  assert.ok(errors.some((error) => error.includes('본문이 지나치게 짧습니다')));
});

test('사람 기술·편집·독자 검토 증거는 선택 항목이지만 파싱한다', async () => {
  const reviewEvidence = [
    ...REQUIRED_READY_EVIDENCE,
    'technical: docs/project/reviews/technical.md#summary',
    'editorial: docs/project/reviews/editorial.md#summary',
    'reader: docs/project/reviews/reader.md#summary',
  ];
  const checkedPaths = [];
  const errors = await validateReviewEvidencePaths(
    reviewEvidence,
    async (target) => {
      checkedPaths.push(target);
      return true;
    },
    'ready.md',
  );

  assert.deepEqual(validateContentText(readyDocument()), []);
  assert.deepEqual(errors, []);
  assert.deepEqual(checkedPaths, [
    'docs/project/reviews/independent.md',
    'docs/project/reviews/adjudication.md',
    'docs/project/reviews/conformance.md',
    'docs/project/reviews/sources.md',
    'docs/project/reviews/browser.md',
    'docs/project/reviews/owner.md',
    'docs/project/reviews/technical.md',
    'docs/project/reviews/editorial.md',
    'docs/project/reviews/reader.md',
  ]);
});

test('reviewEvidence는 존재하는 저장소 경로를 확인하고 외부 URL과 명령은 건너뛴다', async () => {
  const checkedPaths = [];
  const errors = await validateReviewEvidencePaths(
    [
      'request: docs/project/reviews/example.md#request',
      'reader: https://example.com/reviews/123',
      'automated: npm run check, 2026-08-05',
    ],
    async (target) => {
      checkedPaths.push(target);
      return target === 'docs/project/reviews/example.md';
    },
    'sample.md',
  );

  assert.deepEqual(errors, []);
  assert.deepEqual(checkedPaths, ['docs/project/reviews/example.md']);
});

test('reviewEvidence의 저장소 경로가 없으면 구체적인 오류를 반환한다', async () => {
  const errors = await validateReviewEvidencePaths(
    ['technical: docs/project/reviews/missing.md#technical'],
    async () => false,
    'missing-evidence.md',
  );

  assert.ok(errors.some((error) => error.includes('missing.md') && error.includes('존재하지 않습니다')));
});
