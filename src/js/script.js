
window.onload = function() {
    var gametype = findGetParameter("name");
    if(gametype == "tictactoe"){
        //TODO ask for name and team
        play_tictactoe();
    }else if(gametype == "4gewinnt"){
        //TODO ask for name and team
        play_4gewinnt();
    }
};

function load_canvas() {
    var canvases = document.getElementsByTagName("canvas");
    active_canvas = null;
    for(var i = 0; i < canvases.length; i++){
        if(canvases[i].style.display != "none"){
            active_canvas = canvases[i];
            break;
        }
    }
}

function play_tictactoe() {
    load_canvas();
    load_tictactoe(active_canvas);
}

function play_4gewinnt() {
    load_canvas();
    load_4gewinnt(active_canvas);
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}