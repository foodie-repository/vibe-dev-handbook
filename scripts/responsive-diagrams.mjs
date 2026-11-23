// Handbook diagrams are standalone Markdown images in paragraphs.
export function responsiveDiagrams({ base = '/' }) {
  const directory = base.replace(/\/$/, '') + '/diagrams/';
  return (tree) => {
    for (const paragraph of tree.children) {
      if (paragraph.tagName !== 'p') continue;
      for (const [index, image] of paragraph.children.entries()) {
        if (image.tagName !== 'img') continue;
        const match = image.properties.src.match(/\/assets\/diagrams\/([\w-]+)\.svg$/);
        if (!match) continue;
        image.properties.className = ['handbook-diagram'];
        const name = match[1];
        if (!['learning-map', 'git-flow'].includes(name)) continue;
        paragraph.children[index] = {
          type: 'element', tagName: 'picture', properties: {},
          children: [
            {
              type: 'element', tagName: 'source', children: [],
              properties: {
                media: '(min-width: 80rem), (40rem <= width < 50rem)',
                srcSet: directory + name + '-wide.svg',
                width: 800, height: name === 'learning-map' ? 230 : 220,
              },
            },
            image,
          ],
        };
      }
    }
  };
}
