<?php
// Details will need to be updated for local server
$username = '';
$password = '';
$servername = '';
$dbname = 'jobs2';
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed");
}
?>