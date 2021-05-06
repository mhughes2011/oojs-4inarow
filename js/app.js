let startBtn = document.getElementById('begin-game');

let game = new Game();

/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
startBtn.addEventListener('click', () => {
    game.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});