const express = require('express');
const routes = express.Router();

routes.post('/users', (req, res)=> {
    const params  = req.body;
    console.log(params);
    return res.json({
        evento:"Semana oministack 11.0",
        aluno: "Alexandre do Prado Lisboa Siqueira"
    });
});

module.exports = routes;