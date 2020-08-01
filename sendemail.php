<?php
// Define some constants

define( "RECIPIENT_NAME", "Bishal Sen" ); 
define( "RECIPIENT_EMAIL", "bishal9577132889@gmail.com" );


// Read the form values
$success = false;
$userName = isset( $_GET['username'] ) ? preg _replace( "/[*\s\S\.\-\_\@a-zA-Z0-9]/", "", $_GET['username'] ) : "";
$senderEmail = isset( $_GET['email'] ) ? preg_replace( "/[*\.\-\_\@a-zA-2@-9]/", "", $_GET['email'] ) : "";
$userPhone = isset( $_GET['phone'] ) ? preg replace( "/[*\s\S\.\-\_\@a-zA-Z0-9]/", "", $_GET['phone'] ) : "";
$userSubject = isset( $_GET['subject'] ) ? preg_replace( "/[*\s\S\.\-\_\@a-zA-Z0-9]/", "", $_GET['subject'] ) : "";
$message = isset( $_GET['message'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/","", $_GET['message'] ) : "";


// If all values exist, send the email
if ( $userName && $senderEmail && $userPhone && $userSubject && $message) {

$recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
$headers = "From: " . $userName . "";
$msgBody = " Name: ". $userName . " Email: ". $senderEmail . " Phone: ". $userPhone . " Subject: ". $userSubject . " Message: " . $message"";
$success = mail{ $recipient, $headers, $msgBody );

//Set Location After Successsfull Submission
header( 'Location: contact.html?message=Successfull');

}

else{

//Set Location After Unsuccesssfull Submission
header( 'Location: contact.html?message=Failed');

}

?>