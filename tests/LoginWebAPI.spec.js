const {test, expect, request} = require('@playwright/test');
const payload = {userEmail: "kajalpagare@gmail.com", userPassword:"Kajalpagare@123"};

//test.beforeAll(async()=> //it will run once before all the tests in the file
   test('Verify login token is generated', async()=>
{

const apicontext= await request.newContext();
const loginResponse=await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
   {
      data:payload
   } )

expect(loginResponse.ok()).toBeTruthy();
const loginResponseJson = await loginResponse.json();
const token = loginResponseJson.token;
console.log(token);


});