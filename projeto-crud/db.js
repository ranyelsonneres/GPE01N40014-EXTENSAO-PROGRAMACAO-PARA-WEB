const mysql = require('mysql2');

//criar a instancia de conexão (credenciais
const db = mysql.createConnection({
    host: 'localhost', //127.0.0.1
    user: 'root',
    password: 'admin123',
    database: 'usuariodb',
    port: '3306'
});

//estabelecer a conexão
db.connect(err =>{
    if (err) throw err;
    console.log("conectado ao banco de dados");
});

//exportar o arquivo de conexão
module.exports = db;
