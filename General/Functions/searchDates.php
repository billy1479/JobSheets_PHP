<?php
require_once __DIR__.'/connect.php';
$x = $_POST['x'];
$data = json_decode($x, true);

$date1 = $data['date1'];
$date2 = $data['date2'];
// $client = $data['cname'];

// This is an IF statement that sees which type of SQL search we should do based off the inputs
// if ($client = null) {
//     $client = 'Client';
// } else {}

$data = $conn->query('SELECT ID FROM jobs WHERE CAST(Date as date) BETWEEN "'.$date1.'" AND "'.$date2.'"');
echo "<option value=''>Please select an ID</option>";
while ($data && $row=mysqli_fetch_array(($data))) {
    echo "<option value='".$row['ID']."'>".$row['ID']."</option>";
}

$conn->close();
?>