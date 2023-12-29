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
  const availableCoordinates = getAvailableCoordinates();
  let attack: { row: number; col: number };

    // Function to return the coordinates of the atacked ship
    const getAttackCoordinates = (): { row: number; col: number } => {
      if (availableCoordinates.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * availableCoordinates.length
        );
        attack = availableCoordinates[randomIndex];

        if (useCoordinates.includes(attack)) {
          return getAttackCoordinates();
        } else {
          useCoordinates.push(attack);
        }
      } else {
        console.log("No available coordinates");
      }
      return attack;
    }

  return {
    attack(): void {
      this.array = [];
      let attack = getAttackCoordinates();
      this.array.push(attack.row, attack.col);
      gameboard.receiveAttack(attack.row, attack.col);
    },
    array: [],
  };
};

// Obtain all coordinates
function getAvailableCoordinates(): { row: number; col: number }[] {
  const allCoordinates: { row: number; col: number }[] = [];

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      
      allCoordinates.push({ row, col });

    }
  }
  return allCoordinates;
}
