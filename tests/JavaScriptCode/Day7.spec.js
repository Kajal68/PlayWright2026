// object is colletion of properies and values
let person = {
    name: "John",
    age: 30,
    city: "New York",
    firstname : "Johny",
    lastname : "Smith",

    fullName : function(){
        return this.firstname + " " + this.lastname;
    }
}
console.log(person.fullName()); 
console.log(person.name); //John
console.log(person.age);        
console.log(person.city);

console.log(person['name']);
person.name ="Jane";
console.log(person.name); //Jane
person.gender="female";
console.log(person.gender); //female
delete person.age;
console.log(person.age); //undefined
console.log('age' in person);
console.log('name' in person);

for(let key in person){

    console.log(key + ": " + person[key]);
}