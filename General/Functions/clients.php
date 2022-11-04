<?php
//needs testing
require_once __DIR__.'/connect.php';
$mode = $_POST['clientMode'];
if ($mode == 1) {
    // this is for adding a client
    $name = $_POST['clientName'];
    $address = $_POST['clientAddress'];
    $conn->query('INSERT INTO clients (Name, Location) VALUES ("'.$name.'", "'.$address.'")');
    $conn->close();
} elseif ($mode == 2) {
    // this is for editing a client name
    $client = $_POST['client'];
    $newName = $_POST['clientName'];
    $sql = 'UPDATE clients set Name="'.$newName.'" where Name="'.$client.'"';
    $conn->query($sql);
    $conn->close();
} elseif ($mode == 3) {
    // this is for deleting a client
    $client = $_POST['clientName'];
    $conn->query('DELETE FROM clients where Name="'.$client.'"');
    $conn->close();
} elseif ($mode == 4) { 
    // this is for editing a client address
    $client = $_POST['clientName'];
    $location = $_POST['clientAddress'];
    echo $client;
    echo $location;
    $conn->query('UPDATE clients set Location="'.$location.'" where Name="'.$client.'"');
    $conn->close();
} else {
    // nothing happens here
    $conn->close();
}
?>