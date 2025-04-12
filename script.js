"use strict";

//Selecting Elements
const player1ScoreElem = document.getElementById("score--0");
const player2ScoreElem = document.getElementById("score--1");
const diceElem = document.querySelector(".dice");
const newGameBtn = document.querySelector(".btn--new");
const rollDiceBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

//Initial State
player1ScoreElem.textContent = 0;
player2ScoreElem.textContent = 0;
diceElem.classList.add("hidden");

//Rolling dice functionality
rollDiceBtn.addEventListener("click", function () {
  const diceValue = Math.trunc(Math.random() * 6) + 1;
  diceElem.classList.remove("hidden");
  diceElem.src = `./images/dice-${diceValue}.png`;
  //diceElem.setAttribute("src", `./images/dice-${diceValue}.png`);
});
