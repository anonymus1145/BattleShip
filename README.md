# BattleShip

This is a Battleship game implementation in TypeScript. It involves an epic naval adventure where you, as the player, engage in a strategic battle for naval supremacy against an intelligent opponent.

## Installation

1. Clone the repository!
2. Navigate to the project directory: `cd BattleShip`
3. Install the dependencies: `npm install`

## Game Layout

The game layout is created dynamically using HTML and DOM manipulation. The layout includes a player board and a computer board.

### Player Board

The player board is where you place and track your own ships. It is represented as a grid with cells for each position on the board.

### Computer Board

The computer board represents the opponent's board. It is also a grid with cells for each position on the board.

## Game Functions

### createShip(length: number): Ship

This function creates a ship object with the specified length. The ship object has properties such as length, coordinates, hits, and isSunk. It also includes a hit() method to track hits and check if the ship is sunk.

### randomRowCol(): number

This function generates a random number between 1 and 9. It is used to determine the row and column for attacks on the opponent's board.

### attack(row: number, col: number): void

This method is part of the Player object and is used to perform an attack on the opponent's board. It takes the row and column as parameters and does not return anything.

## Getting Started

To start the game, run the following command: `npm startGame`

This will launch the game and display a modal asking if you want to start a new game. Click the "Start Game" button to begin the battle.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.