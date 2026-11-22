import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import test from 'node:test';
import { promisify } from 'node:util';

import {
  parseInventory,
  parseLedger,
  validateInventory,
  validateLedger,
} from '../scripts/validate-public-beta-plan.mjs';

const execFileAsync = promisify(execFile);
const projectRoot = new URL('..', import.meta.url);
const validationScript = new URL('../scripts/validate-public-beta-plan.mjs', import.meta.url);

function ledgerRow({
  id = 'M0-01',
  assignedPoints = 100,
  status = 'done',
  creditedPoints = 100,
} = {}) {
  return { id, milestone: '계획 검증', assignedPoints, status, creditedPoints, evidence: '테스트' };
}

function inventoryRow(path = 'src/content/docs/first.md') {
  return { path, status: 'draft', packageId: 'M3-NAV' };
}

function ledgerMarkdown(dataLines, { header, divider } = {}) {
  return `<!-- PUBLIC_BETA_LEDGER_START -->
${header ?? '| ID | 마일스톤 | 점수 | 상태 | 현재 인정 점수 | 완료 증거 또는 다음 게이트 |'}
${divider ?? '|---|---|---:|---|---:|---|'}
${dataLines.join('\n')}
<!-- PUBLIC_BETA_LEDGER_END -->`;
}

function inventoryMarkdown(dataLines) {
  return `<!-- PUBLIC_BETA_INVENTORY_START -->
| 경로 | 현재 상태 | M3 패키지 |
|---|---|---|
${dataLines.join('\n')}
<!-- PUBLIC_BETA_INVENTORY_END -->`;
}

function validLedgerCells() {
  return ['M0-01', '계획 검증', '100', 'done', '100', '테스트'];
}

function ledgerDataLine(cells) {
  return `| ${cells.join(' | ')} |`;
}

test('주석 경계 파서는 바깥 역사 표를 읽지 않는다', () => {
  const markdown = `| ID | 마일스톤 | 점수 | 상태 | 현재 인정 점수 | 완료 증거 또는 다음 게이트 |
|---|---|---:|---|---:|---|
| H-01 | 잘못된 역사 행 | 3 | unsupported | 4 | 무시 |

<!-- PUBLIC_BETA_LEDGER_START -->
| ID | 마일스톤 | 점수 | 상태 | 현재 인정 점수 | 완료 증거 또는 다음 게이트 |
|---|---|---:|---|---:|---|
| M0-01 | 현재 원장 | 100 | done | 100 | 현재 |
<!-- PUBLIC_BETA_LEDGER_END -->

| 경로 | 현재 상태 | M3 패키지 |
|---|---|---|
| \`src/content/docs/history.md\` | obsolete | M3-HISTORY |

<!-- PUBLIC_BETA_INVENTORY_START -->
| 경로 | 현재 상태 | M3 패키지 |
|---|---|---|
| \`src/content/docs/current.md\` | draft | M3-NAV |
<!-- PUBLIC_BETA_INVENTORY_END -->`;

  assert.deepEqual(parseLedger(markdown), [
    {
      id: 'M0-01',
      milestone: '현재 원장',
      assignedPoints: 100,
      status: 'done',
      creditedPoints: 100,
      evidence: '현재',
    },
  ]);
  assert.deepEqual(parseInventory(markdown), [inventoryRow('src/content/docs/current.md')]);
});

const MALFORMED_LEDGER_ROW_CASES = [
  {
    name: '마지막 파이프 경계가 없는 행',
    line: '| M0-01 | 계획 검증 | 100 | done | 100 | 테스트',
    expected: /원장 ID M0-01.*marker block 4행.*기대 형식.*후행.*\|/,
  },
  {
    name: '선행 파이프 경계가 없는 행',
    line: 'M0-01 | 계획 검증 | 100 | done | 100 | 테스트 |',
    expected: /원장 ID M0-01.*marker block 4행.*기대 형식.*선행.*\|/,
  },
  {
    name: '반복된 header처럼 보이는 데이터 행',
    line: '| ID | 마일스톤 | 점수 | 상태 | 현재 인정 점수 | 완료 증거 또는 다음 게이트 |',
    expected: /원장 ID ID.*marker block 4행.*기대 형식.*header.*데이터 행/i,
  },
  {
    name: '열 수가 맞지 않는 행',
    line: '| M0-01 | 계획 검증 | 100 | done | 100 |',
    expected: /원장 ID M0-01.*marker block 4행.*기대 형식.*6개 열.*실제 5개 열/,
  },
];

for (const { name, line, expected } of MALFORMED_LEDGER_ROW_CASES) {
  test(`원장 marker block은 ${name}을 거부한다`, () => {
    assert.throws(() => parseLedger(ledgerMarkdown([line])), expected);
  });
}

test('원장 marker block은 header와 divider 뒤의 비표 행을 거부한다', () => {
  assert.throws(
    () => parseLedger(ledgerMarkdown(['원장에 섞인 설명 문장', ledgerDataLine(validLedgerCells())])),
    /원장 ID <비어 있음>.*marker block 4행.*기대 형식.*표 데이터 행/,
  );
});

test('원장 marker block은 정확한 header와 divider를 요구한다', () => {
  assert.throws(
    () => parseLedger(ledgerMarkdown([ledgerDataLine(validLedgerCells())], { divider: '|---|---|---|---|---|---|' })),
    /원장 ID <비어 있음>.*marker block 3행.*기대 형식.*divider/,
  );
});

