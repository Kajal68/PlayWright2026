const { Before, After, BeforeStep, AfterStep, Status } = require("@cucumber/cucumber");
const {POManager} = require('../../tests/PageObjects/POManager.spec');   
const {chromium}  = require('playwright') ;

//Before({tags:'@foo'}, async function(){ 

Before(async function(){ 

           const browser =  await chromium.launch({headless:false});
           const context = await browser.newContext();
           this.page = await context.newPage();
           this.pomanager = new POManager(this.page);

});

After(async function (){
    console.log('Test finished and browser has closed');
});

BeforeStep(function(){


});

AfterStep(async function ({result}){

    if(result.status==Status.FAILED){

        await this.page.screenshot({path:'cucumimage.png'});
    }

});