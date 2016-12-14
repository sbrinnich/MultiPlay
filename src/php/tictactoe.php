<?php

function tictactoe_randomTurn(){
    //TODO implement
    return null;
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


?>