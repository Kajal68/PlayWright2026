const { test, expect } = require('@playwright/test');
const {POManager} = require('../PageObjects/POManager.js');
//json->string>js object
const dataSet=JSON.parse(JSON.stringify(require('../Utils/LoginPagetestData.json')));
//const {customtest} =require('../Utils/test.base.spec');
for(const data of dataSet) { //multiple times it will run with filters
test(`Client the App login ${data.productName}`, async ({page,}) => {
   //js file- Login js, DashboardPage
   const pomanager = new POManager(page);

   const products = page.locator(".card-body") ;
   const login = pomanager.getLoginPage();
   await login.goTo();
   await login.validLogin(data.username,data.password);

   const dashboard = pomanager.getDashboardPage();
   await dashboard.waitforele();
   await dashboard.pickItem();
   await dashboard.addToCart();
   
   const checkout =pomanager.getCheckoutPage();
   await checkout.productList();
   await checkout.checkoutDetails("ind");

  
 
});

}
customtest.only('Test Data fixture test', async ({page, testDataForOrder}) => {
   //js file- Login js, DashboardPage
   const pomanager = new POManager(page);

   const products = page.locator(".card-body") ;
   const login = pomanager.getLoginPage();
   await login.goTo();
   await login.validLogin(testDataForOrder.username,testDataForOrder.password);

   const dashboard = pomanager.getDashboardPage();
   await dashboard.waitforele();
   await dashboard.pickItem();
   await dashboard.addToCart();
   
   const checkout =pomanager.getCheckoutPage();
   await checkout.productList();
   await checkout.checkoutDetails("ind");

  
 
});

