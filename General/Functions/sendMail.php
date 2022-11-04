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
$engineerNames = implode(', ', $engineers1);
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

$mail->Subject = 'ArdenIT Job Sheet';
$mail->Body = '
    <HTML>
        <body>
        <h2>This job sheet has been resubmitted</h3>
        <h2>'.$client.' - '.$date.' - Job Number: '.$id.'</h2>
            <p>Address: '.$location.'</p>
            <p>Engineers: '.$engineerNames.'</p>
            <p>Days: '.$days.'</p>
            <p>Hours: '.$hours.'</p>
            <p>Job Description:</p>
            <p>'.$details.'</p>
            <p>Expenses:</p>
            <ul>
                <li>Mileage - '.$expenses1[0].'</li>
                <li>Food - '.$expenses1[1].'</li>
                <li>Postage - '.$expenses1[2].'</li>
                <li>Parking - '.$expenses1[3].'</li>
                <li>Tools - '.$expenses1[4].'</li>
            </ul>
            <p>Total Expenses - '.$totalExpenses.'</p>
            <p>Equipment:</p>
            <ul>
                <li>Name: '.$equipment1[0][0].', Serial Number: '.$equipment1[0][1].', Cost Number: '.$equipment1[0][2].', Sale Number: '.$equipment1[0][3].'</li>
                <li>Name: '.$equipment1[1][0].', Serial Number: '.$equipment1[1][1].', Cost Number: '.$equipment1[1][2].', Sale Number: '.$equipment1[1][3].'</li>
                <li>Name: '.$equipment1[2][0].', Serial Number: '.$equipment1[2][1].', Cost Number: '.$equipment1[2][2].', Sale Number: '.$equipment1[2][3].'</li>
                <li>Name: '.$equipment1[3][0].', Serial Number: '.$equipment1[3][1].', Cost Number: '.$equipment1[3][2].', Sale Number: '.$equipment1[3][3].'</li>
                <li>Name: '.$equipment1[4][0].', Serial Number: '.$equipment1[4][1].', Cost Number: '.$equipment1[4][2].', Sale Number: '.$equipment1[4][3].'</li>
                <li>Name: '.$equipment1[5][0].', Serial Number: '.$equipment1[5][1].', Cost Number: '.$equipment1[5][2].', Sale Number: '.$equipment1[5][3].'</li>
                <li>Name: '.$equipment1[6][0].', Serial Number: '.$equipment1[6][1].', Cost Number: '.$equipment1[6][2].', Sale Number: '.$equipment1[6][3].'</li>
                <li>Name: '.$equipment1[7][0].', Serial Number: '.$equipment1[7][1].', Cost Number: '.$equipment1[7][2].', Sale Number: '.$equipment1[7][3].'</li>
                <li>Name: '.$equipment1[8][0].', Serial Number: '.$equipment1[8][1].', Cost Number: '.$equipment1[8][2].', Sale Number: '.$equipment1[8][3].'</li>
                <li>Name: '.$equipment1[9][0].', Serial Number: '.$equipment1[9][1].', Cost Number: '.$equipment1[9][2].', Sale Number: '.$equipment1[9][3].'</li>
            </ul>
            <p>Total Cost: '.$totalEquipmentCost.'</p>
            <p>Total Sale: '.$totalEquipmentSale.'</p>
            <p>Thank you!</p>
        </body>
    </HTML>
';
if (!$mail->send()) {
    echo $mail->ErrorInfo;
} else {
}