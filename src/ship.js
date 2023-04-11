class Ship {
  constructor(length) {
    this.length = length;
    this.sunk = false;
    this.hits = 0;
  }

  isSunk() {
    return this.sunk;
  }

  hit() {
    if (!this.isSunk()) {
      this.hits += 1;
    }
    if (this.hits >= this.length) {
      this.sunk = true;
    }
  }
}
module.exports = Ship;
