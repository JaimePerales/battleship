import Gameboard from '../src/gameboard';

test('gameboard contains 100 cells', () => {
  const gameboard = new Gameboard();
  let i = 0;
  for (let index = 0; index < gameboard.board.length; index += 1) {
    for (let j = 0; j < gameboard.board[index].length; j += 1) {
      i += 1;
    }
  }
  expect(i).toBe(100);
});

test('Added ship with length of 3 to board', () => {
  const gameboard = new Gameboard();
  gameboard.addShip('destroyer', 3, 'x', [0, 0]);
  expect(gameboard.board[0][0]).toBe('destroyer');
  expect(gameboard.board[1][0]).toBe('destroyer');
  expect(gameboard.board[2][0]).toBe('destroyer');
});

test('Added ship with length of 4 to board', () => {
  const gameboard = new Gameboard();
  gameboard.addShip('battleship', 4, 'y', [0, 0]);
  expect(gameboard.board[0][0]).toBe('battleship');
  expect(gameboard.board[0][1]).toBe('battleship');
  expect(gameboard.board[0][2]).toBe('battleship');
  expect(gameboard.board[0][3]).toBe('battleship');
});

test('Added ship with length of 4 to board', () => {
  const gameboard = new Gameboard();
  gameboard.addShip('battleship', 4, 'y', [6, 7]);
  expect(gameboard.board[6][7]).toBe(undefined);
  expect(gameboard.board[6][8]).toBe(undefined);
  expect(gameboard.board[6][9]).toBe(undefined);
});

test('Added ship with length of 4 to board', () => {
  const gameboard = new Gameboard();
  gameboard.addShip('battleship', 4, 'x', [7, 7]);
  expect(gameboard.board[7][7]).toBe(undefined);
  expect(gameboard.board[8][7]).toBe(undefined);
  expect(gameboard.board[9][7]).toBe(undefined);
});

test('Add ship to cell occupied by ship', () => {
  const gameboard = new Gameboard();
  gameboard.addShip('destroyer', 3, 'x', [0, 0]);
  gameboard.addShip('battleship', 4, 'x', [0, 0]);
  expect(gameboard.board[0][0]).toBe('destroyer');
  expect(gameboard.board[1][0]).toBe('destroyer');
  expect(gameboard.board[2][0]).toBe('destroyer');
});

test('Add ship to cell occupied by ship', () => {
  const gameboard = new Gameboard();
  gameboard.addShip('destroyer', 3, 'x', [0, 0]);
  gameboard.addShip('battleship', 4, 'x', [2, 0]);
  expect(gameboard.board[0][0]).toBe('destroyer');
  expect(gameboard.board[1][0]).toBe('destroyer');
  expect(gameboard.board[2][0]).toBe('destroyer');
});

test('Received attack at unoccupied cell', () => {
  const gameboard = new Gameboard();
  gameboard.receiveAttack([0, 1]);
  expect(gameboard.board[0][1]).toBe('miss');
});

test('Received attack at unoccupied cell', () => {
  const gameboard = new Gameboard();
  gameboard.receiveAttack([0, 3]);
  expect(gameboard.board[0][3]).toBe('miss');
});

test('Received attack at occupied cell', () => {
  const gameboard = new Gameboard();
  gameboard.addShip('destroyer', 3, 'x', [0, 0]);
  gameboard.receiveAttack([0, 0]);
  expect(gameboard.board[0][0]).toBe('hit');
  expect(gameboard.fleet.destroyer.hits).toBe(1);
});

test('Received attack at occupied cell', () => {
  const gameboard = new Gameboard();
  gameboard.addShip('destroyer', 3, 'x', [0, 0]);
  gameboard.receiveAttack([0, 0]);
  gameboard.receiveAttack([1, 0]);
  gameboard.receiveAttack([2, 0]);
  expect(gameboard.board[2][0]).toBe('hit');
  expect(gameboard.fleet.destroyer.hits).toBe(3);
  expect(gameboard.fleet.destroyer.isSunk()).toBe(true);
});

test('All ships are not sunk', () => {
  const gameboard = new Gameboard();
  gameboard.addShip('battleship', 4, 'y', [0, 1]);
  gameboard.addShip('destroyer', 3, 'x', [0, 0]);
  gameboard.fleet.battleship.sunk = true;
  gameboard.fleet.destroyer.sunk = false;
  expect(gameboard.allSunk() === false);
});

test('All ships are not sunk', () => {
  const gameboard = new Gameboard();
  gameboard.addShip('battleship', 4, 'y', [0, 1]);
  gameboard.addShip('destroyer', 3, 'x', [0, 0]);
  gameboard.fleet.battleship.sunk = true;
  gameboard.fleet.destroyer.sunk = true;
  expect(gameboard.allSunk() === true);
});
