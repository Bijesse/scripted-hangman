```html
<p id="message"></p>
```

```css
#message {
  font-size:1.5em;
  background-color:grey;
  border-radius:2em;
  padding:1em;
  display:none;
}
```

```javascript
function hideMessage() {
  $("#message").empty();
  $("#message").hide();
}

function showMessage(messageText) {
  $("#message").text(messageText);
  $("#message").show();
}
```
