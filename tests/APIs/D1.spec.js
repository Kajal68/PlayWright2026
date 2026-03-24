const {test,expect,request} = require("@playwright/test");
const payload = {userEmail:"kajalpagare@gmail.com",userPassword:"Kajalpagare@123"}
//test.beforeAll({})

// executes only once

// test.beforeEach
// it will execute every time if there are 3 tests
let token1;
test.beforeAll(async()=>{

   const apiContext = await request.newContext();
  const loginResponse= await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
   {
    data:payload
})
//200, 201
//expect(loginResponse.ok()).toBeTruthy();
const jsonbody=await loginResponse.json();
 token1 = jsonbody.token;

console.log(token1);


});


test('Shop app',async({page})=>{
//await page.goto("https://rahulshettyacademy.com/client"); // load base page first


   await page.addInitScript(token =>{
        window.localStorage.setItem('token',token);
    }, token1 );


   await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   
   await page.locator(".card-body").filter({hasText:"ZARA COAT 3"})
   .getByRole("button",{name:"Add to Cart"}).click();
 
   await page.getByRole("listitem").getByRole('button',{name:"Cart"}).click();
 
   //await page.pause();
   await page.locator("div li").first().waitFor();
   await expect(page.getByText("ZARA COAT 3")).toBeVisible();
 
   await page.getByRole("button",{name :"Checkout"}).click();
   await page.getByPlaceholder("Select Country").pressSequentially("ind");
 
   await page.getByRole("button",{name :"India"}).nth(1).click();
   await page.getByText("PLACE ORDER").click();
 
   await expect(page.getByText("Thankyou for the order.")).toBeVisible();
    });



