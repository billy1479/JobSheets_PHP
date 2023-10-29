<?php
require_once __DIR__.'/connect.php';
$id = $_POST['ID'];
$data = $conn->query('SELECT * FROM jobs where ID="'.$id.'"');
$engineersQuery = $conn->query('SELECT * FROM engineers');
$counter = 0;

// for the engineers
$engineerID = 0;
$engineerState = 0;
$engineers = array();
$jobEngineers = array();

// equipment and expenses don't need to be outputted in a particular order because they are
// imported in the way they are entered so the output will look the same

while ($data && $row=mysqli_fetch_array($data)) {
    $counter = $counter + 1;
    $jsonObject = json_encode(array("Date" => $row['Date'], "Client" => $row['Client'], "PONumber" => $row['ponumber'], "Days" => $row['Days'], "Hours" => $row['Hours'], "Engineers" => json_encode(array($row['Engineers'])), "Details" => $row['JobDetails'], "Expenses" => $row["Expenses"], "Equipment" => $row["Equipment"], "InvoiceNumber" => $row['InvoiceNumber']));
}
if ($counter == 0) {
    echo "<script>myObject = '';</script>";
} else {
    echo "<script>myObject = ".$jsonObject.";</script>";
}
?>