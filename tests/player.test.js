import Player from '../src/player';

test('player sends miss to opponent', () => {
  const player = new Player();
  const opp = new Player();

  player.enemy = opp;
  opp.enemy = player;

  player.sendAttack([0, 0]);
  expect(opp.gameboard.board[0][0]).toBe('miss');
});

test('player sends miss to opponent', () => {
  const player = new Player();
  const opp = new Player();

  player.enemy = opp;
  opp.enemy = player;

  player.sendAttack([7, 3]);
  expect(opp.gameboard.board[7][3]).toBe('miss');
});

test('player sends miss to opponent', () => {
  const player = new Player();
  const opp = new Player();

  player.enemy = opp;
  opp.enemy = player;

  opp.gameboard.addShip('destroyer', 3, 'x', [0, 0]);
  player.sendAttack([0, 0]);
  expect(opp.gameboard.board[0][0]).toBe('hit');
  expect(opp.gameboard.fleet.destroyer.hits).toBe(1);
});
