

var hg = new Image();
hg.src="img/TicTacToe.png";

var o = new Image();
o.src="img/TicTacToe_0.png";

var x = new Image();
x.src="img/TicTacToe_1.png";

var fieldpos = new Array(3)
fieldpos[0] = new Array(0,0,0)
fieldpos[1] = new Array(0,0,0)
fieldpos[2] = new Array(0,0,0)

var turn=0;
var win=0;

window.onload =function()
{
	var canvas = document.getElementById("tic");
	var c = canvas.getContext('2d');

var hg = new Image();
hg.src="img/TicTacToe.png";

// zu beginn wird der Hintergrund gesetzt

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


		
		var u;
		var g=500; // bestimmt die Abmessungen des Feldes (500x500)
		var cX = Math.floor(getMousePos.x/(500/3)); // setzt cX auf einen wert zwischen 0 und 2
		var cY = Math.floor(getMousePos.y/(500/3)); // setzt cY auf einen wert zwischen 0 und 2

	if(win != 1)
	{
		if(turn%2==0 && fieldpos[cX][cY]==0)
		{
			c.drawImage(x, (g/3*cX)+(g/15), (g/3*cY)+(g/15));
			turn= turn+1;
			fieldpos[cX][cY]=1;
		}

		else if(fieldpos[cX][cY]==0)
		{
			c.drawImage(o, (g/3*cX)+(g/15), (g/3*cY)+(g/15));
			turn= turn+1;
			fieldpos[cX][cY]=2;
		}

	}

	for(u=0;u<=3;u++)
	{
	if(fieldpos[u][0] == 1 && fieldpos[u][1] == 1 && fieldpos[u][2] == 1)
		{ alert("X hat gewonnen"); win=1; return;}
	if(fieldpos[0][u] == 1 && fieldpos[1][u] == 1 && fieldpos[2][u] == 1)
		{ alert("X hat gewonnen"); win=1; return;}
	if(fieldpos[u][0] == 2 && fieldpos[u][1] == 2 && fieldpos[u][2] == 2)
		{ alert("O hat gewonnen"); win=1; return;}
	if(fieldpos[0][u] == 2 && fieldpos[1][u] == 2 && fieldpos[2][u] == 2)
		{ alert("O hat gewonnen"); win=1; return;}
	if(fieldpos[0][0] == 1 && fieldpos[1][1] == 1 && fieldpos[2][2] == 1 || fieldpos[0][2] == 1 &&  fieldpos[1][1] == 1 && fieldpos[2][0] == 1)
		{ alert("X hat gewonnen"); win=1; return;}
	if(fieldpos[0][0] == 2 && fieldpos[1][1] == 2 && fieldpos[2][2] == 2 || fieldpos[0][2] == 2 &&  fieldpos[1][1] == 2 && fieldpos[2][0] == 2)
		{ alert("O hat gewonnen"); win=1; return;}
	}

}

		



	
     