import { Ship, createShip } from "../objects/ship";

interface Gameboard {
  [x: string]: any;
  placeShip: (
    ship: Ship,
    row: number,
    col: number,
    isVertical: boolean
  ) => void;
  receiveAttack: (row: number, col: number) => void;
  areAllShipsSunk: () => boolean;
}


export const createGameboard = (): Gameboard => {
  const grid: string[][] = Array.from({ length: 10 }, () => Array(10).fill(""));
  const ships: Ship[] = [];
  const missedAttacks: { row: number; col: number }[] = [];

  const placeShip = (ship: Ship, row: number, col: number, isVertical: boolean): void => {
    if (isPlacementValid(ship, row, col, isVertical)) {
      const shipCoordinates: { row: number; col: number }[] = [];

      for (let i = 0; i < ship.length; i++) {
        const currentRow = isVertical ? row + i : row;
        const currentCol = isVertical ? col : col + i;
        grid[currentRow][currentCol] = '#'; // represents a ship cell
        shipCoordinates.push({ row: currentRow, col: currentCol });
      }

      ship.coordinates = shipCoordinates;
      ships.push(ship);
    } else {
      console.log('Invalid ship placement');
    }
  };

  const receiveAttack = (row: number, col: number): void => {
    const attackedCell = grid[row][col];

    if (attackedCell === '#') {
      // Hit a ship
      const hitShip = ships.find((ship) =>
        ship.coordinates.some((coord) => coord.row === row && coord.col === col)
      );
      if (hitShip) {
        hitShip.hit();
      }
    } else {
      // Missed the ship
      missedAttacks.push({ row, col });
      console.log('Missed the target!');
    }
  };

  const isPlacementValid = (ship: Ship, row: number, col: number, isVertical: boolean): boolean => {
    const endRow = isVertical ? row + ship.length - 1 : row;
    const endCol = isVertical ? col : col + ship.length - 1;

    // Check if the ship is within the boundaries of the gameboard
    if (endRow >= 10 || endCol >= 10) {
      return false;
    }

    // Check if the cells are empty for ship placement
    for (let i = row; i <= endRow; i++) {
      for (let j = col; j <= endCol; j++) {
        if (grid[i][j] === '#') {
          return false; // Ship overlap
        }
      }
    }

    return true;
  };

  const areAllShipsSunk = (): boolean => ships.every((ship) => ship.isSunk === true);

  return { placeShip, receiveAttack, areAllShipsSunk, grid, ships, missedAttacks };
};
