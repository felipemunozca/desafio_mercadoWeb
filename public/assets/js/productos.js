/* arreglo vacio para cargar las imagenes. */
let productos = [];

/* la informacion de las imagenes se cargara de forma local, si actualizo la pagino, las imagenes seleccionadas se resetean. */
localStorage.setItem('productos', JSON.stringify(productos));

/* evento click para seleccionar una imagen, y utilizando la clase seleccionado, cambiar la transparancia con CSS. */
$(".producto").on("click", function(e) {
    $(this).addClass("seleccionado");
    let productos = JSON.parse(localStorage.getItem("productos"));
    let existe = productos.find(producto => producto === this.id);
    if(!existe){
        productos.push(this.id);
        localStorage.setItem('productos', JSON.stringify(productos));
    }
});

/* evento doble click para deseleccionar la imagen y remover la clase CSS. */
$(".producto").on("dblclick", function() {
    $(this).removeClass("seleccionado");
    let productos = JSON.parse(localStorage.getItem("productos"));
    productos = productos.filter( producto => producto !== this.id);
    localStorage.setItem('productos', JSON.stringify(productos));
});
