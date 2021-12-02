const express = require('express')
const bodyParser = require('body-parser');
const connection = require('./databases/database')

//DataBase

connection
.authenticate()
.then(() => {
   console.log("Conection sucessfully")
}).catch((msgErr) => {
   console.log(msErr)
})


const port = 3000
const app = express();

app.set('view engine', 'ejs')
// app.use(express.static('/public/'))
app.use(express.static(__dirname + '/public/'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


 app.get('/', function(req, res){  

    res.render("Conectado!!!")
 });

 app.get('/perguntar', function(req,res){
    res.render("perguntar")
 })

app.post('/salvarPergunta', function(req, res){
   var titulo = req.body.titulo;
   var descricao = req.body.descricao
   res.send("Pergunta enviada titulo: " + titulo + " " + "descricao: " + descricao);
})

 app.listen(port);
 console.log(`Executando guia de perguntas em http://localhost:${port}`)
