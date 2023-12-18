export function ship(imput: number) {
  return {
    length: imput,
    hits: 0,
    isSunck: false,
    hit() {
      this.hits += 1;
      if (this.hits === this.length) {
        this.isSunck = true;
        console.log("Ship is sunck");
      } else {
        console.log("Ship hit");
      }
    },
  };
}
