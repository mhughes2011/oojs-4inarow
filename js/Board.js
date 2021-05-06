class Board {
    constructor(rows, columns, spaces) {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }

    /** 
     * Generates 2D array of spaces. 
     * @return  {Array}     An array of space objects
     */
    createSpaces() {
        let spaces = [];

        for(let x=0; x < this.columns; x++) {
            let column = [];

            for(let y=0; y < this.rows; y++) {
                let space = new Spaces(x,y);
                column.push(space);
            }
            spaces.push(column);
        }

        return spaces;
    }

    // This is the render method to render the board
    // This uses a for-of loop to iterate of each column on the top loop and over each space in the column on the inner loop.
    drawHTMLBoard() {
        for(let column of this.spaces) {
            for(let space of column) {
                space.drawSVGSpace();
            }
        }
    }
}