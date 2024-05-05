const prompt = require("prompt-sync")({sigint: true});

// Use of While loop 
let n = prompt("Enter the value of n: ")
n = Number.parseInt(n)
let i=0;
while(i<n){
    console.log(i)
    i++;
}

// Use of Do-while loop 
let b = prompt("Enter the value of b: ")
b = Number.parseInt(b);
let k = 4;
do{
    console.log(k)
    k++;
}while(k<b);
