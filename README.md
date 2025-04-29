# Queens Go

A strategic board game implementation in JavaScript using ES Modules.

## Game Description

Queens Go is a two-player strategy game played on an 8x8 chess-like board. The game combines elements of chess queen movement with territory control mechanics.

## Game Rules

- The game is played on an 8x8 chess board
- Two pieces are in play: a Red queen (👑) and a Blue queen (👸)
- Queens move according to chess rules (horizontally, vertically, or diagonally in straight lines)
- Any square that a queen passes through or lands on is colored to match that queen's color
- When a 2x2 square of the same color is formed, those squares are "locked" and can't change color (marked with 🔴 or 🔵)
- If a queen moves across a square of the opponent's color that isn't locked, it changes to the moving queen's color
- Queens can move through locked squares but cannot change their color

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd queens-go-game

# Run the game
node src/index.js
```

## Requirements

- Node.js (v12.0.0 or higher)

## Project Structure

```
queens-go-game/
├── src/
│   ├── components/
│   │   ├── Board.js     # Board implementation
│   │   ├── Game.js      # Main game logic
│   │   └── Queen.js     # Queen piece logic
│   ├── utils/
│   │   └── constants.js # Game constants
│   └── index.js         # Main entry point
├── interview_template.js # Template for implementation exercise
├── package.json         # Project configuration
└── README.md            # This file
```

## How to Play

The game is currently played by running the demonstration in `src/index.js`:

```bash
node src/index.js
```

This will show:
1. The initial board state
2. Examples of queen movements
3. Board state after moves
4. Examples of move validation

## Features

- Chess-like board with alternating light and dark squares
- Visual representation using emoji icons
- Queen movement validation
- Territory locking mechanism
- Interactive board visualization

## Extending the Game

You can extend this implementation by:

1. Adding a proper turn-based system
2. Implementing a scoring mechanism
3. Creating a command-line interface for player interaction
4. Adding an AI opponent
5. Adding a win condition (e.g., most territory after a certain number of turns)

## Development

This project uses ES Modules. All files use ES import/export syntax:

```javascript
// Import
import { BOARD_SIZE, COLORS } from '../utils/constants.js';

// Export
export default Board;
```

## License

ISC License 