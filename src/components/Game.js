/**
 * Main Game class for Queens Go game
 */
import { COLORS } from '../utils/constants.js';
import Board from './Board.js';
import Queen from './Queen.js';

class Game {
  /**
   * Create a new game
   */
  constructor() {
    this.board = new Board();
    this.redQueen = this.createQueenRandomly(COLORS.RED);
    this.blueQueen = this.createQueenRandomly(COLORS.BLUE);
    
    // Color initial squares
    this.board.colorSquare(this.redQueen.position.row, this.redQueen.position.col, COLORS.RED);
    this.board.colorSquare(this.blueQueen.position.row, this.blueQueen.position.col, COLORS.BLUE);
  }

  /**
   * Creates a queen at a random position
   * @param {string} color - The color of the queen
   * @returns {Queen} The created queen
   */
  createQueenRandomly(color) {
    let row, col;
    
    do {
      row = Math.floor(Math.random() * 8);
      col = Math.floor(Math.random() * 8);
      
      // Make sure queens don't overlap
      if (color === COLORS.RED || 
         !this.redQueen || 
         (this.redQueen.position.row !== row || this.redQueen.position.col !== col)) {
        break;
      }
    } while (true);
    
    return new Queen(color, row, col);
  }

  /**
   * Move a queen to a new position
   * @param {string} color - The color of the queen to move
   * @param {number} endRow - Target row
   * @param {number} endCol - Target column
   * @returns {boolean} Whether the move was successful
   */
  moveQueen(color, endRow, endCol) {
    const queen = color === COLORS.RED ? this.redQueen : this.blueQueen;
    
    if (!queen) {
      console.log("Invalid color!");
      return false;
    }

    // Validate the move
    if (!queen.isValidMove(endRow, endCol)) {
      console.log("Invalid move!");
      return false;
    }

    // Calculate the path
    const path = queen.calculatePath(endRow, endCol);
    
    // Color all squares in the path
    for (const point of path) {
      this.board.colorSquare(point.row, point.col, color);
    }
    
    // Update queen position
    queen.updatePosition(endRow, endCol);

    // Check and lock 2x2 squares
    this.board.checkAndLockSquares();
    
    return true;
  }

  /**
   * Validate if a move from a given position is valid for a queen
   * @param {number} startRow - Starting row
   * @param {number} startCol - Starting column
   * @param {number} endRow - Ending row
   * @param {number} endCol - Ending column
   * @returns {boolean} Whether the move is valid
   */
  isValidQueenMove(startRow, startCol, endRow, endCol) {
    // Create a temporary queen at the start position to check move validity
    const tempQueen = new Queen('TEMP', startRow, startCol);
    return tempQueen.isValidMove(endRow, endCol);
  }

  /**
   * Print the current board state
   */
  printBoard() {
    this.board.print(this.redQueen.position, this.blueQueen.position);
  }
}

export default Game;
