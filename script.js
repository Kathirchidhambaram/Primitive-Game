'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
console.log(secretNumber)


const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const hiddenNumberBox = document.querySelector(".number");
const bodyStyle = document.body.style;

const defaultValues = {
    'message' : "Start guessing...",
    'score' : 20,
    'hiddenNumberBox' : "?",
    'bodyBackgroundColor' : "#222"
}
function clickLogic(){
    let guessedNumber = parseInt(document.querySelector(".guess").value);
    if(parseInt(score.textContent)!=0)
    {    
        if(!guessedNumber)
        message.textContent = "⛔ No Number!"
        
        if(guessedNumber===secretNumber)
        {
            message.textContent = '🎉 Correct Number!'
            if(parseInt(score.textContent)>parseInt(highScore.textContent))
            highScore.textContent = parseInt(score.textContent)
            hiddenNumberBox.textContent = secretNumber
            bodyStyle.backgroundColor = "#60b347"
        }
        else{
        if(guessedNumber<secretNumber)
            message.textContent = "Too low..."
        else if(guessedNumber>secretNumber)
            message.textContent = "Too high..."
         score.textContent = parseInt(score.textContent)-1
        }
    }
    
    else
    message.textContent = "You lost the Game!"

}

function resetEverything()
{
    message.textContent = defaultValues.message;
    score.textContent = defaultValues.score;
    hiddenNumberBox.textContent = defaultValues.hiddenNumberBox;
    bodyStyle.backgroundColor = defaultValues.bodyBackgroundColor;
    secretNumber = Math.trunc(Math.random()*20)+1;
    console.log(secretNumber)
}

document.querySelector(".check").addEventListener('click', clickLogic);
document.querySelector(".again").addEventListener('click', resetEverything);