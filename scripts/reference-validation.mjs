import { access, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const EXTERNAL_TARGET = /^(?:https?:|mailto:|tel:|data:|javascript:)/i;

function removeCode(source) {
  return source
    .replace(/```[\s\S]*?```/g, '')
    .replace(/~~~[\s\S]*?~~~/g, '')
    .replace(/`[^`\n]+`/g, '');
}

function decodeTargetPart(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function parseTarget(rawTarget) {
  const firstToken = rawTarget.trim().replace(/^<|>$/g, '').split(/\s+["']/)[0];
  const fragmentIndex = firstToken.indexOf('#');
  const beforeFragment = fragmentIndex === -1 ? firstToken : firstToken.slice(0, fragmentIndex);
  const rawFragment = fragmentIndex === -1 ? '' : firstToken.slice(fragmentIndex + 1);
  const withoutQuery = beforeFragment.split('?', 1)[0];
  return {
    target: decodeTargetPart(withoutQuery),
    fragment: decodeTargetPart(rawFragment),
  };
}

function collectReferences(source) {
  const text = removeCode(source);
  const references = [];
  const imagePattern = /!\[([^\]]*)\]\(([^)]+)\)/g;
  const linkPattern = /(?<!!)\[([^\]]*)\]\(([^)]+)\)/g;

  for (const match of text.matchAll(imagePattern)) {
    references.push({ kind: 'image', label: match[1], rawTarget: match[2] });
  }
  for (const match of text.matchAll(linkPattern)) {
    references.push({ kind: 'link', label: match[1], rawTarget: match[2] });
  }
  return references;
}

async function exists(candidate) {
  try {
    await access(candidate);
    return true;
  } catch {
    return false;
  }
}

function isInsideRoot(candidate, projectRoot) {
  const relative = path.relative(projectRoot, candidate);
  return relative === '' || (!relative.startsWith(`..${path.sep}`) && relative !== '..' && !path.isAbsolute(relative));
}

async function targetExists(candidate) {
  if (await exists(candidate)) return true;

  const extension = path.extname(candidate);
  const alternatives = extension
    ? []
    : [
        `${candidate}.md`,
        `${candidate}.mdx`,
        path.join(candidate, 'index.md'),
        path.join(candidate, 'index.mdx'),
      ];

  for (const alternative of alternatives) {
    if (await exists(alternative)) return true;
  }
  return false;
}

async function isFile(candidate) {
  try {
    return (await stat(candidate)).isFile();
  } catch {
    return false;
  }
}

async function resolveMarkdownTarget(candidate) {
  const extension = path.extname(candidate).toLowerCase();
  const alternatives = extension
    ? (/^\.mdx?$/.test(extension) ? [candidate] : [])
    : [candidate, `${candidate}.md`, `${candidate}.mdx`, path.join(candidate, 'index.md'), path.join(candidate, 'index.mdx')];

  for (const alternative of alternatives) {
    if (await isFile(alternative)) return alternative;
  }
  return null;
}

function headingText(value) {
  return value
    .replace(/\s+#+\s*$/, '')
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/`+([^`]+)`+/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/\\([\\`*_[\]{}()#+.!~-])/g, '$1')
    .replace(/[*_~]/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function baseHeadingSlug(value) {
  return headingText(value)
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\p{M}\p{Pc}\- ]/gu, '')
    .replace(/ /g, '-');
}

export function collectMarkdownHeadingAnchors(source) {
  const anchors = new Set();
  const occurrences = new Map();
  let activeFence = null;

  for (const line of source.replace(/\r\n/g, '\n').split('\n')) {
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

    const headingMatch = line.match(/^ {0,3}#{1,6}[ \t]+(.+?)\s*$/);
    if (!headingMatch) continue;

    const baseSlug = baseHeadingSlug(headingMatch[1]);
    if (!baseSlug) continue;

    const occurrence = occurrences.get(baseSlug) ?? 0;
    const slug = occurrence === 0 ? baseSlug : `${baseSlug}-${occurrence}`;
    occurrences.set(baseSlug, occurrence + 1);
    anchors.add(slug);
  }

  return anchors;
}

function contentRouteCandidate({ absoluteFile, absoluteRoot, target }) {
  const contentRoot = path.join(absoluteRoot, 'src', 'content', 'docs');
  if (!isInsideRoot(absoluteFile, contentRoot)) return null;

  const relativeSource = path.relative(contentRoot, absoluteFile).split(path.sep).join('/');
  const sourceWithoutExtension = relativeSource.replace(/\.(?:md|mdx)$/i, '');
  const sourceRouteDirectory = path.posix.basename(sourceWithoutExtension) === 'index'
    ? path.posix.dirname(`/${sourceWithoutExtension}`)
    : `/${sourceWithoutExtension}`;
  const targetRoute = path.posix.resolve(sourceRouteDirectory, target);
  return path.join(contentRoot, ...targetRoute.split('/').filter(Boolean));
}

export async function validateMarkdownReferences({ source, filePath, projectRoot }) {
  const errors = [];
  const absoluteFile = path.resolve(filePath);
  const absoluteRoot = path.resolve(projectRoot);
  const displayPath = path.relative(absoluteRoot, absoluteFile) || path.basename(absoluteFile);
  const headingCache = new Map([[absoluteFile, collectMarkdownHeadingAnchors(source)]]);

  for (const reference of collectReferences(source)) {
    if (reference.kind === 'image' && reference.label.trim() === '') {
      errors.push(`${displayPath}: 이미지 '${reference.rawTarget.trim()}'에 대체 텍스트가 없습니다.`);
    }

    const { target, fragment } = parseTarget(reference.rawTarget);
    if (EXTERNAL_TARGET.test(target) || target.startsWith('/')) {
      continue;
    }

    if (!target && !fragment) continue;

    if (!target && fragment && reference.kind === 'link') {
      if (!headingCache.get(absoluteFile).has(fragment)) {
        errors.push(`${displayPath}: 현재 문서에서 앵커 '#${fragment}'를 찾을 수 없습니다.`);
      }
      continue;
    }

    if (!target) continue;

    const fileCandidate = path.resolve(path.dirname(absoluteFile), target);
    const routeCandidate = reference.kind === 'link'
      ? contentRouteCandidate({ absoluteFile, absoluteRoot, target })
      : null;
    const candidates = routeCandidate ? [routeCandidate] : [fileCandidate];

    const safeCandidates = candidates.filter((candidate) => isInsideRoot(candidate, absoluteRoot));
    if (safeCandidates.length === 0) {
      errors.push(`${displayPath}: 프로젝트 밖을 가리키는 로컬 참조 '${target}'가 있습니다.`);
      continue;
    }

    const targetFound = await Promise.all(safeCandidates.map((candidate) => targetExists(candidate)));
    if (!targetFound.some(Boolean)) {
      errors.push(`${displayPath}: 로컬 참조 '${target}'를 찾을 수 없습니다.`);
      continue;
    }

    if (reference.kind === 'link' && fragment) {
      const resolvedTargets = await Promise.all(
        safeCandidates.map((candidate) => resolveMarkdownTarget(candidate)),
      );
      const markdownTarget = resolvedTargets.find(Boolean);
      if (!markdownTarget) continue;

      let anchors = headingCache.get(markdownTarget);
      if (!anchors) {
        anchors = collectMarkdownHeadingAnchors(await readFile(markdownTarget, 'utf8'));
        headingCache.set(markdownTarget, anchors);
      }
      if (!anchors.has(fragment)) {
        errors.push(`${displayPath}: 로컬 참조 '${target}'에서 앵커 '#${fragment}'를 찾을 수 없습니다.`);
      }
    }
  }

  return errors;
}

function elementHasText(source, elementName) {
  const pattern = new RegExp(`<${elementName}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${elementName}>`, 'i');
  const match = source.match(pattern);
  return Boolean(match && match[1].replace(/<[^>]+>/g, '').trim());
}

export function validateSvgAccessibility(source, filePath = '<memory>') {
  const errors = [];

  if (!/<svg(?:\s|>)/i.test(source)) {
    return [`${filePath}: 유효한 SVG 루트 요소를 찾을 수 없습니다.`];
  }
  if (!elementHasText(source, 'title')) {
    errors.push(`${filePath}: 학습 다이어그램 SVG에 title 요소가 없습니다.`);
  }
  if (!elementHasText(source, 'desc')) {
    errors.push(`${filePath}: 학습 다이어그램 SVG에 desc 요소가 없습니다.`);
  }

  return errors;
}
