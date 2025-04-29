/**
 * Game Constants for Queens Go
 * 
 * This file defines constants used throughout the Queens Go game
 */

// Board size (8x8 grid)
const BOARD_SIZE = 8;

// Color definitions
const COLORS = {
  // Square colors
  NONE: 'NONE',
  RED: 'RED',
  BLUE: 'BLUE',
  
  // Display icons - Used for board visualization
  ICONS: {
    RED: '🟥',
    BLUE: '🟦', 
    RED_QUEEN: '👑', // Red queen
    BLUE_QUEEN: '👸', // Blue queen
    RED_LOCKED: '🔴', // Locked red square
    BLUE_LOCKED: '🔵', // Locked blue square
    EMPTY_LIGHT: '⬜', // Light square (chess board)
    EMPTY_DARK: '⬛' // Dark square (chess board)
  }
};

export { BOARD_SIZE, COLORS }; 