// Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.

function funAns(str){
    let count = 0
    for(let letter of str){
        if(letter === "a" || letter === "e" || letter === "i" || letter === "o" ||  letter === "u" ){
            count++
        }
    }

    console.log(count);
}


funAns("heyishaan")

//Create an arrow function to perform the
const arrowFun = (str)=>{
    let count = 0
    for(let letter of str){
        if(letter === "a" || letter === "e" || letter === "i" || letter === "o" ||  letter === "u" ){
            count++
        }
    }
    console.log(count);
}

arrowFun("heyssaaaaa")
