<div class="columns">
    <div class="column is-one-third">
        <h2 class="is-size-2">Nuevo producto</h2>
        <div class="field">
            <label for="nombre">Nombre</label>
            <div class="control">
                <input required id="nombre" class="input" type="text" placeholder="Nombre" name="nombre">
            </div>
        </div>
        <div class="field">
            <label for="descripcion">Descripción</label>
            <div class="control">
                <textarea name="descripcion" class="textarea" id="descripcion" cols="30" rows="5" placeholder="Descripción" required></textarea>
            </div>
        </div>
        <div class="field">
            <label for="precio">Precio</label>
            <div class="control">
                <input required id="precio" name="precio" class="input" type="number" placeholder="Precio">
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
<script src="js/agregar_persona.js"></script>