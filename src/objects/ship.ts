export function shipObject() {
  return {
    length: 0,
    hits: 0,
    sunk: false,
    hit() {
      this.hits += 1;
    },
    isSunk() {
      if (this.hits === this.length) {
        this.sunk = true;
      }
    }
  };
}
