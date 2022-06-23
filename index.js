/***
 * Instalar el paquete express
 * > npm i express
 * 
 * Instalar el paquete express-handlebars
 * > npm i express-handlebars
 * 
 * Instalar la ultima version estable de bootstrap
 * > npm i bootstrap
 * 
 * Instalar la ultima version estable de jquery
 * > npm i jquery
 * 
 * Instalar nodemon como dependencia de desarrollo
 * > npm i nodemon -D
 * 
 * Levantar el servidor utilizando nodemon
 * > npx nodemon index.js
 * 
 * Comenzar a programar el proyecto:
 */

const express = require('express');
const app = express();

/* se crea una constante con destructuring para utilizar handlebars. */
const { create } = require('express-handlebars');

app.listen(3000, console.log('Servidor corriendo el http://localhost:3000/'));

/* Se utilizan Middlewares para definir los path o rutas con las carpetas a utilizar. */
/* NOTA IMPORTANTE: las rutas deben comenzas con slash/ sino no validara la ruta. */
/* ruta de la carpeta de bootstrap. */
app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist"));
/* ruta de la carpeta de jquery. */
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));
/* ruta de la carpeta assets que esta dentro de public. */
app.use("/assets", express.static(__dirname + "/public/assets/"));

/* se crea una constante hbs que significa handlebar para crear una ruta con las vistas y la carpeta partials. */
const hbs = create({
    partialDir: ["views/partials"]
})


app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");


/* se crea un arreglo con los nombres de las imagenes, para imprimirlos en el index.html y tambien 
llamar a las imagenes agregandole la extension .png  */
/* Los Helpers son funciones de handlebars para la reproducción de datos que son recibidas en los parciales. */
/* se crea un helpers mensaje para imprimirlo en el index.html */
app.get("/", function (req, res) {
    res.render("dashboard", {
        productos: ['banana', 'cebollas', 'lechuga', 'papas', 'pimenton', 'tomate'],
        mensaje: "Bienvenido al mercado WEB, seleccione sus productos"
    });
})