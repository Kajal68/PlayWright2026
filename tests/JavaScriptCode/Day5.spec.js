
//a block of code wrap in one method called function
//it has to be return

function add(a,b){
   return a+b;

}

let sum =add(2,3); //5
console.log(sum);

//do not have name -> Anynomous function--function expressions

let sumofdigit=function(c,d){
    return c+d;

}
let sum1 = sumofdigit(4,5); //9
console.log(sum1);

let digit = (m,n)=> m+n
console.log(digit(6,7)); //13