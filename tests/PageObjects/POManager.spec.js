const { CheckoutPage } = require("./CheckoutPage.spec");
const { DashboardPage } = require("./DashboardPage.spec");
const { LoginPage } = require("./LoginPage.spec");



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