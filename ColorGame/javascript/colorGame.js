var numberOfSquare = 6;
var colors = [];
var colorPicked;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");

init();

function init() {
  setupModeBouton();
  setupSquare();
  Reset();
}

function setupSquare() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function () {
      var clickedColor = this.style.backgroundColor;

      if (clickedColor === colorPicked) {
        messageDisplay.textContent = "Correct !";
        reset.textContent = "play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try again";
      }
    });
  }
}

function setupModeBouton() {
  //bouton mode
  for (var i = 0; i < mode.length; i++) {
    mode[i].addEventListener("click", function () {
      mode[0].classList.remove("selected");
      mode[1].classList.remove("selected");
      this.classList.add("selected");

      if (this.textContent === "Easy") {
        numberOfSquare = 3;
      } else {
        numberOfSquare = 6;
      }
      Reset();
    });
  }
}

function Reset() {
  colors = generateRandomColors(numberOfSquare);
  colorPicked = pickColor();
  colorDisplay.textContent = colorPicked;
  this.textContent = "New Colors";
  messageDisplay.textContent = "";

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

//bouton reset
reset.addEventListener("click", function () {
  Reset();
});

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  //génère chaque palette de couleur aléatoire
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
