import { createGameboard, Gameboard } from './objects/gameboard';
import { createPlayer, createComputer } from './objects/player';
import { createShip } from './objects/ship';

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

export const returnLength = () => {
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
          firstSquare.classList.add("bg-green-500");
  
        } else if (numClicks === 1) {
          secondSquare = event.target as HTMLElement;
          secondSquare.classList.add("bg-red-500");
  
          if (firstSquare.getAttribute("row") === secondSquare.getAttribute("row")) {
            length = Math.abs(Number(firstSquare.getAttribute("col")) - Number(secondSquare.getAttribute("col")));
            isVertical = true;
            lengths.push(length + 1, isVertical);
          } else if (firstSquare.getAttribute("col") === secondSquare.getAttribute("col")) {
            length = Math.abs(Number(firstSquare.getAttribute("row")) - Number(secondSquare.getAttribute("row")));
            isVertical = false;
            lengths.push(length + 1, isVertical);
          }
        }
        numClicks++;
  
        // If enough clicks have occurred, resolve the promise with the array of lengths
        if (lengths.length === numClicks) {
          playerBoard?.removeEventListener("click", clickHandler);
          resolve(lengths);
        }
      };
  
      playerBoard?.addEventListener("click", clickHandler);
    });
  };