//loops and conditions

const flag = true;

if(!flag)
{
console.log("Flag is true");
}
else
{
    console.log(flag);
console.log("Flag is false");
}

//if condition is matches while loop will execute num of times

while(flag){
    console.log("Flag is true");
    break; //to break the loop
}

let i =0;
while(i<5){
    i++;
  //  console.log(i);
}

do{
    console.log("This is do while loop");
}while(false); //do while loop will execute at least once even if the condition is false

do{
    i++;
}while(i<5)
   // console.log(i); //i will be 6 because it will execute at least once and then check the condition

for(let j=0; j<5; j++){
   // console.log(j);
}

for(k=0;k<=10;k++){

    // if(k%2==0){
    //  //   console.log(k);
    // }
    //2 and 3
     if(k%2==0 && k%3==0){
        console.log(k);
    }
    //2 or 5
    else if(k%2==0 || k%5==0){
        console.log(k);
    }
}

let n=0;
for(let m=0; m<100; m++){
    if(m%3==0 && m%5==0){
        n++;
        console.log(m)
        if(n==3)
            break
    }
}
