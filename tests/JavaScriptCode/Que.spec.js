//You have an array called productPrices with various product prices.
let productPrices = [20, 45, 60, 15, 80, 30];

//Apply a 10% discount to all prices using the map method and store the results in a new array called discountedPrices.
let discountedPrices = productPrices.map(price => price * 0.9);

//Use the filter method to create a new array called affordableProducts containing only products priced below $50
let affordableProducts = discountedPrices.filter(price => price < 50);
console.log(affordableProducts);
//Calculate the total cost of all items in the affordableProducts array using the reduce method.
let totalCost = affordableProducts.reduce((acc, curr) => acc + curr, 0);
console.log("Total cost of affordable products: " + totalCost); 
