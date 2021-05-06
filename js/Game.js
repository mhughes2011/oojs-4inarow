class Game {
    constructor(board, players, ready) {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    /**
     * Returns active play
     * @returns  {Object} player - the active player.
     */
    get activePlayer() {
        return this.players.find(player => player.active);
    }

    /** 
     * Creates two player objects
     * @return  {Array}    An array of two Player objects.
     */
    createPlayers() {
        let players = [];
        players[0] = new Player('Mayra - Player 1', 1, '#e15258', true);
        players[1] = new Player('Max - Player 2', 2, '#e59a13');

        return players;
    }

    /*
     * Gets game ready for play
     */
    startGame() {

    }
}