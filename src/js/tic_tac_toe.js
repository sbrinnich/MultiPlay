
function load_tictactoe(canv, field, team) {
    canvas = canv;
    gamefield = field;
    teamname = team;
    playing = false;

    hg = new Image();
    hg.src = "img/tic-tac-toe/Tic-Tac-Toe-board.png";
    red = new Image();
    red.src = "img/tic-tac-toe/Tic-Tac-Toe-red.png";
    blue = new Image();
    blue.src = "img/tic-tac-toe/Tic-Tac-Toe-blue.png";

    /**
    bl = new Image();
    bl.src = "img/Blue.png";

    red = new Image();
    red.src = "img/Red.png";

    dr = new Image();
    dr.src = "img/Draw.png";
     */

    init_canvas_tictactoe();
    php_call('getteam', check_team_tictactoe);
    hg.onload = function(){
        red.onload = function () {
            blue.onload = function () {
                draw_field_tictactoe();
            };
        };
    };
}

function check_team_tictactoe(team){
    if(team['name'] == teamname){
        addListener_tictactoe();
    }else{
        removeListener_tictactoe();
    }
}

function refresh_game_tictactoe(field){
    if(!gamefield.equals(field)){
        gamefield = field;
        draw_field_tictactoe();
        php_call('getteam', check_team_tictactoe);
    }
    if(!playing){
        // TODO show vote status
    }
}

function init_canvas_tictactoe()
{
    canvas.style.width ='100%';
    canvas.width  = canvas.scrollWidth;
    canvas.style.height=canvas.scrollWidth+'px';
    canvas.height = canvas.scrollWidth;
    canvas.parentNode.style.height = canvas.scrollWidth+'px';
}

function draw_image_tictactoe(image, posx, posy){
    var ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, image.height, image.width,
        (canvas.scrollWidth/3*posx), (canvas.scrollWidth/3*posy), canvas.scrollWidth/3, canvas.scrollWidth/3);
}

function draw_text_tictactoe(text, posx, posy){
    var ctx = canvas.getContext('2d');
    ctx.font = canvas.scrollWidth/3 + "px Arial";
    ctx.fillText(text,(canvas.scrollWidth/3*posx), (canvas.scrollWidth/3*posy), canvas.scrollWidth/3);
}

function draw_field_tictactoe(){
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.drawImage(hg, 0, 0, hg.width, hg.height, 0, 0, canvas.scrollWidth, canvas.scrollHeight);

    for(var i = 0; i < gamefield.length; i++){
        for(var j = 0; j < gamefield[i].length; j++){
            if(gamefield[i][j] != null){
                if(gamefield[i][j] == "Rot") {
                    draw_image_tictactoe(red, j, i);
                }else{
                    draw_image_tictactoe(blue, j, i);
                }
            }
        }
    }
}

var do_player_turn_tictactoe = function(e) {
    var cX = Math.floor(getMousePos(e).x/(canvas.scrollWidth/3)); // setzt cX auf einen wert zwischen 0 und 2
    var cY = Math.floor(getMousePos(e).y/(canvas.scrollWidth/3)); // setzt cY auf einen wert zwischen 0 und 2

    db_call('insert',['tic-tac-toe-temp',[cX,cY]], null);
    removeListener_tictactoe();
};

function addListener_tictactoe() {
    canvas.addEventListener('mouseup', do_player_turn_tictactoe);
    playing = true;
}

function removeListener_tictactoe() {
    canvas.removeEventListener('mouseup', do_player_turn_tictactoe);
    playing = false;
}


// Bestimmt die Maus position

function getMousePos(evt) {

    var rect = canvas.getBoundingClientRect();

	return {
        x: Math.floor((evt.clientX-rect.left)/(rect.right-rect.left)*canvas.width),
        y: Math.floor((evt.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height)
	};
}