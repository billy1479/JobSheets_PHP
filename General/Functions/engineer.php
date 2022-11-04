<?php
//fully functional
require_once __DIR__.'/connect.php';
$mode = $_POST['engineerMode'];
if ($mode == 1) {
    // this is for adding an engineer
    $name = $_POST['engineerName'];
    $conn->query('INSERT INTO engineers (Name) VALUES ("'.$name.'")');
    $conn->close();
} elseif ($mode == 2) {
    // this is for editing the engineer name
    $id = $_POST['engineerName'];
    $newName = $_POST['newName'];
    $conn->query('UPDATE engineers set Name="'.$newName.'" where Name="'.$id.'"');
    $conn->close();
} elseif ($mode == 3) {
    // this is for deleting an engineer
    $id = $_POST['engineerID'];
    $conn->query('DELETE FROM engineers where Name="'.$id.'"');
    $conn->close();
} else {
    echo 'this has failed';
}
?>