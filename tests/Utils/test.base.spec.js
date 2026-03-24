const {test} = require('@playwright/test');


exports.customtest =test.extend(
{
    testDataForOrder :  {

    username:"kajalpagare@gmail.com",
    password: "Kajalpagare@123",
    productName:"ZARA COAT 3"
    }
    }
);