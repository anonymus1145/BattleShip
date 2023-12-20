import * as TestFunctions from '../objects/player';
import * as TestGameboard from '../objects/gameboard';

const { createPlayer, createComputer } = jest.requireActual<typeof TestFunctions>('../objects/player.ts');
const { createGameboard } = jest.requireActual<typeof TestGameboard>('../objects/gameboard.ts');

const gameboard = createGameboard();
const newPlayer = createPlayer(gameboard);
const newComputer = createComputer(gameboard);

describe('Player', () => {
    it('should be able to attack', () => {
        newPlayer.attack(7, 7);
        expect(gameboard.missedAttacks.length).toBe(1);
    })
})

describe('Computer', () => {
    it('should be able to attack', () => {
        newComputer.attack();
        expect(gameboard.missedAttacks.length).toBe(2);
    })
})