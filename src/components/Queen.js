/**
 * Queen component for Queens Go game
 */
import { BOARD_SIZE } from '../utils/constants.js';

class Queen {
  /**
   * Create a new queen
   * @param {string} color - The color of the queen
   * @param {number} row - Initial row position
   * @param {number} col - Initial column position
   */
  constructor(color, row, col) {
    this.color = color;
    this.position = { row, col };
  }

  /**
   * Update the queen's position
   * @param {number} row - New row position
   * @param {number} col - New column position
   */
  updatePosition(row, col) {
    this.position = { row, col };
  }

  /**
   * Validates if a queen move is legal according to chess rules
   * @param {number} endRow - Ending row
   * @param {number} endCol - Ending column
   * @returns {boolean} Whether the move is valid
   */
  isValidMove(endRow, endCol) {
    const startRow = this.position.row;
    const startCol = this.position.col;
    
    // Check if within bounds
    if (endRow < 0 || endRow >= BOARD_SIZE || endCol < 0 || endCol >= BOARD_SIZE) {
      return false;
    }

    // Check if moving to the same position
    if (startRow === endRow && startCol === endCol) {
      return false;
    }

    // Queen moves in straight lines (horizontally, vertically, or diagonally)
    const rowDiff = Math.abs(endRow - startRow);
    const colDiff = Math.abs(endCol - startCol);

    // Check if the move is valid for a queen
    if (rowDiff === 0 || colDiff === 0 || rowDiff === colDiff) {
      return true;
    }

    return false;
  }

  /**
   * Calculate the path a queen takes when moving
   * @param {number} endRow - Ending row
   * @param {number} endCol - Ending column
   * @returns {Array} Array of positions {row, col} in the path
   */
  calculatePath(endRow, endCol) {
    const startRow = this.position.row;
    const startCol = this.position.col;
    const path = [];
    
    // Determine direction of movement
    const rowDirection = startRow === endRow ? 0 : (endRow > startRow ? 1 : -1);
    const colDirection = startCol === endCol ? 0 : (endCol > startCol ? 1 : -1);
    
    let currentRow = startRow;
    let currentCol = startCol;
    
    // Include the starting square
    path.push({ row: currentRow, col: currentCol });
    
    // Generate all points along the path
    while (currentRow !== endRow || currentCol !== endCol) {
      currentRow += rowDirection;
      currentCol += colDirection;
      path.push({ row: currentRow, col: currentCol });
    }
    
    return path;
  }
}

export default Queen; 