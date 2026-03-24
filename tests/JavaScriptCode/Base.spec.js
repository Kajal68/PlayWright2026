const Person=require('./Day8.js');


let p1 = new Person("Rose", "Doe");
console.log(p1.age);
console.log(p1.location);
console.log(p1.fullName());


//Create an array called expenses that contains at least 5 different expense amounts.

let arr = [200,100,300,400,500];
//Calculate the total expenses by summing all the elements of the array.
let total = arr.reduce((acc, curr) => acc + curr, 0);
console.log("Total expenses: " + total);
//Find the highest and lowest individual expenses within the array.
let maxExpense = Math.max(...arr);
let minExpense = Math.min(...arr);
console.log("Highest expense: " + maxExpense);
console.log("Lowest expense: " + minExpense);
//Sort the expenses in ascending order and print the sorted array.

//Create an array named studentNames with the names of your students.
let studentNames = ["Alice", "Bob", "Charlie", "David", "Eve"];
//Add a new student name to the beginning of the array.
studentNames.unshift("Frank");
console.log(studentNames);

//Remove the last student name from the array.

studentNames.pop();
console.log(studentNames);
//Alphabetize the student names within the array.
studentNames.sort();
console.log(studentNames);






arr.sort((a,b) => a-b);
console.log(arr);

    
   