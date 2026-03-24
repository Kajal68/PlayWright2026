class DashboardPage{

    constructor(page){
        this.page=page;
        this.allItems=page.locator(".card-body b");
        this.items = page.locator(".card-body");
    }


   async waitforele(){
  
   await this.page.waitForLoadState('networkidle');
   await this.allItems.first().waitFor();
    
   }

   async pickItem(){
   await this.items.filter({hasText:"ZARA COAT 3"})
   .getByRole("button",{name:"Add to Cart"}).click();
   }

   async addToCart(){

       await this.page.getByRole("listitem").getByRole('button',{name:"Cart"}).click();

   }
}

module.exports={DashboardPage};