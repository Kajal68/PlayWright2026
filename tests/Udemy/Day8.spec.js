const {test, expect}=require('@playwright/test');


test('Automation test for hidden element',async({page})=>{


await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
//await page.goto('https://google.com')
//await page.goBack();
//await page.goForward();
 expect(await page.getByPlaceholder('Hide/Show Example').isVisible());
 page.locator('#hide-textbox').click();
 expect(await page.getByPlaceholder('Hide/Show Example').isHidden());


});

test('Handle pop ups',async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator('#alertbtn').click();
    await page.on('dialog',dialog =>dialog.dismiss());
    await page.locator('#confirmbtn').click();
    await page.on('dialog', dialog=>dialog.accept());

   //hover
   await page.locator('#mousehover').hover();

  // await page.pause();

});


test('Handle frames',async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
 const frames=   await page.frameLocator('#courses-iframe');

 await frames.locator('.new-navbar-highlighter').nth(0).click();
 const text =await frames.locator('.text h2').textContent();
 console.log(text.split(" ")[1]);
});

