var secretWord;

function prepareGame() {
  secretWord = ['A','B','A','L','O','N','E'];
  drawWord();
  drawHangman();
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
  alert("You guessed " + letter + "!");
}

$(document).ready(function() {
  prepareGame();
  $(document).keypress(onKeyPress);
});
