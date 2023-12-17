import * as TestFunction from "../objects/gameboard";

const { isValidMove, gameboard } =
  jest.requireActual<typeof TestFunction>("../gameboard");

describe("Test isValidMove function", () => {
  it("should check to see if the ship is within the board", () => {
    expect(isValidMove(0, 1)).toBe(true);
    expect(isValidMove(10, 0)).toBe(false);
    expect(isValidMove(4, 5)).toBe(true);
  });
});

let board: any[][] = [];

for (let i = 0; i < 10; i++) {
  board[i] = [];
  let row = "";
  for (let j = 0; j < 10; j++) {
    board[i][j] = 0;
    row += board[i][j] + " ";
  }
}

const gameBoard = gameboard();
const ship = { length: 5 };
const positionStart = { row: 0, col: 0 };
const positionEnd = { row: 0, col: 4 };

describe("Test gameBoard.placeShip function", () => {
  it("should place the ship on the board", () => {
    gameBoard.placeShip(board, ship, positionStart, positionEnd);
    expect(board[0][1]).toBe("#");
    expect(board[0][2]).toBe("#");
    expect(board[0][3]).toBe("#");
    expect(board[0][4]).toBe("#");
  });
});
