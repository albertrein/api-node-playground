const express = require('express');
const app = express();

//Models
const Categoria = require('./src/model/categoria/Categoria');
const Vaga = require('./src/model/vaga/Vaga');
const categoria = new Categoria();
//const vaga = new Vaga();

//Json Comunication
app.use(express.urlencoded())
app.use(express.json())

//Controllers
//Routes GET
app.get("/categorias", (req, res) => {
	console.log('teste');
	res.send("<h1>teste</h1>")
});

app.get('/vagas', (req, res) => (
	res.send('<h1>teste</h1>')
));

//Routes POST
app.post('/nova/categoria', (req, res) => {});
app.post('/nova/vaga', (req, res) => {
	console.log('>>','nova/vaga');
	res.send({"ok":"ok"})
});

//Routes DELETE
app.delete('/excluir/categoria/:name', (req, res) => {
	categoria.createCategory(req.params.name);
	res.send({"Received": req.params.name});
});

app.delete('/excluir/vaga/:id', (req, res) => {
	res.send({"Received": req.params.id});
});


//Routes GET

app.listen(3000);