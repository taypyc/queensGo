// Constants
const BOARD_SIZE = 8;
const COLORS = {
    NONE: 0,
    RED: 1,
    BLUE: 2
};

// Game state class
class QueensGame {
    constructor() {
        // Initialize empty board
        this.board = Array(BOARD_SIZE).fill().map(() => 
            Array(BOARD_SIZE).fill(COLORS.NONE)
        );
        
        // Initialize queens' positions randomly
        this.redQueen = this.getRandomPosition();
        // Ensure blue queen starts at different position
        do {
            this.blueQueen = this.getRandomPosition();
        } while (this.positionsEqual(this.redQueen, this.blueQueen));
        
        // Color initial positions
        this.board[this.redQueen.y][this.redQueen.x] = COLORS.RED;
        this.board[this.blueQueen.y][this.blueQueen.x] = COLORS.BLUE;
        
        // Track locked 2x2 squares
        this.lockedSquares = new Set();
    }
    
    getRandomPosition() {
        return {
            x: Math.floor(Math.random() * BOARD_SIZE),
            y: Math.floor(Math.random() * BOARD_SIZE)
        };
    }
    
    positionsEqual(pos1, pos2) {
        return pos1.x === pos2.x && pos1.y === pos2.y;
    }

    // Added getGameState method
    getGameState() {
        return {
            board: this.board.map(row => [...row]),  // Deep copy of board
            redQueen: {...this.redQueen},           // Copy of red queen position
            blueQueen: {...this.blueQueen},         // Copy of blue queen position
            lockedSquares: Array.from(this.lockedSquares).map(square => ({...square}))  // Copy of locked squares
        };
    }
}

module.exports = {
    QueensGame,
    COLORS,
    BOARD_SIZE
};