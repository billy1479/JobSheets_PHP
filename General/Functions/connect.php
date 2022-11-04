<?php
// details will need to be changed for the arden local server
$username = 'root';
$password = '';
$servername = 'localhost';
$dbname = 'jobs';
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed");
} else {
    // nothing
}
?>