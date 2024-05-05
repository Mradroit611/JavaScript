let num = [1, 2, 3, 6, 7]
let nu = [10, 11, 12, 13]
let n = [6, 7, 8, 9]

console.log(num);
console.log("Lenght of an array: " + num.length)

delete num[0]; //length of an array does not effect
console.log(num)
console.log("Length of new array: " +num.length)

let newArray = num.concat(n);
console.log(newArray);

let newArr = num.concat(n, nu);
console.log(newArr)

//sort method
let numbers = [ 231, 222, 200, 201, 202]
console.log(numbers.sort())

//sorting using compare function
let compare =(a, b)=>{
    return a-b; //for ascending order
}
let comp = (p,q)=>{
    return q-p; //for descending order
}
let no = [200, 125, 100, 201, 500]
console.log(no.sort(compare));
console.log(no.sort(comp));

console.log(no.reverse()) // reverse the order of an array


//use of splice
let na = [201, 222, 333, 321, 232, 555]
console.log(na);
na.splice(2, 3, 1222, 1422, 2332, 5004);
console.log(na)


// use of slice 
let nom = [11, 223, 3434, 232, 232]
console.log(nom.slice(2))
let nome = nom.slice(2,4)
console.log(nome)

