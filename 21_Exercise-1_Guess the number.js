/* Write a JS program to generate a radom number and store it in a variable. The program then takes the 
input from user to tell them whether the guess was correct, greater or less than the original number.
100 - (no of responses) is the score of the user. 
The program is expected to terminate once the number is guessed. Number should be between 1-100. */
const prompt = require("prompt-sync")({sigint: true});

let x = Math.floor(Math.random() * 101);
let r;
let i = 0;
// console.log(x)       char heyr = 'h'
do{
    r = prompt("Guess the number between 1-100: ")
    if(r>x && r<=100){
        console.log("The guess no is greater than the correct number")
    }
    else if(r<x && r>=0){
        console.log("The guess no is smaller than the correct number")
    }
    else if(r==x){
        console.log("Congratulation!! Your score is: "+ (100-i))
    }
    else{
        console.log("Invalid number")
    }
    i +=1;
}while(r!=x);