<?php
// Just for context, this function is bollocks because the engineer array stored in xamp is seen as a string so i cannot iterate through like normal
// This is why i should have used JSON
require_once __DIR__.'/connect.php';
$x = $_POST['x'];

// This gets all the ID and the associated engineers
$data = $conn->query('SELECT ID, Engineers FROM jobs');
$y = [];
// This loops through the engineers and puts aside the ID's of the ones where the primary is $x
while ($data && $row=mysqli_fetch_array($data)) {
    $subArray = [];
    array_push($subArray, $row['Engineers']);
    array_push($subArray, $row['ID']);
    array_push($y, $subArray);
}

$nextArray = [];

foreach ($y as $currentSubArray) {
    $engineerPart = $currentSubArray[0];
    $tally = 0;
    $index = 0;
    $n = '';
    while ($tally < 2) {
        $c = $engineerPart[$index];
        if ($c == '"') {
            $tally += 1;
        } elseif ($c == '[') {

        } else {
            $n = $n . $c;
        }
        $index += 1;
    }
    array_push($nextArray,[$n,$currentSubArray[1]]);
}

$array2 = [];
for ($i=0;$i<count($nextArray);$i++) {
    if ($nextArray[$i][0] == $x) {
        array_push($array2, $nextArray[$i][1]);
    }
}
echo "<option value=''>Please select an ID</option>";
foreach ($array2 as $w) {
    echo "<option value='".$w."'>".$w."</option>";
}
$conn->close();
?>