let num = [1, 2, 3, 4, 5]
for(let i=0; i<num.length; i++){
    console.log(num[i]);
}


// forEach loop 
num.forEach((element)=>{
    console.log(element*element);
})


// Array.from 
let n = "sanjay"
let na = Array.from(n) //it will create an array from string
console.log(na)


//for-of loop
for(let i of na){
    console.log(i);
}


// for-in loop 
for(let i in na){
    console.log(i); //gives the index no of an array
}