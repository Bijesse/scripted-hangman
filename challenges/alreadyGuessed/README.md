```javascript
// Check if the letter has been guessed. This can be done as a challenge after
// completing the project.
if (guesses.includes(letter)) {
  onAlreadyGuessed();
  // Important! Do not continue function.
  return;
}

function onAlreadyGuessed() {
  // notify the player the letter was already guessed.
}
```
