var secretWord;
var correctGuesses;
var wrongGuesses;

function judgeGuess(letter) {
  if (secretWord.includes(letter)) {
    onCorrectGuess(letter);
  } else {
    onWrongGuess(letter);
  }
}

function prepareGame() {
  secretWord = ['A','B','A','L','O','N','E'];
  correctGuesses = [];
  wrongGuesses = [];
  drawWord();
  drawHangman();
}

function onCorrectGuess(letter) {
    correctGuesses.push(letter);
    alert("You correctly guessed " + letter + "! Your correct guesses: " + correctGuesses);
}

function onWrongGuess(letter) {
    wrongGuesses.push(letter);
    alert("You incorrectly guessed " + letter + "! Your wrong guesses: " + wrongGuesses);
}

function drawWord() {
  $("#word").empty();
  secretWord.forEach(function (letter) {
    $("#word").append("_");
  });
}
function drawHangman() {
}

function onKeyPress(event) {
  var letter = event.key;
  letter = letter.toUpperCase();
  judgeGuess(letter);
}

$(document).ready(function() {
  prepareGame();
  $(document).keypress(onKeyPress);
});
