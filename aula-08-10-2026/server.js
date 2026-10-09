const express = require('express');
const app = express()
const port = 3000

app.use(express.static('public'));

//trabalha sobre rotas
app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/sobre', (req, res) =>{
    res.send('Página Sobre');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
