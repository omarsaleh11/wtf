<?php
if (isset($_POST['send'])) {
    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $subgect = $_POST['subgect'];
    $massege = $_POST['massege'];
    $to = "osaleh24724@gmail.com";
    $headers = "Form: " . $name;
    $txt = "you have received an e-mail from your website " . $name . ".\n\n" . $massege;
    mail($mail, $subgect, $txt, $headers);
    header("Location: contact.php?mailsend");
}
