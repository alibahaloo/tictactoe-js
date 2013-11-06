/**
 * @author Ali Bahaloo
 */
window.onload = function () {
    tictactoe = new Tictactoe();
    tictactoe.paintBoard();
    
    var game_board = document.getElementById("board");
    
    game_board.addEventListener('click', function() {
                tictactoe.clickHandler(event);
            }, true);
    
};