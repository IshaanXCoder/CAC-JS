function favLang(lang){
    console.log(`fav lang is ${lang} `);
}

favLang("JS")


// function summm(a,b){
//     console.log(a+b);
// }
//OR
function summmm(a, b){
    c=a+b;
    return c;
}

console.log(summmm(10, 20));


// we prefer writing arrow functions!
// examplee of the sum function

const arrowSum = (a, b)=>{
    c=a+b;
    return c;
}

console.log(arrowSum(7,8));

const arrowPro = (a,b)=>{
    c=a*b;
    return c;
}
console.log(arrowPro(8,9))