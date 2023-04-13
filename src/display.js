function setUpDisplay() {
  const content = document.querySelector('#content');
  const gameBoards = document.createElement('div');
  gameBoards.id = 'gameboards';
  content.appendChild(gameBoards);

  const playerGameBoard = document.createElement('div');
  const enemyGameBoard = document.createElement('div');

  playerGameBoard.classList.add('gameboard');
  enemyGameBoard.classList.add('gameboard');

  gameBoards.appendChild(playerGameBoard);
  gameBoards.appendChild(enemyGameBoard);
}

module.exports = setUpDisplay;
