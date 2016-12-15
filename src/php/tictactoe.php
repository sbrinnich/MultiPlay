<?php

function tictactoe_randomTurn($field){
    /**
    $turn = array();
    for($i = 0; $i < 3; $i++){
        $turn['posy'] = $i;
        for($j = 0; $j < 3; $j++){
            $turn['posx'] = $j;
            if($field[$turn['posy']][$turn['posx']] == null){
                return $turn;
            }
        }
    }
    return null;
     */

    //More randomized approach

    $turn = array();
    do{
        $randomy = mt_rand (0,2);
        $turn['posy'] = $randomy;
        $randomx = mt_rand (0,2);
        $turn['posx'] = $randomx;
    }
    while($field[$turn['posy']][$turn['posx']] != null); //Possible deadlock?
    return $turn;

}

function tictactoe_getFieldArray($dbField){
    $field = array(array(),array(),array());
    for($i = 0; $i < count($field); $i++){
        for($j = 0; $j < 3; $j++){
            $field[$i][$j] = null;
        }
    }
    for($i = 0; $i < count($dbField); $i++){
        $field[$dbField[$i]['ypos']][$dbField[$i]['xpos']] = $dbField[$i]['teamname'];
    }
    return $field;
}

function tictactoe_checkWinner($field, $last_turn){
    // TODO implement
    // Should return either team name if one has won or 'draw' or null
    
    for($u=0;$u<=2;$u++)
            {
                if($field[$u][0] == 'blue' && $field[$u][1] == 1 && $field[u][2] == 1)
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
    return null;
}


?>