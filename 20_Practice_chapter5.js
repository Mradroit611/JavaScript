const prompt = require("prompt-sync")({sigint: true});
// Q1- Create an array of numbers and take input from the user to add numbers to this array 
let n = prompt("How many elements you want to put in an array: ")
let arr =[];
for(let i=0; i<n; i++){
    let a = prompt("Enter the value at index["+i+"] : ")
    a = Number.parseInt(a)
    arr[i] = a;
}
console.log(arr)

// Q2- keep adding numbers to the array in 1 until 0 is added to the array 
console.log("New array creation")
let ar =[];
let u = 0;
let k ;
do{
    k = prompt("Enter the value at index["+u+"] : ");
    k = Number.parseInt(k)
    ar[u] = k;
    u++;
}while(k!=0);
console.log("Elements of an array are: "+ar)

// Q3- Filter for numbers divisible by 10 from a given array 
console.log("The elements which are divisble by 10 in this array are as follows: ")
let array = [];
let g = 0;
ar.forEach((element)=>{
    if((element%10)==0){
        array[g]= element;
        g++;
    }
    else{
        // console.log("NIL")
    }
})
console.log(array)

// ---------------------OR---------------------------
console.log("The elements which are divisble by 10 in this array are as follows: ")
let arrr = ar.filter((x)=>{
    return x%10==0;
})
console.log(arrr);


// Q4- Create an array of square of given numbers 
console.log("The square of the given numberes in an array: ")
let arrrr = ar.map((x)=>{
    return x*x;
})
console.log(arrrr);


// Q5- Use reduce to calculate the factorial of a given number from an array of first n natural numbers ( n being the number whose factorial needs to be calculated) 
console.log("The factorial of the given numberes in an array: ")
let arrrrr = arr.reduce((x,y)=>{
    return x*y;
})
console.log(arrrrr);