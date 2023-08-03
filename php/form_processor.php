<?php
    $name = $_POST['Name'];
    $visitor_email = $_POST['Email'];
    $message = $_POST['Message'];
    $email_from = 'ehuidav@gmail.com';
    $email_subject = $_POST['Subject'];
    $email_body = "You have a new message from the user $name ($visitor_email). \nHere is the message:\n$message";

    $to = "ehuidav@gmail.com";
    mail($to,$email_subject,$email_body);
?>
