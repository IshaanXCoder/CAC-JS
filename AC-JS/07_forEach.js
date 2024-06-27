let iit = ["bombay", "roorkee", "delhi", "kanpur"]

iit.forEach(function capital(val){
    console.log(val.toUpperCase());
})

let calcSq = (value) =>{
    console.log(value*value);
}

let arr = [1,2,3,4,5,6]
// arr.forEach(function square(num){
//     console.log(num**2);
// })

arr.forEach(calcSq)


