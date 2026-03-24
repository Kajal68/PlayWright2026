const {test,expect} = require('@playwright/test');

test('Shopping app test',async({browser})=>{

const context = await browser.newContext();
const page = await context.newPage();
   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   const link = page.locator('.float-right .blinkingText').nth(0);
   //promise.all() 
//Promise all  
   const [newPage]=await Promise.all([
         
   context.waitForEvent('page'), //listen for any new page :pending, rejected , fulfilled
   link.click(), 
   ]);

const newpage=   await newPage.getByRole('link', { name: 'mentor@rahulshettyacademy.com' }).textContent();
const arraytext = newpage.split("@");
const domain = arraytext[1].split(" ")[0];

console.log(newpage);  
console.log(domain); 
await page.locator("#username").fill(domain);
console.log(await page.locator("#username").inputValue);
//await page.pause();
});
