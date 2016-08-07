```html
<button id="newgame">New Game</button>
```

```css
#newgame {
  display:none;
  font-size:1.5em;
  padding:0.5em;
  margin:1em;
}
```

In reset():
```javascript
  $("#newgame").hide();
```

In game events:
```javascript
function onWin() {
  //Other code...
  $("#newgame").show();
}

function onLose() {
  //Other code...
  $("#newgame").show();
}
```

In UI events:
```javascript
function onNewGameClick() {
  reset();
  $("#newgame").hide();
}
```

In initialization:
```javascript
$("#newgame").click(onNewGame);
```
