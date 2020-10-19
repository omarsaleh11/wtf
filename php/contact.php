<?php
if (isset($_POST['send'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['subgect'];
	$massege = $_POST['massege'];

	$to = 'osaleh24724@mail.com'; // Receiver Email ID, Replace with your email ID
	$subject = 'Form Submission';
	$message = "Name :" . $name . "\n" . "subgect :" . $subject . "\n" . "Wrote the following :" . "\n\n" . $massege;
	$headers = "From: " . $email;

	if (mail($to, $subject, $message, $headers)) {
		echo "<h1>Sent Successfully! Thank you" . " " . $name . ", We will contact you shortly!</h1>";
	} else {
		echo "Something went wrong!";
	}
}
