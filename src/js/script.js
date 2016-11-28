
// Start tic tac toe: load_tictactoe(canvas);
// Start 4 gewinnt: load_4gewinnt(canvas);

window.onload = function() {
    var canvases = document.getElementsByTagName("canvas");
    var active_canvas = null;
    for(var i = 0; i < canvases.length; i++){
        if(canvases[i].style.display != "none"){
            active_canvas = canvases[i];
            break;
        }
    }

    // TODO ask which game was chosen and load correct one
    load_4gewinnt(active_canvas);
};