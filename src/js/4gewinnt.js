
window.onresize = function(){
    if ($(window).width() == sitewidth){ //only height was changed
        //do nothing
    }
    else { //only width or both were changed
        sitewidth = $(window).width(); //Set new Sitewidth
        location.reload(); //reload and thus resize everything
    }
};

function load_4gewinnt(canv, field, team) {
    canvas = canv;
    gamefield = field;
    teamname = team;
    playing = false;
    game_end = false;
    wait = true;

    hg = new Image();
    hg.src = "img/4-gewinnt/4-Gewinnt-board.png";
    red = new Image();
    red.src = "img/4-gewinnt/4-Gewinnt-red.png";
    blue = new Image();
    blue.src = "img/4-gewinnt/4-Gewinnt-blue.png";

    init_canvas_4gewinnt();
    php_call('getteam', check_team_4gewinnt);
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
        wait = true;
        gamefield = field;
        draw_field_4gewinnt();
        php_call('getteam', check_team_4gewinnt);
        db_call("get", "game-states", gewinnanzeige_4gewinnt);
    }
    if(!playing && !game_end && !wait){
        db_call("get", "4gewinnt_chosencount", zwischenstandanzeige_4gewinnt);
    }
}

function gewinnanzeige_4gewinnt(results) {
    for(j=0;j < results.length; j++) {
        if (results[j]['game'] == "4gewinnt") {
            var position = j; }
    }

    if(results[position]['state'] != null) {
        game_end = true;
        var ergebnis = results[position]['state'];

        if(ergebnis == "draw") {
            var text = "Unentschieden";
        }else{
            var text = "Team " + ergebnis + " gewinnt";
        }

        draw_text_4gewinnt_gewinnanzeige(text, 3, 3);
    }else{
        game_end = false;
    }
}


function zwischenstandanzeige_4gewinnt(results) {
    draw_field_4gewinnt();
    draw_inactivestatus_4gewinnt();
    // Sorgt dafür das für jeder Spalte des Spiels ein Wert geschrieben wird
    for (var j = 0; j < results.length; j++) {
        // Da die Werte in der Datenbank nicht geordnet sind muss man sie Durchgehen und sich das Zwischenergebnis zu der dazugehörigen Spalte holen
        var x = results[j].posx; // bestimmt die Spalte
        var text = results[j].countposx; // gibt das Zwischenergebniss der Spalte an

        draw_text_4gewinnt(text, x, 0);
    }

}

function check_team_4gewinnt(team){
    if(team['name'] == teamname){
        addListener_4gewinnt();
    }else{
        removeListener_4gewinnt();
    }
    wait = false;
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

function draw_text_4gewinnt(text, xpos, ypos){
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = (canvas.scrollHeight-canvas.scrollHeight*0.08366533864542)/12 + "px Arial";
    ctx.fillText(text,
        (canvas.scrollWidth-canvas.scrollWidth*0.015625)/7*xpos+canvas.scrollWidth*0.0078125+
        (canvas.scrollWidth-canvas.scrollWidth*0.015625)/14,
        (canvas.scrollHeight-canvas.scrollHeight*0.08366533864542)/6*ypos+canvas.scrollHeight*0.041168658699+
        (canvas.scrollHeight-canvas.scrollHeight*0.08366533864542)/12,
        (canvas.scrollWidth-canvas.scrollWidth*0.015625)/7);
}

function draw_text_4gewinnt_gewinnanzeige(text, xpos, ypos){
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = (canvas.scrollHeight-canvas.scrollHeight*0.08366533864542)/6 + "px Arial";
    ctx.fillText(text,
        (canvas.scrollWidth-canvas.scrollWidth*0.015625)/7*xpos+canvas.scrollWidth*0.0078125+
        (canvas.scrollWidth-canvas.scrollWidth*0.015625)/14,
        (canvas.scrollHeight-canvas.scrollHeight*0.08366533864542)/6*ypos+canvas.scrollHeight*0.041168658699+
        (canvas.scrollHeight-canvas.scrollHeight*0.08366533864542)/12,
        canvas.scrollWidth);
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

function draw_inactivestatus_4gewinnt(){
    var ctx = canvas.getContext('2d');
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.scrollWidth, canvas.scrollHeight);
    ctx.globalAlpha = 1;
}

var do_player_turn_4gewinnt = function(e) {
    var cX = Math.floor(getMousePos(e).x/(canvas.scrollWidth/7)); // setzt cX auf einen wert zwischen 0 und 2
    var cY = Math.floor(getMousePos(e).y/(canvas.scrollHeight/6)); // setzt cY auf einen wert zwischen 0 und 2

    db_call('insert',['4-gewinnt-temp',[cX,cY]], null);
    removeListener_4gewinnt();
};

function addListener_4gewinnt() {
    canvas.addEventListener('mouseup', do_player_turn_4gewinnt);
    playing = true;
    draw_field_4gewinnt();
}

function removeListener_4gewinnt() {
    canvas.removeEventListener('mouseup', do_player_turn_4gewinnt);
    playing = false;
    db_call("get", "4gewinnt_chosencount", zwischenstandanzeige_4gewinnt);
}

// Bestimmt die Maus position

function getMousePos(evt) {

    var rect = canvas.getBoundingClientRect();

    return {
        x: Math.floor((evt.clientX-rect.left)/(rect.right-rect.left)*canvas.width),
        y: Math.floor((evt.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height)
    };
}



