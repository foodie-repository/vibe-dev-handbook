export function validateBuiltHtml(source, filePath = '<memory>', { basePath = '/', pagePath = 'index.html' } = {}) {
  const mainMatch = String(source).match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  if (!mainMatch) {
    return [`${filePath}: 빌드 HTML에서 main 요소를 찾지 못했습니다.`];
  }

  const visibleContent = mainMatch[1]
    .replace(/<pre\b[^>]*>[\s\S]*?<\/pre>/gi, '')
    .replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi, '')
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');

  const errors = [];
  if (visibleContent.includes('**')) {
    errors.push(`${filePath}: 일반 본문에 리터럴 Markdown '**'가 남아 있습니다.`);
  }

  const base = `/${basePath.replace(/^\/+|\/+$/g, '')}/`.replace('//', '/');
  if (base === '/') return errors;

  const pageUrl = new URL(base + pagePath.replace(/index\.html$/, ''), 'https://built.invalid');
  const markup = String(source)
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/(<script\b[^>]*>)[\s\S]*?<\/script>/gi, '$1</script>')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');

  for (const match of markup.matchAll(/<(a|img|script|link)\b(?:[^>"']|"[^"]*"|'[^']*')*>/gi)) {
    const tag = match[1].toLowerCase();
    const attributes = Object.fromEntries(
      [...match[0].matchAll(/\s([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g)]
        .map((attribute) => [attribute[1].toLowerCase(), attribute[2] ?? attribute[3] ?? attribute[4]]),
    );
    if (tag === 'link' && !/(?:^|\s)(?:stylesheet|icon|apple-touch-icon|preload|modulepreload)(?:\s|$)/i.test(attributes.rel ?? '')) continue;

    const value = (attributes[tag === 'a' || tag === 'link' ? 'href' : 'src'] ?? '').trim().replaceAll('&amp;', '&');
    if (!value || /^(?:#|\/\/|[a-z][a-z\d+.-]*:)/i.test(value)) continue;

    const target = new URL(value, pageUrl);
    if (target.origin === pageUrl.origin && !target.pathname.startsWith(base)) {
      errors.push(`${filePath}: ${tag} 경로 '${target.pathname}'가 배포 하위 경로 '${base}'를 벗어납니다.`);
    }
  }

  return errors;
}
