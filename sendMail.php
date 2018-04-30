<?php
/**
 * This example shows how to handle a simple contact form.
 */
//Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
$msg = '';
//Don't run this unless we're handling a form submission
if (array_key_exists('email', $_POST)) {
    date_default_timezone_set('Etc/UTC');
    require '../vendor/autoload.php';
    //Create a new PHPMailer instance
    $mail = new PHPMailer;
    //Tell PHPMailer to use SMTP - requires a local mail server
    //Faster and safer than using mail()
    $mail->isSMTP();
    $mail->Host = 'localhost';
    $mail->Port = 25;
    //Use a fixed address in your own domain as the from address
    //**DO NOT** use the submitter's address here as it will be forgery
    //and will cause your messages to fail SPF checks
    $mail->setFrom('from@example.com', 'Имя Фамилия');
    //Send the message to yourself, or whoever should receive contact for submissions
    $mail->addAddress('whoto@example.com', 'Иван Иванов');
    //Put the submitter's address in a reply-to header
    //This will fail if the address provided is invalid,
    //in which case we should ignore the whole request
    if ($mail->addReplyTo($_POST['email'], $_POST['name'])) {
        $mail->Subject = 'PHPMailer contact form';
        //Keep it simple - don't use HTML
        $mail->isHTML(false);
        //Build a simple message body
        $mail->Body = <<<EOT
Name: {$_POST['name']}
Phone: {$_POST['phone']}
Email: {$_POST['email']}
Message: {$_POST['message']}
EOT;
        //Send the message, check for errors
        if (!$mail->send()) {
            //The reason for failing to send will be in $mail->ErrorInfo
            //but you shouldn't display errors to users - process the error, log it on your server.
            $msg = 'Извините, произошла ошибка. Пожалуйста, попытайтесь отправить ваше сообщение снова.';
        } else {
            $msg = 'Сообщение успешно отправлено!';
        }
    } else {
        $msg = 'Неверный адрес электронной почты, сообщение не отправлено.';
    }
}
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Связаться с нами</title>
</head>
<body>

<?php if (!empty($msg)) {
    echo "<h2>$msg</h2>";
} ?>

</body>
</html>