var secretWord;
var correctGuesses;
var wrongGuesses;
var images = ['../../Hangman-0.png', '../../Hangman-1.png', '../../Hangman-2.png',
              '../../Hangman-3.png', '../../Hangman-4.png', '../../Hangman-5.png',
              '../../Hangman-6.png'];

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
    drawWord();
}

function onWrongGuess(letter) {
    wrongGuesses.push(letter);
    alert("You incorrectly guessed " + letter + "! Your wrong guesses: " + wrongGuesses);
    drawHangman();
}

function drawWord() {
  $("#word").empty();
  secretWord.forEach(function (letter) {
    if (correctGuesses.includes(letter)) {
      $("#word").append(letter);
    } else {
      $("#word").append("_");
    }
  });
}

function drawHangman() {
  var misses = wrongGuesses.length;
  $("#hangman").attr("src", images[misses]);
}

function onKeyDown(event) {
  var letter = event.key;
  letter = letter.toUpperCase();
  judgeGuess(letter);
}

$(document).ready(function() {
  prepareGame();
  $(document).keydown(onKeyDown);
});
