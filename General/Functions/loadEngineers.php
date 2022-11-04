<?php
require_once __DIR__.'/connect.php';
$data = $conn->query('SELECT ID, Name from engineers ORDER BY Name asc');
echo "<option value=''>Select Engineer:</option>";
while ($data && $row = mysqli_fetch_array($data)) {
    echo "<option value='".$row['Name']."'>".$row['Name']."</option>";
}
$conn->close();
?>