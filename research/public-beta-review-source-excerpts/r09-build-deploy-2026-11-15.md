# R09 빌드·배포·도메인·DNS 검토용 직접 근거

확인일2026-11-15. RFC Editor, Astro, GitHub의 아래 공식 본문 중 원고 판단에 필요한 절을 읽었습니다. 과거2026-08-04·08-13 확인일은 역사로 보존합니다. 이 문서는 원문 전체 복제나 실제 배포·DNS·TLS·계정 실행 증거가 아닙니다. 원고·설정·그림·PNG는 별도 해시 입력입니다.

## DNS 개념과 현재 용어 문서

- [RFC 1034](https://www.rfc-editor.org/rfc/rfc1034.html)의 2.2~2.4와 3절은 분산 이름 공간·자원 정보, cache, 반복/재귀 조회, name server·resolver의 역할과 계층 이름을 설명합니다. 1987년 예시 주소·당시 운영 관행을 현재 공급자의 설정법으로 사용하지 않습니다. 첫 Tavily 추출은 목차 중심이어서 본문 확인으로 계산하지 않았고 Exa로 관련 본문을 다시 읽었습니다.
- [RFC 8499 상태](https://www.rfc-editor.org/info/rfc8499/)는 이 문서가 RFC 9499로 대체되었음을 표시합니다. 기존 원고의 RFC 8499를 현재 최신 DNS 용어 기준으로 취급하면 안 됩니다. 이전 확인을 소급 삭제하거나 원고를 검토 전에 자동 수정하지 않고 이 차이를 reviewer에게 전달합니다.
- [RFC 9499](https://www.rfc-editor.org/info/rfc9499/)는 2024-03-21 발행된 BCP219 DNS 용어 문서이며 RFC8499를 대체하고 RFC2308을 갱신합니다. 일반 용어의 TTL은 원천 정보를 다시 확인하기 전 RR을 cache할 수 있는 최대 시간을 뜻하고 cache 정책은 더 짧을 수 있습니다. Recursive resolver는 재귀 요청을 처리하며 보통 cache하지만 cache 자체가 정의의 필수 조건은 아닙니다. Iterative resolution은 referral과 alias를 따라갑니다. Authoritative server는 해당 zone의 로컬 지식으로 답하며 위임 응답까지 모두 authoritative answer인 것은 아닙니다. 이 정의를 모든 사용자의 cache가 변경 즉시 일치한다는 보장으로 확대하지 않습니다.

## HTTPS와 HTTP

[RFC 9110](https://www.rfc-editor.org/info/rfc9110/) 4.2의 HTTPS URI와 4.3.4의 HTTPS certificate verification 관련 본문을 확인했습니다. HTTPS는 연결의 기밀성·무결성과 URI origin에 대한 서비스 identity 확인 경계를 갖습니다. DNS에서 주소를 얻는 일과 인증서·신뢰 기준에 따라 연결 상대를 검증하는 일은 다릅니다. 이 근거는 로그인·인가·업무 규칙·저장 데이터·복구의 정확성을 보증하지 않습니다. 실제 도메인 조회나 TLS 연결 시험은 하지 않았습니다.

## Astro 정적 빌드와 GitHub Pages

- [Astro GitHub Pages 배포 가이드](https://docs.astro.build/en/guides/deploy/github/)의 GitHub Actions 배포, site/base 설정, 내부 링크·custom domain 절을 읽었습니다. 정적 사전 렌더링 사이트가 대상이며 project site의 저장소 하위 경로와 user/organization site 또는 custom domain을 구분합니다. site와 base는 실제 게시 위치에 맞춰야 하고 내부 링크에도 base가 영향을 줍니다. 첫 추출의 코드 서식이 불완전해 Exa 본문으로 보충했습니다. sample workflow의 현재 표기는 checkout v7, withastro/action v6, deploy-pages v5입니다. 예제를 실행하거나 최신 릴리스 태그를 따로 조사하지 않았습니다.
- [GitHub Pages 소개](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)의 정적 호스팅 설명과 user/organization·project site 주소 구조를 확인했습니다. 저장소의 HTML·CSS·JavaScript를 게시하는 서비스라는 설명을 임의 서버 런타임·데이터베이스 제공 또는 이 저장소의 배포 완료로 바꾸지 않습니다.
- [GitHub Pages custom workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)의 artifact packaging와 deploy job 절을 확인했습니다. upload-pages-artifact, build job에 대한 needs, pages:write·id-token:write 및 github-pages environment를 설명합니다. 문서의 deploy-pages v4 예시와 Astro의 v5 예시는 서로 다르므로 한 예시만으로 v5 부재·최신 버전·교체 필요를 판정하지 않습니다. 로컬 workflow 선언의 정확한 버전은 별도 원문으로 전달하며 이번 단위에서 Action 버전이나 권한을 변경하지 않습니다.
- [Astro 환경 변수](https://docs.astro.build/en/guides/environment-variables/)의 Vite 기반 build-time 치환, PUBLIC_ client 노출, config에서의 접근, astro:env schema·server 경계를 읽었습니다. .env 값이 config에 자동 로드된다고 가정하지 않고 공개 출력에 포함된 값을 비밀로 취급하지 않습니다. 이 규칙을 다른 프레임워크·호스팅의 보편 규칙으로 확대하지 않습니다.

## 로컬 선언과 실제 실행의 경계

현재 astro.config.mjs와 .github/workflows/deploy.yml을 읽었습니다. 사이트·base는 PUBLIC_SITE_URL·PUBLIC_BASE_PATH로 전달하며 workflow는 main push 또는 수동 실행, build의 검증과 dist artifact upload, build에 의존한 deploy job을 선언합니다. 선언된 checkout/setup-node v7·upload-pages-artifact v4·deploy-pages v5를 그대로 유지합니다. git remote의 이름 출력은 비어 있습니다. 원격 GitHub CI·Pages·공개 URL 성공은 확인하지 않았고 이번 검토의 완료 기준도 아닙니다. 비밀 파일·인증 값은 읽지 않았습니다.

모임 사례 W-05와 관련 원고는 교육용 계약으로만 전달합니다. 환경 변수·운영·CI/CD 인접 장은 R09 문맥이지 해당 행 전체 검토의 완료가 아닙니다. current-tool-mapping의 Vercel·Sites 제품 표와 과거 날짜는 역사적 문맥으로 전달하며 이번에 현재 기능을 재확인한 것으로 계산하지 않습니다. R09의 제품 호출 문구가 이 범위를 넘어서는지 reviewer가 판단해야 합니다.

## 이미지와 감사 기록의 적용 한계

deploy-flow SVG·Mermaid와 대상 원고는 기존 PBV-05 렌더 입력의 세 SHA와 동일합니다. 6상태의 viewport·diagram crop·manuscript context crop 각1개, 합계18개를 원본으로 재사용하며 전체 페이지18개로 부르지 않습니다. Controller가 실제 이미지18개를 읽었고 fresh reviewer에게도 원본 localImage/detail original을 전달합니다. 기존 시각 감사의 DNS 점선 설명과 실제 D→U 선·원고 계약의 대응도 검토 대상으로 남깁니다. 과거 manifest의 pending·Claude blocked는 당시 기록이며 현재 검토를 대신하지 않습니다.
