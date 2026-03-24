class LoginPage{

    constructor(page){
        this.page = page;
        this.username = page.getByPlaceholder("email@example.com");
        this.password=page.getByPlaceholder("enter your passsword")
        this.signin=page.getByRole('button',{name:"Login"});
        this.error=page.locator("#toast-container");
    }

    async goTo(){

           await this.page.goto("https://rahulshettyacademy.com/client");

    }
    async validLogin(username,password){
         await this.username.fill(username);
         await this.password.fill(password);
         await this.signin.click();
 
    }

    async errorValidation(){

     await this.error.textContent();
     
    }
}

module.exports = {LoginPage};
