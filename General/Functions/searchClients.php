<?php
require_once __DIR__.'/connect.php';
$x = $_POST['x'];
$result = json_decode($x, true);

$clientName = $result['cname'];
$sqlStatement = 'SELECT ID from jobs where Client="'.$clientName.'"';

$data = $conn->query($sqlStatement);
echo "<option value=''>Please select an ID</option>";
while ($data && $row=mysqli_fetch_array(($data))) {
    echo "<option value='".$row['ID']."'>".$row['ID']."</option>";
}
$conn->close();
?>