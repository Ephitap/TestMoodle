<?php
$cargaUtil = json_decode(file_get_contents("php://input"));
// Si no hay datos, salir inmediatamente indicando un error 500
if (!$cargaUtil) {
   
    http_response_code(500);
    exit;
}
// Extraer valores
$nombre = $cargaUtil->nombre;
$apellido = $cargaUtil->apellido;
$apellidoMaterno = $cargaUtil->$apellidoMaterno;
$rut = $cargaUtil->rut;
$correo = $cargaUtil->correo;
$profesion = $cargaUtil->profesion;
$direccion = $cargaUtil->direccion;
$region = $cargaUtil->region;
include_once "funciones.php";
$respuesta = guardarPersona($nombre, $apellido, $apellidoMaterno, $rut, $correo ,$profesion, $direccion ,$region);
// Devolver al cliente la respuesta de la función
echo json_encode($respuesta);