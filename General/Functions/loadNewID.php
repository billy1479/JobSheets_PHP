<?php
require_once __DIR__.'/connect.php';
// this needs to be made more efficient as it loops through whole database for the max ID - cba to look into it now
// this finds the max value of ID from the table and adds 1 to it for the new job sheet section
$data = $conn->query('SELECT ID from jobs ORDER BY ID DESC');
$x = 0;
$max = 0;
while ($data && $row=mysqli_fetch_array(($data))) {
    if ($x == 0) {
        $max = $row['ID'];
        $max = $max + 1;
    } else {}
    $x += 1;
}
echo $max;
?>