"use strict";

//Selecting Elements
//Here Player0 = Player 1 and Player1= Player 2
const player0Elem = document.querySelector(".player--0");
const player1Elem = document.querySelector(".player--1");
const player0TotalScoreElem = document.getElementById("score--0");
const player1TotalScoreElem = document.getElementById("score--1");
const diceElem = document.querySelector(".dice");
const newGameBtn = document.querySelector(".btn--new");
const rollDiceBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

//Initial State
player0TotalScoreElem.textContent = 0;
player1TotalScoreElem.textContent = 0;
diceElem.classList.add("hidden");
const playerTotalScores = [0, 0];
let playerCurrentScore = 0;
let activePlayer = 0;
let playing = true;

// Function for Switching Player
function swtichPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  playerCurrentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Elem.classList.toggle("player--active");
  player1Elem.classList.toggle("player--active");
}

//Rolling dice functionality
rollDiceBtn.addEventListener("click", function () {
  if (playing) {
    const diceValue = Math.trunc(Math.random() * 6) + 1;
    diceElem.classList.remove("hidden");
    diceElem.src = `./images/dice-${diceValue}.png`;
    if (diceValue !== 1) {
      playerCurrentScore += diceValue;
      document.getElementById(`current--${activePlayer}`).textContent =
        playerCurrentScore;
    } else {
      swtichPlayer();
    }
  }
});

// Score Holding functionality
holdBtn.addEventListener("click", function () {
  if (playing) {
    playerTotalScores[activePlayer] += playerCurrentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      playerTotalScores[activePlayer];
    // Checking for the winner
    if (playerTotalScores[activePlayer] >= 100) {
      playing = false;
      diceElem.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      swtichPlayer();
    }
  }
});
