# Hangman Project #
A basic hangman coding exercise.

## Guided Game ##
To begin the project, choose two students to play a game of hangman. One student
will play the "computer" and the other student will be the "player". On the
board, make five categories and explain each category:
 - *Data*: Information the computer needs to keep track of during the game.
 - *Game Actions*: Things the computer must do during the game.
 - *Game Events*: Things that happen in the game.
 - *User Interface Actions*: Things that computer must "show" the user during
   game.
 - *User Interface Events*: Things that happen in the user interface.
If the students are a bit confused, it's okay - the game will help explain.

Ask the "computer" student to begin. When she begins, make sure you explicitly
note the following things:
 - *Preparation*: Its important to note that there is something
   that needs to happen before the came begins. Add "prepare" to the list of
   game actions.
 - *Choosing a word*: Ask where she keeps track of the word (maybe she responds
   "on a piece of paper" or "I remember it"). Say that the computer would need
   to keep track of it too - so add "secret word" to the "data" list. On a
   practical note, make sure the student chooses a short/simple word to keep the
   activity short.
 - *Drawing the hangman*: Point out that the computer has to draw
   that too, so add it to the "draw hangman" to the "user interface" list.
 - *Drawing the word*: She will draw spaces for each letter. Point out the
   computer has to draw those too, so add it to the "draw word" to the "user
   interface" list.

Now it is time for the "player" to guess. As the student guesses, make sure you
note the following things on the first guess:
 - *Guessing a letter*: Point out there is an action going on - add to the
   actions "guess a letter".
 - *Communicating a guess*: When the "player" guesses a letter, ask how
   the "computer" knows what letter she guessed. She may answer "I heard her say
   it!". Remind the students that computers can't hear... so how would you do it
   on a computer? Lead students to pressing the letter on the keyboard. Add
   "on key down" to the list of events.
 - *Judging the guess*: Now that you know the letter, ask what the "computer"
   does next. Point out there are two different actions: if the guess is wrong,
   and if the guess is right. Add "on guess correct" and "on guess wrong" to the
   "events" list.

For the subsequent guesses, make sure you point out the following things:
 - *On a correct letter*: When a letter is correct, refer back to  the "on
   correct guess" event. The "computer" updates the word with the new guess.
   Before the student can update the word, erase it. She will re-draw it with the
   additional word. Ask her how she knew which letters to draw. She will say she
   remembered the guesses. Add "correct guesses" to the "data" list. Refer back
   to the "draw word" item in the "user interface" list as she re-draws the word.
 - *On a wrong letter*: When a letter is wrong, the "computer" updates the hangman
   with an additional limb. Before the student can update the hangman, erase it.
   Ask her to draw it again. She will draw it again with an additional limb.
   Ask her how she knew how many limbs to draw. She will say they remember the
   number of wrong guesses. Add "wrong guesses" to the "data" list. Refer back to
   the "draw hangman" item on the "user interface" list as she re-draws the
   hangman.

As the game reaches the end, walk through what would happen for both win and
(after the "player" either wins or loses, go back and work through the other
case). For each case, note the following things:
 - *On a win*: Point out that this is an event: someone won! Add "on win"
   to the "events" list. Ask how the "computer" knew the player won: she will
   describe the logic. Add "check if won" to the game actions. Make sure she
   only refers to the data: say that is all she knows. (She should refer to the
   list of the correct guesses.)
 - *On a loss*: Point out that this is an event: someone lost! Add "on loss"
   to the "events" list. Ask how the "computer" knew the player lost: she will
   describe the logic. Add "check if lost" to the game actions. Make sure she
   only refers to the data: say that is all she knows. (She should refer to the
   list of the wrong guesses.)

After all this is done, you should be left with the following items:
 - Game Actions
   - Prepare game
   - Judge guess
   - Check if won
   - Check if lost
 - Game Events
   - On correct guess
   - On wrong guess
   - On win
   - On loss
 - User Interface Actions
   - Draw hangman
   - Draw word
 - User Interface Events
   - On key down
 - Data
   - Correct guesses
   - Wrong guesses
   - Secret word


## Flow Diagram
Lead the students to a flow diagram that looks something like below:
<pre>
                 +-------------+
+------------+   | Draw Word   |
|Prepare Game| ->|-------------|
+------------+   | Draw Hangman|
                 |+------------+

                                 +--------------+    +------------+  +-------------+      +-------+
                              /->|On Wrong Guess|--->|Draw Hangman|->|Check if Lost|-Yes->|On Loss|
+-----------+  +-----------+ /   +--------------+    +------------+  +-------------+      +-------+
|On Key Down|->|Judge Guess|     
+-----------+  +-----------+ \   +----------------+  +----------+    +------------+       +------+
                              \->|On Correct Guess|->| Draw Word|--->|Check if Won|--Yes->|On Win|
                                 +----------------+  +----------+    +------------+       +------+
</pre>

## Toolkit
Introduce the students to their toolkit:
 - Array.length
 - Array.push()
 - Array.every()
 - Array.forEach()
 - Array.includes()
 - String.toUpperCase()
 - Keydown event

## Implementation Guide
The implementation guide basically follows the flow diagram implementing from
left to right.
 - Implement prepareGame
    - Define secretWordArray global variable
    - Initialize the secret word array.
    - Call from $(document).ready
 - Implement first version of drawWord
    - For now, just write placeholders (forEach / append)
    - Call from prepareGame
 - Implement first version of drawHangman
    - Define global variable for array of hangman images
    - For now, just set the image source to the first element.
    - Call from prepareGame
 - Implement onKeyDown
    - Append listener in $(document).ready
    - Use event.key
 - Implement judgeGuess / onCorrectGuess / onWrongGuess
    - Use Array.includes
    - Call from onKeyDown
    - Implement onCorrectGuess and onWrongGuess stubbed with an alert box
 - Implement correctGuesses / wrongGuesses
    - Define correctGuesses / wrongGuesses global variables.
    - Initialize to guess arrays as empty arrays in prepareGame.
    - Append letter to appropriate array in onCorrectGuess / onWrongGuess
 - Implement second version of drawWord
    - Append either the letter or a placeholder depending on correctGuesses
      (Array.includes)
 - Implement second version of drawHangman
    - Set the correct image based on the count of wrongGuesses (Array.length)
 - Implement onWin / onLoss
    - Notify the user of win and loss (alert box or console log)
 - Implement checkIfLost
    - Return true if the count of wrongGuesses is larger than 6
    - Call from onWrongGuess (and call onLoss if lost)
 - Implement checkIfWon
    - Return true if every letter in secret word are included in correctGuesses
      (Array.every / Array.includes)
    - Call from onCorrectGuess (and call onWin if won)
