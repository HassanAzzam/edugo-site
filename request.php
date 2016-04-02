<?php require_once('class.phpmailer.php'); require_once('class.smtp.php');

$to = "support@yackeensolutions.com";
$name = $_POST["name"];
$mail = $_POST["email"];
$title = $_POST["title"];
$org = $_POST["org"];
$comments = $_POST["comm"];
$plan = $_POST["plan"];
$demo = $_POST["isdemo"];

$body = $name . "<br>" . $mail . "<br>" . $title . ", " . $org . "<br>" . $plan . ": ";
if($demo) $body .= "DEMO<br>";
else $body .= "PURCHASE<br>";
$body .= "<br>" . $comments ."<br>";

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->IsHTML(true);
$mail->SMTPAuth   = true;
$mail->Host       = "smtp.gmail.com";
$mail->Port       = 587;
$mail->Username   = "yackeensolutions@gmail.com";
$mail->Password   = "Allah1akbar";
$mail->SMTPSecure = 'tls';
$mail->SetFrom('yackeensolutions@gmail.com', $name);
$mail->Subject    = '[EDUGO]['.$org.']';
$mail->MsgHTML($body);
$mail->AddAddress($to);
$mail->send();
header("Location: http://localhost/edugo-site/");
?>
