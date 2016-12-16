<?php

function viergewinnt_getFieldArray($dbField){
    $field = array(array(),array(),array(),array(),array(),array());
    for($i = 0; $i < count($field); $i++){
        for($j = 0; $j < 7; $j++){
            $field[$i][$j] = null;
        }
    }
    for($i = 0; $i < count($dbField); $i++){
        $field[$dbField[$i]['posy']][$dbField[$i]['posx']] = $dbField[$i]['teamname'];
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
    $turn = array();
    do{
        $randomx = mt_rand (0,6);
        $turn['posx'] = $randomx;
        $turn['posy'] = viergewinnt_getYPos($randomx, $field);
    }while($turn['posy'] === null); //Possible deadlock?
    return $turn;
}

function check_if_in_field($posx, $posy){
    if($posx >= 0 && $posx <= 6 && $posy >= 0 && $posy <= 5) {
        return true;
    }
    return false;
}

function matches_in_direction($matches, $posx, $posy, $deltax, $deltay, $field, $team)
{
    //returns #matches found
    $posx = $posx + $deltax;
    $posy = $posy + $deltay;

    if(check_if_in_field($posx, $posy)){
        if($field[$posy][$posx] == $team){
            $matches = matches_in_direction($matches++, $posx, $posy, $deltax, $deltay, $field, $team);
        }
    }
    return $matches;
}

function check_if_4_in_a_row($field, $team, $x, $y, $deltax, $deltay){
    //returns team if win, or null if not.

    $matches = matches_in_direction(0, $x, $y, $deltax, $deltay, $field, $team);

    //reverse direction
    $deltax *= -1;
    $deltay *= -1;

    $matches = matches_in_direction($matches, $x, $y, $deltax, $deltay, $field, $team);

    if($matches >= 3)
    {
        return $team;
    }

    return null;
}

function viergewinnt_checkWinner($field, $last_turn){

    $x = $last_turn['posx']; //x-position of last turn
    $y = $last_turn['posy']; //y-position of last turn
    $team = $field[$y][$x]; //team that just played and has to be
    $inarow = 1;

    //topright - bottomleft
    $checkd1 = check_if_4_in_a_row($field, $team, $x, $y, 1, 1);
    if($checkd1 != null){
        return $checkd1;
    }

    //topleft - bottomright
    $checkd2 = check_if_4_in_a_row($field, $team, $x, $y, -1, 1);
    if($checkd2 != null){
        return $checkd2;
    }

    //horizontal
    $checkh = check_if_4_in_a_row($field, $team, $x, $y, 1, 0);
    if($checkh != null){
        return $checkh;
    }

    //down
    if($y <= 2){ //if high enough, check down
        if($field[$y][$x+1] == $team && $field[$y][$x+2] == $team && $field[$y][$x+3] == $team)
        {
            return $team;
        }
    }

    //is it a draw?
    $draw = true;
    for($x = 0; $x < 7; $x++)//only top row is relevant
    {
        if($field[0][$x] == null){ //if field is still empty game is not finished jet
            $draw = false;
            break;
        }
    }
    if($draw == true)
    {
        return 'draw';
    }

    //else continue game, no winner was found
    return null;
}




?>