import { gameLayout } from "./pages/gameLayout";
import { startGame } from "./pages/startGame";
import { createGame } from "./game";
import { createGameboard, Gameboard } from "./objects/gameboard";
import { createPlayer, createComputer } from "./objects/player";
import { createShip } from "./objects/ship";

document.addEventListener("DOMContentLoaded", () => {
  startGame();
  gameLayout();

  // Place the ships on the player's gameboard
  const playerGameboard: Gameboard = createGameboard();
  const computerGameboard: Gameboard = createGameboard();

  returnLength();

  //const game = createGame();
  //game.playGame();
});

const returnLength = () => {
  const playerBoard = document.getElementById("playerBoard");
  playerBoard?.addEventListener("click", (event) => {
    console.log(event.target);
  })
};