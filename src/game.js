import { displayBoards, setUpDisplay } from './display';
import Player from './player';
import Gameboard from './gameboard';

class Game {
  constructor() {
    this.player = new Player();
    this.enemy = new Player();
    this.currentPlayer = this.player;
  }

  start() {
    window.removeEventListener('keypress', restart);
    window.game = this;

    this.player.enemy = this.enemy;
    this.enemy.enemy = this.player;
    this.player.gameboard = randomBoard();
    this.enemy.gameboard = randomBoard();
    setUpDisplay();
    displayBoards(this.player, this.enemy);
    const enemyCells = document.querySelectorAll('.enemy-cell');
    enemyCells.forEach((cell) => {
      cell.addEventListener('mousedown', playerTurn);
      cell.game = this;
    });
  }
}
function randomBoard() {
  const fleet = [
    ['Battleship', 4],
    ['Cruiser', 3],
    ['Submarine', 3],
    ['Destroyer', 2],
  ];
  const axis = ['x', 'y'];
  const board = new Gameboard();
  for (let numberOfShips = 0; numberOfShips < 4; numberOfShips += 1) {
    do {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      board.addShip(
        fleet[numberOfShips][0],
        fleet[numberOfShips][1],
        axis[Math.floor(Math.random() * 2)],
        [x, y]
      );
    } while (Object.keys(board.fleet).length === numberOfShips);
  }
  return board;
}

function playerTurn() {
  if (this.game.currentPlayer === this.game.player) {
    if (
      this.game.enemy.gameboard.board[this.classList[1][1]][
        this.classList[1][3]
      ] !== 'hit' &&
      this.game.enemy.gameboard.board[this.classList[1][1]][
        this.classList[1][3]
      ] !== 'miss'
    ) {
      this.game.currentPlayer.sendAttack([
        this.classList[1][1],
        this.classList[1][3],
      ]);
    } else {
      return;
    }
    displayBoards(this.game.player, this.game.enemy);

    this.game.currentPlayer = this.game.enemy;
    while (true) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      if (
        this.game.player.gameboard.board[x][y] !== 'hit' &&
        this.game.player.gameboard.board[x][y] !== 'miss'
      ) {
        this.game.currentPlayer.sendAttack([x, y]);
        displayBoards(this.game.player, this.game.enemy);

        break;
      }
    }
    this.game.currentPlayer = this.game.player;
  }
  const gameTitle = document.querySelector('#game-title');

  if (this.game.player.gameboard.allSunk()) {
    gameTitle.textContent = 'ENEMY WINS!';
    // this.game.start();
    const enemyCells = document.querySelectorAll('.enemy-cell');
    enemyCells.forEach((cell) => {
      const newCell = cell.cloneNode(true);
      cell.parentNode.replaceChild(newCell, cell);
    });
    window.addEventListener('keypress', restart);
    document.querySelector('#restart-text').textContent =
      'Press enter to restart...';
  } else if (this.game.enemy.gameboard.allSunk()) {
    gameTitle.textContent = 'PLAYER WINS!';
    const enemyCells = document.querySelectorAll('.enemy-cell');
    enemyCells.forEach((cell) => {
      const newCell = cell.cloneNode(true);
      cell.parentNode.replaceChild(newCell, cell);
    });
    window.addEventListener('keypress', restart);
    document.querySelector('#restart-text').textContent =
      'Press enter to restart...';
    // this.game.start();
  }
}
/**
 * Each turn add event listenrs to opponents gameboard and remove from current player
 * board. When cell is clicked
 */

function restart(e) {
  if (e.key === 'Enter') {
    e.preventDefault(); // Ensure it is only this code that runs

    this.game.start();
  }
}
export default Game;
