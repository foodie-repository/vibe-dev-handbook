import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const EXPECTED_PUBLIC_DOCUMENT_COUNT = 59;
const ALLOWED_LEDGER_STATUSES = new Set(['pending', 'in_progress', 'blocked', 'done', 'optional']);
const LEDGER_START = '<!-- PUBLIC_BETA_LEDGER_START -->';
const LEDGER_END = '<!-- PUBLIC_BETA_LEDGER_END -->';
const INVENTORY_START = '<!-- PUBLIC_BETA_INVENTORY_START -->';
const INVENTORY_END = '<!-- PUBLIC_BETA_INVENTORY_END -->';
const NUMERIC_LITERAL_PATTERN = /^[+-]?(?:\d+|\d+\.\d+|\.\d+)(?:[eE][+-]?\d+)?$/;
const LEDGER_TABLE = {
  name: '공개 베타 원장',
  recordLabel: '원장 ID',
  header: '| ID | 마일스톤 | 점수 | 상태 | 현재 인정 점수 | 완료 증거 또는 다음 게이트 |',
  divider: '|---|---|---:|---|---:|---|',
  headerFirstCell: 'ID',
  columnCount: 6,
};
const INVENTORY_TABLE = {
  name: '공개 베타 인벤토리',
  recordLabel: '인벤토리 경로',
  header: '| 경로 | 현재 상태 | M3 패키지 |',
  divider: '|---|---|---|',
  headerFirstCell: '경로',
  columnCount: 3,
};

function extractMarkedBlock(markdown, startMarker, endMarker, name) {
  const startIndex = markdown.indexOf(startMarker);
  const endIndex = markdown.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
    throw new Error(`${name} 주석 경계를 찾을 수 없습니다.`);
  }

  return markdown.slice(startIndex + startMarker.length, endIndex);
}

function formatIdentifier(value) {
  const normalized = value.trim().replace(/^`|`$/g, '').trim();
  return normalized || '<비어 있음>';
}

function identifierFromLine(line) {
  if (!line.includes('|')) return '<비어 있음>';
  const cells = line.split('|');
  return formatIdentifier(line.startsWith('|') ? (cells[1] ?? '') : (cells[0] ?? ''));
}

function tableError(table, blockLine, identifier, expected, actual) {
  throw new Error(`${table.recordLabel} ${identifier}: marker block ${blockLine}행, 기대 형식 ${expected}, 실제 ${actual}.`);
}

function nextNonEmptyLine(lines, startIndex) {
  for (let index = startIndex; index < lines.length; index += 1) {
    if (lines[index].trim()) return index;
  }
  return -1;
}

function parseTableRows(markdown, table) {
  const rows = [];
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const headerIndex = nextNonEmptyLine(lines, 0);

  if (headerIndex === -1 || lines[headerIndex].trim() !== table.header) {
    tableError(
      table,
      headerIndex + 1,
      '<비어 있음>',
      `header '${table.header}'`,
      headerIndex === -1 ? 'header 없음' : `'${lines[headerIndex].trim()}'`,
    );
  }

  const dividerIndex = nextNonEmptyLine(lines, headerIndex + 1);
  if (dividerIndex === -1 || lines[dividerIndex].trim() !== table.divider) {
    tableError(
      table,
      dividerIndex + 1,
      '<비어 있음>',
      `divider '${table.divider}'`,
      dividerIndex === -1 ? 'divider 없음' : `'${lines[dividerIndex].trim()}'`,
    );
  }

  for (let index = dividerIndex + 1; index < lines.length; index += 1) {
    const line = lines[index].trim();
    if (!line) continue;

    const blockLine = index + 1;
    const identifier = identifierFromLine(line);
    if (!line.startsWith('|') || !line.endsWith('|')) {
      const missingBoundary = !line.startsWith('|') ? "선행 '|' 경계" : "후행 '|' 경계";
      tableError(
        table,
        blockLine,
        identifier,
        `${table.columnCount}개 열을 가진 표 데이터 행의 선행·후행 '|' 경계`,
        `${missingBoundary}가 없습니다`,
      );
    }

    const cells = line.slice(1, -1).split('|').map((cell) => cell.trim());
    if (line === table.header || cells[0] === table.headerFirstCell) {
      tableError(table, blockLine, identifier, 'header가 아닌 표 데이터 행', 'header처럼 보이는 데이터 행');
    }
    if (line === table.divider) {
      tableError(table, blockLine, identifier, 'divider가 아닌 표 데이터 행', '반복된 divider 행');
    }
    if (cells.length !== table.columnCount) {
      tableError(
        table,
        blockLine,
        identifier,
        `${table.columnCount}개 열을 가진 표 데이터 행`,
        `${cells.length}개 열`,
      );
    }

    rows.push({ cells, blockLine, identifier });
  }

  return rows;
}

