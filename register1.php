<?php
$conn = new mysqli("localhost", "root", "", "ruta_entrega");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $name, $email, $password);

    if ($stmt->execute()) {
        echo "Registro exitoso. Por favor, inicia sesión.";
    } else {
        echo "Error al registrar: " . $conn->error;
    }
    $stmt->close();
}
$conn->close();
?>