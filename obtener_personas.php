<?php
include_once "funciones.php";
$personas = obtenerPersona();
echo json_encode($personas);