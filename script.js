/* We choose to represent the word as an array of characters. We could have
 * represented it as a string, but an array of chacters is more suited to our
 * specific use case. This is a great way to introduce the concept of data
 * representation. Ask the students "How many different ways could we represent
 * a word?" A string, an array of strings, an array of characters, an array of
 * numbers representing characters, etc. Talk through the pros and cons of each.
 */
var word = ['A','B','A','L','O','N','E'];

/* Similar to the dice game, we choose to represent the different possible
 * hangman images as an array of strings to the URLs. Talk to students about the
 * challenge we are trying to solve. "How do we turn a number of misses into an
 * image?" An alternative way to solve this would be to concatenate strings with
 * the number of misses to produce the URL.
 */
var images = ['Hangman-0.png', 'Hangman-1.png', 'Hangman-2.png', 'Hangman-3.png', 'Hangman-4.png', 'Hangman-5.png', 'Hangman-6.png'];

/* A key decision is how to store the player's progress in the game. We choose
 * to represent it as an array of the letters guessed. Walk through a game of
 * hangman with the students and have them narrate each step. Ask the game
 * leader questions at each step. "How do you know if the player won?"
 * or "How do you know if the player lost?"
 */
var guesses = [];

/* While you could infer the number of misses from the array of guesses, it is
 * easier to keep it in an array. Alternatively, you could keep two arrays: a
 * "correct" array and a "wrong" array. */
var misses = 0;

function updateWord() {
  $("#word").empty();
  word.forEach(function (letter) {
    if (guesses.includes(letter)) {
      $("#word").append(letter);
    } else {
      $("#word").append("_");
    }
  });
}

function updateHangman() {
  $("#hangman").attr("src", images[misses]);
}

function hasWon() {
  return word.every(function (letter) {
    return guesses.includes(letter);
  });
}

function hasLost() {
  if (misses < 6) {
    return false;
  } else {
    return true;
  }
}

function guessLetter(letter) {
  letter = letter.toUpperCase();

  if (guesses.includes(letter)) {
    $("#message").text("You already guessed the letter '" + letter + "'!");
    $("#message").show();
    return;
  }

  guesses.push(letter);

  if (word.includes(letter) === false) {
    misses++;
  }
}

function newGame() {
  guesses = [];
  misses = 0;
  $("#message").hide();
  $("#newgame").hide();
  updateWord();
  updateHangman();
}

$(document).ready(function() {
  newGame();

  $("#newgame").click(newGame);

  $(document).keypress(function(event) {
    $("#message").empty();
    $("#message").hide();

    guessLetter(event.key);

    updateWord();
    updateHangman();

    if (hasWon()) {
      $("#message").text("You won!");
      $("#message").show();
      $("#newgame").show();
    }
    if (hasLost()) {
      $("#message").text("You lost!");
      $("#message").show();
      $("#newgame").show();
    }
  });
});
