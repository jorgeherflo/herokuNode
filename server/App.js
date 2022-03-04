//Archivo para iniciar la Aplicacion Express - App.js

// Constantes express, port y app, para trabajar con express
const express = require('express');

// Requerimos las variables de entorno configuradas en el archivo envJSON.entornos.json 
var envJSON = require('../config/env.entornos.json');

//Puerto por defecto para el Servdiror.
// const port = 3000;

//Entorno de desarrollo.
// var port = envJSON['desarrollo'].PORT;

//Entorno de produccion.
// var port = envJSON['produccion'].PORT;

//Puerto para heroku
const port = process.env.PORT || envJSON['produccion'].PORT;


//Variable aplicacion.
const app = express();


// Motor de plantillas dinamicas EJS 
app.set("view engine", "ejs");
app.set("views", __dirname + "/../views");


//Identificacion de recursos estaticos.
app.use(express.static(__dirname + "/../public"));


//Uso del archivo RutasWeb.js de enrutamiento de nuestra aplicacion.
app.use('/', require('./RutasWeb'));


// Control de error 404 en nuestra aplicacion. 
app.use((req, res, next) => {

  res.status(404).render("404", {titulo: "404", mensaje: "CODIGO 404 - NOT FOUND" })

});

// Configuracion de nuestro servidor Express en el puerto indicado. 
app.listen(port, () => {
    console.log(`Servidor montado con express en el puerto : ${port} , ${__dirname}`);
});

