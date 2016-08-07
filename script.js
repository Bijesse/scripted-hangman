// # Hangman Project #

// ## Global Variables ##

// We choose to represent the word as an array of characters. We could have
// represented it as a string, but an array of characters is more suited to our
// specific use case. This is a great way to introduce the concept of data
// representation. Ask the students "How many different ways could we represent
// a word?" A string, an array of strings, an array of characters, an array of
// numbers representing characters, etc. Talk through the pros and cons of each.
var word = ['A','B','A','L','O','N','E'];

// Similar to the dice game, we choose to represent the different possible
// hangman images as an array of strings to the URLs. Talk to students about the
// challenge we are trying to solve. "How do we turn a number of misses into an
// image?" An alternative way to solve this would be to concatenate strings with
// the number of misses to produce the URL.
var images = ['Hangman-0.png', 'Hangman-1.png', 'Hangman-2.png',
              'Hangman-3.png', 'Hangman-4.png', 'Hangman-5.png',
              'Hangman-6.png'];

// A key decision is how to store the player's progress in the game. We choose
// to represent it as an array of the letters guessed. Walk through a game of
// hangman with the students and have them narrate each step. Ask the game
// leader questions at each step. "How do you know if the player won?"
// or "How do you know if the player lost?"
var guesses;

// While you could infer the number of misses from the array of guesses, it is
// easier to keep it in an array. Alternatively, you could keep two arrays: a
// "correct" array and a "wrong" array.
var misses;



// ## Game Logic ##

// Guessing letters involves updating the two state variables - guesses and
// misses. This function also checks if a letter has been guessed, but that is
// not strictly necessary.
function guess(letter) {
  // Call the appropriate event depending on if the letter is in the word
  if (word.includes(letter)) {
    onCorrectGuess(letter);
  } else {
    onWrongGuess(letter);
  }

  // Update the word and hangman on the screen.
  updateWord();
  updateHangman();

  // Handle wins and losses.
  if (hasWon()) {
    onWin();
  }
  if (hasLost()) {
    onLose();
  }
}

// Start a new game by resetting the state and updating the hangman and word.
function reset() {
  guesses = [];
  misses = 0;
  updateWord();
  updateHangman();
}

// ## Game Logic Helpers ##

// A player has won if they guess every letter in the word. Uses Array.every()
// that is supported in IE9 and later. Read as "if guesses includes every letter
// in the word"
function hasWon() {
  return word.every(function (letter) {
    return guesses.includes(letter);
  });
}

// A player has lost if they have more than 6 misses.
function hasLost() {
  if (misses < 6) {
    return false;
  } else {
    return true;
  }
}

// ## Game Events ##

function onCorrectGuess(letter) {
    guesses.push(letter);
}

function onWrongGuess(letter) {
    guesses.push(letter);
    misses = misses + 1;
}

function onWin() {
  alert("You won!");
}

function onLose() {
  alert("You lost!");
}

// ## UI Update ##

// Updating the word maybe the most difficult part of the assignment.
// Conceptually, you clear what is in the div, iterate over each letter, and add
// either the letter or an underscore depending on if the player guessed the
// letter.
function updateWord() {
  // Empty the div. It is important to recognize this is just emptying what is
  // on the screen. The answer is still there.
  $("#word").empty();

  // Iterate over each letter in the word using forEach. This could also be
  // done using a for loop, but forEach removes the complexities around indexes.
  // Read as "for each letter in the word..."
  word.forEach(function (letter) {
    // Check if the guesses array includes the given letter. Array.includes() is
    // not supported in IE yet. An alternative would be Array.indexOf().
    // Read as: "if the letter is in the list of guesses..." If guessed already,
    // append the actual letter. Otherwise, append a placeholder.
    if (guesses.includes(letter)) {
      $("#word").append(letter);
    } else {
      $("#word").append("_");
    }
  });
}

// Update the hangman by setting the image src to appropriate image URL based
// on the number of misses.
function updateHangman() {
  $("#hangman").attr("src", images[misses]);
}


// ## UI Events ##

function onKeyPress(event) {
  //Get the key from the event.
  var letter = event.key;

  // Convert the letter to uppercase. This is important for the Array.includes()
  // to work.
  letter = letter.toUpperCase();

  guess(letter);
}

// ## Initialization ##

// Wrap in a document.ready...
$(document).ready(function() {
  reset();
  // Add the keypress handler.
  $(document).keypress(onKeyPress);
});
