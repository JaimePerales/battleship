/* eslint-disable comma-dangle */
const Gameboard = require('./gameboard');

class Player {
  constructor() {
    this.gameboard = new Gameboard();
  }

  sendAttack(coordinates) {
    this.enemy.gameboard.receiveAttack(coordinates);
  }

  randomAttack() {
    this.enemy.gameboard.receiveAttack(
      Array.from({ length: 2 }, () => Math.floor(Math.random() * 10))
    );
  }
}

module.exports = Player;
