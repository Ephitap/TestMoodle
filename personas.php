<?php include_once "encabezado.php" ?>
<div class="columns">
    <div class="column">
        <h2 class="is-size-2">Personal existente</h2>
        <a class="button is-success" href="agregar_persona.php">Nuevo&nbsp;<i class="fa fa-plus"></i></a>
        <table class="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>ApellidoMaterno</th>
                    <th>Rut</th>
                    <th>Correo</th>
                    <th>Profesion</th>
                    <th>Direccion</th>
                    <th>Region</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody id="cuerpoTabla">
            </tbody>
        </table>
    </div>
</div>
<script src="js/personas.js"></script>