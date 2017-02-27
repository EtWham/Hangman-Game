//create arrays
//create userGuess then use key press event to record & push userGuess to userGuessIndex which will be displayed
//create hangman words array/index & randomize selection of the words in game
//create & display random hangman word array with blank spaces


//compare userGuess to all letters in current random hangman word
    //if matches, display correct letter
    //if does not match, display no letter & take away one life
//use loop-tv.html template to set up prompt guesses

//I think there are a bunch of mistakes and missteps in my code. I feel like I confused myself more and I have a feeling that I definitely did not stay DRY

function startup() {


var unhealthyFoods = ["candy", "pizza", "donuts", "pancakes", "cheesburgers", "cookies", "ice cream"];
var lives = 10;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuess = document.getElementById("user-guess");
var userGuessIndex = [];
var answerArray = [];
var letters = "-"

    document.onkeyup = function(event) {
        // console.log(event);
        userGuess.innerHTML = event.key; 
        var userGuess = event.key;
        userGuessIndex.push(userGuess);
        document.getElementById("UserGuess").innerHTML = userGuessIndex;
        console.log(userGuessIndex);

    function getFood() {
        currentWord = unhealthyFoods[Math.floor(Math.random() * (unhealthyFoods.length-1))];

        letters = document.getElementById("letters");
        letters.innerHTML = '<li class="currentWord">Current word:</li>';

        // var letter, i;
        // for (i = 0; i < currentWord.length; i++) {
        //     letter = '<li class="letter letter' + currentWord.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</li>';
        //     letters.insertAdjacentHTML('beforeend', letter);
        // }
    }

    function displayWord() {
        for (var i = 0; i < unhealthyFoods.length; i++) {
        answerArray[i] = "_";
        }
        var remainingLetters = unhealthyFoods.length;
    }

    function compare() {
        for (var i = 0; i < unhealthyFoods.length; i++) {
        if (currentWord[i] === userGuessIndex) {
            answerArray[i] = userGuessIndex;
            remainingLetters--;
            }
        }

        
        if (currentWord[i] != userGuessIndex) {
            alert("Bad choice, try again!")
            lives = lives - 1 
        
        }
   
    else (userGuessIndex.length != 1){
            alert("Please enter a single letter.");
        } 
    }
        
        var html = "<p>Press the reset to play again!</p>" +
          "<p>lives: " + lives + "</p>";

        document.getElementById("gameboard").innerHTML = html;
    }
};
}


startup();


$(document).ready(function() {
    $(".reset-button").on("click", function() {
        startup();
      });
});
