import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const repository = process.env.GITHUB_REPOSITORY;
const site = process.env.PUBLIC_SITE_URL;
const base = process.env.PUBLIC_BASE_PATH;
const repositoryUrl = repository ? `https://github.com/${repository}` : undefined;

export default defineConfig({
  ...(site ? { site } : {}),
  ...(base ? { base } : {}),
  integrations: [
    starlight({
      title: '바이브 개발 핸드북',
      description: '비개발자가 AI와 함께 소프트웨어를 설계·검증·배포하기 위해 알아야 할 개발 지식',
      favicon: '/favicon.svg',
      locales: {
        root: {
          label: '한국어',
          lang: 'ko',
        },
      },
      lastUpdated: true,
      pagefind: true,
      customCss: ['./src/styles/custom.css'],
      components: {
        PageTitle: './src/components/PageTitle.astro',
      },
      sidebar: [
        { label: '시작하기', items: [{ autogenerate: { directory: 'start-here' } }] },
        { label: '1. 개발자 사고와 소프트웨어', items: [{ autogenerate: { directory: '01-mental-models' } }] },
        { label: '2. 작업 환경', items: [{ autogenerate: { directory: '02-work-environment' } }] },
        { label: '3. 풀스택 구조', items: [{ autogenerate: { directory: '03-full-stack' } }] },
        { label: '4. 백엔드와 데이터', items: [{ autogenerate: { directory: '04-backend-data' } }] },
        { label: '5. 프런트엔드', items: [{ autogenerate: { directory: '05-frontend' } }] },
        { label: '6. 요구사항과 설계', items: [{ autogenerate: { directory: '06-requirements-design' } }] },
        { label: '7. 개발 절차와 협업', items: [{ autogenerate: { directory: '07-workflow-methods' } }] },
        { label: '8. 품질과 안전', items: [{ autogenerate: { directory: '08-quality' } }] },
        { label: '9. Git과 GitHub', items: [{ autogenerate: { directory: '09-git-github' } }] },
        { label: '10. 배포와 운영', items: [{ autogenerate: { directory: '10-deployment-operations' } }] },
        { label: '11. AI 네이티브 개발', items: [{ autogenerate: { directory: '11-ai-native' } }] },
        { label: '12. 사례와 캡스톤', items: [{ autogenerate: { directory: '12-case-studies' } }] },
        { label: '용어·체크리스트', items: [{ autogenerate: { directory: 'reference' } }] },
      ],
      ...(repositoryUrl
        ? {
            social: [{ icon: 'github', label: 'GitHub', href: repositoryUrl }],
            editLink: { baseUrl: `${repositoryUrl}/edit/main/` },
          }
        : {}),
    }),
  ],
});
