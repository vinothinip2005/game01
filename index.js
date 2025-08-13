var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;
var timeLeft = 30;
var timerId;
function startTimer(){
    timerId = setInterval(function(){
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;

        if(timeLeft <= 0){
            clearInterval(timerId);
            document.getElementById('btn').disabled = true;
            display("Time's up! Game Over. The number was " + randomNumber);
        }
    }, 1000);
}

function guessing(){
    var guess = parseInt(document.getElementById('guessInput').value);
    attempts++;
    if(guess === randomNumber){
        clearInterval(timerId); 
        display("Congratulations! You won the game in " + attempts + " attempts.");
        document.getElementById('btn').disabled = true;
    }
    else if(guess < randomNumber){
        display("Too low! Try a higher number.");
    }
    else{
        display("Too high! Try a lower number.");
    }
}

function display(msg){
    document.getElementById('msg').textContent = msg;
}

startTimer();