function fieldError(table, row, identifier, fieldName, expected, actual) {
  throw new Error(`${table.recordLabel} ${identifier}: marker block ${row.blockLine}행, ${fieldName}은 기대값 ${expected}, 실제 ${actual}.`);
}

function requiredValue(table, row, index, fieldName) {
  const value = row.cells[index].trim();
  const identifier = index === 0 ? formatIdentifier(value) : row.identifier;

  if (!value) {
    fieldError(table, row, identifier, fieldName, '비어 있지 않은 값', '<비어 있음>');
  }

  return value;
}

function parseFiniteNumber(table, row, index, fieldName, identifier) {
  const value = row.cells[index].trim();
  if (!value) {
    fieldError(table, row, identifier, fieldName, '유한 숫자 리터럴', '<비어 있음>');
  }

  const number = Number(value);
  if (!NUMERIC_LITERAL_PATTERN.test(value) || !Number.isFinite(number)) {
    fieldError(table, row, identifier, fieldName, '유한 숫자 리터럴', value);
  }

  return number;
}

function formatNumber(value) {
  return String(value);
}

function countValues(values) {
  const counts = new Map();
  for (const value of values) {
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }
  return counts;
}

function sortedValues(values) {
  return [...values].sort((left, right) => left.localeCompare(right));
}

export function parseLedger(markdown) {
  const block = extractMarkedBlock(markdown, LEDGER_START, LEDGER_END, '공개 베타 원장');

  return parseTableRows(block, LEDGER_TABLE).map((row) => {
    const id = requiredValue(LEDGER_TABLE, row, 0, 'ID');
    return {
      id,
      milestone: requiredValue(LEDGER_TABLE, row, 1, '마일스톤'),
      assignedPoints: parseFiniteNumber(LEDGER_TABLE, row, 2, '배정 점수', id),
      status: requiredValue(LEDGER_TABLE, row, 3, '상태'),
      creditedPoints: parseFiniteNumber(LEDGER_TABLE, row, 4, '인정 점수', id),
      evidence: requiredValue(LEDGER_TABLE, row, 5, '완료 증거'),
    };
  });
}

export function parseInventory(markdown) {
  const block = extractMarkedBlock(markdown, INVENTORY_START, INVENTORY_END, '공개 베타 인벤토리');

  return parseTableRows(block, INVENTORY_TABLE).map((row) => {
    const documentPath = requiredValue(INVENTORY_TABLE, row, 0, '경로').replace(/^`|`$/g, '').trim();
    if (!documentPath) {
      fieldError(INVENTORY_TABLE, row, '<비어 있음>', '경로', '비어 있지 않은 값', '<비어 있음>');
    }
    return {
      path: documentPath,
      status: requiredValue(INVENTORY_TABLE, row, 1, '현재 상태'),
      packageId: requiredValue(INVENTORY_TABLE, row, 2, 'M3 패키지'),
    };
  });
}

