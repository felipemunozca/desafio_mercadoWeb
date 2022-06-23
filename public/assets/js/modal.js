/* evento clic al presionar el icono del carrito, aparecera el modal para cargar las imagenes. */
$('#modalCarrito').click(() =>{
    let productos = JSON.parse(localStorage.getItem("productos"))
    let prod = '';
    productos.forEach( elemento => prod += `
        <div class="producto col-4"> <img width="100" src="assets/img/${elemento}.png" alt="">  </div>
    `);
    $('#productos').html(prod);
})