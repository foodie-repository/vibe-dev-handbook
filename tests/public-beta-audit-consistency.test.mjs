import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const contentAuditUrl = new URL('../docs/project/public-beta-content-audit.md', import.meta.url);
const visualAuditUrl = new URL('../docs/project/public-beta-visual-audit.md', import.meta.url);
const TASK_20_AFFECTED_DOCUMENT_IDS = [
  'PB-001',
  'PB-021',
  'PB-025',
  'PB-027',
  'PB-028',
  'PB-032',
  'PB-036',
  'PB-039',
  'PB-044',
  'PB-046',
  'PB-048',
  'PB-050',
  'PB-052',
  'PB-053',
  'PB-054',
];

function parseMarkerTable(markdown, startMarker, endMarker) {
  const start = markdown.indexOf(startMarker);
  const end = markdown.indexOf(endMarker);

  assert.notEqual(start, -1, `시작 marker가 필요합니다: ${startMarker}`);
  assert.notEqual(end, -1, `종료 marker가 필요합니다: ${endMarker}`);
  assert.ok(end > start, `marker 순서가 올바라야 합니다: ${startMarker}`);

  const lines = markdown.slice(start + startMarker.length, end).trim().split('\n');
  assert.ok(lines.length >= 3, 'marker 안에는 header, divider, 데이터 행이 필요합니다');

  const parseRow = (line) => {
    assert.match(line, /^\|.*\|$/, `표 행은 양쪽 파이프 경계를 가져야 합니다: ${line}`);
    return line.slice(1, -1).split('|').map((cell) => cell.trim());
  };
  const headers = parseRow(lines[0]);
  assert.match(lines[1], /^\|(?:\s*:?-{3,}:?\s*\|)+$/, '표에는 header divider가 필요합니다');

  return lines.slice(2).map((line) => {
    const cells = parseRow(line);
    assert.equal(cells.length, headers.length, `표 행의 열 수가 header와 같아야 합니다: ${line}`);
    return Object.fromEntries(headers.map((header, index) => [header, cells[index]]));
  });
}

function parseResolvedVisualFindingIds(markdown) {
  const findingRegister = markdown.slice(markdown.indexOf('## Finding register'));
  return new Set([...findingRegister.matchAll(/^\| (PBVA-\d{3}) \| Important \(resolved\) \|/gm)].map((match) => match[1]));
}

function parseContentAuditSummary(markdown) {
  const summary = markdown.match(/## 집계\n\n\| 구분 \| 집계 \|\n\|---\|---\|\n(?<rows>(?:\|.*\|\n?)+?)(?:\n|$)/);
  assert.ok(summary?.groups?.rows, '콘텐츠 감사의 집계 표가 필요합니다');

  return Object.fromEntries(
    summary.groups.rows.trim().split('\n').map((line) => {
      const cells = line.slice(1, -1).split('|').map((cell) => cell.trim());
      assert.equal(cells.length, 2, `집계 행은 두 열이어야 합니다: ${line}`);
      return cells;
    }),
  );
}

test('현재 콘텐츠 감사는 resolved 시각 finding을 현재 표와 집계에 다시 남기지 않는다', async () => {
  const [contentAudit, visualAudit] = await Promise.all([
    readFile(contentAuditUrl, 'utf8'),
    readFile(visualAuditUrl, 'utf8'),
  ]);
  const contentRows = parseMarkerTable(contentAudit, '<!-- PUBLIC_BETA_CONTENT_AUDIT_START -->', '<!-- PUBLIC_BETA_CONTENT_AUDIT_END -->');
  const visualRows = parseMarkerTable(visualAudit, '<!-- PUBLIC_BETA_VISUAL_AUDIT_START -->', '<!-- PUBLIC_BETA_VISUAL_AUDIT_END -->');
  const resolvedVisualFindingIds = parseResolvedVisualFindingIds(visualAudit);
  const summary = parseContentAuditSummary(contentAudit);

  assert.equal(contentRows.length, 59, '현재 콘텐츠 감사 표는 공개 문서 59개를 유지해야 합니다');
  assert.equal(visualRows.length, 13, '현재 시각 감사 표는 PBV-01부터 PBV-13까지를 유지해야 합니다');
  assert.deepEqual([...resolvedVisualFindingIds].sort(), ['PBVA-001', 'PBVA-002', 'PBVA-003', 'PBVA-004', 'PBVA-005']);

  const residualRows = contentRows.filter((row) => {
    const currentVisualFindingIds = row.VISUAL.match(/PBVA-\d{3}/g) ?? [];
    return currentVisualFindingIds.some((id) => resolvedVisualFindingIds.has(id));
  });
  assert.deepEqual(residualRows.map((row) => row.ID), [], 'resolved PBVA-001~005는 현재 VISUAL 셀에 남아 있으면 안 됩니다');

  const affectedRows = contentRows.filter((row) => TASK_20_AFFECTED_DOCUMENT_IDS.includes(row.ID));
  assert.deepEqual(affectedRows.map((row) => row.ID), TASK_20_AFFECTED_DOCUMENT_IDS, 'Task 20 영향 문서 15개가 모두 현재 표에 있어야 합니다');
  assert.ok(affectedRows.every((row) => row.VISUAL === 'conform'), 'Task 20 영향 문서 15개의 현재 VISUAL은 모두 conform이어야 합니다');

  const statusCounts = Object.groupBy(contentRows, ({ 판정: status }) => status);
  assert.equal((statusCounts.conform ?? []).length, 57, '현재 conform 문서는 57개여야 합니다');
  assert.deepEqual((statusCounts.needs_edit ?? []).map(({ ID }) => ID), ['PB-053', 'PB-058']);
  assert.equal((statusCounts.needs_rewrite ?? []).length, 0, '현재 needs_rewrite 문서는 없어야 합니다');
  assert.equal((statusCounts.merge ?? []).length, 0, '현재 merge 문서는 없어야 합니다');
  assert.equal((statusCounts.remove ?? []).length, 0, '현재 remove 문서는 없어야 합니다');
  assert.equal((statusCounts.historical_only ?? []).length, 0, '현재 historical_only 문서는 없어야 합니다');
  assert.equal(summary['전체 판정'], 'conform 57, needs_edit 2, needs_rewrite 0, merge 0, remove 0, historical_only 0');
  assert.equal(summary['현재 미해결 finding severity'], 'Critical 0, Important 2, Minor 0');

  const pb053 = contentRows.find(({ ID }) => ID === 'PB-053');
  const pb058 = contentRows.find(({ ID }) => ID === 'PB-058');
  assert.match(pb053.SOURCE, /PBCA-011/);
  assert.match(pb058.SOURCE, /PBCA-007/);
});
