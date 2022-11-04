<?php
require_once __DIR__.'/connect.php';
$data = $conn->query('SELECT * FROM engineers');
// will need to add echo for table
// function is already working with JS function written to call it when the page loads

?>