const express = require('express');
const router = express.Router();

// RUTA PRINCIPAL DEVUELVE f(req, res) 
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;