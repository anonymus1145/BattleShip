export type Ship = {
  length: number;
  coordinates: { row: number; col: number }[];
  hits: number;
  isSunk: boolean;
  hit(): void;
};

export const createShip = (length: number): Ship => {
  return {
    length: length,
    coordinates: [] as { row: number; col: number }[],
    hits: 0,
    isSunk: false,
    hit() {
      this.hits += 1;
      if (this.hits === this.length) {
        this.isSunk = true;
        console.log("Ship is sunck");
      } else {
        console.log("Ship hit");
      }
    },
  };
}