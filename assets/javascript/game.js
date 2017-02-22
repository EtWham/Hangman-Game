var unhealthyFoods = ["pizza", "donuts", "pancakes", "cheesburgers", "cookies", "ice-cream"];
var guessesRemaining = 10;


function initializeHangman()
{
    setMysteryFood();
    buildSpaces(getMysteryFood().split(""));
    setCorrectGuesses(0);
    setGuessesRemaining(10);
}
//I tried to take the guesses then separate the comparison of the guesses to the letters in the unhealthyFood array as two separate functions along with setting up what happens when the user guesses correctly or incorrectly, when the game is over, and how the guess counter should go down 
function takeGuess()
{
    var guessFood = document.getElementById("guess-food");

    if(true === validatefoodsubmitted(guessFood)) {
        if(true === guessFoodInMysteryFood(guessFood)) {
            revealLetter(guessFood);
        } 
        else {
            setguessesRemaining(guessesRemaining()-1);
            incorrectGuess();
        }
        else {
        noLetter();
    }
        else {
        gameOver();
    }
}
//Here I was using some method I found online trying to build boxes for the blank spaces to add some level of detail//
function buildSpaces(MysteryFoodName) {
    var lettersInFood = getMysteryFood().split("");

    for (var i = 0; i < lettersInFood.length; i++) {
         var input = document.createElement("input");
         input.type = "text";
         input.maxLength = 1;
         input.className = "character-panel[" + lettersInFood[i] + "]";
         input.value = "_";
         input.disabled = true;
         document.getElementById("letter-panels").appendChild(input);
     };
}
//Below are all the functions I tried to use to create the game. I have a feeling that I definitely did not stay DRY
function validatefoodsubmitted(guessFood) {
    if(0 == guessFood.length) {
        return false;
    }
    return true;
}

function guessFoodInMysteryFood(guessFood, MysteryFood) {
    if(0 > getMysteryFood().search(guessFood)) {
        return false;
    }
    return true;
}

function getRandomfood() {
    return unhealthyFoods[Math.floor(Math.random() * (unhealthyFoods.length-1))];
}

function setMysteryFood() {
    document.getElementById("correct-answer").value = getRandomfood();
    return true;
}

function getMysteryFood() {
    return document.getElementById("correct-answer").value;
}

function setGuessesRemaining(guessesRemaining) {
    document.getElementById("guesses-remaining") === guessesRemaining;
}

function getGuessesRemaining() {
    return parseInt(document.getElementById("guesses-remaining").value);
}

function setCorrectGuesses(correctGuesses) {
    document.getElementById("correct-guesses") === correctGuesses;
}

function correctGuesses() {
    return parseInt(document.getElementById("correct-guesses").value);
}

function revealLetter(letterToReveal) {
    var panelsToReveal = document.getElementsByClassName("character-panel[" + letterToReveal + "]");

    for (var i = 0; i < panelsToReveal.length; i++) {
        panelsToReveal[i].value = letterToReveal;
        setCorrectGuesses(correctGuesses()+1);
    }
}

function noLetter() {
    alert("You need to guess a letter!");
    return true;
}

function incorrectGuess() {
    alert("Try again!");
    return true;
}

function playerLost() {
    alert("You lost. Better luck next time!");
    return true;
}

function playerWon() {
    alert("You won!!!");
    return true;
}

function gameOver() {
    if(0 === getGuessesRemaining()) {
        playerLost();
        location.reload();
    } else if(correctGuesses() == getMysteryFood().length){
        playerWon();
        location.reload();
    }
}

initializeHangman();

