<?php
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
// This is a proper botch way of doing this - should have just used JSON to store data in database - have to loop through the 'string' to find the name of the first engeineer
// foreach ($y as $currentElement) {
//     $tally = 0;
//     $index = 0;
//     $n = '';
//     while ($tally < 2) {
//         $c = $currentElement[$index];
//         if ($c == '"') {
//             $tally += 1;
//         } elseif ($c == '[') {
            
//         } else {
//             $n = $n . $c;
//         }
//     }
// }

$nextArray = [];

foreach ($y as $currentSubArray) {
    $engineerPart = $currentSubArray[0];
    // echo "<option value=''>".$engineerPart."</option>"; 
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
    // echo "<option value=''>".$n."</option>";
    // $y[0] = $n;

    // echo "<option value=''>".$y[0]."</option>";
    array_push($nextArray,[$n,$y[1]]);
}


$array2 = [];

// foreach ($y as $currentSubArray2) {
//     // echo "<option value=''>".$currentSubArray2[0]."</option>";
//     if ($currentSubArray2[0] == $x) {
//         // echo "<option value=''>".$currentSubArray[0]."</option>";
//         array_push($array2,$currentSubArray2[1]);
//     }
// }

for ($i=0;$i<count($nextArray);$i++) {
    // this gives name 
    echo "<option value=''>".$nextArray[$i][0]."</option>";
    // this gives ID
    echo "<option value=''>".$nextArray[$i][1][1]."</option>";
}

// foreach ($array2 as $w) {
//     echo "<option value='".$w."'>".$w."</option>";
// }
// echo "<option value=''>".print_r($y)."</option>";
// echo "<option value=''>".$y[0][0]."</option>";
// echo "<option value=''>".$y[1]."</option>";
// echo "<option value=''>".$y[2]."</option>";
$conn->close();
?>