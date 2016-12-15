<?php

require_once "db_call.php";

$results = array();
if (!isset($_POST['type'])) {
    $results['error'] = 'No type!';
}
if (!isset($_POST['arguments'])) {
    $results['error'] = 'No arguments!';
}
if (isset($results['error'])){
    echo json_encode($results);
}else{
    echo json_encode(db_con($_POST['type'], $_POST['arguments']));
}

?>