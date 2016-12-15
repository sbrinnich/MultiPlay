
function load_tictactoe(canvas, field) {
    //Einbinden der Bilder

    hg = new Image();
    hg.src = "img/tic-tac-toe/Tic-Tac-Toe-board.png";

    o = new Image();
    o.src = "img/tic-tac-toe/Tic-Tac-Toe-red.png";

    x = new Image();
    x.src = "img/tic-tac-toe/Tic-Tac-Toe-blue.png";

    bl = new Image();
    bl.src = "img/Blue.png";

    red = new Image();
    red.src = "img/Red.png";

    dr = new Image();
    dr.src = "img/Draw.png";
    // Ein Array für die Felder des Spiels

    fieldpos = field;

    // turn steht für den Spielzug und win ist die Gewinnüberprüfung

    turn = 0;
    win = 0;

    init_canvas_tictactoe(canvas);

}

// window.onload wird ausgeführt wenn das Fenster + Bilder geladen ist
function init_canvas_tictactoe(canvas)
{
	// muss verwendet werden um etwas im canvis verendern zu können


	var c = canvas.getContext('2d');
    canvas.style.width ='100%';
    canvas.width  = canvas.scrollWidth;
    canvas.style.height=canvas.scrollWidth+'px';
    canvas.height = canvas.scrollWidth;
    canvas.parentNode.style.height = canvas.scrollWidth+'px';


	var hg = new Image();
	hg.src="img/tic-tac-toe/Tic-Tac-Toe-board.png";


	// onload wird der Hintergrund gesetzt
	hg.onload = function(){
	    c.drawImage(hg, 0, 0, hg.width, hg.height, 0, 0, canvas.scrollWidth, canvas.scrollWidth);
	};

    addListener_tictactoe(canvas);

}

function draw_image_tictactoe(canvas, image, posx, posy){
    var ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, image.height, image.width,
        (canvas.scrollWidth/3*posx), (canvas.scrollWidth/3*posy), canvas.scrollWidth/3, canvas.scrollWidth/3);
}

function draw_text_tictactoe(canvas, text, posx, posy){
    var ctx = canvas.getContext('2d');
    ctx.font = canvas.scrollWidth/3 + "px Arial";
    ctx.fillText(text,(canvas.scrollWidth/3*posx), (canvas.scrollWidth/3*posy), canvas.scrollWidth/3);
}

function addListener_tictactoe(canvas) {
    canvas.addEventListener('mouseup', function(evt) {

        var c = canvas.getContext('2d');

        var draw=0; // schaut ob jemand gewonnen hat
        var u; // Variable für die Schleife
        var j; // Variable für die Schleife
        var g=canvas.scrollWidth; // bestimmt die Abmessungen des Feldes (500x500)
        var cX = Math.floor(getMousePos(canvas,evt).x/(g/3)); // setzt cX auf einen wert zwischen 0 und 2
        var cY = Math.floor(getMousePos(canvas,evt).y/(g/3)); // setzt cY auf einen wert zwischen 0 und 2


        // Wenn noch keiner Gewonnen hat wird dieses if ausgeführt
        if(win != 1)
        {
            if(turn%2==0 && fieldpos[cX][cY]==0)	//Kontrolliert ob der Zug gerade ist dann ist x dran und ob schon etwas in dem Feld ist
            {
                draw_image_tictactoe(canvas, x, cX, cY);	// Zeichnet das Bild des X in das gewählte Feld
                turn= turn+1;
                fieldpos[cX][cY]=1;  // Sagt über 1 das im Feld ein X steht
            }

            else if(fieldpos[cX][cY]==0)
            {
                draw_image_tictactoe(canvas, o, cX, cY);	// Zeichnet das Bild des O in das gewählte Feld
                turn= turn+1;
                fieldpos[cX][cY]=2;	// Sagt über 2 das im Feld ein O steht
            }

            //Gewinnüberprüfung
            for(u=0;u<=2;u++)
            {
                if(fieldpos[u][0] == 1 && fieldpos[u][1] == 1 && fieldpos[u][2] == 1)
                { setTimeout(function() {c.drawImage(bl, 0, 0);}, 2000); win=1; return;}
                if(fieldpos[0][u] == 1 && fieldpos[1][u] == 1 && fieldpos[2][u] == 1)
                { setTimeout(function() {c.drawImage(bl, 0, 0);}, 2000); win=1; return;}
                if(fieldpos[u][0] == 2 && fieldpos[u][1] == 2 && fieldpos[u][2] == 2)
                { setTimeout(function() {c.drawImage(red, 0, 0);}, 2000); win=1; return;}
                if(fieldpos[0][u] == 2 && fieldpos[1][u] == 2 && fieldpos[2][u] == 2)
                { setTimeout(function() {c.drawImage(red, 0, 0);}, 2000); win=1; return;}
                if(fieldpos[0][0] == 1 && fieldpos[1][1] == 1 && fieldpos[2][2] == 1 || fieldpos[0][2] == 1 &&  fieldpos[1][1] == 1 && fieldpos[2][0] == 1)
                { setTimeout(function() {c.drawImage(bl, 0, 0);}, 2000); win=1; return;}
                if(fieldpos[0][0] == 2 && fieldpos[1][1] == 2 && fieldpos[2][2] == 2 || fieldpos[0][2] == 2 &&  fieldpos[1][1] == 2 && fieldpos[2][0] == 2)
                { setTimeout(function() {c.drawImage(red, 0, 0);}, 2000); win=1; return;}
                for(j=0;j<=2;j++)
                {
                    if(fieldpos[u][j] == 1 || fieldpos[u][j]== 2)
                    {draw++}
                }
                if(draw == 9)
                { setTimeout(function() {c.drawImage(dr, 0, 0);}, 2000); win=1;}
            }
        }

    },false);
}


// Bestimmt die Maus position

function getMousePos(canvas, evt) {

    var rect = canvas.getBoundingClientRect();

	return {
        x: Math.floor((evt.clientX-rect.left)/(rect.right-rect.left)*canvas.width),
        y: Math.floor((evt.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height)
	};
}