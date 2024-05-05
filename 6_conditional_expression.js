const prompt = require("prompt-sync")({sigint: true});
let age = prompt("Hey what's your age?")
age = Number.parseInt(age) //converting the string to a number
console.log(typeof age);
// let b = prompt("enter your name: ");
// console.log(b)
if(age>0){
    console.log("Valid age");
}
else if(age>0 && age<15){
    console.log("You can't vote");
}
else if(age>18){
    console.log("you can vote");
}
else{
    alert("This is an invalid age")
}
console.log("You can", (age<18? "not vote" : "vote"));