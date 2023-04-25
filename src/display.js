function setUpDisplay() {
  const content = document.querySelector('#content');
  const gameBoards = document.createElement('div');
  const gameTitle = document.createElement('h1');
  gameTitle.id = 'game-title';
  gameTitle.textContent = 'BATTLESHIP';
  gameBoards.id = 'gameboards';
  content.appendChild(gameTitle);
  content.appendChild(gameBoards);

  const playerGameBoardContainer = document.createElement('div');
  const enemyGameBoardContainer = document.createElement('div');
  playerGameBoardContainer.classList.add('board-container');
  enemyGameBoardContainer.classList.add('board-container');

  const playerGameBoard = document.createElement('div');
  const enemyGameBoard = document.createElement('div');

  playerGameBoardContainer.appendChild(playerGameBoard);
  enemyGameBoardContainer.appendChild(enemyGameBoard);

  playerGameBoard.classList.add('gameboard');
  enemyGameBoard.classList.add('gameboard');

  gameBoards.appendChild(playerGameBoardContainer);
  gameBoards.appendChild(enemyGameBoardContainer);

  for (let i = 0; i < 10; i += 1) {
    const playerRow = document.createElement('div');
    const enemyRow = document.createElement('div');
    playerRow.classList.add('row');
    enemyRow.classList.add('row');
    for (let j = 0; j < 10; j += 1) {
      const playerCell = document.createElement('div');
      const enemyCell = document.createElement('div');
      playerCell.classList.add('cell');
      enemyCell.classList.add('cell');
      playerCell.id = `[${i}, ${j}]`;
      enemyCell.id = `[${i}, ${j}]`;
      playerRow.appendChild(playerCell);
      enemyRow.appendChild(enemyCell);
    }
    playerGameBoard.appendChild(playerRow);
    enemyGameBoard.appendChild(enemyRow);
  }
  const playerLabelCol = document.createElement('div');
  const enemyLablelCol = document.createElement('div');
  playerLabelCol.classList.add('label-col');
  enemyLablelCol.classList.add('label-col');
  gameBoards.prepend(playerLabelCol);
  gameBoards.appendChild(enemyLablelCol);

  for (let i = 0; i < 10; i += 1) {
    const playerCell = document.createElement('div');
    playerCell.textContent = `${i + 1}`;
    playerCell.classList.add('label-cell');
    playerLabelCol.appendChild(playerCell);

    const enemyCell = document.createElement('div');
    enemyCell.textContent = `${i + 1}`;
    enemyCell.classList.add('label-cell');
    enemyLablelCol.appendChild(enemyCell);
  }

  const playerLabelRow = document.createElement('div');
  const enemyLablelRow = document.createElement('div');
  playerLabelRow.classList.add('label-row');
  enemyLablelRow.classList.add('label-row');
  playerGameBoardContainer.appendChild(playerLabelRow);
  enemyGameBoardContainer.appendChild(enemyLablelRow);
  const rowLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  for (let i = 0; i < 10; i += 1) {
    const playerCell = document.createElement('div');
    playerCell.textContent = `${rowLabels[i]}`;
    playerCell.classList.add('label-cell');
    playerLabelRow.appendChild(playerCell);

    const enemyCell = document.createElement('div');
    enemyCell.textContent = `${rowLabels[i]}`;
    enemyCell.classList.add('label-cell');
    enemyLablelRow.appendChild(enemyCell);
  }
}

module.exports = setUpDisplay;
