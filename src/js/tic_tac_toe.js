
//Einbinden der Bilder

var hg = new Image();		
hg.src="./img/TicTacToe.png";

var o = new Image();
o.src="./img/TicTacToe_0.png";

var x = new Image();
x.src="./img/TicTacToe_1.png";

var bl = new Image();
bl.src="./img/Blue.png";

var red = new Image();
red.src="./img/Red.png";

var dr = new Image();
dr.src="./img/Draw.png";
// Ein Array für die Felder des Spiels

var fieldpos = new Array(3)
fieldpos[0] = new Array(0,0,0)
fieldpos[1] = new Array(0,0,0)
fieldpos[2] = new Array(0,0,0)

// turn steht für den Spielzug und win ist die Gewinnüberprüfung

var turn=0;
var win=0;

// window.onload wird ausgeführt wenn das Fenster + Bilder geladen ist

window.onload =function()
{
	// muss verwendet werden um etwas im canvis verendern zu können
	var canvas = document.getElementById("tic");
	var c = canvas.getContext('2d');


	var hg = new Image();
	hg.src="./img/TicTacToe.png";


	// onload wird der Hintergrund gesetzt
	hg.onload = function(){
	c.drawImage(hg, 0, 0);
	};

}




// Bestimmt die Maus position

function getMousePos(canvas, evt) {

    var rect = canvas.getBoundingClientRect();

        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
  }





window.onclick= function(getMousePos){
		
	var canvas = document.getElementById("tic");
	var c = canvas.getContext('2d');

	var draw=0; // schaut ob jemand gewonnen hat
	var u; // Variable für die Schleife
	var j; // Variable für die Schleife
	var g=500; // bestimmt die Abmessungen des Feldes (500x500)
	var cX = Math.floor(getMousePos.x/(500/3)); // setzt cX auf einen wert zwischen 0 und 2
	var cY = Math.floor(getMousePos.y/(500/3)); // setzt cY auf einen wert zwischen 0 und 2


	// Wenn noch keiner Gewonnen hat wird dieses if ausgeführt
	if(win != 1)
	{
		if(turn%2==0 && fieldpos[cX][cY]==0)	//Kontrolliert ob der Zug gerade ist dann ist x dran und ob schon etwas in dem Feld ist
		{
			c.drawImage(x, (g/3*cX)+(g/15), (g/3*cY)+(g/15));	// Zeichnet das Bild des X in das gewählte Feld
			turn= turn+1;
			fieldpos[cX][cY]=1;  // Sagt über 1 das im Feld ein X steht
		}

		else if(fieldpos[cX][cY]==0)
		{
			c.drawImage(o, (g/3*cX)+(g/15), (g/3*cY)+(g/15));	// Zeichnet das Bild des O in das gewählte Feld
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
			console.log(draw);
		if(draw == 9)
			{ setTimeout(function() {c.drawImage(dr, 0, 0);}, 2000); win=1;}
		}
	}

}

		



	
     