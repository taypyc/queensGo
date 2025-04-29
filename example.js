const { QueensGame } = require('./queensGo');
const MoveValidation = require('./moveValidation');
const MoveExecution = require('./moveExecution');
const SquareLocking = require('./squareLocking');

// Create a new game
const game = new QueensGame();

// Example moves
console.log('Initial game state:', game.getGameState());

// Move red queen
if (MoveValidation.isValidMove(game, game.redQueen, {x: 3, y: 3}, true)) {
    MoveExecution.makeMove(game, game.redQueen, {x: 3, y: 3}, true);
    SquareLocking.checkAndLockSquares(game);
}

// Move blue queen
if (MoveValidation.isValidMove(game, game.blueQueen, {x: 5, y: 5}, false)) {
    MoveExecution.makeMove(game, game.blueQueen, {x: 5, y: 5}, false);
    SquareLocking.checkAndLockSquares(game);
}

console.log('Updated game state:', game.getGameState());