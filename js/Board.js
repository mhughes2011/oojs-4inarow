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
}