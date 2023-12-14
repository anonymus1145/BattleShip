import * as TestFunction from '../gameboard';

const { isValidMove } = jest.requireActual<typeof TestFunction>('../gameboard');

describe('Test checkPosition function', () => {
  it('should check to see if the ship is within the board', () => {
    expect(isValidMove(0, 1)).toBe(false);
    expect(isValidMove(10, 0)).toBe(false);
    expect(isValidMove(4, 5)).toBe(true);
  });
  });