// Q1- Use logical operator to find whether the age of a person lies between 10 and 20 
const prompt = require("prompt-sync")({sigint: true});
let age = prompt("Enter your age: ");
if(age>10 && age<20){
    console.log("your age lies between 10 and 20");
}
else{
    console.log("Your age doesn't lies between 10 and 20");
}


// Q2- Demonstrate the use of switch case statements in JS 
let num = prompt("enter your roll no : ");
num = Number.parseInt(num);
switch (num) {
    case 4122:
        console.log("Your roll no is 41221148");
        break;
    case 4111:
        console.log("Your roll no is 4111111");
        break;
    case 4100:
        console.log("Your roll no is 41000000");
        break;
    default:
        console.log("Your roll no is invalid")
}


// Q3- Write a JS program to find whether a number is divisible by 2 and 3
let b = prompt("Enter a number: ");
b = Number.parseInt(b);
if(b%2==0 && b%3==0){
    console.log("This no is divisible 2 and 3");
}
else{
    console.log("Given no is not divisible by 2 and 3");
}

// Q4- Write a JS program to find the whether a number is divisible by either 2 or 3
let c = prompt("Enter a number: ");
c = Number.parseInt(c);
if(c%2==0 || c%3==0){
    console.log("This no is divisible by 2 either 3");
}
else{
    console.log("Given no is not divisible by 2 either 3");
}