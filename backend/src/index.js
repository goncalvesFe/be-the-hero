
const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate'); //sem isso a validação do celebrate retorna um status 500
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

var port = 3333;
app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`)
});
