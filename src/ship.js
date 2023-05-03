class Ship {
  constructor(length, name) {
    this.length = length;
    this.sunk = false;
    this.hits = 0;
    this.name = name;
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