const EMPTY_LEDGER_FIELD_CASES = [
  { index: 0, field: 'ID', expected: /원장 ID <비어 있음>.*ID.*기대값 비어 있지 않은 값.*실제 <비어 있음>/ },
  { index: 1, field: '마일스톤', expected: /원장 ID M0-01.*마일스톤.*기대값 비어 있지 않은 값.*실제 <비어 있음>/ },
  { index: 2, field: '배정 점수', expected: /원장 ID M0-01.*배정 점수.*기대값 유한 숫자.*실제 <비어 있음>/ },
  { index: 3, field: '상태', expected: /원장 ID M0-01.*상태.*기대값 비어 있지 않은 값.*실제 <비어 있음>/ },
  { index: 4, field: '인정 점수', expected: /원장 ID M0-01.*인정 점수.*기대값 유한 숫자.*실제 <비어 있음>/ },
  { index: 5, field: '완료 증거', expected: /원장 ID M0-01.*완료 증거.*기대값 비어 있지 않은 값.*실제 <비어 있음>/ },
];

for (const { index, field, expected } of EMPTY_LEDGER_FIELD_CASES) {
  test(`원장 marker block은 빈 ${field} 값을 거부한다`, () => {
    const cells = validLedgerCells();
    cells[index] = '   ';

    assert.throws(() => parseLedger(ledgerMarkdown([ledgerDataLine(cells)])), expected);
  });
}

test('인벤토리 marker block은 경계가 없는 경로 행을 거부한다', () => {
  assert.throws(
    () => parseInventory(inventoryMarkdown(['src/content/docs/first.md | draft | M3-NAV |'])),
    /인벤토리 경로 src\/content\/docs\/first\.md.*marker block 4행.*기대 형식.*선행.*\|/,
  );
});

test('원장 점수 합이 100이 아니면 기대값과 원장 ID를 보고한다', () => {
  const errors = validateLedger([ledgerRow({ assignedPoints: 99, creditedPoints: 99 })]);

  assert.ok(errors.some((error) => /원장 ID M0-01.*기대값 100.*실제 99/.test(error)));
});

test('인정 점수가 배정 점수를 넘으면 원장 ID와 기대값을 보고한다', () => {
  const errors = validateLedger([ledgerRow({ creditedPoints: 101 })]);

  assert.ok(errors.some((error) => /원장 ID M0-01.*기대값.*100.*실제 101/.test(error)));
});

test('허용하지 않는 원장 상태는 원장 ID와 허용 상태 기대값을 보고한다', () => {
  const errors = validateLedger([ledgerRow({ status: 'archived' })]);

  assert.ok(errors.some((error) => /원장 ID M0-01.*기대값.*pending.*actual.*archived/i.test(error)));
});

test('중복 원장 ID는 중복된 ID와 한 번이라는 기대값을 보고한다', () => {
  const errors = validateLedger([ledgerRow(), ledgerRow()]);

  assert.ok(errors.some((error) => /원장 ID M0-01.*기대값 1회.*실제 2회/.test(error)));
});

test('중복 인벤토리 경로는 경로와 한 번이라는 기대값을 보고한다', () => {
  const rows = [inventoryRow(), inventoryRow()];
  const errors = validateInventory(rows, ['src/content/docs/first.md']);

  assert.ok(errors.some((error) => /인벤토리 경로 src\/content\/docs\/first\.md.*기대값 1회.*실제 2회/.test(error)));
});

test('인벤토리에서 빠진 실제 공개 문서는 경로와 등록 기대값을 보고한다', () => {
  const errors = validateInventory(
    [inventoryRow('src/content/docs/first.md')],
    ['src/content/docs/first.md', 'src/content/docs/second.md'],
  );

  assert.ok(errors.some((error) => /공개 문서 경로 src\/content\/docs\/second\.md.*기대값 인벤토리 등록.*실제 없음/.test(error)));
});

test('실제 목록에 없는 인벤토리 경로는 경로와 실제 파일 기대값을 보고한다', () => {
  const errors = validateInventory(
    [inventoryRow('src/content/docs/first.md'), inventoryRow('src/content/docs/second.md')],
    ['src/content/docs/first.md'],
  );

  assert.ok(errors.some((error) => /인벤토리 경로 src\/content\/docs\/second\.md.*기대값 실제 공개 Markdown.*실제 없음/.test(error)));
});

test('공개 문서 수가 59개와 다르면 현재 개수를 구체적으로 보고한다', () => {
  const paths = Array.from({ length: 58 }, (_, index) => `src/content/docs/${index}.md`);
  const errors = validateInventory(paths.map(inventoryRow), paths);

  assert.ok(errors.some((error) => /공개 문서 경로 수.*기대값 59.*실제 58/.test(error)));
});

test('CLI는 현재 원장과 공개 문서 59개의 중복 및 누락 0개 요약을 출력한다', async () => {
  const { stdout } = await execFileAsync(process.execPath, [validationScript.pathname], {
    cwd: projectRoot.pathname,
  });

  assert.match(stdout, /원장 100점/);
  assert.match(stdout, /공개 문서 59개/);
  assert.match(stdout, /중복 0개/);
  assert.match(stdout, /누락 0개/);
});
