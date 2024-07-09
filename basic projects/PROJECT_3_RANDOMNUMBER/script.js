const maxNum = 100
const minNum = 1
const ans = Math.floor(Math.random() * (maxNum - minNum) + minNum)
console.log(ans);

let attempt = 0
let guess
let running = true

while(running == true){

    let guess = window.prompt("guess a number between 0 to 100");
    guess = parseInt(guess);

    if(isNaN(guess)){
        alert("Pls enter a valid integer input");
    } else if(guess < 1 || guess > 100){
        alert("Pls enter a number betw 1 to 100");
    } else { 
        attempt++
        if(guess < ans){
            alert("UPAR SOCH")
        }
        else if(guess > ans){
            alert("LIMIT ME REH")
        }
        else if(guess == ans){
            alert(`GREAT! Thats Correctt! it took you ${attempt} attempts!`)
            running = false;
        }
    }



}