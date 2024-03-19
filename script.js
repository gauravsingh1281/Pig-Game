"use strict";

// Selecting Elements
const totalScore0Ele = document.getElementById("score--0");
const totalScore1Ele = document.getElementById("score--1");
const currentScore0Ele = document.getElementById("current--0");
const currentScore1Ele = document.getElementById("current--1");
const player0Ele = document.querySelector(".player--0");
const player1Ele = document.querySelector(".player--1");
const diceEle = document.querySelector(".dice");
const btnNewGame = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
let totalScore, currentScore, activePlayer, gamePlaying;

// Starting Conditions

const initialState = () => {
  totalScore = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  totalScore0Ele.innerText = 0;
  totalScore1Ele.innerText = 0;
  currentScore0Ele.innerText = 0;
  currentScore1Ele.innerText = 0;
  diceEle.classList.add("hidden");
  player0Ele.classList.remove("player--winner");
  player1Ele.classList.remove("player--winner");
  player0Ele.classList.add("player--active");
  player1Ele.classList.remove("player--active");
};

initialState();

// Switch Player function
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).innerText = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Ele.classList.toggle("player--active");
  player1Ele.classList.toggle("player--active");
};

// Rolling dice functionality
btnRoll.addEventListener("click", () => {
  if (gamePlaying) {
    const dice = Math.floor(Math.random() * 6) + 1;
    diceEle.classList.remove("hidden");
    diceEle.src = `/Images/dice-${dice}.png`;

    // Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).innerText =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

// Score holding functionality

btnHold.addEventListener("click", () => {
  if (gamePlaying) {
    // Add current score to the total score of active player
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).innerText =
      totalScore[activePlayer];

    if (totalScore[activePlayer] >= 20) {
      // Finish Game
      gamePlaying = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceEle.classList.add("hidden");
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

// Reset the game
btnNewGame.addEventListener("click", initialState);
