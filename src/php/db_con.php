<?php

$results = array();

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

    switch($_POST['arguments'][0]) {
        // DONT TOUCH!!!
        //if (mysqli_query($conn, $sql)) {
        //$results['results'] = 'success';
        //}else {
        //$results['error'] = mysqli_error($conn);
        //}
        case 'get':
            // sql statement
            $sql = "SELECT * FROM " . $_POST['arguments'][1];

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
    }

    mysqli_close($conn);
}

echo json_encode($results);

?>