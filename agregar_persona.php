<?php include_once "encabezado.php" ?>
<div class="columns">
    <div class="column is-one-third">
        <h2 class="is-size-2">Nueva persona</h2>
        <div class="field">
            <label for="nombre">Nombre</label>
            <div class="control">
                <input required id="nombre" class="input" type="text" placeholder="Nombre" name="nombre">
            </div>
        </div>
        <div class="field">
            <label for="apellido">Apellido</label>
            <div class="control">
                <input required id="apellido" class="input" type="Apellido" placeholder=Apellido" name="apellido">
            </div>
        </div>
        <div class="field">
            <label for="apellidoMaterno">Apellido Materno</label>
            <div class="control">
                <input required id="apellidoMaterno" class="input" type="text" placeholder="apellido materno" name="apellidoMaterno">
            </div>
        </div>
        <div class="field">
            <label for="rut">Rut</label>
            <div class="control">
                <input required id="rut" class="input" type="text" placeholder=Rut" name="rut">
            </div>
        </div>
        <div class="field">
            <label for="correo">Correo</label>
            <div class="control">
                <input required id="correo" class="input" type="mail" placeholder="Correo" name="correo">
            </div>
        </div>
        <div class="field">
            <label for="profesion">Profesión</label>
            <div class="control">
                <input required id="profesion" class="input" type="text" placeholder=Profesion" name="profesion">
            </div>
        </div>
        <div class="field">
            <label for="direccion">Dirección</label>
            <div class="control">
                <input required id="direccion" class="input" type="text" placeholder="Direccion" name="direccion">
            </div>
        </div>
        <div class="field">
            <label for="region">Region</label>
            <div class="control">
                <input required id="region" class="input" type="text" placeholder="Region" name="region">
            </div>
        </div>
       
        <div class="field">
        <div class="control">
            <button id="btnGuardar" class="button is-success">Guardar</button>
            <a href="personas.php" class="button is-warning">Volver</a>
        </div>
    </div>
    </div>

    
</div>
</div>
<script src="js/agregar_persona.js"></script>
<?php include_once "pie.php" ?>