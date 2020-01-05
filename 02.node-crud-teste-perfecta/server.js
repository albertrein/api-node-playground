const express = require('express');
const app = express();

//Json Comunication
app.use(express.urlencoded())
app.use(express.json())

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
app.delete('/excluir/categoria/:id', (req, res) => {});

app.delete('/excluir/vaga/:id', (req, res) => {
	console.log('/excluir/vaga');
	console.log(req.params.id);
	res.send({"Receive": req.params.id});
});


//Routes GET

app.listen(3000);