import { ship } from "../objects/ship";

type ship = any;

export function gameboard() {
  return {
    grid: Array.from({ length: 10 }, () => Array(10).fill("")),
    ships: [],
    missedAttacks: [],
    placeShip(ship: ship, row: number, column: number, isVertical: boolean) {
      if (this.isPlacementValid(ship, row, col, isVertical)) {
        const shipCoordinates: { row: number; col: number }[] = [];

        for (let i = 0; i < ship.length; i++) {
          const currentRow = isVertical ? row + i : row;
          const currentCol = isVertical ? col : col + i;
          this.grid[currentRow][currentCol] = "S"; // 'S' represents a ship
          shipCoordinates.push({ row: currentRow, col: currentCol });
        }

        ship.coordinates = shipCoordinates;
        this.ships.push(ship);
      } else {
        console.log("Invalid ship placement");
      }
    },
    // Add validation for placing ships
    isPlacementValid(
      ship: ship,
      row: number,
      col: number,
      isVertical: boolean
    ): boolean {
      const endRow = isVertical ? row + ship.length - 1 : row;
      const endCol = isVertical ? col : col + ship.length - 1;

      // Check if the ship is within the boundaries of the gameboard
      if (endRow >= 10 || endCol >= 10) {
        return false;
      }

      // Check if the cells are empty for ship placement
      for (let i = row; i <= endRow; i++) {
        for (let j = col; j <= endCol; j++) {
          if (this.grid[i][j] === "S") {
            return false; // Ship overlap
          }
        }
      }

      return true;
    },
  };
}
