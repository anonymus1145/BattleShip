import { Ship } from "../objects/ship";


export interface Gameboard {
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
      let shipCoordinates: { row: number; col: number };

      for (let i = 0; i < ship.length; i++) {
        let currentRow = isVertical ? row + i : row;
        let currentCol = isVertical ? col : col + i;
        grid[currentRow][currentCol] = '#'; // represents a ship cell
        shipCoordinates = { row: currentRow, col: currentCol };
        ship.coordinates = shipCoordinates;
      }

      ships.push(ship);
      console.log(ship);
     
    } else {
      console.log('Invalid ship placement');
    }
  };

  const receiveAttack = (row: number, col: number): void => {
    const attackedCell = grid[row][col];

    if (attackedCell == '#') {
      // Hit a ship
      alert('Hit a ship!');
   
      const shipHit = (event: any) => {
        event.target.classList.add('bg-red-500');
        removeEventListener('click', shipHit);
      }
      addEventListener('click', shipHit);

      // If the ship is hit in the head
      ships.forEach((ship) => {
        if (ship.coordinates.row == row && ship.coordinates.col == col) {
          ship.isSunk = true;
          alert("Head of the ship is hit!");
        }
      })

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

  const areAllShipsSunk = (): boolean => {
    let snuk = 0;
    ships.forEach((ship) => {
      //console.log(ship.isSunk);
      if (ship.isSunk == true) {
        snuk++;
      }
    })

    if (snuk == ships.length) {
      console.log('All ships are sunk');
      return true;
    } else {
      return false;
    }
  }

  return { placeShip, receiveAttack, areAllShipsSunk, grid, ships, missedAttacks };
};
