const express = require('express');
const app = express();

//Models
const Categoria = require('./src/model/category/Category');
const Job = require('./src/model/job/Job');
const categoria = new Categoria();
//const job = new Job();

//Json Comunication
app.use(express.urlencoded())
app.use(express.json())

//Controllers
//Routes GET
app.get("/categorys", (req, res) => {
	res.send(category.getAllCategorys);
});

app.get('/jobs', (req, res) => {
	//res.send(job.getAllJobs);
});

//Routes POST
app.post('/new/category/:category', (req, res) => {
	categoria.createCategory(req.params.category, res);	
});
app.post('/new/job/:jobName', (req, res) => {
	//job.createJob(req.params.jobName, res);
});

//Routes DELETE
app.delete('/delete/category/:categoryName', (req, res) => {
	categoria.deleteCategory(req.params.categoryName, res);
});

app.delete('/delete/job/:jobName', (req, res) => {
	//job.deleteJob(req.params.jobName, res);	
});


app.listen(3000);