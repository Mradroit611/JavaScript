let num = [1, 2, 3 , 4]
let b = num.toString()
console.log(num)
console.log(b)
console.log(num.join(" "))
console.log(num.join(" and "))

let c = num.pop(); //pop returns the popped element
console.log(num, c)

let d = num.push(5); //push return the length of new array
console.log(num, d)

let e = num.shift(); //return the removed first element of an array
console.log(num, e);

let f = num.unshift(6); //returns the length of new array after adding element at the begining of an array
console.log(num, f);

