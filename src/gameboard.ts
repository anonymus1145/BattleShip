import * as ship from "./ship";

interface Position {
  row: number;
  col: number;
}

// Build battleShip gameboard
export let board: any[][] = [];

for (let i = 1; i <= 10; i++) {
  board[i] = [];
  let row = "";
  for (let j = 1; j <= 10; j++) {
    board[i][j] = 0;
    row += board[i][j] + " ";
  }
  //console.log(row);
}

// Gameboard object
export function gameboard() {
  return {
    board,
    placeShip(ship: any, position: Position) {
      if (isValidMove(position.row, position.col)) {
        for (let i = 0; i < ship.shipObject.length; i++) {
          board[position.row + i][position.col] = ship.shipObject[i];
        }
      }
    },
  };
}

// Check the position on the board
export function isValidMove(x: number, y: number): boolean {
  return x >= 1 && x <= 10 && y >= 1 && y <= 10;
}
