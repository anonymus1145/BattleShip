import { gameLayout } from "./pages/gameLayout";
import { startGame, readyToStart, restart } from "./pages/startGame";
import { createGameboard, Gameboard } from "./objects/gameboard";
import { createPlayer, createComputer } from "./objects/player";
import { createShip } from "./objects/ship";
import {
  returnShipPosition,
  randomRowCol,
  displayShips,
  playGame,
} from "./gameFunctions";

document.addEventListener("DOMContentLoaded", async () => {
  await startGame().then(() => {
    gameLayout().then(() => {
      console.log("gameLayout ended");
      setTimeout(() => alert("Let's place your ships, first ship is one square long!"), 1000);
    });
  });

  // Create two gameboards, one for the player and one for the computer
  const playerBoard = document.getElementById("playerBoard");
  const computerBoard = document.getElementById("computerBoard");

  const playerGameboard: Gameboard = createGameboard();
  const computerGameboard: Gameboard = createGameboard();

  // Create two players, one for the player and one for the computer
  const player = createPlayer(computerGameboard); // Player will atack the computer's gameboard
  const computer = createComputer(playerGameboard);

  // Place the ships on the player's gameboard
  for (let i = 1; i < 6; i++) {
    // Change to test -> in place of 2 is 6 normaly
    // Return length of ship and if it is vertical
    let length: any = await returnShipPosition();
    // Check if the ship is within the boundaries of the gameboard
    if (length[0] != i) {
      alert("Invalid ship length, please try again");
      i--;
    } else {
      if (i >= 1 && i < 5) {
        alert("Place the next ship of " + (i + 1) + " square length!");
      }
      let ship = createShip(i);
      playerGameboard.placeShip(ship, length[2], length[3], length[1]);
      displayShips(playerBoard, ship, length[2], length[3], length[1]);
    }
  }

  for (let i = 1; i < 6; i++) {
    // Change to test -> in place of 2 is 6 normaly
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
    });

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
    computerGameboard.placeShip(
      ship,
      rowColArray[0],
      rowColArray[1],
      isVertical
    );
    /*displayShips(  //Comment if you don't want to see where the ships of the computer are placed  
      computerBoard,
      ship,
      rowColArray[0],
      rowColArray[1],
      isVertical
    ); */
  }

  await readyToStart().then( async () => {
    console.log("readyToStart ended");
    let gameOver = false;
    setTimeout(() => alert("Choose your target!"), 1000);

    while (!gameOver) {
       
    await playGame(computerBoard, player, computer).then( async () => {
      
      if (computerGameboard.areAllShipsSunk() == true) {
        alert("You win!");
        gameOver = true;
        restart();
      }
      await playGame(playerBoard, player, computer).then(() => {
        
        if (playerGameboard.areAllShipsSunk() == true) {
          alert("Computer win!");
          gameOver = true;
          restart();
        }
      })
    })
    }
  });
});
