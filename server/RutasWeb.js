
//Archivo de enrutamiento Express - RutasWeb.js

const express = require('express');

const router = express.Router();


router.get('/', (req,res) =>  {
    res.render('index', { bienvenida: "Bienvenido a mi pagina Web" });
});

router.get('/home', (req,res) => {
    res.render('index', {bienvenida: "Bienvenido a mi pagina Web"});
});

router.get('/contacto', (req,res) => {
    res.render('contacto', {});
});

router.get('/nosotros', (req,res) => {
    res.render('nosotros', {});
});

router.get('/Servicios', (req,res) => {
    res.render('Servicios', {});
});

router.get('/contratar', (req,res) => {
    res.render('personal', {});
});

module.exports = router;