import { gameLayout } from "./pages/gameLayout";
import { startGame } from "./pages/startGame";
import { createGame } from "./gameFunctions";
import { createGameboard, Gameboard } from "./objects/gameboard";
import { createPlayer, createComputer } from "./objects/player";
import { createShip } from "./objects/ship";
import { returnShipPosition, randomRowCol } from "./gameFunctions";

document.addEventListener("DOMContentLoaded", async () => {
  startGame();
  gameLayout();

  // Create two gameboards, one for the player and one for the computer
  const playerBoardElement = document.getElementById("playerBoard");
  const computerBoardElement = document.getElementById("computerBoard");

  const playerBoard = playerBoardElement ? playerBoardElement.getAttribute("id")?.toString() : "";
  const computerBoard = computerBoardElement ? computerBoardElement.getAttribute("id")?.toString() : "";

  const playerGameboard: Gameboard = createGameboard(playerBoard ? playerBoard : "");
  const computerGameboard: Gameboard = createGameboard(computerBoard ? computerBoard : "");

  // Create two players, one for the player and one for the computer
  const player = createPlayer(playerGameboard);
  const computer = createComputer(computerGameboard);

  // Place the ships on the player's gameboard
  for (let i = 1; i < 6; i++) {
    // Return length of ship and if it is vertical
    let length: any = await returnShipPosition();
    console.log(length[0], length[1], "row: " + length[2],"col: " + length[3]);
    if (length[0] != i) {
      alert("Invalid ship length, please try again");
      i--;
    } else {
      if (i >= 1 && i < 5) {
        alert ('Place the next ship of ' + (i + 1) + ' square length!');
      }
      playerGameboard.placeShip(createShip(i), length[2], length[3], length[1]);
    }
  }

  // Place the ships randomly on the computer's gameboard
  for (let i = 1; i < 6; i++) {
    // Return length of ship and if it is vertical
    let row = randomRowCol();
    let col = randomRowCol();
    let isVertical = false;
    if (col >= 5) {       // TODO: change this
      isVertical = true;
    } else if (row >= 5) {
      isVertical = true;
    }
    computerGameboard.placeShip(createShip(i), row, col, isVertical);
    console.log(row, col, isVertical);
  }
  
});
