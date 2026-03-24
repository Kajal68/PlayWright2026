

let day = "Monday ";

console.log(day.length);
let subday = day.slice(0,3);
console.log(subday);
console.log(day[0]);
console.log(day.toUpperCase());
console.log(day.toLowerCase());
console.log(day.includes("day"));
console.log(day.indexOf("n"));
console.log(day.replace("Mon","Tues"));
console.log(day.trim().length);

let splitDay = day.split("s"); 
//below code is not triming 
//console.log(splitDay[1].trim().length);
//console.log(splitDay[1].trim().toUpperCase());
//console.log(splitDay[1].trim());

console.log(splitDay);


let date ='23';
let nextDate = '27';

let num = parseInt(date) - parseInt(nextDate);
console.log(num);
num.toString();
console.log(num);

let newQuote = day+ "now is funday";
console.log(newQuote);

let count =0;
let val = newQuote.indexOf("day");
while(val != -1){
    count++;
    val = newQuote.indexOf("day",val+1);
}
console.log(count);
