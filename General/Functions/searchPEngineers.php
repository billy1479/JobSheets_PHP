<?php
require_once __DIR__.'/connect.php';
$x = $_POST['x'];

// This gets all the ID and the associated engineers
$data = $conn->query('SELECT ID, Engineers FROM jobs');

// This loops through the engineers and puts aside the ID's of the ones where the primary is $x
while ($data && $row=mysqli_fetch_array($data)) {
    echo "<option value='".$row['Engineers']."'>hi</option>";
}

$conn->close();
?>