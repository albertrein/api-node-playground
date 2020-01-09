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
app.post('/nova/categoria/:category', (req, res) => {
	categoria.createCategory(req.params.category, res);	
});
app.post('/nova/job/:jobName', (req, res) => {
	//job.createJob(req.params.jobName, res);
});

//Routes DELETE
app.delete('/excluir/categoria/:categoryName', (req, res) => {
	categoria.deleteCategory(req.params.categoryName, res);
});

app.delete('/excluir/vaga/:jobName', (req, res) => {
	//job.deleteJob(req.params.jobName, res);	
});


app.listen(3000);