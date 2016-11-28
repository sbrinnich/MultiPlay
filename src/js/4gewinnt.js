//Einbinden der Bilder

var hg = new Image();		
hg.src="./img/4-gewinnt/4-Gewinnt-board.png";

var ro = new Image();
ro.src="./img/4-gewinnt/4-Gewinnt-red.png";

var bo = new Image();
bo.src="./img/4-gewinnt/4-Gewinnt-blue.png";

// Ein Array für die Felder des Spiels

var fieldpos = new Array(7)
fieldpos[0] = new Array(0,0,0,0,0,0)
fieldpos[1] = new Array(0,0,0,0,0,0)
fieldpos[2] = new Array(0,0,0,0,0,0)
fieldpos[3] = new Array(0,0,0,0,0,0)
fieldpos[4] = new Array(0,0,0,0,0,0)
fieldpos[5] = new Array(0,0,0,0,0,0)
fieldpos[6] = new Array(0,0,0,0,0,0)


// turn steht für den Spielzug 

var turn=0;


// window.onload wird ausgeführt wenn das Fenster + Bilder geladen ist

window.onload =function()
{
	// muss verwendet werden um etwas im canvis verendern zu können
	var canvas = document.getElementById("tic");
	var c = canvas.getContext('2d');


	var hg = new Image();
	hg.src="./img/4-gewinnt/4-Gewinnt-board.png";


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

	var u; // Variable für die Schleife
	var höhe=1024; // bestimmt die
	var breite=754; // bestimmt die Breite
	var cX = Math.floor(getMousePos.x/(1024/7)); // setzt cX auf einen wert zwischen 0 und 2
	var cY = Math.floor(getMousePos.y/(754/6)); // setzt cY auf einen wert zwischen 0 und 2

	console.log(cX);
	console.log(cY);

		// Sorgt dafür das der Kreis in die letztfreie Ebene kommt
		for(u=5;u>=0;u--)
		{
			if(fieldpos[cX][u] != 1 && fieldpos[cX][u] != 2)
				{
					if(cY<u)							
						{ cY=u; }	
				}
		}


			console.log(cY);


		if(turn%2==0 && fieldpos[cX][cY]==0)	//Kontrolliert ob der Zug gerade ist dann ist x dran und ob schon etwas in dem Feld ist
		{
			c.drawImage(bo, (144*(cX)+8), (115*(cY)+31));	// Zeichnet das Bild des X in das gewählte Feld
			c.drawImage(hg, 0, 0); c.drawImage(hg, 0, 0); 
			turn= turn+1;
			fieldpos[cX][cY]=1;  // Sagt über 1 das im Feld ein X steht
		}

		else if(fieldpos[cX][cY]==0)
		{
			c.drawImage(ro, (144*(cX)+8), (115*(cY)+31));	// Zeichnet das Bild des O in das gewählte Feld
			c.drawImage(hg, 0, 0); 
			turn= turn+1;
			fieldpos[cX][cY]=2;	// Sagt über 2 das im Feld ein O steht
		}
	}



