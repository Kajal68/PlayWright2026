const {test, expect} = require('@playwright/test');


//test.describe.configure({mode:'parallel'});
test.describe.configure({mode:'serial'});//run one by one it will skip if one ofthe case is fail

test('@Smoke Test 1!',async({page})=>{
console.log('Smoke test  1');
});

test('@Smoke Test 2!!',async({page})=>{
console.log('Smoke test  2');
});

test('Test 3!!!',async({page})=>{

});

//npx playwright test --grep @tagname
//--grep @smoke