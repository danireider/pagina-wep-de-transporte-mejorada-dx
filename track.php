<?php
header('Content-Type: application/json');
$conn = new mysqli("localhost", "root", "", "ruta_entrega");

if ($conn->connect_error) {
    die(json_encode(['error' => 'Connection failed']));
}

$tracking = $_GET['tracking'];
$sql = "SELECT latitude, longitude, status FROM packages WHERE tracking_number = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $tracking);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows == 1) {
    $package = $result->fetch_assoc();
    echo json_encode($package);
} else {
    echo json_encode(['error' => 'Paquete no encontrado']);
}

$stmt->close();
$conn->close();
?>