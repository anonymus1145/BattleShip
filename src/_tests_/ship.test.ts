// Test the hit function
import * as TestFunctions from '../objects/ship';

const { ship } = jest.requireActual<typeof TestFunctions>('../objects/ship.ts');

describe('Ship', () => {
    it('should have length of 5', () => {
        const newShip = ship(5);
        expect(newShip.length).toBe(5);
    })
})