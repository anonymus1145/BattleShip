import { gameLayout } from "./pages/gameLayout";
import { startGame, readyToStart } from "./pages/startGame";
import { createGameboard, Gameboard } from "./objects/gameboard";
import { createPlayer, createComputer } from "./objects/player";
import { createShip } from "./objects/ship";
import { returnShipPosition, randomRowCol, displayShips } from "./gameFunctions";

document.addEventListener("DOMContentLoaded", async () => {
  startGame();
  gameLayout();

  // Create two gameboards, one for the player and one for the computer
  const playerBoard = document.getElementById("playerBoard");
  const computerBoard = document.getElementById("computerBoard");

  const playerGameboard: Gameboard = createGameboard();
  const computerGameboard: Gameboard = createGameboard();

  // Create two players, one for the player and one for the computer
  const player = createPlayer(playerGameboard);
  const computer = createComputer(computerGameboard);

  // Place the ships on the player's gameboard
  for (let i = 1; i < 6; i++) {
    // Return length of ship and if it is vertical
    let length: any = await returnShipPosition();
    // Check if the ship is within the boundaries of the gameboard
    if (length[0] != i) {
      alert("Invalid ship length, please try again");
      i--;
    } else {
      if (i >= 1 && i < 5) {
        alert ('Place the next ship of ' + (i + 1) + ' square length!');
      }
      let ship = createShip(i);
      playerGameboard.placeShip(ship, length[2], length[3], length[1]);
      displayShips(playerBoard, ship, length[2], length[3], length[1]);
    }
  }

  // Place the ships randomly on the computer's gameboard
  for (let i = 1; i < 6; i++) {
    // Return length of ship and if it is vertical
    let array: number[][] = [];
    let row = randomRowCol();
    let col = randomRowCol();
    let isVertical: boolean = false;
    let rowColArray: number[] = [row, col];
    
    array.forEach((value: number[]) => {
      if (value === rowColArray) {
        row = randomRowCol();
        col = randomRowCol();
        rowColArray = [row, col];
        array.push(rowColArray);
      }
    })

    if (rowColArray[0] > 6) {
      isVertical = false;
    } else if (rowColArray[1] > 6) {
      isVertical = true;
    } else {
      let random = Math.floor(Math.random() * 2);
      if (random === 0) {
        isVertical = false;
      }
      isVertical = true;
    }
   
   let ship = createShip(i);
    computerGameboard.placeShip(ship, rowColArray[0], rowColArray[1], isVertical);
    if (computerGameboard.placeShip(ship, rowColArray[0], rowColArray[1], isVertical) === null) {
      i--;
    }
    displayShips(computerBoard, ship, rowColArray[0], rowColArray[1], isVertical);
  }

  // Start the game
  readyToStart();
  let game = true;
  while(game === true) {
    alert("Chose the square you want to attack");
    computerBoard?.addEventListener("click", (event: any) => {
      let row = event.target.getAttribute("row");
      let col = event.target.getAttribute("col");
      player.attack(row, col);

      computerGameboard.receiveAttack(row, col);
      if (computerGameboard.receiveAttack(row, col) !== null) {
        event.target.classList.add("bg-red-500");
        event.target.classList.remove("bg-green-500");
      } else {
        event.target.classList.add("bg-gray-500");
      }

      if (computerGameboard.areAllShipsSunk()) {
        alert("You won!");
        game = false;
        // TODO: Add a button to restart the game and anounce that the game is over!
      }
    })

    computer.attack();
    playerGameboard.receiveAttack(computer.array[0], computer.array[1]);

    if (playerGameboard.receiveAttack(computer.array[0], computer.array[1]) !== null) {
      playerBoard?.querySelector(`[row="${computer.array[0]}"][col="${computer.array[1]}"]`)?.classList.remove("bg-green-500");
      playerBoard?.querySelector(`[row="${computer.array[0]}"][col="${computer.array[1]}"]`)?.classList.add("bg-red-500");
  }

    if (playerGameboard.areAllShipsSunk()) {
      alert("Computer won!");
      game = false;
      // TODO: Add a button to restart the game and anounce that the game is over!
    }


  }
});
