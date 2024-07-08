const ranInt = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastresult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let previousGuess = [];
let numsGuess = 1;

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess); 
        validateGuess(guess);
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid integer input')
    } else if(guess < 1){
        alert('Please enter a valid integer input')
    }  else if(guess > 100){
        alert('Please enter a valid integer input from 1 to 100')
    } 
}
function checkGuess(guess){

}
function displayGuess(guess){

}
function displayMessage(message){

}
function endGame(){

}
function newGame(){

}