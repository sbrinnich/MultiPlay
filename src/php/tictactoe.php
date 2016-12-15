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

function tictactoe_checkWinner($field, $last_turn, $teams){
    // TODO implement
    // Should return either team name if one has won or 'draw' or null

    $meinteam = $field[$last_turn['posy']][$last_turn['posx']];
    $draw = 0;

    for($u=0;$u<=2;$u++)
            {
                if($field[$u][0] == $meinteam && $field[$u][1] == $meinteam && $field[$u][2] == $meinteam)
                { return $meinteam;}
                if($field[0][$u] == $meinteam && $field[1][$u] == $meinteam && $field[2][$u] == $meinteam)
                { return $meinteam;}
                if($field[0][0] == $meinteam && $field[1][1] == $meinteam && $field[2][2] == $meinteam || $field[0][2] == $meinteam &&  $field[1][1] == $meinteam && $field[2][0] == $meinteam)
                { return $meinteam;}

                for($j=0;$j<=2;$j++)
                {
                    if($field[$u][$j] != null )
                    {$draw++;}
                }
                if($draw == 9)
                { return 'draw';}
            }
    return null;
}



?>