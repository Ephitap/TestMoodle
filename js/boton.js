const respuestaConfirmacion = await Swal.fire({
    title: "Confirmación",
    text: "¿Eliminar el producto? esto no se puede deshacer",
    icon: 'warning',
    showCancelButton: true,
    cancelButtonColor: '#3085d6',
    confirmButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
});
if (respuestaConfirmacion.value) {
    const url = `./eliminar_persona.php?id=${idPersona}`;
    const respuestaRaw = await fetch(url, {
        method: "DELETE",
    });
    const respuesta = await respuestaRaw.json();
    if (respuesta) {
        Swal.fire({
            icon: "success",
            text: "Producto eliminado",
            timer: 700, // <- Ocultar dentro de 0.7 segundos
        });
    } else {
        Swal.fire({
            icon: "error",
            text: "El servidor no respondió con una respuesta exitosa",
        });
    }
    // De cualquier modo, volver a obtener las personas para refrescar la tabla
    obtenerPersonas();
}