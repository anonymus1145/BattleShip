import { Gameboard } from "./gameboard";

export interface Player {
  attack(row: number, col: number): void;
}

export interface Computer {
  attack(): void,
  array: number[],
}

export const createPlayer = (gameboard: Gameboard): Player => {
  return {
    attack(row: number, col: number): void {
      gameboard.receiveAttack(row, col);
    },
  };
};

// Computer player -> extends player
export const createComputer = (gameboard: Gameboard): Computer => {
  const useCoordinates: { row: number; col: number }[] = [];
  let attack: { row: number; col: number; };
  const availableCoordinates = getAvailableCoordinates();
  const array1: number[] = [];

    if (availableCoordinates.length > 0) {
      const randomIndex = Math.floor(
        Math.random() * availableCoordinates.length
      );
      const { row, col } = availableCoordinates[randomIndex];
      useCoordinates.push({ row, col });
      attack = { row, col };
    } else {
      console.log("No available coordinates");
    }

  return {
    attack(): void {
      gameboard.receiveAttack(attack.row, attack.col);
      array1.push(attack.row, attack.col);
    },
    array: array1
  };
};

// Obtain available coordinates
function getAvailableCoordinates(): { row: number; col: number }[] {
  const allCoordinates: { row: number; col: number }[] = [];

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      
      const isUsed = allCoordinates.some(
        (element) =>
          element.row === row &&
          element.col === col
      );

      if (!isUsed) {
        allCoordinates.push({ row, col });
      }
    }
  }
  return allCoordinates;
}
