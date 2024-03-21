const $nombre = document.querySelector("#nombre"),
    $apellido = document.querySelector("#apellido"),
    $apellidoMaterno = document.querySelector("#apellidoMaterno"),
    $rut = document.querySelector("#rut"),
    $correo = document.querySelector("#correo"),
    $profesion = document.querySelector("#profesion"),
    $direccion = document.querySelector("#direccion"),
    $region = document.querySelector("#region"),
    $btnGuardar = document.querySelector("#btnGuardar");

$btnGuardar.onclick = async () => {
    const nombre = $nombre.value,
        apellido = $apellido.value,
        apellidoMaterno = $apellidoMaterno.value,
        rut = $rut.value,
        correo = $correo.value,
        profesion = $profesion.value,
        direccion = $direccion.value,
        region = $region.value;
        
    // Pequeña validación, aunque debería hacerse del lado del servidor igualmente, aquí es pura estética
    if (!nombre) {
        return Swal.fire({
            icon: "error",
            text: "Escribe el nombre",
            timer: 700, // <- Ocultar dentro de 0.7 segundos
        });
    }
    if (!apellido) {
        return Swal.fire({
            icon: "error",
            text: "Escribe la descripción",
            timer: 700, // <- Ocultar dentro de 0.7 segundos
        });
    }
    if (!apellidoMaterno) {
        return Swal.fire({
            icon: "error",
            text: "Escribe el nombre",
            timer: 700, // <- Ocultar dentro de 0.7 segundos
        });
    }
    if (!rut) {
        return Swal.fire({
            icon: "error",
            text: "Escribe el nombre",
            timer: 700, // <- Ocultar dentro de 0.7 segundos
        });
    }
    if (!correo) {
        return Swal.fire({
            icon: "error",
            text: "Escribe el nombre",
            timer: 700, // <- Ocultar dentro de 0.7 segundos
        });
    }
    if (!profesion) {
        return Swal.fire({
            icon: "error",
            text: "Escribe el nombre",
            timer: 700, // <- Ocultar dentro de 0.7 segundos
        });
    }
    if (!direccion) {
        return Swal.fire({
            icon: "error",
            text: "Escribe el nombre",
            timer: 700, // <- Ocultar dentro de 0.7 segundos
        });
    }
    if (!region) {
        return Swal.fire({
            icon: "error",
            text: "Escribe el nombre",
            timer: 700, // <- Ocultar dentro de 0.7 segundos
        });
    }

    
    // Lo que vamos a enviar a PHP
    const cargaUtil = {
        nombre: nombre,
        apellido: apellido,
        apellidoMaterno: apellidoMaterno,
        rut: rut,
        correo: correo,
        profesion: profesion,
        direccion: direccion,
        region: region
    };
    // Codificamos...
    const cargaUtilCodificada = JSON.stringify(cargaUtil);
    // Enviamos
    try {
        const respuestaRaw = await fetch("guardar_persona.php", {
            method: "POST",
            body: cargaUtilCodificada,
        });
        // El servidor nos responderá con JSON
        const respuesta = await respuestaRaw.json();
        if (respuesta) {

            // Y si llegamos hasta aquí, todo ha ido bien
            Swal.fire({
                icon: "success",
                text: "Persona guardada guardada",
                timer: 700, // <- Ocultar dentro de 0.7 segundos
            });
            // Limpiamos el formulario
            $nombre.value = $apellido.value = $apellidoMaterno.value = 
            $rut.value = $correo.value = $profesion.value = 
            $direccion.value = $region.value = "";
        } else {
            Swal.fire({
                icon: "error",
                text: "El servidor no envió una respuesta exitosa",
            });
        }
    } catch (e) {
        // En caso de que haya un error
        Swal.fire({
            icon: "error",
            title: "Error de servidor",
            text: "Inténtalo de nuevo. El error es: " + e,
        });
    }
};