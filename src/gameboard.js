const Ship = require('./ship');

class Gameboard {
  constructor() {
    this.board = [...Array(10)].map(() => Array(10));
    this.fleet = {};
  }

  addShip(shipName, length, axis, startLocation) {
    const newShip = new Ship(length);
    if (axis === 'x') {
      if (newShip.length + startLocation[0] <= 9) {
        for (let i = 0; i < newShip.length; i += 1) {
          this.board[startLocation[0] + i][startLocation[1]] = shipName;
        }
      }
    } else if (axis === 'y') {
      if (newShip.length + startLocation[1] <= 9) {
        for (let i = 0; i < newShip.length; i += 1) {
          this.board[startLocation[0]][startLocation[1] + i] = shipName;
        }
        this.fleet[shipName] = newShip;
      }
    }
  }
}
module.exports = Gameboard;
