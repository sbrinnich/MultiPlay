
function load_4gewinnt(canvas) {
	//Einbinden der Bilder

    hg = new Image();
    hg.src = "img/4-gewinnt/4-Gewinnt-board.png";

    ro = new Image();
    ro.src = "img/4-gewinnt/4-Gewinnt-red.png";

    bo = new Image();
    bo.src = "img/4-gewinnt/4-Gewinnt-blue.png";

	// Ein Array für die Felder des Spiels

    fieldpos = new Array(7);
    fieldpos[0] = [0, 0, 0, 0, 0, 0];
    fieldpos[1] = [0, 0, 0, 0, 0, 0];
    fieldpos[2] = [0, 0, 0, 0, 0, 0];
    fieldpos[3] = [0, 0, 0, 0, 0, 0];
    fieldpos[4] = [0, 0, 0, 0, 0, 0];
    fieldpos[5] = [0, 0, 0, 0, 0, 0];
    fieldpos[6] = [0, 0, 0, 0, 0, 0];

	// turn steht für den Spielzug

    turn = 0;

    init_canvas_4gewinnt(canvas);
}


// window.onload wird ausgeführt wenn das Fenster + Bilder geladen ist

function init_canvas_4gewinnt(canvas)
{
	// muss verwendet werden um etwas im canvis verendern zu können
	var c = canvas.getContext('2d');
    canvas.style.width ='100%';
    canvas.width  = canvas.scrollWidth;
    canvas.style.height=canvas.scrollWidth*0.736328125+'px';
    canvas.height = canvas.scrollWidth*0.736328125;
    canvas.parentNode.style.height = canvas.scrollWidth*0.736328125+'px';

	// onload wird der Hintergrund gesetzt
	hg.onload = function(){ 
		c.drawImage(hg, 0, 0, hg.width, hg.height, 0, 0, canvas.scrollWidth, canvas.scrollHeight);
	};

	addListener_4gewinnt(canvas);

}

function addListener_4gewinnt(canvas){
    canvas.addEventListener('mouseup', function(evt) {

        var c = canvas.getContext('2d');

        var u; // Variable für die Schleife
        var hoehe=canvas.scrollHeight; // bestimmt die Hoehe
        var breite=canvas.scrollWidth; // bestimmt die Breite
        var cX = Math.floor(getMousePos(canvas,evt).x/(canvas.scrollWidth/7)); // setzt cX auf einen wert zwischen 0 und 2
        var cY = Math.floor(getMousePos(canvas,evt).y/(canvas.scrollHeight/6)); // setzt cY auf einen wert zwischen 0 und 2

		// Sorgt dafür das der Kreis in die letztfreie Ebene kommt
        if(fieldpos[cX][cY] == 0)
        {
            for(u=5;u>=0;u--)
            {
                if(fieldpos[cX][u] != 1 && fieldpos[cX][u] != 2)
                {
                    if(cY<u)
                    { cY=u; }
                }
            }
        }
        else {
            for (u = 5; u >= 0; u--) {
                if (fieldpos[cX][u] == 0 && (fieldpos[cX][u + 1] == 1 || fieldpos[cX][u + 1] == 2)) {
                    cY = u;
                }
            }
        }


        if(turn%2==0 && fieldpos[cX][cY]==0)	//Kontrolliert ob der Zug gerade ist dann ist x dran und ob schon etwas in dem Feld ist
        {
            c.drawImage(bo, 0, 0, bo.width, bo.height,
                (canvas.scrollWidth-canvas.scrollWidth*0.015625)/7*cX+canvas.scrollWidth*0.0078125,
                (canvas.scrollHeight-canvas.scrollHeight*0.08366533864542)/6*cY+canvas.scrollHeight*0.041168658699,
                (canvas.scrollWidth-canvas.scrollWidth*0.015625)/7,
                (canvas.scrollHeight-canvas.scrollHeight*0.08366533864542)/6);	// Zeichnet das Bild des X in das gewählte Feld
            c.drawImage(hg, 0, 0, hg.width, hg.height, 0, 0, canvas.scrollWidth, canvas.scrollHeight);
            turn= turn+1;
            fieldpos[cX][cY]=1;  // Sagt über 1 das im Feld ein X steht
        }

        else if(fieldpos[cX][cY]==0)
        {
            c.drawImage(ro, 0, 0, ro.width, ro.height,
                (canvas.scrollWidth-canvas.scrollWidth*0.015625)/7*cX+canvas.scrollWidth*0.0078125,
                (canvas.scrollHeight-canvas.scrollHeight*0.08366533864542)/6*cY+canvas.scrollHeight*0.041168658699,
                (canvas.scrollWidth-canvas.scrollWidth*0.015625)/7,
                (canvas.scrollHeight-canvas.scrollHeight*0.08366533864542)/6);	// Zeichnet das Bild des O in das gewählte Feld
            c.drawImage(hg, 0, 0, hg.width, hg.height, 0, 0, canvas.scrollWidth, canvas.scrollHeight);
            turn= turn+1;
            fieldpos[cX][cY]=2;	// Sagt über 2 das im Feld ein O steht
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



