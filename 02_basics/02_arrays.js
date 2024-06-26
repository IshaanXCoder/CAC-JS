let var1 = ["hey", "my", "name"]
let var2 = ["Ishaan", "kesarwani"]

console.log(var1);
//just for comparison

var1.push(var2)
console.log(var1);
// apparantely var2 is inserted as an whole in var1

console.log(var1.concat(var2));
// isse desired outcome milgya

// better approach is using spread method
console.log(...var1, ...var2);

console.log(Array.from("ishaan"));

let x = 1
let z = 2
let y = 3
console.log(Array.of(x,y,z));