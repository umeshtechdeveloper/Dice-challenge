function play() {
  let randomNumber1 = Math.floor(Math.random() * 6 + 1); //1-6
  let randomDiceImage1 = "./images/dice" + randomNumber1 + ".png"; //./images/dic1.png-./images/dice6.png
  document.querySelector(".img1").setAttribute("src", randomDiceImage1);

  let randomNumber2 = Math.floor(Math.random() * 6 + 1);
  let randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";
  document.querySelector(".img2").setAttribute("src", randomDiceImage2);

  let title = document.querySelector("#title");

  //If player 1 wins
  if (randomNumber1 > randomNumber2) {
    title.textContent = "🚩Player 1 Wins!";
    //If player 2 wins
  } else if (randomNumber2 > randomNumber1) {
    title.textContent = "Player 2 Wins!🚩";
    //If it's draw
  } else {
    title.textContent = "Draw!";
  }
}
