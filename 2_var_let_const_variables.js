// Use of "var" 
var a = 45;
var b = "sanjay"
var c = null
{
    var a = 20;
    console.log(a) //this will gives output 20
}
console.log(a) //This will also give 20, this will take the value of the block a 

// Use of let 
let d = 25;
let e = "sanjay";
{
    let d = 15;
    console.log(d); //the output will be 15
}
console.log(d); // the output will be 25, because let not take the value of block variables, it take block variables in blocks not outside of the block


// Use of const 
const author = "sanjay";
// author = "coding_cheff"    - this will throw an error because const cannot be changed
console.log(author)
