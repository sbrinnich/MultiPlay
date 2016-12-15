
function load_4gewinnt(canv, field, team) {
    canvas = canv;
    gamefield = field;
    teamname = team;

    hg = new Image();
    hg.src = "img/4-gewinnt/4-Gewinnt-board.png";
    red = new Image();
    red.src = "img/4-gewinnt/4-Gewinnt-red.png";
    blue = new Image();
    blue.src = "img/4-gewinnt/4-Gewinnt-blue.png";

    init_canvas_4gewinnt();
    addListener_4gewinnt();
    hg.onload = function(){
        red.onload = function () {
            blue.onload = function () {
                draw_field_4gewinnt();
            };
        };
    };
}


// window.onload wird ausgeführt wenn das Fenster + Bilder geladen ist

function init_canvas_4gewinnt() {
	var c = canvas.getContext('2d');
    canvas.style.width ='100%';
    canvas.width  = canvas.scrollWidth;
    canvas.style.height=canvas.scrollWidth*0.736328125+'px';
    canvas.height = canvas.scrollWidth*0.736328125;
    canvas.parentNode.style.height = canvas.scrollWidth*0.736328125+'px';

	hg.onload = function(){ 
		c.drawImage(hg, 0, 0, hg.width, hg.height, 0, 0, canvas.scrollWidth, canvas.scrollHeight);
	};
}

function refresh_game_4gewinnt(field){
    if(!gamefield.equals(field)){
        gamefield = field;
        draw_field_4gewinnt();
    }
}

function draw_image_4gewinnt(image, xpos, ypos){
    var ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, image.width, image.height,
        (canvas.scrollWidth-canvas.scrollWidth*0.015625)/7*xpos+canvas.scrollWidth*0.0078125,
        (canvas.scrollHeight-canvas.scrollHeight*0.08366533864542)/6*ypos+canvas.scrollHeight*0.041168658699,
        (canvas.scrollWidth-canvas.scrollWidth*0.015625)/7,
        (canvas.scrollHeight-canvas.scrollHeight*0.08366533864542)/6);	// Zeichnet das Bild des X in das gewählte Feld
    ctx.drawImage(hg, 0, 0, hg.width, hg.height, 0, 0, canvas.scrollWidth, canvas.scrollHeight);
}

function draw_text_4gewinnt(image, xpos, ypos){
    var ctx = canvas.getContext('2d');
    ctx.font = (canvas.scrollHeight-canvas.scrollHeight*0.08366533864542)/6 + "px Arial";
    ctx.fillText(text,
        (canvas.scrollWidth-canvas.scrollWidth*0.015625)/7*xpos+canvas.scrollWidth*0.0078125,
        (canvas.scrollHeight-canvas.scrollHeight*0.08366533864542)/6*ypos+canvas.scrollHeight*0.041168658699,
        (canvas.scrollWidth-canvas.scrollWidth*0.015625)/7);
}

function draw_field_4gewinnt(){
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(var i = 0; i < gamefield.length; i++){
        for(var j = 0; j < gamefield[i].length; j++){
            if(gamefield[i][j] != null){
                if(gamefield[i][j] == "Rot") {
                    draw_image_4gewinnt(red, j, i);
                }else{
                    draw_image_4gewinnt(blue, j, i);
                }
            }
        }
    }

    ctx.drawImage(hg, 0, 0, hg.width, hg.height, 0, 0, canvas.scrollWidth, canvas.scrollHeight);
}

function addListener_4gewinnt(){
    canvas.addEventListener('mouseup', function(evt) {

        var cX = Math.floor(getMousePos(evt).x/(canvas.scrollWidth/7)); // setzt cX auf einen wert zwischen 0 und 2
        var cY = Math.floor(getMousePos(evt).y/(canvas.scrollHeight/6)); // setzt cY auf einen wert zwischen 0 und 2

        if(teamname == "Rot") {

        }else{

        }

        // TODO refresh after time, show vote status, remove clickable

    },false);
}

// Bestimmt die Maus position

function getMousePos(evt) {

    var rect = canvas.getBoundingClientRect();

    return {
        x: Math.floor((evt.clientX-rect.left)/(rect.right-rect.left)*canvas.width),
        y: Math.floor((evt.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height)
    };
}



