//inheritance is a fundamental concept in object-oriented programming that allows a new class (called a subclass or child class) to inherit properties and behaviors (methods) from an existing class (called a superclass or parent class). This promotes code reusability and establishes a natural hierarchical relationship between classes.

//In JavaScript, you can achieve inheritance using the `extends` keyword. The subclass can override methods of the superclass to provide specific implementations or add new methods and properties to enhance functionality.   

const Person=require('./Day8.js')
class  Pet extends Person{

    get location(){
        return "BlueCross";
    }
constructor(firstname, lastname){
//call parent class constructor using super keyword
super(firstname, lastname);

}
}

let pet = new Pet("Tom", "Jerry");
console.log(pet.fullName());
console.log(pet.location);
