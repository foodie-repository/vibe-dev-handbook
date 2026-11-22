const ALLOWED_STATUSES = new Set(['seed', 'draft', 'review', 'ready']);
const REQUIRED_FIELDS = ['title', 'description', 'contentStatus', 'audience', 'learningObjectives'];
const READY_EVIDENCE_PREFIXES = [
  'independent:',
  'adjudication:',
  'conformance:',
  'sources:',
  'automated:',
  'browser:',
  'owner:',
];
const OPTIONAL_EVIDENCE_PREFIXES = ['technical:', 'editorial:', 'reader:'];
const REVIEW_EVIDENCE_ITEM_PATTERN = /^(request|independent|adjudication|conformance|sources|automated|browser|owner|visual|technical|editorial|reader):\s*(.+)$/i;
const LOCAL_EVIDENCE_PATH_PATTERN = /^(?:(?:docs|research|src|tests|scripts|templates)\/[^\s]+|[A-Za-z0-9][A-Za-z0-9._-]*\.(?:md|mdx|json|ya?ml|txt))(?:#[^\s]+)?$/;
const LOCAL_LEARNING_DIAGRAM_TARGET_PATTERN = /^(?:\.\.\/)*assets\/diagrams\/[^\s>]+\.svg(?:[?#][^\s>]*)?$/i;
const INLINE_IMAGE_TARGET_PATTERN = /!\[[^\]\n]*\]\(\s*(?:<([^>\n]+)>|([^\s)\n]+))(?:\s+(?:"[^"]*"|'[^']*'))?\s*\)/g;
const IMAGE_REFERENCE_PATTERN = /!\[([^\]\n]*)\]\[([^\]\n]*)\]/g;
const SHORTCUT_IMAGE_REFERENCE_PATTERN = /!\[([^\]\n]+)\](?![\[(])/g;
const REFERENCE_DEFINITION_PATTERN = /^\s{0,3}\[([^\]\n]+)\]:\s*(?:<([^>\n]+)>|([^\s]+))(?:\s+.*)?$/;

function unquote(value) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseInlineArray(value) {
  const inner = value.trim().slice(1, -1).trim();
  if (!inner) return [];
  return inner.split(',').map((item) => unquote(item)).filter(Boolean);
}

function contentMapRowPattern() {
  return /^\| \[([^\]]+)\]\((src\/content\/docs\/[^)]+)\) \| `([^`]+)` \| ([0-9,]+) \| `(\/[^`]*)` \|$/gm;
}

function formatInteger(value) {
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function hasTopLevelHeadingOutsideFences(body) {
  let activeFence = null;

  for (const line of body.replace(/\r\n/g, '\n').split('\n')) {
    if (activeFence) {
      const closingFence = line.match(/^ {0,3}(`{3,}|~{3,})\s*$/);
      if (
        closingFence &&
        closingFence[1][0] === activeFence.character &&
        closingFence[1].length >= activeFence.length
      ) {
        activeFence = null;
      }
      continue;
    }

    const openingFence = line.match(/^ {0,3}(`{3,}|~{3,})/);
    if (openingFence) {
      activeFence = {
        character: openingFence[1][0],
        length: openingFence[1].length,
      };
      continue;
    }

    if (/^ {0,3}#(?:[ \t]+|$)/.test(line)) return true;
  }

  return false;
}

function hasBoldParentheticalTermFollowedByKoreanOutsideFences(body) {
  let activeFence = null;

  for (const line of body.replace(/\r\n/g, '\n').split('\n')) {
    if (activeFence) {
      const closingFence = line.match(/^ {0,3}(`{3,}|~{3,})\s*$/);
      if (
        closingFence &&
        closingFence[1][0] === activeFence.character &&
        closingFence[1].length >= activeFence.length
      ) {
        activeFence = null;
      }
      continue;
    }

    const openingFence = line.match(/^ {0,3}(`{3,}|~{3,})/);
    if (openingFence) {
      activeFence = {
        character: openingFence[1][0],
        length: openingFence[1].length,
      };
      continue;
    }

    if (/\*\*[^*\n]*\([^)\n]+\)\*\*[가-힣]/.test(line)) return true;
  }

  return false;
}

function normalizeMarkdownReferenceLabel(label) {
  return label.trim().replace(/\s+/g, ' ').toLowerCase();
}

export function hasLearningDiagramReference(body) {
  let activeFence = null;
  const renderedLines = [];

  for (const line of body.replace(/\r\n/g, '\n').split('\n')) {
    if (activeFence) {
      const closingFence = line.match(/^ {0,3}(`{3,}|~{3,})\s*$/);
      if (
        closingFence &&
        closingFence[1][0] === activeFence.character &&
        closingFence[1].length >= activeFence.length
      ) {
        activeFence = null;
      }
      continue;
    }

    const openingFence = line.match(/^ {0,3}(`{3,}|~{3,})/);
    if (openingFence) {
      activeFence = {
        character: openingFence[1][0],
        length: openingFence[1].length,
      };
      continue;
    }

    renderedLines.push(line);
  }

  const localDiagramReferenceLabels = new Set();

  for (const line of renderedLines) {
    const definition = line.match(REFERENCE_DEFINITION_PATTERN);
    if (!definition) continue;

    const target = definition[2] ?? definition[3];
    if (LOCAL_LEARNING_DIAGRAM_TARGET_PATTERN.test(target)) {
      localDiagramReferenceLabels.add(normalizeMarkdownReferenceLabel(definition[1]));
    }
  }

  for (const line of renderedLines) {
    for (const match of line.matchAll(INLINE_IMAGE_TARGET_PATTERN)) {
      const target = match[1] ?? match[2];
      if (LOCAL_LEARNING_DIAGRAM_TARGET_PATTERN.test(target)) return true;
    }

    for (const match of line.matchAll(IMAGE_REFERENCE_PATTERN)) {
      const label = match[2] || match[1];
      if (localDiagramReferenceLabels.has(normalizeMarkdownReferenceLabel(label))) return true;
    }

    for (const match of line.matchAll(SHORTCUT_IMAGE_REFERENCE_PATTERN)) {
      if (localDiagramReferenceLabels.has(normalizeMarkdownReferenceLabel(match[1]))) return true;
    }
  }

  return false;
}

export function parseFrontmatter(source) {
  const normalized = source.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
  if (!normalized.startsWith('---\n')) {
    return { data: {}, body: normalized, hasFrontmatter: false };
  }

  const endIndex = normalized.indexOf('\n---\n', 4);
  if (endIndex === -1) {
    return { data: {}, body: normalized, hasFrontmatter: false };
  }

  const frontmatter = normalized.slice(4, endIndex);
  const body = normalized.slice(endIndex + 5);
  const data = {};
  let activeListKey = null;

  for (const rawLine of frontmatter.split('\n')) {
    const line = rawLine.trimEnd();
    const listMatch = line.match(/^\s+-\s+(.+)$/);
    if (listMatch && activeListKey) {
      data[activeListKey].push(unquote(listMatch[1]));
      continue;
    }

    const keyValueMatch = line.match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/);
    if (!keyValueMatch) continue;

    const [, key, rawValue] = keyValueMatch;
    const value = rawValue.trim();
    activeListKey = null;

    if (!value) {
      data[key] = [];
      activeListKey = key;
    } else if (value.startsWith('[') && value.endsWith(']')) {
      data[key] = parseInlineArray(value);
    } else if (value === 'true' || value === 'false') {
      data[key] = value === 'true';
    } else {
      data[key] = unquote(value);
    }
  }

  return { data, body, hasFrontmatter: true };
}

export function validateContentMapInventory(source, documents, filePath = 'CONTENT_MAP.md') {
  const errors = [];
  const rows = new Map();
  const rowPattern = contentMapRowPattern();

  for (const match of source.matchAll(rowPattern)) {
    const [, , documentPath, status, rawLength] = match;
    if (rows.has(documentPath)) {
      errors.push(`${filePath}: '${documentPath}' 문서가 두 번 기록되어 있습니다.`);
      continue;
    }
    rows.set(documentPath, {
      status,
      bodyLength: Number(rawLength.replaceAll(',', '')),
    });
  }

  for (const document of documents) {
    const row = rows.get(document.path);
    if (!row) {
      errors.push(`${filePath}: '${document.path}' 문서가 콘텐츠 지도에 없습니다.`);
      continue;
    }
    if (row.status !== document.status) {
      errors.push(`${filePath}: '${document.path}' 상태는 '${document.status}'여야 하지만 '${row.status}'로 기록되어 있습니다.`);
    }
    if (row.bodyLength !== document.bodyLength) {
      errors.push(`${filePath}: '${document.path}' 본문 문자 수는 ${document.bodyLength}자여야 하지만 ${row.bodyLength}자로 기록되어 있습니다.`);
    }
  }

  const documentPaths = new Set(documents.map((document) => document.path));
  for (const documentPath of rows.keys()) {
    if (!documentPaths.has(documentPath)) {
      errors.push(`${filePath}: 존재하지 않는 공개 문서 '${documentPath}'가 기록되어 있습니다.`);
    }
  }

  return errors;
}

export function updateContentMapInventory(source, documents) {
  const documentsByPath = new Map(documents.map((document) => [document.path, document]));
  const statusCounts = new Map([...ALLOWED_STATUSES].map((status) => [status, 0]));

  for (const document of documents) {
    statusCounts.set(document.status, (statusCounts.get(document.status) ?? 0) + 1);
  }

  const updatedRows = source.replace(
    contentMapRowPattern(),
    (line, title, documentPath, _status, _rawLength, publicRoute) => {
      const document = documentsByPath.get(documentPath);
      if (!document) return line;
      return `| [${title}](${documentPath}) | \`${document.status}\` | ${formatInteger(document.bodyLength)} | \`${publicRoute}\` |`;
    },
  );

  const statusSummary = ['draft', 'seed', 'review', 'ready']
    .map((status) => `\`${status}\` ${statusCounts.get(status) ?? 0}개`)
    .join(', ');

  return updatedRows
    .replace(/^- 총 문서: \*\*\d+개\*\*$/m, `- 총 문서: **${documents.length}개**`)
    .replace(/^- 상태: .*$/m, `- 상태: ${statusSummary}`);
}

export async function validateReviewEvidencePaths(
  reviewEvidence,
  pathExists,
  filePath = '<memory>',
) {
  if (!Array.isArray(reviewEvidence) || typeof pathExists !== 'function') return [];

  const errors = [];
  const checkedPaths = new Set();

  for (const item of reviewEvidence) {
    const match = String(item).trim().match(REVIEW_EVIDENCE_ITEM_PATTERN);
    if (!match) continue;

    const rawTarget = match[2].trim();
    if (!LOCAL_EVIDENCE_PATH_PATTERN.test(rawTarget)) continue;

    const target = rawTarget.split('#', 1)[0];
    if (checkedPaths.has(target)) continue;
    checkedPaths.add(target);

    if (!(await pathExists(target))) {
      errors.push(`${filePath}: reviewEvidence의 저장소 경로 '${target}'가 존재하지 않습니다.`);
    }
  }

  return errors;
}

export function validateContentText(source, filePath = '<memory>') {
  const errors = [];
  const { data, body, hasFrontmatter } = parseFrontmatter(source);

  if (!hasFrontmatter) {
    return [`${filePath}: YAML frontmatter가 없습니다.`];
  }

  for (const field of REQUIRED_FIELDS) {
    const value = data[field];
    const missing = value === undefined || value === '' || (Array.isArray(value) && value.length === 0);
    if (missing) errors.push(`${filePath}: 필수 필드 '${field}'가 없습니다.`);
  }

  if (data.contentStatus && !ALLOWED_STATUSES.has(data.contentStatus)) {
    errors.push(
      `${filePath}: contentStatus는 seed, draft, review, ready 중 하나여야 합니다.`,
    );
  }

  if (data.audience !== undefined && !Array.isArray(data.audience)) {
    errors.push(`${filePath}: audience는 목록이어야 합니다.`);
  }

  if (data.learningObjectives !== undefined && !Array.isArray(data.learningObjectives)) {
    errors.push(`${filePath}: learningObjectives는 목록이어야 합니다.`);
  }

  if (data.reviewEvidence !== undefined && !Array.isArray(data.reviewEvidence)) {
    errors.push(`${filePath}: reviewEvidence는 목록이어야 합니다.`);
  }

  const reviewEvidence = Array.isArray(data.reviewEvidence) ? data.reviewEvidence : [];
  const hasEvidence = (prefix) => reviewEvidence.some(
    (item) => item.trim().toLowerCase().startsWith(prefix),
  );

  if (data.contentStatus === 'review' && !hasEvidence('request:')) {
    errors.push(`${filePath}: review 문서는 reviewEvidence에 'request:' 검토 요청 기록이 필요합니다.`);
  }

  if (data.contentStatus === 'ready') {
    for (const prefix of READY_EVIDENCE_PREFIXES) {
      if (!hasEvidence(prefix)) {
        errors.push(`${filePath}: ready 문서는 reviewEvidence에 '${prefix}' 증거가 필요합니다.`);
      }
    }

    if (hasLearningDiagramReference(body) && !hasEvidence('visual:')) {
      errors.push(`${filePath}: ready 문서는 reviewEvidence에 'visual:' 증거가 필요합니다.`);
    }
  }

  if (/\b(?:TODO|TBD)\b/i.test(body) || /작성\s*예정/.test(body)) {
    errors.push(`${filePath}: 공개 본문에 TODO, TBD 또는 '작성 예정' 표현이 있습니다.`);
  }

  if (hasTopLevelHeadingOutsideFences(body)) {
    errors.push(`${filePath}: 본문 최상위 제목(H1)은 Starlight 페이지 제목과 중복되므로 사용하지 마세요.`);
  }

  if (hasBoldParentheticalTermFollowedByKoreanOutsideFences(body)) {
    errors.push(`${filePath}: 영문 병기 굵은 용어 뒤의 한국어 조사는 Markdown 별표가 노출될 수 있으므로 콜론형 정의나 문장 구조로 분리하세요.`);
  }

  const emptyAltPattern = /!\[\s*\]\([^\n)]+\)/g;
  if (emptyAltPattern.test(body)) {
    errors.push(`${filePath}: 이미지에 대체 텍스트가 없습니다.`);
  }

  if (data.contentStatus === 'ready' && !/(^|\/)index\.md$/.test(filePath) && body.trim().length < 500) {
    errors.push(`${filePath}: ready 문서는 본문이 지나치게 짧습니다.`);
  }

  return errors;
}
