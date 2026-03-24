const {test, expect} = require('@playwright/test');


//test.describe.configure({mode:'parallel'});
test.describe.configure({mode:'serial'});//run one by one it will skip if one ofthe case is fail

test('@Web Test 1!',async({page})=>{
console.log('Web test  1');
});

test('Test 2!!',async({page})=>{

});

test('@Web Test 3!!!',async({page})=>{
console.log('Web test  3');

});

//npx playwright test --grep '@tagname'
//--grep '@smoke'

//allure generate ./allure-results --clean
//allure open ./allure-report