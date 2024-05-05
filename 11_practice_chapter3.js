/* Q1- WAP to print the marks of a student in an object using for loop 
obj = { harry: 98, rohan: 70, aakash: 7} */
const marks ={
    sanjay: 98, 
    adroit: 70, 
    codingcheff: 7
}
for(let i=0; i<Object.keys(marks).length; i++)
{
    console.log("The marks of "+ Object.keys(marks)[i] +" are " +  marks[Object.keys(marks)[i]]+"");
}

// Q2- WAP to program in Q1 using for-in loop 
for(let f in marks){
    console.log("The marks of "+ f + " are " + marks[f])
}


// Q3- WAP to print "try again" until the user enters the correct number 
const prompt = require("prompt-sync")({sigint: true});
let n = 5;
let i = 0;
while(i!=n){
    let a = prompt("Enter the value of n: ")
    console.log("You entered the wrong no. Please try again!");
    if(a!=n){
    }
    else{
        break;
    }
}

// Q4- Write a function to find mean of 5 number 
const mean =(t,y,u,r,e)=>{
    return (t+y+u+r+e)/5;
}
console.log("Mean of 5 numbers: "+mean(5,5,5,5,5));