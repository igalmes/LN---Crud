const express = require('express');
const router = express.Router();

const { body, validationResult } = require('express-validator');

router.get('/contacto', (req, res) => {
    res.render('contacto/index');
})

router.post('/contacto', [
    body('nombre').exists().isLength(3),
] , (req, res) => {
    const errors = validationResult(req);
    console.log(req.body, errors)
    res.send('Enviado...');
})

module.exports = router;
