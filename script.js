// # Hangman Project #

// ## Data ##

// We choose to represent the word as an array of characters. We could have
// represented it as a string, but an array of characters is more suited to our
// specific use case. This is a great way to introduce the concept of data
// representation. Ask the students "How many different ways could we represent
// a word?" A string, an array of strings, an array of characters, an array of
// numbers representing characters, etc. Talk through the pros and cons of each.
var secretWord;

// A key decision is how to store the player's progress in the game. We choose
// to represent it as an twos arrays of the letters guessed: onw for correct
// guesses, and the other for wrong guesses.
var correctGuesses;
var wrongGuesses;

// Similar to the dice game, we choose to represent the different possible
// hangman images as an array of strings to the URLs. An alternative way to
// solve this would be to concatenate strings with the number of misses to
// produce the URL.
var images = ['Hangman-0.png', 'Hangman-1.png', 'Hangman-2.png',
              'Hangman-3.png', 'Hangman-4.png', 'Hangman-5.png',
              'Hangman-6.png'];


// ## Game Logic ##

// Judge a guess and call the appropriate function depending on if the letter
// is correct or wrong.  Array.includes() is not supported in IE yet. An
// alternative would be Array.indexOf().
function judgeGuess(letter) {
  if (secretWord.includes(letter)) {
    onCorrectGuess(letter);
  } else {
    onWrongGuess(letter);
  }
}

// Start a new game by resetting the state and updating the hangman and word.
function prepareGame() {
  secretWord = ['A','B','A','L','O','N','E'];
  correctGuesses = [];
  wrongGuesses = [];
  drawWord();
  drawHangman();
}

// A player has won if they guess every letter in the word. Uses Array.every()
// that is supported in IE9 and later. Read as "if guesses includes every letter
// in the word". This can also be implemented with a for loop and a boolean
// variable to keep track of the result.
function checkIfWon() {
  return secretWord.every(function (letter) {
    return correctGuesses.includes(letter);
  });
}

// A player has lost if they have more than 6 misses. Students may need help
// figuring out the number of misses is equivalent to the length of wrong
// guesses. It may not be with duplicates - see the "alreadyGuessed" challenge.
function checkIfLost() {
  var misses = wrongGuesses.length;
  if (misses < 6) {
    return false;
  } else {
    return true;
  }
}

// ## Game Events ##

function onCorrectGuess(letter) {
    correctGuesses.push(letter);

    drawWord();

    if (checkIfWon()) {
      onWin();
    }
}

function onWrongGuess(letter) {
    wrongGuesses.push(letter);

    drawHangman();

    if (checkIfLost()) {
      onLose();
    }
}

// Notify the user they have won. See the "message" challenge.
function onWin() {
  alert("You won!");
}

// Notify the user they have lost. See the "message" challenge.
function onLose() {
  alert("You lost!");
}

// ## UI Logic ##

// Updating the word maybe the most difficult part of the assignment.
// Conceptually, you clear what is in the div, iterate over each letter, and add
// either the letter or a placeholder depending on if the player guessed the
// letter.
function drawWord() {
  // Empty the div. It is important to recognize this is just emptying what is
  // on the screen. The answer is still there.
  $("#word").empty();

  // Iterate over each letter in the word using forEach. This could also be
  // done using a for loop, but forEach removes the complexities around indexes.
  // Read as "for each letter in the word..."
  secretWord.forEach(function (letter) {
    // If guessed already, append the actual letter. Otherwise, append a
    // placeholder.
    if (correctGuesses.includes(letter)) {
      $("#word").append(letter);
    } else {
      $("#word").append("_");
    }
  });
}

// Update the hangman by setting the image src to appropriate image URL based
// on the number of misses. Potential danger of array out of bounds - ignored
// for now. Advanced students should guard against it here or stop guessing if
// player has won or lost.
function drawHangman() {
  var misses = wrongGuesses.length;
  $("#hangman").attr("src", images[misses]);
}


// ## UI Events ##

function onKeyDown(event) {
  //Get the key from the event.
  var letter = event.key;

  // Convert the letter to uppercase. This is important for the Array.includes()
  // to work.
  letter = letter.toUpperCase();

  judgeGuess(letter);
}

// ## Initialization ##

// Wrap in a document.ready...
$(document).ready(function() {
  prepareGame();
  // Add the keypress handler.
  $(document).keydown(onKeyDown);
});
