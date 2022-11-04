<?php
require_once __DIR__.'/connect.php';
$client = $_POST['clientName'];
$address = $conn->query('SELECT Location from clients where Name="'.$client.'"');
while ($address && $row=mysqli_fetch_array(($address))) {
    echo $row['Location'];
}
$conn->close();
?>