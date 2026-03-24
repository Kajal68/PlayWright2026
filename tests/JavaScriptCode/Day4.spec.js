let fruits =["apple","mango","banana","grapes"];
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits);

fruits.sort(); //sorts the array in ascending order
console.log(fruits);
console.log(fruits.sort().reverse()); //sorts the array in descending order

var score1= [12,3,20,30,40,17,19];
console.log(score1.sort());
score1.sort(function(a,b){
    return a-b;
})

score1.sort((a,b)=> a-b); //sorts the array in ascending order
console.log(score1);

score1.sort((a,b)=> b-a); //sorts the array in ascending order
console.log(score1);