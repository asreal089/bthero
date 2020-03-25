const express = require ('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
//origin: www.meuapp => permissionamento de quem acessa o app.
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);