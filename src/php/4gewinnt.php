<?php

function viergewinnt_getFieldArray($dbField){
    $field = array(array(),array(),array(),array(),array(),array());
    for($i = 0; $i < count($field); $i++){
        for($j = 0; $j < 7; $j++){
            $field[$i][$j] = null;
        }
    }
    for($i = 0; $i < count($dbField); $i++){
        $field[$dbField[$i]['ypos']][$dbField[$i]['xpos']] = $dbField[$i]['teamname'];
    }
    return $field;
}

function viergewinnt_getYPos($xpos, $field){
    for($i = count($field)-1; $i >= 0; $i--){
        if($field[$i][$xpos] == null){
            return $i;
        }
    }
    return null;
}

function viergewinnt_randomTurn($field){
    //Random, just an idea
    $turn = array();
    do{
        $randomx = mt_rand (0,6);
        $turn['posx'] = $randomx;
        $turn['posy'] = viergewinnt_getYPos($randomx, $field);
    }while($turn['posy'] == null); //Possible deadlock?
    return $turn;
}

function viergewinnt_checkWinner($field, $last_turn){
    // TODO implement
    // Should return either team name if one has won or 'draw' or null
    return null;
}

?>