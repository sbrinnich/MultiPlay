<?php

require_once "logic.php";

$results = array();
if (!isset($_POST['type'])) {
    $results['error'] = 'No type!';
}

if($_POST['type'] != 'getwinner_tictactoe' && $_POST['type'] != 'getwinner_4gewinnt' && $_POST['type'] != 'getteam'
&& $_POST['type'] != 'getfield_tictactoe' && $_POST['type'] != 'getfield_4gewinnt'){
    $results['error'] = "Wrong type!";
}

if(!isset($results['error'])){
    switch($_POST['type']){
        case 'getwinner_tictactoe':
            $results['results'] = get_winner('TICTACTOE');
            break;
        case 'getwinner_4gewinnt';
            $results['results'] = get_winner('4GEWINNT');
            break;
        case 'getfield_tictactoe':
            $results['results'] = get_field('TICTACTOE');
            break;
        case 'getfield_4gewinnt';
            $results['results'] = get_field('4GEWINNT');
            break;
        case 'getteam':
            $results['results'] = get_current_team();
            break;
    }
}

return json_encode($results);

?>