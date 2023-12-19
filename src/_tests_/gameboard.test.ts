import * as TestFunctions from '../objects/gameboard';
import * as TestShip from '../objects/ship';

const { createGameboard } = jest.requireActual<typeof TestFunctions>('../objects/gameboard.ts');
const { createShip: ship } = jest.requireActual<typeof TestShip>('../objects/ship.ts');

let gameboard = createGameboard();
let firstShip = ship(5);


describe('Gameboard', () => {
    it('placeShip, should place a ship', () => {
        gameboard.placeShip(firstShip, 1, 1, true);
        expect(gameboard.ships.length).toBe(1);
    })
})