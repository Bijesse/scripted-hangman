# Hangman Project #
A basic hangman coding exercise.

## Guided Game ##
To begin the project, choose two students to play a game of hangman. One student
will play the "computer" and the other student will be the "player". On the
board, make three categories: "data", "events", "game actions", "user interface".

Explain each category:
 - *Data*: Information the computer needs to keep track of during the game.
 - *Events*: Things that happen during the game.
 - *Game Actions*: Things the computer does during the game.
 - *User Interface*: Things that computer must "show" the user.
If the students are a bit confused, it's okay - the game will help explain.

Ask the "computer" student to begin. When she begins, make sure you explicitly
note the following things:
 - *Point out the preparation*: Its important to note that there is something
   that needs to happen before the came begins. Add "prepare" to the list of
   game actions.
 - *She chose a word.*: Ask where she keeps track of the word (maybe she responds
   "on a piece of paper" or "I remember it"). Say that the computer would need
   to keep track of it too - so add "secret word" to the "data" list.
 - *She drew the initial hangman image.*: Point out that the computer has to draw
   that too, so add it to the "draw hangman" to the "user interface" list.
 - *She drew spaces for each letter.*: Point out the computer has to draw those
   too, so add it to the "draw word" to the "user interface" list.

Now it is time for the "player" to guess. As the student guesses, make sure you
note the following things on the first guess:
 - *Guessing a letter*: Point out there is an action going on - add to the
   actions "guess a letter".
 - *She communicated a guess*: When the "player" guesses a letter, ask how
   the "computer" knows what letter she guessed. She may answer "I heard her say
   it!". Remind the students that computers can't hear... so how would you do it
   on a computer? Lead students to pressing the letter on the keyboard. Add
   "on key press" to the list of events.
 - *She judged the guess*: Now that you know the letter, ask what the "computer"
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
 - *On a wrong letter*: When a leter is wrong, the "computer" updates the hangman
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
   describe the logic. Make sure she only refers to the data: say that is all
   she knows. (She should refer to the list of the correct guesses.)
 - *On a loss*: Point out that this is an event: someone lost! Add "on loss"
   to the "events" list. Ask how the "computer" knew the player lost: she will
   describe the logic. Make sure she only refers to the data: say that is all
   she knows. (She should refer to the list of the wrong guesses.)

After all this is done, you should be left with the following items:
 - Game Actions
   - Prepare game
   - Guess letter
   - Has won
   - Has lost
 - User interface
   - Draw hangman
   - Draw word
 - Data
   - Correct guesses
   - Wrong guesses
   - Secret word
 - Events
   - On key press
   - On correct guess
   - On wrong guess
   - On win
   - On loss
