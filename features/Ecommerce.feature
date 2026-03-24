Feature: Ecommmerce site validations
# @author Kajal
@Regression
#@foo
Scenario: Place the order

Given Login into site with "kajalpagare@gmail.com" and "Kajalpagare@123"
When Add product to the cart
Then Verify product is displayed in the cart


#npx cucumber-js --tags "@Regression" --exit
@validation
Scenario Outline: Placing multiple orders
Given Login into site with "<username>" and "<password>"
#Then Verify error message is displayed

Examples:
| username            | passsword      |
|kajalpagare@gmail.com| Kajalpagare@1023|
|hello@gmail.com      |Imhello@12      |

