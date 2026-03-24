const { LoginPage } = require("./LoginPage.js");
const { DashboardPage } = require("./DashboardPage.js");  
const { CheckoutPage } = require("./CheckoutPage.js");

class POManager{

    constructor(page){

        this.page=page;
        this.loginPage=new LoginPage(this.page);
        this.dashboard=new DashboardPage(this.page);
        this.checkout=new CheckoutPage(this.page);
    }

    getLoginPage(){
        return this.loginPage;
    }

    getDashboardPage(){
        return this.dashboard;
    }

    getCheckoutPage(){
        return this.checkout;
    }

}
module.exports={POManager};
