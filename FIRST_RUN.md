# 첫 실행과 저장소 초기화

## 1. 로컬 준비

```bash
node --version
npm --version
npm ci
```

Node.js 22.12.0 이상을 사용합니다. `npm ci`는 저장소의 `package-lock.json`에 기록된 버전을 그대로 설치합니다. 의존성을 의도적으로 변경할 때만 `npm install`을 실행하고 잠금 파일 diff를 검토합니다.

## 2. 검증

```bash
npm run check
npm run dev
```

## 3. Git 저장소 초기화

```bash
git init
git add .
git commit -m "chore: initialize vibe development handbook"
```

원격 저장소를 만든 뒤 연결합니다. 푸시 전에는 `.gitignore`, `git status`, 비밀정보 포함 여부를 다시 확인합니다.

## 4. GitHub Pages

GitHub 저장소의 **Settings → Pages → Source**에서 GitHub Actions를 선택합니다. `main` 브랜치에 푸시하면 `.github/workflows/deploy.yml`이 사이트를 빌드하고 배포합니다.

저장소 이름이 `<사용자명>.github.io`가 아니면 배포 주소에는 저장소명이 경로로 붙습니다. 맞춤 도메인을 사용할 때는 `public/CNAME`과 Astro의 `site`/`base` 설정을 함께 바꿔야 하므로 `docs/project/deployment-decision.md`를 먼저 확인합니다.
