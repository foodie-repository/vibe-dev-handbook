import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync } from 'node:fs';
import { test } from 'node:test';
import { collectMarkdownHeadingAnchors } from '../scripts/reference-validation.mjs';
import { parseInventory, parseLedger } from '../scripts/validate-public-beta-plan.mjs';
import { parseFrontmatter, validateContentMapInventory } from '../scripts/content-validation.mjs';
import { preReadyBytes, reviewedDocs } from '../scripts/r26-closeout.mjs';
import { beforeTask23Summary, beforeTask26Summary, beforeTask27Target, matchesCurrentTask23Summary } from '../scripts/task23-summary-history.mjs';

const root = new URL('../', import.meta.url);
const sha = data => createHash('sha256').update(data).digest('hex');
const read = p => readFileSync(new URL(p,root));
const dir = 'docs/project/reviews/public-beta-1/';
const ownerPackage = read(dir+'owner-review-package.md');
const base = 'e52fa3e8ce081ce22495eefab8d4b668a3fed17d';
const promotedThrough = 4;
const buildTrack = new Set([
  "src/content/docs/01-mental-models/software-is-a-system.md",
  "src/content/docs/03-full-stack/client-server-full-stack.md",
  "src/content/docs/03-full-stack/http-request-response.md",
  "src/content/docs/04-backend-data/api-database-auth.md",
  "src/content/docs/05-frontend/browser-dom-rendering.md",
  "src/content/docs/06-requirements-design/prd-sdd-tdd.md",
  "src/content/docs/08-quality/testing-strategy.md",
  "src/content/docs/09-git-github/git-and-github.md",
  "src/content/docs/10-deployment-operations/build-deploy-domain-dns.md",
  "src/content/docs/10-deployment-operations/logs-monitoring-backup.md",
  "src/content/docs/11-ai-native/working-with-coding-agents.md",
  "src/content/docs/12-case-studies/analytics-dashboard-case-study.md",
  "src/content/docs/12-case-studies/first-full-stack-project.md"
]);
function batch(path) {
  if (buildTrack.has(path)) return 1;
  if (path.includes('/start-here/') || path.endsWith('/index.md')) return 3;
  return path.includes('/reference/') ? 4 : 2;
}
function checkDoc(path, live, row, expectedHash) {
  const status = batch(path) <= promotedThrough ? 'ready' : 'review';
  const text = live.toString(), header = text.split('\n---\n')[0];
  assert.match(header,new RegExp('^contentStatus: '+status+'$','m'),path);
  assert.equal(sha(preReadyBytes(path,live)),expectedHash,'owner-approved bytes: '+path);
  if (status !== 'ready') return;
  for (const [,type,target] of header.matchAll(/^  - "([a-z]+): (.+)"$/gm)) {
    const [file,fragment] = target.split('#');
    const evidence = read(file);
    if (['request','independent','adjudication'].includes(type)) {
      assert.ok(file.startsWith(dir+row.toLowerCase()+'-'),path+' '+target);
    }
    if (fragment) assert.ok(collectMarkdownHeadingAnchors(evidence.toString()).has(fragment),target);
  }
}

test('Task 23: every live manuscript matches its approved bytes, batch, and evidence targets',()=>{
  assert.equal(sha(ownerPackage),'b310fb52172c16e7467ffdf17c0003a246f5fff5a98308439fe1b1be0e678145');
  verifyOwner(read(dir+'owner-approval.md'));
  const matches=[...ownerPackage.toString().matchAll(/^\| (R\d\d) \| .*?\(\.\.\/\.\.\/\.\.\/\.\.\/(src\/content\/docs\/[^)]+)\) \| \x60([a-f0-9]{64})\x60 \|$/gm)];
  assert.equal(matches.length,59);
  const frozen=new Map(reviewedDocs);
  const paths=matches.map(m=>m[2]).sort();
  const tree=readdirSync(new URL('src/content/docs/',root),{recursive:true}).filter(p=>/\.mdx?$/.test(p)).map(p=>'src/content/docs/'+p).sort();
  assert.deepEqual(paths,tree);
  const counts=[0,0,0,0];
  for(const [,row,path,hash] of matches) {
    assert.equal(frozen.get(path),hash,path);
    counts[batch(path)-1]++;
    checkDoc(path,read(path),row,hash);
  }
  assert.deepEqual(counts,[13,23,18,5]);
});

function verifyOwner(bytes) {
  assert.equal(sha(bytes),'51e4dcab7d33fabb57e4f34e081c61460b4d511d1ef4557dc36eaa96c86f8ff3','approval at f327b03');
  assert.ok(bytes.toString().includes(base));
}
function verifyLiveInventory(map,plan,docs) {
  assert.deepEqual(validateContentMapInventory(map,docs),[]);
  const sorted=arr=>arr.map(({path,status})=>path+':'+status).sort();
  assert.deepEqual(sorted(parseInventory(plan)),sorted(docs));
  const n=docs.filter(d=>d.status==='ready').length;
  assert.deepEqual(map.split('\n').filter(l=>l.startsWith('- 상태:')),['- 상태: '+['draft','seed','review','ready'].map((s,i)=>'\x60'+s+'\x60 '+[0,0,docs.length-n,n][i]+'개').join(', ')]);
}

