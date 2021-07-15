<?php
// $destinatario ='alexander.vidal.torrez@gmail.com';
// esto es al correo al que se enviara el mensaje

// $Nombre = $_POST['nombre'];
// $apellido = $_POST['apellido'];
// $email = $_POST['email'];
// $asunto = $_POST['asunto'];
// $mensaje = $_POST['mensaje'];

// $header = "Enviado desde la página de AlexVidal";
// $mensajeCompleto = $mensaje . "\nAtentamente: " . $Nombre;

// mail($destinatario, $asunto, $mensajeCompleto, $header);
// echo "<script> alert('correo enviado exitosamente')</script>";
// echo "<script> setTimeout(\"location.href='index.html'\", 10000) </script>";



// llamando a los campos
$Nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

$destinatario ='alexander.vidal.torrez@gmail.com';
// esto es al correo al que se enviara el mensaje
$enviado ="enviado desde nuestra web";

$carta = "De: $nombre \n";
$carta .= "Correo:  $email  \n";
$carta .= "Asunto:  $asunto  \n";
$carta .= "Mensaje:  $mensaje";

mail($destinatario, $enviado, $carta);
?>