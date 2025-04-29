/**
 * Main entry point for Queens Go Game
 */
import Game from './components/Game.js';
import { COLORS } from './utils/constants.js';

// Export everything
export {
  Game,
  COLORS
};

/**
 * Demonstration function to show how the game works
 */
function demonstrateGame() {
  const game = new Game();
  
  console.log("Welcome to Queens Go!");
  console.log("Initial board:");
  game.printBoard();
  
  console.log(`Red Queen is at: (${game.redQueen.position.row}, ${game.redQueen.position.col})`);
  console.log(`Blue Queen is at: (${game.blueQueen.position.row}, ${game.blueQueen.position.col})`);
  
  // Move red queen horizontally
  const redTargetRow = game.redQueen.position.row;
  const redTargetCol = Math.min(game.redQueen.position.col + 3, 7);
  console.log(`Moving Red Queen to (${redTargetRow}, ${redTargetCol}):`);
  const redMoveResult = game.moveQueen(COLORS.RED, redTargetRow, redTargetCol);
  console.log(`Move successful: ${redMoveResult}`);
  game.printBoard();
  
  // Move blue queen vertically
  const blueTargetRow = Math.min(game.blueQueen.position.row + 3, 7);
  const blueTargetCol = game.blueQueen.position.col;
  console.log(`Moving Blue Queen to (${blueTargetRow}, ${blueTargetCol}):`);
  const blueMoveResult = game.moveQueen(COLORS.BLUE, blueTargetRow, blueTargetCol);
  console.log(`Move successful: ${blueMoveResult}`);
  game.printBoard();
  
  // Demonstrate checking for valid moves
  const startRow = game.redQueen.position.row;
  const startCol = game.redQueen.position.col;
  const validHorizontal = game.isValidQueenMove(startRow, startCol, startRow, 0);
  const validVertical = game.isValidQueenMove(startRow, startCol, 0, startCol);
  const validDiagonal = game.isValidQueenMove(startRow, startCol, startRow - 2, startCol - 2);
  const invalidMove = game.isValidQueenMove(startRow, startCol, startRow - 1, startCol - 2);
  
  console.log("\nMove Validation Examples:");
  console.log(`Horizontal move valid: ${validHorizontal}`);
  console.log(`Vertical move valid: ${validVertical}`);
  console.log(`Diagonal move valid: ${validDiagonal}`);
  console.log(`Non-queen move valid: ${invalidMove}`);
}

// Uncomment to run the demonstration
demonstrateGame(); 