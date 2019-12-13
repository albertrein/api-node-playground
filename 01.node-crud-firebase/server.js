const express = require('express')
const app = express()
app.use(express.urlencoded())
app.use(express.json())

const fireDB = require('./src/config/firebase')

app.get("/", (req, res) => {
	res.send('<h1>teste CRUD Firebase</h1><a href="/new-category">Nova Categoria</a>')
})

app.get("/new-category", (req, res) => {
	let form = '<form action="/new-category" method="POST"> <input type="text" name="categoria" placeholder="categoria"><input type="text" name="descricaoCategoria" placeholder="Descrição Categoria"><input type="submit" value="Salvar!"> </form><br><br> <form action="/new-category" method="DELETE"> <input type="text" name="categoria" placeholder="categoria"><input type="submit" value="Excluir!"></form>'
	res.send(form)
})

app.post("/new-category", (req, res) => {
	let ref = fireDB.ref("perfecta")
	
	let usersRef = ref.child(req.body.categoria)
	usersRef.set(req.body)

	console.log(req.body)
	res.send('OK')
})

app.delete("/new-category", (req, res) => {
	console.log(req.body)
	res.send('ok')
	//ref = fireDB.ref("perfecta")
	//ref.child(req.body.categoria).remove()
})

app.listen(3001, _ => {console.warn('Executando!')})