export function validateLedger(rows) {
  const errors = [];
  const idCounts = countValues(rows.map((row) => row.id));
  let totalAssignedPoints = 0;

  for (const row of rows) {
    const id = row.id || '<비어 있음>';
    if (!Number.isFinite(row.assignedPoints)) {
      errors.push(`원장 ID ${id}: 배정 점수는 기대값 유한 숫자, 실제 ${row.assignedPoints}입니다.`);
      continue;
    }

    totalAssignedPoints += row.assignedPoints;

    if (!Number.isFinite(row.creditedPoints)) {
      errors.push(`원장 ID ${id}: 인정 점수는 기대값 유한 숫자, 실제 ${row.creditedPoints}입니다.`);
    } else if (row.creditedPoints > row.assignedPoints) {
      errors.push(`원장 ID ${id}: 인정 점수는 기대값 배정 점수 ${formatNumber(row.assignedPoints)} 이하, 실제 ${formatNumber(row.creditedPoints)}입니다.`);
    }

    if (!ALLOWED_LEDGER_STATUSES.has(row.status)) {
      errors.push(`원장 ID ${id}: 상태는 기대값 pending, in_progress, blocked, done, optional 중 하나, actual ${row.status}입니다.`);
    }
  }

  for (const [id, count] of idCounts) {
    if (count > 1) {
      errors.push(`원장 ID ${id}: 중복 횟수는 기대값 1회, 실제 ${count}회입니다.`);
    }
  }

  if (totalAssignedPoints !== 100) {
    const ids = rows.map((row) => row.id || '<비어 있음>').join(', ') || '<행 없음>';
    errors.push(`원장 ID ${ids}: 배정 점수 합계는 기대값 100, 실제 ${formatNumber(totalAssignedPoints)}입니다.`);
  }

  return errors;
}

export function validateInventory(rows, publicDocumentPaths) {
  const errors = [];
  const inventoryCounts = countValues(rows.map((row) => row.path));
  const publicDocumentCounts = countValues(publicDocumentPaths);

  if (rows.length !== EXPECTED_PUBLIC_DOCUMENT_COUNT) {
    errors.push(`인벤토리 경로 수: 기대값 ${EXPECTED_PUBLIC_DOCUMENT_COUNT}, 실제 ${rows.length}입니다.`);
  }

  if (publicDocumentPaths.length !== EXPECTED_PUBLIC_DOCUMENT_COUNT) {
    errors.push(`공개 문서 경로 수: 기대값 ${EXPECTED_PUBLIC_DOCUMENT_COUNT}, 실제 ${publicDocumentPaths.length}입니다.`);
  }

  for (const [documentPath, count] of inventoryCounts) {
    if (count > 1) {
      errors.push(`인벤토리 경로 ${documentPath}: 중복 횟수는 기대값 1회, 실제 ${count}회입니다.`);
    }
    if (!publicDocumentCounts.has(documentPath)) {
      errors.push(`인벤토리 경로 ${documentPath}: 기대값 실제 공개 Markdown, 실제 없음입니다.`);
    }
  }

  for (const [documentPath, count] of publicDocumentCounts) {
    if (count > 1) {
      errors.push(`공개 문서 경로 ${documentPath}: 중복 횟수는 기대값 1회, 실제 ${count}회입니다.`);
    }
    if (!inventoryCounts.has(documentPath)) {
      errors.push(`공개 문서 경로 ${documentPath}: 기대값 인벤토리 등록, 실제 없음입니다.`);
    }
  }

  return errors;
}

async function collectPublicDocumentPaths(directory, projectRoot) {
  const entries = await readdir(directory, { withFileTypes: true });
  const paths = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      paths.push(...await collectPublicDocumentPaths(entryPath, projectRoot));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      paths.push(path.relative(projectRoot, entryPath).split(path.sep).join('/'));
    }
  }

  return sortedValues(paths);
}

async function runCli() {
  const scriptPath = fileURLToPath(import.meta.url);
  const projectRoot = path.resolve(path.dirname(scriptPath), '..');
  const planPath = path.join(projectRoot, 'docs', 'superpowers', 'plans', '2026-08-12-public-beta-master-plan.md');
  const publicDocumentsRoot = path.join(projectRoot, 'src', 'content', 'docs');
  const markdown = await readFile(planPath, 'utf8');
  const ledgerRows = parseLedger(markdown);
  const inventoryRows = parseInventory(markdown);
  const publicDocumentPaths = await collectPublicDocumentPaths(publicDocumentsRoot, projectRoot);
  const errors = [
    ...validateLedger(ledgerRows),
    ...validateInventory(inventoryRows, publicDocumentPaths),
  ];

  if (errors.length > 0) {
    for (const error of errors) console.error(error);
    process.exitCode = 1;
    return;
  }

  console.log(`공개 베타 계획 검증 통과: 원장 100점, 공개 문서 ${publicDocumentPaths.length}개, 중복 0개, 누락 0개.`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await runCli();
}
