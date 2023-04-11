import Gameboard from '../src/gameboard';

const gameboard = new Gameboard();

test('gameboard contains 100 cells', () => {
  let i = 0;
  for (let index = 0; index < gameboard.board.length; index += 1) {
    for (let j = 0; j < gameboard.board[index].length; j += 1) {
      i += 1;
    }
  }
  expect(i).toBe(100);
});

test('Added ship with length of 3 to board', () => {
  gameboard.addShip('destroyer', 3, 'x', [0, 0]);
  expect(gameboard.board[0][0]).toBe('destroyer');
  expect(gameboard.board[1][0]).toBe('destroyer');
  expect(gameboard.board[2][0]).toBe('destroyer');
});

test('Added ship with length of 4 to board', () => {
  gameboard.addShip('battleship', 4, 'y', [0, 0]);
  expect(gameboard.board[0][0]).toBe('battleship');
  expect(gameboard.board[0][1]).toBe('battleship');
  expect(gameboard.board[0][2]).toBe('battleship');
  expect(gameboard.board[0][3]).toBe('battleship');
});

test('Added ship with length of 4 to board', () => {
  gameboard.addShip('battleship', 4, 'y', [6, 7]);
  expect(gameboard.board[6][7]).toBe(undefined);
  expect(gameboard.board[6][8]).toBe(undefined);
  expect(gameboard.board[6][9]).toBe(undefined);
});

test('Added ship with length of 4 to board', () => {
  gameboard.addShip('battleship', 4, 'x', [7, 7]);
  expect(gameboard.board[7][7]).toBe(undefined);
  expect(gameboard.board[8][7]).toBe(undefined);
  expect(gameboard.board[9][7]).toBe(undefined);
});
