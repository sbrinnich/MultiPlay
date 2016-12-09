<?php

$results = array();

if( !isset($_POST['type']) ) { $results['error'] = 'No type!'; }
if( !isset($_POST['arguments']) ) { $results['error'] = 'No arguments!'; }

if( !isset($results['error']) ) {

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

    switch($_POST['type']) {
        case 'get':
            // sql statement
            $sql = "SELECT * FROM " . $_POST['arguments'];

            $res = mysqli_query($conn, $sql);

            if ($res !== false && mysqli_num_rows($res) > 0) {
                $results['results'] = array();
                // get data of each row
                while($row = mysqli_fetch_assoc($res)) {
                    $results['results'][] = $row;
                }
            } else {
                $results['results'] = array();
            }
            break;
        case 'insert':
            $sql = "";
            switch($_POST['arguments'][0]){
                case '4-gewinnt':
                    $sql = "INSERT INTO '4-gewinnt'(posx, posy, teamname)
                      VALUES (".$_POST['arguments'][1][0].",".$_POST['arguments'][1][1].",".$_POST['arguments'][1][2].")";
                    break;
                case '4-gewinnt-temp':
                    $sql = "INSERT INTO '4-gewinnt-temp'(posx)
                      VALUES (".$_POST['arguments'][1][0].")";
                    break;
                case 'tic-tac-toe':
                    $sql = "INSERT INTO 'tic-tac-toe'(posx, posy, teamname)
                      VALUES (".$_POST['arguments'][1][0].",".$_POST['arguments'][1][1].",".$_POST['arguments'][1][2].")";
                    break;
                case 'tic-tac-toe-temp':
                    $sql = "INSERT INTO 'tic-tac-toe-temp'(posx, posy)
                      VALUES (".$_POST['arguments'][1][0].",".$_POST['arguments'][1][1].")";
                    break;
            }

            if (mysqli_query($conn, $sql)) {
                $results['results'] = 'success';
            }else {
                $results['error'] = mysqli_error($conn);
            }
            break;
        case 'delete':
            if($_POST['arguments'] == 'tic-tac-toe' ||
                $_POST['arguments'] == 'tic-tac-toe-temp' ||
                $_POST['arguments'] == '4-gewinnt' ||
                $_POST['arguments'] == '4-gewinnt-temp'){
                $sql = "DELETE FROM ".$_POST['arguments'];

                if (mysqli_query($conn, $sql)) {
                    $results['results'] = 'success';
                }else {
                    $results['error'] = mysqli_error($conn);
                }
            }else{
                $results['error'] = 'Wrong arguments!';
            }
            break;
    }

    mysqli_close($conn);
}

echo json_encode($results);

?>