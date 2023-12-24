import { createGameboard, Gameboard } from './objects/gameboard';
import { createPlayer, createComputer } from './objects/player';
import { createShip, Ship } from './objects/ship';

interface Game {
    playGame(): void;
  }

export const createGame = (): Game => {
  const playerGameboard: Gameboard = createGameboard();
  const computerGameboard: Gameboard = createGameboard();

    // We place some ships on the player's gameboard and some on the computer's
    playerGameboard.placeShip(createShip(3), 0, 0, true);
    computerGameboard.placeShip(createShip(3), 1, 1, false);

    const player = createPlayer(playerGameboard);
    const computer = createComputer(computerGameboard);

    return {
        playGame(): void {
            while (true) {
                player.attack(0, 0);
                
                if (computerGameboard.areAllShipsSunk()) {
                    console.log('Player won!');
                    break;
                }

                computer.attack();

                if (playerGameboard.areAllShipsSunk()) {
                    console.log('Computer won!');
                    break;
                }
            }
        }
    }
}

export const returnShipPosition = () => {
    let numClicks = 0;
    return new Promise((resolve) => {
      const playerBoard = document.getElementById("playerBoard");
      const lengths: any = [];
      let firstSquare: any;
      let secondSquare: any;
      let isVertical = false;
      let length = 0;
  
      const clickHandler = (event: any) => {
        if (numClicks === 0) {
          firstSquare = event.target as HTMLElement;
  
        } else if (numClicks === 1) {
          secondSquare = event.target as HTMLElement;
  
          if (firstSquare.getAttribute("row") === secondSquare.getAttribute("row")) {
            length = Math.abs(Number(firstSquare.getAttribute("col")) - Number(secondSquare.getAttribute("col")));
            isVertical = false;
            let squareStartRow = Number(firstSquare.getAttribute("row"));
            let squareStartCol = Number(firstSquare.getAttribute("col"));
            lengths.push(length + 1, isVertical, squareStartRow, squareStartCol);

          } else if (firstSquare.getAttribute("col") === secondSquare.getAttribute("col")) {
            length = Math.abs(Number(firstSquare.getAttribute("row")) - Number(secondSquare.getAttribute("row")));
            isVertical = true;
            let squareStartRow = Number(firstSquare.getAttribute("row"));
            let squareStartCol = Number(firstSquare.getAttribute("col"));
            lengths.push(length + 1, isVertical, squareStartRow, squareStartCol);
          }
        }
        numClicks++;
  
        // If enough clicks have occurred, resolve the promise with the array of lengths
        if (numClicks === 2) {
          playerBoard?.removeEventListener("click", clickHandler);
          resolve(lengths);
        }
      };
  
      playerBoard?.addEventListener("click", clickHandler);
    });
  };

  export const randomRowCol = () => {
    return Math.floor(Math.random() * 9) + 1;
  }

  export const displayShips = (board: HTMLElement | null, ship: Ship, row: number, col: number, isVertical: boolean) => {
    for (let j = 0; j < ship.length; j++) {
      const currentRow = isVertical ? row + j : row;
      const currentCol = isVertical ? col : col + j;
      board?.querySelector(`[row="${currentRow}"][col="${currentCol}"]`)?.classList.add("bg-green-500"); // add green background to the ship cells
    }
  }