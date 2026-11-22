// These three files were also fixed R01–R26 review inputs. Only the exact
// approved Task 23 summary can be projected to the last manuscript-batch bytes.
import { createHash } from 'node:crypto';
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const pins = {
  "PROJECT_CONTEXT.md": {
    current: 'b1575a054c92b855e7cbd582425214bee930377308190b3b70b19e817fe03d13', previous: '6608a5a28f6e9069216cd4e1ce58e82c65d11062c94055cbe76b1a22496e9366',
    ranges: [
      {"at":2,"remove":2,"insert":[]},
    ],
  },
  "ROADMAP.md": {
    current: '79a961e4aa2b44ce8c071278169a668610d8c6e9efe68e96f6af0c26a58eec4a', previous: '85a6ffa6aafc9ba9b502b9168c9df01848062d070dbbe35338e8d4b95156bcb2',
    ranges: [
      {"at":2,"remove":2,"insert":[]},
    ],
  },
  "docs/superpowers/plans/2026-08-12-public-beta-master-plan.md": {
    current: 'dc25d3173d24ed9a3629563fe0e60fb579a9de0a88ceed61ab5408cfb50b664e', previous: 'f714cf55cc7ddcc09dbf9449f4be33456d714034044d77d8feef0d69f1986574',
    ranges: [
      {"at":143,"remove":2,"insert":["| M5-03 | 전 문서 conformance·source·automated·browser·visual 증거 | 3.0 | pending | 0.0 | Tasks 22~23 |","| M5-04 | 소유자 승인과 공개 문서 100% `ready` | 2.0 | pending | 0.0 | Task 23 |"]},
      {"at":154,"remove":2,"insert":[]},
      {"at":1714,"remove":4,"insert":["- [ ] clean worktree의 content release candidate SHA를 기록합니다.","- [ ] 공개 원고 59개와 SHA-256, R01~R26 결과·재판정·재검토, 콘텐츠·출처·시각 감사, 자동·브라우저 검증, 남은 Minor·known limitation을 요약합니다.","- [ ] 본문 변경 없이 `reviewEvidence`와 `contentStatus`만 기계적으로 승격할 예상 diff 계약을 포함합니다.","- [ ] 승인 뒤 본문·출처·다이어그램 의미가 바뀌면 승인이 무효이고 새 묶음 승인이 필요함을 명시합니다."]},
      {"at":1740,"remove":3,"insert":["- [ ] 승인 날짜·기준 SHA·59개 경로·예상 기계 diff·승인 범위를 기록합니다.","- [ ] 사용자의 비공개 대화 전문이나 불필요한 개인정보는 복제하지 않고 승인 취지를 짧게 기록합니다.","- [ ] 승인 전에는 `owner-approval.md`를 만들어 통과한 것처럼 쓰지 않습니다."]},
      {"at":1773,"remove":3,"insert":["- [ ] 각 배치는 본문 문자 수가 변하지 않고 frontmatter·`CONTENT_MAP.md`·문맥만 바뀌는지 확인합니다.","- [ ] 각 배치마다 `npm run sync:content-map`, `npm run check:static`, cached diff 검토, 독립 로컬 커밋을 수행합니다.","- [ ] `ready` 증거 경로가 존재하고 R01~R25 중 선택한 ID가 실제 대상 문서의 리뷰 행과 일치합니다."]},
      {"at":1789,"remove":3,"insert":["- [ ] 59개 페이지 × 1440×1000·390×844에서 `출판 준비` 배지, H1 1개, 깨진 이미지, 전역 overflow, console error/warning을 다시 확인합니다.","- [ ] 결과를 site QA의 새 `ready promotion` 절에 추가합니다.","- [ ] 소유자 승인 기준 SHA와 본문 SHA가 일치하고 승격으로 바뀐 것은 frontmatter·생성 지도·문맥뿐임을 증명합니다."]},
      {"at":1805,"remove":6,"insert":["- [ ] R01~R25 fresh Codex reviewer와 분리된 R26 reviewer의 유효한 정상 검토와 입력 불변이 확인됐습니다. 실제 모델/effort가 기록됐고 자동 fallback은 없습니다.","- [ ] 모든 finding이 controller 재판정됐고 해결되지 않은 Critical·Important가 0개입니다.","- [ ] 필요한 재검토가 같은 모델·effort·Read-only 계약으로 통과했습니다.","- [ ] 푸디님의 실제 묶음 승인이 기준 SHA와 59개 범위를 가리킵니다.","- [ ] 공개 문서 59개가 모두 `ready`이고 필수 증거·시각 조건을 통과합니다.","- [ ] 이 완료는 여전히 로컬 상태이며 공개 저장소·Pages 배포 성공을 뜻하지 않습니다."]},
    ],
  },
};
// The archive reader accepts authentic predecessors; the current gate must not.
const task26Pins = {
  'PROJECT_CONTEXT.md': 'e85db4300bbe83284e8b22cc26fe73f800b1451d63952ac779146f675c00a1bc',
  'ROADMAP.md': 'e52531ab349af0c45d30247ee484e59aa97cf939e4975dcc0961e1406d2bdad2',
  'docs/superpowers/plans/2026-08-12-public-beta-master-plan.md': '2e6d406615fd4abfc1fa7b181d70979fcbf5472d002f186c8802715ffc295175',
};
// Only the approved M7 target paragraph may be removed from a frozen M6 input.
const targetParagraph='2026-11-23 M7 배포 대상은 `foodie-repository/vibe-dev-handbook`입니다. 소유자는 개발 이력이 없는 스냅샷의 `main` push, GitHub Actions를 통한 Pages 배포와 실제 URL 검증을 승인했습니다. 이 기록은 실행 전 승인 범위이며 배포 성공을 뜻하지 않습니다. 태그와 GitHub Release는 포함하지 않습니다.';
export function beforeTask27Target(path,bytes) {
  if (!Object.hasOwn(task26Pins,path)) return bytes;
  const text=bytes.toString('utf8');
  const heading=path==='PROJECT_CONTEXT.md' ? '# 프로젝트 컨텍스트' : path==='ROADMAP.md' ? '# 로드맵' : '### Task 27: 별도 승인을 받아 공개 GitHub 저장소·root snapshot·Pages 배포를 만듭니다';
  const marker=heading+'\n\n'+targetParagraph+'\n';
  if (!text.includes(marker)) return bytes;
  const predecessor=Buffer.from(text.replace(marker,heading+'\n'));
  return hash(predecessor)===task26Pins[path] ? predecessor : bytes;
}
export function beforeTask26Summary(path,bytes) {
  bytes=beforeTask27Target(path,bytes);
  if (!Object.hasOwn(task26Pins,path) || hash(bytes)!==task26Pins[path]) return bytes;
  const lines=bytes.toString('utf8').split('\n');
  if (path==='PROJECT_CONTEXT.md' || path==='ROADMAP.md') lines.splice(1,2);
  else {
    // One-based ranges in the pinned closeout plan; only Task 26 checks changed.
    for (const [start,count] of [[2021,4],[2047,3],[2060,4],[2077,6]]) {
      for(let i=start-1;i<start-1+count;i++) lines[i]=lines[i].replace(/^- \[x\]/,'- [ ]');
    }
    lines[2081]='- [ ] 최종 canonical RC tree가 clean 상태에서 전체 자동·base path·브라우저 게이트를 통과했습니다.';
    lines.splice(154,2);
    lines[147]='| M6-03 | 로컬 릴리스 후보 전체 게이트 | 1.5 | pending | 0.0 | Task 26 |';
  }
  const predecessor=Buffer.from(lines.join('\n'));
  if (hash(predecessor)!==pins[path].current) throw Error('Task 26 predecessor mismatch: '+path);
  return predecessor;
}
export function matchesCurrentTask23Summary(path,bytes) {
  return (path==='PROJECT_CONTEXT.md' || path==='ROADMAP.md') && hash(bytes)===pins[path].current;
}
export function beforeTask23Summary(path,bytes) {
  bytes=beforeTask26Summary(path,bytes);
  const entry=pins[path];
  if (!entry || hash(bytes)!==entry.current) return bytes;
  const lines=bytes.toString('utf8').split('\n');
  for (const {at,remove,insert} of entry.ranges.toReversed()) lines.splice(at,remove,...insert);
  const original=Buffer.from(lines.join('\n'));
  if (hash(original)!==entry.previous) throw Error('Task 23 summary predecessor mismatch: '+path);
  return original;
}
