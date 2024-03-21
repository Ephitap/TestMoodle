const $cuerpoTabla = document.querySelector("#cuerpoTabla");

const obtenerPersonas = async () => {
    // Es una petición GET, no necesitamos indicar el método ni el cuerpo
    const respuestaRaw = await fetch("obtener_personas.php");
    const personas = await respuestaRaw.json();
    // Limpiamos la tabla
    $cuerpoTabla.innerHTML = "";
    // Ahora ya tenemos a las personas. Los recorremos
    for (const persona of personas) {
        // Vamos a ir adjuntando elementos a la tabla.
        const $fila = document.createElement("tr");
        // La celda del nombre
        const $celdaNombre = document.createElement("td");
        // Colocamos su valor y lo adjuntamos a la fila
        $celdaNombre.innerText = persona.nombre;
        $fila.appendChild($celdaNombre);
        // Lo mismo para lo demás
        const $celdaApellido = document.createElement("td");
        $celdaApellido.innerText = persona.apellido;
        $fila.appendChild($celdaApellido);
        const $celdaRut = document.createElement("td");
        $celdaRut.innerText = persona.rut;
        $fila.appendChild($celdaRut);
        const $celdaCorreo = document.createElement("td");
        $celdaCorreo.innerText = persona.correo;
        $fila.appendChild($celdaCorreo);
        const $celdaProfesion = document.createElement("td");
        $celdaProfesion.innerText = persona.profesion;
        $fila.appendChild($celdaProfesion);
        const $celdaDireccion = document.createElement("td");
        $celdaDireccion.innerText = persona.direccion;
        $fila.appendChild($celdaDireccion);
        const $celdaRegion = document.createElement("td");
        $celdaRegion.innerText = persona.region;
        $fila.appendChild($celdaRegion);

        // Extraer el id de persona en el que estamos dentro del ciclo
        const idPersona = persona.id;
        // Link para eliminar
        const $linkEditar = document.createElement("a");
        $linkEditar.href = "./editar_persona.php?id=" + idPersona;
        $linkEditar.innerHTML = `<i class="fa fa-edit"></i>`;
        $linkEditar.classList.add("button", "is-warning");
        const $celdaLinkEditar = document.createElement("td");
        $celdaLinkEditar.appendChild($linkEditar);
        $fila.appendChild($celdaLinkEditar);

        // Para el botón de eliminar primero creamos el botón, agregamos su listener y luego lo adjuntamos a su celda
        const $botonEliminar = document.createElement("button");
        $botonEliminar.classList.add("button", "is-danger")
        $botonEliminar.innerHTML = `<i class="fa fa-trash"></i>`;
        $botonEliminar.onclick = async () => {
          // Código aquí...
        };
        const $celdaBoton = document.createElement("td");
        $celdaBoton.appendChild($botonEliminar);
        $fila.appendChild($celdaBoton);
        // Adjuntamos la fila a la tabla
        $cuerpoTabla.appendChild($fila);
    }
};