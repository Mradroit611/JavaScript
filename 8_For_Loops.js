// Program to find the sum of first n natural numbers 
const prompt = require("prompt-sync")({sigint: true});
let sum =  0;
let n = prompt("Enter the value of n: ")
n = Number.parseInt(n)
for(let i=0; i<n; i++){
    sum += (i+1);
}
console.log("The sum of first n natural no is: " + sum)
// console.log(i) - it will throw error bcoz let variable works for blocks the value of i will work only in block of the loops, for out of the block you have to declare the variable i

// Use of for-in-loop 
let obj ={
    Sanjay : 90,
    Adroit : 80,
    Tech : 50
}
for (let a in obj) {
   console.log("marks of " + a + " are " + obj[a]);
}

// Use of for-of loop 
for(let b of "Sanjay"){
    console.log(b)
}