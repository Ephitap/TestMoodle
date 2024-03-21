<?php

function actualizarPersona($nombre, $apellido, $apellidoMaterno, $rut, $correo ,$profesion, $direccion ,$region, $id)
{
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("UPDATE persona SET nombre = ?, apellido = ?, apellidoMaterno = ?,rut = ?, correo = ?, profesion = ?, direccion = ?, region = ?, WHERE id = ?");
    return $sentencia->execute([$nombre, $apellido, $apellidoMaterno, $rut, $correo ,$profesion, $direccion ,$region, $id]);
}

function obtenerPersonaPorId($id)
{
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("SELECT id, nombre, apellido, apellidoMaterno, rut, correo, profesion, direccion, region FROM persona WHERE id = ?");
    $sentencia->execute([$id]);
    return $sentencia->fetchObject();
}

function obtenerpersona()
{
    $bd = obtenerConexion();
    $sentencia = $bd->query("SELECT id, nombre, apellido, apellidoMaterno, rut, correo, profesion, direccion, region FROM persona");
    return $sentencia->fetchAll();
}

function eliminarPersona($id)
{
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("DELETE FROM persona WHERE id = ?");
    return $sentencia->execute([$id]);
}

function guardarPersona($nombre, $apellido, $apellidoMaterno, $rut, $correo ,$profesion, $direccion ,$region)
{
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("INSERT INTO persona( nombre, apellido, apellidoMaterno, rut, correo, profesion, direccion, region) VALUES(?, ?, ?, ?, ?, ?, ?, ?)");
    return $sentencia->execute([$nombre, $apellido, $apellidoMaterno, $rut, $correo ,$profesion, $direccion ,$region]);
}

function obtenerVariableDelEntorno($key)
{
    if (defined("_ENV_CACHE")) {
        $vars = _ENV_CACHE;
    } else {
        $file = "env.php";
        if (!file_exists($file)) {
            throw new Exception("El archivo de las variables de entorno ($file) no existe. Favor de crearlo");
        }
        $vars = parse_ini_file($file);
        define("_ENV_CACHE", $vars);
    }
    if (isset($vars[$key])) {
        return $vars[$key];
    } else {
        throw new Exception("La clave especificada (" . $key . ") no existe en el archivo de las variables de entorno");
    }
}
function obtenerConexion()
{
    $password = obtenerVariableDelEntorno("MYSQL_PASSWORD");
    $user = obtenerVariableDelEntorno("MYSQL_USER");
    $dbName = obtenerVariableDelEntorno("MYSQL_DATABASE_NAME");
    $database = new PDO('mysql:host=localhost;dbname=' . $dbName, $user, $password);
    $database->query("set names utf8;");
    $database->setAttribute(PDO::ATTR_EMULATE_PREPARES, FALSE);
    $database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $database->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
    return $database;
}