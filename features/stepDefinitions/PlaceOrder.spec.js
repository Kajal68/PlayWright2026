const {Given, When, Then} = require('@cucumber/cucumber');
const {POManager} = require('../../tests/PageObjects/POManager.spec');   
const {expect}=require('@playwright/test'); 
const {chromium}  = require('playwright') ;
//const {setDefaultTimeout} = require('@cucumber/cucumber');
//setDefaultTimeout(60*1000);
         
         
         Given('Login into site with {string} and {string}',{timeout:60*1000}, async function (username,password) {
         
            const products = this.page.locator(".card-body") ;
            const login = this.pomanager.getLoginPage();
            await login.goTo();    
            await login.validLogin(username,password);
           // await login.errorValidation();

         });
  

         When('Add product to the cart',async function () {
           const dashboard = this.pomanager.getDashboardPage();
            await dashboard.waitforele();
            await dashboard.pickItem();
            await dashboard.addToCart();
   
         });   

         Then('Verify product is displayed in the cart', async function () {
           
           const checkout =this.pomanager.getCheckoutPage();
           await checkout.productList();
           await checkout.checkoutDetails("ind");

         });
//  Then('Verify error message is displayed', async function () {
           
//             console.log("error validation");           

//          });
       
//npx cucumber-js --exit


