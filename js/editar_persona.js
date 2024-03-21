const $nombre = document.querySelector("#nombre"),
    $apellido = document.querySelector("#apellido"),
    $apellidoMaterno = document.querySelector("#apellidoMaterno"),
    $rut = document.querySelector("#rut"),
    $correo = document.querySelector("#correo"),
    $profesion = document.querySelector("#profesion"),
    $direccion = document.querySelector("#direccion"),
    $region = document.querySelector("#region"),
    $btnGuardar = document.querySelector("#btnGuardar");

// Una global para establecerla al rellenar el formulario y leerla al enviarlo
let idPersona;

const rellenarFormulario = async () => {

    // https://parzibyte.me/blog/2020/08/14/extraer-parametros-url-javascript/
    const urlSearchParams = new URLSearchParams(window.location.search);
    idPersona = urlSearchParams.get("id"); // <-- Actualizar el ID global
    // Obtener la persona desde PHP
    const respuestaRaw = await fetch(`./obtener_persona_por_id.php?id=${idPersona}`);
    const persona = await respuestaRaw.json();
    // Rellenar formulario
    $nombre.value = persona.nombre;
    $apellido.value = persona.apellido;
    $apellidoMaterno.value = persona.apellidoMaterno;
    $rut.value = persona.rut;
    $correo.value = persona.correo;
    $profesion.value = persona.profesion;
    $direccion.value = persona.direccion;
    $region.value = persona.region;

};

// Al incluir este script, llamar a la función inmediatamente
rellenarFormulario();

$btnGuardar.onclick = async () => {
    // Se comporta igual que cuando guardamos uno nuevo
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
            text: "Escribe el apellido",
            timer: 700, // <- Ocultar dentro de 0.7 segundos
        });
    }

    if (!apellidoMaterno) {
        return Swal.fire({
            icon: "error",
            text: "Escribe el apellido materno",
            timer: 700, // <- Ocultar dentro de 0.7 segundos
        });
    }
    if (!rut) {
        return Swal.fire({
            icon: "error",
            text: "Escribe el rut",
            timer: 700, // <- Ocultar dentro de 0.7 segundos
        });
    }
    if (!correo) {
        return Swal.fire({
            icon: "error",
            text: "Escribe ell correo",
            timer: 700, // <- Ocultar dentro de 0.7 segundos
        });
    }
    if (!profesion) {
        return Swal.fire({
            icon: "error",
            text: "Escribe la profesion",
            timer: 700, // <- Ocultar dentro de 0.7 segundos
        });
    }
    if (!direccion) {
        return Swal.fire({
            icon: "error",
            text: "Escribe la direccion",
            timer: 700, // <- Ocultar dentro de 0.7 segundos
        });
    }
    if (!region) {
        return Swal.fire({
            icon: "error",
            text: "Escribe la region",
            timer: 700, // <- Ocultar dentro de 0.7 segundos
        });
    }
    // Lo que vamos a enviar a PHP. También incluimos el ID
    const cargaUtil = {
        id: idPersona,
        nombre: nombre,
        apellido: apellido,
        apellidoMaterno: apellidoMaterno,
        rut: rut,
        correo: correo,
        profesion: profesion,
        direccion: direccion,
        region: region,

    };
    // Codificamos...
    const cargaUtilCodificada = JSON.stringify(cargaUtil);
    // Enviamos
    try {
        const respuestaRaw = await fetch("actualizar_persona.php", {
            method: "PUT",
            body: cargaUtilCodificada,
        });
        // El servidor nos responderá con JSON
        const respuesta = await respuestaRaw.json();
        if (respuesta) {
            // Y si llegamos hasta aquí, todo ha ido bien
            // Esperamos a que la alerta se muestre
            await Swal.fire({
                icon: "success",
                text: "Persona actualizada",
                timer: 700, // <- Ocultar dentro de 0.7 segundos
            });
            // Redireccionamos a todas las personas
            window.location.href = "./personas.php";
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