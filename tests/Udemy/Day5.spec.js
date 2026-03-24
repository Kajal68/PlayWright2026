const {test,expect} = require('@playwright/test');

test('Shopping app test',async({page})=>{

   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  
   const user = page.locator('#username');
   const pass = page.locator('#password');
   const signIn = page.locator('#signInBtn');
   const products = page.locator('.card-body .card-title');

   await user.fill('rahulshettyacademy');
   await pass.fill('Learning@830$3mK2');
   await signIn.click();

   //page.getByRole('link', { name: 'ProtoCommerce Home' })

   await page.getByRole('link', { name :'ProtoCommerce Home'}).waitFor();
   const items = await products.allTextContents();
   console.log(items);
   const counts = await products.count();
   for(let i =0; i<counts;i++){
    products.nth(i).textContent();
    
    if(await products.nth(i).textContent()==="Samsung Note 8"){
    // await products.nth(i).locator("text=Samsung Note 8");
     await products.nth(i).getByText('Add', { exact: true }).click();
     break;
    }

    await page.locator('.nav-link.btn.btn-primary').click();

   }
  // console.log(products);
          

await page.pause();

});
