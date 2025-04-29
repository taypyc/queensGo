const COLORS = require('./queensGo').COLORS;

class SquareLocking {
    static checkAndLockSquares(game) {
        for (let y = 0; y < 7; y++) {
            for (let x = 0; x < 7; x++) {
                const squareColor = game.board[y][x];
                if (squareColor !== COLORS.NONE) {
                    if (this.is2x2Square(game, x, y, squareColor)) {
                        this.lockSquare(game, x, y);
                    }
                }
            }
        }
    }
    
    static is2x2Square(game, x, y, color) {
        return game.board[y][x] === color &&
               game.board[y][x + 1] === color &&
               game.board[y + 1][x] === color &&
               game.board[y + 1][x + 1] === color;
    }
    
    static lockSquare(game, x, y) {
        game.lockedSquares.add({x, y});
    }
}

module.exports = SquareLocking;