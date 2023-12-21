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

  let length = returnLength();
  console.log(length[0]);
  console.log(length[1]);

  //const game = createGame();
  //game.playGame();
});

const returnLength = (): [number, boolean]  => {
  const playerBoard = document.getElementById("playerBoard");
  let values: any = [];
  let firstSquare: HTMLDivElement;
  let secondSquare: HTMLDivElement;

  // Add event listeners to the player's gameboard
  playerBoard?.addEventListener("click", (event) => {
    firstSquare = event.target as HTMLDivElement;
    firstSquare.classList.add("bg-green-500");

    secondSquare = event.target as HTMLDivElement;
    secondSquare.classList.add("bg-red-500");
    playerBoard?.removeEventListener("click", (event) => {});

    if (firstSquare.getAttribute("row") === secondSquare.getAttribute("row")) {
      const col1 = firstSquare.getAttribute("col");
      const col2 = secondSquare.getAttribute("col");
      let length = Math.abs(Number(col1) - Number(col2)) + 1;
      values.push(length, false);
    } else if (
      firstSquare.getAttribute("col") === secondSquare.getAttribute("col")
    ) {
      const row1 = firstSquare.getAttribute("row");
      const row2 = secondSquare.getAttribute("row");
      let length = Math.abs(Number(row1) - Number(row2)) + 1;
      values.push(length, true);
    }
  });
  return values;
}
