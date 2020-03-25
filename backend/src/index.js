
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

var port = 3333;
app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`)
});
