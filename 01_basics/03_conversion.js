let number = "23abc"

console.log(number);
valueinnum = Number(number)

console.log(valueinnum);

let abc = 23
let abcinnum = String(abc)
console.log(abcinnum);
console.log(typeof abcinnum);

let num = undefined
let negnum = -num
console.log(negnum);
console.log(typeof negnum);

str1 = "hey"
str2 = "ishaan"
str3 = str1 + str2 + 69
console.log(str3);

console.log("1" + 2 + 3);   
console.log(1 + 2 + "3");


// Prefix and postfix operators

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
