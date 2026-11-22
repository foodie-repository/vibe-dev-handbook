import test from 'node:test';
import assert from 'node:assert/strict';
import {assessR24Destination} from '../scripts/r24-search-evidence.mjs';
const base='http://127.0.0.1:4359',target='/04-backend-data/api-database-auth/';
const valid={base,selected:target+'#authentication',actual:base+target+'#authentication',http:200,h1Count:1,allowedPaths:[target]};
test('R24 separates navigation success from related destination',()=>{
 assert.deepEqual(assessR24Destination(valid),{navigationPassed:true,relevancePassed:true,passed:true});
 const wrong=assessR24Destination({...valid,actual:base+'/start-here/'});assert.equal(wrong.navigationPassed,false);assert.equal(wrong.passed,false);
 const irrelevant=assessR24Destination({...valid,selected:'/start-here/',actual:base+'/start-here/'});assert.equal(irrelevant.navigationPassed,true);assert.equal(irrelevant.relevancePassed,false);assert.equal(irrelevant.passed,false);
 for(const patch of [{http:404},{h1Count:2},{actual:base+target+'#wrong'}])assert.equal(assessR24Destination({...valid,...patch}).passed,false);
 assert.equal(assessR24Destination({...valid,selected:'https://example.invalid'+target,actual:'https://example.invalid'+target}).passed,false);
});
