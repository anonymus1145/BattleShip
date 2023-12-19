// Test the hit function
import * as TestFunctions from '../objects/ship';

const { createShip: ship } = jest.requireActual<typeof TestFunctions>('../objects/ship.ts');

describe('Ship', () => {
    it('should have length of 5', () => {
        const newShip = ship(5);
        expect(newShip.length).toBe(5);
    })
})

describe('Ship is hit', () => { 
    it('should have 1 hit', () => {
        const newShip = ship(5);
        newShip.hit();
        expect(newShip.hits).toBe(1);
    })
})

describe('Ship is sunck', () => {
    it('should be sunck', () => {
        const newShip = ship(5);
        newShip.hit();
        newShip.hit();
        newShip.hit();
        newShip.hit();
        newShip.hit();
        expect(newShip.isSunk).toBe(true);
    })
})