<?php
// database needs creating
require_once __DIR__.'/connect.php';
$data = $conn->query('SELECT ID from jobs ORDER BY ID DESC');
while ($data && $row=mysqli_fetch_array(($data))) {
    echo "<option value='".$row['ID']."'>".$row['ID']."</option>";
}
$conn->close();
?>