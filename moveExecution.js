const COLORS = require('./queensGo').COLORS;

class MoveExecution {
    static makeMove(game, start, end, isRedQueen) {
        // Update queen position
        if (isRedQueen) {
            game.redQueen = {...end};
        } else {
            game.blueQueen = {...end};
        }
        
        // Color all squares along the path
        this.colorPath(game, start, end, isRedQueen ? COLORS.RED : COLORS.BLUE);
        
        return true;
    }
    
    static colorPath(game, start, end, color) {
        const dx = Math.sign(end.x - start.x);
        const dy = Math.sign(end.y - start.y);
        
        let current = {...start};
        
        while (!this.positionsEqual(current, end)) {
            this.colorSquareIfNotLocked(game, current, color);
            current.x += dx;
            current.y += dy;
        }
        this.colorSquareIfNotLocked(game, end, color);
    }
    
    static colorSquareIfNotLocked(game, position, color) {
        if (!this.isSquareLocked(game, position)) {
            game.board[position.y][position.x] = color;
        }
    }
    
    static isSquareLocked(game, position) {
        return Array.from(game.lockedSquares).some(lockedSquare => 
            position.x >= lockedSquare.x && position.x < lockedSquare.x + 2 &&
            position.y >= lockedSquare.y && position.y < lockedSquare.y + 2
        );
    }
    
    static positionsEqual(pos1, pos2) {
        return pos1.x === pos2.x && pos1.y === pos2.y;
    }
}

module.exports = MoveExecution;