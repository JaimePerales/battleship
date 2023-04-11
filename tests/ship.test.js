import Ship from '../src/ship';

const ship = new Ship(3);

test('ship hit once', () => {
  ship.hit();
  expect(ship.hits).toBe(1);
});

test('ship is with no hits is not sunk', () => {
  expect(ship.isSunk()).toBe(false);
});

test('ship hit more than lenght is sunk', () => {
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
