import * as ship from "./ship";

export interface Position {
  row: number;
  col: number;
}

// Build battleShip gameboard
export let board: any[][] = [];

for (let i = 0; i < 10; i++) {
  board[i] = [];
  let row = "";
  for (let j = 0; j < 10; j++) {
    board[i][j] = 0;
    row += board[i][j] + " ";
  }
}

// Gameboard object
export function gameboard() {
  return {
    // For console display
    displayBoard() {
      for (let i = 0; i < 10; i++) {
        let row = "";
        for (let j = 0; j < 10; j++) {
          row += board[i][j] + " ";
        }
        console.log(row);
      }
    },
    placeShip(board: any, ship: any, positionStart: Position, positionEnd: Position) {
      if (positionStart.row === positionEnd.row && isValidMove(positionStart.row, positionStart.col) && isValidMove(positionEnd.row, positionEnd.col)) {
        for (let i = positionStart.col; i <= positionEnd.col; i++) {
          board[positionStart.row][i] = '#';
        }
      } else if (positionStart.col === positionEnd.col && isValidMove(positionStart.row, positionStart.col) && isValidMove(positionEnd.row, positionEnd.col)) {
        for (let i = positionStart.row; i <= positionEnd.row; i++) {
          board[i][positionStart.col] = '#';  // ship[i - positionStart.row];
        }
      }
    },
    receiveAttack(positionHit: Position) {
      if (board[positionHit.row][positionHit.col] === '#') {
        // Hit
        board[positionHit.row][positionHit.col] = 'X';
      } else if (board[positionHit.row][positionHit.col] === 0) {
        // Miss
        board[positionHit.row][positionHit.col] = 'O';
      }
    },
    sunkAllShips() {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (board[i][j] === '#') {
            return false;
          }
        }
      }
      console.log('All ships sunk!');
      return true;
    }
  };
}

// Check the position on the board
export function isValidMove(x: number, y: number): boolean {
  return x >= 0 && x < 10 && y >= 0 && y < 10;
}
