import test from 'node:test';
import {r13PreCloseoutBytes} from '../scripts/r13-closeout.mjs';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {r13FixTransitions,r13PreFixBytes,validateR13Current} from '../scripts/r13-fix-transition.mjs';
import {validateR13Inputs} from '../scripts/r13-review-inputs.mjs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url)),sha=b=>createHash('sha256').update(b).digest('hex');
const target='src/content/docs/12-case-studies/analytics-dashboard-case-study.md',brief='research/stock-dashboard-case-brief.md';
test('R13 exact four-file transition preserves frozen inputs and rejects drift missing and rollback',()=>{
 assert.equal(r13FixTransitions.length,4);assert.deepEqual(validateR13Inputs().errors,[]);
 for(const e of r13FixTransitions){const b=read(e.path),old=r13PreFixBytes(e.path,b);assert.equal(sha(r13PreCloseoutBytes(e.path,b)),e.after);assert.equal(sha(old),e.before);for(const mode of ['drift','missing','rollback']){const altered=p=>{if(p!==e.path)return read(p);if(mode==='missing')throw Error('missing');return mode==='rollback'?old:Buffer.concat([b,Buffer.from('drift')]);};assert.ok(validateR13Current(altered).length);assert.ok(validateR13Inputs(undefined,{read:altered}).errors.length);}}
});
test('R13 five trace requirements retain nine fields and original unaffected cells',()=>{
 const t=read(target).toString(),old=r13PreFixBytes(target,read(target)).toString(),sections=t.split(/^### D-0[1-5] .+ 추적$/m).slice(1);
 assert.equal(sections.length,5);const rows=old.split('\n').filter(l=>/^\| D-0[1-5] /.test(l));
 for(const [i,s]of sections.entries()){const part=s.split('\n\n이 목록은')[0],labels=[...part.matchAll(/^- \*\*(.+?):\*\*/gm)].map(m=>m[1]);assert.deepEqual(labels,['사용자 행동','상태 전이·데이터 변환','인터페이스','인증·인가·권리','실패 위험','테스트 오라클','Git 작업 단위','배포·운영 증거','복구']);const cells=rows[i].slice(1,-1).split('|').map(x=>x.trim());for(let n=1;n<10;n++)if(!(i===4&&n===6))assert.ok(part.includes(cells[n]));}
 assert.equal(sha(read('src/styles/custom.css')),'2236f2a8a9b30515cb641d48de7089d15590834766ada3f60de9f649ef36c137');
 assert.equal(sha(read('src/assets/diagrams/analytics-dashboard-architecture.svg')),'0627d5671fdd25b07fac3c54e65f7bee9ef24c384dd45e8741bd64469590e143');
});
test('R13 preserves both CSVs and checks their declared fictional row combinations',()=>{
 const csv=t=>t.split('```csv\n')[1].split('\n```')[0],a=csv(read(target).toString());assert.equal(a,csv(read(brief).toString()));assert.equal(a,csv(r13PreFixBytes(target,read(target)).toString()));
 const lines=a.split('\n'),heads=lines.shift().split(',');assert.equal(heads.length,14);assert.equal(lines.length,6);const rows=lines.map(l=>Object.fromEntries(l.split(',').map((v,i)=>[heads[i],v])));
 assert.equal(new Set(rows.map(r=>[r.instrument_id,r.instrument_type,r.market,r.trading_date].join('|'))).size,6);
 assert.deepEqual(rows.map(r=>r.value_status),['valid','valid','warning','valid','valid','blocked']);
 for(const r of rows){assert.equal(r.value_type,'close');assert.equal(r.market,'MARKET-X');assert.equal(r.source_id,'EDU-FIXTURE');assert.equal(r.source_version,'v1');assert.equal(r.transform_version,'tf-v1');if(r.instrument_type==='index'){assert.equal(r.unit,'point');assert.equal(r.volume,'');assert.equal(r.price_basis,'not_applicable')}else{assert.equal(r.unit,'KRW');assert.equal(r.price_basis,'unadjusted');if(r.value_status!=='blocked')assert.ok(Number.isInteger(+r.volume)&&+r.volume>=0)}if(r.value_status==='blocked'){assert.equal(r.value,'');assert.equal(r.missing_reason,'source_missing')}else{assert.ok(r.value!==''&&Number.isFinite(+r.value)&&+r.value>=0);assert.equal(r.missing_reason,r.value_status==='warning'?'late_source':'');}}
});
test('R13 manuscript and brief distinguish row candidate freshness and final review scope',()=>{
 for(const p of [target,brief]){const t=read(p).toString();for(const s of ['교육용 가상 주 수','missing_reason이라는 기존 헤더','정상 수치4개·경고 수치1개','묶음은 warning 후보','한 행의 상태를 묶음 상태로 그대로 복사하지','기본 예외를 임의의 누락 행에 확대하지','기준 시점이 기대 시점 이전이면 current','기대 시점 이상인데 갱신을 승인하지 못했으면 stale','필요한 시각·기준이 없으면 unknown','개별 행의 value_status를 일괄 변경','행의 review_required나 타입·단위 위반이 남아 있으면'])assert.ok(t.includes(s),p+':'+s);}
 const t=read(target).toString();assert.ok(!t.includes('상태·지연·`stale` 이유가 보이며'));for(const u of ['https://www.w3.org/TR/prov-o/','https://www.w3.org/TR/vocab-dcat-3/','https://slsa.dev/spec/v1.2/build-requirements','https://reproducible-builds.org/docs/definition/'])assert.ok(t.includes(']('+u+')'));
});
const observation='output/playwright/r13-table-remaining-20261115/observations.json';
test('R13 P-M01 correction connects eight unchanged images to actual remaining observations',{skip:!existsSync(new URL('../'+observation,import.meta.url))},()=>{
 const r=JSON.parse(read('docs/project/reviews/public-beta-1/r13-stock-capstone-request.md').toString().split('<!-- m5-r13-request:data:start -->\n```json\n')[1].split('\n```')[0]);const states=JSON.parse(read(observation));assert.equal(sha(read(observation)),r.render_provenance.additional_context_manifests[0].sha256);
 for(const im of r.images.slice(40)){const st=states.find(s=>s.paths.includes(im.path));assert.ok(st,im.id);assert.equal(st.width,im.viewport.width);assert.equal(st.theme,im.theme);assert.equal(sha(read(im.path)),im.sha256);}assert.equal(r.images.slice(40).length,8);
});
