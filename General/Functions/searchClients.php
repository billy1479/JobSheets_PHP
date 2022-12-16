<?php
require_once __DIR__.'/connect.php';
$x = $_post['x'];
$result = json_decode($x, true);

$clientName = $result['cname'];


$data = $conn->query('SELECT ID from jobs where Client="'.$clientName.'" ORDER BY ID DESC');
while ($data && $row=mysqli_fetch_array(($data))) {
    echo "<option value='".$row['ID']."'>".$row['ID']."</option>";
}
$conn->close();
?>