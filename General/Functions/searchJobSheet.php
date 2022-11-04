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
// while ($data && $row=mysqli_fetch_array($data)) {
//     $engineerArray = $row['Engineers'];
// }
// // for checking the engineer array that is returned to see how much of it was taken up
// while ($engineerState == 0 && $counter < count($engineerArray)) {
//     if ($engineerArray[$counter]) {
//         $engineerState = 1;
//         $counter += 1;
//     } else {
//         array_push($engineers, $engineerArray[$counter]);
//         $counter += 1;
//     }
// }
// // for checking the engineers in SQL database against the engineer ID's returned from the form in the jobs database
// while ($engineersQuery && $row=mysqli_fetch_array($$engineersQuery)) {
//     for ($i = 0; $i < count($engineers); $i++) {
//         if ($row['ID'] == $engineers[$i]) {
//             array_push($jobEngineers, $row['Name']);
//         } else {}
//     }
// }
// $counter = 0;


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