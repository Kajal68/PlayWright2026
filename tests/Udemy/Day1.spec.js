const {test,expect} = require('@playwright/test');

test.skip('Udemy Day1 test',async({page})=>{
//fixture - browser, page, context 

//const browser = await browser.launch();
// const context = await browser.newContext();
// const page = await context.newPage();
await page.goto('https://www.google.com/');
await expect(page).toHaveTitle('Google');



});

test('Trace Error message',async({page})=>{

    
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await expect(page).toHaveTitle("Let's Shop");
  //  await page.pause();
    const username = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    const loginButton = page.locator('#login'); 

  //add invalid password and verify error message
    await username.fill('kajalpagare@gmail.com');
    await password.fill('123456789');
    await loginButton.click();

    console.log(await page.locator('.toast-message').textContent()); 
   await expect(page.locator('.toast-message')).toHaveText('Incorrect email or password.');
    //take screenshot of error message
    await page.locator('.toast-message').screenshot({path:'test-results/error.png'});    
  
    //attach screenhot to allure report
    await page.locator('.toast-message').screenshot({path:'test-results/error.png', fullPage: true});
    await test.info().attach('error', {path:'test-results/error.png', contentType: 'image/png'});






});

//add trace for debugging
    //await page.tracing.start({ screenshots: true, snapshots: true }); 