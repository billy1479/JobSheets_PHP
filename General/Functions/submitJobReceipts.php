<?php
require_once __DIR__.'/connect.php';
$data = $_POST['x'];
$jsondata = json_decode($data, true);

// this is all the various variables for the different columns
$date = $jsondata['date'];
$client = $jsondata['client'];
$ponumber = $jsondata['ponumber'];
$days = $jsondata['days'];
$hours = $jsondata['hours'];
// this will be an array
$engineers = $jsondata['engineers'];
$engineers1 = $jsondata['engineers'];
$engineers = json_encode($engineers);
$details = $jsondata['details'];
// this will be an array
$expenses = $jsondata['expenses'];
$expenses1 = $jsondata['expenses'];
$expenses = json_encode($expenses);
// this will be an array
$equipment = $jsondata['equipment'];
$equipment1 = $jsondata['equipment'];
$equipment = json_encode($equipment);
$invoiceNumber = $jsondata['invoicenumber'];

$sql = $conn->prepare('INSERT INTO jobs (Date, Client, ponumber, Days, Hours, Engineers, JobDetails, Expenses, Equipment, InvoiceNumber) VALUES (?,?,?,?,?,?,?,?,?,?)');
$sql->bind_param('ssssssssss', $date, $client, $ponumber, $days, $hours, $engineers, $details, $expenses, $equipment, $invoiceNumber);
$sql->execute();
?>