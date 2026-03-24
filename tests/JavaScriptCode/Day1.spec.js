

console.log("Hello, Delulu world!");

//variables/datatypes are loosely coulple 

var a = 14; //can be use and can be reassigned

//ES6 engine started using let and const
let b = 5; //can be reassigned
const c1 = 6; //cannot be reassigned

console.log(a, b, c);

let d = 10;
console.log(typeof(d));

let S ="Delulu";
console.log(typeof(S));

let isDelulu = true;
console.log(typeof(isDelulu));
console.log(!isDelulu);

let a1 =null;
console.log(typeof(a1));

var c= a+b;
console.log(c);



//we can not redeclared a variable with let keyword but possible with var
//let
//let a1 = a-b; //SyntaxError: Identifier 'a1' has already been declared
a1 = a-b; //reassigning a value to a variable can be possible
console.log(a1);

const c2 = 10;
//c2 = 20; //TypeError: Assignment to constant variable. we cannot reassign a value to a variable declared with const keyword           
