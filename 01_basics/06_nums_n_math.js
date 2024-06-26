const balance = new Number(7348.356248)

console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));



// +++++++++++++++++++++++++++MATH_+++++++++++++++++++++++++++

console.log(Math.abs(-4));
// absolute value
console.log(Math.ceil(4.010101));
// Ceil means ceiling, theefore the output will be next integer
// similarly floor will be like GIF
console.log(Math.floor(4.010101));
console.log(Math.max(4,5,6,3,2));
console.log(Math.min(4,5,6,3,2));


console.log(Math.random());
// results a number between 0 and 1
console.log(Math.floor((Math.random() * 10)));
// value will be  a WHOLE NUMBER!
// now to obtain natural numbers, add a 1
console.log(Math.floor((Math.random() * 10 + 1)));

const min = 10
const max = 15

console.log(Math.floor(Math.random() * (max - min + 1) + min));
