<?php

require_once "logic.php";

$sleep_time = 5;

while(1) {
    // Sleep
    sleep($sleep_time);

    // Do updates
    time_update();
}

?>