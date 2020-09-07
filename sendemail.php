<?php

// Define some constants
define( "RECIPIENT_NAME", "Satyajit" );
define( "RECIPIENT_EMAIL", "sroy@sky-bits.com");

// Read the form values
$success = false;
$userName = isset( $_POST['username'] ) ? preg_replace( "/[^\s\S\.\-\_\@a-zA-Z0-9]/", "", $_POST['username'] ) : "";
$senderEmail = isset( $_POST['email'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['email'] ) : "";
$userSubject = isset( $_POST['subject'] ) ? preg_replace( "/[^\s\S\.\-\_\@a-zA-Z0-9]/", "", $_POST['subject'] ) : "";
$message = isset( $_POST['message'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['message'] ) : "";

// If all values exist, send the email
if ( $userName && $senderEmail && $userSubject && $message) {
  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $headers = "From: ".$userName." <".$senderEmail.">\r\nReply-To: ".$senderEmail."";
  $msgBody = $message;
  $subject = $userSubject;
  $success = mail( $recipient,  $subject , $msgBody, $headers );

  //Set Location After Successsfull Submission
  header('Location: message-sent.html?message=Successfull');
}

else{
	//Set Location After Unsuccesssfull Submission
  	header('Location: error.html?message=Failed');	
}

?>