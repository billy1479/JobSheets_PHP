<?php
require_once __DIR__.'/connect.php';
$data = $conn->query('SELECT * FROM engineers');
// will need to add echo for table
// function is already working with JS function written to call it when the page loads
$data = $conn->query('SELECT * FROM engineers');
echo "<table class='tableClass'>";
echo "<tr>";
echo "<th>ID</th>";
echo "<th>Engineer Name</th>";
echo "</tr>";
while ($data && $row=mysqli_fetch_array($data)) {
    echo "<tr>";
    echo "<td class='rowtd'>".$row['ID']."</td>";
    echo "<td class='rowtd'>".$row['Name']."</td>";
    echo "</tr>";
}
echo "</table>";
?>