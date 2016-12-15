<?php

function tictactoe_randomTurn($field){
    //TODO make more random
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

    //More randomized approach:

    //$randomy = 0;
    //$randomx = 0;
    //do{
    //    $randomy = mt_rand (0,2);
    //    $turn['posy'] = $randomy;
    //    $randomx = mt_rand (0,2);
    //    $turn['posx'] = $randomx;
    //}
    //while($field[$turn['posy']][$turn['posx']] != null) //FIX: can be Deadlock if all the fields are full
    //return $turn;

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

function tictactoe_checkWinner($field){
    // TODO implement
    // Should return either team name if one has won or 'draw' or null
    return null;
}


?>