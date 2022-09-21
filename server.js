const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3300;

app.use(bodyParser.urlencoded({ extend: true }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Connected!!');
});

const usuarioRoutes = require('./src/routes/usuario.routes');

app.use('/api/v1/usuarios', usuarioRoutes)


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});