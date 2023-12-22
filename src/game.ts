import { createGameboard, Gameboard } from './objects/gameboard';
import { createPlayer, createComputer } from './objects/player';
import { createShip } from './objects/ship';

interface Game {
    playGame(): void;
  }

export const createGame = (): Game => {
    const playerGameboard: Gameboard = createGameboard();
    const computerGameboard: Gameboard = createGameboard();

    // We place some ships on the player's gameboard and some on the computer's
    playerGameboard.placeShip(createShip(3), 0, 0, true);
    computerGameboard.placeShip(createShip(3), 1, 1, false);

    const player = createPlayer(playerGameboard);
    const computer = createComputer(computerGameboard);

    return {
        playGame(): void {
            while (true) {
                player.attack(0, 0);
                
                if (computerGameboard.areAllShipsSunk()) {
                    console.log('Player won!');
                    break;
                }

                computer.attack();

                if (playerGameboard.areAllShipsSunk()) {
                    console.log('Computer won!');
                    break;
                }
            }
        }
    }
}