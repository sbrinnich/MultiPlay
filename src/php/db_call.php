<?php

function db_con($type, $arguments){
    $results = array();
    if($type != 'insert' && $type != 'get' && $type != 'delete'){
        $results['error'] = 'Wrong type!';
    }
    if($arguments == null){
        $results['error'] = 'No arguments!';
    }

    if (!isset($results['error'])) {

        // Connection Parameters
        $servername = "e1.ehosts.com";
        $username = "multipl4_dbuser";
        $password = "fF0nH,%N`g=^pmc+";
        $dbname = "multipl4_DB";

        // Create connection
        $conn = mysqli_connect($servername, $username, $password, $dbname);

        // Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }

        switch ($type) {
            case 'get':
                // sql statement
                $sql = "SELECT * FROM `" . $arguments . "`";

                $res = mysqli_query($conn, $sql);

                if ($res !== false && mysqli_num_rows($res) > 0) {
                    $results['results'] = array();
                    // get data of each row
                    while ($row = mysqli_fetch_assoc($res)) {
                        $results['results'][] = $row;
                    }
                } else {
                    $results['results'] = array();
                }
                break;
            case 'insert':
                $sql = "";
                switch ($arguments[0]) {
                    case '4-gewinnt':
                        $sql = "INSERT INTO `4-gewinnt` (posx, posy, teamname) VALUES (" .
                            $arguments[1][0] . "," . $arguments[1][1] . ",'" . $arguments[1][2] . "')";
                        break;
                    case '4-gewinnt-temp':
                        $sql = "INSERT INTO `4-gewinnt-temp` (posx) VALUES (" . $arguments[1][0] . ")";
                        break;
                    case 'tic-tac-toe':
                        $sql = "INSERT INTO `tic-tac-toe` (posx, posy, teamname) VALUES (" . $arguments[1][0] .
                            "," . $arguments[1][1] . ",'" . $arguments[1][2] . "')";
                        break;
                    case 'tic-tac-toe-temp':
                        $sql = "INSERT INTO `tic-tac-toe-temp` (posx, posy) VALUES (" .
                            $arguments[1][0] . "," . $arguments[1][1] . ")";
                        break;
                }

                if (mysqli_query($conn, $sql)) {
                    $results['results'] = 'success';
                } else {
                    $results['error'] = mysqli_error($conn);
                }
                break;
            case 'delete':
                if ($arguments == 'tic-tac-toe' ||
                    $arguments == 'tic-tac-toe-temp' ||
                    $arguments == '4-gewinnt' ||
                    $arguments == '4-gewinnt-temp'
                ) {
                    $sql = "DELETE FROM `" . $arguments . "`";

                    if (mysqli_query($conn, $sql)) {
                        $results['results'] = 'success';
                    } else {
                        $results['error'] = mysqli_error($conn);
                    }
                } else {
                    $results['error'] = 'Wrong arguments!';
                }
                break;
        }

        mysqli_close($conn);
    }

    return $results;
}

?>