import * as gameboard from "./gameboard";

export function player() {
  return {
    name: "",
    turn: false,
    computerShoot() {
      let storedPosition: gameboard.Position[] = [];
      let position: gameboard.Position = {
        row: Math.floor(Math.random() * 10),
        col: Math.floor(Math.random() * 10),
      };
      if (gameboard.isValidMove(position.row, position.col)) {
        if (storedPosition.includes(position)) {
          this.computerShoot();
        } else {
          storedPosition.push(position);
          return position;
        }
      }
    },
  };
}
