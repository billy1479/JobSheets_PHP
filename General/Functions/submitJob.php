<?php
require_once __DIR__.'/connect.php';
$data = $_POST['x'];
$id = $_POST['id'];
$location = $_POST['location'];
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


// mail to function for the job sheet

$sql = $conn->prepare('INSERT INTO jobs (Date, Client, ponumber, Days, Hours, Engineers, JobDetails, Expenses, Equipment, InvoiceNumber) VALUES (?,?,?,?,?,?,?,?,?,?)');
$sql->bind_param('ssssssssss', $date, $client, $ponumber, $days, $hours, $engineers, $details, $expenses, $equipment, $invoiceNumber);
$sql->execute();

// sends the mail

// this gets the new id
$data = $conn->query('SELECT ID from jobs ORDER BY ID DESC');
$x = 0;
$max = 0;
while ($data && $row=mysqli_fetch_array(($data))) {
    if ($x == 0) {
        $max = $row['ID'];
        $max = $max + 1;
    } else {}
    $x += 1;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/OAuth.php';

date_default_timezone_set('Etc/UTC');

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->SMTPDebug = 4;
$mail->Host = 'smtp.office365.com';
$mail->SMTPOptions = array(
    'ssl' => array('verify_peer' => false, 'verify_peer_name' => false, 'allow_self_signed' => true)
);
$mail->Port = 587;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;
$mail->Username = 'jobsheets@ardenit.net';
$mail->Password = 'Majorlaser50!';
$mail->setFrom('jobsheets@ardenit.net', 'Job Sheets');
$mail->addAddress('bstapleton1911.bs@gmail.com','ToEmail');
$mail->isHTML(true);

// this is for the engineer list
$tempEngineers = '';
foreach ($engineers1 as $x) {
    if ($x == '') {

    } else {
        $tempEngineers = $tempEngineers.'<p> '.$x.' </p>';
    }
}
// expenses:
$totalExpenses = 0;
foreach ($expenses1 as $temp) {
    $totalExpenses = $totalExpenses + $temp;
};


// for details (adds line breaks for the email format)
$details = trim($details);
$details = nl2br($details);
// equipment - total cost
$totalEquipmentCost = 0;
foreach ($equipment1 as $temp1) {
    $totalEquipmentCost = $totalEquipmentCost + $temp1[2];
}
// equipment - total sale
$totalEquipmentSale = 0;
foreach ($equipment1 as $temp2) {
    $totalEquipmentSale = $totalEquipmentSale + $temp2[3];
}

// this removes the blank equipment entries out of the 10 and returns a variable with only the filled in ones returned 
$tempEquipment = '';
$counter = 0;
foreach ($equipment1 as $temp3) {
    if ($temp3[0] == '') {
    } else {
        $tempEquipment = $tempEquipment.'<li>Name: '.$equipment1[$counter][0].', Serial Number: '.$equipment1[$counter][1].', Cost Number: '.$equipment1[$counter][2].', Sale Number: '.$equipment1[$counter][3].'</li>';
        $counter = $counter + 1;
    }
}

$mail->Subject = 'ArdenIT Job Sheet';
$mail->Body = '
    <HTML>
        <body>
        <h2>Job Number - '.$max.'</h2>
        <h2>'.$client.' - '.$date.'</h2>
            <p>Address: '.$location.'</p>
            <p>Engineers:</p>
            '.$tempEngineers.'
            <br>
            <p>Days: '.$days.'</p>
            <p>Hours: '.$hours.'</p>
            <br>
            <p>Job Description:</p>
            <p>'.$details.'</p>
            <br>
            <p>Equipment:</p>
            <ul>'.$tempEquipment.'</ul>
            <p>Total Cost: '.$totalEquipmentCost.'</p>
            <p>Total Sale: '.$totalEquipmentSale.'</p>
            <br>
            <p>Expenses:</p>
            <ul>
                <li>Mileage - '.$expenses1[0].'</li>
                <li>Food - '.$expenses1[1].'</li>
                <li>Postage - '.$expenses1[2].'</li>
                <li>Parking - '.$expenses1[3].'</li>
                <li>Tools - '.$expenses1[4].'</li>
            </ul>
            <p>Total Expenses - '.$totalExpenses.'</p>
            <br>
            <p>Thank you!</p>
        </body>
    </HTML>
';
if (!$mail->send()) {
    echo $mail->ErrorInfo;
} else {
}
$conn->close();
?>