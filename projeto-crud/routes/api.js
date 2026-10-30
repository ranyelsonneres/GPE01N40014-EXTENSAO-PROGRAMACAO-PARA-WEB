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
    db.query('INSERT INTO usuario (nome, email) VALUES (?, ?)', 
        [nome, email], (err, result) =>{
            if (err) return res.status(500).send(err);
            res.status(201).json({id:result.insertId, nome, email});
        });
});

//rota listar
router.get('/listar', (req, res)=>{
    db.query('SELECT * FROM usuario', (err, results) =>{
        if (err) return res.status(500).send(err);
        res.json(results);
    });

});

//excluir
router.delete('/excluir/:id', (req, res)=>{
    const {id} = req.params;
    db.query('DELETE FROM usuario WHERE id = ?', [id], (err)=>{
        if (err) return res.status(500).send(err);
        res.sendStatus(204);
    });
});

//editar
router.put('/editar/:id', (req, res)=>{
    const {nome, email} = req.body;
    const {id} = req.params;

    db.query('UPDATE usuario SET nome = ?, email = ? WHERE id = ?', 
        [nome, email, id], (err)=>{
             if (err) return res.status(500).send(err);
             res.json({id, nome, email});
        }
    );
});

//exportar as rotas
module.exports = router;
