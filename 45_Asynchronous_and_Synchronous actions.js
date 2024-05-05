const prompt = require("prompt-sync")({sigint: true});

// Example of Synchronous actions
let a = prompt("Enter your first name: ")
let b = prompt("Enter your last name: ")
console.log("Your full name is : "+a+" "+b);


// Example of Asynchronous actions
console.log("Start");
setTimeout(function(){
console.log("hey I'm good");
},3000)
console.log("End");