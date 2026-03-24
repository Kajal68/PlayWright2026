//ES6 engine
//class is a blueprint for creating objects with predefined properties and methods.
//ES6 engineering introduced class syntax in JavaScript, which provides a more elegant and concise way to create objects and deal with inheritance.

class Person{

    age = 30;
    get location(){
        return "India";
    }

    //constructor is a method  which executes y defualt when you create object of the class.

    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
        console.log("Constructor is called");
    }

    //methods
    fullName(){
        return this.firstname + " " + this.lastname;
    }
}

module.exports = Person;
