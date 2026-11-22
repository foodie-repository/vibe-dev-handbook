import {r11PreCloseoutBytes} from './r11-closeout.mjs';
import {createHash} from 'node:crypto';
const sha=b=>createHash('sha256').update(b).digest('hex');
export const r11FixTransitions=[
  {
    "path": "src/content/docs/11-ai-native/working-with-coding-agents.md",
    "before": "79947193031874c6f691ca6237de213e27df3aff42ef9349211a40164904c3a9",
    "after": "b4e9e6b2354bbe19faea189931823fdd682f2f9a657187d44cfadd5ca7a3b44c",
    "replacements": [
      [
        "수용 기준:\n- 첫 참가가 성공하고 동일 (event_id, participant_id)의 활성 행은 한 건이다.\n- 중복 참가는 안전하게 거절되고 실패 뒤 업무 데이터는 불변이다.\n- 같은 참가자의 다른 모임 참가에는 영향이 없다.\n\n검증과 증거:\n- 관련 대상 테스트와 전체 테스트를 실행하라.\n- git status와 staged diff로 변경·스테이징 범위를 확인하라.\n- 각 명령의 실행 위치·종료 코드·실행 수·실패 0건을 보고하고, 수용 기준별 테스트와 데이터 오라클을 연결하라.",
        "수용 기준:\n- 첫 참가가 성공하고 동일 (event_id, participant_id)의 활성 행은 한 건이다.\n- 중복 참가는 안전하게 거절되고 실패 뒤 업무 데이터는 불변이다.\n- 같은 가상 참가자의 같은 모임 요청 두 개를 같은 시작 장벽에서 실행하면 한 건만 확정되고 다른 요청은 계약대로 안전하게 거절된다. 최종 활성 행은 한 건이며 실패 요청으로 인한 부분 저장은 없다.\n- 같은 참가자의 다른 모임 참가에는 영향이 없다.\n\n검증과 증거:\n- 가상 fixture와 격리된 데이터 경계에서 순차 중복과 위 동시 요청을 각각 시험하고, 권위 데이터의 최종 활성 행 수와 실패 요청의 부분 저장 0건을 직접 확인하라.\n- 애플리케이션의 사전 조회와 독립적으로 실제 데이터 고유성 보호가 중복 저장을 막는지 검증하라. mock 결과만으로 데이터 경계의 보장을 대신하지 마라.\n- 관련 대상 테스트와 전체 테스트를 실행하라.\n- git status와 staged diff로 변경·스테이징 범위를 확인하라.\n- 각 명령의 실행 위치·종료 코드·실행 수·실패 0건을 보고하고, 수용 기준별 테스트와 데이터 오라클을 연결하라."
      ],
      [
        "- 로컬 commit을 만들었다면 식별자를 보고하고 push와 배포는 미실행 상태로 따로 표시하라.\n```\n\n이 계약은 중복 확인 코드를 한 줄 추가하는 수단이 아니라, 첫 성공·중복 거절·다른 모임 비영향·실패 뒤 데이터 불변이라는 사용자 결과를 애플리케이션과 데이터 경계에서 함께 증명하는 단위입니다. 구체적인 제약이나 트랜잭션 수단은 현재 데이터베이스와 저장소 패턴을 읽은 뒤 선택하고, 특정 구현을 근거 없이 가정하지 않습니다.\n\n### 완료 주장을 별도 증거로 인수하기",
        "- 로컬 commit을 만들었다면 식별자를 보고하고 push와 배포는 미실행 상태로 따로 표시하라.\n```\n\n이 계약은 중복 확인 코드를 한 줄 추가하는 수단이 아니라, 첫 성공·순차 및 동시 중복 거절·다른 모임 비영향·실패 요청의 부분 저장 없음이라는 사용자 결과를 애플리케이션과 데이터 경계에서 함께 증명하는 단위입니다. 같은 참가자의 동시 중복을 다루며, 서로 다른 참가자가 마지막 자리를 경쟁하는 W-04 전체로 범위를 넓히지 않습니다. 구체적인 제약이나 트랜잭션 수단은 현재 데이터베이스와 저장소 패턴을 읽은 뒤 선택하고, 특정 구현을 근거 없이 가정하지 않습니다.\n\n### 완료 주장을 별도 증거로 인수하기"
      ],
      [
        "- 실제 diff에는 허용된 참가 계약·데이터 제약·서비스·테스트·관련 문서 변경만 있으며 무관한 변경과 비목표가 섞이지 않았나요?\n- 대상 테스트와 전체 테스트의 정확한 명령·실행 위치·종료 코드·실행 수·실패 0건을 원문 요약으로 확인했나요?\n- 첫 참가 뒤 동일 `(event_id, participant_id)`의 활성 행이 정확히 한 건이고, 중복 시도 거절 뒤에도 한 건이며 실패 뒤 업무 데이터가 불변이라는 오라클을 직접 조회했나요?\n- 같은 참가자의 다른 모임 참가가 그대로 유지된다는 부정 영향 증거가 있나요?\n- 브라우저 상태를 실제로 확인했다면 URL·시작 상태·행동·응답 뒤 화면 상태와 확인 범위가 있으며, 확인하지 않았다면 미검증으로 표시했나요?\n- 독립 리뷰 finding을 요구·재현·직접 증거로 재판정하고 confirmed defect를 같은 오라클로 다시 검증했으며, 권한 있는 수용자의 결정과 남은 조건을 구분했나요?",
        "- 실제 diff에는 허용된 참가 계약·데이터 제약·서비스·테스트·관련 문서 변경만 있으며 무관한 변경과 비목표가 섞이지 않았나요?\n- 대상 테스트와 전체 테스트의 정확한 명령·실행 위치·종료 코드·실행 수·실패 0건을 원문 요약으로 확인했나요?\n- 첫 참가 뒤 동일 `(event_id, participant_id)`의 활성 행이 정확히 한 건이고, 중복 시도 거절 뒤에도 한 건이며 실패 뒤 업무 데이터가 불변이라는 오라클을 직접 조회했나요?\n- 같은 가상 참가자의 동시 요청 두 개에서 성공 한 건·안전한 거절 한 건·최종 활성 행 한 건·실패 요청의 부분 저장 0건을 확인했나요? 사전 조회와 독립된 실제 데이터 고유성 보호의 검증 증거도 있나요?\n- 같은 참가자의 다른 모임 참가가 그대로 유지된다는 부정 영향 증거가 있나요?\n- 브라우저 상태를 실제로 확인했다면 URL·시작 상태·행동·응답 뒤 화면 상태와 확인 범위가 있으며, 확인하지 않았다면 미검증으로 표시했나요?\n- 독립 리뷰 finding을 요구·재현·직접 증거로 재판정하고 confirmed defect를 같은 오라클로 다시 검증했으며, 권한 있는 수용자의 결정과 남은 조건을 구분했나요?"
      ],
      [
        "\n## 계획은 실행 결과가 아닙니다\n\n계획 모드 또는 `/plan`은 보통 변경 후보와 순서를 검토하기 위한 단계입니다. 에이전트가 파일 목록과 명령을 구체적으로 썼다고 실제 파일이 바뀌거나 테스트가 실행된 것은 아닙니다.\n\n좋은 계획에는 다음이 있어야 합니다.",
        "\n## 계획은 실행 결과가 아닙니다\n\n계획 단계는 변경 후보와 순서를 검토하는 과정입니다. 제품이 제공하는 계획 모드의 이름이나 명령, 읽기·쓰기·네트워크 권한은 제품·버전·실행 환경의 공식 문서와 실제 설정에서 별도로 확인해야 합니다. 에이전트가 파일 목록과 명령을 구체적으로 썼다고 실제 파일이 바뀌거나 테스트가 실행된 것은 아닙니다.\n\n좋은 계획에는 다음이 있어야 합니다."
      ],
      [
        "- **fallback**: 주 경로가 실패했을 때 쓰는 대체 경로입니다. 정확도·기능·데이터 최신성·보안이 낮아지는지 확인합니다.\n- **retry**: 실패한 행동을 다시 실행합니다. 일시 오류인지, 중복 저장·결제·메시지가 생기지 않는지, 중단 조건이 있는지 봅니다.\n- **timeout**: 정한 시간 안에 결과를 받지 못한 상태입니다. 뒤의 작업이 실제로 중지됐는지 알 수 없으므로 무조건 재실행하지 않습니다.\n- **blocked**: 필요한 입력·권한·외부 상태가 없어 진행할 수 있다는 주장입니다. 에이전트가 안전한 읽기·대안·부분 검증을 충분히 했는지 확인합니다.\n- **compaction**: 긴 대화와 도구 출력을 요약해 컨텍스트를 줄이는 과정입니다. 목표·결정 근거·미완성·사용자 변경이 빠지지 않았는지 파일에서 다시 확인합니다.\n- **handoff**: 다음 세션이나 작업자에게 현재 상태를 넘기는 기록입니다. 저장소 상태·검증·미해결 위험·다음 행동이 있어야 합니다.",
        "- **fallback**: 주 경로가 실패했을 때 쓰는 대체 경로입니다. 정확도·기능·데이터 최신성·보안이 낮아지는지 확인합니다.\n- **retry**: 실패한 행동을 다시 실행합니다. 일시 오류인지, 중복 저장·결제·메시지가 생기지 않는지, 중단 조건이 있는지 봅니다.\n- **timeout**: 정한 시간 안에 결과를 받지 못한 상태입니다. 뒤의 작업이 실제로 중지됐는지 알 수 없으므로 무조건 재실행하지 않습니다.\n- **blocked**: 필요한 입력·권한·외부 상태가 없어 현재 범위에서 진행할 수 없다는 주장입니다. 에이전트가 안전한 읽기·대안·부분 검증을 충분히 했는지 확인합니다. 한 작업의 차단을 전체 목표의 중단이나 완료로 확대하지 않습니다.\n- **compaction**: 긴 대화와 도구 출력을 요약해 컨텍스트를 줄이는 과정입니다. 목표·결정 근거·미완성·사용자 변경이 빠지지 않았는지 파일에서 다시 확인합니다.\n- **handoff**: 다음 세션이나 작업자에게 현재 상태를 넘기는 기록입니다. 저장소 상태·검증·미해결 위험·다음 행동이 있어야 합니다."
      ]
    ]
  },
  {
    "path": "CONTENT_MAP.md",
    "before": "20f9f54758ca40ea59ed5f59d8514cc5c9bb71796031c7d7fac36ae094ddd2a0",
    "after": "7f4756a03eceb0bac7a74168e042c588e1865bc4658d2c41636f300d54c4950c",
    "replacements": [
      [
        "| [컨텍스트·스펙·하네스·루프](src/content/docs/11-ai-native/context-spec-harness-loop.md) | `draft` | 8,987 | `/11-ai-native/context-spec-harness-loop/` |\n| [11. AI 네이티브 개발](src/content/docs/11-ai-native/index.md) | `draft` | 1,042 | `/11-ai-native/` |\n| [권한·샌드박스·worktree](src/content/docs/11-ai-native/permissions-sandbox-worktrees.md) | `draft` | 12,798 | `/11-ai-native/permissions-sandbox-worktrees/` |\n| [AI 코딩 에이전트와 일하는 법](src/content/docs/11-ai-native/working-with-coding-agents.md) | `draft` | 19,749 | `/11-ai-native/working-with-coding-agents/` |\n\n### 12. 사례와 캡스톤",
        "| [컨텍스트·스펙·하네스·루프](src/content/docs/11-ai-native/context-spec-harness-loop.md) | `draft` | 8,987 | `/11-ai-native/context-spec-harness-loop/` |\n| [11. AI 네이티브 개발](src/content/docs/11-ai-native/index.md) | `draft` | 1,042 | `/11-ai-native/` |\n| [권한·샌드박스·worktree](src/content/docs/11-ai-native/permissions-sandbox-worktrees.md) | `draft` | 12,798 | `/11-ai-native/permissions-sandbox-worktrees/` |\n| [AI 코딩 에이전트와 일하는 법](src/content/docs/11-ai-native/working-with-coding-agents.md) | `draft` | 20,352 | `/11-ai-native/working-with-coding-agents/` |\n\n### 12. 사례와 캡스톤"
      ]
    ]
  },
  {
    "path": "research/source-map.md",
    "before": "75d8dfd33f985ac7fdde5e1279ae58819890f967fbd66958f4000e85883367c7",
    "after": "2ed0ce6c0c2e23f33b779fc405e9b1bb49d7913dba80fa17446d13efb26b4679",
    "replacements": [
      [
        "# 출처 지도\n\n2026-11-15 R10 현재 적용 정정: [운영 직접 근거](public-beta-review-source-excerpts/r10-operations-2026-11-15.md)의 공식10URL 관련 본문을 확인했습니다. NIST SP 800-61r3는 분야·규모와 관계없이 대부분의 조직을 대상으로 하며, SP 800-34r1의 미국 연방 정보 시스템 범위와 CISA의 랜섬웨어 범위를 분리합니다. 아래2026-08-13의 “미국 연방 중심”·묶음 범위 설명은 당시 해석으로 보존하고 현재 적용은 이 정정을 따릅니다. 같은 날 확인한 [OWASP 키 회전·보관 근거](public-beta-review-source-excerpts/r10-operations-key-recovery-2026-11-15.md)는 재발급 가능한 접근 자격과 과거 암호문에 필요한 키·버전의 복구를 구분하는 데만 적용합니다. 특정 제품·실제 운영·알림·복원·권한 또는 법적 의무를 확인한 것은 아닙니다. R10 수정과 인접 R20의 국소 사례 정렬은 같은 저장 reviewer의 Fix1 PASS C0/I0/M0으로 해소했습니다. R10 review 전이는 controller closeout에 연결하며 R20 전체·ready·공개 승인을 뜻하지 않습니다.\n\n2026-11-15 R09 현재 적용 보충: [빌드·배포 직접 근거](public-beta-review-source-excerpts/r09-build-deploy-2026-11-15.md)의 공식8URL 관련 본문을 확인했습니다. RFC8499는 RFC9499로 대체됐으며 현재 DNS 용어의 TTL·recursive resolver·authoritative server 범위는 후속 문서에 연결합니다. RFC1034·9110의 기본 이름/HTTPS 경계, Astro·GitHub Pages의 site/base·정적 artifact·workflow·환경 변수 범위를 확인했지만 실제 CI·배포·DNS·TLS·공개 URL 성공은 주장하지 않습니다. 아래8월13일 RFC8499 확인과 제품 표의 과거 날짜·실패는 역사로 유지합니다. Action 예제 버전 차이는 최신 릴리스·교체 필요의 근거로 쓰지 않으며 Vercel·Sites는 이번 현재 기능 확인 대상이 아닙니다. R09 수정과 감사 정정은 같은 저장 reviewer 후속 PASS C0/I0/M0으로 해소했습니다. review 전이는 R09 controller closeout에 연결하며 ready·공개 승인을 뜻하지 않습니다.",
        "# 출처 지도\n\n2026-11-15 R11 현재 적용 보충: [코딩 에이전트 직접 근거](public-beta-review-source-excerpts/r11-coding-agents-2026-11-15.md)의 공식·1차 URL6개에서 권한·샌드박스·승인 구분, 저장소 문맥과 작은 작업, 실제 검증·독립 평가·인수인계의 관련 본문을 확인했습니다. OpenAI·Anthropic의 조직별 사례와 공개 데모를 모든 프로젝트의 강제 절차나 현재 제품 성능으로 일반화하지 않습니다. 제품별 계획 명령·전체 설정·계정 기능은 not-confirmed이며 원고에서는 특정 명령 대신 영속적인 계획 개념을 설명합니다. 아래8월 확인일과 PBSG-017은 역사로 보존합니다. R11의 blocked·W03 동시 중복·템플릿 수정은 같은 저장 reviewer 후속 검토 전까지 해소 완료로 처리하지 않습니다.\n\n2026-11-15 R10 현재 적용 정정: [운영 직접 근거](public-beta-review-source-excerpts/r10-operations-2026-11-15.md)의 공식10URL 관련 본문을 확인했습니다. NIST SP 800-61r3는 분야·규모와 관계없이 대부분의 조직을 대상으로 하며, SP 800-34r1의 미국 연방 정보 시스템 범위와 CISA의 랜섬웨어 범위를 분리합니다. 아래2026-08-13의 “미국 연방 중심”·묶음 범위 설명은 당시 해석으로 보존하고 현재 적용은 이 정정을 따릅니다. 같은 날 확인한 [OWASP 키 회전·보관 근거](public-beta-review-source-excerpts/r10-operations-key-recovery-2026-11-15.md)는 재발급 가능한 접근 자격과 과거 암호문에 필요한 키·버전의 복구를 구분하는 데만 적용합니다. 특정 제품·실제 운영·알림·복원·권한 또는 법적 의무를 확인한 것은 아닙니다. R10 수정과 인접 R20의 국소 사례 정렬은 같은 저장 reviewer의 Fix1 PASS C0/I0/M0으로 해소했습니다. R10 review 전이는 controller closeout에 연결하며 R20 전체·ready·공개 승인을 뜻하지 않습니다.\n\n2026-11-15 R09 현재 적용 보충: [빌드·배포 직접 근거](public-beta-review-source-excerpts/r09-build-deploy-2026-11-15.md)의 공식8URL 관련 본문을 확인했습니다. RFC8499는 RFC9499로 대체됐으며 현재 DNS 용어의 TTL·recursive resolver·authoritative server 범위는 후속 문서에 연결합니다. RFC1034·9110의 기본 이름/HTTPS 경계, Astro·GitHub Pages의 site/base·정적 artifact·workflow·환경 변수 범위를 확인했지만 실제 CI·배포·DNS·TLS·공개 URL 성공은 주장하지 않습니다. 아래8월13일 RFC8499 확인과 제품 표의 과거 날짜·실패는 역사로 유지합니다. Action 예제 버전 차이는 최신 릴리스·교체 필요의 근거로 쓰지 않으며 Vercel·Sites는 이번 현재 기능 확인 대상이 아닙니다. R09 수정과 감사 정정은 같은 저장 reviewer 후속 PASS C0/I0/M0으로 해소했습니다. review 전이는 R09 controller closeout에 연결하며 ready·공개 승인을 뜻하지 않습니다."
      ]
    ]
  },
  {
    "path": "templates/agent-task-brief-template.md",
    "before": "189b2a14dd3b1dff4878f3b68e957c4212d0698bbeeef8bccb0fd97b43a048c1",
    "after": "6bd36d1537b20962aebfd261467693b70ce1abe7fe279202ea851c7b4ad57b19",
    "replacements": [
      [
        "\n- 변경 파일과 핵심 판단:\n- 수용 기준별 직접 증거:\n- 미실행 검증과 이유:\n- 남은 위험·승인 대기·비범위:\n- 되돌리기·복구 방법:",
        "\n- 변경 파일과 핵심 판단:\n- 수용 기준별 직접 증거:\n- 독립 리뷰 적용 여부·finding 재판정·수정 후 재검증:\n- 권한 있는 수용 주체·수용 결정·남은 조건:\n- 미실행 검증과 이유:\n- 남은 위험·승인 대기·비범위:\n- 되돌리기·복구 방법:"
      ]
    ]
  }
];
export function r11PreFixBytes(path,bytes){
 bytes=r11PreCloseoutBytes(path,bytes);
 const e=r11FixTransitions.find(x=>x.path===path);if(!e||sha(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R11 reversal not unique');text=text.replace(after,before);}
 if(sha(text)!==e.before)throw Error('R11 historical bytes mismatch');return Buffer.from(text);
}
export function validateR11Current(read){const errors=[];for(const e of r11FixTransitions){try{if(sha(r11PreCloseoutBytes(e.path,read(e.path)))!==e.after)errors.push('R11 current patch mismatch: '+e.path)}catch{errors.push('R11 current patch missing: '+e.path)}}return errors;}
