const {test,expect} = require('@playwright/test');

test('Shopping app test',async({page})=>{

    
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await expect(page).toHaveTitle("Let's Shop");
  //  await page.pause();
    const username = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    const loginButton = page.locator('#login'); 

    await username.fill('kajalpagare@gmail.com');
    await password.fill('Kajalpagare@123');
    await loginButton.click();
 
    // //print all items in console
    // const products = page.locator('.card-body b');
    // console.log(await products.allTextContents());
    
    // Wait until products are visible
  const products = page.locator('.card-body b');
  await products.first().waitFor();   // ensures at least one product is loaded

  //await page.waitForLoadState('networkidle');
  // Print all items in console
  const productNames = await products.allTextContents();
  console.log(productNames);
});

test.only('Login Page dropdown test',async({page})=>{

    
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   // await expect(page).toHaveTitle("Let's Shop");
  //  await page.pause();
    const username = page.locator('#username');
    const password = page.locator('#password');
    //const loginButton = page.locator('#login'); 

    await username.fill('rahulshettyacademy');
    await password.fill('Learning@830$3mK2');
   // await loginButton.click();

   const dropdown = page.locator('select.form-control');
   await dropdown.selectOption('consult');
   console.log(await dropdown.inputValue());
   await page.locator('.radiotextsty').last().click();
   await expect(page.locator('.radiotextsty').last()).toBeChecked();
   await page.locator('#terms').check();
   console.log(await page.locator('#terms').isChecked());
   //await page.pause();
 //uncheck()

//  const blink = await page.locator('.float-right .blinkingText');
//   await expect(blink).toHaveAttribute("class","blinkingText");
    
//check blinking link attribute
await page.locator('.float-right .blinkingText').click();
await expect(page.locator('.float-right .blinkingText')).toHaveAttribute("class","blinkingText");

});


