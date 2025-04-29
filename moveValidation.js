class MoveValidation {
    static isValidMove(game, start, end, isRedQueen) {
        // Check if position is within bounds
        if (!this.isWithinBounds(end)) {
            return false;
        }
        
        // Check if move follows queen rules (horizontal, vertical, or diagonal)
        if (!this.isQueenMove(start, end)) {
            return false;
        }
        
        // Check if path is clear (no other queen in the way)
        if (!this.isPathClear(game, start, end)) {
            return false;
        }
        
        return true;
    }
    
    static isWithinBounds(position) {
        return position.x >= 0 && position.x < 8 &&
               position.y >= 0 && position.y < 8;
    }
    
    static isQueenMove(start, end) {
        const dx = Math.abs(end.x - start.x);
        const dy = Math.abs(end.y - start.y);
        
        // Horizontal, vertical, or diagonal moves only
        return dx === 0 || dy === 0 || dx === dy;
    }
    
    static isPathClear(game, start, end) {
        const dx = Math.sign(end.x - start.x);
        const dy = Math.sign(end.y - start.y);
        
        let current = {x: start.x + dx, y: start.y + dy};
        
        while (!this.positionsEqual(current, end)) {
            if (this.positionsEqual(current, game.redQueen) || 
                this.positionsEqual(current, game.blueQueen)) {
                return false;
            }
            current.x += dx;
            current.y += dy;
        }
        
        return true;
    }
    
    static positionsEqual(pos1, pos2) {
        return pos1.x === pos2.x && pos1.y === pos2.y;
    }
}

module.exports = MoveValidation;