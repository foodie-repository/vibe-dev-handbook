import {r25PreCloseoutBytes} from './r25-closeout.mjs';
import {createHash} from 'node:crypto';
const sha=b=>createHash('sha256').update(b).digest('hex');
// Only exact R25 candidate bytes (Fix2 title in CONTENT_MAP; Fix1 elsewhere) bridge a historical pin.
export const r25Fix=[
  {
    "path": "CONTENT_MAP.md",
    "before": "910b6e82e60cf8350d76fc755f47016118ce09cf0a8f155e714d2187dda5b2cb",
    "after": "d5e16b90794f4ba2b296bcc5b27aee31285107be57860e865d83171ef44814e2",
    "ranges": [
      {
        "i": 158,
        "n": 1,
        "prev": [
          "| [에이전트 출력 용어집](src/content/docs/reference/agent-output-glossary.md) | `draft` | 10,917 | `/reference/agent-output-glossary/` |"
        ]
      },
      {
        "i": 160,
        "n": 1,
        "prev": [
          "| [현재 도구 매핑: Supabase·Vercel·ChatGPT Sites](src/content/docs/reference/current-tool-mapping.md) | `draft` | 16,887 | `/reference/current-tool-mapping/` |"
        ]
      },
      {
        "i": 163,
        "n": 1,
        "prev": [
          "| [방법론 관계 지도](src/content/docs/reference/methodology-map.md) | `draft` | 17,699 | `/reference/methodology-map/` |"
        ]
      }
    ]
  },
  {
    "path": "docs/project/public-beta-content-audit.md",
    "before": "5b9bbec64eca339ee0b0a3c82be50c262120d6fe493c57e7963f79dc9215a608",
    "after": "102055e29ad4496dda114a4e102f02221099bd0f965099b002bad0364666c2a6",
    "ranges": [
      {
        "i": 2,
        "n": 2,
        "prev": []
      }
    ]
  },
  {
    "path": "research/public-beta-source-gap-register.md",
    "before": "eefe11c1c41b74d3e01fa11dd403426584c4bb18dddbe8c1ca3782e4d05025bd",
    "after": "f813a978a9743b18b29baa2cc6a21a2659851b253961e61ef9720deb1f8d4a84",
    "ranges": [
      {
        "i": 2,
        "n": 2,
        "prev": []
      }
    ]
  },
  {
    "path": "research/source-map.md",
    "before": "d7a4336d9208691a23bb2903e238d1cdebedd1a235b2d7734d3d88d902a224e1",
    "after": "20630d38aac24d897063ed5908ce00f6808a4c291bd7d62b697893480ab9e418",
    "ranges": [
      {
        "i": 2,
        "n": 2,
        "prev": []
      }
    ]
  },
  {
    "path": "src/content/docs/reference/agent-output-glossary.md",
    "before": "5bb3e26016e3a9e2fef51561be22a585aad1874fdc3cfd88f6962d136f79380e",
    "after": "92b4ef91008c2df75e2a3faa1e97c1f6e54162a62e7e9cb2eb87bcfa5f6ec595",
    "ranges": [
      {
        "i": 92,
        "n": 1,
        "prev": [
          "| **test** | 특정 입력·조건에서 기대 동작을 반복 실행해 비교합니다. | DB·파일·네트워크를 실제로 바꾸거나 fixture를 오염시킬 수 있습니다. | 실행된 테스트 수·환경·격리·실패·skipped와 검증하지 않은 범위가 무엇인가요? |"
        ]
      }
    ]
  },
  {
    "path": "src/content/docs/reference/current-tool-mapping.md",
    "before": "c0cf7e7561b1b6f5bbfe0ac659ee72d93d8cce24004f57c26172cd85245d5922",
    "after": "dccee3444d723569ab4cfe54dd900f24c5e954d3dff2e5a1e875d5abb95985e1",
    "ranges": [
      {
        "i": 1,
        "n": 1,
        "prev": [
          "title: \"현재 도구 매핑: Supabase·Vercel·ChatGPT Sites\""
        ]
      },
      {
        "i": 52,
        "n": 1,
        "prev": [
          "Supabase는 관계형 데이터베이스, Auth, RLS, 자동 생성 API, 서버 함수와 운영 기능의 현재 예시로만 사용합니다. 아래 직접 근거는 모두 2026-08-20에 공식 현재 비버전 문서를 열어 확인했으며 페이지 버전은 표시되지 않았습니다."
        ]
      },
      {
        "i": 63,
        "n": 1,
        "prev": [
          "| SUPA-LOG-01 · limited | 운영과 복구 | 서비스별 로그를 조회할 수 있고, 로그 보존 기간과 백엔드는 플랜과 프로젝트 생성 시점 등 조건에 따라 달라질 수 있습니다. | 개인정보·비밀 제외, 요청 상관관계, 보존 조건과 복구 오라클 | [로그](https://supabase.com/docs/guides/monitoring-and-debugging/logs) · checked_at 2026-08-20 · 공식 현재 비버전 문서 | 로그 한 줄이 권위 상태·근본 원인·모든 사용자 영향·복구 성공을 단독 증명하지 않습니다. |"
        ]
      },
      {
        "i": 66,
        "n": 1,
        "prev": [
          "## Vercel: 이번 확인에서 닫지 못한 현재 주장"
        ]
      },
      {
        "i": 85,
        "n": 1,
        "prev": [
          "공식 제품명은 현재 **Sites – ChatGPT**이며 public beta입니다. 공식 안내는 Plus·Pro·Business·Enterprise·Edu와 단계적 rollout, 플랜별 사용량, workspace 관리 같은 조건을 둡니다. 아래 기능을 이 저장소가 실제로 사용할 수 있다는 뜻은 아니며, 계정 접근·프로젝트 생성·설정 변경·배포·공개 URL 확인은 수행하지 않았습니다."
        ]
      },
      {
        "i": 89,
        "n": 1,
        "prev": [
          "| SITES-VERSION-01 · limited | 빌드와 아티팩트 | 저장한 version과 배포가 분리되며 로컬 소스 프로젝트에서는 저장된 version에 Git commit을 연결합니다. | 기준 commit·의존성·빌드 명령·검증 결과와 실제 배포 승인 | [Sites 개발자 문서](https://learn.chatgpt.com/docs/sites) · checked_at 2026-08-20 · 공식 현재 비버전 public beta 문서 | Git commit 연결이 재현 가능한 빌드·의존성 고정·소스 검토·마이그레이션 안전을 증명하지 않습니다. |"
        ]
      },
      {
        "i": 93,
        "n": 2,
        "prev": [
          "| SITES-DOMAIN-01 · limited | 호스팅과 공개 주소 | custom domain은 계정·workspace 조건을 따르며 사용자가 소유한 도메인의 DNS를 바꿀 수 있어야 합니다. 공식 도움말은 launch 시 Enterprise에서는 custom domain을 사용할 수 없다고 설명합니다. | 실제 제공 여부, 도메인 소유·DNS·HTTPS와 공개 응답 검증 | [Sites 개발자 문서](https://learn.chatgpt.com/docs/sites), [Sites 도움말](https://help.openai.com/en/articles/20001339-creating-and-managing-chatgpt-sites) · checked_at 2026-08-20 · 공식 current public beta 안내 | custom domain이 모든 플랜·지역·workspace에서 제공되거나 연결과 HTTPS가 자동 완료된다고 보지 않습니다. |",
          "| SITES-ROLLBACK-01 · not-confirmed | 운영과 복구 | 저장된 version을 나열·검사하고 선택해 배포할 수 있다는 설명은 있지만, 이름 붙은 이전 production rollback·restore와 데이터·환경·외부 상태의 복구 보장은 공개 근거로 닫히지 않았습니다. | 코드·데이터·환경·비밀·외부 서비스별 복구 계약과 실제 복원 시험 | [Sites 개발자 문서](https://learn.chatgpt.com/docs/sites), [Sites 도움말](https://help.openai.com/en/articles/20001339-creating-and-managing-chatgpt-sites) · checked_at 2026-08-20 · 공식 current public beta 안내 | version 재배포 가능성을 운영 롤백·삭제 복구·전체 상태 복원 성공으로 확대하지 않습니다. 도움말은 삭제한 Site를 복원할 수 없다고 설명합니다. |"
        ]
      },
      {
        "i": 100,
        "n": 1,
        "prev": [
          "| 제품별 용어·상태 | 2026-08-20 공식 문서에서 직접 확인한 뜻 | 조건과 사용자 결정 | 직접 근거 | 일반화 금지선 |"
        ]
      },
      {
        "i": 105,
        "n": 1,
        "prev": [
          "| CLAUDE-PLAN-01 · Claude Code `plan` · confirmed | 변경 전에 코드베이스를 탐색하고 변경안을 제안하기 위한 현재 permission mode입니다. 일반 session에서는 plan을 승인하기 전 source edit가 차단되지만, auto mode를 사용할 수 있고 `useAutoModeDuringPlan`이 켜져 있으면 classifier가 planning 중 shell command를 검토해 승인한 명령은 실행합니다. 이 조건이 아니면 built-in read-only set 밖 명령은 사용자 승인을 요청합니다. `bypassPermissions`가 mode cycle에 들어온 session에서는 plan의 edit block이 적용되지 않을 수 있고 시도된 file edit·shell command가 classifier나 prompt 없이 실행될 수 있습니다. | 실제 Claude Code version·host·plan, auto mode availability, `useAutoModeDuringPlan`, `bypassPermissions`가 mode cycle에 있는지, allow·ask·deny rule과 별도 sandbox를 각각 확인합니다. | [Permissions](https://code.claude.com/docs/en/permissions), [Permission modes](https://code.claude.com/docs/en/permission-modes) · checked_at 2026-08-20 · 공식 현재 비버전 문서 | `plan`을 절대적인 no-edit·read-only·무승인 실행 불가·부작용 부재 또는 OS sandbox로 일반화하지 않습니다. Codex의 제품 모드와도 같은 이름의 보장으로 옮기지 않습니다. |"
        ]
      },
      {
        "i": 153,
        "n": 2,
        "prev": [
          "- **Supabase:** 9개 주장 URL을 2026-08-20 직접 열었습니다. 모두 공식 현재 비버전 문서이며 페이지 버전은 표시되지 않았습니다. 기능별 플랜·프로젝트 생성 시점·key 전환 조건은 각 행에 남겼습니다.",
          "- **Vercel:** 8개 공식 URL을 2026-08-20 직접 열지 못했습니다. 오류는 모두 `HTTP 400 Unsupported content-type: text/markdown`이었고, 2026-08-13은 마지막 성공 확인 역사일 뿐 현재 확인일이 아닙니다."
        ]
      }
    ]
  },
  {
    "path": "src/content/docs/reference/methodology-map.md",
    "before": "79bfb8db36b353c6665a5fc2d7e1d73b36d24498da3992cfc3b0cb41ba7a0446",
    "after": "862ae45028a6e7e2360a9ecac1da3a61acb3262790734793defe5bf634ca4cb1",
    "ranges": [
      {
        "i": 115,
        "n": 1,
        "prev": [
          "- **성숙도·출처 상태**: 널리 쓰이는 실무 접근이지만 이 저장소의 2026-08-14 방법론 source cluster에는 BDD 원형 자료의 직접 확인 기록이 아직 없습니다. 따라서 이 정의를 단일 표준이나 완결된 출처 판정으로 사용하지 않습니다."
        ]
      },
      {
        "i": 157,
        "n": 1,
        "prev": [
          "- **성숙도·출처 상태**: 널리 확립된 프레임워크이지만 이 저장소의 2026-08-14 방법론 source cluster에는 현행 Scrum Guide의 직접 확인 기록이 아직 없습니다."
        ]
      },
      {
        "i": 165,
        "n": 1,
        "prev": [
          "- **성숙도·출처 상태**: 널리 쓰이는 흐름 관리 방식이지만 이 저장소의 2026-08-14 방법론 source cluster에는 공식 가이드의 직접 확인 기록이 아직 없습니다."
        ]
      },
      {
        "i": 173,
        "n": 1,
        "prev": [
          "- **성숙도·출처 상태**: 널리 쓰이는 포괄적 실무 표현이지만 단일 보편 표준 정의가 아니며, 이 저장소의 2026-08-14 방법론 source cluster에는 DevOps 원형·기관 정의의 직접 확인 기록이 아직 없습니다."
        ]
      },
      {
        "i": 207,
        "n": 1,
        "prev": [
          "- **성숙도·출처 상태**: 널리 알려진 브랜치 모델이지만 이 저장소의 2026-08-14 방법론 source cluster에는 원형 자료의 직접 확인 기록이 아직 없습니다."
        ]
      },
      {
        "i": 215,
        "n": 1,
        "prev": [
          "- **성숙도·출처 상태**: 널리 쓰이는 통합 방식이지만 이 저장소의 2026-08-14 방법론 source cluster에는 원형·공식 자료의 직접 확인 기록이 아직 없습니다."
        ]
      },
      {
        "i": 324,
        "n": 1,
        "prev": [
          "위 링크의 확인일·문서 상태·직접 적용 범위와 일반화 금지선은 저장소의 `research/source-map.md`에서 관리합니다. PRD·두 SDD·TDD·ADR·SDLC·Agile·CI·continuous delivery·continuous deployment·context·harness·loop는 기존 직접 확인 기록과 연결했습니다. BDD·Scrum·Kanban·DevOps·GitFlow·trunk-based development의 직접 공식·1차 source cluster는 아직 완결되지 않았으므로 이 페이지의 `draft` 상태와 내부 출처 공백을 유지합니다. 이 공백을 검색 요약이나 익숙한 정의로 닫지 않으며, 확인 전에는 단일 표준·보편 절차·성숙도 순서로 일반화하지 않습니다."
        ]
      }
    ]
  }
];
export function r25PreFixBytes(path,bytes){
 bytes=r25PreCloseoutBytes(path,bytes);
 const e=r25Fix.find(e=>e.path===path);if(!e||sha(bytes)!==e.after)return bytes;
 const lines=bytes.toString().split('\n');for(const {i,n,prev} of [...e.ranges].reverse())lines.splice(i,n,...prev);
 const original=Buffer.from(lines.join('\n'));if(sha(original)!==e.before)throw Error('R25 historical restoration mismatch: '+path);return original;
}
export function validateR25Current(read){return r25Fix.filter(e=>sha(r25PreCloseoutBytes(e.path,read(e.path)))!==e.after).map(e=>'R25 candidate mismatch: '+e.path)}
