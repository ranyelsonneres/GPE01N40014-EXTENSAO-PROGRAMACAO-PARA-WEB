//importar o framework
const express = require('express');
const app = express();

//definir o caminho dos arquivos estáticos
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//definir a porta do backend
const port = 3000;

//instanciar a conexão
const db = require('./db');

//rota principal
app.get('/', (req, res) =>{
    //passar o arquivo do front
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    //res.send("Teste");
});

//link com os arquivos de rotas
const apiRoutes = require('./routes/api');
app.use('/api/users', apiRoutes);

app.listen(port, ()=>{
    console.log("backend funcionando");
});
