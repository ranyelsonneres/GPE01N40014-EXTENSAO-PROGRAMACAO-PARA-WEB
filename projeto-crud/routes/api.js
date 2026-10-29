const express = require('express');

//criar as rotas de forma modular
const router = express.Router();

//conectar ao banco
const db = require('../db');

//criar as rotas
//CRUD
//cadastrar
router.post('/cadastrar', (req, res)=>{
    const {nome, email} = req.body; //corpo da requisição oriunda do front
    db.query('INSERT INTO usuarios (nome, email) VALUES (?, ?)', 
        [nome, email], (err, result) =>{
            if (err) return res.status(500).send(err);
            res.status(201).json({id:result.insertId, nome, email});
        });
});

//exportar as rotas
module.exports = router;
