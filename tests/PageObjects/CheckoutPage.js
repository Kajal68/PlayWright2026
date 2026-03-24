const{expect} =require('@playwright/test');

class CheckoutPage{

constructor(page){
this.page=page;
this.productItems=page.locator("div li");
this.productName=page.getByText("ZARA COAT 3");
this.checkout=page.getByRole("button",{name :"Checkout"});
this.pickCountry=page.getByPlaceholder("Select Country");
this.country=page.getByRole("button",{name :"India"});
this.placeOrder=page.getByText("PLACE ORDER");
this.confirmMsg=page.getByText("Thankyou for the order.");
}

async productList(){
   await this.productItems.first().waitFor();
   await expect(this.productName).toBeVisible();
}

async checkoutDetails(country){
    await this.checkout.click();
    await this.pickCountry.pressSequentially(country);
    await this.country.nth(1).click();
    await this.placeOrder.click();
    await expect(this.confirmMsg).toBeVisible();

}


}
module.exports={CheckoutPage};
