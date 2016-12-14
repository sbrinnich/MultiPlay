<?php

require_once "db_con.php";

// Define all games
define('TICTACTOE',0);
define('4GEWINNT', 1);

/**
 * Gets called if timer fires
 */
function time_update(){
    //4-gewinnt
    $viergewinnttemp = db_con('get', '4-gewinnt-temp');
    if(empty($viergewinnttemp)){
        do_random_turn('4GEWINNT');
    }else{
        $chosen_turn = db_con('get', '4gewinnt_chosencount')[0];
    }

    // Tic-Tac-Toe
    $tictactoetemp = db_con('get', 'tic-tac-toe-temp');
    if(empty($tictactoetemp)){
        do_random_turn('TICTACTOE');
    }else{
        $chosen_turn = db_con('get', 'tictactoe_chosencount')[0];
    }
}

/**
 * Choose a random turn depending on game
 * @param $game the game for which a random turn shall be generated
 */
function do_random_turn($game){

}

?>