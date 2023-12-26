import { createShip, Ship } from './objects/ship';
import { Player, Computer } from './objects/player';



export const playGame = async (board: HTMLElement | null, player: Player, computer: Computer) => {
    if (board?.id === "computerBoard") {
      return new Promise<void>((resolve) => {
        const clickHandler = (event: any) => {
          let row = event.target.getAttribute("row");
          let col = event.target.getAttribute("col");
          player.attack(row, col);
          if (event.target.classList.contains("bg-green-500")) {
            event.target.classList.remove("bg-green-500");
            event.target.classList.add("bg-red-500");
          } else {
            event.target.classList.add("bg-gray-500");
          }
          board?.removeEventListener("click", clickHandler);
          resolve();
        }
        board?.addEventListener("click", clickHandler)
      })
   
    } else {
      return new Promise<void>((resolve) => {
        computer.attack();

        if (board?.querySelector(`[row="${computer.array[0]}"][col="${computer.array[1]}"]`)?.classList.contains("bg-green-500")) {
          board?.querySelector(`[row="${computer.array[0]}"][col="${computer.array[1]}"]`)?.classList.remove("bg-green-500");
          board?.querySelector(`[row="${computer.array[0]}"][col="${computer.array[1]}"]`)?.classList.add("bg-red-500");
        } else {
          board?.querySelector(`[row="${computer.array[0]}"][col="${computer.array[1]}"]`)?.classList.add("bg-gray-500");
        }
        resolve();
      })
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
