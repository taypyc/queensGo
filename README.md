# Queens Go Game

A JavaScript implementation of the Queens Go board game where two queens (Red and Blue) compete to color the board squares.

## Game Rules

- The game is played on an 8x8 board
- Only two pieces exist: a Red queen and Blue queen
- Queens move as in chess (horizontally, vertically, and diagonally)
- Any square that a Queen starts on, passes through, or lands on turns that square to the queen's color
- Once a 2x2 square of the same color is formed, it becomes locked
- Locked squares can be traversed but not recolored
- Queens can overwrite opponent's colors on non-locked squares

## Implementation Details

The implementation is split into several key components:

- `queensGo.js` - Core game state and initialization
- `moveValidation.js` - Queen movement validation
- `moveExecution.js` - Move execution and board coloring
- `squareLocking.js` - 2x2 square locking mechanism
- `example.js` - Usage example

## Usage

```javascript
// Create a new game
const game = new QueensGame();

// Make moves
const redMove = game.makeMove(
    game.redQueen,
    {x: 3, y: 3},
    true
);

// Get game state
const gameState = game.getGameState();
```

## Repository Information
- Created by: taypyc
- Created at: 2025-04-29 16:41:11 UTC