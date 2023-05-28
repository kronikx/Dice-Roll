document.getElementById('myButton').addEventListener('click', rollDie);

function rollDie () {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var audio = new Audio("./audio/dice-roll.mp3")
  audio.play()

  document
    .getElementsByClassName("img1")[0]
    .setAttribute("src", `./images/dice${randomNumber1}.png`);

  document
    .getElementsByClassName("img2")[0]
    .setAttribute("src", `./images/dice${randomNumber2}.png`);

  checkWin(randomNumber1, randomNumber2)
}

function checkWin (Num1, Num2) {
  if (Num1 > Num2) {
    document.querySelector("h1").textContent = "Player 1 wins!";
  } else if (Num2 > Num1) {
    document.querySelector("h1").textContent = "Player 2 wins!";
  } else {
    document.querySelector("h1").textContent = "Draw!";
  }
}

