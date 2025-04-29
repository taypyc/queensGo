# Queens Go Game - Component-Based Pseudocode

## Board Component

```
Class Board:
    Constructor():
        Initialize 8x8 board with each cell having:
            - color (NONE, RED, BLUE)
            - locked status (boolean)
    
    Method CreateBoard():
        Create an empty 8x8 grid
        Set all cells to NONE color and unlocked
        Return the board
    
    Method ColorSquare(row, col, color):
        If the cell at [row][col] is locked:
            Return (do nothing)
        Set the cell's color to the specified color
    
    Method CheckAndLockSquares():
        For each 2x2 area on the board:
            Get the four cells: topLeft, topRight, bottomLeft, bottomRight
            If all four have the same color (not NONE):
                Set all four cells' locked status to true
    
    Method Print(redQueenPosition, blueQueenPosition):
        Display the board with:
            - Visual representation of empty squares (alternating)
            - Queen positions with special icons
            - Colored squares based on cell color
            - Indication of locked status
```

## Queen Component

```
Class Queen:
    Constructor(color, row, col):
        Set the queen's color
        Set the queen's initial position to {row, col}
    
    Method UpdatePosition(row, col):
        Update the queen's position to {row, col}
    
    Method IsValidMove(endRow, endCol):
        Get current position (startRow, startCol)
        
        // Check if within board boundaries
        If endRow or endCol is outside the 8x8 board:
            Return false
        
        // Check if moving to the same position
        If startRow equals endRow AND startCol equals endCol:
            Return false
        
        // Check if move follows queen's movement rules
        rowDiff = absolute value of (endRow - startRow)
        colDiff = absolute value of (endCol - startCol)
        
        // Valid queen move: horizontal, vertical, or diagonal
        If rowDiff equals 0 OR colDiff equals 0 OR rowDiff equals colDiff:
            Return true
        
        Return false
    
    Method CalculatePath(endRow, endCol):
        Initialize empty path array
        
        // Determine direction of movement
        If startRow equals endRow:
            rowDirection = 0
        Else if endRow > startRow:
            rowDirection = 1
        Else:
            rowDirection = -1
        
        If startCol equals endCol:
            colDirection = 0
        Else if endCol > startCol:
            colDirection = 1
        Else:
            colDirection = -1
        
        // Starting position
        currentRow = startRow
        currentCol = startCol
        
        // Add start position to path
        Add {row: currentRow, col: currentCol} to path
        
        // Generate all points along the path
        While currentRow != endRow OR currentCol != endCol:
            currentRow = currentRow + rowDirection
            currentCol = currentCol + colDirection
            Add {row: currentRow, col: currentCol} to path
        
        Return path
```

## Game Component

```
Class Game:
    Constructor():
        Create a new Board instance
        Create Red Queen randomly
        Create Blue Queen randomly
        Color the initial squares under the queens
    
    Method CreateQueenRandomly(color):
        Generate random position (row, col)
        Make sure queens don't overlap
        Return new Queen instance with (color, row, col)
    
    Method MoveQueen(color, endRow, endCol):
        // Get the queen based on color
        If color is RED:
            queen = redQueen
        Else if color is BLUE:
            queen = blueQueen
        Else:
            Return false (invalid color)
        
        // Validate the move
        If NOT queen.IsValidMove(endRow, endCol):
            Return false
        
        // Calculate path and color squares
        path = queen.CalculatePath(endRow, endCol)
        
        For each point in path:
            board.ColorSquare(point.row, point.col, color)
        
        // Update queen position
        queen.UpdatePosition(endRow, endCol)
        
        // Check for and lock 2x2 squares
        board.CheckAndLockSquares()
        
        Return true
    
    Method IsValidQueenMove(startRow, startCol, endRow, endCol):
        Create temporary queen at (startRow, startCol)
        Return tempQueen.IsValidMove(endRow, endCol)
    
    Method PrintBoard():
        board.Print(redQueen.position, blueQueen.position) 