function Avg(x,y){
    return (a+b)/2;
}

const sum = (p,q)=>{
    return p+q;
}

const succ = () =>{
    console.log("Program has been esecuted successfully")
    return "Hello";
}

let a = 5;
let b = 15;
let c = succ();

console.log(c)
console.log("Average of a and b is: " + Avg(a,b));
console.log("The sum of a and b is: " + sum(a,b));
succ();
