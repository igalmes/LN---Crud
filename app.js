require('dotenv').config();

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(expressLayouts); //creamos un middlework que va a saltar el layout cuando se genere la vista

app.use(express.static(__dirname + '/public'));

app.use(require('./router'));

app.use((req, res, next) => {
    res.status(404).send('Not Found')
})

const port = process.env.PORT || 433;

//ejecuto variable de entorno en port 443

app.listen(port, () => console.log(`http://localhost:${port}`));

// node app -> npm install -g nodemon
// nodemon.cmd app
// npm run dev arrancaria nodemon app/ npm run start arrancaria node app (package.json)
// npm install dotenv (maneja variables de entorno para que las veamos y usemos ports .env .ejs)