import {createHash} from 'node:crypto';
import {r09PreCloseoutBytes} from './r09-closeout.mjs';
const sha=b=>createHash('sha256').update(b).digest('hex');
export const r09FixTransitions=[
  {
    "path": "src/content/docs/10-deployment-operations/build-deploy-domain-dns.md",
    "before": "deee3e29011300ab35ac4107c08b7f45a1e8d8375dcce3af6184496ac12f7f84",
    "after": "7aa5415bf0701c5e209d1996c736a1f9bf57c9d137433b780f397ed40f1a9f39",
    "replacements": [
      [
        "“풀스택을 배포한다”는 이유만으로 서버를 추가하지 않습니다. 사용자별 상태, 비밀 연산, 동적 권한과 서버 책임이 실제 요구일 때 추가합니다.\n\n:::note[현재 호스팅 예시는 책임 판정 뒤에 읽습니다]\n정적 파일 전달만 필요한지, 요청마다 서버 코드를 실행하고 외부 상태를 다뤄야 하는지 먼저 판정하세요. 2026-08-13에 확인한 Vercel·Codex Sites의 빌드·런타임·호스팅 경계와 일반화 금지선은 [현재 도구 매핑](../../reference/current-tool-mapping/)에 따로 정리했습니다.\n:::\n\n## 개발 사례: 모임 참가 웹앱",
        "“풀스택을 배포한다”는 이유만으로 서버를 추가하지 않습니다. 사용자별 상태, 비밀 연산, 동적 권한과 서버 책임이 실제 요구일 때 추가합니다.\n\n:::note[현재 호스팅 예시는 책임 판정 뒤에 읽습니다]\n정적 파일 전달만 필요한지, 요청마다 서버 코드를 실행하고 외부 상태를 다뤄야 하는지 먼저 판정하세요. 제품별 마지막 확인일·재확인 실패·명칭·적용 한계는 [현재 도구 매핑](../../reference/current-tool-mapping/)에서 확인합니다. 이 참고편은 2026-08-20 확인 당시 Vercel 재확인 실패를 `not-confirmed`로 남기고, 당시 Sites – ChatGPT의 public beta 조건을 구분합니다. 과거 Codex Sites 명칭이나 날짜가 붙은 설명을 현재 기능·계정 사용 가능성의 확인으로 재사용하지 않습니다.\n:::\n\n## 개발 사례: 모임 참가 웹앱"
      ],
      [
        "| 호스팅·DNS·HTTPS | 실제 공개 주소가 의도한 배포를 가리키고 올바른 응답을 제공함 | DNS 응답·인증서·실제 URL 응답 |\n| 사용자 흐름 | 공개 조회·로그인·참가·취소·정원 충돌이 의도한 계약대로 동작함 | 승인된 smoke 결과·권한 있는 데이터 재조회·비밀과 개인정보를 제외한 안전한 로그 |\n\n여기서 smoke 흐름과 정원 충돌 확인은 실제 운영 성공 기록이 아니라, 별도 배포 승인을 받은 뒤 격리된 가상 계정·데이터와 합의된 영향 범위에서 수행할 검증 계약입니다. 승인 전에는 설정의 정적 검토와 로컬 빌드까지만 증거로 삼고 실제 공개 URL·운영 계정·데이터·비밀을 만들거나 확인했다고 주장하지 않습니다. 구체적인 배포 제품 선택과 현재 도구 매핑은 후속 범위에서 별도로 다룹니다.\n\n## 이 저장소의 GitHub Pages 사례",
        "| 호스팅·DNS·HTTPS | 실제 공개 주소가 의도한 배포를 가리키고 올바른 응답을 제공함 | DNS 응답·인증서·실제 URL 응답 |\n| 사용자 흐름 | 공개 조회·로그인·참가·취소·정원 충돌이 의도한 계약대로 동작함 | 승인된 smoke 결과·권한 있는 데이터 재조회·비밀과 개인정보를 제외한 안전한 로그 |\n\n여기서 smoke 흐름과 정원 충돌 확인은 실제 운영 성공 기록이 아니라, 격리된 가상 계정·데이터와 합의된 영향 범위에서 수행할 검증 계약입니다. 새 배포와 참가·취소처럼 상태를 바꾸는 검증에는 각각 해당 변경 승인이 필요합니다. 기존 환경의 읽기 검증은 별도로 허용된 접근 범위에서만 수행하며 배포 승인과 같은 권한으로 취급하지 않습니다. 이 저장소에서는 승인된 설정의 정적 검토와 로컬 빌드 증거만 사용하고 실제 공개 URL·운영 계정·데이터·비밀을 만들거나 확인했다고 주장하지 않습니다. 구체적인 배포 제품 선택은 별도 범위입니다.\n\n## 이 저장소의 GitHub Pages 사례"
      ],
      [
        "https://account-name.github.io/project-name/\n```\n\n`/logo.svg` 같은 루트 기준 경로와 `/handbook/logo.svg` 같은 프로젝트 기준 경로가 다릅니다. 설정이 틀리면 HTML은 열려도 CSS·이미지·검색·이전·다음 링크가 404가 될 수 있습니다.\n\n이 저장소는 로컬 기본 빌드와 가상의 GitHub Pages 하위 경로 빌드를 검증했지만 실제 원격 저장소·CI·Pages URL은 아직 없습니다. 따라서 배포 설정이 존재하고 로컬 아티팩트가 생성된다는 사실만 확인됐으며 실제 공개 배포 성공을 주장하지 않습니다.",
        "https://account-name.github.io/project-name/\n```\n\n이 예시의 base는 `/project-name/`입니다. `/logo.svg` 같은 루트 기준 경로와 `/project-name/logo.svg` 같은 프로젝트 기준 경로가 다릅니다. 설정이 틀리면 HTML은 열려도 CSS·이미지·검색·이전·다음 링크가 404가 될 수 있습니다.\n\n이 저장소는 로컬 기본 빌드와 가상의 GitHub Pages 하위 경로 빌드를 검증했지만 실제 원격 저장소·CI·Pages URL은 아직 없습니다. 따라서 배포 설정이 존재하고 로컬 아티팩트가 생성된다는 사실만 확인됐으며 실제 공개 배포 성공을 주장하지 않습니다."
      ],
      [
        "\n### 자주 보는 DNS 개념\n\n- **nameserver**: 도메인의 권위 있는 DNS 정보를 제공하도록 위임된 서버입니다.\n- **record**: 이름에 연결된 IP 주소·별칭·메일 처리 정보 같은 값을 표현합니다.\n- **A·AAAA record**: 이름을 IPv4·IPv6 주소와 연결하는 데 사용됩니다.\n- **CNAME record**: 한 호스트 이름을 다른 호스트 이름의 별칭으로 연결하는 데 사용됩니다.",
        "\n### 자주 보는 DNS 개념\n\n- **권위 있는 네임서버(authoritative nameserver)**: 자신이 담당하는 DNS 관리 구역인 zone의 정보를 제공하는 서버입니다. 다른 서버를 조회해 답을 찾는 재귀 resolver와 역할을 구분합니다.\n- **record**: 이름에 연결된 IP 주소·별칭·메일 처리 정보 같은 값을 표현합니다.\n- **A·AAAA record**: 이름을 IPv4·IPv6 주소와 연결하는 데 사용됩니다.\n- **CNAME record**: 한 호스트 이름을 다른 호스트 이름의 별칭으로 연결하는 데 사용됩니다."
      ],
      [
        "\n## AI의 배포 보고를 검증하는 읽기 전용 지시\n\n```text\n배포 관련 파일과 최근 결과를 읽고 수정 없이 점검하라.\n\n다음을 서로 다른 상태로 구분하라.\n- 소스와 검증 완료",
        "\n## AI의 배포 보고를 검증하는 읽기 전용 지시\n\n```text wrap\n배포 관련 파일과 최근 결과를 읽고 수정 없이 점검하라.\n새 빌드를 실행하지 말고 기존 빌드 로그·아티팩트를 읽어 확인하라.\n원격 자료는 명시적으로 허용된 대상과 읽기 접근 범위에서만 확인하라.\n\n다음을 서로 다른 상태로 구분하라.\n- 소스와 검증 완료"
      ],
      [
        "배포·DNS·도메인·인증서 설정을 변경하지 마라.\n```\n\n실제 배포가 승인되지 않았다면 설정 파일의 정적 검토와 로컬 빌드까지만 보고하고, 원격 CI·공개 URL·DNS·HTTPS는 미검증으로 남겨야 합니다.\n\n## 흔한 오해와 실패",
        "배포·DNS·도메인·인증서 설정을 변경하지 마라.\n```\n\n새 배포·DNS·도메인·인증서 설정 변경의 승인과 기존 환경을 읽어 검증할 권한은 별개입니다. 배포 권한이 없어도 기존 CI 결과·공개 URL·DNS·HTTPS의 읽기 접근이 허용됐다면 실제로 확인한 대상·시점·결과를 보고할 수 있습니다. 원격 접근 자체가 허용되지 않았다면 기존 로컬 자료만 읽고 해당 원격 항목은 미검증으로 남깁니다. 배포 작업만 성공하고 사용자 검증을 하지 않았다면 배포 성공과 사용자 흐름 미검증을 따로 기록합니다. 어느 경우에도 이 지시가 새 네트워크 접근이나 외부 쓰기의 포괄 승인은 아닙니다. 새 로컬 빌드는 산출물을 만드는 실행이므로 위 읽기 전용 점검과 분리하여 허용된 작업 범위에서 수행합니다.\n\n## 흔한 오해와 실패"
      ],
      [
        "- [로그·모니터링·백업](../logs-monitoring-backup/)\n- [실전 체크리스트](../../reference/checklists/)\n- [RFC 1034: Domain Names—Concepts and Facilities](https://www.rfc-editor.org/rfc/rfc1034.html)\n- [RFC 8499: DNS Terminology](https://www.rfc-editor.org/info/rfc8499/)\n- [RFC 9110: HTTP Semantics](https://www.rfc-editor.org/info/rfc9110/)\n- [Astro의 GitHub Pages 배포 가이드](https://docs.astro.build/en/guides/deploy/github/)\n\nDNS의 기본 개념과 용어를 정의하는 RFC 1034·8499, HTTP·HTTPS URI와 service identity 경계를 정의하는 Standards Track RFC 9110, Astro의 GitHub Pages 배포 가이드를 2026-08-13에 확인했습니다. 초기 DNS 설계 RFC의 오래된 예시 값·특정 전송 세부를 현재 공급자 설정으로 사용하지 않습니다. DNS 레코드 값, 도메인 연결·인증서 방식과 호스팅 서비스 기능은 공급자와 시점에 따라 달라질 수 있으므로 실제 변경 전 대상 제공자의 현재 공식 문서를 다시 확인해야 합니다. 이 원고의 로컬 기록과 workflow 존재는 실제 원격 CI·배포·도메인·공개 URL 성공 증거가 아닙니다.",
        "- [로그·모니터링·백업](../logs-monitoring-backup/)\n- [실전 체크리스트](../../reference/checklists/)\n- [RFC 1034: Domain Names—Concepts and Facilities](https://www.rfc-editor.org/rfc/rfc1034.html)\n- [RFC 9499: DNS Terminology — 현재 용어 기준](https://www.rfc-editor.org/info/rfc9499/)\n- [RFC 8499: DNS Terminology — RFC 9499로 대체된 역사적 참고](https://www.rfc-editor.org/info/rfc8499/)\n- [RFC 9110: HTTP Semantics](https://www.rfc-editor.org/info/rfc9110/)\n- [Astro의 GitHub Pages 배포 가이드](https://docs.astro.build/en/guides/deploy/github/)\n\n2026-08-13에는 RFC 1034·8499, HTTP·HTTPS URI와 service identity 경계를 정의하는 Standards Track RFC 9110, Astro의 GitHub Pages 배포 가이드를 확인했습니다. 이 기록은 당시 확인 이력으로 보존합니다. 2026-11-15에는 RFC 8499가 RFC 9499로 대체된 상태와 후속 용어 문서의 TTL·recursive resolver·authoritative server 범위를 다시 확인했습니다. 현재 DNS 용어는 RFC 9499에 연결하며 TTL을 모든 사용자의 캐시가 동시에 갱신된다는 보장으로 해석하지 않습니다. RFC 9110의 HTTPS 경계와 Astro·GitHub Pages의 정적 배포·site/base·환경 변수 관련 공식 본문도 이 날짜에 확인했으나 실제 원격 실행을 검증한 것은 아닙니다.\n\n초기 DNS 설계 RFC의 오래된 예시 값·특정 전송 세부를 현재 공급자 설정으로 사용하지 않습니다. DNS 레코드 값, 도메인 연결·인증서 방식과 호스팅 서비스 기능은 공급자와 시점에 따라 달라질 수 있으므로 실제 변경 전 대상 제공자의 현재 공식 문서를 다시 확인해야 합니다. 이 원고의 로컬 기록과 workflow 존재는 실제 원격 CI·배포·도메인·공개 URL 성공 증거가 아닙니다."
      ]
    ]
  },
  {
    "path": "CONTENT_MAP.md",
    "before": "32cb36b429074685f7ca53531b2376712047b0f70329711f2ff396b74916e20a",
    "after": "d5be7727c354b583aeefa0f3da3f392f672665bcc8aeadf4513f02dd8bf3476e",
    "replacements": [
      [
        "\n| 문서 | 상태 | 본문 문자 수 | 공개 경로 |\n|---|---:|---:|---|\n| [빌드·배포·도메인·DNS](src/content/docs/10-deployment-operations/build-deploy-domain-dns.md) | `draft` | 16,998 | `/10-deployment-operations/build-deploy-domain-dns/` |\n| [환경 변수와 설정](src/content/docs/10-deployment-operations/environment-variables-config.md) | `draft` | 9,885 | `/10-deployment-operations/environment-variables-config/` |\n| [10. 배포와 운영](src/content/docs/10-deployment-operations/index.md) | `draft` | 897 | `/10-deployment-operations/` |\n| [로그·모니터링·백업](src/content/docs/10-deployment-operations/logs-monitoring-backup.md) | `draft` | 19,840 | `/10-deployment-operations/logs-monitoring-backup/` |",
        "\n| 문서 | 상태 | 본문 문자 수 | 공개 경로 |\n|---|---:|---:|---|\n| [빌드·배포·도메인·DNS](src/content/docs/10-deployment-operations/build-deploy-domain-dns.md) | `draft` | 18,070 | `/10-deployment-operations/build-deploy-domain-dns/` |\n| [환경 변수와 설정](src/content/docs/10-deployment-operations/environment-variables-config.md) | `draft` | 9,885 | `/10-deployment-operations/environment-variables-config/` |\n| [10. 배포와 운영](src/content/docs/10-deployment-operations/index.md) | `draft` | 897 | `/10-deployment-operations/` |\n| [로그·모니터링·백업](src/content/docs/10-deployment-operations/logs-monitoring-backup.md) | `draft` | 19,840 | `/10-deployment-operations/logs-monitoring-backup/` |"
      ]
    ]
  },
  {
    "path": "research/source-map.md",
    "before": "6bd6c75395229ece85e8a720d48018ffeb2a303e828c988723eea5440fa89c1f",
    "after": "422b99041e6f60c684908a510417db0cb4e800a62e675b1da057eb5f0344baa0",
    "replacements": [
      [
        "# 출처 지도\n\n2026-11-15 R08 현재 적용 보충: [Git·GitHub 직접 근거](public-beta-review-source-excerpts/r08-git-github-2026-11-15.md)의 공식 reference·Pro Git 세 본문·GitHub PR/Actions 확인을 Git 상태·비교·전송·협업 경계에 적용합니다. status의 untracked 표시 설정, 첫 커밋 전 HEAD 부재, diff HEAD의 순변화, pull의 버전·옵션·설정 차이를 구분하고 로컬 merge와 GitHub PR 병합 및 PR 생성과 push 증거를 분리합니다. 원고의 승인 절차는 Git 내장 조건이 아닌 핸드북 안전 정책입니다. 실제 계정·원격 명령·GitHub UI·배포 실행은 확인하지 않았으며 아래 과거 확인일은 역사로 유지합니다. 원고와 지정 인접 문맥의 수정은 같은 저장 R08 reviewer 후속 PASS C0/I0/M0로 해소했으며 R21 전체 검토를 대체하지 않습니다. review 전이는 R08 controller closeout에 연결하고 ready·공개 승인을 뜻하지 않습니다.\n\n2026-11-15 R07 현재 적용 보충: [새 직접 근거](public-beta-review-source-excerpts/r07-testing-2026-11-15.md)와 [finding 재판정](../docs/project/reviews/public-beta-1/r07-testing-adjudication.md)을 기준으로 테스트 전략의 ISO 귀속을 일반 개념·조직·관리·동적 테스트 및 ISO/IEC 20246 정적 리뷰 연결로 좁혔습니다. manual/automated·scripted/unscripted의 공개 안내 열거는 현재 not-confirmed이며 원고의 해당 귀속을 제거했습니다. 아래 2026-08-13의 edition·stage·열거 확인 기록은 당시 역사로 보존하며 현재 재확인으로 승격하지 않습니다. 분류 자체의 부정이나 유료 표준 전체 미수록 판정은 아닙니다.",
        "# 출처 지도\n\n2026-11-15 R09 현재 적용 보충: [빌드·배포 직접 근거](public-beta-review-source-excerpts/r09-build-deploy-2026-11-15.md)의 공식8URL 관련 본문을 확인했습니다. RFC8499는 RFC9499로 대체됐으며 현재 DNS 용어의 TTL·recursive resolver·authoritative server 범위는 후속 문서에 연결합니다. RFC1034·9110의 기본 이름/HTTPS 경계, Astro·GitHub Pages의 site/base·정적 artifact·workflow·환경 변수 범위를 확인했지만 실제 CI·배포·DNS·TLS·공개 URL 성공은 주장하지 않습니다. 아래8월13일 RFC8499 확인과 제품 표의 과거 날짜·실패는 역사로 유지합니다. Action 예제 버전 차이는 최신 릴리스·교체 필요의 근거로 쓰지 않으며 Vercel·Sites는 이번 현재 기능 확인 대상이 아닙니다. R09 수정과 감사 정정은 같은 저장 reviewer 후속 확인 대기입니다.\n\n2026-11-15 R08 현재 적용 보충: [Git·GitHub 직접 근거](public-beta-review-source-excerpts/r08-git-github-2026-11-15.md)의 공식 reference·Pro Git 세 본문·GitHub PR/Actions 확인을 Git 상태·비교·전송·협업 경계에 적용합니다. status의 untracked 표시 설정, 첫 커밋 전 HEAD 부재, diff HEAD의 순변화, pull의 버전·옵션·설정 차이를 구분하고 로컬 merge와 GitHub PR 병합 및 PR 생성과 push 증거를 분리합니다. 원고의 승인 절차는 Git 내장 조건이 아닌 핸드북 안전 정책입니다. 실제 계정·원격 명령·GitHub UI·배포 실행은 확인하지 않았으며 아래 과거 확인일은 역사로 유지합니다. 원고와 지정 인접 문맥의 수정은 같은 저장 R08 reviewer 후속 PASS C0/I0/M0로 해소했으며 R21 전체 검토를 대체하지 않습니다. review 전이는 R08 controller closeout에 연결하고 ready·공개 승인을 뜻하지 않습니다.\n\n2026-11-15 R07 현재 적용 보충: [새 직접 근거](public-beta-review-source-excerpts/r07-testing-2026-11-15.md)와 [finding 재판정](../docs/project/reviews/public-beta-1/r07-testing-adjudication.md)을 기준으로 테스트 전략의 ISO 귀속을 일반 개념·조직·관리·동적 테스트 및 ISO/IEC 20246 정적 리뷰 연결로 좁혔습니다. manual/automated·scripted/unscripted의 공개 안내 열거는 현재 not-confirmed이며 원고의 해당 귀속을 제거했습니다. 아래 2026-08-13의 edition·stage·열거 확인 기록은 당시 역사로 보존하며 현재 재확인으로 승격하지 않습니다. 분류 자체의 부정이나 유료 표준 전체 미수록 판정은 아닙니다."
      ]
    ]
  },
  {
    "path": "docs/project/public-beta-visual-audit.md",
    "before": "4dc0b46dbef32d69fc9b4b6442622cf762a65c165213e155f8fc9fd6cfa15f77",
    "after": "bc9c50c5bc927942fc2ee03b74c561d134d3eb4c214f564beb00729f502600d2",
    "replacements": [
      [
        "# 공개 베타 학습 다이어그램 감사\n\n## 감사 계약\n\n- 기준일: 2026-08-30",
        "# 공개 베타 학습 다이어그램 감사\n\n2026-11-15 R09 현재 적용 정정: 아래 PBV-05의 과거 “점선 이름 조회 사용자→DNS→호스팅” 서술은 실제 그림과 다른 감사 문장입니다. 현재 SVG·Mermaid·원본PNG18의 관계는 실선 `S→B→A→H→U`(소스→빌드→아티팩트→호스팅→사용자)4개와 점선 `D→U`(도메인·DNS→사용자 브라우저: 이름 조회 결과)1개입니다. 콘텐츠 응답은 `H→U` 실선이며 DNS는 콘텐츠를 운반하지 않습니다. 과거 서술은 역사로 남기고 현재 의미 판정에는 이 정정을 적용합니다. 올바른 그림·원본PNG는 변경하지 않았으며 R09-A-I01의 같은 reviewer 후속 확인은 대기입니다.\n\n## 감사 계약\n\n- 기준일: 2026-08-30"
      ]
    ]
  }
];
export function r09PreFixBytes(path,bytes){
 bytes=r09PreCloseoutBytes(path,bytes);
 const e=r09FixTransitions.find(x=>x.path===path);if(!e||sha(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R09 reversal not unique');text=text.replace(after,before);}
 if(sha(text)!==e.before)throw Error('R09 historical bytes mismatch');return Buffer.from(text);
}
export function validateR09Current(read){const errors=[];for(const e of r09FixTransitions){try{if(sha(r09PreCloseoutBytes(e.path,read(e.path)))!==e.after)errors.push('R09 current patch mismatch: '+e.path)}catch{errors.push('R09 current patch missing: '+e.path)}}return errors;}
