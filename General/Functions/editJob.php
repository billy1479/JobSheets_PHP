<?php
require_once __DIR__.'/connect.php';
$data = $_POST['x'];
$id = $_POST['id'];
$jsondata = json_decode($data, true);

// this is all the various variables for the different columns
$date = $jsondata['date'];
$client = $jsondata['client'];
$ponumber = $jsondata['ponumber'];
$days = $jsondata['days'];
$hours = $jsondata['hours'];
// this will be an array
$engineers = $jsondata['engineers'];
$engineers = json_encode($engineers);
$details = $jsondata['details'];
// this will be an array
$expenses = $jsondata['expenses'];
$expenses = json_encode($expenses);
// this will be an array
$equipment = $jsondata['equipment'];
$equipment = json_encode($equipment);
$invoiceNumber = $jsondata['invoicenumber'];

$sql = $conn->prepare('UPDATE jobs SET Date=?, Client=?, ponumber=?, Days=?, Hours=?, Engineers=?, JobDetails=?, Expenses=?, Equipment=?, InvoiceNumber=? where ID=?');
$sql->bind_param('sssssssssss', $date, $client, $ponumber, $days, $hours, $engineers, $details, $expenses, $equipment, $invoiceNumber, $id);
$sql->execute();
$conn->close();
?>