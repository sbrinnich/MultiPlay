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

    $x = $last_turn['posx']; //x-position of last turn
    $y = $last_turn['posy']; //y-position of last turn
    $team = $field[$y][$x]; //team that just played and has to be
    $inarow = 1;

    //topright - bottomleft


    //topleft - bootomright


    //horizontal


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

function are_4_in_a_row($field, $team, $x, $y, $deltax, $deltay){
    //return team if win, or null if not
    $tries = 1;
    while ($tries <= 4)//try on each position of possible
    {
        0
         0
          0
           0


        $tries++;
    }


    return null;
}

?>