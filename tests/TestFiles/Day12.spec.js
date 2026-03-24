const {test, expect} = require('@playwright/test');


//test.describe.configure({mode:'parallel'});
test.describe.configure({mode:'serial'});//run one by one it will skip if one ofthe case is fail

test('@API Test 1!',async({page})=>{

});

test('Test 2!!',async({page})=>{

});

test('@API Test 3!!!',async({page})=>{

});

//npx playwright test --grep @tagname
//--grep @smoke