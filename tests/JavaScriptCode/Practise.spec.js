
const person =
{
    name: "Kajal",
    age: 25,
    city:"Pune",
    greet : function(){
        console.log("Hello, my name is " + this.name);
    }
}

person.name;
person.greet();

function sayHello(){
    return "Hello!!!";
}

const hellomsg = sayHello();
console.log(hellomsg);



//ananymous function
const greet = function(name){
    return "Hello, " + name + "!";

}

console.log("-------------------------------");

//diff between var, let and const

var x =10; //globally scoped
if(true){
    var x =20; //var is function scoped, so it will overwrite the previous value of x
    console.log(x); //20
}

let y = 10;
if(true){
    let y = 20; //let is block scoped, so it will not overwrite the previous value of y
    console.log(y); //20
}
const z = 10;
if(true){
    const z = 20; //const is block scoped, so it will not overwrite the previous value of z
    console.log(z); //20
}

