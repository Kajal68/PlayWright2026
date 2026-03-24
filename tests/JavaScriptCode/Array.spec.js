

const color = ["red","green","blue","yellow"];

console.log(color.length);
console.log(color[0]);
console.log(color[1]);
console.log(color[2]);
console.log(color[3]);

color.push("orange");
console.log(color);

const lastColor = color.pop();
console.log(lastColor);
console.log(color);

console.log(color.indexOf("green"));
console.log(color.indexOf("purple")); //not found, returns -1

console.log(color.unshift("pink")); //adds to the beginning of the array
console.log(color);

const firstColor = color.shift(); //removes the first element of the array
console.log(firstColor);
console.log(color);

const remove = color.splice(1, 2,'black','pink'); //removes 2 elements starting from index 1
console.log(remove);
console.log(color);

color.forEach((color, index) => {
    console.log(`${index}: ${color}`);
});

function greet(name,callback){
    console.log(name,callback);
}
greet('John','Hello');

function greeting(name, callback) {
    callback(`Hello, ${name}!`);
}
greeting('Geek', message => console.log(message));

const obj = { name: 'Riya' };
obj.age = 21;
console.log(obj);

console.log([1, 2, 3].reduce((a, b) => a + b));//adds numbers in the array, together using the reduce mehtod

console.log('6' - 1);

console.log(1 + '5');
