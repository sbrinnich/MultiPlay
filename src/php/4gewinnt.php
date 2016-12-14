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

function viergewinnt_randomTurn(){
    // TODO implement
    return null;
}

?>