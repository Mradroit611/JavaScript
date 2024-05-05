console.log('Operators in JS');
// Arithmetic Operators 
let a = 5;
let b = 15;
console.log("a + b =", a+b );
console.log("a - b =", a-b);
console.log("a / b =", a/b);
console.log("a * b =", a*b);
console.log("a ** b =", a**b);
console.log("a % b =", a%b);
console.log("a++ =", a++);
console.log("a =", a);
console.log("++a =", ++a);
console.log("a-- =", a--);


// Assignment Operators 
b = 5;
b += 5; //same as b = b+5
console.log("b =", b);
b *= 5;
console.log(b);

// Comparison Operator 
let comp1 = 4;
let comp2 = 6;
console.log("comp1 == comp2 is ", comp1 == comp2);
console.log("comp1 != comp2 is ", comp1 != comp2);
console.log("comp1 === comp2 is ", comp1 === comp2);
console.log("comp1 !== comp2 is ", comp1 !== comp2);
console.log("comp1 > comp2 is ", comp1 > comp2);


// Logicall Operators 
let x = 3;
let y = 7;
console.log(x<y && x==5);
console.log(x>y || x==5);
console.log(!false);
console.log(!true);