const express = require('express');
const router = express.Router();

const productos = require('./productos');

// RUTA PPAL LLEGA A LA BARRA Y LUEGO DEVUELVE f(req, res) 
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/productos', (req, res) => {
    res.render('productos/index', { productos: productos.all() });
}) //creando para la vista de los productos desde el modulo productos el array.

router.get('/productos/:id', (req, res) => {
    res.render('productos/show', { producto: productos.find(req.params.id) });
});
    //el id es cualquier cosa que le siga a la barra


module.exports = router;