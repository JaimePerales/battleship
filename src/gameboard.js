const Ship = require('./ship');

/**
 * Represents a gameboard that contains a 10x10 grid and fleet of ships
 */
class Gameboard {
  constructor() {
    this.board = [...Array(10)].map(() => Array(10));
    this.fleet = [];
  }

  /**
   * Adds ship to gameboard
   * @param {*} shipName type of ship
   * @param {*} length  number of hits ship can take before sunk
   * @param {*} axis  orientation of ship (x or y)
   * @param {*} startLocation starting cell of ship.
   */
  addShip(shipName, length, axis, startLocation) {
    const newShip = new Ship(length, shipName);

    // Horizontal ship placement
    if (axis === 'y') {
      if (newShip.length + startLocation[0] <= 9) {
        // Checks if all cells are available for ship
        for (let i = 0; i < newShip.length; i += 1) {
          if (
            this.board[startLocation[0] + i][startLocation[1]] !== undefined
          ) {
            return;
          }
        }
        // Adds ship to board
        for (let i = 0; i < newShip.length; i += 1) {
          this.board[startLocation[0] + i][startLocation[1]] = shipName;
        }
        // Adds ship to borad's fleet
        this.fleet.push(newShip);
      }

      // Vertical ship placement
    } else if (axis === 'x') {
      if (newShip.length + startLocation[1] <= 9) {
        // Checks if all cells are available for ship
        for (let i = 0; i < newShip.length; i += 1) {
          if (
            this.board[startLocation[0]][startLocation[1] + i] !== undefined
          ) {
            return;
          }
        }
        // Adds ship to board
        for (let i = 0; i < newShip.length; i += 1) {
          this.board[startLocation[0]][startLocation[1] + i] = shipName;
        }
        // Adds ship to borad's fleet
        this.fleet.push(newShip);
      }
    }
  }

  receiveAttack(coordinates) {
    if (
      this.board[coordinates[0]][coordinates[1]] !== 'hit' &&
      this.board[coordinates[0]][coordinates[1]] !== 'miss'
    ) {
      if (this.board[coordinates[0]][coordinates[1]] === undefined) {
        this.board[coordinates[0]][coordinates[1]] = 'miss';
      } else {
        const key = this.board[coordinates[0]][coordinates[1]];
        const hitShip = this.fleet.filter((ship) => ship.name === key);
        hitShip[0].hit();
        this.board[coordinates[0]][coordinates[1]] = 'hit';
        console.table(hitShip);
      }
    }
  }

  allSunk() {
    if (this.fleet.some((ship) => ship.sunk === false)) {
      return false;
    }
    return true;
  }
}
module.exports = Gameboard;
