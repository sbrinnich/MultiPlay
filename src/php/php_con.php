<?php

$results = array();
if (!isset($_POST['type'])) {
    $results['error'] = 'No type!';
}

if(!isset($results['error'])){

}

return json_encode($results);

?>