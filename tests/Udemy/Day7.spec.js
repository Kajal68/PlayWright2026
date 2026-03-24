const {test,expect} = require('@playwright/test');

test('QA academy test',async({page})=>{

    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await page.getByLabel('Check me out if you Love IceCreams!').check();
    await page.getByLabel('Employed').click();
    await page.getByLabel('Gender').selectOption('Female');

    await page.locator('[name="email"]').fill('test@gmail.com');
    await page.getByPlaceholder('Password').fill('test123');
    await page.getByRole('button', { name: 'Submit' }).click();
   // const boolean = await page.getByText('').isVisible();
   // 
    await page.locator('app=card').filter({hasText:'Samsung Edge'}).getByRole("button").click();

  //  await page.pause();




});