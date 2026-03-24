const {test,expect} = require('@playwright/test');

test('Shopping app test',async({page})=>{

    
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await expect(page).toHaveTitle("Let's Shop");
  //  await page.pause();
    const username = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    const loginButton = page.locator('#login'); 

  //add invalid password and verify error message
    await username.fill('kajalpagare@gmail.com');
    await password.fill('Kajalpagare@123');
    await loginButton.click();
 
    //get all products list and print the name of product which has price 150000
    const products = page.locator('.card-body');
    console.log(await products.locator('b').textContent());  

        

  // console.log(await page.locator('.card-body b').nth(0).textContent());
    //  const allitems = page.locator('.card-body b').allTextContents();
    // console.log(allitems);
    // const products = page.locator('.card-body');
    // const count = await products.count();   
    // for(let i=0; i<count; i++){
    //     if(await products.nth(i).locator('b').textContent() === "IPHONE 13 PRO"){
    //         await products.nth(i).locator('text= Add To Cart').click();
    //         break;
    //     }
    // }
   
    // await page.locator('[routerlink="/dashboard/cart"]').click();
  //  await expect(page.locator('h3:has-text("IPHONE 13 PRO")')).toBeVisible();

 


});

//add trace for debugging
    //await page.tracing.start({ screenshots: true, snapshots: true }); 