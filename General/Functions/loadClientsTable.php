<?php
require_once __DIR__.'/connect.php';
$data = $conn->query('SELECT ID, Name FROM clients');
echo "<table class='tableClass'>";
echo "<tr>";
echo "<th>ID</th>";
echo "<th>Client Name</th>";
echo "</tr>";
while ($data && $row=mysqli_fetch_array($data)) {
    echo "<tr>";
    echo "<td class='rowtd'>".$row['ID'].":</td>";
    echo "<td class='rowtd'>".$row['Name']."</td>";
    echo "</tr>";
}
echo "</table>";
?>