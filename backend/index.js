const express = require ('express');
const app = express();

app.get('/', (req, res)=> {
    return res.json({
        evento:"Semana oministack 11.0",
        aluno: "Alexandre Siqueira"
    });
});

app.listen(3333);