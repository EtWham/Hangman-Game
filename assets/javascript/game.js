// <script>

// window.onload = function () {

//   var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
//         'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
//         't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
//   var food = ["pizza", "donuts", "pancakes", "cheeseburgers", "cookies"]

//   var guessesRemaining = 10;

//       var userText = document.getElementById("user-text");

//       var wins = 0;
//       var losses = 0;
//       var ties = 0;


//       var html = "<p>Press r, p, or s to play again!</p>" +
//           "<p>wins: " + wins + "</p>" +
//           "<p>losses: " + losses + "</p>" +
//           "<p>ties: " + ties + "</p>";

//           document.getElementById("game").innerHTML = html;

//       // This function is run whenever the user presses a key.
//         document.onkeyup = function() {
//         console.log(event);
//         userText.innerHTML = event.key; 
      
//         // Determines which key was pressed
//         var userGuess = event.key;

//         // Randomly chooses a choice from the options array. This is the Computer's guess.
//         var wordChoice = food[Math.floor(Math.random() * food.length)];


//         if ((userGuess === ) {

//         }

//         else ()

// </script>

// (function () {
//     "use strict";
//     var availableLetters, words, guessInput, guess, guessButton, lettersGuessed, lettersMatched, output, man, letters, lives, currentWord, numLettersMatched, messages;

//     function setup() {
//         availableLetters = "abcdefghijklmnopqrstuvwxyz";
//         lives = 10;
//         words = ["pizza", "donuts", "pancakes", "cheeseburgers", "cookies"];
//         messages = {
//             win: 'You win!',
//             lose: 'Game over!',
//             guessed: ' You have already guessed that! Pick another letter...',
//             validLetter: 'Please enter a letter from A-Z'
//         };

//         lettersGuessed = lettersMatched = '';
//         numLettersMatched = 0;

//         currentWord = words[Math.floor(Math.random() * words.length)];

//         output = document.getElementById("output");
//         man = document.getElementById("man");
//         guessInput = document.getElementById("letter");

//         man.innerHTML = 'You have ' + lives + ' lives remaining';
//         output.innerHTML = '';

//         document.getElementById("letter").value = '';

//         guessButton = document.getElementById("guess");
//         guessInput.style.display = 'inline';
//         guessButton.style.display = 'inline';

//         letters = document.getElementById("letters");
//         letters.innerHTML = '<li class="current-word">Current word:</li>';

//         var letter, i;
//         for (i = 0; i < currentWord.length; i++) {
//             letter = '<li class="letter letter' + currentWord.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</li>';
//             letters.insertAdjacentHTML('beforeend', letter);
//         }
//     }

//     function gameOver(win) {
//         if (win) {
//             output.innerHTML = messages.win;
//             output.classList.add('win');
//         } else {
//             output.innerHTML = messages.lose;
//             output.classList.add('error');
//         }

//         guessInput.style.display = guessButton.style.display = 'none';
//         guessInput.value = '';
//     }

//     window.onload = setup();

//     document.getElementById("restart").onclick = setup;

//     guessInput.onclick = function () {
//         this.value = '';
//     };

//     /* main guess function when user clicks #guess */
//     document.getElementById('hangman').onsubmit = function (e) {
//         if (e.preventDefault) e.preventDefault();
//         output.innerHTML = '';
//         output.classList.remove('error', 'warning');
//         guess = guessInput.value;

//         /* does guess have a value? if yes continue, if no, error */
//         if (guess) {
//             /* is guess a valid letter? if so carry on, else error */
//             if (availableLetters.indexOf(guess) > -1) {
//                 /* has it been guessed (missed or matched) already? if so, abandon & add notice */
//                 if ((lettersMatched && lettersMatched.indexOf(guess) > -1) || (lettersGuessed && lettersGuessed.indexOf(guess) > -1)) {
//                     output.innerHTML = '"' + guess.toUpperCase() + '"' + messages.guessed;
//                     output.classList.add("warning");
//                 }
//                 /* does guess exist in current word? if so, add to letters already matched, if final letter added, game over with win message */
//                 else if (currentWord.indexOf(guess) > -1) {
//                     var lettersToShow;
//                     lettersToShow = document.querySelectorAll(".letter" + guess.toUpperCase());

//                     for (var i = 0; i < lettersToShow.length; i++) {
//                         lettersToShow[i].classList.add("correct");
//                     }

//                     /* check to see if letter appears multiple times */
//                     for (var j = 0; j < currentWord.length; j++) {
//                         if (currentWord.charAt(j) === guess) {
//                             numLettersMatched += 1;
//                         }
//                     }

//                     lettersMatched += guess;
//                     if (numLettersMatched === currentWord.length) {
//                         gameOver(true);
//                     }
//                 }
//                 /* guess doesn't exist in current word and hasn't been guessed before, add to lettersGuessed, reduce lives & update user */
//                 else {
//                     lettersGuessed += guess;
//                     lives--;
//                     man.innerHTML = 'You have ' + lives + ' lives remaining';
//                     if (lives === 0) gameOver();
//                 }
//             }
//             /* not a valid letter, error */
//             else {
//                 output.classList.add('error');
//                 output.innerHTML = messages.validLetter;
//             }
//         }
//         /* no letter entered, error */
//         else {
//             output.classList.add('error');
//             output.innerHTML = messages.validLetter;
//         }
//         return false;
//     };
// }());

var unhealthyFoods = ["pizza", "donuts", "pancakes", "cheesburgers", "cookies", "ice-cream"];
var guessesRemaining = 10;


function initializeHangman()
{
    setMysteryFood();
    buildSpaces(getMysteryFood().split(""));
    setCorrectGuesses(0);
    setGuessesRemaining(10);
}

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

