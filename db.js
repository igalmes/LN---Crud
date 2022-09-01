require('dotenv').config()

const mysql = require('mysql'); // requerimos el modulo instalado

const connection = mysql.createConnection({
    host: process.env.DB_HOST, // 'localhost' // 127.0.0.1
    user: process.env.DB_USER, //'root'
    password: process.env.DB_PASS, // '',
    database: process.env.DB_NAME, // 'cac_2022'
});

connection.connect(error => {
    if (error) { throw error }
});

// connection.query('SELECT id, Nombre FROM producto', (error, results) => {
//     if (error) { throw error }

//     console.log (results);
// });