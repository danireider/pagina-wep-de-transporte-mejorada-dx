<?php
$conn = new mysqli("localhost", "root", "", "ruta_entrega");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $name, $email, $message);

    if ($stmt->execute()) {
        echo "Mensaje enviado con éxito. Gracias por contactarnos.";
    } else {
        echo "Error al enviar el mensaje: " . $conn->error;
    }
    $stmt->close();
}
$conn->close();
?>