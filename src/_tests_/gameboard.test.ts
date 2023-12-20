import * as TestFunctions from '../objects/gameboard';
import * as TestShip from '../objects/ship';

const { createGameboard } = jest.requireActual<typeof TestFunctions>('../objects/gameboard.ts');
const { createShip: ship } = jest.requireActual<typeof TestShip>('../objects/ship.ts');

let gameboard = createGameboard();
let firstShip = ship(5);


describe('Gameboard function', () => {
    it('placeShip, should place a ship', () => {
        gameboard.placeShip(firstShip, 1, 1, true);
        expect(gameboard.ships.length).toBe(1);
    })

    it('receiveAttack, should record an missed attack', () => {
        gameboard.receiveAttack(9 , 9);
        expect(gameboard.missedAttacks.length).toBe(1);
    })

    it('receiveAttack, should record a hit', () => {
        gameboard.receiveAttack(1 , 1);
        gameboard.receiveAttack(2 , 1);
        gameboard.receiveAttack(3 , 1);
        gameboard.receiveAttack(4 , 1);
        gameboard.receiveAttack(5 , 1);
        expect(firstShip.hits).toBe(5);
    })

    it('areAllShipsSunk, should check if all ships are sunk', () => {
        expect(firstShip.isSunk).toBe(true);
    })
})