test('Task 23: unprojected map, plan and summary match the live batch; reject counterexamples',()=>{
  const docs=reviewedDocs.map(([path])=>{const {data,body}=parseFrontmatter(read(path).toString());
    assert.equal(data.contentStatus,batch(path)<=promotedThrough?'ready':'review',path);
    return {path,status:data.contentStatus,bodyLength:[...body].length};});
  const map=read('CONTENT_MAP.md').toString(), plan=read('docs/superpowers/plans/2026-08-12-public-beta-master-plan.md').toString();
  verifyLiveInventory(map,plan,docs);
  const damaged=map.replace(/(\x60ready\x60 )\d+개/,(_,prefix)=>prefix+'999개');assert.notEqual(map,damaged);
  assert.throws(()=>verifyLiveInventory(damaged,plan,docs));
  const p=docs.find(d=>d.status==='ready').path;
  const roll=map.replace(']('+p+') | \x60ready\x60',']('+p+') | \x60review\x60');assert.notEqual(roll,map);
  assert.throws(()=>verifyLiveInventory(roll,plan,docs));
  // A future row marked ready, or any row reverted when the final batch is reached.
  const adj=docs.find(d=>d.status==='review')??docs.at(-1);
  const cell='| \x60'+adj.path+'\x60 | ',wrong=plan.replace(cell+adj.status+' |',cell+(adj.status==='ready'?'review':'ready')+' |');assert.notEqual(wrong,plan);
  assert.throws(()=>verifyLiveInventory(map,wrong,docs));
});

test('Task 23: retaining the commit string does not authenticate an edited owner decision',()=>{
  const approved=read(dir+'owner-approval.md');verifyOwner(approved);
  const withdrawn=approved.toString().replace('전이하도록 승인했습니다','전이 승인을 철회했습니다');
  assert.notEqual(withdrawn,approved.toString());assert.ok(withdrawn.includes(base));
  assert.throws(()=>verifyOwner(Buffer.from(withdrawn)));
});

test('Task 23 completion: live manifest and M5 closure agree with the approved 59 ready manuscripts',()=>{
  for(const path of ['PROJECT_CONTEXT.md','ROADMAP.md']) {
    const current=read(path);
    const task23=beforeTask26Summary(path,current);
    assert.notDeepEqual(task23,current,path+' live RC cannot roll back to Task 23');
    assert.equal(matchesCurrentTask23Summary(path,task23),true,path);
    const previous=beforeTask23Summary(path,current);
    assert.notDeepEqual(previous,current);
    assert.equal(matchesCurrentTask23Summary(path,previous),false,path+' exact rollback');
  }
  const manifest=JSON.parse(read('PROJECT_MANIFEST.json'));
  assert.deepEqual(manifest.inventory.contentStatus,{draft:0,seed:0,review:0,ready:59});
  assert.deepEqual(manifest.inventory.officialBuildTrackStatus,{draft:0,seed:0,review:0,ready:13});
  const plan=read('docs/superpowers/plans/2026-08-12-public-beta-master-plan.md').toString();
  const ledger=parseLedger(plan), status=id=>ledger.find(row=>row.id===id)?.status;
  for(const id of ['M5-03','M5-04']) assert.equal(status(id),'done',id);
  const planPath='docs/superpowers/plans/2026-08-12-public-beta-master-plan.md';
  assert.notDeepEqual(beforeTask26Summary(planPath,read(planPath)),read(planPath),'live RC plan');
  assert.equal(status('M6-03'),'done');
  for(const id of ['M7-01','M7-02','M7-03','M7-04']) assert.equal(status(id),'pending',id);
});

test('Task 23: reject body drift, unrelated frontmatter, evidence substitution and status rollback',()=>{
  const path='src/content/docs/01-mental-models/software-is-a-system.md';
  const live=read(path).toString(), hash=new Map(reviewedDocs).get(path);
  for(const candidate of [live+' ',live.replace('title:','changedTitle:'),live.replace('owner-approval.md','owner-review-package.md'),live.replace('contentStatus: ready','contentStatus: review')]) {
    assert.notEqual(candidate,live);
    assert.throws(()=>checkDoc(path,Buffer.from(candidate),'R01',hash));
  }
});

test('Task 27: live deployment target is the approved snapshot target, not proof of publication',()=>{
  const repo='https://github.com/foodie-repository/vibe-dev-handbook';
  const pages='https://foodie-repository.github.io/vibe-dev-handbook/';
  assert.deepEqual(JSON.parse(read('PROJECT_MANIFEST.json')).releaseTarget,{repository:repo,pages,statusAtSnapshot:'approved-target-not-live-verified'});
  for(const url of [repo,pages]) assert.ok(read('README.md').includes(']('+url+')'));
  for(const path of ['PROJECT_CONTEXT.md','ROADMAP.md','docs/superpowers/plans/2026-08-12-public-beta-master-plan.md']) {
    const live=read(path), prior=beforeTask27Target(path,live);
    assert.notDeepEqual(prior,live,path+' missing target');
    const altered=Buffer.from(live.toString().replace('M7 배포 대상은','M7 배포 대상 변경:'));
    assert.deepEqual(beforeTask27Target(path,altered),altered,path+' altered target');
    const paragraph=live.toString().split('\n').find(line=>line.startsWith('2026-11-23 M7 배포 대상은'));
    const misplaced=Buffer.concat([prior,Buffer.from('\n'+paragraph+'\n')]);
    assert.deepEqual(beforeTask27Target(path,misplaced),misplaced,path+' misplaced paragraph');
    const unrelated=Buffer.concat([live,Buffer.from(' ')]);
    assert.deepEqual(beforeTask27Target(path,unrelated),unrelated,path+' unrelated drift');
  }
});
