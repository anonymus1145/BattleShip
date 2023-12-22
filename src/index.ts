import { gameLayout } from "./pages/gameLayout";
import { startGame } from "./pages/startGame";
import { createGame } from "./gameFunctions";
import { createGameboard, Gameboard } from "./objects/gameboard";
import { createPlayer, createComputer } from "./objects/player";
import { createShip } from "./objects/ship";
import { returnLength } from "./gameFunctions";

document.addEventListener("DOMContentLoaded", async () => {
  startGame();
  gameLayout();

  // Place the ships on the player's gameboard
  const playerGameboard: Gameboard = createGameboard();
  const computerGameboard: Gameboard = createGameboard();

  
  // Return length of ship and if it is vertical
  let length: any = await returnLength();
  console.log(length[0]);

  //const game = createGame();
  //game.playGame();
});

