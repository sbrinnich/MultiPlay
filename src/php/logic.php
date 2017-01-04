<?php

require_once "db_call.php";
require_once "tictactoe.php";
require_once "4gewinnt.php";

// Define all games
define('TICTACTOE',0);
define('4GEWINNT', 1);

$teams = db_con('get','all_teams')['results'];
$current_team = get_current_team();
$win_viergewinnt = null;
$win_tictactoe = null;


/**
 * Gets called if timer fires
 */
function time_update(){
    global $current_team, $teams, $win_tictactoe, $win_viergewinnt;

    //4 GEWINNT
    if($win_viergewinnt == null) {
        $viergewinnttemp = db_con('get', '4-gewinnt-temp')['results'];
        $field = get_field('4GEWINNT');
        // If nobody voted do random turn
        if (empty($viergewinnttemp)) {
            $next_turn = get_random_turn('4GEWINNT', $field);
        } else {
            $next_turn = db_con('get', '4gewinnt_chosencount')['results'][0]['posx'];
            // Read possible y position for chosen turn
            $ypos = viergewinnt_getYPos($next_turn, $field);
            if ($ypos === null) {
                // If no y position was found => turn not possible => do random turn
                $next_turn = get_random_turn('4GEWINNT', $field);
            } else {
                $next_turn = array("posx" => $next_turn, "posy" => $ypos);
            }
        }
        // Save turn to database
        db_con('insert', array('4-gewinnt', array($next_turn['posx'], $next_turn['posy'], $current_team['name'])));
        db_con('delete', '4-gewinnt-temp');
        $field = get_field('4GEWINNT');
        $win_viergewinnt = viergewinnt_checkWinner($field, $next_turn);
        if($win_viergewinnt !== null){
        db_con('insert', array('game-states', array('4gewinnt'$win_viergewinnt )));
        }
    }else{
        // Reset game
        $win_viergewinnt = null;
        db_con('delete', '4-gewinnt-temp');
        db_con('delete', '4-gewinnt');
        db_con('insert', array('game-states', array('4gewinnt' null )));
    }


    // TIC TAC TOE
    if($win_tictactoe == null) {
        $tictactoetemp = db_con('get', 'tic-tac-toe-temp')['results'];
        $field = get_field('TICTACTOE');
        if (empty($tictactoetemp)) {
            $next_turn = get_random_turn('TICTACTOE', $field);
        } else {
            $next_turn = db_con('get', 'tictactoe_chosencount')['results'][0];
            // If invalid turn do random turn
            if ($field[$next_turn['posy']][$next_turn['posx']] != null) {
                $next_turn = get_random_turn('TICTACTOE', $field);
            }
        }
        db_con('insert', array('tic-tac-toe', array($next_turn['posx'], $next_turn['posy'], $current_team['name'])));
        db_con('delete', 'tic-tac-toe-temp');
        $field = get_field('TICTACTOE');
        $win_tictactoe = tictactoe_checkWinner($field, $next_turn);
    }else{
        // Reset game
        $win_tictactoe = null;
        db_con('delete', 'tic-tac-toe-temp');
        db_con('delete', 'tic-tac-toe');
    }

    // CHANGE TEAM
    $index = array_search($current_team, $teams);
    $index++;
    if($index >= count($teams)){
        $index = 0;
    }
    db_con('update', array(0, $current_team['name']));
    $current_team = $teams[$index];
    db_con('update', array(1, $current_team['name']));
}

/**
 * Choose a random turn depending on game
 * @param $game int the game for which a random turn shall be generated
 */
function get_random_turn($game, $field){
    if($game == '4GEWINNT'){
        return viergewinnt_randomTurn($field);
    }else if($game == 'TICTACTOE'){
        return tictactoe_randomTurn($field);
    }
    return null;
}

/**
 * Get currently playing team
 * @return array team who is currently allowed to choose a turn
 */
function get_current_team(){
    global $teams;
    for($i = 0; $i < count($teams); $i++){
        if($teams[$i]['active'] == 1){
            return $teams[$i];
        }
    }
    return $teams[0];
}

/**
 * Get current field of game
 * @param $game int the game for which the field is asked
 * @return array game field
 */
function get_field($game){
    if($game == '4GEWINNT'){
        return viergewinnt_getFieldArray(db_con('get', '4gewinnt_sorted')['results']);
    }else if($game == 'TICTACTOE'){
        return tictactoe_getFieldArray(db_con('get', 'tictactoe_sorted')['results']);
    }
    return null;
}

/**
 * Get current status of game (if a team has won, it's a draw or game is still running)
 * @param $game int the game for which the winner is asked
 * @return string teamname if one has won or 'draw' if it's a draw or null if game is still running
 */
function get_winner($game){
    if($game == '4GEWINNT'){
        global $win_viergewinnt;
        return $win_viergewinnt;
    }else if($game == 'TICTACTOE'){
        global $win_tictactoe;
        return $win_tictactoe;
    }
    return null;
}

?>