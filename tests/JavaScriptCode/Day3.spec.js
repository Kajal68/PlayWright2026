//Arrays

let marks = Array(5); //array of size 5
marks[0] = 90;
marks[1] = 80;
marks[2] = 70;
marks[3] = 60;
marks[4] = 50;  
console.log(marks);

let marks1= new Array(90,80,70,60,50); //array literal

console.log(marks1);

let marks2 = [90,80,70,60,50]; //array literal

//console.log(marks2);

console.log(marks.length); //length of the array
//console.log(marks2.length);

marks2.pop(30); //removes the last element of the array and returns it, we can also pass an argument
//console.log(marks2);

marks2.push(30); //adds an element to the end of the array and returns the new length of the array, we can also pass an argument
//console.log(marks2);

marks2.unshift(40); //adds an element to the beginning of the array and returns the new length of the array, we can also pass an argument
//console.log(marks2);

marks2.indexOf(70); //returns the index of the first occurrence of the element in the array, we can also pass an argument
//console.log(marks2.indexOf(70));

marks2.includes(80); //returns true if the element is found in the array, otherwise returns false, we can also pass an argument
//console.log(marks2.includes(80));

marks2.slice(1, 4); //returns a new array containing the elements from the start index to the end index (exclusive), we can also pass an argument
//console.log(marks2.slice(1, 4));

submarks = marks2.slice(1, 4); //returns a new array containing the elements from the start index to the end index (exclusive), we can also pass an argument
//console.log(submarks);

for(let i = 0;i<marks.length;i++){
    console.log(marks[i]);
}

//console.log(marks2.includes(120));

var sum=0;
for(let i = 0;i<marks.length;i++){
//sum = sum + marks2[i];

}
console.log(sum);

marks2.reduce((sum,totalMarks) => sum + totalMarks,0);
let total= marks2.reduce((a,b)=> a+b,0);
console.log(total);

var scores = [12,17,19,,20,30,40];
var otherArray= [];
for(let i =0;i<scores.length;i++){
    if(scores[i]>20){
  //      console.log(scores[i]);
    }
    else if(scores[i]%2==0){
//        console.log(scores[i]);
        otherArray.push(scores[i]);
    }       
}
console.log(otherArray);
let newScore=scores.filter(score => score >20);
console.log(newScore);

let evenScore = scores.filter(score => score%2==0);
console.log(evenScore);


let MapValue= scores.map(score => score*2);
console.log(MapValue);


