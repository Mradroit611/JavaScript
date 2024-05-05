let arr = [202, 233, 100]

// Array map() method

console.log("----------------Map-------------------")
let a = arr.map((value)=>{
    console.log(value);
    return value+1;
})
console.log(a)

// with three arguments 
console.log("\n----------three arguments-----------")
let b = arr.map((value, index, array)=>{
    console.log(value, index, array);
    return value+index;
})
console.log(b)


// Array filter() method
console.log("\n--------array filter-----------")
let arr2 = [12, 23, 32, 1, 43, 2, 3]
let c = arr2.filter((value)=>{
    return value<20; //return the new array with elements which are less than than 20
})
console.log(c)


// Array reduce() method 
console.log("\n-----------array reduce----------")
let arr3 = [2, 3, 1, 2, 5, 2]
let d = arr3.reduce((h1, h2)=>{
    return h1 + h2;
})
console.log(d)

/* The output will be 15 
first it will take 2 and 3 then sum of them will be 5
second time this will take the sum of 2 and 3 which was 5 and then takes next no which is 1 (in short it will take 5 and 1 in second time and then the sum will be 6)
third time it will take 6 and next no which is 2 and then the sum will be 8
and then next time it will take 8 and 5 the sum will be 13
now it will take 13 and 2 the sum will be 15 */