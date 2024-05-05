const prompt = require("prompt-sync")({sigint: true});
/* Q1- What will the following print in javascript 
     console.log("san\"".length) */
// Ans. 4 

// Q2- Explore the includes, startsWith & endsWith suntions of a string 
let na = "Sanjay, Mr.adroit and Coding_cheff are attending the meeting";
let san = prompt("Enter the name: ")
console.log(`${san} ${na.includes(san)? 'is':'is not'} attending the meeting`)

// Q3- WAP to convert a given string to lower case 
let nam = "SANJAY"
console.log(nam.toLowerCase());

/* Q4- Extract the amount out of the string 
    "Please give Rs 1000" */
let sen = "Please give Rs 1000"
let thousand = sen.slice(15)
console.log(thousand)

// Q5- Try to change 4th character of a given string were you able to do it 
let character = sen.replace("1000","500");
console.log(character);