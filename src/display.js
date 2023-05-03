function setUpDisplay() {
  const content = document.querySelector('#content');
  while (content.firstChild) {
    content.firstChild.remove();
  }

  // Creates Gameboard Div
  const gameBoards = createGameboards();

  // Creates game title
  content.appendChild(createGameTitle());

  content.appendChild(gameBoards);

  // Creates board containers
  const playerGameBoardContainer = createBoardContainer();
  const enemyGameBoardContainer = createBoardContainer();

  // Creates boards
  const playerGameBoard = createBoard();
  playerGameBoard.id = 'player-board';

  const enemyGameBoard = createBoard();
  enemyGameBoard.id = 'enemy-board';

  // Attaches boards to contaniers
  playerGameBoardContainer.appendChild(playerGameBoard);
  enemyGameBoardContainer.appendChild(enemyGameBoard);

  // Attaches containers to game
  gameBoards.appendChild(playerGameBoardContainer);
  gameBoards.appendChild(enemyGameBoardContainer);

  // Creates board cells
  createCells(playerGameBoard, enemyGameBoard);

  gameBoards.prepend(createColumnLabels());
  gameBoards.appendChild(createColumnLabels());

  // Creates Row lables
  const playerLabelRow = createRowLabels();
  const enemyLablelRow = createRowLabels();

  playerGameBoardContainer.appendChild(playerLabelRow);
  enemyGameBoardContainer.appendChild(enemyLablelRow);
}

// Displays players boards
function displayBoards(player, enemy) {
  const playerBoard = player.gameboard.board;
  const enemyBoard = enemy.gameboard.board;

  for (let i = 0; i < playerBoard.length; i += 1) {
    for (let j = 0; j < playerBoard[i].length; j += 1) {
      if (playerBoard[i][j]) {
        const testCell = document.getElementsByClassName(
          `player-cell [${i},${j}]`
        );
        if (playerBoard[i][j] === 'hit') {
          testCell[0].style.backgroundColor = '#ff0000';
        } else if (playerBoard[i][j] === 'miss') {
          testCell[0].style.backgroundColor = '#0000ff';
        } else {
          testCell[0].style.backgroundColor = '#00FF00';
        }
      }

      if (enemyBoard[i][j]) {
        const testCell = document.getElementsByClassName(
          `enemy-cell [${i},${j}]`
        );
        if (enemyBoard[i][j] === 'hit') {
          testCell[0].style.backgroundColor = '#ff0000';
        } else if (enemyBoard[i][j] === 'miss') {
          testCell[0].style.backgroundColor = '#0000ff';
        }
        // else {
        //   testCell[0].style.backgroundColor = '#00FF00';
        // }
      }
    }
  }
}
// Creates Gameboard Div
function createGameboards() {
  const gameBoards = document.createElement('div');
  gameBoards.id = 'gameboards';
  return gameBoards;
}

// Creates game title
function createGameTitle() {
  const gameTitle = document.createElement('h1');
  gameTitle.id = 'game-title';
  gameTitle.textContent = 'BATTLESHIP';
  return gameTitle;
}

// Creates board container
function createBoardContainer() {
  const gameBoardContainer = document.createElement('div');
  gameBoardContainer.classList.add('board-container');
  return gameBoardContainer;
}

// Creates board
function createBoard() {
  const gameBoard = document.createElement('div');
  gameBoard.classList.add('gameboard');
  return gameBoard;
}

// Create column labels
function createColumnLabels() {
  const labelCol = document.createElement('div');
  labelCol.classList.add('label-col');

  for (let i = 0; i < 10; i += 1) {
    const labelCell = document.createElement('div');
    labelCell.textContent = `${i + 1}`;
    labelCell.classList.add('label-cell');
    labelCol.appendChild(labelCell);
  }
  return labelCol;
}

// Create row labels
function createRowLabels() {
  const labelRow = document.createElement('div');
  labelRow.classList.add('label-row');

  const rowLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  for (let i = 0; i < 10; i += 1) {
    const cell = document.createElement('div');
    cell.textContent = `${rowLabels[i]}`;
    cell.classList.add('label-cell');
    labelRow.appendChild(cell);
  }
  return labelRow;
}

// Create Cells
function createCells(playerGameBoard, enemyGameBoard) {
  for (let i = 0; i < 10; i += 1) {
    const playerRow = document.createElement('div');
    playerRow.classList.add('row');

    const enemyRow = document.createElement('div');
    enemyRow.classList.add('row');

    for (let j = 0; j < 10; j += 1) {
      const playerCell = document.createElement('div');
      playerCell.classList.add('cell');
      playerCell.classList.add(`[${i},${j}]`);
      playerCell.classList.add('player-cell');

      const enemyCell = document.createElement('div');
      enemyCell.classList.add('cell');
      enemyCell.classList.add(`[${i},${j}]`);
      enemyCell.classList.add('enemy-cell');

      playerRow.appendChild(playerCell);
      enemyRow.appendChild(enemyCell);
    }
    playerGameBoard.appendChild(playerRow);
    enemyGameBoard.appendChild(enemyRow);
  }
}

module.exports = { setUpDisplay, displayBoards };
