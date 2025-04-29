/**
 * Board component for Queens Go game
 */
import { BOARD_SIZE, COLORS } from '../utils/constants.js';

class Board {
  /**
   * Create a new game board
   */
  constructor() {
    this.cells = this.createBoard();
  }

  /**
   * Creates an empty game board
   * @returns {Array} The initialized game board
   */
  createBoard() {
    const board = [];
    for (let row = 0; row < BOARD_SIZE; row++) {
      const boardRow = [];
      for (let col = 0; col < BOARD_SIZE; col++) {
        boardRow.push({
          color: COLORS.NONE,
          locked: false
        });
      }
      board.push(boardRow);
    }
    return board;
  }

  /**
   * Color a square on the board
   * @param {number} row - The row of the square
   * @param {number} col - The column of the square
   * @param {string} color - The color to apply
   */
  colorSquare(row, col, color) {
    // If the square is locked, we can't change its color
    if (this.cells[row][col].locked) {
      return;
    }
    
    // Change the color of the square
    this.cells[row][col].color = color;
  }

  /**
   * Check for and lock 2x2 squares of the same color
   */
  checkAndLockSquares() {
    // Check each possible 2x2 square on the board
    for (let row = 0; row < BOARD_SIZE - 1; row++) {
      for (let col = 0; col < BOARD_SIZE - 1; col++) {
        const topLeft = this.cells[row][col];
        const topRight = this.cells[row][col + 1];
        const bottomLeft = this.cells[row + 1][col];
        const bottomRight = this.cells[row + 1][col + 1];
        
        // If all squares have the same color (and are not NONE)
        if (topLeft.color !== COLORS.NONE &&
            topLeft.color === topRight.color &&
            topLeft.color === bottomLeft.color &&
            topLeft.color === bottomRight.color) {
          
          // Lock these squares
          topLeft.locked = true;
          topRight.locked = true;
          bottomLeft.locked = true;
          bottomRight.locked = true;
        }
      }
    }
  }

  /**
   * Get the cell at the specified position
   * @param {number} row - The row
   * @param {number} col - The column
   * @returns {Object} The cell at the specified position
   */
  getCell(row, col) {
    if (row < 0 || row >= BOARD_SIZE || col < 0 || col >= BOARD_SIZE) {
      return null;
    }
    return this.cells[row][col];
  }

  /**
   * Print the board with the given queen positions
   * @param {Object} redQueenPosition - The position of the red queen {row, col}
   * @param {Object} blueQueenPosition - The position of the blue queen {row, col}
   */
  print(redQueenPosition, blueQueenPosition) {
    console.log('Current Board State:');
    console.log('   0  1  2  3  4  5  6  7');
    for (let row = 0; row < BOARD_SIZE; row++) {
      let rowStr = row + ' ';
      for (let col = 0; col < BOARD_SIZE; col++) {
        const cell = this.cells[row][col];
        if (redQueenPosition && row === redQueenPosition.row && col === redQueenPosition.col) {
          rowStr += COLORS.ICONS.RED_QUEEN + ' ';
        } else if (blueQueenPosition && row === blueQueenPosition.row && col === blueQueenPosition.col) {
          rowStr += COLORS.ICONS.BLUE_QUEEN + ' ';
        } else if (cell.color === COLORS.RED) {
          rowStr += cell.locked ? COLORS.ICONS.RED_LOCKED + ' ' : COLORS.ICONS.RED + ' ';
        } else if (cell.color === COLORS.BLUE) {
          rowStr += cell.locked ? COLORS.ICONS.BLUE_LOCKED + ' ' : COLORS.ICONS.BLUE + ' ';
        } else {
          // Alternating pattern for empty squares (chess-like)
          const isLightSquare = (row + col) % 2 === 0;
          rowStr += (isLightSquare ? COLORS.ICONS.EMPTY_LIGHT : COLORS.ICONS.EMPTY_DARK) + ' ';
        }
      }
      console.log(rowStr);
    }
    console.log('');
  }
}

export default Board; 